import React from 'react';

const BlueButton: React.FC = () => {
    console.log('Hello from 🔵 button');

    return (
        <button style={{background: 'blue', color: 'white'}}>
            I'm not BLUE!!!
        </button>
    )
}

export default BlueButton;