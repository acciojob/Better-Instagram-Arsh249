const draggables = document.querySelectorAll('.draggable');
let draggedElement = null;

// Add event listeners for drag and drop
draggables.forEach(draggable => {
    draggable.addEventListener('dragstart', handleDragStart);
    draggable.addEventListener('dragover', handleDragOver);
    draggable.addEventListener('drop', handleDrop);
    draggable.addEventListener('dragend', handleDragEnd);
});

function handleDragStart(event) {
    draggedElement = event.target; // Store the dragged element
    event.target.style.opacity = '0.5';
}

function handleDragOver(event) {
    event.preventDefault(); // Prevent default to allow drop
}

function handleDrop(event) {
    event.preventDefault(); // Prevent default action

    if (draggedElement !== this) {
        // Swap the background images of the dragged and dropped elements
        const draggedStyle = draggedElement.style.backgroundImage;
        draggedElement.style.backgroundImage = this.style.backgroundImage;
        this.style.backgroundImage = draggedStyle;
    }
}

function handleDragEnd(event) {
    event.target.style.opacity = '1'; // Reset the opacity
    draggedElement = null; // Clear the dragged element
}
