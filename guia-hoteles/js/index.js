$(function() {
    $('[data-toggle="tooltip"]').tooltip();
    $('[data-toggle="popover"]').popover();
    $('.carousel').carousel({
        interval: 2000
    });
    
    $('#suscribeModal').on('show.bs.modal', function (e) {
            console.log("El modal se está iniciando");
    })

    $('#suscribeModal').on('shown.bs.modal', function (e) {
        console.log("El modal se inició");
        $('#btnSuscribe').removeClass('btn-primary');
        $('#btnSuscribe').addClass('btn-secondary');
        $('#btnSuscribe').prop('disabled', true);
    })

    $('#suscribeModal').on('hide.bs.modal', function (e) {
        console.log('El modal se está ocultando')
    })

    $('#suscribeModal').on('hidden.bs.modal', function (e) {
        console.log('El modal se está ocultó')
        $('#btnSuscribe').prop('disabled', false);
        $('#btnSuscribe').removeClass('btn-secondary');
        $('#btnSuscribe').addClass('btn-primary');
    })
})