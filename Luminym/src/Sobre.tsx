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
      <div className="flex flex-col md:flex-row gap-4 md:gap-0 mx-auto h-210 md:h-120 w-full max-w-6xl px-4 md:px-10 my-10 md:my-16">

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
              <h2 className="text-[#dfe3ff] text-xl lg:text-2xl font-bold mb-1 text-shadow-[2px_2px_4px_black]">  Desenvolvedor Web</h2>
              <h3 className="text-[#dfe3ff] text-xl lg:text-2xl font-bold mb-1">Programadores</h3>
              <p className="text-[#dfe3ff] text-sm lg:text-base xl:text-lg font-medium leading-tight">
                Transforme sua presença online com um site que realmente se destaca. Sou um programador experiente e posso criar um site personalizado que atenda às suas necessidades específicas.
              </p>
              <p className="text-[#dfe3ff] text-sm lg:text-base xl:text-lg font-medium leading-tight">
                Ofereço design responsivo e moderno, otimização para SEO e integração com redes sociais, além de suporte técnico contínuo.
              </p>
              <p className="text-[#dfe3ff] text-sm lg:text-base xl:text-lg font-bold leading-tight mt-1">
                Entre em contato e vamos discutir como posso ajudar a levar seu negócio para o próximo nível!
              </p>
            </div>
          </div>

          {/* PERNINHA ) */}
          <div
            className={`absolute top-48 -right-5 w-0 h-0 z-50 pointer-events-none transition duration-300 md:group-hover:-translate-y-5
                      border-t-[16px] border-t-transparent
                      border-l-[20px] border-l-[#272a41]
                      border-b-[16px] border-b-transparent ${
                        hoveredSide === "left" ? "opacity-100" : "opacity-0"
                      }`}
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
            className={`absolute top-48 -left-5 w-0 h-0 z-50 pointer-events-none transition duration-300 md:group-hover:-translate-y-5
                      border-t-[16px] border-t-transparent
                      border-r-[20px] border-r-[#333452]
                      border-b-[16px] border-b-transparent ${
                        hoveredSide === "right" ? "opacity-100" : "opacity-0"
                      }`}
          ></div>
        </div>
      </div>
    </section>
  );
}

export default Sobre;