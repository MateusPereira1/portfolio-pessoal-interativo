import Header from "../header/Header";
import Image from "next/image";
import Link from "next/link";

function Social(props) {
    return (

            <a target="__blank" href={props.link}>


        <div className=" cursor-pointer flex flex-row px-6 py-2 rounded justify-center items-center gap-4 bg-white text-black text-bold my-2">


                <Image
                    src={props.path}
                    height={35}
                    width={35}
                    alt={props.alt}
                />

                <h1 className="font-bold">{props.nome}</h1>


           
        </div> 
        
        </a>
    )
}

export default function Footer(props) {
    return (
        <div>
            <Header />
            <div className="w-full h-1 bg-white flex flex-col justify-center items-center botton"></div>
            <h1 className="font-xl bgBlue uppercase text-3xl pt-10  font-bold text-center">Contato</h1>
            <div className="w-full md:px-48 bgBlue flex flex-row justify-center gap-4 pb-10 wrap px-4">

                <Social

                    path="/github.png"
                    alt="Github logo"
                    nome="GitHub"
                    link="https://github.com"
                />
                <Social

                    path="/linkedin.png"
                    alt="linkedin logo"
                    nome="Linkedin"
                    link="https://linkedin.com"
                />
                <Social
                    path="/instagram.png"
                    alt="Instagram logo"
                    nome="Instagram"
                    link="https://instagram.com"
                />



            </div>


            <div className="banner w-full h-15 items-center flex justify-center">
                <h1 className="font-normal text-ml"> © 2025 Mateus Pereira. Todos os direitos reservados.</h1>

            </div>



        </div>
    )
}