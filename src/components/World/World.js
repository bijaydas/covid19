import React, { Component, Fragment } from 'react';
import { GoogleMap, withScriptjs, withGoogleMap } from 'react-google-maps';
7
import { googleMapUrl } from 'System/url';

class World extends Component {
    constructor(props) {
        super(props);
        this.state = {
            defaultZoom: 8,
            defaultCenter: { lat: -34.397, lng: 150.644 }
        }
    }

    
    render() {
        return(
            <GoogleMap
                defaultZoom={this.state.defaultZoom}
                defaultCenter={this.state.defaultCenter}
            >
                
            </GoogleMap>
        )
    };
}

const MapWrapper = withScriptjs(
    withGoogleMap(World)
);

export default () => {
    return (
        <MapWrapper
            googleMapURL={googleMapUrl()}
            loadingElement={<div />}
            containerElement={<div />}
            mapElement={<div style={{height: '100vh'}} />}
        >
        </MapWrapper>
    )
}
