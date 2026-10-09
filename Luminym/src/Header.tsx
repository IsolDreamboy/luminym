import React, { useState } from 'react';

const links = [
  { label: 'HOME', href: '#' },
  { label: 'SOBRE', href: '#Sobre' },
  { label: 'SERVIÇOS', href: '#Servicos' },
  { label: 'CONTATO', href: '#Contato' },
];

const linkClass =
  "relative text-lg lg:text-2xl font-bold text-[#373b40] py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-[4px] after:w-full after:bg-black after:scale-x-0 after:origin-center after:transition-transform after:duration-300 hover:after:scale-x-100";

function Header(): React.JSX.Element {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full bg-[#f0e6df] z-[1000] shadow-xl shadow-[rgba(0,0,0,0.1)]">
      <nav className="flex items-center px-4 sm:px-6 lg:px-10 py-2">
        <a href="#" className="shrink-0">
          <img className="h-12 sm:h-16 w-auto rounded-md" src="/CorLogo3.png" alt="Logo" />
        </a>

        <div className="hidden md:flex flex-1 items-center justify-between ml-10 lg:ml-24">
          {links.map((l) => (
            <a key={l.label} href={l.href} className={linkClass}>
              {l.label}
            </a>
          ))}
        </div>


        <button
          className="md:hidden ml-auto p-2 text-[#373b40]"
          onClick={() => setOpen(!open)}
          aria-label="Abrir menu"
          aria-expanded={open}
        >
          <svg className="size-8" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            {open ? (
              <path strokeLinecap="round" d="M6 6l12 12M18 6L6 18" />
            ) : (
              <path strokeLinecap="round" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </nav>

      {open && (
        <div className="md:hidden flex flex-col items-center gap-4 pb-4">
          {links.map((l) => (
            <a key={l.label} href={l.href} className={linkClass} onClick={() => setOpen(false)}>
              {l.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}

export default Header;