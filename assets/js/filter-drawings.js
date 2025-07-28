function searchTable() {
    var input, filter, table, tr, td, i, textValue;
    input = document.getElementById("myInput");
    filter = input.value.toLowerCase();
    table = document.getElementById("searchtable");
    tr = table.getElementsByTagName("tr");
    for(i = 0; i < tr.length; i++) {
        var rowContent = tr[i].textContent;
        rowContent = rowContent.replace(/[\s]+/g, ' ');
        console.log(rowContent);

        if (rowContent) {
            if(rowContent.toLowerCase().includes(filter)) {
                tr[i].style.display = "";
            } else {
                tr[i].style.display = "none";
            }
        }
    }
}