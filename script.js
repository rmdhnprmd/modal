'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnsOpenModal = document.querySelectorAll('.show-modal');
const btnCloseModal = document.querySelector('.close-modal');

const modalOpen = () => {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const modalClose = () => {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

for (let i = 0; i < btnsOpenModal.length; i++)
  btnsOpenModal[i].onclick = () => modalOpen();

btnCloseModal.onclick = () => modalClose();
overlay.onclick = () => modalClose();
