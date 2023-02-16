let block1 = document.querySelector('#block1');
let block2 = document.querySelector('#block2');
let block3 = document.querySelector('#block3');
let blocks = document.querySelector('#blocks');
let st1 = document.querySelector('#str1');
let st2 = document.querySelector('#str2');
let st3 = document.querySelector('#str3');
let btn = document.querySelector('#btn');


block1.addEventListener('click', function st1() {
    block1.textContent = 'Мир';
    block1.style.fontSize = '35px';
    block1.addEventListener('click', function () {
        str1.style.display = 'flex'
        btn.style.display = 'block';
        btn.addEventListener('click', function (evt) {
            evt.preventDefault();
            btn.style.display = 'none';
            str1.style.display = 'none';
        })
    })
})


block2.addEventListener('click', function () {
    block2.textContent = 'Вера';
    block2.style.fontSize = '35px';
    block2.addEventListener('click', function () {
        str2.style.display = 'flex'
        btn.style.display = 'block';
        btn.addEventListener('click', function (evt) {
            evt.preventDefault();
            btn.style.display = 'none';
            str2.style.display = 'none';
        })
    })
})

block3.addEventListener('click', function () {
    block3.textContent = 'Сила';
    block3.style.fontSize = '35px';
    block3.addEventListener('click', function () {
        str3.style.display = 'flex'
        btn.style.display = 'block';
        btn.addEventListener('click', function (evt) {
            evt.preventDefault();
            btn.style.display = 'none';
            str3.style.display = 'none';
        })
    })
})

