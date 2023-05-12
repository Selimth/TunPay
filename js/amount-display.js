
$(document).ready(function(){
    var k=JSON.parse(localStorage.getItem("data"))
    if($('#password').val()===k[i].ps){
    for(var i = 0 ; i<k.length ; i++){
        $("#variable").text(k[i].amount) 
    }   
}   
})