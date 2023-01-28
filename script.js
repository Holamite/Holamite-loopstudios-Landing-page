//Set current year
const yearEl = document.querySelector(".year");
const currentYear = new Date().getFullYear();
console.log(currentYear)
yearEl.textContent = (currentYear);

///////////////////////////////////////////////////////////
// Make mobile navigation work

const navBnEl = document.querySelector(".btn-nav");
const headingEl = document.querySelector(".nav-loop-head");

navBnEl.addEventListener("click", function () {
    headingEl.classList.toggle("nav-open");
});

///////////////////////////////////////////////////////////
// Smooth scrolling animation

const allLinks = document.querySelectorAll("a:link");

allLinks.forEach(function (link) {
    link.addEventListener("click", function (e) {
        e.preventDefault();
        const href = link.getAttribute("href");
        console.log(href)

        // Scroll back to top
        if (href === "#")
            window.scrollTo({
                top: 0,
                behavior: "smooth",
            });

        // Scroll to other links
        if (href !== "#" && href.startsWith("#")) {
            const sectionEl = document.querySelector(href);
            sectionEl.scrollIntoView({ behavior: "smooth" });
        }

        // Close mobile naviagtion
        if (link.classList.contains("loop-list-item"))
            headingEl.classList.toggle("nav-open");
    });
});


///////////////////////////////////////////////////////////
// Sticky navigation

const sectionHeroEl = document.querySelector(".sectionHeroEl");

const obs = new IntersectionObserver(
    function (entries) {
        const ent = entries[0];
        console.log(ent);

        if (ent.isIntersecting === false) {
            document.body.classList.add("sticky");
        }

        if (ent.isIntersecting === true) {
            document.body.classList.remove("sticky");
        }
    },
    {
        // In the viewport
        root: null,
        threshold: 0,
        rootMargin: "-80px",
    }
);
obs.observe(sectionHeroEl);