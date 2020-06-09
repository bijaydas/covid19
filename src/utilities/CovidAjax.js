const Urls = require('./Urls');

class CovidAjax extends Urls {
    constructor() {
        super();
    }
    getCountries(callback = null) {
        fetch(this.countries())
            .then((res) => res.json())
            .then((res) => {
                callback(null, res);
            })
            .catch((error) => {
                callback(error, null);
            });
    }
    getWorldTotal(callback = null) {
        fetch(this.worldTotal())
            .then((res) => res.json())
            .then((res) => {
                callback(null, res);
            })
            .catch((error) => {
                callback(error, null);
            });
    }
}

module.exports = CovidAjax;
