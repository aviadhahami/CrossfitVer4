$(document).ready(function() {
    var cellCounter = 2;
    /* BUTTON HANDLERS */
    $("#submit").on("click", function() {
        alert("SUBMITTED FORM");
    });
    $("#reset").on("click", function() {
        $("table").find("tr:gt(1)").remove();
        cellCounter = 2;
        console.log("cellCounter = " + cellCounter);
    });
    $("#appendRow").on("click", function() {
        var tableRow = '<tr><td><input type="text" /></td><td><input type="text" /></td><td><input type="text" /></td><td><p>' + cellCounter + '</p></td></tr>';
        $("table tr:last").after(tableRow);
        cellCounter++;
        console.log("cellCounter = " + cellCounter);
    });
    $("#removeRow").on("click", function() {
        if (cellCounter > 1) {
            $("table").find("tr:last").remove();
            cellCounter--;
        }
        console.log("cellCounter = " + cellCounter);
    });

    //DATE PICKER
    $(function() {
        $("#datepicker").datepicker({
            dateFormat: 'dd/mm/y',

        });
    });
});