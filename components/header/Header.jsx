import Link from "next/link";
import Image from "next/image";
export default function Header() {
    return (
        <Link href="/" className="bgBlue p-4 block flex-row justify-center md:px-48 sm:flex ">
            <div className="flex justify-center md:justify-start items-center gap-4 w-full flex-row">
                <Image
                    alt="Logo Mateus"
                    src="/vercel.svg"
                    width={50}
                    height={50}
                />
                <h1 className="text-white text-xl font-bold">Mateus Pereira</h1>
            </div>

            <nav className="flex flex-row gap-4 mt-2 w-full justify-center md:justify-end">
                <Link href="/" className="hover:text-gray-400 font-bold text-base  ">Início</Link>
                <Link href="/about" className="hover:text-gray-400 font-bold text-base  ">Sobre</Link>
                <Link href="/projects" className="hover:text-gray-400 font-bold text-base  ">Projetos</Link>
                <Link href="/contact" className="hover:text-gray-400 font-bold text-base  ">Contato</Link>
            </nav>
        </Link>
    );
}
