function toggleNavBar( ) {
    let navBarCollapse = document.getElementById('navBarCollapse');
    if(navBarCollapse.className === 'col-flex visible') {
        navBarCollapse.className += ' responsive';
    }
    else {
        navBarCollapse.className = 'col-flex visible';
    }
}