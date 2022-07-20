'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnsOpenModal = document.querySelectorAll('.show-modal');
const btnCloseModal = document.querySelector('.close-modal');

for (let i = 0; i < btnsOpenModal.length; i++)
  btnsOpenModal[i].onclick = () => {
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
  };

const modalClose = className => {
  modal.classList.add(className);
};

const overlayClose = className => {
  overlay.classList.add(className);
};

btnCloseModal.onclick = () => {
  modalClose('hidden');
  overlayClose('hidden');
};

overlay.onclick = () => {
  modalClose('hidden');
  overlayClose('hidden');
};
