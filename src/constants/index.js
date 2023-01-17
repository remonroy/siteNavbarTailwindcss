import { Link } from "react-router-dom";
import { MdOutlineDashboard } from "react-icons/md";
import { RiSettings4Line } from "react-icons/ri";
import { TbReportAnalytics } from "react-icons/tb";
import { AiOutlineUser, AiOutlineHeart } from "react-icons/ai";
import { FiMessageSquare, FiFolder, FiShoppingCart } from "react-icons/fi";

export const NavLinks = [
  { name: "Dashboard", link: "/dashboard", icon: <MdOutlineDashboard /> },
  { name: "User", link: "/user", icon: <AiOutlineUser /> },
  { name: "Messages", link: "/messages", icon: <FiMessageSquare /> },
  {
    name: "Analytics",
    link: "/analytics",
    icon: <TbReportAnalytics />,
    margin: true,
  },
  { name: "File Manager", link: "/fileMessenger", icon: <FiFolder /> },
  { name: "Cart", link: "/cart", icon: <FiShoppingCart /> },
  { name: "Saved", link: "/saved", icon: <AiOutlineHeart />, margin: true },
  { name: "Setting", link: "/setting", icon: <RiSettings4Line /> },
];
