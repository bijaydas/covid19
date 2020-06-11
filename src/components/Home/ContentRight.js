import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faExclamationCircle,
} from '@fortawesome/free-solid-svg-icons';
import 'flag-icon-css/css/flag-icon.css';

import { Link } from 'react-router-dom';
import {
    formatNumber,
    CovidAjax,
} from 'Utilities';
import HospitalImage from 'Assets/hospital.png';

class ContentRight extends Component {
    constructor(props) {
        super(props);
        this.state = {
            countries: [],
        };
    }
    componentDidMount() {
        /**
         * Setting the country list in the dropdown
         */
        const ajax = new CovidAjax();
        ajax.getSummary((err, countries) => {
            this.setState({
                countries: countries.Countries,
            });
        });
    }
    render() {
        let countryStats = null;
        if (this.state.countries.length > 0) {
            countryStats = this.state.countries.splice(0, 10)
                .map((country, index) => {
                    const CountryCode = country.CountryCode.toLowerCase();
                    const flagClass = `flag-icon flag-icon-${CountryCode}`;
                    return (
                        <tr key={index}>
                            <td>
                                <Link to="/country/">
                                    <span className={flagClass}></span>
                                    <span>
                                        {country.Country}
                                    </span>
                                </Link>
                            </td>
                            <td>
                                {formatNumber( country.TotalConfirmed )}
                            </td>
                            <td>
                                {formatNumber( country.TotalRecovered )}
                            </td>
                            <td>
                                {formatNumber( country.TotalDeaths )}
                            </td>
                        </tr>
                    );
                });
        }
        return (
            <section className="right">
                <h3>Status by country</h3>
                <p>
                    <FontAwesomeIcon icon={faExclamationCircle} />
                    Click on the country to see details
                </p>
                <table>
                    <thead>
                        <tr>
                            <th>Country</th>
                            <th>Confirmed</th>
                            <th>Recovered</th>
                            <th>Deaths</th>
                        </tr>
                        {countryStats}
                    </thead>
                </table>
                <Link className="full-list" to="/countries">All country status</Link>
                <section className="steps-to-prevent">
                    <div className="icon-with-info grid grid-1-12">
                        <div className="icon flex flex-center-middle">
                            <img src={HospitalImage} alt="Hospital icon"/>
                        </div>
                        <div className="tag-lines">
                            <p><span>Steps</span> to prevent Coronavirus</p>
                            <p>Read and share with others</p>
                        </div>
                    </div>
                    <div className="who-link">
                        <a href="/">Visit WHO</a>
                    </div>
                </section>
            </section>
        );
    };
}

export default ContentRight;
