import React, { FunctionComponent, useState } from 'react';
import { RatingCard, ThankYouCard } from '../../component';

export const Home: FunctionComponent = () => {
    const [rating, setRating] = useState<number>();
    const [hasSubmitted, setHasSubmitted] = useState<boolean>();

    return (
        <main className="bg-dark-blue-600 w-screen h-screen flex place-content-center place-items-center just">
            {hasSubmitted ? (
                <ThankYouCard rating={rating} />
            ) : (
                <RatingCard
                    rating={rating}
                    onRatingClick={(value: number) => setRating(value)}
                    onSubmit={() => rating && setHasSubmitted(true)}
                />
            )}
        </main>
    );
};
