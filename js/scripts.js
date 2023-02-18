! function(t) {
    var e = {};

    function i(n) {
        if (e[n]) return e[n].exports;
        var r = e[n] = {
            i: n,
            l: !1,
            exports: {}
        };
        return t[n].call(r.exports, r, r.exports, i), r.l = !0, r.exports
    }
    i.m = t, i.c = e, i.d = function(t, e, n) {
        i.o(t, e) || Object.defineProperty(t, e, {
            enumerable: !0,
            get: n
        })
    }, i.r = function(t) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(t, "__esModule", {
            value: !0
        })
    }, i.t = function(t, e) {
        if (1 & e && (t = i(t)), 8 & e) return t;
        if (4 & e && "object" == typeof t && t && t.__esModule) return t;
        var n = Object.create(null);
        if (i.r(n), Object.defineProperty(n, "default", {
                enumerable: !0,
                value: t
            }), 2 & e && "string" != typeof t)
            for (var r in t) i.d(n, r, function(e) {
                return t[e]
            }.bind(null, r));
        return n
    }, i.n = function(t) {
        var e = t && t.__esModule ? function() {
            return t.default
        } : function() {
            return t
        };
        return i.d(e, "a", e), e
    }, i.o = function(t, e) {
        return Object.prototype.hasOwnProperty.call(t, e)
    }, i.p = "", i(i.s = 5)
}([function(t, e, i) {
    var n;
    /*!
     * jQuery JavaScript Library v3.5.1
     * https://jquery.com/
     *
     * Includes Sizzle.js
     * https://sizzlejs.com/
     *
     * Copyright JS Foundation and other contributors
     * Released under the MIT license
     * https://jquery.org/license
     *
     * Date: 2020-05-04T22:49Z
     */
    ! function(e, i) {
        "use strict";
        "object" == typeof t.exports ? t.exports = e.document ? i(e, !0) : function(t) {
            if (!t.document) throw new Error("jQuery requires a window with a document");
            return i(t)
        } : i(e)
    }("undefined" != typeof window ? window : this, (function(i, r) {
        "use strict";
        var s = [],
            a = Object.getPrototypeOf,
            o = s.slice,
            l = s.flat ? function(t) {
                return s.flat.call(t)
            } : function(t) {
                return s.concat.apply([], t)
            },
            h = s.push,
            c = s.indexOf,
            p = {},
            f = p.toString,
            d = p.hasOwnProperty,
            u = d.toString,
            m = u.call(Object),
            g = {},
            y = function(t) {
                return "function" == typeof t && "number" != typeof t.nodeType
            },
            v = function(t) {
                return null != t && t === t.window
            },
            b = i.document,
            x = {
                type: !0,
                src: !0,
                nonce: !0,
                noModule: !0
            };

        function w(t, e, i) {
            var n, r, s = (i = i || b).createElement("script");
            if (s.text = t, e)
                for (n in x)(r = e[n] || e.getAttribute && e.getAttribute(n)) && s.setAttribute(n, r);
            i.head.appendChild(s).parentNode.removeChild(s)
        }

        function S(t) {
            return null == t ? t + "" : "object" == typeof t || "function" == typeof t ? p[f.call(t)] || "object" : typeof t
        }
        var E = function(t, e) {
            return new E.fn.init(t, e)
        };

        function C(t) {
            var e = !!t && "length" in t && t.length,
                i = S(t);
            return !y(t) && !v(t) && ("array" === i || 0 === e || "number" == typeof e && e > 0 && e - 1 in t)
        }
        E.fn = E.prototype = {
            jquery: "3.5.1",
            constructor: E,
            length: 0,
            toArray: function() {
                return o.call(this)
            },
            get: function(t) {
                return null == t ? o.call(this) : t < 0 ? this[t + this.length] : this[t]
            },
            pushStack: function(t) {
                var e = E.merge(this.constructor(), t);
                return e.prevObject = this, e
            },
            each: function(t) {
                return E.each(this, t)
            },
            map: function(t) {
                return this.pushStack(E.map(this, (function(e, i) {
                    return t.call(e, i, e)
                })))
            },
            slice: function() {
                return this.pushStack(o.apply(this, arguments))
            },
            first: function() {
                return this.eq(0)
            },
            last: function() {
                return this.eq(-1)
            },
            even: function() {
                return this.pushStack(E.grep(this, (function(t, e) {
                    return (e + 1) % 2
                })))
            },
            odd: function() {
                return this.pushStack(E.grep(this, (function(t, e) {
                    return e % 2
                })))
            },
            eq: function(t) {
                var e = this.length,
                    i = +t + (t < 0 ? e : 0);
                return this.pushStack(i >= 0 && i < e ? [this[i]] : [])
            },
            end: function() {
                return this.prevObject || this.constructor()
            },
            push: h,
            sort: s.sort,
            splice: s.splice
        }, E.extend = E.fn.extend = function() {
            var t, e, i, n, r, s, a = arguments[0] || {},
                o = 1,
                l = arguments.length,
                h = !1;
            for ("boolean" == typeof a && (h = a, a = arguments[o] || {}, o++), "object" == typeof a || y(a) || (a = {}), o === l && (a = this, o--); o < l; o++)
                if (null != (t = arguments[o]))
                    for (e in t) n = t[e], "__proto__" !== e && a !== n && (h && n && (E.isPlainObject(n) || (r = Array.isArray(n))) ? (i = a[e], s = r && !Array.isArray(i) ? [] : r || E.isPlainObject(i) ? i : {}, r = !1, a[e] = E.extend(h, s, n)) : void 0 !== n && (a[e] = n));
            return a
        }, E.extend({
            expando: "jQuery" + ("3.5.1" + Math.random()).replace(/\D/g, ""),
            isReady: !0,
            error: function(t) {
                throw new Error(t)
            },
            noop: function() {},
            isPlainObject: function(t) {
                var e, i;
                return !(!t || "[object Object]" !== f.call(t)) && (!(e = a(t)) || "function" == typeof(i = d.call(e, "constructor") && e.constructor) && u.call(i) === m)
            },
            isEmptyObject: function(t) {
                var e;
                for (e in t) return !1;
                return !0
            },
            globalEval: function(t, e, i) {
                w(t, {
                    nonce: e && e.nonce
                }, i)
            },
            each: function(t, e) {
                var i, n = 0;
                if (C(t))
                    for (i = t.length; n < i && !1 !== e.call(t[n], n, t[n]); n++);
                else
                    for (n in t)
                        if (!1 === e.call(t[n], n, t[n])) break;
                return t
            },
            makeArray: function(t, e) {
                var i = e || [];
                return null != t && (C(Object(t)) ? E.merge(i, "string" == typeof t ? [t] : t) : h.call(i, t)), i
            },
            inArray: function(t, e, i) {
                return null == e ? -1 : c.call(e, t, i)
            },
            merge: function(t, e) {
                for (var i = +e.length, n = 0, r = t.length; n < i; n++) t[r++] = e[n];
                return t.length = r, t
            },
            grep: function(t, e, i) {
                for (var n = [], r = 0, s = t.length, a = !i; r < s; r++) !e(t[r], r) !== a && n.push(t[r]);
                return n
            },
            map: function(t, e, i) {
                var n, r, s = 0,
                    a = [];
                if (C(t))
                    for (n = t.length; s < n; s++) null != (r = e(t[s], s, i)) && a.push(r);
                else
                    for (s in t) null != (r = e(t[s], s, i)) && a.push(r);
                return l(a)
            },
            guid: 1,
            support: g
        }), "function" == typeof Symbol && (E.fn[Symbol.iterator] = s[Symbol.iterator]), E.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), (function(t, e) {
            p["[object " + e + "]"] = e.toLowerCase()
        }));
        var P =
            /*!
             * Sizzle CSS Selector Engine v2.3.5
             * https://sizzlejs.com/
             *
             * Copyright JS Foundation and other contributors
             * Released under the MIT license
             * https://js.foundation/
             *
             * Date: 2020-03-14
             */
            function(t) {
                var e, i, n, r, s, a, o, l, h, c, p, f, d, u, m, g, y, v, b, x = "sizzle" + 1 * new Date,
                    w = t.document,
                    S = 0,
                    E = 0,
                    C = lt(),
                    P = lt(),
                    T = lt(),
                    _ = lt(),
                    k = function(t, e) {
                        return t === e && (p = !0), 0
                    },
                    A = {}.hasOwnProperty,
                    D = [],
                    M = D.pop,
                    F = D.push,
                    I = D.push,
                    R = D.slice,
                    L = function(t, e) {
                        for (var i = 0, n = t.length; i < n; i++)
                            if (t[i] === e) return i;
                        return -1
                    },
                    B = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
                    N = "[\\x20\\t\\r\\n\\f]",
                    V = "(?:\\\\[\\da-fA-F]{1,6}" + N + "?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",
                    z = "\\[" + N + "*(" + V + ")(?:" + N + "*([*^$|!~]?=)" + N + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + V + "))|)" + N + "*\\]",
                    O = ":(" + V + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + z + ")*)|.*)\\)|)",
                    j = new RegExp(N + "+", "g"),
                    H = new RegExp("^" + N + "+|((?:^|[^\\\\])(?:\\\\.)*)" + N + "+$", "g"),
                    $ = new RegExp("^" + N + "*," + N + "*"),
                    q = new RegExp("^" + N + "*([>+~]|" + N + ")" + N + "*"),
                    G = new RegExp(N + "|>"),
                    W = new RegExp(O),
                    X = new RegExp("^" + V + "$"),
                    Y = {
                        ID: new RegExp("^#(" + V + ")"),
                        CLASS: new RegExp("^\\.(" + V + ")"),
                        TAG: new RegExp("^(" + V + "|[*])"),
                        ATTR: new RegExp("^" + z),
                        PSEUDO: new RegExp("^" + O),
                        CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + N + "*(even|odd|(([+-]|)(\\d*)n|)" + N + "*(?:([+-]|)" + N + "*(\\d+)|))" + N + "*\\)|)", "i"),
                        bool: new RegExp("^(?:" + B + ")$", "i"),
                        needsContext: new RegExp("^" + N + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + N + "*((?:-\\d)?\\d*)" + N + "*\\)|)(?=[^-]|$)", "i")
                    },
                    U = /HTML$/i,
                    Z = /^(?:input|select|textarea|button)$/i,
                    K = /^h\d$/i,
                    J = /^[^{]+\{\s*\[native \w/,
                    Q = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
                    tt = /[+~]/,
                    et = new RegExp("\\\\[\\da-fA-F]{1,6}" + N + "?|\\\\([^\\r\\n\\f])", "g"),
                    it = function(t, e) {
                        var i = "0x" + t.slice(1) - 65536;
                        return e || (i < 0 ? String.fromCharCode(i + 65536) : String.fromCharCode(i >> 10 | 55296, 1023 & i | 56320))
                    },
                    nt = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
                    rt = function(t, e) {
                        return e ? "\0" === t ? "�" : t.slice(0, -1) + "\\" + t.charCodeAt(t.length - 1).toString(16) + " " : "\\" + t
                    },
                    st = function() {
                        f()
                    },
                    at = xt((function(t) {
                        return !0 === t.disabled && "fieldset" === t.nodeName.toLowerCase()
                    }), {
                        dir: "parentNode",
                        next: "legend"
                    });
                try {
                    I.apply(D = R.call(w.childNodes), w.childNodes), D[w.childNodes.length].nodeType
                } catch (t) {
                    I = {
                        apply: D.length ? function(t, e) {
                            F.apply(t, R.call(e))
                        } : function(t, e) {
                            for (var i = t.length, n = 0; t[i++] = e[n++];);
                            t.length = i - 1
                        }
                    }
                }

                function ot(t, e, n, r) {
                    var s, o, h, c, p, u, y, v = e && e.ownerDocument,
                        w = e ? e.nodeType : 9;
                    if (n = n || [], "string" != typeof t || !t || 1 !== w && 9 !== w && 11 !== w) return n;
                    if (!r && (f(e), e = e || d, m)) {
                        if (11 !== w && (p = Q.exec(t)))
                            if (s = p[1]) {
                                if (9 === w) {
                                    if (!(h = e.getElementById(s))) return n;
                                    if (h.id === s) return n.push(h), n
                                } else if (v && (h = v.getElementById(s)) && b(e, h) && h.id === s) return n.push(h), n
                            } else {
                                if (p[2]) return I.apply(n, e.getElementsByTagName(t)), n;
                                if ((s = p[3]) && i.getElementsByClassName && e.getElementsByClassName) return I.apply(n, e.getElementsByClassName(s)), n
                            }
                        if (i.qsa && !_[t + " "] && (!g || !g.test(t)) && (1 !== w || "object" !== e.nodeName.toLowerCase())) {
                            if (y = t, v = e, 1 === w && (G.test(t) || q.test(t))) {
                                for ((v = tt.test(t) && yt(e.parentNode) || e) === e && i.scope || ((c = e.getAttribute("id")) ? c = c.replace(nt, rt) : e.setAttribute("id", c = x)), o = (u = a(t)).length; o--;) u[o] = (c ? "#" + c : ":scope") + " " + bt(u[o]);
                                y = u.join(",")
                            }
                            try {
                                return I.apply(n, v.querySelectorAll(y)), n
                            } catch (e) {
                                _(t, !0)
                            } finally {
                                c === x && e.removeAttribute("id")
                            }
                        }
                    }
                    return l(t.replace(H, "$1"), e, n, r)
                }

                function lt() {
                    var t = [];
                    return function e(i, r) {
                        return t.push(i + " ") > n.cacheLength && delete e[t.shift()], e[i + " "] = r
                    }
                }

                function ht(t) {
                    return t[x] = !0, t
                }

                function ct(t) {
                    var e = d.createElement("fieldset");
                    try {
                        return !!t(e)
                    } catch (t) {
                        return !1
                    } finally {
                        e.parentNode && e.parentNode.removeChild(e), e = null
                    }
                }

                function pt(t, e) {
                    for (var i = t.split("|"), r = i.length; r--;) n.attrHandle[i[r]] = e
                }

                function ft(t, e) {
                    var i = e && t,
                        n = i && 1 === t.nodeType && 1 === e.nodeType && t.sourceIndex - e.sourceIndex;
                    if (n) return n;
                    if (i)
                        for (; i = i.nextSibling;)
                            if (i === e) return -1;
                    return t ? 1 : -1
                }

                function dt(t) {
                    return function(e) {
                        return "input" === e.nodeName.toLowerCase() && e.type === t
                    }
                }

                function ut(t) {
                    return function(e) {
                        var i = e.nodeName.toLowerCase();
                        return ("input" === i || "button" === i) && e.type === t
                    }
                }

                function mt(t) {
                    return function(e) {
                        return "form" in e ? e.parentNode && !1 === e.disabled ? "label" in e ? "label" in e.parentNode ? e.parentNode.disabled === t : e.disabled === t : e.isDisabled === t || e.isDisabled !== !t && at(e) === t : e.disabled === t : "label" in e && e.disabled === t
                    }
                }

                function gt(t) {
                    return ht((function(e) {
                        return e = +e, ht((function(i, n) {
                            for (var r, s = t([], i.length, e), a = s.length; a--;) i[r = s[a]] && (i[r] = !(n[r] = i[r]))
                        }))
                    }))
                }

                function yt(t) {
                    return t && void 0 !== t.getElementsByTagName && t
                }
                for (e in i = ot.support = {}, s = ot.isXML = function(t) {
                        var e = t.namespaceURI,
                            i = (t.ownerDocument || t).documentElement;
                        return !U.test(e || i && i.nodeName || "HTML")
                    }, f = ot.setDocument = function(t) {
                        var e, r, a = t ? t.ownerDocument || t : w;
                        return a != d && 9 === a.nodeType && a.documentElement ? (u = (d = a).documentElement, m = !s(d), w != d && (r = d.defaultView) && r.top !== r && (r.addEventListener ? r.addEventListener("unload", st, !1) : r.attachEvent && r.attachEvent("onunload", st)), i.scope = ct((function(t) {
                            return u.appendChild(t).appendChild(d.createElement("div")), void 0 !== t.querySelectorAll && !t.querySelectorAll(":scope fieldset div").length
                        })), i.attributes = ct((function(t) {
                            return t.className = "i", !t.getAttribute("className")
                        })), i.getElementsByTagName = ct((function(t) {
                            return t.appendChild(d.createComment("")), !t.getElementsByTagName("*").length
                        })), i.getElementsByClassName = J.test(d.getElementsByClassName), i.getById = ct((function(t) {
                            return u.appendChild(t).id = x, !d.getElementsByName || !d.getElementsByName(x).length
                        })), i.getById ? (n.filter.ID = function(t) {
                            var e = t.replace(et, it);
                            return function(t) {
                                return t.getAttribute("id") === e
                            }
                        }, n.find.ID = function(t, e) {
                            if (void 0 !== e.getElementById && m) {
                                var i = e.getElementById(t);
                                return i ? [i] : []
                            }
                        }) : (n.filter.ID = function(t) {
                            var e = t.replace(et, it);
                            return function(t) {
                                var i = void 0 !== t.getAttributeNode && t.getAttributeNode("id");
                                return i && i.value === e
                            }
                        }, n.find.ID = function(t, e) {
                            if (void 0 !== e.getElementById && m) {
                                var i, n, r, s = e.getElementById(t);
                                if (s) {
                                    if ((i = s.getAttributeNode("id")) && i.value === t) return [s];
                                    for (r = e.getElementsByName(t), n = 0; s = r[n++];)
                                        if ((i = s.getAttributeNode("id")) && i.value === t) return [s]
                                }
                                return []
                            }
                        }), n.find.TAG = i.getElementsByTagName ? function(t, e) {
                            return void 0 !== e.getElementsByTagName ? e.getElementsByTagName(t) : i.qsa ? e.querySelectorAll(t) : void 0
                        } : function(t, e) {
                            var i, n = [],
                                r = 0,
                                s = e.getElementsByTagName(t);
                            if ("*" === t) {
                                for (; i = s[r++];) 1 === i.nodeType && n.push(i);
                                return n
                            }
                            return s
                        }, n.find.CLASS = i.getElementsByClassName && function(t, e) {
                            if (void 0 !== e.getElementsByClassName && m) return e.getElementsByClassName(t)
                        }, y = [], g = [], (i.qsa = J.test(d.querySelectorAll)) && (ct((function(t) {
                            var e;
                            u.appendChild(t).innerHTML = "<a id='" + x + "'></a><select id='" + x + "-\r\\' msallowcapture=''><option selected=''></option></select>", t.querySelectorAll("[msallowcapture^='']").length && g.push("[*^$]=" + N + "*(?:''|\"\")"), t.querySelectorAll("[selected]").length || g.push("\\[" + N + "*(?:value|" + B + ")"), t.querySelectorAll("[id~=" + x + "-]").length || g.push("~="), (e = d.createElement("input")).setAttribute("name", ""), t.appendChild(e), t.querySelectorAll("[name='']").length || g.push("\\[" + N + "*name" + N + "*=" + N + "*(?:''|\"\")"), t.querySelectorAll(":checked").length || g.push(":checked"), t.querySelectorAll("a#" + x + "+*").length || g.push(".#.+[+~]"), t.querySelectorAll("\\\f"), g.push("[\\r\\n\\f]")
                        })), ct((function(t) {
                            t.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                            var e = d.createElement("input");
                            e.setAttribute("type", "hidden"), t.appendChild(e).setAttribute("name", "D"), t.querySelectorAll("[name=d]").length && g.push("name" + N + "*[*^$|!~]?="), 2 !== t.querySelectorAll(":enabled").length && g.push(":enabled", ":disabled"), u.appendChild(t).disabled = !0, 2 !== t.querySelectorAll(":disabled").length && g.push(":enabled", ":disabled"), t.querySelectorAll("*,:x"), g.push(",.*:")
                        }))), (i.matchesSelector = J.test(v = u.matches || u.webkitMatchesSelector || u.mozMatchesSelector || u.oMatchesSelector || u.msMatchesSelector)) && ct((function(t) {
                            i.disconnectedMatch = v.call(t, "*"), v.call(t, "[s!='']:x"), y.push("!=", O)
                        })), g = g.length && new RegExp(g.join("|")), y = y.length && new RegExp(y.join("|")), e = J.test(u.compareDocumentPosition), b = e || J.test(u.contains) ? function(t, e) {
                            var i = 9 === t.nodeType ? t.documentElement : t,
                                n = e && e.parentNode;
                            return t === n || !(!n || 1 !== n.nodeType || !(i.contains ? i.contains(n) : t.compareDocumentPosition && 16 & t.compareDocumentPosition(n)))
                        } : function(t, e) {
                            if (e)
                                for (; e = e.parentNode;)
                                    if (e === t) return !0;
                            return !1
                        }, k = e ? function(t, e) {
                            if (t === e) return p = !0, 0;
                            var n = !t.compareDocumentPosition - !e.compareDocumentPosition;
                            return n || (1 & (n = (t.ownerDocument || t) == (e.ownerDocument || e) ? t.compareDocumentPosition(e) : 1) || !i.sortDetached && e.compareDocumentPosition(t) === n ? t == d || t.ownerDocument == w && b(w, t) ? -1 : e == d || e.ownerDocument == w && b(w, e) ? 1 : c ? L(c, t) - L(c, e) : 0 : 4 & n ? -1 : 1)
                        } : function(t, e) {
                            if (t === e) return p = !0, 0;
                            var i, n = 0,
                                r = t.parentNode,
                                s = e.parentNode,
                                a = [t],
                                o = [e];
                            if (!r || !s) return t == d ? -1 : e == d ? 1 : r ? -1 : s ? 1 : c ? L(c, t) - L(c, e) : 0;
                            if (r === s) return ft(t, e);
                            for (i = t; i = i.parentNode;) a.unshift(i);
                            for (i = e; i = i.parentNode;) o.unshift(i);
                            for (; a[n] === o[n];) n++;
                            return n ? ft(a[n], o[n]) : a[n] == w ? -1 : o[n] == w ? 1 : 0
                        }, d) : d
                    }, ot.matches = function(t, e) {
                        return ot(t, null, null, e)
                    }, ot.matchesSelector = function(t, e) {
                        if (f(t), i.matchesSelector && m && !_[e + " "] && (!y || !y.test(e)) && (!g || !g.test(e))) try {
                            var n = v.call(t, e);
                            if (n || i.disconnectedMatch || t.document && 11 !== t.document.nodeType) return n
                        } catch (t) {
                            _(e, !0)
                        }
                        return ot(e, d, null, [t]).length > 0
                    }, ot.contains = function(t, e) {
                        return (t.ownerDocument || t) != d && f(t), b(t, e)
                    }, ot.attr = function(t, e) {
                        (t.ownerDocument || t) != d && f(t);
                        var r = n.attrHandle[e.toLowerCase()],
                            s = r && A.call(n.attrHandle, e.toLowerCase()) ? r(t, e, !m) : void 0;
                        return void 0 !== s ? s : i.attributes || !m ? t.getAttribute(e) : (s = t.getAttributeNode(e)) && s.specified ? s.value : null
                    }, ot.escape = function(t) {
                        return (t + "").replace(nt, rt)
                    }, ot.error = function(t) {
                        throw new Error("Syntax error, unrecognized expression: " + t)
                    }, ot.uniqueSort = function(t) {
                        var e, n = [],
                            r = 0,
                            s = 0;
                        if (p = !i.detectDuplicates, c = !i.sortStable && t.slice(0), t.sort(k), p) {
                            for (; e = t[s++];) e === t[s] && (r = n.push(s));
                            for (; r--;) t.splice(n[r], 1)
                        }
                        return c = null, t
                    }, r = ot.getText = function(t) {
                        var e, i = "",
                            n = 0,
                            s = t.nodeType;
                        if (s) {
                            if (1 === s || 9 === s || 11 === s) {
                                if ("string" == typeof t.textContent) return t.textContent;
                                for (t = t.firstChild; t; t = t.nextSibling) i += r(t)
                            } else if (3 === s || 4 === s) return t.nodeValue
                        } else
                            for (; e = t[n++];) i += r(e);
                        return i
                    }, (n = ot.selectors = {
                        cacheLength: 50,
                        createPseudo: ht,
                        match: Y,
                        attrHandle: {},
                        find: {},
                        relative: {
                            ">": {
                                dir: "parentNode",
                                first: !0
                            },
                            " ": {
                                dir: "parentNode"
                            },
                            "+": {
                                dir: "previousSibling",
                                first: !0
                            },
                            "~": {
                                dir: "previousSibling"
                            }
                        },
                        preFilter: {
                            ATTR: function(t) {
                                return t[1] = t[1].replace(et, it), t[3] = (t[3] || t[4] || t[5] || "").replace(et, it), "~=" === t[2] && (t[3] = " " + t[3] + " "), t.slice(0, 4)
                            },
                            CHILD: function(t) {
                                return t[1] = t[1].toLowerCase(), "nth" === t[1].slice(0, 3) ? (t[3] || ot.error(t[0]), t[4] = +(t[4] ? t[5] + (t[6] || 1) : 2 * ("even" === t[3] || "odd" === t[3])), t[5] = +(t[7] + t[8] || "odd" === t[3])) : t[3] && ot.error(t[0]), t
                            },
                            PSEUDO: function(t) {
                                var e, i = !t[6] && t[2];
                                return Y.CHILD.test(t[0]) ? null : (t[3] ? t[2] = t[4] || t[5] || "" : i && W.test(i) && (e = a(i, !0)) && (e = i.indexOf(")", i.length - e) - i.length) && (t[0] = t[0].slice(0, e), t[2] = i.slice(0, e)), t.slice(0, 3))
                            }
                        },
                        filter: {
                            TAG: function(t) {
                                var e = t.replace(et, it).toLowerCase();
                                return "*" === t ? function() {
                                    return !0
                                } : function(t) {
                                    return t.nodeName && t.nodeName.toLowerCase() === e
                                }
                            },
                            CLASS: function(t) {
                                var e = C[t + " "];
                                return e || (e = new RegExp("(^|" + N + ")" + t + "(" + N + "|$)")) && C(t, (function(t) {
                                    return e.test("string" == typeof t.className && t.className || void 0 !== t.getAttribute && t.getAttribute("class") || "")
                                }))
                            },
                            ATTR: function(t, e, i) {
                                return function(n) {
                                    var r = ot.attr(n, t);
                                    return null == r ? "!=" === e : !e || (r += "", "=" === e ? r === i : "!=" === e ? r !== i : "^=" === e ? i && 0 === r.indexOf(i) : "*=" === e ? i && r.indexOf(i) > -1 : "$=" === e ? i && r.slice(-i.length) === i : "~=" === e ? (" " + r.replace(j, " ") + " ").indexOf(i) > -1 : "|=" === e && (r === i || r.slice(0, i.length + 1) === i + "-"))
                                }
                            },
                            CHILD: function(t, e, i, n, r) {
                                var s = "nth" !== t.slice(0, 3),
                                    a = "last" !== t.slice(-4),
                                    o = "of-type" === e;
                                return 1 === n && 0 === r ? function(t) {
                                    return !!t.parentNode
                                } : function(e, i, l) {
                                    var h, c, p, f, d, u, m = s !== a ? "nextSibling" : "previousSibling",
                                        g = e.parentNode,
                                        y = o && e.nodeName.toLowerCase(),
                                        v = !l && !o,
                                        b = !1;
                                    if (g) {
                                        if (s) {
                                            for (; m;) {
                                                for (f = e; f = f[m];)
                                                    if (o ? f.nodeName.toLowerCase() === y : 1 === f.nodeType) return !1;
                                                u = m = "only" === t && !u && "nextSibling"
                                            }
                                            return !0
                                        }
                                        if (u = [a ? g.firstChild : g.lastChild], a && v) {
                                            for (b = (d = (h = (c = (p = (f = g)[x] || (f[x] = {}))[f.uniqueID] || (p[f.uniqueID] = {}))[t] || [])[0] === S && h[1]) && h[2], f = d && g.childNodes[d]; f = ++d && f && f[m] || (b = d = 0) || u.pop();)
                                                if (1 === f.nodeType && ++b && f === e) {
                                                    c[t] = [S, d, b];
                                                    break
                                                }
                                        } else if (v && (b = d = (h = (c = (p = (f = e)[x] || (f[x] = {}))[f.uniqueID] || (p[f.uniqueID] = {}))[t] || [])[0] === S && h[1]), !1 === b)
                                            for (;
                                                (f = ++d && f && f[m] || (b = d = 0) || u.pop()) && ((o ? f.nodeName.toLowerCase() !== y : 1 !== f.nodeType) || !++b || (v && ((c = (p = f[x] || (f[x] = {}))[f.uniqueID] || (p[f.uniqueID] = {}))[t] = [S, b]), f !== e)););
                                        return (b -= r) === n || b % n == 0 && b / n >= 0
                                    }
                                }
                            },
                            PSEUDO: function(t, e) {
                                var i, r = n.pseudos[t] || n.setFilters[t.toLowerCase()] || ot.error("unsupported pseudo: " + t);
                                return r[x] ? r(e) : r.length > 1 ? (i = [t, t, "", e], n.setFilters.hasOwnProperty(t.toLowerCase()) ? ht((function(t, i) {
                                    for (var n, s = r(t, e), a = s.length; a--;) t[n = L(t, s[a])] = !(i[n] = s[a])
                                })) : function(t) {
                                    return r(t, 0, i)
                                }) : r
                            }
                        },
                        pseudos: {
                            not: ht((function(t) {
                                var e = [],
                                    i = [],
                                    n = o(t.replace(H, "$1"));
                                return n[x] ? ht((function(t, e, i, r) {
                                    for (var s, a = n(t, null, r, []), o = t.length; o--;)(s = a[o]) && (t[o] = !(e[o] = s))
                                })) : function(t, r, s) {
                                    return e[0] = t, n(e, null, s, i), e[0] = null, !i.pop()
                                }
                            })),
                            has: ht((function(t) {
                                return function(e) {
                                    return ot(t, e).length > 0
                                }
                            })),
                            contains: ht((function(t) {
                                return t = t.replace(et, it),
                                    function(e) {
                                        return (e.textContent || r(e)).indexOf(t) > -1
                                    }
                            })),
                            lang: ht((function(t) {
                                return X.test(t || "") || ot.error("unsupported lang: " + t), t = t.replace(et, it).toLowerCase(),
                                    function(e) {
                                        var i;
                                        do {
                                            if (i = m ? e.lang : e.getAttribute("xml:lang") || e.getAttribute("lang")) return (i = i.toLowerCase()) === t || 0 === i.indexOf(t + "-")
                                        } while ((e = e.parentNode) && 1 === e.nodeType);
                                        return !1
                                    }
                            })),
                            target: function(e) {
                                var i = t.location && t.location.hash;
                                return i && i.slice(1) === e.id
                            },
                            root: function(t) {
                                return t === u
                            },
                            focus: function(t) {
                                return t === d.activeElement && (!d.hasFocus || d.hasFocus()) && !!(t.type || t.href || ~t.tabIndex)
                            },
                            enabled: mt(!1),
                            disabled: mt(!0),
                            checked: function(t) {
                                var e = t.nodeName.toLowerCase();
                                return "input" === e && !!t.checked || "option" === e && !!t.selected
                            },
                            selected: function(t) {
                                return t.parentNode && t.parentNode.selectedIndex, !0 === t.selected
                            },
                            empty: function(t) {
                                for (t = t.firstChild; t; t = t.nextSibling)
                                    if (t.nodeType < 6) return !1;
                                return !0
                            },
                            parent: function(t) {
                                return !n.pseudos.empty(t)
                            },
                            header: function(t) {
                                return K.test(t.nodeName)
                            },
                            input: function(t) {
                                return Z.test(t.nodeName)
                            },
                            button: function(t) {
                                var e = t.nodeName.toLowerCase();
                                return "input" === e && "button" === t.type || "button" === e
                            },
                            text: function(t) {
                                var e;
                                return "input" === t.nodeName.toLowerCase() && "text" === t.type && (null == (e = t.getAttribute("type")) || "text" === e.toLowerCase())
                            },
                            first: gt((function() {
                                return [0]
                            })),
                            last: gt((function(t, e) {
                                return [e - 1]
                            })),
                            eq: gt((function(t, e, i) {
                                return [i < 0 ? i + e : i]
                            })),
                            even: gt((function(t, e) {
                                for (var i = 0; i < e; i += 2) t.push(i);
                                return t
                            })),
                            odd: gt((function(t, e) {
                                for (var i = 1; i < e; i += 2) t.push(i);
                                return t
                            })),
                            lt: gt((function(t, e, i) {
                                for (var n = i < 0 ? i + e : i > e ? e : i; --n >= 0;) t.push(n);
                                return t
                            })),
                            gt: gt((function(t, e, i) {
                                for (var n = i < 0 ? i + e : i; ++n < e;) t.push(n);
                                return t
                            }))
                        }
                    }).pseudos.nth = n.pseudos.eq, {
                        radio: !0,
                        checkbox: !0,
                        file: !0,
                        password: !0,
                        image: !0
                    }) n.pseudos[e] = dt(e);
                for (e in {
                        submit: !0,
                        reset: !0
                    }) n.pseudos[e] = ut(e);

                function vt() {}

                function bt(t) {
                    for (var e = 0, i = t.length, n = ""; e < i; e++) n += t[e].value;
                    return n
                }

                function xt(t, e, i) {
                    var n = e.dir,
                        r = e.next,
                        s = r || n,
                        a = i && "parentNode" === s,
                        o = E++;
                    return e.first ? function(e, i, r) {
                        for (; e = e[n];)
                            if (1 === e.nodeType || a) return t(e, i, r);
                        return !1
                    } : function(e, i, l) {
                        var h, c, p, f = [S, o];
                        if (l) {
                            for (; e = e[n];)
                                if ((1 === e.nodeType || a) && t(e, i, l)) return !0
                        } else
                            for (; e = e[n];)
                                if (1 === e.nodeType || a)
                                    if (c = (p = e[x] || (e[x] = {}))[e.uniqueID] || (p[e.uniqueID] = {}), r && r === e.nodeName.toLowerCase()) e = e[n] || e;
                                    else {
                                        if ((h = c[s]) && h[0] === S && h[1] === o) return f[2] = h[2];
                                        if (c[s] = f, f[2] = t(e, i, l)) return !0
                                    } return !1
                    }
                }

                function wt(t) {
                    return t.length > 1 ? function(e, i, n) {
                        for (var r = t.length; r--;)
                            if (!t[r](e, i, n)) return !1;
                        return !0
                    } : t[0]
                }

                function St(t, e, i, n, r) {
                    for (var s, a = [], o = 0, l = t.length, h = null != e; o < l; o++)(s = t[o]) && (i && !i(s, n, r) || (a.push(s), h && e.push(o)));
                    return a
                }

                function Et(t, e, i, n, r, s) {
                    return n && !n[x] && (n = Et(n)), r && !r[x] && (r = Et(r, s)), ht((function(s, a, o, l) {
                        var h, c, p, f = [],
                            d = [],
                            u = a.length,
                            m = s || function(t, e, i) {
                                for (var n = 0, r = e.length; n < r; n++) ot(t, e[n], i);
                                return i
                            }(e || "*", o.nodeType ? [o] : o, []),
                            g = !t || !s && e ? m : St(m, f, t, o, l),
                            y = i ? r || (s ? t : u || n) ? [] : a : g;
                        if (i && i(g, y, o, l), n)
                            for (h = St(y, d), n(h, [], o, l), c = h.length; c--;)(p = h[c]) && (y[d[c]] = !(g[d[c]] = p));
                        if (s) {
                            if (r || t) {
                                if (r) {
                                    for (h = [], c = y.length; c--;)(p = y[c]) && h.push(g[c] = p);
                                    r(null, y = [], h, l)
                                }
                                for (c = y.length; c--;)(p = y[c]) && (h = r ? L(s, p) : f[c]) > -1 && (s[h] = !(a[h] = p))
                            }
                        } else y = St(y === a ? y.splice(u, y.length) : y), r ? r(null, a, y, l) : I.apply(a, y)
                    }))
                }

                function Ct(t) {
                    for (var e, i, r, s = t.length, a = n.relative[t[0].type], o = a || n.relative[" "], l = a ? 1 : 0, c = xt((function(t) {
                            return t === e
                        }), o, !0), p = xt((function(t) {
                            return L(e, t) > -1
                        }), o, !0), f = [function(t, i, n) {
                            var r = !a && (n || i !== h) || ((e = i).nodeType ? c(t, i, n) : p(t, i, n));
                            return e = null, r
                        }]; l < s; l++)
                        if (i = n.relative[t[l].type]) f = [xt(wt(f), i)];
                        else {
                            if ((i = n.filter[t[l].type].apply(null, t[l].matches))[x]) {
                                for (r = ++l; r < s && !n.relative[t[r].type]; r++);
                                return Et(l > 1 && wt(f), l > 1 && bt(t.slice(0, l - 1).concat({
                                    value: " " === t[l - 2].type ? "*" : ""
                                })).replace(H, "$1"), i, l < r && Ct(t.slice(l, r)), r < s && Ct(t = t.slice(r)), r < s && bt(t))
                            }
                            f.push(i)
                        }
                    return wt(f)
                }
                return vt.prototype = n.filters = n.pseudos, n.setFilters = new vt, a = ot.tokenize = function(t, e) {
                    var i, r, s, a, o, l, h, c = P[t + " "];
                    if (c) return e ? 0 : c.slice(0);
                    for (o = t, l = [], h = n.preFilter; o;) {
                        for (a in i && !(r = $.exec(o)) || (r && (o = o.slice(r[0].length) || o), l.push(s = [])), i = !1, (r = q.exec(o)) && (i = r.shift(), s.push({
                                value: i,
                                type: r[0].replace(H, " ")
                            }), o = o.slice(i.length)), n.filter) !(r = Y[a].exec(o)) || h[a] && !(r = h[a](r)) || (i = r.shift(), s.push({
                            value: i,
                            type: a,
                            matches: r
                        }), o = o.slice(i.length));
                        if (!i) break
                    }
                    return e ? o.length : o ? ot.error(t) : P(t, l).slice(0)
                }, o = ot.compile = function(t, e) {
                    var i, r = [],
                        s = [],
                        o = T[t + " "];
                    if (!o) {
                        for (e || (e = a(t)), i = e.length; i--;)(o = Ct(e[i]))[x] ? r.push(o) : s.push(o);
                        (o = T(t, function(t, e) {
                            var i = e.length > 0,
                                r = t.length > 0,
                                s = function(s, a, o, l, c) {
                                    var p, u, g, y = 0,
                                        v = "0",
                                        b = s && [],
                                        x = [],
                                        w = h,
                                        E = s || r && n.find.TAG("*", c),
                                        C = S += null == w ? 1 : Math.random() || .1,
                                        P = E.length;
                                    for (c && (h = a == d || a || c); v !== P && null != (p = E[v]); v++) {
                                        if (r && p) {
                                            for (u = 0, a || p.ownerDocument == d || (f(p), o = !m); g = t[u++];)
                                                if (g(p, a || d, o)) {
                                                    l.push(p);
                                                    break
                                                }
                                            c && (S = C)
                                        }
                                        i && ((p = !g && p) && y--, s && b.push(p))
                                    }
                                    if (y += v, i && v !== y) {
                                        for (u = 0; g = e[u++];) g(b, x, a, o);
                                        if (s) {
                                            if (y > 0)
                                                for (; v--;) b[v] || x[v] || (x[v] = M.call(l));
                                            x = St(x)
                                        }
                                        I.apply(l, x), c && !s && x.length > 0 && y + e.length > 1 && ot.uniqueSort(l)
                                    }
                                    return c && (S = C, h = w), b
                                };
                            return i ? ht(s) : s
                        }(s, r))).selector = t
                    }
                    return o
                }, l = ot.select = function(t, e, i, r) {
                    var s, l, h, c, p, f = "function" == typeof t && t,
                        d = !r && a(t = f.selector || t);
                    if (i = i || [], 1 === d.length) {
                        if ((l = d[0] = d[0].slice(0)).length > 2 && "ID" === (h = l[0]).type && 9 === e.nodeType && m && n.relative[l[1].type]) {
                            if (!(e = (n.find.ID(h.matches[0].replace(et, it), e) || [])[0])) return i;
                            f && (e = e.parentNode), t = t.slice(l.shift().value.length)
                        }
                        for (s = Y.needsContext.test(t) ? 0 : l.length; s-- && (h = l[s], !n.relative[c = h.type]);)
                            if ((p = n.find[c]) && (r = p(h.matches[0].replace(et, it), tt.test(l[0].type) && yt(e.parentNode) || e))) {
                                if (l.splice(s, 1), !(t = r.length && bt(l))) return I.apply(i, r), i;
                                break
                            }
                    }
                    return (f || o(t, d))(r, e, !m, i, !e || tt.test(t) && yt(e.parentNode) || e), i
                }, i.sortStable = x.split("").sort(k).join("") === x, i.detectDuplicates = !!p, f(), i.sortDetached = ct((function(t) {
                    return 1 & t.compareDocumentPosition(d.createElement("fieldset"))
                })), ct((function(t) {
                    return t.innerHTML = "<a href='#'></a>", "#" === t.firstChild.getAttribute("href")
                })) || pt("type|href|height|width", (function(t, e, i) {
                    if (!i) return t.getAttribute(e, "type" === e.toLowerCase() ? 1 : 2)
                })), i.attributes && ct((function(t) {
                    return t.innerHTML = "<input/>", t.firstChild.setAttribute("value", ""), "" === t.firstChild.getAttribute("value")
                })) || pt("value", (function(t, e, i) {
                    if (!i && "input" === t.nodeName.toLowerCase()) return t.defaultValue
                })), ct((function(t) {
                    return null == t.getAttribute("disabled")
                })) || pt(B, (function(t, e, i) {
                    var n;
                    if (!i) return !0 === t[e] ? e.toLowerCase() : (n = t.getAttributeNode(e)) && n.specified ? n.value : null
                })), ot
            }(i);
        E.find = P, E.expr = P.selectors, E.expr[":"] = E.expr.pseudos, E.uniqueSort = E.unique = P.uniqueSort, E.text = P.getText, E.isXMLDoc = P.isXML, E.contains = P.contains, E.escapeSelector = P.escape;
        var T = function(t, e, i) {
                for (var n = [], r = void 0 !== i;
                    (t = t[e]) && 9 !== t.nodeType;)
                    if (1 === t.nodeType) {
                        if (r && E(t).is(i)) break;
                        n.push(t)
                    }
                return n
            },
            _ = function(t, e) {
                for (var i = []; t; t = t.nextSibling) 1 === t.nodeType && t !== e && i.push(t);
                return i
            },
            k = E.expr.match.needsContext;

        function A(t, e) {
            return t.nodeName && t.nodeName.toLowerCase() === e.toLowerCase()
        }
        var D = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;

        function M(t, e, i) {
            return y(e) ? E.grep(t, (function(t, n) {
                return !!e.call(t, n, t) !== i
            })) : e.nodeType ? E.grep(t, (function(t) {
                return t === e !== i
            })) : "string" != typeof e ? E.grep(t, (function(t) {
                return c.call(e, t) > -1 !== i
            })) : E.filter(e, t, i)
        }
        E.filter = function(t, e, i) {
            var n = e[0];
            return i && (t = ":not(" + t + ")"), 1 === e.length && 1 === n.nodeType ? E.find.matchesSelector(n, t) ? [n] : [] : E.find.matches(t, E.grep(e, (function(t) {
                return 1 === t.nodeType
            })))
        }, E.fn.extend({
            find: function(t) {
                var e, i, n = this.length,
                    r = this;
                if ("string" != typeof t) return this.pushStack(E(t).filter((function() {
                    for (e = 0; e < n; e++)
                        if (E.contains(r[e], this)) return !0
                })));
                for (i = this.pushStack([]), e = 0; e < n; e++) E.find(t, r[e], i);
                return n > 1 ? E.uniqueSort(i) : i
            },
            filter: function(t) {
                return this.pushStack(M(this, t || [], !1))
            },
            not: function(t) {
                return this.pushStack(M(this, t || [], !0))
            },
            is: function(t) {
                return !!M(this, "string" == typeof t && k.test(t) ? E(t) : t || [], !1).length
            }
        });
        var F, I = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
        (E.fn.init = function(t, e, i) {
            var n, r;
            if (!t) return this;
            if (i = i || F, "string" == typeof t) {
                if (!(n = "<" === t[0] && ">" === t[t.length - 1] && t.length >= 3 ? [null, t, null] : I.exec(t)) || !n[1] && e) return !e || e.jquery ? (e || i).find(t) : this.constructor(e).find(t);
                if (n[1]) {
                    if (e = e instanceof E ? e[0] : e, E.merge(this, E.parseHTML(n[1], e && e.nodeType ? e.ownerDocument || e : b, !0)), D.test(n[1]) && E.isPlainObject(e))
                        for (n in e) y(this[n]) ? this[n](e[n]) : this.attr(n, e[n]);
                    return this
                }
                return (r = b.getElementById(n[2])) && (this[0] = r, this.length = 1), this
            }
            return t.nodeType ? (this[0] = t, this.length = 1, this) : y(t) ? void 0 !== i.ready ? i.ready(t) : t(E) : E.makeArray(t, this)
        }).prototype = E.fn, F = E(b);
        var R = /^(?:parents|prev(?:Until|All))/,
            L = {
                children: !0,
                contents: !0,
                next: !0,
                prev: !0
            };

        function B(t, e) {
            for (;
                (t = t[e]) && 1 !== t.nodeType;);
            return t
        }
        E.fn.extend({
            has: function(t) {
                var e = E(t, this),
                    i = e.length;
                return this.filter((function() {
                    for (var t = 0; t < i; t++)
                        if (E.contains(this, e[t])) return !0
                }))
            },
            closest: function(t, e) {
                var i, n = 0,
                    r = this.length,
                    s = [],
                    a = "string" != typeof t && E(t);
                if (!k.test(t))
                    for (; n < r; n++)
                        for (i = this[n]; i && i !== e; i = i.parentNode)
                            if (i.nodeType < 11 && (a ? a.index(i) > -1 : 1 === i.nodeType && E.find.matchesSelector(i, t))) {
                                s.push(i);
                                break
                            }
                return this.pushStack(s.length > 1 ? E.uniqueSort(s) : s)
            },
            index: function(t) {
                return t ? "string" == typeof t ? c.call(E(t), this[0]) : c.call(this, t.jquery ? t[0] : t) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
            },
            add: function(t, e) {
                return this.pushStack(E.uniqueSort(E.merge(this.get(), E(t, e))))
            },
            addBack: function(t) {
                return this.add(null == t ? this.prevObject : this.prevObject.filter(t))
            }
        }), E.each({
            parent: function(t) {
                var e = t.parentNode;
                return e && 11 !== e.nodeType ? e : null
            },
            parents: function(t) {
                return T(t, "parentNode")
            },
            parentsUntil: function(t, e, i) {
                return T(t, "parentNode", i)
            },
            next: function(t) {
                return B(t, "nextSibling")
            },
            prev: function(t) {
                return B(t, "previousSibling")
            },
            nextAll: function(t) {
                return T(t, "nextSibling")
            },
            prevAll: function(t) {
                return T(t, "previousSibling")
            },
            nextUntil: function(t, e, i) {
                return T(t, "nextSibling", i)
            },
            prevUntil: function(t, e, i) {
                return T(t, "previousSibling", i)
            },
            siblings: function(t) {
                return _((t.parentNode || {}).firstChild, t)
            },
            children: function(t) {
                return _(t.firstChild)
            },
            contents: function(t) {
                return null != t.contentDocument && a(t.contentDocument) ? t.contentDocument : (A(t, "template") && (t = t.content || t), E.merge([], t.childNodes))
            }
        }, (function(t, e) {
            E.fn[t] = function(i, n) {
                var r = E.map(this, e, i);
                return "Until" !== t.slice(-5) && (n = i), n && "string" == typeof n && (r = E.filter(n, r)), this.length > 1 && (L[t] || E.uniqueSort(r), R.test(t) && r.reverse()), this.pushStack(r)
            }
        }));
        var N = /[^\x20\t\r\n\f]+/g;

        function V(t) {
            return t
        }

        function z(t) {
            throw t
        }

        function O(t, e, i, n) {
            var r;
            try {
                t && y(r = t.promise) ? r.call(t).done(e).fail(i) : t && y(r = t.then) ? r.call(t, e, i) : e.apply(void 0, [t].slice(n))
            } catch (t) {
                i.apply(void 0, [t])
            }
        }
        E.Callbacks = function(t) {
            t = "string" == typeof t ? function(t) {
                var e = {};
                return E.each(t.match(N) || [], (function(t, i) {
                    e[i] = !0
                })), e
            }(t) : E.extend({}, t);
            var e, i, n, r, s = [],
                a = [],
                o = -1,
                l = function() {
                    for (r = r || t.once, n = e = !0; a.length; o = -1)
                        for (i = a.shift(); ++o < s.length;) !1 === s[o].apply(i[0], i[1]) && t.stopOnFalse && (o = s.length, i = !1);
                    t.memory || (i = !1), e = !1, r && (s = i ? [] : "")
                },
                h = {
                    add: function() {
                        return s && (i && !e && (o = s.length - 1, a.push(i)), function e(i) {
                            E.each(i, (function(i, n) {
                                y(n) ? t.unique && h.has(n) || s.push(n) : n && n.length && "string" !== S(n) && e(n)
                            }))
                        }(arguments), i && !e && l()), this
                    },
                    remove: function() {
                        return E.each(arguments, (function(t, e) {
                            for (var i;
                                (i = E.inArray(e, s, i)) > -1;) s.splice(i, 1), i <= o && o--
                        })), this
                    },
                    has: function(t) {
                        return t ? E.inArray(t, s) > -1 : s.length > 0
                    },
                    empty: function() {
                        return s && (s = []), this
                    },
                    disable: function() {
                        return r = a = [], s = i = "", this
                    },
                    disabled: function() {
                        return !s
                    },
                    lock: function() {
                        return r = a = [], i || e || (s = i = ""), this
                    },
                    locked: function() {
                        return !!r
                    },
                    fireWith: function(t, i) {
                        return r || (i = [t, (i = i || []).slice ? i.slice() : i], a.push(i), e || l()), this
                    },
                    fire: function() {
                        return h.fireWith(this, arguments), this
                    },
                    fired: function() {
                        return !!n
                    }
                };
            return h
        }, E.extend({
            Deferred: function(t) {
                var e = [
                        ["notify", "progress", E.Callbacks("memory"), E.Callbacks("memory"), 2],
                        ["resolve", "done", E.Callbacks("once memory"), E.Callbacks("once memory"), 0, "resolved"],
                        ["reject", "fail", E.Callbacks("once memory"), E.Callbacks("once memory"), 1, "rejected"]
                    ],
                    n = "pending",
                    r = {
                        state: function() {
                            return n
                        },
                        always: function() {
                            return s.done(arguments).fail(arguments), this
                        },
                        catch: function(t) {
                            return r.then(null, t)
                        },
                        pipe: function() {
                            var t = arguments;
                            return E.Deferred((function(i) {
                                E.each(e, (function(e, n) {
                                    var r = y(t[n[4]]) && t[n[4]];
                                    s[n[1]]((function() {
                                        var t = r && r.apply(this, arguments);
                                        t && y(t.promise) ? t.promise().progress(i.notify).done(i.resolve).fail(i.reject) : i[n[0] + "With"](this, r ? [t] : arguments)
                                    }))
                                })), t = null
                            })).promise()
                        },
                        then: function(t, n, r) {
                            var s = 0;

                            function a(t, e, n, r) {
                                return function() {
                                    var o = this,
                                        l = arguments,
                                        h = function() {
                                            var i, h;
                                            if (!(t < s)) {
                                                if ((i = n.apply(o, l)) === e.promise()) throw new TypeError("Thenable self-resolution");
                                                h = i && ("object" == typeof i || "function" == typeof i) && i.then, y(h) ? r ? h.call(i, a(s, e, V, r), a(s, e, z, r)) : (s++, h.call(i, a(s, e, V, r), a(s, e, z, r), a(s, e, V, e.notifyWith))) : (n !== V && (o = void 0, l = [i]), (r || e.resolveWith)(o, l))
                                            }
                                        },
                                        c = r ? h : function() {
                                            try {
                                                h()
                                            } catch (i) {
                                                E.Deferred.exceptionHook && E.Deferred.exceptionHook(i, c.stackTrace), t + 1 >= s && (n !== z && (o = void 0, l = [i]), e.rejectWith(o, l))
                                            }
                                        };
                                    t ? c() : (E.Deferred.getStackHook && (c.stackTrace = E.Deferred.getStackHook()), i.setTimeout(c))
                                }
                            }
                            return E.Deferred((function(i) {
                                e[0][3].add(a(0, i, y(r) ? r : V, i.notifyWith)), e[1][3].add(a(0, i, y(t) ? t : V)), e[2][3].add(a(0, i, y(n) ? n : z))
                            })).promise()
                        },
                        promise: function(t) {
                            return null != t ? E.extend(t, r) : r
                        }
                    },
                    s = {};
                return E.each(e, (function(t, i) {
                    var a = i[2],
                        o = i[5];
                    r[i[1]] = a.add, o && a.add((function() {
                        n = o
                    }), e[3 - t][2].disable, e[3 - t][3].disable, e[0][2].lock, e[0][3].lock), a.add(i[3].fire), s[i[0]] = function() {
                        return s[i[0] + "With"](this === s ? void 0 : this, arguments), this
                    }, s[i[0] + "With"] = a.fireWith
                })), r.promise(s), t && t.call(s, s), s
            },
            when: function(t) {
                var e = arguments.length,
                    i = e,
                    n = Array(i),
                    r = o.call(arguments),
                    s = E.Deferred(),
                    a = function(t) {
                        return function(i) {
                            n[t] = this, r[t] = arguments.length > 1 ? o.call(arguments) : i, --e || s.resolveWith(n, r)
                        }
                    };
                if (e <= 1 && (O(t, s.done(a(i)).resolve, s.reject, !e), "pending" === s.state() || y(r[i] && r[i].then))) return s.then();
                for (; i--;) O(r[i], a(i), s.reject);
                return s.promise()
            }
        });
        var j = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
        E.Deferred.exceptionHook = function(t, e) {
            i.console && i.console.warn && t && j.test(t.name) && i.console.warn("jQuery.Deferred exception: " + t.message, t.stack, e)
        }, E.readyException = function(t) {
            i.setTimeout((function() {
                throw t
            }))
        };
        var H = E.Deferred();

        function $() {
            b.removeEventListener("DOMContentLoaded", $), i.removeEventListener("load", $), E.ready()
        }
        E.fn.ready = function(t) {
            return H.then(t).catch((function(t) {
                E.readyException(t)
            })), this
        }, E.extend({
            isReady: !1,
            readyWait: 1,
            ready: function(t) {
                (!0 === t ? --E.readyWait : E.isReady) || (E.isReady = !0, !0 !== t && --E.readyWait > 0 || H.resolveWith(b, [E]))
            }
        }), E.ready.then = H.then, "complete" === b.readyState || "loading" !== b.readyState && !b.documentElement.doScroll ? i.setTimeout(E.ready) : (b.addEventListener("DOMContentLoaded", $), i.addEventListener("load", $));
        var q = function(t, e, i, n, r, s, a) {
                var o = 0,
                    l = t.length,
                    h = null == i;
                if ("object" === S(i))
                    for (o in r = !0, i) q(t, e, o, i[o], !0, s, a);
                else if (void 0 !== n && (r = !0, y(n) || (a = !0), h && (a ? (e.call(t, n), e = null) : (h = e, e = function(t, e, i) {
                        return h.call(E(t), i)
                    })), e))
                    for (; o < l; o++) e(t[o], i, a ? n : n.call(t[o], o, e(t[o], i)));
                return r ? t : h ? e.call(t) : l ? e(t[0], i) : s
            },
            G = /^-ms-/,
            W = /-([a-z])/g;

        function X(t, e) {
            return e.toUpperCase()
        }

        function Y(t) {
            return t.replace(G, "ms-").replace(W, X)
        }
        var U = function(t) {
            return 1 === t.nodeType || 9 === t.nodeType || !+t.nodeType
        };

        function Z() {
            this.expando = E.expando + Z.uid++
        }
        Z.uid = 1, Z.prototype = {
            cache: function(t) {
                var e = t[this.expando];
                return e || (e = {}, U(t) && (t.nodeType ? t[this.expando] = e : Object.defineProperty(t, this.expando, {
                    value: e,
                    configurable: !0
                }))), e
            },
            set: function(t, e, i) {
                var n, r = this.cache(t);
                if ("string" == typeof e) r[Y(e)] = i;
                else
                    for (n in e) r[Y(n)] = e[n];
                return r
            },
            get: function(t, e) {
                return void 0 === e ? this.cache(t) : t[this.expando] && t[this.expando][Y(e)]
            },
            access: function(t, e, i) {
                return void 0 === e || e && "string" == typeof e && void 0 === i ? this.get(t, e) : (this.set(t, e, i), void 0 !== i ? i : e)
            },
            remove: function(t, e) {
                var i, n = t[this.expando];
                if (void 0 !== n) {
                    if (void 0 !== e) {
                        i = (e = Array.isArray(e) ? e.map(Y) : (e = Y(e)) in n ? [e] : e.match(N) || []).length;
                        for (; i--;) delete n[e[i]]
                    }(void 0 === e || E.isEmptyObject(n)) && (t.nodeType ? t[this.expando] = void 0 : delete t[this.expando])
                }
            },
            hasData: function(t) {
                var e = t[this.expando];
                return void 0 !== e && !E.isEmptyObject(e)
            }
        };
        var K = new Z,
            J = new Z,
            Q = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
            tt = /[A-Z]/g;

        function et(t, e, i) {
            var n;
            if (void 0 === i && 1 === t.nodeType)
                if (n = "data-" + e.replace(tt, "-$&").toLowerCase(), "string" == typeof(i = t.getAttribute(n))) {
                    try {
                        i = function(t) {
                            return "true" === t || "false" !== t && ("null" === t ? null : t === +t + "" ? +t : Q.test(t) ? JSON.parse(t) : t)
                        }(i)
                    } catch (t) {}
                    J.set(t, e, i)
                } else i = void 0;
            return i
        }
        E.extend({
            hasData: function(t) {
                return J.hasData(t) || K.hasData(t)
            },
            data: function(t, e, i) {
                return J.access(t, e, i)
            },
            removeData: function(t, e) {
                J.remove(t, e)
            },
            _data: function(t, e, i) {
                return K.access(t, e, i)
            },
            _removeData: function(t, e) {
                K.remove(t, e)
            }
        }), E.fn.extend({
            data: function(t, e) {
                var i, n, r, s = this[0],
                    a = s && s.attributes;
                if (void 0 === t) {
                    if (this.length && (r = J.get(s), 1 === s.nodeType && !K.get(s, "hasDataAttrs"))) {
                        for (i = a.length; i--;) a[i] && 0 === (n = a[i].name).indexOf("data-") && (n = Y(n.slice(5)), et(s, n, r[n]));
                        K.set(s, "hasDataAttrs", !0)
                    }
                    return r
                }
                return "object" == typeof t ? this.each((function() {
                    J.set(this, t)
                })) : q(this, (function(e) {
                    var i;
                    if (s && void 0 === e) return void 0 !== (i = J.get(s, t)) || void 0 !== (i = et(s, t)) ? i : void 0;
                    this.each((function() {
                        J.set(this, t, e)
                    }))
                }), null, e, arguments.length > 1, null, !0)
            },
            removeData: function(t) {
                return this.each((function() {
                    J.remove(this, t)
                }))
            }
        }), E.extend({
            queue: function(t, e, i) {
                var n;
                if (t) return e = (e || "fx") + "queue", n = K.get(t, e), i && (!n || Array.isArray(i) ? n = K.access(t, e, E.makeArray(i)) : n.push(i)), n || []
            },
            dequeue: function(t, e) {
                e = e || "fx";
                var i = E.queue(t, e),
                    n = i.length,
                    r = i.shift(),
                    s = E._queueHooks(t, e);
                "inprogress" === r && (r = i.shift(), n--), r && ("fx" === e && i.unshift("inprogress"), delete s.stop, r.call(t, (function() {
                    E.dequeue(t, e)
                }), s)), !n && s && s.empty.fire()
            },
            _queueHooks: function(t, e) {
                var i = e + "queueHooks";
                return K.get(t, i) || K.access(t, i, {
                    empty: E.Callbacks("once memory").add((function() {
                        K.remove(t, [e + "queue", i])
                    }))
                })
            }
        }), E.fn.extend({
            queue: function(t, e) {
                var i = 2;
                return "string" != typeof t && (e = t, t = "fx", i--), arguments.length < i ? E.queue(this[0], t) : void 0 === e ? this : this.each((function() {
                    var i = E.queue(this, t, e);
                    E._queueHooks(this, t), "fx" === t && "inprogress" !== i[0] && E.dequeue(this, t)
                }))
            },
            dequeue: function(t) {
                return this.each((function() {
                    E.dequeue(this, t)
                }))
            },
            clearQueue: function(t) {
                return this.queue(t || "fx", [])
            },
            promise: function(t, e) {
                var i, n = 1,
                    r = E.Deferred(),
                    s = this,
                    a = this.length,
                    o = function() {
                        --n || r.resolveWith(s, [s])
                    };
                for ("string" != typeof t && (e = t, t = void 0), t = t || "fx"; a--;)(i = K.get(s[a], t + "queueHooks")) && i.empty && (n++, i.empty.add(o));
                return o(), r.promise(e)
            }
        });
        var it = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
            nt = new RegExp("^(?:([+-])=|)(" + it + ")([a-z%]*)$", "i"),
            rt = ["Top", "Right", "Bottom", "Left"],
            st = b.documentElement,
            at = function(t) {
                return E.contains(t.ownerDocument, t)
            },
            ot = {
                composed: !0
            };
        st.getRootNode && (at = function(t) {
            return E.contains(t.ownerDocument, t) || t.getRootNode(ot) === t.ownerDocument
        });
        var lt = function(t, e) {
            return "none" === (t = e || t).style.display || "" === t.style.display && at(t) && "none" === E.css(t, "display")
        };

        function ht(t, e, i, n) {
            var r, s, a = 20,
                o = n ? function() {
                    return n.cur()
                } : function() {
                    return E.css(t, e, "")
                },
                l = o(),
                h = i && i[3] || (E.cssNumber[e] ? "" : "px"),
                c = t.nodeType && (E.cssNumber[e] || "px" !== h && +l) && nt.exec(E.css(t, e));
            if (c && c[3] !== h) {
                for (l /= 2, h = h || c[3], c = +l || 1; a--;) E.style(t, e, c + h), (1 - s) * (1 - (s = o() / l || .5)) <= 0 && (a = 0), c /= s;
                c *= 2, E.style(t, e, c + h), i = i || []
            }
            return i && (c = +c || +l || 0, r = i[1] ? c + (i[1] + 1) * i[2] : +i[2], n && (n.unit = h, n.start = c, n.end = r)), r
        }
        var ct = {};

        function pt(t) {
            var e, i = t.ownerDocument,
                n = t.nodeName,
                r = ct[n];
            return r || (e = i.body.appendChild(i.createElement(n)), r = E.css(e, "display"), e.parentNode.removeChild(e), "none" === r && (r = "block"), ct[n] = r, r)
        }

        function ft(t, e) {
            for (var i, n, r = [], s = 0, a = t.length; s < a; s++)(n = t[s]).style && (i = n.style.display, e ? ("none" === i && (r[s] = K.get(n, "display") || null, r[s] || (n.style.display = "")), "" === n.style.display && lt(n) && (r[s] = pt(n))) : "none" !== i && (r[s] = "none", K.set(n, "display", i)));
            for (s = 0; s < a; s++) null != r[s] && (t[s].style.display = r[s]);
            return t
        }
        E.fn.extend({
            show: function() {
                return ft(this, !0)
            },
            hide: function() {
                return ft(this)
            },
            toggle: function(t) {
                return "boolean" == typeof t ? t ? this.show() : this.hide() : this.each((function() {
                    lt(this) ? E(this).show() : E(this).hide()
                }))
            }
        });
        var dt, ut, mt = /^(?:checkbox|radio)$/i,
            gt = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i,
            yt = /^$|^module$|\/(?:java|ecma)script/i;
        dt = b.createDocumentFragment().appendChild(b.createElement("div")), (ut = b.createElement("input")).setAttribute("type", "radio"), ut.setAttribute("checked", "checked"), ut.setAttribute("name", "t"), dt.appendChild(ut), g.checkClone = dt.cloneNode(!0).cloneNode(!0).lastChild.checked, dt.innerHTML = "<textarea>x</textarea>", g.noCloneChecked = !!dt.cloneNode(!0).lastChild.defaultValue, dt.innerHTML = "<option></option>", g.option = !!dt.lastChild;
        var vt = {
            thead: [1, "<table>", "</table>"],
            col: [2, "<table><colgroup>", "</colgroup></table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: [0, "", ""]
        };

        function bt(t, e) {
            var i;
            return i = void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e || "*") : void 0 !== t.querySelectorAll ? t.querySelectorAll(e || "*") : [], void 0 === e || e && A(t, e) ? E.merge([t], i) : i
        }

        function xt(t, e) {
            for (var i = 0, n = t.length; i < n; i++) K.set(t[i], "globalEval", !e || K.get(e[i], "globalEval"))
        }
        vt.tbody = vt.tfoot = vt.colgroup = vt.caption = vt.thead, vt.th = vt.td, g.option || (vt.optgroup = vt.option = [1, "<select multiple='multiple'>", "</select>"]);
        var wt = /<|&#?\w+;/;

        function St(t, e, i, n, r) {
            for (var s, a, o, l, h, c, p = e.createDocumentFragment(), f = [], d = 0, u = t.length; d < u; d++)
                if ((s = t[d]) || 0 === s)
                    if ("object" === S(s)) E.merge(f, s.nodeType ? [s] : s);
                    else if (wt.test(s)) {
                for (a = a || p.appendChild(e.createElement("div")), o = (gt.exec(s) || ["", ""])[1].toLowerCase(), l = vt[o] || vt._default, a.innerHTML = l[1] + E.htmlPrefilter(s) + l[2], c = l[0]; c--;) a = a.lastChild;
                E.merge(f, a.childNodes), (a = p.firstChild).textContent = ""
            } else f.push(e.createTextNode(s));
            for (p.textContent = "", d = 0; s = f[d++];)
                if (n && E.inArray(s, n) > -1) r && r.push(s);
                else if (h = at(s), a = bt(p.appendChild(s), "script"), h && xt(a), i)
                for (c = 0; s = a[c++];) yt.test(s.type || "") && i.push(s);
            return p
        }
        var Et = /^key/,
            Ct = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
            Pt = /^([^.]*)(?:\.(.+)|)/;

        function Tt() {
            return !0
        }

        function _t() {
            return !1
        }

        function kt(t, e) {
            return t === function() {
                try {
                    return b.activeElement
                } catch (t) {}
            }() == ("focus" === e)
        }

        function At(t, e, i, n, r, s) {
            var a, o;
            if ("object" == typeof e) {
                for (o in "string" != typeof i && (n = n || i, i = void 0), e) At(t, o, i, n, e[o], s);
                return t
            }
            if (null == n && null == r ? (r = i, n = i = void 0) : null == r && ("string" == typeof i ? (r = n, n = void 0) : (r = n, n = i, i = void 0)), !1 === r) r = _t;
            else if (!r) return t;
            return 1 === s && (a = r, (r = function(t) {
                return E().off(t), a.apply(this, arguments)
            }).guid = a.guid || (a.guid = E.guid++)), t.each((function() {
                E.event.add(this, e, r, n, i)
            }))
        }

        function Dt(t, e, i) {
            i ? (K.set(t, e, !1), E.event.add(t, e, {
                namespace: !1,
                handler: function(t) {
                    var n, r, s = K.get(this, e);
                    if (1 & t.isTrigger && this[e]) {
                        if (s.length)(E.event.special[e] || {}).delegateType && t.stopPropagation();
                        else if (s = o.call(arguments), K.set(this, e, s), n = i(this, e), this[e](), s !== (r = K.get(this, e)) || n ? K.set(this, e, !1) : r = {}, s !== r) return t.stopImmediatePropagation(), t.preventDefault(), r.value
                    } else s.length && (K.set(this, e, {
                        value: E.event.trigger(E.extend(s[0], E.Event.prototype), s.slice(1), this)
                    }), t.stopImmediatePropagation())
                }
            })) : void 0 === K.get(t, e) && E.event.add(t, e, Tt)
        }
        E.event = {
            global: {},
            add: function(t, e, i, n, r) {
                var s, a, o, l, h, c, p, f, d, u, m, g = K.get(t);
                if (U(t))
                    for (i.handler && (i = (s = i).handler, r = s.selector), r && E.find.matchesSelector(st, r), i.guid || (i.guid = E.guid++), (l = g.events) || (l = g.events = Object.create(null)), (a = g.handle) || (a = g.handle = function(e) {
                            return void 0 !== E && E.event.triggered !== e.type ? E.event.dispatch.apply(t, arguments) : void 0
                        }), h = (e = (e || "").match(N) || [""]).length; h--;) d = m = (o = Pt.exec(e[h]) || [])[1], u = (o[2] || "").split(".").sort(), d && (p = E.event.special[d] || {}, d = (r ? p.delegateType : p.bindType) || d, p = E.event.special[d] || {}, c = E.extend({
                        type: d,
                        origType: m,
                        data: n,
                        handler: i,
                        guid: i.guid,
                        selector: r,
                        needsContext: r && E.expr.match.needsContext.test(r),
                        namespace: u.join(".")
                    }, s), (f = l[d]) || ((f = l[d] = []).delegateCount = 0, p.setup && !1 !== p.setup.call(t, n, u, a) || t.addEventListener && t.addEventListener(d, a)), p.add && (p.add.call(t, c), c.handler.guid || (c.handler.guid = i.guid)), r ? f.splice(f.delegateCount++, 0, c) : f.push(c), E.event.global[d] = !0)
            },
            remove: function(t, e, i, n, r) {
                var s, a, o, l, h, c, p, f, d, u, m, g = K.hasData(t) && K.get(t);
                if (g && (l = g.events)) {
                    for (h = (e = (e || "").match(N) || [""]).length; h--;)
                        if (d = m = (o = Pt.exec(e[h]) || [])[1], u = (o[2] || "").split(".").sort(), d) {
                            for (p = E.event.special[d] || {}, f = l[d = (n ? p.delegateType : p.bindType) || d] || [], o = o[2] && new RegExp("(^|\\.)" + u.join("\\.(?:.*\\.|)") + "(\\.|$)"), a = s = f.length; s--;) c = f[s], !r && m !== c.origType || i && i.guid !== c.guid || o && !o.test(c.namespace) || n && n !== c.selector && ("**" !== n || !c.selector) || (f.splice(s, 1), c.selector && f.delegateCount--, p.remove && p.remove.call(t, c));
                            a && !f.length && (p.teardown && !1 !== p.teardown.call(t, u, g.handle) || E.removeEvent(t, d, g.handle), delete l[d])
                        } else
                            for (d in l) E.event.remove(t, d + e[h], i, n, !0);
                    E.isEmptyObject(l) && K.remove(t, "handle events")
                }
            },
            dispatch: function(t) {
                var e, i, n, r, s, a, o = new Array(arguments.length),
                    l = E.event.fix(t),
                    h = (K.get(this, "events") || Object.create(null))[l.type] || [],
                    c = E.event.special[l.type] || {};
                for (o[0] = l, e = 1; e < arguments.length; e++) o[e] = arguments[e];
                if (l.delegateTarget = this, !c.preDispatch || !1 !== c.preDispatch.call(this, l)) {
                    for (a = E.event.handlers.call(this, l, h), e = 0;
                        (r = a[e++]) && !l.isPropagationStopped();)
                        for (l.currentTarget = r.elem, i = 0;
                            (s = r.handlers[i++]) && !l.isImmediatePropagationStopped();) l.rnamespace && !1 !== s.namespace && !l.rnamespace.test(s.namespace) || (l.handleObj = s, l.data = s.data, void 0 !== (n = ((E.event.special[s.origType] || {}).handle || s.handler).apply(r.elem, o)) && !1 === (l.result = n) && (l.preventDefault(), l.stopPropagation()));
                    return c.postDispatch && c.postDispatch.call(this, l), l.result
                }
            },
            handlers: function(t, e) {
                var i, n, r, s, a, o = [],
                    l = e.delegateCount,
                    h = t.target;
                if (l && h.nodeType && !("click" === t.type && t.button >= 1))
                    for (; h !== this; h = h.parentNode || this)
                        if (1 === h.nodeType && ("click" !== t.type || !0 !== h.disabled)) {
                            for (s = [], a = {}, i = 0; i < l; i++) void 0 === a[r = (n = e[i]).selector + " "] && (a[r] = n.needsContext ? E(r, this).index(h) > -1 : E.find(r, this, null, [h]).length), a[r] && s.push(n);
                            s.length && o.push({
                                elem: h,
                                handlers: s
                            })
                        }
                return h = this, l < e.length && o.push({
                    elem: h,
                    handlers: e.slice(l)
                }), o
            },
            addProp: function(t, e) {
                Object.defineProperty(E.Event.prototype, t, {
                    enumerable: !0,
                    configurable: !0,
                    get: y(e) ? function() {
                        if (this.originalEvent) return e(this.originalEvent)
                    } : function() {
                        if (this.originalEvent) return this.originalEvent[t]
                    },
                    set: function(e) {
                        Object.defineProperty(this, t, {
                            enumerable: !0,
                            configurable: !0,
                            writable: !0,
                            value: e
                        })
                    }
                })
            },
            fix: function(t) {
                return t[E.expando] ? t : new E.Event(t)
            },
            special: {
                load: {
                    noBubble: !0
                },
                click: {
                    setup: function(t) {
                        var e = this || t;
                        return mt.test(e.type) && e.click && A(e, "input") && Dt(e, "click", Tt), !1
                    },
                    trigger: function(t) {
                        var e = this || t;
                        return mt.test(e.type) && e.click && A(e, "input") && Dt(e, "click"), !0
                    },
                    _default: function(t) {
                        var e = t.target;
                        return mt.test(e.type) && e.click && A(e, "input") && K.get(e, "click") || A(e, "a")
                    }
                },
                beforeunload: {
                    postDispatch: function(t) {
                        void 0 !== t.result && t.originalEvent && (t.originalEvent.returnValue = t.result)
                    }
                }
            }
        }, E.removeEvent = function(t, e, i) {
            t.removeEventListener && t.removeEventListener(e, i)
        }, E.Event = function(t, e) {
            if (!(this instanceof E.Event)) return new E.Event(t, e);
            t && t.type ? (this.originalEvent = t, this.type = t.type, this.isDefaultPrevented = t.defaultPrevented || void 0 === t.defaultPrevented && !1 === t.returnValue ? Tt : _t, this.target = t.target && 3 === t.target.nodeType ? t.target.parentNode : t.target, this.currentTarget = t.currentTarget, this.relatedTarget = t.relatedTarget) : this.type = t, e && E.extend(this, e), this.timeStamp = t && t.timeStamp || Date.now(), this[E.expando] = !0
        }, E.Event.prototype = {
            constructor: E.Event,
            isDefaultPrevented: _t,
            isPropagationStopped: _t,
            isImmediatePropagationStopped: _t,
            isSimulated: !1,
            preventDefault: function() {
                var t = this.originalEvent;
                this.isDefaultPrevented = Tt, t && !this.isSimulated && t.preventDefault()
            },
            stopPropagation: function() {
                var t = this.originalEvent;
                this.isPropagationStopped = Tt, t && !this.isSimulated && t.stopPropagation()
            },
            stopImmediatePropagation: function() {
                var t = this.originalEvent;
                this.isImmediatePropagationStopped = Tt, t && !this.isSimulated && t.stopImmediatePropagation(), this.stopPropagation()
            }
        }, E.each({
            altKey: !0,
            bubbles: !0,
            cancelable: !0,
            changedTouches: !0,
            ctrlKey: !0,
            detail: !0,
            eventPhase: !0,
            metaKey: !0,
            pageX: !0,
            pageY: !0,
            shiftKey: !0,
            view: !0,
            char: !0,
            code: !0,
            charCode: !0,
            key: !0,
            keyCode: !0,
            button: !0,
            buttons: !0,
            clientX: !0,
            clientY: !0,
            offsetX: !0,
            offsetY: !0,
            pointerId: !0,
            pointerType: !0,
            screenX: !0,
            screenY: !0,
            targetTouches: !0,
            toElement: !0,
            touches: !0,
            which: function(t) {
                var e = t.button;
                return null == t.which && Et.test(t.type) ? null != t.charCode ? t.charCode : t.keyCode : !t.which && void 0 !== e && Ct.test(t.type) ? 1 & e ? 1 : 2 & e ? 3 : 4 & e ? 2 : 0 : t.which
            }
        }, E.event.addProp), E.each({
            focus: "focusin",
            blur: "focusout"
        }, (function(t, e) {
            E.event.special[t] = {
                setup: function() {
                    return Dt(this, t, kt), !1
                },
                trigger: function() {
                    return Dt(this, t), !0
                },
                delegateType: e
            }
        })), E.each({
            mouseenter: "mouseover",
            mouseleave: "mouseout",
            pointerenter: "pointerover",
            pointerleave: "pointerout"
        }, (function(t, e) {
            E.event.special[t] = {
                delegateType: e,
                bindType: e,
                handle: function(t) {
                    var i, n = this,
                        r = t.relatedTarget,
                        s = t.handleObj;
                    return r && (r === n || E.contains(n, r)) || (t.type = s.origType, i = s.handler.apply(this, arguments), t.type = e), i
                }
            }
        })), E.fn.extend({
            on: function(t, e, i, n) {
                return At(this, t, e, i, n)
            },
            one: function(t, e, i, n) {
                return At(this, t, e, i, n, 1)
            },
            off: function(t, e, i) {
                var n, r;
                if (t && t.preventDefault && t.handleObj) return n = t.handleObj, E(t.delegateTarget).off(n.namespace ? n.origType + "." + n.namespace : n.origType, n.selector, n.handler), this;
                if ("object" == typeof t) {
                    for (r in t) this.off(r, e, t[r]);
                    return this
                }
                return !1 !== e && "function" != typeof e || (i = e, e = void 0), !1 === i && (i = _t), this.each((function() {
                    E.event.remove(this, t, i, e)
                }))
            }
        });
        var Mt = /<script|<style|<link/i,
            Ft = /checked\s*(?:[^=]|=\s*.checked.)/i,
            It = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

        function Rt(t, e) {
            return A(t, "table") && A(11 !== e.nodeType ? e : e.firstChild, "tr") && E(t).children("tbody")[0] || t
        }

        function Lt(t) {
            return t.type = (null !== t.getAttribute("type")) + "/" + t.type, t
        }

        function Bt(t) {
            return "true/" === (t.type || "").slice(0, 5) ? t.type = t.type.slice(5) : t.removeAttribute("type"), t
        }

        function Nt(t, e) {
            var i, n, r, s, a, o;
            if (1 === e.nodeType) {
                if (K.hasData(t) && (o = K.get(t).events))
                    for (r in K.remove(e, "handle events"), o)
                        for (i = 0, n = o[r].length; i < n; i++) E.event.add(e, r, o[r][i]);
                J.hasData(t) && (s = J.access(t), a = E.extend({}, s), J.set(e, a))
            }
        }

        function Vt(t, e) {
            var i = e.nodeName.toLowerCase();
            "input" === i && mt.test(t.type) ? e.checked = t.checked : "input" !== i && "textarea" !== i || (e.defaultValue = t.defaultValue)
        }

        function zt(t, e, i, n) {
            e = l(e);
            var r, s, a, o, h, c, p = 0,
                f = t.length,
                d = f - 1,
                u = e[0],
                m = y(u);
            if (m || f > 1 && "string" == typeof u && !g.checkClone && Ft.test(u)) return t.each((function(r) {
                var s = t.eq(r);
                m && (e[0] = u.call(this, r, s.html())), zt(s, e, i, n)
            }));
            if (f && (s = (r = St(e, t[0].ownerDocument, !1, t, n)).firstChild, 1 === r.childNodes.length && (r = s), s || n)) {
                for (o = (a = E.map(bt(r, "script"), Lt)).length; p < f; p++) h = r, p !== d && (h = E.clone(h, !0, !0), o && E.merge(a, bt(h, "script"))), i.call(t[p], h, p);
                if (o)
                    for (c = a[a.length - 1].ownerDocument, E.map(a, Bt), p = 0; p < o; p++) h = a[p], yt.test(h.type || "") && !K.access(h, "globalEval") && E.contains(c, h) && (h.src && "module" !== (h.type || "").toLowerCase() ? E._evalUrl && !h.noModule && E._evalUrl(h.src, {
                        nonce: h.nonce || h.getAttribute("nonce")
                    }, c) : w(h.textContent.replace(It, ""), h, c))
            }
            return t
        }

        function Ot(t, e, i) {
            for (var n, r = e ? E.filter(e, t) : t, s = 0; null != (n = r[s]); s++) i || 1 !== n.nodeType || E.cleanData(bt(n)), n.parentNode && (i && at(n) && xt(bt(n, "script")), n.parentNode.removeChild(n));
            return t
        }
        E.extend({
            htmlPrefilter: function(t) {
                return t
            },
            clone: function(t, e, i) {
                var n, r, s, a, o = t.cloneNode(!0),
                    l = at(t);
                if (!(g.noCloneChecked || 1 !== t.nodeType && 11 !== t.nodeType || E.isXMLDoc(t)))
                    for (a = bt(o), n = 0, r = (s = bt(t)).length; n < r; n++) Vt(s[n], a[n]);
                if (e)
                    if (i)
                        for (s = s || bt(t), a = a || bt(o), n = 0, r = s.length; n < r; n++) Nt(s[n], a[n]);
                    else Nt(t, o);
                return (a = bt(o, "script")).length > 0 && xt(a, !l && bt(t, "script")), o
            },
            cleanData: function(t) {
                for (var e, i, n, r = E.event.special, s = 0; void 0 !== (i = t[s]); s++)
                    if (U(i)) {
                        if (e = i[K.expando]) {
                            if (e.events)
                                for (n in e.events) r[n] ? E.event.remove(i, n) : E.removeEvent(i, n, e.handle);
                            i[K.expando] = void 0
                        }
                        i[J.expando] && (i[J.expando] = void 0)
                    }
            }
        }), E.fn.extend({
            detach: function(t) {
                return Ot(this, t, !0)
            },
            remove: function(t) {
                return Ot(this, t)
            },
            text: function(t) {
                return q(this, (function(t) {
                    return void 0 === t ? E.text(this) : this.empty().each((function() {
                        1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = t)
                    }))
                }), null, t, arguments.length)
            },
            append: function() {
                return zt(this, arguments, (function(t) {
                    1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || Rt(this, t).appendChild(t)
                }))
            },
            prepend: function() {
                return zt(this, arguments, (function(t) {
                    if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                        var e = Rt(this, t);
                        e.insertBefore(t, e.firstChild)
                    }
                }))
            },
            before: function() {
                return zt(this, arguments, (function(t) {
                    this.parentNode && this.parentNode.insertBefore(t, this)
                }))
            },
            after: function() {
                return zt(this, arguments, (function(t) {
                    this.parentNode && this.parentNode.insertBefore(t, this.nextSibling)
                }))
            },
            empty: function() {
                for (var t, e = 0; null != (t = this[e]); e++) 1 === t.nodeType && (E.cleanData(bt(t, !1)), t.textContent = "");
                return this
            },
            clone: function(t, e) {
                return t = null != t && t, e = null == e ? t : e, this.map((function() {
                    return E.clone(this, t, e)
                }))
            },
            html: function(t) {
                return q(this, (function(t) {
                    var e = this[0] || {},
                        i = 0,
                        n = this.length;
                    if (void 0 === t && 1 === e.nodeType) return e.innerHTML;
                    if ("string" == typeof t && !Mt.test(t) && !vt[(gt.exec(t) || ["", ""])[1].toLowerCase()]) {
                        t = E.htmlPrefilter(t);
                        try {
                            for (; i < n; i++) 1 === (e = this[i] || {}).nodeType && (E.cleanData(bt(e, !1)), e.innerHTML = t);
                            e = 0
                        } catch (t) {}
                    }
                    e && this.empty().append(t)
                }), null, t, arguments.length)
            },
            replaceWith: function() {
                var t = [];
                return zt(this, arguments, (function(e) {
                    var i = this.parentNode;
                    E.inArray(this, t) < 0 && (E.cleanData(bt(this)), i && i.replaceChild(e, this))
                }), t)
            }
        }), E.each({
            appendTo: "append",
            prependTo: "prepend",
            insertBefore: "before",
            insertAfter: "after",
            replaceAll: "replaceWith"
        }, (function(t, e) {
            E.fn[t] = function(t) {
                for (var i, n = [], r = E(t), s = r.length - 1, a = 0; a <= s; a++) i = a === s ? this : this.clone(!0), E(r[a])[e](i), h.apply(n, i.get());
                return this.pushStack(n)
            }
        }));
        var jt = new RegExp("^(" + it + ")(?!px)[a-z%]+$", "i"),
            Ht = function(t) {
                var e = t.ownerDocument.defaultView;
                return e && e.opener || (e = i), e.getComputedStyle(t)
            },
            $t = function(t, e, i) {
                var n, r, s = {};
                for (r in e) s[r] = t.style[r], t.style[r] = e[r];
                for (r in n = i.call(t), e) t.style[r] = s[r];
                return n
            },
            qt = new RegExp(rt.join("|"), "i");

        function Gt(t, e, i) {
            var n, r, s, a, o = t.style;
            return (i = i || Ht(t)) && ("" !== (a = i.getPropertyValue(e) || i[e]) || at(t) || (a = E.style(t, e)), !g.pixelBoxStyles() && jt.test(a) && qt.test(e) && (n = o.width, r = o.minWidth, s = o.maxWidth, o.minWidth = o.maxWidth = o.width = a, a = i.width, o.width = n, o.minWidth = r, o.maxWidth = s)), void 0 !== a ? a + "" : a
        }

        function Wt(t, e) {
            return {
                get: function() {
                    if (!t()) return (this.get = e).apply(this, arguments);
                    delete this.get
                }
            }
        }! function() {
            function t() {
                if (c) {
                    h.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0", c.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%", st.appendChild(h).appendChild(c);
                    var t = i.getComputedStyle(c);
                    n = "1%" !== t.top, l = 12 === e(t.marginLeft), c.style.right = "60%", a = 36 === e(t.right), r = 36 === e(t.width), c.style.position = "absolute", s = 12 === e(c.offsetWidth / 3), st.removeChild(h), c = null
                }
            }

            function e(t) {
                return Math.round(parseFloat(t))
            }
            var n, r, s, a, o, l, h = b.createElement("div"),
                c = b.createElement("div");
            c.style && (c.style.backgroundClip = "content-box", c.cloneNode(!0).style.backgroundClip = "", g.clearCloneStyle = "content-box" === c.style.backgroundClip, E.extend(g, {
                boxSizingReliable: function() {
                    return t(), r
                },
                pixelBoxStyles: function() {
                    return t(), a
                },
                pixelPosition: function() {
                    return t(), n
                },
                reliableMarginLeft: function() {
                    return t(), l
                },
                scrollboxSize: function() {
                    return t(), s
                },
                reliableTrDimensions: function() {
                    var t, e, n, r;
                    return null == o && (t = b.createElement("table"), e = b.createElement("tr"), n = b.createElement("div"), t.style.cssText = "position:absolute;left:-11111px", e.style.height = "1px", n.style.height = "9px", st.appendChild(t).appendChild(e).appendChild(n), r = i.getComputedStyle(e), o = parseInt(r.height) > 3, st.removeChild(t)), o
                }
            }))
        }();
        var Xt = ["Webkit", "Moz", "ms"],
            Yt = b.createElement("div").style,
            Ut = {};

        function Zt(t) {
            var e = E.cssProps[t] || Ut[t];
            return e || (t in Yt ? t : Ut[t] = function(t) {
                for (var e = t[0].toUpperCase() + t.slice(1), i = Xt.length; i--;)
                    if ((t = Xt[i] + e) in Yt) return t
            }(t) || t)
        }
        var Kt = /^(none|table(?!-c[ea]).+)/,
            Jt = /^--/,
            Qt = {
                position: "absolute",
                visibility: "hidden",
                display: "block"
            },
            te = {
                letterSpacing: "0",
                fontWeight: "400"
            };

        function ee(t, e, i) {
            var n = nt.exec(e);
            return n ? Math.max(0, n[2] - (i || 0)) + (n[3] || "px") : e
        }

        function ie(t, e, i, n, r, s) {
            var a = "width" === e ? 1 : 0,
                o = 0,
                l = 0;
            if (i === (n ? "border" : "content")) return 0;
            for (; a < 4; a += 2) "margin" === i && (l += E.css(t, i + rt[a], !0, r)), n ? ("content" === i && (l -= E.css(t, "padding" + rt[a], !0, r)), "margin" !== i && (l -= E.css(t, "border" + rt[a] + "Width", !0, r))) : (l += E.css(t, "padding" + rt[a], !0, r), "padding" !== i ? l += E.css(t, "border" + rt[a] + "Width", !0, r) : o += E.css(t, "border" + rt[a] + "Width", !0, r));
            return !n && s >= 0 && (l += Math.max(0, Math.ceil(t["offset" + e[0].toUpperCase() + e.slice(1)] - s - l - o - .5)) || 0), l
        }

        function ne(t, e, i) {
            var n = Ht(t),
                r = (!g.boxSizingReliable() || i) && "border-box" === E.css(t, "boxSizing", !1, n),
                s = r,
                a = Gt(t, e, n),
                o = "offset" + e[0].toUpperCase() + e.slice(1);
            if (jt.test(a)) {
                if (!i) return a;
                a = "auto"
            }
            return (!g.boxSizingReliable() && r || !g.reliableTrDimensions() && A(t, "tr") || "auto" === a || !parseFloat(a) && "inline" === E.css(t, "display", !1, n)) && t.getClientRects().length && (r = "border-box" === E.css(t, "boxSizing", !1, n), (s = o in t) && (a = t[o])), (a = parseFloat(a) || 0) + ie(t, e, i || (r ? "border" : "content"), s, n, a) + "px"
        }

        function re(t, e, i, n, r) {
            return new re.prototype.init(t, e, i, n, r)
        }
        E.extend({
            cssHooks: {
                opacity: {
                    get: function(t, e) {
                        if (e) {
                            var i = Gt(t, "opacity");
                            return "" === i ? "1" : i
                        }
                    }
                }
            },
            cssNumber: {
                animationIterationCount: !0,
                columnCount: !0,
                fillOpacity: !0,
                flexGrow: !0,
                flexShrink: !0,
                fontWeight: !0,
                gridArea: !0,
                gridColumn: !0,
                gridColumnEnd: !0,
                gridColumnStart: !0,
                gridRow: !0,
                gridRowEnd: !0,
                gridRowStart: !0,
                lineHeight: !0,
                opacity: !0,
                order: !0,
                orphans: !0,
                widows: !0,
                zIndex: !0,
                zoom: !0
            },
            cssProps: {},
            style: function(t, e, i, n) {
                if (t && 3 !== t.nodeType && 8 !== t.nodeType && t.style) {
                    var r, s, a, o = Y(e),
                        l = Jt.test(e),
                        h = t.style;
                    if (l || (e = Zt(o)), a = E.cssHooks[e] || E.cssHooks[o], void 0 === i) return a && "get" in a && void 0 !== (r = a.get(t, !1, n)) ? r : h[e];
                    "string" === (s = typeof i) && (r = nt.exec(i)) && r[1] && (i = ht(t, e, r), s = "number"), null != i && i == i && ("number" !== s || l || (i += r && r[3] || (E.cssNumber[o] ? "" : "px")), g.clearCloneStyle || "" !== i || 0 !== e.indexOf("background") || (h[e] = "inherit"), a && "set" in a && void 0 === (i = a.set(t, i, n)) || (l ? h.setProperty(e, i) : h[e] = i))
                }
            },
            css: function(t, e, i, n) {
                var r, s, a, o = Y(e);
                return Jt.test(e) || (e = Zt(o)), (a = E.cssHooks[e] || E.cssHooks[o]) && "get" in a && (r = a.get(t, !0, i)), void 0 === r && (r = Gt(t, e, n)), "normal" === r && e in te && (r = te[e]), "" === i || i ? (s = parseFloat(r), !0 === i || isFinite(s) ? s || 0 : r) : r
            }
        }), E.each(["height", "width"], (function(t, e) {
            E.cssHooks[e] = {
                get: function(t, i, n) {
                    if (i) return !Kt.test(E.css(t, "display")) || t.getClientRects().length && t.getBoundingClientRect().width ? ne(t, e, n) : $t(t, Qt, (function() {
                        return ne(t, e, n)
                    }))
                },
                set: function(t, i, n) {
                    var r, s = Ht(t),
                        a = !g.scrollboxSize() && "absolute" === s.position,
                        o = (a || n) && "border-box" === E.css(t, "boxSizing", !1, s),
                        l = n ? ie(t, e, n, o, s) : 0;
                    return o && a && (l -= Math.ceil(t["offset" + e[0].toUpperCase() + e.slice(1)] - parseFloat(s[e]) - ie(t, e, "border", !1, s) - .5)), l && (r = nt.exec(i)) && "px" !== (r[3] || "px") && (t.style[e] = i, i = E.css(t, e)), ee(0, i, l)
                }
            }
        })), E.cssHooks.marginLeft = Wt(g.reliableMarginLeft, (function(t, e) {
            if (e) return (parseFloat(Gt(t, "marginLeft")) || t.getBoundingClientRect().left - $t(t, {
                marginLeft: 0
            }, (function() {
                return t.getBoundingClientRect().left
            }))) + "px"
        })), E.each({
            margin: "",
            padding: "",
            border: "Width"
        }, (function(t, e) {
            E.cssHooks[t + e] = {
                expand: function(i) {
                    for (var n = 0, r = {}, s = "string" == typeof i ? i.split(" ") : [i]; n < 4; n++) r[t + rt[n] + e] = s[n] || s[n - 2] || s[0];
                    return r
                }
            }, "margin" !== t && (E.cssHooks[t + e].set = ee)
        })), E.fn.extend({
            css: function(t, e) {
                return q(this, (function(t, e, i) {
                    var n, r, s = {},
                        a = 0;
                    if (Array.isArray(e)) {
                        for (n = Ht(t), r = e.length; a < r; a++) s[e[a]] = E.css(t, e[a], !1, n);
                        return s
                    }
                    return void 0 !== i ? E.style(t, e, i) : E.css(t, e)
                }), t, e, arguments.length > 1)
            }
        }), E.Tween = re, re.prototype = {
            constructor: re,
            init: function(t, e, i, n, r, s) {
                this.elem = t, this.prop = i, this.easing = r || E.easing._default, this.options = e, this.start = this.now = this.cur(), this.end = n, this.unit = s || (E.cssNumber[i] ? "" : "px")
            },
            cur: function() {
                var t = re.propHooks[this.prop];
                return t && t.get ? t.get(this) : re.propHooks._default.get(this)
            },
            run: function(t) {
                var e, i = re.propHooks[this.prop];
                return this.options.duration ? this.pos = e = E.easing[this.easing](t, this.options.duration * t, 0, 1, this.options.duration) : this.pos = e = t, this.now = (this.end - this.start) * e + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), i && i.set ? i.set(this) : re.propHooks._default.set(this), this
            }
        }, re.prototype.init.prototype = re.prototype, re.propHooks = {
            _default: {
                get: function(t) {
                    var e;
                    return 1 !== t.elem.nodeType || null != t.elem[t.prop] && null == t.elem.style[t.prop] ? t.elem[t.prop] : (e = E.css(t.elem, t.prop, "")) && "auto" !== e ? e : 0
                },
                set: function(t) {
                    E.fx.step[t.prop] ? E.fx.step[t.prop](t) : 1 !== t.elem.nodeType || !E.cssHooks[t.prop] && null == t.elem.style[Zt(t.prop)] ? t.elem[t.prop] = t.now : E.style(t.elem, t.prop, t.now + t.unit)
                }
            }
        }, re.propHooks.scrollTop = re.propHooks.scrollLeft = {
            set: function(t) {
                t.elem.nodeType && t.elem.parentNode && (t.elem[t.prop] = t.now)
            }
        }, E.easing = {
            linear: function(t) {
                return t
            },
            swing: function(t) {
                return .5 - Math.cos(t * Math.PI) / 2
            },
            _default: "swing"
        }, E.fx = re.prototype.init, E.fx.step = {};
        var se, ae, oe = /^(?:toggle|show|hide)$/,
            le = /queueHooks$/;

        function he() {
            ae && (!1 === b.hidden && i.requestAnimationFrame ? i.requestAnimationFrame(he) : i.setTimeout(he, E.fx.interval), E.fx.tick())
        }

        function ce() {
            return i.setTimeout((function() {
                se = void 0
            })), se = Date.now()
        }

        function pe(t, e) {
            var i, n = 0,
                r = {
                    height: t
                };
            for (e = e ? 1 : 0; n < 4; n += 2 - e) r["margin" + (i = rt[n])] = r["padding" + i] = t;
            return e && (r.opacity = r.width = t), r
        }

        function fe(t, e, i) {
            for (var n, r = (de.tweeners[e] || []).concat(de.tweeners["*"]), s = 0, a = r.length; s < a; s++)
                if (n = r[s].call(i, e, t)) return n
        }

        function de(t, e, i) {
            var n, r, s = 0,
                a = de.prefilters.length,
                o = E.Deferred().always((function() {
                    delete l.elem
                })),
                l = function() {
                    if (r) return !1;
                    for (var e = se || ce(), i = Math.max(0, h.startTime + h.duration - e), n = 1 - (i / h.duration || 0), s = 0, a = h.tweens.length; s < a; s++) h.tweens[s].run(n);
                    return o.notifyWith(t, [h, n, i]), n < 1 && a ? i : (a || o.notifyWith(t, [h, 1, 0]), o.resolveWith(t, [h]), !1)
                },
                h = o.promise({
                    elem: t,
                    props: E.extend({}, e),
                    opts: E.extend(!0, {
                        specialEasing: {},
                        easing: E.easing._default
                    }, i),
                    originalProperties: e,
                    originalOptions: i,
                    startTime: se || ce(),
                    duration: i.duration,
                    tweens: [],
                    createTween: function(e, i) {
                        var n = E.Tween(t, h.opts, e, i, h.opts.specialEasing[e] || h.opts.easing);
                        return h.tweens.push(n), n
                    },
                    stop: function(e) {
                        var i = 0,
                            n = e ? h.tweens.length : 0;
                        if (r) return this;
                        for (r = !0; i < n; i++) h.tweens[i].run(1);
                        return e ? (o.notifyWith(t, [h, 1, 0]), o.resolveWith(t, [h, e])) : o.rejectWith(t, [h, e]), this
                    }
                }),
                c = h.props;
            for (! function(t, e) {
                    var i, n, r, s, a;
                    for (i in t)
                        if (r = e[n = Y(i)], s = t[i], Array.isArray(s) && (r = s[1], s = t[i] = s[0]), i !== n && (t[n] = s, delete t[i]), (a = E.cssHooks[n]) && "expand" in a)
                            for (i in s = a.expand(s), delete t[n], s) i in t || (t[i] = s[i], e[i] = r);
                        else e[n] = r
                }(c, h.opts.specialEasing); s < a; s++)
                if (n = de.prefilters[s].call(h, t, c, h.opts)) return y(n.stop) && (E._queueHooks(h.elem, h.opts.queue).stop = n.stop.bind(n)), n;
            return E.map(c, fe, h), y(h.opts.start) && h.opts.start.call(t, h), h.progress(h.opts.progress).done(h.opts.done, h.opts.complete).fail(h.opts.fail).always(h.opts.always), E.fx.timer(E.extend(l, {
                elem: t,
                anim: h,
                queue: h.opts.queue
            })), h
        }
        E.Animation = E.extend(de, {
                tweeners: {
                    "*": [function(t, e) {
                        var i = this.createTween(t, e);
                        return ht(i.elem, t, nt.exec(e), i), i
                    }]
                },
                tweener: function(t, e) {
                    y(t) ? (e = t, t = ["*"]) : t = t.match(N);
                    for (var i, n = 0, r = t.length; n < r; n++) i = t[n], de.tweeners[i] = de.tweeners[i] || [], de.tweeners[i].unshift(e)
                },
                prefilters: [function(t, e, i) {
                    var n, r, s, a, o, l, h, c, p = "width" in e || "height" in e,
                        f = this,
                        d = {},
                        u = t.style,
                        m = t.nodeType && lt(t),
                        g = K.get(t, "fxshow");
                    for (n in i.queue || (null == (a = E._queueHooks(t, "fx")).unqueued && (a.unqueued = 0, o = a.empty.fire, a.empty.fire = function() {
                            a.unqueued || o()
                        }), a.unqueued++, f.always((function() {
                            f.always((function() {
                                a.unqueued--, E.queue(t, "fx").length || a.empty.fire()
                            }))
                        }))), e)
                        if (r = e[n], oe.test(r)) {
                            if (delete e[n], s = s || "toggle" === r, r === (m ? "hide" : "show")) {
                                if ("show" !== r || !g || void 0 === g[n]) continue;
                                m = !0
                            }
                            d[n] = g && g[n] || E.style(t, n)
                        }
                    if ((l = !E.isEmptyObject(e)) || !E.isEmptyObject(d))
                        for (n in p && 1 === t.nodeType && (i.overflow = [u.overflow, u.overflowX, u.overflowY], null == (h = g && g.display) && (h = K.get(t, "display")), "none" === (c = E.css(t, "display")) && (h ? c = h : (ft([t], !0), h = t.style.display || h, c = E.css(t, "display"), ft([t]))), ("inline" === c || "inline-block" === c && null != h) && "none" === E.css(t, "float") && (l || (f.done((function() {
                                u.display = h
                            })), null == h && (c = u.display, h = "none" === c ? "" : c)), u.display = "inline-block")), i.overflow && (u.overflow = "hidden", f.always((function() {
                                u.overflow = i.overflow[0], u.overflowX = i.overflow[1], u.overflowY = i.overflow[2]
                            }))), l = !1, d) l || (g ? "hidden" in g && (m = g.hidden) : g = K.access(t, "fxshow", {
                            display: h
                        }), s && (g.hidden = !m), m && ft([t], !0), f.done((function() {
                            for (n in m || ft([t]), K.remove(t, "fxshow"), d) E.style(t, n, d[n])
                        }))), l = fe(m ? g[n] : 0, n, f), n in g || (g[n] = l.start, m && (l.end = l.start, l.start = 0))
                }],
                prefilter: function(t, e) {
                    e ? de.prefilters.unshift(t) : de.prefilters.push(t)
                }
            }), E.speed = function(t, e, i) {
                var n = t && "object" == typeof t ? E.extend({}, t) : {
                    complete: i || !i && e || y(t) && t,
                    duration: t,
                    easing: i && e || e && !y(e) && e
                };
                return E.fx.off ? n.duration = 0 : "number" != typeof n.duration && (n.duration in E.fx.speeds ? n.duration = E.fx.speeds[n.duration] : n.duration = E.fx.speeds._default), null != n.queue && !0 !== n.queue || (n.queue = "fx"), n.old = n.complete, n.complete = function() {
                    y(n.old) && n.old.call(this), n.queue && E.dequeue(this, n.queue)
                }, n
            }, E.fn.extend({
                fadeTo: function(t, e, i, n) {
                    return this.filter(lt).css("opacity", 0).show().end().animate({
                        opacity: e
                    }, t, i, n)
                },
                animate: function(t, e, i, n) {
                    var r = E.isEmptyObject(t),
                        s = E.speed(e, i, n),
                        a = function() {
                            var e = de(this, E.extend({}, t), s);
                            (r || K.get(this, "finish")) && e.stop(!0)
                        };
                    return a.finish = a, r || !1 === s.queue ? this.each(a) : this.queue(s.queue, a)
                },
                stop: function(t, e, i) {
                    var n = function(t) {
                        var e = t.stop;
                        delete t.stop, e(i)
                    };
                    return "string" != typeof t && (i = e, e = t, t = void 0), e && this.queue(t || "fx", []), this.each((function() {
                        var e = !0,
                            r = null != t && t + "queueHooks",
                            s = E.timers,
                            a = K.get(this);
                        if (r) a[r] && a[r].stop && n(a[r]);
                        else
                            for (r in a) a[r] && a[r].stop && le.test(r) && n(a[r]);
                        for (r = s.length; r--;) s[r].elem !== this || null != t && s[r].queue !== t || (s[r].anim.stop(i), e = !1, s.splice(r, 1));
                        !e && i || E.dequeue(this, t)
                    }))
                },
                finish: function(t) {
                    return !1 !== t && (t = t || "fx"), this.each((function() {
                        var e, i = K.get(this),
                            n = i[t + "queue"],
                            r = i[t + "queueHooks"],
                            s = E.timers,
                            a = n ? n.length : 0;
                        for (i.finish = !0, E.queue(this, t, []), r && r.stop && r.stop.call(this, !0), e = s.length; e--;) s[e].elem === this && s[e].queue === t && (s[e].anim.stop(!0), s.splice(e, 1));
                        for (e = 0; e < a; e++) n[e] && n[e].finish && n[e].finish.call(this);
                        delete i.finish
                    }))
                }
            }), E.each(["toggle", "show", "hide"], (function(t, e) {
                var i = E.fn[e];
                E.fn[e] = function(t, n, r) {
                    return null == t || "boolean" == typeof t ? i.apply(this, arguments) : this.animate(pe(e, !0), t, n, r)
                }
            })), E.each({
                slideDown: pe("show"),
                slideUp: pe("hide"),
                slideToggle: pe("toggle"),
                fadeIn: {
                    opacity: "show"
                },
                fadeOut: {
                    opacity: "hide"
                },
                fadeToggle: {
                    opacity: "toggle"
                }
            }, (function(t, e) {
                E.fn[t] = function(t, i, n) {
                    return this.animate(e, t, i, n)
                }
            })), E.timers = [], E.fx.tick = function() {
                var t, e = 0,
                    i = E.timers;
                for (se = Date.now(); e < i.length; e++)(t = i[e])() || i[e] !== t || i.splice(e--, 1);
                i.length || E.fx.stop(), se = void 0
            }, E.fx.timer = function(t) {
                E.timers.push(t), E.fx.start()
            }, E.fx.interval = 13, E.fx.start = function() {
                ae || (ae = !0, he())
            }, E.fx.stop = function() {
                ae = null
            }, E.fx.speeds = {
                slow: 600,
                fast: 200,
                _default: 400
            }, E.fn.delay = function(t, e) {
                return t = E.fx && E.fx.speeds[t] || t, e = e || "fx", this.queue(e, (function(e, n) {
                    var r = i.setTimeout(e, t);
                    n.stop = function() {
                        i.clearTimeout(r)
                    }
                }))
            },
            function() {
                var t = b.createElement("input"),
                    e = b.createElement("select").appendChild(b.createElement("option"));
                t.type = "checkbox", g.checkOn = "" !== t.value, g.optSelected = e.selected, (t = b.createElement("input")).value = "t", t.type = "radio", g.radioValue = "t" === t.value
            }();
        var ue, me = E.expr.attrHandle;
        E.fn.extend({
            attr: function(t, e) {
                return q(this, E.attr, t, e, arguments.length > 1)
            },
            removeAttr: function(t) {
                return this.each((function() {
                    E.removeAttr(this, t)
                }))
            }
        }), E.extend({
            attr: function(t, e, i) {
                var n, r, s = t.nodeType;
                if (3 !== s && 8 !== s && 2 !== s) return void 0 === t.getAttribute ? E.prop(t, e, i) : (1 === s && E.isXMLDoc(t) || (r = E.attrHooks[e.toLowerCase()] || (E.expr.match.bool.test(e) ? ue : void 0)), void 0 !== i ? null === i ? void E.removeAttr(t, e) : r && "set" in r && void 0 !== (n = r.set(t, i, e)) ? n : (t.setAttribute(e, i + ""), i) : r && "get" in r && null !== (n = r.get(t, e)) ? n : null == (n = E.find.attr(t, e)) ? void 0 : n)
            },
            attrHooks: {
                type: {
                    set: function(t, e) {
                        if (!g.radioValue && "radio" === e && A(t, "input")) {
                            var i = t.value;
                            return t.setAttribute("type", e), i && (t.value = i), e
                        }
                    }
                }
            },
            removeAttr: function(t, e) {
                var i, n = 0,
                    r = e && e.match(N);
                if (r && 1 === t.nodeType)
                    for (; i = r[n++];) t.removeAttribute(i)
            }
        }), ue = {
            set: function(t, e, i) {
                return !1 === e ? E.removeAttr(t, i) : t.setAttribute(i, i), i
            }
        }, E.each(E.expr.match.bool.source.match(/\w+/g), (function(t, e) {
            var i = me[e] || E.find.attr;
            me[e] = function(t, e, n) {
                var r, s, a = e.toLowerCase();
                return n || (s = me[a], me[a] = r, r = null != i(t, e, n) ? a : null, me[a] = s), r
            }
        }));
        var ge = /^(?:input|select|textarea|button)$/i,
            ye = /^(?:a|area)$/i;

        function ve(t) {
            return (t.match(N) || []).join(" ")
        }

        function be(t) {
            return t.getAttribute && t.getAttribute("class") || ""
        }

        function xe(t) {
            return Array.isArray(t) ? t : "string" == typeof t && t.match(N) || []
        }
        E.fn.extend({
            prop: function(t, e) {
                return q(this, E.prop, t, e, arguments.length > 1)
            },
            removeProp: function(t) {
                return this.each((function() {
                    delete this[E.propFix[t] || t]
                }))
            }
        }), E.extend({
            prop: function(t, e, i) {
                var n, r, s = t.nodeType;
                if (3 !== s && 8 !== s && 2 !== s) return 1 === s && E.isXMLDoc(t) || (e = E.propFix[e] || e, r = E.propHooks[e]), void 0 !== i ? r && "set" in r && void 0 !== (n = r.set(t, i, e)) ? n : t[e] = i : r && "get" in r && null !== (n = r.get(t, e)) ? n : t[e]
            },
            propHooks: {
                tabIndex: {
                    get: function(t) {
                        var e = E.find.attr(t, "tabindex");
                        return e ? parseInt(e, 10) : ge.test(t.nodeName) || ye.test(t.nodeName) && t.href ? 0 : -1
                    }
                }
            },
            propFix: {
                for: "htmlFor",
                class: "className"
            }
        }), g.optSelected || (E.propHooks.selected = {
            get: function(t) {
                var e = t.parentNode;
                return e && e.parentNode && e.parentNode.selectedIndex, null
            },
            set: function(t) {
                var e = t.parentNode;
                e && (e.selectedIndex, e.parentNode && e.parentNode.selectedIndex)
            }
        }), E.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], (function() {
            E.propFix[this.toLowerCase()] = this
        })), E.fn.extend({
            addClass: function(t) {
                var e, i, n, r, s, a, o, l = 0;
                if (y(t)) return this.each((function(e) {
                    E(this).addClass(t.call(this, e, be(this)))
                }));
                if ((e = xe(t)).length)
                    for (; i = this[l++];)
                        if (r = be(i), n = 1 === i.nodeType && " " + ve(r) + " ") {
                            for (a = 0; s = e[a++];) n.indexOf(" " + s + " ") < 0 && (n += s + " ");
                            r !== (o = ve(n)) && i.setAttribute("class", o)
                        }
                return this
            },
            removeClass: function(t) {
                var e, i, n, r, s, a, o, l = 0;
                if (y(t)) return this.each((function(e) {
                    E(this).removeClass(t.call(this, e, be(this)))
                }));
                if (!arguments.length) return this.attr("class", "");
                if ((e = xe(t)).length)
                    for (; i = this[l++];)
                        if (r = be(i), n = 1 === i.nodeType && " " + ve(r) + " ") {
                            for (a = 0; s = e[a++];)
                                for (; n.indexOf(" " + s + " ") > -1;) n = n.replace(" " + s + " ", " ");
                            r !== (o = ve(n)) && i.setAttribute("class", o)
                        }
                return this
            },
            toggleClass: function(t, e) {
                var i = typeof t,
                    n = "string" === i || Array.isArray(t);
                return "boolean" == typeof e && n ? e ? this.addClass(t) : this.removeClass(t) : y(t) ? this.each((function(i) {
                    E(this).toggleClass(t.call(this, i, be(this), e), e)
                })) : this.each((function() {
                    var e, r, s, a;
                    if (n)
                        for (r = 0, s = E(this), a = xe(t); e = a[r++];) s.hasClass(e) ? s.removeClass(e) : s.addClass(e);
                    else void 0 !== t && "boolean" !== i || ((e = be(this)) && K.set(this, "__className__", e), this.setAttribute && this.setAttribute("class", e || !1 === t ? "" : K.get(this, "__className__") || ""))
                }))
            },
            hasClass: function(t) {
                var e, i, n = 0;
                for (e = " " + t + " "; i = this[n++];)
                    if (1 === i.nodeType && (" " + ve(be(i)) + " ").indexOf(e) > -1) return !0;
                return !1
            }
        });
        var we = /\r/g;
        E.fn.extend({
            val: function(t) {
                var e, i, n, r = this[0];
                return arguments.length ? (n = y(t), this.each((function(i) {
                    var r;
                    1 === this.nodeType && (null == (r = n ? t.call(this, i, E(this).val()) : t) ? r = "" : "number" == typeof r ? r += "" : Array.isArray(r) && (r = E.map(r, (function(t) {
                        return null == t ? "" : t + ""
                    }))), (e = E.valHooks[this.type] || E.valHooks[this.nodeName.toLowerCase()]) && "set" in e && void 0 !== e.set(this, r, "value") || (this.value = r))
                }))) : r ? (e = E.valHooks[r.type] || E.valHooks[r.nodeName.toLowerCase()]) && "get" in e && void 0 !== (i = e.get(r, "value")) ? i : "string" == typeof(i = r.value) ? i.replace(we, "") : null == i ? "" : i : void 0
            }
        }), E.extend({
            valHooks: {
                option: {
                    get: function(t) {
                        var e = E.find.attr(t, "value");
                        return null != e ? e : ve(E.text(t))
                    }
                },
                select: {
                    get: function(t) {
                        var e, i, n, r = t.options,
                            s = t.selectedIndex,
                            a = "select-one" === t.type,
                            o = a ? null : [],
                            l = a ? s + 1 : r.length;
                        for (n = s < 0 ? l : a ? s : 0; n < l; n++)
                            if (((i = r[n]).selected || n === s) && !i.disabled && (!i.parentNode.disabled || !A(i.parentNode, "optgroup"))) {
                                if (e = E(i).val(), a) return e;
                                o.push(e)
                            }
                        return o
                    },
                    set: function(t, e) {
                        for (var i, n, r = t.options, s = E.makeArray(e), a = r.length; a--;)((n = r[a]).selected = E.inArray(E.valHooks.option.get(n), s) > -1) && (i = !0);
                        return i || (t.selectedIndex = -1), s
                    }
                }
            }
        }), E.each(["radio", "checkbox"], (function() {
            E.valHooks[this] = {
                set: function(t, e) {
                    if (Array.isArray(e)) return t.checked = E.inArray(E(t).val(), e) > -1
                }
            }, g.checkOn || (E.valHooks[this].get = function(t) {
                return null === t.getAttribute("value") ? "on" : t.value
            })
        })), g.focusin = "onfocusin" in i;
        var Se = /^(?:focusinfocus|focusoutblur)$/,
            Ee = function(t) {
                t.stopPropagation()
            };
        E.extend(E.event, {
            trigger: function(t, e, n, r) {
                var s, a, o, l, h, c, p, f, u = [n || b],
                    m = d.call(t, "type") ? t.type : t,
                    g = d.call(t, "namespace") ? t.namespace.split(".") : [];
                if (a = f = o = n = n || b, 3 !== n.nodeType && 8 !== n.nodeType && !Se.test(m + E.event.triggered) && (m.indexOf(".") > -1 && (g = m.split("."), m = g.shift(), g.sort()), h = m.indexOf(":") < 0 && "on" + m, (t = t[E.expando] ? t : new E.Event(m, "object" == typeof t && t)).isTrigger = r ? 2 : 3, t.namespace = g.join("."), t.rnamespace = t.namespace ? new RegExp("(^|\\.)" + g.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, t.result = void 0, t.target || (t.target = n), e = null == e ? [t] : E.makeArray(e, [t]), p = E.event.special[m] || {}, r || !p.trigger || !1 !== p.trigger.apply(n, e))) {
                    if (!r && !p.noBubble && !v(n)) {
                        for (l = p.delegateType || m, Se.test(l + m) || (a = a.parentNode); a; a = a.parentNode) u.push(a), o = a;
                        o === (n.ownerDocument || b) && u.push(o.defaultView || o.parentWindow || i)
                    }
                    for (s = 0;
                        (a = u[s++]) && !t.isPropagationStopped();) f = a, t.type = s > 1 ? l : p.bindType || m, (c = (K.get(a, "events") || Object.create(null))[t.type] && K.get(a, "handle")) && c.apply(a, e), (c = h && a[h]) && c.apply && U(a) && (t.result = c.apply(a, e), !1 === t.result && t.preventDefault());
                    return t.type = m, r || t.isDefaultPrevented() || p._default && !1 !== p._default.apply(u.pop(), e) || !U(n) || h && y(n[m]) && !v(n) && ((o = n[h]) && (n[h] = null), E.event.triggered = m, t.isPropagationStopped() && f.addEventListener(m, Ee), n[m](), t.isPropagationStopped() && f.removeEventListener(m, Ee), E.event.triggered = void 0, o && (n[h] = o)), t.result
                }
            },
            simulate: function(t, e, i) {
                var n = E.extend(new E.Event, i, {
                    type: t,
                    isSimulated: !0
                });
                E.event.trigger(n, null, e)
            }
        }), E.fn.extend({
            trigger: function(t, e) {
                return this.each((function() {
                    E.event.trigger(t, e, this)
                }))
            },
            triggerHandler: function(t, e) {
                var i = this[0];
                if (i) return E.event.trigger(t, e, i, !0)
            }
        }), g.focusin || E.each({
            focus: "focusin",
            blur: "focusout"
        }, (function(t, e) {
            var i = function(t) {
                E.event.simulate(e, t.target, E.event.fix(t))
            };
            E.event.special[e] = {
                setup: function() {
                    var n = this.ownerDocument || this.document || this,
                        r = K.access(n, e);
                    r || n.addEventListener(t, i, !0), K.access(n, e, (r || 0) + 1)
                },
                teardown: function() {
                    var n = this.ownerDocument || this.document || this,
                        r = K.access(n, e) - 1;
                    r ? K.access(n, e, r) : (n.removeEventListener(t, i, !0), K.remove(n, e))
                }
            }
        }));
        var Ce = i.location,
            Pe = {
                guid: Date.now()
            },
            Te = /\?/;
        E.parseXML = function(t) {
            var e;
            if (!t || "string" != typeof t) return null;
            try {
                e = (new i.DOMParser).parseFromString(t, "text/xml")
            } catch (t) {
                e = void 0
            }
            return e && !e.getElementsByTagName("parsererror").length || E.error("Invalid XML: " + t), e
        };
        var _e = /\[\]$/,
            ke = /\r?\n/g,
            Ae = /^(?:submit|button|image|reset|file)$/i,
            De = /^(?:input|select|textarea|keygen)/i;

        function Me(t, e, i, n) {
            var r;
            if (Array.isArray(e)) E.each(e, (function(e, r) {
                i || _e.test(t) ? n(t, r) : Me(t + "[" + ("object" == typeof r && null != r ? e : "") + "]", r, i, n)
            }));
            else if (i || "object" !== S(e)) n(t, e);
            else
                for (r in e) Me(t + "[" + r + "]", e[r], i, n)
        }
        E.param = function(t, e) {
            var i, n = [],
                r = function(t, e) {
                    var i = y(e) ? e() : e;
                    n[n.length] = encodeURIComponent(t) + "=" + encodeURIComponent(null == i ? "" : i)
                };
            if (null == t) return "";
            if (Array.isArray(t) || t.jquery && !E.isPlainObject(t)) E.each(t, (function() {
                r(this.name, this.value)
            }));
            else
                for (i in t) Me(i, t[i], e, r);
            return n.join("&")
        }, E.fn.extend({
            serialize: function() {
                return E.param(this.serializeArray())
            },
            serializeArray: function() {
                return this.map((function() {
                    var t = E.prop(this, "elements");
                    return t ? E.makeArray(t) : this
                })).filter((function() {
                    var t = this.type;
                    return this.name && !E(this).is(":disabled") && De.test(this.nodeName) && !Ae.test(t) && (this.checked || !mt.test(t))
                })).map((function(t, e) {
                    var i = E(this).val();
                    return null == i ? null : Array.isArray(i) ? E.map(i, (function(t) {
                        return {
                            name: e.name,
                            value: t.replace(ke, "\r\n")
                        }
                    })) : {
                        name: e.name,
                        value: i.replace(ke, "\r\n")
                    }
                })).get()
            }
        });
        var Fe = /%20/g,
            Ie = /#.*$/,
            Re = /([?&])_=[^&]*/,
            Le = /^(.*?):[ \t]*([^\r\n]*)$/gm,
            Be = /^(?:GET|HEAD)$/,
            Ne = /^\/\//,
            Ve = {},
            ze = {},
            Oe = "*/".concat("*"),
            je = b.createElement("a");

        function He(t) {
            return function(e, i) {
                "string" != typeof e && (i = e, e = "*");
                var n, r = 0,
                    s = e.toLowerCase().match(N) || [];
                if (y(i))
                    for (; n = s[r++];) "+" === n[0] ? (n = n.slice(1) || "*", (t[n] = t[n] || []).unshift(i)) : (t[n] = t[n] || []).push(i)
            }
        }

        function $e(t, e, i, n) {
            var r = {},
                s = t === ze;

            function a(o) {
                var l;
                return r[o] = !0, E.each(t[o] || [], (function(t, o) {
                    var h = o(e, i, n);
                    return "string" != typeof h || s || r[h] ? s ? !(l = h) : void 0 : (e.dataTypes.unshift(h), a(h), !1)
                })), l
            }
            return a(e.dataTypes[0]) || !r["*"] && a("*")
        }

        function qe(t, e) {
            var i, n, r = E.ajaxSettings.flatOptions || {};
            for (i in e) void 0 !== e[i] && ((r[i] ? t : n || (n = {}))[i] = e[i]);
            return n && E.extend(!0, t, n), t
        }
        je.href = Ce.href, E.extend({
            active: 0,
            lastModified: {},
            etag: {},
            ajaxSettings: {
                url: Ce.href,
                type: "GET",
                isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(Ce.protocol),
                global: !0,
                processData: !0,
                async: !0,
                contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                accepts: {
                    "*": Oe,
                    text: "text/plain",
                    html: "text/html",
                    xml: "application/xml, text/xml",
                    json: "application/json, text/javascript"
                },
                contents: {
                    xml: /\bxml\b/,
                    html: /\bhtml/,
                    json: /\bjson\b/
                },
                responseFields: {
                    xml: "responseXML",
                    text: "responseText",
                    json: "responseJSON"
                },
                converters: {
                    "* text": String,
                    "text html": !0,
                    "text json": JSON.parse,
                    "text xml": E.parseXML
                },
                flatOptions: {
                    url: !0,
                    context: !0
                }
            },
            ajaxSetup: function(t, e) {
                return e ? qe(qe(t, E.ajaxSettings), e) : qe(E.ajaxSettings, t)
            },
            ajaxPrefilter: He(Ve),
            ajaxTransport: He(ze),
            ajax: function(t, e) {
                "object" == typeof t && (e = t, t = void 0), e = e || {};
                var n, r, s, a, o, l, h, c, p, f, d = E.ajaxSetup({}, e),
                    u = d.context || d,
                    m = d.context && (u.nodeType || u.jquery) ? E(u) : E.event,
                    g = E.Deferred(),
                    y = E.Callbacks("once memory"),
                    v = d.statusCode || {},
                    x = {},
                    w = {},
                    S = "canceled",
                    C = {
                        readyState: 0,
                        getResponseHeader: function(t) {
                            var e;
                            if (h) {
                                if (!a)
                                    for (a = {}; e = Le.exec(s);) a[e[1].toLowerCase() + " "] = (a[e[1].toLowerCase() + " "] || []).concat(e[2]);
                                e = a[t.toLowerCase() + " "]
                            }
                            return null == e ? null : e.join(", ")
                        },
                        getAllResponseHeaders: function() {
                            return h ? s : null
                        },
                        setRequestHeader: function(t, e) {
                            return null == h && (t = w[t.toLowerCase()] = w[t.toLowerCase()] || t, x[t] = e), this
                        },
                        overrideMimeType: function(t) {
                            return null == h && (d.mimeType = t), this
                        },
                        statusCode: function(t) {
                            var e;
                            if (t)
                                if (h) C.always(t[C.status]);
                                else
                                    for (e in t) v[e] = [v[e], t[e]];
                            return this
                        },
                        abort: function(t) {
                            var e = t || S;
                            return n && n.abort(e), P(0, e), this
                        }
                    };
                if (g.promise(C), d.url = ((t || d.url || Ce.href) + "").replace(Ne, Ce.protocol + "//"), d.type = e.method || e.type || d.method || d.type, d.dataTypes = (d.dataType || "*").toLowerCase().match(N) || [""], null == d.crossDomain) {
                    l = b.createElement("a");
                    try {
                        l.href = d.url, l.href = l.href, d.crossDomain = je.protocol + "//" + je.host != l.protocol + "//" + l.host
                    } catch (t) {
                        d.crossDomain = !0
                    }
                }
                if (d.data && d.processData && "string" != typeof d.data && (d.data = E.param(d.data, d.traditional)), $e(Ve, d, e, C), h) return C;
                for (p in (c = E.event && d.global) && 0 == E.active++ && E.event.trigger("ajaxStart"), d.type = d.type.toUpperCase(), d.hasContent = !Be.test(d.type), r = d.url.replace(Ie, ""), d.hasContent ? d.data && d.processData && 0 === (d.contentType || "").indexOf("application/x-www-form-urlencoded") && (d.data = d.data.replace(Fe, "+")) : (f = d.url.slice(r.length), d.data && (d.processData || "string" == typeof d.data) && (r += (Te.test(r) ? "&" : "?") + d.data, delete d.data), !1 === d.cache && (r = r.replace(Re, "$1"), f = (Te.test(r) ? "&" : "?") + "_=" + Pe.guid++ + f), d.url = r + f), d.ifModified && (E.lastModified[r] && C.setRequestHeader("If-Modified-Since", E.lastModified[r]), E.etag[r] && C.setRequestHeader("If-None-Match", E.etag[r])), (d.data && d.hasContent && !1 !== d.contentType || e.contentType) && C.setRequestHeader("Content-Type", d.contentType), C.setRequestHeader("Accept", d.dataTypes[0] && d.accepts[d.dataTypes[0]] ? d.accepts[d.dataTypes[0]] + ("*" !== d.dataTypes[0] ? ", " + Oe + "; q=0.01" : "") : d.accepts["*"]), d.headers) C.setRequestHeader(p, d.headers[p]);
                if (d.beforeSend && (!1 === d.beforeSend.call(u, C, d) || h)) return C.abort();
                if (S = "abort", y.add(d.complete), C.done(d.success), C.fail(d.error), n = $e(ze, d, e, C)) {
                    if (C.readyState = 1, c && m.trigger("ajaxSend", [C, d]), h) return C;
                    d.async && d.timeout > 0 && (o = i.setTimeout((function() {
                        C.abort("timeout")
                    }), d.timeout));
                    try {
                        h = !1, n.send(x, P)
                    } catch (t) {
                        if (h) throw t;
                        P(-1, t)
                    }
                } else P(-1, "No Transport");

                function P(t, e, a, l) {
                    var p, f, b, x, w, S = e;
                    h || (h = !0, o && i.clearTimeout(o), n = void 0, s = l || "", C.readyState = t > 0 ? 4 : 0, p = t >= 200 && t < 300 || 304 === t, a && (x = function(t, e, i) {
                        for (var n, r, s, a, o = t.contents, l = t.dataTypes;
                            "*" === l[0];) l.shift(), void 0 === n && (n = t.mimeType || e.getResponseHeader("Content-Type"));
                        if (n)
                            for (r in o)
                                if (o[r] && o[r].test(n)) {
                                    l.unshift(r);
                                    break
                                }
                        if (l[0] in i) s = l[0];
                        else {
                            for (r in i) {
                                if (!l[0] || t.converters[r + " " + l[0]]) {
                                    s = r;
                                    break
                                }
                                a || (a = r)
                            }
                            s = s || a
                        }
                        if (s) return s !== l[0] && l.unshift(s), i[s]
                    }(d, C, a)), !p && E.inArray("script", d.dataTypes) > -1 && (d.converters["text script"] = function() {}), x = function(t, e, i, n) {
                        var r, s, a, o, l, h = {},
                            c = t.dataTypes.slice();
                        if (c[1])
                            for (a in t.converters) h[a.toLowerCase()] = t.converters[a];
                        for (s = c.shift(); s;)
                            if (t.responseFields[s] && (i[t.responseFields[s]] = e), !l && n && t.dataFilter && (e = t.dataFilter(e, t.dataType)), l = s, s = c.shift())
                                if ("*" === s) s = l;
                                else if ("*" !== l && l !== s) {
                            if (!(a = h[l + " " + s] || h["* " + s]))
                                for (r in h)
                                    if ((o = r.split(" "))[1] === s && (a = h[l + " " + o[0]] || h["* " + o[0]])) {
                                        !0 === a ? a = h[r] : !0 !== h[r] && (s = o[0], c.unshift(o[1]));
                                        break
                                    }
                            if (!0 !== a)
                                if (a && t.throws) e = a(e);
                                else try {
                                    e = a(e)
                                } catch (t) {
                                    return {
                                        state: "parsererror",
                                        error: a ? t : "No conversion from " + l + " to " + s
                                    }
                                }
                        }
                        return {
                            state: "success",
                            data: e
                        }
                    }(d, x, C, p), p ? (d.ifModified && ((w = C.getResponseHeader("Last-Modified")) && (E.lastModified[r] = w), (w = C.getResponseHeader("etag")) && (E.etag[r] = w)), 204 === t || "HEAD" === d.type ? S = "nocontent" : 304 === t ? S = "notmodified" : (S = x.state, f = x.data, p = !(b = x.error))) : (b = S, !t && S || (S = "error", t < 0 && (t = 0))), C.status = t, C.statusText = (e || S) + "", p ? g.resolveWith(u, [f, S, C]) : g.rejectWith(u, [C, S, b]), C.statusCode(v), v = void 0, c && m.trigger(p ? "ajaxSuccess" : "ajaxError", [C, d, p ? f : b]), y.fireWith(u, [C, S]), c && (m.trigger("ajaxComplete", [C, d]), --E.active || E.event.trigger("ajaxStop")))
                }
                return C
            },
            getJSON: function(t, e, i) {
                return E.get(t, e, i, "json")
            },
            getScript: function(t, e) {
                return E.get(t, void 0, e, "script")
            }
        }), E.each(["get", "post"], (function(t, e) {
            E[e] = function(t, i, n, r) {
                return y(i) && (r = r || n, n = i, i = void 0), E.ajax(E.extend({
                    url: t,
                    type: e,
                    dataType: r,
                    data: i,
                    success: n
                }, E.isPlainObject(t) && t))
            }
        })), E.ajaxPrefilter((function(t) {
            var e;
            for (e in t.headers) "content-type" === e.toLowerCase() && (t.contentType = t.headers[e] || "")
        })), E._evalUrl = function(t, e, i) {
            return E.ajax({
                url: t,
                type: "GET",
                dataType: "script",
                cache: !0,
                async: !1,
                global: !1,
                converters: {
                    "text script": function() {}
                },
                dataFilter: function(t) {
                    E.globalEval(t, e, i)
                }
            })
        }, E.fn.extend({
            wrapAll: function(t) {
                var e;
                return this[0] && (y(t) && (t = t.call(this[0])), e = E(t, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && e.insertBefore(this[0]), e.map((function() {
                    for (var t = this; t.firstElementChild;) t = t.firstElementChild;
                    return t
                })).append(this)), this
            },
            wrapInner: function(t) {
                return y(t) ? this.each((function(e) {
                    E(this).wrapInner(t.call(this, e))
                })) : this.each((function() {
                    var e = E(this),
                        i = e.contents();
                    i.length ? i.wrapAll(t) : e.append(t)
                }))
            },
            wrap: function(t) {
                var e = y(t);
                return this.each((function(i) {
                    E(this).wrapAll(e ? t.call(this, i) : t)
                }))
            },
            unwrap: function(t) {
                return this.parent(t).not("body").each((function() {
                    E(this).replaceWith(this.childNodes)
                })), this
            }
        }), E.expr.pseudos.hidden = function(t) {
            return !E.expr.pseudos.visible(t)
        }, E.expr.pseudos.visible = function(t) {
            return !!(t.offsetWidth || t.offsetHeight || t.getClientRects().length)
        }, E.ajaxSettings.xhr = function() {
            try {
                return new i.XMLHttpRequest
            } catch (t) {}
        };
        var Ge = {
                0: 200,
                1223: 204
            },
            We = E.ajaxSettings.xhr();
        g.cors = !!We && "withCredentials" in We, g.ajax = We = !!We, E.ajaxTransport((function(t) {
            var e, n;
            if (g.cors || We && !t.crossDomain) return {
                send: function(r, s) {
                    var a, o = t.xhr();
                    if (o.open(t.type, t.url, t.async, t.username, t.password), t.xhrFields)
                        for (a in t.xhrFields) o[a] = t.xhrFields[a];
                    for (a in t.mimeType && o.overrideMimeType && o.overrideMimeType(t.mimeType), t.crossDomain || r["X-Requested-With"] || (r["X-Requested-With"] = "XMLHttpRequest"), r) o.setRequestHeader(a, r[a]);
                    e = function(t) {
                        return function() {
                            e && (e = n = o.onload = o.onerror = o.onabort = o.ontimeout = o.onreadystatechange = null, "abort" === t ? o.abort() : "error" === t ? "number" != typeof o.status ? s(0, "error") : s(o.status, o.statusText) : s(Ge[o.status] || o.status, o.statusText, "text" !== (o.responseType || "text") || "string" != typeof o.responseText ? {
                                binary: o.response
                            } : {
                                text: o.responseText
                            }, o.getAllResponseHeaders()))
                        }
                    }, o.onload = e(), n = o.onerror = o.ontimeout = e("error"), void 0 !== o.onabort ? o.onabort = n : o.onreadystatechange = function() {
                        4 === o.readyState && i.setTimeout((function() {
                            e && n()
                        }))
                    }, e = e("abort");
                    try {
                        o.send(t.hasContent && t.data || null)
                    } catch (t) {
                        if (e) throw t
                    }
                },
                abort: function() {
                    e && e()
                }
            }
        })), E.ajaxPrefilter((function(t) {
            t.crossDomain && (t.contents.script = !1)
        })), E.ajaxSetup({
            accepts: {
                script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
            },
            contents: {
                script: /\b(?:java|ecma)script\b/
            },
            converters: {
                "text script": function(t) {
                    return E.globalEval(t), t
                }
            }
        }), E.ajaxPrefilter("script", (function(t) {
            void 0 === t.cache && (t.cache = !1), t.crossDomain && (t.type = "GET")
        })), E.ajaxTransport("script", (function(t) {
            var e, i;
            if (t.crossDomain || t.scriptAttrs) return {
                send: function(n, r) {
                    e = E("<script>").attr(t.scriptAttrs || {}).prop({
                        charset: t.scriptCharset,
                        src: t.url
                    }).on("load error", i = function(t) {
                        e.remove(), i = null, t && r("error" === t.type ? 404 : 200, t.type)
                    }), b.head.appendChild(e[0])
                },
                abort: function() {
                    i && i()
                }
            }
        }));
        var Xe, Ye = [],
            Ue = /(=)\?(?=&|$)|\?\?/;
        E.ajaxSetup({
            jsonp: "callback",
            jsonpCallback: function() {
                var t = Ye.pop() || E.expando + "_" + Pe.guid++;
                return this[t] = !0, t
            }
        }), E.ajaxPrefilter("json jsonp", (function(t, e, n) {
            var r, s, a, o = !1 !== t.jsonp && (Ue.test(t.url) ? "url" : "string" == typeof t.data && 0 === (t.contentType || "").indexOf("application/x-www-form-urlencoded") && Ue.test(t.data) && "data");
            if (o || "jsonp" === t.dataTypes[0]) return r = t.jsonpCallback = y(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback, o ? t[o] = t[o].replace(Ue, "$1" + r) : !1 !== t.jsonp && (t.url += (Te.test(t.url) ? "&" : "?") + t.jsonp + "=" + r), t.converters["script json"] = function() {
                return a || E.error(r + " was not called"), a[0]
            }, t.dataTypes[0] = "json", s = i[r], i[r] = function() {
                a = arguments
            }, n.always((function() {
                void 0 === s ? E(i).removeProp(r) : i[r] = s, t[r] && (t.jsonpCallback = e.jsonpCallback, Ye.push(r)), a && y(s) && s(a[0]), a = s = void 0
            })), "script"
        })), g.createHTMLDocument = ((Xe = b.implementation.createHTMLDocument("").body).innerHTML = "<form></form><form></form>", 2 === Xe.childNodes.length), E.parseHTML = function(t, e, i) {
            return "string" != typeof t ? [] : ("boolean" == typeof e && (i = e, e = !1), e || (g.createHTMLDocument ? ((n = (e = b.implementation.createHTMLDocument("")).createElement("base")).href = b.location.href, e.head.appendChild(n)) : e = b), s = !i && [], (r = D.exec(t)) ? [e.createElement(r[1])] : (r = St([t], e, s), s && s.length && E(s).remove(), E.merge([], r.childNodes)));
            var n, r, s
        }, E.fn.load = function(t, e, i) {
            var n, r, s, a = this,
                o = t.indexOf(" ");
            return o > -1 && (n = ve(t.slice(o)), t = t.slice(0, o)), y(e) ? (i = e, e = void 0) : e && "object" == typeof e && (r = "POST"), a.length > 0 && E.ajax({
                url: t,
                type: r || "GET",
                dataType: "html",
                data: e
            }).done((function(t) {
                s = arguments, a.html(n ? E("<div>").append(E.parseHTML(t)).find(n) : t)
            })).always(i && function(t, e) {
                a.each((function() {
                    i.apply(this, s || [t.responseText, e, t])
                }))
            }), this
        }, E.expr.pseudos.animated = function(t) {
            return E.grep(E.timers, (function(e) {
                return t === e.elem
            })).length
        }, E.offset = {
            setOffset: function(t, e, i) {
                var n, r, s, a, o, l, h = E.css(t, "position"),
                    c = E(t),
                    p = {};
                "static" === h && (t.style.position = "relative"), o = c.offset(), s = E.css(t, "top"), l = E.css(t, "left"), ("absolute" === h || "fixed" === h) && (s + l).indexOf("auto") > -1 ? (a = (n = c.position()).top, r = n.left) : (a = parseFloat(s) || 0, r = parseFloat(l) || 0), y(e) && (e = e.call(t, i, E.extend({}, o))), null != e.top && (p.top = e.top - o.top + a), null != e.left && (p.left = e.left - o.left + r), "using" in e ? e.using.call(t, p) : ("number" == typeof p.top && (p.top += "px"), "number" == typeof p.left && (p.left += "px"), c.css(p))
            }
        }, E.fn.extend({
            offset: function(t) {
                if (arguments.length) return void 0 === t ? this : this.each((function(e) {
                    E.offset.setOffset(this, t, e)
                }));
                var e, i, n = this[0];
                return n ? n.getClientRects().length ? (e = n.getBoundingClientRect(), i = n.ownerDocument.defaultView, {
                    top: e.top + i.pageYOffset,
                    left: e.left + i.pageXOffset
                }) : {
                    top: 0,
                    left: 0
                } : void 0
            },
            position: function() {
                if (this[0]) {
                    var t, e, i, n = this[0],
                        r = {
                            top: 0,
                            left: 0
                        };
                    if ("fixed" === E.css(n, "position")) e = n.getBoundingClientRect();
                    else {
                        for (e = this.offset(), i = n.ownerDocument, t = n.offsetParent || i.documentElement; t && (t === i.body || t === i.documentElement) && "static" === E.css(t, "position");) t = t.parentNode;
                        t && t !== n && 1 === t.nodeType && ((r = E(t).offset()).top += E.css(t, "borderTopWidth", !0), r.left += E.css(t, "borderLeftWidth", !0))
                    }
                    return {
                        top: e.top - r.top - E.css(n, "marginTop", !0),
                        left: e.left - r.left - E.css(n, "marginLeft", !0)
                    }
                }
            },
            offsetParent: function() {
                return this.map((function() {
                    for (var t = this.offsetParent; t && "static" === E.css(t, "position");) t = t.offsetParent;
                    return t || st
                }))
            }
        }), E.each({
            scrollLeft: "pageXOffset",
            scrollTop: "pageYOffset"
        }, (function(t, e) {
            var i = "pageYOffset" === e;
            E.fn[t] = function(n) {
                return q(this, (function(t, n, r) {
                    var s;
                    if (v(t) ? s = t : 9 === t.nodeType && (s = t.defaultView), void 0 === r) return s ? s[e] : t[n];
                    s ? s.scrollTo(i ? s.pageXOffset : r, i ? r : s.pageYOffset) : t[n] = r
                }), t, n, arguments.length)
            }
        })), E.each(["top", "left"], (function(t, e) {
            E.cssHooks[e] = Wt(g.pixelPosition, (function(t, i) {
                if (i) return i = Gt(t, e), jt.test(i) ? E(t).position()[e] + "px" : i
            }))
        })), E.each({
            Height: "height",
            Width: "width"
        }, (function(t, e) {
            E.each({
                padding: "inner" + t,
                content: e,
                "": "outer" + t
            }, (function(i, n) {
                E.fn[n] = function(r, s) {
                    var a = arguments.length && (i || "boolean" != typeof r),
                        o = i || (!0 === r || !0 === s ? "margin" : "border");
                    return q(this, (function(e, i, r) {
                        var s;
                        return v(e) ? 0 === n.indexOf("outer") ? e["inner" + t] : e.document.documentElement["client" + t] : 9 === e.nodeType ? (s = e.documentElement, Math.max(e.body["scroll" + t], s["scroll" + t], e.body["offset" + t], s["offset" + t], s["client" + t])) : void 0 === r ? E.css(e, i, o) : E.style(e, i, r, o)
                    }), e, a ? r : void 0, a)
                }
            }))
        })), E.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], (function(t, e) {
            E.fn[e] = function(t) {
                return this.on(e, t)
            }
        })), E.fn.extend({
            bind: function(t, e, i) {
                return this.on(t, null, e, i)
            },
            unbind: function(t, e) {
                return this.off(t, null, e)
            },
            delegate: function(t, e, i, n) {
                return this.on(e, t, i, n)
            },
            undelegate: function(t, e, i) {
                return 1 === arguments.length ? this.off(t, "**") : this.off(e, t || "**", i)
            },
            hover: function(t, e) {
                return this.mouseenter(t).mouseleave(e || t)
            }
        }), E.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), (function(t, e) {
            E.fn[e] = function(t, i) {
                return arguments.length > 0 ? this.on(e, null, t, i) : this.trigger(e)
            }
        }));
        var Ze = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
        E.proxy = function(t, e) {
            var i, n, r;
            if ("string" == typeof e && (i = t[e], e = t, t = i), y(t)) return n = o.call(arguments, 2), (r = function() {
                return t.apply(e || this, n.concat(o.call(arguments)))
            }).guid = t.guid = t.guid || E.guid++, r
        }, E.holdReady = function(t) {
            t ? E.readyWait++ : E.ready(!0)
        }, E.isArray = Array.isArray, E.parseJSON = JSON.parse, E.nodeName = A, E.isFunction = y, E.isWindow = v, E.camelCase = Y, E.type = S, E.now = Date.now, E.isNumeric = function(t) {
            var e = E.type(t);
            return ("number" === e || "string" === e) && !isNaN(t - parseFloat(t))
        }, E.trim = function(t) {
            return null == t ? "" : (t + "").replace(Ze, "")
        }, void 0 === (n = function() {
            return E
        }.apply(e, [])) || (t.exports = n);
        var Ke = i.jQuery,
            Je = i.$;
        return E.noConflict = function(t) {
            return i.$ === E && (i.$ = Je), t && i.jQuery === E && (i.jQuery = Ke), E
        }, void 0 === r && (i.jQuery = i.$ = E), E
    }))
}, function(module, exports, __webpack_require__) {
    var __WEBPACK_AMD_DEFINE_RESULT__;
    "undefined" != typeof navigator && function(t, e) {
        void 0 === (__WEBPACK_AMD_DEFINE_RESULT__ = function() {
            return e(t)
        }.call(exports, __webpack_require__, exports, module)) || (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)
    }(window || {}, (function(window) {
        "use strict";
        var svgNS = "http://www.w3.org/2000/svg",
            locationHref = "",
            initialDefaultFrame = -999999,
            subframeEnabled = !0,
            idPrefix = "",
            expressionsPlugin, isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent),
            cachedColors = {},
            bmRnd, bmPow = Math.pow,
            bmSqrt = Math.sqrt,
            bmFloor = Math.floor,
            bmMax = Math.max,
            bmMin = Math.min,
            BMMath = {};

        function ProjectInterface() {
            return {}
        }! function() {
            var t, e = ["abs", "acos", "acosh", "asin", "asinh", "atan", "atanh", "atan2", "ceil", "cbrt", "expm1", "clz32", "cos", "cosh", "exp", "floor", "fround", "hypot", "imul", "log", "log1p", "log2", "log10", "max", "min", "pow", "random", "round", "sign", "sin", "sinh", "sqrt", "tan", "tanh", "trunc", "E", "LN10", "LN2", "LOG10E", "LOG2E", "PI", "SQRT1_2", "SQRT2"],
                i = e.length;
            for (t = 0; t < i; t += 1) BMMath[e[t]] = Math[e[t]]
        }(), BMMath.random = Math.random, BMMath.abs = function(t) {
            if ("object" === typeof t && t.length) {
                var e, i = createSizedArray(t.length),
                    n = t.length;
                for (e = 0; e < n; e += 1) i[e] = Math.abs(t[e]);
                return i
            }
            return Math.abs(t)
        };
        var defaultCurveSegments = 150,
            degToRads = Math.PI / 180,
            roundCorner = .5519;

        function roundValues(t) {
            bmRnd = t ? Math.round : function(t) {
                return t
            }
        }

        function styleDiv(t) {
            t.style.position = "absolute", t.style.top = 0, t.style.left = 0, t.style.display = "block", t.style.transformOrigin = "0 0", t.style.webkitTransformOrigin = "0 0", t.style.backfaceVisibility = "visible", t.style.webkitBackfaceVisibility = "visible", t.style.transformStyle = "preserve-3d", t.style.webkitTransformStyle = "preserve-3d", t.style.mozTransformStyle = "preserve-3d"
        }

        function BMEnterFrameEvent(t, e, i, n) {
            this.type = t, this.currentTime = e, this.totalTime = i, this.direction = n < 0 ? -1 : 1
        }

        function BMCompleteEvent(t, e) {
            this.type = t, this.direction = e < 0 ? -1 : 1
        }

        function BMCompleteLoopEvent(t, e, i, n) {
            this.type = t, this.currentLoop = i, this.totalLoops = e, this.direction = n < 0 ? -1 : 1
        }

        function BMSegmentStartEvent(t, e, i) {
            this.type = t, this.firstFrame = e, this.totalFrames = i
        }

        function BMDestroyEvent(t, e) {
            this.type = t, this.target = e
        }

        function BMRenderFrameErrorEvent(t, e) {
            this.type = "renderFrameError", this.nativeError = t, this.currentTime = e
        }

        function BMConfigErrorEvent(t) {
            this.type = "configError", this.nativeError = t
        }

        function BMAnimationConfigErrorEvent(t, e) {
            this.type = t, this.nativeError = e
        }
        roundValues(!1);
        var createElementID = (_count = 0, function() {
                return idPrefix + "__lottie_element_" + (_count += 1)
            }),
            _count;

        function HSVtoRGB(t, e, i) {
            var n, r, s, a, o, l, h, c;
            switch (l = i * (1 - e), h = i * (1 - (o = 6 * t - (a = Math.floor(6 * t))) * e), c = i * (1 - (1 - o) * e), a % 6) {
                case 0:
                    n = i, r = c, s = l;
                    break;
                case 1:
                    n = h, r = i, s = l;
                    break;
                case 2:
                    n = l, r = i, s = c;
                    break;
                case 3:
                    n = l, r = h, s = i;
                    break;
                case 4:
                    n = c, r = l, s = i;
                    break;
                case 5:
                    n = i, r = l, s = h
            }
            return [n, r, s]
        }

        function RGBtoHSV(t, e, i) {
            var n, r = Math.max(t, e, i),
                s = Math.min(t, e, i),
                a = r - s,
                o = 0 === r ? 0 : a / r,
                l = r / 255;
            switch (r) {
                case s:
                    n = 0;
                    break;
                case t:
                    n = e - i + a * (e < i ? 6 : 0), n /= 6 * a;
                    break;
                case e:
                    n = i - t + 2 * a, n /= 6 * a;
                    break;
                case i:
                    n = t - e + 4 * a, n /= 6 * a
            }
            return [n, o, l]
        }

        function addSaturationToRGB(t, e) {
            var i = RGBtoHSV(255 * t[0], 255 * t[1], 255 * t[2]);
            return i[1] += e, i[1] > 1 ? i[1] = 1 : i[1] <= 0 && (i[1] = 0), HSVtoRGB(i[0], i[1], i[2])
        }

        function addBrightnessToRGB(t, e) {
            var i = RGBtoHSV(255 * t[0], 255 * t[1], 255 * t[2]);
            return i[2] += e, i[2] > 1 ? i[2] = 1 : i[2] < 0 && (i[2] = 0), HSVtoRGB(i[0], i[1], i[2])
        }

        function addHueToRGB(t, e) {
            var i = RGBtoHSV(255 * t[0], 255 * t[1], 255 * t[2]);
            return i[0] += e / 360, i[0] > 1 ? i[0] -= 1 : i[0] < 0 && (i[0] += 1), HSVtoRGB(i[0], i[1], i[2])
        }
        var rgbToHex = function() {
            var t, e, i = [];
            for (t = 0; t < 256; t += 1) e = t.toString(16), i[t] = 1 === e.length ? "0" + e : e;
            return function(t, e, n) {
                return t < 0 && (t = 0), e < 0 && (e = 0), n < 0 && (n = 0), "#" + i[t] + i[e] + i[n]
            }
        }();

        function BaseEvent() {}
        BaseEvent.prototype = {
            triggerEvent: function(t, e) {
                if (this._cbs[t])
                    for (var i = this._cbs[t].length, n = 0; n < i; n += 1) this._cbs[t][n](e)
            },
            addEventListener: function(t, e) {
                return this._cbs[t] || (this._cbs[t] = []), this._cbs[t].push(e),
                    function() {
                        this.removeEventListener(t, e)
                    }.bind(this)
            },
            removeEventListener: function(t, e) {
                if (e) {
                    if (this._cbs[t]) {
                        for (var i = 0, n = this._cbs[t].length; i < n;) this._cbs[t][i] === e && (this._cbs[t].splice(i, 1), i -= 1, n -= 1), i += 1;
                        this._cbs[t].length || (this._cbs[t] = null)
                    }
                } else this._cbs[t] = null
            }
        };
        var createTypedArray = function() {
            function t(t, e) {
                var i, n = 0,
                    r = [];
                switch (t) {
                    case "int16":
                    case "uint8c":
                        i = 1;
                        break;
                    default:
                        i = 1.1
                }
                for (n = 0; n < e; n += 1) r.push(i);
                return r
            }
            return "function" == typeof Uint8ClampedArray && "function" == typeof Float32Array ? function(e, i) {
                return "float32" === e ? new Float32Array(i) : "int16" === e ? new Int16Array(i) : "uint8c" === e ? new Uint8ClampedArray(i) : t(e, i)
            } : t
        }();

        function createSizedArray(t) {
            return Array.apply(null, {
                length: t
            })
        }

        function createNS(t) {
            return document.createElementNS(svgNS, t)
        }

        function createTag(t) {
            return document.createElement(t)
        }

        function DynamicPropertyContainer() {}
        DynamicPropertyContainer.prototype = {
            addDynamicProperty: function(t) {
                -1 === this.dynamicProperties.indexOf(t) && (this.dynamicProperties.push(t), this.container.addDynamicProperty(this), this._isAnimated = !0)
            },
            iterateDynamicProperties: function() {
                var t;
                this._mdf = !1;
                var e = this.dynamicProperties.length;
                for (t = 0; t < e; t += 1) this.dynamicProperties[t].getValue(), this.dynamicProperties[t]._mdf && (this._mdf = !0)
            },
            initDynamicPropertyContainer: function(t) {
                this.container = t, this.dynamicProperties = [], this._mdf = !1, this._isAnimated = !1
            }
        };
        var getBlendMode = (blendModeEnums = {
                0: "source-over",
                1: "multiply",
                2: "screen",
                3: "overlay",
                4: "darken",
                5: "lighten",
                6: "color-dodge",
                7: "color-burn",
                8: "hard-light",
                9: "soft-light",
                10: "difference",
                11: "exclusion",
                12: "hue",
                13: "saturation",
                14: "color",
                15: "luminosity"
            }, function(t) {
                return blendModeEnums[t] || ""
            }),
            blendModeEnums, Matrix = function() {
                var t = Math.cos,
                    e = Math.sin,
                    i = Math.tan,
                    n = Math.round;

                function r() {
                    return this.props[0] = 1, this.props[1] = 0, this.props[2] = 0, this.props[3] = 0, this.props[4] = 0, this.props[5] = 1, this.props[6] = 0, this.props[7] = 0, this.props[8] = 0, this.props[9] = 0, this.props[10] = 1, this.props[11] = 0, this.props[12] = 0, this.props[13] = 0, this.props[14] = 0, this.props[15] = 1, this
                }

                function s(i) {
                    if (0 === i) return this;
                    var n = t(i),
                        r = e(i);
                    return this._t(n, -r, 0, 0, r, n, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)
                }

                function a(i) {
                    if (0 === i) return this;
                    var n = t(i),
                        r = e(i);
                    return this._t(1, 0, 0, 0, 0, n, -r, 0, 0, r, n, 0, 0, 0, 0, 1)
                }

                function o(i) {
                    if (0 === i) return this;
                    var n = t(i),
                        r = e(i);
                    return this._t(n, 0, r, 0, 0, 1, 0, 0, -r, 0, n, 0, 0, 0, 0, 1)
                }

                function l(i) {
                    if (0 === i) return this;
                    var n = t(i),
                        r = e(i);
                    return this._t(n, -r, 0, 0, r, n, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)
                }

                function h(t, e) {
                    return this._t(1, e, t, 1, 0, 0)
                }

                function c(t, e) {
                    return this.shear(i(t), i(e))
                }

                function p(n, r) {
                    var s = t(r),
                        a = e(r);
                    return this._t(s, a, 0, 0, -a, s, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)._t(1, 0, 0, 0, i(n), 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)._t(s, -a, 0, 0, a, s, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)
                }

                function f(t, e, i) {
                    return i || 0 === i || (i = 1), 1 === t && 1 === e && 1 === i ? this : this._t(t, 0, 0, 0, 0, e, 0, 0, 0, 0, i, 0, 0, 0, 0, 1)
                }

                function d(t, e, i, n, r, s, a, o, l, h, c, p, f, d, u, m) {
                    return this.props[0] = t, this.props[1] = e, this.props[2] = i, this.props[3] = n, this.props[4] = r, this.props[5] = s, this.props[6] = a, this.props[7] = o, this.props[8] = l, this.props[9] = h, this.props[10] = c, this.props[11] = p, this.props[12] = f, this.props[13] = d, this.props[14] = u, this.props[15] = m, this
                }

                function u(t, e, i) {
                    return i = i || 0, 0 !== t || 0 !== e || 0 !== i ? this._t(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, t, e, i, 1) : this
                }

                function m(t, e, i, n, r, s, a, o, l, h, c, p, f, d, u, m) {
                    var g = this.props;
                    if (1 === t && 0 === e && 0 === i && 0 === n && 0 === r && 1 === s && 0 === a && 0 === o && 0 === l && 0 === h && 1 === c && 0 === p) return g[12] = g[12] * t + g[15] * f, g[13] = g[13] * s + g[15] * d, g[14] = g[14] * c + g[15] * u, g[15] *= m, this._identityCalculated = !1, this;
                    var y = g[0],
                        v = g[1],
                        b = g[2],
                        x = g[3],
                        w = g[4],
                        S = g[5],
                        E = g[6],
                        C = g[7],
                        P = g[8],
                        T = g[9],
                        _ = g[10],
                        k = g[11],
                        A = g[12],
                        D = g[13],
                        M = g[14],
                        F = g[15];
                    return g[0] = y * t + v * r + b * l + x * f, g[1] = y * e + v * s + b * h + x * d, g[2] = y * i + v * a + b * c + x * u, g[3] = y * n + v * o + b * p + x * m, g[4] = w * t + S * r + E * l + C * f, g[5] = w * e + S * s + E * h + C * d, g[6] = w * i + S * a + E * c + C * u, g[7] = w * n + S * o + E * p + C * m, g[8] = P * t + T * r + _ * l + k * f, g[9] = P * e + T * s + _ * h + k * d, g[10] = P * i + T * a + _ * c + k * u, g[11] = P * n + T * o + _ * p + k * m, g[12] = A * t + D * r + M * l + F * f, g[13] = A * e + D * s + M * h + F * d, g[14] = A * i + D * a + M * c + F * u, g[15] = A * n + D * o + M * p + F * m, this._identityCalculated = !1, this
                }

                function g() {
                    return this._identityCalculated || (this._identity = !(1 !== this.props[0] || 0 !== this.props[1] || 0 !== this.props[2] || 0 !== this.props[3] || 0 !== this.props[4] || 1 !== this.props[5] || 0 !== this.props[6] || 0 !== this.props[7] || 0 !== this.props[8] || 0 !== this.props[9] || 1 !== this.props[10] || 0 !== this.props[11] || 0 !== this.props[12] || 0 !== this.props[13] || 0 !== this.props[14] || 1 !== this.props[15]), this._identityCalculated = !0), this._identity
                }

                function y(t) {
                    for (var e = 0; e < 16;) {
                        if (t.props[e] !== this.props[e]) return !1;
                        e += 1
                    }
                    return !0
                }

                function v(t) {
                    var e;
                    for (e = 0; e < 16; e += 1) t.props[e] = this.props[e];
                    return t
                }

                function b(t) {
                    var e;
                    for (e = 0; e < 16; e += 1) this.props[e] = t[e]
                }

                function x(t, e, i) {
                    return {
                        x: t * this.props[0] + e * this.props[4] + i * this.props[8] + this.props[12],
                        y: t * this.props[1] + e * this.props[5] + i * this.props[9] + this.props[13],
                        z: t * this.props[2] + e * this.props[6] + i * this.props[10] + this.props[14]
                    }
                }

                function w(t, e, i) {
                    return t * this.props[0] + e * this.props[4] + i * this.props[8] + this.props[12]
                }

                function S(t, e, i) {
                    return t * this.props[1] + e * this.props[5] + i * this.props[9] + this.props[13]
                }

                function E(t, e, i) {
                    return t * this.props[2] + e * this.props[6] + i * this.props[10] + this.props[14]
                }

                function C() {
                    var t = this.props[0] * this.props[5] - this.props[1] * this.props[4],
                        e = this.props[5] / t,
                        i = -this.props[1] / t,
                        n = -this.props[4] / t,
                        r = this.props[0] / t,
                        s = (this.props[4] * this.props[13] - this.props[5] * this.props[12]) / t,
                        a = -(this.props[0] * this.props[13] - this.props[1] * this.props[12]) / t,
                        o = new Matrix;
                    return o.props[0] = e, o.props[1] = i, o.props[4] = n, o.props[5] = r, o.props[12] = s, o.props[13] = a, o
                }

                function P(t) {
                    return this.getInverseMatrix().applyToPointArray(t[0], t[1], t[2] || 0)
                }

                function T(t) {
                    var e, i = t.length,
                        n = [];
                    for (e = 0; e < i; e += 1) n[e] = P(t[e]);
                    return n
                }

                function _(t, e, i) {
                    var n = createTypedArray("float32", 6);
                    if (this.isIdentity()) n[0] = t[0], n[1] = t[1], n[2] = e[0], n[3] = e[1], n[4] = i[0], n[5] = i[1];
                    else {
                        var r = this.props[0],
                            s = this.props[1],
                            a = this.props[4],
                            o = this.props[5],
                            l = this.props[12],
                            h = this.props[13];
                        n[0] = t[0] * r + t[1] * a + l, n[1] = t[0] * s + t[1] * o + h, n[2] = e[0] * r + e[1] * a + l, n[3] = e[0] * s + e[1] * o + h, n[4] = i[0] * r + i[1] * a + l, n[5] = i[0] * s + i[1] * o + h
                    }
                    return n
                }

                function k(t, e, i) {
                    return this.isIdentity() ? [t, e, i] : [t * this.props[0] + e * this.props[4] + i * this.props[8] + this.props[12], t * this.props[1] + e * this.props[5] + i * this.props[9] + this.props[13], t * this.props[2] + e * this.props[6] + i * this.props[10] + this.props[14]]
                }

                function A(t, e) {
                    if (this.isIdentity()) return t + "," + e;
                    var i = this.props;
                    return Math.round(100 * (t * i[0] + e * i[4] + i[12])) / 100 + "," + Math.round(100 * (t * i[1] + e * i[5] + i[13])) / 100
                }

                function D() {
                    for (var t = 0, e = this.props, i = "matrix3d("; t < 16;) i += n(1e4 * e[t]) / 1e4, i += 15 === t ? ")" : ",", t += 1;
                    return i
                }

                function M(t) {
                    return t < 1e-6 && t > 0 || t > -1e-6 && t < 0 ? n(1e4 * t) / 1e4 : t
                }

                function F() {
                    var t = this.props;
                    return "matrix(" + M(t[0]) + "," + M(t[1]) + "," + M(t[4]) + "," + M(t[5]) + "," + M(t[12]) + "," + M(t[13]) + ")"
                }
                return function() {
                    this.reset = r, this.rotate = s, this.rotateX = a, this.rotateY = o, this.rotateZ = l, this.skew = c, this.skewFromAxis = p, this.shear = h, this.scale = f, this.setTransform = d, this.translate = u, this.transform = m, this.applyToPoint = x, this.applyToX = w, this.applyToY = S, this.applyToZ = E, this.applyToPointArray = k, this.applyToTriplePoints = _, this.applyToPointStringified = A, this.toCSS = D, this.to2dCSS = F, this.clone = v, this.cloneFromProps = b, this.equals = y, this.inversePoints = T, this.inversePoint = P, this.getInverseMatrix = C, this._t = this.transform, this.isIdentity = g, this._identity = !0, this._identityCalculated = !1, this.props = createTypedArray("float32", 16), this.reset()
                }
            }();
        /*!
         Transformation Matrix v2.0
         (c) Epistemex 2014-2015
         www.epistemex.com
         By Ken Fyrstenberg
         Contributions by leeoniya.
         License: MIT, header required.
         */
        ! function(t, e) {
            var i = this,
                n = e.pow(256, 6),
                r = e.pow(2, 52),
                s = 2 * r;

            function a(t) {
                var e, i = t.length,
                    n = this,
                    r = 0,
                    s = n.i = n.j = 0,
                    a = n.S = [];
                for (i || (t = [i++]); r < 256;) a[r] = r++;
                for (r = 0; r < 256; r++) a[r] = a[s = 255 & s + t[r % i] + (e = a[r])], a[s] = e;
                n.g = function(t) {
                    for (var e, i = 0, r = n.i, s = n.j, a = n.S; t--;) e = a[r = 255 & r + 1], i = 256 * i + a[255 & (a[r] = a[s = 255 & s + e]) + (a[s] = e)];
                    return n.i = r, n.j = s, i
                }
            }

            function o(t, e) {
                return e.i = t.i, e.j = t.j, e.S = t.S.slice(), e
            }

            function l(t, e) {
                for (var i, n = t + "", r = 0; r < n.length;) e[255 & r] = 255 & (i ^= 19 * e[255 & r]) + n.charCodeAt(r++);
                return h(e)
            }

            function h(t) {
                return String.fromCharCode.apply(0, t)
            }
            e.seedrandom = function(c, p, f) {
                var d = [],
                    u = l(function t(e, i) {
                        var n, r = [],
                            s = typeof e;
                        if (i && "object" == s)
                            for (n in e) try {
                                r.push(t(e[n], i - 1))
                            } catch (t) {}
                        return r.length ? r : "string" == s ? e : e + "\0"
                    }((p = !0 === p ? {
                        entropy: !0
                    } : p || {}).entropy ? [c, h(t)] : null === c ? function() {
                        try {
                            void 0;
                            var e = new Uint8Array(256);
                            return (i.crypto || i.msCrypto).getRandomValues(e), h(e)
                        } catch (e) {
                            var n = i.navigator,
                                r = n && n.plugins;
                            return [+new Date, i, r, i.screen, h(t)]
                        }
                    }() : c, 3), d),
                    m = new a(d),
                    g = function() {
                        for (var t = m.g(6), e = n, i = 0; t < r;) t = 256 * (t + i), e *= 256, i = m.g(1);
                        for (; t >= s;) t /= 2, e /= 2, i >>>= 1;
                        return (t + i) / e
                    };
                return g.int32 = function() {
                    return 0 | m.g(4)
                }, g.quick = function() {
                    return m.g(4) / 4294967296
                }, g.double = g, l(h(m.S), t), (p.pass || f || function(t, i, n, r) {
                    return r && (r.S && o(r, m), t.state = function() {
                        return o(m, {})
                    }), n ? (e.random = t, i) : t
                })(g, u, "global" in p ? p.global : this == e, p.state)
            }, l(e.random(), t)
        }([], BMMath);
        var BezierFactory = function() {
            var t = {
                    getBezierEasing: function(t, i, n, r, s) {
                        var a = s || ("bez_" + t + "_" + i + "_" + n + "_" + r).replace(/\./g, "p");
                        if (e[a]) return e[a];
                        var o = new l([t, i, n, r]);
                        return e[a] = o, o
                    }
                },
                e = {};
            var i = "function" == typeof Float32Array;

            function n(t, e) {
                return 1 - 3 * e + 3 * t
            }

            function r(t, e) {
                return 3 * e - 6 * t
            }

            function s(t) {
                return 3 * t
            }

            function a(t, e, i) {
                return ((n(e, i) * t + r(e, i)) * t + s(e)) * t
            }

            function o(t, e, i) {
                return 3 * n(e, i) * t * t + 2 * r(e, i) * t + s(e)
            }

            function l(t) {
                this._p = t, this._mSampleValues = i ? new Float32Array(11) : new Array(11), this._precomputed = !1, this.get = this.get.bind(this)
            }
            return l.prototype = {
                get: function(t) {
                    var e = this._p[0],
                        i = this._p[1],
                        n = this._p[2],
                        r = this._p[3];
                    return this._precomputed || this._precompute(), e === i && n === r ? t : 0 === t ? 0 : 1 === t ? 1 : a(this._getTForX(t), i, r)
                },
                _precompute: function() {
                    var t = this._p[0],
                        e = this._p[1],
                        i = this._p[2],
                        n = this._p[3];
                    this._precomputed = !0, t === e && i === n || this._calcSampleValues()
                },
                _calcSampleValues: function() {
                    for (var t = this._p[0], e = this._p[2], i = 0; i < 11; ++i) this._mSampleValues[i] = a(.1 * i, t, e)
                },
                _getTForX: function(t) {
                    for (var e = this._p[0], i = this._p[2], n = this._mSampleValues, r = 0, s = 1; 10 !== s && n[s] <= t; ++s) r += .1;
                    var l = r + .1 * ((t - n[--s]) / (n[s + 1] - n[s])),
                        h = o(l, e, i);
                    return h >= .001 ? function(t, e, i, n) {
                        for (var r = 0; r < 4; ++r) {
                            var s = o(e, i, n);
                            if (0 === s) return e;
                            e -= (a(e, i, n) - t) / s
                        }
                        return e
                    }(t, l, e, i) : 0 === h ? l : function(t, e, i, n, r) {
                        var s, o, l = 0;
                        do {
                            (s = a(o = e + (i - e) / 2, n, r) - t) > 0 ? i = o : e = o
                        } while (Math.abs(s) > 1e-7 && ++l < 10);
                        return o
                    }(t, r, r + .1, e, i)
                }
            }, t
        }();

        function extendPrototype(t, e) {
            var i, n, r = t.length;
            for (i = 0; i < r; i += 1)
                for (var s in n = t[i].prototype) Object.prototype.hasOwnProperty.call(n, s) && (e.prototype[s] = n[s])
        }

        function getDescriptor(t, e) {
            return Object.getOwnPropertyDescriptor(t, e)
        }

        function createProxyFunction(t) {
            function e() {}
            return e.prototype = t, e
        }

        function bezFunction() {
            var t = Math;

            function e(t, e, i, n, r, s) {
                var a = t * n + e * r + i * s - r * n - s * t - i * e;
                return a > -.001 && a < .001
            }
            var i = function(t, e, i, n) {
                var r, s, a, o, l, h, c = defaultCurveSegments,
                    p = 0,
                    f = [],
                    d = [],
                    u = bezierLengthPool.newElement();
                for (a = i.length, r = 0; r < c; r += 1) {
                    for (l = r / (c - 1), h = 0, s = 0; s < a; s += 1) o = bmPow(1 - l, 3) * t[s] + 3 * bmPow(1 - l, 2) * l * i[s] + 3 * (1 - l) * bmPow(l, 2) * n[s] + bmPow(l, 3) * e[s], f[s] = o, null !== d[s] && (h += bmPow(f[s] - d[s], 2)), d[s] = f[s];
                    h && (p += h = bmSqrt(h)), u.percents[r] = l, u.lengths[r] = p
                }
                return u.addedLength = p, u
            };

            function n(t) {
                this.segmentLength = 0, this.points = new Array(t)
            }

            function r(t, e) {
                this.partialLength = t, this.point = e
            }
            var s, a = (s = {}, function(t, i, a, o) {
                var l = (t[0] + "_" + t[1] + "_" + i[0] + "_" + i[1] + "_" + a[0] + "_" + a[1] + "_" + o[0] + "_" + o[1]).replace(/\./g, "p");
                if (!s[l]) {
                    var h, c, p, f, d, u, m, g = defaultCurveSegments,
                        y = 0,
                        v = null;
                    2 === t.length && (t[0] !== i[0] || t[1] !== i[1]) && e(t[0], t[1], i[0], i[1], t[0] + a[0], t[1] + a[1]) && e(t[0], t[1], i[0], i[1], i[0] + o[0], i[1] + o[1]) && (g = 2);
                    var b = new n(g);
                    for (p = a.length, h = 0; h < g; h += 1) {
                        for (m = createSizedArray(p), d = h / (g - 1), u = 0, c = 0; c < p; c += 1) f = bmPow(1 - d, 3) * t[c] + 3 * bmPow(1 - d, 2) * d * (t[c] + a[c]) + 3 * (1 - d) * bmPow(d, 2) * (i[c] + o[c]) + bmPow(d, 3) * i[c], m[c] = f, null !== v && (u += bmPow(m[c] - v[c], 2));
                        y += u = bmSqrt(u), b.points[h] = new r(u, m), v = m
                    }
                    b.segmentLength = y, s[l] = b
                }
                return s[l]
            });

            function o(t, e) {
                var i = e.percents,
                    n = e.lengths,
                    r = i.length,
                    s = bmFloor((r - 1) * t),
                    a = t * e.addedLength,
                    o = 0;
                if (s === r - 1 || 0 === s || a === n[s]) return i[s];
                for (var l = n[s] > a ? -1 : 1, h = !0; h;)
                    if (n[s] <= a && n[s + 1] > a ? (o = (a - n[s]) / (n[s + 1] - n[s]), h = !1) : s += l, s < 0 || s >= r - 1) {
                        if (s === r - 1) return i[s];
                        h = !1
                    }
                return i[s] + (i[s + 1] - i[s]) * o
            }
            var l = createTypedArray("float32", 8);
            return {
                getSegmentsLength: function(t) {
                    var e, n = segmentsLengthPool.newElement(),
                        r = t.c,
                        s = t.v,
                        a = t.o,
                        o = t.i,
                        l = t._length,
                        h = n.lengths,
                        c = 0;
                    for (e = 0; e < l - 1; e += 1) h[e] = i(s[e], s[e + 1], a[e], o[e + 1]), c += h[e].addedLength;
                    return r && l && (h[e] = i(s[e], s[0], a[e], o[0]), c += h[e].addedLength), n.totalLength = c, n
                },
                getNewSegment: function(e, i, n, r, s, a, h) {
                    s < 0 ? s = 0 : s > 1 && (s = 1);
                    var c, p = o(s, h),
                        f = o(a = a > 1 ? 1 : a, h),
                        d = e.length,
                        u = 1 - p,
                        m = 1 - f,
                        g = u * u * u,
                        y = p * u * u * 3,
                        v = p * p * u * 3,
                        b = p * p * p,
                        x = u * u * m,
                        w = p * u * m + u * p * m + u * u * f,
                        S = p * p * m + u * p * f + p * u * f,
                        E = p * p * f,
                        C = u * m * m,
                        P = p * m * m + u * f * m + u * m * f,
                        T = p * f * m + u * f * f + p * m * f,
                        _ = p * f * f,
                        k = m * m * m,
                        A = f * m * m + m * f * m + m * m * f,
                        D = f * f * m + m * f * f + f * m * f,
                        M = f * f * f;
                    for (c = 0; c < d; c += 1) l[4 * c] = t.round(1e3 * (g * e[c] + y * n[c] + v * r[c] + b * i[c])) / 1e3, l[4 * c + 1] = t.round(1e3 * (x * e[c] + w * n[c] + S * r[c] + E * i[c])) / 1e3, l[4 * c + 2] = t.round(1e3 * (C * e[c] + P * n[c] + T * r[c] + _ * i[c])) / 1e3, l[4 * c + 3] = t.round(1e3 * (k * e[c] + A * n[c] + D * r[c] + M * i[c])) / 1e3;
                    return l
                },
                getPointInSegment: function(e, i, n, r, s, a) {
                    var l = o(s, a),
                        h = 1 - l;
                    return [t.round(1e3 * (h * h * h * e[0] + (l * h * h + h * l * h + h * h * l) * n[0] + (l * l * h + h * l * l + l * h * l) * r[0] + l * l * l * i[0])) / 1e3, t.round(1e3 * (h * h * h * e[1] + (l * h * h + h * l * h + h * h * l) * n[1] + (l * l * h + h * l * l + l * h * l) * r[1] + l * l * l * i[1])) / 1e3]
                },
                buildBezierData: a,
                pointOnLine2D: e,
                pointOnLine3D: function(i, n, r, s, a, o, l, h, c) {
                    if (0 === r && 0 === o && 0 === c) return e(i, n, s, a, l, h);
                    var p, f = t.sqrt(t.pow(s - i, 2) + t.pow(a - n, 2) + t.pow(o - r, 2)),
                        d = t.sqrt(t.pow(l - i, 2) + t.pow(h - n, 2) + t.pow(c - r, 2)),
                        u = t.sqrt(t.pow(l - s, 2) + t.pow(h - a, 2) + t.pow(c - o, 2));
                    return (p = f > d ? f > u ? f - d - u : u - d - f : u > d ? u - d - f : d - f - u) > -1e-4 && p < 1e-4
                }
            }
        }! function() {
            for (var t = 0, e = ["ms", "moz", "webkit", "o"], i = 0; i < e.length && !window.requestAnimationFrame; ++i) window.requestAnimationFrame = window[e[i] + "RequestAnimationFrame"], window.cancelAnimationFrame = window[e[i] + "CancelAnimationFrame"] || window[e[i] + "CancelRequestAnimationFrame"];
            window.requestAnimationFrame || (window.requestAnimationFrame = function(e) {
                var i = (new Date).getTime(),
                    n = Math.max(0, 16 - (i - t)),
                    r = setTimeout((function() {
                        e(i + n)
                    }), n);
                return t = i + n, r
            }), window.cancelAnimationFrame || (window.cancelAnimationFrame = function(t) {
                clearTimeout(t)
            })
        }();
        var bez = bezFunction();

        function dataFunctionManager() {
            function t(r, s, a) {
                var o, l, h, p, f, d, u = r.length;
                for (l = 0; l < u; l += 1)
                    if ("ks" in (o = r[l]) && !o.completed) {
                        if (o.completed = !0, o.tt && (r[l - 1].td = o.tt), o.hasMask) {
                            var m = o.masksProperties;
                            for (p = m.length, h = 0; h < p; h += 1)
                                if (m[h].pt.k.i) n(m[h].pt.k);
                                else
                                    for (d = m[h].pt.k.length, f = 0; f < d; f += 1) m[h].pt.k[f].s && n(m[h].pt.k[f].s[0]), m[h].pt.k[f].e && n(m[h].pt.k[f].e[0])
                        }
                        0 === o.ty ? (o.layers = e(o.refId, s), t(o.layers, s, a)) : 4 === o.ty ? i(o.shapes) : 5 === o.ty && c(o)
                    }
            }

            function e(t, e) {
                for (var i = 0, n = e.length; i < n;) {
                    if (e[i].id === t) return e[i].layers.__used ? JSON.parse(JSON.stringify(e[i].layers)) : (e[i].layers.__used = !0, e[i].layers);
                    i += 1
                }
                return null
            }

            function i(t) {
                var e, r, s;
                for (e = t.length - 1; e >= 0; e -= 1)
                    if ("sh" === t[e].ty)
                        if (t[e].ks.k.i) n(t[e].ks.k);
                        else
                            for (s = t[e].ks.k.length, r = 0; r < s; r += 1) t[e].ks.k[r].s && n(t[e].ks.k[r].s[0]), t[e].ks.k[r].e && n(t[e].ks.k[r].e[0]);
                else "gr" === t[e].ty && i(t[e].it)
            }

            function n(t) {
                var e, i = t.i.length;
                for (e = 0; e < i; e += 1) t.i[e][0] += t.v[e][0], t.i[e][1] += t.v[e][1], t.o[e][0] += t.v[e][0], t.o[e][1] += t.v[e][1]
            }

            function r(t, e) {
                var i = e ? e.split(".") : [100, 100, 100];
                return t[0] > i[0] || !(i[0] > t[0]) && (t[1] > i[1] || !(i[1] > t[1]) && (t[2] > i[2] || !(i[2] > t[2]) && null))
            }
            var s, a = function() {
                    var t = [4, 4, 14];

                    function e(t) {
                        var e, i, n, r = t.length;
                        for (e = 0; e < r; e += 1) 5 === t[e].ty && (i = t[e], n = void 0, n = i.t.d, i.t.d = {
                            k: [{
                                s: n,
                                t: 0
                            }]
                        })
                    }
                    return function(i) {
                        if (r(t, i.v) && (e(i.layers), i.assets)) {
                            var n, s = i.assets.length;
                            for (n = 0; n < s; n += 1) i.assets[n].layers && e(i.assets[n].layers)
                        }
                    }
                }(),
                o = (s = [4, 7, 99], function(t) {
                    if (t.chars && !r(s, t.v)) {
                        var e, i, a, o, l, h = t.chars.length;
                        for (e = 0; e < h; e += 1)
                            if (t.chars[e].data && t.chars[e].data.shapes)
                                for (a = (l = t.chars[e].data.shapes[0].it).length, i = 0; i < a; i += 1)(o = l[i].ks.k).__converted || (n(l[i].ks.k), o.__converted = !0)
                    }
                }),
                l = function() {
                    var t = [4, 1, 9];

                    function e(t) {
                        var i, n, r, s = t.length;
                        for (i = 0; i < s; i += 1)
                            if ("gr" === t[i].ty) e(t[i].it);
                            else if ("fl" === t[i].ty || "st" === t[i].ty)
                            if (t[i].c.k && t[i].c.k[0].i)
                                for (r = t[i].c.k.length, n = 0; n < r; n += 1) t[i].c.k[n].s && (t[i].c.k[n].s[0] /= 255, t[i].c.k[n].s[1] /= 255, t[i].c.k[n].s[2] /= 255, t[i].c.k[n].s[3] /= 255), t[i].c.k[n].e && (t[i].c.k[n].e[0] /= 255, t[i].c.k[n].e[1] /= 255, t[i].c.k[n].e[2] /= 255, t[i].c.k[n].e[3] /= 255);
                            else t[i].c.k[0] /= 255, t[i].c.k[1] /= 255, t[i].c.k[2] /= 255, t[i].c.k[3] /= 255
                    }

                    function i(t) {
                        var i, n = t.length;
                        for (i = 0; i < n; i += 1) 4 === t[i].ty && e(t[i].shapes)
                    }
                    return function(e) {
                        if (r(t, e.v) && (i(e.layers), e.assets)) {
                            var n, s = e.assets.length;
                            for (n = 0; n < s; n += 1) e.assets[n].layers && i(e.assets[n].layers)
                        }
                    }
                }(),
                h = function() {
                    var t = [4, 4, 18];

                    function e(t) {
                        var i, n, r;
                        for (i = t.length - 1; i >= 0; i -= 1)
                            if ("sh" === t[i].ty)
                                if (t[i].ks.k.i) t[i].ks.k.c = t[i].closed;
                                else
                                    for (r = t[i].ks.k.length, n = 0; n < r; n += 1) t[i].ks.k[n].s && (t[i].ks.k[n].s[0].c = t[i].closed), t[i].ks.k[n].e && (t[i].ks.k[n].e[0].c = t[i].closed);
                        else "gr" === t[i].ty && e(t[i].it)
                    }

                    function i(t) {
                        var i, n, r, s, a, o, l = t.length;
                        for (n = 0; n < l; n += 1) {
                            if ((i = t[n]).hasMask) {
                                var h = i.masksProperties;
                                for (s = h.length, r = 0; r < s; r += 1)
                                    if (h[r].pt.k.i) h[r].pt.k.c = h[r].cl;
                                    else
                                        for (o = h[r].pt.k.length, a = 0; a < o; a += 1) h[r].pt.k[a].s && (h[r].pt.k[a].s[0].c = h[r].cl), h[r].pt.k[a].e && (h[r].pt.k[a].e[0].c = h[r].cl)
                            }
                            4 === i.ty && e(i.shapes)
                        }
                    }
                    return function(e) {
                        if (r(t, e.v) && (i(e.layers), e.assets)) {
                            var n, s = e.assets.length;
                            for (n = 0; n < s; n += 1) e.assets[n].layers && i(e.assets[n].layers)
                        }
                    }
                }();

            function c(t) {
                0 !== t.t.a.length || "m" in t.t.p || (t.singleShape = !0)
            }
            var p = {
                completeData: function(e, i) {
                    e.__complete || (l(e), a(e), o(e), h(e), t(e.layers, e.assets, i), e.__complete = !0)
                }
            };
            return p.checkColors = l, p.checkChars = o, p.checkShapes = h, p.completeLayers = t, p
        }
        var dataManager = dataFunctionManager();

        function getFontProperties(t) {
            for (var e = t.fStyle ? t.fStyle.split(" ") : [], i = "normal", n = "normal", r = e.length, s = 0; s < r; s += 1) switch (e[s].toLowerCase()) {
                case "italic":
                    n = "italic";
                    break;
                case "bold":
                    i = "700";
                    break;
                case "black":
                    i = "900";
                    break;
                case "medium":
                    i = "500";
                    break;
                case "regular":
                case "normal":
                    i = "400";
                    break;
                case "light":
                case "thin":
                    i = "200"
            }
            return {
                style: n,
                weight: t.fWeight || i
            }
        }
        var FontManager = function() {
                var t = {
                        w: 0,
                        size: 0,
                        shapes: []
                    },
                    e = [];

                function i(t, e) {
                    var i = createTag("span");
                    i.setAttribute("aria-hidden", !0), i.style.fontFamily = e;
                    var n = createTag("span");
                    n.innerText = "giItT1WQy@!-/#", i.style.position = "absolute", i.style.left = "-10000px", i.style.top = "-10000px", i.style.fontSize = "300px", i.style.fontVariant = "normal", i.style.fontStyle = "normal", i.style.fontWeight = "normal", i.style.letterSpacing = "0", i.appendChild(n), document.body.appendChild(i);
                    var r = n.offsetWidth;
                    return n.style.fontFamily = function(t) {
                        var e, i = t.split(","),
                            n = i.length,
                            r = [];
                        for (e = 0; e < n; e += 1) "sans-serif" !== i[e] && "monospace" !== i[e] && r.push(i[e]);
                        return r.join(",")
                    }(t) + ", " + e, {
                        node: n,
                        w: r,
                        parent: i
                    }
                }

                function n(t, e) {
                    var i = createNS("text");
                    i.style.fontSize = "100px";
                    var n = getFontProperties(e);
                    return i.setAttribute("font-family", e.fFamily), i.setAttribute("font-style", n.style), i.setAttribute("font-weight", n.weight), i.textContent = "1", e.fClass ? (i.style.fontFamily = "inherit", i.setAttribute("class", e.fClass)) : i.style.fontFamily = e.fFamily, t.appendChild(i), createTag("canvas").getContext("2d").font = e.fWeight + " " + e.fStyle + " 100px " + e.fFamily, i
                }
                e = e.concat([2304, 2305, 2306, 2307, 2362, 2363, 2364, 2364, 2366, 2367, 2368, 2369, 2370, 2371, 2372, 2373, 2374, 2375, 2376, 2377, 2378, 2379, 2380, 2381, 2382, 2383, 2387, 2388, 2389, 2390, 2391, 2402, 2403]);
                var r = function() {
                    this.fonts = [], this.chars = null, this.typekitLoaded = 0, this.isLoaded = !1, this._warned = !1, this.initTime = Date.now(), this.setIsLoadedBinded = this.setIsLoaded.bind(this), this.checkLoadedFontsBinded = this.checkLoadedFonts.bind(this)
                };
                return r.getCombinedCharacterCodes = function() {
                    return e
                }, r.prototype = {
                    addChars: function(t) {
                        if (t) {
                            var e;
                            this.chars || (this.chars = []);
                            var i, n, r = t.length,
                                s = this.chars.length;
                            for (e = 0; e < r; e += 1) {
                                for (i = 0, n = !1; i < s;) this.chars[i].style === t[e].style && this.chars[i].fFamily === t[e].fFamily && this.chars[i].ch === t[e].ch && (n = !0), i += 1;
                                n || (this.chars.push(t[e]), s += 1)
                            }
                        }
                    },
                    addFonts: function(t, e) {
                        if (t) {
                            if (this.chars) return this.isLoaded = !0, void(this.fonts = t.list);
                            var r, s = t.list,
                                a = s.length,
                                o = a;
                            for (r = 0; r < a; r += 1) {
                                var l, h, c = !0;
                                if (s[r].loaded = !1, s[r].monoCase = i(s[r].fFamily, "monospace"), s[r].sansCase = i(s[r].fFamily, "sans-serif"), s[r].fPath) {
                                    if ("p" === s[r].fOrigin || 3 === s[r].origin) {
                                        if ((l = document.querySelectorAll('style[f-forigin="p"][f-family="' + s[r].fFamily + '"], style[f-origin="3"][f-family="' + s[r].fFamily + '"]')).length > 0 && (c = !1), c) {
                                            var p = createTag("style");
                                            p.setAttribute("f-forigin", s[r].fOrigin), p.setAttribute("f-origin", s[r].origin), p.setAttribute("f-family", s[r].fFamily), p.type = "text/css", p.innerText = "@font-face {font-family: " + s[r].fFamily + "; font-style: normal; src: url('" + s[r].fPath + "');}", e.appendChild(p)
                                        }
                                    } else if ("g" === s[r].fOrigin || 1 === s[r].origin) {
                                        for (l = document.querySelectorAll('link[f-forigin="g"], link[f-origin="1"]'), h = 0; h < l.length; h += 1) - 1 !== l[h].href.indexOf(s[r].fPath) && (c = !1);
                                        if (c) {
                                            var f = createTag("link");
                                            f.setAttribute("f-forigin", s[r].fOrigin), f.setAttribute("f-origin", s[r].origin), f.type = "text/css", f.rel = "stylesheet", f.href = s[r].fPath, document.body.appendChild(f)
                                        }
                                    } else if ("t" === s[r].fOrigin || 2 === s[r].origin) {
                                        for (l = document.querySelectorAll('script[f-forigin="t"], script[f-origin="2"]'), h = 0; h < l.length; h += 1) s[r].fPath === l[h].src && (c = !1);
                                        if (c) {
                                            var d = createTag("link");
                                            d.setAttribute("f-forigin", s[r].fOrigin), d.setAttribute("f-origin", s[r].origin), d.setAttribute("rel", "stylesheet"), d.setAttribute("href", s[r].fPath), e.appendChild(d)
                                        }
                                    }
                                } else s[r].loaded = !0, o -= 1;
                                s[r].helper = n(e, s[r]), s[r].cache = {}, this.fonts.push(s[r])
                            }
                            0 === o ? this.isLoaded = !0 : setTimeout(this.checkLoadedFonts.bind(this), 100)
                        } else this.isLoaded = !0
                    },
                    getCharData: function(e, i, n) {
                        for (var r = 0, s = this.chars.length; r < s;) {
                            if (this.chars[r].ch === e && this.chars[r].style === i && this.chars[r].fFamily === n) return this.chars[r];
                            r += 1
                        }
                        return ("string" == typeof e && 13 !== e.charCodeAt(0) || !e) && console && console.warn && !this._warned && (this._warned = !0, console.warn("Missing character from exported characters list: ", e, i, n)), t
                    },
                    getFontByName: function(t) {
                        for (var e = 0, i = this.fonts.length; e < i;) {
                            if (this.fonts[e].fName === t) return this.fonts[e];
                            e += 1
                        }
                        return this.fonts[0]
                    },
                    measureText: function(t, e, i) {
                        var n = this.getFontByName(e),
                            r = t.charCodeAt(0);
                        if (!n.cache[r + 1]) {
                            var s = n.helper;
                            if (" " === t) {
                                s.textContent = "|" + t + "|";
                                var a = s.getComputedTextLength();
                                s.textContent = "||";
                                var o = s.getComputedTextLength();
                                n.cache[r + 1] = (a - o) / 100
                            } else s.textContent = t, n.cache[r + 1] = s.getComputedTextLength() / 100
                        }
                        return n.cache[r + 1] * i
                    },
                    checkLoadedFonts: function() {
                        var t, e, i, n = this.fonts.length,
                            r = n;
                        for (t = 0; t < n; t += 1) this.fonts[t].loaded ? r -= 1 : "n" === this.fonts[t].fOrigin || 0 === this.fonts[t].origin ? this.fonts[t].loaded = !0 : (e = this.fonts[t].monoCase.node, i = this.fonts[t].monoCase.w, e.offsetWidth !== i ? (r -= 1, this.fonts[t].loaded = !0) : (e = this.fonts[t].sansCase.node, i = this.fonts[t].sansCase.w, e.offsetWidth !== i && (r -= 1, this.fonts[t].loaded = !0)), this.fonts[t].loaded && (this.fonts[t].sansCase.parent.parentNode.removeChild(this.fonts[t].sansCase.parent), this.fonts[t].monoCase.parent.parentNode.removeChild(this.fonts[t].monoCase.parent)));
                        0 !== r && Date.now() - this.initTime < 5e3 ? setTimeout(this.checkLoadedFontsBinded, 20) : setTimeout(this.setIsLoadedBinded, 10)
                    },
                    setIsLoaded: function() {
                        this.isLoaded = !0
                    }
                }, r
            }(),
            PropertyFactory = function() {
                var t = initialDefaultFrame,
                    e = Math.abs;

                function i(t, e) {
                    var i, r = this.offsetTime;
                    "multidimensional" === this.propType && (i = createTypedArray("float32", this.pv.length));
                    for (var s, a, o, l, h, c, p, f, d = e.lastIndex, u = d, m = this.keyframes.length - 1, g = !0; g;) {
                        if (s = this.keyframes[u], a = this.keyframes[u + 1], u === m - 1 && t >= a.t - r) {
                            s.h && (s = a), d = 0;
                            break
                        }
                        if (a.t - r > t) {
                            d = u;
                            break
                        }
                        u < m - 1 ? u += 1 : (d = 0, g = !1)
                    }
                    var y, v = a.t - r,
                        b = s.t - r;
                    if (s.to) {
                        s.bezierData || (s.bezierData = bez.buildBezierData(s.s, a.s || s.e, s.to, s.ti));
                        var x = s.bezierData;
                        if (t >= v || t < b) {
                            var w = t >= v ? x.points.length - 1 : 0;
                            for (l = x.points[w].point.length, o = 0; o < l; o += 1) i[o] = x.points[w].point[o]
                        } else {
                            s.__fnct ? f = s.__fnct : (f = BezierFactory.getBezierEasing(s.o.x, s.o.y, s.i.x, s.i.y, s.n).get, s.__fnct = f), h = f((t - b) / (v - b));
                            var S, E = x.segmentLength * h,
                                C = e.lastFrame < t && e._lastKeyframeIndex === u ? e._lastAddedLength : 0;
                            for (p = e.lastFrame < t && e._lastKeyframeIndex === u ? e._lastPoint : 0, g = !0, c = x.points.length; g;) {
                                if (C += x.points[p].partialLength, 0 === E || 0 === h || p === x.points.length - 1) {
                                    for (l = x.points[p].point.length, o = 0; o < l; o += 1) i[o] = x.points[p].point[o];
                                    break
                                }
                                if (E >= C && E < C + x.points[p + 1].partialLength) {
                                    for (S = (E - C) / x.points[p + 1].partialLength, l = x.points[p].point.length, o = 0; o < l; o += 1) i[o] = x.points[p].point[o] + (x.points[p + 1].point[o] - x.points[p].point[o]) * S;
                                    break
                                }
                                p < c - 1 ? p += 1 : g = !1
                            }
                            e._lastPoint = p, e._lastAddedLength = C - x.points[p].partialLength, e._lastKeyframeIndex = u
                        }
                    } else {
                        var P, T, _, k, A;
                        if (m = s.s.length, y = a.s || s.e, this.sh && 1 !== s.h)
                            if (t >= v) i[0] = y[0], i[1] = y[1], i[2] = y[2];
                            else if (t <= b) i[0] = s.s[0], i[1] = s.s[1], i[2] = s.s[2];
                        else {
                            ! function(t, e) {
                                var i = e[0],
                                    n = e[1],
                                    r = e[2],
                                    s = e[3],
                                    a = Math.atan2(2 * n * s - 2 * i * r, 1 - 2 * n * n - 2 * r * r),
                                    o = Math.asin(2 * i * n + 2 * r * s),
                                    l = Math.atan2(2 * i * s - 2 * n * r, 1 - 2 * i * i - 2 * r * r);
                                t[0] = a / degToRads, t[1] = o / degToRads, t[2] = l / degToRads
                            }(i, function(t, e, i) {
                                var n, r, s, a, o, l = [],
                                    h = t[0],
                                    c = t[1],
                                    p = t[2],
                                    f = t[3],
                                    d = e[0],
                                    u = e[1],
                                    m = e[2],
                                    g = e[3];
                                (r = h * d + c * u + p * m + f * g) < 0 && (r = -r, d = -d, u = -u, m = -m, g = -g);
                                1 - r > 1e-6 ? (n = Math.acos(r), s = Math.sin(n), a = Math.sin((1 - i) * n) / s, o = Math.sin(i * n) / s) : (a = 1 - i, o = i);
                                return l[0] = a * h + o * d, l[1] = a * c + o * u, l[2] = a * p + o * m, l[3] = a * f + o * g, l
                            }(n(s.s), n(y), (t - b) / (v - b)))
                        } else
                            for (u = 0; u < m; u += 1) 1 !== s.h && (t >= v ? h = 1 : t < b ? h = 0 : (s.o.x.constructor === Array ? (s.__fnct || (s.__fnct = []), s.__fnct[u] ? f = s.__fnct[u] : (P = void 0 === s.o.x[u] ? s.o.x[0] : s.o.x[u], T = void 0 === s.o.y[u] ? s.o.y[0] : s.o.y[u], _ = void 0 === s.i.x[u] ? s.i.x[0] : s.i.x[u], k = void 0 === s.i.y[u] ? s.i.y[0] : s.i.y[u], f = BezierFactory.getBezierEasing(P, T, _, k).get, s.__fnct[u] = f)) : s.__fnct ? f = s.__fnct : (P = s.o.x, T = s.o.y, _ = s.i.x, k = s.i.y, f = BezierFactory.getBezierEasing(P, T, _, k).get, s.__fnct = f), h = f((t - b) / (v - b)))), y = a.s || s.e, A = 1 === s.h ? s.s[u] : s.s[u] + (y[u] - s.s[u]) * h, "multidimensional" === this.propType ? i[u] = A : i = A
                    }
                    return e.lastIndex = d, i
                }

                function n(t) {
                    var e = t[0] * degToRads,
                        i = t[1] * degToRads,
                        n = t[2] * degToRads,
                        r = Math.cos(e / 2),
                        s = Math.cos(i / 2),
                        a = Math.cos(n / 2),
                        o = Math.sin(e / 2),
                        l = Math.sin(i / 2),
                        h = Math.sin(n / 2);
                    return [o * l * a + r * s * h, o * s * a + r * l * h, r * l * a - o * s * h, r * s * a - o * l * h]
                }

                function r() {
                    var e = this.comp.renderedFrame - this.offsetTime,
                        i = this.keyframes[0].t - this.offsetTime,
                        n = this.keyframes[this.keyframes.length - 1].t - this.offsetTime;
                    if (!(e === this._caching.lastFrame || this._caching.lastFrame !== t && (this._caching.lastFrame >= n && e >= n || this._caching.lastFrame < i && e < i))) {
                        this._caching.lastFrame >= e && (this._caching._lastKeyframeIndex = -1, this._caching.lastIndex = 0);
                        var r = this.interpolateValue(e, this._caching);
                        this.pv = r
                    }
                    return this._caching.lastFrame = e, this.pv
                }

                function s(t) {
                    var i;
                    if ("unidimensional" === this.propType) i = t * this.mult, e(this.v - i) > 1e-5 && (this.v = i, this._mdf = !0);
                    else
                        for (var n = 0, r = this.v.length; n < r;) i = t[n] * this.mult, e(this.v[n] - i) > 1e-5 && (this.v[n] = i, this._mdf = !0), n += 1
                }

                function a() {
                    if (this.elem.globalData.frameId !== this.frameId && this.effectsSequence.length)
                        if (this.lock) this.setVValue(this.pv);
                        else {
                            var t;
                            this.lock = !0, this._mdf = this._isFirstFrame;
                            var e = this.effectsSequence.length,
                                i = this.kf ? this.pv : this.data.k;
                            for (t = 0; t < e; t += 1) i = this.effectsSequence[t](i);
                            this.setVValue(i), this._isFirstFrame = !1, this.lock = !1, this.frameId = this.elem.globalData.frameId
                        }
                }

                function o(t) {
                    this.effectsSequence.push(t), this.container.addDynamicProperty(this)
                }

                function l(t, e, i, n) {
                    this.propType = "unidimensional", this.mult = i || 1, this.data = e, this.v = i ? e.k * i : e.k, this.pv = e.k, this._mdf = !1, this.elem = t, this.container = n, this.comp = t.comp, this.k = !1, this.kf = !1, this.vel = 0, this.effectsSequence = [], this._isFirstFrame = !0, this.getValue = a, this.setVValue = s, this.addEffect = o
                }

                function h(t, e, i, n) {
                    var r;
                    this.propType = "multidimensional", this.mult = i || 1, this.data = e, this._mdf = !1, this.elem = t, this.container = n, this.comp = t.comp, this.k = !1, this.kf = !1, this.frameId = -1;
                    var l = e.k.length;
                    for (this.v = createTypedArray("float32", l), this.pv = createTypedArray("float32", l), this.vel = createTypedArray("float32", l), r = 0; r < l; r += 1) this.v[r] = e.k[r] * this.mult, this.pv[r] = e.k[r];
                    this._isFirstFrame = !0, this.effectsSequence = [], this.getValue = a, this.setVValue = s, this.addEffect = o
                }

                function c(e, n, l, h) {
                    this.propType = "unidimensional", this.keyframes = n.k, this.offsetTime = e.data.st, this.frameId = -1, this._caching = {
                        lastFrame: t,
                        lastIndex: 0,
                        value: 0,
                        _lastKeyframeIndex: -1
                    }, this.k = !0, this.kf = !0, this.data = n, this.mult = l || 1, this.elem = e, this.container = h, this.comp = e.comp, this.v = t, this.pv = t, this._isFirstFrame = !0, this.getValue = a, this.setVValue = s, this.interpolateValue = i, this.effectsSequence = [r.bind(this)], this.addEffect = o
                }

                function p(e, n, l, h) {
                    var c;
                    this.propType = "multidimensional";
                    var p, f, d, u, m = n.k.length;
                    for (c = 0; c < m - 1; c += 1) n.k[c].to && n.k[c].s && n.k[c + 1] && n.k[c + 1].s && (p = n.k[c].s, f = n.k[c + 1].s, d = n.k[c].to, u = n.k[c].ti, (2 === p.length && (p[0] !== f[0] || p[1] !== f[1]) && bez.pointOnLine2D(p[0], p[1], f[0], f[1], p[0] + d[0], p[1] + d[1]) && bez.pointOnLine2D(p[0], p[1], f[0], f[1], f[0] + u[0], f[1] + u[1]) || 3 === p.length && (p[0] !== f[0] || p[1] !== f[1] || p[2] !== f[2]) && bez.pointOnLine3D(p[0], p[1], p[2], f[0], f[1], f[2], p[0] + d[0], p[1] + d[1], p[2] + d[2]) && bez.pointOnLine3D(p[0], p[1], p[2], f[0], f[1], f[2], f[0] + u[0], f[1] + u[1], f[2] + u[2])) && (n.k[c].to = null, n.k[c].ti = null), p[0] === f[0] && p[1] === f[1] && 0 === d[0] && 0 === d[1] && 0 === u[0] && 0 === u[1] && (2 === p.length || p[2] === f[2] && 0 === d[2] && 0 === u[2]) && (n.k[c].to = null, n.k[c].ti = null));
                    this.effectsSequence = [r.bind(this)], this.data = n, this.keyframes = n.k, this.offsetTime = e.data.st, this.k = !0, this.kf = !0, this._isFirstFrame = !0, this.mult = l || 1, this.elem = e, this.container = h, this.comp = e.comp, this.getValue = a, this.setVValue = s, this.interpolateValue = i, this.frameId = -1;
                    var g = n.k[0].s.length;
                    for (this.v = createTypedArray("float32", g), this.pv = createTypedArray("float32", g), c = 0; c < g; c += 1) this.v[c] = t, this.pv[c] = t;
                    this._caching = {
                        lastFrame: t,
                        lastIndex: 0,
                        value: createTypedArray("float32", g)
                    }, this.addEffect = o
                }
                return {
                    getProp: function(t, e, i, n, r) {
                        var s;
                        if (e.k.length)
                            if ("number" == typeof e.k[0]) s = new h(t, e, n, r);
                            else switch (i) {
                                case 0:
                                    s = new c(t, e, n, r);
                                    break;
                                case 1:
                                    s = new p(t, e, n, r)
                            } else s = new l(t, e, n, r);
                        return s.effectsSequence.length && r.addDynamicProperty(s), s
                    }
                }
            }(),
            TransformPropertyFactory = function() {
                var t = [0, 0];

                function e(t, e, i) {
                    if (this.elem = t, this.frameId = -1, this.propType = "transform", this.data = e, this.v = new Matrix, this.pre = new Matrix, this.appliedTransformations = 0, this.initDynamicPropertyContainer(i || t), e.p && e.p.s ? (this.px = PropertyFactory.getProp(t, e.p.x, 0, 0, this), this.py = PropertyFactory.getProp(t, e.p.y, 0, 0, this), e.p.z && (this.pz = PropertyFactory.getProp(t, e.p.z, 0, 0, this))) : this.p = PropertyFactory.getProp(t, e.p || {
                            k: [0, 0, 0]
                        }, 1, 0, this), e.rx) {
                        if (this.rx = PropertyFactory.getProp(t, e.rx, 0, degToRads, this), this.ry = PropertyFactory.getProp(t, e.ry, 0, degToRads, this), this.rz = PropertyFactory.getProp(t, e.rz, 0, degToRads, this), e.or.k[0].ti) {
                            var n, r = e.or.k.length;
                            for (n = 0; n < r; n += 1) e.or.k[n].to = null, e.or.k[n].ti = null
                        }
                        this.or = PropertyFactory.getProp(t, e.or, 1, degToRads, this), this.or.sh = !0
                    } else this.r = PropertyFactory.getProp(t, e.r || {
                        k: 0
                    }, 0, degToRads, this);
                    e.sk && (this.sk = PropertyFactory.getProp(t, e.sk, 0, degToRads, this), this.sa = PropertyFactory.getProp(t, e.sa, 0, degToRads, this)), this.a = PropertyFactory.getProp(t, e.a || {
                        k: [0, 0, 0]
                    }, 1, 0, this), this.s = PropertyFactory.getProp(t, e.s || {
                        k: [100, 100, 100]
                    }, 1, .01, this), e.o ? this.o = PropertyFactory.getProp(t, e.o, 0, .01, t) : this.o = {
                        _mdf: !1,
                        v: 1
                    }, this._isDirty = !0, this.dynamicProperties.length || this.getValue(!0)
                }
                return e.prototype = {
                    applyToMatrix: function(t) {
                        var e = this._mdf;
                        this.iterateDynamicProperties(), this._mdf = this._mdf || e, this.a && t.translate(-this.a.v[0], -this.a.v[1], this.a.v[2]), this.s && t.scale(this.s.v[0], this.s.v[1], this.s.v[2]), this.sk && t.skewFromAxis(-this.sk.v, this.sa.v), this.r ? t.rotate(-this.r.v) : t.rotateZ(-this.rz.v).rotateY(this.ry.v).rotateX(this.rx.v).rotateZ(-this.or.v[2]).rotateY(this.or.v[1]).rotateX(this.or.v[0]), this.data.p.s ? this.data.p.z ? t.translate(this.px.v, this.py.v, -this.pz.v) : t.translate(this.px.v, this.py.v, 0) : t.translate(this.p.v[0], this.p.v[1], -this.p.v[2])
                    },
                    getValue: function(e) {
                        if (this.elem.globalData.frameId !== this.frameId) {
                            if (this._isDirty && (this.precalculateMatrix(), this._isDirty = !1), this.iterateDynamicProperties(), this._mdf || e) {
                                var i;
                                if (this.v.cloneFromProps(this.pre.props), this.appliedTransformations < 1 && this.v.translate(-this.a.v[0], -this.a.v[1], this.a.v[2]), this.appliedTransformations < 2 && this.v.scale(this.s.v[0], this.s.v[1], this.s.v[2]), this.sk && this.appliedTransformations < 3 && this.v.skewFromAxis(-this.sk.v, this.sa.v), this.r && this.appliedTransformations < 4 ? this.v.rotate(-this.r.v) : !this.r && this.appliedTransformations < 4 && this.v.rotateZ(-this.rz.v).rotateY(this.ry.v).rotateX(this.rx.v).rotateZ(-this.or.v[2]).rotateY(this.or.v[1]).rotateX(this.or.v[0]), this.autoOriented) {
                                    var n, r;
                                    if (i = this.elem.globalData.frameRate, this.p && this.p.keyframes && this.p.getValueAtTime) this.p._caching.lastFrame + this.p.offsetTime <= this.p.keyframes[0].t ? (n = this.p.getValueAtTime((this.p.keyframes[0].t + .01) / i, 0), r = this.p.getValueAtTime(this.p.keyframes[0].t / i, 0)) : this.p._caching.lastFrame + this.p.offsetTime >= this.p.keyframes[this.p.keyframes.length - 1].t ? (n = this.p.getValueAtTime(this.p.keyframes[this.p.keyframes.length - 1].t / i, 0), r = this.p.getValueAtTime((this.p.keyframes[this.p.keyframes.length - 1].t - .05) / i, 0)) : (n = this.p.pv, r = this.p.getValueAtTime((this.p._caching.lastFrame + this.p.offsetTime - .01) / i, this.p.offsetTime));
                                    else if (this.px && this.px.keyframes && this.py.keyframes && this.px.getValueAtTime && this.py.getValueAtTime) {
                                        n = [], r = [];
                                        var s = this.px,
                                            a = this.py;
                                        s._caching.lastFrame + s.offsetTime <= s.keyframes[0].t ? (n[0] = s.getValueAtTime((s.keyframes[0].t + .01) / i, 0), n[1] = a.getValueAtTime((a.keyframes[0].t + .01) / i, 0), r[0] = s.getValueAtTime(s.keyframes[0].t / i, 0), r[1] = a.getValueAtTime(a.keyframes[0].t / i, 0)) : s._caching.lastFrame + s.offsetTime >= s.keyframes[s.keyframes.length - 1].t ? (n[0] = s.getValueAtTime(s.keyframes[s.keyframes.length - 1].t / i, 0), n[1] = a.getValueAtTime(a.keyframes[a.keyframes.length - 1].t / i, 0), r[0] = s.getValueAtTime((s.keyframes[s.keyframes.length - 1].t - .01) / i, 0), r[1] = a.getValueAtTime((a.keyframes[a.keyframes.length - 1].t - .01) / i, 0)) : (n = [s.pv, a.pv], r[0] = s.getValueAtTime((s._caching.lastFrame + s.offsetTime - .01) / i, s.offsetTime), r[1] = a.getValueAtTime((a._caching.lastFrame + a.offsetTime - .01) / i, a.offsetTime))
                                    } else n = r = t;
                                    this.v.rotate(-Math.atan2(n[1] - r[1], n[0] - r[0]))
                                }
                                this.data.p && this.data.p.s ? this.data.p.z ? this.v.translate(this.px.v, this.py.v, -this.pz.v) : this.v.translate(this.px.v, this.py.v, 0) : this.v.translate(this.p.v[0], this.p.v[1], -this.p.v[2])
                            }
                            this.frameId = this.elem.globalData.frameId
                        }
                    },
                    precalculateMatrix: function() {
                        if (!this.a.k && (this.pre.translate(-this.a.v[0], -this.a.v[1], this.a.v[2]), this.appliedTransformations = 1, !this.s.effectsSequence.length)) {
                            if (this.pre.scale(this.s.v[0], this.s.v[1], this.s.v[2]), this.appliedTransformations = 2, this.sk) {
                                if (this.sk.effectsSequence.length || this.sa.effectsSequence.length) return;
                                this.pre.skewFromAxis(-this.sk.v, this.sa.v), this.appliedTransformations = 3
                            }
                            this.r ? this.r.effectsSequence.length || (this.pre.rotate(-this.r.v), this.appliedTransformations = 4) : this.rz.effectsSequence.length || this.ry.effectsSequence.length || this.rx.effectsSequence.length || this.or.effectsSequence.length || (this.pre.rotateZ(-this.rz.v).rotateY(this.ry.v).rotateX(this.rx.v).rotateZ(-this.or.v[2]).rotateY(this.or.v[1]).rotateX(this.or.v[0]), this.appliedTransformations = 4)
                        }
                    },
                    autoOrient: function() {}
                }, extendPrototype([DynamicPropertyContainer], e), e.prototype.addDynamicProperty = function(t) {
                    this._addDynamicProperty(t), this.elem.addDynamicProperty(t), this._isDirty = !0
                }, e.prototype._addDynamicProperty = DynamicPropertyContainer.prototype.addDynamicProperty, {
                    getTransformProperty: function(t, i, n) {
                        return new e(t, i, n)
                    }
                }
            }();

        function ShapePath() {
            this.c = !1, this._length = 0, this._maxLength = 8, this.v = createSizedArray(this._maxLength), this.o = createSizedArray(this._maxLength), this.i = createSizedArray(this._maxLength)
        }
        ShapePath.prototype.setPathData = function(t, e) {
            this.c = t, this.setLength(e);
            for (var i = 0; i < e;) this.v[i] = pointPool.newElement(), this.o[i] = pointPool.newElement(), this.i[i] = pointPool.newElement(), i += 1
        }, ShapePath.prototype.setLength = function(t) {
            for (; this._maxLength < t;) this.doubleArrayLength();
            this._length = t
        }, ShapePath.prototype.doubleArrayLength = function() {
            this.v = this.v.concat(createSizedArray(this._maxLength)), this.i = this.i.concat(createSizedArray(this._maxLength)), this.o = this.o.concat(createSizedArray(this._maxLength)), this._maxLength *= 2
        }, ShapePath.prototype.setXYAt = function(t, e, i, n, r) {
            var s;
            switch (this._length = Math.max(this._length, n + 1), this._length >= this._maxLength && this.doubleArrayLength(), i) {
                case "v":
                    s = this.v;
                    break;
                case "i":
                    s = this.i;
                    break;
                case "o":
                    s = this.o;
                    break;
                default:
                    s = []
            }(!s[n] || s[n] && !r) && (s[n] = pointPool.newElement()), s[n][0] = t, s[n][1] = e
        }, ShapePath.prototype.setTripleAt = function(t, e, i, n, r, s, a, o) {
            this.setXYAt(t, e, "v", a, o), this.setXYAt(i, n, "o", a, o), this.setXYAt(r, s, "i", a, o)
        }, ShapePath.prototype.reverse = function() {
            var t = new ShapePath;
            t.setPathData(this.c, this._length);
            var e = this.v,
                i = this.o,
                n = this.i,
                r = 0;
            this.c && (t.setTripleAt(e[0][0], e[0][1], n[0][0], n[0][1], i[0][0], i[0][1], 0, !1), r = 1);
            var s, a = this._length - 1,
                o = this._length;
            for (s = r; s < o; s += 1) t.setTripleAt(e[a][0], e[a][1], n[a][0], n[a][1], i[a][0], i[a][1], s, !1), a -= 1;
            return t
        };
        var ShapePropertyFactory = function() {
                function t(t, e, i) {
                    var n, r, s, a, o, l, h, c, p, f = i.lastIndex,
                        d = this.keyframes;
                    if (t < d[0].t - this.offsetTime) n = d[0].s[0], s = !0, f = 0;
                    else if (t >= d[d.length - 1].t - this.offsetTime) n = d[d.length - 1].s ? d[d.length - 1].s[0] : d[d.length - 2].e[0], s = !0;
                    else {
                        for (var u, m, g = f, y = d.length - 1, v = !0; v && (u = d[g], !((m = d[g + 1]).t - this.offsetTime > t));) g < y - 1 ? g += 1 : v = !1;
                        if (f = g, !(s = 1 === u.h)) {
                            if (t >= m.t - this.offsetTime) c = 1;
                            else if (t < u.t - this.offsetTime) c = 0;
                            else {
                                var b;
                                u.__fnct ? b = u.__fnct : (b = BezierFactory.getBezierEasing(u.o.x, u.o.y, u.i.x, u.i.y).get, u.__fnct = b), c = b((t - (u.t - this.offsetTime)) / (m.t - this.offsetTime - (u.t - this.offsetTime)))
                            }
                            r = m.s ? m.s[0] : u.e[0]
                        }
                        n = u.s[0]
                    }
                    for (l = e._length, h = n.i[0].length, i.lastIndex = f, a = 0; a < l; a += 1)
                        for (o = 0; o < h; o += 1) p = s ? n.i[a][o] : n.i[a][o] + (r.i[a][o] - n.i[a][o]) * c, e.i[a][o] = p, p = s ? n.o[a][o] : n.o[a][o] + (r.o[a][o] - n.o[a][o]) * c, e.o[a][o] = p, p = s ? n.v[a][o] : n.v[a][o] + (r.v[a][o] - n.v[a][o]) * c, e.v[a][o] = p
                }

                function e() {
                    var t = this.comp.renderedFrame - this.offsetTime,
                        e = this.keyframes[0].t - this.offsetTime,
                        i = this.keyframes[this.keyframes.length - 1].t - this.offsetTime,
                        n = this._caching.lastFrame;
                    return -999999 !== n && (n < e && t < e || n > i && t > i) || (this._caching.lastIndex = n < t ? this._caching.lastIndex : 0, this.interpolateShape(t, this.pv, this._caching)), this._caching.lastFrame = t, this.pv
                }

                function i() {
                    this.paths = this.localShapeCollection
                }

                function n(t) {
                    (function(t, e) {
                        if (t._length !== e._length || t.c !== e.c) return !1;
                        var i, n = t._length;
                        for (i = 0; i < n; i += 1)
                            if (t.v[i][0] !== e.v[i][0] || t.v[i][1] !== e.v[i][1] || t.o[i][0] !== e.o[i][0] || t.o[i][1] !== e.o[i][1] || t.i[i][0] !== e.i[i][0] || t.i[i][1] !== e.i[i][1]) return !1;
                        return !0
                    })(this.v, t) || (this.v = shapePool.clone(t), this.localShapeCollection.releaseShapes(), this.localShapeCollection.addShape(this.v), this._mdf = !0, this.paths = this.localShapeCollection)
                }

                function r() {
                    if (this.elem.globalData.frameId !== this.frameId)
                        if (this.effectsSequence.length)
                            if (this.lock) this.setVValue(this.pv);
                            else {
                                var t, e;
                                this.lock = !0, this._mdf = !1, t = this.kf ? this.pv : this.data.ks ? this.data.ks.k : this.data.pt.k;
                                var i = this.effectsSequence.length;
                                for (e = 0; e < i; e += 1) t = this.effectsSequence[e](t);
                                this.setVValue(t), this.lock = !1, this.frameId = this.elem.globalData.frameId
                            }
                    else this._mdf = !1
                }

                function s(t, e, n) {
                    this.propType = "shape", this.comp = t.comp, this.container = t, this.elem = t, this.data = e, this.k = !1, this.kf = !1, this._mdf = !1;
                    var r = 3 === n ? e.pt.k : e.ks.k;
                    this.v = shapePool.clone(r), this.pv = shapePool.clone(this.v), this.localShapeCollection = shapeCollectionPool.newShapeCollection(), this.paths = this.localShapeCollection, this.paths.addShape(this.v), this.reset = i, this.effectsSequence = []
                }

                function a(t) {
                    this.effectsSequence.push(t), this.container.addDynamicProperty(this)
                }

                function o(t, n, r) {
                    this.propType = "shape", this.comp = t.comp, this.elem = t, this.container = t, this.offsetTime = t.data.st, this.keyframes = 3 === r ? n.pt.k : n.ks.k, this.k = !0, this.kf = !0;
                    var s = this.keyframes[0].s[0].i.length;
                    this.v = shapePool.newElement(), this.v.setPathData(this.keyframes[0].s[0].c, s), this.pv = shapePool.clone(this.v), this.localShapeCollection = shapeCollectionPool.newShapeCollection(), this.paths = this.localShapeCollection, this.paths.addShape(this.v), this.lastFrame = -999999, this.reset = i, this._caching = {
                        lastFrame: -999999,
                        lastIndex: 0
                    }, this.effectsSequence = [e.bind(this)]
                }
                s.prototype.interpolateShape = t, s.prototype.getValue = r, s.prototype.setVValue = n, s.prototype.addEffect = a, o.prototype.getValue = r, o.prototype.interpolateShape = t, o.prototype.setVValue = n, o.prototype.addEffect = a;
                var l = function() {
                        var t = roundCorner;

                        function e(t, e) {
                            this.v = shapePool.newElement(), this.v.setPathData(!0, 4), this.localShapeCollection = shapeCollectionPool.newShapeCollection(), this.paths = this.localShapeCollection, this.localShapeCollection.addShape(this.v), this.d = e.d, this.elem = t, this.comp = t.comp, this.frameId = -1, this.initDynamicPropertyContainer(t), this.p = PropertyFactory.getProp(t, e.p, 1, 0, this), this.s = PropertyFactory.getProp(t, e.s, 1, 0, this), this.dynamicProperties.length ? this.k = !0 : (this.k = !1, this.convertEllToPath())
                        }
                        return e.prototype = {
                            reset: i,
                            getValue: function() {
                                this.elem.globalData.frameId !== this.frameId && (this.frameId = this.elem.globalData.frameId, this.iterateDynamicProperties(), this._mdf && this.convertEllToPath())
                            },
                            convertEllToPath: function() {
                                var e = this.p.v[0],
                                    i = this.p.v[1],
                                    n = this.s.v[0] / 2,
                                    r = this.s.v[1] / 2,
                                    s = 3 !== this.d,
                                    a = this.v;
                                a.v[0][0] = e, a.v[0][1] = i - r, a.v[1][0] = s ? e + n : e - n, a.v[1][1] = i, a.v[2][0] = e, a.v[2][1] = i + r, a.v[3][0] = s ? e - n : e + n, a.v[3][1] = i, a.i[0][0] = s ? e - n * t : e + n * t, a.i[0][1] = i - r, a.i[1][0] = s ? e + n : e - n, a.i[1][1] = i - r * t, a.i[2][0] = s ? e + n * t : e - n * t, a.i[2][1] = i + r, a.i[3][0] = s ? e - n : e + n, a.i[3][1] = i + r * t, a.o[0][0] = s ? e + n * t : e - n * t, a.o[0][1] = i - r, a.o[1][0] = s ? e + n : e - n, a.o[1][1] = i + r * t, a.o[2][0] = s ? e - n * t : e + n * t, a.o[2][1] = i + r, a.o[3][0] = s ? e - n : e + n, a.o[3][1] = i - r * t
                            }
                        }, extendPrototype([DynamicPropertyContainer], e), e
                    }(),
                    h = function() {
                        function t(t, e) {
                            this.v = shapePool.newElement(), this.v.setPathData(!0, 0), this.elem = t, this.comp = t.comp, this.data = e, this.frameId = -1, this.d = e.d, this.initDynamicPropertyContainer(t), 1 === e.sy ? (this.ir = PropertyFactory.getProp(t, e.ir, 0, 0, this), this.is = PropertyFactory.getProp(t, e.is, 0, .01, this), this.convertToPath = this.convertStarToPath) : this.convertToPath = this.convertPolygonToPath, this.pt = PropertyFactory.getProp(t, e.pt, 0, 0, this), this.p = PropertyFactory.getProp(t, e.p, 1, 0, this), this.r = PropertyFactory.getProp(t, e.r, 0, degToRads, this), this.or = PropertyFactory.getProp(t, e.or, 0, 0, this), this.os = PropertyFactory.getProp(t, e.os, 0, .01, this), this.localShapeCollection = shapeCollectionPool.newShapeCollection(), this.localShapeCollection.addShape(this.v), this.paths = this.localShapeCollection, this.dynamicProperties.length ? this.k = !0 : (this.k = !1, this.convertToPath())
                        }
                        return t.prototype = {
                            reset: i,
                            getValue: function() {
                                this.elem.globalData.frameId !== this.frameId && (this.frameId = this.elem.globalData.frameId, this.iterateDynamicProperties(), this._mdf && this.convertToPath())
                            },
                            convertStarToPath: function() {
                                var t, e, i, n, r = 2 * Math.floor(this.pt.v),
                                    s = 2 * Math.PI / r,
                                    a = !0,
                                    o = this.or.v,
                                    l = this.ir.v,
                                    h = this.os.v,
                                    c = this.is.v,
                                    p = 2 * Math.PI * o / (2 * r),
                                    f = 2 * Math.PI * l / (2 * r),
                                    d = -Math.PI / 2;
                                d += this.r.v;
                                var u = 3 === this.data.d ? -1 : 1;
                                for (this.v._length = 0, t = 0; t < r; t += 1) {
                                    i = a ? h : c, n = a ? p : f;
                                    var m = (e = a ? o : l) * Math.cos(d),
                                        g = e * Math.sin(d),
                                        y = 0 === m && 0 === g ? 0 : g / Math.sqrt(m * m + g * g),
                                        v = 0 === m && 0 === g ? 0 : -m / Math.sqrt(m * m + g * g);
                                    m += +this.p.v[0], g += +this.p.v[1], this.v.setTripleAt(m, g, m - y * n * i * u, g - v * n * i * u, m + y * n * i * u, g + v * n * i * u, t, !0), a = !a, d += s * u
                                }
                            },
                            convertPolygonToPath: function() {
                                var t, e = Math.floor(this.pt.v),
                                    i = 2 * Math.PI / e,
                                    n = this.or.v,
                                    r = this.os.v,
                                    s = 2 * Math.PI * n / (4 * e),
                                    a = .5 * -Math.PI,
                                    o = 3 === this.data.d ? -1 : 1;
                                for (a += this.r.v, this.v._length = 0, t = 0; t < e; t += 1) {
                                    var l = n * Math.cos(a),
                                        h = n * Math.sin(a),
                                        c = 0 === l && 0 === h ? 0 : h / Math.sqrt(l * l + h * h),
                                        p = 0 === l && 0 === h ? 0 : -l / Math.sqrt(l * l + h * h);
                                    l += +this.p.v[0], h += +this.p.v[1], this.v.setTripleAt(l, h, l - c * s * r * o, h - p * s * r * o, l + c * s * r * o, h + p * s * r * o, t, !0), a += i * o
                                }
                                this.paths.length = 0, this.paths[0] = this.v
                            }
                        }, extendPrototype([DynamicPropertyContainer], t), t
                    }(),
                    c = function() {
                        function t(t, e) {
                            this.v = shapePool.newElement(), this.v.c = !0, this.localShapeCollection = shapeCollectionPool.newShapeCollection(), this.localShapeCollection.addShape(this.v), this.paths = this.localShapeCollection, this.elem = t, this.comp = t.comp, this.frameId = -1, this.d = e.d, this.initDynamicPropertyContainer(t), this.p = PropertyFactory.getProp(t, e.p, 1, 0, this), this.s = PropertyFactory.getProp(t, e.s, 1, 0, this), this.r = PropertyFactory.getProp(t, e.r, 0, 0, this), this.dynamicProperties.length ? this.k = !0 : (this.k = !1, this.convertRectToPath())
                        }
                        return t.prototype = {
                            convertRectToPath: function() {
                                var t = this.p.v[0],
                                    e = this.p.v[1],
                                    i = this.s.v[0] / 2,
                                    n = this.s.v[1] / 2,
                                    r = bmMin(i, n, this.r.v),
                                    s = r * (1 - roundCorner);
                                this.v._length = 0, 2 === this.d || 1 === this.d ? (this.v.setTripleAt(t + i, e - n + r, t + i, e - n + r, t + i, e - n + s, 0, !0), this.v.setTripleAt(t + i, e + n - r, t + i, e + n - s, t + i, e + n - r, 1, !0), 0 !== r ? (this.v.setTripleAt(t + i - r, e + n, t + i - r, e + n, t + i - s, e + n, 2, !0), this.v.setTripleAt(t - i + r, e + n, t - i + s, e + n, t - i + r, e + n, 3, !0), this.v.setTripleAt(t - i, e + n - r, t - i, e + n - r, t - i, e + n - s, 4, !0), this.v.setTripleAt(t - i, e - n + r, t - i, e - n + s, t - i, e - n + r, 5, !0), this.v.setTripleAt(t - i + r, e - n, t - i + r, e - n, t - i + s, e - n, 6, !0), this.v.setTripleAt(t + i - r, e - n, t + i - s, e - n, t + i - r, e - n, 7, !0)) : (this.v.setTripleAt(t - i, e + n, t - i + s, e + n, t - i, e + n, 2), this.v.setTripleAt(t - i, e - n, t - i, e - n + s, t - i, e - n, 3))) : (this.v.setTripleAt(t + i, e - n + r, t + i, e - n + s, t + i, e - n + r, 0, !0), 0 !== r ? (this.v.setTripleAt(t + i - r, e - n, t + i - r, e - n, t + i - s, e - n, 1, !0), this.v.setTripleAt(t - i + r, e - n, t - i + s, e - n, t - i + r, e - n, 2, !0), this.v.setTripleAt(t - i, e - n + r, t - i, e - n + r, t - i, e - n + s, 3, !0), this.v.setTripleAt(t - i, e + n - r, t - i, e + n - s, t - i, e + n - r, 4, !0), this.v.setTripleAt(t - i + r, e + n, t - i + r, e + n, t - i + s, e + n, 5, !0), this.v.setTripleAt(t + i - r, e + n, t + i - s, e + n, t + i - r, e + n, 6, !0), this.v.setTripleAt(t + i, e + n - r, t + i, e + n - r, t + i, e + n - s, 7, !0)) : (this.v.setTripleAt(t - i, e - n, t - i + s, e - n, t - i, e - n, 1, !0), this.v.setTripleAt(t - i, e + n, t - i, e + n - s, t - i, e + n, 2, !0), this.v.setTripleAt(t + i, e + n, t + i - s, e + n, t + i, e + n, 3, !0)))
                            },
                            getValue: function() {
                                this.elem.globalData.frameId !== this.frameId && (this.frameId = this.elem.globalData.frameId, this.iterateDynamicProperties(), this._mdf && this.convertRectToPath())
                            },
                            reset: i
                        }, extendPrototype([DynamicPropertyContainer], t), t
                    }();
                var p = {
                    getShapeProp: function(t, e, i) {
                        var n;
                        return 3 === i || 4 === i ? n = (3 === i ? e.pt : e.ks).k.length ? new o(t, e, i) : new s(t, e, i) : 5 === i ? n = new c(t, e) : 6 === i ? n = new l(t, e) : 7 === i && (n = new h(t, e)), n.k && t.addDynamicProperty(n), n
                    },
                    getConstructorFunction: function() {
                        return s
                    },
                    getKeyframedConstructorFunction: function() {
                        return o
                    }
                };
                return p
            }(),
            ShapeModifiers = (ob = {}, modifiers = {}, ob.registerModifier = function(t, e) {
                modifiers[t] || (modifiers[t] = e)
            }, ob.getModifier = function(t, e, i) {
                return new modifiers[t](e, i)
            }, ob),
            ob, modifiers;

        function ShapeModifier() {}

        function TrimModifier() {}

        function RoundCornersModifier() {}

        function PuckerAndBloatModifier() {}

        function RepeaterModifier() {}

        function ShapeCollection() {
            this._length = 0, this._maxLength = 4, this.shapes = createSizedArray(this._maxLength)
        }

        function DashProperty(t, e, i, n) {
            var r;
            this.elem = t, this.frameId = -1, this.dataProps = createSizedArray(e.length), this.renderer = i, this.k = !1, this.dashStr = "", this.dashArray = createTypedArray("float32", e.length ? e.length - 1 : 0), this.dashoffset = createTypedArray("float32", 1), this.initDynamicPropertyContainer(n);
            var s, a = e.length || 0;
            for (r = 0; r < a; r += 1) s = PropertyFactory.getProp(t, e[r].v, 0, 0, this), this.k = s.k || this.k, this.dataProps[r] = {
                n: e[r].n,
                p: s
            };
            this.k || this.getValue(!0), this._isAnimated = this.k
        }

        function GradientProperty(t, e, i) {
            this.data = e, this.c = createTypedArray("uint8c", 4 * e.p);
            var n = e.k.k[0].s ? e.k.k[0].s.length - 4 * e.p : e.k.k.length - 4 * e.p;
            this.o = createTypedArray("float32", n), this._cmdf = !1, this._omdf = !1, this._collapsable = this.checkCollapsable(), this._hasOpacity = n, this.initDynamicPropertyContainer(i), this.prop = PropertyFactory.getProp(t, e.k, 1, null, this), this.k = this.prop.k, this.getValue(!0)
        }
        ShapeModifier.prototype.initModifierProperties = function() {}, ShapeModifier.prototype.addShapeToModifier = function() {}, ShapeModifier.prototype.addShape = function(t) {
            if (!this.closed) {
                t.sh.container.addDynamicProperty(t.sh);
                var e = {
                    shape: t.sh,
                    data: t,
                    localShapeCollection: shapeCollectionPool.newShapeCollection()
                };
                this.shapes.push(e), this.addShapeToModifier(e), this._isAnimated && t.setAsAnimated()
            }
        }, ShapeModifier.prototype.init = function(t, e) {
            this.shapes = [], this.elem = t, this.initDynamicPropertyContainer(t), this.initModifierProperties(t, e), this.frameId = initialDefaultFrame, this.closed = !1, this.k = !1, this.dynamicProperties.length ? this.k = !0 : this.getValue(!0)
        }, ShapeModifier.prototype.processKeys = function() {
            this.elem.globalData.frameId !== this.frameId && (this.frameId = this.elem.globalData.frameId, this.iterateDynamicProperties())
        }, extendPrototype([DynamicPropertyContainer], ShapeModifier), extendPrototype([ShapeModifier], TrimModifier), TrimModifier.prototype.initModifierProperties = function(t, e) {
            this.s = PropertyFactory.getProp(t, e.s, 0, .01, this), this.e = PropertyFactory.getProp(t, e.e, 0, .01, this), this.o = PropertyFactory.getProp(t, e.o, 0, 0, this), this.sValue = 0, this.eValue = 0, this.getValue = this.processKeys, this.m = e.m, this._isAnimated = !!this.s.effectsSequence.length || !!this.e.effectsSequence.length || !!this.o.effectsSequence.length
        }, TrimModifier.prototype.addShapeToModifier = function(t) {
            t.pathsData = []
        }, TrimModifier.prototype.calculateShapeEdges = function(t, e, i, n, r) {
            var s = [];
            e <= 1 ? s.push({
                s: t,
                e: e
            }) : t >= 1 ? s.push({
                s: t - 1,
                e: e - 1
            }) : (s.push({
                s: t,
                e: 1
            }), s.push({
                s: 0,
                e: e - 1
            }));
            var a, o, l = [],
                h = s.length;
            for (a = 0; a < h; a += 1) {
                var c, p;
                if (!((o = s[a]).e * r < n || o.s * r > n + i)) c = o.s * r <= n ? 0 : (o.s * r - n) / i, p = o.e * r >= n + i ? 1 : (o.e * r - n) / i, l.push([c, p])
            }
            return l.length || l.push([0, 0]), l
        }, TrimModifier.prototype.releasePathsData = function(t) {
            var e, i = t.length;
            for (e = 0; e < i; e += 1) segmentsLengthPool.release(t[e]);
            return t.length = 0, t
        }, TrimModifier.prototype.processShapes = function(t) {
            var e, i, n, r;
            if (this._mdf || t) {
                var s = this.o.v % 360 / 360;
                if (s < 0 && (s += 1), (e = this.s.v > 1 ? 1 + s : this.s.v < 0 ? 0 + s : this.s.v + s) > (i = this.e.v > 1 ? 1 + s : this.e.v < 0 ? 0 + s : this.e.v + s)) {
                    var a = e;
                    e = i, i = a
                }
                e = 1e-4 * Math.round(1e4 * e), i = 1e-4 * Math.round(1e4 * i), this.sValue = e, this.eValue = i
            } else e = this.sValue, i = this.eValue;
            var o, l, h, c, p, f = this.shapes.length,
                d = 0;
            if (i === e)
                for (r = 0; r < f; r += 1) this.shapes[r].localShapeCollection.releaseShapes(), this.shapes[r].shape._mdf = !0, this.shapes[r].shape.paths = this.shapes[r].localShapeCollection, this._mdf && (this.shapes[r].pathsData.length = 0);
            else if (1 === i && 0 === e || 0 === i && 1 === e) {
                if (this._mdf)
                    for (r = 0; r < f; r += 1) this.shapes[r].pathsData.length = 0, this.shapes[r].shape._mdf = !0
            } else {
                var u, m, g = [];
                for (r = 0; r < f; r += 1)
                    if ((u = this.shapes[r]).shape._mdf || this._mdf || t || 2 === this.m) {
                        if (l = (n = u.shape.paths)._length, p = 0, !u.shape._mdf && u.pathsData.length) p = u.totalShapeLength;
                        else {
                            for (h = this.releasePathsData(u.pathsData), o = 0; o < l; o += 1) c = bez.getSegmentsLength(n.shapes[o]), h.push(c), p += c.totalLength;
                            u.totalShapeLength = p, u.pathsData = h
                        }
                        d += p, u.shape._mdf = !0
                    } else u.shape.paths = u.localShapeCollection;
                var y, v = e,
                    b = i,
                    x = 0;
                for (r = f - 1; r >= 0; r -= 1)
                    if ((u = this.shapes[r]).shape._mdf) {
                        for ((m = u.localShapeCollection).releaseShapes(), 2 === this.m && f > 1 ? (y = this.calculateShapeEdges(e, i, u.totalShapeLength, x, d), x += u.totalShapeLength) : y = [
                                [v, b]
                            ], l = y.length, o = 0; o < l; o += 1) {
                            v = y[o][0], b = y[o][1], g.length = 0, b <= 1 ? g.push({
                                s: u.totalShapeLength * v,
                                e: u.totalShapeLength * b
                            }) : v >= 1 ? g.push({
                                s: u.totalShapeLength * (v - 1),
                                e: u.totalShapeLength * (b - 1)
                            }) : (g.push({
                                s: u.totalShapeLength * v,
                                e: u.totalShapeLength
                            }), g.push({
                                s: 0,
                                e: u.totalShapeLength * (b - 1)
                            }));
                            var w = this.addShapes(u, g[0]);
                            if (g[0].s !== g[0].e) {
                                if (g.length > 1)
                                    if (u.shape.paths.shapes[u.shape.paths._length - 1].c) {
                                        var S = w.pop();
                                        this.addPaths(w, m), w = this.addShapes(u, g[1], S)
                                    } else this.addPaths(w, m), w = this.addShapes(u, g[1]);
                                this.addPaths(w, m)
                            }
                        }
                        u.shape.paths = m
                    }
            }
        }, TrimModifier.prototype.addPaths = function(t, e) {
            var i, n = t.length;
            for (i = 0; i < n; i += 1) e.addShape(t[i])
        }, TrimModifier.prototype.addSegment = function(t, e, i, n, r, s, a) {
            r.setXYAt(e[0], e[1], "o", s), r.setXYAt(i[0], i[1], "i", s + 1), a && r.setXYAt(t[0], t[1], "v", s), r.setXYAt(n[0], n[1], "v", s + 1)
        }, TrimModifier.prototype.addSegmentFromArray = function(t, e, i, n) {
            e.setXYAt(t[1], t[5], "o", i), e.setXYAt(t[2], t[6], "i", i + 1), n && e.setXYAt(t[0], t[4], "v", i), e.setXYAt(t[3], t[7], "v", i + 1)
        }, TrimModifier.prototype.addShapes = function(t, e, i) {
            var n, r, s, a, o, l, h, c, p = t.pathsData,
                f = t.shape.paths.shapes,
                d = t.shape.paths._length,
                u = 0,
                m = [],
                g = !0;
            for (i ? (o = i._length, c = i._length) : (i = shapePool.newElement(), o = 0, c = 0), m.push(i), n = 0; n < d; n += 1) {
                for (l = p[n].lengths, i.c = f[n].c, s = f[n].c ? l.length : l.length + 1, r = 1; r < s; r += 1)
                    if (u + (a = l[r - 1]).addedLength < e.s) u += a.addedLength, i.c = !1;
                    else {
                        if (u > e.e) {
                            i.c = !1;
                            break
                        }
                        e.s <= u && e.e >= u + a.addedLength ? (this.addSegment(f[n].v[r - 1], f[n].o[r - 1], f[n].i[r], f[n].v[r], i, o, g), g = !1) : (h = bez.getNewSegment(f[n].v[r - 1], f[n].v[r], f[n].o[r - 1], f[n].i[r], (e.s - u) / a.addedLength, (e.e - u) / a.addedLength, l[r - 1]), this.addSegmentFromArray(h, i, o, g), g = !1, i.c = !1), u += a.addedLength, o += 1
                    }
                if (f[n].c && l.length) {
                    if (a = l[r - 1], u <= e.e) {
                        var y = l[r - 1].addedLength;
                        e.s <= u && e.e >= u + y ? (this.addSegment(f[n].v[r - 1], f[n].o[r - 1], f[n].i[0], f[n].v[0], i, o, g), g = !1) : (h = bez.getNewSegment(f[n].v[r - 1], f[n].v[0], f[n].o[r - 1], f[n].i[0], (e.s - u) / y, (e.e - u) / y, l[r - 1]), this.addSegmentFromArray(h, i, o, g), g = !1, i.c = !1)
                    } else i.c = !1;
                    u += a.addedLength, o += 1
                }
                if (i._length && (i.setXYAt(i.v[c][0], i.v[c][1], "i", c), i.setXYAt(i.v[i._length - 1][0], i.v[i._length - 1][1], "o", i._length - 1)), u > e.e) break;
                n < d - 1 && (i = shapePool.newElement(), g = !0, m.push(i), o = 0)
            }
            return m
        }, ShapeModifiers.registerModifier("tm", TrimModifier), extendPrototype([ShapeModifier], RoundCornersModifier), RoundCornersModifier.prototype.initModifierProperties = function(t, e) {
            this.getValue = this.processKeys, this.rd = PropertyFactory.getProp(t, e.r, 0, null, this), this._isAnimated = !!this.rd.effectsSequence.length
        }, RoundCornersModifier.prototype.processPath = function(t, e) {
            var i, n = shapePool.newElement();
            n.c = t.c;
            var r, s, a, o, l, h, c, p, f, d, u, m, g = t._length,
                y = 0;
            for (i = 0; i < g; i += 1) r = t.v[i], a = t.o[i], s = t.i[i], r[0] === a[0] && r[1] === a[1] && r[0] === s[0] && r[1] === s[1] ? 0 !== i && i !== g - 1 || t.c ? (o = 0 === i ? t.v[g - 1] : t.v[i - 1], h = (l = Math.sqrt(Math.pow(r[0] - o[0], 2) + Math.pow(r[1] - o[1], 2))) ? Math.min(l / 2, e) / l : 0, c = u = r[0] + (o[0] - r[0]) * h, p = m = r[1] - (r[1] - o[1]) * h, f = c - (c - r[0]) * roundCorner, d = p - (p - r[1]) * roundCorner, n.setTripleAt(c, p, f, d, u, m, y), y += 1, o = i === g - 1 ? t.v[0] : t.v[i + 1], h = (l = Math.sqrt(Math.pow(r[0] - o[0], 2) + Math.pow(r[1] - o[1], 2))) ? Math.min(l / 2, e) / l : 0, c = f = r[0] + (o[0] - r[0]) * h, p = d = r[1] + (o[1] - r[1]) * h, u = c - (c - r[0]) * roundCorner, m = p - (p - r[1]) * roundCorner, n.setTripleAt(c, p, f, d, u, m, y), y += 1) : (n.setTripleAt(r[0], r[1], a[0], a[1], s[0], s[1], y), y += 1) : (n.setTripleAt(t.v[i][0], t.v[i][1], t.o[i][0], t.o[i][1], t.i[i][0], t.i[i][1], y), y += 1);
            return n
        }, RoundCornersModifier.prototype.processShapes = function(t) {
            var e, i, n, r, s, a, o = this.shapes.length,
                l = this.rd.v;
            if (0 !== l)
                for (i = 0; i < o; i += 1) {
                    if (a = (s = this.shapes[i]).localShapeCollection, s.shape._mdf || this._mdf || t)
                        for (a.releaseShapes(), s.shape._mdf = !0, e = s.shape.paths.shapes, r = s.shape.paths._length, n = 0; n < r; n += 1) a.addShape(this.processPath(e[n], l));
                    s.shape.paths = s.localShapeCollection
                }
            this.dynamicProperties.length || (this._mdf = !1)
        }, ShapeModifiers.registerModifier("rd", RoundCornersModifier), extendPrototype([ShapeModifier], PuckerAndBloatModifier), PuckerAndBloatModifier.prototype.initModifierProperties = function(t, e) {
            this.getValue = this.processKeys, this.amount = PropertyFactory.getProp(t, e.a, 0, null, this), this._isAnimated = !!this.amount.effectsSequence.length
        }, PuckerAndBloatModifier.prototype.processPath = function(t, e) {
            var i = e / 100,
                n = [0, 0],
                r = t._length,
                s = 0;
            for (s = 0; s < r; s += 1) n[0] += t.v[s][0], n[1] += t.v[s][1];
            n[0] /= r, n[1] /= r;
            var a, o, l, h, c, p, f = shapePool.newElement();
            for (f.c = t.c, s = 0; s < r; s += 1) a = t.v[s][0] + (n[0] - t.v[s][0]) * i, o = t.v[s][1] + (n[1] - t.v[s][1]) * i, l = t.o[s][0] + (n[0] - t.o[s][0]) * -i, h = t.o[s][1] + (n[1] - t.o[s][1]) * -i, c = t.i[s][0] + (n[0] - t.i[s][0]) * -i, p = t.i[s][1] + (n[1] - t.i[s][1]) * -i, f.setTripleAt(a, o, l, h, c, p, s);
            return f
        }, PuckerAndBloatModifier.prototype.processShapes = function(t) {
            var e, i, n, r, s, a, o = this.shapes.length,
                l = this.amount.v;
            if (0 !== l)
                for (i = 0; i < o; i += 1) {
                    if (a = (s = this.shapes[i]).localShapeCollection, s.shape._mdf || this._mdf || t)
                        for (a.releaseShapes(), s.shape._mdf = !0, e = s.shape.paths.shapes, r = s.shape.paths._length, n = 0; n < r; n += 1) a.addShape(this.processPath(e[n], l));
                    s.shape.paths = s.localShapeCollection
                }
            this.dynamicProperties.length || (this._mdf = !1)
        }, ShapeModifiers.registerModifier("pb", PuckerAndBloatModifier), extendPrototype([ShapeModifier], RepeaterModifier), RepeaterModifier.prototype.initModifierProperties = function(t, e) {
            this.getValue = this.processKeys, this.c = PropertyFactory.getProp(t, e.c, 0, null, this), this.o = PropertyFactory.getProp(t, e.o, 0, null, this), this.tr = TransformPropertyFactory.getTransformProperty(t, e.tr, this), this.so = PropertyFactory.getProp(t, e.tr.so, 0, .01, this), this.eo = PropertyFactory.getProp(t, e.tr.eo, 0, .01, this), this.data = e, this.dynamicProperties.length || this.getValue(!0), this._isAnimated = !!this.dynamicProperties.length, this.pMatrix = new Matrix, this.rMatrix = new Matrix, this.sMatrix = new Matrix, this.tMatrix = new Matrix, this.matrix = new Matrix
        }, RepeaterModifier.prototype.applyTransforms = function(t, e, i, n, r, s) {
            var a = s ? -1 : 1,
                o = n.s.v[0] + (1 - n.s.v[0]) * (1 - r),
                l = n.s.v[1] + (1 - n.s.v[1]) * (1 - r);
            t.translate(n.p.v[0] * a * r, n.p.v[1] * a * r, n.p.v[2]), e.translate(-n.a.v[0], -n.a.v[1], n.a.v[2]), e.rotate(-n.r.v * a * r), e.translate(n.a.v[0], n.a.v[1], n.a.v[2]), i.translate(-n.a.v[0], -n.a.v[1], n.a.v[2]), i.scale(s ? 1 / o : o, s ? 1 / l : l), i.translate(n.a.v[0], n.a.v[1], n.a.v[2])
        }, RepeaterModifier.prototype.init = function(t, e, i, n) {
            for (this.elem = t, this.arr = e, this.pos = i, this.elemsData = n, this._currentCopies = 0, this._elements = [], this._groups = [], this.frameId = -1, this.initDynamicPropertyContainer(t), this.initModifierProperties(t, e[i]); i > 0;) i -= 1, this._elements.unshift(e[i]);
            this.dynamicProperties.length ? this.k = !0 : this.getValue(!0)
        }, RepeaterModifier.prototype.resetElements = function(t) {
            var e, i = t.length;
            for (e = 0; e < i; e += 1) t[e]._processed = !1, "gr" === t[e].ty && this.resetElements(t[e].it)
        }, RepeaterModifier.prototype.cloneElements = function(t) {
            var e = JSON.parse(JSON.stringify(t));
            return this.resetElements(e), e
        }, RepeaterModifier.prototype.changeGroupRender = function(t, e) {
            var i, n = t.length;
            for (i = 0; i < n; i += 1) t[i]._render = e, "gr" === t[i].ty && this.changeGroupRender(t[i].it, e)
        }, RepeaterModifier.prototype.processShapes = function(t) {
            var e, i, n, r, s, a = !1;
            if (this._mdf || t) {
                var o, l = Math.ceil(this.c.v);
                if (this._groups.length < l) {
                    for (; this._groups.length < l;) {
                        var h = {
                            it: this.cloneElements(this._elements),
                            ty: "gr"
                        };
                        h.it.push({
                            a: {
                                a: 0,
                                ix: 1,
                                k: [0, 0]
                            },
                            nm: "Transform",
                            o: {
                                a: 0,
                                ix: 7,
                                k: 100
                            },
                            p: {
                                a: 0,
                                ix: 2,
                                k: [0, 0]
                            },
                            r: {
                                a: 1,
                                ix: 6,
                                k: [{
                                    s: 0,
                                    e: 0,
                                    t: 0
                                }, {
                                    s: 0,
                                    e: 0,
                                    t: 1
                                }]
                            },
                            s: {
                                a: 0,
                                ix: 3,
                                k: [100, 100]
                            },
                            sa: {
                                a: 0,
                                ix: 5,
                                k: 0
                            },
                            sk: {
                                a: 0,
                                ix: 4,
                                k: 0
                            },
                            ty: "tr"
                        }), this.arr.splice(0, 0, h), this._groups.splice(0, 0, h), this._currentCopies += 1
                    }
                    this.elem.reloadShapes(), a = !0
                }
                for (s = 0, n = 0; n <= this._groups.length - 1; n += 1) {
                    if (o = s < l, this._groups[n]._render = o, this.changeGroupRender(this._groups[n].it, o), !o) {
                        var c = this.elemsData[n].it,
                            p = c[c.length - 1];
                        0 !== p.transform.op.v ? (p.transform.op._mdf = !0, p.transform.op.v = 0) : p.transform.op._mdf = !1
                    }
                    s += 1
                }
                this._currentCopies = l;
                var f = this.o.v,
                    d = f % 1,
                    u = f > 0 ? Math.floor(f) : Math.ceil(f),
                    m = this.pMatrix.props,
                    g = this.rMatrix.props,
                    y = this.sMatrix.props;
                this.pMatrix.reset(), this.rMatrix.reset(), this.sMatrix.reset(), this.tMatrix.reset(), this.matrix.reset();
                var v, b, x = 0;
                if (f > 0) {
                    for (; x < u;) this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, 1, !1), x += 1;
                    d && (this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, d, !1), x += d)
                } else if (f < 0) {
                    for (; x > u;) this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, 1, !0), x -= 1;
                    d && (this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, -d, !0), x -= d)
                }
                for (n = 1 === this.data.m ? 0 : this._currentCopies - 1, r = 1 === this.data.m ? 1 : -1, s = this._currentCopies; s;) {
                    if (b = (i = (e = this.elemsData[n].it)[e.length - 1].transform.mProps.v.props).length, e[e.length - 1].transform.mProps._mdf = !0, e[e.length - 1].transform.op._mdf = !0, e[e.length - 1].transform.op.v = 1 === this._currentCopies ? this.so.v : this.so.v + (this.eo.v - this.so.v) * (n / (this._currentCopies - 1)), 0 !== x) {
                        for ((0 !== n && 1 === r || n !== this._currentCopies - 1 && -1 === r) && this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, 1, !1), this.matrix.transform(g[0], g[1], g[2], g[3], g[4], g[5], g[6], g[7], g[8], g[9], g[10], g[11], g[12], g[13], g[14], g[15]), this.matrix.transform(y[0], y[1], y[2], y[3], y[4], y[5], y[6], y[7], y[8], y[9], y[10], y[11], y[12], y[13], y[14], y[15]), this.matrix.transform(m[0], m[1], m[2], m[3], m[4], m[5], m[6], m[7], m[8], m[9], m[10], m[11], m[12], m[13], m[14], m[15]), v = 0; v < b; v += 1) i[v] = this.matrix.props[v];
                        this.matrix.reset()
                    } else
                        for (this.matrix.reset(), v = 0; v < b; v += 1) i[v] = this.matrix.props[v];
                    x += 1, s -= 1, n += r
                }
            } else
                for (s = this._currentCopies, n = 0, r = 1; s;) i = (e = this.elemsData[n].it)[e.length - 1].transform.mProps.v.props, e[e.length - 1].transform.mProps._mdf = !1, e[e.length - 1].transform.op._mdf = !1, s -= 1, n += r;
            return a
        }, RepeaterModifier.prototype.addShape = function() {}, ShapeModifiers.registerModifier("rp", RepeaterModifier), ShapeCollection.prototype.addShape = function(t) {
            this._length === this._maxLength && (this.shapes = this.shapes.concat(createSizedArray(this._maxLength)), this._maxLength *= 2), this.shapes[this._length] = t, this._length += 1
        }, ShapeCollection.prototype.releaseShapes = function() {
            var t;
            for (t = 0; t < this._length; t += 1) shapePool.release(this.shapes[t]);
            this._length = 0
        }, DashProperty.prototype.getValue = function(t) {
            if ((this.elem.globalData.frameId !== this.frameId || t) && (this.frameId = this.elem.globalData.frameId, this.iterateDynamicProperties(), this._mdf = this._mdf || t, this._mdf)) {
                var e = 0,
                    i = this.dataProps.length;
                for ("svg" === this.renderer && (this.dashStr = ""), e = 0; e < i; e += 1) "o" !== this.dataProps[e].n ? "svg" === this.renderer ? this.dashStr += " " + this.dataProps[e].p.v : this.dashArray[e] = this.dataProps[e].p.v : this.dashoffset[0] = this.dataProps[e].p.v
            }
        }, extendPrototype([DynamicPropertyContainer], DashProperty), GradientProperty.prototype.comparePoints = function(t, e) {
            for (var i = 0, n = this.o.length / 2; i < n;) {
                if (Math.abs(t[4 * i] - t[4 * e + 2 * i]) > .01) return !1;
                i += 1
            }
            return !0
        }, GradientProperty.prototype.checkCollapsable = function() {
            if (this.o.length / 2 != this.c.length / 4) return !1;
            if (this.data.k.k[0].s)
                for (var t = 0, e = this.data.k.k.length; t < e;) {
                    if (!this.comparePoints(this.data.k.k[t].s, this.data.p)) return !1;
                    t += 1
                } else if (!this.comparePoints(this.data.k.k, this.data.p)) return !1;
            return !0
        }, GradientProperty.prototype.getValue = function(t) {
            if (this.prop.getValue(), this._mdf = !1, this._cmdf = !1, this._omdf = !1, this.prop._mdf || t) {
                var e, i, n, r = 4 * this.data.p;
                for (e = 0; e < r; e += 1) i = e % 4 == 0 ? 100 : 255, n = Math.round(this.prop.v[e] * i), this.c[e] !== n && (this.c[e] = n, this._cmdf = !t);
                if (this.o.length)
                    for (r = this.prop.v.length, e = 4 * this.data.p; e < r; e += 1) i = e % 2 == 0 ? 100 : 1, n = e % 2 == 0 ? Math.round(100 * this.prop.v[e]) : this.prop.v[e], this.o[e - 4 * this.data.p] !== n && (this.o[e - 4 * this.data.p] = n, this._omdf = !t);
                this._mdf = !t
            }
        }, extendPrototype([DynamicPropertyContainer], GradientProperty);
        var buildShapeString = function(t, e, i, n) {
                if (0 === e) return "";
                var r, s = t.o,
                    a = t.i,
                    o = t.v,
                    l = " M" + n.applyToPointStringified(o[0][0], o[0][1]);
                for (r = 1; r < e; r += 1) l += " C" + n.applyToPointStringified(s[r - 1][0], s[r - 1][1]) + " " + n.applyToPointStringified(a[r][0], a[r][1]) + " " + n.applyToPointStringified(o[r][0], o[r][1]);
                return i && e && (l += " C" + n.applyToPointStringified(s[r - 1][0], s[r - 1][1]) + " " + n.applyToPointStringified(a[0][0], a[0][1]) + " " + n.applyToPointStringified(o[0][0], o[0][1]), l += "z"), l
            },
            audioControllerFactory = function() {
                function t(t) {
                    this.audios = [], this.audioFactory = t, this._volume = 1, this._isMuted = !1
                }
                return t.prototype = {
                        addAudio: function(t) {
                            this.audios.push(t)
                        },
                        pause: function() {
                            var t, e = this.audios.length;
                            for (t = 0; t < e; t += 1) this.audios[t].pause()
                        },
                        resume: function() {
                            var t, e = this.audios.length;
                            for (t = 0; t < e; t += 1) this.audios[t].resume()
                        },
                        setRate: function(t) {
                            var e, i = this.audios.length;
                            for (e = 0; e < i; e += 1) this.audios[e].setRate(t)
                        },
                        createAudio: function(t) {
                            return this.audioFactory ? this.audioFactory(t) : Howl ? new Howl({
                                src: [t]
                            }) : {
                                isPlaying: !1,
                                play: function() {
                                    this.isPlaying = !0
                                },
                                seek: function() {
                                    this.isPlaying = !1
                                },
                                playing: function() {},
                                rate: function() {},
                                setVolume: function() {}
                            }
                        },
                        setAudioFactory: function(t) {
                            this.audioFactory = t
                        },
                        setVolume: function(t) {
                            this._volume = t, this._updateVolume()
                        },
                        mute: function() {
                            this._isMuted = !0, this._updateVolume()
                        },
                        unmute: function() {
                            this._isMuted = !1, this._updateVolume()
                        },
                        getVolume: function() {
                            return this._volume
                        },
                        _updateVolume: function() {
                            var t, e = this.audios.length;
                            for (t = 0; t < e; t += 1) this.audios[t].volume(this._volume * (this._isMuted ? 0 : 1))
                        }
                    },
                    function() {
                        return new t
                    }
            }(),
            ImagePreloader = function() {
                var t = function() {
                    var t = createTag("canvas");
                    t.width = 1, t.height = 1;
                    var e = t.getContext("2d");
                    return e.fillStyle = "rgba(0,0,0,0)", e.fillRect(0, 0, 1, 1), t
                }();

                function e() {
                    this.loadedAssets += 1, this.loadedAssets === this.totalImages && this.loadedFootagesCount === this.totalFootages && this.imagesLoadedCb && this.imagesLoadedCb(null)
                }

                function i() {
                    this.loadedFootagesCount += 1, this.loadedAssets === this.totalImages && this.loadedFootagesCount === this.totalFootages && this.imagesLoadedCb && this.imagesLoadedCb(null)
                }

                function n(t, e, i) {
                    var n = "";
                    if (t.e) n = t.p;
                    else if (e) {
                        var r = t.p; - 1 !== r.indexOf("images/") && (r = r.split("/")[1]), n = e + r
                    } else n = i, n += t.u ? t.u : "", n += t.p;
                    return n
                }

                function r(t) {
                    var e = 0,
                        i = setInterval(function() {
                            (t.getBBox().width || e > 500) && (this._imageLoaded(), clearInterval(i)), e += 1
                        }.bind(this), 50)
                }

                function s(t) {
                    var e = {
                            assetData: t
                        },
                        i = n(t, this.assetsPath, this.path);
                    return assetLoader.load(i, function(t) {
                        e.img = t, this._footageLoaded()
                    }.bind(this), function() {
                        e.img = {}, this._footageLoaded()
                    }.bind(this)), e
                }

                function a() {
                    this._imageLoaded = e.bind(this), this._footageLoaded = i.bind(this), this.testImageLoaded = r.bind(this), this.createFootageData = s.bind(this), this.assetsPath = "", this.path = "", this.totalImages = 0, this.totalFootages = 0, this.loadedAssets = 0, this.loadedFootagesCount = 0, this.imagesLoadedCb = null, this.images = []
                }
                return a.prototype = {
                    loadAssets: function(t, e) {
                        var i;
                        this.imagesLoadedCb = e;
                        var n = t.length;
                        for (i = 0; i < n; i += 1) t[i].layers || (t[i].t && "seq" !== t[i].t ? 3 === t[i].t && (this.totalFootages += 1, this.images.push(this.createFootageData(t[i]))) : (this.totalImages += 1, this.images.push(this._createImageData(t[i]))))
                    },
                    setAssetsPath: function(t) {
                        this.assetsPath = t || ""
                    },
                    setPath: function(t) {
                        this.path = t || ""
                    },
                    loadedImages: function() {
                        return this.totalImages === this.loadedAssets
                    },
                    loadedFootages: function() {
                        return this.totalFootages === this.loadedFootagesCount
                    },
                    destroy: function() {
                        this.imagesLoadedCb = null, this.images.length = 0
                    },
                    getAsset: function(t) {
                        for (var e = 0, i = this.images.length; e < i;) {
                            if (this.images[e].assetData === t) return this.images[e].img;
                            e += 1
                        }
                        return null
                    },
                    createImgData: function(e) {
                        var i = n(e, this.assetsPath, this.path),
                            r = createTag("img");
                        r.crossOrigin = "anonymous", r.addEventListener("load", this._imageLoaded, !1), r.addEventListener("error", function() {
                            s.img = t, this._imageLoaded()
                        }.bind(this), !1), r.src = i;
                        var s = {
                            img: r,
                            assetData: e
                        };
                        return s
                    },
                    createImageData: function(e) {
                        var i = n(e, this.assetsPath, this.path),
                            r = createNS("image");
                        isSafari ? this.testImageLoaded(r) : r.addEventListener("load", this._imageLoaded, !1), r.addEventListener("error", function() {
                            s.img = t, this._imageLoaded()
                        }.bind(this), !1), r.setAttributeNS("http://www.w3.org/1999/xlink", "href", i), this._elementHelper.append ? this._elementHelper.append(r) : this._elementHelper.appendChild(r);
                        var s = {
                            img: r,
                            assetData: e
                        };
                        return s
                    },
                    imageLoaded: e,
                    footageLoaded: i,
                    setCacheType: function(t, e) {
                        "svg" === t ? (this._elementHelper = e, this._createImageData = this.createImageData.bind(this)) : this._createImageData = this.createImgData.bind(this)
                    }
                }, a
            }(),
            featureSupport = function() {
                var t = {
                    maskType: !0
                };
                return (/MSIE 10/i.test(navigator.userAgent) || /MSIE 9/i.test(navigator.userAgent) || /rv:11.0/i.test(navigator.userAgent) || /Edge\/\d./i.test(navigator.userAgent)) && (t.maskType = !1), t
            }(),
            filtersFactory = function() {
                var t = {};
                return t.createFilter = function(t, e) {
                    var i = createNS("filter");
                    i.setAttribute("id", t), !0 !== e && (i.setAttribute("filterUnits", "objectBoundingBox"), i.setAttribute("x", "0%"), i.setAttribute("y", "0%"), i.setAttribute("width", "100%"), i.setAttribute("height", "100%"));
                    return i
                }, t.createAlphaToLuminanceFilter = function() {
                    var t = createNS("feColorMatrix");
                    return t.setAttribute("type", "matrix"), t.setAttribute("color-interpolation-filters", "sRGB"), t.setAttribute("values", "0 0 0 1 0  0 0 0 1 0  0 0 0 1 0  0 0 0 1 1"), t
                }, t
            }(),
            assetLoader = function() {
                function t(t) {
                    return t.response && "object" == typeof t.response ? t.response : t.response && "string" == typeof t.response ? JSON.parse(t.response) : t.responseText ? JSON.parse(t.responseText) : null
                }
                return {
                    load: function(e, i, n) {
                        var r, s = new XMLHttpRequest;
                        try {
                            s.responseType = "json"
                        } catch (t) {}
                        s.onreadystatechange = function() {
                            if (4 === s.readyState)
                                if (200 === s.status) r = t(s), i(r);
                                else try {
                                    r = t(s), i(r)
                                } catch (t) {
                                    n && n(t)
                                }
                        }, s.open("GET", e, !0), s.send()
                    }
                }
            }();

        function TextAnimatorProperty(t, e, i) {
            this._isFirstFrame = !0, this._hasMaskedPath = !1, this._frameId = -1, this._textData = t, this._renderType = e, this._elem = i, this._animatorsData = createSizedArray(this._textData.a.length), this._pathData = {}, this._moreOptions = {
                alignment: {}
            }, this.renderedLetters = [], this.lettersChangedFlag = !1, this.initDynamicPropertyContainer(i)
        }

        function TextAnimatorDataProperty(t, e, i) {
            var n = {
                    propType: !1
                },
                r = PropertyFactory.getProp,
                s = e.a;
            this.a = {
                r: s.r ? r(t, s.r, 0, degToRads, i) : n,
                rx: s.rx ? r(t, s.rx, 0, degToRads, i) : n,
                ry: s.ry ? r(t, s.ry, 0, degToRads, i) : n,
                sk: s.sk ? r(t, s.sk, 0, degToRads, i) : n,
                sa: s.sa ? r(t, s.sa, 0, degToRads, i) : n,
                s: s.s ? r(t, s.s, 1, .01, i) : n,
                a: s.a ? r(t, s.a, 1, 0, i) : n,
                o: s.o ? r(t, s.o, 0, .01, i) : n,
                p: s.p ? r(t, s.p, 1, 0, i) : n,
                sw: s.sw ? r(t, s.sw, 0, 0, i) : n,
                sc: s.sc ? r(t, s.sc, 1, 0, i) : n,
                fc: s.fc ? r(t, s.fc, 1, 0, i) : n,
                fh: s.fh ? r(t, s.fh, 0, 0, i) : n,
                fs: s.fs ? r(t, s.fs, 0, .01, i) : n,
                fb: s.fb ? r(t, s.fb, 0, .01, i) : n,
                t: s.t ? r(t, s.t, 0, 0, i) : n
            }, this.s = TextSelectorProp.getTextSelectorProp(t, e.s, i), this.s.t = e.s.t
        }

        function LetterProps(t, e, i, n, r, s) {
            this.o = t, this.sw = e, this.sc = i, this.fc = n, this.m = r, this.p = s, this._mdf = {
                o: !0,
                sw: !!e,
                sc: !!i,
                fc: !!n,
                m: !0,
                p: !0
            }
        }

        function TextProperty(t, e) {
            this._frameId = initialDefaultFrame, this.pv = "", this.v = "", this.kf = !1, this._isFirstFrame = !0, this._mdf = !1, this.data = e, this.elem = t, this.comp = this.elem.comp, this.keysIndex = 0, this.canResize = !1, this.minimumFontSize = 1, this.effectsSequence = [], this.currentData = {
                ascent: 0,
                boxWidth: this.defaultBoxWidth,
                f: "",
                fStyle: "",
                fWeight: "",
                fc: "",
                j: "",
                justifyOffset: "",
                l: [],
                lh: 0,
                lineWidths: [],
                ls: "",
                of: "",
                s: "",
                sc: "",
                sw: 0,
                t: 0,
                tr: 0,
                sz: 0,
                ps: null,
                fillColorAnim: !1,
                strokeColorAnim: !1,
                strokeWidthAnim: !1,
                yOffset: 0,
                finalSize: 0,
                finalText: [],
                finalLineHeight: 0,
                __complete: !1
            }, this.copyData(this.currentData, this.data.d.k[0].s), this.searchProperty() || this.completeTextData(this.currentData)
        }
        TextAnimatorProperty.prototype.searchProperties = function() {
            var t, e, i = this._textData.a.length,
                n = PropertyFactory.getProp;
            for (t = 0; t < i; t += 1) e = this._textData.a[t], this._animatorsData[t] = new TextAnimatorDataProperty(this._elem, e, this);
            this._textData.p && "m" in this._textData.p ? (this._pathData = {
                f: n(this._elem, this._textData.p.f, 0, 0, this),
                l: n(this._elem, this._textData.p.l, 0, 0, this),
                r: this._textData.p.r,
                m: this._elem.maskManager.getMaskProperty(this._textData.p.m)
            }, this._hasMaskedPath = !0) : this._hasMaskedPath = !1, this._moreOptions.alignment = n(this._elem, this._textData.m.a, 1, 0, this)
        }, TextAnimatorProperty.prototype.getMeasures = function(t, e) {
            if (this.lettersChangedFlag = e, this._mdf || this._isFirstFrame || e || this._hasMaskedPath && this._pathData.m._mdf) {
                this._isFirstFrame = !1;
                var i, n, r, s, a, o, l, h, c, p, f, d, u, m, g, y, v, b, x, w = this._moreOptions.alignment.v,
                    S = this._animatorsData,
                    E = this._textData,
                    C = this.mHelper,
                    P = this._renderType,
                    T = this.renderedLetters.length,
                    _ = t.l;
                if (this._hasMaskedPath) {
                    if (x = this._pathData.m, !this._pathData.n || this._pathData._mdf) {
                        var k, A = x.v;
                        for (this._pathData.r && (A = A.reverse()), a = {
                                tLength: 0,
                                segments: []
                            }, s = A._length - 1, y = 0, r = 0; r < s; r += 1) k = bez.buildBezierData(A.v[r], A.v[r + 1], [A.o[r][0] - A.v[r][0], A.o[r][1] - A.v[r][1]], [A.i[r + 1][0] - A.v[r + 1][0], A.i[r + 1][1] - A.v[r + 1][1]]), a.tLength += k.segmentLength, a.segments.push(k), y += k.segmentLength;
                        r = s, x.v.c && (k = bez.buildBezierData(A.v[r], A.v[0], [A.o[r][0] - A.v[r][0], A.o[r][1] - A.v[r][1]], [A.i[0][0] - A.v[0][0], A.i[0][1] - A.v[0][1]]), a.tLength += k.segmentLength, a.segments.push(k), y += k.segmentLength), this._pathData.pi = a
                    }
                    if (a = this._pathData.pi, o = this._pathData.f.v, f = 0, p = 1, h = 0, c = !0, m = a.segments, o < 0 && x.v.c)
                        for (a.tLength < Math.abs(o) && (o = -Math.abs(o) % a.tLength), p = (u = m[f = m.length - 1].points).length - 1; o < 0;) o += u[p].partialLength, (p -= 1) < 0 && (p = (u = m[f -= 1].points).length - 1);
                    d = (u = m[f].points)[p - 1], g = (l = u[p]).partialLength
                }
                s = _.length, i = 0, n = 0;
                var D, M, F, I, R, L = 1.2 * t.finalSize * .714,
                    B = !0;
                F = S.length;
                var N, V, z, O, j, H, $, q, G, W, X, Y, U = -1,
                    Z = o,
                    K = f,
                    J = p,
                    Q = -1,
                    tt = "",
                    et = this.defaultPropsArray;
                if (2 === t.j || 1 === t.j) {
                    var it = 0,
                        nt = 0,
                        rt = 2 === t.j ? -.5 : -1,
                        st = 0,
                        at = !0;
                    for (r = 0; r < s; r += 1)
                        if (_[r].n) {
                            for (it && (it += nt); st < r;) _[st].animatorJustifyOffset = it, st += 1;
                            it = 0, at = !0
                        } else {
                            for (M = 0; M < F; M += 1)(D = S[M].a).t.propType && (at && 2 === t.j && (nt += D.t.v * rt), (R = S[M].s.getMult(_[r].anIndexes[M], E.a[M].s.totalChars)).length ? it += D.t.v * R[0] * rt : it += D.t.v * R * rt);
                            at = !1
                        }
                    for (it && (it += nt); st < r;) _[st].animatorJustifyOffset = it, st += 1
                }
                for (r = 0; r < s; r += 1) {
                    if (C.reset(), O = 1, _[r].n) i = 0, n += t.yOffset, n += B ? 1 : 0, o = Z, B = !1, this._hasMaskedPath && (p = J, d = (u = m[f = K].points)[p - 1], g = (l = u[p]).partialLength, h = 0), tt = "", X = "", G = "", Y = "", et = this.defaultPropsArray;
                    else {
                        if (this._hasMaskedPath) {
                            if (Q !== _[r].line) {
                                switch (t.j) {
                                    case 1:
                                        o += y - t.lineWidths[_[r].line];
                                        break;
                                    case 2:
                                        o += (y - t.lineWidths[_[r].line]) / 2
                                }
                                Q = _[r].line
                            }
                            U !== _[r].ind && (_[U] && (o += _[U].extra), o += _[r].an / 2, U = _[r].ind), o += w[0] * _[r].an * .005;
                            var ot = 0;
                            for (M = 0; M < F; M += 1)(D = S[M].a).p.propType && ((R = S[M].s.getMult(_[r].anIndexes[M], E.a[M].s.totalChars)).length ? ot += D.p.v[0] * R[0] : ot += D.p.v[0] * R), D.a.propType && ((R = S[M].s.getMult(_[r].anIndexes[M], E.a[M].s.totalChars)).length ? ot += D.a.v[0] * R[0] : ot += D.a.v[0] * R);
                            for (c = !0; c;) h + g >= o + ot || !u ? (v = (o + ot - h) / l.partialLength, V = d.point[0] + (l.point[0] - d.point[0]) * v, z = d.point[1] + (l.point[1] - d.point[1]) * v, C.translate(-w[0] * _[r].an * .005, -w[1] * L * .01), c = !1) : u && (h += l.partialLength, (p += 1) >= u.length && (p = 0, m[f += 1] ? u = m[f].points : x.v.c ? (p = 0, u = m[f = 0].points) : (h -= l.partialLength, u = null)), u && (d = l, g = (l = u[p]).partialLength));
                            N = _[r].an / 2 - _[r].add, C.translate(-N, 0, 0)
                        } else N = _[r].an / 2 - _[r].add, C.translate(-N, 0, 0), C.translate(-w[0] * _[r].an * .005, -w[1] * L * .01, 0);
                        for (M = 0; M < F; M += 1)(D = S[M].a).t.propType && (R = S[M].s.getMult(_[r].anIndexes[M], E.a[M].s.totalChars), 0 === i && 0 === t.j || (this._hasMaskedPath ? R.length ? o += D.t.v * R[0] : o += D.t.v * R : R.length ? i += D.t.v * R[0] : i += D.t.v * R));
                        for (t.strokeWidthAnim && (H = t.sw || 0), t.strokeColorAnim && (j = t.sc ? [t.sc[0], t.sc[1], t.sc[2]] : [0, 0, 0]), t.fillColorAnim && t.fc && ($ = [t.fc[0], t.fc[1], t.fc[2]]), M = 0; M < F; M += 1)(D = S[M].a).a.propType && ((R = S[M].s.getMult(_[r].anIndexes[M], E.a[M].s.totalChars)).length ? C.translate(-D.a.v[0] * R[0], -D.a.v[1] * R[1], D.a.v[2] * R[2]) : C.translate(-D.a.v[0] * R, -D.a.v[1] * R, D.a.v[2] * R));
                        for (M = 0; M < F; M += 1)(D = S[M].a).s.propType && ((R = S[M].s.getMult(_[r].anIndexes[M], E.a[M].s.totalChars)).length ? C.scale(1 + (D.s.v[0] - 1) * R[0], 1 + (D.s.v[1] - 1) * R[1], 1) : C.scale(1 + (D.s.v[0] - 1) * R, 1 + (D.s.v[1] - 1) * R, 1));
                        for (M = 0; M < F; M += 1) {
                            if (D = S[M].a, R = S[M].s.getMult(_[r].anIndexes[M], E.a[M].s.totalChars), D.sk.propType && (R.length ? C.skewFromAxis(-D.sk.v * R[0], D.sa.v * R[1]) : C.skewFromAxis(-D.sk.v * R, D.sa.v * R)), D.r.propType && (R.length ? C.rotateZ(-D.r.v * R[2]) : C.rotateZ(-D.r.v * R)), D.ry.propType && (R.length ? C.rotateY(D.ry.v * R[1]) : C.rotateY(D.ry.v * R)), D.rx.propType && (R.length ? C.rotateX(D.rx.v * R[0]) : C.rotateX(D.rx.v * R)), D.o.propType && (R.length ? O += (D.o.v * R[0] - O) * R[0] : O += (D.o.v * R - O) * R), t.strokeWidthAnim && D.sw.propType && (R.length ? H += D.sw.v * R[0] : H += D.sw.v * R), t.strokeColorAnim && D.sc.propType)
                                for (q = 0; q < 3; q += 1) R.length ? j[q] += (D.sc.v[q] - j[q]) * R[0] : j[q] += (D.sc.v[q] - j[q]) * R;
                            if (t.fillColorAnim && t.fc) {
                                if (D.fc.propType)
                                    for (q = 0; q < 3; q += 1) R.length ? $[q] += (D.fc.v[q] - $[q]) * R[0] : $[q] += (D.fc.v[q] - $[q]) * R;
                                D.fh.propType && ($ = R.length ? addHueToRGB($, D.fh.v * R[0]) : addHueToRGB($, D.fh.v * R)), D.fs.propType && ($ = R.length ? addSaturationToRGB($, D.fs.v * R[0]) : addSaturationToRGB($, D.fs.v * R)), D.fb.propType && ($ = R.length ? addBrightnessToRGB($, D.fb.v * R[0]) : addBrightnessToRGB($, D.fb.v * R))
                            }
                        }
                        for (M = 0; M < F; M += 1)(D = S[M].a).p.propType && (R = S[M].s.getMult(_[r].anIndexes[M], E.a[M].s.totalChars), this._hasMaskedPath ? R.length ? C.translate(0, D.p.v[1] * R[0], -D.p.v[2] * R[1]) : C.translate(0, D.p.v[1] * R, -D.p.v[2] * R) : R.length ? C.translate(D.p.v[0] * R[0], D.p.v[1] * R[1], -D.p.v[2] * R[2]) : C.translate(D.p.v[0] * R, D.p.v[1] * R, -D.p.v[2] * R));
                        if (t.strokeWidthAnim && (G = H < 0 ? 0 : H), t.strokeColorAnim && (W = "rgb(" + Math.round(255 * j[0]) + "," + Math.round(255 * j[1]) + "," + Math.round(255 * j[2]) + ")"), t.fillColorAnim && t.fc && (X = "rgb(" + Math.round(255 * $[0]) + "," + Math.round(255 * $[1]) + "," + Math.round(255 * $[2]) + ")"), this._hasMaskedPath) {
                            if (C.translate(0, -t.ls), C.translate(0, w[1] * L * .01 + n, 0), E.p.p) {
                                b = (l.point[1] - d.point[1]) / (l.point[0] - d.point[0]);
                                var lt = 180 * Math.atan(b) / Math.PI;
                                l.point[0] < d.point[0] && (lt += 180), C.rotate(-lt * Math.PI / 180)
                            }
                            C.translate(V, z, 0), o -= w[0] * _[r].an * .005, _[r + 1] && U !== _[r + 1].ind && (o += _[r].an / 2, o += .001 * t.tr * t.finalSize)
                        } else {
                            switch (C.translate(i, n, 0), t.ps && C.translate(t.ps[0], t.ps[1] + t.ascent, 0), t.j) {
                                case 1:
                                    C.translate(_[r].animatorJustifyOffset + t.justifyOffset + (t.boxWidth - t.lineWidths[_[r].line]), 0, 0);
                                    break;
                                case 2:
                                    C.translate(_[r].animatorJustifyOffset + t.justifyOffset + (t.boxWidth - t.lineWidths[_[r].line]) / 2, 0, 0)
                            }
                            C.translate(0, -t.ls), C.translate(N, 0, 0), C.translate(w[0] * _[r].an * .005, w[1] * L * .01, 0), i += _[r].l + .001 * t.tr * t.finalSize
                        }
                        "html" === P ? tt = C.toCSS() : "svg" === P ? tt = C.to2dCSS() : et = [C.props[0], C.props[1], C.props[2], C.props[3], C.props[4], C.props[5], C.props[6], C.props[7], C.props[8], C.props[9], C.props[10], C.props[11], C.props[12], C.props[13], C.props[14], C.props[15]], Y = O
                    }
                    T <= r ? (I = new LetterProps(Y, G, W, X, tt, et), this.renderedLetters.push(I), T += 1, this.lettersChangedFlag = !0) : (I = this.renderedLetters[r], this.lettersChangedFlag = I.update(Y, G, W, X, tt, et) || this.lettersChangedFlag)
                }
            }
        }, TextAnimatorProperty.prototype.getValue = function() {
            this._elem.globalData.frameId !== this._frameId && (this._frameId = this._elem.globalData.frameId, this.iterateDynamicProperties())
        }, TextAnimatorProperty.prototype.mHelper = new Matrix, TextAnimatorProperty.prototype.defaultPropsArray = [], extendPrototype([DynamicPropertyContainer], TextAnimatorProperty), LetterProps.prototype.update = function(t, e, i, n, r, s) {
            this._mdf.o = !1, this._mdf.sw = !1, this._mdf.sc = !1, this._mdf.fc = !1, this._mdf.m = !1, this._mdf.p = !1;
            var a = !1;
            return this.o !== t && (this.o = t, this._mdf.o = !0, a = !0), this.sw !== e && (this.sw = e, this._mdf.sw = !0, a = !0), this.sc !== i && (this.sc = i, this._mdf.sc = !0, a = !0), this.fc !== n && (this.fc = n, this._mdf.fc = !0, a = !0), this.m !== r && (this.m = r, this._mdf.m = !0, a = !0), !s.length || this.p[0] === s[0] && this.p[1] === s[1] && this.p[4] === s[4] && this.p[5] === s[5] && this.p[12] === s[12] && this.p[13] === s[13] || (this.p = s, this._mdf.p = !0, a = !0), a
        }, TextProperty.prototype.defaultBoxWidth = [0, 0], TextProperty.prototype.copyData = function(t, e) {
            for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
            return t
        }, TextProperty.prototype.setCurrentData = function(t) {
            t.__complete || this.completeTextData(t), this.currentData = t, this.currentData.boxWidth = this.currentData.boxWidth || this.defaultBoxWidth, this._mdf = !0
        }, TextProperty.prototype.searchProperty = function() {
            return this.searchKeyframes()
        }, TextProperty.prototype.searchKeyframes = function() {
            return this.kf = this.data.d.k.length > 1, this.kf && this.addEffect(this.getKeyframeValue.bind(this)), this.kf
        }, TextProperty.prototype.addEffect = function(t) {
            this.effectsSequence.push(t), this.elem.addDynamicProperty(this)
        }, TextProperty.prototype.getValue = function(t) {
            if (this.elem.globalData.frameId !== this.frameId && this.effectsSequence.length || t) {
                this.currentData.t = this.data.d.k[this.keysIndex].s.t;
                var e = this.currentData,
                    i = this.keysIndex;
                if (this.lock) this.setCurrentData(this.currentData);
                else {
                    var n;
                    this.lock = !0, this._mdf = !1;
                    var r = this.effectsSequence.length,
                        s = t || this.data.d.k[this.keysIndex].s;
                    for (n = 0; n < r; n += 1) s = i !== this.keysIndex ? this.effectsSequence[n](s, s.t) : this.effectsSequence[n](this.currentData, s.t);
                    e !== s && this.setCurrentData(s), this.v = this.currentData, this.pv = this.v, this.lock = !1, this.frameId = this.elem.globalData.frameId
                }
            }
        }, TextProperty.prototype.getKeyframeValue = function() {
            for (var t = this.data.d.k, e = this.elem.comp.renderedFrame, i = 0, n = t.length; i <= n - 1 && !(i === n - 1 || t[i + 1].t > e);) i += 1;
            return this.keysIndex !== i && (this.keysIndex = i), this.data.d.k[this.keysIndex].s
        }, TextProperty.prototype.buildFinalText = function(t) {
            for (var e, i = FontManager.getCombinedCharacterCodes(), n = [], r = 0, s = t.length; r < s;) e = t.charCodeAt(r), -1 !== i.indexOf(e) ? n[n.length - 1] += t.charAt(r) : e >= 55296 && e <= 56319 && (e = t.charCodeAt(r + 1)) >= 56320 && e <= 57343 ? (n.push(t.substr(r, 2)), r += 1) : n.push(t.charAt(r)), r += 1;
            return n
        }, TextProperty.prototype.completeTextData = function(t) {
            t.__complete = !0;
            var e, i, n, r, s, a, o, l = this.elem.globalData.fontManager,
                h = this.data,
                c = [],
                p = 0,
                f = h.m.g,
                d = 0,
                u = 0,
                m = 0,
                g = [],
                y = 0,
                v = 0,
                b = l.getFontByName(t.f),
                x = 0,
                w = getFontProperties(b);
            t.fWeight = w.weight, t.fStyle = w.style, t.finalSize = t.s, t.finalText = this.buildFinalText(t.t), i = t.finalText.length, t.finalLineHeight = t.lh;
            var S, E = t.tr / 1e3 * t.finalSize;
            if (t.sz)
                for (var C, P, T = !0, _ = t.sz[0], k = t.sz[1]; T;) {
                    C = 0, y = 0, i = (P = this.buildFinalText(t.t)).length, E = t.tr / 1e3 * t.finalSize;
                    var A = -1;
                    for (e = 0; e < i; e += 1) S = P[e].charCodeAt(0), n = !1, " " === P[e] ? A = e : 13 !== S && 3 !== S || (y = 0, n = !0, C += t.finalLineHeight || 1.2 * t.finalSize), l.chars ? (o = l.getCharData(P[e], b.fStyle, b.fFamily), x = n ? 0 : o.w * t.finalSize / 100) : x = l.measureText(P[e], t.f, t.finalSize), y + x > _ && " " !== P[e] ? (-1 === A ? i += 1 : e = A, C += t.finalLineHeight || 1.2 * t.finalSize, P.splice(e, A === e ? 1 : 0, "\r"), A = -1, y = 0) : (y += x, y += E);
                    C += b.ascent * t.finalSize / 100, this.canResize && t.finalSize > this.minimumFontSize && k < C ? (t.finalSize -= 1, t.finalLineHeight = t.finalSize * t.lh / t.s) : (t.finalText = P, i = t.finalText.length, T = !1)
                }
            y = -E, x = 0;
            var D, M = 0;
            for (e = 0; e < i; e += 1)
                if (n = !1, 13 === (S = (D = t.finalText[e]).charCodeAt(0)) || 3 === S ? (M = 0, g.push(y), v = y > v ? y : v, y = -2 * E, r = "", n = !0, m += 1) : r = D, l.chars ? (o = l.getCharData(D, b.fStyle, l.getFontByName(t.f).fFamily), x = n ? 0 : o.w * t.finalSize / 100) : x = l.measureText(r, t.f, t.finalSize), " " === D ? M += x + E : (y += x + E + M, M = 0), c.push({
                        l: x,
                        an: x,
                        add: d,
                        n: n,
                        anIndexes: [],
                        val: r,
                        line: m,
                        animatorJustifyOffset: 0
                    }), 2 == f) {
                    if (d += x, "" === r || " " === r || e === i - 1) {
                        for ("" !== r && " " !== r || (d -= x); u <= e;) c[u].an = d, c[u].ind = p, c[u].extra = x, u += 1;
                        p += 1, d = 0
                    }
                } else if (3 == f) {
                if (d += x, "" === r || e === i - 1) {
                    for ("" === r && (d -= x); u <= e;) c[u].an = d, c[u].ind = p, c[u].extra = x, u += 1;
                    d = 0, p += 1
                }
            } else c[p].ind = p, c[p].extra = 0, p += 1;
            if (t.l = c, v = y > v ? y : v, g.push(y), t.sz) t.boxWidth = t.sz[0], t.justifyOffset = 0;
            else switch (t.boxWidth = v, t.j) {
                case 1:
                    t.justifyOffset = -t.boxWidth;
                    break;
                case 2:
                    t.justifyOffset = -t.boxWidth / 2;
                    break;
                default:
                    t.justifyOffset = 0
            }
            t.lineWidths = g;
            var F, I, R, L, B = h.a;
            a = B.length;
            var N = [];
            for (s = 0; s < a; s += 1) {
                for ((F = B[s]).a.sc && (t.strokeColorAnim = !0), F.a.sw && (t.strokeWidthAnim = !0), (F.a.fc || F.a.fh || F.a.fs || F.a.fb) && (t.fillColorAnim = !0), L = 0, R = F.s.b, e = 0; e < i; e += 1)(I = c[e]).anIndexes[s] = L, (1 == R && "" !== I.val || 2 == R && "" !== I.val && " " !== I.val || 3 == R && (I.n || " " == I.val || e == i - 1) || 4 == R && (I.n || e == i - 1)) && (1 === F.s.rn && N.push(L), L += 1);
                h.a[s].s.totalChars = L;
                var V, z = -1;
                if (1 === F.s.rn)
                    for (e = 0; e < i; e += 1) z != (I = c[e]).anIndexes[s] && (z = I.anIndexes[s], V = N.splice(Math.floor(Math.random() * N.length), 1)[0]), I.anIndexes[s] = V
            }
            t.yOffset = t.finalLineHeight || 1.2 * t.finalSize, t.ls = t.ls || 0, t.ascent = b.ascent * t.finalSize / 100
        }, TextProperty.prototype.updateDocumentData = function(t, e) {
            e = void 0 === e ? this.keysIndex : e;
            var i = this.copyData({}, this.data.d.k[e].s);
            i = this.copyData(i, t), this.data.d.k[e].s = i, this.recalculate(e), this.elem.addDynamicProperty(this)
        }, TextProperty.prototype.recalculate = function(t) {
            var e = this.data.d.k[t].s;
            e.__complete = !1, this.keysIndex = 0, this._isFirstFrame = !0, this.getValue(e)
        }, TextProperty.prototype.canResizeFont = function(t) {
            this.canResize = t, this.recalculate(this.keysIndex), this.elem.addDynamicProperty(this)
        }, TextProperty.prototype.setMinimumFontSize = function(t) {
            this.minimumFontSize = Math.floor(t) || 1, this.recalculate(this.keysIndex), this.elem.addDynamicProperty(this)
        };
        var TextSelectorProp = function() {
                var t = Math.max,
                    e = Math.min,
                    i = Math.floor;

                function n(t, e) {
                    this._currentTextLength = -1, this.k = !1, this.data = e, this.elem = t, this.comp = t.comp, this.finalS = 0, this.finalE = 0, this.initDynamicPropertyContainer(t), this.s = PropertyFactory.getProp(t, e.s || {
                        k: 0
                    }, 0, 0, this), this.e = "e" in e ? PropertyFactory.getProp(t, e.e, 0, 0, this) : {
                        v: 100
                    }, this.o = PropertyFactory.getProp(t, e.o || {
                        k: 0
                    }, 0, 0, this), this.xe = PropertyFactory.getProp(t, e.xe || {
                        k: 0
                    }, 0, 0, this), this.ne = PropertyFactory.getProp(t, e.ne || {
                        k: 0
                    }, 0, 0, this), this.a = PropertyFactory.getProp(t, e.a, 0, .01, this), this.dynamicProperties.length || this.getValue()
                }
                return n.prototype = {
                    getMult: function(n) {
                        this._currentTextLength !== this.elem.textProperty.currentData.l.length && this.getValue();
                        var r = 0,
                            s = 0,
                            a = 1,
                            o = 1;
                        this.ne.v > 0 ? r = this.ne.v / 100 : s = -this.ne.v / 100, this.xe.v > 0 ? a = 1 - this.xe.v / 100 : o = 1 + this.xe.v / 100;
                        var l = BezierFactory.getBezierEasing(r, s, a, o).get,
                            h = 0,
                            c = this.finalS,
                            p = this.finalE,
                            f = this.data.sh;
                        if (2 === f) h = l(h = p === c ? n >= p ? 1 : 0 : t(0, e(.5 / (p - c) + (n - c) / (p - c), 1)));
                        else if (3 === f) h = l(h = p === c ? n >= p ? 0 : 1 : 1 - t(0, e(.5 / (p - c) + (n - c) / (p - c), 1)));
                        else if (4 === f) p === c ? h = 0 : (h = t(0, e(.5 / (p - c) + (n - c) / (p - c), 1))) < .5 ? h *= 2 : h = 1 - 2 * (h - .5), h = l(h);
                        else if (5 === f) {
                            if (p === c) h = 0;
                            else {
                                var d = p - c,
                                    u = -d / 2 + (n = e(t(0, n + .5 - c), p - c)),
                                    m = d / 2;
                                h = Math.sqrt(1 - u * u / (m * m))
                            }
                            h = l(h)
                        } else 6 === f ? (p === c ? h = 0 : (n = e(t(0, n + .5 - c), p - c), h = (1 + Math.cos(Math.PI + 2 * Math.PI * n / (p - c))) / 2), h = l(h)) : (n >= i(c) && (h = t(0, e(n - c < 0 ? e(p, 1) - (c - n) : p - n, 1))), h = l(h));
                        return h * this.a.v
                    },
                    getValue: function(t) {
                        this.iterateDynamicProperties(), this._mdf = t || this._mdf, this._currentTextLength = this.elem.textProperty.currentData.l.length || 0, t && 2 === this.data.r && (this.e.v = this._currentTextLength);
                        var e = 2 === this.data.r ? 1 : 100 / this.data.totalChars,
                            i = this.o.v / e,
                            n = this.s.v / e + i,
                            r = this.e.v / e + i;
                        if (n > r) {
                            var s = n;
                            n = r, r = s
                        }
                        this.finalS = n, this.finalE = r
                    }
                }, extendPrototype([DynamicPropertyContainer], n), {
                    getTextSelectorProp: function(t, e, i) {
                        return new n(t, e, i)
                    }
                }
            }(),
            poolFactory = function(t, e, i) {
                var n = 0,
                    r = t,
                    s = createSizedArray(r);
                return {
                    newElement: function() {
                        return n ? s[n -= 1] : e()
                    },
                    release: function(t) {
                        n === r && (s = pooling.double(s), r *= 2), i && i(t), s[n] = t, n += 1
                    }
                }
            },
            pooling = {
                double: function(t) {
                    return t.concat(createSizedArray(t.length))
                }
            },
            pointPool = poolFactory(8, (function() {
                return createTypedArray("float32", 2)
            })),
            shapePool = (factory = poolFactory(4, (function() {
                return new ShapePath
            }), (function(t) {
                var e, i = t._length;
                for (e = 0; e < i; e += 1) pointPool.release(t.v[e]), pointPool.release(t.i[e]), pointPool.release(t.o[e]), t.v[e] = null, t.i[e] = null, t.o[e] = null;
                t._length = 0, t.c = !1
            })), factory.clone = function(t) {
                var e, i = factory.newElement(),
                    n = void 0 === t._length ? t.v.length : t._length;
                for (i.setLength(n), i.c = t.c, e = 0; e < n; e += 1) i.setTripleAt(t.v[e][0], t.v[e][1], t.o[e][0], t.o[e][1], t.i[e][0], t.i[e][1], e);
                return i
            }, factory),
            factory, shapeCollectionPool = function() {
                var t = {
                        newShapeCollection: function() {
                            var t;
                            t = e ? n[e -= 1] : new ShapeCollection;
                            return t
                        },
                        release: function(t) {
                            var r, s = t._length;
                            for (r = 0; r < s; r += 1) shapePool.release(t.shapes[r]);
                            t._length = 0, e === i && (n = pooling.double(n), i *= 2);
                            n[e] = t, e += 1
                        }
                    },
                    e = 0,
                    i = 4,
                    n = createSizedArray(i);
                return t
            }(),
            segmentsLengthPool = poolFactory(8, (function() {
                return {
                    lengths: [],
                    totalLength: 0
                }
            }), (function(t) {
                var e, i = t.lengths.length;
                for (e = 0; e < i; e += 1) bezierLengthPool.release(t.lengths[e]);
                t.lengths.length = 0
            })),
            bezierLengthPool = poolFactory(8, (function() {
                return {
                    addedLength: 0,
                    percents: createTypedArray("float32", defaultCurveSegments),
                    lengths: createTypedArray("float32", defaultCurveSegments)
                }
            })),
            markerParser = function() {
                function t(t) {
                    for (var e, i = t.split("\r\n"), n = {}, r = 0, s = 0; s < i.length; s += 1) 2 === (e = i[s].split(":")).length && (n[e[0]] = e[1].trim(), r += 1);
                    if (0 === r) throw new Error;
                    return n
                }
                return function(e) {
                    for (var i = [], n = 0; n < e.length; n += 1) {
                        var r = e[n],
                            s = {
                                time: r.tm,
                                duration: r.dr
                            };
                        try {
                            s.payload = JSON.parse(e[n].cm)
                        } catch (i) {
                            try {
                                s.payload = t(e[n].cm)
                            } catch (t) {
                                s.payload = {
                                    name: e[n]
                                }
                            }
                        }
                        i.push(s)
                    }
                    return i
                }
            }();

        function BaseRenderer() {}

        function SVGRenderer(t, e) {
            this.animationItem = t, this.layers = null, this.renderedFrame = -1, this.svgElement = createNS("svg");
            var i = "";
            if (e && e.title) {
                var n = createNS("title"),
                    r = createElementID();
                n.setAttribute("id", r), n.textContent = e.title, this.svgElement.appendChild(n), i += r
            }
            if (e && e.description) {
                var s = createNS("desc"),
                    a = createElementID();
                s.setAttribute("id", a), s.textContent = e.description, this.svgElement.appendChild(s), i += " " + a
            }
            i && this.svgElement.setAttribute("aria-labelledby", i);
            var o = createNS("defs");
            this.svgElement.appendChild(o);
            var l = createNS("g");
            this.svgElement.appendChild(l), this.layerElement = l, this.renderConfig = {
                preserveAspectRatio: e && e.preserveAspectRatio || "xMidYMid meet",
                imagePreserveAspectRatio: e && e.imagePreserveAspectRatio || "xMidYMid slice",
                progressiveLoad: e && e.progressiveLoad || !1,
                hideOnTransparent: !(e && !1 === e.hideOnTransparent),
                viewBoxOnly: e && e.viewBoxOnly || !1,
                viewBoxSize: e && e.viewBoxSize || !1,
                className: e && e.className || "",
                id: e && e.id || "",
                focusable: e && e.focusable,
                filterSize: {
                    width: e && e.filterSize && e.filterSize.width || "100%",
                    height: e && e.filterSize && e.filterSize.height || "100%",
                    x: e && e.filterSize && e.filterSize.x || "0%",
                    y: e && e.filterSize && e.filterSize.y || "0%"
                }
            }, this.globalData = {
                _mdf: !1,
                frameNum: -1,
                defs: o,
                renderConfig: this.renderConfig
            }, this.elements = [], this.pendingElements = [], this.destroyed = !1, this.rendererType = "svg"
        }

        function CanvasRenderer(t, e) {
            this.animationItem = t, this.renderConfig = {
                clearCanvas: !e || void 0 === e.clearCanvas || e.clearCanvas,
                context: e && e.context || null,
                progressiveLoad: e && e.progressiveLoad || !1,
                preserveAspectRatio: e && e.preserveAspectRatio || "xMidYMid meet",
                imagePreserveAspectRatio: e && e.imagePreserveAspectRatio || "xMidYMid slice",
                className: e && e.className || "",
                id: e && e.id || ""
            }, this.renderConfig.dpr = e && e.dpr || 1, this.animationItem.wrapper && (this.renderConfig.dpr = e && e.dpr || window.devicePixelRatio || 1), this.renderedFrame = -1, this.globalData = {
                frameNum: -1,
                _mdf: !1,
                renderConfig: this.renderConfig,
                currentGlobalAlpha: -1
            }, this.contextData = new CVContextData, this.elements = [], this.pendingElements = [], this.transformMat = new Matrix, this.completeLayers = !1, this.rendererType = "canvas"
        }

        function HybridRenderer(t, e) {
            this.animationItem = t, this.layers = null, this.renderedFrame = -1, this.renderConfig = {
                className: e && e.className || "",
                imagePreserveAspectRatio: e && e.imagePreserveAspectRatio || "xMidYMid slice",
                hideOnTransparent: !(e && !1 === e.hideOnTransparent),
                filterSize: {
                    width: e && e.filterSize && e.filterSize.width || "400%",
                    height: e && e.filterSize && e.filterSize.height || "400%",
                    x: e && e.filterSize && e.filterSize.x || "-100%",
                    y: e && e.filterSize && e.filterSize.y || "-100%"
                }
            }, this.globalData = {
                _mdf: !1,
                frameNum: -1,
                renderConfig: this.renderConfig
            }, this.pendingElements = [], this.elements = [], this.threeDElements = [], this.destroyed = !1, this.camera = null, this.supports3d = !0, this.rendererType = "html"
        }

        function MaskElement(t, e, i) {
            this.data = t, this.element = e, this.globalData = i, this.storedData = [], this.masksProperties = this.data.masksProperties || [], this.maskElement = null;
            var n, r, s = this.globalData.defs,
                a = this.masksProperties ? this.masksProperties.length : 0;
            this.viewData = createSizedArray(a), this.solidPath = "";
            var o, l, h, c, p, f, d = this.masksProperties,
                u = 0,
                m = [],
                g = createElementID(),
                y = "clipPath",
                v = "clip-path";
            for (n = 0; n < a; n += 1)
                if (("a" !== d[n].mode && "n" !== d[n].mode || d[n].inv || 100 !== d[n].o.k || d[n].o.x) && (y = "mask", v = "mask"), "s" !== d[n].mode && "i" !== d[n].mode || 0 !== u ? h = null : ((h = createNS("rect")).setAttribute("fill", "#ffffff"), h.setAttribute("width", this.element.comp.data.w || 0), h.setAttribute("height", this.element.comp.data.h || 0), m.push(h)), r = createNS("path"), "n" === d[n].mode) this.viewData[n] = {
                    op: PropertyFactory.getProp(this.element, d[n].o, 0, .01, this.element),
                    prop: ShapePropertyFactory.getShapeProp(this.element, d[n], 3),
                    elem: r,
                    lastPath: ""
                }, s.appendChild(r);
                else {
                    var b;
                    if (u += 1, r.setAttribute("fill", "s" === d[n].mode ? "#000000" : "#ffffff"), r.setAttribute("clip-rule", "nonzero"), 0 !== d[n].x.k ? (y = "mask", v = "mask", f = PropertyFactory.getProp(this.element, d[n].x, 0, null, this.element), b = createElementID(), (c = createNS("filter")).setAttribute("id", b), (p = createNS("feMorphology")).setAttribute("operator", "erode"), p.setAttribute("in", "SourceGraphic"), p.setAttribute("radius", "0"), c.appendChild(p), s.appendChild(c), r.setAttribute("stroke", "s" === d[n].mode ? "#000000" : "#ffffff")) : (p = null, f = null), this.storedData[n] = {
                            elem: r,
                            x: f,
                            expan: p,
                            lastPath: "",
                            lastOperator: "",
                            filterId: b,
                            lastRadius: 0
                        }, "i" === d[n].mode) {
                        l = m.length;
                        var x = createNS("g");
                        for (o = 0; o < l; o += 1) x.appendChild(m[o]);
                        var w = createNS("mask");
                        w.setAttribute("mask-type", "alpha"), w.setAttribute("id", g + "_" + u), w.appendChild(r), s.appendChild(w), x.setAttribute("mask", "url(" + locationHref + "#" + g + "_" + u + ")"), m.length = 0, m.push(x)
                    } else m.push(r);
                    d[n].inv && !this.solidPath && (this.solidPath = this.createLayerSolidPath()), this.viewData[n] = {
                        elem: r,
                        lastPath: "",
                        op: PropertyFactory.getProp(this.element, d[n].o, 0, .01, this.element),
                        prop: ShapePropertyFactory.getShapeProp(this.element, d[n], 3),
                        invRect: h
                    }, this.viewData[n].prop.k || this.drawPath(d[n], this.viewData[n].prop.v, this.viewData[n])
                }
            for (this.maskElement = createNS(y), a = m.length, n = 0; n < a; n += 1) this.maskElement.appendChild(m[n]);
            u > 0 && (this.maskElement.setAttribute("id", g), this.element.maskedElement.setAttribute(v, "url(" + locationHref + "#" + g + ")"), s.appendChild(this.maskElement)), this.viewData.length && this.element.addRenderableComponent(this)
        }

        function HierarchyElement() {}

        function FrameElement() {}

        function TransformElement() {}

        function RenderableElement() {}

        function RenderableDOMElement() {}

        function ProcessedElement(t, e) {
            this.elem = t, this.pos = e
        }

        function SVGStyleData(t, e) {
            this.data = t, this.type = t.ty, this.d = "", this.lvl = e, this._mdf = !1, this.closed = !0 === t.hd, this.pElem = createNS("path"), this.msElem = null
        }

        function SVGShapeData(t, e, i) {
            this.caches = [], this.styles = [], this.transformers = t, this.lStr = "", this.sh = i, this.lvl = e, this._isAnimated = !!i.k;
            for (var n = 0, r = t.length; n < r;) {
                if (t[n].mProps.dynamicProperties.length) {
                    this._isAnimated = !0;
                    break
                }
                n += 1
            }
        }

        function SVGTransformData(t, e, i) {
            this.transform = {
                mProps: t,
                op: e,
                container: i
            }, this.elements = [], this._isAnimated = this.transform.mProps.dynamicProperties.length || this.transform.op.effectsSequence.length
        }

        function SVGStrokeStyleData(t, e, i) {
            this.initDynamicPropertyContainer(t), this.getValue = this.iterateDynamicProperties, this.o = PropertyFactory.getProp(t, e.o, 0, .01, this), this.w = PropertyFactory.getProp(t, e.w, 0, null, this), this.d = new DashProperty(t, e.d || {}, "svg", this), this.c = PropertyFactory.getProp(t, e.c, 1, 255, this), this.style = i, this._isAnimated = !!this._isAnimated
        }

        function SVGFillStyleData(t, e, i) {
            this.initDynamicPropertyContainer(t), this.getValue = this.iterateDynamicProperties, this.o = PropertyFactory.getProp(t, e.o, 0, .01, this), this.c = PropertyFactory.getProp(t, e.c, 1, 255, this), this.style = i
        }

        function SVGGradientFillStyleData(t, e, i) {
            this.initDynamicPropertyContainer(t), this.getValue = this.iterateDynamicProperties, this.initGradientData(t, e, i)
        }

        function SVGGradientStrokeStyleData(t, e, i) {
            this.initDynamicPropertyContainer(t), this.getValue = this.iterateDynamicProperties, this.w = PropertyFactory.getProp(t, e.w, 0, null, this), this.d = new DashProperty(t, e.d || {}, "svg", this), this.initGradientData(t, e, i), this._isAnimated = !!this._isAnimated
        }

        function ShapeGroupData() {
            this.it = [], this.prevViewData = [], this.gr = createNS("g")
        }
        BaseRenderer.prototype.checkLayers = function(t) {
            var e, i, n = this.layers.length;
            for (this.completeLayers = !0, e = n - 1; e >= 0; e -= 1) this.elements[e] || (i = this.layers[e]).ip - i.st <= t - this.layers[e].st && i.op - i.st > t - this.layers[e].st && this.buildItem(e), this.completeLayers = !!this.elements[e] && this.completeLayers;
            this.checkPendingElements()
        }, BaseRenderer.prototype.createItem = function(t) {
            switch (t.ty) {
                case 2:
                    return this.createImage(t);
                case 0:
                    return this.createComp(t);
                case 1:
                    return this.createSolid(t);
                case 3:
                    return this.createNull(t);
                case 4:
                    return this.createShape(t);
                case 5:
                    return this.createText(t);
                case 6:
                    return this.createAudio(t);
                case 13:
                    return this.createCamera(t);
                case 15:
                    return this.createFootage(t);
                default:
                    return this.createNull(t)
            }
        }, BaseRenderer.prototype.createCamera = function() {
            throw new Error("You're using a 3d camera. Try the html renderer.")
        }, BaseRenderer.prototype.createAudio = function(t) {
            return new AudioElement(t, this.globalData, this)
        }, BaseRenderer.prototype.createFootage = function(t) {
            return new FootageElement(t, this.globalData, this)
        }, BaseRenderer.prototype.buildAllItems = function() {
            var t, e = this.layers.length;
            for (t = 0; t < e; t += 1) this.buildItem(t);
            this.checkPendingElements()
        }, BaseRenderer.prototype.includeLayers = function(t) {
            var e;
            this.completeLayers = !1;
            var i, n = t.length,
                r = this.layers.length;
            for (e = 0; e < n; e += 1)
                for (i = 0; i < r;) {
                    if (this.layers[i].id === t[e].id) {
                        this.layers[i] = t[e];
                        break
                    }
                    i += 1
                }
        }, BaseRenderer.prototype.setProjectInterface = function(t) {
            this.globalData.projectInterface = t
        }, BaseRenderer.prototype.initItems = function() {
            this.globalData.progressiveLoad || this.buildAllItems()
        }, BaseRenderer.prototype.buildElementParenting = function(t, e, i) {
            for (var n = this.elements, r = this.layers, s = 0, a = r.length; s < a;) r[s].ind == e && (n[s] && !0 !== n[s] ? (i.push(n[s]), n[s].setAsParent(), void 0 !== r[s].parent ? this.buildElementParenting(t, r[s].parent, i) : t.setHierarchy(i)) : (this.buildItem(s), this.addPendingElement(t))), s += 1
        }, BaseRenderer.prototype.addPendingElement = function(t) {
            this.pendingElements.push(t)
        }, BaseRenderer.prototype.searchExtraCompositions = function(t) {
            var e, i = t.length;
            for (e = 0; e < i; e += 1)
                if (t[e].xt) {
                    var n = this.createComp(t[e]);
                    n.initExpressions(), this.globalData.projectInterface.registerComposition(n)
                }
        }, BaseRenderer.prototype.setupGlobalData = function(t, e) {
            this.globalData.fontManager = new FontManager, this.globalData.fontManager.addChars(t.chars), this.globalData.fontManager.addFonts(t.fonts, e), this.globalData.getAssetData = this.animationItem.getAssetData.bind(this.animationItem), this.globalData.getAssetsPath = this.animationItem.getAssetsPath.bind(this.animationItem), this.globalData.imageLoader = this.animationItem.imagePreloader, this.globalData.audioController = this.animationItem.audioController, this.globalData.frameId = 0, this.globalData.frameRate = t.fr, this.globalData.nm = t.nm, this.globalData.compSize = {
                w: t.w,
                h: t.h
            }
        }, extendPrototype([BaseRenderer], SVGRenderer), SVGRenderer.prototype.createNull = function(t) {
            return new NullElement(t, this.globalData, this)
        }, SVGRenderer.prototype.createShape = function(t) {
            return new SVGShapeElement(t, this.globalData, this)
        }, SVGRenderer.prototype.createText = function(t) {
            return new SVGTextLottieElement(t, this.globalData, this)
        }, SVGRenderer.prototype.createImage = function(t) {
            return new IImageElement(t, this.globalData, this)
        }, SVGRenderer.prototype.createComp = function(t) {
            return new SVGCompElement(t, this.globalData, this)
        }, SVGRenderer.prototype.createSolid = function(t) {
            return new ISolidElement(t, this.globalData, this)
        }, SVGRenderer.prototype.configAnimation = function(t) {
            this.svgElement.setAttribute("xmlns", "http://www.w3.org/2000/svg"), this.renderConfig.viewBoxSize ? this.svgElement.setAttribute("viewBox", this.renderConfig.viewBoxSize) : this.svgElement.setAttribute("viewBox", "0 0 " + t.w + " " + t.h), this.renderConfig.viewBoxOnly || (this.svgElement.setAttribute("width", t.w), this.svgElement.setAttribute("height", t.h), this.svgElement.style.width = "100%", this.svgElement.style.height = "100%", this.svgElement.style.transform = "translate3d(0,0,0)"), this.renderConfig.className && this.svgElement.setAttribute("class", this.renderConfig.className), this.renderConfig.id && this.svgElement.setAttribute("id", this.renderConfig.id), void 0 !== this.renderConfig.focusable && this.svgElement.setAttribute("focusable", this.renderConfig.focusable), this.svgElement.setAttribute("preserveAspectRatio", this.renderConfig.preserveAspectRatio), this.animationItem.wrapper.appendChild(this.svgElement);
            var e = this.globalData.defs;
            this.setupGlobalData(t, e), this.globalData.progressiveLoad = this.renderConfig.progressiveLoad, this.data = t;
            var i = createNS("clipPath"),
                n = createNS("rect");
            n.setAttribute("width", t.w), n.setAttribute("height", t.h), n.setAttribute("x", 0), n.setAttribute("y", 0);
            var r = createElementID();
            i.setAttribute("id", r), i.appendChild(n), this.layerElement.setAttribute("clip-path", "url(" + locationHref + "#" + r + ")"), e.appendChild(i), this.layers = t.layers, this.elements = createSizedArray(t.layers.length)
        }, SVGRenderer.prototype.destroy = function() {
            var t;
            this.animationItem.wrapper && (this.animationItem.wrapper.innerText = ""), this.layerElement = null, this.globalData.defs = null;
            var e = this.layers ? this.layers.length : 0;
            for (t = 0; t < e; t += 1) this.elements[t] && this.elements[t].destroy();
            this.elements.length = 0, this.destroyed = !0, this.animationItem = null
        }, SVGRenderer.prototype.updateContainerSize = function() {}, SVGRenderer.prototype.buildItem = function(t) {
            var e = this.elements;
            if (!e[t] && 99 !== this.layers[t].ty) {
                e[t] = !0;
                var i = this.createItem(this.layers[t]);
                e[t] = i, expressionsPlugin && (0 === this.layers[t].ty && this.globalData.projectInterface.registerComposition(i), i.initExpressions()), this.appendElementInPos(i, t), this.layers[t].tt && (this.elements[t - 1] && !0 !== this.elements[t - 1] ? i.setMatte(e[t - 1].layerId) : (this.buildItem(t - 1), this.addPendingElement(i)))
            }
        }, SVGRenderer.prototype.checkPendingElements = function() {
            for (; this.pendingElements.length;) {
                var t = this.pendingElements.pop();
                if (t.checkParenting(), t.data.tt)
                    for (var e = 0, i = this.elements.length; e < i;) {
                        if (this.elements[e] === t) {
                            t.setMatte(this.elements[e - 1].layerId);
                            break
                        }
                        e += 1
                    }
            }
        }, SVGRenderer.prototype.renderFrame = function(t) {
            if (this.renderedFrame !== t && !this.destroyed) {
                var e;
                null === t ? t = this.renderedFrame : this.renderedFrame = t, this.globalData.frameNum = t, this.globalData.frameId += 1, this.globalData.projectInterface.currentFrame = t, this.globalData._mdf = !1;
                var i = this.layers.length;
                for (this.completeLayers || this.checkLayers(t), e = i - 1; e >= 0; e -= 1)(this.completeLayers || this.elements[e]) && this.elements[e].prepareFrame(t - this.layers[e].st);
                if (this.globalData._mdf)
                    for (e = 0; e < i; e += 1)(this.completeLayers || this.elements[e]) && this.elements[e].renderFrame()
            }
        }, SVGRenderer.prototype.appendElementInPos = function(t, e) {
            var i = t.getBaseElement();
            if (i) {
                for (var n, r = 0; r < e;) this.elements[r] && !0 !== this.elements[r] && this.elements[r].getBaseElement() && (n = this.elements[r].getBaseElement()), r += 1;
                n ? this.layerElement.insertBefore(i, n) : this.layerElement.appendChild(i)
            }
        }, SVGRenderer.prototype.hide = function() {
            this.layerElement.style.display = "none"
        }, SVGRenderer.prototype.show = function() {
            this.layerElement.style.display = "block"
        }, extendPrototype([BaseRenderer], CanvasRenderer), CanvasRenderer.prototype.createShape = function(t) {
            return new CVShapeElement(t, this.globalData, this)
        }, CanvasRenderer.prototype.createText = function(t) {
            return new CVTextElement(t, this.globalData, this)
        }, CanvasRenderer.prototype.createImage = function(t) {
            return new CVImageElement(t, this.globalData, this)
        }, CanvasRenderer.prototype.createComp = function(t) {
            return new CVCompElement(t, this.globalData, this)
        }, CanvasRenderer.prototype.createSolid = function(t) {
            return new CVSolidElement(t, this.globalData, this)
        }, CanvasRenderer.prototype.createNull = SVGRenderer.prototype.createNull, CanvasRenderer.prototype.ctxTransform = function(t) {
            if (1 !== t[0] || 0 !== t[1] || 0 !== t[4] || 1 !== t[5] || 0 !== t[12] || 0 !== t[13])
                if (this.renderConfig.clearCanvas) {
                    this.transformMat.cloneFromProps(t);
                    var e = this.contextData.cTr.props;
                    this.transformMat.transform(e[0], e[1], e[2], e[3], e[4], e[5], e[6], e[7], e[8], e[9], e[10], e[11], e[12], e[13], e[14], e[15]), this.contextData.cTr.cloneFromProps(this.transformMat.props);
                    var i = this.contextData.cTr.props;
                    this.canvasContext.setTransform(i[0], i[1], i[4], i[5], i[12], i[13])
                } else this.canvasContext.transform(t[0], t[1], t[4], t[5], t[12], t[13])
        }, CanvasRenderer.prototype.ctxOpacity = function(t) {
            if (!this.renderConfig.clearCanvas) return this.canvasContext.globalAlpha *= t < 0 ? 0 : t, void(this.globalData.currentGlobalAlpha = this.contextData.cO);
            this.contextData.cO *= t < 0 ? 0 : t, this.globalData.currentGlobalAlpha !== this.contextData.cO && (this.canvasContext.globalAlpha = this.contextData.cO, this.globalData.currentGlobalAlpha = this.contextData.cO)
        }, CanvasRenderer.prototype.reset = function() {
            this.renderConfig.clearCanvas ? this.contextData.reset() : this.canvasContext.restore()
        }, CanvasRenderer.prototype.save = function(t) {
            if (this.renderConfig.clearCanvas) {
                t && this.canvasContext.save();
                var e, i = this.contextData.cTr.props;
                this.contextData._length <= this.contextData.cArrPos && this.contextData.duplicate();
                var n = this.contextData.saved[this.contextData.cArrPos];
                for (e = 0; e < 16; e += 1) n[e] = i[e];
                this.contextData.savedOp[this.contextData.cArrPos] = this.contextData.cO, this.contextData.cArrPos += 1
            } else this.canvasContext.save()
        }, CanvasRenderer.prototype.restore = function(t) {
            if (this.renderConfig.clearCanvas) {
                t && (this.canvasContext.restore(), this.globalData.blendMode = "source-over"), this.contextData.cArrPos -= 1;
                var e, i = this.contextData.saved[this.contextData.cArrPos],
                    n = this.contextData.cTr.props;
                for (e = 0; e < 16; e += 1) n[e] = i[e];
                this.canvasContext.setTransform(i[0], i[1], i[4], i[5], i[12], i[13]), i = this.contextData.savedOp[this.contextData.cArrPos], this.contextData.cO = i, this.globalData.currentGlobalAlpha !== i && (this.canvasContext.globalAlpha = i, this.globalData.currentGlobalAlpha = i)
            } else this.canvasContext.restore()
        }, CanvasRenderer.prototype.configAnimation = function(t) {
            if (this.animationItem.wrapper) {
                this.animationItem.container = createTag("canvas");
                var e = this.animationItem.container.style;
                e.width = "100%", e.height = "100%";
                var i = "0px 0px 0px";
                e.transformOrigin = i, e.mozTransformOrigin = i, e.webkitTransformOrigin = i, e["-webkit-transform"] = i, this.animationItem.wrapper.appendChild(this.animationItem.container), this.canvasContext = this.animationItem.container.getContext("2d"), this.renderConfig.className && this.animationItem.container.setAttribute("class", this.renderConfig.className), this.renderConfig.id && this.animationItem.container.setAttribute("id", this.renderConfig.id)
            } else this.canvasContext = this.renderConfig.context;
            this.data = t, this.layers = t.layers, this.transformCanvas = {
                w: t.w,
                h: t.h,
                sx: 0,
                sy: 0,
                tx: 0,
                ty: 0
            }, this.setupGlobalData(t, document.body), this.globalData.canvasContext = this.canvasContext, this.globalData.renderer = this, this.globalData.isDashed = !1, this.globalData.progressiveLoad = this.renderConfig.progressiveLoad, this.globalData.transformCanvas = this.transformCanvas, this.elements = createSizedArray(t.layers.length), this.updateContainerSize()
        }, CanvasRenderer.prototype.updateContainerSize = function() {
            var t, e, i, n;
            if (this.reset(), this.animationItem.wrapper && this.animationItem.container ? (t = this.animationItem.wrapper.offsetWidth, e = this.animationItem.wrapper.offsetHeight, this.animationItem.container.setAttribute("width", t * this.renderConfig.dpr), this.animationItem.container.setAttribute("height", e * this.renderConfig.dpr)) : (t = this.canvasContext.canvas.width * this.renderConfig.dpr, e = this.canvasContext.canvas.height * this.renderConfig.dpr), -1 !== this.renderConfig.preserveAspectRatio.indexOf("meet") || -1 !== this.renderConfig.preserveAspectRatio.indexOf("slice")) {
                var r = this.renderConfig.preserveAspectRatio.split(" "),
                    s = r[1] || "meet",
                    a = r[0] || "xMidYMid",
                    o = a.substr(0, 4),
                    l = a.substr(4);
                i = t / e, (n = this.transformCanvas.w / this.transformCanvas.h) > i && "meet" === s || n < i && "slice" === s ? (this.transformCanvas.sx = t / (this.transformCanvas.w / this.renderConfig.dpr), this.transformCanvas.sy = t / (this.transformCanvas.w / this.renderConfig.dpr)) : (this.transformCanvas.sx = e / (this.transformCanvas.h / this.renderConfig.dpr), this.transformCanvas.sy = e / (this.transformCanvas.h / this.renderConfig.dpr)), this.transformCanvas.tx = "xMid" === o && (n < i && "meet" === s || n > i && "slice" === s) ? (t - this.transformCanvas.w * (e / this.transformCanvas.h)) / 2 * this.renderConfig.dpr : "xMax" === o && (n < i && "meet" === s || n > i && "slice" === s) ? (t - this.transformCanvas.w * (e / this.transformCanvas.h)) * this.renderConfig.dpr : 0, this.transformCanvas.ty = "YMid" === l && (n > i && "meet" === s || n < i && "slice" === s) ? (e - this.transformCanvas.h * (t / this.transformCanvas.w)) / 2 * this.renderConfig.dpr : "YMax" === l && (n > i && "meet" === s || n < i && "slice" === s) ? (e - this.transformCanvas.h * (t / this.transformCanvas.w)) * this.renderConfig.dpr : 0
            } else "none" === this.renderConfig.preserveAspectRatio ? (this.transformCanvas.sx = t / (this.transformCanvas.w / this.renderConfig.dpr), this.transformCanvas.sy = e / (this.transformCanvas.h / this.renderConfig.dpr), this.transformCanvas.tx = 0, this.transformCanvas.ty = 0) : (this.transformCanvas.sx = this.renderConfig.dpr, this.transformCanvas.sy = this.renderConfig.dpr, this.transformCanvas.tx = 0, this.transformCanvas.ty = 0);
            this.transformCanvas.props = [this.transformCanvas.sx, 0, 0, 0, 0, this.transformCanvas.sy, 0, 0, 0, 0, 1, 0, this.transformCanvas.tx, this.transformCanvas.ty, 0, 1], this.ctxTransform(this.transformCanvas.props), this.canvasContext.beginPath(), this.canvasContext.rect(0, 0, this.transformCanvas.w, this.transformCanvas.h), this.canvasContext.closePath(), this.canvasContext.clip(), this.renderFrame(this.renderedFrame, !0)
        }, CanvasRenderer.prototype.destroy = function() {
            var t;
            for (this.renderConfig.clearCanvas && this.animationItem.wrapper && (this.animationItem.wrapper.innerText = ""), t = (this.layers ? this.layers.length : 0) - 1; t >= 0; t -= 1) this.elements[t] && this.elements[t].destroy();
            this.elements.length = 0, this.globalData.canvasContext = null, this.animationItem.container = null, this.destroyed = !0
        }, CanvasRenderer.prototype.renderFrame = function(t, e) {
            if ((this.renderedFrame !== t || !0 !== this.renderConfig.clearCanvas || e) && !this.destroyed && -1 !== t) {
                var i;
                this.renderedFrame = t, this.globalData.frameNum = t - this.animationItem._isFirstFrame, this.globalData.frameId += 1, this.globalData._mdf = !this.renderConfig.clearCanvas || e, this.globalData.projectInterface.currentFrame = t;
                var n = this.layers.length;
                for (this.completeLayers || this.checkLayers(t), i = 0; i < n; i += 1)(this.completeLayers || this.elements[i]) && this.elements[i].prepareFrame(t - this.layers[i].st);
                if (this.globalData._mdf) {
                    for (!0 === this.renderConfig.clearCanvas ? this.canvasContext.clearRect(0, 0, this.transformCanvas.w, this.transformCanvas.h) : this.save(), i = n - 1; i >= 0; i -= 1)(this.completeLayers || this.elements[i]) && this.elements[i].renderFrame();
                    !0 !== this.renderConfig.clearCanvas && this.restore()
                }
            }
        }, CanvasRenderer.prototype.buildItem = function(t) {
            var e = this.elements;
            if (!e[t] && 99 !== this.layers[t].ty) {
                var i = this.createItem(this.layers[t], this, this.globalData);
                e[t] = i, i.initExpressions()
            }
        }, CanvasRenderer.prototype.checkPendingElements = function() {
            for (; this.pendingElements.length;) {
                this.pendingElements.pop().checkParenting()
            }
        }, CanvasRenderer.prototype.hide = function() {
            this.animationItem.container.style.display = "none"
        }, CanvasRenderer.prototype.show = function() {
            this.animationItem.container.style.display = "block"
        }, extendPrototype([BaseRenderer], HybridRenderer), HybridRenderer.prototype.buildItem = SVGRenderer.prototype.buildItem, HybridRenderer.prototype.checkPendingElements = function() {
            for (; this.pendingElements.length;) {
                this.pendingElements.pop().checkParenting()
            }
        }, HybridRenderer.prototype.appendElementInPos = function(t, e) {
            var i = t.getBaseElement();
            if (i) {
                var n = this.layers[e];
                if (n.ddd && this.supports3d) this.addTo3dContainer(i, e);
                else if (this.threeDElements) this.addTo3dContainer(i, e);
                else {
                    for (var r, s, a = 0; a < e;) this.elements[a] && !0 !== this.elements[a] && this.elements[a].getBaseElement && (s = this.elements[a], r = (this.layers[a].ddd ? this.getThreeDContainerByPos(a) : s.getBaseElement()) || r), a += 1;
                    r ? n.ddd && this.supports3d || this.layerElement.insertBefore(i, r) : n.ddd && this.supports3d || this.layerElement.appendChild(i)
                }
            }
        }, HybridRenderer.prototype.createShape = function(t) {
            return this.supports3d ? new HShapeElement(t, this.globalData, this) : new SVGShapeElement(t, this.globalData, this)
        }, HybridRenderer.prototype.createText = function(t) {
            return this.supports3d ? new HTextElement(t, this.globalData, this) : new SVGTextLottieElement(t, this.globalData, this)
        }, HybridRenderer.prototype.createCamera = function(t) {
            return this.camera = new HCameraElement(t, this.globalData, this), this.camera
        }, HybridRenderer.prototype.createImage = function(t) {
            return this.supports3d ? new HImageElement(t, this.globalData, this) : new IImageElement(t, this.globalData, this)
        }, HybridRenderer.prototype.createComp = function(t) {
            return this.supports3d ? new HCompElement(t, this.globalData, this) : new SVGCompElement(t, this.globalData, this)
        }, HybridRenderer.prototype.createSolid = function(t) {
            return this.supports3d ? new HSolidElement(t, this.globalData, this) : new ISolidElement(t, this.globalData, this)
        }, HybridRenderer.prototype.createNull = SVGRenderer.prototype.createNull, HybridRenderer.prototype.getThreeDContainerByPos = function(t) {
            for (var e = 0, i = this.threeDElements.length; e < i;) {
                if (this.threeDElements[e].startPos <= t && this.threeDElements[e].endPos >= t) return this.threeDElements[e].perspectiveElem;
                e += 1
            }
            return null
        }, HybridRenderer.prototype.createThreeDContainer = function(t, e) {
            var i, n, r = createTag("div");
            styleDiv(r);
            var s = createTag("div");
            if (styleDiv(s), "3d" === e) {
                (i = r.style).width = this.globalData.compSize.w + "px", i.height = this.globalData.compSize.h + "px";
                i.webkitTransformOrigin = "50% 50%", i.mozTransformOrigin = "50% 50%", i.transformOrigin = "50% 50%";
                var a = "matrix3d(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1)";
                (n = s.style).transform = a, n.webkitTransform = a
            }
            r.appendChild(s);
            var o = {
                container: s,
                perspectiveElem: r,
                startPos: t,
                endPos: t,
                type: e
            };
            return this.threeDElements.push(o), o
        }, HybridRenderer.prototype.build3dContainers = function() {
            var t, e, i = this.layers.length,
                n = "";
            for (t = 0; t < i; t += 1) this.layers[t].ddd && 3 !== this.layers[t].ty ? ("3d" !== n && (n = "3d", e = this.createThreeDContainer(t, "3d")), e.endPos = Math.max(e.endPos, t)) : ("2d" !== n && (n = "2d", e = this.createThreeDContainer(t, "2d")), e.endPos = Math.max(e.endPos, t));
            for (t = (i = this.threeDElements.length) - 1; t >= 0; t -= 1) this.resizerElem.appendChild(this.threeDElements[t].perspectiveElem)
        }, HybridRenderer.prototype.addTo3dContainer = function(t, e) {
            for (var i = 0, n = this.threeDElements.length; i < n;) {
                if (e <= this.threeDElements[i].endPos) {
                    for (var r, s = this.threeDElements[i].startPos; s < e;) this.elements[s] && this.elements[s].getBaseElement && (r = this.elements[s].getBaseElement()), s += 1;
                    r ? this.threeDElements[i].container.insertBefore(t, r) : this.threeDElements[i].container.appendChild(t);
                    break
                }
                i += 1
            }
        }, HybridRenderer.prototype.configAnimation = function(t) {
            var e = createTag("div"),
                i = this.animationItem.wrapper,
                n = e.style;
            n.width = t.w + "px", n.height = t.h + "px", this.resizerElem = e, styleDiv(e), n.transformStyle = "flat", n.mozTransformStyle = "flat", n.webkitTransformStyle = "flat", this.renderConfig.className && e.setAttribute("class", this.renderConfig.className), i.appendChild(e), n.overflow = "hidden";
            var r = createNS("svg");
            r.setAttribute("width", "1"), r.setAttribute("height", "1"), styleDiv(r), this.resizerElem.appendChild(r);
            var s = createNS("defs");
            r.appendChild(s), this.data = t, this.setupGlobalData(t, r), this.globalData.defs = s, this.layers = t.layers, this.layerElement = this.resizerElem, this.build3dContainers(), this.updateContainerSize()
        }, HybridRenderer.prototype.destroy = function() {
            var t;
            this.animationItem.wrapper && (this.animationItem.wrapper.innerText = ""), this.animationItem.container = null, this.globalData.defs = null;
            var e = this.layers ? this.layers.length : 0;
            for (t = 0; t < e; t += 1) this.elements[t].destroy();
            this.elements.length = 0, this.destroyed = !0, this.animationItem = null
        }, HybridRenderer.prototype.updateContainerSize = function() {
            var t, e, i, n, r = this.animationItem.wrapper.offsetWidth,
                s = this.animationItem.wrapper.offsetHeight,
                a = r / s;
            this.globalData.compSize.w / this.globalData.compSize.h > a ? (t = r / this.globalData.compSize.w, e = r / this.globalData.compSize.w, i = 0, n = (s - this.globalData.compSize.h * (r / this.globalData.compSize.w)) / 2) : (t = s / this.globalData.compSize.h, e = s / this.globalData.compSize.h, i = (r - this.globalData.compSize.w * (s / this.globalData.compSize.h)) / 2, n = 0);
            var o = this.resizerElem.style;
            o.webkitTransform = "matrix3d(" + t + ",0,0,0,0," + e + ",0,0,0,0,1,0," + i + "," + n + ",0,1)", o.transform = o.webkitTransform
        }, HybridRenderer.prototype.renderFrame = SVGRenderer.prototype.renderFrame, HybridRenderer.prototype.hide = function() {
            this.resizerElem.style.display = "none"
        }, HybridRenderer.prototype.show = function() {
            this.resizerElem.style.display = "block"
        }, HybridRenderer.prototype.initItems = function() {
            if (this.buildAllItems(), this.camera) this.camera.setup();
            else {
                var t, e = this.globalData.compSize.w,
                    i = this.globalData.compSize.h,
                    n = this.threeDElements.length;
                for (t = 0; t < n; t += 1) {
                    var r = this.threeDElements[t].perspectiveElem.style;
                    r.webkitPerspective = Math.sqrt(Math.pow(e, 2) + Math.pow(i, 2)) + "px", r.perspective = r.webkitPerspective
                }
            }
        }, HybridRenderer.prototype.searchExtraCompositions = function(t) {
            var e, i = t.length,
                n = createTag("div");
            for (e = 0; e < i; e += 1)
                if (t[e].xt) {
                    var r = this.createComp(t[e], n, this.globalData.comp, null);
                    r.initExpressions(), this.globalData.projectInterface.registerComposition(r)
                }
        }, MaskElement.prototype.getMaskProperty = function(t) {
            return this.viewData[t].prop
        }, MaskElement.prototype.renderFrame = function(t) {
            var e, i = this.element.finalTransform.mat,
                n = this.masksProperties.length;
            for (e = 0; e < n; e += 1)
                if ((this.viewData[e].prop._mdf || t) && this.drawPath(this.masksProperties[e], this.viewData[e].prop.v, this.viewData[e]), (this.viewData[e].op._mdf || t) && this.viewData[e].elem.setAttribute("fill-opacity", this.viewData[e].op.v), "n" !== this.masksProperties[e].mode && (this.viewData[e].invRect && (this.element.finalTransform.mProp._mdf || t) && this.viewData[e].invRect.setAttribute("transform", i.getInverseMatrix().to2dCSS()), this.storedData[e].x && (this.storedData[e].x._mdf || t))) {
                    var r = this.storedData[e].expan;
                    this.storedData[e].x.v < 0 ? ("erode" !== this.storedData[e].lastOperator && (this.storedData[e].lastOperator = "erode", this.storedData[e].elem.setAttribute("filter", "url(" + locationHref + "#" + this.storedData[e].filterId + ")")), r.setAttribute("radius", -this.storedData[e].x.v)) : ("dilate" !== this.storedData[e].lastOperator && (this.storedData[e].lastOperator = "dilate", this.storedData[e].elem.setAttribute("filter", null)), this.storedData[e].elem.setAttribute("stroke-width", 2 * this.storedData[e].x.v))
                }
        }, MaskElement.prototype.getMaskelement = function() {
            return this.maskElement
        }, MaskElement.prototype.createLayerSolidPath = function() {
            var t = "M0,0 ";
            return t += " h" + this.globalData.compSize.w, t += " v" + this.globalData.compSize.h, t += " h-" + this.globalData.compSize.w, t += " v-" + this.globalData.compSize.h + " "
        }, MaskElement.prototype.drawPath = function(t, e, i) {
            var n, r, s = " M" + e.v[0][0] + "," + e.v[0][1];
            for (r = e._length, n = 1; n < r; n += 1) s += " C" + e.o[n - 1][0] + "," + e.o[n - 1][1] + " " + e.i[n][0] + "," + e.i[n][1] + " " + e.v[n][0] + "," + e.v[n][1];
            if (e.c && r > 1 && (s += " C" + e.o[n - 1][0] + "," + e.o[n - 1][1] + " " + e.i[0][0] + "," + e.i[0][1] + " " + e.v[0][0] + "," + e.v[0][1]), i.lastPath !== s) {
                var a = "";
                i.elem && (e.c && (a = t.inv ? this.solidPath + s : s), i.elem.setAttribute("d", a)), i.lastPath = s
            }
        }, MaskElement.prototype.destroy = function() {
            this.element = null, this.globalData = null, this.maskElement = null, this.data = null, this.masksProperties = null
        }, HierarchyElement.prototype = {
            initHierarchy: function() {
                this.hierarchy = [], this._isParent = !1, this.checkParenting()
            },
            setHierarchy: function(t) {
                this.hierarchy = t
            },
            setAsParent: function() {
                this._isParent = !0
            },
            checkParenting: function() {
                void 0 !== this.data.parent && this.comp.buildElementParenting(this, this.data.parent, [])
            }
        }, FrameElement.prototype = {
            initFrame: function() {
                this._isFirstFrame = !1, this.dynamicProperties = [], this._mdf = !1
            },
            prepareProperties: function(t, e) {
                var i, n = this.dynamicProperties.length;
                for (i = 0; i < n; i += 1)(e || this._isParent && "transform" === this.dynamicProperties[i].propType) && (this.dynamicProperties[i].getValue(), this.dynamicProperties[i]._mdf && (this.globalData._mdf = !0, this._mdf = !0))
            },
            addDynamicProperty: function(t) {
                -1 === this.dynamicProperties.indexOf(t) && this.dynamicProperties.push(t)
            }
        }, TransformElement.prototype = {
            initTransform: function() {
                this.finalTransform = {
                    mProp: this.data.ks ? TransformPropertyFactory.getTransformProperty(this, this.data.ks, this) : {
                        o: 0
                    },
                    _matMdf: !1,
                    _opMdf: !1,
                    mat: new Matrix
                }, this.data.ao && (this.finalTransform.mProp.autoOriented = !0), this.data.ty
            },
            renderTransform: function() {
                if (this.finalTransform._opMdf = this.finalTransform.mProp.o._mdf || this._isFirstFrame, this.finalTransform._matMdf = this.finalTransform.mProp._mdf || this._isFirstFrame, this.hierarchy) {
                    var t, e = this.finalTransform.mat,
                        i = 0,
                        n = this.hierarchy.length;
                    if (!this.finalTransform._matMdf)
                        for (; i < n;) {
                            if (this.hierarchy[i].finalTransform.mProp._mdf) {
                                this.finalTransform._matMdf = !0;
                                break
                            }
                            i += 1
                        }
                    if (this.finalTransform._matMdf)
                        for (t = this.finalTransform.mProp.v.props, e.cloneFromProps(t), i = 0; i < n; i += 1) t = this.hierarchy[i].finalTransform.mProp.v.props, e.transform(t[0], t[1], t[2], t[3], t[4], t[5], t[6], t[7], t[8], t[9], t[10], t[11], t[12], t[13], t[14], t[15])
                }
            },
            globalToLocal: function(t) {
                var e = [];
                e.push(this.finalTransform);
                for (var i, n = !0, r = this.comp; n;) r.finalTransform ? (r.data.hasMask && e.splice(0, 0, r.finalTransform), r = r.comp) : n = !1;
                var s, a = e.length;
                for (i = 0; i < a; i += 1) s = e[i].mat.applyToPointArray(0, 0, 0), t = [t[0] - s[0], t[1] - s[1], 0];
                return t
            },
            mHelper: new Matrix
        }, RenderableElement.prototype = {
            initRenderable: function() {
                this.isInRange = !1, this.hidden = !1, this.isTransparent = !1, this.renderableComponents = []
            },
            addRenderableComponent: function(t) {
                -1 === this.renderableComponents.indexOf(t) && this.renderableComponents.push(t)
            },
            removeRenderableComponent: function(t) {
                -1 !== this.renderableComponents.indexOf(t) && this.renderableComponents.splice(this.renderableComponents.indexOf(t), 1)
            },
            prepareRenderableFrame: function(t) {
                this.checkLayerLimits(t)
            },
            checkTransparency: function() {
                this.finalTransform.mProp.o.v <= 0 ? !this.isTransparent && this.globalData.renderConfig.hideOnTransparent && (this.isTransparent = !0, this.hide()) : this.isTransparent && (this.isTransparent = !1, this.show())
            },
            checkLayerLimits: function(t) {
                this.data.ip - this.data.st <= t && this.data.op - this.data.st > t ? !0 !== this.isInRange && (this.globalData._mdf = !0, this._mdf = !0, this.isInRange = !0, this.show()) : !1 !== this.isInRange && (this.globalData._mdf = !0, this.isInRange = !1, this.hide())
            },
            renderRenderable: function() {
                var t, e = this.renderableComponents.length;
                for (t = 0; t < e; t += 1) this.renderableComponents[t].renderFrame(this._isFirstFrame)
            },
            sourceRectAtTime: function() {
                return {
                    top: 0,
                    left: 0,
                    width: 100,
                    height: 100
                }
            },
            getLayerSize: function() {
                return 5 === this.data.ty ? {
                    w: this.data.textData.width,
                    h: this.data.textData.height
                } : {
                    w: this.data.width,
                    h: this.data.height
                }
            }
        }, extendPrototype([RenderableElement, createProxyFunction({
            initElement: function(t, e, i) {
                this.initFrame(), this.initBaseData(t, e, i), this.initTransform(t, e, i), this.initHierarchy(), this.initRenderable(), this.initRendererElement(), this.createContainerElements(), this.createRenderableComponents(), this.createContent(), this.hide()
            },
            hide: function() {
                this.hidden || this.isInRange && !this.isTransparent || ((this.baseElement || this.layerElement).style.display = "none", this.hidden = !0)
            },
            show: function() {
                this.isInRange && !this.isTransparent && (this.data.hd || ((this.baseElement || this.layerElement).style.display = "block"), this.hidden = !1, this._isFirstFrame = !0)
            },
            renderFrame: function() {
                this.data.hd || this.hidden || (this.renderTransform(), this.renderRenderable(), this.renderElement(), this.renderInnerContent(), this._isFirstFrame && (this._isFirstFrame = !1))
            },
            renderInnerContent: function() {},
            prepareFrame: function(t) {
                this._mdf = !1, this.prepareRenderableFrame(t), this.prepareProperties(t, this.isInRange), this.checkTransparency()
            },
            destroy: function() {
                this.innerElem = null, this.destroyBaseElement()
            }
        })], RenderableDOMElement), SVGStyleData.prototype.reset = function() {
            this.d = "", this._mdf = !1
        }, SVGShapeData.prototype.setAsAnimated = function() {
            this._isAnimated = !0
        }, extendPrototype([DynamicPropertyContainer], SVGStrokeStyleData), extendPrototype([DynamicPropertyContainer], SVGFillStyleData), SVGGradientFillStyleData.prototype.initGradientData = function(t, e, i) {
            this.o = PropertyFactory.getProp(t, e.o, 0, .01, this), this.s = PropertyFactory.getProp(t, e.s, 1, null, this), this.e = PropertyFactory.getProp(t, e.e, 1, null, this), this.h = PropertyFactory.getProp(t, e.h || {
                k: 0
            }, 0, .01, this), this.a = PropertyFactory.getProp(t, e.a || {
                k: 0
            }, 0, degToRads, this), this.g = new GradientProperty(t, e.g, this), this.style = i, this.stops = [], this.setGradientData(i.pElem, e), this.setGradientOpacity(e, i), this._isAnimated = !!this._isAnimated
        }, SVGGradientFillStyleData.prototype.setGradientData = function(t, e) {
            var i = createElementID(),
                n = createNS(1 === e.t ? "linearGradient" : "radialGradient");
            n.setAttribute("id", i), n.setAttribute("spreadMethod", "pad"), n.setAttribute("gradientUnits", "userSpaceOnUse");
            var r, s, a, o = [];
            for (a = 4 * e.g.p, s = 0; s < a; s += 4) r = createNS("stop"), n.appendChild(r), o.push(r);
            t.setAttribute("gf" === e.ty ? "fill" : "stroke", "url(" + locationHref + "#" + i + ")"), this.gf = n, this.cst = o
        }, SVGGradientFillStyleData.prototype.setGradientOpacity = function(t, e) {
            if (this.g._hasOpacity && !this.g._collapsable) {
                var i, n, r, s = createNS("mask"),
                    a = createNS("path");
                s.appendChild(a);
                var o = createElementID(),
                    l = createElementID();
                s.setAttribute("id", l);
                var h = createNS(1 === t.t ? "linearGradient" : "radialGradient");
                h.setAttribute("id", o), h.setAttribute("spreadMethod", "pad"), h.setAttribute("gradientUnits", "userSpaceOnUse"), r = t.g.k.k[0].s ? t.g.k.k[0].s.length : t.g.k.k.length;
                var c = this.stops;
                for (n = 4 * t.g.p; n < r; n += 2)(i = createNS("stop")).setAttribute("stop-color", "rgb(255,255,255)"), h.appendChild(i), c.push(i);
                a.setAttribute("gf" === t.ty ? "fill" : "stroke", "url(" + locationHref + "#" + o + ")"), this.of = h, this.ms = s, this.ost = c, this.maskId = l, e.msElem = a
            }
        }, extendPrototype([DynamicPropertyContainer], SVGGradientFillStyleData), extendPrototype([SVGGradientFillStyleData, DynamicPropertyContainer], SVGGradientStrokeStyleData);
        var SVGElementsRenderer = function() {
            var t = new Matrix,
                e = new Matrix;

            function i(t, e, i) {
                (i || e.transform.op._mdf) && e.transform.container.setAttribute("opacity", e.transform.op.v), (i || e.transform.mProps._mdf) && e.transform.container.setAttribute("transform", e.transform.mProps.v.to2dCSS())
            }

            function n(i, n, r) {
                var s, a, o, l, h, c, p, f, d, u, m, g = n.styles.length,
                    y = n.lvl;
                for (c = 0; c < g; c += 1) {
                    if (l = n.sh._mdf || r, n.styles[c].lvl < y) {
                        for (f = e.reset(), u = y - n.styles[c].lvl, m = n.transformers.length - 1; !l && u > 0;) l = n.transformers[m].mProps._mdf || l, u -= 1, m -= 1;
                        if (l)
                            for (u = y - n.styles[c].lvl, m = n.transformers.length - 1; u > 0;) d = n.transformers[m].mProps.v.props, f.transform(d[0], d[1], d[2], d[3], d[4], d[5], d[6], d[7], d[8], d[9], d[10], d[11], d[12], d[13], d[14], d[15]), u -= 1, m -= 1
                    } else f = t;
                    if (a = (p = n.sh.paths)._length, l) {
                        for (o = "", s = 0; s < a; s += 1)(h = p.shapes[s]) && h._length && (o += buildShapeString(h, h._length, h.c, f));
                        n.caches[c] = o
                    } else o = n.caches[c];
                    n.styles[c].d += !0 === i.hd ? "" : o, n.styles[c]._mdf = l || n.styles[c]._mdf
                }
            }

            function r(t, e, i) {
                var n = e.style;
                (e.c._mdf || i) && n.pElem.setAttribute("fill", "rgb(" + bmFloor(e.c.v[0]) + "," + bmFloor(e.c.v[1]) + "," + bmFloor(e.c.v[2]) + ")"), (e.o._mdf || i) && n.pElem.setAttribute("fill-opacity", e.o.v)
            }

            function s(t, e, i) {
                a(t, e, i), o(t, e, i)
            }

            function a(t, e, i) {
                var n, r, s, a, o, l = e.gf,
                    h = e.g._hasOpacity,
                    c = e.s.v,
                    p = e.e.v;
                if (e.o._mdf || i) {
                    var f = "gf" === t.ty ? "fill-opacity" : "stroke-opacity";
                    e.style.pElem.setAttribute(f, e.o.v)
                }
                if (e.s._mdf || i) {
                    var d = 1 === t.t ? "x1" : "cx",
                        u = "x1" === d ? "y1" : "cy";
                    l.setAttribute(d, c[0]), l.setAttribute(u, c[1]), h && !e.g._collapsable && (e.of.setAttribute(d, c[0]), e.of.setAttribute(u, c[1]))
                }
                if (e.g._cmdf || i) {
                    n = e.cst;
                    var m = e.g.c;
                    for (s = n.length, r = 0; r < s; r += 1)(a = n[r]).setAttribute("offset", m[4 * r] + "%"), a.setAttribute("stop-color", "rgb(" + m[4 * r + 1] + "," + m[4 * r + 2] + "," + m[4 * r + 3] + ")")
                }
                if (h && (e.g._omdf || i)) {
                    var g = e.g.o;
                    for (s = (n = e.g._collapsable ? e.cst : e.ost).length, r = 0; r < s; r += 1) a = n[r], e.g._collapsable || a.setAttribute("offset", g[2 * r] + "%"), a.setAttribute("stop-opacity", g[2 * r + 1])
                }
                if (1 === t.t)(e.e._mdf || i) && (l.setAttribute("x2", p[0]), l.setAttribute("y2", p[1]), h && !e.g._collapsable && (e.of.setAttribute("x2", p[0]), e.of.setAttribute("y2", p[1])));
                else if ((e.s._mdf || e.e._mdf || i) && (o = Math.sqrt(Math.pow(c[0] - p[0], 2) + Math.pow(c[1] - p[1], 2)), l.setAttribute("r", o), h && !e.g._collapsable && e.of.setAttribute("r", o)), e.e._mdf || e.h._mdf || e.a._mdf || i) {
                    o || (o = Math.sqrt(Math.pow(c[0] - p[0], 2) + Math.pow(c[1] - p[1], 2)));
                    var y = Math.atan2(p[1] - c[1], p[0] - c[0]),
                        v = e.h.v;
                    v >= 1 ? v = .99 : v <= -1 && (v = -.99);
                    var b = o * v,
                        x = Math.cos(y + e.a.v) * b + c[0],
                        w = Math.sin(y + e.a.v) * b + c[1];
                    l.setAttribute("fx", x), l.setAttribute("fy", w), h && !e.g._collapsable && (e.of.setAttribute("fx", x), e.of.setAttribute("fy", w))
                }
            }

            function o(t, e, i) {
                var n = e.style,
                    r = e.d;
                r && (r._mdf || i) && r.dashStr && (n.pElem.setAttribute("stroke-dasharray", r.dashStr), n.pElem.setAttribute("stroke-dashoffset", r.dashoffset[0])), e.c && (e.c._mdf || i) && n.pElem.setAttribute("stroke", "rgb(" + bmFloor(e.c.v[0]) + "," + bmFloor(e.c.v[1]) + "," + bmFloor(e.c.v[2]) + ")"), (e.o._mdf || i) && n.pElem.setAttribute("stroke-opacity", e.o.v), (e.w._mdf || i) && (n.pElem.setAttribute("stroke-width", e.w.v), n.msElem && n.msElem.setAttribute("stroke-width", e.w.v))
            }
            return {
                createRenderFunction: function(t) {
                    switch (t.ty) {
                        case "fl":
                            return r;
                        case "gf":
                            return a;
                        case "gs":
                            return s;
                        case "st":
                            return o;
                        case "sh":
                        case "el":
                        case "rc":
                        case "sr":
                            return n;
                        case "tr":
                            return i;
                        default:
                            return null
                    }
                }
            }
        }();

        function ShapeTransformManager() {
            this.sequences = {}, this.sequenceList = [], this.transform_key_count = 0
        }

        function CVShapeData(t, e, i, n) {
            this.styledShapes = [], this.tr = [0, 0, 0, 0, 0, 0];
            var r, s = 4;
            "rc" === e.ty ? s = 5 : "el" === e.ty ? s = 6 : "sr" === e.ty && (s = 7), this.sh = ShapePropertyFactory.getShapeProp(t, e, s, t);
            var a, o = i.length;
            for (r = 0; r < o; r += 1) i[r].closed || (a = {
                transforms: n.addTransformSequence(i[r].transforms),
                trNodes: []
            }, this.styledShapes.push(a), i[r].elements.push(a))
        }

        function BaseElement() {}

        function NullElement(t, e, i) {
            this.initFrame(), this.initBaseData(t, e, i), this.initFrame(), this.initTransform(t, e, i), this.initHierarchy()
        }

        function SVGBaseElement() {}

        function IShapeElement() {}

        function ITextElement() {}

        function ICompElement() {}

        function IImageElement(t, e, i) {
            this.assetData = e.getAssetData(t.refId), this.initElement(t, e, i), this.sourceRect = {
                top: 0,
                left: 0,
                width: this.assetData.w,
                height: this.assetData.h
            }
        }

        function ISolidElement(t, e, i) {
            this.initElement(t, e, i)
        }

        function AudioElement(t, e, i) {
            this.initFrame(), this.initRenderable(), this.assetData = e.getAssetData(t.refId), this.initBaseData(t, e, i), this._isPlaying = !1, this._canPlay = !1;
            var n = this.globalData.getAssetsPath(this.assetData);
            this.audio = this.globalData.audioController.createAudio(n), this._currentTime = 0, this.globalData.audioController.addAudio(this), this.tm = t.tm ? PropertyFactory.getProp(this, t.tm, 0, e.frameRate, this) : {
                _placeholder: !0
            }
        }

        function FootageElement(t, e, i) {
            this.initFrame(), this.initRenderable(), this.assetData = e.getAssetData(t.refId), this.footageData = e.imageLoader.getAsset(this.assetData), this.initBaseData(t, e, i)
        }

        function SVGCompElement(t, e, i) {
            this.layers = t.layers, this.supports3d = !0, this.completeLayers = !1, this.pendingElements = [], this.elements = this.layers ? createSizedArray(this.layers.length) : [], this.initElement(t, e, i), this.tm = t.tm ? PropertyFactory.getProp(this, t.tm, 0, e.frameRate, this) : {
                _placeholder: !0
            }
        }

        function SVGTextLottieElement(t, e, i) {
            this.textSpans = [], this.renderType = "svg", this.initElement(t, e, i)
        }

        function SVGShapeElement(t, e, i) {
            this.shapes = [], this.shapesData = t.shapes, this.stylesList = [], this.shapeModifiers = [], this.itemsData = [], this.processedElements = [], this.animatedContents = [], this.initElement(t, e, i), this.prevViewData = []
        }

        function SVGTintFilter(t, e) {
            this.filterManager = e;
            var i = createNS("feColorMatrix");
            if (i.setAttribute("type", "matrix"), i.setAttribute("color-interpolation-filters", "linearRGB"), i.setAttribute("values", "0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0 0 0 1 0"), i.setAttribute("result", "f1"), t.appendChild(i), (i = createNS("feColorMatrix")).setAttribute("type", "matrix"), i.setAttribute("color-interpolation-filters", "sRGB"), i.setAttribute("values", "1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0"), i.setAttribute("result", "f2"), t.appendChild(i), this.matrixFilter = i, 100 !== e.effectElements[2].p.v || e.effectElements[2].p.k) {
                var n, r = createNS("feMerge");
                t.appendChild(r), (n = createNS("feMergeNode")).setAttribute("in", "SourceGraphic"), r.appendChild(n), (n = createNS("feMergeNode")).setAttribute("in", "f2"), r.appendChild(n)
            }
        }

        function SVGFillFilter(t, e) {
            this.filterManager = e;
            var i = createNS("feColorMatrix");
            i.setAttribute("type", "matrix"), i.setAttribute("color-interpolation-filters", "sRGB"), i.setAttribute("values", "1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0"), t.appendChild(i), this.matrixFilter = i
        }

        function SVGGaussianBlurEffect(t, e) {
            t.setAttribute("x", "-100%"), t.setAttribute("y", "-100%"), t.setAttribute("width", "300%"), t.setAttribute("height", "300%"), this.filterManager = e;
            var i = createNS("feGaussianBlur");
            t.appendChild(i), this.feGaussianBlur = i
        }

        function SVGStrokeEffect(t, e) {
            this.initialized = !1, this.filterManager = e, this.elem = t, this.paths = []
        }

        function SVGTritoneFilter(t, e) {
            this.filterManager = e;
            var i = createNS("feColorMatrix");
            i.setAttribute("type", "matrix"), i.setAttribute("color-interpolation-filters", "linearRGB"), i.setAttribute("values", "0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0 0 0 1 0"), i.setAttribute("result", "f1"), t.appendChild(i);
            var n = createNS("feComponentTransfer");
            n.setAttribute("color-interpolation-filters", "sRGB"), t.appendChild(n), this.matrixFilter = n;
            var r = createNS("feFuncR");
            r.setAttribute("type", "table"), n.appendChild(r), this.feFuncR = r;
            var s = createNS("feFuncG");
            s.setAttribute("type", "table"), n.appendChild(s), this.feFuncG = s;
            var a = createNS("feFuncB");
            a.setAttribute("type", "table"), n.appendChild(a), this.feFuncB = a
        }

        function SVGProLevelsFilter(t, e) {
            this.filterManager = e;
            var i = this.filterManager.effectElements,
                n = createNS("feComponentTransfer");
            (i[10].p.k || 0 !== i[10].p.v || i[11].p.k || 1 !== i[11].p.v || i[12].p.k || 1 !== i[12].p.v || i[13].p.k || 0 !== i[13].p.v || i[14].p.k || 1 !== i[14].p.v) && (this.feFuncR = this.createFeFunc("feFuncR", n)), (i[17].p.k || 0 !== i[17].p.v || i[18].p.k || 1 !== i[18].p.v || i[19].p.k || 1 !== i[19].p.v || i[20].p.k || 0 !== i[20].p.v || i[21].p.k || 1 !== i[21].p.v) && (this.feFuncG = this.createFeFunc("feFuncG", n)), (i[24].p.k || 0 !== i[24].p.v || i[25].p.k || 1 !== i[25].p.v || i[26].p.k || 1 !== i[26].p.v || i[27].p.k || 0 !== i[27].p.v || i[28].p.k || 1 !== i[28].p.v) && (this.feFuncB = this.createFeFunc("feFuncB", n)), (i[31].p.k || 0 !== i[31].p.v || i[32].p.k || 1 !== i[32].p.v || i[33].p.k || 1 !== i[33].p.v || i[34].p.k || 0 !== i[34].p.v || i[35].p.k || 1 !== i[35].p.v) && (this.feFuncA = this.createFeFunc("feFuncA", n)), (this.feFuncR || this.feFuncG || this.feFuncB || this.feFuncA) && (n.setAttribute("color-interpolation-filters", "sRGB"), t.appendChild(n), n = createNS("feComponentTransfer")), (i[3].p.k || 0 !== i[3].p.v || i[4].p.k || 1 !== i[4].p.v || i[5].p.k || 1 !== i[5].p.v || i[6].p.k || 0 !== i[6].p.v || i[7].p.k || 1 !== i[7].p.v) && (n.setAttribute("color-interpolation-filters", "sRGB"), t.appendChild(n), this.feFuncRComposed = this.createFeFunc("feFuncR", n), this.feFuncGComposed = this.createFeFunc("feFuncG", n), this.feFuncBComposed = this.createFeFunc("feFuncB", n))
        }

        function SVGDropShadowEffect(t, e) {
            var i = e.container.globalData.renderConfig.filterSize;
            t.setAttribute("x", i.x), t.setAttribute("y", i.y), t.setAttribute("width", i.width), t.setAttribute("height", i.height), this.filterManager = e;
            var n = createNS("feGaussianBlur");
            n.setAttribute("in", "SourceAlpha"), n.setAttribute("result", "drop_shadow_1"), n.setAttribute("stdDeviation", "0"), this.feGaussianBlur = n, t.appendChild(n);
            var r = createNS("feOffset");
            r.setAttribute("dx", "25"), r.setAttribute("dy", "0"), r.setAttribute("in", "drop_shadow_1"), r.setAttribute("result", "drop_shadow_2"), this.feOffset = r, t.appendChild(r);
            var s = createNS("feFlood");
            s.setAttribute("flood-color", "#00ff00"), s.setAttribute("flood-opacity", "1"), s.setAttribute("result", "drop_shadow_3"), this.feFlood = s, t.appendChild(s);
            var a = createNS("feComposite");
            a.setAttribute("in", "drop_shadow_3"), a.setAttribute("in2", "drop_shadow_2"), a.setAttribute("operator", "in"), a.setAttribute("result", "drop_shadow_4"), t.appendChild(a);
            var o, l = createNS("feMerge");
            t.appendChild(l), o = createNS("feMergeNode"), l.appendChild(o), (o = createNS("feMergeNode")).setAttribute("in", "SourceGraphic"), this.feMergeNode = o, this.feMerge = l, this.originalNodeAdded = !1, l.appendChild(o)
        }
        ShapeTransformManager.prototype = {
            addTransformSequence: function(t) {
                var e, i = t.length,
                    n = "_";
                for (e = 0; e < i; e += 1) n += t[e].transform.key + "_";
                var r = this.sequences[n];
                return r || (r = {
                    transforms: [].concat(t),
                    finalTransform: new Matrix,
                    _mdf: !1
                }, this.sequences[n] = r, this.sequenceList.push(r)), r
            },
            processSequence: function(t, e) {
                for (var i, n = 0, r = t.transforms.length, s = e; n < r && !e;) {
                    if (t.transforms[n].transform.mProps._mdf) {
                        s = !0;
                        break
                    }
                    n += 1
                }
                if (s)
                    for (t.finalTransform.reset(), n = r - 1; n >= 0; n -= 1) i = t.transforms[n].transform.mProps.v.props, t.finalTransform.transform(i[0], i[1], i[2], i[3], i[4], i[5], i[6], i[7], i[8], i[9], i[10], i[11], i[12], i[13], i[14], i[15]);
                t._mdf = s
            },
            processSequences: function(t) {
                var e, i = this.sequenceList.length;
                for (e = 0; e < i; e += 1) this.processSequence(this.sequenceList[e], t)
            },
            getNewKey: function() {
                return this.transform_key_count += 1, "_" + this.transform_key_count
            }
        }, CVShapeData.prototype.setAsAnimated = SVGShapeData.prototype.setAsAnimated, BaseElement.prototype = {
            checkMasks: function() {
                if (!this.data.hasMask) return !1;
                for (var t = 0, e = this.data.masksProperties.length; t < e;) {
                    if ("n" !== this.data.masksProperties[t].mode && !1 !== this.data.masksProperties[t].cl) return !0;
                    t += 1
                }
                return !1
            },
            initExpressions: function() {
                this.layerInterface = LayerExpressionInterface(this), this.data.hasMask && this.maskManager && this.layerInterface.registerMaskInterface(this.maskManager);
                var t = EffectsExpressionInterface.createEffectsInterface(this, this.layerInterface);
                this.layerInterface.registerEffectsInterface(t), 0 === this.data.ty || this.data.xt ? this.compInterface = CompExpressionInterface(this) : 4 === this.data.ty ? (this.layerInterface.shapeInterface = ShapeExpressionInterface(this.shapesData, this.itemsData, this.layerInterface), this.layerInterface.content = this.layerInterface.shapeInterface) : 5 === this.data.ty && (this.layerInterface.textInterface = TextExpressionInterface(this), this.layerInterface.text = this.layerInterface.textInterface)
            },
            setBlendMode: function() {
                var t = getBlendMode(this.data.bm);
                (this.baseElement || this.layerElement).style["mix-blend-mode"] = t
            },
            initBaseData: function(t, e, i) {
                this.globalData = e, this.comp = i, this.data = t, this.layerId = createElementID(), this.data.sr || (this.data.sr = 1), this.effectsManager = new EffectsManager(this.data, this, this.dynamicProperties)
            },
            getType: function() {
                return this.type
            },
            sourceRectAtTime: function() {}
        }, NullElement.prototype.prepareFrame = function(t) {
            this.prepareProperties(t, !0)
        }, NullElement.prototype.renderFrame = function() {}, NullElement.prototype.getBaseElement = function() {
            return null
        }, NullElement.prototype.destroy = function() {}, NullElement.prototype.sourceRectAtTime = function() {}, NullElement.prototype.hide = function() {}, extendPrototype([BaseElement, TransformElement, HierarchyElement, FrameElement], NullElement), SVGBaseElement.prototype = {
            initRendererElement: function() {
                this.layerElement = createNS("g")
            },
            createContainerElements: function() {
                this.matteElement = createNS("g"), this.transformedElement = this.layerElement, this.maskedElement = this.layerElement, this._sizeChanged = !1;
                var t, e, i, n = null;
                if (this.data.td) {
                    if (3 == this.data.td || 1 == this.data.td) {
                        var r = createNS("mask");
                        r.setAttribute("id", this.layerId), r.setAttribute("mask-type", 3 == this.data.td ? "luminance" : "alpha"), r.appendChild(this.layerElement), n = r, this.globalData.defs.appendChild(r), featureSupport.maskType || 1 != this.data.td || (r.setAttribute("mask-type", "luminance"), t = createElementID(), e = filtersFactory.createFilter(t), this.globalData.defs.appendChild(e), e.appendChild(filtersFactory.createAlphaToLuminanceFilter()), (i = createNS("g")).appendChild(this.layerElement), n = i, r.appendChild(i), i.setAttribute("filter", "url(" + locationHref + "#" + t + ")"))
                    } else if (2 == this.data.td) {
                        var s = createNS("mask");
                        s.setAttribute("id", this.layerId), s.setAttribute("mask-type", "alpha");
                        var a = createNS("g");
                        s.appendChild(a), t = createElementID(), e = filtersFactory.createFilter(t);
                        var o = createNS("feComponentTransfer");
                        o.setAttribute("in", "SourceGraphic"), e.appendChild(o);
                        var l = createNS("feFuncA");
                        l.setAttribute("type", "table"), l.setAttribute("tableValues", "1.0 0.0"), o.appendChild(l), this.globalData.defs.appendChild(e);
                        var h = createNS("rect");
                        h.setAttribute("width", this.comp.data.w), h.setAttribute("height", this.comp.data.h), h.setAttribute("x", "0"), h.setAttribute("y", "0"), h.setAttribute("fill", "#ffffff"), h.setAttribute("opacity", "0"), a.setAttribute("filter", "url(" + locationHref + "#" + t + ")"), a.appendChild(h), a.appendChild(this.layerElement), n = a, featureSupport.maskType || (s.setAttribute("mask-type", "luminance"), e.appendChild(filtersFactory.createAlphaToLuminanceFilter()), i = createNS("g"), a.appendChild(h), i.appendChild(this.layerElement), n = i, a.appendChild(i)), this.globalData.defs.appendChild(s)
                    }
                } else this.data.tt ? (this.matteElement.appendChild(this.layerElement), n = this.matteElement, this.baseElement = this.matteElement) : this.baseElement = this.layerElement;
                if (this.data.ln && this.layerElement.setAttribute("id", this.data.ln), this.data.cl && this.layerElement.setAttribute("class", this.data.cl), 0 === this.data.ty && !this.data.hd) {
                    var c = createNS("clipPath"),
                        p = createNS("path");
                    p.setAttribute("d", "M0,0 L" + this.data.w + ",0 L" + this.data.w + "," + this.data.h + " L0," + this.data.h + "z");
                    var f = createElementID();
                    if (c.setAttribute("id", f), c.appendChild(p), this.globalData.defs.appendChild(c), this.checkMasks()) {
                        var d = createNS("g");
                        d.setAttribute("clip-path", "url(" + locationHref + "#" + f + ")"), d.appendChild(this.layerElement), this.transformedElement = d, n ? n.appendChild(this.transformedElement) : this.baseElement = this.transformedElement
                    } else this.layerElement.setAttribute("clip-path", "url(" + locationHref + "#" + f + ")")
                }
                0 !== this.data.bm && this.setBlendMode()
            },
            renderElement: function() {
                this.finalTransform._matMdf && this.transformedElement.setAttribute("transform", this.finalTransform.mat.to2dCSS()), this.finalTransform._opMdf && this.transformedElement.setAttribute("opacity", this.finalTransform.mProp.o.v)
            },
            destroyBaseElement: function() {
                this.layerElement = null, this.matteElement = null, this.maskManager.destroy()
            },
            getBaseElement: function() {
                return this.data.hd ? null : this.baseElement
            },
            createRenderableComponents: function() {
                this.maskManager = new MaskElement(this.data, this, this.globalData), this.renderableEffectsManager = new SVGEffects(this)
            },
            setMatte: function(t) {
                this.matteElement && this.matteElement.setAttribute("mask", "url(" + locationHref + "#" + t + ")")
            }
        }, IShapeElement.prototype = {
            addShapeToModifiers: function(t) {
                var e, i = this.shapeModifiers.length;
                for (e = 0; e < i; e += 1) this.shapeModifiers[e].addShape(t)
            },
            isShapeInAnimatedModifiers: function(t) {
                for (var e = this.shapeModifiers.length; 0 < e;)
                    if (this.shapeModifiers[0].isAnimatedWithShape(t)) return !0;
                return !1
            },
            renderModifiers: function() {
                if (this.shapeModifiers.length) {
                    var t, e = this.shapes.length;
                    for (t = 0; t < e; t += 1) this.shapes[t].sh.reset();
                    for (t = (e = this.shapeModifiers.length) - 1; t >= 0 && !this.shapeModifiers[t].processShapes(this._isFirstFrame); t -= 1);
                }
            },
            lcEnum: {
                1: "butt",
                2: "round",
                3: "square"
            },
            ljEnum: {
                1: "miter",
                2: "round",
                3: "bevel"
            },
            searchProcessedElement: function(t) {
                for (var e = this.processedElements, i = 0, n = e.length; i < n;) {
                    if (e[i].elem === t) return e[i].pos;
                    i += 1
                }
                return 0
            },
            addProcessedElement: function(t, e) {
                for (var i = this.processedElements, n = i.length; n;)
                    if (i[n -= 1].elem === t) return void(i[n].pos = e);
                i.push(new ProcessedElement(t, e))
            },
            prepareFrame: function(t) {
                this.prepareRenderableFrame(t), this.prepareProperties(t, this.isInRange)
            }
        }, ITextElement.prototype.initElement = function(t, e, i) {
            this.lettersChangedFlag = !0, this.initFrame(), this.initBaseData(t, e, i), this.textProperty = new TextProperty(this, t.t, this.dynamicProperties), this.textAnimator = new TextAnimatorProperty(t.t, this.renderType, this), this.initTransform(t, e, i), this.initHierarchy(), this.initRenderable(), this.initRendererElement(), this.createContainerElements(), this.createRenderableComponents(), this.createContent(), this.hide(), this.textAnimator.searchProperties(this.dynamicProperties)
        }, ITextElement.prototype.prepareFrame = function(t) {
            this._mdf = !1, this.prepareRenderableFrame(t), this.prepareProperties(t, this.isInRange), (this.textProperty._mdf || this.textProperty._isFirstFrame) && (this.buildNewText(), this.textProperty._isFirstFrame = !1, this.textProperty._mdf = !1)
        }, ITextElement.prototype.createPathShape = function(t, e) {
            var i, n, r = e.length,
                s = "";
            for (i = 0; i < r; i += 1) n = e[i].ks.k, s += buildShapeString(n, n.i.length, !0, t);
            return s
        }, ITextElement.prototype.updateDocumentData = function(t, e) {
            this.textProperty.updateDocumentData(t, e)
        }, ITextElement.prototype.canResizeFont = function(t) {
            this.textProperty.canResizeFont(t)
        }, ITextElement.prototype.setMinimumFontSize = function(t) {
            this.textProperty.setMinimumFontSize(t)
        }, ITextElement.prototype.applyTextPropertiesToMatrix = function(t, e, i, n, r) {
            switch (t.ps && e.translate(t.ps[0], t.ps[1] + t.ascent, 0), e.translate(0, -t.ls, 0), t.j) {
                case 1:
                    e.translate(t.justifyOffset + (t.boxWidth - t.lineWidths[i]), 0, 0);
                    break;
                case 2:
                    e.translate(t.justifyOffset + (t.boxWidth - t.lineWidths[i]) / 2, 0, 0)
            }
            e.translate(n, r, 0)
        }, ITextElement.prototype.buildColor = function(t) {
            return "rgb(" + Math.round(255 * t[0]) + "," + Math.round(255 * t[1]) + "," + Math.round(255 * t[2]) + ")"
        }, ITextElement.prototype.emptyProp = new LetterProps, ITextElement.prototype.destroy = function() {}, extendPrototype([BaseElement, TransformElement, HierarchyElement, FrameElement, RenderableDOMElement], ICompElement), ICompElement.prototype.initElement = function(t, e, i) {
            this.initFrame(), this.initBaseData(t, e, i), this.initTransform(t, e, i), this.initRenderable(), this.initHierarchy(), this.initRendererElement(), this.createContainerElements(), this.createRenderableComponents(), !this.data.xt && e.progressiveLoad || this.buildAllItems(), this.hide()
        }, ICompElement.prototype.prepareFrame = function(t) {
            if (this._mdf = !1, this.prepareRenderableFrame(t), this.prepareProperties(t, this.isInRange), this.isInRange || this.data.xt) {
                if (this.tm._placeholder) this.renderedFrame = t / this.data.sr;
                else {
                    var e = this.tm.v;
                    e === this.data.op && (e = this.data.op - 1), this.renderedFrame = e
                }
                var i, n = this.elements.length;
                for (this.completeLayers || this.checkLayers(this.renderedFrame), i = n - 1; i >= 0; i -= 1)(this.completeLayers || this.elements[i]) && (this.elements[i].prepareFrame(this.renderedFrame - this.layers[i].st), this.elements[i]._mdf && (this._mdf = !0))
            }
        }, ICompElement.prototype.renderInnerContent = function() {
            var t, e = this.layers.length;
            for (t = 0; t < e; t += 1)(this.completeLayers || this.elements[t]) && this.elements[t].renderFrame()
        }, ICompElement.prototype.setElements = function(t) {
            this.elements = t
        }, ICompElement.prototype.getElements = function() {
            return this.elements
        }, ICompElement.prototype.destroyElements = function() {
            var t, e = this.layers.length;
            for (t = 0; t < e; t += 1) this.elements[t] && this.elements[t].destroy()
        }, ICompElement.prototype.destroy = function() {
            this.destroyElements(), this.destroyBaseElement()
        }, extendPrototype([BaseElement, TransformElement, SVGBaseElement, HierarchyElement, FrameElement, RenderableDOMElement], IImageElement), IImageElement.prototype.createContent = function() {
            var t = this.globalData.getAssetsPath(this.assetData);
            this.innerElem = createNS("image"), this.innerElem.setAttribute("width", this.assetData.w + "px"), this.innerElem.setAttribute("height", this.assetData.h + "px"), this.innerElem.setAttribute("preserveAspectRatio", this.assetData.pr || this.globalData.renderConfig.imagePreserveAspectRatio), this.innerElem.setAttributeNS("http://www.w3.org/1999/xlink", "href", t), this.layerElement.appendChild(this.innerElem)
        }, IImageElement.prototype.sourceRectAtTime = function() {
            return this.sourceRect
        }, extendPrototype([IImageElement], ISolidElement), ISolidElement.prototype.createContent = function() {
            var t = createNS("rect");
            t.setAttribute("width", this.data.sw), t.setAttribute("height", this.data.sh), t.setAttribute("fill", this.data.sc), this.layerElement.appendChild(t)
        }, AudioElement.prototype.prepareFrame = function(t) {
            if (this.prepareRenderableFrame(t, !0), this.prepareProperties(t, !0), this.tm._placeholder) this._currentTime = t / this.data.sr;
            else {
                var e = this.tm.v;
                this._currentTime = e
            }
        }, extendPrototype([RenderableElement, BaseElement, FrameElement], AudioElement), AudioElement.prototype.renderFrame = function() {
            this.isInRange && this._canPlay && (this._isPlaying ? (!this.audio.playing() || Math.abs(this._currentTime / this.globalData.frameRate - this.audio.seek()) > .1) && this.audio.seek(this._currentTime / this.globalData.frameRate) : (this.audio.play(), this.audio.seek(this._currentTime / this.globalData.frameRate), this._isPlaying = !0))
        }, AudioElement.prototype.show = function() {}, AudioElement.prototype.hide = function() {
            this.audio.pause(), this._isPlaying = !1
        }, AudioElement.prototype.pause = function() {
            this.audio.pause(), this._isPlaying = !1, this._canPlay = !1
        }, AudioElement.prototype.resume = function() {
            this._canPlay = !0
        }, AudioElement.prototype.setRate = function(t) {
            this.audio.rate(t)
        }, AudioElement.prototype.volume = function(t) {
            this.audio.volume(t)
        }, AudioElement.prototype.getBaseElement = function() {
            return null
        }, AudioElement.prototype.destroy = function() {}, AudioElement.prototype.sourceRectAtTime = function() {}, AudioElement.prototype.initExpressions = function() {}, FootageElement.prototype.prepareFrame = function() {}, extendPrototype([RenderableElement, BaseElement, FrameElement], FootageElement), FootageElement.prototype.getBaseElement = function() {
            return null
        }, FootageElement.prototype.renderFrame = function() {}, FootageElement.prototype.destroy = function() {}, FootageElement.prototype.initExpressions = function() {
            this.layerInterface = FootageInterface(this)
        }, FootageElement.prototype.getFootageData = function() {
            return this.footageData
        }, extendPrototype([SVGRenderer, ICompElement, SVGBaseElement], SVGCompElement), extendPrototype([BaseElement, TransformElement, SVGBaseElement, HierarchyElement, FrameElement, RenderableDOMElement, ITextElement], SVGTextLottieElement), SVGTextLottieElement.prototype.createContent = function() {
            this.data.singleShape && !this.globalData.fontManager.chars && (this.textContainer = createNS("text"))
        }, SVGTextLottieElement.prototype.buildTextContents = function(t) {
            for (var e = 0, i = t.length, n = [], r = ""; e < i;) t[e] === String.fromCharCode(13) || t[e] === String.fromCharCode(3) ? (n.push(r), r = "") : r += t[e], e += 1;
            return n.push(r), n
        }, SVGTextLottieElement.prototype.buildNewText = function() {
            var t, e, i = this.textProperty.currentData;
            this.renderedLetters = createSizedArray(i ? i.l.length : 0), i.fc ? this.layerElement.setAttribute("fill", this.buildColor(i.fc)) : this.layerElement.setAttribute("fill", "rgba(0,0,0,0)"), i.sc && (this.layerElement.setAttribute("stroke", this.buildColor(i.sc)), this.layerElement.setAttribute("stroke-width", i.sw)), this.layerElement.setAttribute("font-size", i.finalSize);
            var n = this.globalData.fontManager.getFontByName(i.f);
            if (n.fClass) this.layerElement.setAttribute("class", n.fClass);
            else {
                this.layerElement.setAttribute("font-family", n.fFamily);
                var r = i.fWeight,
                    s = i.fStyle;
                this.layerElement.setAttribute("font-style", s), this.layerElement.setAttribute("font-weight", r)
            }
            this.layerElement.setAttribute("aria-label", i.t);
            var a, o = i.l || [],
                l = !!this.globalData.fontManager.chars;
            e = o.length;
            var h, c = this.mHelper,
                p = "",
                f = this.data.singleShape,
                d = 0,
                u = 0,
                m = !0,
                g = .001 * i.tr * i.finalSize;
            if (!f || l || i.sz) {
                var y, v, b = this.textSpans.length;
                for (t = 0; t < e; t += 1) l && f && 0 !== t || (a = b > t ? this.textSpans[t] : createNS(l ? "path" : "text"), b <= t && (a.setAttribute("stroke-linecap", "butt"), a.setAttribute("stroke-linejoin", "round"), a.setAttribute("stroke-miterlimit", "4"), this.textSpans[t] = a, this.layerElement.appendChild(a)), a.style.display = "inherit"), c.reset(), c.scale(i.finalSize / 100, i.finalSize / 100), f && (o[t].n && (d = -g, u += i.yOffset, u += m ? 1 : 0, m = !1), this.applyTextPropertiesToMatrix(i, c, o[t].line, d, u), d += o[t].l || 0, d += g), l ? (h = (y = (v = this.globalData.fontManager.getCharData(i.finalText[t], n.fStyle, this.globalData.fontManager.getFontByName(i.f).fFamily)) && v.data || {}).shapes ? y.shapes[0].it : [], f ? p += this.createPathShape(c, h) : a.setAttribute("d", this.createPathShape(c, h))) : (f && a.setAttribute("transform", "translate(" + c.props[12] + "," + c.props[13] + ")"), a.textContent = o[t].val, a.setAttributeNS("http://www.w3.org/XML/1998/namespace", "xml:space", "preserve"));
                f && a && a.setAttribute("d", p)
            } else {
                var x = this.textContainer,
                    w = "start";
                switch (i.j) {
                    case 1:
                        w = "end";
                        break;
                    case 2:
                        w = "middle";
                        break;
                    default:
                        w = "start"
                }
                x.setAttribute("text-anchor", w), x.setAttribute("letter-spacing", g);
                var S = this.buildTextContents(i.finalText);
                for (e = S.length, u = i.ps ? i.ps[1] + i.ascent : 0, t = 0; t < e; t += 1)(a = this.textSpans[t] || createNS("tspan")).textContent = S[t], a.setAttribute("x", 0), a.setAttribute("y", u), a.style.display = "inherit", x.appendChild(a), this.textSpans[t] = a, u += i.finalLineHeight;
                this.layerElement.appendChild(x)
            }
            for (; t < this.textSpans.length;) this.textSpans[t].style.display = "none", t += 1;
            this._sizeChanged = !0
        }, SVGTextLottieElement.prototype.sourceRectAtTime = function() {
            if (this.prepareFrame(this.comp.renderedFrame - this.data.st), this.renderInnerContent(), this._sizeChanged) {
                this._sizeChanged = !1;
                var t = this.layerElement.getBBox();
                this.bbox = {
                    top: t.y,
                    left: t.x,
                    width: t.width,
                    height: t.height
                }
            }
            return this.bbox
        }, SVGTextLottieElement.prototype.renderInnerContent = function() {
            if (!this.data.singleShape && (this.textAnimator.getMeasures(this.textProperty.currentData, this.lettersChangedFlag), this.lettersChangedFlag || this.textAnimator.lettersChangedFlag)) {
                var t, e;
                this._sizeChanged = !0;
                var i, n, r = this.textAnimator.renderedLetters,
                    s = this.textProperty.currentData.l;
                for (e = s.length, t = 0; t < e; t += 1) s[t].n || (i = r[t], n = this.textSpans[t], i._mdf.m && n.setAttribute("transform", i.m), i._mdf.o && n.setAttribute("opacity", i.o), i._mdf.sw && n.setAttribute("stroke-width", i.sw), i._mdf.sc && n.setAttribute("stroke", i.sc), i._mdf.fc && n.setAttribute("fill", i.fc))
            }
        }, extendPrototype([BaseElement, TransformElement, SVGBaseElement, IShapeElement, HierarchyElement, FrameElement, RenderableDOMElement], SVGShapeElement), SVGShapeElement.prototype.initSecondaryElement = function() {}, SVGShapeElement.prototype.identityMatrix = new Matrix, SVGShapeElement.prototype.buildExpressionInterface = function() {}, SVGShapeElement.prototype.createContent = function() {
            this.searchShapes(this.shapesData, this.itemsData, this.prevViewData, this.layerElement, 0, [], !0), this.filterUniqueShapes()
        }, SVGShapeElement.prototype.filterUniqueShapes = function() {
            var t, e, i, n, r = this.shapes.length,
                s = this.stylesList.length,
                a = [],
                o = !1;
            for (i = 0; i < s; i += 1) {
                for (n = this.stylesList[i], o = !1, a.length = 0, t = 0; t < r; t += 1) - 1 !== (e = this.shapes[t]).styles.indexOf(n) && (a.push(e), o = e._isAnimated || o);
                a.length > 1 && o && this.setShapesAsAnimated(a)
            }
        }, SVGShapeElement.prototype.setShapesAsAnimated = function(t) {
            var e, i = t.length;
            for (e = 0; e < i; e += 1) t[e].setAsAnimated()
        }, SVGShapeElement.prototype.createStyleElement = function(t, e) {
            var i, n = new SVGStyleData(t, e),
                r = n.pElem;
            if ("st" === t.ty) i = new SVGStrokeStyleData(this, t, n);
            else if ("fl" === t.ty) i = new SVGFillStyleData(this, t, n);
            else if ("gf" === t.ty || "gs" === t.ty) {
                i = new("gf" === t.ty ? SVGGradientFillStyleData : SVGGradientStrokeStyleData)(this, t, n), this.globalData.defs.appendChild(i.gf), i.maskId && (this.globalData.defs.appendChild(i.ms), this.globalData.defs.appendChild(i.of), r.setAttribute("mask", "url(" + locationHref + "#" + i.maskId + ")"))
            }
            return "st" !== t.ty && "gs" !== t.ty || (r.setAttribute("stroke-linecap", this.lcEnum[t.lc] || "round"), r.setAttribute("stroke-linejoin", this.ljEnum[t.lj] || "round"), r.setAttribute("fill-opacity", "0"), 1 === t.lj && r.setAttribute("stroke-miterlimit", t.ml)), 2 === t.r && r.setAttribute("fill-rule", "evenodd"), t.ln && r.setAttribute("id", t.ln), t.cl && r.setAttribute("class", t.cl), t.bm && (r.style["mix-blend-mode"] = getBlendMode(t.bm)), this.stylesList.push(n), this.addToAnimatedContents(t, i), i
        }, SVGShapeElement.prototype.createGroupElement = function(t) {
            var e = new ShapeGroupData;
            return t.ln && e.gr.setAttribute("id", t.ln), t.cl && e.gr.setAttribute("class", t.cl), t.bm && (e.gr.style["mix-blend-mode"] = getBlendMode(t.bm)), e
        }, SVGShapeElement.prototype.createTransformElement = function(t, e) {
            var i = TransformPropertyFactory.getTransformProperty(this, t, this),
                n = new SVGTransformData(i, i.o, e);
            return this.addToAnimatedContents(t, n), n
        }, SVGShapeElement.prototype.createShapeElement = function(t, e, i) {
            var n = 4;
            "rc" === t.ty ? n = 5 : "el" === t.ty ? n = 6 : "sr" === t.ty && (n = 7);
            var r = new SVGShapeData(e, i, ShapePropertyFactory.getShapeProp(this, t, n, this));
            return this.shapes.push(r), this.addShapeToModifiers(r), this.addToAnimatedContents(t, r), r
        }, SVGShapeElement.prototype.addToAnimatedContents = function(t, e) {
            for (var i = 0, n = this.animatedContents.length; i < n;) {
                if (this.animatedContents[i].element === e) return;
                i += 1
            }
            this.animatedContents.push({
                fn: SVGElementsRenderer.createRenderFunction(t),
                element: e,
                data: t
            })
        }, SVGShapeElement.prototype.setElementStyles = function(t) {
            var e, i = t.styles,
                n = this.stylesList.length;
            for (e = 0; e < n; e += 1) this.stylesList[e].closed || i.push(this.stylesList[e])
        }, SVGShapeElement.prototype.reloadShapes = function() {
            var t;
            this._isFirstFrame = !0;
            var e = this.itemsData.length;
            for (t = 0; t < e; t += 1) this.prevViewData[t] = this.itemsData[t];
            for (this.searchShapes(this.shapesData, this.itemsData, this.prevViewData, this.layerElement, 0, [], !0), this.filterUniqueShapes(), e = this.dynamicProperties.length, t = 0; t < e; t += 1) this.dynamicProperties[t].getValue();
            this.renderModifiers()
        }, SVGShapeElement.prototype.searchShapes = function(t, e, i, n, r, s, a) {
            var o, l, h, c, p, f, d = [].concat(s),
                u = t.length - 1,
                m = [],
                g = [];
            for (o = u; o >= 0; o -= 1) {
                if ((f = this.searchProcessedElement(t[o])) ? e[o] = i[f - 1] : t[o]._render = a, "fl" === t[o].ty || "st" === t[o].ty || "gf" === t[o].ty || "gs" === t[o].ty) f ? e[o].style.closed = !1 : e[o] = this.createStyleElement(t[o], r), t[o]._render && n.appendChild(e[o].style.pElem), m.push(e[o].style);
                else if ("gr" === t[o].ty) {
                    if (f)
                        for (h = e[o].it.length, l = 0; l < h; l += 1) e[o].prevViewData[l] = e[o].it[l];
                    else e[o] = this.createGroupElement(t[o]);
                    this.searchShapes(t[o].it, e[o].it, e[o].prevViewData, e[o].gr, r + 1, d, a), t[o]._render && n.appendChild(e[o].gr)
                } else "tr" === t[o].ty ? (f || (e[o] = this.createTransformElement(t[o], n)), c = e[o].transform, d.push(c)) : "sh" === t[o].ty || "rc" === t[o].ty || "el" === t[o].ty || "sr" === t[o].ty ? (f || (e[o] = this.createShapeElement(t[o], d, r)), this.setElementStyles(e[o])) : "tm" === t[o].ty || "rd" === t[o].ty || "ms" === t[o].ty || "pb" === t[o].ty ? (f ? (p = e[o]).closed = !1 : ((p = ShapeModifiers.getModifier(t[o].ty)).init(this, t[o]), e[o] = p, this.shapeModifiers.push(p)), g.push(p)) : "rp" === t[o].ty && (f ? (p = e[o]).closed = !0 : (p = ShapeModifiers.getModifier(t[o].ty), e[o] = p, p.init(this, t, o, e), this.shapeModifiers.push(p), a = !1), g.push(p));
                this.addProcessedElement(t[o], o + 1)
            }
            for (u = m.length, o = 0; o < u; o += 1) m[o].closed = !0;
            for (u = g.length, o = 0; o < u; o += 1) g[o].closed = !0
        }, SVGShapeElement.prototype.renderInnerContent = function() {
            var t;
            this.renderModifiers();
            var e = this.stylesList.length;
            for (t = 0; t < e; t += 1) this.stylesList[t].reset();
            for (this.renderShape(), t = 0; t < e; t += 1)(this.stylesList[t]._mdf || this._isFirstFrame) && (this.stylesList[t].msElem && (this.stylesList[t].msElem.setAttribute("d", this.stylesList[t].d), this.stylesList[t].d = "M0 0" + this.stylesList[t].d), this.stylesList[t].pElem.setAttribute("d", this.stylesList[t].d || "M0 0"))
        }, SVGShapeElement.prototype.renderShape = function() {
            var t, e, i = this.animatedContents.length;
            for (t = 0; t < i; t += 1) e = this.animatedContents[t], (this._isFirstFrame || e.element._isAnimated) && !0 !== e.data && e.fn(e.data, e.element, this._isFirstFrame)
        }, SVGShapeElement.prototype.destroy = function() {
            this.destroyBaseElement(), this.shapesData = null, this.itemsData = null
        }, SVGTintFilter.prototype.renderFrame = function(t) {
            if (t || this.filterManager._mdf) {
                var e = this.filterManager.effectElements[0].p.v,
                    i = this.filterManager.effectElements[1].p.v,
                    n = this.filterManager.effectElements[2].p.v / 100;
                this.matrixFilter.setAttribute("values", i[0] - e[0] + " 0 0 0 " + e[0] + " " + (i[1] - e[1]) + " 0 0 0 " + e[1] + " " + (i[2] - e[2]) + " 0 0 0 " + e[2] + " 0 0 0 " + n + " 0")
            }
        }, SVGFillFilter.prototype.renderFrame = function(t) {
            if (t || this.filterManager._mdf) {
                var e = this.filterManager.effectElements[2].p.v,
                    i = this.filterManager.effectElements[6].p.v;
                this.matrixFilter.setAttribute("values", "0 0 0 0 " + e[0] + " 0 0 0 0 " + e[1] + " 0 0 0 0 " + e[2] + " 0 0 0 " + i + " 0")
            }
        }, SVGGaussianBlurEffect.prototype.renderFrame = function(t) {
            if (t || this.filterManager._mdf) {
                var e = .3 * this.filterManager.effectElements[0].p.v,
                    i = this.filterManager.effectElements[1].p.v,
                    n = 3 == i ? 0 : e,
                    r = 2 == i ? 0 : e;
                this.feGaussianBlur.setAttribute("stdDeviation", n + " " + r);
                var s = 1 == this.filterManager.effectElements[2].p.v ? "wrap" : "duplicate";
                this.feGaussianBlur.setAttribute("edgeMode", s)
            }
        }, SVGStrokeEffect.prototype.initialize = function() {
            var t, e, i, n, r = this.elem.layerElement.children || this.elem.layerElement.childNodes;
            for (1 === this.filterManager.effectElements[1].p.v ? (n = this.elem.maskManager.masksProperties.length, i = 0) : n = (i = this.filterManager.effectElements[0].p.v - 1) + 1, (e = createNS("g")).setAttribute("fill", "none"), e.setAttribute("stroke-linecap", "round"), e.setAttribute("stroke-dashoffset", 1); i < n; i += 1) t = createNS("path"), e.appendChild(t), this.paths.push({
                p: t,
                m: i
            });
            if (3 === this.filterManager.effectElements[10].p.v) {
                var s = createNS("mask"),
                    a = createElementID();
                s.setAttribute("id", a), s.setAttribute("mask-type", "alpha"), s.appendChild(e), this.elem.globalData.defs.appendChild(s);
                var o = createNS("g");
                for (o.setAttribute("mask", "url(" + locationHref + "#" + a + ")"); r[0];) o.appendChild(r[0]);
                this.elem.layerElement.appendChild(o), this.masker = s, e.setAttribute("stroke", "#fff")
            } else if (1 === this.filterManager.effectElements[10].p.v || 2 === this.filterManager.effectElements[10].p.v) {
                if (2 === this.filterManager.effectElements[10].p.v)
                    for (r = this.elem.layerElement.children || this.elem.layerElement.childNodes; r.length;) this.elem.layerElement.removeChild(r[0]);
                this.elem.layerElement.appendChild(e), this.elem.layerElement.removeAttribute("mask"), e.setAttribute("stroke", "#fff")
            }
            this.initialized = !0, this.pathMasker = e
        }, SVGStrokeEffect.prototype.renderFrame = function(t) {
            var e;
            this.initialized || this.initialize();
            var i, n, r = this.paths.length;
            for (e = 0; e < r; e += 1)
                if (-1 !== this.paths[e].m && (i = this.elem.maskManager.viewData[this.paths[e].m], n = this.paths[e].p, (t || this.filterManager._mdf || i.prop._mdf) && n.setAttribute("d", i.lastPath), t || this.filterManager.effectElements[9].p._mdf || this.filterManager.effectElements[4].p._mdf || this.filterManager.effectElements[7].p._mdf || this.filterManager.effectElements[8].p._mdf || i.prop._mdf)) {
                    var s;
                    if (0 !== this.filterManager.effectElements[7].p.v || 100 !== this.filterManager.effectElements[8].p.v) {
                        var a = .01 * Math.min(this.filterManager.effectElements[7].p.v, this.filterManager.effectElements[8].p.v),
                            o = .01 * Math.max(this.filterManager.effectElements[7].p.v, this.filterManager.effectElements[8].p.v),
                            l = n.getTotalLength();
                        s = "0 0 0 " + l * a + " ";
                        var h, c = l * (o - a),
                            p = 1 + 2 * this.filterManager.effectElements[4].p.v * this.filterManager.effectElements[9].p.v * .01,
                            f = Math.floor(c / p);
                        for (h = 0; h < f; h += 1) s += "1 " + 2 * this.filterManager.effectElements[4].p.v * this.filterManager.effectElements[9].p.v * .01 + " ";
                        s += "0 " + 10 * l + " 0 0"
                    } else s = "1 " + 2 * this.filterManager.effectElements[4].p.v * this.filterManager.effectElements[9].p.v * .01;
                    n.setAttribute("stroke-dasharray", s)
                }
            if ((t || this.filterManager.effectElements[4].p._mdf) && this.pathMasker.setAttribute("stroke-width", 2 * this.filterManager.effectElements[4].p.v), (t || this.filterManager.effectElements[6].p._mdf) && this.pathMasker.setAttribute("opacity", this.filterManager.effectElements[6].p.v), (1 === this.filterManager.effectElements[10].p.v || 2 === this.filterManager.effectElements[10].p.v) && (t || this.filterManager.effectElements[3].p._mdf)) {
                var d = this.filterManager.effectElements[3].p.v;
                this.pathMasker.setAttribute("stroke", "rgb(" + bmFloor(255 * d[0]) + "," + bmFloor(255 * d[1]) + "," + bmFloor(255 * d[2]) + ")")
            }
        }, SVGTritoneFilter.prototype.renderFrame = function(t) {
            if (t || this.filterManager._mdf) {
                var e = this.filterManager.effectElements[0].p.v,
                    i = this.filterManager.effectElements[1].p.v,
                    n = this.filterManager.effectElements[2].p.v,
                    r = n[0] + " " + i[0] + " " + e[0],
                    s = n[1] + " " + i[1] + " " + e[1],
                    a = n[2] + " " + i[2] + " " + e[2];
                this.feFuncR.setAttribute("tableValues", r), this.feFuncG.setAttribute("tableValues", s), this.feFuncB.setAttribute("tableValues", a)
            }
        }, SVGProLevelsFilter.prototype.createFeFunc = function(t, e) {
            var i = createNS(t);
            return i.setAttribute("type", "table"), e.appendChild(i), i
        }, SVGProLevelsFilter.prototype.getTableValue = function(t, e, i, n, r) {
            for (var s, a, o = 0, l = Math.min(t, e), h = Math.max(t, e), c = Array.call(null, {
                    length: 256
                }), p = 0, f = r - n, d = e - t; o <= 256;) a = (s = o / 256) <= l ? d < 0 ? r : n : s >= h ? d < 0 ? n : r : n + f * Math.pow((s - t) / d, 1 / i), c[p] = a, p += 1, o += 256 / 255;
            return c.join(" ")
        }, SVGProLevelsFilter.prototype.renderFrame = function(t) {
            if (t || this.filterManager._mdf) {
                var e, i = this.filterManager.effectElements;
                this.feFuncRComposed && (t || i[3].p._mdf || i[4].p._mdf || i[5].p._mdf || i[6].p._mdf || i[7].p._mdf) && (e = this.getTableValue(i[3].p.v, i[4].p.v, i[5].p.v, i[6].p.v, i[7].p.v), this.feFuncRComposed.setAttribute("tableValues", e), this.feFuncGComposed.setAttribute("tableValues", e), this.feFuncBComposed.setAttribute("tableValues", e)), this.feFuncR && (t || i[10].p._mdf || i[11].p._mdf || i[12].p._mdf || i[13].p._mdf || i[14].p._mdf) && (e = this.getTableValue(i[10].p.v, i[11].p.v, i[12].p.v, i[13].p.v, i[14].p.v), this.feFuncR.setAttribute("tableValues", e)), this.feFuncG && (t || i[17].p._mdf || i[18].p._mdf || i[19].p._mdf || i[20].p._mdf || i[21].p._mdf) && (e = this.getTableValue(i[17].p.v, i[18].p.v, i[19].p.v, i[20].p.v, i[21].p.v), this.feFuncG.setAttribute("tableValues", e)), this.feFuncB && (t || i[24].p._mdf || i[25].p._mdf || i[26].p._mdf || i[27].p._mdf || i[28].p._mdf) && (e = this.getTableValue(i[24].p.v, i[25].p.v, i[26].p.v, i[27].p.v, i[28].p.v), this.feFuncB.setAttribute("tableValues", e)), this.feFuncA && (t || i[31].p._mdf || i[32].p._mdf || i[33].p._mdf || i[34].p._mdf || i[35].p._mdf) && (e = this.getTableValue(i[31].p.v, i[32].p.v, i[33].p.v, i[34].p.v, i[35].p.v), this.feFuncA.setAttribute("tableValues", e))
            }
        }, SVGDropShadowEffect.prototype.renderFrame = function(t) {
            if (t || this.filterManager._mdf) {
                if ((t || this.filterManager.effectElements[4].p._mdf) && this.feGaussianBlur.setAttribute("stdDeviation", this.filterManager.effectElements[4].p.v / 4), t || this.filterManager.effectElements[0].p._mdf) {
                    var e = this.filterManager.effectElements[0].p.v;
                    this.feFlood.setAttribute("flood-color", rgbToHex(Math.round(255 * e[0]), Math.round(255 * e[1]), Math.round(255 * e[2])))
                }
                if ((t || this.filterManager.effectElements[1].p._mdf) && this.feFlood.setAttribute("flood-opacity", this.filterManager.effectElements[1].p.v / 255), t || this.filterManager.effectElements[2].p._mdf || this.filterManager.effectElements[3].p._mdf) {
                    var i = this.filterManager.effectElements[3].p.v,
                        n = (this.filterManager.effectElements[2].p.v - 90) * degToRads,
                        r = i * Math.cos(n),
                        s = i * Math.sin(n);
                    this.feOffset.setAttribute("dx", r), this.feOffset.setAttribute("dy", s)
                }
            }
        };
        var _svgMatteSymbols = [];

        function SVGMatte3Effect(t, e, i) {
            this.initialized = !1, this.filterManager = e, this.filterElem = t, this.elem = i, i.matteElement = createNS("g"), i.matteElement.appendChild(i.layerElement), i.matteElement.appendChild(i.transformedElement), i.baseElement = i.matteElement
        }

        function SVGEffects(t) {
            var e, i, n = t.data.ef ? t.data.ef.length : 0,
                r = createElementID(),
                s = filtersFactory.createFilter(r, !0),
                a = 0;
            for (this.filters = [], e = 0; e < n; e += 1) i = null, 20 === t.data.ef[e].ty ? (a += 1, i = new SVGTintFilter(s, t.effectsManager.effectElements[e])) : 21 === t.data.ef[e].ty ? (a += 1, i = new SVGFillFilter(s, t.effectsManager.effectElements[e])) : 22 === t.data.ef[e].ty ? i = new SVGStrokeEffect(t, t.effectsManager.effectElements[e]) : 23 === t.data.ef[e].ty ? (a += 1, i = new SVGTritoneFilter(s, t.effectsManager.effectElements[e])) : 24 === t.data.ef[e].ty ? (a += 1, i = new SVGProLevelsFilter(s, t.effectsManager.effectElements[e])) : 25 === t.data.ef[e].ty ? (a += 1, i = new SVGDropShadowEffect(s, t.effectsManager.effectElements[e])) : 28 === t.data.ef[e].ty ? i = new SVGMatte3Effect(s, t.effectsManager.effectElements[e], t) : 29 === t.data.ef[e].ty && (a += 1, i = new SVGGaussianBlurEffect(s, t.effectsManager.effectElements[e])), i && this.filters.push(i);
            a && (t.globalData.defs.appendChild(s), t.layerElement.setAttribute("filter", "url(" + locationHref + "#" + r + ")")), this.filters.length && t.addRenderableComponent(this)
        }

        function CVContextData() {
            var t;
            this.saved = [], this.cArrPos = 0, this.cTr = new Matrix, this.cO = 1;
            for (this.savedOp = createTypedArray("float32", 15), t = 0; t < 15; t += 1) this.saved[t] = createTypedArray("float32", 16);
            this._length = 15
        }

        function CVBaseElement() {}

        function CVImageElement(t, e, i) {
            this.assetData = e.getAssetData(t.refId), this.img = e.imageLoader.getAsset(this.assetData), this.initElement(t, e, i)
        }

        function CVCompElement(t, e, i) {
            this.completeLayers = !1, this.layers = t.layers, this.pendingElements = [], this.elements = createSizedArray(this.layers.length), this.initElement(t, e, i), this.tm = t.tm ? PropertyFactory.getProp(this, t.tm, 0, e.frameRate, this) : {
                _placeholder: !0
            }
        }

        function CVMaskElement(t, e) {
            var i;
            this.data = t, this.element = e, this.masksProperties = this.data.masksProperties || [], this.viewData = createSizedArray(this.masksProperties.length);
            var n = this.masksProperties.length,
                r = !1;
            for (i = 0; i < n; i += 1) "n" !== this.masksProperties[i].mode && (r = !0), this.viewData[i] = ShapePropertyFactory.getShapeProp(this.element, this.masksProperties[i], 3);
            this.hasMasks = r, r && this.element.addRenderableComponent(this)
        }

        function CVShapeElement(t, e, i) {
            this.shapes = [], this.shapesData = t.shapes, this.stylesList = [], this.itemsData = [], this.prevViewData = [], this.shapeModifiers = [], this.processedElements = [], this.transformsManager = new ShapeTransformManager, this.initElement(t, e, i)
        }

        function CVSolidElement(t, e, i) {
            this.initElement(t, e, i)
        }

        function CVTextElement(t, e, i) {
            this.textSpans = [], this.yOffset = 0, this.fillColorAnim = !1, this.strokeColorAnim = !1, this.strokeWidthAnim = !1, this.stroke = !1, this.fill = !1, this.justifyOffset = 0, this.currentRender = null, this.renderType = "canvas", this.values = {
                fill: "rgba(0,0,0,0)",
                stroke: "rgba(0,0,0,0)",
                sWidth: 0,
                fValue: ""
            }, this.initElement(t, e, i)
        }

        function CVEffects() {}

        function HBaseElement() {}

        function HSolidElement(t, e, i) {
            this.initElement(t, e, i)
        }

        function HCompElement(t, e, i) {
            this.layers = t.layers, this.supports3d = !t.hasMask, this.completeLayers = !1, this.pendingElements = [], this.elements = this.layers ? createSizedArray(this.layers.length) : [], this.initElement(t, e, i), this.tm = t.tm ? PropertyFactory.getProp(this, t.tm, 0, e.frameRate, this) : {
                _placeholder: !0
            }
        }

        function HShapeElement(t, e, i) {
            this.shapes = [], this.shapesData = t.shapes, this.stylesList = [], this.shapeModifiers = [], this.itemsData = [], this.processedElements = [], this.animatedContents = [], this.shapesContainer = createNS("g"), this.initElement(t, e, i), this.prevViewData = [], this.currentBBox = {
                x: 999999,
                y: -999999,
                h: 0,
                w: 0
            }
        }

        function HTextElement(t, e, i) {
            this.textSpans = [], this.textPaths = [], this.currentBBox = {
                x: 999999,
                y: -999999,
                h: 0,
                w: 0
            }, this.renderType = "svg", this.isMasked = !1, this.initElement(t, e, i)
        }

        function HImageElement(t, e, i) {
            this.assetData = e.getAssetData(t.refId), this.initElement(t, e, i)
        }

        function HCameraElement(t, e, i) {
            this.initFrame(), this.initBaseData(t, e, i), this.initHierarchy();
            var n = PropertyFactory.getProp;
            if (this.pe = n(this, t.pe, 0, 0, this), t.ks.p.s ? (this.px = n(this, t.ks.p.x, 1, 0, this), this.py = n(this, t.ks.p.y, 1, 0, this), this.pz = n(this, t.ks.p.z, 1, 0, this)) : this.p = n(this, t.ks.p, 1, 0, this), t.ks.a && (this.a = n(this, t.ks.a, 1, 0, this)), t.ks.or.k.length && t.ks.or.k[0].to) {
                var r, s = t.ks.or.k.length;
                for (r = 0; r < s; r += 1) t.ks.or.k[r].to = null, t.ks.or.k[r].ti = null
            }
            this.or = n(this, t.ks.or, 1, degToRads, this), this.or.sh = !0, this.rx = n(this, t.ks.rx, 0, degToRads, this), this.ry = n(this, t.ks.ry, 0, degToRads, this), this.rz = n(this, t.ks.rz, 0, degToRads, this), this.mat = new Matrix, this._prevMat = new Matrix, this._isFirstFrame = !0, this.finalTransform = {
                mProp: this
            }
        }

        function HEffects() {}
        SVGMatte3Effect.prototype.findSymbol = function(t) {
            for (var e = 0, i = _svgMatteSymbols.length; e < i;) {
                if (_svgMatteSymbols[e] === t) return _svgMatteSymbols[e];
                e += 1
            }
            return null
        }, SVGMatte3Effect.prototype.replaceInParent = function(t, e) {
            var i = t.layerElement.parentNode;
            if (i) {
                for (var n, r = i.children, s = 0, a = r.length; s < a && r[s] !== t.layerElement;) s += 1;
                s <= a - 2 && (n = r[s + 1]);
                var o = createNS("use");
                o.setAttribute("href", "#" + e), n ? i.insertBefore(o, n) : i.appendChild(o)
            }
        }, SVGMatte3Effect.prototype.setElementAsMask = function(t, e) {
            if (!this.findSymbol(e)) {
                var i = createElementID(),
                    n = createNS("mask");
                n.setAttribute("id", e.layerId), n.setAttribute("mask-type", "alpha"), _svgMatteSymbols.push(e);
                var r = t.globalData.defs;
                r.appendChild(n);
                var s = createNS("symbol");
                s.setAttribute("id", i), this.replaceInParent(e, i), s.appendChild(e.layerElement), r.appendChild(s);
                var a = createNS("use");
                a.setAttribute("href", "#" + i), n.appendChild(a), e.data.hd = !1, e.show()
            }
            t.setMatte(e.layerId)
        }, SVGMatte3Effect.prototype.initialize = function() {
            for (var t = this.filterManager.effectElements[0].p.v, e = this.elem.comp.elements, i = 0, n = e.length; i < n;) e[i] && e[i].data.ind === t && this.setElementAsMask(this.elem, e[i]), i += 1;
            this.initialized = !0
        }, SVGMatte3Effect.prototype.renderFrame = function() {
            this.initialized || this.initialize()
        }, SVGEffects.prototype.renderFrame = function(t) {
            var e, i = this.filters.length;
            for (e = 0; e < i; e += 1) this.filters[e].renderFrame(t)
        }, CVContextData.prototype.duplicate = function() {
            var t = 2 * this._length,
                e = this.savedOp;
            this.savedOp = createTypedArray("float32", t), this.savedOp.set(e);
            var i = 0;
            for (i = this._length; i < t; i += 1) this.saved[i] = createTypedArray("float32", 16);
            this._length = t
        }, CVContextData.prototype.reset = function() {
            this.cArrPos = 0, this.cTr.reset(), this.cO = 1
        }, CVBaseElement.prototype = {
            createElements: function() {},
            initRendererElement: function() {},
            createContainerElements: function() {
                this.canvasContext = this.globalData.canvasContext, this.renderableEffectsManager = new CVEffects(this)
            },
            createContent: function() {},
            setBlendMode: function() {
                var t = this.globalData;
                if (t.blendMode !== this.data.bm) {
                    t.blendMode = this.data.bm;
                    var e = getBlendMode(this.data.bm);
                    t.canvasContext.globalCompositeOperation = e
                }
            },
            createRenderableComponents: function() {
                this.maskManager = new CVMaskElement(this.data, this)
            },
            hideElement: function() {
                this.hidden || this.isInRange && !this.isTransparent || (this.hidden = !0)
            },
            showElement: function() {
                this.isInRange && !this.isTransparent && (this.hidden = !1, this._isFirstFrame = !0, this.maskManager._isFirstFrame = !0)
            },
            renderFrame: function() {
                if (!this.hidden && !this.data.hd) {
                    this.renderTransform(), this.renderRenderable(), this.setBlendMode();
                    var t = 0 === this.data.ty;
                    this.globalData.renderer.save(t), this.globalData.renderer.ctxTransform(this.finalTransform.mat.props), this.globalData.renderer.ctxOpacity(this.finalTransform.mProp.o.v), this.renderInnerContent(), this.globalData.renderer.restore(t), this.maskManager.hasMasks && this.globalData.renderer.restore(!0), this._isFirstFrame && (this._isFirstFrame = !1)
                }
            },
            destroy: function() {
                this.canvasContext = null, this.data = null, this.globalData = null, this.maskManager.destroy()
            },
            mHelper: new Matrix
        }, CVBaseElement.prototype.hide = CVBaseElement.prototype.hideElement, CVBaseElement.prototype.show = CVBaseElement.prototype.showElement, extendPrototype([BaseElement, TransformElement, CVBaseElement, HierarchyElement, FrameElement, RenderableElement], CVImageElement), CVImageElement.prototype.initElement = SVGShapeElement.prototype.initElement, CVImageElement.prototype.prepareFrame = IImageElement.prototype.prepareFrame, CVImageElement.prototype.createContent = function() {
            if (this.img.width && (this.assetData.w !== this.img.width || this.assetData.h !== this.img.height)) {
                var t = createTag("canvas");
                t.width = this.assetData.w, t.height = this.assetData.h;
                var e, i, n = t.getContext("2d"),
                    r = this.img.width,
                    s = this.img.height,
                    a = r / s,
                    o = this.assetData.w / this.assetData.h,
                    l = this.assetData.pr || this.globalData.renderConfig.imagePreserveAspectRatio;
                a > o && "xMidYMid slice" === l || a < o && "xMidYMid slice" !== l ? e = (i = s) * o : i = (e = r) / o, n.drawImage(this.img, (r - e) / 2, (s - i) / 2, e, i, 0, 0, this.assetData.w, this.assetData.h), this.img = t
            }
        }, CVImageElement.prototype.renderInnerContent = function() {
            this.canvasContext.drawImage(this.img, 0, 0)
        }, CVImageElement.prototype.destroy = function() {
            this.img = null
        }, extendPrototype([CanvasRenderer, ICompElement, CVBaseElement], CVCompElement), CVCompElement.prototype.renderInnerContent = function() {
            var t, e = this.canvasContext;
            for (e.beginPath(), e.moveTo(0, 0), e.lineTo(this.data.w, 0), e.lineTo(this.data.w, this.data.h), e.lineTo(0, this.data.h), e.lineTo(0, 0), e.clip(), t = this.layers.length - 1; t >= 0; t -= 1)(this.completeLayers || this.elements[t]) && this.elements[t].renderFrame()
        }, CVCompElement.prototype.destroy = function() {
            var t;
            for (t = this.layers.length - 1; t >= 0; t -= 1) this.elements[t] && this.elements[t].destroy();
            this.layers = null, this.elements = null
        }, CVMaskElement.prototype.renderFrame = function() {
            if (this.hasMasks) {
                var t, e, i, n, r = this.element.finalTransform.mat,
                    s = this.element.canvasContext,
                    a = this.masksProperties.length;
                for (s.beginPath(), t = 0; t < a; t += 1)
                    if ("n" !== this.masksProperties[t].mode) {
                        var o;
                        this.masksProperties[t].inv && (s.moveTo(0, 0), s.lineTo(this.element.globalData.compSize.w, 0), s.lineTo(this.element.globalData.compSize.w, this.element.globalData.compSize.h), s.lineTo(0, this.element.globalData.compSize.h), s.lineTo(0, 0)), n = this.viewData[t].v, e = r.applyToPointArray(n.v[0][0], n.v[0][1], 0), s.moveTo(e[0], e[1]);
                        var l = n._length;
                        for (o = 1; o < l; o += 1) i = r.applyToTriplePoints(n.o[o - 1], n.i[o], n.v[o]), s.bezierCurveTo(i[0], i[1], i[2], i[3], i[4], i[5]);
                        i = r.applyToTriplePoints(n.o[o - 1], n.i[0], n.v[0]), s.bezierCurveTo(i[0], i[1], i[2], i[3], i[4], i[5])
                    }
                this.element.globalData.renderer.save(!0), s.clip()
            }
        }, CVMaskElement.prototype.getMaskProperty = MaskElement.prototype.getMaskProperty, CVMaskElement.prototype.destroy = function() {
            this.element = null
        }, extendPrototype([BaseElement, TransformElement, CVBaseElement, IShapeElement, HierarchyElement, FrameElement, RenderableElement], CVShapeElement), CVShapeElement.prototype.initElement = RenderableDOMElement.prototype.initElement, CVShapeElement.prototype.transformHelper = {
            opacity: 1,
            _opMdf: !1
        }, CVShapeElement.prototype.dashResetter = [], CVShapeElement.prototype.createContent = function() {
            this.searchShapes(this.shapesData, this.itemsData, this.prevViewData, !0, [])
        }, CVShapeElement.prototype.createStyleElement = function(t, e) {
            var i = {
                    data: t,
                    type: t.ty,
                    preTransforms: this.transformsManager.addTransformSequence(e),
                    transforms: [],
                    elements: [],
                    closed: !0 === t.hd
                },
                n = {};
            if ("fl" === t.ty || "st" === t.ty ? (n.c = PropertyFactory.getProp(this, t.c, 1, 255, this), n.c.k || (i.co = "rgb(" + bmFloor(n.c.v[0]) + "," + bmFloor(n.c.v[1]) + "," + bmFloor(n.c.v[2]) + ")")) : "gf" !== t.ty && "gs" !== t.ty || (n.s = PropertyFactory.getProp(this, t.s, 1, null, this), n.e = PropertyFactory.getProp(this, t.e, 1, null, this), n.h = PropertyFactory.getProp(this, t.h || {
                    k: 0
                }, 0, .01, this), n.a = PropertyFactory.getProp(this, t.a || {
                    k: 0
                }, 0, degToRads, this), n.g = new GradientProperty(this, t.g, this)), n.o = PropertyFactory.getProp(this, t.o, 0, .01, this), "st" === t.ty || "gs" === t.ty) {
                if (i.lc = this.lcEnum[t.lc] || "round", i.lj = this.ljEnum[t.lj] || "round", 1 == t.lj && (i.ml = t.ml), n.w = PropertyFactory.getProp(this, t.w, 0, null, this), n.w.k || (i.wi = n.w.v), t.d) {
                    var r = new DashProperty(this, t.d, "canvas", this);
                    n.d = r, n.d.k || (i.da = n.d.dashArray, i.do = n.d.dashoffset[0])
                }
            } else i.r = 2 === t.r ? "evenodd" : "nonzero";
            return this.stylesList.push(i), n.style = i, n
        }, CVShapeElement.prototype.createGroupElement = function() {
            return {
                it: [],
                prevViewData: []
            }
        }, CVShapeElement.prototype.createTransformElement = function(t) {
            return {
                transform: {
                    opacity: 1,
                    _opMdf: !1,
                    key: this.transformsManager.getNewKey(),
                    op: PropertyFactory.getProp(this, t.o, 0, .01, this),
                    mProps: TransformPropertyFactory.getTransformProperty(this, t, this)
                }
            }
        }, CVShapeElement.prototype.createShapeElement = function(t) {
            var e = new CVShapeData(this, t, this.stylesList, this.transformsManager);
            return this.shapes.push(e), this.addShapeToModifiers(e), e
        }, CVShapeElement.prototype.reloadShapes = function() {
            var t;
            this._isFirstFrame = !0;
            var e = this.itemsData.length;
            for (t = 0; t < e; t += 1) this.prevViewData[t] = this.itemsData[t];
            for (this.searchShapes(this.shapesData, this.itemsData, this.prevViewData, !0, []), e = this.dynamicProperties.length, t = 0; t < e; t += 1) this.dynamicProperties[t].getValue();
            this.renderModifiers(), this.transformsManager.processSequences(this._isFirstFrame)
        }, CVShapeElement.prototype.addTransformToStyleList = function(t) {
            var e, i = this.stylesList.length;
            for (e = 0; e < i; e += 1) this.stylesList[e].closed || this.stylesList[e].transforms.push(t)
        }, CVShapeElement.prototype.removeTransformFromStyleList = function() {
            var t, e = this.stylesList.length;
            for (t = 0; t < e; t += 1) this.stylesList[t].closed || this.stylesList[t].transforms.pop()
        }, CVShapeElement.prototype.closeStyles = function(t) {
            var e, i = t.length;
            for (e = 0; e < i; e += 1) t[e].closed = !0
        }, CVShapeElement.prototype.searchShapes = function(t, e, i, n, r) {
            var s, a, o, l, h, c, p = t.length - 1,
                f = [],
                d = [],
                u = [].concat(r);
            for (s = p; s >= 0; s -= 1) {
                if ((l = this.searchProcessedElement(t[s])) ? e[s] = i[l - 1] : t[s]._shouldRender = n, "fl" === t[s].ty || "st" === t[s].ty || "gf" === t[s].ty || "gs" === t[s].ty) l ? e[s].style.closed = !1 : e[s] = this.createStyleElement(t[s], u), f.push(e[s].style);
                else if ("gr" === t[s].ty) {
                    if (l)
                        for (o = e[s].it.length, a = 0; a < o; a += 1) e[s].prevViewData[a] = e[s].it[a];
                    else e[s] = this.createGroupElement(t[s]);
                    this.searchShapes(t[s].it, e[s].it, e[s].prevViewData, n, u)
                } else "tr" === t[s].ty ? (l || (c = this.createTransformElement(t[s]), e[s] = c), u.push(e[s]), this.addTransformToStyleList(e[s])) : "sh" === t[s].ty || "rc" === t[s].ty || "el" === t[s].ty || "sr" === t[s].ty ? l || (e[s] = this.createShapeElement(t[s])) : "tm" === t[s].ty || "rd" === t[s].ty || "pb" === t[s].ty ? (l ? (h = e[s]).closed = !1 : ((h = ShapeModifiers.getModifier(t[s].ty)).init(this, t[s]), e[s] = h, this.shapeModifiers.push(h)), d.push(h)) : "rp" === t[s].ty && (l ? (h = e[s]).closed = !0 : (h = ShapeModifiers.getModifier(t[s].ty), e[s] = h, h.init(this, t, s, e), this.shapeModifiers.push(h), n = !1), d.push(h));
                this.addProcessedElement(t[s], s + 1)
            }
            for (this.removeTransformFromStyleList(), this.closeStyles(f), p = d.length, s = 0; s < p; s += 1) d[s].closed = !0
        }, CVShapeElement.prototype.renderInnerContent = function() {
            this.transformHelper.opacity = 1, this.transformHelper._opMdf = !1, this.renderModifiers(), this.transformsManager.processSequences(this._isFirstFrame), this.renderShape(this.transformHelper, this.shapesData, this.itemsData, !0)
        }, CVShapeElement.prototype.renderShapeTransform = function(t, e) {
            (t._opMdf || e.op._mdf || this._isFirstFrame) && (e.opacity = t.opacity, e.opacity *= e.op.v, e._opMdf = !0)
        }, CVShapeElement.prototype.drawLayer = function() {
            var t, e, i, n, r, s, a, o, l, h = this.stylesList.length,
                c = this.globalData.renderer,
                p = this.globalData.canvasContext;
            for (t = 0; t < h; t += 1)
                if (("st" !== (o = (l = this.stylesList[t]).type) && "gs" !== o || 0 !== l.wi) && l.data._shouldRender && 0 !== l.coOp && 0 !== this.globalData.currentGlobalAlpha) {
                    for (c.save(), s = l.elements, "st" === o || "gs" === o ? (p.strokeStyle = "st" === o ? l.co : l.grd, p.lineWidth = l.wi, p.lineCap = l.lc, p.lineJoin = l.lj, p.miterLimit = l.ml || 0) : p.fillStyle = "fl" === o ? l.co : l.grd, c.ctxOpacity(l.coOp), "st" !== o && "gs" !== o && p.beginPath(), c.ctxTransform(l.preTransforms.finalTransform.props), i = s.length, e = 0; e < i; e += 1) {
                        for ("st" !== o && "gs" !== o || (p.beginPath(), l.da && (p.setLineDash(l.da), p.lineDashOffset = l.do)), r = (a = s[e].trNodes).length, n = 0; n < r; n += 1) "m" === a[n].t ? p.moveTo(a[n].p[0], a[n].p[1]) : "c" === a[n].t ? p.bezierCurveTo(a[n].pts[0], a[n].pts[1], a[n].pts[2], a[n].pts[3], a[n].pts[4], a[n].pts[5]) : p.closePath();
                        "st" !== o && "gs" !== o || (p.stroke(), l.da && p.setLineDash(this.dashResetter))
                    }
                    "st" !== o && "gs" !== o && p.fill(l.r), c.restore()
                }
        }, CVShapeElement.prototype.renderShape = function(t, e, i, n) {
            var r, s;
            for (s = t, r = e.length - 1; r >= 0; r -= 1) "tr" === e[r].ty ? (s = i[r].transform, this.renderShapeTransform(t, s)) : "sh" === e[r].ty || "el" === e[r].ty || "rc" === e[r].ty || "sr" === e[r].ty ? this.renderPath(e[r], i[r]) : "fl" === e[r].ty ? this.renderFill(e[r], i[r], s) : "st" === e[r].ty ? this.renderStroke(e[r], i[r], s) : "gf" === e[r].ty || "gs" === e[r].ty ? this.renderGradientFill(e[r], i[r], s) : "gr" === e[r].ty ? this.renderShape(s, e[r].it, i[r].it) : e[r].ty;
            n && this.drawLayer()
        }, CVShapeElement.prototype.renderStyledShape = function(t, e) {
            if (this._isFirstFrame || e._mdf || t.transforms._mdf) {
                var i, n, r, s = t.trNodes,
                    a = e.paths,
                    o = a._length;
                s.length = 0;
                var l = t.transforms.finalTransform;
                for (r = 0; r < o; r += 1) {
                    var h = a.shapes[r];
                    if (h && h.v) {
                        for (n = h._length, i = 1; i < n; i += 1) 1 === i && s.push({
                            t: "m",
                            p: l.applyToPointArray(h.v[0][0], h.v[0][1], 0)
                        }), s.push({
                            t: "c",
                            pts: l.applyToTriplePoints(h.o[i - 1], h.i[i], h.v[i])
                        });
                        1 === n && s.push({
                            t: "m",
                            p: l.applyToPointArray(h.v[0][0], h.v[0][1], 0)
                        }), h.c && n && (s.push({
                            t: "c",
                            pts: l.applyToTriplePoints(h.o[i - 1], h.i[0], h.v[0])
                        }), s.push({
                            t: "z"
                        }))
                    }
                }
                t.trNodes = s
            }
        }, CVShapeElement.prototype.renderPath = function(t, e) {
            if (!0 !== t.hd && t._shouldRender) {
                var i, n = e.styledShapes.length;
                for (i = 0; i < n; i += 1) this.renderStyledShape(e.styledShapes[i], e.sh)
            }
        }, CVShapeElement.prototype.renderFill = function(t, e, i) {
            var n = e.style;
            (e.c._mdf || this._isFirstFrame) && (n.co = "rgb(" + bmFloor(e.c.v[0]) + "," + bmFloor(e.c.v[1]) + "," + bmFloor(e.c.v[2]) + ")"), (e.o._mdf || i._opMdf || this._isFirstFrame) && (n.coOp = e.o.v * i.opacity)
        }, CVShapeElement.prototype.renderGradientFill = function(t, e, i) {
            var n, r = e.style;
            if (!r.grd || e.g._mdf || e.s._mdf || e.e._mdf || 1 !== t.t && (e.h._mdf || e.a._mdf)) {
                var s, a = this.globalData.canvasContext,
                    o = e.s.v,
                    l = e.e.v;
                if (1 === t.t) n = a.createLinearGradient(o[0], o[1], l[0], l[1]);
                else {
                    var h = Math.sqrt(Math.pow(o[0] - l[0], 2) + Math.pow(o[1] - l[1], 2)),
                        c = Math.atan2(l[1] - o[1], l[0] - o[0]),
                        p = e.h.v;
                    p >= 1 ? p = .99 : p <= -1 && (p = -.99);
                    var f = h * p,
                        d = Math.cos(c + e.a.v) * f + o[0],
                        u = Math.sin(c + e.a.v) * f + o[1];
                    n = a.createRadialGradient(d, u, 0, o[0], o[1], h)
                }
                var m = t.g.p,
                    g = e.g.c,
                    y = 1;
                for (s = 0; s < m; s += 1) e.g._hasOpacity && e.g._collapsable && (y = e.g.o[2 * s + 1]), n.addColorStop(g[4 * s] / 100, "rgba(" + g[4 * s + 1] + "," + g[4 * s + 2] + "," + g[4 * s + 3] + "," + y + ")");
                r.grd = n
            }
            r.coOp = e.o.v * i.opacity
        }, CVShapeElement.prototype.renderStroke = function(t, e, i) {
            var n = e.style,
                r = e.d;
            r && (r._mdf || this._isFirstFrame) && (n.da = r.dashArray, n.do = r.dashoffset[0]), (e.c._mdf || this._isFirstFrame) && (n.co = "rgb(" + bmFloor(e.c.v[0]) + "," + bmFloor(e.c.v[1]) + "," + bmFloor(e.c.v[2]) + ")"), (e.o._mdf || i._opMdf || this._isFirstFrame) && (n.coOp = e.o.v * i.opacity), (e.w._mdf || this._isFirstFrame) && (n.wi = e.w.v)
        }, CVShapeElement.prototype.destroy = function() {
            this.shapesData = null, this.globalData = null, this.canvasContext = null, this.stylesList.length = 0, this.itemsData.length = 0
        }, extendPrototype([BaseElement, TransformElement, CVBaseElement, HierarchyElement, FrameElement, RenderableElement], CVSolidElement), CVSolidElement.prototype.initElement = SVGShapeElement.prototype.initElement, CVSolidElement.prototype.prepareFrame = IImageElement.prototype.prepareFrame, CVSolidElement.prototype.renderInnerContent = function() {
            var t = this.canvasContext;
            t.fillStyle = this.data.sc, t.fillRect(0, 0, this.data.sw, this.data.sh)
        }, extendPrototype([BaseElement, TransformElement, CVBaseElement, HierarchyElement, FrameElement, RenderableElement, ITextElement], CVTextElement), CVTextElement.prototype.tHelper = createTag("canvas").getContext("2d"), CVTextElement.prototype.buildNewText = function() {
            var t = this.textProperty.currentData;
            this.renderedLetters = createSizedArray(t.l ? t.l.length : 0);
            var e = !1;
            t.fc ? (e = !0, this.values.fill = this.buildColor(t.fc)) : this.values.fill = "rgba(0,0,0,0)", this.fill = e;
            var i = !1;
            t.sc && (i = !0, this.values.stroke = this.buildColor(t.sc), this.values.sWidth = t.sw);
            var n, r, s, a, o, l, h, c, p, f, d, u, m = this.globalData.fontManager.getFontByName(t.f),
                g = t.l,
                y = this.mHelper;
            this.stroke = i, this.values.fValue = t.finalSize + "px " + this.globalData.fontManager.getFontByName(t.f).fFamily, r = t.finalText.length;
            var v = this.data.singleShape,
                b = .001 * t.tr * t.finalSize,
                x = 0,
                w = 0,
                S = !0,
                E = 0;
            for (n = 0; n < r; n += 1) {
                for (a = (s = this.globalData.fontManager.getCharData(t.finalText[n], m.fStyle, this.globalData.fontManager.getFontByName(t.f).fFamily)) && s.data || {}, y.reset(), v && g[n].n && (x = -b, w += t.yOffset, w += S ? 1 : 0, S = !1), p = (h = a.shapes ? a.shapes[0].it : []).length, y.scale(t.finalSize / 100, t.finalSize / 100), v && this.applyTextPropertiesToMatrix(t, y, g[n].line, x, w), d = createSizedArray(p), c = 0; c < p; c += 1) {
                    for (l = h[c].ks.k.i.length, f = h[c].ks.k, u = [], o = 1; o < l; o += 1) 1 === o && u.push(y.applyToX(f.v[0][0], f.v[0][1], 0), y.applyToY(f.v[0][0], f.v[0][1], 0)), u.push(y.applyToX(f.o[o - 1][0], f.o[o - 1][1], 0), y.applyToY(f.o[o - 1][0], f.o[o - 1][1], 0), y.applyToX(f.i[o][0], f.i[o][1], 0), y.applyToY(f.i[o][0], f.i[o][1], 0), y.applyToX(f.v[o][0], f.v[o][1], 0), y.applyToY(f.v[o][0], f.v[o][1], 0));
                    u.push(y.applyToX(f.o[o - 1][0], f.o[o - 1][1], 0), y.applyToY(f.o[o - 1][0], f.o[o - 1][1], 0), y.applyToX(f.i[0][0], f.i[0][1], 0), y.applyToY(f.i[0][0], f.i[0][1], 0), y.applyToX(f.v[0][0], f.v[0][1], 0), y.applyToY(f.v[0][0], f.v[0][1], 0)), d[c] = u
                }
                v && (x += g[n].l, x += b), this.textSpans[E] ? this.textSpans[E].elem = d : this.textSpans[E] = {
                    elem: d
                }, E += 1
            }
        }, CVTextElement.prototype.renderInnerContent = function() {
            var t, e, i, n, r, s, a = this.canvasContext;
            a.font = this.values.fValue, a.lineCap = "butt", a.lineJoin = "miter", a.miterLimit = 4, this.data.singleShape || this.textAnimator.getMeasures(this.textProperty.currentData, this.lettersChangedFlag);
            var o, l = this.textAnimator.renderedLetters,
                h = this.textProperty.currentData.l;
            e = h.length;
            var c, p, f = null,
                d = null,
                u = null;
            for (t = 0; t < e; t += 1)
                if (!h[t].n) {
                    if ((o = l[t]) && (this.globalData.renderer.save(), this.globalData.renderer.ctxTransform(o.p), this.globalData.renderer.ctxOpacity(o.o)), this.fill) {
                        for (o && o.fc ? f !== o.fc && (f = o.fc, a.fillStyle = o.fc) : f !== this.values.fill && (f = this.values.fill, a.fillStyle = this.values.fill), n = (c = this.textSpans[t].elem).length, this.globalData.canvasContext.beginPath(), i = 0; i < n; i += 1)
                            for (s = (p = c[i]).length, this.globalData.canvasContext.moveTo(p[0], p[1]), r = 2; r < s; r += 6) this.globalData.canvasContext.bezierCurveTo(p[r], p[r + 1], p[r + 2], p[r + 3], p[r + 4], p[r + 5]);
                        this.globalData.canvasContext.closePath(), this.globalData.canvasContext.fill()
                    }
                    if (this.stroke) {
                        for (o && o.sw ? u !== o.sw && (u = o.sw, a.lineWidth = o.sw) : u !== this.values.sWidth && (u = this.values.sWidth, a.lineWidth = this.values.sWidth), o && o.sc ? d !== o.sc && (d = o.sc, a.strokeStyle = o.sc) : d !== this.values.stroke && (d = this.values.stroke, a.strokeStyle = this.values.stroke), n = (c = this.textSpans[t].elem).length, this.globalData.canvasContext.beginPath(), i = 0; i < n; i += 1)
                            for (s = (p = c[i]).length, this.globalData.canvasContext.moveTo(p[0], p[1]), r = 2; r < s; r += 6) this.globalData.canvasContext.bezierCurveTo(p[r], p[r + 1], p[r + 2], p[r + 3], p[r + 4], p[r + 5]);
                        this.globalData.canvasContext.closePath(), this.globalData.canvasContext.stroke()
                    }
                    o && this.globalData.renderer.restore()
                }
        }, CVEffects.prototype.renderFrame = function() {}, HBaseElement.prototype = {
            checkBlendMode: function() {},
            initRendererElement: function() {
                this.baseElement = createTag(this.data.tg || "div"), this.data.hasMask ? (this.svgElement = createNS("svg"), this.layerElement = createNS("g"), this.maskedElement = this.layerElement, this.svgElement.appendChild(this.layerElement), this.baseElement.appendChild(this.svgElement)) : this.layerElement = this.baseElement, styleDiv(this.baseElement)
            },
            createContainerElements: function() {
                this.renderableEffectsManager = new CVEffects(this), this.transformedElement = this.baseElement, this.maskedElement = this.layerElement, this.data.ln && this.layerElement.setAttribute("id", this.data.ln), this.data.cl && this.layerElement.setAttribute("class", this.data.cl), 0 !== this.data.bm && this.setBlendMode()
            },
            renderElement: function() {
                var t = this.transformedElement ? this.transformedElement.style : {};
                if (this.finalTransform._matMdf) {
                    var e = this.finalTransform.mat.toCSS();
                    t.transform = e, t.webkitTransform = e
                }
                this.finalTransform._opMdf && (t.opacity = this.finalTransform.mProp.o.v)
            },
            renderFrame: function() {
                this.data.hd || this.hidden || (this.renderTransform(), this.renderRenderable(), this.renderElement(), this.renderInnerContent(), this._isFirstFrame && (this._isFirstFrame = !1))
            },
            destroy: function() {
                this.layerElement = null, this.transformedElement = null, this.matteElement && (this.matteElement = null), this.maskManager && (this.maskManager.destroy(), this.maskManager = null)
            },
            createRenderableComponents: function() {
                this.maskManager = new MaskElement(this.data, this, this.globalData)
            },
            addEffects: function() {},
            setMatte: function() {}
        }, HBaseElement.prototype.getBaseElement = SVGBaseElement.prototype.getBaseElement, HBaseElement.prototype.destroyBaseElement = HBaseElement.prototype.destroy, HBaseElement.prototype.buildElementParenting = HybridRenderer.prototype.buildElementParenting, extendPrototype([BaseElement, TransformElement, HBaseElement, HierarchyElement, FrameElement, RenderableDOMElement], HSolidElement), HSolidElement.prototype.createContent = function() {
            var t;
            this.data.hasMask ? ((t = createNS("rect")).setAttribute("width", this.data.sw), t.setAttribute("height", this.data.sh), t.setAttribute("fill", this.data.sc), this.svgElement.setAttribute("width", this.data.sw), this.svgElement.setAttribute("height", this.data.sh)) : ((t = createTag("div")).style.width = this.data.sw + "px", t.style.height = this.data.sh + "px", t.style.backgroundColor = this.data.sc), this.layerElement.appendChild(t)
        }, extendPrototype([HybridRenderer, ICompElement, HBaseElement], HCompElement), HCompElement.prototype._createBaseContainerElements = HCompElement.prototype.createContainerElements, HCompElement.prototype.createContainerElements = function() {
            this._createBaseContainerElements(), this.data.hasMask ? (this.svgElement.setAttribute("width", this.data.w), this.svgElement.setAttribute("height", this.data.h), this.transformedElement = this.baseElement) : this.transformedElement = this.layerElement
        }, HCompElement.prototype.addTo3dContainer = function(t, e) {
            for (var i, n = 0; n < e;) this.elements[n] && this.elements[n].getBaseElement && (i = this.elements[n].getBaseElement()), n += 1;
            i ? this.layerElement.insertBefore(t, i) : this.layerElement.appendChild(t)
        }, extendPrototype([BaseElement, TransformElement, HSolidElement, SVGShapeElement, HBaseElement, HierarchyElement, FrameElement, RenderableElement], HShapeElement), HShapeElement.prototype._renderShapeFrame = HShapeElement.prototype.renderInnerContent, HShapeElement.prototype.createContent = function() {
            var t;
            if (this.baseElement.style.fontSize = 0, this.data.hasMask) this.layerElement.appendChild(this.shapesContainer), t = this.svgElement;
            else {
                t = createNS("svg");
                var e = this.comp.data ? this.comp.data : this.globalData.compSize;
                t.setAttribute("width", e.w), t.setAttribute("height", e.h), t.appendChild(this.shapesContainer), this.layerElement.appendChild(t)
            }
            this.searchShapes(this.shapesData, this.itemsData, this.prevViewData, this.shapesContainer, 0, [], !0), this.filterUniqueShapes(), this.shapeCont = t
        }, HShapeElement.prototype.getTransformedPoint = function(t, e) {
            var i, n = t.length;
            for (i = 0; i < n; i += 1) e = t[i].mProps.v.applyToPointArray(e[0], e[1], 0);
            return e
        }, HShapeElement.prototype.calculateShapeBoundingBox = function(t, e) {
            var i, n, r, s, a, o = t.sh.v,
                l = t.transformers,
                h = o._length;
            if (!(h <= 1)) {
                for (i = 0; i < h - 1; i += 1) n = this.getTransformedPoint(l, o.v[i]), r = this.getTransformedPoint(l, o.o[i]), s = this.getTransformedPoint(l, o.i[i + 1]), a = this.getTransformedPoint(l, o.v[i + 1]), this.checkBounds(n, r, s, a, e);
                o.c && (n = this.getTransformedPoint(l, o.v[i]), r = this.getTransformedPoint(l, o.o[i]), s = this.getTransformedPoint(l, o.i[0]), a = this.getTransformedPoint(l, o.v[0]), this.checkBounds(n, r, s, a, e))
            }
        }, HShapeElement.prototype.checkBounds = function(t, e, i, n, r) {
            this.getBoundsOfCurve(t, e, i, n);
            var s = this.shapeBoundingBox;
            r.x = bmMin(s.left, r.x), r.xMax = bmMax(s.right, r.xMax), r.y = bmMin(s.top, r.y), r.yMax = bmMax(s.bottom, r.yMax)
        }, HShapeElement.prototype.shapeBoundingBox = {
            left: 0,
            right: 0,
            top: 0,
            bottom: 0
        }, HShapeElement.prototype.tempBoundingBox = {
            x: 0,
            xMax: 0,
            y: 0,
            yMax: 0,
            width: 0,
            height: 0
        }, HShapeElement.prototype.getBoundsOfCurve = function(t, e, i, n) {
            for (var r, s, a, o, l, h, c, p = [
                    [t[0], n[0]],
                    [t[1], n[1]]
                ], f = 0; f < 2; ++f) s = 6 * t[f] - 12 * e[f] + 6 * i[f], r = -3 * t[f] + 9 * e[f] - 9 * i[f] + 3 * n[f], a = 3 * e[f] - 3 * t[f], s |= 0, a |= 0, 0 === (r |= 0) && 0 === s || (0 === r ? (o = -a / s) > 0 && o < 1 && p[f].push(this.calculateF(o, t, e, i, n, f)) : (l = s * s - 4 * a * r) >= 0 && ((h = (-s + bmSqrt(l)) / (2 * r)) > 0 && h < 1 && p[f].push(this.calculateF(h, t, e, i, n, f)), (c = (-s - bmSqrt(l)) / (2 * r)) > 0 && c < 1 && p[f].push(this.calculateF(c, t, e, i, n, f))));
            this.shapeBoundingBox.left = bmMin.apply(null, p[0]), this.shapeBoundingBox.top = bmMin.apply(null, p[1]), this.shapeBoundingBox.right = bmMax.apply(null, p[0]), this.shapeBoundingBox.bottom = bmMax.apply(null, p[1])
        }, HShapeElement.prototype.calculateF = function(t, e, i, n, r, s) {
            return bmPow(1 - t, 3) * e[s] + 3 * bmPow(1 - t, 2) * t * i[s] + 3 * (1 - t) * bmPow(t, 2) * n[s] + bmPow(t, 3) * r[s]
        }, HShapeElement.prototype.calculateBoundingBox = function(t, e) {
            var i, n = t.length;
            for (i = 0; i < n; i += 1) t[i] && t[i].sh ? this.calculateShapeBoundingBox(t[i], e) : t[i] && t[i].it && this.calculateBoundingBox(t[i].it, e)
        }, HShapeElement.prototype.currentBoxContains = function(t) {
            return this.currentBBox.x <= t.x && this.currentBBox.y <= t.y && this.currentBBox.width + this.currentBBox.x >= t.x + t.width && this.currentBBox.height + this.currentBBox.y >= t.y + t.height
        }, HShapeElement.prototype.renderInnerContent = function() {
            if (this._renderShapeFrame(), !this.hidden && (this._isFirstFrame || this._mdf)) {
                var t = this.tempBoundingBox,
                    e = 999999;
                if (t.x = e, t.xMax = -e, t.y = e, t.yMax = -e, this.calculateBoundingBox(this.itemsData, t), t.width = t.xMax < t.x ? 0 : t.xMax - t.x, t.height = t.yMax < t.y ? 0 : t.yMax - t.y, this.currentBoxContains(t)) return;
                var i = !1;
                if (this.currentBBox.w !== t.width && (this.currentBBox.w = t.width, this.shapeCont.setAttribute("width", t.width), i = !0), this.currentBBox.h !== t.height && (this.currentBBox.h = t.height, this.shapeCont.setAttribute("height", t.height), i = !0), i || this.currentBBox.x !== t.x || this.currentBBox.y !== t.y) {
                    this.currentBBox.w = t.width, this.currentBBox.h = t.height, this.currentBBox.x = t.x, this.currentBBox.y = t.y, this.shapeCont.setAttribute("viewBox", this.currentBBox.x + " " + this.currentBBox.y + " " + this.currentBBox.w + " " + this.currentBBox.h);
                    var n = this.shapeCont.style,
                        r = "translate(" + this.currentBBox.x + "px," + this.currentBBox.y + "px)";
                    n.transform = r, n.webkitTransform = r
                }
            }
        }, extendPrototype([BaseElement, TransformElement, HBaseElement, HierarchyElement, FrameElement, RenderableDOMElement, ITextElement], HTextElement), HTextElement.prototype.createContent = function() {
            if (this.isMasked = this.checkMasks(), this.isMasked) {
                this.renderType = "svg", this.compW = this.comp.data.w, this.compH = this.comp.data.h, this.svgElement.setAttribute("width", this.compW), this.svgElement.setAttribute("height", this.compH);
                var t = createNS("g");
                this.maskedElement.appendChild(t), this.innerElem = t
            } else this.renderType = "html", this.innerElem = this.layerElement;
            this.checkParenting()
        }, HTextElement.prototype.buildNewText = function() {
            var t = this.textProperty.currentData;
            this.renderedLetters = createSizedArray(t.l ? t.l.length : 0);
            var e = this.innerElem.style,
                i = t.fc ? this.buildColor(t.fc) : "rgba(0,0,0,0)";
            e.fill = i, e.color = i, t.sc && (e.stroke = this.buildColor(t.sc), e.strokeWidth = t.sw + "px");
            var n, r, s = this.globalData.fontManager.getFontByName(t.f);
            if (!this.globalData.fontManager.chars)
                if (e.fontSize = t.finalSize + "px", e.lineHeight = t.finalSize + "px", s.fClass) this.innerElem.className = s.fClass;
                else {
                    e.fontFamily = s.fFamily;
                    var a = t.fWeight,
                        o = t.fStyle;
                    e.fontStyle = o, e.fontWeight = a
                }
            var l, h, c, p = t.l;
            r = p.length;
            var f, d = this.mHelper,
                u = "",
                m = 0;
            for (n = 0; n < r; n += 1) {
                if (this.globalData.fontManager.chars ? (this.textPaths[m] ? l = this.textPaths[m] : ((l = createNS("path")).setAttribute("stroke-linecap", "butt"), l.setAttribute("stroke-linejoin", "round"), l.setAttribute("stroke-miterlimit", "4")), this.isMasked || (this.textSpans[m] ? c = (h = this.textSpans[m]).children[0] : ((h = createTag("div")).style.lineHeight = 0, (c = createNS("svg")).appendChild(l), styleDiv(h)))) : this.isMasked ? l = this.textPaths[m] ? this.textPaths[m] : createNS("text") : this.textSpans[m] ? (h = this.textSpans[m], l = this.textPaths[m]) : (styleDiv(h = createTag("span")), styleDiv(l = createTag("span")), h.appendChild(l)), this.globalData.fontManager.chars) {
                    var g, y = this.globalData.fontManager.getCharData(t.finalText[n], s.fStyle, this.globalData.fontManager.getFontByName(t.f).fFamily);
                    if (g = y ? y.data : null, d.reset(), g && g.shapes && (f = g.shapes[0].it, d.scale(t.finalSize / 100, t.finalSize / 100), u = this.createPathShape(d, f), l.setAttribute("d", u)), this.isMasked) this.innerElem.appendChild(l);
                    else {
                        if (this.innerElem.appendChild(h), g && g.shapes) {
                            document.body.appendChild(c);
                            var v = c.getBBox();
                            c.setAttribute("width", v.width + 2), c.setAttribute("height", v.height + 2), c.setAttribute("viewBox", v.x - 1 + " " + (v.y - 1) + " " + (v.width + 2) + " " + (v.height + 2));
                            var b = c.style,
                                x = "translate(" + (v.x - 1) + "px," + (v.y - 1) + "px)";
                            b.transform = x, b.webkitTransform = x, p[n].yOffset = v.y - 1
                        } else c.setAttribute("width", 1), c.setAttribute("height", 1);
                        h.appendChild(c)
                    }
                } else if (l.textContent = p[n].val, l.setAttributeNS("http://www.w3.org/XML/1998/namespace", "xml:space", "preserve"), this.isMasked) this.innerElem.appendChild(l);
                else {
                    this.innerElem.appendChild(h);
                    var w = l.style,
                        S = "translate3d(0," + -t.finalSize / 1.2 + "px,0)";
                    w.transform = S, w.webkitTransform = S
                }
                this.isMasked ? this.textSpans[m] = l : this.textSpans[m] = h, this.textSpans[m].style.display = "block", this.textPaths[m] = l, m += 1
            }
            for (; m < this.textSpans.length;) this.textSpans[m].style.display = "none", m += 1
        }, HTextElement.prototype.renderInnerContent = function() {
            var t;
            if (this.data.singleShape) {
                if (!this._isFirstFrame && !this.lettersChangedFlag) return;
                if (this.isMasked && this.finalTransform._matMdf) {
                    this.svgElement.setAttribute("viewBox", -this.finalTransform.mProp.p.v[0] + " " + -this.finalTransform.mProp.p.v[1] + " " + this.compW + " " + this.compH), t = this.svgElement.style;
                    var e = "translate(" + -this.finalTransform.mProp.p.v[0] + "px," + -this.finalTransform.mProp.p.v[1] + "px)";
                    t.transform = e, t.webkitTransform = e
                }
            }
            if (this.textAnimator.getMeasures(this.textProperty.currentData, this.lettersChangedFlag), this.lettersChangedFlag || this.textAnimator.lettersChangedFlag) {
                var i, n, r, s, a, o = 0,
                    l = this.textAnimator.renderedLetters,
                    h = this.textProperty.currentData.l;
                for (n = h.length, i = 0; i < n; i += 1) h[i].n ? o += 1 : (s = this.textSpans[i], a = this.textPaths[i], r = l[o], o += 1, r._mdf.m && (this.isMasked ? s.setAttribute("transform", r.m) : (s.style.webkitTransform = r.m, s.style.transform = r.m)), s.style.opacity = r.o, r.sw && r._mdf.sw && a.setAttribute("stroke-width", r.sw), r.sc && r._mdf.sc && a.setAttribute("stroke", r.sc), r.fc && r._mdf.fc && (a.setAttribute("fill", r.fc), a.style.color = r.fc));
                if (this.innerElem.getBBox && !this.hidden && (this._isFirstFrame || this._mdf)) {
                    var c = this.innerElem.getBBox();
                    this.currentBBox.w !== c.width && (this.currentBBox.w = c.width, this.svgElement.setAttribute("width", c.width)), this.currentBBox.h !== c.height && (this.currentBBox.h = c.height, this.svgElement.setAttribute("height", c.height));
                    if (this.currentBBox.w !== c.width + 2 || this.currentBBox.h !== c.height + 2 || this.currentBBox.x !== c.x - 1 || this.currentBBox.y !== c.y - 1) {
                        this.currentBBox.w = c.width + 2, this.currentBBox.h = c.height + 2, this.currentBBox.x = c.x - 1, this.currentBBox.y = c.y - 1, this.svgElement.setAttribute("viewBox", this.currentBBox.x + " " + this.currentBBox.y + " " + this.currentBBox.w + " " + this.currentBBox.h), t = this.svgElement.style;
                        var p = "translate(" + this.currentBBox.x + "px," + this.currentBBox.y + "px)";
                        t.transform = p, t.webkitTransform = p
                    }
                }
            }
        }, extendPrototype([BaseElement, TransformElement, HBaseElement, HSolidElement, HierarchyElement, FrameElement, RenderableElement], HImageElement), HImageElement.prototype.createContent = function() {
            var t = this.globalData.getAssetsPath(this.assetData),
                e = new Image;
            this.data.hasMask ? (this.imageElem = createNS("image"), this.imageElem.setAttribute("width", this.assetData.w + "px"), this.imageElem.setAttribute("height", this.assetData.h + "px"), this.imageElem.setAttributeNS("http://www.w3.org/1999/xlink", "href", t), this.layerElement.appendChild(this.imageElem), this.baseElement.setAttribute("width", this.assetData.w), this.baseElement.setAttribute("height", this.assetData.h)) : this.layerElement.appendChild(e), e.crossOrigin = "anonymous", e.src = t, this.data.ln && this.baseElement.setAttribute("id", this.data.ln)
        }, extendPrototype([BaseElement, FrameElement, HierarchyElement], HCameraElement), HCameraElement.prototype.setup = function() {
            var t, e, i, n, r = this.comp.threeDElements.length;
            for (t = 0; t < r; t += 1)
                if ("3d" === (e = this.comp.threeDElements[t]).type) {
                    i = e.perspectiveElem.style, n = e.container.style;
                    var s = this.pe.v + "px",
                        a = "matrix3d(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1)";
                    i.perspective = s, i.webkitPerspective = s, n.transformOrigin = "0px 0px 0px", n.mozTransformOrigin = "0px 0px 0px", n.webkitTransformOrigin = "0px 0px 0px", i.transform = a, i.webkitTransform = a
                }
        }, HCameraElement.prototype.createElements = function() {}, HCameraElement.prototype.hide = function() {}, HCameraElement.prototype.renderFrame = function() {
            var t, e, i = this._isFirstFrame;
            if (this.hierarchy)
                for (e = this.hierarchy.length, t = 0; t < e; t += 1) i = this.hierarchy[t].finalTransform.mProp._mdf || i;
            if (i || this.pe._mdf || this.p && this.p._mdf || this.px && (this.px._mdf || this.py._mdf || this.pz._mdf) || this.rx._mdf || this.ry._mdf || this.rz._mdf || this.or._mdf || this.a && this.a._mdf) {
                if (this.mat.reset(), this.hierarchy)
                    for (t = e = this.hierarchy.length - 1; t >= 0; t -= 1) {
                        var n = this.hierarchy[t].finalTransform.mProp;
                        this.mat.translate(-n.p.v[0], -n.p.v[1], n.p.v[2]), this.mat.rotateX(-n.or.v[0]).rotateY(-n.or.v[1]).rotateZ(n.or.v[2]), this.mat.rotateX(-n.rx.v).rotateY(-n.ry.v).rotateZ(n.rz.v), this.mat.scale(1 / n.s.v[0], 1 / n.s.v[1], 1 / n.s.v[2]), this.mat.translate(n.a.v[0], n.a.v[1], n.a.v[2])
                    }
                if (this.p ? this.mat.translate(-this.p.v[0], -this.p.v[1], this.p.v[2]) : this.mat.translate(-this.px.v, -this.py.v, this.pz.v), this.a) {
                    var r;
                    r = this.p ? [this.p.v[0] - this.a.v[0], this.p.v[1] - this.a.v[1], this.p.v[2] - this.a.v[2]] : [this.px.v - this.a.v[0], this.py.v - this.a.v[1], this.pz.v - this.a.v[2]];
                    var s = Math.sqrt(Math.pow(r[0], 2) + Math.pow(r[1], 2) + Math.pow(r[2], 2)),
                        a = [r[0] / s, r[1] / s, r[2] / s],
                        o = Math.sqrt(a[2] * a[2] + a[0] * a[0]),
                        l = Math.atan2(a[1], o),
                        h = Math.atan2(a[0], -a[2]);
                    this.mat.rotateY(h).rotateX(-l)
                }
                this.mat.rotateX(-this.rx.v).rotateY(-this.ry.v).rotateZ(this.rz.v), this.mat.rotateX(-this.or.v[0]).rotateY(-this.or.v[1]).rotateZ(this.or.v[2]), this.mat.translate(this.globalData.compSize.w / 2, this.globalData.compSize.h / 2, 0), this.mat.translate(0, 0, this.pe.v);
                var c = !this._prevMat.equals(this.mat);
                if ((c || this.pe._mdf) && this.comp.threeDElements) {
                    var p, f, d;
                    for (e = this.comp.threeDElements.length, t = 0; t < e; t += 1)
                        if ("3d" === (p = this.comp.threeDElements[t]).type) {
                            if (c) {
                                var u = this.mat.toCSS();
                                (d = p.container.style).transform = u, d.webkitTransform = u
                            }
                            this.pe._mdf && ((f = p.perspectiveElem.style).perspective = this.pe.v + "px", f.webkitPerspective = this.pe.v + "px")
                        }
                    this.mat.clone(this._prevMat)
                }
            }
            this._isFirstFrame = !1
        }, HCameraElement.prototype.prepareFrame = function(t) {
            this.prepareProperties(t, !0)
        }, HCameraElement.prototype.destroy = function() {}, HCameraElement.prototype.getBaseElement = function() {
            return null
        }, HEffects.prototype.renderFrame = function() {};
        var animationManager = function() {
                var t = {},
                    e = [],
                    i = 0,
                    n = 0,
                    r = 0,
                    s = !0,
                    a = !1;

                function o(t) {
                    for (var i = 0, r = t.target; i < n;) e[i].animation === r && (e.splice(i, 1), i -= 1, n -= 1, r.isPaused || c()), i += 1
                }

                function l(t, i) {
                    if (!t) return null;
                    for (var r = 0; r < n;) {
                        if (e[r].elem === t && null !== e[r].elem) return e[r].animation;
                        r += 1
                    }
                    var s = new AnimationItem;
                    return p(s, t), s.setData(t, i), s
                }

                function h() {
                    r += 1, u()
                }

                function c() {
                    r -= 1
                }

                function p(t, i) {
                    t.addEventListener("destroy", o), t.addEventListener("_active", h), t.addEventListener("_idle", c), e.push({
                        elem: i,
                        animation: t
                    }), n += 1
                }

                function f(t) {
                    var o, l = t - i;
                    for (o = 0; o < n; o += 1) e[o].animation.advanceTime(l);
                    i = t, r && !a ? window.requestAnimationFrame(f) : s = !0
                }

                function d(t) {
                    i = t, window.requestAnimationFrame(f)
                }

                function u() {
                    !a && r && s && (window.requestAnimationFrame(d), s = !1)
                }
                return t.registerAnimation = l, t.loadAnimation = function(t) {
                    var e = new AnimationItem;
                    return p(e, null), e.setParams(t), e
                }, t.setSpeed = function(t, i) {
                    var r;
                    for (r = 0; r < n; r += 1) e[r].animation.setSpeed(t, i)
                }, t.setDirection = function(t, i) {
                    var r;
                    for (r = 0; r < n; r += 1) e[r].animation.setDirection(t, i)
                }, t.play = function(t) {
                    var i;
                    for (i = 0; i < n; i += 1) e[i].animation.play(t)
                }, t.pause = function(t) {
                    var i;
                    for (i = 0; i < n; i += 1) e[i].animation.pause(t)
                }, t.stop = function(t) {
                    var i;
                    for (i = 0; i < n; i += 1) e[i].animation.stop(t)
                }, t.togglePause = function(t) {
                    var i;
                    for (i = 0; i < n; i += 1) e[i].animation.togglePause(t)
                }, t.searchAnimations = function(t, e, i) {
                    var n, r = [].concat([].slice.call(document.getElementsByClassName("lottie")), [].slice.call(document.getElementsByClassName("bodymovin"))),
                        s = r.length;
                    for (n = 0; n < s; n += 1) i && r[n].setAttribute("data-bm-type", i), l(r[n], t);
                    if (e && 0 === s) {
                        i || (i = "svg");
                        var a = document.getElementsByTagName("body")[0];
                        a.innerText = "";
                        var o = createTag("div");
                        o.style.width = "100%", o.style.height = "100%", o.setAttribute("data-bm-type", i), a.appendChild(o), l(o, t)
                    }
                }, t.resize = function() {
                    var t;
                    for (t = 0; t < n; t += 1) e[t].animation.resize()
                }, t.goToAndStop = function(t, i, r) {
                    var s;
                    for (s = 0; s < n; s += 1) e[s].animation.goToAndStop(t, i, r)
                }, t.destroy = function(t) {
                    var i;
                    for (i = n - 1; i >= 0; i -= 1) e[i].animation.destroy(t)
                }, t.freeze = function() {
                    a = !0
                }, t.unfreeze = function() {
                    a = !1, u()
                }, t.setVolume = function(t, i) {
                    var r;
                    for (r = 0; r < n; r += 1) e[r].animation.setVolume(t, i)
                }, t.mute = function(t) {
                    var i;
                    for (i = 0; i < n; i += 1) e[i].animation.mute(t)
                }, t.unmute = function(t) {
                    var i;
                    for (i = 0; i < n; i += 1) e[i].animation.unmute(t)
                }, t.getRegisteredAnimations = function() {
                    var t, i = e.length,
                        n = [];
                    for (t = 0; t < i; t += 1) n.push(e[t].animation);
                    return n
                }, t
            }(),
            AnimationItem = function() {
                this._cbs = [], this.name = "", this.path = "", this.isLoaded = !1, this.currentFrame = 0, this.currentRawFrame = 0, this.firstFrame = 0, this.totalFrames = 0, this.frameRate = 0, this.frameMult = 0, this.playSpeed = 1, this.playDirection = 1, this.playCount = 0, this.animationData = {}, this.assets = [], this.isPaused = !0, this.autoplay = !1, this.loop = !0, this.renderer = null, this.animationID = createElementID(), this.assetsPath = "", this.timeCompleted = 0, this.segmentPos = 0, this.isSubframeEnabled = subframeEnabled, this.segments = [], this._idle = !0, this._completedLoop = !1, this.projectInterface = ProjectInterface(), this.imagePreloader = new ImagePreloader, this.audioController = audioControllerFactory(), this.markers = []
            };
        extendPrototype([BaseEvent], AnimationItem), AnimationItem.prototype.setParams = function(t) {
            (t.wrapper || t.container) && (this.wrapper = t.wrapper || t.container);
            var e = "svg";
            switch (t.animType ? e = t.animType : t.renderer && (e = t.renderer), e) {
                case "canvas":
                    this.renderer = new CanvasRenderer(this, t.rendererSettings);
                    break;
                case "svg":
                    this.renderer = new SVGRenderer(this, t.rendererSettings);
                    break;
                default:
                    this.renderer = new HybridRenderer(this, t.rendererSettings)
            }
            this.imagePreloader.setCacheType(e, this.renderer.globalData.defs), this.renderer.setProjectInterface(this.projectInterface), this.animType = e, "" === t.loop || null === t.loop || void 0 === t.loop || !0 === t.loop ? this.loop = !0 : !1 === t.loop ? this.loop = !1 : this.loop = parseInt(t.loop, 10), this.autoplay = !("autoplay" in t) || t.autoplay, this.name = t.name ? t.name : "", this.autoloadSegments = !Object.prototype.hasOwnProperty.call(t, "autoloadSegments") || t.autoloadSegments, this.assetsPath = t.assetsPath, this.initialSegment = t.initialSegment, t.audioFactory && this.audioController.setAudioFactory(t.audioFactory), t.animationData ? this.configAnimation(t.animationData) : t.path && (-1 !== t.path.lastIndexOf("\\") ? this.path = t.path.substr(0, t.path.lastIndexOf("\\") + 1) : this.path = t.path.substr(0, t.path.lastIndexOf("/") + 1), this.fileName = t.path.substr(t.path.lastIndexOf("/") + 1), this.fileName = this.fileName.substr(0, this.fileName.lastIndexOf(".json")), assetLoader.load(t.path, this.configAnimation.bind(this), function() {
                this.trigger("data_failed")
            }.bind(this)))
        }, AnimationItem.prototype.setData = function(t, e) {
            e && "object" != typeof e && (e = JSON.parse(e));
            var i = {
                    wrapper: t,
                    animationData: e
                },
                n = t.attributes;
            i.path = n.getNamedItem("data-animation-path") ? n.getNamedItem("data-animation-path").value : n.getNamedItem("data-bm-path") ? n.getNamedItem("data-bm-path").value : n.getNamedItem("bm-path") ? n.getNamedItem("bm-path").value : "", i.animType = n.getNamedItem("data-anim-type") ? n.getNamedItem("data-anim-type").value : n.getNamedItem("data-bm-type") ? n.getNamedItem("data-bm-type").value : n.getNamedItem("bm-type") ? n.getNamedItem("bm-type").value : n.getNamedItem("data-bm-renderer") ? n.getNamedItem("data-bm-renderer").value : n.getNamedItem("bm-renderer") ? n.getNamedItem("bm-renderer").value : "canvas";
            var r = n.getNamedItem("data-anim-loop") ? n.getNamedItem("data-anim-loop").value : n.getNamedItem("data-bm-loop") ? n.getNamedItem("data-bm-loop").value : n.getNamedItem("bm-loop") ? n.getNamedItem("bm-loop").value : "";
            "false" === r ? i.loop = !1 : "true" === r ? i.loop = !0 : "" !== r && (i.loop = parseInt(r, 10));
            var s = n.getNamedItem("data-anim-autoplay") ? n.getNamedItem("data-anim-autoplay").value : n.getNamedItem("data-bm-autoplay") ? n.getNamedItem("data-bm-autoplay").value : !n.getNamedItem("bm-autoplay") || n.getNamedItem("bm-autoplay").value;
            i.autoplay = "false" !== s, i.name = n.getNamedItem("data-name") ? n.getNamedItem("data-name").value : n.getNamedItem("data-bm-name") ? n.getNamedItem("data-bm-name").value : n.getNamedItem("bm-name") ? n.getNamedItem("bm-name").value : "", "false" === (n.getNamedItem("data-anim-prerender") ? n.getNamedItem("data-anim-prerender").value : n.getNamedItem("data-bm-prerender") ? n.getNamedItem("data-bm-prerender").value : n.getNamedItem("bm-prerender") ? n.getNamedItem("bm-prerender").value : "") && (i.prerender = !1), this.setParams(i)
        }, AnimationItem.prototype.includeLayers = function(t) {
            t.op > this.animationData.op && (this.animationData.op = t.op, this.totalFrames = Math.floor(t.op - this.animationData.ip));
            var e, i, n = this.animationData.layers,
                r = n.length,
                s = t.layers,
                a = s.length;
            for (i = 0; i < a; i += 1)
                for (e = 0; e < r;) {
                    if (n[e].id === s[i].id) {
                        n[e] = s[i];
                        break
                    }
                    e += 1
                }
            if ((t.chars || t.fonts) && (this.renderer.globalData.fontManager.addChars(t.chars), this.renderer.globalData.fontManager.addFonts(t.fonts, this.renderer.globalData.defs)), t.assets)
                for (r = t.assets.length, e = 0; e < r; e += 1) this.animationData.assets.push(t.assets[e]);
            this.animationData.__complete = !1, dataManager.completeData(this.animationData, this.renderer.globalData.fontManager), this.renderer.includeLayers(t.layers), expressionsPlugin && expressionsPlugin.initExpressions(this), this.loadNextSegment()
        }, AnimationItem.prototype.loadNextSegment = function() {
            var t = this.animationData.segments;
            if (!t || 0 === t.length || !this.autoloadSegments) return this.trigger("data_ready"), void(this.timeCompleted = this.totalFrames);
            var e = t.shift();
            this.timeCompleted = e.time * this.frameRate;
            var i = this.path + this.fileName + "_" + this.segmentPos + ".json";
            this.segmentPos += 1, assetLoader.load(i, this.includeLayers.bind(this), function() {
                this.trigger("data_failed")
            }.bind(this))
        }, AnimationItem.prototype.loadSegments = function() {
            this.animationData.segments || (this.timeCompleted = this.totalFrames), this.loadNextSegment()
        }, AnimationItem.prototype.imagesLoaded = function() {
            this.trigger("loaded_images"), this.checkLoaded()
        }, AnimationItem.prototype.preloadImages = function() {
            this.imagePreloader.setAssetsPath(this.assetsPath), this.imagePreloader.setPath(this.path), this.imagePreloader.loadAssets(this.animationData.assets, this.imagesLoaded.bind(this))
        }, AnimationItem.prototype.configAnimation = function(t) {
            if (this.renderer) try {
                this.animationData = t, this.initialSegment ? (this.totalFrames = Math.floor(this.initialSegment[1] - this.initialSegment[0]), this.firstFrame = Math.round(this.initialSegment[0])) : (this.totalFrames = Math.floor(this.animationData.op - this.animationData.ip), this.firstFrame = Math.round(this.animationData.ip)), this.renderer.configAnimation(t), t.assets || (t.assets = []), this.assets = this.animationData.assets, this.frameRate = this.animationData.fr, this.frameMult = this.animationData.fr / 1e3, this.renderer.searchExtraCompositions(t.assets), this.markers = markerParser(t.markers || []), this.trigger("config_ready"), this.preloadImages(), this.loadSegments(), this.updaFrameModifier(), this.waitForFontsLoaded(), this.isPaused && this.audioController.pause()
            } catch (t) {
                this.triggerConfigError(t)
            }
        }, AnimationItem.prototype.waitForFontsLoaded = function() {
            this.renderer && (this.renderer.globalData.fontManager.isLoaded ? this.checkLoaded() : setTimeout(this.waitForFontsLoaded.bind(this), 20))
        }, AnimationItem.prototype.checkLoaded = function() {
            !this.isLoaded && this.renderer.globalData.fontManager.isLoaded && (this.imagePreloader.loadedImages() || "canvas" !== this.renderer.rendererType) && this.imagePreloader.loadedFootages() && (this.isLoaded = !0, dataManager.completeData(this.animationData, this.renderer.globalData.fontManager), expressionsPlugin && expressionsPlugin.initExpressions(this), this.renderer.initItems(), setTimeout(function() {
                this.trigger("DOMLoaded")
            }.bind(this), 0), this.gotoFrame(), this.autoplay && this.play())
        }, AnimationItem.prototype.resize = function() {
            this.renderer.updateContainerSize()
        }, AnimationItem.prototype.setSubframe = function(t) {
            this.isSubframeEnabled = !!t
        }, AnimationItem.prototype.gotoFrame = function() {
            this.currentFrame = this.isSubframeEnabled ? this.currentRawFrame : ~~this.currentRawFrame, this.timeCompleted !== this.totalFrames && this.currentFrame > this.timeCompleted && (this.currentFrame = this.timeCompleted), this.trigger("enterFrame"), this.renderFrame()
        }, AnimationItem.prototype.renderFrame = function() {
            if (!1 !== this.isLoaded && this.renderer) try {
                this.renderer.renderFrame(this.currentFrame + this.firstFrame)
            } catch (t) {
                this.triggerRenderFrameError(t)
            }
        }, AnimationItem.prototype.play = function(t) {
            t && this.name !== t || !0 === this.isPaused && (this.isPaused = !1, this.audioController.resume(), this._idle && (this._idle = !1, this.trigger("_active")))
        }, AnimationItem.prototype.pause = function(t) {
            t && this.name !== t || !1 === this.isPaused && (this.isPaused = !0, this._idle = !0, this.trigger("_idle"), this.audioController.pause())
        }, AnimationItem.prototype.togglePause = function(t) {
            t && this.name !== t || (!0 === this.isPaused ? this.play() : this.pause())
        }, AnimationItem.prototype.stop = function(t) {
            t && this.name !== t || (this.pause(), this.playCount = 0, this._completedLoop = !1, this.setCurrentRawFrameValue(0))
        }, AnimationItem.prototype.getMarkerData = function(t) {
            for (var e, i = 0; i < this.markers.length; i += 1)
                if ((e = this.markers[i]).payload && e.payload.name === t) return e;
            return null
        }, AnimationItem.prototype.goToAndStop = function(t, e, i) {
            if (!i || this.name === i) {
                var n = Number(t);
                if (isNaN(n)) {
                    var r = this.getMarkerData(t);
                    r && this.goToAndStop(r.time, !0)
                } else e ? this.setCurrentRawFrameValue(t) : this.setCurrentRawFrameValue(t * this.frameModifier);
                this.pause()
            }
        }, AnimationItem.prototype.goToAndPlay = function(t, e, i) {
            if (!i || this.name === i) {
                var n = Number(t);
                if (isNaN(n)) {
                    var r = this.getMarkerData(t);
                    r && (r.duration ? this.playSegments([r.time, r.time + r.duration], !0) : this.goToAndStop(r.time, !0))
                } else this.goToAndStop(n, e, i);
                this.play()
            }
        }, AnimationItem.prototype.advanceTime = function(t) {
            if (!0 !== this.isPaused && !1 !== this.isLoaded) {
                var e = this.currentRawFrame + t * this.frameModifier,
                    i = !1;
                e >= this.totalFrames - 1 && this.frameModifier > 0 ? this.loop && this.playCount !== this.loop ? e >= this.totalFrames ? (this.playCount += 1, this.checkSegments(e % this.totalFrames) || (this.setCurrentRawFrameValue(e % this.totalFrames), this._completedLoop = !0, this.trigger("loopComplete"))) : this.setCurrentRawFrameValue(e) : this.checkSegments(e > this.totalFrames ? e % this.totalFrames : 0) || (i = !0, e = this.totalFrames - 1) : e < 0 ? this.checkSegments(e % this.totalFrames) || (!this.loop || this.playCount-- <= 0 && !0 !== this.loop ? (i = !0, e = 0) : (this.setCurrentRawFrameValue(this.totalFrames + e % this.totalFrames), this._completedLoop ? this.trigger("loopComplete") : this._completedLoop = !0)) : this.setCurrentRawFrameValue(e), i && (this.setCurrentRawFrameValue(e), this.pause(), this.trigger("complete"))
            }
        }, AnimationItem.prototype.adjustSegment = function(t, e) {
            this.playCount = 0, t[1] < t[0] ? (this.frameModifier > 0 && (this.playSpeed < 0 ? this.setSpeed(-this.playSpeed) : this.setDirection(-1)), this.totalFrames = t[0] - t[1], this.timeCompleted = this.totalFrames, this.firstFrame = t[1], this.setCurrentRawFrameValue(this.totalFrames - .001 - e)) : t[1] > t[0] && (this.frameModifier < 0 && (this.playSpeed < 0 ? this.setSpeed(-this.playSpeed) : this.setDirection(1)), this.totalFrames = t[1] - t[0], this.timeCompleted = this.totalFrames, this.firstFrame = t[0], this.setCurrentRawFrameValue(.001 + e)), this.trigger("segmentStart")
        }, AnimationItem.prototype.setSegment = function(t, e) {
            var i = -1;
            this.isPaused && (this.currentRawFrame + this.firstFrame < t ? i = t : this.currentRawFrame + this.firstFrame > e && (i = e - t)), this.firstFrame = t, this.totalFrames = e - t, this.timeCompleted = this.totalFrames, -1 !== i && this.goToAndStop(i, !0)
        }, AnimationItem.prototype.playSegments = function(t, e) {
            if (e && (this.segments.length = 0), "object" == typeof t[0]) {
                var i, n = t.length;
                for (i = 0; i < n; i += 1) this.segments.push(t[i])
            } else this.segments.push(t);
            this.segments.length && e && this.adjustSegment(this.segments.shift(), 0), this.isPaused && this.play()
        }, AnimationItem.prototype.resetSegments = function(t) {
            this.segments.length = 0, this.segments.push([this.animationData.ip, this.animationData.op]), t && this.checkSegments(0)
        }, AnimationItem.prototype.checkSegments = function(t) {
            return !!this.segments.length && (this.adjustSegment(this.segments.shift(), t), !0)
        }, AnimationItem.prototype.destroy = function(t) {
            t && this.name !== t || !this.renderer || (this.renderer.destroy(), this.imagePreloader.destroy(), this.trigger("destroy"), this._cbs = null, this.onEnterFrame = null, this.onLoopComplete = null, this.onComplete = null, this.onSegmentStart = null, this.onDestroy = null, this.renderer = null, this.renderer = null, this.imagePreloader = null, this.projectInterface = null)
        }, AnimationItem.prototype.setCurrentRawFrameValue = function(t) {
            this.currentRawFrame = t, this.gotoFrame()
        }, AnimationItem.prototype.setSpeed = function(t) {
            this.playSpeed = t, this.updaFrameModifier()
        }, AnimationItem.prototype.setDirection = function(t) {
            this.playDirection = t < 0 ? -1 : 1, this.updaFrameModifier()
        }, AnimationItem.prototype.setVolume = function(t, e) {
            e && this.name !== e || this.audioController.setVolume(t)
        }, AnimationItem.prototype.getVolume = function() {
            return this.audioController.getVolume()
        }, AnimationItem.prototype.mute = function(t) {
            t && this.name !== t || this.audioController.mute()
        }, AnimationItem.prototype.unmute = function(t) {
            t && this.name !== t || this.audioController.unmute()
        }, AnimationItem.prototype.updaFrameModifier = function() {
            this.frameModifier = this.frameMult * this.playSpeed * this.playDirection, this.audioController.setRate(this.playSpeed * this.playDirection)
        }, AnimationItem.prototype.getPath = function() {
            return this.path
        }, AnimationItem.prototype.getAssetsPath = function(t) {
            var e = "";
            if (t.e) e = t.p;
            else if (this.assetsPath) {
                var i = t.p; - 1 !== i.indexOf("images/") && (i = i.split("/")[1]), e = this.assetsPath + i
            } else e = this.path, e += t.u ? t.u : "", e += t.p;
            return e
        }, AnimationItem.prototype.getAssetData = function(t) {
            for (var e = 0, i = this.assets.length; e < i;) {
                if (t === this.assets[e].id) return this.assets[e];
                e += 1
            }
            return null
        }, AnimationItem.prototype.hide = function() {
            this.renderer.hide()
        }, AnimationItem.prototype.show = function() {
            this.renderer.show()
        }, AnimationItem.prototype.getDuration = function(t) {
            return t ? this.totalFrames : this.totalFrames / this.frameRate
        }, AnimationItem.prototype.trigger = function(t) {
            if (this._cbs && this._cbs[t]) switch (t) {
                case "enterFrame":
                    this.triggerEvent(t, new BMEnterFrameEvent(t, this.currentFrame, this.totalFrames, this.frameModifier));
                    break;
                case "loopComplete":
                    this.triggerEvent(t, new BMCompleteLoopEvent(t, this.loop, this.playCount, this.frameMult));
                    break;
                case "complete":
                    this.triggerEvent(t, new BMCompleteEvent(t, this.frameMult));
                    break;
                case "segmentStart":
                    this.triggerEvent(t, new BMSegmentStartEvent(t, this.firstFrame, this.totalFrames));
                    break;
                case "destroy":
                    this.triggerEvent(t, new BMDestroyEvent(t, this));
                    break;
                default:
                    this.triggerEvent(t)
            }
            "enterFrame" === t && this.onEnterFrame && this.onEnterFrame.call(this, new BMEnterFrameEvent(t, this.currentFrame, this.totalFrames, this.frameMult)), "loopComplete" === t && this.onLoopComplete && this.onLoopComplete.call(this, new BMCompleteLoopEvent(t, this.loop, this.playCount, this.frameMult)), "complete" === t && this.onComplete && this.onComplete.call(this, new BMCompleteEvent(t, this.frameMult)), "segmentStart" === t && this.onSegmentStart && this.onSegmentStart.call(this, new BMSegmentStartEvent(t, this.firstFrame, this.totalFrames)), "destroy" === t && this.onDestroy && this.onDestroy.call(this, new BMDestroyEvent(t, this))
        }, AnimationItem.prototype.triggerRenderFrameError = function(t) {
            var e = new BMRenderFrameErrorEvent(t, this.currentFrame);
            this.triggerEvent("error", e), this.onError && this.onError.call(this, e)
        }, AnimationItem.prototype.triggerConfigError = function(t) {
            var e = new BMConfigErrorEvent(t, this.currentFrame);
            this.triggerEvent("error", e), this.onError && this.onError.call(this, e)
        };
        var Expressions = function() {
            var t = {};
            return t.initExpressions = function(t) {
                var e = 0,
                    i = [];
                t.renderer.compInterface = CompExpressionInterface(t.renderer), t.renderer.globalData.projectInterface.registerComposition(t.renderer), t.renderer.globalData.pushExpression = function() {
                    e += 1
                }, t.renderer.globalData.popExpression = function() {
                    0 === (e -= 1) && function() {
                        var t, e = i.length;
                        for (t = 0; t < e; t += 1) i[t].release();
                        i.length = 0
                    }()
                }, t.renderer.globalData.registerExpressionProperty = function(t) {
                    -1 === i.indexOf(t) && i.push(t)
                }
            }, t
        }();
        expressionsPlugin = Expressions;
        var ExpressionManager = function() {
                var ob = {},
                    Math = BMMath,
                    window = null,
                    document = null,
                    XMLHttpRequest = null,
                    fetch = null;

                function $bm_isInstanceOfArray(t) {
                    return t.constructor === Array || t.constructor === Float32Array
                }

                function isNumerable(t, e) {
                    return "number" === t || "boolean" === t || "string" === t || e instanceof Number
                }

                function $bm_neg(t) {
                    var e = typeof t;
                    if ("number" === e || "boolean" === e || t instanceof Number) return -t;
                    if ($bm_isInstanceOfArray(t)) {
                        var i, n = t.length,
                            r = [];
                        for (i = 0; i < n; i += 1) r[i] = -t[i];
                        return r
                    }
                    return t.propType ? t.v : -t
                }
                var easeInBez = BezierFactory.getBezierEasing(.333, 0, .833, .833, "easeIn").get,
                    easeOutBez = BezierFactory.getBezierEasing(.167, .167, .667, 1, "easeOut").get,
                    easeInOutBez = BezierFactory.getBezierEasing(.33, 0, .667, 1, "easeInOut").get;

                function sum(t, e) {
                    var i = typeof t,
                        n = typeof e;
                    if ("string" === i || "string" === n) return t + e;
                    if (isNumerable(i, t) && isNumerable(n, e)) return t + e;
                    if ($bm_isInstanceOfArray(t) && isNumerable(n, e)) return (t = t.slice(0))[0] += e, t;
                    if (isNumerable(i, t) && $bm_isInstanceOfArray(e)) return (e = e.slice(0))[0] = t + e[0], e;
                    if ($bm_isInstanceOfArray(t) && $bm_isInstanceOfArray(e)) {
                        for (var r = 0, s = t.length, a = e.length, o = []; r < s || r < a;)("number" == typeof t[r] || t[r] instanceof Number) && ("number" == typeof e[r] || e[r] instanceof Number) ? o[r] = t[r] + e[r] : o[r] = void 0 === e[r] ? t[r] : t[r] || e[r], r += 1;
                        return o
                    }
                    return 0
                }
                var add = sum;

                function sub(t, e) {
                    var i = typeof t,
                        n = typeof e;
                    if (isNumerable(i, t) && isNumerable(n, e)) return "string" === i && (t = parseInt(t, 10)), "string" === n && (e = parseInt(e, 10)), t - e;
                    if ($bm_isInstanceOfArray(t) && isNumerable(n, e)) return (t = t.slice(0))[0] -= e, t;
                    if (isNumerable(i, t) && $bm_isInstanceOfArray(e)) return (e = e.slice(0))[0] = t - e[0], e;
                    if ($bm_isInstanceOfArray(t) && $bm_isInstanceOfArray(e)) {
                        for (var r = 0, s = t.length, a = e.length, o = []; r < s || r < a;)("number" == typeof t[r] || t[r] instanceof Number) && ("number" == typeof e[r] || e[r] instanceof Number) ? o[r] = t[r] - e[r] : o[r] = void 0 === e[r] ? t[r] : t[r] || e[r], r += 1;
                        return o
                    }
                    return 0
                }

                function mul(t, e) {
                    var i, n, r, s = typeof t,
                        a = typeof e;
                    if (isNumerable(s, t) && isNumerable(a, e)) return t * e;
                    if ($bm_isInstanceOfArray(t) && isNumerable(a, e)) {
                        for (r = t.length, i = createTypedArray("float32", r), n = 0; n < r; n += 1) i[n] = t[n] * e;
                        return i
                    }
                    if (isNumerable(s, t) && $bm_isInstanceOfArray(e)) {
                        for (r = e.length, i = createTypedArray("float32", r), n = 0; n < r; n += 1) i[n] = t * e[n];
                        return i
                    }
                    return 0
                }

                function div(t, e) {
                    var i, n, r, s = typeof t,
                        a = typeof e;
                    if (isNumerable(s, t) && isNumerable(a, e)) return t / e;
                    if ($bm_isInstanceOfArray(t) && isNumerable(a, e)) {
                        for (r = t.length, i = createTypedArray("float32", r), n = 0; n < r; n += 1) i[n] = t[n] / e;
                        return i
                    }
                    if (isNumerable(s, t) && $bm_isInstanceOfArray(e)) {
                        for (r = e.length, i = createTypedArray("float32", r), n = 0; n < r; n += 1) i[n] = t / e[n];
                        return i
                    }
                    return 0
                }

                function mod(t, e) {
                    return "string" == typeof t && (t = parseInt(t, 10)), "string" == typeof e && (e = parseInt(e, 10)), t % e
                }
                var $bm_sum = sum,
                    $bm_sub = sub,
                    $bm_mul = mul,
                    $bm_div = div,
                    $bm_mod = mod;

                function clamp(t, e, i) {
                    if (e > i) {
                        var n = i;
                        i = e, e = n
                    }
                    return Math.min(Math.max(t, e), i)
                }

                function radiansToDegrees(t) {
                    return t / degToRads
                }
                var radians_to_degrees = radiansToDegrees;

                function degreesToRadians(t) {
                    return t * degToRads
                }
                var degrees_to_radians = radiansToDegrees,
                    helperLengthArray = [0, 0, 0, 0, 0, 0];

                function length(t, e) {
                    if ("number" == typeof t || t instanceof Number) return e = e || 0, Math.abs(t - e);
                    var i;
                    e || (e = helperLengthArray);
                    var n = Math.min(t.length, e.length),
                        r = 0;
                    for (i = 0; i < n; i += 1) r += Math.pow(e[i] - t[i], 2);
                    return Math.sqrt(r)
                }

                function normalize(t) {
                    return div(t, length(t))
                }

                function rgbToHsl(t) {
                    var e, i, n = t[0],
                        r = t[1],
                        s = t[2],
                        a = Math.max(n, r, s),
                        o = Math.min(n, r, s),
                        l = (a + o) / 2;
                    if (a === o) e = 0, i = 0;
                    else {
                        var h = a - o;
                        switch (i = l > .5 ? h / (2 - a - o) : h / (a + o), a) {
                            case n:
                                e = (r - s) / h + (r < s ? 6 : 0);
                                break;
                            case r:
                                e = (s - n) / h + 2;
                                break;
                            case s:
                                e = (n - r) / h + 4
                        }
                        e /= 6
                    }
                    return [e, i, l, t[3]]
                }

                function hue2rgb(t, e, i) {
                    return i < 0 && (i += 1), i > 1 && (i -= 1), i < 1 / 6 ? t + 6 * (e - t) * i : i < .5 ? e : i < 2 / 3 ? t + (e - t) * (2 / 3 - i) * 6 : t
                }

                function hslToRgb(t) {
                    var e, i, n, r = t[0],
                        s = t[1],
                        a = t[2];
                    if (0 === s) e = a, n = a, i = a;
                    else {
                        var o = a < .5 ? a * (1 + s) : a + s - a * s,
                            l = 2 * a - o;
                        e = hue2rgb(l, o, r + 1 / 3), i = hue2rgb(l, o, r), n = hue2rgb(l, o, r - 1 / 3)
                    }
                    return [e, i, n, t[3]]
                }

                function linear(t, e, i, n, r) {
                    if (void 0 !== n && void 0 !== r || (n = e, r = i, e = 0, i = 1), i < e) {
                        var s = i;
                        i = e, e = s
                    }
                    if (t <= e) return n;
                    if (t >= i) return r;
                    var a, o = i === e ? 0 : (t - e) / (i - e);
                    if (!n.length) return n + (r - n) * o;
                    var l = n.length,
                        h = createTypedArray("float32", l);
                    for (a = 0; a < l; a += 1) h[a] = n[a] + (r[a] - n[a]) * o;
                    return h
                }

                function random(t, e) {
                    if (void 0 === e && (void 0 === t ? (t = 0, e = 1) : (e = t, t = void 0)), e.length) {
                        var i, n = e.length;
                        t || (t = createTypedArray("float32", n));
                        var r = createTypedArray("float32", n),
                            s = BMMath.random();
                        for (i = 0; i < n; i += 1) r[i] = t[i] + s * (e[i] - t[i]);
                        return r
                    }
                    return void 0 === t && (t = 0), t + BMMath.random() * (e - t)
                }

                function createPath(t, e, i, n) {
                    var r, s = t.length,
                        a = shapePool.newElement();
                    a.setPathData(!!n, s);
                    var o, l, h = [0, 0];
                    for (r = 0; r < s; r += 1) o = e && e[r] ? e[r] : h, l = i && i[r] ? i[r] : h, a.setTripleAt(t[r][0], t[r][1], l[0] + t[r][0], l[1] + t[r][1], o[0] + t[r][0], o[1] + t[r][1], r, !0);
                    return a
                }

                function initiateExpression(elem, data, property) {
                    var val = data.x,
                        needsVelocity = /velocity(?![\w\d])/.test(val),
                        _needsRandom = -1 !== val.indexOf("random"),
                        elemType = elem.data.ty,
                        transform, $bm_transform, content, effect, thisProperty = property;
                    thisProperty.valueAtTime = thisProperty.getValueAtTime, Object.defineProperty(thisProperty, "value", {
                        get: function() {
                            return thisProperty.v
                        }
                    }), elem.comp.frameDuration = 1 / elem.comp.globalData.frameRate, elem.comp.displayStartTime = 0;
                    var inPoint = elem.data.ip / elem.comp.globalData.frameRate,
                        outPoint = elem.data.op / elem.comp.globalData.frameRate,
                        width = elem.data.sw ? elem.data.sw : 0,
                        height = elem.data.sh ? elem.data.sh : 0,
                        name = elem.data.nm,
                        loopIn, loop_in, loopOut, loop_out, smooth, toWorld, fromWorld, fromComp, toComp, fromCompToSurface, position, rotation, anchorPoint, scale, thisLayer, thisComp, mask, valueAtTime, velocityAtTime, scoped_bm_rt, expression_function = eval("[function _expression_function(){" + val + ";scoped_bm_rt=$bm_rt}]")[0],
                        numKeys = property.kf ? data.k.length : 0,
                        active = !this.data || !0 !== this.data.hd,
                        wiggle = function(t, e) {
                            var i, n, r = this.pv.length ? this.pv.length : 1,
                                s = createTypedArray("float32", r);
                            var a = Math.floor(5 * time);
                            for (i = 0, n = 0; i < a;) {
                                for (n = 0; n < r; n += 1) s[n] += -e + 2 * e * BMMath.random();
                                i += 1
                            }
                            var o = 5 * time,
                                l = o - Math.floor(o),
                                h = createTypedArray("float32", r);
                            if (r > 1) {
                                for (n = 0; n < r; n += 1) h[n] = this.pv[n] + s[n] + (-e + 2 * e * BMMath.random()) * l;
                                return h
                            }
                            return this.pv + s[0] + (-e + 2 * e * BMMath.random()) * l
                        }.bind(this);

                    function loopInDuration(t, e) {
                        return loopIn(t, e, !0)
                    }

                    function loopOutDuration(t, e) {
                        return loopOut(t, e, !0)
                    }
                    thisProperty.loopIn && (loopIn = thisProperty.loopIn.bind(thisProperty), loop_in = loopIn), thisProperty.loopOut && (loopOut = thisProperty.loopOut.bind(thisProperty), loop_out = loopOut), thisProperty.smooth && (smooth = thisProperty.smooth.bind(thisProperty)), this.getValueAtTime && (valueAtTime = this.getValueAtTime.bind(this)), this.getVelocityAtTime && (velocityAtTime = this.getVelocityAtTime.bind(this));
                    var comp = elem.comp.globalData.projectInterface.bind(elem.comp.globalData.projectInterface),
                        time, velocity, value, text, textIndex, textTotal, selectorValue;

                    function lookAt(t, e) {
                        var i = [e[0] - t[0], e[1] - t[1], e[2] - t[2]],
                            n = Math.atan2(i[0], Math.sqrt(i[1] * i[1] + i[2] * i[2])) / degToRads;
                        return [-Math.atan2(i[1], i[2]) / degToRads, n, 0]
                    }

                    function easeOut(t, e, i, n, r) {
                        return applyEase(easeOutBez, t, e, i, n, r)
                    }

                    function easeIn(t, e, i, n, r) {
                        return applyEase(easeInBez, t, e, i, n, r)
                    }

                    function ease(t, e, i, n, r) {
                        return applyEase(easeInOutBez, t, e, i, n, r)
                    }

                    function applyEase(t, e, i, n, r, s) {
                        void 0 === r ? (r = i, s = n) : e = (e - i) / (n - i), e > 1 ? e = 1 : e < 0 && (e = 0);
                        var a = t(e);
                        if ($bm_isInstanceOfArray(r)) {
                            var o, l = r.length,
                                h = createTypedArray("float32", l);
                            for (o = 0; o < l; o += 1) h[o] = (s[o] - r[o]) * a + r[o];
                            return h
                        }
                        return (s - r) * a + r
                    }

                    function nearestKey(t) {
                        var e, i, n, r = data.k.length;
                        if (data.k.length && "number" != typeof data.k[0])
                            if (i = -1, (t *= elem.comp.globalData.frameRate) < data.k[0].t) i = 1, n = data.k[0].t;
                            else {
                                for (e = 0; e < r - 1; e += 1) {
                                    if (t === data.k[e].t) {
                                        i = e + 1, n = data.k[e].t;
                                        break
                                    }
                                    if (t > data.k[e].t && t < data.k[e + 1].t) {
                                        t - data.k[e].t > data.k[e + 1].t - t ? (i = e + 2, n = data.k[e + 1].t) : (i = e + 1, n = data.k[e].t);
                                        break
                                    }
                                } - 1 === i && (i = e + 1, n = data.k[e].t)
                            }
                        else i = 0, n = 0;
                        var s = {};
                        return s.index = i, s.time = n / elem.comp.globalData.frameRate, s
                    }

                    function key(t) {
                        var e, i, n;
                        if (!data.k.length || "number" == typeof data.k[0]) throw new Error("The property has no keyframe at index " + t);
                        t -= 1, e = {
                            time: data.k[t].t / elem.comp.globalData.frameRate,
                            value: []
                        };
                        var r = Object.prototype.hasOwnProperty.call(data.k[t], "s") ? data.k[t].s : data.k[t - 1].e;
                        for (n = r.length, i = 0; i < n; i += 1) e[i] = r[i], e.value[i] = r[i];
                        return e
                    }

                    function framesToTime(t, e) {
                        return e || (e = elem.comp.globalData.frameRate), t / e
                    }

                    function timeToFrames(t, e) {
                        return t || 0 === t || (t = time), e || (e = elem.comp.globalData.frameRate), t * e
                    }

                    function seedRandom(t) {
                        BMMath.seedrandom(randSeed + t)
                    }

                    function sourceRectAtTime() {
                        return elem.sourceRectAtTime()
                    }

                    function substring(t, e) {
                        return "string" == typeof value ? void 0 === e ? value.substring(t) : value.substring(t, e) : ""
                    }

                    function substr(t, e) {
                        return "string" == typeof value ? void 0 === e ? value.substr(t) : value.substr(t, e) : ""
                    }

                    function posterizeTime(t) {
                        time = 0 === t ? 0 : Math.floor(time * t) / t, value = valueAtTime(time)
                    }
                    var index = elem.data.ind,
                        hasParent = !(!elem.hierarchy || !elem.hierarchy.length),
                        parent, randSeed = Math.floor(1e6 * Math.random()),
                        globalData = elem.globalData;

                    function executeExpression(t) {
                        return value = t, _needsRandom && seedRandom(randSeed), this.frameExpressionId === elem.globalData.frameId && "textSelector" !== this.propType ? value : ("textSelector" === this.propType && (textIndex = this.textIndex, textTotal = this.textTotal, selectorValue = this.selectorValue), thisLayer || (text = elem.layerInterface.text, thisLayer = elem.layerInterface, thisComp = elem.comp.compInterface, toWorld = thisLayer.toWorld.bind(thisLayer), fromWorld = thisLayer.fromWorld.bind(thisLayer), fromComp = thisLayer.fromComp.bind(thisLayer), toComp = thisLayer.toComp.bind(thisLayer), mask = thisLayer.mask ? thisLayer.mask.bind(thisLayer) : null, fromCompToSurface = fromComp), transform || (transform = elem.layerInterface("ADBE Transform Group"), $bm_transform = transform, transform && (anchorPoint = transform.anchorPoint)), 4 !== elemType || content || (content = thisLayer("ADBE Root Vectors Group")), effect || (effect = thisLayer(4)), (hasParent = !(!elem.hierarchy || !elem.hierarchy.length)) && !parent && (parent = elem.hierarchy[0].layerInterface), time = this.comp.renderedFrame / this.comp.globalData.frameRate, needsVelocity && (velocity = velocityAtTime(time)), expression_function(), this.frameExpressionId = elem.globalData.frameId, "shape" === scoped_bm_rt.propType && (scoped_bm_rt = scoped_bm_rt.v), scoped_bm_rt)
                    }
                    return executeExpression
                }
                return ob.initiateExpression = initiateExpression, ob
            }(),
            expressionHelpers = {
                searchExpressions: function(t, e, i) {
                    e.x && (i.k = !0, i.x = !0, i.initiateExpression = ExpressionManager.initiateExpression, i.effectsSequence.push(i.initiateExpression(t, e, i).bind(i)))
                },
                getSpeedAtTime: function(t) {
                    var e = this.getValueAtTime(t),
                        i = this.getValueAtTime(t + -.01),
                        n = 0;
                    if (e.length) {
                        var r;
                        for (r = 0; r < e.length; r += 1) n += Math.pow(i[r] - e[r], 2);
                        n = 100 * Math.sqrt(n)
                    } else n = 0;
                    return n
                },
                getVelocityAtTime: function(t) {
                    if (void 0 !== this.vel) return this.vel;
                    var e, i, n = this.getValueAtTime(t),
                        r = this.getValueAtTime(t + -.001);
                    if (n.length)
                        for (e = createTypedArray("float32", n.length), i = 0; i < n.length; i += 1) e[i] = (r[i] - n[i]) / -.001;
                    else e = (r - n) / -.001;
                    return e
                },
                getValueAtTime: function(t) {
                    return t *= this.elem.globalData.frameRate, (t -= this.offsetTime) !== this._cachingAtTime.lastFrame && (this._cachingAtTime.lastIndex = this._cachingAtTime.lastFrame < t ? this._cachingAtTime.lastIndex : 0, this._cachingAtTime.value = this.interpolateValue(t, this._cachingAtTime), this._cachingAtTime.lastFrame = t), this._cachingAtTime.value
                },
                getStaticValueAtTime: function() {
                    return this.pv
                },
                setGroupProperty: function(t) {
                    this.propertyGroup = t
                }
            };
        ! function() {
            function t(t, e, i) {
                if (!this.k || !this.keyframes) return this.pv;
                t = t ? t.toLowerCase() : "";
                var n, r, s, a, o, l = this.comp.renderedFrame,
                    h = this.keyframes,
                    c = h[h.length - 1].t;
                if (l <= c) return this.pv;
                if (i ? r = c - (n = e ? Math.abs(c - this.elem.comp.globalData.frameRate * e) : Math.max(0, c - this.elem.data.ip)) : ((!e || e > h.length - 1) && (e = h.length - 1), n = c - (r = h[h.length - 1 - e].t)), "pingpong" === t) {
                    if (Math.floor((l - r) / n) % 2 != 0) return this.getValueAtTime((n - (l - r) % n + r) / this.comp.globalData.frameRate, 0)
                } else {
                    if ("offset" === t) {
                        var p = this.getValueAtTime(r / this.comp.globalData.frameRate, 0),
                            f = this.getValueAtTime(c / this.comp.globalData.frameRate, 0),
                            d = this.getValueAtTime(((l - r) % n + r) / this.comp.globalData.frameRate, 0),
                            u = Math.floor((l - r) / n);
                        if (this.pv.length) {
                            for (a = (o = new Array(p.length)).length, s = 0; s < a; s += 1) o[s] = (f[s] - p[s]) * u + d[s];
                            return o
                        }
                        return (f - p) * u + d
                    }
                    if ("continue" === t) {
                        var m = this.getValueAtTime(c / this.comp.globalData.frameRate, 0),
                            g = this.getValueAtTime((c - .001) / this.comp.globalData.frameRate, 0);
                        if (this.pv.length) {
                            for (a = (o = new Array(m.length)).length, s = 0; s < a; s += 1) o[s] = m[s] + (m[s] - g[s]) * ((l - c) / this.comp.globalData.frameRate) / 5e-4;
                            return o
                        }
                        return m + (l - c) / .001 * (m - g)
                    }
                }
                return this.getValueAtTime(((l - r) % n + r) / this.comp.globalData.frameRate, 0)
            }

            function e(t, e, i) {
                if (!this.k) return this.pv;
                t = t ? t.toLowerCase() : "";
                var n, r, s, a, o, l = this.comp.renderedFrame,
                    h = this.keyframes,
                    c = h[0].t;
                if (l >= c) return this.pv;
                if (i ? r = c + (n = e ? Math.abs(this.elem.comp.globalData.frameRate * e) : Math.max(0, this.elem.data.op - c)) : ((!e || e > h.length - 1) && (e = h.length - 1), n = (r = h[e].t) - c), "pingpong" === t) {
                    if (Math.floor((c - l) / n) % 2 == 0) return this.getValueAtTime(((c - l) % n + c) / this.comp.globalData.frameRate, 0)
                } else {
                    if ("offset" === t) {
                        var p = this.getValueAtTime(c / this.comp.globalData.frameRate, 0),
                            f = this.getValueAtTime(r / this.comp.globalData.frameRate, 0),
                            d = this.getValueAtTime((n - (c - l) % n + c) / this.comp.globalData.frameRate, 0),
                            u = Math.floor((c - l) / n) + 1;
                        if (this.pv.length) {
                            for (a = (o = new Array(p.length)).length, s = 0; s < a; s += 1) o[s] = d[s] - (f[s] - p[s]) * u;
                            return o
                        }
                        return d - (f - p) * u
                    }
                    if ("continue" === t) {
                        var m = this.getValueAtTime(c / this.comp.globalData.frameRate, 0),
                            g = this.getValueAtTime((c + .001) / this.comp.globalData.frameRate, 0);
                        if (this.pv.length) {
                            for (a = (o = new Array(m.length)).length, s = 0; s < a; s += 1) o[s] = m[s] + (m[s] - g[s]) * (c - l) / .001;
                            return o
                        }
                        return m + (m - g) * (c - l) / .001
                    }
                }
                return this.getValueAtTime((n - ((c - l) % n + c)) / this.comp.globalData.frameRate, 0)
            }

            function i(t, e) {
                if (!this.k) return this.pv;
                if (t = .5 * (t || .4), (e = Math.floor(e || 5)) <= 1) return this.pv;
                var i, n, r = this.comp.renderedFrame / this.comp.globalData.frameRate,
                    s = r - t,
                    a = e > 1 ? (r + t - s) / (e - 1) : 1,
                    o = 0,
                    l = 0;
                for (i = this.pv.length ? createTypedArray("float32", this.pv.length) : 0; o < e;) {
                    if (n = this.getValueAtTime(s + o * a), this.pv.length)
                        for (l = 0; l < this.pv.length; l += 1) i[l] += n[l];
                    else i += n;
                    o += 1
                }
                if (this.pv.length)
                    for (l = 0; l < this.pv.length; l += 1) i[l] /= e;
                else i /= e;
                return i
            }

            function n(t) {
                this._transformCachingAtTime || (this._transformCachingAtTime = {
                    v: new Matrix
                });
                var e = this._transformCachingAtTime.v;
                if (e.cloneFromProps(this.pre.props), this.appliedTransformations < 1) {
                    var i = this.a.getValueAtTime(t);
                    e.translate(-i[0] * this.a.mult, -i[1] * this.a.mult, i[2] * this.a.mult)
                }
                if (this.appliedTransformations < 2) {
                    var n = this.s.getValueAtTime(t);
                    e.scale(n[0] * this.s.mult, n[1] * this.s.mult, n[2] * this.s.mult)
                }
                if (this.sk && this.appliedTransformations < 3) {
                    var r = this.sk.getValueAtTime(t),
                        s = this.sa.getValueAtTime(t);
                    e.skewFromAxis(-r * this.sk.mult, s * this.sa.mult)
                }
                if (this.r && this.appliedTransformations < 4) {
                    var a = this.r.getValueAtTime(t);
                    e.rotate(-a * this.r.mult)
                } else if (!this.r && this.appliedTransformations < 4) {
                    var o = this.rz.getValueAtTime(t),
                        l = this.ry.getValueAtTime(t),
                        h = this.rx.getValueAtTime(t),
                        c = this.or.getValueAtTime(t);
                    e.rotateZ(-o * this.rz.mult).rotateY(l * this.ry.mult).rotateX(h * this.rx.mult).rotateZ(-c[2] * this.or.mult).rotateY(c[1] * this.or.mult).rotateX(c[0] * this.or.mult)
                }
                if (this.data.p && this.data.p.s) {
                    var p = this.px.getValueAtTime(t),
                        f = this.py.getValueAtTime(t);
                    if (this.data.p.z) {
                        var d = this.pz.getValueAtTime(t);
                        e.translate(p * this.px.mult, f * this.py.mult, -d * this.pz.mult)
                    } else e.translate(p * this.px.mult, f * this.py.mult, 0)
                } else {
                    var u = this.p.getValueAtTime(t);
                    e.translate(u[0] * this.p.mult, u[1] * this.p.mult, -u[2] * this.p.mult)
                }
                return e
            }

            function r() {
                return this.v.clone(new Matrix)
            }
            var s = TransformPropertyFactory.getTransformProperty;
            TransformPropertyFactory.getTransformProperty = function(t, e, i) {
                var a = s(t, e, i);
                return a.dynamicProperties.length ? a.getValueAtTime = n.bind(a) : a.getValueAtTime = r.bind(a), a.setGroupProperty = expressionHelpers.setGroupProperty, a
            };
            var a = PropertyFactory.getProp;
            PropertyFactory.getProp = function(n, r, s, o, l) {
                var h = a(n, r, s, o, l);
                h.kf ? h.getValueAtTime = expressionHelpers.getValueAtTime.bind(h) : h.getValueAtTime = expressionHelpers.getStaticValueAtTime.bind(h), h.setGroupProperty = expressionHelpers.setGroupProperty, h.loopOut = t, h.loopIn = e, h.smooth = i, h.getVelocityAtTime = expressionHelpers.getVelocityAtTime.bind(h), h.getSpeedAtTime = expressionHelpers.getSpeedAtTime.bind(h), h.numKeys = 1 === r.a ? r.k.length : 0, h.propertyIndex = r.ix;
                var c = 0;
                return 0 !== s && (c = createTypedArray("float32", 1 === r.a ? r.k[0].s.length : r.k.length)), h._cachingAtTime = {
                    lastFrame: initialDefaultFrame,
                    lastIndex: 0,
                    value: c
                }, expressionHelpers.searchExpressions(n, r, h), h.k && l.addDynamicProperty(h), h
            };
            var o = ShapePropertyFactory.getConstructorFunction(),
                l = ShapePropertyFactory.getKeyframedConstructorFunction();

            function h() {}
            h.prototype = {
                vertices: function(t, e) {
                    this.k && this.getValue();
                    var i, n = this.v;
                    void 0 !== e && (n = this.getValueAtTime(e, 0));
                    var r = n._length,
                        s = n[t],
                        a = n.v,
                        o = createSizedArray(r);
                    for (i = 0; i < r; i += 1) o[i] = "i" === t || "o" === t ? [s[i][0] - a[i][0], s[i][1] - a[i][1]] : [s[i][0], s[i][1]];
                    return o
                },
                points: function(t) {
                    return this.vertices("v", t)
                },
                inTangents: function(t) {
                    return this.vertices("i", t)
                },
                outTangents: function(t) {
                    return this.vertices("o", t)
                },
                isClosed: function() {
                    return this.v.c
                },
                pointOnPath: function(t, e) {
                    var i = this.v;
                    void 0 !== e && (i = this.getValueAtTime(e, 0)), this._segmentsLength || (this._segmentsLength = bez.getSegmentsLength(i));
                    for (var n, r = this._segmentsLength, s = r.lengths, a = r.totalLength * t, o = 0, l = s.length, h = 0; o < l;) {
                        if (h + s[o].addedLength > a) {
                            var c = o,
                                p = i.c && o === l - 1 ? 0 : o + 1,
                                f = (a - h) / s[o].addedLength;
                            n = bez.getPointInSegment(i.v[c], i.v[p], i.o[c], i.i[p], f, s[o]);
                            break
                        }
                        h += s[o].addedLength, o += 1
                    }
                    return n || (n = i.c ? [i.v[0][0], i.v[0][1]] : [i.v[i._length - 1][0], i.v[i._length - 1][1]]), n
                },
                vectorOnPath: function(t, e, i) {
                    1 == t ? t = this.v.c : 0 == t && (t = .999);
                    var n = this.pointOnPath(t, e),
                        r = this.pointOnPath(t + .001, e),
                        s = r[0] - n[0],
                        a = r[1] - n[1],
                        o = Math.sqrt(Math.pow(s, 2) + Math.pow(a, 2));
                    return 0 === o ? [0, 0] : "tangent" === i ? [s / o, a / o] : [-a / o, s / o]
                },
                tangentOnPath: function(t, e) {
                    return this.vectorOnPath(t, e, "tangent")
                },
                normalOnPath: function(t, e) {
                    return this.vectorOnPath(t, e, "normal")
                },
                setGroupProperty: expressionHelpers.setGroupProperty,
                getValueAtTime: expressionHelpers.getStaticValueAtTime
            }, extendPrototype([h], o), extendPrototype([h], l), l.prototype.getValueAtTime = function(t) {
                return this._cachingAtTime || (this._cachingAtTime = {
                    shapeValue: shapePool.clone(this.pv),
                    lastIndex: 0,
                    lastTime: initialDefaultFrame
                }), t *= this.elem.globalData.frameRate, (t -= this.offsetTime) !== this._cachingAtTime.lastTime && (this._cachingAtTime.lastIndex = this._cachingAtTime.lastTime < t ? this._caching.lastIndex : 0, this._cachingAtTime.lastTime = t, this.interpolateShape(t, this._cachingAtTime.shapeValue, this._cachingAtTime)), this._cachingAtTime.shapeValue
            }, l.prototype.initiateExpression = ExpressionManager.initiateExpression;
            var c = ShapePropertyFactory.getShapeProp;
            ShapePropertyFactory.getShapeProp = function(t, e, i, n, r) {
                var s = c(t, e, i, n, r);
                return s.propertyIndex = e.ix, s.lock = !1, 3 === i ? expressionHelpers.searchExpressions(t, e.pt, s) : 4 === i && expressionHelpers.searchExpressions(t, e.ks, s), s.k && t.addDynamicProperty(s), s
            }
        }(), TextProperty.prototype.getExpressionValue = function(t, e) {
            var i = this.calculateExpression(e);
            if (t.t !== i) {
                var n = {};
                return this.copyData(n, t), n.t = i.toString(), n.__complete = !1, n
            }
            return t
        }, TextProperty.prototype.searchProperty = function() {
            var t = this.searchKeyframes(),
                e = this.searchExpressions();
            return this.kf = t || e, this.kf
        }, TextProperty.prototype.searchExpressions = function() {
            return this.data.d.x ? (this.calculateExpression = ExpressionManager.initiateExpression.bind(this)(this.elem, this.data.d, this), this.addEffect(this.getExpressionValue.bind(this)), !0) : null
        };
        var ShapePathInterface = function(t, e, i) {
                var n = e.sh;

                function r(t) {
                    return "Shape" === t || "shape" === t || "Path" === t || "path" === t || "ADBE Vector Shape" === t || 2 === t ? r.path : null
                }
                var s = propertyGroupFactory(r, i);
                return n.setGroupProperty(PropertyInterface("Path", s)), Object.defineProperties(r, {
                    path: {
                        get: function() {
                            return n.k && n.getValue(), n
                        }
                    },
                    shape: {
                        get: function() {
                            return n.k && n.getValue(), n
                        }
                    },
                    _name: {
                        value: t.nm
                    },
                    ix: {
                        value: t.ix
                    },
                    propertyIndex: {
                        value: t.ix
                    },
                    mn: {
                        value: t.mn
                    },
                    propertyGroup: {
                        value: i
                    }
                }), r
            },
            propertyGroupFactory = function(t, e) {
                return function(i) {
                    return (i = void 0 === i ? 1 : i) <= 0 ? t : e(i - 1)
                }
            },
            PropertyInterface = function(t, e) {
                var i = {
                    _name: t
                };
                return function(t) {
                    return (t = void 0 === t ? 1 : t) <= 0 ? i : e(t - 1)
                }
            },
            ShapeExpressionInterface = function() {
                function t(t, o, d) {
                    var u, m = [],
                        g = t ? t.length : 0;
                    for (u = 0; u < g; u += 1) "gr" === t[u].ty ? m.push(e(t[u], o[u], d)) : "fl" === t[u].ty ? m.push(i(t[u], o[u], d)) : "st" === t[u].ty ? m.push(s(t[u], o[u], d)) : "tm" === t[u].ty ? m.push(a(t[u], o[u], d)) : "tr" === t[u].ty || ("el" === t[u].ty ? m.push(l(t[u], o[u], d)) : "sr" === t[u].ty ? m.push(h(t[u], o[u], d)) : "sh" === t[u].ty ? m.push(ShapePathInterface(t[u], o[u], d)) : "rc" === t[u].ty ? m.push(c(t[u], o[u], d)) : "rd" === t[u].ty ? m.push(p(t[u], o[u], d)) : "rp" === t[u].ty ? m.push(f(t[u], o[u], d)) : "gf" === t[u].ty ? m.push(n(t[u], o[u], d)) : m.push(r(t[u], o[u])));
                    return m
                }

                function e(e, i, n) {
                    var r = function(t) {
                        switch (t) {
                            case "ADBE Vectors Group":
                            case "Contents":
                            case 2:
                                return r.content;
                            default:
                                return r.transform
                        }
                    };
                    r.propertyGroup = propertyGroupFactory(r, n);
                    var s = function(e, i, n) {
                            var r, s = function(t) {
                                for (var e = 0, i = r.length; e < i;) {
                                    if (r[e]._name === t || r[e].mn === t || r[e].propertyIndex === t || r[e].ix === t || r[e].ind === t) return r[e];
                                    e += 1
                                }
                                return "number" == typeof t ? r[t - 1] : null
                            };
                            s.propertyGroup = propertyGroupFactory(s, n), r = t(e.it, i.it, s.propertyGroup), s.numProperties = r.length;
                            var a = o(e.it[e.it.length - 1], i.it[i.it.length - 1], s.propertyGroup);
                            return s.transform = a, s.propertyIndex = e.cix, s._name = e.nm, s
                        }(e, i, r.propertyGroup),
                        a = o(e.it[e.it.length - 1], i.it[i.it.length - 1], r.propertyGroup);
                    return r.content = s, r.transform = a, Object.defineProperty(r, "_name", {
                        get: function() {
                            return e.nm
                        }
                    }), r.numProperties = e.np, r.propertyIndex = e.ix, r.nm = e.nm, r.mn = e.mn, r
                }

                function i(t, e, i) {
                    function n(t) {
                        return "Color" === t || "color" === t ? n.color : "Opacity" === t || "opacity" === t ? n.opacity : null
                    }
                    return Object.defineProperties(n, {
                        color: {
                            get: ExpressionPropertyInterface(e.c)
                        },
                        opacity: {
                            get: ExpressionPropertyInterface(e.o)
                        },
                        _name: {
                            value: t.nm
                        },
                        mn: {
                            value: t.mn
                        }
                    }), e.c.setGroupProperty(PropertyInterface("Color", i)), e.o.setGroupProperty(PropertyInterface("Opacity", i)), n
                }

                function n(t, e, i) {
                    function n(t) {
                        return "Start Point" === t || "start point" === t ? n.startPoint : "End Point" === t || "end point" === t ? n.endPoint : "Opacity" === t || "opacity" === t ? n.opacity : null
                    }
                    return Object.defineProperties(n, {
                        startPoint: {
                            get: ExpressionPropertyInterface(e.s)
                        },
                        endPoint: {
                            get: ExpressionPropertyInterface(e.e)
                        },
                        opacity: {
                            get: ExpressionPropertyInterface(e.o)
                        },
                        type: {
                            get: function() {
                                return "a"
                            }
                        },
                        _name: {
                            value: t.nm
                        },
                        mn: {
                            value: t.mn
                        }
                    }), e.s.setGroupProperty(PropertyInterface("Start Point", i)), e.e.setGroupProperty(PropertyInterface("End Point", i)), e.o.setGroupProperty(PropertyInterface("Opacity", i)), n
                }

                function r() {
                    return function() {
                        return null
                    }
                }

                function s(t, e, i) {
                    var n, r = propertyGroupFactory(h, i),
                        s = propertyGroupFactory(l, r);

                    function a(i) {
                        Object.defineProperty(l, t.d[i].nm, {
                            get: ExpressionPropertyInterface(e.d.dataProps[i].p)
                        })
                    }
                    var o = t.d ? t.d.length : 0,
                        l = {};
                    for (n = 0; n < o; n += 1) a(n), e.d.dataProps[n].p.setGroupProperty(s);

                    function h(t) {
                        return "Color" === t || "color" === t ? h.color : "Opacity" === t || "opacity" === t ? h.opacity : "Stroke Width" === t || "stroke width" === t ? h.strokeWidth : null
                    }
                    return Object.defineProperties(h, {
                        color: {
                            get: ExpressionPropertyInterface(e.c)
                        },
                        opacity: {
                            get: ExpressionPropertyInterface(e.o)
                        },
                        strokeWidth: {
                            get: ExpressionPropertyInterface(e.w)
                        },
                        dash: {
                            get: function() {
                                return l
                            }
                        },
                        _name: {
                            value: t.nm
                        },
                        mn: {
                            value: t.mn
                        }
                    }), e.c.setGroupProperty(PropertyInterface("Color", r)), e.o.setGroupProperty(PropertyInterface("Opacity", r)), e.w.setGroupProperty(PropertyInterface("Stroke Width", r)), h
                }

                function a(t, e, i) {
                    function n(e) {
                        return e === t.e.ix || "End" === e || "end" === e ? n.end : e === t.s.ix ? n.start : e === t.o.ix ? n.offset : null
                    }
                    var r = propertyGroupFactory(n, i);
                    return n.propertyIndex = t.ix, e.s.setGroupProperty(PropertyInterface("Start", r)), e.e.setGroupProperty(PropertyInterface("End", r)), e.o.setGroupProperty(PropertyInterface("Offset", r)), n.propertyIndex = t.ix, n.propertyGroup = i, Object.defineProperties(n, {
                        start: {
                            get: ExpressionPropertyInterface(e.s)
                        },
                        end: {
                            get: ExpressionPropertyInterface(e.e)
                        },
                        offset: {
                            get: ExpressionPropertyInterface(e.o)
                        },
                        _name: {
                            value: t.nm
                        }
                    }), n.mn = t.mn, n
                }

                function o(t, e, i) {
                    function n(e) {
                        return t.a.ix === e || "Anchor Point" === e ? n.anchorPoint : t.o.ix === e || "Opacity" === e ? n.opacity : t.p.ix === e || "Position" === e ? n.position : t.r.ix === e || "Rotation" === e || "ADBE Vector Rotation" === e ? n.rotation : t.s.ix === e || "Scale" === e ? n.scale : t.sk && t.sk.ix === e || "Skew" === e ? n.skew : t.sa && t.sa.ix === e || "Skew Axis" === e ? n.skewAxis : null
                    }
                    var r = propertyGroupFactory(n, i);
                    return e.transform.mProps.o.setGroupProperty(PropertyInterface("Opacity", r)), e.transform.mProps.p.setGroupProperty(PropertyInterface("Position", r)), e.transform.mProps.a.setGroupProperty(PropertyInterface("Anchor Point", r)), e.transform.mProps.s.setGroupProperty(PropertyInterface("Scale", r)), e.transform.mProps.r.setGroupProperty(PropertyInterface("Rotation", r)), e.transform.mProps.sk && (e.transform.mProps.sk.setGroupProperty(PropertyInterface("Skew", r)), e.transform.mProps.sa.setGroupProperty(PropertyInterface("Skew Angle", r))), e.transform.op.setGroupProperty(PropertyInterface("Opacity", r)), Object.defineProperties(n, {
                        opacity: {
                            get: ExpressionPropertyInterface(e.transform.mProps.o)
                        },
                        position: {
                            get: ExpressionPropertyInterface(e.transform.mProps.p)
                        },
                        anchorPoint: {
                            get: ExpressionPropertyInterface(e.transform.mProps.a)
                        },
                        scale: {
                            get: ExpressionPropertyInterface(e.transform.mProps.s)
                        },
                        rotation: {
                            get: ExpressionPropertyInterface(e.transform.mProps.r)
                        },
                        skew: {
                            get: ExpressionPropertyInterface(e.transform.mProps.sk)
                        },
                        skewAxis: {
                            get: ExpressionPropertyInterface(e.transform.mProps.sa)
                        },
                        _name: {
                            value: t.nm
                        }
                    }), n.ty = "tr", n.mn = t.mn, n.propertyGroup = i, n
                }

                function l(t, e, i) {
                    function n(e) {
                        return t.p.ix === e ? n.position : t.s.ix === e ? n.size : null
                    }
                    var r = propertyGroupFactory(n, i);
                    n.propertyIndex = t.ix;
                    var s = "tm" === e.sh.ty ? e.sh.prop : e.sh;
                    return s.s.setGroupProperty(PropertyInterface("Size", r)), s.p.setGroupProperty(PropertyInterface("Position", r)), Object.defineProperties(n, {
                        size: {
                            get: ExpressionPropertyInterface(s.s)
                        },
                        position: {
                            get: ExpressionPropertyInterface(s.p)
                        },
                        _name: {
                            value: t.nm
                        }
                    }), n.mn = t.mn, n
                }

                function h(t, e, i) {
                    function n(e) {
                        return t.p.ix === e ? n.position : t.r.ix === e ? n.rotation : t.pt.ix === e ? n.points : t.or.ix === e || "ADBE Vector Star Outer Radius" === e ? n.outerRadius : t.os.ix === e ? n.outerRoundness : !t.ir || t.ir.ix !== e && "ADBE Vector Star Inner Radius" !== e ? t.is && t.is.ix === e ? n.innerRoundness : null : n.innerRadius
                    }
                    var r = propertyGroupFactory(n, i),
                        s = "tm" === e.sh.ty ? e.sh.prop : e.sh;
                    return n.propertyIndex = t.ix, s.or.setGroupProperty(PropertyInterface("Outer Radius", r)), s.os.setGroupProperty(PropertyInterface("Outer Roundness", r)), s.pt.setGroupProperty(PropertyInterface("Points", r)), s.p.setGroupProperty(PropertyInterface("Position", r)), s.r.setGroupProperty(PropertyInterface("Rotation", r)), t.ir && (s.ir.setGroupProperty(PropertyInterface("Inner Radius", r)), s.is.setGroupProperty(PropertyInterface("Inner Roundness", r))), Object.defineProperties(n, {
                        position: {
                            get: ExpressionPropertyInterface(s.p)
                        },
                        rotation: {
                            get: ExpressionPropertyInterface(s.r)
                        },
                        points: {
                            get: ExpressionPropertyInterface(s.pt)
                        },
                        outerRadius: {
                            get: ExpressionPropertyInterface(s.or)
                        },
                        outerRoundness: {
                            get: ExpressionPropertyInterface(s.os)
                        },
                        innerRadius: {
                            get: ExpressionPropertyInterface(s.ir)
                        },
                        innerRoundness: {
                            get: ExpressionPropertyInterface(s.is)
                        },
                        _name: {
                            value: t.nm
                        }
                    }), n.mn = t.mn, n
                }

                function c(t, e, i) {
                    function n(e) {
                        return t.p.ix === e ? n.position : t.r.ix === e ? n.roundness : t.s.ix === e || "Size" === e || "ADBE Vector Rect Size" === e ? n.size : null
                    }
                    var r = propertyGroupFactory(n, i),
                        s = "tm" === e.sh.ty ? e.sh.prop : e.sh;
                    return n.propertyIndex = t.ix, s.p.setGroupProperty(PropertyInterface("Position", r)), s.s.setGroupProperty(PropertyInterface("Size", r)), s.r.setGroupProperty(PropertyInterface("Rotation", r)), Object.defineProperties(n, {
                        position: {
                            get: ExpressionPropertyInterface(s.p)
                        },
                        roundness: {
                            get: ExpressionPropertyInterface(s.r)
                        },
                        size: {
                            get: ExpressionPropertyInterface(s.s)
                        },
                        _name: {
                            value: t.nm
                        }
                    }), n.mn = t.mn, n
                }

                function p(t, e, i) {
                    function n(e) {
                        return t.r.ix === e || "Round Corners 1" === e ? n.radius : null
                    }
                    var r = propertyGroupFactory(n, i),
                        s = e;
                    return n.propertyIndex = t.ix, s.rd.setGroupProperty(PropertyInterface("Radius", r)), Object.defineProperties(n, {
                        radius: {
                            get: ExpressionPropertyInterface(s.rd)
                        },
                        _name: {
                            value: t.nm
                        }
                    }), n.mn = t.mn, n
                }

                function f(t, e, i) {
                    function n(e) {
                        return t.c.ix === e || "Copies" === e ? n.copies : t.o.ix === e || "Offset" === e ? n.offset : null
                    }
                    var r = propertyGroupFactory(n, i),
                        s = e;
                    return n.propertyIndex = t.ix, s.c.setGroupProperty(PropertyInterface("Copies", r)), s.o.setGroupProperty(PropertyInterface("Offset", r)), Object.defineProperties(n, {
                        copies: {
                            get: ExpressionPropertyInterface(s.c)
                        },
                        offset: {
                            get: ExpressionPropertyInterface(s.o)
                        },
                        _name: {
                            value: t.nm
                        }
                    }), n.mn = t.mn, n
                }
                return function(e, i, n) {
                    var r;

                    function s(t) {
                        if ("number" == typeof t) return 0 === (t = void 0 === t ? 1 : t) ? n : r[t - 1];
                        for (var e = 0, i = r.length; e < i;) {
                            if (r[e]._name === t) return r[e];
                            e += 1
                        }
                        return null
                    }
                    return s.propertyGroup = propertyGroupFactory(s, (function() {
                        return n
                    })), r = t(e, i, s.propertyGroup), s.numProperties = r.length, s._name = "Contents", s
                }
            }(),
            TextExpressionInterface = function(t) {
                var e;

                function i(t) {
                    switch (t) {
                        case "ADBE Text Document":
                            return i.sourceText;
                        default:
                            return null
                    }
                }
                return Object.defineProperty(i, "sourceText", {
                    get: function() {
                        t.textProperty.getValue();
                        var i = t.textProperty.currentData.t;
                        return void 0 !== i && (t.textProperty.currentData.t = void 0, (e = new String(i)).value = i || new String(i)), e
                    }
                }), i
            },
            LayerExpressionInterface = function() {
                function t(t) {
                    var e = new Matrix;
                    void 0 !== t ? this._elem.finalTransform.mProp.getValueAtTime(t).clone(e) : this._elem.finalTransform.mProp.applyToMatrix(e);
                    return e
                }

                function e(t, e) {
                    var i = this.getMatrix(e);
                    return i.props[12] = 0, i.props[13] = 0, i.props[14] = 0, this.applyPoint(i, t)
                }

                function i(t, e) {
                    var i = this.getMatrix(e);
                    return this.applyPoint(i, t)
                }

                function n(t, e) {
                    var i = this.getMatrix(e);
                    return i.props[12] = 0, i.props[13] = 0, i.props[14] = 0, this.invertPoint(i, t)
                }

                function r(t, e) {
                    var i = this.getMatrix(e);
                    return this.invertPoint(i, t)
                }

                function s(t, e) {
                    if (this._elem.hierarchy && this._elem.hierarchy.length) {
                        var i, n = this._elem.hierarchy.length;
                        for (i = 0; i < n; i += 1) this._elem.hierarchy[i].finalTransform.mProp.applyToMatrix(t)
                    }
                    return t.applyToPointArray(e[0], e[1], e[2] || 0)
                }

                function a(t, e) {
                    if (this._elem.hierarchy && this._elem.hierarchy.length) {
                        var i, n = this._elem.hierarchy.length;
                        for (i = 0; i < n; i += 1) this._elem.hierarchy[i].finalTransform.mProp.applyToMatrix(t)
                    }
                    return t.inversePoint(e)
                }

                function o(t) {
                    var e = new Matrix;
                    if (e.reset(), this._elem.finalTransform.mProp.applyToMatrix(e), this._elem.hierarchy && this._elem.hierarchy.length) {
                        var i, n = this._elem.hierarchy.length;
                        for (i = 0; i < n; i += 1) this._elem.hierarchy[i].finalTransform.mProp.applyToMatrix(e);
                        return e.inversePoint(t)
                    }
                    return e.inversePoint(t)
                }

                function l() {
                    return [1, 1, 1, 1]
                }
                return function(h) {
                    var c;

                    function p(t) {
                        switch (t) {
                            case "ADBE Root Vectors Group":
                            case "Contents":
                            case 2:
                                return p.shapeInterface;
                            case 1:
                            case 6:
                            case "Transform":
                            case "transform":
                            case "ADBE Transform Group":
                                return c;
                            case 4:
                            case "ADBE Effect Parade":
                            case "effects":
                            case "Effects":
                                return p.effect;
                            case "ADBE Text Properties":
                                return p.textInterface;
                            default:
                                return null
                        }
                    }
                    p.getMatrix = t, p.invertPoint = a, p.applyPoint = s, p.toWorld = i, p.toWorldVec = e, p.fromWorld = r, p.fromWorldVec = n, p.toComp = i, p.fromComp = o, p.sampleImage = l, p.sourceRectAtTime = h.sourceRectAtTime.bind(h), p._elem = h;
                    var f = getDescriptor(c = TransformExpressionInterface(h.finalTransform.mProp), "anchorPoint");
                    return Object.defineProperties(p, {
                        hasParent: {
                            get: function() {
                                return h.hierarchy.length
                            }
                        },
                        parent: {
                            get: function() {
                                return h.hierarchy[0].layerInterface
                            }
                        },
                        rotation: getDescriptor(c, "rotation"),
                        scale: getDescriptor(c, "scale"),
                        position: getDescriptor(c, "position"),
                        opacity: getDescriptor(c, "opacity"),
                        anchorPoint: f,
                        anchor_point: f,
                        transform: {
                            get: function() {
                                return c
                            }
                        },
                        active: {
                            get: function() {
                                return h.isInRange
                            }
                        }
                    }), p.startTime = h.data.st, p.index = h.data.ind, p.source = h.data.refId, p.height = 0 === h.data.ty ? h.data.h : 100, p.width = 0 === h.data.ty ? h.data.w : 100, p.inPoint = h.data.ip / h.comp.globalData.frameRate, p.outPoint = h.data.op / h.comp.globalData.frameRate, p._name = h.data.nm, p.registerMaskInterface = function(t) {
                        p.mask = new MaskManagerInterface(t, h)
                    }, p.registerEffectsInterface = function(t) {
                        p.effect = t
                    }, p
                }
            }(),
            FootageInterface = (dataInterfaceFactory = function(t) {
                function e(t) {
                    return "Outline" === t ? e.outlineInterface() : null
                }
                return e._name = "Outline", e.outlineInterface = function(t) {
                    var e = "",
                        i = t.getFootageData();

                    function n(t) {
                        if (i[t]) return e = t, "object" == typeof(i = i[t]) ? n : i;
                        var r = t.indexOf(e);
                        if (-1 !== r) {
                            var s = parseInt(t.substr(r + e.length), 10);
                            return "object" == typeof(i = i[s]) ? n : i
                        }
                        return ""
                    }
                    return function() {
                        return e = "", i = t.getFootageData(), n
                    }
                }(t), e
            }, function(t) {
                function e(t) {
                    return "Data" === t ? e.dataInterface : null
                }
                return e._name = "Data", e.dataInterface = dataInterfaceFactory(t), e
            }),
            dataInterfaceFactory, CompExpressionInterface = function(t) {
                function e(e) {
                    for (var i = 0, n = t.layers.length; i < n;) {
                        if (t.layers[i].nm === e || t.layers[i].ind === e) return t.elements[i].layerInterface;
                        i += 1
                    }
                    return null
                }
                return Object.defineProperty(e, "_name", {
                    value: t.data.nm
                }), e.layer = e, e.pixelAspect = 1, e.height = t.data.h || t.globalData.compSize.h, e.width = t.data.w || t.globalData.compSize.w, e.pixelAspect = 1, e.frameDuration = 1 / t.globalData.frameRate, e.displayStartTime = 0, e.numLayers = t.layers.length, e
            },
            TransformExpressionInterface = function(t) {
                function e(t) {
                    switch (t) {
                        case "scale":
                        case "Scale":
                        case "ADBE Scale":
                        case 6:
                            return e.scale;
                        case "rotation":
                        case "Rotation":
                        case "ADBE Rotation":
                        case "ADBE Rotate Z":
                        case 10:
                            return e.rotation;
                        case "ADBE Rotate X":
                            return e.xRotation;
                        case "ADBE Rotate Y":
                            return e.yRotation;
                        case "position":
                        case "Position":
                        case "ADBE Position":
                        case 2:
                            return e.position;
                        case "ADBE Position_0":
                            return e.xPosition;
                        case "ADBE Position_1":
                            return e.yPosition;
                        case "ADBE Position_2":
                            return e.zPosition;
                        case "anchorPoint":
                        case "AnchorPoint":
                        case "Anchor Point":
                        case "ADBE AnchorPoint":
                        case 1:
                            return e.anchorPoint;
                        case "opacity":
                        case "Opacity":
                        case 11:
                            return e.opacity;
                        default:
                            return null
                    }
                }
                var i, n, r, s;
                return Object.defineProperty(e, "rotation", {
                    get: ExpressionPropertyInterface(t.r || t.rz)
                }), Object.defineProperty(e, "zRotation", {
                    get: ExpressionPropertyInterface(t.rz || t.r)
                }), Object.defineProperty(e, "xRotation", {
                    get: ExpressionPropertyInterface(t.rx)
                }), Object.defineProperty(e, "yRotation", {
                    get: ExpressionPropertyInterface(t.ry)
                }), Object.defineProperty(e, "scale", {
                    get: ExpressionPropertyInterface(t.s)
                }), t.p ? s = ExpressionPropertyInterface(t.p) : (i = ExpressionPropertyInterface(t.px), n = ExpressionPropertyInterface(t.py), t.pz && (r = ExpressionPropertyInterface(t.pz))), Object.defineProperty(e, "position", {
                    get: function() {
                        return t.p ? s() : [i(), n(), r ? r() : 0]
                    }
                }), Object.defineProperty(e, "xPosition", {
                    get: ExpressionPropertyInterface(t.px)
                }), Object.defineProperty(e, "yPosition", {
                    get: ExpressionPropertyInterface(t.py)
                }), Object.defineProperty(e, "zPosition", {
                    get: ExpressionPropertyInterface(t.pz)
                }), Object.defineProperty(e, "anchorPoint", {
                    get: ExpressionPropertyInterface(t.a)
                }), Object.defineProperty(e, "opacity", {
                    get: ExpressionPropertyInterface(t.o)
                }), Object.defineProperty(e, "skew", {
                    get: ExpressionPropertyInterface(t.sk)
                }), Object.defineProperty(e, "skewAxis", {
                    get: ExpressionPropertyInterface(t.sa)
                }), Object.defineProperty(e, "orientation", {
                    get: ExpressionPropertyInterface(t.or)
                }), e
            },
            ProjectInterface = function() {
                function t(t) {
                    this.compositions.push(t)
                }
                return function() {
                    function e(t) {
                        for (var e = 0, i = this.compositions.length; e < i;) {
                            if (this.compositions[e].data && this.compositions[e].data.nm === t) return this.compositions[e].prepareFrame && this.compositions[e].data.xt && this.compositions[e].prepareFrame(this.currentFrame), this.compositions[e].compInterface;
                            e += 1
                        }
                        return null
                    }
                    return e.compositions = [], e.currentFrame = 0, e.registerComposition = t, e
                }
            }(),
            EffectsExpressionInterface = function() {
                function t(i, n, r, s) {
                    function a(t) {
                        for (var e = i.ef, n = 0, r = e.length; n < r;) {
                            if (t === e[n].nm || t === e[n].mn || t === e[n].ix) return 5 === e[n].ty ? h[n] : h[n]();
                            n += 1
                        }
                        throw new Error
                    }
                    var o, l = propertyGroupFactory(a, r),
                        h = [],
                        c = i.ef.length;
                    for (o = 0; o < c; o += 1) 5 === i.ef[o].ty ? h.push(t(i.ef[o], n.effectElements[o], n.effectElements[o].propertyGroup, s)) : h.push(e(n.effectElements[o], i.ef[o].ty, s, l));
                    return "ADBE Color Control" === i.mn && Object.defineProperty(a, "color", {
                        get: function() {
                            return h[0]()
                        }
                    }), Object.defineProperties(a, {
                        numProperties: {
                            get: function() {
                                return i.np
                            }
                        },
                        _name: {
                            value: i.nm
                        },
                        propertyGroup: {
                            value: l
                        }
                    }), a.enabled = 0 !== i.en, a.active = a.enabled, a
                }

                function e(t, e, i, n) {
                    var r = ExpressionPropertyInterface(t.p);
                    return t.p.setGroupProperty && t.p.setGroupProperty(PropertyInterface("", n)),
                        function() {
                            return 10 === e ? i.comp.compInterface(t.p.v) : r()
                        }
                }
                return {
                    createEffectsInterface: function(e, i) {
                        if (e.effectsManager) {
                            var n, r = [],
                                s = e.data.ef,
                                a = e.effectsManager.effectElements.length;
                            for (n = 0; n < a; n += 1) r.push(t(s[n], e.effectsManager.effectElements[n], i, e));
                            var o = e.data.ef || [],
                                l = function(t) {
                                    for (n = 0, a = o.length; n < a;) {
                                        if (t === o[n].nm || t === o[n].mn || t === o[n].ix) return r[n];
                                        n += 1
                                    }
                                    return null
                                };
                            return Object.defineProperty(l, "numProperties", {
                                get: function() {
                                    return o.length
                                }
                            }), l
                        }
                        return null
                    }
                }
            }(),
            MaskManagerInterface = function() {
                function t(t, e) {
                    this._mask = t, this._data = e
                }
                Object.defineProperty(t.prototype, "maskPath", {
                    get: function() {
                        return this._mask.prop.k && this._mask.prop.getValue(), this._mask.prop
                    }
                }), Object.defineProperty(t.prototype, "maskOpacity", {
                    get: function() {
                        return this._mask.op.k && this._mask.op.getValue(), 100 * this._mask.op.v
                    }
                });
                return function(e) {
                    var i, n = createSizedArray(e.viewData.length),
                        r = e.viewData.length;
                    for (i = 0; i < r; i += 1) n[i] = new t(e.viewData[i], e.masksProperties[i]);
                    return function(t) {
                        for (i = 0; i < r;) {
                            if (e.masksProperties[i].nm === t) return n[i];
                            i += 1
                        }
                        return null
                    }
                }
            }(),
            ExpressionPropertyInterface = function() {
                var t = {
                        pv: 0,
                        v: 0,
                        mult: 1
                    },
                    e = {
                        pv: [0, 0, 0],
                        v: [0, 0, 0],
                        mult: 1
                    };

                function i(t, e, i) {
                    Object.defineProperty(t, "velocity", {
                        get: function() {
                            return e.getVelocityAtTime(e.comp.currentFrame)
                        }
                    }), t.numKeys = e.keyframes ? e.keyframes.length : 0, t.key = function(n) {
                        if (!t.numKeys) return 0;
                        var r = "";
                        r = "s" in e.keyframes[n - 1] ? e.keyframes[n - 1].s : "e" in e.keyframes[n - 2] ? e.keyframes[n - 2].e : e.keyframes[n - 2].s;
                        var s = "unidimensional" === i ? new Number(r) : Object.assign({}, r);
                        return s.time = e.keyframes[n - 1].t / e.elem.comp.globalData.frameRate, s.value = "unidimensional" === i ? r[0] : r, s
                    }, t.valueAtTime = e.getValueAtTime, t.speedAtTime = e.getSpeedAtTime, t.velocityAtTime = e.getVelocityAtTime, t.propertyGroup = e.propertyGroup
                }

                function n() {
                    return t
                }
                return function(r) {
                    return r ? "unidimensional" === r.propType ? function(e) {
                        e && "pv" in e || (e = t);
                        var n = 1 / e.mult,
                            r = e.pv * n,
                            s = new Number(r);
                        return s.value = r, i(s, e, "unidimensional"),
                            function() {
                                return e.k && e.getValue(), r = e.v * n, s.value !== r && ((s = new Number(r)).value = r, i(s, e, "unidimensional")), s
                            }
                    }(r) : function(t) {
                        t && "pv" in t || (t = e);
                        var n = 1 / t.mult,
                            r = t.data && t.data.l || t.pv.length,
                            s = createTypedArray("float32", r),
                            a = createTypedArray("float32", r);
                        return s.value = a, i(s, t, "multidimensional"),
                            function() {
                                t.k && t.getValue();
                                for (var e = 0; e < r; e += 1) a[e] = t.v[e] * n, s[e] = a[e];
                                return s
                            }
                    }(r) : n
                }
            }();

        function SliderEffect(t, e, i) {
            this.p = PropertyFactory.getProp(e, t.v, 0, 0, i)
        }

        function AngleEffect(t, e, i) {
            this.p = PropertyFactory.getProp(e, t.v, 0, 0, i)
        }

        function ColorEffect(t, e, i) {
            this.p = PropertyFactory.getProp(e, t.v, 1, 0, i)
        }

        function PointEffect(t, e, i) {
            this.p = PropertyFactory.getProp(e, t.v, 1, 0, i)
        }

        function LayerIndexEffect(t, e, i) {
            this.p = PropertyFactory.getProp(e, t.v, 0, 0, i)
        }

        function MaskIndexEffect(t, e, i) {
            this.p = PropertyFactory.getProp(e, t.v, 0, 0, i)
        }

        function CheckboxEffect(t, e, i) {
            this.p = PropertyFactory.getProp(e, t.v, 0, 0, i)
        }

        function NoValueEffect() {
            this.p = {}
        }

        function EffectsManager(t, e) {
            var i, n = t.ef || [];
            this.effectElements = [];
            var r, s = n.length;
            for (i = 0; i < s; i += 1) r = new GroupEffect(n[i], e), this.effectElements.push(r)
        }

        function GroupEffect(t, e) {
            this.init(t, e)
        }! function() {
            ! function() {
                function t(t, e) {
                    return this.textIndex = t + 1, this.textTotal = e, this.v = this.getValue() * this.mult, this.v
                }
            }();
            var t = TextSelectorProp.getTextSelectorProp;
            TextSelectorProp.getTextSelectorProp = function(e, i, n) {
                return 1 === i.t ? new TextExpressionSelectorPropFactory(e, i, n) : t(e, i, n)
            }
        }(), extendPrototype([DynamicPropertyContainer], GroupEffect), GroupEffect.prototype.getValue = GroupEffect.prototype.iterateDynamicProperties, GroupEffect.prototype.init = function(t, e) {
            var i;
            this.data = t, this.effectElements = [], this.initDynamicPropertyContainer(e);
            var n, r = this.data.ef.length,
                s = this.data.ef;
            for (i = 0; i < r; i += 1) {
                switch (n = null, s[i].ty) {
                    case 0:
                        n = new SliderEffect(s[i], e, this);
                        break;
                    case 1:
                        n = new AngleEffect(s[i], e, this);
                        break;
                    case 2:
                        n = new ColorEffect(s[i], e, this);
                        break;
                    case 3:
                        n = new PointEffect(s[i], e, this);
                        break;
                    case 4:
                    case 7:
                        n = new CheckboxEffect(s[i], e, this);
                        break;
                    case 10:
                        n = new LayerIndexEffect(s[i], e, this);
                        break;
                    case 11:
                        n = new MaskIndexEffect(s[i], e, this);
                        break;
                    case 5:
                        n = new EffectsManager(s[i], e, this);
                        break;
                    default:
                        n = new NoValueEffect(s[i], e, this)
                }
                n && this.effectElements.push(n)
            }
        };
        var lottie = {};

        function setLocationHref(t) {
            locationHref = t
        }

        function searchAnimations() {
            !0 === standalone ? animationManager.searchAnimations(animationData, standalone, renderer) : animationManager.searchAnimations()
        }

        function setSubframeRendering(t) {
            subframeEnabled = t
        }

        function setIDPrefix(t) {
            idPrefix = t
        }

        function loadAnimation(t) {
            return !0 === standalone && (t.animationData = JSON.parse(animationData)), animationManager.loadAnimation(t)
        }

        function setQuality(t) {
            if ("string" == typeof t) switch (t) {
                case "high":
                    defaultCurveSegments = 200;
                    break;
                default:
                case "medium":
                    defaultCurveSegments = 50;
                    break;
                case "low":
                    defaultCurveSegments = 10
            } else !isNaN(t) && t > 1 && (defaultCurveSegments = t);
            roundValues(!(defaultCurveSegments >= 50))
        }

        function inBrowser() {
            return "undefined" != typeof navigator
        }

        function installPlugin(t, e) {
            "expressions" === t && (expressionsPlugin = e)
        }

        function getFactory(t) {
            switch (t) {
                case "propertyFactory":
                    return PropertyFactory;
                case "shapePropertyFactory":
                    return ShapePropertyFactory;
                case "matrix":
                    return Matrix;
                default:
                    return null
            }
        }

        function checkReady() {
            "complete" === document.readyState && (clearInterval(readyStateCheckInterval), searchAnimations())
        }

        function getQueryVariable(t) {
            for (var e = queryString.split("&"), i = 0; i < e.length; i += 1) {
                var n = e[i].split("=");
                if (decodeURIComponent(n[0]) == t) return decodeURIComponent(n[1])
            }
            return null
        }
        lottie.play = animationManager.play, lottie.pause = animationManager.pause, lottie.setLocationHref = setLocationHref, lottie.togglePause = animationManager.togglePause, lottie.setSpeed = animationManager.setSpeed, lottie.setDirection = animationManager.setDirection, lottie.stop = animationManager.stop, lottie.searchAnimations = searchAnimations, lottie.registerAnimation = animationManager.registerAnimation, lottie.loadAnimation = loadAnimation, lottie.setSubframeRendering = setSubframeRendering, lottie.resize = animationManager.resize, lottie.goToAndStop = animationManager.goToAndStop, lottie.destroy = animationManager.destroy, lottie.setQuality = setQuality, lottie.inBrowser = inBrowser, lottie.installPlugin = installPlugin, lottie.freeze = animationManager.freeze, lottie.unfreeze = animationManager.unfreeze, lottie.setVolume = animationManager.setVolume, lottie.mute = animationManager.mute, lottie.unmute = animationManager.unmute, lottie.getRegisteredAnimations = animationManager.getRegisteredAnimations, lottie.setIDPrefix = setIDPrefix, lottie.__getFactory = getFactory, lottie.version = "5.7.11";
        var standalone = "__[STANDALONE]__",
            animationData = "__[ANIMATIONDATA]__",
            renderer = "",
            queryString;
        if (standalone) {
            var scripts = document.getElementsByTagName("script"),
                index = scripts.length - 1,
                myScript = scripts[index] || {
                    src: ""
                };
            queryString = myScript.src.replace(/^[^\?]+\??/, ""), renderer = getQueryVariable("renderer")
        }
        var readyStateCheckInterval = setInterval(checkReady, 100);
        return lottie
    }))
}, function(t, e, i) {
    "use strict";
    (function(t) {
        i.d(e, "a", (function() {
            return s
        }));
        i(6), i(13), i(8);
        var n = i(1),
            r = i.n(n);
        class s {
            init() {
                this._inView(), this._hamburger(), this._formSubmit(), this._initLottieAnimation(), this._scrollNextSection(), this._navbar()
            }
            _hamburger() {
                t(".hamburger").on("click", (function() {
                    t(this).toggleClass("open"), t(".nav").toggleClass("open"), t("body").toggleClass("hamb-open")
                })), t(".has-submenu").on("click", (function() {
                    t(".submenu").toggleClass("open")
                }))
            }
            _navbar() {
                var e = 0,
                    i = !1;
                t(window).scroll((function() {
                    var n = t(this).scrollTop();
                    console.log("previousScroll: " + e), console.log("currentScroll: " + n), console.log("$(document).height(): " + t(document).height()), console.log("$(window).height(): " + t(window).height()), n > 0 && n < t(document).height() - t(window).height() ? (console.log("show: " + i), !i && n > e || i && n > e + 5 ? (window.setTimeout(s, 300), console.log("currentScroll > previousScroll: " + n + " " + e), i = !1) : n == e || (n > 48 ? (console.log("showNav called currentScroll: " + n), window.setTimeout((function() {
                        r.removeClass("is-hidden").addClass("is-visible"), i = !0
                    }), 300), i = !0) : n <= 48 && (console.log("hideNav called currentScroll: " + n), window.setTimeout(s, 0), i = !1)), e = n) : console.log("$(document).height() - $(window).height(): " + t(document).height() + " " + t(window).height());
                    var r = t(".header-sticky-custom");

                    function s() {
                        r.removeClass("is-visible").addClass("is-hidden"), i = !1
                    }
                    t(window).scrollTop() <= 48 ? (r.css("display", "none"), r.removeClass("is-visible").addClass("is-hidden"), i = !1) : r.css("display", "flex")
                }))
            }
            _formSubmit() {
                t(document).ready((function() {
                    t(".modal .close").on("click", (function() {
                        t("#form input").val(""), t("#emailField-error").remove()
                    })), t("#form").validate({
                        submitHandler: function(e) {
                            t.ajax({
                                url: "https://hooks.zapier.com/hooks/catch/4078745/o4k67q2/",
                                type: "POST",
                                dataType: "json",
                                data: t("#form").serialize(),
                                async: !1,
                                success: function(e) {
                                    t(".message").addClass("success").append("Thank you for subscribing!"), t("#form")[0].reset(), t("#form input").remove(), t("#form #submit").remove(), console.log(e)
                                },
                                error: function(e, i, n) {
                                    t(".message").addClass("error").append("Please check if email is valid"), console.log(e, i, n)
                                }
                            })
                        }
                    })
                }))
            }
            _initLottieAnimation() {
                let t = document.body.querySelector(".hero-animation-wrapper"),
                    e = document.body.querySelector(".foundry-animation-wrapper"),
                    i = document.body.querySelector(".about-hero-img-illust"),
                    n = document.body.querySelector(".contribute-hero-animation-wrapper"),
                    s = document.body.querySelector(".relay-hero-animation-wrapper"),
                    a = document.body.querySelector(".relay-how-animation-wrapper"),
                    o = document.body.querySelector(".gov-how-animation-wrapper"),
                    l = document.body.querySelector(".lindao-hero-animation-wrapper");
                r.a.loadAnimation({
                    container: t,
                    renderer: "svg",
                    loop: !0,
                    autoplay: !0,
                    path: "./json/hero_marlin.json"
                }), r.a.loadAnimation({
                    container: e,
                    renderer: "svg",
                    loop: !0,
                    autoplay: !0,
                    path: "./json/marlin_foundry.json"
                }), r.a.loadAnimation({
                    container: i,
                    renderer: "svg",
                    loop: !0,
                    autoplay: !0,
                    path: "./json/marlin_about.json"
                }), r.a.loadAnimation({
                    container: n,
                    renderer: "svg",
                    loop: !0,
                    autoplay: !0,
                    path: "./json/contribute.json"
                }), r.a.loadAnimation({
                    container: s,
                    renderer: "svg",
                    loop: !0,
                    autoplay: !0,
                    path: "./json/relay.json"
                }), r.a.loadAnimation({
                    container: a,
                    renderer: "svg",
                    loop: !0,
                    autoplay: !0,
                    path: "./json/relay-how.json"
                }), r.a.loadAnimation({
                    container: o,
                    renderer: "svg",
                    loop: !0,
                    autoplay: !0,
                    path: "./json/gov.json"
                }), r.a.loadAnimation({
                    container: l,
                    renderer: "svg",
                    loop: !0,
                    autoplay: !0,
                    path: "./json/gov-hero.json"
                })
            }
            _scrollNextSection() {
                t(".arrow-down").on("click", (function() {
                    t("html, body").animate({
                        scrollTop: t(".section-grey").offset().top
                    }, 800)
                })), t(".arrow-down-contribute").on("click", (function() {
                    t("html, body").animate({
                        scrollTop: t(".section-grey-contribute").offset().top
                    }, 1200)
                }))
            }
            _inView() {
                t(document).ready((function() {
                    var e = t(".animation-element"),
                        i = t(window);
                    t(window).height();
                    i.on("scroll resize", (function() {
                        var n = i.height(),
                            r = i.scrollTop(),
                            s = r + n;
                        t.each(e, (function() {
                            var e = t(this),
                                i = e.outerHeight(),
                                n = e.offset().top;
                            n + i >= r && n <= s && e.addClass("in-view")
                        }))
                    })), i.trigger("scroll")
                }))
            }
        }
    }).call(this, i(0))
}, function(t, e, i) {
    "use strict";
    (function(t) {
        i.d(e, "a", (function() {
            return n
        }));
        i(9), i(10);
        class n {
            init() {
                this._sdkSlider(), this._boxToggle(), this._topHeaderJson(), this._foundryJson(), this._newsJson(), this._rewardSlider()
            }
            _sdkSlider() {
                t(document).ready((function() {
                    let e = t(".sdk-list > .sdk-list-element");
                    var i = 0;
                    var n, r = function() {
                        n = setInterval((function() {
                            i = (i + 1) % e.length, e.removeClass("active").eq(i).addClass("active");
                            e.eq(i);
                            0 == i ? (t(".sdk-illustration").addClass("first-active"), t(".sdk-illustration").removeClass("active")) : (t(".sdk-illustration").removeClass("first-active"), t(".sdk-illustration").addClass("active")), s()
                        }), 4e3)
                    };

                    function s() {
                        console.log("called");
                        let e = t(".sdk-list-element.active");
                        console.log(e);
                        let i = e.attr("data-green");
                        console.log(i);
                        let n = e.attr("data-green-two"),
                            r = e.attr("data-blue"),
                            s = e.attr("data-blue-two"),
                            a = e.attr("data-white"),
                            o = e.attr("data-white-two"),
                            l = e.attr("data-text"),
                            h = t(".inner-green, .inner-green-two, .inner-blue, .inner-blue-two, .inner-white, .inner-white-two, .inner-text");
                        h.fadeOut(0), h.empty(), t(".inner-green").prepend(i), console.log(t(".inner-green")), t(".inner-green-two").prepend(n), t(".inner-blue").prepend(r), t(".inner-blue-two").prepend(s), t(".inner-white").prepend(a), t(".inner-white-two").prepend(o), t(".inner-text").prepend(l), h.fadeIn("slow")
                    }
                    r(), t(".sdk-list-element").on("click", (function() {
                        i = t(this).index(), t(".sdk-list-element").removeClass("active"), t(this).addClass("active"), t(".sdk-list-element-first").hasClass("active") ? t(".sdk-illustration").addClass("first-active") : t(".sdk-illustration").removeClass("first-active"), s(), clearInterval(n), r()
                    }))
                }))
            }
            _rewardSlider() {
                t(document).ready((function() {
                    let e = t(".reward-list > .reward-list-element");
                    var i = 0;
                    var n, r = function() {
                        n = setInterval((function() {
                            i = (i + 1) % e.length, e.removeClass("active").eq(i).addClass("active");
                            e.eq(i);
                            0 == i ? (t(".reward-illustration").addClass("first-active"), t(".reward-illustration").removeClass("active")) : (t(".reward-illustration").removeClass("first-active"), t(".reward-illustration").addClass("active")), s()
                        }), 8e3)
                    };

                    function s() {
                        let e = t(".reward-list-element.active").attr("imgSource");
                        t(".reward-img").attr("src", e)
                    }
                    r(), t(".reward-list-element").on("click", (function() {
                        i = t(this).index(), t(".reward-list-element").removeClass("active"), t(this).addClass("active"), t(".reward-list-element-first").hasClass("active") ? t(".reward-illustration").addClass("first-active") : t(".reward-illustration").removeClass("first-active"), s(), clearInterval(n), r()
                    }))
                }))
            }
            _boxToggle() {
                function e() {
                    if (t(window).width() < 991) {
                        t(".col-visible").on("click", (function() {
                            t("body").addClass("col-modal-open"), t(this).next().fadeIn(300), t(this).next(".col-hidden").children().css("opacity", "1")
                        })), t(".col-hidden .close").on("click", (function() {
                            t("body").removeClass("col-modal-open"), t(this).parent().fadeOut(200), t(this).siblings().css("opacity", "0")
                        }));
                        const e = t(".col-hidden");
                        t(document).mouseup(i => {
                            e.is(i.target) || 0 !== e.has(i.target).length || (t("body").removeClass("col-modal-open"), e.children().css("opacity", "0"), e.fadeOut(200))
                        }), t(".lang").on("click", (function() {
                            t(".lang--list").toggleClass("active")
                        }))
                    }
                }
                e(), t(window).on("resize", (function() {
                    e()
                }))
            }
            _videoModal() {
                t("[data-fancybox]").fancybox({
                    youtube: {
                        controls: 0,
                        showinfo: 0
                    },
                    vimeo: {
                        color: "f00"
                    }
                })
            }
            _topHeaderJson() {
                t.getJSON("./json/topbar.json", (function(e) {
                    var i;
                    e && t.each(e, (function(e, n) {
                        i = '<div class="top-link"><a href="' + n.link + '">' + n.text + "</a></div>", t(i).appendTo("#header-top-text")
                    }))
                })).done((function() {
                    t("#header-top-text .top-link").eq(0).addClass("active");
                    let e = t("#header-top-text .top-link"),
                        i = 0;
                    setInterval((function() {
                        i = (i + 1) % e.length, e.removeClass("active").eq(i).addClass("active")
                    }), 6e3)
                }))
            }
            _foundryJson() {
                t.getJSON("./json/foundry.json", (function(e) {
                    var i;
                    e && t.each(e, (function(e, n) {
                        i = '<span class="foundry-dinamic-text">' + n.text + "</span>", t(i).appendTo("#foundry-text")
                    }))
                })).done((function() {
                    t("#foundry-text .foundry-dinamic-text").eq(0).addClass("active");
                    let e = t("#foundry-text .foundry-dinamic-text"),
                        i = 0;
                    setInterval((function() {
                        i = (i + 1) % e.length, e.removeClass("active").eq(i).addClass("active")
                    }), 4e3)
                }))
            }
            _newsJson() {
                t.getJSON("./json/blog.json", (function(e) {
                    var i;
                    e && t.each(e, (function(e, n) {
                        i = '<div class="col-12 col-md-4 news-col"><a href="' + n.link + '"><picture><source media="(max-width: 767px)" srcset="' + n.imgMobile + '"><source media="(max-width: 991px)" srcset="' + n.imgTablet + '"><img src="' + n.imgDesktop + '" alt=""></picture><div class="d-flex flex-column news-col-content"><div class="cat">' + n.type + '</div><div class="title">' + n.title + '</div><p class="par">' + n.detail + "</p></div></a></div>", t(i).appendTo("#news-row")
                    }))
                }))
            }
        }
    }).call(this, i(0))
}, function(t, e, i) {
    "use strict";
    t.exports = function(t) {
        var e = [];
        return e.toString = function() {
            return this.map((function(e) {
                var i = function(t, e) {
                    var i = t[1] || "",
                        n = t[3];
                    if (!n) return i;
                    if (e && "function" == typeof btoa) {
                        var r = (a = n, o = btoa(unescape(encodeURIComponent(JSON.stringify(a)))), l = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(o), "/*# ".concat(l, " */")),
                            s = n.sources.map((function(t) {
                                return "/*# sourceURL=".concat(n.sourceRoot || "").concat(t, " */")
                            }));
                        return [i].concat(s).concat([r]).join("\n")
                    }
                    var a, o, l;
                    return [i].join("\n")
                }(e, t);
                return e[2] ? "@media ".concat(e[2], " {").concat(i, "}") : i
            })).join("")
        }, e.i = function(t, i, n) {
            "string" == typeof t && (t = [
                [null, t, ""]
            ]);
            var r = {};
            if (n)
                for (var s = 0; s < this.length; s++) {
                    var a = this[s][0];
                    null != a && (r[a] = !0)
                }
            for (var o = 0; o < t.length; o++) {
                var l = [].concat(t[o]);
                n && r[l[0]] || (i && (l[2] ? l[2] = "".concat(i, " and ").concat(l[2]) : l[2] = i), e.push(l))
            }
        }, e
    }
}, function(t, e, i) {
    "use strict";
    i.r(e);
    var n = i(2),
        r = i(3);
    document.addEventListener("DOMContentLoaded", () => {
        (new n.a).init();
        (new r.a).init()
    })
}, function(t, e, i) {
    /*!
     * Bootstrap collapse.js v4.6.0 (https://getbootstrap.com/)
     * Copyright 2011-2021 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
     * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
     */
    t.exports = function(t, e) {
        "use strict";

        function i(t) {
            return t && "object" == typeof t && "default" in t ? t : {
                default: t
            }
        }
        var n = i(t),
            r = i(e);

        function s(t, e) {
            for (var i = 0; i < e.length; i++) {
                var n = e[i];
                n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
            }
        }

        function a() {
            return (a = Object.assign || function(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var i = arguments[e];
                    for (var n in i) Object.prototype.hasOwnProperty.call(i, n) && (t[n] = i[n])
                }
                return t
            }).apply(this, arguments)
        }
        var o = "collapse",
            l = "bs.collapse",
            h = n.default.fn[o],
            c = {
                toggle: !0,
                parent: ""
            },
            p = {
                toggle: "boolean",
                parent: "(string|element)"
            },
            f = function() {
                function t(t, e) {
                    this._isTransitioning = !1, this._element = t, this._config = this._getConfig(e), this._triggerArray = [].slice.call(document.querySelectorAll('[data-toggle="collapse"][href="#' + t.id + '"],[data-toggle="collapse"][data-target="#' + t.id + '"]'));
                    for (var i = [].slice.call(document.querySelectorAll('[data-toggle="collapse"]')), n = 0, s = i.length; n < s; n++) {
                        var a = i[n],
                            o = r.default.getSelectorFromElement(a),
                            l = [].slice.call(document.querySelectorAll(o)).filter((function(e) {
                                return e === t
                            }));
                        null !== o && l.length > 0 && (this._selector = o, this._triggerArray.push(a))
                    }
                    this._parent = this._config.parent ? this._getParent() : null, this._config.parent || this._addAriaAndCollapsedClass(this._element, this._triggerArray), this._config.toggle && this.toggle()
                }
                var e, i, h, f = t.prototype;
                return f.toggle = function() {
                    n.default(this._element).hasClass("show") ? this.hide() : this.show()
                }, f.show = function() {
                    var e, i, s = this;
                    if (!(this._isTransitioning || n.default(this._element).hasClass("show") || (this._parent && 0 === (e = [].slice.call(this._parent.querySelectorAll(".show, .collapsing")).filter((function(t) {
                            return "string" == typeof s._config.parent ? t.getAttribute("data-parent") === s._config.parent : t.classList.contains("collapse")
                        }))).length && (e = null), e && (i = n.default(e).not(this._selector).data(l)) && i._isTransitioning))) {
                        var a = n.default.Event("show.bs.collapse");
                        if (n.default(this._element).trigger(a), !a.isDefaultPrevented()) {
                            e && (t._jQueryInterface.call(n.default(e).not(this._selector), "hide"), i || n.default(e).data(l, null));
                            var o = this._getDimension();
                            n.default(this._element).removeClass("collapse").addClass("collapsing"), this._element.style[o] = 0, this._triggerArray.length && n.default(this._triggerArray).removeClass("collapsed").attr("aria-expanded", !0), this.setTransitioning(!0);
                            var h = "scroll" + (o[0].toUpperCase() + o.slice(1)),
                                c = r.default.getTransitionDurationFromElement(this._element);
                            n.default(this._element).one(r.default.TRANSITION_END, (function() {
                                n.default(s._element).removeClass("collapsing").addClass("collapse show"), s._element.style[o] = "", s.setTransitioning(!1), n.default(s._element).trigger("shown.bs.collapse")
                            })).emulateTransitionEnd(c), this._element.style[o] = this._element[h] + "px"
                        }
                    }
                }, f.hide = function() {
                    var t = this;
                    if (!this._isTransitioning && n.default(this._element).hasClass("show")) {
                        var e = n.default.Event("hide.bs.collapse");
                        if (n.default(this._element).trigger(e), !e.isDefaultPrevented()) {
                            var i = this._getDimension();
                            this._element.style[i] = this._element.getBoundingClientRect()[i] + "px", r.default.reflow(this._element), n.default(this._element).addClass("collapsing").removeClass("collapse show");
                            var s = this._triggerArray.length;
                            if (s > 0)
                                for (var a = 0; a < s; a++) {
                                    var o = this._triggerArray[a],
                                        l = r.default.getSelectorFromElement(o);
                                    null !== l && (n.default([].slice.call(document.querySelectorAll(l))).hasClass("show") || n.default(o).addClass("collapsed").attr("aria-expanded", !1))
                                }
                            this.setTransitioning(!0), this._element.style[i] = "";
                            var h = r.default.getTransitionDurationFromElement(this._element);
                            n.default(this._element).one(r.default.TRANSITION_END, (function() {
                                t.setTransitioning(!1), n.default(t._element).removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse")
                            })).emulateTransitionEnd(h)
                        }
                    }
                }, f.setTransitioning = function(t) {
                    this._isTransitioning = t
                }, f.dispose = function() {
                    n.default.removeData(this._element, l), this._config = null, this._parent = null, this._element = null, this._triggerArray = null, this._isTransitioning = null
                }, f._getConfig = function(t) {
                    return (t = a({}, c, t)).toggle = Boolean(t.toggle), r.default.typeCheckConfig(o, t, p), t
                }, f._getDimension = function() {
                    return n.default(this._element).hasClass("width") ? "width" : "height"
                }, f._getParent = function() {
                    var e, i = this;
                    r.default.isElement(this._config.parent) ? (e = this._config.parent, void 0 !== this._config.parent.jquery && (e = this._config.parent[0])) : e = document.querySelector(this._config.parent);
                    var s = '[data-toggle="collapse"][data-parent="' + this._config.parent + '"]',
                        a = [].slice.call(e.querySelectorAll(s));
                    return n.default(a).each((function(e, n) {
                        i._addAriaAndCollapsedClass(t._getTargetFromElement(n), [n])
                    })), e
                }, f._addAriaAndCollapsedClass = function(t, e) {
                    var i = n.default(t).hasClass("show");
                    e.length && n.default(e).toggleClass("collapsed", !i).attr("aria-expanded", i)
                }, t._getTargetFromElement = function(t) {
                    var e = r.default.getSelectorFromElement(t);
                    return e ? document.querySelector(e) : null
                }, t._jQueryInterface = function(e) {
                    return this.each((function() {
                        var i = n.default(this),
                            r = i.data(l),
                            s = a({}, c, i.data(), "object" == typeof e && e ? e : {});
                        if (!r && s.toggle && "string" == typeof e && /show|hide/.test(e) && (s.toggle = !1), r || (r = new t(this, s), i.data(l, r)), "string" == typeof e) {
                            if (void 0 === r[e]) throw new TypeError('No method named "' + e + '"');
                            r[e]()
                        }
                    }))
                }, e = t, h = [{
                    key: "VERSION",
                    get: function() {
                        return "4.6.0"
                    }
                }, {
                    key: "Default",
                    get: function() {
                        return c
                    }
                }], (i = null) && s(e.prototype, i), h && s(e, h), t
            }();
        return n.default(document).on("click.bs.collapse.data-api", '[data-toggle="collapse"]', (function(t) {
            "A" === t.currentTarget.tagName && t.preventDefault();
            var e = n.default(this),
                i = r.default.getSelectorFromElement(this),
                s = [].slice.call(document.querySelectorAll(i));
            n.default(s).each((function() {
                var t = n.default(this),
                    i = t.data(l) ? "toggle" : e.data();
                f._jQueryInterface.call(t, i)
            }))
        })), n.default.fn[o] = f._jQueryInterface, n.default.fn[o].Constructor = f, n.default.fn[o].noConflict = function() {
            return n.default.fn[o] = h, f._jQueryInterface
        }, f
    }(i(0), i(7))
}, function(t, e, i) {
    /*!
     * Bootstrap util.js v4.6.0 (https://getbootstrap.com/)
     * Copyright 2011-2021 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
     * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
     */
    t.exports = function(t) {
        "use strict";

        function e(t) {
            return t && "object" == typeof t && "default" in t ? t : {
                default: t
            }
        }
        var i = e(t);

        function n(t) {
            var e = this,
                n = !1;
            return i.default(this).one(r.TRANSITION_END, (function() {
                n = !0
            })), setTimeout((function() {
                n || r.triggerTransitionEnd(e)
            }), t), this
        }
        var r = {
            TRANSITION_END: "bsTransitionEnd",
            getUID: function(t) {
                do {
                    t += ~~(1e6 * Math.random())
                } while (document.getElementById(t));
                return t
            },
            getSelectorFromElement: function(t) {
                var e = t.getAttribute("data-target");
                if (!e || "#" === e) {
                    var i = t.getAttribute("href");
                    e = i && "#" !== i ? i.trim() : ""
                }
                try {
                    return document.querySelector(e) ? e : null
                } catch (t) {
                    return null
                }
            },
            getTransitionDurationFromElement: function(t) {
                if (!t) return 0;
                var e = i.default(t).css("transition-duration"),
                    n = i.default(t).css("transition-delay"),
                    r = parseFloat(e),
                    s = parseFloat(n);
                return r || s ? (e = e.split(",")[0], n = n.split(",")[0], 1e3 * (parseFloat(e) + parseFloat(n))) : 0
            },
            reflow: function(t) {
                return t.offsetHeight
            },
            triggerTransitionEnd: function(t) {
                i.default(t).trigger("transitionend")
            },
            supportsTransitionEnd: function() {
                return Boolean("transitionend")
            },
            isElement: function(t) {
                return (t[0] || t).nodeType
            },
            typeCheckConfig: function(t, e, i) {
                for (var n in i)
                    if (Object.prototype.hasOwnProperty.call(i, n)) {
                        var s = i[n],
                            a = e[n],
                            o = a && r.isElement(a) ? "element" : null == (l = a) ? "" + l : {}.toString.call(l).match(/\s([a-z]+)/i)[1].toLowerCase();
                        if (!new RegExp(s).test(o)) throw new Error(t.toUpperCase() + ': Option "' + n + '" provided type "' + o + '" but expected type "' + s + '".')
                    }
                var l
            },
            findShadowRoot: function(t) {
                if (!document.documentElement.attachShadow) return null;
                if ("function" == typeof t.getRootNode) {
                    var e = t.getRootNode();
                    return e instanceof ShadowRoot ? e : null
                }
                return t instanceof ShadowRoot ? t : t.parentNode ? r.findShadowRoot(t.parentNode) : null
            },
            jQueryDetection: function() {
                if (void 0 === i.default) throw new TypeError("Bootstrap's JavaScript requires jQuery. jQuery must be included before Bootstrap's JavaScript.");
                var t = i.default.fn.jquery.split(" ")[0].split(".");
                if (t[0] < 2 && t[1] < 9 || 1 === t[0] && 9 === t[1] && t[2] < 1 || t[0] >= 4) throw new Error("Bootstrap's JavaScript requires at least jQuery v1.9.1 but less than v4.0.0")
            }
        };
        return r.jQueryDetection(), i.default.fn.emulateTransitionEnd = n, i.default.event.special[r.TRANSITION_END] = {
            bindType: "transitionend",
            delegateType: "transitionend",
            handle: function(t) {
                if (i.default(t.target).is(this)) return t.handleObj.handler.apply(this, arguments)
            }
        }, r
    }(i(0))
}, function(t, e, i) {
    var n, r, s;
    /*!
     * jQuery Validation Plugin v1.19.3
     *
     * https://jqueryvalidation.org/
     *
     * Copyright (c) 2021 Jörn Zaefferer
     * Released under the MIT license
     */
    r = [i(0)], void 0 === (s = "function" == typeof(n = function(t) {
        t.extend(t.fn, {
            validate: function(e) {
                if (this.length) {
                    var i = t.data(this[0], "validator");
                    return i || (this.attr("novalidate", "novalidate"), i = new t.validator(e, this[0]), t.data(this[0], "validator", i), i.settings.onsubmit && (this.on("click.validate", ":submit", (function(e) {
                        i.submitButton = e.currentTarget, t(this).hasClass("cancel") && (i.cancelSubmit = !0), void 0 !== t(this).attr("formnovalidate") && (i.cancelSubmit = !0)
                    })), this.on("submit.validate", (function(e) {
                        function n() {
                            var n, r;
                            return i.submitButton && (i.settings.submitHandler || i.formSubmitted) && (n = t("<input type='hidden'/>").attr("name", i.submitButton.name).val(t(i.submitButton).val()).appendTo(i.currentForm)), !(i.settings.submitHandler && !i.settings.debug) || (r = i.settings.submitHandler.call(i, i.currentForm, e), n && n.remove(), void 0 !== r && r)
                        }
                        return i.settings.debug && e.preventDefault(), i.cancelSubmit ? (i.cancelSubmit = !1, n()) : i.form() ? i.pendingRequest ? (i.formSubmitted = !0, !1) : n() : (i.focusInvalid(), !1)
                    }))), i)
                }
                e && e.debug && window.console && console.warn("Nothing selected, can't validate, returning nothing.")
            },
            valid: function() {
                var e, i, n;
                return t(this[0]).is("form") ? e = this.validate().form() : (n = [], e = !0, i = t(this[0].form).validate(), this.each((function() {
                    (e = i.element(this) && e) || (n = n.concat(i.errorList))
                })), i.errorList = n), e
            },
            rules: function(e, i) {
                var n, r, s, a, o, l, h = this[0],
                    c = void 0 !== this.attr("contenteditable") && "false" !== this.attr("contenteditable");
                if (null != h && (!h.form && c && (h.form = this.closest("form")[0], h.name = this.attr("name")), null != h.form)) {
                    if (e) switch (r = (n = t.data(h.form, "validator").settings).rules, s = t.validator.staticRules(h), e) {
                        case "add":
                            t.extend(s, t.validator.normalizeRule(i)), delete s.messages, r[h.name] = s, i.messages && (n.messages[h.name] = t.extend(n.messages[h.name], i.messages));
                            break;
                        case "remove":
                            return i ? (l = {}, t.each(i.split(/\s/), (function(t, e) {
                                l[e] = s[e], delete s[e]
                            })), l) : (delete r[h.name], s)
                    }
                    return (a = t.validator.normalizeRules(t.extend({}, t.validator.classRules(h), t.validator.attributeRules(h), t.validator.dataRules(h), t.validator.staticRules(h)), h)).required && (o = a.required, delete a.required, a = t.extend({
                        required: o
                    }, a)), a.remote && (o = a.remote, delete a.remote, a = t.extend(a, {
                        remote: o
                    })), a
                }
            }
        });
        var e, i = function(t) {
            return t.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "")
        };
        t.extend(t.expr.pseudos || t.expr[":"], {
            blank: function(e) {
                return !i("" + t(e).val())
            },
            filled: function(e) {
                var n = t(e).val();
                return null !== n && !!i("" + n)
            },
            unchecked: function(e) {
                return !t(e).prop("checked")
            }
        }), t.validator = function(e, i) {
            this.settings = t.extend(!0, {}, t.validator.defaults, e), this.currentForm = i, this.init()
        }, t.validator.format = function(e, i) {
            return 1 === arguments.length ? function() {
                var i = t.makeArray(arguments);
                return i.unshift(e), t.validator.format.apply(this, i)
            } : (void 0 === i || (arguments.length > 2 && i.constructor !== Array && (i = t.makeArray(arguments).slice(1)), i.constructor !== Array && (i = [i]), t.each(i, (function(t, i) {
                e = e.replace(new RegExp("\\{" + t + "\\}", "g"), (function() {
                    return i
                }))
            }))), e)
        }, t.extend(t.validator, {
            defaults: {
                messages: {},
                groups: {},
                rules: {},
                errorClass: "error",
                pendingClass: "pending",
                validClass: "valid",
                errorElement: "label",
                focusCleanup: !1,
                focusInvalid: !0,
                errorContainer: t([]),
                errorLabelContainer: t([]),
                onsubmit: !0,
                ignore: ":hidden",
                ignoreTitle: !1,
                onfocusin: function(t) {
                    this.lastActive = t, this.settings.focusCleanup && (this.settings.unhighlight && this.settings.unhighlight.call(this, t, this.settings.errorClass, this.settings.validClass), this.hideThese(this.errorsFor(t)))
                },
                onfocusout: function(t) {
                    this.checkable(t) || !(t.name in this.submitted) && this.optional(t) || this.element(t)
                },
                onkeyup: function(e, i) {
                    9 === i.which && "" === this.elementValue(e) || -1 !== t.inArray(i.keyCode, [16, 17, 18, 20, 35, 36, 37, 38, 39, 40, 45, 144, 225]) || (e.name in this.submitted || e.name in this.invalid) && this.element(e)
                },
                onclick: function(t) {
                    t.name in this.submitted ? this.element(t) : t.parentNode.name in this.submitted && this.element(t.parentNode)
                },
                highlight: function(e, i, n) {
                    "radio" === e.type ? this.findByName(e.name).addClass(i).removeClass(n) : t(e).addClass(i).removeClass(n)
                },
                unhighlight: function(e, i, n) {
                    "radio" === e.type ? this.findByName(e.name).removeClass(i).addClass(n) : t(e).removeClass(i).addClass(n)
                }
            },
            setDefaults: function(e) {
                t.extend(t.validator.defaults, e)
            },
            messages: {
                required: "This field is required.",
                remote: "Please fix this field.",
                email: "Please enter a valid email address.",
                url: "Please enter a valid URL.",
                date: "Please enter a valid date.",
                dateISO: "Please enter a valid date (ISO).",
                number: "Please enter a valid number.",
                digits: "Please enter only digits.",
                equalTo: "Please enter the same value again.",
                maxlength: t.validator.format("Please enter no more than {0} characters."),
                minlength: t.validator.format("Please enter at least {0} characters."),
                rangelength: t.validator.format("Please enter a value between {0} and {1} characters long."),
                range: t.validator.format("Please enter a value between {0} and {1}."),
                max: t.validator.format("Please enter a value less than or equal to {0}."),
                min: t.validator.format("Please enter a value greater than or equal to {0}."),
                step: t.validator.format("Please enter a multiple of {0}.")
            },
            autoCreateRanges: !1,
            prototype: {
                init: function() {
                    this.labelContainer = t(this.settings.errorLabelContainer), this.errorContext = this.labelContainer.length && this.labelContainer || t(this.currentForm), this.containers = t(this.settings.errorContainer).add(this.settings.errorLabelContainer), this.submitted = {}, this.valueCache = {}, this.pendingRequest = 0, this.pending = {}, this.invalid = {}, this.reset();
                    var e, i = this.currentForm,
                        n = this.groups = {};

                    function r(e) {
                        var n = void 0 !== t(this).attr("contenteditable") && "false" !== t(this).attr("contenteditable");
                        if (!this.form && n && (this.form = t(this).closest("form")[0], this.name = t(this).attr("name")), i === this.form) {
                            var r = t.data(this.form, "validator"),
                                s = "on" + e.type.replace(/^validate/, ""),
                                a = r.settings;
                            a[s] && !t(this).is(a.ignore) && a[s].call(r, this, e)
                        }
                    }
                    t.each(this.settings.groups, (function(e, i) {
                        "string" == typeof i && (i = i.split(/\s/)), t.each(i, (function(t, i) {
                            n[i] = e
                        }))
                    })), e = this.settings.rules, t.each(e, (function(i, n) {
                        e[i] = t.validator.normalizeRule(n)
                    })), t(this.currentForm).on("focusin.validate focusout.validate keyup.validate", ":text, [type='password'], [type='file'], select, textarea, [type='number'], [type='search'], [type='tel'], [type='url'], [type='email'], [type='datetime'], [type='date'], [type='month'], [type='week'], [type='time'], [type='datetime-local'], [type='range'], [type='color'], [type='radio'], [type='checkbox'], [contenteditable], [type='button']", r).on("click.validate", "select, option, [type='radio'], [type='checkbox']", r), this.settings.invalidHandler && t(this.currentForm).on("invalid-form.validate", this.settings.invalidHandler)
                },
                form: function() {
                    return this.checkForm(), t.extend(this.submitted, this.errorMap), this.invalid = t.extend({}, this.errorMap), this.valid() || t(this.currentForm).triggerHandler("invalid-form", [this]), this.showErrors(), this.valid()
                },
                checkForm: function() {
                    this.prepareForm();
                    for (var t = 0, e = this.currentElements = this.elements(); e[t]; t++) this.check(e[t]);
                    return this.valid()
                },
                element: function(e) {
                    var i, n, r = this.clean(e),
                        s = this.validationTargetFor(r),
                        a = this,
                        o = !0;
                    return void 0 === s ? delete this.invalid[r.name] : (this.prepareElement(s), this.currentElements = t(s), (n = this.groups[s.name]) && t.each(this.groups, (function(t, e) {
                        e === n && t !== s.name && (r = a.validationTargetFor(a.clean(a.findByName(t)))) && r.name in a.invalid && (a.currentElements.push(r), o = a.check(r) && o)
                    })), i = !1 !== this.check(s), o = o && i, this.invalid[s.name] = !i, this.numberOfInvalids() || (this.toHide = this.toHide.add(this.containers)), this.showErrors(), t(e).attr("aria-invalid", !i)), o
                },
                showErrors: function(e) {
                    if (e) {
                        var i = this;
                        t.extend(this.errorMap, e), this.errorList = t.map(this.errorMap, (function(t, e) {
                            return {
                                message: t,
                                element: i.findByName(e)[0]
                            }
                        })), this.successList = t.grep(this.successList, (function(t) {
                            return !(t.name in e)
                        }))
                    }
                    this.settings.showErrors ? this.settings.showErrors.call(this, this.errorMap, this.errorList) : this.defaultShowErrors()
                },
                resetForm: function() {
                    t.fn.resetForm && t(this.currentForm).resetForm(), this.invalid = {}, this.submitted = {}, this.prepareForm(), this.hideErrors();
                    var e = this.elements().removeData("previousValue").removeAttr("aria-invalid");
                    this.resetElements(e)
                },
                resetElements: function(t) {
                    var e;
                    if (this.settings.unhighlight)
                        for (e = 0; t[e]; e++) this.settings.unhighlight.call(this, t[e], this.settings.errorClass, ""), this.findByName(t[e].name).removeClass(this.settings.validClass);
                    else t.removeClass(this.settings.errorClass).removeClass(this.settings.validClass)
                },
                numberOfInvalids: function() {
                    return this.objectLength(this.invalid)
                },
                objectLength: function(t) {
                    var e, i = 0;
                    for (e in t) void 0 !== t[e] && null !== t[e] && !1 !== t[e] && i++;
                    return i
                },
                hideErrors: function() {
                    this.hideThese(this.toHide)
                },
                hideThese: function(t) {
                    t.not(this.containers).text(""), this.addWrapper(t).hide()
                },
                valid: function() {
                    return 0 === this.size()
                },
                size: function() {
                    return this.errorList.length
                },
                focusInvalid: function() {
                    if (this.settings.focusInvalid) try {
                        t(this.findLastActive() || this.errorList.length && this.errorList[0].element || []).filter(":visible").trigger("focus").trigger("focusin")
                    } catch (t) {}
                },
                findLastActive: function() {
                    var e = this.lastActive;
                    return e && 1 === t.grep(this.errorList, (function(t) {
                        return t.element.name === e.name
                    })).length && e
                },
                elements: function() {
                    var e = this,
                        i = {};
                    return t(this.currentForm).find("input, select, textarea, [contenteditable]").not(":submit, :reset, :image, :disabled").not(this.settings.ignore).filter((function() {
                        var n = this.name || t(this).attr("name"),
                            r = void 0 !== t(this).attr("contenteditable") && "false" !== t(this).attr("contenteditable");
                        return !n && e.settings.debug && window.console && console.error("%o has no name assigned", this), r && (this.form = t(this).closest("form")[0], this.name = n), !(this.form !== e.currentForm || n in i || !e.objectLength(t(this).rules()) || (i[n] = !0, 0))
                    }))
                },
                clean: function(e) {
                    return t(e)[0]
                },
                errors: function() {
                    var e = this.settings.errorClass.split(" ").join(".");
                    return t(this.settings.errorElement + "." + e, this.errorContext)
                },
                resetInternals: function() {
                    this.successList = [], this.errorList = [], this.errorMap = {}, this.toShow = t([]), this.toHide = t([])
                },
                reset: function() {
                    this.resetInternals(), this.currentElements = t([])
                },
                prepareForm: function() {
                    this.reset(), this.toHide = this.errors().add(this.containers)
                },
                prepareElement: function(t) {
                    this.reset(), this.toHide = this.errorsFor(t)
                },
                elementValue: function(e) {
                    var i, n, r = t(e),
                        s = e.type,
                        a = void 0 !== r.attr("contenteditable") && "false" !== r.attr("contenteditable");
                    return "radio" === s || "checkbox" === s ? this.findByName(e.name).filter(":checked").val() : "number" === s && void 0 !== e.validity ? e.validity.badInput ? "NaN" : r.val() : (i = a ? r.text() : r.val(), "file" === s ? "C:\\fakepath\\" === i.substr(0, 12) ? i.substr(12) : (n = i.lastIndexOf("/")) >= 0 || (n = i.lastIndexOf("\\")) >= 0 ? i.substr(n + 1) : i : "string" == typeof i ? i.replace(/\r/g, "") : i)
                },
                check: function(e) {
                    e = this.validationTargetFor(this.clean(e));
                    var i, n, r, s, a = t(e).rules(),
                        o = t.map(a, (function(t, e) {
                            return e
                        })).length,
                        l = !1,
                        h = this.elementValue(e);
                    for (n in "function" == typeof a.normalizer ? s = a.normalizer : "function" == typeof this.settings.normalizer && (s = this.settings.normalizer), s && (h = s.call(e, h), delete a.normalizer), a) {
                        r = {
                            method: n,
                            parameters: a[n]
                        };
                        try {
                            if ("dependency-mismatch" === (i = t.validator.methods[n].call(this, h, e, r.parameters)) && 1 === o) {
                                l = !0;
                                continue
                            }
                            if (l = !1, "pending" === i) return void(this.toHide = this.toHide.not(this.errorsFor(e)));
                            if (!i) return this.formatAndAdd(e, r), !1
                        } catch (t) {
                            throw this.settings.debug && window.console && console.log("Exception occurred when checking element " + e.id + ", check the '" + r.method + "' method.", t), t instanceof TypeError && (t.message += ".  Exception occurred when checking element " + e.id + ", check the '" + r.method + "' method."), t
                        }
                    }
                    if (!l) return this.objectLength(a) && this.successList.push(e), !0
                },
                customDataMessage: function(e, i) {
                    return t(e).data("msg" + i.charAt(0).toUpperCase() + i.substring(1).toLowerCase()) || t(e).data("msg")
                },
                customMessage: function(t, e) {
                    var i = this.settings.messages[t];
                    return i && (i.constructor === String ? i : i[e])
                },
                findDefined: function() {
                    for (var t = 0; t < arguments.length; t++)
                        if (void 0 !== arguments[t]) return arguments[t]
                },
                defaultMessage: function(e, i) {
                    "string" == typeof i && (i = {
                        method: i
                    });
                    var n = this.findDefined(this.customMessage(e.name, i.method), this.customDataMessage(e, i.method), !this.settings.ignoreTitle && e.title || void 0, t.validator.messages[i.method], "<strong>Warning: No message defined for " + e.name + "</strong>"),
                        r = /\$?\{(\d+)\}/g;
                    return "function" == typeof n ? n = n.call(this, i.parameters, e) : r.test(n) && (n = t.validator.format(n.replace(r, "{$1}"), i.parameters)), n
                },
                formatAndAdd: function(t, e) {
                    var i = this.defaultMessage(t, e);
                    this.errorList.push({
                        message: i,
                        element: t,
                        method: e.method
                    }), this.errorMap[t.name] = i, this.submitted[t.name] = i
                },
                addWrapper: function(t) {
                    return this.settings.wrapper && (t = t.add(t.parent(this.settings.wrapper))), t
                },
                defaultShowErrors: function() {
                    var t, e, i;
                    for (t = 0; this.errorList[t]; t++) i = this.errorList[t], this.settings.highlight && this.settings.highlight.call(this, i.element, this.settings.errorClass, this.settings.validClass), this.showLabel(i.element, i.message);
                    if (this.errorList.length && (this.toShow = this.toShow.add(this.containers)), this.settings.success)
                        for (t = 0; this.successList[t]; t++) this.showLabel(this.successList[t]);
                    if (this.settings.unhighlight)
                        for (t = 0, e = this.validElements(); e[t]; t++) this.settings.unhighlight.call(this, e[t], this.settings.errorClass, this.settings.validClass);
                    this.toHide = this.toHide.not(this.toShow), this.hideErrors(), this.addWrapper(this.toShow).show()
                },
                validElements: function() {
                    return this.currentElements.not(this.invalidElements())
                },
                invalidElements: function() {
                    return t(this.errorList).map((function() {
                        return this.element
                    }))
                },
                showLabel: function(e, i) {
                    var n, r, s, a, o = this.errorsFor(e),
                        l = this.idOrName(e),
                        h = t(e).attr("aria-describedby");
                    o.length ? (o.removeClass(this.settings.validClass).addClass(this.settings.errorClass), o.html(i)) : (n = o = t("<" + this.settings.errorElement + ">").attr("id", l + "-error").addClass(this.settings.errorClass).html(i || ""), this.settings.wrapper && (n = o.hide().show().wrap("<" + this.settings.wrapper + "/>").parent()), this.labelContainer.length ? this.labelContainer.append(n) : this.settings.errorPlacement ? this.settings.errorPlacement.call(this, n, t(e)) : n.insertAfter(e), o.is("label") ? o.attr("for", l) : 0 === o.parents("label[for='" + this.escapeCssMeta(l) + "']").length && (s = o.attr("id"), h ? h.match(new RegExp("\\b" + this.escapeCssMeta(s) + "\\b")) || (h += " " + s) : h = s, t(e).attr("aria-describedby", h), (r = this.groups[e.name]) && (a = this, t.each(a.groups, (function(e, i) {
                        i === r && t("[name='" + a.escapeCssMeta(e) + "']", a.currentForm).attr("aria-describedby", o.attr("id"))
                    }))))), !i && this.settings.success && (o.text(""), "string" == typeof this.settings.success ? o.addClass(this.settings.success) : this.settings.success(o, e)), this.toShow = this.toShow.add(o)
                },
                errorsFor: function(e) {
                    var i = this.escapeCssMeta(this.idOrName(e)),
                        n = t(e).attr("aria-describedby"),
                        r = "label[for='" + i + "'], label[for='" + i + "'] *";
                    return n && (r = r + ", #" + this.escapeCssMeta(n).replace(/\s+/g, ", #")), this.errors().filter(r)
                },
                escapeCssMeta: function(t) {
                    return t.replace(/([\\!"#$%&'()*+,./:;<=>?@\[\]^`{|}~])/g, "\\$1")
                },
                idOrName: function(t) {
                    return this.groups[t.name] || (this.checkable(t) ? t.name : t.id || t.name)
                },
                validationTargetFor: function(e) {
                    return this.checkable(e) && (e = this.findByName(e.name)), t(e).not(this.settings.ignore)[0]
                },
                checkable: function(t) {
                    return /radio|checkbox/i.test(t.type)
                },
                findByName: function(e) {
                    return t(this.currentForm).find("[name='" + this.escapeCssMeta(e) + "']")
                },
                getLength: function(e, i) {
                    switch (i.nodeName.toLowerCase()) {
                        case "select":
                            return t("option:selected", i).length;
                        case "input":
                            if (this.checkable(i)) return this.findByName(i.name).filter(":checked").length
                    }
                    return e.length
                },
                depend: function(t, e) {
                    return !this.dependTypes[typeof t] || this.dependTypes[typeof t](t, e)
                },
                dependTypes: {
                    boolean: function(t) {
                        return t
                    },
                    string: function(e, i) {
                        return !!t(e, i.form).length
                    },
                    function: function(t, e) {
                        return t(e)
                    }
                },
                optional: function(e) {
                    var i = this.elementValue(e);
                    return !t.validator.methods.required.call(this, i, e) && "dependency-mismatch"
                },
                startRequest: function(e) {
                    this.pending[e.name] || (this.pendingRequest++, t(e).addClass(this.settings.pendingClass), this.pending[e.name] = !0)
                },
                stopRequest: function(e, i) {
                    this.pendingRequest--, this.pendingRequest < 0 && (this.pendingRequest = 0), delete this.pending[e.name], t(e).removeClass(this.settings.pendingClass), i && 0 === this.pendingRequest && this.formSubmitted && this.form() ? (t(this.currentForm).submit(), this.submitButton && t("input:hidden[name='" + this.submitButton.name + "']", this.currentForm).remove(), this.formSubmitted = !1) : !i && 0 === this.pendingRequest && this.formSubmitted && (t(this.currentForm).triggerHandler("invalid-form", [this]), this.formSubmitted = !1)
                },
                previousValue: function(e, i) {
                    return i = "string" == typeof i && i || "remote", t.data(e, "previousValue") || t.data(e, "previousValue", {
                        old: null,
                        valid: !0,
                        message: this.defaultMessage(e, {
                            method: i
                        })
                    })
                },
                destroy: function() {
                    this.resetForm(), t(this.currentForm).off(".validate").removeData("validator").find(".validate-equalTo-blur").off(".validate-equalTo").removeClass("validate-equalTo-blur").find(".validate-lessThan-blur").off(".validate-lessThan").removeClass("validate-lessThan-blur").find(".validate-lessThanEqual-blur").off(".validate-lessThanEqual").removeClass("validate-lessThanEqual-blur").find(".validate-greaterThanEqual-blur").off(".validate-greaterThanEqual").removeClass("validate-greaterThanEqual-blur").find(".validate-greaterThan-blur").off(".validate-greaterThan").removeClass("validate-greaterThan-blur")
                }
            },
            classRuleSettings: {
                required: {
                    required: !0
                },
                email: {
                    email: !0
                },
                url: {
                    url: !0
                },
                date: {
                    date: !0
                },
                dateISO: {
                    dateISO: !0
                },
                number: {
                    number: !0
                },
                digits: {
                    digits: !0
                },
                creditcard: {
                    creditcard: !0
                }
            },
            addClassRules: function(e, i) {
                e.constructor === String ? this.classRuleSettings[e] = i : t.extend(this.classRuleSettings, e)
            },
            classRules: function(e) {
                var i = {},
                    n = t(e).attr("class");
                return n && t.each(n.split(" "), (function() {
                    this in t.validator.classRuleSettings && t.extend(i, t.validator.classRuleSettings[this])
                })), i
            },
            normalizeAttributeRule: function(t, e, i, n) {
                /min|max|step/.test(i) && (null === e || /number|range|text/.test(e)) && (n = Number(n), isNaN(n) && (n = void 0)), n || 0 === n ? t[i] = n : e === i && "range" !== e && (t[i] = !0)
            },
            attributeRules: function(e) {
                var i, n, r = {},
                    s = t(e),
                    a = e.getAttribute("type");
                for (i in t.validator.methods) "required" === i ? ("" === (n = e.getAttribute(i)) && (n = !0), n = !!n) : n = s.attr(i), this.normalizeAttributeRule(r, a, i, n);
                return r.maxlength && /-1|2147483647|524288/.test(r.maxlength) && delete r.maxlength, r
            },
            dataRules: function(e) {
                var i, n, r = {},
                    s = t(e),
                    a = e.getAttribute("type");
                for (i in t.validator.methods) "" === (n = s.data("rule" + i.charAt(0).toUpperCase() + i.substring(1).toLowerCase())) && (n = !0), this.normalizeAttributeRule(r, a, i, n);
                return r
            },
            staticRules: function(e) {
                var i = {},
                    n = t.data(e.form, "validator");
                return n.settings.rules && (i = t.validator.normalizeRule(n.settings.rules[e.name]) || {}), i
            },
            normalizeRules: function(e, i) {
                return t.each(e, (function(n, r) {
                    if (!1 !== r) {
                        if (r.param || r.depends) {
                            var s = !0;
                            switch (typeof r.depends) {
                                case "string":
                                    s = !!t(r.depends, i.form).length;
                                    break;
                                case "function":
                                    s = r.depends.call(i, i)
                            }
                            s ? e[n] = void 0 === r.param || r.param : (t.data(i.form, "validator").resetElements(t(i)), delete e[n])
                        }
                    } else delete e[n]
                })), t.each(e, (function(t, n) {
                    e[t] = "function" == typeof n && "normalizer" !== t ? n(i) : n
                })), t.each(["minlength", "maxlength"], (function() {
                    e[this] && (e[this] = Number(e[this]))
                })), t.each(["rangelength", "range"], (function() {
                    var t;
                    e[this] && (Array.isArray(e[this]) ? e[this] = [Number(e[this][0]), Number(e[this][1])] : "string" == typeof e[this] && (t = e[this].replace(/[\[\]]/g, "").split(/[\s,]+/), e[this] = [Number(t[0]), Number(t[1])]))
                })), t.validator.autoCreateRanges && (null != e.min && null != e.max && (e.range = [e.min, e.max], delete e.min, delete e.max), null != e.minlength && null != e.maxlength && (e.rangelength = [e.minlength, e.maxlength], delete e.minlength, delete e.maxlength)), e
            },
            normalizeRule: function(e) {
                if ("string" == typeof e) {
                    var i = {};
                    t.each(e.split(/\s/), (function() {
                        i[this] = !0
                    })), e = i
                }
                return e
            },
            addMethod: function(e, i, n) {
                t.validator.methods[e] = i, t.validator.messages[e] = void 0 !== n ? n : t.validator.messages[e], i.length < 3 && t.validator.addClassRules(e, t.validator.normalizeRule(e))
            },
            methods: {
                required: function(e, i, n) {
                    if (!this.depend(n, i)) return "dependency-mismatch";
                    if ("select" === i.nodeName.toLowerCase()) {
                        var r = t(i).val();
                        return r && r.length > 0
                    }
                    return this.checkable(i) ? this.getLength(e, i) > 0 : null != e && e.length > 0
                },
                email: function(t, e) {
                    return this.optional(e) || /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(t)
                },
                url: function(t, e) {
                    return this.optional(e) || /^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z0-9\u00a1-\uffff][a-z0-9\u00a1-\uffff_-]{0,62})?[a-z0-9\u00a1-\uffff]\.)+(?:[a-z\u00a1-\uffff]{2,}\.?))(?::\d{2,5})?(?:[/?#]\S*)?$/i.test(t)
                },
                date: (e = !1, function(t, i) {
                    return e || (e = !0, this.settings.debug && window.console && console.warn("The `date` method is deprecated and will be removed in version '2.0.0'.\nPlease don't use it, since it relies on the Date constructor, which\nbehaves very differently across browsers and locales. Use `dateISO`\ninstead or one of the locale specific methods in `localizations/`\nand `additional-methods.js`.")), this.optional(i) || !/Invalid|NaN/.test(new Date(t).toString())
                }),
                dateISO: function(t, e) {
                    return this.optional(e) || /^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$/.test(t)
                },
                number: function(t, e) {
                    return this.optional(e) || /^(?:-?\d+|-?\d{1,3}(?:,\d{3})+)?(?:\.\d+)?$/.test(t)
                },
                digits: function(t, e) {
                    return this.optional(e) || /^\d+$/.test(t)
                },
                minlength: function(t, e, i) {
                    var n = Array.isArray(t) ? t.length : this.getLength(t, e);
                    return this.optional(e) || n >= i
                },
                maxlength: function(t, e, i) {
                    var n = Array.isArray(t) ? t.length : this.getLength(t, e);
                    return this.optional(e) || n <= i
                },
                rangelength: function(t, e, i) {
                    var n = Array.isArray(t) ? t.length : this.getLength(t, e);
                    return this.optional(e) || n >= i[0] && n <= i[1]
                },
                min: function(t, e, i) {
                    return this.optional(e) || t >= i
                },
                max: function(t, e, i) {
                    return this.optional(e) || t <= i
                },
                range: function(t, e, i) {
                    return this.optional(e) || t >= i[0] && t <= i[1]
                },
                step: function(e, i, n) {
                    var r, s = t(i).attr("type"),
                        a = "Step attribute on input type " + s + " is not supported.",
                        o = new RegExp("\\b" + s + "\\b"),
                        l = function(t) {
                            var e = ("" + t).match(/(?:\.(\d+))?$/);
                            return e && e[1] ? e[1].length : 0
                        },
                        h = function(t) {
                            return Math.round(t * Math.pow(10, r))
                        },
                        c = !0;
                    if (s && !o.test(["text", "number", "range"].join())) throw new Error(a);
                    return r = l(n), (l(e) > r || h(e) % h(n) != 0) && (c = !1), this.optional(i) || c
                },
                equalTo: function(e, i, n) {
                    var r = t(n);
                    return this.settings.onfocusout && r.not(".validate-equalTo-blur").length && r.addClass("validate-equalTo-blur").on("blur.validate-equalTo", (function() {
                        t(i).valid()
                    })), e === r.val()
                },
                remote: function(e, i, n, r) {
                    if (this.optional(i)) return "dependency-mismatch";
                    r = "string" == typeof r && r || "remote";
                    var s, a, o, l = this.previousValue(i, r);
                    return this.settings.messages[i.name] || (this.settings.messages[i.name] = {}), l.originalMessage = l.originalMessage || this.settings.messages[i.name][r], this.settings.messages[i.name][r] = l.message, n = "string" == typeof n && {
                        url: n
                    } || n, o = t.param(t.extend({
                        data: e
                    }, n.data)), l.old === o ? l.valid : (l.old = o, s = this, this.startRequest(i), (a = {})[i.name] = e, t.ajax(t.extend(!0, {
                        mode: "abort",
                        port: "validate" + i.name,
                        dataType: "json",
                        data: a,
                        context: s.currentForm,
                        success: function(t) {
                            var n, a, o, h = !0 === t || "true" === t;
                            s.settings.messages[i.name][r] = l.originalMessage, h ? (o = s.formSubmitted, s.resetInternals(), s.toHide = s.errorsFor(i), s.formSubmitted = o, s.successList.push(i), s.invalid[i.name] = !1, s.showErrors()) : (n = {}, a = t || s.defaultMessage(i, {
                                method: r,
                                parameters: e
                            }), n[i.name] = l.message = a, s.invalid[i.name] = !0, s.showErrors(n)), l.valid = h, s.stopRequest(i, h)
                        }
                    }, n)), "pending")
                }
            }
        });
        var n, r = {};
        return t.ajaxPrefilter ? t.ajaxPrefilter((function(t, e, i) {
            var n = t.port;
            "abort" === t.mode && (r[n] && r[n].abort(), r[n] = i)
        })) : (n = t.ajax, t.ajax = function(e) {
            var i = ("mode" in e ? e : t.ajaxSettings).mode,
                s = ("port" in e ? e : t.ajaxSettings).port;
            return "abort" === i ? (r[s] && r[s].abort(), r[s] = n.apply(this, arguments), r[s]) : n.apply(this, arguments)
        }), t
    }) ? n.apply(e, r) : n) || (t.exports = s)
}, function(t, e, i) {
    (function(t) {
        ! function(t, e, i, n) {
            "use strict";
            if (t.console = t.console || {
                    info: function(t) {}
                }, i)
                if (i.fn.fancybox) console.info("fancyBox already initialized");
                else {
                    var r, s, a = {
                            closeExisting: !1,
                            loop: !1,
                            gutter: 50,
                            keyboard: !0,
                            preventCaptionOverlap: !0,
                            arrows: !0,
                            infobar: !0,
                            smallBtn: "auto",
                            toolbar: "auto",
                            buttons: ["zoom", "slideShow", "thumbs", "close"],
                            idleTime: 3,
                            protect: !1,
                            modal: !1,
                            image: {
                                preload: !1
                            },
                            ajax: {
                                settings: {
                                    data: {
                                        fancybox: !0
                                    }
                                }
                            },
                            iframe: {
                                tpl: '<iframe id="fancybox-frame{rnd}" name="fancybox-frame{rnd}" class="fancybox-iframe" allowfullscreen="allowfullscreen" allow="autoplay; fullscreen" src=""></iframe>',
                                preload: !0,
                                css: {},
                                attr: {
                                    scrolling: "auto"
                                }
                            },
                            video: {
                                tpl: '<video class="fancybox-video" controls controlsList="nodownload" poster="{{poster}}"><source src="{{src}}" type="{{format}}" />Sorry, your browser doesn\'t support embedded videos, <a href="{{src}}">download</a> and watch with your favorite video player!</video>',
                                format: "",
                                autoStart: !0
                            },
                            defaultType: "image",
                            animationEffect: "zoom",
                            animationDuration: 366,
                            zoomOpacity: "auto",
                            transitionEffect: "fade",
                            transitionDuration: 366,
                            slideClass: "",
                            baseClass: "",
                            baseTpl: '<div class="fancybox-container" role="dialog" tabindex="-1"><div class="fancybox-bg"></div><div class="fancybox-inner"><div class="fancybox-infobar"><span data-fancybox-index></span>&nbsp;/&nbsp;<span data-fancybox-count></span></div><div class="fancybox-toolbar">{{buttons}}</div><div class="fancybox-navigation">{{arrows}}</div><div class="fancybox-stage"></div><div class="fancybox-caption"><div class="fancybox-caption__body"></div></div></div></div>',
                            spinnerTpl: '<div class="fancybox-loading"></div>',
                            errorTpl: '<div class="fancybox-error"><p>{{ERROR}}</p></div>',
                            btnTpl: {
                                download: '<a download data-fancybox-download class="fancybox-button fancybox-button--download" title="{{DOWNLOAD}}" href="javascript:;"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M18.62 17.09V19H5.38v-1.91zm-2.97-6.96L17 11.45l-5 4.87-5-4.87 1.36-1.32 2.68 2.64V5h1.92v7.77z"/></svg></a>',
                                zoom: '<button data-fancybox-zoom class="fancybox-button fancybox-button--zoom" title="{{ZOOM}}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M18.7 17.3l-3-3a5.9 5.9 0 0 0-.6-7.6 5.9 5.9 0 0 0-8.4 0 5.9 5.9 0 0 0 0 8.4 5.9 5.9 0 0 0 7.7.7l3 3a1 1 0 0 0 1.3 0c.4-.5.4-1 0-1.5zM8.1 13.8a4 4 0 0 1 0-5.7 4 4 0 0 1 5.7 0 4 4 0 0 1 0 5.7 4 4 0 0 1-5.7 0z"/></svg></button>',
                                close: '<button data-fancybox-close class="fancybox-button fancybox-button--close" title="{{CLOSE}}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 10.6L6.6 5.2 5.2 6.6l5.4 5.4-5.4 5.4 1.4 1.4 5.4-5.4 5.4 5.4 1.4-1.4-5.4-5.4 5.4-5.4-1.4-1.4-5.4 5.4z"/></svg></button>',
                                arrowLeft: '<button data-fancybox-prev class="fancybox-button fancybox-button--arrow_left" title="{{PREV}}"><div><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M11.28 15.7l-1.34 1.37L5 12l4.94-5.07 1.34 1.38-2.68 2.72H19v1.94H8.6z"/></svg></div></button>',
                                arrowRight: '<button data-fancybox-next class="fancybox-button fancybox-button--arrow_right" title="{{NEXT}}"><div><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M15.4 12.97l-2.68 2.72 1.34 1.38L19 12l-4.94-5.07-1.34 1.38 2.68 2.72H5v1.94z"/></svg></div></button>',
                                smallBtn: '<button type="button" data-fancybox-close class="fancybox-button fancybox-close-small" title="{{CLOSE}}"><svg xmlns="http://www.w3.org/2000/svg" version="1" viewBox="0 0 24 24"><path d="M13 12l5-5-1-1-5 5-5-5-1 1 5 5-5 5 1 1 5-5 5 5 1-1z"/></svg></button>'
                            },
                            parentEl: "body",
                            hideScrollbar: !0,
                            autoFocus: !0,
                            backFocus: !0,
                            trapFocus: !0,
                            fullScreen: {
                                autoStart: !1
                            },
                            touch: {
                                vertical: !0,
                                momentum: !0
                            },
                            hash: null,
                            media: {},
                            slideShow: {
                                autoStart: !1,
                                speed: 3e3
                            },
                            thumbs: {
                                autoStart: !1,
                                hideOnClose: !0,
                                parentEl: ".fancybox-container",
                                axis: "y"
                            },
                            wheel: "auto",
                            onInit: i.noop,
                            beforeLoad: i.noop,
                            afterLoad: i.noop,
                            beforeShow: i.noop,
                            afterShow: i.noop,
                            beforeClose: i.noop,
                            afterClose: i.noop,
                            onActivate: i.noop,
                            onDeactivate: i.noop,
                            clickContent: function(t, e) {
                                return "image" === t.type && "zoom"
                            },
                            clickSlide: "close",
                            clickOutside: "close",
                            dblclickContent: !1,
                            dblclickSlide: !1,
                            dblclickOutside: !1,
                            mobile: {
                                preventCaptionOverlap: !1,
                                idleTime: !1,
                                clickContent: function(t, e) {
                                    return "image" === t.type && "toggleControls"
                                },
                                clickSlide: function(t, e) {
                                    return "image" === t.type ? "toggleControls" : "close"
                                },
                                dblclickContent: function(t, e) {
                                    return "image" === t.type && "zoom"
                                },
                                dblclickSlide: function(t, e) {
                                    return "image" === t.type && "zoom"
                                }
                            },
                            lang: "en",
                            i18n: {
                                en: {
                                    CLOSE: "Close",
                                    NEXT: "Next",
                                    PREV: "Previous",
                                    ERROR: "The requested content cannot be loaded. <br/> Please try again later.",
                                    PLAY_START: "Start slideshow",
                                    PLAY_STOP: "Pause slideshow",
                                    FULL_SCREEN: "Full screen",
                                    THUMBS: "Thumbnails",
                                    DOWNLOAD: "Download",
                                    SHARE: "Share",
                                    ZOOM: "Zoom"
                                },
                                de: {
                                    CLOSE: "Schlie&szlig;en",
                                    NEXT: "Weiter",
                                    PREV: "Zur&uuml;ck",
                                    ERROR: "Die angeforderten Daten konnten nicht geladen werden. <br/> Bitte versuchen Sie es sp&auml;ter nochmal.",
                                    PLAY_START: "Diaschau starten",
                                    PLAY_STOP: "Diaschau beenden",
                                    FULL_SCREEN: "Vollbild",
                                    THUMBS: "Vorschaubilder",
                                    DOWNLOAD: "Herunterladen",
                                    SHARE: "Teilen",
                                    ZOOM: "Vergr&ouml;&szlig;ern"
                                }
                            }
                        },
                        o = i(t),
                        l = i(e),
                        h = 0,
                        c = t.requestAnimationFrame || t.webkitRequestAnimationFrame || t.mozRequestAnimationFrame || t.oRequestAnimationFrame || function(e) {
                            return t.setTimeout(e, 1e3 / 60)
                        },
                        p = t.cancelAnimationFrame || t.webkitCancelAnimationFrame || t.mozCancelAnimationFrame || t.oCancelAnimationFrame || function(e) {
                            t.clearTimeout(e)
                        },
                        f = function() {
                            var t, i = e.createElement("fakeelement"),
                                n = {
                                    transition: "transitionend",
                                    OTransition: "oTransitionEnd",
                                    MozTransition: "transitionend",
                                    WebkitTransition: "webkitTransitionEnd"
                                };
                            for (t in n)
                                if (void 0 !== i.style[t]) return n[t];
                            return "transitionend"
                        }(),
                        d = function(t) {
                            return t && t.length && t[0].offsetHeight
                        },
                        u = function(t, e) {
                            var n = i.extend(!0, {}, t, e);
                            return i.each(e, (function(t, e) {
                                i.isArray(e) && (n[t] = e)
                            })), n
                        },
                        m = function(t, e, n) {
                            this.opts = u({
                                index: n
                            }, i.fancybox.defaults), i.isPlainObject(e) && (this.opts = u(this.opts, e)), i.fancybox.isMobile && (this.opts = u(this.opts, this.opts.mobile)), this.id = this.opts.id || ++h, this.currIndex = parseInt(this.opts.index, 10) || 0, this.prevIndex = null, this.prevPos = null, this.currPos = 0, this.firstRun = !0, this.group = [], this.slides = {}, this.addContent(t), this.group.length && this.init()
                        };
                    i.extend(m.prototype, {
                        init: function() {
                            var n, r, s = this,
                                a = s.group[s.currIndex].opts;
                            a.closeExisting && i.fancybox.close(!0), i("body").addClass("fancybox-active"), !i.fancybox.getInstance() && !1 !== a.hideScrollbar && !i.fancybox.isMobile && e.body.scrollHeight > t.innerHeight && (i("head").append('<style id="fancybox-style-noscroll" type="text/css">.compensate-for-scrollbar{margin-right:' + (t.innerWidth - e.documentElement.clientWidth) + "px;}</style>"), i("body").addClass("compensate-for-scrollbar")), r = "", i.each(a.buttons, (function(t, e) {
                                r += a.btnTpl[e] || ""
                            })), n = i(s.translate(s, a.baseTpl.replace("{{buttons}}", r).replace("{{arrows}}", a.btnTpl.arrowLeft + a.btnTpl.arrowRight))).attr("id", "fancybox-container-" + s.id).addClass(a.baseClass).data("FancyBox", s).appendTo(a.parentEl), s.$refs = {
                                container: n
                            }, ["bg", "inner", "infobar", "toolbar", "stage", "caption", "navigation"].forEach((function(t) {
                                s.$refs[t] = n.find(".fancybox-" + t)
                            })), s.trigger("onInit"), s.activate(), s.jumpTo(s.currIndex)
                        },
                        translate: function(t, e) {
                            var i = t.opts.i18n[t.opts.lang] || t.opts.i18n.en;
                            return e.replace(/\{\{(\w+)\}\}/g, (function(t, e) {
                                return void 0 === i[e] ? t : i[e]
                            }))
                        },
                        addContent: function(t) {
                            var e, n = this,
                                r = i.makeArray(t);
                            i.each(r, (function(t, e) {
                                var r, s, a, o, l, h = {},
                                    c = {};
                                i.isPlainObject(e) ? (h = e, c = e.opts || e) : "object" === i.type(e) && i(e).length ? (c = (r = i(e)).data() || {}, (c = i.extend(!0, {}, c, c.options)).$orig = r, h.src = n.opts.src || c.src || r.attr("href"), h.type || h.src || (h.type = "inline", h.src = e)) : h = {
                                    type: "html",
                                    src: e + ""
                                }, h.opts = i.extend(!0, {}, n.opts, c), i.isArray(c.buttons) && (h.opts.buttons = c.buttons), i.fancybox.isMobile && h.opts.mobile && (h.opts = u(h.opts, h.opts.mobile)), s = h.type || h.opts.type, o = h.src || "", !s && o && ((a = o.match(/\.(mp4|mov|ogv|webm)((\?|#).*)?$/i)) ? (s = "video", h.opts.video.format || (h.opts.video.format = "video/" + ("ogv" === a[1] ? "ogg" : a[1]))) : o.match(/(^data:image\/[a-z0-9+\/=]*,)|(\.(jp(e|g|eg)|gif|png|bmp|webp|svg|ico)((\?|#).*)?$)/i) ? s = "image" : o.match(/\.(pdf)((\?|#).*)?$/i) ? (s = "iframe", h = i.extend(!0, h, {
                                    contentType: "pdf",
                                    opts: {
                                        iframe: {
                                            preload: !1
                                        }
                                    }
                                })) : "#" === o.charAt(0) && (s = "inline")), s ? h.type = s : n.trigger("objectNeedsType", h), h.contentType || (h.contentType = i.inArray(h.type, ["html", "inline", "ajax"]) > -1 ? "html" : h.type), h.index = n.group.length, "auto" == h.opts.smallBtn && (h.opts.smallBtn = i.inArray(h.type, ["html", "inline", "ajax"]) > -1), "auto" === h.opts.toolbar && (h.opts.toolbar = !h.opts.smallBtn), h.$thumb = h.opts.$thumb || null, h.opts.$trigger && h.index === n.opts.index && (h.$thumb = h.opts.$trigger.find("img:first"), h.$thumb.length && (h.opts.$orig = h.opts.$trigger)), h.$thumb && h.$thumb.length || !h.opts.$orig || (h.$thumb = h.opts.$orig.find("img:first")), h.$thumb && !h.$thumb.length && (h.$thumb = null), h.thumb = h.opts.thumb || (h.$thumb ? h.$thumb[0].src : null), "function" === i.type(h.opts.caption) && (h.opts.caption = h.opts.caption.apply(e, [n, h])), "function" === i.type(n.opts.caption) && (h.opts.caption = n.opts.caption.apply(e, [n, h])), h.opts.caption instanceof i || (h.opts.caption = void 0 === h.opts.caption ? "" : h.opts.caption + ""), "ajax" === h.type && (l = o.split(/\s+/, 2)).length > 1 && (h.src = l.shift(), h.opts.filter = l.shift()), h.opts.modal && (h.opts = i.extend(!0, h.opts, {
                                    trapFocus: !0,
                                    infobar: 0,
                                    toolbar: 0,
                                    smallBtn: 0,
                                    keyboard: 0,
                                    slideShow: 0,
                                    fullScreen: 0,
                                    thumbs: 0,
                                    touch: 0,
                                    clickContent: !1,
                                    clickSlide: !1,
                                    clickOutside: !1,
                                    dblclickContent: !1,
                                    dblclickSlide: !1,
                                    dblclickOutside: !1
                                })), n.group.push(h)
                            })), Object.keys(n.slides).length && (n.updateControls(), (e = n.Thumbs) && e.isActive && (e.create(), e.focus()))
                        },
                        addEvents: function() {
                            var e = this;
                            e.removeEvents(), e.$refs.container.on("click.fb-close", "[data-fancybox-close]", (function(t) {
                                t.stopPropagation(), t.preventDefault(), e.close(t)
                            })).on("touchstart.fb-prev click.fb-prev", "[data-fancybox-prev]", (function(t) {
                                t.stopPropagation(), t.preventDefault(), e.previous()
                            })).on("touchstart.fb-next click.fb-next", "[data-fancybox-next]", (function(t) {
                                t.stopPropagation(), t.preventDefault(), e.next()
                            })).on("click.fb", "[data-fancybox-zoom]", (function(t) {
                                e[e.isScaledDown() ? "scaleToActual" : "scaleToFit"]()
                            })), o.on("orientationchange.fb resize.fb", (function(t) {
                                t && t.originalEvent && "resize" === t.originalEvent.type ? (e.requestId && p(e.requestId), e.requestId = c((function() {
                                    e.update(t)
                                }))) : (e.current && "iframe" === e.current.type && e.$refs.stage.hide(), setTimeout((function() {
                                    e.$refs.stage.show(), e.update(t)
                                }), i.fancybox.isMobile ? 600 : 250))
                            })), l.on("keydown.fb", (function(t) {
                                var n = (i.fancybox ? i.fancybox.getInstance() : null).current,
                                    r = t.keyCode || t.which;
                                if (9 != r) {
                                    if (!(!n.opts.keyboard || t.ctrlKey || t.altKey || t.shiftKey || i(t.target).is("input,textarea,video,audio,select"))) return 8 === r || 27 === r ? (t.preventDefault(), void e.close(t)) : 37 === r || 38 === r ? (t.preventDefault(), void e.previous()) : 39 === r || 40 === r ? (t.preventDefault(), void e.next()) : void e.trigger("afterKeydown", t, r)
                                } else n.opts.trapFocus && e.focus(t)
                            })), e.group[e.currIndex].opts.idleTime && (e.idleSecondsCounter = 0, l.on("mousemove.fb-idle mouseleave.fb-idle mousedown.fb-idle touchstart.fb-idle touchmove.fb-idle scroll.fb-idle keydown.fb-idle", (function(t) {
                                e.idleSecondsCounter = 0, e.isIdle && e.showControls(), e.isIdle = !1
                            })), e.idleInterval = t.setInterval((function() {
                                e.idleSecondsCounter++, e.idleSecondsCounter >= e.group[e.currIndex].opts.idleTime && !e.isDragging && (e.isIdle = !0, e.idleSecondsCounter = 0, e.hideControls())
                            }), 1e3))
                        },
                        removeEvents: function() {
                            o.off("orientationchange.fb resize.fb"), l.off("keydown.fb .fb-idle"), this.$refs.container.off(".fb-close .fb-prev .fb-next"), this.idleInterval && (t.clearInterval(this.idleInterval), this.idleInterval = null)
                        },
                        previous: function(t) {
                            return this.jumpTo(this.currPos - 1, t)
                        },
                        next: function(t) {
                            return this.jumpTo(this.currPos + 1, t)
                        },
                        jumpTo: function(t, e) {
                            var n, r, s, a, o, l, h, c, p, f = this,
                                u = f.group.length;
                            if (!(f.isDragging || f.isClosing || f.isAnimating && f.firstRun)) {
                                if (t = parseInt(t, 10), !(s = f.current ? f.current.opts.loop : f.opts.loop) && (t < 0 || t >= u)) return !1;
                                if (n = f.firstRun = !Object.keys(f.slides).length, o = f.current, f.prevIndex = f.currIndex, f.prevPos = f.currPos, a = f.createSlide(t), u > 1 && ((s || a.index < u - 1) && f.createSlide(t + 1), (s || a.index > 0) && f.createSlide(t - 1)), f.current = a, f.currIndex = a.index, f.currPos = a.pos, f.trigger("beforeShow", n), f.updateControls(), a.forcedDuration = void 0, i.isNumeric(e) ? a.forcedDuration = e : e = a.opts[n ? "animationDuration" : "transitionDuration"], e = parseInt(e, 10), r = f.isMoved(a), a.$slide.addClass("fancybox-slide--current"), n) return a.opts.animationEffect && e && f.$refs.container.css("transition-duration", e + "ms"), f.$refs.container.addClass("fancybox-is-open").trigger("focus"), f.loadSlide(a), void f.preload("image");
                                l = i.fancybox.getTranslate(o.$slide), h = i.fancybox.getTranslate(f.$refs.stage), i.each(f.slides, (function(t, e) {
                                    i.fancybox.stop(e.$slide, !0)
                                })), o.pos !== a.pos && (o.isComplete = !1), o.$slide.removeClass("fancybox-slide--complete fancybox-slide--current"), r ? (p = l.left - (o.pos * l.width + o.pos * o.opts.gutter), i.each(f.slides, (function(t, n) {
                                    n.$slide.removeClass("fancybox-animated").removeClass((function(t, e) {
                                        return (e.match(/(^|\s)fancybox-fx-\S+/g) || []).join(" ")
                                    }));
                                    var r = n.pos * l.width + n.pos * n.opts.gutter;
                                    i.fancybox.setTranslate(n.$slide, {
                                        top: 0,
                                        left: r - h.left + p
                                    }), n.pos !== a.pos && n.$slide.addClass("fancybox-slide--" + (n.pos > a.pos ? "next" : "previous")), d(n.$slide), i.fancybox.animate(n.$slide, {
                                        top: 0,
                                        left: (n.pos - a.pos) * l.width + (n.pos - a.pos) * n.opts.gutter
                                    }, e, (function() {
                                        n.$slide.css({
                                            transform: "",
                                            opacity: ""
                                        }).removeClass("fancybox-slide--next fancybox-slide--previous"), n.pos === f.currPos && f.complete()
                                    }))
                                }))) : e && a.opts.transitionEffect && (c = "fancybox-animated fancybox-fx-" + a.opts.transitionEffect, o.$slide.addClass("fancybox-slide--" + (o.pos > a.pos ? "next" : "previous")), i.fancybox.animate(o.$slide, c, e, (function() {
                                    o.$slide.removeClass(c).removeClass("fancybox-slide--next fancybox-slide--previous")
                                }), !1)), a.isLoaded ? f.revealContent(a) : f.loadSlide(a), f.preload("image")
                            }
                        },
                        createSlide: function(t) {
                            var e, n;
                            return n = (n = t % this.group.length) < 0 ? this.group.length + n : n, !this.slides[t] && this.group[n] && (e = i('<div class="fancybox-slide"></div>').appendTo(this.$refs.stage), this.slides[t] = i.extend(!0, {}, this.group[n], {
                                pos: t,
                                $slide: e,
                                isLoaded: !1
                            }), this.updateSlide(this.slides[t])), this.slides[t]
                        },
                        scaleToActual: function(t, e, n) {
                            var r, s, a, o, l, h = this,
                                c = h.current,
                                p = c.$content,
                                f = i.fancybox.getTranslate(c.$slide).width,
                                d = i.fancybox.getTranslate(c.$slide).height,
                                u = c.width,
                                m = c.height;
                            h.isAnimating || h.isMoved() || !p || "image" != c.type || !c.isLoaded || c.hasError || (h.isAnimating = !0, i.fancybox.stop(p), t = void 0 === t ? .5 * f : t, e = void 0 === e ? .5 * d : e, (r = i.fancybox.getTranslate(p)).top -= i.fancybox.getTranslate(c.$slide).top, r.left -= i.fancybox.getTranslate(c.$slide).left, o = u / r.width, l = m / r.height, s = .5 * f - .5 * u, a = .5 * d - .5 * m, u > f && ((s = r.left * o - (t * o - t)) > 0 && (s = 0), s < f - u && (s = f - u)), m > d && ((a = r.top * l - (e * l - e)) > 0 && (a = 0), a < d - m && (a = d - m)), h.updateCursor(u, m), i.fancybox.animate(p, {
                                top: a,
                                left: s,
                                scaleX: o,
                                scaleY: l
                            }, n || 366, (function() {
                                h.isAnimating = !1
                            })), h.SlideShow && h.SlideShow.isActive && h.SlideShow.stop())
                        },
                        scaleToFit: function(t) {
                            var e, n = this,
                                r = n.current,
                                s = r.$content;
                            n.isAnimating || n.isMoved() || !s || "image" != r.type || !r.isLoaded || r.hasError || (n.isAnimating = !0, i.fancybox.stop(s), e = n.getFitPos(r), n.updateCursor(e.width, e.height), i.fancybox.animate(s, {
                                top: e.top,
                                left: e.left,
                                scaleX: e.width / s.width(),
                                scaleY: e.height / s.height()
                            }, t || 366, (function() {
                                n.isAnimating = !1
                            })))
                        },
                        getFitPos: function(t) {
                            var e, n, r, s, a = t.$content,
                                o = t.$slide,
                                l = t.width || t.opts.width,
                                h = t.height || t.opts.height,
                                c = {};
                            return !!(t.isLoaded && a && a.length) && (e = i.fancybox.getTranslate(this.$refs.stage).width, n = i.fancybox.getTranslate(this.$refs.stage).height, e -= parseFloat(o.css("paddingLeft")) + parseFloat(o.css("paddingRight")) + parseFloat(a.css("marginLeft")) + parseFloat(a.css("marginRight")), n -= parseFloat(o.css("paddingTop")) + parseFloat(o.css("paddingBottom")) + parseFloat(a.css("marginTop")) + parseFloat(a.css("marginBottom")), l && h || (l = e, h = n), (l *= r = Math.min(1, e / l, n / h)) > e - .5 && (l = e), (h *= r) > n - .5 && (h = n), "image" === t.type ? (c.top = Math.floor(.5 * (n - h)) + parseFloat(o.css("paddingTop")), c.left = Math.floor(.5 * (e - l)) + parseFloat(o.css("paddingLeft"))) : "video" === t.contentType && (h > l / (s = t.opts.width && t.opts.height ? l / h : t.opts.ratio || 16 / 9) ? h = l / s : l > h * s && (l = h * s)), c.width = l, c.height = h, c)
                        },
                        update: function(t) {
                            var e = this;
                            i.each(e.slides, (function(i, n) {
                                e.updateSlide(n, t)
                            }))
                        },
                        updateSlide: function(t, e) {
                            var n = t && t.$content,
                                r = t.width || t.opts.width,
                                s = t.height || t.opts.height,
                                a = t.$slide;
                            this.adjustCaption(t), n && (r || s || "video" === t.contentType) && !t.hasError && (i.fancybox.stop(n), i.fancybox.setTranslate(n, this.getFitPos(t)), t.pos === this.currPos && (this.isAnimating = !1, this.updateCursor())), this.adjustLayout(t), a.length && (a.trigger("refresh"), t.pos === this.currPos && this.$refs.toolbar.add(this.$refs.navigation.find(".fancybox-button--arrow_right")).toggleClass("compensate-for-scrollbar", a.get(0).scrollHeight > a.get(0).clientHeight)), this.trigger("onUpdate", t, e)
                        },
                        centerSlide: function(t) {
                            var e = this,
                                n = e.current,
                                r = n.$slide;
                            !e.isClosing && n && (r.siblings().css({
                                transform: "",
                                opacity: ""
                            }), r.parent().children().removeClass("fancybox-slide--previous fancybox-slide--next"), i.fancybox.animate(r, {
                                top: 0,
                                left: 0,
                                opacity: 1
                            }, void 0 === t ? 0 : t, (function() {
                                r.css({
                                    transform: "",
                                    opacity: ""
                                }), n.isComplete || e.complete()
                            }), !1))
                        },
                        isMoved: function(t) {
                            var e, n, r = t || this.current;
                            return !!r && (n = i.fancybox.getTranslate(this.$refs.stage), e = i.fancybox.getTranslate(r.$slide), !r.$slide.hasClass("fancybox-animated") && (Math.abs(e.top - n.top) > .5 || Math.abs(e.left - n.left) > .5))
                        },
                        updateCursor: function(t, e) {
                            var n, r, s = this.current,
                                a = this.$refs.container;
                            s && !this.isClosing && this.Guestures && (a.removeClass("fancybox-is-zoomable fancybox-can-zoomIn fancybox-can-zoomOut fancybox-can-swipe fancybox-can-pan"), r = !!(n = this.canPan(t, e)) || this.isZoomable(), a.toggleClass("fancybox-is-zoomable", r), i("[data-fancybox-zoom]").prop("disabled", !r), n ? a.addClass("fancybox-can-pan") : r && ("zoom" === s.opts.clickContent || i.isFunction(s.opts.clickContent) && "zoom" == s.opts.clickContent(s)) ? a.addClass("fancybox-can-zoomIn") : s.opts.touch && (s.opts.touch.vertical || this.group.length > 1) && "video" !== s.contentType && a.addClass("fancybox-can-swipe"))
                        },
                        isZoomable: function() {
                            var t, e = this.current;
                            if (e && !this.isClosing && "image" === e.type && !e.hasError) {
                                if (!e.isLoaded) return !0;
                                if ((t = this.getFitPos(e)) && (e.width > t.width || e.height > t.height)) return !0
                            }
                            return !1
                        },
                        isScaledDown: function(t, e) {
                            var n = !1,
                                r = this.current,
                                s = r.$content;
                            return void 0 !== t && void 0 !== e ? n = t < r.width && e < r.height : s && (n = (n = i.fancybox.getTranslate(s)).width < r.width && n.height < r.height), n
                        },
                        canPan: function(t, e) {
                            var n = this.current,
                                r = null,
                                s = !1;
                            return "image" === n.type && (n.isComplete || t && e) && !n.hasError && (s = this.getFitPos(n), void 0 !== t && void 0 !== e ? r = {
                                width: t,
                                height: e
                            } : n.isComplete && (r = i.fancybox.getTranslate(n.$content)), r && s && (s = Math.abs(r.width - s.width) > 1.5 || Math.abs(r.height - s.height) > 1.5)), s
                        },
                        loadSlide: function(t) {
                            var e, n, r, s = this;
                            if (!t.isLoading && !t.isLoaded) {
                                if (t.isLoading = !0, !1 === s.trigger("beforeLoad", t)) return t.isLoading = !1, !1;
                                switch (e = t.type, (n = t.$slide).off("refresh").trigger("onReset").addClass(t.opts.slideClass), e) {
                                    case "image":
                                        s.setImage(t);
                                        break;
                                    case "iframe":
                                        s.setIframe(t);
                                        break;
                                    case "html":
                                        s.setContent(t, t.src || t.content);
                                        break;
                                    case "video":
                                        s.setContent(t, t.opts.video.tpl.replace(/\{\{src\}\}/gi, t.src).replace("{{format}}", t.opts.videoFormat || t.opts.video.format || "").replace("{{poster}}", t.thumb || ""));
                                        break;
                                    case "inline":
                                        i(t.src).length ? s.setContent(t, i(t.src)) : s.setError(t);
                                        break;
                                    case "ajax":
                                        s.showLoading(t), r = i.ajax(i.extend({}, t.opts.ajax.settings, {
                                            url: t.src,
                                            success: function(e, i) {
                                                "success" === i && s.setContent(t, e)
                                            },
                                            error: function(e, i) {
                                                e && "abort" !== i && s.setError(t)
                                            }
                                        })), n.one("onReset", (function() {
                                            r.abort()
                                        }));
                                        break;
                                    default:
                                        s.setError(t)
                                }
                                return !0
                            }
                        },
                        setImage: function(t) {
                            var n, r = this;
                            setTimeout((function() {
                                var e = t.$image;
                                r.isClosing || !t.isLoading || e && e.length && e[0].complete || t.hasError || r.showLoading(t)
                            }), 50), r.checkSrcset(t), t.$content = i('<div class="fancybox-content"></div>').addClass("fancybox-is-hidden").appendTo(t.$slide.addClass("fancybox-slide--image")), !1 !== t.opts.preload && t.opts.width && t.opts.height && t.thumb && (t.width = t.opts.width, t.height = t.opts.height, (n = e.createElement("img")).onerror = function() {
                                i(this).remove(), t.$ghost = null
                            }, n.onload = function() {
                                r.afterLoad(t)
                            }, t.$ghost = i(n).addClass("fancybox-image").appendTo(t.$content).attr("src", t.thumb)), r.setBigImage(t)
                        },
                        checkSrcset: function(e) {
                            var i, n, r, s, a = e.opts.srcset || e.opts.image.srcset;
                            if (a) {
                                r = t.devicePixelRatio || 1, s = t.innerWidth * r, (n = a.split(",").map((function(t) {
                                    var e = {};
                                    return t.trim().split(/\s+/).forEach((function(t, i) {
                                        var n = parseInt(t.substring(0, t.length - 1), 10);
                                        if (0 === i) return e.url = t;
                                        n && (e.value = n, e.postfix = t[t.length - 1])
                                    })), e
                                }))).sort((function(t, e) {
                                    return t.value - e.value
                                }));
                                for (var o = 0; o < n.length; o++) {
                                    var l = n[o];
                                    if ("w" === l.postfix && l.value >= s || "x" === l.postfix && l.value >= r) {
                                        i = l;
                                        break
                                    }
                                }!i && n.length && (i = n[n.length - 1]), i && (e.src = i.url, e.width && e.height && "w" == i.postfix && (e.height = e.width / e.height * i.value, e.width = i.value), e.opts.srcset = a)
                            }
                        },
                        setBigImage: function(t) {
                            var n = this,
                                r = e.createElement("img"),
                                s = i(r);
                            t.$image = s.one("error", (function() {
                                n.setError(t)
                            })).one("load", (function() {
                                var e;
                                t.$ghost || (n.resolveImageSlideSize(t, this.naturalWidth, this.naturalHeight), n.afterLoad(t)), n.isClosing || (t.opts.srcset && ((e = t.opts.sizes) && "auto" !== e || (e = (t.width / t.height > 1 && o.width() / o.height() > 1 ? "100" : Math.round(t.width / t.height * 100)) + "vw"), s.attr("sizes", e).attr("srcset", t.opts.srcset)), t.$ghost && setTimeout((function() {
                                    t.$ghost && !n.isClosing && t.$ghost.hide()
                                }), Math.min(300, Math.max(1e3, t.height / 1600))), n.hideLoading(t))
                            })).addClass("fancybox-image").attr("src", t.src).appendTo(t.$content), (r.complete || "complete" == r.readyState) && s.naturalWidth && s.naturalHeight ? s.trigger("load") : r.error && s.trigger("error")
                        },
                        resolveImageSlideSize: function(t, e, i) {
                            var n = parseInt(t.opts.width, 10),
                                r = parseInt(t.opts.height, 10);
                            t.width = e, t.height = i, n > 0 && (t.width = n, t.height = Math.floor(n * i / e)), r > 0 && (t.width = Math.floor(r * e / i), t.height = r)
                        },
                        setIframe: function(t) {
                            var e, n = this,
                                r = t.opts.iframe,
                                s = t.$slide;
                            t.$content = i('<div class="fancybox-content' + (r.preload ? " fancybox-is-hidden" : "") + '"></div>').css(r.css).appendTo(s), s.addClass("fancybox-slide--" + t.contentType), t.$iframe = e = i(r.tpl.replace(/\{rnd\}/g, (new Date).getTime())).attr(r.attr).appendTo(t.$content), r.preload ? (n.showLoading(t), e.on("load.fb error.fb", (function(e) {
                                this.isReady = 1, t.$slide.trigger("refresh"), n.afterLoad(t)
                            })), s.on("refresh.fb", (function() {
                                var i, n = t.$content,
                                    a = r.css.width,
                                    o = r.css.height;
                                if (1 === e[0].isReady) {
                                    try {
                                        i = e.contents().find("body")
                                    } catch (t) {}
                                    i && i.length && i.children().length && (s.css("overflow", "visible"), n.css({
                                        width: "100%",
                                        "max-width": "100%",
                                        height: "9999px"
                                    }), void 0 === a && (a = Math.ceil(Math.max(i[0].clientWidth, i.outerWidth(!0)))), n.css("width", a || "").css("max-width", ""), void 0 === o && (o = Math.ceil(Math.max(i[0].clientHeight, i.outerHeight(!0)))), n.css("height", o || ""), s.css("overflow", "auto")), n.removeClass("fancybox-is-hidden")
                                }
                            }))) : n.afterLoad(t), e.attr("src", t.src), s.one("onReset", (function() {
                                try {
                                    i(this).find("iframe").hide().unbind().attr("src", "//about:blank")
                                } catch (t) {}
                                i(this).off("refresh.fb").empty(), t.isLoaded = !1, t.isRevealed = !1
                            }))
                        },
                        setContent: function(t, e) {
                            var n;
                            this.isClosing || (this.hideLoading(t), t.$content && i.fancybox.stop(t.$content), t.$slide.empty(), (n = e) && n.hasOwnProperty && n instanceof i && e.parent().length ? ((e.hasClass("fancybox-content") || e.parent().hasClass("fancybox-content")) && e.parents(".fancybox-slide").trigger("onReset"), t.$placeholder = i("<div>").hide().insertAfter(e), e.css("display", "inline-block")) : t.hasError || ("string" === i.type(e) && (e = i("<div>").append(i.trim(e)).contents()), t.opts.filter && (e = i("<div>").html(e).find(t.opts.filter))), t.$slide.one("onReset", (function() {
                                i(this).find("video,audio").trigger("pause"), t.$placeholder && (t.$placeholder.after(e.removeClass("fancybox-content").hide()).remove(), t.$placeholder = null), t.$smallBtn && (t.$smallBtn.remove(), t.$smallBtn = null), t.hasError || (i(this).empty(), t.isLoaded = !1, t.isRevealed = !1)
                            })), i(e).appendTo(t.$slide), i(e).is("video,audio") && (i(e).addClass("fancybox-video"), i(e).wrap("<div></div>"), t.contentType = "video", t.opts.width = t.opts.width || i(e).attr("width"), t.opts.height = t.opts.height || i(e).attr("height")), t.$content = t.$slide.children().filter("div,form,main,video,audio,article,.fancybox-content").first(), t.$content.siblings().hide(), t.$content.length || (t.$content = t.$slide.wrapInner("<div></div>").children().first()), t.$content.addClass("fancybox-content"), t.$slide.addClass("fancybox-slide--" + t.contentType), this.afterLoad(t))
                        },
                        setError: function(t) {
                            t.hasError = !0, t.$slide.trigger("onReset").removeClass("fancybox-slide--" + t.contentType).addClass("fancybox-slide--error"), t.contentType = "html", this.setContent(t, this.translate(t, t.opts.errorTpl)), t.pos === this.currPos && (this.isAnimating = !1)
                        },
                        showLoading: function(t) {
                            (t = t || this.current) && !t.$spinner && (t.$spinner = i(this.translate(this, this.opts.spinnerTpl)).appendTo(t.$slide).hide().fadeIn("fast"))
                        },
                        hideLoading: function(t) {
                            (t = t || this.current) && t.$spinner && (t.$spinner.stop().remove(), delete t.$spinner)
                        },
                        afterLoad: function(t) {
                            this.isClosing || (t.isLoading = !1, t.isLoaded = !0, this.trigger("afterLoad", t), this.hideLoading(t), !t.opts.smallBtn || t.$smallBtn && t.$smallBtn.length || (t.$smallBtn = i(this.translate(t, t.opts.btnTpl.smallBtn)).appendTo(t.$content)), t.opts.protect && t.$content && !t.hasError && (t.$content.on("contextmenu.fb", (function(t) {
                                return 2 == t.button && t.preventDefault(), !0
                            })), "image" === t.type && i('<div class="fancybox-spaceball"></div>').appendTo(t.$content)), this.adjustCaption(t), this.adjustLayout(t), t.pos === this.currPos && this.updateCursor(), this.revealContent(t))
                        },
                        adjustCaption: function(t) {
                            var e, i = t || this.current,
                                n = i.opts.caption,
                                r = i.opts.preventCaptionOverlap,
                                s = this.$refs.caption,
                                a = !1;
                            s.toggleClass("fancybox-caption--separate", r), r && n && n.length && (i.pos !== this.currPos ? ((e = s.clone().appendTo(s.parent())).children().eq(0).empty().html(n), a = e.outerHeight(!0), e.empty().remove()) : this.$caption && (a = this.$caption.outerHeight(!0)), i.$slide.css("padding-bottom", a || ""))
                        },
                        adjustLayout: function(t) {
                            var e, i, n, r, s = t || this.current;
                            s.isLoaded && !0 !== s.opts.disableLayoutFix && (s.$content.css("margin-bottom", ""), s.$content.outerHeight() > s.$slide.height() + .5 && (n = s.$slide[0].style["padding-bottom"], r = s.$slide.css("padding-bottom"), parseFloat(r) > 0 && (e = s.$slide[0].scrollHeight, s.$slide.css("padding-bottom", 0), Math.abs(e - s.$slide[0].scrollHeight) < 1 && (i = r), s.$slide.css("padding-bottom", n))), s.$content.css("margin-bottom", i))
                        },
                        revealContent: function(t) {
                            var e, n, r, s, a = this,
                                o = t.$slide,
                                l = !1,
                                h = !1,
                                c = a.isMoved(t),
                                p = t.isRevealed;
                            return t.isRevealed = !0, e = t.opts[a.firstRun ? "animationEffect" : "transitionEffect"], r = t.opts[a.firstRun ? "animationDuration" : "transitionDuration"], r = parseInt(void 0 === t.forcedDuration ? r : t.forcedDuration, 10), !c && t.pos === a.currPos && r || (e = !1), "zoom" === e && (t.pos === a.currPos && r && "image" === t.type && !t.hasError && (h = a.getThumbPos(t)) ? l = a.getFitPos(t) : e = "fade"), "zoom" === e ? (a.isAnimating = !0, l.scaleX = l.width / h.width, l.scaleY = l.height / h.height, "auto" == (s = t.opts.zoomOpacity) && (s = Math.abs(t.width / t.height - h.width / h.height) > .1), s && (h.opacity = .1, l.opacity = 1), i.fancybox.setTranslate(t.$content.removeClass("fancybox-is-hidden"), h), d(t.$content), void i.fancybox.animate(t.$content, l, r, (function() {
                                a.isAnimating = !1, a.complete()
                            }))) : (a.updateSlide(t), e ? (i.fancybox.stop(o), n = "fancybox-slide--" + (t.pos >= a.prevPos ? "next" : "previous") + " fancybox-animated fancybox-fx-" + e, o.addClass(n).removeClass("fancybox-slide--current"), t.$content.removeClass("fancybox-is-hidden"), d(o), "image" !== t.type && t.$content.hide().show(0), void i.fancybox.animate(o, "fancybox-slide--current", r, (function() {
                                o.removeClass(n).css({
                                    transform: "",
                                    opacity: ""
                                }), t.pos === a.currPos && a.complete()
                            }), !0)) : (t.$content.removeClass("fancybox-is-hidden"), p || !c || "image" !== t.type || t.hasError || t.$content.hide().fadeIn("fast"), void(t.pos === a.currPos && a.complete())))
                        },
                        getThumbPos: function(t) {
                            var n, r, s, a, o, l, h = t.$thumb;
                            return !(!h || ! function(t) {
                                var n, r;
                                return !(!t || t.ownerDocument !== e) && (i(".fancybox-container").css("pointer-events", "none"), n = {
                                    x: t.getBoundingClientRect().left + t.offsetWidth / 2,
                                    y: t.getBoundingClientRect().top + t.offsetHeight / 2
                                }, r = e.elementFromPoint(n.x, n.y) === t, i(".fancybox-container").css("pointer-events", ""), r)
                            }(h[0])) && (r = i.fancybox.getTranslate(h), s = parseFloat(h.css("border-top-width") || 0), a = parseFloat(h.css("border-right-width") || 0), o = parseFloat(h.css("border-bottom-width") || 0), l = parseFloat(h.css("border-left-width") || 0), n = {
                                top: r.top + s,
                                left: r.left + l,
                                width: r.width - a - l,
                                height: r.height - s - o,
                                scaleX: 1,
                                scaleY: 1
                            }, r.width > 0 && r.height > 0 && n)
                        },
                        complete: function() {
                            var t, e = this,
                                n = e.current,
                                r = {};
                            !e.isMoved() && n.isLoaded && (n.isComplete || (n.isComplete = !0, n.$slide.siblings().trigger("onReset"), e.preload("inline"), d(n.$slide), n.$slide.addClass("fancybox-slide--complete"), i.each(e.slides, (function(t, n) {
                                n.pos >= e.currPos - 1 && n.pos <= e.currPos + 1 ? r[n.pos] = n : n && (i.fancybox.stop(n.$slide), n.$slide.off().remove())
                            })), e.slides = r), e.isAnimating = !1, e.updateCursor(), e.trigger("afterShow"), n.opts.video.autoStart && n.$slide.find("video,audio").filter(":visible:first").trigger("play").one("ended", (function() {
                                Document.exitFullscreen ? Document.exitFullscreen() : this.webkitExitFullscreen && this.webkitExitFullscreen(), e.next()
                            })), n.opts.autoFocus && "html" === n.contentType && ((t = n.$content.find("input[autofocus]:enabled:visible:first")).length ? t.trigger("focus") : e.focus(null, !0)), n.$slide.scrollTop(0).scrollLeft(0))
                        },
                        preload: function(t) {
                            var e, i;
                            this.group.length < 2 || (i = this.slides[this.currPos + 1], (e = this.slides[this.currPos - 1]) && e.type === t && this.loadSlide(e), i && i.type === t && this.loadSlide(i))
                        },
                        focus: function(t, n) {
                            var r, s, a = ["a[href]", "area[href]", 'input:not([disabled]):not([type="hidden"]):not([aria-hidden])', "select:not([disabled]):not([aria-hidden])", "textarea:not([disabled]):not([aria-hidden])", "button:not([disabled]):not([aria-hidden])", "iframe", "object", "embed", "video", "audio", "[contenteditable]", '[tabindex]:not([tabindex^="-"])'].join(",");
                            this.isClosing || ((r = (r = !t && this.current && this.current.isComplete ? this.current.$slide.find("*:visible" + (n ? ":not(.fancybox-close-small)" : "")) : this.$refs.container.find("*:visible")).filter(a).filter((function() {
                                return "hidden" !== i(this).css("visibility") && !i(this).hasClass("disabled")
                            }))).length ? (s = r.index(e.activeElement), t && t.shiftKey ? (s < 0 || 0 == s) && (t.preventDefault(), r.eq(r.length - 1).trigger("focus")) : (s < 0 || s == r.length - 1) && (t && t.preventDefault(), r.eq(0).trigger("focus"))) : this.$refs.container.trigger("focus"))
                        },
                        activate: function() {
                            var t = this;
                            i(".fancybox-container").each((function() {
                                var e = i(this).data("FancyBox");
                                e && e.id !== t.id && !e.isClosing && (e.trigger("onDeactivate"), e.removeEvents(), e.isVisible = !1)
                            })), t.isVisible = !0, (t.current || t.isIdle) && (t.update(), t.updateControls()), t.trigger("onActivate"), t.addEvents()
                        },
                        close: function(t, e) {
                            var n, r, s, a, o, l, h, p = this,
                                f = p.current,
                                u = function() {
                                    p.cleanUp(t)
                                };
                            return !p.isClosing && (p.isClosing = !0, !1 === p.trigger("beforeClose", t) ? (p.isClosing = !1, c((function() {
                                p.update()
                            })), !1) : (p.removeEvents(), s = f.$content, n = f.opts.animationEffect, r = i.isNumeric(e) ? e : n ? f.opts.animationDuration : 0, f.$slide.removeClass("fancybox-slide--complete fancybox-slide--next fancybox-slide--previous fancybox-animated"), !0 !== t ? i.fancybox.stop(f.$slide) : n = !1, f.$slide.siblings().trigger("onReset").remove(), r && p.$refs.container.removeClass("fancybox-is-open").addClass("fancybox-is-closing").css("transition-duration", r + "ms"), p.hideLoading(f), p.hideControls(!0), p.updateCursor(), "zoom" !== n || s && r && "image" === f.type && !p.isMoved() && !f.hasError && (h = p.getThumbPos(f)) || (n = "fade"), "zoom" === n ? (i.fancybox.stop(s), l = {
                                top: (a = i.fancybox.getTranslate(s)).top,
                                left: a.left,
                                scaleX: a.width / h.width,
                                scaleY: a.height / h.height,
                                width: h.width,
                                height: h.height
                            }, "auto" == (o = f.opts.zoomOpacity) && (o = Math.abs(f.width / f.height - h.width / h.height) > .1), o && (h.opacity = 0), i.fancybox.setTranslate(s, l), d(s), i.fancybox.animate(s, h, r, u), !0) : (n && r ? i.fancybox.animate(f.$slide.addClass("fancybox-slide--previous").removeClass("fancybox-slide--current"), "fancybox-animated fancybox-fx-" + n, r, u) : !0 === t ? setTimeout(u, r) : u(), !0)))
                        },
                        cleanUp: function(e) {
                            var n, r, s, a = this.current.opts.$orig;
                            this.current.$slide.trigger("onReset"), this.$refs.container.empty().remove(), this.trigger("afterClose", e), this.current.opts.backFocus && (a && a.length && a.is(":visible") || (a = this.$trigger), a && a.length && (r = t.scrollX, s = t.scrollY, a.trigger("focus"), i("html, body").scrollTop(s).scrollLeft(r))), this.current = null, (n = i.fancybox.getInstance()) ? n.activate() : (i("body").removeClass("fancybox-active compensate-for-scrollbar"), i("#fancybox-style-noscroll").remove())
                        },
                        trigger: function(t, e) {
                            var n, r = Array.prototype.slice.call(arguments, 1),
                                s = this,
                                a = e && e.opts ? e : s.current;
                            if (a ? r.unshift(a) : a = s, r.unshift(s), i.isFunction(a.opts[t]) && (n = a.opts[t].apply(a, r)), !1 === n) return n;
                            "afterClose" !== t && s.$refs ? s.$refs.container.trigger(t + ".fb", r) : l.trigger(t + ".fb", r)
                        },
                        updateControls: function() {
                            var t = this.current,
                                n = t.index,
                                r = this.$refs.container,
                                s = this.$refs.caption,
                                a = t.opts.caption;
                            t.$slide.trigger("refresh"), a && a.length ? (this.$caption = s, s.children().eq(0).html(a)) : this.$caption = null, this.hasHiddenControls || this.isIdle || this.showControls(), r.find("[data-fancybox-count]").html(this.group.length), r.find("[data-fancybox-index]").html(n + 1), r.find("[data-fancybox-prev]").prop("disabled", !t.opts.loop && n <= 0), r.find("[data-fancybox-next]").prop("disabled", !t.opts.loop && n >= this.group.length - 1), "image" === t.type ? r.find("[data-fancybox-zoom]").show().end().find("[data-fancybox-download]").attr("href", t.opts.image.src || t.src).show() : t.opts.toolbar && r.find("[data-fancybox-download],[data-fancybox-zoom]").hide(), i(e.activeElement).is(":hidden,[disabled]") && this.$refs.container.trigger("focus")
                        },
                        hideControls: function(t) {
                            var e = ["infobar", "toolbar", "nav"];
                            !t && this.current.opts.preventCaptionOverlap || e.push("caption"), this.$refs.container.removeClass(e.map((function(t) {
                                return "fancybox-show-" + t
                            })).join(" ")), this.hasHiddenControls = !0
                        },
                        showControls: function() {
                            var t = this.current ? this.current.opts : this.opts,
                                e = this.$refs.container;
                            this.hasHiddenControls = !1, this.idleSecondsCounter = 0, e.toggleClass("fancybox-show-toolbar", !(!t.toolbar || !t.buttons)).toggleClass("fancybox-show-infobar", !!(t.infobar && this.group.length > 1)).toggleClass("fancybox-show-caption", !!this.$caption).toggleClass("fancybox-show-nav", !!(t.arrows && this.group.length > 1)).toggleClass("fancybox-is-modal", !!t.modal)
                        },
                        toggleControls: function() {
                            this.hasHiddenControls ? this.showControls() : this.hideControls()
                        }
                    }), i.fancybox = {
                        version: "3.5.7",
                        defaults: a,
                        getInstance: function(t) {
                            var e = i('.fancybox-container:not(".fancybox-is-closing"):last').data("FancyBox"),
                                n = Array.prototype.slice.call(arguments, 1);
                            return e instanceof m && ("string" === i.type(t) ? e[t].apply(e, n) : "function" === i.type(t) && t.apply(e, n), e)
                        },
                        open: function(t, e, i) {
                            return new m(t, e, i)
                        },
                        close: function(t) {
                            var e = this.getInstance();
                            e && (e.close(), !0 === t && this.close(t))
                        },
                        destroy: function() {
                            this.close(!0), l.add("body").off("click.fb-start", "**")
                        },
                        isMobile: /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),
                        use3d: (r = e.createElement("div"), t.getComputedStyle && t.getComputedStyle(r) && t.getComputedStyle(r).getPropertyValue("transform") && !(e.documentMode && e.documentMode < 11)),
                        getTranslate: function(t) {
                            var e;
                            return !(!t || !t.length) && {
                                top: (e = t[0].getBoundingClientRect()).top || 0,
                                left: e.left || 0,
                                width: e.width,
                                height: e.height,
                                opacity: parseFloat(t.css("opacity"))
                            }
                        },
                        setTranslate: function(t, e) {
                            var i = "",
                                n = {};
                            if (t && e) return void 0 === e.left && void 0 === e.top || (i = (void 0 === e.left ? t.position().left : e.left) + "px, " + (void 0 === e.top ? t.position().top : e.top) + "px", i = this.use3d ? "translate3d(" + i + ", 0px)" : "translate(" + i + ")"), void 0 !== e.scaleX && void 0 !== e.scaleY ? i += " scale(" + e.scaleX + ", " + e.scaleY + ")" : void 0 !== e.scaleX && (i += " scaleX(" + e.scaleX + ")"), i.length && (n.transform = i), void 0 !== e.opacity && (n.opacity = e.opacity), void 0 !== e.width && (n.width = e.width), void 0 !== e.height && (n.height = e.height), t.css(n)
                        },
                        animate: function(t, e, n, r, s) {
                            var a, o = this;
                            i.isFunction(n) && (r = n, n = null), o.stop(t), a = o.getTranslate(t), t.on(f, (function(l) {
                                (!l || !l.originalEvent || t.is(l.originalEvent.target) && "z-index" != l.originalEvent.propertyName) && (o.stop(t), i.isNumeric(n) && t.css("transition-duration", ""), i.isPlainObject(e) ? void 0 !== e.scaleX && void 0 !== e.scaleY && o.setTranslate(t, {
                                    top: e.top,
                                    left: e.left,
                                    width: a.width * e.scaleX,
                                    height: a.height * e.scaleY,
                                    scaleX: 1,
                                    scaleY: 1
                                }) : !0 !== s && t.removeClass(e), i.isFunction(r) && r(l))
                            })), i.isNumeric(n) && t.css("transition-duration", n + "ms"), i.isPlainObject(e) ? (void 0 !== e.scaleX && void 0 !== e.scaleY && (delete e.width, delete e.height, t.parent().hasClass("fancybox-slide--image") && t.parent().addClass("fancybox-is-scaling")), i.fancybox.setTranslate(t, e)) : t.addClass(e), t.data("timer", setTimeout((function() {
                                t.trigger(f)
                            }), n + 33))
                        },
                        stop: function(t, e) {
                            t && t.length && (clearTimeout(t.data("timer")), e && t.trigger(f), t.off(f).css("transition-duration", ""), t.parent().removeClass("fancybox-is-scaling"))
                        }
                    }, i.fn.fancybox = function(t) {
                        var e;
                        return (e = (t = t || {}).selector || !1) ? i("body").off("click.fb-start", e).on("click.fb-start", e, {
                            options: t
                        }, g) : this.off("click.fb-start").on("click.fb-start", {
                            items: this,
                            options: t
                        }, g), this
                    }, l.on("click.fb-start", "[data-fancybox]", g), l.on("click.fb-start", "[data-fancybox-trigger]", (function(t) {
                        i('[data-fancybox="' + i(this).attr("data-fancybox-trigger") + '"]').eq(i(this).attr("data-fancybox-index") || 0).trigger("click.fb-start", {
                            $trigger: i(this)
                        })
                    })), s = null, l.on("mousedown mouseup focus blur", ".fancybox-button", (function(t) {
                        switch (t.type) {
                            case "mousedown":
                                s = i(this);
                                break;
                            case "mouseup":
                                s = null;
                                break;
                            case "focusin":
                                i(".fancybox-button").removeClass("fancybox-focus"), i(this).is(s) || i(this).is("[disabled]") || i(this).addClass("fancybox-focus");
                                break;
                            case "focusout":
                                i(".fancybox-button").removeClass("fancybox-focus")
                        }
                    }))
                }
            function g(t, e) {
                var n, r, s, a = [],
                    o = 0;
                t && t.isDefaultPrevented() || (t.preventDefault(), e = e || {}, t && t.data && (e = u(t.data.options, e)), n = e.$target || i(t.currentTarget).trigger("blur"), (s = i.fancybox.getInstance()) && s.$trigger && s.$trigger.is(n) || (a = e.selector ? i(e.selector) : (r = n.attr("data-fancybox") || "") ? (a = t.data ? t.data.items : []).length ? a.filter('[data-fancybox="' + r + '"]') : i('[data-fancybox="' + r + '"]') : [n], (o = i(a).index(n)) < 0 && (o = 0), (s = i.fancybox.open(a, e, o)).$trigger = n))
            }
        }(window, document, t),
        function(t) {
            "use strict";
            var e = {
                    youtube: {
                        matcher: /(youtube\.com|youtu\.be|youtube\-nocookie\.com)\/(watch\?(.*&)?v=|v\/|u\/|embed\/?)?(videoseries\?list=(.*)|[\w-]{11}|\?listType=(.*)&list=(.*))(.*)/i,
                        params: {
                            autoplay: 1,
                            autohide: 1,
                            fs: 1,
                            rel: 0,
                            hd: 1,
                            wmode: "transparent",
                            enablejsapi: 1,
                            html5: 1
                        },
                        paramPlace: 8,
                        type: "iframe",
                        url: "https://www.youtube-nocookie.com/embed/$4",
                        thumb: "https://img.youtube.com/vi/$4/hqdefault.jpg"
                    },
                    vimeo: {
                        matcher: /^.+vimeo.com\/(.*\/)?([\d]+)(.*)?/,
                        params: {
                            autoplay: 1,
                            hd: 1,
                            show_title: 1,
                            show_byline: 1,
                            show_portrait: 0,
                            fullscreen: 1
                        },
                        paramPlace: 3,
                        type: "iframe",
                        url: "//player.vimeo.com/video/$2"
                    },
                    instagram: {
                        matcher: /(instagr\.am|instagram\.com)\/p\/([a-zA-Z0-9_\-]+)\/?/i,
                        type: "image",
                        url: "//$1/p/$2/media/?size=l"
                    },
                    gmap_place: {
                        matcher: /(maps\.)?google\.([a-z]{2,3}(\.[a-z]{2})?)\/(((maps\/(place\/(.*)\/)?\@(.*),(\d+.?\d+?)z))|(\?ll=))(.*)?/i,
                        type: "iframe",
                        url: function(t) {
                            return "//maps.google." + t[2] + "/?ll=" + (t[9] ? t[9] + "&z=" + Math.floor(t[10]) + (t[12] ? t[12].replace(/^\//, "&") : "") : t[12] + "").replace(/\?/, "&") + "&output=" + (t[12] && t[12].indexOf("layer=c") > 0 ? "svembed" : "embed")
                        }
                    },
                    gmap_search: {
                        matcher: /(maps\.)?google\.([a-z]{2,3}(\.[a-z]{2})?)\/(maps\/search\/)(.*)/i,
                        type: "iframe",
                        url: function(t) {
                            return "//maps.google." + t[2] + "/maps?q=" + t[5].replace("query=", "q=").replace("api=1", "") + "&output=embed"
                        }
                    }
                },
                i = function(e, i, n) {
                    if (e) return n = n || "", "object" === t.type(n) && (n = t.param(n, !0)), t.each(i, (function(t, i) {
                        e = e.replace("$" + t, i || "")
                    })), n.length && (e += (e.indexOf("?") > 0 ? "&" : "?") + n), e
                };
            t(document).on("objectNeedsType.fb", (function(n, r, s) {
                var a, o, l, h, c, p, f, d = s.src || "",
                    u = !1;
                a = t.extend(!0, {}, e, s.opts.media), t.each(a, (function(e, n) {
                    if (l = d.match(n.matcher)) {
                        if (u = n.type, f = e, p = {}, n.paramPlace && l[n.paramPlace]) {
                            "?" == (c = l[n.paramPlace])[0] && (c = c.substring(1)), c = c.split("&");
                            for (var r = 0; r < c.length; ++r) {
                                var a = c[r].split("=", 2);
                                2 == a.length && (p[a[0]] = decodeURIComponent(a[1].replace(/\+/g, " ")))
                            }
                        }
                        return h = t.extend(!0, {}, n.params, s.opts[e], p), d = "function" === t.type(n.url) ? n.url.call(this, l, h, s) : i(n.url, l, h), o = "function" === t.type(n.thumb) ? n.thumb.call(this, l, h, s) : i(n.thumb, l), "youtube" === e ? d = d.replace(/&t=((\d+)m)?(\d+)s/, (function(t, e, i, n) {
                            return "&start=" + ((i ? 60 * parseInt(i, 10) : 0) + parseInt(n, 10))
                        })) : "vimeo" === e && (d = d.replace("&%23", "#")), !1
                    }
                })), u ? (s.opts.thumb || s.opts.$thumb && s.opts.$thumb.length || (s.opts.thumb = o), "iframe" === u && (s.opts = t.extend(!0, s.opts, {
                    iframe: {
                        preload: !1,
                        attr: {
                            scrolling: "no"
                        }
                    }
                })), t.extend(s, {
                    type: u,
                    src: d,
                    origSrc: s.src,
                    contentSource: f,
                    contentType: "image" === u ? "image" : "gmap_place" == f || "gmap_search" == f ? "map" : "video"
                })) : d && (s.type = s.opts.defaultType)
            }));
            var n = {
                youtube: {
                    src: "https://www.youtube.com/iframe_api",
                    class: "YT",
                    loading: !1,
                    loaded: !1
                },
                vimeo: {
                    src: "https://player.vimeo.com/api/player.js",
                    class: "Vimeo",
                    loading: !1,
                    loaded: !1
                },
                load: function(t) {
                    var e, i = this;
                    this[t].loaded ? setTimeout((function() {
                        i.done(t)
                    })) : this[t].loading || (this[t].loading = !0, (e = document.createElement("script")).type = "text/javascript", e.src = this[t].src, "youtube" === t ? window.onYouTubeIframeAPIReady = function() {
                        i[t].loaded = !0, i.done(t)
                    } : e.onload = function() {
                        i[t].loaded = !0, i.done(t)
                    }, document.body.appendChild(e))
                },
                done: function(e) {
                    var i, n;
                    "youtube" === e && delete window.onYouTubeIframeAPIReady, (i = t.fancybox.getInstance()) && (n = i.current.$content.find("iframe"), "youtube" === e && void 0 !== YT && YT ? new YT.Player(n.attr("id"), {
                        events: {
                            onStateChange: function(t) {
                                0 == t.data && i.next()
                            }
                        }
                    }) : "vimeo" === e && void 0 !== Vimeo && Vimeo && new Vimeo.Player(n).on("ended", (function() {
                        i.next()
                    })))
                }
            };
            t(document).on({
                "afterShow.fb": function(t, e, i) {
                    e.group.length > 1 && ("youtube" === i.contentSource || "vimeo" === i.contentSource) && n.load(i.contentSource)
                }
            })
        }(t),
        function(t, e, i) {
            "use strict";
            var n = t.requestAnimationFrame || t.webkitRequestAnimationFrame || t.mozRequestAnimationFrame || t.oRequestAnimationFrame || function(e) {
                    return t.setTimeout(e, 1e3 / 60)
                },
                r = t.cancelAnimationFrame || t.webkitCancelAnimationFrame || t.mozCancelAnimationFrame || t.oCancelAnimationFrame || function(e) {
                    t.clearTimeout(e)
                },
                s = function(e) {
                    var i = [];
                    for (var n in e = (e = e.originalEvent || e || t.e).touches && e.touches.length ? e.touches : e.changedTouches && e.changedTouches.length ? e.changedTouches : [e]) e[n].pageX ? i.push({
                        x: e[n].pageX,
                        y: e[n].pageY
                    }) : e[n].clientX && i.push({
                        x: e[n].clientX,
                        y: e[n].clientY
                    });
                    return i
                },
                a = function(t, e, i) {
                    return e && t ? "x" === i ? t.x - e.x : "y" === i ? t.y - e.y : Math.sqrt(Math.pow(t.x - e.x, 2) + Math.pow(t.y - e.y, 2)) : 0
                },
                o = function(t) {
                    if (t.is('a,area,button,[role="button"],input,label,select,summary,textarea,video,audio,iframe') || i.isFunction(t.get(0).onclick) || t.data("selectable")) return !0;
                    for (var e = 0, n = t[0].attributes, r = n.length; e < r; e++)
                        if ("data-fancybox-" === n[e].nodeName.substr(0, 14)) return !0;
                    return !1
                },
                l = function(e) {
                    for (var i, n, r, s, a, o = !1; i = e.get(0), n = void 0, r = void 0, s = void 0, a = void 0, n = t.getComputedStyle(i)["overflow-y"], r = t.getComputedStyle(i)["overflow-x"], s = ("scroll" === n || "auto" === n) && i.scrollHeight > i.clientHeight, a = ("scroll" === r || "auto" === r) && i.scrollWidth > i.clientWidth, !(o = s || a) && (e = e.parent()).length && !e.hasClass("fancybox-stage") && !e.is("body"););
                    return o
                },
                h = function(t) {
                    this.instance = t, this.$bg = t.$refs.bg, this.$stage = t.$refs.stage, this.$container = t.$refs.container, this.destroy(), this.$container.on("touchstart.fb.touch mousedown.fb.touch", i.proxy(this, "ontouchstart"))
                };
            h.prototype.destroy = function() {
                this.$container.off(".fb.touch"), i(e).off(".fb.touch"), this.requestId && (r(this.requestId), this.requestId = null), this.tapped && (clearTimeout(this.tapped), this.tapped = null)
            }, h.prototype.ontouchstart = function(n) {
                var r = i(n.target),
                    h = this.instance,
                    c = h.current,
                    p = c.$slide,
                    f = c.$content,
                    d = "touchstart" == n.type;
                if (d && this.$container.off("mousedown.fb.touch"), (!n.originalEvent || 2 != n.originalEvent.button) && p.length && r.length && !o(r) && !o(r.parent()) && (r.is("img") || !(n.originalEvent.clientX > r[0].clientWidth + r.offset().left))) {
                    if (!c || h.isAnimating || c.$slide.hasClass("fancybox-animated")) return n.stopPropagation(), void n.preventDefault();
                    this.realPoints = this.startPoints = s(n), this.startPoints.length && (c.touch && n.stopPropagation(), this.startEvent = n, this.canTap = !0, this.$target = r, this.$content = f, this.opts = c.opts.touch, this.isPanning = !1, this.isSwiping = !1, this.isZooming = !1, this.isScrolling = !1, this.canPan = h.canPan(), this.startTime = (new Date).getTime(), this.distanceX = this.distanceY = this.distance = 0, this.canvasWidth = Math.round(p[0].clientWidth), this.canvasHeight = Math.round(p[0].clientHeight), this.contentLastPos = null, this.contentStartPos = i.fancybox.getTranslate(this.$content) || {
                        top: 0,
                        left: 0
                    }, this.sliderStartPos = i.fancybox.getTranslate(p), this.stagePos = i.fancybox.getTranslate(h.$refs.stage), this.sliderStartPos.top -= this.stagePos.top, this.sliderStartPos.left -= this.stagePos.left, this.contentStartPos.top -= this.stagePos.top, this.contentStartPos.left -= this.stagePos.left, i(e).off(".fb.touch").on(d ? "touchend.fb.touch touchcancel.fb.touch" : "mouseup.fb.touch mouseleave.fb.touch", i.proxy(this, "ontouchend")).on(d ? "touchmove.fb.touch" : "mousemove.fb.touch", i.proxy(this, "ontouchmove")), i.fancybox.isMobile && e.addEventListener("scroll", this.onscroll, !0), ((this.opts || this.canPan) && (r.is(this.$stage) || this.$stage.find(r).length) || (r.is(".fancybox-image") && n.preventDefault(), i.fancybox.isMobile && r.parents(".fancybox-caption").length)) && (this.isScrollable = l(r) || l(r.parent()), i.fancybox.isMobile && this.isScrollable || n.preventDefault(), (1 === this.startPoints.length || c.hasError) && (this.canPan ? (i.fancybox.stop(this.$content), this.isPanning = !0) : this.isSwiping = !0, this.$container.addClass("fancybox-is-grabbing")), 2 === this.startPoints.length && "image" === c.type && (c.isLoaded || c.$ghost) && (this.canTap = !1, this.isSwiping = !1, this.isPanning = !1, this.isZooming = !0, i.fancybox.stop(this.$content), this.centerPointStartX = .5 * (this.startPoints[0].x + this.startPoints[1].x) - i(t).scrollLeft(), this.centerPointStartY = .5 * (this.startPoints[0].y + this.startPoints[1].y) - i(t).scrollTop(), this.percentageOfImageAtPinchPointX = (this.centerPointStartX - this.contentStartPos.left) / this.contentStartPos.width, this.percentageOfImageAtPinchPointY = (this.centerPointStartY - this.contentStartPos.top) / this.contentStartPos.height, this.startDistanceBetweenFingers = a(this.startPoints[0], this.startPoints[1]))))
                }
            }, h.prototype.onscroll = function(t) {
                this.isScrolling = !0, e.removeEventListener("scroll", this.onscroll, !0)
            }, h.prototype.ontouchmove = function(t) {
                void 0 === t.originalEvent.buttons || 0 !== t.originalEvent.buttons ? this.isScrolling ? this.canTap = !1 : (this.newPoints = s(t), (this.opts || this.canPan) && this.newPoints.length && this.newPoints.length && (this.isSwiping && !0 === this.isSwiping || t.preventDefault(), this.distanceX = a(this.newPoints[0], this.startPoints[0], "x"), this.distanceY = a(this.newPoints[0], this.startPoints[0], "y"), this.distance = a(this.newPoints[0], this.startPoints[0]), this.distance > 0 && (this.isSwiping ? this.onSwipe(t) : this.isPanning ? this.onPan() : this.isZooming && this.onZoom()))) : this.ontouchend(t)
            }, h.prototype.onSwipe = function(e) {
                var s, a = this,
                    o = a.instance,
                    l = a.isSwiping,
                    h = a.sliderStartPos.left || 0;
                if (!0 !== l) "x" == l && (a.distanceX > 0 && (a.instance.group.length < 2 || 0 === a.instance.current.index && !a.instance.current.opts.loop) ? h += Math.pow(a.distanceX, .8) : a.distanceX < 0 && (a.instance.group.length < 2 || a.instance.current.index === a.instance.group.length - 1 && !a.instance.current.opts.loop) ? h -= Math.pow(-a.distanceX, .8) : h += a.distanceX), a.sliderLastPos = {
                    top: "x" == l ? 0 : a.sliderStartPos.top + a.distanceY,
                    left: h
                }, a.requestId && (r(a.requestId), a.requestId = null), a.requestId = n((function() {
                    a.sliderLastPos && (i.each(a.instance.slides, (function(t, e) {
                        var n = e.pos - a.instance.currPos;
                        i.fancybox.setTranslate(e.$slide, {
                            top: a.sliderLastPos.top,
                            left: a.sliderLastPos.left + n * a.canvasWidth + n * e.opts.gutter
                        })
                    })), a.$container.addClass("fancybox-is-sliding"))
                }));
                else if (Math.abs(a.distance) > 10) {
                    if (a.canTap = !1, o.group.length < 2 && a.opts.vertical ? a.isSwiping = "y" : o.isDragging || !1 === a.opts.vertical || "auto" === a.opts.vertical && i(t).width() > 800 ? a.isSwiping = "x" : (s = Math.abs(180 * Math.atan2(a.distanceY, a.distanceX) / Math.PI), a.isSwiping = s > 45 && s < 135 ? "y" : "x"), "y" === a.isSwiping && i.fancybox.isMobile && a.isScrollable) return void(a.isScrolling = !0);
                    o.isDragging = a.isSwiping, a.startPoints = a.newPoints, i.each(o.slides, (function(t, e) {
                        var n, r;
                        i.fancybox.stop(e.$slide), n = i.fancybox.getTranslate(e.$slide), r = i.fancybox.getTranslate(o.$refs.stage), e.$slide.css({
                            transform: "",
                            opacity: "",
                            "transition-duration": ""
                        }).removeClass("fancybox-animated").removeClass((function(t, e) {
                            return (e.match(/(^|\s)fancybox-fx-\S+/g) || []).join(" ")
                        })), e.pos === o.current.pos && (a.sliderStartPos.top = n.top - r.top, a.sliderStartPos.left = n.left - r.left), i.fancybox.setTranslate(e.$slide, {
                            top: n.top - r.top,
                            left: n.left - r.left
                        })
                    })), o.SlideShow && o.SlideShow.isActive && o.SlideShow.stop()
                }
            }, h.prototype.onPan = function() {
                var t = this;
                a(t.newPoints[0], t.realPoints[0]) < (i.fancybox.isMobile ? 10 : 5) ? t.startPoints = t.newPoints : (t.canTap = !1, t.contentLastPos = t.limitMovement(), t.requestId && r(t.requestId), t.requestId = n((function() {
                    i.fancybox.setTranslate(t.$content, t.contentLastPos)
                })))
            }, h.prototype.limitMovement = function() {
                var t, e, i, n, r, s, a = this.canvasWidth,
                    o = this.canvasHeight,
                    l = this.distanceX,
                    h = this.distanceY,
                    c = this.contentStartPos,
                    p = c.left,
                    f = c.top,
                    d = c.width,
                    u = c.height;
                return r = d > a ? p + l : p, s = f + h, t = Math.max(0, .5 * a - .5 * d), e = Math.max(0, .5 * o - .5 * u), i = Math.min(a - d, .5 * a - .5 * d), n = Math.min(o - u, .5 * o - .5 * u), l > 0 && r > t && (r = t - 1 + Math.pow(-t + p + l, .8) || 0), l < 0 && r < i && (r = i + 1 - Math.pow(i - p - l, .8) || 0), h > 0 && s > e && (s = e - 1 + Math.pow(-e + f + h, .8) || 0), h < 0 && s < n && (s = n + 1 - Math.pow(n - f - h, .8) || 0), {
                    top: s,
                    left: r
                }
            }, h.prototype.limitPosition = function(t, e, i, n) {
                var r = this.canvasWidth,
                    s = this.canvasHeight;
                return t = i > r ? (t = t > 0 ? 0 : t) < r - i ? r - i : t : Math.max(0, r / 2 - i / 2), {
                    top: e = n > s ? (e = e > 0 ? 0 : e) < s - n ? s - n : e : Math.max(0, s / 2 - n / 2),
                    left: t
                }
            }, h.prototype.onZoom = function() {
                var e = this,
                    s = e.contentStartPos,
                    o = s.width,
                    l = s.height,
                    h = s.left,
                    c = s.top,
                    p = a(e.newPoints[0], e.newPoints[1]) / e.startDistanceBetweenFingers,
                    f = Math.floor(o * p),
                    d = Math.floor(l * p),
                    u = (o - f) * e.percentageOfImageAtPinchPointX,
                    m = (l - d) * e.percentageOfImageAtPinchPointY,
                    g = (e.newPoints[0].x + e.newPoints[1].x) / 2 - i(t).scrollLeft(),
                    y = (e.newPoints[0].y + e.newPoints[1].y) / 2 - i(t).scrollTop(),
                    v = g - e.centerPointStartX,
                    b = {
                        top: c + (m + (y - e.centerPointStartY)),
                        left: h + (u + v),
                        scaleX: p,
                        scaleY: p
                    };
                e.canTap = !1, e.newWidth = f, e.newHeight = d, e.contentLastPos = b, e.requestId && r(e.requestId), e.requestId = n((function() {
                    i.fancybox.setTranslate(e.$content, e.contentLastPos)
                }))
            }, h.prototype.ontouchend = function(t) {
                var n = this.isSwiping,
                    a = this.isPanning,
                    o = this.isZooming,
                    l = this.isScrolling;
                if (this.endPoints = s(t), this.dMs = Math.max((new Date).getTime() - this.startTime, 1), this.$container.removeClass("fancybox-is-grabbing"), i(e).off(".fb.touch"), e.removeEventListener("scroll", this.onscroll, !0), this.requestId && (r(this.requestId), this.requestId = null), this.isSwiping = !1, this.isPanning = !1, this.isZooming = !1, this.isScrolling = !1, this.instance.isDragging = !1, this.canTap) return this.onTap(t);
                this.speed = 100, this.velocityX = this.distanceX / this.dMs * .5, this.velocityY = this.distanceY / this.dMs * .5, a ? this.endPanning() : o ? this.endZooming() : this.endSwiping(n, l)
            }, h.prototype.endSwiping = function(t, e) {
                var n = !1,
                    r = this.instance.group.length,
                    s = Math.abs(this.distanceX),
                    a = "x" == t && r > 1 && (this.dMs > 130 && s > 10 || s > 50);
                this.sliderLastPos = null, "y" == t && !e && Math.abs(this.distanceY) > 50 ? (i.fancybox.animate(this.instance.current.$slide, {
                    top: this.sliderStartPos.top + this.distanceY + 150 * this.velocityY,
                    opacity: 0
                }, 200), n = this.instance.close(!0, 250)) : a && this.distanceX > 0 ? n = this.instance.previous(300) : a && this.distanceX < 0 && (n = this.instance.next(300)), !1 !== n || "x" != t && "y" != t || this.instance.centerSlide(200), this.$container.removeClass("fancybox-is-sliding")
            }, h.prototype.endPanning = function() {
                var t, e, n;
                this.contentLastPos && (!1 === this.opts.momentum || this.dMs > 350 ? (t = this.contentLastPos.left, e = this.contentLastPos.top) : (t = this.contentLastPos.left + 500 * this.velocityX, e = this.contentLastPos.top + 500 * this.velocityY), (n = this.limitPosition(t, e, this.contentStartPos.width, this.contentStartPos.height)).width = this.contentStartPos.width, n.height = this.contentStartPos.height, i.fancybox.animate(this.$content, n, 366))
            }, h.prototype.endZooming = function() {
                var t, e, n, r, s = this.instance.current,
                    a = this.newWidth,
                    o = this.newHeight;
                this.contentLastPos && (t = this.contentLastPos.left, r = {
                    top: e = this.contentLastPos.top,
                    left: t,
                    width: a,
                    height: o,
                    scaleX: 1,
                    scaleY: 1
                }, i.fancybox.setTranslate(this.$content, r), a < this.canvasWidth && o < this.canvasHeight ? this.instance.scaleToFit(150) : a > s.width || o > s.height ? this.instance.scaleToActual(this.centerPointStartX, this.centerPointStartY, 150) : (n = this.limitPosition(t, e, a, o), i.fancybox.animate(this.$content, n, 150)))
            }, h.prototype.onTap = function(e) {
                var n, r = this,
                    a = i(e.target),
                    o = r.instance,
                    l = o.current,
                    h = e && s(e) || r.startPoints,
                    c = h[0] ? h[0].x - i(t).scrollLeft() - r.stagePos.left : 0,
                    p = h[0] ? h[0].y - i(t).scrollTop() - r.stagePos.top : 0,
                    f = function(t) {
                        var n = l.opts[t];
                        if (i.isFunction(n) && (n = n.apply(o, [l, e])), n) switch (n) {
                            case "close":
                                o.close(r.startEvent);
                                break;
                            case "toggleControls":
                                o.toggleControls();
                                break;
                            case "next":
                                o.next();
                                break;
                            case "nextOrClose":
                                o.group.length > 1 ? o.next() : o.close(r.startEvent);
                                break;
                            case "zoom":
                                "image" == l.type && (l.isLoaded || l.$ghost) && (o.canPan() ? o.scaleToFit() : o.isScaledDown() ? o.scaleToActual(c, p) : o.group.length < 2 && o.close(r.startEvent))
                        }
                    };
                if ((!e.originalEvent || 2 != e.originalEvent.button) && (a.is("img") || !(c > a[0].clientWidth + a.offset().left))) {
                    if (a.is(".fancybox-bg,.fancybox-inner,.fancybox-outer,.fancybox-container")) n = "Outside";
                    else if (a.is(".fancybox-slide")) n = "Slide";
                    else {
                        if (!o.current.$content || !o.current.$content.find(a).addBack().filter(a).length) return;
                        n = "Content"
                    }
                    if (r.tapped) {
                        if (clearTimeout(r.tapped), r.tapped = null, Math.abs(c - r.tapX) > 50 || Math.abs(p - r.tapY) > 50) return this;
                        f("dblclick" + n)
                    } else r.tapX = c, r.tapY = p, l.opts["dblclick" + n] && l.opts["dblclick" + n] !== l.opts["click" + n] ? r.tapped = setTimeout((function() {
                        r.tapped = null, o.isAnimating || f("click" + n)
                    }), 500) : f("click" + n);
                    return this
                }
            }, i(e).on("onActivate.fb", (function(t, e) {
                e && !e.Guestures && (e.Guestures = new h(e))
            })).on("beforeClose.fb", (function(t, e) {
                e && e.Guestures && e.Guestures.destroy()
            }))
        }(window, document, t),
        function(t, e) {
            "use strict";
            e.extend(!0, e.fancybox.defaults, {
                btnTpl: {
                    slideShow: '<button data-fancybox-play class="fancybox-button fancybox-button--play" title="{{PLAY_START}}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M6.5 5.4v13.2l11-6.6z"/></svg><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M8.33 5.75h2.2v12.5h-2.2V5.75zm5.15 0h2.2v12.5h-2.2V5.75z"/></svg></button>'
                },
                slideShow: {
                    autoStart: !1,
                    speed: 3e3,
                    progress: !0
                }
            });
            var i = function(t) {
                this.instance = t, this.init()
            };
            e.extend(i.prototype, {
                timer: null,
                isActive: !1,
                $button: null,
                init: function() {
                    var t = this,
                        i = t.instance,
                        n = i.group[i.currIndex].opts.slideShow;
                    t.$button = i.$refs.toolbar.find("[data-fancybox-play]").on("click", (function() {
                        t.toggle()
                    })), i.group.length < 2 || !n ? t.$button.hide() : n.progress && (t.$progress = e('<div class="fancybox-progress"></div>').appendTo(i.$refs.inner))
                },
                set: function(t) {
                    var i = this.instance,
                        n = i.current;
                    n && (!0 === t || n.opts.loop || i.currIndex < i.group.length - 1) ? this.isActive && "video" !== n.contentType && (this.$progress && e.fancybox.animate(this.$progress.show(), {
                        scaleX: 1
                    }, n.opts.slideShow.speed), this.timer = setTimeout((function() {
                        i.current.opts.loop || i.current.index != i.group.length - 1 ? i.next() : i.jumpTo(0)
                    }), n.opts.slideShow.speed)) : (this.stop(), i.idleSecondsCounter = 0, i.showControls())
                },
                clear: function() {
                    clearTimeout(this.timer), this.timer = null, this.$progress && this.$progress.removeAttr("style").hide()
                },
                start: function() {
                    var t = this.instance.current;
                    t && (this.$button.attr("title", (t.opts.i18n[t.opts.lang] || t.opts.i18n.en).PLAY_STOP).removeClass("fancybox-button--play").addClass("fancybox-button--pause"), this.isActive = !0, t.isComplete && this.set(!0), this.instance.trigger("onSlideShowChange", !0))
                },
                stop: function() {
                    var t = this.instance.current;
                    this.clear(), this.$button.attr("title", (t.opts.i18n[t.opts.lang] || t.opts.i18n.en).PLAY_START).removeClass("fancybox-button--pause").addClass("fancybox-button--play"), this.isActive = !1, this.instance.trigger("onSlideShowChange", !1), this.$progress && this.$progress.removeAttr("style").hide()
                },
                toggle: function() {
                    this.isActive ? this.stop() : this.start()
                }
            }), e(t).on({
                "onInit.fb": function(t, e) {
                    e && !e.SlideShow && (e.SlideShow = new i(e))
                },
                "beforeShow.fb": function(t, e, i, n) {
                    var r = e && e.SlideShow;
                    n ? r && i.opts.slideShow.autoStart && r.start() : r && r.isActive && r.clear()
                },
                "afterShow.fb": function(t, e, i) {
                    var n = e && e.SlideShow;
                    n && n.isActive && n.set()
                },
                "afterKeydown.fb": function(i, n, r, s, a) {
                    var o = n && n.SlideShow;
                    !o || !r.opts.slideShow || 80 !== a && 32 !== a || e(t.activeElement).is("button,a,input") || (s.preventDefault(), o.toggle())
                },
                "beforeClose.fb onDeactivate.fb": function(t, e) {
                    var i = e && e.SlideShow;
                    i && i.stop()
                }
            }), e(t).on("visibilitychange", (function() {
                var i = e.fancybox.getInstance(),
                    n = i && i.SlideShow;
                n && n.isActive && (t.hidden ? n.clear() : n.set())
            }))
        }(document, t),
        function(t, e) {
            "use strict";
            var i = function() {
                for (var e = [
                        ["requestFullscreen", "exitFullscreen", "fullscreenElement", "fullscreenEnabled", "fullscreenchange", "fullscreenerror"],
                        ["webkitRequestFullscreen", "webkitExitFullscreen", "webkitFullscreenElement", "webkitFullscreenEnabled", "webkitfullscreenchange", "webkitfullscreenerror"],
                        ["webkitRequestFullScreen", "webkitCancelFullScreen", "webkitCurrentFullScreenElement", "webkitCancelFullScreen", "webkitfullscreenchange", "webkitfullscreenerror"],
                        ["mozRequestFullScreen", "mozCancelFullScreen", "mozFullScreenElement", "mozFullScreenEnabled", "mozfullscreenchange", "mozfullscreenerror"],
                        ["msRequestFullscreen", "msExitFullscreen", "msFullscreenElement", "msFullscreenEnabled", "MSFullscreenChange", "MSFullscreenError"]
                    ], i = {}, n = 0; n < e.length; n++) {
                    var r = e[n];
                    if (r && r[1] in t) {
                        for (var s = 0; s < r.length; s++) i[e[0][s]] = r[s];
                        return i
                    }
                }
                return !1
            }();
            if (i) {
                var n = {
                    request: function(e) {
                        (e = e || t.documentElement)[i.requestFullscreen](e.ALLOW_KEYBOARD_INPUT)
                    },
                    exit: function() {
                        t[i.exitFullscreen]()
                    },
                    toggle: function(e) {
                        e = e || t.documentElement, this.isFullscreen() ? this.exit() : this.request(e)
                    },
                    isFullscreen: function() {
                        return Boolean(t[i.fullscreenElement])
                    },
                    enabled: function() {
                        return Boolean(t[i.fullscreenEnabled])
                    }
                };
                e.extend(!0, e.fancybox.defaults, {
                    btnTpl: {
                        fullScreen: '<button data-fancybox-fullscreen class="fancybox-button fancybox-button--fsenter" title="{{FULL_SCREEN}}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M7 14H5v5h5v-2H7v-3zm-2-4h2V7h3V5H5v5zm12 7h-3v2h5v-5h-2v3zM14 5v2h3v3h2V5h-5z"/></svg><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5 16h3v3h2v-5H5zm3-8H5v2h5V5H8zm6 11h2v-3h3v-2h-5zm2-11V5h-2v5h5V8z"/></svg></button>'
                    },
                    fullScreen: {
                        autoStart: !1
                    }
                }), e(t).on(i.fullscreenchange, (function() {
                    var t = n.isFullscreen(),
                        i = e.fancybox.getInstance();
                    i && (i.current && "image" === i.current.type && i.isAnimating && (i.isAnimating = !1, i.update(!0, !0, 0), i.isComplete || i.complete()), i.trigger("onFullscreenChange", t), i.$refs.container.toggleClass("fancybox-is-fullscreen", t), i.$refs.toolbar.find("[data-fancybox-fullscreen]").toggleClass("fancybox-button--fsenter", !t).toggleClass("fancybox-button--fsexit", t))
                }))
            }
            e(t).on({
                "onInit.fb": function(t, e) {
                    i ? e && e.group[e.currIndex].opts.fullScreen ? (e.$refs.container.on("click.fb-fullscreen", "[data-fancybox-fullscreen]", (function(t) {
                        t.stopPropagation(), t.preventDefault(), n.toggle()
                    })), e.opts.fullScreen && !0 === e.opts.fullScreen.autoStart && n.request(), e.FullScreen = n) : e && e.$refs.toolbar.find("[data-fancybox-fullscreen]").hide() : e.$refs.toolbar.find("[data-fancybox-fullscreen]").remove()
                },
                "afterKeydown.fb": function(t, e, i, n, r) {
                    e && e.FullScreen && 70 === r && (n.preventDefault(), e.FullScreen.toggle())
                },
                "beforeClose.fb": function(t, e) {
                    e && e.FullScreen && e.$refs.container.hasClass("fancybox-is-fullscreen") && n.exit()
                }
            })
        }(document, t),
        function(t, e) {
            "use strict";
            var i = "fancybox-thumbs";
            e.fancybox.defaults = e.extend(!0, {
                btnTpl: {
                    thumbs: '<button data-fancybox-thumbs class="fancybox-button fancybox-button--thumbs" title="{{THUMBS}}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M14.59 14.59h3.76v3.76h-3.76v-3.76zm-4.47 0h3.76v3.76h-3.76v-3.76zm-4.47 0h3.76v3.76H5.65v-3.76zm8.94-4.47h3.76v3.76h-3.76v-3.76zm-4.47 0h3.76v3.76h-3.76v-3.76zm-4.47 0h3.76v3.76H5.65v-3.76zm8.94-4.47h3.76v3.76h-3.76V5.65zm-4.47 0h3.76v3.76h-3.76V5.65zm-4.47 0h3.76v3.76H5.65V5.65z"/></svg></button>'
                },
                thumbs: {
                    autoStart: !1,
                    hideOnClose: !0,
                    parentEl: ".fancybox-container",
                    axis: "y"
                }
            }, e.fancybox.defaults);
            var n = function(t) {
                this.init(t)
            };
            e.extend(n.prototype, {
                $button: null,
                $grid: null,
                $list: null,
                isVisible: !1,
                isActive: !1,
                init: function(t) {
                    var e = this,
                        i = t.group,
                        n = 0;
                    e.instance = t, e.opts = i[t.currIndex].opts.thumbs, t.Thumbs = e, e.$button = t.$refs.toolbar.find("[data-fancybox-thumbs]");
                    for (var r = 0, s = i.length; r < s && (i[r].thumb && n++, !(n > 1)); r++);
                    n > 1 && e.opts ? (e.$button.removeAttr("style").on("click", (function() {
                        e.toggle()
                    })), e.isActive = !0) : e.$button.hide()
                },
                create: function() {
                    var t, n = this.instance,
                        r = this.opts.parentEl,
                        s = [];
                    this.$grid || (this.$grid = e('<div class="' + i + " " + i + "-" + this.opts.axis + '"></div>').appendTo(n.$refs.container.find(r).addBack().filter(r)), this.$grid.on("click", "a", (function() {
                        n.jumpTo(e(this).attr("data-index"))
                    }))), this.$list || (this.$list = e('<div class="' + i + '__list">').appendTo(this.$grid)), e.each(n.group, (function(e, i) {
                        (t = i.thumb) || "image" !== i.type || (t = i.src), s.push('<a href="javascript:;" tabindex="0" data-index="' + e + '"' + (t && t.length ? ' style="background-image:url(' + t + ')"' : 'class="fancybox-thumbs-missing"') + "></a>")
                    })), this.$list[0].innerHTML = s.join(""), "x" === this.opts.axis && this.$list.width(parseInt(this.$grid.css("padding-right"), 10) + n.group.length * this.$list.children().eq(0).outerWidth(!0))
                },
                focus: function(t) {
                    var e, i, n = this.$list,
                        r = this.$grid;
                    this.instance.current && (i = (e = n.children().removeClass("fancybox-thumbs-active").filter('[data-index="' + this.instance.current.index + '"]').addClass("fancybox-thumbs-active")).position(), "y" === this.opts.axis && (i.top < 0 || i.top > n.height() - e.outerHeight()) ? n.stop().animate({
                        scrollTop: n.scrollTop() + i.top
                    }, t) : "x" === this.opts.axis && (i.left < r.scrollLeft() || i.left > r.scrollLeft() + (r.width() - e.outerWidth())) && n.parent().stop().animate({
                        scrollLeft: i.left
                    }, t))
                },
                update: function() {
                    this.instance.$refs.container.toggleClass("fancybox-show-thumbs", this.isVisible), this.isVisible ? (this.$grid || this.create(), this.instance.trigger("onThumbsShow"), this.focus(0)) : this.$grid && this.instance.trigger("onThumbsHide"), this.instance.update()
                },
                hide: function() {
                    this.isVisible = !1, this.update()
                },
                show: function() {
                    this.isVisible = !0, this.update()
                },
                toggle: function() {
                    this.isVisible = !this.isVisible, this.update()
                }
            }), e(t).on({
                "onInit.fb": function(t, e) {
                    var i;
                    e && !e.Thumbs && (i = new n(e)).isActive && !0 === i.opts.autoStart && i.show()
                },
                "beforeShow.fb": function(t, e, i, n) {
                    var r = e && e.Thumbs;
                    r && r.isVisible && r.focus(n ? 0 : 250)
                },
                "afterKeydown.fb": function(t, e, i, n, r) {
                    var s = e && e.Thumbs;
                    s && s.isActive && 71 === r && (n.preventDefault(), s.toggle())
                },
                "beforeClose.fb": function(t, e) {
                    var i = e && e.Thumbs;
                    i && i.isVisible && !1 !== i.opts.hideOnClose && i.$grid.hide()
                }
            })
        }(document, t),
        function(t, e) {
            "use strict";
            e.extend(!0, e.fancybox.defaults, {
                btnTpl: {
                    share: '<button data-fancybox-share class="fancybox-button fancybox-button--share" title="{{SHARE}}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M2.55 19c1.4-8.4 9.1-9.8 11.9-9.8V5l7 7-7 6.3v-3.5c-2.8 0-10.5 2.1-11.9 4.2z"/></svg></button>'
                },
                share: {
                    url: function(t, e) {
                        return !t.currentHash && "inline" !== e.type && "html" !== e.type && (e.origSrc || e.src) || window.location
                    },
                    tpl: '<div class="fancybox-share"><h1>{{SHARE}}</h1><p><a class="fancybox-share__button fancybox-share__button--fb" href="https://www.facebook.com/sharer/sharer.php?u={{url}}"><svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="m287 456v-299c0-21 6-35 35-35h38v-63c-7-1-29-3-55-3-54 0-91 33-91 94v306m143-254h-205v72h196" /></svg><span>Facebook</span></a><a class="fancybox-share__button fancybox-share__button--tw" href="https://twitter.com/intent/tweet?url={{url}}&text={{descr}}"><svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="m456 133c-14 7-31 11-47 13 17-10 30-27 37-46-15 10-34 16-52 20-61-62-157-7-141 75-68-3-129-35-169-85-22 37-11 86 26 109-13 0-26-4-37-9 0 39 28 72 65 80-12 3-25 4-37 2 10 33 41 57 77 57-42 30-77 38-122 34 170 111 378-32 359-208 16-11 30-25 41-42z" /></svg><span>Twitter</span></a><a class="fancybox-share__button fancybox-share__button--pt" href="https://www.pinterest.com/pin/create/button/?url={{url}}&description={{descr}}&media={{media}}"><svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="m265 56c-109 0-164 78-164 144 0 39 15 74 47 87 5 2 10 0 12-5l4-19c2-6 1-8-3-13-9-11-15-25-15-45 0-58 43-110 113-110 62 0 96 38 96 88 0 67-30 122-73 122-24 0-42-19-36-44 6-29 20-60 20-81 0-19-10-35-31-35-25 0-44 26-44 60 0 21 7 36 7 36l-30 125c-8 37-1 83 0 87 0 3 4 4 5 2 2-3 32-39 42-75l16-64c8 16 31 29 56 29 74 0 124-67 124-157 0-69-58-132-146-132z" fill="#fff"/></svg><span>Pinterest</span></a></p><p><input class="fancybox-share__input" type="text" value="{{url_raw}}" onclick="select()" /></p></div>'
                }
            }), e(t).on("click", "[data-fancybox-share]", (function() {
                var t, i, n, r, s = e.fancybox.getInstance(),
                    a = s.current || null;
                a && ("function" === e.type(a.opts.share.url) && (t = a.opts.share.url.apply(a, [s, a])), i = a.opts.share.tpl.replace(/\{\{media\}\}/g, "image" === a.type ? encodeURIComponent(a.src) : "").replace(/\{\{url\}\}/g, encodeURIComponent(t)).replace(/\{\{url_raw\}\}/g, (n = t, r = {
                    "&": "&amp;",
                    "<": "&lt;",
                    ">": "&gt;",
                    '"': "&quot;",
                    "'": "&#39;",
                    "/": "&#x2F;",
                    "`": "&#x60;",
                    "=": "&#x3D;"
                }, String(n).replace(/[&<>"'`=\/]/g, (function(t) {
                    return r[t]
                })))).replace(/\{\{descr\}\}/g, s.$caption ? encodeURIComponent(s.$caption.text()) : ""), e.fancybox.open({
                    src: s.translate(s, i),
                    type: "html",
                    opts: {
                        touch: !1,
                        animationEffect: !1,
                        afterLoad: function(t, e) {
                            s.$refs.container.one("beforeClose.fb", (function() {
                                t.close(null, 0)
                            })), e.$content.find(".fancybox-share__button").click((function() {
                                return window.open(this.href, "Share", "width=550, height=450"), !1
                            }))
                        },
                        mobile: {
                            autoFocus: !1
                        }
                    }
                }))
            }))
        }(document, t),
        function(t, e, i) {
            "use strict";

            function n() {
                var e = t.location.hash.substr(1),
                    i = e.split("-"),
                    n = i.length > 1 && /^\+?\d+$/.test(i[i.length - 1]) && parseInt(i.pop(-1), 10) || 1;
                return {
                    hash: e,
                    index: n < 1 ? 1 : n,
                    gallery: i.join("-")
                }
            }

            function r(t) {
                "" !== t.gallery && i("[data-fancybox='" + i.escapeSelector(t.gallery) + "']").eq(t.index - 1).focus().trigger("click.fb-start")
            }

            function s(t) {
                var e, i;
                return !!t && ("" !== (i = (e = t.current ? t.current.opts : t.opts).hash || (e.$orig ? e.$orig.data("fancybox") || e.$orig.data("fancybox-trigger") : "")) && i)
            }
            i.escapeSelector || (i.escapeSelector = function(t) {
                return (t + "").replace(/([\0-\x1f\x7f]|^-?\d)|^-$|[^\x80-\uFFFF\w-]/g, (function(t, e) {
                    return e ? "\0" === t ? "�" : t.slice(0, -1) + "\\" + t.charCodeAt(t.length - 1).toString(16) + " " : "\\" + t
                }))
            }), i((function() {
                !1 !== i.fancybox.defaults.hash && (i(e).on({
                    "onInit.fb": function(t, e) {
                        var i, r;
                        !1 !== e.group[e.currIndex].opts.hash && (i = n(), (r = s(e)) && i.gallery && r == i.gallery && (e.currIndex = i.index - 1))
                    },
                    "beforeShow.fb": function(i, n, r, a) {
                        var o;
                        r && !1 !== r.opts.hash && (o = s(n)) && (n.currentHash = o + (n.group.length > 1 ? "-" + (r.index + 1) : ""), t.location.hash !== "#" + n.currentHash && (a && !n.origHash && (n.origHash = t.location.hash), n.hashTimer && clearTimeout(n.hashTimer), n.hashTimer = setTimeout((function() {
                            "replaceState" in t.history ? (t.history[a ? "pushState" : "replaceState"]({}, e.title, t.location.pathname + t.location.search + "#" + n.currentHash), a && (n.hasCreatedHistory = !0)) : t.location.hash = n.currentHash, n.hashTimer = null
                        }), 300)))
                    },
                    "beforeClose.fb": function(i, n, r) {
                        r && !1 !== r.opts.hash && (clearTimeout(n.hashTimer), n.currentHash && n.hasCreatedHistory ? t.history.back() : n.currentHash && ("replaceState" in t.history ? t.history.replaceState({}, e.title, t.location.pathname + t.location.search + (n.origHash || "")) : t.location.hash = n.origHash), n.currentHash = null)
                    }
                }), i(t).on("hashchange.fb", (function() {
                    var t = n(),
                        e = null;
                    i.each(i(".fancybox-container").get().reverse(), (function(t, n) {
                        var r = i(n).data("FancyBox");
                        if (r && r.currentHash) return e = r, !1
                    })), e ? e.currentHash === t.gallery + "-" + t.index || 1 === t.index && e.currentHash == t.gallery || (e.currentHash = null, e.close()) : "" !== t.gallery && r(t)
                })), setTimeout((function() {
                    i.fancybox.getInstance() || r(n())
                }), 50))
            }))
        }(window, document, t),
        function(t, e) {
            "use strict";
            var i = (new Date).getTime();
            e(t).on({
                "onInit.fb": function(t, e, n) {
                    e.$refs.stage.on("mousewheel DOMMouseScroll wheel MozMousePixelScroll", (function(t) {
                        var n = e.current,
                            r = (new Date).getTime();
                        e.group.length < 2 || !1 === n.opts.wheel || "auto" === n.opts.wheel && "image" !== n.type || (t.preventDefault(), t.stopPropagation(), n.$slide.hasClass("fancybox-animated") || (t = t.originalEvent || t, r - i < 250 || (i = r, e[(-t.deltaY || -t.deltaX || t.wheelDelta || -t.detail) < 0 ? "next" : "previous"]())))
                    }))
                }
            })
        }(document, t)
    }).call(this, i(0))
}, function(t, e, i) {
    var n = i(11),
        r = i(12);
    "string" == typeof(r = r.__esModule ? r.default : r) && (r = [
        [t.i, r, ""]
    ]);
    var s = {
        insert: "head",
        singleton: !1
    };
    n(r, s);
    t.exports = r.locals || {}
}, function(t, e, i) {
    "use strict";
    var n, r = function() {
            return void 0 === n && (n = Boolean(window && document && document.all && !window.atob)), n
        },
        s = function() {
            var t = {};
            return function(e) {
                if (void 0 === t[e]) {
                    var i = document.querySelector(e);
                    if (window.HTMLIFrameElement && i instanceof window.HTMLIFrameElement) try {
                        i = i.contentDocument.head
                    } catch (t) {
                        i = null
                    }
                    t[e] = i
                }
                return t[e]
            }
        }(),
        a = [];

    function o(t) {
        for (var e = -1, i = 0; i < a.length; i++)
            if (a[i].identifier === t) {
                e = i;
                break
            }
        return e
    }

    function l(t, e) {
        for (var i = {}, n = [], r = 0; r < t.length; r++) {
            var s = t[r],
                l = e.base ? s[0] + e.base : s[0],
                h = i[l] || 0,
                c = "".concat(l, " ").concat(h);
            i[l] = h + 1;
            var p = o(c),
                f = {
                    css: s[1],
                    media: s[2],
                    sourceMap: s[3]
                }; - 1 !== p ? (a[p].references++, a[p].updater(f)) : a.push({
                identifier: c,
                updater: g(f, e),
                references: 1
            }), n.push(c)
        }
        return n
    }

    function h(t) {
        var e = document.createElement("style"),
            n = t.attributes || {};
        if (void 0 === n.nonce) {
            var r = i.nc;
            r && (n.nonce = r)
        }
        if (Object.keys(n).forEach((function(t) {
                e.setAttribute(t, n[t])
            })), "function" == typeof t.insert) t.insert(e);
        else {
            var a = s(t.insert || "head");
            if (!a) throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
            a.appendChild(e)
        }
        return e
    }
    var c, p = (c = [], function(t, e) {
        return c[t] = e, c.filter(Boolean).join("\n")
    });

    function f(t, e, i, n) {
        var r = i ? "" : n.media ? "@media ".concat(n.media, " {").concat(n.css, "}") : n.css;
        if (t.styleSheet) t.styleSheet.cssText = p(e, r);
        else {
            var s = document.createTextNode(r),
                a = t.childNodes;
            a[e] && t.removeChild(a[e]), a.length ? t.insertBefore(s, a[e]) : t.appendChild(s)
        }
    }

    function d(t, e, i) {
        var n = i.css,
            r = i.media,
            s = i.sourceMap;
        if (r ? t.setAttribute("media", r) : t.removeAttribute("media"), s && "undefined" != typeof btoa && (n += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(s)))), " */")), t.styleSheet) t.styleSheet.cssText = n;
        else {
            for (; t.firstChild;) t.removeChild(t.firstChild);
            t.appendChild(document.createTextNode(n))
        }
    }
    var u = null,
        m = 0;

    function g(t, e) {
        var i, n, r;
        if (e.singleton) {
            var s = m++;
            i = u || (u = h(e)), n = f.bind(null, i, s, !1), r = f.bind(null, i, s, !0)
        } else i = h(e), n = d.bind(null, i, e), r = function() {
            ! function(t) {
                if (null === t.parentNode) return !1;
                t.parentNode.removeChild(t)
            }(i)
        };
        return n(t),
            function(e) {
                if (e) {
                    if (e.css === t.css && e.media === t.media && e.sourceMap === t.sourceMap) return;
                    n(t = e)
                } else r()
            }
    }
    t.exports = function(t, e) {
        (e = e || {}).singleton || "boolean" == typeof e.singleton || (e.singleton = r());
        var i = l(t = t || [], e);
        return function(t) {
            if (t = t || [], "[object Array]" === Object.prototype.toString.call(t)) {
                for (var n = 0; n < i.length; n++) {
                    var r = o(i[n]);
                    a[r].references--
                }
                for (var s = l(t, e), h = 0; h < i.length; h++) {
                    var c = o(i[h]);
                    0 === a[c].references && (a[c].updater(), a.splice(c, 1))
                }
                i = s
            }
        }
    }
}, function(t, e, i) {
    "use strict";
    i.r(e);
    var n = i(4),
        r = i.n(n)()(!1);
    r.push([t.i, 'body.compensate-for-scrollbar{overflow:hidden}.fancybox-active{height:auto}.fancybox-is-hidden{left:-9999px;margin:0;position:absolute!important;top:-9999px;visibility:hidden}.fancybox-container{-webkit-backface-visibility:hidden;height:100%;left:0;outline:none;position:fixed;-webkit-tap-highlight-color:transparent;top:0;-ms-touch-action:manipulation;touch-action:manipulation;transform:translateZ(0);width:100%;z-index:99992}.fancybox-container *{box-sizing:border-box}.fancybox-bg,.fancybox-inner,.fancybox-outer,.fancybox-stage{bottom:0;left:0;position:absolute;right:0;top:0}.fancybox-outer{-webkit-overflow-scrolling:touch;overflow-y:auto}.fancybox-bg{background:#1e1e1e;opacity:0;transition-duration:inherit;transition-property:opacity;transition-timing-function:cubic-bezier(.47,0,.74,.71)}.fancybox-is-open .fancybox-bg{opacity:.9;transition-timing-function:cubic-bezier(.22,.61,.36,1)}.fancybox-caption,.fancybox-infobar,.fancybox-navigation .fancybox-button,.fancybox-toolbar{direction:ltr;opacity:0;position:absolute;transition:opacity .25s ease,visibility 0s ease .25s;visibility:hidden;z-index:99997}.fancybox-show-caption .fancybox-caption,.fancybox-show-infobar .fancybox-infobar,.fancybox-show-nav .fancybox-navigation .fancybox-button,.fancybox-show-toolbar .fancybox-toolbar{opacity:1;transition:opacity .25s ease 0s,visibility 0s ease 0s;visibility:visible}.fancybox-infobar{color:#ccc;font-size:13px;-webkit-font-smoothing:subpixel-antialiased;height:44px;left:0;line-height:44px;min-width:44px;mix-blend-mode:difference;padding:0 10px;pointer-events:none;top:0;-webkit-touch-callout:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.fancybox-toolbar{right:0;top:0}.fancybox-stage{direction:ltr;overflow:visible;transform:translateZ(0);z-index:99994}.fancybox-is-open .fancybox-stage{overflow:hidden}.fancybox-slide{-webkit-backface-visibility:hidden;display:none;height:100%;left:0;outline:none;overflow:auto;-webkit-overflow-scrolling:touch;padding:44px;position:absolute;text-align:center;top:0;transition-property:transform,opacity;white-space:normal;width:100%;z-index:99994}.fancybox-slide:before{content:"";display:inline-block;font-size:0;height:100%;vertical-align:middle;width:0}.fancybox-is-sliding .fancybox-slide,.fancybox-slide--current,.fancybox-slide--next,.fancybox-slide--previous{display:block}.fancybox-slide--image{overflow:hidden;padding:44px 0}.fancybox-slide--image:before{display:none}.fancybox-slide--html{padding:6px}.fancybox-content{background:#fff;display:inline-block;margin:0;max-width:100%;overflow:auto;-webkit-overflow-scrolling:touch;padding:44px;position:relative;text-align:left;vertical-align:middle}.fancybox-slide--image .fancybox-content{animation-timing-function:cubic-bezier(.5,0,.14,1);-webkit-backface-visibility:hidden;background:transparent;background-repeat:no-repeat;background-size:100% 100%;left:0;max-width:none;overflow:visible;padding:0;position:absolute;top:0;transform-origin:top left;transition-property:transform,opacity;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:99995}.fancybox-can-zoomOut .fancybox-content{cursor:zoom-out}.fancybox-can-zoomIn .fancybox-content{cursor:zoom-in}.fancybox-can-pan .fancybox-content,.fancybox-can-swipe .fancybox-content{cursor:grab}.fancybox-is-grabbing .fancybox-content{cursor:grabbing}.fancybox-container [data-selectable=true]{cursor:text}.fancybox-image,.fancybox-spaceball{background:transparent;border:0;height:100%;left:0;margin:0;max-height:none;max-width:none;padding:0;position:absolute;top:0;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;width:100%}.fancybox-spaceball{z-index:1}.fancybox-slide--iframe .fancybox-content,.fancybox-slide--map .fancybox-content,.fancybox-slide--pdf .fancybox-content,.fancybox-slide--video .fancybox-content{height:100%;overflow:visible;padding:0;width:100%}.fancybox-slide--video .fancybox-content{background:#000}.fancybox-slide--map .fancybox-content{background:#e5e3df}.fancybox-slide--iframe .fancybox-content{background:#fff}.fancybox-iframe,.fancybox-video{background:transparent;border:0;display:block;height:100%;margin:0;overflow:hidden;padding:0;width:100%}.fancybox-iframe{left:0;position:absolute;top:0}.fancybox-error{background:#fff;cursor:default;max-width:400px;padding:40px;width:100%}.fancybox-error p{color:#444;font-size:16px;line-height:20px;margin:0;padding:0}.fancybox-button{background:rgba(30,30,30,.6);border:0;border-radius:0;box-shadow:none;cursor:pointer;display:inline-block;height:44px;margin:0;padding:10px;position:relative;transition:color .2s;vertical-align:top;visibility:inherit;width:44px}.fancybox-button,.fancybox-button:link,.fancybox-button:visited{color:#ccc}.fancybox-button:hover{color:#fff}.fancybox-button:focus{outline:none}.fancybox-button.fancybox-focus{outline:1px dotted}.fancybox-button[disabled],.fancybox-button[disabled]:hover{color:#888;cursor:default;outline:none}.fancybox-button div{height:100%}.fancybox-button svg{display:block;height:100%;overflow:visible;position:relative;width:100%}.fancybox-button svg path{fill:currentColor;stroke-width:0}.fancybox-button--fsenter svg:nth-child(2),.fancybox-button--fsexit svg:first-child,.fancybox-button--pause svg:first-child,.fancybox-button--play svg:nth-child(2){display:none}.fancybox-progress{background:#ff5268;height:2px;left:0;position:absolute;right:0;top:0;transform:scaleX(0);transform-origin:0;transition-property:transform;transition-timing-function:linear;z-index:99998}.fancybox-close-small{background:transparent;border:0;border-radius:0;color:#ccc;cursor:pointer;opacity:.8;padding:8px;position:absolute;right:-12px;top:-44px;z-index:401}.fancybox-close-small:hover{color:#fff;opacity:1}.fancybox-slide--html .fancybox-close-small{color:currentColor;padding:10px;right:0;top:0}.fancybox-slide--image.fancybox-is-scaling .fancybox-content{overflow:hidden}.fancybox-is-scaling .fancybox-close-small,.fancybox-is-zoomable.fancybox-can-pan .fancybox-close-small{display:none}.fancybox-navigation .fancybox-button{background-clip:content-box;height:100px;opacity:0;position:absolute;top:calc(50% - 50px);width:70px}.fancybox-navigation .fancybox-button div{padding:7px}.fancybox-navigation .fancybox-button--arrow_left{left:0;left:env(safe-area-inset-left);padding:31px 26px 31px 6px}.fancybox-navigation .fancybox-button--arrow_right{padding:31px 6px 31px 26px;right:0;right:env(safe-area-inset-right)}.fancybox-caption{background:linear-gradient(0deg,rgba(0,0,0,.85) 0,rgba(0,0,0,.3) 50%,rgba(0,0,0,.15) 65%,rgba(0,0,0,.075) 75.5%,rgba(0,0,0,.037) 82.85%,rgba(0,0,0,.019) 88%,transparent);bottom:0;color:#eee;font-size:14px;font-weight:400;left:0;line-height:1.5;padding:75px 44px 25px;pointer-events:none;right:0;text-align:center;z-index:99996}@supports (padding:max(0px)){.fancybox-caption{padding:75px max(44px,env(safe-area-inset-right)) max(25px,env(safe-area-inset-bottom)) max(44px,env(safe-area-inset-left))}}.fancybox-caption--separate{margin-top:-50px}.fancybox-caption__body{max-height:50vh;overflow:auto;pointer-events:all}.fancybox-caption a,.fancybox-caption a:link,.fancybox-caption a:visited{color:#ccc;text-decoration:none}.fancybox-caption a:hover{color:#fff;text-decoration:underline}.fancybox-loading{animation:a 1s linear infinite;background:transparent;border:4px solid #888;border-bottom-color:#fff;border-radius:50%;height:50px;left:50%;margin:-25px 0 0 -25px;opacity:.7;padding:0;position:absolute;top:50%;width:50px;z-index:99999}@keyframes a{to{transform:rotate(1turn)}}.fancybox-animated{transition-timing-function:cubic-bezier(0,0,.25,1)}.fancybox-fx-slide.fancybox-slide--previous{opacity:0;transform:translate3d(-100%,0,0)}.fancybox-fx-slide.fancybox-slide--next{opacity:0;transform:translate3d(100%,0,0)}.fancybox-fx-slide.fancybox-slide--current{opacity:1;transform:translateZ(0)}.fancybox-fx-fade.fancybox-slide--next,.fancybox-fx-fade.fancybox-slide--previous{opacity:0;transition-timing-function:cubic-bezier(.19,1,.22,1)}.fancybox-fx-fade.fancybox-slide--current{opacity:1}.fancybox-fx-zoom-in-out.fancybox-slide--previous{opacity:0;transform:scale3d(1.5,1.5,1.5)}.fancybox-fx-zoom-in-out.fancybox-slide--next{opacity:0;transform:scale3d(.5,.5,.5)}.fancybox-fx-zoom-in-out.fancybox-slide--current{opacity:1;transform:scaleX(1)}.fancybox-fx-rotate.fancybox-slide--previous{opacity:0;transform:rotate(-1turn)}.fancybox-fx-rotate.fancybox-slide--next{opacity:0;transform:rotate(1turn)}.fancybox-fx-rotate.fancybox-slide--current{opacity:1;transform:rotate(0deg)}.fancybox-fx-circular.fancybox-slide--previous{opacity:0;transform:scale3d(0,0,0) translate3d(-100%,0,0)}.fancybox-fx-circular.fancybox-slide--next{opacity:0;transform:scale3d(0,0,0) translate3d(100%,0,0)}.fancybox-fx-circular.fancybox-slide--current{opacity:1;transform:scaleX(1) translateZ(0)}.fancybox-fx-tube.fancybox-slide--previous{transform:translate3d(-100%,0,0) scale(.1) skew(-10deg)}.fancybox-fx-tube.fancybox-slide--next{transform:translate3d(100%,0,0) scale(.1) skew(10deg)}.fancybox-fx-tube.fancybox-slide--current{transform:translateZ(0) scale(1)}@media (max-height:576px){.fancybox-slide{padding-left:6px;padding-right:6px}.fancybox-slide--image{padding:6px 0}.fancybox-close-small{right:-6px}.fancybox-slide--image .fancybox-close-small{background:#4e4e4e;color:#f2f4f6;height:36px;opacity:1;padding:6px;right:0;top:0;width:36px}.fancybox-caption{padding-left:12px;padding-right:12px}@supports (padding:max(0px)){.fancybox-caption{padding-left:max(12px,env(safe-area-inset-left));padding-right:max(12px,env(safe-area-inset-right))}}}.fancybox-share{background:#f4f4f4;border-radius:3px;max-width:90%;padding:30px;text-align:center}.fancybox-share h1{color:#222;font-size:35px;font-weight:700;margin:0 0 20px}.fancybox-share p{margin:0;padding:0}.fancybox-share__button{border:0;border-radius:3px;display:inline-block;font-size:14px;font-weight:700;line-height:40px;margin:0 5px 10px;min-width:130px;padding:0 15px;text-decoration:none;transition:all .2s;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;white-space:nowrap}.fancybox-share__button:link,.fancybox-share__button:visited{color:#fff}.fancybox-share__button:hover{text-decoration:none}.fancybox-share__button--fb{background:#3b5998}.fancybox-share__button--fb:hover{background:#344e86}.fancybox-share__button--pt{background:#bd081d}.fancybox-share__button--pt:hover{background:#aa0719}.fancybox-share__button--tw{background:#1da1f2}.fancybox-share__button--tw:hover{background:#0d95e8}.fancybox-share__button svg{height:25px;margin-right:7px;position:relative;top:-1px;vertical-align:middle;width:25px}.fancybox-share__button svg path{fill:#fff}.fancybox-share__input{background:transparent;border:0;border-bottom:1px solid #d7d7d7;border-radius:0;color:#5d5b5b;font-size:14px;margin:10px 0 0;outline:none;padding:10px 15px;width:100%}.fancybox-thumbs{background:#ddd;bottom:0;display:none;margin:0;-webkit-overflow-scrolling:touch;-ms-overflow-style:-ms-autohiding-scrollbar;padding:2px 2px 4px;position:absolute;right:0;-webkit-tap-highlight-color:rgba(0,0,0,0);top:0;width:212px;z-index:99995}.fancybox-thumbs-x{overflow-x:auto;overflow-y:hidden}.fancybox-show-thumbs .fancybox-thumbs{display:block}.fancybox-show-thumbs .fancybox-inner{right:212px}.fancybox-thumbs__list{font-size:0;height:100%;list-style:none;margin:0;overflow-x:hidden;overflow-y:auto;padding:0;position:absolute;position:relative;white-space:nowrap;width:100%}.fancybox-thumbs-x .fancybox-thumbs__list{overflow:hidden}.fancybox-thumbs-y .fancybox-thumbs__list::-webkit-scrollbar{width:7px}.fancybox-thumbs-y .fancybox-thumbs__list::-webkit-scrollbar-track{background:#fff;border-radius:10px;box-shadow:inset 0 0 6px rgba(0,0,0,.3)}.fancybox-thumbs-y .fancybox-thumbs__list::-webkit-scrollbar-thumb{background:#2a2a2a;border-radius:10px}.fancybox-thumbs__list a{-webkit-backface-visibility:hidden;backface-visibility:hidden;background-color:rgba(0,0,0,.1);background-position:50%;background-repeat:no-repeat;background-size:cover;cursor:pointer;float:left;height:75px;margin:2px;max-height:calc(100% - 8px);max-width:calc(50% - 4px);outline:none;overflow:hidden;padding:0;position:relative;-webkit-tap-highlight-color:transparent;width:100px}.fancybox-thumbs__list a:before{border:6px solid #ff5268;bottom:0;content:"";left:0;opacity:0;position:absolute;right:0;top:0;transition:all .2s cubic-bezier(.25,.46,.45,.94);z-index:99991}.fancybox-thumbs__list a:focus:before{opacity:.5}.fancybox-thumbs__list a.fancybox-thumbs-active:before{opacity:1}@media (max-width:576px){.fancybox-thumbs{width:110px}.fancybox-show-thumbs .fancybox-inner{right:110px}.fancybox-thumbs__list a{max-width:calc(100% - 10px)}}', ""]), e.default = r
}, function(t, e, i) {
    "use strict";
    var n = i(0),
        r = i.n(n);

    function s(t) {
        let e = !1;
        return r()(this).one(a.TRANSITION_END, () => {
            e = !0
        }), setTimeout(() => {
            e || a.triggerTransitionEnd(this)
        }, t), this
    }
    const a = {
        TRANSITION_END: "bsTransitionEnd",
        getUID(t) {
            do {
                t += ~~(1e6 * Math.random())
            } while (document.getElementById(t));
            return t
        },
        getSelectorFromElement(t) {
            let e = t.getAttribute("data-target");
            if (!e || "#" === e) {
                const i = t.getAttribute("href");
                e = i && "#" !== i ? i.trim() : ""
            }
            try {
                return document.querySelector(e) ? e : null
            } catch (t) {
                return null
            }
        },
        getTransitionDurationFromElement(t) {
            if (!t) return 0;
            let e = r()(t).css("transition-duration"),
                i = r()(t).css("transition-delay");
            const n = parseFloat(e),
                s = parseFloat(i);
            return n || s ? (e = e.split(",")[0], i = i.split(",")[0], 1e3 * (parseFloat(e) + parseFloat(i))) : 0
        },
        reflow: t => t.offsetHeight,
        triggerTransitionEnd(t) {
            r()(t).trigger("transitionend")
        },
        supportsTransitionEnd: () => Boolean("transitionend"),
        isElement: t => (t[0] || t).nodeType,
        typeCheckConfig(t, e, i) {
            for (const r in i)
                if (Object.prototype.hasOwnProperty.call(i, r)) {
                    const s = i[r],
                        o = e[r],
                        l = o && a.isElement(o) ? "element" : null == (n = o) ? "" + n : {}.toString.call(n).match(/\s([a-z]+)/i)[1].toLowerCase();
                    if (!new RegExp(s).test(l)) throw new Error(t.toUpperCase() + ": " + `Option "${r}" provided type "${l}" ` + `but expected type "${s}".`)
                }
            var n
        },
        findShadowRoot(t) {
            if (!document.documentElement.attachShadow) return null;
            if ("function" == typeof t.getRootNode) {
                const e = t.getRootNode();
                return e instanceof ShadowRoot ? e : null
            }
            return t instanceof ShadowRoot ? t : t.parentNode ? a.findShadowRoot(t.parentNode) : null
        },
        jQueryDetection() {
            if (void 0 === r.a) throw new TypeError("Bootstrap's JavaScript requires jQuery. jQuery must be included before Bootstrap's JavaScript.");
            const t = r.a.fn.jquery.split(" ")[0].split(".");
            if (t[0] < 2 && t[1] < 9 || 1 === t[0] && 9 === t[1] && t[2] < 1 || t[0] >= 4) throw new Error("Bootstrap's JavaScript requires at least jQuery v1.9.1 but less than v4.0.0")
        }
    };
    a.jQueryDetection(), r.a.fn.emulateTransitionEnd = s, r.a.event.special[a.TRANSITION_END] = {
        bindType: "transitionend",
        delegateType: "transitionend",
        handle(t) {
            if (r()(t.target).is(this)) return t.handleObj.handler.apply(this, arguments)
        }
    };
    var o = a;
    const l = "modal",
        h = ".bs.modal",
        c = r.a.fn[l],
        p = {
            backdrop: !0,
            keyboard: !0,
            focus: !0,
            show: !0
        },
        f = {
            backdrop: "(boolean|string)",
            keyboard: "boolean",
            focus: "boolean",
            show: "boolean"
        },
        d = `click${h}.data-api`;
    class u {
        constructor(t, e) {
            this._config = this._getConfig(e), this._element = t, this._dialog = t.querySelector(".modal-dialog"), this._backdrop = null, this._isShown = !1, this._isBodyOverflowing = !1, this._ignoreBackdropClick = !1, this._isTransitioning = !1, this._scrollbarWidth = 0
        }
        static get VERSION() {
            return "4.6.0"
        }
        static get Default() {
            return p
        }
        toggle(t) {
            return this._isShown ? this.hide() : this.show(t)
        }
        show(t) {
            if (this._isShown || this._isTransitioning) return;
            r()(this._element).hasClass("fade") && (this._isTransitioning = !0);
            const e = r.a.Event("show.bs.modal", {
                relatedTarget: t
            });
            r()(this._element).trigger(e), this._isShown || e.isDefaultPrevented() || (this._isShown = !0, this._checkScrollbar(), this._setScrollbar(), this._adjustDialog(), this._setEscapeEvent(), this._setResizeEvent(), r()(this._element).on("click.dismiss.bs.modal", '[data-dismiss="modal"]', t => this.hide(t)), r()(this._dialog).on("mousedown.dismiss.bs.modal", () => {
                r()(this._element).one("mouseup.dismiss.bs.modal", t => {
                    r()(t.target).is(this._element) && (this._ignoreBackdropClick = !0)
                })
            }), this._showBackdrop(() => this._showElement(t)))
        }
        hide(t) {
            if (t && t.preventDefault(), !this._isShown || this._isTransitioning) return;
            const e = r.a.Event("hide.bs.modal");
            if (r()(this._element).trigger(e), !this._isShown || e.isDefaultPrevented()) return;
            this._isShown = !1;
            const i = r()(this._element).hasClass("fade");
            if (i && (this._isTransitioning = !0), this._setEscapeEvent(), this._setResizeEvent(), r()(document).off("focusin.bs.modal"), r()(this._element).removeClass("show"), r()(this._element).off("click.dismiss.bs.modal"), r()(this._dialog).off("mousedown.dismiss.bs.modal"), i) {
                const t = o.getTransitionDurationFromElement(this._element);
                r()(this._element).one(o.TRANSITION_END, t => this._hideModal(t)).emulateTransitionEnd(t)
            } else this._hideModal()
        }
        dispose() {
            [window, this._element, this._dialog].forEach(t => r()(t).off(h)), r()(document).off("focusin.bs.modal"), r.a.removeData(this._element, "bs.modal"), this._config = null, this._element = null, this._dialog = null, this._backdrop = null, this._isShown = null, this._isBodyOverflowing = null, this._ignoreBackdropClick = null, this._isTransitioning = null, this._scrollbarWidth = null
        }
        handleUpdate() {
            this._adjustDialog()
        }
        _getConfig(t) {
            return t = { ...p,
                ...t
            }, o.typeCheckConfig(l, t, f), t
        }
        _triggerBackdropTransition() {
            const t = r.a.Event("hidePrevented.bs.modal");
            if (r()(this._element).trigger(t), t.isDefaultPrevented()) return;
            const e = this._element.scrollHeight > document.documentElement.clientHeight;
            e || (this._element.style.overflowY = "hidden"), this._element.classList.add("modal-static");
            const i = o.getTransitionDurationFromElement(this._dialog);
            r()(this._element).off(o.TRANSITION_END), r()(this._element).one(o.TRANSITION_END, () => {
                this._element.classList.remove("modal-static"), e || r()(this._element).one(o.TRANSITION_END, () => {
                    this._element.style.overflowY = ""
                }).emulateTransitionEnd(this._element, i)
            }).emulateTransitionEnd(i), this._element.focus()
        }
        _showElement(t) {
            const e = r()(this._element).hasClass("fade"),
                i = this._dialog ? this._dialog.querySelector(".modal-body") : null;
            this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE || document.body.appendChild(this._element), this._element.style.display = "block", this._element.removeAttribute("aria-hidden"), this._element.setAttribute("aria-modal", !0), this._element.setAttribute("role", "dialog"), r()(this._dialog).hasClass("modal-dialog-scrollable") && i ? i.scrollTop = 0 : this._element.scrollTop = 0, e && o.reflow(this._element), r()(this._element).addClass("show"), this._config.focus && this._enforceFocus();
            const n = r.a.Event("shown.bs.modal", {
                    relatedTarget: t
                }),
                s = () => {
                    this._config.focus && this._element.focus(), this._isTransitioning = !1, r()(this._element).trigger(n)
                };
            if (e) {
                const t = o.getTransitionDurationFromElement(this._dialog);
                r()(this._dialog).one(o.TRANSITION_END, s).emulateTransitionEnd(t)
            } else s()
        }
        _enforceFocus() {
            r()(document).off("focusin.bs.modal").on("focusin.bs.modal", t => {
                document !== t.target && this._element !== t.target && 0 === r()(this._element).has(t.target).length && this._element.focus()
            })
        }
        _setEscapeEvent() {
            this._isShown ? r()(this._element).on("keydown.dismiss.bs.modal", t => {
                this._config.keyboard && 27 === t.which ? (t.preventDefault(), this.hide()) : this._config.keyboard || 27 !== t.which || this._triggerBackdropTransition()
            }) : this._isShown || r()(this._element).off("keydown.dismiss.bs.modal")
        }
        _setResizeEvent() {
            this._isShown ? r()(window).on("resize.bs.modal", t => this.handleUpdate(t)) : r()(window).off("resize.bs.modal")
        }
        _hideModal() {
            this._element.style.display = "none", this._element.setAttribute("aria-hidden", !0), this._element.removeAttribute("aria-modal"), this._element.removeAttribute("role"), this._isTransitioning = !1, this._showBackdrop(() => {
                r()(document.body).removeClass("modal-open"), this._resetAdjustments(), this._resetScrollbar(), r()(this._element).trigger("hidden.bs.modal")
            })
        }
        _removeBackdrop() {
            this._backdrop && (r()(this._backdrop).remove(), this._backdrop = null)
        }
        _showBackdrop(t) {
            const e = r()(this._element).hasClass("fade") ? "fade" : "";
            if (this._isShown && this._config.backdrop) {
                if (this._backdrop = document.createElement("div"), this._backdrop.className = "modal-backdrop", e && this._backdrop.classList.add(e), r()(this._backdrop).appendTo(document.body), r()(this._element).on("click.dismiss.bs.modal", t => {
                        this._ignoreBackdropClick ? this._ignoreBackdropClick = !1 : t.target === t.currentTarget && ("static" === this._config.backdrop ? this._triggerBackdropTransition() : this.hide())
                    }), e && o.reflow(this._backdrop), r()(this._backdrop).addClass("show"), !t) return;
                if (!e) return void t();
                const i = o.getTransitionDurationFromElement(this._backdrop);
                r()(this._backdrop).one(o.TRANSITION_END, t).emulateTransitionEnd(i)
            } else if (!this._isShown && this._backdrop) {
                r()(this._backdrop).removeClass("show");
                const e = () => {
                    this._removeBackdrop(), t && t()
                };
                if (r()(this._element).hasClass("fade")) {
                    const t = o.getTransitionDurationFromElement(this._backdrop);
                    r()(this._backdrop).one(o.TRANSITION_END, e).emulateTransitionEnd(t)
                } else e()
            } else t && t()
        }
        _adjustDialog() {
            const t = this._element.scrollHeight > document.documentElement.clientHeight;
            !this._isBodyOverflowing && t && (this._element.style.paddingLeft = this._scrollbarWidth + "px"), this._isBodyOverflowing && !t && (this._element.style.paddingRight = this._scrollbarWidth + "px")
        }
        _resetAdjustments() {
            this._element.style.paddingLeft = "", this._element.style.paddingRight = ""
        }
        _checkScrollbar() {
            const t = document.body.getBoundingClientRect();
            this._isBodyOverflowing = Math.round(t.left + t.right) < window.innerWidth, this._scrollbarWidth = this._getScrollbarWidth()
        }
        _setScrollbar() {
            if (this._isBodyOverflowing) {
                const t = [].slice.call(document.querySelectorAll(".fixed-top, .fixed-bottom, .is-fixed, .sticky-top")),
                    e = [].slice.call(document.querySelectorAll(".sticky-top"));
                r()(t).each((t, e) => {
                    const i = e.style.paddingRight,
                        n = r()(e).css("padding-right");
                    r()(e).data("padding-right", i).css("padding-right", parseFloat(n) + this._scrollbarWidth + "px")
                }), r()(e).each((t, e) => {
                    const i = e.style.marginRight,
                        n = r()(e).css("margin-right");
                    r()(e).data("margin-right", i).css("margin-right", parseFloat(n) - this._scrollbarWidth + "px")
                });
                const i = document.body.style.paddingRight,
                    n = r()(document.body).css("padding-right");
                r()(document.body).data("padding-right", i).css("padding-right", parseFloat(n) + this._scrollbarWidth + "px")
            }
            r()(document.body).addClass("modal-open")
        }
        _resetScrollbar() {
            const t = [].slice.call(document.querySelectorAll(".fixed-top, .fixed-bottom, .is-fixed, .sticky-top"));
            r()(t).each((t, e) => {
                const i = r()(e).data("padding-right");
                r()(e).removeData("padding-right"), e.style.paddingRight = i || ""
            });
            const e = [].slice.call(document.querySelectorAll(".sticky-top"));
            r()(e).each((t, e) => {
                const i = r()(e).data("margin-right");
                void 0 !== i && r()(e).css("margin-right", i).removeData("margin-right")
            });
            const i = r()(document.body).data("padding-right");
            r()(document.body).removeData("padding-right"), document.body.style.paddingRight = i || ""
        }
        _getScrollbarWidth() {
            const t = document.createElement("div");
            t.className = "modal-scrollbar-measure", document.body.appendChild(t);
            const e = t.getBoundingClientRect().width - t.clientWidth;
            return document.body.removeChild(t), e
        }
        static _jQueryInterface(t, e) {
            return this.each((function() {
                let i = r()(this).data("bs.modal");
                const n = { ...p,
                    ...r()(this).data(),
                    ..."object" == typeof t && t ? t : {}
                };
                if (i || (i = new u(this, n), r()(this).data("bs.modal", i)), "string" == typeof t) {
                    if (void 0 === i[t]) throw new TypeError(`No method named "${t}"`);
                    i[t](e)
                } else n.show && i.show(e)
            }))
        }
    }
    r()(document).on(d, '[data-toggle="modal"]', (function(t) {
        let e;
        const i = o.getSelectorFromElement(this);
        i && (e = document.querySelector(i));
        const n = r()(e).data("bs.modal") ? "toggle" : { ...r()(e).data(),
            ...r()(this).data()
        };
        "A" !== this.tagName && "AREA" !== this.tagName || t.preventDefault();
        const s = r()(e).one("show.bs.modal", t => {
            t.isDefaultPrevented() || s.one("hidden.bs.modal", () => {
                r()(this).is(":visible") && this.focus()
            })
        });
        u._jQueryInterface.call(r()(e), n, this)
    })), r.a.fn[l] = u._jQueryInterface, r.a.fn[l].Constructor = u, r.a.fn[l].noConflict = () => (r.a.fn[l] = c, u._jQueryInterface)
}]);