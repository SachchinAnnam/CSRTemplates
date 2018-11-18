(function () { 
 
    // jQuery library is required in this sample 
    // Fallback to loading jQuery from a CDN path if the local is unavailable 
   
        (window.load || document.write('<link rel="stylesheet" type="text/css" href="/sites/Apps/SiteAssets/VerticalTimeline/verticalTimeline.css">'));
        (window.load || document.write('<link rel="stylesheet" type="text/css" href="https://use.fontawesome.com/releases/v5.2.0/css/all.css">'));
		(window.load || document.write('<link href="/sites/Apps/SiteAssets/VerticalTimeline/bootstrap.min.css" rel="stylesheet" id="bootstrap-css">'));
		(window.load || document.write('<script type="text/javascript" src="/sites/Apps/SiteAssets/datatable/jquery-3.3.1.js"></script>'));
		(window.load || document.write('<script src="/sites/Apps/SiteAssets/VerticalTimeline/customjs.js" ></script>'));
        
        
        
 
    // Create object that have the context information about the field that we want to change it's output render  
    var vtContext = {}; 
    vtContext.Templates = {}; 
 
    // Be careful when add the header for the template, because it's will break the default list view render 
    vtContext.Templates.Header = "<div class='demo'><div class='container'><div class='row'><div class='col-md-12'><div class='main-timeline6'>"; 
    vtContext.Templates.Footer = "</div></div></div></div></div>"; 
    vtContext.BaseViewID = 1;
  	vtContext.ListTemplateType = 100;
 
    // Add OnPostRender event handler to add accordion click events and style 
    vtContext.OnPostRender = vtOnPostRender; 
 
    // This line of code tell TemplateManager that we want to change all HTML for item row render 
    vtContext.Templates.Item = vtTemplate; 
 
    SPClientTemplates.TemplateManager.RegisterTemplateOverrides(vtContext); 
 
})(); 
 
// This function provides the rendering logic 
function vtTemplate(ctx) { 
var itemTitle=ctx.CurrentItem["Title"];
var itemDesc=ctx.CurrentItem["Description"];
var itemIcon=ctx.CurrentItem["Icon"];
var itemDate=ctx.CurrentItem["Created"];

var html="<div class='timeline'><div class='timeline-content'><span class='year'>"+itemDate+"</span>";
html+="<div class='content-inner'><span class='icon'><i class='"+itemIcon+"'></i></span><h3 class='title'>"+itemTitle+"</h3>";
html+="<p class='description'>"+itemDesc+"</p></div></div></div>";
return html;

                        
                        
                        
                        
 } 

 
function vtOnPostRender() { 
 
  
  }