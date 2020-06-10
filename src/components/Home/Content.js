import React from 'react';
import ContentLeft from './ContentLeft';
import ContentRight from './ContentRight';

const Content = () => {
    return (
        <main className="Content content-padding grid grid-1-1">
            <ContentLeft />
            <ContentRight />
        </main>
    );
}

export default Content;
