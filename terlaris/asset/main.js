const productContainers = [...document.querySelectorAll('.product-container,.product-container2')];

const nxtBtn = [...document.querySelectorAll('.nxt-btn')];
const preBtn = [...document.querySelectorAll('.pre-btn')];

productContainers.forEach((item, i) => {
    let containerDimensions = item.getBoundingClientRect();
    let containerWidth = containerDimensions.width;

    nxtBtn[i].addEventListener('click', () => {
        item.scrollLeft += containerWidth;
    })

    preBtn[i].addEventListener('click', () => {
        item.scrollLeft -= containerWidth;
    })
})

const imgs = document.querySelectorAll('.img-select a');
const imgBtns = [... imgs];
let imgId = 1;

imgBtns.forEach((imgItem) => {
    imgItem.addEventListener('click', (event) => {
        event.preventDefault();
        imgId = imgItem.dataset.id;
        slideImage();
    });
});

function slideImage(){
const displayWidth = document.querySelector('.img-showcase img:first-child').clientWidth;
document.querySelector('.img-showcase').style.transform =
`translateX(${- (imgId - 1) * displayWidth}px)`;
}

