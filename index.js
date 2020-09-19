
function setDate() {
    var date = new Date();
    var day = date.getDate();
    var month = date.getMonth() + 1;
    var year = date.getFullYear();

    if (month < 10) {
        month = "0" + month;
    }
    if (day < 10) {
        day = "0" + day;
    }

    const today = year + "-" + month + "-" + day;
    document.getElementById('theDate').value = today;
}

function getFrom(document,element1,element2) {
    let form = document.forms.form; // <form name="my"> element
    const elem1 = form.elements.calendar; // <input name="one"> element
    const elem2 = form.elements.text; // <input name="one"> element
    alert(elem1.value); // 1
}