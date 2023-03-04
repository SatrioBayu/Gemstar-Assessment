import Logo from "../../assets/image/Logo.png";
import SidebarSeparator from "./SidebarSeparator";
import SidebarHeader from "./SidebarHeader";
import SidebarUpperBody from "./SidebarUpperBody";
import SidebarLowerBody from "./SidebarLowerBody";

const Sidebar = () => {
  return (
    <nav className="bg-dark-blue duration-150 hidden p-5 sm:block h-full sm:h-auto absolute sm:static text-white w-80">
      {/* Logo */}
      <div className="text-left">
        <img src={Logo} alt="Logo" className="w-full" />
      </div>
      {/* Header */}
      <SidebarHeader />
      <SidebarSeparator />
      {/* Upper Body */}
      <SidebarUpperBody />
      <SidebarSeparator />
      {/* Lower Body */}
      <SidebarLowerBody />
    </nav>
  );
};

export default Sidebar;
