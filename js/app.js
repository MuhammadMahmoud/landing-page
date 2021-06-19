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
// var navSections=['Section 1','Section 2','Section 3','Section 4','Section 5'];
const appSections=document.getElementById('navbar__list'); // select ul for the creation of li
var fragment = document.createDocumentFragment(); 
var appLiSections; // variable to loop with on li anchor create
var attArr=[]; //array for the store of section data to add it to the anchor of the navbar
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
    // create li + class "liAtt" + store the data-nac att in array
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


