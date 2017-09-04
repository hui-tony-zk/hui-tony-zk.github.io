$(document).ready(function() {
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
                                    <p><a href="#!" data-toggle="collapse" data-parent="#experience_list" data-target="#{{:id}}">Show/hide details</a></p>\
                                </div>\
                                </div>\
                                    <div id="{{:id}}" class="accordion-body collapse"> \
                                    	<p class="well">{{:details}}</p> \
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
        $("#experience_list").append(experience_template.render(data)); // Insert HTML string into DOM
    };
    experience_entry({
    	id: "id_recruitmate",
        image: "http://getrecruitmate.com/img/animatedlogo.gif",
        title: "Co-Founder and CTO",
        company: "Recruitmate",
        date: "10/2016 - Present (1 year)",
        details: "(On weekends)<br> \
- Designed and built a basic front-end interface in HTML/CSS. Added interactivity using javascript (JQuery). <br>\
- Built a backend application pipeline which parses web pages using selenium in python. Currently, this is hosted on an EC2 server (AWS). <br>\
- Created an API service in Flask (python) to serve search results. Deployed using ElasticBeanstalk (AWS)"
    });
    experience_entry({
    	id: "id_dssg",
        image: "img/ubclogo.png",
        title: "Data Science for Social good Fellow",
        company: "University of British Columbia",
        date: "05/2017 - 08/2017 (16 weeks)",
        details: "(Full time. Lead a group of 4) <br>\
- Came up with the overall vision and assigned tasks taking into account each team member's strengths and weaknesses<br>\
- Extracted, transformed, and loaded publically available datasets (e.g. National Household Surveys) into Google Sheets (as a makeshift database).<br>\
- Built a visualization tool (http://bit.ly/visualsurrey) in Javascript, HTML/CSS, and automatically updates the front-end visualizations whenever the main Google Sheets \"backend\" is updated via a RESTful API backend built in Flask (python). <br>\
- Defined \"clusters\" of neighbourhoods with high degrees of similarity using hierarchical clustering while taking account redundant variables with principal components analysis."
    });
    experience_entry({
    	id: "id_tutor",
        image: "img/laptopicon.png",
        title: "Tutor",
        date: "01/2016 - 07/2017 (1 year 7 months)",
        details: "Tutored university-level students: in 2 intermediate genetics, 3 in introductory statistics, and 2 in computational biology"
    });
    experience_entry({
    	id: "id_ctlt",
        image: "img/ctltlogo.png",
        title: "Graduate Research Assistant",
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
    	id: "id_rapture",
        image: "img/rapture.png",
        title: "Data Analyst",
        company: "Rapture Events",
        date: "03/2016 - 08/2016 (6 months)",
        details: "(Part time on select afternoons and weekends. Reported directly to the CEO) <br> \
- Analyzed geographical locations of fans of musicians on soundcloud and facebook with API calls and plotting the results in R. Also turned this into a webapp using R/Shiny to allow other members of the company to use this tool.<br> \
- Fetched lists of university facebook groups (via API calls) to identify new avenues of marketing Rapture related events.<br> \
- Analyzed popularity and attendance of nightlife-related facebook events to identify the best weekdays to host events<br> \
- Set up and managed a basic EC2 instance to host dashboards, run overnight computations, and act as a central storage interface for end-users.<br> \
- Managed weekly Google Analytics reports of Rapture website traffic"
    });

    experience_entry({
    	id: "id_oxford",
        image: "img/oxford.png",
        title: "Summer Research Student",
        company: "<a href='http://www.imm.ox.ac.uk/home' target='_blank'>Weatherall Institute of Molecular Medicine - University of Oxford</a>",
        date: "May 2013 - August 2013 (4 months)",
        details: "- Self-directed original research on identifying the receptor for the relatively new chemokine CCL18 with Dr. Ling-Pei Ho and Dr. Simon Davis <br> \
- Maintained tissue culture of many cell lines and primary cells, including Jurkat T-cells, MDA-MB-231 breast cancer cells, 293T epithelial cells, primary monocytes, and many others <br> \
- Extracted peripheral blood mononuclear cells (PBMCs) from fresh blood and performed flow cytometry analysis with 6 different labeled antibodies at the same time <br> \
- Performed protein extraction from chinese hamster ovary (CHO) cell factories, and purified the protein with fast protein liquid chromatography (FPLC) <br> \
- Published a paper as 4th author in BMC biotechnology"
    });

    experience_entry({
    	id: "id_thompson",
        image: "img/ubclogo.png",
        title: "Undergraduate Research Assistant",
        company: "Life Sciences Institute - University Of British Columbia",
        date: "May 2012 - August 2012 (4 months)",
        details: "- Assisted in original research on molecular mechanisms of drug resistance in tuberculosis with Dr. Charles Thompson <br> \
- Created recombinant DNA containing various Mycobacterium drug resistance genes using molecular cloning techniques such as PCR, digestion, ligation and transformation"
    });

    // Initial animations
    $('#left_side').removeClass('initial', 1000, function() {
        $('.image_dim').addClass('load', 3000)
        $('#right_side').removeAttr("style")
        $('#intro_box').fadeTo(500, 1, function() {
            $('#right_side_content').removeClass('initial', 1000, 'easeOutCubic', function() {
                $('#contact_buttons').fadeTo(1000, 1)
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