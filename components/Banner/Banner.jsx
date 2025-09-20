import Link from "next/link"


export default function Banner() {
    return (
        <div className="h-180 px-4 banner text-black flex flex-col alight-center justify-center items-center gap-4">


            <h1 className="md:text-6xl font-bold text-center text-white text-100 uppercase w-full text-4xl md:w-2/3">Olá, sou Mateus, desenvolvedor <br /> front-end</h1>
            <p className="text-center font-light text-2xl w-full md:w-1/2 text-white">Crio portfólios e interfaces interativas com React e Tailwind</p>

        <Link
        href="/about"
        className="bgBlue text-white font-bold  text-lg  rounded-lg px-16 py-2 mt-5 hover:px-23 transition-all "
        >Sobre Mim</Link>
            

        </div>
    )
}