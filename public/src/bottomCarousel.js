
import { issueBanner, issueBundle } from './main.js';
class BottomCarousel {
    constructor() {

import { issueBanner, issueContainer, issueBundle } from './main.js';
class BottomCarousel {
    constructor(issueBanner) {
        this.children = issueBundle.children;
        this.setTime = 500;
        this.dir = '';
        this.eventSignal = this.eventSignal();
    }
    eventSignal() {
        this.decideClickDirection();
    }


    decideClickDirection() {
        issueBanner.addEventListener('click', ({target}) => {
            if(target.classList.contains('fa-arrow-right')) {
                console.log('a');
                this.dir = 'right'
                return this.moveContent();
            }
            else if(target.classList.contains('fa-arrow-left')) {
                this.dir = 'left'
                return this.moveContent();
            }
        })
    }
    moveContent() {
        issueBundle.classList.toggle(this.dir);
        setTimeout(() => {
            this.moveList(this.dir);
            issueBundle.classList.toggle(this.dir);
        }, this.setTime);
    }
    moveList() {
        if(this.dir.includes('right')) {
            return issueBundle.insertBefore(this.children[9],this.children[0]);
        }
        else if(this.dir.includes('left')) {
            return issueBundle.appendChild(issueBundle.firstElementChild);
        }
    }
}


let bottomSlide = new BottomCarousel(issueBundle);
