export default function ContactButton(props) {
    return (
        <button
            className={[
                "sm:py-5 sm:px-7 py-3 px-4 bg-[#E9ADB7] rounded-md text-gray-100 sm:text-2xl text-xl font-semibold transition ease-in-out hover:scale-105 duration-300 shadow-xl " +
                    props.className,
            ]}
            onClick={props.toContact}
        >
            Contact me
        </button>
    );
}
