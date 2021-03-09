/*!

Name: Open Weather
Dependencies: jQuery, OpenWeatherMap API
Author: Michael Lynch
Author URL: http://michaelynch.com
Date Created: August 28, 2013
Licensed under the MIT license

*/
!function(t) {
    t.fn.openWeather = function(e) {
        if (!this.length)
            return this;
        const n = t(this);
        this.settings = {},
        this.settings = t.extend({}, {
            descriptionTarget: null,
            maxTemperatureTarget: null,
            minTemperatureTarget: null,
            windSpeedTarget: null,
            humidityTarget: null,
            sunriseTarget: null,
            sunsetTarget: null,
            placeTarget: null,
            iconTarget: null,
            customIcons: null,
            units: "c",
            city: null,
            lat: null,
            lng: null,
            key: null,
            lang: "en",
            success: function() {},
            error: function(t) {}
        }, e);
        const r = this.settings
          , i = function(t) {
            const e = new Date(1e3 * t);
            let n = e.getHours();
            if (n > 12) {
                n = 12 - (24 - n)
            }
            let r = e.getMinutes();
            return (r = r.toString()).length < 2 && (r = 0 + r),
            n + ":" + r
        };
        let a, l, s, u, o = "//api.openweathermap.org/data/2.5/weather?lang=" + r.lang;
        null != r.city ? o += "&q=" + r.city : null != r.lat && null != r.lng && (o += "&lat=" + r.lat + "&lon=" + r.lng),
        null != r.key && (o += "&appid=" + r.key),
        t.ajax({
            type: "GET",
            url: o,
            dataType: "jsonp",
            success: function(e) {
                if (e) {
                    if ("f" == r.units ? (l = Math.round(1.8 * (e.main.temp - 273.15) + 32) + "°F",
                    s = Math.round(1.8 * (e.main.temp_min - 273.15) + 32) + "°F",
                    u = Math.round(1.8 * (e.main.temp_max - 273.15) + 32) + "°F") : (l = Math.round(e.main.temp - 273.15) + "°C",
                    s = Math.round(e.main.temp_min - 273.15) + "°C",
                    u = Math.round(e.main.temp_max - 273.15) + "°C"),
                    a = {
                        city: `${e.name}, ${e.sys.country}`,
                        temperature: {
                            current: l,
                            min: s,
                            max: u,
                            units: r.units.toUpperCase()
                        },
                        description: e.weather[0].description,
                        windspeed: `${Math.round(e.wind.speed)} Mps`,
                        humidity: `${e.main.humidity}%`,
                        sunrise: `${i(e.sys.sunrise)} AM`,
                        sunset: `${i(e.sys.sunset)} PM`
                    },
                    n.html(l),
                    null != r.minTemperatureTarget && t(r.minTemperatureTarget).text(s),
                    null != r.maxTemperatureTarget && t(r.maxTemperatureTarget).text(u),
                    t(r.descriptionTarget).text(a.description),
                    null != r.iconTarget && null != e.weather[0].icon) {
                        let n;
                        if (null != r.customIcons) {
                            const t = e.weather[0].icon;
                            let i, a;
                            i = -1 != t.indexOf("d") ? "day" : "night",
                            "01d" != t && "01n" != t || (a = "clear"),
                            "02d" != t && "02n" != t && "03d" != t && "03n" != t && "04d" != t && "04n" != t || (a = "clouds"),
                            "09d" != t && "09n" != t && "10d" != t && "10n" != t || (a = "rain"),
                            "11d" != t && "11n" != t || (a = "storm"),
                            "13d" != t && "13n" != t || (a = "snow"),
                            "50d" != t && "50n" != t || (a = "mist"),
                            n = `${r.customIcons}${i}/${a}.png`
                        } else
                            n = `http://openweathermap.org/img/w/${e.weather[0].icon}.png`;
                        t(r.iconTarget).attr("src", n)
                    }
                    null != r.placeTarget && t(r.placeTarget).text(a.city),
                    null != r.windSpeedTarget && t(r.windSpeedTarget).text(a.windspeed),
                    null != r.humidityTarget && t(r.humidityTarget).text(a.humidity),
                    null != r.sunriseTarget && t(r.sunriseTarget).text(a.sunrise),
                    null != r.sunsetTarget && t(r.sunsetTarget).text(a.sunset),
                    r.success.call(this, a)
                }
            },
            error: function(t, e, n) {
                r.error.call(this, {
                    error: e
                })
            }
        })
    }
}(jQuery);
