import Image from "next/image"
import Link from "next/link"

export default function CardProject(props) {

    //Atenção, ao chamar esse componente preencha as tags
    // src = caminho da imagem
    // title = titulo da imagem
    // desc = descrição da imagem

    return (
        <div className="w-full gap-6 h-80 bgGray rounded-xl ">

            <div className="w-full h-1/2 relative rounded-t-xl overflow-hidden">
                <Image
                    src={props.src}
                    alt={props.title}
                    fill
                    style={{ objectFit: "cover", objectPosition: "center" }}
                />
            </div>


            <div className="w-full h-1/2 p-3 ">


                <h1 className="text-black font-bold text-2xl">{props.title}</h1>

                <p className="text-black text-l font-normal">{props.desc}</p>

            </div>
        </div>
    )

}