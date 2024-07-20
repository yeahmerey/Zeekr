document.addEventListener('DOMContentLoaded', () => {
    const countElement = document.getElementById('Count');
    const addButton = document.getElementById('add-button');
    const resetButton = document.getElementById('reset-button');
    
    let Count = 0;

    addButton.addEventListener('click', () => {
        Count++;
        countElement.textContent = Count;
        if (Count%33 == 0) {
            alert("Good!"); // Отображает сообщение при достижении 33
        }
        if (Count%100 == 0){
            alert("Wow!")
        }
    });

    resetButton.addEventListener('click', () => {
        Count = 0;
        countElement.textContent = Count;
    });
});
