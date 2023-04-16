"use client";

import React, { useContext, useEffect } from "react";

import { APP_ROUTES } from "@/constants/appRoutes";
import { UserDataContext } from "@/contexts/userDataLogin";
import { useRedirect } from "@/hooks";

export const PrivateRoutes = ({ children }: { children: React.ReactNode }) => {
    const { logined, redirectOnLogin } = useContext(UserDataContext);
    const { push } = useRedirect();

    useEffect(() => {
        if (!logined) {
            if (redirectOnLogin.split("redirecionar=")[1] !== undefined) {
                push(`${APP_ROUTES.public.signIn}?${redirectOnLogin}`);
            } else {
                push(APP_ROUTES.public.signIn);
            }
        }
    }, [logined, push]);

    return (
        <>
            {!logined && null}
            {logined && children}
        </>
    );
};
