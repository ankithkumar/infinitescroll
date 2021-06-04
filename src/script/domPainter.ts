const domain = 'http://openlibrary.org';
function drawData(entry: any) {
    let scroller = document.querySelector('.scroller');
    for (let i = 0; i < entry.length; i++) {
        let card = createCard(entry[i]);
        scroller.appendChild(card);
    }
}

function createCard(data: any) {
    console.log(data);
    let template: string = `
        <div class="card">
            <div class="section">
                <div class="header">Name: </div
                <div class="val">${data.name}
            </div>
            <div class="section">
                <div class="header">Edition Count: </div
                <div class="val">${data.edition_count}
            </div>
            <div class="section">
                <div class="header">Check out at </div>
                <a target="_blank" href="${domain}${data.full_url}">url</a>
            </div>
        </div>
    `;
    return createElement(template);
}

function showLoadingData(loading: boolean) {
    let str: string = `
        i am at the bottom
    `;
    if (loading) {
        str = 'loading data';
    }
    let btmContainer = document.querySelector('.bottom-container');
    btmContainer.innerHTML = str;
}

function createElement(str: string) {
    let div = document.createElement("div");
    div.innerHTML = str.trim();

    // Change this to div.childNodes to support multiple top-level nodes
    return div.firstChild;
}

const domPainter = {
    drawData,
    showLoadingData
}

export default domPainter;