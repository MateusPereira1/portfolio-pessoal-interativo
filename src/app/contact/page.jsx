import Header from "../../../components/header/Header";
import Footer from "../../../components/Footer/footer";
import Form from "../../../components/form/Form";
import SubBanner from "../../../components/SubBanner/SubBanner";


export default function Home() {
  return (
    <div className="bg-black">
      

      <Header />

      <SubBanner title="Contato" />

      <div className="w-full alight-center justify-center flex py-30 bg-white">
        <Form />
      </div>

      <Footer />
    </div>
  );
}
