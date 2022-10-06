import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

export default function Navbar(props) {
    return (
        <div className="w-full h-16 flex flex-row py-4 md:px-10 sm:px-5 px-3 shadow-xl items-center justify-between fixed top-0 backdrop-blur-md z-20">
            <a className="font-bold text-2xl text-center transition ease-in-out hover:scale-105 duration-300" href="#home">
                <h1>Elena Dierickx</h1>
            </a>
            <div className="items-center sm:flex flex-row justify-between xl:w-2/5 md:w-3/5 sm:w-4/6 hidden text-xl font-medium">
                <a className="transition ease-in-out hover:scale-110 duration-300" href="#what-i-do">
                    What I do
                </a>
                <a className="transition ease-in-out hover:scale-110 duration-300" href="#about">
                    About me
                </a>
                <a className="transition ease-in-out hover:scale-110 duration-300" href="#my-work">
                    My work
                </a>
                <a className="transition ease-in-out hover:scale-110 duration-300" href="#contact">
                    Contact me
                </a>
            </div>
            <FontAwesomeIcon className="w-7 h-7 block sm:hidden" icon={faBars} onClick={props.barsPress} />
        </div>
    );
}
