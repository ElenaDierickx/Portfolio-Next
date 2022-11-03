import emailjs from "@emailjs/browser";
import React, { useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";

const ContactForm = () => {
    const [button, setButton] = useState(true);
    const [failMessage, setFailMessage] = useState(null);
    const [succesMessage, setSuccesMessage] = useState(null);
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
        setButton(false);

        emailjs.sendForm("service_kw4rq1u", "template_eek4q5q", form.current, "az8n4s_bBDLpA67dy").then(
            (result) => {
                setSuccesMessage("Thanks for your message! I'll answer as soon as possible");
                setFailMessage(null);
            },
            (error) => {
                setButton(true);
                setFailMessage("Something went wrong, please try again");
            }
        );
    };

    return (
        <form
            ref={form}
            onSubmit={sendEmail}
            method="POST"
            className="xl:w-[52rem] lg:w-4/6 w-full h-4/6 bg-white rounded-md shadow-lg p-5 flex flex-col"
        >
            <div className="flex md:flex-row flex-col justify-between">
                <input className="w-full h-10 bg-gray-100 rounded-md p-3 mr-5" placeholder="name" name="name" id="name" type="text" required />
                <input
                    className="w-full h-10 bg-gray-100 rounded-md p-3 md:ml-5 md:mt-0 mt-3"
                    placeholder="email"
                    name="mail"
                    id="mail"
                    type="email"
                    required
                />
            </div>
            <textarea
                className="w-full h-full bg-gray-100 rounded-md p-3 md:mt-5 mt-3 resize-none"
                placeholder="message"
                name="message"
                id="message"
                required
            />
            <div className="flex flex-row">
                {succesMessage && <p className="mt-3">{succesMessage}</p>}
                {!succesMessage && (
                    <button className="py-3 px-4 w-fit bg-[#2479A8] rounded-md text-gray-100 sm:text-2xl text-xl font-semibold transition ease-in-out hover:scale-105 duration-300 shadow-xl mt-3">
                        {button && "Verzenden"} {!button && <FontAwesomeIcon icon={faSpinner} className="animate-spin w-7 h-7" />}
                    </button>
                )}
                {failMessage && <p className="text-red-600 mt-3 self-center ml-3">{failMessage}</p>}
            </div>
        </form>
    );
};

export default ContactForm;
