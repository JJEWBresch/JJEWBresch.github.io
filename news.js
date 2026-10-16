'use strict';
const controls = document.querySelector('.filter-area');
const items = [...document.querySelectorAll('.news-item')];
const buttons = [...document.querySelectorAll('[data-filter]')];
const count = document.getElementById('result-count');
function filterNews(category) {
  let visible = 0;
  for (const item of items) {
    item.hidden = category !== 'All' && item.dataset.category !== category;
    if (!item.hidden) visible++;
  }
  for (const button of buttons) button.setAttribute('aria-pressed', String(button.dataset.filter === category));
  count.textContent = `${visible} ${visible === 1 ? 'update' : 'updates'}${category === 'All' ? '' : ' · ' + category}`;
}
controls.hidden = false;
for (const button of buttons) button.addEventListener('click', () => filterNews(button.dataset.filter));
filterNews('All');
