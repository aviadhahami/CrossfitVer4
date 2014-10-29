$(document).ready(function() {

    $("#datepicker").datepicker({
        dateFormat: "dd-mm-y"

    });
    //APPEND A LOT OF ROWS
    for (var i = 0; i < 20; i++) {
        $("#mainTable tbody").append("<tr><td><input type='text' name='limit" + i + "'></td><td><input type='text' name='wod" + i + "'></td></tr>");
    }

    //SHOW VALUES FROM INPUT
    $("#submit").on("click", function() {
        $("#mainTable tbody tr td input").each(function() {
            //if value is not empty
            if ( !! $(this).val()) {
                console.log($(this).val() + " and " + $(this).attr("name"));
            }

        });
    });



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
