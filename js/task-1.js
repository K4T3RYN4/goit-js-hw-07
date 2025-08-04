const categListEl = document.querySelector('#categories');
const categListItemEl = categListEl.querySelectorAll('.item');

function countItems(categListItemEl) {
    return categListItemEl.length;
};

console.log(countItems(categListItemEl));

