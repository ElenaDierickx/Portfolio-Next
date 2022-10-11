import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import ContactForm from "./contactForm";

export default function Contact() {
    return (
        <div id="contact" className="h-[100vh] flex flex-col bg-steps bg-cover bg-center overflow-hidden">
            <div className="basis-2/12"></div>
            <div className="basis-10/12 flex flex-row sm:justify-between">
                <div className="md:ml-20 ml-10 w-full">
                    <h7 className="font-semibold xl:text-7xl lg:text-6xl md:text-5xl text-4xl">Contact me</h7>
                    <div className="flex lg:flex-row flex-col w-full h-full lg:mt-10 mt-3">
                        {/* <div className="xl:w-[52rem] lg:w-4/6 w-11/12 h-4/6 bg-white rounded-md shadow-lg p-5 flex flex-col ">
                            <div className="flex md:flex-row flex-col justify-between">
                                <input className="w-full h-10 bg-gray-100 rounded-md p-3 mr-5" placeholder="name" />
                                <input className="w-full h-10 bg-gray-100 rounded-md p-3 md:ml-5 md:mt-0 mt-3" placeholder="email" />
                            </div>
                            <textarea className="w-full h-full bg-gray-100 rounded-md p-3 md:mt-5 mt-3 resize-none" placeholder="email" />
                            <button className="py-3 px-4 bg-[#2479A8] rounded-md text-gray-100 sm:text-2xl text-xl font-semibold transition ease-in-out hover:scale-105 duration-300 shadow-xl w-36 mt-3">
                                Submit
                            </button>
                        </div> */}
                        <ContactForm />
                        <div className="lg:ml-10 lg:mt-0 mt-3">
                            <h8 className="font-semibold xl:text-5xl lg:text-3xl text-2xl">Or find me at</h8>
                            <p className="lg:text-xl text-lg">elena.dierickx@outlook.be</p>
                            <div className="flex flex-row lg:mt-3 mt-1">
                                <a href="mailto: elena.dierickx@outlook.be" target="_blank" rel="noreferrer">
                                    <FontAwesomeIcon icon={faEnvelope} className="lg:w-10 w-7" />
                                </a>
                                <a href="https://github.com/ElenaDierickx" target="_blank" rel="noreferrer">
                                    <FontAwesomeIcon icon={faGithub} className="lg:w-10 w-7 ml-3" />
                                </a>
                                <a href="https://www.linkedin.com/in/elena-dierickx" target="_blank" rel="noreferrer">
                                    <FontAwesomeIcon icon={faLinkedin} className="lg:w-10 w-7 ml-3" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
