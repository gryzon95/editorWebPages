var upload = false;
var totalElements = 0;
var element = $();
var arrayOfId = [];

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
        if (changedPropertyName == "src") {
            $(iframe).find(edited_element_id).prop('src', $(this).val());
        }
        if (changedPropertyName == "background-image") {
            $(iframe).find(edited_element_id).css('background-image', 'url(' + $(this).val() + ')');
        }


        $(iframe).find(edited_element_id).data('input', $(this).attr('name'));
        $(iframe).find(edited_element_id).data('value', $(this).val());

    });

    $('.property select').on('change', function () {
       var iframe =  $('#resultFrame').get(0).contentWindow.document;

        var edited_element_id = '#' + $('#edited_element_id').val();
        var changedPropertyName = $(this).attr('name');

        if(changedPropertyName.indexOf('column') >= 0) {
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
        } else {
            $(iframe).find(edited_element_id).css(changedPropertyName, $(this).val());
        }



        $(iframe).find(edited_element_id).data('input', $(this).attr('name'));
        $(iframe).find(edited_element_id).data('value', $(this).val());
    });

    $('input[data-type="color-bg"]').minicolors({
        format: 'rgb',
        opacity: true,
        theme: 'bootstrap',
    });

    $('input[data-type="color"]').minicolors({
       format: 'rgb',
        theme: 'bootstrap',
    });

    // Eksport wygenerowanego pliku
    $('#btn-download-source').on('click', function () {
        var headSrc = $($('#resultFrame').get(0).contentWindow.document.head);
        var bodySrc = $($('#resultFrame').get(0).contentWindow.document.body).html();

        headSrc.find('style').remove();

        var src = '<html><head>' + headSrc.html() + '</head><body>' + bodySrc + '</body></html>';
        $('<a href="data:text/html,' + encodeURIComponent(src) + '" download href="/result.html">index</a>').hide().appendTo('body')[0].click();

    });

    // Pokazanie okna z podglądem
    $('#btn-preview').on('click', function () {
        var bodySrc = $($('#resultFrame').get(0).contentWindow.document.body).html();

        $($('#previewFrame').get(0).contentWindow.document.body).html(bodySrc);
        $('#preview').show();
    });


    // Okno z podglądem akcje
    $('#desktop-view').on('click', function () {
        $('#preview-content').width(1280);
    });

    $('#tablet-view').on('click', function () {
        $('#preview-content').width(768);
    });

    $('#mobile-view').on('click', function () {
        $('#preview-content').width(425);
    });

    $('#close-preview').on('click', function () {
        $('#preview').hide();
    });

    $('#width-preview').on('input', function () {
       $('#preview-content').width($(this).val());
    });

    $('#height-preview').on('input', function () {
        $('#preview-content').height($(this).val());
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
                $('#resultFrame').attr('src', './'+data);
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

    $('#resultFrame').on('load', function () {

        $('.draggable').on('dragstart', function (event) {
            event.originalEvent.dataTransfer.setData('text/plain', 'anything');
            element = $($(this).data('source'));
        });

        $(".draggable").on('dragend', function (event) {
            var iframe = $('#resultFrame').get(0).contentWindow.document;
        });

        $('.draggable').on('dragleave', function (event) {
        });

        $(resultFrame.document.body).on('click', function () {
            $(resultFrame.document.body).find('*').removeClass('active');
            $(resultFrame.document.body).find(optionsElements).remove();
        });


        $(resultFrame.document.body).find('.result').find('*').each(function (key, index) {
            arrayOfId.push(parseInt($(index).attr('id').replace('element_id_', '')));
        });

        if(Math.max.apply(Math, arrayOfId) != '-Infinity') {
            totalElements = Math.max.apply(Math, arrayOfId) +1;
        }

        // Obsługa zdarzeń na każdym elemencie w ciele iframeu
        $(resultFrame.document.body).find('*')
            .on('dragenter', function (event) {
                event.preventDefault();
                event.stopPropagation();
            })
            .on('dragover', function (event) {
                event.preventDefault();
                event.stopPropagation();

                // console.log(event.target);

                // console.log(element.attr('data-forbiddenElements').split(','));
                //console.log(JSON.parse(element.attr('data-forbiddenElements').toString()));

                // $(event.target).addClass('hover');


                if(isAllowed(element, event.target)){
                    $(event.target).addClass('hover');
                } else {
                    $(event.target).addClass('forbidden');
                }

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
                $(event.target).removeClass('hover forbidden');
                $(event.target).find('[class*="fa-angle-double-"]').remove();
            })
            .on('dragend', function (event) {
                $(event.target).removeClass('hover forbidden');
            })
            .on('dragstart', function (event) {
                event.stopPropagation();
                event.originalEvent.dataTransfer.setData('text/plain', 'anything');

                element = $(this);
                console.log($(this));
            })
            .on('mouseover', function (event) {
                event.stopPropagation();
                $(this).addClass('hover');
            })
            .on('mouseout', function (event) {
                $(this).removeClass('hover forbidden');
            })
            .on('click', function (event) {
                event.stopPropagation();
                console.log('ckick');
            });


        // Obsługa zdarzenia "drop" na elemencie .result w iframie
        $(resultFrame.document).find('.result')
            .on('drop', function (event) {
                event.preventDefault();
                 event.stopPropagation();

                var target = event.target;

                console.log(isAllowed(element, target));
                if(!isAllowed(element, target)) {
                    return false;
                }

                // Określanie miejsce w które ma zostać dodany element na podstawie pozycji kursora
                $(target).removeClass('hover forbidden');
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

                // Akcje wykonywane na dodanym już elemencie
                element
                    .on('click', function (event) {
                        event.preventDefault();
                        event.stopPropagation();

                        var attId = $(this).prop('tagName');

                        $('#edited_element_id').val($(event.target).attr('id'));
                        getOptions($(this).attr('data-allowedOptions'), $(event.target).attr('id'));
                        $(optionsElements).removeClass('options-no-active').addClass('options-active');
                        $(this).append(optionsElements).find('.label-element').html(attId);
                        $(resultFrame.document.body).find('*').removeClass('active');
                        $(this).addClass('active');

                        console.log('click');
                    })
                    .on('click', '.btn-delete-item', function (event) {
                        $(this).parent().parent().remove();
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
                        event.originalEvent.dataTransfer.setData('text/plain', 'anything');
                        element = $(this);
                    })
                    .on('mouseout', function (event) {
                        $(this).removeClass('hover forbidden');
                    });

                $(this).find('.arr').remove();
                totalElements += 1;
        });
    });




});


function getOptions(allowedOptions, element) {
    var iframe = $('#resultFrame').get(0).contentWindow.document;
    var _allowedOptions = JSON.parse(allowedOptions);

    var element = $(iframe).find('#'+element);
    var inputName = $(element).data('input');
    var inputVal = $(element).data('value')!=undefined ? $(element).data('value') : '';



    $('#accordion-properties').show();

    $.each($('.property'), function () {
        var data_option_id = $(this).attr('data-option-id');

        $(this).hide();
        if ($.inArray(parseInt(data_option_id), _allowedOptions) != -1) {
            if(inputName == undefined || inputVal == undefined) {
                console.log('show');
                $(this).show()
                $(this).find('input').val('');
                $(this).find('select option:first').prop('selected', true);
                $('.minicolors-swatch-color').css({'background-color':'unset'});
            } else {
                $(this).show();
                $(this).find('input[name=' + inputName + ']').val(inputVal);

                if(inputName.includes('column')) {
                    $(this).find('select option[value='+ inputVal +']').prop('selected', true);
                }

                if(inputName == "background-color") {
                    $('.minicolors-swatch-color').css({'background-color':inputVal});
                }

            }
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

function reload_js(src) {
    $('script[src="' + src + '"]').remove();
    $('<script>').attr('src', src).appendTo('head');
}

function isAllowed(element, target) {
	if($(target).attr('data-forbiddenElements') != undefined) {
		if($.inArray(element.prop('tagName').toLowerCase(), $(target).attr('data-forbiddenElements').split(',')) != -1) {
			return false;
		}
	}

    return true;
}




