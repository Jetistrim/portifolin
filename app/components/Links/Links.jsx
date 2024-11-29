import Link from "next/link";

const Links = () => {
   
   const myLinks = [
      {
         href: "http://www.google.com.br",
         text: "Meu Curriculo"
      },
      {
         href: "http://www.google.com.br",
         text: "Meu LinkedIn"
      },
      {
         href: "http://www.google.com.br",
         text: "Meu Github"
      }
      
   ]

   return (
      <div>
         <p className="text-2xl font-bold text-secondaryColor my-6">Links Complementares</p>
         <div className="flex flex-col gap-4">
            {myLinks.map((link, index) => (
               <Link key={index} href={link.href} className="flex justify-center rounded-lg bg-secondaryColor text-xl text-black py-3 w-full hover:bg-secondaryColorLight hover:text-2xl duration-300" >{link.text}</Link>
            ))}
         </div>
      </div>
   );
}

export default Links;