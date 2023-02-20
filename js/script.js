var baseURL = "";
var isMobile = false;


var luni = new Lunicode();

/////// GUI

// Remember the current plain text between panels
var currentPlainText = '';

var currentPanelID, currentTabID;



$(function () {


    function initGUI() {

       // setNavigation();

        // Encode placeholder Text
        $('#tab_text textarea[name=plain]').each(function () {
            var $parent = $(this).parents('section');
            var effect = $parent.attr('id').split("_")[2];

            $('textarea[name=encoded]', $parent).attr('placeholder', luni.tools[effect].encode($(this).attr('placeholder')));
        });
    }


    initGUI();

   




    ///// Convert Text

    $('#tab_text .content section textarea').keyup(function () {
        var $parent = $(this).parents('section');
        var effect = $parent.attr('id').split("_")[2];
        var name = $(this).attr('name');
        var encodedText;

        if (name == "plain") {
            currentPlainText = $(this).val();
            encodedText = luni.tools[effect].encode(currentPlainText);
            $('textarea[name=encoded]', $parent).val(encodedText);

        } else if (name == "encoded") {
            encodedText = $(this).val();
            currentPlainText = luni.tools[effect].decode(encodedText);
            $('textarea[name=plain]', $parent).val(currentPlainText);
        }

        $textareaHTML = $('textarea[name=html]', $parent);
        if ($textareaHTML.hasClass('active')) {
            $textareaHTML.val(luni.getHTML(encodedText));
        }
    });


    // Creepify Tool

    // Set the padding of the second textarea, so that all diacritics are visible but
    // the textareas height doesn't change
    function setCreepifyPadding() {
        if ($.browser.mozilla || $.browser.opera) {
            return;
        }

        var setTop = $('#creepify_check_top').prop('checked'),
            setBottom = $('#creepify_check_bottom').prop('checked'),
            diacriticsNumber = $('#creepify_maxHeight').val(),
            $textarea = $('#text_panel_creepify textarea[name=encoded]');

        var padding = (5 + 5 * diacriticsNumber); // 5px initial padding + 5px for every diacritic

        if ((setTop && !setBottom) || (!setTop && setBottom)) {
            padding = Math.min(creepifyTextareaHeight - 5, padding);

            if (setTop && !setBottom) {
                $textarea.css({'padding-top': padding + "px", 'padding-bottom': '5px'});
            }
            if (!setTop && setBottom) {
                $textarea.css({'padding-top': "5px", 'padding-bottom': padding + 'px'});
            }

        } else if (setTop && setBottom) {
            padding = Math.min(creepifyTextareaHeight / 2, padding);
            $textarea.css({'padding-top': padding + "px", 'padding-bottom': padding + 'px'});

        } else if (!(setTop || setBottom)) {
            $textarea.css({'padding-top': "5px", 'padding-bottom': '5px'});
        }

    }

    // Init from object
    $('#creepify_check_top').prop('checked', luni.tools.creepify.options.top);
    $('#creepify_check_middle').prop('checked', luni.tools.creepify.options.middle);
    $('#creepify_check_bottom').prop('checked', luni.tools.creepify.options.bottom);
    $('#creepify_maxHeight').val(luni.tools.creepify.options.maxHeight);
    $('#creepify_randomization').val(luni.tools.creepify.options.randomization);

    var creepifyTextareaHeight = 180;//$('#text_panel_creepify textarea[name=encoded]').outerHeight();

    // set textarea padding if top/bottom is set, so the top/bottom diacritics are visible
    setCreepifyPadding();

    // Set options and refresh
    // Checkboxes
    $('#text_panel_creepify input[type=checkbox]').click(function () {
        var $parent = $(this).parents('section');
        var name = $(this).attr('id').split("_")[2];

        luni.tools.creepify.options[name] = $(this).prop('checked');

        $textarea = $('textarea[name=encoded]', $parent);

        // Change value or placeholder
        if (currentPlainText == '') {
            $textarea.attr('placeholder', luni.tools.creepify.encode($('textarea[name=plain]', $parent).attr('placeholder')));
        } else {
            var encodedText = luni.tools.creepify.encode(currentPlainText);
            $textarea.val(encodedText);

            $textareaHTML = $('textarea[name=html]', $parent);
            if ($textareaHTML.hasClass('active')) {
                $textareaHTML.val(luni.getHTML(encodedText));
            }
        }

        // more textarea padding-top/bottom to show the top/bottom diacritics
        if (name == "top" || name == "bottom") {
            setCreepifyPadding();
        }
    });


    // Range
    $('#text_panel_creepify input[type=range]').change(function () {
        var $parent = $(this).parents('section');
        var name = $(this).attr('id').split("_")[1];

        luni.tools.creepify.options[name] = $(this).val();
        $textarea = $('textarea[name=encoded]', $parent);

        // Change value or placeholder
        if (currentPlainText == '') {
            $textarea.attr('placeholder', luni.tools.creepify.encode($('textarea[name=plain]', $parent).attr('placeholder')));
        } else {

            var encodedText = luni.tools.creepify.encode(currentPlainText);
            $textarea.val(encodedText);

            $textareaHTML = $('textarea[name=html]', $parent);
            if ($textareaHTML.hasClass('active')) {
                $textareaHTML.val(luni.getHTML(encodedText));
            }
        }


        // more textarea padding if diacritics on top
        if (name == 'maxHeight') {
            setCreepifyPadding();
        }
    });


   
});