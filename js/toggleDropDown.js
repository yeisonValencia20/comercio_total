function toggleDropDown(e){
    e.classList.toggle('show');
    e.nextElementSibling.children[0].classList.toggle('dropdown-visible');
    // if(e.nextElementSibling.children[0].classList.toggle('hidden') === 'none'){
    //     e.nextElementSibling.children[0].style.display = 'block'
    // }
    // else {
    //     e.nextElementSibling.children[0].style.display = null
    // }
}