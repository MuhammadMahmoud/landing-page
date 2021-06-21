/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
 */

/**
 * Define Global Variables
 * 
 */
const sections = document.querySelectorAll('section'); // select sections
const sectionsByTag = document.getElementsByTagName('section');
const appSections = document.getElementById('navbar__list'); // select ul for the creation of li
let fragment = document.createDocumentFragment();
let appLiSections; // variable to loop with on li anchor create
let attArr = []; //array for the store of section data to add it to the anchor of the navbar
let aqueries; // for list of anchors
let queries; //for h2 inside sections
let navLink = document.getElementById('navbar__menu');
// globalizing the current section & anchor to not lose the values 
let currentSection = -10;
let currentAnchor = '';

/**
 * End Global Variables
 * Start Helper Functions
 * 
 */



/**
 * End Helper Functions
 * Begin Main Functions
 * 
 */

// build the nav
function navApp(sections) {
    let counter = 0; // counter for the arr of sections data
    // create li + class "liAtt" + store the data-nav att in array
    for (const section of sections) {
        let li = document.createElement('li');

        let att = document.createAttribute("class");
        att.value = "liAtt";
        li.setAttributeNode(att);
        fragment.appendChild(li);
        attArr[counter] = section.getAttributeNode("data-nav").value;
        counter++;
    }
    counter = 0;
    //append li
    appSections.appendChild(fragment);
    appLiSections = document.getElementsByClassName('liAtt');
    //create anchors for each li 
    for (let i = 0; i < appLiSections.length; i++) {

        let a = document.createElement('a');
        a.classList.add('menu__link');
        a.textContent = attArr[i];
        a.href = '#';



        fragment.appendChild(a);



        appLiSections[i].appendChild(fragment);
    }
    aqueries = document.getElementsByClassName('menu__link');
}

// Add class 'active' to section when near top of viewport

function toggleActiveState() {
    //   intersect every the window meet a section
    if (!!window.IntersectionObserver) {
        let observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    if (!(entry.target.classList.contains('your-active-class'))) {

                        entry.target.classList.add('your-active-class');
                        //load the current intersected section & anchor to activte them
                        currentSection = entry.target.getAttribute('data-nav');
                        currentAnchor = currentSection;
                        for (const section of sections) {
                            if (currentSection != section.getAttribute('data-nav')) {
                                section.classList.remove('your-active-class');
                            }
                        }
                        for (const aquery of aqueries) {

                            if (currentAnchor != aquery.textContent && currentAnchor != '') {
                                aquery.id = '';
                            } else {
                                aquery.id = 'anchorAtt';
                            }
                        }
                    }

                    observer.unobserve(entry.target);

                }
            }, {
                rootMargin: "0px 0px px 0px"
            }, {
                threshold: 1
            });
        });
        sections.forEach(section => {
            observer.observe(section)
        });
    } else {
        console.log("Doesn't support observe");
    }
}


// Scroll to anchor ID using scrollTO event



/**
 * End Main Functions
 * Begin Events
 * 
 */

// Build menu 
document.addEventListener('DOMContentLoaded', navApp(sections));
for (const aquery of aqueries) {
    aquery.addEventListener('click', function scrollToSection(event) {
        event.preventDefault();
        for (const section of sections) {
            //scrol into the end of the section to avoid intersecting with the next section
            if (section.getAttribute('data-nav') == aquery.textContent) {
                section.scrollIntoView({
                    behavior: 'smooth',
                    block: 'end',
                    inline: "nearest"
                });
            }
        }
    });
}
// Set sections as active
window.addEventListener('scroll', toggleActiveState);