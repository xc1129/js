$(document).ready(function() {
    $('#clickit').click(function(){
        $.get("1.php",function(data){
            $('#content').html($('#content').text()+data);
        });
    });
});
