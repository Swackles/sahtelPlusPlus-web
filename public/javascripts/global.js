$(document).ready(() => {
    $('.chosen-select').chosen({
        disable_search_threshold: 10,
        no_search_text: "Ühtegi vastet ei leitud...",
        inherit_select_classes: true,
        max_shown_results: 30,
        width: "200px"
    });

    $('.chosen-datepicker').datepicker({
        language: 'et'
    })
});

function createNotification(type, msg) {
    $('#infoArea').empty();

    let typeMessage = { 'error': 'Viga!', 'info': 'Info!', 'success': 'Edukas!' };

    let container = $('<div></div>').addClass(type);
    let title = $(`<strong>${typeMessage[type]}</strong>`);
    container.append(title);
    title.after(` ${msg}`);

    $('#infoArea').append(container);
}