
function Banner() {
  return (
    <section className="flex flex-col items-center justify-center min-h-[70vh] text-center px-6">
          <h1 className="text-9xl md:text-x font-extrabold  text-[pink] text-tiny mb-6">
            Luminyn Studio
          </h1>
          <p className="text-xl md:text-7xl text-[pink] font-extratiny mb-10 max-w-2xl">
            Transformando ideias em realidade.
          </p>
          <a  
            href="#contato" 
            className="flex justify-center items-center w-80 h-16 rounded-xl text-[#ffff] bg-[#080b1a] text-[20px] font-bold duration-600 hover:bg-[#14193D] hover:text-[#5B5D63]"
                      >
            Entre em contato conosco
          </a>
        </section>
  );
}

export default Banner;