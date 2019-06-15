function getFilterValue(query) {
    formData = ['startDate', 'endDate', 'teacher', 'room', 'class', 'subject'];
    if (!formData.includes(query)) return console.error(`Invalid query parameter: ${query}`);

    formData = $('#schedule_filter').serializeArray()
    let data = "";

    for (let i = 0; i < this.formData.length; i++) {
        if (this.formData[i].name == query) {
            data = this.formData[i].value;
            break;
        }
    }

    return data;
}

function getOptions(useDefault = false) {
    let options = {
        dateStart: getFilterValue('startDate'),
        dateEnd: getFilterValue('endDate'),
        classes: getFilterValue('class'),
        subjects: getFilterValue('subject'),
        teachers: getFilterValue('teacher'),
        rooms: getFilterValue('room')
    }

    options.checked = options.dateStart != "" || options.dateEnd != "";

    if (useDefault) {
        options.subjects = localStorage.getItem('subjects');
        options.classes = localStorage.getItem('classes');

        $('#subjects').val(options.subjects.split('-'));
        $('#subjects').trigger('chosen:updated');
        $('#classes').val(options.subjects.split('-'));
        $('#classes').trigger('chosen:updated');
    }

    localStorage.setItem('subjects', options.subjects);
    localStorage.setItem('classes', options.classes);

    return options
}

function getSchedule() {
    $.ajax
        ({
            type: "POST",
            url: '/schedule',
            dataType: 'html',
            data: getOptions(),
            success: (result) => {
                createNotification('success', 'Tunniplaan edukalt laetud');
                $('#scheduleTable').replaceWith(result);
                console.log(result);
            },
            error: (e) => {
                console.log(e);
                createNotification('error', 'Ei olnud võimalik tunniplaani laadida');
            }
        });
}

$(document).ready(() => {
    createNotification('info', 'Laen tunniplaani');
    getSchedule(true);

    $('#schedule_filter').submit((event) => {
        event.preventDefault();
        event.stopImmediatePropagation();

        getSchedule();
    });
});