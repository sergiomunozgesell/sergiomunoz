const links = document.getElementById("list-link");
const btnmenu = document.getElementById("menu").addEventListener("click",function toggle()
{

    if(links.className === "list active"){
        links.className = "list desactive"
    }else{
        links.className = "list active"
    }
});