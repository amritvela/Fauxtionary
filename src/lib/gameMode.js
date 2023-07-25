import { useSelector, useDispatch } from "react-redux/es/hooks/useSelector"
import { switchDay } from "../features/gameStateSlice"
import React from "react"
export default function gameMode() {
    const switchDay = useSelector((state) => state.day)
    const dispatch = useDispatch() 
    dispatch(switchDay());
}
