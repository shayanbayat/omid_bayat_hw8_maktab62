let personData = [
  {
    uid: 112233,
    firstName: "amirhosein",
    lastName: "kazemi",
    city: "isfahan",
    postalCode: 2345672345,
    phoneNumber: "03111234234",
    position: "ui designer",
  },
  {
    uid: 223344,
    firstName: "ali",
    lastName: "ahmadi",
    city: "abhar",
    postalCode: 334563232,
    phoneNumber: "04111334452",
    position: "analyzer",
  },
  {
    uid: 334455,
    firstName: "ali",
    lastName: "ahmadi",
    city: "rasht",
    postalCode: 9945643232,
    phoneNumber: "01131394855",
    position: "ui designer",
  },
  {
    uid: 445566,
    firstName: "shahriar",
    lastName: "ahmadi gol",
    city: "mashhad",
    postalCode: 5545689232,
    phoneNumber: "04121334415",
    position: "ui designer",
  },
  {
    uid: 556677,
    firstName: "reza",
    lastName: "rahmani",
    city: "semnan",
    postalCode: 774565392,
    phoneNumber: "09331334225",
    position: "analyzer",
  },
  {
    uid: 667788,
    firstName: "mohammadhadi",
    lastName: "soleimani",
    city: "shiraz",
    postalCode: 7845482232,
    phoneNumber: "07771333455",
    position: "php programmer",
  },
  {
    uid: 778899,
    firstName: "mohsen",
    lastName: "zare",
    city: "zahedan",
    postalCode: 1145119212,
    phoneNumber: "01221399450",
    position: "ux designer",
  },
  {
    uid: 889900,
    firstName: "milad",
    lastName: "rabbani",
    city: "qom",
    postalCode: 8845383233,
    phoneNumber: "08121320452",
    position: "node programmer",
  },
  {
    uid: 990011,
    firstName: "mahdi",
    lastName: "mohseni nasab",
    city: "ahvaz",
    postalCode: 2242689035,
    phoneNumber: "02211783452",
    position: "ux designer",
  },
  {
    uid: 113344,
    firstName: "soheil",
    lastName: "hosein",
    city: "arak",
    postalCode: 1145129244,
    phoneNumber: "01221334665",
    position: "java programmer",
  },
];

let table = document.createElement("table");
let thead = document.createElement("thead");
let tbody = document.createElement("tbody");
let div = document.createElement("div");

table.appendChild(thead);
table.appendChild(tbody);
tbody.setAttribute("id", "tableData");
document.getElementsByTagName("body")[0].appendChild(table);
document.getElementsByTagName("body")[0].appendChild(div);
div.setAttribute("id", "tab2");
div.setAttribute("class", "tab tab-2");
table.setAttribute("id", "show");
// Creating and adding data to first row of the table

let row_1 = document.createElement("tr");
let heading_1 = document.createElement("th");
let heading_2 = document.createElement("th");
let heading_3 = document.createElement("th");
let heading_4 = document.createElement("th");
let heading_5 = document.createElement("th");
let heading_6 = document.createElement("th");
let heading_7 = document.createElement("th");
let heading_8 = document.createElement("th");

heading_2.setAttribute("id", "sortUID");

heading_1.textContent = "Row";
heading_2.textContent = "Uid";
heading_3.textContent = "First Name";
heading_4.textContent = "Last Name";
heading_5.textContent = "City";
heading_6.textContent = "Postal Code";
heading_7.textContent = "Phone number";
heading_8.textContent = "Position";

row_1.appendChild(heading_1);
row_1.appendChild(heading_2);
row_1.appendChild(heading_3);
row_1.appendChild(heading_4);
row_1.appendChild(heading_5);
row_1.appendChild(heading_6);
row_1.appendChild(heading_7);
row_1.appendChild(heading_8);
thead.appendChild(row_1);

function loadTableData(tableData) {
  const tableBody = document.getElementById("tableData");
  let dateHtml = "";

  for (let i = 0; i < personData.length; i++) {
    dateHtml += `<tr><td>${i + 1}</td>
         <td>${personData[i].uid}</td>
         <td>${personData[i].firstName}</td>
         <td>${personData[i].lastName}</td>
         <td>${personData[i].city}</td>
         <td>${personData[i].postalCode}</td>
         <td>${personData[i].phoneNumber}</td>
         <td>${personData[i].position}</td></tr>`;
  }
  tableBody.innerHTML = dateHtml;
}

loadTableData(personData);

const panel = document.getElementById("tab2");

let dateHtmlDiv = `
  Row:<input type="number" name="row" id="row">
              UID :<input type="number" name="UID" id="UID">
              First Name :<input type="text" name="fname" id="fname">
              Last Name :<input type="text" name="lname" id="lname">
              City:<input type="text" name="city" id="city">
              Postal Code :<input type="number" name="postalcode" id="code">
              Phone number:<input type="number" name="phonenumber" id="number">
              Position :<input type="text" name="Position" id="pos">
              <div>
                  <button onclick="addHtmlTableRow();">Add</button>
                  <button onclick="editHtmlTbleSelectedRow();">Edit</button>
                  <button onclick="removeSelectedRow();">Remove</button>
              </div>
          </div>`;
panel.innerHTML = dateHtmlDiv;

var rIndex,
  table3 = document.getElementById("table");

// check the empty input

function checkEmptyInput2() {
  var isEmpty2 = false,
    Row = document.getElementById("row").value;
  (UID = document.getElementById("UID").value),
    (fname = document.getElementById("fname").value),
    (lname = document.getElementById("lname").value),
    (city = document.getElementById("city").value),
    (postalCode = document.getElementById("code").value),
    (phoneNumber = document.getElementById("number").value),
    (Position = document.getElementById("pos").value);

  let targetPerson = personData.find((el) => el.uid === Number(UID));

  if (fname === "") {
    alert("First Name Connot Be Empty");
    isEmpty2 = true;
  } else if (lname === "") {
    alert("Last Name Connot Be Empty");
    isEmpty2 = true;
  } else if (UID === "") {
    alert("UID Connot Be Empty");
    isEmpty2 = true;
  } else if (city === "") {
    alert("City Connot Be Empty");
    isEmpty2 = true;
  } else if (postalCode === "") {
    alert("Postal Code Connot Be Empty");
    isEmpty2 = true;
  } else if (phoneNumber === "") {
    alert("Phone Number Connot Be Empty");
    isEmpty2 = true;
  } else if (Position === "") {
    alert("Position Connot Be Empty");
    isEmpty2 = true;
  } else if (Row === "") {
    alert("First Name Connot Be Empty");
    isEmpty2 = true;
  } else if (targetPerson) {
    alert("You can not select duplicates");
    isEmpty2 = true;
  }
  return isEmpty2;
}

// add Row
function addHtmlTableRow() {
  // get the table by id
  // create a new row and cells
  // get value from input text
  // set the values into row cell's
  if (!checkEmptyInput2()) {
    var newRow = table.insertRow(table.length),
      cell = newRow.insertCell(0),
      cell1 = newRow.insertCell(1),
      cell2 = newRow.insertCell(2),
      cell3 = newRow.insertCell(3),
      cell4 = newRow.insertCell(4),
      cell5 = newRow.insertCell(5),
      cell6 = newRow.insertCell(6),
      cell7 = newRow.insertCell(7),
      row = document.getElementById("row").value,
      UID = document.getElementById("UID").value,
      fname = document.getElementById("fname").value,
      lname = document.getElementById("lname").value,
      city = document.getElementById("city").value,
      postalCode = document.getElementById("code").value,
      phoneNumber = document.getElementById("number").value,
      Position = document.getElementById("pos").value;

    console.log(newRow);
    cell.innerHTML = row;
    cell1.innerHTML = UID;
    cell2.innerHTML = fname;
    cell3.innerHTML = lname;
    cell4.innerHTML = city;
    cell5.innerHTML = postalCode;
    cell6.innerHTML = phoneNumber;
    cell7.innerHTML = Position;
    // call the function to set the event to the new row
    selectedRowToInput();
  }
}

function checkEmptyInput() {
  var isEmpty = false,
    Row = document.getElementById("row").value;
  (UID = document.getElementById("UID").value),
    (fname = document.getElementById("fname").value),
    (lname = document.getElementById("lname").value),
    (city = document.getElementById("city").value),
    (postalCode = document.getElementById("code").value),
    (phoneNumber = document.getElementById("number").value),
    (Position = document.getElementById("pos").value);

  //   let targetPerson = personData.find((el) => el.uid === Number(UID));

  if (fname === "") {
    alert("First Name Connot Be Empty");
    isEmpty = true;
  } else if (lname === "") {
    alert("Last Name Connot Be Empty");
    isEmpty = true;
  } else if (UID === "") {
    alert("UID Connot Be Empty");
    isEmpty = true;
  } else if (city === "") {
    alert("City Connot Be Empty");
    isEmpty = true;
  } else if (postalCode === "") {
    alert("Postal Code Connot Be Empty");
    isEmpty = true;
  } else if (phoneNumber === "") {
    alert("Phone Number Connot Be Empty");
    isEmpty = true;
  } else if (Position === "") {
    alert("Position Connot Be Empty");
    isEmpty = true;
  } else if (Row === "") {
    alert("First Name Connot Be Empty");
    isEmpty = true;
    //   } else if (targetPerson) {
    //     alert("You can not select duplicates");
    //     isEmpty = true;
  }

  return isEmpty;
}

// display selected row data into input text
function selectedRowToInput() {
  for (var i = 1; i < table.rows.length; i++) {
    table.rows[i].onclick = function () {
      // get the seected row index
      rIndex = this.rowIndex;
      document.getElementById("row").value = this.cells[0].innerHTML;
      document.getElementById("UID").value = this.cells[1].innerHTML;
      document.getElementById("fname").value = this.cells[2].innerHTML;
      document.getElementById("lname").value = this.cells[3].innerHTML;
      document.getElementById("city").value = this.cells[4].innerHTML;
      document.getElementById("code").value = this.cells[5].innerHTML;
      document.getElementById("number").value = this.cells[6].innerHTML;
      document.getElementById("pos").value = this.cells[7].innerHTML;
    };
  }
}
selectedRowToInput();

function editHtmlTbleSelectedRow() {
  var age = document.getElementById("UID").value,
    fname = document.getElementById("fname").value,
    lname = document.getElementById("lname").value,
    city = document.getElementById("city").value,
    postalCode = document.getElementById("code").value,
    phoneNumber = document.getElementById("number").value,
    Position = document.getElementById("pos").value;
  if (!checkEmptyInput()) {
    table.rows[rIndex].cells[1].innerHTML = age;
    table.rows[rIndex].cells[2].innerHTML = fname;
    table.rows[rIndex].cells[3].innerHTML = lname;
    table.rows[rIndex].cells[4].innerHTML = city;
    table.rows[rIndex].cells[5].innerHTML = postalCode;
    table.rows[rIndex].cells[6].innerHTML = phoneNumber;
    table.rows[rIndex].cells[7].innerHTML = Position;
  }
}

function removeSelectedRow() {
  table.deleteRow(rIndex);
  // clear input text
  document.getElementById("UID").value = "";
  document.getElementById("fname").value = "";
  document.getElementById("lname").value = "";
  document.getElementById("city").value = "";
  document.getElementById("code").value = "";
  document.getElementById("number").value = "";
  document.getElementById("pos").value = "";
}

document.getElementById("tab2").style.display = "none";

document.getElementById("show").onclick = function () {
  document.getElementById("tab2").style.display = "block";
};

document.getElementById("sortUID").onclick = function sortTable() {
  var table, rows, switching, i, x, y, shouldSwitch;
  table = document.getElementById("show");
  switching = true;

  while (switching) {
    switching = false;
    rows = table.rows;

    for (i = 1; i < rows.length - 1; i++) {
      shouldSwitch = false;

      x = rows[i].getElementsByTagName("td")[1];
      y = rows[i + 1].getElementsByTagName("td")[1];

      if (Number(x.innerHTML) > Number(y.innerHTML)) {
        shouldSwitch = true;
        break;
      }
    }
    if (shouldSwitch) {
      rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
      switching = true;
    }
  }
};
