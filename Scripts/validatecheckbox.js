window.addEventListener("load",function(){
    var cb = document.querySelector('#AcceptanceCheckbox'); 
    var button = document.querySelector('#Letsgo')
    cb.addEventListener("click",function(){
        if(cb.checked)
            button.style.display = "block";
        else
            button.style.display = "none";
    });
});