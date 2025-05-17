"use client"
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { FiGithub, FiLinkedin, FiMail, FiCopy } from "react-icons/fi";

export default function Header() {
    const [isMailCopied, setIsMailCopied] = useState(false);

    const handleCopyMail = async () => {
        try {
            await navigator.clipboard.writeText('iaraazulfryc@gmail.com');
            setIsMailCopied(true);
            setTimeout(() => {
                setIsMailCopied(false);
            }, 2000);
        } catch (err) {
            console.error('Error al copiar al portapapeles: ', err);
        }
    };

    return (
        <div className="flex flex-col xl:flex-row h-screen w-screen gap-10 bg-background">
            <div className=" flex h-1/3 items-center justify-center mt-10 mr-18 xl:hidden">
                <Image
                    src={"/images/header-mobile.png"}
                    alt=""
                    width={200}
                    height={200}
                />
            </div>
            <div className="flex w-screen justify-center xl:flex gap-30">
                <div className="flex flex-col w-2/3 xl:w-1/3 text-center xl:text-left xl:justify-center">
                    <h1>Hi! I'm <br /> <span className="text-accent">Iara Fryc</span></h1>
                    <p className="xl:text-justify mb-9 mt-5">I'm a <span className="text-accent">software developer</span> specializing in front-end technologies. I'm passionate about creating user-friendly and visually appealing web applications.</p>
                    <div className="flex justify-center xl:justify-start gap-6">
                        <Link href="https://github.com/iara15" className="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-black hover:transition-all duration-500">
                            <FiGithub></FiGithub>
                        </Link>
                        <Link href="https://www.linkedin.com/in/iara-fryc-7896b0266/" className="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-black hover:transition-all duration-500">
                            <FiLinkedin></FiLinkedin>
                        </Link>
                        <Link href="" onClick={handleCopyMail} className="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-black hover:transition-all duration-500">
                            {isMailCopied ? (
                                <FiCopy></FiCopy>
                            ) : (
                                <FiMail></FiMail>
                            )}
                        </Link>
                    </div>
                    {isMailCopied && (
                        <div>
                            <div className="flex justify-center items-center fixed top-0 right-0 m-5 w-40 h-10 bg-transparent border-1 border-solid border-accent rounded-md">
                                <span className="text-accent text-md">Copied!</span>
                            </div>
                        </div>
                    )}
                </div>
                <div className="text-center hidden xl:text-left xl:block xl:flex xl:justify-center xl:items-center">
                <div className="relative rounded-full h-100 w-100">
                        <div className="absolute top-0 left-0 w-full h-full rounded-full border-4 border-dashed border-accent borde-exterior"></div>
                        <div className="absolute top-2 left-2 rounded-full h-95 w-95 m-auto border-1 border-solid border-accent borde-medio"></div>
                        <div className="absolute top-6.5 left-6.5 rounded-full h-85 w-85 m-auto border-2 border-dashed border-accent borde-interior"></div>
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full h-85 w-85 flex items-center">
                            <Image
                                className="ml-11"
                                src={"/images/header.png"}
                                alt=""
                                width={180}
                                height={180}
                            />
                        </div>
                    </div>
                </div>
            </div >
        </div >
    );
}
