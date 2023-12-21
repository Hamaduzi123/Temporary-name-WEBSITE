function openProductDetails(brand, title, stars, price, description, imageUrl) {
    // Store product details in sessionStorage
    const productDetails = {
        brand: brand,
        title: title,
        stars: stars,
        price: price,
        description: description,
        imageUrl: imageUrl
    };
    sessionStorage.setItem('productDetails', JSON.stringify(productDetails));

    // Change the URL to the product details page
    window.location.href = 'productdetail.html';
}

function generateStarIcons(count) {
    // Generate the HTML for the star icons based on the count
    return '⭐'.repeat(count);
}
