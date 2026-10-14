import { useEffect, useState } from "react";


const servicos = [
  {
    img: "/CardLuminmn.png",
    alt: "Identidade Visual e Design",
    titulo: "Identidade Visual e Design",
    texto:
      "Acreditamos que um bom design é essencial para o sucesso de qualquer marca. Criamos identidades visuais impactantes, logotipos memoráveis e layouts atraentes para sites e materiais gráficos.",
  },
  {
    img: "/Escrita.png",
    alt: "Conteúdo e Comunicação",
    titulo: "Conteúdo e Comunicação",
    texto:
      "Transformamos ideias em palavras que conectam. Criamos textos estratégicos para blogs, redes sociais e materiais institucionais, garantindo uma comunicação clara e envolvente.",
  },
  {
    img: "/notev2.png",
    alt: "Sites e Soluções Digitais",
    titulo: "Sites e Soluções Digitais",
    texto:
      "Desenvolvemos sites e sistemas personalizados, sempre visando funcionalidade, desempenho e experiência do usuário. Usamos tecnologia avançada para criar soluções eficientes e intuitivas.",
  },
];

const n = servicos.length;

const POSICOES = [-2, -1, 0, 1, 2];

function Servicos() {
  const [pos, setPos] = useState(0);
  const [pausado, setPausado] = useState(false);


  useEffect(() => {
    if (pausado) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const id = setTimeout(() => setPos((p) => p + 1), 2500);
    return () => clearTimeout(id);
  }, [pos, pausado]);

  return (
    <section id="Servicos" className="py-10 md:py-20">
      
        <div className="flex flex-col items-center justify-center text-center px-6 bg-[inherit]">
          <h1 className="-mb-0.5 font-['Open_Sans'] text-[1.75rem] leading-none font-semibold text-[#938e8b]">
            Nossos Serviços
          </h1>

         <h2 className="font-['Open_Sans'] text-5xl font-bold text-[#232323] leading-[1.05]">
            Soluções completas
            <br />
            para a sua{" "}
            <span className="inline-grid items-baseline align-baseline leading-none text-white select-none">
              {/* caixa roxa fixa */}
            <span aria-hidden="true" className="relative z-0 col-start-1 row-start-1 -mt-[0.1em] top-[0.2em] h-[0.95em] rounded-[0.15em] bg-purple-800" />

            <span style={{ fontSize: "1.1em" }} className="relative z-10 col-start-1 row-start-1 px-[0.3em] leading-[0] text-left font-sans -translate-y-[0.0em] opacity-0 animate-crossfade-1">marca.</span>
            <span className="relative z-10 col-start-1 row-start-1 px-[0.3em] leading-[0] text-left font-serif italic translate-y-[0] opacity-0 animate-crossfade-2">marca.</span>
            <span className="relative z-10 col-start-1 row-start-1 px-[0.3em] leading-[0] text-left font-mono text-[1.11em] -translate-y-[0.0em] opacity-0 animate-crossfade-3">marca.</span>
            </span>
          </h2>


          <h3 className="mt-2 font-['Open_Sans'] text-[1.0625rem] font-bold leading-[1.4] text-[#938e8b]">
            <span className="block">Da identidade visual ao desenvolvimento, oferecemos</span>
            <span className="block">soluções personalizadas para cada etapa da sua</span>
            <span className="block">empresa digital</span>
          </h3>
        </div>

      <div
        onMouseEnter={() => setPausado(true)}
        onMouseLeave={() => setPausado(false)}
        className="relative overflow-hidden
                   h-[28rem] md:h-[34rem] lg:h-[38rem]
                   [--w:16rem] [--g:1rem]
                   sm:[--w:18rem]
                   md:[--w:22rem] md:[--g:1.5rem]
                   lg:[--w:26rem]
                   "
      >

        {POSICOES.map((k) => {
          const v = pos + k; 
          const s = servicos[((v % n) + n) % n];
          const ativo = k === 0;
          const visivel = Math.abs(k) <= 1;

          return (
            <article
              key={v}
              onClick={() => !ativo && visivel && setPos(v)}
              aria-hidden={!visivel}
              style={{
                width: "var(--w)",
                transform: `translate(-50%, -50%) translateX(calc(${k} * (var(--w) + var(--g)))) scale(${
                  ativo ? 1 : 0.85
                })`,
              }}
              className={`absolute top-1/2 left-1/2
                          h-[24rem] md:h-[30rem] lg:h-[34rem]
                          flex flex-col items-center justify-center text-center gap-4
                          bg-[#040514] rounded-md p-6 md:p-8
                          rounded-xl
                          transition-[transform,opacity] duration-700 ease-in-out
                          ${
                            ativo
                              ? "opacity-100 z-10 shadow-xl"
                              : visivel
                              ? "opacity-50 cursor-pointer"
                              : "opacity-0 pointer-events-none"
                          }`}
            >
              {/* Área da imagem */}
              <div className="h-40 md:h-52 lg:h-64 w-full flex items-center justify-center">
                <img
                  className="max-h-full max-w-full object-contain rounded-md"
                  src={s.img}
                  alt={s.alt}
                  width={400}
                  height={300}
                  decoding="async"
                />
              </div>

              <h3 className="text-[#f3f5f7] text-xl md:text-2xl lg:text-3xl font-bold">
                {s.titulo}
              </h3>
              <p className="text-[#f3f5f7] text-sm md:text-base lg:text-xl leading-snug font-bold ">
                {s.texto}
              </p>
            </article>
          );
        })}
      </div>
    </section>
  );
}

export default Servicos;