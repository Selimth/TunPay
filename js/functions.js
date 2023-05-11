var arr = []
 localStorage.setItem("data",JSON.stringify(arr))
// localStorage.setItem("data",JSON.stringify(arr))

function MakeUser(name , ps ){
    var obj={}
    obj.name=name
    obj.ps = ps
    arr.push(obj)
    console.log("arr",arr)
    var arr2=JSON.parse(localStorage.getItem("data"))
    arr2.push(obj)
    console.log("arr2",arr2)
    localStorage.setItem("data",JSON.stringify(arr2))
    return obj
}



function withdraw(n){
    var k=JSON.parse(localStorage.getItem("data"))
    for(var i=0;i<k.length;i++){
        if(k[i].ps===ps){
            this.amount-=n 
        }
    }
}

function deposit(n,ps){
    var k=JSON.parse(localStorage.getItem("data"))
    for(var i=0;i<k.length;i++){
        if(k[i].ps===ps){
            this.amount+=n 
        }
    }
    
}

function transfer(n,ps){
    if(checkPs(ps) === true){
        checkUser(n,$('#user').text())
        this.amount-=n
    }
}

function checkUser(n,user){
    var k=JSON.parse(localStorage.getItem("data"))
    for(var i = 0 ; i<k.length ; i++){
            if(user === k[i].name){
                this.amount+=n
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

 
$('#signinB').click(function(){

    for(var i = 0 ; i<arr.length ; i++){
        var users = arr[i]
        for(var j in users){
            if($('#name').val()=== this.name || $('#password').val()===this.ps){
                window.location.href="profile.html";
            }
        }
    }
})
// var name=document.getElementById("name").value
$("#signupB").click(new MakeUser($("#name").val(),$("#password").val()))
