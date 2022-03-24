import React, { FunctionComponent } from 'react';

export const Title: FunctionComponent = ({ children }) => {
    return <h1 className="font-bold font-sans text-white text-[24px]">{children}</h1>;
};
