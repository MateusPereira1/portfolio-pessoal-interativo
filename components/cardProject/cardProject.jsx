import Image from "next/image"
import Link from "next/link"

export default function CardProject(props) {

    //Atenção, ao chamar esse componente preencha as tags
    // src = caminho da imagem
    // title = titulo da imagem
    // desc = descrição da imagem

    return (
        <div className="w-full gap-6 h-100 bgGray  rounded-xl shadow-2xl  justify-center  pb-3 flex flex-col  ">

            <div className="w-full h-[180px] relative rounded-t-xl overflow-hidden">
                <Image
                    src={props.src}
                    alt={props.title}
                    fill
                    style={{ objectFit: "cover", objectPosition: "top" }}
                />
            </div>


            <div className="w-full h-[120px] p-3 ">


                <h1 className="text-black font-bold text-3xl">{props.title}</h1>

                <p className="text-black text-xl font-normal">{props.desc}</p>

            </div>

            <a href={props.link} target="_blank" className="bgBlue hover:cursor-pointer text-white text-lg w-1/2 text-center mx-auto rounded-xl uppercase font-bold py-3 hover:w-2/3 transition-all"> Ver Mais</a>


        </div>
    )

}