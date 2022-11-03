export default function WhatIDo() {
    return (
        <div id="what-i-do" className="h-[100vh] flex flex-col bg-bluepink bg-cover bg-center ">
            <div className="basis-2/12"></div>
            <div className="basis-10/12 flex sm:flex-row flex-col sm:justify-between container mx-auto">
                <div className="md:w-2/4 w-4/4 sm:mx-0 mx-5">
                    <h3 className="font-semibold sm:text-7xl text-5xl">Services</h3>
                    <div className="sm:pt-5 pt-2 w-full sm:text-2xl text-lg">
                        <p>I create websites, mobile applications and more!</p>
                        <p>Need an administrator portal?</p>
                        <p>A webshop?</p>
                        <p>Something more complicated?</p>
                        <p>Do you have a fun idea?</p>
                        <p>Contact me! I love new challenges.</p>
                    </div>
                    <a href="#contact">
                        <button className="sm:py-5 sm:px-7 py-3 px-4 bg-[#E9ADB7] rounded-md text-gray-100 sm:text-2xl text-xl font-semibold transition ease-in-out hover:scale-105 duration-300 shadow-xl mt-10">
                            Contact me
                        </button>
                    </a>
                </div>
            </div>
        </div>
    );
}
