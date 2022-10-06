import Head from "next/head";
import Image from "next/image";
import Navbar from "./components/navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import ContactButton from "./components/contactButton";
import NavbarPopup from "./components/navbarPopup";
import { useState } from "react";

export default function Home() {
    const [displayNav, setDisplayNav] = useState("hidden");

    function toggleNav() {
        if (displayNav === "hidden") {
            setDisplayNav("block");
        } else {
            setDisplayNav("hidden");
        }
    }

    return (
        <div className="h-full w-full ">
            <Head>
                <title>Elena Dierickx</title>
                <meta name="description" content="Portfolio of Elena Dierickx" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className="h-full w-full font-inter">
                <div className="h-full w-full">
                    <NavbarPopup displayNav={displayNav} />
                    <Navbar barsPress={toggleNav} />
                    <div id="home" className="h-[100vh] flex flex-col justify-between bg-pinkblue bg-cover bg-center ">
                        <div className="md:mx-20 mx-10 pt-44">
                            <h2 className="lg:text-8xl lg:w-[54rem] md:w-[40rem] md:text-7xl text-6xl sm:w-[34rem] ">
                                I create your web & mobile solutions!
                            </h2>
                            <p className="mt-8 lg:text-3xl lg:w-[40rem] md:text-2xl md:w-[30rem] sm:w-[26rem] text-xl">
                                I create websites, mobile applications and other web solutions for your need.
                            </p>
                        </div>
                        <a className="w-full items-center flex flex-col mb-10" href="#what-i-do">
                            <p>More down below</p>
                            <FontAwesomeIcon className="w-4 h-4" icon={faArrowDown} />
                        </a>
                    </div>
                    <div id="what-i-do" className="h-[100vh] flex sm:flex-row flex-col sm:justify-between bg-bluepink bg-cover bg-center ">
                        <div className="md:ml-20 ml-10 sm:pt-44 pt-20 sm:w-2/4 w-3/4">
                            <h3 className="font-semibold xl:text-7xl lg:text-6xl md:text-5xl text-4xl">What I do</h3>
                            <div className="pt-5 w-full xl:text-2xl lg:text-xl md:text-lg">
                                <p>I create websites, mobile applications and more!</p>
                                <p>Need an administrator portal?</p>
                                <p>A webshop?</p>
                                <p>Something more complicated?</p>
                                <p>Do you have a fun idea?</p>
                                <p>Contact me! I love new challenges.</p>
                            </div>
                            <ContactButton className="mt-10" />
                        </div>
                        <div className="md:mr-20 sm:mr-10 mr-0 sm:ml-0 ml-10 pt-10 sm:pt-[30rem] sm:w-2/4 w-3/4">
                            <h4 className="font-semibold xl:text-7xl lg:text-6xl md:text-5xl text-4xl">My workflow</h4>
                            <p className="pt-5 w-full xl:text-2xl lg:text-xl md:text-lg">
                                I start my design process by listening what you need. Working together with the client to create an idea. Then I start
                                designing the first prototype, after this we’ll look at it together and discuss what needs to be changed. If
                                everything looks perfect for us, it’s time to code!
                            </p>
                        </div>
                    </div>
                </div>
            </main>

            <footer className=""></footer>
        </div>
    );
}
