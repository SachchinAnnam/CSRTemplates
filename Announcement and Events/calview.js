/*************************
** Project                  :       SharePoint Online
** File                     :       calView.js
** Name                     :       Calendar view
** Description              :       This javascript is used to create customised view for calendar.
** Authorizer               :       NA
** Date                     :        
** Modified On              :      
************************** 
** Change History 
************************** 
** Version  Date               Author                   Description 
** --  --------           -------                  ------------------------------------  
** 01  7/06/2017         Sachchin Annam            This javascript is used to create customised view for calendar.

**************************/
(function () { 
 
    // jQuery library is required in this sample 
    // Fallback to loading jQuery from a CDN path if the local is unavailable 
        (window.load || document.write('<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.2.0/css/all.css"/>')); 
        (window.load || document.write('<link rel="stylesheet" href="/sites/Apps/SiteAssets/Events/calViewColor.css"/>')); 

    // Create object that have the context information about the field that we want to change it's output render  
    var calViewCtx = {}; 
    calViewCtx.Templates = {}; 
 
    // Be careful when add the header for the template, because it's will break the default list view render 
    calViewCtx.Templates.Header = "<div class='eventsContainer' id=''><h2 class='heading'><i class='fa fa-calendar-alt' aria-hidden='true'></i> Events</h2><div class='listItems'>"; 
    calViewCtx.Templates.Footer = "</div></div></div>";

    //template ID of Custom List - this line will make sure that CSR will render for custom list only
    calViewCtx.ListTemplateType = 106;

 
    // Add OnPostRender event handler to add accordion click events and style 
    calViewCtx.OnPostRender = calViewOnPostRender; 
 
    // This line of code tell TemplateManager that we want to change all HTML for item row render 
    calViewCtx.Templates.Item = calviewTemplate; 
 
    SPClientTemplates.TemplateManager.RegisterTemplateOverrides(calViewCtx); 
 
})(); 
 
// This function is used for creating logic 
function calviewTemplate(ctx) {
//debugger; 
    var title = ctx.CurrentItem["Title"]; //internal name of the column
    var location = ctx.CurrentItem["Location"]; //internal name of the column
    var startDate= ctx.CurrentItem["EventDate"];
    var myDate = new Date(startDate);
	myDate.format("mm/dd/yy");
	var monthNames = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN",
  "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"
];
var month=monthNames[myDate.getMonth()];
var date = myDate.getDate();
	
      var url = String.format('{0}&amp;ID={1}', ctx.displayFormUrl, ctx.CurrentItem.ID);
 	
 	var html="<div class='Eventitems'><div class='date'><div class='day'>"+date+"</div><div class='month'>"+month+"</div></div>";
 	html+="<div class='contents'><div class='title'><a href="+url+">"+title+"</a></div><div class='location'><i title='location' class='fa fa-map-marker-alt' aria-hidden='true'></i> " +location+"</div></div></div><hr>"
 	
    // Return whole item html 
    return html//"<li><a>" + title + "</a><div>" + description + "</div></li>"; 
} 
 
function calViewOnPostRender() { 
    
}
