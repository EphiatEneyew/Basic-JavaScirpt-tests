const dynamicContent = document.getElementById('dynamicContent');

    for (let i = 1; i <= 5; i++) {
        const paragraph = document.createElement('p');
        paragraph.textContent = `Message ${i}`;
        dynamicContent.appendChild(paragraph);
    }