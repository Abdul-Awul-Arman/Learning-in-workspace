    /*
    * Programming Quiz: Using the Rest Parameter (1-5)
    */

    // your code goes here

    function average(...sums) {

        let total = 0;
        for (let sun of sums) {
            total=total+sun;
        }
        return total;

    }

    console.log(average(2, 6));
    console.log(average(2, 3, 3, 5, 7, 10));
    console.log(average(7, 1432, 12, 13, 100));
    console.log(average());
