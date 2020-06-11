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
            </section>
        );
    };
}

export default ContentRight;
