import React, { FunctionComponent } from 'react';
import { Card, Text, Title } from '../../component';

export const Home: FunctionComponent = () => {
    return (
        <main className="bg-dark-blue-600 w-screen h-screen flex place-content-center place-items-center">
            <Card>
                <Title>How did we do?</Title>
                <Text>
                    Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!
                </Text>
            </Card>
        </main>
    );
};
