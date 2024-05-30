import "./App.css";
import logo from "./assets/logo2.png";
import colaborador from "./assets/colaborador1.jpg";
import whatsapp from "./assets/whatsapp.png";
import logoFooter from "./assets/logo.png";
import instagram from "./assets/instagram.png";
import linkedin from "./assets/linkedin.png";

function App() {
  return (
    <div className="">
      <div className="absolute py-2 mt-3 top-0 w-full flex h-20 px-10">
        <div className="h-full max-w-screen-xl m-auto flex justify-between w-full">
          <div className="h-full">
            {" "}
            <img className="h-full" src={logo} />
          </div>

          <div className="flex items-center">
            <div className="mx-2.5 hover:opacity-70 cursor-pointer text-2xl">
              sobre
            </div>
            <div className="mx-2.5 hover:opacity-70  cursor-pointer text-2xl">
              projetos
            </div>
            <div className="mx-2.5 hover:opacity-70 cursor-pointer text-2xl">
              contato
            </div>
          </div>
        </div>{" "}
      </div>
      <div className="bg-cover bg-worker h-screen">
        <div className="max-w-screen-xl m-auto flex items-center h-full justify-end">
          <div className="pr-5">
            {" "}
            <h1 className="text-5xl">Simplifique com a πping</h1>
            <h2 className="text-1xl">
              Excelência em Projetos, Construções e Montagens Industriais.
            </h2>
            <button className="rounded-md p-2 text-white mt-5 bg-piping-blue hover:opacity-70 cursor-pointer">
              entrar em contato{" "}
            </button>
          </div>
        </div>
      </div>
      <div className="p-10 ">
        <div className="max-w-screen-xl m-auto ">
          <h3> Sobre </h3>
          <div className="text-justify text-2xl">
            A 𝜋ping é uma empresa especializada na elaboração de projetos de
            engenharia, com foco em sistemas de tratamento de águas. Nossos
            serviços incluem o desenho de equipamentos, tubulação e estruturas,
            utilizando softwares de ponta como AutoCAD Plant 3D e SolidWorks.
            Realizamos análises técnicas detalhadas para garantir a eficiência e
            segurança dos projetos, além de oferecer acompanhamento completo na
            fabricação e montagem das estações em campo. Nossa equipe é dedicada
            a entregar soluções de alta qualidade, alinhadas aos mais altos
            padrões de engenharia.
          </div>{" "}
        </div>{" "}
      </div>

      <div className="p-10 bg-off-white">
        <div className="max-w-screen-xl m-auto">
          <h3> Conheça o time</h3>
          <div className="w-100">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quo
            ipsa sed nostrum. Est nulla in eaque quia quaerat odio sit saepe
            doloribus sint quos, magni, molestias tenetur facere nisi! Lorem
            ipsum dolor sit amet consectetur adipisicing elit. Qui iure impedit
            suscipit aspernatur aliquid similique labore quas ratione dicta
            provident sed quod, quia aperiam optio, asperiores dolorem nihil, ut
            recusandae? Lorem ipsum dolor sit amet, consectetur adipisicing
            elit. Deleniti quam dolor inventore magnam exercitationem quod est
            doloribus alias, qui suscipit delectus tempore at! Fuga itaque velit
            pariatur tempore id quas!
            <div className="flex w-100 mt-10">
              <img
                className="border-solid border-2 border-piping-blue rounded-lg mb-6 w-72 h-72 "
                src={colaborador}
              />
              <div className="ml-6">
                {" "}
                <div className="">Gabriela Rodrigues </div>
                <div>Projetista</div>
                <div>Formada em Engenharia</div>
              </div>
            </div>
            <div className="flex justify-end text-right">
              <div className="mr-6">
                {" "}
                <div>Paulo Silva </div>
                <div>Engenheiro</div>
                <div>Formada em Engenharia</div>{" "}
              </div>

              <img
                className="border-solid border-2 border-piping-blue  rounded-lg mb-6 w-72 h-72 "
                src={colaborador}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="p-10">
        <div className="max-w-screen-xl m-auto ">
          <h3> Projetos </h3>
        </div>
      </div>

      <div className="fixed bottom-4 right-4 cursor-pointer w-16 ease-in duration-300">
        <img src={whatsapp} />
      </div>
      <div className="bg-piping-blue p-10">
        <div className="max-w-screen-xl m-auto flex justify-between">
          {" "}
          <div>
            {" "}
            <img className="w-32 mb-5" src={logoFooter} />
            <div className=" text-white my-3">πping projetos </div>
            <div className="flex my-3">
              <img className="w-6 mr-3" src={instagram} />
              <img className="w-6" src={linkedin} />
            </div>
            <div className="my-3 text-white">contato@pi-ping.com </div>
            <div className="my-3 text-white">
              Horário de atendimento Seg. à Qui. das 08:00h às 18:00h | Sex. das
              08:00h às 17:00h{" "}
            </div>{" "}
          </div>
          <div className="flex items-end text-white text-xs">
            desenvolvido por{" "}
            <a
              target="_blank"
              href="https://www.linkedin.com/in/saulorodriguesm"
            >
              : Saulo Rodrigues
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
