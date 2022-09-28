import BSN from 'bootstrap.native';

const refs = {
  modal: document.querySelector('#sub-modal'),
  subscribeBtn: document.querySelector('button[data-subscribe]'),
};
const PROMT_DELAY = 2000;
const MAX_PROMT_ATTEMPTS = 3;
let promtCounter = 0;
let hasSubscribe = false;
const modal = new BSN.Modal('#sub-modal');

openModal();

refs.modal.addEventListener('hide.bs.modal', openModal);
refs.subscribeBtn.addEventListener('click', onSubBtnClick);

function openModal() {
  if (promtCounter === MAX_PROMT_ATTEMPTS || hasSubscribe) {
    console.log('Максимальное число или подписался');
    return;
  }

  setTimeout(() => {
    console.log('открывашка');
    modal.show();
    promtCounter += 1;
  }, PROMT_DELAY);
}

function onSubBtnClick() {
  hasSubscribe = true;
  modal.hide();
}
