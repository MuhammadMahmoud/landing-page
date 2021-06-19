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
const sections=document.querySelectorAll('section');
// var navSections=['Section 1','Section 2','Section 3','Section 4','Section 5'];
const appSections=document.getElementById('navbar__list');
var fragment = document.createDocumentFragment();
var appLiSections;
var attArr=[];
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
    var counter =0;
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
    appSections.appendChild(fragment);
    appLiSections=document.getElementsByClassName('liAtt');
    for(var i=0;i<appLiSections.length;i++){
        
        var a=document.createElement('a');
        // var val=section.getAttributeNode("data-nav").value;
        a.textContent=attArr[i];
        a.href='#';
        
         
        
        fragment.appendChild(a);           
        
        
    
        appLiSections[i].appendChild(fragment);
    }
}

// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active


