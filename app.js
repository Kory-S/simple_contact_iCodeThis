const button = document.querySelector('.button');
const cubeOne = document.querySelector('.cube_one');
const cubeTwo = document.querySelector('.cube_two');
const cubeThree = document.querySelector('.cube_three');
const setButtonLink = document.querySelector('#contact_button');

function clicked(){
    button.addEventListener('click', (event) => {
        cubeOne.setAttribute('class', 'cube cube_one clicked_button');
        cubeTwo.setAttribute('class', 'cube cube_two button_clicked');
        cubeThree.setAttribute('class', 'cube cube_three clicked');
        setTimeout(function(){
            window.location = './index.html';
        }, 1000);
    });
}

clicked();