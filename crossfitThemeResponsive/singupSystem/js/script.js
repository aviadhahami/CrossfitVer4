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
            onClose: function() {
                appender($(this).val());
            }

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




    //POLL DATA INJETION
    //insert the daily sched
    function appender(date) {
        date = date.replace(/\//g, '');
        var url = "overrides/" + date + "-Override.xml";
        console.log(url);
        $("#response").text("");
        $.ajax({
            type: "GET",
            url: url,
            datatype: "xml",
            statusCode: {
                404: function() {
                    $("#response").text("אין קובץ העוקף את הלו''ז המקורי");
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


    //** LEGACY CODE **//
    function insertSelectOptions(day) {
        switch (day) {
            case 1:
                {
                    appendSun();
                    break;
                }
            case 2:
                {
                    appendMon();
                    break;
                }
            case 3:
                {
                    appendTue();
                    break;
                }
            case 4:
                {
                    appendWed();
                    break;
                }
            case 5:
                {
                    appendThu();
                    break;
                }
            case 6:
                {
                    appendFri();
                    break;
                }
            case 7:
                {
                    appendSat();
                    break;
                }


        }
    }

    function appendSun() {
        $('#poll')
            .append($("<option></option>")
                .attr("value", "wod1")
                .text("06:00 WOD"));
        $('#poll')
            .append($("<option></option>")
                .attr("value", "open1")
                .text("06:00-11:00 OPEN GYM"));
        $('#poll')
            .append($("<option></option>")
                .attr("value", "open2")
                .text("15:00-21:30 OPEN GYM"));
        $('#poll')
            .append($("<option></option>")
                .attr("value", "wod2")
                .text("17:30 WOD"));
        $('#poll')
            .append($("<option></option>")
                .attr("value", "wod3")
                .text("18:30 WOD"));
        $('#poll')
            .append($("<option></option>")
                .attr("value", "wod4")
                .text("19:30 WOD"));
        $('#poll')
            .append($("<option></option>")
                .attr("value", "wod5")
                .text("20:30 WOD"));
    }

    function appendMon() {

        $('#poll')
            .append($("<option></option>")
                .attr("value", "open1")
                .text("06:00-11:00 OPEN GYM"));
        $('#poll')
            .append($("<option></option>")
                .attr("value", "wod1")
                .text("09:00 WOD"));
        $('#poll')
            .append($("<option></option>")
                .attr("value", "open2")
                .text("15:00-21:30 OPEN GYM"));
        $('#poll')
            .append($("<option></option>")
                .attr("value", "wod2")
                .text("17:30 WOD"));
        $('#poll')
            .append($("<option></option>")
                .attr("value", "wod3")
                .text("18:30 WOD"));
        $('#poll')
            .append($("<option></option>")
                .attr("value", "wod4")
                .text("19:30 ENDURANCE"));
        $('#poll')
            .append($("<option></option>")
                .attr("value", "wod5")
                .text("20:30 WOD"));
    }

    function appendTue() {
        $('#poll')
            .append($("<option></option>")
                .attr("value", "wod1")
                .text("06:00 WOD"));
        $('#poll')
            .append($("<option></option>")
                .attr("value", "open1")
                .text("06:00-11:00 OPEN GYM"));
        $('#poll')
            .append($("<option></option>")
                .attr("value", "open2")
                .text("15:00-21:30 OPEN GYM"));
        $('#poll')
            .append($("<option></option>")
                .attr("value", "wod2")
                .text("17:30 WOD"));
        $('#poll')
            .append($("<option></option>")
                .attr("value", "wod3")
                .text("18:30 WOD"));
        $('#poll')
            .append($("<option></option>")
                .attr("value", "wod4")
                .text("19:30 WOD"));
        $('#poll')
            .append($("<option></option>")
                .attr("value", "wod5")
                .text("20:30 WOD"));
    }

    function appendWed() {

        $('#poll')
            .append($("<option></option>")
                .attr("value", "open1")
                .text("06:00-11:00 OPEN GYM"));
        $('#poll')
            .append($("<option></option>")
                .attr("value", "wod1")
                .text("09:00 WOD"));
        $('#poll')
            .append($("<option></option>")
                .attr("value", "open2")
                .text("15:00-21:30 OPEN GYM"));
        $('#poll')
            .append($("<option></option>")
                .attr("value", "wod2")
                .text("17:30 WOD"));
        $('#poll')
            .append($("<option></option>")
                .attr("value", "wod3")
                .text("18:30 WOD"));
        $('#poll')
            .append($("<option></option>")
                .attr("value", "wod4")
                .text("19:30 WOD"));
        $('#poll')
            .append($("<option></option>")
                .attr("value", "wod5")
                .text("20:30 Mobility"));
    }

    function appendThu() {
        $('#poll')
            .append($("<option></option>")
                .attr("value", "wod1")
                .text("06:00 WOD"));
        $('#poll')
            .append($("<option></option>")
                .attr("value", "open1")
                .text("06:00-11:00 OPEN GYM"));
        $('#poll')
            .append($("<option></option>")
                .attr("value", "open2")
                .text("15:00-21:30 OPEN GYM"));
        $('#poll')
            .append($("<option></option>")
                .attr("value", "wod2")
                .text("17:30 WOD"));
        $('#poll')
            .append($("<option></option>")
                .attr("value", "wod3")
                .text("18:30 WOD"));
        $('#poll')
            .append($("<option></option>")
                .attr("value", "wod4")
                .text("19:30 ENDURANCE"));
        $('#poll')
            .append($("<option></option>")
                .attr("value", "wod5")
                .text("20:30 RX CLUB"));
    }

    function appendFri() {

        $('#poll')
            .append($("<option></option>")
                .attr("value", "open1")
                .text("08:00-14:00 OPEN GYM"));
        $('#poll')
            .append($("<option></option>")
                .attr("value", "wod2")
                .text("11:00 WOD"));
        $('#poll')
            .append($("<option></option>")
                .attr("value", "wod3")
                .text("12:00 WOD"));
        $('#poll')
            .append($("<option></option>")
                .attr("value", "wod4")
                .text("13:00 WOD"));

    }

    function appendSat() {
        $('#poll')
            .append($("<option></option>")
                .attr("value", "wod1")
                .text("10:00 WOD"));
        $('#poll')
            .append($("<option></option>")
                .attr("value", "open1")
                .text("10:00-12:00 OPEN GYM"));
        $('#poll')
            .append($("<option></option>")
                .attr("value", "open2")
                .text("19:00-21:00 OPEN GYM"));
        $('#poll')
            .append($("<option></option>")
                .attr("value", "wod2")
                .text("19:00 WOD"));
        $('#poll')
            .append($("<option></option>")
                .attr("value", "wod3")
                .text("20:00 WOD"));

    }

    //DONE WITH THE OPTIONS INJECTIONS

});