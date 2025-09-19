import Header from "../../../components/header/Header";
import Footer from "../../../components/Footer/footer";
import CardProject from "../../../components/cardProject/cardProject";
import SubBanner from "../../../components/SubBanner/SubBanner";




export default function Home() {
  return (
    <div className="bg-white">
      <Header />

      <SubBanner
      title="Projetos"
      />



      <div className="w-full py-10 px-10 grid grid-cols-1 md:px-42 gap-10 sm:grid-cols-2 md:grid-cols-3 justify-center">


        <CardProject
          src="/background.png"
          alt="fundo da imagem"
          title="Meu titulo"
          desc="minda descrição"
        />

        <CardProject
          src="/background.png"
          alt="fundo da imagem"
          title="Meu titulo"
          desc="minda descrição"
        />


        <CardProject
          src="/background.png"
          alt="fundo da imagem"
          title="Meu titulo"
          desc="minda descrição"
        />    
        
        <CardProject
          src="/background.png"
          alt="fundo da imagem"
          title="Meu titulo"
          desc="minda descrição"
        />


      </div>


      <Footer />
    </div>
  );
}
