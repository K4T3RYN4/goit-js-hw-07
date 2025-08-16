const categListEl = document.querySelector('#categories');
const categListItemEl = categListEl.querySelectorAll('.item');

console.log(categListItemEl.length);

for (const item of categListItemEl) {
    const categoryName = item.querySelector('h2').textContent;
    const elementsCount = item.querySelectorAll('ul li').length;
    console.log(categoryName);
    console.log(elementsCount);
}
