/*  ---------------------------------------------------
    Template Name: Dreams
    Description: Dreams wedding template
    Author: Colorib
    Author URI: https://colorlib.com/
    Version: 1.0
    Created: Colorib
---------------------------------------------------------  */

'use strict';

(function ($) {

    /*------------------
        Preloader
    --------------------*/
    $(window).on('load', function () {
        $(".loader").fadeOut();
        $("#preloder").delay(175).fadeOut("slow");

        /*------------------
            Portfolio filter
        --------------------*/
        $('.portfolio__filter li').on('click', function () {
            $('.portfolio__filter li').removeClass('active');
            $(this).addClass('active');
        });
        if ($('.portfolio__gallery').length > 0) {
            var containerEl = document.querySelector('.portfolio__gallery');
            var mixer = mixitup(containerEl);
        }
    });

    /* Loading v2 - Page Loader
    jQuery("#load").fadeOut();
    jQuery("#loading").delay(250).fadeOut("slow"); */
    
    $(window).on('load', function() {
        $("#loading").delay(175).fadeOut("slow");
    });
    

    document.addEventListener('DOMContentLoaded', function() {
        // Select all text elements
        const textElements = document.querySelectorAll('p, span, div, h1, h2, h3, h4, h5, h6');

        // Add cursor-text class to all text elements
        textElements.forEach(function(element) {
            element.classList.add('cursor-text');
        });
    });

    // ========--Cursor v2--===================
    // file di folder /hide/cursor-2.js

    // GRID CSS - Struktur Kepengurusan
    const cards = document.querySelectorAll(".grid-item");
    cards.forEach((item) => {
      item.addEventListener("mouseover", () => {
        cards.forEach((el) => el.classList.remove("active"));
        item.classList.add("active");
      });
    });

    /*------------------
        Background Set
    --------------------*/
    $('.set-bg').each(function () {
        var bg = $(this).data('setbg');
        $(this).css('background-image', 'url(' + bg + ')');
    });

    //Masonary
    $('.work__gallery').masonry({
        itemSelector: '.work__item',
        columnWidth: '.grid-sizer',
        gutter: 10
    });

    /*------------------
		Navigation
	--------------------*/
    $(".mobile-menu").slicknav({
        prependTo: '#mobile-menu-wrap',
        allowParentLinks: true
    });

    /*------------------
		Hero Slider
	--------------------*/
    $('.hero__slider').owlCarousel({
        loop: true,
        dots: true,
        mouseDrag: false,
        animateOut: 'fadeOut',
        animateIn: 'fadeIn',
        items: 1,
        margin: 0,
        smartSpeed: 1200,
        autoHeight: false,
        autoplay: true,
    });

    var dot = $('.hero__slider .owl-dot');
    dot.each(function () {
        var index = $(this).index() + 1;
        if (index < 10) {
            $(this).html('0').append(index);
        } else {
            $(this).html(index);
        }
    });

    /*------------------
        Testimonial Slider
    --------------------*/
    $(".quotes__slider").owlCarousel({
        loop: true,
        margin: 0,
        items: 3,
        dots: true,
        dotsEach: 2,
        smartSpeed: 1200,
        autoHeight: false,
        autoplay: true,
        responsive: {
            992: {
                items: 3
            },
            768: {
                items: 2
            },
            320: {
                items: 1
            }
        }
    });

    /*------------------
        Latest Slider
    --------------------*/
    $(".latest__slider").owlCarousel({
        loop: true,
        margin: 0,
        items: 3,
        dots: true,
        dotsEach: 2,
        smartSpeed: 1200,
        autoHeight: false,
        autoplay: true,
        responsive: {
            992: {
                items: 3
            },
            768: {
                items: 2
            },
            320: {
                items: 1
            }
        }
    });

    /*------------------
        Logo Slider
    --------------------*/
    $(".logo__carousel").owlCarousel({
        loop: true,
        margin: 100,
        items: 6,
        dots: false,
        smartSpeed: 1200,
        autoHeight: false,
        autoplay: true,
        responsive: {
            992: {
                items: 5
            },
            768: {
                items: 4
            },
            480: {
                items: 3
            },
            320: {
                items: 2
            }
        }
    });

    /*------------------
        Magnific Popup
    --------------------*/
    $('.video-popup').magnificPopup({
        type: 'iframe'
    });

    /*------------------
        Counter
    --------------------*/
    $('.counter_num').each(function () {
        $(this).prop('Counter', 0).animate({
            Counter: $(this).text()
        }, {
            duration: 4000,
            easing: 'swing',
            step: function (now) {
                $(this).text(Math.ceil(now));
            }
        });
    });

})(jQuery);

document.addEventListener('DOMContentLoaded', function() {
    const galleryContainer = document.querySelector('.portfolio__gallery');
    const loadMoreButton = document.getElementById('loadMore');
    
    let initialItemsToShow = 9; // Jumlah item yang ditampilkan sebelum tombol "Load More" muncul
    let itemsToLoad = 12; // Jumlah item yang ditambahkan setiap kali tombol "Load More" diklik
    let currentFilter = '*';
    let itemsToShow = initialItemsToShow;

    // Fungsi untuk menampilkan/menyembunyikan item berdasarkan filter
    function filterItems(filter) {
        const items = document.querySelectorAll('.portfolio__gallery .mix');
        let visibleItems = 0;
        let totalMatchingItems = 0; // Hitung semua item yang cocok dengan filter
        currentFilter = filter;
    
        items.forEach((item, index) => {
            if (filter === '*' || item.classList.contains(filter.substring(1))) {
                totalMatchingItems++; // Tambahkan ke total item yang cocok
                if (visibleItems < itemsToShow) {
                    item.style.display = 'block';
                    visibleItems++;
                } else {
                    item.style.display = 'none';
                }
            } else {
                item.style.display = 'none';
            }
        });
    
        // Tampilkan tombol "Load More" jika ada lebih dari jumlah item yang ditampilkan dan total item lebih dari 3
        if (totalMatchingItems > visibleItems && totalMatchingItems > 3) {
            loadMoreButton.style.display = 'block';
        } else {
            loadMoreButton.style.display = 'none';
        }
    }    

    // Mengatur filter pada klik
    document.querySelectorAll('.portfolio__filter li').forEach(li => {
        li.addEventListener('click', function() {
            // Hapus kelas 'active' dari semua filter
            document.querySelectorAll('.portfolio__filter li').forEach(li => li.classList.remove('active'));
            // Tambahkan kelas 'active' pada filter yang dipilih
            this.classList.add('active');
            // Ambil nilai filter yang dipilih
            const filterValue = this.getAttribute('data-filter');
            // Setel ulang item yang ditampilkan saat filter berubah
            itemsToShow = initialItemsToShow;
            // Terapkan filter
            filterItems(filterValue);
        });
    });

    // Load gallery data
    async function loadGallery() {
        try {
            const response = await fetch('/js/gallery.json');
            if (!response.ok) throw new Error('Failed to load gallery data');
            
            let data = await response.json();
            data.sort((a, b) => new Date(b.tanggal.split('-').reverse().join('-')) - new Date(a.tanggal.split('-').reverse().join('-')));

            galleryContainer.innerHTML = ''; // Hapus konten yang ada

            let itemCount = 0; // Hitung jumlah item yang ditampilkan

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

            // Inisialisasi Magnific Popup
            $('.video-popup').magnificPopup({
                type: 'iframe'
            });

            $('.img-preview').magnificPopup({
                type: 'image',
                gallery: {
                    enabled: false,
                }
            });

            // Terapkan filter setelah galeri dimuat
            filterItems(currentFilter);

        } catch (error) {
            console.error('Error loading gallery data:', error);
        }
    }

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

    // Execute Gallery functions
    loadGallery();
});

document.addEventListener('DOMContentLoaded', function() {
    // Load blog data
    async function loadBlog() {
        try {
            const response = await fetch('/js/blog.json');
            if (!response.ok) throw new Error('Failed to load blog data');
            
            const posts = await response.json();
            const currentPostUrl = window.location.pathname.split("/").pop();
            const currentIndex = posts.findIndex(post => post.url === currentPostUrl);

            if (currentIndex !== -1) {
                initNavigation(posts, currentIndex);
            } else {
                console.error("Current post not found in the list of posts.");
            }

            const currentPostTitleElement = document.querySelector('.blog__hero__text h2');
            const currentPostTitle = currentPostTitleElement ? currentPostTitleElement.innerText.trim() : "";
            const currentPostTagsElement = document.querySelector('.blog__details__tags a');
            const currentPostTags = currentPostTagsElement ? currentPostTagsElement.innerText.trim() : "";

            updateRelatedPostsHeading();
            loadSimilarPosts(currentPostTitle, currentPostTags);
        } catch (error) {
            console.error('Error loading blog data:', error);
        }
    }

    // Blog navigation function
    function initNavigation(posts, currentIndex) {
        const prevPostIndex = currentIndex - 1;
        const nextPostIndex = currentIndex + 1;

        if (prevPostIndex >= 0) {
            const prevPost = posts[prevPostIndex];
            document.getElementById('prev-post').href = `/blog/post/website/${prevPost.url}`;
            document.getElementById('prev-img').src = prevPost.img;
            document.getElementById('prev-title').innerText = prevPost.title;
            document.getElementById('prev-date').innerText = prevPost.date;
        } else {
            document.getElementById('prev-post').style.display = 'none';
        }

        if (nextPostIndex < posts.length) {
            const nextPost = posts[nextPostIndex];
            document.getElementById('next-post').href = `/blog/post/website/${nextPost.url}`;
            document.getElementById('next-img').src = nextPost.img;
            document.getElementById('next-title').innerText = nextPost.title;
            document.getElementById('next-date').innerText = nextPost.date;
        } else {
            document.getElementById('next-post').style.display = 'none';
        }
    }

    // Similar posts function
    async function loadSimilarPosts(currentPostTitle, currentPostTags) {
        try {
            const response = await fetch('/js/blog.json');
            if (!response.ok) throw new Error('Failed to load similar posts');
            
            const posts = await response.json();
            const similarPosts = posts.filter(post => post.title !== currentPostTitle && post.tag === currentPostTags).slice(0, 3);
            const container = document.getElementById('similar-post');
            container.innerHTML = '';

            similarPosts.forEach(post => {
                const postHTML = `
                    <div class="col-lg-4 col-md-6 col-sm-6">
                        <a href="${post.url}" class="blog__details__recent__item">
                            <img src="${post.img}" alt="${post.title}" class="resize2">
                            <h5>${post.title}</h5>
                            <span>${post.date}</span>
                        </a>
                    </div>
                `;
                container.innerHTML += postHTML;
            });
        } catch (error) {
            console.error('Error loading similar posts:', error);
        }
    }

    // Update heading for related posts
    function updateRelatedPostsHeading() {
        const currentPostTagElement = document.querySelector('.blog__details__tags a');
        if (currentPostTagElement) {
            const currentTag = currentPostTagElement.innerText.trim();
            const relatedPostsHeading = document.querySelector('.blog__details__recent h4');
            if (relatedPostsHeading) {
                relatedPostsHeading.textContent = `Postingan mengenai ${currentTag}`;
            }
        }
    }

    // Execute Blog functions
    loadBlog();
});
