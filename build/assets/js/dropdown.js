const dropdownButtons = document.querySelectorAll('.dropdown-btn');

dropdownButtons.forEach(button => {
    const dropdown = document.getElementById(button.dataset.dropdown);

    console.log(dropdown);

    button.addEventListener('click', function() {
        dropdown.classList.remove('hidden');
    });

    document.addEventListener('click', function (e) {
        console.log(e.target);
        // if(){
        //     dropdown.classList.add('hidden');
        // }
    })
});