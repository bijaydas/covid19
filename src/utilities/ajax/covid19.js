import React from 'react';
import useSWR from 'swr';
import { Urls } from 'Utilities';
import { fetcher } from './common';

const getCountries = () => {
    const urls = new Urls();
    const { data, error } = useSWR(urls.countries(), fetcher);
    return data;
}

export {
    getCountries
}
