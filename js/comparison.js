// Load gallery data
async function loadGallery() {
    try {
        const response = await fetch('/js/gallery.json');
        if (!response.ok) throw new Error('Failed to load gallery data');
        
        let data = await response.json();

        data.sort((a, b) => {
            const dateB = new Date(b.tanggal.split('-').reverse().join('-'));
            const dateA = new Date(a.tanggal.split('-').reverse().join('-'));
            if (dateA !== dateB) {
                return dateB - dateA; // Urutkan dari terlama ke terbaru
            }
            const nameB = b.kepemilikan.split(' ').reverse().join(' ').toUpperCase();
            const nameA = a.kepemilikan.split(' ').reverse().join(' ').toUpperCase();
            return nameB.localeCompare(nameA);
        });

        galleryContainer.innerHTML = ''; // Hapus konten yang ada

        data.forEach(item => {
            const galleryItem = document.createElement('div');
            galleryItem.className = `col-lg-4 col-md-6 col-sm-6 mix ${item.label}`;

            galleryItem.innerHTML = `
                <div class="portfolio__item">
                    <div id="cover" class="${item.tipe} set-bg" data-setbg="${item.cover}">
                        <a id="preview" title="${item.judul_alternatif}" href="${item.preview}" class="${item.atribut}"><i class="${item.icon}"></i></a>
                    </div>
                    <div class="portfolio__item__text">
                        <h4 id="judul-karya">${item.judul_karya}</h4>
                        <ul>
                            <li id="kepemilikan">${item.kepemilikan}</li>
                            <li id="tanggal">${item.tanggal}</li>
                        </ul>
                    </div>
                </div>
            `;
            
            galleryContainer.appendChild(galleryItem);
        });

        // Inisialisasi background image
        document.querySelectorAll('.set-bg').forEach(element => {
            const bg = element.getAttribute('data-setbg');
            element.style.backgroundImage = `url(${bg})`;
        });

    } catch (error) {
        console.error('Error loading gallery data:', error);
    }
}
