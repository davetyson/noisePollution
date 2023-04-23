// Declare portfolioApp
const portfolioApp = {};

// Select elements for footer functions
portfolioApp.footerP = document.querySelector('.footerP');

// Footer Year function
portfolioApp.footerYear = () => {
    let currentYear = new Date().getFullYear();
    portfolioApp.footerP.innerHTML = `© Noise Pollution Rock School / Matt Ellis, ${currentYear}`;
}

// Formspree code to clear contact form after submission
portfolioApp.formspreeClear = () => {
    window.onbeforeunload = () => {
        for(const form of document.getElementsByTagName('form')) {
          form.reset();
        }
    }
}

// Initialize portfolioApp
portfolioApp.init = () => {

    // Call all functions
    portfolioApp.footerYear();
    portfolioApp.formspreeClear();
}

// Call portfolioApp initialization
portfolioApp.init();