$(function() {
    $('btnusuario').on('click', function() {
        $ajax({
            url: '/users/signin',
            success: function(numeros) {
                let tbody = $('tbody');
                tbody.html('');
                products
            }
        })
    })
});