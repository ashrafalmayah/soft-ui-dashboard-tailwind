const popup = document.getElementById('pop-up');
const buttons = document.querySelectorAll('.pop-up-btn');

buttons.forEach(button => {
    const form = document.getElementById(button.dataset.popupform);
    button.addEventListener('click', function() {
        popup.classList.remove('hidden');
        form.classList.remove('hidden');
    });   

    form.querySelector('.close-form-btn').addEventListener('click', function() {
        popup.classList.add('hidden');
        form.classList.add('hidden');
    });

    popup.addEventListener('click', function(e) {
        if(e.target == popup){
            popup.classList.add('hidden');
            form.classList.add('hidden');
        }
    });
});