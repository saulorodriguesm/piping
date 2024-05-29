import "./App.css";
import logo from "./assets/logo2.png";
import colaborador from "./assets/colaborador1.jpg";

function App() {
  return (
    <div className="">
      <div className="absolute py-2 mt-3 top-0 w-full flex h-16 px-10">
        <div className="h-full max-w-screen-xl m-auto flex justify-between w-full">
          <div className="h-full">
            {" "}
            <img className="h-full" src={logo} />
          </div>

          <div className="flex items-center">
            <div className="mx-2.5">sobre</div>
            <div className="mx-2.5">projetos</div>
            <div className="mx-2.5">contato</div>
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
            <button className="rounded-md p-2 text-white mt-5 bg-piping-blue">
              entrar em contato{" "}
            </button>
          </div>
        </div>
      </div>
      <div className="py-7 px-10 ">
        <div className="max-w-screen-xl m-auto ">
          <h3> Sobre </h3>
          <div className="text-justify">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis
            explicabo voluptate eligendi molestiae velit quod, consectetur
            debitis provident modi ipsa rerum vitae mollitia perspiciatis eaque
            doloribus odit. Iusto, saepe accusamus? Lorem ipsum dolor sit amet,
            consectetur adipisicing elit. Soluta quidem similique inventore
            dignissimos nesciunt facilis cumque, sint sunt modi nisi placeat
            dolorem odio laudantium aperiam doloremque! Facilis quos recusandae
            ipsa. Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis
            recusandae ratione reiciendis porro illo provident at? Omnis nemo,
            quia repudiandae iusto, cupiditate culpa dicta tenetur
            exercitationem magni accusamus tempora sit! Lorem ipsum dolor sit
            amet, consectetur adipisicing elit. Officiis explicabo voluptate
            eligendi molestiae velit quod, consectetur debitis provident modi
            ipsa rerum vitae mollitia perspiciatis eaque doloribus odit. Iusto,
            saepe accusamus? Lorem ipsum dolor sit amet, consectetur adipisicing
            elit. Soluta quidem similique inventore dignissimos nesciunt facilis
            cumque, sint sunt modi nisi placeat dolorem odio laudantium aperiam
            doloremque! Facilis quos recusandae ipsa. Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Omnis recusandae ratione reiciendis
            porro illo provident at? Omnis nemo, quia repudiandae iusto,
            cupiditate culpa dicta tenetur exercitationem magni accusamus
            tempora sit!Lorem ipsum dolor sit amet, consectetur adipisicing
            elit. Officiis explicabo voluptate eligendi molestiae velit quod,
            consectetur debitis provident modi ipsa rerum vitae mollitia
            perspiciatis eaque doloribus odit. Iusto, saepe accusamus? Lorem
            ipsum dolor sit amet, consectetur adipisicing elit. Soluta quidem
            similique inventore dignissimos nesciunt facilis cumque, sint sunt
            modi nisi placeat dolorem odio laudantium aperiam doloremque!
            Facilis quos recusandae ipsa. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Omnis recusandae ratione reiciendis porro illo
            provident at? Omnis nemo, quia repudiandae iusto, cupiditate culpa
            dicta tenetur exercitationem magni accusamus tempora sit!Lorem ipsum
            dolor sit amet, consectetur adipisicing elit. Officiis explicabo
            voluptate eligendi molestiae velit quod, consectetur debitis
            provident modi ipsa rerum vitae mollitia perspiciatis eaque
            doloribus odit. Iusto, saepe accusamus? Lorem ipsum dolor sit amet,
            consectetur adipisicing elit. Soluta quidem similique inventore
            dignissimos nesciunt facilis cumque, sint sunt modi nisi placeat
            dolorem odio laudantium aperiam doloremque! Facilis quos recusandae
            ipsa. Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis
            recusandae ratione reiciendis porro illo provident at? Omnis nemo,
            quia repudiandae iusto, cupiditate culpa dicta tenetur
            exercitationem magni accusamus tempora sit!
          </div>{" "}
        </div>{" "}
      </div>

      <div className="py-7 px-10 bg-off-white">
        <div className="max-w-screen-xl m-auto">
          <h3> Conheça o time</h3>
          <div className=" justify-around w-100">
            <div className="flex w-100">
              <img className="rounded-lg mb-6 w-72 h-72 " src={colaborador} />
              <div className="ml-6">
                {" "}
                <div className="t">Gabriela Rodrigues </div>
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

              <img className="rounded-lg mb-6 w-72 h-72 " src={colaborador} />
            </div>
          </div>
        </div>
      </div>

      <div className="py-7 px-10">
        <div className="max-w-screen-xl m-auto ">
          <h3> Projetos </h3>
        </div>
      </div>

      <div className="bg-piping-blue text-white text-center">
        {" "}
        desenvolvido por Saulo Rodrigues{" "}
      </div>
    </div>
  );
}

export default App;
