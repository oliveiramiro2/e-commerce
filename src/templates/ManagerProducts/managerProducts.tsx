"use client";

import React, { useEffect } from "react";

import { DefaultTemplate } from "../default";
import { oswald } from "@/functions/fonts";

export const ManagerProductsTemplate: React.FC = () => {
    useEffect(() => {
        document.title = "RM E-commerce - Gerenciar produtos";
    }, []);

    return (
        <DefaultTemplate>
            <section className="w-screen min-h-[72vh] bg-gray-100 flex flex-col items-center">
                <div className="w-[45%] max-xl:w-[60%] max-lg:w-[70%] max-md:w-[80%] max-sm:w-[90%] flex flex-col justify-center mb-3 mt-6">
                    <h3
                        className={`font-black text-3xl self-center max-lg:right-0 ${oswald.className}`}
                    >
                        Gerenciar produtos
                    </h3>
                </div>
            </section>
        </DefaultTemplate>
    );
};
