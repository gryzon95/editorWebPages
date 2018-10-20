$(document).ready(function () {
    var elementAppend = '';
    var cntElements = 0;

    // Ładowanie listy elementów
    $.each(elements, function (key, value) {
        elementAppend += '<div class="panel panel-default"><div class="panel-heading"><h4 class="panel-title"><a class="expand-item" data-toggle="collapse" data-parent="#accordion-elements" href="#element' + cntElements + '">';
        elementAppend += '<i class="fas fa-angle-right"></i>' + value.displayName;
        elementAppend += '</a></h4></div><div id="element' + cntElements + '" class="panel-collapse collapse"><div class="panel-body"><ul id="draglistelement" class="elements">';

        $.each(value.items, function (k, v) {
            elementAppend += '<li draggable="true" class="element-item draggable" data-source=\'' + v.source + '\'>' + v.icon + ' <span>' + v.displayName + '</span></li>';
        });

        elementAppend += '</ul></div></div></div>';
        cntElements++;
    });
    $(elementAppend).appendTo('#accordion-elements');

    // Animamcja ikony ustawień
    $('.expand-item, .expand-property').on('click', function () {
        $(this).parent().parent().parent().parent().find('i').rotate({animateTo: 0});
        if ($(this).attr('aria-expanded') == "false" || $(this).attr('aria-expanded') == undefined) {
            $(this).find('i').rotate({animateTo: 90});
        }
    });

    // Obsługa wartości właściwości danych elementów
    $('.property input').on('input', function () {
        var iframe = $('#resultFrame').get(0).contentWindow.document;

        var edited_element_id = '#' + $('#edited_element_id').val();
        var changedPropertyName = $(this).attr('name');
        var changedPropertyValue = $(this).val();

        $(iframe).find(edited_element_id).css(changedPropertyName, changedPropertyValue);
        if (changedPropertyName == "text") {
            $(iframe).find(edited_element_id).html(changedPropertyValue);
        }
        if(changedPropertyName == "href") {
            $(iframe).find(edited_element_id).prop('href', $(this).val());
        }
    });

    $('.property select').on('change', function () {
       var iframe =  $('#resultFrame').get(0).contentWindow.document;

        var edited_element_id = '#' + $('#edited_element_id').val();
        var changedPropertyName = $(this).attr('name');

        if(changedPropertyName == "small-column") {
            $(iframe).find(edited_element_id).alterClass('col-sm-*', $(this).val());
        }
        if(changedPropertyName == "medium-column") {
            $(iframe).find(edited_element_id).alterClass('col-md-*', $(this).val());
        }
        if(changedPropertyName == "large-column") {
            $(iframe).find(edited_element_id).alterClass('col-lg-*', $(this).val());
        }
        if(changedPropertyName == "xlarge-column") {
            $(iframe).find(edited_element_id).alterClass('col-xl-*', $(this).val());
        }
    });



    $('input[name=background-color]').minicolors({
        format: 'rgb',
        opacity: true,
        theme: 'bootstrap',
    });


    // Eksport wygenerowanego pliku
    $('#btn-download-source').on('click', function () {
        var headSrc = $($('#resultFrame').get(0).contentWindow.document.head);
        var bodySrc = $($('#resultFrame').get(0).contentWindow.document.body).html();

        headSrc.find('style').remove();

        var src = '<html>' + headSrc.html() + bodySrc + '</html>';
        $('<a href="data:text/html,' + encodeURIComponent(src) + '" download href="/result.html">index</a>').hide().appendTo('body')[0].click();

    });

    // Upload wygenerowanego pliku
    $('#btn-upload-source').on('click', function (e) {
        e.preventDefault();

        var form = $('#upload-file-form')[0];
        var data = new FormData(form);

        $.ajax({
            type: "POST",
            enctype: 'multipart/form-data',
            url: "upload.php",
            data: data,
            processData: false,
            contentType: false,
            cache: false,
            timeout: 600000,
            success: function (data) {

                //console.log("SUCCESS : ", data);
                /*console.log($.parseXML(data));
                $($('#resultFrame').get(0).contentWindow.document.body).html($.parseHTML(data)[1]);
                $($('#resultFrame').get(0).contentWindow.document.body).append($.parseHTML(data)[13]);*/


                console.log(data);
                console.log(typeof data);

                $($('#resultFrame').get(0).contentWindow.document.body).html(data);

                //console.log($('#resultFrame').get(0).contentWindow.document);
            },
            error: function (e) {
                console.log("ERROR : ", e);
            }
        });

    });


});


$(function () {
    var resultFrame = $('#resultFrame').get(0).contentWindow;
    var optionsElements = $('<div class="options-elements options-no-active" data-active="false"><button class="btn-opt btn btn-danger btn-delete-item"><i class="fa fa-trash-alt"></i></button><span class="label-element"></span></div>');
    //var optEl = $('<div class="optEl"><button class="btn-opt btn btn-danger btn-delete-item"><i class="fa fa-trash-alt"></i></button><span class="label-element"></span></div>');


    var element = $();
    $('.draggable').on('dragstart', function () {
        element = $($(this).data('source'));
    });

    $(".draggable").on('dragend', function (event) {
        var iframe = $('#resultFrame').get(0).contentWindow.document;
    });

    $('.draggable').on('dragleave', function (event) {
    });


    $('#resultFrame').on('load', function () {
        var totalElements = 0;

        $(resultFrame.document.body).on('click', function () {
            console.log('body');
            $(resultFrame.document.body).find('*').removeClass('active');
            $(resultFrame.document.body).find(optionsElements).remove();
        });



        // Obsługa zdarzeń na każdym elemencie w ciele iframeu
        $(resultFrame.document.body).find('*')
            .on('dragenter', function (event) {
                event.preventDefault();
                event.stopPropagation();
            })
            .on('dragover', function (event) {
                event.preventDefault();
                event.stopPropagation();
                $(event.target).addClass('hover');

                if(!$(event.target).hasClass('arr')) {
                    if (getPossition(this, event) == 'top') {
                        $(this).find('.fa-angle-double-down').remove();
                        $(event.target).append('<i class="fas fa-angle-double-up arr"></i>');
                    } else {
                        $(event.target).find('.fa-angle-double-up').remove();
                    }

                    if (getPossition(this, event) == 'bottom') {
                        $(this).find('.fa-angle-double-up').remove();
                        $(event.target).append('<i class="fas fa-angle-double-down arr"></i>');
                    } else {
                        $(event.target).find('.fa-angle-double-down').remove();
                    }

                    if (getPossition(this, event) == 'left') {
                        $(this).find('.fa-angle-double-right').remove();
                        $(event.target).append('<i class="fas fa-angle-double-left arr"></i>');
                    } else {
                        $(event.target).find('.fa-angle-double-left').remove();
                    }

                    if (getPossition(this, event) == 'right') {
                        $(this).find('.fa-angle-double-left').remove();
                        $(event.target).append('<i class="fas fa-angle-double-right arr"></i>');
                    } else {
                        $(event.target).find('.fa-angle-double-right').remove();
                    }
                }
            })
            .on('dragleave', function (event) {
                $(event.target).removeClass('hover');
            })
            .on('dragend', function (event) {
                $(event.target).removeClass('hover');
            });


        // Obsługa zdarzenia "drop" na elemencie .result w iframie
        $(resultFrame.document).find('.result')
            .on('drop', function (event) {
                event.preventDefault();
                event.stopPropagation();

                var target = event.target;


                // Określanie miejsce w które ma zostać dodany element na podstawie pozycji kursora
                $(target).removeClass('hover');
                if (!$(target).hasClass('arr')) {
                    if (getPossition(this, event) == 'top' || getPossition(this, event) == 'left') {
                        if (element.hasClass('moveable')) {
                            element.insertBefore($(target));
                        } else {
                            element.addClass('moveable').attr('id', 'element_id_' + totalElements).insertBefore($(target));
                        }

                    } else if (getPossition(this, event) == 'bottom' || getPossition(this, event) == 'right') {
                        if (element.hasClass('moveable')) {
                            element.insertAfter($(target));
                        } else {
                            element.addClass('moveable').attr('id', 'element_id_' + totalElements).insertAfter($(target));
                        }
                    } else {
                        if (element.hasClass('moveable')) {
                            element.appendTo($(target));
                        } else {
                            element.addClass('moveable').attr('id', 'element_id_' + totalElements).appendTo($(target));
                        }
                    }
                }

                //element.addClass('moveable').attr('id', 'element_id_' + totalElements).appendTo($(target));

                // Akcje wykonywane na dodanym już elemencie
                element
                    .on('click', function (event) {
                        event.preventDefault();
                        event.stopPropagation();
                        var attId = $(this).prop('tagName');

                        $('#edited_element_id').val($(event.target).attr('id'));
                        getOptions($(this).attr('data-allowedOptions'));
                        $(optionsElements).removeClass('options-no-active').addClass('options-active');
                        $(this).append(optionsElements).find('.label-element').html(attId);
                        $(resultFrame.document.body).find('*').removeClass('active');
                        $(this).addClass('active');
                    })
                    .on('mouseleave', function (event) {
                        event.preventDefault();
                        event.stopPropagation();
                        $(this).find('.options-no-active').remove();
                    })
                    .on('mouseover', function (event) {
                        event.preventDefault();
                        event.stopPropagation();
                        var attId = $(this).prop('tagName');
                        //$(this).append(optionsElements).find('.label-element').html(attId);
                        $(this).addClass('hover');
                    })
                    .on('dragstart', function (event) {
                        event.stopPropagation();
                        console.log('xxx');
                        console.log($(this));
                        element = $(this);
                    })
                    .on('mouseout', function (event) {
                        $(this).removeClass('hover');
                    });

                $(this).find('.arr').remove();
                totalElements += 1;
        });
    });
});


function getOptions(allowedOptions) {
    var _allowedOptions = JSON.parse(allowedOptions);

    $('#accordion-properties').show();

    $.each($('.property'), function () {
        var data_option_id = $(this).attr('data-otpion-id');
        $(this).hide();
        if ($.inArray(parseInt(data_option_id), _allowedOptions) != -1) {
            $(this).show();
        }

    });
}


function getPossition(obj, event) {
    var offset = $(event.target).offset();
    var height = $(event.target).outerHeight();
    var width = $(event.target).outerWidth();


    var y = event.pageY - offset.top;
    var x = event.pageX - offset.left;


    if (y <= 5 && x > 8 && x + 8 < width) {
        return 'top';
    }

    if (y + 5 >= height && x > 8 && x + 8 < width) {
        return 'bottom';
    }

    if (x <= 8) {
        return 'left';
    }

    if (x + 8 >= width) {
        return 'right';
    }

    return false;
}

