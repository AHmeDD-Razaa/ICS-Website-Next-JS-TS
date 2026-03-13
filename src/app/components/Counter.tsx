"use client"

import { useAppDispatch, useAppSelector } from "../hooks";
import { decrement, increment } from "@/redux/Slices/counter";

export default function Counter() {

    const count = useAppSelector(state => state.counter)
    const dispatch = useAppDispatch()

    return (
        <div className="text-white">
            <h1>Count is {count}</h1>

            <button onClick={() => dispatch(increment())}>
                Increment
            </button>

            <button onClick={() => dispatch(decrement())}>
                Decrement
            </button>
        </div>
    )
}
 