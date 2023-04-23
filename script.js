// Declare noisePollution app
const noisePollution = {};

// Select elements for menu & footer functions
noisePollution.menuOpen = document.querySelector('.menuOpen');
noisePollution.menuOpenP = document.querySelector('.menuOpenP');
noisePollution.menuLink = document.querySelectorAll('.menuLink');
noisePollution.footerP = document.querySelector('.footerP');

// Show/hide mobile menu function
noisePollution.mobileMenu = (eventType) => {
    noisePollution.menuOpen.addEventListener(eventType, function(){
        if (noisePollution.menuLink[0].className === 'menuLink hideMenu') {
            noisePollution.menuOpenP.innerText = 'Close Menu';
            for (let i=0; i < noisePollution.menuLink.length; i++) {
                noisePollution.menuLink[i].className = 'menuLink showMenu';
            }
        } else if (noisePollution.menuLink[0].className === 'menuLink showMenu') {
            noisePollution.menuOpenP.innerText = 'Menu';
            for (let i=0; i < noisePollution.menuLink.length; i++) {
                noisePollution.menuLink[i].className = 'menuLink hideMenu';
            }        
        }
    });
}

// Footer Year function
noisePollution.footerYear = () => {
    let currentYear = new Date().getFullYear();
    noisePollution.footerP.innerHTML = `© Noise Pollution Rock School / Matt Ellis, ${currentYear}`;
}

// Formspree code to clear contact form after submission
noisePollution.formspreeClear = () => {
    window.onbeforeunload = () => {
        for(const form of document.getElementsByTagName('form')) {
          form.reset();
        }
    }
}

// Initialize noisePollution
noisePollution.init = () => {

    // Call all functions
    noisePollution.footerYear();
    noisePollution.formspreeClear();
    noisePollution.mobileMenu('click');
    noisePollution.mobileMenu('keypress');
}

// Call noisePollution initialization
noisePollution.init();