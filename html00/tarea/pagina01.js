function loadXMLDoc() {
  const xhttp = new XMLHttpRequest();
  xhttp.onload = function () {
    const xmlDoc = xhttp.responseXML;
    const alumnos = xmlDoc.getElementsByTagName("alumno");
    mostrarAlumnos(alumnos);
  };
  xhttp.open("GET", "alumnosM.xml");
  xhttp.send();
}

function mostrarAlumnos(alumnos) {
  let table = "<tr><th>Nombre</th><th>Correo</th><th>Nacimiento</th></tr>";
  for (let i = 0; i < alumnos.length; i++) {
    const alumno = alumnos[i];

    const nombre = alumno.getElementsByTagName("nombre")[0]?.textContent || "";
    const correo = alumno.getAttribute("correo") || "";
    const nacimiento = alumno.getElementsByTagName("nacimiento")[0]?.textContent || "";

    table += `<tr>
                <td>${nombre}</td>
                <td>${correo}</td>
                <td>${nacimiento}</td>
              </tr>`;
  }
  document.getElementById("demo").innerHTML = table;
}

document.getElementById("btnCargar").addEventListener("click", loadXMLDoc);