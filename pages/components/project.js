import Image from "next/image";

export default function Project(props) {
    return (
        <a
            className="sm:w-[35rem] w-full h-80 bg-white rounded-md shadow-lg p-5 transition ease-in-out hover:scale-105 duration-300 hover:cursor-pointer mt-10"
            href="https://play.google.com/store/apps/details?id=com.zeekoe.spottyfind"
            target="_blank"
            rel="noreferrer"
        >
            <p className="font-semibold text-2xl">{props.title}</p>
            <p>{props.descr}</p>
            <div className="flex flex-row mt-5">
                {props.img &&
                    props.img.map((img, i) => {
                        return (
                            <div className="w-24 h-full overflow-hidden " key={i}>
                                <Image src={img} layout="responsive" objectFit="cover" alt="Spottyfind" />
                            </div>
                        );
                    })}
            </div>
        </a>
    );
}
