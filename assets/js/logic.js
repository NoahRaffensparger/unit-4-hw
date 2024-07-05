const modeBtn = document.querySelector('#mode-switch-button')


let viewmode = 'dark';

function modifyThemeClass(){
    const newViewmode = (viewmode === 'dark') ? 'light' : 'dark';
    document.querySelector("body").classList.replace
    (viewmode, newViewmode);
    viewmode = newViewmode;
  }
  
modeBtn.addEventListener('click', function(){
    modifyThemeClass()
})

