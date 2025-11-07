import { useRef } from "react"
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap-trial/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const GsapScroll = () => {
    const container = useRef();


    useGSAP(() => {
        gsap.from(".fade-box", {
            opacity: 0,
            y: 100,
            ScrollTrigger: {
                trigger: ".fade-box",
                start: "top 80%",
                end: "top 50%",
                scrub: true,
                markers: true,
            },
        });   
    },
        {
            scope: container,
        }
    );

    return (
        <div ref={container}>

        </div>
    )
} 

export default GsapScroll
