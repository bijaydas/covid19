import tmpConfig from './tmpConfig';

class Urls {
    constructor() {
        this.baseUrl = 'https://api.covid19api.com/';
    }
    googleMapUrl() {
        const KEY = tmpConfig.GOOGLE_MAP_KEY;
        const googleMapURL = 'https://maps.googleapis.com/maps/api/js?key='+KEY+'&v=3.exp&libraries=geometry,drawing,places';
        return googleMapURL;
    }
    countries() {
        return this.baseUrl + 'countries';
    }
    dayOneTotalByCountryAndStatus(country = null, status = null) {
        return `${this.baseUrl}/total/dayone/country/${country}/status/${status}`;
    }
    dayOneAllStatus(country = null) {
        return `${this.baseUrl}/dayone/country/${country}`;
    }
}

export default Urls;
