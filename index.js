// code your solution here




function superbowlWin(anArray) {
    //each object has 2 properties
    // year and result
    // it should use find to teach each object to see if the result is "W"
    // it should return the year
    // if no win is found, return undefined


    function winner(innerArray) {
        return (innerArray["result"]==="W")
    }


    let win = anArray.find(winner)


    return win ? win["year"] : undefined;

}



    



