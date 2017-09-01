var bio = {
	"name": "Irene Florez",
	"role": "DATA | STRATEGY | CODE",
	"contacts": {
			"mobile": "n/a",
			"email": "n/a",
			"github": "github.com/IreneFlorez",
			"twitter": "@IreneFlorez",
			"location": "San Francisco, CA",
	},
	"welcomeMsg": "Managing the launch of digital solutions, systematically",
	"bioPic": "images/profile.png",
	"skills": ["Javascript", "python", "data analysis", "user-focused design"]
};

bio.display = function(){
	var formattedName = HTMLheaderName.replace("%data%", bio.name);
	var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
	var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
	var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
	var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
	var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
	var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
	var formattedBioPic = HTMLbioPic.replace("%data%", bio["bioPic"]);
	var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio["welcomeMsg"]);

	
	$("#header").prepend(formattedName + formattedRole);
	$("#header").append(formattedBioPic);	
	$("#header").append(formattedWelcomeMsg);
	$("#topContacts").append(formattedMobile);
	$("#topContacts").append(formattedEmail);
	$("#topContacts").append(formattedGithub);
	$("#topContacts").append(formattedTwitter);	
	$("#topContacts").append(formattedLocation);
	$("#footerContacts").append(formattedMobile);
	$("#footerContacts").append(formattedEmail);
	$("#footerContacts").append(formattedGithub);
	$("#footerContacts").append(formattedTwitter);	
	$("#footerContacts").append(formattedLocation);

	if (bio.skills.length > 0) {
	    	$("#header").append(HTMLskillsStart);

	    	// for (var i = 0, len = bio.skills.length; i < len; i++) {
	    	// 	var formattedSkills = HTMLskills.replace("%data%", bio.skills[i]);

	    	for(i in bio.skills) {
				$("#skills").append(HTMLskills.replace("%data%", bio.skills[i]));
			}
	}
}

var work = {
	"jobs": [
		
		{	"employer": "We Vote",
			"title": "Engineering & Analytics Intern",
			"location": "San Francisco, CA",
			"dates": "January 2017 - Present",
			"description":"Working on a Django/Python server that uses a PostGresSQL database. Currently developing an impact dashboard."
		},
		{	"employer": "Udacity",
			"title": "Front End Developer (nanodegree)",
			"location": "San Francisco, CA",
			"dates": "June 2017 - Present",
			"description": "Building projects using HTML, CSS, Javascript, and Git."
		},
		{	"employer": "[M] Mothercoders",
			"title": "Front End Developer Trainee",
			"location": "San Francisco, CA",
			"dates": "September, 2016 - February, 2017",
			"description": "Built a website using CSS and JavaScript."
		},
	]
};		

work.display = function(){
	if(work.jobs.length > 0) {
		$("#workExperience").append(HTMLworkStart);
		
		for(job in work.jobs) {
			var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
			
			var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
				$(".work-entry:last").append(formattedTitle);
			
			var formattedEmployerWorkTitle = formattedEmployer + formattedTitle;
			
			var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
				$(".work-entry:last").append(formattedLocation);
			
			var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
				$(".work-entry:last").append(formattedDates);
			
			var formattedWorkDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
				$(".work-entry:last").append(formattedWorkDescription);
		}
	}
}

var projects = {
	"projects": [
		{	"title": "Project2",
			"dates": "Summer, 2017",
			"description": "Portfolio Project",
			"images": ["images/profile.png"],
		},
		{	"title": "Project1",
			"dates": "Summer, 2017",
			"description": "Resume Project",
			"images": ["images/profile.png"],
		}
		]
	}

projects.display = function(){
	for (project in projects.projects){
	$("#projects").append(HTMLprojectStart);
	
	var formattedTitle=HTMLprojectTitle.replace("%data%", projects.projects[project].title);
	$(".project-entry:last").append(formattedTitle);

	var formattedDates=HTMLprojectDates.replace("%data%", projects.projects[project].dates);
	$(".project-entry:last").append(formattedDates);

	var formattedDescription=HTMLprojectDescription.replace("%data%", projects.projects[project].description);
	$(".project-entry:last").append(formattedDescription);

		if (projects.projects[project].images.length>0){
			for (image in projects.projects[project].images) {
				var formattedImage=HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
				$(".project-entry:last").append(formattedImage);
			}
		}
	}
};

var education = {
	"schools": [
		
		{ 	"name": "Mills College",
			"location": "Oakland, CA",
			"degree": "B.A.(Hon) International Relations",
			"majors": "International Relations (game theory focus)",
			"dates": "n/a",
		},		
		
		{	"name": "Tokyo University of Foreign Studies",
			"location": "Tokyo, Japan",
			"degree": "Year abroad",
			"majors": "Development Economics, Japanese Culture",
			"dates": "n/a",
		},		

		{ 	"name": "Knight Digital Media Center (KDMC) at University of California, Berkeley",
			"location": "Berkeley, CA",
			"degree": "Data Journalism Workshop Series",
			"majors": "Data, QGIS & Fusion Table",
			"dates": "n/a",
		}	
	],

	"onlineCourses": [
		{ 	"school": "Udacity",
			"title": "Front End Web Development",
			"dates": "June, 2017",
			"url": "https://www.udacity.com"
		}
	]
};

education.display = function() {
	if(education.schools.length > 0 || education.onlineCourses.length > 0) {
		for(i in education.schools) {
			$("#education").append(HTMLschoolStart);
			var formattedName = HTMLschoolName.replace("%data%", education.schools[i].name);
        	var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[i].degree);
	        var formattedSchoolDates = HTMLschoolDates.replace("%data%", education.schools[i].dates);
	        var formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[i].location);	
			var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", education.schools[i].majors);
			$('#education').append(HTMLschoolStart);
			$(".education-entry:last").append(formattedName + formattedDegree);
			$(".education-entry:last").append(formattedSchoolDates);
			$(".education-entry:last").append(formattedLocation);
			$(".education-entry:last").append(formattedSchoolMajor);
		}

		if(education.onlineCourses.length > 0) {
			for(i in education.onlineCourses) {		
				$("#education").append(HTMLonlineClasses);		
				var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[i].title);
				var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[i].school);
				var formattedOnlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[i].completed);
				var formattedOnlineURL = HTMLonlineURL.replace("%data%", education.onlineCourses[i].url);

				$(".education-entry:last").append(formattedOnlineTitle + formattedOnlineSchool);
				$(".education-entry:last").append(formattedOnlineDates);
				$(".education-entry:last").append(formattedOnlineURL);
			}
		}
	}
}

function locationizer(work_obj){
	var locationArray = [];

	for (job in work_obj.jobs){
		var newLocation = work_obj.jobs[job].location;
		locationArray.push(newLocation);
	}
	return locationArray;
}

//Map
$("#mapDiv").append(googleMap);

// Call bio, work, projects and education functions
bio.display();
work.display();
projects.display();
education.display();

