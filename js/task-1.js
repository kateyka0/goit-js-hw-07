const categoriesList = document.querySelector("#categories");
const categoriesItems = categoriesList.querySelectorAll(".item");
categoriesList.style.listStyleType = 'none';
console.log(`Number of categories: ${categoriesItems.length}`);
categoriesItems.forEach(item => {
    const categoriesTitle = item.querySelector("h2").textContent;
    const categoriesElements = item.querySelectorAll("ul li").length;
    console.log(`Categore: ${categoriesTitle}`);
    console.log(`Elements: ${categoriesElements}`);
});
