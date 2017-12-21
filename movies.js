$(document).ready(function()
{	
    i = 0;
    
    $('.mode').click(function()
    {
        $('.liBtn').removeClass('active');
        $('[data-current='+$(this).data('current')+']').addClass('active');
        $('.content-li').hide();
        $('#'+$(this).data('current')).fadeIn(1000);
    });
    
    $('.liBtn').click(function()
    {
        $('.liBtn').removeClass('active');
        $(this).addClass('active');
        $('.content-li').hide();
        $('#'+$(this).data('current')).fadeIn(1000);
    });
    
    $('.qAnswer').click(function()
    {
        $('#q'+i).hide();
        i+=1;
        $('#q'+i).fadeIn(1000);
        if(i>=3)
        {
            $('#draftSelection').fadeIn(1000);
        }
    });
    
    $('#randomBtn').click(function()
    {
        $('#randomSelection').hide();
        $('#randomSelection').fadeIn(1000);
    });
});