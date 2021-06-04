import domPainter from './domPainter';

let api = "http://openlibrary.org/people/george08/lists.json";
let iter = 1;
let apiData: any = {};
let loading = false;

function fetchApiDetails() {
    if (loading) {
        return;
    }
    domPainter.showLoadingData(loading);
    loading = true;
    let link = `${api}?limit=${iter * 10 }&offset=10`;
    if ('next' in apiData) {
        link = apiData['next'];
    }
    fetch(link)
        .then(data => data.json())
        .then(data => {
            apiData['next'] = `http://openlibrary.org${data.links.next}`;
            if ('entry' in apiData) {
                apiData['entry'] = [...apiData['entry'], ...data.entries];
            } else {
                apiData['entry'] = data.entries;
            }
            domPainter.drawData(data.entries);
            domPainter.showLoadingData(loading);
            loading = false;
        });
}

const Api = {
    fetchApiDetails
}

export default Api;