const button = document.querySelector('button')
button.addEventListener('click',demo)
function demo()
{
    const input = document.getElementById('input')
    const opt = input.options[input.selectedIndex].value
    let population = 0

    let resultdiv = document.createElement('div')
    resultdiv.id = 'result'
    document.getElementById('box').appendChild(resultdiv)
    switch(opt)
    {
        case "trichy":
            population = 1224000
            break
        case "chennai":
            population = 4224000
            break
        case "coimbatore":
            population = 6224000
            break
        case "madurai":
            population = 3224000
            break
    }
    
    const text=`${opt} has ${population} populations`
    document.getElementById('result').innerHTML=text
}