import React from 'react';

function Header(): React.JSX.Element {
  return (
    <div className="w-full flex justify-center items-center bg-[#f0e6df]  fixed top-0 left-0 w-full z-[1000] shadow-xl shadow-[rgba(0,0,0,0.1)]">
      <nav className="w-full max-w-10xl flex justify-between m-1 rounded-xl bg-[#f0e6df] px-6 py-2 items-center text-pink-500">
        <div>
          <a href="#">
            <img className="size-16 w-auto rounded-md bg-[#f0e6df]" src="/CorLogo3.png" alt="Logo" />
          </a>
        </div>
        <div className="flex gap-100 items-center">
          <a 
            href="#" 
            className="relative text-2xl font-bold text-[#373b40] py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-[4px] after:w-full after:bg-black after:scale-x-0 after:origin-center after:transition-transform after:duration-400 hover:after:scale-x-100"
          >
            HOME
          </a>
          <a 
            href="#Sobre" 
            className="relative text-2xl font-bold text-[#373b40] py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-[4px] after:w-full after:bg-black after:scale-x-0 after:origin-center after:transition-transform after:duration-300 hover:after:scale-x-100"
          >
            SOBRE
          </a>
          <a 
            href="#Serviços" 
            className="relative text-2xl font-bold text-[#373b40] py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-[4px] after:w-full after:bg-black after:scale-x-0 after:origin-center after:transition-transform after:duration-300 hover:after:scale-x-100"
          >
            SERVIÇOS
          </a>
          <a 
            href="#Contato" 
            className="relative text-2xl font-bold text-[#373b40] py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-[4px] after:w-full after:bg-black after:scale-x-0 after:origin-center after:transition-transform after:duration-300 hover:after:scale-x-100"
          >
            CONTATO
          </a>
        </div>
      </nav>
    </div>

    
  );
}

export default Header;