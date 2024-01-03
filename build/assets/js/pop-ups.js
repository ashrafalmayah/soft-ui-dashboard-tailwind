const popup = document.getElementById('pop-up');
const newBtn = document.getElementById('new-pop-up-btn');
const newForm = document.getElementById('new-pop-up-form');

newBtn.addEventListener('click', function() {
    popup.classList.remove('hidden');
    newForm.classList.remove('hidden');
});

popup.addEventListener('click', function(e) {
    if(!e.target.closest('form')){
        popup.classList.add('hidden');
        newForm.classList.add('hidden');
    }
});