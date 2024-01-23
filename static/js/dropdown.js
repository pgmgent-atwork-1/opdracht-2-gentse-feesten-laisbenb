document.addEventListener("DOMContentLoaded", () => {
    const dropdownBtn = document.getElementById('dropdownBtn');
    const dropdownMenu = document.querySelector('.dropdown-content');

    //console.log('dropdownBtn:', dropdownBtn);
    //console.log('dropdownMenu:', dropdownMenu);

    dropdownBtn.addEventListener("click", function() {
      dropdownMenu.classList.toggle('showDropDown');
    });
});