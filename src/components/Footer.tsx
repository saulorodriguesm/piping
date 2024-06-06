import Assets from "../assets/Assets";

const Footer = () => {
  return (
    <div className="bg-piping-blue p-10">
      <div className="fixed bottom-4 right-4 cursor-pointer w-16 ease-in duration-300">
        <a href={`https://api.whatsapp.com/send?phone=+5511991530393`}>
          {" "}
          <img src={Assets.whatsapp} />
        </a>
      </div>
      <div className="max-w-screen-xl m-auto md:flex justify-between">
        {" "}
        <div>
          {" "}
          <img className="w-32 mb-5" src={Assets.whiteLogo} />
          <div className=" text-white my-3">πping projetos </div>
          <div className=" text-white my-3">CNPJ: 55.308.283/0001-25 </div>
          <div className="flex my-3">
            <img className="w-6 mr-3" src={Assets.instagram} />
            <img className="w-6" src={Assets.linkedin} />
          </div>
          <div className="my-3 text-white">paulo.silva@pi-ping.com </div>
          <div className="my-3 text-white">
            Horário de atendimento Seg. à Qui. das 08:00h às 18:00h | Sex. das
            08:00h às 17:00h{" "}
          </div>{" "}
        </div>
        <div className="flex items-end text-white text-xs">
          desenvolvido por{" "}
          <a target="_blank" href="https://www.linkedin.com/in/saulorodriguesm">
            : Saulo Rodrigues
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
