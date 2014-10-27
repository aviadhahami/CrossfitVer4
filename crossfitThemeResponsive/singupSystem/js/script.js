$(document).ready(function() {


    var myDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    var today = new Date();
    today = today.getDay();
    var todayName = myDays[today];

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
        var tableRow = '<tr><td><input type="text" /></td><td><input type="text" /></td><td><p>' + cellCounter + '</p></td></tr>';
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
            onClose: function() {
                appenderByDate($(this).val());
            }

        });

    });

    //DAY SELECTION HANDLER //
    $('#dayPicker').on('change', function(e) {
        var optionSelected = $("option:selected", this);
        var valueSelected = this.value;
        console.log("dayPicker handler");
        getDefaultScheduleByDay(valueSelected);
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




    //POLL DATA INJETION
    //insert the daily sched
    function appenderByDate(date) {
        date = date.replace(/\//g, '');
        var url = "scheduleData/" + date + "-Override.xml";
        console.log(url);
        $("#response").text("");
        $("#poll").empty();

        $.ajax({

            type: "GET",
            url: url,
            datatype: "xml",
            statusCode: {
                404: function() {

                    $("#response").text("אין קובץ העוקף את הלוז המקורי, מציג את ברירת המחדל להיום");
                    console.log("404 code handler");
                    getDefaultScheduleByDay(todayName);
                }
            },
            success: function(xml) {

                console.log(xml);
                $(xml).find("data option").each(function() {
                    var val = $(this).find("value").text();
                    var rawData = $(this).find("rawData").text();
                    var option = "<option val=" + val + ">" + rawData + "</option>";
                    console.log(option);
                    //option.appendTo("#poll");
                    $("#poll").append(option);
                });

            },
            error: function(err) {

                console.error('ERROR');
                console.log(err.statusText);
            }
        });
    }



    function getDefaultScheduleByDay(day) {
        var url = "scheduleData/" + day + ".xml";
        $("#response").text("");
        $("#poll").empty();

        $.ajax({
            type: "GET",
            url: url,
            datatype: "xml",
            statusCode: {
                404: function() {

                    var outputStr = "חלה שגיאת 404, קובץ לא נמצא";
                    $("#response").text(outputStr);
                }
            },
            success: function(xml) {

                cellCounter = 2;
                console.log(xml);
                //Append to <select>
                $(xml).find("data option").each(function() {
                    var val = $(this).find("value").text();
                    var rawData = $(this).find("rawData").text();
                    var option = "<option val=" + val + ">" + rawData + "</option>";
                    console.log(option);
                    //option.appendTo("#poll");
                    $("#poll").append(option);
                });

                //Append to table
                //$('#mainTable tr:gt(1)').empty();
                $(xml).find("data option").each(function() {
                    var val = $(this).find("value").text();
                    var rawData = $(this).find("rawData").text();
                    var newRow = "<tr>";
                    var valueTableCell = "<td><input type=text value='" + val + "'></input></td>";
                    var rawDataTableCell = "<td><input type=text value='" + rawData + "'></input></td>";
                    var counterTableCell = "<td>" + cellCounter + "</td>";
                    newRow = newRow + valueTableCell + rawDataTableCell + counterTableCell;
                    newRow = newRow + "</tr>";
                    $("#mainTable #tableHeder").after(newRow);
                    cellCounter++;
                });

            },
            error: function(err) {

                console.error('ERROR');
                console.log(err.statusText);
            }
        });

    }

});
