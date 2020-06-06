import useSWR from 'swr';
import { Urls } from 'Utilities';
import { fetcher } from './common';

const getCountries = () => {
    const urls = new Urls();
    const { data } = useSWR(urls.countries(), fetcher);
    return data;
};

export {
    getCountries,
};
