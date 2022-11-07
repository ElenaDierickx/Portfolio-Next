import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

export default function Navbar(props) {
    return (
        <div className="w-full h-16 flex flex-row py-4 md:px-10 sm:px-5 px-3 shadow-xl items-center justify-between fixed top-0 backdrop-blur-md z-20">
            <a className="font-bold text-2xl text-center transition ease-in-out hover:scale-105 duration-300" href="#home">
                <h1>Elena Dierickx</h1>
            </a>
            <div className="items-center md:flex flex-row justify-between 2xl:w-2/5 sm:w-4/6 hidden text-xl font-medium text-center">
                <a className="transition ease-in-out hover:scale-110 duration-300" href="#what-i-do">
                    {props.lang === "eng" && "What I do"}
                    {props.lang === "nl" && "Wat ik doe"}
                </a>
                <a className="transition ease-in-out hover:scale-110 duration-300" href="#about">
                    {props.lang === "eng" && "About me"}
                    {props.lang === "nl" && "Over mij"}
                </a>
                <a className="transition ease-in-out hover:scale-110 duration-300" href="#my-work">
                    {props.lang === "eng" && "My work"}
                    {props.lang === "nl" && "Mijn werk"}
                </a>
                <a className="transition ease-in-out hover:scale-110 duration-300" href="#contact">
                    {props.lang === "eng" && "Contact me"}
                    {props.lang === "nl" && "Contacteer me"}
                </a>
                <div
                    className="w-32 rounded-md shadow-lg flex flex-row py-2 bg-[#E9ADB7] relative hover:cursor-pointer text-xl"
                    onClick={props.togglelang}
                >
                    <div
                        className={`bg-[#2479A8] absolute w-2/4 h-full top-0 rounded-md transition ease-in-out delay-300 ${
                            props.lang === "eng" ? "left-0" : "right-0"
                        }`}
                    />
                    <div className="w-1/2 flex justify-center self-center z-10">
                        <p className="">Eng</p>
                    </div>
                    <div className="w-1/2 flex justify-center self-center z-10">
                        <p>NL</p>
                    </div>
                </div>
            </div>
            <div className="flex flex-row items-center md:hidden">
                <div
                    className="w-24 rounded-md shadow-lg flex flex-row py-2 bg-[#E9ADB7] relative hover:cursor-pointer mr-5"
                    onClick={props.togglelang}
                >
                    <div className="bg-[#2479A8] absolute w-2/4 h-full top-0 rounded-md ease-in-out delay-300 left-0 z-20" />
                    <div className="w-1/2 flex justify-center self-center z-10">
                        <p>Eng</p>
                    </div>
                    <div className="w-1/2 flex justify-center self-center z-10">
                        <p>NL</p>
                    </div>
                </div>
                <FontAwesomeIcon className="w-7 h-7 " icon={faBars} onClick={props.barsPress} />
            </div>
        </div>
    );
}
