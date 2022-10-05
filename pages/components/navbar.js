import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

export default function Navbar() {
    return (
        <div className="w-full h-16 flex flex-row py-4 md:px-10 sm:px-5 px-3 shadow-xl items-center justify-between absolute top-0">
            <h1 className="font-bold text-2xl text-center">Elena Dierickx</h1>
            <div className="items-center sm:flex flex-row justify-between xl:w-2/5 md:w-3/5 sm:w-4/6 hidden text-xl font-medium">
                <a>What I do</a>
                <a>About me</a>
                <a>My work</a>
                <a>Contact me</a>
            </div>
            <FontAwesomeIcon className="w-7 h-7 block sm:hidden" icon={faBars} />
        </div>
    );
}
