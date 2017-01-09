 var clicks = 0;
    function clickMeadd() {
        clicks += 1;
        console.log(clicks);
    };

    function clickMesub() {

        if(clicks==0)
        {
            return(null)
        }
        else
    {
        clicks -= 1;
        console.log(clicks);
    }
    };