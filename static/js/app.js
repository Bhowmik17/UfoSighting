// from data.js
var tableData = data;
// Get a reference to the table body
var tbody = d3.select("tbody");


//write code that appends a table to your web page and then 
//adds new rows of data for each UFO sighting.

data.forEach((UFOsighting) => {
    var row = tbody.append("tr");
    Object.entries(UFOsighting).forEach(([key, value]) => {
        var cell = tbody.append("td");
        cell.text(value);
    });
});

//Use a date form in your HTML document and write JavaScript code that will
//listen for events and search through the `date/time` column to find rows 
//that match user input. specifically you will need to code for form submission 
//through your button

// Select the submit button
var submit = d3.select("#filter-btn");

// Complete the click handler for the form
submit.on("click", function() {

  // Prevent the page from refreshing
  d3.event.preventDefault();

//Wipe current data in table
tbody.selectAll("td").remove()

  // Select the input element and get the raw HTML node
  var inputElement = d3.select("#datetime");

  // Get the value property of the input element
  var inputValue = inputElement.property("value");

  console.log(inputValue);
  
  
  // Use the form input to filter the data by blood type
  var filteredData = data.filter(data => data.datetime === inputValue);
  console.log(filteredData);


filteredData.forEach((UFOsighting) => {
    var row = tbody.append("tr");
    Object.entries(UFOsighting).forEach(([key, value]) => {
        var cell = tbody.append("td");
        cell.text(value);
    });
});

});



  //console.log(tableData);



