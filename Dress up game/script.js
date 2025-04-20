// Load clothing data from JSON so that the order is always perfect the way i want it and it easy to organize all the categories
fetch('clothing.json')
    .then(response => response.json())
    .then(data => initializeGame(data));

function initializeGame(data) {
    const characterContainer = document.getElementById('character');
    const controlsContainer = document.getElementById('controls');

    // Created clothing layers here
    data.categories.forEach(category => {
        const img = document.createElement('img');
        img.id = category.id;
        img.classList.add('clothing');
        img.src = category.id === 'body' ? category.options[0].image : ''; // This was my favorite line. At first i couldn't make it so that the body stayed there always. The game used to start with no character until you clicked a button. This was the line that helped make my game much more intuitive to the player
        img.alt = category.name;
        characterContainer.appendChild(img);

        const categoryDiv = document.createElement('div');
        categoryDiv.classList.add('category');
        categoryDiv.innerHTML = `<h3>${category.name}</h3>`;

        category.options.forEach(option => {
            const button = document.createElement('button');
            button.textContent = option.name;
            button.onclick = () => changeClothing(category.id, option.image);
            categoryDiv.appendChild(button);
        });

        controlsContainer.appendChild(categoryDiv);
    });
}

function changeClothing(categoryId, image) {
    const img = document.getElementById(categoryId);
    if (img) {
        img.src = image;
    }
}