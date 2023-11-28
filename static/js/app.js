// URL is placed in variable 
const url = "https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json";

// Fetch the JSON data and console log it
d3.json(url).then(function(data) {
    console.log("Data: ", data);
});

// Define dropdown menu
let dropdownMenu = d3.select("#selDataset");

// Display the default plot
function init() {
    // Fetch JSON data
    d3.json(url).then(function(data) {
        // Store names in list
        let dropdown = data.names;
        // Console log it 
        console.log("Dropdown: ", dropdown);
        // Add list to dropdown menu
        dropdown.forEach((id) => {
            dropdownMenu.append("option").text(id).property("value", id);
        });
    // Create functions to make plots
    buildBar(dropdown);
    buildDemo(dropdown);
    buildBubble(dropdown);
    // Make default option for display
    let defaultPlot = dropdown[0];
        console.log("Default Plot: ", defaultPlot);
    // Create default plots
    buildBar(defaultPlot);
    buildDemo(defaultPlot);
    buildBubble(defaultPlot);
    });
};

// Build horizontal bar graph
function buildBar(selectedSample) {
    // Fetch JSON data
    d3.json(url).then((data) => {
    // Create array for sample objects
    let samplesData = data.samples;
    // Filter data where selectedSample is id
    let filteredData = samplesData.filter(id => id.id == selectedSample);
    // Assign first object
    let first = filteredData[0];
    // Trace data
    let trace1 = [{
        // Use slice for top 10
        x: first.sample_values.slice(0,10).reverse(),
        y: first.otu_ids.slice(0,10).map((otu_id) => `OTU ${otu_id}`).reverse(),
        text: first.otu_labels.slice(0,10).reverse(),
        type: "bar",
        marker: {color: "blue"},
        orientation: "h"
    }];
    let layout = {title: "Top Ten OTUs"};
    // Use Plotly
    Plotly.newPlot("bar", trace1, layout);
    });
};

// Build demographics panel
function buildDemo(selectedSample) {
    // Fetch JSON data 
    d3.json(url).then((data) => {
        // Create an array for metadata objects 
        let demoInfo = data.metadata;
        // Filter data where selectedSample is id
        let filtered = demoInfo.filter(id => id.id == selectedSample);
        // Assign first object
        let firstobj = filtered[0];
        // Clear metadata
        d3.select('#sample-metadata').text('');
        // Use object.entries to add key pairs
        Object.entries(firstobj).forEach(([key,value]) => {
            d3.select('#sample-metadata').append('h5').text(`${key}: ${value}`); 
        });
    });
};

// Build bubble graph
function buildBubble(selectedSample) {
    // Fetch JSON data
    d3.json(url).then((data) => {
    // Create an array for sample objects 
    let samplesData = data.samples;
    // Filter data where selectedSample is id
    let filteredData = samplesData.filter(id => id.id == selectedSample);
    // Assign first object
    let firstob = filteredData[0];
    // Assign first object to variables
    let sample_values = firstob.sample_values;
    let otu_labels = firstob.otu_labels;
    let otu_ids = firstob.otu_ids;
    // Trace data
    let trace2 = [{
        x: otu_ids,
        y:sample_values,
        text: otu_labels,
        mode: 'markers',
        marker: {
            size: sample_values,
            color: otu_ids
        }
    }];
    // Set layout
    let layout = {
        xaxis: {title: "OTU ID"},
        yaxis: {title: "Number of Bacteria"}
    };
    // Use Plotly
    Plotly.newPlot("bubble", trace2, layout);
});
};

// Toggle between options
function optionChanged(selectedSample) {
    buildBar(selectedSample);
    buildDemo(selectedSample);
    buildBubble(selectedSample);
}
init();