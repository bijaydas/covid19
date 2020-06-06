import React, { Component } from 'react';
import { GoogleMap, withScriptjs, withGoogleMap } from 'react-google-maps';
import { Urls } from 'Utilities';

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
    const url = new Urls();
    return (
        <MapWrapper
            googleMapURL={url.googleMapUrl()}
            loadingElement={<div />}
            containerElement={<div />}
            mapElement={<div style={{ height: '100vh' }} />}
        >
        </MapWrapper>
    );
};
