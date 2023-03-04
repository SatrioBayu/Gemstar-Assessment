import axios from "axios";
import { useEffect, useState } from "react";
import Card from "../components/Card/Card";
import GridCard from "../components/Card/GridCard";
import Table from "../components/Table";
import Sidebar from "../components/Sidebar/Sidebar";
import { FaPlus } from "react-icons/fa";
import { MdDensityMedium } from "react-icons/md";

const data = [
  {
    image: "https://logos-download.com/wp-content/uploads/2016/12/DBS_Bank_logo_logotype.png",
    title: "DSB Bank",
    desc: "DBS Bank Limited is a Singaporean multinational banking and financial services corporation headquartered at the Marina Bay Financial Centre in the Marina Bay district of Singapore.",
  },
  {
    image: "https://proudfoot.com/wp-content/uploads/2020/01/logo-dark.webp",
    title: "Proudfoot",
    desc: "Proudfoot engages teams and leadership, at all levels, to create innovative solutions to operational constraints and solve the people challenge associated with making sure that change takes place.",
  },
  {
    image: "https://rmi.com.sg/wp-content/uploads/2018/05/RMI-VI-09-1-2.png",
    title: "RMI",
    desc: "RMI is a trusted global verification partner for Asia-Pacific organisations, offering a highly personalised and comprehensive background screening service.",
  },
];

const Dashboard = () => {
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
    <div className="container relative flex p-0">
      <Sidebar />
      <main className="container py-5 duration-150 text-left">
        <button className="block sm:hidden">
          <MdDensityMedium />
        </button>
        <h1 className="text-4xl mt-5 font-bold ">Hi Radhika, welcome back!</h1>
        <h3 className=" mt-10 text-3xl font-bold">Your client list</h3>
        <p className=" font-normal">You currently servicing 3 clients</p>
        <GridCard>
          {data.map((res, index) => (
            <Card key={index} image={res.image} title={res.title} desc={res.desc} />
          ))}
        </GridCard>
        <h3 className=" mt-10 text-3xl font-bold">Recent VC Market</h3>
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
        <p className="my-4 text-right text-sm">© Manning&Co. 2022</p>
      </main>
    </div>
  );
};

export default Dashboard;
