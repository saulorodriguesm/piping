import "./App.css";
import logo from "./assets/logo-white.png";

function App() {
  return (
    <div className="">
      <div className="header py-2  top-0 w-full flex  h-16  ">
        <div className="h-full max-w-screen-xl m-auto flex justify-between w-full">
          <div className="h-full">
            {" "}
            <img className="h-full" src={logo} />
          </div>

          <div className="flex text-white items-center">
            <div className="mx-2.5">sobre</div>
            <div className="mx-2.5">projetos</div>
            <div className="mx-2.5">contato</div>
          </div>
        </div>{" "}
      </div>
      <div className="banner h-96">
        <div className="max-w-screen-xl m-auto flex items-center h-full ">
          <div>
            {" "}
            <h1 className="text-5xl">PiPing Projetos</h1>
            <h2 className="text-2xl">
              Excelência em Projetos, Construções e Montagens Industriais.
            </h2>
            <h3 className="text-1xl">
              Somos uma empresa de engenharia atuante em vários segmentos, tanto
              conceitualização, projetos, construção e montagens industriais
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
