//Getting Date values from date operators
var currentDate = new Date();  //2020, 2, 28, 9, 8, 33
var dayOfTheWeek = currentDate.getDay();
var presentDate = currentDate.getDate();
var MonthOfTheYear = currentDate.getMonth();
var presentYear = currentDate.getFullYear();
var presentHour = currentDate.getHours();
var minutes = currentDate.getMinutes();
var weekDays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
var Months = [' January ', ' February ', ' March ', ' April ', ' May ', ' June ', ' July ', ' August ', ' September ', ' October ', ' November ', ' December '];
//console.log(dayOfTheWeek);

//defining the function
function showDateAndTime() {
    var presentDay = weekDays[dayOfTheWeek];
    var presentMonth = Months[MonthOfTheYear];
    //attaching appropriate suffixes for each date
    if (presentDate > 3) {
        document.write('Today\'s date is ' + presentDay + ',' + presentDate + 'th' + presentMonth + presentYear);
    } else if (presentDate == 3) {
        document.write('Today\'s date is ' + presentDay + ',' + presentDate + 'rd' + presentMonth + presentYear);
    } else if (presentDate == 2) {
        document.write('Today\'s date is ' + presentDay + ',' + presentDate + 'nd' + presentMonth + presentYear);
    } else if (presentDate == 1) {
        document.write('Today\'s date is ' + presentDay + ',' + presentDate + 'st' + presentMonth + presentYear);
    }

    //Attaching appropriate 'AM' or 'PM' tags for each hour of the day converting 24 hours time to 12 hours time
    var updatedHour = presentHour - 12;
    if (presentHour > 12) {
        var updatedHour = presentHour - 12;
        if (minutes < 10) {
            document.write(' Current time is ' + updatedHour + ':' + '0' + minutes + 'PM');
        } else {
            document.write(' Current time is ' + updatedHour + ':' + minutes + 'PM');
        };
    } else if (presentHour < 12 && presentHour > 0) {
        if (minutes < 10) {
            document.write(' Current time is ' + presentHour + ':' + '0' + minutes + 'AM');
        } else {
            document.write(' Current time is ' + presentHour + ':' + minutes + 'AM');
        };

    } else if (presentHour == 0) {
        if (minutes < 10) {
            document.write(' Current time is ' + '12' + ':' + '0' + minutes + 'AM');
        } else {
            document.write(' Current time is ' + '12' + ':' + minutes + 'AM');
        };
    } else if (presentHour == 12) {
        if (minutes < 10) {
            document.write(' Current time is ' + presentHour + ':' + '0' + minutes + 'PM');
        } else {
            document.write(' Current time is ' + presentHour + ':' + minutes + 'PM');
        }

    }
};

//calling the function
showDateAndTime();