(function () { 
 
    // jQuery library is required in this sample 
    // Fallback to loading jQuery from a CDN path if the local is unavailable 
   
        
        (window.load || document.write('<link rel="stylesheet" type="text/css" href="https://use.fontawesome.com/releases/v5.2.0/css/all.css">'));
		(window.load || document.write('<link href="/sites/Apps/SiteAssets/ImageGrid/bootstrap.min.css" rel="stylesheet" id="bootstrap-css">'));
		(window.load || document.write('<link href="/sites/Apps/SiteAssets/ImageGrid/imageGrid.css" rel="stylesheet">'));
		(window.load || document.write('<script type="text/javascript" src="/sites/Apps/SiteAssets/datatable/jquery-3.3.1.js"></script>'));
		
        
        
        
 
    // Create object that have the context information about the field that we want to change it's output render  
    var imageGrideContext = {}; 
    imageGrideContext.Templates = {}; 
 		
    // Be careful when add the header for the template, because it's will break the default list view render 
    imageGrideContext.Templates.Header = "<div class='well well-sm'><strong>Display </strong><div class='btn-group'><a href='#' id='list' class='btn btn-default btn-sm'><i class='fa fa-list'></i> List</a> <a href='#' id='grid' class='btn btn-default btn-sm'><i class='fa fa-th'></i> Grid</a></div></div><div id='products' class='row list-group'>"; 
    imageGrideContext.Templates.Footer = "</div></div>"; 
    imageGrideContext.BaseViewID = 1;
  	imageGrideContext.ListTemplateType = 109;
 
    // Add OnPostRender event handler to add accordion click events and style 
    imageGrideContext.OnPostRender = imageGrideOnPostRender; 
 
    // This line of code tell TemplateManager that we want to change all HTML for item row render 
    imageGrideContext.Templates.Item = imageGrideTemplate; 
 
    SPClientTemplates.TemplateManager.RegisterTemplateOverrides(imageGrideContext); 
 
})(); 
 
// This function provides the rendering logic 
function imageGrideTemplate(ctx) { 
var itemTitle=ctx.CurrentItem["Title"];
var itemDesc=ctx.CurrentItem["Description"];
var itemURL=ctx.CurrentItem["FileRef"];
 var url = String.format('{0}&amp;ID={1}', ctx.displayFormUrl, ctx.CurrentItem.ID);

var users = ctx.CurrentItem["Author"];
    for(i = 0; i < users.length; i++){
           // access display name of user or group
    var userName = users[i].title;

    }


var  html="<div class='item  col-xs-4 col-lg-4'><div class='thumbnail'><img class='group list-group-image' src='"+itemURL+"' alt='' />";
html+="<div class='caption'><h4 class='group inner list-group-item-heading'>"+itemTitle+"</h4>";
html+="<p class='group inner list-group-item-text'>"+itemDesc+"</p>";
html+="<div class='row'><div class='col-xs-12 col-md-12'><h5>Uploaded By: "+userName+"</h5></div></div>";
html+="<div class='row'><div class='col-xs-12 col-md-12'><a target='_blank' class='btn btn-primary btn-block' href="+url+">Click here to view details</a></div></div></div></div></div>";


return html;
                       
                        
 } 

 
function imageGrideOnPostRender() { 


$(document).ready(function() {
    $('#list').click(function(event){event.preventDefault();$('#products .item').addClass('list-group-item');});
    $('#grid').click(function(event){event.preventDefault();$('#products .item').removeClass('list-group-item');$('#products .item').addClass('grid-group-item');});
});
 
  
  }