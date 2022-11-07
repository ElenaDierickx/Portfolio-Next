export default function WhatIDo(props) {
    return (
        <div id="what-i-do" className="h-[100vh] flex flex-col bg-bluepink bg-cover bg-center ">
            <div className="basis-2/12"></div>
            <div className="basis-10/12 flex sm:flex-row flex-col sm:justify-between container mx-auto">
                <div className="md:w-2/4 w-4/4 sm:mx-0 mx-5">
                    <h3 className="font-semibold sm:text-7xl text-5xl">Services</h3>
                    <div className="sm:pt-5 pt-2 w-full sm:text-2xl text-lg">
                        <p>
                            {props.lang === "eng" && "I create websites, mobile applications and more!"}
                            {props.lang === "nl" && "Ik maak websites, mobiele applicaties en meer!"}
                        </p>
                        <p>
                            {props.lang === "eng" && "Need an administrator portal?"}
                            {props.lang === "nl" && "Een administratie portaal nodig?"}
                        </p>
                        <p>
                            {props.lang === "eng" && "A webshop?"}
                            {props.lang === "nl" && "Een webshop?"}
                        </p>
                        <p>
                            {props.lang === "eng" && "Something more complicated?"}
                            {props.lang === "nl" && "Iets ingewikkelder?"}
                        </p>
                        <p>
                            {props.lang === "eng" && "Something more complicated?"}
                            {props.lang === "nl" && "Heb je een leuk idee?"}
                        </p>
                        <p>
                            {props.lang === "eng" && "Contact me!"}
                            {props.lang === "nl" && "Contacteer me!"}
                        </p>
                    </div>
                    <a href="#contact">
                        <button className="sm:py-5 sm:px-7 py-3 px-4 bg-[#E9ADB7] rounded-md text-gray-100 sm:text-2xl text-xl font-semibold transition ease-in-out hover:scale-105 duration-300 shadow-xl mt-10">
                            {props.lang === "eng" && "Contact me"}
                            {props.lang === "nl" && "Contacteer me"}
                        </button>
                    </a>
                </div>
            </div>
        </div>
    );
}
