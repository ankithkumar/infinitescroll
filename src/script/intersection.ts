
import Api from './api';

function intersectionCb(entries: any, observer: any) {
    entries.forEach((entry: any) => {
        if(entry.isIntersecting){
            Api.fetchApiDetails();
        }
    });
}

function handleObservation() {
    if('IntersectionObserver' in window) {
        let option: any = {
            root: document.querySelector('.container'),
            rootMargin: "0px 0px 0px 0px",
            threshold: "0.90"
        };
        let observer = new IntersectionObserver(intersectionCb, option);
        let bContainer = document.querySelector('.bottom-container');
        observer.observe(bContainer);
    } else {
        console.log('not supported');
    }
}

const intersection = {
    handleObservation
}

export default intersection;