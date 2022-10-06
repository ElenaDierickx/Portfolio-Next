export default function ContactButton(props) {
    return (
        <button
            className={[
                "py-5 px-7 bg-[#E9ADB7] rounded-md text-gray-100 text-2xl font-semibold transition ease-in-out hover:scale-105 duration-300 shadow-xl " +
                    props.className,
            ]}
            onClick={props.toContact}
        >
            Contact me
        </button>
    );
}
