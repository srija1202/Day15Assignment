// Create input element
const inputdate = document.createElement("input");
inputdate.setAttribute("type","date");
inputdate.setAttribute("id","dob");

// Create button element
const button = document.createElement("button");
button.setAttribute("type","button");
button.className = "btn btn-primary";
button.innerHTML = "Fetch Data";
button.addEventListener("click", get_date);

// Create div element
const ele = document.createElement("div");
ele.className = "main";
ele.append(inputdate, button);

// Append the div to the body
document.body.appendChild(ele);

function get_date() {
  let input = document.getElementById("dob").value;
  let timestamp = Date.parse(input);
  let inputdate = new Date(timestamp);
  console.log(`Input date is: ${inputdate}`);

  let currentdate = new Date();
  console.log(`Current date is: ${currentdate}`);

  let millisecdiff = parseInt(currentdate.getTime() - inputdate.getTime());
  console.log(`Milliseconds difference: ${millisecdiff}`);

  let secondsdiff = Math.floor(millisecdiff / 1000);
  console.log(`Seconds difference: ${secondsdiff}`);

  let mindiff = Math.floor(secondsdiff / 60);
  console.log(`Minutes difference: ${mindiff}`);

  let hourdiff = Math.floor(mindiff / 60);
  console.log(`Hours difference: ${hourdiff}`);

  let daydiff = Math.floor(hourdiff / 24);
  console.log(`Day difference: ${daydiff}`);
  
  let yeardiff = currentdate.getFullYear() - inputdate.getFullYear();
  let monthdiff = yeardiff * 12 + currentdate.getMonth() - inputdate.getMonth();

  console.log(`Year difference: ${yeardiff}`);
  console.log(`Month difference: ${monthdiff}`);

  // Create div elements for displaying the calculated differences
  const resultDiv = document.createElement("div");
  resultDiv.className = "result";
  resultDiv.innerHTML = `
    <p>Year Difference: ${yeardiff}</p>
    <p>Month Difference: ${monthdiff}</p>
    <p>Day Difference: ${daydiff}</p>
    <p>Hour Difference: ${hourdiff}</p>
    <p>Minute Difference: ${mindiff}</p>
    <p>Second Difference: ${secondsdiff}</p>
    <p>Millisecond Difference: ${millisecdiff}</p>
  `;

  // Append the result div to the main div
  ele.appendChild(resultDiv);
}