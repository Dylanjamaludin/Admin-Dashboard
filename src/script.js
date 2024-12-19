const sidebar = document.getElementById("sidebar");
const dashboard = document.getElementById("dashboard");
const header = document.getElementById("header");
const menu_button = document.querySelector("button[title='Menu']");
const menu_exit_button = document.querySelector("button[title='Exit']");

const bell_button= document.querySelectorAll(".notif");
const dropdown = document.getElementById("dropdown");
const dropdown_button = document.querySelector("button[title='More']");
const body_div = document.querySelector("body>div");
let bell_toggle_val = 0;

const dark_mode_button = document.querySelector("button[title='Dark Mode']");
const light_mode_button = document.querySelector("button[title='Light Mode']");
const os_mode_button = document.querySelector("button[title='OS Mode']");



const theme_mode = localStorage.getItem("theme_mode");
function load_theme(mode)
{
    localStorage.setItem("theme_mode", mode);
    let color;
    if(mode == "os_preference")
    {
        color = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark':'light'
    }
    else
    {
        color = mode=='dark_mode' ? 'dark':'light'
    }


    if((document.body.classList.contains("dark") && color == 'light')||(document.body.classList.contains("light") && color == 'dark'))
    {
        document.body.classList.remove("dark");
        document.body.classList.remove("light");
        switch (color) {
            
            case "dark":
                document.body.classList.add("dark");
                break;
        
            default:
                document.body.classList.add("light");
                break;
        }
    }
}

if(theme_mode)
{
    load_theme(theme_mode)
}
else
{
    load_theme("os_preference");
}
window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', event=>
    {
        if(localStorage.getItem("theme_mode")== "os_preference")
        {
            load_theme('os_preference');
        }
        
    }
)
dark_mode_button.onclick = ()=>{load_theme("dark_mode")};
light_mode_button.onclick = ()=>{load_theme ("light_mode")};
os_mode_button.onclick = ()=>{load_theme("os_preference")};


function dropFunct ()
{
    dropdown.classList.toggle('p-3');
    dropdown.classList.toggle('h-0');
    dropdown.classList.toggle('h-auto');
    
}


function menuFunctOpen ()
{
    sidebar.classList.remove('w-0');
    sidebar.classList.add('w-60');
    sidebar.classList.toggle('opened');
    header.classList.toggle("blur-sm");
    dashboard.classList.toggle("blur-sm");
}
function menuFunctExit ()
{
    sidebar.classList.remove('w-60');
    sidebar.classList.add('w-0');
    sidebar.classList.toggle('opened');
    dashboard.classList.toggle("blur-sm");
    header.classList.toggle("blur-sm");
    
}
function changeBellIcon()
{

    if(bell_toggle_val ==0)
    {
        for(var i = 0; i < 2; i++)
        {
            var test = bell_button[i];
            console.log(i);
            test.innerHTML = '<i data-feather="bell-off" class="inline-block stroke-[3px] size-5"></i>';

        }
        bell_toggle_val=1;
        feather.replace();


    }
    else if(bell_toggle_val == 1)
    {
        for(var i = 0; i < 2; i++)
            {
                var test = bell_button[i];
                console.log(i);
                test.innerHTML = '<i data-feather="bell" class="inline-block stroke-[3px] size-5"></i>';
    
            }
        bell_toggle_val = 0;
        feather.replace(); 
    }
}

bell_button[0].onclick = changeBellIcon;
bell_button[1].onclick = changeBellIcon;
menu_button.onclick = menuFunctOpen;
menu_exit_button.onclick = menuFunctExit;
dropdown_button.onclick =dropFunct;

window.addEventListener('click', function(e){
    if (!document.getElementById('sidebar').contains(e.target) && !menu_button.contains(e.target) && (window.innerWidth <= 786) && sidebar.classList.contains("w-60"))
        menuFunctExit();
    if (!document.getElementById('dropdown').contains(e.target) && !dropdown_button.contains(e.target) && (window.innerWidth <= 786) && dropdown.classList.contains("h-auto"))
        dropFunct();
})