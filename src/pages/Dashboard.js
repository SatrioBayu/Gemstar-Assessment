import Sidebar from "../components/Sidebar/Sidebar";
import { MdDensityMedium } from "react-icons/md";
import ClientList from "../components/ClientList";
import VC from "../components/VC";
import Footer from "../components/Footer";

const Dashboard = () => {
  return (
    <div className="container relative flex p-0">
      <Sidebar />
      <main className="container py-5 duration-150 text-left">
        <button className="block sm:hidden">
          <MdDensityMedium />
        </button>
        <ClientList />
        <VC />
        <Footer />
      </main>
    </div>
  );
};

export default Dashboard;
