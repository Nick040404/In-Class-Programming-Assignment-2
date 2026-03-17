let count = 0; // Global variable to keep track of my animals currently displayed

function revealAnimal(type) {
    const container = document.getElementById('animal-container');
    const btn = document.getElementById(`btn-${type}`);

    // To prevent repeats
    if (document.getElementById(`display-${type}`)) return;

    // File paths from images folders 
    let fileName = "";
    if (type === 'cat') fileName = 'images/tabby-cat.jpg';
    else if (type === 'dog') fileName = 'images/dog.jpg';
    else if (type === 'cow') fileName = 'images/cow.jpg';

    // Creating the Animal Display Elements
    const animalDiv = document.createElement('div');
    animalDiv.id = `display-${type}`;
    animalDiv.className = 'animal-box';
    animalDiv.innerHTML = `
        <img src="${fileName}" alt="${type}">
        <button class="hide-btn" onclick="hideAnimal('${type}')">Hide Result</button>
    `;

    container.appendChild(animalDiv);
    
    // UI Feedback: Button turns green/rounded
    btn.classList.add('active-btn');
    
    count++;
    updateCounter();
}

function hideAnimal(type) {
    const animalDiv = document.getElementById(`display-${type}`);
    const btn = document.getElementById(`btn-${type}`);

    if (animalDiv) {
        animalDiv.remove();
        btn.classList.remove('active-btn'); // Reset style
        count--;
        updateCounter();
    }
}

function resetZoo() {
    // Hide all animals and reset UI to initial state
    document.getElementById('animal-container').innerHTML = "";
    
    // Remove active styles from all reveal buttons
    const revealButtons = document.querySelectorAll('.controls button');
    revealButtons.forEach(btn => btn.classList.remove('active-btn'));

    count = 0;
    updateCounter();
}

function updateCounter() {
    document.getElementById('counter').innerText = count; // Dynamic update
}