import { FaAddressCard } from "react-icons/fa";
import { FaCube } from "react-icons/fa6";
import { MdKeyboardArrowRight } from "react-icons/md";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { FiLogOut } from "react-icons/fi";
import { FaSearch } from "react-icons/fa";
import  logoreact from "../assets/react.svg"
import { CgNotes } from "react-icons/cg";


export const reu = {
    iconoCard: FaAddressCard,
    iconoCube: FaCube,
    iconArrowRight: MdKeyboardArrowRight,
    iconArrowLeft: MdKeyboardArrowLeft,
    iconLogout: FiLogOut,
    iconSearch: FaSearch,
    iconReact: logoreact,
    iconNote: CgNotes
}
export const LinkSideBar = [
    {
        label: '#01 card-1',
        icon: <reu.iconoCard/>,
        to: '/'
    },
    {
        label: '#02 card-2',
        icon: <reu.iconoCube />,
        to: '/proyect2'
    },
    {
        label: '#03 card-2',
        icon: 3,
        to: '/card3'
    }

]