/*
Author: Sachin Annam
Description: CSR Template for Meet The Team App in Material Design Approach

*/
(function () { 
 
    // jQuery library is required in this sample 
    // Fallback to loading jQuery from a CDN path if the local is unavailable 
   
    (window.load || document.write('<link rel="stylesheet" type="text/css" href="/sites/Apps/SiteAssets/MeetTheTeam/bootstrap.css">'));
    (window.load || document.write('<link rel="stylesheet" type="text/css" href="https://use.fontawesome.com/releases/v5.2.0/css/all.css">'));
    (window.load || document.write('<link rel="stylesheet" type="text/css" href="/sites/Apps/SiteAssets/MeetTheTeam/material-cards.css">'));
   (window.jQuery || document.write('<script src="/sites/Apps/SiteAssets/datatable/jquery-3.3.1.js"><\/script>')); 
    (window.jQuery || document.write('<script src="/sites/Apps/SiteAssets/MeetTheTeam/bootstrap.min.js"><\/script>'));
    (window.load || document.write('<link rel="stylesheet" type="text/css" href="/sites/Apps/SiteAssets/MeetTheTeam/meetTheTeamBootstrap.css">'));

    
    
  

       



 
    // Create object that have the context information about the field that we want to change it's output render  
    var meetTheTeamContext = {}; 
    meetTheTeamContext.Templates = {}; 
 
    // Be careful when add the header for the template, because it's will break the default list view render 
    meetTheTeamContext.Templates.Header = "<div class='row active-with-click'>"; 
    meetTheTeamContext.Templates.Footer = "</div>"; 
 
    // Add OnPostRender event handler to add accordion click events and style 
    meetTheTeamContext.OnPostRender = meetTheTeamOnPostRender; 
 
    // This line of code tell TemplateManager that we want to change all HTML for item row render 
    meetTheTeamContext.Templates.Item = meetTheTeamTemplate; 
 
    SPClientTemplates.TemplateManager.RegisterTemplateOverrides(meetTheTeamContext); 
 
})(); 
 
// This function provides the rendering logic 
function meetTheTeamTemplate(ctx) { 
	var title=ctx.CurrentItem["Title"];
	var colorTheme = ctx.CurrentItem["ColorTheme"];
	var extn = ctx.CurrentItem["Extension"];
	var description=ctx.CurrentItem["Description"];
	var longDescription=ctx.CurrentItem["Description"];

	description= description.replace(/^([\s\S]{256}\S*)[\s\S]*/, "$1")+" ...";
	var url = String.format('{0}&amp;ID={1}', ctx.displayFormUrl, ctx.CurrentItem.ID);  


    var users = ctx.CurrentItem["Employee_x0020_Name"];
    for(i = 0; i < users.length; i++)
    {
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
    			var item="<div class='col-md-4 col-sm-6 col-xs-12'>";
			item+="<article class='material-card "+colorTheme+"'>";
			item+="<h2><span>"+userName+"</span><strong><i class='fa fa-fw fa-briefcase'></i>" +userJobTitle+" | "+userDepartment+"</strong></h2>"
			item+= "<div class='mc-content'>";
			item+="<div class='img-container'><img class='img-responsive' src='"+picture+"'></div>";
			item+="<div class='mc-description'>"+description+"</br> <button type='button' class='btn-sm btn-info "+colorTheme+"' data-toggle='modal' data-target='#myModal"+ctx.CurrentItem.ID+"'>Read More</button></br></div>";
			item+="<div class='modal fade' id='myModal"+ctx.CurrentItem.ID+"' role='dialog'><div class='modal-dialog modal-lg'><div class='modal-content'><div class='modal-header'><button type='button' class='close' data-dismiss='modal'>&times;</button><h4 class='modal-title'>About "+userName+"</h4></div><div class='modal-body'><p>"+longDescription+"</p></div><div class='modal-footer'><button type='button' class='btn btn-danger' data-dismiss='modal'>Close</button></div></div></div></div>"
			item+= "</div>";//end of mc-content
			item+="<a class='mc-btn-action'><i class='fa fa-bars'></i></a>";
			item+="<div class='mc-footer'><a data-toggle='tooltip' href='mailto:"+userEmail+"' data-placement='top' title='"+userEmail+"' class='fa fa-fw fa-envelope'></a></div>";
			item+="</article>";//end of article tag
			item+="</div>";//end of col-md-4

   	
	
	return item;

                    } 

 
function meetTheTeamOnPostRender() { 
  
     
	$(function() {
	 				
        			$('.material-card > .mc-btn-action').click(function () {
        			            		var card = $(this).parent('.material-card');
            		var icon = $(this).children('i');
            		icon.addClass('fa-spin-fast');
            		

            		if (card.hasClass('mc-active')) {
                	card.removeClass('mc-active');

               	 	window.setTimeout(function() {
                    icon
                        .removeClass('fa-arrow-left')
                        .removeClass('fa-spin-fast')
                        .addClass('fa-bars');

                	}, 800);
            	} else {
                card.addClass('mc-active');

                window.setTimeout(function() {
                    icon
                        .removeClass('fa-bars')
                        .removeClass('fa-spin-fast')
                        .addClass('fa-arrow-left');

                }, 800);
            }
        });
    });
   
 
  
  }