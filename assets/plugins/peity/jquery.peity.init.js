$(function(){$("span.pie").peity("pie",{width:90,height:90});$("span.donut").peity("donut",{width:90,height:90});$(".peity-line").each(function(){$(this).peity("line",$(this).data())});$(".peity-bar").each(function(){$(this).peity("bar",$(this).data())})});