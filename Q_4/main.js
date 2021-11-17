///creat table with JQuery

const personData = [
  {
    uid: 112233,
    firstName: "Amirhossein",
    lastName: "Kazemi",
    city: "Isfahan",
    personalCode: "2345672345",
    phoneNumber: "03111234234",
    position: "UI Designer",
  },
  {
    uid: 223344,
    firstName: "Ali",
    lastName: "Ahmadi",
    city: "Abhar",
    personalCode: "3345673232",
    phoneNumber: "04111334452",
    position: "Analyzer",
  },
  {
    uid: 334455,
    firstName: "Ali",
    lastName: "Ahmadi",
    city: "Rasht",
    personalCode: "9945643232",
    phoneNumber: "01131394855",
    position: "UI Designer",
  },
  {
    uid: 445566,
    firstName: "Shahriar",
    lastName: "Ahmadi Gol",
    city: "Mashad",
    personalCode: "5545689232",
    phoneNumber: "04121334415",
    position: "UI designer",
  },
  {
    uid: 556677,
    firstName: "Reza",
    lastName: "Rahmani",
    city: "Semnan",
    personalCode: "774565392",
    phoneNumber: "09331334225",
    position: "Analyzer",
  },
  {
    uid: 667788,
    firstName: "Mohammadhadi",
    lastName: "Soleimani",
    city: "Shiraz",
    personalCode: "7845482232",
    phoneNumber: "07771333455",
    position: "PHP Programmer",
  },
  {
    uid: 778899,
    firstName: "Mohsen",
    lastName: "Zare",
    city: "Zahedan",
    personalCode: "1145119212",
    phoneNumber: "01221399450",
    position: "UX Designer",
  },
  {
    uid: 889900,
    firstName: "Milad",
    lastName: "Rabani",
    city: "Qom",
    personalCode: "8845383233",
    phoneNumber: "08121320452",
    position: "Node Programmer",
  },
  {
    uid: 990011,
    firstName: "Mahdi",
    lastName: "Mohseni naseb",
    city: "Ahvaz",
    personalCode: "2242689035",
    phoneNumber: "02211783452",
    position: "UX Designer",
  },
  {
    uid: 113344,
    firstName: "Soheil",
    lastName: "Hossein",
    city: "Arak",
    personalCode: "1145129244",
    phoneNumber: "01221334665",
    position: "Java Programmer",
  },
];

///creat table with JQuery

$(document).ready(function () {
  $(function () {
    //table header
    var tableDate = new Array();
    tableDate.push([
      "Row",
      "uid",
      "First Name",
      "Last Name",
      "City",
      "Personal Code",
      "Phone Number",
      "position",
    ]);
    //table body
    $.each(personData, function (index, value) {
      tableDate.push([
        index + 1,
        value.uid,
        value.firstName,
        value.lastName,
        value.city,
        value.personalCode,
        value.phoneNumber,
        value.position,
      ]);
    });
    //Create a HTML Table element.
    var table = $("<table />");
    table[0].border = "1";

    //Get the count of columns.
    var columnCount = tableDate[0].length;

    //Add the header row.
    var row = $(table[0].insertRow(-1));
    for (var i = 0; i < columnCount; i++) {
      var headerCell = $("<th />");
      headerCell.html(tableDate[0][i]);
      row.append(headerCell);
    }

    //Add the data rows.
    for (var i = 1; i < tableDate.length; i++) {
      row = $(table[0].insertRow(-1));
      for (var j = 0; j < columnCount; j++) {
        var cell = $("<td />");
        cell.html(tableDate[i][j]);
        row.append(cell);
      }
    }

    var dvTable = $("#dvTable");
    dvTable.html("");
    dvTable.append(table);
  });
});


