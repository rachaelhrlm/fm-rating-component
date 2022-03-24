import React, { FunctionComponent } from 'react';
import { Card, Title } from '../../component';

export const Home: FunctionComponent = () => {
    return (
        <main className="bg-dark-blue-600 w-screen h-screen flex place-content-center place-items-center">
            <Card>
                <Title>How did we do?</Title>
            </Card>
        </main>
    );
};
