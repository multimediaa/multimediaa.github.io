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
    

    // ========--Cursor v2--===================
    var cursor = document.querySelector(".cur1");
    var cursorinner = document.querySelector(".cur2");

    let mouseX = 0, mouseY = 0;
    let cursorX = 0, cursorY = 0;

    document.addEventListener("mousemove", function (e) {
      mouseX = e.clientX;
      mouseY = e.clientY;
      cursorinner.style.left = mouseX + "px";
      cursorinner.style.top = mouseY + "px";
    });

    function animateCursor() {
      const speed = 0.2; // Medium
      cursorX += (mouseX - cursorX) * speed;
      cursorY += (mouseY - cursorY) * speed;
      cursor.style.transform = `translate3d(calc(${cursorX}px - 50%), calc(${cursorY}px - 50%), 0)`;
      requestAnimationFrame(animateCursor);
    }

    animateCursor();

    document.addEventListener("mousedown", function () {
      cursor.classList.add("click");
      cursorinner.classList.add("cursorinnerhover");
    });

    document.addEventListener("mouseup", function () {
      cursor.classList.remove("click");
      cursorinner.classList.remove("cursorinnerhover");
    });

    var textElements = document.querySelectorAll("h1, a"); // Text
    textElements.forEach((item) => {
      item.addEventListener("mouseover", () => {
        cursor.style.zIndex = "1000";
        cursorinner.style.zIndex = "999";
      });
      item.addEventListener("mouseleave", () => {
        cursor.style.zIndex = "999";
        cursorinner.style.zIndex = "1000";
      });
    });

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
        Video Popup
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

// Sebelumnya dan Selanjutnya
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

// Fetch posts data from JSON file
fetch('/js/blog.json')
    .then(response => response.json())
    .then(posts => {
        // Assume currentIndex is determined by the current URL
        const currentPostUrl = window.location.pathname.split("/").pop();
        const currentIndex = posts.findIndex(post => post.url === currentPostUrl);

        if (currentIndex !== -1) {
            initNavigation(posts, currentIndex);
        } else {
            console.error("Current post not found in the list of posts.");
        }
    })
    .catch(error => {
        console.error("Error fetching posts data:", error);
    });


// Postingan Serupa
// Function to load similar posts based on tags
function loadSimilarPosts(currentPostTitle, currentPostTags) {
    fetch('/js/blog.json')
        .then(response => response.json())
        .then(posts => {
            // Filter posts by tag and exclude the current post
            const similarPosts = posts.filter(post => {
                // Ensure no duplicate titles and matching tags
                return post.title !== currentPostTitle && post.tag === currentPostTags;
            }).slice(0, 3); // Limit to maximum 3 similar posts

            // Populate similar posts in HTML
            const container = document.getElementById('similar-post');
            container.innerHTML = ''; // Clear previous content

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
        })
        .catch(error => {
            console.error("Error fetching similar posts:", error);
        });
}

// Function to update the heading based on current post tag
function updateRelatedPostsHeading() {
    const currentPostTagElement = document.querySelector('.blog__details__tags a'); // Get tag element
    if (currentPostTagElement) {
        const currentTag = currentPostTagElement.innerText.trim(); // Get tag text
        const relatedPostsHeading = document.querySelector('.blog__details__recent h4'); // Get related posts heading element
        if (relatedPostsHeading) {
            relatedPostsHeading.textContent = `Postingan mengenai ${currentTag}`; // Update heading text
        }
    }
}

// Example of getting current post details
const currentPostTitleElement = document.querySelector('.blog__hero__text h2'); // Get current post title element
const currentPostTitle = currentPostTitleElement ? currentPostTitleElement.innerText.trim() : ""; // Get current post title text
const currentPostTagsElement = document.querySelector('.blog__details__tags a'); // Get tag element
const currentPostTags = currentPostTagsElement ? currentPostTagsElement.innerText.trim() : ""; // Get tag text, if available

// Update related posts heading based on current post tag
updateRelatedPostsHeading();

// Load similar posts based on current post's title and tags
loadSimilarPosts(currentPostTitle, currentPostTags);
