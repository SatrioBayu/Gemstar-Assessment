import ClientsIcon from "../../assets/image/Clients.svg";
import EditIcon from "../../assets/image/Edit.svg";
import LogoutIcon from "../../assets/image/Logout.svg";

const SidebarLowerBody = () => {
  return (
    <div className="text-left">
      <p className="text-xs tracking-widest uppercase">My Account</p>
      <ul className="my-5">
        <li>
          <a href="#" className="font-medium mb-3 flex items-center hover:font-bold">
            <img src={ClientsIcon} alt="Dashboard" />
            <p className="ml-3">My Clients</p>
          </a>
        </li>
        <li>
          <a href="#" className="font-medium mb-3 flex items-center hover:font-bold">
            <img src={EditIcon} alt="Dashboard" />
            <p className="ml-3">Edit Profiles</p>
          </a>
        </li>
        <li>
          <a href="#" className="font-medium mb-3 flex items-center hover:font-bold">
            <img src={LogoutIcon} alt="Dashboard" />
            <p className="ml-3">Logout</p>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default SidebarLowerBody;
