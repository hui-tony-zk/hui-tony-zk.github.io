var color_scale = ['#a50026', '#d73027', '#f46d43', '#fdae61', '#fee090', '#ffffbf', '#e0f3f8', '#abd9e9', '#74add1', '#4575b4', '#313695'].reverse()

// populate drop-down (http://bl.ocks.org/feyderm/e6cab5931755897c2eb377ccbf9fdf18)
/*d3.select("#dropdown")
    .selectAll("option")
    .data(dropdown_options)
    .enter()
    .append("option")
    .attr("value", function(option) {
        return option.value;
    })
    .text(function(option) {
        return option.text;
    });
    */

// initial dataset on load
var selected_dataset = "value1";
var selected_dataset_name = "value1 text";

$("#current_vis").html("Now plotting: <b>" + selected_dataset_name + "</b>")

//Map dimensions (in pixels)
var width = parseInt(d3.select('#map').style('width')),
    height = 500,
    scale = 80000

//Map projection
var projection = d3.geoMercator()
    .scale(scale)
    .center([-122.80068064431477, 49.1]) //projection center
    .translate([width / 2, height / 2]) //translate to center the map in view

//Generate paths based on projection
var path = d3.geoPath()
    .projection(projection);

//Create an SVG
var svg = d3.select("#map").append("svg")
    .attr("width", width)
    .attr("height", height);

//Group for the map features
var features = svg.append("g")
    .attr("class", "features");

//Create choropleth scale
var color = d3.scaleQuantize()
    .domain([0, 1])
    .range(d3.range(11).map(function(i) {
        return color_scale[i];
    }));

//Create a tooltip, hidden at the start
var tooltip = d3.select("#map").append("div").attr("id", "tooltip");

//Create zoom/pan listener
//Change [1,Infinity] to adjust the min/max zoom scale
var zoom = d3.zoom()
    .scaleExtent([1, 4])
    .on("zoom", zoomed);

svg.call(zoom);

// Load data
var metadata = d3.map();

d3.queue()
    .defer(d3.json, "data/surrey_census_tracts.topojson")
    .defer(d3.csv, "data/ct.csv")
    .await(ready);

// Draw map
var meta;

function ready(error, geodata, _metacsv) {
    if (error) return console.log(error); //unknown error, check the console

    meta = _metacsv; // load into hashtable, https://bl.ocks.org/mbostock/4060606

    meta.forEach(function(x) {
        metadata.set(x.id, +x["value1"])
    })

    //Create a path for each map feature in the data
    mapplot = features.selectAll("path")
        .data(topojson.feature(geodata, geodata.objects.collection).features) //generate features from TopoJSON
        .enter()
        .append("path")
        .attr("d", path)
        .attr("fill", "#999")
        .attr("id", function(d) {
            return parseFloat(d.properties.CTUID).toString();
        }) // set each census region's ID (for future joining)
        .on("mouseover", showTooltip)
        .on("mousemove", moveTooltip)
        .on("mouseout", hideTooltip)
        .on("click", clicked)
        //.call(updateFill, selected_dataset);
        .call(rescaleFill, selected_dataset);
};

// Add optional onClick events for features here
// d.properties contains the attributes (e.g. d.properties.name, d.properties.population)
function clicked(d, i) {
    if (d3.event.defaultPrevented) d3.event.stopPropagation();
    console.log("clicked " + this.getAttribute("id"))
}

//Position of the tooltip relative to the cursor
var tooltipOffset = {
    x: 5,
    y: -5
};

//Create a tooltip, hidden at the start
function showTooltip(d) {
    texttoshow = metadata.get(this.getAttribute("id"))
    moveTooltip();
    tooltip
        .style("display", "block") // appear
        .text(selected_dataset_name + " : " + texttoshow);
    //.text(d.properties[selected_dataset]);
}

var scrolloffset = 0
    //Move the tooltip to track the mouse
function moveTooltip() {
    tooltip
        .style("top", (d3.event.pageY + tooltipOffset.y - scrolloffset) + "px")
        .style("left", (d3.event.pageX + tooltipOffset.x) + "px");
}

//Track tooltip scroll position
$(window).scroll(function() {
    scrolloffset = $(this).scrollTop();
});

//Create a tooltip, hidden at the start
function hideTooltip() {
    tooltip.style("display", "none");
}

// DROPDOWN STUFF

// dropdown dataset selection
/* var dropDown = d3.select("#dropdown");

dropDown.on("change", function() {
    selected_dataset = d3.event.target.value;
    selected_dataset_name = d3.event.target.text;
    updateData(selected_dataset);
    // mapplot.call(updateFill, selected_dataset)

});
*/

// change displayed data on update
$('#dropdown').change(function() {
    var selectize = $(this)[0].selectize;
    selected_dataset = selectize.getValue()
    selected_dataset_name = selectize.getItem(selectize.getValue()).text();
    $("#current_vis").html("Now plotting: <b>" + selected_dataset_name + "</b>")
    updateData(selected_dataset);
    console.log(selected_dataset)
});

function updateData(selected_dataset) {
    console.log(meta)
    meta.forEach(function(x) {
        metadata.set(x.id, +x[selected_dataset])
    })
    console.log(metadata.values()[0])

    mapplot.call(rescaleFill, selected_dataset)
}

// old function based on topoJSON metadata
/*
function updateFill(selection, selected_dataset) {
    var d_extent = d3.extent(selection.data(), function(d) {
        return parseFloat(d.properties[selected_dataset]);
    });
    rescaleFill(selection, d_extent);
}
*/

function rescaleFill(selection, d_extent) {
    d_extent = d3.extent(metadata.values())
    $("text").eq(0).text(d_extent[0])
    $("text").eq(1).text(d_extent[1])
    color.domain(d_extent)
    selection.transition()
        .duration(700)
        .attr("fill", function(d) {
            // var datum = parseFloat(d.properties[selected_dataset]);
            var datum = metadata.get(this.getAttribute("id"))
            return (typeof color(datum) == "string" ? color(datum) : "white");
        });
}

//Update map on zoom/pan
function zoomed() {
    features.attr("transform", d3.event.transform);
}
