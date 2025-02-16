const incrementBtn = document.getElementById("increment-btn");
const saveBtn = document.getElementById("save-btn");
const counterText = document.getElementById("counter");
const previousEntriesText = document.getElementById("previous-entries");
const totalCountText = document.getElementById("total-count");

let totalCount =0;
let counter = 0;
let previousEntries = [];


function increment()
{
    counter += 1;
    counterText.textContent = counter;
}

function save(){

    //don't do anything if the counter is set to 0 (RETURN)
    if (counter === 0)
    {
        return;
    }
    //reset the previous entries text
    previousEntriesText.textContent = "Previous entries:";
    
    // add the counter entry to the array to print it out
    previousEntries.push(counter);
    
    //check if the array is bigger than 4 elements then remove the first one
    if(previousEntries.length > 4)
    {
        previousEntries.shift();
    }

    //print the array 
    for(let i = 0; i < previousEntries.length; i++)
    {
        //format the array based on the position of the element 
        if((i+1) === previousEntries.length)
        {
            previousEntriesText.textContent += " " + previousEntries[i];
        }
        else
        {
            previousEntriesText.textContent += " " + previousEntries[i] + " -";
        }
    }

    //display the total count
    totalCount += counter;
    totalCountText.textContent = "Total Count: " + totalCount;
    
    //reset the counter and the counter Text
    counter = 0;
    counterText.textContent = counter;
    
}

incrementBtn.addEventListener("click", increment);
saveBtn.addEventListener("click", save);

