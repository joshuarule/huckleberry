console.log("connected"),$(function(){function a(){w=$(window).width(),h=$(window).height(),h-=$(window).width()<768?48:118,$(".full").css({height:h})}$(window).resize(function(){a()}),a()}),$(document).ready(function(){$("a[href='/menu']").on("click",function(a){a.preventDefault(),window.location.href="/menu/cocktails"})});