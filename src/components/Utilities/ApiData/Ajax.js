class Ajax {
    getData(url) {
        return fetch(url).then(_ => _.json());
    }
}

export default Ajax;
