import axios from "axios";
import { useEffect, useState } from "react";
import Card from "../components/Card/Card";
import GridCard from "../components/Card/GridCard";
import Table from "../components/Table";
import Sidebar from "../components/Sidebar/Sidebar";
import { FaPlus } from "react-icons/fa";

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

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      const data = await axios.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=idr&per_page=10");
      setVc(data.data);
    } catch (error) {
      console.log(error);
    }
  };

  const onSearch = (e) => {
    setSearch(e.target.value);
  };

  return (
    <div className="container flex p-0">
      <Sidebar />
      <main className="container py-10 duration-150">
        <h1 className="text-4xl font-bold text-left">Hi Radhika, welcome back!</h1>
        <h3 className="text-left mt-10 text-3xl font-bold">Your client list</h3>
        <p className="text-left font-normal">You currently servicing 3 clients</p>
        <GridCard>
          {data.map((res, index) => (
            <Card key={index} image={res.image} title={res.title} desc={res.desc} />
          ))}
        </GridCard>
        <h3 className="text-left mt-10 text-3xl font-bold">Recent VC Market</h3>
        <p className="text-left font-normal">You can find the recent VC price here</p>

        <div className="mt-5 grid grid-cols-1 sm:grid-cols-4 gap-4">
          <input
            className="col-span-3 shadow bg-[#F2F2F2] border-[#bbbbbb] appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="search"
            type="text"
            placeholder="Search anything here..."
            onChange={onSearch}
          />
          <button className="bg-light-blue rounded-full text-white p-2 w-full">
            <FaPlus className="inline" /> Add new VC
          </button>
        </div>
        <Table data={vc} search={search} />
        <p href="#" className="font-bold text-left hover:cursor-pointer hover:underline text-dark-blue">
          See all approvals here
        </p>
        <p className="my-4 text-right text-sm">© Manning&Co. 2022</p>
      </main>
    </div>
  );
};

export default Dashboard;
