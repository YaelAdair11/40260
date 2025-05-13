const loadXMLDoc = async () => {
  try {
    const response = await fetch('cd_catalog.xml');
    const text = await response.text();
    const parser = new DOMParser();
    const xmlDoc = parser.parseFromString(text, "application/xml");
    const cds = xmlDoc.getElementsByTagName("CD");
    mostrarTabla(cds);
  } catch (error) {
    console.error('Error loading XML:', error);
  }
};

// Función para mostrar los datos de los CDs
const mostrarTabla = (cds) => {
  let table = "<tr><th>Artist</th><th>Title</th></tr>";
  Array.from(cds).forEach(cd => {
    const artist = cd.getElementsByTagName("ARTIST")[0]?.textContent || "N/A";
    const title = cd.getElementsByTagName("TITLE")[0]?.textContent || "N/A";
    table += `<tr><td>${artist}</td><td>${title}</td></tr>`;
  });
  document.getElementById("demo").innerHTML = table;
};

// Evento del botón
document.getElementById("btnCargar").addEventListener("click", loadXMLDoc);