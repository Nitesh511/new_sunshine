import React, { useState, useEffect } from 'react';
import mascot from "../../assets/mscout.png";

const Mascot = () => {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 200) { // Adjust the scroll threshold as needed
                setVisible(true);
            } else {
                setVisible(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleClick = () => {
        window.location.href = 'tel:0435 595 003'; // Replace with your phone number
    };

    return (
        <>
            {visible && (
                <div
                    onClick={handleClick}
                    className="fixed bottom-0 right-0 m-4  cursor-pointer animate-bounce z-10" 
                >
                    <img src={mascot} alt="Mascot" className="w-32 h-auto" />
                </div>
            )}
        </>
    );
};

export default Mascot;
