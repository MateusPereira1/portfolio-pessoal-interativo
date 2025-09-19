
export default function Form(){
    return(
        
        <form className=" md:w-2/3 py-10 bg-white shadow-2xl flex flex-col  justify-center alight-center rounded shadow-xl border-3 gap-4">
            <h1 className="text-black mx-auto text-4xl font-bold">Formulário</h1>
            <input required type="text" placeholder="Nome" className=" outline-black/60 placeholder:text-gray mx-auto border-3 border-black/50 rounded w-2/3 px-2 py-2 text-black" />
            <input required type="email" placeholder="Email" className=" outline-black/60 placeholder:text-gray mx-auto border-3 border-black/50 rounded w-2/3 px-2 py-2 text-black" />
            <input required type="text" placeholder="Assunto" className=" outline-black/60 placeholder:text-gray mx-auto border-3 border-black/50 rounded w-2/3 px-2 py-2 text-black" />
            <textarea name="Menssagem"  placeholder="Menssagem" id="" className=" outline-black/60 placeholder:text-gray min-h-10 resize-none mx-auto border-3 border-black/50 rounded w-2/3 px-2 py-2 text-black" ></textarea>
            <p className="text-black w-2/3 mx-auto text-[13px]">Ao submeter esse formulário fique ciente de que está permitindo o manuseio desses dados para fins profissionais</p>
            <button type="submit" className="placeholder:text-gray w-2/3 bgBlue text-center mx-auto rounded text-xl font-bold py-2 cursor-pointer">Enviar</button>   
        </form>
    )
}