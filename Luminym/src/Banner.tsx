


function Banner() {


  return (
    <section className="flex flex-col items-center justify-center min-h-[70vh] text-center px-6">
          <h1 className="text-4xl md:text-x font-extratiny  text-[#040514] text-tiny mb-2">
            Luminyn Studio
          </h1>
          <h2 className="text-4xl md:text-6xl text-[#1e2035] font-poppins font-bold max-w-2xl leading-none">
            <span className="block mb-2">Ideias que</span> 
            
            
            <span className="text-4xl md:text-6xl  inline-flex items-end justify-center h-[1em] mb-8 translate-y-[-0.1em]">
              <span className="leading-none ml-16 ">ganham</span>
              &nbsp;
              
              <span className="relative inline-block w-[3.8em] h-[1.2em] text-[#6a6971] text-left select-none overflow-visible">
                <span className="absolute left-0 bottom-0 leading-none font-sans opacity-0 animate-crossfade-1 translate-y-[0.02em]">forma.</span>
                <span className="absolute left-0 bottom-0 leading-none font-serif italic opacity-0 animate-crossfade-2 translate-y-[0.05em]">forma.</span>
                <span className="absolute left-0 bottom-0 leading-none font-mono opacity-0 animate-crossfade-3 translate-y-[0.10em]">forma.</span>
              </span>
            </span>
          </h2>
          <a  
            href="#contato" 
            className="flex justify-center items-center w-90 h-23 rounded-xl text-[#dfe3ff] bg-[#1e2035] text-[30px] font-bold duration-600 hover:bg-[#191b29] hover:text-[#f6f7fa]"
                      >
            Fale com a Luminyn
          </a>
        </section>
  );
}

export default Banner;