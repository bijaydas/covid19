import { Urls } from 'Utilities';
import { fetcher } from './common';

const getCountries = (callback = null) => {
    const urls = new Urls();
    fetcher(urls.countries())
        .then((data) => {
            callback(null, data);
        }).catch((err) => {
            callback(err, null);
        });
};

export {
    getCountries,
};
