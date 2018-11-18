(function () { 
 
    // jQuery library is required in this sample 
    // Fallback to loading jQuery from a CDN path if the local is unavailable 
   
        (window.load || document.write('<link rel="stylesheet" type="text/css" href="/sites/Apps/SiteAssets/MeetTheTeam/meetTheTeam.css">'));
 
    // Create object that have the context information about the field that we want to change it's output render  
    var meetTheTeamContext = {}; 
    meetTheTeamContext.Templates = {}; 
 
    // Be careful when add the header for the template, because it's will break the default list view render 
    meetTheTeamContext.Templates.Header = "<div id='meetTheTeam'>"; 
    meetTheTeamContext.Templates.Footer = "</div>"; 
 
    // Add OnPostRender event handler to add accordion click events and style 
    meetTheTeamContext.OnPostRender = meetTheTeamOnPostRender; 
 
    // This line of code tell TemplateManager that we want to change all HTML for item row render 
    meetTheTeamContext.Templates.Item = meetTheTeamTemplate; 
 
    SPClientTemplates.TemplateManager.RegisterTemplateOverrides(meetTheTeamContext); 
 
})(); 
 
// This function provides the rendering logic 
function meetTheTeamTemplate(ctx) { 
	var colorTheme = ctx.CurrentItem["ColorTheme"];
    var users = ctx.CurrentItem["Employee_x0020_Name"];
    for(i = 0; i < users.length; i++){
       // access department information of user or group
    var userDepartment = users[i].department;
 
    // access email address of user or group
    var userEmail = users[i].email;
 
 
    // access job title of user or group
    var userJobTitle = users[i].jobTitle;

    // access display name of user or group
    var userName = users[i].title;
    userName=userName.replace(",","");
    }
    var picture=ctx.CurrentItem["Picture"];
    //var imgSrc = $(picture).find('img:first').attr('src');  


    	var item="<div class='card'><img src='"+picture+"' alt='"+userName+"' style='width:100%'>";
    	item+="<div class='container "+colorTheme+"'>";
    	item+="<p class='name'><b>"+userName+"</b></p>";
    	item+="<p class='jobTitle'>"+userJobTitle+" | "+userDepartment+"</p>";
    	item+="<p class='jobTitle'><a href='mailto:"+userEmail+"'>"+userEmail+"</a></p>";
    	item+="</div>";
    	item+="</div>"
		return item;
                    } 

 
function meetTheTeamOnPostRender() { 
 
  
  }