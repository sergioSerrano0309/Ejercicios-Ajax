window.onload = function(){
    let selectPaises = document.getElementById("pais");
    selectPaises.addEventListener("change", listadoCiudades);
    let selectCiudades = document.getElementById("ciutat");
    selectCiudades.addEventListener("change", info)
    let xmlhttp = new XMLHttpRequest();

    xmlhttp.onreadystatechange = function()
    {
        if(xmlhttp.readyState == 4 && xmlhttp.status == 200)
        {
            let selectPaises = document.getElementById("pais");
            let paises = xmlhttp.responseText;
            let listaPaises = paises.split(",");
           
            
            for(let pais of listaPaises)
            {
                let codigo = pais.split("/");
                let option = document.createElement("option");
                option.value=codigo[1];
                option.innerHTML = codigo[0];
                selectPaises.appendChild(option)
            }
        }
    }
    
    xmlhttp.open("GET", "ejer3_paises.php", true)
    xmlhttp.send();
}

function listadoCiudades()
{
    let selectCiudades = document.getElementById("ciutat")
    let option = document.createElement("option")

    let xmlhttp = new XMLHttpRequest()

    xmlhttp.onreadystatechange = function()
    {
        if(xmlhttp.readyState == 4 && xmlhttp.status == 200)
        {
            
            let ciudades = xmlhttp.responseText;
            let listaCiudades = ciudades.split(",")
            for(let ciudad of listaCiudades)
            {
                let option = document.createElement("option");
                option.innerHTML = ciudad;
                selectCiudades.appendChild(option)
            }
        }
    }

    xmlhttp.open("GET", "ejer3_ciudades.php?pais="+pais.value, true)
    xmlhttp.send();

    selectCiudades.appendChild(option)
}

function info()
{

}