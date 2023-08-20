/*** Menu toggle */
const links = document.getElementById("list-link");
var btnmenu = document.getElementById("menu").addEventListener("click",function toggle()
{

    if(links.className === "list active"){
        links.className = "list desactive"
    }else{
        links.className = "list active"
    }
});


/***
 * Pointer cursor
 */
function pointer(menu){
    menu.style.cursor = "pointer";
}