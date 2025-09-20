import Header from "../../components/header/Header";
import Banner from "../../components/Banner/Banner";
import Footer from "../../components/Footer/footer";
import CardProject from "../../components/cardProject/cardProject";



export default function Home() {
  return (
    <div className="bg-white">
      <Header />
      <Banner />
      

  <div className="w-full min-h-screen py-40 px-10 grid grid-cols-1 md:px-42 gap-10 sm:grid-cols-2 md:grid-cols-3 justify-center">
 
          <CardProject
           src="/orienta.png"
           alt="Orienta Imagem"
           title="ORIENTA"
           desc=" Projeto de uma startup que visa auxiliar na triagem de alunos do ensino médio para vestibulares "
           link="https://projeto-orienta.vercel.app/"
         
         />    
            <CardProject
           src="/pereira.png"
           alt="Landing Page Advocacia"
           title="Pereira Sites"
           desc=" Landing Page de portfólio para uma agência de desenvolvimento de landing pages "
           link="https://mateuspereira1.github.io/pereira/"
         
         />    
           
        
         <CardProject
           src="/perfe.png"
           alt="Perfect page"
           title="Perfect Pages"
           desc=" Landing page de portfólio para uma Software House "
           link="https://mateuspereira1.github.io/PerfectPage/"
         
         />
 
         <CardProject
           src="/personal.png"
           alt="Jorge Personal"
           title="Jorge Personal"
           desc=" Landing Page fictícia para um personal Trainer particular "
           link="https://mateuspereira1.github.io/pereira/sites/personal/index.html"
         
         />
 
 
         <CardProject
           src="/advocacia.png"
           alt="Landing Page Advocacia"
           title="Advocacia Site"
           desc=" Landing Page fictícia para um escritório de advocacia "
           link="https://mateuspereira1.github.io/Advocacia/"
         
         />    
           
   
 
 
       </div>
 

      <Footer />

    </div>
  );
}
