document.addEventListener('DOMContentLoaded', (event) => {
  const draggables = document.querySelectorAll('.image');
  let draggedElement = null;

  draggables.forEach(draggable => {
    draggable.addEventListener('dragstart', (e) => {
      draggedElement = e.target;
      e.target.classList.add('selected');
    });

    draggable.addEventListener('dragend', (e) => {
      e.target.classList.remove('selected');
    });

    draggable.addEventListener('dragover', (e) => {
      e.preventDefault();
    });

    draggable.addEventListener('drop', (e) => {
      e.preventDefault();
      if (draggedElement && draggedElement !== e.target) {
        swapImages(draggedElement, e.target);
      }
    });
  });

  function swapImages(el1, el2) {
    const tempBackground = el1.style.backgroundImage;
    el1.style.backgroundImage = el2.style.backgroundImage;
    el2.style.backgroundImage = tempBackground;
  }
});
