import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faHome,
    faGlobe,
} from '@fortawesome/free-solid-svg-icons';

import 'Css/header/header.css';

const Header = (props) => {
    return (
        <header className="Header full-height matt-blue">
            <aside>
                <div className="logo">Covid19</div>
                <nav>
                    <ul>
                        <li>
                            <Link
                                className={
                                    props.activeTab === '' ? 'active' : null
                                }
                                to="/">
                                <FontAwesomeIcon icon={faHome} />
                            </Link>
                        </li>
                        <li>
                            <Link
                                className={
                                    props.activeTab === 'world' ? 'active' : null
                                }
                                to="/world">
                                <FontAwesomeIcon icon={faGlobe} />
                            </Link>
                        </li>
                    </ul>
                </nav>
            </aside>
        </header>
    );
};

Header.propTypes = {
    activeTab: PropTypes.string.isRequired,
};

export default Header;
