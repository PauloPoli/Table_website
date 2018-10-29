
$.ajax({
    url: 'https://jsonplaceholder.typicode.com/posts',
    type: "get",
    dataType: "json",

    success: function(data) {
        drawTable(data);
    }
});

function drawTable(data) {
    for (var i = 0; i < data.length; i++) {
        drawRow(data[i]);
    }
}

function drawRow(rowData) {
    var rowid = "row-"+rowData.id;
    var row = $("<tr id="+rowid+" />")
    $(".table").append(row);
    row.append($("<td class='aligned'>" + rowData.id + "</td>"));
    row.append($("<td>" + rowData.title + "</td>"));
    row.append($("<td class='aligned'>" + rowData.userId + "</td>"));
    row.append($("<td>" + rowData.body + "</td>"));
    document.getElementById(rowid).addEventListener("click", function(){location.href="details.html?id=" +rowData.id})
}
