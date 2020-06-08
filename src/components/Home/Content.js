import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Select from 'react-select';
import {
    faDotCircle,
} from '@fortawesome/free-solid-svg-icons';

import 'Css/home/home.css';
import { getCountries } from 'Utilities';

class Content extends Component {
    constructor(props) {
        super(props);
        this.state = {
            countries: [],
        };
        this.countryUpdate = this.countryUpdate.bind(this);
    }
    componentDidMount() {
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
    }
    countryUpdate(data) {
    }
    render() {
        return (
            <main className="Content content-padding">
                <section className="left">
                    <h3>Global status</h3>
                    <div className="status-overview-container">
                        <div className="target">
                            <div className="live">
                                <FontAwesomeIcon icon={faDotCircle} />
                                <span>live</span>
                            </div>
                        </div>
                        <div className="stats-card">
                            <Select
                                defaultValue={{ label: 'World', value: 'world' }}
                                options={this.state.countries}
                                onChange={this.countryUpdate}
                            />
                        </div>
                    </div>
                </section>
                <section className="right"></section>
            </main>
        );
    }
};

export default Content;
