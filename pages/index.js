import Head from "next/head";
import Image from "next/image";

export default function Home() {
    return (
        <div className="h-full w-full">
            <Head>
                <title>Elena Dierickx</title>
                <meta name="description" content="Portfolio of Elena Dierickx" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className="h-full w-full">
                <div className="bg-pinkblue bg-cover bg-center h-full w-full"></div>
            </main>

            <footer className=""></footer>
        </div>
    );
}
