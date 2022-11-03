import Image from "next/image";

export default function Project(props) {
    return (
        <a
            className="sm:w-[35rem] w-full h-80 bg-white rounded-md shadow-lg p-5 transition ease-in-out hover:scale-105 duration-300 hover:cursor-pointer mt-10"
            href={props.link}
            target="_blank"
            rel="noreferrer"
        >
            <p className="font-semibold text-2xl">{props.title}</p>
            <p>{props.descr}</p>
            <div className="flex flex-row mt-5">
                {props.img &&
                    props.img.map((img, i) => {
                        return (
                            <div className={"h-full overflow-hidden " + props.width} key={i}>
                                <Image src={img} layout="responsive" objectFit="cover" alt="Spottyfind" />
                            </div>
                        );
                    })}
            </div>
        </a>
    );
}
