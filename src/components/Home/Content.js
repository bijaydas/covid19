import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Select from 'react-select';
import {
    faDotCircle,
} from '@fortawesome/free-solid-svg-icons';

import 'Css/home/home.css';
import { getCountries, worldTotal, formatNumber } from 'Utilities';

class Content extends Component {
    constructor(props) {
        super(props);
        this.state = {
            countries: [],
            total: {
                confirmed: 0,
                recovered: 0,
                deaths: 0,
            }
        };
        this.countryUpdate = this.countryUpdate.bind(this);
    }
    componentDidMount() {
        /**
         * Setting the country list in the dropdown
         */
        getCountries((err, data) => {
            const countries = data.map((country) => {
                return {
                    label: country.Country,
                    value: country.Slug,
                };
            });
            this.setState({
                countries: countries,
            });
        });
        /**
         * Selecting the world total
         */
        worldTotal((err, data) => {
            const confirmed = formatNumber(data.TotalConfirmed);
            const recovered = formatNumber(data.TotalRecovered);
            const deaths    = formatNumber(data.TotalDeaths);
            this.setState((state) => {
                return {
                    ...state,
                    total: {
                        confirmed,
                        recovered,
                        deaths,
                    },
                };
            });
        });
    }
    countryUpdate(data) {
    }
    render() {
        const customStyles = {
            option: (provided, state) => {
                return {
                    ...provided,
                    textAlign: 'left',
                    fontSize: '12px',
                };
            },
        };
        return (
            <main className="Content content-padding">
                <section className="left">
                    <h3>Global status</h3>
                    <div className="grid grid-equal-4">
                        <div className="stat-card">
                            <div className="control">
                                <div className="body">
                                    <FontAwesomeIcon icon={faDotCircle} />
                                    <span>live</span>
                                </div>
                            </div>
                            <div className="footer">
                                <Select
                                    defaultValue={{ label: 'World', value: 'world' }}
                                    options={this.state.countries}
                                    onChange={this.countryUpdate}
                                    styles={customStyles}
                                />
                            </div>
                        </div>
                        <div className="stat-card card-confirmed">
                            <div className="body">{this.state.total.confirmed}</div>
                            <div className="footer">Confirmed</div>
                        </div>
                        <div className="stat-card card-recovered">
                            <div className="body">{this.state.total.recovered}</div>
                            <div className="footer">Recovered</div>
                        </div>
                        <div className="stat-card card-deaths">
                            <div className="body">{this.state.total.deaths}</div>
                            <div className="footer">Deaths</div>
                        </div>
                    </div>
                </section>
                <section className="right"></section>
            </main>
        );
    }
};

export default Content;
