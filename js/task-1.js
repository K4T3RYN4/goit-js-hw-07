const categListEl = document.querySelector('#categories');
const categListItemEl = categListEl.querySelectorAll('h2');

function countItems(categListItemEl) {
    return categListItemEl.length;
};

console.log(countItems(categListItemEl));


for (const item of categListItemEl) {
    console.log(item);
    console.log(item.nextElementSibling.children.length);
}