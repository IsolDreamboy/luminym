const contato =[

  {
  label: 'INSTAGRAM',
  href: "https://www.instagram.com/luminymstudio",
  img: "/Instagram.png",
  alt: "Instagram Lum",
  },

  {
    label:"WhatsApp",
    href:"#",
    img:"/WhatsApp.png",
    alt:"WhatsApp Lum",
  },
  {
    label:"LinkedIn",
    href:"#",
    img:"/LinkedIn.png",
    alt:"LinkedIn Lum",
  },

  {
    label:"Gmail",
    href:"#",
    img:"/Gmail.png",
    alt:"Gmail Lum",
  },
  

];

function Contato(){
  return(
    <section id="Contato" className="mt-16 md:mt-24" >
      <div className="flex flex-nowrap justify-center items-center gap-4 sm:gap-8 md:gap-16
                      px-4 py-10 md:p-16 w-full bg-[#f0e6df]">
        {contato.map((c) => (
          <a
            key={c.label}
            href={c.href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center hover:scale-110 transition-transform duration-300"
          >
            <img
              src={c.img}
              alt={c.alt}
              className="w-20 h-20 md:w-32 md:h-32 lg:w-40 lg:h-40 object-contain"
            />
          </a>
        ))}
      </div>

    </section>
  )
};

export default Contato;