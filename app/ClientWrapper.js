"use client"
import { useEffect } from "react";
import Lenis from "lenis";
export default function ClientWrapper({ children}) {
     useEffect( () => {
        const lenis = new Lenis({
            duration: 1.2,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            direction: "vertical",
            gestureDirection: "vertical",
            smooth: true,
            smoothWheel: true,
            smoothTouch: false,
            infinite: false,
          
        })
       
        function raf(time) {
            lenis.raf(time)
            requestAnimationFrame(raf)
        }
    
        requestAnimationFrame(raf)
    },[])
    return(
        <>
            {children}
        </>
    )
}