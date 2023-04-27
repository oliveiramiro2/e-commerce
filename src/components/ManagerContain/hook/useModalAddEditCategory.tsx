"use client";

import { useState } from "react";
import { IDataCategory } from "../interface";

const defaultValuesCategory: IDataCategory = {
    name: "",
    trySendErro: false,
};

export const useModalAddEditProduct = () => {
    const [openModalCategory, setOpenModalCategory] = useState<boolean>(false);
    const [addNewCategory, setAddNewCategory] = useState<boolean>(false);
    const [dataActionCategory, setDataActionCategory] = useState<IDataCategory>(
        defaultValuesCategory
    );
    const [editIdCategory, setEditIdCategory] = useState<number>(0);

    return {
        openModalCategory,
        addNewCategory,
        dataActionCategory,
        editIdCategory,
        setOpenModalCategory,
        setAddNewCategory,
        handleDataCategory: (name: string) =>
            setDataActionCategory({ ...dataActionCategory, name }),
        setEditIdCategory,
    };
};
