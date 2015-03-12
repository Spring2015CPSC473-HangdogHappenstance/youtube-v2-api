/* jshint browser: true, jquery: true, curly: true, eqeqeq: true, forin: true, immed: true, indent: 4, latedef: true, newcap: true, nonew: true, quotmark: double, strict: true, undef: true, unused: true */
/*
* Assignment 4
* Author: E. Donaldson
* Sources: getbootstrap.com and api.jquery.com
*/
var main = function () {
    "use strict";
    $(".carousel").carousel({interval: false});

    var pageCarousel = {
        appendNewBlock: function (title, content, active, video) {
            active = active || false;

            var newIndicator = $("<li/>")
                .attr("data-target", "#myCarousel")
                .attr("data-slide-to", $("ol.carousel-indicators").children().length);

            var newBlock = $("<div/>")
                .addClass("carousel-caption")
                .append(
                $("<h1/>").text(title)
            )
                .append(
                $("<p/>").text(content)
            );

            if (typeof video !== "undefined") {
//				newBlock.prepend($("<img>",{src:image}));
                newBlock.prepend("<iframe width=\"560\" height=\"315\" src=\"https://www.youtube.com/embed/" + video + "\" frameborder=\"0\" allowfullscreen></iframe>");
            }

            $(".carousel-indicators").append(newIndicator);
            $(".carousel-inner").append(
                $("<div/>")
                    .addClass("item")
                    .append(
                    $("<div/>")
                        .addClass("container")
                        .append(newBlock)
                )
            );

            if (active === true) {
                $(".carousel-inner .item.active").removeClass("active");
                $(".carousel-indicators li.active").removeClass("active");
                $(".carousel-inner .item:last-child").addClass("active");
                $(".carousel-indicators li:last-child").addClass("active");
            }
        },
        deleteOldest: function () {
            var carouselSize = $(".carousel-inner .item").children().length;

            if ((carouselSize) > 1) {
                $(".carousel-inner .item:first-child").remove();
                $(".carousel-indicators li:last-child").remove();
                $(".carousel-inner .item.active").removeClass("active");
                $(".carousel-indicators li.active").removeClass("active");
                $(".carousel-inner .item:last-child").addClass("active");
                $(".carousel-indicators li:last-child").addClass("active");
            }
        }
    };

    $("button#search").click(function (event) {
        event.preventDefault();
        var searchString = $("#search_field").val();
        $.getJSON(
            "https://gdata.youtube.com/feeds/api/videos?q=" + searchString + "&max-results=10&alt=json", function (data) {
                var youtubeEmbed = (data.feed.entry[0].id.$t).replace("http://gdata.youtube.com/feeds/api/videos/", "");
                pageCarousel.appendNewBlock("Search String: " + searchString, data.feed.entry[0].content.$t.toString(),
                    true, youtubeEmbed);
                $("#search_field").val("");

            });
    });

    $("button#delete").click(function (event) {
        event.preventDefault();
        pageCarousel.deleteOldest();
    });
};
$(document).ready(main);