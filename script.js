function createTable() {
  const rn = parseInt(prompt("Input number of rows"));
  const cn = parseInt(prompt("Input number of columns"));

  if (!isNaN(rn) && rn > 0 && !isNaN(cn) && cn > 0) {
    // Optional: Remove any existing table
    const oldTable = document.getElementById("myTable");
    if (oldTable) oldTable.remove();

    const table = document.createElement("table");
    table.id = "myTable";
    table.border = "1";

    for (let i = 0; i < rn; i++) {
      const row = document.createElement("tr");

      for (let j = 0; j < cn; j++) {
        const cell = document.createElement("td");
        cell.textContent = `Row-${i} Column-${j}`;
        row.appendChild(cell);
      }

      table.appendChild(row);
    }

    document.body.appendChild(table);
  } else {
    alert("Please enter valid positive numbers.");
  }
}
