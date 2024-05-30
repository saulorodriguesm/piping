import Assets from "../assets/Assets";

const Team = () => {
  return (
    <div className="p-10 ">
      <div className="max-w-screen-xl m-auto">
        <h3> Conheça o time</h3>
        <div className="w-100  text-black">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quo
          ipsa sed nostrum. Est nulla in eaque quia quaerat odio sit saepe
          doloribus sint quos, magni, molestias tenetur facere nisi! Lorem ipsum
          dolor sit amet consectetur adipisicing elit. Qui iure impedit suscipit
          aspernatur aliquid similique labore quas ratione dicta provident sed
          quod, quia aperiam optio, asperiores dolorem nihil, ut recusandae?
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti
          quam dolor inventore magnam exercitationem quod est doloribus alias,
          qui suscipit delectus tempore at! Fuga itaque velit pariatur tempore
          id quas!
          <div className="flex w-100 mt-10">
            <img
              className="border-solid border-2 border-piping-blue rounded-lg mb-6 w-72 h-72 "
              src={Assets.profile}
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
              src={Assets.profile}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
