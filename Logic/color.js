const hex = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F']
const button = document.querySelector('button')
function randhexvalue()
{
    let randomindex = Math.floor(Math.random()*16)//generate random num between 16
    return hex[randomindex]
}
button.addEventListener('click',function(){
    let hexcolor = '#'
    let i=1;
    while(i<=6)//hexvalue color cose 6 so 6 times
    {
        hexcolor+=randhexvalue()
        i++;
    }
    document.querySelector('body').style.backgroundColor = hexcolor
})
