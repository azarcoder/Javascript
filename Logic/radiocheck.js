const button = document.querySelector('button')
button.addEventListener('click',function(){
    const input = document.getElementById('age').value
    const gender = document.getElementsByName('gender')
    const resultdiv = document.createElement('div')
    resultdiv.id = 'result'
    document.getElementById('box').appendChild(resultdiv)
    for (i in gender)
    {
        if(gender[i].checked)
            document.getElementById('result').innerHTML=`Your age : ${input} and you are ${gender[i].value}!`
    }
})