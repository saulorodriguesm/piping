const Banner = () => {
  return (
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
  );
};

export default Banner;
