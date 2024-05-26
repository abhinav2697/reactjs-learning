import React, { useRef, useLayoutEffect } from "react";
const UseLayoutSmoothScroll = () => {
    const containerRef = useRef(null);
  
    useLayoutEffect(() => {
        const container = containerRef.current;
  
        const handleScroll = () => {
            // Smoothly scroll to the top of the container
            container.scrollTo({
                top: 0,
                behavior: "smooth",
            });
        };
  
        // Scroll to the top when the component is mounted
        handleScroll();
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        }
    }, []);
    return <div ref={containerRef}>{"Hi"}</div>
};

export default UseLayoutSmoothScroll;