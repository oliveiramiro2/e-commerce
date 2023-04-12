"use client";

import {useState} from 'react'

export const CountBuyItens = () => {
    const [count, setCount] = useState<number>(1);

    return {
        count,
        handleCountPlus: () => setCount(count + 1),
        handleCountLess: () => setCount(count - 1),
    }
}