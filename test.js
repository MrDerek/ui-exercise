const siteBody = document.querySelector('.js-site-body');

document.querySelector('.js-sidebar-toggle').addEventListener('click', e => {
  e.preventDefault();

  siteBody.classList.toggle('closed-sidebar');
});