$(document).ready(function () {
     refreshProductImages();
    $('.product_quantity_up').click(function (e) {
        e.preventDefault();
        fieldName = $(this).attr('rel');
        var currentVal = parseInt($('input[name=' + fieldName + ']').val());
        if (quantityAvailable > 0) {
            quantityAvailableT = quantityAvailable;
        } else {
            quantityAvailableT = 100000000;
        }
        if (!isNaN(currentVal) && currentVal < quantityAvailableT) {
            $('input[name=' + fieldName + ']').val(currentVal + 1).trigger('keyup');
        } else {
            $('input[name=' + fieldName + ']').val(quantityAvailableT);
        }
        return false;
    });
    $(".product_quantity_down").click(function (e) {
        e.preventDefault();
        fieldName = $(this).attr('rel');
        var currentVal = parseInt($('input[name=' + fieldName + ']').val());
        if (!isNaN(currentVal) && currentVal > 1) {
            $('input[name=' + fieldName + ']').val(currentVal - 1).trigger('keyup');
        } else {
            $('input[name=' + fieldName + ']').val(1);
        }
        return false;
    });
});;





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
})(jQuery);;;

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



function serialScrollFixLock(event, targeted, scrolled, items, position) {
    if ($('body').find('.container').outerWidth() == 1170) {
        serialScrollNbImagesDisplayed = 4;
    } else if (1170 > $('body').find('.container').width() > 720) {
        serialScrollNbImagesDisplayed = 3;
    } else if ($('body').find('.container').width() == 720) {
        serialScrollNbImagesDisplayed = 2;
    } else {
        serialScrollNbImagesDisplayed = 3;
    }
    serialScrollNbImages = $('#thumbs_list li:visible').length;
    var leftArrow = position == 0 ? true : false;
    var rightArrow = position + serialScrollNbImagesDisplayed >= serialScrollNbImages ? true : false;
    $('#view_scroll_left').css('cursor', leftArrow ? 'default' : 'pointer').fadeTo(0, leftArrow ? 0 : 1).css('display', leftArrow ? 'none' : 'block');
    $('#view_scroll_right').css('cursor', rightArrow ? 'default' : 'pointer').fadeTo(0, rightArrow ? 0 : 1).css('display', rightArrow ? 'none' : 'block');
    return true;
}

function refreshProductImages(id_product_attribute) {

    var thumb_width = $('#thumbs_list_frame >li').width() + parseInt($('#thumbs_list_frame >li').css('marginRight'));
    $('#thumbs_list_frame').width((parseInt((thumb_width) * $('#thumbs_list_frame >li').length)) + 'px');
    $('#thumbs_list').trigger('goto', 0);

}


function galeryReload() {
    $('#thumbs_list').serialScroll({
        items: 'li:visible',
        prev: '#view_scroll_left',
        next: '#view_scroll_right',
        axis: 'x',
        offset: 0,
        start: 0,
        stop: true,
        onBefore: serialScrollFixLock,
        duration: 700,
        step: 1,
        lazy: true,
        lock: false,
        force: false,
        cycle: false
    });
    $('#thumbs_list').trigger('goto', 1);
    $('#thumbs_list').trigger('goto', 0);
}
$(document).ready(galeryReload);
$(window).resize(refreshProductImages);
