function grocery(exp)
{
    switch(exp)
    {
        case 'cookies':
            console.log('Cookies cost 100 rupees');
            break;
        case 'Milk':
            console.log('Cookies cost 500 rupees');
            break;
        default:
            console.log(`${exp} not Avilable!`);
    }
}

grocery('cookies');
grocery('Milk');
grocery('Potato');