import React from 'react';
import PropTypes from 'prop-types';
// import { getCountries } from 'Utilities';

import { Header } from 'Comps/Header';
import Content from './Content';

const Home = (props) => {
    document.title = 'Covid19 Tracker';
    return (
        <div className="full-height grid grid-1-12">
            <Header activeTab={props.activeTab} />
            <Content />
        </div>
    );
};

Home.propTypes = {
    activeTab: PropTypes.string.isRequired,
};

export default Home;
