var input = "";

$(document).ready(function() {

    $(document).bind("keydown", function(e) {
        if (e.keyCode == 13) {
            e.preventDefault();
            $("#send-button").trigger("click");
        }
    });

    $("#send-button").click(function() {
        if ($("#title").hasClass("toggled") && $("#send-button i").hasClass("toggled")) {
            input = "";

            dates = [];

            clearData();

            buttonUpAnimation();

        } else {

            input = $("#search").val();

            $("#city").append(input);

            $("#title p").append("Press 'Enter' or click button to search again.");

            getWeather();

            buttonDownAnimation();
        }
    });
});

var dates = [];

function getWeather() {

    $.get("http://api.openweathermap.org/data/2.5/forecast?&APPID=74599075ab7c69849668dc61ab222d5c&q=" + input, function(data) {
        var i = 0;

        while (dates.length < 5) {
            dates.push(data.list[i]);
            i += 8; // ensures getting the object of consecutive days at the same hour
        }
    });

    setTimeout(function() {
        weatherData();
    }, 1000);
}


function weatherData() {
    var weekdays = ["SUNDAY", "MONDAY", "TUESDAY", "WEDNESDAY", "THURSDAY", "FRIDAY", "SATURDAY"];

    for (var x = 0; x < dates.length; x++) {
        var temperatureF = String(weatherF(dates[x].main.temp)) + String.fromCharCode(8457);
        var highF = "High: " + String(weatherF(dates[x].main.temp_max));
        var lowF = "Low: " + String(weatherF(dates[x].main.temp_min));
        var desc = (dates[x].weather[0].description).toUpperCase();
        var icon = dates[x].weather[0].id;

        var temperatureC = String(weatherC(dates[x].main.temp)) + String.fromCharCode(8451);
        var highC = "High: " + String(weatherC(dates[x].main.temp_max));
        var lowC = "Low: " + String(weatherC(dates[x].main.temp_min));
        var night = dates[x].weather[0].icon;

        var time = dates[x].dt;
        var t = new Date(time * 1000);
        var dayNum = t.getDay();
        var day = weekdays[dayNum];
        var wPic;
        var alt;

        // Assigns gifs based on weather
        switch (icon) {
            case 200:
            case 201:
            case 202:
            case 230:
            case 231:
            case 232:
                wPic = "http://www.animatedimages.org/data/media/148/animated-weather-image-0104.gif"; // thunderstorm
                alt = "animated-weather-image-0104";
                break;

            case 210:
            case 211:
                wPic = "http://www.animatedimages.org/data/media/148/animated-weather-image-0067.gif"; // light thunderstorm
                alt = "animated-weather-image-0067";
                break;

            case 212:
            case 221:
                wPic = "http://www.animatedimages.org/data/media/148/animated-weather-image-0005.gif"; // heavy thunderstorm
                alt = "animated-weather-image-0005";
                break;

            case 300:
            case 301:
            case 310:
            case 311:
                wPic = "http://www.animatedimages.org/data/media/148/animated-weather-image-0065.gif"; // light drizzle
                alt = "animated-weather-image-0065";
                break;

            case 302:
            case 312:
            case 313:
            case 314:
            case 321:
            case 500:
            case 520:
            case 521:
                wPic = "http://www.animatedimages.org/data/media/148/animated-weather-image-0116.gif"; // heavy drizzle
                alt = "animated-weather-image-0116";
                break;

            case 501:
                wPic = "http://www.animatedimages.org/data/media/148/animated-weather-image-0115.gif"; // rain
                alt = "animated-weather-image-0115";
                break;

            case 502:
            case 503:
            case 504:
            case 522:
            case 531:
                wPic = "http://www.animatedimages.org/data/media/148/animated-weather-image-0071.gif"; // heavy rain
                alt = "animated-weather-image-0071";
                break;

            case 511:
                wPic = "http://www.animatedimages.org/data/media/148/animated-weather-image-0091.gif"; // freezing rain
                alt = "animated-weather-image-0091";
                break;

            case 600:
            case 620:
                wPic = "http://www.animatedimages.org/data/media/148/animated-weather-image-0088.gif"; // light snow
                alt = "animated-weather-image-0088";
                break;

            case 601:
            case 621:
                wPic = "http://www.animatedimages.org/data/media/148/animated-weather-image-0087.gif"; // snow
                alt = "animated-weather-image-0087";
                break;

            case 602:
            case 622:
                wPic = "http://www.animatedimages.org/data/media/148/animated-weather-image-0090.gif"; // heavy snow
                alt = "animated-weather-image-0090";
                break;

            case 611:
            case 612:
            case 615:
            case 616:
                wPic = "http://www.animatedimages.org/data/media/148/animated-weather-image-0042.gif"; // sleet & rain/snow
                alt = "animated-weather-image-0042";
                break;

            case 701:
            case 711:
            case 721:
            case 741:
                wPic = "http://www.animatedimages.org/data/media/148/animated-weather-image-0073.gif"; // mist/smoke/haze/fog
                alt = "animated-weather-image-0073";
                break;

            case 731:
            case 751:
            case 761:
            case 762:
                wPic = "http://www.animatedimages.org/data/media/148/animated-weather-image-0097.gif"; // sand/dust whirls/volcanic ash
                alt = "animated-weather-image-0097";
                break;

            case 771:
            case 905:
            case 952:
            case 953:
            case 954:
            case 955:
            case 956:
            case 957:
            case 958:
            case 959:
                wPic = "http://www.animatedimages.org/data/media/148/animated-weather-image-0068.gif"; // windy/squalls/gale
                alt = "animated-weather-image-0068";
                break;

            case 781:
            case 900:
                wPic = "http://www.animatedimages.org/data/media/148/animated-weather-image-0062.gif"; // tornado
                alt = "animated-weather-image-0062";
                break;

            case 800:
            case 801:
            case 802:
            case 803:
            case 951:
                wPic = "http://www.animatedimages.org/data/media/148/animated-weather-image-0063.gif"; // clear/calm
                alt = "animated-weather-image-0063";
                break;

            case 804:
                wPic = "http://www.animatedimages.org/data/media/148/animated-weather-image-0027.gif"; // overcast
                alt = "animated-weather-image-0027";
                break;

            case 901:
            case 902:
            case 960:
            case 961:
            case 962:
                wPic = "http://www.animatedimages.org/data/media/148/animated-weather-image-0012.gif"; // tropical storm/hurricane
                alt = "animated-weather-image-0012";
                break;

            case 903:
                wPic = "http://www.animatedimages.org/data/media/148/animated-weather-image-0046.gif"; // cold
                alt = "animated-weather-image-0046";
                break;

            case 904:
                wPic = "http://www.animatedimages.org/data/media/148/animated-weather-image-0079.gif"; // hot
                alt = "animated-weather-image-0079";
                break;

            case 906:
                wPic = "http://www.animatedimages.org/data/media/148/animated-weather-image-0089.gif"; // hail
                alt = "animated-weather-image-0089";
                break;
        }


        if (x === 0) {

            $("#day-zero .day").append(day); // assigns day of the week

            $("#day-zero .card-front h1").append(temperatureF); // assigns Fahrenheit temperature
            $("#day-zero .card-front .description").append(desc); // assigns description of weather on front of card
            $("#day-zero .card-front .high").append(highF); // assigns Fahrenheit high temperature
            $("#day-zero .card-front .low").append(lowF); // assigns Fahrenheit low temperature

            $("#day-zero .card-back h1").append(temperatureC); // assigns Celcius temperature
            $("#day-zero .card-back .description").append(desc); // assigns description of weather on back of card
            $("#day-zero .card-back .high").append(highC); // assigns Celcius high temperature
            $("#day-zero .card-back .low").append(lowC); // assigns Celcius low temperature

            $("#day-zero .wpic").attr("src", wPic); // assigns gif

        } else if (x === 1) {

            $("#day-one .day").append(day);

            $("#day-one .card-front h1").prepend(temperatureF);
            $("#day-one .card-front .description").append(desc);
            $("#day-one .card-front .high").append(highF);
            $("#day-one .card-front .low").append(lowF);

            $("#day-one .card-back h1").prepend(temperatureC);
            $("#day-one .card-back .description").append(desc);
            $("#day-one .card-back .high").append(highC);
            $("#day-one .card-back .low").append(lowC);

            $("#day-one .wpic").attr("src", wPic);

        } else if (x === 2) {

            $("#day-two .day").append(day);

            $("#day-two .card-front h1").prepend(temperatureF);
            $("#day-two .card-front .description").append(desc);
            $("#day-two .card-front .high").append(highF);
            $("#day-two .card-front .low").append(lowF);

            $("#day-two .card-back h1").prepend(temperatureC);
            $("#day-two .card-back .description").append(desc);
            $("#day-two .card-back .high").append(highC);
            $("#day-two .card-back .low").append(lowC);

            $("#day-two .wpic").attr("src", wPic);

        } else if (x === 3) {

            $("#day-three .day").append(day);

            $("#day-three .card-front h1").prepend(temperatureF);
            $("#day-three .card-front .description").append(desc);
            $("#day-three .card-front .high").append(highF);
            $("#day-three .card-front .low").append(lowF);

            $("#day-three .card-back h1").prepend(temperatureC);
            $("#day-three .card-back .description").append(desc);
            $("#day-three .card-back .high").append(highC);
            $("#day-three .card-back .low").append(lowC);

            $("#day-three .wpic").attr("src", wPic);

        } else if (x === 4) {

            $("#day-four .day").append(day);

            $("#day-four .card-front h1").prepend(temperatureF);
            $("#day-four .card-front .description").append(desc);
            $("#day-four .card-front .high").append(highF);
            $("#day-four .card-front .low").append(lowF);

            $("#day-four .card-back h1").prepend(temperatureC);
            $("#day-four .card-back .description").append(desc);
            $("#day-four .card-back .high").append(highC);
            $("#day-four .card-back .low").append(lowC);

            $("#day-four .wpic").attr("src", wPic);
        }
    }
}


function weatherF(K) {
    return Math.round(1.8 * (K - 273) + 32);
}

function weatherC(K) {
    return Math.round(K - 273.15);
}


function clearData() {
    $("#city").empty();
    $("#title p").empty();
    $("#search").val("");
    $(".day").empty();
    $(".description").empty();
    $(".high").empty();
    $(".low").empty();
    $("staggered img").removeAttr("src");

    $("#day-zero h1").empty();
    $("#day-one h1").empty();
    $("#day-two h1").empty();
    $("#day-three h1").empty();
    $("#day-four h1").empty();
}


function buttonUpAnimation() {
    $("footer").css({
        marginTop: "",
        marginLeft: ""
    });

    $("#send-button i").animateRotate(-1).removeClass("toggled");

    $("li").hide();

    $("#title").animate({
        marginTop: "20%",
        height: "350px"
    }).removeClass("toggled");

    $("form").show();
}

function buttonDownAnimation() {
    $("footer").css({
        marginTop: "-6%",
        marginLeft: "-5%"
    });

    $("#send-button i").animateRotate(90).addClass("toggled");

    $("#title").animate({
        marginTop: "0px",
        height: "130px"
    }).addClass("toggled");

    $("li").show();

    $("form").hide();
}


// Flipping Card Trick: http://callmenick.com/post/css-transitions-transforms-animations-flipping-card
(function() {
    var cards = document.querySelectorAll(".card.effect-click");
    var fahrenheit = document.getElementById("fahrenheit");
    var celcius = document.getElementById("celcius");

    for (var i = 0, len = cards.length; i < len; i++) {
        var card = cards[i];
        clickListener(card);
    }

    function clickListener(card) {
        fahrenheit.addEventListener("click", function() {
            var c = card.classList;

            if (c.contains("flipped") === true) {
                c.remove("flipped");
            }
        });

        celcius.addEventListener("click", function() {
            var c = card.classList;

            if (c.contains("flipped") === false) {
                c.add("flipped");
            }
        });

        card.addEventListener("click", function() {
            var c = this.classList;
            c.contains("flipped") === true ? c.remove("flipped") : c.add("flipped");
        });
    }
})();


// Rotate send button: http://stackoverflow.com/questions/15191058/css-rotation-cross-browser-with-jquery-animate
$.fn.animateRotate = function(angle, duration, easing, complete) {
    var args = $.speed(duration, easing, complete);
    var step = args.step;
    return this.each(function(i, e) {
        args.complete = $.proxy(args.complete, e);
        args.step = function(now) {
            $.style(e, 'transform', 'rotate(' + now + 'deg)');
            if (step) return step.apply(e, arguments);
        };

        $({
            deg: 0
        }).animate({
            deg: angle
        }, args);
    });
};
