// Load clothing data from JSON and initialize the game
fetch('clothing.json')
    .then(response => response.json())
    .then(data => initializeGame(data));

function initializeGame(data) {
    const characterContainer = document.getElementById('character');
    const controlsContainer = document.getElementById('controls');

    // Create clothing layers dynamically
    data.categories.forEach(category => {
        // Create an <img> element for each category
        const img = document.createElement('img');
        img.id = category.id;
        img.classList.add('clothing');
        img.src = category.id === 'body' ? category.options[0].image : ''; // Default body image
        img.alt = category.name;
        characterContainer.appendChild(img);

        // Create controls for each category
        const categoryDiv = document.createElement('div');
        categoryDiv.classList.add('category');
        categoryDiv.innerHTML = `<h3>${category.name}</h3>`;

        category.options.forEach(option => {
            const button = document.createElement('button');
            button.textContent = option.name;
            button.onclick = () => changeClothing(category.id, option.image);
            categoryDiv.appendChild(button);
        });

        // Add the category controls to the controls container
        controlsContainer.appendChild(categoryDiv);
    });
}

function changeClothing(categoryId, image) {
    const img = document.getElementById(categoryId);
    if (img) {
        img.src = image;
    }
}