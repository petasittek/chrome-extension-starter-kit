'use strict';

// Run on *.heureka.cz
if (document.location.hostname.split('.').slice(-2).join('.') === 'heureka.cz') {
    let logoEl = document.querySelector('.header #home img');

    if (logoEl) {
        logoEl.style.transform = 'scaleX(-1)';
    }
}
