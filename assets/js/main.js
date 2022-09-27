/* Filters tabs */
 const tabs = document.querySelectorAll('[data-target]'),
    tabContents = document.querySelectorAll('[data-content]');

tabs.forEach(tab =>{
    tab.addEventListener('click', () =>{
        const target = document.querySelector(tab.dataset.target);
        
        tabContents.forEach( tc  =>{ /* tc = tabcontent */
            tc.classList.remove('filters__active');
        });

        target.classList.add('filters__active');

        tabs.forEach( t =>{  /* t = tab */
            t.classList.remove('filter-tab-active');
        });

        tab.classList.add('filter-tab-active');
    });
});

/* Dark Mode */
const themeButton = document.getElementById('theme-button');
const darkTheme = 'dark-theme';
const iconTheme = 'ri-sun-line';

// Previously selected topic (if user seleted)
const selectedTheme = localStorage.getItem('selected-theme');
const selectedIcon = localStorage.getItem('selected-icon');

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light';
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'ri-moon-line' : 'ri-sun-line';

// We validate is fulfilled, we ask what the issue was to know if we actived or desactived the dark-theme
document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme);
themeButton.classList[selectedIcon === 'ri-moon-line' ? 'add' : 'remove'](iconTheme);

// ON/OFF the theme manually with the button
themeButton.addEventListener('click', () =>{
    // ON/OFF
    document.body.classList.toggle(darkTheme);
    themeButton.classList.toggle(iconTheme);

    //We save the theme and the current icon that user chose
    localStorage.setItem('selected-theme', getCurrentTheme());
    localStorage.setItem('selected-icon', getCurrentIcon());
})