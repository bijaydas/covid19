import React, { Component } from 'react';
import { GoogleMap, withScriptjs, withGoogleMap } from 'react-google-maps';

import { googleMapUrl } from 'System/url';
import { Covid19Ajax } from 'Utilities/ApiData';

class World extends Component {
    constructor(props) {
        super(props);
        this.state = {
            defaultZoom: 2,
            defaultCenter: {
                lat: 28.613939,
                lng: 77.209023,
                country: 'India',
            },
        };
    }
    componentDidMount() {
        const covid19AjaxObject = new Covid19Ajax();
    }
    render() {
        return (
            <GoogleMap
                defaultZoom={this.state.defaultZoom}
                center={this.state.defaultCenter}
            >
            </GoogleMap>
        );
    };
}

const MapWrapper = withScriptjs(
    withGoogleMap(World),
);

export default () => {
    return (
        <MapWrapper
            googleMapURL={googleMapUrl()}
            loadingElement={<div />}
            containerElement={<div />}
            mapElement={<div style={{ height: '100vh' }} />}
        >
        </MapWrapper>
    );
};
