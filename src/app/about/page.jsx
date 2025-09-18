import Header from "../../../components/header/Header";
import Footer from "../../../components/Footer/footer";
import Image from "next/image";
export default function Home() {
  return (
    <div className="bg-black">
      <Header />

      <div className="banner w-full py-10 md:h-150 items-center flex flex-col justify-center gap-10 md:flex-row">

        <Image
          src="/instagram.png"
          alt="Profile image"
          width={300}
          height={300}
          className="full-rounded"
        />

        <div className="w-full px-10 md:px-2 md:w-1/3 flex flex-col justify-start">

          <h1 className="font-bold text-5xl">Sobre mim</h1>
          <p className="text-xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod eligendi alias libero, 
            culpa placeat, possimus adipisci quae illum, neque in unde dolore? Cupiditate corrupti 
            nulla vitae aut eum, laborum sapiente harum rerum qui fuga iste voluptatibus saepe alias. Ut, ipsa.</p>
        </div>

      </div>




      <Footer />
    </div>
  );
}
