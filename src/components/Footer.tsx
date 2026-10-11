import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, MessageCircle, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="border-t border-white/15 bg-navy-dark text-white">
      <div className="container-page py-12">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-4">
          <div className="md:col-span-2">
            <div className="mb-4 flex items-center gap-2.5">
              <img
                src="/images/founders/stemspire-logo.png"
                alt=""
                className="h-8 w-8 border border-white/20"
              />
              <span className="font-mono text-lg font-semibold">STEMspire</span>
            </div>
            <p className="mb-5 max-w-sm text-sm leading-relaxed text-white/70">
              A nonprofit making STEM education fun and accessible through workshops,
              mentorship, and community.
            </p>
            <div className="flex gap-4">
              <a
                href="https://discord.gg/TCNeCRQyuE"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/70 transition-colors hover:text-white"
                aria-label="Discord"
              >
                <MessageCircle className="h-5 w-5" />
              </a>
              <a
                href="https://instagram.com/stem_spire"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/70 transition-colors hover:text-white"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="mailto:stemspire24@gmail.com"
                className="text-white/70 transition-colors hover:text-white"
                aria-label="Email"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="mb-4 font-mono text-xs uppercase tracking-[0.18em] text-white/50">Pages</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/" className="text-white/80 hover:text-white">Home</Link></li>
              <li><Link to="/about" className="text-white/80 hover:text-white">About Us</Link></li>
              <li><Link to="/projects" className="text-white/80 hover:text-white">Projects</Link></li>
              <li><Link to="/get-involved" className="text-white/80 hover:text-white">Get Involved</Link></li>
              <li><Link to="/career-quest" className="text-white/80 hover:text-white">Career Quest</Link></li>
              <li><Link to="/contact" className="text-white/80 hover:text-white">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 font-mono text-xs uppercase tracking-[0.18em] text-white/50">Contact</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="mailto:stemspire24@gmail.com" className="text-white/80 hover:text-white">
                  stemspire24@gmail.com
                </a>
              </li>
              <li>
                <a href="https://instagram.com/stem_spire" target="_blank" rel="noopener noreferrer" className="text-white/80 hover:text-white">
                  @stem_spire
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-white/15 pt-6 text-xs text-white/50">
          © {new Date().getFullYear()} STEMspire. Fiscally sponsored by Hack Club, a 501(c)(3) nonprofit.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
