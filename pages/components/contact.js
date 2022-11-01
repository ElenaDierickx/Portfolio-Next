import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import ContactForm from "./contactForm";

export default function Contact() {
    return (
        <div id="contact" className="h-[100vh] flex flex-col bg-steps bg-cover bg-center overflow-hidden">
            <div className="basis-2/12"></div>
            <div className="basis-10/12 flex flex-row sm:justify-between container mx-auto">
                <div className="w-full mx-5 sm:mx-0">
                    <h7 className="font-semibold xl:text-7xl lg:text-6xl md:text-5xl text-4xl">Contact me</h7>
                    <div className="flex lg:flex-row flex-col w-full h-full lg:mt-10 mt-3">
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
