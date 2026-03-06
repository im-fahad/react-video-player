import ue, { useRef as se, useImperativeHandle as gr, useEffect as br, useState as oe, useMemo as Fe } from "react";
import ie from "hls.js";
var le = { exports: {} }, $ = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ie;
function mr() {
  if (Ie) return $;
  Ie = 1;
  var i = ue, g = Symbol.for("react.element"), b = Symbol.for("react.fragment"), c = Object.prototype.hasOwnProperty, _ = i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, k = { key: !0, ref: !0, __self: !0, __source: !0 };
  function m(T, p, f) {
    var d, w = {}, x = null, L = null;
    f !== void 0 && (x = "" + f), p.key !== void 0 && (x = "" + p.key), p.ref !== void 0 && (L = p.ref);
    for (d in p) c.call(p, d) && !k.hasOwnProperty(d) && (w[d] = p[d]);
    if (T && T.defaultProps) for (d in p = T.defaultProps, p) w[d] === void 0 && (w[d] = p[d]);
    return { $$typeof: g, type: T, key: x, ref: L, props: w, _owner: _.current };
  }
  return $.Fragment = b, $.jsx = m, $.jsxs = m, $;
}
var Y = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Me;
function yr() {
  return Me || (Me = 1, process.env.NODE_ENV !== "production" && function() {
    var i = ue, g = Symbol.for("react.element"), b = Symbol.for("react.portal"), c = Symbol.for("react.fragment"), _ = Symbol.for("react.strict_mode"), k = Symbol.for("react.profiler"), m = Symbol.for("react.provider"), T = Symbol.for("react.context"), p = Symbol.for("react.forward_ref"), f = Symbol.for("react.suspense"), d = Symbol.for("react.suspense_list"), w = Symbol.for("react.memo"), x = Symbol.for("react.lazy"), L = Symbol.for("react.offscreen"), M = Symbol.iterator, P = "@@iterator";
    function J(e) {
      if (e === null || typeof e != "object")
        return null;
      var r = M && e[M] || e[P];
      return typeof r == "function" ? r : null;
    }
    var S = i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function y(e) {
      {
        for (var r = arguments.length, t = new Array(r > 1 ? r - 1 : 0), n = 1; n < r; n++)
          t[n - 1] = arguments[n];
        q("error", e, t);
      }
    }
    function q(e, r, t) {
      {
        var n = S.ReactDebugCurrentFrame, l = n.getStackAddendum();
        l !== "" && (r += "%s", t = t.concat([l]));
        var u = t.map(function(s) {
          return String(s);
        });
        u.unshift("Warning: " + r), Function.prototype.apply.call(console[e], console, u);
      }
    }
    var z = !1, K = !1, G = !1, E = !1, $e = !1, ce;
    ce = Symbol.for("react.module.reference");
    function Ye(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === c || e === k || $e || e === _ || e === f || e === d || E || e === L || z || K || G || typeof e == "object" && e !== null && (e.$$typeof === x || e.$$typeof === w || e.$$typeof === m || e.$$typeof === T || e.$$typeof === p || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      e.$$typeof === ce || e.getModuleId !== void 0));
    }
    function Ve(e, r, t) {
      var n = e.displayName;
      if (n)
        return n;
      var l = r.displayName || r.name || "";
      return l !== "" ? t + "(" + l + ")" : t;
    }
    function fe(e) {
      return e.displayName || "Context";
    }
    function O(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && y("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case c:
          return "Fragment";
        case b:
          return "Portal";
        case k:
          return "Profiler";
        case _:
          return "StrictMode";
        case f:
          return "Suspense";
        case d:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case T:
            var r = e;
            return fe(r) + ".Consumer";
          case m:
            var t = e;
            return fe(t._context) + ".Provider";
          case p:
            return Ve(e, e.render, "ForwardRef");
          case w:
            var n = e.displayName || null;
            return n !== null ? n : O(e.type) || "Memo";
          case x: {
            var l = e, u = l._payload, s = l._init;
            try {
              return O(s(u));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var D = Object.assign, W = 0, de, ve, pe, he, ge, be, me;
    function ye() {
    }
    ye.__reactDisabledLog = !0;
    function Ue() {
      {
        if (W === 0) {
          de = console.log, ve = console.info, pe = console.warn, he = console.error, ge = console.group, be = console.groupCollapsed, me = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: ye,
            writable: !0
          };
          Object.defineProperties(console, {
            info: e,
            log: e,
            warn: e,
            error: e,
            group: e,
            groupCollapsed: e,
            groupEnd: e
          });
        }
        W++;
      }
    }
    function Be() {
      {
        if (W--, W === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: D({}, e, {
              value: de
            }),
            info: D({}, e, {
              value: ve
            }),
            warn: D({}, e, {
              value: pe
            }),
            error: D({}, e, {
              value: he
            }),
            group: D({}, e, {
              value: ge
            }),
            groupCollapsed: D({}, e, {
              value: be
            }),
            groupEnd: D({}, e, {
              value: me
            })
          });
        }
        W < 0 && y("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var X = S.ReactCurrentDispatcher, Z;
    function V(e, r, t) {
      {
        if (Z === void 0)
          try {
            throw Error();
          } catch (l) {
            var n = l.stack.trim().match(/\n( *(at )?)/);
            Z = n && n[1] || "";
          }
        return `
` + Z + e;
      }
    }
    var Q = !1, U;
    {
      var He = typeof WeakMap == "function" ? WeakMap : Map;
      U = new He();
    }
    function xe(e, r) {
      if (!e || Q)
        return "";
      {
        var t = U.get(e);
        if (t !== void 0)
          return t;
      }
      var n;
      Q = !0;
      var l = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var u;
      u = X.current, X.current = null, Ue();
      try {
        if (r) {
          var s = function() {
            throw Error();
          };
          if (Object.defineProperty(s.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(s, []);
            } catch (R) {
              n = R;
            }
            Reflect.construct(e, [], s);
          } else {
            try {
              s.call();
            } catch (R) {
              n = R;
            }
            e.call(s.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (R) {
            n = R;
          }
          e();
        }
      } catch (R) {
        if (R && n && typeof R.stack == "string") {
          for (var o = R.stack.split(`
`), C = n.stack.split(`
`), v = o.length - 1, h = C.length - 1; v >= 1 && h >= 0 && o[v] !== C[h]; )
            h--;
          for (; v >= 1 && h >= 0; v--, h--)
            if (o[v] !== C[h]) {
              if (v !== 1 || h !== 1)
                do
                  if (v--, h--, h < 0 || o[v] !== C[h]) {
                    var j = `
` + o[v].replace(" at new ", " at ");
                    return e.displayName && j.includes("<anonymous>") && (j = j.replace("<anonymous>", e.displayName)), typeof e == "function" && U.set(e, j), j;
                  }
                while (v >= 1 && h >= 0);
              break;
            }
        }
      } finally {
        Q = !1, X.current = u, Be(), Error.prepareStackTrace = l;
      }
      var I = e ? e.displayName || e.name : "", A = I ? V(I) : "";
      return typeof e == "function" && U.set(e, A), A;
    }
    function Je(e, r, t) {
      return xe(e, !1);
    }
    function qe(e) {
      var r = e.prototype;
      return !!(r && r.isReactComponent);
    }
    function B(e, r, t) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return xe(e, qe(e));
      if (typeof e == "string")
        return V(e);
      switch (e) {
        case f:
          return V("Suspense");
        case d:
          return V("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case p:
            return Je(e.render);
          case w:
            return B(e.type, r, t);
          case x: {
            var n = e, l = n._payload, u = n._init;
            try {
              return B(u(l), r, t);
            } catch {
            }
          }
        }
      return "";
    }
    var N = Object.prototype.hasOwnProperty, we = {}, Ce = S.ReactDebugCurrentFrame;
    function H(e) {
      if (e) {
        var r = e._owner, t = B(e.type, e._source, r ? r.type : null);
        Ce.setExtraStackFrame(t);
      } else
        Ce.setExtraStackFrame(null);
    }
    function ze(e, r, t, n, l) {
      {
        var u = Function.call.bind(N);
        for (var s in e)
          if (u(e, s)) {
            var o = void 0;
            try {
              if (typeof e[s] != "function") {
                var C = Error((n || "React class") + ": " + t + " type `" + s + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[s] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw C.name = "Invariant Violation", C;
              }
              o = e[s](r, s, n, t, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (v) {
              o = v;
            }
            o && !(o instanceof Error) && (H(l), y("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", n || "React class", t, s, typeof o), H(null)), o instanceof Error && !(o.message in we) && (we[o.message] = !0, H(l), y("Failed %s type: %s", t, o.message), H(null));
          }
      }
    }
    var Ke = Array.isArray;
    function ee(e) {
      return Ke(e);
    }
    function Ge(e) {
      {
        var r = typeof Symbol == "function" && Symbol.toStringTag, t = r && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return t;
      }
    }
    function Xe(e) {
      try {
        return Ee(e), !1;
      } catch {
        return !0;
      }
    }
    function Ee(e) {
      return "" + e;
    }
    function Re(e) {
      if (Xe(e))
        return y("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Ge(e)), Ee(e);
    }
    var _e = S.ReactCurrentOwner, Ze = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, je, ke;
    function Qe(e) {
      if (N.call(e, "ref")) {
        var r = Object.getOwnPropertyDescriptor(e, "ref").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.ref !== void 0;
    }
    function er(e) {
      if (N.call(e, "key")) {
        var r = Object.getOwnPropertyDescriptor(e, "key").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.key !== void 0;
    }
    function rr(e, r) {
      typeof e.ref == "string" && _e.current;
    }
    function tr(e, r) {
      {
        var t = function() {
          je || (je = !0, y("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        t.isReactWarning = !0, Object.defineProperty(e, "key", {
          get: t,
          configurable: !0
        });
      }
    }
    function nr(e, r) {
      {
        var t = function() {
          ke || (ke = !0, y("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        t.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: t,
          configurable: !0
        });
      }
    }
    var ar = function(e, r, t, n, l, u, s) {
      var o = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: g,
        // Built-in properties that belong on the element
        type: e,
        key: r,
        ref: t,
        props: s,
        // Record the component responsible for creating this element.
        _owner: u
      };
      return o._store = {}, Object.defineProperty(o._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(o, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: n
      }), Object.defineProperty(o, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: l
      }), Object.freeze && (Object.freeze(o.props), Object.freeze(o)), o;
    };
    function or(e, r, t, n, l) {
      {
        var u, s = {}, o = null, C = null;
        t !== void 0 && (Re(t), o = "" + t), er(r) && (Re(r.key), o = "" + r.key), Qe(r) && (C = r.ref, rr(r, l));
        for (u in r)
          N.call(r, u) && !Ze.hasOwnProperty(u) && (s[u] = r[u]);
        if (e && e.defaultProps) {
          var v = e.defaultProps;
          for (u in v)
            s[u] === void 0 && (s[u] = v[u]);
        }
        if (o || C) {
          var h = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          o && tr(s, h), C && nr(s, h);
        }
        return ar(e, o, C, l, n, _e.current, s);
      }
    }
    var re = S.ReactCurrentOwner, Te = S.ReactDebugCurrentFrame;
    function F(e) {
      if (e) {
        var r = e._owner, t = B(e.type, e._source, r ? r.type : null);
        Te.setExtraStackFrame(t);
      } else
        Te.setExtraStackFrame(null);
    }
    var te;
    te = !1;
    function ne(e) {
      return typeof e == "object" && e !== null && e.$$typeof === g;
    }
    function Se() {
      {
        if (re.current) {
          var e = O(re.current.type);
          if (e)
            return `

Check the render method of \`` + e + "`.";
        }
        return "";
      }
    }
    function ir(e) {
      return "";
    }
    var Pe = {};
    function sr(e) {
      {
        var r = Se();
        if (!r) {
          var t = typeof e == "string" ? e : e.displayName || e.name;
          t && (r = `

Check the top-level render call using <` + t + ">.");
        }
        return r;
      }
    }
    function Oe(e, r) {
      {
        if (!e._store || e._store.validated || e.key != null)
          return;
        e._store.validated = !0;
        var t = sr(r);
        if (Pe[t])
          return;
        Pe[t] = !0;
        var n = "";
        e && e._owner && e._owner !== re.current && (n = " It was passed a child from " + O(e._owner.type) + "."), F(e), y('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', t, n), F(null);
      }
    }
    function Le(e, r) {
      {
        if (typeof e != "object")
          return;
        if (ee(e))
          for (var t = 0; t < e.length; t++) {
            var n = e[t];
            ne(n) && Oe(n, r);
          }
        else if (ne(e))
          e._store && (e._store.validated = !0);
        else if (e) {
          var l = J(e);
          if (typeof l == "function" && l !== e.entries)
            for (var u = l.call(e), s; !(s = u.next()).done; )
              ne(s.value) && Oe(s.value, r);
        }
      }
    }
    function lr(e) {
      {
        var r = e.type;
        if (r == null || typeof r == "string")
          return;
        var t;
        if (typeof r == "function")
          t = r.propTypes;
        else if (typeof r == "object" && (r.$$typeof === p || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        r.$$typeof === w))
          t = r.propTypes;
        else
          return;
        if (t) {
          var n = O(r);
          ze(t, e.props, "prop", n, e);
        } else if (r.PropTypes !== void 0 && !te) {
          te = !0;
          var l = O(r);
          y("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", l || "Unknown");
        }
        typeof r.getDefaultProps == "function" && !r.getDefaultProps.isReactClassApproved && y("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function ur(e) {
      {
        for (var r = Object.keys(e.props), t = 0; t < r.length; t++) {
          var n = r[t];
          if (n !== "children" && n !== "key") {
            F(e), y("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", n), F(null);
            break;
          }
        }
        e.ref !== null && (F(e), y("Invalid attribute `ref` supplied to `React.Fragment`."), F(null));
      }
    }
    var De = {};
    function Ae(e, r, t, n, l, u) {
      {
        var s = Ye(e);
        if (!s) {
          var o = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (o += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var C = ir();
          C ? o += C : o += Se();
          var v;
          e === null ? v = "null" : ee(e) ? v = "array" : e !== void 0 && e.$$typeof === g ? (v = "<" + (O(e.type) || "Unknown") + " />", o = " Did you accidentally export a JSX literal instead of a component?") : v = typeof e, y("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", v, o);
        }
        var h = or(e, r, t, l, u);
        if (h == null)
          return h;
        if (s) {
          var j = r.children;
          if (j !== void 0)
            if (n)
              if (ee(j)) {
                for (var I = 0; I < j.length; I++)
                  Le(j[I], e);
                Object.freeze && Object.freeze(j);
              } else
                y("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Le(j, e);
        }
        if (N.call(r, "key")) {
          var A = O(e), R = Object.keys(r).filter(function(hr) {
            return hr !== "key";
          }), ae = R.length > 0 ? "{key: someKey, " + R.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!De[A + ae]) {
            var pr = R.length > 0 ? "{" + R.join(": ..., ") + ": ...}" : "{}";
            y(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, ae, A, pr, A), De[A + ae] = !0;
          }
        }
        return e === c ? ur(h) : lr(h), h;
      }
    }
    function cr(e, r, t) {
      return Ae(e, r, t, !0);
    }
    function fr(e, r, t) {
      return Ae(e, r, t, !1);
    }
    var dr = fr, vr = cr;
    Y.Fragment = c, Y.jsx = dr, Y.jsxs = vr;
  }()), Y;
}
process.env.NODE_ENV === "production" ? le.exports = mr() : le.exports = yr();
var a = le.exports;
const We = ue.forwardRef(
  ({ src: i, hlsConfig: g, isHls: b, ...c }, _) => {
    const k = se(null), m = se(null);
    gr(_, () => k.current);
    const T = typeof window < "u" && ie.isSupported(), p = !!b || T && typeof i == "string" && i.endsWith(".m3u8");
    return br(() => {
      if (!i) return;
      const f = k.current;
      if (f) {
        for (m.current && (m.current.destroy(), m.current = null), f.pause(), f.removeAttribute("src"); f.firstChild; ) f.removeChild(f.firstChild);
        if (p) {
          const d = new ie(g);
          m.current = d, d.attachMedia(f), d.loadSource(i), d.on(ie.Events.ERROR, (w, x) => {
            x.fatal && (d.destroy(), m.current = null);
          });
        } else
          f.src = i, f.load();
        return () => {
          for (m.current && (m.current.destroy(), m.current = null), f.pause(), f.removeAttribute("src"); f.firstChild; ) f.removeChild(f.firstChild);
          f.load();
        };
      }
    }, [i, p, g]), /* @__PURE__ */ a.jsx("video", { ref: k, ...c });
  }
);
We.displayName = "HLSPlayer";
const xr = ({ className: i = "" }) => /* @__PURE__ */ a.jsxs(
  "svg",
  {
    className: i,
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: [
      /* @__PURE__ */ a.jsx(
        "path",
        {
          d: "M14 2H10C6.72077 2 5.08116 2 3.91891 2.81382C3.48891 3.1149 3.1149 3.48891 2.81382 3.91891C2 5.08116 2 6.72077 2 10C2 13.2792 2 14.9188 2.81382 16.0811C3.1149 16.5111 3.48891 16.8851 3.91891 17.1862C5.08116 18 6.72077 18 10 18H14C17.2792 18 18.9188 18 20.0811 17.1862C20.5111 16.8851 20.8851 16.5111 21.1862 16.0811C22 14.9188 22 13.2792 22 10C22 6.72077 22 5.08116 21.1862 3.91891C20.8851 3.48891 20.5111 3.1149 20.0811 2.81382C18.9188 2 17.2792 2 14 2Z",
          stroke: "currentColor",
          strokeWidth: "1.5",
          strokeLinecap: "round"
        }
      ),
      /* @__PURE__ */ a.jsx(
        "path",
        {
          d: "M11 15H13",
          stroke: "currentColor",
          strokeWidth: "1.5",
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ a.jsx(
        "path",
        {
          d: "M14.5 22L14.1845 21.5811C13.4733 20.6369 13.2969 19.1944 13.7468 18M9.5 22L9.8155 21.5811C10.5267 20.6369 10.7031 19.1944 10.2532 18",
          stroke: "currentColor",
          strokeWidth: "1.5",
          strokeLinecap: "round"
        }
      ),
      /* @__PURE__ */ a.jsx("path", { d: "M7 22H17", stroke: "currentColor", strokeWidth: "1.5", strokeLinecap: "round" })
    ]
  }
), wr = ({ className: i = "" }) => /* @__PURE__ */ a.jsxs(
  "svg",
  {
    className: i,
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: [
      /* @__PURE__ */ a.jsx(
        "path",
        {
          d: "M5 9C5 5.70017 5 4.05025 6.02513 3.02513C7.05025 2 8.70017 2 12 2C15.2998 2 16.9497 2 17.9749 3.02513C19 4.05025 19 5.70017 19 9V15C19 18.2998 19 19.9497 17.9749 20.9749C16.9497 22 15.2998 22 12 22C8.70017 22 7.05025 22 6.02513 20.9749C5 19.9497 5 18.2998 5 15V9Z",
          stroke: "currentColor",
          strokeWidth: "2",
          strokeLinecap: "round"
        }
      ),
      /* @__PURE__ */ a.jsx(
        "path",
        {
          d: "M11 19H13",
          stroke: "currentColor",
          strokeWidth: "2",
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ a.jsx(
        "path",
        {
          d: "M9 2L9.089 2.53402C9.28188 3.69129 9.37832 4.26993 9.77519 4.62204C10.1892 4.98934 10.7761 5 12 5C13.2239 5 13.8108 4.98934 14.2248 4.62204C14.6217 4.26993 14.7181 3.69129 14.911 2.53402L15 2",
          stroke: "currentColor",
          strokeWidth: "2",
          strokeLinejoin: "round"
        }
      )
    ]
  }
), Cr = ({ className: i = "" }) => /* @__PURE__ */ a.jsx(
  "svg",
  {
    className: i,
    width: "14",
    height: "14",
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: /* @__PURE__ */ a.jsx(
      "path",
      {
        d: "M6.94994 5.53594L12.1929 0.292938C12.5834 -0.0975275 13.2165 -0.0975279 13.6069 0.292938C13.9974 0.683403 13.9974 1.31647 13.6069 1.70694L8.36394 6.94994L13.6069 12.1929C13.9974 12.5834 13.9974 13.2165 13.6069 13.6069C13.2165 13.9974 12.5834 13.9974 12.1929 13.6069L6.94994 8.36394L1.70694 13.6069C1.31647 13.9974 0.683403 13.9974 0.292938 13.6069C-0.0975279 13.2165 -0.0975277 12.5834 0.292938 12.1929L5.53594 6.94994L0.292938 1.70694C-0.0975279 1.31647 -0.0975279 0.683403 0.292938 0.292938C0.683403 -0.0975279 1.31647 -0.0975277 1.70694 0.292938L6.94994 5.53594Z",
        fill: "white"
      }
    )
  }
), Er = ({ className: i = "" }) => /* @__PURE__ */ a.jsxs(
  "svg",
  {
    className: i,
    width: "16",
    height: "16",
    viewBox: "0 0 16 16",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: [
      /* @__PURE__ */ a.jsx(
        "mask",
        {
          id: "mask0_4364_137031",
          style: { maskType: "alpha" },
          maskUnits: "userSpaceOnUse",
          x: "0",
          y: "0",
          width: "16",
          height: "16",
          children: /* @__PURE__ */ a.jsx("rect", { width: "16", height: "16", fill: "#D9D9D9" })
        }
      ),
      /* @__PURE__ */ a.jsx("g", { mask: "url(#mask0_4364_137031)", children: /* @__PURE__ */ a.jsx(
        "path",
        {
          d: "M5.3335 11.45V4.54997C5.3335 4.36108 5.40016 4.20275 5.5335 4.07497C5.66683 3.94719 5.82238 3.8833 6.00016 3.8833C6.05572 3.8833 6.11405 3.89163 6.17516 3.9083C6.23627 3.92497 6.29461 3.94997 6.35016 3.9833L11.7835 7.4333C11.8835 7.49997 11.9585 7.5833 12.0085 7.6833C12.0585 7.7833 12.0835 7.88886 12.0835 7.99997C12.0835 8.11108 12.0585 8.21663 12.0085 8.31663C11.9585 8.41663 11.8835 8.49997 11.7835 8.56663L6.35016 12.0166C6.29461 12.05 6.23627 12.075 6.17516 12.0916C6.11405 12.1083 6.05572 12.1166 6.00016 12.1166C5.82238 12.1166 5.66683 12.0527 5.5335 11.925C5.40016 11.7972 5.3335 11.6389 5.3335 11.45Z",
          fill: "white"
        }
      ) })
    ]
  }
);
function Ne(i) {
  var g, b, c = "";
  if (typeof i == "string" || typeof i == "number") c += i;
  else if (typeof i == "object") if (Array.isArray(i)) {
    var _ = i.length;
    for (g = 0; g < _; g++) i[g] && (b = Ne(i[g])) && (c && (c += " "), c += b);
  } else for (b in i) i[b] && (c && (c += " "), c += b);
  return c;
}
function Rr() {
  for (var i, g, b = 0, c = "", _ = arguments.length; b < _; b++) (i = arguments[b]) && (g = Ne(i)) && (c && (c += " "), c += g);
  return c;
}
const kr = ({
  src: i,
  poster: g,
  showDeviceToggle: b = !0,
  defaultDevice: c = "desktop",
  hoverPlay: _ = !1,
  tooltipText: k,
  onClose: m,
  className: T = "",
  muted: p = !0,
  loop: f = !1,
  controls: d = !1
}) => {
  const w = se(null), [x, L] = oe(c), [M, P] = oe(!1), [J, S] = oe(!1), y = Fe(() => x === "mobile" ? "aspect-[9/16]" : "aspect-[16/9]", [x]), q = Fe(() => x === "mobile" ? "max-w-[420px]" : "max-w-[960px]", [x]), z = async () => {
    if (!_) return;
    const E = w.current;
    if (E)
      try {
        E.readyState < 2 && E.load(), await E.play(), P(!0);
      } catch {
        P(!1);
      }
  }, K = () => {
    if (!_) return;
    const E = w.current;
    E && (E.pause(), P(!1));
  }, G = async () => {
    const E = w.current;
    if (E)
      try {
        E.paused ? (await E.play(), P(!0)) : (E.pause(), P(!1));
      } catch {
        P(!1);
      }
  };
  return /* @__PURE__ */ a.jsx("div", { className: Rr("w-full", T), children: /* @__PURE__ */ a.jsxs(
    "div",
    {
      className: [
        "relative overflow-hidden rounded-3xl",
        "bg-neutral-900/30 shadow-2xl",
        "ring-1 ring-white/10",
        "mx-auto w-full",
        q,
        y
      ].join(" "),
      onMouseEnter: () => {
        S(!0), z();
      },
      onMouseLeave: () => {
        S(!1), K();
      },
      children: [
        /* @__PURE__ */ a.jsx(
          We,
          {
            ref: w,
            src: i,
            poster: g,
            muted: p,
            loop: f,
            playsInline: !0,
            preload: "metadata",
            controls: d,
            className: "h-full w-full object-cover",
            onPlay: () => P(!0),
            onPause: () => P(!1)
          }
        ),
        /* @__PURE__ */ a.jsx("div", { className: "pointer-events-none absolute inset-0 bg-linear-to-tr from-black/35 via-black/0 to-black/35" }),
        b && /* @__PURE__ */ a.jsx("div", { className: "absolute left-4 top-4", children: /* @__PURE__ */ a.jsxs("div", { className: "flex items-center overflow-hidden rounded-2xl bg-white/95 shadow-lg ring-1 ring-black/5", children: [
          /* @__PURE__ */ a.jsx(
            "button",
            {
              type: "button",
              onClick: () => L("desktop"),
              className: [
                "flex items-center gap-2 px-4 py-2 text-sm font-semibold z-10 cursor-pointer",
                x === "desktop" ? "text-violet-700" : "text-neutral-500 hover:text-neutral-700"
              ].join(" "),
              children: /* @__PURE__ */ a.jsx(xr, { className: "h-5 w-5" })
            }
          ),
          /* @__PURE__ */ a.jsx("div", { className: "h-7 w-px bg-neutral-200" }),
          /* @__PURE__ */ a.jsx(
            "button",
            {
              type: "button",
              onClick: () => L("mobile"),
              className: [
                "flex items-center gap-2 px-4 py-2 text-sm font-semibold z-10 cursor-pointer",
                x === "mobile" ? "text-violet-700" : "text-neutral-500 hover:text-neutral-700"
              ].join(" "),
              children: /* @__PURE__ */ a.jsx(wr, { className: "h-5 w-5 " })
            }
          )
        ] }) }),
        m && /* @__PURE__ */ a.jsx(
          "button",
          {
            type: "button",
            onClick: m,
            className: "absolute right-4 top-4 grid h-10 w-10 place-items-center rounded-full bg-black/35 text-white backdrop-blur-md ring-1 ring-white/15 hover:bg-black/50 cursor-pointer z-10",
            "aria-label": "Close",
            children: /* @__PURE__ */ a.jsx(Cr, { className: "h-5 w-5" })
          }
        ),
        !M && /* @__PURE__ */ a.jsx(a.Fragment, { children: /* @__PURE__ */ a.jsx("div", { className: "absolute inset-0 grid place-items-center", children: /* @__PURE__ */ a.jsxs(
          "button",
          {
            type: "button",
            onClick: () => void G(),
            onMouseEnter: () => S(!0),
            onMouseLeave: () => S(!1),
            className: [
              "relative grid h-14 w-14 place-items-center rounded-full cursor-pointer ring-1 ring-white/15",
              "bg-violet-700/50 hover:bg-violet-700/90 bg-neutral-200/5 bg-blend-overlay shadow-xl",
              "transition-opacity duration-200"
            ].join(" "),
            "aria-label": "Play",
            children: [
              /* @__PURE__ */ a.jsx(Er, { className: "h-7 w-7 translate-x-px" }),
              k && J && !M && /* @__PURE__ */ a.jsx("div", { className: "absolute -top-12 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-xl bg-black/70 px-3 py-1.5 text-xs text-white shadow-lg ring-1 ring-white/10 backdrop-blur", children: k })
            ]
          }
        ) }) }),
        /* @__PURE__ */ a.jsx("div", { className: "pointer-events-none absolute bottom-0 left-0 right-0 h-16 bg-linear-to-t from-black/35 to-transparent" })
      ]
    }
  ) });
};
export {
  kr as VideoPlayerWrapper
};
