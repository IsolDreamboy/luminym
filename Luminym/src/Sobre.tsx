import{ useState } from "react";


function Sobre(){
  const[hoveredSide, setHoveredSide] = useState<"left" | "right" | null>(null);

  return(
    <section id="Sobre" className="color-[pink] ">
      <div className="bg-[pink] h-180 flex m-40">
        {/* Gato Branco com texto */}
        <div className="bg-[#02040a] w-1/2 h-full rounded-lg justify-center items-center flex relative hover:-translate-y-5 transition duration-600"
        onMouseEnter={() => setHoveredSide("right")}
        onMouseLeave={() => setHoveredSide(null)}
        >
        <img className={`absolute h-full w-auto rounded-md transition-opacity duration-300 ${
              hoveredSide === 'left' ? 'opacity-0' : 'opacity-100'
            }`} 
            src="/WhiteCat.png" 
            alt="LumCatWhite" />

            {/* Texto */}
          <div className={`absolute flex flex-col items-center justify-center w-full h-full p-8 gap-4 text-center transition-all duration-600 ${
            hoveredSide === 'left' ? 'opacity-100' : 'opacity-0 pointer-events-none'
          }`}>
            <h3 className="text-[#f3f5f7] text-2xl font-bold mb-2">Programadores</h3>
            
            <p className="text-[#f3f5f7] text-lg font-medium leading-tight">
              Transforme sua presença online com um site que realmente se destaca. Sou um programador experiente e posso criar um site personalizado que atenda às suas necessidades específicas.
            </p>
            
            <p className="text-[#f3f5f7] text-lg font-medium leading-tight">
              Ofereço design responsivo e moderno, otimização para SEO e integração com redes sociais, além de suporte técnico contínuo.
            </p>
            
            <p className="text-[#f3f5f7] text-lg font-bold leading-tight mt-2">
              Entre em contato e vamos discutir como posso ajudar a levar seu negócio para o próximo nível!
            </p>
          </div>

        </div>
        
        
        {/* Gato Azul com texto */}
        <div className="bg-[#f3f5f7] w-1/2 h-full rounded-lg justify-center items-center flex relative hover:-translate-y-5 transition duration-300"
        onMouseEnter={() =>setHoveredSide("left")}
        onMouseLeave={() => setHoveredSide(null)}
        >
          <img className={`absolute h-full w-auto rounded-md transition-opacity duration-300 ${
              hoveredSide === 'right' ? 'opacity-0' : 'opacity-100'
            }`} 
            src="/white2.png" 
            alt="LumCatBlue" />

          {/* Texto */}
          <div className={`absolute flex flex-col items-center justify-center w-full h-full p-8 gap-4 text-center transition-all duration-300 ${
            hoveredSide=== "right" ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}>

            <h3 className="text-[#02040a] text-2xl font-bold mb-2">Programadores</h3>
            
            <p className="text-[#02040a] text-lg font-medium leading-tight">
              Transforme sua presença online com um site que realmente se destaca. Sou um programador experiente e posso criar um site personalizado que atenda às suas necessidades específicas.
            </p>
            
            <p className="text-[#02040a] text-lg font-medium leading-tight">
              Ofereço design responsivo e moderno, otimização para SEO e integração com redes sociais, além de suporte técnico contínuo.
            </p>
            
            <p className="text-[#02040a] text-lg font-bold leading-tight mt-2">
              Entre em contato e vamos discutir como posso ajudar a levar seu negócio para o próximo nível!
            </p>

          </div>
        </div>

      </div>

    </section>

  );
}

export default Sobre;