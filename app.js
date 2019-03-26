! function(t) {
    function e(i) { if (n[i]) return n[i].exports; var r = n[i] = { i: i, l: !1, exports: {} }; return t[i].call(r.exports, r, r.exports, e), r.l = !0, r.exports }
    var n = {};
    return e.m = t, e.c = n, e.d = function(t, n, i) { e.o(t, n) || Object.defineProperty(t, n, { configurable: !1, enumerable: !0, get: i }) }, e.n = function(t) { var n = t && t.__esModule ? function() { return t["default"] } : function() { return t }; return e.d(n, "a", n), n }, e.o = function(t, e) { return Object.prototype.hasOwnProperty.call(t, e) }, e.p = "", e(e.s = 8)
}([function(t, e, n) {
    var i, r;
    ! function(e, n) { "use strict"; "object" == typeof t && "object" == typeof t.exports ? t.exports = e.document ? n(e, !0) : function(t) { if (!t.document) throw new Error("jQuery requires a window with a document"); return n(t) } : n(e) }("undefined" != typeof window ? window : this, function(n, o) {
        "use strict";

        function s(t, e, n) {
            e = e || ct;
            var i, r = e.createElement("script");
            if (r.text = t, n)
                for (i in Tt) n[i] && (r[i] = n[i]);
            e.head.appendChild(r).parentNode.removeChild(r)
        }

        function a(t) { return null == t ? t + "" : "object" == typeof t || "function" == typeof t ? mt[vt.call(t)] || "object" : typeof t }

        function l(t) {
            var e = !!t && "length" in t && t.length,
                n = a(t);
            return !_t(t) && !Ct(t) && ("array" === n || 0 === e || "number" == typeof e && e > 0 && e - 1 in t)
        }

        function u(t, e) { return t.nodeName && t.nodeName.toLowerCase() === e.toLowerCase() }

        function c(t, e, n) { return _t(e) ? xt.grep(t, function(t, i) { return !!e.call(t, i, t) !== n }) : e.nodeType ? xt.grep(t, function(t) { return t === e !== n }) : "string" != typeof e ? xt.grep(t, function(t) { return gt.call(e, t) > -1 !== n }) : xt.filter(e, t, n) }

        function d(t, e) {
            for (;
                (t = t[e]) && 1 !== t.nodeType;);
            return t
        }

        function f(t) { var e = {}; return xt.each(t.match(jt) || [], function(t, n) { e[n] = !0 }), e }

        function h(t) { return t }

        function p(t) { throw t }

        function g(t, e, n, i) { var r; try { t && _t(r = t.promise) ? r.call(t).done(e).fail(n) : t && _t(r = t.then) ? r.call(t, e, n) : e.apply(void 0, [t].slice(i)) } catch (t) { n.apply(void 0, [t]) } }

        function m() { ct.removeEventListener("DOMContentLoaded", m), n.removeEventListener("load", m), xt.ready() }

        function v(t, e) { return e.toUpperCase() }

        function y(t) { return t.replace(zt, "ms-").replace(Ft, v) }

        function b() { this.expando = xt.expando + b.uid++ }

        function w(t) { return "true" === t || "false" !== t && ("null" === t ? null : t === +t + "" ? +t : Gt.test(t) ? JSON.parse(t) : t) }

        function S(t, e, n) {
            var i;
            if (void 0 === n && 1 === t.nodeType)
                if (i = "data-" + e.replace(Qt, "-$&").toLowerCase(), n = t.getAttribute(i), "string" == typeof n) {
                    try { n = w(n) } catch (r) {}
                    Vt.set(t, e, n)
                } else n = void 0;
            return n
        }

        function _(t, e, n, i) {
            var r, o, s = 20,
                a = i ? function() { return i.cur() } : function() { return xt.css(t, e, "") },
                l = a(),
                u = n && n[3] || (xt.cssNumber[e] ? "" : "px"),
                c = (xt.cssNumber[e] || "px" !== u && +l) && Xt.exec(xt.css(t, e));
            if (c && c[3] !== u) {
                for (l /= 2, u = u || c[3], c = +l || 1; s--;) xt.style(t, e, c + u), (1 - o) * (1 - (o = a() / l || .5)) <= 0 && (s = 0), c /= o;
                c = 2 * c, xt.style(t, e, c + u), n = n || []
            }
            return n && (c = +c || +l || 0, r = n[1] ? c + (n[1] + 1) * n[2] : +n[2], i && (i.unit = u, i.start = c, i.end = r)), r
        }

        function C(t) {
            var e, n = t.ownerDocument,
                i = t.nodeName,
                r = te[i];
            return r ? r : (e = n.body.appendChild(n.createElement(i)), r = xt.css(e, "display"), e.parentNode.removeChild(e), "none" === r && (r = "block"), te[i] = r, r)
        }

        function T(t, e) { for (var n, i, r = [], o = 0, s = t.length; o < s; o++) i = t[o], i.style && (n = i.style.display, e ? ("none" === n && (r[o] = Ut.get(i, "display") || null, r[o] || (i.style.display = "")), "" === i.style.display && Jt(i) && (r[o] = C(i))) : "none" !== n && (r[o] = "none", Ut.set(i, "display", n))); for (o = 0; o < s; o++) null != r[o] && (t[o].style.display = r[o]); return t }

        function E(t, e) { var n; return n = "undefined" != typeof t.getElementsByTagName ? t.getElementsByTagName(e || "*") : "undefined" != typeof t.querySelectorAll ? t.querySelectorAll(e || "*") : [], void 0 === e || e && u(t, e) ? xt.merge([t], n) : n }

        function x(t, e) { for (var n = 0, i = t.length; n < i; n++) Ut.set(t[n], "globalEval", !e || Ut.get(e[n], "globalEval")) }

        function k(t, e, n, i, r) {
            for (var o, s, l, u, c, d, f = e.createDocumentFragment(), h = [], p = 0, g = t.length; p < g; p++)
                if (o = t[p], o || 0 === o)
                    if ("object" === a(o)) xt.merge(h, o.nodeType ? [o] : o);
                    else if (oe.test(o)) {
                for (s = s || f.appendChild(e.createElement("div")), l = (ne.exec(o) || ["", ""])[1].toLowerCase(), u = re[l] || re._default, s.innerHTML = u[1] + xt.htmlPrefilter(o) + u[2], d = u[0]; d--;) s = s.lastChild;
                xt.merge(h, s.childNodes), s = f.firstChild, s.textContent = ""
            } else h.push(e.createTextNode(o));
            for (f.textContent = "", p = 0; o = h[p++];)
                if (i && xt.inArray(o, i) > -1) r && r.push(o);
                else if (c = xt.contains(o.ownerDocument, o), s = E(f.appendChild(o), "script"), c && x(s), n)
                for (d = 0; o = s[d++];) ie.test(o.type || "") && n.push(o);
            return f
        }

        function O() { return !0 }

        function I() { return !1 }

        function A() { try { return ct.activeElement } catch (t) {} }

        function P(t, e, n, i, r, o) {
            var s, a;
            if ("object" == typeof e) { "string" != typeof n && (i = i || n, n = void 0); for (a in e) P(t, a, n, i, e[a], o); return t }
            if (null == i && null == r ? (r = n, i = n = void 0) : null == r && ("string" == typeof n ? (r = i, i = void 0) : (r = i, i = n, n = void 0)), r === !1) r = I;
            else if (!r) return t;
            return 1 === o && (s = r, r = function(t) { return xt().off(t), s.apply(this, arguments) }, r.guid = s.guid || (s.guid = xt.guid++)), t.each(function() { xt.event.add(this, e, r, i, n) })
        }

        function D(t, e) { return u(t, "table") && u(11 !== e.nodeType ? e : e.firstChild, "tr") ? xt(t).children("tbody")[0] || t : t }

        function L(t) { return t.type = (null !== t.getAttribute("type")) + "/" + t.type, t }

        function N(t) { return "true/" === (t.type || "").slice(0, 5) ? t.type = t.type.slice(5) : t.removeAttribute("type"), t }

        function $(t, e) {
            var n, i, r, o, s, a, l, u;
            if (1 === e.nodeType) {
                if (Ut.hasData(t) && (o = Ut.access(t), s = Ut.set(e, o), u = o.events)) {
                    delete s.handle, s.events = {};
                    for (r in u)
                        for (n = 0, i = u[r].length; n < i; n++) xt.event.add(e, r, u[r][n])
                }
                Vt.hasData(t) && (a = Vt.access(t), l = xt.extend({}, a), Vt.set(e, l))
            }
        }

        function H(t, e) { var n = e.nodeName.toLowerCase(); "input" === n && ee.test(t.type) ? e.checked = t.checked : "input" !== n && "textarea" !== n || (e.defaultValue = t.defaultValue) }

        function M(t, e, n, i) {
            e = ht.apply([], e);
            var r, o, a, l, u, c, d = 0,
                f = t.length,
                h = f - 1,
                p = e[0],
                g = _t(p);
            if (g || f > 1 && "string" == typeof p && !St.checkClone && fe.test(p)) return t.each(function(r) {
                var o = t.eq(r);
                g && (e[0] = p.call(this, r, o.html())), M(o, e, n, i)
            });
            if (f && (r = k(e, t[0].ownerDocument, !1, t, i), o = r.firstChild, 1 === r.childNodes.length && (r = o), o || i)) {
                for (a = xt.map(E(r, "script"), L), l = a.length; d < f; d++) u = r, d !== h && (u = xt.clone(u, !0, !0), l && xt.merge(a, E(u, "script"))), n.call(t[d], u, d);
                if (l)
                    for (c = a[a.length - 1].ownerDocument, xt.map(a, N), d = 0; d < l; d++) u = a[d], ie.test(u.type || "") && !Ut.access(u, "globalEval") && xt.contains(c, u) && (u.src && "module" !== (u.type || "").toLowerCase() ? xt._evalUrl && xt._evalUrl(u.src) : s(u.textContent.replace(he, ""), c, u))
            }
            return t
        }

        function j(t, e, n) { for (var i, r = e ? xt.filter(e, t) : t, o = 0; null != (i = r[o]); o++) n || 1 !== i.nodeType || xt.cleanData(E(i)), i.parentNode && (n && xt.contains(i.ownerDocument, i) && x(E(i, "script")), i.parentNode.removeChild(i)); return t }

        function W(t, e, n) { var i, r, o, s, a = t.style; return n = n || ge(t), n && (s = n.getPropertyValue(e) || n[e], "" !== s || xt.contains(t.ownerDocument, t) || (s = xt.style(t, e)), !St.pixelBoxStyles() && pe.test(s) && me.test(e) && (i = a.width, r = a.minWidth, o = a.maxWidth, a.minWidth = a.maxWidth = a.width = s, s = n.width, a.width = i, a.minWidth = r, a.maxWidth = o)), void 0 !== s ? s + "" : s }

        function R(t, e) { return { get: function() { return t() ? void delete this.get : (this.get = e).apply(this, arguments) } } }

        function B(t) {
            if (t in _e) return t;
            for (var e = t[0].toUpperCase() + t.slice(1), n = Se.length; n--;)
                if (t = Se[n] + e, t in _e) return t
        }

        function z(t) { var e = xt.cssProps[t]; return e || (e = xt.cssProps[t] = B(t) || t), e }

        function F(t, e, n) { var i = Xt.exec(e); return i ? Math.max(0, i[2] - (n || 0)) + (i[3] || "px") : e }

        function q(t, e, n, i, r, o) {
            var s = "width" === e ? 1 : 0,
                a = 0,
                l = 0;
            if (n === (i ? "border" : "content")) return 0;
            for (; s < 4; s += 2) "margin" === n && (l += xt.css(t, n + Kt[s], !0, r)), i ? ("content" === n && (l -= xt.css(t, "padding" + Kt[s], !0, r)), "margin" !== n && (l -= xt.css(t, "border" + Kt[s] + "Width", !0, r))) : (l += xt.css(t, "padding" + Kt[s], !0, r), "padding" !== n ? l += xt.css(t, "border" + Kt[s] + "Width", !0, r) : a += xt.css(t, "border" + Kt[s] + "Width", !0, r));
            return !i && o >= 0 && (l += Math.max(0, Math.ceil(t["offset" + e[0].toUpperCase() + e.slice(1)] - o - l - a - .5))), l
        }

        function U(t, e, n) {
            var i = ge(t),
                r = W(t, e, i),
                o = "border-box" === xt.css(t, "boxSizing", !1, i),
                s = o;
            if (pe.test(r)) {
                if (!n) return r;
                r = "auto"
            }
            return s = s && (St.boxSizingReliable() || r === t.style[e]), ("auto" === r || !parseFloat(r) && "inline" === xt.css(t, "display", !1, i)) && (r = t["offset" + e[0].toUpperCase() + e.slice(1)], s = !0), r = parseFloat(r) || 0, r + q(t, e, n || (o ? "border" : "content"), s, i, r) + "px"
        }

        function V(t, e, n, i, r) { return new V.prototype.init(t, e, n, i, r) }

        function G() { Te && (ct.hidden === !1 && n.requestAnimationFrame ? n.requestAnimationFrame(G) : n.setTimeout(G, xt.fx.interval), xt.fx.tick()) }

        function Q() { return n.setTimeout(function() { Ce = void 0 }), Ce = Date.now() }

        function Y(t, e) {
            var n, i = 0,
                r = { height: t };
            for (e = e ? 1 : 0; i < 4; i += 2 - e) n = Kt[i], r["margin" + n] = r["padding" + n] = t;
            return e && (r.opacity = r.width = t), r
        }

        function X(t, e, n) {
            for (var i, r = (Z.tweeners[e] || []).concat(Z.tweeners["*"]), o = 0, s = r.length; o < s; o++)
                if (i = r[o].call(n, e, t)) return i
        }

        function K(t, e, n) {
            var i, r, o, s, a, l, u, c, d = "width" in e || "height" in e,
                f = this,
                h = {},
                p = t.style,
                g = t.nodeType && Jt(t),
                m = Ut.get(t, "fxshow");
            n.queue || (s = xt._queueHooks(t, "fx"), null == s.unqueued && (s.unqueued = 0, a = s.empty.fire, s.empty.fire = function() { s.unqueued || a() }), s.unqueued++, f.always(function() { f.always(function() { s.unqueued--, xt.queue(t, "fx").length || s.empty.fire() }) }));
            for (i in e)
                if (r = e[i], Ee.test(r)) {
                    if (delete e[i], o = o || "toggle" === r, r === (g ? "hide" : "show")) {
                        if ("show" !== r || !m || void 0 === m[i]) continue;
                        g = !0
                    }
                    h[i] = m && m[i] || xt.style(t, i)
                }
            if (l = !xt.isEmptyObject(e), l || !xt.isEmptyObject(h)) { d && 1 === t.nodeType && (n.overflow = [p.overflow, p.overflowX, p.overflowY], u = m && m.display, null == u && (u = Ut.get(t, "display")), c = xt.css(t, "display"), "none" === c && (u ? c = u : (T([t], !0), u = t.style.display || u, c = xt.css(t, "display"), T([t]))), ("inline" === c || "inline-block" === c && null != u) && "none" === xt.css(t, "float") && (l || (f.done(function() { p.display = u }), null == u && (c = p.display, u = "none" === c ? "" : c)), p.display = "inline-block")), n.overflow && (p.overflow = "hidden", f.always(function() { p.overflow = n.overflow[0], p.overflowX = n.overflow[1], p.overflowY = n.overflow[2] })), l = !1; for (i in h) l || (m ? "hidden" in m && (g = m.hidden) : m = Ut.access(t, "fxshow", { display: u }), o && (m.hidden = !g), g && T([t], !0), f.done(function() { g || T([t]), Ut.remove(t, "fxshow"); for (i in h) xt.style(t, i, h[i]) })), l = X(g ? m[i] : 0, i, f), i in m || (m[i] = l.start, g && (l.end = l.start, l.start = 0)) }
        }

        function J(t, e) {
            var n, i, r, o, s;
            for (n in t)
                if (i = y(n), r = e[i], o = t[n], Array.isArray(o) && (r = o[1], o = t[n] = o[0]), n !== i && (t[i] = o, delete t[n]), s = xt.cssHooks[i], s && "expand" in s) { o = s.expand(o), delete t[i]; for (n in o) n in t || (t[n] = o[n], e[n] = r) } else e[i] = r
        }

        function Z(t, e, n) {
            var i, r, o = 0,
                s = Z.prefilters.length,
                a = xt.Deferred().always(function() { delete l.elem }),
                l = function() { if (r) return !1; for (var e = Ce || Q(), n = Math.max(0, u.startTime + u.duration - e), i = n / u.duration || 0, o = 1 - i, s = 0, l = u.tweens.length; s < l; s++) u.tweens[s].run(o); return a.notifyWith(t, [u, o, n]), o < 1 && l ? n : (l || a.notifyWith(t, [u, 1, 0]), a.resolveWith(t, [u]), !1) },
                u = a.promise({
                    elem: t,
                    props: xt.extend({}, e),
                    opts: xt.extend(!0, { specialEasing: {}, easing: xt.easing._default }, n),
                    originalProperties: e,
                    originalOptions: n,
                    startTime: Ce || Q(),
                    duration: n.duration,
                    tweens: [],
                    createTween: function(e, n) { var i = xt.Tween(t, u.opts, e, n, u.opts.specialEasing[e] || u.opts.easing); return u.tweens.push(i), i },
                    stop: function(e) {
                        var n = 0,
                            i = e ? u.tweens.length : 0;
                        if (r) return this;
                        for (r = !0; n < i; n++) u.tweens[n].run(1);
                        return e ? (a.notifyWith(t, [u, 1, 0]), a.resolveWith(t, [u, e])) : a.rejectWith(t, [u, e]), this
                    }
                }),
                c = u.props;
            for (J(c, u.opts.specialEasing); o < s; o++)
                if (i = Z.prefilters[o].call(u, t, c, u.opts)) return _t(i.stop) && (xt._queueHooks(u.elem, u.opts.queue).stop = i.stop.bind(i)), i;
            return xt.map(c, X, u), _t(u.opts.start) && u.opts.start.call(t, u), u.progress(u.opts.progress).done(u.opts.done, u.opts.complete).fail(u.opts.fail).always(u.opts.always), xt.fx.timer(xt.extend(l, { elem: t, anim: u, queue: u.opts.queue })), u
        }

        function tt(t) { var e = t.match(jt) || []; return e.join(" ") }

        function et(t) { return t.getAttribute && t.getAttribute("class") || "" }

        function nt(t) { return Array.isArray(t) ? t : "string" == typeof t ? t.match(jt) || [] : [] }

        function it(t, e, n, i) {
            var r;
            if (Array.isArray(e)) xt.each(e, function(e, r) { n || Me.test(t) ? i(t, r) : it(t + "[" + ("object" == typeof r && null != r ? e : "") + "]", r, n, i) });
            else if (n || "object" !== a(e)) i(t, e);
            else
                for (r in e) it(t + "[" + r + "]", e[r], n, i)
        }

        function rt(t) {
            return function(e, n) {
                "string" != typeof e && (n = e, e = "*");
                var i, r = 0,
                    o = e.toLowerCase().match(jt) || [];
                if (_t(n))
                    for (; i = o[r++];) "+" === i[0] ? (i = i.slice(1) || "*", (t[i] = t[i] || []).unshift(n)) : (t[i] = t[i] || []).push(n)
            }
        }

        function ot(t, e, n, i) {
            function r(a) { var l; return o[a] = !0, xt.each(t[a] || [], function(t, a) { var u = a(e, n, i); return "string" != typeof u || s || o[u] ? s ? !(l = u) : void 0 : (e.dataTypes.unshift(u), r(u), !1) }), l }
            var o = {},
                s = t === Ye;
            return r(e.dataTypes[0]) || !o["*"] && r("*")
        }

        function st(t, e) { var n, i, r = xt.ajaxSettings.flatOptions || {}; for (n in e) void 0 !== e[n] && ((r[n] ? t : i || (i = {}))[n] = e[n]); return i && xt.extend(!0, t, i), t }

        function at(t, e, n) {
            for (var i, r, o, s, a = t.contents, l = t.dataTypes;
                "*" === l[0];) l.shift(), void 0 === i && (i = t.mimeType || e.getResponseHeader("Content-Type"));
            if (i)
                for (r in a)
                    if (a[r] && a[r].test(i)) { l.unshift(r); break }
            if (l[0] in n) o = l[0];
            else {
                for (r in n) {
                    if (!l[0] || t.converters[r + " " + l[0]]) { o = r; break }
                    s || (s = r)
                }
                o = o || s
            }
            if (o) return o !== l[0] && l.unshift(o), n[o]
        }

        function lt(t, e, n, i) {
            var r, o, s, a, l, u = {},
                c = t.dataTypes.slice();
            if (c[1])
                for (s in t.converters) u[s.toLowerCase()] = t.converters[s];
            for (o = c.shift(); o;)
                if (t.responseFields[o] && (n[t.responseFields[o]] = e), !l && i && t.dataFilter && (e = t.dataFilter(e, t.dataType)), l = o, o = c.shift())
                    if ("*" === o) o = l;
                    else if ("*" !== l && l !== o) {
                if (s = u[l + " " + o] || u["* " + o], !s)
                    for (r in u)
                        if (a = r.split(" "), a[1] === o && (s = u[l + " " + a[0]] || u["* " + a[0]])) { s === !0 ? s = u[r] : u[r] !== !0 && (o = a[0], c.unshift(a[1])); break }
                if (s !== !0)
                    if (s && t["throws"]) e = s(e);
                    else try { e = s(e) } catch (d) { return { state: "parsererror", error: s ? d : "No conversion from " + l + " to " + o } }
            }
            return { state: "success", data: e }
        }
        var ut = [],
            ct = n.document,
            dt = Object.getPrototypeOf,
            ft = ut.slice,
            ht = ut.concat,
            pt = ut.push,
            gt = ut.indexOf,
            mt = {},
            vt = mt.toString,
            yt = mt.hasOwnProperty,
            bt = yt.toString,
            wt = bt.call(Object),
            St = {},
            _t = function(t) { return "function" == typeof t && "number" != typeof t.nodeType },
            Ct = function(t) { return null != t && t === t.window },
            Tt = { type: !0, src: !0, noModule: !0 },
            Et = "3.3.1",
            xt = function(t, e) { return new xt.fn.init(t, e) },
            kt = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
        xt.fn = xt.prototype = {
            jquery: Et,
            constructor: xt,
            length: 0,
            toArray: function() { return ft.call(this) },
            get: function(t) { return null == t ? ft.call(this) : t < 0 ? this[t + this.length] : this[t] },
            pushStack: function(t) { var e = xt.merge(this.constructor(), t); return e.prevObject = this, e },
            each: function(t) { return xt.each(this, t) },
            map: function(t) { return this.pushStack(xt.map(this, function(e, n) { return t.call(e, n, e) })) },
            slice: function() { return this.pushStack(ft.apply(this, arguments)) },
            first: function() { return this.eq(0) },
            last: function() { return this.eq(-1) },
            eq: function(t) {
                var e = this.length,
                    n = +t + (t < 0 ? e : 0);
                return this.pushStack(n >= 0 && n < e ? [this[n]] : [])
            },
            end: function() { return this.prevObject || this.constructor() },
            push: pt,
            sort: ut.sort,
            splice: ut.splice
        }, xt.extend = xt.fn.extend = function() {
            var t, e, n, i, r, o, s = arguments[0] || {},
                a = 1,
                l = arguments.length,
                u = !1;
            for ("boolean" == typeof s && (u = s, s = arguments[a] || {}, a++), "object" == typeof s || _t(s) || (s = {}), a === l && (s = this, a--); a < l; a++)
                if (null != (t = arguments[a]))
                    for (e in t) n = s[e], i = t[e], s !== i && (u && i && (xt.isPlainObject(i) || (r = Array.isArray(i))) ? (r ? (r = !1, o = n && Array.isArray(n) ? n : []) : o = n && xt.isPlainObject(n) ? n : {}, s[e] = xt.extend(u, o, i)) : void 0 !== i && (s[e] = i));
            return s
        }, xt.extend({
            expando: "jQuery" + (Et + Math.random()).replace(/\D/g, ""),
            isReady: !0,
            error: function(t) { throw new Error(t) },
            noop: function() {},
            isPlainObject: function(t) { var e, n; return !(!t || "[object Object]" !== vt.call(t)) && (!(e = dt(t)) || (n = yt.call(e, "constructor") && e.constructor, "function" == typeof n && bt.call(n) === wt)) },
            isEmptyObject: function(t) { var e; for (e in t) return !1; return !0 },
            globalEval: function(t) { s(t) },
            each: function(t, e) {
                var n, i = 0;
                if (l(t))
                    for (n = t.length; i < n && e.call(t[i], i, t[i]) !== !1; i++);
                else
                    for (i in t)
                        if (e.call(t[i], i, t[i]) === !1) break; return t
            },
            trim: function(t) { return null == t ? "" : (t + "").replace(kt, "") },
            makeArray: function(t, e) { var n = e || []; return null != t && (l(Object(t)) ? xt.merge(n, "string" == typeof t ? [t] : t) : pt.call(n, t)), n },
            inArray: function(t, e, n) { return null == e ? -1 : gt.call(e, t, n) },
            merge: function(t, e) { for (var n = +e.length, i = 0, r = t.length; i < n; i++) t[r++] = e[i]; return t.length = r, t },
            grep: function(t, e, n) { for (var i, r = [], o = 0, s = t.length, a = !n; o < s; o++) i = !e(t[o], o), i !== a && r.push(t[o]); return r },
            map: function(t, e, n) {
                var i, r, o = 0,
                    s = [];
                if (l(t))
                    for (i = t.length; o < i; o++) r = e(t[o], o, n), null != r && s.push(r);
                else
                    for (o in t) r = e(t[o], o, n), null != r && s.push(r);
                return ht.apply([], s)
            },
            guid: 1,
            support: St
        }), "function" == typeof Symbol && (xt.fn[Symbol.iterator] = ut[Symbol.iterator]), xt.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(t, e) { mt["[object " + e + "]"] = e.toLowerCase() });
        var Ot = function(t) {
            function e(t, e, n, i) {
                var r, o, s, a, l, u, c, f = e && e.ownerDocument,
                    p = e ? e.nodeType : 9;
                if (n = n || [], "string" != typeof t || !t || 1 !== p && 9 !== p && 11 !== p) return n;
                if (!i && ((e ? e.ownerDocument || e : B) !== L && D(e), e = e || L, $)) {
                    if (11 !== p && (l = vt.exec(t)))
                        if (r = l[1]) { if (9 === p) { if (!(s = e.getElementById(r))) return n; if (s.id === r) return n.push(s), n } else if (f && (s = f.getElementById(r)) && W(e, s) && s.id === r) return n.push(s), n } else { if (l[2]) return J.apply(n, e.getElementsByTagName(t)), n; if ((r = l[3]) && _.getElementsByClassName && e.getElementsByClassName) return J.apply(n, e.getElementsByClassName(r)), n }
                    if (_.qsa && !V[t + " "] && (!H || !H.test(t))) {
                        if (1 !== p) f = e, c = t;
                        else if ("object" !== e.nodeName.toLowerCase()) {
                            for ((a = e.getAttribute("id")) ? a = a.replace(St, _t) : e.setAttribute("id", a = R), u = x(t), o = u.length; o--;) u[o] = "#" + a + " " + h(u[o]);
                            c = u.join(","), f = yt.test(t) && d(e.parentNode) || e
                        }
                        if (c) try { return J.apply(n, f.querySelectorAll(c)), n } catch (g) {} finally { a === R && e.removeAttribute("id") }
                    }
                }
                return O(t.replace(at, "$1"), e, n, i)
            }

            function n() {
                function t(n, i) { return e.push(n + " ") > C.cacheLength && delete t[e.shift()], t[n + " "] = i }
                var e = [];
                return t
            }

            function i(t) { return t[R] = !0, t }

            function r(t) { var e = L.createElement("fieldset"); try { return !!t(e) } catch (n) { return !1 } finally { e.parentNode && e.parentNode.removeChild(e), e = null } }

            function o(t, e) { for (var n = t.split("|"), i = n.length; i--;) C.attrHandle[n[i]] = e }

            function s(t, e) {
                var n = e && t,
                    i = n && 1 === t.nodeType && 1 === e.nodeType && t.sourceIndex - e.sourceIndex;
                if (i) return i;
                if (n)
                    for (; n = n.nextSibling;)
                        if (n === e) return -1;
                return t ? 1 : -1
            }

            function a(t) { return function(e) { var n = e.nodeName.toLowerCase(); return "input" === n && e.type === t } }

            function l(t) { return function(e) { var n = e.nodeName.toLowerCase(); return ("input" === n || "button" === n) && e.type === t } }

            function u(t) { return function(e) { return "form" in e ? e.parentNode && e.disabled === !1 ? "label" in e ? "label" in e.parentNode ? e.parentNode.disabled === t : e.disabled === t : e.isDisabled === t || e.isDisabled !== !t && Tt(e) === t : e.disabled === t : "label" in e && e.disabled === t } }

            function c(t) { return i(function(e) { return e = +e, i(function(n, i) { for (var r, o = t([], n.length, e), s = o.length; s--;) n[r = o[s]] && (n[r] = !(i[r] = n[r])) }) }) }

            function d(t) { return t && "undefined" != typeof t.getElementsByTagName && t }

            function f() {}

            function h(t) { for (var e = 0, n = t.length, i = ""; e < n; e++) i += t[e].value; return i }

            function p(t, e, n) {
                var i = e.dir,
                    r = e.next,
                    o = r || i,
                    s = n && "parentNode" === o,
                    a = F++;
                return e.first ? function(e, n, r) {
                    for (; e = e[i];)
                        if (1 === e.nodeType || s) return t(e, n, r);
                    return !1
                } : function(e, n, l) {
                    var u, c, d, f = [z, a];
                    if (l) {
                        for (; e = e[i];)
                            if ((1 === e.nodeType || s) && t(e, n, l)) return !0
                    } else
                        for (; e = e[i];)
                            if (1 === e.nodeType || s)
                                if (d = e[R] || (e[R] = {}), c = d[e.uniqueID] || (d[e.uniqueID] = {}), r && r === e.nodeName.toLowerCase()) e = e[i] || e;
                                else { if ((u = c[o]) && u[0] === z && u[1] === a) return f[2] = u[2]; if (c[o] = f, f[2] = t(e, n, l)) return !0 } return !1
                }
            }

            function g(t) {
                return t.length > 1 ? function(e, n, i) {
                    for (var r = t.length; r--;)
                        if (!t[r](e, n, i)) return !1;
                    return !0
                } : t[0]
            }

            function m(t, n, i) { for (var r = 0, o = n.length; r < o; r++) e(t, n[r], i); return i }

            function v(t, e, n, i, r) { for (var o, s = [], a = 0, l = t.length, u = null != e; a < l; a++)(o = t[a]) && (n && !n(o, i, r) || (s.push(o), u && e.push(a))); return s }

            function y(t, e, n, r, o, s) {
                return r && !r[R] && (r = y(r)), o && !o[R] && (o = y(o, s)), i(function(i, s, a, l) {
                    var u, c, d, f = [],
                        h = [],
                        p = s.length,
                        g = i || m(e || "*", a.nodeType ? [a] : a, []),
                        y = !t || !i && e ? g : v(g, f, t, a, l),
                        b = n ? o || (i ? t : p || r) ? [] : s : y;
                    if (n && n(y, b, a, l), r)
                        for (u = v(b, h), r(u, [], a, l), c = u.length; c--;)(d = u[c]) && (b[h[c]] = !(y[h[c]] = d));
                    if (i) {
                        if (o || t) {
                            if (o) {
                                for (u = [], c = b.length; c--;)(d = b[c]) && u.push(y[c] = d);
                                o(null, b = [], u, l)
                            }
                            for (c = b.length; c--;)(d = b[c]) && (u = o ? tt(i, d) : f[c]) > -1 && (i[u] = !(s[u] = d))
                        }
                    } else b = v(b === s ? b.splice(p, b.length) : b), o ? o(null, s, b, l) : J.apply(s, b)
                })
            }

            function b(t) {
                for (var e, n, i, r = t.length, o = C.relative[t[0].type], s = o || C.relative[" "], a = o ? 1 : 0, l = p(function(t) { return t === e }, s, !0), u = p(function(t) { return tt(e, t) > -1 }, s, !0), c = [function(t, n, i) { var r = !o && (i || n !== I) || ((e = n).nodeType ? l(t, n, i) : u(t, n, i)); return e = null, r }]; a < r; a++)
                    if (n = C.relative[t[a].type]) c = [p(g(c), n)];
                    else {
                        if (n = C.filter[t[a].type].apply(null, t[a].matches), n[R]) { for (i = ++a; i < r && !C.relative[t[i].type]; i++); return y(a > 1 && g(c), a > 1 && h(t.slice(0, a - 1).concat({ value: " " === t[a - 2].type ? "*" : "" })).replace(at, "$1"), n, a < i && b(t.slice(a, i)), i < r && b(t = t.slice(i)), i < r && h(t)) }
                        c.push(n)
                    }
                return g(c)
            }

            function w(t, n) {
                var r = n.length > 0,
                    o = t.length > 0,
                    s = function(i, s, a, l, u) {
                        var c, d, f, h = 0,
                            p = "0",
                            g = i && [],
                            m = [],
                            y = I,
                            b = i || o && C.find.TAG("*", u),
                            w = z += null == y ? 1 : Math.random() || .1,
                            S = b.length;
                        for (u && (I = s === L || s || u); p !== S && null != (c = b[p]); p++) {
                            if (o && c) {
                                for (d = 0, s || c.ownerDocument === L || (D(c), a = !$); f = t[d++];)
                                    if (f(c, s || L, a)) { l.push(c); break }
                                u && (z = w)
                            }
                            r && ((c = !f && c) && h--, i && g.push(c))
                        }
                        if (h += p, r && p !== h) {
                            for (d = 0; f = n[d++];) f(g, m, s, a);
                            if (i) {
                                if (h > 0)
                                    for (; p--;) g[p] || m[p] || (m[p] = X.call(l));
                                m = v(m)
                            }
                            J.apply(l, m), u && !i && m.length > 0 && h + n.length > 1 && e.uniqueSort(l)
                        }
                        return u && (z = w, I = y), g
                    };
                return r ? i(s) : s
            }
            var S, _, C, T, E, x, k, O, I, A, P, D, L, N, $, H, M, j, W, R = "sizzle" + 1 * new Date,
                B = t.document,
                z = 0,
                F = 0,
                q = n(),
                U = n(),
                V = n(),
                G = function(t, e) { return t === e && (P = !0), 0 },
                Q = {}.hasOwnProperty,
                Y = [],
                X = Y.pop,
                K = Y.push,
                J = Y.push,
                Z = Y.slice,
                tt = function(t, e) {
                    for (var n = 0, i = t.length; n < i; n++)
                        if (t[n] === e) return n;
                    return -1
                },
                et = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
                nt = "[\\x20\\t\\r\\n\\f]",
                it = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",
                rt = "\\[" + nt + "*(" + it + ")(?:" + nt + "*([*^$|!~]?=)" + nt + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + it + "))|)" + nt + "*\\]",
                ot = ":(" + it + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + rt + ")*)|.*)\\)|)",
                st = new RegExp(nt + "+", "g"),
                at = new RegExp("^" + nt + "+|((?:^|[^\\\\])(?:\\\\.)*)" + nt + "+$", "g"),
                lt = new RegExp("^" + nt + "*," + nt + "*"),
                ut = new RegExp("^" + nt + "*([>+~]|" + nt + ")" + nt + "*"),
                ct = new RegExp("=" + nt + "*([^\\]'\"]*?)" + nt + "*\\]", "g"),
                dt = new RegExp(ot),
                ft = new RegExp("^" + it + "$"),
                ht = { ID: new RegExp("^#(" + it + ")"), CLASS: new RegExp("^\\.(" + it + ")"), TAG: new RegExp("^(" + it + "|[*])"), ATTR: new RegExp("^" + rt), PSEUDO: new RegExp("^" + ot), CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + nt + "*(even|odd|(([+-]|)(\\d*)n|)" + nt + "*(?:([+-]|)" + nt + "*(\\d+)|))" + nt + "*\\)|)", "i"), bool: new RegExp("^(?:" + et + ")$", "i"), needsContext: new RegExp("^" + nt + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + nt + "*((?:-\\d)?\\d*)" + nt + "*\\)|)(?=[^-]|$)", "i") },
                pt = /^(?:input|select|textarea|button)$/i,
                gt = /^h\d$/i,
                mt = /^[^{]+\{\s*\[native \w/,
                vt = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
                yt = /[+~]/,
                bt = new RegExp("\\\\([\\da-f]{1,6}" + nt + "?|(" + nt + ")|.)", "ig"),
                wt = function(t, e, n) { var i = "0x" + e - 65536; return i !== i || n ? e : i < 0 ? String.fromCharCode(i + 65536) : String.fromCharCode(i >> 10 | 55296, 1023 & i | 56320) },
                St = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
                _t = function(t, e) { return e ? "\0" === t ? "�" : t.slice(0, -1) + "\\" + t.charCodeAt(t.length - 1).toString(16) + " " : "\\" + t },
                Ct = function() { D() },
                Tt = p(function(t) { return t.disabled === !0 && ("form" in t || "label" in t) }, { dir: "parentNode", next: "legend" });
            try { J.apply(Y = Z.call(B.childNodes), B.childNodes), Y[B.childNodes.length].nodeType } catch (Et) {
                J = {
                    apply: Y.length ? function(t, e) { K.apply(t, Z.call(e)) } : function(t, e) {
                        for (var n = t.length, i = 0; t[n++] = e[i++];);
                        t.length = n - 1
                    }
                }
            }
            _ = e.support = {}, E = e.isXML = function(t) { var e = t && (t.ownerDocument || t).documentElement; return !!e && "HTML" !== e.nodeName }, D = e.setDocument = function(t) {
                var e, n, i = t ? t.ownerDocument || t : B;
                return i !== L && 9 === i.nodeType && i.documentElement ? (L = i, N = L.documentElement, $ = !E(L), B !== L && (n = L.defaultView) && n.top !== n && (n.addEventListener ? n.addEventListener("unload", Ct, !1) : n.attachEvent && n.attachEvent("onunload", Ct)), _.attributes = r(function(t) { return t.className = "i", !t.getAttribute("className") }), _.getElementsByTagName = r(function(t) { return t.appendChild(L.createComment("")), !t.getElementsByTagName("*").length }), _.getElementsByClassName = mt.test(L.getElementsByClassName), _.getById = r(function(t) { return N.appendChild(t).id = R, !L.getElementsByName || !L.getElementsByName(R).length }), _.getById ? (C.filter.ID = function(t) { var e = t.replace(bt, wt); return function(t) { return t.getAttribute("id") === e } }, C.find.ID = function(t, e) { if ("undefined" != typeof e.getElementById && $) { var n = e.getElementById(t); return n ? [n] : [] } }) : (C.filter.ID = function(t) { var e = t.replace(bt, wt); return function(t) { var n = "undefined" != typeof t.getAttributeNode && t.getAttributeNode("id"); return n && n.value === e } }, C.find.ID = function(t, e) {
                    if ("undefined" != typeof e.getElementById && $) {
                        var n, i, r, o = e.getElementById(t);
                        if (o) {
                            if (n = o.getAttributeNode("id"), n && n.value === t) return [o];
                            for (r = e.getElementsByName(t), i = 0; o = r[i++];)
                                if (n = o.getAttributeNode("id"), n && n.value === t) return [o]
                        }
                        return []
                    }
                }), C.find.TAG = _.getElementsByTagName ? function(t, e) { return "undefined" != typeof e.getElementsByTagName ? e.getElementsByTagName(t) : _.qsa ? e.querySelectorAll(t) : void 0 } : function(t, e) {
                    var n, i = [],
                        r = 0,
                        o = e.getElementsByTagName(t);
                    if ("*" === t) { for (; n = o[r++];) 1 === n.nodeType && i.push(n); return i }
                    return o
                }, C.find.CLASS = _.getElementsByClassName && function(t, e) { if ("undefined" != typeof e.getElementsByClassName && $) return e.getElementsByClassName(t) }, M = [], H = [], (_.qsa = mt.test(L.querySelectorAll)) && (r(function(t) { N.appendChild(t).innerHTML = "<a id='" + R + "'></a><select id='" + R + "-\r\\' msallowcapture=''><option selected=''></option></select>", t.querySelectorAll("[msallowcapture^='']").length && H.push("[*^$]=" + nt + "*(?:''|\"\")"), t.querySelectorAll("[selected]").length || H.push("\\[" + nt + "*(?:value|" + et + ")"), t.querySelectorAll("[id~=" + R + "-]").length || H.push("~="), t.querySelectorAll(":checked").length || H.push(":checked"), t.querySelectorAll("a#" + R + "+*").length || H.push(".#.+[+~]") }), r(function(t) {
                    t.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                    var e = L.createElement("input");
                    e.setAttribute("type", "hidden"), t.appendChild(e).setAttribute("name", "D"), t.querySelectorAll("[name=d]").length && H.push("name" + nt + "*[*^$|!~]?="), 2 !== t.querySelectorAll(":enabled").length && H.push(":enabled", ":disabled"), N.appendChild(t).disabled = !0, 2 !== t.querySelectorAll(":disabled").length && H.push(":enabled", ":disabled"), t.querySelectorAll("*,:x"), H.push(",.*:")
                })), (_.matchesSelector = mt.test(j = N.matches || N.webkitMatchesSelector || N.mozMatchesSelector || N.oMatchesSelector || N.msMatchesSelector)) && r(function(t) { _.disconnectedMatch = j.call(t, "*"), j.call(t, "[s!='']:x"), M.push("!=", ot) }), H = H.length && new RegExp(H.join("|")), M = M.length && new RegExp(M.join("|")), e = mt.test(N.compareDocumentPosition), W = e || mt.test(N.contains) ? function(t, e) {
                    var n = 9 === t.nodeType ? t.documentElement : t,
                        i = e && e.parentNode;
                    return t === i || !(!i || 1 !== i.nodeType || !(n.contains ? n.contains(i) : t.compareDocumentPosition && 16 & t.compareDocumentPosition(i)))
                } : function(t, e) {
                    if (e)
                        for (; e = e.parentNode;)
                            if (e === t) return !0;
                    return !1
                }, G = e ? function(t, e) { if (t === e) return P = !0, 0; var n = !t.compareDocumentPosition - !e.compareDocumentPosition; return n ? n : (n = (t.ownerDocument || t) === (e.ownerDocument || e) ? t.compareDocumentPosition(e) : 1, 1 & n || !_.sortDetached && e.compareDocumentPosition(t) === n ? t === L || t.ownerDocument === B && W(B, t) ? -1 : e === L || e.ownerDocument === B && W(B, e) ? 1 : A ? tt(A, t) - tt(A, e) : 0 : 4 & n ? -1 : 1) } : function(t, e) {
                    if (t === e) return P = !0, 0;
                    var n, i = 0,
                        r = t.parentNode,
                        o = e.parentNode,
                        a = [t],
                        l = [e];
                    if (!r || !o) return t === L ? -1 : e === L ? 1 : r ? -1 : o ? 1 : A ? tt(A, t) - tt(A, e) : 0;
                    if (r === o) return s(t, e);
                    for (n = t; n = n.parentNode;) a.unshift(n);
                    for (n = e; n = n.parentNode;) l.unshift(n);
                    for (; a[i] === l[i];) i++;
                    return i ? s(a[i], l[i]) : a[i] === B ? -1 : l[i] === B ? 1 : 0
                }, L) : L
            }, e.matches = function(t, n) { return e(t, null, null, n) }, e.matchesSelector = function(t, n) {
                if ((t.ownerDocument || t) !== L && D(t), n = n.replace(ct, "='$1']"), _.matchesSelector && $ && !V[n + " "] && (!M || !M.test(n)) && (!H || !H.test(n))) try { var i = j.call(t, n); if (i || _.disconnectedMatch || t.document && 11 !== t.document.nodeType) return i } catch (r) {}
                return e(n, L, null, [t]).length > 0
            }, e.contains = function(t, e) { return (t.ownerDocument || t) !== L && D(t), W(t, e) }, e.attr = function(t, e) {
                (t.ownerDocument || t) !== L && D(t);
                var n = C.attrHandle[e.toLowerCase()],
                    i = n && Q.call(C.attrHandle, e.toLowerCase()) ? n(t, e, !$) : void 0;
                return void 0 !== i ? i : _.attributes || !$ ? t.getAttribute(e) : (i = t.getAttributeNode(e)) && i.specified ? i.value : null
            }, e.escape = function(t) { return (t + "").replace(St, _t) }, e.error = function(t) { throw new Error("Syntax error, unrecognized expression: " + t) }, e.uniqueSort = function(t) {
                var e, n = [],
                    i = 0,
                    r = 0;
                if (P = !_.detectDuplicates, A = !_.sortStable && t.slice(0), t.sort(G), P) { for (; e = t[r++];) e === t[r] && (i = n.push(r)); for (; i--;) t.splice(n[i], 1) }
                return A = null, t
            }, T = e.getText = function(t) {
                var e, n = "",
                    i = 0,
                    r = t.nodeType;
                if (r) { if (1 === r || 9 === r || 11 === r) { if ("string" == typeof t.textContent) return t.textContent; for (t = t.firstChild; t; t = t.nextSibling) n += T(t) } else if (3 === r || 4 === r) return t.nodeValue } else
                    for (; e = t[i++];) n += T(e);
                return n
            }, C = e.selectors = {
                cacheLength: 50,
                createPseudo: i,
                match: ht,
                attrHandle: {},
                find: {},
                relative: { ">": { dir: "parentNode", first: !0 }, " ": { dir: "parentNode" }, "+": { dir: "previousSibling", first: !0 }, "~": { dir: "previousSibling" } },
                preFilter: { ATTR: function(t) { return t[1] = t[1].replace(bt, wt), t[3] = (t[3] || t[4] || t[5] || "").replace(bt, wt), "~=" === t[2] && (t[3] = " " + t[3] + " "), t.slice(0, 4) }, CHILD: function(t) { return t[1] = t[1].toLowerCase(), "nth" === t[1].slice(0, 3) ? (t[3] || e.error(t[0]), t[4] = +(t[4] ? t[5] + (t[6] || 1) : 2 * ("even" === t[3] || "odd" === t[3])), t[5] = +(t[7] + t[8] || "odd" === t[3])) : t[3] && e.error(t[0]), t }, PSEUDO: function(t) { var e, n = !t[6] && t[2]; return ht.CHILD.test(t[0]) ? null : (t[3] ? t[2] = t[4] || t[5] || "" : n && dt.test(n) && (e = x(n, !0)) && (e = n.indexOf(")", n.length - e) - n.length) && (t[0] = t[0].slice(0, e), t[2] = n.slice(0, e)), t.slice(0, 3)) } },
                filter: {
                    TAG: function(t) { var e = t.replace(bt, wt).toLowerCase(); return "*" === t ? function() { return !0 } : function(t) { return t.nodeName && t.nodeName.toLowerCase() === e } },
                    CLASS: function(t) { var e = q[t + " "]; return e || (e = new RegExp("(^|" + nt + ")" + t + "(" + nt + "|$)")) && q(t, function(t) { return e.test("string" == typeof t.className && t.className || "undefined" != typeof t.getAttribute && t.getAttribute("class") || "") }) },
                    ATTR: function(t, n, i) { return function(r) { var o = e.attr(r, t); return null == o ? "!=" === n : !n || (o += "", "=" === n ? o === i : "!=" === n ? o !== i : "^=" === n ? i && 0 === o.indexOf(i) : "*=" === n ? i && o.indexOf(i) > -1 : "$=" === n ? i && o.slice(-i.length) === i : "~=" === n ? (" " + o.replace(st, " ") + " ").indexOf(i) > -1 : "|=" === n && (o === i || o.slice(0, i.length + 1) === i + "-")) } },
                    CHILD: function(t, e, n, i, r) {
                        var o = "nth" !== t.slice(0, 3),
                            s = "last" !== t.slice(-4),
                            a = "of-type" === e;
                        return 1 === i && 0 === r ? function(t) { return !!t.parentNode } : function(e, n, l) {
                            var u, c, d, f, h, p, g = o !== s ? "nextSibling" : "previousSibling",
                                m = e.parentNode,
                                v = a && e.nodeName.toLowerCase(),
                                y = !l && !a,
                                b = !1;
                            if (m) {
                                if (o) {
                                    for (; g;) {
                                        for (f = e; f = f[g];)
                                            if (a ? f.nodeName.toLowerCase() === v : 1 === f.nodeType) return !1;
                                        p = g = "only" === t && !p && "nextSibling"
                                    }
                                    return !0
                                }
                                if (p = [s ? m.firstChild : m.lastChild], s && y) {
                                    for (f = m, d = f[R] || (f[R] = {}), c = d[f.uniqueID] || (d[f.uniqueID] = {}), u = c[t] || [], h = u[0] === z && u[1], b = h && u[2], f = h && m.childNodes[h]; f = ++h && f && f[g] || (b = h = 0) || p.pop();)
                                        if (1 === f.nodeType && ++b && f === e) { c[t] = [z, h, b]; break }
                                } else if (y && (f = e, d = f[R] || (f[R] = {}), c = d[f.uniqueID] || (d[f.uniqueID] = {}), u = c[t] || [], h = u[0] === z && u[1], b = h), b === !1)
                                    for (;
                                        (f = ++h && f && f[g] || (b = h = 0) || p.pop()) && ((a ? f.nodeName.toLowerCase() !== v : 1 !== f.nodeType) || !++b || (y && (d = f[R] || (f[R] = {}), c = d[f.uniqueID] || (d[f.uniqueID] = {}), c[t] = [z, b]), f !== e)););
                                return b -= r, b === i || b % i === 0 && b / i >= 0
                            }
                        }
                    },
                    PSEUDO: function(t, n) { var r, o = C.pseudos[t] || C.setFilters[t.toLowerCase()] || e.error("unsupported pseudo: " + t); return o[R] ? o(n) : o.length > 1 ? (r = [t, t, "", n], C.setFilters.hasOwnProperty(t.toLowerCase()) ? i(function(t, e) { for (var i, r = o(t, n), s = r.length; s--;) i = tt(t, r[s]), t[i] = !(e[i] = r[s]) }) : function(t) { return o(t, 0, r) }) : o }
                },
                pseudos: {
                    not: i(function(t) {
                        var e = [],
                            n = [],
                            r = k(t.replace(at, "$1"));
                        return r[R] ? i(function(t, e, n, i) { for (var o, s = r(t, null, i, []), a = t.length; a--;)(o = s[a]) && (t[a] = !(e[a] = o)) }) : function(t, i, o) { return e[0] = t, r(e, null, o, n), e[0] = null, !n.pop() }
                    }),
                    has: i(function(t) { return function(n) { return e(t, n).length > 0 } }),
                    contains: i(function(t) {
                        return t = t.replace(bt, wt),
                            function(e) { return (e.textContent || e.innerText || T(e)).indexOf(t) > -1 }
                    }),
                    lang: i(function(t) {
                        return ft.test(t || "") || e.error("unsupported lang: " + t), t = t.replace(bt, wt).toLowerCase(),
                            function(e) {
                                var n;
                                do
                                    if (n = $ ? e.lang : e.getAttribute("xml:lang") || e.getAttribute("lang")) return n = n.toLowerCase(), n === t || 0 === n.indexOf(t + "-");
                                while ((e = e.parentNode) && 1 === e.nodeType);
                                return !1
                            }
                    }),
                    target: function(e) { var n = t.location && t.location.hash; return n && n.slice(1) === e.id },
                    root: function(t) { return t === N },
                    focus: function(t) { return t === L.activeElement && (!L.hasFocus || L.hasFocus()) && !!(t.type || t.href || ~t.tabIndex) },
                    enabled: u(!1),
                    disabled: u(!0),
                    checked: function(t) { var e = t.nodeName.toLowerCase(); return "input" === e && !!t.checked || "option" === e && !!t.selected },
                    selected: function(t) { return t.parentNode && t.parentNode.selectedIndex, t.selected === !0 },
                    empty: function(t) {
                        for (t = t.firstChild; t; t = t.nextSibling)
                            if (t.nodeType < 6) return !1;
                        return !0
                    },
                    parent: function(t) { return !C.pseudos.empty(t) },
                    header: function(t) { return gt.test(t.nodeName) },
                    input: function(t) { return pt.test(t.nodeName) },
                    button: function(t) { var e = t.nodeName.toLowerCase(); return "input" === e && "button" === t.type || "button" === e },
                    text: function(t) { var e; return "input" === t.nodeName.toLowerCase() && "text" === t.type && (null == (e = t.getAttribute("type")) || "text" === e.toLowerCase()) },
                    first: c(function() { return [0] }),
                    last: c(function(t, e) { return [e - 1] }),
                    eq: c(function(t, e, n) { return [n < 0 ? n + e : n] }),
                    even: c(function(t, e) { for (var n = 0; n < e; n += 2) t.push(n); return t }),
                    odd: c(function(t, e) { for (var n = 1; n < e; n += 2) t.push(n); return t }),
                    lt: c(function(t, e, n) { for (var i = n < 0 ? n + e : n; --i >= 0;) t.push(i); return t }),
                    gt: c(function(t, e, n) { for (var i = n < 0 ? n + e : n; ++i < e;) t.push(i); return t })
                }
            }, C.pseudos.nth = C.pseudos.eq;
            for (S in { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 }) C.pseudos[S] = a(S);
            for (S in { submit: !0, reset: !0 }) C.pseudos[S] = l(S);
            return f.prototype = C.filters = C.pseudos, C.setFilters = new f, x = e.tokenize = function(t, n) { var i, r, o, s, a, l, u, c = U[t + " "]; if (c) return n ? 0 : c.slice(0); for (a = t, l = [], u = C.preFilter; a;) { i && !(r = lt.exec(a)) || (r && (a = a.slice(r[0].length) || a), l.push(o = [])), i = !1, (r = ut.exec(a)) && (i = r.shift(), o.push({ value: i, type: r[0].replace(at, " ") }), a = a.slice(i.length)); for (s in C.filter) !(r = ht[s].exec(a)) || u[s] && !(r = u[s](r)) || (i = r.shift(), o.push({ value: i, type: s, matches: r }), a = a.slice(i.length)); if (!i) break } return n ? a.length : a ? e.error(t) : U(t, l).slice(0) }, k = e.compile = function(t, e) {
                var n, i = [],
                    r = [],
                    o = V[t + " "];
                if (!o) {
                    for (e || (e = x(t)), n = e.length; n--;) o = b(e[n]), o[R] ? i.push(o) : r.push(o);
                    o = V(t, w(r, i)), o.selector = t
                }
                return o
            }, O = e.select = function(t, e, n, i) {
                var r, o, s, a, l, u = "function" == typeof t && t,
                    c = !i && x(t = u.selector || t);
                if (n = n || [], 1 === c.length) {
                    if (o = c[0] = c[0].slice(0), o.length > 2 && "ID" === (s = o[0]).type && 9 === e.nodeType && $ && C.relative[o[1].type]) {
                        if (e = (C.find.ID(s.matches[0].replace(bt, wt), e) || [])[0], !e) return n;
                        u && (e = e.parentNode), t = t.slice(o.shift().value.length)
                    }
                    for (r = ht.needsContext.test(t) ? 0 : o.length; r-- && (s = o[r], !C.relative[a = s.type]);)
                        if ((l = C.find[a]) && (i = l(s.matches[0].replace(bt, wt), yt.test(o[0].type) && d(e.parentNode) || e))) { if (o.splice(r, 1), t = i.length && h(o), !t) return J.apply(n, i), n; break }
                }
                return (u || k(t, c))(i, e, !$, n, !e || yt.test(t) && d(e.parentNode) || e), n
            }, _.sortStable = R.split("").sort(G).join("") === R, _.detectDuplicates = !!P, D(), _.sortDetached = r(function(t) { return 1 & t.compareDocumentPosition(L.createElement("fieldset")) }), r(function(t) { return t.innerHTML = "<a href='#'></a>", "#" === t.firstChild.getAttribute("href") }) || o("type|href|height|width", function(t, e, n) { if (!n) return t.getAttribute(e, "type" === e.toLowerCase() ? 1 : 2) }), _.attributes && r(function(t) { return t.innerHTML = "<input/>", t.firstChild.setAttribute("value", ""), "" === t.firstChild.getAttribute("value") }) || o("value", function(t, e, n) { if (!n && "input" === t.nodeName.toLowerCase()) return t.defaultValue }), r(function(t) { return null == t.getAttribute("disabled") }) || o(et, function(t, e, n) { var i; if (!n) return t[e] === !0 ? e.toLowerCase() : (i = t.getAttributeNode(e)) && i.specified ? i.value : null }), e
        }(n);
        xt.find = Ot, xt.expr = Ot.selectors, xt.expr[":"] = xt.expr.pseudos, xt.uniqueSort = xt.unique = Ot.uniqueSort, xt.text = Ot.getText, xt.isXMLDoc = Ot.isXML, xt.contains = Ot.contains, xt.escapeSelector = Ot.escape;
        var It = function(t, e, n) {
                for (var i = [], r = void 0 !== n;
                    (t = t[e]) && 9 !== t.nodeType;)
                    if (1 === t.nodeType) {
                        if (r && xt(t).is(n)) break;
                        i.push(t)
                    }
                return i
            },
            At = function(t, e) { for (var n = []; t; t = t.nextSibling) 1 === t.nodeType && t !== e && n.push(t); return n },
            Pt = xt.expr.match.needsContext,
            Dt = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
        xt.filter = function(t, e, n) { var i = e[0]; return n && (t = ":not(" + t + ")"), 1 === e.length && 1 === i.nodeType ? xt.find.matchesSelector(i, t) ? [i] : [] : xt.find.matches(t, xt.grep(e, function(t) { return 1 === t.nodeType })) }, xt.fn.extend({
            find: function(t) {
                var e, n, i = this.length,
                    r = this;
                if ("string" != typeof t) return this.pushStack(xt(t).filter(function() {
                    for (e = 0; e < i; e++)
                        if (xt.contains(r[e], this)) return !0
                }));
                for (n = this.pushStack([]), e = 0; e < i; e++) xt.find(t, r[e], n);
                return i > 1 ? xt.uniqueSort(n) : n
            },
            filter: function(t) { return this.pushStack(c(this, t || [], !1)) },
            not: function(t) { return this.pushStack(c(this, t || [], !0)) },
            is: function(t) { return !!c(this, "string" == typeof t && Pt.test(t) ? xt(t) : t || [], !1).length }
        });
        var Lt, Nt = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,
            $t = xt.fn.init = function(t, e, n) {
                var i, r;
                if (!t) return this;
                if (n = n || Lt, "string" == typeof t) {
                    if (i = "<" === t[0] && ">" === t[t.length - 1] && t.length >= 3 ? [null, t, null] : Nt.exec(t), !i || !i[1] && e) return !e || e.jquery ? (e || n).find(t) : this.constructor(e).find(t);
                    if (i[1]) {
                        if (e = e instanceof xt ? e[0] : e, xt.merge(this, xt.parseHTML(i[1], e && e.nodeType ? e.ownerDocument || e : ct, !0)), Dt.test(i[1]) && xt.isPlainObject(e))
                            for (i in e) _t(this[i]) ? this[i](e[i]) : this.attr(i, e[i]);
                        return this
                    }
                    return r = ct.getElementById(i[2]), r && (this[0] = r, this.length = 1), this
                }
                return t.nodeType ? (this[0] = t, this.length = 1, this) : _t(t) ? void 0 !== n.ready ? n.ready(t) : t(xt) : xt.makeArray(t, this)
            };
        $t.prototype = xt.fn, Lt = xt(ct);
        var Ht = /^(?:parents|prev(?:Until|All))/,
            Mt = { children: !0, contents: !0, next: !0, prev: !0 };
        xt.fn.extend({
            has: function(t) {
                var e = xt(t, this),
                    n = e.length;
                return this.filter(function() {
                    for (var t = 0; t < n; t++)
                        if (xt.contains(this, e[t])) return !0
                })
            },
            closest: function(t, e) {
                var n, i = 0,
                    r = this.length,
                    o = [],
                    s = "string" != typeof t && xt(t);
                if (!Pt.test(t))
                    for (; i < r; i++)
                        for (n = this[i]; n && n !== e; n = n.parentNode)
                            if (n.nodeType < 11 && (s ? s.index(n) > -1 : 1 === n.nodeType && xt.find.matchesSelector(n, t))) { o.push(n); break }
                return this.pushStack(o.length > 1 ? xt.uniqueSort(o) : o)
            },
            index: function(t) { return t ? "string" == typeof t ? gt.call(xt(t), this[0]) : gt.call(this, t.jquery ? t[0] : t) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1 },
            add: function(t, e) { return this.pushStack(xt.uniqueSort(xt.merge(this.get(), xt(t, e)))) },
            addBack: function(t) { return this.add(null == t ? this.prevObject : this.prevObject.filter(t)) }
        }), xt.each({ parent: function(t) { var e = t.parentNode; return e && 11 !== e.nodeType ? e : null }, parents: function(t) { return It(t, "parentNode") }, parentsUntil: function(t, e, n) { return It(t, "parentNode", n) }, next: function(t) { return d(t, "nextSibling") }, prev: function(t) { return d(t, "previousSibling") }, nextAll: function(t) { return It(t, "nextSibling") }, prevAll: function(t) { return It(t, "previousSibling") }, nextUntil: function(t, e, n) { return It(t, "nextSibling", n) }, prevUntil: function(t, e, n) { return It(t, "previousSibling", n) }, siblings: function(t) { return At((t.parentNode || {}).firstChild, t) }, children: function(t) { return At(t.firstChild) }, contents: function(t) { return u(t, "iframe") ? t.contentDocument : (u(t, "template") && (t = t.content || t), xt.merge([], t.childNodes)) } }, function(t, e) { xt.fn[t] = function(n, i) { var r = xt.map(this, e, n); return "Until" !== t.slice(-5) && (i = n), i && "string" == typeof i && (r = xt.filter(i, r)), this.length > 1 && (Mt[t] || xt.uniqueSort(r), Ht.test(t) && r.reverse()), this.pushStack(r) } });
        var jt = /[^\x20\t\r\n\f]+/g;
        xt.Callbacks = function(t) {
            t = "string" == typeof t ? f(t) : xt.extend({}, t);
            var e, n, i, r, o = [],
                s = [],
                l = -1,
                u = function() {
                    for (r = r || t.once, i = e = !0; s.length; l = -1)
                        for (n = s.shift(); ++l < o.length;) o[l].apply(n[0], n[1]) === !1 && t.stopOnFalse && (l = o.length, n = !1);
                    t.memory || (n = !1), e = !1, r && (o = n ? [] : "")
                },
                c = {
                    add: function() { return o && (n && !e && (l = o.length - 1, s.push(n)), function i(e) { xt.each(e, function(e, n) { _t(n) ? t.unique && c.has(n) || o.push(n) : n && n.length && "string" !== a(n) && i(n) }) }(arguments), n && !e && u()), this },
                    remove: function() {
                        return xt.each(arguments, function(t, e) {
                            for (var n;
                                (n = xt.inArray(e, o, n)) > -1;) o.splice(n, 1), n <= l && l--
                        }), this
                    },
                    has: function(t) { return t ? xt.inArray(t, o) > -1 : o.length > 0 },
                    empty: function() { return o && (o = []), this },
                    disable: function() { return r = s = [], o = n = "", this },
                    disabled: function() { return !o },
                    lock: function() { return r = s = [], n || e || (o = n = ""), this },
                    locked: function() { return !!r },
                    fireWith: function(t, n) { return r || (n = n || [], n = [t, n.slice ? n.slice() : n], s.push(n), e || u()), this },
                    fire: function() { return c.fireWith(this, arguments), this },
                    fired: function() { return !!i }
                };
            return c
        }, xt.extend({
            Deferred: function(t) {
                var e = [
                        ["notify", "progress", xt.Callbacks("memory"), xt.Callbacks("memory"), 2],
                        ["resolve", "done", xt.Callbacks("once memory"), xt.Callbacks("once memory"), 0, "resolved"],
                        ["reject", "fail", xt.Callbacks("once memory"), xt.Callbacks("once memory"), 1, "rejected"]
                    ],
                    i = "pending",
                    r = {
                        state: function() { return i },
                        always: function() { return o.done(arguments).fail(arguments), this },
                        "catch": function(t) { return r.then(null, t) },
                        pipe: function() {
                            var t = arguments;
                            return xt.Deferred(function(n) {
                                xt.each(e, function(e, i) {
                                    var r = _t(t[i[4]]) && t[i[4]];
                                    o[i[1]](function() {
                                        var t = r && r.apply(this, arguments);
                                        t && _t(t.promise) ? t.promise().progress(n.notify).done(n.resolve).fail(n.reject) : n[i[0] + "With"](this, r ? [t] : arguments)
                                    })
                                }), t = null
                            }).promise()
                        },
                        then: function(t, i, r) {
                            function o(t, e, i, r) {
                                return function() {
                                    var a = this,
                                        l = arguments,
                                        u = function() {
                                            var n, u;
                                            if (!(t < s)) {
                                                if (n = i.apply(a, l), n === e.promise()) throw new TypeError("Thenable self-resolution");
                                                u = n && ("object" == typeof n || "function" == typeof n) && n.then, _t(u) ? r ? u.call(n, o(s, e, h, r), o(s, e, p, r)) : (s++, u.call(n, o(s, e, h, r), o(s, e, p, r), o(s, e, h, e.notifyWith))) : (i !== h && (a = void 0, l = [n]), (r || e.resolveWith)(a, l))
                                            }
                                        },
                                        c = r ? u : function() { try { u() } catch (n) { xt.Deferred.exceptionHook && xt.Deferred.exceptionHook(n, c.stackTrace), t + 1 >= s && (i !== p && (a = void 0, l = [n]), e.rejectWith(a, l)) } };
                                    t ? c() : (xt.Deferred.getStackHook && (c.stackTrace = xt.Deferred.getStackHook()), n.setTimeout(c))
                                }
                            }
                            var s = 0;
                            return xt.Deferred(function(n) { e[0][3].add(o(0, n, _t(r) ? r : h, n.notifyWith)), e[1][3].add(o(0, n, _t(t) ? t : h)), e[2][3].add(o(0, n, _t(i) ? i : p)) }).promise()
                        },
                        promise: function(t) { return null != t ? xt.extend(t, r) : r }
                    },
                    o = {};
                return xt.each(e, function(t, n) {
                    var s = n[2],
                        a = n[5];
                    r[n[1]] = s.add, a && s.add(function() { i = a }, e[3 - t][2].disable, e[3 - t][3].disable, e[0][2].lock, e[0][3].lock), s.add(n[3].fire), o[n[0]] = function() { return o[n[0] + "With"](this === o ? void 0 : this, arguments), this }, o[n[0] + "With"] = s.fireWith
                }), r.promise(o), t && t.call(o, o), o
            },
            when: function(t) {
                var e = arguments.length,
                    n = e,
                    i = Array(n),
                    r = ft.call(arguments),
                    o = xt.Deferred(),
                    s = function(t) { return function(n) { i[t] = this, r[t] = arguments.length > 1 ? ft.call(arguments) : n, --e || o.resolveWith(i, r) } };
                if (e <= 1 && (g(t, o.done(s(n)).resolve, o.reject, !e), "pending" === o.state() || _t(r[n] && r[n].then))) return o.then();
                for (; n--;) g(r[n], s(n), o.reject);
                return o.promise()
            }
        });
        var Wt = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
        xt.Deferred.exceptionHook = function(t, e) { n.console && n.console.warn && t && Wt.test(t.name) && n.console.warn("jQuery.Deferred exception: " + t.message, t.stack, e) }, xt.readyException = function(t) { n.setTimeout(function() { throw t }) };
        var Rt = xt.Deferred();
        xt.fn.ready = function(t) { return Rt.then(t)["catch"](function(t) { xt.readyException(t) }), this }, xt.extend({
            isReady: !1,
            readyWait: 1,
            ready: function(t) {
                (t === !0 ? --xt.readyWait : xt.isReady) || (xt.isReady = !0, t !== !0 && --xt.readyWait > 0 || Rt.resolveWith(ct, [xt]))
            }
        }), xt.ready.then = Rt.then, "complete" === ct.readyState || "loading" !== ct.readyState && !ct.documentElement.doScroll ? n.setTimeout(xt.ready) : (ct.addEventListener("DOMContentLoaded", m), n.addEventListener("load", m));
        var Bt = function(t, e, n, i, r, o, s) {
                var l = 0,
                    u = t.length,
                    c = null == n;
                if ("object" === a(n)) { r = !0; for (l in n) Bt(t, e, l, n[l], !0, o, s) } else if (void 0 !== i && (r = !0, _t(i) || (s = !0), c && (s ? (e.call(t, i), e = null) : (c = e, e = function(t, e, n) { return c.call(xt(t), n) })), e))
                    for (; l < u; l++) e(t[l], n, s ? i : i.call(t[l], l, e(t[l], n)));
                return r ? t : c ? e.call(t) : u ? e(t[0], n) : o
            },
            zt = /^-ms-/,
            Ft = /-([a-z])/g,
            qt = function(t) { return 1 === t.nodeType || 9 === t.nodeType || !+t.nodeType };
        b.uid = 1, b.prototype = {
            cache: function(t) { var e = t[this.expando]; return e || (e = {}, qt(t) && (t.nodeType ? t[this.expando] = e : Object.defineProperty(t, this.expando, { value: e, configurable: !0 }))), e },
            set: function(t, e, n) {
                var i, r = this.cache(t);
                if ("string" == typeof e) r[y(e)] = n;
                else
                    for (i in e) r[y(i)] = e[i];
                return r
            },
            get: function(t, e) { return void 0 === e ? this.cache(t) : t[this.expando] && t[this.expando][y(e)] },
            access: function(t, e, n) { return void 0 === e || e && "string" == typeof e && void 0 === n ? this.get(t, e) : (this.set(t, e, n), void 0 !== n ? n : e) },
            remove: function(t, e) { var n, i = t[this.expando]; if (void 0 !== i) { if (void 0 !== e) { Array.isArray(e) ? e = e.map(y) : (e = y(e), e = e in i ? [e] : e.match(jt) || []), n = e.length; for (; n--;) delete i[e[n]] }(void 0 === e || xt.isEmptyObject(i)) && (t.nodeType ? t[this.expando] = void 0 : delete t[this.expando]) } },
            hasData: function(t) { var e = t[this.expando]; return void 0 !== e && !xt.isEmptyObject(e) }
        };
        var Ut = new b,
            Vt = new b,
            Gt = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
            Qt = /[A-Z]/g;
        xt.extend({ hasData: function(t) { return Vt.hasData(t) || Ut.hasData(t) }, data: function(t, e, n) { return Vt.access(t, e, n) }, removeData: function(t, e) { Vt.remove(t, e) }, _data: function(t, e, n) { return Ut.access(t, e, n) }, _removeData: function(t, e) { Ut.remove(t, e) } }), xt.fn.extend({
            data: function(t, e) {
                var n, i, r, o = this[0],
                    s = o && o.attributes;
                if (void 0 === t) {
                    if (this.length && (r = Vt.get(o), 1 === o.nodeType && !Ut.get(o, "hasDataAttrs"))) {
                        for (n = s.length; n--;) s[n] && (i = s[n].name, 0 === i.indexOf("data-") && (i = y(i.slice(5)), S(o, i, r[i])));
                        Ut.set(o, "hasDataAttrs", !0)
                    }
                    return r
                }
                return "object" == typeof t ? this.each(function() { Vt.set(this, t) }) : Bt(this, function(e) { var n; if (o && void 0 === e) { if (n = Vt.get(o, t), void 0 !== n) return n; if (n = S(o, t), void 0 !== n) return n } else this.each(function() { Vt.set(this, t, e) }) }, null, e, arguments.length > 1, null, !0)
            },
            removeData: function(t) { return this.each(function() { Vt.remove(this, t) }) }
        }), xt.extend({
            queue: function(t, e, n) { var i; if (t) return e = (e || "fx") + "queue", i = Ut.get(t, e), n && (!i || Array.isArray(n) ? i = Ut.access(t, e, xt.makeArray(n)) : i.push(n)), i || [] },
            dequeue: function(t, e) {
                e = e || "fx";
                var n = xt.queue(t, e),
                    i = n.length,
                    r = n.shift(),
                    o = xt._queueHooks(t, e),
                    s = function() { xt.dequeue(t, e) };
                "inprogress" === r && (r = n.shift(), i--), r && ("fx" === e && n.unshift("inprogress"), delete o.stop, r.call(t, s, o)), !i && o && o.empty.fire()
            },
            _queueHooks: function(t, e) { var n = e + "queueHooks"; return Ut.get(t, n) || Ut.access(t, n, { empty: xt.Callbacks("once memory").add(function() { Ut.remove(t, [e + "queue", n]) }) }) }
        }), xt.fn.extend({
            queue: function(t, e) {
                var n = 2;
                return "string" != typeof t && (e = t, t = "fx", n--), arguments.length < n ? xt.queue(this[0], t) : void 0 === e ? this : this.each(function() {
                    var n = xt.queue(this, t, e);
                    xt._queueHooks(this, t), "fx" === t && "inprogress" !== n[0] && xt.dequeue(this, t)
                })
            },
            dequeue: function(t) { return this.each(function() { xt.dequeue(this, t) }) },
            clearQueue: function(t) { return this.queue(t || "fx", []) },
            promise: function(t, e) {
                var n, i = 1,
                    r = xt.Deferred(),
                    o = this,
                    s = this.length,
                    a = function() {--i || r.resolveWith(o, [o]) };
                for ("string" != typeof t && (e = t, t = void 0), t = t || "fx"; s--;) n = Ut.get(o[s], t + "queueHooks"), n && n.empty && (i++, n.empty.add(a));
                return a(), r.promise(e)
            }
        });
        var Yt = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
            Xt = new RegExp("^(?:([+-])=|)(" + Yt + ")([a-z%]*)$", "i"),
            Kt = ["Top", "Right", "Bottom", "Left"],
            Jt = function(t, e) { return t = e || t, "none" === t.style.display || "" === t.style.display && xt.contains(t.ownerDocument, t) && "none" === xt.css(t, "display") },
            Zt = function(t, e, n, i) {
                var r, o, s = {};
                for (o in e) s[o] = t.style[o], t.style[o] = e[o];
                r = n.apply(t, i || []);
                for (o in e) t.style[o] = s[o];
                return r
            },
            te = {};
        xt.fn.extend({ show: function() { return T(this, !0) }, hide: function() { return T(this) }, toggle: function(t) { return "boolean" == typeof t ? t ? this.show() : this.hide() : this.each(function() { Jt(this) ? xt(this).show() : xt(this).hide() }) } });
        var ee = /^(?:checkbox|radio)$/i,
            ne = /<([a-z][^\/\0>\x20\t\r\n\f]+)/i,
            ie = /^$|^module$|\/(?:java|ecma)script/i,
            re = { option: [1, "<select multiple='multiple'>", "</select>"], thead: [1, "<table>", "</table>"], col: [2, "<table><colgroup>", "</colgroup></table>"], tr: [2, "<table><tbody>", "</tbody></table>"], td: [3, "<table><tbody><tr>", "</tr></tbody></table>"], _default: [0, "", ""] };
        re.optgroup = re.option, re.tbody = re.tfoot = re.colgroup = re.caption = re.thead, re.th = re.td;
        var oe = /<|&#?\w+;/;
        ! function() {
            var t = ct.createDocumentFragment(),
                e = t.appendChild(ct.createElement("div")),
                n = ct.createElement("input");
            n.setAttribute("type", "radio"), n.setAttribute("checked", "checked"), n.setAttribute("name", "t"), e.appendChild(n), St.checkClone = e.cloneNode(!0).cloneNode(!0).lastChild.checked, e.innerHTML = "<textarea>x</textarea>", St.noCloneChecked = !!e.cloneNode(!0).lastChild.defaultValue
        }();
        var se = ct.documentElement,
            ae = /^key/,
            le = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
            ue = /^([^.]*)(?:\.(.+)|)/;
        xt.event = {
            global: {},
            add: function(t, e, n, i, r) {
                var o, s, a, l, u, c, d, f, h, p, g, m = Ut.get(t);
                if (m)
                    for (n.handler && (o = n, n = o.handler, r = o.selector), r && xt.find.matchesSelector(se, r), n.guid || (n.guid = xt.guid++), (l = m.events) || (l = m.events = {}), (s = m.handle) || (s = m.handle = function(e) { return "undefined" != typeof xt && xt.event.triggered !== e.type ? xt.event.dispatch.apply(t, arguments) : void 0 }), e = (e || "").match(jt) || [""], u = e.length; u--;) a = ue.exec(e[u]) || [], h = g = a[1], p = (a[2] || "").split(".").sort(), h && (d = xt.event.special[h] || {}, h = (r ? d.delegateType : d.bindType) || h, d = xt.event.special[h] || {}, c = xt.extend({ type: h, origType: g, data: i, handler: n, guid: n.guid, selector: r, needsContext: r && xt.expr.match.needsContext.test(r), namespace: p.join(".") }, o), (f = l[h]) || (f = l[h] = [], f.delegateCount = 0, d.setup && d.setup.call(t, i, p, s) !== !1 || t.addEventListener && t.addEventListener(h, s)), d.add && (d.add.call(t, c), c.handler.guid || (c.handler.guid = n.guid)), r ? f.splice(f.delegateCount++, 0, c) : f.push(c), xt.event.global[h] = !0)
            },
            remove: function(t, e, n, i, r) {
                var o, s, a, l, u, c, d, f, h, p, g, m = Ut.hasData(t) && Ut.get(t);
                if (m && (l = m.events)) {
                    for (e = (e || "").match(jt) || [""], u = e.length; u--;)
                        if (a = ue.exec(e[u]) || [], h = g = a[1], p = (a[2] || "").split(".").sort(), h) {
                            for (d = xt.event.special[h] || {}, h = (i ? d.delegateType : d.bindType) || h, f = l[h] || [], a = a[2] && new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)"), s = o = f.length; o--;) c = f[o], !r && g !== c.origType || n && n.guid !== c.guid || a && !a.test(c.namespace) || i && i !== c.selector && ("**" !== i || !c.selector) || (f.splice(o, 1), c.selector && f.delegateCount--, d.remove && d.remove.call(t, c));
                            s && !f.length && (d.teardown && d.teardown.call(t, p, m.handle) !== !1 || xt.removeEvent(t, h, m.handle), delete l[h])
                        } else
                            for (h in l) xt.event.remove(t, h + e[u], n, i, !0);
                    xt.isEmptyObject(l) && Ut.remove(t, "handle events")
                }
            },
            dispatch: function(t) {
                var e, n, i, r, o, s, a = xt.event.fix(t),
                    l = new Array(arguments.length),
                    u = (Ut.get(this, "events") || {})[a.type] || [],
                    c = xt.event.special[a.type] || {};
                for (l[0] = a, e = 1; e < arguments.length; e++) l[e] = arguments[e];
                if (a.delegateTarget = this, !c.preDispatch || c.preDispatch.call(this, a) !== !1) {
                    for (s = xt.event.handlers.call(this, a, u), e = 0;
                        (r = s[e++]) && !a.isPropagationStopped();)
                        for (a.currentTarget = r.elem, n = 0;
                            (o = r.handlers[n++]) && !a.isImmediatePropagationStopped();) a.rnamespace && !a.rnamespace.test(o.namespace) || (a.handleObj = o, a.data = o.data, i = ((xt.event.special[o.origType] || {}).handle || o.handler).apply(r.elem, l), void 0 !== i && (a.result = i) === !1 && (a.preventDefault(), a.stopPropagation()));
                    return c.postDispatch && c.postDispatch.call(this, a), a.result
                }
            },
            handlers: function(t, e) {
                var n, i, r, o, s, a = [],
                    l = e.delegateCount,
                    u = t.target;
                if (l && u.nodeType && !("click" === t.type && t.button >= 1))
                    for (; u !== this; u = u.parentNode || this)
                        if (1 === u.nodeType && ("click" !== t.type || u.disabled !== !0)) {
                            for (o = [], s = {}, n = 0; n < l; n++) i = e[n], r = i.selector + " ", void 0 === s[r] && (s[r] = i.needsContext ? xt(r, this).index(u) > -1 : xt.find(r, this, null, [u]).length), s[r] && o.push(i);
                            o.length && a.push({ elem: u, handlers: o })
                        }
                return u = this, l < e.length && a.push({ elem: u, handlers: e.slice(l) }), a
            },
            addProp: function(t, e) { Object.defineProperty(xt.Event.prototype, t, { enumerable: !0, configurable: !0, get: _t(e) ? function() { if (this.originalEvent) return e(this.originalEvent) } : function() { if (this.originalEvent) return this.originalEvent[t] }, set: function(e) { Object.defineProperty(this, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) } }) },
            fix: function(t) { return t[xt.expando] ? t : new xt.Event(t) },
            special: { load: { noBubble: !0 }, focus: { trigger: function() { if (this !== A() && this.focus) return this.focus(), !1 }, delegateType: "focusin" }, blur: { trigger: function() { if (this === A() && this.blur) return this.blur(), !1 }, delegateType: "focusout" }, click: { trigger: function() { if ("checkbox" === this.type && this.click && u(this, "input")) return this.click(), !1 }, _default: function(t) { return u(t.target, "a") } }, beforeunload: { postDispatch: function(t) { void 0 !== t.result && t.originalEvent && (t.originalEvent.returnValue = t.result) } } }
        }, xt.removeEvent = function(t, e, n) { t.removeEventListener && t.removeEventListener(e, n) }, xt.Event = function(t, e) { return this instanceof xt.Event ? (t && t.type ? (this.originalEvent = t, this.type = t.type, this.isDefaultPrevented = t.defaultPrevented || void 0 === t.defaultPrevented && t.returnValue === !1 ? O : I, this.target = t.target && 3 === t.target.nodeType ? t.target.parentNode : t.target, this.currentTarget = t.currentTarget, this.relatedTarget = t.relatedTarget) : this.type = t, e && xt.extend(this, e), this.timeStamp = t && t.timeStamp || Date.now(), void(this[xt.expando] = !0)) : new xt.Event(t, e) }, xt.Event.prototype = {
            constructor: xt.Event,
            isDefaultPrevented: I,
            isPropagationStopped: I,
            isImmediatePropagationStopped: I,
            isSimulated: !1,
            preventDefault: function() {
                var t = this.originalEvent;
                this.isDefaultPrevented = O, t && !this.isSimulated && t.preventDefault()
            },
            stopPropagation: function() {
                var t = this.originalEvent;
                this.isPropagationStopped = O, t && !this.isSimulated && t.stopPropagation()
            },
            stopImmediatePropagation: function() {
                var t = this.originalEvent;
                this.isImmediatePropagationStopped = O, t && !this.isSimulated && t.stopImmediatePropagation(), this.stopPropagation()
            }
        }, xt.each({ altKey: !0, bubbles: !0, cancelable: !0, changedTouches: !0, ctrlKey: !0, detail: !0, eventPhase: !0, metaKey: !0, pageX: !0, pageY: !0, shiftKey: !0, view: !0, "char": !0, charCode: !0, key: !0, keyCode: !0, button: !0, buttons: !0, clientX: !0, clientY: !0, offsetX: !0, offsetY: !0, pointerId: !0, pointerType: !0, screenX: !0, screenY: !0, targetTouches: !0, toElement: !0, touches: !0, which: function(t) { var e = t.button; return null == t.which && ae.test(t.type) ? null != t.charCode ? t.charCode : t.keyCode : !t.which && void 0 !== e && le.test(t.type) ? 1 & e ? 1 : 2 & e ? 3 : 4 & e ? 2 : 0 : t.which } }, xt.event.addProp), xt.each({ mouseenter: "mouseover", mouseleave: "mouseout", pointerenter: "pointerover", pointerleave: "pointerout" }, function(t, e) {
            xt.event.special[t] = {
                delegateType: e,
                bindType: e,
                handle: function(t) {
                    var n, i = this,
                        r = t.relatedTarget,
                        o = t.handleObj;
                    return r && (r === i || xt.contains(i, r)) || (t.type = o.origType, n = o.handler.apply(this, arguments), t.type = e), n
                }
            }
        }), xt.fn.extend({ on: function(t, e, n, i) { return P(this, t, e, n, i) }, one: function(t, e, n, i) { return P(this, t, e, n, i, 1) }, off: function(t, e, n) { var i, r; if (t && t.preventDefault && t.handleObj) return i = t.handleObj, xt(t.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler), this; if ("object" == typeof t) { for (r in t) this.off(r, e, t[r]); return this } return e !== !1 && "function" != typeof e || (n = e, e = void 0), n === !1 && (n = I), this.each(function() { xt.event.remove(this, t, n, e) }) } });
        var ce = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
            de = /<script|<style|<link/i,
            fe = /checked\s*(?:[^=]|=\s*.checked.)/i,
            he = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
        xt.extend({
            htmlPrefilter: function(t) { return t.replace(ce, "<$1></$2>") },
            clone: function(t, e, n) {
                var i, r, o, s, a = t.cloneNode(!0),
                    l = xt.contains(t.ownerDocument, t);
                if (!(St.noCloneChecked || 1 !== t.nodeType && 11 !== t.nodeType || xt.isXMLDoc(t)))
                    for (s = E(a), o = E(t), i = 0, r = o.length; i < r; i++) H(o[i], s[i]);
                if (e)
                    if (n)
                        for (o = o || E(t), s = s || E(a), i = 0, r = o.length; i < r; i++) $(o[i], s[i]);
                    else $(t, a);
                return s = E(a, "script"), s.length > 0 && x(s, !l && E(t, "script")), a
            },
            cleanData: function(t) {
                for (var e, n, i, r = xt.event.special, o = 0; void 0 !== (n = t[o]); o++)
                    if (qt(n)) {
                        if (e = n[Ut.expando]) {
                            if (e.events)
                                for (i in e.events) r[i] ? xt.event.remove(n, i) : xt.removeEvent(n, i, e.handle);
                            n[Ut.expando] = void 0
                        }
                        n[Vt.expando] && (n[Vt.expando] = void 0)
                    }
            }
        }), xt.fn.extend({
            detach: function(t) { return j(this, t, !0) },
            remove: function(t) { return j(this, t) },
            text: function(t) { return Bt(this, function(t) { return void 0 === t ? xt.text(this) : this.empty().each(function() { 1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = t) }) }, null, t, arguments.length) },
            append: function() {
                return M(this, arguments, function(t) {
                    if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                        var e = D(this, t);
                        e.appendChild(t)
                    }
                })
            },
            prepend: function() {
                return M(this, arguments, function(t) {
                    if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                        var e = D(this, t);
                        e.insertBefore(t, e.firstChild)
                    }
                })
            },
            before: function() { return M(this, arguments, function(t) { this.parentNode && this.parentNode.insertBefore(t, this) }) },
            after: function() { return M(this, arguments, function(t) { this.parentNode && this.parentNode.insertBefore(t, this.nextSibling) }) },
            empty: function() { for (var t, e = 0; null != (t = this[e]); e++) 1 === t.nodeType && (xt.cleanData(E(t, !1)), t.textContent = ""); return this },
            clone: function(t, e) { return t = null != t && t, e = null == e ? t : e, this.map(function() { return xt.clone(this, t, e) }) },
            html: function(t) {
                return Bt(this, function(t) {
                    var e = this[0] || {},
                        n = 0,
                        i = this.length;
                    if (void 0 === t && 1 === e.nodeType) return e.innerHTML;
                    if ("string" == typeof t && !de.test(t) && !re[(ne.exec(t) || ["", ""])[1].toLowerCase()]) {
                        t = xt.htmlPrefilter(t);
                        try {
                            for (; n < i; n++) e = this[n] || {}, 1 === e.nodeType && (xt.cleanData(E(e, !1)), e.innerHTML = t);
                            e = 0
                        } catch (r) {}
                    }
                    e && this.empty().append(t)
                }, null, t, arguments.length)
            },
            replaceWith: function() {
                var t = [];
                return M(this, arguments, function(e) {
                    var n = this.parentNode;
                    xt.inArray(this, t) < 0 && (xt.cleanData(E(this)), n && n.replaceChild(e, this))
                }, t)
            }
        }), xt.each({ appendTo: "append", prependTo: "prepend", insertBefore: "before", insertAfter: "after", replaceAll: "replaceWith" }, function(t, e) { xt.fn[t] = function(t) { for (var n, i = [], r = xt(t), o = r.length - 1, s = 0; s <= o; s++) n = s === o ? this : this.clone(!0), xt(r[s])[e](n), pt.apply(i, n.get()); return this.pushStack(i) } });
        var pe = new RegExp("^(" + Yt + ")(?!px)[a-z%]+$", "i"),
            ge = function(t) { var e = t.ownerDocument.defaultView; return e && e.opener || (e = n), e.getComputedStyle(t) },
            me = new RegExp(Kt.join("|"), "i");
        ! function() {
            function t() {
                if (u) {
                    l.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0", u.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%", se.appendChild(l).appendChild(u);
                    var t = n.getComputedStyle(u);
                    i = "1%" !== t.top, a = 12 === e(t.marginLeft), u.style.right = "60%", s = 36 === e(t.right), r = 36 === e(t.width), u.style.position = "absolute", o = 36 === u.offsetWidth || "absolute", se.removeChild(l), u = null
                }
            }

            function e(t) { return Math.round(parseFloat(t)) }
            var i, r, o, s, a, l = ct.createElement("div"),
                u = ct.createElement("div");
            u.style && (u.style.backgroundClip = "content-box", u.cloneNode(!0).style.backgroundClip = "", St.clearCloneStyle = "content-box" === u.style.backgroundClip, xt.extend(St, { boxSizingReliable: function() { return t(), r }, pixelBoxStyles: function() { return t(), s }, pixelPosition: function() { return t(), i }, reliableMarginLeft: function() { return t(), a }, scrollboxSize: function() { return t(), o } }))
        }();
        var ve = /^(none|table(?!-c[ea]).+)/,
            ye = /^--/,
            be = { position: "absolute", visibility: "hidden", display: "block" },
            we = { letterSpacing: "0", fontWeight: "400" },
            Se = ["Webkit", "Moz", "ms"],
            _e = ct.createElement("div").style;
        xt.extend({
            cssHooks: { opacity: { get: function(t, e) { if (e) { var n = W(t, "opacity"); return "" === n ? "1" : n } } } },
            cssNumber: { animationIterationCount: !0, columnCount: !0, fillOpacity: !0, flexGrow: !0, flexShrink: !0, fontWeight: !0, lineHeight: !0, opacity: !0, order: !0, orphans: !0, widows: !0, zIndex: !0, zoom: !0 },
            cssProps: {},
            style: function(t, e, n, i) {
                if (t && 3 !== t.nodeType && 8 !== t.nodeType && t.style) {
                    var r, o, s, a = y(e),
                        l = ye.test(e),
                        u = t.style;
                    return l || (e = z(a)), s = xt.cssHooks[e] || xt.cssHooks[a], void 0 === n ? s && "get" in s && void 0 !== (r = s.get(t, !1, i)) ? r : u[e] : (o = typeof n, "string" === o && (r = Xt.exec(n)) && r[1] && (n = _(t, e, r), o = "number"), null != n && n === n && ("number" === o && (n += r && r[3] || (xt.cssNumber[a] ? "" : "px")), St.clearCloneStyle || "" !== n || 0 !== e.indexOf("background") || (u[e] = "inherit"), s && "set" in s && void 0 === (n = s.set(t, n, i)) || (l ? u.setProperty(e, n) : u[e] = n)), void 0)
                }
            },
            css: function(t, e, n, i) {
                var r, o, s, a = y(e),
                    l = ye.test(e);
                return l || (e = z(a)), s = xt.cssHooks[e] || xt.cssHooks[a], s && "get" in s && (r = s.get(t, !0, n)), void 0 === r && (r = W(t, e, i)), "normal" === r && e in we && (r = we[e]), "" === n || n ? (o = parseFloat(r), n === !0 || isFinite(o) ? o || 0 : r) : r
            }
        }), xt.each(["height", "width"], function(t, e) {
            xt.cssHooks[e] = {
                get: function(t, n, i) { if (n) return !ve.test(xt.css(t, "display")) || t.getClientRects().length && t.getBoundingClientRect().width ? U(t, e, i) : Zt(t, be, function() { return U(t, e, i) }) },
                set: function(t, n, i) {
                    var r, o = ge(t),
                        s = "border-box" === xt.css(t, "boxSizing", !1, o),
                        a = i && q(t, e, i, s, o);
                    return s && St.scrollboxSize() === o.position && (a -= Math.ceil(t["offset" + e[0].toUpperCase() + e.slice(1)] - parseFloat(o[e]) - q(t, e, "border", !1, o) - .5)), a && (r = Xt.exec(n)) && "px" !== (r[3] || "px") && (t.style[e] = n, n = xt.css(t, e)), F(t, n, a)
                }
            }
        }), xt.cssHooks.marginLeft = R(St.reliableMarginLeft, function(t, e) { if (e) return (parseFloat(W(t, "marginLeft")) || t.getBoundingClientRect().left - Zt(t, { marginLeft: 0 }, function() { return t.getBoundingClientRect().left })) + "px" }), xt.each({ margin: "", padding: "", border: "Width" }, function(t, e) { xt.cssHooks[t + e] = { expand: function(n) { for (var i = 0, r = {}, o = "string" == typeof n ? n.split(" ") : [n]; i < 4; i++) r[t + Kt[i] + e] = o[i] || o[i - 2] || o[0]; return r } }, "margin" !== t && (xt.cssHooks[t + e].set = F) }), xt.fn.extend({
            css: function(t, e) {
                return Bt(this, function(t, e, n) {
                    var i, r, o = {},
                        s = 0;
                    if (Array.isArray(e)) { for (i = ge(t), r = e.length; s < r; s++) o[e[s]] = xt.css(t, e[s], !1, i); return o }
                    return void 0 !== n ? xt.style(t, e, n) : xt.css(t, e)
                }, t, e, arguments.length > 1)
            }
        }), xt.Tween = V, V.prototype = { constructor: V, init: function(t, e, n, i, r, o) { this.elem = t, this.prop = n, this.easing = r || xt.easing._default, this.options = e, this.start = this.now = this.cur(), this.end = i, this.unit = o || (xt.cssNumber[n] ? "" : "px") }, cur: function() { var t = V.propHooks[this.prop]; return t && t.get ? t.get(this) : V.propHooks._default.get(this) }, run: function(t) { var e, n = V.propHooks[this.prop]; return this.options.duration ? this.pos = e = xt.easing[this.easing](t, this.options.duration * t, 0, 1, this.options.duration) : this.pos = e = t, this.now = (this.end - this.start) * e + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : V.propHooks._default.set(this), this } }, V.prototype.init.prototype = V.prototype, V.propHooks = { _default: { get: function(t) { var e; return 1 !== t.elem.nodeType || null != t.elem[t.prop] && null == t.elem.style[t.prop] ? t.elem[t.prop] : (e = xt.css(t.elem, t.prop, ""), e && "auto" !== e ? e : 0) }, set: function(t) { xt.fx.step[t.prop] ? xt.fx.step[t.prop](t) : 1 !== t.elem.nodeType || null == t.elem.style[xt.cssProps[t.prop]] && !xt.cssHooks[t.prop] ? t.elem[t.prop] = t.now : xt.style(t.elem, t.prop, t.now + t.unit) } } }, V.propHooks.scrollTop = V.propHooks.scrollLeft = { set: function(t) { t.elem.nodeType && t.elem.parentNode && (t.elem[t.prop] = t.now) } }, xt.easing = { linear: function(t) { return t }, swing: function(t) { return .5 - Math.cos(t * Math.PI) / 2 }, _default: "swing" }, xt.fx = V.prototype.init, xt.fx.step = {};
        var Ce, Te, Ee = /^(?:toggle|show|hide)$/,
            xe = /queueHooks$/;
        xt.Animation = xt.extend(Z, { tweeners: { "*": [function(t, e) { var n = this.createTween(t, e); return _(n.elem, t, Xt.exec(e), n), n }] }, tweener: function(t, e) { _t(t) ? (e = t, t = ["*"]) : t = t.match(jt); for (var n, i = 0, r = t.length; i < r; i++) n = t[i], Z.tweeners[n] = Z.tweeners[n] || [], Z.tweeners[n].unshift(e) }, prefilters: [K], prefilter: function(t, e) { e ? Z.prefilters.unshift(t) : Z.prefilters.push(t) } }), xt.speed = function(t, e, n) { var i = t && "object" == typeof t ? xt.extend({}, t) : { complete: n || !n && e || _t(t) && t, duration: t, easing: n && e || e && !_t(e) && e }; return xt.fx.off ? i.duration = 0 : "number" != typeof i.duration && (i.duration in xt.fx.speeds ? i.duration = xt.fx.speeds[i.duration] : i.duration = xt.fx.speeds._default), null != i.queue && i.queue !== !0 || (i.queue = "fx"), i.old = i.complete, i.complete = function() { _t(i.old) && i.old.call(this), i.queue && xt.dequeue(this, i.queue) }, i }, xt.fn.extend({
                fadeTo: function(t, e, n, i) { return this.filter(Jt).css("opacity", 0).show().end().animate({ opacity: e }, t, n, i) },
                animate: function(t, e, n, i) {
                    var r = xt.isEmptyObject(t),
                        o = xt.speed(e, n, i),
                        s = function() {
                            var e = Z(this, xt.extend({}, t), o);
                            (r || Ut.get(this, "finish")) && e.stop(!0)
                        };
                    return s.finish = s, r || o.queue === !1 ? this.each(s) : this.queue(o.queue, s)
                },
                stop: function(t, e, n) {
                    var i = function(t) {
                        var e = t.stop;
                        delete t.stop, e(n)
                    };
                    return "string" != typeof t && (n = e, e = t, t = void 0), e && t !== !1 && this.queue(t || "fx", []), this.each(function() {
                        var e = !0,
                            r = null != t && t + "queueHooks",
                            o = xt.timers,
                            s = Ut.get(this);
                        if (r) s[r] && s[r].stop && i(s[r]);
                        else
                            for (r in s) s[r] && s[r].stop && xe.test(r) && i(s[r]);
                        for (r = o.length; r--;) o[r].elem !== this || null != t && o[r].queue !== t || (o[r].anim.stop(n), e = !1, o.splice(r, 1));
                        !e && n || xt.dequeue(this, t)
                    })
                },
                finish: function(t) {
                    return t !== !1 && (t = t || "fx"), this.each(function() {
                        var e, n = Ut.get(this),
                            i = n[t + "queue"],
                            r = n[t + "queueHooks"],
                            o = xt.timers,
                            s = i ? i.length : 0;
                        for (n.finish = !0, xt.queue(this, t, []), r && r.stop && r.stop.call(this, !0), e = o.length; e--;) o[e].elem === this && o[e].queue === t && (o[e].anim.stop(!0), o.splice(e, 1));
                        for (e = 0; e < s; e++) i[e] && i[e].finish && i[e].finish.call(this);
                        delete n.finish
                    })
                }
            }), xt.each(["toggle", "show", "hide"], function(t, e) {
                var n = xt.fn[e];
                xt.fn[e] = function(t, i, r) { return null == t || "boolean" == typeof t ? n.apply(this, arguments) : this.animate(Y(e, !0), t, i, r) }
            }), xt.each({ slideDown: Y("show"), slideUp: Y("hide"), slideToggle: Y("toggle"), fadeIn: { opacity: "show" }, fadeOut: { opacity: "hide" }, fadeToggle: { opacity: "toggle" } }, function(t, e) { xt.fn[t] = function(t, n, i) { return this.animate(e, t, n, i) } }), xt.timers = [], xt.fx.tick = function() {
                var t, e = 0,
                    n = xt.timers;
                for (Ce = Date.now(); e < n.length; e++) t = n[e], t() || n[e] !== t || n.splice(e--, 1);
                n.length || xt.fx.stop(), Ce = void 0
            }, xt.fx.timer = function(t) { xt.timers.push(t), xt.fx.start() }, xt.fx.interval = 13, xt.fx.start = function() { Te || (Te = !0, G()) }, xt.fx.stop = function() { Te = null }, xt.fx.speeds = { slow: 600, fast: 200, _default: 400 }, xt.fn.delay = function(t, e) {
                return t = xt.fx ? xt.fx.speeds[t] || t : t, e = e || "fx", this.queue(e, function(e, i) {
                    var r = n.setTimeout(e, t);
                    i.stop = function() { n.clearTimeout(r) }
                })
            },
            function() {
                var t = ct.createElement("input"),
                    e = ct.createElement("select"),
                    n = e.appendChild(ct.createElement("option"));
                t.type = "checkbox", St.checkOn = "" !== t.value, St.optSelected = n.selected, t = ct.createElement("input"), t.value = "t", t.type = "radio", St.radioValue = "t" === t.value
            }();
        var ke, Oe = xt.expr.attrHandle;
        xt.fn.extend({ attr: function(t, e) { return Bt(this, xt.attr, t, e, arguments.length > 1) }, removeAttr: function(t) { return this.each(function() { xt.removeAttr(this, t) }) } }), xt.extend({
            attr: function(t, e, n) { var i, r, o = t.nodeType; if (3 !== o && 8 !== o && 2 !== o) return "undefined" == typeof t.getAttribute ? xt.prop(t, e, n) : (1 === o && xt.isXMLDoc(t) || (r = xt.attrHooks[e.toLowerCase()] || (xt.expr.match.bool.test(e) ? ke : void 0)), void 0 !== n ? null === n ? void xt.removeAttr(t, e) : r && "set" in r && void 0 !== (i = r.set(t, n, e)) ? i : (t.setAttribute(e, n + ""), n) : r && "get" in r && null !== (i = r.get(t, e)) ? i : (i = xt.find.attr(t, e), null == i ? void 0 : i)) },
            attrHooks: { type: { set: function(t, e) { if (!St.radioValue && "radio" === e && u(t, "input")) { var n = t.value; return t.setAttribute("type", e), n && (t.value = n), e } } } },
            removeAttr: function(t, e) {
                var n, i = 0,
                    r = e && e.match(jt);
                if (r && 1 === t.nodeType)
                    for (; n = r[i++];) t.removeAttribute(n)
            }
        }), ke = { set: function(t, e, n) { return e === !1 ? xt.removeAttr(t, n) : t.setAttribute(n, n), n } }, xt.each(xt.expr.match.bool.source.match(/\w+/g), function(t, e) {
            var n = Oe[e] || xt.find.attr;
            Oe[e] = function(t, e, i) { var r, o, s = e.toLowerCase(); return i || (o = Oe[s], Oe[s] = r, r = null != n(t, e, i) ? s : null, Oe[s] = o), r }
        });
        var Ie = /^(?:input|select|textarea|button)$/i,
            Ae = /^(?:a|area)$/i;
        xt.fn.extend({ prop: function(t, e) { return Bt(this, xt.prop, t, e, arguments.length > 1) }, removeProp: function(t) { return this.each(function() { delete this[xt.propFix[t] || t] }) } }), xt.extend({ prop: function(t, e, n) { var i, r, o = t.nodeType; if (3 !== o && 8 !== o && 2 !== o) return 1 === o && xt.isXMLDoc(t) || (e = xt.propFix[e] || e, r = xt.propHooks[e]), void 0 !== n ? r && "set" in r && void 0 !== (i = r.set(t, n, e)) ? i : t[e] = n : r && "get" in r && null !== (i = r.get(t, e)) ? i : t[e] }, propHooks: { tabIndex: { get: function(t) { var e = xt.find.attr(t, "tabindex"); return e ? parseInt(e, 10) : Ie.test(t.nodeName) || Ae.test(t.nodeName) && t.href ? 0 : -1 } } }, propFix: { "for": "htmlFor", "class": "className" } }), St.optSelected || (xt.propHooks.selected = {
            get: function(t) { var e = t.parentNode; return e && e.parentNode && e.parentNode.selectedIndex, null },
            set: function(t) {
                var e = t.parentNode;
                e && (e.selectedIndex, e.parentNode && e.parentNode.selectedIndex)
            }
        }), xt.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() { xt.propFix[this.toLowerCase()] = this }), xt.fn.extend({
            addClass: function(t) {
                var e, n, i, r, o, s, a, l = 0;
                if (_t(t)) return this.each(function(e) { xt(this).addClass(t.call(this, e, et(this))) });
                if (e = nt(t), e.length)
                    for (; n = this[l++];)
                        if (r = et(n), i = 1 === n.nodeType && " " + tt(r) + " ") {
                            for (s = 0; o = e[s++];) i.indexOf(" " + o + " ") < 0 && (i += o + " ");
                            a = tt(i), r !== a && n.setAttribute("class", a)
                        }
                return this
            },
            removeClass: function(t) {
                var e, n, i, r, o, s, a, l = 0;
                if (_t(t)) return this.each(function(e) { xt(this).removeClass(t.call(this, e, et(this))) });
                if (!arguments.length) return this.attr("class", "");
                if (e = nt(t), e.length)
                    for (; n = this[l++];)
                        if (r = et(n), i = 1 === n.nodeType && " " + tt(r) + " ") {
                            for (s = 0; o = e[s++];)
                                for (; i.indexOf(" " + o + " ") > -1;) i = i.replace(" " + o + " ", " ");
                            a = tt(i), r !== a && n.setAttribute("class", a)
                        }
                return this
            },
            toggleClass: function(t, e) {
                var n = typeof t,
                    i = "string" === n || Array.isArray(t);
                return "boolean" == typeof e && i ? e ? this.addClass(t) : this.removeClass(t) : _t(t) ? this.each(function(n) { xt(this).toggleClass(t.call(this, n, et(this), e), e) }) : this.each(function() {
                    var e, r, o, s;
                    if (i)
                        for (r = 0, o = xt(this), s = nt(t); e = s[r++];) o.hasClass(e) ? o.removeClass(e) : o.addClass(e);
                    else void 0 !== t && "boolean" !== n || (e = et(this), e && Ut.set(this, "__className__", e), this.setAttribute && this.setAttribute("class", e || t === !1 ? "" : Ut.get(this, "__className__") || ""))
                })
            },
            hasClass: function(t) {
                var e, n, i = 0;
                for (e = " " + t + " "; n = this[i++];)
                    if (1 === n.nodeType && (" " + tt(et(n)) + " ").indexOf(e) > -1) return !0;
                return !1
            }
        });
        var Pe = /\r/g;
        xt.fn.extend({
            val: function(t) {
                var e, n, i, r = this[0]; {
                    if (arguments.length) return i = _t(t), this.each(function(n) {
                        var r;
                        1 === this.nodeType && (r = i ? t.call(this, n, xt(this).val()) : t, null == r ? r = "" : "number" == typeof r ? r += "" : Array.isArray(r) && (r = xt.map(r, function(t) { return null == t ? "" : t + "" })), e = xt.valHooks[this.type] || xt.valHooks[this.nodeName.toLowerCase()], e && "set" in e && void 0 !== e.set(this, r, "value") || (this.value = r))
                    });
                    if (r) return e = xt.valHooks[r.type] || xt.valHooks[r.nodeName.toLowerCase()], e && "get" in e && void 0 !== (n = e.get(r, "value")) ? n : (n = r.value, "string" == typeof n ? n.replace(Pe, "") : null == n ? "" : n)
                }
            }
        }), xt.extend({
            valHooks: {
                option: { get: function(t) { var e = xt.find.attr(t, "value"); return null != e ? e : tt(xt.text(t)) } },
                select: {
                    get: function(t) {
                        var e, n, i, r = t.options,
                            o = t.selectedIndex,
                            s = "select-one" === t.type,
                            a = s ? null : [],
                            l = s ? o + 1 : r.length;
                        for (i = o < 0 ? l : s ? o : 0; i < l; i++)
                            if (n = r[i], (n.selected || i === o) && !n.disabled && (!n.parentNode.disabled || !u(n.parentNode, "optgroup"))) {
                                if (e = xt(n).val(), s) return e;
                                a.push(e)
                            }
                        return a
                    },
                    set: function(t, e) { for (var n, i, r = t.options, o = xt.makeArray(e), s = r.length; s--;) i = r[s], (i.selected = xt.inArray(xt.valHooks.option.get(i), o) > -1) && (n = !0); return n || (t.selectedIndex = -1), o }
                }
            }
        }), xt.each(["radio", "checkbox"], function() { xt.valHooks[this] = { set: function(t, e) { if (Array.isArray(e)) return t.checked = xt.inArray(xt(t).val(), e) > -1 } }, St.checkOn || (xt.valHooks[this].get = function(t) { return null === t.getAttribute("value") ? "on" : t.value }) }), St.focusin = "onfocusin" in n;
        var De = /^(?:focusinfocus|focusoutblur)$/,
            Le = function(t) { t.stopPropagation() };
        xt.extend(xt.event, {
            trigger: function(t, e, i, r) {
                var o, s, a, l, u, c, d, f, h = [i || ct],
                    p = yt.call(t, "type") ? t.type : t,
                    g = yt.call(t, "namespace") ? t.namespace.split(".") : [];
                if (s = f = a = i = i || ct, 3 !== i.nodeType && 8 !== i.nodeType && !De.test(p + xt.event.triggered) && (p.indexOf(".") > -1 && (g = p.split("."), p = g.shift(), g.sort()), u = p.indexOf(":") < 0 && "on" + p, t = t[xt.expando] ? t : new xt.Event(p, "object" == typeof t && t), t.isTrigger = r ? 2 : 3, t.namespace = g.join("."), t.rnamespace = t.namespace ? new RegExp("(^|\\.)" + g.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, t.result = void 0, t.target || (t.target = i), e = null == e ? [t] : xt.makeArray(e, [t]), d = xt.event.special[p] || {}, r || !d.trigger || d.trigger.apply(i, e) !== !1)) {
                    if (!r && !d.noBubble && !Ct(i)) {
                        for (l = d.delegateType || p, De.test(l + p) || (s = s.parentNode); s; s = s.parentNode) h.push(s), a = s;
                        a === (i.ownerDocument || ct) && h.push(a.defaultView || a.parentWindow || n)
                    }
                    for (o = 0;
                        (s = h[o++]) && !t.isPropagationStopped();) f = s, t.type = o > 1 ? l : d.bindType || p, c = (Ut.get(s, "events") || {})[t.type] && Ut.get(s, "handle"), c && c.apply(s, e), c = u && s[u], c && c.apply && qt(s) && (t.result = c.apply(s, e), t.result === !1 && t.preventDefault());
                    return t.type = p, r || t.isDefaultPrevented() || d._default && d._default.apply(h.pop(), e) !== !1 || !qt(i) || u && _t(i[p]) && !Ct(i) && (a = i[u], a && (i[u] = null), xt.event.triggered = p, t.isPropagationStopped() && f.addEventListener(p, Le), i[p](), t.isPropagationStopped() && f.removeEventListener(p, Le), xt.event.triggered = void 0, a && (i[u] = a)), t.result
                }
            },
            simulate: function(t, e, n) {
                var i = xt.extend(new xt.Event, n, { type: t, isSimulated: !0 });
                xt.event.trigger(i, null, e)
            }
        }), xt.fn.extend({ trigger: function(t, e) { return this.each(function() { xt.event.trigger(t, e, this) }) }, triggerHandler: function(t, e) { var n = this[0]; if (n) return xt.event.trigger(t, e, n, !0) } }), St.focusin || xt.each({ focus: "focusin", blur: "focusout" }, function(t, e) {
            var n = function(t) { xt.event.simulate(e, t.target, xt.event.fix(t)) };
            xt.event.special[e] = {
                setup: function() {
                    var i = this.ownerDocument || this,
                        r = Ut.access(i, e);
                    r || i.addEventListener(t, n, !0), Ut.access(i, e, (r || 0) + 1)
                },
                teardown: function() {
                    var i = this.ownerDocument || this,
                        r = Ut.access(i, e) - 1;
                    r ? Ut.access(i, e, r) : (i.removeEventListener(t, n, !0), Ut.remove(i, e))
                }
            }
        });
        var Ne = n.location,
            $e = Date.now(),
            He = /\?/;
        xt.parseXML = function(t) { var e; if (!t || "string" != typeof t) return null; try { e = (new n.DOMParser).parseFromString(t, "text/xml") } catch (i) { e = void 0 } return e && !e.getElementsByTagName("parsererror").length || xt.error("Invalid XML: " + t), e };
        var Me = /\[\]$/,
            je = /\r?\n/g,
            We = /^(?:submit|button|image|reset|file)$/i,
            Re = /^(?:input|select|textarea|keygen)/i;
        xt.param = function(t, e) {
            var n, i = [],
                r = function(t, e) {
                    var n = _t(e) ? e() : e;
                    i[i.length] = encodeURIComponent(t) + "=" + encodeURIComponent(null == n ? "" : n)
                };
            if (Array.isArray(t) || t.jquery && !xt.isPlainObject(t)) xt.each(t, function() { r(this.name, this.value) });
            else
                for (n in t) it(n, t[n], e, r);
            return i.join("&")
        }, xt.fn.extend({ serialize: function() { return xt.param(this.serializeArray()) }, serializeArray: function() { return this.map(function() { var t = xt.prop(this, "elements"); return t ? xt.makeArray(t) : this }).filter(function() { var t = this.type; return this.name && !xt(this).is(":disabled") && Re.test(this.nodeName) && !We.test(t) && (this.checked || !ee.test(t)) }).map(function(t, e) { var n = xt(this).val(); return null == n ? null : Array.isArray(n) ? xt.map(n, function(t) { return { name: e.name, value: t.replace(je, "\r\n") } }) : { name: e.name, value: n.replace(je, "\r\n") } }).get() } });
        var Be = /%20/g,
            ze = /#.*$/,
            Fe = /([?&])_=[^&]*/,
            qe = /^(.*?):[ \t]*([^\r\n]*)$/gm,
            Ue = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
            Ve = /^(?:GET|HEAD)$/,
            Ge = /^\/\//,
            Qe = {},
            Ye = {},
            Xe = "*/".concat("*"),
            Ke = ct.createElement("a");
        Ke.href = Ne.href, xt.extend({
            active: 0,
            lastModified: {},
            etag: {},
            ajaxSettings: { url: Ne.href, type: "GET", isLocal: Ue.test(Ne.protocol), global: !0, processData: !0, async: !0, contentType: "application/x-www-form-urlencoded; charset=UTF-8", accepts: { "*": Xe, text: "text/plain", html: "text/html", xml: "application/xml, text/xml", json: "application/json, text/javascript" }, contents: { xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/ }, responseFields: { xml: "responseXML", text: "responseText", json: "responseJSON" }, converters: { "* text": String, "text html": !0, "text json": JSON.parse, "text xml": xt.parseXML }, flatOptions: { url: !0, context: !0 } },
            ajaxSetup: function(t, e) { return e ? st(st(t, xt.ajaxSettings), e) : st(xt.ajaxSettings, t) },
            ajaxPrefilter: rt(Qe),
            ajaxTransport: rt(Ye),
            ajax: function(t, e) {
                function i(t, e, i, a) {
                    var u, f, h, w, S, _ = e;
                    c || (c = !0, l && n.clearTimeout(l), r = void 0, s = a || "", C.readyState = t > 0 ? 4 : 0, u = t >= 200 && t < 300 || 304 === t, i && (w = at(p, C, i)), w = lt(p, w, C, u), u ? (p.ifModified && (S = C.getResponseHeader("Last-Modified"), S && (xt.lastModified[o] = S), S = C.getResponseHeader("etag"), S && (xt.etag[o] = S)), 204 === t || "HEAD" === p.type ? _ = "nocontent" : 304 === t ? _ = "notmodified" : (_ = w.state, f = w.data, h = w.error, u = !h)) : (h = _, !t && _ || (_ = "error", t < 0 && (t = 0))), C.status = t, C.statusText = (e || _) + "", u ? v.resolveWith(g, [f, _, C]) : v.rejectWith(g, [C, _, h]), C.statusCode(b), b = void 0, d && m.trigger(u ? "ajaxSuccess" : "ajaxError", [C, p, u ? f : h]), y.fireWith(g, [C, _]), d && (m.trigger("ajaxComplete", [C, p]), --xt.active || xt.event.trigger("ajaxStop")))
                }
                "object" == typeof t && (e = t, t = void 0), e = e || {};
                var r, o, s, a, l, u, c, d, f, h, p = xt.ajaxSetup({}, e),
                    g = p.context || p,
                    m = p.context && (g.nodeType || g.jquery) ? xt(g) : xt.event,
                    v = xt.Deferred(),
                    y = xt.Callbacks("once memory"),
                    b = p.statusCode || {},
                    w = {},
                    S = {},
                    _ = "canceled",
                    C = {
                        readyState: 0,
                        getResponseHeader: function(t) {
                            var e;
                            if (c) {
                                if (!a)
                                    for (a = {}; e = qe.exec(s);) a[e[1].toLowerCase()] = e[2];
                                e = a[t.toLowerCase()]
                            }
                            return null == e ? null : e
                        },
                        getAllResponseHeaders: function() { return c ? s : null },
                        setRequestHeader: function(t, e) { return null == c && (t = S[t.toLowerCase()] = S[t.toLowerCase()] || t, w[t] = e), this },
                        overrideMimeType: function(t) { return null == c && (p.mimeType = t), this },
                        statusCode: function(t) {
                            var e;
                            if (t)
                                if (c) C.always(t[C.status]);
                                else
                                    for (e in t) b[e] = [b[e], t[e]];
                            return this
                        },
                        abort: function(t) { var e = t || _; return r && r.abort(e), i(0, e), this }
                    };
                if (v.promise(C), p.url = ((t || p.url || Ne.href) + "").replace(Ge, Ne.protocol + "//"), p.type = e.method || e.type || p.method || p.type, p.dataTypes = (p.dataType || "*").toLowerCase().match(jt) || [""], null == p.crossDomain) { u = ct.createElement("a"); try { u.href = p.url, u.href = u.href, p.crossDomain = Ke.protocol + "//" + Ke.host != u.protocol + "//" + u.host } catch (T) { p.crossDomain = !0 } }
                if (p.data && p.processData && "string" != typeof p.data && (p.data = xt.param(p.data, p.traditional)), ot(Qe, p, e, C), c) return C;
                d = xt.event && p.global, d && 0 === xt.active++ && xt.event.trigger("ajaxStart"), p.type = p.type.toUpperCase(), p.hasContent = !Ve.test(p.type), o = p.url.replace(ze, ""), p.hasContent ? p.data && p.processData && 0 === (p.contentType || "").indexOf("application/x-www-form-urlencoded") && (p.data = p.data.replace(Be, "+")) : (h = p.url.slice(o.length), p.data && (p.processData || "string" == typeof p.data) && (o += (He.test(o) ? "&" : "?") + p.data, delete p.data), p.cache === !1 && (o = o.replace(Fe, "$1"), h = (He.test(o) ? "&" : "?") + "_=" + $e++ + h), p.url = o + h), p.ifModified && (xt.lastModified[o] && C.setRequestHeader("If-Modified-Since", xt.lastModified[o]), xt.etag[o] && C.setRequestHeader("If-None-Match", xt.etag[o])), (p.data && p.hasContent && p.contentType !== !1 || e.contentType) && C.setRequestHeader("Content-Type", p.contentType), C.setRequestHeader("Accept", p.dataTypes[0] && p.accepts[p.dataTypes[0]] ? p.accepts[p.dataTypes[0]] + ("*" !== p.dataTypes[0] ? ", " + Xe + "; q=0.01" : "") : p.accepts["*"]);
                for (f in p.headers) C.setRequestHeader(f, p.headers[f]);
                if (p.beforeSend && (p.beforeSend.call(g, C, p) === !1 || c)) return C.abort();
                if (_ = "abort", y.add(p.complete), C.done(p.success), C.fail(p.error), r = ot(Ye, p, e, C)) {
                    if (C.readyState = 1, d && m.trigger("ajaxSend", [C, p]), c) return C;
                    p.async && p.timeout > 0 && (l = n.setTimeout(function() { C.abort("timeout") }, p.timeout));
                    try { c = !1, r.send(w, i) } catch (T) {
                        if (c) throw T;
                        i(-1, T)
                    }
                } else i(-1, "No Transport");
                return C
            },
            getJSON: function(t, e, n) { return xt.get(t, e, n, "json") },
            getScript: function(t, e) { return xt.get(t, void 0, e, "script") }
        }), xt.each(["get", "post"], function(t, e) { xt[e] = function(t, n, i, r) { return _t(n) && (r = r || i, i = n, n = void 0), xt.ajax(xt.extend({ url: t, type: e, dataType: r, data: n, success: i }, xt.isPlainObject(t) && t)) } }), xt._evalUrl = function(t) { return xt.ajax({ url: t, type: "GET", dataType: "script", cache: !0, async: !1, global: !1, "throws": !0 }) }, xt.fn.extend({
            wrapAll: function(t) { var e; return this[0] && (_t(t) && (t = t.call(this[0])), e = xt(t, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && e.insertBefore(this[0]), e.map(function() { for (var t = this; t.firstElementChild;) t = t.firstElementChild; return t }).append(this)), this },
            wrapInner: function(t) {
                return _t(t) ? this.each(function(e) { xt(this).wrapInner(t.call(this, e)) }) : this.each(function() {
                    var e = xt(this),
                        n = e.contents();
                    n.length ? n.wrapAll(t) : e.append(t)
                })
            },
            wrap: function(t) { var e = _t(t); return this.each(function(n) { xt(this).wrapAll(e ? t.call(this, n) : t) }) },
            unwrap: function(t) { return this.parent(t).not("body").each(function() { xt(this).replaceWith(this.childNodes) }), this }
        }), xt.expr.pseudos.hidden = function(t) { return !xt.expr.pseudos.visible(t) }, xt.expr.pseudos.visible = function(t) { return !!(t.offsetWidth || t.offsetHeight || t.getClientRects().length) }, xt.ajaxSettings.xhr = function() { try { return new n.XMLHttpRequest } catch (t) {} };
        var Je = { 0: 200, 1223: 204 },
            Ze = xt.ajaxSettings.xhr();
        St.cors = !!Ze && "withCredentials" in Ze, St.ajax = Ze = !!Ze, xt.ajaxTransport(function(t) {
            var e, i;
            if (St.cors || Ze && !t.crossDomain) return {
                send: function(r, o) {
                    var s, a = t.xhr();
                    if (a.open(t.type, t.url, t.async, t.username, t.password), t.xhrFields)
                        for (s in t.xhrFields) a[s] = t.xhrFields[s];
                    t.mimeType && a.overrideMimeType && a.overrideMimeType(t.mimeType), t.crossDomain || r["X-Requested-With"] || (r["X-Requested-With"] = "XMLHttpRequest");
                    for (s in r) a.setRequestHeader(s, r[s]);
                    e = function(t) { return function() { e && (e = i = a.onload = a.onerror = a.onabort = a.ontimeout = a.onreadystatechange = null, "abort" === t ? a.abort() : "error" === t ? "number" != typeof a.status ? o(0, "error") : o(a.status, a.statusText) : o(Je[a.status] || a.status, a.statusText, "text" !== (a.responseType || "text") || "string" != typeof a.responseText ? { binary: a.response } : { text: a.responseText }, a.getAllResponseHeaders())) } }, a.onload = e(), i = a.onerror = a.ontimeout = e("error"), void 0 !== a.onabort ? a.onabort = i : a.onreadystatechange = function() { 4 === a.readyState && n.setTimeout(function() { e && i() }) }, e = e("abort");
                    try { a.send(t.hasContent && t.data || null) } catch (l) { if (e) throw l }
                },
                abort: function() { e && e() }
            }
        }), xt.ajaxPrefilter(function(t) { t.crossDomain && (t.contents.script = !1) }), xt.ajaxSetup({ accepts: { script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript" }, contents: { script: /\b(?:java|ecma)script\b/ }, converters: { "text script": function(t) { return xt.globalEval(t), t } } }), xt.ajaxPrefilter("script", function(t) { void 0 === t.cache && (t.cache = !1), t.crossDomain && (t.type = "GET") }), xt.ajaxTransport("script", function(t) { if (t.crossDomain) { var e, n; return { send: function(i, r) { e = xt("<script>").prop({ charset: t.scriptCharset, src: t.url }).on("load error", n = function(t) { e.remove(), n = null, t && r("error" === t.type ? 404 : 200, t.type) }), ct.head.appendChild(e[0]) }, abort: function() { n && n() } } } });
        var tn = [],
            en = /(=)\?(?=&|$)|\?\?/;
        xt.ajaxSetup({ jsonp: "callback", jsonpCallback: function() { var t = tn.pop() || xt.expando + "_" + $e++; return this[t] = !0, t } }), xt.ajaxPrefilter("json jsonp", function(t, e, i) { var r, o, s, a = t.jsonp !== !1 && (en.test(t.url) ? "url" : "string" == typeof t.data && 0 === (t.contentType || "").indexOf("application/x-www-form-urlencoded") && en.test(t.data) && "data"); if (a || "jsonp" === t.dataTypes[0]) return r = t.jsonpCallback = _t(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback, a ? t[a] = t[a].replace(en, "$1" + r) : t.jsonp !== !1 && (t.url += (He.test(t.url) ? "&" : "?") + t.jsonp + "=" + r), t.converters["script json"] = function() { return s || xt.error(r + " was not called"), s[0] }, t.dataTypes[0] = "json", o = n[r], n[r] = function() { s = arguments }, i.always(function() { void 0 === o ? xt(n).removeProp(r) : n[r] = o, t[r] && (t.jsonpCallback = e.jsonpCallback, tn.push(r)), s && _t(o) && o(s[0]), s = o = void 0 }), "script" }), St.createHTMLDocument = function() { var t = ct.implementation.createHTMLDocument("").body; return t.innerHTML = "<form></form><form></form>", 2 === t.childNodes.length }(), xt.parseHTML = function(t, e, n) { if ("string" != typeof t) return []; "boolean" == typeof e && (n = e, e = !1); var i, r, o; return e || (St.createHTMLDocument ? (e = ct.implementation.createHTMLDocument(""), i = e.createElement("base"), i.href = ct.location.href, e.head.appendChild(i)) : e = ct), r = Dt.exec(t), o = !n && [], r ? [e.createElement(r[1])] : (r = k([t], e, o), o && o.length && xt(o).remove(), xt.merge([], r.childNodes)) }, xt.fn.load = function(t, e, n) {
            var i, r, o, s = this,
                a = t.indexOf(" ");
            return a > -1 && (i = tt(t.slice(a)), t = t.slice(0, a)), _t(e) ? (n = e, e = void 0) : e && "object" == typeof e && (r = "POST"), s.length > 0 && xt.ajax({ url: t, type: r || "GET", dataType: "html", data: e }).done(function(t) { o = arguments, s.html(i ? xt("<div>").append(xt.parseHTML(t)).find(i) : t) }).always(n && function(t, e) { s.each(function() { n.apply(this, o || [t.responseText, e, t]) }) }), this
        }, xt.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(t, e) { xt.fn[e] = function(t) { return this.on(e, t) } }), xt.expr.pseudos.animated = function(t) { return xt.grep(xt.timers, function(e) { return t === e.elem }).length }, xt.offset = {
            setOffset: function(t, e, n) {
                var i, r, o, s, a, l, u, c = xt.css(t, "position"),
                    d = xt(t),
                    f = {};
                "static" === c && (t.style.position = "relative"), a = d.offset(), o = xt.css(t, "top"), l = xt.css(t, "left"), u = ("absolute" === c || "fixed" === c) && (o + l).indexOf("auto") > -1, u ? (i = d.position(), s = i.top, r = i.left) : (s = parseFloat(o) || 0, r = parseFloat(l) || 0), _t(e) && (e = e.call(t, n, xt.extend({}, a))), null != e.top && (f.top = e.top - a.top + s), null != e.left && (f.left = e.left - a.left + r), "using" in e ? e.using.call(t, f) : d.css(f)
            }
        }, xt.fn.extend({
            offset: function(t) { if (arguments.length) return void 0 === t ? this : this.each(function(e) { xt.offset.setOffset(this, t, e) }); var e, n, i = this[0]; if (i) return i.getClientRects().length ? (e = i.getBoundingClientRect(), n = i.ownerDocument.defaultView, { top: e.top + n.pageYOffset, left: e.left + n.pageXOffset }) : { top: 0, left: 0 } },
            position: function() {
                if (this[0]) {
                    var t, e, n, i = this[0],
                        r = { top: 0, left: 0 };
                    if ("fixed" === xt.css(i, "position")) e = i.getBoundingClientRect();
                    else {
                        for (e = this.offset(), n = i.ownerDocument, t = i.offsetParent || n.documentElement; t && (t === n.body || t === n.documentElement) && "static" === xt.css(t, "position");) t = t.parentNode;
                        t && t !== i && 1 === t.nodeType && (r = xt(t).offset(), r.top += xt.css(t, "borderTopWidth", !0), r.left += xt.css(t, "borderLeftWidth", !0))
                    }
                    return { top: e.top - r.top - xt.css(i, "marginTop", !0), left: e.left - r.left - xt.css(i, "marginLeft", !0) }
                }
            },
            offsetParent: function() { return this.map(function() { for (var t = this.offsetParent; t && "static" === xt.css(t, "position");) t = t.offsetParent; return t || se }) }
        }), xt.each({ scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function(t, e) {
            var n = "pageYOffset" === e;
            xt.fn[t] = function(i) { return Bt(this, function(t, i, r) { var o; return Ct(t) ? o = t : 9 === t.nodeType && (o = t.defaultView), void 0 === r ? o ? o[e] : t[i] : void(o ? o.scrollTo(n ? o.pageXOffset : r, n ? r : o.pageYOffset) : t[i] = r) }, t, i, arguments.length) }
        }), xt.each(["top", "left"], function(t, e) { xt.cssHooks[e] = R(St.pixelPosition, function(t, n) { if (n) return n = W(t, e), pe.test(n) ? xt(t).position()[e] + "px" : n }) }), xt.each({ Height: "height", Width: "width" }, function(t, e) {
            xt.each({ padding: "inner" + t, content: e, "": "outer" + t }, function(n, i) {
                xt.fn[i] = function(r, o) {
                    var s = arguments.length && (n || "boolean" != typeof r),
                        a = n || (r === !0 || o === !0 ? "margin" : "border");
                    return Bt(this, function(e, n, r) { var o; return Ct(e) ? 0 === i.indexOf("outer") ? e["inner" + t] : e.document.documentElement["client" + t] : 9 === e.nodeType ? (o = e.documentElement, Math.max(e.body["scroll" + t], o["scroll" + t], e.body["offset" + t], o["offset" + t], o["client" + t])) : void 0 === r ? xt.css(e, n, a) : xt.style(e, n, r, a) }, e, s ? r : void 0, s)
                }
            })
        }), xt.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function(t, e) { xt.fn[e] = function(t, n) { return arguments.length > 0 ? this.on(e, null, t, n) : this.trigger(e) } }), xt.fn.extend({ hover: function(t, e) { return this.mouseenter(t).mouseleave(e || t) } }), xt.fn.extend({ bind: function(t, e, n) { return this.on(t, null, e, n) }, unbind: function(t, e) { return this.off(t, null, e) }, delegate: function(t, e, n, i) { return this.on(e, t, n, i) }, undelegate: function(t, e, n) { return 1 === arguments.length ? this.off(t, "**") : this.off(e, t || "**", n) } }), xt.proxy = function(t, e) { var n, i, r; if ("string" == typeof e && (n = t[e], e = t, t = n), _t(t)) return i = ft.call(arguments, 2), r = function() { return t.apply(e || this, i.concat(ft.call(arguments))) }, r.guid = t.guid = t.guid || xt.guid++, r }, xt.holdReady = function(t) { t ? xt.readyWait++ : xt.ready(!0) }, xt.isArray = Array.isArray, xt.parseJSON = JSON.parse, xt.nodeName = u, xt.isFunction = _t, xt.isWindow = Ct, xt.camelCase = y, xt.type = a, xt.now = Date.now, xt.isNumeric = function(t) { var e = xt.type(t); return ("number" === e || "string" === e) && !isNaN(t - parseFloat(t)) }, i = [], r = function() { return xt }.apply(e, i), !(void 0 !== r && (t.exports = r));
        var nn = n.jQuery,
            rn = n.$;
        return xt.noConflict = function(t) { return n.$ === xt && (n.$ = rn), t && n.jQuery === xt && (n.jQuery = nn), xt }, o || (n.jQuery = n.$ = xt), xt
    })
}, function(t, e, n) {
    var i, r;
    ! function(o, s) { i = s, r = "function" == typeof i ? i.call(e, n, e, t) : i, !(void 0 !== r && (t.exports = r)) }(this, function() {
        function t(t, e, n) { return t < e ? e : t > n ? n : t }

        function e(t) { return 100 * (-1 + t) }

        function n(t, n, i) { var r; return r = "translate3d" === u.positionUsing ? { transform: "translate3d(" + e(t) + "%,0,0)" } : "translate" === u.positionUsing ? { transform: "translate(" + e(t) + "%,0)" } : { "margin-left": e(t) + "%" }, r.transition = "all " + n + "ms " + i, r }

        function i(t, e) { var n = "string" == typeof t ? t : s(t); return n.indexOf(" " + e + " ") >= 0 }

        function r(t, e) {
            var n = s(t),
                r = n + e;
            i(n, e) || (t.className = r.substring(1))
        }

        function o(t, e) {
            var n, r = s(t);
            i(t, e) && (n = r.replace(" " + e + " ", " "), t.className = n.substring(1, n.length - 1))
        }

        function s(t) { return (" " + (t.className || "") + " ").replace(/\s+/gi, " ") }

        function a(t) { t && t.parentNode && t.parentNode.removeChild(t) }
        var l = {};
        l.version = "0.2.0";
        var u = l.settings = { minimum: .08, easing: "ease", positionUsing: "", speed: 200, trickle: !0, trickleRate: .02, trickleSpeed: 800, showSpinner: !0, barSelector: '[role="bar"]', spinnerSelector: '[role="spinner"]', parent: "body", template: '<div class="bar" role="bar"><div class="peg"></div></div><div class="spinner" role="spinner"><div class="spinner-icon"></div></div>' };
        l.configure = function(t) { var e, n; for (e in t) n = t[e], void 0 !== n && t.hasOwnProperty(e) && (u[e] = n); return this }, l.status = null, l.set = function(e) {
                var i = l.isStarted();
                e = t(e, u.minimum, 1), l.status = 1 === e ? null : e;
                var r = l.render(!i),
                    o = r.querySelector(u.barSelector),
                    s = u.speed,
                    a = u.easing;
                return r.offsetWidth, c(function(t) { "" === u.positionUsing && (u.positionUsing = l.getPositioningCSS()), d(o, n(e, s, a)), 1 === e ? (d(r, { transition: "none", opacity: 1 }), r.offsetWidth, setTimeout(function() { d(r, { transition: "all " + s + "ms linear", opacity: 0 }), setTimeout(function() { l.remove(), t() }, s) }, s)) : setTimeout(t, s) }), this
            }, l.isStarted = function() { return "number" == typeof l.status }, l.start = function() { l.status || l.set(0); var t = function() { setTimeout(function() { l.status && (l.trickle(), t()) }, u.trickleSpeed) }; return u.trickle && t(), this }, l.done = function(t) { return t || l.status ? l.inc(.3 + .5 * Math.random()).set(1) : this }, l.inc = function(e) { var n = l.status; return n ? ("number" != typeof e && (e = (1 - n) * t(Math.random() * n, .1, .95)), n = t(n + e, 0, .994), l.set(n)) : l.start() }, l.trickle = function() { return l.inc(Math.random() * u.trickleRate) },
            function() {
                var t = 0,
                    e = 0;
                l.promise = function(n) { return n && "resolved" !== n.state() ? (0 === e && l.start(), t++, e++, n.always(function() { e--, 0 === e ? (t = 0, l.done()) : l.set((t - e) / t) }), this) : this }
            }(), l.render = function(t) {
                if (l.isRendered()) return document.getElementById("nprogress");
                r(document.documentElement, "nprogress-busy");
                var n = document.createElement("div");
                n.id = "nprogress", n.innerHTML = u.template;
                var i, o = n.querySelector(u.barSelector),
                    s = t ? "-100" : e(l.status || 0),
                    c = document.querySelector(u.parent);
                return d(o, { transition: "all 0 linear", transform: "translate3d(" + s + "%,0,0)" }), u.showSpinner || (i = n.querySelector(u.spinnerSelector), i && a(i)), c != document.body && r(c, "nprogress-custom-parent"), c.appendChild(n), n
            }, l.remove = function() {
                o(document.documentElement, "nprogress-busy"), o(document.querySelector(u.parent), "nprogress-custom-parent");
                var t = document.getElementById("nprogress");
                t && a(t)
            }, l.isRendered = function() { return !!document.getElementById("nprogress") }, l.getPositioningCSS = function() {
                var t = document.body.style,
                    e = "WebkitTransform" in t ? "Webkit" : "MozTransform" in t ? "Moz" : "msTransform" in t ? "ms" : "OTransform" in t ? "O" : "";
                return e + "Perspective" in t ? "translate3d" : e + "Transform" in t ? "translate" : "margin"
            };
        var c = function() {
                function t() {
                    var n = e.shift();
                    n && n(t)
                }
                var e = [];
                return function(n) { e.push(n), 1 == e.length && t() }
            }(),
            d = function() {
                function t(t) { return t.replace(/^-ms-/, "ms-").replace(/-([\da-z])/gi, function(t, e) { return e.toUpperCase() }) }

                function e(t) {
                    var e = document.body.style;
                    if (t in e) return t;
                    for (var n, i = r.length, o = t.charAt(0).toUpperCase() + t.slice(1); i--;)
                        if (n = r[i] + o, n in e) return n;
                    return t
                }

                function n(n) { return n = t(n), o[n] || (o[n] = e(n)) }

                function i(t, e, i) { e = n(e), t.style[e] = i }
                var r = ["Webkit", "O", "Moz", "ms"],
                    o = {};
                return function(t, e) {
                    var n, r, o = arguments;
                    if (2 == o.length)
                        for (n in e) r = e[n], void 0 !== r && e.hasOwnProperty(n) && i(t, n, r);
                    else i(t, o[1], o[2])
                }
            }();
        return l
    })
}, function(t, e, n) {
    var i, r;
    ! function(o, s) { i = s, r = "function" == typeof i ? i.call(e, n, e, t) : i, !(void 0 !== r && (t.exports = r)) }(window, function() {
        "use strict";

        function t(t) {
            var e = parseFloat(t),
                n = t.indexOf("%") == -1 && !isNaN(e);
            return n && e
        }

        function e() {}

        function n() {
            for (var t = { width: 0, height: 0, innerWidth: 0, innerHeight: 0, outerWidth: 0, outerHeight: 0 }, e = 0; e < u; e++) {
                var n = l[e];
                t[n] = 0
            }
            return t
        }

        function i(t) { var e = getComputedStyle(t); return e || a("Style returned " + e + ". Are you running this code in a hidden iframe on Firefox? See https://bit.ly/getsizebug1"), e }

        function r() {
            if (!c) {
                c = !0;
                var e = document.createElement("div");
                e.style.width = "200px", e.style.padding = "1px 2px 3px 4px", e.style.borderStyle = "solid", e.style.borderWidth = "1px 2px 3px 4px", e.style.boxSizing = "border-box";
                var n = document.body || document.documentElement;
                n.appendChild(e);
                var r = i(e);
                s = 200 == Math.round(t(r.width)), o.isBoxSizeOuter = s, n.removeChild(e)
            }
        }

        function o(e) {
            if (r(), "string" == typeof e && (e = document.querySelector(e)), e && "object" == typeof e && e.nodeType) {
                var o = i(e);
                if ("none" == o.display) return n();
                var a = {};
                a.width = e.offsetWidth, a.height = e.offsetHeight;
                for (var c = a.isBorderBox = "border-box" == o.boxSizing, d = 0; d < u; d++) {
                    var f = l[d],
                        h = o[f],
                        p = parseFloat(h);
                    a[f] = isNaN(p) ? 0 : p
                }
                var g = a.paddingLeft + a.paddingRight,
                    m = a.paddingTop + a.paddingBottom,
                    v = a.marginLeft + a.marginRight,
                    y = a.marginTop + a.marginBottom,
                    b = a.borderLeftWidth + a.borderRightWidth,
                    w = a.borderTopWidth + a.borderBottomWidth,
                    S = c && s,
                    _ = t(o.width);
                _ !== !1 && (a.width = _ + (S ? 0 : g + b));
                var C = t(o.height);
                return C !== !1 && (a.height = C + (S ? 0 : m + w)), a.innerWidth = a.width - (g + b), a.innerHeight = a.height - (m + w), a.outerWidth = a.width + v, a.outerHeight = a.height + y, a
            }
        }
        var s, a = "undefined" == typeof console ? e : function(t) { console.error(t) },
            l = ["paddingLeft", "paddingRight", "paddingTop", "paddingBottom", "marginLeft", "marginRight", "marginTop", "marginBottom", "borderLeftWidth", "borderRightWidth", "borderTopWidth", "borderBottomWidth"],
            u = l.length,
            c = !1;
        return o
    })
}, function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 }),
        function(t) {
            function n(t) { var e = !1; return function() { e || (e = !0, window.Promise.resolve().then(function() { e = !1, t() })) } }

            function i(t) { var e = !1; return function() { e || (e = !0, setTimeout(function() { e = !1, t() }, ft)) } }

            function r(t) { var e = {}; return t && "[object Function]" === e.toString.call(t) }

            function o(t, e) {
                if (1 !== t.nodeType) return [];
                var n = t.ownerDocument.defaultView,
                    i = n.getComputedStyle(t, null);
                return e ? i[e] : i
            }

            function s(t) { return "HTML" === t.nodeName ? t : t.parentNode || t.host }

            function a(t) {
                if (!t) return document.body;
                switch (t.nodeName) {
                    case "HTML":
                    case "BODY":
                        return t.ownerDocument.body;
                    case "#document":
                        return t.body
                }
                var e = o(t),
                    n = e.overflow,
                    i = e.overflowX,
                    r = e.overflowY;
                return /(auto|scroll|overlay)/.test(n + r + i) ? t : a(s(t))
            }

            function l(t) { return 11 === t ? mt : 10 === t ? vt : mt || vt }

            function u(t) { if (!t) return document.documentElement; for (var e = l(10) ? document.body : null, n = t.offsetParent || null; n === e && t.nextElementSibling;) n = (t = t.nextElementSibling).offsetParent; var i = n && n.nodeName; return i && "BODY" !== i && "HTML" !== i ? ["TH", "TD", "TABLE"].indexOf(n.nodeName) !== -1 && "static" === o(n, "position") ? u(n) : n : t ? t.ownerDocument.documentElement : document.documentElement }

            function c(t) { var e = t.nodeName; return "BODY" !== e && ("HTML" === e || u(t.firstElementChild) === t) }

            function d(t) { return null !== t.parentNode ? d(t.parentNode) : t }

            function f(t, e) {
                if (!(t && t.nodeType && e && e.nodeType)) return document.documentElement;
                var n = t.compareDocumentPosition(e) & Node.DOCUMENT_POSITION_FOLLOWING,
                    i = n ? t : e,
                    r = n ? e : t,
                    o = document.createRange();
                o.setStart(i, 0), o.setEnd(r, 0);
                var s = o.commonAncestorContainer;
                if (t !== s && e !== s || i.contains(r)) return c(s) ? s : u(s);
                var a = d(t);
                return a.host ? f(a.host, e) : f(t, d(e).host)
            }

            function h(t) {
                var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "top",
                    n = "top" === e ? "scrollTop" : "scrollLeft",
                    i = t.nodeName;
                if ("BODY" === i || "HTML" === i) {
                    var r = t.ownerDocument.documentElement,
                        o = t.ownerDocument.scrollingElement || r;
                    return o[n]
                }
                return t[n]
            }

            function p(t, e) {
                var n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                    i = h(e, "top"),
                    r = h(e, "left"),
                    o = n ? -1 : 1;
                return t.top += i * o, t.bottom += i * o, t.left += r * o, t.right += r * o, t
            }

            function g(t, e) {
                var n = "x" === e ? "Left" : "Top",
                    i = "Left" === n ? "Right" : "Bottom";
                return parseFloat(t["border" + n + "Width"], 10) + parseFloat(t["border" + i + "Width"], 10)
            }

            function m(t, e, n, i) { return Math.max(e["offset" + t], e["scroll" + t], n["client" + t], n["offset" + t], n["scroll" + t], l(10) ? parseInt(n["offset" + t]) + parseInt(i["margin" + ("Height" === t ? "Top" : "Left")]) + parseInt(i["margin" + ("Height" === t ? "Bottom" : "Right")]) : 0) }

            function v(t) {
                var e = t.body,
                    n = t.documentElement,
                    i = l(10) && getComputedStyle(n);
                return { height: m("Height", e, n, i), width: m("Width", e, n, i) }
            }

            function y(t) { return St({}, t, { right: t.left + t.width, bottom: t.top + t.height }) }

            function b(t) {
                var e = {};
                try {
                    if (l(10)) {
                        e = t.getBoundingClientRect();
                        var n = h(t, "top"),
                            i = h(t, "left");
                        e.top += n, e.left += i, e.bottom += n, e.right += i
                    } else e = t.getBoundingClientRect()
                } catch (r) {}
                var s = { left: e.left, top: e.top, width: e.right - e.left, height: e.bottom - e.top },
                    a = "HTML" === t.nodeName ? v(t.ownerDocument) : {},
                    u = a.width || t.clientWidth || s.right - s.left,
                    c = a.height || t.clientHeight || s.bottom - s.top,
                    d = t.offsetWidth - u,
                    f = t.offsetHeight - c;
                if (d || f) {
                    var p = o(t);
                    d -= g(p, "x"), f -= g(p, "y"), s.width -= d, s.height -= f
                }
                return y(s)
            }

            function w(t, e) {
                var n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                    i = l(10),
                    r = "HTML" === e.nodeName,
                    s = b(t),
                    u = b(e),
                    c = a(t),
                    d = o(e),
                    f = parseFloat(d.borderTopWidth, 10),
                    h = parseFloat(d.borderLeftWidth, 10);
                n && r && (u.top = Math.max(u.top, 0), u.left = Math.max(u.left, 0));
                var g = y({ top: s.top - u.top - f, left: s.left - u.left - h, width: s.width, height: s.height });
                if (g.marginTop = 0, g.marginLeft = 0, !i && r) {
                    var m = parseFloat(d.marginTop, 10),
                        v = parseFloat(d.marginLeft, 10);
                    g.top -= f - m, g.bottom -= f - m, g.left -= h - v, g.right -= h - v, g.marginTop = m, g.marginLeft = v
                }
                return (i && !n ? e.contains(c) : e === c && "BODY" !== c.nodeName) && (g = p(g, e)), g
            }

            function S(t) {
                var e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                    n = t.ownerDocument.documentElement,
                    i = w(t, n),
                    r = Math.max(n.clientWidth, window.innerWidth || 0),
                    o = Math.max(n.clientHeight, window.innerHeight || 0),
                    s = e ? 0 : h(n),
                    a = e ? 0 : h(n, "left"),
                    l = { top: s - i.top + i.marginTop, left: a - i.left + i.marginLeft, width: r, height: o };
                return y(l)
            }

            function _(t) { var e = t.nodeName; if ("BODY" === e || "HTML" === e) return !1; if ("fixed" === o(t, "position")) return !0; var n = s(t); return !!n && _(n) }

            function C(t) { if (!t || !t.parentElement || l()) return document.documentElement; for (var e = t.parentElement; e && "none" === o(e, "transform");) e = e.parentElement; return e || document.documentElement }

            function T(t, e, n, i) {
                var r = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
                    o = { top: 0, left: 0 },
                    l = r ? C(t) : f(t, e);
                if ("viewport" === i) o = S(l, r);
                else {
                    var u = void 0;
                    "scrollParent" === i ? (u = a(s(e)), "BODY" === u.nodeName && (u = t.ownerDocument.documentElement)) : u = "window" === i ? t.ownerDocument.documentElement : i;
                    var c = w(u, l, r);
                    if ("HTML" !== u.nodeName || _(l)) o = c;
                    else {
                        var d = v(t.ownerDocument),
                            h = d.height,
                            p = d.width;
                        o.top += c.top - c.marginTop, o.bottom = h + c.top, o.left += c.left - c.marginLeft, o.right = p + c.left
                    }
                }
                n = n || 0;
                var g = "number" == typeof n;
                return o.left += g ? n : n.left || 0, o.top += g ? n : n.top || 0, o.right -= g ? n : n.right || 0, o.bottom -= g ? n : n.bottom || 0, o
            }

            function E(t) {
                var e = t.width,
                    n = t.height;
                return e * n
            }

            function x(t, e, n, i, r) {
                var o = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0;
                if (t.indexOf("auto") === -1) return t;
                var s = T(n, i, o, r),
                    a = { top: { width: s.width, height: e.top - s.top }, right: { width: s.right - e.right, height: s.height }, bottom: { width: s.width, height: s.bottom - e.bottom }, left: { width: e.left - s.left, height: s.height } },
                    l = Object.keys(a).map(function(t) { return St({ key: t }, a[t], { area: E(a[t]) }) }).sort(function(t, e) { return e.area - t.area }),
                    u = l.filter(function(t) {
                        var e = t.width,
                            i = t.height;
                        return e >= n.clientWidth && i >= n.clientHeight
                    }),
                    c = u.length > 0 ? u[0].key : l[0].key,
                    d = t.split("-")[1];
                return c + (d ? "-" + d : "")
            }

            function k(t, e, n) {
                var i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
                    r = i ? C(e) : f(e, n);
                return w(n, r, i)
            }

            function O(t) {
                var e = t.ownerDocument.defaultView,
                    n = e.getComputedStyle(t),
                    i = parseFloat(n.marginTop || 0) + parseFloat(n.marginBottom || 0),
                    r = parseFloat(n.marginLeft || 0) + parseFloat(n.marginRight || 0),
                    o = { width: t.offsetWidth + r, height: t.offsetHeight + i };
                return o
            }

            function I(t) { var e = { left: "right", right: "left", bottom: "top", top: "bottom" }; return t.replace(/left|right|bottom|top/g, function(t) { return e[t] }) }

            function A(t, e, n) {
                n = n.split("-")[0];
                var i = O(t),
                    r = { width: i.width, height: i.height },
                    o = ["right", "left"].indexOf(n) !== -1,
                    s = o ? "top" : "left",
                    a = o ? "left" : "top",
                    l = o ? "height" : "width",
                    u = o ? "width" : "height";
                return r[s] = e[s] + e[l] / 2 - i[l] / 2, n === a ? r[a] = e[a] - i[u] : r[a] = e[I(a)], r
            }

            function P(t, e) { return Array.prototype.find ? t.find(e) : t.filter(e)[0] }

            function D(t, e, n) { if (Array.prototype.findIndex) return t.findIndex(function(t) { return t[e] === n }); var i = P(t, function(t) { return t[e] === n }); return t.indexOf(i) }

            function L(t, e, n) {
                var i = void 0 === n ? t : t.slice(0, D(t, "name", n));
                return i.forEach(function(t) {
                    t["function"] && console.warn("`modifier.function` is deprecated, use `modifier.fn`!");
                    var n = t["function"] || t.fn;
                    t.enabled && r(n) && (e.offsets.popper = y(e.offsets.popper), e.offsets.reference = y(e.offsets.reference), e = n(e, t))
                }), e
            }

            function N() {
                if (!this.state.isDestroyed) {
                    var t = { instance: this, styles: {}, arrowStyles: {}, attributes: {}, flipped: !1, offsets: {} };
                    t.offsets.reference = k(this.state, this.popper, this.reference, this.options.positionFixed), t.placement = x(this.options.placement, t.offsets.reference, this.popper, this.reference, this.options.modifiers.flip.boundariesElement, this.options.modifiers.flip.padding), t.originalPlacement = t.placement, t.positionFixed = this.options.positionFixed, t.offsets.popper = A(this.popper, t.offsets.reference, t.placement), t.offsets.popper.position = this.options.positionFixed ? "fixed" : "absolute", t = L(this.modifiers, t), this.state.isCreated ? this.options.onUpdate(t) : (this.state.isCreated = !0, this.options.onCreate(t))
                }
            }

            function $(t, e) {
                return t.some(function(t) {
                    var n = t.name,
                        i = t.enabled;
                    return i && n === e
                })
            }

            function H(t) {
                for (var e = [!1, "ms", "Webkit", "Moz", "O"], n = t.charAt(0).toUpperCase() + t.slice(1), i = 0; i < e.length; i++) {
                    var r = e[i],
                        o = r ? "" + r + n : t;
                    if ("undefined" != typeof document.body.style[o]) return o
                }
                return null
            }

            function M() { return this.state.isDestroyed = !0, $(this.modifiers, "applyStyle") && (this.popper.removeAttribute("x-placement"), this.popper.style.position = "", this.popper.style.top = "", this.popper.style.left = "", this.popper.style.right = "", this.popper.style.bottom = "", this.popper.style.willChange = "", this.popper.style[H("transform")] = ""), this.disableEventListeners(), this.options.removeOnDestroy && this.popper.parentNode.removeChild(this.popper), this }

            function j(t) { var e = t.ownerDocument; return e ? e.defaultView : window }

            function W(t, e, n, i) {
                var r = "BODY" === t.nodeName,
                    o = r ? t.ownerDocument.defaultView : t;
                o.addEventListener(e, n, { passive: !0 }), r || W(a(o.parentNode), e, n, i), i.push(o)
            }

            function R(t, e, n, i) { n.updateBound = i, j(t).addEventListener("resize", n.updateBound, { passive: !0 }); var r = a(t); return W(r, "scroll", n.updateBound, n.scrollParents), n.scrollElement = r, n.eventsEnabled = !0, n }

            function B() { this.state.eventsEnabled || (this.state = R(this.reference, this.options, this.state, this.scheduleUpdate)) }

            function z(t, e) { return j(t).removeEventListener("resize", e.updateBound), e.scrollParents.forEach(function(t) { t.removeEventListener("scroll", e.updateBound) }), e.updateBound = null, e.scrollParents = [], e.scrollElement = null, e.eventsEnabled = !1, e }

            function F() { this.state.eventsEnabled && (cancelAnimationFrame(this.scheduleUpdate), this.state = z(this.reference, this.state)) }

            function q(t) { return "" !== t && !isNaN(parseFloat(t)) && isFinite(t) }

            function U(t, e) {
                Object.keys(e).forEach(function(n) {
                    var i = "";
                    ["width", "height", "top", "right", "bottom", "left"].indexOf(n) !== -1 && q(e[n]) && (i = "px"), t.style[n] = e[n] + i
                })
            }

            function V(t, e) {
                Object.keys(e).forEach(function(n) {
                    var i = e[n];
                    i !== !1 ? t.setAttribute(n, e[n]) : t.removeAttribute(n)
                })
            }

            function G(t) { return U(t.instance.popper, t.styles), V(t.instance.popper, t.attributes), t.arrowElement && Object.keys(t.arrowStyles).length && U(t.arrowElement, t.arrowStyles), t }

            function Q(t, e, n, i, r) {
                var o = k(r, e, t, n.positionFixed),
                    s = x(n.placement, o, e, t, n.modifiers.flip.boundariesElement, n.modifiers.flip.padding);
                return e.setAttribute("x-placement", s), U(e, { position: n.positionFixed ? "fixed" : "absolute" }), n
            }

            function Y(t, e) {
                var n = t.offsets,
                    i = n.popper,
                    r = n.reference,
                    o = Math.round,
                    s = Math.floor,
                    a = function(t) { return t },
                    l = o(r.width),
                    u = o(i.width),
                    c = ["left", "right"].indexOf(t.placement) !== -1,
                    d = t.placement.indexOf("-") !== -1,
                    f = l % 2 === u % 2,
                    h = l % 2 === 1 && u % 2 === 1,
                    p = e ? c || d || f ? o : s : a,
                    g = e ? o : a;
                return { left: p(h && !d && e ? i.left - 1 : i.left), top: g(i.top), bottom: g(i.bottom), right: p(i.right) }
            }

            function X(t, e) {
                var n = e.x,
                    i = e.y,
                    r = t.offsets.popper,
                    o = P(t.instance.modifiers, function(t) { return "applyStyle" === t.name }).gpuAcceleration;
                void 0 !== o && console.warn("WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!");
                var s = void 0 !== o ? o : e.gpuAcceleration,
                    a = u(t.instance.popper),
                    l = b(a),
                    c = { position: r.position },
                    d = Y(t, window.devicePixelRatio < 2 || !_t),
                    f = "bottom" === n ? "top" : "bottom",
                    h = "right" === i ? "left" : "right",
                    p = H("transform"),
                    g = void 0,
                    m = void 0;
                if (m = "bottom" === f ? "HTML" === a.nodeName ? -a.clientHeight + d.bottom : -l.height + d.bottom : d.top, g = "right" === h ? "HTML" === a.nodeName ? -a.clientWidth + d.right : -l.width + d.right : d.left, s && p) c[p] = "translate3d(" + g + "px, " + m + "px, 0)", c[f] = 0, c[h] = 0, c.willChange = "transform";
                else {
                    var v = "bottom" === f ? -1 : 1,
                        y = "right" === h ? -1 : 1;
                    c[f] = m * v, c[h] = g * y, c.willChange = f + ", " + h
                }
                var w = { "x-placement": t.placement };
                return t.attributes = St({}, w, t.attributes), t.styles = St({}, c, t.styles), t.arrowStyles = St({}, t.offsets.arrow, t.arrowStyles), t
            }

            function K(t, e, n) {
                var i = P(t, function(t) { var n = t.name; return n === e }),
                    r = !!i && t.some(function(t) { return t.name === n && t.enabled && t.order < i.order });
                if (!r) {
                    var o = "`" + e + "`",
                        s = "`" + n + "`";
                    console.warn(s + " modifier is required by " + o + " modifier in order to work, be sure to include it before " + o + "!")
                }
                return r
            }

            function J(t, e) {
                var n;
                if (!K(t.instance.modifiers, "arrow", "keepTogether")) return t;
                var i = e.element;
                if ("string" == typeof i) { if (i = t.instance.popper.querySelector(i), !i) return t } else if (!t.instance.popper.contains(i)) return console.warn("WARNING: `arrow.element` must be child of its popper element!"), t;
                var r = t.placement.split("-")[0],
                    s = t.offsets,
                    a = s.popper,
                    l = s.reference,
                    u = ["left", "right"].indexOf(r) !== -1,
                    c = u ? "height" : "width",
                    d = u ? "Top" : "Left",
                    f = d.toLowerCase(),
                    h = u ? "left" : "top",
                    p = u ? "bottom" : "right",
                    g = O(i)[c];
                l[p] - g < a[f] && (t.offsets.popper[f] -= a[f] - (l[p] - g)), l[f] + g > a[p] && (t.offsets.popper[f] += l[f] + g - a[p]), t.offsets.popper = y(t.offsets.popper);
                var m = l[f] + l[c] / 2 - g / 2,
                    v = o(t.instance.popper),
                    b = parseFloat(v["margin" + d], 10),
                    w = parseFloat(v["border" + d + "Width"], 10),
                    S = m - t.offsets.popper[f] - b - w;
                return S = Math.max(Math.min(a[c] - g, S), 0), t.arrowElement = i, t.offsets.arrow = (n = {}, wt(n, f, Math.round(S)), wt(n, h, ""), n), t
            }

            function Z(t) { return "end" === t ? "start" : "start" === t ? "end" : t }

            function tt(t) {
                var e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                    n = Tt.indexOf(t),
                    i = Tt.slice(n + 1).concat(Tt.slice(0, n));
                return e ? i.reverse() : i
            }

            function et(t, e) {
                if ($(t.instance.modifiers, "inner")) return t;
                if (t.flipped && t.placement === t.originalPlacement) return t;
                var n = T(t.instance.popper, t.instance.reference, e.padding, e.boundariesElement, t.positionFixed),
                    i = t.placement.split("-")[0],
                    r = I(i),
                    o = t.placement.split("-")[1] || "",
                    s = [];
                switch (e.behavior) {
                    case Et.FLIP:
                        s = [i, r];
                        break;
                    case Et.CLOCKWISE:
                        s = tt(i);
                        break;
                    case Et.COUNTERCLOCKWISE:
                        s = tt(i, !0);
                        break;
                    default:
                        s = e.behavior
                }
                return s.forEach(function(a, l) {
                    if (i !== a || s.length === l + 1) return t;
                    i = t.placement.split("-")[0], r = I(i);
                    var u = t.offsets.popper,
                        c = t.offsets.reference,
                        d = Math.floor,
                        f = "left" === i && d(u.right) > d(c.left) || "right" === i && d(u.left) < d(c.right) || "top" === i && d(u.bottom) > d(c.top) || "bottom" === i && d(u.top) < d(c.bottom),
                        h = d(u.left) < d(n.left),
                        p = d(u.right) > d(n.right),
                        g = d(u.top) < d(n.top),
                        m = d(u.bottom) > d(n.bottom),
                        v = "left" === i && h || "right" === i && p || "top" === i && g || "bottom" === i && m,
                        y = ["top", "bottom"].indexOf(i) !== -1,
                        b = !!e.flipVariations && (y && "start" === o && h || y && "end" === o && p || !y && "start" === o && g || !y && "end" === o && m);
                    (f || v || b) && (t.flipped = !0, (f || v) && (i = s[l + 1]), b && (o = Z(o)), t.placement = i + (o ? "-" + o : ""), t.offsets.popper = St({}, t.offsets.popper, A(t.instance.popper, t.offsets.reference, t.placement)), t = L(t.instance.modifiers, t, "flip"))
                }), t
            }

            function nt(t) {
                var e = t.offsets,
                    n = e.popper,
                    i = e.reference,
                    r = t.placement.split("-")[0],
                    o = Math.floor,
                    s = ["top", "bottom"].indexOf(r) !== -1,
                    a = s ? "right" : "bottom",
                    l = s ? "left" : "top",
                    u = s ? "width" : "height";
                return n[a] < o(i[l]) && (t.offsets.popper[l] = o(i[l]) - n[u]), n[l] > o(i[a]) && (t.offsets.popper[l] = o(i[a])), t
            }

            function it(t, e, n, i) {
                var r = t.match(/((?:\-|\+)?\d*\.?\d*)(.*)/),
                    o = +r[1],
                    s = r[2];
                if (!o) return t;
                if (0 === s.indexOf("%")) {
                    var a = void 0;
                    switch (s) {
                        case "%p":
                            a = n;
                            break;
                        case "%":
                        case "%r":
                        default:
                            a = i
                    }
                    var l = y(a);
                    return l[e] / 100 * o
                }
                if ("vh" === s || "vw" === s) { var u = void 0; return u = "vh" === s ? Math.max(document.documentElement.clientHeight, window.innerHeight || 0) : Math.max(document.documentElement.clientWidth, window.innerWidth || 0), u / 100 * o }
                return o
            }

            function rt(t, e, n, i) {
                var r = [0, 0],
                    o = ["right", "left"].indexOf(i) !== -1,
                    s = t.split(/(\+|\-)/).map(function(t) { return t.trim() }),
                    a = s.indexOf(P(s, function(t) { return t.search(/,|\s/) !== -1 }));
                s[a] && s[a].indexOf(",") === -1 && console.warn("Offsets separated by white space(s) are deprecated, use a comma (,) instead.");
                var l = /\s*,\s*|\s+/,
                    u = a !== -1 ? [s.slice(0, a).concat([s[a].split(l)[0]]), [s[a].split(l)[1]].concat(s.slice(a + 1))] : [s];
                return u = u.map(function(t, i) {
                    var r = (1 === i ? !o : o) ? "height" : "width",
                        s = !1;
                    return t.reduce(function(t, e) { return "" === t[t.length - 1] && ["+", "-"].indexOf(e) !== -1 ? (t[t.length - 1] = e, s = !0, t) : s ? (t[t.length - 1] += e, s = !1, t) : t.concat(e) }, []).map(function(t) { return it(t, r, e, n) })
                }), u.forEach(function(t, e) { t.forEach(function(n, i) { q(n) && (r[e] += n * ("-" === t[i - 1] ? -1 : 1)) }) }), r
            }

            function ot(t, e) {
                var n = e.offset,
                    i = t.placement,
                    r = t.offsets,
                    o = r.popper,
                    s = r.reference,
                    a = i.split("-")[0],
                    l = void 0;
                return l = q(+n) ? [+n, 0] : rt(n, o, s, a), "left" === a ? (o.top += l[0], o.left -= l[1]) : "right" === a ? (o.top += l[0], o.left += l[1]) : "top" === a ? (o.left += l[0], o.top -= l[1]) : "bottom" === a && (o.left += l[0], o.top += l[1]), t.popper = o, t
            }

            function st(t, e) {
                var n = e.boundariesElement || u(t.instance.popper);
                t.instance.reference === n && (n = u(n));
                var i = H("transform"),
                    r = t.instance.popper.style,
                    o = r.top,
                    s = r.left,
                    a = r[i];
                r.top = "", r.left = "", r[i] = "";
                var l = T(t.instance.popper, t.instance.reference, e.padding, n, t.positionFixed);
                r.top = o, r.left = s, r[i] = a, e.boundaries = l;
                var c = e.priority,
                    d = t.offsets.popper,
                    f = {
                        primary: function(t) { var n = d[t]; return d[t] < l[t] && !e.escapeWithReference && (n = Math.max(d[t], l[t])), wt({}, t, n) },
                        secondary: function(t) {
                            var n = "right" === t ? "left" : "top",
                                i = d[n];
                            return d[t] > l[t] && !e.escapeWithReference && (i = Math.min(d[n], l[t] - ("right" === t ? d.width : d.height))), wt({}, n, i)
                        }
                    };
                return c.forEach(function(t) {
                    var e = ["left", "top"].indexOf(t) !== -1 ? "primary" : "secondary";
                    d = St({}, d, f[e](t))
                }), t.offsets.popper = d, t
            }

            function at(t) {
                var e = t.placement,
                    n = e.split("-")[0],
                    i = e.split("-")[1];
                if (i) {
                    var r = t.offsets,
                        o = r.reference,
                        s = r.popper,
                        a = ["bottom", "top"].indexOf(n) !== -1,
                        l = a ? "left" : "top",
                        u = a ? "width" : "height",
                        c = { start: wt({}, l, o[l]), end: wt({}, l, o[l] + o[u] - s[u]) };
                    t.offsets.popper = St({}, s, c[i])
                }
                return t
            }

            function lt(t) {
                if (!K(t.instance.modifiers, "hide", "preventOverflow")) return t;
                var e = t.offsets.reference,
                    n = P(t.instance.modifiers, function(t) { return "preventOverflow" === t.name }).boundaries;
                if (e.bottom < n.top || e.left > n.right || e.top > n.bottom || e.right < n.left) {
                    if (t.hide === !0) return t;
                    t.hide = !0, t.attributes["x-out-of-boundaries"] = ""
                } else {
                    if (t.hide === !1) return t;
                    t.hide = !1, t.attributes["x-out-of-boundaries"] = !1
                }
                return t
            }

            function ut(t) {
                var e = t.placement,
                    n = e.split("-")[0],
                    i = t.offsets,
                    r = i.popper,
                    o = i.reference,
                    s = ["left", "right"].indexOf(n) !== -1,
                    a = ["top", "left"].indexOf(n) === -1;
                return r[s ? "left" : "top"] = o[n] - (a ? r[s ? "width" : "height"] : 0), t.placement = I(e), t.offsets.popper = y(r), t
            }
            for (var ct = "undefined" != typeof window && "undefined" != typeof document, dt = ["Edge", "Trident", "Firefox"], ft = 0, ht = 0; ht < dt.length; ht += 1)
                if (ct && navigator.userAgent.indexOf(dt[ht]) >= 0) { ft = 1; break }
            var pt = ct && window.Promise,
                gt = pt ? n : i,
                mt = ct && !(!window.MSInputMethodContext || !document.documentMode),
                vt = ct && /MSIE 10/.test(navigator.userAgent),
                yt = function(t, e) { if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function") },
                bt = function() {
                    function t(t, e) {
                        for (var n = 0; n < e.length; n++) {
                            var i = e[n];
                            i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
                        }
                    }
                    return function(e, n, i) { return n && t(e.prototype, n), i && t(e, i), e }
                }(),
                wt = function(t, e, n) { return e in t ? Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : t[e] = n, t },
                St = Object.assign || function(t) { for (var e = 1; e < arguments.length; e++) { var n = arguments[e]; for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (t[i] = n[i]) } return t },
                _t = ct && /Firefox/i.test(navigator.userAgent),
                Ct = ["auto-start", "auto", "auto-end", "top-start", "top", "top-end", "right-start", "right", "right-end", "bottom-end", "bottom", "bottom-start", "left-end", "left", "left-start"],
                Tt = Ct.slice(3),
                Et = { FLIP: "flip", CLOCKWISE: "clockwise", COUNTERCLOCKWISE: "counterclockwise" },
                xt = { shift: { order: 100, enabled: !0, fn: at }, offset: { order: 200, enabled: !0, fn: ot, offset: 0 }, preventOverflow: { order: 300, enabled: !0, fn: st, priority: ["left", "right", "top", "bottom"], padding: 5, boundariesElement: "scrollParent" }, keepTogether: { order: 400, enabled: !0, fn: nt }, arrow: { order: 500, enabled: !0, fn: J, element: "[x-arrow]" }, flip: { order: 600, enabled: !0, fn: et, behavior: "flip", padding: 5, boundariesElement: "viewport" }, inner: { order: 700, enabled: !1, fn: ut }, hide: { order: 800, enabled: !0, fn: lt }, computeStyle: { order: 850, enabled: !0, fn: X, gpuAcceleration: !0, x: "bottom", y: "right" }, applyStyle: { order: 900, enabled: !0, fn: G, onLoad: Q, gpuAcceleration: void 0 } },
                kt = { placement: "bottom", positionFixed: !1, eventsEnabled: !0, removeOnDestroy: !1, onCreate: function() {}, onUpdate: function() {}, modifiers: xt },
                Ot = function() {
                    function t(e, n) {
                        var i = this,
                            o = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                        yt(this, t), this.scheduleUpdate = function() { return requestAnimationFrame(i.update) }, this.update = gt(this.update.bind(this)), this.options = St({}, t.Defaults, o), this.state = { isDestroyed: !1, isCreated: !1, scrollParents: [] }, this.reference = e && e.jquery ? e[0] : e, this.popper = n && n.jquery ? n[0] : n, this.options.modifiers = {}, Object.keys(St({}, t.Defaults.modifiers, o.modifiers)).forEach(function(e) { i.options.modifiers[e] = St({}, t.Defaults.modifiers[e] || {}, o.modifiers ? o.modifiers[e] : {}) }), this.modifiers = Object.keys(this.options.modifiers).map(function(t) { return St({ name: t }, i.options.modifiers[t]) }).sort(function(t, e) { return t.order - e.order }), this.modifiers.forEach(function(t) { t.enabled && r(t.onLoad) && t.onLoad(i.reference, i.popper, i.options, t, i.state) }), this.update();
                        var s = this.options.eventsEnabled;
                        s && this.enableEventListeners(), this.state.eventsEnabled = s
                    }
                    return bt(t, [{ key: "update", value: function() { return N.call(this) } }, { key: "destroy", value: function() { return M.call(this) } }, { key: "enableEventListeners", value: function() { return B.call(this) } }, { key: "disableEventListeners", value: function() { return F.call(this) } }]), t
                }();
            Ot.Utils = ("undefined" != typeof window ? window : t).PopperUtils, Ot.placements = Ct, Ot.Defaults = kt, e["default"] = Ot
        }.call(e, n(17))
}, function(t, e, n) {
    ! function(e, n) { t.exports = n() }(window, function() {
        return function(t) {
            function e(i) { if (n[i]) return n[i].exports; var r = n[i] = { i: i, l: !1, exports: {} }; return t[i].call(r.exports, r, r.exports, e), r.l = !0, r.exports }
            var n = {};
            return e.m = t, e.c = n, e.d = function(t, n, i) { e.o(t, n) || Object.defineProperty(t, n, { enumerable: !0, get: i }) }, e.r = function(t) { "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(t, "__esModule", { value: !0 }) }, e.t = function(t, n) {
                if (1 & n && (t = e(t)), 8 & n) return t;
                if (4 & n && "object" == typeof t && t && t.__esModule) return t;
                var i = Object.create(null);
                if (e.r(i), Object.defineProperty(i, "default", { enumerable: !0, value: t }), 2 & n && "string" != typeof t)
                    for (var r in t) e.d(i, r, function(e) { return t[e] }.bind(null, r));
                return i
            }, e.n = function(t) { var n = t && t.__esModule ? function() { return t["default"] } : function() { return t }; return e.d(n, "a", n), n }, e.o = function(t, e) { return Object.prototype.hasOwnProperty.call(t, e) }, e.p = "", e(e.s = 4)
        }([function(t, e, n) {
            "use strict";

            function i(t) { return t && t.__esModule ? t : { "default": t } }
            Object.defineProperty(e, "__esModule", { value: !0 }), Object.defineProperty(e, "ajax", { enumerable: !0, get: function() { return r["default"] } }), Object.defineProperty(e, "getId", { enumerable: !0, get: function() { return o["default"] } }), Object.defineProperty(e, "max", { enumerable: !0, get: function() { return s["default"] } }), Object.defineProperty(e, "min", { enumerable: !0, get: function() { return a["default"] } }), Object.defineProperty(e, "Observer", { enumerable: !0, get: function() { return l["default"] } }), Object.defineProperty(e, "extend", { enumerable: !0, get: function() { return u["default"] } }), Object.defineProperty(e, "style", { enumerable: !0, get: function() { return c["default"] } }), Object.defineProperty(e, "requestAnimationFrame", { enumerable: !0, get: function() { return d["default"] } }), Object.defineProperty(e, "frame", { enumerable: !0, get: function() { return f["default"] } }), Object.defineProperty(e, "debounce", { enumerable: !0, get: function() { return h["default"] } }), Object.defineProperty(e, "preventClick", { enumerable: !0, get: function() { return p["default"] } });
            var r = i(n(5)),
                o = i(n(6)),
                s = i(n(7)),
                a = i(n(8)),
                l = i(n(1)),
                u = i(n(9)),
                c = i(n(10)),
                d = i(n(2)),
                f = i(n(11)),
                h = i(n(12)),
                p = i(n(13))
        }, function(t, e, n) {
            "use strict";

            function i(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var i = e[n];
                    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
                }
            }
            Object.defineProperty(e, "__esModule", { value: !0 }), e["default"] = void 0;
            var r = function() {
                function t() {! function(t, e) { if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function") }(this, t), this.handlers = null }
                var e, n, r;
                return e = t, (n = [{
                    key: "on",
                    value: function(t, e) {
                        var n = this;
                        this.handlers || (this.handlers = {});
                        var i = this.handlers[t];
                        return i || (i = this.handlers[t] = []), i.push(e), { name: t, callback: e, un: function(t, e) { return n.un(t, e) } }
                    }
                }, {
                    key: "un",
                    value: function(t, e) {
                        if (this.handlers) {
                            var n, i = this.handlers[t];
                            if (i)
                                if (e)
                                    for (n = i.length - 1; 0 <= n; n--) i[n] == e && i.splice(n, 1);
                                else i.length = 0
                        }
                    }
                }, { key: "unAll", value: function() { this.handlers = null } }, {
                    key: "once",
                    value: function(t, e) {
                        var n = this;
                        return this.on(t, function i() {
                            for (var r = arguments.length, o = new Array(r), s = 0; s < r; s++) o[s] = arguments[s];
                            e.apply(n, o), setTimeout(function() { n.un(t, i) }, 0)
                        })
                    }
                }, {
                    key: "fireEvent",
                    value: function(t) {
                        for (var e = arguments.length, n = new Array(1 < e ? e - 1 : 0), i = 1; i < e; i++) n[i - 1] = arguments[i];
                        if (this.handlers) {
                            var r = this.handlers[t];
                            r && r.forEach(function(t) { t.apply(void 0, n) })
                        }
                    }
                }]) && i(e.prototype, n), r && i(e, r), t
            }();
            e["default"] = r, t.exports = e["default"]
        }, function(t, e, n) {
            "use strict";
            Object.defineProperty(e, "__esModule", { value: !0 }), e["default"] = void 0;
            var i = (window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function(t, e) { return setTimeout(t, 1e3 / 60) }).bind(window);
            e["default"] = i, t.exports = e["default"]
        }, function(t, e, n) {
            "use strict";

            function i(t) { return (i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) { return typeof t } : function(t) { return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t })(t) }

            function r(t, e, n) { return e in t ? Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : t[e] = n, t }

            function o(t, e) { return !e || "object" !== i(e) && "function" != typeof e ? function(t) { if (void 0 !== t) return t; throw new ReferenceError("this hasn't been initialised - super() hasn't been called") }(t) : e }

            function s(t) { return (s = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) { return t.__proto__ || Object.getPrototypeOf(t) })(t) }

            function a(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var i = e[n];
                    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
                }
            }

            function l(t, e, n) { return e && a(t.prototype, e), n && a(t, n), t }

            function u(t, e) { return (u = Object.setPrototypeOf || function(t, e) { return t.__proto__ = e, t })(t, e) }
            Object.defineProperty(e, "__esModule", { value: !0 }), e["default"] = void 0;
            var c = function(t) {
                    if (t && t.__esModule) return t;
                    var e = {};
                    if (null != t)
                        for (var n in t)
                            if (Object.prototype.hasOwnProperty.call(t, n)) {
                                var i = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(t, n) : {};
                                i.get || i.set ? Object.defineProperty(e, n, i) : e[n] = t[n]
                            }
                    return e["default"] = t, e
                }(n(0)),
                d = "playing",
                f = "paused",
                h = "finished",
                p = function(t) {
                    function e(t) { var n, i, a; return function(t, e) { if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function") }(this, e), (a = o(this, s(e).call(this))).audioContext = null, a.offlineAudioContext = null, a.stateBehaviors = (r(n = {}, d, { init: function() { this.addOnAudioProcess() }, getPlayedPercents: function() { var t = this.getDuration(); return this.getCurrentTime() / t || 0 }, getCurrentTime: function() { return this.startPosition + this.getPlayedTime() } }), r(n, f, { init: function() { this.removeOnAudioProcess() }, getPlayedPercents: function() { var t = this.getDuration(); return this.getCurrentTime() / t || 0 }, getCurrentTime: function() { return this.startPosition } }), r(n, h, { init: function() { this.removeOnAudioProcess(), this.fireEvent("finish") }, getPlayedPercents: function() { return 1 }, getCurrentTime: function() { return this.getDuration() } }), n), a.params = t, a.ac = t.audioContext || a.getAudioContext(), a.lastPlay = a.ac.currentTime, a.startPosition = 0, a.scheduledPause = null, a.states = (r(i = {}, d, Object.create(a.stateBehaviors[d])), r(i, f, Object.create(a.stateBehaviors[f])), r(i, h, Object.create(a.stateBehaviors[h])), i), a.analyser = null, a.buffer = null, a.filters = [], a.gainNode = null, a.mergedPeaks = null, a.offlineAc = null, a.peaks = null, a.playbackRate = 1, a.analyser = null, a.scriptNode = null, a.source = null, a.splitPeaks = [], a.state = null, a.explicitDuration = null, a }
                    return function(t, e) {
                        if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                        t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), e && u(t, e)
                    }(e, c.Observer), l(e, [{ key: "supportsWebAudio", value: function() { return !(!window.AudioContext && !window.webkitAudioContext) } }, { key: "getAudioContext", value: function() { return window.WaveSurferAudioContext || (window.WaveSurferAudioContext = new(window.AudioContext || window.webkitAudioContext)), window.WaveSurferAudioContext } }, { key: "getOfflineAudioContext", value: function(t) { return window.WaveSurferOfflineAudioContext || (window.WaveSurferOfflineAudioContext = new(window.OfflineAudioContext || window.webkitOfflineAudioContext)(1, 2, t)), window.WaveSurferOfflineAudioContext } }]), l(e, [{ key: "init", value: function() { this.createVolumeNode(), this.createScriptNode(), this.createAnalyserNode(), this.setState(f), this.setPlaybackRate(this.params.audioRate), this.setLength(0) } }, { key: "disconnectFilters", value: function() { this.filters && (this.filters.forEach(function(t) { t && t.disconnect() }), this.filters = null, this.analyser.connect(this.gainNode)) } }, { key: "setState", value: function(t) { this.state !== this.states[t] && (this.state = this.states[t], this.state.init.call(this)) } }, {
                        key: "setFilter",
                        value: function() {
                            for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++) e[n] = arguments[n];
                            this.setFilters(e)
                        }
                    }, { key: "setFilters", value: function(t) { this.disconnectFilters(), t && t.length && (this.filters = t, this.analyser.disconnect(), t.reduce(function(t, e) { return t.connect(e), e }, this.analyser).connect(this.gainNode)) } }, { key: "createScriptNode", value: function() { this.params.audioScriptProcessor ? this.scriptNode = this.params.audioScriptProcessor : this.ac.createScriptProcessor ? this.scriptNode = this.ac.createScriptProcessor(e.scriptBufferSize) : this.scriptNode = this.ac.createJavaScriptNode(e.scriptBufferSize), this.scriptNode.connect(this.ac.destination) } }, {
                        key: "addOnAudioProcess",
                        value: function() {
                            var t = this;
                            this.scriptNode.onaudioprocess = function() {
                                var e = t.getCurrentTime();
                                e >= t.getDuration() ? (t.setState(h), t.fireEvent("pause")) : e >= t.scheduledPause ? t.pause() : t.state === t.states[d] && t.fireEvent("audioprocess", e)
                            }
                        }
                    }, { key: "removeOnAudioProcess", value: function() { this.scriptNode.onaudioprocess = function() {} } }, { key: "createAnalyserNode", value: function() { this.analyser = this.ac.createAnalyser(), this.analyser.connect(this.gainNode) } }, { key: "createVolumeNode", value: function() { this.ac.createGain ? this.gainNode = this.ac.createGain() : this.gainNode = this.ac.createGainNode(), this.gainNode.connect(this.ac.destination) } }, {
                        key: "setSinkId",
                        value: function(t) {
                            if (t) {
                                var e = new window.Audio;
                                if (!e.setSinkId) return Promise.reject(new Error("setSinkId is not supported in your browser"));
                                e.autoplay = !0;
                                var n = this.ac.createMediaStreamDestination();
                                return this.gainNode.disconnect(), this.gainNode.connect(n), e.srcObject = n.stream, e.setSinkId(t)
                            }
                            return Promise.reject(new Error("Invalid deviceId: " + t))
                        }
                    }, { key: "setVolume", value: function(t) { this.gainNode.gain.setValueAtTime(t, this.ac.currentTime) } }, { key: "getVolume", value: function() { return this.gainNode.gain.value } }, { key: "decodeArrayBuffer", value: function(t, e, n) { this.offlineAc || (this.offlineAc = this.getOfflineAudioContext(this.ac && this.ac.sampleRate ? this.ac.sampleRate : 44100)), this.offlineAc.decodeAudioData(t, function(t) { return e(t) }, n) } }, { key: "setPeaks", value: function(t, e) { this.explicitDuration = e, this.peaks = t } }, {
                        key: "setLength",
                        value: function(t) {
                            if (!this.mergedPeaks || t != 2 * this.mergedPeaks.length - 1 + 2) {
                                this.splitPeaks = [], this.mergedPeaks = [];
                                var e, n = this.buffer ? this.buffer.numberOfChannels : 1;
                                for (e = 0; e < n; e++) this.splitPeaks[e] = [], this.splitPeaks[e][2 * (t - 1)] = 0, this.splitPeaks[e][2 * (t - 1) + 1] = 0;
                                this.mergedPeaks[2 * (t - 1)] = 0, this.mergedPeaks[2 * (t - 1) + 1] = 0
                            }
                        }
                    }, {
                        key: "getPeaks",
                        value: function(t, e, n) {
                            if (this.peaks) return this.peaks;
                            if (e = e || 0, n = n || t - 1, this.setLength(t), !this.buffer) return this.params.splitChannels ? this.splitPeaks : this.mergedPeaks;
                            if (!this.buffer.length) {
                                var i = this.createBuffer(1, 4096, this.sampleRate);
                                this.buffer = i.buffer
                            }
                            var r, o = this.buffer.length / t,
                                s = ~~(o / 10) || 1,
                                a = this.buffer.numberOfChannels;
                            for (r = 0; r < a; r++) {
                                var l = this.splitPeaks[r],
                                    u = this.buffer.getChannelData(r),
                                    c = void 0;
                                for (c = e; c <= n; c++) {
                                    var d = ~~(c * o),
                                        f = ~~(d + o),
                                        h = 0,
                                        p = 0,
                                        g = void 0;
                                    for (g = d; g < f; g += s) {
                                        var m = u[g];
                                        p < m && (p = m), m < h && (h = m)
                                    }
                                    l[2 * c] = p, l[2 * c + 1] = h, (0 == r || p > this.mergedPeaks[2 * c]) && (this.mergedPeaks[2 * c] = p), (0 == r || h < this.mergedPeaks[2 * c + 1]) && (this.mergedPeaks[2 * c + 1] = h)
                                }
                            }
                            return this.params.splitChannels ? this.splitPeaks : this.mergedPeaks
                        }
                    }, { key: "getPlayedPercents", value: function() { return this.state.getPlayedPercents.call(this) } }, { key: "disconnectSource", value: function() { this.source && this.source.disconnect() } }, { key: "destroy", value: function() { this.isPaused() || this.pause(), this.unAll(), this.buffer = null, this.disconnectFilters(), this.disconnectSource(), this.gainNode.disconnect(), this.scriptNode.disconnect(), this.analyser.disconnect(), this.params.closeAudioContext && ("function" == typeof this.ac.close && "closed" != this.ac.state && this.ac.close(), this.ac = null, this.params.audioContext ? this.params.audioContext = null : window.WaveSurferAudioContext = null, window.WaveSurferOfflineAudioContext = null) } }, { key: "load", value: function(t) { this.startPosition = 0, this.lastPlay = this.ac.currentTime, this.buffer = t, this.createSource() } }, { key: "createSource", value: function() { this.disconnectSource(), this.source = this.ac.createBufferSource(), this.source.start = this.source.start || this.source.noteGrainOn, this.source.stop = this.source.stop || this.source.noteOff, this.source.playbackRate.setValueAtTime(this.playbackRate, this.ac.currentTime), this.source.buffer = this.buffer, this.source.connect(this.analyser) } }, { key: "isPaused", value: function() { return this.state !== this.states[d] } }, { key: "getDuration", value: function() { return this.buffer ? this.buffer.duration : this.explicitDuration ? this.explicitDuration : 0 } }, { key: "seekTo", value: function(t, e) { if (this.buffer) return (this.scheduledPause = null) == t && (t = this.getCurrentTime()) >= this.getDuration() && (t = 0), null == e && (e = this.getDuration()), this.startPosition = t, this.lastPlay = this.ac.currentTime, this.state === this.states[h] && this.setState(f), { start: t, end: e } } }, { key: "getPlayedTime", value: function() { return (this.ac.currentTime - this.lastPlay) * this.playbackRate } }, {
                        key: "play",
                        value: function(t, e) {
                            if (this.buffer) {
                                this.createSource();
                                var n = this.seekTo(t, e);
                                t = n.start, e = n.end, this.scheduledPause = e, this.source.start(0, t, e - t), "suspended" == this.ac.state && this.ac.resume && this.ac.resume(), this.setState(d), this.fireEvent("play");
                            }
                        }
                    }, { key: "pause", value: function() { this.scheduledPause = null, this.startPosition += this.getPlayedTime(), this.source && this.source.stop(0), this.setState(f), this.fireEvent("pause") } }, { key: "getCurrentTime", value: function() { return this.state.getCurrentTime.call(this) } }, { key: "getPlaybackRate", value: function() { return this.playbackRate } }, { key: "setPlaybackRate", value: function(t) { t = t || 1, this.isPaused() ? this.playbackRate = t : (this.pause(), this.playbackRate = t, this.play()) } }]), e
                }();
            (e["default"] = p).scriptBufferSize = 256, t.exports = e["default"]
        }, function(t, e, n) {
            "use strict";

            function i(t) { return t && t.__esModule ? t : { "default": t } }

            function r(t) { return (r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) { return typeof t } : function(t) { return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t })(t) }

            function o(t, e) { return !e || "object" !== r(e) && "function" != typeof e ? l(t) : e }

            function s(t) { return (s = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) { return t.__proto__ || Object.getPrototypeOf(t) })(t) }

            function a(t, e) { return (a = Object.setPrototypeOf || function(t, e) { return t.__proto__ = e, t })(t, e) }

            function l(t) { if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return t }

            function u(t, e) { if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function") }

            function c(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var i = e[n];
                    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
                }
            }

            function d(t, e, n) { return e && c(t.prototype, e), n && c(t, n), t }
            Object.defineProperty(e, "__esModule", { value: !0 }), e["default"] = void 0;
            var f = function(t) {
                    if (t && t.__esModule) return t;
                    var e = {};
                    if (null != t)
                        for (var n in t)
                            if (Object.prototype.hasOwnProperty.call(t, n)) {
                                var i = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(t, n) : {};
                                i.get || i.set ? Object.defineProperty(e, n, i) : e[n] = t[n]
                            }
                    return e["default"] = t, e
                }(n(0)),
                h = i(n(14)),
                p = i(n(3)),
                g = i(n(16)),
                m = i(n(17)),
                v = function(t) {
                    function e(t) {
                        var n;
                        if (u(this, e), (n = o(this, s(e).call(this))).defaultParams = { audioContext: null, audioScriptProcessor: null, audioRate: 1, autoCenter: !0, backend: "WebAudio", barHeight: 1, barGap: null, container: null, cursorColor: "#333", cursorWidth: 1, dragSelection: !0, fillParent: !0, forceDecode: !1, height: 128, hideScrollbar: !1, interact: !0, loopSelection: !0, maxCanvasWidth: 4e3, mediaContainer: null, mediaControls: !1, mediaType: "audio", minPxPerSec: 20, normalize: !1, partialRender: !1, pixelRatio: window.devicePixelRatio || screen.deviceXDPI / screen.logicalXDPI, plugins: [], progressColor: "#555", removeMediaElementOnDestroy: !0, renderer: h["default"], responsive: !1, scrollParent: !1, skipLength: 2, splitChannels: !1, waveColor: "#999", xhr: {} }, n.backends = { MediaElement: g["default"], WebAudio: p["default"] }, n.util = f, n.params = f.extend({}, n.defaultParams, t), n.container = "string" == typeof t.container ? document.querySelector(n.params.container) : n.params.container, !n.container) throw new Error("Container element not found");
                        if (null == n.params.mediaContainer ? n.mediaContainer = n.container : "string" == typeof n.params.mediaContainer ? n.mediaContainer = document.querySelector(n.params.mediaContainer) : n.mediaContainer = n.params.mediaContainer, !n.mediaContainer) throw new Error("Media Container element not found");
                        if (n.params.maxCanvasWidth <= 1) throw new Error("maxCanvasWidth must be greater than 1");
                        if (n.params.maxCanvasWidth % 2 == 1) throw new Error("maxCanvasWidth must be an even number");
                        if (n.savedVolume = 0, n.isMuted = !1, n.tmpEvents = [], n.currentAjax = null, n.arraybuffer = null, n.drawer = null, n.backend = null, n.peakCache = null, "function" != typeof n.params.renderer) throw new Error("Renderer parameter is invalid");
                        n.Drawer = n.params.renderer, n.Backend = n.backends[n.params.backend], n.initialisedPluginList = {}, n.isDestroyed = !1, n.isReady = !1;
                        var i = 0;
                        return n._onResize = f.debounce(function() { i == n.drawer.wrapper.clientWidth || n.params.scrollParent || (i = n.drawer.wrapper.clientWidth, n.drawer.fireEvent("redraw")) }, "number" == typeof n.params.responsive ? n.params.responsive : 100), o(n, l(l(n)))
                    }
                    return function(t, e) {
                        if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                        t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), e && a(t, e)
                    }(e, f.Observer), d(e, null, [{ key: "create", value: function(t) { return new e(t).init() } }]), d(e, [{ key: "init", value: function() { return this.registerPlugins(this.params.plugins), this.createDrawer(), this.createBackend(), this.createPeakCache(), this } }, { key: "registerPlugins", value: function(t) { var e = this; return t.forEach(function(t) { return e.addPlugin(t) }), t.forEach(function(t) { t.deferInit || e.initPlugin(t.name) }), this.fireEvent("plugins-registered", t), this } }, {
                        key: "addPlugin",
                        value: function(t) {
                            var e = this;
                            if (!t.name) throw new Error("Plugin does not have a name!");
                            if (!t.instance) throw new Error("Plugin ".concat(t.name, " does not have an instance property!"));
                            t.staticProps && Object.keys(t.staticProps).forEach(function(n) { e[n] = t.staticProps[n] });
                            var n = t.instance;
                            return Object.getOwnPropertyNames(f.Observer.prototype).forEach(function(t) { n.prototype[t] = f.Observer.prototype[t] }), this[t.name] = new n(t.params || {}, this), this.fireEvent("plugin-added", t.name), this
                        }
                    }, { key: "initPlugin", value: function(t) { if (!this[t]) throw new Error("Plugin ".concat(t, " has not been added yet!")); return this.initialisedPluginList[t] && this.destroyPlugin(t), this[t].init(), this.initialisedPluginList[t] = !0, this.fireEvent("plugin-initialised", t), this } }, { key: "destroyPlugin", value: function(t) { if (!this[t]) throw new Error("Plugin ".concat(t, " has not been added yet and cannot be destroyed!")); if (!this.initialisedPluginList[t]) throw new Error("Plugin ".concat(t, " is not active and cannot be destroyed!")); if ("function" != typeof this[t].destroy) throw new Error("Plugin ".concat(t, " does not have a destroy function!")); return this[t].destroy(), delete this.initialisedPluginList[t], this.fireEvent("plugin-destroyed", t), this } }, {
                        key: "destroyAllPlugins",
                        value: function() {
                            var t = this;
                            Object.keys(this.initialisedPluginList).forEach(function(e) { return t.destroyPlugin(e) })
                        }
                    }, {
                        key: "createDrawer",
                        value: function() {
                            var t = this;
                            this.drawer = new this.Drawer(this.container, this.params), this.drawer.init(), this.fireEvent("drawer-created", this.drawer), !1 !== this.params.responsive && (window.addEventListener("resize", this._onResize, !0), window.addEventListener("orientationchange", this._onResize, !0)), this.drawer.on("redraw", function() { t.drawBuffer(), t.drawer.progress(t.backend.getPlayedPercents()) }), this.drawer.on("click", function(e, n) { setTimeout(function() { return t.seekTo(n) }, 0) }), this.drawer.on("scroll", function(e) { t.params.partialRender && t.drawBuffer(), t.fireEvent("scroll", e) })
                        }
                    }, {
                        key: "createBackend",
                        value: function() {
                            var t = this;
                            this.backend && this.backend.destroy(), "AudioElement" == this.params.backend && (this.params.backend = "MediaElement"), "WebAudio" != this.params.backend || this.Backend.prototype.supportsWebAudio.call(null) || (this.params.backend = "MediaElement"), this.backend = new this.Backend(this.params), this.backend.init(), this.fireEvent("backend-created", this.backend), this.backend.on("finish", function() { t.drawer.progress(t.backend.getPlayedPercents()), t.fireEvent("finish") }), this.backend.on("play", function() { return t.fireEvent("play") }), this.backend.on("pause", function() { return t.fireEvent("pause") }), this.backend.on("audioprocess", function(e) { t.drawer.progress(t.backend.getPlayedPercents()), t.fireEvent("audioprocess", e) })
                        }
                    }, { key: "createPeakCache", value: function() { this.params.partialRender && (this.peakCache = new m["default"]) } }, { key: "getDuration", value: function() { return this.backend.getDuration() } }, { key: "getCurrentTime", value: function() { return this.backend.getCurrentTime() } }, { key: "setCurrentTime", value: function(t) { t >= this.getDuration() ? this.seekTo(1) : this.seekTo(t / this.getDuration()) } }, { key: "play", value: function(t, e) { var n = this; return this.fireEvent("interaction", function() { return n.play(t, e) }), this.backend.play(t, e) } }, { key: "pause", value: function() { if (!this.backend.isPaused()) return this.backend.pause() } }, { key: "playPause", value: function() { return this.backend.isPaused() ? this.play() : this.pause() } }, { key: "isPlaying", value: function() { return !this.backend.isPaused() } }, { key: "skipBackward", value: function(t) { this.skip(-t || -this.params.skipLength) } }, { key: "skipForward", value: function(t) { this.skip(t || this.params.skipLength) } }, {
                        key: "skip",
                        value: function(t) {
                            var e = this.getDuration() || 1,
                                n = this.getCurrentTime() || 0;
                            n = Math.max(0, Math.min(e, n + (t || 0))), this.seekAndCenter(n / e)
                        }
                    }, { key: "seekAndCenter", value: function(t) { this.seekTo(t), this.drawer.recenter(t) } }, {
                        key: "seekTo",
                        value: function(t) {
                            var e = this;
                            if ("number" != typeof t || !isFinite(t) || t < 0 || 1 < t) return console.error("Error calling wavesurfer.seekTo, parameter must be a number between 0 and 1!");
                            this.fireEvent("interaction", function() { return e.seekTo(t) });
                            var n = this.backend.isPaused();
                            n || this.backend.pause();
                            var i = this.params.scrollParent;
                            this.params.scrollParent = !1, this.backend.seekTo(t * this.getDuration()), this.drawer.progress(t), n || this.backend.play(), this.params.scrollParent = i, this.fireEvent("seek", t)
                        }
                    }, { key: "stop", value: function() { this.pause(), this.seekTo(0), this.drawer.progress(0) } }, { key: "setSinkId", value: function(t) { return this.backend.setSinkId(t) } }, { key: "setVolume", value: function(t) { this.backend.setVolume(t), this.fireEvent("volume", t) } }, { key: "getVolume", value: function() { return this.backend.getVolume() } }, { key: "setPlaybackRate", value: function(t) { this.backend.setPlaybackRate(t) } }, { key: "getPlaybackRate", value: function() { return this.backend.getPlaybackRate() } }, { key: "toggleMute", value: function() { this.setMute(!this.isMuted) } }, { key: "setMute", value: function(t) { t !== this.isMuted && (t ? (this.savedVolume = this.backend.getVolume(), this.backend.setVolume(0), this.isMuted = !0, this.fireEvent("volume", 0)) : (this.backend.setVolume(this.savedVolume), this.isMuted = !1, this.fireEvent("volume", this.savedVolume))), this.fireEvent("mute", this.isMuted) } }, { key: "getMute", value: function() { return this.isMuted } }, { key: "isReady", value: function() { return this.isReady } }, { key: "getFilters", value: function() { return this.backend.filters || [] } }, { key: "toggleScroll", value: function() { this.params.scrollParent = !this.params.scrollParent, this.drawBuffer() } }, { key: "toggleInteraction", value: function() { this.params.interact = !this.params.interact } }, { key: "getWaveColor", value: function() { return this.params.waveColor } }, { key: "setWaveColor", value: function(t) { this.params.waveColor = t, this.drawBuffer() } }, { key: "getProgressColor", value: function() { return this.params.progressColor } }, { key: "setProgressColor", value: function(t) { this.params.progressColor = t, this.drawBuffer() } }, { key: "getCursorColor", value: function() { return this.params.cursorColor } }, { key: "setCursorColor", value: function(t) { this.params.cursorColor = t, this.drawer.updateCursor() } }, { key: "getHeight", value: function() { return this.params.height } }, { key: "setHeight", value: function(t) { this.params.height = t, this.drawer.setHeight(t * this.params.pixelRatio), this.drawBuffer() } }, {
                        key: "drawBuffer",
                        value: function() {
                            var t, e = Math.round(this.getDuration() * this.params.minPxPerSec * this.params.pixelRatio),
                                n = this.drawer.getWidth(),
                                i = e,
                                r = this.drawer.getScrollX(),
                                o = Math.max(r + n, i);
                            if (this.params.fillParent && (!this.params.scrollParent || e < n) && (r = 0, o = i = n), this.params.partialRender) { var s, a = this.peakCache.addRangeToPeakCache(i, r, o); for (s = 0; s < a.length; s++) t = this.backend.getPeaks(i, a[s][0], a[s][1]), this.drawer.drawPeaks(t, i, a[s][0], a[s][1]) } else t = this.backend.getPeaks(i, r, o), this.drawer.drawPeaks(t, i, r, o);
                            this.fireEvent("redraw", t, i)
                        }
                    }, { key: "zoom", value: function(t) { this.params.scrollParent = t ? (this.params.minPxPerSec = t, !0) : (this.params.minPxPerSec = this.defaultParams.minPxPerSec, !1), this.drawBuffer(), this.drawer.progress(this.backend.getPlayedPercents()), this.drawer.recenter(this.getCurrentTime() / this.getDuration()), this.fireEvent("zoom", t) } }, {
                        key: "loadArrayBuffer",
                        value: function(t) {
                            var e = this;
                            this.decodeArrayBuffer(t, function(t) { e.isDestroyed || e.loadDecodedBuffer(t) })
                        }
                    }, { key: "loadDecodedBuffer", value: function(t) { this.backend.load(t), this.drawBuffer(), this.fireEvent("ready"), this.isReady = !0 } }, {
                        key: "loadBlob",
                        value: function(t) {
                            var e = this,
                                n = new FileReader;
                            n.addEventListener("progress", function(t) { return e.onProgress(t) }), n.addEventListener("load", function(t) { return e.loadArrayBuffer(t.target.result) }), n.addEventListener("error", function() { return e.fireEvent("error", "Error reading file") }), n.readAsArrayBuffer(t), this.empty()
                        }
                    }, {
                        key: "load",
                        value: function(t, e, n, i) {
                            if (this.empty(), n) {
                                var r = { "Preload is not 'auto', 'none' or 'metadata'": -1 === ["auto", "metadata", "none"].indexOf(n), "Peaks are not provided": !e, "Backend is not of type MediaElement": "MediaElement" !== this.params.backend, "Url is not of type string": "string" != typeof t },
                                    o = Object.keys(r).filter(function(t) { return r[t] });
                                o.length && (console.warn("Preload parameter of wavesurfer.load will be ignored because:\n\t- " + o.join("\n\t- ")), n = null)
                            }
                            switch (this.params.backend) {
                                case "WebAudio":
                                    return this.loadBuffer(t, e, i);
                                case "MediaElement":
                                    return this.loadMediaElement(t, e, n, i)
                            }
                        }
                    }, {
                        key: "loadBuffer",
                        value: function(t, e, n) {
                            var i = this,
                                r = function(e) { return e && i.tmpEvents.push(i.once("ready", e)), i.getArrayBuffer(t, function(t) { return i.loadArrayBuffer(t) }) };
                            return e ? (this.backend.setPeaks(e, n), this.drawBuffer(), this.tmpEvents.push(this.once("interaction", r)), void 0) : r()
                        }
                    }, {
                        key: "loadMediaElement",
                        value: function(t, e, n, i) {
                            var r = this,
                                o = t;
                            if ("string" == typeof t) this.backend.load(o, this.mediaContainer, e, n);
                            else {
                                var s = t;
                                this.backend.loadElt(s, e), o = s.src
                            }
                            this.tmpEvents.push(this.backend.once("canplay", function() { r.drawBuffer(), r.fireEvent("ready"), r.isReady = !0 }), this.backend.once("error", function(t) { return r.fireEvent("error", t) })), e && this.backend.setPeaks(e, i), e && !this.params.forceDecode || !this.backend.supportsWebAudio() || this.getArrayBuffer(o, function(t) { r.decodeArrayBuffer(t, function(t) { r.backend.buffer = t, r.backend.setPeaks(null), r.drawBuffer(), r.fireEvent("waveform-ready") }) })
                        }
                    }, {
                        key: "decodeArrayBuffer",
                        value: function(t, e) {
                            var n = this;
                            this.arraybuffer = t, this.backend.decodeArrayBuffer(t, function(i) { n.isDestroyed || n.arraybuffer != t || (e(i), n.arraybuffer = null) }, function() { return n.fireEvent("error", "Error decoding audiobuffer") })
                        }
                    }, {
                        key: "getArrayBuffer",
                        value: function(t, e) {
                            var n = this,
                                i = f.ajax({ url: t, responseType: "arraybuffer", xhr: this.params.xhr });
                            return this.currentAjax = i, this.tmpEvents.push(i.on("progress", function(t) { n.onProgress(t) }), i.on("success", function(t, i) { e(t), n.currentAjax = null }), i.on("error", function(t) { n.fireEvent("error", "XHR error: " + t.target.statusText), n.currentAjax = null })), i
                        }
                    }, {
                        key: "onProgress",
                        value: function(t) {
                            var e;
                            e = t.lengthComputable ? t.loaded / t.total : t.loaded / (t.loaded + 1e6), this.fireEvent("loading", Math.round(100 * e), t.target)
                        }
                    }, {
                        key: "exportPCM",
                        value: function(t, e, n, i) {
                            t = t || 1024, i = i || 0, e = e || 1e4, n = n || !1;
                            var r = this.backend.getPeaks(t, i),
                                o = [].map.call(r, function(t) { return Math.round(t * e) / e }),
                                s = JSON.stringify(o);
                            return n || window.open("data:application/json;charset=utf-8," + encodeURIComponent(s)), s
                        }
                    }, { key: "exportImage", value: function(t, e) { return t || (t = "image/png"), e || (e = 1), this.drawer.getImage(t, e) } }, { key: "cancelAjax", value: function() { this.currentAjax && (this.currentAjax.xhr.abort(), this.currentAjax = null) } }, { key: "clearTmpEvents", value: function() { this.tmpEvents.forEach(function(t) { return t.un() }) } }, { key: "empty", value: function() { this.backend.isPaused() || (this.stop(), this.backend.disconnectSource()), this.isReady = !1, this.cancelAjax(), this.clearTmpEvents(), this.drawer.progress(0), this.drawer.setWidth(0), this.drawer.drawPeaks({ length: this.drawer.getWidth() }, 0) } }, { key: "destroy", value: function() { this.destroyAllPlugins(), this.fireEvent("destroy"), this.cancelAjax(), this.clearTmpEvents(), this.unAll(), !1 !== this.params.responsive && (window.removeEventListener("resize", this._onResize, !0), window.removeEventListener("orientationchange", this._onResize, !0)), this.backend.destroy(), this.drawer.destroy(), this.isDestroyed = !0, this.isReady = !1, this.arraybuffer = null } }]), e
                }();
            (e["default"] = v).VERSION = "2.1.3", v.util = f, t.exports = e["default"]
        }, function(t, e, n) {
            "use strict";
            Object.defineProperty(e, "__esModule", { value: !0 }), e["default"] = function(t) {
                var e = new r["default"],
                    n = new XMLHttpRequest,
                    i = !1;
                return n.open(t.method || "GET", t.url, !0), n.responseType = t.responseType || "json", t.xhr && (t.xhr.requestHeaders && t.xhr.requestHeaders.forEach(function(t) { n.setRequestHeader(t.key, t.value) }), t.xhr.withCredentials && (n.withCredentials = !0)), n.addEventListener("progress", function(t) { e.fireEvent("progress", t), t.lengthComputable && t.loaded == t.total && (i = !0) }), n.addEventListener("load", function(t) { i || e.fireEvent("progress", t), e.fireEvent("load", t), 200 == n.status || 206 == n.status ? e.fireEvent("success", n.response, t) : e.fireEvent("error", t) }), n.addEventListener("error", function(t) { return e.fireEvent("error", t) }), n.send(), e.xhr = n, e
            };
            var i, r = (i = n(1)) && i.__esModule ? i : { "default": i };
            t.exports = e["default"]
        }, function(t, e, n) {
            "use strict";
            Object.defineProperty(e, "__esModule", { value: !0 }), e["default"] = function() { return "wavesurfer_" + Math.random().toString(32).substring(2) }, t.exports = e["default"]
        }, function(t, e, n) {
            "use strict";
            Object.defineProperty(e, "__esModule", { value: !0 }), e["default"] = function(t) { var e = -1 / 0; return Object.keys(t).forEach(function(n) { t[n] > e && (e = t[n]) }), e }, t.exports = e["default"]
        }, function(t, e, n) {
            "use strict";
            Object.defineProperty(e, "__esModule", { value: !0 }), e["default"] = function(t) { var e = Number(1 / 0); return Object.keys(t).forEach(function(n) { t[n] < e && (e = t[n]) }), e }, t.exports = e["default"]
        }, function(t, e, n) {
            "use strict";
            Object.defineProperty(e, "__esModule", { value: !0 }), e["default"] = function(t) { for (var e = arguments.length, n = new Array(1 < e ? e - 1 : 0), i = 1; i < e; i++) n[i - 1] = arguments[i]; return n.forEach(function(e) { Object.keys(e).forEach(function(n) { t[n] = e[n] }) }), t }, t.exports = e["default"]
        }, function(t, e, n) {
            "use strict";
            Object.defineProperty(e, "__esModule", { value: !0 }), e["default"] = function(t, e) { return Object.keys(e).forEach(function(n) { t.style[n] !== e[n] && (t.style[n] = e[n]) }), t }, t.exports = e["default"]
        }, function(t, e, n) {
            "use strict";
            Object.defineProperty(e, "__esModule", { value: !0 }), e["default"] = function(t) { return function() { for (var e = arguments.length, n = new Array(e), i = 0; i < e; i++) n[i] = arguments[i]; return (0, r["default"])(function() { return t.apply(void 0, n) }) } };
            var i, r = (i = n(2)) && i.__esModule ? i : { "default": i };
            t.exports = e["default"]
        }, function(t, e) {
            function n(t, e, n) {
                function i() {
                    var u = Date.now() - a;
                    u < e && 0 <= u ? r = setTimeout(i, e - u) : (r = null, n || (l = t.apply(s, o), s = o = null))
                }
                var r, o, s, a, l;
                null == e && (e = 100);
                var u = function() { s = this, o = arguments, a = Date.now(); var u = n && !r; return r || (r = setTimeout(i, e)), u && (l = t.apply(s, o), s = o = null), l };
                return u.clear = function() { r && (clearTimeout(r), r = null) }, u.flush = function() { r && (l = t.apply(s, o), s = o = null, clearTimeout(r), r = null) }, u
            }
            n.debounce = n, t.exports = n
        }, function(t, e, n) {
            "use strict";

            function i(t) { t.stopPropagation(), document.body.removeEventListener("click", i, !0) }
            Object.defineProperty(e, "__esModule", { value: !0 }), e["default"] = function(t) { document.body.addEventListener("click", i, !0) }, t.exports = e["default"]
        }, function(t, e, n) {
            "use strict";

            function i(t) { return (i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) { return typeof t } : function(t) { return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t })(t) }

            function r(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var i = e[n];
                    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
                }
            }

            function o(t, e) { return !e || "object" !== i(e) && "function" != typeof e ? function(t) { if (void 0 !== t) return t; throw new ReferenceError("this hasn't been initialised - super() hasn't been called") }(t) : e }

            function s(t) { return (s = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) { return t.__proto__ || Object.getPrototypeOf(t) })(t) }

            function a(t, e) { return (a = Object.setPrototypeOf || function(t, e) { return t.__proto__ = e, t })(t, e) }
            Object.defineProperty(e, "__esModule", { value: !0 }), e["default"] = void 0;
            var l, u = (l = n(15)) && l.__esModule ? l : { "default": l },
                c = function(t) {
                    if (t && t.__esModule) return t;
                    var e = {};
                    if (null != t)
                        for (var n in t)
                            if (Object.prototype.hasOwnProperty.call(t, n)) {
                                var i = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(t, n) : {};
                                i.get || i.set ? Object.defineProperty(e, n, i) : e[n] = t[n]
                            }
                    return e["default"] = t, e
                }(n(0)),
                d = function(t) {
                    function e(t, n) { var i; return function(t, e) { if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function") }(this, e), (i = o(this, s(e).call(this, t, n))).maxCanvasWidth = n.maxCanvasWidth, i.maxCanvasElementWidth = Math.round(n.maxCanvasWidth / n.pixelRatio), i.hasProgressCanvas = n.waveColor != n.progressColor, i.halfPixel = .5 / n.pixelRatio, i.canvases = [], i.progressWave = null, i }
                    var n, i, l;
                    return function(t, e) {
                        if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                        t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), e && a(t, e)
                    }(e, u["default"]), n = e, (i = [{ key: "init", value: function() { this.createWrapper(), this.createElements() } }, { key: "createElements", value: function() { this.progressWave = this.wrapper.appendChild(this.style(document.createElement("wave"), { position: "absolute", zIndex: 3, left: 0, top: 0, bottom: 0, overflow: "hidden", width: "0", display: "none", boxSizing: "border-box", borderRightStyle: "solid", pointerEvents: "none" })), this.addCanvas(), this.updateCursor() } }, { key: "updateCursor", value: function() { this.style(this.progressWave, { borderRightWidth: this.params.cursorWidth + "px", borderRightColor: this.params.cursorColor }) } }, {
                        key: "updateSize",
                        value: function() {
                            for (var t = this, e = Math.round(this.width / this.params.pixelRatio), n = Math.ceil(e / this.maxCanvasElementWidth); this.canvases.length < n;) this.addCanvas();
                            for (; this.canvases.length > n;) this.removeCanvas();
                            this.canvases.forEach(function(e, n) {
                                var i = t.maxCanvasWidth + 2 * Math.ceil(t.params.pixelRatio / 2);
                                n == t.canvases.length - 1 && (i = t.width - t.maxCanvasWidth * (t.canvases.length - 1)), t.updateDimensions(e, i, t.height), t.clearWaveForEntry(e)
                            })
                        }
                    }, {
                        key: "addCanvas",
                        value: function() {
                            var t = {},
                                e = this.maxCanvasElementWidth * this.canvases.length;
                            t.wave = this.wrapper.appendChild(this.style(document.createElement("canvas"), { position: "absolute", zIndex: 2, left: e + "px", top: 0, bottom: 0, height: "100%", pointerEvents: "none" })), t.waveCtx = t.wave.getContext("2d"), this.hasProgressCanvas && (t.progress = this.progressWave.appendChild(this.style(document.createElement("canvas"), { position: "absolute", left: e + "px", top: 0, bottom: 0, height: "100%" })), t.progressCtx = t.progress.getContext("2d")), this.canvases.push(t)
                        }
                    }, {
                        key: "removeCanvas",
                        value: function() {
                            var t = this.canvases.pop();
                            t.wave.parentElement.removeChild(t.wave), this.hasProgressCanvas && t.progress.parentElement.removeChild(t.progress)
                        }
                    }, {
                        key: "updateDimensions",
                        value: function(t, e, n) {
                            var i = Math.round(e / this.params.pixelRatio),
                                r = Math.round(this.width / this.params.pixelRatio);
                            t.start = t.waveCtx.canvas.offsetLeft / r || 0, t.end = t.start + i / r, t.waveCtx.canvas.width = e, t.waveCtx.canvas.height = n, this.style(t.waveCtx.canvas, { width: i + "px" }), this.style(this.progressWave, { display: "block" }), this.hasProgressCanvas && (t.progressCtx.canvas.width = e, t.progressCtx.canvas.height = n, this.style(t.progressCtx.canvas, { width: i + "px" }))
                        }
                    }, {
                        key: "clearWave",
                        value: function() {
                            var t = this;
                            this.canvases.forEach(function(e) { return t.clearWaveForEntry(e) })
                        }
                    }, { key: "clearWaveForEntry", value: function(t) { t.waveCtx.clearRect(0, 0, t.waveCtx.canvas.width, t.waveCtx.canvas.height), this.hasProgressCanvas && t.progressCtx.clearRect(0, 0, t.progressCtx.canvas.width, t.progressCtx.canvas.height) } }, {
                        key: "drawBars",
                        value: function(t, e, n, i) {
                            var r = this;
                            return this.prepareDraw(t, e, n, i, function(t) {
                                var e = t.absmax,
                                    o = t.hasMinVals,
                                    s = (t.height, t.offsetY),
                                    a = t.halfH,
                                    l = t.peaks;
                                if (void 0 !== n) {
                                    var u, c = o ? 2 : 1,
                                        d = l.length / c,
                                        f = r.params.barWidth * r.params.pixelRatio,
                                        h = f + (null === r.params.barGap ? Math.max(r.params.pixelRatio, ~~(f / 2)) : Math.max(r.params.pixelRatio, r.params.barGap * r.params.pixelRatio)),
                                        p = d / r.width,
                                        g = i;
                                    for (u = n; u < g; u += h) {
                                        var m = l[Math.floor(u * p * c)] || 0,
                                            v = Math.round(m / e * a);
                                        r.fillRect(u + r.halfPixel, a - v + s, f + r.halfPixel, 2 * v)
                                    }
                                }
                            })
                        }
                    }, {
                        key: "drawWave",
                        value: function(t, e, n, i) {
                            var r = this;
                            return this.prepareDraw(t, e, n, i, function(t) {
                                var e = t.absmax,
                                    o = t.hasMinVals,
                                    s = (t.height, t.offsetY),
                                    a = t.halfH,
                                    l = t.peaks;
                                if (!o) {
                                    var u, c = [],
                                        d = l.length;
                                    for (u = 0; u < d; u++) c[2 * u] = l[u], c[2 * u + 1] = -l[u];
                                    l = c
                                }
                                void 0 !== n && r.drawLine(l, e, a, s, n, i), r.fillRect(0, a + s - r.halfPixel, r.width, r.halfPixel)
                            })
                        }
                    }, {
                        key: "drawLine",
                        value: function(t, e, n, i, r, o) {
                            var s = this;
                            this.canvases.forEach(function(a) { s.setFillStyles(a), s.drawLineToContext(a, a.waveCtx, t, e, n, i, r, o), s.drawLineToContext(a, a.progressCtx, t, e, n, i, r, o) })
                        }
                    }, {
                        key: "drawLineToContext",
                        value: function(t, e, n, i, r, o, s, a) {
                            if (e) {
                                var l = n.length / 2,
                                    u = this.params.fillParent && this.width != l ? this.width / l : 1,
                                    c = Math.round(l * t.start),
                                    d = Math.round(l * t.end) + 1;
                                if (!(a < c || d < s)) {
                                    var f, h, p = Math.min(c, s),
                                        g = Math.max(d, a);
                                    for (e.beginPath(), e.moveTo((p - c) * u + this.halfPixel, r + o), f = p; f < g; f++) {
                                        var m = n[2 * f] || 0,
                                            v = Math.round(m / i * r);
                                        e.lineTo((f - c) * u + this.halfPixel, r - v + o)
                                    }
                                    for (h = g - 1; p <= h; h--) {
                                        var y = n[2 * h + 1] || 0,
                                            b = Math.round(y / i * r);
                                        e.lineTo((h - c) * u + this.halfPixel, r - b + o)
                                    }
                                    e.closePath(), e.fill()
                                }
                            }
                        }
                    }, {
                        key: "fillRect",
                        value: function(t, e, n, i) {
                            var r, o = Math.floor(t / this.maxCanvasWidth),
                                s = Math.min(Math.ceil((t + n) / this.maxCanvasWidth) + 1, this.canvases.length);
                            for (r = o; r < s; r++) {
                                var a = this.canvases[r],
                                    l = r * this.maxCanvasWidth,
                                    u = { x1: Math.max(t, r * this.maxCanvasWidth), y1: e, x2: Math.min(t + n, r * this.maxCanvasWidth + a.waveCtx.canvas.width), y2: e + i };
                                u.x1 < u.x2 && (this.setFillStyles(a), this.fillRectToContext(a.waveCtx, u.x1 - l, u.y1, u.x2 - u.x1, u.y2 - u.y1), this.fillRectToContext(a.progressCtx, u.x1 - l, u.y1, u.x2 - u.x1, u.y2 - u.y1))
                            }
                        }
                    }, {
                        key: "prepareDraw",
                        value: function(t, e, n, i, r) {
                            var o = this;
                            return c.frame(function() {
                                if (t[0] instanceof Array) {
                                    var s = t;
                                    if (o.params.splitChannels) return o.setHeight(s.length * o.params.height * o.params.pixelRatio), s.forEach(function(t, e) { return o.prepareDraw(t, e, n, i, r) });
                                    t = s[0]
                                }
                                var a = 1 / o.params.barHeight;
                                if (o.params.normalize) {
                                    var l = c.max(t),
                                        u = c.min(t);
                                    a = l < -u ? -u : l
                                }
                                var d = [].some.call(t, function(t) { return t < 0 }),
                                    f = o.params.height * o.params.pixelRatio;
                                return r({ absmax: a, hasMinVals: d, height: f, offsetY: f * e || 0, halfH: f / 2, peaks: t })
                            })()
                        }
                    }, { key: "fillRectToContext", value: function(t, e, n, i, r) { t && t.fillRect(e, n, i, r) } }, { key: "setFillStyles", value: function(t) { t.waveCtx.fillStyle = this.params.waveColor, this.hasProgressCanvas && (t.progressCtx.fillStyle = this.params.progressColor) } }, { key: "getImage", value: function(t, e) { var n = this.canvases.map(function(n) { return n.wave.toDataURL(t, e) }); return 1 < n.length ? n : n[0] } }, { key: "updateProgress", value: function(t) { this.style(this.progressWave, { width: t + "px" }) } }]) && r(n.prototype, i), l && r(n, l), e
                }();
            e["default"] = d, t.exports = e["default"]
        }, function(t, e, n) {
            "use strict";

            function i(t) { return (i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) { return typeof t } : function(t) { return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t })(t) }

            function r(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var i = e[n];
                    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
                }
            }

            function o(t, e) { return !e || "object" !== i(e) && "function" != typeof e ? function(t) { if (void 0 !== t) return t; throw new ReferenceError("this hasn't been initialised - super() hasn't been called") }(t) : e }

            function s(t) { return (s = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) { return t.__proto__ || Object.getPrototypeOf(t) })(t) }

            function a(t, e) { return (a = Object.setPrototypeOf || function(t, e) { return t.__proto__ = e, t })(t, e) }
            Object.defineProperty(e, "__esModule", { value: !0 }), e["default"] = void 0;
            var l = function(t) {
                    if (t && t.__esModule) return t;
                    var e = {};
                    if (null != t)
                        for (var n in t)
                            if (Object.prototype.hasOwnProperty.call(t, n)) {
                                var i = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(t, n) : {};
                                i.get || i.set ? Object.defineProperty(e, n, i) : e[n] = t[n]
                            }
                    return e["default"] = t, e
                }(n(0)),
                u = function(t) {
                    function e(t, n) { var i; return function(t, e) { if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function") }(this, e), (i = o(this, s(e).call(this))).container = t, i.params = n, i.width = 0, i.height = n.height * i.params.pixelRatio, i.lastPos = 0, i.wrapper = null, i }
                    var n, i, u;
                    return function(t, e) {
                        if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                        t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), e && a(t, e)
                    }(e, l.Observer), n = e, (i = [{ key: "style", value: function(t, e) { return l.style(t, e) } }, { key: "createWrapper", value: function() { this.wrapper = this.container.appendChild(document.createElement("wave")), this.style(this.wrapper, { display: "block", position: "relative", userSelect: "none", webkitUserSelect: "none", height: this.params.height + "px" }), (this.params.fillParent || this.params.scrollParent) && this.style(this.wrapper, { width: "100%", overflowX: this.params.hideScrollbar ? "hidden" : "auto", overflowY: "hidden" }), this.setupWrapperEvents() } }, {
                        key: "handleEvent",
                        value: function(t, e) {
                            !e && t.preventDefault();
                            var n, i = t.targetTouches ? t.targetTouches[0].clientX : t.clientX,
                                r = this.wrapper.getBoundingClientRect(),
                                o = this.width,
                                s = this.getWidth();
                            return !this.params.fillParent && o < s ? 1 < (n = (i - r.left) * (this.params.pixelRatio / o) || 0) && (n = 1) : n = (i - r.left + this.wrapper.scrollLeft) / this.wrapper.scrollWidth || 0, n
                        }
                    }, {
                        key: "setupWrapperEvents",
                        value: function() {
                            var t = this;
                            this.wrapper.addEventListener("click", function(e) {
                                var n = t.wrapper.offsetHeight - t.wrapper.clientHeight;
                                if (0 != n) { var i = t.wrapper.getBoundingClientRect(); if (e.clientY >= i.bottom - n) return }
                                t.params.interact && t.fireEvent("click", e, t.handleEvent(e))
                            }), this.wrapper.addEventListener("scroll", function(e) { return t.fireEvent("scroll", e) })
                        }
                    }, { key: "drawPeaks", value: function(t, e, n, i) { this.setWidth(e) || this.clearWave(), this.params.barWidth ? this.drawBars(t, 0, n, i) : this.drawWave(t, 0, n, i) } }, { key: "resetScroll", value: function() { null !== this.wrapper && (this.wrapper.scrollLeft = 0) } }, {
                        key: "recenter",
                        value: function(t) {
                            var e = this.wrapper.scrollWidth * t;
                            this.recenterOnPosition(e, !0)
                        }
                    }, {
                        key: "recenterOnPosition",
                        value: function(t, e) {
                            var n = this.wrapper.scrollLeft,
                                i = ~~(this.wrapper.clientWidth / 2),
                                r = this.wrapper.scrollWidth - this.wrapper.clientWidth,
                                o = t - i,
                                s = o - n;
                            0 != r && (!e && -i <= s && s < i && (o = n + (s = Math.max(-5, Math.min(5, s)))), (o = Math.max(0, Math.min(r, o))) != n && (this.wrapper.scrollLeft = o))
                        }
                    }, {
                        key: "getScrollX",
                        value: function() {
                            var t = this.params.pixelRatio,
                                e = Math.round(this.wrapper.scrollLeft * t);
                            if (this.params.scrollParent) {
                                var n = ~~(this.wrapper.scrollWidth * t - this.getWidth());
                                e = Math.min(n, Math.max(0, e))
                            }
                            return e
                        }
                    }, { key: "getWidth", value: function() { return Math.round(this.container.clientWidth * this.params.pixelRatio) } }, { key: "setWidth", value: function(t) { return this.width != t && (this.width = t, this.params.fillParent || this.params.scrollParent ? this.style(this.wrapper, { width: "" }) : this.style(this.wrapper, { width: ~~(this.width / this.params.pixelRatio) + "px" }), this.updateSize(), !0) } }, { key: "setHeight", value: function(t) { return t != this.height && (this.height = t, this.style(this.wrapper, { height: ~~(this.height / this.params.pixelRatio) + "px" }), this.updateSize(), !0) } }, {
                        key: "progress",
                        value: function(t) {
                            var e = 1 / this.params.pixelRatio,
                                n = Math.round(t * this.width) * e;
                            if (n < this.lastPos || n - this.lastPos >= e) {
                                if (this.lastPos = n, this.params.scrollParent && this.params.autoCenter) {
                                    var i = ~~(this.wrapper.scrollWidth * t);
                                    this.recenterOnPosition(i)
                                }
                                this.updateProgress(n)
                            }
                        }
                    }, { key: "destroy", value: function() { this.unAll(), this.wrapper && (this.wrapper.parentNode == this.container && this.container.removeChild(this.wrapper), this.wrapper = null) } }, { key: "updateCursor", value: function() {} }, { key: "updateSize", value: function() {} }, { key: "drawBars", value: function(t, e, n, i) {} }, { key: "drawWave", value: function(t, e, n, i) {} }, { key: "clearWave", value: function() {} }, { key: "updateProgress", value: function(t) {} }]) && r(n.prototype, i), u && r(n, u), e
                }();
            e["default"] = u, t.exports = e["default"]
        }, function(t, e, n) {
            "use strict";

            function i(t) { return (i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) { return typeof t } : function(t) { return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t })(t) }

            function r(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var i = e[n];
                    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
                }
            }

            function o(t, e) { return !e || "object" !== i(e) && "function" != typeof e ? function(t) { if (void 0 !== t) return t; throw new ReferenceError("this hasn't been initialised - super() hasn't been called") }(t) : e }

            function s(t, e, n) { return (s = "undefined" != typeof Reflect && Reflect.get ? Reflect.get : function(t, e, n) { var i = function(t, e) { for (; !Object.prototype.hasOwnProperty.call(t, e) && null !== (t = a(t));); return t }(t, e); if (i) { var r = Object.getOwnPropertyDescriptor(i, e); return r.get ? r.get.call(n) : r.value } })(t, e, n || t) }

            function a(t) { return (a = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) { return t.__proto__ || Object.getPrototypeOf(t) })(t) }

            function l(t, e) { return (l = Object.setPrototypeOf || function(t, e) { return t.__proto__ = e, t })(t, e) }
            Object.defineProperty(e, "__esModule", { value: !0 }), e["default"] = void 0;
            var u, c = (u = n(3)) && u.__esModule ? u : { "default": u };
            ! function(t) {
                if (!t || !t.__esModule) {
                    var e = {};
                    if (null != t)
                        for (var n in t)
                            if (Object.prototype.hasOwnProperty.call(t, n)) {
                                var i = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(t, n) : {};
                                i.get || i.set ? Object.defineProperty(e, n, i) : e[n] = t[n]
                            }
                    e["default"] = t
                }
            }(n(0));
            var d = function(t) {
                function e(t) { var n; return function(t, e) { if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function") }(this, e), (n = o(this, a(e).call(this, t))).params = t, n.media = { currentTime: 0, duration: 0, paused: !0, playbackRate: 1, play: function() {}, pause: function() {}, volume: 0 }, n.mediaType = t.mediaType.toLowerCase(), n.elementPosition = t.elementPosition, n.peaks = null, n.playbackRate = 1, n.volume = 1, n.buffer = null, n.onPlayEnd = null, n }
                var n, i, u;
                return function(t, e) {
                    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                    t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), e && l(t, e)
                }(e, c["default"]), n = e, (i = [{ key: "init", value: function() { this.setPlaybackRate(this.params.audioRate), this.createTimer() } }, {
                    key: "createTimer",
                    value: function() {
                        var t = this;
                        this.on("play", function e() { t.isPaused() || (t.fireEvent("audioprocess", t.getCurrentTime()), (window.requestAnimationFrame || window.webkitRequestAnimationFrame)(e)) }), this.on("pause", function() { t.fireEvent("audioprocess", t.getCurrentTime()) })
                    }
                }, {
                    key: "load",
                    value: function(t, e, n, i) {
                        var r = document.createElement(this.mediaType);
                        r.controls = this.params.mediaControls, r.autoplay = this.params.autoplay || !1, r.preload = null == i ? "auto" : i, r.src = t, r.style.width = "100%";
                        var o = e.querySelector(this.mediaType);
                        o && e.removeChild(o), e.appendChild(r), this._load(r, n)
                    }
                }, { key: "loadElt", value: function(t, e) { t.controls = this.params.mediaControls, t.autoplay = this.params.autoplay || !1, this._load(t, e) } }, { key: "_load", value: function(t, e) { var n = this; "function" == typeof t.load && t.load(), t.addEventListener("error", function() { n.fireEvent("error", "Error loading media element") }), t.addEventListener("canplay", function() { n.fireEvent("canplay") }), t.addEventListener("ended", function() { n.fireEvent("finish") }), t.addEventListener("play", function() { n.fireEvent("play") }), t.addEventListener("pause", function() { n.fireEvent("pause") }), this.media = t, this.peaks = e, this.onPlayEnd = null, this.buffer = null, this.setPlaybackRate(this.playbackRate), this.setVolume(this.volume) } }, { key: "isPaused", value: function() { return !this.media || this.media.paused } }, { key: "getDuration", value: function() { if (this.explicitDuration) return this.explicitDuration; var t = (this.buffer || this.media).duration; return 1 / 0 <= t && (t = this.media.seekable.end(0)), t } }, { key: "getCurrentTime", value: function() { return this.media && this.media.currentTime } }, { key: "getPlayedPercents", value: function() { return this.getCurrentTime() / this.getDuration() || 0 } }, { key: "getPlaybackRate", value: function() { return this.playbackRate || this.media.playbackRate } }, { key: "setPlaybackRate", value: function(t) { this.playbackRate = t || 1, this.media.playbackRate = this.playbackRate } }, { key: "seekTo", value: function(t) { null != t && (this.media.currentTime = t), this.clearPlayEnd() } }, { key: "play", value: function(t, e) { this.seekTo(t); var n = this.media.play(); return e && this.setPlayEnd(e), n } }, { key: "pause", value: function() { var t; return this.media && (t = this.media.pause()), this.clearPlayEnd(), t } }, {
                    key: "setPlayEnd",
                    value: function(t) {
                        var e = this;
                        this._onPlayEnd = function(n) { t <= n && (e.pause(), e.seekTo(t)) }, this.on("audioprocess", this._onPlayEnd)
                    }
                }, { key: "clearPlayEnd", value: function() { this._onPlayEnd && (this.un("audioprocess", this._onPlayEnd), this._onPlayEnd = null) } }, { key: "getPeaks", value: function(t, n, i) { return this.buffer ? s(a(e.prototype), "getPeaks", this).call(this, t, n, i) : this.peaks || [] } }, { key: "setSinkId", value: function(t) { return t ? this.media.setSinkId ? this.media.setSinkId(t) : Promise.reject(new Error("setSinkId is not supported in your browser")) : Promise.reject(new Error("Invalid deviceId: " + t)) } }, { key: "getVolume", value: function() { return this.volume || this.media.volume } }, { key: "setVolume", value: function(t) { this.volume = t, this.media.volume = this.volume } }, { key: "destroy", value: function() { this.pause(), this.unAll(), this.params.removeMediaElementOnDestroy && this.media && this.media.parentNode && this.media.parentNode.removeChild(this.media), this.media = null } }]) && r(n.prototype, i), u && r(n, u), e
            }();
            e["default"] = d, t.exports = e["default"]
        }, function(t, e, n) {
            "use strict";

            function i(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var i = e[n];
                    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
                }
            }
            Object.defineProperty(e, "__esModule", { value: !0 }), e["default"] = void 0;
            var r = function() {
                function t() {! function(t, e) { if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function") }(this, t), this.clearPeakCache() }
                var e, n, r;
                return e = t, (n = [{ key: "clearPeakCache", value: function() { this.peakCacheRanges = [], this.peakCacheLength = -1 } }, {
                    key: "addRangeToPeakCache",
                    value: function(t, e, n) {
                        t != this.peakCacheLength && (this.clearPeakCache(), this.peakCacheLength = t);
                        for (var i = [], r = 0; r < this.peakCacheRanges.length && this.peakCacheRanges[r] < e;) r++;
                        for (r % 2 == 0 && i.push(e); r < this.peakCacheRanges.length && this.peakCacheRanges[r] <= n;) i.push(this.peakCacheRanges[r]), r++;
                        r % 2 == 0 && i.push(n), i = i.filter(function(t, e, n) { return 0 == e ? t != n[e + 1] : e == n.length - 1 ? t != n[e - 1] : t != n[e - 1] && t != n[e + 1] }), this.peakCacheRanges = this.peakCacheRanges.concat(i), this.peakCacheRanges = this.peakCacheRanges.sort(function(t, e) { return t - e }).filter(function(t, e, n) { return 0 == e ? t != n[e + 1] : e == n.length - 1 ? t != n[e - 1] : t != n[e - 1] && t != n[e + 1] });
                        var o = [];
                        for (r = 0; r < i.length; r += 2) o.push([i[r], i[r + 1]]);
                        return o
                    }
                }, { key: "getCacheRanges", value: function() { var t, e = []; for (t = 0; t < this.peakCacheRanges.length; t += 2) e.push([this.peakCacheRanges[t], this.peakCacheRanges[t + 1]]); return e } }]) && i(e.prototype, n), r && i(e, r), t
            }();
            e["default"] = r, t.exports = e["default"]
        }])
    })
}, function(e, n) {
    ! function(e) {
        e.fn.extend({
            slimScroll: function(n) {
                var i = { width: "auto", height: "250px", size: "7px", color: "#000", position: "right", distance: "1px", start: "top", opacity: .4, alwaysVisible: !1, disableFadeOut: !1, railVisible: !1, railColor: "#333", railOpacity: .2, railDraggable: !0, railClass: "slimScrollRail", barClass: "slimScrollBar", wrapperClass: "slimScrollDiv", allowPageScroll: !1, wheelStep: 20, touchScrollStep: 200, borderRadius: "7px", railBorderRadius: "7px" },
                    r = e.extend(i, n);
                return this.each(function() {
                    function i(t) {
                        if (c) {
                            var t = t || window.event,
                                n = 0;
                            t.wheelDelta && (n = -t.wheelDelta / 120), t.detail && (n = t.detail / 3);
                            var i = t.target || t.srcTarget || t.srcElement;
                            e(i).closest("." + r.wrapperClass).is(S.parent()) && o(n, !0), t.preventDefault && !w && t.preventDefault(), w || (t.returnValue = !1)
                        }
                    }

                    function o(t, e, n) {
                        w = !1;
                        var i = t,
                            o = S.outerHeight() - k.outerHeight();
                        if (e && (i = parseInt(k.css("top")) + t * parseInt(r.wheelStep) / 100 * k.outerHeight(), i = Math.min(Math.max(i, 0), o), i = t > 0 ? Math.ceil(i) : Math.floor(i), k.css({ top: i + "px" })), m = parseInt(k.css("top")) / (S.outerHeight() - k.outerHeight()), i = m * (S[0].scrollHeight - S.outerHeight()), n) {
                            i = t;
                            var s = i / S[0].scrollHeight * S.outerHeight();
                            s = Math.min(Math.max(s, 0), o), k.css({ top: s + "px" })
                        }
                        S.scrollTop(i), S.trigger("slimscrolling", ~~i), l(), u()
                    }

                    function s(t) { window.addEventListener ? (t.addEventListener("DOMMouseScroll", i, !1), t.addEventListener("mousewheel", i, !1)) : document.attachEvent("onmousewheel", i) }

                    function a() {
                        g = Math.max(S.outerHeight() / S[0].scrollHeight * S.outerHeight(), b), k.css({ height: g + "px" });
                        var t = g == S.outerHeight() ? "none" : "block";
                        k.css({ display: t })
                    }

                    function l() {
                        if (a(), clearTimeout(h), m == ~~m) {
                            if (w = r.allowPageScroll, v != m) {
                                var t = 0 == ~~m ? "top" : "bottom";
                                S.trigger("slimscroll", t)
                            }
                        } else w = !1;
                        return v = m, g >= S.outerHeight() ? void(w = !0) : (k.stop(!0, !0).fadeIn("fast"), void(r.railVisible && x.stop(!0, !0).fadeIn("fast")))
                    }

                    function u() { r.alwaysVisible || (h = setTimeout(function() { r.disableFadeOut && c || d || f || (k.fadeOut("slow"), x.fadeOut("slow")) }, 1e3)) }
                    var c, d, f, h, p, g, m, v, y = "<div></div>",
                        b = 30,
                        w = !1,
                        S = e(this);
                    if (S.parent().hasClass(r.wrapperClass)) {
                        var _ = S.scrollTop();
                        if (k = S.siblings("." + r.barClass), x = S.siblings("." + r.railClass), a(), e.isPlainObject(n)) {
                            if ("height" in n && "auto" == n.height) {
                                S.parent().css("height", "auto"), S.css("height", "auto");
                                var C = S.parent().parent().height();
                                S.parent().css("height", C), S.css("height", C)
                            } else if ("height" in n) {
                                var T = n.height;
                                S.parent().css("height", T), S.css("height", T)
                            }
                            if ("scrollTo" in n) _ = parseInt(r.scrollTo);
                            else if ("scrollBy" in n) _ += parseInt(r.scrollBy);
                            else if ("destroy" in n) return k.remove(), x.remove(), void S.unwrap();
                            o(_, !1, !0)
                        }
                    } else if (!(e.isPlainObject(n) && "destroy" in n)) {
                        r.height = "auto" == r.height ? S.parent().height() : r.height;
                        var E = e(y).addClass(r.wrapperClass).css({ position: "relative", overflow: "hidden", width: r.width, height: r.height });
                        S.css({ overflow: "hidden", width: r.width, height: r.height });
                        var x = e(y).addClass(r.railClass).css({ width: r.size, height: "100%", position: "absolute", top: 0, display: r.alwaysVisible && r.railVisible ? "block" : "none", "border-radius": r.railBorderRadius, background: r.railColor, opacity: r.railOpacity, zIndex: 90 }),
                            k = e(y).addClass(r.barClass).css({ background: r.color, width: r.size, position: "absolute", top: 0, opacity: r.opacity, display: r.alwaysVisible ? "block" : "none", "border-radius": r.borderRadius, BorderRadius: r.borderRadius, MozBorderRadius: r.borderRadius, WebkitBorderRadius: r.borderRadius, zIndex: 99 }),
                            O = "right" == r.position ? { right: r.distance } : { left: r.distance };
                        x.css(O), k.css(O), S.wrap(E), S.parent().append(k), S.parent().append(x), r.railDraggable && k.bind("mousedown", function(n) { var i = e(document); return f = !0, t = parseFloat(k.css("top")), pageY = n.pageY, i.bind("mousemove.slimscroll", function(e) { currTop = t + e.pageY - pageY, k.css("top", currTop), o(0, k.position().top, !1) }), i.bind("mouseup.slimscroll", function(t) { f = !1, u(), i.unbind(".slimscroll") }), !1 }).bind("selectstart.slimscroll", function(t) { return t.stopPropagation(), t.preventDefault(), !1 }), x.hover(function() { l() }, function() { u() }), k.hover(function() { d = !0 }, function() { d = !1 }), S.hover(function() { c = !0, l(), u() }, function() { c = !1, u() }), S.bind("touchstart", function(t, e) { t.originalEvent.touches.length && (p = t.originalEvent.touches[0].pageY) }), S.bind("touchmove", function(t) {
                            if (w || t.originalEvent.preventDefault(), t.originalEvent.touches.length) {
                                var e = (p - t.originalEvent.touches[0].pageY) / r.touchScrollStep;
                                o(e, !0), p = t.originalEvent.touches[0].pageY
                            }
                        }), a(), "bottom" === r.start ? (k.css({ top: S.outerHeight() - k.outerHeight() }), o(0, !0)) : "top" !== r.start && (o(e(r.start).position().top, null, !0), r.alwaysVisible || k.hide()), s(this)
                    }
                }), this
            }
        }), e.fn.extend({ slimscroll: e.fn.slimScroll })
    }(jQuery)
}, function(t, e, n) {
    var i, r;
    ! function(n, o) {
        "use strict";
        i = [], r = function() { return n.Snackbar = o() }.apply(e, i), !(void 0 !== r && (t.exports = r))
    }(this, function() {
        var t = {};
        t.current = null;
        var e = { text: "Default Text", textColor: "#FFFFFF", width: "auto", showAction: !0, actionText: "Dismiss", actionTextAria: "Dismiss, Description for Screen Readers", actionTextColor: "#4CAF50", showSecondButton: !1, secondButtonText: "", secondButtonAria: "Description for Screen Readers", secondButtonTextColor: "#4CAF50", backgroundColor: "#323232", pos: "bottom-left", duration: 5e3, customClass: "", onActionClick: function(t) { t.style.opacity = 0 }, onSecondButtonClick: function(t) {}, onClose: function(t) {} };
        t.show = function(i) {
            var r = n(!0, e, i);
            t.current && (t.current.style.opacity = 0, setTimeout(function() {
                var t = this.parentElement;
                t && t.removeChild(this)
            }.bind(t.current), 500)), t.snackbar = document.createElement("div"), t.snackbar.className = "snackbar-container " + r.customClass, t.snackbar.style.width = r.width;
            var o = document.createElement("p");
            if (o.style.margin = 0, o.style.padding = 0, o.style.color = r.textColor, o.style.fontSize = "14px", o.style.fontWeight = 300, o.style.lineHeight = "1em", o.innerHTML = r.text, t.snackbar.appendChild(o), t.snackbar.style.background = r.backgroundColor, r.showSecondButton) {
                var s = document.createElement("button");
                s.className = "action", s.innerHTML = r.secondButtonText, s.setAttribute("aria-label", r.secondButtonAria), s.style.color = r.secondButtonTextColor, s.addEventListener("click", function() { r.onSecondButtonClick(t.snackbar) }), t.snackbar.appendChild(s)
            }
            if (r.showAction) {
                var a = document.createElement("button");
                a.className = "action", a.innerHTML = r.actionText, a.setAttribute("aria-label", r.actionTextAria), a.style.color = r.actionTextColor, a.addEventListener("click", function() { r.onActionClick(t.snackbar) }), t.snackbar.appendChild(a)
            }
            r.duration && setTimeout(function() { t.current === this && (t.current.style.opacity = 0, t.current.style.top = "-100px", t.current.style.bottom = "-100px") }.bind(t.snackbar), r.duration), t.snackbar.addEventListener("transitionend", function(e, n) { "opacity" === e.propertyName && "0" === this.style.opacity && ("function" == typeof r.onClose && r.onClose(this), this.parentElement.removeChild(this), t.current === this && (t.current = null)) }.bind(t.snackbar)), t.current = t.snackbar, document.body.appendChild(t.snackbar);
            getComputedStyle(t.snackbar).bottom, getComputedStyle(t.snackbar).top;
            t.snackbar.style.opacity = 1, t.snackbar.className = "snackbar-container " + r.customClass + " snackbar-pos " + r.pos
        }, t.close = function() { t.current && (t.current.style.opacity = 0) };
        var n = function() {
            var t = {},
                e = !1,
                i = 0,
                r = arguments.length;
            "[object Boolean]" === Object.prototype.toString.call(arguments[0]) && (e = arguments[0], i++);
            for (var o = function(i) { for (var r in i) Object.prototype.hasOwnProperty.call(i, r) && (e && "[object Object]" === Object.prototype.toString.call(i[r]) ? t[r] = n(!0, t[r], i[r]) : t[r] = i[r]) }; i < r; i++) {
                var s = arguments[i];
                o(s)
            }
            return t
        };
        return t
    })
}, function(t, e, n) {
    var i, r;
    ! function(o, s) { i = s, r = "function" == typeof i ? i.call(e, n, e, t) : i, !(void 0 !== r && (t.exports = r)) }("undefined" != typeof window ? window : this, function() {
        "use strict";

        function t() {}
        var e = t.prototype;
        return e.on = function(t, e) {
            if (t && e) {
                var n = this._events = this._events || {},
                    i = n[t] = n[t] || [];
                return i.indexOf(e) == -1 && i.push(e), this
            }
        }, e.once = function(t, e) {
            if (t && e) {
                this.on(t, e);
                var n = this._onceEvents = this._onceEvents || {},
                    i = n[t] = n[t] || {};
                return i[e] = !0, this
            }
        }, e.off = function(t, e) { var n = this._events && this._events[t]; if (n && n.length) { var i = n.indexOf(e); return i != -1 && n.splice(i, 1), this } }, e.emitEvent = function(t, e) {
            var n = this._events && this._events[t];
            if (n && n.length) {
                n = n.slice(0), e = e || [];
                for (var i = this._onceEvents && this._onceEvents[t], r = 0; r < n.length; r++) {
                    var o = n[r],
                        s = i && i[o];
                    s && (this.off(t, o), delete i[o]), o.apply(this, e)
                }
                return this
            }
        }, e.allOff = function() { delete this._events, delete this._onceEvents }, t
    })
}, function(t, e, n) { t.exports = n(9) }, function(t, e, n) { window.$ = window.jQuery = n(0), $("body").hasClass("has-preloader") && n(10), n(11), n(12), n(13), n(14), n(15), n(16), n(18), n(19), n(21), n(23), n(25), n(26), n(27), n(29), n(30), n(31), n(33), n(34), n(35), n(36), n(40), n(41), n(48), n(49), n(50), n(51), n(53) }, function(t, e, n) {
    var i = n(1);
    document.addEventListener("DOMContentLoaded", function() { i.start() }), window.addEventListener("load", function() {
        var t = document.body,
            e = document.getElementById("loader");
        t.classList.add("loaded"), e.classList.add("loader-fade"), i.done()
    }, !0)
}, function(t, e) { getNumberWithCommas = function(t) { return t.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") }, isElementInViewport = function(t) { "function" == typeof jQuery && t instanceof jQuery && (t = t[0]); var e = t.getBoundingClientRect(); return e.top >= 0 && e.left >= 0 && e.bottom <= (window.innerHeight || document.documentElement.clientHeight) && e.right <= (window.innerWidth || document.documentElement.clientWidth) }, $.fn.hasData = function(t) { return "undefined" != typeof $(this).data(t) }, getDataOptions = function(t, e) { if (e || (e = "options"), $.fn.hasData(t)) { var n = $.extend({}, t.data()); return n.options ? n.options : null } return null } }, function(t, e) {
    ! function(t, e, n) {
        function i(t) {
            var e = T.className,
                n = _._config.classPrefix || "";
            if (E && (e = e.baseVal), _._config.enableJSClass) {
                var i = new RegExp("(^|\\s)" + n + "no-js(\\s|$)");
                e = e.replace(i, "$1" + n + "js$2")
            }
            _._config.enableClasses && (e += " " + n + t.join(" " + n), E ? T.className.baseVal = e : T.className = e)
        }

        function r(t, e) { return typeof t === e }

        function o() {
            var t, e, n, i, o, s, a;
            for (var l in w)
                if (w.hasOwnProperty(l)) {
                    if (t = [], e = w[l], e.name && (t.push(e.name.toLowerCase()), e.options && e.options.aliases && e.options.aliases.length))
                        for (n = 0; n < e.options.aliases.length; n++) t.push(e.options.aliases[n].toLowerCase());
                    for (i = r(e.fn, "function") ? e.fn() : e.fn, o = 0; o < t.length; o++) s = t[o], a = s.split("."), 1 === a.length ? _[a[0]] = i : (!_[a[0]] || _[a[0]] instanceof Boolean || (_[a[0]] = new Boolean(_[a[0]])), _[a[0]][a[1]] = i), b.push((i ? "" : "no-") + a.join("-"))
                }
        }

        function s() { return "function" != typeof e.createElement ? e.createElement(arguments[0]) : E ? e.createElementNS.call(e, "http://www.w3.org/2000/svg", arguments[0]) : e.createElement.apply(e, arguments) }

        function a(t) { return t.replace(/([a-z])-([a-z])/g, function(t, e, n) { return e + n.toUpperCase() }).replace(/^-/, "") }

        function l(t, e) { return !!~("" + t).indexOf(e) }

        function u() { var t = e.body; return t || (t = s(E ? "svg" : "body"), t.fake = !0), t }

        function c(t, n, i, r) {
            var o, a, l, c, d = "modernizr",
                f = s("div"),
                h = u();
            if (parseInt(i, 10))
                for (; i--;) l = s("div"), l.id = r ? r[i] : d + (i + 1), f.appendChild(l);
            return o = s("style"), o.type = "text/css", o.id = "s" + d, (h.fake ? h : f).appendChild(o), h.appendChild(f), o.styleSheet ? o.styleSheet.cssText = t : o.appendChild(e.createTextNode(t)), f.id = d, h.fake && (h.style.background = "", h.style.overflow = "hidden", c = T.style.overflow, T.style.overflow = "hidden", T.appendChild(h)), a = n(f, t), h.fake ? (h.parentNode.removeChild(h), T.style.overflow = c, T.offsetHeight) : f.parentNode.removeChild(f), !!a
        }

        function d(t, e) { return function() { return t.apply(e, arguments) } }

        function f(t, e, n) {
            var i;
            for (var o in t)
                if (t[o] in e) return n === !1 ? t[o] : (i = e[t[o]], r(i, "function") ? d(i, n || e) : i);
            return !1
        }

        function h(e, n, i) {
            var r;
            if ("getComputedStyle" in t) {
                r = getComputedStyle.call(t, e, n);
                var o = t.console;
                if (null !== r) i && (r = r.getPropertyValue(i));
                else if (o) {
                    var s = o.error ? "error" : "log";
                    o[s].call(o, "getComputedStyle returning null, its possible modernizr test results are inaccurate")
                }
            } else r = !n && e.currentStyle && e.currentStyle[i];
            return r
        }

        function p(t) { return t.replace(/([A-Z])/g, function(t, e) { return "-" + e.toLowerCase() }).replace(/^ms-/, "-ms-") }

        function g(e, i) {
            var r = e.length;
            if ("CSS" in t && "supports" in t.CSS) {
                for (; r--;)
                    if (t.CSS.supports(p(e[r]), i)) return !0;
                return !1
            }
            if ("CSSSupportsRule" in t) { for (var o = []; r--;) o.push("(" + p(e[r]) + ":" + i + ")"); return o = o.join(" or "), c("@supports (" + o + ") { #modernizr { position: absolute; } }", function(t) { return "absolute" == h(t, null, "position") }) }
            return n
        }

        function m(t, e, i, o) {
            function u() { d && (delete B.style, delete B.modElem) }
            if (o = !r(o, "undefined") && o, !r(i, "undefined")) { var c = g(t, i); if (!r(c, "undefined")) return c }
            for (var d, f, h, p, m, v = ["modernizr", "tspan", "samp"]; !B.style && v.length;) d = !0, B.modElem = s(v.shift()), B.style = B.modElem.style;
            for (h = t.length, f = 0; h > f; f++)
                if (p = t[f], m = B.style[p], l(p, "-") && (p = a(p)), B.style[p] !== n) { if (o || r(i, "undefined")) return u(), "pfx" != e || p; try { B.style[p] = i } catch (y) {} if (B.style[p] != m) return u(), "pfx" != e || p }
            return u(), !1
        }

        function v(t, e, n, i, o) {
            var s = t.charAt(0).toUpperCase() + t.slice(1),
                a = (t + " " + H.join(s + " ") + s).split(" ");
            return r(e, "string") || r(e, "undefined") ? m(a, e, i, o) : (a = (t + " " + k.join(s + " ") + s).split(" "), f(a, e, n))
        }

        function y(t, e, i) { return v(t, n, n, e, i) }
        var b = [],
            w = [],
            S = {
                _version: "3.5.0",
                _config: { classPrefix: "", enableClasses: !0, enableJSClass: !0, usePrefixes: !0 },
                _q: [],
                on: function(t, e) {
                    var n = this;
                    setTimeout(function() { e(n[t]) }, 0)
                },
                addTest: function(t, e, n) { w.push({ name: t, fn: e, options: n }) },
                addAsyncTest: function(t) { w.push({ name: null, fn: t }) }
            },
            _ = function() {};
        _.prototype = S, _ = new _, _.addTest("applicationcache", "applicationCache" in t), _.addTest("cors", "XMLHttpRequest" in t && "withCredentials" in new XMLHttpRequest), _.addTest("ie8compat", !t.addEventListener && !!e.documentMode && 7 === e.documentMode), _.addTest("history", function() { var e = navigator.userAgent; return (-1 === e.indexOf("Android 2.") && -1 === e.indexOf("Android 4.0") || -1 === e.indexOf("Mobile Safari") || -1 !== e.indexOf("Chrome") || -1 !== e.indexOf("Windows Phone") || "file:" === location.protocol) && (t.history && "pushState" in t.history) }), _.addTest("json", "JSON" in t && "parse" in JSON && "stringify" in JSON), _.addTest("postmessage", "postMessage" in t), _.addTest("strictmode", function() { "use strict"; return !this }()), _.addTest("devicemotion", "DeviceMotionEvent" in t), _.addTest("deviceorientation", "DeviceOrientationEvent" in t), _.addTest("filereader", !!(t.File && t.FileList && t.FileReader)), _.addTest("localstorage", function() { var t = "modernizr"; try { return localStorage.setItem(t, t), localStorage.removeItem(t), !0 } catch (e) { return !1 } }), _.addTest("sessionstorage", function() { var t = "modernizr"; try { return sessionStorage.setItem(t, t), sessionStorage.removeItem(t), !0 } catch (e) { return !1 } });
        var C = S._config.usePrefixes ? " -webkit- -moz- -o- -ms- ".split(" ") : ["", ""];
        S._prefixes = C;
        var T = e.documentElement,
            E = "svg" === T.nodeName.toLowerCase(),
            x = "Moz O ms Webkit",
            k = S._config.usePrefixes ? x.toLowerCase().split(" ") : [];
        S._domPrefixes = k;
        var O = function() {
            function t(t, e) { var r; return !!t && (e && "string" != typeof e || (e = s(e || "div")), t = "on" + t, r = t in e, !r && i && (e.setAttribute || (e = s("div")), e.setAttribute(t, ""), r = "function" == typeof e[t], e[t] !== n && (e[t] = n), e.removeAttribute(t)), r) }
            var i = !("onblur" in e.documentElement);
            return t
        }();
        S.hasEvent = O, _.addTest("hashchange", function() { return O("hashchange", t) !== !1 && (e.documentMode === n || e.documentMode > 7) }), _.addTest("cssgradients", function() {
            for (var t, e = "background-image:", n = "gradient(linear,left top,right bottom,from(#9f9),to(white));", i = "", r = 0, o = C.length - 1; o > r; r++) t = 0 === r ? "to " : "", i += e + C[r] + "linear-gradient(" + t + "left top, #9f9, white);";
            _._config.usePrefixes && (i += e + "-webkit-" + n);
            var a = s("a"),
                l = a.style;
            return l.cssText = i, ("" + l.backgroundImage).indexOf("gradient") > -1
        }), _.addTest("multiplebgs", function() { var t = s("a").style; return t.cssText = "background:url(https://),url(https://),red url(https://)", /(url\s*\(.*?){3}/.test(t.background) }), _.addTest("opacity", function() { var t = s("a").style; return t.cssText = C.join("opacity:.55;"), /^0.55$/.test(t.opacity) }), _.addTest("cssremunit", function() { var t = s("a").style; try { t.fontSize = "3rem" } catch (e) {} return /rem/.test(t.fontSize) }), _.addTest("rgba", function() { var t = s("a").style; return t.cssText = "background-color:rgba(150,255,150,.5)", ("" + t.backgroundColor).indexOf("rgba") > -1 }), _.addTest("fileinput", function() { if (navigator.userAgent.match(/(Android (1.0|1.1|1.5|1.6|2.0|2.1))|(Windows Phone (OS 7|8.0))|(XBLWP)|(ZuneWP)|(w(eb)?OSBrowser)|(webOS)|(Kindle\/(1.0|2.0|2.5|3.0))/)) return !1; var t = s("input"); return t.type = "file", !t.disabled }), _.addTest("formattribute", function() {
            var t, n = s("form"),
                i = s("input"),
                r = s("div"),
                o = "formtest" + (new Date).getTime(),
                a = !1;
            n.id = o;
            try { i.setAttribute("form", o) } catch (l) { e.createAttribute && (t = e.createAttribute("form"), t.nodeValue = o, i.setAttributeNode(t)) }
            return r.appendChild(n), r.appendChild(i), T.appendChild(r), a = n.elements && 1 === n.elements.length && i.form == n, r.parentNode.removeChild(r), a
        }), _.addTest("placeholder", "placeholder" in s("input") && "placeholder" in s("textarea"));
        var I = s("input"),
            A = "autocomplete autofocus list placeholder max min multiple pattern required step".split(" "),
            P = {};
        _.input = function(e) { for (var n = 0, i = e.length; i > n; n++) P[e[n]] = !!(e[n] in I); return P.list && (P.list = !(!s("datalist") || !t.HTMLDataListElement)), P }(A);
        var D = "search tel url email datetime date month week time datetime-local number range color".split(" "),
            L = {};
        _.inputtypes = function(t) { for (var i, r, o, s = t.length, a = "1)", l = 0; s > l; l++) I.setAttribute("type", i = t[l]), o = "text" !== I.type && "style" in I, o && (I.value = a, I.style.cssText = "position:absolute;visibility:hidden;", /^range$/.test(i) && I.style.WebkitAppearance !== n ? (T.appendChild(I), r = e.defaultView, o = r.getComputedStyle && "textfield" !== r.getComputedStyle(I, null).WebkitAppearance && 0 !== I.offsetHeight, T.removeChild(I)) : /^(search|tel)$/.test(i) || (o = /^(url|email)$/.test(i) ? I.checkValidity && I.checkValidity() === !1 : I.value != a)), L[t[l]] = !!o; return L }(D), _.addTest("hsla", function() { var t = s("a").style; return t.cssText = "background-color:hsla(120,40%,100%,.5)", l(t.backgroundColor, "rgba") || l(t.backgroundColor, "hsla") });
        var N = "CSS" in t && "supports" in t.CSS,
            $ = "supportsCSS" in t;
        _.addTest("supports", N || $);
        var H = S._config.usePrefixes ? x.split(" ") : [];
        S._cssomPrefixes = H;
        var M = function(e) {
            var i, r = C.length,
                o = t.CSSRule;
            if ("undefined" == typeof o) return n;
            if (!e) return !1;
            if (e = e.replace(/^@/, ""), i = e.replace(/-/g, "_").toUpperCase() + "_RULE", i in o) return "@" + e;
            for (var s = 0; r > s; s++) {
                var a = C[s],
                    l = a.toUpperCase() + "_" + i;
                if (l in o) return "@-" + a.toLowerCase() + "-" + e
            }
            return !1
        };
        S.atRule = M;
        var j = S.testStyles = c,
            W = function() {
                var t = navigator.userAgent,
                    e = t.match(/w(eb)?osbrowser/gi),
                    n = t.match(/windows phone/gi) && t.match(/iemobile\/([0-9])+/gi) && parseFloat(RegExp.$1) >= 9;
                return e || n
            }();
        W ? _.addTest("fontface", !1) : j('@font-face {font-family:"font";src:url("https://")}', function(t, n) {
            var i = e.getElementById("smodernizr"),
                r = i.sheet || i.styleSheet,
                o = r ? r.cssRules && r.cssRules[0] ? r.cssRules[0].cssText : r.cssText || "" : "",
                s = /src/i.test(o) && 0 === o.indexOf(n.split(" ")[0]);
            _.addTest("fontface", s)
        }), j('#modernizr{font:0/0 a}#modernizr:after{content:":)";visibility:hidden;font:7px/1 a}', function(t) { _.addTest("generatedcontent", t.offsetHeight >= 6) }), j("#modernizr{overflow: scroll; width: 40px; height: 40px; }#" + C.join("scrollbar{width:10px} #modernizr::").split("#").slice(1).join("#") + "scrollbar{width:10px}", function(t) { _.addTest("cssscrollbar", "scrollWidth" in t && 30 == t.scrollWidth) }), _.addTest("formvalidation", function() {
            var e = s("form");
            if (!("checkValidity" in e && "addEventListener" in e)) return !1;
            if ("reportValidity" in e) return !0;
            var n, i = !1;
            return _.formvalidationapi = !0, e.addEventListener("submit", function(e) {
                (!t.opera || t.operamini) && e.preventDefault(), e.stopPropagation()
            }, !1), e.innerHTML = '<input name="modTest" required="required" /><button></button>', j("#modernizr form{position:absolute;top:-99999em}", function(t) { t.appendChild(e), n = e.getElementsByTagName("input")[0], n.addEventListener("invalid", function(t) { i = !0, t.preventDefault(), t.stopPropagation() }, !1), _.formvalidationmessage = !!n.validationMessage, e.getElementsByTagName("button")[0].click() }), i
        });
        var R = { elem: s("modernizr") };
        _._q.push(function() { delete R.elem });
        var B = { style: R.elem.style };
        _._q.unshift(function() { delete B.style });
        var z = S.testProp = function(t, e, i) { return m([t], n, e, i) };
        _.addTest("textshadow", z("textShadow", "1px 1px")), S.testAllProps = v;
        var F = S.prefixed = function(t, e, n) { return 0 === t.indexOf("@") ? M(t) : (-1 != t.indexOf("-") && (t = a(t)), e ? v(t, e, n) : v(t, "pfx")) };
        _.addTest("fullscreen", !(!F("exitFullscreen", e, !1) && !F("cancelFullScreen", e, !1))), _.addTest("filesystem", !!F("requestFileSystem", t)), S.testAllProps = y, _.addTest("cssanimations", y("animationName", "a", !0)), _.addTest("backgroundsize", y("backgroundSize", "100%", !0)), _.addTest("borderradius", y("borderRadius", "0px", !0)), _.addTest("borderimage", y("borderImage", "url() 1", !0)), _.addTest("boxshadow", y("boxShadow", "1px 1px", !0)),
            function() {
                _.addTest("csscolumns", function() {
                    var t = !1,
                        e = y("columnCount");
                    try { t = !!e, t && (t = new Boolean(t)) } catch (n) {}
                    return t
                });
                for (var t, e, n = ["Width", "Span", "Fill", "Gap", "Rule", "RuleColor", "RuleStyle", "RuleWidth", "BreakBefore", "BreakAfter", "BreakInside"], i = 0; i < n.length; i++) t = n[i].toLowerCase(), e = y("column" + n[i]), ("breakbefore" === t || "breakafter" === t || "breakinside" == t) && (e = e || y(n[i])), _.addTest("csscolumns." + t, e)
            }(), _.addTest("flexbox", y("flexBasis", "1px", !0)), _.addTest("flexboxlegacy", y("boxDirection", "reverse", !0)), _.addTest("overflowscrolling", y("overflowScrolling", "touch", !0)), _.addTest("cssreflections", y("boxReflect", "above", !0)), _.addTest("csstransforms", function() { return -1 === navigator.userAgent.indexOf("Android 2.") && y("transform", "scale(1)", !0) }), _.addTest("csstransforms3d", function() {
                var t = !!y("perspective", "1px", !0),
                    e = _._config.usePrefixes;
                if (t && (!e || "webkitPerspective" in T.style)) {
                    var n, i = "#modernizr{width:0;height:0}";
                    _.supports ? n = "@supports (perspective: 1px)" : (n = "@media (transform-3d)", e && (n += ",(-webkit-transform-3d)")), n += "{#modernizr{width:7px;height:18px;margin:0;padding:0;border:0}}", j(i + n, function(e) { t = 7 === e.offsetWidth && 18 === e.offsetHeight })
                }
                return t
            }), _.addTest("csstransitions", y("transition", "all", !0)), o(), i(b), delete S.addTest, delete S.addAsyncTest;
        for (var q = 0; q < _._q.length; q++) _._q[q]();
        t.Modernizr = _
    }(window, document)
}, function(t, e, n) {
    var i, r;
    ! function(o) { i = [n(0)], r = function(t) { return o(t) }.apply(e, i), !(void 0 !== r && (t.exports = r)) }(function(t) {
        function e(t) {
            var e = 7.5625,
                n = 2.75;
            return t < 1 / n ? e * t * t : t < 2 / n ? e * (t -= 1.5 / n) * t + .75 : t < 2.5 / n ? e * (t -= 2.25 / n) * t + .9375 : e * (t -= 2.625 / n) * t + .984375
        }
        t.easing.jswing = t.easing.swing;
        var n = Math.pow,
            i = Math.sqrt,
            r = Math.sin,
            o = Math.cos,
            s = Math.PI,
            a = 1.70158,
            l = 1.525 * a,
            u = a + 1,
            c = 2 * s / 3,
            d = 2 * s / 4.5;
        t.extend(t.easing, { def: "easeOutQuad", swing: function(e) { return t.easing[t.easing.def](e) }, easeInQuad: function(t) { return t * t }, easeOutQuad: function(t) { return 1 - (1 - t) * (1 - t) }, easeInOutQuad: function(t) { return t < .5 ? 2 * t * t : 1 - n(-2 * t + 2, 2) / 2 }, easeInCubic: function(t) { return t * t * t }, easeOutCubic: function(t) { return 1 - n(1 - t, 3) }, easeInOutCubic: function(t) { return t < .5 ? 4 * t * t * t : 1 - n(-2 * t + 2, 3) / 2 }, easeInQuart: function(t) { return t * t * t * t }, easeOutQuart: function(t) { return 1 - n(1 - t, 4) }, easeInOutQuart: function(t) { return t < .5 ? 8 * t * t * t * t : 1 - n(-2 * t + 2, 4) / 2 }, easeInQuint: function(t) { return t * t * t * t * t }, easeOutQuint: function(t) { return 1 - n(1 - t, 5) }, easeInOutQuint: function(t) { return t < .5 ? 16 * t * t * t * t * t : 1 - n(-2 * t + 2, 5) / 2 }, easeInSine: function(t) { return 1 - o(t * s / 2) }, easeOutSine: function(t) { return r(t * s / 2) }, easeInOutSine: function(t) { return -(o(s * t) - 1) / 2 }, easeInExpo: function(t) { return 0 === t ? 0 : n(2, 10 * t - 10) }, easeOutExpo: function(t) { return 1 === t ? 1 : 1 - n(2, -10 * t) }, easeInOutExpo: function(t) { return 0 === t ? 0 : 1 === t ? 1 : t < .5 ? n(2, 20 * t - 10) / 2 : (2 - n(2, -20 * t + 10)) / 2 }, easeInCirc: function(t) { return 1 - i(1 - n(t, 2)) }, easeOutCirc: function(t) { return i(1 - n(t - 1, 2)) }, easeInOutCirc: function(t) { return t < .5 ? (1 - i(1 - n(2 * t, 2))) / 2 : (i(1 - n(-2 * t + 2, 2)) + 1) / 2 }, easeInElastic: function(t) { return 0 === t ? 0 : 1 === t ? 1 : -n(2, 10 * t - 10) * r((10 * t - 10.75) * c) }, easeOutElastic: function(t) { return 0 === t ? 0 : 1 === t ? 1 : n(2, -10 * t) * r((10 * t - .75) * c) + 1 }, easeInOutElastic: function(t) { return 0 === t ? 0 : 1 === t ? 1 : t < .5 ? -(n(2, 20 * t - 10) * r((20 * t - 11.125) * d)) / 2 : n(2, -20 * t + 10) * r((20 * t - 11.125) * d) / 2 + 1 }, easeInBack: function(t) { return u * t * t * t - a * t * t }, easeOutBack: function(t) { return 1 + u * n(t - 1, 3) + a * n(t - 1, 2) }, easeInOutBack: function(t) { return t < .5 ? n(2 * t, 2) * (2 * (l + 1) * t - l) / 2 : (n(2 * t - 2, 2) * ((l + 1) * (2 * t - 2) + l) + 2) / 2 }, easeInBounce: function(t) { return 1 - e(1 - t) }, easeOutBounce: e, easeInOutBounce: function(t) { return t < .5 ? (1 - e(1 - 2 * t)) / 2 : (1 + e(2 * t - 1)) / 2 } })
    })
}, function(t, e) {
    ! function(t) {
        var e = "waitForImages";
        t.waitForImages = { hasImageProperties: ["backgroundImage", "listStyleImage", "borderImage", "borderCornerImage", "cursor"] }, t.expr[":"].uncached = function(e) { if (!t(e).is('img[src!=""]')) return !1; var n = new Image; return n.src = e.src, !n.complete }, t.fn.waitForImages = function(n, i, r) {
            var o = 0,
                s = 0;
            if (t.isPlainObject(arguments[0]) && (r = arguments[0].waitForAll, i = arguments[0].each, n = arguments[0].finished), n = n || t.noop, i = i || t.noop, r = !!r, !t.isFunction(n) || !t.isFunction(i)) throw new TypeError("An invalid callback was supplied.");
            return this.each(function() {
                var a = t(this),
                    l = [],
                    u = t.waitForImages.hasImageProperties || [],
                    c = /url\(\s*(['"]?)(.*?)\1\s*\)/g;
                r ? a.find("*").addBack().each(function() {
                    var e = t(this);
                    e.is("img:uncached") && l.push({ src: e.attr("src"), element: e[0] }), t.each(u, function(t, n) { var i, r = e.css(n); if (!r) return !0; for (; i = c.exec(r);) l.push({ src: i[2], element: e[0] }) })
                }) : a.find("img:uncached").each(function() { l.push({ src: this.src, element: this }) }), o = l.length, s = 0, 0 === o && n.call(a[0]), t.each(l, function(r, l) {
                    var u = new Image;
                    t(u).on("load." + e + " error." + e, function(t) {
                        return s++, i.call(l.element, s, o, "load" == t.type),
                            s == o ? (n.call(a[0]), !1) : void 0
                    }), u.src = l.src
                })
            })
        }
    }(jQuery)
}, function(t, e) {
    ! function(t) {
        function e() {
            o = !1;
            for (var e = 0; e < i.length; e++) {
                var r = t(i[e]).filter(function() { return t(this).is(":appeared") });
                if (r.trigger("appear", [r]), n) {
                    var s = n.not(r);
                    s.trigger("disappear", [s])
                }
                n = r
            }
        }
        var n, i = [],
            r = !1,
            o = !1,
            s = { interval: 250, force_process: !1 },
            a = t(window);
        t.expr[":"].appeared = function(e) {
            var n = t(e);
            if (!n.is(":visible")) return !1;
            var i = a.scrollLeft(),
                r = a.scrollTop(),
                o = n.offset(),
                s = o.left,
                l = o.top;
            return l + n.height() >= r && l - (n.data("appear-top-offset") || 0) <= r + a.height() && s + n.width() >= i && s - (n.data("appear-left-offset") || 0) <= i + a.width()
        }, t.fn.extend({
            appear: function(n) {
                var a = t.extend({}, s, n || {}),
                    l = this.selector || this;
                if (!r) {
                    var u = function() { o || (o = !0, setTimeout(e, a.interval)) };
                    t(window).scroll(u).resize(u), r = !0
                }
                return a.force_process && setTimeout(e, a.interval), i.push(l), t(l)
            }
        }), t.extend({ force_appear: function() { return !!r && (e(), !0) } })
    }(jQuery),
    function(t) {
        "$:nomunge";

        function e(e) {
            function i() { e ? s.removeData(e) : f && delete n[f] }

            function o() { l.id = setTimeout(function() { l.fn() }, h) }
            var s, a = this,
                l = {},
                u = e ? t.fn : t,
                c = arguments,
                d = 4,
                f = c[1],
                h = c[2],
                p = c[3];
            if ("string" != typeof f && (d--, f = e = 0, h = c[1], p = c[2]), e ? (s = a.eq(0), s.data(e, l = s.data(e) || {})) : f && (l = n[f] || (n[f] = {})), l.id && clearTimeout(l.id), delete l.id, p) l.fn = function(t) { "string" == typeof p && (p = u[p]), p.apply(a, r.call(c, d)) !== !0 || t ? i() : o() }, o();
            else {
                if (l.fn) return void 0 === h ? i() : l.fn(h === !1), !0;
                i()
            }
        }
        var n = {},
            i = "doTimeout",
            r = Array.prototype.slice;
        t[i] = function() { return e.apply(window, [0].concat(r.call(arguments))) }, t.fn[i] = function() {
            var t = r.call(arguments),
                n = e.apply(this, [i + t[0]].concat(t));
            return "number" == typeof t[0] || "number" == typeof t[1] ? this : n
        }
    }(jQuery), $(".animatedParent").appear(), $(".animatedClick").click(function() {
        var t = $(this).attr("data-target");
        if (void 0 != $(this).attr("data-sequence")) {
            var e = $("." + t + ":first").attr("data-id"),
                n = $("." + t + ":last").attr("data-id"),
                i = e;
            $("." + t + "[data-id=" + i + "]").hasClass("go") ? ($("." + t + "[data-id=" + i + "]").addClass("goAway"), $("." + t + "[data-id=" + i + "]").removeClass("go")) : ($("." + t + "[data-id=" + i + "]").addClass("go"), $("." + t + "[data-id=" + i + "]").removeClass("goAway")), i++, delay = Number($(this).attr("data-sequence")), $.doTimeout(delay, function() { if (console.log(n), $("." + t + "[data-id=" + i + "]").hasClass("go") ? ($("." + t + "[data-id=" + i + "]").addClass("goAway"), $("." + t + "[data-id=" + i + "]").removeClass("go")) : ($("." + t + "[data-id=" + i + "]").addClass("go"), $("." + t + "[data-id=" + i + "]").removeClass("goAway")), ++i, i <= n) return !0 })
        } else $("." + t).hasClass("go") ? ($("." + t).addClass("goAway"), $("." + t).removeClass("go")) : ($("." + t).addClass("go"), $("." + t).removeClass("goAway"))
    }), $(document.body).on("appear", ".animatedParent", function(t, e) {
        var n = $(this).find(".animated"),
            i = $(this);
        if (void 0 != i.attr("data-sequence")) {
            var r = $(this).find(".animated:first").attr("data-id"),
                o = r,
                s = $(this).find(".animated:last").attr("data-id");
            $(i).find(".animated[data-id=" + o + "]").addClass("go"), o++, delay = Number(i.attr("data-sequence")), $.doTimeout(delay, function() { if ($(i).find(".animated[data-id=" + o + "]").addClass("go"), ++o, o <= s) return !0 })
        } else n.addClass("go")
    }), $(document.body).on("disappear", ".animatedParent", function(t, e) { $(this).hasClass("animateOnce") || $(this).find(".animated").removeClass("go") }), $(window).on("load", function() { $.force_appear() })
}, function(t, e, n) {
    n(3), $(function() {
        "use strict";
        $('[data-toggle="popover"]').length && $('[data-toggle="popover"]').popover()
    })
}, function(t, e) {
    var n;
    n = function() { return this }();
    try { n = n || Function("return this")() || (0, eval)("this") } catch (i) { "object" == typeof window && (n = window) }
    t.exports = n
}, function(t, e, n) {
    ! function(t, i) { i(e, n(0), n(3)) }(this, function(t, e, n) {
        "use strict";

        function i(t, e) {
            for (var n = 0; n < e.length; n++) {
                var i = e[n];
                i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
            }
        }

        function r(t, e, n) { return e && i(t.prototype, e), n && i(t, n), t }

        function o(t, e, n) { return e in t ? Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : t[e] = n, t }

        function s(t) {
            for (var e = 1; e < arguments.length; e++) {
                var n = null != arguments[e] ? arguments[e] : {},
                    i = Object.keys(n);
                "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter(function(t) { return Object.getOwnPropertyDescriptor(n, t).enumerable }))), i.forEach(function(e) { o(t, e, n[e]) })
            }
            return t
        }

        function a(t, e) { t.prototype = Object.create(e.prototype), t.prototype.constructor = t, t.__proto__ = e }

        function l(t) { return {}.toString.call(t).match(/\s([a-z]+)/i)[1].toLowerCase() }

        function u() { return { bindType: f, delegateType: f, handle: function(t) { if (e(t.target).is(this)) return t.handleObj.handler.apply(this, arguments) } } }

        function c(t) {
            var n = this,
                i = !1;
            return e(this).one(g.TRANSITION_END, function() { i = !0 }), setTimeout(function() { i || g.triggerTransitionEnd(n) }, t), this
        }

        function d() { e.fn.emulateTransitionEnd = c, e.event.special[g.TRANSITION_END] = u() }
        e = e && e.hasOwnProperty("default") ? e["default"] : e, n = n && n.hasOwnProperty("default") ? n["default"] : n;
        var f = "transitionend",
            h = 1e6,
            p = 1e3,
            g = {
                TRANSITION_END: "bsTransitionEnd",
                getUID: function(t) { do t += ~~(Math.random() * h); while (document.getElementById(t)); return t },
                getSelectorFromElement: function(t) {
                    var e = t.getAttribute("data-target");
                    if (!e || "#" === e) {
                        var n = t.getAttribute("href");
                        e = n && "#" !== n ? n.trim() : ""
                    }
                    try { return document.querySelector(e) ? e : null } catch (i) { return null }
                },
                getTransitionDurationFromElement: function(t) {
                    if (!t) return 0;
                    var n = e(t).css("transition-duration"),
                        i = e(t).css("transition-delay"),
                        r = parseFloat(n),
                        o = parseFloat(i);
                    return r || o ? (n = n.split(",")[0], i = i.split(",")[0], (parseFloat(n) + parseFloat(i)) * p) : 0
                },
                reflow: function(t) { return t.offsetHeight },
                triggerTransitionEnd: function(t) { e(t).trigger(f) },
                supportsTransitionEnd: function() { return Boolean(f) },
                isElement: function(t) { return (t[0] || t).nodeType },
                typeCheckConfig: function(t, e, n) {
                    for (var i in n)
                        if (Object.prototype.hasOwnProperty.call(n, i)) {
                            var r = n[i],
                                o = e[i],
                                s = o && g.isElement(o) ? "element" : l(o);
                            if (!new RegExp(r).test(s)) throw new Error(t.toUpperCase() + ": " + ('Option "' + i + '" provided type "' + s + '" ') + ('but expected type "' + r + '".'))
                        }
                },
                findShadowRoot: function(t) { if (!document.documentElement.attachShadow) return null; if ("function" == typeof t.getRootNode) { var e = t.getRootNode(); return e instanceof ShadowRoot ? e : null } return t instanceof ShadowRoot ? t : t.parentNode ? g.findShadowRoot(t.parentNode) : null }
            };
        d();
        var m = "alert",
            v = "4.3.0",
            y = "bs.alert",
            b = "." + y,
            w = ".data-api",
            S = e.fn[m],
            _ = { DISMISS: '[data-dismiss="alert"]' },
            C = { CLOSE: "close" + b, CLOSED: "closed" + b, CLICK_DATA_API: "click" + b + w },
            T = { ALERT: "alert", FADE: "fade", SHOW: "show" },
            E = function() {
                function t(t) { this._element = t }
                var n = t.prototype;
                return n.close = function(t) {
                    var e = this._element;
                    t && (e = this._getRootElement(t));
                    var n = this._triggerCloseEvent(e);
                    n.isDefaultPrevented() || this._removeElement(e)
                }, n.dispose = function() { e.removeData(this._element, y), this._element = null }, n._getRootElement = function(t) {
                    var n = g.getSelectorFromElement(t),
                        i = !1;
                    return n && (i = document.querySelector(n)), i || (i = e(t).closest("." + T.ALERT)[0]), i
                }, n._triggerCloseEvent = function(t) { var n = e.Event(C.CLOSE); return e(t).trigger(n), n }, n._removeElement = function(t) {
                    var n = this;
                    if (e(t).removeClass(T.SHOW), !e(t).hasClass(T.FADE)) return void this._destroyElement(t);
                    var i = g.getTransitionDurationFromElement(t);
                    e(t).one(g.TRANSITION_END, function(e) { return n._destroyElement(t, e) }).emulateTransitionEnd(i)
                }, n._destroyElement = function(t) { e(t).detach().trigger(C.CLOSED).remove() }, t._jQueryInterface = function(n) {
                    return this.each(function() {
                        var i = e(this),
                            r = i.data(y);
                        r || (r = new t(this), i.data(y, r)), "close" === n && r[n](this)
                    })
                }, t._handleDismiss = function(t) { return function(e) { e && e.preventDefault(), t.close(this) } }, r(t, null, [{ key: "VERSION", get: function() { return v } }]), t
            }();
        e(document).on(C.CLICK_DATA_API, _.DISMISS, E._handleDismiss(new E)), e.fn[m] = E._jQueryInterface, e.fn[m].Constructor = E, e.fn[m].noConflict = function() { return e.fn[m] = S, E._jQueryInterface };
        var x = "button",
            k = "4.3.0",
            O = "bs.button",
            I = "." + O,
            A = ".data-api",
            P = e.fn[x],
            D = { ACTIVE: "active", BUTTON: "btn", FOCUS: "focus" },
            L = { DATA_TOGGLE_CARROT: '[data-toggle^="button"]', DATA_TOGGLE: '[data-toggle="buttons"]', INPUT: 'input:not([type="hidden"])', ACTIVE: ".active", BUTTON: ".btn" },
            N = { CLICK_DATA_API: "click" + I + A, FOCUS_BLUR_DATA_API: "focus" + I + A + " " + ("blur" + I + A) },
            $ = function() {
                function t(t) { this._element = t }
                var n = t.prototype;
                return n.toggle = function() {
                    var t = !0,
                        n = !0,
                        i = e(this._element).closest(L.DATA_TOGGLE)[0];
                    if (i) {
                        var r = this._element.querySelector(L.INPUT);
                        if (r) {
                            if ("radio" === r.type)
                                if (r.checked && this._element.classList.contains(D.ACTIVE)) t = !1;
                                else {
                                    var o = i.querySelector(L.ACTIVE);
                                    o && e(o).removeClass(D.ACTIVE)
                                }
                            if (t) {
                                if (r.hasAttribute("disabled") || i.hasAttribute("disabled") || r.classList.contains("disabled") || i.classList.contains("disabled")) return;
                                r.checked = !this._element.classList.contains(D.ACTIVE), e(r).trigger("change")
                            }
                            r.focus(), n = !1
                        }
                    }
                    n && this._element.setAttribute("aria-pressed", !this._element.classList.contains(D.ACTIVE)), t && e(this._element).toggleClass(D.ACTIVE)
                }, n.dispose = function() { e.removeData(this._element, O), this._element = null }, t._jQueryInterface = function(n) {
                    return this.each(function() {
                        var i = e(this).data(O);
                        i || (i = new t(this), e(this).data(O, i)), "toggle" === n && i[n]()
                    })
                }, r(t, null, [{ key: "VERSION", get: function() { return k } }]), t
            }();
        e(document).on(N.CLICK_DATA_API, L.DATA_TOGGLE_CARROT, function(t) {
            t.preventDefault();
            var n = t.target;
            e(n).hasClass(D.BUTTON) || (n = e(n).closest(L.BUTTON)), $._jQueryInterface.call(e(n), "toggle")
        }).on(N.FOCUS_BLUR_DATA_API, L.DATA_TOGGLE_CARROT, function(t) {
            var n = e(t.target).closest(L.BUTTON)[0];
            e(n).toggleClass(D.FOCUS, /^focus(in)?$/.test(t.type))
        }), e.fn[x] = $._jQueryInterface, e.fn[x].Constructor = $, e.fn[x].noConflict = function() { return e.fn[x] = P, $._jQueryInterface };
        var H = "carousel",
            M = "4.3.0",
            j = "bs.carousel",
            W = "." + j,
            R = ".data-api",
            B = e.fn[H],
            z = 37,
            F = 39,
            q = 500,
            U = 40,
            V = { interval: 5e3, keyboard: !0, slide: !1, pause: "hover", wrap: !0, touch: !0 },
            G = { interval: "(number|boolean)", keyboard: "boolean", slide: "(boolean|string)", pause: "(string|boolean)", wrap: "boolean", touch: "boolean" },
            Q = { NEXT: "next", PREV: "prev", LEFT: "left", RIGHT: "right" },
            Y = { SLIDE: "slide" + W, SLID: "slid" + W, KEYDOWN: "keydown" + W, MOUSEENTER: "mouseenter" + W, MOUSELEAVE: "mouseleave" + W, TOUCHSTART: "touchstart" + W, TOUCHMOVE: "touchmove" + W, TOUCHEND: "touchend" + W, POINTERDOWN: "pointerdown" + W, POINTERUP: "pointerup" + W, DRAG_START: "dragstart" + W, LOAD_DATA_API: "load" + W + R, CLICK_DATA_API: "click" + W + R },
            X = { CAROUSEL: "carousel", ACTIVE: "active", SLIDE: "slide", RIGHT: "carousel-item-right", LEFT: "carousel-item-left", NEXT: "carousel-item-next", PREV: "carousel-item-prev", ITEM: "carousel-item", POINTER_EVENT: "pointer-event" },
            K = { ACTIVE: ".active", ACTIVE_ITEM: ".active.carousel-item", ITEM: ".carousel-item", ITEM_IMG: ".carousel-item img", NEXT_PREV: ".carousel-item-next, .carousel-item-prev", INDICATORS: ".carousel-indicators", DATA_SLIDE: "[data-slide], [data-slide-to]", DATA_RIDE: '[data-ride="carousel"]' },
            J = { TOUCH: "touch", PEN: "pen" },
            Z = function() {
                function t(t, e) { this._items = null, this._interval = null, this._activeElement = null, this._isPaused = !1, this._isSliding = !1, this.touchTimeout = null, this.touchStartX = 0, this.touchDeltaX = 0, this._config = this._getConfig(e), this._element = t, this._indicatorsElement = this._element.querySelector(K.INDICATORS), this._touchSupported = "ontouchstart" in document.documentElement || navigator.maxTouchPoints > 0, this._pointerEvent = Boolean(window.PointerEvent || window.MSPointerEvent), this._addEventListeners() }
                var n = t.prototype;
                return n.next = function() { this._isSliding || this._slide(Q.NEXT) }, n.nextWhenVisible = function() {!document.hidden && e(this._element).is(":visible") && "hidden" !== e(this._element).css("visibility") && this.next() }, n.prev = function() { this._isSliding || this._slide(Q.PREV) }, n.pause = function(t) { t || (this._isPaused = !0), this._element.querySelector(K.NEXT_PREV) && (g.triggerTransitionEnd(this._element), this.cycle(!0)), clearInterval(this._interval), this._interval = null }, n.cycle = function(t) { t || (this._isPaused = !1), this._interval && (clearInterval(this._interval), this._interval = null), this._config.interval && !this._isPaused && (this._interval = setInterval((document.visibilityState ? this.nextWhenVisible : this.next).bind(this), this._config.interval)) }, n.to = function(t) {
                    var n = this;
                    this._activeElement = this._element.querySelector(K.ACTIVE_ITEM);
                    var i = this._getItemIndex(this._activeElement);
                    if (!(t > this._items.length - 1 || t < 0)) {
                        if (this._isSliding) return void e(this._element).one(Y.SLID, function() { return n.to(t) });
                        if (i === t) return this.pause(), void this.cycle();
                        var r = t > i ? Q.NEXT : Q.PREV;
                        this._slide(r, this._items[t])
                    }
                }, n.dispose = function() { e(this._element).off(W), e.removeData(this._element, j), this._items = null, this._config = null, this._element = null, this._interval = null, this._isPaused = null, this._isSliding = null, this._activeElement = null, this._indicatorsElement = null }, n._getConfig = function(t) { return t = s({}, V, t), g.typeCheckConfig(H, t, G), t }, n._handleSwipe = function() {
                    var t = Math.abs(this.touchDeltaX);
                    if (!(t <= U)) {
                        var e = t / this.touchDeltaX;
                        e > 0 && this.prev(), e < 0 && this.next()
                    }
                }, n._addEventListeners = function() {
                    var t = this;
                    this._config.keyboard && e(this._element).on(Y.KEYDOWN, function(e) { return t._keydown(e) }), "hover" === this._config.pause && e(this._element).on(Y.MOUSEENTER, function(e) { return t.pause(e) }).on(Y.MOUSELEAVE, function(e) { return t.cycle(e) }), this._config.touch && this._addTouchEventListeners()
                }, n._addTouchEventListeners = function() {
                    var t = this;
                    if (this._touchSupported) {
                        var n = function(e) { t._pointerEvent && J[e.originalEvent.pointerType.toUpperCase()] ? t.touchStartX = e.originalEvent.clientX : t._pointerEvent || (t.touchStartX = e.originalEvent.touches[0].clientX) },
                            i = function(e) { e.originalEvent.touches && e.originalEvent.touches.length > 1 ? t.touchDeltaX = 0 : t.touchDeltaX = e.originalEvent.touches[0].clientX - t.touchStartX },
                            r = function(e) { t._pointerEvent && J[e.originalEvent.pointerType.toUpperCase()] && (t.touchDeltaX = e.originalEvent.clientX - t.touchStartX), t._handleSwipe(), "hover" === t._config.pause && (t.pause(), t.touchTimeout && clearTimeout(t.touchTimeout), t.touchTimeout = setTimeout(function(e) { return t.cycle(e) }, q + t._config.interval)) };
                        e(this._element.querySelectorAll(K.ITEM_IMG)).on(Y.DRAG_START, function(t) { return t.preventDefault() }), this._pointerEvent ? (e(this._element).on(Y.POINTERDOWN, function(t) { return n(t) }), e(this._element).on(Y.POINTERUP, function(t) { return r(t) }), this._element.classList.add(X.POINTER_EVENT)) : (e(this._element).on(Y.TOUCHSTART, function(t) { return n(t) }), e(this._element).on(Y.TOUCHMOVE, function(t) { return i(t) }), e(this._element).on(Y.TOUCHEND, function(t) { return r(t) }))
                    }
                }, n._keydown = function(t) {
                    if (!/input|textarea/i.test(t.target.tagName)) switch (t.which) {
                        case z:
                            t.preventDefault(), this.prev();
                            break;
                        case F:
                            t.preventDefault(), this.next()
                    }
                }, n._getItemIndex = function(t) { return this._items = t && t.parentNode ? [].slice.call(t.parentNode.querySelectorAll(K.ITEM)) : [], this._items.indexOf(t) }, n._getItemByDirection = function(t, e) {
                    var n = t === Q.NEXT,
                        i = t === Q.PREV,
                        r = this._getItemIndex(e),
                        o = this._items.length - 1,
                        s = i && 0 === r || n && r === o;
                    if (s && !this._config.wrap) return e;
                    var a = t === Q.PREV ? -1 : 1,
                        l = (r + a) % this._items.length;
                    return l === -1 ? this._items[this._items.length - 1] : this._items[l]
                }, n._triggerSlideEvent = function(t, n) {
                    var i = this._getItemIndex(t),
                        r = this._getItemIndex(this._element.querySelector(K.ACTIVE_ITEM)),
                        o = e.Event(Y.SLIDE, { relatedTarget: t, direction: n, from: r, to: i });
                    return e(this._element).trigger(o), o
                }, n._setActiveIndicatorElement = function(t) {
                    if (this._indicatorsElement) {
                        var n = [].slice.call(this._indicatorsElement.querySelectorAll(K.ACTIVE));
                        e(n).removeClass(X.ACTIVE);
                        var i = this._indicatorsElement.children[this._getItemIndex(t)];
                        i && e(i).addClass(X.ACTIVE)
                    }
                }, n._slide = function(t, n) {
                    var i, r, o, s = this,
                        a = this._element.querySelector(K.ACTIVE_ITEM),
                        l = this._getItemIndex(a),
                        u = n || a && this._getItemByDirection(t, a),
                        c = this._getItemIndex(u),
                        d = Boolean(this._interval);
                    if (t === Q.NEXT ? (i = X.LEFT, r = X.NEXT, o = Q.LEFT) : (i = X.RIGHT, r = X.PREV, o = Q.RIGHT), u && e(u).hasClass(X.ACTIVE)) return void(this._isSliding = !1);
                    var f = this._triggerSlideEvent(u, o);
                    if (!f.isDefaultPrevented() && a && u) {
                        this._isSliding = !0, d && this.pause(), this._setActiveIndicatorElement(u);
                        var h = e.Event(Y.SLID, { relatedTarget: u, direction: o, from: l, to: c });
                        if (e(this._element).hasClass(X.SLIDE)) {
                            e(u).addClass(r), g.reflow(u), e(a).addClass(i), e(u).addClass(i);
                            var p = parseInt(u.getAttribute("data-interval"), 10);
                            p ? (this._config.defaultInterval = this._config.defaultInterval || this._config.interval, this._config.interval = p) : this._config.interval = this._config.defaultInterval || this._config.interval;
                            var m = g.getTransitionDurationFromElement(a);
                            e(a).one(g.TRANSITION_END, function() { e(u).removeClass(i + " " + r).addClass(X.ACTIVE), e(a).removeClass(X.ACTIVE + " " + r + " " + i), s._isSliding = !1, setTimeout(function() { return e(s._element).trigger(h) }, 0) }).emulateTransitionEnd(m)
                        } else e(a).removeClass(X.ACTIVE), e(u).addClass(X.ACTIVE), this._isSliding = !1, e(this._element).trigger(h);
                        d && this.cycle()
                    }
                }, t._jQueryInterface = function(n) {
                    return this.each(function() {
                        var i = e(this).data(j),
                            r = s({}, V, e(this).data());
                        "object" == typeof n && (r = s({}, r, n));
                        var o = "string" == typeof n ? n : r.slide;
                        if (i || (i = new t(this, r), e(this).data(j, i)), "number" == typeof n) i.to(n);
                        else if ("string" == typeof o) {
                            if ("undefined" == typeof i[o]) throw new TypeError('No method named "' + o + '"');
                            i[o]()
                        } else r.interval && r.ride && (i.pause(), i.cycle())
                    })
                }, t._dataApiClickHandler = function(n) {
                    var i = g.getSelectorFromElement(this);
                    if (i) {
                        var r = e(i)[0];
                        if (r && e(r).hasClass(X.CAROUSEL)) {
                            var o = s({}, e(r).data(), e(this).data()),
                                a = this.getAttribute("data-slide-to");
                            a && (o.interval = !1), t._jQueryInterface.call(e(r), o), a && e(r).data(j).to(a), n.preventDefault()
                        }
                    }
                }, r(t, null, [{ key: "VERSION", get: function() { return M } }, { key: "Default", get: function() { return V } }]), t
            }();
        e(document).on(Y.CLICK_DATA_API, K.DATA_SLIDE, Z._dataApiClickHandler), e(window).on(Y.LOAD_DATA_API, function() {
            for (var t = [].slice.call(document.querySelectorAll(K.DATA_RIDE)), n = 0, i = t.length; n < i; n++) {
                var r = e(t[n]);
                Z._jQueryInterface.call(r, r.data())
            }
        }), e.fn[H] = Z._jQueryInterface, e.fn[H].Constructor = Z, e.fn[H].noConflict = function() { return e.fn[H] = B, Z._jQueryInterface };
        var tt = "collapse",
            et = "4.3.0",
            nt = "bs.collapse",
            it = "." + nt,
            rt = ".data-api",
            ot = e.fn[tt],
            st = { toggle: !0, parent: "" },
            at = { toggle: "boolean", parent: "(string|element)" },
            lt = { SHOW: "show" + it, SHOWN: "shown" + it, HIDE: "hide" + it, HIDDEN: "hidden" + it, CLICK_DATA_API: "click" + it + rt },
            ut = { SHOW: "show", COLLAPSE: "collapse", COLLAPSING: "collapsing", COLLAPSED: "collapsed" },
            ct = { WIDTH: "width", HEIGHT: "height" },
            dt = { ACTIVES: ".show, .collapsing", DATA_TOGGLE: '[data-toggle="collapse"]' },
            ft = function() {
                function t(t, e) {
                    this._isTransitioning = !1, this._element = t, this._config = this._getConfig(e), this._triggerArray = [].slice.call(document.querySelectorAll('[data-toggle="collapse"][href="#' + t.id + '"],' + ('[data-toggle="collapse"][data-target="#' + t.id + '"]')));
                    for (var n = [].slice.call(document.querySelectorAll(dt.DATA_TOGGLE)), i = 0, r = n.length; i < r; i++) {
                        var o = n[i],
                            s = g.getSelectorFromElement(o),
                            a = [].slice.call(document.querySelectorAll(s)).filter(function(e) { return e === t });
                        null !== s && a.length > 0 && (this._selector = s, this._triggerArray.push(o))
                    }
                    this._parent = this._config.parent ? this._getParent() : null, this._config.parent || this._addAriaAndCollapsedClass(this._element, this._triggerArray), this._config.toggle && this.toggle()
                }
                var n = t.prototype;
                return n.toggle = function() { e(this._element).hasClass(ut.SHOW) ? this.hide() : this.show() }, n.show = function() {
                    var n = this;
                    if (!this._isTransitioning && !e(this._element).hasClass(ut.SHOW)) {
                        var i, r;
                        if (this._parent && (i = [].slice.call(this._parent.querySelectorAll(dt.ACTIVES)).filter(function(t) { return "string" == typeof n._config.parent ? t.getAttribute("data-parent") === n._config.parent : t.classList.contains(ut.COLLAPSE) }), 0 === i.length && (i = null)), !(i && (r = e(i).not(this._selector).data(nt), r && r._isTransitioning))) {
                            var o = e.Event(lt.SHOW);
                            if (e(this._element).trigger(o), !o.isDefaultPrevented()) {
                                i && (t._jQueryInterface.call(e(i).not(this._selector), "hide"), r || e(i).data(nt, null));
                                var s = this._getDimension();
                                e(this._element).removeClass(ut.COLLAPSE).addClass(ut.COLLAPSING), this._element.style[s] = 0, this._triggerArray.length && e(this._triggerArray).removeClass(ut.COLLAPSED).attr("aria-expanded", !0), this.setTransitioning(!0);
                                var a = function() { e(n._element).removeClass(ut.COLLAPSING).addClass(ut.COLLAPSE).addClass(ut.SHOW), n._element.style[s] = "", n.setTransitioning(!1), e(n._element).trigger(lt.SHOWN) },
                                    l = s[0].toUpperCase() + s.slice(1),
                                    u = "scroll" + l,
                                    c = g.getTransitionDurationFromElement(this._element);
                                e(this._element).one(g.TRANSITION_END, a).emulateTransitionEnd(c), this._element.style[s] = this._element[u] + "px"
                            }
                        }
                    }
                }, n.hide = function() {
                    var t = this;
                    if (!this._isTransitioning && e(this._element).hasClass(ut.SHOW)) {
                        var n = e.Event(lt.HIDE);
                        if (e(this._element).trigger(n), !n.isDefaultPrevented()) {
                            var i = this._getDimension();
                            this._element.style[i] = this._element.getBoundingClientRect()[i] + "px", g.reflow(this._element), e(this._element).addClass(ut.COLLAPSING).removeClass(ut.COLLAPSE).removeClass(ut.SHOW);
                            var r = this._triggerArray.length;
                            if (r > 0)
                                for (var o = 0; o < r; o++) {
                                    var s = this._triggerArray[o],
                                        a = g.getSelectorFromElement(s);
                                    if (null !== a) {
                                        var l = e([].slice.call(document.querySelectorAll(a)));
                                        l.hasClass(ut.SHOW) || e(s).addClass(ut.COLLAPSED).attr("aria-expanded", !1)
                                    }
                                }
                            this.setTransitioning(!0);
                            var u = function() { t.setTransitioning(!1), e(t._element).removeClass(ut.COLLAPSING).addClass(ut.COLLAPSE).trigger(lt.HIDDEN) };
                            this._element.style[i] = "";
                            var c = g.getTransitionDurationFromElement(this._element);
                            e(this._element).one(g.TRANSITION_END, u).emulateTransitionEnd(c)
                        }
                    }
                }, n.setTransitioning = function(t) { this._isTransitioning = t }, n.dispose = function() { e.removeData(this._element, nt), this._config = null, this._parent = null, this._element = null, this._triggerArray = null, this._isTransitioning = null }, n._getConfig = function(t) { return t = s({}, st, t), t.toggle = Boolean(t.toggle), g.typeCheckConfig(tt, t, at), t }, n._getDimension = function() { var t = e(this._element).hasClass(ct.WIDTH); return t ? ct.WIDTH : ct.HEIGHT }, n._getParent = function() {
                    var n, i = this;
                    g.isElement(this._config.parent) ? (n = this._config.parent, "undefined" != typeof this._config.parent.jquery && (n = this._config.parent[0])) : n = document.querySelector(this._config.parent);
                    var r = '[data-toggle="collapse"][data-parent="' + this._config.parent + '"]',
                        o = [].slice.call(n.querySelectorAll(r));
                    return e(o).each(function(e, n) { i._addAriaAndCollapsedClass(t._getTargetFromElement(n), [n]) }), n
                }, n._addAriaAndCollapsedClass = function(t, n) {
                    var i = e(t).hasClass(ut.SHOW);
                    n.length && e(n).toggleClass(ut.COLLAPSED, !i).attr("aria-expanded", i)
                }, t._getTargetFromElement = function(t) { var e = g.getSelectorFromElement(t); return e ? document.querySelector(e) : null }, t._jQueryInterface = function(n) {
                    return this.each(function() {
                        var i = e(this),
                            r = i.data(nt),
                            o = s({}, st, i.data(), "object" == typeof n && n ? n : {});
                        if (!r && o.toggle && /show|hide/.test(n) && (o.toggle = !1), r || (r = new t(this, o), i.data(nt, r)), "string" == typeof n) {
                            if ("undefined" == typeof r[n]) throw new TypeError('No method named "' + n + '"');
                            r[n]()
                        }
                    })
                }, r(t, null, [{ key: "VERSION", get: function() { return et } }, { key: "Default", get: function() { return st } }]), t
            }();
        e(document).on(lt.CLICK_DATA_API, dt.DATA_TOGGLE, function(t) {
            "A" === t.currentTarget.tagName && t.preventDefault();
            var n = e(this),
                i = g.getSelectorFromElement(this),
                r = [].slice.call(document.querySelectorAll(i));
            e(r).each(function() {
                var t = e(this),
                    i = t.data(nt),
                    r = i ? "toggle" : n.data();
                ft._jQueryInterface.call(t, r)
            })
        }), e.fn[tt] = ft._jQueryInterface, e.fn[tt].Constructor = ft, e.fn[tt].noConflict = function() { return e.fn[tt] = ot, ft._jQueryInterface };
        var ht = "dropdown",
            pt = "4.3.0",
            gt = "bs.dropdown",
            mt = "." + gt,
            vt = ".data-api",
            yt = e.fn[ht],
            bt = 27,
            wt = 32,
            St = 9,
            _t = 38,
            Ct = 40,
            Tt = 3,
            Et = new RegExp(_t + "|" + Ct + "|" + bt),
            xt = { HIDE: "hide" + mt, HIDDEN: "hidden" + mt, SHOW: "show" + mt, SHOWN: "shown" + mt, CLICK: "click" + mt, CLICK_DATA_API: "click" + mt + vt, KEYDOWN_DATA_API: "keydown" + mt + vt, KEYUP_DATA_API: "keyup" + mt + vt },
            kt = { DISABLED: "disabled", SHOW: "show", DROPUP: "dropup", DROPRIGHT: "dropright", DROPLEFT: "dropleft", MENURIGHT: "dropdown-menu-right", MENULEFT: "dropdown-menu-left", POSITION_STATIC: "position-static" },
            Ot = { DATA_TOGGLE: '[data-toggle="dropdown"]', FORM_CHILD: ".dropdown form", MENU: ".dropdown-menu", NAVBAR_NAV: ".navbar-nav", VISIBLE_ITEMS: ".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)" },
            It = { TOP: "top-start", TOPEND: "top-end", BOTTOM: "bottom-start", BOTTOMEND: "bottom-end", RIGHT: "right-start", RIGHTEND: "right-end", LEFT: "left-start", LEFTEND: "left-end" },
            At = { offset: 0, flip: !0, boundary: "scrollParent", reference: "toggle", display: "dynamic" },
            Pt = { offset: "(number|string|function)", flip: "boolean", boundary: "(string|element)", reference: "(string|element)", display: "string" },
            Dt = function() {
                function t(t, e) { this._element = t, this._popper = null, this._config = this._getConfig(e), this._menu = this._getMenuElement(), this._inNavbar = this._detectNavbar(), this._addEventListeners() }
                var i = t.prototype;
                return i.toggle = function() {
                    if (!this._element.disabled && !e(this._element).hasClass(kt.DISABLED)) {
                        var i = t._getParentFromElement(this._element),
                            r = e(this._menu).hasClass(kt.SHOW);
                        if (t._clearMenus(), !r) {
                            var o = { relatedTarget: this._element },
                                s = e.Event(xt.SHOW, o);
                            if (e(i).trigger(s), !s.isDefaultPrevented()) { if (!this._inNavbar) { if ("undefined" == typeof n) throw new TypeError("Bootstrap's dropdowns require Popper.js (https://popper.js.org/)"); var a = this._element; "parent" === this._config.reference ? a = i : g.isElement(this._config.reference) && (a = this._config.reference, "undefined" != typeof this._config.reference.jquery && (a = this._config.reference[0])), "scrollParent" !== this._config.boundary && e(i).addClass(kt.POSITION_STATIC), this._popper = new n(a, this._menu, this._getPopperConfig()) } "ontouchstart" in document.documentElement && 0 === e(i).closest(Ot.NAVBAR_NAV).length && e(document.body).children().on("mouseover", null, e.noop), this._element.focus(), this._element.setAttribute("aria-expanded", !0), e(this._menu).toggleClass(kt.SHOW), e(i).toggleClass(kt.SHOW).trigger(e.Event(xt.SHOWN, o)) }
                        }
                    }
                }, i.show = function() {
                    if (!(this._element.disabled || e(this._element).hasClass(kt.DISABLED) || e(this._menu).hasClass(kt.SHOW))) {
                        var n = { relatedTarget: this._element },
                            i = e.Event(xt.SHOW, n),
                            r = t._getParentFromElement(this._element);
                        e(r).trigger(i), i.isDefaultPrevented() || (e(this._menu).toggleClass(kt.SHOW), e(r).toggleClass(kt.SHOW).trigger(e.Event(xt.SHOWN, n)))
                    }
                }, i.hide = function() {
                    if (!this._element.disabled && !e(this._element).hasClass(kt.DISABLED) && e(this._menu).hasClass(kt.SHOW)) {
                        var n = { relatedTarget: this._element },
                            i = e.Event(xt.HIDE, n),
                            r = t._getParentFromElement(this._element);
                        e(r).trigger(i), i.isDefaultPrevented() || (e(this._menu).toggleClass(kt.SHOW), e(r).toggleClass(kt.SHOW).trigger(e.Event(xt.HIDDEN, n)))
                    }
                }, i.dispose = function() { e.removeData(this._element, gt), e(this._element).off(mt), this._element = null, this._menu = null, null !== this._popper && (this._popper.destroy(), this._popper = null) }, i.update = function() { this._inNavbar = this._detectNavbar(), null !== this._popper && this._popper.scheduleUpdate() }, i._addEventListeners = function() {
                    var t = this;
                    e(this._element).on(xt.CLICK, function(e) { e.preventDefault(), e.stopPropagation(), t.toggle() })
                }, i._getConfig = function(t) { return t = s({}, this.constructor.Default, e(this._element).data(), t), g.typeCheckConfig(ht, t, this.constructor.DefaultType), t }, i._getMenuElement = function() {
                    if (!this._menu) {
                        var e = t._getParentFromElement(this._element);
                        e && (this._menu = e.querySelector(Ot.MENU))
                    }
                    return this._menu
                }, i._getPlacement = function() {
                    var t = e(this._element.parentNode),
                        n = It.BOTTOM;
                    return t.hasClass(kt.DROPUP) ? (n = It.TOP, e(this._menu).hasClass(kt.MENURIGHT) && (n = It.TOPEND)) : t.hasClass(kt.DROPRIGHT) ? n = It.RIGHT : t.hasClass(kt.DROPLEFT) ? n = It.LEFT : e(this._menu).hasClass(kt.MENURIGHT) && (n = It.BOTTOMEND), n
                }, i._detectNavbar = function() { return e(this._element).closest(".navbar").length > 0 }, i._getOffset = function() {
                    var t = this,
                        e = {};
                    return "function" == typeof this._config.offset ? e.fn = function(e) { return e.offsets = s({}, e.offsets, t._config.offset(e.offsets, t._element) || {}), e } : e.offset = this._config.offset, e
                }, i._getPopperConfig = function() { var t = { placement: this._getPlacement(), modifiers: { offset: this._getOffset(), flip: { enabled: this._config.flip }, preventOverflow: { boundariesElement: this._config.boundary } } }; return "static" === this._config.display && (t.modifiers.applyStyle = { enabled: !1 }), t }, t._jQueryInterface = function(n) {
                    return this.each(function() {
                        var i = e(this).data(gt),
                            r = "object" == typeof n ? n : null;
                        if (i || (i = new t(this, r), e(this).data(gt, i)), "string" == typeof n) {
                            if ("undefined" == typeof i[n]) throw new TypeError('No method named "' + n + '"');
                            i[n]()
                        }
                    })
                }, t._clearMenus = function(n) {
                    if (!n || n.which !== Tt && ("keyup" !== n.type || n.which === St))
                        for (var i = [].slice.call(document.querySelectorAll(Ot.DATA_TOGGLE)), r = 0, o = i.length; r < o; r++) {
                            var s = t._getParentFromElement(i[r]),
                                a = e(i[r]).data(gt),
                                l = { relatedTarget: i[r] };
                            if (n && "click" === n.type && (l.clickEvent = n), a) {
                                var u = a._menu;
                                if (e(s).hasClass(kt.SHOW) && !(n && ("click" === n.type && /input|textarea/i.test(n.target.tagName) || "keyup" === n.type && n.which === St) && e.contains(s, n.target))) {
                                    var c = e.Event(xt.HIDE, l);
                                    e(s).trigger(c), c.isDefaultPrevented() || ("ontouchstart" in document.documentElement && e(document.body).children().off("mouseover", null, e.noop), i[r].setAttribute("aria-expanded", "false"), e(u).removeClass(kt.SHOW), e(s).removeClass(kt.SHOW).trigger(e.Event(xt.HIDDEN, l)))
                                }
                            }
                        }
                }, t._getParentFromElement = function(t) { var e, n = g.getSelectorFromElement(t); return n && (e = document.querySelector(n)), e || t.parentNode }, t._dataApiKeydownHandler = function(n) {
                    if ((/input|textarea/i.test(n.target.tagName) ? !(n.which === wt || n.which !== bt && (n.which !== Ct && n.which !== _t || e(n.target).closest(Ot.MENU).length)) : Et.test(n.which)) && (n.preventDefault(), n.stopPropagation(), !this.disabled && !e(this).hasClass(kt.DISABLED))) {
                        var i = t._getParentFromElement(this),
                            r = e(i).hasClass(kt.SHOW);
                        if (!r || r && (n.which === bt || n.which === wt)) {
                            if (n.which === bt) {
                                var o = i.querySelector(Ot.DATA_TOGGLE);
                                e(o).trigger("focus")
                            }
                            return void e(this).trigger("click")
                        }
                        var s = [].slice.call(i.querySelectorAll(Ot.VISIBLE_ITEMS));
                        if (0 !== s.length) {
                            var a = s.indexOf(n.target);
                            n.which === _t && a > 0 && a--, n.which === Ct && a < s.length - 1 && a++, a < 0 && (a = 0), s[a].focus()
                        }
                    }
                }, r(t, null, [{ key: "VERSION", get: function() { return pt } }, { key: "Default", get: function() { return At } }, { key: "DefaultType", get: function() { return Pt } }]), t
            }();
        e(document).on(xt.KEYDOWN_DATA_API, Ot.DATA_TOGGLE, Dt._dataApiKeydownHandler).on(xt.KEYDOWN_DATA_API, Ot.MENU, Dt._dataApiKeydownHandler).on(xt.CLICK_DATA_API + " " + xt.KEYUP_DATA_API, Dt._clearMenus).on(xt.CLICK_DATA_API, Ot.DATA_TOGGLE, function(t) { t.preventDefault(), t.stopPropagation(), Dt._jQueryInterface.call(e(this), "toggle") }).on(xt.CLICK_DATA_API, Ot.FORM_CHILD, function(t) { t.stopPropagation() }), e.fn[ht] = Dt._jQueryInterface, e.fn[ht].Constructor = Dt, e.fn[ht].noConflict = function() { return e.fn[ht] = yt, Dt._jQueryInterface };
        var Lt = "modal",
            Nt = "4.3.0",
            $t = "bs.modal",
            Ht = "." + $t,
            Mt = ".data-api",
            jt = e.fn[Lt],
            Wt = 27,
            Rt = { backdrop: !0, keyboard: !0, focus: !0, show: !0 },
            Bt = { backdrop: "(boolean|string)", keyboard: "boolean", focus: "boolean", show: "boolean" },
            zt = { HIDE: "hide" + Ht, HIDDEN: "hidden" + Ht, SHOW: "show" + Ht, SHOWN: "shown" + Ht, FOCUSIN: "focusin" + Ht, RESIZE: "resize" + Ht, CLICK_DISMISS: "click.dismiss" + Ht, KEYDOWN_DISMISS: "keydown.dismiss" + Ht, MOUSEUP_DISMISS: "mouseup.dismiss" + Ht, MOUSEDOWN_DISMISS: "mousedown.dismiss" + Ht, CLICK_DATA_API: "click" + Ht + Mt },
            Ft = { SCROLLABLE: "modal-dialog-scrollable", SCROLLBAR_MEASURER: "modal-scrollbar-measure", BACKDROP: "modal-backdrop", OPEN: "modal-open", FADE: "fade", SHOW: "show" },
            qt = { DIALOG: ".modal-dialog", MODAL_BODY: ".modal-body", DATA_TOGGLE: '[data-toggle="modal"]', DATA_DISMISS: '[data-dismiss="modal"]', FIXED_CONTENT: ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top", STICKY_CONTENT: ".sticky-top" },
            Ut = function() {
                function t(t, e) { this._config = this._getConfig(e), this._element = t, this._dialog = t.querySelector(qt.DIALOG), this._backdrop = null, this._isShown = !1, this._isBodyOverflowing = !1, this._ignoreBackdropClick = !1, this._isTransitioning = !1, this._scrollbarWidth = 0 }
                var n = t.prototype;
                return n.toggle = function(t) { return this._isShown ? this.hide() : this.show(t) }, n.show = function(t) {
                    var n = this;
                    if (!this._isShown && !this._isTransitioning) {
                        e(this._element).hasClass(Ft.FADE) && (this._isTransitioning = !0);
                        var i = e.Event(zt.SHOW, { relatedTarget: t });
                        e(this._element).trigger(i), this._isShown || i.isDefaultPrevented() || (this._isShown = !0, this._checkScrollbar(), this._setScrollbar(), this._adjustDialog(), this._setEscapeEvent(), this._setResizeEvent(), e(this._element).on(zt.CLICK_DISMISS, qt.DATA_DISMISS, function(t) {
                            return n.hide(t)
                        }), e(this._dialog).on(zt.MOUSEDOWN_DISMISS, function() { e(n._element).one(zt.MOUSEUP_DISMISS, function(t) { e(t.target).is(n._element) && (n._ignoreBackdropClick = !0) }) }), this._showBackdrop(function() { return n._showElement(t) }))
                    }
                }, n.hide = function(t) {
                    var n = this;
                    if (t && t.preventDefault(), this._isShown && !this._isTransitioning) {
                        var i = e.Event(zt.HIDE);
                        if (e(this._element).trigger(i), this._isShown && !i.isDefaultPrevented()) {
                            this._isShown = !1;
                            var r = e(this._element).hasClass(Ft.FADE);
                            if (r && (this._isTransitioning = !0), this._setEscapeEvent(), this._setResizeEvent(), e(document).off(zt.FOCUSIN), e(this._element).removeClass(Ft.SHOW), e(this._element).off(zt.CLICK_DISMISS), e(this._dialog).off(zt.MOUSEDOWN_DISMISS), r) {
                                var o = g.getTransitionDurationFromElement(this._element);
                                e(this._element).one(g.TRANSITION_END, function(t) { return n._hideModal(t) }).emulateTransitionEnd(o)
                            } else this._hideModal()
                        }
                    }
                }, n.dispose = function() {
                    [window, this._element, this._dialog].forEach(function(t) { return e(t).off(Ht) }), e(document).off(zt.FOCUSIN), e.removeData(this._element, $t), this._config = null, this._element = null, this._dialog = null, this._backdrop = null, this._isShown = null, this._isBodyOverflowing = null, this._ignoreBackdropClick = null, this._isTransitioning = null, this._scrollbarWidth = null
                }, n.handleUpdate = function() { this._adjustDialog() }, n._getConfig = function(t) { return t = s({}, Rt, t), g.typeCheckConfig(Lt, t, Bt), t }, n._showElement = function(t) {
                    var n = this,
                        i = e(this._element).hasClass(Ft.FADE);
                    this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE || document.body.appendChild(this._element), this._element.style.display = "block", this._element.removeAttribute("aria-hidden"), this._element.setAttribute("aria-modal", !0), e(this._dialog).hasClass(Ft.SCROLLABLE) ? this._dialog.querySelector(qt.MODAL_BODY).scrollTop = 0 : this._element.scrollTop = 0, i && g.reflow(this._element), e(this._element).addClass(Ft.SHOW), this._config.focus && this._enforceFocus();
                    var r = e.Event(zt.SHOWN, { relatedTarget: t }),
                        o = function() { n._config.focus && n._element.focus(), n._isTransitioning = !1, e(n._element).trigger(r) };
                    if (i) {
                        var s = g.getTransitionDurationFromElement(this._dialog);
                        e(this._dialog).one(g.TRANSITION_END, o).emulateTransitionEnd(s)
                    } else o()
                }, n._enforceFocus = function() {
                    var t = this;
                    e(document).off(zt.FOCUSIN).on(zt.FOCUSIN, function(n) { document !== n.target && t._element !== n.target && 0 === e(t._element).has(n.target).length && t._element.focus() })
                }, n._setEscapeEvent = function() {
                    var t = this;
                    this._isShown && this._config.keyboard ? e(this._element).on(zt.KEYDOWN_DISMISS, function(e) { e.which === Wt && (e.preventDefault(), t.hide()) }) : this._isShown || e(this._element).off(zt.KEYDOWN_DISMISS)
                }, n._setResizeEvent = function() {
                    var t = this;
                    this._isShown ? e(window).on(zt.RESIZE, function(e) { return t.handleUpdate(e) }) : e(window).off(zt.RESIZE)
                }, n._hideModal = function() {
                    var t = this;
                    this._element.style.display = "none", this._element.setAttribute("aria-hidden", !0), this._element.removeAttribute("aria-modal"), this._isTransitioning = !1, this._showBackdrop(function() { e(document.body).removeClass(Ft.OPEN), t._resetAdjustments(), t._resetScrollbar(), e(t._element).trigger(zt.HIDDEN) })
                }, n._removeBackdrop = function() { this._backdrop && (e(this._backdrop).remove(), this._backdrop = null) }, n._showBackdrop = function(t) {
                    var n = this,
                        i = e(this._element).hasClass(Ft.FADE) ? Ft.FADE : "";
                    if (this._isShown && this._config.backdrop) {
                        if (this._backdrop = document.createElement("div"), this._backdrop.className = Ft.BACKDROP, i && this._backdrop.classList.add(i), e(this._backdrop).appendTo(document.body), e(this._element).on(zt.CLICK_DISMISS, function(t) { return n._ignoreBackdropClick ? void(n._ignoreBackdropClick = !1) : void(t.target === t.currentTarget && ("static" === n._config.backdrop ? n._element.focus() : n.hide())) }), i && g.reflow(this._backdrop), e(this._backdrop).addClass(Ft.SHOW), !t) return;
                        if (!i) return void t();
                        var r = g.getTransitionDurationFromElement(this._backdrop);
                        e(this._backdrop).one(g.TRANSITION_END, t).emulateTransitionEnd(r)
                    } else if (!this._isShown && this._backdrop) {
                        e(this._backdrop).removeClass(Ft.SHOW);
                        var o = function() { n._removeBackdrop(), t && t() };
                        if (e(this._element).hasClass(Ft.FADE)) {
                            var s = g.getTransitionDurationFromElement(this._backdrop);
                            e(this._backdrop).one(g.TRANSITION_END, o).emulateTransitionEnd(s)
                        } else o()
                    } else t && t()
                }, n._adjustDialog = function() { var t = this._element.scrollHeight > document.documentElement.clientHeight;!this._isBodyOverflowing && t && (this._element.style.paddingLeft = this._scrollbarWidth + "px"), this._isBodyOverflowing && !t && (this._element.style.paddingRight = this._scrollbarWidth + "px") }, n._resetAdjustments = function() { this._element.style.paddingLeft = "", this._element.style.paddingRight = "" }, n._checkScrollbar = function() {
                    var t = document.body.getBoundingClientRect();
                    this._isBodyOverflowing = t.left + t.right < window.innerWidth, this._scrollbarWidth = this._getScrollbarWidth()
                }, n._setScrollbar = function() {
                    var t = this;
                    if (this._isBodyOverflowing) {
                        var n = [].slice.call(document.querySelectorAll(qt.FIXED_CONTENT)),
                            i = [].slice.call(document.querySelectorAll(qt.STICKY_CONTENT));
                        e(n).each(function(n, i) {
                            var r = i.style.paddingRight,
                                o = e(i).css("padding-right");
                            e(i).data("padding-right", r).css("padding-right", parseFloat(o) + t._scrollbarWidth + "px")
                        }), e(i).each(function(n, i) {
                            var r = i.style.marginRight,
                                o = e(i).css("margin-right");
                            e(i).data("margin-right", r).css("margin-right", parseFloat(o) - t._scrollbarWidth + "px")
                        });
                        var r = document.body.style.paddingRight,
                            o = e(document.body).css("padding-right");
                        e(document.body).data("padding-right", r).css("padding-right", parseFloat(o) + this._scrollbarWidth + "px")
                    }
                    e(document.body).addClass(Ft.OPEN)
                }, n._resetScrollbar = function() {
                    var t = [].slice.call(document.querySelectorAll(qt.FIXED_CONTENT));
                    e(t).each(function(t, n) {
                        var i = e(n).data("padding-right");
                        e(n).removeData("padding-right"), n.style.paddingRight = i ? i : ""
                    });
                    var n = [].slice.call(document.querySelectorAll("" + qt.STICKY_CONTENT));
                    e(n).each(function(t, n) { var i = e(n).data("margin-right"); "undefined" != typeof i && e(n).css("margin-right", i).removeData("margin-right") });
                    var i = e(document.body).data("padding-right");
                    e(document.body).removeData("padding-right"), document.body.style.paddingRight = i ? i : ""
                }, n._getScrollbarWidth = function() {
                    var t = document.createElement("div");
                    t.className = Ft.SCROLLBAR_MEASURER, document.body.appendChild(t);
                    var e = t.getBoundingClientRect().width - t.clientWidth;
                    return document.body.removeChild(t), e
                }, t._jQueryInterface = function(n, i) {
                    return this.each(function() {
                        var r = e(this).data($t),
                            o = s({}, Rt, e(this).data(), "object" == typeof n && n ? n : {});
                        if (r || (r = new t(this, o), e(this).data($t, r)), "string" == typeof n) {
                            if ("undefined" == typeof r[n]) throw new TypeError('No method named "' + n + '"');
                            r[n](i)
                        } else o.show && r.show(i)
                    })
                }, r(t, null, [{ key: "VERSION", get: function() { return Nt } }, { key: "Default", get: function() { return Rt } }]), t
            }();
        e(document).on(zt.CLICK_DATA_API, qt.DATA_TOGGLE, function(t) {
            var n, i = this,
                r = g.getSelectorFromElement(this);
            r && (n = document.querySelector(r));
            var o = e(n).data($t) ? "toggle" : s({}, e(n).data(), e(this).data());
            "A" !== this.tagName && "AREA" !== this.tagName || t.preventDefault();
            var a = e(n).one(zt.SHOW, function(t) { t.isDefaultPrevented() || a.one(zt.HIDDEN, function() { e(i).is(":visible") && i.focus() }) });
            Ut._jQueryInterface.call(e(n), o, this)
        }), e.fn[Lt] = Ut._jQueryInterface, e.fn[Lt].Constructor = Ut, e.fn[Lt].noConflict = function() { return e.fn[Lt] = jt, Ut._jQueryInterface };
        var Vt = "tooltip",
            Gt = "4.3.0",
            Qt = "bs.tooltip",
            Yt = "." + Qt,
            Xt = e.fn[Vt],
            Kt = "bs-tooltip",
            Jt = new RegExp("(^|\\s)" + Kt + "\\S+", "g"),
            Zt = { animation: "boolean", template: "string", title: "(string|element|function)", trigger: "string", delay: "(number|object)", html: "boolean", selector: "(string|boolean)", placement: "(string|function)", offset: "(number|string|function)", container: "(string|element|boolean)", fallbackPlacement: "(string|array)", boundary: "(string|element)" },
            te = { AUTO: "auto", TOP: "top", RIGHT: "right", BOTTOM: "bottom", LEFT: "left" },
            ee = { animation: !0, template: '<div class="tooltip" role="tooltip"><div class="arrow"></div><div class="tooltip-inner"></div></div>', trigger: "hover focus", title: "", delay: 0, html: !1, selector: !1, placement: "top", offset: 0, container: !1, fallbackPlacement: "flip", boundary: "scrollParent" },
            ne = { SHOW: "show", OUT: "out" },
            ie = { HIDE: "hide" + Yt, HIDDEN: "hidden" + Yt, SHOW: "show" + Yt, SHOWN: "shown" + Yt, INSERTED: "inserted" + Yt, CLICK: "click" + Yt, FOCUSIN: "focusin" + Yt, FOCUSOUT: "focusout" + Yt, MOUSEENTER: "mouseenter" + Yt, MOUSELEAVE: "mouseleave" + Yt },
            re = { FADE: "fade", SHOW: "show" },
            oe = { TOOLTIP: ".tooltip", TOOLTIP_INNER: ".tooltip-inner", ARROW: ".arrow" },
            se = { HOVER: "hover", FOCUS: "focus", CLICK: "click", MANUAL: "manual" },
            ae = function() {
                function t(t, e) {
                    if ("undefined" == typeof n) throw new TypeError("Bootstrap's tooltips require Popper.js (https://popper.js.org/)");
                    this._isEnabled = !0, this._timeout = 0, this._hoverState = "", this._activeTrigger = {}, this._popper = null, this.element = t, this.config = this._getConfig(e), this.tip = null, this._setListeners()
                }
                var i = t.prototype;
                return i.enable = function() { this._isEnabled = !0 }, i.disable = function() { this._isEnabled = !1 }, i.toggleEnabled = function() { this._isEnabled = !this._isEnabled }, i.toggle = function(t) {
                    if (this._isEnabled)
                        if (t) {
                            var n = this.constructor.DATA_KEY,
                                i = e(t.currentTarget).data(n);
                            i || (i = new this.constructor(t.currentTarget, this._getDelegateConfig()), e(t.currentTarget).data(n, i)), i._activeTrigger.click = !i._activeTrigger.click, i._isWithActiveTrigger() ? i._enter(null, i) : i._leave(null, i)
                        } else {
                            if (e(this.getTipElement()).hasClass(re.SHOW)) return void this._leave(null, this);
                            this._enter(null, this)
                        }
                }, i.dispose = function() { clearTimeout(this._timeout), e.removeData(this.element, this.constructor.DATA_KEY), e(this.element).off(this.constructor.EVENT_KEY), e(this.element).closest(".modal").off("hide.bs.modal"), this.tip && e(this.tip).remove(), this._isEnabled = null, this._timeout = null, this._hoverState = null, this._activeTrigger = null, null !== this._popper && this._popper.destroy(), this._popper = null, this.element = null, this.config = null, this.tip = null }, i.show = function() {
                    var t = this;
                    if ("none" === e(this.element).css("display")) throw new Error("Please use show on visible elements");
                    var i = e.Event(this.constructor.Event.SHOW);
                    if (this.isWithContent() && this._isEnabled) {
                        e(this.element).trigger(i);
                        var r = g.findShadowRoot(this.element),
                            o = e.contains(null !== r ? r : this.element.ownerDocument.documentElement, this.element);
                        if (i.isDefaultPrevented() || !o) return;
                        var s = this.getTipElement(),
                            a = g.getUID(this.constructor.NAME);
                        s.setAttribute("id", a), this.element.setAttribute("aria-describedby", a), this.setContent(), this.config.animation && e(s).addClass(re.FADE);
                        var l = "function" == typeof this.config.placement ? this.config.placement.call(this, s, this.element) : this.config.placement,
                            u = this._getAttachment(l);
                        this.addAttachmentClass(u);
                        var c = this._getContainer();
                        e(s).data(this.constructor.DATA_KEY, this), e.contains(this.element.ownerDocument.documentElement, this.tip) || e(s).appendTo(c), e(this.element).trigger(this.constructor.Event.INSERTED), this._popper = new n(this.element, s, { placement: u, modifiers: { offset: this._getOffset(), flip: { behavior: this.config.fallbackPlacement }, arrow: { element: oe.ARROW }, preventOverflow: { boundariesElement: this.config.boundary } }, onCreate: function(e) { e.originalPlacement !== e.placement && t._handlePopperPlacementChange(e) }, onUpdate: function(e) { return t._handlePopperPlacementChange(e) } }), e(s).addClass(re.SHOW), "ontouchstart" in document.documentElement && e(document.body).children().on("mouseover", null, e.noop);
                        var d = function() {
                            t.config.animation && t._fixTransition();
                            var n = t._hoverState;
                            t._hoverState = null, e(t.element).trigger(t.constructor.Event.SHOWN), n === ne.OUT && t._leave(null, t)
                        };
                        if (e(this.tip).hasClass(re.FADE)) {
                            var f = g.getTransitionDurationFromElement(this.tip);
                            e(this.tip).one(g.TRANSITION_END, d).emulateTransitionEnd(f)
                        } else d()
                    }
                }, i.hide = function(t) {
                    var n = this,
                        i = this.getTipElement(),
                        r = e.Event(this.constructor.Event.HIDE),
                        o = function() { n._hoverState !== ne.SHOW && i.parentNode && i.parentNode.removeChild(i), n._cleanTipClass(), n.element.removeAttribute("aria-describedby"), e(n.element).trigger(n.constructor.Event.HIDDEN), null !== n._popper && n._popper.destroy(), t && t() };
                    if (e(this.element).trigger(r), !r.isDefaultPrevented()) {
                        if (e(i).removeClass(re.SHOW), "ontouchstart" in document.documentElement && e(document.body).children().off("mouseover", null, e.noop), this._activeTrigger[se.CLICK] = !1, this._activeTrigger[se.FOCUS] = !1, this._activeTrigger[se.HOVER] = !1, e(this.tip).hasClass(re.FADE)) {
                            var s = g.getTransitionDurationFromElement(i);
                            e(i).one(g.TRANSITION_END, o).emulateTransitionEnd(s)
                        } else o();
                        this._hoverState = ""
                    }
                }, i.update = function() { null !== this._popper && this._popper.scheduleUpdate() }, i.isWithContent = function() { return Boolean(this.getTitle()) }, i.addAttachmentClass = function(t) { e(this.getTipElement()).addClass(Kt + "-" + t) }, i.getTipElement = function() { return this.tip = this.tip || e(this.config.template)[0], this.tip }, i.setContent = function() {
                    var t = this.getTipElement();
                    this.setElementContent(e(t.querySelectorAll(oe.TOOLTIP_INNER)), this.getTitle()), e(t).removeClass(re.FADE + " " + re.SHOW)
                }, i.setElementContent = function(t, n) { var i = this.config.html; "object" == typeof n && (n.nodeType || n.jquery) ? i ? e(n).parent().is(t) || t.empty().append(n) : t.text(e(n).text()) : t[i ? "html" : "text"](n) }, i.getTitle = function() { var t = this.element.getAttribute("data-original-title"); return t || (t = "function" == typeof this.config.title ? this.config.title.call(this.element) : this.config.title), t }, i._getOffset = function() {
                    var t = this,
                        e = {};
                    return "function" == typeof this.config.offset ? e.fn = function(e) { return e.offsets = s({}, e.offsets, t.config.offset(e.offsets, t.element) || {}), e } : e.offset = this.config.offset, e
                }, i._getContainer = function() { return this.config.container === !1 ? document.body : g.isElement(this.config.container) ? e(this.config.container) : e(document).find(this.config.container) }, i._getAttachment = function(t) { return te[t.toUpperCase()] }, i._setListeners = function() {
                    var t = this,
                        n = this.config.trigger.split(" ");
                    n.forEach(function(n) {
                        if ("click" === n) e(t.element).on(t.constructor.Event.CLICK, t.config.selector, function(e) { return t.toggle(e) });
                        else if (n !== se.MANUAL) {
                            var i = n === se.HOVER ? t.constructor.Event.MOUSEENTER : t.constructor.Event.FOCUSIN,
                                r = n === se.HOVER ? t.constructor.Event.MOUSELEAVE : t.constructor.Event.FOCUSOUT;
                            e(t.element).on(i, t.config.selector, function(e) { return t._enter(e) }).on(r, t.config.selector, function(e) { return t._leave(e) })
                        }
                    }), e(this.element).closest(".modal").on("hide.bs.modal", function() { t.element && t.hide() }), this.config.selector ? this.config = s({}, this.config, { trigger: "manual", selector: "" }) : this._fixTitle()
                }, i._fixTitle = function() {
                    var t = typeof this.element.getAttribute("data-original-title");
                    (this.element.getAttribute("title") || "string" !== t) && (this.element.setAttribute("data-original-title", this.element.getAttribute("title") || ""), this.element.setAttribute("title", ""))
                }, i._enter = function(t, n) { var i = this.constructor.DATA_KEY; return n = n || e(t.currentTarget).data(i), n || (n = new this.constructor(t.currentTarget, this._getDelegateConfig()), e(t.currentTarget).data(i, n)), t && (n._activeTrigger["focusin" === t.type ? se.FOCUS : se.HOVER] = !0), e(n.getTipElement()).hasClass(re.SHOW) || n._hoverState === ne.SHOW ? void(n._hoverState = ne.SHOW) : (clearTimeout(n._timeout), n._hoverState = ne.SHOW, n.config.delay && n.config.delay.show ? void(n._timeout = setTimeout(function() { n._hoverState === ne.SHOW && n.show() }, n.config.delay.show)) : void n.show()) }, i._leave = function(t, n) { var i = this.constructor.DATA_KEY; if (n = n || e(t.currentTarget).data(i), n || (n = new this.constructor(t.currentTarget, this._getDelegateConfig()), e(t.currentTarget).data(i, n)), t && (n._activeTrigger["focusout" === t.type ? se.FOCUS : se.HOVER] = !1), !n._isWithActiveTrigger()) return clearTimeout(n._timeout), n._hoverState = ne.OUT, n.config.delay && n.config.delay.hide ? void(n._timeout = setTimeout(function() { n._hoverState === ne.OUT && n.hide() }, n.config.delay.hide)) : void n.hide() }, i._isWithActiveTrigger = function() {
                    for (var t in this._activeTrigger)
                        if (this._activeTrigger[t]) return !0;
                    return !1
                }, i._getConfig = function(t) { return t = s({}, this.constructor.Default, e(this.element).data(), "object" == typeof t && t ? t : {}), "number" == typeof t.delay && (t.delay = { show: t.delay, hide: t.delay }), "number" == typeof t.title && (t.title = t.title.toString()), "number" == typeof t.content && (t.content = t.content.toString()), g.typeCheckConfig(Vt, t, this.constructor.DefaultType), t }, i._getDelegateConfig = function() {
                    var t = {};
                    if (this.config)
                        for (var e in this.config) this.constructor.Default[e] !== this.config[e] && (t[e] = this.config[e]);
                    return t
                }, i._cleanTipClass = function() {
                    var t = e(this.getTipElement()),
                        n = t.attr("class").match(Jt);
                    null !== n && n.length && t.removeClass(n.join(""))
                }, i._handlePopperPlacementChange = function(t) {
                    var e = t.instance;
                    this.tip = e.popper, this._cleanTipClass(), this.addAttachmentClass(this._getAttachment(t.placement))
                }, i._fixTransition = function() {
                    var t = this.getTipElement(),
                        n = this.config.animation;
                    null === t.getAttribute("x-placement") && (e(t).removeClass(re.FADE), this.config.animation = !1, this.hide(), this.show(), this.config.animation = n)
                }, t._jQueryInterface = function(n) {
                    return this.each(function() {
                        var i = e(this).data(Qt),
                            r = "object" == typeof n && n;
                        if ((i || !/dispose|hide/.test(n)) && (i || (i = new t(this, r), e(this).data(Qt, i)), "string" == typeof n)) {
                            if ("undefined" == typeof i[n]) throw new TypeError('No method named "' + n + '"');
                            i[n]()
                        }
                    })
                }, r(t, null, [{ key: "VERSION", get: function() { return Gt } }, { key: "Default", get: function() { return ee } }, { key: "NAME", get: function() { return Vt } }, { key: "DATA_KEY", get: function() { return Qt } }, { key: "Event", get: function() { return ie } }, { key: "EVENT_KEY", get: function() { return Yt } }, { key: "DefaultType", get: function() { return Zt } }]), t
            }();
        e.fn[Vt] = ae._jQueryInterface, e.fn[Vt].Constructor = ae, e.fn[Vt].noConflict = function() { return e.fn[Vt] = Xt, ae._jQueryInterface };
        var le = "popover",
            ue = "4.3.0",
            ce = "bs.popover",
            de = "." + ce,
            fe = e.fn[le],
            he = "bs-popover",
            pe = new RegExp("(^|\\s)" + he + "\\S+", "g"),
            ge = s({}, ae.Default, { placement: "right", trigger: "click", content: "", template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>' }),
            me = s({}, ae.DefaultType, { content: "(string|element|function)" }),
            ve = { FADE: "fade", SHOW: "show" },
            ye = { TITLE: ".popover-header", CONTENT: ".popover-body" },
            be = { HIDE: "hide" + de, HIDDEN: "hidden" + de, SHOW: "show" + de, SHOWN: "shown" + de, INSERTED: "inserted" + de, CLICK: "click" + de, FOCUSIN: "focusin" + de, FOCUSOUT: "focusout" + de, MOUSEENTER: "mouseenter" + de, MOUSELEAVE: "mouseleave" + de },
            we = function(t) {
                function n() { return t.apply(this, arguments) || this }
                a(n, t);
                var i = n.prototype;
                return i.isWithContent = function() { return this.getTitle() || this._getContent() }, i.addAttachmentClass = function(t) { e(this.getTipElement()).addClass(he + "-" + t) }, i.getTipElement = function() { return this.tip = this.tip || e(this.config.template)[0], this.tip }, i.setContent = function() {
                    var t = e(this.getTipElement());
                    this.setElementContent(t.find(ye.TITLE), this.getTitle());
                    var n = this._getContent();
                    "function" == typeof n && (n = n.call(this.element)), this.setElementContent(t.find(ye.CONTENT), n), t.removeClass(ve.FADE + " " + ve.SHOW)
                }, i._getContent = function() { return this.element.getAttribute("data-content") || this.config.content }, i._cleanTipClass = function() {
                    var t = e(this.getTipElement()),
                        n = t.attr("class").match(pe);
                    null !== n && n.length > 0 && t.removeClass(n.join(""))
                }, n._jQueryInterface = function(t) {
                    return this.each(function() {
                        var i = e(this).data(ce),
                            r = "object" == typeof t ? t : null;
                        if ((i || !/dispose|hide/.test(t)) && (i || (i = new n(this, r), e(this).data(ce, i)), "string" == typeof t)) {
                            if ("undefined" == typeof i[t]) throw new TypeError('No method named "' + t + '"');
                            i[t]()
                        }
                    })
                }, r(n, null, [{ key: "VERSION", get: function() { return ue } }, { key: "Default", get: function() { return ge } }, { key: "NAME", get: function() { return le } }, { key: "DATA_KEY", get: function() { return ce } }, { key: "Event", get: function() { return be } }, { key: "EVENT_KEY", get: function() { return de } }, { key: "DefaultType", get: function() { return me } }]), n
            }(ae);
        e.fn[le] = we._jQueryInterface, e.fn[le].Constructor = we, e.fn[le].noConflict = function() { return e.fn[le] = fe, we._jQueryInterface };
        var Se = "scrollspy",
            _e = "4.3.0",
            Ce = "bs.scrollspy",
            Te = "." + Ce,
            Ee = ".data-api",
            xe = e.fn[Se],
            ke = { offset: 10, method: "auto", target: "" },
            Oe = { offset: "number", method: "string", target: "(string|element)" },
            Ie = { ACTIVATE: "activate" + Te, SCROLL: "scroll" + Te, LOAD_DATA_API: "load" + Te + Ee },
            Ae = { DROPDOWN_ITEM: "dropdown-item", DROPDOWN_MENU: "dropdown-menu", ACTIVE: "active" },
            Pe = { DATA_SPY: '[data-spy="scroll"]', ACTIVE: ".active", NAV_LIST_GROUP: ".nav, .list-group", NAV_LINKS: ".nav-link", NAV_ITEMS: ".nav-item", LIST_ITEMS: ".list-group-item", DROPDOWN: ".dropdown", DROPDOWN_ITEMS: ".dropdown-item", DROPDOWN_TOGGLE: ".dropdown-toggle" },
            De = { OFFSET: "offset", POSITION: "position" },
            Le = function() {
                function t(t, n) {
                    var i = this;
                    this._element = t, this._scrollElement = "BODY" === t.tagName ? window : t, this._config = this._getConfig(n), this._selector = this._config.target + " " + Pe.NAV_LINKS + "," + (this._config.target + " " + Pe.LIST_ITEMS + ",") + (this._config.target + " " + Pe.DROPDOWN_ITEMS), this._offsets = [], this._targets = [], this._activeTarget = null, this._scrollHeight = 0, e(this._scrollElement).on(Ie.SCROLL, function(t) { return i._process(t) }), this.refresh(), this._process()
                }
                var n = t.prototype;
                return n.refresh = function() {
                    var t = this,
                        n = this._scrollElement === this._scrollElement.window ? De.OFFSET : De.POSITION,
                        i = "auto" === this._config.method ? n : this._config.method,
                        r = i === De.POSITION ? this._getScrollTop() : 0;
                    this._offsets = [], this._targets = [], this._scrollHeight = this._getScrollHeight();
                    var o = [].slice.call(document.querySelectorAll(this._selector));
                    o.map(function(t) { var n, o = g.getSelectorFromElement(t); if (o && (n = document.querySelector(o)), n) { var s = n.getBoundingClientRect(); if (s.width || s.height) return [e(n)[i]().top + r, o] } return null }).filter(function(t) { return t }).sort(function(t, e) { return t[0] - e[0] }).forEach(function(e) { t._offsets.push(e[0]), t._targets.push(e[1]) })
                }, n.dispose = function() { e.removeData(this._element, Ce), e(this._scrollElement).off(Te), this._element = null, this._scrollElement = null, this._config = null, this._selector = null, this._offsets = null, this._targets = null, this._activeTarget = null, this._scrollHeight = null }, n._getConfig = function(t) {
                    if (t = s({}, ke, "object" == typeof t && t ? t : {}), "string" != typeof t.target) {
                        var n = e(t.target).attr("id");
                        n || (n = g.getUID(Se), e(t.target).attr("id", n)), t.target = "#" + n
                    }
                    return g.typeCheckConfig(Se, t, Oe), t
                }, n._getScrollTop = function() { return this._scrollElement === window ? this._scrollElement.pageYOffset : this._scrollElement.scrollTop }, n._getScrollHeight = function() { return this._scrollElement.scrollHeight || Math.max(document.body.scrollHeight, document.documentElement.scrollHeight) }, n._getOffsetHeight = function() { return this._scrollElement === window ? window.innerHeight : this._scrollElement.getBoundingClientRect().height }, n._process = function() {
                    var t = this._getScrollTop() + this._config.offset,
                        e = this._getScrollHeight(),
                        n = this._config.offset + e - this._getOffsetHeight();
                    if (this._scrollHeight !== e && this.refresh(), t >= n) { var i = this._targets[this._targets.length - 1]; return void(this._activeTarget !== i && this._activate(i)) }
                    if (this._activeTarget && t < this._offsets[0] && this._offsets[0] > 0) return this._activeTarget = null, void this._clear();
                    for (var r = this._offsets.length, o = r; o--;) {
                        var s = this._activeTarget !== this._targets[o] && t >= this._offsets[o] && ("undefined" == typeof this._offsets[o + 1] || t < this._offsets[o + 1]);
                        s && this._activate(this._targets[o])
                    }
                }, n._activate = function(t) {
                    this._activeTarget = t, this._clear();
                    var n = this._selector.split(",").map(function(e) { return e + '[data-target="' + t + '"],' + e + '[href="' + t + '"]' }),
                        i = e([].slice.call(document.querySelectorAll(n.join(","))));
                    i.hasClass(Ae.DROPDOWN_ITEM) ? (i.closest(Pe.DROPDOWN).find(Pe.DROPDOWN_TOGGLE).addClass(Ae.ACTIVE), i.addClass(Ae.ACTIVE)) : (i.addClass(Ae.ACTIVE), i.parents(Pe.NAV_LIST_GROUP).prev(Pe.NAV_LINKS + ", " + Pe.LIST_ITEMS).addClass(Ae.ACTIVE), i.parents(Pe.NAV_LIST_GROUP).prev(Pe.NAV_ITEMS).children(Pe.NAV_LINKS).addClass(Ae.ACTIVE)), e(this._scrollElement).trigger(Ie.ACTIVATE, { relatedTarget: t })
                }, n._clear = function() {
                    [].slice.call(document.querySelectorAll(this._selector)).filter(function(t) { return t.classList.contains(Ae.ACTIVE) }).forEach(function(t) { return t.classList.remove(Ae.ACTIVE) })
                }, t._jQueryInterface = function(n) {
                    return this.each(function() {
                        var i = e(this).data(Ce),
                            r = "object" == typeof n && n;
                        if (i || (i = new t(this, r), e(this).data(Ce, i)), "string" == typeof n) {
                            if ("undefined" == typeof i[n]) throw new TypeError('No method named "' + n + '"');
                            i[n]()
                        }
                    })
                }, r(t, null, [{ key: "VERSION", get: function() { return _e } }, { key: "Default", get: function() { return ke } }]), t
            }();
        e(window).on(Ie.LOAD_DATA_API, function() {
            for (var t = [].slice.call(document.querySelectorAll(Pe.DATA_SPY)), n = t.length, i = n; i--;) {
                var r = e(t[i]);
                Le._jQueryInterface.call(r, r.data())
            }
        }), e.fn[Se] = Le._jQueryInterface, e.fn[Se].Constructor = Le, e.fn[Se].noConflict = function() { return e.fn[Se] = xe, Le._jQueryInterface };
        var Ne = "tab",
            $e = "4.3.0",
            He = "bs.tab",
            Me = "." + He,
            je = ".data-api",
            We = e.fn[Ne],
            Re = { HIDE: "hide" + Me, HIDDEN: "hidden" + Me, SHOW: "show" + Me, SHOWN: "shown" + Me, CLICK_DATA_API: "click" + Me + je },
            Be = { DROPDOWN_MENU: "dropdown-menu", ACTIVE: "active", DISABLED: "disabled", FADE: "fade", SHOW: "show" },
            ze = { DROPDOWN: ".dropdown", NAV_LIST_GROUP: ".nav, .list-group", ACTIVE: ".active", ACTIVE_UL: "> li > .active", DATA_TOGGLE: '[data-toggle="tab"], [data-toggle="pill"], [data-toggle="list"]', DROPDOWN_TOGGLE: ".dropdown-toggle", DROPDOWN_ACTIVE_CHILD: "> .dropdown-menu .active" },
            Fe = function() {
                function t(t) { this._element = t }
                var n = t.prototype;
                return n.show = function() {
                    var t = this;
                    if (!(this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE && e(this._element).hasClass(Be.ACTIVE) || e(this._element).hasClass(Be.DISABLED))) {
                        var n, i, r = e(this._element).closest(ze.NAV_LIST_GROUP)[0],
                            o = g.getSelectorFromElement(this._element);
                        if (r) {
                            var s = "UL" === r.nodeName || "OL" === r.nodeName ? ze.ACTIVE_UL : ze.ACTIVE;
                            i = e.makeArray(e(r).find(s)), i = i[i.length - 1]
                        }
                        var a = e.Event(Re.HIDE, { relatedTarget: this._element }),
                            l = e.Event(Re.SHOW, { relatedTarget: i });
                        if (i && e(i).trigger(a), e(this._element).trigger(l), !l.isDefaultPrevented() && !a.isDefaultPrevented()) {
                            o && (n = document.querySelector(o)), this._activate(this._element, r);
                            var u = function() {
                                var n = e.Event(Re.HIDDEN, { relatedTarget: t._element }),
                                    r = e.Event(Re.SHOWN, { relatedTarget: i });
                                e(i).trigger(n), e(t._element).trigger(r)
                            };
                            n ? this._activate(n, n.parentNode, u) : u()
                        }
                    }
                }, n.dispose = function() { e.removeData(this._element, He), this._element = null }, n._activate = function(t, n, i) {
                    var r = this,
                        o = !n || "UL" !== n.nodeName && "OL" !== n.nodeName ? e(n).children(ze.ACTIVE) : e(n).find(ze.ACTIVE_UL),
                        s = o[0],
                        a = i && s && e(s).hasClass(Be.FADE),
                        l = function() { return r._transitionComplete(t, s, i) };
                    if (s && a) {
                        var u = g.getTransitionDurationFromElement(s);
                        e(s).removeClass(Be.SHOW).one(g.TRANSITION_END, l).emulateTransitionEnd(u)
                    } else l()
                }, n._transitionComplete = function(t, n, i) {
                    if (n) {
                        e(n).removeClass(Be.ACTIVE);
                        var r = e(n.parentNode).find(ze.DROPDOWN_ACTIVE_CHILD)[0];
                        r && e(r).removeClass(Be.ACTIVE), "tab" === n.getAttribute("role") && n.setAttribute("aria-selected", !1)
                    }
                    if (e(t).addClass(Be.ACTIVE), "tab" === t.getAttribute("role") && t.setAttribute("aria-selected", !0), g.reflow(t), t.classList.contains(Be.FADE) && t.classList.add(Be.SHOW), t.parentNode && e(t.parentNode).hasClass(Be.DROPDOWN_MENU)) {
                        var o = e(t).closest(ze.DROPDOWN)[0];
                        if (o) {
                            var s = [].slice.call(o.querySelectorAll(ze.DROPDOWN_TOGGLE));
                            e(s).addClass(Be.ACTIVE)
                        }
                        t.setAttribute("aria-expanded", !0)
                    }
                    i && i()
                }, t._jQueryInterface = function(n) {
                    return this.each(function() {
                        var i = e(this),
                            r = i.data(He);
                        if (r || (r = new t(this), i.data(He, r)), "string" == typeof n) {
                            if ("undefined" == typeof r[n]) throw new TypeError('No method named "' + n + '"');
                            r[n]()
                        }
                    })
                }, r(t, null, [{ key: "VERSION", get: function() { return $e } }]), t
            }();
        e(document).on(Re.CLICK_DATA_API, ze.DATA_TOGGLE, function(t) { t.preventDefault(), Fe._jQueryInterface.call(e(this), "show") }), e.fn[Ne] = Fe._jQueryInterface, e.fn[Ne].Constructor = Fe, e.fn[Ne].noConflict = function() { return e.fn[Ne] = We, Fe._jQueryInterface };
        var qe = "toast",
            Ue = "4.3.0",
            Ve = "bs.toast",
            Ge = "." + Ve,
            Qe = e.fn[qe],
            Ye = { CLICK_DISMISS: "click.dismiss" + Ge, HIDE: "hide" + Ge, HIDDEN: "hidden" + Ge, SHOW: "show" + Ge, SHOWN: "shown" + Ge },
            Xe = { FADE: "fade", HIDE: "hide", SHOW: "show", SHOWING: "showing" },
            Ke = { animation: "boolean", autohide: "boolean", delay: "number" },
            Je = { animation: !0, autohide: !0, delay: 500 },
            Ze = { DATA_DISMISS: '[data-dismiss="toast"]' },
            tn = function() {
                function t(t, e) { this._element = t, this._config = this._getConfig(e), this._timeout = null, this._setListeners() }
                var n = t.prototype;
                return n.show = function() {
                    var t = this;
                    e(this._element).trigger(Ye.SHOW), this._config.animation && this._element.classList.add(Xe.FADE);
                    var n = function() { t._element.classList.remove(Xe.SHOWING), t._element.classList.add(Xe.SHOW), e(t._element).trigger(Ye.SHOWN), t._config.autohide && t.hide() };
                    if (this._element.classList.remove(Xe.HIDE), this._element.classList.add(Xe.SHOWING), this._config.animation) {
                        var i = g.getTransitionDurationFromElement(this._element);
                        e(this._element).one(g.TRANSITION_END, n).emulateTransitionEnd(i)
                    } else n()
                }, n.hide = function(t) {
                    var n = this;
                    this._element.classList.contains(Xe.SHOW) && (e(this._element).trigger(Ye.HIDE), t ? this._close() : this._timeout = setTimeout(function() { n._close() }, this._config.delay))
                }, n.dispose = function() { clearTimeout(this._timeout), this._timeout = null, this._element.classList.contains(Xe.SHOW) && this._element.classList.remove(Xe.SHOW), e(this._element).off(Ye.CLICK_DISMISS), e.removeData(this._element, Ve), this._element = null, this._config = null }, n._getConfig = function(t) { return t = s({}, Je, e(this._element).data(), "object" == typeof t && t ? t : {}), g.typeCheckConfig(qe, t, this.constructor.DefaultType), t }, n._setListeners = function() {
                    var t = this;
                    e(this._element).on(Ye.CLICK_DISMISS, Ze.DATA_DISMISS, function() { return t.hide(!0) })
                }, n._close = function() {
                    var t = this,
                        n = function() { t._element.classList.add(Xe.HIDE), e(t._element).trigger(Ye.HIDDEN) };
                    if (this._element.classList.remove(Xe.SHOW), this._config.animation) {
                        var i = g.getTransitionDurationFromElement(this._element);
                        e(this._element).one(g.TRANSITION_END, n).emulateTransitionEnd(i)
                    } else n()
                }, t._jQueryInterface = function(n) {
                    return this.each(function() {
                        var i = e(this),
                            r = i.data(Ve),
                            o = "object" == typeof n && n;
                        if (r || (r = new t(this, o), i.data(Ve, r)), "string" == typeof n) {
                            if ("undefined" == typeof r[n]) throw new TypeError('No method named "' + n + '"');
                            r[n](this)
                        }
                    })
                }, r(t, null, [{ key: "VERSION", get: function() { return Ue } }, { key: "DefaultType", get: function() { return Ke } }, { key: "Default", get: function() { return Je } }]), t
            }();
        e.fn[qe] = tn._jQueryInterface, e.fn[qe].Constructor = tn, e.fn[qe].noConflict = function() { return e.fn[qe] = Qe, tn._jQueryInterface },
            function() {
                if ("undefined" == typeof e) throw new TypeError("Bootstrap's JavaScript requires jQuery. jQuery must be included before Bootstrap's JavaScript.");
                var t = e.fn.jquery.split(" ")[0].split("."),
                    n = 1,
                    i = 2,
                    r = 9,
                    o = 1,
                    s = 4;
                if (t[0] < i && t[1] < r || t[0] === n && t[1] === r && t[2] < o || t[0] >= s) throw new Error("Bootstrap's JavaScript requires at least jQuery v1.9.1 but less than v4.0.0")
            }(), t.Util = g, t.Alert = E, t.Button = $, t.Carousel = Z, t.Collapse = ft, t.Dropdown = Dt, t.Modal = Ut, t.Popover = we, t.Scrollspy = Le, t.Tab = Fe, t.Toast = tn, t.Tooltip = ae, Object.defineProperty(t, "__esModule", { value: !0 })
    })
}, function(t, e, n) {
    n(20), jQuery(function(t) {
        "use strict";
        i()
    });
    var i = window.lightSlider = function() {
        var t = $(".lightSlider");
        t.each(function() {
            var t = $(this);
            t.lightSlider({ verticalHeight: t.data("vertical-height"), autoWidth: t.data("auto-width"), slideWidth: t.data("slide-width"), centerSlide: t.data("center-slide"), gallery: t.data("gallery"), thumbItem: t.data("thumbs"), thumbMargin: t.data("margin"), item: t.data("item"), loop: t.data("loop"), mode: t.data("mode"), speed: t.data("speed"), auto: t.data("auto"), pause: t.data("pause"), pauseOnHover: t.data("pause-on-hover"), pager: t.data("pager"), slideMargin: t.data("slide-margin"), vThumbWidth: 80, currentPagerPosition: t.data("position"), controls: t.data("controls"), prevHtml: '<span class="icon icon-angle-left"></span>', nextHtml: '<span class="icon icon-angle-right"></span>', responsive: [{ breakpoint: 1024, settings: { item: t.data("item-lg"), slideMove: 1, slideMargin: 6 } }, { breakpoint: 768, settings: { item: t.data("item-md"), slideMove: 1, slideMargin: 6 } }, { breakpoint: 480, settings: { item: t.data("item-sm"), slideMove: 1 } }], onSliderLoad: function(e) { t.data("start") && t.goToSlide(t.data("start")), t.addClass("showSlider"), e.find(".lslide .animated").addClass("go") }, onBeforeNextSlide: function(t) { t.find(".lslide .animated").removeClass("go") }, onAfterSlide: function(t) { t.find(".lslide .animated").addClass("go") } })
        })
    }
}, function(t, e) {
    ! function(t, e) {
        "use strict";
        var n = {
            item: 3,
            autoWidth: !1,
            slideMove: 1,
            slideMargin: 10,
            addClass: "",
            mode: "slide",
            useCSS: !0,
            cssEasing: "ease",
            easing: "linear",
            speed: 400,
            auto: !1,
            pauseOnHover: !1,
            loop: !1,
            slideEndAnimation: !0,
            pause: 2e3,
            keyPress: !1,
            controls: !0,
            prevHtml: "",
            nextHtml: "",
            rtl: !1,
            adaptiveHeight: !1,
            vertical: !1,
            verticalHeight: 500,
            vThumbWidth: 100,
            thumbItem: 10,
            pager: !0,
            gallery: !1,
            galleryMargin: 5,
            thumbMargin: 5,
            currentPagerPosition: "middle",
            enableTouch: !0,
            enableDrag: !0,
            freeMove: !0,
            swipeThreshold: 40,
            responsive: [],
            onBeforeStart: function(t) {},
            onSliderLoad: function(t) {},
            onBeforeSlide: function(t, e) {},
            onAfterSlide: function(t, e) {},
            onBeforeNextSlide: function(t, e) {},
            onBeforePrevSlide: function(t, e) {}
        };
        t.fn.lightSlider = function(e) {
            if (0 === this.length) return this;
            if (this.length > 1) return this.each(function() { t(this).lightSlider(e) }), this;
            var i = {},
                r = t.extend(!0, {}, n, e),
                o = {},
                s = this;
            i.$el = this, "fade" === r.mode && (r.vertical = !1);
            var a = s.children(),
                l = t(window).width(),
                u = null,
                c = null,
                d = 0,
                f = 0,
                h = !1,
                p = 0,
                g = "",
                m = 0,
                v = r.vertical === !0 ? "height" : "width",
                y = r.vertical === !0 ? "margin-bottom" : "margin-right",
                b = 0,
                w = 0,
                S = 0,
                _ = 0,
                C = null,
                T = "ontouchstart" in document.documentElement,
                E = {};
            return E.chbreakpoint = function() {
                if (l = t(window).width(), r.responsive.length) {
                    var e;
                    if (r.autoWidth === !1 && (e = r.item), l < r.responsive[0].breakpoint)
                        for (var n = 0; n < r.responsive.length; n++) l < r.responsive[n].breakpoint && (u = r.responsive[n].breakpoint, c = r.responsive[n]);
                    if ("undefined" != typeof c && null !== c)
                        for (var i in c.settings) c.settings.hasOwnProperty(i) && ("undefined" != typeof o[i] && null !== o[i] || (o[i] = r[i]), r[i] = c.settings[i]);
                    if (!t.isEmptyObject(o) && l > r.responsive[0].breakpoint)
                        for (var s in o) o.hasOwnProperty(s) && (r[s] = o[s]);
                    r.autoWidth === !1 && b > 0 && S > 0 && e !== r.item && (m = Math.round(b / ((S + r.slideMargin) * r.slideMove)))
                }
            }, E.calSW = function() { r.autoWidth === !1 && (S = (p - (r.item * r.slideMargin - r.slideMargin)) / r.item) }, E.calWidth = function(t) {
                var e = t === !0 ? g.find(".lslide").length : a.length;
                if (r.autoWidth === !1) f = e * (S + r.slideMargin);
                else { f = 0; for (var n = 0; n < e; n++) f += parseInt(a.eq(n).width()) + r.slideMargin }
                return f
            }, i = {
                doCss: function() {
                    var t = function() {
                        for (var t = ["transition", "MozTransition", "WebkitTransition", "OTransition", "msTransition", "KhtmlTransition"], e = document.documentElement, n = 0; n < t.length; n++)
                            if (t[n] in e.style) return !0
                    };
                    return !(!r.useCSS || !t())
                },
                keyPress: function() { r.keyPress && t(document).on("keyup.lightslider", function(e) { t(":focus").is("input, textarea") || (e.preventDefault ? e.preventDefault() : e.returnValue = !1, 37 === e.keyCode ? s.goToPrevSlide() : 39 === e.keyCode && s.goToNextSlide()) }) },
                controls: function() { r.controls && (s.after('<div class="lSAction"><a class="lSPrev">' + r.prevHtml + '</a><a class="lSNext">' + r.nextHtml + "</a></div>"), r.autoWidth ? E.calWidth(!1) < p && g.find(".lSAction").hide() : d <= r.item && g.find(".lSAction").hide(), g.find(".lSAction a").on("click", function(e) { return e.preventDefault ? e.preventDefault() : e.returnValue = !1, "lSPrev" === t(this).attr("class") ? s.goToPrevSlide() : s.goToNextSlide(), !1 })) },
                initialStyle: function() {
                    var t = this;
                    "fade" === r.mode && (r.autoWidth = !1, r.slideEndAnimation = !1), r.auto && (r.slideEndAnimation = !1), r.autoWidth && (r.slideMove = 1, r.item = 1), r.loop && (r.slideMove = 1, r.freeMove = !1), r.onBeforeStart.call(this, s), E.chbreakpoint(), s.addClass("lightSlider").wrap('<div class="lSSlideOuter ' + r.addClass + '"><div class="lSSlideWrapper"></div></div>'), g = s.parent(".lSSlideWrapper"), r.rtl === !0 && g.parent().addClass("lSrtl"), r.vertical ? (g.parent().addClass("vertical"), p = r.verticalHeight, g.css("height", p + "px")) : p = s.outerWidth(), a.addClass("lslide"), r.loop === !0 && "slide" === r.mode && (E.calSW(), E.clone = function() {
                        if (E.calWidth(!0) > p) {
                            for (var e = 0, n = 0, i = 0; i < a.length && (e += parseInt(s.find(".lslide").eq(i).width()) + r.slideMargin, n++, !(e >= p + r.slideMargin)); i++);
                            var o = r.autoWidth === !0 ? n : r.item;
                            if (o < s.find(".clone.left").length)
                                for (var l = 0; l < s.find(".clone.left").length - o; l++) a.eq(l).remove();
                            if (o < s.find(".clone.right").length)
                                for (var u = a.length - 1; u > a.length - 1 - s.find(".clone.right").length; u--) m--, a.eq(u).remove();
                            for (var c = s.find(".clone.right").length; c < o; c++) s.find(".lslide").eq(c).clone().removeClass("lslide").addClass("clone right").appendTo(s), m++;
                            for (var d = s.find(".lslide").length - s.find(".clone.left").length; d > s.find(".lslide").length - o; d--) s.find(".lslide").eq(d - 1).clone().removeClass("lslide").addClass("clone left").prependTo(s);
                            a = s.children()
                        } else a.hasClass("clone") && (s.find(".clone").remove(), t.move(s, 0))
                    }, E.clone()), E.sSW = function() { d = a.length, r.rtl === !0 && r.vertical === !1 && (y = "margin-left"), r.autoWidth === !1 && a.css(v, S + "px"), a.css(y, r.slideMargin + "px"), f = E.calWidth(!1), s.css(v, f + "px"), r.loop === !0 && "slide" === r.mode && h === !1 && (m = s.find(".clone.left").length) }, E.calL = function() { a = s.children(), d = a.length }, this.doCss() && g.addClass("usingCss"), E.calL(), "slide" === r.mode ? (E.calSW(), E.sSW(), r.loop === !0 && (b = t.slideValue(), this.move(s, b)), r.vertical === !1 && this.setHeight(s, !1)) : (this.setHeight(s, !0), s.addClass("lSFade"), this.doCss() || (a.fadeOut(0), a.eq(m).fadeIn(0))), r.loop === !0 && "slide" === r.mode ? a.eq(m).addClass("active") : a.first().addClass("active")
                },
                pager: function() {
                    var t = this;
                    if (E.createPager = function() {
                            _ = (p - (r.thumbItem * r.thumbMargin - r.thumbMargin)) / r.thumbItem;
                            var e = g.find(".lslide"),
                                n = g.find(".lslide").length,
                                i = 0,
                                o = "",
                                a = 0;
                            for (i = 0; i < n; i++) {
                                "slide" === r.mode && (r.autoWidth ? a += (parseInt(e.eq(i).width()) + r.slideMargin) * r.slideMove : a = i * ((S + r.slideMargin) * r.slideMove));
                                var l = e.eq(i * r.slideMove).attr("data-thumb");
                                if (o += r.gallery === !0 ? '<li style="width:100%;' + v + ":" + _ + "px;" + y + ":" + r.thumbMargin + 'px"><a href="#"><img src="' + l + '" /></a></li>' : '<li><a href="#">' + (i + 1) + "</a></li>", "slide" === r.mode && a >= f - p - r.slideMargin) {
                                    i += 1;
                                    var u = 2;
                                    r.autoWidth && (o += '<li><a href="#">' + (i + 1) + "</a></li>", u = 1), i < u ? (o = null, g.parent().addClass("noPager")) : g.parent().removeClass("noPager");
                                    break
                                }
                            }
                            var c = g.parent();
                            c.find(".lSPager").html(o), r.gallery === !0 && (r.vertical === !0 && c.find(".lSPager").css("width", r.vThumbWidth + "px"), w = i * (r.thumbMargin + _) + .5, c.find(".lSPager").css({ property: w + "px", "transition-duration": r.speed + "ms" }), r.vertical === !0 && g.parent().css("padding-right", r.vThumbWidth + r.galleryMargin + "px"), c.find(".lSPager").css(v, w + "px"));
                            var d = c.find(".lSPager").find("li");
                            d.first().addClass("active"), d.on("click", function() { return r.loop === !0 && "slide" === r.mode ? m += d.index(this) - c.find(".lSPager").find("li.active").index() : m = d.index(this), s.mode(!1), r.gallery === !0 && t.slideThumb(), !1 })
                        }, r.pager) {
                        var e = "lSpg";
                        r.gallery && (e = "lSGallery"), g.after('<ul class="lSPager ' + e + '"></ul>');
                        var n = r.vertical ? "margin-left" : "margin-top";
                        g.parent().find(".lSPager").css(n, r.galleryMargin + "px"), E.createPager()
                    }
                    setTimeout(function() { E.init() }, 0)
                },
                setHeight: function(t, e) {
                    var n = null,
                        i = this;
                    n = r.loop ? t.children(".lslide ").first() : t.children().first();
                    var o = function() {
                        var i = n.outerHeight(),
                            r = 0,
                            o = i;
                        e && (i = 0, r = 100 * o / p), t.css({ height: i + "px", "padding-bottom": r + "%" })
                    };
                    o(), n.find("img").length ? n.find("img")[0].complete ? (o(), C || i.auto()) : n.find("img").on("load", function() { setTimeout(function() { o(), C || i.auto() }, 100) }) : C || i.auto()
                },
                active: function(t, e) {
                    this.doCss() && "fade" === r.mode && g.addClass("on");
                    var n = 0;
                    if (m * r.slideMove < d) {
                        t.removeClass("active"), this.doCss() || "fade" !== r.mode || e !== !1 || t.fadeOut(r.speed), n = e === !0 ? m : m * r.slideMove;
                        var i, o;
                        e === !0 && (i = t.length, o = i - 1, n + 1 >= i && (n = o)), r.loop === !0 && "slide" === r.mode && (n = e === !0 ? m - s.find(".clone.left").length : m * r.slideMove, e === !0 && (i = t.length, o = i - 1, n + 1 === i ? n = o : n + 1 > i && (n = 0))), this.doCss() || "fade" !== r.mode || e !== !1 || t.eq(n).fadeIn(r.speed), t.eq(n).addClass("active")
                    } else t.removeClass("active"), t.eq(t.length - 1).addClass("active"), this.doCss() || "fade" !== r.mode || e !== !1 || (t.fadeOut(r.speed), t.eq(n).fadeIn(r.speed))
                },
                move: function(t, e) {
                    r.rtl === !0 && (e = -e), this.doCss() ? r.vertical === !0 ? t.css({ transform: "translate3d(0px, " + -e + "px, 0px)", "-webkit-transform": "translate3d(0px, " + -e + "px, 0px)" }) : t.css({ transform: "translate3d(" + -e + "px, 0px, 0px)", "-webkit-transform": "translate3d(" + -e + "px, 0px, 0px)" }) : r.vertical === !0 ? t.css("position", "relative").animate({ top: -e + "px" }, r.speed, r.easing) : t.css("position", "relative").animate({ left: -e + "px" }, r.speed, r.easing);
                    var n = g.parent().find(".lSPager").find("li");
                    this.active(n, !0)
                },
                fade: function() {
                    this.active(a, !1);
                    var t = g.parent().find(".lSPager").find("li");
                    this.active(t, !0)
                },
                slide: function() {
                    var t = this;
                    E.calSlide = function() { f > p && (b = t.slideValue(), t.active(a, !1), b > f - p - r.slideMargin ? b = f - p - r.slideMargin : b < 0 && (b = 0), t.move(s, b), r.loop === !0 && "slide" === r.mode && (m >= d - s.find(".clone.left").length / r.slideMove && t.resetSlide(s.find(".clone.left").length), 0 === m && t.resetSlide(g.find(".lslide").length))) }, E.calSlide()
                },
                resetSlide: function(t) {
                    var e = this;
                    g.find(".lSAction a").addClass("disabled"), setTimeout(function() { m = t, g.css("transition-duration", "0ms"), b = e.slideValue(), e.active(a, !1), i.move(s, b), setTimeout(function() { g.css("transition-duration", r.speed + "ms"), g.find(".lSAction a").removeClass("disabled") }, 50) }, r.speed + 100)
                },
                slideValue: function() {
                    var t = 0;
                    if (r.autoWidth === !1) t = m * ((S + r.slideMargin) * r.slideMove);
                    else { t = 0; for (var e = 0; e < m; e++) t += parseInt(a.eq(e).width()) + r.slideMargin }
                    return t
                },
                slideThumb: function() {
                    var t;
                    switch (r.currentPagerPosition) {
                        case "left":
                            t = 0;
                            break;
                        case "middle":
                            t = p / 2 - _ / 2;
                            break;
                        case "right":
                            t = p - _
                    }
                    var e = m - s.find(".clone.left").length,
                        n = g.parent().find(".lSPager");
                    "slide" === r.mode && r.loop === !0 && (e >= n.children().length ? e = 0 : e < 0 && (e = n.children().length));
                    var i = e * (_ + r.thumbMargin) - t;
                    i + p > w && (i = w - p - r.thumbMargin), i < 0 && (i = 0), this.move(n, i)
                },
                auto: function() { r.auto && (clearInterval(C), C = setInterval(function() { s.goToNextSlide() }, r.pause)) },
                pauseOnHover: function() {
                    var e = this;
                    r.auto && r.pauseOnHover && (g.on("mouseenter", function() { t(this).addClass("ls-hover"), s.pause(), r.auto = !0 }), g.on("mouseleave", function() { t(this).removeClass("ls-hover"), g.find(".lightSlider").hasClass("lsGrabbing") || e.auto() }))
                },
                touchMove: function(t, e) {
                    if (g.css("transition-duration", "0ms"), "slide" === r.mode) {
                        var n = t - e,
                            i = b - n;
                        if (i >= f - p - r.slideMargin)
                            if (r.freeMove === !1) i = f - p - r.slideMargin;
                            else {
                                var o = f - p - r.slideMargin;
                                i = o + (i - o) / 5
                            }
                        else i < 0 && (r.freeMove === !1 ? i = 0 : i /= 5);
                        this.move(s, i)
                    }
                },
                touchEnd: function(t) {
                    if (g.css("transition-duration", r.speed + "ms"), "slide" === r.mode) {
                        var e = !1,
                            n = !0;
                        b -= t, b > f - p - r.slideMargin ? (b = f - p - r.slideMargin, r.autoWidth === !1 && (e = !0)) : b < 0 && (b = 0);
                        var i = function(t) {
                            var n = 0;
                            if (e || t && (n = 1), r.autoWidth)
                                for (var i = 0, o = 0; o < a.length && (i += parseInt(a.eq(o).width()) + r.slideMargin, m = o + n, !(i >= b)); o++);
                            else {
                                var s = b / ((S + r.slideMargin) * r.slideMove);
                                m = parseInt(s) + n, b >= f - p - r.slideMargin && s % 1 !== 0 && m++
                            }
                        };
                        t >= r.swipeThreshold ? (i(!1), n = !1) : t <= -r.swipeThreshold && (i(!0), n = !1), s.mode(n), this.slideThumb()
                    } else t >= r.swipeThreshold ? s.goToPrevSlide() : t <= -r.swipeThreshold && s.goToNextSlide()
                },
                enableDrag: function() {
                    var e = this;
                    if (!T) {
                        var n = 0,
                            i = 0,
                            o = !1;
                        g.find(".lightSlider").addClass("lsGrab"), g.on("mousedown", function(e) { return !(f < p && 0 !== f) && void("lSPrev" !== t(e.target).attr("class") && "lSNext" !== t(e.target).attr("class") && (n = r.vertical === !0 ? e.pageY : e.pageX, o = !0, e.preventDefault ? e.preventDefault() : e.returnValue = !1, g.scrollLeft += 1, g.scrollLeft -= 1, g.find(".lightSlider").removeClass("lsGrab").addClass("lsGrabbing"), clearInterval(C))) }), t(window).on("mousemove", function(t) { o && (i = r.vertical === !0 ? t.pageY : t.pageX, e.touchMove(i, n)) }), t(window).on("mouseup", function(s) {
                            if (o) {
                                g.find(".lightSlider").removeClass("lsGrabbing").addClass("lsGrab"), o = !1, i = r.vertical === !0 ? s.pageY : s.pageX;
                                var a = i - n;
                                Math.abs(a) >= r.swipeThreshold && t(window).on("click.ls", function(e) { e.preventDefault ? e.preventDefault() : e.returnValue = !1, e.stopImmediatePropagation(), e.stopPropagation(), t(window).off("click.ls") }), e.touchEnd(a)
                            }
                        })
                    }
                },
                enableTouch: function() {
                    var t = this;
                    if (T) {
                        var e = {},
                            n = {};
                        g.on("touchstart", function(t) { n = t.originalEvent.targetTouches[0], e.pageX = t.originalEvent.targetTouches[0].pageX, e.pageY = t.originalEvent.targetTouches[0].pageY, clearInterval(C) }), g.on("touchmove", function(i) {
                            if (f < p && 0 !== f) return !1;
                            var o = i.originalEvent;
                            n = o.targetTouches[0];
                            var s = Math.abs(n.pageX - e.pageX),
                                a = Math.abs(n.pageY - e.pageY);
                            r.vertical === !0 ? (3 * a > s && i.preventDefault(), t.touchMove(n.pageY, e.pageY)) : (3 * s > a && i.preventDefault(), t.touchMove(n.pageX, e.pageX))
                        }), g.on("touchend", function() {
                            if (f < p && 0 !== f) return !1;
                            var i;
                            i = r.vertical === !0 ? n.pageY - e.pageY : n.pageX - e.pageX, t.touchEnd(i)
                        })
                    }
                },
                build: function() {
                    var e = this;
                    e.initialStyle(), this.doCss() && (r.enableTouch === !0 && e.enableTouch(), r.enableDrag === !0 && e.enableDrag()), t(window).on("focus", function() { e.auto() }), t(window).on("blur", function() { clearInterval(C) }), e.pager(), e.pauseOnHover(), e.controls(), e.keyPress()
                }
            }, i.build(), E.init = function() { E.chbreakpoint(), r.vertical === !0 ? (p = r.item > 1 ? r.verticalHeight : a.outerHeight(), g.css("height", p + "px")) : p = g.outerWidth(), r.loop === !0 && "slide" === r.mode && E.clone(), E.calL(), "slide" === r.mode && s.removeClass("lSSlide"), "slide" === r.mode && (E.calSW(), E.sSW()), setTimeout(function() { "slide" === r.mode && s.addClass("lSSlide") }, 1e3), r.pager && E.createPager(), r.adaptiveHeight === !0 && r.vertical === !1 && s.css("height", a.eq(m).outerHeight(!0)), r.adaptiveHeight === !1 && ("slide" === r.mode ? r.vertical === !1 ? i.setHeight(s, !1) : i.auto() : i.setHeight(s, !0)), r.gallery === !0 && i.slideThumb(), "slide" === r.mode && i.slide(), r.autoWidth === !1 ? a.length <= r.item ? g.find(".lSAction").hide() : g.find(".lSAction").show() : E.calWidth(!1) < p && 0 !== f ? g.find(".lSAction").hide() : g.find(".lSAction").show() }, s.goToPrevSlide = function() {
                if (m > 0) r.onBeforePrevSlide.call(this, s, m), m--, s.mode(!1), r.gallery === !0 && i.slideThumb();
                else if (r.loop === !0) {
                    if (r.onBeforePrevSlide.call(this, s, m), "fade" === r.mode) {
                        var t = d - 1;
                        m = parseInt(t / r.slideMove)
                    }
                    s.mode(!1), r.gallery === !0 && i.slideThumb()
                } else r.slideEndAnimation === !0 && (s.addClass("leftEnd"), setTimeout(function() { s.removeClass("leftEnd") }, 400))
            }, s.goToNextSlide = function() {
                var t = !0;
                if ("slide" === r.mode) {
                    var e = i.slideValue();
                    t = e < f - p - r.slideMargin
                }
                m * r.slideMove < d - r.slideMove && t ? (r.onBeforeNextSlide.call(this, s, m), m++, s.mode(!1), r.gallery === !0 && i.slideThumb()) : r.loop === !0 ? (r.onBeforeNextSlide.call(this, s, m), m = 0, s.mode(!1), r.gallery === !0 && i.slideThumb()) : r.slideEndAnimation === !0 && (s.addClass("rightEnd"), setTimeout(function() { s.removeClass("rightEnd") }, 400))
            }, s.mode = function(t) { r.adaptiveHeight === !0 && r.vertical === !1 && s.css("height", a.eq(m).outerHeight(!0)), h === !1 && ("slide" === r.mode ? i.doCss() && (s.addClass("lSSlide"), "" !== r.speed && g.css("transition-duration", r.speed + "ms"), "" !== r.cssEasing && g.css("transition-timing-function", r.cssEasing)) : i.doCss() && ("" !== r.speed && s.css("transition-duration", r.speed + "ms"), "" !== r.cssEasing && s.css("transition-timing-function", r.cssEasing))), t || r.onBeforeSlide.call(this, s, m), "slide" === r.mode ? i.slide() : i.fade(), g.hasClass("ls-hover") || i.auto(), setTimeout(function() { t || r.onAfterSlide.call(this, s, m) }, r.speed), h = !0 }, s.play = function() { s.goToNextSlide(), r.auto = !0, i.auto() }, s.pause = function() { r.auto = !1, clearInterval(C) }, s.refresh = function() { E.init() }, s.getCurrentSlideCount = function() {
                var t = m;
                if (r.loop) {
                    var e = g.find(".lslide").length,
                        n = s.find(".clone.left").length;
                    t = m <= n - 1 ? e + (m - n) : m >= e + n ? m - e - n : m - n
                }
                return t + 1
            }, s.getTotalSlideCount = function() { return g.find(".lslide").length }, s.goToSlide = function(t) { m = r.loop ? t + s.find(".clone.left").length - 1 : t, s.mode(!1), r.gallery === !0 && i.slideThumb() }, s.destroy = function() { s.lightSlider && (s.goToPrevSlide = function() {}, s.goToNextSlide = function() {}, s.mode = function() {}, s.play = function() {}, s.pause = function() {}, s.refresh = function() {}, s.getCurrentSlideCount = function() {}, s.getTotalSlideCount = function() {}, s.goToSlide = function() {}, s.lightSlider = null, E = { init: function() {} }, s.parent().parent().find(".lSAction, .lSPager").remove(), s.removeClass("lightSlider lSFade lSSlide lsGrab lsGrabbing leftEnd right").removeAttr("style").unwrap().unwrap(), s.children().removeAttr("style"), a.removeClass("lslide active"), s.find(".clone").remove(), a = null, C = null, h = !1, m = 0) }, setTimeout(function() { r.onSliderLoad.call(this, s) }, 10), t(window).on("resize orientationchange", function(t) { setTimeout(function() { t.preventDefault ? t.preventDefault() : t.returnValue = !1, E.init() }, 200) }), this
        }
    }(jQuery)
}, function(t, e, n) {
    n(22), jQuery(function(t) {
        "use strict";
        i()
    });
    var i = window.lightGallery = function() {
        var t = $(".lightGallery");
        t.lightGallery({ selector: ".light-post" })
    }
}, function(t, e, n) {
    var i, r;
    ! function(o, s) { i = [n(0)], r = function(t) { return s(t) }.apply(e, i), !(void 0 !== r && (t.exports = r)) }(this, function(t) {
        ! function() {
            "use strict";

            function e(e, i) { if (this.el = e, this.$el = t(e), this.s = t.extend({}, n, i), this.s.dynamic && "undefined" !== this.s.dynamicEl && this.s.dynamicEl.constructor === Array && !this.s.dynamicEl.length) throw "When using dynamic mode, you must also define dynamicEl as an Array."; return this.modules = {}, this.lGalleryOn = !1, this.lgBusy = !1, this.hideBartimeout = !1, this.isTouch = "ontouchstart" in document.documentElement, this.s.slideEndAnimatoin && (this.s.hideControlOnEnd = !1), this.s.dynamic ? this.$items = this.s.dynamicEl : "this" === this.s.selector ? this.$items = this.$el : "" !== this.s.selector ? this.s.selectWithin ? this.$items = t(this.s.selectWithin).find(this.s.selector) : this.$items = this.$el.find(t(this.s.selector)) : this.$items = this.$el.children(), this.$slide = "", this.$outer = "", this.init(), this }
            var n = { mode: "lg-slide", cssEasing: "ease", easing: "linear", speed: 600, height: "100%", width: "100%", addClass: "", startClass: "lg-start-zoom", backdropDuration: 150, hideBarsDelay: 6e3, useLeft: !1, closable: !0, loop: !0, escKey: !0, keyPress: !0, controls: !0, slideEndAnimatoin: !0, hideControlOnEnd: !1, mousewheel: !0, getCaptionFromTitleOrAlt: !0, appendSubHtmlTo: ".lg-sub-html", subHtmlSelectorRelative: !1, preload: 1, showAfterLoad: !0, selector: "", selectWithin: "", nextHtml: "", prevHtml: "", index: !1, iframeMaxWidth: "100%", download: !0, counter: !0, appendCounterTo: ".lg-toolbar", swipeThreshold: 50, enableSwipe: !0, enableDrag: !0, dynamic: !1, dynamicEl: [], galleryId: 1 };
            e.prototype.init = function() {
                var e = this;
                e.s.preload > e.$items.length && (e.s.preload = e.$items.length);
                var n = window.location.hash;
                n.indexOf("lg=" + this.s.galleryId) > 0 && (e.index = parseInt(n.split("&slide=")[1], 10), t("body").addClass("lg-from-hash"), t("body").hasClass("lg-on") || (setTimeout(function() { e.build(e.index) }), t("body").addClass("lg-on"))), e.s.dynamic ? (e.$el.trigger("onBeforeOpen.lg"), e.index = e.s.index || 0, t("body").hasClass("lg-on") || setTimeout(function() { e.build(e.index), t("body").addClass("lg-on") })) : e.$items.on("click.lgcustom", function(n) {
                    try { n.preventDefault(), n.preventDefault() } catch (i) { n.returnValue = !1 }
                    e.$el.trigger("onBeforeOpen.lg"), e.index = e.s.index || e.$items.index(this), t("body").hasClass("lg-on") || (e.build(e.index), t("body").addClass("lg-on"))
                })
            }, e.prototype.build = function(e) {
                var n = this;
                n.structure(), t.each(t.fn.lightGallery.modules, function(e) { n.modules[e] = new t.fn.lightGallery.modules[e](n.el) }), n.slide(e, !1, !1, !1), n.s.keyPress && n.keyPress(), n.$items.length > 1 ? (n.arrow(), setTimeout(function() { n.enableDrag(), n.enableSwipe() }, 50), n.s.mousewheel && n.mousewheel()) : n.$slide.on("click.lg", function() { n.$el.trigger("onSlideClick.lg") }), n.counter(), n.closeGallery(), n.$el.trigger("onAfterOpen.lg"), n.$outer.on("mousemove.lg click.lg touchstart.lg", function() { n.$outer.removeClass("lg-hide-items"), clearTimeout(n.hideBartimeout), n.hideBartimeout = setTimeout(function() { n.$outer.addClass("lg-hide-items") }, n.s.hideBarsDelay) }), n.$outer.trigger("mousemove.lg")
            }, e.prototype.structure = function() {
                var e, n = "",
                    i = "",
                    r = 0,
                    o = "",
                    s = this;
                for (t("body").append('<div class="lg-backdrop"></div>'), t(".lg-backdrop").css("transition-duration", this.s.backdropDuration + "ms"), r = 0; r < this.$items.length; r++) n += '<div class="lg-item"></div>';
                if (this.s.controls && this.$items.length > 1 && (i = '<div class="lg-actions"><button class="lg-prev lg-icon">' + this.s.prevHtml + '</button><button class="lg-next lg-icon">' + this.s.nextHtml + "</button></div>"), ".lg-sub-html" === this.s.appendSubHtmlTo && (o = '<div class="lg-sub-html"></div>'), e = '<div class="lg-outer ' + this.s.addClass + " " + this.s.startClass + '"><div class="lg" style="width:' + this.s.width + "; height:" + this.s.height + '"><div class="lg-inner">' + n + '</div><div class="lg-toolbar lg-group"><span class="lg-close lg-icon"></span></div>' + i + o + "</div></div>", t("body").append(e), this.$outer = t(".lg-outer"), this.$slide = this.$outer.find(".lg-item"), this.s.useLeft ? (this.$outer.addClass("lg-use-left"), this.s.mode = "lg-slide") : this.$outer.addClass("lg-use-css3"), s.setTop(), t(window).on("resize.lg orientationchange.lg", function() { setTimeout(function() { s.setTop() }, 100) }), this.$slide.eq(this.index).addClass("lg-current"), this.doCss() ? this.$outer.addClass("lg-css3") : (this.$outer.addClass("lg-css"), this.s.speed = 0), this.$outer.addClass(this.s.mode), this.s.enableDrag && this.$items.length > 1 && this.$outer.addClass("lg-grab"), this.s.showAfterLoad && this.$outer.addClass("lg-show-after-load"), this.doCss()) {
                    var a = this.$outer.find(".lg-inner");
                    a.css("transition-timing-function", this.s.cssEasing), a.css("transition-duration", this.s.speed + "ms")
                }
                setTimeout(function() { t(".lg-backdrop").addClass("in") }), setTimeout(function() { s.$outer.addClass("lg-visible") }, this.s.backdropDuration), this.s.download && this.$outer.find(".lg-toolbar").append('<a id="lg-download" target="_blank" download class="lg-download lg-icon"></a>'), this.prevScrollTop = t(window).scrollTop()
            }, e.prototype.setTop = function() {
                if ("100%" !== this.s.height) {
                    var e = t(window).height(),
                        n = (e - parseInt(this.s.height, 10)) / 2,
                        i = this.$outer.find(".lg");
                    e >= parseInt(this.s.height, 10) ? i.css("top", n + "px") : i.css("top", "0px")
                }
            }, e.prototype.doCss = function() {
                var t = function() {
                    var t = ["transition", "MozTransition", "WebkitTransition", "OTransition", "msTransition", "KhtmlTransition"],
                        e = document.documentElement,
                        n = 0;
                    for (n = 0; n < t.length; n++)
                        if (t[n] in e.style) return !0
                };
                return !!t()
            }, e.prototype.isVideo = function(t, e) {
                var n;
                if (n = this.s.dynamic ? this.s.dynamicEl[e].html : this.$items.eq(e).attr("data-html"), !t) return n ? { html5: !0 } : (console.error("lightGallery :- data-src is not pvovided on slide item " + (e + 1) + ". Please make sure the selector property is properly configured. More info - http://sachinchoolur.github.io/lightGallery/demos/html-markup.html"), !1);
                var i = t.match(/\/\/(?:www\.)?youtu(?:\.be|be\.com|be-nocookie\.com)\/(?:watch\?v=|embed\/)?([a-z0-9\-\_\%]+)/i),
                    r = t.match(/\/\/(?:www\.)?vimeo.com\/([0-9a-z\-_]+)/i),
                    o = t.match(/\/\/(?:www\.)?dai.ly\/([0-9a-z\-_]+)/i),
                    s = t.match(/\/\/(?:www\.)?(?:vk\.com|vkontakte\.ru)\/(?:video_ext\.php\?)(.*)/i);
                return i ? { youtube: i } : r ? { vimeo: r } : o ? { dailymotion: o } : s ? { vk: s } : void 0
            }, e.prototype.counter = function() { this.s.counter && t(this.s.appendCounterTo).append('<div id="lg-counter"><span id="lg-counter-current">' + (parseInt(this.index, 10) + 1) + '</span> / <span id="lg-counter-all">' + this.$items.length + "</span></div>") }, e.prototype.addHtml = function(e) {
                var n, i, r = null;
                if (this.s.dynamic ? this.s.dynamicEl[e].subHtmlUrl ? n = this.s.dynamicEl[e].subHtmlUrl : r = this.s.dynamicEl[e].subHtml : (i = this.$items.eq(e), i.attr("data-sub-html-url") ? n = i.attr("data-sub-html-url") : (r = i.attr("data-sub-html"), this.s.getCaptionFromTitleOrAlt && !r && (r = i.attr("title") || i.find("img").first().attr("alt")))), !n)
                    if ("undefined" != typeof r && null !== r) { var o = r.substring(0, 1); "." !== o && "#" !== o || (r = this.s.subHtmlSelectorRelative && !this.s.dynamic ? i.find(r).html() : t(r).html()) } else r = "";
                    ".lg-sub-html" === this.s.appendSubHtmlTo ? n ? this.$outer.find(this.s.appendSubHtmlTo).load(n) : this.$outer.find(this.s.appendSubHtmlTo).html(r) : n ? this.$slide.eq(e).load(n) : this.$slide.eq(e).append(r), "undefined" != typeof r && null !== r && ("" === r ? this.$outer.find(this.s.appendSubHtmlTo).addClass("lg-empty-html") : this.$outer.find(this.s.appendSubHtmlTo).removeClass("lg-empty-html")), this.$el.trigger("onAfterAppendSubHtml.lg", [e])
            }, e.prototype.preload = function(t) {
                var e = 1,
                    n = 1;
                for (e = 1; e <= this.s.preload && !(e >= this.$items.length - t); e++) this.loadContent(t + e, !1, 0);
                for (n = 1; n <= this.s.preload && !(t - n < 0); n++) this.loadContent(t - n, !1, 0)
            }, e.prototype.loadContent = function(e, n, i) {
                var r, o, s, a, l, u, c = this,
                    d = !1,
                    f = function(e) {
                        for (var n = [], i = [], r = 0; r < e.length; r++) { var s = e[r].split(" "); "" === s[0] && s.splice(0, 1), i.push(s[0]), n.push(s[1]) }
                        for (var a = t(window).width(), l = 0; l < n.length; l++)
                            if (parseInt(n[l], 10) > a) { o = i[l]; break }
                    };
                if (c.s.dynamic) {
                    if (c.s.dynamicEl[e].poster && (d = !0, s = c.s.dynamicEl[e].poster), u = c.s.dynamicEl[e].html, o = c.s.dynamicEl[e].src, c.s.dynamicEl[e].responsive) {
                        var h = c.s.dynamicEl[e].responsive.split(",");
                        f(h)
                    }
                    a = c.s.dynamicEl[e].srcset, l = c.s.dynamicEl[e].sizes
                } else {
                    if (c.$items.eq(e).attr("data-poster") && (d = !0, s = c.$items.eq(e).attr("data-poster")), u = c.$items.eq(e).attr("data-html"), o = c.$items.eq(e).attr("href") || c.$items.eq(e).attr("data-src"), c.$items.eq(e).attr("data-responsive")) {
                        var p = c.$items.eq(e).attr("data-responsive").split(",");
                        f(p)
                    }
                    a = c.$items.eq(e).attr("data-srcset"), l = c.$items.eq(e).attr("data-sizes")
                }
                var g = !1;
                c.s.dynamic ? c.s.dynamicEl[e].iframe && (g = !0) : "true" === c.$items.eq(e).attr("data-iframe") && (g = !0);
                var m = c.isVideo(o, e);
                if (!c.$slide.eq(e).hasClass("lg-loaded")) {
                    if (g) c.$slide.eq(e).prepend('<div class="lg-video-cont lg-has-iframe" style="max-width:' + c.s.iframeMaxWidth + '"><div class="lg-video"><iframe class="lg-object" frameborder="0" src="' + o + '"  allowfullscreen="true"></iframe></div></div>');
                    else if (d) {
                        var v = "";
                        v = m && m.youtube ? "lg-has-youtube" : m && m.vimeo ? "lg-has-vimeo" : "lg-has-html5", c.$slide.eq(e).prepend('<div class="lg-video-cont ' + v + ' "><div class="lg-video"><span class="lg-video-play"></span><img class="lg-object lg-has-poster" src="' + s + '" /></div></div>')
                    } else m ? (c.$slide.eq(e).prepend('<div class="lg-video-cont "><div class="lg-video"></div></div>'), c.$el.trigger("hasVideo.lg", [e, o, u])) : c.$slide.eq(e).prepend('<div class="lg-img-wrap"><img class="lg-object lg-image" src="' + o + '" /></div>');
                    if (c.$el.trigger("onAferAppendSlide.lg", [e]), r = c.$slide.eq(e).find(".lg-object"), l && r.attr("sizes", l), a) { r.attr("srcset", a); try { picturefill({ elements: [r[0]] }) } catch (y) { console.warn("lightGallery :- If you want srcset to be supported for older browser please include picturefil version 2 javascript library in your document.") } }
                    ".lg-sub-html" !== this.s.appendSubHtmlTo && c.addHtml(e), c.$slide.eq(e).addClass("lg-loaded")
                }
                c.$slide.eq(e).find(".lg-object").on("load.lg error.lg", function() {
                    var n = 0;
                    i && !t("body").hasClass("lg-from-hash") && (n = i), setTimeout(function() { c.$slide.eq(e).addClass("lg-complete"), c.$el.trigger("onSlideItemLoad.lg", [e, i || 0]) }, n)
                }), m && m.html5 && !d && c.$slide.eq(e).addClass("lg-complete"), n === !0 && (c.$slide.eq(e).hasClass("lg-complete") ? c.preload(e) : c.$slide.eq(e).find(".lg-object").on("load.lg error.lg", function() { c.preload(e) }))
            }, e.prototype.slide = function(e, n, i, r) {
                var o = this.$outer.find(".lg-current").index(),
                    s = this;
                if (!s.lGalleryOn || o !== e) {
                    var a = this.$slide.length,
                        l = s.lGalleryOn ? this.s.speed : 0;
                    if (!s.lgBusy) {
                        if (this.s.download) {
                            var u;
                            u = s.s.dynamic ? s.s.dynamicEl[e].downloadUrl !== !1 && (s.s.dynamicEl[e].downloadUrl || s.s.dynamicEl[e].src) : "false" !== s.$items.eq(e).attr("data-download-url") && (s.$items.eq(e).attr("data-download-url") || s.$items.eq(e).attr("href") || s.$items.eq(e).attr("data-src")), u ? (t("#lg-download").attr("href", u), s.$outer.removeClass("lg-hide-download")) : s.$outer.addClass("lg-hide-download")
                        }
                        if (this.$el.trigger("onBeforeSlide.lg", [o, e, n, i]), s.lgBusy = !0, clearTimeout(s.hideBartimeout), ".lg-sub-html" === this.s.appendSubHtmlTo && setTimeout(function() { s.addHtml(e) }, l), this.arrowDisable(e), r || (e < o ? r = "prev" : e > o && (r = "next")), n) {
                            this.$slide.removeClass("lg-prev-slide lg-current lg-next-slide");
                            var c, d;
                            a > 2 ? (c = e - 1, d = e + 1, 0 === e && o === a - 1 ? (d = 0, c = a - 1) : e === a - 1 && 0 === o && (d = 0, c = a - 1)) : (c = 0, d = 1), "prev" === r ? s.$slide.eq(d).addClass("lg-next-slide") : s.$slide.eq(c).addClass("lg-prev-slide"), s.$slide.eq(e).addClass("lg-current")
                        } else s.$outer.addClass("lg-no-trans"), this.$slide.removeClass("lg-prev-slide lg-next-slide"), "prev" === r ? (this.$slide.eq(e).addClass("lg-prev-slide"), this.$slide.eq(o).addClass("lg-next-slide")) : (this.$slide.eq(e).addClass("lg-next-slide"), this.$slide.eq(o).addClass("lg-prev-slide")), setTimeout(function() { s.$slide.removeClass("lg-current"), s.$slide.eq(e).addClass("lg-current"), s.$outer.removeClass("lg-no-trans") }, 50);
                        s.lGalleryOn ? (setTimeout(function() { s.loadContent(e, !0, 0) }, this.s.speed + 50), setTimeout(function() { s.lgBusy = !1, s.$el.trigger("onAfterSlide.lg", [o, e, n, i]) }, this.s.speed)) : (s.loadContent(e, !0, s.s.backdropDuration), s.lgBusy = !1, s.$el.trigger("onAfterSlide.lg", [o, e, n, i])), s.lGalleryOn = !0, this.s.counter && t("#lg-counter-current").text(e + 1)
                    }
                    s.index = e
                }
            }, e.prototype.goToNextSlide = function(t) {
                var e = this,
                    n = e.s.loop;
                t && e.$slide.length < 3 && (n = !1), e.lgBusy || (e.index + 1 < e.$slide.length ? (e.index++, e.$el.trigger("onBeforeNextSlide.lg", [e.index]), e.slide(e.index, t, !1, "next")) : n ? (e.index = 0, e.$el.trigger("onBeforeNextSlide.lg", [e.index]), e.slide(e.index, t, !1, "next")) : e.s.slideEndAnimatoin && !t && (e.$outer.addClass("lg-right-end"), setTimeout(function() { e.$outer.removeClass("lg-right-end") }, 400)))
            }, e.prototype.goToPrevSlide = function(t) {
                var e = this,
                    n = e.s.loop;
                t && e.$slide.length < 3 && (n = !1), e.lgBusy || (e.index > 0 ? (e.index--, e.$el.trigger("onBeforePrevSlide.lg", [e.index, t]), e.slide(e.index, t, !1, "prev")) : n ? (e.index = e.$items.length - 1, e.$el.trigger("onBeforePrevSlide.lg", [e.index, t]), e.slide(e.index, t, !1, "prev")) : e.s.slideEndAnimatoin && !t && (e.$outer.addClass("lg-left-end"), setTimeout(function() { e.$outer.removeClass("lg-left-end") }, 400)))
            }, e.prototype.keyPress = function() {
                var e = this;
                this.$items.length > 1 && t(window).on("keyup.lg", function(t) { e.$items.length > 1 && (37 === t.keyCode && (t.preventDefault(), e.goToPrevSlide()), 39 === t.keyCode && (t.preventDefault(), e.goToNextSlide())) }), t(window).on("keydown.lg", function(t) { e.s.escKey === !0 && 27 === t.keyCode && (t.preventDefault(), e.$outer.hasClass("lg-thumb-open") ? e.$outer.removeClass("lg-thumb-open") : e.destroy()) })
            }, e.prototype.arrow = function() {
                var t = this;
                this.$outer.find(".lg-prev").on("click.lg", function() { t.goToPrevSlide() }), this.$outer.find(".lg-next").on("click.lg", function() { t.goToNextSlide() })
            }, e.prototype.arrowDisable = function(t) {!this.s.loop && this.s.hideControlOnEnd && (t + 1 < this.$slide.length ? this.$outer.find(".lg-next").removeAttr("disabled").removeClass("disabled") : this.$outer.find(".lg-next").attr("disabled", "disabled").addClass("disabled"), t > 0 ? this.$outer.find(".lg-prev").removeAttr("disabled").removeClass("disabled") : this.$outer.find(".lg-prev").attr("disabled", "disabled").addClass("disabled")) }, e.prototype.setTranslate = function(t, e, n) { this.s.useLeft ? t.css("left", e) : t.css({ transform: "translate3d(" + e + "px, " + n + "px, 0px)" }) }, e.prototype.touchMove = function(e, n) {
                var i = n - e;
                Math.abs(i) > 15 && (this.$outer.addClass("lg-dragging"), this.setTranslate(this.$slide.eq(this.index), i, 0), this.setTranslate(t(".lg-prev-slide"), -this.$slide.eq(this.index).width() + i, 0), this.setTranslate(t(".lg-next-slide"), this.$slide.eq(this.index).width() + i, 0))
            }, e.prototype.touchEnd = function(t) { var e = this; "lg-slide" !== e.s.mode && e.$outer.addClass("lg-slide"), this.$slide.not(".lg-current, .lg-prev-slide, .lg-next-slide").css("opacity", "0"), setTimeout(function() { e.$outer.removeClass("lg-dragging"), t < 0 && Math.abs(t) > e.s.swipeThreshold ? e.goToNextSlide(!0) : t > 0 && Math.abs(t) > e.s.swipeThreshold ? e.goToPrevSlide(!0) : Math.abs(t) < 5 && e.$el.trigger("onSlideClick.lg"), e.$slide.removeAttr("style") }), setTimeout(function() { e.$outer.hasClass("lg-dragging") || "lg-slide" === e.s.mode || e.$outer.removeClass("lg-slide") }, e.s.speed + 100) }, e.prototype.enableSwipe = function() {
                var t = this,
                    e = 0,
                    n = 0,
                    i = !1;
                t.s.enableSwipe && t.doCss() && (t.$slide.on("touchstart.lg", function(n) { t.$outer.hasClass("lg-zoomed") || t.lgBusy || (n.preventDefault(), t.manageSwipeClass(), e = n.originalEvent.targetTouches[0].pageX) }), t.$slide.on("touchmove.lg", function(r) { t.$outer.hasClass("lg-zoomed") || (r.preventDefault(), n = r.originalEvent.targetTouches[0].pageX, t.touchMove(e, n), i = !0) }), t.$slide.on("touchend.lg", function() { t.$outer.hasClass("lg-zoomed") || (i ? (i = !1, t.touchEnd(n - e)) : t.$el.trigger("onSlideClick.lg")) }))
            }, e.prototype.enableDrag = function() {
                var e = this,
                    n = 0,
                    i = 0,
                    r = !1,
                    o = !1;
                e.s.enableDrag && e.doCss() && (e.$slide.on("mousedown.lg", function(i) { e.$outer.hasClass("lg-zoomed") || e.lgBusy || t(i.target).text().trim() || (i.preventDefault(), e.manageSwipeClass(), n = i.pageX, r = !0, e.$outer.scrollLeft += 1, e.$outer.scrollLeft -= 1, e.$outer.removeClass("lg-grab").addClass("lg-grabbing"), e.$el.trigger("onDragstart.lg")) }), t(window).on("mousemove.lg", function(t) { r && (o = !0, i = t.pageX, e.touchMove(n, i), e.$el.trigger("onDragmove.lg")) }), t(window).on("mouseup.lg", function(s) {
                    o ? (o = !1, e.touchEnd(i - n), e.$el.trigger("onDragend.lg")) : (t(s.target).hasClass("lg-object") || t(s.target).hasClass("lg-video-play")) && e.$el.trigger("onSlideClick.lg"), r && (r = !1, e.$outer.removeClass("lg-grabbing").addClass("lg-grab"))
                }))
            }, e.prototype.manageSwipeClass = function() {
                var t = this.index + 1,
                    e = this.index - 1;
                this.s.loop && this.$slide.length > 2 && (0 === this.index ? e = this.$slide.length - 1 : this.index === this.$slide.length - 1 && (t = 0)), this.$slide.removeClass("lg-next-slide lg-prev-slide"), e > -1 && this.$slide.eq(e).addClass("lg-prev-slide"), this.$slide.eq(t).addClass("lg-next-slide")
            }, e.prototype.mousewheel = function() {
                var t = this;
                t.$outer.on("mousewheel.lg", function(e) { e.deltaY && (e.deltaY > 0 ? t.goToPrevSlide() : t.goToNextSlide(), e.preventDefault()) })
            }, e.prototype.closeGallery = function() {
                var e = this,
                    n = !1;
                this.$outer.find(".lg-close").on("click.lg", function() { e.destroy() }), e.s.closable && (e.$outer.on("mousedown.lg", function(e) { n = !!(t(e.target).is(".lg-outer") || t(e.target).is(".lg-item ") || t(e.target).is(".lg-img-wrap")) }), e.$outer.on("mousemove.lg", function() { n = !1 }), e.$outer.on("mouseup.lg", function(i) {
                    (t(i.target).is(".lg-outer") || t(i.target).is(".lg-item ") || t(i.target).is(".lg-img-wrap") && n) && (e.$outer.hasClass("lg-dragging") || e.destroy())
                }))
            }, e.prototype.destroy = function(e) {
                var n = this;
                e || (n.$el.trigger("onBeforeClose.lg"), t(window).scrollTop(n.prevScrollTop)), e && (n.s.dynamic || this.$items.off("click.lg click.lgcustom"), t.removeData(n.el, "lightGallery")), this.$el.off(".lg.tm"), t.each(t.fn.lightGallery.modules, function(t) { n.modules[t] && n.modules[t].destroy() }), this.lGalleryOn = !1, clearTimeout(n.hideBartimeout), this.hideBartimeout = !1, t(window).off(".lg"), t("body").removeClass("lg-on lg-from-hash"), n.$outer && n.$outer.removeClass("lg-visible"), t(".lg-backdrop").removeClass("in"), setTimeout(function() { n.$outer && n.$outer.remove(), t(".lg-backdrop").remove(), e || n.$el.trigger("onCloseAfter.lg") }, n.s.backdropDuration + 50)
            }, t.fn.lightGallery = function(n) { return this.each(function() { if (t.data(this, "lightGallery")) try { t(this).data("lightGallery").init() } catch (i) { console.error("lightGallery has not initiated properly") } else t.data(this, "lightGallery", new e(this, n)) }) }, t.fn.lightGallery.modules = {}
        }()
    })
}, function(t, e, n) {
    n(24),
        function() {
            "use strict";
            $(".sticky").length && $(".sticky").Stickyfill()
        }()
}, function(t, e) {
    ! function(t, e) {
        function n() { T = I = E = x = k = O = H }

        function i(t, e) { for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]) }

        function r(t) { return parseFloat(t) || 0 }

        function o() { P = { top: e.pageYOffset, left: e.pageXOffset } }

        function s() { return e.pageXOffset != P.left ? (o(), void E()) : void(e.pageYOffset != P.top && (o(), l())) }

        function a(t) { setTimeout(function() { e.pageYOffset != P.top && (P.top = e.pageYOffset, l()) }, 0) }

        function l() { for (var t = L.length - 1; t >= 0; t--) u(L[t]) }

        function u(t) {
            if (t.inited) {
                var e = P.top <= t.limit.start ? 0 : P.top >= t.limit.end ? 2 : 1;
                t.mode != e && g(t, e)
            }
        }

        function c() {
            for (var t = L.length - 1; t >= 0; t--)
                if (L[t].inited) {
                    var e = Math.abs(b(L[t].clone) - L[t].docOffsetTop),
                        n = Math.abs(L[t].parent.node.offsetHeight - L[t].parent.height);
                    if (e >= 2 || n >= 2) return !1
                }
            return !0
        }

        function d(t) { isNaN(parseFloat(t.computed.top)) || t.isCell || "none" == t.computed.display || (t.inited = !0, t.clone || m(t), "absolute" != t.parent.computed.position && "relative" != t.parent.computed.position && (t.parent.node.style.position = "relative"), u(t), t.parent.height = t.parent.node.offsetHeight, t.docOffsetTop = b(t.clone)) }

        function f(t) {
            var e = !0;
            t.clone && v(t), i(t.node.style, t.css);
            for (var n = L.length - 1; n >= 0; n--)
                if (L[n].node !== t.node && L[n].parent.node === t.parent.node) { e = !1; break }
            e && (t.parent.node.style.position = t.parent.css.position), t.mode = -1
        }

        function h() { for (var t = L.length - 1; t >= 0; t--) d(L[t]) }

        function p() { for (var t = L.length - 1; t >= 0; t--) f(L[t]) }

        function g(t, e) {
            var n = t.node.style;
            switch (e) {
                case 0:
                    n.position = "absolute", n.left = t.offset.left + "px", n.right = t.offset.right + "px", n.top = t.offset.top + "px", n.bottom = "auto", n.width = "auto", n.marginLeft = 0, n.marginRight = 0, n.marginTop = 0;
                    break;
                case 1:
                    n.position = "fixed", n.left = t.box.left + "px", n.right = t.box.right + "px", n.top = t.css.top, n.bottom = "auto", n.width = "auto", n.marginLeft = 0, n.marginRight = 0, n.marginTop = 0;
                    break;
                case 2:
                    n.position = "absolute", n.left = t.offset.left + "px", n.right = t.offset.right + "px", n.top = "auto", n.bottom = 0, n.width = "auto", n.marginLeft = 0, n.marginRight = 0
            }
            t.mode = e
        }

        function m(t) {
            t.clone = document.createElement("div");
            var e = t.node.nextSibling || t.node,
                n = t.clone.style;
            n.height = t.height + "px", n.width = t.width + "px", n.marginTop = t.computed.marginTop, n.marginBottom = t.computed.marginBottom, n.marginLeft = t.computed.marginLeft, n.marginRight = t.computed.marginRight, n.padding = n.border = n.borderSpacing = 0, n.fontSize = "1em", n.position = "static", n.cssFloat = t.computed.cssFloat, t.node.parentNode.insertBefore(t.clone, e)
        }

        function v(t) { t.clone.parentNode.removeChild(t.clone), t.clone = void 0 }

        function y(t) {
            var e = getComputedStyle(t),
                n = t.parentNode,
                i = getComputedStyle(n),
                o = t.style.position;
            t.style.position = "relative";
            var s = { top: e.top, marginTop: e.marginTop, marginBottom: e.marginBottom, marginLeft: e.marginLeft, marginRight: e.marginRight, cssFloat: e.cssFloat, display: e.display },
                a = { top: r(e.top), marginBottom: r(e.marginBottom), paddingLeft: r(e.paddingLeft), paddingRight: r(e.paddingRight), borderLeftWidth: r(e.borderLeftWidth), borderRightWidth: r(e.borderRightWidth) };
            t.style.position = o;
            var l = { position: t.style.position, top: t.style.top, bottom: t.style.bottom, left: t.style.left, right: t.style.right, width: t.style.width, marginTop: t.style.marginTop, marginLeft: t.style.marginLeft, marginRight: t.style.marginRight },
                u = w(t),
                c = w(n),
                d = { node: n, css: { position: n.style.position }, computed: { position: i.position }, numeric: { borderLeftWidth: r(i.borderLeftWidth), borderRightWidth: r(i.borderRightWidth), borderTopWidth: r(i.borderTopWidth), borderBottomWidth: r(i.borderBottomWidth) } },
                f = { node: t, box: { left: u.win.left, right: $.clientWidth - u.win.right }, offset: { top: u.win.top - c.win.top - d.numeric.borderTopWidth, left: u.win.left - c.win.left - d.numeric.borderLeftWidth, right: -u.win.right + c.win.right - d.numeric.borderRightWidth }, css: l, isCell: "table-cell" == e.display, computed: s, numeric: a, width: u.win.right - u.win.left, height: u.win.bottom - u.win.top, mode: -1, inited: !1, parent: d, limit: { start: u.doc.top - a.top, end: c.doc.top + n.offsetHeight - d.numeric.borderBottomWidth - t.offsetHeight - a.top - a.marginBottom } };
            return f
        }

        function b(t) { for (var e = 0; t;) e += t.offsetTop, t = t.offsetParent; return e }

        function w(t) { var n = t.getBoundingClientRect(); return { doc: { top: n.top + e.pageYOffset, left: n.left + e.pageXOffset }, win: n } }

        function S() { D = setInterval(function() {!c() && E() }, 500) }

        function _() { clearInterval(D) }

        function C() { N && (document[M] ? _() : S()) }

        function T() { N || (o(), h(), e.addEventListener("scroll", s), e.addEventListener("wheel", a), e.addEventListener("resize", E), e.addEventListener("orientationchange", E), t.addEventListener(j, C), S(), N = !0) }

        function E() {
            if (N) {
                p();
                for (var t = L.length - 1; t >= 0; t--) L[t] = y(L[t].node);
                h()
            }
        }

        function x() { e.removeEventListener("scroll", s), e.removeEventListener("wheel", a), e.removeEventListener("resize", E), e.removeEventListener("orientationchange", E), t.removeEventListener(j, C), _(), N = !1 }

        function k() { x(), p() }

        function O() { for (k(); L.length;) L.pop() }

        function I(t) {
            for (var e = L.length - 1; e >= 0; e--)
                if (L[e].node === t) return;
            var n = y(t);
            L.push(n), N ? d(n) : T()
        }

        function A(t) { for (var e = L.length - 1; e >= 0; e--) L[e].node === t && (f(L[e]), L.splice(e, 1)) }
        var P, D, L = [],
            N = !1,
            $ = t.documentElement,
            H = function() {},
            M = "hidden",
            j = "visibilitychange";
        void 0 !== t.webkitHidden && (M = "webkitHidden", j = "webkitvisibilitychange"), e.getComputedStyle || n();
        for (var W = ["", "-webkit-", "-moz-", "-ms-"], R = document.createElement("div"), B = W.length - 1; B >= 0; B--) { try { R.style.position = W[B] + "sticky" } catch (z) {} "" != R.style.position && n() }
        o(), e.Stickyfill = { stickies: L, add: I, remove: A, init: T, rebuild: E, pause: x, stop: k, kill: O }
    }(document, window), window.jQuery && ! function(t) { t.fn.Stickyfill = function(t) { return this.each(function() { Stickyfill.add(this) }), this } }(window.jQuery)
}, function(t, e, n) {
    var i = window.WaveSurfer = n(4),
        r = n(1);
    $("#waveform").length > 0 && document.addEventListener("DOMContentLoaded", function() { wavesurfer = i.create({ container: "#waveform", backend: "MediaElement", waveColor: $("body").hasClass("theme-dark") ? "#243049" : "#ecf0f5", progressColor: "#ff1744", height: 50, responsive: !1, barWidth: 3, normalize: !0 }) }), document.addEventListener("DOMContentLoaded", function() {
        if ($("#playPause").length > 0) {
            var t = document.querySelector("#playPause");
            t.addEventListener("click", function() { wavesurfer.playPause() }), wavesurfer.on("play", function() { document.querySelector("#play").style.display = "none", document.querySelector("#pause").style.display = "", $("#playlist a.active i").removeClass("icon-play").addClass("icon-pause") }), wavesurfer.on("pause", function() { document.querySelector("#play").style.display = "", document.querySelector("#pause").style.display = "none", $("#playlist a.active i").removeClass("icon-pause").addClass("icon-play") })
        }
        if ($(".playlist").length > 0) {
            var e = document.querySelectorAll(".playlist .media-url"),
                n = 0;
            nextTrackSelector = $("#nextTrack"), prevTrackSelector = $("#previousTrack");
            var i = function(t) { 0 === t ? prevTrackSelector.addClass("disabled") : prevTrackSelector.removeClass("disabled"), t === e.length ? nextTrackSelector.addClass("disabled") : nextTrackSelector.removeClass("disabled") },
                o = function() { $(".playlist .media-url i").removeClass("icon-pause").addClass("icon-play"), n <= e.length && a((n + 1) % e.length) },
                s = function() { $(".playlist .media-url i").removeClass("icon-pause").addClass("icon-play"), n > 0 && a((n - 1) % e.length) };
            nextTrackSelector.on("click", function(t) { t.preventDefault(), o() }), prevTrackSelector.on("click", function(t) { t.preventDefault(), s() });
            var a = window.setCurrentSong = function(t) {
                i(t), e[n].classList.remove("active"), n = t, e[n].classList.add("active");
                var r = e[n].dataset.wave;
                void 0 !== r ? $.getJSON(r, function(t) { wavesurfer.load(e[n].href, t.data) }) : wavesurfer.load(e[n].href), window.media = e[n].href, $(".playlist a.active i").toggleClass("icon-pause"), window.currentTrack = n
            };
            Array.prototype.forEach.call(e, function(t, e) { t.addEventListener("click", function(t) { t.preventDefault(), n == e ? ($(t.target).toggleClass("icon-pause"), wavesurfer.playPause()) : ($(".playlist .media-url i").removeClass("icon-pause").addClass("icon-play"), a(e), $(t.target + " i").toggleClass("icon-pause")) }) }), wavesurfer.on("ready", function() { $("#mediaPlayer").data("auto") && wavesurfer.play() }), wavesurfer.on("finish", function() { o() }), a(n), wavesurfer.on("audioprocess", function() { $(".track-time").text(l(wavesurfer.getCurrentTime())) });
            var l = function(t) { return [Math.floor(t % 3600 / 60), ("00" + Math.floor(t % 60)).slice(-2)].join(":") };
            wavesurfer.on("loading", function(t, e) { r.start(), t >= 100 && r.done() })
        }
    })
}, function(t, e, n) {
    n(5), jQuery(function(t) {
        "use strict";
        i()
    });
    var i = window.slimScroll = function() {
        var t = $(".slimScroll"),
            e = 0;
        t.length && t.each(function() {
            var t = $(this),
                n = t.data();
            t.slimscroll({ height: n.height ? n.height + "px" : $(window).height() - e + "px", color: n.color ? n.color : "rgba(0,0,0,0.95)", size: n.size ? n.size + "px" : "5px", alwaysVisible: n.visible, railOpacity: n.opacity })
        })
    }
}, function(t, e, n) {
    n(28);
    var i = window.countDown = function() {
        var t = $(".countDown");
        t.each(function() {
            var t = $(this);
            t.each(function() {
                function t(t) {
                    var e = $(this);
                    $.each(t.offset, function(t, n) { e.find("div span." + t).html(n) })
                }
                var e = $(this),
                    n = e.data("date");
                new Date(n);
                e.countdown(n.valueOf(), t)
            })
        })
    };
    ! function() {
        "use strict";
        i()
    }()
}, function(t, e, n) {
    var i, r, o;
    ! function(s) {
        "use strict";
        r = [n(0)], i = s, o = "function" == typeof i ? i.apply(e, r) : i, !(void 0 !== o && (t.exports = o))
    }(function(t) {
        "use strict";

        function e(t) { if (t instanceof Date) return t; if (String(t).match(s)) return String(t).match(/^[0-9]*$/) && (t = Number(t)), String(t).match(/\-/) && (t = String(t).replace(/\-/g, "/")), new Date(t); throw new Error("Couldn't cast `" + t + "` to a date object.") }

        function n(t) { var e = t.toString().replace(/([.?*+^$[\]\\(){}|-])/g, "\\$1"); return new RegExp(e) }

        function i(t) {
            return function(e) {
                var i = e.match(/%(-|!)?[A-Z]{1}(:[^;]+;)?/gi);
                if (i)
                    for (var o = 0, s = i.length; o < s; ++o) {
                        var a = i[o].match(/%(-|!)?([a-zA-Z]{1})(:[^;]+;)?/),
                            u = n(a[0]),
                            c = a[1] || "",
                            d = a[3] || "",
                            f = null;
                        a = a[2], l.hasOwnProperty(a) && (f = l[a], f = Number(t[f])), null !== f && ("!" === c && (f = r(d, f)), "" === c && f < 10 && (f = "0" + f.toString()), e = e.replace(u, f.toString()))
                    }
                return e = e.replace(/%%/, "%")
            }
        }

        function r(t, e) {
            var n = "s",
                i = "";
            return t && (t = t.replace(/(:|;|\s)/gi, "").split(/\,/), 1 === t.length ? n = t[0] : (i = t[0], n = t[1])), Math.abs(e) > 1 ? n : i
        }
        var o = [],
            s = [],
            a = { precision: 100, elapse: !1, defer: !1 };
        s.push(/^[0-9]*$/.source), s.push(/([0-9]{1,2}\/){2}[0-9]{4}( [0-9]{1,2}(:[0-9]{2}){2})?/.source), s.push(/[0-9]{4}([\/\-][0-9]{1,2}){2}( [0-9]{1,2}(:[0-9]{2}){2})?/.source), s = new RegExp(s.join("|"));
        var l = { Y: "years", m: "months", n: "daysToMonth", d: "daysToWeek", w: "weeks", W: "weeksToMonth", H: "hours", M: "minutes", S: "seconds", D: "totalDays", I: "totalHours", N: "totalMinutes", T: "totalSeconds" },
            u = function(e, n, i) { this.el = e, this.$el = t(e), this.interval = null, this.offset = {}, this.options = t.extend({}, a), this.instanceNumber = o.length, o.push(this), this.$el.data("countdown-instance", this.instanceNumber), i && ("function" == typeof i ? (this.$el.on("update.countdown", i), this.$el.on("stoped.countdown", i), this.$el.on("finish.countdown", i)) : this.options = t.extend({}, a, i)), this.setFinalDate(n), this.options.defer === !1 && this.start() };
        t.extend(u.prototype, {
            start: function() {
                null !== this.interval && clearInterval(this.interval);
                var t = this;
                this.update(), this.interval = setInterval(function() { t.update.call(t) }, this.options.precision)
            },
            stop: function() { clearInterval(this.interval), this.interval = null, this.dispatchEvent("stoped") },
            toggle: function() { this.interval ? this.stop() : this.start() },
            pause: function() { this.stop() },
            resume: function() { this.start() },
            remove: function() { this.stop.call(this), o[this.instanceNumber] = null, delete this.$el.data().countdownInstance },
            setFinalDate: function(t) { this.finalDate = e(t) },
            update: function() {
                if (0 === this.$el.closest("html").length) return void this.remove();
                var e, n = void 0 !== t._data(this.el, "events"),
                    i = new Date;
                e = this.finalDate.getTime() - i.getTime(), e = Math.ceil(e / 1e3), e = !this.options.elapse && e < 0 ? 0 : Math.abs(e), this.totalSecsLeft !== e && n && (this.totalSecsLeft = e, this.elapsed = i >= this.finalDate, this.offset = { seconds: this.totalSecsLeft % 60, minutes: Math.floor(this.totalSecsLeft / 60) % 60, hours: Math.floor(this.totalSecsLeft / 60 / 60) % 24, days: Math.floor(this.totalSecsLeft / 60 / 60 / 24) % 7, daysToWeek: Math.floor(this.totalSecsLeft / 60 / 60 / 24) % 7, daysToMonth: Math.floor(this.totalSecsLeft / 60 / 60 / 24 % 30.4368), weeks: Math.floor(this.totalSecsLeft / 60 / 60 / 24 / 7), weeksToMonth: Math.floor(this.totalSecsLeft / 60 / 60 / 24 / 7) % 4, months: Math.floor(this.totalSecsLeft / 60 / 60 / 24 / 30.4368), years: Math.abs(this.finalDate.getFullYear() - i.getFullYear()), totalDays: Math.floor(this.totalSecsLeft / 60 / 60 / 24), totalHours: Math.floor(this.totalSecsLeft / 60 / 60), totalMinutes: Math.floor(this.totalSecsLeft / 60), totalSeconds: this.totalSecsLeft }, this.options.elapse || 0 !== this.totalSecsLeft ? this.dispatchEvent("update") : (this.stop(), this.dispatchEvent("finish")))
            },
            dispatchEvent: function(e) {
                var n = t.Event(e + ".countdown");
                n.finalDate = this.finalDate, n.elapsed = this.elapsed, n.offset = t.extend({}, this.offset), n.strftime = i(this.offset), this.$el.trigger(n)
            }
        }), t.fn.countdown = function() {
            var e = Array.prototype.slice.call(arguments, 0);
            return this.each(function() {
                var n = t(this).data("countdown-instance");
                if (void 0 !== n) {
                    var i = o[n],
                        r = e[0];
                    u.prototype.hasOwnProperty(r) ? i[r].apply(i, e.slice(1)) : null === String(r).match(/^[$A-Z_][0-9A-Z_$]*$/i) ? (i.setFinalDate.call(i, r), i.start()) : t.error("Method %s does not exist on jQuery.countdown".replace(/\%s/gi, r))
                } else new u(this, e[0], e[1])
            })
        }
    })
}, function(t, e) {
    function n(t, e, n, i, r) {
        var o = [{ featureType: "all", stylers: [{ saturation: -100 }] }, { featureType: "road.arterial", elementType: "geometry", stylers: [{ hue: "#131722" }, { saturation: 50 }] }, { featureType: "poi.business", elementType: "labels", stylers: [{ visibility: "off" }] }],
            s = new google.maps.Map(document.getElementById(t), { styles: o, scrollwheel: !1, draggable: !1, zoom: i, mapTypeControl: !1 }),
            a = "assets/img/basic/pin.png";
        r && (a = r);
        var l = new google.maps.Geocoder;
        l.geocode({ address: e }, function(t, e) { e === google.maps.GeocoderStatus.OK && (new google.maps.Marker({ position: t[0].geometry.location, map: s, icon: a }), s.setCenter(t[0].geometry.location)) })
    }
    jQuery(function(t) {
        "use strict";
        i()
    });
    var i = window.mapInit = function() {
        var t = $(".g-map");
        t.length && t.each(function(t, e) {
            var i = $(this).data("id"),
                r = $(this).data("address"),
                o = $(this).data("maptype"),
                s = $(this).data("zoomlvl"),
                a = $(this).data("mapPin");
            $(this).attr("id", i), n(i, r, o, s, a)
        })
    }
}, function(t, e) {
    jQuery(function(t) {
        "use strict";

        function e(t, e, s, a, l) {
            switch (a) {
                case "tobottomright":
                    n = "linear", i = "to bottom right", r = "top left", o = "left top, right bottom";
                    break;
                case "tobottom":
                    n = "linear", i = "to bottom", r = "top", o = "left top, left bottom";
                    break;
                case "tobottomleft":
                    n = "linear", i = "to bottom left", r = "top right", o = "right top, left bottom";
                    break;
                case "toright":
                    n = "linear", i = "to right", r = "left", o = "left top, right top";
                    break;
                case "toleft":
                    n = "linear", i = "to left", r = "right", o = "right top, left top";
                    break;
                case "totopright":
                    n = "linear", i = "to top right", r = "bottom left", o = "left bottom, right top";
                    break;
                case "totop":
                    n = "linear", i = "to top", r = "bottom", o = "left bottom, left top";
                    break;
                case "totopleft":
                    n = "linear", i = "to top left", r = "bottom right", o = "right bottom, left top";
                    break;
                case "circulartopleft":
                    n = "radial", i = "circle farthest-side at left top", r = "left top, circle farthest-side", o = "left top, 0, left top, 973";
                    break;
                case "circulartopcenter":
                    n = "radial", i = "circle farthest-side at center top", r = "center top, circle farthest-side", o = "center top, 0, center top, 487";
                    break;
                case "circulartopright":
                    n = "radial", i = "circle farthest-side at right top", r = "right top, circle farthest-side", o = "right top, 0, right top, 973";
                    break;
                case "circularmiddleleft":
                    n = "radial", i = "circle farthest-side at left center", r = "left center, circle farthest-side", o = "left center, 0, left center, 973";
                    break;
                case "circularmiddlecenter":
                    n = "radial", i = "circle farthest-side at center", r = "center, circle farthest-side", o = "center center, 0, center center, 487";
                    break;
                case "circularmiddleright":
                    n = "radial", i = "circle farthest-side at right center", r = "right center, circle farthest-side", o = "right center, 0, right center";
                    break;
                case "circularbottomleft":
                    n = "radial", i = "circle farthest-side at left bottom", r = "left bottom, circle farthest-side", o = "left bottom, 0, left bottom, 973";
                    break;
                case "circularbottomcenter":
                    n = "radial", i = "circle farthest-side at center bottom", r = "center bottom, circle farthest-side", o = "center bottom, 0, center bottom, 487";
                    break;
                case "circularbottomright":
                    n = "radial", i = "circle farthest-side at right bottom", r = "right bottom, circle farthest-side", o = "right bottom, 0, right bottom, 973";
                    break;
                case "ellipsetopleft":
                    n = "radial", i = "ellipse farthest-side at left top", r = "left top, ellipse farthest-side", o = "left top, 0, left top, 973";
                    break;
                case "ellipsetopcenter":
                    n = "radial", i = "ellipse farthest-side at center top", r = "center top, ellipse farthest-side", o = "center top, 0, center top, 487";
                    break;
                case "ellipsetopright":
                    n = "radial", i = "ellipse farthest-side at right top", r = "right top, ellipse farthest-side", o = "right top, 0, right top, 973";
                    break;
                case "ellipsemiddleleft":
                    n = "radial", i = "ellipse farthest-side at left center", r = "left center, ellipse farthest-side", o = "left center, 0, left center, 973";
                    break;
                case "ellipsemiddlecenter":
                    n = "radial", i = "ellipse farthest-side at center", r = "center, ellipse farthest-side", o = "center center, 0, center center, 487";
                    break;
                case "ellipsemiddleright":
                    n = "radial", i = "ellipse farthest-side at right center", r = "right center, ellipse farthest-side", o = "right center, 0, right center";
                    break;
                case "ellipsebottomleft":
                    n = "radial", i = "ellipse farthest-side at left bottom", r = "left bottom, ellipse farthest-side", o = "left bottom, 0, left bottom, 973";
                    break;
                case "ellipsebottomcenter":
                    n = "radial", i = "ellipse farthest-side at center bottom", r = "center bottom, ellipse farthest-side", o = "center bottom, 0, center bottom, 487";
                    break;
                case "ellipsebottomright":
                    n = "radial", i = "ellipse farthest-side at right bottom", r = "right bottom, ellipse farthest-side", o = "right bottom, 0, right bottom, 973";
                    break;
                default:
                    n = "linear", i = "to right", r = "left", o = "left top, right top"
            }
            s ? (jQuery(t).css({ background: e, opacity: l }), jQuery(t).css({ background: "-moz-" + n + "-gradient(" + r + ", " + e + " 0%, " + s + " 100%)", opacity: l }), jQuery(t).css({ background: "-webkit-gradient(" + n + ", " + o + ", color-stop(0, " + e + "), color-stop(1, " + s + "))", opacity: l }), jQuery(t).css({ background: "-webkit-" + n + "-gradient(" + r + ", " + e + " 0%, " + s + " 100%)", opacity: l }), jQuery(t).css({ background: "-o-" + n + "-gradient(" + r + ", " + e + " 0%, " + s + " 100%)", opacity: l }), jQuery(t).css({ background: "-ms-" + n + "-gradient(" + r + ", " + e + " 0%, " + s + " 100%)", opacity: l }), jQuery(t).css({ background: "" + n + "-gradient(" + i + ", " + e + " 0%, " + s + " 100%)", opacity: l }), jQuery(t).css({ background: "filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='" + e + "', endColorstr='" + s + "',GradientType=1 )", opacity: l })) : jQuery(t).css({ background: e, opacity: l })
        }
        var n, i, r, o, s = ".overlay",
            a = t(s);
        a.each(function() {
            var n = t(this),
                i = n.data("start"),
                r = n.data("end"),
                o = n.data("orientation"),
                s = n.data("opacity");
            e(n, i, r, o, s)
        })
    })
}, function(t, e, n) {
    n(32), jQuery(function(t) {
        "use strict";
        t(".parallax").stellar({ horizontalScrolling: !1, verticalOffset: 40, responsive: !0 })
    })
}, function(t, e) {
    ! function(t, e, n, i) {
        function r(e, n) { this.element = e, this.options = t.extend({}, s, n), this._defaults = s, this._name = o, this.init() }
        var o = "stellar",
            s = { scrollProperty: "scroll", positionProperty: "position", horizontalScrolling: !0, verticalScrolling: !0, horizontalOffset: 0, verticalOffset: 0, responsive: !1, parallaxBackgrounds: !0, parallaxElements: !0, hideDistantElements: !0, hideElement: function(t) { t.hide() }, showElement: function(t) { t.show() } },
            a = { scroll: { getLeft: function(t) { return t.scrollLeft() }, setLeft: function(t, e) { t.scrollLeft(e) }, getTop: function(t) { return t.scrollTop() }, setTop: function(t, e) { t.scrollTop(e) } }, position: { getLeft: function(t) { return -1 * parseInt(t.css("left"), 10) }, getTop: function(t) { return -1 * parseInt(t.css("top"), 10) } }, margin: { getLeft: function(t) { return -1 * parseInt(t.css("margin-left"), 10) }, getTop: function(t) { return -1 * parseInt(t.css("margin-top"), 10) } }, transform: { getLeft: function(t) { var e = getComputedStyle(t[0])[c]; return "none" !== e ? -1 * parseInt(e.match(/(-?[0-9]+)/g)[4], 10) : 0 }, getTop: function(t) { var e = getComputedStyle(t[0])[c]; return "none" !== e ? -1 * parseInt(e.match(/(-?[0-9]+)/g)[5], 10) : 0 } } },
            l = { position: { setLeft: function(t, e) { t.css("left", e) }, setTop: function(t, e) { t.css("top", e) } }, transform: { setPosition: function(t, e, n, i, r) { t[0].style[c] = "translate3d(" + (e - n) + "px, " + (i - r) + "px, 0)" } } },
            u = function() {
                var e, n = /^(Moz|Webkit|Khtml|O|ms|Icab)(?=[A-Z])/,
                    i = t("script")[0].style,
                    r = "";
                for (e in i)
                    if (n.test(e)) { r = e.match(n)[0]; break }
                return "WebkitOpacity" in i && (r = "Webkit"), "KhtmlOpacity" in i && (r = "Khtml"),
                    function(t) { return r + (r.length > 0 ? t.charAt(0).toUpperCase() + t.slice(1) : t) }
            }(),
            c = u("transform"),
            d = t("<div />", { style: "background:#fff" }).css("background-position-x") !== i,
            f = d ? function(t, e, n) { t.css({ "background-position-x": e, "background-position-y": n }) } : function(t, e, n) { t.css("background-position", e + " " + n) },
            h = d ? function(t) { return [t.css("background-position-x"), t.css("background-position-y")] } : function(t) { return t.css("background-position").split(" ") },
            p = e.requestAnimationFrame || e.webkitRequestAnimationFrame || e.mozRequestAnimationFrame || e.oRequestAnimationFrame || e.msRequestAnimationFrame || function(t) { setTimeout(t, 1e3 / 60) };
        r.prototype = {
            init: function() { this.options.name = o + "_" + Math.floor(1e9 * Math.random()), this._defineElements(), this._defineGetters(), this._defineSetters(), this._handleWindowLoadAndResize(), this._detectViewport(), this.refresh({ firstLoad: !0 }), "scroll" === this.options.scrollProperty ? this._handleScrollEvent() : this._startAnimationLoop() },
            _defineElements: function() { this.element === n.body && (this.element = e), this.$scrollElement = t(this.element), this.$element = this.element === e ? t("body") : this.$scrollElement, this.$viewportElement = this.options.viewportElement !== i ? t(this.options.viewportElement) : this.$scrollElement[0] === e || "scroll" === this.options.scrollProperty ? this.$scrollElement : this.$scrollElement.parent() },
            _defineGetters: function() {
                var t = this,
                    e = a[t.options.scrollProperty];
                this._getScrollLeft = function() { return e.getLeft(t.$scrollElement) }, this._getScrollTop = function() { return e.getTop(t.$scrollElement) }
            },
            _defineSetters: function() {
                var e = this,
                    n = a[e.options.scrollProperty],
                    i = l[e.options.positionProperty],
                    r = n.setLeft,
                    o = n.setTop;
                this._setScrollLeft = "function" == typeof r ? function(t) { r(e.$scrollElement, t) } : t.noop, this._setScrollTop = "function" == typeof o ? function(t) { o(e.$scrollElement, t) } : t.noop, this._setPosition = i.setPosition || function(t, n, r, o, s) { e.options.horizontalScrolling && i.setLeft(t, n, r), e.options.verticalScrolling && i.setTop(t, o, s) }
            },
            _handleWindowLoadAndResize: function() {
                var n = this,
                    i = t(e);
                n.options.responsive && i.bind("load." + this.name, function() { n.refresh() }), i.bind("resize." + this.name, function() { n._detectViewport(), n.options.responsive && n.refresh() })
            },
            refresh: function(n) {
                var i = this,
                    r = i._getScrollLeft(),
                    o = i._getScrollTop();
                n && n.firstLoad || this._reset(), this._setScrollLeft(0), this._setScrollTop(0), this._setOffsets(), this._findParticles(), this._findBackgrounds(), n && n.firstLoad && /WebKit/.test(navigator.userAgent) && t(e).load(function() {
                    var t = i._getScrollLeft(),
                        e = i._getScrollTop();
                    i._setScrollLeft(t + 1), i._setScrollTop(e + 1), i._setScrollLeft(t), i._setScrollTop(e)
                }), this._setScrollLeft(r), this._setScrollTop(o)
            },
            _detectViewport: function() {
                var t = this.$viewportElement.offset(),
                    e = null !== t && t !== i;
                this.viewportWidth = this.$viewportElement.width(), this.viewportHeight = this.$viewportElement.height(), this.viewportOffsetTop = e ? t.top : 0, this.viewportOffsetLeft = e ? t.left : 0
            },
            _findParticles: function() {
                var e = this;
                if (this._getScrollLeft(), this._getScrollTop(), this.particles !== i)
                    for (var n = this.particles.length - 1; n >= 0; n--) this.particles[n].$element.data("stellar-elementIsActive", i);
                this.particles = [], this.options.parallaxElements && this.$element.find("[data-stellar-ratio]").each(function() {
                    var n, r, o, s, a, l, u, c, d, f = t(this),
                        h = 0,
                        p = 0,
                        g = 0,
                        m = 0;
                    if (f.data("stellar-elementIsActive")) { if (f.data("stellar-elementIsActive") !== this) return } else f.data("stellar-elementIsActive", this);
                    e.options.showElement(f), f.data("stellar-startingLeft") ? (f.css("left", f.data("stellar-startingLeft")), f.css("top", f.data("stellar-startingTop"))) : (f.data("stellar-startingLeft", f.css("left")), f.data("stellar-startingTop", f.css("top"))), o = f.position().left, s = f.position().top, a = "auto" === f.css("margin-left") ? 0 : parseInt(f.css("margin-left"), 10), l = "auto" === f.css("margin-top") ? 0 : parseInt(f.css("margin-top"), 10), c = f.offset().left - a, d = f.offset().top - l, f.parents().each(function() { var e = t(this); return e.data("stellar-offset-parent") === !0 ? (h = g, p = m, u = e, !1) : (g += e.position().left, void(m += e.position().top)) }), n = f.data("stellar-horizontal-offset") !== i ? f.data("stellar-horizontal-offset") : u !== i && u.data("stellar-horizontal-offset") !== i ? u.data("stellar-horizontal-offset") : e.horizontalOffset, r = f.data("stellar-vertical-offset") !== i ? f.data("stellar-vertical-offset") : u !== i && u.data("stellar-vertical-offset") !== i ? u.data("stellar-vertical-offset") : e.verticalOffset, e.particles.push({ $element: f, $offsetParent: u, isFixed: "fixed" === f.css("position"), horizontalOffset: n, verticalOffset: r, startingPositionLeft: o, startingPositionTop: s, startingOffsetLeft: c, startingOffsetTop: d, parentOffsetLeft: h, parentOffsetTop: p, stellarRatio: f.data("stellar-ratio") !== i ? f.data("stellar-ratio") : 1, width: f.outerWidth(!0), height: f.outerHeight(!0), isHidden: !1 })
                })
            },
            _findBackgrounds: function() {
                var e, n = this,
                    r = this._getScrollLeft(),
                    o = this._getScrollTop();
                this.backgrounds = [], this.options.parallaxBackgrounds && (e = this.$element.find("[data-stellar-background-ratio]"), this.$element.data("stellar-background-ratio") && (e = e.add(this.$element)), e.each(function() {
                    var e, s, a, l, u, c, d, p = t(this),
                        g = h(p),
                        m = 0,
                        v = 0,
                        y = 0,
                        b = 0;
                    if (p.data("stellar-backgroundIsActive")) { if (p.data("stellar-backgroundIsActive") !== this) return } else p.data("stellar-backgroundIsActive", this);
                    p.data("stellar-backgroundStartingLeft") ? f(p, p.data("stellar-backgroundStartingLeft"), p.data("stellar-backgroundStartingTop")) : (p.data("stellar-backgroundStartingLeft", g[0]), p.data("stellar-backgroundStartingTop", g[1])), a = "auto" === p.css("margin-left") ? 0 : parseInt(p.css("margin-left"), 10), l = "auto" === p.css("margin-top") ? 0 : parseInt(p.css("margin-top"), 10), u = p.offset().left - a - r, c = p.offset().top - l - o, p.parents().each(function() { var e = t(this); return e.data("stellar-offset-parent") === !0 ? (m = y, v = b, d = e, !1) : (y += e.position().left, void(b += e.position().top)) }), e = p.data("stellar-horizontal-offset") !== i ? p.data("stellar-horizontal-offset") : d !== i && d.data("stellar-horizontal-offset") !== i ? d.data("stellar-horizontal-offset") : n.horizontalOffset, s = p.data("stellar-vertical-offset") !== i ? p.data("stellar-vertical-offset") : d !== i && d.data("stellar-vertical-offset") !== i ? d.data("stellar-vertical-offset") : n.verticalOffset, n.backgrounds.push({ $element: p, $offsetParent: d, isFixed: "fixed" === p.css("background-attachment"), horizontalOffset: e, verticalOffset: s, startingValueLeft: g[0], startingValueTop: g[1], startingBackgroundPositionLeft: isNaN(parseInt(g[0], 10)) ? 0 : parseInt(g[0], 10), startingBackgroundPositionTop: isNaN(parseInt(g[1], 10)) ? 0 : parseInt(g[1], 10), startingPositionLeft: p.position().left, startingPositionTop: p.position().top, startingOffsetLeft: u, startingOffsetTop: c, parentOffsetLeft: m, parentOffsetTop: v, stellarRatio: p.data("stellar-background-ratio") === i ? 1 : p.data("stellar-background-ratio") })
                }))
            },
            _reset: function() { var t, e, n, i, r; for (r = this.particles.length - 1; r >= 0; r--) t = this.particles[r], e = t.$element.data("stellar-startingLeft"), n = t.$element.data("stellar-startingTop"), this._setPosition(t.$element, e, e, n, n), this.options.showElement(t.$element), t.$element.data("stellar-startingLeft", null).data("stellar-elementIsActive", null).data("stellar-backgroundIsActive", null); for (r = this.backgrounds.length - 1; r >= 0; r--) i = this.backgrounds[r], i.$element.data("stellar-backgroundStartingLeft", null).data("stellar-backgroundStartingTop", null), f(i.$element, i.startingValueLeft, i.startingValueTop) },
            destroy: function() { this._reset(), this.$scrollElement.unbind("resize." + this.name).unbind("scroll." + this.name), this._animationLoop = t.noop, t(e).unbind("load." + this.name).unbind("resize." + this.name) },
            _setOffsets: function() {
                var n = this,
                    i = t(e);
                i.unbind("resize.horizontal-" + this.name).unbind("resize.vertical-" + this.name), "function" == typeof this.options.horizontalOffset ? (this.horizontalOffset = this.options.horizontalOffset(), i.bind("resize.horizontal-" + this.name, function() { n.horizontalOffset = n.options.horizontalOffset() })) : this.horizontalOffset = this.options.horizontalOffset, "function" == typeof this.options.verticalOffset ? (this.verticalOffset = this.options.verticalOffset(), i.bind("resize.vertical-" + this.name, function() { n.verticalOffset = n.options.verticalOffset() })) : this.verticalOffset = this.options.verticalOffset
            },
            _repositionElements: function() {
                var t, e, n, i, r, o, s, a, l, u, c = this._getScrollLeft(),
                    d = this._getScrollTop(),
                    h = !0,
                    p = !0;
                if (this.currentScrollLeft !== c || this.currentScrollTop !== d || this.currentWidth !== this.viewportWidth || this.currentHeight !== this.viewportHeight) {
                    for (this.currentScrollLeft = c, this.currentScrollTop = d, this.currentWidth = this.viewportWidth, this.currentHeight = this.viewportHeight, u = this.particles.length - 1; u >= 0; u--) t = this.particles[u], e = t.isFixed ? 1 : 0, this.options.horizontalScrolling ? (o = (c + t.horizontalOffset + this.viewportOffsetLeft + t.startingPositionLeft - t.startingOffsetLeft + t.parentOffsetLeft) * -(t.stellarRatio + e - 1) + t.startingPositionLeft, a = o - t.startingPositionLeft + t.startingOffsetLeft) : (o = t.startingPositionLeft, a = t.startingOffsetLeft), this.options.verticalScrolling ? (s = (d + t.verticalOffset + this.viewportOffsetTop + t.startingPositionTop - t.startingOffsetTop + t.parentOffsetTop) * -(t.stellarRatio + e - 1) + t.startingPositionTop, l = s - t.startingPositionTop + t.startingOffsetTop) : (s = t.startingPositionTop, l = t.startingOffsetTop), this.options.hideDistantElements && (p = !this.options.horizontalScrolling || a + t.width > (t.isFixed ? 0 : c) && a < (t.isFixed ? 0 : c) + this.viewportWidth + this.viewportOffsetLeft, h = !this.options.verticalScrolling || l + t.height > (t.isFixed ? 0 : d) && l < (t.isFixed ? 0 : d) + this.viewportHeight + this.viewportOffsetTop), p && h ? (t.isHidden && (this.options.showElement(t.$element), t.isHidden = !1), this._setPosition(t.$element, o, t.startingPositionLeft, s, t.startingPositionTop)) : t.isHidden || (this.options.hideElement(t.$element),
                        t.isHidden = !0);
                    for (u = this.backgrounds.length - 1; u >= 0; u--) n = this.backgrounds[u], e = n.isFixed ? 0 : 1, i = this.options.horizontalScrolling ? (c + n.horizontalOffset - this.viewportOffsetLeft - n.startingOffsetLeft + n.parentOffsetLeft - n.startingBackgroundPositionLeft) * (e - n.stellarRatio) + "px" : n.startingValueLeft, r = this.options.verticalScrolling ? (d + n.verticalOffset - this.viewportOffsetTop - n.startingOffsetTop + n.parentOffsetTop - n.startingBackgroundPositionTop) * (e - n.stellarRatio) + "px" : n.startingValueTop, f(n.$element, i, r)
                }
            },
            _handleScrollEvent: function() {
                var t = this,
                    e = !1,
                    n = function() { t._repositionElements(), e = !1 },
                    i = function() { e || (p(n), e = !0) };
                this.$scrollElement.bind("scroll." + this.name, i), i()
            },
            _startAnimationLoop: function() {
                var t = this;
                this._animationLoop = function() { p(t._animationLoop), t._repositionElements() }, this._animationLoop()
            }
        }, t.fn[o] = function(e) {
            var n = arguments;
            return e === i || "object" == typeof e ? this.each(function() { t.data(this, "plugin_" + o) || t.data(this, "plugin_" + o, new r(this, e)) }) : "string" == typeof e && "_" !== e[0] && "init" !== e ? this.each(function() {
                var i = t.data(this, "plugin_" + o);
                i instanceof r && "function" == typeof i[e] && i[e].apply(i, Array.prototype.slice.call(n, 1)), "destroy" === e && t.data(this, "plugin_" + o, null)
            }) : void 0
        }, t[o] = function() { var n = t(e); return n.stellar.apply(n, Array.prototype.slice.call(arguments, 0)) }, t[o].scrollProperty = a, t[o].positionProperty = l, e.Stellar = r
    }(jQuery, this, document)
}, function(t, e) {
    function n(t) { var e = /^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/; return e.test(t) }
    jQuery(function(t) {
        "use strict";
        window.addEventListener("load", function() {
            var e = document.getElementById("contactform");
            e && e.addEventListener("submit", function(n) { 0 == e.checkValidity() ? (n.preventDefault(), n.stopPropagation()) : t.ajax({ type: "POST", url: "assets/php/submit.php", data: e.serialize(), success: function() { t("#valid-issue").addClass("alert-success").html("Your message has been sent,<BR> We will contact you back with in next 24 hours.").show() } }), e.classList.add("was-validated") }, !1)
        }, !1)
    }), jQuery(function(t) {
        "use strict";
        t("#contactform") && t("#contactform").submit(function(e) {
            e.preventDefault();
            var i = t("#name").val(),
                r = t("#email").val(),
                o = (t("#subject").val(), t("#message").val());
            "" !== i && n(r) && "" !== o ? t.ajax({ type: "POST", url: "assets/php/submit.php", data: t("form").serialize(), success: function() { t("#contactform").slideUp(), t("#valid-issue").addClass("alert-success").html("Your message has been sent,<BR> We will contact you back with in next 24 hours.").show() } }) : t("#valid-issue").addClass("alert-danger").html("Please Provide Valid Information").slideDown()
        })
    })
}, function(t, e) {
    jQuery(function(t) {
        "use strict";
        if (t("section.hero-header").length > 0) {
            t(".mainnav").height();
            t("section.hero-header").height(t(window).height()), t(window).resize(function() { t("section.hero-header").height(t(window).height()) })
        }
        t(".cut").length > 0 && t(".cut").each(function() { t(this).hasClass("cut-top") ? t(this).css("border-right-width", t(this).parent().width() + "px") : t(this).hasClass("cut-bottom") && t(this).css("border-left-width", t(this).parent().width() + "px") })
    })
}, function(t, e) {
    ! function(t) {
        "use strict";

        function e() { n() }

        function n() { s.addEventListener("click", i), a.addEventListener("click", r), document.addEventListener("keyup", function(t) { 27 == t.keyCode && r() }) }

        function i() { console.log("gedddee"), o.classList.add("main-wrap--hide"), l.classList.add("searchOverlay--open"), setTimeout(function() { u.focus() }, 500) }

        function r() { o.classList.remove("main-wrap--hide"), l.classList.remove("searchOverlay--open"), u.blur(), u.value = "" }
        if ($(".searchOverlay").length > 0) var o = document.querySelector("main"),
            s = document.getElementById("btn-searchOverlay"),
            a = document.getElementById("btn-searchOverlay-close"),
            l = document.querySelector(".searchOverlay"),
            u = l.querySelector(".searchOverlay__input");
        $(".searchOverlay").length > 0 && e()
    }(window)
}, function(t, e, n) {
    n(37), n(38), n(39);
    var i = (n(6), n(1));
    window.WaveSurfer = n(4);
    ! function() {
        "use strict";

        function t() {
            if (lightSlider(), lightGallery(), initMasonary(), countDown(), snackbarInit(), slimScroll(), mapInit(), $(".animated").addClass("go"), $(".playlist").length) {
                var t = document.querySelectorAll(".playlist .media-url");
                wavesurfer.isPlaying() && $("a[href='" + window.media + "']") && (t[window.currentTrack].classList.add("active"), $("#playlist a.active i").toggleClass("icon-pause")), Array.prototype.forEach.call(t, function(e, n) { e.addEventListener("click", function(e) { e.preventDefault(), window.currentTrack == n ? ($(e.target).toggleClass("icon-pause"), $(".playlist .media-url").removeClass("icon-pause").removeClass("icon-play"), wavesurfer.playPause()) : ($("#playlist a.active i").toggleClass("icon-pause"), $(".playlist .media-url").removeClass("active"), t[n].classList.add("active"), $(".playlist .media-url i").removeClass("icon-pause").addClass("icon-play"), $(".playlist .media-url").removeClass("icon-pause").removeClass("icon-play"), window.setCurrentSong(n)) }) })
            }
        }
        $.ajaxify({ contentSelector: "#pageContent", linkSelector: ".ajaxifyPage" }), $(window).on("statechangecomplete", function() { i.start(), t(), i.done() })
    }()
}, function(module, exports) {
    window.JSON || (window.JSON = {}),
        function() {
            function f(t) { return t < 10 ? "0" + t : t }

            function quote(t) { return escapable.lastIndex = 0, escapable.test(t) ? '"' + t.replace(escapable, function(t) { var e = meta[t]; return "string" == typeof e ? e : "\\u" + ("0000" + t.charCodeAt(0).toString(16)).slice(-4) }) + '"' : '"' + t + '"' }

            function str(t, e) {
                var n, i, r, o, s, a = gap,
                    l = e[t];
                switch (l && "object" == typeof l && "function" == typeof l.toJSON && (l = l.toJSON(t)), "function" == typeof rep && (l = rep.call(e, t, l)), typeof l) {
                    case "string":
                        return quote(l);
                    case "number":
                        return isFinite(l) ? String(l) : "null";
                    case "boolean":
                    case "null":
                        return String(l);
                    case "object":
                        if (!l) return "null";
                        if (gap += indent, s = [], "[object Array]" === Object.prototype.toString.apply(l)) { for (o = l.length, n = 0; n < o; n += 1) s[n] = str(n, l) || "null"; return r = 0 === s.length ? "[]" : gap ? "[\n" + gap + s.join(",\n" + gap) + "\n" + a + "]" : "[" + s.join(",") + "]", gap = a, r }
                        if (rep && "object" == typeof rep)
                            for (o = rep.length, n = 0; n < o; n += 1) i = rep[n], "string" == typeof i && (r = str(i, l), r && s.push(quote(i) + (gap ? ": " : ":") + r));
                        else
                            for (i in l) Object.hasOwnProperty.call(l, i) && (r = str(i, l), r && s.push(quote(i) + (gap ? ": " : ":") + r));
                        return r = 0 === s.length ? "{}" : gap ? "{\n" + gap + s.join(",\n" + gap) + "\n" + a + "}" : "{" + s.join(",") + "}", gap = a, r
                }
            }
            "function" != typeof Date.prototype.toJSON && (Date.prototype.toJSON = function(t) { return isFinite(this.valueOf()) ? this.getUTCFullYear() + "-" + f(this.getUTCMonth() + 1) + "-" + f(this.getUTCDate()) + "T" + f(this.getUTCHours()) + ":" + f(this.getUTCMinutes()) + ":" + f(this.getUTCSeconds()) + "Z" : null }, String.prototype.toJSON = Number.prototype.toJSON = Boolean.prototype.toJSON = function(t) { return this.valueOf() });
            var JSON = window.JSON,
                cx = /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
                escapable = /[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
                gap, indent, meta = { "\b": "\\b", "\t": "\\t", "\n": "\\n", "\f": "\\f", "\r": "\\r", '"': '\\"', "\\": "\\\\" },
                rep;
            "function" != typeof JSON.stringify && (JSON.stringify = function(t, e, n) {
                var i;
                if (gap = "", indent = "", "number" == typeof n)
                    for (i = 0; i < n; i += 1) indent += " ";
                else "string" == typeof n && (indent = n);
                if (rep = e, !e || "function" == typeof e || "object" == typeof e && "number" == typeof e.length) return str("", { "": t });
                throw new Error("JSON.stringify")
            }), "function" != typeof JSON.parse && (JSON.parse = function(text, reviver) {
                function walk(t, e) {
                    var n, i, r = t[e];
                    if (r && "object" == typeof r)
                        for (n in r) Object.hasOwnProperty.call(r, n) && (i = walk(r, n), void 0 !== i ? r[n] = i : delete r[n]);
                    return reviver.call(t, e, r)
                }
                var j;
                if (text = String(text), cx.lastIndex = 0, cx.test(text) && (text = text.replace(cx, function(t) { return "\\u" + ("0000" + t.charCodeAt(0).toString(16)).slice(-4) })), /^[\],:{}\s]*$/.test(text.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g, "@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, "]").replace(/(?:^|:|,)(?:\s*\[)+/g, ""))) return j = eval("(" + text + ")"), "function" == typeof reviver ? walk({ "": j }, "") : j;
                throw new SyntaxError("JSON.parse")
            })
        }(),
        function(t, e) {
            "use strict";
            var n = t.History = t.History || {},
                i = t.jQuery;
            if ("undefined" != typeof n.Adapter) throw new Error("History.js Adapter has already been loaded...");
            n.Adapter = { bind: function(t, e, n) { i(t).bind(e, n) }, trigger: function(t, e, n) { i(t).trigger(e, n) }, extractEventData: function(t, n, i) { var r = n && n.originalEvent && n.originalEvent[t] || i && i[t] || e; return r }, onDomLoad: function(t) { i(t) } }, "undefined" != typeof n.init && n.init()
        }(window),
        function(t, e) {
            "use strict";
            var n = t.document,
                i = t.setTimeout || i,
                r = t.clearTimeout || r,
                o = t.setInterval || o,
                s = t.History = t.History || {};
            if ("undefined" != typeof s.initHtml4) throw new Error("History.js HTML4 Support has already been loaded...");
            s.initHtml4 = function() {
                return "undefined" == typeof s.initHtml4.initialized && (s.initHtml4.initialized = !0, s.enabled = !0, s.savedHashes = [], s.isLastHash = function(t) { var e, n = s.getHashByIndex(); return e = t === n }, s.saveHash = function(t) { return !s.isLastHash(t) && (s.savedHashes.push(t), !0) }, s.getHashByIndex = function(t) { var e = null; return e = "undefined" == typeof t ? s.savedHashes[s.savedHashes.length - 1] : t < 0 ? s.savedHashes[s.savedHashes.length + t] : s.savedHashes[t] }, s.discardedHashes = {}, s.discardedStates = {}, s.discardState = function(t, e, n) { var i, r = s.getHashByState(t); return i = { discardedState: t, backState: n, forwardState: e }, s.discardedStates[r] = i, !0 }, s.discardHash = function(t, e, n) { var i = { discardedHash: t, backState: n, forwardState: e }; return s.discardedHashes[t] = i, !0 }, s.discardedState = function(t) { var e, n = s.getHashByState(t); return e = s.discardedStates[n] || !1 }, s.discardedHash = function(t) { var e = s.discardedHashes[t] || !1; return e }, s.recycleState = function(t) { var e = s.getHashByState(t); return s.discardedState(t) && delete s.discardedStates[e], !0 }, s.emulated.hashChange && (s.hashChangeInit = function() {
                    s.checkerFunction = null;
                    var e, i, r, a, l = "";
                    return s.isInternetExplorer() ? (e = "historyjs-iframe", i = n.createElement("iframe"), i.setAttribute("id", e), i.style.display = "none", n.body.appendChild(i), i.contentWindow.document.open(), i.contentWindow.document.close(), r = "", a = !1, s.checkerFunction = function() {
                        if (a) return !1;
                        a = !0;
                        var e = s.getHash() || "",
                            n = s.unescapeHash(i.contentWindow.document.location.hash) || "";
                        return e !== l ? (l = e, n !== e && (r = n = e, i.contentWindow.document.open(), i.contentWindow.document.close(), i.contentWindow.document.location.hash = s.escapeHash(e)), s.Adapter.trigger(t, "hashchange")) : n !== r && (r = n, s.setHash(n, !1)), a = !1, !0
                    }) : s.checkerFunction = function() { var e = s.getHash(); return e !== l && (l = e, s.Adapter.trigger(t, "hashchange")), !0 }, s.intervalList.push(o(s.checkerFunction, s.options.hashChangeInterval)), !0
                }, s.Adapter.onDomLoad(s.hashChangeInit)), s.emulated.pushState && (s.onHashChange = function(e) {
                    var i, r = e && e.newURL || n.location.href,
                        o = s.getHashByUrl(r),
                        a = null,
                        l = null;
                    return s.isLastHash(o) ? (s.busy(!1), !1) : (s.doubleCheckComplete(), s.saveHash(o), o && s.isTraditionalAnchor(o) ? (s.Adapter.trigger(t, "anchorchange"), s.busy(!1), !1) : (a = s.extractState(s.getFullUrl(o || n.location.href, !1), !0), s.isLastSavedState(a) ? (s.busy(!1), !1) : (l = s.getHashByState(a), i = s.discardedState(a), i ? (s.getHashByIndex(-2) === s.getHashByState(i.forwardState) ? s.back(!1) : s.forward(!1), !1) : (s.pushState(a.data, a.title, a.url, !1), !0))))
                }, s.Adapter.bind(t, "hashchange", s.onHashChange), s.pushState = function(e, i, r, o) {
                    if (s.getHashByUrl(r)) throw new Error("History.js does not support states with fragement-identifiers (hashes/anchors).");
                    if (o !== !1 && s.busy()) return s.pushQueue({ scope: s, callback: s.pushState, args: arguments, queue: o }), !1;
                    s.busy(!0);
                    var a = s.createStateObject(e, i, r),
                        l = s.getHashByState(a),
                        u = s.getState(!1),
                        c = s.getHashByState(u),
                        d = s.getHash();
                    return s.storeState(a), s.expectedStateId = a.id, s.recycleState(a), s.setTitle(a), l === c ? (s.busy(!1), !1) : l !== d && l !== s.getShortUrl(n.location.href) ? (s.setHash(l, !1), !1) : (s.saveState(a), s.Adapter.trigger(t, "statechange"), s.busy(!1), !0)
                }, s.replaceState = function(t, e, n, i) {
                    if (s.getHashByUrl(n)) throw new Error("History.js does not support states with fragement-identifiers (hashes/anchors).");
                    if (i !== !1 && s.busy()) return s.pushQueue({ scope: s, callback: s.replaceState, args: arguments, queue: i }), !1;
                    s.busy(!0);
                    var r = s.createStateObject(t, e, n),
                        o = s.getState(!1),
                        a = s.getStateByIndex(-2);
                    return s.discardState(o, r, a), s.pushState(r.data, r.title, r.url, !1), !0
                }), s.emulated.pushState && s.getHash() && !s.emulated.hashChange && s.Adapter.onDomLoad(function() { s.Adapter.trigger(t, "hashchange") }), void 0)
            }, "undefined" != typeof s.init && s.init()
        }(window),
        function(t, e) {
            "use strict";
            var n = t.console || e,
                i = t.document,
                r = t.navigator,
                o = t.sessionStorage || !1,
                s = t.setTimeout,
                a = t.clearTimeout,
                l = t.setInterval,
                u = t.clearInterval,
                c = t.JSON,
                d = t.alert,
                f = t.History = t.History || {},
                h = t.history;
            if (c.stringify = c.stringify || c.encode, c.parse = c.parse || c.decode, "undefined" != typeof f.init) throw new Error("History.js Core has already been loaded...");
            f.init = function() { return "undefined" != typeof f.Adapter && ("undefined" != typeof f.initCore && f.initCore(), "undefined" != typeof f.initHtml4 && f.initHtml4(), !0) }, f.initCore = function() {
                if ("undefined" != typeof f.initCore.initialized) return !1;
                if (f.initCore.initialized = !0, f.options = f.options || {}, f.options.hashChangeInterval = f.options.hashChangeInterval || 100, f.options.safariPollInterval = f.options.safariPollInterval || 500, f.options.doubleCheckInterval = f.options.doubleCheckInterval || 500, f.options.storeInterval = f.options.storeInterval || 1e3, f.options.busyDelay = f.options.busyDelay || 250, f.options.debug = f.options.debug || !1, f.options.initialTitle = f.options.initialTitle || i.title, f.intervalList = [], f.clearAllIntervals = function() {
                        var t, e = f.intervalList;
                        if ("undefined" != typeof e && null !== e) {
                            for (t = 0; t < e.length; t++) u(e[t]);
                            f.intervalList = null
                        }
                    }, f.debug = function() {
                        (f.options.debug || !1) && f.log.apply(f, arguments)
                    }, f.log = function() {
                        var t, e, r, o, s, a = "undefined" != typeof n && "undefined" != typeof n.log && "undefined" != typeof n.log.apply,
                            l = i.getElementById("log");
                        for (a ? (o = Array.prototype.slice.call(arguments), t = o.shift(), "undefined" != typeof n.debug ? n.debug.apply(n, [t, o]) : n.log.apply(n, [t, o])) : t = "\n" + arguments[0] + "\n", e = 1, r = arguments.length; e < r; ++e) {
                            if (s = arguments[e], "object" == typeof s && "undefined" != typeof c) try { s = c.stringify(s) } catch (u) {}
                            t += "\n" + s + "\n"
                        }
                        return l ? (l.value += t + "\n-----\n", l.scrollTop = l.scrollHeight - l.clientHeight) : a || d(t), !0
                    }, f.getInternetExplorerMajorVersion = function() {
                        var t = f.getInternetExplorerMajorVersion.cached = "undefined" != typeof f.getInternetExplorerMajorVersion.cached ? f.getInternetExplorerMajorVersion.cached : function() {
                            for (var t = 3, e = i.createElement("div"), n = e.getElementsByTagName("i");
                                (e.innerHTML = "<!--[if gt IE " + ++t + "]><i></i><![endif]-->") && n[0];);
                            return t > 4 && t
                        }();
                        return t
                    }, f.isInternetExplorer = function() { var t = f.isInternetExplorer.cached = "undefined" != typeof f.isInternetExplorer.cached ? f.isInternetExplorer.cached : Boolean(f.getInternetExplorerMajorVersion()); return t }, f.emulated = { pushState: !Boolean(t.history && t.history.pushState && t.history.replaceState && !/ Mobile\/([1-7][a-z]|(8([abcde]|f(1[0-8]))))/i.test(r.userAgent) && !/AppleWebKit\/5([0-2]|3[0-2])/i.test(r.userAgent)), hashChange: Boolean(!("onhashchange" in t || "onhashchange" in i) || f.isInternetExplorer() && f.getInternetExplorerMajorVersion() < 8) }, f.enabled = !f.emulated.pushState, f.bugs = { setHash: Boolean(!f.emulated.pushState && "Apple Computer, Inc." === r.vendor && /AppleWebKit\/5([0-2]|3[0-3])/.test(r.userAgent)), safariPoll: Boolean(!f.emulated.pushState && "Apple Computer, Inc." === r.vendor && /AppleWebKit\/5([0-2]|3[0-3])/.test(r.userAgent)), ieDoubleCheck: Boolean(f.isInternetExplorer() && f.getInternetExplorerMajorVersion() < 8), hashEscape: Boolean(f.isInternetExplorer() && f.getInternetExplorerMajorVersion() < 7) }, f.isEmptyObject = function(t) { for (var e in t) return !1; return !0 }, f.cloneObject = function(t) { var e, n; return t ? (e = c.stringify(t), n = c.parse(e)) : n = {}, n }, f.getRootUrl = function() { var t = i.location.protocol + "//" + (i.location.hostname || i.location.host); return i.location.port && (t += ":" + i.location.port), t += "/" }, f.getBaseHref = function() {
                        var t = i.getElementsByTagName("base"),
                            e = null,
                            n = "";
                        return 1 === t.length && (e = t[0], n = e.href.replace(/[^\/]+$/, "")), n = n.replace(/\/+$/, ""), n && (n += "/"), n
                    }, f.getBaseUrl = function() { var t = f.getBaseHref() || f.getBasePageUrl() || f.getRootUrl(); return t }, f.getPageUrl = function() {
                        var t, e = f.getState(!1, !1),
                            n = (e || {}).url || i.location.href;
                        return t = n.replace(/\/+$/, "").replace(/[^\/]+$/, function(t, e, n) { return /\./.test(t) ? t : t + "/" })
                    }, f.getBasePageUrl = function() { var t = i.location.href.replace(/[#\?].*/, "").replace(/[^\/]+$/, function(t, e, n) { return /[^\/]$/.test(t) ? "" : t }).replace(/\/+$/, "") + "/"; return t }, f.getFullUrl = function(t, e) {
                        var n = t,
                            i = t.substring(0, 1);
                        return e = "undefined" == typeof e || e, /[a-z]+\:\/\//.test(t) || (n = "/" === i ? f.getRootUrl() + t.replace(/^\/+/, "") : "#" === i ? f.getPageUrl().replace(/#.*/, "") + t : "?" === i ? f.getPageUrl().replace(/[\?#].*/, "") + t : e ? f.getBaseUrl() + t.replace(/^(\.\/)+/, "") : f.getBasePageUrl() + t.replace(/^(\.\/)+/, "")), n.replace(/\#$/, "")
                    }, f.getShortUrl = function(t) {
                        var e = t,
                            n = f.getBaseUrl(),
                            i = f.getRootUrl();
                        return f.emulated.pushState && (e = e.replace(n, "")), e = e.replace(i, "/"), f.isTraditionalAnchor(e) && (e = "./" + e), e = e.replace(/^(\.\/)+/g, "./").replace(/\#$/, "")
                    }, f.store = {}, f.idToState = f.idToState || {}, f.stateToId = f.stateToId || {}, f.urlToId = f.urlToId || {}, f.storedStates = f.storedStates || [], f.savedStates = f.savedStates || [], f.normalizeStore = function() { f.store.idToState = f.store.idToState || {}, f.store.urlToId = f.store.urlToId || {}, f.store.stateToId = f.store.stateToId || {} }, f.getState = function(t, e) { "undefined" == typeof t && (t = !0), "undefined" == typeof e && (e = !0); var n = f.getLastSavedState(); return !n && e && (n = f.createStateObject()), t && (n = f.cloneObject(n), n.url = n.cleanUrl || n.url), n }, f.getIdByState = function(t) {
                        var e, n = f.extractId(t.url);
                        if (!n)
                            if (e = f.getStateString(t), "undefined" != typeof f.stateToId[e]) n = f.stateToId[e];
                            else if ("undefined" != typeof f.store.stateToId[e]) n = f.store.stateToId[e];
                        else {
                            for (; n = (new Date).getTime() + String(Math.random()).replace(/\D/g, ""), "undefined" != typeof f.idToState[n] || "undefined" != typeof f.store.idToState[n];);
                            f.stateToId[e] = n, f.idToState[n] = t
                        }
                        return n
                    }, f.normalizeState = function(t) { var e, n; return t && "object" == typeof t || (t = {}), "undefined" != typeof t.normalized ? t : (t.data && "object" == typeof t.data || (t.data = {}), e = {}, e.normalized = !0, e.title = t.title || "", e.url = f.getFullUrl(f.unescapeString(t.url || i.location.href)), e.hash = f.getShortUrl(e.url), e.data = f.cloneObject(t.data), e.id = f.getIdByState(e), e.cleanUrl = e.url.replace(/\??\&_suid.*/, ""), e.url = e.cleanUrl, n = !f.isEmptyObject(e.data), (e.title || n) && (e.hash = f.getShortUrl(e.url).replace(/\??\&_suid.*/, ""), /\?/.test(e.hash) || (e.hash += "?"), e.hash += "&_suid=" + e.id), e.hashedUrl = f.getFullUrl(e.hash), (f.emulated.pushState || f.bugs.safariPoll) && f.hasUrlDuplicate(e) && (e.url = e.hashedUrl), e) }, f.createStateObject = function(t, e, n) { var i = { data: t, title: e, url: n }; return i = f.normalizeState(i) }, f.getStateById = function(t) { t = String(t); var n = f.idToState[t] || f.store.idToState[t] || e; return n }, f.getStateString = function(t) { var e, n, i; return e = f.normalizeState(t), n = { data: e.data, title: t.title, url: t.url }, i = c.stringify(n) }, f.getStateId = function(t) { var e, n; return e = f.normalizeState(t), n = e.id }, f.getHashByState = function(t) { var e, n; return e = f.normalizeState(t), n = e.hash }, f.extractId = function(t) { var e, n, i; return n = /(.*)\&_suid=([0-9]+)$/.exec(t), i = n ? n[1] || t : t, e = n ? String(n[2] || "") : "", e || !1 }, f.isTraditionalAnchor = function(t) { var e = !/[\/\?\.]/.test(t); return e }, f.extractState = function(t, e) { var n, i, r = null; return e = e || !1, n = f.extractId(t), n && (r = f.getStateById(n)), r || (i = f.getFullUrl(t), n = f.getIdByUrl(i) || !1, n && (r = f.getStateById(n)), !r && e && !f.isTraditionalAnchor(t) && (r = f.createStateObject(null, null, i))), r }, f.getIdByUrl = function(t) { var n = f.urlToId[t] || f.store.urlToId[t] || e; return n }, f.getLastSavedState = function() { return f.savedStates[f.savedStates.length - 1] || e }, f.getLastStoredState = function() { return f.storedStates[f.storedStates.length - 1] || e }, f.hasUrlDuplicate = function(t) { var e, n = !1; return e = f.extractState(t.url), n = e && e.id !== t.id }, f.storeState = function(t) { return f.urlToId[t.url] = t.id, f.storedStates.push(f.cloneObject(t)), t }, f.isLastSavedState = function(t) { var e, n, i, r = !1; return f.savedStates.length && (e = t.id, n = f.getLastSavedState(), i = n.id, r = e === i), r }, f.saveState = function(t) { return !f.isLastSavedState(t) && (f.savedStates.push(f.cloneObject(t)), !0) }, f.getStateByIndex = function(t) { var e = null; return e = "undefined" == typeof t ? f.savedStates[f.savedStates.length - 1] : t < 0 ? f.savedStates[f.savedStates.length + t] : f.savedStates[t] }, f.getHash = function() { var t = f.unescapeHash(i.location.hash); return t }, f.unescapeString = function(e) { for (var n, i = e; n = t.unescape(i), n !== i;) i = n; return i }, f.unescapeHash = function(t) { var e = f.normalizeHash(t); return e = f.unescapeString(e) }, f.normalizeHash = function(t) { var e = t.replace(/[^#]*#/, "").replace(/#.*/, ""); return e }, f.setHash = function(t, e) { var n, r, o; return e !== !1 && f.busy() ? (f.pushQueue({ scope: f, callback: f.setHash, args: arguments, queue: e }), !1) : (n = f.escapeHash(t), f.busy(!0), r = f.extractState(t, !0), r && !f.emulated.pushState ? f.pushState(r.data, r.title, r.url, !1) : i.location.hash !== n && (f.bugs.setHash ? (o = f.getPageUrl(), f.pushState(null, null, o + "#" + n, !1)) : i.location.hash = n), f) }, f.escapeHash = function(e) { var n = f.normalizeHash(e); return n = t.escape(n), f.bugs.hashEscape || (n = n.replace(/\%21/g, "!").replace(/\%26/g, "&").replace(/\%3D/g, "=").replace(/\%3F/g, "?")), n }, f.getHashByUrl = function(t) { var e = String(t).replace(/([^#]*)#?([^#]*)#?(.*)/, "$2"); return e = f.unescapeHash(e) }, f.setTitle = function(t) {
                        var e, n = t.title;
                        n || (e = f.getStateByIndex(0), e && e.url === t.url && (n = e.title || f.options.initialTitle));
                        try { i.getElementsByTagName("title")[0].innerHTML = n.replace("<", "&lt;").replace(">", "&gt;").replace(" & ", " &amp; ") } catch (r) {}
                        return i.title = n, f
                    }, f.queues = [], f.busy = function(t) {
                        if ("undefined" != typeof t ? f.busy.flag = t : "undefined" == typeof f.busy.flag && (f.busy.flag = !1), !f.busy.flag) {
                            a(f.busy.timeout);
                            var e = function() {
                                var t, n, i;
                                if (!f.busy.flag)
                                    for (t = f.queues.length - 1; t >= 0; --t) n = f.queues[t], 0 !== n.length && (i = n.shift(), f.fireQueueItem(i), f.busy.timeout = s(e, f.options.busyDelay))
                            };
                            f.busy.timeout = s(e, f.options.busyDelay)
                        }
                        return f.busy.flag
                    }, f.busy.flag = !1, f.fireQueueItem = function(t) { return t.callback.apply(t.scope || f, t.args || []) }, f.pushQueue = function(t) { return f.queues[t.queue || 0] = f.queues[t.queue || 0] || [], f.queues[t.queue || 0].push(t), f }, f.queue = function(t, e) { return "function" == typeof t && (t = { callback: t }), "undefined" != typeof e && (t.queue = e), f.busy() ? f.pushQueue(t) : f.fireQueueItem(t), f }, f.clearQueue = function() { return f.busy.flag = !1, f.queues = [], f }, f.stateChanged = !1, f.doubleChecker = !1, f.doubleCheckComplete = function() { return f.stateChanged = !0, f.doubleCheckClear(), f }, f.doubleCheckClear = function() { return f.doubleChecker && (a(f.doubleChecker), f.doubleChecker = !1), f }, f.doubleCheck = function(t) { return f.stateChanged = !1, f.doubleCheckClear(), f.bugs.ieDoubleCheck && (f.doubleChecker = s(function() { return f.doubleCheckClear(), f.stateChanged || t(), !0 }, f.options.doubleCheckInterval)), f }, f.safariStatePoll = function() { var e, n = f.extractState(i.location.href); if (!f.isLastSavedState(n)) return e = n, e || (e = f.createStateObject()), f.Adapter.trigger(t, "popstate"), f }, f.back = function(t) { return t !== !1 && f.busy() ? (f.pushQueue({ scope: f, callback: f.back, args: arguments, queue: t }), !1) : (f.busy(!0), f.doubleCheck(function() { f.back(!1) }), h.go(-1), !0) }, f.forward = function(t) { return t !== !1 && f.busy() ? (f.pushQueue({ scope: f, callback: f.forward, args: arguments, queue: t }), !1) : (f.busy(!0), f.doubleCheck(function() { f.forward(!1) }), h.go(1), !0) }, f.go = function(t, e) {
                        var n;
                        if (t > 0)
                            for (n = 1; n <= t; ++n) f.forward(e);
                        else { if (!(t < 0)) throw new Error("History.go: History.go requires a positive or negative integer passed."); for (n = -1; n >= t; --n) f.back(e) }
                        return f
                    }, f.emulated.pushState) {
                    var p = function() {};
                    f.pushState = f.pushState || p, f.replaceState = f.replaceState || p
                } else f.onPopState = function(e, n) {
                    var r, o, s = !1,
                        a = !1;
                    return f.doubleCheckComplete(), r = f.getHash(), r ? (o = f.extractState(r || i.location.href, !0), o ? f.replaceState(o.data, o.title, o.url, !1) : (f.Adapter.trigger(t, "anchorchange"), f.busy(!1)), f.expectedStateId = !1, !1) : (s = f.Adapter.extractEventData("state", e, n) || !1, a = s ? f.getStateById(s) : f.expectedStateId ? f.getStateById(f.expectedStateId) : f.extractState(i.location.href), a || (a = f.createStateObject(null, null, i.location.href)), f.expectedStateId = !1, f.isLastSavedState(a) ? (f.busy(!1), !1) : (f.storeState(a), f.saveState(a), f.setTitle(a), f.Adapter.trigger(t, "statechange"), f.busy(!1), !0))
                }, f.Adapter.bind(t, "popstate", f.onPopState), f.pushState = function(e, n, i, r) {
                    if (f.getHashByUrl(i) && f.emulated.pushState) throw new Error("History.js does not support states with fragement-identifiers (hashes/anchors).");
                    if (r !== !1 && f.busy()) return f.pushQueue({ scope: f, callback: f.pushState, args: arguments, queue: r }), !1;
                    f.busy(!0);
                    var o = f.createStateObject(e, n, i);
                    return f.isLastSavedState(o) ? f.busy(!1) : (f.storeState(o), f.expectedStateId = o.id, h.pushState(o.id, o.title, o.url), f.Adapter.trigger(t, "popstate")), !0
                }, f.replaceState = function(e, n, i, r) {
                    if (f.getHashByUrl(i) && f.emulated.pushState) throw new Error("History.js does not support states with fragement-identifiers (hashes/anchors).");
                    if (r !== !1 && f.busy()) return f.pushQueue({ scope: f, callback: f.replaceState, args: arguments, queue: r }), !1;
                    f.busy(!0);
                    var o = f.createStateObject(e, n, i);
                    return f.isLastSavedState(o) ? f.busy(!1) : (f.storeState(o), f.expectedStateId = o.id, h.replaceState(o.id, o.title, o.url), f.Adapter.trigger(t, "popstate")), !0
                };
                if (o) {
                    try { f.store = c.parse(o.getItem("History.store")) || {} } catch (g) { f.store = {} }
                    f.normalizeStore()
                } else f.store = {}, f.normalizeStore();
                f.Adapter.bind(t, "beforeunload", f.clearAllIntervals), f.Adapter.bind(t, "unload", f.clearAllIntervals), f.saveState(f.storeState(f.extractState(i.location.href, !0))), o && (f.onUnload = function() {
                    var t, e;
                    try { t = c.parse(o.getItem("History.store")) || {} } catch (n) { t = {} }
                    t.idToState = t.idToState || {}, t.urlToId = t.urlToId || {}, t.stateToId = t.stateToId || {};
                    for (e in f.idToState) f.idToState.hasOwnProperty(e) && (t.idToState[e] = f.idToState[e]);
                    for (e in f.urlToId) f.urlToId.hasOwnProperty(e) && (t.urlToId[e] = f.urlToId[e]);
                    for (e in f.stateToId) f.stateToId.hasOwnProperty(e) && (t.stateToId[e] = f.stateToId[e]);
                    f.store = t, f.normalizeStore(), o.setItem("History.store", c.stringify(t))
                }, f.intervalList.push(l(f.onUnload, f.options.storeInterval)), f.Adapter.bind(t, "beforeunload", f.onUnload), f.Adapter.bind(t, "unload", f.onUnload)), f.emulated.pushState || (f.bugs.safariPoll && f.intervalList.push(l(f.safariStatePoll, f.options.safariPollInterval)), "Apple Computer, Inc." !== r.vendor && "Mozilla" !== (r.appCodeName || "") || (f.Adapter.bind(t, "hashchange", function() { f.Adapter.trigger(t, "popstate") }), f.getHash() && f.Adapter.onDomLoad(function() { f.Adapter.trigger(t, "hashchange") })))
            }, f.init()
        }(window)
}, function(t, e) {
    ! function(t) {
        t.ajaxify = function(t) {
            function e(t) {
                var e = " a:internal:not(.no-ajaxy)",
                    l = a.linkContainerSelector.replace(/\,/g, e + ",") + e;
                return s.on("click", l, function(t) {
                    var e = r(this),
                        s = e.attr("href"),
                        a = e.attr("title") || null,
                        l = { ajaxifyData: { instance: n, referrer: unescape(o.location.toString()) } };
                    return !(2 != t.which && !t.metaKey) || (s.indexOf("#") !== -1 || (i.pushState(l, a, s), t.preventDefault(), !1))
                }), t
            }
            var n, i = window.History,
                r = window.jQuery,
                o = window.document,
                s = r("html");
            if (!i.enabled) return !1;
            "undefined" == typeof r.ajaxify.instanceCount ? r.ajaxify.instanceCount = 0 : r.ajaxify.instanceCount++, n = r.ajaxify.instanceCount;
            var a = r.extend({ contentSelector: "main,#main,#content,article:first,.article:first,.post:first", backContentSelector: "#content,main,#main,article:first,.article:first,.post:first", linkContainerSelector: "body", menuSelector: "#menu,#nav,nav:first,.nav:first", activeClass: "active selected current youarehere", activeSelector: ".active,.selected,.current,.youarehere", menuChildrenSelector: "> li,> ul > li", startEventName: "statechangestart", completedEventName: "statechangecomplete", scrollOptions: { duration: 800, easing: "swing" }, scrollEnabled: !0, startAnim: function(t, e, n, i) { r(window).trigger(i), t.animate({ opacity: 0 }, 800, function() { r("body").addClass("ajaxify-waiting") }) }, endAnim: function(t, e, n, i, o) { t.remove(), r("body").removeClass("ajaxify-loading ajaxify-waiting"), e.css({ opacity: 0, display: "block" }).animate({ opacity: 1 }, 800, function() { r("body").removeClass("ajaxify-waiting") }), r(window).trigger(i, o) }, keepOldContent: !1 }, t);
            "" === a.linkContainerSelector && (a.linkContainerSelector = a.contentSelector);
            var l = r(a.contentSelector).first(),
                u = l.get(0),
                c = r(a.menuSelector),
                d = r(window),
                f = r(o.body),
                h = i.getRootUrl();
            0 === l.length && (l = f), r.expr[":"].internal = function(t, e, n, i) {
                var o, s = r(t),
                    a = s.attr("href") || "",
                    l = h.slice(0, -1);
                return o = a.substring(0, l.length) === l || a.indexOf(":") === -1
            };
            var p = function(t) { var e = String(t).replace(/<\!DOCTYPE[^>]*>/i, "").replace(/<(html|head|body|title|meta)([\s\>])/gi, '<div class="document-$1"$2').replace(/<\/(html|head|body|title|meta)\>/gi, "</div>"); return r.trim(e) };
            e(r(a.linkContainerSelector)), d.bind("statechange", function() {
                var t = i.getState(),
                    e = i.savedStates,
                    s = t.url,
                    d = e.length - 2,
                    g = e[d].url,
                    m = t.data,
                    v = !1,
                    y = s.replace(h, "");
                if (t.data.ajaxifyData) {
                    if (m.ajaxifyData.instance !== n) return !1;
                    l = r(a.contentSelector).first(), m.ajaxifyData.referrer !== g && (l = r(a.backContentSelector), v = !0)
                } else {
                    if (0 !== n) return !1;
                    l = r(a.backContentSelector), v = !0
                }
                f.addClass("ajaxify-loading"), u = l.get(0), a.keepOldContent ? (l.wrapInner('<div id="ajaxify-oldContent" />').append('<div id="ajaxify-newContent" style="display: none;" />'), a.startAnim(r("#ajaxify-oldContent"), r("#ajaxify-newContent"), s, a.startEventName)) : a.startAnim(l, r(), s, a.startEventName), r.ajax({
                    url: s,
                    success: function(t, e, n) {
                        var i, d, h, g = r(p(t)),
                            m = g.find(".document-body:first"),
                            v = m.find(a.contentSelector).filter(":first");
                        if (h = v.find("script"), h.length && h.detach(), d = v.html(), !d) return o.location.href = s, !1;
                        i = c.find(a.menuChildrenSelector), i.filter(a.activeSelector).removeClass(a.activeClass), i = i.has('a[href^="' + y + '"],a[href^="/' + y + '"],a[href^="' + s + '"]'), 1 === i.length && i.addClass(a.activeClass), l.stop(!0, !0), a.keepOldContent ? r("#ajaxify-newContent").html(d) : l.html(d), o.title = g.find(".document-title:first").text();
                        try { o.getElementsByTagName("title")[0].innerHTML = o.title.replace("<", "&lt;").replace(">", "&gt;").replace(" & ", " &amp; ") } catch (b) {}
                        h.each(function() {
                            var t = r(this),
                                e = t.text(),
                                n = o.createElement("script");
                            t.attr("src") && (t[0].async || (n.async = !1), n.src = t.attr("src")), r(n).html(e), u.appendChild(n)
                        }), f.ScrollTo && a.scrollEnabled && f.ScrollTo(a.scrollOptions), "undefined" != typeof window._gaq && window._gaq.push(["_trackPageview", y]), "undefined" != typeof window.reinvigorate && "undefined" != typeof window.reinvigorate.ajax_track && reinvigorate.ajax_track(s), a.keepOldContent ? a.endAnim(r("#ajaxify-oldContent"), r("#ajaxify-newContent"), s, a.completedEventName, t) : a.endAnim(r(), l, s, a.completedEventName, t)
                    },
                    error: function(t, e, n) { return o.location.href = s, !1 }
                })
            })
        }
    }(jQuery)
}, function(t, e, n) {
    var i, r, o;
    ! function(s) {
        "use strict";
        r = [n(0)], i = s, o = "function" == typeof i ? i.apply(e, r) : i, !(void 0 !== o && (t.exports = o))
    }(function(t) {
        "use strict";

        function e(e) { return !e.nodeName || -1 !== t.inArray(e.nodeName.toLowerCase(), ["iframe", "#document", "html", "body"]) }

        function n(e) { return t.isFunction(e) || t.isPlainObject(e) ? e : { top: e, left: e } }
        var i = t.scrollTo = function(e, n, i) { return t(window).scrollTo(e, n, i) };
        return i.defaults = { axis: "xy", duration: 0, limit: !0 }, t.fn.scrollTo = function(r, o, s) {
            "object" == typeof o && (s = o, o = 0), "function" == typeof s && (s = { onAfter: s }), "max" === r && (r = 9e9), s = t.extend({}, i.defaults, s), o = o || s.duration;
            var a = s.queue && 1 < s.axis.length;
            return a && (o /= 2), s.offset = n(s.offset), s.over = n(s.over), this.each(function() {
                function l(e) {
                    var n = t.extend({}, s, { queue: !0, duration: o, complete: e && function() { e.call(d, h, s) } });
                    f.animate(p, n)
                }
                if (null !== r) {
                    var u, c = e(this),
                        d = c ? this.contentWindow || window : this,
                        f = t(d),
                        h = r,
                        p = {};
                    switch (typeof h) {
                        case "number":
                        case "string":
                            if (/^([+-]=?)?\d+(\.\d+)?(px|%)?$/.test(h)) { h = n(h); break }
                            h = c ? t(h) : t(h, d);
                        case "object":
                            if (0 === h.length) return;
                            (h.is || h.style) && (u = (h = t(h)).offset())
                    }
                    var g = t.isFunction(s.offset) && s.offset(d, h) || s.offset;
                    t.each(s.axis.split(""), function(t, e) {
                        var n = "x" === e ? "Left" : "Top",
                            r = n.toLowerCase(),
                            o = "scroll" + n,
                            m = f[o](),
                            v = i.max(d, e);
                        u ? (p[o] = u[r] + (c ? 0 : m - f.offset()[r]), s.margin && (p[o] -= parseInt(h.css("margin" + n), 10) || 0, p[o] -= parseInt(h.css("border" + n + "Width"), 10) || 0), p[o] += g[r] || 0, s.over[r] && (p[o] += h["x" === e ? "width" : "height"]() * s.over[r])) : (n = h[r], p[o] = n.slice && "%" === n.slice(-1) ? parseFloat(n) / 100 * v : n),
                            s.limit && /^\d+$/.test(p[o]) && (p[o] = 0 >= p[o] ? 0 : Math.min(p[o], v)), !t && 1 < s.axis.length && (m === p[o] ? p = {} : a && (l(s.onAfterFirst), p = {}))
                    }), l(s.onAfter)
                }
            })
        }, i.max = function(n, i) {
            var r = "x" === i ? "Width" : "Height",
                o = "scroll" + r;
            if (!e(n)) return n[o] - t(n)[r.toLowerCase()]();
            var r = "client" + r,
                s = n.ownerDocument || n.document,
                a = s.documentElement,
                s = s.body;
            return Math.max(a[o], s[o]) - Math.min(a[r], s[r])
        }, t.Tween.propHooks.scrollLeft = t.Tween.propHooks.scrollTop = {
            get: function(e) { return t(e.elem)[e.prop]() },
            set: function(e) {
                var n = this.get(e);
                if (e.options.interrupt && e._last && e._last !== n) return t(e.elem).stop();
                var i = Math.round(e.now);
                n !== i && (t(e.elem)[e.prop](i), e._last = this.get(e))
            }
        }, i
    })
}, function(t, e) {
    ! function() {
        "use strict";
        $("body").show();
        $(window).width(), $(window).height(), $(window).scrollTop(), $("html"), $("body");
        $("#docs").length && $("#docs").popover("show"), ($(".scroll").length > 0 || $(".scroll a[href^='#']").length > 0) && $('.scroll, .scroll a[href^="#"]').on("click", function() { return $("html, body").animate({ scrollTop: $($.attr(this, "href")).offset().top - 30 }, 1500, function() {}), !1 }), $("body").on("click", ".xv-qyt", function(t) {
            t.preventDefault();
            var e = parseInt($(this).attr("data-value")),
                n = $(this).siblings("input.qty"),
                i = parseInt(n.val());
            if (i >= 1) {
                if (e === -1 && 1 === i) return !1;
                n.val(i + e)
            }
        }), $(".custome-select select").on("change", function() {
            var t = $(this).parent(".custome-select");
            t.find("span").html($(this).val())
        }), $(".js-gotop").length && ($(".js-gotop").on("click", function(t) { return t.preventDefault(), $("html, body").animate({ scrollTop: $("html").offset().top }, 500, "easeInOutExpo"), !1 }), $(window).scroll(function() {
            var t = $(window);
            t.scrollTop() > 200 ? $(".js-top").addClass("active") : $(".js-top").removeClass("active")
        })), $(".form-control").length && ($(".form-control").focus(function() { $(this).parent().addClass("focused") }), $(".form-control").focusout(function() {
            var t = $(this);
            t.parents(".form-group").hasClass("form-float") ? "" == t.val() && t.parents(".form-line").removeClass("focused") : t.parents(".form-line").removeClass("focused")
        }), $("body").on("click", ".form-float .form-line .form-label", function() { $(this).parent().find("input").focus() }), $(".form-control").each(function() { "" !== $(this).val() && $(this).parents(".form-line").addClass("focused") }), $(".skin_handle").on("click", function() { $("body").toggleClass("theme-dark") }))
    }()
}, function(t, e, n) {
    n(42), n(47),
        function() {
            "use strict";
            var t = function(t, e) {
                    var n = $(".project-filter li, .filter li");
                    n.removeClass("active"), e.addClass("active"), $(".masonry-container .animated").length > 0 && $(".masonry-container .animated").addClass("go");
                    var i = e.attr("data-filter");
                    return t.isotope({ filter: i, animationOptions: { duration: 750, easing: "linear", queue: !1 } }), !1
                },
                e = window.initMasonary = function() {
                    var e = $(".masonry-container"),
                        n = $(".project-filter li, .filter li");
                    $("#filter-items").length && $(".filter li a").on("click", function() { return $("html, body").animate({ scrollTop: $("#filter-items").offset().top - 0 }, 1500, function() {}), !1 }), e.waitForImages(function() { $(".masonry-container").show(), $(".masonry-container").masonry({ itemSelector: ".masonry-post" }) }), $(window).on("load", function() {
                        var n = $(".project-filter .active");
                        t(e, n)
                    }), n.on("click", function() {
                        n.removeClass("active");
                        var i = $(this).addClass("active"),
                            r = $(".project-filter li a, .filter li a");
                        r.removeClass("active"), $(this).children("a").addClass("active"), t(e, i, n)
                    })
                };
            e()
        }()
}, function(t, e, n) {
    var i, r, o;
    ! function(s, a) { r = [n(43), n(2)], i = a, o = "function" == typeof i ? i.apply(e, r) : i, !(void 0 !== o && (t.exports = o)) }(window, function(t, e) {
        "use strict";
        var n = t.create("masonry");
        n.compatOptions.fitWidth = "isFitWidth";
        var i = n.prototype;
        return i._resetLayout = function() {
            this.getSize(), this._getMeasurement("columnWidth", "outerWidth"), this._getMeasurement("gutter", "outerWidth"), this.measureColumns(), this.colYs = [];
            for (var t = 0; t < this.cols; t++) this.colYs.push(0);
            this.maxY = 0, this.horizontalColIndex = 0
        }, i.measureColumns = function() {
            if (this.getContainerWidth(), !this.columnWidth) {
                var t = this.items[0],
                    n = t && t.element;
                this.columnWidth = n && e(n).outerWidth || this.containerWidth
            }
            var i = this.columnWidth += this.gutter,
                r = this.containerWidth + this.gutter,
                o = r / i,
                s = i - r % i,
                a = s && s < 1 ? "round" : "floor";
            o = Math[a](o), this.cols = Math.max(o, 1)
        }, i.getContainerWidth = function() {
            var t = this._getOption("fitWidth"),
                n = t ? this.element.parentNode : this.element,
                i = e(n);
            this.containerWidth = i && i.innerWidth
        }, i._getItemLayoutPosition = function(t) {
            t.getSize();
            var e = t.size.outerWidth % this.columnWidth,
                n = e && e < 1 ? "round" : "ceil",
                i = Math[n](t.size.outerWidth / this.columnWidth);
            i = Math.min(i, this.cols);
            for (var r = this.options.horizontalOrder ? "_getHorizontalColPosition" : "_getTopColPosition", o = this[r](i, t), s = { x: this.columnWidth * o.col, y: o.y }, a = o.y + t.size.outerHeight, l = i + o.col, u = o.col; u < l; u++) this.colYs[u] = a;
            return s
        }, i._getTopColPosition = function(t) {
            var e = this._getTopColGroup(t),
                n = Math.min.apply(Math, e);
            return { col: e.indexOf(n), y: n }
        }, i._getTopColGroup = function(t) { if (t < 2) return this.colYs; for (var e = [], n = this.cols + 1 - t, i = 0; i < n; i++) e[i] = this._getColGroupY(i, t); return e }, i._getColGroupY = function(t, e) { if (e < 2) return this.colYs[t]; var n = this.colYs.slice(t, t + e); return Math.max.apply(Math, n) }, i._getHorizontalColPosition = function(t, e) {
            var n = this.horizontalColIndex % this.cols,
                i = t > 1 && n + t > this.cols;
            n = i ? 0 : n;
            var r = e.size.outerWidth && e.size.outerHeight;
            return this.horizontalColIndex = r ? n + t : this.horizontalColIndex, { col: n, y: this._getColGroupY(n, t) }
        }, i._manageStamp = function(t) {
            var n = e(t),
                i = this._getElementOffset(t),
                r = this._getOption("originLeft"),
                o = r ? i.left : i.right,
                s = o + n.outerWidth,
                a = Math.floor(o / this.columnWidth);
            a = Math.max(0, a);
            var l = Math.floor(s / this.columnWidth);
            l -= s % this.columnWidth ? 0 : 1, l = Math.min(this.cols - 1, l);
            for (var u = this._getOption("originTop"), c = (u ? i.top : i.bottom) + n.outerHeight, d = a; d <= l; d++) this.colYs[d] = Math.max(c, this.colYs[d])
        }, i._getContainerSize = function() { this.maxY = Math.max.apply(Math, this.colYs); var t = { height: this.maxY }; return this._getOption("fitWidth") && (t.width = this._getContainerFitWidth()), t }, i._getContainerFitWidth = function() { for (var t = 0, e = this.cols; --e && 0 === this.colYs[e];) t++; return (this.cols - t) * this.columnWidth - this.gutter }, i.needsResizeLayout = function() { var t = this.containerWidth; return this.getContainerWidth(), t != this.containerWidth }, n
    })
}, function(t, e, n) {
    var i, r;
    ! function(o, s) {
        "use strict";
        i = [n(7), n(2), n(44), n(46)], r = function(t, e, n, i) { return s(o, t, e, n, i) }.apply(e, i), !(void 0 !== r && (t.exports = r))
    }(window, function(t, e, n, i, r) {
        "use strict";

        function o(t, e) {
            var n = i.getQueryElement(t);
            if (!n) return void(l && l.error("Bad element for " + this.constructor.namespace + ": " + (n || t)));
            this.element = n, u && (this.$element = u(this.element)), this.options = i.extend({}, this.constructor.defaults), this.option(e);
            var r = ++d;
            this.element.outlayerGUID = r, f[r] = this, this._create();
            var o = this._getOption("initLayout");
            o && this.layout()
        }

        function s(t) {
            function e() { t.apply(this, arguments) }
            return e.prototype = Object.create(t.prototype), e.prototype.constructor = e, e
        }

        function a(t) {
            if ("number" == typeof t) return t;
            var e = t.match(/(^\d*\.?\d*)(\w*)/),
                n = e && e[1],
                i = e && e[2];
            if (!n.length) return 0;
            n = parseFloat(n);
            var r = p[i] || 1;
            return n * r
        }
        var l = t.console,
            u = t.jQuery,
            c = function() {},
            d = 0,
            f = {};
        o.namespace = "outlayer", o.Item = r, o.defaults = { containerStyle: { position: "relative" }, initLayout: !0, originLeft: !0, originTop: !0, resize: !0, resizeContainer: !0, transitionDuration: "0.4s", hiddenStyle: { opacity: 0, transform: "scale(0.001)" }, visibleStyle: { opacity: 1, transform: "scale(1)" } };
        var h = o.prototype;
        i.extend(h, e.prototype), h.option = function(t) { i.extend(this.options, t) }, h._getOption = function(t) { var e = this.constructor.compatOptions[t]; return e && void 0 !== this.options[e] ? this.options[e] : this.options[t] }, o.compatOptions = { initLayout: "isInitLayout", horizontal: "isHorizontal", layoutInstant: "isLayoutInstant", originLeft: "isOriginLeft", originTop: "isOriginTop", resize: "isResizeBound", resizeContainer: "isResizingContainer" }, h._create = function() {
            this.reloadItems(), this.stamps = [], this.stamp(this.options.stamp), i.extend(this.element.style, this.options.containerStyle);
            var t = this._getOption("resize");
            t && this.bindResize()
        }, h.reloadItems = function() { this.items = this._itemize(this.element.children) }, h._itemize = function(t) {
            for (var e = this._filterFindItemElements(t), n = this.constructor.Item, i = [], r = 0; r < e.length; r++) {
                var o = e[r],
                    s = new n(o, this);
                i.push(s)
            }
            return i
        }, h._filterFindItemElements = function(t) { return i.filterFindElements(t, this.options.itemSelector) }, h.getItemElements = function() { return this.items.map(function(t) { return t.element }) }, h.layout = function() {
            this._resetLayout(), this._manageStamps();
            var t = this._getOption("layoutInstant"),
                e = void 0 !== t ? t : !this._isLayoutInited;
            this.layoutItems(this.items, e), this._isLayoutInited = !0
        }, h._init = h.layout, h._resetLayout = function() { this.getSize() }, h.getSize = function() { this.size = n(this.element) }, h._getMeasurement = function(t, e) {
            var i, r = this.options[t];
            r ? ("string" == typeof r ? i = this.element.querySelector(r) : r instanceof HTMLElement && (i = r), this[t] = i ? n(i)[e] : r) : this[t] = 0
        }, h.layoutItems = function(t, e) { t = this._getItemsForLayout(t), this._layoutItems(t, e), this._postLayout() }, h._getItemsForLayout = function(t) { return t.filter(function(t) { return !t.isIgnored }) }, h._layoutItems = function(t, e) {
            if (this._emitCompleteOnItems("layout", t), t && t.length) {
                var n = [];
                t.forEach(function(t) {
                    var i = this._getItemLayoutPosition(t);
                    i.item = t, i.isInstant = e || t.isLayoutInstant, n.push(i)
                }, this), this._processLayoutQueue(n)
            }
        }, h._getItemLayoutPosition = function() { return { x: 0, y: 0 } }, h._processLayoutQueue = function(t) { this.updateStagger(), t.forEach(function(t, e) { this._positionItem(t.item, t.x, t.y, t.isInstant, e) }, this) }, h.updateStagger = function() { var t = this.options.stagger; return null === t || void 0 === t ? void(this.stagger = 0) : (this.stagger = a(t), this.stagger) }, h._positionItem = function(t, e, n, i, r) { i ? t.goTo(e, n) : (t.stagger(r * this.stagger), t.moveTo(e, n)) }, h._postLayout = function() { this.resizeContainer() }, h.resizeContainer = function() {
            var t = this._getOption("resizeContainer");
            if (t) {
                var e = this._getContainerSize();
                e && (this._setContainerMeasure(e.width, !0), this._setContainerMeasure(e.height, !1))
            }
        }, h._getContainerSize = c, h._setContainerMeasure = function(t, e) {
            if (void 0 !== t) {
                var n = this.size;
                n.isBorderBox && (t += e ? n.paddingLeft + n.paddingRight + n.borderLeftWidth + n.borderRightWidth : n.paddingBottom + n.paddingTop + n.borderTopWidth + n.borderBottomWidth), t = Math.max(t, 0), this.element.style[e ? "width" : "height"] = t + "px"
            }
        }, h._emitCompleteOnItems = function(t, e) {
            function n() { r.dispatchEvent(t + "Complete", null, [e]) }

            function i() { s++, s == o && n() }
            var r = this,
                o = e.length;
            if (!e || !o) return void n();
            var s = 0;
            e.forEach(function(e) { e.once(t, i) })
        }, h.dispatchEvent = function(t, e, n) {
            var i = e ? [e].concat(n) : n;
            if (this.emitEvent(t, i), u)
                if (this.$element = this.$element || u(this.element), e) {
                    var r = u.Event(e);
                    r.type = t, this.$element.trigger(r, n)
                } else this.$element.trigger(t, n)
        }, h.ignore = function(t) {
            var e = this.getItem(t);
            e && (e.isIgnored = !0)
        }, h.unignore = function(t) {
            var e = this.getItem(t);
            e && delete e.isIgnored
        }, h.stamp = function(t) { t = this._find(t), t && (this.stamps = this.stamps.concat(t), t.forEach(this.ignore, this)) }, h.unstamp = function(t) { t = this._find(t), t && t.forEach(function(t) { i.removeFrom(this.stamps, t), this.unignore(t) }, this) }, h._find = function(t) { if (t) return "string" == typeof t && (t = this.element.querySelectorAll(t)), t = i.makeArray(t) }, h._manageStamps = function() { this.stamps && this.stamps.length && (this._getBoundingRect(), this.stamps.forEach(this._manageStamp, this)) }, h._getBoundingRect = function() {
            var t = this.element.getBoundingClientRect(),
                e = this.size;
            this._boundingRect = { left: t.left + e.paddingLeft + e.borderLeftWidth, top: t.top + e.paddingTop + e.borderTopWidth, right: t.right - (e.paddingRight + e.borderRightWidth), bottom: t.bottom - (e.paddingBottom + e.borderBottomWidth) }
        }, h._manageStamp = c, h._getElementOffset = function(t) {
            var e = t.getBoundingClientRect(),
                i = this._boundingRect,
                r = n(t),
                o = { left: e.left - i.left - r.marginLeft, top: e.top - i.top - r.marginTop, right: i.right - e.right - r.marginRight, bottom: i.bottom - e.bottom - r.marginBottom };
            return o
        }, h.handleEvent = i.handleEvent, h.bindResize = function() { t.addEventListener("resize", this), this.isResizeBound = !0 }, h.unbindResize = function() { t.removeEventListener("resize", this), this.isResizeBound = !1 }, h.onresize = function() { this.resize() }, i.debounceMethod(o, "onresize", 100), h.resize = function() { this.isResizeBound && this.needsResizeLayout() && this.layout() }, h.needsResizeLayout = function() {
            var t = n(this.element),
                e = this.size && t;
            return e && t.innerWidth !== this.size.innerWidth
        }, h.addItems = function(t) { var e = this._itemize(t); return e.length && (this.items = this.items.concat(e)), e }, h.appended = function(t) {
            var e = this.addItems(t);
            e.length && (this.layoutItems(e, !0), this.reveal(e))
        }, h.prepended = function(t) {
            var e = this._itemize(t);
            if (e.length) {
                var n = this.items.slice(0);
                this.items = e.concat(n), this._resetLayout(), this._manageStamps(), this.layoutItems(e, !0), this.reveal(e), this.layoutItems(n)
            }
        }, h.reveal = function(t) {
            if (this._emitCompleteOnItems("reveal", t), t && t.length) {
                var e = this.updateStagger();
                t.forEach(function(t, n) { t.stagger(n * e), t.reveal() })
            }
        }, h.hide = function(t) {
            if (this._emitCompleteOnItems("hide", t), t && t.length) {
                var e = this.updateStagger();
                t.forEach(function(t, n) { t.stagger(n * e), t.hide() })
            }
        }, h.revealItemElements = function(t) {
            var e = this.getItems(t);
            this.reveal(e)
        }, h.hideItemElements = function(t) {
            var e = this.getItems(t);
            this.hide(e)
        }, h.getItem = function(t) { for (var e = 0; e < this.items.length; e++) { var n = this.items[e]; if (n.element == t) return n } }, h.getItems = function(t) {
            t = i.makeArray(t);
            var e = [];
            return t.forEach(function(t) {
                var n = this.getItem(t);
                n && e.push(n)
            }, this), e
        }, h.remove = function(t) {
            var e = this.getItems(t);
            this._emitCompleteOnItems("remove", e), e && e.length && e.forEach(function(t) { t.remove(), i.removeFrom(this.items, t) }, this)
        }, h.destroy = function() {
            var t = this.element.style;
            t.height = "", t.position = "", t.width = "", this.items.forEach(function(t) { t.destroy() }), this.unbindResize();
            var e = this.element.outlayerGUID;
            delete f[e], delete this.element.outlayerGUID, u && u.removeData(this.element, this.constructor.namespace)
        }, o.data = function(t) { t = i.getQueryElement(t); var e = t && t.outlayerGUID; return e && f[e] }, o.create = function(t, e) { var n = s(o); return n.defaults = i.extend({}, o.defaults), i.extend(n.defaults, e), n.compatOptions = i.extend({}, o.compatOptions), n.namespace = t, n.data = o.data, n.Item = s(r), i.htmlInit(n, t), u && u.bridget && u.bridget(t, n), n };
        var p = { ms: 1, s: 1e3 };
        return o.Item = r, o
    })
}, function(t, e, n) {
    var i, r;
    ! function(o, s) { i = [n(45)], r = function(t) { return s(o, t) }.apply(e, i), !(void 0 !== r && (t.exports = r)) }(window, function(t, e) {
        "use strict";
        var n = {};
        n.extend = function(t, e) { for (var n in e) t[n] = e[n]; return t }, n.modulo = function(t, e) { return (t % e + e) % e };
        var i = Array.prototype.slice;
        n.makeArray = function(t) { if (Array.isArray(t)) return t; if (null === t || void 0 === t) return []; var e = "object" == typeof t && "number" == typeof t.length; return e ? i.call(t) : [t] }, n.removeFrom = function(t, e) {
            var n = t.indexOf(e);
            n != -1 && t.splice(n, 1)
        }, n.getParent = function(t, n) {
            for (; t.parentNode && t != document.body;)
                if (t = t.parentNode, e(t, n)) return t
        }, n.getQueryElement = function(t) { return "string" == typeof t ? document.querySelector(t) : t }, n.handleEvent = function(t) {
            var e = "on" + t.type;
            this[e] && this[e](t)
        }, n.filterFindElements = function(t, i) {
            t = n.makeArray(t);
            var r = [];
            return t.forEach(function(t) {
                if (t instanceof HTMLElement) {
                    if (!i) return void r.push(t);
                    e(t, i) && r.push(t);
                    for (var n = t.querySelectorAll(i), o = 0; o < n.length; o++) r.push(n[o])
                }
            }), r
        }, n.debounceMethod = function(t, e, n) {
            n = n || 100;
            var i = t.prototype[e],
                r = e + "Timeout";
            t.prototype[e] = function() {
                var t = this[r];
                clearTimeout(t);
                var e = arguments,
                    o = this;
                this[r] = setTimeout(function() { i.apply(o, e), delete o[r] }, n)
            }
        }, n.docReady = function(t) { var e = document.readyState; "complete" == e || "interactive" == e ? setTimeout(t) : document.addEventListener("DOMContentLoaded", t) }, n.toDashed = function(t) { return t.replace(/(.)([A-Z])/g, function(t, e, n) { return e + "-" + n }).toLowerCase() };
        var r = t.console;
        return n.htmlInit = function(e, i) {
            n.docReady(function() {
                var o = n.toDashed(i),
                    s = "data-" + o,
                    a = document.querySelectorAll("[" + s + "]"),
                    l = document.querySelectorAll(".js-" + o),
                    u = n.makeArray(a).concat(n.makeArray(l)),
                    c = s + "-options",
                    d = t.jQuery;
                u.forEach(function(t) {
                    var n, o = t.getAttribute(s) || t.getAttribute(c);
                    try { n = o && JSON.parse(o) } catch (a) { return void(r && r.error("Error parsing " + s + " on " + t.className + ": " + a)) }
                    var l = new e(t, n);
                    d && d.data(t, i, l)
                })
            })
        }, n
    })
}, function(t, e, n) {
    var i, r;
    ! function(o, s) {
        "use strict";
        i = s, r = "function" == typeof i ? i.call(e, n, e, t) : i, !(void 0 !== r && (t.exports = r))
    }(window, function() {
        "use strict";
        var t = function() {
            var t = window.Element.prototype;
            if (t.matches) return "matches";
            if (t.matchesSelector) return "matchesSelector";
            for (var e = ["webkit", "moz", "ms", "o"], n = 0; n < e.length; n++) {
                var i = e[n],
                    r = i + "MatchesSelector";
                if (t[r]) return r
            }
        }();
        return function(e, n) { return e[t](n) }
    })
}, function(t, e, n) {
    var i, r, o;
    ! function(s, a) { r = [n(7), n(2)], i = a, o = "function" == typeof i ? i.apply(e, r) : i, !(void 0 !== o && (t.exports = o)) }(window, function(t, e) {
        "use strict";

        function n(t) { for (var e in t) return !1; return e = null, !0 }

        function i(t, e) { t && (this.element = t, this.layout = e, this.position = { x: 0, y: 0 }, this._create()) }

        function r(t) { return t.replace(/([A-Z])/g, function(t) { return "-" + t.toLowerCase() }) }
        var o = document.documentElement.style,
            s = "string" == typeof o.transition ? "transition" : "WebkitTransition",
            a = "string" == typeof o.transform ? "transform" : "WebkitTransform",
            l = { WebkitTransition: "webkitTransitionEnd", transition: "transitionend" }[s],
            u = { transform: a, transition: s, transitionDuration: s + "Duration", transitionProperty: s + "Property", transitionDelay: s + "Delay" },
            c = i.prototype = Object.create(t.prototype);
        c.constructor = i, c._create = function() { this._transn = { ingProperties: {}, clean: {}, onEnd: {} }, this.css({ position: "absolute" }) }, c.handleEvent = function(t) {
            var e = "on" + t.type;
            this[e] && this[e](t)
        }, c.getSize = function() { this.size = e(this.element) }, c.css = function(t) {
            var e = this.element.style;
            for (var n in t) {
                var i = u[n] || n;
                e[i] = t[n]
            }
        }, c.getPosition = function() {
            var t = getComputedStyle(this.element),
                e = this.layout._getOption("originLeft"),
                n = this.layout._getOption("originTop"),
                i = t[e ? "left" : "right"],
                r = t[n ? "top" : "bottom"],
                o = parseFloat(i),
                s = parseFloat(r),
                a = this.layout.size;
            i.indexOf("%") != -1 && (o = o / 100 * a.width), r.indexOf("%") != -1 && (s = s / 100 * a.height), o = isNaN(o) ? 0 : o, s = isNaN(s) ? 0 : s, o -= e ? a.paddingLeft : a.paddingRight, s -= n ? a.paddingTop : a.paddingBottom, this.position.x = o, this.position.y = s
        }, c.layoutPosition = function() {
            var t = this.layout.size,
                e = {},
                n = this.layout._getOption("originLeft"),
                i = this.layout._getOption("originTop"),
                r = n ? "paddingLeft" : "paddingRight",
                o = n ? "left" : "right",
                s = n ? "right" : "left",
                a = this.position.x + t[r];
            e[o] = this.getXValue(a), e[s] = "";
            var l = i ? "paddingTop" : "paddingBottom",
                u = i ? "top" : "bottom",
                c = i ? "bottom" : "top",
                d = this.position.y + t[l];
            e[u] = this.getYValue(d), e[c] = "", this.css(e), this.emitEvent("layout", [this])
        }, c.getXValue = function(t) { var e = this.layout._getOption("horizontal"); return this.layout.options.percentPosition && !e ? t / this.layout.size.width * 100 + "%" : t + "px" }, c.getYValue = function(t) { var e = this.layout._getOption("horizontal"); return this.layout.options.percentPosition && e ? t / this.layout.size.height * 100 + "%" : t + "px" }, c._transitionTo = function(t, e) {
            this.getPosition();
            var n = this.position.x,
                i = this.position.y,
                r = t == this.position.x && e == this.position.y;
            if (this.setPosition(t, e), r && !this.isTransitioning) return void this.layoutPosition();
            var o = t - n,
                s = e - i,
                a = {};
            a.transform = this.getTranslate(o, s), this.transition({ to: a, onTransitionEnd: { transform: this.layoutPosition }, isCleaning: !0 })
        }, c.getTranslate = function(t, e) {
            var n = this.layout._getOption("originLeft"),
                i = this.layout._getOption("originTop");
            return t = n ? t : -t, e = i ? e : -e, "translate3d(" + t + "px, " + e + "px, 0)"
        }, c.goTo = function(t, e) { this.setPosition(t, e), this.layoutPosition() }, c.moveTo = c._transitionTo, c.setPosition = function(t, e) { this.position.x = parseFloat(t), this.position.y = parseFloat(e) }, c._nonTransition = function(t) { this.css(t.to), t.isCleaning && this._removeStyles(t.to); for (var e in t.onTransitionEnd) t.onTransitionEnd[e].call(this) }, c.transition = function(t) {
            if (!parseFloat(this.layout.options.transitionDuration)) return void this._nonTransition(t);
            var e = this._transn;
            for (var n in t.onTransitionEnd) e.onEnd[n] = t.onTransitionEnd[n];
            for (n in t.to) e.ingProperties[n] = !0, t.isCleaning && (e.clean[n] = !0);
            if (t.from) {
                this.css(t.from);
                var i = this.element.offsetHeight;
                i = null
            }
            this.enableTransition(t.to), this.css(t.to), this.isTransitioning = !0
        };
        var d = "opacity," + r(a);
        c.enableTransition = function() {
            if (!this.isTransitioning) {
                var t = this.layout.options.transitionDuration;
                t = "number" == typeof t ? t + "ms" : t, this.css({ transitionProperty: d, transitionDuration: t, transitionDelay: this.staggerDelay || 0 }), this.element.addEventListener(l, this, !1)
            }
        }, c.onwebkitTransitionEnd = function(t) { this.ontransitionend(t) }, c.onotransitionend = function(t) { this.ontransitionend(t) };
        var f = { "-webkit-transform": "transform" };
        c.ontransitionend = function(t) {
            if (t.target === this.element) {
                var e = this._transn,
                    i = f[t.propertyName] || t.propertyName;
                if (delete e.ingProperties[i], n(e.ingProperties) && this.disableTransition(), i in e.clean && (this.element.style[t.propertyName] = "", delete e.clean[i]), i in e.onEnd) {
                    var r = e.onEnd[i];
                    r.call(this), delete e.onEnd[i]
                }
                this.emitEvent("transitionEnd", [this])
            }
        }, c.disableTransition = function() { this.removeTransitionStyles(), this.element.removeEventListener(l, this, !1), this.isTransitioning = !1 }, c._removeStyles = function(t) {
            var e = {};
            for (var n in t) e[n] = "";
            this.css(e)
        };
        var h = { transitionProperty: "", transitionDuration: "", transitionDelay: "" };
        return c.removeTransitionStyles = function() { this.css(h) }, c.stagger = function(t) { t = isNaN(t) ? 0 : t, this.staggerDelay = t + "ms" }, c.removeElem = function() { this.element.parentNode.removeChild(this.element), this.css({ display: "" }), this.emitEvent("remove", [this]) }, c.remove = function() { return s && parseFloat(this.layout.options.transitionDuration) ? (this.once("transitionEnd", function() { this.removeElem() }), void this.hide()) : void this.removeElem() }, c.reveal = function() {
            delete this.isHidden, this.css({ display: "" });
            var t = this.layout.options,
                e = {},
                n = this.getHideRevealTransitionEndProperty("visibleStyle");
            e[n] = this.onRevealTransitionEnd, this.transition({ from: t.hiddenStyle, to: t.visibleStyle, isCleaning: !0, onTransitionEnd: e })
        }, c.onRevealTransitionEnd = function() { this.isHidden || this.emitEvent("reveal") }, c.getHideRevealTransitionEndProperty = function(t) { var e = this.layout.options[t]; if (e.opacity) return "opacity"; for (var n in e) return n }, c.hide = function() {
            this.isHidden = !0, this.css({ display: "" });
            var t = this.layout.options,
                e = {},
                n = this.getHideRevealTransitionEndProperty("hiddenStyle");
            e[n] = this.onHideTransitionEnd, this.transition({ from: t.visibleStyle, to: t.hiddenStyle, isCleaning: !0, onTransitionEnd: e })
        }, c.onHideTransitionEnd = function() { this.isHidden && (this.css({ display: "none" }), this.emitEvent("hide")) }, c.destroy = function() { this.css({ position: "", left: "", right: "", top: "", bottom: "", transition: "", transform: "" }) }, i
    })
}, function(t, e, n) {
    var i, r, o, s, a, i, l, u, c, d, i, f, i, h, p, i, g, i, h, m, i, h, v, i, h, y, i, h, b, i, h, w, i, h, S, i, r;
    ! function(o, s) { i = [n(0)], r = function(t) { return s(o, t) }.apply(e, i), !(void 0 !== r && (t.exports = r)) }(window, function(t, e) {
        "use strict";

        function n(n, o, a) {
            function l(t, e, i) {
                var r, o = "$()." + n + '("' + e + '")';
                return t.each(function(t, l) {
                    var u = a.data(l, n);
                    if (!u) return void s(n + " not initialized. Cannot call methods, i.e. " + o);
                    var c = u[e];
                    if (!c || "_" == e.charAt(0)) return void s(o + " is not a valid method");
                    var d = c.apply(u, i);
                    r = void 0 === r ? d : r
                }), void 0 !== r ? r : t
            }

            function u(t, e) {
                t.each(function(t, i) {
                    var r = a.data(i, n);
                    r ? (r.option(e), r._init()) : (r = new o(i, e), a.data(i, n, r))
                })
            }
            a = a || e || t.jQuery, a && (o.prototype.option || (o.prototype.option = function(t) { a.isPlainObject(t) && (this.options = a.extend(!0, this.options, t)) }), a.fn[n] = function(t) { if ("string" == typeof t) { var e = r.call(arguments, 1); return l(this, t, e) } return u(this, t), this }, i(a))
        }

        function i(t) {!t || t && t.bridget || (t.bridget = n) }
        var r = Array.prototype.slice,
            o = t.console,
            s = "undefined" == typeof o ? function() {} : function(t) { o.error(t) };
        return i(e || t.jQuery), n
    }),
    function(t, e) { s = e, a = { id: "ev-emitter/ev-emitter", exports: {}, loaded: !1 }, o = "function" == typeof s ? s.call(a.exports, n, a.exports, a) : s, a.loaded = !0, !(void 0 === o && (o = a.exports)) }("undefined" != typeof window ? window : this, function() {
        function t() {}
        var e = t.prototype;
        return e.on = function(t, e) {
            if (t && e) {
                var n = this._events = this._events || {},
                    i = n[t] = n[t] || [];
                return i.indexOf(e) == -1 && i.push(e), this
            }
        }, e.once = function(t, e) {
            if (t && e) {
                this.on(t, e);
                var n = this._onceEvents = this._onceEvents || {},
                    i = n[t] = n[t] || {};
                return i[e] = !0, this
            }
        }, e.off = function(t, e) { var n = this._events && this._events[t]; if (n && n.length) { var i = n.indexOf(e); return i != -1 && n.splice(i, 1), this } }, e.emitEvent = function(t, e) {
            var n = this._events && this._events[t];
            if (n && n.length) {
                var i = 0,
                    r = n[i];
                e = e || [];
                for (var o = this._onceEvents && this._onceEvents[t]; r;) {
                    var s = o && o[r];
                    s && (this.off(t, r), delete o[r]), r.apply(this, e), i += s ? 0 : 1, r = n[i]
                }
                return this
            }
        }, t
    }),
    function(t, n) {
        "use strict";
        i = [], !(l = function() { return n() }.apply(e, i))
    }(window, function() {
        "use strict";

        function t(t) {
            var e = parseFloat(t),
                n = t.indexOf("%") == -1 && !isNaN(e);
            return n && e
        }

        function e() {}

        function n() {
            for (var t = { width: 0, height: 0, innerWidth: 0, innerHeight: 0, outerWidth: 0, outerHeight: 0 }, e = 0; e < u; e++) {
                var n = l[e];
                t[n] = 0
            }
            return t
        }

        function i(t) { var e = getComputedStyle(t); return e || a("Style returned " + e + ". Are you running this code in a hidden iframe on Firefox? See http://bit.ly/getsizebug1"), e }

        function r() {
            if (!c) {
                c = !0;
                var e = document.createElement("div");
                e.style.width = "200px", e.style.padding = "1px 2px 3px 4px", e.style.borderStyle = "solid", e.style.borderWidth = "1px 2px 3px 4px", e.style.boxSizing = "border-box";
                var n = document.body || document.documentElement;
                n.appendChild(e);
                var r = i(e);
                o.isBoxSizeOuter = s = 200 == t(r.width), n.removeChild(e)
            }
        }

        function o(e) {
            if (r(), "string" == typeof e && (e = document.querySelector(e)), e && "object" == typeof e && e.nodeType) {
                var o = i(e);
                if ("none" == o.display) return n();
                var a = {};
                a.width = e.offsetWidth, a.height = e.offsetHeight;
                for (var c = a.isBorderBox = "border-box" == o.boxSizing, d = 0; d < u; d++) {
                    var f = l[d],
                        h = o[f],
                        p = parseFloat(h);
                    a[f] = isNaN(p) ? 0 : p
                }
                var g = a.paddingLeft + a.paddingRight,
                    m = a.paddingTop + a.paddingBottom,
                    v = a.marginLeft + a.marginRight,
                    y = a.marginTop + a.marginBottom,
                    b = a.borderLeftWidth + a.borderRightWidth,
                    w = a.borderTopWidth + a.borderBottomWidth,
                    S = c && s,
                    _ = t(o.width);
                _ !== !1 && (a.width = _ + (S ? 0 : g + b));
                var C = t(o.height);
                return C !== !1 && (a.height = C + (S ? 0 : m + w)), a.innerWidth = a.width - (g + b), a.innerHeight = a.height - (m + w), a.outerWidth = a.width + v, a.outerHeight = a.height + y, a
            }
        }
        var s, a = "undefined" == typeof console ? e : function(t) { console.error(t) },
            l = ["paddingLeft", "paddingRight", "paddingTop", "paddingBottom", "marginLeft", "marginRight", "marginTop", "marginBottom", "borderLeftWidth", "borderRightWidth", "borderTopWidth", "borderBottomWidth"],
            u = l.length,
            c = !1;
        return o
    }),
    function(t, e) {
        "use strict";
        c = e, d = { id: "desandro-matches-selector/matches-selector", exports: {}, loaded: !1 }, u = "function" == typeof c ? c.call(d.exports, n, d.exports, d) : c, d.loaded = !0, !(void 0 === u && (u = d.exports))
    }(window, function() {
        "use strict";
        var t = function() {
            var t = window.Element.prototype;
            if (t.matches) return "matches";
            if (t.matchesSelector) return "matchesSelector";
            for (var e = ["webkit", "moz", "ms", "o"], n = 0; n < e.length; n++) {
                var i = e[n],
                    r = i + "MatchesSelector";
                if (t[r]) return r
            }
        }();
        return function(e, n) { return e[t](n) }
    }),
    function(t, n) { i = [u], !(f = function(e) { return n(t, e) }.apply(e, i)) }(window, function(t, e) {
        var n = {};
        n.extend = function(t, e) { for (var n in e) t[n] = e[n]; return t }, n.modulo = function(t, e) { return (t % e + e) % e }, n.makeArray = function(t) {
            var e = [];
            if (Array.isArray(t)) e = t;
            else if (t && "object" == typeof t && "number" == typeof t.length)
                for (var n = 0; n < t.length; n++) e.push(t[n]);
            else e.push(t);
            return e
        }, n.removeFrom = function(t, e) {
            var n = t.indexOf(e);
            n != -1 && t.splice(n, 1)
        }, n.getParent = function(t, n) {
            for (; t != document.body;)
                if (t = t.parentNode, e(t, n)) return t
        }, n.getQueryElement = function(t) { return "string" == typeof t ? document.querySelector(t) : t }, n.handleEvent = function(t) {
            var e = "on" + t.type;
            this[e] && this[e](t)
        }, n.filterFindElements = function(t, i) {
            t = n.makeArray(t);
            var r = [];
            return t.forEach(function(t) {
                if (t instanceof HTMLElement) {
                    if (!i) return void r.push(t);
                    e(t, i) && r.push(t);
                    for (var n = t.querySelectorAll(i), o = 0; o < n.length; o++) r.push(n[o])
                }
            }), r
        }, n.debounceMethod = function(t, e, n) {
            var i = t.prototype[e],
                r = e + "Timeout";
            t.prototype[e] = function() {
                var t = this[r];
                t && clearTimeout(t);
                var e = arguments,
                    o = this;
                this[r] = setTimeout(function() { i.apply(o, e), delete o[r] }, n || 100)
            }
        }, n.docReady = function(t) { var e = document.readyState; "complete" == e || "interactive" == e ? setTimeout(t) : document.addEventListener("DOMContentLoaded", t) }, n.toDashed = function(t) { return t.replace(/(.)([A-Z])/g, function(t, e, n) { return e + "-" + n }).toLowerCase() };
        var i = t.console;
        return n.htmlInit = function(e, r) {
            n.docReady(function() {
                var o = n.toDashed(r),
                    s = "data-" + o,
                    a = document.querySelectorAll("[" + s + "]"),
                    l = document.querySelectorAll(".js-" + o),
                    u = n.makeArray(a).concat(n.makeArray(l)),
                    c = s + "-options",
                    d = t.jQuery;
                u.forEach(function(t) {
                    var n, o = t.getAttribute(s) || t.getAttribute(c);
                    try { n = o && JSON.parse(o) } catch (a) { return void(i && i.error("Error parsing " + s + " on " + t.className + ": " + a)) }
                    var l = new e(t, n);
                    d && d.data(t, r, l)
                })
            })
        }, n
    }),
    function(t, n) { i = [o, l], h = n, !(p = "function" == typeof h ? h.apply(e, i) : h) }(window, function(t, e) {
        "use strict";

        function n(t) { for (var e in t) return !1; return e = null, !0 }

        function i(t, e) { t && (this.element = t, this.layout = e, this.position = { x: 0, y: 0 }, this._create()) }

        function r(t) { return t.replace(/([A-Z])/g, function(t) { return "-" + t.toLowerCase() }) }
        var o = document.documentElement.style,
            s = "string" == typeof o.transition ? "transition" : "WebkitTransition",
            a = "string" == typeof o.transform ? "transform" : "WebkitTransform",
            l = { WebkitTransition: "webkitTransitionEnd", transition: "transitionend" }[s],
            u = { transform: a, transition: s, transitionDuration: s + "Duration", transitionProperty: s + "Property", transitionDelay: s + "Delay" },
            c = i.prototype = Object.create(t.prototype);
        c.constructor = i, c._create = function() { this._transn = { ingProperties: {}, clean: {}, onEnd: {} }, this.css({ position: "absolute" }) }, c.handleEvent = function(t) {
            var e = "on" + t.type;
            this[e] && this[e](t)
        }, c.getSize = function() { this.size = e(this.element) }, c.css = function(t) {
            var e = this.element.style;
            for (var n in t) {
                var i = u[n] || n;
                e[i] = t[n]
            }
        }, c.getPosition = function() {
            var t = getComputedStyle(this.element),
                e = this.layout._getOption("originLeft"),
                n = this.layout._getOption("originTop"),
                i = t[e ? "left" : "right"],
                r = t[n ? "top" : "bottom"],
                o = this.layout.size,
                s = i.indexOf("%") != -1 ? parseFloat(i) / 100 * o.width : parseInt(i, 10),
                a = r.indexOf("%") != -1 ? parseFloat(r) / 100 * o.height : parseInt(r, 10);
            s = isNaN(s) ? 0 : s, a = isNaN(a) ? 0 : a, s -= e ? o.paddingLeft : o.paddingRight, a -= n ? o.paddingTop : o.paddingBottom, this.position.x = s, this.position.y = a
        }, c.layoutPosition = function() {
            var t = this.layout.size,
                e = {},
                n = this.layout._getOption("originLeft"),
                i = this.layout._getOption("originTop"),
                r = n ? "paddingLeft" : "paddingRight",
                o = n ? "left" : "right",
                s = n ? "right" : "left",
                a = this.position.x + t[r];
            e[o] = this.getXValue(a), e[s] = "";
            var l = i ? "paddingTop" : "paddingBottom",
                u = i ? "top" : "bottom",
                c = i ? "bottom" : "top",
                d = this.position.y + t[l];
            e[u] = this.getYValue(d), e[c] = "", this.css(e), this.emitEvent("layout", [this])
        }, c.getXValue = function(t) { var e = this.layout._getOption("horizontal"); return this.layout.options.percentPosition && !e ? t / this.layout.size.width * 100 + "%" : t + "px" }, c.getYValue = function(t) { var e = this.layout._getOption("horizontal"); return this.layout.options.percentPosition && e ? t / this.layout.size.height * 100 + "%" : t + "px" }, c._transitionTo = function(t, e) {
            this.getPosition();
            var n = this.position.x,
                i = this.position.y,
                r = parseInt(t, 10),
                o = parseInt(e, 10),
                s = r === this.position.x && o === this.position.y;
            if (this.setPosition(t, e), s && !this.isTransitioning) return void this.layoutPosition();
            var a = t - n,
                l = e - i,
                u = {};
            u.transform = this.getTranslate(a, l), this.transition({ to: u, onTransitionEnd: { transform: this.layoutPosition }, isCleaning: !0 })
        }, c.getTranslate = function(t, e) {
            var n = this.layout._getOption("originLeft"),
                i = this.layout._getOption("originTop");
            return t = n ? t : -t, e = i ? e : -e, "translate3d(" + t + "px, " + e + "px, 0)"
        }, c.goTo = function(t, e) { this.setPosition(t, e), this.layoutPosition() }, c.moveTo = c._transitionTo, c.setPosition = function(t, e) { this.position.x = parseInt(t, 10), this.position.y = parseInt(e, 10) }, c._nonTransition = function(t) { this.css(t.to), t.isCleaning && this._removeStyles(t.to); for (var e in t.onTransitionEnd) t.onTransitionEnd[e].call(this) }, c.transition = function(t) {
            if (!parseFloat(this.layout.options.transitionDuration)) return void this._nonTransition(t);
            var e = this._transn;
            for (var n in t.onTransitionEnd) e.onEnd[n] = t.onTransitionEnd[n];
            for (n in t.to) e.ingProperties[n] = !0, t.isCleaning && (e.clean[n] = !0);
            if (t.from) {
                this.css(t.from);
                var i = this.element.offsetHeight;
                i = null
            }
            this.enableTransition(t.to), this.css(t.to), this.isTransitioning = !0
        };
        var d = "opacity," + r(a);
        c.enableTransition = function() {
            if (!this.isTransitioning) {
                var t = this.layout.options.transitionDuration;
                t = "number" == typeof t ? t + "ms" : t, this.css({ transitionProperty: d, transitionDuration: t, transitionDelay: this.staggerDelay || 0 }), this.element.addEventListener(l, this, !1)
            }
        }, c.onwebkitTransitionEnd = function(t) { this.ontransitionend(t) }, c.onotransitionend = function(t) { this.ontransitionend(t) };
        var f = { "-webkit-transform": "transform" };
        c.ontransitionend = function(t) {
            if (t.target === this.element) {
                var e = this._transn,
                    i = f[t.propertyName] || t.propertyName;
                if (delete e.ingProperties[i], n(e.ingProperties) && this.disableTransition(), i in e.clean && (this.element.style[t.propertyName] = "", delete e.clean[i]), i in e.onEnd) {
                    var r = e.onEnd[i];
                    r.call(this), delete e.onEnd[i]
                }
                this.emitEvent("transitionEnd", [this])
            }
        }, c.disableTransition = function() { this.removeTransitionStyles(), this.element.removeEventListener(l, this, !1), this.isTransitioning = !1 }, c._removeStyles = function(t) {
            var e = {};
            for (var n in t) e[n] = "";
            this.css(e)
        };
        var h = { transitionProperty: "", transitionDuration: "", transitionDelay: "" };
        return c.removeTransitionStyles = function() { this.css(h) }, c.stagger = function(t) { t = isNaN(t) ? 0 : t, this.staggerDelay = t + "ms" }, c.removeElem = function() { this.element.parentNode.removeChild(this.element), this.css({ display: "" }), this.emitEvent("remove", [this]) }, c.remove = function() { return s && parseFloat(this.layout.options.transitionDuration) ? (this.once("transitionEnd", function() { this.removeElem() }), void this.hide()) : void this.removeElem() }, c.reveal = function() {
            delete this.isHidden, this.css({ display: "" });
            var t = this.layout.options,
                e = {},
                n = this.getHideRevealTransitionEndProperty("visibleStyle");
            e[n] = this.onRevealTransitionEnd, this.transition({ from: t.hiddenStyle, to: t.visibleStyle, isCleaning: !0, onTransitionEnd: e })
        }, c.onRevealTransitionEnd = function() { this.isHidden || this.emitEvent("reveal") }, c.getHideRevealTransitionEndProperty = function(t) { var e = this.layout.options[t]; if (e.opacity) return "opacity"; for (var n in e) return n }, c.hide = function() {
            this.isHidden = !0, this.css({ display: "" });
            var t = this.layout.options,
                e = {},
                n = this.getHideRevealTransitionEndProperty("hiddenStyle");
            e[n] = this.onHideTransitionEnd, this.transition({ from: t.visibleStyle, to: t.hiddenStyle, isCleaning: !0, onTransitionEnd: e })
        }, c.onHideTransitionEnd = function() { this.isHidden && (this.css({ display: "none" }), this.emitEvent("hide")) }, c.destroy = function() { this.css({ position: "", left: "", right: "", top: "", bottom: "", transition: "", transform: "" }) }, i
    }),
    function(t, n) {
        "use strict";
        i = [o, l, f, p], !(g = function(e, i, r, o) { return n(t, e, i, r, o) }.apply(e, i))
    }(window, function(t, e, n, i, r) {
        "use strict";

        function o(t, e) {
            var n = i.getQueryElement(t);
            if (!n) return void(l && l.error("Bad element for " + this.constructor.namespace + ": " + (n || t)));
            this.element = n, u && (this.$element = u(this.element)), this.options = i.extend({}, this.constructor.defaults), this.option(e);
            var r = ++d;
            this.element.outlayerGUID = r, f[r] = this, this._create();
            var o = this._getOption("initLayout");
            o && this.layout()
        }

        function s(t) {
            function e() { t.apply(this, arguments) }
            return e.prototype = Object.create(t.prototype), e.prototype.constructor = e, e
        }

        function a(t) {
            if ("number" == typeof t) return t;
            var e = t.match(/(^\d*\.?\d*)(\w*)/),
                n = e && e[1],
                i = e && e[2];
            if (!n.length) return 0;
            n = parseFloat(n);
            var r = p[i] || 1;
            return n * r
        }
        var l = t.console,
            u = t.jQuery,
            c = function() {},
            d = 0,
            f = {};
        o.namespace = "outlayer", o.Item = r, o.defaults = { containerStyle: { position: "relative" }, initLayout: !0, originLeft: !0, originTop: !0, resize: !0, resizeContainer: !0, transitionDuration: "0.4s", hiddenStyle: { opacity: 0, transform: "scale(0.001)" }, visibleStyle: { opacity: 1, transform: "scale(1)" } };
        var h = o.prototype;
        i.extend(h, e.prototype), h.option = function(t) { i.extend(this.options, t) }, h._getOption = function(t) { var e = this.constructor.compatOptions[t]; return e && void 0 !== this.options[e] ? this.options[e] : this.options[t] }, o.compatOptions = { initLayout: "isInitLayout", horizontal: "isHorizontal", layoutInstant: "isLayoutInstant", originLeft: "isOriginLeft", originTop: "isOriginTop", resize: "isResizeBound", resizeContainer: "isResizingContainer" }, h._create = function() {
            this.reloadItems(), this.stamps = [], this.stamp(this.options.stamp), i.extend(this.element.style, this.options.containerStyle);
            var t = this._getOption("resize");
            t && this.bindResize()
        }, h.reloadItems = function() { this.items = this._itemize(this.element.children) }, h._itemize = function(t) {
            for (var e = this._filterFindItemElements(t), n = this.constructor.Item, i = [], r = 0; r < e.length; r++) {
                var o = e[r],
                    s = new n(o, this);
                i.push(s)
            }
            return i
        }, h._filterFindItemElements = function(t) { return i.filterFindElements(t, this.options.itemSelector) }, h.getItemElements = function() { return this.items.map(function(t) { return t.element }) }, h.layout = function() {
            this._resetLayout(), this._manageStamps();
            var t = this._getOption("layoutInstant"),
                e = void 0 !== t ? t : !this._isLayoutInited;
            this.layoutItems(this.items, e), this._isLayoutInited = !0
        }, h._init = h.layout, h._resetLayout = function() { this.getSize() }, h.getSize = function() { this.size = n(this.element) }, h._getMeasurement = function(t, e) {
            var i, r = this.options[t];
            r ? ("string" == typeof r ? i = this.element.querySelector(r) : r instanceof HTMLElement && (i = r), this[t] = i ? n(i)[e] : r) : this[t] = 0
        }, h.layoutItems = function(t, e) { t = this._getItemsForLayout(t), this._layoutItems(t, e), this._postLayout() }, h._getItemsForLayout = function(t) { return t.filter(function(t) { return !t.isIgnored }) }, h._layoutItems = function(t, e) {
            if (this._emitCompleteOnItems("layout", t), t && t.length) {
                var n = [];
                t.forEach(function(t) {
                    var i = this._getItemLayoutPosition(t);
                    i.item = t, i.isInstant = e || t.isLayoutInstant, n.push(i)
                }, this), this._processLayoutQueue(n)
            }
        }, h._getItemLayoutPosition = function() { return { x: 0, y: 0 } }, h._processLayoutQueue = function(t) { this.updateStagger(), t.forEach(function(t, e) { this._positionItem(t.item, t.x, t.y, t.isInstant, e) }, this) }, h.updateStagger = function() { var t = this.options.stagger; return null === t || void 0 === t ? void(this.stagger = 0) : (this.stagger = a(t), this.stagger) }, h._positionItem = function(t, e, n, i, r) { i ? t.goTo(e, n) : (t.stagger(r * this.stagger), t.moveTo(e, n)) }, h._postLayout = function() { this.resizeContainer() }, h.resizeContainer = function() {
            var t = this._getOption("resizeContainer");
            if (t) {
                var e = this._getContainerSize();
                e && (this._setContainerMeasure(e.width, !0), this._setContainerMeasure(e.height, !1))
            }
        }, h._getContainerSize = c, h._setContainerMeasure = function(t, e) {
            if (void 0 !== t) {
                var n = this.size;
                n.isBorderBox && (t += e ? n.paddingLeft + n.paddingRight + n.borderLeftWidth + n.borderRightWidth : n.paddingBottom + n.paddingTop + n.borderTopWidth + n.borderBottomWidth), t = Math.max(t, 0), this.element.style[e ? "width" : "height"] = t + "px"
            }
        }, h._emitCompleteOnItems = function(t, e) {
            function n() { r.dispatchEvent(t + "Complete", null, [e]) }

            function i() { s++, s == o && n() }
            var r = this,
                o = e.length;
            if (!e || !o) return void n();
            var s = 0;
            e.forEach(function(e) { e.once(t, i) })
        }, h.dispatchEvent = function(t, e, n) {
            var i = e ? [e].concat(n) : n;
            if (this.emitEvent(t, i), u)
                if (this.$element = this.$element || u(this.element), e) {
                    var r = u.Event(e);
                    r.type = t, this.$element.trigger(r, n)
                } else this.$element.trigger(t, n)
        }, h.ignore = function(t) {
            var e = this.getItem(t);
            e && (e.isIgnored = !0)
        }, h.unignore = function(t) {
            var e = this.getItem(t);
            e && delete e.isIgnored
        }, h.stamp = function(t) { t = this._find(t), t && (this.stamps = this.stamps.concat(t), t.forEach(this.ignore, this)) }, h.unstamp = function(t) { t = this._find(t), t && t.forEach(function(t) { i.removeFrom(this.stamps, t), this.unignore(t) }, this) }, h._find = function(t) { if (t) return "string" == typeof t && (t = this.element.querySelectorAll(t)), t = i.makeArray(t) }, h._manageStamps = function() { this.stamps && this.stamps.length && (this._getBoundingRect(), this.stamps.forEach(this._manageStamp, this)) }, h._getBoundingRect = function() {
            var t = this.element.getBoundingClientRect(),
                e = this.size;
            this._boundingRect = { left: t.left + e.paddingLeft + e.borderLeftWidth, top: t.top + e.paddingTop + e.borderTopWidth, right: t.right - (e.paddingRight + e.borderRightWidth), bottom: t.bottom - (e.paddingBottom + e.borderBottomWidth) }
        }, h._manageStamp = c, h._getElementOffset = function(t) {
            var e = t.getBoundingClientRect(),
                i = this._boundingRect,
                r = n(t),
                o = { left: e.left - i.left - r.marginLeft, top: e.top - i.top - r.marginTop, right: i.right - e.right - r.marginRight, bottom: i.bottom - e.bottom - r.marginBottom };
            return o
        }, h.handleEvent = i.handleEvent, h.bindResize = function() { t.addEventListener("resize", this), this.isResizeBound = !0 }, h.unbindResize = function() { t.removeEventListener("resize", this), this.isResizeBound = !1 }, h.onresize = function() { this.resize() }, i.debounceMethod(o, "onresize", 100), h.resize = function() { this.isResizeBound && this.needsResizeLayout() && this.layout() }, h.needsResizeLayout = function() {
            var t = n(this.element),
                e = this.size && t;
            return e && t.innerWidth !== this.size.innerWidth
        }, h.addItems = function(t) { var e = this._itemize(t); return e.length && (this.items = this.items.concat(e)), e }, h.appended = function(t) {
            var e = this.addItems(t);
            e.length && (this.layoutItems(e, !0), this.reveal(e))
        }, h.prepended = function(t) {
            var e = this._itemize(t);
            if (e.length) {
                var n = this.items.slice(0);
                this.items = e.concat(n), this._resetLayout(), this._manageStamps(), this.layoutItems(e, !0), this.reveal(e), this.layoutItems(n)
            }
        }, h.reveal = function(t) {
            if (this._emitCompleteOnItems("reveal", t), t && t.length) {
                var e = this.updateStagger();
                t.forEach(function(t, n) { t.stagger(n * e), t.reveal() })
            }
        }, h.hide = function(t) {
            if (this._emitCompleteOnItems("hide", t), t && t.length) {
                var e = this.updateStagger();
                t.forEach(function(t, n) { t.stagger(n * e), t.hide() })
            }
        }, h.revealItemElements = function(t) {
            var e = this.getItems(t);
            this.reveal(e)
        }, h.hideItemElements = function(t) {
            var e = this.getItems(t);
            this.hide(e)
        }, h.getItem = function(t) { for (var e = 0; e < this.items.length; e++) { var n = this.items[e]; if (n.element == t) return n } }, h.getItems = function(t) {
            t = i.makeArray(t);
            var e = [];
            return t.forEach(function(t) {
                var n = this.getItem(t);
                n && e.push(n)
            }, this), e
        }, h.remove = function(t) {
            var e = this.getItems(t);
            this._emitCompleteOnItems("remove", e), e && e.length && e.forEach(function(t) { t.remove(), i.removeFrom(this.items, t) }, this)
        }, h.destroy = function() {
            var t = this.element.style;
            t.height = "", t.position = "", t.width = "", this.items.forEach(function(t) { t.destroy() }), this.unbindResize();
            var e = this.element.outlayerGUID;
            delete f[e], delete this.element.outlayerGUID, u && u.removeData(this.element, this.constructor.namespace)
        }, o.data = function(t) { t = i.getQueryElement(t); var e = t && t.outlayerGUID; return e && f[e] }, o.create = function(t, e) { var n = s(o); return n.defaults = i.extend({}, o.defaults), i.extend(n.defaults, e), n.compatOptions = i.extend({}, o.compatOptions), n.namespace = t, n.data = o.data, n.Item = s(r), i.htmlInit(n, t), u && u.bridget && u.bridget(t, n), n };
        var p = { ms: 1, s: 1e3 };
        return o.Item = r, o
    }),
    function(t, n) { i = [g], h = n, !(m = "function" == typeof h ? h.apply(e, i) : h) }(window, function(t) {
        "use strict";

        function e() { t.Item.apply(this, arguments) }
        var n = e.prototype = Object.create(t.Item.prototype),
            i = n._create;
        n._create = function() { this.id = this.layout.itemGUID++, i.call(this), this.sortData = {} }, n.updateSortData = function() {
            if (!this.isIgnored) {
                this.sortData.id = this.id, this.sortData["original-order"] = this.id, this.sortData.random = Math.random();
                var t = this.layout.options.getSortData,
                    e = this.layout._sorters;
                for (var n in t) {
                    var i = e[n];
                    this.sortData[n] = i(this.element, this)
                }
            }
        };
        var r = n.destroy;
        return n.destroy = function() { r.apply(this, arguments), this.css({ display: "" }) }, e
    }),
    function(t, n) { i = [l, g], h = n, !(v = "function" == typeof h ? h.apply(e, i) : h) }(window, function(t, e) {
        "use strict";

        function n(t) { this.isotope = t, t && (this.options = t.options[this.namespace], this.element = t.element, this.items = t.filteredItems, this.size = t.size) }
        var i = n.prototype,
            r = ["_resetLayout", "_getItemLayoutPosition", "_manageStamp", "_getContainerSize", "_getElementOffset", "needsResizeLayout", "_getOption"];
        return r.forEach(function(t) { i[t] = function() { return e.prototype[t].apply(this.isotope, arguments) } }), i.needsVerticalResizeLayout = function() {
            var e = t(this.isotope.element),
                n = this.isotope.size && e;
            return n && e.innerHeight != this.isotope.size.innerHeight
        }, i._getMeasurement = function() { this.isotope._getMeasurement.apply(this, arguments) }, i.getColumnWidth = function() { this.getSegmentSize("column", "Width") }, i.getRowHeight = function() { this.getSegmentSize("row", "Height") }, i.getSegmentSize = function(t, e) {
            var n = t + e,
                i = "outer" + e;
            if (this._getMeasurement(n, i), !this[n]) {
                var r = this.getFirstItemSize();
                this[n] = r && r[i] || this.isotope.size["inner" + e]
            }
        }, i.getFirstItemSize = function() { var e = this.isotope.filteredItems[0]; return e && e.element && t(e.element) }, i.layout = function() { this.isotope.layout.apply(this.isotope, arguments) }, i.getSize = function() { this.isotope.getSize(), this.size = this.isotope.size }, n.modes = {}, n.create = function(t, e) {
            function r() { n.apply(this, arguments) }
            return r.prototype = Object.create(i), r.prototype.constructor = r, e && (r.options = e), r.prototype.namespace = t, n.modes[t] = r, r
        }, n
    }),
    function(t, n) { i = [g, l], h = n, !(y = "function" == typeof h ? h.apply(e, i) : h) }(window, function(t, e) {
        var n = t.create("masonry");
        return n.compatOptions.fitWidth = "isFitWidth", n.prototype._resetLayout = function() {
            this.getSize(), this._getMeasurement("columnWidth", "outerWidth"), this._getMeasurement("gutter", "outerWidth"), this.measureColumns(), this.colYs = [];
            for (var t = 0; t < this.cols; t++) this.colYs.push(0);
            this.maxY = 0
        }, n.prototype.measureColumns = function() {
            if (this.getContainerWidth(), !this.columnWidth) {
                var t = this.items[0],
                    n = t && t.element;
                this.columnWidth = n && e(n).outerWidth || this.containerWidth
            }
            var i = this.columnWidth += this.gutter,
                r = this.containerWidth + this.gutter,
                o = r / i,
                s = i - r % i,
                a = s && s < 1 ? "round" : "floor";
            o = Math[a](o), this.cols = Math.max(o, 1)
        }, n.prototype.getContainerWidth = function() {
            var t = this._getOption("fitWidth"),
                n = t ? this.element.parentNode : this.element,
                i = e(n);
            this.containerWidth = i && i.innerWidth
        }, n.prototype._getItemLayoutPosition = function(t) {
            t.getSize();
            var e = t.size.outerWidth % this.columnWidth,
                n = e && e < 1 ? "round" : "ceil",
                i = Math[n](t.size.outerWidth / this.columnWidth);
            i = Math.min(i, this.cols);
            for (var r = this._getColGroup(i), o = Math.min.apply(Math, r), s = r.indexOf(o), a = { x: this.columnWidth * s, y: o }, l = o + t.size.outerHeight, u = this.cols + 1 - r.length, c = 0; c < u; c++) this.colYs[s + c] = l;
            return a
        }, n.prototype._getColGroup = function(t) {
            if (t < 2) return this.colYs;
            for (var e = [], n = this.cols + 1 - t, i = 0; i < n; i++) {
                var r = this.colYs.slice(i, i + t);
                e[i] = Math.max.apply(Math, r)
            }
            return e
        }, n.prototype._manageStamp = function(t) {
            var n = e(t),
                i = this._getElementOffset(t),
                r = this._getOption("originLeft"),
                o = r ? i.left : i.right,
                s = o + n.outerWidth,
                a = Math.floor(o / this.columnWidth);
            a = Math.max(0, a);
            var l = Math.floor(s / this.columnWidth);
            l -= s % this.columnWidth ? 0 : 1, l = Math.min(this.cols - 1, l);
            for (var u = this._getOption("originTop"), c = (u ? i.top : i.bottom) + n.outerHeight, d = a; d <= l; d++) this.colYs[d] = Math.max(c, this.colYs[d])
        }, n.prototype._getContainerSize = function() { this.maxY = Math.max.apply(Math, this.colYs); var t = { height: this.maxY }; return this._getOption("fitWidth") && (t.width = this._getContainerFitWidth()), t }, n.prototype._getContainerFitWidth = function() { for (var t = 0, e = this.cols; --e && 0 === this.colYs[e];) t++; return (this.cols - t) * this.columnWidth - this.gutter }, n.prototype.needsResizeLayout = function() { var t = this.containerWidth; return this.getContainerWidth(), t != this.containerWidth }, n
    }),
    function(t, n) { i = [v, y], h = n, !(b = "function" == typeof h ? h.apply(e, i) : h) }(window, function(t, e) {
        "use strict";
        var n = t.create("masonry"),
            i = n.prototype,
            r = { _getElementOffset: !0, layout: !0, _getMeasurement: !0 };
        for (var o in e.prototype) r[o] || (i[o] = e.prototype[o]);
        var s = i.measureColumns;
        i.measureColumns = function() { this.items = this.isotope.filteredItems, s.call(this) };
        var a = i._getOption;
        return i._getOption = function(t) { return "fitWidth" == t ? void 0 !== this.options.isFitWidth ? this.options.isFitWidth : this.options.fitWidth : a.apply(this.isotope, arguments) }, n
    }),
    function(t, n) { i = [v], h = n, !(w = "function" == typeof h ? h.apply(e, i) : h) }(window, function(t) {
        "use strict";
        var e = t.create("fitRows"),
            n = e.prototype;
        return n._resetLayout = function() { this.x = 0, this.y = 0, this.maxY = 0, this._getMeasurement("gutter", "outerWidth") }, n._getItemLayoutPosition = function(t) {
            t.getSize();
            var e = t.size.outerWidth + this.gutter,
                n = this.isotope.size.innerWidth + this.gutter;
            0 !== this.x && e + this.x > n && (this.x = 0, this.y = this.maxY);
            var i = { x: this.x, y: this.y };
            return this.maxY = Math.max(this.maxY, this.y + t.size.outerHeight), this.x += e, i
        }, n._getContainerSize = function() { return { height: this.maxY } }, e
    }),
    function(t, n) { i = [v], h = n, !(S = "function" == typeof h ? h.apply(e, i) : h) }(window, function(t) {
        "use strict";
        var e = t.create("vertical", { horizontalAlignment: 0 }),
            n = e.prototype;
        return n._resetLayout = function() { this.y = 0 }, n._getItemLayoutPosition = function(t) {
            t.getSize();
            var e = (this.isotope.size.innerWidth - t.size.outerWidth) * this.options.horizontalAlignment,
                n = this.y;
            return this.y += t.size.outerHeight, { x: e, y: n }
        }, n._getContainerSize = function() { return { height: this.y } }, e
    }),
    function(n, o) { i = [g, l, u, f, m, v, b, w, S], r = function(t, e, i, r, s, a) { return o(n, t, e, i, r, s, a) }.apply(e, i), !(void 0 !== r && (t.exports = r)) }(window, function(t, e, n, i, r, o, s) {
        function a(t, e) {
            return function(n, i) {
                for (var r = 0; r < t.length; r++) {
                    var o = t[r],
                        s = n.sortData[o],
                        a = i.sortData[o];
                    if (s > a || s < a) {
                        var l = void 0 !== e[o] ? e[o] : e,
                            u = l ? 1 : -1;
                        return (s > a ? 1 : -1) * u
                    }
                }
                return 0
            }
        }
        var l = t.jQuery,
            u = String.prototype.trim ? function(t) { return t.trim() } : function(t) { return t.replace(/^\s+|\s+$/g, "") },
            c = e.create("isotope", { layoutMode: "masonry", isJQueryFiltering: !0, sortAscending: !0 });
        c.Item = o, c.LayoutMode = s;
        var d = c.prototype;
        d._create = function() { this.itemGUID = 0, this._sorters = {}, this._getSorters(), e.prototype._create.call(this), this.modes = {}, this.filteredItems = this.items, this.sortHistory = ["original-order"]; for (var t in s.modes) this._initLayoutMode(t) }, d.reloadItems = function() { this.itemGUID = 0, e.prototype.reloadItems.call(this) }, d._itemize = function() {
            for (var t = e.prototype._itemize.apply(this, arguments), n = 0; n < t.length; n++) {
                var i = t[n];
                i.id = this.itemGUID++
            }
            return this._updateItemsSortData(t), t
        }, d._initLayoutMode = function(t) {
            var e = s.modes[t],
                n = this.options[t] || {};
            this.options[t] = e.options ? r.extend(e.options, n) : n, this.modes[t] = new e(this)
        }, d.layout = function() { return !this._isLayoutInited && this._getOption("initLayout") ? void this.arrange() : void this._layout() }, d._layout = function() {
            var t = this._getIsInstant();
            this._resetLayout(), this._manageStamps(), this.layoutItems(this.filteredItems, t), this._isLayoutInited = !0
        }, d.arrange = function(t) {
            this.option(t), this._getIsInstant();
            var e = this._filter(this.items);
            this.filteredItems = e.matches, this._bindArrangeComplete(), this._isInstant ? this._noTransition(this._hideReveal, [e]) : this._hideReveal(e), this._sort(), this._layout()
        }, d._init = d.arrange, d._hideReveal = function(t) { this.reveal(t.needReveal), this.hide(t.needHide) }, d._getIsInstant = function() {
            var t = this._getOption("layoutInstant"),
                e = void 0 !== t ? t : !this._isLayoutInited;
            return this._isInstant = e, e
        }, d._bindArrangeComplete = function() {
            function t() { e && n && i && r.dispatchEvent("arrangeComplete", null, [r.filteredItems]) }
            var e, n, i, r = this;
            this.once("layoutComplete", function() { e = !0, t() }), this.once("hideComplete", function() { n = !0, t() }), this.once("revealComplete", function() { i = !0, t() })
        }, d._filter = function(t) {
            var e = this.options.filter;
            e = e || "*";
            for (var n = [], i = [], r = [], o = this._getFilterTest(e), s = 0; s < t.length; s++) {
                var a = t[s];
                if (!a.isIgnored) {
                    var l = o(a);
                    l && n.push(a), l && a.isHidden ? i.push(a) : l || a.isHidden || r.push(a)
                }
            }
            return { matches: n, needReveal: i, needHide: r }
        }, d._getFilterTest = function(t) { return l && this.options.isJQueryFiltering ? function(e) { return l(e.element).is(t) } : "function" == typeof t ? function(e) { return t(e.element) } : function(e) { return i(e.element, t) } }, d.updateSortData = function(t) {
            var e;
            t ? (t = r.makeArray(t), e = this.getItems(t)) : e = this.items, this._getSorters(), this._updateItemsSortData(e)
        }, d._getSorters = function() {
            var t = this.options.getSortData;
            for (var e in t) {
                var n = t[e];
                this._sorters[e] = f(n)
            }
        }, d._updateItemsSortData = function(t) {
            for (var e = t && t.length, n = 0; e && n < e; n++) {
                var i = t[n];
                i.updateSortData()
            }
        };
        var f = function() {
            function t(t) {
                if ("string" != typeof t) return t;
                var n = u(t).split(" "),
                    i = n[0],
                    r = i.match(/^\[(.+)\]$/),
                    o = r && r[1],
                    s = e(o, i),
                    a = c.sortDataParsers[n[1]];
                return t = a ? function(t) { return t && a(s(t)) } : function(t) { return t && s(t) }
            }

            function e(t, e) { return t ? function(e) { return e.getAttribute(t) } : function(t) { var n = t.querySelector(e); return n && n.textContent } }
            return t
        }();
        c.sortDataParsers = { parseInt: function(t) { return parseInt(t, 10) }, parseFloat: function(t) { return parseFloat(t) } }, d._sort = function() {
            if (this.options.sortBy) {
                var t = r.makeArray(this.options.sortBy);
                this._getIsSameSortBy(t) || (this.sortHistory = t.concat(this.sortHistory));
                var e = a(this.sortHistory, this.options.sortAscending);
                this.filteredItems.sort(e)
            }
        }, d._getIsSameSortBy = function(t) {
            for (var e = 0; e < t.length; e++)
                if (t[e] != this.sortHistory[e]) return !1;
            return !0
        }, d._mode = function() {
            var t = this.options.layoutMode,
                e = this.modes[t];
            if (!e) throw new Error("No layout mode: " + t);
            return e.options = this.options[t], e
        }, d._resetLayout = function() { e.prototype._resetLayout.call(this), this._mode()._resetLayout() }, d._getItemLayoutPosition = function(t) { return this._mode()._getItemLayoutPosition(t) }, d._manageStamp = function(t) { this._mode()._manageStamp(t) }, d._getContainerSize = function() { return this._mode()._getContainerSize() }, d.needsResizeLayout = function() { return this._mode().needsResizeLayout() }, d.appended = function(t) {
            var e = this.addItems(t);
            if (e.length) {
                var n = this._filterRevealAdded(e);
                this.filteredItems = this.filteredItems.concat(n)
            }
        }, d.prepended = function(t) {
            var e = this._itemize(t);
            if (e.length) {
                this._resetLayout(), this._manageStamps();
                var n = this._filterRevealAdded(e);
                this.layoutItems(this.filteredItems), this.filteredItems = n.concat(this.filteredItems), this.items = e.concat(this.items)
            }
        }, d._filterRevealAdded = function(t) { var e = this._filter(t); return this.hide(e.needHide), this.reveal(e.matches), this.layoutItems(e.matches, !0), e.matches }, d.insert = function(t) {
            var e = this.addItems(t);
            if (e.length) {
                var n, i, r = e.length;
                for (n = 0; n < r; n++) i = e[n], this.element.appendChild(i.element);
                var o = this._filter(e).matches;
                for (n = 0; n < r; n++) e[n].isLayoutInstant = !0;
                for (this.arrange(), n = 0; n < r; n++) delete e[n].isLayoutInstant;
                this.reveal(o)
            }
        };
        var h = d.remove;
        return d.remove = function(t) {
            t = r.makeArray(t);
            var e = this.getItems(t);
            h.call(this, t);
            for (var n = e && e.length, i = 0; n && i < n; i++) {
                var o = e[i];
                r.removeFrom(this.filteredItems, o)
            }
        }, d.shuffle = function() {
            for (var t = 0; t < this.items.length; t++) {
                var e = this.items[t];
                e.sortData.random = Math.random()
            }
            this.options.sortBy = "random", this._sort(), this._layout()
        }, d._noTransition = function(t, e) {
            var n = this.options.transitionDuration;
            this.options.transitionDuration = 0;
            var i = t.apply(this, e);
            return this.options.transitionDuration = n, i
        }, d.getFilteredItemElements = function() { return this.filteredItems.map(function(t) { return t.element }) }, c
    })
}, function(t, e, n) {
    function i() {
        "use strict";
        $.PaperPanel.layout = {
            activate: function() {
                var t = this;
                t.fix(), t.fixSidebar(), $(window, ".wrapper").on("resize", function() { t.fix(), t.fixSidebar() })
            },
            fix: function() {
                var t = $(".main-header").outerHeight() + $(".main-footer").outerHeight(),
                    e = $(window).height(),
                    n = $(".sidebar").height();
                if ($("body").hasClass("fixed")) $(".content-wrapper, .right-side").css("min-height", e - $(".main-footer").outerHeight());
                else {
                    var i;
                    e >= n ? ($(".content-wrapper, .right-side").css("min-height", e - t), i = e - t) : ($(".content-wrapper, .right-side").css("min-height", n), i = n);
                    var r = $($.PaperPanel.options.controlSidebarOptions.selector);
                    "undefined" != typeof r && r.height() > i && $(".content-wrapper, .right-side").css("min-height", r.height())
                }
            },
            fixSidebar: function() { return $(".main-sidebar").hasClass("fixed") ? ("undefined" == typeof $.fn.slimScroll && window.console && window.console.error("Error: the fixed layout requires the slimscroll plugin!"), void($.PaperPanel.options.sidebarSlimScroll && "undefined" != typeof $.fn.slimScroll && ($(".sidebar").slimScroll({ destroy: !0 }).height("auto"), $(".sidebar").slimscroll({ height: $(window).height() + "px", color: "#ff1744", size: "3px", distance: "5px", position: "left", alwaysVisible: !0, railOpacity: 1 })))) : void("undefined" != typeof $.fn.slimScroll && $(".sidebar").slimScroll({ destroy: !0 }).height("auto")) }
        }, $.PaperPanel.pushMenu = {
            activate: function(t) {
                var e = $.PaperPanel.options.screenSizes;
                $(document).on("click", t, function(t) { t.preventDefault(), t.stopPropagation(), $(window).width() > e.md - 1 ? $("body").hasClass("sidebar-collapse") ? ($(".offcanvas").parent().removeClass("sidebar-collapse"), $("body").removeClass("sidebar-collapse").trigger("expanded.pushMenu")) : $("body").addClass("sidebar-collapse").trigger("collapsed.pushMenu") : $("body").hasClass("sidebar-open") ? $("body").removeClass("sidebar-open").removeClass("sidebar-collapse").trigger("collapsed.pushMenu") : $("body").addClass("sidebar-open").trigger("expanded.pushMenu") }), $(".page").on("click", function() { $(window).width() <= e.md - 1 && $("body").hasClass("sidebar-open") && $("body").removeClass("sidebar-open") }), $("#app").on("click", function(t) { $(t.target).closest(".control-sidebar").length || $(".control-sidebar").hasClass("control-sidebar-open") && $(".control-sidebar").removeClass("control-sidebar-open"), $(t.target).closest(".main-sidebar").length || $(".sidebar-offCanvas-lg").length && ($("body").removeClass("sidebar-open").removeClass("sidebar-collapse").trigger("collapsed.pushMenu"), $("body").addClass("sidebar-collapse").trigger("collapsed.pushMenu")) }), ($.PaperPanel.options.sidebarExpandOnHover || $("body").hasClass("sidebar-expanded-on-hover") && $("body").hasClass("sidebar-mini")) && this.expandOnHover()
            },
            expandOnHover: function() {
                var t = this,
                    e = $.PaperPanel.options.screenSizes.sm - 1;
                $(".main-sidebar").hover(function() { $("body").hasClass("sidebar-mini") && $("body").hasClass("sidebar-collapse") && $(window).width() > e && t.expand() }, function() { $("body").hasClass("sidebar-mini") && $("body").hasClass("sidebar-expanded-on-hover") && $(window).width() > e && t.collapse() })
            },
            expand: function() { $("body").removeClass("sidebar-collapse").addClass("sidebar-expanded-on-hover") },
            collapse: function() { $("body").hasClass("sidebar-expanded-on-hover") && $("body").removeClass("sidebar-expanded-on-hover").addClass("sidebar-collapse") }
        }, $.PaperPanel.tree = function(t) {
            var e = this,
                n = $.PaperPanel.options.animationSpeed;
            $(document).on("click", t + " li a", function(t) {
                var i = $(this),
                    r = i.next();
                if (r.is(".treeview-menu") && r.is(":visible") && !$("body").hasClass("sidebar-collapse")) r.slideUp(n, function() { r.removeClass("menu-open") }), r.parent("li").removeClass("active");
                else if (r.is(".treeview-menu") && !r.is(":visible")) {
                    var o = i.parents("ul").first(),
                        s = o.find("ul:visible").slideUp(n);
                    s.removeClass("menu-open");
                    var a = i.parent("li");
                    r.slideDown(n, function() { r.addClass("menu-open"), o.find("li.active").removeClass("active"), a.addClass("active"), e.layout.fix() })
                }
                r.is(".treeview-menu") && t.preventDefault()
            })
        }
    }
    n(5), $(function() {
        "use strict";
        $.PaperPanel = {}, $.PaperPanel.options = { animationSpeed: 500, sidebarToggleSelector: "[data-toggle='push-menu']", sidebarPushMenu: !0, navbarMenuSlimscrollWidth: "3px", sidebarSlimScroll: !0, controlSidebarOptions: { toggleBtnSelector: "[data-toggle='control-sidebar']", selector: ".control-sidebar", slide: !0 }, sidebarExpandOnHover: !1, screenSizes: { xs: 480, sm: 768, md: 1025, lg: 1200 } }, $("body").removeClass("hold-transition"), "undefined" != typeof PaperPanelOptions && $.extend(!0, $.PaperPanel.options, PaperPanelOptions);
        var t = $.PaperPanel.options;
        i(), $.PaperPanel.layout.activate(), $.PaperPanel.tree(".sidebar"), t.enableControlSidebar && $.PaperPanel.controlSidebar.activate(), t.sidebarPushMenu && $.PaperPanel.pushMenu.activate(t.sidebarToggleSelector), $('.btn-group[data-toggle="btn-toggle"]').each(function() {
            var t = $(this);
            $(this).find(".btn").on("click", function(e) { t.find(".btn.active").removeClass("active"), $(this).addClass("active"), e.preventDefault() })
        }), $('.sidebar-tabs a[data-toggle="tab"], .sidebar-tabs a[data-toggle="pill"]').on("click", function(t) { $.PaperPanel.pushMenu.expand() })
    })
}, function(t, e) {
    ! function() {
        "use strict";
        $("body").on("click", ".closePromotions", function(t) {
            t.preventDefault();
            var e = $(this);
            e.parent().slideUp()
        })
    }()
}, function(t, e) {
    ! function() {
        "use strict";

        function t(t) {
            return this.each(function() {
                var i = $(this),
                    r = i.data(e);
                if (!r) {
                    var o = $.extend({}, n, i.data(), "object" == typeof t && t);
                    i.data(e, r = new s(i, o))
                }
                "string" == typeof t && r.toggle()
            })
        }
        var e = "lte.controlsidebar",
            n = { slide: !0 },
            i = { sidebar: ".control-sidebar", data: '[data-toggle="control-sidebar"]', open: ".control-sidebar-open", bg: ".control-sidebar-bg", wrapper: ".wrapper", content: ".content-wrapper", boxed: ".layout-boxed" },
            r = { open: "control-sidebar-open", fixed: "fixed" },
            o = { collapsed: "collapsed.controlsidebar", expanded: "expanded.controlsidebar" },
            s = function(t, e) { this.element = t, this.options = e, this.hasBindedResize = !1, this.init() };
        s.prototype.init = function() { $(this.element).is(i.data) || $(this).on("click", this.toggle), this.fix(), $(window).on("resize", function() { this.fix() }.bind(this)) }, s.prototype.toggle = function(t) { t && t.preventDefault(), this.fix(), $(i.sidebar).is(i.open) || $("body").is(i.open) ? this.collapse() : this.expand() }, s.prototype.expand = function() { this.options.slide ? $(i.sidebar).addClass(r.open) : $("body").addClass(r.open), $(this.element).trigger($.Event(o.expanded)) }, s.prototype.collapse = function() { $("body, " + i.sidebar).removeClass(r.open), $(this.element).trigger($.Event(o.collapsed)) }, s.prototype.fix = function() { $("body").is(i.boxed) && this._fixForBoxed($(i.bg)) }, s.prototype._fixForBoxed = function(t) { t.css({ position: "absolute", height: $(i.wrapper).height() }) };
        var a = $.fn.controlSidebar;
        $.fn.controlSidebar = t, $.fn.controlSidebar.Constructor = s, $.fn.controlSidebar.noConflict = function() { return $.fn.controlSidebar = a, this }, $(document).on("click", i.data, function(e) { e && e.preventDefault(), t.call($(this), "toggle"), s.prototype.expand() })
    }()
}, function(t, e, n) {
    n(52),
        function() {
            "use strict";
            $(".responsive-tab").responsiveTabs()
        }()
}, function(t, e) {
    ! function(t) {
        function e(e, n) {
            e.each(function() {
                var e = t(this).outerWidth(!0);
                t(this).data("width", e)
            }), e.prependTo(n)
        }

        function n(n) {
            var i = n.find("li"),
                r = i.first(),
                o = r.outerHeight(),
                s = n.outerHeight();
            if (s > o) {
                var a, l = r.offset();
                i.each(function() {
                    var i = t(this);
                    if (a = i.offset(), a.top > l.top) {
                        var r = n.find(".responsivetabs-more");
                        if (!r.length) {
                            var o = '<li class="dropdown responsivetabs-more pt-2"><a href="#" data-toggle="dropdown"><i class="icon-more-2 s-18"></i></a><ul class="dropdown-menu dropdown-menu-right"></ul>';
                            r = t(o), n.append(r)
                        }
                        var s = i.prev(),
                            u = i.nextAll().not(".dropdown"),
                            c = t(".dropdown-menu", r);
                        i.hasClass("dropdown") || (e(u, c), e(i, c)), e(s, c)
                    }
                })
            } else {
                var u, c = n.parent().width(),
                    d = 0;
                n.children("li").each(function() { d += t(this).outerWidth(!0) }), u = c - d, n.find(".dropdown-menu li").each(function() { return t(this).data("width") <= u && (t(this).insertBefore(n.find(".responsivetabs-more")), void(u -= t(this).data("width"))) }), n.find(".dropdown-menu li").length || n.find(".responsivetabs-more").remove()
            }
        }
        t.fn.responsiveTabs = function() {
            return this.each(function() {
                var e = t(this);
                n(e), t(window).resize(function() { n(e) })
            }), this
        }
    }(jQuery)
}, function(t, e, n) {
    ! function() {
        "use strict";

        function t(t) { t && e.show({ text: t.data("text"), textColor: t.data("textColor"), pos: t.data("pos"), customClass: t.data("customClass"), actionTextColor: "red", backgroundColor: t.data("backgroundColor") }) }
        var e = n(6),
            i = window.snackbarInit = function() {
                $(".snackbar").on("click", function() {
                    var e = $(this);
                    t(e)
                })
            };
        i()
    }()
}]);