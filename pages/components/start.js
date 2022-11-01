import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";

export default function Start() {
    return (
        <div id="home" className="h-[100vh] flex flex-col bg-pinkblue bg-cover bg-center ">
            <div className="basis-3/12" />
            <div className="basis-9/12">
                <div className="container mx-auto h-full justify-between flex flex-col">
                    <div>
                        <h2 className="lg:text-8xl lg:w-[54rem] md:w-[40rem] md:text-7xl text-6xl sm:w-[34rem] sm:mx-0 mx-5">
                            I create your web & mobile solutions!
                        </h2>
                        <p className="mt-8 lg:text-3xl lg:w-[40rem] md:text-2xl md:w-[30rem] sm:w-[26rem] text-xl sm:mx-0 mx-5">
                            I create websites, mobile applications and other web solutions for your need.
                        </p>
                    </div>

                    <a className="w-full items-center flex flex-col mb-5" href="#what-i-do">
                        <p>More down below</p>
                        <FontAwesomeIcon className="w-4 h-4" icon={faArrowDown} />
                    </a>
                </div>
            </div>
        </div>
    );
}
