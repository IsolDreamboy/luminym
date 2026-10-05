import React from 'react';

function Header(): React.JSX.Element {
  return (
    <div className="w-full flex justify-center items-center">
      <nav className="w-full flex justify-between m-10 border-2 rounded-xl p-10 items-center text-pink-500">

        <h1 className="text-2xl font-bold">Testando Tailwind</h1>
        <p className="text-slate-400">Se a tela tiver escura com este texto cinza, tá funcionando.</p>
      </nav>
    </div>
  );
}

export default Header;