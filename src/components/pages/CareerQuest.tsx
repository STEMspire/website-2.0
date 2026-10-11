import React, { useEffect, useState } from 'react';
import { ArrowLeft, ArrowUpRight } from 'lucide-react';
import PageIntro from '../PageIntro';
import { careers, Career, Mission, QuizQuestion } from '../../data/careers';

const STORAGE_KEY = 'stemspire-career-quest';

const loadBadges = (): Record<string, boolean> => {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY) || '{}');
  } catch {
    return {};
  }
};

const saveBadges = (badges: Record<string, boolean>) => {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(badges));
  } catch {
    // Storage can be unavailable (private mode); badges just won't persist
  }
};

const shuffle = <T,>(items: T[]) => {
  const a = [...items];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
};

type Feedback = { ok: boolean; title: string; text: string } | null;

const FeedbackBox = ({ feedback, action }: { feedback: Feedback; action?: React.ReactNode }) =>
  feedback ? (
    <div
      className={`mt-5 flex flex-wrap items-center justify-between gap-3 border px-4 py-3 ${
        feedback.ok ? 'border-green-700 bg-green-50' : 'border-red-700 bg-red-50'
      }`}
      role="status"
    >
      <p className="flex-1 text-sm">
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

/* ---------- Chart ---------- */

const BarChart = ({ labels, values, unit }: { labels: string[]; values: number[]; unit: string }) => {
  const W = 440, H = 210, L = 36, B = 28, T = 16;
  const max = Math.ceil(Math.max(...values) / 5) * 5;
  const bw = (W - L - 8) / values.length;
  const y = (v: number) => H - B - (v / max) * (H - B - T);
  const ticks = Array.from({ length: max / 5 + 1 }, (_, i) => i * 5);

  return (
    <svg
      viewBox={`0 0 ${W} ${H}`}
      className="mb-5 w-full max-w-md"
      role="img"
      aria-label={`Bar chart of ${unit}: ${labels.map((l, i) => `${l} ${values[i]}`).join(', ')}`}
    >
      <text x={0} y={10} className="fill-gray-600 text-[11px]">{unit}</text>
      {ticks.map((t) => (
        <g key={t}>
          <line x1={L} x2={W - 4} y1={y(t)} y2={y(t)} className="stroke-gray-200" />
          <text x={L - 6} y={y(t) + 4} textAnchor="end" className="fill-gray-500 text-[11px]">{t}</text>
        </g>
      ))}
      {values.map((v, i) => (
        <g key={labels[i]}>
          <rect x={L + i * bw + bw * 0.22} y={y(v)} width={bw * 0.56} height={H - B - y(v)} className="fill-navy" />
          <text x={L + i * bw + bw / 2} y={H - B + 17} textAnchor="middle" className="fill-gray-700 text-[11px]">
            {labels[i]}
          </text>
        </g>
      ))}
    </svg>
  );
};

/* ---------- Missions ---------- */

const QuizMission = ({ mission, onFinish }: { mission: Extract<Mission, { type: 'quiz' }>; onFinish: () => void }) => {
  const [index, setIndex] = useState(0);
  const [wrong, setWrong] = useState<number[]>([]);
  const [solved, setSolved] = useState(false);
  const q: QuizQuestion = mission.questions[index];
  const last = index === mission.questions.length - 1;

  const pick = (k: number) => {
    if (solved) return;
    if (k === q.answer) setSolved(true);
    else setWrong([...wrong, k]);
  };

  const next = () => {
    if (last) return onFinish();
    setIndex(index + 1);
    setWrong([]);
    setSolved(false);
  };

  return (
    <div>
      {mission.chart && <BarChart {...mission.chart} />}
      <p className="font-mono text-xs uppercase tracking-wider text-gray-500">
        Question {index + 1} of {mission.questions.length}
      </p>
      <p className="mb-4 mt-1 font-mono text-lg font-semibold text-ink">{q.q}</p>
      <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
        {q.choices.map((c, k) => (
          <button
            key={c}
            onClick={() => pick(k)}
            disabled={solved || wrong.includes(k)}
            className={choiceClass(solved && k === q.answer ? 'right' : wrong.includes(k) ? 'wrong' : 'idle')}
          >
            {c}
          </button>
        ))}
      </div>
      <FeedbackBox
        feedback={
          solved
            ? { ok: true, title: 'Correct!', text: q.why }
            : wrong.length
              ? { ok: false, title: 'Not quite.', text: 'Give it another try.' }
              : null
        }
        action={
          solved && (
            <button onClick={next} className="btn-primary py-2">
              {last ? 'Finish mission' : 'Next question'}
            </button>
          )
        }
      />
    </div>
  );
};

const OrderMission = ({ mission, onFinish }: { mission: Extract<Mission, { type: 'order' }>; onFinish: () => void }) => {
  const [options] = useState(() => shuffle(mission.items));
  const [placed, setPlaced] = useState(0);
  const [feedback, setFeedback] = useState<Feedback>(null);
  const finished = placed === mission.items.length;

  const pick = (item: string) => {
    if (item === mission.items[placed]) {
      const n = placed + 1;
      setPlaced(n);
      setFeedback(n === mission.items.length ? { ok: true, title: 'All in order!', text: mission.why } : null);
    } else {
      setFeedback({ ok: false, title: 'Not next.', text: `“${item}” goes further down. Which layer is newer?` });
    }
  };

  return (
    <div>
      <p className="font-mono text-xs uppercase tracking-wider text-gray-500">{mission.prompt}</p>
      <ol className="my-4 grid gap-1.5">
        {mission.items.map((item, k) => (
          <li
            key={item}
            className={`border px-4 py-2 font-mono text-sm ${
              k < placed ? 'border-navy bg-navy-light text-navy' : 'border-dashed border-gray-300 text-gray-400'
            }`}
            style={{ marginLeft: `${k * 6}px` }}
          >
            {k + 1}. {k < placed ? item : '—'}
          </li>
        ))}
      </ol>
      <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
        {options.map((item) => {
          const done = mission.items.indexOf(item) < placed;
          return (
            <button key={item} onClick={() => pick(item)} disabled={done} className={choiceClass(done ? 'right' : 'idle')}>
              {item}
            </button>
          );
        })}
      </div>
      <FeedbackBox
        feedback={feedback}
        action={finished && <button onClick={onFinish} className="btn-primary py-2">Finish mission</button>}
      />
    </div>
  );
};

const SortMission = ({ mission, onFinish }: { mission: Extract<Mission, { type: 'sort' }>; onFinish: () => void }) => {
  const [items] = useState(() => shuffle(mission.items));
  const [index, setIndex] = useState(0);
  const [feedback, setFeedback] = useState<Feedback>(null);
  const finished = index === items.length;

  const pick = (binId: string) => {
    const item = items[index];
    if (binId === item.bin) {
      setIndex(index + 1);
      setFeedback(index + 1 === items.length ? { ok: true, title: 'Everything sorted!', text: mission.why } : null);
    } else {
      const right = mission.bins.find((b) => b.id === item.bin)!;
      setFeedback({ ok: false, title: 'Hmm.', text: `Hint: think about “${right.hint}”.` });
    }
  };

  if (finished) {
    return (
      <FeedbackBox feedback={feedback} action={<button onClick={onFinish} className="btn-primary py-2">Finish mission</button>} />
    );
  }

  const item = items[index];
  return (
    <div>
      <p className="font-mono text-xs uppercase tracking-wider text-gray-500">
        Item {index + 1} of {items.length}
      </p>
      <div className="my-6 text-center">
        {item.emoji && <div className="mb-1 text-5xl" aria-hidden="true">{item.emoji}</div>}
        <div className="font-mono text-2xl font-semibold text-ink">{item.name}</div>
      </div>
      <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
        {mission.bins.map((bin) => (
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
const WALLS = new Set(['1,1', '1,2', '3,2', '3,3', '2,4']);
const START: [number, number] = [0, 4];
const GOAL: [number, number] = [4, 0];
const MAX_MOVES = 12;
const SHORTEST = 8;

const CodeMission = ({ mission, onFinish }: { mission: Extract<Mission, { type: 'code' }>; onFinish: () => void }) => {
  const [program, setProgram] = useState<Dir[]>([]);
  const [pos, setPos] = useState<[number, number]>(START);
  const [step, setStep] = useState(-1);
  const [running, setRunning] = useState(false);
  const [feedback, setFeedback] = useState<Feedback>(null);
  const [won, setWon] = useState(false);

  const add = (d: Dir) => {
    if (running || program.length >= MAX_MOVES) return;
    setProgram([...program, d]);
    setFeedback(null);
  };

  const reset = () => {
    if (running) return;
    setProgram([]);
    setPos(START);
    setStep(-1);
    setFeedback(null);
    setWon(false);
  };

  const run = async () => {
    if (running || !program.length) return;
    setRunning(true);
    setFeedback(null);
    let [x, y] = START;
    setPos([x, y]);
    for (let k = 0; k < program.length; k++) {
      setStep(k);
      await new Promise((r) => setTimeout(r, 380));
      const [dx, dy] = DIRS[program[k]];
      const nx = x + dx, ny = y + dy;
      if (nx < 0 || ny < 0 || nx > 4 || ny > 4 || WALLS.has(`${nx},${ny}`)) {
        setFeedback({
          ok: false,
          title: 'Bump!',
          text: `Move ${k + 1} (${program[k]}) hits ${WALLS.has(`${nx},${ny}`) ? `a ${mission.wallLabel}` : 'the edge of the map'}. Engineers call this a bug. Fix it and run again.`,
        });
        setRunning(false);
        return;
      }
      [x, y] = [nx, ny];
      setPos([x, y]);
      if (x === GOAL[0] && y === GOAL[1]) {
        setStep(-1);
        setRunning(false);
        setWon(true);
        setFeedback({
          ok: true,
          title: `Reached the ${mission.goal} in ${k + 1} moves!`,
          text: k + 1 <= SHORTEST ? 'That’s the shortest route.' : `Can you do it in ${SHORTEST}?`,
        });
        return;
      }
    }
    setStep(-1);
    setRunning(false);
    setFeedback({ ok: false, title: 'So close.', text: `The program ended before reaching the ${mission.goal}. Add more moves.` });
  };

  return (
    <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
      <div>
        <p className="mb-2 font-mono text-xs uppercase tracking-wider text-gray-500">The map</p>
        <div
          className="grid aspect-square w-full max-w-xs grid-cols-5 gap-1"
          role="img"
          aria-label={`5 by 5 map. The rover starts bottom left, the ${mission.goal} is top right, dark squares are ${mission.wallLabel}s.`}
        >
          {Array.from({ length: 25 }, (_, i) => {
            const x = i % 5, y = Math.floor(i / 5);
            const isRover = pos[0] === x && pos[1] === y;
            const isGoal = GOAL[0] === x && GOAL[1] === y;
            const isWall = WALLS.has(`${x},${y}`);
            return (
              <div
                key={i}
                className={`flex items-center justify-center border text-xl ${
                  isRover ? 'border-navy bg-navy' : isWall ? 'border-ink bg-ink' : isGoal ? 'border-navy bg-navy-light' : 'border-gray-200 bg-cream'
                }`}
              >
                {isRover ? '🛰️' : isGoal ? '💎' : ''}
              </div>
            );
          })}
        </div>
        <p className="mt-2 text-xs text-gray-500">🛰️ rover · 💎 {mission.goal} · ■ {mission.wallLabel}</p>
      </div>

      <div>
        <p className="mb-2 font-mono text-xs uppercase tracking-wider text-gray-500">Your program (up to {MAX_MOVES} moves)</p>
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
                {d}
              </span>
            ))
          ) : (
            <span className="p-1 text-gray-400">Tap the arrows to add moves</span>
          )}
        </div>
        <div className="mt-3 flex flex-wrap gap-2">
          <button onClick={run} disabled={running} className="btn-primary py-2">Run program</button>
          <button onClick={() => !running && setProgram(program.slice(0, -1))} className="btn-outline py-2">Undo</button>
          <button onClick={reset} className="btn-outline py-2">Clear</button>
        </div>
        <FeedbackBox feedback={feedback} action={won && <button onClick={onFinish} className="btn-primary py-2">Finish mission</button>} />
      </div>
    </div>
  );
};

/* ---------- Screens ---------- */

const BadgeScreen = ({ career, onHome, onReplay }: { career: Career; onHome: () => void; onReplay: () => void }) => (
  <div>
    <div className="mb-8 flex items-center gap-4">
      <div className="flex h-16 w-16 items-center justify-center border-2 border-navy bg-navy-light text-3xl">{career.emoji}</div>
      <div>
        <p className="eyebrow mb-1">Badge earned</p>
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

const MissionScreen = ({ career, onFinish }: { career: Career; onFinish: () => void }) => {
  const m = career.mission;
  if (m.type === 'quiz') return <QuizMission mission={m} onFinish={onFinish} />;
  if (m.type === 'order') return <OrderMission mission={m} onFinish={onFinish} />;
  if (m.type === 'sort') return <SortMission mission={m} onFinish={onFinish} />;
  return <CodeMission mission={m} onFinish={onFinish} />;
};

const CareerQuest = () => {
  const [badges, setBadges] = useState<Record<string, boolean>>(loadBadges);
  const [activeId, setActiveId] = useState<string | null>(null);
  const [won, setWon] = useState(false);
  const [round, setRound] = useState(0);
  const active = careers.find((c) => c.id === activeId);
  const earned = careers.filter((c) => badges[c.id]).length;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [activeId]);

  const open = (id: string | null) => {
    setActiveId(id);
    setWon(false);
    setRound(round + 1);
  };

  const finish = () => {
    const next = { ...badges, [activeId!]: true };
    setBadges(next);
    saveBadges(next);
    setWon(true);
  };

  return (
    <div>
      <PageIntro eyebrow="Career Quest" title="STEM Career Quest">
        Try a real mission from STEM jobs you may never have heard of. Finish a mission to earn its badge
        and learn how to get there.
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
                      <span key={c.id} className={`h-3 w-3 border border-navy ${badges[c.id] ? 'bg-navy' : ''}`} />
                    ))}
                  </div>
                  {earned} / {careers.length} badges
                </div>
              </div>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {careers.map((c) => (
                  <button key={c.id} onClick={() => open(c.id)} className="card relative flex flex-col p-5 text-left transition-colors hover:border-navy">
                    {badges[c.id] && (
                      <span className="absolute right-3 top-3 border border-navy px-1.5 py-0.5 font-mono text-[10px] uppercase tracking-wider text-navy">
                        Earned
                      </span>
                    )}
                    <span className="mb-4 text-3xl" aria-hidden="true">{c.emoji}</span>
                    <span className="mb-1 font-mono text-[11px] uppercase tracking-wider text-gray-500">{c.tag}</span>
                    <span className="mb-2 font-mono text-lg font-semibold text-ink">{c.name}</span>
                    <span className="text-sm leading-relaxed text-gray-600">{c.blurb}</span>
                  </button>
                ))}
              </div>
              <p className="mt-8 text-xs text-gray-500">
                Runs in any browser, including phones and Chromebooks. Badges are saved on this device.
              </p>
            </>
          ) : (
            <>
              <button onClick={() => open(null)} className="mb-6 inline-flex items-center gap-2 font-mono text-sm text-gray-600 hover:text-navy">
                <ArrowLeft className="h-4 w-4" /> All careers
              </button>
              <div className="mb-2 flex items-center gap-3">
                <span className="text-3xl" aria-hidden="true">{active.emoji}</span>
                <div>
                  <p className="font-mono text-[11px] uppercase tracking-wider text-gray-500">{active.tag}</p>
                  <h2 className="text-3xl text-ink">{active.name}</h2>
                </div>
              </div>
              <p className="mb-6 max-w-2xl leading-relaxed text-gray-600">{active.intro}</p>
              <div className="card p-5 md:p-8">
                {won ? (
                  <BadgeScreen career={active} onHome={() => open(null)} onReplay={() => open(active.id)} />
                ) : (
                  <MissionScreen key={round} career={active} onFinish={finish} />
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
