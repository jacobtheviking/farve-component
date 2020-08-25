//import react
import React, { useEffect, useState } from "react";


function getWindowDimensions() {
    const { innerWidth: width, innerHeight: height } = window;

    var viewWidth = width;
    var viewHeight = height;

    return {
        width,
        height
    };
}

export default function useWindowDimensions() {
    const [windowDimensions, setWindowDimensions] = useState(
        getWindowDimensions()
    );

    useEffect(() => {
        function handleResize() {
            setWindowDimensions(getWindowDimensions());
        }

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return windowDimensions;
}



export const DisplayWidth = () => {
    var viewWidth;
    const { height, width } = useWindowDimensions();
    return (
        <div>
            {width}
        </div>
    );
};


export const DisplayHeight = () => {
    const { height, width } = useWindowDimensions();
    return (
        <div>
            {height}
        </div>
    );
};

export const DisplaySize = () => {
    const { height, width } = useWindowDimensions();
    return (
        <div>
            width: {width} ~height: {height}
        </div>
    );
};