var date = new Date();
var month_by_name=Array('January','February','March','April','May','June','July','August','September','October','November','December');
var month_str=month_by_name[date.getUTCMonth()];
var dom_month;
var day=date.getDate();
var weekday = new Array(7);
weekday[0] = "Sunday";
weekday[1] = "Monday";
weekday[2] = "Tuesday";
weekday[3] = "Wednesday";
weekday[4] = "Thursday";
weekday[5] = "Friday";
weekday[6] = "Saturday";

var n = weekday[ date.getDay()];
//console.log(n);
var dom_day,loc,number,weather_descriptions,carrnt_location,w_speed,w_direcion,vs,ico,btn_s,input_s;
var btnS;
document.addEventListener("DOMContentLoaded", () => {



    dom_month=document.getElementsByClassName('month')[0];
    dom_day=document.getElementsByClassName('day')[0];
    loc=document.getElementsByClassName('loc')[0];
    number= document.getElementsByClassName('number')[0];
    weather_d=document.getElementsByClassName('weather_d')[0];
    w_speed=document.getElementsByClassName('w_speed')[0];
    w_direcion=document.getElementsByClassName('w_direcion')[0];
    vs=document.getElementsByClassName('vs')[0];
    ico=document.getElementsByClassName('ico')[0];
    btn_s=document.getElementsByClassName('btn_s')[0];
    input_s=document.getElementsByClassName('input_s')[0];


    
    dom_month.innerText=month_str+' '+ day;
    dom_day.innerText=n;
    btnS=function (){



try{
        btn_s.addEventListener("click", function(event){
            
            if(input_s.value!=undefined){
                carrnt_location=input_s.value;
                console.log(input_s.value);
                //window.location.reload(false);
                
                $.ajax({
                    url: 'http://api.weatherstack.com/current?access_key=96af9118eee01b40b10f8787b486f9a4&query='+carrnt_location,   
                    dataType: 'json',
                    responseType:'application/json',
                    crossDomain: true,
                    success: function(json) {
                
                        //alert(carrnt_location)
                // alert(json.request.type);
                if(json.current==undefined){
                    number.innerHTML='<div class="num number">'+''+'<sup style="font-size: 30pt;">o</sup>c</div>';
                }
                else{
                    number.innerHTML='<div class="num number">'+json.current.temperature+'<sup style="font-size: 30pt;">o</sup>c</div>';


                }
                number.innerHTML='<div class="num number">'+json.current.temperature+'<sup style="font-size: 30pt;">o</sup>c</div>';
                weather_d.innerText=json.current.weather_descriptions ;
                w_speed.innerHTML='<i class="fas fa-wind"></i> '+json.current.wind_speed+' km/h';
                console.log(json.current.wind_dir);
                
                   w_direcion.innerHTML='<i class="far fa-compass"></i> '+json.current.wind_dir; 
                   //json.current.visibility
                vs.innerHTML='<span class="vs"><i class="fas fa-cloud"></i> '+json.current.cloudcover+'%</span>';
                
                ico.src=json.current.weather_icons;
                loc.innerText=json.location.name;
                
                
                
                
                
                
                    }
                });
        
                window.onloadend= function(){
        
        
                    window.location.reload(true);
                
                }
                
            }
         });
        }
        catch(ex){

            console.log("not found");
        }
    
    }
 


});



$.ajax({
    url: 'https://api.ipgeolocation.io/ipgeo?apiKey=42cc9faa8b804349a9019228dd423c84',   
    dataType: 'json',
    responseType:'application/json',
    crossDomain: true,
    success: function(json) {
//alert(json.organization);

//window.alert(json.city);
carrnt_location=json.city;
//console.log(carrnt_location);


btnS();


 //****************************************************************************** */
$.ajax({
    url: 'http://api.weatherstack.com/current?access_key=96af9118eee01b40b10f8787b486f9a4&query='+carrnt_location,   
    dataType: 'json',
    responseType:'application/json',
    crossDomain: true,
    success: function(json) {

        //alert(carrnt_location)
// alert(json.request.type);
number.innerHTML='<div class="num number">'+json.current.temperature+'<sup style="font-size: 30pt;">o</sup>c</div>';
weather_d.innerText=json.current.weather_descriptions ;
 w_speed.innerHTML='<i class="fas fa-wind"></i> '+json.current.wind_speed+' km/h';
console.log(json.current.wind_dir);

   w_direcion.innerHTML='<i class="far fa-compass"></i> '+json.current.wind_dir; 
   //json.current.visibility
vs.innerHTML='<span class="vs"><i class="fas fa-cloud"></i> '+json.current.cloudcover+'%</span>';

ico.src=json.current.weather_icons;
loc.innerText=json.location.name;






    }
});



    }
});



window.onloadend= function(){


    window.location.reload(true);

}




//******************************************************************* */
   
    

   


 
    
     
