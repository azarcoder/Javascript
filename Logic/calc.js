const button = document.querySelector('button')
button.addEventListener('click',function(){
    const input = document.getElementById('str').value
    const resultdiv = document.createElement('div')
    resultdiv.id= 'result' 
    document.getElementById('box').appendChild(resultdiv) 
    document.getElementById('result').innerHTML=eval(input)   
})

