import Image from "next/image";

export default function Technologies() {
    return (
        <div className="flex flex-col items-center gap-15 w-screen h-auto p-25 bg-[url('/images/technologies-background.png')] bg-cover bg-center bg-no-repeat">
            <h1 className="text-black">Technologies</h1>
            <div className="flex flex-wrap justify-center gap-10">
                <div className="flex flex-col gap-4 justify-between items-center">
                    <Image
                        src={"/images/nextjs-icon.png"}
                        alt="Next JS"
                        width={80}
                        height={80}
                    />
                    <h3 className="text-black">Next.js</h3>
                </div>
                <div className="flex flex-col justify-between items-center">
                    <Image
                        src={"/images/react-icon.png"}
                        alt="React"
                        width={80}
                        height={80}
                    />
                    <h3 className="text-black">React</h3>
                </div>
                <div className="flex flex-col justify-between items-center">
                    <Image
                        src={"/images/angular-icon.png"}
                        alt="Angular"
                        width={80}
                        height={80}
                    />
                    <h3 className="text-black">Angular</h3>
                </div>
                <div className="flex flex-col justify-between items-center">
                    <Image
                        src={"/images/javascript-icon.png"}
                        alt="Javascript"
                        width={80}
                        height={80}
                    />
                    <h3 className="text-black">Javascript</h3>
                </div>
                <div className="flex flex-col justify-between items-center">
                    <Image
                        src={"/images/typescript-icon.png"}
                        alt="Typescript"
                        width={80}
                        height={80}
                    />
                    <h3 className="text-black">Typescript</h3>
                </div>
                <div className="flex flex-col justify-between items-center">
                    <Image
                        src={"/images/materialui-icon.png"}
                        alt="Material UI"
                        width={80}
                        height={80}
                    />
                    <h3 className="text-black">Material UI</h3>
                </div>
                <div className="flex flex-col justify-between items-center">
                    <Image
                        src={"/images/tailwindcss-icon.png"}
                        alt="Tailwindcss"
                        width={80}
                        height={80}
                    />
                    <h3 className="text-black">Tailwind CSS</h3>
                </div>
            </div>
        </div>
    );
}