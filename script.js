/*! jQuery v1.7.2 jquery.com | jquery.org/license */
(function (a, b) {
    function cy(a) {
        return f.isWindow(a) ? a : a.nodeType === 9 ? a.defaultView || a.parentWindow : !1
    }

    function cu(a) {
        if (!cj[a]) {
            var b = c.body,
                d = f("<" + a + ">").appendTo(b),
                e = d.css("display");
            d.remove();
            if (e === "none" || e === "") {
                ck || (ck = c.createElement("iframe"), ck.frameBorder = ck.width = ck.height = 0), b.appendChild(ck);
                if (!cl || !ck.createElement) cl = (ck.contentWindow || ck.contentDocument).document, cl.write((f.support.boxModel ? "<!doctype html>" : "") + "<html><body>"), cl.close();
                d = cl.createElement(a), cl.body.appendChild(d), e = f.css(d, "display"), b.removeChild(ck)
            }
            cj[a] = e
        }
        return cj[a]
    }

    function ct(a, b) {
        var c = {};
        f.each(cp.concat.apply([], cp.slice(0, b)), function () {
            c[this] = a
        });
        return c
    }

    function cs() {
        cq = b
    }

    function cr() {
        setTimeout(cs, 0);
        return cq = f.now()
    }

    function ci() {
        try {
            return new a.ActiveXObject("Microsoft.XMLHTTP")
        } catch (b) {}
    }

    function ch() {
        try {
            return new a.XMLHttpRequest
        } catch (b) {}
    }

    function cb(a, c) {
        a.dataFilter && (c = a.dataFilter(c, a.dataType));
        var d = a.dataTypes,
            e = {}, g, h, i = d.length,
            j, k = d[0],
            l, m, n, o, p;
        for (g = 1; g < i; g++) {
            if (g === 1)
                for (h in a.converters) typeof h == "string" && (e[h.toLowerCase()] = a.converters[h]);
            l = k, k = d[g];
            if (k === "*") k = l;
            else if (l !== "*" && l !== k) {
                m = l + " " + k, n = e[m] || e["* " + k];
                if (!n) {
                    p = b;
                    for (o in e) {
                        j = o.split(" ");
                        if (j[0] === l || j[0] === "*") {
                            p = e[j[1] + " " + k];
                            if (p) {
                                o = e[o], o === !0 ? n = p : p === !0 && (n = o);
                                break
                            }
                        }
                    }
                }!n && !p && f.error("No conversion from " + m.replace(" ", " to ")), n !== !0 && (c = n ? n(c) : p(o(c)))
            }
        }
        return c
    }

    function ca(a, c, d) {
        var e = a.contents,
            f = a.dataTypes,
            g = a.responseFields,
            h, i, j, k;
        for (i in g) i in d && (c[g[i]] = d[i]);
        while (f[0] === "*") f.shift(), h === b && (h = a.mimeType || c.getResponseHeader("content-type"));
        if (h)
            for (i in e)
                if (e[i] && e[i].test(h)) {
                    f.unshift(i);
                    break
                }
        if (f[0] in d) j = f[0];
        else {
            for (i in d) {
                if (!f[0] || a.converters[i + " " + f[0]]) {
                    j = i;
                    break
                }
                k || (k = i)
            }
            j = j || k
        } if (j) {
            j !== f[0] && f.unshift(j);
            return d[j]
        }
    }

    function b_(a, b, c, d) {
        if (f.isArray(b)) f.each(b, function (b, e) {
            c || bD.test(a) ? d(a, e) : b_(a + "[" + (typeof e == "object" ? b : "") + "]", e, c, d)
        });
        else if (!c && f.type(b) === "object")
            for (var e in b) b_(a + "[" + e + "]", b[e], c, d);
        else d(a, b)
    }

    function b$(a, c) {
        var d, e, g = f.ajaxSettings.flatOptions || {};
        for (d in c) c[d] !== b && ((g[d] ? a : e || (e = {}))[d] = c[d]);
        e && f.extend(!0, a, e)
    }

    function bZ(a, c, d, e, f, g) {
        f = f || c.dataTypes[0], g = g || {}, g[f] = !0;
        var h = a[f],
            i = 0,
            j = h ? h.length : 0,
            k = a === bS,
            l;
        for (; i < j && (k || !l); i++) l = h[i](c, d, e), typeof l == "string" && (!k || g[l] ? l = b : (c.dataTypes.unshift(l), l = bZ(a, c, d, e, l, g)));
        (k || !l) && !g["*"] && (l = bZ(a, c, d, e, "*", g));
        return l
    }

    function bY(a) {
        return function (b, c) {
            typeof b != "string" && (c = b, b = "*");
            if (f.isFunction(c)) {
                var d = b.toLowerCase().split(bO),
                    e = 0,
                    g = d.length,
                    h, i, j;
                for (; e < g; e++) h = d[e], j = /^\+/.test(h), j && (h = h.substr(1) || "*"), i = a[h] = a[h] || [], i[j ? "unshift" : "push"](c)
            }
        }
    }

    function bB(a, b, c) {
        var d = b === "width" ? a.offsetWidth : a.offsetHeight,
            e = b === "width" ? 1 : 0,
            g = 4;
        if (d > 0) {
            if (c !== "border")
                for (; e < g; e += 2) c || (d -= parseFloat(f.css(a, "padding" + bx[e])) || 0), c === "margin" ? d += parseFloat(f.css(a, c + bx[e])) || 0 : d -= parseFloat(f.css(a, "border" + bx[e] + "Width")) || 0;
            return d + "px"
        }
        d = by(a, b);
        if (d < 0 || d == null) d = a.style[b];
        if (bt.test(d)) return d;
        d = parseFloat(d) || 0;
        if (c)
            for (; e < g; e += 2) d += parseFloat(f.css(a, "padding" + bx[e])) || 0, c !== "padding" && (d += parseFloat(f.css(a, "border" + bx[e] + "Width")) || 0), c === "margin" && (d += parseFloat(f.css(a, c + bx[e])) || 0);
        return d + "px"
    }

    function bo(a) {
        var b = c.createElement("div");
        bh.appendChild(b), b.innerHTML = a.outerHTML;
        return b.firstChild
    }

    function bn(a) {
        var b = (a.nodeName || "").toLowerCase();
        b === "input" ? bm(a) : b !== "script" && typeof a.getElementsByTagName != "undefined" && f.grep(a.getElementsByTagName("input"), bm)
    }

    function bm(a) {
        if (a.type === "checkbox" || a.type === "radio") a.defaultChecked = a.checked
    }

    function bl(a) {
        return typeof a.getElementsByTagName != "undefined" ? a.getElementsByTagName("*") : typeof a.querySelectorAll != "undefined" ? a.querySelectorAll("*") : []
    }

    function bk(a, b) {
        var c;
        b.nodeType === 1 && (b.clearAttributes && b.clearAttributes(), b.mergeAttributes && b.mergeAttributes(a), c = b.nodeName.toLowerCase(), c === "object" ? b.outerHTML = a.outerHTML : c !== "input" || a.type !== "checkbox" && a.type !== "radio" ? c === "option" ? b.selected = a.defaultSelected : c === "input" || c === "textarea" ? b.defaultValue = a.defaultValue : c === "script" && b.text !== a.text && (b.text = a.text) : (a.checked && (b.defaultChecked = b.checked = a.checked), b.value !== a.value && (b.value = a.value)), b.removeAttribute(f.expando), b.removeAttribute("_submit_attached"), b.removeAttribute("_change_attached"))
    }

    function bj(a, b) {
        if (b.nodeType === 1 && !! f.hasData(a)) {
            var c, d, e, g = f._data(a),
                h = f._data(b, g),
                i = g.events;
            if (i) {
                delete h.handle, h.events = {};
                for (c in i)
                    for (d = 0, e = i[c].length; d < e; d++) f.event.add(b, c, i[c][d])
            }
            h.data && (h.data = f.extend({}, h.data))
        }
    }

    function bi(a, b) {
        return f.nodeName(a, "table") ? a.getElementsByTagName("tbody")[0] || a.appendChild(a.ownerDocument.createElement("tbody")) : a
    }

    function U(a) {
        var b = V.split("|"),
            c = a.createDocumentFragment();
        if (c.createElement)
            while (b.length) c.createElement(b.pop());
        return c
    }

    function T(a, b, c) {
        b = b || 0;
        if (f.isFunction(b)) return f.grep(a, function (a, d) {
            var e = !! b.call(a, d, a);
            return e === c
        });
        if (b.nodeType) return f.grep(a, function (a, d) {
            return a === b === c
        });
        if (typeof b == "string") {
            var d = f.grep(a, function (a) {
                return a.nodeType === 1
            });
            if (O.test(b)) return f.filter(b, d, !c);
            b = f.filter(b, d)
        }
        return f.grep(a, function (a, d) {
            return f.inArray(a, b) >= 0 === c
        })
    }

    function S(a) {
        return !a || !a.parentNode || a.parentNode.nodeType === 11
    }

    function K() {
        return !0
    }

    function J() {
        return !1
    }

    function n(a, b, c) {
        var d = b + "defer",
            e = b + "queue",
            g = b + "mark",
            h = f._data(a, d);
        h && (c === "queue" || !f._data(a, e)) && (c === "mark" || !f._data(a, g)) && setTimeout(function () {
            !f._data(a, e) && !f._data(a, g) && (f.removeData(a, d, !0), h.fire())
        }, 0)
    }

    function m(a) {
        for (var b in a) {
            if (b === "data" && f.isEmptyObject(a[b])) continue;
            if (b !== "toJSON") return !1
        }
        return !0
    }

    function l(a, c, d) {
        if (d === b && a.nodeType === 1) {
            var e = "data-" + c.replace(k, "-$1").toLowerCase();
            d = a.getAttribute(e);
            if (typeof d == "string") {
                try {
                    d = d === "true" ? !0 : d === "false" ? !1 : d === "null" ? null : f.isNumeric(d) ? +d : j.test(d) ? f.parseJSON(d) : d
                } catch (g) {}
                f.data(a, c, d)
            } else d = b
        }
        return d
    }

    function h(a) {
        var b = g[a] = {}, c, d;
        a = a.split(/\s+/);
        for (c = 0, d = a.length; c < d; c++) b[a[c]] = !0;
        return b
    }
    var c = a.document,
        d = a.navigator,
        e = a.location,
        f = function () {
            function J() {
                if (!e.isReady) {
                    try {
                        c.documentElement.doScroll("left")
                    } catch (a) {
                        setTimeout(J, 1);
                        return
                    }
                    e.ready()
                }
            }
            var e = function (a, b) {
                return new e.fn.init(a, b, h)
            }, f = a.jQuery,
                g = a.$,
                h, i = /^(?:[^#<]*(<[\w\W]+>)[^>]*$|#([\w\-]*)$)/,
                j = /\S/,
                k = /^\s+/,
                l = /\s+$/,
                m = /^<(\w+)\s*\/?>(?:<\/\1>)?$/,
                n = /^[\],:{}\s]*$/,
                o = /\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,
                p = /"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,
                q = /(?:^|:|,)(?:\s*\[)+/g,
                r = /(webkit)[ \/]([\w.]+)/,
                s = /(opera)(?:.*version)?[ \/]([\w.]+)/,
                t = /(msie) ([\w.]+)/,
                u = /(mozilla)(?:.*? rv:([\w.]+))?/,
                v = /-([a-z]|[0-9])/ig,
                w = /^-ms-/,
                x = function (a, b) {
                    return (b + "").toUpperCase()
                }, y = d.userAgent,
                z, A, B, C = Object.prototype.toString,
                D = Object.prototype.hasOwnProperty,
                E = Array.prototype.push,
                F = Array.prototype.slice,
                G = String.prototype.trim,
                H = Array.prototype.indexOf,
                I = {};
            e.fn = e.prototype = {
                constructor: e,
                init: function (a, d, f) {
                    var g, h, j, k;
                    if (!a) return this;
                    if (a.nodeType) {
                        this.context = this[0] = a, this.length = 1;
                        return this
                    }
                    if (a === "body" && !d && c.body) {
                        this.context = c, this[0] = c.body, this.selector = a, this.length = 1;
                        return this
                    }
                    if (typeof a == "string") {
                        a.charAt(0) !== "<" || a.charAt(a.length - 1) !== ">" || a.length < 3 ? g = i.exec(a) : g = [null, a, null];
                        if (g && (g[1] || !d)) {
                            if (g[1]) {
                                d = d instanceof e ? d[0] : d, k = d ? d.ownerDocument || d : c, j = m.exec(a), j ? e.isPlainObject(d) ? (a = [c.createElement(j[1])], e.fn.attr.call(a, d, !0)) : a = [k.createElement(j[1])] : (j = e.buildFragment([g[1]], [k]), a = (j.cacheable ? e.clone(j.fragment) : j.fragment).childNodes);
                                return e.merge(this, a)
                            }
                            h = c.getElementById(g[2]);
                            if (h && h.parentNode) {
                                if (h.id !== g[2]) return f.find(a);
                                this.length = 1, this[0] = h
                            }
                            this.context = c, this.selector = a;
                            return this
                        }
                        return !d || d.jquery ? (d || f).find(a) : this.constructor(d).find(a)
                    }
                    if (e.isFunction(a)) return f.ready(a);
                    a.selector !== b && (this.selector = a.selector, this.context = a.context);
                    return e.makeArray(a, this)
                },
                selector: "",
                jquery: "1.7.2",
                length: 0,
                size: function () {
                    return this.length
                },
                toArray: function () {
                    return F.call(this, 0)
                },
                get: function (a) {
                    return a == null ? this.toArray() : a < 0 ? this[this.length + a] : this[a]
                },
                pushStack: function (a, b, c) {
                    var d = this.constructor();
                    e.isArray(a) ? E.apply(d, a) : e.merge(d, a), d.prevObject = this, d.context = this.context, b === "find" ? d.selector = this.selector + (this.selector ? " " : "") + c : b && (d.selector = this.selector + "." + b + "(" + c + ")");
                    return d
                },
                each: function (a, b) {
                    return e.each(this, a, b)
                },
                ready: function (a) {
                    e.bindReady(), A.add(a);
                    return this
                },
                eq: function (a) {
                    a = +a;
                    return a === -1 ? this.slice(a) : this.slice(a, a + 1)
                },
                first: function () {
                    return this.eq(0)
                },
                last: function () {
                    return this.eq(-1)
                },
                slice: function () {
                    return this.pushStack(F.apply(this, arguments), "slice", F.call(arguments).join(","))
                },
                map: function (a) {
                    return this.pushStack(e.map(this, function (b, c) {
                        return a.call(b, c, b)
                    }))
                },
                end: function () {
                    return this.prevObject || this.constructor(null)
                },
                push: E,
                sort: [].sort,
                splice: [].splice
            }, e.fn.init.prototype = e.fn, e.extend = e.fn.extend = function () {
                var a, c, d, f, g, h, i = arguments[0] || {}, j = 1,
                    k = arguments.length,
                    l = !1;
                typeof i == "boolean" && (l = i, i = arguments[1] || {}, j = 2), typeof i != "object" && !e.isFunction(i) && (i = {}), k === j && (i = this, --j);
                for (; j < k; j++)
                    if ((a = arguments[j]) != null)
                        for (c in a) {
                            d = i[c], f = a[c];
                            if (i === f) continue;
                            l && f && (e.isPlainObject(f) || (g = e.isArray(f))) ? (g ? (g = !1, h = d && e.isArray(d) ? d : []) : h = d && e.isPlainObject(d) ? d : {}, i[c] = e.extend(l, h, f)) : f !== b && (i[c] = f)
                        }
                    return i
            }, e.extend({
                noConflict: function (b) {
                    a.$ === e && (a.$ = g), b && a.jQuery === e && (a.jQuery = f);
                    return e
                },
                isReady: !1,
                readyWait: 1,
                holdReady: function (a) {
                    a ? e.readyWait++ : e.ready(!0)
                },
                ready: function (a) {
                    if (a === !0 && !--e.readyWait || a !== !0 && !e.isReady) {
                        if (!c.body) return setTimeout(e.ready, 1);
                        e.isReady = !0;
                        if (a !== !0 && --e.readyWait > 0) return;
                        A.fireWith(c, [e]), e.fn.trigger && e(c).trigger("ready").off("ready")
                    }
                },
                bindReady: function () {
                    if (!A) {
                        A = e.Callbacks("once memory");
                        if (c.readyState === "complete") return setTimeout(e.ready, 1);
                        if (c.addEventListener) c.addEventListener("DOMContentLoaded", B, !1), a.addEventListener("load", e.ready, !1);
                        else if (c.attachEvent) {
                            c.attachEvent("onreadystatechange", B), a.attachEvent("onload", e.ready);
                            var b = !1;
                            try {
                                b = a.frameElement == null
                            } catch (d) {}
                            c.documentElement.doScroll && b && J()
                        }
                    }
                },
                isFunction: function (a) {
                    return e.type(a) === "function"
                },
                isArray: Array.isArray || function (a) {
                    return e.type(a) === "array"
                },
                isWindow: function (a) {
                    return a != null && a == a.window
                },
                isNumeric: function (a) {
                    return !isNaN(parseFloat(a)) && isFinite(a)
                },
                type: function (a) {
                    return a == null ? String(a) : I[C.call(a)] || "object"
                },
                isPlainObject: function (a) {
                    if (!a || e.type(a) !== "object" || a.nodeType || e.isWindow(a)) return !1;
                    try {
                        if (a.constructor && !D.call(a, "constructor") && !D.call(a.constructor.prototype, "isPrototypeOf")) return !1
                    } catch (c) {
                        return !1
                    }
                    var d;
                    for (d in a);
                    return d === b || D.call(a, d)
                },
                isEmptyObject: function (a) {
                    for (var b in a) return !1;
                    return !0
                },
                error: function (a) {
                    throw new Error(a)
                },
                parseJSON: function (b) {
                    if (typeof b != "string" || !b) return null;
                    b = e.trim(b);
                    if (a.JSON && a.JSON.parse) return a.JSON.parse(b);
                    if (n.test(b.replace(o, "@").replace(p, "]").replace(q, ""))) return (new Function("return " + b))();
                    e.error("Invalid JSON: " + b)
                },
                parseXML: function (c) {
                    if (typeof c != "string" || !c) return null;
                    var d, f;
                    try {
                        a.DOMParser ? (f = new DOMParser, d = f.parseFromString(c, "text/xml")) : (d = new ActiveXObject("Microsoft.XMLDOM"), d.async = "false", d.loadXML(c))
                    } catch (g) {
                        d = b
                    }(!d || !d.documentElement || d.getElementsByTagName("parsererror").length) && e.error("Invalid XML: " + c);
                    return d
                },
                noop: function () {},
                globalEval: function (b) {
                    b && j.test(b) && (a.execScript || function (b) {
                        a.eval.call(a, b)
                    })(b)
                },
                camelCase: function (a) {
                    return a.replace(w, "ms-").replace(v, x)
                },
                nodeName: function (a, b) {
                    return a.nodeName && a.nodeName.toUpperCase() === b.toUpperCase()
                },
                each: function (a, c, d) {
                    var f, g = 0,
                        h = a.length,
                        i = h === b || e.isFunction(a);
                    if (d) {
                        if (i) {
                            for (f in a)
                                if (c.apply(a[f], d) === !1) break
                        } else
                            for (; g < h;)
                                if (c.apply(a[g++], d) === !1) break
                    } else if (i) {
                        for (f in a)
                            if (c.call(a[f], f, a[f]) === !1) break
                    } else
                        for (; g < h;)
                            if (c.call(a[g], g, a[g++]) === !1) break; return a
                },
                trim: G ? function (a) {
                    return a == null ? "" : G.call(a)
                } : function (a) {
                    return a == null ? "" : (a + "").replace(k, "").replace(l, "")
                },
                makeArray: function (a, b) {
                    var c = b || [];
                    if (a != null) {
                        var d = e.type(a);
                        a.length == null || d === "string" || d === "function" || d === "regexp" || e.isWindow(a) ? E.call(c, a) : e.merge(c, a)
                    }
                    return c
                },
                inArray: function (a, b, c) {
                    var d;
                    if (b) {
                        if (H) return H.call(b, a, c);
                        d = b.length, c = c ? c < 0 ? Math.max(0, d + c) : c : 0;
                        for (; c < d; c++)
                            if (c in b && b[c] === a) return c
                    }
                    return -1
                },
                merge: function (a, c) {
                    var d = a.length,
                        e = 0;
                    if (typeof c.length == "number")
                        for (var f = c.length; e < f; e++) a[d++] = c[e];
                    else
                        while (c[e] !== b) a[d++] = c[e++];
                    a.length = d;
                    return a
                },
                grep: function (a, b, c) {
                    var d = [],
                        e;
                    c = !! c;
                    for (var f = 0, g = a.length; f < g; f++) e = !! b(a[f], f), c !== e && d.push(a[f]);
                    return d
                },
                map: function (a, c, d) {
                    var f, g, h = [],
                        i = 0,
                        j = a.length,
                        k = a instanceof e || j !== b && typeof j == "number" && (j > 0 && a[0] && a[j - 1] || j === 0 || e.isArray(a));
                    if (k)
                        for (; i < j; i++) f = c(a[i], i, d), f != null && (h[h.length] = f);
                    else
                        for (g in a) f = c(a[g], g, d), f != null && (h[h.length] = f);
                    return h.concat.apply([], h)
                },
                guid: 1,
                proxy: function (a, c) {
                    if (typeof c == "string") {
                        var d = a[c];
                        c = a, a = d
                    }
                    if (!e.isFunction(a)) return b;
                    var f = F.call(arguments, 2),
                        g = function () {
                            return a.apply(c, f.concat(F.call(arguments)))
                        };
                    g.guid = a.guid = a.guid || g.guid || e.guid++;
                    return g
                },
                access: function (a, c, d, f, g, h, i) {
                    var j, k = d == null,
                        l = 0,
                        m = a.length;
                    if (d && typeof d == "object") {
                        for (l in d) e.access(a, c, l, d[l], 1, h, f);
                        g = 1
                    } else if (f !== b) {
                        j = i === b && e.isFunction(f), k && (j ? (j = c, c = function (a, b, c) {
                            return j.call(e(a), c)
                        }) : (c.call(a, f), c = null));
                        if (c)
                            for (; l < m; l++) c(a[l], d, j ? f.call(a[l], l, c(a[l], d)) : f, i);
                        g = 1
                    }
                    return g ? a : k ? c.call(a) : m ? c(a[0], d) : h
                },
                now: function () {
                    return (new Date).getTime()
                },
                uaMatch: function (a) {
                    a = a.toLowerCase();
                    var b = r.exec(a) || s.exec(a) || t.exec(a) || a.indexOf("compatible") < 0 && u.exec(a) || [];
                    return {
                        browser: b[1] || "",
                        version: b[2] || "0"
                    }
                },
                sub: function () {
                    function a(b, c) {
                        return new a.fn.init(b, c)
                    }
                    e.extend(!0, a, this), a.superclass = this, a.fn = a.prototype = this(), a.fn.constructor = a, a.sub = this.sub, a.fn.init = function (d, f) {
                        f && f instanceof e && !(f instanceof a) && (f = a(f));
                        return e.fn.init.call(this, d, f, b)
                    }, a.fn.init.prototype = a.fn;
                    var b = a(c);
                    return a
                },
                browser: {}
            }), e.each("Boolean Number String Function Array Date RegExp Object".split(" "), function (a, b) {
                I["[object " + b + "]"] = b.toLowerCase()
            }), z = e.uaMatch(y), z.browser && (e.browser[z.browser] = !0, e.browser.version = z.version), e.browser.webkit && (e.browser.safari = !0), j.test(" ") && (k = /^[\s\xA0]+/, l = /[\s\xA0]+$/), h = e(c), c.addEventListener ? B = function () {
                c.removeEventListener("DOMContentLoaded", B, !1), e.ready()
            } : c.attachEvent && (B = function () {
                c.readyState === "complete" && (c.detachEvent("onreadystatechange", B), e.ready())
            });
            return e
        }(),
        g = {};
    f.Callbacks = function (a) {
        a = a ? g[a] || h(a) : {};
        var c = [],
            d = [],
            e, i, j, k, l, m, n = function (b) {
                var d, e, g, h, i;
                for (d = 0, e = b.length; d < e; d++) g = b[d], h = f.type(g), h === "array" ? n(g) : h === "function" && (!a.unique || !p.has(g)) && c.push(g)
            }, o = function (b, f) {
                f = f || [], e = !a.memory || [b, f], i = !0, j = !0, m = k || 0, k = 0, l = c.length;
                for (; c && m < l; m++)
                    if (c[m].apply(b, f) === !1 && a.stopOnFalse) {
                        e = !0;
                        break
                    }
                j = !1, c && (a.once ? e === !0 ? p.disable() : c = [] : d && d.length && (e = d.shift(), p.fireWith(e[0], e[1])))
            }, p = {
                add: function () {
                    if (c) {
                        var a = c.length;
                        n(arguments), j ? l = c.length : e && e !== !0 && (k = a, o(e[0], e[1]))
                    }
                    return this
                },
                remove: function () {
                    if (c) {
                        var b = arguments,
                            d = 0,
                            e = b.length;
                        for (; d < e; d++)
                            for (var f = 0; f < c.length; f++)
                                if (b[d] === c[f]) {
                                    j && f <= l && (l--, f <= m && m--), c.splice(f--, 1);
                                    if (a.unique) break
                                }
                    }
                    return this
                },
                has: function (a) {
                    if (c) {
                        var b = 0,
                            d = c.length;
                        for (; b < d; b++)
                            if (a === c[b]) return !0
                    }
                    return !1
                },
                empty: function () {
                    c = [];
                    return this
                },
                disable: function () {
                    c = d = e = b;
                    return this
                },
                disabled: function () {
                    return !c
                },
                lock: function () {
                    d = b, (!e || e === !0) && p.disable();
                    return this
                },
                locked: function () {
                    return !d
                },
                fireWith: function (b, c) {
                    d && (j ? a.once || d.push([b, c]) : (!a.once || !e) && o(b, c));
                    return this
                },
                fire: function () {
                    p.fireWith(this, arguments);
                    return this
                },
                fired: function () {
                    return !!i
                }
            };
        return p
    };
    var i = [].slice;
    f.extend({
        Deferred: function (a) {
            var b = f.Callbacks("once memory"),
                c = f.Callbacks("once memory"),
                d = f.Callbacks("memory"),
                e = "pending",
                g = {
                    resolve: b,
                    reject: c,
                    notify: d
                }, h = {
                    done: b.add,
                    fail: c.add,
                    progress: d.add,
                    state: function () {
                        return e
                    },
                    isResolved: b.fired,
                    isRejected: c.fired,
                    then: function (a, b, c) {
                        i.done(a).fail(b).progress(c);
                        return this
                    },
                    always: function () {
                        i.done.apply(i, arguments).fail.apply(i, arguments);
                        return this
                    },
                    pipe: function (a, b, c) {
                        return f.Deferred(function (d) {
                            f.each({
                                done: [a, "resolve"],
                                fail: [b, "reject"],
                                progress: [c, "notify"]
                            }, function (a, b) {
                                var c = b[0],
                                    e = b[1],
                                    g;
                                f.isFunction(c) ? i[a](function () {
                                    g = c.apply(this, arguments), g && f.isFunction(g.promise) ? g.promise().then(d.resolve, d.reject, d.notify) : d[e + "With"](this === i ? d : this, [g])
                                }) : i[a](d[e])
                            })
                        }).promise()
                    },
                    promise: function (a) {
                        if (a == null) a = h;
                        else
                            for (var b in h) a[b] = h[b];
                        return a
                    }
                }, i = h.promise({}),
                j;
            for (j in g) i[j] = g[j].fire, i[j + "With"] = g[j].fireWith;
            i.done(function () {
                e = "resolved"
            }, c.disable, d.lock).fail(function () {
                e = "rejected"
            }, b.disable, d.lock), a && a.call(i, i);
            return i
        },
        when: function (a) {
            function m(a) {
                return function (b) {
                    e[a] = arguments.length > 1 ? i.call(arguments, 0) : b, j.notifyWith(k, e)
                }
            }

            function l(a) {
                return function (c) {
                    b[a] = arguments.length > 1 ? i.call(arguments, 0) : c, --g || j.resolveWith(j, b)
                }
            }
            var b = i.call(arguments, 0),
                c = 0,
                d = b.length,
                e = Array(d),
                g = d,
                h = d,
                j = d <= 1 && a && f.isFunction(a.promise) ? a : f.Deferred(),
                k = j.promise();
            if (d > 1) {
                for (; c < d; c++) b[c] && b[c].promise && f.isFunction(b[c].promise) ? b[c].promise().then(l(c), j.reject, m(c)) : --g;
                g || j.resolveWith(j, b)
            } else j !== a && j.resolveWith(j, d ? [a] : []);
            return k
        }
    }), f.support = function () {
        var b, d, e, g, h, i, j, k, l, m, n, o, p = c.createElement("div"),
            q = c.documentElement;
        p.setAttribute("className", "t"), p.innerHTML = "   <link/><table></table><a href='http://livedemo00.template-help.com/a' style='top:1px;float:left;opacity:.55;'>a</a><input type='checkbox'/>", d = p.getElementsByTagName("*"), e = p.getElementsByTagName("a")[0];
        if (!d || !d.length || !e) return {};
        g = c.createElement("select"), h = g.appendChild(c.createElement("option")), i = p.getElementsByTagName("input")[0], b = {
            leadingWhitespace: p.firstChild.nodeType === 3,
            tbody: !p.getElementsByTagName("tbody").length,
            htmlSerialize: !! p.getElementsByTagName("link").length,
            style: /top/.test(e.getAttribute("style")),
            hrefNormalized: e.getAttribute("href") === "/a",
            opacity: /^0.55/.test(e.style.opacity),
            cssFloat: !! e.style.cssFloat,
            checkOn: i.value === "on",
            optSelected: h.selected,
            getSetAttribute: p.className !== "t",
            enctype: !! c.createElement("form").enctype,
            html5Clone: c.createElement("nav").cloneNode(!0).outerHTML !== "<:nav></:nav>",
            submitBubbles: !0,
            changeBubbles: !0,
            focusinBubbles: !1,
            deleteExpando: !0,
            noCloneEvent: !0,
            inlineBlockNeedsLayout: !1,
            shrinkWrapBlocks: !1,
            reliableMarginRight: !0,
            pixelMargin: !0
        }, f.boxModel = b.boxModel = c.compatMode === "CSS1Compat", i.checked = !0, b.noCloneChecked = i.cloneNode(!0).checked, g.disabled = !0, b.optDisabled = !h.disabled;
        try {
            delete p.test
        } catch (r) {
            b.deleteExpando = !1
        }!p.addEventListener && p.attachEvent && p.fireEvent && (p.attachEvent("onclick", function () {
            b.noCloneEvent = !1
        }), p.cloneNode(!0).fireEvent("onclick")), i = c.createElement("input"), i.value = "t", i.setAttribute("type", "radio"), b.radioValue = i.value === "t", i.setAttribute("checked", "checked"), i.setAttribute("name", "t"), p.appendChild(i), j = c.createDocumentFragment(), j.appendChild(p.lastChild), b.checkClone = j.cloneNode(!0).cloneNode(!0).lastChild.checked, b.appendChecked = i.checked, j.removeChild(i), j.appendChild(p);
        if (p.attachEvent)
            for (n in {
                submit: 1,
                change: 1,
                focusin: 1
            }) m = "on" + n, o = m in p, o || (p.setAttribute(m, "return;"), o = typeof p[m] == "function"), b[n + "Bubbles"] = o;
        j.removeChild(p), j = g = h = p = i = null, f(function () {
            var d, e, g, h, i, j, l, m, n, q, r, s, t, u = c.getElementsByTagName("body")[0];
            !u || (m = 1, t = "padding:0;margin:0;border:", r = "position:absolute;top:0;left:0;width:1px;height:1px;", s = t + "0;visibility:hidden;", n = "style='" + r + t + "5px solid #000;", q = "<div " + n + "display:block;'><div style='" + t + "0;display:block;overflow:hidden;'></div></div>" + "<table " + n + "' cellpadding='0' cellspacing='0'>" + "<tr><td></td></tr></table>", d = c.createElement("div"), d.style.cssText = s + "width:0;height:0;position:static;top:0;margin-top:" + m + "px", u.insertBefore(d, u.firstChild), p = c.createElement("div"), d.appendChild(p), p.innerHTML = "<table><tr><td style='" + t + "0;display:none'></td><td>t</td></tr></table>", k = p.getElementsByTagName("td"), o = k[0].offsetHeight === 0, k[0].style.display = "", k[1].style.display = "none", b.reliableHiddenOffsets = o && k[0].offsetHeight === 0, a.getComputedStyle && (p.innerHTML = "", l = c.createElement("div"), l.style.width = "0", l.style.marginRight = "0", p.style.width = "2px", p.appendChild(l), b.reliableMarginRight = (parseInt((a.getComputedStyle(l, null) || {
                marginRight: 0
            }).marginRight, 10) || 0) === 0), typeof p.style.zoom != "undefined" && (p.innerHTML = "", p.style.width = p.style.padding = "1px", p.style.border = 0, p.style.overflow = "hidden", p.style.display = "inline", p.style.zoom = 1, b.inlineBlockNeedsLayout = p.offsetWidth === 3, p.style.display = "block", p.style.overflow = "visible", p.innerHTML = "<div style='width:5px;'></div>", b.shrinkWrapBlocks = p.offsetWidth !== 3), p.style.cssText = r + s, p.innerHTML = q, e = p.firstChild, g = e.firstChild, i = e.nextSibling.firstChild.firstChild, j = {
                doesNotAddBorder: g.offsetTop !== 5,
                doesAddBorderForTableAndCells: i.offsetTop === 5
            }, g.style.position = "fixed", g.style.top = "20px", j.fixedPosition = g.offsetTop === 20 || g.offsetTop === 15, g.style.position = g.style.top = "", e.style.overflow = "hidden", e.style.position = "relative", j.subtractsBorderForOverflowNotVisible = g.offsetTop === -5, j.doesNotIncludeMarginInBodyOffset = u.offsetTop !== m, a.getComputedStyle && (p.style.marginTop = "1%", b.pixelMargin = (a.getComputedStyle(p, null) || {
                marginTop: 0
            }).marginTop !== "1%"), typeof d.style.zoom != "undefined" && (d.style.zoom = 1), u.removeChild(d), l = p = d = null, f.extend(b, j))
        });
        return b
    }();
    var j = /^(?:\{.*\}|\[.*\])$/,
        k = /([A-Z])/g;
    f.extend({
        cache: {},
        uuid: 0,
        expando: "jQuery" + (f.fn.jquery + Math.random()).replace(/\D/g, ""),
        noData: {
            embed: !0,
            object: "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",
            applet: !0
        },
        hasData: function (a) {
            a = a.nodeType ? f.cache[a[f.expando]] : a[f.expando];
            return !!a && !m(a)
        },
        data: function (a, c, d, e) {
            if ( !! f.acceptData(a)) {
                var g, h, i, j = f.expando,
                    k = typeof c == "string",
                    l = a.nodeType,
                    m = l ? f.cache : a,
                    n = l ? a[j] : a[j] && j,
                    o = c === "events";
                if ((!n || !m[n] || !o && !e && !m[n].data) && k && d === b) return;
                n || (l ? a[j] = n = ++f.uuid : n = j), m[n] || (m[n] = {}, l || (m[n].toJSON = f.noop));
                if (typeof c == "object" || typeof c == "function") e ? m[n] = f.extend(m[n], c) : m[n].data = f.extend(m[n].data, c);
                g = h = m[n], e || (h.data || (h.data = {}), h = h.data), d !== b && (h[f.camelCase(c)] = d);
                if (o && !h[c]) return g.events;
                k ? (i = h[c], i == null && (i = h[f.camelCase(c)])) : i = h;
                return i
            }
        },
        removeData: function (a, b, c) {
            if ( !! f.acceptData(a)) {
                var d, e, g, h = f.expando,
                    i = a.nodeType,
                    j = i ? f.cache : a,
                    k = i ? a[h] : h;
                if (!j[k]) return;
                if (b) {
                    d = c ? j[k] : j[k].data;
                    if (d) {
                        f.isArray(b) || (b in d ? b = [b] : (b = f.camelCase(b), b in d ? b = [b] : b = b.split(" ")));
                        for (e = 0, g = b.length; e < g; e++) delete d[b[e]];
                        if (!(c ? m : f.isEmptyObject)(d)) return
                    }
                }
                if (!c) {
                    delete j[k].data;
                    if (!m(j[k])) return
                }
                f.support.deleteExpando || !j.setInterval ? delete j[k] : j[k] = null, i && (f.support.deleteExpando ? delete a[h] : a.removeAttribute ? a.removeAttribute(h) : a[h] = null)
            }
        },
        _data: function (a, b, c) {
            return f.data(a, b, c, !0)
        },
        acceptData: function (a) {
            if (a.nodeName) {
                var b = f.noData[a.nodeName.toLowerCase()];
                if (b) return b !== !0 && a.getAttribute("classid") === b
            }
            return !0
        }
    }), f.fn.extend({
        data: function (a, c) {
            var d, e, g, h, i, j = this[0],
                k = 0,
                m = null;
            if (a === b) {
                if (this.length) {
                    m = f.data(j);
                    if (j.nodeType === 1 && !f._data(j, "parsedAttrs")) {
                        g = j.attributes;
                        for (i = g.length; k < i; k++) h = g[k].name, h.indexOf("data-") === 0 && (h = f.camelCase(h.substring(5)), l(j, h, m[h]));
                        f._data(j, "parsedAttrs", !0)
                    }
                }
                return m
            }
            if (typeof a == "object") return this.each(function () {
                f.data(this, a)
            });
            d = a.split(".", 2), d[1] = d[1] ? "." + d[1] : "", e = d[1] + "!";
            return f.access(this, function (c) {
                if (c === b) {
                    m = this.triggerHandler("getData" + e, [d[0]]), m === b && j && (m = f.data(j, a), m = l(j, a, m));
                    return m === b && d[1] ? this.data(d[0]) : m
                }
                d[1] = c, this.each(function () {
                    var b = f(this);
                    b.triggerHandler("setData" + e, d), f.data(this, a, c), b.triggerHandler("changeData" + e, d)
                })
            }, null, c, arguments.length > 1, null, !1)
        },
        removeData: function (a) {
            return this.each(function () {
                f.removeData(this, a)
            })
        }
    }), f.extend({
        _mark: function (a, b) {
            a && (b = (b || "fx") + "mark", f._data(a, b, (f._data(a, b) || 0) + 1))
        },
        _unmark: function (a, b, c) {
            a !== !0 && (c = b, b = a, a = !1);
            if (b) {
                c = c || "fx";
                var d = c + "mark",
                    e = a ? 0 : (f._data(b, d) || 1) - 1;
                e ? f._data(b, d, e) : (f.removeData(b, d, !0), n(b, c, "mark"))
            }
        },
        queue: function (a, b, c) {
            var d;
            if (a) {
                b = (b || "fx") + "queue", d = f._data(a, b), c && (!d || f.isArray(c) ? d = f._data(a, b, f.makeArray(c)) : d.push(c));
                return d || []
            }
        },
        dequeue: function (a, b) {
            b = b || "fx";
            var c = f.queue(a, b),
                d = c.shift(),
                e = {};
            d === "inprogress" && (d = c.shift()), d && (b === "fx" && c.unshift("inprogress"), f._data(a, b + ".run", e), d.call(a, function () {
                f.dequeue(a, b)
            }, e)), c.length || (f.removeData(a, b + "queue " + b + ".run", !0), n(a, b, "queue"))
        }
    }), f.fn.extend({
        queue: function (a, c) {
            var d = 2;
            typeof a != "string" && (c = a, a = "fx", d--);
            if (arguments.length < d) return f.queue(this[0], a);
            return c === b ? this : this.each(function () {
                var b = f.queue(this, a, c);
                a === "fx" && b[0] !== "inprogress" && f.dequeue(this, a)
            })
        },
        dequeue: function (a) {
            return this.each(function () {
                f.dequeue(this, a)
            })
        },
        delay: function (a, b) {
            a = f.fx ? f.fx.speeds[a] || a : a, b = b || "fx";
            return this.queue(b, function (b, c) {
                var d = setTimeout(b, a);
                c.stop = function () {
                    clearTimeout(d)
                }
            })
        },
        clearQueue: function (a) {
            return this.queue(a || "fx", [])
        },
        promise: function (a, c) {
            function m() {
                --h || d.resolveWith(e, [e])
            }
            typeof a != "string" && (c = a, a = b), a = a || "fx";
            var d = f.Deferred(),
                e = this,
                g = e.length,
                h = 1,
                i = a + "defer",
                j = a + "queue",
                k = a + "mark",
                l;
            while (g--)
                if (l = f.data(e[g], i, b, !0) || (f.data(e[g], j, b, !0) || f.data(e[g], k, b, !0)) && f.data(e[g], i, f.Callbacks("once memory"), !0)) h++, l.add(m);
            m();
            return d.promise(c)
        }
    });
    var o = /[\n\t\r]/g,
        p = /\s+/,
        q = /\r/g,
        r = /^(?:button|input)$/i,
        s = /^(?:button|input|object|select|textarea)$/i,
        t = /^a(?:rea)?$/i,
        u = /^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,
        v = f.support.getSetAttribute,
        w, x, y;
    f.fn.extend({
        attr: function (a, b) {
            return f.access(this, f.attr, a, b, arguments.length > 1)
        },
        removeAttr: function (a) {
            return this.each(function () {
                f.removeAttr(this, a)
            })
        },
        prop: function (a, b) {
            return f.access(this, f.prop, a, b, arguments.length > 1)
        },
        removeProp: function (a) {
            a = f.propFix[a] || a;
            return this.each(function () {
                try {
                    this[a] = b, delete this[a]
                } catch (c) {}
            })
        },
        addClass: function (a) {
            var b, c, d, e, g, h, i;
            if (f.isFunction(a)) return this.each(function (b) {
                f(this).addClass(a.call(this, b, this.className))
            });
            if (a && typeof a == "string") {
                b = a.split(p);
                for (c = 0, d = this.length; c < d; c++) {
                    e = this[c];
                    if (e.nodeType === 1)
                        if (!e.className && b.length === 1) e.className = a;
                        else {
                            g = " " + e.className + " ";
                            for (h = 0, i = b.length; h < i; h++)~ g.indexOf(" " + b[h] + " ") || (g += b[h] + " ");
                            e.className = f.trim(g)
                        }
                }
            }
            return this
        },
        removeClass: function (a) {
            var c, d, e, g, h, i, j;
            if (f.isFunction(a)) return this.each(function (b) {
                f(this).removeClass(a.call(this, b, this.className))
            });
            if (a && typeof a == "string" || a === b) {
                c = (a || "").split(p);
                for (d = 0, e = this.length; d < e; d++) {
                    g = this[d];
                    if (g.nodeType === 1 && g.className)
                        if (a) {
                            h = (" " + g.className + " ").replace(o, " ");
                            for (i = 0, j = c.length; i < j; i++) h = h.replace(" " + c[i] + " ", " ");
                            g.className = f.trim(h)
                        } else g.className = ""
                }
            }
            return this
        },
        toggleClass: function (a, b) {
            var c = typeof a,
                d = typeof b == "boolean";
            if (f.isFunction(a)) return this.each(function (c) {
                f(this).toggleClass(a.call(this, c, this.className, b), b)
            });
            return this.each(function () {
                if (c === "string") {
                    var e, g = 0,
                        h = f(this),
                        i = b,
                        j = a.split(p);
                    while (e = j[g++]) i = d ? i : !h.hasClass(e), h[i ? "addClass" : "removeClass"](e)
                } else if (c === "undefined" || c === "boolean") this.className && f._data(this, "__className__", this.className), this.className = this.className || a === !1 ? "" : f._data(this, "__className__") || ""
            })
        },
        hasClass: function (a) {
            var b = " " + a + " ",
                c = 0,
                d = this.length;
            for (; c < d; c++)
                if (this[c].nodeType === 1 && (" " + this[c].className + " ").replace(o, " ").indexOf(b) > -1) return !0;
            return !1
        },
        val: function (a) {
            var c, d, e, g = this[0]; {
                if ( !! arguments.length) {
                    e = f.isFunction(a);
                    return this.each(function (d) {
                        var g = f(this),
                            h;
                        if (this.nodeType === 1) {
                            e ? h = a.call(this, d, g.val()) : h = a, h == null ? h = "" : typeof h == "number" ? h += "" : f.isArray(h) && (h = f.map(h, function (a) {
                                return a == null ? "" : a + ""
                            })), c = f.valHooks[this.type] || f.valHooks[this.nodeName.toLowerCase()];
                            if (!c || !("set" in c) || c.set(this, h, "value") === b) this.value = h
                        }
                    })
                }
                if (g) {
                    c = f.valHooks[g.type] || f.valHooks[g.nodeName.toLowerCase()];
                    if (c && "get" in c && (d = c.get(g, "value")) !== b) return d;
                    d = g.value;
                    return typeof d == "string" ? d.replace(q, "") : d == null ? "" : d
                }
            }
        }
    }), f.extend({
        valHooks: {
            option: {
                get: function (a) {
                    var b = a.attributes.value;
                    return !b || b.specified ? a.value : a.text
                }
            },
            select: {
                get: function (a) {
                    var b, c, d, e, g = a.selectedIndex,
                        h = [],
                        i = a.options,
                        j = a.type === "select-one";
                    if (g < 0) return null;
                    c = j ? g : 0, d = j ? g + 1 : i.length;
                    for (; c < d; c++) {
                        e = i[c];
                        if (e.selected && (f.support.optDisabled ? !e.disabled : e.getAttribute("disabled") === null) && (!e.parentNode.disabled || !f.nodeName(e.parentNode, "optgroup"))) {
                            b = f(e).val();
                            if (j) return b;
                            h.push(b)
                        }
                    }
                    if (j && !h.length && i.length) return f(i[g]).val();
                    return h
                },
                set: function (a, b) {
                    var c = f.makeArray(b);
                    f(a).find("option").each(function () {
                        this.selected = f.inArray(f(this).val(), c) >= 0
                    }), c.length || (a.selectedIndex = -1);
                    return c
                }
            }
        },
        attrFn: {
            val: !0,
            css: !0,
            html: !0,
            text: !0,
            data: !0,
            width: !0,
            height: !0,
            offset: !0
        },
        attr: function (a, c, d, e) {
            var g, h, i, j = a.nodeType;
            if ( !! a && j !== 3 && j !== 8 && j !== 2) {
                if (e && c in f.attrFn) return f(a)[c](d);
                if (typeof a.getAttribute == "undefined") return f.prop(a, c, d);
                i = j !== 1 || !f.isXMLDoc(a), i && (c = c.toLowerCase(), h = f.attrHooks[c] || (u.test(c) ? x : w));
                if (d !== b) {
                    if (d === null) {
                        f.removeAttr(a, c);
                        return
                    }
                    if (h && "set" in h && i && (g = h.set(a, d, c)) !== b) return g;
                    a.setAttribute(c, "" + d);
                    return d
                }
                if (h && "get" in h && i && (g = h.get(a, c)) !== null) return g;
                g = a.getAttribute(c);
                return g === null ? b : g
            }
        },
        removeAttr: function (a, b) {
            var c, d, e, g, h, i = 0;
            if (b && a.nodeType === 1) {
                d = b.toLowerCase().split(p), g = d.length;
                for (; i < g; i++) e = d[i], e && (c = f.propFix[e] || e, h = u.test(e), h || f.attr(a, e, ""), a.removeAttribute(v ? e : c), h && c in a && (a[c] = !1))
            }
        },
        attrHooks: {
            type: {
                set: function (a, b) {
                    if (r.test(a.nodeName) && a.parentNode) f.error("type property can't be changed");
                    else if (!f.support.radioValue && b === "radio" && f.nodeName(a, "input")) {
                        var c = a.value;
                        a.setAttribute("type", b), c && (a.value = c);
                        return b
                    }
                }
            },
            value: {
                get: function (a, b) {
                    if (w && f.nodeName(a, "button")) return w.get(a, b);
                    return b in a ? a.value : null
                },
                set: function (a, b, c) {
                    if (w && f.nodeName(a, "button")) return w.set(a, b, c);
                    a.value = b
                }
            }
        },
        propFix: {
            tabindex: "tabIndex",
            readonly: "readOnly",
            "for": "htmlFor",
            "class": "className",
            maxlength: "maxLength",
            cellspacing: "cellSpacing",
            cellpadding: "cellPadding",
            rowspan: "rowSpan",
            colspan: "colSpan",
            usemap: "useMap",
            frameborder: "frameBorder",
            contenteditable: "contentEditable"
        },
        prop: function (a, c, d) {
            var e, g, h, i = a.nodeType;
            if ( !! a && i !== 3 && i !== 8 && i !== 2) {
                h = i !== 1 || !f.isXMLDoc(a), h && (c = f.propFix[c] || c, g = f.propHooks[c]);
                return d !== b ? g && "set" in g && (e = g.set(a, d, c)) !== b ? e : a[c] = d : g && "get" in g && (e = g.get(a, c)) !== null ? e : a[c]
            }
        },
        propHooks: {
            tabIndex: {
                get: function (a) {
                    var c = a.getAttributeNode("tabindex");
                    return c && c.specified ? parseInt(c.value, 10) : s.test(a.nodeName) || t.test(a.nodeName) && a.href ? 0 : b
                }
            }
        }
    }), f.attrHooks.tabindex = f.propHooks.tabIndex, x = {
        get: function (a, c) {
            var d, e = f.prop(a, c);
            return e === !0 || typeof e != "boolean" && (d = a.getAttributeNode(c)) && d.nodeValue !== !1 ? c.toLowerCase() : b
        },
        set: function (a, b, c) {
            var d;
            b === !1 ? f.removeAttr(a, c) : (d = f.propFix[c] || c, d in a && (a[d] = !0), a.setAttribute(c, c.toLowerCase()));
            return c
        }
    }, v || (y = {
        name: !0,
        id: !0,
        coords: !0
    }, w = f.valHooks.button = {
        get: function (a, c) {
            var d;
            d = a.getAttributeNode(c);
            return d && (y[c] ? d.nodeValue !== "" : d.specified) ? d.nodeValue : b
        },
        set: function (a, b, d) {
            var e = a.getAttributeNode(d);
            e || (e = c.createAttribute(d), a.setAttributeNode(e));
            return e.nodeValue = b + ""
        }
    }, f.attrHooks.tabindex.set = w.set, f.each(["width", "height"], function (a, b) {
        f.attrHooks[b] = f.extend(f.attrHooks[b], {
            set: function (a, c) {
                if (c === "") {
                    a.setAttribute(b, "auto");
                    return c
                }
            }
        })
    }), f.attrHooks.contenteditable = {
        get: w.get,
        set: function (a, b, c) {
            b === "" && (b = "false"), w.set(a, b, c)
        }
    }), f.support.hrefNormalized || f.each(["href", "src", "width", "height"], function (a, c) {
        f.attrHooks[c] = f.extend(f.attrHooks[c], {
            get: function (a) {
                var d = a.getAttribute(c, 2);
                return d === null ? b : d
            }
        })
    }), f.support.style || (f.attrHooks.style = {
        get: function (a) {
            return a.style.cssText.toLowerCase() || b
        },
        set: function (a, b) {
            return a.style.cssText = "" + b
        }
    }), f.support.optSelected || (f.propHooks.selected = f.extend(f.propHooks.selected, {
        get: function (a) {
            var b = a.parentNode;
            b && (b.selectedIndex, b.parentNode && b.parentNode.selectedIndex);
            return null
        }
    })), f.support.enctype || (f.propFix.enctype = "encoding"), f.support.checkOn || f.each(["radio", "checkbox"], function () {
        f.valHooks[this] = {
            get: function (a) {
                return a.getAttribute("value") === null ? "on" : a.value
            }
        }
    }), f.each(["radio", "checkbox"], function () {
        f.valHooks[this] = f.extend(f.valHooks[this], {
            set: function (a, b) {
                if (f.isArray(b)) return a.checked = f.inArray(f(a).val(), b) >= 0
            }
        })
    });
    var z = /^(?:textarea|input|select)$/i,
        A = /^([^\.]*)?(?:\.(.+))?$/,
        B = /(?:^|\s)hover(\.\S+)?\b/,
        C = /^key/,
        D = /^(?:mouse|contextmenu)|click/,
        E = /^(?:focusinfocus|focusoutblur)$/,
        F = /^(\w*)(?:#([\w\-]+))?(?:\.([\w\-]+))?$/,
        G = function (a) {
            var b = F.exec(a);
            b && (b[1] = (b[1] || "").toLowerCase(), b[3] = b[3] && new RegExp("(?:^|\\s)" + b[3] + "(?:\\s|$)"));
            return b
        }, H = function (a, b) {
            var c = a.attributes || {};
            return (!b[1] || a.nodeName.toLowerCase() === b[1]) && (!b[2] || (c.id || {}).value === b[2]) && (!b[3] || b[3].test((c["class"] || {}).value))
        }, I = function (a) {
            return f.event.special.hover ? a : a.replace(B, "mouseenter$1 mouseleave$1")
        };
    f.event = {
        add: function (a, c, d, e, g) {
            var h, i, j, k, l, m, n, o, p, q, r, s;
            if (!(a.nodeType === 3 || a.nodeType === 8 || !c || !d || !(h = f._data(a)))) {
                d.handler && (p = d, d = p.handler, g = p.selector), d.guid || (d.guid = f.guid++), j = h.events, j || (h.events = j = {}), i = h.handle, i || (h.handle = i = function (a) {
                    return typeof f != "undefined" && (!a || f.event.triggered !== a.type) ? f.event.dispatch.apply(i.elem, arguments) : b
                }, i.elem = a), c = f.trim(I(c)).split(" ");
                for (k = 0; k < c.length; k++) {
                    l = A.exec(c[k]) || [], m = l[1], n = (l[2] || "").split(".").sort(), s = f.event.special[m] || {}, m = (g ? s.delegateType : s.bindType) || m, s = f.event.special[m] || {}, o = f.extend({
                        type: m,
                        origType: l[1],
                        data: e,
                        handler: d,
                        guid: d.guid,
                        selector: g,
                        quick: g && G(g),
                        namespace: n.join(".")
                    }, p), r = j[m];
                    if (!r) {
                        r = j[m] = [], r.delegateCount = 0;
                        if (!s.setup || s.setup.call(a, e, n, i) === !1) a.addEventListener ? a.addEventListener(m, i, !1) : a.attachEvent && a.attachEvent("on" + m, i)
                    }
                    s.add && (s.add.call(a, o), o.handler.guid || (o.handler.guid = d.guid)), g ? r.splice(r.delegateCount++, 0, o) : r.push(o), f.event.global[m] = !0
                }
                a = null
            }
        },
        global: {},
        remove: function (a, b, c, d, e) {
            var g = f.hasData(a) && f._data(a),
                h, i, j, k, l, m, n, o, p, q, r, s;
            if ( !! g && !! (o = g.events)) {
                b = f.trim(I(b || "")).split(" ");
                for (h = 0; h < b.length; h++) {
                    i = A.exec(b[h]) || [], j = k = i[1], l = i[2];
                    if (!j) {
                        for (j in o) f.event.remove(a, j + b[h], c, d, !0);
                        continue
                    }
                    p = f.event.special[j] || {}, j = (d ? p.delegateType : p.bindType) || j, r = o[j] || [], m = r.length, l = l ? new RegExp("(^|\\.)" + l.split(".").sort().join("\\.(?:.*\\.)?") + "(\\.|$)") : null;
                    for (n = 0; n < r.length; n++) s = r[n], (e || k === s.origType) && (!c || c.guid === s.guid) && (!l || l.test(s.namespace)) && (!d || d === s.selector || d === "**" && s.selector) && (r.splice(n--, 1), s.selector && r.delegateCount--, p.remove && p.remove.call(a, s));
                    r.length === 0 && m !== r.length && ((!p.teardown || p.teardown.call(a, l) === !1) && f.removeEvent(a, j, g.handle), delete o[j])
                }
                f.isEmptyObject(o) && (q = g.handle, q && (q.elem = null), f.removeData(a, ["events", "handle"], !0))
            }
        },
        customEvent: {
            getData: !0,
            setData: !0,
            changeData: !0
        },
        trigger: function (c, d, e, g) {
            if (!e || e.nodeType !== 3 && e.nodeType !== 8) {
                var h = c.type || c,
                    i = [],
                    j, k, l, m, n, o, p, q, r, s;
                if (E.test(h + f.event.triggered)) return;
                h.indexOf("!") >= 0 && (h = h.slice(0, -1), k = !0), h.indexOf(".") >= 0 && (i = h.split("."), h = i.shift(), i.sort());
                if ((!e || f.event.customEvent[h]) && !f.event.global[h]) return;
                c = typeof c == "object" ? c[f.expando] ? c : new f.Event(h, c) : new f.Event(h), c.type = h, c.isTrigger = !0, c.exclusive = k, c.namespace = i.join("."), c.namespace_re = c.namespace ? new RegExp("(^|\\.)" + i.join("\\.(?:.*\\.)?") + "(\\.|$)") : null, o = h.indexOf(":") < 0 ? "on" + h : "";
                if (!e) {
                    j = f.cache;
                    for (l in j) j[l].events && j[l].events[h] && f.event.trigger(c, d, j[l].handle.elem, !0);
                    return
                }
                c.result = b, c.target || (c.target = e), d = d != null ? f.makeArray(d) : [], d.unshift(c), p = f.event.special[h] || {};
                if (p.trigger && p.trigger.apply(e, d) === !1) return;
                r = [
                    [e, p.bindType || h]
                ];
                if (!g && !p.noBubble && !f.isWindow(e)) {
                    s = p.delegateType || h, m = E.test(s + h) ? e : e.parentNode, n = null;
                    for (; m; m = m.parentNode) r.push([m, s]), n = m;
                    n && n === e.ownerDocument && r.push([n.defaultView || n.parentWindow || a, s])
                }
                for (l = 0; l < r.length && !c.isPropagationStopped(); l++) m = r[l][0], c.type = r[l][1], q = (f._data(m, "events") || {})[c.type] && f._data(m, "handle"), q && q.apply(m, d), q = o && m[o], q && f.acceptData(m) && q.apply(m, d) === !1 && c.preventDefault();
                c.type = h, !g && !c.isDefaultPrevented() && (!p._default || p._default.apply(e.ownerDocument, d) === !1) && (h !== "click" || !f.nodeName(e, "a")) && f.acceptData(e) && o && e[h] && (h !== "focus" && h !== "blur" || c.target.offsetWidth !== 0) && !f.isWindow(e) && (n = e[o], n && (e[o] = null), f.event.triggered = h, e[h](), f.event.triggered = b, n && (e[o] = n));
                return c.result
            }
        },
        dispatch: function (c) {
            c = f.event.fix(c || a.event);
            var d = (f._data(this, "events") || {})[c.type] || [],
                e = d.delegateCount,
                g = [].slice.call(arguments, 0),
                h = !c.exclusive && !c.namespace,
                i = f.event.special[c.type] || {}, j = [],
                k, l, m, n, o, p, q, r, s, t, u;
            g[0] = c, c.delegateTarget = this;
            if (!i.preDispatch || i.preDispatch.call(this, c) !== !1) {
                if (e && (!c.button || c.type !== "click")) {
                    n = f(this), n.context = this.ownerDocument || this;
                    for (m = c.target; m != this; m = m.parentNode || this)
                        if (m.disabled !== !0) {
                            p = {}, r = [], n[0] = m;
                            for (k = 0; k < e; k++) s = d[k], t = s.selector, p[t] === b && (p[t] = s.quick ? H(m, s.quick) : n.is(t)), p[t] && r.push(s);
                            r.length && j.push({
                                elem: m,
                                matches: r
                            })
                        }
                }
                d.length > e && j.push({
                    elem: this,
                    matches: d.slice(e)
                });
                for (k = 0; k < j.length && !c.isPropagationStopped(); k++) {
                    q = j[k], c.currentTarget = q.elem;
                    for (l = 0; l < q.matches.length && !c.isImmediatePropagationStopped(); l++) {
                        s = q.matches[l];
                        if (h || !c.namespace && !s.namespace || c.namespace_re && c.namespace_re.test(s.namespace)) c.data = s.data, c.handleObj = s, o = ((f.event.special[s.origType] || {}).handle || s.handler).apply(q.elem, g), o !== b && (c.result = o, o === !1 && (c.preventDefault(), c.stopPropagation()))
                    }
                }
                i.postDispatch && i.postDispatch.call(this, c);
                return c.result
            }
        },
        props: "attrChange attrName relatedNode srcElement altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "),
            filter: function (a, b) {
                a.which == null && (a.which = b.charCode != null ? b.charCode : b.keyCode);
                return a
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function (a, d) {
                var e, f, g, h = d.button,
                    i = d.fromElement;
                a.pageX == null && d.clientX != null && (e = a.target.ownerDocument || c, f = e.documentElement, g = e.body, a.pageX = d.clientX + (f && f.scrollLeft || g && g.scrollLeft || 0) - (f && f.clientLeft || g && g.clientLeft || 0), a.pageY = d.clientY + (f && f.scrollTop || g && g.scrollTop || 0) - (f && f.clientTop || g && g.clientTop || 0)), !a.relatedTarget && i && (a.relatedTarget = i === a.target ? d.toElement : i), !a.which && h !== b && (a.which = h & 1 ? 1 : h & 2 ? 3 : h & 4 ? 2 : 0);
                return a
            }
        },
        fix: function (a) {
            if (a[f.expando]) return a;
            var d, e, g = a,
                h = f.event.fixHooks[a.type] || {}, i = h.props ? this.props.concat(h.props) : this.props;
            a = f.Event(g);
            for (d = i.length; d;) e = i[--d], a[e] = g[e];
            a.target || (a.target = g.srcElement || c), a.target.nodeType === 3 && (a.target = a.target.parentNode), a.metaKey === b && (a.metaKey = a.ctrlKey);
            return h.filter ? h.filter(a, g) : a
        },
        special: {
            ready: {
                setup: f.bindReady
            },
            load: {
                noBubble: !0
            },
            focus: {
                delegateType: "focusin"
            },
            blur: {
                delegateType: "focusout"
            },
            beforeunload: {
                setup: function (a, b, c) {
                    f.isWindow(this) && (this.onbeforeunload = c)
                },
                teardown: function (a, b) {
                    this.onbeforeunload === b && (this.onbeforeunload = null)
                }
            }
        },
        simulate: function (a, b, c, d) {
            var e = f.extend(new f.Event, c, {
                type: a,
                isSimulated: !0,
                originalEvent: {}
            });
            d ? f.event.trigger(e, null, b) : f.event.dispatch.call(b, e), e.isDefaultPrevented() && c.preventDefault()
        }
    }, f.event.handle = f.event.dispatch, f.removeEvent = c.removeEventListener ? function (a, b, c) {
        a.removeEventListener && a.removeEventListener(b, c, !1)
    } : function (a, b, c) {
        a.detachEvent && a.detachEvent("on" + b, c)
    }, f.Event = function (a, b) {
        if (!(this instanceof f.Event)) return new f.Event(a, b);
        a && a.type ? (this.originalEvent = a, this.type = a.type, this.isDefaultPrevented = a.defaultPrevented || a.returnValue === !1 || a.getPreventDefault && a.getPreventDefault() ? K : J) : this.type = a, b && f.extend(this, b), this.timeStamp = a && a.timeStamp || f.now(), this[f.expando] = !0
    }, f.Event.prototype = {
        preventDefault: function () {
            this.isDefaultPrevented = K;
            var a = this.originalEvent;
            !a || (a.preventDefault ? a.preventDefault() : a.returnValue = !1)
        },
        stopPropagation: function () {
            this.isPropagationStopped = K;
            var a = this.originalEvent;
            !a || (a.stopPropagation && a.stopPropagation(), a.cancelBubble = !0)
        },
        stopImmediatePropagation: function () {
            this.isImmediatePropagationStopped = K, this.stopPropagation()
        },
        isDefaultPrevented: J,
        isPropagationStopped: J,
        isImmediatePropagationStopped: J
    }, f.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout"
    }, function (a, b) {
        f.event.special[a] = {
            delegateType: b,
            bindType: b,
            handle: function (a) {
                var c = this,
                    d = a.relatedTarget,
                    e = a.handleObj,
                    g = e.selector,
                    h;
                if (!d || d !== c && !f.contains(c, d)) a.type = e.origType, h = e.handler.apply(this, arguments), a.type = b;
                return h
            }
        }
    }), f.support.submitBubbles || (f.event.special.submit = {
        setup: function () {
            if (f.nodeName(this, "form")) return !1;
            f.event.add(this, "click._submit keypress._submit", function (a) {
                var c = a.target,
                    d = f.nodeName(c, "input") || f.nodeName(c, "button") ? c.form : b;
                d && !d._submit_attached && (f.event.add(d, "submit._submit", function (a) {
                    a._submit_bubble = !0
                }), d._submit_attached = !0)
            })
        },
        postDispatch: function (a) {
            a._submit_bubble && (delete a._submit_bubble, this.parentNode && !a.isTrigger && f.event.simulate("submit", this.parentNode, a, !0))
        },
        teardown: function () {
            if (f.nodeName(this, "form")) return !1;
            f.event.remove(this, "._submit")
        }
    }), f.support.changeBubbles || (f.event.special.change = {
        setup: function () {
            if (z.test(this.nodeName)) {
                if (this.type === "checkbox" || this.type === "radio") f.event.add(this, "propertychange._change", function (a) {
                    a.originalEvent.propertyName === "checked" && (this._just_changed = !0)
                }), f.event.add(this, "click._change", function (a) {
                    this._just_changed && !a.isTrigger && (this._just_changed = !1, f.event.simulate("change", this, a, !0))
                });
                return !1
            }
            f.event.add(this, "beforeactivate._change", function (a) {
                var b = a.target;
                z.test(b.nodeName) && !b._change_attached && (f.event.add(b, "change._change", function (a) {
                    this.parentNode && !a.isSimulated && !a.isTrigger && f.event.simulate("change", this.parentNode, a, !0)
                }), b._change_attached = !0)
            })
        },
        handle: function (a) {
            var b = a.target;
            if (this !== b || a.isSimulated || a.isTrigger || b.type !== "radio" && b.type !== "checkbox") return a.handleObj.handler.apply(this, arguments)
        },
        teardown: function () {
            f.event.remove(this, "._change");
            return z.test(this.nodeName)
        }
    }), f.support.focusinBubbles || f.each({
        focus: "focusin",
        blur: "focusout"
    }, function (a, b) {
        var d = 0,
            e = function (a) {
                f.event.simulate(b, a.target, f.event.fix(a), !0)
            };
        f.event.special[b] = {
            setup: function () {
                d++ === 0 && c.addEventListener(a, e, !0)
            },
            teardown: function () {
                --d === 0 && c.removeEventListener(a, e, !0)
            }
        }
    }), f.fn.extend({
        on: function (a, c, d, e, g) {
            var h, i;
            if (typeof a == "object") {
                typeof c != "string" && (d = d || c, c = b);
                for (i in a) this.on(i, c, d, a[i], g);
                return this
            }
            d == null && e == null ? (e = c, d = c = b) : e == null && (typeof c == "string" ? (e = d, d = b) : (e = d, d = c, c = b));
            if (e === !1) e = J;
            else if (!e) return this;
            g === 1 && (h = e, e = function (a) {
                f().off(a);
                return h.apply(this, arguments)
            }, e.guid = h.guid || (h.guid = f.guid++));
            return this.each(function () {
                f.event.add(this, a, e, d, c)
            })
        },
        one: function (a, b, c, d) {
            return this.on(a, b, c, d, 1)
        },
        off: function (a, c, d) {
            if (a && a.preventDefault && a.handleObj) {
                var e = a.handleObj;
                f(a.delegateTarget).off(e.namespace ? e.origType + "." + e.namespace : e.origType, e.selector, e.handler);
                return this
            }
            if (typeof a == "object") {
                for (var g in a) this.off(g, c, a[g]);
                return this
            }
            if (c === !1 || typeof c == "function") d = c, c = b;
            d === !1 && (d = J);
            return this.each(function () {
                f.event.remove(this, a, d, c)
            })
        },
        bind: function (a, b, c) {
            return this.on(a, null, b, c)
        },
        unbind: function (a, b) {
            return this.off(a, null, b)
        },
        live: function (a, b, c) {
            f(this.context).on(a, this.selector, b, c);
            return this
        },
        die: function (a, b) {
            f(this.context).off(a, this.selector || "**", b);
            return this
        },
        delegate: function (a, b, c, d) {
            return this.on(b, a, c, d)
        },
        undelegate: function (a, b, c) {
            return arguments.length == 1 ? this.off(a, "**") : this.off(b, a, c)
        },
        trigger: function (a, b) {
            return this.each(function () {
                f.event.trigger(a, b, this)
            })
        },
        triggerHandler: function (a, b) {
            if (this[0]) return f.event.trigger(a, b, this[0], !0)
        },
        toggle: function (a) {
            var b = arguments,
                c = a.guid || f.guid++,
                d = 0,
                e = function (c) {
                    var e = (f._data(this, "lastToggle" + a.guid) || 0) % d;
                    f._data(this, "lastToggle" + a.guid, e + 1), c.preventDefault();
                    return b[e].apply(this, arguments) || !1
                };
            e.guid = c;
            while (d < b.length) b[d++].guid = c;
            return this.click(e)
        },
        hover: function (a, b) {
            return this.mouseenter(a).mouseleave(b || a)
        }
    }), f.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function (a, b) {
        f.fn[b] = function (a, c) {
            c == null && (c = a, a = null);
            return arguments.length > 0 ? this.on(b, null, a, c) : this.trigger(b)
        }, f.attrFn && (f.attrFn[b] = !0), C.test(b) && (f.event.fixHooks[b] = f.event.keyHooks), D.test(b) && (f.event.fixHooks[b] = f.event.mouseHooks)
    }),
    function () {
        function x(a, b, c, e, f, g) {
            for (var h = 0, i = e.length; h < i; h++) {
                var j = e[h];
                if (j) {
                    var k = !1;
                    j = j[a];
                    while (j) {
                        if (j[d] === c) {
                            k = e[j.sizset];
                            break
                        }
                        if (j.nodeType === 1) {
                            g || (j[d] = c, j.sizset = h);
                            if (typeof b != "string") {
                                if (j === b) {
                                    k = !0;
                                    break
                                }
                            } else if (m.filter(b, [j]).length > 0) {
                                k = j;
                                break
                            }
                        }
                        j = j[a]
                    }
                    e[h] = k
                }
            }
        }

        function w(a, b, c, e, f, g) {
            for (var h = 0, i = e.length; h < i; h++) {
                var j = e[h];
                if (j) {
                    var k = !1;
                    j = j[a];
                    while (j) {
                        if (j[d] === c) {
                            k = e[j.sizset];
                            break
                        }
                        j.nodeType === 1 && !g && (j[d] = c, j.sizset = h);
                        if (j.nodeName.toLowerCase() === b) {
                            k = j;
                            break
                        }
                        j = j[a]
                    }
                    e[h] = k
                }
            }
        }
        var a = /((?:\((?:\([^()]+\)|[^()]+)+\)|\[(?:\[[^\[\]]*\]|['"][^'"]*['"]|[^\[\]'"]+)+\]|\\.|[^ >+~,(\[\\]+)+|[>+~])(\s*,\s*)?((?:.|\r|\n)*)/g,
            d = "sizcache" + (Math.random() + "").replace(".", ""),
            e = 0,
            g = Object.prototype.toString,
            h = !1,
            i = !0,
            j = /\\/g,
            k = /\r\n/g,
            l = /\W/;
        [0, 0].sort(function () {
                i = !1;
                return 0
            });
        var m = function (b, d, e, f) {
            e = e || [], d = d || c;
            var h = d;
            if (d.nodeType !== 1 && d.nodeType !== 9) return [];
            if (!b || typeof b != "string") return e;
            var i, j, k, l, n, q, r, t, u = !0,
                v = m.isXML(d),
                w = [],
                x = b;
            do {
                a.exec(""), i = a.exec(x);
                if (i) {
                    x = i[3], w.push(i[1]);
                    if (i[2]) {
                        l = i[3];
                        break
                    }
                }
            } while (i);
            if (w.length > 1 && p.exec(b))
                if (w.length === 2 && o.relative[w[0]]) j = y(w[0] + w[1], d, f);
                else {
                    j = o.relative[w[0]] ? [d] : m(w.shift(), d);
                    while (w.length) b = w.shift(), o.relative[b] && (b += w.shift()), j = y(b, j, f)
                } else {
                    !f && w.length > 1 && d.nodeType === 9 && !v && o.match.ID.test(w[0]) && !o.match.ID.test(w[w.length - 1]) && (n = m.find(w.shift(), d, v), d = n.expr ? m.filter(n.expr, n.set)[0] : n.set[0]);
                    if (d) {
                        n = f ? {
                            expr: w.pop(),
                            set: s(f)
                        } : m.find(w.pop(), w.length === 1 && (w[0] === "~" || w[0] === "+") && d.parentNode ? d.parentNode : d, v), j = n.expr ? m.filter(n.expr, n.set) : n.set, w.length > 0 ? k = s(j) : u = !1;
                        while (w.length) q = w.pop(), r = q, o.relative[q] ? r = w.pop() : q = "", r == null && (r = d), o.relative[q](k, r, v)
                    } else k = w = []
                }
            k || (k = j), k || m.error(q || b);
            if (g.call(k) === "[object Array]")
                if (!u) e.push.apply(e, k);
                else if (d && d.nodeType === 1)
                for (t = 0; k[t] != null; t++) k[t] && (k[t] === !0 || k[t].nodeType === 1 && m.contains(d, k[t])) && e.push(j[t]);
            else
                for (t = 0; k[t] != null; t++) k[t] && k[t].nodeType === 1 && e.push(j[t]);
            else s(k, e);
            l && (m(l, h, e, f), m.uniqueSort(e));
            return e
        };
        m.uniqueSort = function (a) {
            if (u) {
                h = i, a.sort(u);
                if (h)
                    for (var b = 1; b < a.length; b++) a[b] === a[b - 1] && a.splice(b--, 1)
            }
            return a
        }, m.matches = function (a, b) {
            return m(a, null, null, b)
        }, m.matchesSelector = function (a, b) {
            return m(b, null, null, [a]).length > 0
        }, m.find = function (a, b, c) {
            var d, e, f, g, h, i;
            if (!a) return [];
            for (e = 0, f = o.order.length; e < f; e++) {
                h = o.order[e];
                if (g = o.leftMatch[h].exec(a)) {
                    i = g[1], g.splice(1, 1);
                    if (i.substr(i.length - 1) !== "\\") {
                        g[1] = (g[1] || "").replace(j, ""), d = o.find[h](g, b, c);
                        if (d != null) {
                            a = a.replace(o.match[h], "");
                            break
                        }
                    }
                }
            }
            d || (d = typeof b.getElementsByTagName != "undefined" ? b.getElementsByTagName("*") : []);
            return {
                set: d,
                expr: a
            }
        }, m.filter = function (a, c, d, e) {
            var f, g, h, i, j, k, l, n, p, q = a,
                r = [],
                s = c,
                t = c && c[0] && m.isXML(c[0]);
            while (a && c.length) {
                for (h in o.filter)
                    if ((f = o.leftMatch[h].exec(a)) != null && f[2]) {
                        k = o.filter[h], l = f[1], g = !1, f.splice(1, 1);
                        if (l.substr(l.length - 1) === "\\") continue;
                        s === r && (r = []);
                        if (o.preFilter[h]) {
                            f = o.preFilter[h](f, s, d, r, e, t);
                            if (!f) g = i = !0;
                            else if (f === !0) continue
                        }
                        if (f)
                            for (n = 0;
                                (j = s[n]) != null; n++) j && (i = k(j, f, n, s), p = e ^ i, d && i != null ? p ? g = !0 : s[n] = !1 : p && (r.push(j), g = !0));
                        if (i !== b) {
                            d || (s = r), a = a.replace(o.match[h], "");
                            if (!g) return [];
                            break
                        }
                    }
                if (a === q)
                    if (g == null) m.error(a);
                    else break;
                q = a
            }
            return s
        }, m.error = function (a) {
            throw new Error("Syntax error, unrecognized expression: " + a)
        };
        var n = m.getText = function (a) {
            var b, c, d = a.nodeType,
                e = "";
            if (d) {
                if (d === 1 || d === 9 || d === 11) {
                    if (typeof a.textContent == "string") return a.textContent;
                    if (typeof a.innerText == "string") return a.innerText.replace(k, "");
                    for (a = a.firstChild; a; a = a.nextSibling) e += n(a)
                } else if (d === 3 || d === 4) return a.nodeValue
            } else
                for (b = 0; c = a[b]; b++) c.nodeType !== 8 && (e += n(c));
            return e
        }, o = m.selectors = {
                order: ["ID", "NAME", "TAG"],
                match: {
                    ID: /#((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,
                    CLASS: /\.((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,
                    NAME: /\[name=['"]*((?:[\w\u00c0-\uFFFF\-]|\\.)+)['"]*\]/,
                    ATTR: /\[\s*((?:[\w\u00c0-\uFFFF\-]|\\.)+)\s*(?:(\S?=)\s*(?:(['"])(.*?)\3|(#?(?:[\w\u00c0-\uFFFF\-]|\\.)*)|)|)\s*\]/,
                    TAG: /^((?:[\w\u00c0-\uFFFF\*\-]|\\.)+)/,
                    CHILD: /:(only|nth|last|first)-child(?:\(\s*(even|odd|(?:[+\-]?\d+|(?:[+\-]?\d*)?n\s*(?:[+\-]\s*\d+)?))\s*\))?/,
                    POS: /:(nth|eq|gt|lt|first|last|even|odd)(?:\((\d*)\))?(?=[^\-]|$)/,
                    PSEUDO: /:((?:[\w\u00c0-\uFFFF\-]|\\.)+)(?:\((['"]?)((?:\([^\)]+\)|[^\(\)]*)+)\2\))?/
                },
                leftMatch: {},
                attrMap: {
                    "class": "className",
                    "for": "htmlFor"
                },
                attrHandle: {
                    href: function (a) {
                        return a.getAttribute("href")
                    },
                    type: function (a) {
                        return a.getAttribute("type")
                    }
                },
                relative: {
                    "+": function (a, b) {
                        var c = typeof b == "string",
                            d = c && !l.test(b),
                            e = c && !d;
                        d && (b = b.toLowerCase());
                        for (var f = 0, g = a.length, h; f < g; f++)
                            if (h = a[f]) {
                                while ((h = h.previousSibling) && h.nodeType !== 1);
                                a[f] = e || h && h.nodeName.toLowerCase() === b ? h || !1 : h === b
                            }
                        e && m.filter(b, a, !0)
                    },
                    ">": function (a, b) {
                        var c, d = typeof b == "string",
                            e = 0,
                            f = a.length;
                        if (d && !l.test(b)) {
                            b = b.toLowerCase();
                            for (; e < f; e++) {
                                c = a[e];
                                if (c) {
                                    var g = c.parentNode;
                                    a[e] = g.nodeName.toLowerCase() === b ? g : !1
                                }
                            }
                        } else {
                            for (; e < f; e++) c = a[e], c && (a[e] = d ? c.parentNode : c.parentNode === b);
                            d && m.filter(b, a, !0)
                        }
                    },
                    "": function (a, b, c) {
                        var d, f = e++,
                            g = x;
                        typeof b == "string" && !l.test(b) && (b = b.toLowerCase(), d = b, g = w), g("parentNode", b, f, a, d, c)
                    },
                    "~": function (a, b, c) {
                        var d, f = e++,
                            g = x;
                        typeof b == "string" && !l.test(b) && (b = b.toLowerCase(), d = b, g = w), g("previousSibling", b, f, a, d, c)
                    }
                },
                find: {
                    ID: function (a, b, c) {
                        if (typeof b.getElementById != "undefined" && !c) {
                            var d = b.getElementById(a[1]);
                            return d && d.parentNode ? [d] : []
                        }
                    },
                    NAME: function (a, b) {
                        if (typeof b.getElementsByName != "undefined") {
                            var c = [],
                                d = b.getElementsByName(a[1]);
                            for (var e = 0, f = d.length; e < f; e++) d[e].getAttribute("name") === a[1] && c.push(d[e]);
                            return c.length === 0 ? null : c
                        }
                    },
                    TAG: function (a, b) {
                        if (typeof b.getElementsByTagName != "undefined") return b.getElementsByTagName(a[1])
                    }
                },
                preFilter: {
                    CLASS: function (a, b, c, d, e, f) {
                        a = " " + a[1].replace(j, "") + " ";
                        if (f) return a;
                        for (var g = 0, h;
                            (h = b[g]) != null; g++) h && (e ^ (h.className && (" " + h.className + " ").replace(/[\t\n\r]/g, " ").indexOf(a) >= 0) ? c || d.push(h) : c && (b[g] = !1));
                        return !1
                    },
                    ID: function (a) {
                        return a[1].replace(j, "")
                    },
                    TAG: function (a, b) {
                        return a[1].replace(j, "").toLowerCase()
                    },
                    CHILD: function (a) {
                        if (a[1] === "nth") {
                            a[2] || m.error(a[0]), a[2] = a[2].replace(/^\+|\s*/g, "");
                            var b = /(-?)(\d*)(?:n([+\-]?\d*))?/.exec(a[2] === "even" && "2n" || a[2] === "odd" && "2n+1" || !/\D/.test(a[2]) && "0n+" + a[2] || a[2]);
                            a[2] = b[1] + (b[2] || 1) - 0, a[3] = b[3] - 0
                        } else a[2] && m.error(a[0]);
                        a[0] = e++;
                        return a
                    },
                    ATTR: function (a, b, c, d, e, f) {
                        var g = a[1] = a[1].replace(j, "");
                        !f && o.attrMap[g] && (a[1] = o.attrMap[g]), a[4] = (a[4] || a[5] || "").replace(j, ""), a[2] === "~=" && (a[4] = " " + a[4] + " ");
                        return a
                    },
                    PSEUDO: function (b, c, d, e, f) {
                        if (b[1] === "not")
                            if ((a.exec(b[3]) || "").length > 1 || /^\w/.test(b[3])) b[3] = m(b[3], null, null, c);
                            else {
                                var g = m.filter(b[3], c, d, !0 ^ f);
                                d || e.push.apply(e, g);
                                return !1
                            } else if (o.match.POS.test(b[0]) || o.match.CHILD.test(b[0])) return !0;
                        return b
                    },
                    POS: function (a) {
                        a.unshift(!0);
                        return a
                    }
                },
                filters: {
                    enabled: function (a) {
                        return a.disabled === !1 && a.type !== "hidden"
                    },
                    disabled: function (a) {
                        return a.disabled === !0
                    },
                    checked: function (a) {
                        return a.checked === !0
                    },
                    selected: function (a) {
                        a.parentNode && a.parentNode.selectedIndex;
                        return a.selected === !0
                    },
                    parent: function (a) {
                        return !!a.firstChild
                    },
                    empty: function (a) {
                        return !a.firstChild
                    },
                    has: function (a, b, c) {
                        return !!m(c[3], a).length
                    },
                    header: function (a) {
                        return /h\d/i.test(a.nodeName)
                    },
                    text: function (a) {
                        var b = a.getAttribute("type"),
                            c = a.type;
                        return a.nodeName.toLowerCase() === "input" && "text" === c && (b === c || b === null)
                    },
                    radio: function (a) {
                        return a.nodeName.toLowerCase() === "input" && "radio" === a.type
                    },
                    checkbox: function (a) {
                        return a.nodeName.toLowerCase() === "input" && "checkbox" === a.type
                    },
                    file: function (a) {
                        return a.nodeName.toLowerCase() === "input" && "file" === a.type
                    },
                    password: function (a) {
                        return a.nodeName.toLowerCase() === "input" && "password" === a.type
                    },
                    submit: function (a) {
                        var b = a.nodeName.toLowerCase();
                        return (b === "input" || b === "button") && "submit" === a.type
                    },
                    image: function (a) {
                        return a.nodeName.toLowerCase() === "input" && "image" === a.type
                    },
                    reset: function (a) {
                        var b = a.nodeName.toLowerCase();
                        return (b === "input" || b === "button") && "reset" === a.type
                    },
                    button: function (a) {
                        var b = a.nodeName.toLowerCase();
                        return b === "input" && "button" === a.type || b === "button"
                    },
                    input: function (a) {
                        return /input|select|textarea|button/i.test(a.nodeName)
                    },
                    focus: function (a) {
                        return a === a.ownerDocument.activeElement
                    }
                },
                setFilters: {
                    first: function (a, b) {
                        return b === 0
                    },
                    last: function (a, b, c, d) {
                        return b === d.length - 1
                    },
                    even: function (a, b) {
                        return b % 2 === 0
                    },
                    odd: function (a, b) {
                        return b % 2 === 1
                    },
                    lt: function (a, b, c) {
                        return b < c[3] - 0
                    },
                    gt: function (a, b, c) {
                        return b > c[3] - 0
                    },
                    nth: function (a, b, c) {
                        return c[3] - 0 === b
                    },
                    eq: function (a, b, c) {
                        return c[3] - 0 === b
                    }
                },
                filter: {
                    PSEUDO: function (a, b, c, d) {
                        var e = b[1],
                            f = o.filters[e];
                        if (f) return f(a, c, b, d);
                        if (e === "contains") return (a.textContent || a.innerText || n([a]) || "").indexOf(b[3]) >= 0;
                        if (e === "not") {
                            var g = b[3];
                            for (var h = 0, i = g.length; h < i; h++)
                                if (g[h] === a) return !1;
                            return !0
                        }
                        m.error(e)
                    },
                    CHILD: function (a, b) {
                        var c, e, f, g, h, i, j, k = b[1],
                            l = a;
                        switch (k) {
                        case "only":
                        case "first":
                            while (l = l.previousSibling)
                                if (l.nodeType === 1) return !1;
                            if (k === "first") return !0;
                            l = a;
                        case "last":
                            while (l = l.nextSibling)
                                if (l.nodeType === 1) return !1;
                            return !0;
                        case "nth":
                            c = b[2], e = b[3];
                            if (c === 1 && e === 0) return !0;
                            f = b[0], g = a.parentNode;
                            if (g && (g[d] !== f || !a.nodeIndex)) {
                                i = 0;
                                for (l = g.firstChild; l; l = l.nextSibling) l.nodeType === 1 && (l.nodeIndex = ++i);
                                g[d] = f
                            }
                            j = a.nodeIndex - e;
                            return c === 0 ? j === 0 : j % c === 0 && j / c >= 0
                        }
                    },
                    ID: function (a, b) {
                        return a.nodeType === 1 && a.getAttribute("id") === b
                    },
                    TAG: function (a, b) {
                        return b === "*" && a.nodeType === 1 || !! a.nodeName && a.nodeName.toLowerCase() === b
                    },
                    CLASS: function (a, b) {
                        return (" " + (a.className || a.getAttribute("class")) + " ").indexOf(b) > -1
                    },
                    ATTR: function (a, b) {
                        var c = b[1],
                            d = m.attr ? m.attr(a, c) : o.attrHandle[c] ? o.attrHandle[c](a) : a[c] != null ? a[c] : a.getAttribute(c),
                            e = d + "",
                            f = b[2],
                            g = b[4];
                        return d == null ? f === "!=" : !f && m.attr ? d != null : f === "=" ? e === g : f === "*=" ? e.indexOf(g) >= 0 : f === "~=" ? (" " + e + " ").indexOf(g) >= 0 : g ? f === "!=" ? e !== g : f === "^=" ? e.indexOf(g) === 0 : f === "$=" ? e.substr(e.length - g.length) === g : f === "|=" ? e === g || e.substr(0, g.length + 1) === g + "-" : !1 : e && d !== !1
                    },
                    POS: function (a, b, c, d) {
                        var e = b[2],
                            f = o.setFilters[e];
                        if (f) return f(a, c, b, d)
                    }
                }
            }, p = o.match.POS,
            q = function (a, b) {
                return "\\" + (b - 0 + 1)
            };
        for (var r in o.match) o.match[r] = new RegExp(o.match[r].source + /(?![^\[]*\])(?![^\(]*\))/.source), o.leftMatch[r] = new RegExp(/(^(?:.|\r|\n)*?)/.source + o.match[r].source.replace(/\\(\d+)/g, q));
        o.match.globalPOS = p;
        var s = function (a, b) {
            a = Array.prototype.slice.call(a, 0);
            if (b) {
                b.push.apply(b, a);
                return b
            }
            return a
        };
        try {
            Array.prototype.slice.call(c.documentElement.childNodes, 0)[0].nodeType
        } catch (t) {
            s = function (a, b) {
                var c = 0,
                    d = b || [];
                if (g.call(a) === "[object Array]") Array.prototype.push.apply(d, a);
                else if (typeof a.length == "number")
                    for (var e = a.length; c < e; c++) d.push(a[c]);
                else
                    for (; a[c]; c++) d.push(a[c]);
                return d
            }
        }
        var u, v;
        c.documentElement.compareDocumentPosition ? u = function (a, b) {
            if (a === b) {
                h = !0;
                return 0
            }
            if (!a.compareDocumentPosition || !b.compareDocumentPosition) return a.compareDocumentPosition ? -1 : 1;
            return a.compareDocumentPosition(b) & 4 ? -1 : 1
        } : (u = function (a, b) {
            if (a === b) {
                h = !0;
                return 0
            }
            if (a.sourceIndex && b.sourceIndex) return a.sourceIndex - b.sourceIndex;
            var c, d, e = [],
                f = [],
                g = a.parentNode,
                i = b.parentNode,
                j = g;
            if (g === i) return v(a, b);
            if (!g) return -1;
            if (!i) return 1;
            while (j) e.unshift(j), j = j.parentNode;
            j = i;
            while (j) f.unshift(j), j = j.parentNode;
            c = e.length, d = f.length;
            for (var k = 0; k < c && k < d; k++)
                if (e[k] !== f[k]) return v(e[k], f[k]);
            return k === c ? v(a, f[k], -1) : v(e[k], b, 1)
        }, v = function (a, b, c) {
            if (a === b) return c;
            var d = a.nextSibling;
            while (d) {
                if (d === b) return -1;
                d = d.nextSibling
            }
            return 1
        }),
        function () {
            var a = c.createElement("div"),
                d = "script" + (new Date).getTime(),
                e = c.documentElement;
            a.innerHTML = "<a name='" + d + "'/>", e.insertBefore(a, e.firstChild), c.getElementById(d) && (o.find.ID = function (a, c, d) {
                if (typeof c.getElementById != "undefined" && !d) {
                    var e = c.getElementById(a[1]);
                    return e ? e.id === a[1] || typeof e.getAttributeNode != "undefined" && e.getAttributeNode("id").nodeValue === a[1] ? [e] : b : []
                }
            }, o.filter.ID = function (a, b) {
                var c = typeof a.getAttributeNode != "undefined" && a.getAttributeNode("id");
                return a.nodeType === 1 && c && c.nodeValue === b
            }), e.removeChild(a), e = a = null
        }(),
        function () {
            var a = c.createElement("div");
            a.appendChild(c.createComment("")), a.getElementsByTagName("*").length > 0 && (o.find.TAG = function (a, b) {
                var c = b.getElementsByTagName(a[1]);
                if (a[1] === "*") {
                    var d = [];
                    for (var e = 0; c[e]; e++) c[e].nodeType === 1 && d.push(c[e]);
                    c = d
                }
                return c
            }), a.innerHTML = "<a href='#'></a>", a.firstChild && typeof a.firstChild.getAttribute != "undefined" && a.firstChild.getAttribute("href") !== "#" && (o.attrHandle.href = function (a) {
                return a.getAttribute("href", 2)
            }), a = null
        }(), c.querySelectorAll && function () {
            var a = m,
                b = c.createElement("div"),
                d = "__sizzle__";
            b.innerHTML = "<p class='TEST'></p>";
            if (!b.querySelectorAll || b.querySelectorAll(".TEST").length !== 0) {
                m = function (b, e, f, g) {
                    e = e || c;
                    if (!g && !m.isXML(e)) {
                        var h = /^(\w+$)|^\.([\w\-]+$)|^#([\w\-]+$)/.exec(b);
                        if (h && (e.nodeType === 1 || e.nodeType === 9)) {
                            if (h[1]) return s(e.getElementsByTagName(b), f);
                            if (h[2] && o.find.CLASS && e.getElementsByClassName) return s(e.getElementsByClassName(h[2]), f)
                        }
                        if (e.nodeType === 9) {
                            if (b === "body" && e.body) return s([e.body], f);
                            if (h && h[3]) {
                                var i = e.getElementById(h[3]);
                                if (!i || !i.parentNode) return s([], f);
                                if (i.id === h[3]) return s([i], f)
                            }
                            try {
                                return s(e.querySelectorAll(b), f)
                            } catch (j) {}
                        } else if (e.nodeType === 1 && e.nodeName.toLowerCase() !== "object") {
                            var k = e,
                                l = e.getAttribute("id"),
                                n = l || d,
                                p = e.parentNode,
                                q = /^\s*[+~]/.test(b);
                            l ? n = n.replace(/'/g, "\\$&") : e.setAttribute("id", n), q && p && (e = e.parentNode);
                            try {
                                if (!q || p) return s(e.querySelectorAll("[id='" + n + "'] " + b), f)
                            } catch (r) {} finally {
                                l || k.removeAttribute("id")
                            }
                        }
                    }
                    return a(b, e, f, g)
                };
                for (var e in a) m[e] = a[e];
                b = null
            }
        }(),
        function () {
            var a = c.documentElement,
                b = a.matchesSelector || a.mozMatchesSelector || a.webkitMatchesSelector || a.msMatchesSelector;
            if (b) {
                var d = !b.call(c.createElement("div"), "div"),
                    e = !1;
                try {
                    b.call(c.documentElement, "[test!='']:sizzle")
                } catch (f) {
                    e = !0
                }
                m.matchesSelector = function (a, c) {
                    c = c.replace(/\=\s*([^'"\]]*)\s*\]/g, "='$1']");
                    if (!m.isXML(a)) try {
                        if (e || !o.match.PSEUDO.test(c) && !/!=/.test(c)) {
                            var f = b.call(a, c);
                            if (f || !d || a.document && a.document.nodeType !== 11) return f
                        }
                    } catch (g) {}
                    return m(c, null, null, [a]).length > 0
                }
            }
        }(),
        function () {
            var a = c.createElement("div");
            a.innerHTML = "<div class='test e'></div><div class='test'></div>";
            if ( !! a.getElementsByClassName && a.getElementsByClassName("e").length !== 0) {
                a.lastChild.className = "e";
                if (a.getElementsByClassName("e").length === 1) return;
                o.order.splice(1, 0, "CLASS"), o.find.CLASS = function (a, b, c) {
                    if (typeof b.getElementsByClassName != "undefined" && !c) return b.getElementsByClassName(a[1])
                }, a = null
            }
        }(), c.documentElement.contains ? m.contains = function (a, b) {
            return a !== b && (a.contains ? a.contains(b) : !0)
        } : c.documentElement.compareDocumentPosition ? m.contains = function (a, b) {
            return !!(a.compareDocumentPosition(b) & 16)
        } : m.contains = function () {
            return !1
        }, m.isXML = function (a) {
            var b = (a ? a.ownerDocument || a : 0).documentElement;
            return b ? b.nodeName !== "HTML" : !1
        };
        var y = function (a, b, c) {
            var d, e = [],
                f = "",
                g = b.nodeType ? [b] : b;
            while (d = o.match.PSEUDO.exec(a)) f += d[0], a = a.replace(o.match.PSEUDO, "");
            a = o.relative[a] ? a + "*" : a;
            for (var h = 0, i = g.length; h < i; h++) m(a, g[h], e, c);
            return m.filter(f, e)
        };
        m.attr = f.attr, m.selectors.attrMap = {}, f.find = m, f.expr = m.selectors, f.expr[":"] = f.expr.filters, f.unique = m.uniqueSort, f.text = m.getText, f.isXMLDoc = m.isXML, f.contains = m.contains
    }();
    var L = /Until$/,
        M = /^(?:parents|prevUntil|prevAll)/,
        N = /,/,
        O = /^.[^:#\[\.,]*$/,
        P = Array.prototype.slice,
        Q = f.expr.match.globalPOS,
        R = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };
    f.fn.extend({
        find: function (a) {
            var b = this,
                c, d;
            if (typeof a != "string") return f(a).filter(function () {
                for (c = 0, d = b.length; c < d; c++)
                    if (f.contains(b[c], this)) return !0
            });
            var e = this.pushStack("", "find", a),
                g, h, i;
            for (c = 0, d = this.length; c < d; c++) {
                g = e.length, f.find(a, this[c], e);
                if (c > 0)
                    for (h = g; h < e.length; h++)
                        for (i = 0; i < g; i++)
                            if (e[i] === e[h]) {
                                e.splice(h--, 1);
                                break
                            }
            }
            return e
        },
        has: function (a) {
            var b = f(a);
            return this.filter(function () {
                for (var a = 0, c = b.length; a < c; a++)
                    if (f.contains(this, b[a])) return !0
            })
        },
        not: function (a) {
            return this.pushStack(T(this, a, !1), "not", a)
        },
        filter: function (a) {
            return this.pushStack(T(this, a, !0), "filter", a)
        },
        is: function (a) {
            return !!a && (typeof a == "string" ? Q.test(a) ? f(a, this.context).index(this[0]) >= 0 : f.filter(a, this).length > 0 : this.filter(a).length > 0)
        },
        closest: function (a, b) {
            var c = [],
                d, e, g = this[0];
            if (f.isArray(a)) {
                var h = 1;
                while (g && g.ownerDocument && g !== b) {
                    for (d = 0; d < a.length; d++) f(g).is(a[d]) && c.push({
                        selector: a[d],
                        elem: g,
                        level: h
                    });
                    g = g.parentNode, h++
                }
                return c
            }
            var i = Q.test(a) || typeof a != "string" ? f(a, b || this.context) : 0;
            for (d = 0, e = this.length; d < e; d++) {
                g = this[d];
                while (g) {
                    if (i ? i.index(g) > -1 : f.find.matchesSelector(g, a)) {
                        c.push(g);
                        break
                    }
                    g = g.parentNode;
                    if (!g || !g.ownerDocument || g === b || g.nodeType === 11) break
                }
            }
            c = c.length > 1 ? f.unique(c) : c;
            return this.pushStack(c, "closest", a)
        },
        index: function (a) {
            if (!a) return this[0] && this[0].parentNode ? this.prevAll().length : -1;
            if (typeof a == "string") return f.inArray(this[0], f(a));
            return f.inArray(a.jquery ? a[0] : a, this)
        },
        add: function (a, b) {
            var c = typeof a == "string" ? f(a, b) : f.makeArray(a && a.nodeType ? [a] : a),
                d = f.merge(this.get(), c);
            return this.pushStack(S(c[0]) || S(d[0]) ? d : f.unique(d))
        },
        andSelf: function () {
            return this.add(this.prevObject)
        }
    }), f.each({
        parent: function (a) {
            var b = a.parentNode;
            return b && b.nodeType !== 11 ? b : null
        },
        parents: function (a) {
            return f.dir(a, "parentNode")
        },
        parentsUntil: function (a, b, c) {
            return f.dir(a, "parentNode", c)
        },
        next: function (a) {
            return f.nth(a, 2, "nextSibling")
        },
        prev: function (a) {
            return f.nth(a, 2, "previousSibling")
        },
        nextAll: function (a) {
            return f.dir(a, "nextSibling")
        },
        prevAll: function (a) {
            return f.dir(a, "previousSibling")
        },
        nextUntil: function (a, b, c) {
            return f.dir(a, "nextSibling", c)
        },
        prevUntil: function (a, b, c) {
            return f.dir(a, "previousSibling", c)
        },
        siblings: function (a) {
            return f.sibling((a.parentNode || {}).firstChild, a)
        },
        children: function (a) {
            return f.sibling(a.firstChild)
        },
        contents: function (a) {
            return f.nodeName(a, "iframe") ? a.contentDocument || a.contentWindow.document : f.makeArray(a.childNodes)
        }
    }, function (a, b) {
        f.fn[a] = function (c, d) {
            var e = f.map(this, b, c);
            L.test(a) || (d = c), d && typeof d == "string" && (e = f.filter(d, e)), e = this.length > 1 && !R[a] ? f.unique(e) : e, (this.length > 1 || N.test(d)) && M.test(a) && (e = e.reverse());
            return this.pushStack(e, a, P.call(arguments).join(","))
        }
    }), f.extend({
        filter: function (a, b, c) {
            c && (a = ":not(" + a + ")");
            return b.length === 1 ? f.find.matchesSelector(b[0], a) ? [b[0]] : [] : f.find.matches(a, b)
        },
        dir: function (a, c, d) {
            var e = [],
                g = a[c];
            while (g && g.nodeType !== 9 && (d === b || g.nodeType !== 1 || !f(g).is(d))) g.nodeType === 1 && e.push(g), g = g[c];
            return e
        },
        nth: function (a, b, c, d) {
            b = b || 1;
            var e = 0;
            for (; a; a = a[c])
                if (a.nodeType === 1 && ++e === b) break;
            return a
        },
        sibling: function (a, b) {
            var c = [];
            for (; a; a = a.nextSibling) a.nodeType === 1 && a !== b && c.push(a);
            return c
        }
    });
    var V = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
        W = / jQuery\d+="(?:\d+|null)"/g,
        X = /^\s+/,
        Y = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/ig,
        Z = /<([\w:]+)/,
        $ = /<tbody/i,
        _ = /<|&#?\w+;/,
        ba = /<(?:script|style)/i,
        bb = /<(?:script|object|embed|option|style)/i,
        bc = new RegExp("<(?:" + V + ")[\\s/>]", "i"),
        bd = /checked\s*(?:[^=]|=\s*.checked.)/i,
        be = /\/(java|ecma)script/i,
        bf = /^\s*<!(?:\[CDATA\[|\-\-)/,
        bg = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            legend: [1, "<fieldset>", "</fieldset>"],
            thead: [1, "<table>", "</table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
            area: [1, "<map>", "</map>"],
            _default: [0, "", ""]
        }, bh = U(c);
    bg.optgroup = bg.option, bg.tbody = bg.tfoot = bg.colgroup = bg.caption = bg.thead, bg.th = bg.td, f.support.htmlSerialize || (bg._default = [1, "div<div>", "</div>"]), f.fn.extend({
        text: function (a) {
            return f.access(this, function (a) {
                return a === b ? f.text(this) : this.empty().append((this[0] && this[0].ownerDocument || c).createTextNode(a))
            }, null, a, arguments.length)
        },
        wrapAll: function (a) {
            if (f.isFunction(a)) return this.each(function (b) {
                f(this).wrapAll(a.call(this, b))
            });
            if (this[0]) {
                var b = f(a, this[0].ownerDocument).eq(0).clone(!0);
                this[0].parentNode && b.insertBefore(this[0]), b.map(function () {
                    var a = this;
                    while (a.firstChild && a.firstChild.nodeType === 1) a = a.firstChild;
                    return a
                }).append(this)
            }
            return this
        },
        wrapInner: function (a) {
            if (f.isFunction(a)) return this.each(function (b) {
                f(this).wrapInner(a.call(this, b))
            });
            return this.each(function () {
                var b = f(this),
                    c = b.contents();
                c.length ? c.wrapAll(a) : b.append(a)
            })
        },
        wrap: function (a) {
            var b = f.isFunction(a);
            return this.each(function (c) {
                f(this).wrapAll(b ? a.call(this, c) : a)
            })
        },
        unwrap: function () {
            return this.parent().each(function () {
                f.nodeName(this, "body") || f(this).replaceWith(this.childNodes)
            }).end()
        },
        append: function () {
            return this.domManip(arguments, !0, function (a) {
                this.nodeType === 1 && this.appendChild(a)
            })
        },
        prepend: function () {
            return this.domManip(arguments, !0, function (a) {
                this.nodeType === 1 && this.insertBefore(a, this.firstChild)
            })
        },
        before: function () {
            if (this[0] && this[0].parentNode) return this.domManip(arguments, !1, function (a) {
                this.parentNode.insertBefore(a, this)
            });
            if (arguments.length) {
                var a = f.clean(arguments);
                a.push.apply(a, this.toArray());
                return this.pushStack(a, "before", arguments)
            }
        },
        after: function () {
            if (this[0] && this[0].parentNode) return this.domManip(arguments, !1, function (a) {
                this.parentNode.insertBefore(a, this.nextSibling)
            });
            if (arguments.length) {
                var a = this.pushStack(this, "after", arguments);
                a.push.apply(a, f.clean(arguments));
                return a
            }
        },
        remove: function (a, b) {
            for (var c = 0, d;
                (d = this[c]) != null; c++)
                if (!a || f.filter(a, [d]).length)!b && d.nodeType === 1 && (f.cleanData(d.getElementsByTagName("*")), f.cleanData([d])), d.parentNode && d.parentNode.removeChild(d);
            return this
        },
        empty: function () {
            for (var a = 0, b;
                (b = this[a]) != null; a++) {
                b.nodeType === 1 && f.cleanData(b.getElementsByTagName("*"));
                while (b.firstChild) b.removeChild(b.firstChild)
            }
            return this
        },
        clone: function (a, b) {
            a = a == null ? !1 : a, b = b == null ? a : b;
            return this.map(function () {
                return f.clone(this, a, b)
            })
        },
        html: function (a) {
            return f.access(this, function (a) {
                var c = this[0] || {}, d = 0,
                    e = this.length;
                if (a === b) return c.nodeType === 1 ? c.innerHTML.replace(W, "") : null;
                if (typeof a == "string" && !ba.test(a) && (f.support.leadingWhitespace || !X.test(a)) && !bg[(Z.exec(a) || ["", ""])[1].toLowerCase()]) {
                    a = a.replace(Y, "<$1></$2>");
                    try {
                        for (; d < e; d++) c = this[d] || {}, c.nodeType === 1 && (f.cleanData(c.getElementsByTagName("*")), c.innerHTML = a);
                        c = 0
                    } catch (g) {}
                }
                c && this.empty().append(a)
            }, null, a, arguments.length)
        },
        replaceWith: function (a) {
            if (this[0] && this[0].parentNode) {
                if (f.isFunction(a)) return this.each(function (b) {
                    var c = f(this),
                        d = c.html();
                    c.replaceWith(a.call(this, b, d))
                });
                typeof a != "string" && (a = f(a).detach());
                return this.each(function () {
                    var b = this.nextSibling,
                        c = this.parentNode;
                    f(this).remove(), b ? f(b).before(a) : f(c).append(a)
                })
            }
            return this.length ? this.pushStack(f(f.isFunction(a) ? a() : a), "replaceWith", a) : this
        },
        detach: function (a) {
            return this.remove(a, !0)
        },
        domManip: function (a, c, d) {
            var e, g, h, i, j = a[0],
                k = [];
            if (!f.support.checkClone && arguments.length === 3 && typeof j == "string" && bd.test(j)) return this.each(function () {
                f(this).domManip(a, c, d, !0)
            });
            if (f.isFunction(j)) return this.each(function (e) {
                var g = f(this);
                a[0] = j.call(this, e, c ? g.html() : b), g.domManip(a, c, d)
            });
            if (this[0]) {
                i = j && j.parentNode, f.support.parentNode && i && i.nodeType === 11 && i.childNodes.length === this.length ? e = {
                    fragment: i
                } : e = f.buildFragment(a, this, k), h = e.fragment, h.childNodes.length === 1 ? g = h = h.firstChild : g = h.firstChild;
                if (g) {
                    c = c && f.nodeName(g, "tr");
                    for (var l = 0, m = this.length, n = m - 1; l < m; l++) d.call(c ? bi(this[l], g) : this[l], e.cacheable || m > 1 && l < n ? f.clone(h, !0, !0) : h)
                }
                k.length && f.each(k, function (a, b) {
                    b.src ? f.ajax({
                        type: "GET",
                        global: !1,
                        url: b.src,
                        async: !1,
                        dataType: "script"
                    }) : f.globalEval((b.text || b.textContent || b.innerHTML || "").replace(bf, "/*$0*/")), b.parentNode && b.parentNode.removeChild(b)
                })
            }
            return this
        }
    }), f.buildFragment = function (a, b, d) {
        var e, g, h, i, j = a[0];
        b && b[0] && (i = b[0].ownerDocument || b[0]), i.createDocumentFragment || (i = c), a.length === 1 && typeof j == "string" && j.length < 512 && i === c && j.charAt(0) === "<" && !bb.test(j) && (f.support.checkClone || !bd.test(j)) && (f.support.html5Clone || !bc.test(j)) && (g = !0, h = f.fragments[j], h && h !== 1 && (e = h)), e || (e = i.createDocumentFragment(), f.clean(a, i, e, d)), g && (f.fragments[j] = h ? e : 1);
        return {
            fragment: e,
            cacheable: g
        }
    }, f.fragments = {}, f.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function (a, b) {
        f.fn[a] = function (c) {
            var d = [],
                e = f(c),
                g = this.length === 1 && this[0].parentNode;
            if (g && g.nodeType === 11 && g.childNodes.length === 1 && e.length === 1) {
                e[b](this[0]);
                return this
            }
            for (var h = 0, i = e.length; h < i; h++) {
                var j = (h > 0 ? this.clone(!0) : this).get();
                f(e[h])[b](j), d = d.concat(j)
            }
            return this.pushStack(d, a, e.selector)
        }
    }), f.extend({
        clone: function (a, b, c) {
            var d, e, g, h = f.support.html5Clone || f.isXMLDoc(a) || !bc.test("<" + a.nodeName + ">") ? a.cloneNode(!0) : bo(a);
            if ((!f.support.noCloneEvent || !f.support.noCloneChecked) && (a.nodeType === 1 || a.nodeType === 11) && !f.isXMLDoc(a)) {
                bk(a, h), d = bl(a), e = bl(h);
                for (g = 0; d[g]; ++g) e[g] && bk(d[g], e[g])
            }
            if (b) {
                bj(a, h);
                if (c) {
                    d = bl(a), e = bl(h);
                    for (g = 0; d[g]; ++g) bj(d[g], e[g])
                }
            }
            d = e = null;
            return h
        },
        clean: function (a, b, d, e) {
            var g, h, i, j = [];
            b = b || c, typeof b.createElement == "undefined" && (b = b.ownerDocument || b[0] && b[0].ownerDocument || c);
            for (var k = 0, l;
                (l = a[k]) != null; k++) {
                typeof l == "number" && (l += "");
                if (!l) continue;
                if (typeof l == "string")
                    if (!_.test(l)) l = b.createTextNode(l);
                    else {
                        l = l.replace(Y, "<$1></$2>");
                        var m = (Z.exec(l) || ["", ""])[1].toLowerCase(),
                            n = bg[m] || bg._default,
                            o = n[0],
                            p = b.createElement("div"),
                            q = bh.childNodes,
                            r;
                        b === c ? bh.appendChild(p) : U(b).appendChild(p), p.innerHTML = n[1] + l + n[2];
                        while (o--) p = p.lastChild;
                        if (!f.support.tbody) {
                            var s = $.test(l),
                                t = m === "table" && !s ? p.firstChild && p.firstChild.childNodes : n[1] === "<table>" && !s ? p.childNodes : [];
                            for (i = t.length - 1; i >= 0; --i) f.nodeName(t[i], "tbody") && !t[i].childNodes.length && t[i].parentNode.removeChild(t[i])
                        }!f.support.leadingWhitespace && X.test(l) && p.insertBefore(b.createTextNode(X.exec(l)[0]), p.firstChild), l = p.childNodes, p && (p.parentNode.removeChild(p), q.length > 0 && (r = q[q.length - 1], r && r.parentNode && r.parentNode.removeChild(r)))
                    }
                var u;
                if (!f.support.appendChecked)
                    if (l[0] && typeof (u = l.length) == "number")
                        for (i = 0; i < u; i++) bn(l[i]);
                    else bn(l);
                l.nodeType ? j.push(l) : j = f.merge(j, l)
            }
            if (d) {
                g = function (a) {
                    return !a.type || be.test(a.type)
                };
                for (k = 0; j[k]; k++) {
                    h = j[k];
                    if (e && f.nodeName(h, "script") && (!h.type || be.test(h.type))) e.push(h.parentNode ? h.parentNode.removeChild(h) : h);
                    else {
                        if (h.nodeType === 1) {
                            var v = f.grep(h.getElementsByTagName("script"), g);
                            j.splice.apply(j, [k + 1, 0].concat(v))
                        }
                        d.appendChild(h)
                    }
                }
            }
            return j
        },
        cleanData: function (a) {
            var b, c, d = f.cache,
                e = f.event.special,
                g = f.support.deleteExpando;
            for (var h = 0, i;
                (i = a[h]) != null; h++) {
                if (i.nodeName && f.noData[i.nodeName.toLowerCase()]) continue;
                c = i[f.expando];
                if (c) {
                    b = d[c];
                    if (b && b.events) {
                        for (var j in b.events) e[j] ? f.event.remove(i, j) : f.removeEvent(i, j, b.handle);
                        b.handle && (b.handle.elem = null)
                    }
                    g ? delete i[f.expando] : i.removeAttribute && i.removeAttribute(f.expando), delete d[c]
                }
            }
        }
    });
    var bp = /alpha\([^)]*\)/i,
        bq = /opacity=([^)]*)/,
        br = /([A-Z]|^ms)/g,
        bs = /^[\-+]?(?:\d*\.)?\d+$/i,
        bt = /^-?(?:\d*\.)?\d+(?!px)[^\d\s]+$/i,
        bu = /^([\-+])=([\-+.\de]+)/,
        bv = /^margin/,
        bw = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        }, bx = ["Top", "Right", "Bottom", "Left"],
        by, bz, bA;
    f.fn.css = function (a, c) {
        return f.access(this, function (a, c, d) {
            return d !== b ? f.style(a, c, d) : f.css(a, c)
        }, a, c, arguments.length > 1)
    }, f.extend({
        cssHooks: {
            opacity: {
                get: function (a, b) {
                    if (b) {
                        var c = by(a, "opacity");
                        return c === "" ? "1" : c
                    }
                    return a.style.opacity
                }
            }
        },
        cssNumber: {
            fillOpacity: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {
            "float": f.support.cssFloat ? "cssFloat" : "styleFloat"
        },
        style: function (a, c, d, e) {
            if ( !! a && a.nodeType !== 3 && a.nodeType !== 8 && !! a.style) {
                var g, h, i = f.camelCase(c),
                    j = a.style,
                    k = f.cssHooks[i];
                c = f.cssProps[i] || i;
                if (d === b) {
                    if (k && "get" in k && (g = k.get(a, !1, e)) !== b) return g;
                    return j[c]
                }
                h = typeof d, h === "string" && (g = bu.exec(d)) && (d = +(g[1] + 1) * +g[2] + parseFloat(f.css(a, c)), h = "number");
                if (d == null || h === "number" && isNaN(d)) return;
                h === "number" && !f.cssNumber[i] && (d += "px");
                if (!k || !("set" in k) || (d = k.set(a, d)) !== b) try {
                    j[c] = d
                } catch (l) {}
            }
        },
        css: function (a, c, d) {
            var e, g;
            c = f.camelCase(c), g = f.cssHooks[c], c = f.cssProps[c] || c, c === "cssFloat" && (c = "float");
            if (g && "get" in g && (e = g.get(a, !0, d)) !== b) return e;
            if (by) return by(a, c)
        },
        swap: function (a, b, c) {
            var d = {}, e, f;
            for (f in b) d[f] = a.style[f], a.style[f] = b[f];
            e = c.call(a);
            for (f in b) a.style[f] = d[f];
            return e
        }
    }), f.curCSS = f.css, c.defaultView && c.defaultView.getComputedStyle && (bz = function (a, b) {
        var c, d, e, g, h = a.style;
        b = b.replace(br, "-$1").toLowerCase(), (d = a.ownerDocument.defaultView) && (e = d.getComputedStyle(a, null)) && (c = e.getPropertyValue(b), c === "" && !f.contains(a.ownerDocument.documentElement, a) && (c = f.style(a, b))), !f.support.pixelMargin && e && bv.test(b) && bt.test(c) && (g = h.width, h.width = c, c = e.width, h.width = g);
        return c
    }), c.documentElement.currentStyle && (bA = function (a, b) {
        var c, d, e, f = a.currentStyle && a.currentStyle[b],
            g = a.style;
        f == null && g && (e = g[b]) && (f = e), bt.test(f) && (c = g.left, d = a.runtimeStyle && a.runtimeStyle.left, d && (a.runtimeStyle.left = a.currentStyle.left), g.left = b === "fontSize" ? "1em" : f, f = g.pixelLeft + "px", g.left = c, d && (a.runtimeStyle.left = d));
        return f === "" ? "auto" : f
    }), by = bz || bA, f.each(["height", "width"], function (a, b) {
        f.cssHooks[b] = {
            get: function (a, c, d) {
                if (c) return a.offsetWidth !== 0 ? bB(a, b, d) : f.swap(a, bw, function () {
                    return bB(a, b, d)
                })
            },
            set: function (a, b) {
                return bs.test(b) ? b + "px" : b
            }
        }
    }), f.support.opacity || (f.cssHooks.opacity = {
        get: function (a, b) {
            return bq.test((b && a.currentStyle ? a.currentStyle.filter : a.style.filter) || "") ? parseFloat(RegExp.$1) / 100 + "" : b ? "1" : ""
        },
        set: function (a, b) {
            var c = a.style,
                d = a.currentStyle,
                e = f.isNumeric(b) ? "alpha(opacity=" + b * 100 + ")" : "",
                g = d && d.filter || c.filter || "";
            c.zoom = 1;
            if (b >= 1 && f.trim(g.replace(bp, "")) === "") {
                c.removeAttribute("filter");
                if (d && !d.filter) return
            }
            c.filter = bp.test(g) ? g.replace(bp, e) : g + " " + e
        }
    }), f(function () {
        f.support.reliableMarginRight || (f.cssHooks.marginRight = {
            get: function (a, b) {
                return f.swap(a, {
                    display: "inline-block"
                }, function () {
                    return b ? by(a, "margin-right") : a.style.marginRight
                })
            }
        })
    }), f.expr && f.expr.filters && (f.expr.filters.hidden = function (a) {
        var b = a.offsetWidth,
            c = a.offsetHeight;
        return b === 0 && c === 0 || !f.support.reliableHiddenOffsets && (a.style && a.style.display || f.css(a, "display")) === "none"
    }, f.expr.filters.visible = function (a) {
        return !f.expr.filters.hidden(a)
    }), f.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function (a, b) {
        f.cssHooks[a + b] = {
            expand: function (c) {
                var d, e = typeof c == "string" ? c.split(" ") : [c],
                    f = {};
                for (d = 0; d < 4; d++) f[a + bx[d] + b] = e[d] || e[d - 2] || e[0];
                return f
            }
        }
    });
    var bC = /%20/g,
        bD = /\[\]$/,
        bE = /\r?\n/g,
        bF = /#.*$/,
        bG = /^(.*?):[ \t]*([^\r\n]*)\r?$/mg,
        bH = /^(?:color|date|datetime|datetime-local|email|hidden|month|number|password|range|search|tel|text|time|url|week)$/i,
        bI = /^(?:about|app|app\-storage|.+\-extension|file|res|widget):$/,
        bJ = /^(?:GET|HEAD)$/,
        bK = /^\/\//,
        bL = /\?/,
        bM = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,
        bN = /^(?:select|textarea)/i,
        bO = /\s+/,
        bP = /([?&])_=[^&]*/,
        bQ = /^([\w\+\.\-]+:)(?:\/\/([^\/?#:]*)(?::(\d+))?)?/,
        bR = f.fn.load,
        bS = {}, bT = {}, bU, bV, bW = ["*/"] + ["*"];
    try {
        bU = e.href
    } catch (bX) {
        bU = c.createElement("a"), bU.href = "", bU = bU.href
    }
    bV = bQ.exec(bU.toLowerCase()) || [], f.fn.extend({
        load: function (a, c, d) {
            if (typeof a != "string" && bR) return bR.apply(this, arguments);
            if (!this.length) return this;
            var e = a.indexOf(" ");
            if (e >= 0) {
                var g = a.slice(e, a.length);
                a = a.slice(0, e)
            }
            var h = "GET";
            c && (f.isFunction(c) ? (d = c, c = b) : typeof c == "object" && (c = f.param(c, f.ajaxSettings.traditional), h = "POST"));
            var i = this;
            f.ajax({
                url: a,
                type: h,
                dataType: "html",
                data: c,
                complete: function (a, b, c) {
                    c = a.responseText, a.isResolved() && (a.done(function (a) {
                        c = a
                    }), i.html(g ? f("<div>").append(c.replace(bM, "")).find(g) : c)), d && i.each(d, [c, b, a])
                }
            });
            return this
        },
        serialize: function () {
            return f.param(this.serializeArray())
        },
        serializeArray: function () {
            return this.map(function () {
                return this.elements ? f.makeArray(this.elements) : this
            }).filter(function () {
                return this.name && !this.disabled && (this.checked || bN.test(this.nodeName) || bH.test(this.type))
            }).map(function (a, b) {
                var c = f(this).val();
                return c == null ? null : f.isArray(c) ? f.map(c, function (a, c) {
                    return {
                        name: b.name,
                        value: a.replace(bE, "\r\n")
                    }
                }) : {
                    name: b.name,
                    value: c.replace(bE, "\r\n")
                }
            }).get()
        }
    }), f.each("ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(" "), function (a, b) {
        f.fn[b] = function (a) {
            return this.on(b, a)
        }
    }), f.each(["get", "post"], function (a, c) {
        f[c] = function (a, d, e, g) {
            f.isFunction(d) && (g = g || e, e = d, d = b);
            return f.ajax({
                type: c,
                url: a,
                data: d,
                success: e,
                dataType: g
            })
        }
    }), f.extend({
        getScript: function (a, c) {
            return f.get(a, b, c, "script")
        },
        getJSON: function (a, b, c) {
            return f.get(a, b, c, "json")
        },
        ajaxSetup: function (a, b) {
            b ? b$(a, f.ajaxSettings) : (b = a, a = f.ajaxSettings), b$(a, b);
            return a
        },
        ajaxSettings: {
            url: bU,
            isLocal: bI.test(bV[1]),
            global: !0,
            type: "GET",
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            processData: !0,
            async: !0,
            accepts: {
                xml: "application/xml, text/xml",
                html: "text/html",
                text: "text/plain",
                json: "application/json, text/javascript",
                "*": bW
            },
            contents: {
                xml: /xml/,
                html: /html/,
                json: /json/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText"
            },
            converters: {
                "* text": a.String,
                "text html": !0,
                "text json": f.parseJSON,
                "text xml": f.parseXML
            },
            flatOptions: {
                context: !0,
                url: !0
            }
        },
        ajaxPrefilter: bY(bS),
        ajaxTransport: bY(bT),
        ajax: function (a, c) {
            function w(a, c, l, m) {
                if (s !== 2) {
                    s = 2, q && clearTimeout(q), p = b, n = m || "", v.readyState = a > 0 ? 4 : 0;
                    var o, r, u, w = c,
                        x = l ? ca(d, v, l) : b,
                        y, z;
                    if (a >= 200 && a < 300 || a === 304) {
                        if (d.ifModified) {
                            if (y = v.getResponseHeader("Last-Modified")) f.lastModified[k] = y;
                            if (z = v.getResponseHeader("Etag")) f.etag[k] = z
                        }
                        if (a === 304) w = "notmodified", o = !0;
                        else try {
                            r = cb(d, x), w = "success", o = !0
                        } catch (A) {
                            w = "parsererror", u = A
                        }
                    } else {
                        u = w;
                        if (!w || a) w = "error", a < 0 && (a = 0)
                    }
                    v.status = a, v.statusText = "" + (c || w), o ? h.resolveWith(e, [r, w, v]) : h.rejectWith(e, [v, w, u]), v.statusCode(j), j = b, t && g.trigger("ajax" + (o ? "Success" : "Error"), [v, d, o ? r : u]), i.fireWith(e, [v, w]), t && (g.trigger("ajaxComplete", [v, d]), --f.active || f.event.trigger("ajaxStop"))
                }
            }
            typeof a == "object" && (c = a, a = b), c = c || {};
            var d = f.ajaxSetup({}, c),
                e = d.context || d,
                g = e !== d && (e.nodeType || e instanceof f) ? f(e) : f.event,
                h = f.Deferred(),
                i = f.Callbacks("once memory"),
                j = d.statusCode || {}, k, l = {}, m = {}, n, o, p, q, r, s = 0,
                t, u, v = {
                    readyState: 0,
                    setRequestHeader: function (a, b) {
                        if (!s) {
                            var c = a.toLowerCase();
                            a = m[c] = m[c] || a, l[a] = b
                        }
                        return this
                    },
                    getAllResponseHeaders: function () {
                        return s === 2 ? n : null
                    },
                    getResponseHeader: function (a) {
                        var c;
                        if (s === 2) {
                            if (!o) {
                                o = {};
                                while (c = bG.exec(n)) o[c[1].toLowerCase()] = c[2]
                            }
                            c = o[a.toLowerCase()]
                        }
                        return c === b ? null : c
                    },
                    overrideMimeType: function (a) {
                        s || (d.mimeType = a);
                        return this
                    },
                    abort: function (a) {
                        a = a || "abort", p && p.abort(a), w(0, a);
                        return this
                    }
                };
            h.promise(v), v.success = v.done, v.error = v.fail, v.complete = i.add, v.statusCode = function (a) {
                if (a) {
                    var b;
                    if (s < 2)
                        for (b in a) j[b] = [j[b], a[b]];
                    else b = a[v.status], v.then(b, b)
                }
                return this
            }, d.url = ((a || d.url) + "").replace(bF, "").replace(bK, bV[1] + "//"), d.dataTypes = f.trim(d.dataType || "*").toLowerCase().split(bO), d.crossDomain == null && (r = bQ.exec(d.url.toLowerCase()), d.crossDomain = !(!r || r[1] == bV[1] && r[2] == bV[2] && (r[3] || (r[1] === "http:" ? 80 : 443)) == (bV[3] || (bV[1] === "http:" ? 80 : 443)))), d.data && d.processData && typeof d.data != "string" && (d.data = f.param(d.data, d.traditional)), bZ(bS, d, c, v);
            if (s === 2) return !1;
            t = d.global, d.type = d.type.toUpperCase(), d.hasContent = !bJ.test(d.type), t && f.active++ === 0 && f.event.trigger("ajaxStart");
            if (!d.hasContent) {
                d.data && (d.url += (bL.test(d.url) ? "&" : "?") + d.data, delete d.data), k = d.url;
                if (d.cache === !1) {
                    var x = f.now(),
                        y = d.url.replace(bP, "$1_=" + x);
                    d.url = y + (y === d.url ? (bL.test(d.url) ? "&" : "?") + "_=" + x : "")
                }
            }(d.data && d.hasContent && d.contentType !== !1 || c.contentType) && v.setRequestHeader("Content-Type", d.contentType), d.ifModified && (k = k || d.url, f.lastModified[k] && v.setRequestHeader("If-Modified-Since", f.lastModified[k]), f.etag[k] && v.setRequestHeader("If-None-Match", f.etag[k])), v.setRequestHeader("Accept", d.dataTypes[0] && d.accepts[d.dataTypes[0]] ? d.accepts[d.dataTypes[0]] + (d.dataTypes[0] !== "*" ? ", " + bW + "; q=0.01" : "") : d.accepts["*"]);
            for (u in d.headers) v.setRequestHeader(u, d.headers[u]);
            if (d.beforeSend && (d.beforeSend.call(e, v, d) === !1 || s === 2)) {
                v.abort();
                return !1
            }
            for (u in {
                success: 1,
                error: 1,
                complete: 1
            }) v[u](d[u]);
            p = bZ(bT, d, c, v);
            if (!p) w(-1, "No Transport");
            else {
                v.readyState = 1, t && g.trigger("ajaxSend", [v, d]), d.async && d.timeout > 0 && (q = setTimeout(function () {
                    v.abort("timeout")
                }, d.timeout));
                try {
                    s = 1, p.send(l, w)
                } catch (z) {
                    if (s < 2) w(-1, z);
                    else throw z
                }
            }
            return v
        },
        param: function (a, c) {
            var d = [],
                e = function (a, b) {
                    b = f.isFunction(b) ? b() : b, d[d.length] = encodeURIComponent(a) + "=" + encodeURIComponent(b)
                };
            c === b && (c = f.ajaxSettings.traditional);
            if (f.isArray(a) || a.jquery && !f.isPlainObject(a)) f.each(a, function () {
                e(this.name, this.value)
            });
            else
                for (var g in a) b_(g, a[g], c, e);
            return d.join("&").replace(bC, "+")
        }
    }), f.extend({
        active: 0,
        lastModified: {},
        etag: {}
    });
    var cc = f.now(),
        cd = /(\=)\?(&|$)|\?\?/i;
    f.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function () {
            return f.expando + "_" + cc++
        }
    }), f.ajaxPrefilter("json jsonp", function (b, c, d) {
        var e = typeof b.data == "string" && /^application\/x\-www\-form\-urlencoded/.test(b.contentType);
        if (b.dataTypes[0] === "jsonp" || b.jsonp !== !1 && (cd.test(b.url) || e && cd.test(b.data))) {
            var g, h = b.jsonpCallback = f.isFunction(b.jsonpCallback) ? b.jsonpCallback() : b.jsonpCallback,
                i = a[h],
                j = b.url,
                k = b.data,
                l = "$1" + h + "$2";
            b.jsonp !== !1 && (j = j.replace(cd, l), b.url === j && (e && (k = k.replace(cd, l)), b.data === k && (j += (/\?/.test(j) ? "&" : "?") + b.jsonp + "=" + h))), b.url = j, b.data = k, a[h] = function (a) {
                g = [a]
            }, d.always(function () {
                a[h] = i, g && f.isFunction(i) && a[h](g[0])
            }), b.converters["script json"] = function () {
                g || f.error(h + " was not called");
                return g[0]
            }, b.dataTypes[0] = "json";
            return "script"
        }
    }), f.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /javascript|ecmascript/
        },
        converters: {
            "text script": function (a) {
                f.globalEval(a);
                return a
            }
        }
    }), f.ajaxPrefilter("script", function (a) {
        a.cache === b && (a.cache = !1), a.crossDomain && (a.type = "GET", a.global = !1)
    }), f.ajaxTransport("script", function (a) {
        if (a.crossDomain) {
            var d, e = c.head || c.getElementsByTagName("head")[0] || c.documentElement;
            return {
                send: function (f, g) {
                    d = c.createElement("script"), d.async = "async", a.scriptCharset && (d.charset = a.scriptCharset), d.src = a.url, d.onload = d.onreadystatechange = function (a, c) {
                        if (c || !d.readyState || /loaded|complete/.test(d.readyState)) d.onload = d.onreadystatechange = null, e && d.parentNode && e.removeChild(d), d = b, c || g(200, "success")
                    }, e.insertBefore(d, e.firstChild)
                },
                abort: function () {
                    d && d.onload(0, 1)
                }
            }
        }
    });
    var ce = a.ActiveXObject ? function () {
            for (var a in cg) cg[a](0, 1)
        } : !1,
        cf = 0,
        cg;
    f.ajaxSettings.xhr = a.ActiveXObject ? function () {
        return !this.isLocal && ch() || ci()
    } : ch,
    function (a) {
        f.extend(f.support, {
            ajax: !! a,
            cors: !! a && "withCredentials" in a
        })
    }(f.ajaxSettings.xhr()), f.support.ajax && f.ajaxTransport(function (c) {
        if (!c.crossDomain || f.support.cors) {
            var d;
            return {
                send: function (e, g) {
                    var h = c.xhr(),
                        i, j;
                    c.username ? h.open(c.type, c.url, c.async, c.username, c.password) : h.open(c.type, c.url, c.async);
                    if (c.xhrFields)
                        for (j in c.xhrFields) h[j] = c.xhrFields[j];
                    c.mimeType && h.overrideMimeType && h.overrideMimeType(c.mimeType), !c.crossDomain && !e["X-Requested-With"] && (e["X-Requested-With"] = "XMLHttpRequest");
                    try {
                        for (j in e) h.setRequestHeader(j, e[j])
                    } catch (k) {}
                    h.send(c.hasContent && c.data || null), d = function (a, e) {
                        var j, k, l, m, n;
                        try {
                            if (d && (e || h.readyState === 4)) {
                                d = b, i && (h.onreadystatechange = f.noop, ce && delete cg[i]);
                                if (e) h.readyState !== 4 && h.abort();
                                else {
                                    j = h.status, l = h.getAllResponseHeaders(), m = {}, n = h.responseXML, n && n.documentElement && (m.xml = n);
                                    try {
                                        m.text = h.responseText
                                    } catch (a) {}
                                    try {
                                        k = h.statusText
                                    } catch (o) {
                                        k = ""
                                    }!j && c.isLocal && !c.crossDomain ? j = m.text ? 200 : 404 : j === 1223 && (j = 204)
                                }
                            }
                        } catch (p) {
                            e || g(-1, p)
                        }
                        m && g(j, k, m, l)
                    }, !c.async || h.readyState === 4 ? d() : (i = ++cf, ce && (cg || (cg = {}, f(a).unload(ce)), cg[i] = d), h.onreadystatechange = d)
                },
                abort: function () {
                    d && d(0, 1)
                }
            }
        }
    });
    var cj = {}, ck, cl, cm = /^(?:toggle|show|hide)$/,
        cn = /^([+\-]=)?([\d+.\-]+)([a-z%]*)$/i,
        co, cp = [
            ["height", "marginTop", "marginBottom", "paddingTop", "paddingBottom"],
            ["width", "marginLeft", "marginRight", "paddingLeft", "paddingRight"],
            ["opacity"]
        ],
        cq;
    f.fn.extend({
        show: function (a, b, c) {
            var d, e;
            if (a || a === 0) return this.animate(ct("show", 3), a, b, c);
            for (var g = 0, h = this.length; g < h; g++) d = this[g], d.style && (e = d.style.display, !f._data(d, "olddisplay") && e === "none" && (e = d.style.display = ""), (e === "" && f.css(d, "display") === "none" || !f.contains(d.ownerDocument.documentElement, d)) && f._data(d, "olddisplay", cu(d.nodeName)));
            for (g = 0; g < h; g++) {
                d = this[g];
                if (d.style) {
                    e = d.style.display;
                    if (e === "" || e === "none") d.style.display = f._data(d, "olddisplay") || ""
                }
            }
            return this
        },
        hide: function (a, b, c) {
            if (a || a === 0) return this.animate(ct("hide", 3), a, b, c);
            var d, e, g = 0,
                h = this.length;
            for (; g < h; g++) d = this[g], d.style && (e = f.css(d, "display"), e !== "none" && !f._data(d, "olddisplay") && f._data(d, "olddisplay", e));
            for (g = 0; g < h; g++) this[g].style && (this[g].style.display = "none");
            return this
        },
        _toggle: f.fn.toggle,
        toggle: function (a, b, c) {
            var d = typeof a == "boolean";
            f.isFunction(a) && f.isFunction(b) ? this._toggle.apply(this, arguments) : a == null || d ? this.each(function () {
                var b = d ? a : f(this).is(":hidden");
                f(this)[b ? "show" : "hide"]()
            }) : this.animate(ct("toggle", 3), a, b, c);
            return this
        },
        fadeTo: function (a, b, c, d) {
            return this.filter(":hidden").css("opacity", 0).show().end().animate({
                opacity: b
            }, a, c, d)
        },
        animate: function (a, b, c, d) {
            function g() {
                e.queue === !1 && f._mark(this);
                var b = f.extend({}, e),
                    c = this.nodeType === 1,
                    d = c && f(this).is(":hidden"),
                    g, h, i, j, k, l, m, n, o, p, q;
                b.animatedProperties = {};
                for (i in a) {
                    g = f.camelCase(i), i !== g && (a[g] = a[i], delete a[i]);
                    if ((k = f.cssHooks[g]) && "expand" in k) {
                        l = k.expand(a[g]), delete a[g];
                        for (i in l) i in a || (a[i] = l[i])
                    }
                }
                for (g in a) {
                    h = a[g], f.isArray(h) ? (b.animatedProperties[g] = h[1], h = a[g] = h[0]) : b.animatedProperties[g] = b.specialEasing && b.specialEasing[g] || b.easing || "swing";
                    if (h === "hide" && d || h === "show" && !d) return b.complete.call(this);
                    c && (g === "height" || g === "width") && (b.overflow = [this.style.overflow, this.style.overflowX, this.style.overflowY], f.css(this, "display") === "inline" && f.css(this, "float") === "none" && (!f.support.inlineBlockNeedsLayout || cu(this.nodeName) === "inline" ? this.style.display = "inline-block" : this.style.zoom = 1))
                }
                b.overflow != null && (this.style.overflow = "hidden");
                for (i in a) j = new f.fx(this, b, i), h = a[i], cm.test(h) ? (q = f._data(this, "toggle" + i) || (h === "toggle" ? d ? "show" : "hide" : 0), q ? (f._data(this, "toggle" + i, q === "show" ? "hide" : "show"), j[q]()) : j[h]()) : (m = cn.exec(h), n = j.cur(), m ? (o = parseFloat(m[2]), p = m[3] || (f.cssNumber[i] ? "" : "px"), p !== "px" && (f.style(this, i, (o || 1) + p), n = (o || 1) / j.cur() * n, f.style(this, i, n + p)), m[1] && (o = (m[1] === "-=" ? -1 : 1) * o + n), j.custom(n, o, p)) : j.custom(n, h, ""));
                return !0
            }
            var e = f.speed(b, c, d);
            if (f.isEmptyObject(a)) return this.each(e.complete, [!1]);
            a = f.extend({}, a);
            return e.queue === !1 ? this.each(g) : this.queue(e.queue, g)
        },
        stop: function (a, c, d) {
            typeof a != "string" && (d = c, c = a, a = b), c && a !== !1 && this.queue(a || "fx", []);
            return this.each(function () {
                function h(a, b, c) {
                    var e = b[c];
                    f.removeData(a, c, !0), e.stop(d)
                }
                var b, c = !1,
                    e = f.timers,
                    g = f._data(this);
                d || f._unmark(!0, this);
                if (a == null)
                    for (b in g) g[b] && g[b].stop && b.indexOf(".run") === b.length - 4 && h(this, g, b);
                else g[b = a + ".run"] && g[b].stop && h(this, g, b);
                for (b = e.length; b--;) e[b].elem === this && (a == null || e[b].queue === a) && (d ? e[b](!0) : e[b].saveState(), c = !0, e.splice(b, 1));
                (!d || !c) && f.dequeue(this, a)
            })
        }
    }), f.each({
        slideDown: ct("show", 1),
        slideUp: ct("hide", 1),
        slideToggle: ct("toggle", 1),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    }, function (a, b) {
        f.fn[a] = function (a, c, d) {
            return this.animate(b, a, c, d)
        }
    }), f.extend({
        speed: function (a, b, c) {
            var d = a && typeof a == "object" ? f.extend({}, a) : {
                complete: c || !c && b || f.isFunction(a) && a,
                duration: a,
                easing: c && b || b && !f.isFunction(b) && b
            };
            d.duration = f.fx.off ? 0 : typeof d.duration == "number" ? d.duration : d.duration in f.fx.speeds ? f.fx.speeds[d.duration] : f.fx.speeds._default;
            if (d.queue == null || d.queue === !0) d.queue = "fx";
            d.old = d.complete, d.complete = function (a) {
                f.isFunction(d.old) && d.old.call(this), d.queue ? f.dequeue(this, d.queue) : a !== !1 && f._unmark(this)
            };
            return d
        },
        easing: {
            linear: function (a) {
                return a
            },
            swing: function (a) {
                return -Math.cos(a * Math.PI) / 2 + .5
            }
        },
        timers: [],
        fx: function (a, b, c) {
            this.options = b, this.elem = a, this.prop = c, b.orig = b.orig || {}
        }
    }), f.fx.prototype = {
        update: function () {
            this.options.step && this.options.step.call(this.elem, this.now, this), (f.fx.step[this.prop] || f.fx.step._default)(this)
        },
        cur: function () {
            if (this.elem[this.prop] != null && (!this.elem.style || this.elem.style[this.prop] == null)) return this.elem[this.prop];
            var a, b = f.css(this.elem, this.prop);
            return isNaN(a = parseFloat(b)) ? !b || b === "auto" ? 0 : b : a
        },
        custom: function (a, c, d) {
            function h(a) {
                return e.step(a)
            }
            var e = this,
                g = f.fx;
            this.startTime = cq || cr(), this.end = c, this.now = this.start = a, this.pos = this.state = 0, this.unit = d || this.unit || (f.cssNumber[this.prop] ? "" : "px"), h.queue = this.options.queue, h.elem = this.elem, h.saveState = function () {
                f._data(e.elem, "fxshow" + e.prop) === b && (e.options.hide ? f._data(e.elem, "fxshow" + e.prop, e.start) : e.options.show && f._data(e.elem, "fxshow" + e.prop, e.end))
            }, h() && f.timers.push(h) && !co && (co = setInterval(g.tick, g.interval))
        },
        show: function () {
            var a = f._data(this.elem, "fxshow" + this.prop);
            this.options.orig[this.prop] = a || f.style(this.elem, this.prop), this.options.show = !0, a !== b ? this.custom(this.cur(), a) : this.custom(this.prop === "width" || this.prop === "height" ? 1 : 0, this.cur()), f(this.elem).show()
        },
        hide: function () {
            this.options.orig[this.prop] = f._data(this.elem, "fxshow" + this.prop) || f.style(this.elem, this.prop), this.options.hide = !0, this.custom(this.cur(), 0)
        },
        step: function (a) {
            var b, c, d, e = cq || cr(),
                g = !0,
                h = this.elem,
                i = this.options;
            if (a || e >= i.duration + this.startTime) {
                this.now = this.end, this.pos = this.state = 1, this.update(), i.animatedProperties[this.prop] = !0;
                for (b in i.animatedProperties) i.animatedProperties[b] !== !0 && (g = !1);
                if (g) {
                    i.overflow != null && !f.support.shrinkWrapBlocks && f.each(["", "X", "Y"], function (a, b) {
                        h.style["overflow" + b] = i.overflow[a]
                    }), i.hide && f(h).hide();
                    if (i.hide || i.show)
                        for (b in i.animatedProperties) f.style(h, b, i.orig[b]), f.removeData(h, "fxshow" + b, !0), f.removeData(h, "toggle" + b, !0);
                    d = i.complete, d && (i.complete = !1, d.call(h))
                }
                return !1
            }
            i.duration == Infinity ? this.now = e : (c = e - this.startTime, this.state = c / i.duration, this.pos = f.easing[i.animatedProperties[this.prop]](this.state, c, 0, 1, i.duration), this.now = this.start + (this.end - this.start) * this.pos), this.update();
            return !0
        }
    }, f.extend(f.fx, {
        tick: function () {
            var a, b = f.timers,
                c = 0;
            for (; c < b.length; c++) a = b[c], !a() && b[c] === a && b.splice(c--, 1);
            b.length || f.fx.stop()
        },
        interval: 13,
        stop: function () {
            clearInterval(co), co = null
        },
        speeds: {
            slow: 600,
            fast: 200,
            _default: 400
        },
        step: {
            opacity: function (a) {
                f.style(a.elem, "opacity", a.now)
            },
            _default: function (a) {
                a.elem.style && a.elem.style[a.prop] != null ? a.elem.style[a.prop] = a.now + a.unit : a.elem[a.prop] = a.now
            }
        }
    }), f.each(cp.concat.apply([], cp), function (a, b) {
        b.indexOf("margin") && (f.fx.step[b] = function (a) {
            f.style(a.elem, b, Math.max(0, a.now) + a.unit)
        })
    }), f.expr && f.expr.filters && (f.expr.filters.animated = function (a) {
        return f.grep(f.timers, function (b) {
            return a === b.elem
        }).length
    });
    var cv, cw = /^t(?:able|d|h)$/i,
        cx = /^(?:body|html)$/i;
    "getBoundingClientRect" in c.documentElement ? cv = function (a, b, c, d) {
        try {
            d = a.getBoundingClientRect()
        } catch (e) {}
        if (!d || !f.contains(c, a)) return d ? {
            top: d.top,
            left: d.left
        } : {
            top: 0,
            left: 0
        };
        var g = b.body,
            h = cy(b),
            i = c.clientTop || g.clientTop || 0,
            j = c.clientLeft || g.clientLeft || 0,
            k = h.pageYOffset || f.support.boxModel && c.scrollTop || g.scrollTop,
            l = h.pageXOffset || f.support.boxModel && c.scrollLeft || g.scrollLeft,
            m = d.top + k - i,
            n = d.left + l - j;
        return {
            top: m,
            left: n
        }
    } : cv = function (a, b, c) {
        var d, e = a.offsetParent,
            g = a,
            h = b.body,
            i = b.defaultView,
            j = i ? i.getComputedStyle(a, null) : a.currentStyle,
            k = a.offsetTop,
            l = a.offsetLeft;
        while ((a = a.parentNode) && a !== h && a !== c) {
            if (f.support.fixedPosition && j.position === "fixed") break;
            d = i ? i.getComputedStyle(a, null) : a.currentStyle, k -= a.scrollTop, l -= a.scrollLeft, a === e && (k += a.offsetTop, l += a.offsetLeft, f.support.doesNotAddBorder && (!f.support.doesAddBorderForTableAndCells || !cw.test(a.nodeName)) && (k += parseFloat(d.borderTopWidth) || 0, l += parseFloat(d.borderLeftWidth) || 0), g = e, e = a.offsetParent), f.support.subtractsBorderForOverflowNotVisible && d.overflow !== "visible" && (k += parseFloat(d.borderTopWidth) || 0, l += parseFloat(d.borderLeftWidth) || 0), j = d
        }
        if (j.position === "relative" || j.position === "static") k += h.offsetTop, l += h.offsetLeft;
        f.support.fixedPosition && j.position === "fixed" && (k += Math.max(c.scrollTop, h.scrollTop), l += Math.max(c.scrollLeft, h.scrollLeft));
        return {
            top: k,
            left: l
        }
    }, f.fn.offset = function (a) {
        if (arguments.length) return a === b ? this : this.each(function (b) {
            f.offset.setOffset(this, a, b)
        });
        var c = this[0],
            d = c && c.ownerDocument;
        if (!d) return null;
        if (c === d.body) return f.offset.bodyOffset(c);
        return cv(c, d, d.documentElement)
    }, f.offset = {
        bodyOffset: function (a) {
            var b = a.offsetTop,
                c = a.offsetLeft;
            f.support.doesNotIncludeMarginInBodyOffset && (b += parseFloat(f.css(a, "marginTop")) || 0, c += parseFloat(f.css(a, "marginLeft")) || 0);
            return {
                top: b,
                left: c
            }
        },
        setOffset: function (a, b, c) {
            var d = f.css(a, "position");
            d === "static" && (a.style.position = "relative");
            var e = f(a),
                g = e.offset(),
                h = f.css(a, "top"),
                i = f.css(a, "left"),
                j = (d === "absolute" || d === "fixed") && f.inArray("auto", [h, i]) > -1,
                k = {}, l = {}, m, n;
            j ? (l = e.position(), m = l.top, n = l.left) : (m = parseFloat(h) || 0, n = parseFloat(i) || 0), f.isFunction(b) && (b = b.call(a, c, g)), b.top != null && (k.top = b.top - g.top + m), b.left != null && (k.left = b.left - g.left + n), "using" in b ? b.using.call(a, k) : e.css(k)
        }
    }, f.fn.extend({
        position: function () {
            if (!this[0]) return null;
            var a = this[0],
                b = this.offsetParent(),
                c = this.offset(),
                d = cx.test(b[0].nodeName) ? {
                    top: 0,
                    left: 0
                } : b.offset();
            c.top -= parseFloat(f.css(a, "marginTop")) || 0, c.left -= parseFloat(f.css(a, "marginLeft")) || 0, d.top += parseFloat(f.css(b[0], "borderTopWidth")) || 0, d.left += parseFloat(f.css(b[0], "borderLeftWidth")) || 0;
            return {
                top: c.top - d.top,
                left: c.left - d.left
            }
        },
        offsetParent: function () {
            return this.map(function () {
                var a = this.offsetParent || c.body;
                while (a && !cx.test(a.nodeName) && f.css(a, "position") === "static") a = a.offsetParent;
                return a
            })
        }
    }), f.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function (a, c) {
        var d = /Y/.test(c);
        f.fn[a] = function (e) {
            return f.access(this, function (a, e, g) {
                var h = cy(a);
                if (g === b) return h ? c in h ? h[c] : f.support.boxModel && h.document.documentElement[e] || h.document.body[e] : a[e];
                h ? h.scrollTo(d ? f(h).scrollLeft() : g, d ? g : f(h).scrollTop()) : a[e] = g
            }, a, e, arguments.length, null)
        }
    }), f.each({
        Height: "height",
        Width: "width"
    }, function (a, c) {
        var d = "client" + a,
            e = "scroll" + a,
            g = "offset" + a;
        f.fn["inner" + a] = function () {
            var a = this[0];
            return a ? a.style ? parseFloat(f.css(a, c, "padding")) : this[c]() : null
        }, f.fn["outer" + a] = function (a) {
            var b = this[0];
            return b ? b.style ? parseFloat(f.css(b, c, a ? "margin" : "border")) : this[c]() : null
        }, f.fn[c] = function (a) {
            return f.access(this, function (a, c, h) {
                var i, j, k, l;
                if (f.isWindow(a)) {
                    i = a.document, j = i.documentElement[d];
                    return f.support.boxModel && j || i.body && i.body[d] || j
                }
                if (a.nodeType === 9) {
                    i = a.documentElement;
                    if (i[d] >= i[e]) return i[d];
                    return Math.max(a.body[e], i[e], a.body[g], i[g])
                }
                if (h === b) {
                    k = f.css(a, c), l = parseFloat(k);
                    return f.isNumeric(l) ? l : k
                }
                f(a).css(c, h)
            }, c, a, arguments.length, null)
        }
    }), a.jQuery = a.$ = f, typeof define == "function" && define.amd && define.amd.jQuery && define("jquery", [], function () {
        return f
    })
})(window);;
/*!
 * jQuery Migrate - v1.2.1 - 2013-05-08
 * https://github.com/jquery/jquery-migrate
 * Copyright 2005, 2013 jQuery Foundation, Inc. and other contributors; Licensed MIT
 */
(function (jQuery, window, undefined) {
    jQuery.migrateMute = true;
    var warnedAbout = {};
    jQuery.migrateWarnings = [];
    if (!jQuery.migrateMute && window.console && window.console.log) {
        window.console.log("JQMIGRATE: Logging is active");
    }
    if (jQuery.migrateTrace === undefined) {
        jQuery.migrateTrace = true;
    }
    jQuery.migrateReset = function () {
        warnedAbout = {};
        jQuery.migrateWarnings.length = 0;
    };

    function migrateWarn(msg) {
        var console = window.console;
        if (!warnedAbout[msg]) {
            warnedAbout[msg] = true;
            jQuery.migrateWarnings.push(msg);
            if (console && console.warn && !jQuery.migrateMute) {
                console.warn("JQMIGRATE: " + msg);
                if (jQuery.migrateTrace && console.trace) {
                    console.trace();
                }
            }
        }
    }

    function migrateWarnProp(obj, prop, value, msg) {
        if (Object.defineProperty) {
            try {
                Object.defineProperty(obj, prop, {
                    configurable: true,
                    enumerable: true,
                    get: function () {
                        migrateWarn(msg);
                        return value;
                    },
                    set: function (newValue) {
                        migrateWarn(msg);
                        value = newValue;
                    }
                });
                return;
            } catch (err) {}
        }
        jQuery._definePropertyBroken = true;
        obj[prop] = value;
    }
    if (document.compatMode === "BackCompat") {
        migrateWarn("jQuery is not compatible with Quirks Mode");
    }
    var attrFn = jQuery("<input/>", {
        size: 1
    }).attr("size") && jQuery.attrFn,
        oldAttr = jQuery.attr,
        valueAttrGet = jQuery.attrHooks.value && jQuery.attrHooks.value.get || function () {
            return null;
        }, valueAttrSet = jQuery.attrHooks.value && jQuery.attrHooks.value.set || function () {
            return undefined;
        }, rnoType = /^(?:input|button)$/i,
        rnoAttrNodeType = /^[238]$/,
        rboolean = /^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,
        ruseDefault = /^(?:checked|selected)$/i;
    migrateWarnProp(jQuery, "attrFn", attrFn || {}, "jQuery.attrFn is deprecated");
    jQuery.attr = function (elem, name, value, pass) {
        var lowerName = name.toLowerCase(),
            nType = elem && elem.nodeType;
        if (pass) {
            if (oldAttr.length < 4) {
                migrateWarn("jQuery.fn.attr( props, pass ) is deprecated");
            }
            if (elem && !rnoAttrNodeType.test(nType) && (attrFn ? name in attrFn : jQuery.isFunction(jQuery.fn[name]))) {
                return jQuery(elem)[name](value);
            }
        }
        if (name === "type" && value !== undefined && rnoType.test(elem.nodeName) && elem.parentNode) {
            migrateWarn("Can't change the 'type' of an input or button in IE 6/7/8");
        }
        if (!jQuery.attrHooks[lowerName] && rboolean.test(lowerName)) {
            jQuery.attrHooks[lowerName] = {
                get: function (elem, name) {
                    var attrNode, property = jQuery.prop(elem, name);
                    return property === true || typeof property !== "boolean" && (attrNode = elem.getAttributeNode(name)) && attrNode.nodeValue !== false ? name.toLowerCase() : undefined;
                },
                set: function (elem, value, name) {
                    var propName;
                    if (value === false) {
                        jQuery.removeAttr(elem, name);
                    } else {
                        propName = jQuery.propFix[name] || name;
                        if (propName in elem) {
                            elem[propName] = true;
                        }
                        elem.setAttribute(name, name.toLowerCase());
                    }
                    return name;
                }
            };
            if (ruseDefault.test(lowerName)) {
                migrateWarn("jQuery.fn.attr('" + lowerName + "') may use property instead of attribute");
            }
        }
        return oldAttr.call(jQuery, elem, name, value);
    };
    jQuery.attrHooks.value = {
        get: function (elem, name) {
            var nodeName = (elem.nodeName || "").toLowerCase();
            if (nodeName === "button") {
                return valueAttrGet.apply(this, arguments);
            }
            if (nodeName !== "input" && nodeName !== "option") {
                migrateWarn("jQuery.fn.attr('value') no longer gets properties");
            }
            return name in elem ? elem.value : null;
        },
        set: function (elem, value) {
            var nodeName = (elem.nodeName || "").toLowerCase();
            if (nodeName === "button") {
                return valueAttrSet.apply(this, arguments);
            }
            if (nodeName !== "input" && nodeName !== "option") {
                migrateWarn("jQuery.fn.attr('value', val) no longer sets properties");
            }
            elem.value = value;
        }
    };
    var matched, browser, oldInit = jQuery.fn.init,
        oldParseJSON = jQuery.parseJSON,
        rquickExpr = /^([^<]*)(<[\w\W]+>)([^>]*)$/;
    jQuery.fn.init = function (selector, context, rootjQuery) {
        var match;
        if (selector && typeof selector === "string" && !jQuery.isPlainObject(context) && (match = rquickExpr.exec(jQuery.trim(selector))) && match[0]) {
            if (selector.charAt(0) !== "<") {
                migrateWarn("$(html) HTML strings must start with '<' character");
            }
            if (match[3]) {
                migrateWarn("$(html) HTML text after last tag is ignored");
            }
            if (match[0].charAt(0) === "#") {
                migrateWarn("HTML string cannot start with a '#' character");
                jQuery.error("JQMIGRATE: Invalid selector string (XSS)");
            }
            if (context && context.context) {
                context = context.context;
            }
            if (jQuery.parseHTML) {
                return oldInit.call(this, jQuery.parseHTML(match[2], context, true), context, rootjQuery);
            }
        }
        return oldInit.apply(this, arguments);
    };
    jQuery.fn.init.prototype = jQuery.fn;
    jQuery.parseJSON = function (json) {
        if (!json && json !== null) {
            migrateWarn("jQuery.parseJSON requires a valid JSON string");
            return null;
        }
        return oldParseJSON.apply(this, arguments);
    };
    jQuery.uaMatch = function (ua) {
        ua = ua.toLowerCase();
        var match = /(chrome)[ \/]([\w.]+)/.exec(ua) || /(webkit)[ \/]([\w.]+)/.exec(ua) || /(opera)(?:.*version|)[ \/]([\w.]+)/.exec(ua) || /(msie) ([\w.]+)/.exec(ua) || ua.indexOf("compatible") < 0 && /(mozilla)(?:.*? rv:([\w.]+)|)/.exec(ua) || [];
        return {
            browser: match[1] || "",
            version: match[2] || "0"
        };
    };
    if (!jQuery.browser) {
        matched = jQuery.uaMatch(navigator.userAgent);
        browser = {};
        if (matched.browser) {
            browser[matched.browser] = true;
            browser.version = matched.version;
        }
        if (browser.chrome) {
            browser.webkit = true;
        } else if (browser.webkit) {
            browser.safari = true;
        }
        jQuery.browser = browser;
    }
    migrateWarnProp(jQuery, "browser", jQuery.browser, "jQuery.browser is deprecated");
    jQuery.sub = function () {
        function jQuerySub(selector, context) {
            return new jQuerySub.fn.init(selector, context);
        }
        jQuery.extend(true, jQuerySub, this);
        jQuerySub.superclass = this;
        jQuerySub.fn = jQuerySub.prototype = this();
        jQuerySub.fn.constructor = jQuerySub;
        jQuerySub.sub = this.sub;
        jQuerySub.fn.init = function init(selector, context) {
            if (context && context instanceof jQuery && !(context instanceof jQuerySub)) {
                context = jQuerySub(context);
            }
            return jQuery.fn.init.call(this, selector, context, rootjQuerySub);
        };
        jQuerySub.fn.init.prototype = jQuerySub.fn;
        var rootjQuerySub = jQuerySub(document);
        migrateWarn("jQuery.sub() is deprecated");
        return jQuerySub;
    };
    jQuery.ajaxSetup({
        converters: {
            "text json": jQuery.parseJSON
        }
    });
    var oldFnData = jQuery.fn.data;
    jQuery.fn.data = function (name) {
        var ret, evt, elem = this[0];
        if (elem && name === "events" && arguments.length === 1) {
            ret = jQuery.data(elem, name);
            evt = jQuery._data(elem, name);
            if ((ret === undefined || ret === evt) && evt !== undefined) {
                migrateWarn("Use of jQuery.fn.data('events') is deprecated");
                return evt;
            }
        }
        return oldFnData.apply(this, arguments);
    };
    var rscriptType = /\/(java|ecma)script/i,
        oldSelf = jQuery.fn.andSelf || jQuery.fn.addBack;
    jQuery.fn.andSelf = function () {
        migrateWarn("jQuery.fn.andSelf() replaced by jQuery.fn.addBack()");
        return oldSelf.apply(this, arguments);
    };
    if (!jQuery.clean) {
        jQuery.clean = function (elems, context, fragment, scripts) {
            context = context || document;
            context = !context.nodeType && context[0] || context;
            context = context.ownerDocument || context;
            migrateWarn("jQuery.clean() is deprecated");
            var i, elem, handleScript, jsTags, ret = [];
            jQuery.merge(ret, jQuery.buildFragment(elems, context).childNodes);
            if (fragment) {
                handleScript = function (elem) {
                    if (!elem.type || rscriptType.test(elem.type)) {
                        return scripts ? scripts.push(elem.parentNode ? elem.parentNode.removeChild(elem) : elem) : fragment.appendChild(elem);
                    }
                };
                for (i = 0;
                    (elem = ret[i]) != null; i++) {
                    if (!(jQuery.nodeName(elem, "script") && handleScript(elem))) {
                        fragment.appendChild(elem);
                        if (typeof elem.getElementsByTagName !== "undefined") {
                            jsTags = jQuery.grep(jQuery.merge([], elem.getElementsByTagName("script")), handleScript);
                            ret.splice.apply(ret, [i + 1, 0].concat(jsTags));
                            i += jsTags.length;
                        }
                    }
                }
            }
            return ret;
        };
    }
    var eventAdd = jQuery.event.add,
        eventRemove = jQuery.event.remove,
        eventTrigger = jQuery.event.trigger,
        oldToggle = jQuery.fn.toggle,
        oldLive = jQuery.fn.live,
        oldDie = jQuery.fn.die,
        ajaxEvents = "ajaxStart|ajaxStop|ajaxSend|ajaxComplete|ajaxError|ajaxSuccess",
        rajaxEvent = new RegExp("\\b(?:" + ajaxEvents + ")\\b"),
        rhoverHack = /(?:^|\s)hover(\.\S+|)\b/,
        hoverHack = function (events) {
            if (typeof (events) !== "string" || jQuery.event.special.hover) {
                return events;
            }
            if (rhoverHack.test(events)) {
                migrateWarn("'hover' pseudo-event is deprecated, use 'mouseenter mouseleave'");
            }
            return events && events.replace(rhoverHack, "mouseenter$1 mouseleave$1");
        };
    if (jQuery.event.props && jQuery.event.props[0] !== "attrChange") {
        jQuery.event.props.unshift("attrChange", "attrName", "relatedNode", "srcElement");
    }
    if (jQuery.event.dispatch) {
        migrateWarnProp(jQuery.event, "handle", jQuery.event.dispatch, "jQuery.event.handle is undocumented and deprecated");
    }
    jQuery.event.add = function (elem, types, handler, data, selector) {
        if (elem !== document && rajaxEvent.test(types)) {
            migrateWarn("AJAX events should be attached to document: " + types);
        }
        eventAdd.call(this, elem, hoverHack(types || ""), handler, data, selector);
    };
    jQuery.event.remove = function (elem, types, handler, selector, mappedTypes) {
        eventRemove.call(this, elem, hoverHack(types) || "", handler, selector, mappedTypes);
    };
    jQuery.fn.error = function () {
        var args = Array.prototype.slice.call(arguments, 0);
        migrateWarn("jQuery.fn.error() is deprecated");
        args.splice(0, 0, "error");
        if (arguments.length) {
            return this.bind.apply(this, args);
        }
        this.triggerHandler.apply(this, args);
        return this;
    };
    jQuery.fn.toggle = function (fn, fn2) {
        if (!jQuery.isFunction(fn) || !jQuery.isFunction(fn2)) {
            return oldToggle.apply(this, arguments);
        }
        migrateWarn("jQuery.fn.toggle(handler, handler...) is deprecated");
        var args = arguments,
            guid = fn.guid || jQuery.guid++,
            i = 0,
            toggler = function (event) {
                var lastToggle = (jQuery._data(this, "lastToggle" + fn.guid) || 0) % i;
                jQuery._data(this, "lastToggle" + fn.guid, lastToggle + 1);
                event.preventDefault();
                return args[lastToggle].apply(this, arguments) || false;
            };
        toggler.guid = guid;
        while (i < args.length) {
            args[i++].guid = guid;
        }
        return this.click(toggler);
    };
    jQuery.fn.live = function (types, data, fn) {
        migrateWarn("jQuery.fn.live() is deprecated");
        if (oldLive) {
            return oldLive.apply(this, arguments);
        }
        jQuery(this.context).on(types, this.selector, data, fn);
        return this;
    };
    jQuery.fn.die = function (types, fn) {
        migrateWarn("jQuery.fn.die() is deprecated");
        if (oldDie) {
            return oldDie.apply(this, arguments);
        }
        jQuery(this.context).off(types, this.selector || "**", fn);
        return this;
    };
    jQuery.event.trigger = function (event, data, elem, onlyHandlers) {
        if (!elem && !rajaxEvent.test(event)) {
            migrateWarn("Global events are undocumented and deprecated");
        }
        return eventTrigger.call(this, event, data, elem || document, onlyHandlers);
    };
    jQuery.each(ajaxEvents.split("|"), function (_, name) {
        jQuery.event.special[name] = {
            setup: function () {
                var elem = this;
                if (elem !== document) {
                    jQuery.event.add(document, name + "." + jQuery.guid, function () {
                        jQuery.event.trigger(name, null, elem, true);
                    });
                    jQuery._data(this, name, jQuery.guid++);
                }
                return false;
            },
            teardown: function () {
                if (this !== document) {
                    jQuery.event.remove(document, name + "." + jQuery._data(this, name));
                }
                return false;
            }
        };
    });
})(jQuery, window);;
jQuery.easing['jswing'] = jQuery.easing['swing'];
jQuery.extend(jQuery.easing, {
    def: 'easeOutQuad',
    swing: function (x, t, b, c, d) {
        return jQuery.easing[jQuery.easing.def](x, t, b, c, d);
    },
    easeInQuad: function (x, t, b, c, d) {
        return c * (t /= d) * t + b;
    },
    easeOutQuad: function (x, t, b, c, d) {
        return -c * (t /= d) * (t - 2) + b;
    },
    easeInOutQuad: function (x, t, b, c, d) {
        if ((t /= d / 2) < 1) return c / 2 * t * t + b;
        return -c / 2 * ((--t) * (t - 2) - 1) + b;
    },
    easeInCubic: function (x, t, b, c, d) {
        return c * (t /= d) * t * t + b;
    },
    easeOutCubic: function (x, t, b, c, d) {
        return c * ((t = t / d - 1) * t * t + 1) + b;
    },
    easeInOutCubic: function (x, t, b, c, d) {
        if ((t /= d / 2) < 1) return c / 2 * t * t * t + b;
        return c / 2 * ((t -= 2) * t * t + 2) + b;
    },
    easeInQuart: function (x, t, b, c, d) {
        return c * (t /= d) * t * t * t + b;
    },
    easeOutQuart: function (x, t, b, c, d) {
        return -c * ((t = t / d - 1) * t * t * t - 1) + b;
    },
    easeInOutQuart: function (x, t, b, c, d) {
        if ((t /= d / 2) < 1) return c / 2 * t * t * t * t + b;
        return -c / 2 * ((t -= 2) * t * t * t - 2) + b;
    },
    easeInQuint: function (x, t, b, c, d) {
        return c * (t /= d) * t * t * t * t + b;
    },
    easeOutQuint: function (x, t, b, c, d) {
        return c * ((t = t / d - 1) * t * t * t * t + 1) + b;
    },
    easeInOutQuint: function (x, t, b, c, d) {
        if ((t /= d / 2) < 1) return c / 2 * t * t * t * t * t + b;
        return c / 2 * ((t -= 2) * t * t * t * t + 2) + b;
    },
    easeInSine: function (x, t, b, c, d) {
        return -c * Math.cos(t / d * (Math.PI / 2)) + c + b;
    },
    easeOutSine: function (x, t, b, c, d) {
        return c * Math.sin(t / d * (Math.PI / 2)) + b;
    },
    easeInOutSine: function (x, t, b, c, d) {
        return -c / 2 * (Math.cos(Math.PI * t / d) - 1) + b;
    },
    easeInExpo: function (x, t, b, c, d) {
        return (t == 0) ? b : c * Math.pow(2, 10 * (t / d - 1)) + b;
    },
    easeOutExpo: function (x, t, b, c, d) {
        return (t == d) ? b + c : c * (-Math.pow(2, -10 * t / d) + 1) + b;
    },
    easeInOutExpo: function (x, t, b, c, d) {
        if (t == 0) return b;
        if (t == d) return b + c;
        if ((t /= d / 2) < 1) return c / 2 * Math.pow(2, 10 * (t - 1)) + b;
        return c / 2 * (-Math.pow(2, -10 * --t) + 2) + b;
    },
    easeInCirc: function (x, t, b, c, d) {
        return -c * (Math.sqrt(1 - (t /= d) * t) - 1) + b;
    },
    easeOutCirc: function (x, t, b, c, d) {
        return c * Math.sqrt(1 - (t = t / d - 1) * t) + b;
    },
    easeInOutCirc: function (x, t, b, c, d) {
        if ((t /= d / 2) < 1) return -c / 2 * (Math.sqrt(1 - t * t) - 1) + b;
        return c / 2 * (Math.sqrt(1 - (t -= 2) * t) + 1) + b;
    },
    easeInElastic: function (x, t, b, c, d) {
        var s = 1.70158;
        var p = 0;
        var a = c;
        if (t == 0) return b;
        if ((t /= d) == 1) return b + c;
        if (!p) p = d * .3;
        if (a < Math.abs(c)) {
            a = c;
            var s = p / 4;
        } else var s = p / (2 * Math.PI) * Math.asin(c / a);
        return -(a * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p)) + b;
    },
    easeOutElastic: function (x, t, b, c, d) {
        var s = 1.70158;
        var p = 0;
        var a = c;
        if (t == 0) return b;
        if ((t /= d) == 1) return b + c;
        if (!p) p = d * .3;
        if (a < Math.abs(c)) {
            a = c;
            var s = p / 4;
        } else var s = p / (2 * Math.PI) * Math.asin(c / a);
        return a * Math.pow(2, -10 * t) * Math.sin((t * d - s) * (2 * Math.PI) / p) + c + b;
    },
    easeInOutElastic: function (x, t, b, c, d) {
        var s = 1.70158;
        var p = 0;
        var a = c;
        if (t == 0) return b;
        if ((t /= d / 2) == 2) return b + c;
        if (!p) p = d * (.3 * 1.5);
        if (a < Math.abs(c)) {
            a = c;
            var s = p / 4;
        } else var s = p / (2 * Math.PI) * Math.asin(c / a); if (t < 1) return -.5 * (a * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p)) + b;
        return a * Math.pow(2, -10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p) * .5 + c + b;
    },
    easeInBack: function (x, t, b, c, d, s) {
        if (s == undefined) s = 1.70158;
        return c * (t /= d) * t * ((s + 1) * t - s) + b;
    },
    easeOutBack: function (x, t, b, c, d, s) {
        if (s == undefined) s = 1.70158;
        return c * ((t = t / d - 1) * t * ((s + 1) * t + s) + 1) + b;
    },
    easeInOutBack: function (x, t, b, c, d, s) {
        if (s == undefined) s = 1.70158;
        if ((t /= d / 2) < 1) return c / 2 * (t * t * (((s *= (1.525)) + 1) * t - s)) + b;
        return c / 2 * ((t -= 2) * t * (((s *= (1.525)) + 1) * t + s) + 2) + b;
    },
    easeInBounce: function (x, t, b, c, d) {
        return c - jQuery.easing.easeOutBounce(x, d - t, 0, c, d) + b;
    },
    easeOutBounce: function (x, t, b, c, d) {
        if ((t /= d) < (1 / 2.75)) {
            return c * (7.5625 * t * t) + b;
        } else if (t < (2 / 2.75)) {
            return c * (7.5625 * (t -= (1.5 / 2.75)) * t + .75) + b;
        } else if (t < (2.5 / 2.75)) {
            return c * (7.5625 * (t -= (2.25 / 2.75)) * t + .9375) + b;
        } else {
            return c * (7.5625 * (t -= (2.625 / 2.75)) * t + .984375) + b;
        }
    },
    easeInOutBounce: function (x, t, b, c, d) {
        if (t < d / 2) return jQuery.easing.easeInBounce(x, t * 2, 0, c, d) * .5 + b;
        return jQuery.easing.easeOutBounce(x, t * 2 - d, 0, c, d) * .5 + c * .5 + b;
    }
});;

function formatedNumberToFloat(price, currencyFormat, currencySign) {
    price = price.replace(currencySign, '');
    if (currencyFormat == 1)
        return parseFloat(price.replace(',', '').replace(' ', ''));
    else if (currencyFormat == 2)
        return parseFloat(price.replace(' ', '').replace(',', '.'));
    else if (currencyFormat == 3)
        return parseFloat(price.replace('.', '').replace(' ', '').replace(',', '.'));
    else if (currencyFormat == 4)
        return parseFloat(price.replace(',', '').replace(' ', ''));
    return price;
}

function formatNumber(value, numberOfDecimal, thousenSeparator, virgule) {
    value = value.toFixed(numberOfDecimal);
    var val_string = value + '';
    var tmp = val_string.split('.');
    var abs_val_string = (tmp.length == 2) ? tmp[0] : val_string;
    var deci_string = ('0.' + (tmp.length == 2 ? tmp[1] : 0)).substr(2);
    var nb = abs_val_string.length;
    for (var i = 1; i < 4; i++)
        if (value >= Math.pow(10, (3 * i)))
            abs_val_string = abs_val_string.substring(0, nb - (3 * i)) + thousenSeparator + abs_val_string.substring(nb - (3 * i));
    if (parseInt(numberOfDecimal) == 0)
        return abs_val_string;
    return abs_val_string + virgule + (deci_string > 0 ? deci_string : '00');
}

function formatCurrency(price, currencyFormat, currencySign, currencyBlank) {
    blank = '';
    price = parseFloat(price.toFixed(6));
    price = ps_round(price, priceDisplayPrecision);
    if (currencyBlank > 0)
        blank = ' ';
    if (currencyFormat == 1)
        return currencySign + blank + formatNumber(price, priceDisplayPrecision, ',', '.');
    if (currencyFormat == 2)
        return (formatNumber(price, priceDisplayPrecision, ' ', ',') + blank + currencySign);
    if (currencyFormat == 3)
        return (currencySign + blank + formatNumber(price, priceDisplayPrecision, '.', ','));
    if (currencyFormat == 4)
        return (formatNumber(price, priceDisplayPrecision, ',', '.') + blank + currencySign);
    if (currencyFormat == 5)
        return (formatNumber(price, priceDisplayPrecision, ' ', '.') + blank + currencySign);
    return price;
}

function ps_round(value, precision) {
    if (typeof (roundMode) == 'undefined')
        roundMode = 2;
    if (typeof (precision) == 'undefined')
        precision = 2;
    method = roundMode;
    if (method == 0)
        return ceilf(value, precision);
    else if (method == 1)
        return floorf(value, precision);
    precisionFactor = precision == 0 ? 1 : Math.pow(10, precision);
    return Math.round(value * precisionFactor) / precisionFactor;
}

function autoUrl(name, dest) {
    var loc;
    var id_list;
    id_list = document.getElementById(name);
    loc = id_list.options[id_list.selectedIndex].value;
    if (loc != 0)
        location.href = dest + loc;
    return;
}

function autoUrlNoList(name, dest) {
    var loc;
    loc = document.getElementById(name).checked;
    location.href = dest + (loc == true ? 1 : 0);
    return;
}

function toggle(e, show) {
    e.style.display = show ? '' : 'none';
}

function toggleMultiple(tab) {
    var len = tab.length;
    for (var i = 0; i < len; i++)
        if (tab[i].style)
            toggle(tab[i], tab[i].style.display == 'none');
}

function showElemFromSelect(select_id, elem_id) {
    var select = document.getElementById(select_id);
    for (var i = 0; i < select.length; ++i) {
        var elem = document.getElementById(elem_id + select.options[i].value);
        if (elem != null)
            toggle(elem, i == select.selectedIndex);
    }
}

function openCloseAllDiv(name, option) {
    var tab = $('*[name=' + name + ']');
    for (var i = 0; i < tab.length; ++i)
        toggle(tab[i], option);
}

function toggleElemValue(id_button, text1, text2) {
    var obj = document.getElementById(id_button);
    if (obj)
        obj.value = ((!obj.value || obj.value == text2) ? text1 : text2);
}

function addBookmark(url, title) {
    if (window.sidebar)
        return window.sidebar.addPanel(title, url, "");
    else if (window.external && ('AddFavorite' in window.external))
        return window.external.AddFavorite(url, title);
    else if (window.opera && window.print)
        return true;
    return true;
}

function writeBookmarkLink(url, title, text, img) {
    var insert = '';
    if (img)
        insert = writeBookmarkLinkObject(url, title, '<img src="' + img + '" alt="' + escape(text) + '" title="' + removeQuotes(text) + '" />') + '&nbsp';
    insert += writeBookmarkLinkObject(url, title, text);
    if (window.sidebar || window.opera && window.print || (window.external && ('AddFavorite' in window.external)))
        document.write(insert);
}

function writeBookmarkLinkObject(url, title, insert) {
    if (window.sidebar || window.external)
        return ('<a href="javascript:addBookmark(\'' + escape(url) + '\', \'' + removeQuotes(title) + '\')">' + insert + '</a>');
    else if (window.opera && window.print)
        return ('<a rel="sidebar" href="' + escape(url) + '" title="' + removeQuotes(title) + '">' + insert + '</a>');
    return ('');
}

function checkCustomizations() {
    var pattern = new RegExp(' ?filled ?');
    if (typeof customizationFields != 'undefined')
        for (var i = 0; i < customizationFields.length; i++) {
            if (parseInt(customizationFields[i][1]) == 1 && ($('#' + customizationFields[i][0]).html() == '' || $('#' + customizationFields[i][0]).text() != $('#' + customizationFields[i][0]).val()) && !pattern.test($('#' + customizationFields[i][0]).attr('class')))
                return false;
        }
    return true;
}

function emptyCustomizations() {
    if (typeof (customizationFields) == 'undefined') return;
    $('.customization_block .success').fadeOut(function () {
        $(this).remove();
    });
    $('.customization_block .error').fadeOut(function () {
        $(this).remove();
    });
    for (var i = 0; i < customizationFields.length; i++) {
        $('#' + customizationFields[i][0]).html('');
        $('#' + customizationFields[i][0]).val('');
    }
}

function ceilf(value, precision) {
    if (typeof (precision) == 'undefined')
        precision = 0;
    var precisionFactor = precision == 0 ? 1 : Math.pow(10, precision);
    var tmp = value * precisionFactor;
    var tmp2 = tmp.toString();
    if (tmp2.indexOf('.') === false)
        return (value);
    if (tmp2.charAt(tmp2.length - 1) == 0)
        return value;
    return Math.ceil(tmp) / precisionFactor;
}

function floorf(value, precision) {
    if (typeof (precision) == 'undefined')
        precision = 0;
    var precisionFactor = precision == 0 ? 1 : Math.pow(10, precision);
    var tmp = value * precisionFactor;
    var tmp2 = tmp.toString();
    if (tmp2.indexOf('.') === false)
        return (value);
    if (tmp2.charAt(tmp2.length - 1) == 0)
        return value;
    return Math.floor(tmp) / precisionFactor;
}

function setCurrency(id_currency) {
    $.ajax({
        type: 'POST',
        headers: {
            "cache-control": "no-cache"
        },
        url: baseDir + 'index.php' + '?rand=' + new Date().getTime(),
        data: 'controller=change-currency&id_currency=' + parseInt(id_currency),
        success: function (msg) {
            location.reload(true);
        }
    });
}

function isArrowKey(k_ev) {
    var unicode = k_ev.keyCode ? k_ev.keyCode : k_ev.charCode;
    if (unicode >= 37 && unicode <= 40)
        return true;
    return false;
}

function removeQuotes(value) {
    value = value.replace(/\\"/g, '');
    value = value.replace(/"/g, '');
    value = value.replace(/\\'/g, '');
    value = value.replace(/'/g, '');
    return value;
}

function fancyMsgBox(msg, title) {
    if (title) msg = "<h2>" + title + "</h2><p>" + msg + "</p>";
    msg += "<br/><p class=\"submit\" style=\"text-align:right; padding-bottom: 0\"><input class=\"button\" type=\"button\" value=\"OK\" onclick=\"$.fancybox.close();\" /></p>";
    $.fancybox(msg, {
        'autoDimensions': false,
        'width': 500,
        'height': 'auto',
        'transitionIn': 'none',
        'transitionOut': 'none'
    });
}

function fancyChooseBox(question, title, buttons, otherParams) {
    var msg, funcName, action;
    if (title) msg = "<h2>" + title + "</h2><p>" + question + "</p>";
    msg += "<br/><p class=\"submit\" style=\"text-align:right; padding-bottom: 0\">";
    var i = 0;
    for (var caption in buttons) {
        if (!buttons.hasOwnProperty(caption)) continue;
        funcName = buttons[caption];
        if (typeof otherParams == 'undefined') otherParams = 0;
        otherParams = escape(JSON.stringify(otherParams));
        action = funcName ? "$.fancybox.close();window['" + funcName + "'](JSON.parse(unescape('" + otherParams + "')), " + i + ")" : "$.fancybox.close()";
        msg += '<input class="button" style="margin-right: 5px" type="button" value="' + caption + '" onclick="' + action + '" />';
        i++;
    }
    msg += "</p>";
    $.fancybox(msg, {
        'autoDimensions': false,
        'width': 500,
        'height': 'auto',
        'transitionIn': 'none',
        'transitionOut': 'none'
    });
}
$().ready(function () {
    $('form').submit(function () {
        $(this).find('.hideOnSubmit').hide();
    });
    $('a._blank').attr('target', '_blank');
});;
$('document').ready(function () {
    reloadProductComparison();
});
reloadProductComparison = function () {
    $('a.cmp_remove').click(function () {
        var idProduct = $(this).attr('rel').replace('ajax_id_product_', '');
        $.ajax({
            url: 'index.php?controller=products-comparison&ajax=1&action=remove&id_product=' + idProduct,
            async: false,
            cache: false,
            success: function () {
                return true;
            }
        });
    });
    $('input:checkbox.comparator').click(function () {
        var idProduct = $(this).attr('value').replace('comparator_item_', '');
        var checkbox = $(this);
        if (checkbox.is(':checked')) {
            $.ajax({
                url: 'index.php?controller=products-comparison&ajax=1&action=add&id_product=' + idProduct,
                async: true,
                cache: false,
                success: function (data) {
                    if (data === '0') {
                        checkbox.parent().removeAttr('class');
                        alert(max_item);
                    }
                },
                error: function () {
                    checkbox.parent().removeAttr('class');
                }
            });
        } else {
            $.ajax({
                url: 'index.php?controller=products-comparison&ajax=1&action=remove&id_product=' + idProduct,
                async: true,
                cache: false,
                success: function (data) {
                    if (data === '0')
                        checkbox.parent().addClass('checked');
                },
                error: function () {
                    checkbox.parent().addClass('checked');
                }
            });
        }
    });
};

function PS_SE_HandleEvent() {
    $(document).ready(function () {
        $('#id_country').change(function () {
            resetAjaxQueries();
            updateStateByIdCountry();
        });
        if (SE_RefreshMethod == 0) {
            $('#id_state').change(function () {
                resetAjaxQueries();
                updateCarriersList();
            });
            $('#zipcode').bind('keyup', function (e) {
                if (e.keyCode == '13') {
                    resetAjaxQueries();
                    updateCarriersList();
                }
            });
        }
        $('#update_carriers_list').click(function () {
            updateCarriersList();
        });
        $('#carriercompare_submit').click(function () {
            resetAjaxQueries();
            saveSelection();
            return false;
        });
        updateStateByIdCountry();
    });
}

function displayWaitingAjax(type, message) {
    $('#SE_AjaxDisplay').find('p').html(message);
    $('#SE_AjaxDisplay').css('display', type);
}

function updateStateByIdCountry() {
    $('#id_state').children().remove();
    $('#availableCarriers').slideUp('fast');
    $('#states').slideUp('fast');
    displayWaitingAjax('block', SE_RefreshStateTS);
    var query = $.ajax({
        type: 'POST',
        headers: {
            "cache-control": "no-cache"
        },
        url: baseDir + 'modules/carriercompare/ajax.php' + '?rand=' + new Date().getTime(),
        data: 'method=getStates&id_country=' + $('#id_country').val(),
        dataType: 'json',
        success: function (json) {
            if (json.length) {
                for (state in json) {
                    $('#id_state').append('<option value=\'' + json[state].id_state + '\' ' + (id_state == json[state].id_state ? 'selected="selected"' : '') + '>' + json[state].name + '</option>');
                }
                $('#states').slideDown('fast');
            }
            if (SE_RefreshMethod == 0)
                updateCarriersList();
            displayWaitingAjax('none', '');
        }
    });
    ajaxQueries.push(query);
}

function updateCarriersList() {
    $('#carriercompare_errors_list').children().remove();
    $('#availableCarriers').slideUp('normal', function () {
        $(this).find(('tbody')).children().remove();
        $('#noCarrier').slideUp('fast');
        displayWaitingAjax('block', SE_RetrievingInfoTS);
        var query = $.ajax({
            type: 'POST',
            headers: {
                "cache-control": "no-cache"
            },
            url: baseDir + 'modules/carriercompare/ajax.php' + '?rand=' + new Date().getTime(),
            data: 'method=getCarriers&id_country=' + $('#id_country').val() + '&id_state=' + $('#id_state').val() + '&zipcode=' + $('#zipcode').val(),
            dataType: 'json',
            success: function (json) {
                if (json.length) {
                    for (carrier in json) {
                        var html = '<tr class="' + (carrier % 2 ? 'alternate_' : '') + 'item">' + '<td class="carrier_action radio">' + '<input type="radio" name="id_carrier" value="' + json[carrier].id_carrier + '" id="id_carrier' + json[carrier].id_carrier + '" ' + (id_carrier == json[carrier].id_carrier ? 'checked="checked"' : '') + '/>' + '</td>' + '<td class="carrier_name">' + '<label for="id_carrier' + json[carrier].id_carrier + '">' +
                            (json[carrier].img ? '<img src="' + json[carrier].img + '" alt="' + json[carrier].name + '" />' : json[carrier].name) + '</label>' + '</td>' + '<td class="carrier_infos">' + ((json[carrier].delay != null) ? json[carrier].delay : '') + '</td>' + '<td class="carrier_price">';
                        if (json[carrier].price) {
                            html += '<span class="price">' + (displayPrice == 1 ? formatCurrency(json[carrier].price_tax_exc, currencyFormat, currencySign, currencyBlank) : formatCurrency(json[carrier].price, currencyFormat, currencySign, currencyBlank)) + '</span>';
                        } else {
                            html += txtFree;
                        }
                        html += '</td>' + '</tr>';
                        $('#carriers_list').append(html);
                    }
                    displayWaitingAjax('none', '');
                    $('#availableCarriers').slideDown();
                } else {
                    displayWaitingAjax('none', '');
                    $('#noCarrier').slideDown();
                }
            }
        });
        ajaxQueries.push(query);
    });
}

function saveSelection() {
    $('#carriercompare_errors').slideUp();
    $('#carriercompare_errors_list').children().remove();
    displayWaitingAjax('block', SE_RedirectTS);
    var query = $.ajax({
        type: 'POST',
        headers: {
            "cache-control": "no-cache"
        },
        url: baseDir + 'modules/carriercompare/ajax.php' + '?rand=' + new Date().getTime(),
        data: 'method=saveSelection&' + $('#compare_shipping_form').serialize(),
        dataType: 'json',
        success: function (json) {
            if (json.length) {
                for (error in json)
                    $('#carriercompare_errors_list').append('<li>' + json[error] + '</li>');
                $('#carriercompare_errors').slideDown();
                displayWaitingAjax('none', '');
            } else {
                $('.SE_SubmitRefreshCard').fadeOut('fast');
                location.reload(true);
            }
        }
    });
    ajaxQueries.push(query);
    return false;
}
var ajaxQueries = new Array();

function resetAjaxQueries() {
    for (i = 0; i < ajaxQueries.length; ++i)
        ajaxQueries[i].abort();
    ajaxQueries = new Array();
};
if (typeof baseUri === "undefined" && typeof baseDir !== "undefined")
    baseUri = baseDir;
var ajaxCart = {
    nb_total_products: 0,
    overrideButtonsInThePage: function () {
        $('.ajax_add_to_cart_button').unbind('click').click(function () {
            var idProduct = $(this).attr('rel').replace('nofollow', '').replace('ajax_id_product_', '');
            if ($(this).attr('disabled') != 'disabled')
                ajaxCart.add(idProduct, null, false, this);
            return false;
        });
        $('#add_to_cart input').unbind('click').click(function () {
            ajaxCart.add($('#product_page_product_id').val(), $('#idCombination').val(), true, null, $('#quantity_wanted').val(), null);
            return false;
        });
        $('#cart_block_list .ajax_cart_block_remove_link').unbind('click').click(function () {
            var customizationId = 0;
            var productId = 0;
            var productAttributeId = 0;
            if ($($(this).parent().parent()).attr('name') == 'customization')
                var customizableProductDiv = $($(this).parent().parent()).find("div[id^=deleteCustomizableProduct_]");
            else
                var customizableProductDiv = $($(this).parent()).find("div[id^=deleteCustomizableProduct_]"); if (customizableProductDiv && $(customizableProductDiv).length) {
                $(customizableProductDiv).each(function () {
                    var ids = $(this).attr('id').split('_');
                    if (typeof (ids[1]) != 'undefined') {
                        customizationId = parseInt(ids[1]);
                        productId = parseInt(ids[2]);
                        if (typeof (ids[3]) != 'undefined')
                            productAttributeId = parseInt(ids[3]);
                        return false;
                    }
                });
            }
            if (!customizationId) {
                var firstCut = $(this).parent().parent().attr('id').replace('cart_block_product_', '');
                firstCut = firstCut.replace('deleteCustomizableProduct_', '');
                ids = firstCut.split('_');
                productId = parseInt(ids[0]);
                if (typeof (ids[1]) != 'undefined')
                    productAttributeId = parseInt(ids[1]);
            }
            var idAddressDelivery = $(this).parent().parent().attr('id').match(/.*_\d+_\d+_(\d+)/)[1];
            ajaxCart.remove(productId, productAttributeId, customizationId, idAddressDelivery);
            return false;
        });
    },
    expand: function () {
        if ($('#cart_block_list').hasClass('collapsed')) {
            $('#cart_block_summary').slideUp(200, function () {
                $(this).addClass('collapsed').removeClass('expanded');
                $('#cart_block_list').slideDown({
                    duration: 450,
                    complete: function () {
                        $(this).addClass('expanded').removeClass('collapsed');
                    }
                });
            });
            $('#block_cart_expand').fadeOut('slow', function () {
                $('#block_cart_collapse').fadeIn('fast');
            });
            $.ajax({
                type: 'POST',
                headers: {
                    "cache-control": "no-cache"
                },
                url: baseDir + 'modules/blockcart/blockcart-set-collapse.php' + '?rand=' + new Date().getTime(),
                async: true,
                cache: false,
                data: 'ajax_blockcart_display=expand'
            });
        }
    },
    refresh: function () {
        $.ajax({
            type: 'POST',
            headers: {
                "cache-control": "no-cache"
            },
            url: baseUri + '?rand=' + new Date().getTime(),
            async: true,
            cache: false,
            dataType: "json",
            data: 'controller=cart&ajax=true&token=' + static_token,
            success: function (jsonData) {
                ajaxCart.updateCart(jsonData);
            },
            error: function (XMLHttpRequest, textStatus, errorThrown) {
                alert("TECHNICAL ERROR: \n\nDetails:\nError thrown: " + XMLHttpRequest + "\n" + 'Text status: ' + textStatus);
            }
        });
    },
    collapse: function () {
        if ($('#cart_block_list').hasClass('expanded')) {
            $('#cart_block_list').slideUp('slow', function () {
                $(this).addClass('collapsed').removeClass('expanded');
                $('#cart_block_summary').slideDown(450, function () {
                    $(this).addClass('expanded').removeClass('collapsed');
                });
            });
            $('#block_cart_collapse').fadeOut('slow', function () {
                $('#block_cart_expand').fadeIn('fast');
            });
            $.ajax({
                type: 'POST',
                headers: {
                    "cache-control": "no-cache"
                },
                url: baseDir + 'modules/blockcart/blockcart-set-collapse.php' + '?rand=' + new Date().getTime(),
                async: true,
                cache: false,
                data: 'ajax_blockcart_display=collapse' + '&rand=' + new Date().getTime()
            });
        }
    },
    updateCartInformation: function (jsonData, addedFromProductPage) {
        ajaxCart.updateCart(jsonData);
        if (addedFromProductPage)
            $('#add_to_cart input').removeAttr('disabled').addClass('exclusive').removeClass('exclusive_disabled');
        else
            $('.ajax_add_to_cart_button').removeAttr('disabled');
    },
    add: function (idProduct, idCombination, addedFromProductPage, callerElement, quantity, wishlist) {
        if (addedFromProductPage && !checkCustomizations()) {
            alert(fieldRequired);
        }
        emptyCustomizations();
        if (addedFromProductPage) {
            $('#add_to_cart input').attr('disabled', true).removeClass('exclusive').addClass('exclusive_disabled');
            $('.filled').removeClass('filled');
        } else
            $(callerElement).attr('disabled', true); if ($('#cart_block_list').hasClass('collapsed'))
            this.expand();
        $.ajax({
            type: 'POST',
            headers: {
                "cache-control": "no-cache"
            },
            url: baseUri + '?rand=' + new Date().getTime(),
            async: true,
            cache: false,
            dataType: "json",
            data: 'controller=cart&add=1&ajax=true&qty=' + ((quantity && quantity != null) ? quantity : '1') + '&id_product=' + idProduct + '&token=' + static_token + ((parseInt(idCombination) && idCombination != null) ? '&ipa=' + parseInt(idCombination) : ''),
            success: function (jsonData, textStatus, jqXHR) {
                if (wishlist && !jsonData.errors)
                    WishlistAddProductCart(wishlist[0], idProduct, idCombination, wishlist[1]);
                var $element = $(callerElement).parent().parent().find('a.product_image img,a.product_img_link img');
                if (!$element.length)
                    $element = $('#bigpic');
                var $picture = $element.clone();
                var pictureOffsetOriginal = $element.offset();
                if ($(document.body).width() < 751) {
                    if ($picture.size())
                        $picture.css({
                            'position': 'absolute',
                            'width': 40,
                            'height': 'auto',
                            'background': '#fff'
                        });
                }
                if ($(document.body).width() > 751) {
                    if ($picture.size())
                        $picture.css({
                            'position': 'absolute',
                            'width': 100,
                            'height': 'auto',
                            'background': '#fff',
                            'top': pictureOffsetOriginal.top,
                            'left': pictureOffsetOriginal.left
                        });
                }
                var pictureOffset = $picture.offset();
                if ($('#cart_block').offset().top && $('#cart_block').offset().left) {
                    var cartBlockOffset = $('#cart_block').offset();
                } else {
                    var cartBlockOffset = $('#shopping_cart').offset();
                }
                if (cartBlockOffset != undefined && jsonData.errors == undefined && $picture.size()) {
                    if ($(document.body).width() > 751) {
                        {
                            $picture.appendTo('body');
                            $picture.css({
                                'position': 'absolute',
                                'top': $picture.css('top'),
                                'left': $picture.css('left'),
                                'z-index': 4242
                            }).animate({
                                'width': $element.attr('width') * 0.66,
                                'height': $element.attr('height') * 0.66,
                                'opacity': 1,
                                'top': cartBlockOffset.top + 50,
                                'left': cartBlockOffset.left + 1
                            }, 1500, 'linear').fadeOut(400, function () {
                                ajaxCart.updateCartInformation(jsonData, addedFromProductPage);
                                $(this).remove();
                            });
                            $('.blockuserinfo-cart').addClass('close-cart');
                            $(this).find(".blockuserinfo-cart").toggle($('#cart_block').stop(true, true).slideDown(400), {
                                duration: 1500,
                                easing: 'linear'
                            });
                            $('html, body').animate({
                                scrollTop: 0
                            }, 1000)
                        }
                        return false
                    }
                    if ($(document.body).width() < 751) {
                        {
                            $picture.css({
                                'position': 'absolute',
                                'top': $picture.css('top'),
                                'left': $picture.css('left'),
                                'z-index': 4245
                            }).fadeOut(400, function () {
                                ajaxCart.updateCartInformation(jsonData, addedFromProductPage);
                            });
                            var timer;
                            $('body').append('<div class="alert_cart" style=" display:none;"><a class="mas_cart"  href="http://livedemo00.template-help.com/prestashop_47744/themes/theme852/cache/index.php?controller=order">' + addedSuccessfully + '</a></div>');
                            $('.alert_cart img').slideDown(400);
                            $('.alert_cart').append('<span title="Close" class="alert_cart_close"></span>');
                            $('.alert_cart span').click(function () {
                                $('.alert_cart').slideUp(400, function () {
                                    $(this).remove()
                                })
                            });
                            var msg = $('.alert_cart').slideDown(400);
                            timer = setTimeout(function () {
                                msg.slideUp(400, function () {
                                    $(this).remove()
                                });
                            }, 7000);
                        }
                    }
                } else
                    ajaxCart.updateCartInformation(jsonData, addedFromProductPage);
            },
            error: function (XMLHttpRequest, textStatus, errorThrown) {
                alert("Impossible to add the product to the cart.\n\ntextStatus: '" + textStatus + "'\nerrorThrown: '" + errorThrown + "'\nresponseText:\n" + XMLHttpRequest.responseText);
                if (addedFromProductPage)
                    $('#add_to_cart input').removeAttr('disabled').addClass('exclusive').removeClass('exclusive_disabled');
                else
                    $(callerElement).removeAttr('disabled');
            }
        });
    },
    remove: function (idProduct, idCombination, customizationId, idAddressDelivery) {
        $.ajax({
            type: 'POST',
            headers: {
                "cache-control": "no-cache"
            },
            url: baseUri + '?rand=' + new Date().getTime(),
            async: true,
            cache: false,
            dataType: "json",
            data: 'controller=cart&delete=1&id_product=' + idProduct + '&ipa=' + ((idCombination != null && parseInt(idCombination)) ? idCombination : '') + ((customizationId && customizationId != null) ? '&id_customization=' + customizationId : '') + '&id_address_delivery=' + idAddressDelivery + '&token=' + static_token + '&ajax=true',
            success: function (jsonData) {
                ajaxCart.updateCart(jsonData);
                if ($('body').attr('id') == 'order' || $('body').attr('id') == 'order-opc')
                    deleteProductFromSummary(idProduct + '_' + idCombination + '_' + customizationId + '_' + idAddressDelivery);
            },
            error: function () {
                alert('ERROR: unable to delete the product');
            }
        });
    },
    hideOldProducts: function (jsonData) {
        if ($('#cart_block_list dl.products').length > 0) {
            var removedProductId = null;
            var removedProductData = null;
            var removedProductDomId = null;
            $('#cart_block_list dl.products dt').each(function () {
                var domIdProduct = $(this).attr('id');
                var firstCut = domIdProduct.replace('cart_block_product_', '');
                var ids = firstCut.split('_');
                var stayInTheCart = false;
                for (aProduct in jsonData.products) {
                    if (jsonData.products[aProduct]['id'] == ids[0] && (!ids[1] || jsonData.products[aProduct]['idCombination'] == ids[1])) {
                        stayInTheCart = true;
                        ajaxCart.hideOldProductCustomizations(jsonData.products[aProduct], domIdProduct);
                    }
                }
                if (!stayInTheCart) {
                    removedProductId = $(this).attr('id');
                    if (removedProductId != null) {
                        var firstCut = removedProductId.replace('cart_block_product_', '');
                        var ids = firstCut.split('_');
                        $('#' + removedProductId).addClass('strike').fadeTo('slow', 0, function () {
                            $(this).slideUp('slow', function () {
                                $(this).remove();
                                if ($('#cart_block dl.products dt').length == 0) {
                                    $('#cart_block_no_products:hidden').slideDown(450);
                                    $('#header .cart-prices, #header #cart-buttons, #header #cart-price-precisions').hide();
                                    $('#cart_block dl.products').remove();
                                }
                            });
                        });
                        $('#cart_block_combination_of_' + ids[0] + (ids[1] ? '_' + ids[1] : '') + (ids[2] ? '_' + ids[2] : '')).fadeTo('fast', 0, function () {
                            $(this).slideUp('fast', function () {
                                $(this).remove();
                            });
                        });
                    }
                }
            });
        }
    },
    hideOldProductCustomizations: function (product, domIdProduct) {
        var customizationList = $('#customization_' + product['id'] + '_' + product['idCombination']);
        if (customizationList.length > 0) {
            $(customizationList).find("li").each(function () {
                $(this).find("div").each(function () {
                    var customizationDiv = $(this).attr('id');
                    var tmp = customizationDiv.replace('deleteCustomizableProduct_', '');
                    var ids = tmp.split('_');
                    if ((parseInt(product.idCombination) == parseInt(ids[2])) && !ajaxCart.doesCustomizationStillExist(product, ids[0]))
                        $('#' + customizationDiv).parent().addClass('strike').fadeTo('slow', 0, function () {
                            $(this).slideUp('slow');
                            $(this).remove();
                        });
                });
            });
        }
        var removeLinks = $('#' + domIdProduct).find('.ajax_cart_block_remove_link');
        if (!product.hasCustomizedDatas && !removeLinks.length)
            $('#' + domIdProduct + ' span.remove_link').html('<a class="ajax_cart_block_remove_link" rel="nofollow" href="' + baseUri + '?controller=cart&amp;delete=1&amp;id_product=' + product['id'] + '&amp;ipa=' + product['idCombination'] + '&amp;token=' + static_token + '"><i class="icon-trash"></i></a>');
        if (product.is_gift)
            $('#' + domIdProduct + ' span.remove_link').html('');
    },
    doesCustomizationStillExist: function (product, customizationId) {
        var exists = false;
        $(product.customizedDatas).each(function () {
            if (this.customizationId == customizationId) {
                exists = true;
                return false;
            }
        });
        return (exists);
    },
    refreshVouchers: function (jsonData) {
        if (typeof (jsonData.discounts) == 'undefined' || jsonData.discounts.length == 0)
            $('#vouchers').hide();
        else {
            $('#vouchers tbody').html('');
            for (i = 0; i < jsonData.discounts.length; i++) {
                if (parseFloat(jsonData.discounts[i].price_float) > 0) {
                    var delete_link = '';
                    if (jsonData.discounts[i].code.length)
                        delete_link = '<a class="delete_voucher" href="' + jsonData.discounts[i].link + '" title="' + delete_txt + '"><img src="' + img_dir + 'icon/delete.gif" alt="' + delete_txt + '" class="icon" /></a>';
                    $('#vouchers tbody').append($('<tr class="bloc_cart_voucher" id="bloc_cart_voucher_' + jsonData.discounts[i].id + '">' + ' <td class="quantity">1x</td>' + ' <td class="name" title="' + jsonData.discounts[i].description + '">' + jsonData.discounts[i].name + '</td>' + ' <td class="price">-' + jsonData.discounts[i].price + '</td>' + ' <td class="delete">' + delete_link + '</td>' + '</tr>'));
                }
            }
            $('#vouchers').show();
        }
    },
    updateProductQuantity: function (product, quantity) {
        $('#cart_block_product_' + product.id + '_' + (product.idCombination ? product.idCombination : '0') + '_' + (product.idAddressDelivery ? product.idAddressDelivery : '0') + ' .quantity').fadeTo('fast', 0, function () {
            $(this).text(quantity);
            $(this).fadeTo('fast', 1, function () {
                $(this).fadeTo('fast', 0, function () {
                    $(this).fadeTo('fast', 1, function () {
                        $(this).fadeTo('fast', 0, function () {
                            $(this).fadeTo('fast', 1);
                        });
                    });
                });
            });
        });
    },
    displayNewProducts: function (jsonData) {
        $(jsonData.products).each(function () {
            if (this.id != undefined) {
                if ($('#cart_block dl.products').length == 0) {
                    $('#cart_block_no_products').before('<dl class="products"></dl>');
                    $('#cart_block_no_products').hide();
                    $('#header .cart-prices, #header #cart-buttons, #header #cart-price-precisions').show();
                }
                var domIdProduct = this.id + '_' + (this.idCombination ? this.idCombination : '0') + '_' + (this.idAddressDelivery ? this.idAddressDelivery : '0');
                var domIdProductAttribute = this.id + '_' + (this.idCombination ? this.idCombination : '0');
                if ($('#cart_block_product_' + domIdProduct).length == 0) {
                    var productId = parseInt(this.id);
                    var productAttributeId = (this.hasAttributes ? parseInt(this.attributes) : 0);
                    var content = '<dt class="hidden clearfix" id="cart_block_product_' + domIdProduct + '">';
                    content += '<a class="cart-images" href="' + this.link + '" title="' + this.name.substring(0, 12) + '"><img  src="' + this.id_image + '" alt="' + this.name + '"></a>';
                    content += '<span class="quantity-formated"><span class="quantity">' + this.quantity + '</span>x</span>';
                    var name = (this.name.length > 12 ? this.name.substring(0, 10) + '...' : this.name);
                    content += '<a class="product_link" href="' + this.link + '" title="' + this.name + '">' + name + '</a>';
                    if (typeof (this.is_gift) == 'undefined' || this.is_gift == 0)
                        content += '<span class="remove_link"><a rel="nofollow" class="ajax_cart_block_remove_link" href="' + baseUri + '?controller=cart&amp;delete=1&amp;id_product=' + productId + '&amp;token=' + static_token + (this.hasAttributes ? '&amp;ipa=' + parseInt(this.idCombination) : '') + '"><i class="icon-trash"></i></a></span>';
                    else
                        content += '<span class="remove_link"></span>'; if (typeof (freeProductTranslation) != 'undefined')
                        content += '<span class="price">' + (parseFloat(this.price_float) > 0 ? this.priceByLine : freeProductTranslation) + '</span>';
                    content += '</dt>';
                    if (this.hasAttributes)
                        content += '<dd id="cart_block_combination_of_' + domIdProduct + '" class="hidden"><a href="' + this.link + '" title="' + this.name + '">' + this.attributes + '</a>';
                    if (this.hasCustomizedDatas)
                        content += ajaxCart.displayNewCustomizedDatas(this);
                    if (this.hasAttributes) content += '</dd>';
                    $('#cart_block dl.products').append(content);
                } else {
                    var jsonProduct = this;
                    if ($.trim($('#cart_block_product_' + domIdProduct + ' .quantity').html()) != jsonProduct.quantity || $.trim($('#cart_block_product_' + domIdProduct + ' .price').html()) != jsonProduct.priceByLine) {
                        if (!this.is_gift)
                            $('#cart_block_product_' + domIdProduct + ' .price').text(jsonProduct.priceByLine);
                        else
                            $('#cart_block_product_' + domIdProduct + ' .price').html(freeProductTranslation);
                        ajaxCart.updateProductQuantity(jsonProduct, jsonProduct.quantity);
                        if (jsonProduct.hasCustomizedDatas) {
                            customizationFormatedDatas = ajaxCart.displayNewCustomizedDatas(jsonProduct);
                            if (!$('#customization_' + domIdProductAttribute).length) {
                                if (jsonProduct.hasAttributes)
                                    $('#cart_block_combination_of_' + domIdProduct).append(customizationFormatedDatas);
                                else
                                    $('#cart_block dl.products').append(customizationFormatedDatas);
                            } else {
                                $('#customization_' + domIdProductAttribute).html('');
                                $('#customization_' + domIdProductAttribute).append(customizationFormatedDatas);
                            }
                        }
                    }
                }
                $('#cart_block dl.products .hidden').slideDown(450).removeClass('hidden');
                var removeLinks = $('#cart_block_product_' + domIdProduct).find('a.ajax_cart_block_remove_link');
                if (this.hasCustomizedDatas && removeLinks.length)
                    $(removeLinks).each(function () {
                        $(this).remove();
                    });
            }
        });
        if ($('#cart_block dl.products').length == 0) {
            $('#header .cart-prices, #header #cart-buttons, #header #cart-price-precisions').hide();
        }
    },
    displayNewCustomizedDatas: function (product) {
        var content = '';
        var productId = parseInt(product.id);
        var productAttributeId = typeof (product.idCombination) == 'undefined' ? 0 : parseInt(product.idCombination);
        var hasAlreadyCustomizations = $('#customization_' + productId + '_' + productAttributeId).length;
        if (!hasAlreadyCustomizations) {
            if (!product.hasAttributes)
                content += '<dd id="cart_block_combination_of_' + productId + '" class="hidden">';
            if ($('#customization_' + productId + '_' + productAttributeId).val() == undefined)
                content += '<ul class="cart_block_customizations" id="customization_' + productId + '_' + productAttributeId + '">';
        }
        $(product.customizedDatas).each(function () {
            var done = 0;
            customizationId = parseInt(this.customizationId);
            productAttributeId = typeof (product.idCombination) == 'undefined' ? 0 : parseInt(product.idCombination);
            content += '<li name="customization"><div class="deleteCustomizableProduct" id="deleteCustomizableProduct_' + customizationId + '_' + productId + '_' + (productAttributeId ? productAttributeId : '0') + '"><a rel="nofollow" class="ajax_cart_block_remove_link" href="' + baseUri + '?controller=cart&amp;delete=1&amp;id_product=' + productId + '&amp;ipa=' + productAttributeId + '&amp;id_customization=' + customizationId + '&amp;token=' + static_token + '"></a></div><span class="quantity-formated"><span class="quantity">' + parseInt(this.quantity) + '</span>x</span>';
            $(this.datas).each(function () {
                if (this['type'] == CUSTOMIZE_TEXTFIELD) {
                    $(this.datas).each(function () {
                        if (this['index'] == 0) {
                            content += ' ' + this.truncatedValue.replace(/<br \/>/g, ' ');
                            done = 1;
                            return false;
                        }
                    })
                }
            });
            if (!done)
                content += customizationIdMessage + customizationId;
            if (!hasAlreadyCustomizations) content += '</li>';
            if (customizationId) {
                $('#uploadable_files li div.customizationUploadBrowse img').remove();
                $('#text_fields input').attr('value', '');
            }
        });
        if (!hasAlreadyCustomizations) {
            content += '</ul>';
            if (!product.hasAttributes) content += '</dd>';
        }
        return (content);
    },
    updateCart: function (jsonData) {
        if (jsonData.hasError) {
            var errors = '';
            for (error in jsonData.errors)
                if (error != 'indexOf')
                    errors += $('<div />').html(jsonData.errors[error]).text() + "\n";
            alert(errors);
        } else {
            ajaxCart.updateCartEverywhere(jsonData);
            ajaxCart.hideOldProducts(jsonData);
            ajaxCart.displayNewProducts(jsonData);
            ajaxCart.refreshVouchers(jsonData);
            $('#cart_block .products dt').removeClass('first_item').removeClass('last_item').removeClass('item');
            $('#cart_block .products dt:first').addClass('first_item');
            $('#cart_block .products dt:not(:first,:last)').addClass('item');
            $('#cart_block .products dt:last').addClass('last_item');
            ajaxCart.overrideButtonsInThePage();
        }
    },
    updateCartEverywhere: function (jsonData) {
        $('.ajax_cart_total').text(jsonData.productTotal);
        if (parseFloat(jsonData.shippingCostFloat) > 0 || jsonData.nbTotalProducts < 1)
            $('.ajax_cart_shipping_cost').text(jsonData.shippingCost);
        else if (typeof (freeShippingTranslation) != 'undefined')
            $('.ajax_cart_shipping_cost').html(freeShippingTranslation);
        $('.ajax_cart_tax_cost').text(jsonData.taxCost);
        $('.cart_block_wrapping_cost').text(jsonData.wrappingCost);
        $('.ajax_block_cart_total').text(jsonData.total);
        this.nb_total_products = jsonData.nbTotalProducts;
        if (parseInt(jsonData.nbTotalProducts) > 0) {
            $('.ajax_cart_no_product').hide();
            $('.ajax_cart_quantity').text(jsonData.nbTotalProducts);
            $('.ajax_cart_quantity').fadeIn('slow');
            $('.ajax_cart_total').fadeIn('slow');
            if (parseInt(jsonData.nbTotalProducts) > 1) {
                $('.ajax_cart_product_txt').each(function () {
                    $(this).hide();
                });
                $('.ajax_cart_product_txt_s').each(function () {
                    $(this).show();
                });
            } else {
                $('.ajax_cart_product_txt').each(function () {
                    $(this).show();
                });
                $('.ajax_cart_product_txt_s').each(function () {
                    $(this).hide();
                });
            }
        } else {
            $('.ajax_cart_quantity, .ajax_cart_product_txt_s, .ajax_cart_product_txt, .ajax_cart_total').each(function () {
                $(this).hide();
            });
            $('.ajax_cart_no_product').show('slow');
        }
    }
};

function HoverWatcher(selector) {
    this.hovering = false;
    var self = this;
    this.isHoveringOver = function () {
        return self.hovering;
    }
    $(selector).hover(function () {
        self.hovering = true;
    }, function () {
        self.hovering = false;
    })
}
$(document).ready(function () {
    $('#block_cart_collapse').click(function () {
        ajaxCart.collapse();
    });
    $('#block_cart_expand').click(function () {
        ajaxCart.expand();
    });
    ajaxCart.overrideButtonsInThePage();
    var current_timestamp = parseInt(new Date().getTime() / 1000);
    if (typeof $('.ajax_cart_quantity').html() == 'undefined' || (typeof generated_date != 'undefined' && generated_date != null && (parseInt(generated_date) + 30) < current_timestamp))
        ajaxCart.refresh();
    else
        cart_qty = parseInt($('.ajax_cart_quantity').html());
    ajaxCart.refresh();
    var cart_block = new HoverWatcher('#header #cart_block');
    var shopping_cart = new HoverWatcher('#shopping_cart');
    $('.delete_voucher').live('click', function () {
        $.ajax({
            type: 'POST',
            headers: {
                "cache-control": "no-cache"
            },
            async: true,
            cache: false,
            url: $(this).attr('href') + '?rand=' + new Date().getTime(),
            error: function (XMLHttpRequest, textStatus, errorThrown) {
                alert("TECHNICAL ERROR: \n\nDetails:\nError thrown: " + XMLHttpRequest + "\n" + 'Text status: ' + textStatus);
            }
        });
        $(this).parent().parent().remove();
        if ($('body').attr('id') == 'order' || $('body').attr('id') == 'order-opc') {
            if (typeof (updateAddressSelection) != 'undefined')
                updateAddressSelection();
            else
                location.reload();
        }
        return false;
    });
});;

function categoryReload() {
    function openBranch(jQueryElement, noAnimation) {
        jQueryElement.addClass('icon-minus-sign').removeClass('icon-plus-sign');
        if (noAnimation)
            jQueryElement.parent().find('ul:first').show();
        else
            jQueryElement.parent().find('ul:first').slideDown();
    }

    function closeBranch(jQueryElement, noAnimation) {
        jQueryElement.addClass('icon-plus-sign').removeClass('icon-minus-sign');
        if (noAnimation)
            jQueryElement.parent().find('ul:first').hide();
        else
            jQueryElement.parent().find('ul:first').slideUp();
    }

    function toggleBranch(jQueryElement, noAnimation) {
        if (jQueryElement.hasClass('icon-minus-sign'))
            closeBranch(jQueryElement, noAnimation);
        else
            openBranch(jQueryElement, noAnimation);
    }
    $('.column ul.tree.dhtml ul').parent().find("i.icon-plus-sign").remove();
    $('.column ul.tree.dhtml ul').prev().before("<i class='grower icon-minus-sign'></i>");
    $('.column ul.tree.dhtml ul li:last-child, .column ul.tree.dhtml li:last-child').addClass('last');
    $('.column ul.tree.dhtml i.grower.icon-minus-sign').addClass('icon-plus-sign').removeClass('icon-minus-sign').parent().find('ul:first').hide();
    $('.column ul.tree.dhtml').show();
    $('.column ul.tree.dhtml .selected').parents().each(function () {
        if ($(this).is('ul'))
            toggleBranch($(this).prev().prev(), true);
    });
    toggleBranch($('.column ul.tree.dhtml .selected').prev(), true);
    $('.column ul.tree.dhtml i.grower').click(function () {
        toggleBranch($(this));
    });
};
$(document).ready(function () {
    $('#footer ul.tree ul').hide();
});;;
(function ($) {
    $.fn.extend({
        autocomplete: function (urlOrData, options) {
            var isUrl = typeof urlOrData == "string";
            options = $.extend({}, $.Autocompleter.defaults, {
                url: isUrl ? urlOrData : null,
                data: isUrl ? null : urlOrData,
                delay: isUrl ? $.Autocompleter.defaults.delay : 10,
                max: options && !options.scroll ? 10 : 150
            }, options);
            options.highlight = options.highlight || function (value) {
                return value;
            };
            options.formatMatch = options.formatMatch || options.formatItem;
            return this.each(function () {
                new $.Autocompleter(this, options);
            });
        },
        result: function (handler) {
            return this.bind("result", handler);
        },
        search: function (handler) {
            return this.trigger("search", [handler]);
        },
        flushCache: function () {
            return this.trigger("flushCache");
        },
        setOptions: function (options) {
            return this.trigger("setOptions", [options]);
        },
        unautocomplete: function () {
            return this.trigger("unautocomplete");
        }
    });
    $.Autocompleter = function (input, options) {
        var KEY = {
            UP: 38,
            DOWN: 40,
            DEL: 46,
            TAB: 9,
            RETURN: 13,
            ESC: 27,
            COMMA: 188,
            PAGEUP: 33,
            PAGEDOWN: 34,
            BACKSPACE: 8
        };
        var $input = $(input).attr("autocomplete", "off").addClass(options.inputClass);
        var timeout;
        var previousValue = "";
        var cache = $.Autocompleter.Cache(options);
        var hasFocus = 0;
        var lastKeyPressCode;
        var config = {
            mouseDownOnSelect: false
        };
        var select = $.Autocompleter.Select(options, input, selectCurrent, config);
        var blockSubmit;
        $.browser.opera && $(input.form).bind("submit.autocomplete", function () {
            if (blockSubmit) {
                blockSubmit = false;
                return false;
            }
        });
        $input.bind(($.browser.opera ? "keypress" : "keydown") + ".autocomplete", function (event) {
            lastKeyPressCode = event.keyCode;
            switch (event.keyCode) {
            case KEY.UP:
                event.preventDefault();
                if (select.visible()) {
                    select.prev();
                } else {
                    onChange(0, true);
                }
                break;
            case KEY.DOWN:
                event.preventDefault();
                if (select.visible()) {
                    select.next();
                } else {
                    onChange(0, true);
                }
                break;
            case KEY.PAGEUP:
                event.preventDefault();
                if (select.visible()) {
                    select.pageUp();
                } else {
                    onChange(0, true);
                }
                break;
            case KEY.PAGEDOWN:
                event.preventDefault();
                if (select.visible()) {
                    select.pageDown();
                } else {
                    onChange(0, true);
                }
                break;
            case options.multiple && $.trim(options.multipleSeparator) == "," && KEY.COMMA:
            case KEY.TAB:
            case KEY.RETURN:
                if (selectCurrent()) {
                    event.preventDefault();
                    blockSubmit = true;
                    return false;
                }
                break;
            case KEY.ESC:
                select.hide();
                break;
            default:
                clearTimeout(timeout);
                timeout = setTimeout(onChange, options.delay);
                break;
            }
        }).focus(function () {
            hasFocus++;
        }).blur(function () {
            hasFocus = 0;
            if (!config.mouseDownOnSelect) {
                hideResults();
            }
        }).click(function () {
            if (hasFocus++ > 1 && !select.visible()) {
                onChange(0, true);
            }
        }).bind("search", function () {
            var fn = (arguments.length > 1) ? arguments[1] : null;

            function findValueCallback(q, data) {
                var result;
                if (data && data.length) {
                    for (var i = 0; i < data.length; i++) {
                        if (data[i].result.toLowerCase() == q.toLowerCase()) {
                            result = data[i];
                            break;
                        }
                    }
                }
                if (typeof fn == "function") fn(result);
                else $input.trigger("result", result && [result.data, result.value]);
            }
            $.each(trimWords($input.val()), function (i, value) {
                request(value, findValueCallback, findValueCallback);
            });
        }).bind("flushCache", function () {
            cache.flush();
        }).bind("setOptions", function () {
            $.extend(options, arguments[1]);
            if ("data" in arguments[1])
                cache.populate();
        }).bind("unautocomplete", function () {
            select.unbind();
            $input.unbind();
            $(input.form).unbind(".autocomplete");
        });

        function selectCurrent() {
            var selected = select.selected();
            if (!selected)
                return false;
            var v = selected.result;
            previousValue = v;
            if (options.multiple) {
                var words = trimWords($input.val());
                if (words.length > 1) {
                    v = words.slice(0, words.length - 1).join(options.multipleSeparator) + options.multipleSeparator + v;
                }
                v += options.multipleSeparator;
            }
            $input.val(v);
            hideResultsNow();
            $input.trigger("result", [selected.data, selected.value]);
            return true;
        }

        function onChange(crap, skipPrevCheck) {
            if (lastKeyPressCode == KEY.DEL) {
                select.hide();
                return;
            }
            var currentValue = $input.val();
            if (!skipPrevCheck && currentValue == previousValue)
                return;
            previousValue = currentValue;
            currentValue = lastWord(currentValue);
            if (currentValue.length >= options.minChars) {
                $input.addClass(options.loadingClass);
                if (!options.matchCase)
                    currentValue = currentValue.toLowerCase();
                request(currentValue, receiveData, hideResultsNow);
            } else {
                stopLoading();
                select.hide();
            }
        };

        function trimWords(value) {
            if (!value) {
                return [""];
            }
            var words = value.split(options.multipleSeparator);
            var result = [];
            $.each(words, function (i, value) {
                if ($.trim(value))
                    result[i] = $.trim(value);
            });
            return result;
        }

        function lastWord(value) {
            if (!options.multiple)
                return value;
            var words = trimWords(value);
            return words[words.length - 1];
        }

        function autoFill(q, sValue) {
            if (options.autoFill && (lastWord($input.val()).toLowerCase() == q.toLowerCase()) && lastKeyPressCode != KEY.BACKSPACE) {
                $input.val($input.val() + sValue.substring(lastWord(previousValue).length));
                $.Autocompleter.Selection(input, previousValue.length, previousValue.length + sValue.length);
            }
        };

        function hideResults() {
            clearTimeout(timeout);
            timeout = setTimeout(hideResultsNow, 200);
        };

        function hideResultsNow() {
            var wasVisible = select.visible();
            select.hide();
            clearTimeout(timeout);
            stopLoading();
            if (options.mustMatch) {
                $input.search(function (result) {
                    if (!result) {
                        if (options.multiple) {
                            var words = trimWords($input.val()).slice(0, -1);
                            $input.val(words.join(options.multipleSeparator) + (words.length ? options.multipleSeparator : ""));
                        } else
                            $input.val("");
                    }
                });
            }
            if (wasVisible)
                $.Autocompleter.Selection(input, input.value.length, input.value.length);
        };

        function receiveData(q, data) {
            if (data && data.length && hasFocus) {
                stopLoading();
                select.display(data, q);
                autoFill(q, data[0].value);
                select.show();
            } else {
                hideResultsNow();
            }
        };

        function request(term, success, failure) {
            if (!options.matchCase)
                term = term.toLowerCase();
            var data = cache.load(term);
            if (data && data.length) {
                success(term, data);
            } else if ((typeof options.url == "string") && (options.url.length > 0)) {
                var extraParams = {
                    timestamp: +new Date()
                };
                $.each(options.extraParams, function (key, param) {
                    extraParams[key] = typeof param == "function" ? param() : param;
                });
                $.ajax({
                    mode: "abort",
                    port: "autocomplete" + input.name,
                    dataType: options.dataType,
                    url: options.url,
                    data: $.extend({
                        q: lastWord(term),
                        limit: options.max
                    }, extraParams),
                    success: function (data) {
                        var parsed = options.parse && options.parse(data) || parse(data);
                        cache.add(term, parsed);
                        success(term, parsed);
                    }
                });
            } else {
                select.emptyList();
                failure(term);
            }
        };

        function parse(data) {
            var parsed = [];
            var rows = data.split("\n");
            for (var i = 0; i < rows.length; i++) {
                var row = $.trim(rows[i]);
                if (row) {
                    row = row.split("|");
                    parsed[parsed.length] = {
                        data: row,
                        value: row[0],
                        result: options.formatResult && options.formatResult(row, row[0]) || row[0]
                    };
                }
            }
            return parsed;
        };

        function stopLoading() {
            $input.removeClass(options.loadingClass);
        };
    };
    $.Autocompleter.defaults = {
        inputClass: "ac_input",
        resultsClass: "ac_results",
        loadingClass: "ac_loading",
        minChars: 1,
        delay: 400,
        matchCase: false,
        matchSubset: true,
        matchContains: false,
        cacheLength: 10,
        max: 100,
        mustMatch: false,
        extraParams: {},
        selectFirst: true,
        formatItem: function (row) {
            return row[0];
        },
        formatMatch: null,
        autoFill: false,
        width: 0,
        multiple: false,
        multipleSeparator: ", ",
        highlight: function (value, term) {
            return value.replace(new RegExp("(?![^&;]+;)(?!<[^<>]*)(" + term.replace(/([\^\$\(\)\[\]\{\}\*\.\+\?\|\\])/gi, "\\$1") + ")(?![^<>]*>)(?![^&;]+;)", "gi"), "<strong>$1</strong>");
        },
        scroll: true,
        scrollHeight: 180
    };
    $.Autocompleter.Cache = function (options) {
        var data = {};
        var length = 0;

        function matchSubset(s, sub) {
            if (!options.matchCase)
                s = s.toLowerCase();
            var i = s.indexOf(sub);
            if (i == -1) return false;
            return i == 0 || options.matchContains;
        };

        function add(q, value) {
            if (length > options.cacheLength) {
                flush();
            }
            if (!data[q]) {
                length++;
            }
            data[q] = value;
        }

        function populate() {
            if (!options.data) return false;
            var stMatchSets = {}, nullData = 0;
            if (!options.url) options.cacheLength = 1;
            stMatchSets[""] = [];
            for (var i = 0, ol = options.data.length; i < ol; i++) {
                var rawValue = options.data[i];
                rawValue = (typeof rawValue == "string") ? [rawValue] : rawValue;
                var value = options.formatMatch(rawValue, i + 1, options.data.length);
                if (value === false)
                    continue;
                var firstChar = value.charAt(0).toLowerCase();
                if (!stMatchSets[firstChar])
                    stMatchSets[firstChar] = [];
                var row = {
                    value: value,
                    data: rawValue,
                    result: options.formatResult && options.formatResult(rawValue) || value
                };
                stMatchSets[firstChar].push(row);
                if (nullData++ < options.max) {
                    stMatchSets[""].push(row);
                }
            };
            $.each(stMatchSets, function (i, value) {
                options.cacheLength++;
                add(i, value);
            });
        }
        setTimeout(populate, 25);

        function flush() {
            data = {};
            length = 0;
        }
        return {
            flush: flush,
            add: add,
            populate: populate,
            load: function (q) {
                if (!options.cacheLength || !length)
                    return null;
                if (!options.url && options.matchContains) {
                    var csub = [];
                    for (var k in data) {
                        if (k.length > 0) {
                            var c = data[k];
                            $.each(c, function (i, x) {
                                if (matchSubset(x.value, q)) {
                                    csub.push(x);
                                }
                            });
                        }
                    }
                    return csub;
                } else
                if (data[q]) {
                    return data[q];
                } else
                if (options.matchSubset) {
                    for (var i = q.length - 1; i >= options.minChars; i--) {
                        var c = data[q.substr(0, i)];
                        if (c) {
                            var csub = [];
                            $.each(c, function (i, x) {
                                if (matchSubset(x.value, q)) {
                                    csub[csub.length] = x;
                                }
                            });
                            return csub;
                        }
                    }
                }
                return null;
            }
        };
    };
    $.Autocompleter.Select = function (options, input, select, config) {
        var CLASSES = {
            ACTIVE: "ac_over"
        };
        var listItems, active = -1,
            data, term = "",
            needsInit = true,
            element, list;

        function init() {
            if (!needsInit)
                return;
            element = $("<div/>").hide().addClass(options.resultsClass).css("position", "absolute").appendTo(document.body);
            list = $("<ul/>").appendTo(element).mouseover(function (event) {
                if (target(event).nodeName && target(event).nodeName.toUpperCase() == 'LI') {
                    active = $("li", list).removeClass(CLASSES.ACTIVE).index(target(event));
                    $(target(event)).addClass(CLASSES.ACTIVE);
                }
            }).click(function (event) {
                $(target(event)).addClass(CLASSES.ACTIVE);
                select();
                input.focus();
                return false;
            }).mousedown(function () {
                config.mouseDownOnSelect = true;
            }).mouseup(function () {
                config.mouseDownOnSelect = false;
            });
            if (options.width > 0)
                element.css("width", options.width);
            needsInit = false;
        }

        function target(event) {
            var element = event.target;
            while (element && element.tagName != "LI")
                element = element.parentNode;
            if (!element)
                return [];
            return element;
        }

        function moveSelect(step) {
            listItems.slice(active, active + 1).removeClass(CLASSES.ACTIVE);
            movePosition(step);
            var activeItem = listItems.slice(active, active + 1).addClass(CLASSES.ACTIVE);
            if (options.scroll) {
                var offset = 0;
                listItems.slice(0, active).each(function () {
                    offset += this.offsetHeight;
                });
                if ((offset + activeItem[0].offsetHeight - list.scrollTop()) > list[0].clientHeight) {
                    list.scrollTop(offset + activeItem[0].offsetHeight - list.innerHeight());
                } else if (offset < list.scrollTop()) {
                    list.scrollTop(offset);
                }
            }
        };

        function movePosition(step) {
            active += step;
            if (active < 0) {
                active = listItems.size() - 1;
            } else if (active >= listItems.size()) {
                active = 0;
            }
        }

        function limitNumberOfItems(available) {
            return options.max && options.max < available ? options.max : available;
        }

        function fillList() {
            list.empty();
            var max = limitNumberOfItems(data.length);
            for (var i = 0; i < max; i++) {
                if (!data[i])
                    continue;
                var formatted = options.formatItem(data[i].data, i + 1, max, data[i].value, term);
                if (formatted === false)
                    continue;
                var li = $("<li/>").html(options.highlight(formatted, term)).addClass(i % 2 == 0 ? "ac_even" : "ac_odd").appendTo(list)[0];
                $.data(li, "ac_data", data[i]);
            }
            listItems = list.find("li");
            if (options.selectFirst) {
                listItems.slice(0, 1).addClass(CLASSES.ACTIVE);
                active = 0;
            }
            if ($.fn.bgiframe)
                list.bgiframe();
        }
        return {
            display: function (d, q) {
                init();
                data = d;
                term = q;
                fillList();
            },
            next: function () {
                moveSelect(1);
            },
            prev: function () {
                moveSelect(-1);
            },
            pageUp: function () {
                if (active != 0 && active - 8 < 0) {
                    moveSelect(-active);
                } else {
                    moveSelect(-8);
                }
            },
            pageDown: function () {
                if (active != listItems.size() - 1 && active + 8 > listItems.size()) {
                    moveSelect(listItems.size() - 1 - active);
                } else {
                    moveSelect(8);
                }
            },
            hide: function () {
                element && element.hide();
                listItems && listItems.removeClass(CLASSES.ACTIVE);
                active = -1;
            },
            visible: function () {
                return element && element.is(":visible");
            },
            current: function () {
                return this.visible() && (listItems.filter("." + CLASSES.ACTIVE)[0] || options.selectFirst && listItems[0]);
            },
            show: function () {
                var offset = $(input).offset();
                element.css({
                    width: typeof options.width == "string" || options.width > 0 ? options.width : $(input).width(),
                    top: offset.top + input.offsetHeight,
                    left: offset.left
                }).show();
                if (options.scroll) {
                    list.css({
                        maxHeight: options.scrollHeight,
                        overflow: 'auto'
                    });
                    if ($.browser.msie && typeof document.body.style.maxHeight === "undefined") {
                        var listHeight = 0;
                        listItems.each(function () {
                            listHeight += this.offsetHeight;
                        });
                        var scrollbarsVisible = listHeight > options.scrollHeight;
                        list.css('height', scrollbarsVisible ? options.scrollHeight : listHeight);
                        if (!scrollbarsVisible) {
                            listItems.width(list.width() - parseInt(listItems.css("padding-left")) - parseInt(listItems.css("padding-right")));
                        }
                    }
                }
            },
            selected: function () {
                var selected = listItems && listItems.filter("." + CLASSES.ACTIVE).removeClass(CLASSES.ACTIVE);
                return selected && selected.length && $.data(selected[0], "ac_data");
            },
            emptyList: function () {
                list && list.empty();
            },
            unbind: function () {
                element && element.remove();
            }
        };
    };
    $.Autocompleter.Selection = function (field, start, end) {
        if (field.createTextRange) {
            var selRange = field.createTextRange();
            selRange.collapse(true);
            selRange.moveStart("character", start);
            selRange.moveEnd("character", end);
            selRange.select();
        } else if (field.setSelectionRange) {
            field.setSelectionRange(start, end);
        } else {
            if (field.selectionStart) {
                field.selectionStart = start;
                field.selectionEnd = end;
            }
        }
        field.focus();
    };
})(jQuery);;
$('document').ready(function () {
    $('#favoriteproducts_block_extra_add').click(function () {
        $.ajax({
            url: favorite_products_url_add + '&rand=' + new Date().getTime(),
            type: "POST",
            headers: {
                "cache-control": "no-cache"
            },
            data: {
                "id_product": favorite_products_id_product
            },
            success: function (result) {
                if (result == '0') {
                    $('#favoriteproducts_block_extra_add').slideUp(function () {
                        $('#favoriteproducts_block_extra_added').slideDown("slow");
                    });
                }
            }
        });
    });
    $('#favoriteproducts_block_extra_remove').click(function () {
        $.ajax({
            url: favorite_products_url_remove + '&rand=' + new Date().getTime(),
            type: "POST",
            headers: {
                "cache-control": "no-cache"
            },
            data: {
                "id_product": favorite_products_id_product
            },
            success: function (result) {
                if (result == '0') {
                    $('#favoriteproducts_block_extra_remove').slideUp(function () {
                        $('#favoriteproducts_block_extra_removed').slideDown("slow");
                    });
                }
            }
        });
    });
    $('#favoriteproducts_block_extra_added').click(function () {
        $.ajax({
            url: favorite_products_url_remove + '&rand=' + new Date().getTime(),
            type: "POST",
            headers: {
                "cache-control": "no-cache"
            },
            data: {
                "id_product": favorite_products_id_product
            },
            success: function (result) {
                if (result == '0') {
                    $('#favoriteproducts_block_extra_added').slideUp(function () {
                        $('#favoriteproducts_block_extra_removed').slideDown("slow");
                    });
                }
            }
        });
    });
    $('#favoriteproducts_block_extra_removed').click(function () {
        $.ajax({
            url: favorite_products_url_add + '&rand=' + new Date().getTime(),
            type: "POST",
            headers: {
                "cache-control": "no-cache"
            },
            data: {
                "id_product": favorite_products_id_product
            },
            success: function (result) {
                if (result == '0') {
                    $('#favoriteproducts_block_extra_removed').slideUp(function () {
                        $('#favoriteproducts_block_extra_added').slideDown("slow");
                    });
                }
            }
        });
    });
});
var ajaxQueries = new Array();
var ajaxLoaderOn = 0;
var sliderList = new Array();
var slidersInit = false;
$(document).ready(function () {
    cancelFilter();
    openCloseFilter();
    $('#layered_form input[type=button], #layered_form label.layered_color').live('click', function () {
        if (!$('input[name=' + $(this).attr('name') + '][type=hidden]').length)
            $('<input />').attr('type', 'hidden').attr('name', $(this).attr('name')).val($(this).attr('rel')).appendTo('#layered_form');
        else
            $('input[name=' + $(this).attr('name') + '][type=hidden]').remove();
        reloadContent();
    });
    $('#layered_form input[type=checkbox], #layered_form input[type=radio], #layered_form select').live('change', function () {
        reloadContent();
    });
    $('#layered_form input.layered_input_range').live('keyup', function () {
        if ($(this).attr('timeout_id'))
            window.clearTimeout($(this).attr('timeout_id'));
        var reference = this;
        $(this).attr('timeout_id', window.setTimeout(function (it) {
            if (!$(it).attr('id'))
                it = reference;
            var filter = $(it).attr('id').replace(/^layered_(.+)_range_.*$/, '$1');
            var value_min = parseInt($('#layered_' + filter + '_range_min').val());
            if (isNaN(value_min))
                value_min = 0;
            $('#layered_' + filter + '_range_min').val(value_min);
            var value_max = parseInt($('#layered_' + filter + '_range_max').val());
            if (isNaN(value_max))
                value_max = 0;
            $('#layered_' + filter + '_range_max').val(value_max);
            if (value_max < value_min) {
                $('#layered_' + filter + '_range_max').val($(it).val());
                $('#layered_' + filter + '_range_min').val($(it).val());
            }
            reloadContent();
        }, 500, this));
    });
    $('#layered_block_left .radio').live('click', function () {
        var name = $(this).attr('name');
        $.each($(this).parent().parent().find('input[type=button]'), function (it, item) {
            if ($(item).hasClass('on') && $(item).attr('name') != name) {
                $(item).click();
            }
        });
        return true;
    });
    $('#layered_block_left label a').live({
        click: function () {
            var disable = $(this).parent().parent().find('input').attr('disabled');
            if (disable == '' || typeof (disable) == 'undefined' || disable == false) {
                $(this).parent().parent().find('input').click();
                reloadContent();
            }
            return false;
        }
    });
    layered_hidden_list = {};
    $('.hide-action').live('click', function () {
        if (typeof (layered_hidden_list[$(this).parent().find('ul').attr('id')]) == 'undefined' || layered_hidden_list[$(this).parent().find('ul').attr('id')] == false) {
            layered_hidden_list[$(this).parent().find('ul').attr('id')] = true;
        } else {
            layered_hidden_list[$(this).parent().find('ul').attr('id')] = false;
        }
        hideFilterValueAction(this);
    });
    $('.hide-action').each(function () {
        hideFilterValueAction(this);
    });
    var id = 1;
    while ($('#selectPrductSort').length) {
        $('#selectPrductSort').unbind('change');
        $('#selectPrductSort').attr('onchange', '');
        $('#selectPrductSort').addClass('selectProductSort');
        $('#selectPrductSort').attr('id', 'selectPrductSort' + id);
        $('label[for=selectPrductSort]').attr('for', 'selectPrductSort' + id);
        id++;
    }
    setTimeout(function () {
        $('.selectProductSort').unbind('change');
    }, 100);
    $('.selectProductSort').live('change', function (event) {
        $('.selectProductSort').val($(this).val());
        reloadContent();
    });
    $('.js-nb_item').unbind('change').attr('onchange', '');
    $('.js-nb_item').live('change', function (event) {
        $('.js-nb_item').val($(this).val());
        reloadContent();
    });
    paginationButton();
    initLayered();
});

function hideFilterValueAction(it) {
    if (typeof (layered_hidden_list[$(it).parent().find('ul').attr('id')]) == 'undefined' || layered_hidden_list[$(it).parent().find('ul').attr('id')] == false) {
        $(it).parent().find('.hiddable').hide();
        $(it).parent().find('.hide-action.less').hide();
        $(it).parent().find('.hide-action.more').show();
    } else {
        $(it).parent().find('.hiddable').show();
        $(it).parent().find('.hide-action.less').show();
        $(it).parent().find('.hide-action.more').hide();
    }
}

function addSlider(type, data, unit, format) {
    sliderList.push({
        type: type,
        data: data,
        unit: unit,
        format: format
    });
}

function initSliders() {
    $(sliderList).each(function (i, slider) {
        $('#layered_' + slider['type'] + '_slider').slider(slider['data']);
        var from = '';
        var to = '';
        switch (slider['format']) {
        case 1:
        case 2:
        case 3:
        case 4:
            from = blocklayeredFormatCurrency($('#layered_' + slider['type'] + '_slider').slider('values', 0), slider['format'], slider['unit']);
            to = blocklayeredFormatCurrency($('#layered_' + slider['type'] + '_slider').slider('values', 1), slider['format'], slider['unit']);
            break;
        case 5:
            from = $('#layered_' + slider['type'] + '_slider').slider('values', 0) + slider['unit']
            to = $('#layered_' + slider['type'] + '_slider').slider('values', 1) + slider['unit'];
            break;
        }
        $('#layered_' + slider['type'] + '_range').html(from + ' - ' + to);
    });
}

function initLayered() {
    initSliders();
    initLocationChange();
    updateProductUrl();
    if (window.location.href.split('#').length == 2 && window.location.href.split('#')[1] != '') {
        var params = window.location.href.split('#')[1];
        reloadContent('&selected_filters=' + params);
    }
}

function paginationButton() {
    $('div.pagination a').not(':hidden').each(function () {
        if ($(this).attr('href').search(/[&|\?]p=/) == -1)
            var page = 1;
        else
            var page = $(this).attr('href').replace(/^.*[&|\?]p=(\d+).*$/, '$1');
        var location = window.location.href.replace(/#.*$/, '');
        $(this).attr('href', location + current_friendly_url.replace(/\/page-(\d+)/, '') + '/page-' + page);
    });
    $('div.pagination li').not('.current, .disabled').each(function () {
        var nbPage = 0;
        if ($(this).hasClass('pagination_next'))
            nbPage = parseInt($('div.pagination li.current').children().html()) + 1;
        else if ($(this).hasClass('pagination_previous'))
            nbPage = parseInt($('div.pagination li.current').children().html()) - 1;
        $(this).children().click(function () {
            if (nbPage == 0)
                p = parseInt($(this).html()) + parseInt(nbPage);
            else
                p = nbPage;
            p = '&p=' + p;
            reloadContent(p);
            nbPage = 0;
            return false;
        });
    });
}

function cancelFilter() {
    $('#enabled_filters a').live('click', function (e) {
        if ($(this).attr('rel').search(/_slider$/) > 0) {
            if ($('#' + $(this).attr('rel')).length) {
                $('#' + $(this).attr('rel')).slider('values', 0, $('#' + $(this).attr('rel')).slider('option', 'min'));
                $('#' + $(this).attr('rel')).slider('values', 1, $('#' + $(this).attr('rel')).slider('option', 'max'));
                $('#' + $(this).attr('rel')).slider('option', 'slide')(0, {
                    values: [$('#' + $(this).attr('rel')).slider('option', 'min'), $('#' + $(this).attr('rel')).slider('option', 'max')]
                });
            } else if ($('#' + $(this).attr('rel').replace(/_slider$/, '_range_min')).length) {
                $('#' + $(this).attr('rel').replace(/_slider$/, '_range_min')).val($('#' + $(this).attr('rel').replace(/_slider$/, '_range_min')).attr('limitValue'));
                $('#' + $(this).attr('rel').replace(/_slider$/, '_range_max')).val($('#' + $(this).attr('rel').replace(/_slider$/, '_range_max')).attr('limitValue'));
            }
        } else {
            if ($('option#' + $(this).attr('rel')).length) {
                $('#' + $(this).attr('rel')).parent().val('');
            } else {
                $('#' + $(this).attr('rel')).attr('checked', false);
                $('.' + $(this).attr('rel')).attr('checked', false);
                $('#layered_form input[type=hidden][name=' + $(this).attr('rel') + ']').remove();
            }
        }
        reloadContent();
        e.preventDefault();
    });
}

function openCloseFilter() {
    $('#layered_form span.layered_close a').live('click', function (e) {
        if ($(this).html() == '<i class="icon-plus-sign"></i>') {
            $('#' + $(this).attr('rel')).show(600);
            $(this).html('<i class="icon-minus-sign"></i>');
            $(this).parent().removeClass('closed');
        } else {
            $('#' + $(this).attr('rel')).hide(600);
            $(this).html('<i class="icon-plus-sign"></i>');
            $(this).parent().addClass('closed');
        }
        e.preventDefault();
    });
}

function stopAjaxQuery() {
    if (typeof (ajaxQueries) == 'undefined')
        ajaxQueries = new Array();
    for (i = 0; i < ajaxQueries.length; i++)
        ajaxQueries[i].abort();
    ajaxQueries = new Array();
}

function reloadContent(params_plus) {
    stopAjaxQuery();
    if (!ajaxLoaderOn) {
        $('#product_list').prepend($('#layered_ajax_loader').html());
        $('#product_list').css('opacity', '0.7');
        ajaxLoaderOn = 1;
    }
    data = $('#layered_form').serialize();
    $('.layered_slider').each(function () {
        var sliderStart = $(this).slider('values', 0);
        var sliderStop = $(this).slider('values', 1);
        if (typeof (sliderStart) == 'number' && typeof (sliderStop) == 'number')
            data += '&' + $(this).attr('id') + '=' + sliderStart + '_' + sliderStop;
    });
    $(['price', 'weight']).each(function (it, sliderType) {
        if ($('#layered_' + sliderType + '_range_min').length) {
            data += '&layered_' + sliderType + '_slider=' + $('#layered_' + sliderType + '_range_min').val() + '_' + $('#layered_' + sliderType + '_range_max').val();
        }
    });
    $('#layered_form .select option').each(function () {
        if ($(this).attr('id') && $(this).parent().val() == $(this).val()) {
            data += '&' + $(this).attr('id') + '=' + $(this).val();
        }
    });
    if ($('.selectProductSort').length && $('.selectProductSort').val()) {
        if ($('.selectProductSort').val().search(/orderby=/) > 0) {
            var splitData = [$('.selectProductSort').val().match(/orderby=(\w*)/)[1], $('.selectProductSort').val().match(/orderway=(\w*)/)[1]];
        } else {
            var splitData = $('.selectProductSort').val().split(':');
        }
        data += '&orderby=' + splitData[0] + '&orderway=' + splitData[1];
    }
    if ($('.js-nb_item').length) {
        data += '&n=' + $('.js-nb_item').val();
    }
    var slideUp = true;
    if (params_plus == undefined) {
        params_plus = '';
        slideUp = false;
    }
    var n = '';
    $('div.pagination .js-nb_item').children().each(function (it, option) {
        if (option.selected)
            n = '&n=' + option.value;
    });
    ajaxQuery = $.ajax({
        type: 'GET',
        url: baseDir + 'modules/blocklayered/blocklayered-ajax.php',
        data: data + params_plus + n,
        dataType: 'json',
        cache: false,
        success: function (result) {
            $('#layered_block_left').replaceWith(utf8_decode(result.filtersBlock));
            $('.category-product-count').html(result.categoryCount);
            if (result.productList)
                $('#product_list').replaceWith(utf8_decode(result.productList));
            else
                $('#product_list').html('');
            $('#product_list').css('opacity', '1');
            if ($.browser.msie)
                $('#product_list').css('filter', '');
            if (result.pagination.search(/[^\s]/) >= 0) {
                if ($(result.pagination).find('ul.pagination').length) {
                    $('div.pagination').show();
                    $('ul.pagination').each(function () {
                        $(this).replaceWith($(result.pagination).find('ul.pagination'));
                    });
                } else if (!$('ul.pagination').length) {
                    $('div.pagination').show();
                    $('div.pagination').each(function () {
                        $(this).html($(result.pagination));
                    });
                } else {
                    $('ul.pagination').html('');
                    $('div.pagination').hide();
                }
            } else {
                $('ul.pagination').html('');
                $('div.pagination').hide();
            }
            paginationButton();
            ajaxLoaderOn = 0;
            $('div.pagination form').submit(function () {
                val = $('div.pagination .js-nb_item').val();
                $('div.pagination .js-nb_item').children().each(function (it, option) {
                    if (option.value == val)
                        $(option).attr('selected', true);
                    else
                        $(option).removeAttr('selected');
                });
                reloadContent();
                return false;
            });
            if (typeof (ajaxCart) != "undefined")
                ajaxCart.overrideButtonsInThePage();
            if (typeof (reloadProductComparison) == 'function')
                reloadProductComparison();
            initSliders();
            if (typeof (current_friendly_url) == 'undefined')
                current_friendly_url = '#';
            $(['price', 'weight']).each(function (it, sliderType) {
                if ($('#layered_' + sliderType + '_slider').length) {
                    if (typeof ($('#layered_' + sliderType + '_slider').slider('values', 0)) != 'object') {
                        if ($('#layered_' + sliderType + '_slider').slider('values', 0) != $('#layered_' + sliderType + '_slider').slider('option', 'min') || $('#layered_' + sliderType + '_slider').slider('values', 1) != $('#layered_' + sliderType + '_slider').slider('option', 'max'))
                            current_friendly_url += '/' + sliderType + '-' + $('#layered_' + sliderType + '_slider').slider('values', 0) + '-' + $('#layered_' + sliderType + '_slider').slider('values', 1)
                    }
                } else if ($('#layered_' + sliderType + '_range_min').length) {
                    current_friendly_url += '/' + sliderType + '-' + $('#layered_' + sliderType + '_range_min').val() + '-' + $('#layered_' + sliderType + '_range_max').val();
                }
            });
            if (current_friendly_url == '#')
                current_friendly_url = '#/';
            window.location = current_friendly_url;
            lockLocationChecking = true;
            if (slideUp)
                $.scrollTo('.sortPagiBar', 400);
            $(function () {
                $("#layered_form .store_list_filter input.checkbox, .compare .comparator, #productsSortForm .selectProductSort, .nb_item").uniform();
            });
            $("#enabled_filters li a").hover(function () {
                $(this).parent().addClass('enabled_filters_extra');
            }, function () {
                $(this).parent().removeClass('enabled_filters_extra');
            });
            if (slideUp)
                $.scrollTo('.sortPagiBar', 400);
            updateProductUrl();
            $('.hide-action').each(function () {
                hideFilterValueAction(this);
            });
        }
    });
    ajaxQueries.push(ajaxQuery);
}

function initLocationChange(func, time) {
    if (!time) time = 500;
    var current_friendly_url = getUrlParams();
    setInterval(function () {
        if (getUrlParams() != current_friendly_url && !lockLocationChecking) {
            if (current_friendly_url.replace(/^#(\/)?/, '') == getUrlParams().replace(/^#(\/)?/, ''))
                return;
            lockLocationChecking = true;
            reloadContent('&selected_filters=' + getUrlParams().replace(/^#/, ''));
        } else {
            lockLocationChecking = false;
            current_friendly_url = getUrlParams();
        }
    }, time);
}

function getUrlParams() {
    var params = current_friendly_url;
    if (window.location.href.split('#').length == 2 && window.location.href.split('#')[1] != '')
        params = '#' + window.location.href.split('#')[1];
    return params;
}

function updateProductUrl() {
    if (typeof (param_product_url) != 'undefined' && param_product_url != '' && param_product_url != '#') {
        $.each($('ul#product_list li.ajax_block_product .product_img_link,' + 'ul#product_list li.ajax_block_product h3 a,' + 'ul#product_list li.ajax_block_product .product_desc a,' + 'ul#product_list li.ajax_block_product .lnk_view'), function () {
            $(this).attr('href', $(this).attr('href') + param_product_url);
        });
    }
}

function utf8_decode(utfstr) {
    var res = '';
    for (var i = 0; i < utfstr.length;) {
        var c = utfstr.charCodeAt(i);
        if (c < 128) {
            res += String.fromCharCode(c);
            i++;
        } else if ((c > 191) && (c < 224)) {
            var c1 = utfstr.charCodeAt(i + 1);
            res += String.fromCharCode(((c & 31) << 6) | (c1 & 63));
            i += 2;
        } else {
            var c1 = utfstr.charCodeAt(i + 1);
            var c2 = utfstr.charCodeAt(i + 2);
            res += String.fromCharCode(((c & 15) << 12) | ((c1 & 63) << 6) | (c2 & 63));
            i += 3;
        }
    }
    return res;
}

function blocklayeredFormatCurrency(price, currencyFormat, currencySign, currencyBlank) {
    blank = '';
    price = parseFloat(price.toFixed(6));
    price = ps_round(price, priceDisplayPrecision);
    if (currencyBlank > 0)
        blank = ' ';
    if (currencyFormat == 1)
        return currencySign + blank + blocklayeredFormatNumber(price, priceDisplayPrecision, ',', '.');
    if (currencyFormat == 2)
        return (blocklayeredFormatNumber(price, priceDisplayPrecision, ' ', ',') + blank + currencySign);
    if (currencyFormat == 3)
        return (currencySign + blank + blocklayeredFormatNumber(price, priceDisplayPrecision, '.', ','));
    if (currencyFormat == 4)
        return (blocklayeredFormatNumber(price, priceDisplayPrecision, ',', '.') + blank + currencySign);
    return price;
}

function blocklayeredFormatNumber(value, numberOfDecimal, thousenSeparator, virgule) {
    value = value.toFixed(numberOfDecimal);
    var val_string = value + '';
    var tmp = val_string.split('.');
    var abs_val_string = (tmp.length == 2) ? tmp[0] : val_string;
    var deci_string = ('0.' + (tmp.length == 2 ? tmp[1] : 0)).substr(2);
    var nb = abs_val_string.length;
    for (var i = 1; i < 4; i++)
        if (value >= Math.pow(10, (3 * i)))
            abs_val_string = abs_val_string.substring(0, nb - (3 * i)) + thousenSeparator + abs_val_string.substring(nb - (3 * i));
    if (parseInt(numberOfDecimal) == 0)
        return abs_val_string;
    return abs_val_string + virgule + (deci_string > 0 ? deci_string : '00');
};
/*! jQuery UI - v1.10.3 - 2013-05-03
 * http://jqueryui.com
 * Copyright 2013 jQuery Foundation and other contributors; Licensed MIT */
(function (e, t) {
    function i(t, i) {
        var a, n, r, o = t.nodeName.toLowerCase();
        return "area" === o ? (a = t.parentNode, n = a.name, t.href && n && "map" === a.nodeName.toLowerCase() ? (r = e("img[usemap=#" + n + "]")[0], !! r && s(r)) : !1) : (/input|select|textarea|button|object/.test(o) ? !t.disabled : "a" === o ? t.href || i : i) && s(t)
    }

    function s(t) {
        return e.expr.filters.visible(t) && !e(t).parents().addBack().filter(function () {
            return "hidden" === e.css(this, "visibility")
        }).length
    }
    var a = 0,
        n = /^ui-id-\d+$/;
    e.ui = e.ui || {}, e.extend(e.ui, {
        version: "1.10.3",
        keyCode: {
            BACKSPACE: 8,
            COMMA: 188,
            DELETE: 46,
            DOWN: 40,
            END: 35,
            ENTER: 13,
            ESCAPE: 27,
            HOME: 36,
            LEFT: 37,
            NUMPAD_ADD: 107,
            NUMPAD_DECIMAL: 110,
            NUMPAD_DIVIDE: 111,
            NUMPAD_ENTER: 108,
            NUMPAD_MULTIPLY: 106,
            NUMPAD_SUBTRACT: 109,
            PAGE_DOWN: 34,
            PAGE_UP: 33,
            PERIOD: 190,
            RIGHT: 39,
            SPACE: 32,
            TAB: 9,
            UP: 38
        }
    }), e.fn.extend({
        focus: function (t) {
            return function (i, s) {
                return "number" == typeof i ? this.each(function () {
                    var t = this;
                    setTimeout(function () {
                        e(t).focus(), s && s.call(t)
                    }, i)
                }) : t.apply(this, arguments)
            }
        }(e.fn.focus),
        scrollParent: function () {
            var t;
            return t = e.ui.ie && /(static|relative)/.test(this.css("position")) || /absolute/.test(this.css("position")) ? this.parents().filter(function () {
                return /(relative|absolute|fixed)/.test(e.css(this, "position")) && /(auto|scroll)/.test(e.css(this, "overflow") + e.css(this, "overflow-y") + e.css(this, "overflow-x"))
            }).eq(0) : this.parents().filter(function () {
                return /(auto|scroll)/.test(e.css(this, "overflow") + e.css(this, "overflow-y") + e.css(this, "overflow-x"))
            }).eq(0), /fixed/.test(this.css("position")) || !t.length ? e(document) : t
        },
        zIndex: function (i) {
            if (i !== t) return this.css("zIndex", i);
            if (this.length)
                for (var s, a, n = e(this[0]); n.length && n[0] !== document;) {
                    if (s = n.css("position"), ("absolute" === s || "relative" === s || "fixed" === s) && (a = parseInt(n.css("zIndex"), 10), !isNaN(a) && 0 !== a)) return a;
                    n = n.parent()
                }
            return 0
        },
        uniqueId: function () {
            return this.each(function () {
                this.id || (this.id = "ui-id-" + ++a)
            })
        },
        removeUniqueId: function () {
            return this.each(function () {
                n.test(this.id) && e(this).removeAttr("id")
            })
        }
    }), e.extend(e.expr[":"], {
        data: e.expr.createPseudo ? e.expr.createPseudo(function (t) {
            return function (i) {
                return !!e.data(i, t)
            }
        }) : function (t, i, s) {
            return !!e.data(t, s[3])
        },
        focusable: function (t) {
            return i(t, !isNaN(e.attr(t, "tabindex")))
        },
        tabbable: function (t) {
            var s = e.attr(t, "tabindex"),
                a = isNaN(s);
            return (a || s >= 0) && i(t, !a)
        }
    }), e("<a>").outerWidth(1).jquery || e.each(["Width", "Height"], function (i, s) {
        function a(t, i, s, a) {
            return e.each(n, function () {
                i -= parseFloat(e.css(t, "padding" + this)) || 0, s && (i -= parseFloat(e.css(t, "border" + this + "Width")) || 0), a && (i -= parseFloat(e.css(t, "margin" + this)) || 0)
            }), i
        }
        var n = "Width" === s ? ["Left", "Right"] : ["Top", "Bottom"],
            r = s.toLowerCase(),
            o = {
                innerWidth: e.fn.innerWidth,
                innerHeight: e.fn.innerHeight,
                outerWidth: e.fn.outerWidth,
                outerHeight: e.fn.outerHeight
            };
        e.fn["inner" + s] = function (i) {
            return i === t ? o["inner" + s].call(this) : this.each(function () {
                e(this).css(r, a(this, i) + "px")
            })
        }, e.fn["outer" + s] = function (t, i) {
            return "number" != typeof t ? o["outer" + s].call(this, t) : this.each(function () {
                e(this).css(r, a(this, t, !0, i) + "px")
            })
        }
    }), e.fn.addBack || (e.fn.addBack = function (e) {
        return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
    }), e("<a>").data("a-b", "a").removeData("a-b").data("a-b") && (e.fn.removeData = function (t) {
        return function (i) {
            return arguments.length ? t.call(this, e.camelCase(i)) : t.call(this)
        }
    }(e.fn.removeData)), e.ui.ie = !! /msie [\w.]+/.exec(navigator.userAgent.toLowerCase()), e.support.selectstart = "onselectstart" in document.createElement("div"), e.fn.extend({
        disableSelection: function () {
            return this.bind((e.support.selectstart ? "selectstart" : "mousedown") + ".ui-disableSelection", function (e) {
                e.preventDefault()
            })
        },
        enableSelection: function () {
            return this.unbind(".ui-disableSelection")
        }
    }), e.extend(e.ui, {
        plugin: {
            add: function (t, i, s) {
                var a, n = e.ui[t].prototype;
                for (a in s) n.plugins[a] = n.plugins[a] || [], n.plugins[a].push([i, s[a]])
            },
            call: function (e, t, i) {
                var s, a = e.plugins[t];
                if (a && e.element[0].parentNode && 11 !== e.element[0].parentNode.nodeType)
                    for (s = 0; a.length > s; s++) e.options[a[s][0]] && a[s][1].apply(e.element, i)
            }
        },
        hasScroll: function (t, i) {
            if ("hidden" === e(t).css("overflow")) return !1;
            var s = i && "left" === i ? "scrollLeft" : "scrollTop",
                a = !1;
            return t[s] > 0 ? !0 : (t[s] = 1, a = t[s] > 0, t[s] = 0, a)
        }
    })
})(jQuery);;
/*! jQuery UI - v1.10.3 - 2013-05-03
 * http://jqueryui.com
 * Copyright 2013 jQuery Foundation and other contributors; Licensed MIT */
(function (e, t) {
    var i = 0,
        s = Array.prototype.slice,
        n = e.cleanData;
    e.cleanData = function (t) {
        for (var i, s = 0; null != (i = t[s]); s++) try {
            e(i).triggerHandler("remove")
        } catch (a) {}
        n(t)
    }, e.widget = function (i, s, n) {
        var a, r, o, h, l = {}, u = i.split(".")[0];
        i = i.split(".")[1], a = u + "-" + i, n || (n = s, s = e.Widget), e.expr[":"][a.toLowerCase()] = function (t) {
            return !!e.data(t, a)
        }, e[u] = e[u] || {}, r = e[u][i], o = e[u][i] = function (e, i) {
            return this._createWidget ? (arguments.length && this._createWidget(e, i), t) : new o(e, i)
        }, e.extend(o, r, {
            version: n.version,
            _proto: e.extend({}, n),
            _childConstructors: []
        }), h = new s, h.options = e.widget.extend({}, h.options), e.each(n, function (i, n) {
            return e.isFunction(n) ? (l[i] = function () {
                var e = function () {
                    return s.prototype[i].apply(this, arguments)
                }, t = function (e) {
                        return s.prototype[i].apply(this, e)
                    };
                return function () {
                    var i, s = this._super,
                        a = this._superApply;
                    return this._super = e, this._superApply = t, i = n.apply(this, arguments), this._super = s, this._superApply = a, i
                }
            }(), t) : (l[i] = n, t)
        }), o.prototype = e.widget.extend(h, {
            widgetEventPrefix: r ? h.widgetEventPrefix : i
        }, l, {
            constructor: o,
            namespace: u,
            widgetName: i,
            widgetFullName: a
        }), r ? (e.each(r._childConstructors, function (t, i) {
            var s = i.prototype;
            e.widget(s.namespace + "." + s.widgetName, o, i._proto)
        }), delete r._childConstructors) : s._childConstructors.push(o), e.widget.bridge(i, o)
    }, e.widget.extend = function (i) {
        for (var n, a, r = s.call(arguments, 1), o = 0, h = r.length; h > o; o++)
            for (n in r[o]) a = r[o][n], r[o].hasOwnProperty(n) && a !== t && (i[n] = e.isPlainObject(a) ? e.isPlainObject(i[n]) ? e.widget.extend({}, i[n], a) : e.widget.extend({}, a) : a);
        return i
    }, e.widget.bridge = function (i, n) {
        var a = n.prototype.widgetFullName || i;
        e.fn[i] = function (r) {
            var o = "string" == typeof r,
                h = s.call(arguments, 1),
                l = this;
            return r = !o && h.length ? e.widget.extend.apply(null, [r].concat(h)) : r, o ? this.each(function () {
                var s, n = e.data(this, a);
                return n ? e.isFunction(n[r]) && "_" !== r.charAt(0) ? (s = n[r].apply(n, h), s !== n && s !== t ? (l = s && s.jquery ? l.pushStack(s.get()) : s, !1) : t) : e.error("no such method '" + r + "' for " + i + " widget instance") : e.error("cannot call methods on " + i + " prior to initialization; " + "attempted to call method '" + r + "'")
            }) : this.each(function () {
                var t = e.data(this, a);
                t ? t.option(r || {})._init() : e.data(this, a, new n(r, this))
            }), l
        }
    }, e.Widget = function () {}, e.Widget._childConstructors = [], e.Widget.prototype = {
        widgetName: "widget",
        widgetEventPrefix: "",
        defaultElement: "<div>",
        options: {
            disabled: !1,
            create: null
        },
        _createWidget: function (t, s) {
            s = e(s || this.defaultElement || this)[0], this.element = e(s), this.uuid = i++, this.eventNamespace = "." + this.widgetName + this.uuid, this.options = e.widget.extend({}, this.options, this._getCreateOptions(), t), this.bindings = e(), this.hoverable = e(), this.focusable = e(), s !== this && (e.data(s, this.widgetFullName, this), this._on(!0, this.element, {
                remove: function (e) {
                    e.target === s && this.destroy()
                }
            }), this.document = e(s.style ? s.ownerDocument : s.document || s), this.window = e(this.document[0].defaultView || this.document[0].parentWindow)), this._create(), this._trigger("create", null, this._getCreateEventData()), this._init()
        },
        _getCreateOptions: e.noop,
        _getCreateEventData: e.noop,
        _create: e.noop,
        _init: e.noop,
        destroy: function () {
            this._destroy(), this.element.unbind(this.eventNamespace).removeData(this.widgetName).removeData(this.widgetFullName).removeData(e.camelCase(this.widgetFullName)), this.widget().unbind(this.eventNamespace).removeAttr("aria-disabled").removeClass(this.widgetFullName + "-disabled " + "ui-state-disabled"), this.bindings.unbind(this.eventNamespace), this.hoverable.removeClass("ui-state-hover"), this.focusable.removeClass("ui-state-focus")
        },
        _destroy: e.noop,
        widget: function () {
            return this.element
        },
        option: function (i, s) {
            var n, a, r, o = i;
            if (0 === arguments.length) return e.widget.extend({}, this.options);
            if ("string" == typeof i)
                if (o = {}, n = i.split("."), i = n.shift(), n.length) {
                    for (a = o[i] = e.widget.extend({}, this.options[i]), r = 0; n.length - 1 > r; r++) a[n[r]] = a[n[r]] || {}, a = a[n[r]];
                    if (i = n.pop(), s === t) return a[i] === t ? null : a[i];
                    a[i] = s
                } else {
                    if (s === t) return this.options[i] === t ? null : this.options[i];
                    o[i] = s
                }
            return this._setOptions(o), this
        },
        _setOptions: function (e) {
            var t;
            for (t in e) this._setOption(t, e[t]);
            return this
        },
        _setOption: function (e, t) {
            return this.options[e] = t, "disabled" === e && (this.widget().toggleClass(this.widgetFullName + "-disabled ui-state-disabled", !! t).attr("aria-disabled", t), this.hoverable.removeClass("ui-state-hover"), this.focusable.removeClass("ui-state-focus")), this
        },
        enable: function () {
            return this._setOption("disabled", !1)
        },
        disable: function () {
            return this._setOption("disabled", !0)
        },
        _on: function (i, s, n) {
            var a, r = this;
            "boolean" != typeof i && (n = s, s = i, i = !1), n ? (s = a = e(s), this.bindings = this.bindings.add(s)) : (n = s, s = this.element, a = this.widget()), e.each(n, function (n, o) {
                function h() {
                    return i || r.options.disabled !== !0 && !e(this).hasClass("ui-state-disabled") ? ("string" == typeof o ? r[o] : o).apply(r, arguments) : t
                }
                "string" != typeof o && (h.guid = o.guid = o.guid || h.guid || e.guid++);
                var l = n.match(/^(\w+)\s*(.*)$/),
                    u = l[1] + r.eventNamespace,
                    c = l[2];
                c ? a.delegate(c, u, h) : s.bind(u, h)
            })
        },
        _off: function (e, t) {
            t = (t || "").split(" ").join(this.eventNamespace + " ") + this.eventNamespace, e.unbind(t).undelegate(t)
        },
        _delay: function (e, t) {
            function i() {
                return ("string" == typeof e ? s[e] : e).apply(s, arguments)
            }
            var s = this;
            return setTimeout(i, t || 0)
        },
        _hoverable: function (t) {
            this.hoverable = this.hoverable.add(t), this._on(t, {
                mouseenter: function (t) {
                    e(t.currentTarget).addClass("ui-state-hover")
                },
                mouseleave: function (t) {
                    e(t.currentTarget).removeClass("ui-state-hover")
                }
            })
        },
        _focusable: function (t) {
            this.focusable = this.focusable.add(t), this._on(t, {
                focusin: function (t) {
                    e(t.currentTarget).addClass("ui-state-focus")
                },
                focusout: function (t) {
                    e(t.currentTarget).removeClass("ui-state-focus")
                }
            })
        },
        _trigger: function (t, i, s) {
            var n, a, r = this.options[t];
            if (s = s || {}, i = e.Event(i), i.type = (t === this.widgetEventPrefix ? t : this.widgetEventPrefix + t).toLowerCase(), i.target = this.element[0], a = i.originalEvent)
                for (n in a) n in i || (i[n] = a[n]);
            return this.element.trigger(i, s), !(e.isFunction(r) && r.apply(this.element[0], [i].concat(s)) === !1 || i.isDefaultPrevented())
        }
    }, e.each({
        show: "fadeIn",
        hide: "fadeOut"
    }, function (t, i) {
        e.Widget.prototype["_" + t] = function (s, n, a) {
            "string" == typeof n && (n = {
                effect: n
            });
            var r, o = n ? n === !0 || "number" == typeof n ? i : n.effect || i : t;
            n = n || {}, "number" == typeof n && (n = {
                duration: n
            }), r = !e.isEmptyObject(n), n.complete = a, n.delay && s.delay(n.delay), r && e.effects && e.effects.effect[o] ? s[t](n) : o !== t && s[o] ? s[o](n.duration, n.easing, a) : s.queue(function (i) {
                e(this)[t](), a && a.call(s[0]), i()
            })
        }
    })
})(jQuery);;
/*! jQuery UI - v1.10.3 - 2013-05-03
 * http://jqueryui.com
 * Copyright 2013 jQuery Foundation and other contributors; Licensed MIT */
(function (e) {
    var t = !1;
    e(document).mouseup(function () {
        t = !1
    }), e.widget("ui.mouse", {
        version: "1.10.3",
        options: {
            cancel: "input,textarea,button,select,option",
            distance: 1,
            delay: 0
        },
        _mouseInit: function () {
            var t = this;
            this.element.bind("mousedown." + this.widgetName, function (e) {
                return t._mouseDown(e)
            }).bind("click." + this.widgetName, function (i) {
                return !0 === e.data(i.target, t.widgetName + ".preventClickEvent") ? (e.removeData(i.target, t.widgetName + ".preventClickEvent"), i.stopImmediatePropagation(), !1) : undefined
            }), this.started = !1
        },
        _mouseDestroy: function () {
            this.element.unbind("." + this.widgetName), this._mouseMoveDelegate && e(document).unbind("mousemove." + this.widgetName, this._mouseMoveDelegate).unbind("mouseup." + this.widgetName, this._mouseUpDelegate)
        },
        _mouseDown: function (i) {
            if (!t) {
                this._mouseStarted && this._mouseUp(i), this._mouseDownEvent = i;
                var s = this,
                    n = 1 === i.which,
                    a = "string" == typeof this.options.cancel && i.target.nodeName ? e(i.target).closest(this.options.cancel).length : !1;
                return n && !a && this._mouseCapture(i) ? (this.mouseDelayMet = !this.options.delay, this.mouseDelayMet || (this._mouseDelayTimer = setTimeout(function () {
                    s.mouseDelayMet = !0
                }, this.options.delay)), this._mouseDistanceMet(i) && this._mouseDelayMet(i) && (this._mouseStarted = this._mouseStart(i) !== !1, !this._mouseStarted) ? (i.preventDefault(), !0) : (!0 === e.data(i.target, this.widgetName + ".preventClickEvent") && e.removeData(i.target, this.widgetName + ".preventClickEvent"), this._mouseMoveDelegate = function (e) {
                    return s._mouseMove(e)
                }, this._mouseUpDelegate = function (e) {
                    return s._mouseUp(e)
                }, e(document).bind("mousemove." + this.widgetName, this._mouseMoveDelegate).bind("mouseup." + this.widgetName, this._mouseUpDelegate), i.preventDefault(), t = !0, !0)) : !0
            }
        },
        _mouseMove: function (t) {
            return e.ui.ie && (!document.documentMode || 9 > document.documentMode) && !t.button ? this._mouseUp(t) : this._mouseStarted ? (this._mouseDrag(t), t.preventDefault()) : (this._mouseDistanceMet(t) && this._mouseDelayMet(t) && (this._mouseStarted = this._mouseStart(this._mouseDownEvent, t) !== !1, this._mouseStarted ? this._mouseDrag(t) : this._mouseUp(t)), !this._mouseStarted)
        },
        _mouseUp: function (t) {
            return e(document).unbind("mousemove." + this.widgetName, this._mouseMoveDelegate).unbind("mouseup." + this.widgetName, this._mouseUpDelegate), this._mouseStarted && (this._mouseStarted = !1, t.target === this._mouseDownEvent.target && e.data(t.target, this.widgetName + ".preventClickEvent", !0), this._mouseStop(t)), !1
        },
        _mouseDistanceMet: function (e) {
            return Math.max(Math.abs(this._mouseDownEvent.pageX - e.pageX), Math.abs(this._mouseDownEvent.pageY - e.pageY)) >= this.options.distance
        },
        _mouseDelayMet: function () {
            return this.mouseDelayMet
        },
        _mouseStart: function () {},
        _mouseDrag: function () {},
        _mouseStop: function () {},
        _mouseCapture: function () {
            return !0
        }
    })
})(jQuery);;
/*! jQuery UI - v1.10.3 - 2013-05-03
 * http://jqueryui.com
 * Copyright 2013 jQuery Foundation and other contributors; Licensed MIT */
(function (t) {
    var e = 5;
    t.widget("ui.slider", t.ui.mouse, {
        version: "1.10.3",
        widgetEventPrefix: "slide",
        options: {
            animate: !1,
            distance: 0,
            max: 100,
            min: 0,
            orientation: "horizontal",
            range: !1,
            step: 1,
            value: 0,
            values: null,
            change: null,
            slide: null,
            start: null,
            stop: null
        },
        _create: function () {
            this._keySliding = !1, this._mouseSliding = !1, this._animateOff = !0, this._handleIndex = null, this._detectOrientation(), this._mouseInit(), this.element.addClass("ui-slider ui-slider-" + this.orientation + " ui-widget" + " ui-widget-content" + " ui-corner-all"), this._refresh(), this._setOption("disabled", this.options.disabled), this._animateOff = !1
        },
        _refresh: function () {
            this._createRange(), this._createHandles(), this._setupEvents(), this._refreshValue()
        },
        _createHandles: function () {
            var e, i, s = this.options,
                n = this.element.find(".ui-slider-handle").addClass("ui-state-default ui-corner-all"),
                a = "<a class='ui-slider-handle ui-state-default ui-corner-all' href='#'></a>",
                o = [];
            for (i = s.values && s.values.length || 1, n.length > i && (n.slice(i).remove(), n = n.slice(0, i)), e = n.length; i > e; e++) o.push(a);
            this.handles = n.add(t(o.join("")).appendTo(this.element)), this.handle = this.handles.eq(0), this.handles.each(function (e) {
                t(this).data("ui-slider-handle-index", e)
            })
        },
        _createRange: function () {
            var e = this.options,
                i = "";
            e.range ? (e.range === !0 && (e.values ? e.values.length && 2 !== e.values.length ? e.values = [e.values[0], e.values[0]] : t.isArray(e.values) && (e.values = e.values.slice(0)) : e.values = [this._valueMin(), this._valueMin()]), this.range && this.range.length ? this.range.removeClass("ui-slider-range-min ui-slider-range-max").css({
                left: "",
                bottom: ""
            }) : (this.range = t("<div></div>").appendTo(this.element), i = "ui-slider-range ui-widget-header ui-corner-all"), this.range.addClass(i + ("min" === e.range || "max" === e.range ? " ui-slider-range-" + e.range : ""))) : this.range = t([])
        },
        _setupEvents: function () {
            var t = this.handles.add(this.range).filter("a");
            this._off(t), this._on(t, this._handleEvents), this._hoverable(t), this._focusable(t)
        },
        _destroy: function () {
            this.handles.remove(), this.range.remove(), this.element.removeClass("ui-slider ui-slider-horizontal ui-slider-vertical ui-widget ui-widget-content ui-corner-all"), this._mouseDestroy()
        },
        _mouseCapture: function (e) {
            var i, s, n, a, o, r, h, l, u = this,
                c = this.options;
            return c.disabled ? !1 : (this.elementSize = {
                width: this.element.outerWidth(),
                height: this.element.outerHeight()
            }, this.elementOffset = this.element.offset(), i = {
                x: e.pageX,
                y: e.pageY
            }, s = this._normValueFromMouse(i), n = this._valueMax() - this._valueMin() + 1, this.handles.each(function (e) {
                var i = Math.abs(s - u.values(e));
                (n > i || n === i && (e === u._lastChangedValue || u.values(e) === c.min)) && (n = i, a = t(this), o = e)
            }), r = this._start(e, o), r === !1 ? !1 : (this._mouseSliding = !0, this._handleIndex = o, a.addClass("ui-state-active").focus(), h = a.offset(), l = !t(e.target).parents().addBack().is(".ui-slider-handle"), this._clickOffset = l ? {
                left: 0,
                top: 0
            } : {
                left: e.pageX - h.left - a.width() / 2,
                top: e.pageY - h.top - a.height() / 2 - (parseInt(a.css("borderTopWidth"), 10) || 0) - (parseInt(a.css("borderBottomWidth"), 10) || 0) + (parseInt(a.css("marginTop"), 10) || 0)
            }, this.handles.hasClass("ui-state-hover") || this._slide(e, o, s), this._animateOff = !0, !0))
        },
        _mouseStart: function () {
            return !0
        },
        _mouseDrag: function (t) {
            var e = {
                x: t.pageX,
                y: t.pageY
            }, i = this._normValueFromMouse(e);
            return this._slide(t, this._handleIndex, i), !1
        },
        _mouseStop: function (t) {
            return this.handles.removeClass("ui-state-active"), this._mouseSliding = !1, this._stop(t, this._handleIndex), this._change(t, this._handleIndex), this._handleIndex = null, this._clickOffset = null, this._animateOff = !1, !1
        },
        _detectOrientation: function () {
            this.orientation = "vertical" === this.options.orientation ? "vertical" : "horizontal"
        },
        _normValueFromMouse: function (t) {
            var e, i, s, n, a;
            return "horizontal" === this.orientation ? (e = this.elementSize.width, i = t.x - this.elementOffset.left - (this._clickOffset ? this._clickOffset.left : 0)) : (e = this.elementSize.height, i = t.y - this.elementOffset.top - (this._clickOffset ? this._clickOffset.top : 0)), s = i / e, s > 1 && (s = 1), 0 > s && (s = 0), "vertical" === this.orientation && (s = 1 - s), n = this._valueMax() - this._valueMin(), a = this._valueMin() + s * n, this._trimAlignValue(a)
        },
        _start: function (t, e) {
            var i = {
                handle: this.handles[e],
                value: this.value()
            };
            return this.options.values && this.options.values.length && (i.value = this.values(e), i.values = this.values()), this._trigger("start", t, i)
        },
        _slide: function (t, e, i) {
            var s, n, a;
            this.options.values && this.options.values.length ? (s = this.values(e ? 0 : 1), 2 === this.options.values.length && this.options.range === !0 && (0 === e && i > s || 1 === e && s > i) && (i = s), i !== this.values(e) && (n = this.values(), n[e] = i, a = this._trigger("slide", t, {
                handle: this.handles[e],
                value: i,
                values: n
            }), s = this.values(e ? 0 : 1), a !== !1 && this.values(e, i, !0))) : i !== this.value() && (a = this._trigger("slide", t, {
                handle: this.handles[e],
                value: i
            }), a !== !1 && this.value(i))
        },
        _stop: function (t, e) {
            var i = {
                handle: this.handles[e],
                value: this.value()
            };
            this.options.values && this.options.values.length && (i.value = this.values(e), i.values = this.values()), this._trigger("stop", t, i)
        },
        _change: function (t, e) {
            if (!this._keySliding && !this._mouseSliding) {
                var i = {
                    handle: this.handles[e],
                    value: this.value()
                };
                this.options.values && this.options.values.length && (i.value = this.values(e), i.values = this.values()), this._lastChangedValue = e, this._trigger("change", t, i)
            }
        },
        value: function (t) {
            return arguments.length ? (this.options.value = this._trimAlignValue(t), this._refreshValue(), this._change(null, 0), undefined) : this._value()
        },
        values: function (e, i) {
            var s, n, a;
            if (arguments.length > 1) return this.options.values[e] = this._trimAlignValue(i), this._refreshValue(), this._change(null, e), undefined;
            if (!arguments.length) return this._values();
            if (!t.isArray(arguments[0])) return this.options.values && this.options.values.length ? this._values(e) : this.value();
            for (s = this.options.values, n = arguments[0], a = 0; s.length > a; a += 1) s[a] = this._trimAlignValue(n[a]), this._change(null, a);
            this._refreshValue()
        },
        _setOption: function (e, i) {
            var s, n = 0;
            switch ("range" === e && this.options.range === !0 && ("min" === i ? (this.options.value = this._values(0), this.options.values = null) : "max" === i && (this.options.value = this._values(this.options.values.length - 1), this.options.values = null)), t.isArray(this.options.values) && (n = this.options.values.length), t.Widget.prototype._setOption.apply(this, arguments), e) {
            case "orientation":
                this._detectOrientation(), this.element.removeClass("ui-slider-horizontal ui-slider-vertical").addClass("ui-slider-" + this.orientation), this._refreshValue();
                break;
            case "value":
                this._animateOff = !0, this._refreshValue(), this._change(null, 0), this._animateOff = !1;
                break;
            case "values":
                for (this._animateOff = !0, this._refreshValue(), s = 0; n > s; s += 1) this._change(null, s);
                this._animateOff = !1;
                break;
            case "min":
            case "max":
                this._animateOff = !0, this._refreshValue(), this._animateOff = !1;
                break;
            case "range":
                this._animateOff = !0, this._refresh(), this._animateOff = !1
            }
        },
        _value: function () {
            var t = this.options.value;
            return t = this._trimAlignValue(t)
        },
        _values: function (t) {
            var e, i, s;
            if (arguments.length) return e = this.options.values[t], e = this._trimAlignValue(e);
            if (this.options.values && this.options.values.length) {
                for (i = this.options.values.slice(), s = 0; i.length > s; s += 1) i[s] = this._trimAlignValue(i[s]);
                return i
            }
            return []
        },
        _trimAlignValue: function (t) {
            if (this._valueMin() >= t) return this._valueMin();
            if (t >= this._valueMax()) return this._valueMax();
            var e = this.options.step > 0 ? this.options.step : 1,
                i = (t - this._valueMin()) % e,
                s = t - i;
            return 2 * Math.abs(i) >= e && (s += i > 0 ? e : -e), parseFloat(s.toFixed(5))
        },
        _valueMin: function () {
            return this.options.min
        },
        _valueMax: function () {
            return this.options.max
        },
        _refreshValue: function () {
            var e, i, s, n, a, o = this.options.range,
                r = this.options,
                h = this,
                l = this._animateOff ? !1 : r.animate,
                u = {};
            this.options.values && this.options.values.length ? this.handles.each(function (s) {
                i = 100 * ((h.values(s) - h._valueMin()) / (h._valueMax() - h._valueMin())), u["horizontal" === h.orientation ? "left" : "bottom"] = i + "%", t(this).stop(1, 1)[l ? "animate" : "css"](u, r.animate), h.options.range === !0 && ("horizontal" === h.orientation ? (0 === s && h.range.stop(1, 1)[l ? "animate" : "css"]({
                    left: i + "%"
                }, r.animate), 1 === s && h.range[l ? "animate" : "css"]({
                    width: i - e + "%"
                }, {
                    queue: !1,
                    duration: r.animate
                })) : (0 === s && h.range.stop(1, 1)[l ? "animate" : "css"]({
                    bottom: i + "%"
                }, r.animate), 1 === s && h.range[l ? "animate" : "css"]({
                    height: i - e + "%"
                }, {
                    queue: !1,
                    duration: r.animate
                }))), e = i
            }) : (s = this.value(), n = this._valueMin(), a = this._valueMax(), i = a !== n ? 100 * ((s - n) / (a - n)) : 0, u["horizontal" === this.orientation ? "left" : "bottom"] = i + "%", this.handle.stop(1, 1)[l ? "animate" : "css"](u, r.animate), "min" === o && "horizontal" === this.orientation && this.range.stop(1, 1)[l ? "animate" : "css"]({
                width: i + "%"
            }, r.animate), "max" === o && "horizontal" === this.orientation && this.range[l ? "animate" : "css"]({
                width: 100 - i + "%"
            }, {
                queue: !1,
                duration: r.animate
            }), "min" === o && "vertical" === this.orientation && this.range.stop(1, 1)[l ? "animate" : "css"]({
                height: i + "%"
            }, r.animate), "max" === o && "vertical" === this.orientation && this.range[l ? "animate" : "css"]({
                height: 100 - i + "%"
            }, {
                queue: !1,
                duration: r.animate
            }))
        },
        _handleEvents: {
            keydown: function (i) {
                var s, n, a, o, r = t(i.target).data("ui-slider-handle-index");
                switch (i.keyCode) {
                case t.ui.keyCode.HOME:
                case t.ui.keyCode.END:
                case t.ui.keyCode.PAGE_UP:
                case t.ui.keyCode.PAGE_DOWN:
                case t.ui.keyCode.UP:
                case t.ui.keyCode.RIGHT:
                case t.ui.keyCode.DOWN:
                case t.ui.keyCode.LEFT:
                    if (i.preventDefault(), !this._keySliding && (this._keySliding = !0, t(i.target).addClass("ui-state-active"), s = this._start(i, r), s === !1)) return
                }
                switch (o = this.options.step, n = a = this.options.values && this.options.values.length ? this.values(r) : this.value(), i.keyCode) {
                case t.ui.keyCode.HOME:
                    a = this._valueMin();
                    break;
                case t.ui.keyCode.END:
                    a = this._valueMax();
                    break;
                case t.ui.keyCode.PAGE_UP:
                    a = this._trimAlignValue(n + (this._valueMax() - this._valueMin()) / e);
                    break;
                case t.ui.keyCode.PAGE_DOWN:
                    a = this._trimAlignValue(n - (this._valueMax() - this._valueMin()) / e);
                    break;
                case t.ui.keyCode.UP:
                case t.ui.keyCode.RIGHT:
                    if (n === this._valueMax()) return;
                    a = this._trimAlignValue(n + o);
                    break;
                case t.ui.keyCode.DOWN:
                case t.ui.keyCode.LEFT:
                    if (n === this._valueMin()) return;
                    a = this._trimAlignValue(n - o)
                }
                this._slide(i, r, a)
            },
            click: function (t) {
                t.preventDefault()
            },
            keyup: function (e) {
                var i = t(e.target).data("ui-slider-handle-index");
                this._keySliding && (this._keySliding = !1, this._stop(e, i), this._change(e, i), t(e.target).removeClass("ui-state-active"))
            }
        }
    })
})(jQuery);;;
(function (d) {
    var k = d.scrollTo = function (a, i, e) {
        d(window).scrollTo(a, i, e)
    };
    k.defaults = {
        axis: 'xy',
        duration: parseFloat(d.fn.jquery) >= 1.3 ? 0 : 1
    };
    k.window = function (a) {
        return d(window)._scrollable()
    };
    d.fn._scrollable = function () {
        return this.map(function () {
            var a = this,
                i = !a.nodeName || d.inArray(a.nodeName.toLowerCase(), ['iframe', '#document', 'html', 'body']) != -1;
            if (!i) return a;
            var e = (a.contentWindow || a).document || a.ownerDocument || a;
            return d.browser.safari || e.compatMode == 'BackCompat' ? e.body : e.documentElement
        })
    };
    d.fn.scrollTo = function (n, j, b) {
        if (typeof j == 'object') {
            b = j;
            j = 0
        }
        if (typeof b == 'function') b = {
            onAfter: b
        };
        if (n == 'max') n = 9e9;
        b = d.extend({}, k.defaults, b);
        j = j || b.speed || b.duration;
        b.queue = b.queue && b.axis.length > 1;
        if (b.queue) j /= 2;
        b.offset = p(b.offset);
        b.over = p(b.over);
        return this._scrollable().each(function () {
            var q = this,
                r = d(q),
                f = n,
                s, g = {}, u = r.is('html,body');
            switch (typeof f) {
            case 'number':
            case 'string':
                if (/^([+-]=)?\d+(\.\d+)?(px|%)?$/.test(f)) {
                    f = p(f);
                    break
                }
                f = d(f, this);
            case 'object':
                if (f.is || f.style) s = (f = d(f)).offset()
            }
            d.each(b.axis.split(''), function (a, i) {
                var e = i == 'x' ? 'Left' : 'Top',
                    h = e.toLowerCase(),
                    c = 'scroll' + e,
                    l = q[c],
                    m = k.max(q, i);
                if (s) {
                    g[c] = s[h] + (u ? 0 : l - r.offset()[h]);
                    if (b.margin) {
                        g[c] -= parseInt(f.css('margin' + e)) || 0;
                        g[c] -= parseInt(f.css('border' + e + 'Width')) || 0
                    }
                    g[c] += b.offset[h] || 0;
                    if (b.over[h]) g[c] += f[i == 'x' ? 'width' : 'height']() * b.over[h]
                } else {
                    var o = f[h];
                    g[c] = o.slice && o.slice(-1) == '%' ? parseFloat(o) / 100 * m : o
                } if (/^\d+$/.test(g[c])) g[c] = g[c] <= 0 ? 0 : Math.min(g[c], m);
                if (!a && b.queue) {
                    if (l != g[c]) t(b.onAfterFirst);
                    delete g[c]
                }
            });
            t(b.onAfter);

            function t(a) {
                r.animate(g, j, b.easing, a && function () {
                    a.call(this, n, b)
                })
            }
        }).end()
    };
    k.max = function (a, i) {
        var e = i == 'x' ? 'Width' : 'Height',
            h = 'scroll' + e;
        if (!d(a).is('html,body')) return a[h] - d(a)[e.toLowerCase()]();
        var c = 'client' + e,
            l = a.ownerDocument.documentElement,
            m = a.ownerDocument.body;
        return Math.max(l[h], m[h]) - Math.min(l[c], m[c])
    };

    function p(a) {
        return typeof a == 'object' ? a : {
            top: a,
            left: a
        }
    }
})(jQuery);;;;
(function (a) {
    var b = a.serialScroll = function (c) {
        return a(window).serialScroll(c)
    };
    b.defaults = {
        duration: 1e3,
        axis: "x",
        event: "click",
        start: 0,
        step: 1,
        lock: !0,
        cycle: !0,
        constant: !0
    };
    a.fn.serialScroll = function (c) {
        return this.each(function () {
            var t = a.extend({}, b.defaults, c),
                s = t.event,
                i = t.step,
                r = t.lazy,
                e = t.target ? this : document,
                u = a(t.target || this, e),
                p = u[0],
                m = t.items,
                h = t.start,
                g = t.interval,
                k = t.navigation,
                l;
            if (!r) {
                m = d()
            }
            if (t.force) {
                f({}, h)
            }
            a(t.prev || [], e).bind(s, -i, q);
            a(t.next || [], e).bind(s, i, q);
            if (!p.ssbound) {
                u.bind("prev.serialScroll", -i, q).bind("next.serialScroll", i, q).bind("goto.serialScroll", f)
            }
            if (g) {
                u.bind("start.serialScroll", function (v) {
                    if (!g) {
                        o();
                        g = !0;
                        n()
                    }
                }).bind("stop.serialScroll", function () {
                    o();
                    g = !1
                })
            }
            u.bind("notify.serialScroll", function (x, w) {
                var v = j(w);
                if (v > -1) {
                    h = v
                }
            });
            p.ssbound = !0;
            if (t.jump) {
                (r ? u : d()).bind(s, function (v) {
                    f(v, j(v.target))
                })
            }
            if (k) {
                k = a(k, e).bind(s, function (v) {
                    v.data = Math.round(d().length / k.length) * k.index(this);
                    f(v, this)
                })
            }

            function q(v) {
                v.data += h;
                f(v, this)
            }

            function f(B, z) {
                if (!isNaN(z)) {
                    B.data = z;
                    z = p
                }
                var C = B.data,
                    v, D = B.type,
                    A = t.exclude ? d().slice(0, -t.exclude) : d(),
                    y = A.length,
                    w = A[C],
                    x = t.duration;
                if (D) {
                    B.preventDefault()
                }
                if (g) {
                    o();
                    l = setTimeout(n, t.interval)
                }
                if (!w) {
                    v = C < 0 ? 0 : y - 1;
                    if (h != v) {
                        C = v
                    } else {
                        if (!t.cycle) {
                            return
                        } else {
                            C = y - v - 1
                        }
                    }
                    w = A[C]
                }
                if (!w || t.lock && u.is(":animated") || D && t.onBefore && t.onBefore(B, w, u, d(), C) === !1) {
                    return
                }
                if (t.stop) {
                    u.queue("fx", []).stop()
                }
                if (t.constant) {
                    x = Math.abs(x / i * (h - C))
                }
                u.scrollTo(w, x, t).trigger("notify.serialScroll", [C])
            }

            function n() {
                u.trigger("next.serialScroll")
            }

            function o() {
                clearTimeout(l)
            }

            function d() {
                return a(m, p)
            }

            function j(w) {
                if (!isNaN(w)) {
                    return w
                }
                var x = d(),
                    v;
                while ((v = x.index(w)) == -1 && w != p) {
                    w = w.parentNode
                }
                return v
            }
        })
    }
})(jQuery);;
var cs_serialScrollNbImagesDisplayed;
var cs_serialScrollNbImages;
var cs_serialScrollActualImagesIndex;

function cs_serialScrollFixLock(event, targeted, scrolled, items, position) {
    serialScrollNbImages = $('#crossselling_list li:visible').length;
    serialScrollNbImagesDisplayed = 5;
    var leftArrow = position == 0 ? true : false;
    var rightArrow = position + serialScrollNbImagesDisplayed >= serialScrollNbImages ? true : false;
    $('a#crossselling_scroll_left').css('cursor', leftArrow ? 'default' : 'pointer').css('display', leftArrow ? 'none' : 'block').fadeTo(0, leftArrow ? 0 : 1);
    $('a#crossselling_scroll_right').css('cursor', rightArrow ? 'default' : 'pointer').fadeTo(0, rightArrow ? 0 : 1).css('display', rightArrow ? 'none' : 'block');
    return true;
}
$(document).ready(function () {
    if ($('#crossselling_list').length > 0) {
        cs_serialScrollNbImages = $('#crossselling_list li').length;
        cs_serialScrollNbImagesDisplayed = 5;
        cs_serialScrollActualImagesIndex = 0;
        $('#crossselling_list').serialScroll({
            items: 'li',
            prev: 'a#crossselling_scroll_left',
            next: 'a#crossselling_scroll_right',
            axis: 'x',
            offset: 0,
            stop: true,
            onBefore: cs_serialScrollFixLock,
            duration: 300,
            step: 1,
            lazy: true,
            lock: false,
            force: false,
            cycle: false
        });
        $('#crossselling_list').trigger('goto', [cs_middle - 3]);
    }
});;

function WishlistCart(id, action, id_product, id_product_attribute, quantity) {
    $.ajax({
        type: 'GET',
        url: baseDir + 'modules/blockwishlist/cart.php',
        async: true,
        cache: false,
        data: 'action=' + action + '&id_product=' + id_product + '&quantity=' + quantity + '&token=' + static_token + '&id_product_attribute=' + id_product_attribute,
        success: function (data) {
            if (action == 'add') {
                var $element = $('#bigpic');
                if (!$element.length)
                    var $element = $('#wishlist_button');
                var $picture = $element.clone();
                var pictureOffsetOriginal = $element.offset();
                $picture.css({
                    'position': 'absolute',
                    'top': pictureOffsetOriginal.top,
                    'left': pictureOffsetOriginal.left
                });
                var pictureOffset = $picture.offset();
                var wishlistBlockOffset = $('#wishlist_block').offset();
                $picture.appendTo('body');
                $picture.css({
                    'position': 'absolute',
                    'top': $picture.css('top'),
                    'left': $picture.css('left')
                }).animate({
                    'width': $element.attr('width') * 0.66,
                    'height': $element.attr('height') * 0.66,
                    'opacity': 0.2,
                    'top': wishlistBlockOffset.top + 30,
                    'left': wishlistBlockOffset.left + 15
                }, 1000).fadeOut(800);
            }
            if ($('#' + id).length != 0) {
                $('#' + id).slideUp('normal');
                document.getElementById(id).innerHTML = data;
                $('#' + id).slideDown('normal');
            }
        }
    });
}

function WishlistChangeDefault(id, id_wishlist) {
    $.ajax({
        type: 'GET',
        url: baseDir + 'modules/blockwishlist/cart.php',
        async: true,
        data: 'id_wishlist=' + id_wishlist + '&token=' + static_token,
        cache: false,
        success: function (data) {
            $('#' + id).slideUp('normal');
            document.getElementById(id).innerHTML = data;
            $('#' + id).slideDown('normal');
        }
    });
}

function WishlistBuyProduct(token, id_product, id_product_attribute, id_quantity, button, ajax) {
    if (ajax)
        ajaxCart.add(id_product, id_product_attribute, false, button, 1, [token, id_quantity]);
    else {
        $('#' + id_quantity).val(0);
        WishlistAddProductCart(token, id_product, id_product_attribute, id_quantity)
        document.forms['addtocart' + '_' + id_product + '_' + id_product_attribute].method = 'POST';
        document.forms['addtocart' + '_' + id_product + '_' + id_product_attribute].action = baseUri + '?controller=cart';
        document.forms['addtocart' + '_' + id_product + '_' + id_product_attribute].elements['token'].value = static_token;
        document.forms['addtocart' + '_' + id_product + '_' + id_product_attribute].submit();
    }
    return (true);
}

function WishlistAddProductCart(token, id_product, id_product_attribute, id_quantity) {
    if ($('#' + id_quantity).val() <= 0)
        return (false);
    $.ajax({
        type: 'GET',
        url: baseDir + 'modules/blockwishlist/buywishlistproduct.php',
        data: 'token=' + token + '&static_token=' + static_token + '&id_product=' + id_product + '&id_product_attribute=' + id_product_attribute,
        async: true,
        cache: false,
        success: function (data) {
            if (data)
                alert(data);
            else {
                $('#' + id_quantity).val($('#' + id_quantity).val() - 1);
            }
        }
    });
    return (true);
}

function WishlistManage(id, id_wishlist) {
    $.ajax({
        type: 'GET',
        async: true,
        url: baseDir + 'modules/blockwishlist/managewishlist.php',
        data: 'id_wishlist=' + id_wishlist + '&refresh=' + false,
        cache: false,
        success: function (data) {
            $('#' + id).hide();
            document.getElementById(id).innerHTML = data;
            $('#' + id).fadeIn('slow');
        }
    });
}

function WishlistProductManage(id, action, id_wishlist, id_product, id_product_attribute, quantity, priority) {
    $.ajax({
        type: 'GET',
        async: true,
        url: baseDir + 'modules/blockwishlist/managewishlist.php',
        data: 'action=' + action + '&id_wishlist=' + id_wishlist + '&id_product=' + id_product + '&id_product_attribute=' + id_product_attribute + '&quantity=' + quantity + '&priority=' + priority + '&refresh=' + true,
        cache: false,
        success: function (data) {
            if (action == 'delete')
                $('#wlp_' + id_product + '_' + id_product_attribute).fadeOut('fast');
            else if (action == 'update') {
                $('#wlp_' + id_product + '_' + id_product_attribute).fadeOut('fast');
                $('#wlp_' + id_product + '_' + id_product_attribute).fadeIn('fast');
            }
        }
    });
}

function WishlistDelete(id, id_wishlist, msg) {
    var res = confirm(msg);
    if (res == false)
        return (false);
    $.ajax({
        type: 'GET',
        async: true,
        url: baseDir + 'modules/blockwishlist/mywishlist.php',
        cache: false,
        data: 'deleted&id_wishlist=' + id_wishlist,
        success: function (data) {
            $('#' + id).fadeOut('slow');
        }
    });
}

function WishlistVisibility(bought_class, id_button) {
    if ($('#hide' + id_button).css('display') == 'none') {
        $('.' + bought_class).slideDown('fast');
        $('#show' + id_button).hide();
        $('#hide' + id_button).css('display', 'block');
    } else {
        $('.' + bought_class).slideUp('fast');
        $('#hide' + id_button).hide();
        $('#show' + id_button).css('display', 'block');
    }
}

function WishlistSend(id, id_wishlist, id_email) {
    $.post(baseDir + 'modules/blockwishlist/sendwishlist.php', {
        token: static_token,
        id_wishlist: id_wishlist,
        email1: $('#' + id_email + '1').val(),
        email2: $('#' + id_email + '2').val(),
        email3: $('#' + id_email + '3').val(),
        email4: $('#' + id_email + '4').val(),
        email5: $('#' + id_email + '5').val(),
        email6: $('#' + id_email + '6').val(),
        email7: $('#' + id_email + '7').val(),
        email8: $('#' + id_email + '8').val(),
        email9: $('#' + id_email + '9').val(),
        email10: $('#' + id_email + '10').val()
    }, function (data) {
        if (data)
            alert(data);
        else
            WishlistVisibility(id, 'hideSendWishlist');
    });
};
(function (e) {
    var t = function (t, n) {
        var r = e.extend({}, e.fn.nivoSlider.defaults, n);
        var i = {
            currentSlide: 0,
            currentImage: "",
            totalSlides: 0,
            running: false,
            paused: false,
            stop: false,
            controlNavEl: false
        };
        var s = e(t);
        s.data("nivo:vars", i).addClass("nivoSlider");
        var o = s.children();
        o.each(function () {
            var t = e(this);
            var n = "";
            if (!t.is("img")) {
                if (t.is("a")) {
                    t.addClass("nivo-imageLink");
                    n = t
                }
                t = t.find("img:first")
            }
            var r = r === 0 ? t.attr("width") : t.width(),
                s = s === 0 ? t.attr("height") : t.height();
            if (n !== "") {
                n.css("display", "none")
            }
            t.css("display", "none");
            i.totalSlides++
        });
        if (r.randomStart) {
            r.startSlide = Math.floor(Math.random() * i.totalSlides)
        }
        if (r.startSlide > 0) {
            if (r.startSlide >= i.totalSlides) {
                r.startSlide = i.totalSlides - 1
            }
            i.currentSlide = r.startSlide
        }
        if (e(o[i.currentSlide]).is("img")) {
            i.currentImage = e(o[i.currentSlide])
        } else {
            i.currentImage = e(o[i.currentSlide]).find("img:first")
        } if (e(o[i.currentSlide]).is("a")) {
            e(o[i.currentSlide]).css("display", "block")
        }
        var u = e("<img/>").addClass("nivo-main-image");
        u.attr("src", i.currentImage.attr("src")).show();
        s.append(u);
        e(window).resize(function () {
            s.children("img").width(s.width());
            u.attr("src", i.currentImage.attr("src"));
            u.stop().height("auto");
            e(".nivo-slice").remove();
            e(".nivo-box").remove()
        });
        s.append(e('<div class="nivo-caption"></div>'));
        var a = function (t) {
            var n = e(".nivo-caption", s);
            if (i.currentImage.attr("title") != "" && i.currentImage.attr("title") != undefined) {
                var r = i.currentImage.attr("title");
                if (r.substr(0, 1) == "#") r = e(r).html();
                if (n.css("display") == "block") {
                    setTimeout(function () {
                        n.html(r)
                    }, t.animSpeed)
                } else {
                    n.html(r);
                    n.stop().fadeIn(t.animSpeed)
                }
            } else {
                n.stop().fadeOut(t.animSpeed)
            }
        };
        a(r);
        var f = 0;
        if (!r.manualAdvance && o.length > 1) {
            f = setInterval(function () {
                d(s, o, r, false)
            }, r.pauseTime)
        }
        if (r.directionNav) {
            s.append('<div class="nivo-directionNav"><a class="nivo-prevNav">' + r.prevText + '</a><a class="nivo-nextNav">' + r.nextText + "</a></div>");
            e(s).on("click", "a.nivo-prevNav", function () {
                if (i.running) {
                    return false
                }
                clearInterval(f);
                f = "";
                i.currentSlide -= 2;
                d(s, o, r, "prev")
            });
            e(s).on("click", "a.nivo-nextNav", function () {
                if (i.running) {
                    return false
                }
                clearInterval(f);
                f = "";
                d(s, o, r, "next")
            })
        }
        if (r.controlNav) {
            i.controlNavEl = e('<div class="nivo-controlNav"></div>');
            s.after(i.controlNavEl);
            for (var l = 0; l < o.length; l++) {
                if (r.controlNavThumbs) {
                    i.controlNavEl.addClass("nivo-thumbs-enabled");
                    var c = o.eq(l);
                    if (!c.is("img")) {
                        c = c.find("img:first")
                    }
                    if (c.attr("data-thumb")) i.controlNavEl.append('<a class="nivo-control" rel="' + l + '"><img src="' + c.attr("data-thumb") + '" alt="" /></a>')
                } else {
                    i.controlNavEl.append('<a class="nivo-control" rel="' + l + '">' + (l + 1) + "</a>")
                }
            }
            e("a:eq(" + i.currentSlide + ")", i.controlNavEl).addClass("active");
            e("a", i.controlNavEl).bind("click", function () {
                if (i.running) return false;
                if (e(this).hasClass("active")) return false;
                clearInterval(f);
                f = "";
                u.attr("src", i.currentImage.attr("src"));
                i.currentSlide = e(this).attr("rel") - 1;
                d(s, o, r, "control")
            })
        }
        if (r.pauseOnHover) {
            s.hover(function () {
                i.paused = true;
                clearInterval(f);
                f = ""
            }, function () {
                i.paused = false;
                if (f === "" && !r.manualAdvance) {
                    f = setInterval(function () {
                        d(s, o, r, false)
                    }, r.pauseTime)
                }
            })
        }
        s.bind("nivo:animFinished", function () {
            u.attr("src", i.currentImage.attr("src"));
            i.running = false;
            e(o).each(function () {
                if (e(this).is("a")) {
                    e(this).css("display", "none")
                }
            });
            if (e(o[i.currentSlide]).is("a")) {
                e(o[i.currentSlide]).css("display", "block")
            }
            if (f === "" && !i.paused && !r.manualAdvance) {
                f = setInterval(function () {
                    d(s, o, r, false)
                }, r.pauseTime)
            }
            r.afterChange.call(this)
        });
        var h = function (t, n, r) {
            if (e(r.currentImage).parent().is("a")) e(r.currentImage).parent().css("display", "block");
            e('img[src="' + r.currentImage.attr("src") + '"]', t).not(".nivo-main-image,.nivo-control img").width(t.width()).css("visibility", "hidden").show();
            var i = e('img[src="' + r.currentImage.attr("src") + '"]', t).not(".nivo-main-image,.nivo-control img").parent().is("a") ? e('img[src="' + r.currentImage.attr("src") + '"]', t).not(".nivo-main-image,.nivo-control img").parent().height() : e('img[src="' + r.currentImage.attr("src") + '"]', t).not(".nivo-main-image,.nivo-control img").height();
            for (var s = 0; s < n.slices; s++) {
                var o = Math.round(t.width() / n.slices);
                if (s === n.slices - 1) {
                    t.append(e('<div class="nivo-slice" name="' + s + '"><img src="' + r.currentImage.attr("src") + '" style="position:absolute; width:' + t.width() + "px; height:auto; display:block !important; top:0; left:-" + (o + s * o - o) + 'px;" /></div>').css({
                        left: o * s + "px",
                        width: t.width() - o * s + "px",
                        height: i + "px",
                        opacity: "0",
                        overflow: "hidden"
                    }))
                } else {
                    t.append(e('<div class="nivo-slice" name="' + s + '"><img src="' + r.currentImage.attr("src") + '" style="position:absolute; width:' + t.width() + "px; height:auto; display:block !important; top:0; left:-" + (o + s * o - o) + 'px;" /></div>').css({
                        left: o * s + "px",
                        width: o + "px",
                        height: i + "px",
                        opacity: "0",
                        overflow: "hidden"
                    }))
                }
            }
            e(".nivo-slice", t).height(i);
            u.stop().animate({
                height: e(r.currentImage).height()
            }, n.animSpeed)
        };
        var p = function (t, n, r) {
            if (e(r.currentImage).parent().is("a")) e(r.currentImage).parent().css("display", "block");
            e('img[src="' + r.currentImage.attr("src") + '"]', t).not(".nivo-main-image,.nivo-control img").width(t.width()).css("visibility", "hidden").show();
            var i = Math.round(t.width() / n.boxCols),
                s = Math.round(e('img[src="' + r.currentImage.attr("src") + '"]', t).not(".nivo-main-image,.nivo-control img").height() / n.boxRows);
            for (var o = 0; o < n.boxRows; o++) {
                for (var a = 0; a < n.boxCols; a++) {
                    if (a === n.boxCols - 1) {
                        t.append(e('<div class="nivo-box" name="' + a + '" rel="' + o + '"><img src="' + r.currentImage.attr("src") + '" style="position:absolute; width:' + t.width() + "px; height:auto; display:block; top:-" + s * o + "px; left:-" + i * a + 'px;" /></div>').css({
                            opacity: 0,
                            left: i * a + "px",
                            top: s * o + "px",
                            width: t.width() - i * a + "px"
                        }));
                        e('.nivo-box[name="' + a + '"]', t).height(e('.nivo-box[name="' + a + '"] img', t).height() + "px")
                    } else {
                        t.append(e('<div class="nivo-box" name="' + a + '" rel="' + o + '"><img src="' + r.currentImage.attr("src") + '" style="position:absolute; width:' + t.width() + "px; height:auto; display:block; top:-" + s * o + "px; left:-" + i * a + 'px;" /></div>').css({
                            opacity: 0,
                            left: i * a + "px",
                            top: s * o + "px",
                            width: i + "px"
                        }));
                        e('.nivo-box[name="' + a + '"]', t).height(e('.nivo-box[name="' + a + '"] img', t).height() + "px")
                    }
                }
            }
            u.stop().animate({
                height: e(r.currentImage).height()
            }, n.animSpeed)
        };
        var d = function (t, n, r, i) {
            var s = t.data("nivo:vars");
            if (s && s.currentSlide === s.totalSlides - 1) {
                r.lastSlide.call(this)
            }
            if ((!s || s.stop) && !i) {
                return false
            }
            r.beforeChange.call(this);
            if (!i) {
                u.attr("src", s.currentImage.attr("src"))
            } else {
                if (i === "prev") {
                    u.attr("src", s.currentImage.attr("src"))
                }
                if (i === "next") {
                    u.attr("src", s.currentImage.attr("src"))
                }
            }
            s.currentSlide++;
            if (s.currentSlide === s.totalSlides) {
                s.currentSlide = 0;
                r.slideshowEnd.call(this)
            }
            if (s.currentSlide < 0) {
                s.currentSlide = s.totalSlides - 1
            }
            if (e(n[s.currentSlide]).is("img")) {
                s.currentImage = e(n[s.currentSlide])
            } else {
                s.currentImage = e(n[s.currentSlide]).find("img:first")
            } if (r.controlNav) {
                e("a", s.controlNavEl).removeClass("active");
                e("a:eq(" + s.currentSlide + ")", s.controlNavEl).addClass("active")
            }
            a(r);
            e(".nivo-slice", t).remove();
            e(".nivo-box", t).remove();
            var o = r.effect,
                f = "";
            if (r.effect === "random") {
                f = new Array("sliceDownRight", "sliceDownLeft", "sliceUpRight", "sliceUpLeft", "sliceUpDown", "sliceUpDownLeft", "fold", "fade", "boxRandom", "boxRain", "boxRainReverse", "boxRainGrow", "boxRainGrowReverse");
                o = f[Math.floor(Math.random() * (f.length + 1))];
                if (o === undefined) {
                    o = "fade"
                }
            }
            if (r.effect.indexOf(",") !== -1) {
                f = r.effect.split(",");
                o = f[Math.floor(Math.random() * f.length)];
                if (o === undefined) {
                    o = "fade"
                }
            }
            if (s.currentImage.attr("data-transition")) {
                o = s.currentImage.attr("data-transition")
            }
            s.running = true;
            var l = 0,
                c = 0,
                d = "",
                m = "",
                g = "",
                y = "";
            if (o === "sliceDown" || o === "sliceDownRight" || o === "sliceDownLeft") {
                h(t, r, s);
                l = 0;
                c = 0;
                d = e(".nivo-slice", t);
                if (o === "sliceDownLeft") {
                    d = e(".nivo-slice", t)._reverse()
                }
                d.each(function () {
                    var n = e(this);
                    n.css({
                        top: "0px"
                    });
                    if (c === r.slices - 1) {
                        setTimeout(function () {
                            n.animate({
                                opacity: "1.0"
                            }, r.animSpeed, "", function () {
                                t.trigger("nivo:animFinished")
                            })
                        }, 100 + l)
                    } else {
                        setTimeout(function () {
                            n.animate({
                                opacity: "1.0"
                            }, r.animSpeed)
                        }, 100 + l)
                    }
                    l += 50;
                    c++
                })
            } else if (o === "sliceUp" || o === "sliceUpRight" || o === "sliceUpLeft") {
                h(t, r, s);
                l = 0;
                c = 0;
                d = e(".nivo-slice", t);
                if (o === "sliceUpLeft") {
                    d = e(".nivo-slice", t)._reverse()
                }
                d.each(function () {
                    var n = e(this);
                    n.css({
                        bottom: "0px"
                    });
                    if (c === r.slices - 1) {
                        setTimeout(function () {
                            n.animate({
                                opacity: "1.0"
                            }, r.animSpeed, "", function () {
                                t.trigger("nivo:animFinished")
                            })
                        }, 100 + l)
                    } else {
                        setTimeout(function () {
                            n.animate({
                                opacity: "1.0"
                            }, r.animSpeed)
                        }, 100 + l)
                    }
                    l += 50;
                    c++
                })
            } else if (o === "sliceUpDown" || o === "sliceUpDownRight" || o === "sliceUpDownLeft") {
                h(t, r, s);
                l = 0;
                c = 0;
                var b = 0;
                d = e(".nivo-slice", t);
                if (o === "sliceUpDownLeft") {
                    d = e(".nivo-slice", t)._reverse()
                }
                d.each(function () {
                    var n = e(this);
                    if (c === 0) {
                        n.css("top", "0px");
                        c++
                    } else {
                        n.css("bottom", "0px");
                        c = 0
                    } if (b === r.slices - 1) {
                        setTimeout(function () {
                            n.animate({
                                opacity: "1.0"
                            }, r.animSpeed, "", function () {
                                t.trigger("nivo:animFinished")
                            })
                        }, 100 + l)
                    } else {
                        setTimeout(function () {
                            n.animate({
                                opacity: "1.0"
                            }, r.animSpeed)
                        }, 100 + l)
                    }
                    l += 50;
                    b++
                })
            } else if (o === "fold") {
                h(t, r, s);
                l = 0;
                c = 0;
                e(".nivo-slice", t).each(function () {
                    var n = e(this);
                    var i = n.width();
                    n.css({
                        top: "0px",
                        width: "0px"
                    });
                    if (c === r.slices - 1) {
                        setTimeout(function () {
                            n.animate({
                                width: i,
                                opacity: "1.0"
                            }, r.animSpeed, "", function () {
                                t.trigger("nivo:animFinished")
                            })
                        }, 100 + l)
                    } else {
                        setTimeout(function () {
                            n.animate({
                                width: i,
                                opacity: "1.0"
                            }, r.animSpeed)
                        }, 100 + l)
                    }
                    l += 50;
                    c++
                })
            } else if (o === "fade") {
                h(t, r, s);
                m = e(".nivo-slice:first", t);
                m.css({
                    width: t.width() + "px"
                });
                m.animate({
                    opacity: "1.0"
                }, r.animSpeed * 2, "", function () {
                    t.trigger("nivo:animFinished")
                })
            } else if (o === "slideInRight") {
                h(t, r, s);
                m = e(".nivo-slice:first", t);
                m.css({
                    width: "0px",
                    opacity: "1"
                });
                m.animate({
                    width: t.width() + "px"
                }, r.animSpeed * 2, "", function () {
                    t.trigger("nivo:animFinished")
                })
            } else if (o === "slideInLeft") {
                h(t, r, s);
                m = e(".nivo-slice:first", t);
                m.css({
                    width: "0px",
                    opacity: "1",
                    left: "",
                    right: "0px"
                });
                m.animate({
                    width: t.width() + "px"
                }, r.animSpeed * 2, "", function () {
                    m.css({
                        left: "0px",
                        right: ""
                    });
                    t.trigger("nivo:animFinished")
                })
            } else if (o === "boxRandom") {
                p(t, r, s);
                g = r.boxCols * r.boxRows;
                c = 0;
                l = 0;
                y = v(e(".nivo-box", t));
                y.each(function () {
                    var n = e(this);
                    if (c === g - 1) {
                        setTimeout(function () {
                            n.animate({
                                opacity: "1"
                            }, r.animSpeed, "", function () {
                                t.trigger("nivo:animFinished")
                            })
                        }, 100 + l)
                    } else {
                        setTimeout(function () {
                            n.animate({
                                opacity: "1"
                            }, r.animSpeed)
                        }, 100 + l)
                    }
                    l += 20;
                    c++
                })
            } else if (o === "boxRain" || o === "boxRainReverse" || o === "boxRainGrow" || o === "boxRainGrowReverse") {
                p(t, r, s);
                g = r.boxCols * r.boxRows;
                c = 0;
                l = 0;
                var w = 0;
                var E = 0;
                var S = [];
                S[w] = [];
                y = e(".nivo-box", t);
                if (o === "boxRainReverse" || o === "boxRainGrowReverse") {
                    y = e(".nivo-box", t)._reverse()
                }
                y.each(function () {
                    S[w][E] = e(this);
                    E++;
                    if (E === r.boxCols) {
                        w++;
                        E = 0;
                        S[w] = []
                    }
                });
                for (var x = 0; x < r.boxCols * 2; x++) {
                    var T = x;
                    for (var N = 0; N < r.boxRows; N++) {
                        if (T >= 0 && T < r.boxCols) {
                            (function (n, i, s, u, a) {
                                var f = e(S[n][i]);
                                var l = f.width();
                                var c = f.height();
                                if (o === "boxRainGrow" || o === "boxRainGrowReverse") {
                                    f.width(0).height(0)
                                }
                                if (u === a - 1) {
                                    setTimeout(function () {
                                        f.animate({
                                            opacity: "1",
                                            width: l,
                                            height: c
                                        }, r.animSpeed / 1.3, "", function () {
                                            t.trigger("nivo:animFinished")
                                        })
                                    }, 100 + s)
                                } else {
                                    setTimeout(function () {
                                        f.animate({
                                            opacity: "1",
                                            width: l,
                                            height: c
                                        }, r.animSpeed / 1.3)
                                    }, 100 + s)
                                }
                            })(N, T, l, c, g);
                            c++
                        }
                        T--
                    }
                    l += 100
                }
            }
        };
        var v = function (e) {
            for (var t, n, r = e.length; r; t = parseInt(Math.random() * r, 10), n = e[--r], e[r] = e[t], e[t] = n);
            return e
        };
        var m = function (e) {
            if (this.console && typeof console.log !== "undefined") {
                console.log(e)
            }
        };
        this.stop = function () {
            if (!e(t).data("nivo:vars").stop) {
                e(t).data("nivo:vars").stop = true;
                m("Stop Slider")
            }
        };
        this.start = function () {
            if (e(t).data("nivo:vars").stop) {
                e(t).data("nivo:vars").stop = false;
                m("Start Slider")
            }
        };
        r.afterLoad.call(this);
        return this
    };
    e.fn.nivoSlider = function (n) {
        return this.each(function (r, i) {
            var s = e(this);
            if (s.data("nivoslider")) {
                return s.data("nivoslider")
            }
            var o = new t(this, n);
            s.data("nivoslider", o)
        })
    };
    e.fn.nivoSlider.defaults = {
        effect: "random",
        slices: 15,
        boxCols: 8,
        boxRows: 4,
        animSpeed: 500,
        pauseTime: 3e3,
        startSlide: 0,
        directionNav: true,
        controlNav: true,
        controlNavThumbs: false,
        pauseOnHover: true,
        manualAdvance: false,
        prevText: "Prev",
        nextText: "Next",
        randomStart: false,
        beforeChange: function () {},
        afterChange: function () {},
        slideshowEnd: function () {},
        lastSlide: function () {},
        afterLoad: function () {}
    };
    e.fn._reverse = [].reverse
})(jQuery);;
var responsiveflagMenu = false;

function menuChange(status) {
    if (status == 'enable') {
        $('#menu-wrap').removeClass('desktop').addClass('mobile').find('#menu-trigger').show();
        $(' #menu-custom').removeAttr('style');
        $('#menu-trigger i').removeClass('icon-minus-sign-alt').addClass('icon-plus-sign-alt');
        $('.mobile #menu-trigger').on('click touchstart', function () {
            var catUl = $(this).next('ul#menu-custom');
            var anotherFirst = $('.header-button').find('ul');
            var anotherSecond = $('#header').find('#cart_block');
            if (anotherFirst.is(':visible')) {
                anotherFirst.slideUp(), $('.header-button').find('.icon_wrapp').removeClass('active')
            }
            if (anotherSecond.is(':visible')) {
                anotherSecond.slideUp();
                $('#header_user').removeClass('close-cart')
            }
            if (catUl.is(':hidden')) {
                catUl.slideDown(), $(this).find('i').removeClass('icon-plus-sign-alt').addClass('icon-minus-sign-alt')
            } else {
                catUl.slideUp(), $(this).find('i').removeClass('icon-minus-sign-alt').addClass('icon-plus-sign-alt');
            }
            return false
        })
        $('#menu-wrap.mobile #menu-custom').on('click touchstart', function (e) {
            e.stopPropagation();
        });
        $('.main-mobile-menu ul ul').addClass('menu-mobile-2');
        $('#menu-custom ul ').addClass('menu-mobile-2');
        $('#menu-custom  li').has('.menu-mobile-2').prepend('<i class="open-mobile-2 icon-plus"></i>');
        $("#menu-custom   .open-mobile-2").on('click touchstart', function () {
            var catSubUl = $(this).next().next('.menu-mobile-2');
            if (catSubUl.is(':hidden')) {
                catSubUl.slideDown(), $(this).removeClass('icon-plus').addClass('icon-minus')
            } else {
                catSubUl.slideUp(), $(this).removeClass('icon-minus').addClass('icon-plus');
            }
            return false
        })
        $(document).on('click  touchstart', function () {
            $('.mobile #menu-trigger').find('i').removeClass('icon-minus-sign-alt').addClass('icon-plus-sign-alt'), $('.mobile #menu-trigger').next('ul#menu-custom').slideUp();
        })
        return false;
    } else {
        $('#menu-wrap').removeClass('mobile').addClass('desktop'), $('#menu-custom  li').has('.menu-mobile-2').children('i').remove(), $('#menu-custom  li .menu-mobile-2, #menu-custom').removeAttr('style');
        $("#menu-custom   .open-mobile-2").off();
        $('#menu-wrap').find('#menu-trigger').off().hide();
    }
}

function menuChangeDo() {
    container_width = $('body').find('.container').width();
    if (container_width <= 970 && responsiveflagMenu == false) {
        menuChange('enable');
        responsiveflagMenu = true;
    } else if (container_width > 970) {
        menuChange('disable');
        responsiveflagMenu = false;
    }
}
$(document).ready(menuChangeDo);
$(window).resize(menuChangeDo);;