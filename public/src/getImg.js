import {loadBannerData} from './main.js';
import {loadHomeContentsData} from './main.js';
import {loadKeyword} from './main.js';
import {staticContainer, slideContainer, slideBundle, issueContainer, issueBundle, keywordRollingDiv} from './main.js';
const moreBtn = document.querySelector('.sub-menu__more');
const subSlide = document.querySelector('.sub-menu__silde');
function displayStaticImg(images) {
    staticContainer.innerHTML = `<a href="#" class="static__link">
    <img src="${images[2].imgurl}" alt="" class="static__img1">
</a>`;
}
function displaySlideImg(images) {
for(let i=1; i<=3; i++) {
    let img = document.createElement("img");
    let li = document.createElement("li");
    let a = document.createElement("a");
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
    let imageArr = images.map( e => e.eventContent.imgurl);
    let prodArr = images.map( e => e.eventContent.title);
    for(let i=1; i<=10; i++) {
        let list = document.createElement("li");
        let ul = document.createElement("ul");
        let liImg = document.createElement("li");
        let img = document.createElement("img");
        let liTitle = document.createElement("li");
        let liDesc = document.createElement("li");
        let liTheme = document.createElement("li");
        let titleStr = document.createTextNode(`${prodArr[i]}`);
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
function displayKeywordRolling(keywords) {
    let keywordsInfoArr = keywords.map(e => ({title: e.title, rank: e.rank}))
    console.log(keywordsInfoArr);
    let ul = document.createElement("ul");
    ul.className = "search-keyword__bundle";
    for(let i=0; i<10; i++) {
        let li = document.createElement("li");
        let liInnerText = document.createTextNode(`${keywordsInfoArr[i].rank}. ${keywordsInfoArr[i].title}`);
        li.className = "search-keyword__list";
        li.appendChild(liInnerText);
        ul.appendChild(li);
    }
    keywordRollingDiv.appendChild(ul);
    setInterval(function() {
    ul.classList.toggle('move');
    setTimeout(() => {
        ul.appendChild(ul.firstElementChild);
        ul.classList.toggle('move');
    }, 300);
    }, 2000);
}
let cnt =1;
let cntSum=5;
let cnt2 =1;
function displaymoreContents(images) {
    cnt2++;
    let imageInfoArr = images.map( e => ({imgurl : e.eventContent.imgurl, title : e.eventContent.title }));
    console.log(imageInfoArr);
    let div = document.createElement('div');
    div.className = "divBox";
    let ul;
    console.log(cnt);
    console.log(cntSum);
for(let i=cnt; i<=cntSum; i++) {
    ul = document.createElement("ul")
    let liImg = document.createElement("li");
    let img = document.createElement("img");
    let liTitle = document.createElement("li");
    let liDesc = document.createElement("li");
    let liTheme = document.createElement("li");
    let titleStr = document.createTextNode(`${imageInfoArr[i].title}`);
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
        console.log('a');
        return displaymoreContents(images);
    });
    moreBtn.addEventListener('click', () => {
        console.log('a');
        return displaymoreContents(images);
    })
}



loadBannerData()
    .then(images => {
        console.log(images);
        displayStaticImg(images);
        displaySlideImg(images);
    })

loadHomeContentsData()
    .then(images => {
        displayissue(images);
        displaymoreContents(images);
        getMoreEvent(images);
    })

loadKeyword()
.then(keywords => {
    // displayissue(images);
    displayKeywordRolling(keywords);
    // getMoreEvent(images);
})

