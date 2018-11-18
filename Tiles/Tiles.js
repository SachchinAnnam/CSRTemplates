(function () { 
 
    // jQuery library is required in this sample 
    // Fallback to loading jQuery from a CDN path if the local is unavailable 
   
        
        (window.load || document.write('<link rel="stylesheet" type="text/css" href="https://use.fontawesome.com/releases/v5.2.0/css/all.css">'));
		(window.load || document.write('<link href="/sites/Apps/SiteAssets/TilesView/bootstrap.min.css" rel="stylesheet" id="bootstrap-css">'));
		(window.load || document.write('<link href="/sites/Apps/SiteAssets/TilesView/Tiles.css" rel="stylesheet">'));
		(window.load || document.write('<script type="text/javascript" src="/sites/Apps/SiteAssets/datatable/jquery-3.3.1.js"></script>'));
		
        
        
        
 
    // Create object that have the context information about the field that we want to change it's output render  
    var tileContext = {}; 
    tileContext.Templates = {}; 
 		
    // Be careful when add the header for the template, because it's will break the default list view render 
    tileContext.Templates.Header = "<section><div class='container'><div class='row mbr-justify-content-center'>"; 
    tileContext.Templates.Footer = "</div></div></section>"; 
    tileContext.BaseViewID = 1;
  	tileContext.ListTemplateType = 103;
 
    // Add OnPostRender event handler to add accordion click events and style 
    tileContext.OnPostRender = tileOnPostRender; 
 
    // This line of code tell TemplateManager that we want to change all HTML for item row render 
    tileContext.Templates.Item = tileTemplate; 
 
    SPClientTemplates.TemplateManager.RegisterTemplateOverrides(tileContext); 
 
})(); 
 
// This function provides the rendering logic 
function tileTemplate(ctx) { 
var itemURL=ctx.CurrentItem["URL"];
var linkDesc =ctx.CurrentItem["URL.desc"];
var itemNotes=ctx.CurrentItem["Comments"];
var itemIcon=ctx.CurrentItem["Icon"];
var itemColor=ctx.CurrentItem["Color"];
 

var html="<div class='col-lg-6 mbr-col-md-10'><div class='wrap  "+itemColor+"'><div class='ico-wrap'><i class='"+itemIcon+"'></i></div>";
html+="<div class='text-wrap vcenter'><h2 class='mbr-fonts-style mbr-bold mbr-section-title3 display-5'>"+linkDesc+"</h2><p class='mbr-fonts-style text1 mbr-text display-6'>"+itemNotes+"</p></div></div></div>";


return html;
                       
                        
 } 

 
function tileOnPostRender() { 


 
  
  }