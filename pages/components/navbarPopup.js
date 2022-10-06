export default function NavbarPopup(props) {
    return (
        <div className={"h-full w-full fixed z-10 top-0 left-0 backdrop-blur-md sm:hidden " + props.displayNav}>
            <div className="relative flex flex-col justify-evenly h-full w-full items-center text-5xl font-semibold ">
                <a className="transition ease-in-out hover:scale-110 duration-300 mt-16" href="#what-i-do" onClick={props.onPress}>
                    What I do
                </a>
                <a className="transition ease-in-out hover:scale-110 duration-300" href="#about" onClick={props.onPress}>
                    About me
                </a>
                <a className="transition ease-in-out hover:scale-110 duration-300" href="#my-work" onClick={props.onPress}>
                    My work
                </a>
                <a className="transition ease-in-out hover:scale-110 duration-300" href="#contact" onClick={props.onPress}>
                    Contact me
                </a>
            </div>
        </div>
    );
}
