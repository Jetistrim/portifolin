import Image from "next/image";

export default function Card() {

   const habilities = [{
      id: 1,
      title: "Linguagens de Programação",
      description: "Node.js, React, NextJS",
      image: "/img1.png"
   },
   {
      id: 2,
      title: "Bancos de Dados",
      description: "MySQL e NoSQL",
      image: "/img2.png"
   }]

   return (
      <div>
         <p className="text-2xl font-bold text-secondaryColor my-6"> Minhas Habilidades </p>
         <div className="flex flex-col gap-5 md:flex-row ">
            {habilities.map(hab => (
               <div key={hab.id} className="flex flex-col gap-3 bg-gray-700 rounded-md pb-4 shadow-md w-full">
                  <div className="relative h-[300px] md:h-[400px]">
                     <Image alt={"tech1"} src={hab.image} fill className="object-cover" />
                  </div>
                  <div className="flex flex-col gap-3 px-6">
                     <h2 className="text-secondaryColor">{hab.title}</h2>
                     <p>{hab.description}</p>
                  </div>
               </div>
            ))}
         </div>
      </div>
   )
}