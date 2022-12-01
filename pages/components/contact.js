import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import ContactForm from "./contactForm";

export default function Contact(props) {
    return (
        <div id="contact" className="h-[100vh] flex flex-col bg-steps bg-cover bg-center overflow-hidden">
            <div className="basis-2/12"></div>
            <div className="basis-10/12 flex flex-row sm:justify-between container mx-auto">
                <div className="w-full mx-5 sm:mx-0">
                    <h7 className="font-semibold xl:text-7xl lg:text-6xl md:text-5xl text-4xl">
                        {props.lang === "eng" && "Contact me"}
                        {props.lang === "nl" && "Contacteer me"}
                    </h7>
                    <div className="flex lg:flex-row flex-col w-full h-full lg:mt-10 mt-3">
                        <ContactForm lang={props.lang} />
                        <div className="lg:ml-10 lg:mt-0 mt-3">
                            <h8 className="font-semibold xl:text-5xl lg:text-3xl text-2xl">
                                {props.lang === "eng" && "Or find me at"}
                                {props.lang === "nl" && "Of vind me hier"}
                            </h8>
                            <p className="lg:text-xl text-lg">elena.dierickx@outlook.be</p>
                            <div className="flex flex-row lg:mt-3 mt-1 mb-3">
                                <a
                                    href="mailto: elena.dierickx@outlook.be"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="hover:text-blue-600 ease-in-out duration-300"
                                >
                                    <FontAwesomeIcon icon={faEnvelope} className="lg:w-10 w-7" />
                                </a>
                                <a
                                    href="https://github.com/ElenaDierickx"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="hover:text-blue-600 ease-in-out duration-300"
                                >
                                    <FontAwesomeIcon icon={faGithub} className="lg:w-10 w-7 ml-3" />
                                </a>
                                <a
                                    href="https://www.linkedin.com/in/elena-dierickx"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="hover:text-blue-600 ease-in-out duration-300"
                                >
                                    <FontAwesomeIcon icon={faLinkedin} className="lg:w-10 w-7 ml-3" />
                                </a>
                            </div>
                            <h9 className="font-semibold xl:text-5xl lg:text-3xl text-2xl">
                                {props.lang === "eng" && "btw-number"}
                                {props.lang === "nl" && "btw-nummer"}
                            </h9>
                            <p className="lg:text-xl text-lg">BE0793.328.356</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
