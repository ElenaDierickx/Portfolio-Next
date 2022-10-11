export default function WhatIDo() {
    return (
        <div id="what-i-do" className="h-[100vh] flex flex-col bg-bluepink bg-cover bg-center ">
            <div className="basis-2/12"></div>
            <div className="basis-10/12 flex sm:flex-row flex-col sm:justify-between">
                <div className="md:ml-20 ml-10 sm:w-2/4 w-3/4">
                    <h3 className="font-semibold xl:text-7xl lg:text-6xl md:text-5xl text-4xl">What I do</h3>
                    <div className="sm:pt-5 pt-2 w-full xl:text-2xl lg:text-xl md:text-lg">
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
                <div className="md:mr-20 sm:mr-10 mr-0 sm:ml-0 ml-10 pt-6 sm:w-2/4 w-3/4 sm:h-3/4 justify-end flex flex-col">
                    <h4 className="font-semibold xl:text-7xl lg:text-6xl md:text-5xl text-4xl">My workflow</h4>
                    <p className="sm:pt-5 pt-2 w-full xl:text-2xl lg:text-xl md:text-lg">
                        I start my design process by listening what you need. Working together with the client to create an idea. Then I start
                        designing the first prototype, after this we’ll look at it together and discuss what needs to be changed. If everything looks
                        perfect for us, it’s time to code!
                    </p>
                </div>
            </div>
        </div>
    );
}
