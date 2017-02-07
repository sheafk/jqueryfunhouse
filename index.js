 $(document).ready( function(){
//     $('#change-color').click(function(){
//         $('body').css("background-color","red");
//     })
// })

$("#change-color").click(function() {
    var colors = [ 'red', 'blue', 'green', 'purple'];
    
    var randColor = colors[Math.floor(Math.random()*colors.length)];
    
    $("body").css("background-color", randColor);
});

});