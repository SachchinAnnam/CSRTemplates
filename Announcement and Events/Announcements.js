(function () { 

    (window.load || document.write('<link rel="stylesheet" type="text/css" href="/sites/Apps/SiteAssets/Announcement/Announcements.css">'));
    (window.load || document.write('<link rel="stylesheet" type="text/css" href="https://use.fontawesome.com/releases/v5.2.0/css/all.css">'));

   
	var itemCtx = {};
	itemCtx.Templates = {};
	
        itemCtx.Templates.Header = "<div class='announcementContainer' id='announcements'><h2 ><i class='fa fa-bullhorn' aria-hidden='true'></i> Announcments</h2><hr />";
        itemCtx.Templates.Item = ItemOverrideFun;
        itemCtx.Templates.Footer = "</div>";

	itemCtx.BaseViewID = 1;
	itemCtx.ListTemplateType = 104;
	
	SPClientTemplates.TemplateManager.RegisterTemplateOverrides(itemCtx);

})(); 


function ItemOverrideFun(ctx) {
	
  
		var _announcementTitle = ctx.CurrentItem.Title;
		var _announcementID = ctx.CurrentItem.ID;
		var createdAt=ctx.CurrentItem.Created;

		var users = ctx.CurrentItem["Author"];
		for(i = 0; i < users.length; i++)
		{
    		// access display name of user or group
    		var curUserName = users[i].title;
 		}
		var url = String.format('{0}&amp;ID={1}', ctx.displayFormUrl, ctx.CurrentItem.ID);
		//debugger;
		var html="<div class='items'>";
		html+="<a href="+url+">"+_announcementTitle+"</a><br /><br />";
		html+="<div class='itemMetadata'> <span><i title='Created at' class='fa fa-clock' aria-hidden='true'></i></span>&nbsp;<span class='createdAt'>"+createdAt+"</span> &nbsp;&nbsp;&nbsp; <span><i title='Created by' class='fa fa-user' aria-hidden='true'></i></span>&nbsp;<span class='author'>"+curUserName+"</span></div></div><hr class='separator' />";
        return html





}