const form = document.querySelector('#form')
const username = document.querySelector('#username')
const email = document.querySelector('#email')
const password = document.querySelector('#password')
const cpassword = document.querySelector('#cpassword')
form.addEventListener('submit',(e)=>{
    e.preventDefault()
    validateInputs()
})
function validateInputs()
{
    const userval = username.value.trim()
    const emailval = email.value.trim()
    const passval = password.value.trim()
    const cpassval = cpassword.value.trim()

    if(userval ==='')
    {
        setError(username,'Username is required')
    }
    else 
    {
        setSuccess(username)
    }

    if(emailval==='')
    {
        setError(email,'Email is required')
    }
    else if(!validateEmail(emailval))
    {
        setError(email,'Email is invalid')
    }
    else 
    {
        setSuccess(email)
    }

    if(passval==='')
    {
        setError(password,'Password is required')
    }
    else if(passval.length<8)
    {
        setError(password,'Password must be atleast 8 characters')
    }
    else
    {
        setSuccess(password)
    }

    if(cpassval==='')
    {
        setError(cpassword,'Password is required')
    }
    else if(cpassval != passval)
    {
        setError(cpassword,'Password is mismatched')
    }
    else
    {
        setSuccess(cpassword)
    }
}
function setError(element,message)
{
    const inputgroup = element.parentElement
    const errorElement = inputgroup.querySelector('.error')
    errorElement.innerText = message
    inputgroup.classList.add('error')
    inputgroup.classList.remove('success')
}
function setSuccess(element)
{
    const inputgroup = element.parentElement
    const errorElement = inputgroup.querySelector('.error')
    errorElement.innerText = ''
    inputgroup.classList.add('success')
    inputgroup.classList.remove('error')
}
const validateEmail = (email) => {
    return String(email)
    .toLowerCase()
    .match(
        /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    )
}