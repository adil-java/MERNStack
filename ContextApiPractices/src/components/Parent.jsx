import React, { useContext } from 'react'
import { ColorContext } from '../ccontext/sendColor'



function Parent() {
    const {color} = useContext(ColorContext); // Access the color from context

    return (
        <div 
            className="h-[150px] w-[60px] border-fuchsia-900 rounded-s-lg"
            style={{ backgroundColor: color }} // Apply the color from context
        >
            {/* Any other content */}
        </div>
    );
}

export default Parent;



