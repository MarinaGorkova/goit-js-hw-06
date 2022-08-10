const countCategories = document.querySelectorAll('li.item').length;
console.log(`Number of categories: ${countCategories}`);

console.log(countCategories);

const CategoriesList = document.querySelectorAll('li.item');
CategoriesList.forEach(element => {
    const h2El = element.querySelector('h2').textContent
    const ulEl = element.querySelectorAll('li')
    console.log(`Category: ${h2El}`)
    console.log(`Elements: ${ulEl.length}`)
})