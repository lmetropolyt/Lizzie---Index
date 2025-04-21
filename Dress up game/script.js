// Load clothing data from JSON. This was the BEST choice. After doing lab 5 I realized how much more organized my final project could be with this file. It made everything so easy to edit 
// It allows me to come back later and add more clothing or take some away too without any difficulties
fetch('clothing.json')
    .then(response => response.json())
    .then(data => initializeGame(data));

let backgroundMusic; 

function initializeGame(data) {
    const characterContainer = document.getElementById('character');
    const controlsContainer = document.getElementById('controls');

    // Start default background music. SO that it wasnt so quiet at the start
    playBackgroundMusic('Music.mp3');

    // Create clothing layers that are layered properly. This was very imprtant and the first thing i had to get right for the game to work
    data.categories.forEach(category => {
        if (category.id === "music") {
            //for the music category
            const categoryDiv = document.createElement('div');
            categoryDiv.classList.add('category');
            categoryDiv.innerHTML = `<h3>${category.name}</h3>`;

            category.options.forEach(option => {
                const button = document.createElement('button');
                button.textContent = option.name;
                button.onclick = () => changeMusic(option.file); // Change music when button is clicked
                categoryDiv.appendChild(button);
            });

            controlsContainer.appendChild(categoryDiv);
        } else if (category.id === "habitat") {
            // After drawing all the bodys and clothing items i decieded to ass three habitats. I decided this after realising in Lab 5 i talked about the fairy habitats and thought it made this more connected to the rest of my project
            const categoryDiv = document.createElement('div');
            categoryDiv.classList.add('category');
            categoryDiv.innerHTML = `<h3>${category.name}</h3>`;

            category.options.forEach(option => {
                const button = document.createElement('button');
                button.textContent = option.name;
                button.onclick = () => {
                    playSound(); // Play sound when button is clicked
                    changeBackground(option.image);
                };
                categoryDiv.appendChild(button);
            });

            controlsContainer.appendChild(categoryDiv);
        } else {
            // Handle other categories
            const img = document.createElement('img');
            img.id = category.id;
            img.classList.add('clothing');
            img.src = category.id === 'body' ? category.options[0].image : ''; // This is to keep a default body image visable to the player when tou join the game. it makes the game more intuitive rather than having nothing there when you start playing
            img.alt = category.name;
            characterContainer.appendChild(img);

            const categoryDiv = document.createElement('div');
            categoryDiv.classList.add('category');
            categoryDiv.innerHTML = `<h3>${category.name}</h3>`;

            category.options.forEach(option => {
                const button = document.createElement('button');
                button.textContent = option.name;
                button.onclick = () => {
                    playSound(); // This plays the sound when the button is clicked
                    changeClothing(category.id, option.image);
                };
                categoryDiv.appendChild(button);
            });

            controlsContainer.appendChild(categoryDiv);
        }
    });
}

function changeClothing(categoryId, image) {
    const img = document.getElementById(categoryId);
    if (img) {
        img.src = image;
    }
}

function changeBackground(image) {
    document.body.style.background = `url(${image}) no-repeat center center fixed`;
    document.body.style.backgroundSize = "cover";
}

function playSound() {
    const audio = new Audio('M.mp3'); // Any button press on a button would make this sound play
    audio.volume = 0.3; // This is added so that the twinkle sound effects werent so loud and annoying
    audio.play();
}

function playBackgroundMusic(file) {
    if (backgroundMusic) {
        backgroundMusic.pause(); 
    }
    backgroundMusic = new Audio(file); 
    backgroundMusic.loop = true; 
    backgroundMusic.volume = 0.5; 
    backgroundMusic.play();
}

// This is to change the background music which was something I added after not being able to decide what song i wanted in the game
function changeMusic(file) {
    playBackgroundMusic(file); // This allowed me to have a default background song that is also s feature the player could change in the game
}