const count = document.querySelectorAll(".item").length;
console.log(`Number of categories:`, count);

const numberCategory = document.querySelectorAll(".item");
numberCategory.forEach((element) => {
    console.log('Category:', element.querySelector('h2').textContent);
    console.log('Elements:', element.querySelectorAll('li').length);
});