btnName = "Continue";

$(function() {
    $("#template-form").dialog({
        autoOpen: false,
        modal: true,
        buttons: [{
            text: btnName,
            click: function() {
                args['template'] = $("#template_in").val();
                $( this ).dialog("close");
                $.get('/'+app+'/default/'+data.next, args).done(function(data){success(data)});
            }
        }],
        open: function (event, ui){
            $("#template_in").append(data.template_options);
        }
    });
});
