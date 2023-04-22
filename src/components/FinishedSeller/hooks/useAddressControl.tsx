"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect } from "react";

import { schemaRegister } from "@/components/LoginAndRegister/utils";
import { formType } from "../interface";
import { zipCodeMask } from "@/functions/zipCodeMask";

export const useAddressControl = () => {
    const schema = schemaRegister;

    const {
        handleSubmit,
        register,
        setValue,
        watch,
        formState: { errors },
    } = useForm<formType>({
        criteriaMode: "all",
        mode: "all",
        resolver: zodResolver(schema),
        reValidateMode: "onChange",
        defaultValues: {
            CEP: "",
            city: "",
            complement: "",
            district: "",
            number: "",
            state: "",
            street: "",
        },
    });

    useEffect(() => {
        setValue('CEP', zipCodeMask(watch('CEP')))
    }, [watch('CEP')])

    return {
        handleSubmit,
        register,
        errors,
    };
};
