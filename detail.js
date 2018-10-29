$.ajax({
    url: getEndpointLink(),
    type: "get",
    dataType: "json",

    success: function(data) {
        drawRow(data);
    }
});

function getEndpointLink(){
	return "https://jsonplaceholder.typicode.com/posts/" + getParameterByName("id", location.href);
}


function getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, '\\$&');
    var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, ' '));
}


function drawRow(rowData) {

    var row = $("<tr />")
    $(".table").append(row);
    row.append($("<td class='aligned'>" + rowData.id + "</td>"));
    row.append($("<td>" + rowData.title + "</td>"));
    row.append($("<td class='aligned'>" + rowData.userId + "</td>"));
    row.append($("<td>" + rowData.body + "</td>"));
}
