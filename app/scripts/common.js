'use strict';

var urlParser = function(name) {
  var regParser = new RegExp('[\?&]' + name + '=([^&#]*)');
  var output = regParser.exec(window.location.href);
  return (output) ? +output[1] || 0 : 0;
};

const HEURE_CD = urlParser('h');
const MINUTE_CD = urlParser('m');
const SECONDE_CD = urlParser('s');

$(document).ready(function() {
  var clock;

  clock = jQuery('.clock').FlipClock({
    clockFace: (HEURE_CD > 0 ? 'HourCounter' : 'MinuteCounter'),
    autoStart: false,
    countdown: (HEURE_CD || MINUTE_CD || SECONDE_CD),
    language: 'fr'
  });

  clock.setTime(HEURE_CD * 3600 + MINUTE_CD * 60 + SECONDE_CD);
  clock.start();
});
