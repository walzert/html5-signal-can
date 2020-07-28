import Mustache from 'mustache';
import {  api, lowcan,signalcomposer  } from 'agl-js-api';
import { setValue } from './sliders';


var template;

// function render_sliders(sliders) {
//     var sliderContainer = document.getElementById('SliderContainer');
//     for( var i=0; i<sliders.length; i++) {
//         var node = Mustache.render(template, sliders[i]);
//         sliderContainer.innerHTML += node;
//     }
// }


export function init() {
    api.init();
    //file = "../json/sig-demoboard.json"
    //signalparameter = '' ;
    var signalname = 'engine_speed';
    //signal = {'signal': 'wantedsignal'[, 'options': {['average': nb_seconds,] ['minimum': nb_seconds,] ['maximum': nb_seconds] }]};

    console.log(signalcomposer.get(signalname));
    console.log(signalcomposer.list());
    //file = "../json/sig-demoboard.json"
    //signalcomposer.addObjects(file);
    console.log(lowcan.get_list());
    console.log(lowcan.get_signal("messages.hvac.temperature.left"));
    

    signalcomposer.subscribe_by_signal(function(data){
        console.log("subscribe_by_signal CHANGED");
        console.log(data);
    },signalname).then(function(result) {
        console.log("SUBSCRIBED TO subscribe_by_signal CHANGED");
    });
    lowcan.subscribe_by_event(function(data){
        console.log("can subscribe_by_event left temp CHANGED");
        console.log(data);
    },"hvac.temperature.left").then(function(result) {
        console.log("SUBSCRIBED TO can subscribe_by_event CHANGED");
    });
    lowcan.subscribe_by_event(function(data){
        console.log("can subscribe_by_event right temp CHANGED");
        console.log(data);
    },"hvac.temperature.right").then(function(result) {
        console.log("SUBSCRIBED TO can subscribe_by_event CHANGED");
    });

    var button_stop = document.getElementById('button_stop');
    button_stop.addEventListener("click", signal_test);

    // template = document.getElementById('slider-template').innerHTML;
    // Mustache.parse(template);
   
}

function signal_test(){
    var signalname = "engine_speed";
    console.log(signalcomposer.get(signalname));
    console.log(lowcan.get_list());
    console.log(lowcan.get_signal("messages.hvac.temperature.left"));
}
