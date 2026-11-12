const Header = () => {
  return (
    <header className="flex justify-center border-b-10 border-b-[#1A85C8] bg-[#333]">
      <div className="flex w-full max-w-[1400px] items-center p-5">
        <div className="w-[100px] shrink-0">
          <img src="/img/logo.png" alt="Logo SISCOM" />
        </div>

        <div className="flex flex-1 items-center justify-center">
          <h1 className="text-3xl text-white">MATERIAL SAP</h1>
        </div>
      </div>
    </header>
  );
};

export default Header;
