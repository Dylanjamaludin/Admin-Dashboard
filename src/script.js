const sidebar = document.getElementById("sidebar");
const dashboard = document.getElementById("dashboard");
const header = document.getElementById("header");
const menu_button = document.querySelector("button[title='Menu']");
const menu_exit_button = document.querySelector("button[title='Exit']");

const bell_button= document.querySelector("button[title='Notifications']");
const bell_icon = document.getElementById('test');
const dropdown = document.getElementById("dropdown");
const dropdown_button = document.querySelector("button[title='More']");
let bell_toggle_val = 0;

function dropFunct ()
{
    dropdown.classList.toggle('p-3');
    dropdown.classList.toggle('h-0')
    dropdown.classList.toggle('h-auto');
    
}


function menuFunctOpen ()
{
    sidebar.classList.remove('w-0')
    sidebar.classList.add('w-60');
    sidebar.classList.toggle('opened');
}
function menuFunctExit ()
{
    sidebar.classList.remove('w-60')
    sidebar.classList.add('w-0');
    sidebar.classList.toggle('opened');
    
}
function changeBellIcon()
{
   
    if(bell_toggle_val ==0)
    {
        bell_icon.setAttribute("data-feather","bell-off");
        bell_toggle_val=1;
    }
    else if(bell_toggle_val == 1)
    {
        bell_icon.setAttribute("data-feather","");
        bell_toggle_val = 0;
    }
}
bell_button.onclick = changeBellIcon;
menu_button.onclick = menuFunctOpen;
menu_exit_button.onclick = menuFunctExit;
dropdown_button.onclick =dropFunct;

window.addEventListener('click', function(e){
    if (!document.getElementById('sidebar').contains(e.target) && !menu_button.contains(e.target) && (window.innerWidth <= 786) && sidebar.classList.contains("w-60"))
        menuFunctExit();
    if (!document.getElementById('dropdown').contains(e.target) && !dropdown_button.contains(e.target) && (window.innerWidth <= 786) && dropdown.classList.contains("h-auto"))
        dropFunct();
})