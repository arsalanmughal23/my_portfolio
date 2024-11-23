'use client';

import { K2d } from "@/app/layout";
import { Mail, Menu, Phone } from "lucide-react";
import { useState } from "react";
import AnimatedBtn from "./AnimatedBtn";

export default function Header() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const handleOnClickMenuToggler = (): void => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    }

    return (
        <header className={`${isMobileMenuOpen ? 'menuOpen' : 'menuClose'} transition-1s overflow-hidden py-2 container-fluid header flex flex-col sm_flex-row gap-4 justify-between`}>
            <div className="flex justify-between">
                <div className={`${K2d.className} text-3xl`}>
                    Arsalan
                </div>
                <div className="sm_d-none">
                    <Menu className="w-8 sm_w-6 h-auto" onClick={handleOnClickMenuToggler} />
                </div>
            </div>
            <div className="flex justify-center">
                <ul className="flex flex-col sm_flex-row gap-2 text-lg list-style-none text-4xl sm_text-xl">
                    <li className="btn menu-item text-center">
                        <div className="inner bg-black">
                            Home
                        </div>
                    </li>
                    <li className="btn menu-item">
                        <div className="inner bg-black text-center">
                            About
                        </div>
                    </li>
                    <li className="btn menu-item">
                        <div className="inner bg-black text-center">
                            Services
                        </div>
                    </li>
                </ul>
            </div>
            <div className="flex justify-center">
                <ul className="flex gap-4 list-style-none px-2">
                    <li>
                        <a href="mailto:arsalanmughal23@gmail.com" className="flex gap-2 item-center">
                            <Mail className="w-8 sm_w-6 h-auto" />
                            {/* <div>arsalanmughal23@gmail.com</div> */}
                        </a>
                    </li>
                    <li>
                        <a href="tel:+923152929408" className="flex gap-2 item-center">
                            <Phone className="w-8 sm_w-6 h-auto" />
                            {/* <div>+923152929408</div> */}
                        </a>
                    </li>
                </ul>
            </div>
        </header>
    );
}