const link = document.querySelector('.links').lastElementChild;
const X = document.querySelector('.okno > div');

function ex(e){
    $('.okno').toggleClass('okno1');
    e.preventDefault();
};

link.addEventListener('click', ex);
X.addEventListener('click', ex);

const nodeImage = document.querySelectorAll('.image > img');
const array = Array.from(nodeImage);

array.forEach((el,i) => {
    el.classList.add(`img-${i+1}`)
});