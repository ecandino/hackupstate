// Generated by CoffeeScript 1.4.0
(function(){var e;e={};e.scrollTo=function(t){var n,r;e.scrolling=!0;t.attr("href")&&(r=t.attr("href").replace("#",""));r==="overview"?n=0:n=$("#"+r).offset().top;return $("body,html").animate({scrollTop:n},300,function(){return e.scrolling=!1})};$(function(){return $(".navLink").on("click",function(t){t.preventDefault();return e.scrollTo($(this))})})}).call(this);