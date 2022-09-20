const form = document.querySelector('.form');
const delay = document.querySelector('[name="delay"]');
const step = document.querySelector('[name="step"]');
const amount = document.querySelector('[name="amount"]');

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;
    setTimeout(() => {
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });  
};

form.addEventListener('submit', onSubmit);

function onSubmit(e) {
  e.preventDefault();
  const { amount, step, delay } = e.target.elements;
  let amountEl = Number(amount.value);
  let stepEl = Number(step.value);
  let delayEl = Number(delay.value);
  for (let i = 0; i < amountEl; i += 1){
    createPromise(i + 1, delayEl)
      .then(({ position, delay }) => {
        console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
      })
      .catch(({ position, delay }) => {
        console.log(`❌ Rejected promise ${position} in ${delay}ms`);
      });
    delayEl += stepEl
  }
}