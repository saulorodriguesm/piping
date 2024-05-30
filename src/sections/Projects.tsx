import Assets from "../assets/Assets";

const Projects = () => {
  return (
    <div className="p-10 bg-off-white">
      <div className="max-w-screen-xl m-auto ">
        <h3> Projetos </h3>
        <div className="flex justify-between mb-20">
          <div className="w-1/4 ">
            <img className="h-60 w-full" src={Assets.project1} />
            <div className="bg-piping-blue text-white w-full p-3 min-h-24 flex items-center">
              Estação de tratamento de efluentes biológica com polimento e reuso
              através de osmose reversa{" "}
            </div>
          </div>
          <div className="w-1/4">
            <img className="h-60 w-full" src={Assets.project2} />
            <div className="bg-piping-blue text-white w-full p-3 min-h-24 flex items-center">
              Estação de tratamento de efluentes físico/químico
            </div>
          </div>{" "}
          <div className="w-1/4">
            <img className="h-60 w-full" src={Assets.project3} />
            <div className="bg-piping-blue text-white w-full p-3 min-h-24 flex items-center">
              Estação de tratamento de efluentes biológico (sistema por
              batelada){" "}
            </div>
          </div>
        </div>
        <div className="flex justify-between">
          <div className="w-1/4">
            <img className="w-full h-60" src={Assets.project4} />
            <div className="bg-piping-blue text-white w-full p-3 min-h-24 flex items-center">
              Unidade móvel de tratamento de água
            </div>
          </div>
          <div className="w-1/4">
            <img className="h-60 w-full" src={Assets.project5} />
            <div className="bg-piping-blue text-white w-full p-3 min-h-24 flex items-center">
              Estação de tratamento de água
            </div>
          </div>{" "}
          <div className="w-1/4">
            <img className="h-60 w-full" src={Assets.project6} />
            <div className="bg-piping-blue text-white w-full p-3 min-h-24 flex items-center">
              Estação de tratamento de efluentes com alto teor de sílica
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
