'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnsOpenModal = document.querySelectorAll('.show-modal');
const btnCloseModal = document.querySelector('.close-modal');

console.log(btnsOpenModal);

for (let i = 0; i < btnsOpenModal.length; i++)
  btnsOpenModal[i].onclick = () => {
    console.log('Button clicked');
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
  };

btnCloseModal.onclick = () => {
  console.log('Close button clicked');
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

overlay.onclick = () => {
  console.log('overlay close clicked');
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};
