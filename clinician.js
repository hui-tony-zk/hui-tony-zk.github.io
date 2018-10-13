var ctx = document.getElementById('c_eFI_donut').getContext('2d');
var donut_data = {
    datasets: [{
        data: [3, 7-3],
        backgroundColor: ["green", "grey"]
    }],
};
var myDoughnutChart = new Chart(ctx, {
    type: 'doughnut',
    data: donut_data,
    options: {
        tooltips: {
            enabled: false
        },
        cutoutPercentage: 70,
        elements: {
            center: {
                text: 'eFI: 3/7',
                color: 'green', //Default black
                fontStyle: 'Helvetica', //Default Arial
                sidePadding: 10 //Default 20 (as a percentage)
            }
        },
        title: {
            display: true,
            text: 'Current eFI score'
        },
        layout: {
            padding: {
                left: 5,
                right: 5,
                top: 5,
                bottom: 5
            }
        },
    }
});

Chart.pluginService.register({
    beforeDraw: function(chart) {
        if (chart.config.options.elements.center) {
            //Get ctx from string
            var ctx = chart.chart.ctx;

            //Get options from the center object in options
            var centerConfig = chart.config.options.elements.center;
            var fontStyle = centerConfig.fontStyle || 'Arial';
            var txt = centerConfig.text;
            var color = centerConfig.color || '#000';
            var sidePadding = centerConfig.sidePadding || 20;
            var sidePaddingCalculated = (sidePadding / 100) * (chart.innerRadius * 2)
            //Start with a base font of 30px
            ctx.font = "30px " + fontStyle;

            //Get the width of the string and also the width of the element minus 10 to give it 5px side padding
            var stringWidth = ctx.measureText(txt).width;
            var elementWidth = (chart.innerRadius * 2) - sidePaddingCalculated;

            // Find out how much the font can grow in width.
            var widthRatio = elementWidth / stringWidth;
            var newFontSize = Math.floor(30 * widthRatio);
            var elementHeight = (chart.innerRadius * 2);

            // Pick a new font size so it will not be larger than the height of label.
            var fontSizeToUse = Math.min(newFontSize, elementHeight);

            //Set font settings to draw it correctly.
            ctx.textAlign = 'center';
            ctx.textBaseline = 'middle';
            var centerX = ((chart.chartArea.left + chart.chartArea.right) / 2);
            var centerY = ((chart.chartArea.top + chart.chartArea.bottom) / 2);
            ctx.font = fontSizeToUse + "px " + fontStyle;
            ctx.fillStyle = color;

            //Draw text in center
            ctx.fillText(txt, centerX, centerY);
        }
    }
});

var ctx2 = document.getElementById('c_eFI_line').getContext('2d');
var myLineChart = new Chart(ctx2, {
    // The type of chart we want to create
    type: 'line',

    // The data for our dataset
    data: {
        labels: ["April", "May", "June", "July", "Aug", "Sept", "Oct"],
        datasets: [{
            label: "eFI score",
            borderColor: 'darkgrey',
            fill: false,
            data: [1, 2, 2, 2, 3, 3, 3],
            pointBackgroundColor: ["green", "green", "green", "green", "green", "green", "green"],
            pointRadius: 5,
            pointBorderColor: "white",
            pointHitRadius: 10,
        }]
    },

    // Configuration options go here
    options: {
        elements: {
            line: {
                tension: 0, // disables bezier curves
            }
        },
        maintainAspectRatio: false,
        layout: {
            padding: {
                left: 50,
                right: 50,
                top: 50,
                bottom: 50
            }
        },
        scales: {
            yAxes: [{
                display: true,
                stacked: true,
                ticks: {
                    min: 1, // minimum value
                    max: 7, // maximum value
                    stepSize: 1,
                }
            }]
        },
        legend: {
            display: false,
        },
        title: {
            display: true,
            text: 'Patient eFI over time'
        }
    }
});

var view = {
  title: "Joe",
  calc: function () {
    return 2 + 4;
  }
};

var template_yes_no = '<div class="clearfix" id="{{id}}">\
    <div class="c_question float-left">\
        {{question}}\
    </div>\
    <div class="float-right">\
        <div class="form-check form-check-inline">\
            <input class="form-check-input clin_q_y" type="radio" name="{{id}}" value="y">\
            <label class="form-check-label" for="inlineRadio1">Yes</label>\
        </div>\
        <div class="form-check form-check-inline">\
            <input class="form-check-input clin_q_n" type="radio" name="{{id}}" value="n">\
            <label class="form-check-label" for="inlineRadio2">No</label>\
        </div>\
    </div>\
</div>'
// template: '<div ...>\n<h1 ...>{{title}}<h1>\n</div>'

function add_entry(template, data, parent) {
    var html = Mustache.render(template, data);
    $(parent).append(html);
}

var clin_entries = "Changes in general mental functioning; Onset of cognitive symptoms; Short-term Memory Impairment; Long- term memory impairment; Bradykinesia of the limbs; Poor muscle tone in limbs; Poor standing posture; Irregular gait pattern; Clouding or delirium; Poor limb coordination; Poor coordination, trunk; Impaired vibration; Tremor at rest; Postural tremor; Intention tremor; Seizures, Partial complex; Seizures, Generalized"
var clin_entires = clin_entries.split(';')

var pat_entries = "Memory changes;Problems getting dressed;Problems with bathing;Problems carrying out personal grooming;Urinary incontinence;Toileting problems;Bulk difficulties;Problems cooking;Sucking problems;Problems going out alone;Falls"
var pat_entries = pat_entries.split(';')

$(document).ready(function() {
    var i;
    for (i = 0; i < clin_entires.length; i++) {
        add_entry(template_yes_no, {
            question: clin_entires[i],
            id: "clin_" + i
        }, parent = "#i_clinical_data")
    }
    for (i = 0; i < pat_entries.length; i++) {
        add_entry(template_yes_no, {
            question: pat_entries[i],
            id: "pat_" + i
        }, parent = "#i_patient_data")
    }
    $("input.form-check-input").click(function () {
        num_yes = $(".clin_q_y:checked").length
        update_plot()
    })
})

// Button functionality
function update_data(id) {
    console.log(id)
    $('#loading').css({ 'display': 'flex' })
    setTimeout(function() {
        $(id).find(".clin_q_n").click()
        $("#loading").css({ 'display': 'none' })
        if (id == "#i_patient_data") {
            console.log("TRUE")
            $("#pat_0").find(".clin_q_y").click()
            $ques = $("#pat_0").find(".c_question")
            $ques.addClass("highlighted")
            $ques.popover({
                title: "Data changed from previous entry",
                content: "Please perform a neurological and mental status exam",
                trigger: "hover",
                placement: "left"
            })
        }
    }, 1000)
}
// Update plot

var num_yes = 0

function update_plot() {
    if (num_yes < 3) {
        efi_val = 3
        ef_color = "green"
    } else if (num_yes >= 4 && num_yes < 10) {
        efi_val = 4
        ef_color = "orange"
    } else if (num_yes >= 10 && num_yes < 15) {
        efi_val = 5
        ef_color = "orange"
    } else if (num_yes >= 15 && num_yes < 20) {
        efi_val = 5
        ef_color = "orange"
    } else if (num_yes >= 20 && num_yes < 25) {
        efi_val = 6
        ef_color = "red"
    } else if (num_yes >= 25) {
        efi_val = 7
        ef_color = "red"
    }
    console.log("num_Yes" + num_yes)
    console.log("efi" + efi_val)
    myLineChart.data.datasets[0].data[6] = efi_val
    myLineChart.data.datasets[0].pointBackgroundColor[6] = ef_color
    myLineChart.update()
    myDoughnutChart.data.datasets[0].data[0] = efi_val
    myDoughnutChart.data.datasets[0].data[1] = 7-efi_val
    myDoughnutChart.data.datasets[0].backgroundColor[0] = ef_color
    myDoughnutChart.options.elements.center.text = 'eFI: ' + efi_val + "/7"
    myDoughnutChart.options.elements.center.color = ef_color
    myDoughnutChart.update()
}