$(document).ready(function(){
    var btn = $('#button') 
    $('#btn-label').keyup(()=>btn.html($('#btn-label').val()));
    $('#btn-font-size').change(()=>btn.css("font-size",$('#btn-font-size').val()+ "px"));
    $('#btn-font-color').change(()=>btn.css("color",$('#btn-font-color').val()));
    $('#btn-pad-top').change(()=>btn.css("padding-top",$('#btn-pad-top').val()+ "px" ));
    $('#btn-pad-right').change(()=>btn.css("padding-right",$('#btn-pad-right').val()+ "px"));
    $('#btn-pad-bottom').change(()=>btn.css("padding-bottom",$('#btn-pad-bottom').val()+ "px"));
    $('#btn-pad-left').change(()=>btn.css("padding-left",$('#btn-pad-left').val()+ "px"));
    $('#btn-back-color').change(()=>btn.css("background-color",$('#btn-back-color').val()));
    $('#btn-border-color').change(()=>btn.css("border-color",$('#btn-border-color').val()));
    $('#btn-border-width').change(()=>btn.css("border-width",$('#btn-border-width').val()+ "px"));
    $('#btn-border-radius').change(() => btn.css("border-radius",$('#btn-border-radius').val() + "px" ))

    $('#generate').click((event)=>{
        event.preventDefault();
        $('#html-code').text($('#button')[0].outerHTML.replace(/\ss.*"/g,""));
         $('#css-code').text(document.getElementById('button').style.cssText);
         $('#block').css("display","flex");
    })

    $('#cancel').click(()=>{
        $('#block').css("display","none");
    })
})
