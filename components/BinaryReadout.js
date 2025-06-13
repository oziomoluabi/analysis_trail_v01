'use client';
import React from 'react';

// Helper component for Binary Readout with animation
const BinaryReadout = ({ length = 80 }) => {
    const [binaryString, setBinaryString] = React.useState('');

    React.useEffect(() => {
        const generateBinary = () => {
            let str = '';
            for (let i = 0; i < length * 3; i++) { // Generate a longer string to scroll through
                str += Math.random() > 0.5 ? '1' : '0';
            }
            setBinaryString(str);
        };

        generateBinary(); // Initial generation
        const interval = setInterval(generateBinary, 1500); // Slower update
        return () => clearInterval(interval);
    }, [length]);

    return (
        <div className="font-mono text-xs text-console-cyan whitespace-pre overflow-hidden h-full">
            <p style={{ animation: 'scroll 10s linear infinite' }}>{binaryString}</p>
            <style jsx>{
                @keyframes scroll {
                    from { transform: translateY(0); }
                    to { transform: translateY(-50%); }
                }
            `}</style>
        </div>
    );
};

export default BinaryReadout;
