import tmpConfig from './tmpConfig';

export function googleMapUrl() {
    // TODO: Need to fetch Google Map Key from .env
    const KEY          = tmpConfig.GOOGLE_MAP_KEY;
    const googleMapURL = "https://maps.googleapis.com/maps/api/js?key="+KEY+"&v=3.exp&libraries=geometry,drawing,places"
    return googleMapURL;
}
