const button  = document.querySelector('button')
button.addEventListener('click',function(){
    const input = document.getElementById('dropdown')
    const val = document.getElementById('inp').value
    const op = document.createElement('option')
    op.value=val
    op.innerText=val
    input.appendChild(op)
})
//another method type
/*

arr = ['ECE','IT','CSE','EEE']
arr.foreach(val=>{
    const opt = document.createElement('option')
    opt.textContent = val
    opt.val = val
    document.getElementsById('input').appendChild(opt)
})

*/