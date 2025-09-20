import Image from "next/image"


export default function Skill(props) {
    return (

        //Atenção para a utilizção desse card
        // src = caminho da imagem
        //title = titulo do card/tecnologia e também do texto alternativo
        //desc = descrição do card, ou seja, da tecnologia


        <div className="bg-white w-[95%] mx-auto rounded-4xl shadow-2xl my-6 p-5">

            <div className="flex flex-row justify-start items-center gap-5 w-full">

                <Image
                    src={props.src}
                    width={60}
                    height={40}
                    alt={props.title}

                />

                <h1 className="text-black text-4xl font-bold">{props.title}</h1>
            </div>

            <p className="w-full font-bold text-lg text-black">{props.desc}</p>



        </div>
    )
}