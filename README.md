# belly-button-challenge

An interactive dashboard was created to explore the Belly Button Biodiversity dataset (https://robdunnlab.com/projects/belly-button-biodiversity/). 

The dashboard contains a dropdown menu, a demographic panel, a horizontal bar graph, and a bubble chart. 

Dropdown Menu 

The dropdown menu is used to toggle between the visualizations by Test Subject ID No. 

![Alt text](<Screenshot 2023-11-27 at 7.40.35 PM.png>)

Demographic Panel

The demographic panel shows the demographics information of the Test Subject ID. The key-value pairs from the metadata of the JSON object are displayed. 

![Alt text](<Screenshot 2023-11-27 at 7.36.05 PM.png>)

Horizontal Bar Graph

The top ten OTUs found in each Test Subject ID are displayed in a bar graph. sample_values are the x values for the chart and the otu_ids are the y values for the chart. The otu_labels are shown in hovertext in the chart.  

![Alt text](<Screenshot 2023-11-27 at 7.35.42 PM.png>)

Bubble Chart

The bubble chart shows each sample found from each Test Subject ID. otu_ids are the x values for the chart and the sample_values are the y values for the chart. The hovertext for the chart is based off otu_labels and the colours are dictated by otu_ids. 

![Alt text](<Screenshot 2023-11-27 at 7.35.51 PM.png>)



