const readline = require("readline")
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

function callback(partialSum) {
    console.log(partialSum);
}

function addNumbers(sum, numsleft, completionCallback){
    if (numsleft === 0){
        rl.close()
        completionCallback(sum)
        }
    else{
        rl.question("Enter a number: ", (response) => {
        let num = parseInt(response);
        sum += num;
        addNumbers(sum, --numsleft,completionCallback);
        })
    }
}


addNumbers(0, 3, sum => console.log(`Total Sum: ${sum}`));