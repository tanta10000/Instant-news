!function (e) {
    function t(r) {
        if (n[r]) return n[r].exports;
        var o = n[r] = {exports: {}, id: r, loaded: !1};
        return e[r].call(o.exports, o, o.exports, t), o.loaded = !0, o.exports
    }

    var n = {};
    return t.m = e, t.c = n, t.p = "//s3.pstatp.com/growth/fe_sdk/", t(0)
}([function (e, t, n) {
    e.exports = n(4)
}, , , , function (e, t, n) {
    "use strict";
    !function (e, t) {
        function r() {
            h.isGrowthWap && (window.group_id && p.extend(!0, h, {
                id: window.group_id,
                type: "detail",
                isNewVideo: window.isNewVideoPage
            }), h.isGrowthWap && window.ttGTM && i.getGTMValue("bannerTitle") && y.find(".banner-label .tb").text(i.getGTMValue("bannerTitle")))
        }

        function o() {
            p("head").append("<style>" + g.confusedSTYLE + "</style>"), y.find(".banner-label .tb").text(h.title), y.find(".banner-label .title-sub").text(h.subTitle), y.find(".open").text(h.btnText), p("body").prepend(y), i.initScrollEvents(y, g.map), "function" == typeof h.callback && h.callback.call({_el: y})
        }

        var i = n(5), a = n(55), s = (n(56), n(57)), u = n(61), l = n(81), c = n(85), f = n(86), d = n(93), p = n(94),
            h = {
                show: !0,
                pos: "top",
                bannerCls: "",
                title: "今日头条",
                subTitle: "",
                btnText: "打开",
                isGrowthWap: !1,
                callback: function () {
                },
                addScheme: !1,
                onClick: function () {
                }
            };
        window.ttBannerConf && p.extend(!0, h, window.ttBannerConf);
        var m = u(h),
            v = ["pageletBanner", "banner-" + h.pos, "banner-pannel", "pannel-" + h.pos, "show-" + h.pos + "-pannel", "hide-" + h.pos + "-pannel"],
            g = i.confused(m, s[0][1], v), y = p(g.confusedTMPL);
        r();
        var b = {
            init: function () {
                if ("diamond" !== a.request("source")) {
                    var e = a.request("app");
                    "topbuzz_video_cn" !== e && (o(), y.on("click", ".close", function (e) {
                        b.onCloseClick(e)
                    }), h.isGrowthWap && window.ttGTM && (i.getGTMValue("hide" + a.capitalizeFirstLetter(h.pos) + "Banner") && y.hide(), i.getGTMValue("bannerSubTitle"), i.getGTMValue("preventDongTaiDaBao") && (h.preventDongTaiDaBao = !0)), b.downloadHook(h))
                }
            }, onCloseClick: function (e) {
                e.preventDefault(), y.remove(), a.cookie(h.pos + "-banner-hide-status", !0, {path: "/"})
            }, downloadHook: function (e) {
                y.on("click", ".download", function (t) {
                    t.preventDefault(), e.onClick && "function" == typeof e.onClick && e.onClick(), f(e)
                })
            }
        };
        h.show && !a.cookie(h.pos + "-banner-hide-status") && b.init(), h.addScheme && d(), e.ttGrowth = {
            ttWap2App: c,
            ttAppDownload: l,
            ttActivate: f
        }
    }(window, document)
}, function (e, t, n) {
    "use strict";

    function r(e) {
        return e && e.__esModule ? e : {default: e}
    }

    function o() {
        var e = navigator.userAgent.toLowerCase(), t = N.parseQuery("debug");
        return "weixin" == t || "micromessenger" == e.match(/MicroMessenger/i)
    }

    function i() {
        if (!o()) return !1;
        var e = N.parseQuery("isappinstalled") - 0, t = N.parseQuery("wxshare_count");
        return !(!e || t && !(t < 2))
    }

    function a(e, t) {
        if (t = "undefined" != typeof t && t, window.ttGTM) {
            var n = null;
            return n = window.isListPage ? ttGTM.list : o() ? ttGTM.weixin : ttGTM.detail, n = n || {}, e in n ? n[e] : t
        }
        return t
    }

    function s(e) {
        var t, n, r = (t = {
                joke_essay: 5,
                news_article: 14,
                news_article_social: 20,
                news_article_lite: 35,
                joke_essay_social: 21,
                saying_essay_social: 22,
                explore_article: 25,
                joke_zone: 27,
                video_article: 32
            }, (0, D.default)(t, "news_article_lite", 35), (0, D.default)(t, "live_stream", 1112), (0, D.default)(t, "aweme", 1128), (0, D.default)(t, "wenda", 1165), t),
            o = e.app || N.request("app") || "news_article", i = 1;
        return R.os.android && (i = 3), "video_article" !== o && "news_article_lite" !== o && "live_stream" !== o && "aweme" !== o && "wenda" !== o || (i = ""), o.length ? (n = r[o], 21 != n && 24 != n || (n = 5), 22 == n && (n = 9), 20 == n && 3 == i && (n = 14), "snssdk" + n + i + "://") : ""
    }

    function u(e) {
        var t = {}, n = e.gdLabel || "", r = e.type || "home";
        switch (r) {
            case"detail":
                break;
            case"comment":
                (0, A.default)(t, {enter_comment: n});
                break;
            case"mediaProfile":
                (0, A.default)(t, {event: "pgc_profile", label: n});
                break;
            case"videoProfile":
                (0, A.default)(t, {event: "profile", label: n});
                break;
            case"home":
                (0, A.default)(t, {event: "home", label: n})
        }
        return t
    }

    function l(e) {
        var t = e.app || "news_article";
        if (e.nativeLink && e.nativeLink.length) {
            var n = e.group_id || e.item_id || e.id;
            return "news_article" === t && n ? e.nativeLink.replace(/uid=(\d+)/, "uid=" + n) : e.nativeLink
        }
        switch (t) {
            case"aweme":
                return m(e);
            case"live_stream":
                return h(e);
            case"joke_essay":
                return v(e);
            case"video_article":
                return f(e);
            case"auto_mobile":
                return p({
                    home: "snssdk36://?",
                    card: "snssdk36://concern?cid={{card_id}}",
                    article: "snssdk36://detail?item_id={{item_id}}&groupid={{group_id}}"
                }, e);
            default:
                return g(e)
        }
    }

    function c(e) {
        var t = "", n = "";
        switch (e.app) {
            case"aweme":
                n = "//amemv.com/redirect/?redirect_url={scheme}", t = t.replace(/^snssdk1128/, "aweme");
                break;
            case"live_stream":
                n = "//huoshan.com/redirect/?redirect_url={scheme}";
                break;
            case"joke_essay":
                n = "//neihanshequ.com/redirect/?redirect_url={scheme}";
                break;
            case"video_article":
                n = "//365yg.com/m/video_detail/?";
                break;
            case"wenda":
                n = " //wukong.com/openapp/?scheme={scheme}";
                break;
            default:
                n = "//toutiao.com/m/detail/?"
        }
        if (n = e.universalLink && "string" == typeof e.universalLink ? e.universalLink : n, t = e.nativeLink || t, e.app && ["video_article", "news_article"].indexOf(e.app) < 0) return n.replace("{scheme}", encodeURIComponent(t));
        var r = e.gdLabel || "click_" + (o() ? "weixin" : "wap") + "_ios_deeplink";
        t.indexOf("gd_label") === -1 && (t += "&gd_label=" + r);
        var i = {group_id: e.group_id, item_id: "", scheme: encodeURIComponent(t)};
        return n += N.toQuery(i)
    }

    function f(e) {
        var t = e.scheme || s(e), n = e.gdLabel || "", r = e.type || "home", o = e.id || e.group_id || window.group_id,
            i = "", a = (0, C.default)(u(e));
        switch (r) {
            case"home":
                i = t + "home?" + N.toQuery({gd_label: n, gd_ext_json: a});
                break;
            case"detail":
                i = t + "detail?" + N.toQuery({groupid: o, gd_label: n, gd_ext_json: a})
        }
        return i
    }

    function d(e, t) {
        return e.replace(/\{\{([\w\.]*)\}\}/g, function (e, n) {
            for (var r = n.split("."), o = t[r.shift()], i = 0, a = r.length; i < a; i++) o = o[r[i]];
            return "undefined" != typeof o && null !== o ? o : ""
        })
    }

    function p(e, t) {
        var n = t.type || "home", r = e[n] || "";
        if (r = d(r, t), t.gdLabel) {
            var o = r.indexOf("?"), i = o === r.length - 1 ? "" : o < 0 ? "?" : "&";
            r += i + "gd_label=" + t.gdLabel
        }
        return r
    }

    function h(e) {
        var t = {
            room: "snssdk1112://room?id={{room_id}}",
            detail: "snssdk1112://item?id={{item_id}}&detail_label=return_page",
            item_follow: "snssdk1112://item?id={{item_id}}&auto_follow=1&detail_label=return_page",
            home: "snssdk1112://",
            profile: "snssdk1112://profile?id={{user_id}}",
            profile_follow: "snssdk1112://profile?id={{user_id}}&auto_follow=1",
            webview: "snssdk1112://webview?url={{url}}&title={{title}}"
        };
        return p(t, e)
    }

    function m(e) {
        var t = {
            home: "snssdk1128://feed?refer=web",
            detail: "snssdk1128://aweme/detail/{{item_id}}?refer=web",
            user: "snssdk1128://user/profile/{{uid}}?refer=web&type={{type}}",
            challenge: "snssdk1128://challenge/detail/{{id}}?refer=web",
            music: "snssdk1128://music/detail/{{id}}?refer=web"
        };
        return p(t, e)
    }

    function v(e) {
        var t = e.scheme || s(e), n = {home: t + "?", detail: t + "comments?groupid={{group_id}}"};
        return p(n, e)
    }

    function g(e) {
        function t(e, t) {
            var n = null;
            return t && t.isNewVideo && (n = 64), n && (e += "&flags=" + n), e
        }

        var n = e.scheme || s(e), r = e.gdLabel || "", o = N.request("page_type") || e.type || "home",
            i = e.id || e.group_id || window.group_id, a = e.origin_from, l = "", c = (0, C.default)(u(e));
        switch (o) {
            case"detail":
                var f = {groupid: i, gd_label: r, gd_ext_json: c};
                "diversionsdk" === a && delete f.gd_ext_json, l = n + "detail?" + N.toQuery(f), l = t(l, e);
                break;
            case"comment":
                l = n + "detail?" + N.toQuery({groupid: i, showcomment: 1, gd_label: r, gd_ext_json: c}), l = t(l, e);
                break;
            case"mediaProfile":
                l = n + "media_account?" + N.toQuery({media_id: i, gd_ext_json: c});
                break;
            case"profile":
                l = n + "profile?" + N.toQuery({
                    uid: i,
                    source: e.source,
                    from_page: e.from_page,
                    gd_ext_json: encodeURIComponent(c)
                });
                break;
            case"videoProfile":
                l = n + "pgcprofile?" + N.toQuery({user_id: i, gd_ext_json: c});
                break;
            case"home":
                l = n + "home/news?" + N.toQuery({growth_from: e.growth_from, gd_ext_json: encodeURIComponent(c)});
                break;
            case"search":
                l = n + "home/news?" + N.toQuery({keyword: e.keyword, growth_from: e.growth_from, gd_ext_json: c});
                break;
            case"add_friend":
                l = n + "add_friend?" + N.toQuery({
                    profile_user_id: i,
                    from_page: e.from_page,
                    gd_ext_json: encodeURIComponent(c)
                })
        }
        return e.item_id && (l += "&aggr_type=2&item_id=" + e.item_id), l
    }

    function y(e, t, n) {
        var r = function (e) {
            for (var t = [], n = 0; n < e; n++) {
                var r = String.fromCharCode(Math.floor(26 * Math.random()) + 65), o = Math.ceil(10 * Math.random());
                o % 2 === 1 && (r = r.toLowerCase()), t.push(r)
            }
            return t.join("")
        }, o = function () {
            return Math.ceil(15 * Math.random())
        }, i = {}, a = e, s = t;
        return n.forEach(function (e) {
            var t = r(o()) + r(o());
            a = a.replace(new RegExp(e, "ig"), t), s = s.replace(new RegExp(e, "ig"), t), i[e] = t
        }), {confusedTMPL: a, confusedSTYLE: s, map: i}
    }

    function b(e, t) {
        function n(e) {
            var n = window.scrollY || window.pageYOffset || document.body.scrollTop || document.documentElement.scrollTop;
            a && n > o && n > i ? (a = !1, r.find("." + t["show-top-pannel"]).length && r.find("." + t["show-top-pannel"]).removeClass(t["show-top-pannel"]).addClass(t["hide-top-pannel"])) : !a && n <= i && (a = !0, r.find("." + t["hide-top-pannel"]).length && r.find("." + t["hide-top-pannel"]).removeClass(t["hide-top-pannel"]).addClass(t["show-top-pannel"])), i = n
        }

        var r = e, o = 100 * (window.responsive || {dpr: 1}).dpr, i = 0, a = !0;
        $(window).on("scroll", n)
    }

    function w(e) {
        setTimeout(function () {
            location.href = e
        }, 100)
    }

    function x(e) {
        return N.cookie(e) || N.parseQuery(e) || ""
    }

    function _() {
        return {
            __type__: "app_track",
            resolution: window.screen.availWidth * window.devicePixelRatio + "*" + window.screen.availHeight * window.devicePixelRatio,
            webid: N.cookie("tt_webid") || "",
            utm_source: x("utm_source")
        }
    }

    function k(e) {
        var t = "sslocal://", n = e.type || "home", r = e.group_id, o = "";
        switch (n) {
            case"detail":
                o = t + "detail?groupid=" + r;
                break;
            case"comment":
                o = t + "detail?groupid=" + r + "&showcomment=1";
                break;
            case"mediaProfile":
                o = t + "media_account?media_id=" + r;
                break;
            case"home":
                o = t + "home/news";
                break;
            case"profile":
                o = t + "profile?uid" + e.id + "&source=weixin_friend_card&from_page=weixin_friend_card";
                break;
            case"add_friend":
                o = t + "add_friend?profile_user_id" + e.id + "&from_page=weixin_friend_card"
        }
        return o
    }

    function j(e, t) {
        for (var n = e.substring(e.indexOf("?") + 1, e.length).split("&"), r = {}, o = 0, i = n.length; o < i; o++) {
            var a = n[o].split("=");
            r[a[0]] = decodeURIComponent(a[1])
        }
        return t ? r[t] : r
    }

    function O(e, t) {
        if (!t) return e;
        var n, r = (0, P.default)(t).reduce(function (e, n) {
            return e = e + (e ? "&" : "") + n + "=" + encodeURIComponent(t[n])
        }, ""), o = document.createElement("a");
        return o.href = e, n = o.search ? o.search + "&" + r : "?" + r, o.protocol + "//" + o.host + o.pathname + n + o.hash
    }

    function E(e, t) {
        return fetch(e, t).then(function (e) {
            return e
        }, function (e) {
            throw new Error(e)
        }).then(function (e) {
            return e.json()
        }).then(function (e) {
            return e
        })
    }

    function T(e) {
        var t = "open_url=" + encodeURIComponent(e.nativeLink), n = "http://[::1]:28192?" + t,
            r = "http://127.0.0.1:28192?" + t;
        return E(n).then(function (e) {
        }, function (e) {
            return E(r)
        })
    }

    var S = n(6), P = r(S), B = n(42), C = r(B), L = n(44), A = r(L), M = n(50), D = r(M);
    n(54);
    var N = n(55), R = n(56);
    e.exports = {
        isWeixin: o,
        isAppInstalled: i,
        getGTMValue: a,
        getScheme: s,
        getNativeLink: l,
        getDeepLink: c,
        confused: y,
        initScrollEvents: b,
        gotoSurlDownload: w,
        getUTMValue: x,
        getAppTrackData: _,
        getOpenUrl: k,
        parseQuery: j,
        appendQuery: O,
        androidLocalServer: T
    }
}, function (e, t, n) {
    e.exports = {default: n(7), __esModule: !0}
}, function (e, t, n) {
    n(8), e.exports = n(23).Object.keys
}, function (e, t, n) {
    var r = n(9), o = n(11);
    n(28)("keys", function () {
        return function (e) {
            return o(r(e))
        }
    })
}, function (e, t, n) {
    var r = n(10);
    e.exports = function (e) {
        return Object(r(e))
    }
}, function (e, t) {
    e.exports = function (e) {
        if (void 0 == e) throw TypeError("Can't call method on  " + e);
        return e
    }
}, function (e, t, n) {
    var r = n(12), o = n(27);
    e.exports = Object.keys || function (e) {
        return r(e, o)
    }
}, function (e, t, n) {
    var r = n(13), o = n(14), i = n(17)(!1), a = n(21)("IE_PROTO");
    e.exports = function (e, t) {
        var n, s = o(e), u = 0, l = [];
        for (n in s) n != a && r(s, n) && l.push(n);
        for (; t.length > u;) r(s, n = t[u++]) && (~i(l, n) || l.push(n));
        return l
    }
}, function (e, t) {
    var n = {}.hasOwnProperty;
    e.exports = function (e, t) {
        return n.call(e, t)
    }
}, function (e, t, n) {
    var r = n(15), o = n(10);
    e.exports = function (e) {
        return r(o(e))
    }
}, function (e, t, n) {
    var r = n(16);
    e.exports = Object("z").propertyIsEnumerable(0) ? Object : function (e) {
        return "String" == r(e) ? e.split("") : Object(e)
    }
}, function (e, t) {
    var n = {}.toString;
    e.exports = function (e) {
        return n.call(e).slice(8, -1)
    }
}, function (e, t, n) {
    var r = n(14), o = n(18), i = n(20);
    e.exports = function (e) {
        return function (t, n, a) {
            var s, u = r(t), l = o(u.length), c = i(a, l);
            if (e && n != n) {
                for (; l > c;) if (s = u[c++], s != s) return !0
            } else for (; l > c; c++) if ((e || c in u) && u[c] === n) return e || c || 0;
            return !e && -1
        }
    }
}, function (e, t, n) {
    var r = n(19), o = Math.min;
    e.exports = function (e) {
        return e > 0 ? o(r(e), 9007199254740991) : 0
    }
}, function (e, t) {
    var n = Math.ceil, r = Math.floor;
    e.exports = function (e) {
        return isNaN(e = +e) ? 0 : (e > 0 ? r : n)(e)
    }
}, function (e, t, n) {
    var r = n(19), o = Math.max, i = Math.min;
    e.exports = function (e, t) {
        return e = r(e), e < 0 ? o(e + t, 0) : i(e, t)
    }
}, function (e, t, n) {
    var r = n(22)("keys"), o = n(26);
    e.exports = function (e) {
        return r[e] || (r[e] = o(e))
    }
}, function (e, t, n) {
    var r = n(23), o = n(24), i = "__core-js_shared__", a = o[i] || (o[i] = {});
    (e.exports = function (e, t) {
        return a[e] || (a[e] = void 0 !== t ? t : {})
    })("versions", []).push({
        version: r.version,
        mode: n(25) ? "pure" : "global",
        copyright: "© 2019 Denis Pushkarev (zloirock.ru)"
    })
}, function (e, t) {
    var n = e.exports = {version: "2.6.9"};
    "number" == typeof __e && (__e = n)
}, function (e, t) {
    var n = e.exports = "undefined" != typeof window && window.Math == Math ? window : "undefined" != typeof self && self.Math == Math ? self : Function("return this")();
    "number" == typeof __g && (__g = n)
}, function (e, t) {
    e.exports = !0
}, function (e, t) {
    var n = 0, r = Math.random();
    e.exports = function (e) {
        return "Symbol(".concat(void 0 === e ? "" : e, ")_", (++n + r).toString(36))
    }
}, function (e, t) {
    e.exports = "constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")
}, function (e, t, n) {
    var r = n(29), o = n(23), i = n(38);
    e.exports = function (e, t) {
        var n = (o.Object || {})[e] || Object[e], a = {};
        a[e] = t(n), r(r.S + r.F * i(function () {
            n(1)
        }), "Object", a)
    }
}, function (e, t, n) {
    var r = n(24), o = n(23), i = n(30), a = n(32), s = n(13), u = "prototype", l = function (e, t, n) {
        var c, f, d, p = e & l.F, h = e & l.G, m = e & l.S, v = e & l.P, g = e & l.B, y = e & l.W,
            b = h ? o : o[t] || (o[t] = {}), w = b[u], x = h ? r : m ? r[t] : (r[t] || {})[u];
        h && (n = t);
        for (c in n) f = !p && x && void 0 !== x[c], f && s(b, c) || (d = f ? x[c] : n[c], b[c] = h && "function" != typeof x[c] ? n[c] : g && f ? i(d, r) : y && x[c] == d ? function (e) {
            var t = function (t, n, r) {
                if (this instanceof e) {
                    switch (arguments.length) {
                        case 0:
                            return new e;
                        case 1:
                            return new e(t);
                        case 2:
                            return new e(t, n)
                    }
                    return new e(t, n, r)
                }
                return e.apply(this, arguments)
            };
            return t[u] = e[u], t
        }(d) : v && "function" == typeof d ? i(Function.call, d) : d, v && ((b.virtual || (b.virtual = {}))[c] = d, e & l.R && w && !w[c] && a(w, c, d)))
    };
    l.F = 1, l.G = 2, l.S = 4, l.P = 8, l.B = 16, l.W = 32, l.U = 64, l.R = 128, e.exports = l
}, function (e, t, n) {
    var r = n(31);
    e.exports = function (e, t, n) {
        if (r(e), void 0 === t) return e;
        switch (n) {
            case 1:
                return function (n) {
                    return e.call(t, n)
                };
            case 2:
                return function (n, r) {
                    return e.call(t, n, r)
                };
            case 3:
                return function (n, r, o) {
                    return e.call(t, n, r, o)
                }
        }
        return function () {
            return e.apply(t, arguments)
        }
    }
}, function (e, t) {
    e.exports = function (e) {
        if ("function" != typeof e) throw TypeError(e + " is not a function!");
        return e
    }
}, function (e, t, n) {
    var r = n(33), o = n(41);
    e.exports = n(37) ? function (e, t, n) {
        return r.f(e, t, o(1, n))
    } : function (e, t, n) {
        return e[t] = n, e
    }
}, function (e, t, n) {
    var r = n(34), o = n(36), i = n(40), a = Object.defineProperty;
    t.f = n(37) ? Object.defineProperty : function (e, t, n) {
        if (r(e), t = i(t, !0), r(n), o) try {
            return a(e, t, n)
        } catch (e) {
        }
        if ("get" in n || "set" in n) throw TypeError("Accessors not supported!");
        return "value" in n && (e[t] = n.value), e
    }
}, function (e, t, n) {
    var r = n(35);
    e.exports = function (e) {
        if (!r(e)) throw TypeError(e + " is not an object!");
        return e
    }
}, function (e, t) {
    e.exports = function (e) {
        return "object" == typeof e ? null !== e : "function" == typeof e
    }
}, function (e, t, n) {
    e.exports = !n(37) && !n(38)(function () {
        return 7 != Object.defineProperty(n(39)("div"), "a", {
            get: function () {
                return 7
            }
        }).a
    })
}, function (e, t, n) {
    e.exports = !n(38)(function () {
        return 7 != Object.defineProperty({}, "a", {
            get: function () {
                return 7
            }
        }).a
    })
}, function (e, t) {
    e.exports = function (e) {
        try {
            return !!e()
        } catch (e) {
            return !0
        }
    }
}, function (e, t, n) {
    var r = n(35), o = n(24).document, i = r(o) && r(o.createElement);
    e.exports = function (e) {
        return i ? o.createElement(e) : {}
    }
}, function (e, t, n) {
    var r = n(35);
    e.exports = function (e, t) {
        if (!r(e)) return e;
        var n, o;
        if (t && "function" == typeof (n = e.toString) && !r(o = n.call(e))) return o;
        if ("function" == typeof (n = e.valueOf) && !r(o = n.call(e))) return o;
        if (!t && "function" == typeof (n = e.toString) && !r(o = n.call(e))) return o;
        throw TypeError("Can't convert object to primitive value")
    }
}, function (e, t) {
    e.exports = function (e, t) {
        return {enumerable: !(1 & e), configurable: !(2 & e), writable: !(4 & e), value: t}
    }
}, function (e, t, n) {
    e.exports = {default: n(43), __esModule: !0}
}, function (e, t, n) {
    var r = n(23), o = r.JSON || (r.JSON = {stringify: JSON.stringify});
    e.exports = function (e) {
        return o.stringify.apply(o, arguments)
    }
}, function (e, t, n) {
    e.exports = {default: n(45), __esModule: !0}
}, function (e, t, n) {
    n(46), e.exports = n(23).Object.assign
}, function (e, t, n) {
    var r = n(29);
    r(r.S + r.F, "Object", {assign: n(47)})
}, function (e, t, n) {
    "use strict";
    var r = n(37), o = n(11), i = n(48), a = n(49), s = n(9), u = n(15), l = Object.assign;
    e.exports = !l || n(38)(function () {
        var e = {}, t = {}, n = Symbol(), r = "abcdefghijklmnopqrst";
        return e[n] = 7, r.split("").forEach(function (e) {
            t[e] = e
        }), 7 != l({}, e)[n] || Object.keys(l({}, t)).join("") != r
    }) ? function (e, t) {
        for (var n = s(e), l = arguments.length, c = 1, f = i.f, d = a.f; l > c;) for (var p, h = u(arguments[c++]), m = f ? o(h).concat(f(h)) : o(h), v = m.length, g = 0; v > g;) p = m[g++], r && !d.call(h, p) || (n[p] = h[p]);
        return n
    } : l
}, function (e, t) {
    t.f = Object.getOwnPropertySymbols
}, function (e, t) {
    t.f = {}.propertyIsEnumerable
}, function (e, t, n) {
    "use strict";

    function r(e) {
        return e && e.__esModule ? e : {default: e}
    }

    t.__esModule = !0;
    var o = n(51), i = r(o);
    t.default = function (e, t, n) {
        return t in e ? (0, i.default)(e, t, {value: n, enumerable: !0, configurable: !0, writable: !0}) : e[t] = n, e
    }
}, function (e, t, n) {
    e.exports = {default: n(52), __esModule: !0}
}, function (e, t, n) {
    n(53);
    var r = n(23).Object;
    e.exports = function (e, t, n) {
        return r.defineProperty(e, t, n)
    }
}, function (e, t, n) {
    var r = n(29);
    r(r.S + r.F * !n(37), "Object", {defineProperty: n(33).f})
}, function (e, t) {
    !function (e) {
        "use strict";

        function t(e) {
            if ("string" != typeof e && (e = String(e)), /[^a-z0-9\-#$%&'*+.\^_`|~]/i.test(e)) throw new TypeError("Invalid character in header field name");
            return e.toLowerCase()
        }

        function n(e) {
            return "string" != typeof e && (e = String(e)), e
        }

        function r(e) {
            var t = {
                next: function () {
                    var t = e.shift();
                    return {done: void 0 === t, value: t}
                }
            };
            return g.iterable && (t[Symbol.iterator] = function () {
                return t
            }), t
        }

        function o(e) {
            this.map = {}, e instanceof o ? e.forEach(function (e, t) {
                this.append(t, e)
            }, this) : Array.isArray(e) ? e.forEach(function (e) {
                this.append(e[0], e[1])
            }, this) : e && Object.getOwnPropertyNames(e).forEach(function (t) {
                this.append(t, e[t])
            }, this)
        }

        function i(e) {
            return e.bodyUsed ? Promise.reject(new TypeError("Already read")) : void (e.bodyUsed = !0)
        }

        function a(e) {
            return new Promise(function (t, n) {
                e.onload = function () {
                    t(e.result)
                }, e.onerror = function () {
                    n(e.error)
                }
            })
        }

        function s(e) {
            var t = new FileReader, n = a(t);
            return t.readAsArrayBuffer(e), n
        }

        function u(e) {
            var t = new FileReader, n = a(t);
            return t.readAsText(e), n
        }

        function l(e) {
            for (var t = new Uint8Array(e), n = new Array(t.length), r = 0; r < t.length; r++) n[r] = String.fromCharCode(t[r]);
            return n.join("")
        }

        function c(e) {
            if (e.slice) return e.slice(0);
            var t = new Uint8Array(e.byteLength);
            return t.set(new Uint8Array(e)), t.buffer
        }

        function f() {
            return this.bodyUsed = !1, this._initBody = function (e) {
                if (this._bodyInit = e, e) if ("string" == typeof e) this._bodyText = e; else if (g.blob && Blob.prototype.isPrototypeOf(e)) this._bodyBlob = e; else if (g.formData && FormData.prototype.isPrototypeOf(e)) this._bodyFormData = e; else if (g.searchParams && URLSearchParams.prototype.isPrototypeOf(e)) this._bodyText = e.toString(); else if (g.arrayBuffer && g.blob && b(e)) this._bodyArrayBuffer = c(e.buffer), this._bodyInit = new Blob([this._bodyArrayBuffer]); else {
                    if (!g.arrayBuffer || !ArrayBuffer.prototype.isPrototypeOf(e) && !w(e)) throw new Error("unsupported BodyInit type");
                    this._bodyArrayBuffer = c(e)
                } else this._bodyText = "";
                this.headers.get("content-type") || ("string" == typeof e ? this.headers.set("content-type", "text/plain;charset=UTF-8") : this._bodyBlob && this._bodyBlob.type ? this.headers.set("content-type", this._bodyBlob.type) : g.searchParams && URLSearchParams.prototype.isPrototypeOf(e) && this.headers.set("content-type", "application/x-www-form-urlencoded;charset=UTF-8"))
            }, g.blob && (this.blob = function () {
                var e = i(this);
                if (e) return e;
                if (this._bodyBlob) return Promise.resolve(this._bodyBlob);
                if (this._bodyArrayBuffer) return Promise.resolve(new Blob([this._bodyArrayBuffer]));
                if (this._bodyFormData) throw new Error("could not read FormData body as blob");
                return Promise.resolve(new Blob([this._bodyText]))
            }, this.arrayBuffer = function () {
                return this._bodyArrayBuffer ? i(this) || Promise.resolve(this._bodyArrayBuffer) : this.blob().then(s)
            }), this.text = function () {
                var e = i(this);
                if (e) return e;
                if (this._bodyBlob) return u(this._bodyBlob);
                if (this._bodyArrayBuffer) return Promise.resolve(l(this._bodyArrayBuffer));
                if (this._bodyFormData) throw new Error("could not read FormData body as text");
                return Promise.resolve(this._bodyText)
            }, g.formData && (this.formData = function () {
                return this.text().then(h)
            }), this.json = function () {
                return this.text().then(JSON.parse)
            }, this
        }

        function d(e) {
            var t = e.toUpperCase();
            return x.indexOf(t) > -1 ? t : e
        }

        function p(e, t) {
            t = t || {};
            var n = t.body;
            if (e instanceof p) {
                if (e.bodyUsed) throw new TypeError("Already read");
                this.url = e.url, this.credentials = e.credentials, t.headers || (this.headers = new o(e.headers)), this.method = e.method, this.mode = e.mode, n || null == e._bodyInit || (n = e._bodyInit, e.bodyUsed = !0)
            } else this.url = String(e);
            if (this.credentials = t.credentials || this.credentials || "omit", !t.headers && this.headers || (this.headers = new o(t.headers)), this.method = d(t.method || this.method || "GET"), this.mode = t.mode || this.mode || null, this.referrer = null, ("GET" === this.method || "HEAD" === this.method) && n) throw new TypeError("Body not allowed for GET or HEAD requests");
            this._initBody(n)
        }

        function h(e) {
            var t = new FormData;
            return e.trim().split("&").forEach(function (e) {
                if (e) {
                    var n = e.split("="), r = n.shift().replace(/\+/g, " "), o = n.join("=").replace(/\+/g, " ");
                    t.append(decodeURIComponent(r), decodeURIComponent(o))
                }
            }), t
        }

        function m(e) {
            var t = new o, n = e.replace(/\r?\n[\t ]+/g, " ");
            return n.split(/\r?\n/).forEach(function (e) {
                var n = e.split(":"), r = n.shift().trim();
                if (r) {
                    var o = n.join(":").trim();
                    t.append(r, o)
                }
            }), t
        }

        function v(e, t) {
            t || (t = {}), this.type = "default", this.status = void 0 === t.status ? 200 : t.status, this.ok = this.status >= 200 && this.status < 300, this.statusText = "statusText" in t ? t.statusText : "OK", this.headers = new o(t.headers), this.url = t.url || "", this._initBody(e)
        }

        if (!e.fetch) {
            var g = {
                searchParams: "URLSearchParams" in e,
                iterable: "Symbol" in e && "iterator" in Symbol,
                blob: "FileReader" in e && "Blob" in e && function () {
                    try {
                        return new Blob, !0
                    } catch (e) {
                        return !1
                    }
                }(),
                formData: "FormData" in e,
                arrayBuffer: "ArrayBuffer" in e
            };
            if (g.arrayBuffer) var y = ["[object Int8Array]", "[object Uint8Array]", "[object Uint8ClampedArray]", "[object Int16Array]", "[object Uint16Array]", "[object Int32Array]", "[object Uint32Array]", "[object Float32Array]", "[object Float64Array]"],
                b = function (e) {
                    return e && DataView.prototype.isPrototypeOf(e)
                }, w = ArrayBuffer.isView || function (e) {
                    return e && y.indexOf(Object.prototype.toString.call(e)) > -1
                };
            o.prototype.append = function (e, r) {
                e = t(e), r = n(r);
                var o = this.map[e];
                this.map[e] = o ? o + "," + r : r
            }, o.prototype.delete = function (e) {
                delete this.map[t(e)]
            }, o.prototype.get = function (e) {
                return e = t(e), this.has(e) ? this.map[e] : null
            }, o.prototype.has = function (e) {
                return this.map.hasOwnProperty(t(e))
            }, o.prototype.set = function (e, r) {
                this.map[t(e)] = n(r)
            }, o.prototype.forEach = function (e, t) {
                for (var n in this.map) this.map.hasOwnProperty(n) && e.call(t, this.map[n], n, this)
            }, o.prototype.keys = function () {
                var e = [];
                return this.forEach(function (t, n) {
                    e.push(n)
                }), r(e)
            }, o.prototype.values = function () {
                var e = [];
                return this.forEach(function (t) {
                    e.push(t)
                }), r(e)
            }, o.prototype.entries = function () {
                var e = [];
                return this.forEach(function (t, n) {
                    e.push([n, t])
                }), r(e)
            }, g.iterable && (o.prototype[Symbol.iterator] = o.prototype.entries);
            var x = ["DELETE", "GET", "HEAD", "OPTIONS", "POST", "PUT"];
            p.prototype.clone = function () {
                return new p(this, {body: this._bodyInit})
            }, f.call(p.prototype), f.call(v.prototype), v.prototype.clone = function () {
                return new v(this._bodyInit, {
                    status: this.status,
                    statusText: this.statusText,
                    headers: new o(this.headers),
                    url: this.url
                })
            }, v.error = function () {
                var e = new v(null, {status: 0, statusText: ""});
                return e.type = "error", e
            };
            var _ = [301, 302, 303, 307, 308];
            v.redirect = function (e, t) {
                if (_.indexOf(t) === -1) throw new RangeError("Invalid status code");
                return new v(null, {status: t, headers: {location: e}})
            }, e.Headers = o, e.Request = p, e.Response = v, e.fetch = function (e, t) {
                return new Promise(function (n, r) {
                    var o = new p(e, t), i = new XMLHttpRequest;
                    i.onload = function () {
                        var e = {
                            status: i.status,
                            statusText: i.statusText,
                            headers: m(i.getAllResponseHeaders() || "")
                        };
                        e.url = "responseURL" in i ? i.responseURL : e.headers.get("X-Request-URL");
                        var t = "response" in i ? i.response : i.responseText;
                        n(new v(t, e))
                    }, i.onerror = function () {
                        r(new TypeError("Network request failed"))
                    }, i.ontimeout = function () {
                        r(new TypeError("Network request failed"))
                    }, i.open(o.method, o.url, !0), "include" === o.credentials ? i.withCredentials = !0 : "omit" === o.credentials && (i.withCredentials = !1), "responseType" in i && g.blob && (i.responseType = "blob"), o.headers.forEach(function (e, t) {
                        i.setRequestHeader(t, e)
                    }), i.send("undefined" == typeof o._bodyInit ? null : o._bodyInit)
                })
            }, e.fetch.polyfill = !0
        }
    }("undefined" != typeof self ? self : this)
}, function (e, t, n) {
    "use strict";

    function r(e) {
        return e && e.__esModule ? e : {default: e}
    }

    function o(e) {
        for (var t = location.search, n = t.substring(t.indexOf("?") + 1, t.length).split("&"), r = {}, o = 0, i = n.length; o < i; o++) {
            var a = n[o];
            a && (r[a.substring(0, a.indexOf("=")).toLowerCase()] = a.substring(a.indexOf("=") + 1, a.length))
        }
        var s = r[e.toLowerCase()];
        return s ? s.trim() : ""
    }

    function i(e) {
        return (0, c.default)(e).map(function (t) {
            return [t, e[t]].join("=")
        }).join("&")
    }

    function a(e) {
        if (!e) return e;
        var e = e.toString();
        return e.charAt(0).toUpperCase() + e.slice(1)
    }

    function s(e, t) {
        var n, r;
        return t ? (r = document.createElement("a"), r.href = e, n = r.search ? r.search + "&" + t : "?" + t, r.protocol + "//" + r.host + r.pathname + n + r.hash) : e
    }

    function u(e) {
        for (var t = location.search, n = t.substring(1).split("&"), r = {}, o = 0, i = n.length; o < i; o++) {
            var a = n[o];
            a && (r[a.substring(0, a.indexOf("=")).toLowerCase()] = a.substring(a.indexOf("=") + 1, a.length))
        }
        if (!e) return r;
        var s = r[e.toLowerCase()];
        return s ? s.trim() : ""
    }

    var l = n(6), c = r(l), f = function e(t, n, r) {
        if ("undefined" == typeof n) {
            var o = null;
            if (document.cookie && "" != document.cookie) for (var i = document.cookie.split(";"), a = 0; a < i.length; a++) {
                var e = (window.jQuery || window.Zepto).trim(i[a]);
                if (e.substring(0, t.length + 1) == t + "=") {
                    o = decodeURIComponent(e.substring(t.length + 1));
                    break
                }
            }
            return o
        }
        r = r || {}, null === n && (n = "", r.expires = -1);
        var s = "";
        if (r.expires && ("number" == typeof r.expires || r.expires.toUTCString)) {
            var u;
            "number" == typeof r.expires ? (u = new Date, u.setTime(u.getTime() + r.expires)) : u = r.expires, s = "; expires=" + u.toUTCString()
        }
        var l = r.path ? "; path=" + r.path : "", c = r.domain ? "; domain=" + r.domain : "",
            f = r.secure ? "; secure" : "";
        document.cookie = [t, "=", encodeURIComponent(n), s, l, c, f].join("")
    }, d = {
        vendor: function () {
            for (var e = ["O", "ms", "Moz", "Khtml", "Webkit", "webkit", ""], t = document.createElement("div"), n = e.length; n--;) {
                var r = e[n], o = r ? r + "Transform" : "transform";
                if (o in t.style) return r
            }
            return null
        }, prefix: function (e, t) {
            if (null !== d.vendor()) {
                var n = d.vendor() ? "-" + d.vendor().toLowerCase() + "-" : "", r = d.vendor() || "";
                if (t) {
                    var o = e.replace(/([A-Z])/g, function (e, t) {
                        return "-" + e.toLowerCase()
                    });
                    return n + o
                }
                var i = "" !== d.vendor() ? e.charAt(0).toUpperCase() + e.substr(1) : e,
                    a = i.replace(/(-[a-z])/g, function (e, t) {
                        return e.charAt(1).toUpperCase()
                    });
                return r + a
            }
        }, canRun2d: function () {
            return null !== d.vendor()
        }, canRun3d: function () {
            var e = document.createElement("div");
            if (!canRun2d() || !window.getComputedStyle) return !1;
            var t = d.prefix("transform");
            document.body.appendChild(e), e.style[t] = "translate3d(1px,1px,1px)";
            var n = window.getComputedStyle(e)[t] || "";
            return document.body.removeChild(e), !!/^matrix3d\((.*)\)$/.exec(n)
        }, canRunCanvas: function () {
            var e;
            try {
                return e = document.createElement("canvas"), e.getContext("2d"), !0
            } catch (e) {
                return !1
            }
        }, canRunWebgl: function () {
            var e, t, n;
            try {
                return e = document.createElement("canvas"), t = e.getContext("webgl") || e.getContext("experimental-webgl"), n = t.getSupportedExtensions(), !0
            } catch (e) {
                return !1
            }
        }, canUsePageVisibility: function () {
            return null !== d.vendor() && void 0 !== document[d.prefix("hidden")]
        }
    }, p = function () {
        return d.canUsePageVisibility() ? document[d.prefix("hidden")] ? "hidden" : "visible" : "unknown"
    };
    e.exports = {
        cookie: f,
        support: d,
        pageVisible: p,
        parseQuery: o,
        toQuery: i,
        capitalizeFirstLetter: a,
        appendQuery: s,
        request: u
    }
}, function (e, t) {
    "use strict";
    var n = navigator.userAgent, r = navigator.platform, o = {}, i = {}, a = n.match(/Web[kK]it[\/]{0,1}([\d.]+)/),
        s = n.match(/(Android);?[\s\/]+([\d.]+)?/), u = !!n.match(/\(Macintosh\; Intel /),
        l = n.match(/(iPad).*OS\s([\d_]+)/), c = n.match(/(iPod)(.*OS\s([\d_]+))?/),
        f = !l && n.match(/(iPhone\sOS)\s([\d_]+)/), d = n.match(/(webOS|hpwOS)[\s\/]([\d.]+)/),
        p = /Win\d{2}|Windows/.test(r), h = n.match(/Windows Phone ([\d.]+)/), m = d && n.match(/TouchPad/),
        v = n.match(/Kindle\/([\d.]+)/), g = n.match(/Silk\/([\d._]+)/), y = n.match(/(BlackBerry).*Version\/([\d.]+)/),
        b = n.match(/(BB10).*Version\/([\d.]+)/), w = n.match(/(RIM\sTablet\sOS)\s([\d.]+)/), x = n.match(/PlayBook/),
        _ = n.match(/Chrome\/([\d.]+)/) || n.match(/CriOS\/([\d.]+)/), k = n.match(/Firefox\/([\d.]+)/),
        j = n.match(/\((?:Mobile|Tablet); rv:([\d.]+)\).*Firefox\/[\d.]+/),
        O = n.match(/MSIE\s([\d.]+)/) || n.match(/Trident\/[\d](?=[^\?]+).*rv:([0-9.].)/),
        E = !_ && n.match(/(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/),
        T = E || n.match(/Version\/([\d.]+)([^S](Safari)|[^M]*(Mobile)[^S]*(Safari))/);
    (i.webkit = !!a) && (i.version = a[1]), s && (o.android = !0, o.version = s[2]), f && !c && (o.ios = o.iphone = !0, o.version = f[2].replace(/_/g, ".")), l && (o.ios = o.ipad = !0, o.version = l[2].replace(/_/g, ".")), c && (o.ios = o.ipod = !0, o.version = c[3] ? c[3].replace(/_/g, ".") : null), h && (o.wp = !0, o.version = h[1]), d && (o.webos = !0, o.version = d[2]), m && (o.touchpad = !0), y && (o.blackberry = !0, o.version = y[2]), b && (o.bb10 = !0, o.version = b[2]), w && (o.rimtabletos = !0, o.version = w[2]), x && (i.playbook = !0), v && (o.kindle = !0, o.version = v[1]), g && (i.silk = !0, i.version = g[1]), !g && o.android && n.match(/Kindle Fire/) && (i.silk = !0), _ && (i.chrome = !0, i.version = _[1]), k && (i.firefox = !0, i.version = k[1]), j && (o.firefoxos = !0, o.version = j[1]), O && (i.ie = !0, i.version = O[1]), T && (u || o.ios || p) && (i.safari = !0, o.ios || (i.version = T[1])), E && (i.webview = !0), o.version = parseFloat(o.version), i.ucbrowser = !!n.match(/ucbrowser/gi), i.toutiao = "http://nativeapp.toutiao.com" == document.referrer || /(News|NewsSocial|Explore|NewsArticle|News_?Article)( |\/)(\d.\d.\d)/i.test(n), i.toutiaoSDK = /(ArticleStreamSdk)( |\/)(\d+)/i.test(n), i.qqbrowser = !!n.match(/qqbrowser/gi), i.weixin = /MicroMessenger/i.test(n), i.caijing = /CaijingStock/i.test(n), i.dongchedi = /automobile/i.test(n), i.xigua = /VideoArticle/i.test(n), o.tablet = !!(l || x || s && !n.match(/Mobile/) || k && n.match(/Tablet/) || O && !n.match(/Phone/) && n.match(/Touch/)), o.phone = !(o.tablet || o.ipod || !(s || f || d || y || b || _ && n.match(/Android/) || _ && n.match(/CriOS\/([\d.]+)/) || k && n.match(/Mobile/) || O && n.match(/Touch/))), e.exports = {
        os: o,
        browser: i
    }
}, function (e, t, n) {
    t = e.exports = n(58)(), t.push([e.id, 'a,blockquote,body,button,code,dd,div,dl,dt,em,fieldset,form,h1,h2,h3,h4,h5,h6,html,iframe,img,input,label,li,object,ol,p,q,small,span,strong,table,tbody,td,th,tr,ul{margin:0;padding:0;border:0}#pageletBanner .download{display:flex;justify-content:space-between;padding:0 15px;box-sizing:border-box;align-items:center;width:100%;height:50px;text-decoration:none}[data-dpr="2"] #pageletBanner .download{padding:0 30px}[data-dpr="3"] #pageletBanner .download{padding:0 45px}[data-dpr="2"] #pageletBanner .download{height:100px}[data-dpr="3"] #pageletBanner .download{height:150px}#pageletBanner .logo-wrapper{display:flex;justify-content:center;align-items:center}#pageletBanner{font-family:STHeiti,Microsoft YaHei,Helvetica,Arial,sans-serif;-webkit-text-size-adjust:none;word-break:break-word;width:100%;height:50px;z-index:5000}[data-dpr="2"] #pageletBanner{height:100px}[data-dpr="3"] #pageletBanner{height:150px}#pageletBanner.banner-top{position:relative}#pageletBanner.banner-bottom{position:fixed;bottom:0}#pageletBanner .banner-pannel{position:fixed;width:100%;height:50px;background:#fff;box-shadow:0 2px 4px 0 rgba(0,0,0,.1);background-repeat:no-repeat;background-position:bottom;background-size:100% 100%;color:#222}[data-dpr="2"] #pageletBanner .banner-pannel{height:100px}[data-dpr="3"] #pageletBanner .banner-pannel{height:150px}#pageletBanner .pannel-top{top:0}#pageletBanner .pannel-bottom{bottom:0}#pageletBanner .show-top-pannel{transform:translateY(0);transition:all .5s cubic-bezier(.19,1,.22,1)}#pageletBanner .hide-top-pannel{transform:translateY(-100%);transition:all .3s cubic-bezier(.55,.055,.675,.19)}#pageletBanner .logo{height:36px;width:36px;background:url(' + n(59) + ') no-repeat;overflow:hidden;background-size:100% 100%;border:1px solid #eee;border-radius:7px}[data-dpr="2"] #pageletBanner .logo{height:72px}[data-dpr="3"] #pageletBanner .logo{height:108px}[data-dpr="2"] #pageletBanner .logo{width:72px}[data-dpr="3"] #pageletBanner .logo{width:108px}#pageletBanner .logo .mask{height:20px;background:hsla(0,0%,100%,.6);width:0;margin-top:10px;margin-left:8px;-webkit-animation-delay:3s;-webkit-box-shadow:0 0 20px 4px #fff;-webkit-transform:rotate(15deg);-webkit-animation:ani-mask 1s;-webkit-animation-fill-mode:forwards;-webkit-animation-iteration-count:infinite}[data-dpr="2"] #pageletBanner .logo .mask{height:40px}[data-dpr="3"] #pageletBanner .logo .mask{height:60px}[data-dpr="2"] #pageletBanner .logo .mask{margin-top:20px}[data-dpr="3"] #pageletBanner .logo .mask{margin-top:30px}[data-dpr="2"] #pageletBanner .logo .mask{margin-left:16px}[data-dpr="3"] #pageletBanner .logo .mask{margin-left:24px}.mask{display:none}#pageletBanner .banner-label p{color:#222;font-size:12px;line-height:15px;margin-left:8px}[data-dpr="2"] #pageletBanner .banner-label p{font-size:24px}[data-dpr="3"] #pageletBanner .banner-label p{font-size:36px}[data-dpr="2"] #pageletBanner .banner-label p{line-height:30px}[data-dpr="3"] #pageletBanner .banner-label p{line-height:45px}[data-dpr="2"] #pageletBanner .banner-label p{margin-left:16px}[data-dpr="3"] #pageletBanner .banner-label p{margin-left:24px}#pageletBanner .banner-label .tb{font-size:14px}[data-dpr="2"] #pageletBanner .banner-label .tb{font-size:28px}[data-dpr="3"] #pageletBanner .banner-label .tb{font-size:42px}#pageletBanner .close{height:40px;width:20px;padding:5px;position:absolute;right:0;background:url(' + n(60) + ') no-repeat 50%;background-size:14px;top:50%;transform:translateY(-50%)}[data-dpr="2"] #pageletBanner .close{height:80px}[data-dpr="3"] #pageletBanner .close{height:120px}[data-dpr="2"] #pageletBanner .close{width:40px}[data-dpr="3"] #pageletBanner .close{width:60px}[data-dpr="2"] #pageletBanner .close{padding:10px}[data-dpr="3"] #pageletBanner .close{padding:15px}[data-dpr="2"] #pageletBanner .close{background-size:28px}[data-dpr="3"] #pageletBanner .close{background-size:42px}#pageletBanner .open{width:72px;height:28px;font-size:14px;line-height:28px;border-radius:14px;font-weight:500;background-image:linear-gradient(90deg,red,#ff5050);color:#fff;text-align:center}[data-dpr="2"] #pageletBanner .open{width:144px}[data-dpr="3"] #pageletBanner .open{width:216px}[data-dpr="2"] #pageletBanner .open{height:56px}[data-dpr="3"] #pageletBanner .open{height:84px}[data-dpr="2"] #pageletBanner .open{font-size:28px}[data-dpr="3"] #pageletBanner .open{font-size:42px}[data-dpr="2"] #pageletBanner .open{line-height:56px}[data-dpr="3"] #pageletBanner .open{line-height:84px}[data-dpr="2"] #pageletBanner .open{border-radius:28px}[data-dpr="3"] #pageletBanner .open{border-radius:42px}#pageletBanner,#pageletBanner *,#pageletBanner:after,#pageletBanner :after,#pageletBanner:before,#pageletBanner :before{box-sizing:content-box}', ""]);
}, function (e, t) {
    e.exports = function () {
        var e = [];
        return e.toString = function () {
            for (var e = [], t = 0; t < this.length; t++) {
                var n = this[t];
                n[2] ? e.push("@media " + n[2] + "{" + n[1] + "}") : e.push(n[1])
            }
            return e.join("")
        }, e.i = function (t, n) {
            "string" == typeof t && (t = [[null, t, ""]]);
            for (var r = {}, o = 0; o < this.length; o++) {
                var i = this[o][0];
                "number" == typeof i && (r[i] = !0)
            }
            for (o = 0; o < t.length; o++) {
                var a = t[o];
                "number" == typeof a[0] && r[a[0]] || (n && !a[2] ? a[2] = n : n && (a[2] = "(" + a[2] + ") and (" + n + ")"), e.push(a))
            }
        }, e
    }
}, function (e, t, n) {
    e.exports = n.p + "image/banner_toutiao_icon_bce0b302.png"
}, function (e, t, n) {
    e.exports = n.p + "image/banner_ic_close_6951b35f.png"
}, function (e, t, n) {
    var r = n(62);
    e.exports = (r.default || r).template({
        compiler: [7, ">= 4.0.0"], main: function (e, t, n, r, o) {
            var i, a = null != t ? t : e.nullContext || {}, s = n.helperMissing, u = "function", l = e.escapeExpression;
            return '<div id="pageletBanner" class="banner-' + l((i = null != (i = n.pos || (null != t ? t.pos : t)) ? i : s, typeof i === u ? i.call(a, {
                name: "pos",
                hash: {},
                data: o
            }) : i)) + " " + l((i = null != (i = n.bannerCls || (null != t ? t.bannerCls : t)) ? i : s, typeof i === u ? i.call(a, {
                name: "bannerCls",
                hash: {},
                data: o
            }) : i)) + ' sdk-top-banner"> \n    <div class="banner-pannel pannel-' + l((i = null != (i = n.pos || (null != t ? t.pos : t)) ? i : s, typeof i === u ? i.call(a, {
                name: "pos",
                hash: {},
                data: o
            }) : i)) + " show-" + l((i = null != (i = n.pos || (null != t ? t.pos : t)) ? i : s, typeof i === u ? i.call(a, {
                name: "pos",
                hash: {},
                data: o
            }) : i)) + '-pannel" style="display: block !important;"> \n        <a href="' + l((i = null != (i = n.downloadLink || (null != t ? t.downloadLink : t)) ? i : s, typeof i === u ? i.call(a, {
                name: "downloadLink",
                hash: {},
                data: o
            }) : i)) + '" target="_self" class="download" rel="nofollow">  \n            <div class="logo-wrapper">\n                <div class="logo"></div>\n                <div class="banner-label">\n                    <p class="tb" data-node="appName"></p>\n                    <p class="title-sub"></p>\n                </div>\n            </div>\n            <div class="open"></div> \n        </a> \n    </div> \n</div>\n'
        }, useData: !0
    })
}, function (e, t, n) {
    e.exports = n(63).default
}, function (e, t, n) {
    "use strict";

    function r(e) {
        return e && e.__esModule ? e : {default: e}
    }

    function o(e) {
        if (e && e.__esModule) return e;
        var t = {};
        if (null != e) for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
        return t.default = e, t
    }

    function i() {
        var e = new s.HandlebarsEnvironment;
        return p.extend(e, s), e.SafeString = l.default, e.Exception = f.default, e.Utils = p, e.escapeExpression = p.escapeExpression, e.VM = m, e.template = function (t) {
            return m.template(t, e)
        }, e
    }

    t.__esModule = !0;
    var a = n(64), s = o(a), u = n(78), l = r(u), c = n(66), f = r(c), d = n(65), p = o(d), h = n(79), m = o(h),
        v = n(80), g = r(v), y = i();
    y.create = i, g.default(y), y.default = y, t.default = y, e.exports = t.default
}, function (e, t, n) {
    "use strict";

    function r(e) {
        return e && e.__esModule ? e : {default: e}
    }

    function o(e, t, n) {
        this.helpers = e || {}, this.partials = t || {}, this.decorators = n || {}, u.registerDefaultHelpers(this), l.registerDefaultDecorators(this)
    }

    t.__esModule = !0, t.HandlebarsEnvironment = o;
    var i = n(65), a = n(66), s = r(a), u = n(67), l = n(75), c = n(77), f = r(c), d = "4.1.2";
    t.VERSION = d;
    var p = 7;
    t.COMPILER_REVISION = p;
    var h = {
        1: "<= 1.0.rc.2",
        2: "== 1.0.0-rc.3",
        3: "== 1.0.0-rc.4",
        4: "== 1.x.x",
        5: "== 2.0.0-alpha.x",
        6: ">= 2.0.0-beta.1",
        7: ">= 4.0.0"
    };
    t.REVISION_CHANGES = h;
    var m = "[object Object]";
    o.prototype = {
        constructor: o, logger: f.default, log: f.default.log, registerHelper: function (e, t) {
            if (i.toString.call(e) === m) {
                if (t) throw new s.default("Arg not supported with multiple helpers");
                i.extend(this.helpers, e)
            } else this.helpers[e] = t
        }, unregisterHelper: function (e) {
            delete this.helpers[e]
        }, registerPartial: function (e, t) {
            if (i.toString.call(e) === m) i.extend(this.partials, e); else {
                if ("undefined" == typeof t) throw new s.default('Attempting to register a partial called "' + e + '" as undefined');
                this.partials[e] = t
            }
        }, unregisterPartial: function (e) {
            delete this.partials[e]
        }, registerDecorator: function (e, t) {
            if (i.toString.call(e) === m) {
                if (t) throw new s.default("Arg not supported with multiple decorators");
                i.extend(this.decorators, e)
            } else this.decorators[e] = t
        }, unregisterDecorator: function (e) {
            delete this.decorators[e]
        }
    };
    var v = f.default.log;
    t.log = v, t.createFrame = i.createFrame, t.logger = f.default
}, function (e, t) {
    "use strict";

    function n(e) {
        return c[e]
    }

    function r(e) {
        for (var t = 1; t < arguments.length; t++) for (var n in arguments[t]) Object.prototype.hasOwnProperty.call(arguments[t], n) && (e[n] = arguments[t][n]);
        return e
    }

    function o(e, t) {
        for (var n = 0, r = e.length; n < r; n++) if (e[n] === t) return n;
        return -1
    }

    function i(e) {
        if ("string" != typeof e) {
            if (e && e.toHTML) return e.toHTML();
            if (null == e) return "";
            if (!e) return e + "";
            e = "" + e
        }
        return d.test(e) ? e.replace(f, n) : e
    }

    function a(e) {
        return !e && 0 !== e || !(!m(e) || 0 !== e.length)
    }

    function s(e) {
        var t = r({}, e);
        return t._parent = e, t
    }

    function u(e, t) {
        return e.path = t, e
    }

    function l(e, t) {
        return (e ? e + "." : "") + t
    }

    t.__esModule = !0, t.extend = r, t.indexOf = o, t.escapeExpression = i, t.isEmpty = a, t.createFrame = s, t.blockParams = u, t.appendContextPath = l;
    var c = {"&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#x27;", "`": "&#x60;", "=": "&#x3D;"},
        f = /[&<>"'`=]/g, d = /[&<>"'`=]/, p = Object.prototype.toString;
    t.toString = p;
    var h = function (e) {
        return "function" == typeof e
    };
    h(/x/) && (t.isFunction = h = function (e) {
        return "function" == typeof e && "[object Function]" === p.call(e)
    }), t.isFunction = h;
    var m = Array.isArray || function (e) {
        return !(!e || "object" != typeof e) && "[object Array]" === p.call(e)
    };
    t.isArray = m
}, function (e, t) {
    "use strict";

    function n(e, t) {
        var o = t && t.loc, i = void 0, a = void 0;
        o && (i = o.start.line, a = o.start.column, e += " - " + i + ":" + a);
        for (var s = Error.prototype.constructor.call(this, e), u = 0; u < r.length; u++) this[r[u]] = s[r[u]];
        Error.captureStackTrace && Error.captureStackTrace(this, n);
        try {
            o && (this.lineNumber = i, Object.defineProperty ? Object.defineProperty(this, "column", {
                value: a,
                enumerable: !0
            }) : this.column = a)
        } catch (e) {
        }
    }

    t.__esModule = !0;
    var r = ["description", "fileName", "lineNumber", "message", "name", "number", "stack"];
    n.prototype = new Error, t.default = n, e.exports = t.default
}, function (e, t, n) {
    "use strict";

    function r(e) {
        return e && e.__esModule ? e : {default: e}
    }

    function o(e) {
        a.default(e), u.default(e), c.default(e), d.default(e), h.default(e), v.default(e), y.default(e)
    }

    t.__esModule = !0, t.registerDefaultHelpers = o;
    var i = n(68), a = r(i), s = n(69), u = r(s), l = n(70), c = r(l), f = n(71), d = r(f), p = n(72), h = r(p),
        m = n(73), v = r(m), g = n(74), y = r(g)
}, function (e, t, n) {
    "use strict";
    t.__esModule = !0;
    var r = n(65);
    t.default = function (e) {
        e.registerHelper("blockHelperMissing", function (t, n) {
            var o = n.inverse, i = n.fn;
            if (t === !0) return i(this);
            if (t === !1 || null == t) return o(this);
            if (r.isArray(t)) return t.length > 0 ? (n.ids && (n.ids = [n.name]), e.helpers.each(t, n)) : o(this);
            if (n.data && n.ids) {
                var a = r.createFrame(n.data);
                a.contextPath = r.appendContextPath(n.data.contextPath, n.name), n = {data: a}
            }
            return i(t, n)
        })
    }, e.exports = t.default
}, function (e, t, n) {
    "use strict";

    function r(e) {
        return e && e.__esModule ? e : {default: e}
    }

    t.__esModule = !0;
    var o = n(65), i = n(66), a = r(i);
    t.default = function (e) {
        e.registerHelper("each", function (e, t) {
            function n(t, n, i) {
                l && (l.key = t, l.index = n, l.first = 0 === n, l.last = !!i, c && (l.contextPath = c + t)), u += r(e[t], {
                    data: l,
                    blockParams: o.blockParams([e[t], t], [c + t, null])
                })
            }

            if (!t) throw new a.default("Must pass iterator to #each");
            var r = t.fn, i = t.inverse, s = 0, u = "", l = void 0, c = void 0;
            if (t.data && t.ids && (c = o.appendContextPath(t.data.contextPath, t.ids[0]) + "."), o.isFunction(e) && (e = e.call(this)), t.data && (l = o.createFrame(t.data)), e && "object" == typeof e) if (o.isArray(e)) for (var f = e.length; s < f; s++) s in e && n(s, s, s === e.length - 1); else {
                var d = void 0;
                for (var p in e) e.hasOwnProperty(p) && (void 0 !== d && n(d, s - 1), d = p, s++);
                void 0 !== d && n(d, s - 1, !0)
            }
            return 0 === s && (u = i(this)), u
        })
    }, e.exports = t.default
}, function (e, t, n) {
    "use strict";

    function r(e) {
        return e && e.__esModule ? e : {default: e}
    }

    t.__esModule = !0;
    var o = n(66), i = r(o);
    t.default = function (e) {
        e.registerHelper("helperMissing", function () {
            if (1 !== arguments.length) throw new i.default('Missing helper: "' + arguments[arguments.length - 1].name + '"')
        })
    }, e.exports = t.default
}, function (e, t, n) {
    "use strict";
    t.__esModule = !0;
    var r = n(65);
    t.default = function (e) {
        e.registerHelper("if", function (e, t) {
            return r.isFunction(e) && (e = e.call(this)), !t.hash.includeZero && !e || r.isEmpty(e) ? t.inverse(this) : t.fn(this)
        }), e.registerHelper("unless", function (t, n) {
            return e.helpers.if.call(this, t, {fn: n.inverse, inverse: n.fn, hash: n.hash})
        })
    }, e.exports = t.default
}, function (e, t) {
    "use strict";
    t.__esModule = !0, t.default = function (e) {
        e.registerHelper("log", function () {
            for (var t = [void 0], n = arguments[arguments.length - 1], r = 0; r < arguments.length - 1; r++) t.push(arguments[r]);
            var o = 1;
            null != n.hash.level ? o = n.hash.level : n.data && null != n.data.level && (o = n.data.level), t[0] = o, e.log.apply(e, t)
        })
    }, e.exports = t.default
}, function (e, t) {
    "use strict";
    t.__esModule = !0, t.default = function (e) {
        e.registerHelper("lookup", function (e, t) {
            if (!e) return e;
            if ("constructor" !== t || e.propertyIsEnumerable(t)) return e[t]
        })
    }, e.exports = t.default
}, function (e, t, n) {
    "use strict";
    t.__esModule = !0;
    var r = n(65);
    t.default = function (e) {
        e.registerHelper("with", function (e, t) {
            r.isFunction(e) && (e = e.call(this));
            var n = t.fn;
            if (r.isEmpty(e)) return t.inverse(this);
            var o = t.data;
            return t.data && t.ids && (o = r.createFrame(t.data), o.contextPath = r.appendContextPath(t.data.contextPath, t.ids[0])), n(e, {
                data: o,
                blockParams: r.blockParams([e], [o && o.contextPath])
            })
        })
    }, e.exports = t.default
}, function (e, t, n) {
    "use strict";

    function r(e) {
        return e && e.__esModule ? e : {default: e}
    }

    function o(e) {
        a.default(e)
    }

    t.__esModule = !0, t.registerDefaultDecorators = o;
    var i = n(76), a = r(i)
}, function (e, t, n) {
    "use strict";
    t.__esModule = !0;
    var r = n(65);
    t.default = function (e) {
        e.registerDecorator("inline", function (e, t, n, o) {
            var i = e;
            return t.partials || (t.partials = {}, i = function (o, i) {
                var a = n.partials;
                n.partials = r.extend({}, a, t.partials);
                var s = e(o, i);
                return n.partials = a, s
            }), t.partials[o.args[0]] = o.fn, i
        })
    }, e.exports = t.default
}, function (e, t, n) {
    "use strict";
    t.__esModule = !0;
    var r = n(65), o = {
        methodMap: ["debug", "info", "warn", "error"], level: "info", lookupLevel: function (e) {
            if ("string" == typeof e) {
                var t = r.indexOf(o.methodMap, e.toLowerCase());
                e = t >= 0 ? t : parseInt(e, 10)
            }
            return e
        }, log: function (e) {
            if (e = o.lookupLevel(e), "undefined" != typeof console && o.lookupLevel(o.level) <= e) {
                var t = o.methodMap[e];
                console[t] || (t = "log");
                for (var n = arguments.length, r = Array(n > 1 ? n - 1 : 0), i = 1; i < n; i++) r[i - 1] = arguments[i];
                console[t].apply(console, r)
            }
        }
    };
    t.default = o, e.exports = t.default
}, function (e, t) {
    "use strict";

    function n(e) {
        this.string = e
    }

    t.__esModule = !0, n.prototype.toString = n.prototype.toHTML = function () {
        return "" + this.string
    }, t.default = n, e.exports = t.default
}, function (e, t, n) {
    "use strict";

    function r(e) {
        return e && e.__esModule ? e : {default: e}
    }

    function o(e) {
        if (e && e.__esModule) return e;
        var t = {};
        if (null != e) for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
        return t.default = e, t
    }

    function i(e) {
        var t = e && e[0] || 1, n = g.COMPILER_REVISION;
        if (t !== n) {
            if (t < n) {
                var r = g.REVISION_CHANGES[n], o = g.REVISION_CHANGES[t];
                throw new v.default("Template was precompiled with an older version of Handlebars than the current runtime. Please update your precompiler to a newer version (" + r + ") or downgrade your runtime to an older version (" + o + ").")
            }
            throw new v.default("Template was precompiled with a newer version of Handlebars than the current runtime. Please update your runtime to a newer version (" + e[1] + ").")
        }
    }

    function a(e, t) {
        function n(n, r, o) {
            o.hash && (r = h.extend({}, r, o.hash), o.ids && (o.ids[0] = !0)), n = t.VM.resolvePartial.call(this, n, r, o);
            var i = t.VM.invokePartial.call(this, n, r, o);
            if (null == i && t.compile && (o.partials[o.name] = t.compile(n, e.compilerOptions, t), i = o.partials[o.name](r, o)), null != i) {
                if (o.indent) {
                    for (var a = i.split("\n"), s = 0, u = a.length; s < u && (a[s] || s + 1 !== u); s++) a[s] = o.indent + a[s];
                    i = a.join("\n")
                }
                return i
            }
            throw new v.default("The partial " + o.name + " could not be compiled when running in runtime-only mode")
        }

        function r(t) {
            function n(t) {
                return "" + e.main(o, t, o.helpers, o.partials, a, u, s)
            }

            var i = arguments.length <= 1 || void 0 === arguments[1] ? {} : arguments[1], a = i.data;
            r._setup(i), !i.partial && e.useData && (a = f(t, a));
            var s = void 0, u = e.useBlockParams ? [] : void 0;
            return e.useDepths && (s = i.depths ? t != i.depths[0] ? [t].concat(i.depths) : i.depths : [t]), (n = d(e.main, n, o, i.depths || [], a, u))(t, i)
        }

        if (!t) throw new v.default("No environment passed to template");
        if (!e || !e.main) throw new v.default("Unknown template object: " + typeof e);
        e.main.decorator = e.main_d, t.VM.checkRevision(e.compiler);
        var o = {
            strict: function (e, t) {
                if (!(t in e)) throw new v.default('"' + t + '" not defined in ' + e);
                return e[t]
            }, lookup: function (e, t) {
                for (var n = e.length, r = 0; r < n; r++) if (e[r] && null != e[r][t]) return e[r][t]
            }, lambda: function (e, t) {
                return "function" == typeof e ? e.call(t) : e
            }, escapeExpression: h.escapeExpression, invokePartial: n, fn: function (t) {
                var n = e[t];
                return n.decorator = e[t + "_d"], n
            }, programs: [], program: function (e, t, n, r, o) {
                var i = this.programs[e], a = this.fn(e);
                return t || o || r || n ? i = s(this, e, a, t, n, r, o) : i || (i = this.programs[e] = s(this, e, a)), i
            }, data: function (e, t) {
                for (; e && t--;) e = e._parent;
                return e
            }, merge: function (e, t) {
                var n = e || t;
                return e && t && e !== t && (n = h.extend({}, t, e)), n
            }, nullContext: Object.seal({}), noop: t.VM.noop, compilerInfo: e.compiler
        };
        return r.isTop = !0, r._setup = function (n) {
            n.partial ? (o.helpers = n.helpers, o.partials = n.partials, o.decorators = n.decorators) : (o.helpers = o.merge(n.helpers, t.helpers), e.usePartial && (o.partials = o.merge(n.partials, t.partials)), (e.usePartial || e.useDecorators) && (o.decorators = o.merge(n.decorators, t.decorators)))
        }, r._child = function (t, n, r, i) {
            if (e.useBlockParams && !r) throw new v.default("must pass block params");
            if (e.useDepths && !i) throw new v.default("must pass parent depths");
            return s(o, t, e[t], n, 0, r, i)
        }, r
    }

    function s(e, t, n, r, o, i, a) {
        function s(t) {
            var o = arguments.length <= 1 || void 0 === arguments[1] ? {} : arguments[1], s = a;
            return !a || t == a[0] || t === e.nullContext && null === a[0] || (s = [t].concat(a)), n(e, t, e.helpers, e.partials, o.data || r, i && [o.blockParams].concat(i), s)
        }

        return s = d(n, s, e, a, r, i), s.program = t, s.depth = a ? a.length : 0, s.blockParams = o || 0, s
    }

    function u(e, t, n) {
        return e ? e.call || n.name || (n.name = e, e = n.partials[e]) : e = "@partial-block" === n.name ? n.data["partial-block"] : n.partials[n.name], e
    }

    function l(e, t, n) {
        var r = n.data && n.data["partial-block"];
        n.partial = !0, n.ids && (n.data.contextPath = n.ids[0] || n.data.contextPath);
        var o = void 0;
        if (n.fn && n.fn !== c && !function () {
            n.data = g.createFrame(n.data);
            var e = n.fn;
            o = n.data["partial-block"] = function (t) {
                var n = arguments.length <= 1 || void 0 === arguments[1] ? {} : arguments[1];
                return n.data = g.createFrame(n.data), n.data["partial-block"] = r, e(t, n)
            }, e.partials && (n.partials = h.extend({}, n.partials, e.partials))
        }(), void 0 === e && o && (e = o), void 0 === e) throw new v.default("The partial " + n.name + " could not be found");
        if (e instanceof Function) return e(t, n)
    }

    function c() {
        return ""
    }

    function f(e, t) {
        return t && "root" in t || (t = t ? g.createFrame(t) : {}, t.root = e), t
    }

    function d(e, t, n, r, o, i) {
        if (e.decorator) {
            var a = {};
            t = e.decorator(t, a, n, r && r[0], o, i, r), h.extend(t, a)
        }
        return t
    }

    t.__esModule = !0, t.checkRevision = i, t.template = a, t.wrapProgram = s, t.resolvePartial = u, t.invokePartial = l, t.noop = c;
    var p = n(65), h = o(p), m = n(66), v = r(m), g = n(64)
}, function (e, t) {
    (function (n) {
        "use strict";
        t.__esModule = !0, t.default = function (e) {
            var t = "undefined" != typeof n ? n : window, r = t.Handlebars;
            e.noConflict = function () {
                return t.Handlebars === e && (t.Handlebars = r), e
            }
        }, e.exports = t.default
    }).call(t, function () {
        return this
    }())
}, function (e, t, n) {
    "use strict";

    function r(e) {
        return e && e.__esModule ? e : {default: e}
    }

    function o(e) {
        var e = e || {}, t = {
            downloadLink: "http://d.toutiao.com/e6jY/",
            yybLink: "tmast://appdetails?r=0.27985643851570785&pname=com.ss.android.article.news&oplist=1%3B2&via=ANDROIDWXZ.YYB.OTHERBROWSER&channelid=000116083232363434363139&appid=213141",
            nativeLink: d.default.getNativeLink(e),
            universalLink: "",
            openUrl: d.default.getOpenUrl(e)
        };
        if (e.isGrowthWap && window.ttGTM) {
            var n = d.default.getGTMValue("yybSurl");
            Array.isArray(n) && $.extend(!0, e, {
                yybLink: n[0],
                downloadLink: n[1]
            }), d.default.getGTMValue("listbottombannerSurl") && (e.downloadLink = d.default.getGTMValue("listbottombannerSurl")), d.default.getGTMValue("topbannerSurl") && (e.downloadLink = d.default.getGTMValue("topbannerSurl"))
        }
        return $.extend(!0, {}, t, e)
    }

    function i(e) {
        setTimeout(function () {
            location.href = e
        }, 100)
    }

    function a(e) {
        var t = e.downloadLink;
        if (e.preventDongTaiDaBao) return t;
        var n = {openurl: e.openUrl, postdata: [e.postData || d.default.getAppTrackData()]},
            r = v.default.appendQuery(t, "append=" + encodeURIComponent((0, c.default)(n))),
            o = document.createElement("a");
        o.href = t;
        var i = y.default.parse(o.search.slice(1));
        return i.append && (r = t), r
    }

    function s(e) {
        setTimeout(function () {
            $("body").append("<iframe id='app_dl_iframe' src='" + e.yybHref + "' style='display:none'></iframe>"), setTimeout(function () {
                $("iframe#app_dl_iframe").remove(), location.href = e.fallback
            }, 1500)
        }, 100)
    }

    function u(e) {
        if (e = e || {}, !e.forbidDownload) {
            var t = o(e);
            if (h.default.os.android) if (d.default.isWeixin()) {
                var n = encodeURIComponent(t.nativeLink || d.default.getNativeLink(t));
                i(v.default.appendQuery(t.downloadLink, "android_scheme=" + n))
            } else e.preventYYB && (location.href = a(t)), s({
                yybHref: t.yybLink,
                fallback: a(t)
            }); else i(t.downloadLink)
        }
    }

    var l = n(42), c = r(l), f = n(5), d = r(f), p = n(56), h = r(p), m = n(55), v = r(m), g = n(82), y = r(g);
    e.exports = u
}, function (e, t, n) {
    "use strict";
    t.decode = t.parse = n(83), t.encode = t.stringify = n(84)
}, function (e, t) {
    "use strict";

    function n(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }

    e.exports = function (e, t, r, o) {
        t = t || "&", r = r || "=";
        var i = {};
        if ("string" != typeof e || 0 === e.length) return i;
        var a = /\+/g;
        e = e.split(t);
        var s = 1e3;
        o && "number" == typeof o.maxKeys && (s = o.maxKeys);
        var u = e.length;
        s > 0 && u > s && (u = s);
        for (var l = 0; l < u; ++l) {
            var c, f, d, p, h = e[l].replace(a, "%20"), m = h.indexOf(r);
            m >= 0 ? (c = h.substr(0, m), f = h.substr(m + 1)) : (c = h, f = ""), d = decodeURIComponent(c), p = decodeURIComponent(f), n(i, d) ? Array.isArray(i[d]) ? i[d].push(p) : i[d] = [i[d], p] : i[d] = p
        }
        return i
    }
}, function (e, t) {
    "use strict";
    var n = function (e) {
        switch (typeof e) {
            case"string":
                return e;
            case"boolean":
                return e ? "true" : "false";
            case"number":
                return isFinite(e) ? e : "";
            default:
                return ""
        }
    };
    e.exports = function (e, t, r, o) {
        return t = t || "&", r = r || "=", null === e && (e = void 0), "object" == typeof e ? Object.keys(e).map(function (o) {
            var i = encodeURIComponent(n(o)) + r;
            return Array.isArray(e[o]) ? e[o].map(function (e) {
                return i + encodeURIComponent(n(e))
            }).join(t) : i + encodeURIComponent(n(e[o]))
        }).join(t) : o ? encodeURIComponent(n(o)) + r + encodeURIComponent(n(e)) : ""
    }
}, function (e, t, n) {
    "use strict";

    function r(e) {
        var e = e || {}, t = {
            downloadLink: "http://d.toutiao.com/e6jY/",
            yybLink: "tmast://appdetails?r=0.27985643851570785&pname=com.ss.android.article.news&oplist=1%3B2&via=ANDROIDWXZ.YYB.OTHERBROWSER&channelid=000116083232363434363139&appid=213141",
            nativeLink: i.getNativeLink(e),
            preventUniversalLink: !1,
            universalLink: "",
            openUrl: i.getOpenUrl(e)
        };
        return $.extend(!0, {}, t, e)
    }

    var o = n(56), i = n(5), a = n(55), s = function (e) {
        location.href = e
    }, u = function (e) {
        if (e = e || {}, !e.forbidInvoke) {
            var t = r(e), n = i.isWeixin(), a = o.os.ios && o.os.version >= 9;
            return !(n && !a) && void (o.os.ios ? c(t) : l(t))
        }
    }, l = function (e) {
        var t = e.type || "home", n = ["home", "detail", "mediaProfile", "comment"].indexOf(t) > -1,
            r = !e.app || "news_article" === e.app;
        r && n ? i.androidLocalServer(e).then(function (e) {
            if (!e || !e.success) throw new Error(e ? e.reason : "")
        }).catch(function (t) {
            s(e.nativeLink)
        }) : s(e.nativeLink)
    }, c = function (e) {
        if (e.preventUniversalLink) return void s(e.nativeLink);
        var t = location.href, n = o.os.version;
        if (n >= 9 && !o.browser.qqbrowser) {
            var r = i.getDeepLink(e);
            a.request("log_id") && "1" !== a.request("has_invoke") && (r += "&use_302=1&next=" + encodeURIComponent(location.href.replace("atinvoke=1", "has_invoke=1"))), location.href = r
        } else if (n >= 9) {
            var u = o.browser.safari, l = u ? 2e3 : 1300;
            setTimeout(function () {
                location.href = e.nativeLink, setTimeout(function () {
                    "hidden" === a.pageVisible() && (location.href = t)
                }, l)
            }, 10)
        } else s(e.nativeLink)
    };
    e.exports = u
}, function (e, t, n) {
    "use strict";

    function r(e) {
        return e && e.__esModule ? e : {default: e}
    }

    function o() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        if (a.default.browser.weixin) (0, u.appDownloadwithYYB)(e); else if (a.default.os.android) {
            var t = +new Date;
            (0, u.wap2AppwithAdr)(e), setTimeout(function () {
                +new Date - t < 520 && (0, u.appDownloadwithAdr)(e)
            }, 500)
        } else (0, u.appDownloadwithIos)(e), setTimeout(function () {
            (0, u.wap2AppwithIos)(e)
        }, 500)
    }

    var i = n(56), a = r(i), s = n(55), u = (r(s), n(87));
    e.exports = o
}, function (e, t, n) {
    "use strict";

    function r(e) {
        return e && e.__esModule ? e : {default: e}
    }

    function o(e) {
        var e = e || {}, t = {
            downloadLink: "http://d.toutiao.com/e6jY/",
            yybLink: "tmast://appdetails?r=0.27985643851570785&pname=com.ss.android.article.news&oplist=1%3B2&via=ANDROIDWXZ.YYB.OTHERBROWSER&channelid=000116083232363434363139&appid=213141",
            nativeLink: g.default.getNativeLink(e),
            universalLink: "",
            openUrl: g.default.getOpenUrl(e)
        };
        if (e.isGrowthWap && window.ttGTM) {
            var n = g.default.getGTMValue("yybSurl");
            Array.isArray(n) && (0, f.default)({}, e, {
                yybLink: n[0],
                downloadLink: n[1]
            }), g.default.getGTMValue("listbottombannerSurl") && (e.downloadLink = g.default.getGTMValue("listbottombannerSurl")), g.default.getGTMValue("topbannerSurl") && (e.downloadLink = g.default.getGTMValue("topbannerSurl"))
        }
        return (0, f.default)({}, t, e)
    }

    function i(e) {
        var e = e || {}, t = {
            downloadLink: "http://d.toutiao.com/e6jY/",
            yybLink: "tmast://appdetails?r=0.27985643851570785&pname=com.ss.android.article.news&oplist=1%3B2&via=ANDROIDWXZ.YYB.OTHERBROWSER&channelid=000116083232363434363139&appid=213141",
            nativeLink: e.nativeLink || g.default.getNativeLink(e),
            preventUniversalLink: !1,
            universalLink: "",
            openUrl: g.default.getOpenUrl(e)
        };
        return (0, f.default)({}, t, e)
    }

    function a(e) {
        setTimeout(function () {
            $("body").append("<iframe id='app_dl_iframe' src='" + e.yybHref + "' style='display:none'></iframe>"), setTimeout(function () {
                $("iframe#app_dl_iframe").remove(), location.href = e.fallback
            }, 1500)
        }, 100)
    }

    function s(e) {
        var t = e.downloadLink;
        if (e.preventDongTaiDaBao) return t;
        var n = {openurl: e.openUrl, postdata: [e.postData || g.default.getAppTrackData()]},
            r = m.default.appendQuery(t, "append=" + encodeURIComponent((0, l.default)(n))),
            o = document.createElement("a");
        o.href = t;
        var i = b.default.parse(o.search.slice(1));
        return i.append && (r = t), r
    }

    Object.defineProperty(t, "__esModule", {value: !0}), t.wap2AppwithAdr = t.wap2AppwithIos = t.appDownloadwithIos = t.appDownloadwithAdr = t.appDownloadwithYYB = void 0;
    var u = n(42), l = r(u), c = n(44), f = r(c), d = n(56), p = r(d), h = n(55), m = r(h), v = n(5), g = r(v),
        y = n(88), b = r(y), w = function (e) {
            $("#app_iframe").remove(), $("body").append("<iframe id='app_iframe' src='" + e + "' style='display:none'></iframe>")
        };
    t.appDownloadwithYYB = function () {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        if (e.forbidDownload) return !1;
        var t = o(e), n = encodeURIComponent(t.nativeLink || g.default.getNativeLink(t)),
            r = p.default.os.ios ? "ios_scheme" : "android_scheme";
        t.downloadLink = m.default.appendQuery(t.downloadLink, r + "=" + n), location.href = t.downloadLink
    }, t.appDownloadwithAdr = function () {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        if (e.forbidDownload) return !1;
        var t = o(e);
        e.preventYYB ? location.href = s(t) : a({yybHref: t.yybLink, fallback: s(t)})
    }, t.appDownloadwithIos = function () {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        if (e.forbidDownload) return !1;
        var t = o(e);
        location.href = t.downloadLink
    }, t.wap2AppwithIos = function () {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        if (e.forbidInvoke) return !1;
        var t = i(e);
        if (t.preventUniversalLink) return w(t.nativeLink), !1;
        var n = location.url;
        if (p.default.os.version >= 9 && !p.default.browser.qqbrowser) location.href = t.deepLink || g.default.getDeepLink(t); else if (p.default.os.version >= 9) {
            var r = p.default.browser.safari, o = r ? 2e3 : 1300;
            setTimeout(function () {
                location.href = t.nativeLink, setTimeout(function () {
                    "hidden" === m.default.pageVisible() && (location.href = n)
                }, o)
            }, 10)
        } else w(t.nativeLink)
    }, t.wap2AppwithAdr = function () {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        if (e.forbidInvoke) return !1;
        var t = i(e);
        location.href = t.nativeLink, w(t.nativeLink)
    }
}, function (e, t, n) {
    "use strict";
    var r = n(89), o = n(92), i = n(91);
    e.exports = {formats: i, parse: o, stringify: r}
}, function (e, t, n) {
    "use strict";
    var r = n(90), o = n(91), i = Object.prototype.hasOwnProperty, a = {
        brackets: function (e) {
            return e + "[]"
        }, comma: "comma", indices: function (e, t) {
            return e + "[" + t + "]"
        }, repeat: function (e) {
            return e
        }
    }, s = Array.isArray, u = Array.prototype.push, l = function (e, t) {
        u.apply(e, s(t) ? t : [t])
    }, c = Date.prototype.toISOString, f = {
        addQueryPrefix: !1,
        allowDots: !1,
        charset: "utf-8",
        charsetSentinel: !1,
        delimiter: "&",
        encode: !0,
        encoder: r.encode,
        encodeValuesOnly: !1,
        formatter: o.formatters[o.default],
        indices: !1,
        serializeDate: function (e) {
            return c.call(e)
        },
        skipNulls: !1,
        strictNullHandling: !1
    }, d = function e(t, n, o, i, a, u, c, d, p, h, m, v, g) {
        var y = t;
        if ("function" == typeof c ? y = c(n, y) : y instanceof Date ? y = h(y) : "comma" === o && s(y) && (y = y.join(",")), null === y) {
            if (i) return u && !v ? u(n, f.encoder, g) : n;
            y = ""
        }
        if ("string" == typeof y || "number" == typeof y || "boolean" == typeof y || r.isBuffer(y)) {
            if (u) {
                var b = v ? n : u(n, f.encoder, g);
                return [m(b) + "=" + m(u(y, f.encoder, g))]
            }
            return [m(n) + "=" + m(String(y))]
        }
        var w = [];
        if ("undefined" == typeof y) return w;
        var x;
        if (s(c)) x = c; else {
            var _ = Object.keys(y);
            x = d ? _.sort(d) : _
        }
        for (var k = 0; k < x.length; ++k) {
            var j = x[k];
            a && null === y[j] || (s(y) ? l(w, e(y[j], "function" == typeof o ? o(n, j) : n, o, i, a, u, c, d, p, h, m, v, g)) : l(w, e(y[j], n + (p ? "." + j : "[" + j + "]"), o, i, a, u, c, d, p, h, m, v, g)))
        }
        return w
    }, p = function (e) {
        if (!e) return f;
        if (null !== e.encoder && void 0 !== e.encoder && "function" != typeof e.encoder) throw new TypeError("Encoder has to be a function.");
        var t = e.charset || f.charset;
        if ("undefined" != typeof e.charset && "utf-8" !== e.charset && "iso-8859-1" !== e.charset) throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");
        var n = o.default;
        if ("undefined" != typeof e.format) {
            if (!i.call(o.formatters, e.format)) throw new TypeError("Unknown format option provided.");
            n = e.format
        }
        var r = o.formatters[n], a = f.filter;
        return ("function" == typeof e.filter || s(e.filter)) && (a = e.filter), {
            addQueryPrefix: "boolean" == typeof e.addQueryPrefix ? e.addQueryPrefix : f.addQueryPrefix,
            allowDots: "undefined" == typeof e.allowDots ? f.allowDots : !!e.allowDots,
            charset: t,
            charsetSentinel: "boolean" == typeof e.charsetSentinel ? e.charsetSentinel : f.charsetSentinel,
            delimiter: "undefined" == typeof e.delimiter ? f.delimiter : e.delimiter,
            encode: "boolean" == typeof e.encode ? e.encode : f.encode,
            encoder: "function" == typeof e.encoder ? e.encoder : f.encoder,
            encodeValuesOnly: "boolean" == typeof e.encodeValuesOnly ? e.encodeValuesOnly : f.encodeValuesOnly,
            filter: a,
            formatter: r,
            serializeDate: "function" == typeof e.serializeDate ? e.serializeDate : f.serializeDate,
            skipNulls: "boolean" == typeof e.skipNulls ? e.skipNulls : f.skipNulls,
            sort: "function" == typeof e.sort ? e.sort : null,
            strictNullHandling: "boolean" == typeof e.strictNullHandling ? e.strictNullHandling : f.strictNullHandling
        }
    };
    e.exports = function (e, t) {
        var n, r, o = e, i = p(t);
        "function" == typeof i.filter ? (r = i.filter, o = r("", o)) : s(i.filter) && (r = i.filter, n = r);
        var u = [];
        if ("object" != typeof o || null === o) return "";
        var c;
        c = t && t.arrayFormat in a ? t.arrayFormat : t && "indices" in t ? t.indices ? "indices" : "repeat" : "indices";
        var f = a[c];
        n || (n = Object.keys(o)), i.sort && n.sort(i.sort);
        for (var h = 0; h < n.length; ++h) {
            var m = n[h];
            i.skipNulls && null === o[m] || l(u, d(o[m], m, f, i.strictNullHandling, i.skipNulls, i.encode ? i.encoder : null, i.filter, i.sort, i.allowDots, i.serializeDate, i.formatter, i.encodeValuesOnly, i.charset))
        }
        var v = u.join(i.delimiter), g = i.addQueryPrefix === !0 ? "?" : "";
        return i.charsetSentinel && (g += "iso-8859-1" === i.charset ? "utf8=%26%2310003%3B&" : "utf8=%E2%9C%93&"), v.length > 0 ? g + v : ""
    }
}, function (e, t) {
    "use strict";
    var n = Object.prototype.hasOwnProperty, r = Array.isArray, o = function () {
        for (var e = [], t = 0; t < 256; ++t) e.push("%" + ((t < 16 ? "0" : "") + t.toString(16)).toUpperCase());
        return e
    }(), i = function (e) {
        for (; e.length > 1;) {
            var t = e.pop(), n = t.obj[t.prop];
            if (r(n)) {
                for (var o = [], i = 0; i < n.length; ++i) "undefined" != typeof n[i] && o.push(n[i]);
                t.obj[t.prop] = o
            }
        }
    }, a = function (e, t) {
        for (var n = t && t.plainObjects ? Object.create(null) : {}, r = 0; r < e.length; ++r) "undefined" != typeof e[r] && (n[r] = e[r]);
        return n
    }, s = function e(t, o, i) {
        if (!o) return t;
        if ("object" != typeof o) {
            if (r(t)) t.push(o); else {
                if (!t || "object" != typeof t) return [t, o];
                (i && (i.plainObjects || i.allowPrototypes) || !n.call(Object.prototype, o)) && (t[o] = !0)
            }
            return t
        }
        if (!t || "object" != typeof t) return [t].concat(o);
        var s = t;
        return r(t) && !r(o) && (s = a(t, i)), r(t) && r(o) ? (o.forEach(function (r, o) {
            if (n.call(t, o)) {
                var a = t[o];
                a && "object" == typeof a && r && "object" == typeof r ? t[o] = e(a, r, i) : t.push(r)
            } else t[o] = r
        }), t) : Object.keys(o).reduce(function (t, r) {
            var a = o[r];
            return n.call(t, r) ? t[r] = e(t[r], a, i) : t[r] = a, t
        }, s)
    }, u = function (e, t) {
        return Object.keys(t).reduce(function (e, n) {
            return e[n] = t[n], e
        }, e)
    }, l = function (e, t, n) {
        var r = e.replace(/\+/g, " ");
        if ("iso-8859-1" === n) return r.replace(/%[0-9a-f]{2}/gi, unescape);
        try {
            return decodeURIComponent(r)
        } catch (e) {
            return r
        }
    }, c = function (e, t, n) {
        if (0 === e.length) return e;
        var r = "string" == typeof e ? e : String(e);
        if ("iso-8859-1" === n) return escape(r).replace(/%u[0-9a-f]{4}/gi, function (e) {
            return "%26%23" + parseInt(e.slice(2), 16) + "%3B"
        });
        for (var i = "", a = 0; a < r.length; ++a) {
            var s = r.charCodeAt(a);
            45 === s || 46 === s || 95 === s || 126 === s || s >= 48 && s <= 57 || s >= 65 && s <= 90 || s >= 97 && s <= 122 ? i += r.charAt(a) : s < 128 ? i += o[s] : s < 2048 ? i += o[192 | s >> 6] + o[128 | 63 & s] : s < 55296 || s >= 57344 ? i += o[224 | s >> 12] + o[128 | s >> 6 & 63] + o[128 | 63 & s] : (a += 1, s = 65536 + ((1023 & s) << 10 | 1023 & r.charCodeAt(a)), i += o[240 | s >> 18] + o[128 | s >> 12 & 63] + o[128 | s >> 6 & 63] + o[128 | 63 & s])
        }
        return i
    }, f = function (e) {
        for (var t = [{
            obj: {o: e},
            prop: "o"
        }], n = [], r = 0; r < t.length; ++r) for (var o = t[r], a = o.obj[o.prop], s = Object.keys(a), u = 0; u < s.length; ++u) {
            var l = s[u], c = a[l];
            "object" == typeof c && null !== c && n.indexOf(c) === -1 && (t.push({obj: a, prop: l}), n.push(c))
        }
        return i(t), e
    }, d = function (e) {
        return "[object RegExp]" === Object.prototype.toString.call(e)
    }, p = function (e) {
        return !(!e || "object" != typeof e) && !!(e.constructor && e.constructor.isBuffer && e.constructor.isBuffer(e))
    }, h = function (e, t) {
        return [].concat(e, t)
    };
    e.exports = {
        arrayToObject: a,
        assign: u,
        combine: h,
        compact: f,
        decode: l,
        encode: c,
        isBuffer: p,
        isRegExp: d,
        merge: s
    }
}, function (e, t) {
    "use strict";
    var n = String.prototype.replace, r = /%20/g;
    e.exports = {
        default: "RFC3986", formatters: {
            RFC1738: function (e) {
                return n.call(e, r, "+")
            }, RFC3986: function (e) {
                return e
            }
        }, RFC1738: "RFC1738", RFC3986: "RFC3986"
    }
}, function (e, t, n) {
    "use strict";
    var r = n(90), o = Object.prototype.hasOwnProperty, i = {
        allowDots: !1,
        allowPrototypes: !1,
        arrayLimit: 20,
        charset: "utf-8",
        charsetSentinel: !1,
        comma: !1,
        decoder: r.decode,
        delimiter: "&",
        depth: 5,
        ignoreQueryPrefix: !1,
        interpretNumericEntities: !1,
        parameterLimit: 1e3,
        parseArrays: !0,
        plainObjects: !1,
        strictNullHandling: !1
    }, a = function (e) {
        return e.replace(/&#(\d+);/g, function (e, t) {
            return String.fromCharCode(parseInt(t, 10))
        })
    }, s = "utf8=%26%2310003%3B", u = "utf8=%E2%9C%93", l = function (e, t) {
        var n, l = {}, c = t.ignoreQueryPrefix ? e.replace(/^\?/, "") : e,
            f = t.parameterLimit === 1 / 0 ? void 0 : t.parameterLimit, d = c.split(t.delimiter, f), p = -1,
            h = t.charset;
        if (t.charsetSentinel) for (n = 0; n < d.length; ++n) 0 === d[n].indexOf("utf8=") && (d[n] === u ? h = "utf-8" : d[n] === s && (h = "iso-8859-1"), p = n, n = d.length);
        for (n = 0; n < d.length; ++n) if (n !== p) {
            var m, v, g = d[n], y = g.indexOf("]="), b = y === -1 ? g.indexOf("=") : y + 1;
            b === -1 ? (m = t.decoder(g, i.decoder, h), v = t.strictNullHandling ? null : "") : (m = t.decoder(g.slice(0, b), i.decoder, h), v = t.decoder(g.slice(b + 1), i.decoder, h)), v && t.interpretNumericEntities && "iso-8859-1" === h && (v = a(v)), v && t.comma && v.indexOf(",") > -1 && (v = v.split(",")), o.call(l, m) ? l[m] = r.combine(l[m], v) : l[m] = v
        }
        return l
    }, c = function (e, t, n) {
        for (var r = t, o = e.length - 1; o >= 0; --o) {
            var i, a = e[o];
            if ("[]" === a && n.parseArrays) i = [].concat(r); else {
                i = n.plainObjects ? Object.create(null) : {};
                var s = "[" === a.charAt(0) && "]" === a.charAt(a.length - 1) ? a.slice(1, -1) : a, u = parseInt(s, 10);
                n.parseArrays || "" !== s ? !isNaN(u) && a !== s && String(u) === s && u >= 0 && n.parseArrays && u <= n.arrayLimit ? (i = [], i[u] = r) : i[s] = r : i = {0: r}
            }
            r = i
        }
        return r
    }, f = function (e, t, n) {
        if (e) {
            var r = n.allowDots ? e.replace(/\.([^.[]+)/g, "[$1]") : e, i = /(\[[^[\]]*])/, a = /(\[[^[\]]*])/g,
                s = i.exec(r), u = s ? r.slice(0, s.index) : r, l = [];
            if (u) {
                if (!n.plainObjects && o.call(Object.prototype, u) && !n.allowPrototypes) return;
                l.push(u)
            }
            for (var f = 0; null !== (s = a.exec(r)) && f < n.depth;) {
                if (f += 1, !n.plainObjects && o.call(Object.prototype, s[1].slice(1, -1)) && !n.allowPrototypes) return;
                l.push(s[1])
            }
            return s && l.push("[" + r.slice(s.index) + "]"), c(l, t, n)
        }
    }, d = function (e) {
        if (!e) return i;
        if (null !== e.decoder && void 0 !== e.decoder && "function" != typeof e.decoder) throw new TypeError("Decoder has to be a function.");
        if ("undefined" != typeof e.charset && "utf-8" !== e.charset && "iso-8859-1" !== e.charset) throw new Error("The charset option must be either utf-8, iso-8859-1, or undefined");
        var t = "undefined" == typeof e.charset ? i.charset : e.charset;
        return {
            allowDots: "undefined" == typeof e.allowDots ? i.allowDots : !!e.allowDots,
            allowPrototypes: "boolean" == typeof e.allowPrototypes ? e.allowPrototypes : i.allowPrototypes,
            arrayLimit: "number" == typeof e.arrayLimit ? e.arrayLimit : i.arrayLimit,
            charset: t,
            charsetSentinel: "boolean" == typeof e.charsetSentinel ? e.charsetSentinel : i.charsetSentinel,
            comma: "boolean" == typeof e.comma ? e.comma : i.comma,
            decoder: "function" == typeof e.decoder ? e.decoder : i.decoder,
            delimiter: "string" == typeof e.delimiter || r.isRegExp(e.delimiter) ? e.delimiter : i.delimiter,
            depth: "number" == typeof e.depth ? e.depth : i.depth,
            ignoreQueryPrefix: e.ignoreQueryPrefix === !0,
            interpretNumericEntities: "boolean" == typeof e.interpretNumericEntities ? e.interpretNumericEntities : i.interpretNumericEntities,
            parameterLimit: "number" == typeof e.parameterLimit ? e.parameterLimit : i.parameterLimit,
            parseArrays: e.parseArrays !== !1,
            plainObjects: "boolean" == typeof e.plainObjects ? e.plainObjects : i.plainObjects,
            strictNullHandling: "boolean" == typeof e.strictNullHandling ? e.strictNullHandling : i.strictNullHandling
        }
    };
    e.exports = function (e, t) {
        var n = d(t);
        if ("" === e || null === e || "undefined" == typeof e) return n.plainObjects ? Object.create(null) : {};
        for (var o = "string" == typeof e ? l(e, n) : e, i = n.plainObjects ? Object.create(null) : {}, a = Object.keys(o), s = 0; s < a.length; ++s) {
            var u = a[s], c = f(u, o[u], n);
            i = r.merge(i, c, n)
        }
        return r.compact(i)
    }
}, function (e, t, n) {
    "use strict";

    function r(e) {
        return e && e.__esModule ? e : {default: e}
    }

    var o = n(5), i = r(o), a = n(56), s = r(a);
    e.exports = function () {
        $(document).on("click", "a", function (e) {
            var t = e.currentTarget.href, n = document.createElement("a");
            if (n.href = t, !i.default.parseQuery(n.href, "scheme")) {
                var r = ["toutiao.com", "www.toutiao.com", "m.toutiao.com", "m.pstatp.com", "m.365yg.com"];
                if (r.indexOf(n.hostname) !== -1 && s.default.os.ios) {
                    var o = [/\/group\/(\d+)/, /\/a(\d+)/, /\/item\/(\d+)/, /\/i(\d+)/];
                    o.some(function (r) {
                        var o = n.pathname.match(r);
                        return !!o && (t = i.default.appendQuery(t, {scheme: "snssdk141://detail?groupid=" + o[1]}), e.currentTarget.href = t, !0)
                    })
                }
            }
        })
    }
}, function (e, t, n) {
    var r = function () {
        function e(e) {
            return null == e ? String(e) : Q[$.call(e)] || "object"
        }

        function t(t) {
            return "function" == e(t)
        }

        function n(e) {
            return null != e && e == e.window
        }

        function r(e) {
            return null != e && e.nodeType == e.DOCUMENT_NODE
        }

        function o(t) {
            return "object" == e(t)
        }

        function i(e) {
            return o(e) && !n(e) && Object.getPrototypeOf(e) == Object.prototype
        }

        function a(e) {
            return "number" == typeof e.length
        }

        function s(e) {
            return P.call(e, function (e) {
                return null != e
            })
        }

        function u(e) {
            return e.length > 0 ? k.fn.concat.apply([], e) : e
        }

        function l(e) {
            return e.replace(/::/g, "/").replace(/([A-Z]+)([A-Z][a-z])/g, "$1_$2").replace(/([a-z\d])([A-Z])/g, "$1_$2").replace(/_/g, "-").toLowerCase()
        }

        function c(e) {
            return e in L ? L[e] : L[e] = new RegExp("(^|\\s)" + e + "(\\s|$)")
        }

        function f(e, t) {
            return "number" != typeof t || A[l(e)] ? t : t + "px"
        }

        function d(e) {
            var t, n;
            return C[e] || (t = B.createElement(e), B.body.appendChild(t), n = getComputedStyle(t, "").getPropertyValue("display"), t.parentNode.removeChild(t), "none" == n && (n = "block"), C[e] = n), C[e]
        }

        function p(e) {
            return "children" in e ? S.call(e.children) : k.map(e.childNodes, function (e) {
                if (1 == e.nodeType) return e
            })
        }

        function h(e, t, n) {
            for (_ in t) n && (i(t[_]) || X(t[_])) ? (i(t[_]) && !i(e[_]) && (e[_] = {}), X(t[_]) && !X(e[_]) && (e[_] = []), h(e[_], t[_], n)) : t[_] !== x && (e[_] = t[_])
        }

        function m(e, t) {
            return null == t ? k(e) : k(e).filter(t)
        }

        function v(e, n, r, o) {
            return t(n) ? n.call(e, r, o) : n
        }

        function g(e, t, n) {
            null == n ? e.removeAttribute(t) : e.setAttribute(t, n)
        }

        function y(e, t) {
            var n = e.className || "", r = n && n.baseVal !== x;
            return t === x ? r ? n.baseVal : n : void (r ? n.baseVal = t : e.className = t)
        }

        function b(e) {
            try {
                return e ? "true" == e || "false" != e && ("null" == e ? null : +e + "" == e ? +e : /^[\[\{]/.test(e) ? k.parseJSON(e) : e) : e
            } catch (t) {
                return e
            }
        }

        function w(e, t) {
            t(e);
            for (var n = 0, r = e.childNodes.length; n < r; n++) w(e.childNodes[n], t)
        }

        var x, _, k, j, O, E, T = [], S = T.slice, P = T.filter, B = window.document, C = {}, L = {},
            A = {"column-count": 1, columns: 1, "font-weight": 1, "line-height": 1, opacity: 1, "z-index": 1, zoom: 1},
            M = /^\s*<(\w+|!)[^>]*>/, D = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
            N = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi, R = /^(?:body|html)$/i,
            I = /([A-Z])/g, U = ["val", "css", "html", "text", "data", "width", "height", "offset"],
            H = ["after", "prepend", "before", "append"], F = B.createElement("table"), V = B.createElement("tr"),
            z = {tr: B.createElement("tbody"), tbody: F, thead: F, tfoot: F, td: V, th: V, "*": B.createElement("div")},
            G = /complete|loaded|interactive/, q = /^[\w-]*$/, Q = {}, $ = Q.toString, W = {},
            Y = B.createElement("div"), Z = {
                tabindex: "tabIndex",
                readonly: "readOnly",
                for: "htmlFor",
                class: "className",
                maxlength: "maxLength",
                cellspacing: "cellSpacing",
                cellpadding: "cellPadding",
                rowspan: "rowSpan",
                colspan: "colSpan",
                usemap: "useMap",
                frameborder: "frameBorder",
                contenteditable: "contentEditable"
            }, X = Array.isArray || function (e) {
                return e instanceof Array
            };
        return W.matches = function (e, t) {
            if (!t || !e || 1 !== e.nodeType) return !1;
            var n = e.webkitMatchesSelector || e.mozMatchesSelector || e.oMatchesSelector || e.matchesSelector;
            if (n) return n.call(e, t);
            var r, o = e.parentNode, i = !o;
            return i && (o = Y).appendChild(e), r = ~W.qsa(o, t).indexOf(e), i && Y.removeChild(e), r
        }, O = function (e) {
            return e.replace(/-+(.)?/g, function (e, t) {
                return t ? t.toUpperCase() : ""
            })
        }, E = function (e) {
            return P.call(e, function (t, n) {
                return e.indexOf(t) == n
            })
        }, W.fragment = function (e, t, n) {
            var r, o, a;
            return D.test(e) && (r = k(B.createElement(RegExp.$1))), r || (e.replace && (e = e.replace(N, "<$1></$2>")), t === x && (t = M.test(e) && RegExp.$1), t in z || (t = "*"), a = z[t], a.innerHTML = "" + e, r = k.each(S.call(a.childNodes), function () {
                a.removeChild(this)
            })), i(n) && (o = k(r), k.each(n, function (e, t) {
                U.indexOf(e) > -1 ? o[e](t) : o.attr(e, t)
            })), r
        }, W.Z = function (e, t) {
            return e = e || [], e.__proto__ = k.fn, e.selector = t || "", e
        }, W.isZ = function (e) {
            return e instanceof W.Z
        }, W.init = function (e, n) {
            var r;
            if (!e) return W.Z();
            if ("string" == typeof e) if (e = e.trim(), "<" == e[0] && M.test(e)) r = W.fragment(e, RegExp.$1, n), e = null; else {
                if (n !== x) return k(n).find(e);
                r = W.qsa(B, e)
            } else {
                if (t(e)) return k(B).ready(e);
                if (W.isZ(e)) return e;
                if (X(e)) r = s(e); else if (o(e)) r = [e], e = null; else if (M.test(e)) r = W.fragment(e.trim(), RegExp.$1, n), e = null; else {
                    if (n !== x) return k(n).find(e);
                    r = W.qsa(B, e)
                }
            }
            return W.Z(r, e)
        }, k = function (e, t) {
            return W.init(e, t)
        }, k.extend = function (e) {
            var t, n = S.call(arguments, 1);
            return "boolean" == typeof e && (t = e, e = n.shift()), n.forEach(function (n) {
                h(e, n, t)
            }), e
        }, W.qsa = function (e, t) {
            var n, o = "#" == t[0], i = !o && "." == t[0], a = o || i ? t.slice(1) : t, s = q.test(a);
            return r(e) && s && o ? (n = e.getElementById(a)) ? [n] : [] : 1 !== e.nodeType && 9 !== e.nodeType ? [] : S.call(s && !o ? i ? e.getElementsByClassName(a) : e.getElementsByTagName(t) : e.querySelectorAll(t))
        }, k.contains = B.documentElement.contains ? function (e, t) {
            return e !== t && e.contains(t)
        } : function (e, t) {
            for (; t && (t = t.parentNode);) if (t === e) return !0;
            return !1
        }, k.type = e, k.isFunction = t, k.isWindow = n, k.isArray = X, k.isPlainObject = i, k.isEmptyObject = function (e) {
            var t;
            for (t in e) return !1;
            return !0
        }, k.inArray = function (e, t, n) {
            return T.indexOf.call(t, e, n)
        }, k.camelCase = O, k.trim = function (e) {
            return null == e ? "" : String.prototype.trim.call(e)
        }, k.uuid = 0, k.support = {}, k.expr = {}, k.map = function (e, t) {
            var n, r, o, i = [];
            if (a(e)) for (r = 0; r < e.length; r++) n = t(e[r], r), null != n && i.push(n); else for (o in e) n = t(e[o], o), null != n && i.push(n);
            return u(i)
        }, k.each = function (e, t) {
            var n, r;
            if (a(e)) {
                for (n = 0; n < e.length; n++) if (t.call(e[n], n, e[n]) === !1) return e
            } else for (r in e) if (t.call(e[r], r, e[r]) === !1) return e;
            return e
        }, k.grep = function (e, t) {
            return P.call(e, t)
        }, window.JSON && (k.parseJSON = JSON.parse), k.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function (e, t) {
            Q["[object " + t + "]"] = t.toLowerCase()
        }), k.fn = {
            forEach: T.forEach,
            reduce: T.reduce,
            push: T.push,
            sort: T.sort,
            indexOf: T.indexOf,
            concat: T.concat,
            map: function (e) {
                return k(k.map(this, function (t, n) {
                    return e.call(t, n, t)
                }))
            },
            slice: function () {
                return k(S.apply(this, arguments))
            },
            ready: function (e) {
                return G.test(B.readyState) && B.body ? e(k) : B.addEventListener("DOMContentLoaded", function () {
                    e(k)
                }, !1), this
            },
            get: function (e) {
                return e === x ? S.call(this) : this[e >= 0 ? e : e + this.length]
            },
            toArray: function () {
                return this.get()
            },
            size: function () {
                return this.length
            },
            remove: function () {
                return this.each(function () {
                    null != this.parentNode && this.parentNode.removeChild(this)
                })
            },
            each: function (e) {
                return T.every.call(this, function (t, n) {
                    return e.call(t, n, t) !== !1
                }), this
            },
            filter: function (e) {
                return t(e) ? this.not(this.not(e)) : k(P.call(this, function (t) {
                    return W.matches(t, e)
                }))
            },
            add: function (e, t) {
                return k(E(this.concat(k(e, t))))
            },
            is: function (e) {
                return this.length > 0 && W.matches(this[0], e)
            },
            not: function (e) {
                var n = [];
                if (t(e) && e.call !== x) this.each(function (t) {
                    e.call(this, t) || n.push(this)
                }); else {
                    var r = "string" == typeof e ? this.filter(e) : a(e) && t(e.item) ? S.call(e) : k(e);
                    this.forEach(function (e) {
                        r.indexOf(e) < 0 && n.push(e)
                    })
                }
                return k(n)
            },
            has: function (e) {
                return this.filter(function () {
                    return o(e) ? k.contains(this, e) : k(this).find(e).size()
                })
            },
            eq: function (e) {
                return e === -1 ? this.slice(e) : this.slice(e, +e + 1)
            },
            first: function () {
                var e = this[0];
                return e && !o(e) ? e : k(e)
            },
            last: function () {
                var e = this[this.length - 1];
                return e && !o(e) ? e : k(e)
            },
            find: function (e) {
                var t, n = this;
                return t = e ? "object" == typeof e ? k(e).filter(function () {
                    var e = this;
                    return T.some.call(n, function (t) {
                        return k.contains(t, e)
                    })
                }) : 1 == this.length ? k(W.qsa(this[0], e)) : this.map(function () {
                    return W.qsa(this, e)
                }) : k()
            },
            closest: function (e, t) {
                var n = this[0], o = !1;
                for ("object" == typeof e && (o = k(e)); n && !(o ? o.indexOf(n) >= 0 : W.matches(n, e));) n = n !== t && !r(n) && n.parentNode;
                return k(n)
            },
            parents: function (e) {
                for (var t = [], n = this; n.length > 0;) n = k.map(n, function (e) {
                    if ((e = e.parentNode) && !r(e) && t.indexOf(e) < 0) return t.push(e), e
                });
                return m(t, e)
            },
            parent: function (e) {
                return m(E(this.pluck("parentNode")), e)
            },
            children: function (e) {
                return m(this.map(function () {
                    return p(this)
                }), e)
            },
            contents: function () {
                return this.map(function () {
                    return S.call(this.childNodes)
                })
            },
            siblings: function (e) {
                return m(this.map(function (e, t) {
                    return P.call(p(t.parentNode), function (e) {
                        return e !== t
                    })
                }), e)
            },
            empty: function () {
                return this.each(function () {
                    this.innerHTML = ""
                })
            },
            pluck: function (e) {
                return k.map(this, function (t) {
                    return t[e]
                })
            },
            show: function () {
                return this.each(function () {
                    "none" == this.style.display && (this.style.display = ""), "none" == getComputedStyle(this, "").getPropertyValue("display") && (this.style.display = d(this.nodeName))
                })
            },
            replaceWith: function (e) {
                return this.before(e).remove()
            },
            wrap: function (e) {
                var n = t(e);
                if (this[0] && !n) var r = k(e).get(0), o = r.parentNode || this.length > 1;
                return this.each(function (t) {
                    k(this).wrapAll(n ? e.call(this, t) : o ? r.cloneNode(!0) : r)
                })
            },
            wrapAll: function (e) {
                if (this[0]) {
                    k(this[0]).before(e = k(e));
                    for (var t; (t = e.children()).length;) e = t.first();
                    k(e).append(this)
                }
                return this
            },
            wrapInner: function (e) {
                var n = t(e);
                return this.each(function (t) {
                    var r = k(this), o = r.contents(), i = n ? e.call(this, t) : e;
                    o.length ? o.wrapAll(i) : r.append(i)
                })
            },
            unwrap: function () {
                return this.parent().each(function () {
                    k(this).replaceWith(k(this).children())
                }), this
            },
            clone: function () {
                return this.map(function () {
                    return this.cloneNode(!0)
                })
            },
            hide: function () {
                return this.css("display", "none")
            },
            toggle: function (e) {
                return this.each(function () {
                    var t = k(this);
                    (e === x ? "none" == t.css("display") : e) ? t.show() : t.hide()
                })
            },
            prev: function (e) {
                return k(this.pluck("previousElementSibling")).filter(e || "*")
            },
            next: function (e) {
                return k(this.pluck("nextElementSibling")).filter(e || "*")
            },
            html: function (e) {
                return 0 in arguments ? this.each(function (t) {
                    var n = this.innerHTML;
                    k(this).empty().append(v(this, e, t, n))
                }) : 0 in this ? this[0].innerHTML : null
            },
            text: function (e) {
                return 0 in arguments ? this.each(function (t) {
                    var n = v(this, e, t, this.textContent);
                    this.textContent = null == n ? "" : "" + n
                }) : 0 in this ? this[0].textContent : null
            },
            attr: function (e, t) {
                var n;
                return "string" != typeof e || 1 in arguments ? this.each(function (n) {
                    if (1 === this.nodeType) if (o(e)) for (_ in e) g(this, _, e[_]); else g(this, e, v(this, t, n, this.getAttribute(e)))
                }) : this.length && 1 === this[0].nodeType ? !(n = this[0].getAttribute(e)) && e in this[0] ? this[0][e] : n : x
            },
            removeAttr: function (e) {
                return this.each(function () {
                    1 === this.nodeType && e.split(" ").forEach(function (e) {
                        g(this, e)
                    }, this)
                })
            },
            prop: function (e, t) {
                return e = Z[e] || e, 1 in arguments ? this.each(function (n) {
                    this[e] = v(this, t, n, this[e])
                }) : this[0] && this[0][e]
            },
            data: function (e, t) {
                var n = "data-" + e.replace(I, "-$1").toLowerCase(),
                    r = 1 in arguments ? this.attr(n, t) : this.attr(n);
                return null !== r ? b(r) : x
            },
            val: function (e) {
                return 0 in arguments ? this.each(function (t) {
                    this.value = v(this, e, t, this.value)
                }) : this[0] && (this[0].multiple ? k(this[0]).find("option").filter(function () {
                    return this.selected
                }).pluck("value") : this[0].value)
            },
            offset: function (e) {
                if (e) return this.each(function (t) {
                    var n = k(this), r = v(this, e, t, n.offset()), o = n.offsetParent().offset(),
                        i = {top: r.top - o.top, left: r.left - o.left};
                    "static" == n.css("position") && (i.position = "relative"), n.css(i)
                });
                if (!this.length) return null;
                var t = this[0].getBoundingClientRect();
                return {
                    left: t.left + window.pageXOffset,
                    top: t.top + window.pageYOffset,
                    width: Math.round(t.width),
                    height: Math.round(t.height)
                }
            },
            css: function (t, n) {
                if (arguments.length < 2) {
                    var r, o = this[0];
                    if (!o) return;
                    if (r = getComputedStyle(o, ""), "string" == typeof t) return o.style[O(t)] || r.getPropertyValue(t);
                    if (X(t)) {
                        var i = {};
                        return k.each(t, function (e, t) {
                            i[t] = o.style[O(t)] || r.getPropertyValue(t)
                        }), i
                    }
                }
                var a = "";
                if ("string" == e(t)) n || 0 === n ? a = l(t) + ":" + f(t, n) : this.each(function () {
                    this.style.removeProperty(l(t))
                }); else for (_ in t) t[_] || 0 === t[_] ? a += l(_) + ":" + f(_, t[_]) + ";" : this.each(function () {
                    this.style.removeProperty(l(_))
                });
                return this.each(function () {
                    this.style.cssText += ";" + a
                })
            },
            index: function (e) {
                return e ? this.indexOf(k(e)[0]) : this.parent().children().indexOf(this[0])
            },
            hasClass: function (e) {
                return !!e && T.some.call(this, function (e) {
                    return this.test(y(e))
                }, c(e))
            },
            addClass: function (e) {
                return e ? this.each(function (t) {
                    if ("className" in this) {
                        j = [];
                        var n = y(this), r = v(this, e, t, n);
                        r.split(/\s+/g).forEach(function (e) {
                            k(this).hasClass(e) || j.push(e)
                        }, this), j.length && y(this, n + (n ? " " : "") + j.join(" "))
                    }
                }) : this
            },
            removeClass: function (e) {
                return this.each(function (t) {
                    if ("className" in this) {
                        if (e === x) return y(this, "");
                        j = y(this), v(this, e, t, j).split(/\s+/g).forEach(function (e) {
                            j = j.replace(c(e), " ")
                        }), y(this, j.trim())
                    }
                })
            },
            toggleClass: function (e, t) {
                return e ? this.each(function (n) {
                    var r = k(this), o = v(this, e, n, y(this));
                    o.split(/\s+/g).forEach(function (e) {
                        (t === x ? !r.hasClass(e) : t) ? r.addClass(e) : r.removeClass(e)
                    })
                }) : this
            },
            scrollTop: function (e) {
                if (this.length) {
                    var t = "scrollTop" in this[0];
                    return e === x ? t ? this[0].scrollTop : this[0].pageYOffset : this.each(t ? function () {
                        this.scrollTop = e
                    } : function () {
                        this.scrollTo(this.scrollX, e)
                    })
                }
            },
            scrollLeft: function (e) {
                if (this.length) {
                    var t = "scrollLeft" in this[0];
                    return e === x ? t ? this[0].scrollLeft : this[0].pageXOffset : this.each(t ? function () {
                        this.scrollLeft = e
                    } : function () {
                        this.scrollTo(e, this.scrollY)
                    })
                }
            },
            position: function () {
                if (this.length) {
                    var e = this[0], t = this.offsetParent(), n = this.offset(),
                        r = R.test(t[0].nodeName) ? {top: 0, left: 0} : t.offset();
                    return n.top -= parseFloat(k(e).css("margin-top")) || 0, n.left -= parseFloat(k(e).css("margin-left")) || 0, r.top += parseFloat(k(t[0]).css("border-top-width")) || 0, r.left += parseFloat(k(t[0]).css("border-left-width")) || 0, {
                        top: n.top - r.top,
                        left: n.left - r.left
                    }
                }
            },
            offsetParent: function () {
                return this.map(function () {
                    for (var e = this.offsetParent || B.body; e && !R.test(e.nodeName) && "static" == k(e).css("position");) e = e.offsetParent;
                    return e
                })
            }
        }, k.fn.detach = k.fn.remove, ["width", "height"].forEach(function (e) {
            var t = e.replace(/./, function (e) {
                return e[0].toUpperCase()
            });
            k.fn[e] = function (o) {
                var i, a = this[0];
                return o === x ? n(a) ? a["inner" + t] : r(a) ? a.documentElement["scroll" + t] : (i = this.offset()) && i[e] : this.each(function (t) {
                    a = k(this), a.css(e, v(this, o, t, a[e]()))
                })
            }
        }), H.forEach(function (t, n) {
            var r = n % 2;
            k.fn[t] = function () {
                var t, o, i = k.map(arguments, function (n) {
                    return t = e(n), "object" == t || "array" == t || null == n ? n : W.fragment(n)
                }), a = this.length > 1;
                return i.length < 1 ? this : this.each(function (e, t) {
                    o = r ? t : t.parentNode, t = 0 == n ? t.nextSibling : 1 == n ? t.firstChild : 2 == n ? t : null;
                    var s = k.contains(B.documentElement, o);
                    i.forEach(function (e) {
                        if (a) e = e.cloneNode(!0); else if (!o) return k(e).remove();
                        o.insertBefore(e, t), s && w(e, function (e) {
                            null == e.nodeName || "SCRIPT" !== e.nodeName.toUpperCase() || e.type && "text/javascript" !== e.type || e.src || window.eval.call(window, e.innerHTML)
                        })
                    })
                })
            }, k.fn[r ? t + "To" : "insert" + (n ? "Before" : "After")] = function (e) {
                return k(e)[t](this), this
            }
        }), W.Z.prototype = k.fn, W.uniq = E, W.deserializeValue = b, k.zepto = W, k
    }();
    window.Zepto = r, void 0 === window.$ && (window.$ = r), function (e) {
        function t(e) {
            return e._zid || (e._zid = d++)
        }

        function n(e, n, i, a) {
            if (n = r(n), n.ns) var s = o(n.ns);
            return (v[t(e)] || []).filter(function (e) {
                return e && (!n.e || e.e == n.e) && (!n.ns || s.test(e.ns)) && (!i || t(e.fn) === t(i)) && (!a || e.sel == a)
            })
        }

        function r(e) {
            var t = ("" + e).split(".");
            return {e: t[0], ns: t.slice(1).sort().join(" ")}
        }

        function o(e) {
            return new RegExp("(?:^| )" + e.replace(" ", " .* ?") + "(?: |$)")
        }

        function i(e, t) {
            return e.del && !y && e.e in b || !!t
        }

        function a(e) {
            return w[e] || y && b[e] || e
        }

        function s(n, o, s, u, c, d, p) {
            var h = t(n), m = v[h] || (v[h] = []);
            o.split(/\s/).forEach(function (t) {
                if ("ready" == t) return e(document).ready(s);
                var o = r(t);
                o.fn = s, o.sel = c, o.e in w && (s = function (t) {
                    var n = t.relatedTarget;
                    if (!n || n !== this && !e.contains(this, n)) return o.fn.apply(this, arguments)
                }), o.del = d;
                var h = d || s;
                o.proxy = function (e) {
                    if (e = l(e), !e.isImmediatePropagationStopped()) {
                        e.data = u;
                        var t = h.apply(n, e._args == f ? [e] : [e].concat(e._args));
                        return t === !1 && (e.preventDefault(), e.stopPropagation()), t
                    }
                }, o.i = m.length, m.push(o), "addEventListener" in n && n.addEventListener(a(o.e), o.proxy, i(o, p))
            })
        }

        function u(e, r, o, s, u) {
            var l = t(e);
            (r || "").split(/\s/).forEach(function (t) {
                n(e, t, o, s).forEach(function (t) {
                    delete v[l][t.i], "removeEventListener" in e && e.removeEventListener(a(t.e), t.proxy, i(t, u))
                })
            })
        }

        function l(t, n) {
            return !n && t.isDefaultPrevented || (n || (n = t), e.each(j, function (e, r) {
                var o = n[e];
                t[e] = function () {
                    return this[r] = x, o && o.apply(n, arguments)
                }, t[r] = _
            }), (n.defaultPrevented !== f ? n.defaultPrevented : "returnValue" in n ? n.returnValue === !1 : n.getPreventDefault && n.getPreventDefault()) && (t.isDefaultPrevented = x)), t
        }

        function c(e) {
            var t, n = {originalEvent: e};
            for (t in e) k.test(t) || e[t] === f || (n[t] = e[t]);
            return l(n, e)
        }

        var f, d = 1, p = Array.prototype.slice, h = e.isFunction, m = function (e) {
                return "string" == typeof e
            }, v = {}, g = {}, y = "onfocusin" in window, b = {focus: "focusin", blur: "focusout"},
            w = {mouseenter: "mouseover", mouseleave: "mouseout"};
        g.click = g.mousedown = g.mouseup = g.mousemove = "MouseEvents", e.event = {
            add: s,
            remove: u
        }, e.proxy = function (n, r) {
            var o = 2 in arguments && p.call(arguments, 2);
            if (h(n)) {
                var i = function () {
                    return n.apply(r, o ? o.concat(p.call(arguments)) : arguments)
                };
                return i._zid = t(n), i
            }
            if (m(r)) return o ? (o.unshift(n[r], n), e.proxy.apply(null, o)) : e.proxy(n[r], n);
            throw new TypeError("expected function")
        }, e.fn.bind = function (e, t, n) {
            return this.on(e, t, n)
        }, e.fn.unbind = function (e, t) {
            return this.off(e, t)
        }, e.fn.one = function (e, t, n, r) {
            return this.on(e, t, n, r, 1)
        };
        var x = function () {
            return !0
        }, _ = function () {
            return !1
        }, k = /^([A-Z]|returnValue$|layer[XY]$)/, j = {
            preventDefault: "isDefaultPrevented",
            stopImmediatePropagation: "isImmediatePropagationStopped",
            stopPropagation: "isPropagationStopped"
        };
        e.fn.delegate = function (e, t, n) {
            return this.on(t, e, n)
        }, e.fn.undelegate = function (e, t, n) {
            return this.off(t, e, n)
        }, e.fn.live = function (t, n) {
            return e(document.body).delegate(this.selector, t, n), this
        }, e.fn.die = function (t, n) {
            return e(document.body).undelegate(this.selector, t, n), this
        }, e.fn.on = function (t, n, r, o, i) {
            var a, l, d = this;
            return t && !m(t) ? (e.each(t, function (e, t) {
                d.on(e, n, r, t, i)
            }), d) : (m(n) || h(o) || o === !1 || (o = r, r = n, n = f), (h(r) || r === !1) && (o = r, r = f), o === !1 && (o = _), d.each(function (f, d) {
                i && (a = function (e) {
                    return u(d, e.type, o), o.apply(this, arguments)
                }), n && (l = function (t) {
                    var r, i = e(t.target).closest(n, d).get(0);
                    if (i && i !== d) return r = e.extend(c(t), {
                        currentTarget: i,
                        liveFired: d
                    }), (a || o).apply(i, [r].concat(p.call(arguments, 1)))
                }), s(d, t, o, r, n, l || a)
            }))
        }, e.fn.off = function (t, n, r) {
            var o = this;
            return t && !m(t) ? (e.each(t, function (e, t) {
                o.off(e, n, t)
            }), o) : (m(n) || h(r) || r === !1 || (r = n, n = f), r === !1 && (r = _), o.each(function () {
                u(this, t, r, n)
            }))
        }, e.fn.trigger = function (t, n) {
            return t = m(t) || e.isPlainObject(t) ? e.Event(t) : l(t), t._args = n, this.each(function () {
                t.type in b && "function" == typeof this[t.type] ? this[t.type]() : "dispatchEvent" in this ? this.dispatchEvent(t) : e(this).triggerHandler(t, n)
            })
        }, e.fn.triggerHandler = function (t, r) {
            var o, i;
            return this.each(function (a, s) {
                o = c(m(t) ? e.Event(t) : t), o._args = r, o.target = s, e.each(n(s, t.type || t), function (e, t) {
                    if (i = t.proxy(o), o.isImmediatePropagationStopped()) return !1
                })
            }), i
        }, "focusin focusout focus blur load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select keydown keypress keyup error".split(" ").forEach(function (t) {
            e.fn[t] = function (e) {
                return 0 in arguments ? this.bind(t, e) : this.trigger(t)
            }
        }), e.Event = function (e, t) {
            m(e) || (t = e, e = t.type);
            var n = document.createEvent(g[e] || "Events"), r = !0;
            if (t) for (var o in t) "bubbles" == o ? r = !!t[o] : n[o] = t[o];
            return n.initEvent(e, r, !0), l(n)
        }
    }(r), function (e) {
        function t(t, n, r) {
            var o = e.Event(n);
            return e(t).trigger(o, r), !o.isDefaultPrevented()
        }

        function n(e, n, r, o) {
            if (e.global) return t(n || y, r, o)
        }

        function r(t) {
            t.global && 0 === e.active++ && n(t, null, "ajaxStart")
        }

        function o(t) {
            t.global && !--e.active && n(t, null, "ajaxStop")
        }

        function i(e, t) {
            var r = t.context;
            return t.beforeSend.call(r, e, t) !== !1 && n(t, r, "ajaxBeforeSend", [e, t]) !== !1 && void n(t, r, "ajaxSend", [e, t])
        }

        function a(e, t, r, o) {
            var i = r.context, a = "success";
            r.success.call(i, e, a, t), o && o.resolveWith(i, [e, a, t]), n(r, i, "ajaxSuccess", [t, r, e]), u(a, t, r)
        }

        function s(e, t, r, o, i) {
            var a = o.context;
            o.error.call(a, r, t, e), i && i.rejectWith(a, [r, t, e]), n(o, a, "ajaxError", [r, o, e || t]), u(t, r, o)
        }

        function u(e, t, r) {
            var i = r.context;
            r.complete.call(i, t, e), n(r, i, "ajaxComplete", [t, r]), o(r)
        }

        function l() {
        }

        function c(e) {
            return e && (e = e.split(";", 2)[0]), e && (e == k ? "html" : e == _ ? "json" : w.test(e) ? "script" : x.test(e) && "xml") || "text"
        }

        function f(e, t) {
            return "" == t ? e : (e + "&" + t).replace(/[&?]{1,2}/, "?")
        }

        function d(t) {
            t.processData && t.data && "string" != e.type(t.data) && (t.data = e.param(t.data, t.traditional)), !t.data || t.type && "GET" != t.type.toUpperCase() || (t.url = f(t.url, t.data), t.data = void 0)
        }

        function p(t, n, r, o) {
            return e.isFunction(n) && (o = r, r = n, n = void 0), e.isFunction(r) || (o = r, r = void 0), {
                url: t,
                data: n,
                success: r,
                dataType: o
            }
        }

        function h(t, n, r, o) {
            var i, a = e.isArray(n), s = e.isPlainObject(n);
            e.each(n, function (n, u) {
                i = e.type(u), o && (n = r ? o : o + "[" + (s || "object" == i || "array" == i ? n : "") + "]"), !o && a ? t.add(u.name, u.value) : "array" == i || !r && "object" == i ? h(t, u, r, n) : t.add(n, u)
            })
        }

        var m, v, g = 0, y = window.document, b = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,
            w = /^(?:text|application)\/javascript/i, x = /^(?:text|application)\/xml/i, _ = "application/json",
            k = "text/html", j = /^\s*$/, O = y.createElement("a");
        O.href = window.location.href, e.active = 0, e.ajaxJSONP = function (t, n) {
            if (!("type" in t)) return e.ajax(t);
            var r, o, u = t.jsonpCallback, l = (e.isFunction(u) ? u() : u) || "jsonp" + ++g,
                c = y.createElement("script"), f = window[l], d = function (t) {
                    e(c).triggerHandler("error", t || "abort")
                }, p = {abort: d};
            return n && n.promise(p), e(c).on("load error", function (i, u) {
                clearTimeout(o), e(c).off().remove(), "error" != i.type && r ? a(r[0], p, t, n) : s(null, u || "error", p, t, n), window[l] = f, r && e.isFunction(f) && f(r[0]), f = r = void 0
            }), i(p, t) === !1 ? (d("abort"), p) : (window[l] = function () {
                r = arguments
            }, c.src = t.url.replace(/\?(.+)=\?/, "?$1=" + l), y.head.appendChild(c), t.timeout > 0 && (o = setTimeout(function () {
                d("timeout")
            }, t.timeout)), p)
        }, e.ajaxSettings = {
            type: "GET",
            beforeSend: l,
            success: l,
            error: l,
            complete: l,
            context: null,
            global: !0,
            xhr: function () {
                return new window.XMLHttpRequest
            },
            accepts: {
                script: "text/javascript, application/javascript, application/x-javascript",
                json: _,
                xml: "application/xml, text/xml",
                html: k,
                text: "text/plain"
            },
            crossDomain: !1,
            timeout: 0,
            processData: !0,
            cache: !0
        }, e.ajax = function (t) {
            var n, o = e.extend({}, t || {}), u = e.Deferred && e.Deferred();
            for (m in e.ajaxSettings) void 0 === o[m] && (o[m] = e.ajaxSettings[m]);
            r(o), o.crossDomain || (n = y.createElement("a"), n.href = o.url, n.href = n.href, o.crossDomain = O.protocol + "//" + O.host != n.protocol + "//" + n.host), o.url || (o.url = window.location.toString()), d(o);
            var p = o.dataType, h = /\?.+=\?/.test(o.url);
            if (h && (p = "jsonp"), o.cache !== !1 && (t && t.cache === !0 || "script" != p && "jsonp" != p) || (o.url = f(o.url, "_=" + Date.now())), "jsonp" == p) return h || (o.url = f(o.url, o.jsonp ? o.jsonp + "=?" : o.jsonp === !1 ? "" : "callback=?")), e.ajaxJSONP(o, u);
            var g, b = o.accepts[p], w = {}, x = function (e, t) {
                    w[e.toLowerCase()] = [e, t]
                }, _ = /^([\w-]+:)\/\//.test(o.url) ? RegExp.$1 : window.location.protocol, k = o.xhr(),
                E = k.setRequestHeader;
            if (u && u.promise(k), o.crossDomain || x("X-Requested-With", "XMLHttpRequest"), x("Accept", b || "*/*"), (b = o.mimeType || b) && (b.indexOf(",") > -1 && (b = b.split(",", 2)[0]), k.overrideMimeType && k.overrideMimeType(b)), (o.contentType || o.contentType !== !1 && o.data && "GET" != o.type.toUpperCase()) && x("Content-Type", o.contentType || "application/x-www-form-urlencoded"), o.headers) for (v in o.headers) x(v, o.headers[v]);
            if (k.setRequestHeader = x, k.onreadystatechange = function () {
                if (4 == k.readyState) {
                    k.onreadystatechange = l, clearTimeout(g);
                    var t, n = !1;
                    if (k.status >= 200 && k.status < 300 || 304 == k.status || 0 == k.status && "file:" == _) {
                        p = p || c(o.mimeType || k.getResponseHeader("content-type")), t = k.responseText;
                        try {
                            "script" == p ? (0, eval)(t) : "xml" == p ? t = k.responseXML : "json" == p && (t = j.test(t) ? null : e.parseJSON(t))
                        } catch (e) {
                            n = e
                        }
                        n ? s(n, "parsererror", k, o, u) : a(t, k, o, u)
                    } else s(k.statusText || null, k.status ? "error" : "abort", k, o, u)
                }
            }, i(k, o) === !1) return k.abort(), s(null, "abort", k, o, u), k;
            if (o.xhrFields) for (v in o.xhrFields) k[v] = o.xhrFields[v];
            var T = !("async" in o) || o.async;
            k.open(o.type, o.url, T, o.username, o.password);
            for (v in w) E.apply(k, w[v]);
            return o.timeout > 0 && (g = setTimeout(function () {
                k.onreadystatechange = l, k.abort(), s(null, "timeout", k, o, u)
            }, o.timeout)), k.send(o.data ? o.data : null), k
        }, e.get = function () {
            return e.ajax(p.apply(null, arguments))
        }, e.post = function () {
            var t = p.apply(null, arguments);
            return t.type = "POST", e.ajax(t)
        }, e.getJSON = function () {
            var t = p.apply(null, arguments);
            return t.dataType = "json", e.ajax(t)
        }, e.fn.load = function (t, n, r) {
            if (!this.length) return this;
            var o, i = this, a = t.split(/\s/), s = p(t, n, r), u = s.success;
            return a.length > 1 && (s.url = a[0], o = a[1]), s.success = function (t) {
                i.html(o ? e("<div>").html(t.replace(b, "")).find(o) : t), u && u.apply(i, arguments)
            }, e.ajax(s), this
        };
        var E = encodeURIComponent;
        e.param = function (t, n) {
            var r = [];
            return r.add = function (t, n) {
                e.isFunction(n) && (n = n()), null == n && (n = ""), this.push(E(t) + "=" + E(n))
            }, h(r, t, n), r.join("&").replace(/%20/g, "+")
        }
    }(r), function (e) {
        e.fn.serializeArray = function () {
            var t, n, r = [], o = function (e) {
                return e.forEach ? e.forEach(o) : void r.push({name: t, value: e})
            };
            return this[0] && e.each(this[0].elements, function (r, i) {
                n = i.type, t = i.name, t && "fieldset" != i.nodeName.toLowerCase() && !i.disabled && "submit" != n && "reset" != n && "button" != n && "file" != n && ("radio" != n && "checkbox" != n || i.checked) && o(e(i).val())
            }), r
        }, e.fn.serialize = function () {
            var e = [];
            return this.serializeArray().forEach(function (t) {
                e.push(encodeURIComponent(t.name) + "=" + encodeURIComponent(t.value))
            }), e.join("&")
        }, e.fn.submit = function (t) {
            if (0 in arguments) this.bind("submit", t); else if (this.length) {
                var n = e.Event("submit");
                this.eq(0).trigger(n), n.isDefaultPrevented() || this.get(0).submit()
            }
            return this
        }
    }(r), function (e) {
        "__proto__" in {} || e.extend(e.zepto, {
            Z: function (t, n) {
                return t = t || [], e.extend(t, e.fn), t.selector = n || "", t.__Z = !0, t
            }, isZ: function (t) {
                return "array" === e.type(t) && "__Z" in t
            }
        });
        try {
            getComputedStyle(void 0)
        } catch (e) {
            var t = getComputedStyle;
            window.getComputedStyle = function (e) {
                try {
                    return t(e)
                } catch (e) {
                    return null
                }
            }
        }
    }(r), e.exports = r
}]);