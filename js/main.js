function footer(){
	$('.fade').hover( function(){
		$(this).animate({ 
			opacity: 1
		}, 500 )
	}, function(){
		$(this).animate({ 
			opacity: 0.5
		}, 500 )
	})
	$('.fade').animate({ 
		opacity: 0.5
	}, 10 );
}

function subscribeText()
{ 
    var searchText = $("#searchText").val();
    var mailText = $("#emailAdress").val();
    
	$("#emailAdress").focus(function(){
		if( $(this).val()==mailText )
			$(this).val('');
	}).blur(function(){
		if( $(this).val()=='' )
			$(this).val(mailText);
	});
	$("#searchText").focus(function(){
		if( $(this).val()==searchText)
			$(this).val('');
	}).blur(function(){
		if( $(this).val()=='' )
			$(this).val(searchText);
	});
}
$(document).ready( function(){

     $('.menu_start').hover(function(){
			var hover_class = $(this).attr('id');
			jQuery.each( [1,2,3,4,5,6,7], function(i, n)
			{
  				$('#list'+n).removeClass('menu_over');
				$('#menu'+n+' ul').addClass('submenu_hide');
			});
			$(this).addClass('menu_over active');
			$('#'+hover_class+'_submenu').removeClass('submenu_hide');
			return false;
		}, function(){
			$(this).removeClass('menu_over active');
		});
        
        $(".productDesc ul li a").click(function()
         {
         $(".productDesc ul li.active").removeClass("active");
         $(this).parent().addClass("active");

         var classname = $(this).attr("class");

         $(".productDesc .inside div:visible").hide();
         $(".productDesc .inside div."+classname).show();

         return false;
         });
	footer();
    subscribeText();
})