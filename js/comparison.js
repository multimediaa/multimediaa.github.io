// Handle klik pada tombol "Load More"
loadMoreButton.addEventListener('click', function(e) {
    e.preventDefault();
    itemsToShow += itemsToLoad; // Tambahkan jumlah item yang ingin dimuat
    filterItems(currentFilter);

    // Scroll ke item terakhir yang muncul
    const lastVisibleItem = document.querySelector('.portfolio__gallery .mix[style*="display: block"]:last-child');
    if (lastVisibleItem) {
        lastVisibleItem.scrollIntoView({ behavior: 'smooth' });
    }
});
