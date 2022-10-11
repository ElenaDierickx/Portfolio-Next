import React, { useState } from "react";

const FORM_ENDPOINT = "https://public.herotofu.com/v1/e252cf60-279d-11ed-9d54-c9f9d2b00e7b";

const ContactForm = () => {
    const [submitted, setSubmitted] = useState(false);
    const handleSubmit = () => {
        setTimeout(() => {
            setSubmitted(true);
        }, 100);
    };

    if (submitted) {
        return (
            <div className="xl:w-[52rem] lg:w-4/6 w-11/12 h-4/6 bg-white rounded-md shadow-lg p-5 flex flex-col">
                <p className="text-2xl font-semibold">Thank you!</p>
                <p className="text-md">I&apos;ll be in touch soon.</p>
            </div>
        );
    }

    return (
        <form
            action={FORM_ENDPOINT}
            onSubmit={handleSubmit}
            method="POST"
            target="_blank"
            className="xl:w-[52rem] lg:w-4/6 w-11/12 h-4/6 bg-white rounded-md shadow-lg p-5 flex flex-col"
        >
            <div className="flex md:flex-row flex-col justify-between">
                <input className="w-full h-10 bg-gray-100 rounded-md p-3 mr-5" placeholder="name" name="Name" id="name" type="text" required />
                <input
                    className="w-full h-10 bg-gray-100 rounded-md p-3 md:ml-5 md:mt-0 mt-3"
                    placeholder="email"
                    name="Email"
                    id="email"
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
            <button className="py-3 px-4 bg-[#2479A8] rounded-md text-gray-100 sm:text-2xl text-xl font-semibold transition ease-in-out hover:scale-105 duration-300 shadow-xl w-36 mt-3">
                Submit
            </button>
        </form>
    );
};

export default ContactForm;
