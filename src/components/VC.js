import Table from "./Table";
import { FaPlus } from "react-icons/fa";
import { useState, useEffect } from "react";
import axios from "axios";

const VC = () => {
  const [vc, setVc] = useState("");
  const [search, setSearch] = useState("");
  const [isSeeAll, setIsSeeAll] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    setIsLoading(true);
    try {
      const data = await axios.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=idr&per_page=10");
      setVc(data.data);
    } catch (error) {
      console.log(error.message);
    }
    setIsLoading(false);
  };

  const onSearch = (e) => {
    setSearch(e.target.value);
  };

  const setSeeAll = (cond) => {
    setIsSeeAll(cond);
  };

  return (
    <div>
      <h3 className=" mt-10 text-2xl font-bold">Recent VC Market</h3>
      <p className=" font-normal">You can find the recent VC price here</p>
      <div className="mt-5 grid sm:grid-cols-4 gap-4">
        <input
          className="col-span-4 sm:col-span-3 shadow bg-[#F2F2F2] border-[#bbbbbb] appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="search"
          type="text"
          placeholder="Search VC by name here..."
          onChange={onSearch}
        />
        <button className="col-span-4 sm:col-auto bg-light-blue rounded-full text-white p-2 w-full hover:shadow-lg hover:font-bold">
          <FaPlus className="inline" /> Add new VC
        </button>
      </div>
      <Table data={isSeeAll ? vc : vc.slice(0, 3)} search={search} isLoading={isLoading} />
      {isSeeAll ? (
        <p onClick={() => setSeeAll(false)} href="#" className="font-bold  hover:cursor-pointer hover:underline text-dark-blue">
          See less VC
        </p>
      ) : (
        <p onClick={() => setSeeAll(true)} href="#" className="font-bold  hover:cursor-pointer hover:underline text-dark-blue">
          See all VC here
        </p>
      )}
    </div>
  );
};

export default VC;
