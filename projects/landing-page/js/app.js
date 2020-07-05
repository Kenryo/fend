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

/**
* @description build the navigation bar
*/
const buildNavBar = () => {

    const navbar_elm = document.querySelector("#navbar__list");
    const vDom = document.createDocumentFragment();
    const sections = document.querySelectorAll("section");

    for ( const section of sections ) {
        const data = section.getAttribute("data-nav");
    
        const list_elm = document.createElement("li");
        const link = document.createElement("span");
        link.innerText = data
        link.className = "menu__link"
        link.setAttribute("link_id", section.id)
        link.link = section.id
        link.addEventListener("click", scrollToAnchorId)
    
        list_elm.appendChild(link)
        vDom.appendChild(list_elm)
    }
    navbar_elm.appendChild(vDom);
}

/**
* @description Add class 'active' to section when near top of viewport
*/
const setActive = () => {

    const currentActiveElm = document.querySelector(".your-active-class");
    const sections = document.querySelectorAll("section");

    let nearTopElm = null;
    let closestPosition = Infinity;
    for (const section of sections) {
        const rect = section.getBoundingClientRect();

        if (Math.abs(rect.top) < closestPosition) {

            nearTopElm = section;
            closestPosition = Math.abs(rect.top);
        }
    }

    if( nearTopElm === null ){
        // if there is no appropriate section,
        // leave the last one as active.
        return;
    }

    if( currentActiveElm && currentActiveElm.id === nearTopElm.id ) {
        // do nothing if the active element hasn't changed.
        return;
    }
    
    nearTopElm.className = "your-active-class";
    if(currentActiveElm){
        currentActiveElm.className = "";
    }
}

// Scroll to anchor ID using scrollTO event
const scrollToAnchorId = (evt) => {
    const rect = document.getElementById(evt.target.getAttribute("link_id")).getBoundingClientRect();
    window.scrollTo(rect.left + window.pageXOffset, 
                    rect.top + window.pageYOffset);
}

/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 
buildNavBar();

// Scroll to section on link click

// Set sections as active
document.body.onscroll = setActive;


