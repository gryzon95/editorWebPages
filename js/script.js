$(document).ready(function(){

    var elementAppend ='';
    var cntElements = 0;

    $.each(elements, function(key, value){
        elementAppend += '<div class="panel panel-default"><div class="panel-heading"><h4 class="panel-title"><a class="expand-item" data-toggle="collapse" data-parent="#accordion-elements" href="#element'+cntElements+'">';
        elementAppend += '<i class="fas fa-angle-right"></i>'+value.displayName;
        elementAppend +='</a></h4></div><div id="element'+cntElements+'" class="panel-collapse collapse"><div class="panel-body"><ul id="draglistelement" class="elements">';

        $.each(value.items, function(k,v){
            console.log(v.getDisplayName());
            elementAppend += '<li draggable="true" class="element-item draggable" data-obj="' + k +'">'+v.getIcon()+' <span>'+v.getDisplayName()+'</span></li>';
        });

        elementAppend += '</ul></div></div></div>';
        cntElements++;
    });
    $(elementAppend).appendTo('#accordion-elements');






    $('.expand-item, .expand-property').on('click', function(){
       $(this).parent().parent().parent().parent().find('i').rotate({ animateTo:0});
        if($(this).attr('aria-expanded') == "false" || $(this).attr('aria-expanded') == undefined) {
            $(this).find('i').rotate({ animateTo:90});
        }
    });
    
    
    $('.property input').on('input', function(){
        var iframe = $('#resultFrame').get(0).contentWindow.document;
        
        var edited_element_id = '#'+$('#edited_element_id').val();
        var changedPropertyName = $(this).attr('name');
        var changedPropertyValue = $(this).val();

        $(iframe).find(edited_element_id).css(changedPropertyName, changedPropertyValue);
        if(changedPropertyName == "text") {
            $(iframe).find(edited_element_id).html(changedPropertyValue);
        }
    });
        
    $('#btn-download-source').on('click', function(){
        var x = $('#resultFrame').get(0).contentWindow.document;
        /*console.log('download');
        $('a').hide().prop({
            'download' : 'result.html',
            'href' :  x
        }).click();*/
        jQuery('<a href="data:text/plain,'+x+'" download href="/result.html">Download PDF</a>').hide().appendTo('body')[0].click();
        
    });
    
});


$(function(){
    var resultFrame = $('#resultFrame').get(0).contentWindow;
    var optionsElements = $('<div class="options-elements options-no-active" data-active="false"><button class="btn-opt btn btn-danger btn-delete-item"><i class="fa fa-trash-alt"></i></button><span class="label-element"></span></div>');
    var optEl = $('<div class="optEl"><button class="btn-opt btn btn-danger btn-delete-item"><i class="fa fa-trash-alt"></i></button><span class="label-element"></span></div>');
    
    
    var element = $();
    $('.draggable').on('dragstart', function(){
       // element = $($(this).data('source'));

        var obj = $(this).data('obj');
        element = elements.containers.items[obj];
    });

    $(".draggable").on('dragend',function(event) {
        var iframe = $('#resultFrame').get(0).contentWindow.document;

    });
    
    $('.draggable').on('dragleave', function(event){

    });
    


    $('#resultFrame').on('load', function(){
        var totalElements = 0;
      
        $(resultFrame.document.body).find('*').on('dragenter',function(event) {
            event.preventDefault();
            event.stopPropagation();
            
        }).on('dragover',function(event) {
            event.preventDefault();
            event.stopPropagation();
            $(event.target).css('background-color', 'rgba(0,255,0,0.4)');
        }).on('dragleave', function(event){
            $(event.target).css('background-color', 'initial');
        });

        $(resultFrame.document).find('.result').on('drop',function(event) {
            event.preventDefault();
            event.stopPropagation();

            var target = event.target;

            $(target).css('background-color', 'initial');

            if(getPossition(this,event) == 'top' || getPossition(this,event) == 'left') {
                $(element.getSource()).attr('id', 'element_id_'+totalElements).insertBefore($(target))
                    .on('click', addElementClick(this, event))
                    .on('mouseleave', addElementMouseLeave(this, event))
                    .on('mouseover', addElementMouseOver(this, event)); 
            } else if(getPossition(this,event) == 'bottom' || getPossition(this,event) == 'right') {
                $(element.getSource()).attr('id', 'element_id_'+totalElements).insertAfter($(target))
                    .on('click', addElementClick(this, event))
                    .on('mouseleave', addElementMouseLeave(this, event))
                    .on('mouseover', addElementMouseOver(this, event)); 
            } else {            
                $(element.getSource()).attr('id', 'element_id_'+totalElements).appendTo($(target))
                    .on('click', function () {
                        console.log('sss');
                    })
                    .on('mouseleave', addElementMouseLeave(this, event))
                    .on('mouseover', addElementMouseOver(this, event)); 
            }

            totalElements +=1;
        });
    });  
});



function getOptions(allowedOptions)
{
    var _allowedOptions = JSON.parse(allowedOptions);
    
    $('#accordion-properties').show();

    $.each($('.property'), function(){
        var data_option_id = $(this).attr('data-otpion-id');
        $(this).hide();
        if($.inArray(parseInt(data_option_id), _allowedOptions) != -1) {
            $(this).show();
        }
        
    });
}


function getX(obj, event) {
    var offset = $(obj).offset();
    x = event.pageX- offset.left;

    return x;
}

function getPossition(obj, event) {
    var offset = $(event.target).offset();
    var height = $(event.target).height();
    var width = $(event.target).width();
    
    
    var y = event.pageY- offset.top;
    var x = event.pageX - offset.left;

    if(y <= 5) {
        return 'top';
    }
    
    if(y+5 >= height) {
        return 'bottom';
    }
    
    if(x <= 5) {
        return 'left';
    }
    
    if(x+5 >= width) {
        return 'right';
    }
    
    return false;
}


function addElementClick(obj, event)
{
    event.preventDefault();
    event.stopPropagation();
    console.log('xxx');
    $('#edited_element_id').val($(event.target).attr('id'));
    /*getOptions($(obj).attr('data-allowedOptions'));
    $(optionsElements).removeClass('options-no-active').addClass('options-active');
    $(obj).append(optionsElements).find('.label-element').html('element_id_'+totalElements);*/
}

function addElementMouseLeave(obj, event)
{
    $(obj).find('.options-no-active').remove();
    $(obj).css({'background-color' : '#fff'});
    console.log('test2');
}

function addElementMouseOver(obj, event)
{
    event.preventDefault();
    event.stopPropagation();
    $(obj).css({'background-color':'rgba(0,255,0,0.4)'});
    console.log('test');
    //$(obj).append(optionsElements).find('.label-element').html('element_id_'+totalElements);
}


