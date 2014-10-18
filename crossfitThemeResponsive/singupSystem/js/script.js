$(document).ready(function() {
    var cellCounter = 2;
    /* BUTTON HANDLERS */
    $("#submit").on("click", function() {
        if (submitValidation()) {
            $("#response").text("הטופס מולא בהצלחה");
        } else {
            $("#response").text("קיימות שגיאות בטופס");
        }
    });
    $("#reset").on("click", function() {
        $("#mainTable").find("tr:gt(1)").remove();
        $("#mainTable").find("tr td input").val("");
        cellCounter = 2;
        console.log("cellCounter = " + cellCounter);
    });
    $("#appendRow").on("click", function() {
        var tableRow = '<tr><td><input type="text" /></td><td><input type="text" /></td><td><input type="text" /></td><td><p>' + cellCounter + '</p></td></tr>';
        $("#mainTable tr:last").after(tableRow);
        cellCounter++;
        console.log("cellCounter = " + cellCounter);
    });
    $("#removeRow").on("click", function() {
        if (cellCounter > 1) {
            $("#mainTable").find("tr:last").remove();
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

    /* FUNCTIONS AREA */
    function submitValidation() {
        var flag = true;
        var date = $("#datepicker").val();
        if ( !! date != false) {
            $("#mainTable tr").find("td input").each(function() {
                console.log($(this).val());
                if ($(this).val().length == 0) {
                    console.log("field is empty");
                    console.log("RETURNING FALSE");
                    flag = false;
                }
            });
        } else {
            flag = false;
        }
        return flag;
    }
});