import Project from "./project";
import spotty1 from "./../../public/img/SpottyFind/SpottyFind1.png";
import spotty2 from "./../../public/img/SpottyFind/SpottyFind2.png";
import spotty3 from "./../../public/img/SpottyFind/SpottyFind3.png";
import spotty4 from "./../../public/img/SpottyFind/SpottyFind4.png";
import spotty5 from "./../../public/img/SpottyFind/SpottyFind5.png";

export default function Projects() {
    return (
        <div id="my-work" className="min-h-[100vh] w-full flex flex-col bg-gradient-to-b from-[#f5f5f5] to-[#F8F8F8]">
            <div className="flex lg:flex-row flex-col mt-40 w-full container mx-auto">
                <div className="xl:w-2/4 lg:w-1/4 sm:mx-0 mx-5">
                    <h6 className="font-semibold xl:text-7xl lg:text-6xl md:text-5xl text-4xl">My work</h6>
                    <p className="sm:pt-5 pt-2 w-full xl:text-2xl lg:text-xl md:text-lg">Projects I have done.</p>
                </div>
                <div className="xl:w-2/4 lg:w-3/4 flex flex-col xl:items-start lg:items-center items-start mb-5 sm:mx-0 mx-5">
                    <Project
                        title="SpottyFind"
                        descr="An app to find and create beautiful spots on a map."
                        img={[spotty1, spotty2, spotty3, spotty4, spotty5]}
                    />
                    <Project />
                    <Project />
                </div>
            </div>
        </div>
    );
}
