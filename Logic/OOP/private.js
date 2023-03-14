class Person
{
    constructor(t)
    {
        this._temp = t //private attribute _ uunderscore
    }
    get_temp()
    {
        return `${this._temp} degree celcius`
    }
}
var a = new Person(12.90)
console.log(a.get_temp())