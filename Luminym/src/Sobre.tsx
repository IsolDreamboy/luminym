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
      {/* Container centralizado: nunca passa de 1152px */}
      <div className="flex flex-col md:flex-row gap-4 md:gap-0 mx-auto w-full max-w-6xl px-4 md:px-10 my-10 md:my-16">

        {/* Gato Branco */}
        <div
          className="bg-[#f0e6df] w-full md:w-1/2 aspect-[4/5] min-h-[28rem] md:min-h-0 rounded-xl overflow-hidden flex justify-center items-center relative md:hover:-translate-y-5 transition duration-300"
          {...interaction("right")}
        >
          <img
            className={`absolute h-full w-full object-contain p-8 sm:p-6 md:p-0 rounded-md transition-opacity duration-300 ${
              hoveredSide === "left" ? "opacity-0" : "opacity-100" 
              
            }`}
            src="/WhiteCat.png"
            alt="LumCatWhite"
          />

          <div
            className={`absolute flex flex-col items-center justify-start md:justify-center w-full h-full p-5 lg:p-8 gap-3 lg:gap-4 text-center overflow-y-auto transition-all duration-300 ${
              hoveredSide === "left" ? "opacity-100 bg-[#1e2035]" : "opacity-0 pointer-events-none" 
            }`}
          >
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

        {/* Gato Azul */}
        <div
          
          className="bg-[#f0e6df] w-full md:w-1/2 aspect-[4/5] min-h-[28rem] md:min-h-0 rounded-xl overflow-hidden flex justify-center items-center relative md:hover:-translate-y-5 transition duration-300"
          {...interaction("left")}
        >
          <img
            className={`absolute h-full w-full object-contain p-8 sm:p-6 md:p-0 rounded-md transition-opacity duration-300 ${
              hoveredSide === "right" ? "opacity-0" : "opacity-100"
            }`}
            src="/white2.png"
            alt="LumCatBlue"
          />

          <div
            className={`absolute flex flex-col items-center justify-start md:justify-center w-full h-full p-5 lg:p-8 gap-3 lg:gap-4 text-center overflow-y-auto transition-all duration-300 ${
              hoveredSide === "right" ? "opacity-100 bg-[#1e2035]" : "opacity-0 pointer-events-none"
            }`}
          >
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
      </div>
    </section>
  );
}

export default Sobre;