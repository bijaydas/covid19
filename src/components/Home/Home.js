import React from 'react';
import { getCountries } from 'Utilities';

const Home = () => {
    const countries = getCountries();
    console.log(countries);
    return (
        <div className="Home">
            Home Functional Component
        </div>
    );
};

export default Home;
