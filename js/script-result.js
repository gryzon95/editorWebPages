
     $('.result').on('DOMSubtreeModified',function(){
         $('.btn-delete-item').on('click', function(){
                    console.log('remove');
                    $(this).parent().parent().remove();
                });
      
        
     });
/*var obj = $('<button class="btn btn-danger"><i class="fas fa-trash-alt"></i></button>');
$('.result').on('DOMSubtreeModified',function(){
    /*
    $('.moveable').hover(function(){
       console.log('test'); 
       
    }, function(){
        console.log('test1');
       
    });
    
    $('.moveable').on('mouseover', function(){
       console.log('mouseover' + obj); 
        $(this).append(obj);
    }).on('mouseleave', function(){
        console.log('mouseleave' + obj);
        $(obj).remove();
    });
});*/