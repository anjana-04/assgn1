$(document).ready(function(){
    $.ajax({
        type:"GET",
        url:"assgn.json",
        success:function(data){
            var out="";
            out +="<div class='container' style='display:flex;background-color:white; margin-top:100px;margin-left:300px;width:1000px;'><div class='col col-12 col-sm-4>"
            for(var i in data){
                

                out +="<div class='card' display='flex'><div class='card-header' style='background-color:magenta'>book details</div><div class='card-body'>"
               
                out +="<div style='padding:5px;'>BOOK NAME:   "+data[i].name+"</div>"
                out +="<div style='padding:5px'>AUTHOR:   "+data[i].author+"</div>"
                
                out +="<div style='padding:5px'>DESCRIPTION:   "+data[i].description+"</div>"
                out +="<img style='padding:5px ; width:100px;height:100px' src=  ' "+data[i].image+"'>"
                out+="</div>"
                
            }
            out+="</div>"
                out+="</div>"
                
            
            out+="</div> <br> "                            
            $(".result").html(out);
        }
    })
})