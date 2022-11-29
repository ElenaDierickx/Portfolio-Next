import Head from "next/head";
import Navbar from "./components/navbar";
import NavbarPopup from "./components/navbarPopup";
import Start from "./components/start";
import { useState } from "react";
import WhatIDo from "./components/whatIDo";
import About from "./components/about";
import Projects from "./components/projects";
import Contact from "./components/contact";

export default function Home() {
    const [displayNav, setDisplayNav] = useState("hidden");
    const [lang, setLang] = useState("eng");

    function toggleNav() {
        if (displayNav === "hidden") {
            setDisplayNav("block");
        } else {
            setDisplayNav("hidden");
        }
    }

    function togglelang() {
        if (lang === "eng") {
            setLang("nl");
        } else {
            setLang("eng");
        }
    }

    return (
        <div className="h-full w-full ">
            <Head>
                <title>Elena Dierickx</title>
                <meta name="description" content="Portfolio of Elena Dierickx" />
                <meta property="og:image" content="img/front.png" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className="h-full w-full font-inter">
                <div className="h-full w-full">
                    <NavbarPopup displayNav={displayNav} onPress={toggleNav} lang={lang} />
                    <Navbar barsPress={toggleNav} togglelang={togglelang} lang={lang} />
                    <Start lang={lang} />
                    <WhatIDo lang={lang} />
                    <About lang={lang} />
                    <Projects lang={lang} />
                    <Contact lang={lang} />
                </div>
            </main>

            <footer className=""></footer>
        </div>
    );
}
