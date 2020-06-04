import Ajax from './Ajax';
import { covid19ApiUrl } from 'System/url';

class Covid19Ajax extends Ajax {
    getCountries(callback = false) {
        fetch(covid19ApiUrl().countries)
            .then(_ => _.json())
            .then(_ => callback(null, _))
            .catch(err => callback(err, null));
    }
}

export default Covid19Ajax;
