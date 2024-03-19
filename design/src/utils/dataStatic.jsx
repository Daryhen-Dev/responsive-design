import { FaAddressCard } from "react-icons/fa";
import { FaCube } from "react-icons/fa6";
import { MdKeyboardArrowRight } from "react-icons/md";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { FiLogOut } from "react-icons/fi";
import { FaSearch } from "react-icons/fa";
import  logoreact from "../assets/react.svg"
import { CgNotes } from "react-icons/cg";
import  DuolingoCheck  from "../assets/duolingo/asset 11.svg"
import duolingopesas from "../assets/duolingo/asset 12.svg"
import duolingolibro from "../assets/duolingo/asset 13.svg"
import duolingocofre from "../assets/duolingo/asset 9.svg"
import duolingofin from "../assets/duolingo/asset 10.svg"
import animacionduolingo1 from "../assets/duolingo/duolingo1.json"
import animacionduolingo2 from "../assets/duolingo/duolingo2.json"


export const reu = {
    iconoCard: FaAddressCard,
    iconoCube: FaCube,
    iconArrowRight: MdKeyboardArrowRight,
    iconArrowLeft: MdKeyboardArrowLeft,
    iconLogout: FiLogOut,
    iconSearch: FaSearch,
    iconReact: logoreact,
    iconNote: CgNotes,
    iconDuolingoCheck: DuolingoCheck,
    iconDuolingoPesas: duolingopesas,
    iconDuolingoCofre: duolingocofre,
    iconDuolingoLibro: duolingolibro,
    iconDuolingoEnd: duolingofin,
    animacionduolingo1: animacionduolingo1,
    animacionduolingo2: animacionduolingo2
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
export const CoordenadasRuta = [
    {
        id:1,
        left:"0",
        title: "Recuerda el pasado",
        description: "Demuestra tus conocimientos y alcanza el nivel legendario",
        icono:reu.iconDuolingoCheck
    },
    {
        id:2,
        left:"-50px",
        title: "Recuerda el pasado",
        description: "Demuestra tus conocimientos y alcanza el nivel legendario",
        icono:reu.iconDuolingoPesas
    },
    {
        id:3,
        left:"-80px",
        title: "Recuerda el pasado",
        description: "Demuestra tus conocimientos y alcanza el nivel legendario",
        icono:reu.iconDuolingoLibro
    },
    {
        id:4,
        left:"-75px",
        title: "Cofre",
        description: "Demuestra tus conocimientos y alcanza el nivel legendario",
        icono:reu.iconDuolingoCofre
    },
    {
        id:5,
        left:"-35px",
        title: "Recuerda el pasado",
        description: "Demuestra tus conocimientos y alcanza el nivel legendario",
        icono:reu.iconDuolingoEnd
    }
]