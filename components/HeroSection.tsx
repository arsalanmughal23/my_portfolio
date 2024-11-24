"use client";

import { Github, Linkedin } from "lucide-react";
import React, { useEffect, useState } from 'react';
import styles from "@/app/page.module.css";
import { K2d, leagueSpartan } from "@/app/fonts";

export default function HeroSection() {
    const [heroSectionClass, setHeroSectionClass] = useState([styles.heroSection]);
    const readableTime = 1500;

    function animateHero() {
        setHeroSectionClass([...heroSectionClass, 'animate_rotate']);

        setTimeout(() => {
            setHeroSectionClass([...heroSectionClass, styles.animate_heroSection]);
        }, 500);

        setTimeout(() => {
            setHeroSectionClass([styles.heroSection]);
        }, 2000 + readableTime);
    }

    useEffect(() => {

        animateHero();
        setInterval(() => {
            animateHero();
        }, 3000 + readableTime);

    }, [])

    return (
        // <div className="border-right transition-1s overflow-x-hidden max-w-0 max-w-500px">
        <div className={`${heroSectionClass.join(' ')}`}>
            <div className="flex flex-col gap-6 p-6">
                <div className="flex flex-col gap-2 sm_w-max">
                    <h2 className={`${K2d.className} text-5xl text-right`}>Develop your websites</h2>
                    <h2 className={`${K2d.className} text-5xl align-self-end text-right`}>using <span className={`font-600 ${leagueSpartan.className}`}>Next.js</span> Stack</h2>
                </div>
                <div className="flex gap-2 align-self-end">
                    <div className="border border-white rounded p-2 w-10 h-10">
                        <a href="#">
                            <Github />
                        </a>
                    </div>
                    <div className="border border-white rounded p-2 w-10 h-10">
                        <a href="#">
                            <Linkedin />
                        </a>
                    </div>
                    <div className="border border-white rounded-sm">
                        <a href="tel:+923152929408">
                            <button className="text-xl btn">
                                <div className="inner w-max">
                                    Call Now
                                </div>
                            </button>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}
