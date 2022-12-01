var colors = {
    primary :'blue',
    secondary:'red',
    tertiart:'white'
}

//syntax
for(var c in colors)
{
    // console.log(colors[c]) //it will print all keys
    console.log(c+'-->'+colors[c]) //it will print key and values
}


//for in array
var col=['green','pink','red','violetblue']
for(var i in col)
    //console.log(col[i])
    console.log(i)//print indexes
