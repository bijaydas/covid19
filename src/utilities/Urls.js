class Urls {
    constructor() {
        this.baseUrl = 'https://api.covid19api.com/';
    }
    googleMapUrl() {
        const KEY = process.env.GOOGLE_API_KEY;
        const url = 'https://maps.googleapis.com/maps/api/js?key='+KEY+'&v=3.exp&libraries=geometry,drawing,places';
        return url;
    }
    googleGeocodingUrl(address = null) {
        const KEY = process.env.GOOGLE_API_KEY;
        const url = 'https://maps.googleapis.com/maps/api/geocode/json?address='+address+'&key=' + KEY;
        return url;
    }
    countries() {
        return this.baseUrl + 'countries';
    }
    worldTotal() {
        return this.baseUrl + 'world/total';
    }
    summary() {
        return this.baseUrl + 'summary';
    }
    dayOneTotalByCountryAndStatus(country = null, status = null) {
        return `${this.baseUrl}/total/dayone/country/${country}/status/${status}`;
    }
    dayOneAllStatus(country = null) {
        return `${this.baseUrl}/dayone/country/${country}`;
    }
}

export default Urls;
