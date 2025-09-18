import Header from "../../../components/header/Header";
import Footer from "../../../components/Footer/footer";
import Skill from "../../../components/Skill/Skill";


import Image from "next/image";
export default function Home() {
  return (
    <div className="bg-black">
      <Header />

      <div className="banner w-full py-10 md:h-150 items-center flex flex-col justify-center gap-10 md:flex-row">

        <Image
          src="/profile.jpg"
          alt="Profile image"
          width={300}
          height={300}
          className="rounded-xl"
        />

        <div className="w-full px-10 md:px-2 md:w-1/3 flex flex-col justify-start">

          <h1 className="font-bold text-5xl">Sobre mim</h1>
          <p className="text-xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod eligendi alias libero,
            culpa placeat, possimus adipisci quae illum, neque in unde dolore? Cupiditate corrupti
            nulla vitae aut eum, laborum sapiente harum rerum qui fuga iste voluptatibus saepe alias. Ut, ipsa.</p>
        </div>

      </div>

      <h1 className="font-xl uppercase text-5xl pt-20 pb-10 bg-white text-black   font-bold text-center">Skills</h1>

      <div className="w-full md:px-42 grid grid-cols-1 md:grid-cols-2 gap-6 bg-white pb-20 ">


        <Skill
          src="/github.png"
          title="GitHub"
          desc=" Gerencio versionamento de código e colaboro em projetos de forma organizada e eficiente, utilizando boas práticas de Git. "

        />
        <Skill
          src="/figma.png"
          title="Figma"
          desc="Crio interfaces modernas e responsivas, prototipando soluções visuais intuitivas e alinhadas às necessidades do usuário. "

        />
        <Skill
          src="/ts.png"
          title="TypeScript"
          desc="Escrevo códigos mais seguros e organizados através da tipagem estática, reduzindo falhas e melhorando a manutenção."

        />
        <Skill
          src="/tailwind.png"
          title="TailWind"
          desc=" Estilizo interfaces de forma rápida e responsiva, garantindo consistência visual e flexibilidade no design. "

        />
        <Skill
          src="/react.png"
          title="React"
          desc=" Desenvolvo interfaces dinâmicas e reativas utilizando componentes reutilizáveis para otimizar a experiência do usuário."

        />
        <Skill
          src="/next.png"
          title="Next.JS"
          desc=" Crio aplicações web modernas com foco em performance e SEO, explorando os recursos de renderização do Next.js. "

        />

      </div>




      <Footer />
    </div>
  );
}
