function goBack() {
    console.log('Go Back button clicked');
    // Navigate back to the index.html page
    window.location.href = 'product.html';
    }

    function addToCart() {
        alert('Product added to cart!');
    }
    
    const toggleButton = document.getElementsByClassName('toggle-btn')[0];
    const navbarLinks = document.getElementsByClassName('navbar-links')[0];

    // Expands the menu when burger menu is clicked
    toggleButton.addEventListener('click', () => {
        navbarLinks.classList.toggle('active');
        toggleButton.classList.toggle('active');
    });
