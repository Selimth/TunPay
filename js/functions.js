function each(coll, func) {
    if (Array.isArray(coll)) {
        for (var i = 0; i < coll.length; i++) {
            func(coll[i], i);
        }
    } else {
        for (var key in coll) {
            func(coll[key], key);
        }
    }
}

function map(coll, func) {
    var acc = [];
    if (!Array.isArray(coll)) {
        acc = {};
    }
    each(coll, function (element, key) {
        acc[key] = func(element, key);
    });
    return acc;
}

function filter(array, predicate) {
    var acc = [];
    each(array, function (element, index) {
        
        if (predicate(element, index)) {
            
            acc.push(element);
        }
    });
    return acc;
}

function reduce(array, f, acc) {
    if (acc === undefined) {
        acc = array[0];
        array = array.slice(1);
    }
    each(array, function (element, i) {
        acc = f(acc, element, i);
    });
    return acc;
}

var arr = []

localStorage.setItem("data",JSON.stringify(arr))
// localStorage.setItem("data",JSON.stringify(arr))

function MakeUser(name , ps ){
    var obj={}
    obj.name=name
    obj.ps = ps
    obj.amount=0
    obj.withdraw=withdraw()
    obj.deposit=deposit()
    obj.transfer=transfer()
    arr.push(obj)
    var arr2=JSON.parse(localStorage.getItem("data"))
    arr2.push(obj)
    localStorage.setItem("data",JSON.stringify(arr2))
    return obj
}

// function withdraw($("#n").val()){
//     this.amount-=$("#n").val()
// }

// function deposit(n,ps){
//     if(ps===this.ps){
//         this.amount+=n 
//     }
// }

// function transfer(n,ps){

// }


