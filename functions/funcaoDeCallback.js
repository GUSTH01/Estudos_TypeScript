function rand(min = 1000, max = 3000){
    const num = Math.random() * (max - min) + min
    return Math.floor(num)
    
}
function f1 (callBack){
    setTimeout(function (){
        console.log('1')
        if (callBack) callBack()
            
        }, rand())
        
    }
    function f2 (callBack){
        setTimeout(function (){
            console.log('2')
        if (callBack) callBack()
            
        }, rand())
        
    }
    function f3 (callBack){
        setTimeout(function (){
            console.log('3')
    if (callBack) callBack()
        
    }, rand())
}
f1(function (){
    f2(function(){
        f3(function (){
            console.log('Helloo world')
        })
    })
    })

