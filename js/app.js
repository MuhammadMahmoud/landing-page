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
const sections=document.querySelectorAll('section'); // select sections
const sectionsByTag=document.getElementsByTagName('section');
// var navSections=['Section 1','Section 2','Section 3','Section 4','Section 5'];
const appSections=document.getElementById('navbar__list'); // select ul for the creation of li
var fragment = document.createDocumentFragment(); 
var appLiSections; // variable to loop with on li anchor create
var attArr=[]; //array for the store of section data to add it to the anchor of the navbar
var aqueries; // for list of anchors
var queries; //for h2 inside sections
var navLink=document.getElementById('navbar__menu');
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
    var counter =0; // counter for the arr of sections data
    // create li + class "liAtt" + store the data-nav att in array
    for (const section of sections) {
        var li = document.createElement('li');
        
        var att=document.createAttribute("class");
        att.value="liAtt";
        li.setAttributeNode(att);
        fragment.appendChild(li);
        attArr[counter]=section.getAttributeNode("data-nav").value;
        counter++;
    }
    counter=0;
    //append li
    appSections.appendChild(fragment);
    appLiSections=document.getElementsByClassName('liAtt');
    //create anchors for each li 
    for(var i=0;i<appLiSections.length;i++){
        
        var a=document.createElement('a');
        a.classList.add('anchorAtt');
        a.classList.add('menu__link');
        a.textContent=attArr[i];
        a.href='';
        
         
        
        fragment.appendChild(a);           
        
        
    
        appLiSections[i].appendChild(fragment);
    }
    aqueries=document.getElementsByClassName('anchorAtt');
}

// Add class 'active' to section when near top of viewport

function toggleActiveState(){
     var currentSection=-10;
    for (const section of sections){
        if(currentSection != section.getAttribute('data-nav')){
            section.classList.remove('your-active-class');
        }
    }
    if(!!window.IntersectionObserver){    
    let observer = new IntersectionObserver((entries, observer) => { 
        entries.forEach(entry => {
        if(entry.isIntersecting){
          //console.log(entry);
            if(!(entry.target.classList.contains('your-active-class'))){

                entry.target.classList.add('your-active-class');
                currentSection=entry.target.getAttribute('data-nav');

            }
          observer.unobserve(entry.target);
        }
        },{rootMargin: "0px 0px -200px 0px"},{threshold: 0.5});
      });
      sections.forEach(section => { observer.observe(section) });
    }
    else{
        console.log("Doesn't support observe");
    }
}


// Scroll to anchor ID using scrollTO event
// function scrollToSection(event ,aquery) {
//     
//     event.preventDefault();
//     for (const section of sections) {
//         if(section.getAttributeNode("data-nav").value == aquery.textContent){
//             section.scrollIntoView({behavior: 'smooth', block: 'center'}); 
//         }        
//     }

    
// }


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 
document.addEventListener('DOMContentLoaded',navApp(sections));
for (const aquery of aqueries) {
    aquery.addEventListener('click', function scrollToSection(event){
    event.preventDefault();
    for (const section of sections) {
        
        if(section.getAttribute('data-nav') == aquery.textContent){
            section.scrollIntoView({behavior: 'smooth', block: 'center'}); 
        }        
    }
    });
}
// Set sections as active
window.addEventListener('scroll', toggleActiveState);
