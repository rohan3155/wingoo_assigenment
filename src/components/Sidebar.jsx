import { useState } from 'react';
import { Barchart, Forms, Home, Mail, Menu, Message, Policy, Time } from '../assets/icons';
import { Logo, LogoWithName } from '../assets/img';
import { Link } from 'react-router-dom';

const data = [
    {
        title: "Home",
        iconName: Home,
        route: "/"
    },
    {
        title: "Information",
        iconName: Forms,
        route: "/information"
    },
    {
        title: "Subscriptions",
        iconName: Mail,
        route: "/subscriptions"
    },
    {
        title: "Analysis",
        iconName: Barchart,
        route: "/analysis"
    },
    {
        title: "History",
        iconName: Time,
        route: "/history"
    },
    {
        title: "Feedback",
        iconName: Message,
        route: "/feedback"
    },
    {
        title: "Policy",
        iconName: Policy,
        route: "/policy"
    },
];

const Sidebar = () => {
    const [selected, setSelected] = useState(0);
    const [openMenu, setOpenMenu] = useState(false);

    return (
        <div className={`bg-[#2A2F34]   flex flex-col gap-8 pt-4 ${openMenu ? 'w-[20vw] items-start ps-8' : 'w-[10vw] items-center'}`}>
            <Link to={"/"}>
                <img src={openMenu ? LogoWithName : Logo} className='h-[3.5vw]' alt="" />
            </Link>
            <button onClick={() => setOpenMenu(!openMenu)} className='flex'>
                <img src={Menu} className='h-10' alt="Menu" />
            </button>

            {data.map((item, index) => (
                <Link key={index} to={item.route}>
                    <button onClick={() => setSelected(index)} className={`flex items-center gap-8 ${(selected === index && openMenu) ? "bg-[#12345D] px-2 w-[14vw] h-[4vw] rounded-xl" : `${selected === index && "bg-[#12345D]  h-[5vw] w-[5vw] justify-center rounded-full"}`} `}>
                        <img src={item.iconName} className='h-[2.2vw]' alt={item.title} />
                        {openMenu && <h2 className="text-white text-[1.6vw] font-serif">{item.title}</h2>}
                    </button>
                </Link>
            ))}

        </div>
    );
};

export default Sidebar;
