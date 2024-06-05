import Assets from "../assets/Assets";

const Header = () => {
  return (
    <div className="absolute py-2 mt-3 top-0 w-full flex h-20 px-10">
      <div className="h-full max-w-screen-xl m-auto flex justify-between w-full">
        <div className="h-full">
          {" "}
          {window.innerWidth > 768 ? <img className="h-full" src={Assets.blueLogo} /> : <img src={Assets.mobileLogo}/>}
        </div>

        <div className="flex items-center">
          <a
            href="#about"
            className="mx-2.5 hover:opacity-70 cursor-pointer text-2xl"
          >
            sobre
          </a>
          <a
            href="#projects"
            className="mx-2.5 hover:opacity-70  cursor-pointer text-2xl"
          >
            projetos
          </a>
          <a
            href="#team"
            className="mx-2.5 hover:opacity-70 cursor-pointer text-2xl"
          >
            time
          </a>
        </div>
      </div>{" "}
    </div>
  );
};

export default Header;
