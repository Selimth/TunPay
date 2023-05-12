var arr = [{
    amount : 0,
    name: 'nour',
    ps : 'nour'
}]
//localStorage.setItem("data",JSON.stringify(arr))
// localStorage.setItem("data",JSON.stringify(arr))

function MakeUser(name , ps,){
    var obj={}
    obj.amount = 0
    obj.name= name
    obj.ps = ps
    arr.push(obj)
    console.log("arr",arr)
    var arr2=JSON.parse(localStorage.getItem("data"))
    arr2.push(obj)
    console.log("arr2",arr2)
    localStorage.setItem("data",JSON.stringify(arr2))
    return obj
}


function deposit(n,ps){
    var k=JSON.parse(localStorage.getItem("data"))
    console.log(k)
    for(var i=0;i<k.length;i++){
        if(k[i].ps===ps){
            k[i].amount = Number(k[i].amount) + Number(n)
            $("#variable").text(k[i].amount)
            localStorage.setItem("data",JSON.stringify(k))
        }
    }
}

function withdraw(n,ps){
    var k=JSON.parse(localStorage.getItem("data"))
    console.log(k)
    for(var i=0;i<k.length;i++){
        if(k[i].ps===ps){
            if(k[i].amount>n){
                k[i].amount = Number(k[i].amount) - Number(n)
                $("#variable").text(k[i].amount)
                localStorage.setItem("data",JSON.stringify(k))
            }
            else{
                alert("Not enough money")
            }
          
        }
    }
}

function transfer(n,ps,user){
    if(checkPs(ps) === true){
        checkUser(n,user)
        var k=JSON.parse(localStorage.getItem("data"))
        for(var i = 0 ; i<k.length ; i++){
            if(ps === k[i].ps){
                if(k[i].amount>n){
                    k[i].amount=k[i].amount-n
                    $("#variable").text(k[i].amount)
                    localStorage.setItem("data",JSON.stringify(k)) 
                }
               
            }
        }
    }
}

function checkUser(n,user){
    var k=JSON.parse(localStorage.getItem("data"))
    for(var i = 0 ; i<k.length ; i++){
        var recep = k[i]
            if(user === recep.name){
                recep.amount = Number(recep.amount) + Number(n)
                localStorage.setItem("data",JSON.stringify(k))
            }
        }
    }


function checkPs(ps){
    var k=JSON.parse(localStorage.getItem("data"))
    for(var i = 0 ; i<k.length ; i++){
            if(ps === k[i].ps){
                return true
            }
        }
    }

$("#signinB").click(function(){
    var k=JSON.parse(localStorage.getItem("data"))
    for(var i = 0 ; i<k.length ; i++){
        for(var j in k[i]){
            if($('#name').val()=== k[i].name || $('#password').val()===k[i].ps){
                window.location.href="profile.html";
            }
        }
    }
})


$("#signupB").click(function() {
    new MakeUser($("#name").val(), $("#password").val());
    $(document).ready(function(){
        $("#variable").text(0)
     }) 
  });



  $("#deposit").click(function(){
    deposit($("#n").val(), $("#ps").val())
 })

 $("#withdraw").click(function(){
    withdraw($("#n").val(), $("#ps").val())
 })

 $("#transfer").click(function(){
    transfer($("#n").val(), $("#ps").val() , $("#user").val())
 })