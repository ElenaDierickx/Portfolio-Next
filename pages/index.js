import Head from "next/head";
import Image from "next/image";
import Navbar from "./components/navbar";
import ContactButton from "./components/contactButton";
import NavbarPopup from "./components/navbarPopup";
import Start from "./components/start";
import { useState } from "react";
import WhatIDo from "./components/whatIDo";

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
                    <NavbarPopup displayNav={displayNav} barsPress={toggleNav} />
                    <Navbar barsPress={toggleNav} />
                    <Start />
                    <WhatIDo />
                </div>
            </main>

            <footer className=""></footer>
        </div>
    );
}
