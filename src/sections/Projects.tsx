import Assets from "../assets/Assets";

const Projects = () => {
  return (
    <div className="p-10 bg-off-white">
      <div className="max-w-screen-xl m-auto ">
        <h3> Projetos </h3>
        <div className="flex justify-between mb-20">
          <div className="w-1/4">
            <img src={Assets.project} />
            <div>Projeto 1</div>
          </div>
          <div className="w-1/4">
            <img src={Assets.project} />
            <div>Projeto 2</div>
          </div>{" "}
          <div className="w-1/4">
            <img src={Assets.project} />
            <div>Projeto 3</div>
          </div>
        </div>
        <div className="flex justify-between">
          <div className="w-1/4">
            <img src={Assets.project} />
            <div>Projeto 4</div>
          </div>
          <div className="w-1/4">
            <img src={Assets.project} />
            <div>Projeto 5</div>
          </div>{" "}
          <div className="w-1/4">
            <img src={Assets.project} />
            <div>Projeto 6</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
