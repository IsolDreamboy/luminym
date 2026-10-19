import { useState } from "react";

type Side = "left" | "right" | null;

function Sobre() {
  const [hoveredSide, setHoveredSide] = useState<Side>(null);

  const interaction = (side: Side) => ({
    onPointerEnter: (e: React.PointerEvent) => {
      if (e.pointerType === "mouse") setHoveredSide(side);
    },
    onPointerLeave: (e: React.PointerEvent) => {
      if (e.pointerType === "mouse") setHoveredSide(null);
    },
    onPointerUp: (e: React.PointerEvent) => {
      if (e.pointerType === "touch")
        setHoveredSide((prev) => (prev === side ? null : side));
    },
  });

  return (
    <section id="Sobre">
      {/* Container centralizado */}
      <div className="flex flex-col md:flex-row gap-4 md:gap-0 mx-auto h-220 md:h-120 w-full max-w-6xl px-4 md:px-10 my-10 md:my-16">

        <div
          className="group w-full md:w-1/2 aspect-[4/5] min-h-[28rem] md:min-h-0 relative"
          {...interaction("right")}
        >
          {/* Card */}
          <div className="absolute inset-0 bg-[#f0e6df] rounded-xl overflow-hidden flex justify-center items-center transition duration-300 md:group-hover:-translate-y-5">
            <img
              className={`absolute h-full w-full object-contain p-8 sm:p-6 md:p-0 rounded-md transition-opacity duration-300 ${
                hoveredSide === "left" ? "opacity-0" : "opacity-100"
              }`}
              src="/WhiteCat.png"
              alt="LumCatWhite"
            />

            <div
              className={`absolute flex flex-col items-left justify-left md:justify-left w-full h-full p-5 lg:p-8 gap-3 lg:gap-4 text-left overflow-y-auto bg-gradient-to-tl from-[#202336] to-[#3B3B5E] transition-opacity duration-300 ${
                hoveredSide === "left" ? "opacity-100" : "opacity-0 pointer-events-none"
              }`}
            >
              <h2 className="text-[#dfe3ff] text-xl lg:text-2xl font-bold mb-1 text-shadow-[2px_2px_4px_black]">  A Arte em cada Pixel</h2>
              <h3 className="text-[#dfe3ff] text-xl lg:text-2xl font-bold mb-1">Design Web</h3>
              <p className="text-[#dfe3ff] text-sm lg:text-base xl:text-lg font-medium leading-tight">
               Criamos identidades visuais autorais, alinhadas ao posicionamento de cada marca e construídas a partir de escolhas visuais que expressam sua personalidade.

              </p>
              <p className="text-[#dfe3ff] text-sm lg:text-base xl:text-lg font-medium leading-tight">
                De logotipos a materiais digitais e impressos, cada detalhe compõe uma linguagem própria, consistente e reconhecível </p>
              <p className="text-[#dfe3ff] text-sm lg:text-base xl:text-lg font-bold leading-tight mt-1">
                Entre em contato e vamos discutir como posso ajudar a levar seu negócio para o próximo nível!
              </p>
            </div>
          </div>

          {/* PERNINHA ) */}
          <div
            className={`absolute z-50 w-0 h-0 pointer-events-none transition duration-300 md:group-hover:-translate-y-5
              /* cel: */
              -bottom-4 left-1/2 -translate-x-1/2
              border-l-[16px] border-l-transparent
              border-r-[16px] border-r-transparent
              border-t-[20px] border-t-[#272a41]
              /* pc: */
              md:bottom-auto md:left-auto md:translate-x-0 md:top-48 md:-right-5
              md:border-l-[20px] md:border-l-[#272a41]
              md:border-r-0
              md:border-t-[16px] md:border-t-transparent
              md:border-b-[16px] md:border-b-transparent
              ${hoveredSide === "left" ? "opacity-100" : "opacity-0"}`}
          ></div>
        </div>

        {/* Gato Azul */}
        <div
          className="group w-full md:w-1/2 aspect-[4/5] min-h-[28rem] md:min-h-0 relative"
          {...interaction("left")}
        >
          {/* card */}
          <div className="absolute inset-0 bg-[#f0e6df] rounded-xl overflow-hidden flex justify-center items-center transition duration-300 md:group-hover:-translate-y-5">
            <img
              className={`absolute h-full w-full object-contain p-8 sm:p-6 md:p-0 rounded-md transition-opacity duration-300 ${
                hoveredSide === "right" ? "opacity-0" : "opacity-100"
              }`}
              src="/white2.png"
              alt="LumCatBlue"
            />

            {/* textos  */}
            <div
              className={`absolute flex flex-col items-left justify-start md:justify-left w-full h-full p-5 lg:p-8 gap-3 lg:gap-4 text-left overflow-y-auto bg-gradient-to-bl from-[#202336] to-[#3B3B5E] transition-opacity duration-300 ${
                hoveredSide === "right" ? "opacity-100" : "opacity-0 pointer-events-none"
              }`}
            >
              <h2 className="text-[#dfe3ff] text-xl lg:text-4xl font-bold mb-2 text-shadow-[0_0_6px_rgba(251,191,36,0.6)]"> {"< / >"} Desenvolvedor Web</h2>

              <p className="text-[#dfe3ff] text-sm lg:text-base xl:text-xl font-medium leading-tight">
                Transforme sua presença online com um site que realmente se destaca. Sou um programador experiente e posso criar um site personalizado que atenda às suas necessidades específicas.
              </p>
              <p className="text-[#dfe3ff] text-sm lg:text-base xl:text-xl font-medium leading-tight">
                Ofereço design responsivo e moderno, otimização para SEO e integração com redes sociais, além de suporte técnico contínuo.
              </p>
              <p className="text-[#dfe3ff] text-sm lg:text-base xl:text-xl font-bold leading-tight mt-1">
                Entre em contato e vamos discutir como posso ajudar a levar seu negócio para o próximo nível!
              </p>
            </div>
          </div>

          {/* PERNINHA */}
          <div
            className={`absolute z-50 w-0 h-0 pointer-events-none transition duration-300 md:group-hover:-translate-y-5
              /* cel: */
              -top-4 left-1/2 -translate-x-1/2
              border-l-[16px] border-l-transparent
              border-r-[16px] border-r-transparent
              border-b-[20px] border-b-[#272940]
              /* pc: */
              md:bottom-auto md:right-auto md:translate-x-5 md:top-48 md:-left-10
              md:border-r-[20px] md:border-r-[#333452]
              md:border-l-0
              md:border-t-[16px] md:border-t-transparent
              md:border-b-[16px] md:border-b-transparent
              ${hoveredSide === "right" ? "opacity-100" : "opacity-0"}`}
          ></div>
        </div>
      </div>
    </section>
  );
}

export default Sobre;