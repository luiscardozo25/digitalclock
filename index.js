showTime();
function showTime() {
    let date = new Date();
    let h = date.getHours();
    let m = date.getMinutes();
    let s = date.getSeconds();
    let session = 'AM';
    let dd = date.getDate();
    let mm = date.getMonth();
    let yyyy = date.getFullYear();

    //Set time format to 24H
    if (h >= 12) {
        session = 'PM';
    }

    if (h == 0) {
        h = 24;
    }

    if (h > 24) {
        h = h-24;
    }

    //Hour formatting
    if (h < 10) {
        h = "0" + h;
    } 

    if (m < 10) {
        m = "0" + m;
    } 

    if (s < 10) {
        s = "0" + s;
    } 

    //Date formatting
    if (dd < 10) {
        dd = "0" + dd;
    } 

    if (mm < 10) {
        mm = "0" + mm;
    } 

    mm = date.toLocaleString('default', {
        month: 'long',
    });

    let time = h + ':' + m + ':' + s + " " + session + " " + "|" + " " + mm + " " + dd + "," + " " + yyyy;

    $('#digitalclock').html(time);
    setTimeout(showTime, 1000);
}