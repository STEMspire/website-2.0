import React, { useEffect, useMemo, useState } from 'react';
import { ArrowLeft, ArrowUpRight } from 'lucide-react';
import PageIntro from '../PageIntro';
import { careers, Career, Chart, Task } from '../../data/careers';

/* ---------- Saved progress ---------- */

const STORAGE_KEY = 'stemspire-career-quest-v2';

interface SaveData {
  badges: Record<string, boolean>;
  // Index of the next task to play, per career
  progress: Record<string, number>;
}

const loadSave = (): SaveData => {
  try {
    const data = JSON.parse(localStorage.getItem(STORAGE_KEY) || '{}');
    return { badges: data.badges || {}, progress: data.progress || {} };
  } catch {
    return { badges: {}, progress: {} };
  }
};

const writeSave = (data: SaveData) => {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  } catch {
    // Storage can be unavailable (private mode); progress just won't persist
  }
};

/* ---------- Helpers ---------- */

const shuffle = <T,>(items: T[]) => {
  const a = [...items];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
};

const TYPE_LABELS: Record<string, string> = { code: 'Code', chart: 'Chart', quiz: 'Quiz', order: 'Order', sort: 'Sort' };

const taskKind = (task: Task) => (task.type === 'quiz' && task.chart ? 'chart' : task.type);

const missionSummary = (career: Career) =>
  [...new Set(career.tasks.map(taskKind))].map((k) => TYPE_LABELS[k]).join(' · ');

type Feedback = { ok: boolean; title: string; text: string } | null;

interface TaskProps<T> {
  task: T;
  doneLabel: string;
  onDone: () => void;
}

const FeedbackBox = ({ feedback, action }: { feedback: Feedback; action?: React.ReactNode }) =>
  feedback ? (
    <div
      className={`mt-5 flex flex-wrap items-center justify-between gap-3 border px-4 py-3 ${
        feedback.ok ? 'border-green-700 bg-green-50' : 'border-red-700 bg-red-50'
      }`}
      role="status"
    >
      <p className="min-w-[200px] flex-1 text-sm">
        <span className="font-semibold">{feedback.title}</span> {feedback.text}
      </p>
      {action}
    </div>
  ) : null;

const choiceClass = (state: 'idle' | 'right' | 'wrong') =>
  `border px-4 py-3 text-left text-sm font-medium transition-colors ${
    state === 'right'
      ? 'border-navy bg-navy text-white'
      : state === 'wrong'
        ? 'border-gray-200 text-gray-400 line-through'
        : 'border-gray-300 bg-white hover:border-navy hover:bg-navy-light'
  }`;

const Prompt = ({ children }: { children: React.ReactNode }) => (
  <p className="mb-4 font-mono text-lg font-semibold leading-snug text-ink">{children}</p>
);

/* ---------- Chart ---------- */

const BarChart = ({ labels, values, unit }: Chart) => {
  const W = 440, H = 220, L = 36, B = 28, T = 26;
  const rawMax = Math.max(...values);
  const step = [1, 2, 5, 10, 20, 25, 50, 100].find((s) => Math.ceil(rawMax / s) <= 6) ?? 100;
  const max = Math.ceil(rawMax / step) * step;
  const bw = (W - L - 8) / values.length;
  const y = (v: number) => H - B - (v / max) * (H - B - T);
  const ticks = Array.from({ length: max / step + 1 }, (_, i) => i * step);

  return (
    <svg
      viewBox={`0 0 ${W} ${H}`}
      className="mb-5 w-full max-w-md"
      role="img"
      aria-label={`Bar chart of ${unit}: ${labels.map((l, i) => `${l} ${values[i]}`).join(', ')}`}
    >
      <text x={0} y={11} className="fill-gray-600 text-[11px]">{unit}</text>
      {ticks.map((t) => (
        <g key={t}>
          <line x1={L} x2={W - 4} y1={y(t)} y2={y(t)} className="stroke-gray-200" />
          <text x={L - 6} y={y(t) + 4} textAnchor="end" className="fill-gray-500 text-[11px]">{t}</text>
        </g>
      ))}
      {values.map((v, i) => (
        <g key={labels[i]}>
          <rect x={L + i * bw + bw * 0.22} y={y(v)} width={bw * 0.56} height={H - B - y(v)} className="fill-navy" />
          <text x={L + i * bw + bw / 2} y={y(v) - 5} textAnchor="middle" className="fill-navy text-[11px] font-semibold">
            {v}
          </text>
          <text x={L + i * bw + bw / 2} y={H - B + 17} textAnchor="middle" className="fill-gray-700 text-[11px]">
            {labels[i]}
          </text>
        </g>
      ))}
    </svg>
  );
};

/* ---------- Task types ---------- */

const QuizTask = ({ task, doneLabel, onDone }: TaskProps<Extract<Task, { type: 'quiz' }>>) => {
  const [wrong, setWrong] = useState<number[]>([]);
  const [solved, setSolved] = useState(false);

  const pick = (k: number) => {
    if (solved) return;
    if (k === task.answer) setSolved(true);
    else setWrong([...wrong, k]);
  };

  return (
    <div>
      {task.chart && <BarChart {...task.chart} />}
      <Prompt>{task.q}</Prompt>
      <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
        {task.choices.map((c, k) => (
          <button
            key={c}
            onClick={() => pick(k)}
            disabled={solved || wrong.includes(k)}
            className={choiceClass(solved && k === task.answer ? 'right' : wrong.includes(k) ? 'wrong' : 'idle')}
          >
            {c}
          </button>
        ))}
      </div>
      <FeedbackBox
        feedback={
          solved
            ? { ok: true, title: 'Correct!', text: task.why }
            : wrong.length
              ? { ok: false, title: 'Not quite.', text: 'Give it another try.' }
              : null
        }
        action={solved && <button onClick={onDone} className="btn-primary py-2">{doneLabel}</button>}
      />
    </div>
  );
};

const OrderTask = ({ task, doneLabel, onDone }: TaskProps<Extract<Task, { type: 'order' }>>) => {
  const [options] = useState(() => shuffle(task.items));
  const [placed, setPlaced] = useState(0);
  const [feedback, setFeedback] = useState<Feedback>(null);
  const finished = placed === task.items.length;

  const pick = (item: string) => {
    if (item === task.items[placed]) {
      const n = placed + 1;
      setPlaced(n);
      setFeedback(n === task.items.length ? { ok: true, title: 'All in order!', text: task.why } : null);
    } else {
      setFeedback({ ok: false, title: 'Not next.', text: `“${item}” comes later. What comes before it?` });
    }
  };

  return (
    <div>
      <Prompt>Put these in order: {task.prompt}</Prompt>
      <ol className="mb-4 grid gap-1.5">
        {task.items.map((item, k) => (
          <li
            key={item}
            className={`border px-4 py-2 font-mono text-sm ${
              k < placed ? 'border-navy bg-navy-light text-navy' : 'border-dashed border-gray-300 text-gray-400'
            }`}
          >
            {k + 1}. {k < placed ? item : '—'}
          </li>
        ))}
      </ol>
      {!finished && (
        <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
          {options
            .filter((item) => task.items.indexOf(item) >= placed)
            .map((item) => (
              <button key={item} onClick={() => pick(item)} className={choiceClass('idle')}>
                {item}
              </button>
            ))}
        </div>
      )}
      <FeedbackBox
        feedback={feedback}
        action={finished && <button onClick={onDone} className="btn-primary py-2">{doneLabel}</button>}
      />
    </div>
  );
};

const SortTask = ({ task, doneLabel, onDone }: TaskProps<Extract<Task, { type: 'sort' }>>) => {
  const [items] = useState(() => shuffle(task.items));
  const [index, setIndex] = useState(0);
  const [feedback, setFeedback] = useState<Feedback>(null);
  const finished = index === items.length;

  const pick = (binId: string) => {
    const item = items[index];
    if (binId === item.bin) {
      setIndex(index + 1);
      setFeedback(index + 1 === items.length ? { ok: true, title: 'Everything sorted!', text: task.why } : null);
    } else {
      const right = task.bins.find((b) => b.id === item.bin)!;
      setFeedback({ ok: false, title: 'Hmm.', text: `Hint: think about “${right.hint}”.` });
    }
  };

  if (finished) {
    return (
      <div>
        <Prompt>{task.prompt}</Prompt>
        <FeedbackBox feedback={feedback} action={<button onClick={onDone} className="btn-primary py-2">{doneLabel}</button>} />
      </div>
    );
  }

  const item = items[index];
  return (
    <div>
      <Prompt>{task.prompt}</Prompt>
      <p className="font-mono text-xs uppercase tracking-wider text-gray-500">
        Item {index + 1} of {items.length}
      </p>
      <div className="my-6 text-center">
        {item.emoji && <div className="mb-1 text-5xl" aria-hidden="true">{item.emoji}</div>}
        <div className="font-mono text-2xl font-semibold text-ink">{item.name}</div>
      </div>
      <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
        {task.bins.map((bin) => (
          <button key={bin.id} onClick={() => pick(bin.id)} className={`${choiceClass('idle')} py-4 text-center`}>
            <span className="block font-mono text-base font-semibold">{bin.label}</span>
            <span className="block text-xs text-gray-500">{bin.hint}</span>
          </button>
        ))}
      </div>
      <FeedbackBox feedback={feedback} />
    </div>
  );
};

const DIRS = { up: [0, -1], down: [0, 1], left: [-1, 0], right: [1, 0] } as const;
type Dir = keyof typeof DIRS;
const ARROWS: Record<Dir, string> = { up: '↑', down: '↓', left: '←', right: '→' };
type Point = [number, number];

const parseMap = (map: string[]) => {
  let start: Point = [0, 0];
  let goal: Point = [0, 0];
  const walls = new Set<string>();
  map.forEach((row, y) =>
    [...row].forEach((c, x) => {
      if (c === 'S') start = [x, y];
      if (c === 'G') goal = [x, y];
      if (c === '#') walls.add(`${x},${y}`);
    }),
  );
  return { size: map.length, start, goal, walls };
};

// Breadth-first search for the fewest moves from start to goal
const shortestPath = ({ size, start, goal, walls }: ReturnType<typeof parseMap>) => {
  const seen = new Set([start.join(',')]);
  let frontier: Point[] = [start];
  for (let d = 0; frontier.length; d++) {
    const next: Point[] = [];
    for (const [x, y] of frontier) {
      if (x === goal[0] && y === goal[1]) return d;
      for (const [dx, dy] of Object.values(DIRS)) {
        const key = `${x + dx},${y + dy}`;
        if (x + dx < 0 || y + dy < 0 || x + dx >= size || y + dy >= size || walls.has(key) || seen.has(key)) continue;
        seen.add(key);
        next.push([x + dx, y + dy]);
      }
    }
    frontier = next;
  }
  return Infinity;
};

const CodeTask = ({ task, doneLabel, onDone }: TaskProps<Extract<Task, { type: 'code' }>>) => {
  const maze = useMemo(() => parseMap(task.map), [task.map]);
  const shortest = useMemo(() => shortestPath(maze), [maze]);
  const maxMoves = shortest + 6;
  const [program, setProgram] = useState<Dir[]>([]);
  const [pos, setPos] = useState<Point>(maze.start);
  const [step, setStep] = useState(-1);
  const [running, setRunning] = useState(false);
  const [feedback, setFeedback] = useState<Feedback>(null);
  const [won, setWon] = useState(false);

  const add = (d: Dir) => {
    if (running || won || program.length >= maxMoves) return;
    setProgram([...program, d]);
    setFeedback(null);
  };

  const reset = () => {
    if (running) return;
    setProgram([]);
    setPos(maze.start);
    setStep(-1);
    setFeedback(null);
    setWon(false);
  };

  const run = async () => {
    if (running || won || !program.length) return;
    setRunning(true);
    setFeedback(null);
    let [x, y] = maze.start;
    setPos([x, y]);
    for (let k = 0; k < program.length; k++) {
      setStep(k);
      await new Promise((r) => setTimeout(r, 320));
      const [dx, dy] = DIRS[program[k]];
      const nx = x + dx, ny = y + dy;
      const hitWall = maze.walls.has(`${nx},${ny}`);
      if (nx < 0 || ny < 0 || nx >= maze.size || ny >= maze.size || hitWall) {
        setFeedback({
          ok: false,
          title: 'Bump!',
          text: `Move ${k + 1} (${program[k]}) hits ${hitWall ? 'a boulder' : 'the edge of the map'}. Engineers call this a bug. Fix it and run again.`,
        });
        setRunning(false);
        return;
      }
      [x, y] = [nx, ny];
      setPos([x, y]);
      if (x === maze.goal[0] && y === maze.goal[1]) {
        setStep(-1);
        setRunning(false);
        setWon(true);
        setFeedback({
          ok: true,
          title: `Reached the rock sample in ${k + 1} moves!`,
          text: `${k + 1 <= shortest ? 'That’s the shortest route.' : `The shortest route is ${shortest} moves.`} ${task.why}`,
        });
        return;
      }
    }
    setStep(-1);
    setRunning(false);
    setFeedback({ ok: false, title: 'So close.', text: 'The program ended before reaching the rock sample. Add more moves.' });
  };

  return (
    <div>
      <Prompt>Program the rover to reach the rock sample.</Prompt>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        <div>
          <div
            className="grid aspect-square w-full max-w-xs gap-1"
            style={{ gridTemplateColumns: `repeat(${maze.size}, minmax(0, 1fr))` }}
            role="img"
            aria-label={`${maze.size} by ${maze.size} map with the rover, a rock sample, and boulders.`}
          >
            {Array.from({ length: maze.size * maze.size }, (_, i) => {
              const x = i % maze.size, y = Math.floor(i / maze.size);
              const isRover = pos[0] === x && pos[1] === y;
              const isGoal = maze.goal[0] === x && maze.goal[1] === y;
              const isWall = maze.walls.has(`${x},${y}`);
              return (
                <div
                  key={i}
                  className={`flex items-center justify-center border text-lg ${
                    isRover ? 'border-navy bg-navy' : isWall ? 'border-ink bg-ink' : isGoal ? 'border-navy bg-navy-light' : 'border-gray-200 bg-cream'
                  }`}
                >
                  {isRover ? '🛰️' : isGoal ? '💎' : ''}
                </div>
              );
            })}
          </div>
          <p className="mt-2 text-xs text-gray-500">🛰️ rover · 💎 rock sample · ■ boulder</p>
        </div>

        <div>
          <p className="mb-2 font-mono text-xs uppercase tracking-wider text-gray-500">
            Your program ({program.length}/{maxMoves} moves)
          </p>
          <div className="mb-3 grid grid-cols-4 gap-2">
            {(Object.keys(DIRS) as Dir[]).map((d) => (
              <button key={d} onClick={() => add(d)} aria-label={`Add move ${d}`} className={`${choiceClass('idle')} text-center text-lg`}>
                {ARROWS[d]}
              </button>
            ))}
          </div>
          <div className="flex min-h-[48px] flex-wrap gap-1.5 border border-dashed border-gray-300 p-2 font-mono text-xs">
            {program.length ? (
              program.map((d, k) => (
                <span key={k} className={`px-2 py-1 ${k === step ? 'bg-navy text-white' : 'bg-navy-light text-navy'}`}>
                  {ARROWS[d]} {d}
                </span>
              ))
            ) : (
              <span className="p-1 text-gray-400">Tap the arrows to add moves</span>
            )}
          </div>
          <div className="mt-3 flex flex-wrap gap-2">
            <button onClick={run} disabled={running || won} className="btn-primary py-2 disabled:opacity-60">Run program</button>
            <button onClick={() => !running && !won && setProgram(program.slice(0, -1))} className="btn-outline py-2">Undo</button>
            <button onClick={reset} className="btn-outline py-2">Clear</button>
          </div>
        </div>
      </div>
      <FeedbackBox feedback={feedback} action={won && <button onClick={onDone} className="btn-primary py-2">{doneLabel}</button>} />
    </div>
  );
};

const TaskView = (props: TaskProps<Task>) => {
  const { task } = props;
  if (task.type === 'quiz') return <QuizTask {...props} task={task} />;
  if (task.type === 'order') return <OrderTask {...props} task={task} />;
  if (task.type === 'sort') return <SortTask {...props} task={task} />;
  return <CodeTask {...props} task={task} />;
};

/* ---------- Screens ---------- */

const ProgressBar = ({ current, total }: { current: number; total: number }) => (
  <div className="mb-6">
    <div className="mb-2 flex justify-between font-mono text-xs uppercase tracking-wider text-gray-500">
      <span>Task {Math.min(current + 1, total)} of {total}</span>
      <span>{Math.round((current / total) * 100)}%</span>
    </div>
    <div className="flex gap-1" aria-hidden="true">
      {Array.from({ length: total }, (_, i) => (
        <span key={i} className={`h-1.5 flex-1 ${i < current ? 'bg-navy' : i === current ? 'bg-navy/40' : 'bg-gray-200'}`} />
      ))}
    </div>
  </div>
);

const BadgeScreen = ({ career, onHome, onReplay }: { career: Career; onHome: () => void; onReplay: () => void }) => (
  <div>
    <div className="mb-8 flex items-center gap-4">
      <div className="flex h-16 w-16 items-center justify-center border-2 border-navy bg-navy-light text-3xl">{career.emoji}</div>
      <div>
        <p className="eyebrow mb-1">Badge earned · all {career.tasks.length} tasks done</p>
        <h3 className="text-2xl text-ink">You worked like a {career.name}!</h3>
      </div>
    </div>
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
      <div className="border-t border-gray-200 pt-3">
        <h4 className="mb-1 font-mono text-sm font-semibold">What they do all day</h4>
        <p className="text-sm text-gray-600">{career.learn.does}</p>
      </div>
      <div className="border-t border-gray-200 pt-3">
        <h4 className="mb-1 font-mono text-sm font-semibold">Classes that help</h4>
        <ul className="list-inside list-disc text-sm text-gray-600">
          {career.learn.classes.map((c) => <li key={c}>{c}</li>)}
        </ul>
      </div>
      <div className="border-t border-gray-200 pt-3">
        <h4 className="mb-1 font-mono text-sm font-semibold">Cool fact</h4>
        <p className="text-sm text-gray-600">{career.learn.fact}</p>
      </div>
      <div className="border-t border-gray-200 pt-3">
        <h4 className="mb-1 font-mono text-sm font-semibold">Keep exploring, free</h4>
        <a href={career.learn.link.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-sm text-navy underline underline-offset-4">
          {career.learn.link.label} <ArrowUpRight className="h-4 w-4" />
        </a>
      </div>
    </div>
    <div className="mt-8 flex flex-wrap gap-3">
      <button onClick={onHome} className="btn-primary">Pick another career</button>
      <button onClick={onReplay} className="btn-outline">Play again</button>
    </div>
  </div>
);

const CareerQuest = () => {
  const [save, setSave] = useState<SaveData>(loadSave);
  const [activeId, setActiveId] = useState<string | null>(null);
  const [won, setWon] = useState(false);
  const active = careers.find((c) => c.id === activeId);
  const earned = careers.filter((c) => save.badges[c.id]).length;
  const current = active ? save.progress[active.id] || 0 : 0;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [activeId, won]);

  const update = (next: SaveData) => {
    setSave(next);
    writeSave(next);
  };

  const open = (id: string | null) => {
    setActiveId(id);
    setWon(false);
  };

  const setProgress = (id: string, index: number) =>
    update({ ...save, progress: { ...save.progress, [id]: index } });

  const advance = () => {
    if (!active) return;
    const next = current + 1;
    if (next >= active.tasks.length) {
      update({ badges: { ...save.badges, [active.id]: true }, progress: { ...save.progress, [active.id]: 0 } });
      setWon(true);
    } else {
      setProgress(active.id, next);
    }
  };

  return (
    <div>
      <PageIntro eyebrow="Career Quest" title="STEM Career Quest">
        Try real tasks from STEM jobs you may never have heard of. Finish all 10 tasks in a career to earn
        its badge and learn how to get there.
      </PageIntro>

      <section className="py-12 md:py-16">
        <div className="container-page">
          {!active ? (
            <>
              <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
                <h2 className="text-2xl text-ink">Pick a career</h2>
                <div className="flex items-center gap-3 font-mono text-sm text-navy" aria-label={`${earned} of ${careers.length} badges earned`}>
                  <div className="flex gap-1">
                    {careers.map((c) => (
                      <span key={c.id} className={`h-3 w-3 border border-navy ${save.badges[c.id] ? 'bg-navy' : ''}`} />
                    ))}
                  </div>
                  {earned} / {careers.length} badges
                </div>
              </div>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {careers.map((c) => {
                  const done = save.progress[c.id] || 0;
                  return (
                    <button key={c.id} onClick={() => open(c.id)} className="card relative flex flex-col p-5 text-left transition-colors hover:border-navy">
                      {save.badges[c.id] && (
                        <span className="absolute right-3 top-3 border border-navy px-1.5 py-0.5 font-mono text-[10px] uppercase tracking-wider text-navy">
                          Earned
                        </span>
                      )}
                      <span className="mb-4 text-3xl" aria-hidden="true">{c.emoji}</span>
                      <span className="mb-1 font-mono text-[11px] uppercase tracking-wider text-gray-500">
                        {c.tasks.length} tasks · {missionSummary(c)}
                      </span>
                      <span className="mb-2 font-mono text-lg font-semibold text-ink">{c.name}</span>
                      <span className="mb-4 text-sm leading-relaxed text-gray-600">{c.blurb}</span>
                      {done > 0 && (
                        <span className="mt-auto font-mono text-xs text-navy">
                          In progress: {done} / {c.tasks.length} done
                        </span>
                      )}
                    </button>
                  );
                })}
              </div>
              <p className="mt-8 text-xs text-gray-500">
                Runs in any browser, including phones and Chromebooks. Progress and badges are saved on this device.
              </p>
            </>
          ) : (
            <>
              <button onClick={() => open(null)} className="mb-6 inline-flex items-center gap-2 font-mono text-sm text-gray-600 hover:text-navy">
                <ArrowLeft className="h-4 w-4" /> All careers
              </button>
              <div className="mb-2 flex items-center gap-3">
                <span className="text-3xl" aria-hidden="true">{active.emoji}</span>
                <h2 className="text-3xl text-ink">{active.name}</h2>
              </div>
              <p className="mb-6 max-w-2xl leading-relaxed text-gray-600">{active.intro}</p>
              <div className="card p-5 md:p-8">
                {won ? (
                  <BadgeScreen career={active} onHome={() => open(null)} onReplay={() => setWon(false)} />
                ) : (
                  <>
                    <ProgressBar current={current} total={active.tasks.length} />
                    <TaskView
                      key={`${active.id}-${current}`}
                      task={active.tasks[current]}
                      doneLabel={current === active.tasks.length - 1 ? 'Finish & earn badge' : 'Next task'}
                      onDone={advance}
                    />
                    {current > 0 && (
                      <button
                        onClick={() => setProgress(active.id, 0)}
                        className="mt-6 font-mono text-xs text-gray-500 underline underline-offset-4 hover:text-navy"
                      >
                        Start this career over
                      </button>
                    )}
                  </>
                )}
              </div>
            </>
          )}
        </div>
      </section>
    </div>
  );
};

export default CareerQuest;
