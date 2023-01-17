import { Link } from "react-router-dom";
import { MdOutlineDashboard } from "react-icons/md";
import { RiSettings4Line } from "react-icons/ri";
import { TbReportAnalytics } from "react-icons/tb";
import { AiOutlineUser, AiOutlineHeart } from "react-icons/ai";
import { FiMessageSquare, FiFolder, FiShoppingCart } from "react-icons/fi";
import onePic from "../img/one.jpg";
import twoPic from "../img/two.jpg";
import threePic from "../img/three.jpg";
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
export const TabsLinks = [
  { id: 1, name: "tab1", content: "Tab 1 content", img: onePic },
  { id: 2, name: "tab2", content: "Tab 2 content", img: twoPic },
  { id: 3, name: "tab3", content: "Tab 3 content", img: threePic },
];
