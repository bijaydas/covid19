import React, { Component, Fragment } from 'react';
import { GoogleMap, withScriptjs, withGoogleMap } from 'react-google-maps';

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
            googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyDOGj9poeWxLe6tCud31Uy5a4jO7mBJs5s&v=3.exp&libraries=geometry,drawing,places"
            loadingElement={<div style={{ height: `100%` }} />}
            containerElement={<div style={{ height: `400px` }} />}
            mapElement={<div style={{ height: `100%` }} />}
        >
        </MapWrapper>
    )
}
