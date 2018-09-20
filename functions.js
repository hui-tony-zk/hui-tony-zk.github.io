// Make experience_template
var experience_template = $.templates('\
                            <div class="row">\
                                <div class="float_img"><img src="{{:image}}" width="50"></div>\
                                <div class="float_text">\
                                    <span class="h4">{{:title}}</span>\
                                    <br>\
                                    {{if company}} \
                                    <span class="subtitle">{{:company}}</span>\
                                    <br>\
                                    {{else}}\
                                    {{/if}} \
                                    <span class="date">{{:date}}</span>\
                                    <br>\
                                {{if details}} \
                                    <a href="#!" onclick="return false;" data-toggle="collapse" data-parent="#experience_list" data-target="#{{:id}}">Show/hide details</a>\
                                </div>\
                                </div>\
                                    <div id="{{:id}}" class="accordion-body collapse"> \
                                        {{:details}} \
                                    </div> \
                                    {{else}}\
                                    <p></p> \
                                </div>\
                                </div>\
                                    {{/if}} \
                                    <br>\
                            '); // Get compiled template

// Render Experiences
function experience_entry(data) {
    var x = data.details.replace(/- /g, "<li>").replace(/<br>/g, "</li>")
    data.details = "<ul class='panel panel-default'>".concat(x).concat("</li></ul>")
    $("#experience_list").append(experience_template.render(data)); // Insert HTML string into DOM
};

// Render Projects
function projects_entry(data) {
    data.details = "<div class='panel panel-default'>".concat(data.details).concat("</div>")
    $("#projects_list").append(experience_template.render(data)); // Insert HTML string into DOM
};

//Template for skills

var skills_template = $.templates('<img class="float_skills" data-toggle="popover" data-content="{{:details}}" data-title="<span class=\'popoverheading\'>{{:title}}</span>" data-trigger="hover" data-placement="top" src="{{:image}}" data-html="true" data-container="body">');

function skills_entry(data) {
    $('#skills_list').append(skills_template.render(data));
}

//Template for awards

var awards_template = $.templates('<tr> \
                                            <td>{{:date}}</td> \
                                            <td>{{:award}}</td> \
                                            <td>{{:org}}</td> \
                                            <td>{{:value}}</td> \
                                        </tr>')

function awards_entry(data) {
    $('#awards_list').append(awards_template.render(data));
}

$(document).ready(function() {
    awards_entry({
        date: "09/2018",
        award: "Vanquish Collisions Hackathon – 1st place prize<br>(Team of 4)",
        org: "City of Vancouver",
        value: "$5,000"
    });
    awards_entry({
        date: "05/2017",
        award: "John Bosdet Travel Award",
        org: "BCGSC",
        value: "$1,000"
    });
    awards_entry({
        date: "05/2017",
        award: "International Travel Award",
        org: "CEEHRC",
        value: "$1,000"
    });
    awards_entry({
        date: "11/2016",
        award: "Datathon Competition – 1st place prize<br>(Team of 3)",
        org: "TELUS/IEEE",
        value: "$3,000"
    });
    awards_entry({
        date: "07/2016",
        award: "Summer Program in Taiwan",
        org: "CIHR",
        value: "$5,000<br>+ 50,000 NTD"
    });
    awards_entry({
        date: "11/2015",
        award: "SportsHack Competition – National 3rd place<br>(Team of 4)",
        org: "IBM",
        value: "$1,000"
    });
    awards_entry({
        date: "09/2015",
        award: "Canada Graduate Scholarships – CGS-M",
        org: "NSERC",
        value: "$17,500"
    });
    awards_entry({
        date: "05/2015",
        award: "GSAT Summer Scholarship",
        org: "UBC",
        value: "$3,600"
    });
    awards_entry({
        date: "05/2015",
        award: "Annual Scientific Meeting Travel award",
        org: "TFRI",
        value: "$1,500"
    });
    awards_entry({
        date: "11/2014",
        award: "Genomics: the Power & the Promise Travel award",
        org: "Genome Canada",
        value: "$2,000"
    });
    awards_entry({
        date: "05/2012",
        award: "Undergraduate Summer Research Award",
        org: "NSERC",
        value: "$4,500"
    });
    awards_entry({
        date: "09/2010",
        award: "BC Government Scholarship",
        org: "Government of BC",
        value: "$1,000"
    });
    awards_entry({
        date: "09/2010",
        award: "President’s Entrance Scholarship",
        org: "UBC",
        value: "$2,500"
    });

    projects_entry({
        id: "id_SafeWay",
        image: "https://vancouver.ca/images/cov/feature/vanquish-hackathon-landing.jpg",
        title: "Safe Way",
        company: "<a href='https://vancouver.ca/streets-transportation/vanquish-collisions-hackathon.aspx' target = '_blank'>Vanquish Collisons Hackathon</a>",
        date: "09/2018",
        details: "A mobile-first responsive web functioning app that helps children and seniors route around dangerous intersections when walking and an integrated voice assistant that warns them to be extra cautious if they approach one. Built using flask (python) and JS. <br><br>Our team of 4 placed 1st out of 28 teams, netting $5000 in prize money."
    });
    projects_entry({
        id: "id_noteai",
        image: "img/noteai.png",
        title: "NoteAI",
        company: "<a href='https://eduhacks.com/' target = '_blank'>Eduhacks</a>",
        date: "09/2017",
        details: "A natural language processor that summarizes key sentences from long walls of text (aka tl;dr bot). Built using flask and gensim (python)."
    });
    projects_entry({
        id: "id_safersurrey",
        image: "img/safersurrey.png",
        title: "SaferSurrey",
        company: "<a href='http://vancouver.ieee.ca/2016/11/10/2016_datathon/' target = '_blank'>TELUS/IEEE Datathon</a>",
        date: "11/2016",
        details: "Using publicly available crime data, we trained a Random Forest (RF) classifier to predict the likelihood of a crime happening given a location, date, and time of day. Our team generated a front-end google maps powered visualization tool hooked up to an API service (flask) that ran the RF model in the cloud (in this case we used Azure). <br><br>Our team of 3 placed 1st out of 20 teams at the 2016 TELUS/IEEE Datathon, netting $3000 in prize money."
    });
    projects_entry({
        id: "id_impactreplays",
        image: "img/impactreplays.png",
        title: "Impact Replays",
        company: "<a href='http://sportshackweekend.org/ca/2015/#winners' target = '_blank'>SportsHack 2015</a>",
        date: "11/2015",
        details: "In a team of 4, we produced Impact Replays, a football data visualization app built entirely in Shiny (in R). I led the team with the overall vision, while also developing the user interface in photoshop and contributing heavily to the business proposal. <br><br>We placed 3rd out of 60 teams nationally at IBM Sportshack 2015, netting $1000 in prize money. <a href='https://daattali.com/shiny/cfl/' target = '_blank'>daattali.com/shiny/cfl</a>"
    });
      projects_entry({
        id: "id_CTLThackathon",
        image: "img/ctltlogo.png",
        title: "Characterization of Classroom Activities",
        company: "<a href='https://ctlt.ubc.ca/2015/11/10/students-crack-data-at-learning-analytics-hackathon/' target = '_blank'>Learning Analytics Hackathon</a>",
        date: "10/2015",
        details: "In a team of 4, we parsed data of classroom activities from > 50 excel sheets, aggregated them, and performed exploratory data analysis and hierarchical clustering. We identified the sequences of classroom activites (e.g. lecture, question, discussion) that correlated with higher knowledge retention (measured from a pre-test and compared to a post-test)."
    });
  
    experience_entry({
        id: "id_EY",
        image: "https://www.seeklogo.net/wp-content/uploads/2014/06/ernst-young-vector-logo.png",
        title: "Consultant -> Senior Consultant",
        company: "<a href='https://www.ey.com/en_gl' target='_blank'>Ernst & Young</a>",
        date: "02/2018 - Present (1 year)",
        details: "I've been involved in many engagements ranging from data governance, data analytics, technology implementation, and automation. <br>\
- In the case of Data Analytics, I have solved basic problems ranging from word counts to advanced problems such as image recognition from social media. To solve these problems, I use unsupervised and supervised learning methods within R (tidyverse, 4 years exp) and Python (flask, pandas, minimal tensorflow, 2 years exp), and a variety of industry leading tools and APIs (such as Watson or Azure).<br>\
- In recognition of my excellent performance, I was promoted to Senior Consultant within 5 months of joining EY (typically requires a minimum of 1 year)."
    });
    experience_entry({
        id: "id_recruitmate",
        image: "img/animatedlogo.gif",
        title: "Co-Founder and \"Tech Guy\"",
        company: "<a href='http://getrecruitmate.com' target='_blank'>Recruitmate</a>",
        date: "10/2016 - 10/2017 (1 year)",
        details: "(On weekends)<br> \
- Designed and built a basic front-end interface in HTML/CSS. Added interactivity using javascript (JQuery). <br>\
- Built a backend application pipeline which parses web pages using selenium in python. Currently, this is hosted on an EC2 server (AWS). <br>\
- Created an API service in Flask (python) to serve search results. Deployed using ElasticBeanstalk (AWS)"
    });
    experience_entry({
        id: "id_dssg",
        image: "img/ubclogo.png",
        title: "Fellow, Data Science for Social Good",
        company: "University of British Columbia",
        date: "05/2017 - 08/2017 (16 weeks)",
        details: "(Full time. Lead a group of 4) <br>\
- Came up with the overall vision and assigned tasks taking into account each team member's strengths and weaknesses<br>\
- Extracted, transformed, and loaded publically available datasets (e.g. National Household Surveys) into Google Sheets (as a makeshift database).<br>\
- Built a visualization tool (<a href='http://visualsurrey.huitony.com/' target='_blank'>http://visualsurrey.huitony.com/</a>) in Javascript, HTML/CSS, and automatically updates the front-end visualizations whenever the main Google Sheets \"backend\" is updated via a RESTful API backend built in Flask (python). <br>\
- Defined \"clusters\" of neighbourhoods with high degrees of similarity using hierarchical clustering while taking account redundant variables with principal components analysis."
    });
    experience_entry({
        id: "id_tutor",
        image: "img/laptopicon.png",
        title: "Tutor",
        date: "01/2016 - Present (3 years)",
        details: "Tutored undergraduate students in intermediate genetics (2), introductory statistics (3), computational biology (2), and 2 PhD level students in data science"
    });
    experience_entry({
        id: "id_ctlt",
        image: "img/ctltlogo.png",
        title: "Data Scientist",
        company: "UBC Centre for Teaching, Learning and Technology",
        date: "09/2016 - 03/2017 (7 months)",
        details: "(Part time on select afternoons and weekends. Reported to the Director of UBC’s research and evaluation of teaching and learning) <br>\
- Wrote simple and complex SQL queries to extract event data of online UBC courses from EDX, all hosted on Google BigQuery<br>\
- Maintained interactive Jupyter notebooks used as \"dashboards\" for instructors<br>\
- Scraped and cleaned event data to analyze what students do after coming back to the course from a month-long break<br>\
- Performed unsupervised clustering of student activity to identify different \"classes\" of students<br>\
- Analyzing and summarized the activity of students on videos to identify videos that were highly engaging and not very engaging"
    });

    experience_entry({
        id: "id_datasense",
        image: "img/datasense.png",
        title: "Founder and President",
        company: "<a href='http://makedatasense.ca' target='_blank'>DataSense</a>",
        date: "09/2015 - 03/2017 (1 year 7 months)",
        details: "Founder and President of DataSense, an organization dedicated to building a hub for Data Science in Vancouver. <br> - Organized data science seminars with local and global companies (including Google, IBM and Facebook) that attracted over 1000 RSVPs. <br> \
- Hosted Data Science competitions with student teams and sponsor companies (including Mobify and the City of Vancouver). These competitions challenge students to analyze a given dataset and present their findings to a live audience. <br> \
- Indirectly placed 5 students (and counting!) into data-related jobs from our events and our website."
    });

    experience_entry({
        id: "id_oxford",
        image: "img/oxford.png",
        title: "Summer Research Student",
        company: "<a href='http://www.imm.ox.ac.uk/home' target='_blank'>Weatherall Institute of Molecular Medicine - University of Oxford</a>",
        date: "May 2013 - August 2013 (4 months)",
        details: "- Self-directed original research on identifying the receptor for a relatively new immune protein <br> \
- Published a paper as 4th author in BMC biotechnology"
    });

    // Skills
    skills_entry({
        image: "img/Rlogo.png",
        title: "4 years experience",
        details: "Modern R programming for data cleaning and visualization in <b>tidyverse</b>, including <b>dplyr and ggplot</b>"
    });
    skills_entry({
        image: "img/bash.png",
        title: "3 years experience",
        details: "Fluent in <b>bash</b> and <b>GNU tools</b> for data processing. Also used to connect to remote servers (cloud computing)."
    })
    skills_entry({
        image: "img/pythonlogo.png",
        title: "2 years experience",
        details: "Comprehensive python programming - <b>pandas, scikit-learn</b> (for data science), <b>gensim</b> (for natural language processing), and <b>flask</b> (for web development and RESTful APIs)"
    });
    skills_entry({
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/CSS3_and_HTML5_logos_and_wordmarks.svg/150px-CSS3_and_HTML5_logos_and_wordmarks.svg.png",
        title: "2 years experience",
        details: "Modern web development in HTML and CSS, focusing on mobile-first responsive design"
    })
    skills_entry({
        image: "img/javascript.png",
        title: "2 year experience",
        details: "API calls, JSON manipulation, and advanced website interactivity with jQuery."
    })
    skills_entry({
        image: "img/sql.png",
        title: "1 year experience",
        details: "SQL queries for MySQL and Google BigQuery"
    })
    // Initial animations
    $('#left_side').removeClass('initial', 1000, function() {
        $('.image_dim').addClass('load', 3000)
        $('#right_side').removeAttr("style")
        $('#intro_box').addClass('load', 800, 'easeInCubic', function() {
            $('[data-toggle="popover"]').popover();
            $('#contact_buttons').fadeTo(1000, 1)
            $('#right_side_content').removeClass('initial', 1000, 'easeOutCubic', function() {
                // Make contact nav bar stay put
                $("#contact_buttons").affix({
                    offset: {
                        top: $("#contact_buttons").offset().top - 50
                    }
                });
            })
        })

    })
})
