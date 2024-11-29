import Image from "next/image";
import Button from "./components/Button/Button";
import Card from "./components/Card/Card";
import Links from "./components/Links/Links";

export default function Home() {

  const myName = "Paulo Gabriel"

	return (
		<div className="bg-primaryColor min-h-screen flex flex-col items-center text-white">
			<main className=" w-[95%] lg:max-w-[880px] ">
				<header className="flex items-center justify-between my-10 ">
					<h1 className="text-3xl text-secondaryColor justify-between ">
						Meus Links
					</h1>
					<Image
						width={120}
						height={120}
						src="logo.svg"
						alt="icon"
						className="bg-secondaryColor p-3 rounded-full"
					/>
				</header>

				<section className="flex flex-col gap-8 mb-4">
					<div className="relative h-[300px] ">
						<Image
							alt="minha foto"
							src="/pessoa.jpg"
							fill
							className="object-cover rounded-2xl "
						/>
					</div>

          <p className="text-2xl font-bold text-secondaryColor">Olá, eu sou {myName}</p>
          <p>Estou entusiasmado para explorar novas oportunidades e contribuir para projetos desafiadores. Se você está buscando um desenvolvedor full stack dedicado e apaixonado, estou pronto para ajudar.
          </p>

          <Button textButton={"Fale Comigo"} />
				</section>

        <section>
          <Card />
        </section>
        <section>
          <Links />
        </section>
			</main>
		</div>
	);
}
