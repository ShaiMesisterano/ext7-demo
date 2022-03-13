import React from 'react';

const BlueButton = ({children, textColor, suffix}) => {
    console.log('Hello from 🔵 button');

    return (
        <button style={{background: 'blue', color: textColor}}>
            {children || "I'm not BLUE"} {suffix}
        </button>
    )
}

export default BlueButton;