import React, { FunctionComponent } from 'react';

interface ButtonProps {
    onClick: () => void;
}

export const Button: FunctionComponent<ButtonProps> = ({ children, onClick }) => {
    return (
        <button
            className="w-full h-[45px] flex place-items-center justify-center cursor-pointer rounded-full bg-orange-500 text-white font-bold font-sans uppercase tracking-[2px] hover:bg-white hover:text-orange-500 transition-all duration-300"
            onClick={onClick}>
            {children}
        </button>
    );
};
