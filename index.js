window.addEventListener('DOMContentLoaded', function () {

  document.querySelector('#btn').addEventListener('click', function () {
    document.querySelector('#form').classList.toggle('active')
    document.querySelector('#main').classList.toggle('blur')
  });
  document.querySelector('#btn-2').addEventListener('click', function () {
    document.querySelector('#form').classList.toggle('active')
    document.querySelector('#main').classList.toggle('blur')
  });
  document.querySelector('#close').addEventListener('click', function () {
    document.querySelector('#form').classList.toggle('active')
    document.querySelector('#main').classList.toggle('blur')
  });
})
