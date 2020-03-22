// Assign the data from `data.js` to a descriptive variable
var tableData = data;

// Get a reference to the table body
var tbody=d3.select("tbody");
console.log(data);

// Loop Through `UFOdata` and use d3 to append one table row `tr` for each object, then append 1 cell per value, and update each cell's text
tableData.forEach((UFOData)=> {
    console.log(UFOData);
    var row = tbody.append("tr");
        Object.entries(UFOData).forEach(([key, value])=> {
        console.log(key, value);

    var cell = row.append("td");
        cell.text(value);
    });
});


// Select the button
var button = d3.select("#filter-btn");

// Select the input element and get the raw HTML node
var inputField = d3.select("#datetime");

// Create button on ("click") function 
button.on("click", function() 
{
    console.log("clicked!");  
    // Get the value property of the input element
    var inputvalue=inputField.property("value");
    console.log(inputvalue);
    // Filter the UFOdata ( datatime=inputvalue ) 
    var filteredData=tableData.filter(UFOData=>UFOData.datetime===inputvalue);
    console.log(filteredData);
   
    // Empty the table data (table header still there)
    var tableRow=d3.selectAll('td')
    tableRow.remove();
    console.log(tableRow);
    
    // Reloop through the filtered UFOdata( datatime=inputvalue ) and update the table
    filteredData.forEach(function(item) {
        console.log(item);
        var row = tbody.append("tr");
        Object.entries(item).forEach(function([key, value]) {
        console.log(key, value);
        var cell = row.append("td");
        cell.text(value);
        });
    });    
});

