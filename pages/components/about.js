export default function About() {
    return (
        <div id="about" className="h-[100vh] flex flex-col bg-guitars bg-cover bg-center ">
            <div className="h-full w-full flex flex-col">
                <div className="basis-2/12"></div>
                <div className="basis-10/12 flex sm:flex-row flex-col sm:justify-between container mx-auto">
                    <div className="xl:w-2/4 sm:w-3/4 mx-5 sm:mx-0 bg-white h-fit p-5 rounded-md shadow-lg">
                        <h5 className="font-semibold xl:text-7xl lg:text-6xl md:text-5xl text-4xl">About me</h5>
                        <p className="sm:pt-5 pt-2 w-full xl:text-2xl lg:text-xl md:text-lg">
                            My name is Elena. I&apos;m a student Electronics-ICT at Odisee Ghent and my specialization is Web Development. Ever since
                            I was little I&apos;ve always been interested in computers. Growing up I chose to study Electronics. Getting more
                            interested in programming I began studying Elektronics-ICT in high school. Here I developed my passion for Web
                            Development. I also have a huge passion for music and play the guitar and the ukelele!
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
