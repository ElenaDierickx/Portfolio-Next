import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";

export default function Start() {
    return (
        <div id="home" className="h-[100vh] flex flex-col justify-between bg-pinkblue bg-cover bg-center ">
            <div className="md:mx-20 mx-10 pt-44">
                <h2 className="lg:text-8xl lg:w-[54rem] md:w-[40rem] md:text-7xl text-6xl sm:w-[34rem] ">I create your web & mobile solutions!</h2>
                <p className="mt-8 lg:text-3xl lg:w-[40rem] md:text-2xl md:w-[30rem] sm:w-[26rem] text-xl">
                    I create websites, mobile applications and other web solutions for your need.
                </p>
            </div>
            <a className="w-full items-center flex flex-col mb-10" href="#what-i-do">
                <p>More down below</p>
                <FontAwesomeIcon className="w-4 h-4" icon={faArrowDown} />
            </a>
        </div>
    );
}
