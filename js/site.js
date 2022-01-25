//Display message to the user
function getValues() {
    let startValue = document.getElementById("startValue").value;
    let endValue = document.getElementById("endValue").value;

    startValue = parseInt(startValue);
    endValue = parseInt(endValue);

    //Validate Input
    if (Number.isInteger(startValue) && Number.isInteger(endValue)) {
        let numArray = generateNumbers(startValue, endValue);

        displayNumbers(numArray);
    } else {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Only integers are allowed for Hundo'
        });
    }
}

function generateNumbers(sVal, eVal) {

    let numArray = [];
    for (let i = sVal; i <= eVal; i++) {
        numArray.push(i);
    }

    return numArray;
}

function displayNumbers(numArray) {
    let row = "";
    let templateRows = "";
    let className = "";


    for (let i = 0; i < numArray.length; i++) {

        let number = numArray[i];

        if (i == 0) {
             row = `<tr><td class="regularNum">${numArray[i]}</td>`;
             
        } else {

            if (number % 3 == 0 && number % 5 == 0) {
                if ((i+1) % 10 == 0) {
                    row = `<td class="fizzBuzz">FizzBuzz</td></tr><tr>`;
                } else {
                    row = `<td class="fizzBuzz">FizzBuzz</td>`;
                }
            } else {
                if (number % 3 == 0) {


                    if ((i+1) % 10 == 0) {
                        row = `<td class="fizz">Fizz</td></tr><tr>`;
                    } else {
                        row = `<td class="fizz">Fizz</td>`;
                    }
                } else {
                    if (number % 5 == 0) {


                        if ((i+1) % 10 == 0) {
                            row = `<td class="buzz">Buzz</td></tr><tr>`;
                        } else {
                            row = `<td class="buzz">Buzz</td>`;
                        }

                    } else {

                        if ((i+1) % 10 == 0) {

                            row = `<td class="regularNum">${numArray[i]}</td></tr><tr>`;
                        } else {
                            row = `<td class="regularNum">${numArray[i]}</td>`;
                        }


                    }
                }

            }
        }
        templateRows += row;
    }


    document.getElementById("results").innerHTML = templateRows;
    console.log(templateRows);
}