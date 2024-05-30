import Assets from "../assets/Assets";

const Header = () => {
  return (
    <div className="absolute py-2 mt-3 top-0 w-full flex h-20 px-10">
      <div className="h-full max-w-screen-xl m-auto flex justify-between w-full">
        <div className="h-full">
          {" "}
          <img className="h-full" src={Assets.blueLogo} />
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
  );
};

export default Header;
