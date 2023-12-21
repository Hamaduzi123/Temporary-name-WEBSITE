// Declare anyProductDisplayed outside of the search function
let anyProductDisplayed = false;

const search = () => {
    console.log('Search function called');
    const searchbox = document.getElementById("search-item").value.toUpperCase();
    const storeitems = document.getElementById("pro-container");
    const product = document.querySelectorAll(".pro");
    const proname = storeitems.getElementsByTagName("h5");
    const nomatch = document.getElementsByClassName("no-match");

    // Reset anyProductDisplayed for each search
    anyProductDisplayed = false;

    for (var i = 0; i < proname.length; i++) {
        let match = product[i].getElementsByTagName("h5")[0];

        if (match) {
            let textvalue = match.textContent || match.innerHTML;

            if (textvalue.toUpperCase().indexOf(searchbox) > -1) {
                product[i].style.display = "";
                anyProductDisplayed = true;
            } else {
                product[i].style.display = "none";
            }
        }
    }

    // Check if any product is displayed before showing nomatch
    for (var i = 0; i < nomatch.length; i++) {
        nomatch[i].style.display = anyProductDisplayed ? "none" : "block";
    }
};
const toggleButton = document.getElementsByClassName('toggle-btn')[0];
const navbarLinks = document.getElementsByClassName('navbar-links')[0];

// Expands the menu when burger menu is clicked
toggleButton.addEventListener('click', () => {
    navbarLinks.classList.toggle('active');
    toggleButton.classList.toggle('active');
});

