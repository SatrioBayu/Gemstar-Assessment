import DashboardIcon from "../../assets/image/Vector.svg";
import ApprovalsIcon from "../../assets/image/Approvals.svg";

const SidebarUpperBody = () => {
  return (
    <div className="text-left">
      <p className="text-xs tracking-widest uppercase">Navigation</p>
      <ul className="my-5">
        <li>
          <a href="#" className="font-bold mb-3 flex items-center text-black">
            <img src={DashboardIcon} alt="Dashboard" />
            <p className="ml-3">Dashboard</p>
          </a>
        </li>
        <li>
          <a href="#" className="font-medium mb-3 flex items-center hover:font-bold">
            <img src={ApprovalsIcon} alt="Dashboard" />
            <p className="ml-3">Approvals</p>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default SidebarUpperBody;
