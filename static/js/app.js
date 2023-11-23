// URL is placed in variable 
const samples = "https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json";

// Fetch the JSON data and console log it
d3.json(samples).then(function(data) {
    console.log(data);
  });

  // Display default plot 
  function init() {
    // Use D3 to select the dropdown menu
    let dropdownMenu = d3.select("#selDataset");

    // Create an array for sample names
    let names = data.names;

    // Add sample names to dropdown menu 
    names.forEach((id) => {
        dropdownMenu.append("option").text(name).property("value", name);
    });
    // Set first sample name
    let name = names[0];

    // Build initial plots
    builddemographics(name);
    buildBar(name);
    buildBubble(name);
  };

  // Build horizontal bar graph
  function buildBarChart(sample) {

  }
  // Build bubble graph
  function buildBubbleChart(sample) {
    
  }
  // Build demographics panel
  function buildMetadata(sample) {


  }