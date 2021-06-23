function processData(arrNumbers) {
    var longestLength = 0;

    // Check if input is not empty
    if(arrNumbers.length > 0)
    {
        var tmpStr = "";
        var lisCount = 1;
        var tmpNumber = 0;
        //Loop throught the list to get The Longest Increasing Subsequence
        for(var p=0;p<arrNumbers.length;p++)
        {
            // Check if data entered is numeric and not empty then proceed
            if(arrNumbers[p].length > 0 && !isNaN(arrNumbers[p]))
            {
                tmpStr = arrNumbers[p];
                tmpNumber = arrNumbers[p];
                lisCount = 1;
                // Compare selected number with rest of the array
                for(var i=p+1;i<arrNumbers.length;i++)
                {
                    // Check if next number is greater then selected value also check if data is numeric and not empty then proceed
                    if(arrNumbers[i].length > 0 && !isNaN(arrNumbers[i]) && parseFloat(arrNumbers[i])>tmpNumber)
                    {
                        tmpStr += "," + arrNumbers[i];
                        // Incrise Subsequence length by one
                        lisCount++;
                        tmpNumber = parseFloat(arrNumbers[i]);
                    }

                }
                // check if Incrise Subsequence length greater then longest lenght if so set longest lenght to Incrise Subsequence length
                if(lisCount > longestLength)
                    longestLength = lisCount;

            }
        }
    }
    return longestLength
}

console.log(processData([15, 27, 14, 38, 26, 55, 46, 65, 85]));