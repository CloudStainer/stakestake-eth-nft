(this.webpackJsonpsteakdapp = this.webpackJsonpsteakdapp || []).push([
  [0],
  {
    253: function (n, t) {},
    262: function (n, t) {},
    280: function (n, t) {},
    282: function (n, t) {},
    301: function (n, t) {},
    302: function (n, t) {},
    365: function (n, t) {},
    367: function (n, t) {},
    400: function (n, t) {},
    402: function (n, t) {},
    403: function (n, t) {},
    408: function (n, t) {},
    410: function (n, t) {},
    416: function (n, t) {},
    418: function (n, t) {},
    431: function (n, t) {},
    443: function (n, t) {},
    446: function (n, t) {},
    451: function (n, t) {},
    459: function (n, t) {},
    468: function (n, t) {},
    470: function (n, t) {},
    544: function (n, t, e) {},
    546: function (n, t, e) {},
    547: function (n, t, e) {
      "use strict";
      e.r(t);
      var a,
        c,
        i,
        r,
        o,
        s,
        p,
        l,
        d,
        x,
        u,
        b,
        h,
        j,
        f,
        g,
        O,
        m,
        w,
        y,
        v,
        C = e(1),
        A = e(88),
        k = e.n(A),
        S = e(18),
        E = e.n(S),
        _ = e(45),
        N = e(30),
        T = e(12),
        M = e(60),
        D = e(70),
        I = e.n(D),
        z = e(224),
        L = e.n(z),
        F = e(71),
        K = e(225),
        R = e(16),
        P = {
          loading: !1,
          account: null,
          smartContract: null,
          web3: null,
          errorMsg: "",
        },
        U = function () {
          var n =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : P,
            t = arguments.length > 1 ? arguments[1] : void 0;
          switch (t.type) {
            case "CONNECTION_REQUEST":
              return Object(R.a)(Object(R.a)({}, P), {}, { loading: !0 });
            case "CONNECTION_SUCCESS":
              return Object(R.a)(
                Object(R.a)({}, n),
                {},
                {
                  loading: !1,
                  account: t.payload.account,
                  smartContract: t.payload.smartContract,
                  web3: t.payload.web3,
                }
              );
            case "CONNECTION_FAILED":
              return Object(R.a)(
                Object(R.a)({}, P),
                {},
                { loading: !1, errorMsg: t.payload }
              );
            case "UPDATE_ACCOUNT":
              return Object(R.a)(
                Object(R.a)({}, n),
                {},
                { account: t.payload.account }
              );
            default:
              return n;
          }
        },
        H = { loading: !1, totalSupply: 0, cost: 0, error: !1, errorMsg: "" },
        B = function () {
          var n =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : H,
            t = arguments.length > 1 ? arguments[1] : void 0;
          switch (t.type) {
            case "CHECK_DATA_REQUEST":
              return Object(R.a)(
                Object(R.a)({}, n),
                {},
                { loading: !0, error: !1, errorMsg: "" }
              );
            case "CHECK_DATA_SUCCESS":
              return Object(R.a)(
                Object(R.a)({}, n),
                {},
                {
                  loading: !1,
                  totalSupply: t.payload.totalSupply,
                  error: !1,
                  errorMsg: "",
                }
              );
            case "CHECK_DATA_FAILED":
              return Object(R.a)(
                Object(R.a)({}, H),
                {},
                { loading: !1, error: !0, errorMsg: t.payload }
              );
            default:
              return n;
          }
        },
        W = Object(F.b)({ blockchain: U, data: B }),
        Y = [K.a],
        G = Object(F.c)(F.a.apply(void 0, Y)),
        Q = Object(F.d)(W, G),
        q = function (n) {
          return { type: "CHECK_DATA_FAILED", payload: n };
        },
        X = function () {
          return (function () {
            var n = Object(_.a)(
              E.a.mark(function n(t) {
                var e;
                return E.a.wrap(
                  function (n) {
                    for (;;)
                      switch ((n.prev = n.next)) {
                        case 0:
                          return (
                            t({ type: "CHECK_DATA_REQUEST" }),
                            (n.prev = 1),
                            (n.next = 4),
                            Q.getState()
                              .blockchain.smartContract.methods.totalSupply()
                              .call()
                          );
                        case 4:
                          (e = n.sent),
                            t({
                              type: "CHECK_DATA_SUCCESS",
                              payload: { totalSupply: e },
                            }),
                            (n.next = 12);
                          break;
                        case 8:
                          (n.prev = 8),
                            (n.t0 = n.catch(1)),
                            console.log(n.t0),
                            t(q("Could not load data from contract."));
                        case 12:
                        case "end":
                          return n.stop();
                      }
                  },
                  n,
                  null,
                  [[1, 8]]
                );
              })
            );
            return function (t) {
              return n.apply(this, arguments);
            };
          })();
        },
        J = function (n) {
          return { type: "CONNECTION_FAILED", payload: n };
        },
        $ = function () {
          return (function () {
            var n = Object(_.a)(
              E.a.mark(function n(t) {
                var e, a, c, i, r, o, s, p, l;
                return E.a.wrap(
                  function (n) {
                    for (;;)
                      switch ((n.prev = n.next)) {
                        case 0:
                          return (
                            t({ type: "CONNECTION_REQUEST" }),
                            (n.next = 3),
                            fetch("/config/abi.json", {
                              headers: {
                                "Content-Type": "application/json",
                                Accept: "application/json",
                              },
                            })
                          );
                        case 3:
                          return (e = n.sent), (n.next = 6), e.json();
                        case 6:
                          return (
                            (a = n.sent),
                            (n.next = 9),
                            fetch("/config/config.json", {
                              headers: {
                                "Content-Type": "application/json",
                                Accept: "application/json",
                              },
                            })
                          );
                        case 9:
                          return (c = n.sent), (n.next = 12), c.json();
                        case 12:
                          if (
                            ((i = n.sent),
                            (r = window),
                            (o = r.ethereum),
                            !(o && o.isMetaMask))
                          ) {
                            n.next = 33;
                            break;
                          }
                          return (
                            I.a.setProvider(o),
                            (s = new L.a(o)),
                            (n.prev = 18),
                            (n.next = 21),
                            o.request({ method: "eth_requestAccounts" })
                          );
                        case 21:
                          return (
                            (p = n.sent),
                            (n.next = 24),
                            o.request({ method: "net_version" })
                          );
                        case 24:
                          n.sent == i.NETWORK.ID
                            ? ((l = new I.a(a, i.CONTRACT_ADDRESS)),
                              t({
                                type: "CONNECTION_SUCCESS",
                                payload: {
                                  account: p[0],
                                  smartContract: l,
                                  web3: s,
                                },
                              }),
                              o.on("accountsChanged", function (n) {
                                t(V(n[0]));
                              }),
                              o.on("chainChanged", function () {
                                window.location.reload();
                              }))
                            : t(
                                J(
                                  "Change network to ".concat(
                                    i.NETWORK.NAME,
                                    "."
                                  )
                                )
                              ),
                            (n.next = 31);
                          break;
                        case 28:
                          (n.prev = 28),
                            (n.t0 = n.catch(18)),
                            t(J("Something went wrong."));
                        case 31:
                          n.next = 34;
                          break;
                        case 33:
                          t(J("Install Metamask."));
                        case 34:
                        case "end":
                          return n.stop();
                      }
                  },
                  n,
                  null,
                  [[18, 28]]
                );
              })
            );
            return function (t) {
              return n.apply(this, arguments);
            };
          })();
        },
        V = function (n) {
          return (function () {
            var t = Object(_.a)(
              E.a.mark(function t(e) {
                return E.a.wrap(function (t) {
                  for (;;)
                    switch ((t.prev = t.next)) {
                      case 0:
                        e({ type: "UPDATE_ACCOUNT", payload: { account: n } }),
                          e(X());
                      case 2:
                      case "end":
                        return t.stop();
                    }
                }, t);
              })
            );
            return function (n) {
              return t.apply(this, arguments);
            };
          })();
        },
        Z = e(13),
        nn = Z.a.div(
          a ||
            (a = Object(T.a)([
              "\n  background-color: var(--primary);\n  background-image: ",
              ";\n  background-size: cover;\n  background-position: center;\n  width: 100%;\n  min-height: 100vh;\n  display: flex;\n  flex-direction: column;\n\n  padding: 0px 20px 0px 20px;\n\n  @media (min-width: 768px) {\n    padding:0px;\n  }\n",
            ])),
          function (n) {
            var t = n.image;
            return t ? "url(".concat(t, ")") : "none";
          }
        ),
        tn = Z.a.div(
          c ||
            (c = Object(T.a)([
              "\n  width: 100%;\n  // top right bottom left\n  margin: 0px 0px 0px 0px;\n  border-bottom: 1px solid #AAAAAA;\n",
            ]))
        ),
        en =
          (Z.a.div(
            i || (i = Object(T.a)(["\n  height: 8px;\n  width: 8px;\n"]))
          ),
          Z.a.div(
            r || (r = Object(T.a)(["\n  height: 16px;\n  width: 16px;\n"]))
          )),
        an = Z.a.div(
          o || (o = Object(T.a)(["\n  height: 24px;\n  width: 24px;\n"]))
        ),
        cn =
          (Z.a.div(
            s || (s = Object(T.a)(["\n  height: 32px;\n  width: 32px;\n"]))
          ),
          Z.a.div(
            p ||
              (p = Object(T.a)([
                "\n  display: flex;\n  flex: ",
                ";\n  flex-direction: ",
                ";\n  justify-content: ",
                ";\n  align-items: ",
                ";\n  background-color: ",
                ";\n  width: 100%;\n  background-image: ",
                ";\n  background-size: cover;\n  background-position: center;\n",
              ])),
            function (n) {
              var t = n.flex;
              return t || 0;
            },
            function (n) {
              var t = n.fd;
              return t || "column";
            },
            function (n) {
              var t = n.jc;
              return t || "flex-start";
            },
            function (n) {
              var t = n.ai;
              return t || "flex-start";
            },
            function (n) {
              return n.test ? "pink" : "none";
            },
            function (n) {
              var t = n.image;
              return t ? "url(".concat(t, ")") : "none";
            }
          )),
        rn = Z.a.p(
          l ||
            (l = Object(T.a)([
              "\n  color: #fff;\n  font-size: 20px;\n  font-weight: 300;\n  line-height: 1.5;\n  text-align: center;\n  padding: 10px 20px;\n\n  @media (min-width: 768px) {\n    font-size: 20px;\n    text-align: left;\n    padding: 13px 0px 10px 20px;\n  }\n",
            ]))
        ),
        on = Z.a.p(
          d ||
            (d = Object(T.a)([
              "\n  padding: 0px 0px 0px 0px;\n  font-size: 55px;\n  font-weight: 300;\n  line-height: 1.5;\n  color: white;\n\n",
            ]))
        ),
        sn = Z.a.p(
          x ||
            (x = Object(T.a)([
              "\n  color: #AAAAAA;\n  font-size: 12px;\n  font-weight: 300;\n  line-height: 1.5;\n",
            ]))
        ),
        pn = Z.a.p(
          u ||
            (u = Object(T.a)([
              "\n  color: #fff;\n  font-size: 15px;\n  font-weight: 300;\n  line-height: 1.5;\n  text-align: center;\n  padding: 15px 0px 0px 0px;\n",
            ]))
        ),
        ln = Z.a.p(
          b ||
            (b = Object(T.a)([
              "\ncolor: #fff;\nfont-size: 14px;\nfont-weight: 300;\nline-height: 1.5;\nmargin: 20px 0px;\ndisplay: none;\n@media (min-width: 768px) {\n  display: flex;\n}\n",
            ]))
        ),
        dn = Z.a.p(
          h ||
            (h = Object(T.a)([
              "\n\ncolor: #fff;\nwidth: 100%;\nfont-size: 12px;\nfont-weight: 300;\nline-height: 1.5;\nmargin: 10px 0px -10px 0px;\n@media (min-width: 768px) {\ndisplay: none;\n}\n",
            ]))
        ),
        xn =
          (Z.a.div(
            j || (j = Object(T.a)(["\n  :active {\n    opacity: 0.6;\n  }\n"]))
          ),
          Z.a.div(
            f ||
              (f = Object(T.a)([
                "\ndisplay: none;\nfont-size: 15px;\nletter-spacing: 0.1px;\nmargin: 15px 15px 15px 10px;\nbackground-color: #2D2D2E;\nborder-radius: 15px;\nborder: 1px solid #4A505A;\npadding: 12px 8px 10px 4px;\nheight: 40px; \n\n@media (min-width: 500px) {\ndisplay: inline;\n}\n\n\n",
              ]))
          )),
        un = Z.a.span(
          g ||
            (g = Object(T.a)([
              "\n\ncolor: #fff;\nbackground-color: #FE4444;\nborder-radius: 10px;\npadding: 6px 10px;\nmargin: 0px 2px;\n\n@media (min-width: 500px) {\ndisplay: inline;\n\n",
            ]))
        ),
        bn = Z.a.span(
          O ||
            (O = Object(T.a)([
              "\ncursor: pointer;\n//background-color: #2C2F36;\nborder-radius: 12px;\npadding: 6px 4px;\nmargin: 0px 0px;\n@media (min-width: 768px) {\ndisplay: inline;\npadding: 6px 10px;\n}\n\n:hover {\n  color: white;\n}\n",
            ]))
        ),
        hn = Z.a.div(
          m ||
            (m = Object(T.a)([
              "\ndisplay: inline;\nposition: fixed;\nz-index: 999;\nbottom: 10px;\nfont-size: 12px;\nletter-spacing: 0px;\nmargin: 15px 15px 15px 10px;\nbackground-color: #2D2D2EBF;\nborder-radius: 15px;\nborder: 1px solid #4A505A;\npadding: 12px 8px 10px 4px;\nheight: 38px; \n\n@media (min-width: 500px) {\ndisplay: none;\n}\n",
            ]))
        ),
        jn = Z.a.div(
          w ||
            (w = Object(T.a)([
              "\ndisplay: none;\n\nflex-direction: row;\nalign-items: flex-start;\njustify-content: space-between;\nwidth: 65px;\nposition: fixed;\nleft: 20px;\nbottom: 20px;\n\n@media (min-width: 768px) {\n  display: flex;\n  }\n",
            ]))
        ),
        fn = Z.a.p(
          y ||
            (y = Object(T.a)([
              "\n  color: #fff;\n  font-size: 18px;\n  font-weight: 300;\n  line-height: 1.5;\n  text-align: center;\n  padding: 20px 20px 0px 20px;\n\n  @media (min-width: 768px) {\n    font-size: 20px;\n    text-align: left;\n    padding: 0px 20px 0px 20px;\n  }\n",
            ]))
        ),
        gn = Z.a.p(
          v ||
            (v = Object(T.a)([
              "\n  color: #fff;\n  font-size: 18px;\n  font-weight: 300;\n  line-height: 1.5;\n  text-align: center;\n  padding: 0px 20px 10px 20px;\n\n  @media (min-width: 768px) {\n    font-size: 20px;\n    text-align: left;\n    padding: 0px 20px 10px 20px;\n  }\n",
            ]))
        ),
        On = e(121),
        mn = (e(558), e(544), e(555), e(556), e(2));
      var wn,
        yn,
        vn,
        Cn,
        An,
        kn,
        Sn,
        En,
        _n,
        Nn = e(557),
        Tn = Z.a.button(
          wn ||
            (wn = Object(T.a)([
              "\n  margin-top: 10px;\n  padding: 10px;\n  border-radius: 50px;\n  font-weight: 300;\n  font-size: 16px;\n  border: none;\n  color: var(--accent-text);\n  background-color: #2875E2;\n  width: 150px;\n  cursor: pointer;\n  width: 100%;\n\n  :hover{\n  \n  color: var(--secondary-text);\n  background-color: #418FF5;\n  transition: all 200ms cubic-bezier(.175, .885, .32, 1.275)\n  -webkit-transition: all 200ms cubic-bezier(.175, .885, .32, 1.275);\n  }\n  :active {\n    box-shadow: none;\n    -webkit-box-shadow: none;\n    -moz-box-shadow: none;\n  }\n",
            ]))
        ),
        Mn = Z.a.button(
          yn ||
            (yn = Object(T.a)([
              "\n  margin-top: 10px;\n  padding: 10px;\n  border-radius: 50px;\n  font-weight: 300;\n  font-size: 16px;\n  border: none;\n  color: var(--accent-text);\n  background-color: #2875E2;\n  cursor: pointer;\n  width: 100%;\n\n  :hover{\n  background-color: #418FF5;\n  color: var(--secondary-text);\n  transition: all 200ms cubic-bezier(.175, .885, .32, 1.275)\n  -webkit-transition: all 200ms cubic-bezier(.175, .885, .32, 1.275);\n  }\n  :active {\n    box-shadow: none;\n    -webkit-box-shadow: none;\n    -moz-box-shadow: none;\n  }\n",
            ]))
        ),
        Dn = Z.a.button(
          vn ||
            (vn = Object(T.a)([
              "\n  padding: 10px;\n  border-radius: 100%;\n  width: 25px;\n  height: 25px;\n  border: 1px solid var(--accent-text);\n  background-color: transparent;\n\n  font-size: 18px;\n  font-weight: 300;\n  text-decoration: none;\n  color: var(--accent-text);\n  text-align: center;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n\n  :hover{\n    background-color: var(--secondary);\n    color: var(--secondary-text);\n    border: none;\n    }\n\n  :active {\n    box-shadow: none;\n    -webkit-box-shadow: none;\n    -moz-box-shadow: none;\n  }\n",
            ]))
        ),
        In = Z.a.div(
          Cn ||
            (Cn = Object(T.a)([
              "\nwidth: 100%;\nmargin: 30px 0px 0px 0px;\npadding: 0px;\n\ndisplay: flex;\nflex-direction: column;\njustify-content: flex-start;\nalign-contents: space-between;\nborder-radius: 20px;\nborder: 1.5px solid white;\nmax-width: 800px;\n\n@media (min-width: 768px) {\n  flex-direction: row;\n  \n}\n",
            ]))
        ),
        zn = Z.a.img(
          An ||
            (An = Object(T.a)([
              "\n  width: 150px;\n  margin-left: 20px;\n  margin-top: 10px;\n  margin-bottom: -20px;\n\n  @media (min-width: 768px) {\n    width: 250px;\n    margin-top: 30px;\n    margin-bottom: 0px;\n  }\n  transition: width 0.5s;\n  transition: height 0.5s;\n",
            ]))
        ),
        Ln = Z.a.img(
          kn ||
            (kn = Object(T.a)([
              "\n  \n  display: none;\n  width: 100%;\n  transition: width 0.5s;\n  border-radius: 0px 0px 20px 20px;\n  \n  @media (min-width: 768px) {\n  display: flex;\n  border-radius: 0px 20px 20px 0px;\n  }\n",
            ]))
        ),
        Fn = Z.a.img(
          Sn ||
            (Sn = Object(T.a)([
              "\n  width: 100%;\n  transition: width 0.5s;\n  border-radius: 0px 0px 20px 20px;\n\n  @media (min-width: 768px) {\n  display: none;\n  border-radius: 20px 0px 0px 20px;\n  }\n",
            ]))
        ),
        Kn = Z.a.img(
          En ||
            (En = Object(T.a)([
              "\n  display: none;\n  transition: width 0.5s;\n  width: 48px;\n  height: 48px;\n  filter: invert(1); \n\n  position: fixed;\n  margin: 20px 20px;\n  bottom:0px;\n  right:0px;\n\n  @media (min-width: 768px) {\n    display: flex;\n  }\n",
            ]))
        );
      Z.a.a(
        _n ||
          (_n = Object(T.a)([
            "\n  color: var(--secondary);\n  text-decoration: none;\n",
          ]))
      );
      var Rn = function () {
          var n = Object(M.b)(),
            t = Object(M.c)(function (n) {
              return n.blockchain;
            }),
            e = Object(M.c)(function (n) {
              return n.data;
            }),
            a = Object(C.useState)(!1),
            c = Object(N.a)(a, 2),
            i = c[0],
            r = c[1],
            o = Object(C.useState)("How many $STEAK do you want?"),
            s = Object(N.a)(o, 2),
            p = s[0],
            l = s[1],
            d = Object(C.useState)(1),
            x = Object(N.a)(d, 2),
            u = x[0],
            b = x[1],
            h = Object(C.useState)({
              CONTRACT_ADDRESS: "",
              SCAN_LINK: "",
              NETWORK: { NAME: "", SYMBOL: "", ID: 0 },
              NFT_NAME: "",
              SYMBOL: "",
              MAX_SUPPLY: 1,
              WEI_COST: 0,
              DISPLAY_COST: 0,
              GAS_LIMIT: 0,
              MARKETPLACE: "",
              MARKETPLACE_LINK: "",
              SHOW_BACKGROUND: !1,
            }),
            j = Object(N.a)(h, 2),
            f = j[0],
            g = j[1],
            O = function () {
              "" !== t.account && null !== t.smartContract && n(X(t.account));
            },
            m = (function () {
              var n = Object(_.a)(
                E.a.mark(function n() {
                  var t, e;
                  return E.a.wrap(function (n) {
                    for (;;)
                      switch ((n.prev = n.next)) {
                        case 0:
                          return (
                            (n.next = 2),
                            fetch("/config/config.json", {
                              headers: {
                                "Content-Type": "application/json",
                                Accept: "application/json",
                              },
                            })
                          );
                        case 2:
                          return (t = n.sent), (n.next = 5), t.json();
                        case 5:
                          (e = n.sent), g(e);
                        case 7:
                        case "end":
                          return n.stop();
                      }
                  }, n);
                })
              );
              return function () {
                return n.apply(this, arguments);
              };
            })();
          return (
            Object(C.useEffect)(function () {
              m();
            }, []),
            Object(C.useEffect)(
              function () {
                O();
              },
              [t.account]
            ),
            Object(mn.jsxs)(nn, {
              children: [
                Object(mn.jsxs)(cn, {
                  flex: 1,
                  ai: "center",
                  style: { padding: 20, backgroundColor: "var(--primary)" },
                  image: f.SHOW_BACKGROUND ? "/config/images/bg.png" : null,
                  children: [
                    Object(mn.jsx)(cn, {
                      flex: 0,
                      fd: "row",
                      ai: "flex-start",
                      jc: "center",
                      children: Object(mn.jsxs)(xn, {
                        children: [
                          Object(mn.jsx)(un, { children: "Mint" }),
                          Object(mn.jsxs)("a", {
                            className: "nav-link",
                            target: "_blank",
                            href: "https://passch.medium.com/",
                            children: [
                              Object(mn.jsx)(bn, { children: "Story" }),
                              " ",
                            ],
                          }),
                          Object(mn.jsxs)("a", {
                            className: "nav-link",
                            target: "_blank",
                            href: "https://passch.medium.com/",
                            children: [
                              Object(mn.jsx)(bn, { children: "How to" }),
                              " ",
                            ],
                          }),
                          Object(mn.jsxs)("a", {
                            className: "nav-link",
                            target: "_blank",
                            href: "https://opensea.io/collection/",
                            children: [
                              Object(mn.jsx)(bn, { children: "OpenSea" }),
                              " ",
                            ],
                          }),
                        ],
                      }),
                    }),
                    Object(mn.jsx)(zn, {
                      alt: "logo",
                      src: "/config/images/logo.svg",
                    }),
                    Object(mn.jsx)(en, {}),
                    Object(mn.jsxs)(In, {
                      children: [
                        Object(mn.jsxs)(cn, {
                          flex: 1,
                          fd: "column",
                          ai: "space-between",
                          style: { backgroundColor: "" },
                          children: [
                            Object(mn.jsxs)(cn, {
                              flex: 0,
                              fd: "row",
                              jc: "space-between",
                              ai: "flext-start",
                              children: [
                                Object(mn.jsx)(rn, {
                                  children: "Mint your $STEAK",
                                }),
                                Object(mn.jsx)("a", {
                                  className: "nav-link",
                                  target: "_blank",
                                  href: "https://etherscan.io/address/0x0000000000000000000000000000",
                                  children: Object(mn.jsx)(Nn.a, {
                                    type: "button",
                                    className: "contract",
                                  }),
                                }),
                              ],
                            }),
                            Object(mn.jsx)(tn, {}),
                            Number(e.totalSupply) >= f.MAX_SUPPLY
                              ? Object(mn.jsx)(mn.Fragment, {
                                  children: Object(mn.jsxs)(cn, {
                                    flex: 2,
                                    fd: "column",
                                    jc: "center",
                                    ai: "center",
                                    children: [
                                      Object(mn.jsx)(an, {}),
                                      Object(mn.jsx)(rn, {
                                        style: {
                                          textAlign: "center",
                                          color: "var(--accent-text)",
                                        },
                                        children:
                                          "\ud83e\udd69 Round 2 are sold out \ud83e\udd69",
                                      }),
                                      Object(mn.jsxs)(rn, {
                                        style: {
                                          textAlign: "center",
                                          color: "var(--accent-text)",
                                        },
                                        children: [
                                          "Stay tuned for the next round. Follow  ",
                                          Object(mn.jsx)("a", {
                                            className: "nav-link",
                                            target: "_blank",
                                            href: "https://x.com/StakeStake_ETH",
                                            children: Object(mn.jsx)(bn, {
                                              children: "@StakeStake_ETH",
                                            }),
                                          }),
                                          "to be informed.",
                                        ],
                                      }),
                                      Object(mn.jsx)(an, {}),
                                    ],
                                  }),
                                })
                              : Object(mn.jsx)(mn.Fragment, {
                                  children: Object(mn.jsx)(cn, {
                                    flex: 2,
                                    fd: "column",
                                    jc: "center",
                                    ai: "center",
                                    style: { backgroundColor: "" },
                                    children:
                                      "" === t.account ||
                                      null === t.smartContract
                                        ? Object(mn.jsxs)(cn, {
                                            ai: "center",
                                            jc: "center",
                                            style: {
                                              padding: "0px 20px 30px 20px",
                                            },
                                            children: [
                                              Object(mn.jsx)(fn, {
                                                style: {
                                                  margin: "0px 0px 0px 0px",
                                                  textAlign: "center",
                                                  color: "var(--accent-text)",
                                                },
                                                children:
                                                  "\ud83e\udd69 Round 2 is live \ud83e\udd69",
                                              }),
                                              Object(mn.jsx)(gn, {
                                                style: {
                                                  margin: "0px 0px 0px 0px",
                                                  textAlign: "center",
                                                  color: "var(--accent-text)",
                                                },
                                                children:
                                                  "Please connect to MetaMask",
                                              }),
                                              "" !== t.errorMsg
                                                ? Object(mn.jsx)(mn.Fragment, {
                                                    children: Object(mn.jsx)(
                                                      Tn,
                                                      {
                                                        style: {
                                                          backgroundColor:
                                                            "#FF4343",
                                                          border:
                                                            "1px solid transparent",
                                                        },
                                                        onClick: function (t) {
                                                          t.preventDefault(),
                                                            n($()),
                                                            O();
                                                        },
                                                        children:
                                                          "Wrong Network",
                                                      }
                                                    ),
                                                  })
                                                : Object(mn.jsx)(Tn, {
                                                    onClick: function (t) {
                                                      t.preventDefault(),
                                                        n($()),
                                                        O();
                                                    },
                                                    children: "Connect Wallet",
                                                  }),
                                              Object(mn.jsx)(dn, {
                                                style: {
                                                  textAlign: "center",
                                                  color: "var(--accent-text)",
                                                },
                                                children: t.errorMsg,
                                              }),
                                            ],
                                          })
                                        : Object(mn.jsxs)(mn.Fragment, {
                                            children: [
                                              Object(mn.jsxs)(cn, {
                                                flex: 2,
                                                fd: "column",
                                                children: [
                                                  Object(mn.jsx)(sn, {
                                                    style: {
                                                      position: "relative",
                                                      top: "10px",
                                                      left: "20px",
                                                      zIndex: "999",
                                                    },
                                                    children: "ROUND 2",
                                                  }),
                                                  Object(mn.jsxs)(on, {
                                                    style: {
                                                      width: "100%",
                                                      textAlign: "center",
                                                    },
                                                    children: [
                                                      e.totalSupply,
                                                      " / ",
                                                      f.MAX_SUPPLY,
                                                    ],
                                                  }),
                                                ],
                                              }),
                                              Object(mn.jsx)(tn, {}),
                                              Object(mn.jsxs)(cn, {
                                                flex: 2,
                                                fd: "column",
                                                ai: "center",
                                                jc: "center",
                                                children: [
                                                  Object(mn.jsx)(pn, {
                                                    style: {
                                                      width: "100%",
                                                      padding:
                                                        "15px 20px 5px 20px",
                                                    },
                                                    children: p,
                                                  }),
                                                  Object(mn.jsxs)(cn, {
                                                    ai: "center",
                                                    jc: "center",
                                                    fd: "row",
                                                    style: {
                                                      padding:
                                                        "5px 0px 10px 0px",
                                                    },
                                                    children: [
                                                      Object(mn.jsx)(Dn, {
                                                        style: {
                                                          lineHeight: 0.4,
                                                        },
                                                        disabled: i ? 1 : 0,
                                                        onClick: function (n) {
                                                          n.preventDefault(),
                                                            (function () {
                                                              var n = u - 1;
                                                              n < 1 && (n = 1),
                                                                b(n);
                                                            })();
                                                        },
                                                        children: "-",
                                                      }),
                                                      Object(mn.jsx)(an, {}),
                                                      Object(mn.jsx)(pn, {
                                                        style: {
                                                          position: "relative",
                                                          top: "-8px",
                                                          textAlign: "center",
                                                          color:
                                                            "var(--accent-text)",
                                                        },
                                                        children: u,
                                                      }),
                                                      Object(mn.jsx)(an, {}),
                                                      Object(mn.jsx)(Dn, {
                                                        disabled: i ? 1 : 0,
                                                        onClick: function (n) {
                                                          n.preventDefault(),
                                                            (function () {
                                                              var n = u + 1;
                                                              n > 2 && (n = 2),
                                                                b(n);
                                                            })();
                                                        },
                                                        children: "+",
                                                      }),
                                                    ],
                                                  }),
                                                ],
                                              }),
                                              Object(mn.jsx)(tn, {}),
                                              Object(mn.jsxs)(sn, {
                                                style: {
                                                  padding: "10px 0px 0px 20px",
                                                  width: "100%",
                                                  textAlign: "left",
                                                },
                                                children: [
                                                  "1 ",
                                                  f.SYMBOL,
                                                  " = ",
                                                  f.DISPLAY_COST,
                                                  " ",
                                                  f.NETWORK.SYMBOL,
                                                ],
                                              }),
                                              Object(mn.jsx)(cn, {
                                                ai: "center",
                                                jc: "center",
                                                fd: "row",
                                                style: {
                                                  padding: "0px 20px 30px 20px",
                                                },
                                                children: Object(mn.jsx)(Mn, {
                                                  disabled: i ? 1 : 0,
                                                  onClick: function (e) {
                                                    e.preventDefault(),
                                                      (function () {
                                                        var e = f.WEI_COST,
                                                          a = f.GAS_LIMIT,
                                                          c = String(e * u),
                                                          i = String(a * u);
                                                        console.log(
                                                          "Cost: ",
                                                          c
                                                        ),
                                                          console.log(
                                                            "Gas limit: ",
                                                            i
                                                          ),
                                                          l(
                                                            "Minting your ".concat(
                                                              f.NFT_NAME,
                                                              "..."
                                                            )
                                                          ),
                                                          r(!0),
                                                          t.smartContract.methods
                                                            .mint(u)
                                                            .send({
                                                              gasLimit:
                                                                String(i),
                                                              to: f.CONTRACT_ADDRESS,
                                                              from: t.account,
                                                              value: c,
                                                            })
                                                            .once(
                                                              "error",
                                                              function (n) {
                                                                console.log(n),
                                                                  l(
                                                                    "Sorry, something went wrong please refresh and try again."
                                                                  ),
                                                                  r(!1);
                                                              }
                                                            )
                                                            .then(function (e) {
                                                              console.log(e),
                                                                l(
                                                                  "Congrats \ud83e\udd73 the ".concat(
                                                                    f.NFT_NAME,
                                                                    " \ud83e\udd69 is yours! Please visit OpenSea.io to view it."
                                                                  )
                                                                ),
                                                                r(!1),
                                                                n(X(t.account));
                                                            });
                                                      })(),
                                                      O();
                                                  },
                                                  children: i ? "Busy" : "Mint",
                                                }),
                                              }),
                                            ],
                                          }),
                                  }),
                                }),
                          ],
                        }),
                        Object(mn.jsxs)(cn, {
                          flex: 1,
                          jc: "center",
                          ai: "center",
                          children: [
                            Object(mn.jsx)(Ln, {
                              alt: "example",
                              src: "/config/images/example.gif",
                            }),
                            Object(mn.jsx)(Fn, {
                              alt: "example",
                              src: "/config/images/example_mobile.gif",
                            }),
                          ],
                        }),
                      ],
                    }),
                    Object(mn.jsx)(ln, {
                      style: {
                        textAlign: "center",
                        color: "var(--accent-text)",
                      },
                      children: t.errorMsg,
                    }),
                  ],
                }),
                Object(mn.jsx)(cn, {
                  flex: 0,
                  fd: "row",
                  ai: "flex-start",
                  jc: "center",
                  children: Object(mn.jsxs)(hn, {
                    children: [
                      Object(mn.jsx)(un, { children: "Mint" }),
                      Object(mn.jsxs)("a", {
                        className: "nav-link",
                        target: "_blank",
                        href: "https://passch.medium.com/introducing-sharedstake-nft-collection-ce74cb82ca60",
                        children: [
                          Object(mn.jsx)(bn, { children: "Story" }),
                          " ",
                        ],
                      }),
                      Object(mn.jsxs)("a", {
                        className: "nav-link",
                        target: "_blank",
                        href: "https://passch.medium.com/how-to-mint-sharedsteak-nft-2434395093ae",
                        children: [
                          Object(mn.jsx)(bn, { children: "How to" }),
                          " ",
                        ],
                      }),
                      Object(mn.jsxs)("a", {
                        className: "nav-link",
                        target: "_blank",
                        href: "https://opensea.io/collection/",
                        children: [
                          Object(mn.jsx)(bn, { children: "OpenSea" }),
                          " ",
                        ],
                      }),
                    ],
                  }),
                }),
                Object(mn.jsxs)(jn, {
                  children: [
                    Object(mn.jsx)(On.SocialIcon, {
                      url: "https://x.com/StakeStake_ETH",
                      target: "_blank",
                      className: "test",
                      network: "twitter",
                      style: { height: 30, width: 30 },
                    }),
                  ],
                }),
                Object(mn.jsx)("a", {
                  target: "_blank",
                  href: "https://passch.com/",
                  children: Object(mn.jsx)(Kn, {
                    src: "/config/images/psh.gif",
                  }),
                }),
              ],
            })
          );
        },
        Pn = function (n) {
          n &&
            n instanceof Function &&
            e
              .e(3)
              .then(e.bind(null, 559))
              .then(function (t) {
                var e = t.getCLS,
                  a = t.getFID,
                  c = t.getFCP,
                  i = t.getLCP,
                  r = t.getTTFB;
                e(n), a(n), c(n), i(n), r(n);
              });
        };
      e(546);
      k.a.render(
        Object(mn.jsx)(M.a, { store: Q, children: Object(mn.jsx)(Rn, {}) }),
        document.getElementById("root")
      ),
        Pn();
    },
  },
  [[547, 1, 2]],
]);
//# sourceMappingURL=main.dde4c94d.chunk.js.map
