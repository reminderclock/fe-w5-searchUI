import {loadBannerData} from './main.js';
import {loadHomeContentsData} from './main.js';

import {staticContainer, slideBundle, issueContainer, issueBundle} from './main.js';
const moreBtn = document.querySelector('.sub-menu__more');
const subSlide = document.querySelector('.sub-menu__silde');
function displayStaticImg(images) {
    staticContainer.innerHTML = `<a href="#" class="static__link">
    <img src="${images[2].imgurl}" alt="" class="static__img1">
</a>`;
}
function displaySlideImg(images) {
for(let i=1; i<=3; i++) {
    const img = document.createElement("img");
    const li = document.createElement("li");
    const a = document.createElement("a");
    img.className = `slide__img${i}`;
    a.className = `slide__link${i}`;
    li.className = "slide-list"
    img.src = `${images[i-1].imgurl}`;
    a.appendChild(img);
    li.appendChild(a);
    slideBundle.appendChild(li);
}
}

function displayissue(images) {
    const imageArr = images.map( e => e.eventContent.imgurl);
    const prodArr = images.map( e => e.eventContent.title);
    for(let i=1; i<=10; i++) {
        const list = document.createElement("li");
        const ul = document.createElement("ul");
        const liImg = document.createElement("li");
        const img = document.createElement("img");
        const liTitle = document.createElement("li");
        const liDesc = document.createElement("li");
        const liTheme = document.createElement("li");
        const titleStr = document.createTextNode(`${prodArr[i]}`);
        // calss name
        ul.className = "issue-slide";
        liImg.className = "issue-slide__img";
        img.className = "img__img";
        img.src = `${imageArr[i]}`;
        liTitle.className = "issue-slide__title";
        liDesc.className = "issue-slide__desc";
        liTheme.className = "issue-slide__theme";
        list.className = "issue-list";
        // appendchild
        liImg.appendChild(img);
        ul.appendChild(liImg);
        liTitle.appendChild(titleStr);
        ul.appendChild(liTitle);
        ul.appendChild(liDesc);
        ul.appendChild(liTheme);
        list.appendChild(ul);
        issueBundle.appendChild(list);
    }
    issueContainer.appendChild(issueBundle);
}

let cnt =1;
let cntSum=5;
let cnt2 =1;
function displaymoreContents(images) {
    cnt2++;
    const imageInfoArr = images.map( e => ({imgurl : e.eventContent.imgurl, title : e.eventContent.title }));
    const div = document.createElement('div');
    div.className = "divBox";
    let ul;
    for(let i=cnt; i<=cntSum; i++) {
        ul = document.createElement("ul")
        const liImg = document.createElement("li");
        const img = document.createElement("img");
        const liTitle = document.createElement("li");
        const liDesc = document.createElement("li");
        const liTheme = document.createElement("li");
        const titleStr = document.createTextNode(`${imageInfoArr[i].title}`);
        liImg.className = `sub-slide__img${i}`;
        img.className = "img__more";
        img.src = `${imageInfoArr[i].imgurl}`;
        liTitle.className = "sub-slide__title";
        liDesc.className = "sub-slide__desc";
        liTheme.className = "sub-slide__theme";
        ul.className = "sub-slide";
        liImg.appendChild(img);
        ul.appendChild(liImg);
        liTitle.appendChild(titleStr);
        ul.appendChild(liTitle);
        ul.appendChild(liDesc);
        ul.appendChild(liTheme);
        div.appendChild(ul);
    }
subSlide.appendChild(div);

cnt = cnt+5;
cntSum = cntSum + 5;

}
let cnt3 =0;
function getMoreEvent(images) {
    cnt3++;
    moreBtn.removeEventListener('click', () => {
        return displaymoreContents(images);
    });
    moreBtn.addEventListener('click', () => {
        return displaymoreContents(images);
    })
}



loadBannerData()
    .then(images => {
        displayStaticImg(images);
        displaySlideImg(images);
    })

loadHomeContentsData()
    .then(images => {
        displayissue(images);
        displaymoreContents(images);
        getMoreEvent(images);
    })


