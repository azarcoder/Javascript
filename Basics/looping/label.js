var a=1
label:
    while(true)
    {
        console.log(a+'\t'+`${a}`)
        if(a>=10)
        break label
        a++
    }
    