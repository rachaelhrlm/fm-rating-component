import React, { FunctionComponent } from 'react';

export const Card: FunctionComponent = ({ children }) => {
    return <section className="bg-gradient-to-b from-black-500 to-black-600 w-[327px] h-[360px] rounded-2xl p-[24px]">{children}</section>;
};
