
function Banner() {
  return (
    <section className="flex flex-col items-center justify-center min-h-[70vh] text-center px-6">
          <h1 className="text-9xl md:text-x font-extrabold  text-[pink] text-tiny mb-6">
            Luminyn Studio
          </h1>
          <p className="text-xl md:text-2xl text-[pink] mb-10 max-w-2xl">
            Transformando ideias em realidade.
          </p>
          <a 
            href="#contato" 
            className="bg-slate-900 text-white px-8 py-4 rounded-md text-lg font-medium hover:bg-slate-800 transition-colors shadow-lg"
          >
            Entre em contato conosco
          </a>
        </section>
  );
}

export default Banner;