$document.ready(function () {
    $('.submit').click(function (event) {
        
        var name = $('.name').val()
        var mail = $('.mail').val()
        var message = $('.message').val();
        var correct = false;
        
        
        if(mail.length > 5 && mail.includes('@') && mail.includes('.') && message.length > 5){
            correct = true
        }
        else{
            correct = false
            $('.mail').css({"background-color":"rgba(144,46,62,.4)"});
            event.preventDefault()
        }      
        
        
    })
    
})

