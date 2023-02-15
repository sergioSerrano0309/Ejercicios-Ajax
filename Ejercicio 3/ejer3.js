window.onload = function(){
    let xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function()
    {
        if(xmlhttp.readyState == 4 && xmlhttp.status == 200)
        {
            let selectPaises = document.getElementById("pais");
            let paises = xmlhttp.responseText;
            foreach(let pais of paises)
            {
                let option = createElement("option");
                selectPaises.appendChild(option)
            }
        }
    }

    xmlhttp.open("GET", "ejer3.php", true)
    xmlhttp.send();
}
    
function listadoCiudades()
{
    let selectCiudades = document.getElementById("ciutat")
    let option = document.createElement("option")
    option.innerHTML = "1"
    selectCiudades.appendChild(option)
}