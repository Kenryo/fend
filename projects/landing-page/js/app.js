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
function buildNavBar() {

    const navbar_elm = document.querySelector('#navbar__list');
    const vDom = document.createDocumentFragment();
    const sections = document.querySelectorAll('section');
    
    for ( const section of sections ) {
        const data = section.getAttribute('data-nav');
    
        const list_elm = document.createElement('li');
        const link = document.createElement('span');
        link.innerText = data
        link.className = 'menu__link'
        link.setAttribute('link_id', section.id)
        link.link = section.id
        link.addEventListener('click', scrollToAnchorId)
    
        list_elm.appendChild(link)
        vDom.appendChild(list_elm)
    }
    navbar_elm.appendChild(vDom);
}

// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event
function scrollToAnchorId (evt) {
    const rect = document.getElementById(evt.target.getAttribute('link_id')).getBoundingClientRect()
    window.scrollTo(rect.left +  + window.pageXOffset, 
                    rect.top + window.pageYOffset)
}

/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 
buildNavBar()

// Scroll to section on link click

// Set sections as active


