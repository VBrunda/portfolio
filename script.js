// Side menu for mimnimized screen
var tabLinks = document.getElementsByClassName('tab-links');
var tabContents = document.getElementsByClassName('tab-contents');

function openTab(tabType) {
    for (const tab of tabLinks) {
        tab.classList.remove('active-link');
    }
    for (const tab of tabContents) {
        tab.classList.remove('active-tab');
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabType).classList.add("active-tab");
}

var sideMenu = document.getElementById('side-menu');
function openMenu() {
    sideMenu.style.right = "0";
}
function closeMenu() {
    sideMenu.style.right = "-150px";
}

// to add the contact form details to google sheet
const scriptURL = 'link to google sheet';
const form = document.forms['submit-to-google-sheet']
const msg=document.getElementById('msg');
form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        .then(response => {msg.innerHTML="Message sent successfullly"
        setTimeout(function(){
            msg.innerHTML='';
        }, 5000)
        form.reset();
    })
        .catch(error => console.error('Error!', error.message))
})

// dark/light theme
var icon = document.getElementById('icon');
icon.onclick = function(){
    document.body.classList.toggle("light-theme");
    if(document.body.classList.contains("light-theme")){
        icon.src="images/moon.png";
    }else{
        icon.src="images/sun.png";
    }
}