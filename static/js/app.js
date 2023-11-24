// URL is placed in variable 
const url = "https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json";

 // Fetch the JSON data and console log it
 d3.json(url).then(function(data) {
    console.log(data);
 });

// Display default plot 
function init() {
     // Use D3 to select the dropdown menu
     let dropdownMenu = d3.select("#selDataset");

    // Create an array for sample names
    let names = data.names;

    // Add sample names to dropdown menu 
    names.forEach((name) => {
        dropdownMenu.append("option").text(name).property("value", name);
    });
    // Set first sample name
    let name = names[0];

    // Create functions to make plots
    buildDemographics(name);
    buildBar(name);
    buildBubble(name);
};

  // Build horizontal bar graph
  function buildBar(selectedSample) {
    // Fetch JSON data and console log it
    d3.json(url).then(function(data) {
        console.log(data);
    });
        // Create array for sample objects
        let samples = data.samples;
        // Filter data where selectedSample is id
        let filteredData = samples.filter((sample) => sample.id == selectedSample);
        // Assign first object
        let object = filteredData[0];
        // Trace data
        let trace1 = [{
            // Use slice for top 10
            x: object.sample_values.slice(0,10).reverse(),
            y: object.otu_ids.slice(0,10).map((otu_id) => `OTU ${otu_id}`).reverse(),
            text: object.otu_labels.slice(0,10).reverse(),
            type: "bar",
            marker: {color: "blue"},
            orientation: "h"
        }];
};

    // Build bubble graph
    function buildBubble(selectedSample) {
        // Fetch JSON data and console log it
        d3.json(url).then(function(data) {
            console.log(data);
        });
        // Create an array for sample objects 
        let samples = data.samples;
        // Filter data where selectedSample is id
        let filteredData = samples.filter((sample) => sample.id === selectedSample);
        // Assign first object
        let object = filteredData[0];
        // Trace data
        let trace2 = [{
            x: object.otu_ids,
            y: object.sample_values,
            text: object.otu_labels,
            mode: "markers",
            marker: {
                size: object.sample_values,
                color: object.otu_ids,
                colorscale: "Sunset"
            }
        }];
    }