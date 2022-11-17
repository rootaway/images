const link = document.querySelector('.links').lastElementChild;
const X = document.querySelector('.okno > div');

function ex(e){
    $('.okno').toggleClass('okno1');
    e.preventDefault();
};

link.addEventListener('click', ex);
X.addEventListener('click', ex);