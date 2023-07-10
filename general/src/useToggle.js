import { useContext, useEffect, useState } from "react";

export const useToggle = (initialVal = false) => {
    //const [isVisible, setIsVisible] = useState(false);
    const [state, setState] = useState(false);
    
    const toggle = () => {
        setState((prev) => !prev)
    }

    //return [state, toggle]; //return array
    return { state, toggle };
}