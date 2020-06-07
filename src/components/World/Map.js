import React, { Component } from 'react';
import { GoogleMap, withScriptjs, withGoogleMap } from 'react-google-maps';
import { Urls } from 'Utilities';
import 'Css/world/world.css';

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

const containerElement = (
    <div className="containerElement" style={{ padding: '2rem' }}></div>
);

const mapElement = (
    <div className="mapElement" style={{ height: '60%' }}></div>
);

const loadingElement = (
    <div className="loadingElement">
        Map Loading
    </div>
);

export default () => {
    const url = new Urls();
    return (
        <MapWrapper
            googleMapURL={url.googleMapUrl()}
            loadingElement={loadingElement}
            containerElement={containerElement}
            mapElement={mapElement}
        >
        </MapWrapper>
    );
};
