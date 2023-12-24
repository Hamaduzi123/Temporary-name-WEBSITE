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

    document.addEventListener('DOMContentLoaded', function () {
        // Retrieve product details from sessionStorage
        const storedProductDetails = sessionStorage.getItem('productDetails');
        if (storedProductDetails) {
            const productDetails = JSON.parse(storedProductDetails);

            // Replace placeholders with stored values
            document.getElementById('product-detail-brand').textContent = productDetails.brand;
            document.getElementById('product-detail-title').textContent = productDetails.title;
            document.getElementById('product-detail-price').textContent = productDetails.price;
            
            // Set the content of the description with HTML tags
            const descriptionContainer = document.getElementById('product-description');
            descriptionContainer.innerHTML = productDetails.description;

            document.getElementById('product-detail-image').src = productDetails.imageUrl;

            // Generate star icons
            const starsContainer = document.getElementById('product-detail-stars');
            starsContainer.innerHTML = generateStarIcons(productDetails.stars);
        }
    });

    function generateStarIcons(count) {
        // Generate the HTML for the star icons based on the count
        return '⭐'.repeat(count);
    }