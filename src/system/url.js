import tmpConfig from './tmpConfig';

/**
 * Returns the Google Map URL
 * @return {string} the URl
 */
export function googleMapUrl() {
    const KEY = tmpConfig.GOOGLE_MAP_KEY;
    const googleMapURL = 'https://maps.googleapis.com/maps/api/js?key='+KEY+'&v=3.exp&libraries=geometry,drawing,places';
    return googleMapURL;
}

/**
 * Returns the object of the Covid19 URLs
 * @return {object} with all the URLs
 */
export function covid19ApiUrl() {
    const BASE_URL = 'https://api.covid19api.com/';
    return {
        base: BASE_URL,
    };
}
