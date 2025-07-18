//____________________1. Multi-Color Buttons________________________________________

// import React, { useState } from 'react';

// const ChangeColor_Click = () => {
//     const [color, setColor] = useState("white");

//     return (
//         <>
//             <div   
//                 className='flex justify-center items-center h-[130px] w-[120px] border border-white rounded-md text-white'
//                 style={{ backgroundColor: color }} 
//             >
//                 Background
//             </div>   
//             <button onClick={() => setColor("red")} className="m-2 p-2 bg-red-500 text-white rounded-md">
//                 Red
//             </button>
//             <button onClick={() => setColor("green")} className="m-2 p-2 bg-green-500 text-white rounded-md">
//                 Green
//             </button>
//             <button onClick={() => setColor("yellow")} className="m-2 p-2 bg-yellow-500 text-black rounded-md">
//                 Yellow
//             </button>
//         </>
//     );
// };

// export default ChangeColor_Click;

//_________________________________________2.Traffic Light________________________________________________

import React, { useEffect, useState } from 'react';

const TrafficLight = () => {
    const [color, setColor] = useState("red");

    useEffect(() => {
        const colors = ["red", "green", "yellow"];
        let index = 0;

        const interval = setInterval(() => {
            index = (index + 1) % colors.length; 
            setColor(colors[index]);
        }, 2000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="flex flex-col items-center justify-center h-screen ">
            <div className="bg-black p-4 rounded-md shadow-lg border-1 border-white">
                <div className={`w-16 h-16 rounded-full mb-2 ${color === "red" ? "bg-red-500" : "bg-gray-700"}`} />
                <div className={`w-16 h-16 rounded-full mb-2 ${color === "yellow" ? "bg-yellow-500" : "bg-gray-700"}`} />
                <div className={`w-16 h-16 rounded-full ${color === "green" ? "bg-green-500" : "bg-gray-700"}`} />
            </div>
        </div>
    );
};

export default TrafficLight;
