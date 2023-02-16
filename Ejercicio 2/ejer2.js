window.onload = function()
{
    let letra = document.getElementById("letra")
    letra.addEventListener("change", buscarPorLetra)
}

function buscarPorLetra()
{
    let letra = document.getElementById("letra").value

    let llamada = new XMLHttpRequest()
    let url = "ejer2.php"
    let parametros = "?letra="+letra

    llamada.onreadystatechange = function () 
    {
        if (this.readyState === 4 && this.status === 200) 
        {
            if(!document.getElementById("tabla"))
            {
                
                let paises = JSON.parse(this.responseText);
                let table = document.createElement("table");
                table.id = "tabla";
                let th = document.createElement("th");
                th.innerHTML = "Països";
                table.appendChild(th);
                for (let pais of paises) 
                {
                    
                    let td = document.createElement("td");
                    let tr = document.createElement("tr");
                    
                    td.innerHTML = pais;
                    tr.appendChild(td);
                    table.appendChild(tr);
                    document.body.appendChild(table);
                    
                } 

            }
            else
            {
                let tabla = document.getElementById("tabla");
                document.body.removeChild(tabla);
                let paises = JSON.parse(this.responseText);
                let table = document.createElement("table");
                table.id = "tabla";
                let th = document.createElement("th");
                th.innerHTML = "Països";
                table.appendChild(th);
                for (let pais of paises) 
                {
                    
                    let td = document.createElement("td");
                    let tr = document.createElement("tr");
                    
                    td.innerHTML = pais;
                    tr.appendChild(td);
                    table.appendChild(tr);
                    document.body.appendChild(table);
                    
                }
            }
        }
    }

    llamada.open("GET", url+parametros, true)
    llamada.send(parametros)

    
}