import React, { useState } from 'react';
import { Instagram, Mail, MessageCircle } from 'lucide-react';
import PageIntro from '../PageIntro';

const CONTACT_EMAIL = 'stemspire24@gmail.com';

// Optional: paste a form service endpoint (e.g. https://formspree.io/f/xxxx) to deliver
// messages directly. While empty, "Send" opens the visitor's email app instead.
const FORM_ENDPOINT = '';

type Status = 'idle' | 'sending' | 'sent' | 'error';

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<Status>('idle');

  const update = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!FORM_ENDPOINT) {
      const subject = `Message from ${form.name || form.email}`;
      const body = `${form.message}\n\nName: ${form.name}\nEmail: ${form.email}`;
      window.location.href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      return;
    }

    setStatus('sending');
    try {
      const res = await fetch(FORM_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error(res.statusText);
      setStatus('sent');
      setForm({ name: '', email: '', message: '' });
    } catch {
      setStatus('error');
    }
  };

  const inputClass =
    'w-full border border-gray-300 bg-white px-4 py-3 text-ink placeholder-gray-400 focus:border-navy focus:outline-none';

  return (
    <div>
      <PageIntro eyebrow="Contact" title="Contact us">
        Have a question about our workshops, being a student, starting a chapter, or what we do? Send
        us a message.
      </PageIntro>

      <section className="py-16 md:py-24">
        <div className="container-page grid grid-cols-1 gap-12 lg:grid-cols-5">
          <div className="lg:col-span-3">
            <h2 className="mb-6 text-2xl text-ink">Drop us a line</h2>

            {status === 'sent' ? (
              <p className="border border-navy bg-navy-light px-4 py-3 font-mono text-sm text-navy">
                Thanks! We'll get back to you soon.
              </p>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="mb-1 block font-mono text-xs uppercase tracking-wider text-gray-600">
                    Name
                  </label>
                  <input id="name" name="name" value={form.name} onChange={update} className={inputClass} />
                </div>
                <div>
                  <label htmlFor="email" className="mb-1 block font-mono text-xs uppercase tracking-wider text-gray-600">
                    Email <span className="text-navy">*</span>
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={form.email}
                    onChange={update}
                    className={inputClass}
                  />
                </div>
                <div>
                  <label htmlFor="message" className="mb-1 block font-mono text-xs uppercase tracking-wider text-gray-600">
                    Message <span className="text-navy">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    required
                    value={form.message}
                    onChange={update}
                    className={inputClass}
                  />
                </div>
                {status === 'error' && (
                  <p className="text-sm text-red-700">
                    Something went wrong. Please email us directly at {CONTACT_EMAIL}.
                  </p>
                )}
                <button type="submit" disabled={status === 'sending'} className="btn-primary w-full disabled:opacity-60">
                  {status === 'sending' ? 'Sending…' : 'Send'}
                </button>
              </form>
            )}
          </div>

          <div className="lg:col-span-2">
            <h2 className="mb-6 text-2xl text-ink">Other ways to reach us</h2>
            <ul className="divide-y divide-gray-200 border-y border-gray-200">
              <li>
                <a href={`mailto:${CONTACT_EMAIL}`} className="flex items-center gap-3 py-4 text-gray-700 hover:text-navy">
                  <Mail className="h-5 w-5 text-navy" />
                  {CONTACT_EMAIL}
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/stem_spire/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 py-4 text-gray-700 hover:text-navy"
                >
                  <Instagram className="h-5 w-5 text-navy" />
                  @stem_spire
                </a>
              </li>
              <li>
                <a
                  href="https://discord.gg/Gprm3Rures"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 py-4 text-gray-700 hover:text-navy"
                >
                  <MessageCircle className="h-5 w-5 text-navy" />
                  Join our Discord
                </a>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
