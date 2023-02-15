function buscarPaises() {
  
    let busqueda = document.getElementById("pais").value;
      
      let llamada = new XMLHttpRequest();
      let url = "ejer1.php"; 
      let params = "?busqueda=" + busqueda;

      llamada.onreadystatechange = function () 
      {
      if (this.readyState === 4 && this.status === 200) 
      {
        let nombres = JSON.parse(this.responseText);
        let p = document.getElementById("paises");
        p.innerHTML = "";
        for (let nombre of nombres) 
        {
          let text = document.createTextNode(nombre);
          p.appendChild(text);
          p.innerHTML += ", "
        }
      }
    }

    llamada.open("GET", url+params, true);
    llamada.send(params);   
}