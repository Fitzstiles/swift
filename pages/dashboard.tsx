import Header from "./component/Header";
import Navigation from "./component/Navigation";
const Dashboaard = () => {
  return (
    <div className="bg-gray-900 text-white p-4 overflow-hidden relative w-full min-h-screen">
      {/* dashboard */}
      <Header />
      <div className="w-full h-24 bg-slate-500 bg-opacity-70 flex justify-between items-center p-4">
        <div>
          {/* placeholder text */}
          <p>200,000</p>
          <button className="bg-slate-500 py-1 px-4 rounded-md my-2">
            Add money
          </button>
        </div>

        <select
          className="text-black border-none cursor-pointer"
          name="text"
          id="ngn"
        >
          <option value="NGN">NGN</option>
          <option value="USD">USD</option>
          <option value="GHC">GHC</option>
        </select>
      </div>

      {/* <Navigation /> */}

      <Navigation />
    </div>
  );
};

export default Dashboaard;
