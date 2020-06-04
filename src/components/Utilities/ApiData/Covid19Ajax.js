import Ajax from './Ajax';
import { covid19ApiUrl } from 'System/url';


class Covid19Ajax extends Ajax {
    constructor() {
        super(covid19ApiUrl().base);
    }
    getCountries() {
    }
}
export default Covid19Ajax;
