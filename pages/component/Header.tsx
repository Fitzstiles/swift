const Header = () => {
  const firstName: string = "Austin";
  return (
    <header className="flex justify-between mb-10">
      <div>
        <p className="text-gray-300 text-xs">Hi,{firstName}</p>
        <p className="font-bold text-lg">Dashboard</p>
      </div>

      <div className="space-x-4 flex items-center">
        <div style={{ width: "50px", height: "50px" }}>
          <img
            src="https://cdn.pmnewsnigeria.com/2020/11/Frederick-Leonard.jpg"
            alt=""
            className="w-full h-full object-cover rounded-[50%] border-solid border-2 border-indigo-600 cursor-pointer"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
