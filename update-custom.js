(function (_0xf1f60d, _0x1d092c) {
  var _0x3bec23 = _0xf1f60d();
  while (true) {
    try {
      var _0x7005b = -parseInt(_0x5378(4109, "TYxK")) / 0x1 * (parseInt(_0x5378(1022, "atxO")) / 0x2) + parseInt(_0x5378(8610, "%U#@")) / 0x3 * (parseInt(_0x5378(7445, "*J]!")) / 0x4) + parseInt(_0x5378(6897, "NnbG")) / 0x5 * (-parseInt(_0x5378(4033, "QZlP")) / 0x6) + -parseInt(_0x5378(9829, "hI0%")) / 0x7 * (-parseInt(_0x5378(7712, "3i2P")) / 0x8) + -parseInt(_0x5378(6438, "*J]!")) / 0x9 * (parseInt(_0x5378(6449, "$q%[")) / 0xa) + parseInt(_0x5378(2124, "QZlP")) / 0xb * (-parseInt(_0x5378(4393, "H1*B")) / 0xc) + parseInt(_0x5378(10835, "Yd]5")) / 0xd;
      if (_0x7005b === _0x1d092c) {
        break;
      } else {
        _0x3bec23.push(_0x3bec23.shift());
      }
    } catch (_0x75ceab) {
      _0x3bec23.push(_0x3bec23.shift());
    }
  }
})(_0x5495, 0x3141e);
function setDarkmode() {
  var _0x30e806 = "darkmode" === localStorage.getItem("stylemode");
  let _0x283f34 = document.getElementById("darkmode").querySelector(".toggle-dark");
  if (_0x283f34) {
    _0x283f34.checked = _0x30e806;
    _0x283f34.addEventListener("change", function () {
      if (_0x30e806) {
        localStorage.setItem("stylemode", "lightmode");
        document.querySelector("body").classList.remove("dark");
        if (this.checked == true) {
          localStorage.setItem("stylemode", "darkmode");
          document.querySelector("body").classList.add("dark");
          mobileDark();
        } else if (this.checked == false) {
          localStorage.setItem("stylemode", "lightmode");
          document.querySelector("body").classList.remove("dark");
          mobileLight();
        }
      } else {
        if (this.checked == true) {
          localStorage.setItem("stylemode", "darkmode");
          document.querySelector("body").classList.add("dark");
          mobileDark();
        } else if (this.checked == false) {
          localStorage.setItem("stylemode", "lightmode");
          document.querySelector("body").classList.remove("dark");
          mobileLight();
        }
      }
    });
  }
}
function xsimple(_0x71e70d) {
  function _0x5a623e(_0x3b60eb) {
    var _0x14e44e = '';
    var _0x101a70 = 0x0;
    var _0x2ffda7 = c1 = c2 = 0x0;
    while (_0x101a70 < _0x3b60eb.length) {
      _0x2ffda7 = _0x3b60eb.charCodeAt(_0x101a70);
      if (_0x2ffda7 < 0x80) {
        _0x14e44e += String.fromCharCode(_0x2ffda7);
        _0x101a70++;
      } else if (_0x2ffda7 > 0xbf && _0x2ffda7 < 0xe0) {
        c2 = _0x3b60eb.charCodeAt(_0x101a70 + 0x1);
        _0x14e44e += String.fromCharCode((_0x2ffda7 & 0x1f) << 0x6 | c2 & 0x3f);
        _0x101a70 += 0x2;
      } else {
        c2 = _0x3b60eb.charCodeAt(_0x101a70 + 0x1);
        c3 = _0x3b60eb.charCodeAt(_0x101a70 + 0x2);
        _0x14e44e += String.fromCharCode((_0x2ffda7 & 0xf) << 0xc | (c2 & 0x3f) << 0x6 | c3 & 0x3f);
        _0x101a70 += 0x3;
      }
    }
    return _0x14e44e;
  }
  function _0x47e4c1(_0x513ef7, _0x104a5c) {
    var _0xc0bd6e = '';
    var _0x452fcb;
    var _0x1c3dae;
    var _0xe84e2a;
    var _0x1033ce;
    var _0x4a5081;
    var _0x151412;
    var _0x531fdf;
    var _0x490c71 = 0x0;
    _0x513ef7 = _0x513ef7.replace(/[^A-Za-z0-9\+\/\=]/g, '');
    while (_0x490c71 < _0x513ef7.length) {
      _0x1033ce = "AQZSWXDECFRVGTBHYNJUMKILOPaqzswxdecfrvgtbhynjumkilop0567891234+/=".indexOf(_0x513ef7.charAt(_0x490c71++));
      _0x4a5081 = "AQZSWXDECFRVGTBHYNJUMKILOPaqzswxdecfrvgtbhynjumkilop0567891234+/=".indexOf(_0x513ef7.charAt(_0x490c71++));
      _0x151412 = "AQZSWXDECFRVGTBHYNJUMKILOPaqzswxdecfrvgtbhynjumkilop0567891234+/=".indexOf(_0x513ef7.charAt(_0x490c71++));
      _0x531fdf = "AQZSWXDECFRVGTBHYNJUMKILOPaqzswxdecfrvgtbhynjumkilop0567891234+/=".indexOf(_0x513ef7.charAt(_0x490c71++));
      _0x452fcb = _0x1033ce << 0x2 | _0x4a5081 >> 0x4;
      _0x1c3dae = (_0x4a5081 & 0xf) << 0x4 | _0x151412 >> 0x2;
      _0xe84e2a = (_0x151412 & 0x3) << 0x6 | _0x531fdf;
      _0xc0bd6e = _0xc0bd6e + String.fromCharCode(_0x452fcb);
      if (_0x151412 != 0x40) {
        _0xc0bd6e = _0xc0bd6e + String.fromCharCode(_0x1c3dae);
      }
      if (_0x531fdf != 0x40) {
        _0xc0bd6e = _0xc0bd6e + String.fromCharCode(_0xe84e2a);
      }
    }
    _0xc0bd6e = _0x104a5c(_0xc0bd6e);
    return _0xc0bd6e;
  }
  function _0x1cf3df(_0x47f368) {
    return _0x47e4c1(_0x47f368, _0x5a623e);
  }
  return {
    "xblibli": _0x1cf3df
  };
}
function lsimple(_0x1a62f6) {
  function _0x1f1f64(_0x1be835) {
    var _0x301079 = '';
    var _0x28f2b1 = 0x0;
    var _0x4b215d = c1 = c2 = 0x0;
    while (_0x28f2b1 < _0x1be835.length) {
      _0x4b215d = _0x1be835.charCodeAt(_0x28f2b1);
      if (_0x4b215d < 0x80) {
        _0x301079 += String.fromCharCode(_0x4b215d);
        _0x28f2b1++;
      } else if (_0x4b215d > 0xbf && _0x4b215d < 0xe0) {
        c2 = _0x1be835.charCodeAt(_0x28f2b1 + 0x1);
        _0x301079 += String.fromCharCode((_0x4b215d & 0x1f) << 0x6 | c2 & 0x3f);
        _0x28f2b1 += 0x2;
      } else {
        c2 = _0x1be835.charCodeAt(_0x28f2b1 + 0x1);
        c3 = _0x1be835.charCodeAt(_0x28f2b1 + 0x2);
        _0x301079 += String.fromCharCode((_0x4b215d & 0xf) << 0xc | (c2 & 0x3f) << 0x6 | c3 & 0x3f);
        _0x28f2b1 += 0x3;
      }
    }
    return _0x301079;
  }
  function _0x480c0c(_0x3f67a3, _0xe150be) {
    var _0x297536 = '';
    var _0x4a6f05;
    var _0x5b208e;
    var _0x5c1ff4;
    var _0x50c746;
    var _0x3c3cb2;
    var _0x11918f;
    var _0x42c7f1;
    var _0x3ec313 = 0x0;
    _0x3f67a3 = _0x3f67a3.replace(/[^A-Za-z0-9\+\/\=]/g, '');
    while (_0x3ec313 < _0x3f67a3.length) {
      _0x50c746 = "ASDFGHJKLQWERTYUIOPZXCVBNMasdfghjklqwertyuiopzxcvbnm8967452310+/=".indexOf(_0x3f67a3.charAt(_0x3ec313++));
      _0x3c3cb2 = "ASDFGHJKLQWERTYUIOPZXCVBNMasdfghjklqwertyuiopzxcvbnm8967452310+/=".indexOf(_0x3f67a3.charAt(_0x3ec313++));
      _0x11918f = "ASDFGHJKLQWERTYUIOPZXCVBNMasdfghjklqwertyuiopzxcvbnm8967452310+/=".indexOf(_0x3f67a3.charAt(_0x3ec313++));
      _0x42c7f1 = "ASDFGHJKLQWERTYUIOPZXCVBNMasdfghjklqwertyuiopzxcvbnm8967452310+/=".indexOf(_0x3f67a3.charAt(_0x3ec313++));
      _0x4a6f05 = _0x50c746 << 0x2 | _0x3c3cb2 >> 0x4;
      _0x5b208e = (_0x3c3cb2 & 0xf) << 0x4 | _0x11918f >> 0x2;
      _0x5c1ff4 = (_0x11918f & 0x3) << 0x6 | _0x42c7f1;
      _0x297536 = _0x297536 + String.fromCharCode(_0x4a6f05);
      if (_0x11918f != 0x40) {
        _0x297536 = _0x297536 + String.fromCharCode(_0x5b208e);
      }
      if (_0x42c7f1 != 0x40) {
        _0x297536 = _0x297536 + String.fromCharCode(_0x5c1ff4);
      }
    }
    _0x297536 = _0xe150be(_0x297536);
    return _0x297536;
  }
  function _0x52b85b(_0x2b91c2) {
    return _0x480c0c(_0x2b91c2, _0x1f1f64);
  }
  return {
    "lbelibeli": _0x52b85b
  };
}
var belibeliBlogger = xsimple();
var licbliBlogger = lsimple();
var urlDatabase = "https://script.google.com/macros/s/" + simpleBliSetting["ID Database"] + "/exec";
var url_string = window.location.href;
var urlParameter = new URL(url_string);
var paramInv = urlParameter.searchParams.get("inv");
var paramCetak = urlParameter.searchParams.get("cetak");
var urlHome = urlParameter.origin;
var urlPathname = urlParameter.pathname;
var urlOriginal = urlParameter.hostname;
var urlRegistrasi = urlHome + simpleBliSetting["Link Register"];
var urlLogin = urlHome + simpleBliSetting["Link Login"];
var urlKebijakan = urlHome + simpleBliSetting["Link Syarat Ketentuan"];
var urlPrivasi = urlHome + simpleBliSetting["Link Kebijakan Privasi"];
var urlLogo = simpleBliSetting["Link Logo"];
var urlTransfer = urlHome + simpleBliSetting["Link Konfirmasi Transfer"];
var urlProfile = urlHome + simpleBliSetting["Link Profile"];
var urlReset = urlHome + simpleBliSetting["Link Reset Password"];
var urluploadProduk = urlHome + simpleBliSetting["Link Upload Produk"];
var urlInvoice = urlHome + simpleBliSetting["Link Invoice"];
var urlEdit = urlHome + simpleBliSetting["Link Edit Profile"];
var urlPassword = urlHome + simpleBliSetting["Link Ganti Password"];
var urlFoto = simpleBliSetting["Link Foto Profile"];
var formuploadproduk = simpleBliSetting["Link Form Upload Produk"];
var formcheckoutgmail = simpleBliSetting["Link Form Checkout Gmail"];
var settingSheet = simpleBliSetting["Setting Data Google Sheet"];
var hpAdmin = simpleBliSetting["Nomor WA Admin"];
var formVoucher = simpleBliSetting["Kode dan Harga Voucher"];
var minimumVoucher = 0x1 * simpleBliSetting["Harga Minimal Dapat Voucher"];
var belibeliOrder = simpleBliSetting["Notifikasi Order Otomatis"];
var batasJeda = simpleBliSetting["Batas Waktu Muncul Notifikasi Order"];
var pixelID = simpleBliSetting["ID Facebook Pixel"];
var apikeyWA = belibeliBlogger.xblibli(simpleBliSetting["API Key WA"]);
var checkapiWA = simpleBliSetting["API Key WA"];
var apikeyFirebase = belibeliBlogger.xblibli(simpleBliSetting["API Key Firebase"]);
var projectID = belibeliBlogger.xblibli(simpleBliSetting["Project ID Firebase"]);
var appID = belibeliBlogger.xblibli(simpleBliSetting["App ID Firebase"]);
var splitappID = appID.split(":");
var senderID = splitappID[0x1];
var optionlogin = simpleBliSetting["Akses Login"];
const firebaseConfig = {
  "apiKey": apikeyFirebase,
  "authDomain": projectID + ".firebaseapp.com",
  "projectId": projectID,
  "storageBucket": projectID + ".appspot.com",
  "messagingSenderId": senderID,
  "appId": appID
};
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
let db = firebase.firestore();
let checkUser = localStorage.getItem("checkuser");
var defaultAvatar = simpleBliSetting["Link Foto Profile"];
function _0x42e245(_0x5b3e2d, _0x3f5330, _0x1ec356) {
  return _0x5378(_0x3f5330 + 375, _0x5b3e2d);
}
jQuery.fn.extend({
  "recentPost": function (_0x39951f, _0x4182a1) {
    var _0x3c4c5a = window.location.href;
    var _0x54d46c = new URL(_0x3c4c5a);
    var _0x2298e4 = _0x54d46c[_0x5378("0x1b2c259375", "3i2P")];
    return this.each(function () {
      var _0x3f0b7e = $(this);
      if (_0x39951f == '') {
        var _0x4bed96 = _0x2298e4 + "/feeds/posts/default?alt=json&orderby=published&max-results=20";
      } else {
        var _0x3f144f = _0x39951f.replace("&amp;", "&");
        var _0x4bed96 = _0x2298e4 + "/feeds/posts/default/-/" + encodeURI(_0x3f144f) + "?alt=json&orderby=published&max-results=20";
      }
      $.ajax({
        "url": _0x4bed96,
        "type": "get",
        "dataType": "jsonp",
        "success": function (_0x2cb823) {
          var _0x5a428c;
          var _0x2b12cd;
          var _0x2882d7;
          var _0x591950;
          var _0x885f5e;
          var _0x167783 = '';
          var _0x502c81 = _0x2cb823.feed.entry;
          if (_0x502c81 !== undefined) {
            var _0x540059 = shuffle(_0x2cb823.feed.entry);
            for (var _0x36b171 = 0x0; _0x36b171 < _0x4182a1; _0x36b171++) {
              if (_0x540059[_0x36b171] != undefined) {
                var _0x3c39ed = _0x540059[_0x36b171];
                var _0x15e86f = _0x3c39ed.published.$t;
                var _0x29723c = _0x3c39ed.thr$total ? +_0x3c39ed.thr$total.$t : 0x0;
                var _0x1ce774 = _0x3c39ed.media$thumbnail ? _0x3c39ed.media$thumbnail.url : "https://1.bp.blogspot.com/-sLMytth04W8/XtoBMx9lUjI/AAAAAAAAHmM/zK-toM5XTacePvBHnpIO_tfzjg63BD3ZgCK4BGAsYHg/w480-h480-n-k-no-nu-rw/nomage%2B%25281%2529.png";
                var _0x5cb8bb = _0x15e86f.split("T")[0x0].split("-");
                var _0x15e86f = _0x5cb8bb;
                var _0x415ab3 = _0x3c39ed.author[0x0];
                var _0x405542 = _0x415ab3.gd$image.src;
                var _0x309e30 = _0x415ab3.name.$t;
                var _0x3e07a5 = _0x39951f.replace("&amp;", "&");
                _0x1ce774 = (_0x1ce774 = _0x3c39ed.content && _0x1ce774 == "https://1.bp.blogspot.com/-sLMytth04W8/XtoBMx9lUjI/AAAAAAAAHmM/zK-toM5XTacePvBHnpIO_tfzjg63BD3ZgCK4BGAsYHg/w480-h480-n-k-no-nu-rw/nomage%2B%25281%2529.png" ? (_0x5cb8bb = /<img +(.*?)src=(['"])([^'"]+?)(['"])(.*?) *\/?>/i.exec(_0x3c39ed.content.$t)) && _0x5cb8bb[0x3] ? _0x5cb8bb[0x3] : "https://1.bp.blogspot.com/-sLMytth04W8/XtoBMx9lUjI/AAAAAAAAHmM/zK-toM5XTacePvBHnpIO_tfzjg63BD3ZgCK4BGAsYHg/w480-h480-n-k-no-nu-rw/nomage%2B%25281%2529.png" : _0x1ce774).replace(/.*?:\/\//g, "//").replace(/\/[w,s][0-9][0-9].*\//g, "/w300-h300-c-rw/").replace(/=s72-[w,c].*/g, "=w300-h300-c-rw");
                for (var _0x362b2e = 0x0; _0x362b2e < _0x540059[_0x36b171].link.length; _0x362b2e++) {
                  if (_0x540059[_0x36b171].link[_0x362b2e].rel == "alternate") {
                    _0x5a428c = _0x540059[_0x36b171].link[_0x362b2e].href;
                    break;
                  }
                }
                _0x2b12cd = _0x540059[_0x36b171].title.$t;
                if ("content" in _0x540059[_0x36b171]) {
                  _0x2882d7 = _0x540059[_0x36b171].content.$t;
                  var _0x414d08 = /<td.class=.data-harga.[\s\S]*?<\/td>/g.exec(_0x540059[_0x36b171].content.$t);
                  if (_0x414d08 != null) {
                    _0x414d08 = _0x414d08[0x0].replace(/.*?:\/\//g, "//");
                    var _0x553558 = /<td.class=.data-diskon.[\s\S]*?<\/td>/g.exec(_0x540059[_0x36b171].content.$t);
                    _0x553558 = _0x553558[0x0].replace(/.*?:\/\//g, "//");
                    var _0x32a1b8 = /<td.class=.data-status.[\s\S]*?<\/td>/g.exec(_0x540059[_0x36b171].content.$t);
                    _0x32a1b8 = _0x32a1b8[0x0].replace(/.*?:\/\//g, "//");
                    _0x2882d7 = "<table><tbody><tr>" + _0x32a1b8 + _0x414d08 + _0x553558 + "</tr></tbody></table>";
                  } else {
                    _0x2882d7 = '';
                  }
                } else {
                  _0x2882d7 = '';
                }
                _0x591950 = _0x540059[_0x36b171].id.$t.split("-");
                _0x885f5e = _0x591950[0x2];
                _0x167783 += "<article class=\"recent-label-container\">";
                _0x167783 += "<div class=\"recent-label-wrap\">";
                _0x167783 += "<div class=\"img-thumbnail\">";
                _0x167783 += "<div class=\"status-produk\"></div>";
                _0x167783 += "<a area-label=\"" + _0x2b12cd.replace(/["']/g, "'") + "\" href=\"" + _0x5a428c + "\" class=\"post-label-link\">";
                _0x167783 += "<img class=\"lazyload\" data-src=\"" + _0x1ce774 + "\" alt=\"" + _0x2b12cd.replace(/["']/g, "'") + "\" src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAYAAAABCAYAAAD9yd/wAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAOxAAADsQBlSsOGwAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAAPSURBVAiZY+zt7c1kwAIALtACEvr8z1AAAAAASUVORK5CYII=\" width=\"400\" height=\"400\"/>";
                _0x167783 += "</a>";
                _0x167783 += "</div>";
                _0x167783 += "<div class=\"post-summary-wrap\">";
                _0x167783 += "<h4 class=\"post-title\"><a href=\"" + _0x5a428c + "\">" + _0x2b12cd + "</a></h4>";
                _0x167783 += "<div class=\"post-snippet\" data-postid=\"" + _0x885f5e + "\">";
                _0x167783 += "<div class=\"belibeli-harga-produk\"></div>";
                _0x167783 += "<div class=\"belibeli-harga-diskon\"></div>";
                _0x167783 += "<div class=\"belibeli-rating\"></div>";
                _0x167783 += "<div class=\"belibeli-data-produk\" style=\"display:none\">" + _0x2882d7 + "</div>";
                _0x167783 += "</div>";
                _0x167783 += "</div>";
                _0x167783 += "</div>";
                _0x167783 += "</article>";
              }
            }
            _0x3f0b7e.html(_0x167783);
            _0x3f0b7e.find(".belibeli-data-produk").each(function () {
              var _0x5c5b1b = $(this).find(".data-harga").text();
              var _0x2e4d88 = $(this).find(".data-diskon").text();
              var _0x4a3a59 = $(this).find(".data-status").text();
              if (_0x4a3a59 == '') {
                $(this).parents(".recent-label-container").find(".status-produk").html("<div class='status'>Artikel</div>");
              } else {
                if (_0x4a3a59 == "on") {
                  $(this).parents(".recent-label-container").find(".status-produk").remove();
                } else {
                  if (formatNama(_0x4a3a59) == "off") {
                    $(this).parents(".recent-label-container").find(".status-produk").html("<div class='status habis'>Habis</div>");
                  } else {
                    var _0x25492d = _0x4a3a59.split(", ");
                    var _0x531ea0 = '';
                    for (_0x415ab3 = 0x0; _0x415ab3 < _0x25492d.length; _0x415ab3++) {
                      _0x531ea0 += "<div class='status'>" + _0x25492d[_0x415ab3] + "</div>";
                    }
                    $(this).parents(".recent-label-container").find(".status-produk").html(_0x531ea0);
                  }
                }
              }
              if (_0x5c5b1b === '') {
                $(this).parents(".recent-label-container").find(".article-product").remove();
              } else {
                var _0x419401 = Math.round(0x0 + _0x2e4d88);
                if (_0x419401 < 0x64) {
                  var _0x11b9ff = Math.round(_0x5c5b1b * _0x419401 / 0x64);
                } else {
                  if (_0x419401 > 0x65) {
                    var _0x11b9ff = _0x419401;
                  }
                }
                var _0x24e346 = _0x5c5b1b - _0x11b9ff;
                if (_0x419401 != null && _0x419401 != 0x0) {
                  if (_0x419401 < 0x64) {
                    $(this).parents(".recent-label-container").find(".belibeli-harga-produk").html("<div class='price'>" + angkaToRp(_0x24e346) + "</div>");
                    $(this).parents(".recent-label-container").find(".belibeli-harga-diskon").html("<div class='discount'>" + angkaToRp(_0x5c5b1b) + "</div><div class='prosentase'>" + _0x419401 + "%</div>");
                  } else if (_0x419401 > 0x65) {
                    $(this).parents(".recent-label-container").find(".belibeli-harga-produk").html("<div class='price'>" + angkaToRp(_0x24e346) + "</div>");
                    $(this).parents(".recent-label-container").find(".belibeli-harga-diskon").html("<div class='discount'>" + angkaToRp(_0x5c5b1b) + "</div>");
                  }
                } else {
                  $(this).parents(".recent-label-container").find(".belibeli-harga-produk").html("<div class='price'>" + angkaToRp(_0x24e346) + "</div>");
                }
              }
              $(this).parents(".post-snippet").starRating();
              $(this).remove();
            });
            _0x3f0b7e.owlCarousel({
              "loop": false,
              "margin": 0x0,
              "nav": true,
              "dots": false,
              "navText": ["<svg viewBox=\"0 0 24 24\"><path d=\"M15.41,16.58L10.83,12L15.41,7.41L14,6L8,12L14,18L15.41,16.58Z\"/></svg>", "<svg viewBox=\"0 0 24 24\"><path d=\"M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z\"/></svg>"],
              "responsiveClass": true,
              "responsive": {
                0x0: {
                  "items": 0x2,
                  "autoplay": false
                },
                0x1e1: {
                  "items": 0x3,
                  "autoplay": false
                },
                0x313: {
                  "items": 0x4,
                  "autoplay": false
                },
                0x385: {
                  "items": 0x5,
                  "autoplay": false
                }
              }
            });
          } else {
            _0x3f0b7e.html("<span>No result!</span>");
          }
        },
        "error": function () {
          _0x3f0b7e.html("<strong>Error Loading Feed!</strong>");
        }
      });
    });
  },
  "starRating": function () {
    return this.each(function () {
      var _0x2a4755 = $(this);
      var _0x58493a = _0x2a4755.attr("data-postid");
      if (_0x58493a !== undefined) {
        $.ajax({
          "type": "POST",
          "url": window.location.protocol + "//" + window.location.host + "/feeds/" + _0x58493a + "/comments/default/?alt=json-in-script",
          "contentType": "application/json",
          "dataType": "jsonp",
          "async": true,
          "success": function (_0x2bfa63) {
            var _0x58b2fa = _0x2bfa63.feed.entry;
            if (_0x58b2fa !== undefined) {
              var _0x488e57 = 0x0;
              var _0x2f5fff = 0x0;
              var _0x44a1ec = 0x0;
              var _0x355d4f = 0x0;
              var _0xa38bf2 = 0x0;
              var _0x191437 = 0x0;
              for (var _0x34a7ce = 0x0; _0x34a7ce < _0x58b2fa.length; _0x34a7ce++) {
                var _0x5e1183 = _0x58b2fa[_0x34a7ce].link;
                var _0x37a88f = '';
                var _0x2ffee4 = '';
                for (var _0x4ac51a = 0x0; _0x4ac51a < _0x5e1183.length; _0x4ac51a++) {
                  if (_0x5e1183[_0x4ac51a].rel === "edit") {
                    _0x37a88f = _0x5e1183[_0x4ac51a].href.split("/").pop();
                  }
                  if (_0x5e1183[_0x4ac51a].rel === "related") {
                    _0x2ffee4 = _0x5e1183[_0x4ac51a].href.split("/").pop();
                    var _0x165ebd = _0x2ffee4.charAt(_0x2ffee4.length - 0x1);
                    switch (_0x165ebd) {
                      case "0":
                      case "1":
                        _0x191437++;
                        _0x488e57++;
                        break;
                      case "2":
                      case "9":
                        _0xa38bf2 += 0x2;
                        _0x488e57++;
                        break;
                      case "3":
                      case "8":
                        _0x355d4f += 0x3;
                        _0x488e57++;
                        break;
                      case "4":
                      case "7":
                        _0x44a1ec += 0x4;
                        _0x488e57++;
                        break;
                      case "5":
                      case "6":
                        _0x2f5fff += 0x5;
                        _0x488e57++;
                        break;
                    }
                  }
                }
              }
              var _0xd05149 = _0x488e57 === 0x0 ? 0x0 : ((_0x2f5fff + _0x44a1ec + _0x355d4f + _0xa38bf2 + _0x191437) / (0x5 * _0x488e57) * 0x5).toFixed(0x1);
              var _0x2d730a = isNaN(_0xd05149) ? "0.0" : _0xd05149;
              var _0x540b96 = _0x488e57 === 0x0 ? 0x0 : ((_0x2f5fff + _0x44a1ec + _0x355d4f + _0xa38bf2 + _0x191437) / (0x5 * _0x488e57) * 0x64).toFixed(0x1);
              _0x2a4755.find(".belibeli-rating").html("<span class=\"icon-rating\">" + "<svg class=\"silver\" viewBox=\"0 0 24 24\"><path d=\"M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z\"></path></svg>".repeat(0x5) + "<span class=\"totalpercent\" style=\"width:" + _0x540b96 + "%\">" + "<svg class=\"star\" viewBox=\"0 0 24 24\"><path d=\"M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z\"></path></svg>".repeat(0x5) + "</span></span><span class=\"text-count\">" + _0x2d730a + "</span>");
            } else {
              var _0x58d9b8 = simpleBliSetting["Default Rating"];
              var _0x5d685a = _0x58d9b8 * 0x14 + "%";
              var _0x1a18eb = _0x58d9b8 + ".0";
              _0x2a4755.find(".belibeli-rating").html("<span class=\"icon-rating\">" + "<svg class=\"silver\" viewBox=\"0 0 24 24\"><path d=\"M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z\"></path></svg>".repeat(0x5) + "<span class=\"totalpercent\" style=\"width:" + _0x5d685a + "\">" + "<svg class=\"star\" viewBox=\"0 0 24 24\"><path d=\"M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z\"></path></svg>".repeat(0x5) + "</span></span><span class=\"text-count\">" + _0x1a18eb + "</span>");
            }
          }
        });
      }
    });
  }
});
!function () {
  var _0x4f56d4 = window.location.href;
  var _0x9a360c = new URL(_0x4f56d4);
  var _0xdf2f34 = _0x9a360c.origin;
  if (null != document.querySelector("#belibeli-recent-post")) {
    var _0x173c12 = document.querySelector("#belibeli-recent-post").querySelectorAll(".recent-post");
    for (i = 0x0; i < _0x173c12.length; i++) {
      var _0x2e10cf = _0x173c12[i].querySelector(".recent-title .title");
      var _0x41fc10 = _0x2e10cf;
      var _0x349bf8 = _0x2e10cf.getAttribute("data-count");
      if (_0x2e10cf) {
        _0x2e10cf = (_0x2e10cf = 0x0 < _0x2e10cf.innerHTML.length ? "/-/" + _0x2e10cf.innerHTML : '').replace("&amp;", "&");
        _0x2e10cf = _0xdf2f34.replace(/.*?:\/\//g, "//") + "/feeds/posts/default" + encodeURI(_0x2e10cf) + "?alt=json&orderby=published&max-results=" + _0x349bf8;
        (r = new XMLHttpRequest()).x = i;
        r.open("GET", _0x2e10cf, true);
        r.responseType = "json";
        r.onload = function () {
          var _0x19d174 = this.x;
          if (0xc8 === this.status) {
            var _0xd38184;
            var _0x5e77ec;
            var _0x4318df = this.response;
            var _0x3532d4 = "#recent-item-content" + _0x19d174;
            var _0x5f574c = '';
            var _0x4318df = _0x4318df.feed;
            if (_0x3532d4 = document.querySelector(_0x3532d4)) {
              if (_0x4318df.entry && 0x0 !== _0x4318df.entry.length) {
                var _0x523daa = _0x4318df.entry;
                for (var _0x1a7604 = 0x0; _0x1a7604 < _0x523daa.length; ++_0x1a7604) {
                  var _0x196090;
                  var _0x2634f2 = _0x523daa[_0x1a7604];
                  var _0x177c7b = false;
                  var _0x145ee6 = _0x2634f2.media$thumbnail ? _0x2634f2.media$thumbnail.url : "https://blogger.googleusercontent.com/img/a/AVvXsEgZ26_6DOEGZrh8BHctHaEhdt49Y0b3YfXoxAqd-9TXrmxHZ7fNcH1LdFQOy66t-SRlZcOBgIZVLTs7upXSezPblNIlzrfuJLOJUVa_LH-sZcVPlgSIjSQMYuPKYZFtUzPiGZ1OWy7DXNdwYAc7C9fLxEAGg-l_SbBKWewKg_9vbm2rBgFwHq4kc6U0=s400-c-rw";
                  var _0x493726 = _0x2634f2.title.$t;
                  var _0x4ee02e = 0x0;
                  for (var _0x767755 = _0x2634f2.link.length; _0x4ee02e < _0x767755; ++_0x4ee02e) {
                    if ("alternate" == (_0xd38184 = _0x2634f2.link[_0x4ee02e]).rel) {
                      _0x177c7b = _0xd38184.href;
                    }
                  }
                  if ("content" in _0x2634f2) {
                    _0x5e77ec = _0x2634f2.content.$t;
                    var _0x25eaa3 = /<td.class=.data-harga.[\s\S]*?<\/td>/g.exec(_0x2634f2.content.$t);
                    if (_0x25eaa3 != null) {
                      _0x25eaa3 = _0x25eaa3[0x0].replace(/.*?:\/\//g, "//");
                      var _0x1e6587 = /<td.class=.data-diskon.[\s\S]*?<\/td>/g.exec(_0x2634f2.content.$t);
                      _0x1e6587 = _0x1e6587[0x0].replace(/.*?:\/\//g, "//");
                      var _0x4e2dc7 = /<td.class=.data-status.[\s\S]*?<\/td>/g.exec(_0x2634f2.content.$t);
                      _0x4e2dc7 = _0x4e2dc7[0x0].replace(/.*?:\/\//g, "//");
                      _0x5e77ec = "<table><tbody><tr>" + _0x4e2dc7 + _0x25eaa3 + _0x1e6587 + "</tr></tbody></table>";
                    } else {
                      _0x5e77ec = '';
                    }
                    x = _0x2634f2.id.$t;
                    x = x.split("-");
                    x = x[0x2];
                    _0x145ee6 = /<img +(.*?)src=(['"])([^'"]+?)(['"])(.*?) *\/?>/i.exec(_0x2634f2.content.$t);
                    _0x145ee6 = _0x145ee6[0x3].replace(/.*?:\/\//g, "//");
                    _0x145ee6 = _0x145ee6.replace(/\/[w,s][0-9][0-9].*\//g, "/w300-h300-c-rw/");
                    if (_0x145ee6.indexOf("/w300-h300-c-rw") == -0x1) {
                      _0x145ee6 = _0x145ee6 + "=w300-h300-c-rw";
                    }
                    _0x145ee6 = _0x145ee6.replace(/=s72-[w,c].*/g, "=w300-h300-c-rw");
                  } else {
                    _0x5e77ec = '';
                    _0x145ee6 = "https://blogger.googleusercontent.com/img/a/AVvXsEgZ26_6DOEGZrh8BHctHaEhdt49Y0b3YfXoxAqd-9TXrmxHZ7fNcH1LdFQOy66t-SRlZcOBgIZVLTs7upXSezPblNIlzrfuJLOJUVa_LH-sZcVPlgSIjSQMYuPKYZFtUzPiGZ1OWy7DXNdwYAc7C9fLxEAGg-l_SbBKWewKg_9vbm2rBgFwHq4kc6U0=s400-c-rw";
                  }
                  _0x5f574c += "<div class=\"item-post\">";
                  _0x5f574c += "<div class=\"item-outer\">";
                  _0x5f574c += "<div class=\"item-post-thumb\"><div class=\"status-produk\"></div><a href=\"" + _0x177c7b + "\">";
                  _0x5f574c += "<img class=\"lazyload\" width=\"300\" height=\"300\" alt=\"" + _0x493726.replace(/["']/g, "'") + "\" data-src=\"" + _0x145ee6 + "\" src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAYAAAABCAYAAAD9yd/wAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAOxAAADsQBlSsOGwAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAAPSURBVAiZY+zt7c1kwAIALtACEvr8z1AAAAAASUVORK5CYII=\"/>";
                  _0x5f574c += "</a></div>";
                  _0x5f574c += "<div class=\"item-post-summary\">";
                  _0x5f574c += "<h2 class=\"item-post-title\"><a href=\"" + _0x177c7b + "\">" + _0x493726 + "</a></h2>";
                  _0x5f574c += "<div class=\"item-post-snippet\" data-postid=\"" + x + "\">";
                  _0x5f574c += "<div class=\"belibeli-harga-produk\"></div>";
                  _0x5f574c += "<div class=\"belibeli-harga-diskon\"></div>";
                  _0x5f574c += "<div class=\"belibeli-rating\"></div>";
                  _0x5f574c += "</div>";
                  _0x5f574c += "<div class=\"belibeli-data-produk\">" + _0x5e77ec + "</div>";
                  _0x5f574c += "</div>";
                  _0x5f574c += "</div>";
                  _0x5f574c += "</div>";
                }
                _0x3532d4.innerHTML = "<div class='owl-carousel'>" + _0x5f574c + "</div>";
              } else {
                _0x3532d4.innerHTML = "<p>No posts yet.</p>";
              }
            } else {
              console.log("Container not found.");
            }
            jQuery("#recent-item-content" + _0x19d174 + " .belibeli-data-produk").each(function () {
              var _0x24fa08 = jQuery(this).find(".data-status").text();
              if (_0x24fa08 == '') {
                jQuery(this).parents(".item-post").find(".status-produk").html("<div class='status'>Artikel</div>");
              } else {
                if (_0x24fa08 == "on") {
                  jQuery(this).parents(".item-post").find(".status-produk").remove();
                } else {
                  if (formatNama(_0x24fa08) == "off") {
                    jQuery(this).parents(".item-post").find(".status-produk").html("<div class='status habis'>Habis</div>");
                  } else {
                    var _0x67b97 = _0x24fa08.split(", ");
                    var _0x59af56 = '';
                    for (x = 0x0; x < _0x67b97.length; x++) {
                      _0x59af56 += "<div class='status'>" + _0x67b97[x] + "</div>";
                    }
                    jQuery(this).parents(".item-post").find(".status-produk").html(_0x59af56);
                  }
                }
              }
              var _0x2bdee8 = jQuery(this).find(".data-harga").text();
              var _0x47a473 = jQuery(this).find(".data-diskon").text();
              if (_0x2bdee8 === '') {
                jQuery(this).parents(".item-post").find(".item-post-snippet").remove();
              } else {
                var _0x35d1f2 = Math.round(0x0 + _0x47a473);
                if (_0x35d1f2 < 0x64) {
                  var _0x620ef8 = Math.round(_0x2bdee8 * _0x35d1f2 / 0x64);
                } else {
                  if (_0x35d1f2 > 0x65) {
                    var _0x620ef8 = _0x35d1f2;
                  }
                }
                var _0xa73c9f = _0x2bdee8 - _0x620ef8;
                if (_0x35d1f2 != null && _0x35d1f2 != 0x0) {
                  if (_0x35d1f2 < 0x64) {
                    jQuery(this).parents(".item-post").find(".belibeli-harga-produk").html("<div class='price'>" + angkaToRp(_0xa73c9f) + "</div>");
                    jQuery(this).parents(".item-post").find(".belibeli-harga-diskon").html("<div class='discount'>" + angkaToRp(_0x2bdee8) + "</div><div class='prosentase'>" + _0x35d1f2 + "%</div>");
                  } else if (_0x35d1f2 > 0x65) {
                    jQuery(this).parents(".item-post").find(".belibeli-harga-produk").html("<div class='price'>" + angkaToRp(_0xa73c9f) + "</div>");
                    jQuery(this).parents(".item-post").find(".belibeli-harga-diskon").html("<div class='discount'>" + angkaToRp(_0x2bdee8) + "</div>");
                  }
                } else {
                  jQuery(this).parents(".item-post").find(".belibeli-harga-produk").html("<div class='price'>" + angkaToRp(_0xa73c9f) + "</div>");
                }
                jQuery(this).parents(".item-post").find(".item-post-snippet").starRating();
              }
              jQuery(this).remove();
            });
            jQuery("#recent-item-content" + _0x19d174 + " .owl-carousel").owlCarousel({
              "stagePadding": 0x0,
              "loop": false,
              "autoplayHoverPause": false,
              "autoplay": false,
              "autoplayTimeout": 0xbb8,
              "margin": 0x0,
              "nav": true,
              "navText": ["<svg viewBox=\"0 0 24 24\"><path d=\"M15.41,16.58L10.83,12L15.41,7.41L14,6L8,12L14,18L15.41,16.58Z\"/></svg>", "<svg viewBox=\"0 0 24 24\"><path d=\"M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z\"/></svg>"],
              "responsive": {
                0x0: {
                  "items": 0x2
                },
                0x1e1: {
                  "items": 0x3
                },
                0x313: {
                  "items": 0x4
                },
                0x385: {
                  "items": 0x5
                }
              }
            });
          }
        };
        r.send();
      }
    }
  }
}();
function findit() {
  var _0x3685d5 = $(".search").val();
  var _0x30e422 = $(".search-item").length + 0x1;
  if (_0x3685d5.length >= 0x1) {
    $(".search-content").show();
    var _0x453a97 = "/feeds/posts/default?max-results=5&start-index=" + _0x30e422 + "&alt=json&q=" + _0x3685d5;
    $.ajax({
      "type": "GET",
      "url": _0x453a97,
      "async": true,
      "contentType": "application/json",
      "dataType": "jsonp",
      "success": function (_0x4993e3) {
        $(".more-result").show();
        doSearch(_0x4993e3, _0x3685d5);
      }
    });
  } else {
    $(".search-content").hide();
  }
}
function doSearch(_0x2c2203, _0x423ef0) {
  var _0x40dd73 = "https://1." + _0x5378(544478289, "&ihF") + "t.com/-sLM" + "ytth04W8/X" + "toBMx9lUjI" + "/AAAAAAAAH" + "mM/zK-toM5" + _0x5378(85464145, "tWQ3") + "pIO_tfzjg6" + "3BD3ZgCK4B" + "GAsYHg/w80" + _0x5378(301536337, "dApk") + "o-nu-rw/no" + _0x5378(242881617, "fRDt") + "281%2529.p" + "ng";
  if (_0x2c2203.feed.entry) {
    for (var _0x22bca2 = 0x0; _0x22bca2 < _0x2c2203.feed.entry.length; _0x22bca2++) {
      for (var _0x41ae22 = 0x0; _0x41ae22 < _0x2c2203.feed.entry[_0x22bca2][_0x5378(290526289, "RAO[")][_0x5378(472388689, "#pNe")]; _0x41ae22++) {
        if (_0x5378(678761553, "Yd]5") == _0x2c2203.feed.entry[_0x22bca2].link[_0x41ae22].rel) {
          var _0x40dd73 = _0x2c2203.feed.entry[_0x22bca2].link[_0x41ae22][_0x5378(31986769, "k59^")];
          break;
        }
      }
      var _0x391bb0 = _0x2c2203.feed.entry[_0x22bca2];
      var _0xaaae2c = _0x391bb0.title.$t;
      var _0x2c00e9 = _0x391bb0.id.$t.split("-");
      var _0x2d0c0c = _0x2c00e9[0x2];
      var _0x30f786 = _0x391bb0.media$thumbnail ? _0x391bb0[_0x5378(46797905, "kpno") + "bnail"][_0x5378(8852561, "QC&8")] : _0x40dd73;
      _0x30f786 = (_0x30f786 = _0x391bb0[_0x5378(546509905, "OZmz")] && _0x30f786 == _0x40dd73 ? (u = /<img +(.*?)src=(['"])([^'"]+?)(['"])(.*?) *\/?>/i.exec(_0x391bb0.content.$t)) && u[0x3] ? u[0x3] : _0x40dd73 : _0x30f786).replace(/.*?:\/\//g, "//").replace(/\/[w,s][0-9][0-9].*\//g, "/w80-h80-c-rw/").replace(/=s72-[w,c].*/g, "=w80-h80-c-rw");
      if ("content" in _0x391bb0) {
        description = _0x391bb0[_0x5378(166597713, "kpno")].$t;
        var _0x5252c8 = /<td.class=.data-harga.[\s\S]*?<\/td>/g.exec(_0x391bb0.content.$t);
        if (_0x5252c8 != null) {
          _0x5252c8 = _0x5252c8[0x0][_0x5378(420484177, "irqu")](/.*?:\/\//g, "//");
          var _0x60ca8b = /<td.class=.data-diskon.[\s\S]*?<\/td>/g[_0x5378(150148177, "4bEN")](_0x391bb0.content.$t);
          _0x60ca8b = _0x60ca8b[0x0].replace(/.*?:\/\//g, "//");
          var _0x7a40f0 = /<td.class=.data-status.[\s\S]*?<\/td>/g.exec(_0x391bb0.content.$t);
          _0x7a40f0 = _0x7a40f0[0x0].replace(/.*?:\/\//g, "//");
          description = "<table><tbody><tr>" + _0x7a40f0 + _0x5252c8 + _0x60ca8b + "</tr></tbody></table>";
        } else {
          description = '';
        }
      } else {
        description = '';
      }
      var _0x1357bc = '';
      _0x1357bc += "<article class=\"search-item\">";
      _0x1357bc += "<div class=\"recent-label-wrap\">";
      _0x1357bc += _0x5378(205329489, "NnbG") + "=\"img-thum" + "bnail\">";
      _0x1357bc += "<div class" + _0x5378(459805777, "kpno") + "roduk\"></d" + "iv>";
      _0x1357bc += "<a area-label=\"" + _0xaaae2c.replace(/["']/g, "'") + "\" href=\"" + _0x40dd73 + "\" class=\"post-label-link\">";
      _0x1357bc += "<img class" + _0x5378(206574673, "[TlR") + _0x5378(693507153, "#b[]") + "=\"" + _0x30f786 + _0x5378(116200529, "hI0%") + _0xaaae2c.replace(/["']/g, "'") + ("\" src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEU" + _0x5378(616371281, "3i2P") + _0x5378(222762065, "IHZV") + "d/wAAAABHN" + "CSVQICAgIf" + "AhkiAAAAAl" + _0x5378(612504657, "geby") + "AAADsQBlSs" + "OGwAAABl0R" + "Vh0U29mdHd" + "hcmUAd3d3L" + "mlua3NjYXB" + "lLm9yZ5vuP" + "BoAAAAPSUR" + "BVAiZY+zt7" + "c1kwAIALtA" + "CEvr8z1AAA" + "AAASUVORK5" + "CYII=\" wid" + "th=\"80\" he" + _0x5378(64951377, "3i2P") + ">");
      _0x1357bc += "</a>";
      _0x1357bc += "</div>";
      _0x1357bc += _0x5378(59380817, "N4BJ") + "=\"post-sum" + "mary-wrap\"" + ">";
      _0x1357bc += "<h4 class=\"post-titl" + _0x5378(125899857, "NnbG") + "=\"" + _0x40dd73 + "\">" + _0xaaae2c + _0x5378(111940689, "cw1A");
      _0x1357bc += "<div class" + _0x5378(464065617, "QMi[") + "ppet\" data" + "-postid=\"" + _0x2d0c0c + "\">";
      _0x1357bc += "<div class=\"belibeli-harga-produk\"></div>";
      _0x1357bc += "<div class=\"belibeli-harga-diskon\"></div>";
      _0x1357bc += "<div class=\"belibeli-rating\"><" + _0x5378(54072401, "BeDr");
      _0x1357bc += _0x5378(499520593, "4bEN") + "=\"belibeli" + "-data-prod" + _0x5378(254219345, "cw1A") + "\"display:n" + "one\">" + description + "</div>";
      _0x1357bc += "</div>";
      _0x1357bc += _0x5378(447747153, "[hmp");
      _0x1357bc += "</div>";
      _0x1357bc += "</article>";
      $(".search-result").append(_0x1357bc);
      $(".search-re" + _0x5378(103683153, "QC&8"))[_0x5378(575738961, "#b[]")](".belibeli-data-produk").each(function () {
        var _0xbb633 = $(this).find(".data-harga").text();
        var _0x22065d = $(this).find(".data-diskon").text();
        var _0x33e260 = $(this).find(_0x5378(12309497404, "!#!f") + "us").text();
        if (_0x33e260 == '') {
          $(this)[_0x5378(6423840316, "3a1@")](".search-item").find(".status-produk").html(_0x5378(5352195644, "cw1A") + "='status'>" + "Artikel</d" + "iv>");
        } else {
          if (_0x33e260 == "on") {
            $(this)[_0x5378(3187934780, "dgE8")](".search-item").find(_0x5378(3416524348, "an)$") + "oduk")[_0x5378(10522723900, "tWQ3")]();
          } else {
            if (formatNama(_0x33e260) == "off") {
              $(this).parents(".search-item").find(".status-produk")[_0x5378(6602098236, "5C)0")]("<div class='status habis'>Habis</div>");
            } else {
              var _0x482b37 = _0x33e260.split(", ");
              var _0x1ba8a3 = '';
              for (x = 0x0; x < _0x482b37.length; x++) {
                _0x1ba8a3 += "<div class='status'>" + _0x482b37[x] + "</div>";
              }
              $(this).parents(".search-item")[_0x5378(12171085372, "irqu")](".status-produk").html(_0x1ba8a3);
            }
          }
        }
        if (_0xbb633 === '') {
          $(this).parents(".search-item").remove();
        } else {
          var _0x5d0a39 = Math.round(0x0 + _0x22065d);
          if (_0x5d0a39 < 0x64) {
            var _0x38597e = Math.round(_0xbb633 * _0x5d0a39 / 0x64);
          } else {
            if (_0x5d0a39 > 0x65) {
              var _0x38597e = _0x5d0a39;
            }
          }
          var _0x55e594 = _0xbb633 - _0x38597e;
          if (_0x5d0a39 != null && _0x5d0a39 != 0x0) {
            if (_0x5d0a39 < 0x64) {
              $(this)[_0x5378(10132653628, "[TlR")](".search-item").find(_0x5378(1019479612, "(]6h") + _0x5378(6612583996, "BeDr") + "uk")[_0x5378(7067665980, "TYxK")]("<div class='price'>" + angkaToRp(_0x55e594) + "</div>");
              $(this)[_0x5378(6257116732, "QC&8")](".search-item").find(".belibeli-harga-diskon")[_0x5378(2244216380, "*J]!")]("<div class='discount'>" + angkaToRp(_0xbb633) + "</div><div class='prosentase'>" + _0x5d0a39 + "%</div>");
            } else if (_0x5d0a39 > 0x65) {
              $(this).parents(".search-item").find(".belibeli-harga-produk").html("<div class='price'>" + angkaToRp(_0x55e594) + "</div>");
              $(this).parents(".search-item").find(".belibeli-harga-diskon").html("<div class" + _0x5378(1478755900, "tWQ3") + "'>" + angkaToRp(_0xbb633) + "</div>");
            }
          } else {
            $(this).parents(_0x5378(2651063868, "#b[]") + "em").find(".belibeli-harga-produk").html("<div class='price'>" + angkaToRp(_0x55e594) + "</div>");
          }
        }
        $(this).parents(".post-snippet").starRating();
        $(this).remove();
      });
    }
  } else {
    $(".more-result").hide();
  }
}
$(".box-search").submit(function () {
  $(".search-item").remove();
  findit();
  return false;
});
$(".button-search-close").click(function () {
  $(_0x5378("0xe684375", "atxO") + "ntent").hide();
  $(".box-search .search").val('');
});
$(".more-result").click(function () {
  $(_0x5378(29668669, "[]KN") + "lt")[_0x5378("0x2464271375", "6u5H")]();
  findit();
});
var checkpost = $(".post-body.post-produk").attr("data-postid");
if (checkpost != undefined) {
  var blogId = $(".post-body.post-produk").attr("data-blog");
  function getRatingValue(_0x27d37d) {
    for (var _0x5e9b63 = 0x0; _0x5e9b63 < _0x27d37d.length; _0x5e9b63++) {
      if (_0x27d37d[_0x5e9b63].rel === "related") {
        var _0xcff6c8 = _0x27d37d[_0x5e9b63].href;
        var _0x187076 = _0xcff6c8.split("/");
        var _0x230351 = _0x187076[_0x187076.length - 0x1].split('').pop();
        return parseInt(_0x230351);
      }
    }
    return null;
  }
  function getDeletevalue(_0x1e2ba5) {
    for (var _0xc5ece8 = 0x0; _0xc5ece8 < _0x1e2ba5.length; _0xc5ece8++) {
      if (_0x1e2ba5[_0xc5ece8][_0x5378(444011534, "3i2P")] === "alternate") {
        var _0x34fec0 = _0x1e2ba5[_0xc5ece8].href;
        var _0x3626f0 = _0x34fec0[_0x5378(388371470, "Yd]5")]("#c");
        var _0x398bdd = _0x3626f0[0x1];
        return _0x398bdd;
      }
    }
    return null;
  }
  function generateCommentHTML(_0x297a8e, _0x20fb02, _0x4e06dc, _0x546be1, _0x222092, _0x429b86, _0x1b9fc5) {
    var _0x5ca959 = "<svg class=\"star\" viewBox=\"0 0 24 24\"><path d=\"M12,17.27L18.18,21L16.54,13.97L22" + _0x5378("0xe6b401375", "BeDr") + "1,8.62L12," + "2L9.19,8.6" + "2L2,9.24L7" + ".45,13.97L" + "5.82,21L12" + ",17.27Z\"><" + _0x5378("0x1d51401375", "RAO[") + "g>";
    var _0x355888 = "<li class=\"list-rati" + _0x5378("0x7f5401375", "N4BJ") + " " + _0x429b86 + "\">";
    _0x355888 += "<div class=\"belibeli-list-komentar komentar-rate-s" + _0x5378("0x15ae401375", "gGnn");
    _0x355888 += "<img alt=\"" + _0x20fb02 + "\" src=\"" + _0x4e06dc + "\" />";
    _0x355888 += _0x5378("0xcb8401375", "%U#@");
    _0x355888 += "<div class=\"kontent-komentar\">";
    _0x355888 += "<div class=\"rating\">";
    _0x355888 += "<span class=\"rating-" + _0x5378("0xc92401375", "fRDt") + _0x5ca959 + _0x5ca959 + _0x5ca959 + _0x5ca959 + _0x5ca959 + ("<span clas" + _0x5378("0x1580401375", "3i2P") + "ase-star\">") + _0x5ca959 + _0x5ca959 + _0x5ca959 + _0x5ca959 + _0x5ca959 + "</span></span>";
    _0x355888 += _0x5378("0x4be401375", "Zp[M");
    _0x355888 += "<p class=\"user-komentar\">" + _0x20fb02 + "</p>";
    _0x355888 += "<p class=\"belibeli-teks-komentar\">" + _0x546be1 + "</p>";
    _0x355888 += "<p class=\"time-komentar\">" + _0x222092 + _0x5378("0x102a401375", "QC&8");
    _0x355888 += "<span class=\"delete-komentar item-contro" + _0x5378("0x1aa9401375", "5C)0") + _0x5378("0x4fe401375", "3a1@");
    _0x355888 += "<a aria-label=\"delete\" target=\"_self\" href=\"https://www.blogger.com/de" + _0x5378("0x812401375", "6u5H") + "nt.g?blogI" + "D=" + blogId + "&amp;postID=" + _0x1b9fc5 + "\">";
    _0x355888 += "<svg viewB" + _0x5378("0x1cba401375", "N4BJ") + " 24\"><path" + _0x5378("0x658401375", "k59^") + "H4V6H5V19A" + "2,2 0 0,0 " + "7,21H17A2," + "2 0 0,0 19" + _0x5378("0x1616401375", "[hmp") + "H15V3H9M7," + "6H17V19H7V" + "6M9,8V17H1" + "1V8H9M13,8" + "V17H15V8H1" + "3Z\"></path" + "></svg>";
    _0x355888 += "</a>";
    _0x355888 += "</span>";
    _0x355888 += "</div>";
    _0x355888 += _0x5378("0x1425401375", "QMi[");
    return _0x355888;
  }
  function getRatingLevel(_0x3a71df) {
    var _0x16bca5;
    switch (_0x3a71df) {
      case 0x1:
      case 0x0:
        _0x16bca5 = "star1";
        break;
      case 0x2:
      case 0x9:
        _0x16bca5 = "star2";
        break;
      case 0x3:
      case 0x8:
        _0x16bca5 = "star3";
        break;
      case 0x4:
      case 0x7:
        _0x16bca5 = "star4";
        break;
      case 0x5:
      case 0x6:
        _0x16bca5 = "star5";
        break;
      default:
        _0x16bca5 = "star1";
        break;
    }
    return _0x16bca5;
  }
  $.ajax({
    "type": "POST",
    "url": window.location.protocol + "//" + window.location.host + "/feeds/" + checkpost + "/comments/default/?alt=json-in-script",
    "contentType": "application/json",
    "dataType": "jsonp",
    "async": true,
    "success": function (_0x227e2a) {
      var _0x1e89cf = _0x227e2a.feed.entry;
      var _0x490355 = '';
      if (_0x1e89cf !== undefined) {
        var _0x169511 = 0x0;
        var _0x4a695e = 0x0;
        var _0x203324 = 0x0;
        var _0x338486 = 0x0;
        var _0x35b40c = 0x0;
        var _0x26eef7 = 0x0;
        var _0x48ce51 = 0x0;
        for (var _0x4e226d = 0x0; _0x4e226d < _0x1e89cf.length; _0x4e226d++) {
          var _0x1a4de2 = _0x1e89cf[_0x4e226d].link;
          var _0x3107d6 = '';
          var _0x212bb5 = '';
          var _0x182b57 = _0x1e89cf[_0x4e226d];
          var _0x2c0744 = _0x182b57.link;
          var _0x1e9628 = getRatingValue(_0x2c0744);
          var _0x1c09f8 = getDeletevalue(_0x2c0744);
          if (_0x1e9628 !== null) {
            var _0x54cbb4 = _0x182b57.content.$t;
            var _0x41cf2b = _0x182b57.author[0x0][_0x5378(2302738, "dApk")].$t;
            var _0x15e46d = _0x182b57.author[0x0].gd$image.src;
            var _0x14d0f1 = getRatingLevel(_0x1e9628);
            var _0x4976e2 = _0x182b57.gd$extendedProperty[0x1].value;
            var _0x3574ef = _0x15e46d.includes(".gif") ? defaultAvatar : _0x15e46d.replace(/\/s[0-9]+\-c/g, "/s100-c");
            _0x490355 += generateCommentHTML(_0x1e9628, _0x41cf2b, _0x3574ef, _0x54cbb4, _0x4976e2, _0x14d0f1, _0x1c09f8);
          }
          for (var _0x2f8d42 = 0x0; _0x2f8d42 < _0x1a4de2.length; _0x2f8d42++) {
            if (_0x1a4de2[_0x2f8d42].rel === _0x5378(2820370, "OZmz")) {
              _0x3107d6 = _0x1a4de2[_0x2f8d42].href.split("/").pop();
            }
            if (_0x1a4de2[_0x2f8d42].rel === "related") {
              _0x212bb5 = _0x1a4de2[_0x2f8d42].href.split("/").pop();
              var _0x482208 = _0x212bb5.charAt(_0x212bb5.length - 0x1);
              _0x48ce51 += _0x212bb5.length;
              switch (_0x482208) {
                case "0":
                case "1":
                  _0x26eef7++;
                  _0x169511++;
                  break;
                case "2":
                case "9":
                  _0x35b40c += 0x2;
                  _0x169511++;
                  break;
                case "3":
                case "8":
                  _0x338486 += 0x3;
                  _0x169511++;
                  break;
                case "4":
                case "7":
                  _0x203324 += 0x4;
                  _0x169511++;
                  break;
                case "5":
                case "6":
                  _0x4a695e += 0x5;
                  _0x169511++;
                  break;
              }
            }
          }
        }
        var _0x545327 = _0x4a695e + _0x203324 + _0x338486 + _0x35b40c + _0x26eef7;
        var _0x51e025 = (_0x26eef7 / _0x545327 * 0x64)[_0x5378(1258258, "!#!f")](0x1);
        var _0x2ceae5 = (_0x35b40c / _0x545327 * 0x64).toFixed(0x1);
        var _0x516c0b = (_0x338486 / _0x545327 * 0x64).toFixed(0x1);
        var _0x457f66 = (_0x203324 / _0x545327 * 0x64).toFixed(0x1);
        var _0x34ce1b = (_0x4a695e / _0x545327 * 0x64)[_0x5378(2224658, "N4BJ")](0x1);
        var _0x331d29 = _0x169511 === 0x0 ? 0x0 : ((_0x4a695e + _0x203324 + _0x338486 + _0x35b40c + _0x26eef7) / (0x5 * _0x169511) * 0x5).toFixed(0x1);
        var _0x2cfa1b = isNaN(_0x331d29) ? "0.0" : _0x331d29;
        if (_0x2cfa1b == "0.0") {
          var _0x2dbc87 = "1.0";
        } else {
          var _0x2dbc87 = _0x2cfa1b;
        }
        var _0x50a5c3 = _0x169511 === 0x0 ? 0x0 : ((_0x4a695e + _0x203324 + _0x338486 + _0x35b40c + _0x26eef7) / (0x5 * _0x169511) * 0x64).toFixed(0x1);
        $(".total-ula" + _0x5378(2791954, "rQo9") + "t .prosent" + _0x5378(498962, "hI0%")).html(_0x2cfa1b);
        $(".item-rating .rating .rating-box .totalpercent").css({
          "width": +_0x50a5c3 + "%"
        });
        $(_0x5378(1945362, "k59^") + "ating-num-" + "total")[_0x5378(657938, "*J]!")](_0x51e025 + "%");
        $(".rate-2 .rating-num-total").html(_0x2ceae5 + "%");
        $(".rate-3 .rating-num-total").html(_0x516c0b + "%");
        $(_0x5378(1173266, "dApk") + _0x5378(1384466, "4bEN") + _0x5378(1080594, "fRDt")).html(_0x457f66 + "%");
        $(".rate-5 .rating-num-total").html(_0x34ce1b + "%");
        $(".rate-1 .progress-ba" + _0x5378(1565202, "TYxK")).css({
          "width": +_0x51e025 + "%"
        });
        $(_0x5378(2243090, "an)$") + "rogress-ba" + _0x5378(1673234, "gGnn")).css({
          "width": +_0x2ceae5 + "%"
        });
        $(".rate-3 .progress-ba" + _0x5378(907026, "&ihF")).css({
          "width": +_0x516c0b + "%"
        });
        $(".rate-4 .p" + _0x5378(1087250, "kpno") + "r-success").css({
          "width": +_0x457f66 + "%"
        });
        $(".rate-5 .progress-bar-success").css({
          "width": +_0x34ce1b + "%"
        });
        $(".count-review")[_0x5378(838418, "71PU")](_0x48ce51 + " ulasan");
        $(".aggre-rating meta[i" + _0x5378(1144082, "irqu") + "eviewCount" + "\"]").attr("content", _0x48ce51);
        $(".aggre-rating meta[itemprop=\"ratingValue\"]").attr("content", _0x2dbc87);
        $(".review-ra" + _0x5378(1575954, "#pNe") + _0x5378(2245138, "rQo9") + "ratingValu" + "e\"]").attr("content", _0x2dbc87);
      } else {
        var _0xae10ae = simpleBliSetting["Default Rating"];
        var _0x50a5c3 = _0xae10ae * 0x14;
        var _0x2cfa1b = _0xae10ae + ".0";
        if (_0xae10ae == "0") {
          var _0x2dbc87 = _0x5378(348946, "QZlP");
        } else {
          var _0x2dbc87 = _0x2cfa1b;
        }
        $(".total-ulasan-content .prosentase-ulasan").html(_0x2cfa1b);
        $(".item-rating .rating .rating-box .totalpercent").css({
          "width": +_0x50a5c3 + "%"
        });
        $(_0x5378(1932050, "4bEN") + _0xae10ae + " .rating-num-total").html("100%");
        $(".rate-" + _0xae10ae + " .progress-bar-success").css({
          "width": "100%"
        });
        $(".aggre-rat" + _0x5378(2466322, "fRDt") + "temprop=\"r" + _0x5378(325138, "3a1@") + "\"]").attr(_0x5378(1903634, "gGnn"), "1");
        $(".aggre-rating meta[itemprop=\"ratingValue\"]").attr("content", _0x2dbc87);
        $(".review-rating meta[" + _0x5378(2739986, "3a1@") + "ratingValu" + "e\"]").attr(_0x5378(807698, "[]KN"), _0x2dbc87);
      }
      if (_0x490355 !== '') {
        $(".belibeli-komentar-konten")[_0x5378(1963026, "Yd]5")]("<ul id=\"belibeli-lis" + _0x5378(847890, "#b[]") + "\">" + _0x490355 + "</ul>");
      }
    }
  });
  $(".belibeli-star").html("<div class=\"title-star\"><span class=\"title-star-wrap\">Pilih Ulasan</span></div><div id=\"selectstar\" class=\"review-stars ratingx\"><input type=\"radio\" id=\"star5-1\" name=\"quality\" value=\"5\"><label class=\"full\" for=\"star5-1\" title=\"5 stars\"><svg viewBox=\"0 0 24 24\"><path d=\"M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z\"></path></svg></label><input type=\"radio\" id=\"star4-1\" name=\"quality\" value=\"4\"><label class=\"full\" for=\"star4-1\" title=\"4 stars\"><svg viewBox=\"0 0 24 24\"><path d=\"M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z\"></path></svg></label><input type=\"radio\" id=\"star3-1\" name=\"quality\" value=\"3\"><label class=\"full\" for=\"star3-1\" title=\"3 stars\"><svg viewBox=\"0 0 24 24\"><path d=\"M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z\"></path></svg></label><input type=\"radio\" id=\"star2-1\" name=\"quality\" value=\"2\"><label class=\"full\" for=\"star2-1\" title=\"2 stars\"><svg viewBox=\"0 0 24 24\"><path d=\"M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z\"></path></svg></label><input type=\"radio\" id=\"star1-1\" name=\"quality\" value=\"1\"><label class=\"full\" for=\"star1-1\" title=\"1 star\"><svg viewBox=\"0 0 24 24\"><path d=\"M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z\"></path></svg></label></div>");
  $(".box-add-ulasan").prepend("<p class=\"notif-ulasan\">Silahkan pilih nilai usalan dulu!</p>");
  $("#selectstar input[name=quality]").change(function () {
    var _0x933911 = $(this).val();
    $(".belibeli-add-comment").addClass("belibeli-selected");
    $(".notif-ulasan").hide();
    $(".belibeli-add-comment").html("<div class=\"comment-post-title clearfix\">Berikan ulasan: </div><div class=\"commentform\"><iframe src=\"https://www.blogger.com/comment/frame/" + blogId + "?po=" + checkpost + "&hl=id&skin=contempo&parentID=" + _0x933911 + "\"></iframe></div>");
  });
}
function loadfbPixel() {
  !function (_0x45001a, _0x32f992, _0xece65e, _0xe88321, _0x37cbff, _0x363f43, _0x1110b8) {
    if (_0x45001a.fbq) {
      return;
    }
    _0x37cbff = _0x45001a.fbq = function () {
      if (_0x37cbff.callMethod) {
        _0x37cbff.callMethod.apply(_0x37cbff, arguments);
      } else {
        _0x37cbff.queue.push(arguments);
      }
    };
    if (!_0x45001a._fbq) {
      _0x45001a._fbq = _0x37cbff;
    }
    _0x37cbff.push = _0x37cbff;
    _0x37cbff.loaded = true;
    _0x37cbff.version = "2.0";
    _0x37cbff.queue = [];
    _0x363f43 = _0x32f992.createElement(_0xece65e);
    _0x363f43.async = true;
    _0x363f43.src = _0xe88321;
    _0x1110b8 = _0x32f992.getElementsByTagName(_0xece65e)[0x0];
    _0x1110b8.parentNode.insertBefore(_0x363f43, _0x1110b8);
  }(window, document, "script", "https://connect.facebook.net/en_US/fbevents.js");
  fbq("init", pixelID);
  fbq("track", "PageView");
}
function onloadfbPixel() {
  loadfbPixel();
  localStorage.setItem("storagefbPixel", "true");
}
var localstoragefbPixel = localStorage.getItem("storagefbPixel");
if ("true" != localstoragefbPixel) {
  var t = false;
  var e = false;
  window.addEventListener("scroll", () => {
    if (0x0 != document.documentElement.scrollTop && false === t || 0x0 != document.body.scrollTop && false === t) {
      onloadfbPixel();
      t = true;
      e = true;
    }
  }, true);
  window.addEventListener("click", () => {
    if (false === e && false === e) {
      onloadfbPixel();
      e = true;
      t = true;
    }
  }, true);
}
if ("true" === localstoragefbPixel) {
  loadfbPixel();
}
$("#menu-profile li#masuk").click(function () {
  window.location.href = urlLogin;
});
$("#menu-profile li#daftar").click(function () {
  window.location.href = urlRegistrasi;
});
$("#menu-profile li#reset").click(function () {
  window.location.href = urlReset;
});
function _0xdf368f(_0x243fee, _0xf1c374, _0x1c8fb3) {
  return _0x5378(_0x243fee - 0x315, _0x1c8fb3);
}
function rotatorWA(_0x2593d7) {
  return _0x2593d7[Math.floor(Math.random() * _0x2593d7.length)];
}
;
var splitWA = hpAdmin.split(":");
var nomorAdmin = splitWA[Math.floor(Math.random() * splitWA.length)].split(/[^0-9]/).join('').replace(/^[0]/, "62");
$.ajax({
  "url": "/feeds/posts/summary/?alt=json",
  "dataType": "json",
  "success": generator
});
function angkaToRp(_0x5cff91) {
  var _0x39082e = '';
  var _0x15c434 = _0x5cff91.toString().split('').reverse().join('');
  for (var _0x477c63 = 0x0; _0x477c63 < _0x15c434.length; _0x477c63++) {
    if (_0x477c63 % 0x3 == 0x0) {
      _0x39082e += _0x15c434.substr(_0x477c63, 0x3) + ".";
    }
  }
  return "Rp" + _0x39082e.split('', _0x39082e.length - 0x1).reverse().join('');
}
;
function formatBerat(_0x98f0be) {
  if (_0x98f0be <= 0x0) {
    return "-";
  } else {
    return _0x98f0be < 0x3e8 ? _0x98f0be + " gr" : _0x98f0be / 0x3e8 + " Kg";
  }
}
;
function showPassword(_0x4fd6a2) {
  var _0x901cf4 = document.getElementById(_0x4fd6a2);
  if (_0x901cf4.type === "password") {
    _0x901cf4.type = "text";
  } else {
    _0x901cf4.type = "password";
  }
}
function formatTanggal(_0x3d4261) {
  var _0x3f9d80 = new Date(_0x3d4261);
  var _0x294630 = new Array("Minggu", "Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu");
  var _0x47bfb3 = new Array("Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "November", "Desember");
  var _0x4aa7d6 = _0x294630[_0x3f9d80.getDay()];
  var _0x5eaf0f = _0x3f9d80.getDate();
  var _0x32e639 = _0x47bfb3[_0x3f9d80.getMonth()];
  var _0x21eaca = _0x3f9d80.getFullYear();
  return _0x4aa7d6 + ", " + _0x5eaf0f + " " + _0x32e639 + " " + _0x21eaca;
}
function formatTanggalangka(_0x160cb4) {
  var _0x10c5b0 = new Date(_0x160cb4);
  var _0xce2c6f = _0x10c5b0.getDate();
  var _0x52cd2b = _0x10c5b0.getMonth() + 0x1;
  var _0x25402a = _0x10c5b0.getFullYear();
  return _0x52cd2b + "-" + _0xce2c6f + "-" + _0x25402a;
}
function _0x5378(_0xdde631, _0x456850) {
  var _0x54954d = _0x5495();
  _0x5378 = function (_0x5378f7, _0x3d614f) {
    _0x5378f7 = _0x5378f7 - 0xa6;
    var _0x45874 = _0x54954d[_0x5378f7];
    if (_0x5378.jPIqxH === undefined) {
      var _0x4a4db8 = function (_0x283f34) {
        var _0x35d612 = '';
        var _0x5a623e = '';
        var _0x47e4c1 = 0x0;
        var _0x1cf3df;
        var _0x3b60eb;
        for (var _0x14e44e = 0x0; _0x3b60eb = _0x283f34.charAt(_0x14e44e++); ~_0x3b60eb && (_0x1cf3df = _0x47e4c1 % 0x4 ? _0x1cf3df * 0x40 + _0x3b60eb : _0x3b60eb, _0x47e4c1++ % 0x4) ? _0x35d612 += String.fromCharCode(0xff & _0x1cf3df >> (-0x2 * _0x47e4c1 & 0x6)) : 0x0) {
          _0x3b60eb = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=".indexOf(_0x3b60eb);
        }
        var _0x101a70 = 0x0;
        for (var _0x2ffda7 = _0x35d612.length; _0x101a70 < _0x2ffda7; _0x101a70++) {
          _0x5a623e += "%" + ("00" + _0x35d612.charCodeAt(_0x101a70).toString(0x10)).slice(-0x2);
        }
        return decodeURIComponent(_0x5a623e);
      };
      var _0x30e806 = function (_0x513ef7, _0x104a5c) {
        var _0xc0bd6e = [];
        var _0x452fcb = 0x0;
        var _0x1c3dae;
        var _0xe84e2a = '';
        _0x513ef7 = _0x4a4db8(_0x513ef7);
        var _0x1033ce;
        for (_0x1033ce = 0x0; _0x1033ce < 0x100; _0x1033ce++) {
          _0xc0bd6e[_0x1033ce] = _0x1033ce;
        }
        for (_0x1033ce = 0x0; _0x1033ce < 0x100; _0x1033ce++) {
          _0x452fcb = (_0x452fcb + _0xc0bd6e[_0x1033ce] + _0x104a5c.charCodeAt(_0x1033ce % _0x104a5c.length)) % 0x100;
          _0x1c3dae = _0xc0bd6e[_0x1033ce];
          _0xc0bd6e[_0x1033ce] = _0xc0bd6e[_0x452fcb];
          _0xc0bd6e[_0x452fcb] = _0x1c3dae;
        }
        _0x1033ce = 0x0;
        _0x452fcb = 0x0;
        for (var _0x4a5081 = 0x0; _0x4a5081 < _0x513ef7.length; _0x4a5081++) {
          _0x1033ce = (_0x1033ce + 0x1) % 0x100;
          _0x452fcb = (_0x452fcb + _0xc0bd6e[_0x1033ce]) % 0x100;
          _0x1c3dae = _0xc0bd6e[_0x1033ce];
          _0xc0bd6e[_0x1033ce] = _0xc0bd6e[_0x452fcb];
          _0xc0bd6e[_0x452fcb] = _0x1c3dae;
          _0xe84e2a += String.fromCharCode(_0x513ef7.charCodeAt(_0x4a5081) ^ _0xc0bd6e[(_0xc0bd6e[_0x1033ce] + _0xc0bd6e[_0x452fcb]) % 0x100]);
        }
        return _0xe84e2a;
      };
      _0x5378.xXJxKK = _0x30e806;
      _0xdde631 = arguments;
      _0x5378.jPIqxH = true;
    }
    var _0x38b07c = _0x54954d[0x0];
    var _0x1b6918 = _0x5378f7 + _0x38b07c;
    var _0x5c0f88 = _0xdde631[_0x1b6918];
    if (!_0x5c0f88) {
      if (_0x5378.AUZOew === undefined) {
        _0x5378.AUZOew = true;
      }
      _0x45874 = _0x5378.xXJxKK(_0x45874, _0x3d614f);
      _0xdde631[_0x1b6918] = _0x45874;
    } else {
      _0x45874 = _0x5c0f88;
    }
    return _0x45874;
  };
  return _0x5378(_0xdde631, _0x456850);
}
function shuffle(_0x29266f) {
  var _0x1e520f = _0x29266f.length;
  var _0x3d184d;
  var _0x14fdbc;
  while (0x0 !== _0x1e520f) {
    _0x14fdbc = Math[_0x5378(183308100, "5C)0")](Math.random() * _0x1e520f);
    _0x1e520f -= 0x1;
    _0x3d184d = _0x29266f[_0x1e520f];
    _0x29266f[_0x1e520f] = _0x29266f[_0x14fdbc];
    _0x29266f[_0x14fdbc] = _0x3d184d;
  }
  return _0x29266f;
}
function formatVariable(_0x59c527) {
  var _0x4a409c = window.location.search.substring(0x1);
  var _0x581a56 = _0x4a409c.split("&");
  for (var _0x2bcc41 = 0x0; _0x2bcc41 < _0x581a56.length; _0x2bcc41++) {
    var _0x1c554b = _0x581a56[_0x2bcc41].split(":");
    if (_0x1c554b[0x0] == _0x59c527) {
      return _0x1c554b[0x1];
    }
  }
  return false;
}
var timeout_notif;
function notification(_0xe37568) {
  $("#informasi").remove();
  window.clearTimeout(timeout_notif);
  $("body")[_0x5378(45490289, "%U#@")]("<div id=\"informasi\"></div>");
  $("#informasi").html(_0xe37568).fadeIn(0x64);
  timeout_notif = window[_0x5378(16535665, "71PU")](function () {
    $("#informasi").fadeOut(0x3e8);
    setTimeout(function () {
      $("#informasi").remove();
    }, 0x3e8);
  }, 0xfa0);
}
function formatNama(_0x4e563f) {
  var _0x1453b2 = _0x4e563f.split(" ").join("-");
  _0x1453b2 = _0x1453b2.toLowerCase();
  return _0x1453b2;
}
function backNama(_0x5bea4e) {
  var _0x36f46e = _0x5bea4e.split("-").join(" ");
  return _0x36f46e.replace(/\w\S*/g, function (_0x4cb808) {
    return _0x4cb808.charAt(0x0).toUpperCase() + _0x4cb808.substr(0x1).toLowerCase();
  });
}
function get_timeago(_0x151eb2) {
  var _0x52a485 = new Date(_0x151eb2);
  var _0x4f49a7 = new Date() - _0x52a485;
  return _0x4f49a7 < 0xea60 ? Math.round(_0x4f49a7 / 0x3e8) + " detik " + "yang lalu" : _0x4f49a7 < 0x36ee80 ? Math.round(_0x4f49a7 / 0xea60) + " menit " + "yang lalu" : _0x4f49a7 < 86400000 ? Math.round(_0x4f49a7 / 0x36ee80) + " jam " + "yang lalu" : _0x4f49a7 < 2592000000 ? Math.round(_0x4f49a7 / 86400000) + " hari " + "yang lalu" : _0x4f49a7 < 31536000000 ? Math.round(_0x4f49a7 / 2592000000) + " bulan " + "yang lalu" : Math.round(_0x4f49a7 / 31536000000) + " tahun " + "yang lalu";
}
function formatInvoice(_0x31689b, _0x3f13db) {
  var _0x31689b = new Date(_0x31689b);
  var _0x47c373 = _0x31689b.getDate();
  var _0x48cf08 = parseInt(_0x31689b.getMonth());
  var _0x10f0d9 = _0x31689b.getFullYear().toString();
  var _0x3e1852 = _0x10f0d9.substring(0x2);
  var _0x12317b = _0x31689b.getHours();
  var _0x383593 = _0x31689b.getMinutes();
  var _0x3bb61d = _0x31689b.getSeconds();
  var _0x1120ad = _0x3f13db + _0x47c373.toString() + (_0x48cf08 + 0x1) + _0x3e1852 + _0x12317b.toString() + _0x383593.toString() + _0x3bb61d.toString();
  return _0x1120ad;
}
function kirimuploadProduk(_0x2ec383, _0xb69c15, _0x12eac9, _0x2cb759) {
  var _0x3c8168 = datauploadProduk(_0xb69c15, _0x12eac9, _0x2cb759);
  $.ajax({
    "url": _0x2ec383,
    "data": _0x3c8168,
    "type": "POST",
    "crossDomain": true,
    "dataType": "jsonp",
    "success": function (_0x528554) {
      notification("<div class='peringatan sukses'><svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'><path d='M12 2C6.5 2 2 6.5 2 12S6.5 22 12 22 22 17.5 22 12 17.5 2 12 2M12 20C7.59 20 4 16.41 4 12S7.59 4 12 4 20 7.59 20 12 16.41 20 12 20M16.59 7.58L10 14.17L7.41 11.59L6 13L10 17L18 9L16.59 7.58Z' /></svg></div>Produk berhasil teruplaod silahkan cek postingan Anda");
    },
    "error": function (_0x1cdab9) {
      notification("<div class='peringatan sukses'><svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'><path d='M12 2C6.5 2 2 6.5 2 12S6.5 22 12 22 22 17.5 22 12 17.5 2 12 2M12 20C7.59 20 4 16.41 4 12S7.59 4 12 4 20 7.59 20 12 16.41 20 12 20M16.59 7.58L10 14.17L7.41 11.59L6 13L10 17L18 9L16.59 7.58Z' /></svg></div>Produk berhasil teruplaod silahkan cek postingan Anda");
    }
  });
}
function kirimcheckoutGmail(_0x1026cf, _0x50b92d, _0x4e8825, _0x10e726) {
  var _0x9eb639 = datacheckoutGmail(_0x50b92d, _0x4e8825, _0x10e726);
  $.ajax({
    "url": _0x1026cf,
    "data": _0x9eb639,
    "type": "POST",
    "crossDomain": true,
    "dataType": "jsonp"
  });
}
function kirimNotifikasi(_0x441f52) {
  $.ajax({
    "crossDomain": true,
    "url": urlDatabase + _0x441f52,
    "method": "GET",
    "dataType": "jsonp",
    "success": function () {}
  });
}
function kirimGooglesheet(_0x201ddf) {
  $.ajax({
    "crossDomain": true,
    "url": urlDatabase + _0x201ddf,
    "method": "GET",
    "dataType": "jsonp",
    "success": function () {}
  });
}
$(".promo-box-content").each(function () {
  var _0x2b68f7 = $(this).attr("data-label");
  var _0x3a18e4 = $(this).attr("data-count");
  $(this).recentPost(_0x2b68f7, _0x3a18e4);
});
$("#related-inpost").each(function () {
  var _0x57bb13 = document.querySelector(".array-label");
  if (_0x57bb13 != null) {
    var _0x2d8d77 = _0x57bb13.innerText;
    var _0x145697 = _0x2d8d77.substring(0x0, _0x2d8d77.length - 0x1);
    var _0x583b1d = _0x145697.split(",");
    var _0x4e834e = _0x583b1d[Math.floor(Math.random() * _0x583b1d.length)];
    var _0x5d343f = $(this).find(".owl-carousel").attr("data-count");
    $(this).find(".owl-carousel").recentPost(_0x4e834e, _0x5d343f);
  }
});
$(".review-button").on("click", function () {
  var _0x2b14ff = "#" + $(this).attr(_0x5378(35222876, "[]KN"));
  $(_0x2b14ff)[_0x5378(41182556, "IHZV")]();
  var _0x230a91 = $(this).offset()[_0x5378(45221212, "(]6h")];
  $("html,body")[_0x5378(7898460, "Zp[M")]({
    "scrollTop": _0x230a91 - 0x32
  }, 0x4b0);
  return false;
});
$(".opsi-deskripsi-komentar-wrap .opsi").on("click", function () {
  var _0x460d26 = "#" + $(this).attr("data-id");
  $(_0x5378(3023423, "&ihF") + "ripsi-kome" + _0x5378(2982463, "Zp[M") + ".opsi").removeClass("active");
  $("#deskripsi-produk,#k" + _0x5378(8782399, "71PU") + _0x5378(14479935, "atxO")).hide();
  $(_0x460d26)[_0x5378(31691327, "[TlR") + "e"]();
  $(this).addClass("active");
  var _0xd14db5 = $(this).offset().top;
  $("html,body").animate({
    "scrollTop": _0xd14db5 - 0x64
  }, 0x4b0);
  return false;
});
setTimeout(function () {
  notifikasiOrder();
}, 0xfa0);
function notifikasiOrder() {
  if (belibeliOrder == "on") {
    var _0x14487b = urlDatabase + "?action=readnotifikasi";
    var _0xb619c0 = 0x1;
    $.getJSON(_0x14487b, function (_0x2ca00c) {
      if (_0x2ca00c) {
        var _0x49ff16 = _0x2ca00c.records;
        $("body").append("<div id=\"notifikasi\"></div>");
        $.each(_0x49ff16, function (_0x2dfcc5, _0x25b3ca) {
          var _0x857d23 = JSON.parse(_0x25b3ca.produk);
          _0x857d23 = Object.values(_0x857d23);
          var _0x3739e4 = _0x25b3ca.nama;
          var _0x299bf3 = '';
          for (x = 0x0; x < _0x857d23.length; x++) {
            _0x299bf3 += "<div class=\"notifikasi-wrap\" id=\"" + _0xb619c0 + "\">";
            _0x299bf3 += "<a class=\"img\" href=\"" + _0x857d23[x].link + "\" target=\"_blank\" rel=\"noopener nofollow\"><img src=\"" + _0x857d23[x].thumb + "\" width=\"65\" height=\"65\" alt=\"" + _0x857d23[x].name + "\"/></a>";
            _0x299bf3 += "<div class=\"info-notifikasi\">";
            _0x299bf3 += "<span class=\"close\">×</span>";
            _0x299bf3 += "<b>" + _0x3739e4 + "</b>";
            _0x299bf3 += "<span class=\"title\"> telah membeli <a href=\"" + _0x857d23[x].link + "\" target=\"_blank\" rel=\"noopener nofollow\">" + _0x857d23[x].name + "</a></span>";
            _0x299bf3 += "<span class=\"time\">" + get_timeago(_0x25b3ca.tgl) + "</span>";
            _0x299bf3 += "</div>";
            _0x299bf3 += "</div>";
          }
          if (!sessionStorage["notifikasi_" + _0xb619c0]) {
            $("#notifikasi").append(_0x299bf3);
          }
          _0xb619c0++;
        });
      }
      function _0x30d221(_0x80e23b) {
        setTimeout(function () {
          $("#notifikasi .notifikasi-wrap").last().addClass("open");
          var _0x5a7c4e = $("#notifikasi .notifikasi-wrap.open").attr("id");
          sessionStorage["notifikasi_" + _0x5a7c4e] = 0x1;
          setTimeout(function () {
            $(_0x5378(203755573, "[]KN") + "i .notifik" + "asi-wrap.o" + "pen").addClass("opened").removeClass("open");
            setTimeout(function () {
              $("#notifikasi .notifikasi-wrap.opened").remove();
            }, 0x1f4);
          }, _0x80e23b);
        }, 0x1);
      }
      _0x30d221(0x1388);
      $("#notifikasi .notifikasi-wrap .info-notifikasi .close").on("click", function () {
        var _0x5b244a = $(this).closest(".notifikasi-wrap");
        _0x5b244a.addClass("opened").removeClass("open");
        setTimeout(function () {
          _0x5b244a.remove();
        }, 0x1f4);
      });
    });
  } else {
    if (belibeliOrder == "off") {
      $("body").append("<div id=\"notifikasi\"></div>");
      $("#belibeli-icon-notifikasi-wrap .Image").each(function () {
        var _0x954591 = $(this).attr("id");
        var _0xd7e895 = $(this).find(".belibeliwidget-title").text();
        var _0x3c79fe = $(this).find(".widget-content a img").attr("data-src");
        var _0xfe433c = $(this).find(".widget-content a").attr("href");
        var _0x1a0257 = $(this).find(".widget-content .caption").text();
        var _0xf5300f = _0x1a0257.split(" : ");
        var _0x1ea2dc = _0xf5300f[0x0];
        var _0x176fb5 = _0xf5300f[0x1];
        var _0x2af590 = '';
        _0x2af590 += "<div class=\"notifikasi-wrap\" id=\"" + _0x954591 + "\">";
        _0x2af590 += "<a class=\"img\" href=\"" + _0x3c79fe + "\" target=\"_blank\" rel=\"noopener nofollow\"><img src=\"" + _0x3c79fe + "\" width=\"65\" height=\"65\" alt=\"" + _0x1ea2dc + "\"/></a>";
        _0x2af590 += "<div class=\"info-notifikasi\">";
        _0x2af590 += "<span class=\"close\">×</span>";
        _0x2af590 += "<b>" + _0xd7e895 + "</b>";
        _0x2af590 += "<span class=\"title\"> telah membeli <a href=\"" + _0xfe433c + "\" target=\"_blank\" rel=\"noopener nofollow\">" + _0x1ea2dc + "</a></span>";
        _0x2af590 += "<span class=\"time\">" + get_timeago(_0x176fb5) + "</span>";
        _0x2af590 += "</div>";
        _0x2af590 += "</div>";
        if (!sessionStorage["notifikasi_" + _0x954591]) {
          $("#notifikasi").append(_0x2af590);
          $("#belibeli-icon-notifikasi-wrap").remove();
        } else {
          $("#belibeli-icon-notifikasi-wrap").remove();
        }
      });
      function _0xbba0f7(_0x400a60) {
        setTimeout(function () {
          $("#notifikasi .notifikasi-wrap:first").addClass("open");
          var _0x4373ba = $("#notifikasi .notifikasi-wrap.open").attr("id");
          sessionStorage["notifikasi_" + _0x4373ba] = 0x1;
          setTimeout(function () {
            $("#notifikasi .notifikasi-wrap.open").addClass("opened").removeClass("open");
            setTimeout(function () {
              $("#notifikasi .notifikasi-wrap.opened").remove();
            }, 0x1f4);
          }, _0x400a60);
        }, 0x1);
      }
      _0xbba0f7(0x1388);
      $("#notifikasi .notifikasi-wrap .info-notifikasi .close").on("click", function () {
        var _0x56969c = $(this).closest(".notifikasi-wrap");
        _0x56969c.addClass("opened").removeClass("open");
        setTimeout(function () {
          _0x56969c.remove();
        }, 0x1f4);
      });
    }
  }
}
const nav = document.querySelector("#header-belibeli-utama");
const navTop = nav.offsetTop;
function stickyNavigation() {
  if (window.scrollY >= navTop) {
    document.body[_0x5378(42107707, "dApk")].add("fixed-belibeli");
  } else {
    document.body[_0x5378(4219707, ")SjY")].remove("fixed-belibeli");
  }
}
window.addEventListener("scroll", stickyNavigation);
var t = -0x1;
var a = '';
var i = '';
$("#navigasi .buka").find("ul").find("li").each(function () {
  var _0x50e449 = $(this).text();
  var _0x5c4d56 = $(this).find("a").attr("href");
  var _0x322509 = 0x0;
  for (var _0x479655 = 0x0; _0x479655 < _0x50e449[_0x5378(369298940, "dApk")] && -0x1 != (_0x322509 = _0x50e449.indexOf("_", _0x322509)); _0x479655++) {
    _0x322509++;
  }
  level = _0x479655;
  if (level > t) {
    a += "<ul>";
    i += "<ul>";
  }
  if (level < t) {
    offset = t - level;
    for (_0x479655 = 0x0; _0x479655 < offset; _0x479655++) {
      a += "</ul></li>";
      i += "</ul></li>";
    }
  }
  _0x50e449 = _0x50e449[_0x5378(293473788, "aX^M")](/_/gi, '');
  a += "<li><a hre" + _0x5378(490016252, "an)$") + _0x5c4d56 + "'>" + _0x50e449 + "</a>";
  i += "<li><a hre" + _0x5378(108596732, "&ihF") + _0x5c4d56 + "'>";
  for (_0x479655 = 0x0; _0x479655 < level; _0x479655++) {
    i += '';
  }
  i += _0x50e449 + "</a>";
  t = level;
});
for (var l = 0x0; t >= l; l++) {
  a += "</ul>";
  i += "</ul>";
  if (0x0 != l) {
    a += "</li>";
    i += "</li>";
  }
}
$("#navigasi .buka").html(i);
!function (_0x1fa1ca) {
  _0x1fa1ca.fn[_0x5378(220270140, "5C)0")] = function (_0x59cb6d) {
    var _0x5b7c72 = _0x1fa1ca(this);
    var _0x415f73 = _0x1fa1ca.extend({
      "format": "dropdown",
      "sticky": false
    }, _0x59cb6d);
    return this.each(function () {
      _0x1fa1ca(this).find(".button").on("click", function () {
        _0x1fa1ca(this).toggleClass("menu-opened");
        var _0x3825cd = _0x1fa1ca(this).next("ul");
        if (_0x3825cd.hasClass("open")) {
          _0x3825cd.slideToggle(0x96).removeClass("open");
        } else {
          _0x3825cd.slideToggle(0x96).addClass("open");
          if ("dropdown" === _0x415f73.format) {
            _0x3825cd.find("ul").show();
          }
        }
      });
      _0x5b7c72.find("li ul").parent().addClass("has-sub");
      multiTg = function () {
        _0x5b7c72.find(".has-sub").prepend("<span class=\"submenu-button\"></span>");
        _0x5b7c72.find(".submenu-button").on("click", function () {
          _0x1fa1ca(this).toggleClass("submenu-opened");
          if (_0x1fa1ca(this).siblings("ul").hasClass("open")) {
            _0x1fa1ca(this).siblings("ul").removeClass("open").slideToggle(0x96);
          } else {
            _0x1fa1ca(this).siblings("ul").addClass("open").slideToggle(0x96);
          }
        });
      };
      if ("multitoggle" === _0x415f73.format) {
        multiTg();
      } else {
        _0x5b7c72.addClass("dropdown");
      }
      if (true === _0x415f73.sticky) {
        _0x5b7c72.css("position", "fixed");
      }
    });
  };
}(jQuery);
(function (_0x547479) {
  _0x547479(document).ready(function () {
    _0x547479(_0x5378(422121900, "dApk")).menumaker({
      "format": "multitoggle"
    });
  });
})(jQuery);
$(document).on("click", ".informasi", function () {
  document.getElementById("get-number").innerHTML = $(this).children(".noAdmin").text();
  $(".start-chat,.get-new").addClass("show").removeClass("hide");
  $(".home-chat,.head-home").addClass("hide").removeClass("show");
  document.getElementById("belibeli-whatsapp-nama").innerHTML = $(this).children(".info-chat").children(".chat-nama").text();
  document.getElementById("get-label").innerHTML = $(this).children(".info-chat").children(".chat-label").text();
});
$(document).on("click", ".close-chat", function () {
  $(".start-chat,.get-new").addClass("hide").removeClass("show");
  $(".home-chat" + _0x5378(48086766, "QC&8") + "e").addClass("show").removeClass("hide");
  $("#belibeli-whatsapp-chat").addClass("hide").removeClass("show");
});
$(document).on("click", ".belibeli-whatsapp-show-chat,.tombol-kontak", function () {
  $("#belibeli-whatsapp-chat").addClass("show").removeClass("hide");
});
$(document).on("click", "#send-it", function () {
  var _0x4b7045 = document.getElementById("chat-input");
  if ('' != _0x4b7045.value) {
    var _0x284488 = $(_0x5378(5260286, "QMi[") + "r").text();
    var _0x10ec35 = document[_0x5378(15164414, "QMi[") + "ById"](_0x5378(11420670, "Yd]5")).value;
    var _0x269a3d = _0x5378(21316606, "dgE8") + _0x10ec35;
    var _0x58914a = "https://api.whatsapp.com/send" + _0x5378(23467006, "71PU") + _0x284488 + _0x269a3d;
    window[_0x5378(15737854, "QC&8")](_0x58914a, "_blank");
  }
});
$(document).on("click", "#chat-penjual-post", function () {
  var _0x553f8a = _0x5378(42180351, "[]KN") + "i.whatsapp" + ".com/send";
  var _0x2e60cb = $(".post-title.entry-title")[_0x5378(7663359, "dApk")]();
  var _0x1bfbac = $(".post-produk .hapus." + _0x5378(21090047, "4bEN"))[_0x5378(21999359, "dgE8")]();
  var _0x2d4227 = _0x553f8a + "?phone=" + nomorAdmin + "&text=" + simpleBliSetting[_0x5378(5754623, "[hmp") + " Chat Penj" + "ual"] + " *" + _0x2e60cb + "* %0A%0ALink Produk: " + _0x1bfbac;
  window.open(_0x2d4227, "_blank");
});
$(document).ready(function (_0x48e621) {
  _0x48e621(".iconsearc" + _0x5378(634262539, "71PU")).click(function () {
    _0x48e621(".searchcontainer").toggleClass("opensearch");
    _0x48e621(this).fadeIn('');
    return false;
  });
  _0x48e621("a.buka-kategori").click(function () {
    _0x48e621(".buka").slideToggle("fast");
    _0x48e621(this).toggleClass("active");
    return false;
  });
  _0x48e621(".menu-buka").click(function () {
    _0x48e621(".kategori-dropdown").toggleClass("active");
  });
  _0x48e621(_0x5378(465376267, "BeDr") + "ile").click(function () {
    _0x48e621("#menu-prof" + _0x5378(46466, "IHZV")).slideToggle("normal");
    return false;
  });
  _0x48e621("#lihat-selengkapnya").click(function () {
    _0x48e621("#tampilkan-selengkapnya").slideToggle("normal");
    _0x48e621(this).find(".title").toggleClass("active");
    return false;
  });
  _0x48e621("a.tombol-bukatutup,.keranjang." + _0x5378(441586699, "gGnn")).click(function () {
    if (optionlogin == "on") {
      if (checkUser) {
        _0x48e621(".belibeli-background-transparent-box").slideToggle("normal");
        return false;
      } else {
        notification("<div class='peringatan gagal'><svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'><path d='M11,15H13V17H11V15M11,7H13V13H11V7M12,2C6.47,2 2,6.5 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20Z' /></svg></div>Anda belum login, Cart Belanja tidak bisa ditampilkan");
      }
    } else {
      if (optionlogin == "off") {
        _0x48e621(".belibeli-background-transparent-box").slideToggle("normal");
        return false;
      }
    }
  });
  _0x48e621(".belibeli-beli-langsung")[_0x5378(513152011, "QZlP")](function () {
    _0x48e621(".belibeli-background-transparent-box").slideToggle("normal");
    return true;
  });
  _0x48e621(".lihat-kupon")[_0x5378(254612491, "(]6h")](function () {
    _0x48e621(".datakupon").slideToggle("normal");
    _0x48e621(this).toggleClass("active");
    return false;
  });
  _0x48e621(".view-cart")[_0x5378(673387531, "%U#@")](function () {
    _0x48e621("#belanja,.simpleCart_items,.without-box,.batas-box").slideToggle("normal");
    _0x48e621(this).toggleClass("active");
    fbq("track", "InitiateCheckout");
    return false;
  });
  _0x48e621(".belibeli-buka-share").click(function () {
    _0x48e621(".belibeli-produk-share-icon").toggleClass("aktif");
  });
  _0x48e621(".tombol-home")[_0x5378(92935179, "aX^M")](function () {
    window.location.href = urlHome;
  });
  var _0x91bdb6 = _0x48e621(_0x5378(81662987, "#b[]") + "widget-not" + "ifikasi .w" + "idget-cont" + "ent").html();
  if (_0x91bdb6 != undefined) {
    _0x48e621("a.icon-not" + _0x5378(413406219, "cw1A") + "ombol-noti" + "fikasi").click(function () {
      _0x48e621("#belibelinotifikasi").toggleClass("active");
      _0x48e621(this).fadeIn('');
      return false;
    });
    var _0x734195 = sessionStorage.getItem("welcomeSession");
    if (_0x734195 === null) {
      _0x48e621(window).bind("load", function () {
        setTimeout(function () {
          _0x48e621(".belibelinotifikasi").addClass("active");
          _0x734195 = sessionStorage.setItem("welcomeSession", true);
        }, 0x1388);
      });
    }
  } else if (_0x91bdb6 == undefined) {
    _0x48e621("a.icon-notifikasi,.tombol-notifikasi").click(function () {
      notification("<div class='peringatan gagal'><svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'><path d='M11,15H13V17H11V15M11,7H13V13H11V7M12,2C6.47,2 2,6.5 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20Z' /></svg></div>" + (_0x5378(309399847, "dApk") + "notif yang" + " tersedia"));
      return false;
    });
  }
});
function hapusArtikel() {
  $(".article-product").each(function () {
    $(this).parents(".post-outer").remove();
  });
}
function belibeliHarga() {
  $(".post-outer .belibeli-data-produk").each(function () {
    var _0x3fd654 = $(this).find(".data-harga").text();
    var _0x41df46 = $(this).find(".data-diskon").text();
    var _0x9e01a3 = $(this).find(".data-status").text();
    if (_0x9e01a3 == '') {
      $(this).parents(".post-outer").find(".status-produk").html("<div class='status'>Artikel</div>");
    } else {
      if (_0x9e01a3 == "on") {
        $(this).parents(".post-outer").find(".status-produk").remove();
      } else {
        if (formatNama(_0x9e01a3) == "off") {
          $(this).parents(".post-outer").find(".status-produk").html("<div class='status habis'>Habis</div>");
        } else {
          var _0x65a4f8 = _0x9e01a3.split(", ");
          var _0x5f473d = '';
          for (x = 0x0; x < _0x65a4f8.length; x++) {
            _0x5f473d += "<div class='status'>" + _0x65a4f8[x] + "</div>";
          }
          $(this).parents(".post-outer").find(".status-produk").html(_0x5f473d);
        }
      }
    }
    if (_0x3fd654 === '') {
      $(this).parents(".post-outer").find(".article-product").remove();
    } else {
      var _0x3ec0c0 = Math.round(0x0 + _0x41df46);
      if (_0x3ec0c0 < 0x64) {
        var _0x452776 = Math.round(_0x3fd654 * _0x3ec0c0 / 0x64);
      } else {
        if (_0x3ec0c0 > 0x65) {
          var _0x452776 = _0x3ec0c0;
        }
      }
      var _0x3053d9 = _0x3fd654 - _0x452776;
      if (_0x3ec0c0 != null && _0x3ec0c0 != 0x0) {
        if (_0x3ec0c0 < 0x64) {
          $(this).parents(".post-outer").find(".belibeli-harga-produk").html("<div class='price'>" + angkaToRp(_0x3053d9) + "</div>");
          $(this).parents(".post-outer").find(".belibeli-harga-diskon").html("<div class='discount'>" + angkaToRp(_0x3fd654) + "</div><div class='prosentase'>" + _0x3ec0c0 + "%</div>");
        } else if (_0x3ec0c0 > 0x65) {
          $(this).parents(".post-outer").find(".belibeli-harga-produk").html("<div class='price'>" + angkaToRp(_0x3053d9) + "</div>");
          $(this).parents(".post-outer").find(".belibeli-harga-diskon").html("<div class='discount'>" + angkaToRp(_0x3fd654) + "</div>");
        }
      } else {
        $(this).parents(".post-outer").find(".belibeli-harga-produk").html("<div class='price'>" + angkaToRp(_0x3053d9) + "</div>");
      }
    }
    $(this).parents(".post-snippet").starRating();
  });
}
;
$(".belibeli-produk-terlaris-snippet").each(function () {
  var _0x221983 = $(this)[_0x5378(34059839, "TYxK")](".data-harga").text();
  var _0x139593 = $(this).find(_0x5378(41788991, "fRDt") + "on").text();
  var _0x41a66a = $(this).find(".data-status").text();
  if (_0x41a66a == '') {
    $(this).parents(".belibeli-" + _0x5378(15939135, "*J]!") + "laris-cont" + "ent").find(".status-produk").html("<div class='status'>" + _0x5378(20788799, "5C)0") + "iv>");
  } else {
    if (_0x41a66a == "on") {
      $(this).parents(_0x5378(20313663, "$q%[") + "produk-ter" + _0x5378(11327039, "Zp[M") + "ent").find(".status-produk").remove();
    } else {
      if (formatNama(_0x41a66a) == "off") {
        $(this).parents(".belibeli-produk-ter" + _0x5378(46724671, "3a1@") + "ent").find(".status-produk")[_0x5378(26457663, "QZlP")]("<div class" + _0x5378(40838719, "N4BJ") + "abis'>Habi" + _0x5378(40412735, "N4BJ"));
      } else {
        var _0x65e160 = _0x41a66a[_0x5378(16635455, ")SjY")](", ");
        var _0x579bc0 = '';
        for (x = 0x0; x < _0x65e160.length; x++) {
          _0x579bc0 += "<div class" + _0x5378(16791103, "*J]!") + _0x65e160[x] + _0x5378(37873215, "$q%[");
        }
        $(this).parents(_0x5378(47048255, "QC&8") + "produk-ter" + "laris-cont" + "ent").find(_0x5378(8087103, "BeDr") + "oduk").html(_0x579bc0);
      }
    }
  }
  if (_0x221983 === '') {
    $(this).parents(".belibeli-" + _0x5378(33760831, "005A") + "laris-cont" + "ent").find(".article-product")[_0x5378(40498751, "QZlP")]();
  } else {
    var _0x14cbb9 = Math.round(0x0 + _0x139593);
    if (_0x14cbb9 < 0x64) {
      var _0x668c7 = Math[_0x5378(12633663, "TYxK")](_0x221983 * _0x14cbb9 / 0x64);
    } else {
      if (_0x14cbb9 > 0x65) {
        var _0x668c7 = _0x14cbb9;
      }
    }
    var _0x2c431a = _0x221983 - _0x668c7;
    if (_0x14cbb9 != null && _0x14cbb9 != 0x0) {
      if (_0x14cbb9 < 0x64) {
        $(this).parents(".belibeli-produk-terlaris-content")[_0x5378(25212479, "71PU")](".belibeli-harga-produk").html("<div class='price'>" + angkaToRp(_0x2c431a) + "</div>");
        $(this).parents(".belibeli-produk-terlaris-content")[_0x5378(34387519, "005A")](".belibeli-harga-diskon").html("<div class='discount'>" + angkaToRp(_0x221983) + ("</div><div class='pr" + _0x5378(3528255, "TYxK")) + _0x14cbb9 + "%</div>");
      } else if (_0x14cbb9 > 0x65) {
        $(this).parents(".belibeli-" + _0x5378(5862975, "k59^") + "laris-cont" + "ent")[_0x5378(29939263, "BeDr")](".belibeli-harga-produk").html("<div class='price'>" + angkaToRp(_0x2c431a) + _0x5378(665151, "#pNe"));
        $(this)[_0x5378(31946303, "cw1A")](".belibeli-produk-terlaris-content").find(".belibeli-harga-diskon").html(_0x5378(29423167, "an)$") + "='discount" + "'>" + angkaToRp(_0x221983) + "</div>");
      }
    } else {
      $(this).parents(".belibeli-produk-terlaris-cont" + _0x5378(21915199, "kpno")).find(".belibeli-harga-produk").html(_0x5378(30848575, "Zp[M") + "='price'>" + angkaToRp(_0x2c431a) + "</div>");
    }
  }
  $(this).starRating();
  $(this).find(".belibeli-" + _0x5378(33920575, "atxO") + "k").remove();
});
$(".productDescription").each(function () {
  $(".productDescription .data-image img").each(function () {
    var _0x309250 = $("h1.post-title.entry-title").text();
    var _0x1b38bc = $(this).attr("src");
    _0x1b38bc = _0x1b38bc.replace(/.*?:\/\//g, "//");
    _0x1b38bc = _0x1b38bc.replace(/\/[w,s][0-9][0-9].*\//g, "/w640-h640-c-rw/");
    if (_0x1b38bc.indexOf("/w640-h640-c-rw") == -0x1) {
      _0x1b38bc = _0x1b38bc + "=w640-h640-c-rw";
    }
    _0x1b38bc = _0x1b38bc.replace(/=s72-[w,c].*/g, "=w640-h640-c-rw");
    var _0xffa184 = "<a href='" + _0x1b38bc + "'><img src='" + _0x1b38bc + "' alt='" + _0x309250 + "' width='640' height='640'/></a>";
    $("#belibeli-image-slide").append(_0xffa184);
  });
});
$(document).ready(function () {
  $("#belibeli-image-slide").owlCarousel({
    "loop": false,
    "items": 0x1,
    "margin": 0x0,
    "stagePadding": 0x0,
    "nav": true,
    "navText": ["<svg viewBox=\"0 0 24 24\"><path d=\"M15.41,16.58L10.83,12L15.41,7.41L14,6L8,12L14,18L15.41,16.58Z\"/></svg>", "<svg viewBox=\"0 0 24 24\"><path d=\"M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z\"/></svg>"],
    "autoplay": false
  });
  dotcount = 0x1;
  jQuery(".belibeli-image-wrap .owl-carousel .owl-dot").each(function () {
    jQuery(this).addClass("dotnumber" + dotcount);
    jQuery(this).attr("data-info", dotcount);
    dotcount += 0x1;
  });
  slidecount = 0x1;
  jQuery(".belibeli-image-wrap .owl-carousel .owl-item").not(".cloned").each(function () {
    jQuery(this).addClass("slidenumber" + slidecount);
    slidecount += 0x1;
  });
  jQuery(".belibeli-image-wrap .owl-carousel .owl-dot").each(function () {
    grab = jQuery(this).data("info");
    slidegrab = jQuery(".slidenumber" + grab + " img").attr("src");
    jQuery(this).css("background-image", "url(" + slidegrab + ")");
  });
  amount = $(".belibeli-image-wrap .owl-carousel .owl-dot").length;
  gotowidth = 0x64 / amount;
  $(this).find(".data-image").remove();
});
$(".productDescription").each(function () {
  $(this).find(".remove_element").remove();
  $(this).find(".data_produk").hide();
  var _0x2b598f = $(this).find(".data-banner").text();
  if (_0x2b598f == "on") {
    $("#panjang-banner, #lebar-banner").removeClass("hapus");
    $("#panjang-banner .text-panjang").addClass("item_size");
    $("#lebar-banner .text-lebar").addClass("item_size");
  }
  $(".belibeli-box-produk .status-produk").each(function () {
    var _0x242e65 = $(this).parents(_0x5378(46928327, "IHZV") + "dy").find(_0x5378(47526343, "!#!f") + "us")[_0x5378(45183431, "3a1@")]();
    $(this).attr("data-stock", _0x242e65);
    if (_0x242e65 == "on") {
      $(this).remove();
    } else {
      if (formatNama(_0x242e65) == "off") {
        $(this).html("<div class='status habis'>Habis</div>");
        $(".belibeli-tombol-beli").append("<div class='stock' id='produk-habis' title='Maaf, produk ini sudah habis'></div>");
        $("#produk-habis").click(function () {
          notification("<div class='peringatan gagal'><svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'><path d='M11,15H13V17H11V15M11,7H13V13H11V7M12,2C6.47,2 2,6.5 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20Z' /></svg></div>Maaf, Produk ini sudah habis");
        });
      } else {
        var _0x5d4fae = _0x242e65.split(", ");
        var _0x35ae94 = '';
        for (i = 0x0; i < _0x5d4fae.length; i++) {
          _0x35ae94 += "<div class='status'>" + _0x5d4fae[i] + "</div>";
        }
        $(this).html(_0x35ae94);
      }
    }
  });
  $(".widget-harga-produk .item_price").each(function () {
    var _0x5c4137 = $(this).parents(".productBody").find(".data-harga").text();
    var _0x5cdfed = $(this).parents(".productBody")[_0x5378(30540760, "BeDr")](".data-diskon").text();
    var _0x29d017 = Math.round(0x0 + _0x5cdfed);
    if (_0x29d017 < 0x64) {
      var _0x3eece4 = Math.round(_0x5c4137 * _0x5cdfed / 0x64);
    } else {
      if (_0x29d017 >= 0x65) {
        var _0x3eece4 = _0x5cdfed;
      }
    }
    var _0x4d0e6d = Math.round(_0x5c4137 - _0x3eece4);
    var _0x312231 = angkaToRp(_0x4d0e6d);
    var _0x57e65e = angkaToRp(_0x5c4137);
    $(this).parents(".productBody").find("[itemprop=price]").attr("content", _0x4d0e6d);
    $(this).attr("data-normal-price", _0x5c4137);
    $(this).attr("data-discount", _0x29d017);
    $(this).attr("data-price", _0x4d0e6d);
    if (_0x2b598f == "on") {
      $(this).attr("data-price-banner", _0x5c4137);
    }
    $(this).text(_0x312231);
    if (_0x29d017 != null && _0x29d017 != 0x0) {
      if (_0x29d017 < 0x64) {
        $(".widget-harga-produk .item_price").before("<div class=\"strike\">" + _0x57e65e + "</div>").after("<div class=\"belibeli-discount\">" + _0x29d017 + "% OFF</div>");
      } else if (_0x29d017 >= 0x65) {
        $(".widget-harga-produk .item_price").before("<div class=\"strike\">" + _0x57e65e + "</div>");
      }
    }
  });
  $(".belibeli-widget-detail").each(function () {
    var _0x3ec9af = $(this).parents(".productBody").find(".title-pilihan-satu").text();
    var _0x1f7a4f = $(this).parents(".productBody").find(".data-pilihan-satu").text();
    if (formatNama(_0x1f7a4f) == "off") {
      $("#pilihan-1").remove();
    } else {
      var _0x4ec828 = _0x1f7a4f.split(", ");
      var _0x3d4a99 = '';
      for (a = 0x0; a < _0x4ec828.length; a++) {
        _0x3d4a99 += "<li>" + _0x4ec828[a] + "</li>";
      }
      $(this).find("#pilihan-1 .title-pilihan-1").text(_0x3ec9af);
      $(this).find(".opsi-pilihan-1").html(_0x3d4a99);
    }
    var _0x4ab15e = $(this).parents(".productBody").find(".title-pilihan-dua").text();
    var _0x1095d8 = $(this).parents(".productBody").find(".data-pilihan-dua").text();
    if (formatNama(_0x1095d8) == "off") {
      $("#pilihan-2").remove();
    } else {
      var _0x4ec828 = _0x1095d8.split(", ");
      var _0x408b37 = '';
      for (a = 0x0; a < _0x4ec828.length; a++) {
        _0x408b37 += "<li>" + _0x4ec828[a] + "</li>";
      }
      $(this).find("#pilihan-2 .title-pilihan-2").text(_0x4ab15e);
      $(this).find(".opsi-pilihan-2").html(_0x408b37);
    }
    var _0x43cff8 = $(this).parents(".productBody").find(".title-pilihan-tiga").text();
    var _0x295fd7 = $(this).parents(".productBody").find(".data-pilihan-tiga").text();
    if (formatNama(_0x295fd7) == "off") {
      $("#pilihan-3").remove();
    } else {
      var _0x4ec828 = _0x295fd7.split(", ");
      var _0x3fba7e = '';
      for (a = 0x0; a < _0x4ec828.length; a++) {
        _0x3fba7e += "<li>" + _0x4ec828[a] + "</li>";
      }
      $(this).find("#pilihan-3 .title-pilihan-3").text(_0x43cff8);
      $(this).find(".opsi-pilihan-3").html(_0x3fba7e);
    }
    var _0x2bca0f = $(this).parents(".productBody").find(".title-pilihan-empat").text();
    var _0xba2cb1 = $(this).parents(".productBody").find(".data-pilihan-empat").text();
    if (formatNama(_0xba2cb1) == "off") {
      $("#pilihan-4").remove();
    } else {
      var _0x4ec828 = _0xba2cb1.split(", ");
      var _0x45c62b = '';
      for (a = 0x0; a < _0x4ec828.length; a++) {
        _0x45c62b += "<li>" + _0x4ec828[a] + "</li>";
      }
      $(this).find("#pilihan-4 .title-pilihan-4").text(_0x2bca0f);
      $(this).find(".opsi-pilihan-4").html(_0x45c62b);
    }
  });
  $(".opsi-pilihan-1 li").each(function (_0x1be259) {
    var _0x39885e = $(this).parents("#pilihan-1").find(".title-pilihan-1")[_0x5378(477499337, "5C)0")]();
    var _0x3d7745 = $(this).html();
    var _0x56322c = _0x3d7745.split(":");
    if (_0x56322c[0x1] == undefined) {
      var _0x28b1a6 = $(this).parents(_0x5378(470159305, "NnbG") + "dy").find(".widget-ha" + _0x5378(437391305, "RAO[") + " .item_pri" + "ce").attr("data-normal-price");
    } else {
      if (_0x56322c[0x1] == "off") {
        var _0x28b1a6 = $(this).parents(".productBody").find(".widget-harga-produk .item_price").attr("data-normal-price");
        $(this).attr("class", "pilihan-habis");
        $(this).attr("data-pilihan", _0x56322c[0x1]);
        $(this).attr("title", "Maaf " + _0x39885e + " " + _0x56322c[0x0] + " sudah habis, harap pilih yang lain");
      } else {
        if (_0x56322c[0x1] != undefined && _0x56322c[0x1] != "off") {
          var _0x28b1a6 = _0x56322c[0x1];
        }
      }
    }
    $(this).attr("data-normal-price", _0x28b1a6);
    if (_0x56322c[0x2] != undefined && formatNama(_0x56322c[0x2]) == "off") {
      $(this).attr("class", "pilihan-habis");
      $(this).attr("data-pilihan", _0x56322c[0x2]);
      $(this).attr("title", "Maaf " + _0x39885e + " " + _0x56322c[0x0] + " sudah habis, harap pilih yang lain");
    }
    $(this).html("<b class='hapus'>" + _0x39885e + " </b>" + _0x56322c[0x0]);
  });
  $(".opsi-pilihan-2 li").each(function (_0x5f3fa0) {
    var _0x4aa068 = $(this).parents("#pilihan-2").find(".title-pilihan-2").text();
    var _0x4d21da = $(this)[_0x5378(1725878, "fRDt")]();
    var _0x3a2eab = _0x4d21da.split(":");
    if (_0x3a2eab[0x1] == undefined) {
      var _0x33bb5a = 0x0;
    } else {
      if (_0x3a2eab[0x1] == "off") {
        var _0x33bb5a = 0x0;
        $(this).attr(_0x5378(657846, "5C)0"), "pilihan-ha" + _0x5378(2012598, "[TlR"));
        $(this).attr(_0x5378(906166, "[]KN") + "an", _0x3a2eab[0x1]);
        $(this).attr("title", "Maaf " + _0x4aa068 + " " + _0x3a2eab[0x0] + " sudah habis, harap pilih yang lain");
      } else {
        if (_0x3a2eab[0x1] != undefined && _0x3a2eab[0x1] != _0x5378(1338806, "&ihF")) {
          var _0x33bb5a = _0x3a2eab[0x1];
        }
      }
    }
    $(this).attr(_0x5378(1961654, "rQo9") + "l-price", _0x33bb5a);
    if (_0x3a2eab[0x2] != undefined && formatNama(_0x3a2eab[0x2]) == _0x5378(886454, "RAO[")) {
      $(this).attr("class", "pilihan-habis");
      $(this).attr("data-pilihan", _0x3a2eab[0x2]);
      $(this).attr("title", "Maaf " + _0x4aa068 + " " + _0x3a2eab[0x0] + (" sudah habis, harap " + _0x5378(554678, "[hmp") + " lain"));
    }
    $(this).html("<b class='hapus'>" + _0x4aa068 + " </b>" + _0x3a2eab[0x0]);
  });
  $(".opsi-pilihan-3 li").each(function (_0x411482) {
    var _0x272dca = $(this)[_0x5378(284495532, "kpno")]("#pilihan-3").find(".title-pilihan-3")[_0x5378(368709292, "vaKW")]();
    var _0x5480cf = $(this).html();
    var _0x28e39e = _0x5480cf.split(":");
    if (_0x28e39e[0x1] == undefined) {
      var _0x10cd92 = 0x0;
    } else {
      if (_0x28e39e[0x1] == "off") {
        var _0x10cd92 = 0x0;
        $(this).attr("class", "pilihan-habis");
        $(this).attr("data-pilihan", _0x28e39e[0x1]);
        $(this).attr("title", "Maaf " + _0x272dca + " " + _0x28e39e[0x0] + " sudah habis, harap pilih yang lain");
      } else {
        if (_0x28e39e[0x1] != undefined && _0x28e39e[0x1] != "off") {
          var _0x10cd92 = _0x28e39e[0x1];
        }
      }
    }
    $(this).attr("data-normal-price", _0x10cd92);
    if (_0x28e39e[0x2] != undefined && formatNama(_0x28e39e[0x2]) == "off") {
      $(this).attr("class", "pilihan-habis");
      $(this).attr("data-pilihan", _0x28e39e[0x2]);
      $(this).attr("title", "Maaf " + _0x272dca + " " + _0x28e39e[0x0] + " sudah habis, harap pilih yang lain");
    }
    $(this).html("<b class='hapus'>" + _0x272dca + " </b>" + _0x28e39e[0x0]);
  });
  $(".opsi-pilihan-4 li").each(function (_0x2cb7ff) {
    var _0x5d6826 = $(this).parents("#pilihan-4")[_0x5378(27827910, "%U#@")](".title-pilihan-4").text();
    var _0x544385 = $(this).html();
    var _0x835269 = _0x544385.split(":");
    if (_0x835269[0x1] == undefined) {
      var _0x3ba43d = 0x0;
    } else {
      if (_0x835269[0x1] == "off") {
        var _0x3ba43d = 0x0;
        $(this)[_0x5378(178459084, "OZmz")]("class", "pilihan-habis");
        $(this)[_0x5378(709431756, "QMi[")](_0x5378(233116108, "4bEN") + "an", _0x835269[0x1]);
        $(this).attr(_0x5378(133173708, "dgE8"), "Maaf " + _0x5d6826 + " " + _0x835269[0x0] + (" sudah habis, harap " + _0x5378(140972492, "dgE8") + " lain"));
      } else {
        if (_0x835269[0x1] != undefined && _0x835269[0x1] != "off") {
          var _0x3ba43d = _0x835269[0x1];
        }
      }
    }
    $(this).attr("data-normal-price", _0x3ba43d);
    if (_0x835269[0x2] != undefined && formatNama(_0x835269[0x2]) == "off") {
      $(this).attr("class", "pilihan-habis");
      $(this).attr("data-pilihan", _0x835269[0x2]);
      $(this).attr("title", "Maaf " + _0x5d6826 + " " + _0x835269[0x0] + " sudah habis, harap pilih yang lain");
    }
    $(this).html("<b class='hapus'>" + _0x5d6826 + " </b>" + _0x835269[0x0]);
  });
  $(".opsi-pilihan-1 li").on("click", function () {
    var _0x3601a3 = $(this).text();
    var _0x4f88fd = 0x0;
    $(this)[_0x5378(5091003, "IHZV")](_0x5378(50196155, "rQo9") + "han-1").find("li").removeClass(_0x5378(12504763, "#b[]"));
    $(this).addClass("item_size");
    var _0x1636ea = $(this).parents(".post-body").find(".item_price").attr("data-discount");
    $(".belibeli-widget-detail .pilihan-produk").each(function () {
      var _0x2720f4 = parseFloat($(this).find(".item_size").attr("data-normal-price"));
      if (!isNaN(_0x2720f4)) {
        _0x4f88fd += _0x2720f4;
      }
    });
    if (_0x2b598f == "on") {
      $(this).parents(".post-body").find(".item_price").attr("data-price-banner", _0x4f88fd);
      var _0x58b456 = $("#panjang-banner input").val();
      var _0x33b45d = $("#lebar-banner input").val();
      $("#panjang-banner .text-panjang").text("Panjang: " + _0x58b456 + "m");
      $("#lebar-banner .text-lebar").text("Lebar: " + _0x33b45d + "m");
    }
    if (_0x4f88fd != null && _0x4f88fd != 0x0) {
      if (_0x1636ea != null && _0x1636ea != 0x0) {
        if (_0x1636ea < 0x64) {
          var _0x5e8a19 = Math.round(_0x4f88fd - _0x4f88fd * _0x1636ea / 0x64);
          $(this).parents(".post-body").find(".widget-harga-produk .belibeli-discount").html(_0x1636ea + "% OFF");
        } else {
          if (_0x1636ea >= 0x65) {
            var _0x5e8a19 = _0x4f88fd - _0x1636ea;
          }
        }
        if (_0x2b598f == "on") {
          var _0x58b456 = $("#panjang-banner input").val();
          var _0x33b45d = $("#lebar-banner input").val();
          _0x4f88fd = _0x4f88fd * _0x58b456 * _0x33b45d;
          _0x5e8a19 = _0x5e8a19 * _0x58b456 * _0x33b45d;
        }
        $(this).parents(".post-body").find(".item_price").attr("data-normal-price", _0x4f88fd);
        $(this).parents(".post-body").find(".item_price").attr("data-price", _0x5e8a19);
        $(this).parents(".post-body").find(".item_price").text(angkaToRp(_0x5e8a19));
        $(this).parents(".post-body").find(".widget-harga-produk .strike").text(angkaToRp(_0x4f88fd));
      } else {
        if (_0x2b598f == "on") {
          var _0x58b456 = $("#panjang-banner input").val();
          var _0x33b45d = $("#lebar-banner input").val();
          _0x4f88fd = _0x4f88fd * _0x58b456 * _0x33b45d;
        }
        $(this).parents(".post-body").find(".item_price").attr("data-normal-price", _0x4f88fd);
        $(this).parents(".post-body").find(".item_price").attr("data-price", _0x4f88fd);
        $(this).parents(".post-body").find(".item_price").text(angkaToRp(_0x4f88fd));
      }
    } else {
      if (_0x2b598f == "on") {
        var _0x58b456 = $("#panjang-banner input").val();
        var _0x33b45d = $("#lebar-banner input").val();
        _0x4f88fd = _0x4f88fd * _0x58b456 * _0x33b45d;
      }
      $(this).parents(".post-body").find(".item_price").attr("data-normal-price", _0x4f88fd);
      $(this).parents(".post-body").find(".item_price").attr("data-price", _0x4f88fd);
      $(this).parents(".post-body").find(".item_price").text(angkaToRp(_0x4f88fd));
    }
    if ($(this).attr("data-pilihan") == "off") {
      $(this).removeClass("item_size");
      if ($(this).parents(".opsi-pilihan-1").find("li:first").attr("data-pilihan") != "off") {
        $(this).parents(".opsi-pilihan-1").find("li:first").trigger("click");
      }
      notification("<div class='peringatan gagal'><svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'><path d='M11,15H13V17H11V15M11,7H13V13H11V7M12,2C6.47,2 2,6.5 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20Z' /></svg></div>Maaf <b>" + _0x3601a3 + "</b> sudah habis, harap pilih yang lain");
    }
  });
  $(".opsi-pilihan-2 li").on("click", function () {
    var _0x35c8d6 = $(this).text();
    var _0x59182c = 0x0;
    $(this)[_0x5378(2319558, "Zp[M")](".opsi-pilihan-2")[_0x5378(2043846, "Yd]5")]("li").removeClass("item_size");
    $(this).addClass("item_size");
    var _0x301eae = $(this).parents(".post-body").find(".item_price").attr("data-discount");
    $(_0x5378(2883014, "kpno") + _0x5378(251846, "3i2P") + "ail .pilih" + _0x5378(2648774, "tWQ3")).each(function () {
      var _0x5a34b6 = parseFloat($(this).find(".item_size").attr(_0x5378(4401140422, "atxO") + "l-price"));
      if (!isNaN(_0x5a34b6)) {
        _0x59182c += _0x5a34b6;
      }
    });
    if (_0x2b598f == "on") {
      $(this)[_0x5378(1433286, "hI0%")](".post-body")[_0x5378(266950, "k59^")](".item_price")[_0x5378(1928902, "!#!f")]("data-price-banner", _0x59182c);
      var _0x5c1d9f = $("#panjang-banner input").val();
      var _0x32b761 = $("#lebar-ban" + _0x5378(2256326, "hI0%")).val();
      $(_0x5378(3047622, "tWQ3") + "anner .tex" + "t-panjang")[_0x5378(2801606, "3a1@")]("Panjang: " + _0x5c1d9f + "m");
      $("#lebar-ban" + _0x5378(786886, "$q%[") + "lebar").text("Lebar: " + _0x32b761 + "m");
    }
    if (_0x59182c != null && _0x59182c != 0x0) {
      if (_0x301eae != null && _0x301eae != 0x0) {
        if (_0x301eae < 0x64) {
          var _0x43b255 = Math.round(_0x59182c - _0x59182c * _0x301eae / 0x64);
          $(this).parents(".post-body").find(".widget-harga-produk" + _0x5378(1269190, "aX^M") + "-discount")[_0x5378(925638, "aX^M")](_0x301eae + "% OFF");
        } else {
          if (_0x301eae >= 0x65) {
            var _0x43b255 = _0x59182c - _0x301eae;
          }
        }
        if (_0x2b598f == "on") {
          var _0x5c1d9f = $("#panjang-banner input").val();
          var _0x32b761 = $("#lebar-banner input")[_0x5378(2979014, "dgE8")]();
          _0x59182c = _0x59182c * _0x5c1d9f * _0x32b761;
          _0x43b255 = _0x43b255 * _0x5c1d9f * _0x32b761;
        }
        $(this).parents(".post-body").find(".item_price").attr("data-normal-price", _0x59182c);
        $(this).parents(_0x5378(1564102, "TYxK")).find(".item_price").attr("data-price", _0x43b255);
        $(this).parents(".post-body").find(".item_price").text(angkaToRp(_0x43b255));
        $(this).parents(_0x5378(2465990, "IHZV"))[_0x5378(266950, "k59^")](".widget-harga-produk .strike").text(angkaToRp(_0x59182c));
      } else {
        if (_0x2b598f == "on") {
          var _0x5c1d9f = $(_0x5378(2030022, "5C)0") + "anner inpu" + "t")[_0x5378(2804678, "5C)0")]();
          var _0x32b761 = $("#lebar-ban" + _0x5378(2710470, "QMi[")).val();
          _0x59182c = _0x59182c * _0x5c1d9f * _0x32b761;
        }
        $(this).parents(_0x5378(1943750, "atxO")).find(_0x5378(1694662, "#pNe") + "e").attr(_0x5378(2042566, "cw1A") + "l-price", _0x59182c);
        $(this).parents(".post-body").find(".item_price").attr("data-price", _0x59182c);
        $(this).parents(".post-body")[_0x5378(294598, "vaKW")](".item_price")[_0x5378(874182, "BcP5")](angkaToRp(_0x59182c));
      }
    } else {
      if (_0x2b598f == "on") {
        var _0x5c1d9f = $("#panjang-b" + _0x5378(1753286, "N4BJ") + "t")[_0x5378(1848262, "7ly)")]();
        var _0x32b761 = $("#lebar-banner input").val();
        _0x59182c = _0x59182c * _0x5c1d9f * _0x32b761;
      }
      $(this)[_0x5378(2447302, "[]KN")](_0x5378(2782918, "RAO[")).find(".item_price").attr("data-normal-price", _0x59182c);
      $(this).parents(".post-body").find(".item_price").attr("data-price", _0x59182c);
      $(this).parents(".post-body")[_0x5378(2695622, "rQo9")](".item_price").text(angkaToRp(_0x59182c));
    }
    if ($(this)[_0x5378(1290182, "(]6h")]("data-pilihan") == "off") {
      $(this).removeClass("item_size");
      if ($(this)[_0x5378(1264326, "kpno")](".opsi-pilihan-2").find(_0x5378(1221318, "%U#@")).attr(_0x5378(2590918, "QC&8") + "an") != "off") {
        $(this).parents(".opsi-pili" + _0x5378(522950, "4bEN")).find("li:first").trigger(_0x5378(222150, "H1*B"));
      }
      notification("<div class='peringatan gagal'><svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'><path d='M11,15H13V17H11V15M11,7H13V13H11V7M12,2C6.47,2 2,6.5 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20Z' /></svg></div>Maaf <b>" + _0x35c8d6 + "</b> sudah habis, harap pilih yang lain");
    }
  });
  $(".opsi-pilihan-3 li").on("click", function () {
    var _0x52b07d = $(this).text();
    var _0x373f8a = 0x0;
    $(this).parents(_0x5378(157487847, "NnbG") + "han-3")[_0x5378(277418727, "tWQ3")]("li").removeClass("item_size");
    $(this).addClass("item_size");
    var _0x41cc8b = $(this).parents(".post-body").find(".item_price").attr("data-discount");
    $(".belibeli-widget-detail .pilihan-produk").each(function () {
      var _0x5d1e14 = parseFloat($(this).find(".item_size").attr("data-normal-price"));
      if (!isNaN(_0x5d1e14)) {
        _0x373f8a += _0x5d1e14;
      }
    });
    if (_0x2b598f == "on") {
      $(this).parents(".post-body").find(".item_price").attr("data-price-banner", _0x373f8a);
      var _0x408b3c = $("#panjang-banner input").val();
      var _0x146ee1 = $("#lebar-banner input").val();
      $("#panjang-banner .text-panjang").text("Panjang: " + _0x408b3c + "m");
      $("#lebar-banner .text-lebar").text("Lebar: " + _0x146ee1 + "m");
    }
    if (_0x373f8a != null && _0x373f8a != 0x0) {
      if (_0x41cc8b != null && _0x41cc8b != 0x0) {
        if (_0x41cc8b < 0x64) {
          var _0x3db5bf = Math.round(_0x373f8a - _0x373f8a * _0x41cc8b / 0x64);
          $(this).parents(".post-body").find(".widget-harga-produk .belibeli-discount").html(_0x41cc8b + "% OFF");
        } else {
          if (_0x41cc8b >= 0x65) {
            var _0x3db5bf = _0x373f8a - _0x41cc8b;
          }
        }
        if (_0x2b598f == "on") {
          var _0x408b3c = $("#panjang-banner input").val();
          var _0x146ee1 = $("#lebar-banner input").val();
          _0x373f8a = _0x373f8a * _0x408b3c * _0x146ee1;
          _0x3db5bf = _0x3db5bf * _0x408b3c * _0x146ee1;
        }
        $(this).parents(".post-body").find(".item_price").attr("data-normal-price", _0x373f8a);
        $(this).parents(".post-body").find(".item_price").attr("data-price", _0x3db5bf);
        $(this).parents(".post-body").find(".item_price").text(angkaToRp(_0x3db5bf));
        $(this).parents(".post-body").find(".widget-harga-produk .strike").text(angkaToRp(_0x373f8a));
      } else {
        if (_0x2b598f == "on") {
          var _0x408b3c = $("#panjang-banner input").val();
          var _0x146ee1 = $("#lebar-banner input").val();
          _0x373f8a = _0x373f8a * _0x408b3c * _0x146ee1;
        }
        $(this).parents(".post-body").find(".item_price").attr("data-normal-price", _0x373f8a);
        $(this).parents(".post-body").find(".item_price").attr("data-price", _0x373f8a);
        $(this).parents(".post-body").find(".item_price").text(angkaToRp(_0x373f8a));
      }
    } else {
      if (_0x2b598f == "on") {
        var _0x408b3c = $("#panjang-banner input").val();
        var _0x146ee1 = $("#lebar-banner input").val();
        _0x373f8a = _0x373f8a * _0x408b3c * _0x146ee1;
      }
      $(this).parents(".post-body").find(".item_price").attr("data-normal-price", _0x373f8a);
      $(this).parents(".post-body").find(".item_price").attr("data-price", _0x373f8a);
      $(this).parents(".post-body").find(".item_price").text(angkaToRp(_0x373f8a));
    }
    if ($(this).attr("data-pilihan") == "off") {
      $(this).removeClass("item_size");
      if ($(this).parents(".opsi-pilihan-3").find("li:first").attr("data-pilihan") != "off") {
        $(this).parents(".opsi-pilihan-3").find("li:first").trigger("click");
      }
      notification("<div class='peringatan gagal'><svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'><path d='M11,15H13V17H11V15M11,7H13V13H11V7M12,2C6.47,2 2,6.5 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20Z' /></svg></div>Maaf <b>" + _0x52b07d + "</b> sudah habis, harap pilih yang lain");
    }
  });
  $(".opsi-pilihan-4 li").on("click", function () {
    var _0x4a751e = $(this).text();
    var _0x1eebcd = 0x0;
    $(this).parents(".opsi-pilihan-4").find("li").removeClass("item_size");
    $(this).addClass("item_size");
    var _0x29de1e = $(this).parents(".post-body").find(".item_price").attr("data-discount");
    $(".belibeli-widget-detail .pilihan-produk").each(function () {
      var _0x45b699 = parseFloat($(this).find(".item_size").attr("data-normal-price"));
      if (!isNaN(_0x45b699)) {
        _0x1eebcd += _0x45b699;
      }
    });
    if (_0x2b598f == "on") {
      $(this).parents(".post-body").find(".item_price").attr("data-price-banner", _0x1eebcd);
      var _0x2c4fb3 = $("#panjang-banner input").val();
      var _0x2e9261 = $("#lebar-banner input").val();
      $("#panjang-banner .text-panjang").text("Panjang: " + _0x2c4fb3 + "m");
      $("#lebar-banner .text-lebar").text("Lebar: " + _0x2e9261 + "m");
    }
    if (_0x1eebcd != null && _0x1eebcd != 0x0) {
      if (_0x29de1e != null && _0x29de1e != 0x0) {
        if (_0x29de1e < 0x64) {
          var _0x32e554 = Math.round(_0x1eebcd - _0x1eebcd * _0x29de1e / 0x64);
          $(this).parents(".post-body").find(".widget-harga-produk .belibeli-discount").html(_0x29de1e + "% OFF");
        } else {
          if (_0x29de1e >= 0x65) {
            var _0x32e554 = _0x1eebcd - _0x29de1e;
          }
        }
        if (_0x2b598f == "on") {
          var _0x2c4fb3 = $("#panjang-banner input").val();
          var _0x2e9261 = $("#lebar-banner input").val();
          _0x1eebcd = _0x1eebcd * _0x2c4fb3 * _0x2e9261;
          _0x32e554 = _0x32e554 * _0x2c4fb3 * _0x2e9261;
        }
        $(this).parents(".post-body").find(".item_price").attr("data-normal-price", _0x1eebcd);
        $(this).parents(".post-body").find(".item_price").attr("data-price", _0x32e554);
        $(this).parents(".post-body").find(".item_price").text(angkaToRp(_0x32e554));
        $(this).parents(".post-body").find(".widget-harga-produk .strike").text(angkaToRp(_0x1eebcd));
      } else {
        if (_0x2b598f == "on") {
          var _0x2c4fb3 = $("#panjang-banner input").val();
          var _0x2e9261 = $("#lebar-banner input").val();
          _0x1eebcd = _0x1eebcd * _0x2c4fb3 * _0x2e9261;
        }
        $(this).parents(".post-body").find(".item_price").attr("data-normal-price", _0x1eebcd);
        $(this).parents(".post-body").find(".item_price").attr("data-price", _0x1eebcd);
        $(this).parents(".post-body").find(".item_price").text(angkaToRp(_0x1eebcd));
      }
    } else {
      if (_0x2b598f == "on") {
        var _0x2c4fb3 = $("#panjang-banner input").val();
        var _0x2e9261 = $("#lebar-banner input").val();
        _0x1eebcd = _0x1eebcd * _0x2c4fb3 * _0x2e9261;
      }
      $(this).parents(".post-body").find(".item_price").attr("data-normal-price", _0x1eebcd);
      $(this).parents(".post-body").find(".item_price").attr("data-price", _0x1eebcd);
      $(this).parents(".post-body").find(".item_price").text(angkaToRp(_0x1eebcd));
    }
    if ($(this).attr("data-pilihan") == "off") {
      $(this).removeClass("item_size");
      if ($(this).parents(".opsi-pilihan-4").find("li:first").attr("data-pilihan") != "off") {
        $(this).parents(".opsi-pilihan-4").find("li:first").trigger("click");
      }
      notification("<div class='peringatan gagal'><svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'><path d='M11,15H13V17H11V15M11,7H13V13H11V7M12,2C6.47,2 2,6.5 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20Z' /></svg></div>Maaf <b>" + _0x4a751e + "</b> sudah habis, harap pilih yang lain");
    }
  });
  if (_0x2b598f == "on") {
    $("#panjang-banner input").on("input", function () {
      var _0x45f501 = $(this).val().trim();
      var _0x4cd48f = $("#lebar-banner input").val();
      var _0x32e10f = $(this).parents(".post-body").find(".item_price").attr("data-price-banner") * 0x1;
      var _0xc64960 = $(this).parents(".post-body").find(".item_price").attr("data-discount") * 0x1;
      $("#panjang-banner .text-panjang").text("Panjang: " + _0x45f501 + "m");
      if (_0x32e10f != null && _0x32e10f != 0x0) {
        if (_0xc64960 != null && _0xc64960 != 0x0) {
          if (_0xc64960 < 0x64) {
            var _0x2c9c2e = Math.round(_0x32e10f - _0x32e10f * _0xc64960 / 0x64);
            $(this).parents(".post-body").find(".widget-harga-produk .belibeli-discount").html(_0xc64960 + "% OFF");
          } else {
            if (_0xc64960 >= 0x65) {
              var _0x2c9c2e = _0x32e10f - _0xc64960;
            }
          }
          _0x32e10f = _0x32e10f * _0x45f501 * _0x4cd48f;
          _0x2c9c2e = _0x2c9c2e * _0x45f501 * _0x4cd48f;
          $(this).parents(".post-body").find(".item_price").attr("data-normal-price", _0x32e10f);
          $(this).parents(".post-body").find(".item_price").attr("data-price", _0x2c9c2e);
          $(this).parents(".post-body").find(".item_price").text(angkaToRp(_0x2c9c2e));
          $(this).parents(".post-body").find(".widget-harga-produk .strike").text(angkaToRp(_0x32e10f));
        } else {
          _0x32e10f = _0x32e10f * _0x45f501 * _0x4cd48f;
          $(this).parents(".post-body").find(".item_price").attr("data-normal-price", _0x32e10f);
          $(this).parents(".post-body").find(".item_price").attr("data-price", _0x32e10f);
          $(this).parents(".post-body").find(".item_price").text(angkaToRp(_0x32e10f));
        }
      }
    });
    $("#lebar-banner input").on("input", function () {
      var _0x5eca63 = $(this).val().trim();
      var _0x49a751 = $("#panjang-banner input").val();
      var _0x184b48 = $(this).parents(".post-body").find(".item_price").attr("data-price-banner") * 0x1;
      var _0x347b72 = $(this).parents(".post-body").find(".item_price").attr("data-discount") * 0x1;
      $("#lebar-banner .text-lebar").text("Lebar: " + _0x5eca63 + "m");
      if (_0x184b48 != null && _0x184b48 != 0x0) {
        if (_0x347b72 != null && _0x347b72 != 0x0) {
          if (_0x347b72 < 0x64) {
            var _0x2e8c4f = Math.round(_0x184b48 - _0x184b48 * _0x347b72 / 0x64);
            $(this).parents(".post-body").find(".widget-harga-produk .belibeli-discount").html(_0x347b72 + "% OFF");
          } else {
            if (_0x347b72 >= 0x65) {
              var _0x2e8c4f = _0x184b48 - _0x347b72;
            }
          }
          _0x184b48 = _0x184b48 * _0x49a751 * _0x5eca63;
          _0x2e8c4f = _0x2e8c4f * _0x49a751 * _0x5eca63;
          $(this).parents(".post-body").find(".item_price").attr("data-normal-price", _0x184b48);
          $(this).parents(".post-body").find(".item_price").attr("data-price", _0x2e8c4f);
          $(this).parents(".post-body").find(".item_price").text(angkaToRp(_0x2e8c4f));
          $(this).parents(".post-body").find(".widget-harga-produk .strike").text(angkaToRp(_0x184b48));
        } else {
          _0x184b48 = _0x184b48 * _0x49a751 * _0x5eca63;
          $(this).parents(".post-body").find(".item_price").attr("data-normal-price", _0x184b48);
          $(this).parents(".post-body").find(".item_price").attr("data-price", _0x184b48);
          $(this).parents(".post-body").find(".item_price").text(angkaToRp(_0x184b48));
        }
      }
    });
  }
  var _0x13b828 = $(this).find(".data-jenis-produk").text();
  var _0x50319d = formatNama(_0x13b828);
  if (_0x50319d == "digital") {
    $(".informasi-produk").find(".produk-inpost").text("Digital");
  } else if (_0x50319d == "fisik") {
    $(".informasi-produk").find(".produk-inpost").text("Fisik");
  } else {
    $(".informasi-produk").find(".produk-inpost").text("Lainnya");
  }
  var _0x2a719e = $(this).find(".data-keterangan-produk").text();
  $(".keterangan-produk").find(".keterangan-inpost").text(_0x2a719e);
  var _0x25a8db = $(this).find(".data-voucher").text();
  if (formatNama(_0x25a8db) == "off" || _0x25a8db == '') {
    $("#box-voucher .box-voucher-wrap").html("Mohon maaf, voucher tidak tersedia diproduk ini").addClass("invalid-voucher");
  } else {
    var _0x565596 = _0x25a8db.split(":");
    var _0x30b9b6 = _0x565596[0x0];
    var _0x186a0a = _0x565596[0x1];
    if (_0x186a0a >= 0x65) {
      var _0x52afa0 = angkaToRp(_0x186a0a);
    } else {
      if (_0x186a0a < 0x64) {
        var _0x52afa0 = _0x186a0a + "%";
      }
    }
    $("#sumbit-voucher").click(function () {
      var _0x1d13e9 = $(this).parents(".productBody").find(".widget-harga-produk .item_price").attr(_0x5378(4339893, "5C)0"));
      if (_0x186a0a >= 0x65) {
        var _0xeadf1b = _0x1d13e9 - _0x186a0a;
      } else {
        if (_0x186a0a < 0x64) {
          var _0x1b5294 = Math[_0x5378(24840373, "BcP5")](_0x1d13e9 * _0x186a0a / 0x64);
          var _0xeadf1b = Math.round(_0x1d13e9 - _0x1b5294);
        }
      }
      var _0x187e90 = angkaToRp(_0xeadf1b);
      var _0x5ef80f = $("#input-vou" + _0x5378(39631029, "#pNe")).val();
      if (_0x5ef80f == _0x30b9b6) {
        if (_0x186a0a >= 0x65) {
          notification("<div class='peringatan sukses'><svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'><path d='M12 2C6.5 2 2 6.5 2 12S6.5 22 12 22 22 17.5 22 12 17.5 2 12 2M12 20C7.59 20 4 16.41 4 12S7.59 4 12 4 20 7.59 20 12 16.41 20 12 20M16.59 7.58L10 14.17L7.41 11.59L6 13L10 17L18 9L16.59 7.58Z' /></svg></div>Selamat, Anda mendapatkan potongan sebesar <b>" + angkaToRp(_0x186a0a) + "</b>, harga produk menjadi <b>" + _0x187e90 + "</b>");
        } else if (_0x186a0a < 0x64) {
          notification("<div class='peringatan sukses'><svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'><path d='M12 2C6.5 2 2 6.5 2 12S6.5 22 12 22 22 17.5 22 12 17.5 2 12 2M12 20C7.59 20 4 16.41 4 12S7.59 4 12 4 20 7.59 20 12 16.41 20 12 20M16.59 7.58L10 14.17L7.41 11.59L6 13L10 17L18 9L16.59 7.58Z' /></svg></div>" + ("Selamat, Anda mendapatkan poto" + _0x5378(20793525, "gGnn") + _0x5378(44165301, "#b[]")) + _0x186a0a + "%</b>, harga produk menjadi <b>" + _0x187e90 + "</b>");
        }
        $(this).parents(".productBody").find(".widget-harga-produk .item_price").text(_0x187e90);
        $(this).parents(".productBody")[_0x5378(22059189, "[]KN")](".ouput-voucher").addClass("item_size").text("Voucher: " + _0x30b9b6);
      } else {
        notification("<div class='peringatan gagal'><svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'><path d='M11,15H13V17H11V15M11,7H13V13H11V7M12,2C6.47,2 2,6.5 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20Z' /></svg></div>" + ("Maaf, vouc" + _0x5378(14854325, "3i2P") + "nda masuka" + "n tidak se" + _0x5378(6400181, "dApk")));
        $("#input-voucher")[_0x5378(13965493, "$q%[")]('');
        $(this).parents(".productBody").find(".output-voucher").removeClass("item_size").text('');
      }
    });
  }
  var _0x478922 = $(this).find(".data-link-produk").text();
  if (_0x478922) {
    if (_0x478922 != "off") {
      $(".belibeli-menu-tombol-beli").html("<a class='belibeli-beli-langsung' href='" + _0x478922 + "' target='_blank' rel='noopener nofollow'>Pesan Sekarang</a>");
    }
  }
  var _0x4078bb = $(this).find(".data-jumlah").text();
  $(".item_Quantity").attr("min", _0x4078bb);
  $(".item_Quantity").attr("value", _0x4078bb);
  $(".belibeli-widget-detail .min").on("click", function () {
    var _0x1bb6d3 = $(this)[_0x5378(31056568, "an)$")](_0x5378(10638008, "#pNe") + "dy")[_0x5378(12395192, "OZmz")](".item_Quantity");
    var _0x13e609 = $(this)[_0x5378(37446724, "[]KN")](".productBody").find(_0x5378(43590328, "fRDt") + "tity").val();
    var _0x98a345 = Number(_0x13e609) - 0x1;
    if (_0x98a345 <= _0x4078bb) {
      $(_0x1bb6d3).val(_0x4078bb);
    } else {
      $(_0x1bb6d3).val(_0x98a345);
    }
  });
  $(".belibeli-widget-detail .plus").on("click", function () {
    var _0x157e78 = $(this)[_0x5378(354291115, "3a1@")](".productBody").find(".item_Quantity");
    var _0x433f6b = $(this).parents(".productBody").find(".item_Quan" + _0x5378(13307307, "N4BJ")).val();
    var _0x5584f5 = Number(_0x433f6b) + 0x1;
    $(_0x157e78).val(_0x5584f5);
  });
  $(".belibeli-widget-detail .item_Quantity").on("change blur", function () {
    value = $(this).val();
    if (value <= _0x4078bb) {
      $(this)[_0x5378(24823957, "irqu")](_0x4078bb);
    }
  });
});
$(document).ready(function () {
  $(".opsi-pilihan-1, .opsi-pilihan-2, .opsi-pilihan-3, .opsi-pilihan-4").each(function () {
    if ($(this).find("li:first").attr("data-pilihan") != "off") {
      $(this).find("li:first").trigger("click");
    }
  });
  $("#voucher-produk").change(function () {
    if (this.checked == true) {
      $("#box-voucher").attr("style", "opacity:1;height:auto;padding:10px 0;transition: all 1.2s;");
    } else if (this.checked == false) {
      $("#box-voucher").attr("style", "opacity:0;height:0;padding:0;transition: all 1.2s;");
    }
  });
});
(function () {
  $(".productDescription").each(function () {
    var _0x1ff79c = $(this).find(".data-youtube").text();
    $(document).on("change", "#youtube-produk", function () {
      if (this.checked == true) {
        if (_0x1ff79c == "off") {
          notification("<div class='peringatan gagal'><svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'><path d='M11,15H13V17H11V15M11,7H13V13H11V7M12,2C6.47,2 2,6.5 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20Z' /></svg></div>Video produk tidak tersedia");
        } else {
          var _0x7de52b = "<iframe allowfullscreen=\"\" style=\"border:0\" src=\"https://www.youtube.com/embed/" + _0x1ff79c + "?rel=0&amp;autoplay=1\"></iframe>";
          var _0x386375 = "<div class='box-youtube' id='box-youtube'>";
          _0x386375 += "<button class='close-youtube'>&#215;</button>";
          _0x386375 += "<div class='youtube-wrap'>";
          _0x386375 += "<div class='frame-youtube'>" + _0x7de52b + "</div>";
          _0x386375 += "</div>";
          _0x386375 += "</div>";
          $("body").append(_0x386375);
          $("#box-youtube .close-youtube").click(function () {
            $("#box-youtube").remove();
            $("#youtube-produk").prop("checked", false);
            return false;
          });
        }
      } else {
        if (this.checked == false) {
          var _0x3b7027 = document.getElementById("box-youtube");
          if (_0x3b7027 != null) {
            $("#box-youtube").remove();
          }
        }
      }
    });
  });
})();
var d;
var view_kontakform = '';
for (d = 0x0; d < kontakform_wa.length; d++) {
  var info_data = kontakform_wa[d].name;
  var split = info_data.split(":");
  var name = split[0x0];
  var number = split[0x1].split(/[^0-9]/).join('').replace(/^[0]/, "62");
  view_kontakform += "<a class=\"informasi\" href=\"javascript:;\" title=\"Chat Whatsapp\">    <div class=\"info-chat\">        <span class=\"icon-wa\">        <svg viewBox=\"0 0 24 24\"><path d=\"M16.75,13.96C17,14.09 17.16,14.16 17.21,14.26C17.27,14.37 17.25,14.87 17,15.44C16.8,16 15.76,16.54 15.3,16.56C14.84,16.58 14.83,16.92 12.34,15.83C9.85,14.74 8.35,12.08 8.23,11.91C8.11,11.74 7.27,10.53 7.31,9.3C7.36,8.08 8,7.5 8.26,7.26C8.5,7 8.77,6.97 8.94,7H9.41C9.56,7 9.77,6.94 9.96,7.45L10.65,9.32C10.71,9.45 10.75,9.6 10.66,9.76L10.39,10.17L10,10.59C9.88,10.71 9.74,10.84 9.88,11.09C10,11.35 10.5,12.18 11.2,12.87C12.11,13.75 12.91,14.04 13.15,14.17C13.39,14.31 13.54,14.29 13.69,14.13L14.5,13.19C14.69,12.94 14.85,13 15.08,13.08L16.75,13.96M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22C10.03,22 8.2,21.43 6.65,20.45L2,22L3.55,17.35C2.57,15.8 2,13.97 2,12A10,10 0 0,1 12,2M12,4A8,8 0 0,0 4,12C4,13.72 4.54,15.31 5.46,16.61L4.5,19.5L7.39,18.54C8.69,19.46 10.28,20 12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4Z\" fill=\"currentColor\"></path></svg>        </span>        <span class=\"info-layanan\">        <span class=\"chat-label\">" + kontakform_wa[d].label + "</span>        <span class=\"chat-nama\">" + name + "</span>        </span>    </div>    <span class=\"noAdmin\">" + number + "</span></a>";
}
$(".home-chat").html(view_kontakform);
function notifError() {
  $(".datainput .validate").each(function () {
    title = $(this).attr("name");
    label = $(this).parents(".datainput");
    $("<span class=\"validasi\"><b>" + title + "</b> diperlukan</span>").appendTo(label);
  });
  $(document).on("keyup", ".datainput .validate", function () {
    if ($(this).val() != '') {
      $(this).removeClass("focus");
      $(this).parents(".datainput").find(".validasi").removeClass("show");
    }
  });
  $(document).on("click", ".datainput .validate", function () {
    if ($(this).val() == '') {
      $(this).removeClass("focus");
      $(this).parents(".datainput").find(".validasi").removeClass("show");
    }
  });
  $(document).on("change", ".datainput select", function () {
    $(this).removeClass("focus");
    $(this).parents(".datainput").find(".validasi").removeClass("show");
  });
}
function htmlregistrasi() {
  var _0x3c46fa = "<form class='html-daftar'>  <a href='" + urlHome + "'><img src='" + urlLogo + "' width='300' height='100' alt='logo'/></a>  <div class='datainput'>    <label for='Nama Lengkap'><svg viewBox='0 0 24 24'><path fill='currentColor' d='M12 3C14.21 3 16 4.79 16 7S14.21 11 12 11 8 9.21 8 7 9.79 3 12 3M16 13.54C16 14.6 15.72 17.07 13.81 19.83L13 15L13.94 13.12C13.32 13.05 12.67 13 12 13S10.68 13.05 10.06 13.12L11 15L10.19 19.83C8.28 17.07 8 14.6 8 13.54C5.61 14.24 4 15.5 4 17V21H20V17C20 15.5 18.4 14.24 16 13.54Z'/></svg><span>Nama Lengkap</span></label>    <input class='validate' id='nama' name='Nama Lengkap' placeholder='Nama Lengkap' type='text'/>  </div>  <div class='datainput'>    <label for='email'><svg viewBox='0 0 24 24'><path fill='currentColor' d='M19.07 13.88L13 19.94V22H15.06L21.12 15.93M22.7 13.58L21.42 12.3C21.32 12.19 21.18 12.13 21.04 12.13C20.89 12.14 20.75 12.19 20.65 12.3L19.65 13.3L21.7 15.3L22.7 14.3C22.89 14.1 22.89 13.78 22.7 13.58M11 18H4V8L12 13L20 8V10H22V6C22 4.9 21.1 4 20 4H4C2.9 4 2 4.9 2 6V18C2 19.1 2.9 20 4 20H11V18M20 6L12 11L4 6H20Z'/></svg><span>Email</span></label>    <input class='validate' id='email' name='Email' placeholder='Email' type='email'/>  </div>  <div class='datainput'>    <label for='password'><svg viewBox='0 0 24 24'><path fill='currentColor' d='M22,18V22H18V19H15V16H12L9.74,13.74C9.19,13.91 8.61,14 8,14A6,6 0 0,1 2,8A6,6 0 0,1 8,2A6,6 0 0,1 14,8C14,8.61 13.91,9.19 13.74,9.74L22,18M7,5A2,2 0 0,0 5,7A2,2 0 0,0 7,9A2,2 0 0,0 9,7A2,2 0 0,0 7,5Z'/></svg><span>Password</span></label>    <input class='validate' id='password' name='Password' placeholder='Password' type='password'/>    <span id='show-password' class='show-password'><svg class='icon-hidden' viewBox='0 0 24 24'><path fill='currentColor' d='M11.83,9L15,12.16C15,12.11 15,12.05 15,12A3,3 0 0,0 12,9C11.94,9 11.89,9 11.83,9M7.53,9.8L9.08,11.35C9.03,11.56 9,11.77 9,12A3,3 0 0,0 12,15C12.22,15 12.44,14.97 12.65,14.92L14.2,16.47C13.53,16.8 12.79,17 12,17A5,5 0 0,1 7,12C7,11.21 7.2,10.47 7.53,9.8M2,4.27L4.28,6.55L4.73,7C3.08,8.3 1.78,10 1,12C2.73,16.39 7,19.5 12,19.5C13.55,19.5 15.03,19.2 16.38,18.66L16.81,19.08L19.73,22L21,20.73L3.27,3M12,7A5,5 0 0,1 17,12C17,12.64 16.87,13.26 16.64,13.82L19.57,16.75C21.07,15.5 22.27,13.86 23,12C21.27,7.61 17,4.5 12,4.5C10.6,4.5 9.26,4.75 8,5.2L10.17,7.35C10.74,7.13 11.35,7 12,7Z'></path></svg><svg class='icon-show' style='display:none' viewBox='0 0 24 24'><path fill='currentColor' d='M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9M12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17M12,4.5C7,4.5 2.73,7.61 1,12C2.73,16.39 7,19.5 12,19.5C17,19.5 21.27,16.39 23,12C21.27,7.61 17,4.5 12,4.5Z'></path></svg></span>  </div>  <div class='datainput'>    <label for='currect password'><svg viewBox='0 0 24 24'><path fill='currentColor' d='M22,18V22H18V19H15V16H12L9.74,13.74C9.19,13.91 8.61,14 8,14A6,6 0 0,1 2,8A6,6 0 0,1 8,2A6,6 0 0,1 14,8C14,8.61 13.91,9.19 13.74,9.74L22,18M7,5A2,2 0 0,0 5,7A2,2 0 0,0 7,9A2,2 0 0,0 9,7A2,2 0 0,0 7,5Z'/></svg><span>Ulangi Password</span></label>    <input class='validate' id='currect-password' name='Currect Password' placeholder='Ulangi Password' type='password'/>    <span id='show-currect-password' class='show-password'><svg class='icon-hidden' viewBox='0 0 24 24'><path fill='currentColor' d='M11.83,9L15,12.16C15,12.11 15,12.05 15,12A3,3 0 0,0 12,9C11.94,9 11.89,9 11.83,9M7.53,9.8L9.08,11.35C9.03,11.56 9,11.77 9,12A3,3 0 0,0 12,15C12.22,15 12.44,14.97 12.65,14.92L14.2,16.47C13.53,16.8 12.79,17 12,17A5,5 0 0,1 7,12C7,11.21 7.2,10.47 7.53,9.8M2,4.27L4.28,6.55L4.73,7C3.08,8.3 1.78,10 1,12C2.73,16.39 7,19.5 12,19.5C13.55,19.5 15.03,19.2 16.38,18.66L16.81,19.08L19.73,22L21,20.73L3.27,3M12,7A5,5 0 0,1 17,12C17,12.64 16.87,13.26 16.64,13.82L19.57,16.75C21.07,15.5 22.27,13.86 23,12C21.27,7.61 17,4.5 12,4.5C10.6,4.5 9.26,4.75 8,5.2L10.17,7.35C10.74,7.13 11.35,7 12,7Z'></path></svg><svg class='icon-show' style='display:none' viewBox='0 0 24 24'><path fill='currentColor' d='M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9M12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17M12,4.5C7,4.5 2.73,7.61 1,12C2.73,16.39 7,19.5 12,19.5C17,19.5 21.27,16.39 23,12C21.27,7.61 17,4.5 12,4.5Z'></path></svg></span>  </div></form><div id='loader' class='center'></div><div id='load-sukses' class='center'></div><button id='registrasi' class='button-submit center' type='button'>Daftar</button><div class='box-or'><div class='border-or'></div><p class='text-or'>OR</p><div class='border-or'></div><button class='button-google center' type='button' id='login-google'><svg enable-background='new 0 0 24 24' viewBox='0 0 24 24' xml:space='preserve' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'><g><path d='M12,5c1.6167603,0,3.1012573,0.5535278,4.2863159,1.4740601l3.637146-3.4699707   C17.8087769,1.1399536,15.0406494,0,12,0C7.392395,0,3.3966675,2.5999146,1.3858032,6.4098511l4.0444336,3.1929321   C6.4099731,6.9193726,8.977478,5,12,5z' fill='#F44336'></path><path d='M23.8960571,13.5018311C23.9585571,13.0101929,24,12.508667,24,12   c0-0.8578491-0.093689-1.6931763-0.2647705-2.5H12v5h6.4862061c-0.5247192,1.3637695-1.4589844,2.5177612-2.6481934,3.319458   l4.0594482,3.204834C22.0493774,19.135437,23.5219727,16.4903564,23.8960571,13.5018311z' fill='#2196F3'></path><path d='M5,12c0-0.8434448,0.1568604-1.6483765,0.4302368-2.3972168L1.3858032,6.4098511   C0.5043335,8.0800171,0,9.9801636,0,12c0,1.9972534,0.4950562,3.8763428,1.3582153,5.532959l4.0495605-3.1970215   C5.1484375,13.6044312,5,12.8204346,5,12z' fill='#FFC107'></path><path d='M12,19c-3.0455322,0-5.6295776-1.9484863-6.5922241-4.6640625L1.3582153,17.532959   C3.3592529,21.3734741,7.369812,24,12,24c3.027771,0,5.7887573-1.1248169,7.8974609-2.975708l-4.0594482-3.204834   C14.7412109,18.5588989,13.4284058,19,12,19z' fill='#00B060'></path><path d='M12,23.75c-3.5316772,0-6.7072754-1.4571533-8.9524536-3.7786865C5.2453613,22.4378052,8.4364624,24,12,24   c3.5305786,0,6.6952515-1.5313721,8.8881226-3.9592285C18.6495972,22.324646,15.4981079,23.75,12,23.75z' opacity='0.1'></path><polygon opacity='0.1' points='12,14.25 12,14.5 18.4862061,14.5 18.587492,14.25  '></polygon><path d='M23.9944458,12.1470337C23.9952393,12.0977783,24,12.0493774,24,12   c0-0.0139771-0.0021973-0.0274658-0.0022583-0.0414429C23.9970703,12.0215454,23.9938965,12.0838013,23.9944458,12.1470337z' fill='#E6E6E6'></path><path d='M12,9.5v0.25h11.7855721c-0.0157471-0.0825195-0.0329475-0.1680908-0.0503426-0.25H12z' fill='#FFFFFF' opacity='0.2'></path><linearGradient gradientUnits='userSpaceOnUse' x1='0' x2='24' y1='12' y2='12'><stop offset='0' style='stop-color:#FFFFFF;stop-opacity:0.2'></stop><stop offset='1' style='stop-color:#FFFFFF;stop-opacity:0'></stop></linearGradient><path d='M23.7352295,9.5H12v5h6.4862061C17.4775391,17.121582,14.9771729,19,12,19   c-3.8659668,0-7-3.1340332-7-7c0-3.8660278,3.1340332-7,7-7c1.4018555,0,2.6939087,0.4306641,3.7885132,1.140686   c0.1675415,0.1088867,0.3403931,0.2111206,0.4978027,0.333374l3.637146-3.4699707L19.8414307,2.940979   C17.7369385,1.1170654,15.00354,0,12,0C5.3725586,0,0,5.3725586,0,12c0,6.6273804,5.3725586,12,12,12   c6.1176758,0,11.1554565-4.5812378,11.8960571-10.4981689C23.9585571,13.0101929,24,12.508667,24,12   C24,11.1421509,23.906311,10.3068237,23.7352295,9.5z' fill='url(#SVGID_1_)'></path><path d='M15.7885132,5.890686C14.6939087,5.1806641,13.4018555,4.75,12,4.75c-3.8659668,0-7,3.1339722-7,7   c0,0.0421753,0.0005674,0.0751343,0.0012999,0.1171875C5.0687437,8.0595093,8.1762085,5,12,5   c1.4018555,0,2.6939087,0.4306641,3.7885132,1.140686c0.1675415,0.1088867,0.3403931,0.2111206,0.4978027,0.333374   l3.637146-3.4699707l-3.637146,3.2199707C16.1289062,6.1018066,15.9560547,5.9995728,15.7885132,5.890686z' opacity='0.1'></path><path d='M12,0.25c2.9750366,0,5.6829224,1.0983887,7.7792969,2.8916016l0.144165-0.1375122   l-0.110014-0.0958166C17.7089558,1.0843592,15.00354,0,12,0C5.3725586,0,0,5.3725586,0,12   c0,0.0421753,0.0058594,0.0828857,0.0062866,0.125C0.0740356,5.5558472,5.4147339,0.25,12,0.25z' fill='#FFFFFF' opacity='0.2'></path></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g></svg>Login with Google</button></div><p class='font-12 center'>Sudah punya akun? <a href='" + urlLogin + "'><b>Login Sekarang</b></a></p><p class='font-12 center' style='font-size:11px;'>dengan menekan tombol daftar anda mengakui bahwa Anda telah membaca dan memahami, dan setujui semua <a href='" + urlKebijakan + "'>Syarat Ketentuan</a> dan <a href='" + urlPrivasi + "'>Kebijakan Privasi</a> yang berlaku</p>  ";
  $("#form-registrasi").html("<style>#wrapper,.post-body img,body{position:relative}body{background:#edf2f7;margin-top:10%;margin-bottom:10%}#belibeli-halaman-kredit,#belibeli-icon-notifikasi,#belibeli-widget-button-mobile,#content-wrap-page h1,#footer-wrap,#header-belibeli-navkirikanan,#header-belibeli-utama,.belibeli-garis-bawah,a.belibeli-whatsapp-show-chat{display:none!important}#content-wrap-page{padding:0}#wrapper{padding:25px;background-color:#fff;border-radius:.5rem;max-width:400px;width:80%;box-shadow:-8px 12px 18px 0 rgb(25 42 70 / 13%);overflow:hidden;margin:auto}.post-body img{display:block;margin:0 auto;width:90%;max-width:200px;height:auto}</style>" + _0x3c46fa);
}
function htmllogin() {
  var _0x53a4eb = _0x5378(23794495, "#pNe") + _0x5378(35730239, "vaKW") + _0x5378(652283213, "6u5H") + ",body{posi" + _0x5378(663686477, "dgE8") + "ive}body{b" + "ackground:" + "#edf2f7;ma" + "rgin-top:1" + "0%;margin-" + "bottom:10%" + "}#belibeli" + _0x5378(45990719, "Zp[M") + "redit,#bel" + "ibeli-icon" + _0x5378(21590847, ")SjY") + "i,#belibel" + "i-widget-b" + _0x5378(662310221, "H1*B") + "le,#conten" + "t-wrap-pag" + _0x5378(378604877, "7ly)") + "er-wrap,#h" + "eader-beli" + _0x5378(8188735, "QMi[") + _0x5378(22807359, "*J]!") + "eader-beli" + "beli-utama" + ",.belibeli" + _0x5378(22336319, "(]6h") + "ah,a.belib" + "eli-whatsa" + "pp-show-ch" + "at{display" + _0x5378(420941133, "4bEN") + _0x5378(188616013, "[]KN") + "tent-wrap-" + "page{paddi" + "ng:0}#wrap" + "per{paddin" + "g:25px;bac" + "kground-co" + _0x5378(19637055, "5C)0") + "order-radi" + _0x5378(48583487, "3i2P") + "ax-width:4" + _0x5378(23233343, "%U#@") + _0x5378(23057215, "BcP5") + "hadow:-8px" + _0x5378(654576973, "hI0%") + " 0 rgb(25 " + "42 70 / 13" + "%);overflo" + "w:hidden;m" + _0x5378(27149119, "4bEN") + "}.post-bod" + _0x5378(408882509, "Yd]5") + _0x5378(28259135, ")SjY") + "margin:0 a" + "uto;width:" + _0x5378(10044223, "BcP5") + _0x5378(4248383, "an)$") + _0x5378(609029453, "atxO") + _0x5378(544869709, "%U#@");
  var _0x51a972 = "<form class='html-daftar'>  <a href='" + urlHome + "'><img src='" + urlLogo + (_0x5378(29953357, "vaKW") + "00' height" + _0x5378(21611327, "cw1A") + "='logo'/><" + "/a>  <div " + "class='dat" + "ainput'>  " + _0x5378(11473727, "aX^M") + _0x5378(721423693, "QMi[") + "><svg view" + "Box='0 0 2" + _0x5378(648547661, "!#!f") + "h fill='cu" + _0x5378(40633151, "005A") + _0x5378(633212237, "QZlP") + "7 13.88L13" + _0x5378(45077311, "4bEN") + "15.06L21.1" + _0x5378(326569293, "gGnn") + ".7 13.58L2" + "1.42 12.3C" + "21.32 12.1" + "9 21.18 12" + _0x5378(2929471, "aX^M") + _0x5378(11866943, "H1*B") + _0x5378(12104511, "hI0%") + _0x5378(736562509, "(]6h") + "20.65 12.3" + "L19.65 13." + _0x5378(13700429, "RAO[") + "3L22.7 14." + "3C22.89 14" + _0x5378(10003263, "BcP5") + _0x5378(412683597, "an)$") + "13.58M11 1" + _0x5378(27898687, "IHZV") + _0x5378(204410189, "kpno") + "22V6C22 4." + "9 21.1 4 2" + "0 4H4C2.9 " + "4 2 4.9 2 " + _0x5378(5739327, "QC&8") + _0x5378(279514445, "%U#@") + " 20H11V18M" + "20 6L12 11" + _0x5378(24965951, "fRDt") + "></svg><sp" + _0x5378(643632461, "gGnn") + "span></lab" + "el>    <in" + "put class=" + "'validate'" + " id='email" + "' name='Em" + "ail' place" + "holder='Em" + _0x5378(46752575, "fRDt") + "'email'/> " + " </div>  <" + "div class=" + "'datainput" + _0x5378(485363021, "TYxK") + _0x5378(337907021, "QZlP") + _0x5378(653331789, "cw1A") + _0x5378(27594061, "[hmp") + "='0 0 24 2" + "4'><path f" + "ill='curre" + "ntColor' d" + _0x5378(303041869, "3i2P") + _0x5378(43578175, "dgE8") + _0x5378(15954751, "6u5H") + "4,13.74C9." + "19,13.91 8" + _0x5378(346885453, "Yd]5") + "4A6,6 0 0," + "1 2,8A6,6 " + "0 0,1 8,2A" + "6,6 0 0,1 " + "14,8C14,8." + "61 13.91,9" + ".19 13.74," + _0x5378(440143181, "%U#@") + "M7,5A2,2 0" + _0x5378(114298189, "BcP5") + _0x5378(25154367, "QMi[") + _0x5378(11633471, "!#!f") + ",0 9,7A2,2" + _0x5378(559615309, "#pNe") + "Z'/></svg>" + "<span>Pass" + "word</span" + _0x5378(141299021, "Yd]5") + "   <input " + "class='val" + _0x5378(47051583, "Yd]5") + "'password'" + " name='Pas" + "sword' pla" + "ceholder='" + ("Password' type='password'/>    <span id='show-password' class='show-pa" + _0x5378(13045069, "aX^M") + "vg class='" + "icon-hidde" + "n' viewBox" + "='0 0 24 2" + "4'><path f" + "ill='curre" + "ntColor' d" + _0x5378(25576255, "tWQ3") + "L15,12.16C" + _0x5378(588975437, "TYxK") + "5,12.05 15" + ",12A3,3 0 " + _0x5378(6796095, "71PU") + "1.94,9 11." + "89,9 11.83" + ",9M7.53,9." + "8L9.08,11." + _0x5378(109841741, "71PU") + _0x5378(482282829, "BeDr") + _0x5378(43606847, "hI0%") + " 0 0,0 12," + "15C12.22,1" + _0x5378(24302399, "IHZV") + _0x5378(2122559, "BeDr") + _0x5378(8721215, "irqu") + _0x5378(93850957, "#pNe") + "53,16.8 12" + _0x5378(176753997, "cw1A") + "17A5,5 0 0" + ",1 7,12C7," + "11.21 7.2," + _0x5378(36188991, "Zp[M") + ",9.8M2,4.2" + "7L4.28,6.5" + "5L4.73,7C3" + _0x5378(28984127, "BcP5") + "78,10 1,12" + _0x5378(19112767, "5C)0") + _0x5378(12182335, "an)$") + _0x5378(358550861, "7ly)") + _0x5378(18940735, "QZlP") + ".03,19.2 1" + "6.38,18.66" + "L16.81,19." + _0x5378(17359679, "k59^") + "2L21,20.73" + _0x5378(265882957, "#b[]") + ",7A5,5 0 0" + ",1 17,12C1" + "7,12.64 16" + ".87,13.26 " + "16.64,13.8" + "2L19.57,16" + _0x5378(12825407, ")SjY") + _0x5378(33178431, "005A") + ",13.86 23," + "12C21.27,7" + ".61 17,4.5" + _0x5378(48079679, "vaKW") + ".6,4.5 9.2" + "6,4.75 8,5" + _0x5378(34927423, "005A") + ".35C10.74," + "7.13 11.35" + _0x5378(367398221, "[hmp") + _0x5378(27657023, "aX^M") + _0x5378(642911565, "*J]!") + "ass='icon-" + "show' styl" + _0x5378(36860735, "4bEN") + _0x5378(8260941, "OZmz") + "wBox='0 0 " + "24 24'><pa" + _0x5378(319884621, "%U#@") + _0x5378(39772991, "3i2P") + _0x5378(25568063, "3i2P") + "9A3,3 0 0," + "0 9,12A3,3" + _0x5378(743116109, "[]KN") + "15A3,3 0 0" + ",0 15,12A3" + _0x5378(5522239, "3a1@") + _0x5378(42623807, "[]KN") + _0x5378(14926655, "[TlR") + _0x5378(48194367, "*J]!") + _0x5378(46224191, "OZmz") + "5,5 0 0,1 " + "17,12A5,5 " + "0 0,1 12,1" + "7M12,4.5C7" + _0x5378(40100671, "gGnn") + _0x5378(47518527, "&ihF")) + (_0x5378(8176447, "3a1@") + _0x5378(234097997, "an)$") + ",19.5C17,1" + "9.5 21.27," + "16.39 23,1" + _0x5378(104795469, "[TlR") + "61 17,4.5 " + _0x5378(36016959, "$q%[") + "/path></sv" + "g></span> " + " </div>  <" + "p class='f" + "ont-12 rig" + "ht'><a hre" + "f='")) + urlReset + (_0x5378(4182847, "atxO") + _0x5378(3011391, "vaKW") + _0x5378(21787455, "IHZV") + _0x5378(163515725, "%U#@") + "loader' cl" + _0x5378(666438989, "cw1A") + _0x5378(19129151, "atxO") + "div id='lo" + _0x5378(675745101, "cw1A") + _0x5378(137629005, "N4BJ") + _0x5378(319294797, "7ly)") + _0x5378(3588927, "irqu") + "id='login'" + " class='bu" + _0x5378(517344589, "H1*B") + _0x5378(92147021, "[]KN") + "type='butt" + "on'>Login<" + _0x5378(26870591, "[]KN") + "iv class='" + _0x5378(48309055, "kpno") + "iv class='" + _0x5378(14000959, "NnbG") + "></div><p " + "class='tex" + _0x5378(43868991, "BeDr") + _0x5378(20267839, "dApk") + "ss='border" + "-or'></div" + _0x5378(309595469, "7ly)") + "lass='butt" + _0x5378(246811981, "#pNe") + "center' ty" + "pe='button" + _0x5378(110431565, "BeDr") + "n-google'>" + "<svg enabl" + "e-backgrou" + "nd='new 0 " + "0 24 24' v" + _0x5378(8139583, "irqu") + "0 24 24' x" + "ml:space='" + _0x5378(10236735, "NnbG") + "xmlns='htt" + _0x5378(21295935, "!#!f") + ".org/2000/" + "svg' xmlns" + ":xlink='ht" + "tp://www.w" + "3.org/1999" + "/xlink'><g" + _0x5378(638717261, "[]KN") + "M12,5c1.61" + "67603,0,3." + _0x5378(656543053, "vaKW") + _0x5378(6767423, "N4BJ") + "2863159,1." + "4740601l3." + "637146-3.4" + "699707   C" + "17.8087769" + ",1.1399536" + ",15.040649" + "4,0,12,0C7" + _0x5378(34902847, "N4BJ") + "3.3966675," + _0x5378(3736383, "%U#@") + _0x5378(605883725, "BcP5") + "6.4098511l" + "4.0444336," + _0x5378(258149709, "BcP5") + _0x5378(604704077, "005A") + "31,6.91937" + "26,8.97747" + "8,5,12,5z'" + " fill='#F4" + "4336'></pa" + _0x5378(13628223, "hI0%") + _0x5378(21349183, "QMi[") + _0x5378(456658253, "&ihF") + "8311C23.95" + "85571,13.0" + _0x5378(342429005, "vaKW") + "12.508667," + "24,12   c0" + "-0.8578491" + "-0.093689-" + "1.6931763-" + "0.2647705-" + "2.5H12v5h6" + ".4862061c-" + "0.5247192," + "1.3637695-" + "1.4589844," + "2.5177612-" + "2.6481934," + _0x5378(181865805, "vaKW") + " l4.059448" + "2,3.204834" + ("C22.0493774,19.135437,23.5219727,16.4903564,23.896" + _0x5378(35173183, "dgE8") + "18311z' fi" + "ll='#2196F" + "3'></path>" + "<path d='M" + "5,12c0-0.8" + "434448,0.1" + "568604-1.6" + _0x5378(515771725, "5C)0") + _0x5378(540806477, "7ly)") + "972168L1.3" + _0x5378(444206413, "rQo9") + "098511   C" + _0x5378(481955149, "NnbG") + _0x5378(695274829, "H1*B") + "0,9.980163" + "6,0,12c0,1" + ".9972534,0" + _0x5378(266407245, "$q%[") + ".8763428,1" + _0x5378(551226701, "NnbG") + ".532959l4." + "0495605-3." + "1970215   " + "C5.1484375" + ",13.604431" + "2,5,12.820" + "4346,5,12z" + "' fill='#F" + "FC107'></p" + _0x5378(280497485, "k59^") + _0x5378(33362751, "dApk") + "-3.0455322" + ",0-5.62957" + _0x5378(33465151, "N4BJ") + "63-6.59222" + _0x5378(478809421, "7ly)") + "25L1.35821" + _0x5378(32195391, "QC&8") + "59   C3.35" + "92529,21.3" + "734741,7.3" + "69812,24,1" + _0x5378(42967871, "OZmz") + "771,0,5.78" + _0x5378(707136845, "6u5H") + "48169,7.89" + "74609-2.97" + _0x5378(44688191, "#b[]") + "94482-3.20" + "4834   C14" + _0x5378(399707469, "[]KN") + _0x5378(129502541, "QZlP") + "13.4284058" + _0x5378(734268749, "H1*B") + "' fill='#0" + "0B060'></p" + _0x5378(41902911, "BcP5") + _0x5378(39572287, "5C)0") + _0x5378(381226317, "dgE8") + "772,0-6.70" + _0x5378(8868671, "QMi[") + "71533-8.95" + _0x5378(16978751, "!#!f") + "86865C5.24" + "53613,22.4" + "378052,8.4" + "364624,24," + "12,24   c3" + ".5305786,0" + ",6.6952515" + "-1.5313721" + ",8.8881226" + "-3.9592285" + _0x5378(29700927, "dApk") + _0x5378(260443469, "BeDr") + "6,15.49810" + _0x5378(22613325, "#pNe") + "2,23.75z' " + "opacity='0" + _0x5378(29930303, "QMi[") + "><polygon " + "opacity='0" + ".1' points" + "='12,14.25" + " 12,14.5 1" + "8.4862061," + "14.5 18.58" + "7492,14.25" + "  '></poly" + _0x5378(23532351, "(]6h") + "d='M23.994" + _0x5378(45904703, "dgE8") + "70337C23.9" + "952393,12.") + ("0977783,24,12.0493774,24,12   c0-0.0139771-0.00219" + _0x5378(10670911, "#pNe") + _0x5378(14725951, "RAO[") + _0x5378(8835903, "[hmp") + _0x5378(19206975, "71PU") + "703,12.021" + "5454,23.99" + "38965,12.0" + _0x5378(396823885, "an)$") + _0x5378(168103245, "tWQ3") + ".1470337z'" + " fill='#E6" + "E6E6'></pa" + "th><path d" + "='M12,9.5v" + "0.25h11.78" + "55721c-0.0" + "157471-0.0" + _0x5378(22242111, "4bEN") + "329475-0.1" + "680908-0.0" + _0x5378(12677951, "hI0%") + _0x5378(33358655, "OZmz") + "l='#FFFFFF" + "' opacity=" + "'0.2'></pa" + "th><linear" + "Gradient g" + "radientUni" + _0x5378(352718157, "QZlP") + "aceOnUse' " + "x1='0' x2=" + "'24' y1='1" + _0x5378(2999103, "[hmp") + "><stop off" + _0x5378(556600653, "4bEN") + _0x5378(13329215, "BeDr") + "color:#FFF" + "FFF;stop-o" + "pacity:0.2" + _0x5378(113708365, "TYxK") + "stop offse" + "t='1' styl" + _0x5378(539823437, ")SjY") + "lor:#FFFFF" + _0x5378(23843647, "7ly)") + _0x5378(34374463, "3a1@") + _0x5378(33428287, "geby") + "earGradien" + "t><path d=" + "'M23.73522" + "95,9.5H12v" + _0x5378(30663487, "#pNe") + "1C17.47753" + "91,17.1215" + "82,14.9771" + "729,19,12," + _0x5378(517410125, "Zp[M") + "659668,0-7" + _0x5378(65539405, "fRDt") + "-7-7c0-3.8" + "660278,3.1" + "340332-7,7" + _0x5378(47821631, "4bEN") + "55,0,2.693" + "9087,0.430" + "6641,3.788" + "5132,1.140" + "686   c0.1" + "675415,0.1" + "088867,0.3" + _0x5378(37344063, "Zp[M") + _0x5378(9696063, "tWQ3") + _0x5378(717688141, "IHZV") + "33374l3.63" + "7146-3.469" + "9707L19.84" + "14307,2.94" + "0979   C17" + ".7369385,1" + _0x5378(19366719, "BeDr") + "5.00354,0," + "12,0C5.372" + "5586,0,0,5" + _0x5378(346623309, "3a1@") + ",12c0,6.62" + "73804,5.37" + _0x5378(693112141, "$q%[") + _0x5378(28332863, "[TlR") + _0x5378(515444045, "OZmz") + "11.1554565" + _0x5378(34034495, "H1*B") + _0x5378(751832397, "tWQ3") + "1-10.49816" + "89C23.9585" + _0x5378(48657215, "hI0%")) + (_0x5378(36381503, "irqu") + ".508667,24" + _0x5378(30540607, "kpno") + _0x5378(40612671, "[]KN") + ",23.906311" + _0x5378(6098253, "dgE8") + "7,23.73522" + "95,9.5z' f" + "ill='url(#" + "SVGID_1_)'" + "></path><p" + "ath d='M15" + _0x5378(216206669, "aX^M") + ".890686C14" + ".6939087,5" + ".1806641,1" + _0x5378(369429837, "BcP5") + _0x5378(674958669, "atxO") + "75c-3.8659" + "668,0-7,3." + "1339722-7," + "7   c0,0.0" + _0x5378(347147597, "H1*B") + "005674,0.0" + _0x5378(46009677, "fRDt") + _0x5378(38863679, "%U#@") + _0x5378(42910527, "irqu") + "687437,8.0" + _0x5378(40239935, "4bEN") + "762085,5,1" + _0x5378(18813759, "dApk") + "018555,0,2" + _0x5378(48743231, "[]KN") + ".4306641,3" + _0x5378(19817279, "5C)0") + _0x5378(10412863, "Yd]5") + _0x5378(11711295, "3i2P") + _0x5378(241110349, "hI0%") + "3403931,0." + "2111206,0." + "4978027,0." + "333374   l" + _0x5378(607849805, "TYxK") + ".4699707l-" + "3.637146,3" + ".2199707C1" + _0x5378(83561805, "atxO") + "6.1018066," + _0x5378(557649229, "3i2P") + ",5.9995728" + ",15.788513" + "2,5.890686" + "z' opacity" + _0x5378(716115277, "BeDr") + _0x5378(674368845, "#b[]") + "d='M12,0.2" + _0x5378(34087743, "aX^M") + "6,0,5.6829" + "224,1.0983" + "887,7.7792" + _0x5378(21709631, "IHZV") + "016l0.1441" + _0x5378(28910399, "#pNe") + "22   l-0.1" + _0x5378(140905805, "TYxK") + _0x5378(474287437, "k59^") + "089558,1.0" + "843592,15." + _0x5378(13841215, "5C)0") + ",0C5.37255" + _0x5378(220204365, "3i2P") + _0x5378(557583693, "dgE8") + _0x5378(398462285, "&ihF") + "421753,0.0" + _0x5378(17212223, "dApk") + _0x5378(667946317, "hI0%") + _0x5378(566889805, "TYxK") + _0x5378(285216077, "#b[]") + _0x5378(193989965, "N4BJ") + _0x5378(289934669, "005A") + _0x5378(354291021, "hI0%") + _0x5378(25981759, "atxO") + "ll='#FFFFF" + "F' opacity" + "='0.2'></p" + "ath></g><g" + "></g><g></" + _0x5378(42054463, "IHZV") + "g></g><g><" + "/g><g></g>" + _0x5378(29000511, "geby") + "</g><g></g" + _0x5378(24120653, "3a1@") + _0x5378(41356621, "QMi[") + "g><g></g><" + "g></g><g><" + "/g></svg>L" + _0x5378(1696575, "7ly)") + _0x5378(281677133, "rQo9") + _0x5378(2700095, "QMi[")) + ("><p class='font-12 center'>Belum punya a" + _0x5378(418843981, "hI0%") + "ef='")) + urlRegistrasi + ("'><b>Daftar Sekarang</b></a></p><p class" + _0x5378(34213197, "NnbG") + _0x5378(102567245, ")SjY") + _0x5378(44512063, "%U#@") + _0x5378(7408973, "&ihF") + _0x5378(686689613, "#pNe") + " mengakui " + _0x5378(46777151, "[hmp") + " telah mem" + "baca dan m" + "emahami, d" + "an setujui" + " semua <a " + "href='") + urlKebijakan + ("'>Syarat Ketentuan</" + _0x5378(675679565, "BeDr") + "href='") + urlPrivasi + "'>Kebijakan Privasi</a> yang berlaku</p>  ";
  $(_0x5378(14050111, "rQo9") + "n").html(_0x53a4eb + _0x51a972);
}
function htmlreset() {
  var _0x5ea1d4 = "<form class='html-reset'>  <a href='" + urlHome + "'><img src='" + urlLogo + "' width='300' height='100' alt='logo'/></a>  <div class='datainput'>    <label for='email'><svg viewBox='0 0 24 24'><path fill='currentColor' d='M19.07 13.88L13 19.94V22H15.06L21.12 15.93M22.7 13.58L21.42 12.3C21.32 12.19 21.18 12.13 21.04 12.13C20.89 12.14 20.75 12.19 20.65 12.3L19.65 13.3L21.7 15.3L22.7 14.3C22.89 14.1 22.89 13.78 22.7 13.58M11 18H4V8L12 13L20 8V10H22V6C22 4.9 21.1 4 20 4H4C2.9 4 2 4.9 2 6V18C2 19.1 2.9 20 4 20H11V18M20 6L12 11L4 6H20Z'/></svg><span>Email</span></label>    <input class='validate' id='email' name='Email' placeholder='Email' type='email'/>  </div></form><div id='loader' class='center'></div><div id='load-sukses' class='center'></div><button id='reset-password' class='button-submit center' type='button'>Reset</button>  ";
  $("#html-reset").html("<style>#wrapper,.post-body img,body{position:relative}body{background:#edf2f7;margin-top:10%;margin-bottom:10%}#belibeli-halaman-kredit,#belibeli-icon-notifikasi,#belibeli-widget-button-mobile,#content-wrap-page h1,#footer-wrap,#header-belibeli-navkirikanan,#header-belibeli-utama,.belibeli-garis-bawah,a.belibeli-whatsapp-show-chat{display:none!important}#content-wrap-page{padding:0}#wrapper{padding:25px;background-color:#fff;border-radius:.5rem;max-width:400px;width:80%;box-shadow:-8px 12px 18px 0 rgb(25 42 70 / 13%);overflow:hidden;margin:auto}.post-body img{display:block;margin:0 auto;width:90%;max-width:200px;height:auto}</style>" + _0x5ea1d4);
}
var checkRegistrasi = document.getElementById("form-registrasi");
if (checkRegistrasi != null) {
  htmlregistrasi();
  $("#show-password").click(function () {
    showPassword("password");
    $(this).find("svg").toggle("fast");
    return false;
  });
  $("#show-currect-password").click(function () {
    showPassword("currect-password");
    $(this).find("svg").toggle("fast");
    return false;
  });
  $("#registrasi").click(function () {
    var _0x5b04e5 = $("#nama").val();
    var _0x3a8a4e = $("#email").val();
    var _0xb69d5d = $("#password")[_0x5378(33382972, "6u5H")]();
    var _0x3fdde7 = $("#currect-password").val();
    if (_0x5b04e5 == '') {
      notification("<div class='peringatan gagal'><svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'><path d='M11,15H13V17H11V15M11,7H13V13H11V7M12,2C6.47,2 2,6.5 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20Z' /></svg></div>" + ("Nama Wajib" + _0x5378(46268988, "RAO[")));
      return false;
    } else {
      if (_0x3a8a4e == '') {
        notification("<div class='peringatan gagal'><svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'><path d='M11,15H13V17H11V15M11,7H13V13H11V7M12,2C6.47,2 2,6.5 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20Z' /></svg></div>Email Wajib Diisi");
        return false;
      } else {
        if (_0xb69d5d == '') {
          notification("<div class='peringatan gagal'><svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'><path d='M11,15H13V17H11V15M11,7H13V13H11V7M12,2C6.47,2 2,6.5 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20Z' /></svg></div>Password Wajib Diisi");
          return false;
        } else {
          return _0xb69d5d != _0x3fdde7 ? (notification("<div class='peringatan gagal'><svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'><path d='M11,15H13V17H11V15M11,7H13V13H11V7M12,2C6.47,2 2,6.5 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20Z' /></svg></div>" + (_0x5378(15422012, "BcP5") + "idak sama")), false) : ($(_0x5378(33350204, "k59^")).show(), $("#load-sukses").hide(), $("#load-sukses").removeClass("sukses"), $("#load-sukses").removeClass("gagal"), auth.createUserWithEmailAndPassword(_0x3a8a4e, _0xb69d5d).then(_0x2f4995 => {
            $(_0x5378(2937774686780, "aX^M")).hide();
            var _0x54b5ef = _0x2f4995.user;
            var _0x40a6df = _0x54b5ef.email;
            var _0x48fb16 = _0x54b5ef.emailVerified;
            var _0x12bf22 = simpleBliSetting["Link Foto Profile"];
            _0x54b5ef.updateProfile({
              "displayName": _0x5b04e5,
              "photoURL": _0x12bf22
            });
            db.collection("datausers").add({
              "nama": _0x5b04e5,
              "email": _0x40a6df,
              "hp": null,
              "foto": null,
              "alamat": null,
              "status": "user"
            }).then(_0x1f7044 => {
              if (_0x48fb16 == false) {
                auth.currentUser.sendEmailVerification().then(() => {
                  $("#load-sukses").addClass("sukses").html("Registrasi akun berhasil dibuat, lihat Pesan masuk pada Email Anda untuk verifikasi Akun ").show();
                  notification("<div class='peringatan sukses'><svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'><path d='M12 2C6.5 2 2 6.5 2 12S6.5 22 12 22 22 17.5 22 12 17.5 2 12 2M12 20C7.59 20 4 16.41 4 12S7.59 4 12 4 20 7.59 20 12 16.41 20 12 20M16.59 7.58L10 14.17L7.41 11.59L6 13L10 17L18 9L16.59 7.58Z' /></svg></div>Lihat Pesan masuk pada Email Anda untuk verifikasi Akun");
                  setTimeout(function () {
                    window.location.href = urlProfile;
                  }, 0x1388);
                });
              }
            })["catch"](_0x466548 => {
              $("#load-sukses").addClass("gagal").html(_0x466548.message).show();
            });
          })["catch"](_0x54477b => {
            $("#loader").hide();
            $("#load-sukses").addClass("gagal").html(_0x54477b.message).show();
          }), false);
        }
      }
    }
  });
}
var checkLogin = document.getElementById("form-login");
if (checkLogin != null) {
  htmllogin();
  $("#show-password").click(function () {
    showPassword("password");
    $(this).find("svg").toggle("fast");
    return false;
  });
  $("#login").click(function () {
    var _0x45d843 = $("#email").val();
    var _0xf8f36e = $("#password").val();
    if (_0x45d843 == '') {
      notification("<div class='peringatan gagal'><svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'><path d='M11,15H13V17H11V15M11,7H13V13H11V7M12,2C6.47,2 2,6.5 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20Z' /></svg></div>Email diperlukan");
      return false;
    } else {
      return _0xf8f36e == '' ? (notification("<div class='peringatan gagal'><svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'><path d='M11,15H13V17H11V15M11,7H13V13H11V7M12,2C6.47,2 2,6.5 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20Z' /></svg></div>Password diperlukan"), false) : ($("#loader").show(), $("#load-sukses").hide(), $("#load-sukses").removeClass("sukses"), $("#load-sukses").removeClass("gagal"), firebase.auth().signInWithEmailAndPassword(_0x45d843, _0xf8f36e).then(_0x1de6a5 => {
        $("#loader").hide();
        $("#load-sukses").addClass("sukses").html("Berhasil Login").show();
        setTimeout(function () {
          window.location.href = urlProfile;
        }, 0xbb8);
      })["catch"](_0x3da58f => {
        $("#loader").hide();
        var _0x2bc157 = _0x3da58f.message;
        $("#load-sukses").addClass("gagal").html(_0x2bc157).show();
      }), false);
    }
  });
}
if (checkRegistrasi != null || checkLogin != null) {
  $("#login-google").click(function () {
    var _0x313bfb = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(_0x313bfb).then(_0x536f54 => {})["catch"](_0x3eb101 => {});
  });
}
var htmlReset = document.getElementById("html-reset");
if (htmlReset) {
  htmlreset();
  $("#reset-password").click(function () {
    var _0x293273 = $("#email").val();
    if (_0x293273 == '') {
      notification("<div class='peringatan gagal'><svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'><path d='M11,15H13V17H11V15M11,7H13V13H11V7M12,2C6.47,2 2,6.5 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20Z' /></svg></div>Email diperlukan");
      return false;
    } else {
      $("#loader").show();
      $("#load-sukses").hide();
      $("#load-sukses").removeClass("sukses");
      $("#load-sukses").removeClass("gagal");
      firebase.auth().sendPasswordResetEmail(_0x293273).then(() => {
        $("#loader").hide();
        $("#load-sukses").addClass("sukses").html("Silahkan cek email Anda untuk Reset Password").show();
        notification("<div class='peringatan sukses'><svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'><path d='M12 2C6.5 2 2 6.5 2 12S6.5 22 12 22 22 17.5 22 12 17.5 2 12 2M12 20C7.59 20 4 16.41 4 12S7.59 4 12 4 20 7.59 20 12 16.41 20 12 20M16.59 7.58L10 14.17L7.41 11.59L6 13L10 17L18 9L16.59 7.58Z' /></svg></div>Silahkan cek email Anda untuk Reset Password");
        setTimeout(function () {
          window.location.href = urlLogin;
        }, 0x1388);
      })["catch"](_0x4cdef0 => {
        $("#loader").hide();
        $("#load-sukses").addClass("gagal").html("Email Anda tidak terdaftar").show();
        notification("<div class='peringatan gagal'><svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'><path d='M11,15H13V17H11V15M11,7H13V13H11V7M12,2C6.47,2 2,6.5 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20Z' /></svg></div>Email Anda tidak terdaftar");
      });
    }
  });
}
function opsiLogin(_0x49b73b) {
  var _0x4bb692 = '';
  _0x4bb692 += "<ul class='menu-profile'>";
  _0x4bb692 += "<li id='darkmode'><input class='toggle-dark' type='checkbox'/><span>Dark Mode</span></li>";
  if (_0x49b73b == "admin") {
    _0x4bb692 += "<li><a href='" + urlProfile + "'><svg viewBox='0 0 24 24'><path d='M12,16A3,3 0 0,1 9,13C9,11.88 9.61,10.9 10.5,10.39L20.21,4.77L14.68,14.35C14.18,15.33 13.17,16 12,16M12,3C13.81,3 15.5,3.5 16.97,4.32L14.87,5.53C14,5.19 13,5 12,5A8,8 0 0,0 4,13C4,15.21 4.89,17.21 6.34,18.65H6.35C6.74,19.04 6.74,19.67 6.35,20.06C5.96,20.45 5.32,20.45 4.93,20.07V20.07C3.12,18.26 2,15.76 2,13A10,10 0 0,1 12,3M22,13C22,15.76 20.88,18.26 19.07,20.07V20.07C18.68,20.45 18.05,20.45 17.66,20.06C17.27,19.67 17.27,19.04 17.66,18.65V18.65C19.11,17.2 20,15.21 20,13C20,12 19.81,11 19.46,10.1L20.67,8C21.5,9.5 22,11.18 22,13Z'/></svg><span>Dashboard</span></a></li>";
  } else if (_0x49b73b == "user" || _0x49b73b == "penjual") {
    _0x4bb692 += "<li><a href='" + urlProfile + "'><svg viewBox='0 0 24 24'><path d='M12 3C14.21 3 16 4.79 16 7S14.21 11 12 11 8 9.21 8 7 9.79 3 12 3M16 13.54C16 14.6 15.72 17.07 13.81 19.83L13 15L13.94 13.12C13.32 13.05 12.67 13 12 13S10.68 13.05 10.06 13.12L11 15L10.19 19.83C8.28 17.07 8 14.6 8 13.54C5.61 14.24 4 15.5 4 17V21H20V17C20 15.5 18.4 14.24 16 13.54Z'/></svg><span>Profile</span></a></li>";
  }
  _0x4bb692 += "<li><a href='" + urlEdit + "'><svg viewBox='0 0 24 24'><path d='M19,19V5H5V19H19M19,3A2,2 0 0,1 21,5V19C21,20.11 20.1,21 19,21H5A2,2 0 0,1 3,19V5A2,2 0 0,1 5,3H19M16.7,9.35L15.7,10.35L13.65,8.3L14.65,7.3C14.86,7.08 15.21,7.08 15.42,7.3L16.7,8.58C16.92,8.79 16.92,9.14 16.7,9.35M7,14.94L13.06,8.88L15.12,10.94L9.06,17H7V14.94Z'/></svg><span>Edit Profile</span></a></li>";
  if (_0x49b73b == "admin") {
    _0x4bb692 += "<li><a href='javascript:;' class='download-user'><svg viewBox='0 0 24 24'><path d='M2 12H4V17H20V12H22V17C22 18.11 21.11 19 20 19H4C2.9 19 2 18.11 2 17V12M12 15L17.55 9.54L16.13 8.13L13 11.25V2H11V11.25L7.88 8.13L6.46 9.55L12 15Z'/></svg><span>Download User</span></a></li>";
  }
  if (_0x49b73b != "user") {
    _0x4bb692 += "<li><a href='" + urluploadProduk + "'><svg viewBox='0 0 24 24'><path d='M5.5,21C4.72,21 4.04,20.55 3.71,19.9V19.9L1.1,10.44L1,10A1,1 0 0,1 2,9H6.58L11.18,2.43C11.36,2.17 11.66,2 12,2C12.34,2 12.65,2.17 12.83,2.44L17.42,9H22A1,1 0 0,1 23,10L22.96,10.29L20.29,19.9C19.96,20.55 19.28,21 18.5,21H5.5M12,4.74L9,9H15L12,4.74M12,13A2,2 0 0,0 10,15A2,2 0 0,0 12,17A2,2 0 0,0 14,15A2,2 0 0,0 12,13Z'/></svg><span>Upload Produk</span></a></li>";
  }
  if (_0x49b73b != "admin") {
    _0x4bb692 += "<li><a href='" + urlTransfer + "'><svg viewBox='0 0 24 24'><path d='M4 18V12H16.05C17.05 11.37 18.23 11 19.5 11C20.39 11 21.23 11.18 22 11.5V6C22 4.89 21.1 4 20 4H4C2.89 4 2 4.89 2 6V18C2 19.11 2.9 20 4 20H13.5C13.24 19.38 13.08 18.7 13.03 18H4M4 6H20V8H4V6M23 17.5C23 18.32 22.75 19.08 22.33 19.71L21.24 18.62C21.41 18.28 21.5 17.9 21.5 17.5C21.5 16.12 20.38 15 19 15V16.5L16.75 14.25L19 12V13.5C21.21 13.5 23 15.29 23 17.5M19 18.5L21.25 20.75L19 23V21.5C16.79 21.5 15 19.71 15 17.5C15 16.68 15.25 15.92 15.67 15.29L16.76 16.38C16.59 16.72 16.5 17.1 16.5 17.5C16.5 18.88 17.62 20 19 20V18.5Z'/></svg><span>Transfer</span></a></li>";
  }
  _0x4bb692 += "<li id='logout'><svg viewBox='0 0 24 24'><path d='M15,24H17V22H15M16.56,4.44L15.11,5.89C16.84,6.94 18,8.83 18,11A6,6 0 0,1 12,17A6,6 0 0,1 6,11C6,8.83 7.16,6.94 8.88,5.88L7.44,4.44C5.36,5.88 4,8.28 4,11A8,8 0 0,0 12,19A8,8 0 0,0 20,11C20,8.28 18.64,5.88 16.56,4.44M13,2H11V12H13M11,24H13V22H11M7,24H9V22H7V24Z'/></svg><span>Logout</span></li>";
  _0x4bb692 += "</ul>";
  $("#menu-profile ul.menu-profile").html(_0x4bb692);
  setDarkmode();
  $("#logout").click(function () {
    firebase.auth().signOut().then(() => {
      notification("<div class='peringatan sukses'><svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'><path d='M12 2C6.5 2 2 6.5 2 12S6.5 22 12 22 22 17.5 22 12 17.5 2 12 2M12 20C7.59 20 4 16.41 4 12S7.59 4 12 4 20 7.59 20 12 16.41 20 12 20M16.59 7.58L10 14.17L7.41 11.59L6 13L10 17L18 9L16.59 7.58Z' /></svg></div>Anda telah logout");
      setTimeout(function () {
        window.location.href = urlHome;
      }, 0xbb8);
    })["catch"](_0xc17e0c => {
      notification("<div class='peringatan gagal'><svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'><path d='M11,15H13V17H11V15M11,7H13V13H11V7M12,2C6.47,2 2,6.5 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20Z' /></svg></div>Gagal Logout, Silahkan refresh dan coba lagi");
    });
  });
}
function checkVerifikasi(_0x44a425, _0x263353, _0x1e07b9, _0x55585f) {
  if (_0x44a425 == false) {
    $("body").append("<div id='informasi' style='display:block'></div>");
    var _0x429e22 = "<p>Akun Anda belum terverifikasi</p>";
    _0x429e22 += "<div class='box-ospi'>";
    _0x429e22 += "<button class='button-submit' id='kirim-email' role='button' style='display:inline-block;margin-right:15px'>Kirim Email Verifikasi</button>";
    _0x429e22 += "<button class='button-google' id='logout' role='button' style='display:inline-block;color:#fff;padding:5px 7px'>Logout</button>";
    _0x429e22 += "</div>";
    $("#informasi").html(_0x429e22);
    $("#kirim-email").click(function () {
      auth.currentUser.sendEmailVerification().then(() => {
        notification("<div class='peringatan gagal'><svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'><path d='M11,15H13V17H11V15M11,7H13V13H11V7M12,2C6.47,2 2,6.5 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20Z' /></svg></div>silahkan cek email untuk verifikasi akun Anda");
      });
    });
    $("#logout").click(function () {
      firebase.auth().signOut().then(() => {
        notification("<div class='peringatan sukses'><svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'><path d='M12 2C6.5 2 2 6.5 2 12S6.5 22 12 22 22 17.5 22 12 17.5 2 12 2M12 20C7.59 20 4 16.41 4 12S7.59 4 12 4 20 7.59 20 12 16.41 20 12 20M16.59 7.58L10 14.17L7.41 11.59L6 13L10 17L18 9L16.59 7.58Z' /></svg></div>Anda telah logout");
        setTimeout(function () {
          window.location.href = urlHome;
        }, 0xbb8);
      })["catch"](_0x257d0d => {
        notification("<div class='peringatan gagal'><svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'><path d='M11,15H13V17H11V15M11,7H13V13H11V7M12,2C6.47,2 2,6.5 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20Z' /></svg></div>Gagal Logout, Silahkan refresh dan coba lagi");
      });
    });
  } else if (_0x44a425 == true) {
    db.collection("datausers").where("email", "==", _0x1e07b9).get().then(_0x35b7a7 => {
      if (_0x35b7a7.docs[0x0] == undefined) {
        db.collection("datausers").add({
          "nama": _0xe69b7e,
          "email": _0x1e07b9,
          "hp": null,
          "foto": _0x5dfe74,
          "alamat": null,
          "status": "user"
        }).then(_0x3e17eb => {
          setTimeout(function () {
            window.location.href = urlProfile;
          }, 0xbb8);
        })["catch"](_0x1a80be => {
          notification("<div class='peringatan gagal'><svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'><path d='M11,15H13V17H11V15M11,7H13V13H11V7M12,2C6.47,2 2,6.5 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20Z' /></svg></div>" + _0x1a80be.message);
        });
      } else {
        var _0x4cd367 = _0x35b7a7.docs[0x0][_0x5378(151704240188, "kpno")]();
        var _0x12a801 = _0x4cd367.status;
        var _0x5dfe74 = _0x4cd367[_0x5378(38692913212, "irqu")];
        var _0xe69b7e = _0x4cd367.nama;
        opsiLogin(_0x12a801);
        if (_0x5dfe74 != null) {
          $("#header-wrap .icon-profile").html("<img src='" + _0x5dfe74 + "' alt='" + _0xe69b7e + "' width='25' height='25'/>");
          $(_0x5378(109291438140, "%U#@") + "nu-bottom " + ".tombol-pr" + "ofile").html("<img src='" + _0x5dfe74 + "' alt='" + _0xe69b7e + ("' width='2" + _0x5378(189301981244, "QZlP") + "'25'/><spa" + "n>Profil</" + "span>"));
        }
        $(".tombol-profile .text-profile").text("Profil");
        $(_0x5378(155932098620, "QC&8") + "ofile").click(function () {
          window.location.href = urlProfile;
        });
      }
    });
  }
}
function setupProfile(_0x522dee) {
  if (_0x522dee) {
    var _0x2bfb67 = _0x522dee.metadata.creationTime;
    var _0x17973f = _0x522dee.metadata.lastSignInTime;
    db.collection("datausers").where("email", "==", _0x522dee.email).get().then(function (_0x21b84a) {
      var _0x5d86fa = _0x21b84a[_0x5378(14213576, "dgE8")][0x0].data();
      var _0x544ae3 = _0x5d86fa.nama;
      var _0x1c63da = _0x5d86fa.foto;
      var _0x4a9945 = _0x5d86fa[_0x5378(34476488, "[TlR")];
      var _0x4b8c9e = _0x5d86fa.hp;
      var _0x51f934 = _0x5d86fa.alamat;
      var _0xeca62f = _0x5d86fa.status;
      var _0x1ade2a = '';
      _0x1ade2a += "    <style>#content-" + _0x5378(19583432, "&ihF") + "h1 {displa" + "y: none !i" + "mportant;}" + "</style>  " + "  <div cla" + "ss='bg-pro" + "file'>    " + "    <h2>Se" + "lamat Data" + "ng</h2>   " + " </div>   " + " <div clas" + "s='seller-" + "profile' i" + "d='seller-" + "profile'> " + _0x5378(557512, "an)$") + "v class='c" + "ontainer'>" + _0x5378(21004744, "$q%[") + "  <div cla" + _0x5378(336328, "#b[]") + "-profile-i" + _0x5378(9310664, "Zp[M");
      if (_0x1c63da == null) {
        _0x1ade2a += "          " + _0x5378(6001096, "irqu") + " width='10" + "0' height=" + "'100' clas" + "s='public-" + "profile-av" + "atar' src=" + "'" + urlFoto + "' alt='" + _0x544ae3 + _0x5378(17060296, "BeDr");
      } else {
        _0x1ade2a += _0x5378(38830536, "dgE8") + "      <img" + _0x5378(19956168, "71PU") + "0' height=" + "'100' clas" + "s='public-" + "profile-av" + "atar' src=" + "'" + _0x1c63da + "' alt='" + _0x544ae3 + "' />";
      }
      _0x1ade2a += "            </div>            <div class='seller-profile-basic-info'>           " + _0x5378(28635592, "!#!f") + _0x5378(45572552, "7ly)") + "ler_name'>" + _0x544ae3 + ("</div>                <div class='seller-location'>                    <svg view" + _0x5378(754120, "kpno") + "4 24'><pat" + "h fill='cu" + "rrentColor" + "' d='M20,8" + "L12,13L4,8" + "V6L12,11L2" + _0x5378(31207880, "QC&8") + "C2.89,4 2," + "4.89 2,6V1" + "8A2,2 0 0," + "0 4,20H20A" + "2,2 0 0,0 " + _0x5378(21565896, "an)$") + ",4.89 21.1" + ",4 20,4Z'>" + _0x5378(20820424, "Zp[M") + "vg> <span>") + _0x4a9945 + ("</span>             " + _0x5378(30446024, "TYxK") + "          " + " </div>   " + "         <" + "a class='s" + "eller-prof" + "ile-edit-b" + "tn' href='") + urlEdit + ("'>                <svg viewBox='0 0 24 24'><path fill='currentColor' d='M19,19V5H5V19H19M19,3A2,2 0 0,1 21,5V19C21,20.11 20.1,21 19,21H5A2,2 0 0,1 3,1" + _0x5378(30155208, "cw1A") + "0,1 5,3H19" + "M16.7,9.35" + _0x5378(43876808, "IHZV") + "5L13.65,8." + "3L14.65,7." + "3C14.86,7." + "08 15.21,7" + ".08 15.42," + "7.3L16.7,8" + ".58C16.92," + _0x5378(3666376, "irqu") + ",9.14 16.7" + ",9.35M7,14" + ".94L13.06," + "8.88L15.12" + _0x5378(46358984, "tWQ3") + _0x5378(12976584, "OZmz") + "94Z' ></pa" + "th></svg> " + _0x5378(11837896, "BcP5") + "     <span" + ">Edit Prof" + "il</span> " + "          " + " </a>     " + "       <di" + "v class='t" + "ombol-link" + "'>        " + "       <a " + "href='") + urlPassword + ("'>Ganti Pa" + _0x5378(39027144, "cw1A") + "          " + _0x5378(17650120, "Zp[M") + _0x5378(34075080, "N4BJ") + _0x5378(25752008, "#b[]") + _0x5378(35209672, "BcP5"));
      if (_0xeca62f == "admin" || _0xeca62f == _0x5378(22917576, "7ly)")) {
        _0x1ade2a += "    <div class='title-html-user'><h3>Data Pendapatan</h3></d" + _0x5378(2331080, "#b[]") + "f='javascr" + "ipt:;' cla" + "ss='ganti-" + _0x5378(11117000, "%U#@") + "='ganti-fo" + "rmat'>Liha" + "t pendapat" + _0x5378(16413128, "NnbG") + _0x5378(47174088, "k59^") + "class='box" + "-penghasil" + "an hapus'>" + "  <form>  " + "<div class" + "='datainpu" + "t'>    <la" + "bel for='t" + "anggal-pen" + "ghasilan'>" + "<span>Tang" + _0x5378(19169736, "[TlR") + "</label>  " + "  <input c" + "lass='vali" + "date' id='" + "tanggal-pe" + _0x5378(410056, "gGnn") + " name='Tan" + "ggal' plac" + "eholder='T" + "anggal' ty" + "pe='date'/" + ">  </div> " + _0x5378(26067400, ")SjY") + _0x5378(24646088, "tWQ3") + "ut'>    <l" + "abel for='" + "nama-pengh" + "asilan'><s" + "pan>Identi" + "tas User</" + _0x5378(14057928, "irqu") + "el>    <in" + "put class=" + "'validate'" + " id='nama-" + "penghasila" + "n' name='K" + _0x5378(37429704, "gGnn") + "User Disin" + "i' placeho" + "lder='Keti" + "k Data Use" + "r Disini' " + "type='text" + "'/>  </div" + "> </form><" + "button cla" + "ss='button" + "-submit pe" + "nghasilan'" + " id='lihat" + "-penghasil" + "an'>Lihat " + "Hasil</but" + "ton></div>" + _0x5378(14844360, "fRDt") + "lass='load" + _0x5378(42361288, "tWQ3") + " loading-p" + _0x5378(31531464, "k59^") + "'></div>  " + "  <div id=" + _0x5378(20287944, "(]6h") + _0x5378(16581064, "N4BJ") + "/div>    <" + "div class=" + _0x5378(28996040, "Zp[M") + "gital' id=" + _0x5378(22254024, "TYxK") + "gital'></d" + "iv>    <di" + "v class='t" + "itle-html-" + _0x5378(41435592, ")SjY") + _0x5378(5980616, "cw1A") + _0x5378(3523016, "5C)0") + "iv>      ";
      } else if (_0xeca62f == "user") {
        _0x1ade2a += _0x5378(25620936, "cw1A") + "lass='prod" + "uk-digital" + "' id='prod" + "uk-digital" + "'></div>  " + "  <div cla" + "ss='title-" + _0x5378(42111432, "BeDr") + "><h3>Data " + "Profile</h" + _0x5378(43774408, "[TlR") + "    ";
      }
      _0x1ade2a += "    <div class='tampilan-profile'>        <div cla" + _0x5378(11399624, "fRDt") + "rofile'>  " + "          " + "<div class" + "='icon-bod" + "y'>       " + _0x5378(22979016, "atxO") + "svg viewBo" + "x='0 0 24 " + "24'><path " + "fill='curr" + "entColor' " + "d='M6.62,1" + _0x5378(31789512, "Zp[M") + "13.62 10.3" + "8,15.94 13" + ".21,17.38L" + "15.41,15.1" + "8C15.69,14" + _0x5378(20455880, "OZmz") + "4.82 16.43" + ",14.93C17." + "55,15.3 18" + ".75,15.5 2" + "0,15.5A1,1" + " 0 0,1 21," + _0x5378(34243016, "dApk") + _0x5378(46961096, "3i2P") + _0x5378(4436424, "IHZV") + "0 0,1 3,4A" + "1,1 0 0,1 " + "4,3H7.5A1," + _0x5378(37888456, "QZlP") + "5,4C8.5,5." + "25 8.7,6.4" + "5 9.07,7.5" + "7C9.18,7.9" + _0x5378(34357704, "QC&8") + " 8.82,8.59" + "L6.62,10.7" + "9Z' ></pat" + "h></svg>  " + _0x5378(16036296, "&ihF") + "</div>    " + "        <d" + "iv class='" + "body-phone" + "'><div cla" + "ss='nomor-" + "user'>" + _0x4b8c9e + ("</div></div>        </div>        <div class='clear'></div>        <div class='body-profile'>            <div class='icon-body'>            " + _0x5378(33513928, "RAO[") + "iewBox='0 " + "0 24 24'><" + "path fill=" + "'currentCo" + "lor' d='M1" + "2,20A8,8 0" + " 0,0 20,12" + _0x5378(41046472, "&ihF") + _0x5378(39252424, "&ihF") + "0 0,0 4,12" + "A8,8 0 0,0" + " 12,20M12," + "2A10,10 0 " + "0,1 22,12A" + _0x5378(4895176, "cw1A") + "1 12,22C6." + _0x5378(11891144, "5C)0") + ".5 2,12A10" + _0x5378(43520456, "dgE8") + _0x5378(16781768, "fRDt") + "7V12.25L17" + ",14.92L16." + "25,16.15L1" + "1,13V7H12." + "5Z'></path" + _0x5378(47333832, "3i2P") + "         <" + "/div>     " + "       <di" + _0x5378(38781384, "3a1@") + "itle-body'" + _0x5378(34349512, "#b[]") + "Login</div" + _0x5378(496072, "H1*B") + "   <div cl" + "ass='value" + "-body'>") + get_timeago(_0x17973f) + (_0x5378(13734344, "*J]!") + _0x5378(3736008, "IHZV") + "        <d" + _0x5378(46731720, "*J]!") + "clear'></d" + "iv>       " + " <div clas" + "s='body-pr" + "ofile'>   " + _0x5378(15028680, "(]6h") + "div class=" + "'icon-body" + "'>        " + "        <s" + "vg viewBox" + "='0 0 24 2" + "4'><path f" + _0x5378(1290696, "hI0%") + "ntColor' d" + "='M15,13H1" + _0x5378(22614472, "$q%[") + _0x5378(18194888, "QZlP") + "3L18.19,18" + _0x5378(9097672, "rQo9") + "69V13M19,8" + _0x5378(30454216, "RAO[") + "C9.24,18.0" + "9 9,17.07 " + _0x5378(4731336, "geby") + " 0,1 16,9C" + "17.07,9 18" + ".09,9.24 1" + "9,9.67V8M5" + _0x5378(10801608, "%U#@") + "1 3,20.1 3" + ",19V5C3,3." + _0x5378(34562504, "dApk") + "5,3H6V1H8V" + "3H16V1H18V" + "3H19A2,2 0" + _0x5378(36544968, "(]6h") + "11.1C22.24" + ",12.36 23," + "14.09 23,1" + "6A7,7 0 0," + "1 16,23C14" + ".09,23 12." + _0x5378(18776520, "$q%[") + "1.1,21H5M1" + _0x5378(27640264, "#b[]") + "85,4.85 0 " + "0,0 11.15," + "16C11.15,1" + "8.68 13.32" + ",20.85 16," + "20.85A4.85" + ",4.85 0 0," + "0 20.85,16" + "C20.85,13." + "32 18.68,1" + "1.15 16,11" + ".15Z'></pa" + "th></svg> " + "          " + " </div>   " + _0x5378(43135432, "vaKW") + _0x5378(29880776, "#b[]") + _0x5378(20246984, "OZmz") + _0x5378(35504584, "cw1A") + " Daftar</d" + "iv>       " + "     <div " + "class='val" + "ue-body'>") + formatTanggal(_0x2bfb67) + ("</div>        </div>        <div class='clear'></div>        <div class='body-pr" + _0x5378(1761736, "atxO") + "         <" + "div class=" + _0x5378(45973960, "%U#@") + "'>        " + "        <s" + _0x5378(22884808, "kpno") + "='0 0 24 2" + "4'><path f" + "ill='curre" + _0x5378(17867208, "atxO") + "='M12,11.5" + "A2.5,2.5 0" + " 0,1 9.5,9" + _0x5378(45662664, "71PU") + " 0,1 12,6." + "5A2.5,2.5 " + "0 0,1 14.5" + ",9A2.5,2.5" + " 0 0,1 12," + "11.5M12,2A" + "7,7 0 0,0 " + "5,9C5,14.2" + "5 12,22 12" + ",22C12,22 " + "19,14.25 1" + "9,9A7,7 0 " + "0,0 12,2Z'" + _0x5378(9089480, "gGnn") + "svg>      " + "      </di" + "v>        " + "    <div c" + "lass='titl" + _0x5378(8921544, "7ly)") + "amat</div>");
      if (_0x544ae3 == null || _0x4b8c9e == null || _0x51f934 == null) {
        _0x1ade2a += "           <div class='value-body'>Alamat belum di setting</div>";
        notification("<div class='peringatan gagal'><svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'><path d='M11,15H13V17H11V15M11,7H13V13H11V7M12,2C6.47,2 2,6.5 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20Z' /></svg></div>" + ("Data Anda " + _0x5378(33706440, "QZlP") + "kap, silah" + "kan lengka" + "pi data An" + "da"));
        setTimeout(function () {
          window.location.href = urlEdit;
        }, 0x1388);
      } else {
        _0x1ade2a += "           <div class='value-b" + _0x5378(13095368, "!#!f") + _0x51f934 + "</div>";
      }
      _0x1ade2a += "        </div>        <div class='clear'></div>        <div class='body-profile'>            <div class='icon-body'>                <svg viewBox='0 0 24 24'><pa" + _0x5378(7578056, "k59^") + "urrentColo" + "r' d='M12," + "2A10,10 0 " + "0,0 2,12A1" + "0,10 0 0,0" + " 12,22A10," + "10 0 0,0 2" + "2,12A10,10" + " 0 0,0 12," + "2M12,20C7." + "59,20 4,16" + ".41 4,12C4" + ",7.59 7.59" + ",4 12,4C16" + ".41,4 20,7" + ".59 20,12C" + "20,16.41 1" + "6.41,20 12" + ",20M15,12A" + _0x5378(25534920, "!#!f") + "12,15A3,3 " + _0x5378(24588744, "cw1A") + "A3,3 0 0,1" + _0x5378(34431432, ")SjY") + "0 0,1 15,1" + "2Z'></path" + "></svg>   " + "         <" + "/div>     " + "       <di" + "v class='t" + "itle-body'" + ">Status</d" + "iv>       " + "     <div " + _0x5378(16486856, "dApk") + _0x5378(19317192, "Zp[M") + _0xeca62f + _0x5378(31420872, "Yd]5");
      _0x1ade2a += "        </div>        <div class='clear'></div>    </div>    ";
      if (_0xeca62f == "admin") {
        _0x1ade2a += _0x5378(31121864, "%U#@") + "d='html-us" + "er'></div>" + "    ";
      } else {
        if (_0xeca62f == "penjual") {
          _0x1ade2a += _0x5378(33014216, "6u5H") + "d='html-pe" + _0x5378(37646792, "vaKW") + "iv>    ";
        } else if (_0xeca62f == "user") {
          _0x1ade2a += "    <div i" + _0x5378(7528904, "k59^") + _0x5378(34423240, "BcP5") + _0x5378(22540744, "IHZV");
        }
      }
      $("#html-prof" + _0x5378(28582344, "rQo9")).html(_0x1ade2a);
      boxUser();
      showDigital(_0x522dee);
      $(".lihat-histori-user").click(function () {
        historiProduk(_0x522dee);
        return false;
      });
      var _0x437f90 = document[_0x5378(26509768, "cw1A") + "ById"]("html-user");
      if (_0x437f90) {
        mypage = 0xa;
        infoPenjualanadmin(_0x522dee);
        $(_0x5378(4166088, "N4BJ") + "ghasilan")[_0x5378(38703560, "$q%[")](function () {
          var _0x54d164 = $("#tanggal-penghasilan").val();
          var _0x319618 = $("#nama-penghasilan").val();
          if (_0x54d164 == '') {
            notification("Tanggal belum dipilih");
          } else {
            infoPenjualanadmin(_0x522dee, _0x54d164, _0x319618);
          }
        });
        $("#loadmorebtn").click(function (_0x41b8d3) {
          mypage += 0xa;
          dataUser(_0x522dee, mypage);
        });
        $(".lihat-user").click(function () {
          $(".pencarian-user,.pencarian-histori,.pencarian-digital,.option-histori,.option-digital,.button-pencarian").addClass("hapus");
          $(".pencarian-user,.button-pencarian").removeClass("hapus");
          $(".loading-html").show();
          $("#loadmorebtn").show();
          $("#data-user").html('');
          $("#html-produk").html('');
          $("#html-digital").html('');
          $(".title-html-user button").removeClass("active");
          $(this).addClass("active");
          dataUser(_0x522dee, mypage);
          return false;
        });
        $(".lihat-histori").click(function () {
          $(".pencarian-user,.pencarian-histori,.pencarian-digital,.option-histori,.option-digital,.button-pencarian").addClass("hapus");
          $(".pencarian-histori,.option-histori").removeClass("hapus");
          $(".loading-html").show();
          $("#data-user").html('');
          $("#html-produk").html('');
          $("#html-digital").html('');
          $(".title-html-user button").removeClass("active");
          $(this).addClass("active");
          historiProdukadmin(_0x522dee);
          return false;
        });
        $(".lihat-digital")[_0x5378(25039304, "QC&8")](function () {
          $(".pencarian-user,.pencarian-histori,.pencarian-digital,.option-histori,.option-digital,.button-pencarian").addClass("hapus");
          $(".pencarian-digital,.option-digital").removeClass("hapus");
          $(".loading-html").show();
          $("#data-user").html('');
          $("#html-produk").html('');
          $("#html-digital").html('');
          $(".title-html-user button").removeClass("active");
          $(this).addClass("active");
          setupDigital(_0x522dee);
          return false;
        });
        $("#cari-user")[_0x5378(1081800, "3a1@")](function () {
          if ($("#pencarian").val() == '') {
            $("#pencarian").focus();
            return false;
          } else {
            $(".loading-html").show();
            var _0x4d391b = $("#pencarian").val();
            cariUser(_0x522dee, _0x4d391b);
          }
        });
        $("#cari-histori").click(function () {
          if ($("#pencarian-histori").val() == '') {
            $("#pencarian-histori").focus();
            return false;
          } else {
            $(".loading-html").show();
            var _0x261cb7 = $("#pencarian-histori").val();
            historiProdukadmin(_0x522dee, _0x261cb7);
          }
        });
        $(_0x5378(13881800, "rQo9") + _0x5378(5738952, "IHZV")).click(function () {
          if ($("#pencarian-digital").val() == '') {
            $("#pencarian-digital").focus();
            return false;
          } else {
            $(".loading-html").show();
            var _0x140653 = $("#pencarian-digital").val();
            setupDigital(_0x522dee, _0x140653);
          }
        });
        $("#tambah-pr" + _0x5378(4678088, "OZmz") + "al").click(function () {
          $(".box-form-digital").fadeIn();
          return false;
        });
        $("#tombol-cl" + _0x5378(9126344, "[TlR") + "l").click(function () {
          $(".box-form-digital").fadeOut();
          return false;
        });
        $("#tombol-produk-digital").click(function () {
          var _0x5d0cab = $("#input-user-id").val();
          var _0x5e3147 = $("#input-invoice").val();
          var _0x3d9fee = $("#input-nama-produk").val();
          var _0x11d8f1 = $("#input-link-produk").val();
          if (_0x5d0cab == '') {
            notification("<div class='peringatan gagal'><svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'><path d='M11,15H13V17H11V15M11,7H13V13H11V7M12,2C6.47,2 2,6.5 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20Z' /></svg></div>User ID diperlukan, lihat bagian detail Invoice");
            return false;
          } else {
            if (_0x5e3147 == '') {
              notification("<div class='peringatan gagal'><svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'><path d='M11,15H13V17H11V15M11,7H13V13H11V7M12,2C6.47,2 2,6.5 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20Z' /></svg></div>Invoice diperlukan");
              return false;
            } else {
              if (_0x3d9fee == '') {
                notification("<div class='peringatan gagal'><svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'><path d='M11,15H13V17H11V15M11,7H13V13H11V7M12,2C6.47,2 2,6.5 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20Z' /></svg></div>Nama Produk diperlukan");
                return false;
              } else {
                return _0x11d8f1 == '' ? (notification("<div class='peringatan gagal'><svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'><path d='M11,15H13V17H11V15M11,7H13V13H11V7M12,2C6.47,2 2,6.5 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20Z' /></svg></div>Link file produk diperlukan"), false) : (notification("proses input data"), db.collection("produkdigital").add({
                  "id": _0x5d0cab,
                  "inv": _0x5e3147,
                  "produk": _0x3d9fee,
                  "link": _0x11d8f1
                }).then(_0x538019 => {
                  notification("<div class='peringatan sukses'><svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'><path d='M12 2C6.5 2 2 6.5 2 12S6.5 22 12 22 22 17.5 22 12 17.5 2 12 2M12 20C7.59 20 4 16.41 4 12S7.59 4 12 4 20 7.59 20 12 16.41 20 12 20M16.59 7.58L10 14.17L7.41 11.59L6 13L10 17L18 9L16.59 7.58Z' /></svg></div>Produk digital berhasil ditambahkan");
                  var _0x30b62e = $("#pencarian-digital").val();
                  if (_0x30b62e == '') {
                    setupDigital(_0x522dee);
                  } else {
                    setupDigital(_0x522dee, _0x30b62e);
                  }
                })["catch"](_0x23b367 => {
                  notification("<div class='peringatan gagal'><svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'><path d='M11,15H13V17H11V15M11,7H13V13H11V7M12,2C6.47,2 2,6.5 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20Z' /></svg></div>Terjadi error, silahkan coba lagi");
                }), false);
              }
            }
          }
        });
      }
    });
  }
}
;
function boxUser() {
  var _0x329f50 = document.getElementById("html-client");
  var _0x1ed0fa = document.getElementById("html-penjual");
  var _0x484881 = document.getElementById("html-user");
  if (_0x329f50) {
    var _0x4994ba = "  <div class='title-html-user'>    <button class='lihat-histori-user'>Lihat Histori Pembelian</button>  </div><div class='loading center loading-html'></div><div class='html-produk' id='html-produk'></div>    ";
    $("#html-client").html(_0x4994ba);
  } else {
    if (_0x1ed0fa) {
      var _0x4994ba = "  <div class='title-html-user'>    <button class='lihat-histori-user'>Pembelian</button>    <button class='lihat-histori-penjual'>Penjualan</button>    <button class='lihat-histori-penjual'>Digital</button>  </div><div class='box-pencarian pencarian-histori hapus'>  <input class='input-pencarian' id='pencarian-histori' placeholder='Cari Data Disini' type='search' />  <button role='button' class='tombol-cari' id='cari-histori'>Cari</button></div><div class='box-pencarian option-histori hapus'>  <select class='input-pencarian' id='opsi-histori'>    <option value='default'>Pilih Status</option>    <option value='1'>Konfirmasi</option>    <option value='2'>Pengiriman</option>    <option value='3'>Selesai</option>    <option value='4'>Batal</option>    <option value='5'>Hapus</option>  </select>  <button role='button' class='tombol-cari' id='tombol-ganti-status'>Apply</button></div><div class='loading center loading-html'></div><div class='html-produk' id='html-produk'></div><div class='box-form-histori'>    <div class='box-form-wrap'>        <div class='box-pilihan datainput'>         <select id='opsi-pesan-user'>           <option value='default'>Pilih Notifikasi</option>           <option value='1'>Konfirmasi</option>           <option value='2'>Proses Pengiriman</option>           <option value='3'>Order Selesai</option>           <option value='4'>Batal Order</option>           <option value='5'>Lainnya</option>         </select>        </div>        <div class='box-pilihan datainput'>          <textarea id='isi-pesan' placeholder='isi pesan' style='height:150px'></textarea>        </div>        <div class='data-inv-user hapus'></div>        <div class='data-nama-user hapus'></div>        <div class='data-nomor-user hapus'></div>        <div class='pilihan-tombol'><button class='button-submit' id='tombol-kirim-pesan'>Kirim</button> <button class='button-submit' id='tombol-close-pesan'>Close</button></div>    </div></div>    ";
      $("#html-penjual").html(_0x4994ba);
    } else {
      if (_0x484881) {
        $("#html-user").html("  <div class='title-html-user'>    <button class='lihat-user'>User</button>    <button class='lihat-histori'>Pesanan</button>    <button class='lihat-digital'>Digital</button>  </div><div class='box-pencarian pencarian-user hapus'>  <input class='input-pencarian' id='pencarian' placeholder='Cari User Disini' type='search'/>  <button role='button' class='tombol-cari' id='cari-user'>Cari</button></div><div class='box-pencarian pencarian-histori hapus'>  <input class='input-pencarian' id='pencarian-histori' placeholder='Cari Data Disini' type='search' />  <button role='button' class='tombol-cari' id='cari-histori'>Cari</button></div><div class='box-pencarian pencarian-digital hapus'>  <input class='input-pencarian' id='pencarian-digital' placeholder='Cari Invoice Disini' type='search' />  <button role='button' class='tombol-cari' id='cari-digital'>Cari</button></div><div class='box-pencarian option-histori hapus'>  <select class='input-pencarian' id='opsi-histori'>    <option value='default'>Pilih Status</option>    <option value='1'>Konfirmasi</option>    <option value='2'>Pengiriman</option>    <option value='3'>Selesai</option>    <option value='4'>Batal</option>    <option value='5'>Hapus</option>  </select>  <button role='button' class='tombol-cari' id='tombol-ganti-status'>Apply</button></div><div class='option-digital hapus'>  <button class='button-submit' id='tambah-produk-digital'>Tambah Produk</button>  <button class='button-submit' id='hapus-produk-digital'>Hapus</button></div><div class='loading center loading-html'></div><div class='data-user' id='data-user'></div><div class='html-produk' id='html-produk'></div><div class='html-digital' id='html-digital'></div><div class='button-submit button-pencarian hapus' id='loadmorebtn'>Load More</div><div class='box-form-user'>  <div class='box-form-wrap'>    <div class='box-pilihan box-ganti-admin'>    <div class='tombol-geser'>      <span class='tombol-geser-wrap'>Ubah Status Admin</span>      <span class='konfir-status hapus'></span>      <ul class='change-status'>         <li data='1' status='admin'>Admin</li>         <li data='2' status='penjual'>Penjual</li>         <li data='3' status='user'>User</li>      </ul>    </div>    </div>    <div class='data-update-other hapus'></div>    <div class='loading center loading-update-user'></div>    <div class='pilihan-tombol'>      <button class='button-submit' id='tombol-edit-user'>Update Data</button>      <button class='button-submit' id='tombol-close-user'>Close</button>    </div>  </div></div><div class='box-form-histori'>    <div class='box-form-wrap'>        <div class='box-pilihan datainput'>         <select id='opsi-pesan-user'>           <option value='default'>Pilih Notifikasi</option>           <option value='1'>Konfirmasi</option>           <option value='2'>Proses Pengiriman</option>           <option value='3'>Order Selesai</option>           <option value='4'>Batal Order</option>           <option value='5'>Lainnya</option>         </select>        </div>        <div class='box-pilihan datainput'>          <textarea id='isi-pesan' placeholder='isi pesan' style='height:150px'></textarea>        </div>        <div class='data-inv-user hapus'></div>        <div class='data-nama-user hapus'></div>        <div class='data-nomor-user hapus'></div>        <div class='pilihan-tombol'><button class='button-submit' id='tombol-kirim-pesan'>Kirim</button> <button class='button-submit' id='tombol-close-pesan'>Close</button></div>    </div></div><div class='box-form-digital'>    <div class='box-form-wrap'>        <div class='box-pilihan datainput'>          <input id='input-user-id' placeholder='User ID'/>        </div>        <div class='box-pilihan datainput'>          <input id='input-invoice' placeholder='Invoice Produk'/>        </div>        <div class='box-pilihan datainput'>          <input id='input-nama-produk' placeholder='Nama Produk'/>        </div>        <div class='box-pilihan datainput'>          <input id='input-link-produk' placeholder='Link File Produk'/>        </div>        <div class='pilihan-tombol'><button class='button-submit' id='tombol-produk-digital'>Tambah</button> <button class='button-submit' id='tombol-close-digital'>Close</button></div>    </div></div>    ");
        $(".change-status li").on("click", function () {
          $(this).parents(".change-status").find("li").removeClass("active");
          $(this).addClass("active");
          var _0x953a43 = $(this)[_0x5378(577310824, "#b[]")](_0x5378(165154920, "BcP5"));
          $(".konfir-st" + _0x5378(474222696, "RAO["))[_0x5378(650580072, "tWQ3")](_0x953a43);
        });
        $("#ganti-format").click(function () {
          $(".box-penghasilan").toggleClass("hapus");
          return false;
        });
      }
    }
  }
}
function setDownload(_0x4c7308) {
  if (_0x4c7308) {
    db.collection("datausers").orderBy("email", "desc").get().then(function (_0x1fdd31) {
      var _0x47e251 = 0x1;
      var _0x558056 = '';
      _0x558056 += "<table>";
      _0x558056 += "<thead><tr><th>No</th><th>Nama</th><th>Nomor HP</th><th>Email</th><th>Alamat</th></tr></thead>";
      _0x558056 += "<tbody>";
      _0x1fdd31.forEach(function (_0x5cc808) {
        var _0x58a001 = _0x5cc808.data();
        var _0xe80324 = _0x58a001.nama;
        var _0x1a5428 = _0x58a001.hp;
        var _0x19862c = _0x58a001.email;
        var _0x4b894f = _0x58a001.alamat;
        _0x558056 += "<tr><td>" + _0x47e251 + "</td><td>" + _0xe80324 + "</td><td>'" + _0x1a5428 + "</td><td>" + _0x19862c + "</td><td>" + _0x4b894f + "</td></tr>";
        _0x47e251++;
      });
      _0x558056 += "</tbody></table>";
      $("#html-download").html(_0x558056);
    });
  }
}
function dataUser(_0x4bdc40, _0x39b085) {
  if (_0x4bdc40) {
    var _0x2912f6 = [];
    var _0x43dc37 = 0x0;
    db.collection("datausers").orderBy("email", "desc").get().then(function (_0x3e184d) {
      _0x3e184d.forEach(function (_0x46b301) {
        var _0x149e18 = _0x46b301.id;
        var _0x257f3d = _0x46b301[_0x5378(2214076112613, "Yd]5")]();
        _0x2912f6[_0x43dc37] = {
          "id": _0x149e18,
          "nama": _0x257f3d[_0x5378(1893295742693, "6u5H")],
          "hp": _0x257f3d.hp,
          "email": _0x257f3d.email,
          "alamat": _0x257f3d.alamat,
          "foto": _0x257f3d.foto,
          "status": _0x257f3d[_0x5378(738486410981, "aX^M")]
        };
        _0x43dc37++;
      });
      var _0x4bc25e = '';
      for (i = 0x0; i < _0x39b085; i++) {
        if (_0x2912f6[i]) {
          var _0x5cbda1 = _0x2912f6[i];
          var _0x51d7cd = _0x5cbda1.id;
          var _0x4dde16 = _0x5cbda1.nama;
          var _0x50a51c = _0x5cbda1.hp;
          var _0x4361d1 = _0x5cbda1.email;
          var _0x10eca6 = _0x5cbda1.alamat;
          var _0x3d7ab7 = _0x5cbda1.foto;
          var _0x8a7c68 = _0x5cbda1.status;
          _0x4bc25e += "    <div class='data-user-wrap' data-id=" + _0x51d7cd + ">      <div class='data-user-container'>        <div class='data-user-image'>          ";
          if (_0x3d7ab7 == null) {
            _0x4bc25e += "          <img data-file='' src='" + urlFoto + "' width='60' height='60' alt='" + _0x4dde16 + "'/>          ";
          } else {
            _0x4bc25e += "          <img data-file='" + _0x3d7ab7 + "' src='" + _0x3d7ab7 + "' width='60' height='60' alt='" + _0x4dde16 + "'/>          ";
          }
          _0x4bc25e += "        </div>        <div class='data-user-info'>          <div class='data-info-name'>" + _0x4dde16 + "</div>          <div class='data-info-other'>            <div class='data-info-email'>" + _0x4361d1 + "</div>            <div class='data-info-hp'>" + _0x50a51c + "</div>            <div class='data-info-alamat'><span class='alamat'>" + _0x10eca6 + "</span></div>          </div>          <button class='edit-user' role='button'><svg viewBox='0 0 24 24'><path fill='currentColor' d='M19,19V5H5V19H19M19,3A2,2 0 0,1 21,5V19C21,20.11 20.1,21 19,21H5A2,2 0 0,1 3,19V5A2,2 0 0,1 5,3H19M16.7,9.35L15.7,10.35L13.65,8.3L14.65,7.3C14.86,7.08 15.21,7.08 15.42,7.3L16.7,8.58C16.92,8.79 16.92,9.14 16.7,9.35M7,14.94L13.06,8.88L15.12,10.94L9.06,17H7V14.94Z'></path></svg></button>        </div>        <div class='data-user-bottom'>          <div class='data-user-status'>" + _0x8a7c68 + "</div>          ";
          if (_0x8a7c68 == "admin" || _0x8a7c68 == "penjual" || _0x8a7c68 == "user") {
            _0x4bc25e += "          <div class='data-user-active aktif'>Aktif</div>          ";
          } else {
            _0x4bc25e += "          <div class='data-user-active non-aktif'>Belum Aktivasi</div>          ";
          }
          _0x4bc25e += "            <div class='delete-user'><svg viewBox='0 0 24 24'><path fill='currentColor' d='M9,3V4H4V6H5V19A2,2 0 0,0 7,21H17A2,2 0 0,0 19,19V6H20V4H15V3H9M7,6H17V19H7V6M9,8V17H11V8H9M13,8V17H15V8H13Z'></path></svg></div>        </div>      </div>    </div>  </div>          ";
          $("#loadmorebtn").html("Load More");
        } else {
          $("#loadmorebtn").hide();
        }
      }
      $(".loading-html").hide();
      $("#data-user").html(_0x4bc25e);
      $(".data-user-wrap .edit-user").on("click", function () {
        $(".box-form-user").fadeIn();
        var _0x12e923 = $(this).parents(".data-user-wrap").attr("data-id");
        var _0x344e9e = $(this).parents(".data-user-wrap").find(".data-user-status").text();
        $(".box-form-user .data-update-other").text(_0x12e923);
        if (_0x344e9e == "admin") {
          $(".change-status li[data=1]").addClass("active");
        } else {
          if (_0x344e9e == "penjual") {
            $(".change-status li[data=2]").addClass("active");
          } else if (_0x344e9e == "user") {
            $(".change-status li[data=3]").addClass("active");
          }
        }
      });
      $(".data-user-wrap .delete-user").on("click", function () {
        var _0x3a7384 = $(this).parents(".data-user-wrap").attr("data-id");
        $(".box-form-user .data-update-other").text(_0x3a7384);
        notification("Menghapus user sedang diproses");
        db.collection("datausers").doc(_0x3a7384)["delete"]().then(() => {
          notification("<div class='peringatan sukses'><svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'><path d='M12 2C6.5 2 2 6.5 2 12S6.5 22 12 22 22 17.5 22 12 17.5 2 12 2M12 20C7.59 20 4 16.41 4 12S7.59 4 12 4 20 7.59 20 12 16.41 20 12 20M16.59 7.58L10 14.17L7.41 11.59L6 13L10 17L18 9L16.59 7.58Z' /></svg></div>Data user berhasil dihapus. Silahkan masuk ke akun firebase untuk disabled akun email secara permanen pada menu authentication");
          dataUser(_0x4bdc40, _0x39b085);
        })["catch"](_0x44aec4 => {
          notification("<div class='peringatan gagal'><svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'><path d='M11,15H13V17H11V15M11,7H13V13H11V7M12,2C6.47,2 2,6.5 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20Z' /></svg></div>User gagal dihapus, silahkan coba lagi");
        });
      });
      $("#tombol-edit-user").click(function () {
        $(".loading-update-user").show();
        var _0x31cd8c = $(".box-ganti-admin .konfir-status").text();
        var _0x422f37 = $(".box-form-user .data-update-other").text();
        var _0xea8d00 = db.collection("datausers").doc(_0x422f37);
        return _0xea8d00.update({
          "status": _0x31cd8c
        }).then(() => {
          $(".loading-update-user").hide();
          notification("<div class='peringatan sukses'><svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'><path d='M12 2C6.5 2 2 6.5 2 12S6.5 22 12 22 22 17.5 22 12 17.5 2 12 2M12 20C7.59 20 4 16.41 4 12S7.59 4 12 4 20 7.59 20 12 16.41 20 12 20M16.59 7.58L10 14.17L7.41 11.59L6 13L10 17L18 9L16.59 7.58Z' /></svg></div>Data berhasil di update");
          $(".box-form-user").fadeOut();
          dataUser(_0x4bdc40, _0x39b085);
        })["catch"](_0x1fad01 => {
          $(".loading-update-user").hide();
          notification("<div class='peringatan gagal'><svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'><path d='M11,15H13V17H11V15M11,7H13V13H11V7M12,2C6.47,2 2,6.5 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20Z' /></svg></div>Data gagal diupdate, silahkan coba lagi");
          console[_0x5378(1834768, "fRDt")](_0x1fad01);
        });
      });
      $("#tombol-close-user").click(function () {
        $(".loading-update-user").hide();
        $(".box-ganti-admin .konfir-status").text('');
        $(".change-status li").removeClass("active");
        $(".box-form-user .data-update-other").text('');
        $(".box-form-user").fadeOut();
        return false;
      });
    });
  }
}
function cariUser(_0x4014f0, _0x3cb937) {
  if (_0x4014f0) {
    var _0x4d2f04 = [];
    var _0x246849 = 0x0;
    db.collection("datausers").orderBy("email", "desc").get().then(function (_0x593b97) {
      _0x593b97.forEach(function (_0x2122b3) {
        var _0x365311 = _0x2122b3.id;
        var _0x2169ac = _0x2122b3.data();
        _0x4d2f04[_0x246849] = {
          "id": _0x365311,
          "nama": _0x2169ac.nama,
          "hp": _0x2169ac.hp,
          "email": _0x2169ac.email,
          "alamat": _0x2169ac.alamat,
          "foto": _0x2169ac.foto,
          "status": _0x2169ac.status
        };
        _0x246849++;
      });
      var _0x22e0da = '';
      for (i = 0x0; i < _0x4d2f04.length; i++) {
        if (_0x4d2f04[i]) {
          var _0x29a104 = _0x4d2f04[i];
          var _0x1dc091 = _0x29a104.id;
          var _0x48f5aa = _0x29a104.nama;
          var _0x344387 = _0x29a104.hp;
          var _0x1481bf = _0x29a104.email;
          var _0x1a70ed = _0x29a104.alamat;
          var _0x3519ca = _0x29a104.foto;
          var _0x27aab0 = _0x29a104.status;
          if (formatNama(_0x48f5aa) == formatNama(_0x3cb937) || _0x1481bf == _0x3cb937 || formatNama(_0x27aab0) == formatNama(_0x3cb937) || _0x344387 == _0x3cb937.split(/[^0-9]/).join('').replace(/^[0]/, "62")) {
            _0x22e0da += "    <div class='data-user-wrap' data-id=" + _0x1dc091 + ">      <div class='data-user-container'>        <div class='data-user-image'>          ";
            if (_0x3519ca == null) {
              _0x22e0da += "          <img data-file='' src='" + urlFoto + "' width='60' height='60' alt='" + _0x48f5aa + "'/>          ";
            } else {
              _0x22e0da += "          <img data-file='" + _0x3519ca + "' src='" + _0x3519ca + "' width='60' height='60' alt='" + _0x48f5aa + "'/>          ";
            }
            _0x22e0da += "        </div>        <div class='data-user-info'>          <div class='data-info-name'>" + _0x48f5aa + "</div>          <div class='data-info-other'>            <div class='data-info-email'>" + _0x1481bf + "</div>            <div class='data-info-hp'>" + _0x344387 + "</div>            <div class='data-info-alamat'><span class='alamat'>" + _0x1a70ed + "</span></div>          </div>          <button class='edit-user' role='button'><svg viewBox='0 0 24 24'><path fill='currentColor' d='M19,19V5H5V19H19M19,3A2,2 0 0,1 21,5V19C21,20.11 20.1,21 19,21H5A2,2 0 0,1 3,19V5A2,2 0 0,1 5,3H19M16.7,9.35L15.7,10.35L13.65,8.3L14.65,7.3C14.86,7.08 15.21,7.08 15.42,7.3L16.7,8.58C16.92,8.79 16.92,9.14 16.7,9.35M7,14.94L13.06,8.88L15.12,10.94L9.06,17H7V14.94Z'></path></svg></button>        </div>        <div class='data-user-bottom'>          <div class='data-user-status'>" + _0x27aab0 + "</div>          ";
            if (_0x27aab0 == "admin" || _0x27aab0 == "penjual" || _0x27aab0 == "user") {
              _0x22e0da += "          <div class='data-user-active aktif'>Aktif</div>          ";
            } else {
              _0x22e0da += "          <div class='data-user-active non-aktif'>Belum Aktivasi</div>          ";
            }
            _0x22e0da += "            <div class='delete-user'><svg viewBox='0 0 24 24'><path fill='currentColor' d='M9,3V4H4V6H5V19A2,2 0 0,0 7,21H17A2,2 0 0,0 19,19V6H20V4H15V3H9M7,6H17V19H7V6M9,8V17H11V8H9M13,8V17H15V8H13Z'></path></svg></div>        </div>      </div>    </div>  </div>          ";
          }
        }
      }
      $("#loadmorebtn").addClass("hapus");
      $(".loading-html").hide();
      $("#data-user").html(_0x22e0da);
      $(".data-user-wrap .edit-user").on("click", function () {
        $(".box-form-user").fadeIn();
        var _0xf10ee6 = $(this).parents(".data-user-wrap").attr("data-id");
        var _0x447c10 = $(this).parents(".data-user-wrap").find(".data-user-status").text();
        $(".box-form-user .data-update-other").text(_0xf10ee6);
        if (_0x447c10 == "admin") {
          $(".change-status li[data=1]").addClass("active");
        } else {
          if (_0x447c10 == "penjual") {
            $(".change-status li[data=2]").addClass("active");
          } else if (_0x447c10 == "user") {
            $(".change-status li[data=3]").addClass("active");
          }
        }
      });
      $("#tombol-edit-user").click(function () {
        $(".loading-update-user").show();
        var _0x8d8821 = $(".box-ganti-admin .konfir-status").text();
        var _0xf5242 = $(".box-form-user .data-update-other").text();
        var _0x487ff4 = db.collection("datausers").doc(_0xf5242);
        return _0x487ff4.update({
          "status": _0x8d8821
        }).then(() => {
          $(".loading-update-user").hide();
          notification("<div class='peringatan sukses'><svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'><path d='M12 2C6.5 2 2 6.5 2 12S6.5 22 12 22 22 17.5 22 12 17.5 2 12 2M12 20C7.59 20 4 16.41 4 12S7.59 4 12 4 20 7.59 20 12 16.41 20 12 20M16.59 7.58L10 14.17L7.41 11.59L6 13L10 17L18 9L16.59 7.58Z' /></svg></div>Data berhasil di update");
          $(".box-form-user").fadeOut();
          var _0x278b09 = $("#pencarian").val();
          cariUser(_0x4014f0, _0x278b09);
        })["catch"](_0x274416 => {
          $(".loading-update-user").hide();
          notification("<div class='peringatan gagal'><svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'><path d='M11,15H13V17H11V15M11,7H13V13H11V7M12,2C6.47,2 2,6.5 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20Z' /></svg></div>Data gagal diupdate, silahkan coba lagi");
          console.log(_0x274416);
        });
      });
      $("#tombol-close-user").click(function () {
        $(".loading-update-user").hide();
        $(".box-ganti-admin .konfir-status").text('');
        $(".change-status li").removeClass("active");
        $(".box-form-user .data-update-other").text('');
        $(".box-form-user").fadeOut();
        return false;
      });
    });
  }
}
function editProfile(_0x2f5b9e) {
  if (_0x2f5b9e) {
    db.collection("datausers").where("email", "==", _0x2f5b9e.email).get().then(function (_0x5d72e1) {
      var _0x30c61c = _0x5d72e1.docs[0x0].id;
      var _0x418c03 = _0x5d72e1.docs[0x0].data();
      if (_0x418c03.nama == null) {
        var _0x4bde87 = '';
      } else {
        var _0x4bde87 = _0x418c03.nama;
      }
      if (_0x418c03.hp == null) {
        var _0x578dd7 = '';
      } else {
        var _0x578dd7 = _0x418c03.hp;
      }
      if (_0x418c03.alamat == null) {
        var _0x97fd58 = '';
      } else {
        var _0x97fd58 = _0x418c03.alamat;
      }
      var _0xc39472 = _0x418c03.foto;
      var _0x38fa59 = _0x418c03.email;
      var _0x46e12b = _0x418c03.status;
      var _0x5a7ee5 = '';
      _0x5a7ee5 += "<form class='html-profile'>";
      _0x5a7ee5 += "<div class='datainput'>";
      _0x5a7ee5 += "<label for='Nama Lengkap'><svg viewBox='0 0 24 24'><path fill='currentColor' d='M12 3C14.21 3 16 4.79 16 7S14.21 11 12 11 8 9.21 8 7 9.79 3 12 3M16 13.54C16 14.6 15.72 17.07 13.81 19.83L13 15L13.94 13.12C13.32 13.05 12.67 13 12 13S10.68 13.05 10.06 13.12L11 15L10.19 19.83C8.28 17.07 8 14.6 8 13.54C5.61 14.24 4 15.5 4 17V21H20V17C20 15.5 18.4 14.24 16 13.54Z'/></svg><span>Nama Lengkap</span></label>";
      _0x5a7ee5 += "<input class='validate' id='nama' name='Nama Lengkap' placeholder='Nama Lengkap' value='" + _0x4bde87 + "' type='text'/>";
      _0x5a7ee5 += "</div>";
      _0x5a7ee5 += "<div class='datainput'>";
      _0x5a7ee5 += "<label for='Nomor HP'><svg viewBox='0 0 24 24'><path fill='currentColor' d='M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.69 2 12.04 2M12.05 3.67C14.25 3.67 16.31 4.53 17.87 6.09C19.42 7.65 20.28 9.72 20.28 11.92C20.28 16.46 16.58 20.15 12.04 20.15C10.56 20.15 9.11 19.76 7.85 19L7.55 18.83L4.43 19.65L5.26 16.61L5.06 16.29C4.24 15 3.8 13.47 3.8 11.91C3.81 7.37 7.5 3.67 12.05 3.67M8.53 7.33C8.37 7.33 8.1 7.39 7.87 7.64C7.65 7.89 7 8.5 7 9.71C7 10.93 7.89 12.1 8 12.27C8.14 12.44 9.76 14.94 12.25 16C12.84 16.27 13.3 16.42 13.66 16.53C14.25 16.72 14.79 16.69 15.22 16.63C15.7 16.56 16.68 16.03 16.89 15.45C17.1 14.87 17.1 14.38 17.04 14.27C16.97 14.17 16.81 14.11 16.56 14C16.31 13.86 15.09 13.26 14.87 13.18C14.64 13.1 14.5 13.06 14.31 13.3C14.15 13.55 13.67 14.11 13.53 14.27C13.38 14.44 13.24 14.46 13 14.34C12.74 14.21 11.94 13.95 11 13.11C10.26 12.45 9.77 11.64 9.62 11.39C9.5 11.15 9.61 11 9.73 10.89C9.84 10.78 10 10.6 10.1 10.45C10.23 10.31 10.27 10.2 10.35 10.04C10.43 9.87 10.39 9.73 10.33 9.61C10.27 9.5 9.77 8.26 9.56 7.77C9.36 7.29 9.16 7.35 9 7.34C8.86 7.34 8.7 7.33 8.53 7.33Z'/></svg><span>Nomor HP</span></label>";
      _0x5a7ee5 += "<input class='validate' id='hp' name='Nomor HP' placeholder='Nomor HP' value='" + _0x578dd7 + "' type='number'/>";
      _0x5a7ee5 += "</div>";
      _0x5a7ee5 += "<div class='datainput'>";
      _0x5a7ee5 += "<label for='alamat'><svg viewBox='0 0 24 24'><path fill='currentColor' d='M12,11.5A2.5,2.5 0 0,1 9.5,9A2.5,2.5 0 0,1 12,6.5A2.5,2.5 0 0,1 14.5,9A2.5,2.5 0 0,1 12,11.5M12,2A7,7 0 0,0 5,9C5,14.25 12,22 12,22C12,22 19,14.25 19,9A7,7 0 0,0 12,2Z'/></svg><span>Alamat</span></label>";
      _0x5a7ee5 += "<textarea class='validate' name='Alamat' id='alamat' placeholder='Alamat Anda'>" + _0x97fd58 + "</textarea>";
      _0x5a7ee5 += "</div>";
      if (_0xc39472 == null) {
        _0x5a7ee5 += "<div class='datainput'><label for='upload'><svg viewBox='0 0 24 24'><path fill='currentColor' d='M12 3C14.21 3 16 4.79 16 7S14.21 11 12 11 8 9.21 8 7 9.79 3 12 3M16 13.54C16 14.6 15.72 17.07 13.81 19.83L13 15L13.94 13.12C13.32 13.05 12.67 13 12 13S10.68 13.05 10.06 13.12L11 15L10.19 19.83C8.28 17.07 8 14.6 8 13.54C5.61 14.24 4 15.5 4 17V21H20V17C20 15.5 18.4 14.24 16 13.54Z'/></svg><span>Upload Foto Profile</span></label><div class='keterangan'>*Ukuran foto disarankan persgi dengan Rasio 1:1 dengan kapasitas maksimal 1Mb (Pastikan saat upload file muncul keterangan <b>file berhasil diupload</b>)</div><input class='validate' id='upload' name='upload' type='file' accept='image/*' value='pilih file'/><span class='keterangan' id='uploaded'><input id='linkfile' data-file='' value='' type='hidden'/></span></div>";
      } else {
        _0x5a7ee5 += "<div class='foto-user datainput'><label for='upload'><svg viewBox='0 0 24 24'><path fill='currentColor' d='M12 3C14.21 3 16 4.79 16 7S14.21 11 12 11 8 9.21 8 7 9.79 3 12 3M16 13.54C16 14.6 15.72 17.07 13.81 19.83L13 15L13.94 13.12C13.32 13.05 12.67 13 12 13S10.68 13.05 10.06 13.12L11 15L10.19 19.83C8.28 17.07 8 14.6 8 13.54C5.61 14.24 4 15.5 4 17V21H20V17C20 15.5 18.4 14.24 16 13.54Z'/></svg><span>Foto Profile</span></label><img src='" + _0xc39472 + "' width='120' height='120' alt='" + _0x4bde87 + "'/><div id='tombol-ganti-foto'>Ganti Foto Profile</div></div><div class='datainput' id='show-foto-profile'><span class='keterangan'>*Ukuran foto disarankan persgi dengan Rasio 1:1 dengan kapasitas maksimal 1Mb (Pastikan saat upload file muncul keterangan <b>file berhasil diupload</b>)</span><input class='validate' id='upload' name='upload' type='file' accept='image/*' value='pilih file'/><span class='keterangan' id='uploaded'><input id='linkfile' data-file='" + _0xc39472 + "' value='' type='hidden'/></span></div>";
      }
      _0x5a7ee5 += "</form>";
      _0x5a7ee5 += "<div id='loader' class='center'></div>";
      _0x5a7ee5 += "<div id='load-sukses' class='center'></div>";
      _0x5a7ee5 += "<button class='button-submit' id='tombol-profile'>Update Profile</button>";
      $("#html-edit-profile").html(_0x5a7ee5);
      $(document).ready(function () {
        $("#tombol-ganti-foto").click(function () {
          $("#show-foto-profile").slideToggle("normal");
        });
      });
      $("#tombol-profile").click(function () {
        var _0x571332 = $("#nama").val();
        var _0x84aab = $("#hp").val();
        var _0x3c1582 = $("#alamat").val();
        var _0x3ad2a2 = $("#linkfile").attr("data-file");
        if (_0x571332 == '') {
          notification("<div class='peringatan gagal'><svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'><path d='M11,15H13V17H11V15M11,7H13V13H11V7M12,2C6.47,2 2,6.5 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20Z' /></svg></div>Nama wajib diisi");
          return false;
        } else {
          if (_0x84aab == '') {
            notification("<div class='peringatan gagal'><svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'><path d='M11,15H13V17H11V15M11,7H13V13H11V7M12,2C6.47,2 2,6.5 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20Z' /></svg></div>Nomor WA wajib diisi");
            return false;
          } else {
            if (_0x3c1582 == '') {
              notification("<div class='peringatan gagal'><svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'><path d='M11,15H13V17H11V15M11,7H13V13H11V7M12,2C6.47,2 2,6.5 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20Z' /></svg></div>Alamat wajib diisi");
              return false;
            } else {
              return _0x3ad2a2 == '' ? (notification("<div class='peringatan gagal'><svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'><path d='M11,15H13V17H11V15M11,7H13V13H11V7M12,2C6.47,2 2,6.5 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20Z' /></svg></div>Foto profile wajib diisi"), false) : ($("#loader").show(), $("#load-sukses").hide(), $("#load-sukses").removeClass("sukses"), $("#load-sukses").removeClass("gagal"), db.collection("datausers").doc(_0x30c61c).update({
                "nama": _0x571332,
                "email": _0x38fa59,
                "hp": _0x84aab.split(/[^0-9]/).join('').replace(/^[0]/, "62"),
                "alamat": _0x3c1582,
                "foto": _0x3ad2a2,
                "status": _0x46e12b
              }).then(() => {
                $("#loader").hide();
                $("#load-sukses").addClass("sukses").html("Data berhasil diupdate").show();
                setTimeout(function () {
                  window.location.href = urlProfile;
                }, 0x1388);
              })["catch"](_0x44745d => {
                $("#loader").hide();
                $("#load-sukses").addClass("gagal").html("Data gagal tersimpan, silahkan refresh dan edit ulang").show();
              }), false);
            }
          }
        }
      });
    });
  }
}
;
function gantiPassword(_0x2f23e0) {
  var _0x44a731 = "<form class='html-password'>  <a href='" + urlHome + "'><img src='" + urlLogo + "' width='300' height='100' alt='logo'/></a>  <div class='datainput'>    <label for='password'><svg viewBox='0 0 24 24'><path fill='currentColor' d='M22,18V22H18V19H15V16H12L9.74,13.74C9.19,13.91 8.61,14 8,14A6,6 0 0,1 2,8A6,6 0 0,1 8,2A6,6 0 0,1 14,8C14,8.61 13.91,9.19 13.74,9.74L22,18M7,5A2,2 0 0,0 5,7A2,2 0 0,0 7,9A2,2 0 0,0 9,7A2,2 0 0,0 7,5Z'/></svg><span>Password Lama</span></label>    <input class='validate' id='password' name='Password' placeholder='Masukan Password Lama' type='password'/>    <span id='show-password' class='show-password'><svg class='icon-hidden' viewBox='0 0 24 24'><path fill='currentColor' d='M11.83,9L15,12.16C15,12.11 15,12.05 15,12A3,3 0 0,0 12,9C11.94,9 11.89,9 11.83,9M7.53,9.8L9.08,11.35C9.03,11.56 9,11.77 9,12A3,3 0 0,0 12,15C12.22,15 12.44,14.97 12.65,14.92L14.2,16.47C13.53,16.8 12.79,17 12,17A5,5 0 0,1 7,12C7,11.21 7.2,10.47 7.53,9.8M2,4.27L4.28,6.55L4.73,7C3.08,8.3 1.78,10 1,12C2.73,16.39 7,19.5 12,19.5C13.55,19.5 15.03,19.2 16.38,18.66L16.81,19.08L19.73,22L21,20.73L3.27,3M12,7A5,5 0 0,1 17,12C17,12.64 16.87,13.26 16.64,13.82L19.57,16.75C21.07,15.5 22.27,13.86 23,12C21.27,7.61 17,4.5 12,4.5C10.6,4.5 9.26,4.75 8,5.2L10.17,7.35C10.74,7.13 11.35,7 12,7Z'></path></svg><svg class='icon-show' style='display:none' viewBox='0 0 24 24'><path fill='currentColor' d='M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9M12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17M12,4.5C7,4.5 2.73,7.61 1,12C2.73,16.39 7,19.5 12,19.5C17,19.5 21.27,16.39 23,12C21.27,7.61 17,4.5 12,4.5Z'></path></svg></span>  </div>  <div class='datainput'>    <label for='currect password'><svg viewBox='0 0 24 24'><path fill='currentColor' d='M22,18V22H18V19H15V16H12L9.74,13.74C9.19,13.91 8.61,14 8,14A6,6 0 0,1 2,8A6,6 0 0,1 8,2A6,6 0 0,1 14,8C14,8.61 13.91,9.19 13.74,9.74L22,18M7,5A2,2 0 0,0 5,7A2,2 0 0,0 7,9A2,2 0 0,0 9,7A2,2 0 0,0 7,5Z'/></svg><span>Password Baru</span></label>    <input class='validate' id='currect-password' name='Currect Password' placeholder='Masukan Password Baru' type='password'/>    <span id='show-currect-password' class='show-password'><svg class='icon-hidden' viewBox='0 0 24 24'><path fill='currentColor' d='M11.83,9L15,12.16C15,12.11 15,12.05 15,12A3,3 0 0,0 12,9C11.94,9 11.89,9 11.83,9M7.53,9.8L9.08,11.35C9.03,11.56 9,11.77 9,12A3,3 0 0,0 12,15C12.22,15 12.44,14.97 12.65,14.92L14.2,16.47C13.53,16.8 12.79,17 12,17A5,5 0 0,1 7,12C7,11.21 7.2,10.47 7.53,9.8M2,4.27L4.28,6.55L4.73,7C3.08,8.3 1.78,10 1,12C2.73,16.39 7,19.5 12,19.5C13.55,19.5 15.03,19.2 16.38,18.66L16.81,19.08L19.73,22L21,20.73L3.27,3M12,7A5,5 0 0,1 17,12C17,12.64 16.87,13.26 16.64,13.82L19.57,16.75C21.07,15.5 22.27,13.86 23,12C21.27,7.61 17,4.5 12,4.5C10.6,4.5 9.26,4.75 8,5.2L10.17,7.35C10.74,7.13 11.35,7 12,7Z'></path></svg><svg class='icon-show' style='display:none' viewBox='0 0 24 24'><path fill='currentColor' d='M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9M12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17M12,4.5C7,4.5 2.73,7.61 1,12C2.73,16.39 7,19.5 12,19.5C17,19.5 21.27,16.39 23,12C21.27,7.61 17,4.5 12,4.5Z'></path></svg></span>  </div></form><div id='loader' class='center'></div><div id='load-sukses' class='center'></div><button id='ganti-password' class='button-submit center' type='button'>Ganti Password</button>  ";
  $("#html-ganti-password").html("<style>#wrapper,.post-body img,body{position:relative}body{background:#edf2f7;margin-top:10%;margin-bottom:10%}#belibeli-halaman-kredit,#belibeli-icon-notifikasi,#belibeli-widget-button-mobile,#content-wrap-page h1,#footer-wrap,#header-belibeli-navkirikanan,#header-belibeli-utama,.belibeli-garis-bawah,a.belibeli-whatsapp-show-chat{display:none!important}#content-wrap-page{padding:0}#wrapper{padding:25px;background-color:#fff;border-radius:.5rem;max-width:400px;width:80%;box-shadow:-8px 12px 18px 0 rgb(25 42 70 / 13%);overflow:hidden;margin:auto}.post-body img{display:block;margin:0 auto;width:90%;max-width:200px;height:auto}</style>" + _0x44a731);
  $("#show-password").click(function () {
    showPassword("password");
    $(this).find("svg").toggle("fast");
    return false;
  });
  $("#show-currect-password").click(function () {
    showPassword("currect-password");
    $(this).find("svg").toggle("fast");
    return false;
  });
  $("#ganti-password").click(function () {
    var _0x316ad7 = $("#password").val();
    var _0x4d0ae8 = $("#currect-password").val();
    if (_0x316ad7 == '') {
      notification("<div class='peringatan gagal'><svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'><path d='M11,15H13V17H11V15M11,7H13V13H11V7M12,2C6.47,2 2,6.5 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20Z' /></svg></div>Password wajib di isi");
      return false;
    } else {
      if (_0x4d0ae8 == '') {
        notification("<div class='peringatan gagal'><svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'><path d='M11,15H13V17H11V15M11,7H13V13H11V7M12,2C6.47,2 2,6.5 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20Z' /></svg></div>password baru diperlukan");
        return false;
      } else {
        $("#loader").show();
        $("#load-sukses").hide();
        $("#load-sukses").removeClass("sukses");
        $("#load-sukses").removeClass("gagal");
        var _0x292768 = firebase.auth.EmailAuthProvider.credential(_0x2f23e0.email, _0x316ad7);
        _0x2f23e0.reauthenticateWithCredential(_0x292768).then(function () {
          _0x2f23e0.updatePassword(_0x4d0ae8).then(function () {
            $("#loader").hide();
            $("#load-sukses").addClass("sukses").html("Password berhasil diganti").show();
            setTimeout(function () {
              window.location.href = urlProfile;
            }, 0xbb8);
          })["catch"](function (_0x31d520) {
            $("#loader").hide();
            $("#load-sukses").addClass("gagal").html("Terjadi Error, silahkan logout dan coba kembali. Bila belum bisa, Kami menyarankan untuk ganti password dengan menggunakan fitur Reset Password").show();
          });
        })["catch"](function (_0x3f6254) {
          $("#loader").hide();
          $("#load-sukses").addClass("gagal").html("Gagal!, password lama tidak sesuai").show();
        });
        return false;
      }
    }
  });
}
function beforeCheckout(_0x2ba34a, _0x4b5e8a) {
  var _0x5aee4c = '';
  checkProduk = JSON.parse(localStorage.getItem(_0x5378(284888620, "[TlR") + _0x5378(529468972, "(]6h")));
  checkProduk = Object.values(checkProduk);
  checkProduk.forEach((_0x1ef502, _0x3364f4) => {
    _0x5aee4c += _0x1ef502.produk + ",";
  });
  var _0x3b5f26 = _0x5aee4c.replace(/,\s*$/, '');
  var _0x501ee9 = _0x3b5f26[_0x5378(639307308, "QMi[")](",");
  var _0x186762 = [...new Set(_0x501ee9)];
  var _0x31b55d = formatNama(_0x186762[0x0]);
  $(_0x5378(595004972, "TYxK")).val("default");
  if (optionlogin == "on") {
    db.collection("datausers")[_0x5378(703663660, "[hmp")]("email", "==", _0x2ba34a.email)[_0x5378(626789932, "dgE8")]()[_0x5378(92999212, "QC&8")](function (_0x1957a8) {
      var _0x571ab6 = _0x1957a8.docs[0x0][_0x5378(118968553004, "k59^")]();
      var _0x1728ac = _0x571ab6.nama;
      var _0x2bda7f = _0x571ab6.email;
      var _0x272a30 = _0x571ab6.hp;
      var _0x333281 = _0x571ab6.alamat;
      $(_0x5378(12638219, "(]6h"))[_0x5378(2934795, "k59^")](_0x4b5e8a);
      $("#nama-user").val(_0x1728ac);
      $("#nomor-user")[_0x5378(25663499, "QZlP")](_0x272a30);
      $("#email-user").val(_0x2bda7f);
      $(_0x5378(36145163, "*J]!"))[_0x5378(22161419, "an)$")](_0x31b55d);
      $(".info-nama").hide();
      $(".info-nomor").hide();
      $(".info-email").hide();
      if (_0x1728ac == null || _0x272a30 == null || _0x333281 == null) {
        $("#belisekarang").hide();
        notification("<div class='peringatan gagal'><svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'><path d='M11,15H13V17H11V15M11,7H13V13H11V7M12,2C6.47,2 2,6.5 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20Z' /></svg></div>data profil belum lengkap, silahkan lengkapi data Anda");
        setTimeout(function () {
          window.location.href = urlProfile;
        }, 0xbb8);
      } else {
        if (_0x31b55d == "fisik") {
          var _0x5196d1 = "<option value='default'>Pilih Kurir</option>";
          for (i = 0x0; i < optionkurir.length; i++) {
            var _0x1865cf = optionkurir[i];
            _0x5196d1 += "<option value='" + _0x1865cf.id + "'>" + _0x1865cf.name + "</option>";
          }
          $("#kurir").html(_0x5196d1);
          $("#alamat-user").val(_0x333281);
          $(".info-kurir").show();
          $(".info-alamat").show();
        } else if (_0x31b55d == "digital") {
          $(".info-kurir").hide();
          $(".info-alamat").hide();
          $("#alamat-user").val("-");
          $("#kurir").html("<option value=''>No Kurir</option>");
        }
      }
    })[_0x5378(593169964, "irqu")](function (_0x2438e6) {
      $("#belisekarang").hide();
      notification("<div class='peringatan gagal'><svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'><path d='M11,15H13V17H11V15M11,7H13V13H11V7M12,2C6.47,2 2,6.5 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20Z' /></svg></div>" + ("Kesalahan dalam meng" + _0x5378(42804297, "BcP5") + ", silahkan" + " reload ul" + "ang"));
      setTimeout(function () {
        window.location.href = urlProfile;
      }, 0xbb8);
    });
  } else {
    if (optionlogin == "off") {
      if (_0x31b55d == "fisik") {
        var _0x1be856 = "<option value='default'>Pilih Kurir</opt" + _0x5378(437915180, ")SjY");
        for (i = 0x0; i < optionkurir.length; i++) {
          var _0x42611f = optionkurir[i];
          _0x1be856 += "<option value='" + _0x42611f.id + "'>" + _0x42611f.name + "</option>";
        }
        $("#kurir").html(_0x1be856);
        $(".info-kurir").show();
        $(".info-alamat")[_0x5378(319557164, "6u5H")]();
      } else if (_0x31b55d == _0x5378(658181676, "*J]!")) {
        $(".info-kurir").hide();
        $(".info-alamat").hide();
        $("#alamat-user").val("-");
        $("#kurir").html("<option value=''>No Kurir</option>");
      }
    }
  }
}
function renderCart(_0x117d2c) {
  var _0x3939ba = Object.values(_0x117d2c);
  var _0x22a8ce = "<table></tbody>";
  var _0x31c560 = 0x1;
  for (x = 0x0; x < _0x3939ba.length; x++) {
    var _0x468374 = _0x3939ba[x];
    var _0x1c99a5 = _0x468374.thumb;
    var _0x499645 = _0x468374.name;
    var _0x5e53f3 = _0x468374.price;
    var _0x36d24e = _0x468374.quantity;
    var _0x420b90 = _0x36d24e * _0x5e53f3;
    var _0x1b7be8 = _0x468374.size;
    var _0x468325 = _0x468374.link;
    _0x22a8ce += "<tr>";
    _0x22a8ce += "<td style='width: 70px;height: 70px;float: left;'><img src='" + _0x1c99a5 + "' alt='" + _0x499645 + "' width='60' height='60'/></td>";
    _0x22a8ce += "<td><a href='" + _0x468325 + "'>" + _0x31c560 + ". " + _0x499645 + "</a>";
    _0x22a8ce += "<br>Harga: " + angkaToRp(_0x5e53f3) + " x " + _0x36d24e + " = " + angkaToRp(_0x420b90);
    if (_0x1b7be8 != undefined) {
      _0x22a8ce += "<br>" + _0x1b7be8;
    }
    _0x22a8ce += "</td>";
    _0x22a8ce += "</tr>";
    _0x31c560++;
  }
  _0x22a8ce += "</tbody></table>";
  return _0x22a8ce;
}
function renderProduk(_0x4d0b16, _0x1243ab) {
  var _0x99edb = Object.values(_0x4d0b16);
  var _0xbc4dc3 = '';
  var _0x6ae174 = 0x1;
  for (x = 0x0; x < _0x99edb.length; x++) {
    var _0x52a175 = _0x99edb[x];
    var _0x38943a = _0x52a175.thumb;
    var _0x456d87 = _0x52a175.name;
    var _0x5a5dcc = _0x52a175.price;
    var _0x2b334 = _0x52a175.quantity;
    var _0x4296e3 = _0x2b334 * _0x5a5dcc;
    if (_0x52a175.size == undefined) {
      var _0xf02887 = "-";
    } else {
      var _0xf02887 = _0x52a175.size;
    }
    var _0x245281 = _0x52a175.link;
    _0xbc4dc3 += "<tr>";
    _0xbc4dc3 += "<td>" + _0x6ae174 + "</td>";
    _0xbc4dc3 += "<td style='text-align:left'>" + _0x456d87 + "</td>";
    _0xbc4dc3 += "<td>" + _0xf02887 + "</td>";
    _0xbc4dc3 += "<td>" + _0x2b334 + "</td>";
    _0xbc4dc3 += "<td>" + angkaToRp(_0x5a5dcc) + "</td>";
    _0xbc4dc3 += "<td>" + angkaToRp(_0x4296e3) + "</td>";
    if (_0x1243ab == undefined) {
      _0xbc4dc3 += "<td><a href='" + _0x245281 + "' target='_blank'><svg viewBox='0 0 24 24'><path fill='currentColor' d='M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9M12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17M12,4.5C7,4.5 2.73,7.61 1,12C2.73,16.39 7,19.5 12,19.5C17,19.5 21.27,16.39 23,12C21.27,7.61 17,4.5 12,4.5Z'></path></svg></a></td>";
    }
    _0xbc4dc3 += "</tr>";
    _0x6ae174++;
  }
  return _0xbc4dc3;
}
function historiProduk(_0x4e3973) {
  if (_0x4e3973) {
    $(".loading-html").show();
    var _0x4c4f79 = _0x4e3973.uid;
    var _0x546228 = document.getElementById("html-client");
    if (_0x546228) {
      db.collection("dataproduk").where("id", "==", _0x4c4f79).orderBy("inv", "desc").get().then(function (_0x243ffa) {
        var _0x20115f = _0x243ffa.size;
        var _0x2d23a0 = _0x243ffa.empty;
        if (_0x2d23a0 == false) {
          var _0x3950f6 = '';
          var _0x25c9f6 = 0x1;
          var _0x2edfbc = 0x0;
          var _0x1f517c = 0x0;
          _0x3950f6 += "<div class='detail-produk'>";
          _0x243ffa.forEach(function (_0x2ea221) {
            var _0x599648 = _0x2ea221.data();
            var _0x32bbd9 = JSON.parse(_0x599648.total);
            var _0x3f884c = _0x32bbd9["Total Pembayaran"];
            _0x1f517c = _0x1f517c + parseInt(_0x3f884c);
          });
          _0x3950f6 += "<div>Jumlah Checkout: " + _0x20115f + "</div>";
          _0x3950f6 += "<div>Total Pembelian: " + angkaToRp(_0x1f517c) + "</div>";
          _0x3950f6 += "</div>";
          _0x3950f6 += "<table class='scroll'>";
          _0x3950f6 += "<thead class='thead'>";
          _0x3950f6 += "<th>No</th>";
          _0x3950f6 += "<th class='thead-detail-pembeli'>Detail Pembelian</th>";
          _0x3950f6 += "<th class='thead-data-produk'>Data Produk</th>";
          _0x3950f6 += "<th>Total Pembayaran</th>";
          _0x3950f6 += "</head>";
          _0x3950f6 += "<tbody class='html-tbody'>";
          _0x243ffa.forEach(function (_0x543321) {
            var _0xf7a811 = _0x543321.data();
            var _0x2f3eb2 = JSON.parse(_0xf7a811[_0x5378(10720050, "4bEN")]);
            var _0x3680c2 = JSON.parse(_0xf7a811.produk);
            var _0x497c5a = JSON[_0x5378(32146226, "BcP5")](_0xf7a811.total);
            var _0x1c86d0 = renderCart(_0x3680c2);
            var _0x37c7d8 = _0xf7a811.inv;
            var _0x2763a8 = _0xf7a811.idproduk;
            var _0x1abe0c = _0xf7a811.status;
            var _0x4c178a = _0x2f3eb2["Tanggal Order"];
            var _0x11d2b8 = _0x2f3eb2.Pembayaran;
            var _0x1cbb0a = _0x2f3eb2.Pengiriman;
            var _0x1d9e5d = _0x497c5a.Voucher;
            var _0x291e77 = _0x497c5a["Total Pembayaran"];
            var _0x574b34 = _0x2f3eb2.Catatan;
            if (_0x1abe0c == "0") {
              var _0xffae13 = _0x5378(30057266, "QZlP") + "ru";
            } else {
              if (_0x1abe0c == "0") {
                var _0xffae13 = "Pesanan baru";
              } else {
                if (_0x1abe0c == "1") {
                  var _0xffae13 = "Konfirmasi";
                } else {
                  if (_0x1abe0c == "2") {
                    var _0xffae13 = "Pengiriman";
                  } else {
                    if (_0x1abe0c == "3") {
                      var _0xffae13 = "Selesai";
                    } else {
                      if (_0x1abe0c == "4") {
                        var _0xffae13 = "Batal";
                      } else {
                        var _0xffae13 = "-";
                      }
                    }
                  }
                }
              }
            }
            _0x3950f6 += "<tr class='data-user'>";
            _0x3950f6 += "<td>" + _0x25c9f6 + _0x5378(35058482, "kpno");
            _0x3950f6 += "<td class='tbody-detail-pembel" + _0x5378(3867442, "gGnn");
            _0x3950f6 += _0x5378(33092402, "[TlR") + "ody>";
            _0x3950f6 += "<tr><th>Invoice</th><td>:</td><td class='invoice'>" + _0x37c7d8 + "</td></tr>";
            _0x3950f6 += "<tr><th>Tanggal Order</th><td>:</td><td>" + _0x4c178a + "</td></tr>";
            if (_0x11d2b8 != "-") {
              _0x3950f6 += "<tr><th>Pe" + _0x5378(38159154, "dApk") + "th><td>:</" + "td><td>" + _0x11d2b8 + _0x5378(28029746, "an)$");
            }
            if (_0x1cbb0a != "-") {
              _0x3950f6 += "<tr><th>Pengiriman</th><td>:</td><td>" + _0x1cbb0a + "</td></tr>";
            }
            if (_0x1d9e5d != "-") {
              _0x3950f6 += _0x5378(6955826, "Zp[M") + "ucher</th>" + "<td>:</td>" + "<td>" + _0x1d9e5d + "</td></tr>";
            }
            if (_0x574b34 != "-") {
              _0x3950f6 += "<tr><th>Catatan</th><td>:</td><td>" + _0x574b34 + "</td></tr>";
            }
            _0x3950f6 += "<tr><th>Jenis Produk</th><td>:</td><td>" + backNama(_0x2763a8) + "</td></tr>";
            _0x3950f6 += "<tr><th>status</th><td>:</td><td><span class='status' data-status='" + _0x1abe0c + "'>" + _0xffae13 + "</span></td></tr>";
            _0x3950f6 += "<tr><td colspan='3'><a href='" + urlTransfer + "' class='button-submit'>Konfirmasi Transfer</a></td></tr>";
            _0x3950f6 += "</tbody></table>";
            _0x3950f6 += "</td>";
            _0x3950f6 += "<td class='tbody-data-produk'>";
            _0x3950f6 += _0x1c86d0;
            _0x3950f6 += "</td>";
            _0x3950f6 += "<td>" + angkaToRp(_0x291e77) + "</td>";
            _0x3950f6 += "</tr>";
            _0x25c9f6++;
          });
          _0x3950f6 += "</tbody>";
          _0x3950f6 += "<tbody class='footer-tbody'>";
          _0x3950f6 += "<tr>";
          _0x243ffa.forEach(function (_0x389fd2) {
            var _0xdaa378 = _0x389fd2.data();
            var _0x4f377c = JSON.parse(_0xdaa378.total);
            var _0x1af6fa = _0x4f377c["Total Pembayaran"];
            _0x2edfbc = _0x2edfbc + parseInt(_0x1af6fa);
          });
          _0x3950f6 += "<th colspan='3'>Total Pembelian</th><td><b>" + angkaToRp(_0x2edfbc) + "</b></td>";
          _0x3950f6 += "</tr>";
          _0x3950f6 += "</tbody>";
          _0x3950f6 += "</table>";
          $(".loading-html").hide();
          $("#html-produk").html(_0x3950f6);
        } else if (_0x2d23a0 == true) {
          $(".loading-html").hide();
          $("#html-produk").html("<p>Anda belum membeli apapun di toko kami</p>");
        }
      })["catch"](function (_0x4e38ba) {
        console.log(_0x4e38ba);
      });
    }
  }
}
function showDigital(_0x4f9d8b) {
  if (_0x4f9d8b) {
    var _0x135368 = document.getElementById("produk-digital");
    if (_0x135368) {
      var _0x263ad7 = _0x4f9d8b.uid;
      db.collection("produkdigital").where("id", "==", _0x263ad7).orderBy("inv", "desc").get().then(function (_0x8b38fa) {
        var _0x410f9d = _0x8b38fa.empty;
        if (_0x410f9d == false) {
          var _0x3199f2 = '';
          _0x3199f2 += "<div class='title-html-user'><h3>Produk Digital</h3></div>";
          _0x3199f2 += "<div class='produk-digital-wrap'>";
          _0x8b38fa.forEach(function (_0x42d52f) {
            var _0x320436 = _0x42d52f.data();
            var _0x513b51 = _0x320436.produk;
            var _0x295ea7 = _0x320436.link;
            var _0x55f7ed = "<a href='" + _0x295ea7 + "' target='_blank' rel='nofollow noopener' area-label='button download'><svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'><path d='M13,2.03C17.73,2.5 21.5,6.25 21.95,11C22.5,16.5 18.5,21.38 13,21.93V19.93C16.64,19.5 19.5,16.61 19.96,12.97C20.5,8.58 17.39,4.59 13,4.05V2.05L13,2.03M11,2.06V4.06C9.57,4.26 8.22,4.84 7.1,5.74L5.67,4.26C7.19,3 9.05,2.25 11,2.06M4.26,5.67L5.69,7.1C4.8,8.23 4.24,9.58 4.05,11H2.05C2.25,9.04 3,7.19 4.26,5.67M2.06,13H4.06C4.24,14.42 4.81,15.77 5.69,16.9L4.27,18.33C3.03,16.81 2.26,14.96 2.06,13M7.1,18.37C8.23,19.25 9.58,19.82 11,20V22C9.04,21.79 7.18,21 5.67,19.74L7.1,18.37M12,16.5L7.5,12H11V8H13V12H16.5L12,16.5Z' /></svg></a>";
            _0x3199f2 += "<div class='box-produk-digital'>";
            _0x3199f2 += "<div class='nama-produk'><p>" + _0x513b51 + "</p></div>";
            _0x3199f2 += "<div class='button-download'>" + _0x55f7ed + "</div>";
            _0x3199f2 += "</div>";
          });
          _0x3199f2 += "</div>";
          $("#produk-digital").html(_0x3199f2);
        }
      });
    }
  }
}
function _0x5495() {
  var _0x5bc923 = ["WOepWOGBq8kGWR4", "W4xcISkSimoSdYKSW5ZcKq", "W5xcGCo2ASk4xN58W5hcNG", "krxdGCkNW6i4lmoiW5yt", "fCoen8kammobWQJdNCkCW7a", "ASkHW5tcV8kzF0RcMNhdKa", "WQZcUmkpW7FcH2rkW7FcKSoF", "W53cKSoaW6dcUuVdQZRdHa", "WRq9dCogWOvwWQBcMmkFqG", "rCkmWRZcMxJdHSkAW4zMpa", "WPRcTCoTbxyNWPddNW", "W7bUb8oiWOaiW7ldLCkwhW", "m8oTWP/dSmofuG", "w8kzW5tcIMBdImkbWPe5Da", "W6KyWQmrsSo5WOnaW74Z", "WRGjWPxdL8kZqSkWWRLFW6W", "tCkSW4xcV8olkaBdItRdGq", "WQRcT8k5WRftr8oNWOnP", "W57cSSoeW77cQeNdRYNcGcK", "W4dcJSo/iSk6qxzJW4pdJq", "mmkTW5RdVcpcQbzscmoW", "aSoBW67dPgbQnH9VW7q", "ESofW7FcT8opWOJdHa", "k081ra", "W5StWQStsCkMWRjkofm", "WOldNSkXm8oGasuHW7JdHq", "W6JdSCo2W7CifmkGW498Da", "W71oWPiiWOHuW50rc8ov", "W7OAWRNcRCovWR/dH8odpNq", "W6/dSSoNW6KnamkWW4m9jq", "aSkgBSoaW4xdSsX2e8oz", "qmoNW47cGHDdWPRcISk4WQ4", "W6a2W6xcSZNdGK0YW696", "vCk0WPpdJ0jiWOJcM8k3WRm", "pCk3W5meW6vMW6FcIaFcPq", "gmoyn8ksimkjWRG", "q8kdWQ/cUdKWiWfNW48", "sc7cMCk3gCkfFMzNwa", "WQHDcG", "cmkqWQNdKWpcNIzMWQ90", "W63dQ8oJW6uoaCk+W4i+nq", "W78qW5nvW5bmWPHmuSkk", "WR9WW7RcQMBcKuCMWRqS", "cCoGWPpcHGryWPZcNmoXW6q", "gSk3WO/cGrebWOVcGmkYWQm", "F3u3ptBcJW90h8oq", "W4eHW7reW4ldLSkTbY3dNq", "emouW7RdIdBcKa", "DNi9msBcGWT0eCoj", "W5BcJSo1z8kwwgm", "sra5zSkjgHvXBgW", "W7jrW5tcNmoNv8kEW60kWQS", "W4a7W68", "bf9WWPbYW7RcKa", "W7ldQ8ojWQ7dHZihWQVcG8k+", "irjatSkIe8oyWRVdOJK", "W6OgW495WQBdSCkfbW3dJW", "D8ozWR/cP8onWPFdHq0bzq", "W71mW43cLq", "aSkxW6pdOgL/zqe3W6y", "CSkzWQ7cOHj4wttdP8kp", "qmk+WPdcL1GlWOVcMSkIWQ4", "mmoQWPxcVMtcQ0WFmmkN", "W6rkWO8xWOXpW5Sfd8oB", "WRlcI8opW7JdQNVdPsBdLam", "W7xdLJdcUCkevCkUy8ou", "dSopmSkcWPpcUYDHtSkA", "DhhdM8oOq8oiixSHdG", "W7ddKdldLJpcGSoVyXqQ", "qSkiWQxdKeRdL2O7WQiU", "FCkqW7hdSKC3gMpcRCka", "bSoFWRpcIJZcLCoAWOaXBG", "wGeXBCkxfbe2isG", "wCkBWQldMGVcG3TKWRj/", "ASk1W5ddOq", "uCkCWQFcGSkCWQxcKqrQDG", "k2ZdHCk/c8kjB3z1gW", "W6tdN3tdUhhdJ8k1BKXR", "E1RcHCoUW6uL", "CMa9lINdGru8eCon", "C8kxW6ddTLSRu3ddTCog", "B8omW74", "W5CBaCoYdxFcTa", "W7HRWQJdUNRcGvD1WRu5", "dCohpSkaWPFcQxqHc8km", "sSkLjCksWRerbSkech4", "BmkXW4ddPdBdQW", "kf4Tc8otWQxdLILexG", "xSowemkiW6SasuPbWPq", "WRLrbCob", "zepdSmk9W4W2", "qazPmCkndvG2ldm", "nvZcT8kbWOn+W53dNXZdVa", "ub42BCkgh25ZBM4", "h8k4W4PlBJddNubjDW", "y8oeW6tdPGX+axldPCol", "tCo5W6e", "iNa1", "ECk9W4zGWRW", "WRSHeSkvW4mDWQNcMmknuG", "WPqjsmkDWPNcS8oJkKWW", "WQC1WQ5zWRhdPwyfW5OR", "W4WDWOpcMuRcUSkCW5xcIwS", "DIyGmYJcIvP+fmor", "jemgW6yGW6azW5jPuW", "ymoFW53cSWTOdgtdH8kA", "E1tcJ8o/W6K8", "W7NcOmk7WQrvxW", "WRpcI8opW7tcRuK", "c1O/WOD2W73cHCkpp0i", "A2ZdNSoNqSoclIuG", "EmozW7RdQSkyW4ldK0fxBW", "W4TDW5RcNmoTdSkp", "cSobW6RdTgnXDvGOW6u", "W7BdUConWQ7cItehWRhdGSoF", "teJcLCk7c8kl", "fSodW6dcSNz3Dvu7WR0", "mmo4W4PtWQu+WRtdIGVcQq", "c8oAW7dcKG7cHcaQW6aW", "fq0/W4m3WQNdHmksjaq", "CSoYqmkzWO/cTvK", "FmkYW4hdUZJdQemwtmkW", "DqlcO8klW5yVWOxcHqFcPW", "W6uOW6ZcUYhdGeWHW6vH", "vSojf0ywDmoYW459WR8", "g8kXWRjAAINdGKmYAG", "jwCQdIxcMai", "WQZcQJddQamFWRH/nCoC", "oCkAWQlcPmoCW5BdHLTFma", "e8kyWPJdSXqr", "AdJdKCoUwCkuAciGgW", "u8opfq5yo8k6WPKPW60", "dmkUWRrAAs3dGKm1zG", "ySoPuSkvWPBcTb3dLSo5W6C", "odFdK8oOxCkxB3zPtW", "vSoAW6hdMdVcNmolWPmOCG", "WRRdKwhdThhdH8kVjGrK", "CCoiW6a", "xmkZW4FdJfLnW4NcH8kKWR8", "WRSDWR/cRCozWOtdR8ofk3S", "jCoXW4NdJZPTzu4JWQO", "dSkUWRu7BJddMvmXzG", "imoHW53cVgNdGrHthCk1", "WRCFWQZcU8olWQZdV8ofkW", "h8kArConW7yhrKiBWRi", "W73dL8k/n8oQdsa+WOpdGW", "iSkPW5hcRZtdQrHud8kO", "WRiZWQXhWQpcO3yjW4fk", "W7xcP8oOW7Ktr8o6W40Snq", "dL96W4nKW7/cG8ksAbe", "WPxcTCoGegCGWOS", "W406W7PB", "W5uqWQitwmkGWRiipum", "DgRdNSoItG", "rfzPoCozqKWOBw4", "WQ/dQCkaifxdTWhcNCkNW6O", "y8o/vCkwWOxcS1G", "W49um8o+b3NcUCkhWQZdRW", "W7ziWRJdPgJcNHTXW6bI", "dCoPW5JdHuuDW5NdGCoLW6m", "WOhdTmoPc20PWPpdLmofW4e", "zCo2WOqo", "WRVdMhZcTmolf8kQk8khWRK", "kSoTWPzLWQNcVCoxbmoeWQ0", "aKTRWOz5W60", "W78pW4XvW41mWOPkwSkA", "yhFdLmo0rSomisimaW", "WQuyWP3dJSkVs8ooW4LtW64", "WRKYtSkwW5quWQNcHmkceW", "WRpcQ8kMWQPprW", "W7dcHtddOmodhSo+ACotW7W", "WQddM3hcV8oBqmk6mCkvWQq", "cCoshvu", "v8oBkSojz8kQWOZdTmk+W48", "DqlcO8ksW4aNWPNcM0pdQa", "W4PxWQeDbSo3W5SvW7uN", "seFcUZldRN/cJXNdK1e", "cCowW6ZcNZ7cGIj1WQWW", "C0SmvSkWbCoCWQxdVJK", "W63dSmkooqVcTWNdMCk0WRa", "l0RdR8o7WRtcI0ldL8k3ea", "vSkqF8kiWPlcUIDHumkh", "W6RdGMdcVCkzuCkS", "jLhcImoTWRHXESouWPOB", "W7pcO8kpnqtcUuJcHmkJWRS", "t8oidmkoWRm", "W7OAWRNcRCovWR/dPSoenNK", "WR7cRJZdQXCnWQPWdCkm", "jdJcL8kHf8onjIbPda", "WQ3dQmkajXRdPulcKmkWWQa", "FmkKW49+", "WRSbWQtcR8orWO4", "W5JcHmoWBmo5tNHYW5hdKa", "gSopWO3cJKBdNNyKW6aG", "zv8OqmopW6hcK2ubcG", "WQywWQZcRmob", "tmo4WR1kjJ/cMWfGnG", "FgG9kc3cIG4Yf8ox", "WRalW4SgW58iWOrja8oe", "WPfdW7Dhu8kOW5CEWQz8", "WO51W61rWP/dL8o5rYBdNa", "W5ldM8oIWQldUXlcVxZcJfm", "dmoOW64EphNcMf5PjW", "WPuqW5tdHbldPmkpW4xcGgq", "pCoJWPW4W6JdRSkEwCowWOG", "fuLKimoBdqj4yhW", "hSorWOldSvjonWrOWQm", "W7vlW5/dHmkKcCkiW6KsWRC", "WRRcK2BdVMNdIW", "nJtcHmkVgCkzE256wW", "WOyjWQjsx8kSW7Osium", "W6f8sCkhWPGuW7JdISoaeW", "W57cKSonW7lcQvNdRcFdJa4", "hL96W54WW7NcHCowFbK", "n8ocW6lcP8onW4ddKf5Coa", "WRdcTxdcUefpW7HYqCoc", "BHyzWRzuWRDvWPmHga", "t8oDlmkFiq", "kCkPcCodWQNdPXpcJ8kRWQy", "j158eCkeWRhdNYPatG", "krVcK8o6W7i4nmkpWPGD", "mL/dTSk/WOrLW5JdHXBdQW", "kuJdR8oUWRxcKHNdMmo+sW", "W7T3WRJdPMRcMX1QWR09", "o8o1WO0PWQdcUSoBd8kmWR8", "gCkrWQZdGZFcM8oEWOq2zq", "WQRdOCksnW", "vCk0WPpdJ0jpWOZcGCkIWR8", "WO4wW7zgWPVdNCkSwMtcNa", "WRNdRmkejGW", "W7ddKdhcRINcN8oRBXuZ", "FCkBW7ZdO0e3ahRdTCoo", "WRZdOCkroaJcUWa", "W4rrWPhcL1FcU8olWP7dGwm", "jSoXWOtcUNNcVe0htCkM", "WQVcQCo+W7BcNNTsW7lcLmok", "WPhcHCoiW73dQKVdRtZdIeO", "WQxcMYddPhFdJCoKza", "F8o/bmktWONcOfldImoSW6S", "W40rWQe", "WOndWO3cMuNdUmolWORdHJC", "svvOoSohb0uVjdK", "E8obW7C", "oCoHWPS/W6BdRmklsmotW6C", "cCkAvmozW7GrwLXkW7u", "WQT0sCkdW5GLW6FdISoeeq", "W4ldR8k9uJn9W5pcG8ozWOW", "WRL7uSkuW5HAW7tdLmomaq", "W7RdTcldOCoycmoXFSocW78", "WOKHW7bCWOpdL8o5qNhcIq", "qf/cVW", "W6PjW7hdP8omWOtcQmkkk34", "j8kUW57cS8oekXhdIdO", "surLoCozseGQkxe", "WO0xkmoUg2BdVCkhWQddTa", "BsKMohO", "WP9Bl8o+fhBdRG", "w8opdG", "WQenW4XsW5yvWPfvwW", "odFdK8oOxCkxC3KTbG", "WPrYW5bgWPNdNCkTaYhcJG", "W6HSW7TzWQ7cUZXrWOfy", "BSofW7FcPSob", "DNZdKSoZb8kjpd8LdG", "AHTmxCk+qmkwW7C", "W6DEW71ut8o2W4KxW7j9", "EKhcJSo2", "frZcTNBcPq", "f0jHiCovb1G1js4", "aKfSWOzZW6dcHq", "lmoKW7BcU3NcT00htCkG", "WRBcOmk4WQjiwW", "W7ZdQ8ooWRddHICcW6xdR8kE", "w1jOmmortHn6nc4", "W5eBi8oUhJddRSojW6RdPG", "kNtdMmoGt8oaitfKhW", "W6NdKY3dTSk7aSoKASk7W7S", "WR7cOmk6WQbivG", "W6BdQSk5WRviwSoXWP0Ynq", "W7OdWQlcU8omW43dTmozo2m", "W7NdRCowW6xcIsysWRZdJ8kA", "FSoQqmku", "W5BdUSkUrcjUW4pcNSkyW5q", "kmkFWRZdPCksWQ7cKqiCya", "DHqLx8khW78", "jCo4WPhdRSolAfJcLN7cGW", "ESkgDmobzmoCW6RcGSouWRK", "qSkmWR/cM3BdJmkFW4fPna", "DHFdISkTW6NdKuZcH8oUvq", "p8kOeSkGW4BdRGhcLCoOW6S", "WOC+W7zgWONdM8k2ttFdNq", "WQhdLMq", "WPebWROtfSkSWR4", "EfVdUmkWWPv0W4S", "ESoJWO/cRW", "WOygWQSa", "eCo6oCkEjCogW6RcImoy", "WR3dT8oCCXRcVqNcMmk0WQy", "W5ysWR8a", "b8kkteDulSkZWOfOWQ8", "W7HzW5/cISk+xCkqW6ChWQy", "ESoWWPpcRCkEoHNdGZddGq", "W7ZdRCojWQ/dHIC", "WP7dJ0pcPJ3cGSoOBrWZ", "oH5hxCk0e8kuWQFcR20", "nqldTCoPWR/cNb3dHCkX", "W6z8t8kpW5quWRRdKmoeaq", "WOxcRSoRcMC8", "WOWhWQGhhSk2WOLhW6i3", "BauDW6W5W74zW5jPtW", "E8ohfaPfA8o8W5mZW70", "WPXxW5VdIHhcSSkfW5FdKNO", "r8ouW73dRgbQDa", "BauAW7HMWRah", "p3i3mJddJeK6f8ou", "cvr3WOjKW6dcImotDLC", "kvldUSk+WOD0W7ddNHlcQW", "avPXWOC", "c1PXWOG", "fbtdQJ/cQYZdMf/dLem", "W6avW5ZcKmoVe8kuW6KiWRC", "wSoxamkdWQi", "vmogpmkwnSkUWRm", "FbTzWQy0W64pW4P7qa", "wWLHA8kmbv42iti", "zSkSW5HGWRVdSSorb8kkWR8", "rSodmSkc", "sqeOW48MWR/dISkbiva", "W5hcI8o1qCk1tgrJ", "W7JdNddcUZxcJSoGBXu4", "k8oSWQxdUmktW43cKbCaFq", "W4yXW6Xd", "W6uSWQCxW7ZdRwajW5yA", "kc3cL8kXc8kzy2DPxG", "W7RdTmoHWPmoaSowW4e8qW", "kaRcTCk4WPj+W5FcHWxcPW", "n8oTWPhdVSolEftcHN7cLa", "WOldNSk/mCoRdsyIWP7dGq", "DLVdVSkIWOu8W5ldHrRcOW", "FSo8WODFWR86WO7dJvpdPG", "tCkoWRJcQtaSpXDMWQS", "WQdcQcZdTXqzW5H/u8oF", "u8oBfSkEW6SadaWtWRi", "W7ZdTSkDWRpdHJGeWQRdJ8oF", "pK8UwmoCWRldHIDmqW", "la/dOSo1WRVcLGZdL8kUra", "fmoNW4ddKKumW4NdJ8o2W7O", "ohNcL8oPwComkwTUbq", "FfCrfmoOr8klW7NdOc0", "nexcRCoXW5iKW53cNKdcOG", "WRldQmkdW7VdJtWqW6xdGmkt", "W6z8W6jzWR/cRdjCW5mD", "W4i0W7CiWOZdNCkMawtdHq", "WR7cRmkLWQXswSk5W5WYkq", "wWLZjCorrbnMyhW", "tCoEW7VdRgXbyKGPW6i", "WPPEWORcMfVdSSkBWP3dNce", "gSkyruqwASo6WODMW6W", "W4lcLSojWQ3cI1FdTYhcNeu", "E1VdOSk8WR/cKXNdHCkXwq", "WP3cISkmW7RcVLNdQwRcNG", "rKpcRNBdTglcMq", "W7HzW47cNmoVrmoCWQHgW6i", "gmkuWOldNvPkmuf1WRi", "WOnuz8k7swBcTCknWRhdOW", "FCoGW4BcRmkkkfNdLJ/dKW", "WQ4krSkyW5JcImo6DXzQ", "WPdcI8o4D8kPsxzKW5xdNa", "g1uDeMRcNXmRh8ok", "q8oeW6ddPwH6mvm0W6u", "qSkgW4dcRaycnbiVW7y", "yCo7v8kFWORcPe4", "wSoFyCosWONcOcqssCkA", "WPCbWQBdGr7dPmklW4xcJhC", "f8kxBCoEW53dVdP0fSkM", "mSoJWP86W6xdRmkCw8oDW6y", "WRL/smksW4evW7NcMmoohG", "c8kEWOtdSq", "d0DUEmkbcKeV", "WRddQmouWQVdGd0hWQVdLSkl", "q8ktWQJdMa", "ESooWQdcPr16axldPCol", "WRi0WQCx", "W77cVtZcVr4nW5L9tmod", "s8o/WOy7W6JdR8kswmoiW7S", "W6OquSkhWP/dICo6nu8M", "nvBdUSk0", "W4aBWQiqsSo6WO1hW7HY", "aCkgfCkmWQjpwGLcW7K", "W7NcQ8k5WRfvvCo3WPHTzG", "ju7dRSk8WQ/cIXNdGSk3fW", "W4FdGSkwWRpdSHlcSwJcL0O", "wmoCW6FdGthcNmopWO8TDa", "WP7cN8o+CCkTahv/W5tcIq", "W5jvWOK", "B8oFfSkmWRHgfe0uWRO", "vCkZWOhcMWTCWPZcM8oXW6q", "W6C8W7pcVZVcTKiVW6P0", "W7ZdU3ldPWmkWRrSxCon", "s1RcMCkMWQfHESoyWPvn", "AKtdQCoVWRpcKr8", "WP5yWRmqvmkNW4LgW6rS", "W6pcTSonDeFcTXxcH8k4W7K", "mhu7CtpcNGyPwmol", "FSkLWOPVWQhcS8oEvCodWQG", "mG/dS8oYWQJcIHpcLSkVaq", "W5icWRqC", "mq/dPCoWWR3cJaVcI8oLfa", "W6NcLZddSCowemoOySkxWQq", "g8ongb8aE8oYW4SZWRi", "WRH0WQJdVIJdI1OHW7XT", "t8ohl8kcWPtcQ3SYt8kb", "k0RdQmo7WQJcLW", "i2m/mZlcIsq1f8ox", "W7vVuSkcW4arW7pdKCokgW", "ACoTWO9cWQGXWQddMfJcRa", "WPywWQhcVCovW4ddL8oDk3m", "W77dSmoyWQtdGJOtWRe", "WRLPx8kjW5edWRFdM8obeW", "CqnrbmoTe8oDW7FdVgO", "fCogW6pdMqpcM2G", "W6XyW4DpW4OcWODqumkx", "WQZdHxhcV8kCuCkMoCotWOW", "W5BdQmk/sJDUW47cHSofWPC", "WP7cS8oQaq", "W7vBW4NcKCoSfSkyW60uW78", "WO4wW5DdW5qs", "W486W6SvW4JdLSkHeY/dMW", "W4rzWPm", "smohl8kCnSkiW63cJmoeW7O", "n8k+W4PtWQu+WRtdIGVcRa", "ASoeW6JcSq", "F8o1WOnuWQWlWQJdNLhdPW", "b8oTEmouW6KnvSkOqMm", "pmkbWQRdRf0QwhRcSCoz", "rCoueaGa", "WR3dM8kiW6NcMgfEW7hcKmoi", "e8k3WPlcLXzjWPVcMCkZW70", "WPyiWQ8CxmkG", "p8ovW5GbW6DOW6FcIapcPq", "kmkmW6tdRvX6at/dPmoB", "umkAvH8niG", "hL4Zx8kCWQdcKW5awq", "WRnQWQK", "FCkGW50", "W6tcPcdcRuSuW5eHhmke", "qmoAz8oxW4VdVY5ZfmoD", "qCkvWQxdKW", "DSkVW5ddQwRcOG", "W4ayWQSqsSoYWPjtW7O7", "w8osgbLiA8oVW5GQWR8", "WPLuDSkUbwRdQ8oxW7VcVG", "W77dTmouWQtdGG", "krxdGCk7WQzTpSkbW4nF", "W7mDWRJcPCoAWOxdPmkrCcq", "WRRdKMi", "WRy5W79EW6VdQwOuWPbB", "W7lcQ8knpvC", "WPPnzSoYgglcV8khWRhdOW", "WPFcJ8og", "WRpdT8onWRtdGhGcWQddKmku", "vSoWW4SvlhNcNJbGnq", "WQZdK3FdLKtdR8kyawXe", "jCkPeComW4JdPrhcI8kQW7a", "afzR", "xHmTW5i5WRJdNmkskui", "krRdUmkJW5yVWOxcHrpcRW", "W7DOW6XlWRpcVsroWOnd", "iLNdR8o5WQVcVbFdG8kSea", "W7NdJc7cOsNcMSo3DGqZ", "W4H4WQ0pW4/dHSk9echcLa", "ASkLW57cRmoloXVdGJVdHW", "j1ZcJ8o9W6KJn8kjW4yw", "f8kXWRbmDY3dML00CG", "W4qWW71bWO4", "WRvua8ohW5ZcMCkUzqOH", "WPXlW6Gvva", "WOddIfBcOu3cM8kpCH1l", "dKHPiq", "jepdR8o/WRC", "CmoxW7FdRSkvW5ZdKe8lDG", "x8koWQpdK1tdKxLWWQLM", "W7OAWRNcRCovW43dPSozlg4", "WQ/cSCkJWQDzfmkG", "E1ZdTSo9WRldGtBdL8kVbq", "W658uCkkWPGkW6xdL8ojbW", "WOpdNSk9nmo3fcyPWOpdHW", "WP0xWPxcHfFcTSoEW4ZcIW", "ESk+WOZdUCkForBdIJVcMq", "s8oamCkCkSomWRZdK8kuW7W", "WQddHelcTmkxvmkX", "dmkRWRboAYRdNejTDq", "fwCMpwtcNWi9f8ok", "e8odW63dMcS", "jSoUW7NcVMtcPuGsmmkK", "aCoRW6yxk3xcGbHGka", "W7NcTCkZWQHEuSoNWPj+Da", "W67dSmosWRa", "WQ3dNMBdR8owemoOFSotW60", "EuFcJSo/W7m6", "W4HeWOJcMHpcOmoiWO7dHW", "WR8mW4yz", "W4DmW7Xsc8oLW6PlyqC", "WOaqW4xdLH7dTCkBW4VcLwq", "W5tcGmoYCq", "oCkzW6tdOX80vdhdUmoh", "WOqXW7bpWOBdHSkLdgpcLW", "WQHFeSoiW4tcKSk/DHHY", "WRe6a8oAW4uBW6pdKmknfa", "W4iqkSoYgW", "W5JcTSoHbwyNWPhdLSogW5i", "W6mKW6/cPJ7dHZSWW6XH", "WOr9kSoTW4FcK8kVArXO", "dmkgs1HjlCkVW7POWQ4", "WPHNW5uzW57cKSo1vqJcMa", "bCo0WQ3dGfCmW5ZdGCoJWOW", "lKKUrSkvWQ7dHcS", "of4SwCkhWQq", "iLiLuW", "WQqiWP3dI8k6q8ofWQrwW6W", "ASoWW4ldVtBdTvrxhCoY", "W5ZcHSo5y8k3etH8W5hcKG", "W5BdUSkUwgyNWONcKCkiW44", "WQGxW5JcNCk9rSkiW6XyW6u", "W4pcJmoJA8kPwx5/W54", "WRCCWQhcPmoDWOpdOSoFmhq", "WRqZWRCxW7S", "W7JdRmoyWQNdNsahWQVcN8oq", "W6tdHh7cUmkgqmkTkG", "WRNcPmk6WQK", "WRpcQCk6W7GBumoRWOf+Ca", "WPebWROtfSk1WQGomKi", "e0LY", "c8oAW6ZcNuRdJxy0W6aW", "mgHYmshcGqyXf8oj", "smkwWQxdNGe", "dSkpF8ozW53dStrXh8oo", "fCkfA8otDSoDW6tcGSomWQK", "E8oeW6e", "WPNdTmoLW6SpaCk+W4i/oW", "WOtcV8oJc3qR", "WR3dT8oCCX/cUqNcNCk1WRu", "a0OHW584W73cHCoqDbu", "WO3dImoLBCk+sNT1WP3cLa", "WQpdVhNcVeDzWRS8eSkE", "WOCwW4DdW5zbWPHxuCkh", "oSoEW7FcUmobWO7dLerema", "nvhcImoTWQy4pSovWPip", "kwJdNSoTqSoblJHKcG", "w8khqSkoWRDve0akWQG", "W7yCW5zuW4SeWOzrFCkm", "jw8Mjq", "W6dcTCobyeNdQLxdLmoLWPW", "W6VcLNpdUgVdNSkRleb/", "tCowW5BdOqqsEXuPW6e", "W60mW5vbWPKxWOfasCkH", "BSk8W4FdQJNdSqO", "W4pcMmo+Cmk9eIS/W5hdJG", "W6NdU3/cSq", "jdJcL8kHc8kjB3z1gW", "vSohcWieCSkWW5eZW6W", "WPH7WQK", "W7yqWP7dI8kYvSoCWRPuW7m", "a8kaEmoaCSocW77cISkuWQq", "FmopW7VcVmkeWONdGv9fpq", "qCodfbSxC8oTWOr4W60", "cuDUAa", "l8oSWPVcVHtcT0SjtSkH", "d1jTWOr2WQtcLmoaDXq", "W4vtWPhdLL3cUCoAWPJdHNK", "W7RcMSo9AW", "wSowlCkDW5/dTG", "nCkfWR3dGtaMrXbQW48", "kI/cJSkHgmkjFMrPxa", "qCotkSkfWOJcVhSRr8od", "FqjTbmocW6/cHhangW", "WQZdLNpcUq", "WQH1xmkkW5qxW7BdLSkagq", "wmoCW6hdNIZcNCokW5X6", "WRHBWOJdMsdcKXHKWQOO", "BSkOWQLoBJddNuaVFW", "u8o8WPXvWQCRWRq", "k1BdPCk0WP9LW4O", "W7FcRCk/WRzixmoSWPO", "h8ohj8ooWO7cP3yVqSoo", "W7nnW7hcU8oiWOhdUmkwphy", "W5mSbCoiWOy5WQpcMmkCsW", "d1rLmW", "c18IW4r0W7ZcLSoaFr4", "ndJcHCk1c8kBE3f3uW", "c8kjvSoBW7ezrKipWRO", "CbPfWRGNW68lW55WpG", "W7LDW4lcK8oIhSkvWQHAWQa", "W7RdPCo2W6uax8o/WPfPEq", "W7RdR8kcyJZdQfJcH8oLW6q", "jhiMmYRdKKD5vSke", "WQhdVmogDa/cTXFdICo2WQq", "W5JcNCo0zmoKcN9KW4tcGa", "ErpdOCkIW6ddKb/cImo+aW", "kMZdMmo1sSofyImLdG", "WRPAW4NcLCoQgmkzW6qpW68", "AuBdSSo5WRhcOaJdHmkRbW", "oCoTWOpdQSolAKdcGwdcIa", "WRKlW45k", "W5BdPSo9eMvUWONdMmkoW5u", "W5rrWP3cPf/cOCoE", "W6KExSkBWOtdGSoRseG0", "W5dcI8ovW7BcPXhdTcFdKX4", "tLBcRG", "zCoufG0mCmo4", "WRVdMJ3cPSkeuCk4EConW60", "W5OtWRGvbCo5WQKrnGC", "WQdcLZ7cV8kzrmkHomkAWQy", "eCklu8kUW6CsvLXnW7u", "xmorlmkMemkVWPNdL8kBW6y", "W5bcWORcKKVcVSkwWO/dNcm", "avqVumkyWRpdNIrsqW", "WQpdOCkfpqJdVbhcNmkKWRK", "sSkEWQJdVGBcJcvN", "W7NcMYddSCohaSoKBmkPW6O", "oSoEW7RcU8otW4ddHLHepG", "WQKFW5JcMmoUgmkDW6blWRi", "W7ZdNdhcOYVcNmoTyXu8", "W5OHW7HAWR3dK8kWcsRdJG", "uSkIWOxcLG", "WQNcKcFcQvhdJ8k0iuvI", "dH5OWPf2W7K", "r8kVWO/cHq", "WP/cKSorW7BcPfG", "tSoiW5RcQ3CDCby7W7y", "emoEWRpcINJcVCoDWOH4sq", "W5K0W6TBWOO", "WOVcH8kCWRtdUXVcUGpdJWq", "r8kmWR7cJwJdMmkFW4fQmq", "hGddQZpcRsldK1RdJui", "W5xcICkSia", "seFcRM0", "k8kCWR7dTmkwW5/cKrSqyW", "W6GbuSkoWOJcGSk/AeqH", "s8o3W6yuE37cGWSSiq", "yqPzWQG3W7iiW5j7qa", "W6FdHxxcSSktxSk8C8kFWQW", "g8k/WRvjDY3dNJaZDW", "BsKHlcxcGLK", "ACo4WO4o", "iHfkvSk0qmkhW6NdOdK", "yWrgw8kJbmorW6tcO3y", "aCo3W7mxnZhcNafUiG", "bLD7WQb7W6JcL8ob", "aqhdQc7cTYZdMfNdHv0", "E8kQW5ddS8kBkHVdGIVdNW", "cCkwW5BdRL9kk2z0WR4", "zcPNFhtdJfD1rSke", "f8ovWQ7cG0BdJt51WRj3", "W4RdKCkpWQpdUv/cTgJcLeq", "w1BcT3ddRwNcQqFcLqi", "e8klumodW6ytsLTlW6i", "W7ybWQZcRmorWO/cTmkwnN4", "vmkHWRSEmMRdJbPLEW", "bKe/W591WRC", "W7zPvmkfW54d", "h8ojcSkbWR9dwH8yWRK", "dmoCW6VcKh/cGmolWPKSjW", "W6BdNSkPqCoRdsyPWP7dGq", "WPRcG8kbW7hcR07dRcNdKWm", "WQ9zbmofW4hcNSk9DW", "EmkUWOJcKXemWQhcHSkLWQ4", "D23dLCoSqSoD", "xCkLk8kjWQjz", "WOayiSo5fgddVCkxWQtdRa", "kmk2fmodWRldPNxcImkOW5W", "aSkxhCklWPhcQxqSr8kp", "WR3dMNW", "WP7cJCo0BSkWt3j8W5NdNq", "be5Hj8oXxG", "y8kxqdfcm8kJWOv1W6W", "W67dLgxcO8kevCkMkSkWWQi", "p2e7lI3cGqy3sSkl", "F8klW6tdO0yXtNddOCoD", "kCkKW4r5WR3cQ8kFhSklWR4", "jelcK8o6W7y", "W4SgiSo9", "W4HeWOJcMHpcTSoxWOldKcO", "W7DRW65nWRhcUtjrWOvy", "kcJcL8kWgCkfDHT4xq", "xqyJymouhHOIjgC", "hSoyW6FdI3/dISoVWOOSAq", "WPFdJ8oMA8k9wx8TWPFdGW", "pSkFWRxdQSo0WP/dJ0rviG", "WQmBWQJcUSoD", "WO9fCmk1rYxcISoxW7VcVG", "WPBdLxZcSmkywW", "vLFcJCo6W6G6FCowWOKm", "WPZcJCofW6O", "WO4bm8o6ghpdVmoBWQFdPW", "lmo9W5CxWOrUW7xcLqFcSG", "fSonebKmCCkWW5W3W74", "WQhcKMBdUcJdNSkRleb/", "WQjnW7hcQSonWPtdOSozmtO", "W73dPCkHWQXyr8o2W44RiW", "uN8UW5u5WR7dKCkskuq", "wvlcQhRdTxJcMq", "neFdR8oSWQZcLHBdKCkteq", "WP0sWQSu", "BCoeW7/cSCkeWOZdHefCoa", "W4ayWQmnva", "gSojW6lcI1ZdJwq6W7uP", "WPr3W7TnWOpdM8kMbsJdGa", "FaOAW6fRWR9rWPKOhq", "WPFcQSo+chS", "hmkaWQ3dJZ3cMmohWOm9Ba", "BvZcL8k7W6u9o8kBW4zc", "pLxdPCk0WPb6WPNdHbJcQa", "h8k4W7qooMJcMqaMEa", "eK9K", "zCkKW5/cTq", "jmo4WPi7W6JdP8ksumkxW6y", "gSo7AmoaW4ZdPcT+cmoD", "W7NcQCkZWQDDqCkZWPfTEW", "ASkHW5JcVCka", "sSkzWRJdLbZcIa", "xSowlCklWPpcVa", "W43dHCkbW6dcVL3dSd3dK1C", "x8ktWQpdK1tdJxy0W6aW", "yfVcLW", "c8okW6dcJeRdNgq4W7y+", "nmoTWOOPW6JdO8obgmkfWQu", "WQixW4PwW4KiWOzc", "WORcI8ovW7/cRW", "WPxdJ8oErmkF", "W4iapmo/hghcOmkzWQtdUW", "WRq7WQSxWRldUh0qWO1f", "WQzUWP7dICootSoqWRaWW7m", "ECoTWOTDWQHYW7pcNHBdOG", "W64Eu8kqWPhdICoRme8Q", "dCkuWPVdT0bkh0H6WRu", "zmkOW5GPW6BcQ8oxemkqW6y", "CComW6hcVCoiW43dLfjcja", "l8kDW7ZdO0yHwq", "pCkJc8oiW5dcNaRcLmkSWR8", "W7igrSkrWOJdGCoPkKWY", "fCkus0vspmkSWOP0WQO", "nblcOCoQWR3cKXhdKSkJea", "ptBcGSkHgSkBy2DWqq", "W7ZdU27cVe1EW6C", "rCo7s8kDWOpcSvhcMSoxW7G", "WQm9WQer", "hbfVWPf4W63cKCozEHe", "W4W5WRLlWOpdK8k3e3NcIW", "oCoTWOhdSSoAEexcKNlcJa", "W7viW5ZcLCo6", "W4ZdL8kuWQVdVbdcTgtcKey", "cCoGWOBcNqTyW4tdNSoNW7O", "tf3cRM3dOG", "WQmAW45jW48eWQTjx8kq", "W5/cN8o0Ba", "cqRdTcJcQcZdM1VdMKi", "W4KqWQ8gu8oLWR5ADMO", "EmoRWOnxWQ46WRu", "WRrHWRVdPx3cKcLGWQOO", "yehcHmo2W5K/l8kfW5CA", "WRDqW5JcLmoVv8kvW6yqWQ0", "WOC6W6LBWOBcN8k0csJdGa", "tSkuWRJdJXm", "kCoTWO3dSCkpmqlcMh7cLa", "gCkyWPJdVa", "WQLBwSkgW4tcKCk4yru4", "lSkbWQpdPSoOW5xcJGijFq", "yCo4WOyqWO0+WRFdMelcQW", "bf9+WPbKWRtdG8oECrG", "W7XzW5/cTSo0fmkSW7OjWRi", "wCktW6ZdTatcMZL9WQn1", "W6BcQCk/W7SauSk+WPT+Ca", "W4FdK8oIWQddPatcTwJcL0q", "iKuCW6zJ", "W4r3W7/cRq", "ybnctSkWsSojWRVcR30", "WPpcH8kCWRtcV0ZdQcFdGq4", "W77dNdJcUtpdOSoOCWO7", "ybhcUSo1WRhcMfJdHCkWbW", "WR7cPmkIWQqrrSoTWPz+oa", "W4KqWRuBh8o1WOiiWRzX", "W5BdUSkUrd5HWPVdMmkDWPW", "CNhdKSo2", "WQFdSSoFDfxcUuxcNmkJWRe", "W7tdK2tdVNpcKa", "W5JcJSoJzCk4agDIW5/cLa", "k8kuWP3dQXz8puH6WQS", "pGqEhCkLcmonWQJcRgK", "umoEemkg", "kvmGrmkWWRu", "WQBcIdVdUMtdLSo0ne1U", "qvtcK8o8W6DXf8kbW5Sw", "jmk7W4TLWQhcU8otg8kn", "B8kHW456", "umkYWOVdJKPoWPZcM8kIWRu", "bCo3W47dGfXGW5VdN8o4W6G", "WRqShCoxWODAWQBcICknsG", "x8orW5BcPf9blffVW6y", "W4GXW71RWOpdK8k3eW", "zSoWWO1NWQFcUCoDbmkiWQq", "zH9rWQu3W7ajW4j7qq", "WOitWQyac8k2WObBW7O3", "W4RdTCoVwG", "WRZdLhJcTmke", "vSo3WRLAEZZdJfmHzG", "i8o6W53dRIxdOHGkdmo8", "d8k4WRNdH0jjjK58W7a", "ASkWW5K", "amoBW67dUNiJnKGWW6G", "o8k0W51tW7HXW7pcIqFcSW", "WQpcUmkDW7VdIYasWRhdJmkr", "W6OaiSo2", "cCkqWPRdRvnGoG", "la/dTCoPWRJcNHdcLSkMdq", "crpdUJ/cUYZdLGlcMGe", "W6LuW73dQmkiW4dcPmkcFYG", "pqjqfSoXfmoqWQxcOxe", "nK8mW6W", "jSo8WPGNW7JdQ8klw8otW7W", "D3ddMmo2", "W6r+sCkpW4mF", "jCozW7pcTSoiWOJcGfrCma", "DHZcQmkPW6JcVeNcGmoIvq", "bCo+W47dH0uDW5VdG8oNW6m", "dSkxF8osW5lcRhmWgmoo", "aSoRW5BdKLumW5NdG8oNW7O", "sfRcTJ/cTxZcHH7cHW", "sCoiW7/cTSofWPtdGuvrpW", "WOLIWRCzW5NcNSoYtN3cNq", "ESkLW5JcRSkBmrRdGq", "ceOTnSorwerHydu", "t8kgWRNcPZqMxrbJWQK", "WRuEWQZdPCklW4dcUmosoNy", "W7HDW4lcNSo3eG", "W7j0wCkbW5aoWRRdNmoibG", "W4JdPSkHfgm6WPFcJ8oxWO0", "fePPmCovFKiHjZa", "W5ScWQSEuSkNWR8loaO", "WRRcK2FdPwddNCkQBKzR", "W7DUW65iWQJcOIbxW7Tf", "yWrqWR9lW6WlW55Wxq", "h8o0BSozW5pdVc1Xe8oD", "AKLVt8kHbSkzWPNcOwO", "m1BdTSo5", "W4G8W7uiW4hdN8kTdG", "f8orcSkjWQbidW4xWR4", "muRdTmoVWRxcKby", "xmowbmkEWQvReX4l", "ECoTWOTDWQH4W6FdIvRdQG", "d8o7W6yooJVdJbPLEW", "zsPJAgRdLvb5r8kw", "c8kEWPhdV1Pkh0H6WRu", "xmkkzmkuESoqW6xdLCogWRu", "W7ZdU2/cQLrfW6yO", "FLOgW7TZW7nwWOC9fG", "WPldLSkpWQpdVGJcShVcK1W", "BCkIW5i", "WPFdUSocawWPWPtdKmkBWOu", "WQiOWQPdWQ3cVciqW49p", "kCkmW7/dRaXKhx3cSCkp", "fCogW6pdMLtdKteQW7W/", "WQ3dLMtcSmoBvmkHlCkqWQi", "W4TCWQOBtCoLWRmdBaa", "C8kmW7/dR1aRuxddOCoD", "h8osf8kiWRaAxq", "W6ldQMNcRqquWRrSxCon", "WRnCrSonW4NcLSkUzqSM", "W6zUW7fvWQ7cVLfsWOzA", "CqnbvCk1hSkh", "ACoRWP5j", "CbHDWQG1W6OEW4X1aW", "g8kuzmoCimkfWRZcJmoyWQK", "xmosmSkbWOVcRvKQr8kD", "W5asWRmbgmo1", "vSoCW6FdGthcNmopWO8OCG", "vX8UW4mMWR7dImkdkJe", "tmkhqSkfWQjkfKaBWRO", "Femnd8oXvSkkW6FdSc8", "zSoVWPaPW6O", "WQyjWOddMCkXsmonWQfDW6i", "WQLeqCkjW4hcLmoNiWPU", "grpdQJ/cQtJdILNdGfy", "W7f0sCkkW5a", "WOBcRSoNc2XUWONdKmkhW5C", "WOxcR8oLf2C9", "eCoyW7RdP2u", "vCk3WPdcNHW", "WR3dT8kwoXVcVexcTSkWWQy", "dSkxF8ooW53dQdP6sSkp", "r8ofW4xcRaiBzaGRW6G", "W4a9W7HgWPRdHSkLdsxcHa", "hH3dRsJdMdxdHfJdGLe", "W5eBi8oUhJxdSmkbWRZdSG", "o8krW77dPG", "xCkIjSklWQbFemkchZW", "WR1ee8oA", "EGXXbCoDW7dcGwSrga", "cmkwWQpdNa7dGcvHWQTJ", "W6NcTCooWQNdGcuwWQddL8oD", "WRtcOSoSW7qjq8oMW4HHDa", "WRpdR8ouWQpdJJasW6JdGmkq", "zHddV8kLWOvHW4RcKfJdQq", "W6ddSI/dT0rfW7SReCki", "WPPeW6TfwmoxW5ChWRHM", "cmktWQldIWxcHdvX", "W67cPmobDeNdUexdLmoTW7S", "lSoTW4xcP8kBpuNcGtBdNq", "WRLUsCkFW5KFWQNcM8opfW", "W5qqWPBcNLhcOSkwWOpdNca", "WQNcSCk/WQ5DxCk+WObTDa", "pKqmW7OLW6qzW5a", "WRNcQCk3WRzp", "p1ldSCkWWOr9W40", "cmkbE8orW6uovSkJrxW", "W7FdT8oXW7SCe8k+W5mSnq", "A37dKq", "wmkrWR7dLbRcNJ80WPbI", "WR1ee8oAWOJcNmkZxX1N", "WO5zWPhcK1pcISolWPNdNcC", "WR7dMYRdTrukWQrStCob", "oCodW6NdHdBdLmozWOGSAa", "WQhdG33cVq", "W4xdTmk4u0f/W4VcN8ozWPC", "W5dcI8ovW7BcP2pdTdRdIqK", "t8odk8kCWPtcQM8Yq8kD", "e8kTWQTlBL3dN18YzG", "aSoIlSkoWRmc", "W7BdTCo6W7WscSkMW4m9iW", "EWHVbCodW6hcGNypgG", "W67dTxJcOa", "W7ZdRCojWQ8", "qSkzWR/cNMZdH8kcW5f2ma", "pCoQWPhcQCkcpaddJMpcKW", "W4bDW57cKmoUg8oCW4mhWRe", "q8oYW6zxBW", "W4WNW7vjWOtdH8o4tZtcLW", "W7NdStVdPWmkWRrSqCkj", "W5iEWQSDaSo6WOHhW6iZ", "CL/dVSkNW77dGq", "vSongWqDo8k9W581W60", "xCoFcCkeW7TsdGWsWRO", "B8kfCCoBW5hdUJrZbSoE", "WRZcPSobjX3cOqNcKCoSW7y", "ESkpWQ3dKX7cHcjT", "xmowdmkoWR0", "WQHlW5ZcMmoTwSkFW6qhWRe", "WPqoWQK", "oqhdK8kQWRfKACoeWOvr", "dmofW6VdRhmKmraJW78", "W5vCW4hcKmoTrSotW6qpW7W", "WP57WQ0zWQpcG8o0thldPq", "W4fDWOtdMWW", "uHmTW40MWRRdHmkdkv4", "amoyW6pdPwr9zuG8W6K", "DhZdLSo1tSkeoIuShq", "WPJcKmooW77cIvtdPtRdOWu", "zSkGWP7cSSkepXVdLxhdKW", "x8orW5BcUaPBoar4WQO", "A8ojW7FcPSkeWR7dHvTviG", "W7D4tCkkW5qzW7i", "gmkkrCoDW7yvtK1nW68", "vCkOW5XSWQBcQ8ob", "vr8TW4mNWQNdLmkEkfa", "W6ftWPigWOTtW4qudmkI", "W6z8W6jzWQpcO3yjW4fk", "yrjoWQHVWRTqWPuHbW", "eCkmW6JdHdtcKCkoWOWTBG", "WQmAW4jcW4a", "WPjLWQNdQY/cLX9ZWRqS", "WRqVeCouWOC5WQBcISkbqa", "nc7cM8kWhmoHEab4wW", "W6u8W7DdW4/dUCkRdIldGa", "uCoPW6be", "hSojWQtcRGPQc2ZcSCkE", "WO5pW6DesSkRW4OcWRzM", "qmoDW7ldSapcGZ95WQf8", "WOeFWRmzbSk2WPnbW7mG", "aSo8W6SBkg/dKvrJkq", "Eu8taSoPu8o8WQBcPNSObW", "vmkIi8kj", "WOdcVCkUeMSRWOJdS8keW5O", "W5baWOe0Fq", "A2VdKSoVx8oipdnUuq", "yWrgw8kJbmorWQRcR3C", "WP0sWOZcMfJcUSkwWOxdMJa", "WOqLW6ThWOVdH8kVqMtdMG", "u8kIWPq", "jSkTfmowW5tdVaJcLmkVWRi", "v8k5l8kkWPPidmkEhta", "WRZcMxJdO2tdNmk8iG", "gSoCW6VdGZ3cKa", "ACkSW5HGWQNcSCkvsmknWQ8", "ta7dVsRcVdlcOGRcHaq", "WP7cGmoHCCkWagD5W5ZcMq", "DK8JwCkvWRJcKYznsW", "wKddPZJdR23cIaFcKvW", "WOCLW6ThWOVdH8kVts3dHW", "WOenWQi", "e8kQW4zjDY/dJemHDG", "pKuDW6fHW7nmWP4Oaa", "ge3dQSo9WRlcLfRcLSkWaq", "W5BcHSo/zG", "gSkUWO7cLaObWORcH8k3WQ4", "FCk/W5dcVCka", "BvCFxSk4eCkzWQRcRhG", "WOjnWQ0hsCk3WR8ejqO", "wvlcRNFcPtdcMGRcGbK", "fSoehaCmFSo4W5uZWRi", "pWRcTq", "eSodpSkmWPhcRtOLsSkp", "W7WbuSkhWPRdHmo6mfK3", "W7VcQmoyfvVdTLddMmoJW7O", "xCkHi8keWQ4", "W7z0WRhdQ2ZcKbjUWRaP", "kcNdUSk5b8kBFb54wq", "fSklWQddUNf/FX9VWQG", "WQvIWRJdUdpdMHH0WQG5", "bmoNW5tdNf0mW5JdLSo4W6G", "mCoZqCohW4pcO1xdLCoVWQC", "EKBdNmk8W7i5p8kjW5fy", "W7VcSdhcOYVcMmoSBXmK", "W7NcLYhdQCoAaCoXcmoeWOu", "W6CKW6ZcVIpdJtKWW6HH", "a8kvcCkmWRrcfLnFW7S", "WRnmW4pcLmoHfCkqWQuwWRa", "WRpcOCoRW6C", "nLtcJSkVgSkqy25Nwq", "WPe4DCk3tdZdOSobWONcTq", "BvCFvSk4r8oDWQJcThG", "uCkJjSkiWQry", "WQZcUJZdUqmkWRrSxCon", "WP7cJCo+ESo0s3HIW53dNq", "amoun8kpWPpcR39RvCkA", "emkrWQNdVtNcH8oDWPy3CG", "umoTWQ3cTZ0XyuaNW68", "WR3cRdldRXikWQv1u8ou", "hmk/WQDAEZZdJfmHzG", "e8kqo8khWO7cQ3uZsmkA", "F8oVWO0", "CSoXsSkpWPa", "z1VdVSoVW41WWPNdGGxcOW", "j2fYkI3cIraBgCoC", "jSo8WPniW7RdS8kasmouW6S", "W4VdMSo7WRhdPqlcUgFdKXW", "WR1BeSoaW44", "zKpcQxBcPYpcHGRcLHq", "fmk/WRnuBcxdJei3zG", "WPboW7fnrSkPW4GkWQ9J", "WR3dQmoCWQpdJtWiWQlcMCoF", "WRrQWRZdO2m", "W60BW4PqWPKcWOretCkq", "bCokW7RcNvVdNNGLW7jC", "rCoufH8kF8oYW5u", "WPuOWQmnW6RdVZihW5yt", "kmoZWOZcUhVcSvCutSoz", "bCokW7tcNvVdMhGMW7e8", "WRKYx8ktW4eoW7JdLSkt", "WQawWRxcVmozWPldS8ox", "W6NdUCkaW7BdTa", "q8kgWR3cPtaRubj/WRq", "kMZdNSo1r8omyIyGaW", "W6rfW6xcPJFdLuOHW6XH", "W63dP8kjnr3dTrxcKCk/WR4", "vSojsConWR5gcaWpW7S", "jmkKW55SWQxdSSocb8kxWR8", "C3nWamkWW7pcN3CbgG", "fe5ViG", "dmoTW6izpNlcMf51lW", "F8k/W4y", "WQZdUxdcUfbzWQLUhSkf", "k1nTv8oFWQpdLILisa", "W4aBjCo6vx7cSCksWQW", "WRuDWQpcRCokW4ddV8oyl28", "W6zTW7nxWQFcVZ5zW7Pd", "FCo/gCovWOZdOWpcHSk3W64", "W78tW4XhW50iWOzce8kw", "o00BW6DYWRbDW58Qha", "W5NcGCojW7BcQvFdPIFdMe0", "wSoueCkFWQ8", "cvXXWOy", "dKLUA8kqcG1MyhW", "hSkWW6vezZpcJu09Aq", "f8kPWOhcNWrCWPVcGmkYWQ8", "WPNdT8oKW6uihCkMW4OSjW", "iSkYW4xdUZ7dQHChcSo0", "jCo9W5BdOdVdQGSDxmk2", "WQG7WQTzW4/dRwetW4aB", "wCoQWO9cW6K9WQldI17dQG", "qmkVW4dcLaXaWOxdKSoXWRK", "WO9ahCk5vxtcUCkzWQNcVW", "WQlcRINdUreeWQv/xCoC", "WR3cUmkbWQpdGcngWQBdJ8kE", "WRSPWRldUNVcNbvVW7TZ", "DmoTz8kvWPZdRr/cISk4WRO", "EWlcU8oMWRaJWPxcMfFdTG", "vCkBWQdcMhJdH8kaW5DVia", "x8oeW7VdSg17lWiKW7u", "W7xdM2tdTNhdJ8kWlvr/", "W4JcM8k2lCoNdtCSWP/cLa", "WQ49WQXuWQS", "bfT6WOb8W6ZcGa", "dCkwWPFcTuzDm0bUWQ0", "WOWvWQiya8o5WOnEW79/", "W7hdUCooWRtcLhCuWQddGmkA", "k8kzW7ZdT1C", "amoFW6RdQMP7Dq", "WQhdOmkupXZcRatcMCkWW7m", "W7OCWR3cU8orW43dPSoFm3m", "WOCeW6Lmb8k2WQWaCuq", "W6XDW7RdSCkyW5hcOmkyzIG", "W43dGCoHBCkQwtPYW5/cLa", "yCkuW7NcOLSGahRdVCoa", "yWrxw8kLeSokW6tcSgS", "lmk5W4OqW6L/W6FcMqRcPa", "BhhdHmo1rmoBjNf3la", "lHzpvG", "fCoamCkhkmkj", "W5pcGmo/DSk8q2m", "W4qrm8otgMFcOSkg", "tCoobmkdWQjAwq4qWRu", "sLf+WO15W6ZcLG", "hCoAW7VcK13dMHuTW64J", "W4RdTCo+wG", "eCkfWRxdT1PalGy7WRa", "zXKLWRSPW6WoW556pG", "WRjxs8oCW5JcLmk7CbWR", "crpdUJ/cPYpcJGlcGK8", "W6tdN3hcO8kruCoLoSkAWR4", "nSk6rSkwWOxcO07cH8k/W6G", "gLNdS8kWW5fZW5ZdHGlcQW", "C8kiW7/dSuzPxZldTCow", "tCktWQldMq", "q8kxWQ/cQse+mqfZWQC", "qCoLfGCkBSk6WPK+WQi", "ECkLW4n5WRJcTSoCd8kIWQC", "Duqpc8oJk8kiW7ZdRI0", "W5POWR5kWPRdHSkWdYRcHa", "mMm+ma", "W4tcISoPDSk4x3jXWPpcLG", "s8ovc8oaWRfifqOtWR4", "aSkgz8oaW4VdVLz3emoa", "mK8pW6D1WRTRWPCKha", "W7vYW7nlW5pcVsnaWOzb", "emk9jCkuWRerbSkefcS", "i07dSSo9W7hcJXFdHCk2dq", "hSksFSkhWPdcUhu0uSkp", "WRVcTSkZW6Hjx8o/WObTEW", "g8kqWOtdSW", "EmoWWP5CWQXIW6xcJrBdUa", "WQ/cMxtdHgddJCk2lub5", "ASoyW7dcUConWPNcGfXziW", "bCoNW5hdGeKDW57cOSoNW6G", "qSkkEmknWOJcUMGJsmkA", "WQKScCoiWObAWQBcGmkdrW", "rr7cSN7dQwVcIW", "w8ooW6VdGthcLSolWO0Xlq", "b8kqvvnljCkQWO5UWQG", "ErpdSSo9WR7cKX3cLSk1dq", "cqpdTI/cUZVdHLlcTum", "mmo7W5q", "pCkPW5RdOJxdQHukgCoX", "oaDhw8kLaG", "WQq5WQ4qWRldONmwW5WD", "aCoCW73cL3FdM8ozWPyVlG", "cmkDWQNdIuFcGYn5WQj1", "W7jub8oDW4NcMCk0DaXY", "WQRcMwBdUhFdIW", "wSoaDCkDjCkbWQVcKmog", "oItcMmoNrmoBiMH1cW", "AXZcPSkSW7ZdJ1tcHSoIvq", "b8kBnmksjSkjWQBcJmoeW6a", "W7fpWOmwWPvqW4GucCop", "W7/cLYddSCoghmo5FSolW6e", "qSowF8kAWPtcRhSTbSkp", "WQJcLYZcS8oiD8kPm8krWQW", "W7ldPCobpbVcVqpdICo2", "Bw7cL8oIr8oipcv0sa", "k8oTW4xcV8kzpXhdKMpcLG", "m8kFW7VdO0jOhs7dUmod", "emklk8kgW4pcHNv6cCkA", "WONcJCotW7FdTHpdPJ3dLb4", "k0Oe", "W4TkE8k0bMtcT8olW7NcRq", "ot/dK8oGx8oijJG5gG", "iSoTWOvDWQSWWQVcLfhdRG", "A3VdNmk6smogiZK7vq", "gqVdRIZcRJxdMeFdHuq", "zCoVW4PtWQu+WRtdIGVcRa", "W4ldRmk3xtv+W4JcKColWOi", "y3VcR8o/W4qOWPxcM0hdQa", "e0PVWOy", "umoEhaG", "DCo7uCkB", "vCkxWRJcPZmNmrH9WRy", "WQjRWQNdQ2m", "cCkgdSofb8oEW7JcKSomWQC", "CCkVWO/cR3tcSb0ts8oX", "v8oRW7Ctn3xcHbjVmW", "WQ/cRSo2WRfvv8o/WPGSzG", "sCkpWRJdIqxcG2G0W6aW", "vCkZWPtcGa", "hmk/k8kdWQXtrSolgty", "sepdVt/dQ2dcIWJcKrK", "ESk8W4hdRNRdOXblgq", "d0f6WOuQWQ4", "oGbufmkMvmkxWQBcSN4", "a8onW6i", "rWyGACkFtKqWFNW", "W6PLemkwW5WwW77dKmomha", "cSoNW4ddKKumW4NdJ8o2W6y", "emkCW5NdVvTnoua0", "WOhdNmk/n8kAhYy+WOldGq", "EWtcUCoPW5eGWORcHepdSq", "DCoiW7ZcS8oqWOu", "DWBcT8oNW50GWPFcKK7dPG", "W44BW7PtcCoUWPraW7m8", "uSkOjmkaWRfu", "x8kvW4VcV3SEBGGQW7C", "qmodreWvDCoXW5aYWR8", "WRqxW4XkW50eWPOygCk3", "eXq/WPbJW7dcImoxjvC", "W6bzc8ooWOJcG8kOz0qH", "pmkBWPSXWOVdRCkswCoDW6u", "hmkdEmoqW4hcUhSYtSoo", "W7hdSCotWQW", "zCkKW5pcU8khmvNdGt/dHG", "rSoscWilEW", "g8koF8oCW43dQc5Mf8oy", "qCotjSoq", "wmkFWQdcNgVdGmkEW5jRmG", "W5iFWQGabCooWRr+", "CMO7ncxcMeOPe8ok", "mqldLCkIWRr9A8oCWPTn", "f8kdWPpdVG", "qfxcS3tdUN/cG0FdMGu", "r8o8W7nAc33cNWb2kq", "WRygWRNcVmoxWO7cQmkwFZO", "W6bfDmk1qcFdVmoeW7ZcRa", "EKFcGG", "WPRcU8o3xMaIWPddKSkaWPK", "zmoTWODC", "p0Wp", "W6nqW4NcI8oM", "W4SDi8o+", "FfKt", "WORcJCot", "qmkJW57dIeu", "W6/cN3xdPxFdI8k3n2DL", "u8ohhq4QACoP", "Ab3cTSkSW6ZdKaVdGmkLqW", "W7OkWQlcVComWPxdTmotCxK", "aSozW7VdOhvNq0aNW6i", "ASk4W43dUW", "W6C2W7hcUZJcUeSZW7b5", "W47cM8k4sdrUW4/cKCoBWO4", "wCopdrjhpmoRW5G2W6O", "C8o8EmohW7D/uSofrxi", "W5SbWQKvsCkGW7Cvmfm", "W44WW60", "ELKAf8oOsCknW7hcQdq", "dCkisfPflSkSWPDRWQ4", "W4uqWOZcM1/cSSoEW4VdLIS", "WRZcK0ldMN3cL8k1fK5d", "WRPiW4pcISo3v8kEW6CcWRS", "WQvSWRldVq", "t8o+W7uDmNldLKmHjW", "u8kpWQ/cUdqWiXb/WRa", "BCoyWQBcRGn8DwZcQCoU", "WQ7dKMq", "WRuQWQvhWQpcO3avW4ma", "vSowamokW6G", "s8oofCoxW7KidrOiW7u", "a8kvcCkmWRrcfLndWRi", "u8ogpCkv", "WQO+WQCvW7BdRNCmW54", "gmkgF8oFW47dPIn3cSox", "bSkqqfnulSkXWOTUWRm", "iKhdSSkYWR/cKbxcMCkRcq", "yHjjWRKWW7ajW4vPsW", "BHfmsmk8sSolWQZcP3a", "WRrvfmkoWPBdKmo6jfKM", "W7SdWQZcVmoqW57cQSkzlgW", "g8kuEmotzmomW7BcNCkCW6a", "jLOYrComW6BdKsPzbW", "W6tdH3NcVCkFwmkPmmkgWRK", "suPVnmouq0mHBtq", "f8ojW6lcGdVcM8oaWPu5Aq", "WP0nW5JdIWpdQmkgW5BcIhK", "ymoFWQhcUHv6as3dSmoB", "W4ZdK8kqWQldUaZcSMtcKeq", "yIHNAwJdNv53q8ke", "W6WKW6ZcV3/cJueJW6jX", "pGva", "WQ8XWQvBWR/dPgafW5fj", "WQ4OWQ8v", "nCkzW77dT0yLudZcVmkB", "CaaqcSoHsSorW7RdScK", "bqhdQ17cQJVdHLRdG1e", "W4tcH8o0Ba", "WP4mW4RcHuJcSSkfW5FdHJq", "FHHyWQG/W74oW5jWxq", "jfqZw8kqWQ0", "WRZcMw7dOYJdMCkRiLqN", "kSkJW57cS8kekLNdJZddGG", "tCoEW7VdRgXbyvm6W6q", "DWxcP8o/W4KKWPNcM0hdQG", "ySo2WP4", "oLxdVSkIW5yVW7hdIXxcRW", "W5FdLmoZy8kQsceKWPZcMq", "tCoBpSkDWO7cHhm1uG", "WRuEW5DhWPqrWOfjv8kl", "zfKUtSoCWQFdNdDmbW", "Ce4aW6f0WRC", "W4KqWO7cK1pcT8oAWOFdNgq", "W6RdS3lcVq", "hmo7F8ofW6vDcmkFtxa", "WResWQ7cOa", "o8oHWOddQmkJAclcLg7dTq", "W5BdQmk6rJXYWO/dKmkFW4O", "yhNdG8oGbSohicqKdG", "kSkGW49NWQ/cUmohbSkfWQa", "k8kzW7W", "jmkVW5tcRmkkleNcGq", "yXfmsmk8sSokWRZcONq", "WQubWOldJCkXwSolWQzqW7C", "W7NdSColW7NcIxvgW6xcG8oF", "W60cWOZcL8oSfmkzWQHhWQS", "W43dL8oTWQldUrlcSN3cJfi", "BxBdH8o0x8kjoY85cG", "WRqsW4jpW5vgW5yztCkv", "WR/cPmk1WQ0", "fCoqoCkhjCkhWR/dGSkxW6C", "sCorpmkAmmoaW6NdKmkDW6u", "W7vlW4NdLmo2fSkDW7ShWQW", "DCoeW7dcSCoiWOtcJv9rpq", "vSk3W47cKaLdWO7cNmkMWRu", "W4HrWOVdMWW", "fKz6WPfUW5RcGCoEFrm", "lXHhqW", "uSkzWP/dQ0jalK03W6G", "W7RdPCo2W6uCe8k+W5mSkq", "iSoYW5FcSq", "WRalW5Du", "W7f/uSkcW4XeWRFcMmknuG", "WRvgwa", "WQ3dLMlcUSkBx8kSoW", "W6tdIc7cOIxcNmo3DbCM", "l8oUWPVcVMxdHKGuuSkM", "W4qvimo6gq", "W77dV3hcTLvp", "W6NdQCoNW7qsbSkOW5m1oq", "WRuqWQJcOmoxWOZdSSotlsC", "y8oeWR/dPLSYaW", "WOacW5FdHXFdRSkBWOJdMIG", "W6RdG3hcVmkuuCkGC8kvWQi", "dW5QxG", "W49uWPdcNrpcSCosWOZdNda", "f8kRWO/cKWebWPRcMSk9WQK", "dHqH", "Ee4aW7TSWRfxW5i", "W5tcISoJp8o+BNH+W4tcNW", "cq/cVNBdRsZcIqFcLqi", "yKKFfCkIeCoEW7FdVgO", "q8kBWRJcKaBcJdrXWQWY", "WR5vcSoaWOxcNmk7AH51", "W6BcUSoRWQJdNdyoWQddKCoD", "qmouW7RdU3n7CLv+W7C", "WOyfWRWgx8kKWQ4gm0y", "W7OSW7XfW73cSKybW5aD", "WPPyDSkTncxdVmocW6xcSG", "WQysWRNcOCowWOC", "sqzCW5q7WR3dISkhoei", "vCodWQldMLnYs0iCW4u", "wrm/W4m3WQNdHmkonXq", "uSkMWOtcLYXc", "wHrRWOXNWQtcHSohBaq", "yu8naSoPk8kiW7ZdRIG", "oXakW6bIWR1sWPCT", "ESocW7ZcOmobWOpdLa", "nw8KyMtdJeD5vSke", "WQj9WQ3dRZldKGPGWQ8+", "WQBdNNpcTa", "WRuxWQdcOCow", "W4feWOtdIHhcT8ooWP/dGsS", "WRNcQCk3WRzpdSk5WOvTEq", "WPPRWRZdRMRcKq", "W7dcHZxdQSkBuCkWC8keWQq", "g8kuEmotzmoqW6xdNSkzW6S", "WRGjWP7dL8k2sSoeWR5qW7u", "bCoPW5NdH0KDW5JcRmoKW6G", "xuhcS3JdVgNcMa", "WQFdKw7dOIJdNmkUBePL", "nJXGAttcLfW7f8oh", "WPCpWROgvmkOW6bwyqi", "w8kiWQxdNG8", "Cmo3rmoxW5y", "W57dGSkbWRpdQHZcPgJcGeO", "iSkRW5igW7PUW7lcGbRcUG", "dmkMWRmGFcldKfXXjW", "W4ldTSk/vYX5W4VdSSosWOW", "D23dLCoYx8oBjJGU", "w1ZcVMRdSa", "uSk5BCozWPvvcmkcghi", "x8oDlSonzmomW6RcKSoyWQK", "pfldO8kCWP5/W43dGG", "W5NcH8oWBmkSwxz9W5hdNq", "W6bxW7/cJCoXe8ksW68", "ixq9odhcH0OTe8ow", "DCo1WO8nW6S9WQJdI1ldRG", "W7NdJcZcPJxcJSoPyXqM", "z00OuSkuWQ4", "wSkOW5nQW65WW7NcHrNdUa", "BmohW6FcVCkeWP7dHvPfma", "W6PVvmogW6uFW7RdMSoihG", "WPlcV8o8", "W41OWR5DWP/dNSkRasdcJG", "WPNcQSoRcG", "v8ojauyvECoZW5O7W60", "zNtdNSoYq8omk3aKdG", "x8k5k8okWQTtcCkeaN8", "o8kPW5KCW7HTW6NcIqtcUG", "nCkkW7xdPa", "WP8tWQeCsW", "rmkxW7JdOgvQErX0WRy", "WRnCcSokWOjAWQFcMmkDxG", "WPRdUSo6axaLWPBdG8kcW48", "x8k5pSkv", "WQuEW5agW5qaWOnwv8ko", "a8oEdmkBW6HTdWatWRO", "ESo4WOy", "WRRcK3xdUwe", "ogVdH8oGrCkjldOOha", "je8YgmkBWRi", "WQiKWQ7dOMdcGLDPWRuP", "pmk5W5GeW6LTW7pcNGJcTW", "uCkbWOtdT1jAp1bzWQK", "W63dQmkonq3dTrBcGCk6WQC", "oSkzW7FdO14", "F8ocW6dcUCkjWOhdJ1bzpW", "FComWRlcSmonWP7dI1HE", "lGVdGCk7WQzXESoiWPvF", "A8k+W5K0W6/cRmoAb8ktW6y", "W44WW61TWOpdL8kPbsRdNq", "F8kPlSkZWQP/bCkzba", "sCkdW6NcK2tdM8oDWPC/pG", "DXKJu8kDWQJdKsbnqW", "W4/dT8ok", "m2m+FcFcGayQbCkz", "WObaWOtcKLRcVmovWOZcJ2q", "BHXksmk4cSkuWR3cSNG", "cKdcR3ldUwxcNKBcGH4", "ASkYW4hdRJS", "WQVdLNJdVmkgqSkNoSkgWQy", "qSkaWR/cNhBdHSkFW4fVlG", "WRqsWROBumkGWRzBFKm", "x8oFWRVcQwjYCfiGWRO", "WONdMmojW7RcRLJdOsBcMWC", "W5tcISo3y8kSqwm/WO/cKq", "l1JdO8kWWP1ZW5ZdMbBcSG", "W7jzW4JcNmokfa", "WRG6W73cQI/dLvOHW6aV", "a1jRWOi", "WR3dHxhcSSkD", "WRPqW5JcLmoVv8kmW7OjWQy", "zaPBWQGZW7aaW5j7uW", "W4WwWQOv", "W7y4WRNdO3NdLrLTWR0+", "W6n8wCkdW7Wu", "W67cPmobAa3cSrpdLmkYWRG", "WQ/dRNxcRu9pWRKLe8kD", "WRhcMMlcTmkfrCkKkSkaW7a", "gGVdUI3cQIldKLJdLea", "jmo9WP4WW73dQCkcxCojW7G", "zdnHAxBdM191qSkk", "nCk5W5tcPSkFoqBdGZ/cLa", "x8kyW7VdRt8IpLuHWRK", "amooW6S", "W6pdVMNcSG", "WQHFW5bsW5ytWPe", "tSo2WR0CmM7cNWC", "AXVcP8oXW4aJWPxcKZtdTW", "iSk6fCoAW5tdVa3cMSkPWRG", "f8owW6pcQvf7FemYW74", "pGZdGCkSWQHGySoeWODo", "WRmOW6iAW7pdRwetWOPt", "w0PPA8kmsW0UmJK", "WQT/wmkkW5WyW7ldLmoexW", "W7tcIgtcT2BdGSk4mfC3", "ECk5W5nLWQ3dOSkvdmknWRG", "WPbeDCkTtsFdO8kHWQ7dK8k3cea", "l07dTmo7WR3dKGJdHmkTaa", "iM89mG", "W79KWQPRW57cI8oQv2tcMa", "FKKfW6DPWRTD", "pSoJWPO9W6JdRSkbrSovW74", "dCozpSkdWPZdPw81q8kC", "CszYFgtdJeD5vSke", "WRJcSmk9WQqrqmo2WPj+Ca", "aSotW6VdIM1/yLi", "e8kTWQTlBdldNKrBza", "j8o4WPhdR8ozDexcN3dcGq", "ehfWWPSQWQ7dLmkskfa", "AComW6dcSCokWPNdKW", "WO3cJSoiW7FcR3JdQZ/dJG", "E1KscmoPxSkjW7/dSJu", "E0VdR8oQW7ZcNbtdL8kXfW", "kXCWDCkbhGn3DXa", "WOmbWQihxG", "y8oHW5CsW7L/W7FcMqtcVW", "WO4vWQGqe8oGWPzDW6u7", "W4SzWQXub8o+WOjBW7DY", "vCovnCks", "W7NdVCorWQBdKa", "lcRcHCkWb8kjFwr4qW", "WQuBWP0AW40fW5y", "nLRdO8oUWQxcRb3dMSkNbW", "WP/cUCoR", "FComWRlcTSobWP/dIfzdoa", "fmoqmCkfESomW6RcKSoyWQK", "WQPrcSoCW40", "WORdGSkpW6pcUfpdTY3dJH4", "WOJdL8kMlSoUaYaNWONdGG", "uCkPm8ozW7KtemkkeJ4", "BbNcR8oMW5eMWPFcNepcHq", "guqFW6DUWR1C", "W6bfCCk1tt7dOCodW6xcSW", "W6bnWO8xWOTbW4GfxCov", "W7RdJJhcUYxcNmoRCG0X", "hCk9l8kkWQDDhCkkaJm", "w8kGk8koWQKBrmkzhZ4", "x8kyW6VdOhCGmqfZWQC", "i0mfW6LVWRvyWPXPfW", "W73cLYhdP8oycmo/CSocW74", "k8oZWOBcUxFcTLCtsCk1", "zeGPwCkgW6ZdMYXftW", "umk+W57dJKPyWOJcJCk6WR8", "WQawWPJdISkJs8ofWQzqW7C", "W6LrWPuqW7vqW54lbSos", "aSk5omozW7Liamovtce", "W6zTW7fxWQFcUJjrWOjA", "WPXwWORcHfpdTCoyWOFdLdC", "W4lcISoHBSk4tNi", "qCohoSka", "xvBcOMS", "z8kKW4DOWQtcR8oab8kaWR4", "WRCLeCoqWPTpWQldTmkzxa", "W7NdQwZcQ0XoW6eNwSon", "WQiRdCobWPuBW7VdJmkqvq", "WO5gW7nAw8kSWQudWQv8", "W7CDWQlcVmorWOBdV8oDpMK", "E1dcKCo3W6CYpW", "AvqXrCkyW6ZdGYbssW", "lCkkW7/dPKCVecNdTmoD", "W7RdU3a", "WQ3cQmkiW7hcNMfkW7xcJCop", "rSo6W7qz", "WPldLCkXia", "neSDW6KQWRDxWPqMxG", "W65fW7vyw8kJWQSfWRPN", "WOxdMhhcTCktva", "W6JdJJtcSdVcKSkPiLbI", "neFdQCoR", "q8kcWOBdUvGreKS7WRq", "WRasWRNcQCorWO7dPSodkZO", "zvRcGSo6W7i4nCkg", "i0ddSG", "W6GWWQ0yW7VdPxWhWPOb", "uSoapCkEg8kdWRRdHSkrW6y", "WRRcPmkdmqxcRqJdLmk1WR0", "W6L8tSkvWOHyW7tdL8oBfW", "fSkhW5BdU1Pol1CMW6e", "sfjOA8kmxKLMita", "ECoWWO1HWRZcSSoErCkwWQ4", "a0D0mmkxcKqIFxS", "WOytW7nvx8kKWQ4gFfi", "wmkrWQpdKXRcNZLWWRv7", "W7RcQCk3WQXs", "W6fiW6ZcSI/dJdyWW6PJ", "WQn3W6FcPdRcHX9SW6CG", "nuhcK8kLWROLpSowW7as", "n8k6WPW9W7JdSSoAxSoqW7S", "y8o/smkvWPlcTq", "i8o/W5ZdOJdcQa1pcCo4", "sCoiW6FdM3JcL8ocWOaRCW", "xvlcOG", "r1tcJmo6", "WPqoWQaxsCoLWRmjivi", "WP7cI8oWDSk4agrKW5hcHa", "BGDkvSk4d8oyWQFdRs0", "crpdUJ/cUZddHq/cNqC", "W6VdPCoUW6KoCSkOW586nq", "oSozW7pcUCogWOZdIbPaoa", "wmorWOBdTfDmouX0WQO", "F8oQW5CxWQS4W6RdIutdPa", "cL9XWPaQWQ7cJmogBaa", "W5BdKSk2", "w8odEmoqW53dQdPMbSoo", "pYyIpsdcJuC0e8ok", "xSoEaCkUWRPgcr4", "o8kzW7tdP30Xsq", "rSo2W6KDDNtcMb5Tyq", "E0xdSmkZW5KJWOVcM1VdPG", "WOO9W61fWOpcN8kGcspdGa", "vCkDWR7cG2RdG8koW5bOlG", "iSoQWP5rWR0QWRtcLeBdUq", "jWZdK8oyWRrGDmorWObF", "rmotW67dVwaZzfi2W7u", "WR3dS8kojG3dPeRcH8kHWRu", "ju8OumkyWQRdKJzica", "nIZcL8kZh8koCwO5dG", "W7FdT8ouWQK", "vqm4W4n/W6ZcJCovCaq", "W4GUW6LhWPZdM8kWcsVdHW", "WRNdHx/cPCkzrmkXlSkw", "WPhcHmohW6dcR0JdKcFdKa", "xvlcTG", "W6/dSmkAW7qoe8kVW4zwmG", "rCowmCooWO7cRx0Jvmkp", "tCoFoSknWPBcRx4", "wmohW6VdNWxcNZjXWRi3", "WR3cT8k3WQTyz8oXWODTEq", "WPHIWRuzW53dS8oXthhcIq", "WPeiWQNdHWVdU8kpW5RcMxu", "CMm/ps3cGa", "WR4nW4DdW4TgW5yzeCkh", "WR3cOmktW7/cKxLtW6VcM8oh", "ACk/W49OWRZcTSoDbSkWWQi", "W400W61jW4ldGSk2csFdJa", "W6vbWP7dVSkwW5xcTSkeBtO", "wSoToCktWRXqaCowuJa", "W7CsWQhcQCovWOhdOSkBkMK", "WOacW5hdLaddQColWORdGsW", "jmkRW5GbW6v/W7xcIWFcPW", "W7vYtSkpW4etW7JdLG", "WQBcIM/dVMBdI8o+Fq", "eWzJmmoExKG0z3W", "WRuhWQZcOCowWPddO8ocEcq", "yCkKW5xcUW", "A2dcKmkUfCkjB3zPtW", "t8ocW6FcT8omWOJdKG", "WOZcH8omW7ZcVfK", "DHqJcmonW67dHYeFcG", "D8oZW5pdOdNdQW1cuSo2", "W7NdIcdcRYNcN8oTaHiM", "fuFcVIe", "nCoIW4xcTSov", "WOnaWQ0EwSk2WQLADKm", "zfdcHCoYW6D1lSkaW4as", "WRpcRSkiW6VcMgfiW7ZcKCkZ", "tCoTWQbApYhdIZ4WDa", "uSoalCkDi8klWR8", "ySoVr8kxWO3cPbRcMSoXW64", "WRu5WQ4CW7ZdUdijW5nj", "W50HW7zgW4JcKSk3fd3dHq", "WQTUwmkhW4CzW7/cLCoFfW", "amoeoSkpWO/cQ3jRt8kA", "WPfzW75frSkIW4GdWQ9Y", "W7icv8kjWPddKmoTjeaO", "W4qqWOBcML/cPSoiW5BcLZa", "AmoSWOemW6ySWRFdMfJcTq", "WR3cQdldRbmsWQj6sSob", "zGP3gmofW7BdShqsba", "W6ymWRawW7VdUxLCWPGa", "W6q1W73cVchdHK4TW611", "W4ddS3tcUfCkW4qPdSkm", "ydf8zhtdLfbUqmkD", "x8kPlSkoWQTBxSoBsYy", "WOvxWQ4qv8k8WOjxW6u5", "xx7dR8oUu8oOpJjKvG", "BsK2ntldKKD5vSke", "fSoNWPpcHHXaWOZdKSo0WRG", "pmkEWPRdT0qiFeaMW6e", "WQZcUJZdUqmkWQHJeCkm", "dCkuWOBdTfDmoq", "WOZcNxtdTIxdVSkRlejJ", "f1rPnSov", "eCkmxmoEW68xqLPtW64", "W4RcTSoNwJ4VW5/dMCkzW4C", "WPlcU8o6bs8MWP7dG8kmW4m", "W7rtW63dQmkyW4dcQSoFmN0", "WQdcNw7cUNhdH8k+iG", "xCkOjmktWQboq8ovth0", "W6HVW7a6WQ7cVdXxWOzy", "gSk/WR5uAs3dJeSHCq", "WOhdL8oDm8oSaYmHWPZdGq", "zrJcKCoPW68YpW", "FCo7vSkjW5NdT17dN8oZWQC", "tmkOpmkoWQblrmkBaJS", "t8kFWR7cGe3cHsjGWRbJ", "WQRdPCkvnutcQbFcNCkYWRe", "W7/dKJtcPKNcN8oPBXjg", "aSkDeCkmWRrlh0anWR4", "W5hcN8oHz8k3sq", "W5JcJSo/D8kTthPXWP3dGW", "lLiYrSkDWQddIN9prq", "CCoiW7VcS8omWPNcMLzfjq", "gCoToCktWRXqaCowvZy", "xCoDnSkx", "fSk/WR9uBdZdM10YDq", "uCkyWPJdVLLDmuvOWQ8", "W7NcP8kZWQLvuCo7WP9Loa", "dSkSWQDkEYZdGemHDW", "FCoyWRdcOHj4tI3dSmob", "pmoSsSkpWOFcUfJdIa", "zCkJWPqPW6G", "W4/dG1xcKb4iWRq7fmkj", "WQxdNNJcSmkyrCk8p8kEWQW", "WOvNWRKyW4/cGSoOugtcNa", "WRG6sCkbW5LxW77dLSoBvq", "z1lcHSo6W6PXfCkAW5eA", "oJJcL8kHc8kjB3zPtW", "kCoyW6ddO0e3sJldO8ol", "BCoGWPFdPJtdQHCkdSo0", "WQ3cN2VdTwRdLSo+BbOQ", "WPVcKmkbW5JcOKNdTZ3dK0O", "fmopW7RdHc7cKq", "W48qiSoPsdxcK8kAWQVdTG", "ALeGw8or", "ASoEWQ/dS8omWPNdJvSDja", "vmkaWRNcPdaWkbvRWRm", "sqaMW44VWQFdKCkbnuC", "W7yCW4TdW5OkWOrmtCkx", "W6zxW4JcJmoOv8kyW6ebWQS", "WRRdRCkvoaW", "W6RdH2lcVSksrCkJC8kBWQW", "iK8zW6rMWR1C", "ySkSW4qPW7W", "FSkLW49N", "qmkWWO/dLvSmW4NdJ8o2W7O", "v8kaWR/cUJiPuHnGWQK", "z1JdP8kLWPH+W5FcIGhcPW", "yszIChxdJfzTwmkr", "EWddSSo4W6ldN1JcLSoIwa", "WQqsWRNcOmkyWOBdV8oAmYC", "o8kbWRldTSoQWOZdJvysAW", "WQhdMZ7dK2ddMSk4kKGQ", "s8oBcCk/WRDthW", "nrRcHCoYW7bV", "WOCdWQSCt8oNW7Oujv4", "wmkDWQdcMw3dJmkxW5LSna", "W6BdIupcPJBcGmoSDGG7", "eSkuWPJdRvTon0fP", "n8ojW7pcOmofW4ddIfzcnG", "nSk6tmkEW5NdT0NdLCo1W6G", "W6PTWO9bWRpcVIeOWOzc", "mCkrW77dQriTudZdTSok", "BgRdKSoN", "FmodW6BcPSoD", "W6tdJIdcPYxcNSo1CWq9", "zCkJWODGWQBcQCkvvG", "aCoAWR/dIa7cJd40WQj1", "W49sWO/cK13cOq", "ohi6FcdcJrm8bq", "bKDQWPa", "pLqSvmkEWQ3cNI5ora", "xmkqF8kkW4ddR1D3f8oa", "bCooW73cKv7dJwqKW6WN", "WPWFWPhcLfhcSCocW5u", "tmotW6BdVZ8", "WPnBeSogW4RcLCkO", "WR1eeSoB", "WQfRWQ/dRG", "W48DFCo9hgdcO8kb", "EepdVSkLWP10WPtdGXNcTG", "s8oXW6qipNhcIr11", "WPvelCobgLBcSCkm", "WQreb8oBW43cKCo6Br07", "CCozW7/cUa", "lXjpf8kYcmoxWR3cOxa", "WPFdJmowW7VcQ0JdTYNdKbO", "W7T+WQaCW7pdPxafW5SD", "bCkkWQpdJH7dGdr7WQrP", "WQGxW5JcI8k9rSotW7WeWQ0", "WPmjWQaw", "W7FcJSo2y8k1dvT/W5FcNW", "WOxcS8kJfgSIWPBdMCkkW4W", "W6tcPcdcRuSuW5OTemkm", "b8kBoSkgmmkyWQxdNmogWQK", "W7fYBSksW4CtW7NdNW", "FuhcJSo1", "sSkoWQtcNq7dKhfzW7eL", "WRasWRNcQConWPpdS8oela", "WR8qW5DpW58iWOnetCkk", "WRDWWRBdQ2hdLqPUWQGI", "W74qfCoBW4VdJCo4ybHY", "WPLhW7bofmkHWRmrBXS", "ou4QrCkuWRi", "CxiRlchdKua6hSob", "W6ldS8oGW7uobmkMW58/oW", "smkSjG", "smklW6JdGJBcGmkdW5bQia", "rW8WWOD+W7/dMSksofa", "WPZcVsddH0ddOmkCew1h", "bCo7W6yooJhcNafUiG", "xmoFc8kzWRnvxvmBWR4", "uSkKiSkgWQTjemkkhtm", "wXXZWOj1W6ZcImkmofa", "WOWbWQavg8kPWRSopW", "DCo7uCkBW4NcOe/dK8o7W68", "y0CugSoPr8kiW73dRI8", "WRWwWR8", "rmkxW7VdQhn5DfvUWQa", "hSo9ASoxW6KnrmoCxgm", "dSklCmkkWPtcVIrMbSoo", "hSoTDSklWQrEaCkhudq", "ovWmW7vLWRfDWOSYeq", "WP/cQmoJbxeNW4pcNSkeW5i", "WRxcO8kW", "WR0wWRRcISoxWPJcQ8krBZO", "vmofdqitEq", "W4HhWR4xvCkMWRSvoey", "B8oIWOaUW6JcSSohbmkqWQi", "WQJdG3VcSmkyemk4mCkhWQi", "uwJdK8oGx8omBWy7aa", "AmkGW5ddS8oyEfRdHdhdJa", "BSo8WOzrWQC1WQy", "FLKbW6DWW7nrWPSTfG", "DqhcSCkVW7ddJK7cMmoXxq", "uCoRW6yolM8", "yCkIW4lcQSkforNdGW", "sCkFWQddLeFcGZDIWQT5", "qf/cUZ/dUwNcHH7cMve", "AmkIW45WW6/dOCkssmoeW6S", "E8kZW5ldPdBdTv4zqmoM", "zCk0WP1zWQ04WQldJrVdQq", "p8kDW6ldO0y", "W6JdTCkaW7qlCmkSW4mSja", "W7tcSSk/WQfBvSoQW55KDa", "W6rhW6/cUYhdH00TW6TJ", "l13dO8o6", "lbnou8k/", "W5/cI8oKAq", "BmkHWO/dVSolEftcHN7cLa", "hmoubmkaWRDxcaiBWQ4", "WOxcQSoIdxy", "cCovcqOlpmo+W5u7W6W", "pSkGW58CW7bXW7ldGXhcQW", "jL8KrmomW6BdScPpxG", "gmk2W77cJ0tdMNyLW7q+", "Bwi7kMtcJWS4bCox", "AHzH", "WRiuW4XtW41bWPXatmkp", "W6lcTCoxELRdOuxdG8o9W6u", "Cva9ksFcHaiRsSkl", "WOnhACkTqJldOCodW6VcSq", "WQu9hCogWOKEW77dJSkneq", "mmk+W5RdONJdTHXjga", "cCkxkmkhWPNcVhj7aCoy", "WPFcTmkUa2mPWP7dNColW4y", "WQz2WRldRNRcNL0/WPS4", "vh3dHmoGrCoiixyRdG", "EXFcT8oXW5eTW53dGWhdPG", "mmoPWOTeWQf/WQpcHbhdHG", "kHydsSkJcmoDWRZcQZK", "WQNcOmk6WQbFr8oXWOe", "W4zjW7TBhSoPW5G", "kCkdWQtdRmkeW5ZcKXKaza", "W7jwd8oBW43cKSk7DXXN", "W4HeWOJcMG", "WQldUhNcTuPiW7eGfmoa", "mmoPWOdcO2BcTLCEs8oz", "WOjfW7vfq8kGW4zrW7K+", "BSoWWOru", "ASkLW4vuWQaPW7NcMrBcQW", "AXdcT8k5WPr4W57dGGpdUW", "nfRdSSk/WOvWW4VcHWFcTa", "vCkqWQhdIthcGSkqW513zG", "FmoRWOntWQW", "tSo/u8kFWORcPe4", "rSkIWQu", "W7/cVmonzLJcLftdGSo/W6e", "zCodfWeqFCoXW5G0WQm", "W4X1W6PjWPNdL8oKbc3dMW", "m2m+nsBcIqSWw8ot", "W5utz8oThhFcP8k3WQRdUG", "WQawWQddPCoBWO/dUmoclxu", "W57cNmoo", "oCoJWPm9W6JdRSkbrSovW7K", "W7Xed8onW4NcM8o6zHb1", "W4Wsiq", "WQTUvCkjW4jxW7/dKCojfW", "rx/cTYBdOLBdNX3cGse", "t8oBf8kiWRHtcq", "s8oveCkmWRO", "W6/dT8oBWQ7dHtblWQFdGSkm", "lCkkW7/dPKCV", "jbjuEmk+h8keW67dSdK", "W6KOWQPh", "zCk/W4mPW6BcTmoBgSknWQy", "W7WmaSoaW57dKmk5AbH1", "g8oHm8kgnSknWQtcLCoyW70", "WPaeWQCg", "vmosgailBmoOW419WQe", "sSo+W6LxAq", "WOnyWPhcM1ldUmoFWOtdGIO", "tmkOj8kiWRnz", "WRZdP8keoH3dUKxcH8kLWQ0", "e8owgbKaCSoPW7aEWQi", "W7JcJJZdOmofhSoXB8otW7u", "gb3dQcZcUZ3dM0xdHuK", "Ch3dJ8o1", "WQZdQwNcVujcWRqKhmkp", "nSkPW4n/W6JcVmoEcCkxWRG", "smkwWQ3dJHNdKhf2WQ9O", "WRHfdq", "AaldLmoOW58HWORcHKBdTW", "C8k8W4FdQd7dQ0mxxmo0", "WOyHW6SwW4/cKSoKqhJdNq", "W5utWQeEuSkHW7OvnKu", "WR7dPCktmqFcRby", "qSkwWQxdLqVcGYnGWQf9", "cqldQJhcRsZdM1VdMKa", "W7vSWQNdP2pdMaPZWRmR", "W5SWW7rhWPNdL8kbfIhdHW", "rmkxW6BdRtW5Fu40W64", "kCoTWPhdVSolEftcHMlcMW", "sSkEW6hdJrJcGJjHWQS", "feDMWO9Y", "CSkYW4FcTxtdOX9br8o3", "W4feWPdcHr7cUCosWRddKsu", "W7RdPCo2W6uCe8kIWPDLyW", "FKKbW6LZW7nvWPmRfG", "q8oVW7CFnxJcUbW", "vmoqlCkyy8osWO7dM8klW6i", "W6X6vCksWOHyWQ/cImkpxq", "W44rkCoUwh3cOmkqWQVdPW", "FtrYBgtdNeTPvSkv", "AmkKl8kqWOztcSkFftW", "EmoXW4PwWQaZWQVcHbhdQa", "W6qbsSkyWPNdKmoRpvCY", "W4HhWO0tsCkSW7OYiKi", "jHzn", "WQZcQY/dTXSBWRr9rmod", "FXxcGSo3W6CIkCovWPiB", "b8oqmCkfzmkpWQBdK8klW7O", "W7VcPCkA", "W7GXW7hcUZNdM08HW611", "W6a3WPewW69qW59Mdmot", "W4Cvm8o6whBcUCkgWQBdRq", "FehcKCoYW6O4mSkjW5Sk", "bSofW6ldJdBdK8kqW50SyG", "ESkOW4xcL8kFprK", "W7DzW5JcMSoR", "WQ0uWP/cUmkXvSooWQHwW6i", "l1VdQ8oW", "W7ZdTSkDWRxdJdmuWQddKmkx", "cCkjhqitiG", "WQuqd8oeW4/cI8k+BqP2", "rCo6W7m", "bHXPomortuHPmdi", "W6vhW6pdSCkkWQZcP8kcCsG", "zf3dO8oWWR3cIX3dKSoVdq", "W5udWQitsmk2W6Daiu4", "WRaAWRVdQmoBWOZdT8oflcC", "emkmW73dMsRcNCofWOqSAa", "W7pcO8kfnr3cUuJcNCk/WRi", "rSoswq0kBSo4W5O1W7m", "WQHZuSksW5WCW77dK8omaq", "W4qcWQSysmk7WObDW6rV", "WPpcH8oLB8k1agDIW5/cLa", "WONdNCkJnSo1hdKGWONdIa", "pCk5W5tdUZBcQaXugCoN", "W6BdQSk6WQWc", "W7CdWQZcPSosWOhdUmorCNG", "iYBcI8kUwmoDicz3uW", "rmkAWQdcM2ZdMmkFW5j2oa", "vmoieayeAmo4", "mSkvW7/dSbimBwhcVSoB", "W6XZwCkdW401W7e", "tSo2W6Kr", "dCkksCoCW6bXqIXnW7C", "hCkPk8ktWQqreCkyfsa", "W7isWQdcUmkd", "hSo9zSoxW6ujsmoCmwa", "nmkBW7u", "WQhcKgxcT2JdM8k3iffM", "WOjfWOxdUSkiWRBcOSo+BI8", "emodW7BdPwq", "r8ocW5VcQbGFAbuVW7i", "dSkjs8oAW6ilq0niW68", "oaxdJ8kRWRbXA8oBWPTo", "aGq+ACorcKu0jtO", "W7ZdVmozWOtdHtqvWRy", "vCkuhCkEjCkfWQBcKSk5W6C", "uCohwqKaBSo1W5GPW7y", "WOmzjSoOhhRdSmkEWQRdSq", "hmoiW7VcIf7dGgC6W7qL", "cq0JW4XJW63dMSkonWq", "hSkWW6Gkl3xcGX0/", "leKGw8kuWOtdNYbmtW", "e1SHWQT2W7VcG8otjf8", "W4fuWOhcTvlcTmoiWPG", "WQRdN3hcV8krvq", "BvCdgSoXr8kzW6NdOdK", "WOavk8o6ghpcPmoyWRddSq", "WQhdRmopW7NcLsecW7VcN8km", "WQ7dKMtcKSkzxSk8o8kDWRK", "WQRcPmkKWRzz", "WRGlW4jkWP5FWQTjuCkq", "q8kJW5XMWQhcVmoxuSoe", "jLVdSSoU", "WOpcQCoRccjGWPddHSkhWO8", "W75YW7bkWR/cUdXsWOny", "W60qxSkfWPRcSCoSke8M", "lCowW6ldQcfUy043W7i", "WO/dHCkGebRcIsFcMmkcWQC", "W7bUwmku", "d8kyWPRdSv4pjuv1WQe", "frnxWRmRWQBcL8ocEr4", "w8kxWRFcPdL2jbKWWRm", "lKhcPmkI", "W7fpWOmwWPvqW4Gudmop", "uSkdWRdcKtZcNCoyW4eXza", "jfhcGmoVW6D8kSkAW5OB", "uSohDmotlmknWRJdK8kiWQK", "WPfhz8kQrtZdO8oeW6xcSW", "D8knW5FcUCofWOtdJbDXpW", "wmkAfSkFWRuAxq", "WOLNWQSgW53cHCoOuxFcHW", "WRL5vmkqWPuzW7VdMCoEaq", "zW/cPSk8W7ZdN0tcMCkMdq", "WQJdJCozW6TgtJiA", "WR3cRSktW7tcNhLuW7xcJCop", "W7ipW4zlW5SaWPfetmkc", "vKnNW4nKW6BcImoBFfa", "WO9iWONcN1dcVSkCW5xcIsm", "FSkiW7NdRLSSxdpdOCoD", "W4BdUSk8ucj8W4VcLSovWOi", "W7CrWQJcPmorWOldS8oAnJC", "WOyuWQeF", "fSkNWRDcyYJcQrXNjmkYWRe", "W6FcIhlcQsxcJSo5yXH+", "C8opWQFcOGTOdg/dKmkC", "WQewWPNdMCkYqSosWRXgW7m", "dSkps8oAW6qhs1PrW6S", "i8o/W5FdQJVdRbTcemo8", "EmoeWR/dPLSYaW", "c8oAW7ddMWxcNZSQW6aW", "omk5W5SgW6LUW7tcLWpcVW", "aLj8WOS", "bvn0iCoFra0Vjge", "W4pdO8kUvtrGW4JcG8olWPm", "WPJcQCkUegmSWPpdLmolW54", "aCosW6pcTcm", "EmkIW4zSW7xdUmoqhCkqWR8", "nq/dOSo9WQJcNHhdMmkYeq", "hmoseCkaWROkcH8qWR8", "j8kHW57cV8kpmrRdGxpdNa", "W4DvWPhcT0RcOCojWOldLZe", "jhhdK8k8dmofjJ4OgW", "ymkHW5tdOSoekWtdHZdcIG", "W7/dVCorWQ7cHcasWQtdJSkE", "oCofWRFdQKyPuxddSSod", "WORcM8orW7y", "W6flW4NcLCkKra", "vSoeW7RdGdtdMCoEWPm3zG", "tCoFoSknWPBcQNu+aCoo", "W7z0uCkqW5ai", "FNDWamoFW7dcGguzba", "WPC5l8oeh0BcPCkxWOtcOG", "WOO9W7XjWOVdL8k2ttpdMW", "C8oiWQtcOGajdg/cV8kF", "yg/dRSoasmkEdg8ViW", "pmoXWPxcRtZdOa1cdSo0", "kCkqWRddPfSOuwdcTSom", "W6VcTCkUW6vpxmoYWPPOnq", "sCoFnCkCimkjW63cJmoeW6a", "WOpcS8opzuxdQv3dMSoIW6m", "W6JcTw7dOwRdH8k6jHGL", "W6vYWRLCWPBdGSkHxwpdNq", "nuddOSoPWR/cIW", "FSo8WODFWR86WOtdLvFdUa", "dSkjs8oyW6j9xujbW6C", "dHpcS3VcPIVcIqRcHHG", "w8owcWqbACo2", "ySo2WPHDWQGZ", "WR9FcmoDW43cNSkU", "CbVcV8kUW7ddJKZcMmoWuq", "W4HrWOVdMW0", "W6imsConW4hcHSoKobTZ", "WP5LWQ1PWRFdTCkskaC", "qmk3W5RdNuPBWP7cMmo4WQ0", "zCoOtmkDWOpcTu8", "WQ3cUmknW6FcM2fgW7FcL8oy", "WOZcI8oaW73dQLpdTdZdIqu", "p2C/oq", "ALGTv8kcWRlcJMDfsW", "zxZdKW", "W5SYW7SaW53cGmo1tgtcMW", "kqFdK8oxWRf/ACoiWODp", "WQNcVmk7WQDtxW", "eSodpSkmWPhcRsr6uSkm", "fW/dTx7cPtddHqFcNu8", "WPiCW5FdHh/dPmklW4FcHhq", "WR3dU8oQW6PBdCkIWPqYkq", "tCoeW7VdQhvRyGWJW7u", "W7/dPCkzWOn6", "cxlcThVdUG", "W40vkSo+", "tCkMjCkjW6CCf8kFct4", "W7tdK2lcQsxdNCkSj0vI", "WRRdHgFcVSkevmoVFSkqWQe", "kmklW7xdSa", "WPXdWPxcL1ddTCoyWOFdLdC", "vmokgayeAa", "zwtdO8kWWOvKW4RcLLJcOG", "W71iW4NcI8oVd8kxW6Ki", "w8ooW6VdGthcLSolWO0XDW", "jmo6WPZdQCkiAfNcLxdcJa", "ocrSycBdKG", "y8o/smkvWPlcTx7dLSo5W7K", "WObBWORcHvhcU8oCW4O", "cCosc1vzAmo1WOCmW7a", "W4JcI8o6ht5HWOVdMCovWP4", "qmoDW7ZdPM9Uy043W7i", "yZD+FhBdNLzWtCke", "hmoucSkzWR9beWyEWQG", "EXFcQ8o+WOj0W5xdJXtcSG", "hSkFW5VdVvTFpva5W6y", "lGzMrSkyWQ3dMI1ara", "uCkDWP/dSfDBCubYWQe", "rvZcUx7dR2xcHqu", "rSoFW47cQ3uxCHyJW6y", "g8oehaCmFSo4W5uZWRi", "bKjK", "WPrYW6LAWOBdKCkHr3O", "uCodfqOC", "pCkfWOxcImoDeehdSg/cJq", "CGpcT8kOW7ldHKRdUSoZua", "W5O9W7zF", "D8o6WPxdVZVdPbPcfmo6", "dSkzk8khWONcPh9RvSkh", "yxNdLmoP", "W63dPSkeoadcUGdcMmk4W7K", "WQeaWP7dMCk7wSoeW7TlW7e", "W6pdQ8oKW7iCaCkUW501jW", "WRVcSCkJWRyCx8o3WQHODa", "lCknWQBdUSkCW43cLbCfFW", "FZjKFhxdMKLStSke", "W5JcQSo8c2y7WPZdHCkPW40", "W586eSoyWOLvW6tdJSokta", "gatcMs3cQYZdM17dMKq", "g8ojcrGmmCoTW5a2W7y", "w1ZcVMRdUhG", "W6pdSmkooqVcTWNdK8oVW6G", "W4ySdSoiWObpWRVcICkuxa", "gmkAbmkbWQiAxq", "ASk8W5K", "W6r5wCkLW5KBW6tdIW", "W5tcJSoLy8o0tNHLW57cHa", "WQf0WP3dISkTq8oiWQHxW7e", "jdJcL8kHc8kjCYu5dG", "WQasWQ/cPmoDW54", "qmozW6ddPg5SpeG9W7e", "jgVdG8o4r8omCNeTbG", "W6ddT8kenrVcUW3dMCk4WQa", "WQxcSSoRaxy", "ACk0WOzzWQC0W6dcHXBcQW", "gSowW6hdRIfYCe0M", "W4viWPhcK1dcSq", "o8o+WOqXW7RcK8kduCokW74", "emoBW4ZdGIddICkjW5f4ma", "gSkdWOldOq", "W6/dR27cQ0zeW7C1", "W6zXxmkvW4zhWRddJSomhG", "vSokgbGwiCk6W5uZW7C", "d8kdWPNdVeneEXPCWQm", "W6ntW7ZdU8kwW5pcTSkhAtq", "cSkfgColAmouW6RcGSoyWRK", "W6dcPdZdUqmkWRrSxCon", "DHqJcmonW67dHYeF", "qSkyWQNdKqpdGd93WQ9+", "W7HGWRZdVM7cNbrXWQK5", "WQ7cRmk5WQSgqCo7WP9Tyq", "yvtcKSouW7e/cSkAW5Op", "WR9Cb8oAW5VdJCo9zHz+", "xSkrW7BdNGlcIdv/WQv0", "z3XyWRfpW6LVW4qesG", "eSopfSkiWQqlvb0AWRu", "W4KSdSogWOrpW5VcICkExa", "pK0oW6LRW752WOaTfG", "nSk+W55WWQtcUSkms8ktWRK", "W6tdU3ldTbekW7GL", "avXTWQz2W6RcJa", "DvxdSSk9WPHZW5ZdHH7dQW", "BKmxdSoLu8knW7lcVsu", "sKDKomozra1OkZm", "n8kuW4tdPCkDW4pcMxSbFW", "h8kgBSoCW43dVJz2cmoA", "BmkHW5JcVmkonb3cIYNdNq", "kuBcLmo/W6C5ESkaW5qD", "lCkzWQBdOCkCW4hcKquEya", "pNGUwSkEWRpcKwvxqW", "W6NcI3tcUmkaemkRmSksWR4", "WR8CWQdcRCowWPtdT8oeFsq", "W6e/W7ZdVCkwW5FcUSkhBZq", "x8kJASkbWQXieCkzuaa", "tCouW6FdQg95DaWGW7m", "W6fpW6LguSk7W5CfWRHI", "f0S/WPb4W6xcJCowoai", "WQj5xmksW5qtW7NdImoybG", "WPJcK8kxWQXMASk1WOL4iG", "W5ryWOdcMa", "WOjxW6DusSk7W4y", "xWu/W5eKWQxdLCkaw0i", "WPf7WQWDW5FcISo9wh3cHq", "WRzbWP8jW55FW5rcamoF", "W5xcTSoHbwzJWOZdHmkaW5e", "WPddJ8kXiSo5dtCWWOZcGW", "bqldRJhcOJ/cQvRdG18", "C8omWQJcTab0c2ZdSSkc", "CSkma8kiWRjvafq6WQK", "o8o9WOq5W77dV8kdw8okW7O", "jmo0WPj/W6xdPSkbc8ouW6y", "W6PPW6jjWR/cVd5rWPDd", "n8oXWP7cUSkclKRcMJRdNq", "eCkRjCkvWQHUaCkyad0", "W6VcPSkbWQxdNcesWQRdJCoF", "E8kOW4hcSSkkoXe", "WP/cJmkmW6pcUfpdOd3dIW", "qLZcT3RdTxJcIXNdLbG", "W4y4W7ThWOpcN8kVbsNdIW", "W6GEvmkDWOJdHmo6nuWO", "krxdGCkNW68/kSkDW4fF", "Dmo0uq", "WQe5WRzuW7pdRxafW5S", "q8oDW6ZcKLtdJxyOWQjL", "W73cTdJdGtddPSoODwK7", "WOefWQ0AwSkRWR0c", "WPFcN8o0Bmk6tgv5W5hcNG", "WRDmW4pcLmoHfCkqWQufWQ4", "g8keDmodzmoEW7RcNSojWRS", "iu7dOSo5WPxcKq", "E1hdHSk7W7y9o8klW5ax", "W5udWQitsmk2W6Dam0G", "W60lW4CyWOuaW4Hntmkg", "W7H3WRxdPxJdMbjOWRGO", "DSoJpSknWPJcMgWeBSka", "emkxF8ooW53dQdPMbSos", "DXNdV8k0WPb1WPtdGHJcQW", "ptT1FWlcQIeFmmoI", "q8olW6ldJqxcNIi5WRr5", "B8omWRdcSazJa2hdOCoo", "W7ZdU2/cQLDcW6yJcmkk", "nLldO8kWWPvWW43dIW", "WPNcQCoRfYiEWPRdN8kmW4S", "WP9Bm8o/sW", "W4xdUSk/sJv2W5pcGmoBWOi", "W6FdGxhcVCkFvmkPlCkA", "xCkSjSklWOHzemkdhZy", "smovlSkw", "neddQmo7W7ddNWVdN8kUbq", "fmoNW4ddKKumW4NdK8kYWRm", "W7KBWQtcRmoCWOxdUmkrF2W", "zeNdQCoUWRhdKHtdMCkLdq", "WRLQWQNdQ2BcMX9ZW7TZ", "W40fWQmrgmozWP8", "j8k+W55OWRZcQSob", "p8oQsSkjWPddVv/dLCo8W7m", "WOnCWOZcMfxcS8osWOFdKa", "WOCXW7HCWO7cN8k0csJdGa", "W6JcJ3xdS2tdHSo5k0vO", "zKxcGmo4W68Li8osWOvr", "emo8ASovW7Csxmosugm", "WOL1WRKiW4/cKSo4bc3dNW", "rSozW6GinJZcRXTKjq", "ydyIjgtdNfWTbmof", "smklW6RdJcZcLCkdWPqRzq", "W7rzWPhcMLVdTCoRWOldMs0", "BCknW7VcUSouWPJdLbPaoa", "uCojgG", "WRddVNxcRWnjW7GTdSkE", "lanxsa", "b8o9B8oCWQHDhmogbZS", "W6JdIJFcUJpcMCkQDrmQ", "WO3cI8omW6pcPLNdHYNdKH4", "c8kEWOq", "l8o3WOvDWQyTW6RdKfJdVq", "WOmxk8o6bMhdRCosWRxdSa", "WQlcRsJcMHOeWQv1uCoC", "W6VcPSkDW6FcIxu", "pmkBW7xdQL0OwtJdO8ks", "zCoZsSkuW4pdRH3cMSk4WQO", "emklCmkEWPZcVhj4gSob", "eSkypCoqW53cU28Ir8kg", "rmkMWPpcGrjdWPVcIW", "ECoft8kUWPhcSNZcHSk3W6G", "mmk2WO5zWR9H", "cuDRnmoEcMi0jdK", "lKhdQmo5WQ7cTYZdU8ko", "W60bvSkzWPNdHmo3nfC2", "W6endSo/", "WOusWQewtSkU", "W4iam8oP", "WRiCWRNcPW", "ffTWWPq", "sSoypmkD", "jSo9WOtcVhNcTuWhtCkL", "mWldTSo9WRlcLrNdMmkL", "W63dQmkenGJcQKJcLSkWWRO", "W7ZcSCkTzuFdQ1ddJmoJW6u", "BCkOW5tdPNy", "WQX7WP3dJmkTtmofWQrxW7y", "WRyAW5DVW40eWOu", "W5ldKCoAz8kTsgvXW57cLW", "wmoymCkqlW", "CSoOqmkEWOhcVKNdK8o5W6y", "W7qOW73cQhZcGrT1WQK+", "svPRWOz6W5BcLmoaCrm", "WQFcJJ3cSgddG8k4kKGT", "wmohW67dIqpcMtPXW6iU", "lKFdP8oYW7hcIXhdKCkJ", "vGyYzCkEgWf0CxW", "dmovW7lcNuRdJxy0W6aW", "WR4vWRWBsCo5W7uiivm", "qmkaWR/cN3BdHmkBW4fPnq", "aCkgsSkEWQbarfemWQ0", "WOjeW6LcsSkPW5qsWQn8", "W7ilW4XlW5SoWOqitSkr", "W6qZWPivWPvtW4yvdCkU", "rmk1WOxcGqbEWP/cISoXW7O", "WQdcRv/dQG0AWQXGrCod", "WQnsW786a8ktW6HucWa", "Emo0WOyDWRKTWQJdNupdOa", "dSkgC8oFW4/cIYHOeCoD", "BCofW7FcUG", "ASk1W5ddRJm", "WQuAW4C", "WRqXbCoiWOniW5VcICkFxG", "Cwu+ptFcN1P+fCob", "lfPtu8k9dSorWQJcRMW", "W6NcLZddSCowemoOFSopWQq", "W7erW4jlW5XCW49Rx8ko", "galdTI3cTtZdNd3dGf8", "smoxkSkAnmky", "ChFdHq", "F8kOW4hdPZJdTW", "WQddLxxcVCkFhCkHpCkCWQm", "WRbrfCoAWPxdL8k4Cq1Y", "FSkKW4vNW6/dOCkssmoeW6S", "x8onzSopA8kyWQVdKmkuW6W", "m0iiW7PgWQO", "zCoYg8oaW4q", "W5NcMCkXyCk1tgrJWO3dLW", "lCkrW7ZdQ1OLu3ddUCoo", "WPBcI8ofW7y", "uCoFf8onW7HthXulW7y", "WRZcMxJdOW", "WR3dMepcPCkewCkMoq", "W7TNW7ddUhG", "kCoTWO3cVmkEladdItdcLa", "DKGXv8kFW6hdKcLawq", "beLUiCovrfK", "w8k1WO3dNXjEWOJcN8oXW6q", "fmkkzmoCn8kAWQ3cJmoeW7O", "v8oHASkdWQrsrmkyfsy", "FCkCWQ3cOh99ew7dH8kB", "hmk5W5hdHKevFZhdGSoC", "WONcI8ofW7tcR0JcQsZdHr4", "WPdcTCo8iwmTWPC", "aSkaaSouzmosW7BcNCkiW6G", "A8kHW4TKWQNcQW", "bCoPW5JdGuKvWQtdMmo4W68", "WOXgW7nexmkJW5brWQz8", "WRGfWQC", "p8oTWPS7W6tdQ8kCxCk+W6W", "W7xdHgdcSmkydSkCp8kDWQO", "DuFdSSk/WPjWW4VdGXBcQa", "W7y1W6VcPdRdHJKWW6HJ", "W6JdSCo6W7qihCkQW4eSiq", "W7HxW4/cMmo3e8ktW6y", "jdJcL8kHc8kjB3zPtW", "qSoNWOpcNGrFWPRdKSoXWR4", "xCopeCkzWRLjvX4kWRK", "vSkzWRFdKYyGlq4JW6y", "WOzLWQ7dUxJcMGHLW7TT", "lxOaD8kWWPJdSGrGAW", "W7pcO8ksiaJcRbdcH8o2W6O", "fCkeyCoFFCocW7JcHSoyWRG", "nsJcH8kWh8keF3H5vG", "yCo2rmkdW57cVLldLmo9WQ0", "tCoFW67dU2z/pfe6W6S", "W6tdNN7cOCkdrmk4n8kFWQq", "w8kHi8okWRjubCkFaZm", "n288oa", "WPXlW6Gyc8o5WOnEWQHY", "WQNcQ8kkW7/cMwbuW6NcM8or", "WPmjWQixsa", "j1FcJSoJWQS3nCkAW5Hs", "e8kuWPJdV0jh", "amohmmkDWONdPxGPqSkx", "a1z8WPfYW6tcGCoCBa", "WPVdJ8odW7ZcRKxcO3BdOqy", "W4VdVCo6c28SWPddNCogW4u", "dSkxF8ooW53dQdP6qSkh", "W7WgWPddLSoWdmkBWRzAW60", "W4asWRuCc8oOWO9EWRy2", "d1z2WOr/W73dNSotBqq", "nWBcUSkZWR7dGutcMCk2aa", "euDS", "W5CBm8o6gq", "mvOAW608W75FWP0NbW", "WPXeWOtcLflcSmkBWOJdMsu", "FSoiW6y", "bH5VWPf4W63cKCoz", "DHRcQmkPW7ZdJKdcMmo2ra", "F8oPWOTEW7DJW6JdLvFdQq", "W64KW63cQJ/dMuOHW61/", "pCkJc8oiW5dcNaZcJSk2WRi", "W6VdPCoHW6Soh8kVW4mIiq", "CSo2rmkjWPC", "WOtcV8oJc3qRWRZdNCkkW5e", "lCoTW51GWQZcQ8oAvCodW70", "uCophGirFCoX", "nmkoWRddOv4LtI7cRmki", "F8oXWOvh", "wmoBwmok", "W5LyW6bca8o1W6PwzHy", "W5bCW6eqbCoLWRigi0a", "i0meW7HRWRT6WPm7bW", "W7fvW4NcL8o3", "W7rtW63dQmkeW4/dPCotm38", "W7JdV24", "WQC4WQy6W7pdRwet", "B1Duu8k1e8orW7tdOIO", "u8otc8kg", "FqHSbSoFW7hcGxivha", "WQBcU8oPavqNWPRdHG", "FmoAW5dcU8oCW5dcGGCqyq", "W6NdONNcUMbfW7KHhmkd", "rXm/W584W63cJCoejLa", "dSovmmkCWPNcRwH8bSoF", "xmk4pSktWQPsrmkihdm", "wq8WWPn2W73cJmkmjf8", "W6JdKM/dOgNcG8k6iLzL", "W79kWPbQWOHuW4qucmon", "p8kfWOddQCk9Au3dRMNdOG", "W6G+WQCvW7BdRNCmW55z", "W5NcI8kSjCk3thPXWP3cMq", "pSkBWOddRmofAKhdQM/cGW", "fCkgwuTfpmkHW50ZW6K", "W6r5gSoyWPvAWRFcMmknuG", "WRL3WRJcP2VcNb1OWQGS", "WQ8nrmokW4tcN8kPyvS4", "sCkpWRJdIqxcG2G0W7XY", "uSoBrCk9WRnjhX8wWRy", "bLvZAmkxtei0lxe", "W61qW5DdW4evWOLxw8kc", "WQH4wCkpW4fxW6ldI8oiaa", "WPvyDSkUwYldPmofW7pcTG", "e8kyWOddVq", "zeSZwCkvWRtdKdfJrq", "W57dGSkbWRpdTK/dTcNdJLq", "WPm0W7rdW44QWO96b8kv", "W7z0r8kd", "WRfvfCoAW4NcL8k/", "WQGSWRCnWR/dUgSqW5jj", "mCk0r8kFWOJcUv/dN8o0W6m", "lv41", "W7H3WRJdQ33cLHiSWRu5", "cSkcWPpdQG", "zGTSa8oFW7FcGxWuhq", "x8kBWQhdNeFdN3zYWQ9I", "WRVcQZhdQbmeWQb1rCoC", "WP1IWQSeW5RcNmoWuxdcNG", "z17dUSk2W5fYW5xdIWtcTq", "WO8hWQ4ya8oZWODCW6mM", "qSotWRVcQqabAXe3W7C", "wCkOW559WQhcSCovsmkGWQO", "AexcKCo+W6G1", "zu5NcNlcPfzGo8ks", "CGpcSSoFW6tdKu3cMSo3sG", "m0pdUSk9", "W6VdV2JcNe9pW7KPe8kz", "W7ZdRmoy", "lfiVuG", "jmkJW5dcQmkamqBdJZxdLq", "CCkGW53dPmkykbxdHtVcIq", "W6DpWPyrWOHnW5Kwemow", "e8k2WRXAohpcGbXZFa", "wX7cQwVdUNJcNXJdK08", "s8oApSkhWPhcNN80t8ki", "eXpdQYRdQ3tdKuNdIK0", "amoem8khWPNcRxqZs8km", "BHNcPCoJW5eGWO/cHehdTq", "emk/k8ktWQarv8olxIi", "WQldS2JcVe51W6q+fmko", "wmohhG5ciSk9WPL6WR8", "W6eFWQ0xW6VdO3PAWPDb", "rCokgaGaDmoYW5u+W7O", "cff+W4n7W6JcG8oB", "W6G+WQ0bWRldQN0sW5Pz", "W79jWPjQWOXpW5GthSos", "ycHQzwJdLuDOr8kk", "iCo9WOndWQOWWRldL0lcQq", "bKPHomorxG", "WQ/dQSkpmrVdUaZcMSkHWQe", "x8k5i8kjWQircSkEhx8", "wSoom8klW4ddQNGPvmkk", "W6zDW4hcLSo1hW", "W7fkW4xcL8oKg8kiW6KiW6i", "W6eqWRxcS3pcL8o+WQFdVg4", "hqvmsCk0fmkzWRZcShu", "W7VcHJZdSCoeaSo5CSotW78", "rmkMWPlcLWTyWPO", "neFdSSk/", "W4fzWONdIHhcOCoFW5xcIta", "rXq0D8kofL0Nndq", "cmoJC8ovW6KfsSoArhi", "WRRcQCkkoWtcVqVcGmkWWQy", "WQFdSmkeotBcQWZcJSk0", "WR3dOCkpmcZcTqtcNCk9WOi", "zIHGChxdNeLTqCke", "wmoNWOBcNrCrW47cN8kKWRu", "kf/dUmkM", "ECk4W4z9", "W7RdVYhdQmk7aCo+CmoeW6e", "W4eDWOpcN1lcSmkgW4ZcKMq", "umkOoa", "dKFcS2VdT2NdJvxcSdq", "x8kyW7VdRt8+mqfZWRS", "WQJdUCo5WQPmr8o3WPXIkW", "kIRcHSkTgSkEywvXiW", "pSkxW77dTLCQsq", "W6BdJJJcTZtcMCo3CXmQ", "ymo2WOTu", "x8orW5BcUbypFaq7W6y", "WQ/dRN3cTeflW7XHdCkF", "W7rtW63dQmkyW4dcTSkwFZO", "WRawW48bWPKrWOrexCkg", "FSkIW55OWQq", "lmkfWPFdQKjgmKm7WQS", "W5BdUSkUra", "q8odW6RdU3j7DuGY", "W5yyW6CKgmo0WObBW7O3", "sSobpCkbpCk/WQ/dNSkDW6O", "W6BcMghdO2tdH8k3m1f+", "pemlW61RWRCuWPuOaq", "BftcGSoZ", "WPD1WRKiW4/cKSoKqgtcIq", "W7n6aW", "FmkKW49+WORcSmokvCogW7S", "fmk/WRDAAZddNvmZAG", "W4mtWQm3bSo6WPvb", "WQqYWQmqW7pcRIW", "WQa1WQWD", "rLVdTSoyASoOdHjWfG", "b8onW77cJsJcNCocWOGWia", "kmktWR3dPLSJvcNdSmod", "imkuWQxdPmktWQhcKq4EAq", "tCo5W64wpG", "BeTjW6L1WRTyW58LeG", "kmoHWOORWPJcUSoFcSkfWRi", "xSojfSoqW7fdgXKEWRi", "W5vtWO3cK0ZdQCkuWP/dNxO", "WQ7cTSkiW7/cM3vEW6JcM8oF", "bSofW6ldJddcN8opWO94yW", "W4XvWOSaxSkY", "lrFdTmk9WPbIW4RcL1dcSG", "WQJcRCkrW7FcHwDiW7pcMSom", "W6n4t8oAWPOBWQNcHmkcbG", "rSoym8kkWPJcUIDHzCkp", "WRWXdmoiWOrjWQ7cGCkyqq", "W53cISor", "w8kxWR3cUs8VjafIWRu", "W4WslSo3edldVSkbWQddUG", "W6XyWPibWPKsWPXesSkw", "ESomW77cUa", "kKdcKCo3W6KWpG", "CComW6e", "wHrRWOPJW6xcGCkFCaq", "fCkxsKvCkCk9WOHRWR8", "W6JdNcdcTYxcJSoLkKP6", "jwmQkgpdG1L5vSke", "rCodW6RdSxuJ", "W7y1WQ3dSI/cHHvTWRuP", "WOvxDCkQqcNdRmoAWQFdTW", "W6G/WQOyW7hdQ3DnW4qa", "DvOBsCoIsCkmW7hdSJq", "uCkPWPtcLXClW5FcRCkZWRy", "D8kaW6lcSCokWO7dGuvzma", "sr83DCkcbHX0aw0", "rePLn8orwaaKiti", "yfVcKCoUW7j/oCknW55s", "uSkUWO7cLG", "krxdNCo0W7yLm8khW5TF", "W45aWPdcGH7cOCocWPVdKhK", "W7RcSCkZWRDpvSo6WPPTkq", "WOlcTCoPa24RWRZdNCkkW5e", "xCopWQtcI0tdMw4IW7iG", "WP8anCkLswBcTmol", "AuBdSSo5WRhcOaVdN8k4aq", "yCkSW4pcUCkkDqtdLdhdKa", "xCosk8kBWO3cNNmJuCk6", "lbnhECk9bSokWRO", "W5vaW65sg8o5WQKxmeK", "W6NdUxFcVeC", "WRyOc8okWObuWQlcJCkysG", "W5eeW7Pwa8o1WObDWRS+", "a1jRWOi6W6FcI8oaDre", "jdJcI8oOrCozoIjPbG", "gCkbW77dNZhcL8ol", "WQFcJhtdVMRdGmo+FqqQ", "W4FdTmk9us55W5/cGmozWO4", "rvlcUhRdTW", "W5aCiSo3e1VcPmkqWQJcOG", "W7NcRCkIWQHqhSoUWPzIFW", "w8kBWRFcJwNdGSkoW5ylmq", "W4a7W79hW4ldGSk2dYddNa", "x8kyW7/cTW", "W7NcTCk3WQTwuSoWWPqHDW", "ESk4W4BdRdldQX1geSoH", "kCk5W4n9WQtcUSkFaCkkWRS", "W67dV3ddPWmkWRrSxCon", "emkeWPxdSfnDyaT5WRm", "uSoTW6ikpNlcIa", "feD+WPDIW7O", "cCkjfSkGWQVcH1mfy8os", "zmoWWO5v", "BcqWmZBcIaiRtmke", "BxBcPCo9W4mXWONcIKFdQG", "DSkPW5JdOW", "g8kuzmkFjCkoWQ/dNSoyW68", "W4WOW79hBCo0W6WVybu", "WOaEWPpcL1lcVmoFWORdGse", "WObwWORcHapdSSopWORdMcy", "gCojW6ddIIZcNa", "WR5WWRddPIlcGaLKWQ4", "e8kRWQLcBdddMv00Dq", "W5mrkCoXahpcVa", "FvKkW7PUWQ5n", "krxdGCk7WRO+kSkCW5Wq", "WR9QWQ7dR33cGtHKWROI", "tCoTWR1AEcNcIeC2iG", "WOZcH8osW6pcPvldTY3dTbm", "W6vFW63dUSkkW5hcV8knF2O", "W6tcPSkYWQrivSkIW5X/zq", "rCkKW5/cTColdqtdIJhdLq", "W4yScCoiWOnoWRFcICkExa", "jHrvW6KNWRzlWPCVtG", "kbSDgSoXr8kzW6NdOdK", "W7tdK2hcQtNcGCkXDXO", "WPRcTSkUvsX8WOZcIG", "xmofha", "v8kJoSksWResb8kog38", "g8kPWQTiAZldMuyHDW", "WRnceSoiW4BcHmoHArH0", "W6/dQ8oHW7CCaSkPW508iG", "W5NcGmo/iSkVthTLW5xdJq", "W7XmW4hcLq", "c8okW6ZcJuBdNxySW6WI", "iCodW7RdJdtdLmo+WOq1yG", "muqDWRn6W71jWPC7gG", "WQRcT8kZWRvzxCo6", "W7WasSkyWOJdGCoOke5h", "ChNdKa", "keFdU8k4WOu", "tLFdVNRdO3JcJWxcKbq", "nuRdQ8oZWQRcMG", "WPJcL8onW7/dQbZdOIFdKLC", "W4uWW7DpWPVdMG", "WQdcO13dQW8yWRr8xCoD", "aSoEW6pcQu5UyKHVWQG", "W7TCW5NcKSk/vCkqW6KeWQC", "WRpcG8oaW7xdQN3dQIZdGuO", "WQawWRxcVa", "WQaBWQJcPG", "ieSBW61PWQPk", "W4eFWQyar8oYWOHcW6mM", "WQxdU33dQmkpASo9kmkgWP0", "WP0dsSkAWOJdGmo6nfu2", "WQdcJMxdSq", "hSkWW6vezZpcMbC/EG", "p8kVWORcO8oioHxdKJ/dHW", "WOabW5dcVG/dPSoTW5RcGGW", "W6L4amoeW5CvW6xdNmoiaa", "oCknWRldQmolWP3dLf5FpW", "WQtcGYhdOmoycCoOASoaW7S", "WRaBW4DLW5uaWPTw", "a1PPW4n0W6xcHCobA00", "WRqRcSotWOflWQlcLmkDxa", "F8o/v8oAWO3cVK3dJ8oS", "E8kVW5tdOtddPbDxdSo6", "W7NdJY7cOJhdTmo+BbO2", "imoHW4hdQ2K", "WQ0Vd8oxWPLAWQxcISkCxG", "qCoZW64zma", "tSoCW4BcTGywBXiJW78", "oSozW7pcUSodWORdGvSDiq", "WO5aWORcHuRdUmoiWOxdNdq", "W7zRWQroW7VdTfWsW5ux", "W74lW4CyWPLbW4GfhSod", "kc3dRCkMbmkxC3K6gq", "W71oWPldMCkJwSoC", "WRRcMw3dUhpdIW", "EuuddCoHr8kwW6NdSsO", "W4ldTSk/vYX2W43dVCoAWPS", "sSkSASkxWRDtamkEg3i", "WR9YW6pcQI/dLvOHW7XT", "c8k5WQtdNb7dJqzXWQ56", "WPRcH8kbW77cR1JdRsNcGaK", "x8kiWQxdMG3cIcq", "bLjHEmoEruaPmNe", "W7fmW43cKmoVwSkZW7GvWQS", "WPmpWRW3wSkMWRi", "AxNdHCoMqSohDwzPdG", "W7JdPCk3WQLidSk8", "W43cQtddQGmAWRr8uCoD", "W7OZWPZcVYpdGfOXW7X9", "sCoBlCkDia", "pmkPW4vdWR84W6dcMuddOG", "c1zXWOrJW6e", "dCkvvvPxumkSWOX0WQS", "W7ZdKJxcTZtcNmo1DWO/", "d8o7FCosW7enuCohqhW", "W69dWOXcW5axW5yzeCkh", "AN7dNSoZbSoAoZC9gG", "WR3cUI3dRq0FWRr9tSod", "omo/WP/dR8oyg0BcLNdcJa", "f8k/WRDAAZddNvm4Aa", "WQJdHgpdRmorrSkPmSkgWQG", "FSk5WOrFWQ8WWQVdLvNdVa", "WQC1W6m", "F8oeW77cSCkzW4RcHXDdiW", "W6imaSoaW57dKmkZyeqH", "WPBcG8ov", "f8ocW6/dHdtdLSkq", "WQRdLMtcSSkE", "WQi9sCkhW4CDW7ldJmkqvq", "eSozsmkFWQe", "x8kyW6VdOhCG", "WOJcG8onW6BcR08", "wXXRWOCP", "W6ddS3tcUfChW7WLdSkz", "WOefWQixd8o1WPiFW78M", "WRqsW5nsW4a", "W6ngW6hdUCklW47cR8kaeIS", "u8oFc8kkWQjp", "cvjYWOyQWQ7cJ8oxBbu", "WOacWQmBt8oIW7OonrO", "W6/cTCooWRldIJydWRBdKa", "yCoOsSkoWOVcPetdISo9", "WRiqcCozW5ZcMCk1ALrU", "W7jyeSoeW4tdNCkZAG9P", "W6NcGZZdOmoeC8o8CSocW74", "C8kqW7/dR1DPxJxdSmoB", "jeddQmoOWRNcKqW", "nmkoWQ7cOHjKhx3cSCkp", "W7zFW63dQSoCWONdPCoDmhq", "gSkFWOldQK8", "W4XOWR5CWORdISkWr2VcLW", "WPieW4ldIalcPCoAWP/dNwq", "CW/cT8kVW7ldJuZcLSoZua", "tmoFeq", "jeuoW69RWRS", "WRmOWRywW7e", "fNZdNSkDWR5bW5JdMW3cTq", "WPDlW6pdUSklW4ZcP8kpCsG", "W48wiSo3hhdcTCkzWQW", "W7pcPSkvpr3cTaddMCkHWR0", "WOLKWRuzW53dSCo2tNpcMG", "WQSUcCowWOzdWQtcICkbqG", "jepdQCoVWRNcJaW", "pXtcPmkIW6dcNuBdSSkJea", "WPejWRHmg8oLW7PhCqC", "DCo9WOBcR3/dKrHkhSo0", "W7brWPBcHuNcUSojWO/cLrm", "FmodW7hcTCowWOtdGvKqiq", "CmkPW7BdOdVdQGSaxmoX", "p2f/pYVcGqO8gmoq", "m2lcLCk/f8kgpcaUuq", "ieSBW7TI", "imkPW4ObW7TZW7xcI3FcUG", "tCkiWQpdKcNcHtDMWOn/", "FSoiW6BcNCoqWOJdJq", "WQFdOCkwfGBcOfJdK8oHW7q", "W6pdPCoNW7CsaSkQW5m+jq", "W6/dU27cSejeWRnSfmkj", "W6RdH3hcV8kCuCkMoCoEWQ8", "W6RdQhpcTgbcW7u+pSkc", "pLnHumkyWQ3dN3Ggsq", "WOO7W7zCWOBdLmkTcYxdMG", "W5ixW4xcKGpdSSo2W5RcH2G", "W6GWtCkdW4yBW7NcN8ktoq", "qCoFfq5yo8o5W5aPW68", "rvZcJ8oWWQyDnCkpW5Wr", "aCoPW5hdILuAW5/dM8oNW7y", "qSkjWP7dMaVcIs8", "xmosbmkFWPvihGG+WQ8", "BceFBxBdGf4yrCki", "r8oqnSkAWPZcPd14bSoo", "BHLctmk4amoyWRRcQtK", "W7BdNmk2pmoLaMDXW4tcMa", "W6XcWP4BWOrRW4jHF8k3", "f8koA8oAW4NdVsjQf8oC", "W798W7vvWQ7cTtXvWPDf", "AmowWQxdJGnWe2JcVCkC", "W71wW5ZcJmo3vmkFW60nWQm", "WPKfWROxfSkMWRukpei", "W40GW7i", "jemDW6rI", "WPddJ8kXiSo5dtCWWOZcLa", "smovf8kjW7ehdHqpWR4", "W6bud8oFWOJcK8k2zqP1", "krxdGq", "WOepWROtv8k1WR8km0y", "WPOsW7rsgmoWWR5tzKm", "sSojamkbW7yjfrOtW7y", "W6VdTSo4W7Cke8kVW4uIiW", "bSoRsfLjk8oCWOX2WQO", "Fmo9WOTeWQXYWRldILpdUq", "ESoyW6FdQ1yWvwdcTSkE", "W4uBnCoEfhhcUa", "lmoXWPHvWQ9IW6u", "W7PrW5/dMCotcmktW6WtWQK", "WQ7cTSkkW7/cIwDuW6VcLmoF", "rSkGWOhdNXvEWOBcI8kJWRe", "W7rFWOWgW6SrW4ezeCkb", "BauDW6W5W6iwWOy7tq", "jSo8WPKNW77dR8kgxmoxW7O", "sCorW4FcRHGzzaqQW7a", "EfZdOSkHWP5/", "gCkEWOldTW", "n1JdTmkWWOv4W5BdHa", "W5uHWQuhvq", "DSoDW7FcUG", "vSoSWQGEpNRcJqzTmG", "WOCgW5xdKr7cTmoxWP/cIgm", "rmothbKCt8o4W5u/W7W", "cfqaD8kWWOddOXz0Ea", "ybJcHCo6W7iWD8kyW4Cq", "WPWoWR4htW", "qvZcRtldUgtcIX/dMf8", "b8kBpmkAmSos", "mmobW6/dHdtcTCoBWPuWua", "lKpcT8kYWP1WW4RdMuRdOq", "Ef/dO8k8WP08W5ZdJH7cSG", "rCorW5q", "WPCjWR0tf8oLWPegpe4", "oWddJCkIWQHHBSoiWOzt", "WR7cOmkLWQ5owSoUWObLmG", "WR3cJg/dUsJdJCkXjKDH", "k0ddTmk7W7ZcM0xcKCkpvG", "W4fcWO7dKr7cOCocWPVdKhK", "wSoyfCk9WRlcHG", "AeBcKSkMWQe1o8kCW5qw", "WO0giSoThhFcP8oyWQFdTW", "BHVcPSoJWRaIWPxcMvFdTG", "bSkvW5i", "EuhcTwZdVN/dIH7cHb0", "ouiiW6yNWO5lWP0TbG", "W7acv8oQWPVdNSoIpvu0", "zsPJB2RdLvavrmkw", "W6FcJYNdSCohbmoMB8otW78", "uCoLW57dJGqmWOhcNCkZWRW", "Emo2WOqDWRK6WQNdMLFdUq", "k0ddTmk7W7ZcM0xcKCkpvq", "CmoWW5FdOdpdVf4zxmk1", "W43dJSktWQldPaxcTX7cKvm", "yWrlvCkMsSorWQdcPhW", "W77dUCorWQS", "AuhdQCoOWRxcMvxdG8kUbq", "ntJcHmkTgCkzywDPxa", "FCocW7hcPW", "wHfSWPDLW6dcJ8oxoK4", "bCozW7RcJtVcMmopWPiRpq", "W7NdUxtcVfewWRS4gCot", "i0S1dmokW6BcKYznsW", "rCoufG0mCmo4WPq7W6K", "WQOZWQu", "WPfDW6KEvmkKWR4ciWa", "WRbvs8oaW4BcGmkVCaLV", "pSoJWOhdPSolAuhcIgRcHG", "cCkqWPO", "W4mhWRCrbmo/", "WQNcKdZcUhhdHSoNF1bI", "WPLxWRCvdSo/WO9CW7fO", "WRpdTmosWQBdJtWiWQlcJSkx", "j8k6W5HOWRJdV8kCdmkbWQC", "W7fkWOZcKCoIcSkjW7TbW7W", "W4zzWOVcKG", "gmouW7VcHvldMgCNW7i8", "WQZcUJZdPqXoW706q8on", "b0tcS3VdVgNcNKBcNba", "W7WqrSkjWOJdKmo6oaLN", "W6GVWRyyW6VdUwfnW4Cg", "wCohcWiwmCo+W5y0W6S", "sSkkWRZdMatcIq", "lCoUWOBcVgdcSvKhxmo5", "CapcT8kQW7ldIe3dTCoWvq", "FZqufSoGvSkxW7VdStK", "W7WxW4jkW5GmWOLle8ki", "WOddPmkUrcjUW4pdLCkcW5q", "smklW6ZdMcZcGmobWO91za", "WRqyWOZdMCkJwSoaW6WpWRq", "W449W7HBWOBdNSkLdMpcLW", "uCoSWRPDl33cJH9KAW", "jComWRlcVmowWOJdHGOx", "W4iajSoYg2lcPCkbW6lcVa", "WPdcN8o4BSkWrxz+WOZdNW", "ALRcJCo3W6mYlSkbW5Or", "CCkVW5lcOgxcTuKxu8oM", "xSoynmkwnSobWRRdGmkxW68", "vCkHWPtcLXC", "j8o4WOxcHmomzKJcIs7dLq", "p8oPtCkvWPpdVvxdK8o8W68", "l8kqW7hdSvSOhtNdUmoe", "xCocpCkdWPtcVa", "WRRdHc3dTSksuCk8p8kAWQm", "F8ocW6dcKCofWO7dIa", "W6BcItddSCokh8kSn8kfW7m", "F8oTW5lcSSkkkWFcM3NdLG", "v8oiamkl", "W6NcUSoDEXNcUrhcNmoVW7q", "kHjx", "omo/WPhdRmozEeBcLh7cHq", "W6/dTCoLW7eobCkZW4mIjW", "c0LN", "hSkxW77dTLmTuZJdO8kp", "iemfW6fVW75aWPmNfa", "EuindCoMsSkkW77dRIS", "jW3dLSkTWRvLAmoqWPLo", "eSkXWRnjAYRdMKCWAG", "W4jvWONcNX7dQCoAW4VdNty", "WPJcV8o8rcW6WPRdICkFWO8", "C18zW6rOWR9DW58UhG", "W6BdIZNcUZtcMCo5CHyM", "wSoalmkb", "WRPFfmoeW4NcHmo9jbbI", "AvKKwSkqWQ/dMsqnba", "D8oZs8kE", "vSknWPlcRYFdQrHegCo9", "WRPTWRNcQN3cKHGPW65/", "pSoZW5ZdUZldQczxdSo8", "WRLPwmkEW4eBW6xdNComuG", "v8oBf8kkWRCkcH8qWR8", "WORcOmk7WQDzx8o3WPjIkq", "W77cTmkrlflcRWZcKmkLWRW", "WRbjxmkjW7RcN8k4AW1P", "r8kRWONcLGbOWOBcMmk4", "W7vSWRZdUwBcMvDNWRm5", "sSkLASkuWQztfmkotxa", "W4LeW4ldLLFcSCkgW4ZdGsS", "WRVdSmkrpqxcSq3cLCk/WQe", "WPxcG8orWR/dQK/dRstdGqi", "W57cJSo8yW", "kf4Zv8kf", "yKTJBMJdMYzSwSkr", "evP6WPrvW6BcNmkpoKa", "aSkXW6GkkhxdGqnOkG", "tCk5k8ktWRbp", "emobW6/dHdq", "eCknumkUW6qwvf1iW7C", "Emo4WPHdW6TH", "n0RdSG", "xmowoCoBDmoaW7RcNSoiWQu", "vGyXz8kChMX+Bgq", "W5BcISo8c2y7WPtcJCoeW5y", "WPRcTCoTbw4DWOVdNSkzW4m", "WRNcPmkIWQzu", "bCktWRJdMaFcSIv9WRP1", "ouyfWRuGWQTlWP5Hua", "WO1cCSk3rYldVSobW7ddJG", "rLFcOYhcPYpcNGRcLH0", "vSo3W6iu", "AK84rSkuW7ZcLdfeuG", "W6HPWPrmWRhcUvfsWPDh", "W4iDkCoRagBdT8olW6xcOG", "dmkcW4VcV19blffVWRu", "g8oefHniESoYW4S3WRi", "DSojW6FcV8orWPNdGvPrFa", "WPNcQmkPrgzZW5JdVmoAWPm", "f8koWQ3dNWBcIhz3WQXX", "jmkkW6BcU8ojWO/dJ1SDmG", "jeddQmoOWRNcKqZcM8k1fG", "dmo2W7mFnKpcNafOjq", "jmkPW4T9WQNdSSoAcCkwWQW", "sSkuWRJdLeRcNtDNWRnN", "WO8zWQHzbmoUW4TaW6f9", "W6GhWQxcRCozWOtcTSovm3S", "o8k3W50dW79MW7tcGqpcPW", "aSodW7VdUW", "gvOJqSke", "cCkcuSozW6uqvLvrW6S", "cCkjdmkxWPZcUNSYbSkL", "tSoaEmkAimorW63dM8kwW7K", "W7WyW4RcKmoVfSobWQ8fWRC", "WOatW6Lmg8oLW6yop1C", "FqjHb8ohW6/cHxWbgW", "WRddQwZcUe0kW70Oqmok", "W4DzWPhcL1i", "W6z1xmkuW7qo", "nmoXW5POWRZcT8ksdmozW6W", "w8ovbSkE", "Av0NumokWRhdKIffqW", "tmoeW5RcRXyEBGGSWPW", "W60DW5zsW40oWOyftmkm", "bSoFWRpcIJRcM8okWPH1Ca", "WROJW6pdN3/cMrvGWRHT", "uCk/WPtcLWTi", "fSoaW6VdJcRdK8kqW513za", "WP3dPSkHbJXYW5ddHCkpWPW", "WRuqWQ7cRColWPpdGSoznh8", "BCoyWQdcOGbWhw/cPCki", "WOpdGCkIm8oGgsiOWPddKa", "WRVcOCkYWOzquSoTWOa", "WPddJ8kXiSo5dtCWWPddKa", "WQ0hWRNcOmkiW5tdGCkoCei", "WRHrrSolW43cGSkYzqPV", "WP3cISoeW7dcOuNdTY3dKG", "i8o+W5qmWQ5HW7VcLLhcTq", "WR5NW6bh", "WQmUW7HzWQ7dVgPaW4qB", "c8kCWQpdJ1FdIInKWQX/", "WOabW5ddMaVdTCkkW5pcM3a", "W7frW5bsW4SiWOna", "tcNcHSomhmkfFwibvG", "WQldQ8kameNcRatcLSk9WRe", "EuFcJSoVW6KLi8kyW5a", "WODAW65ds8k9W7OupKS", "wSoiwqibiCk6W4S/W6W", "aSkUWRruBJZdNKaHDW", "W7Sop8oiWPtdN8k1Da1V", "f8koWQJcNrNcMs94WQuT", "tCohW73dPMvRCLurW6G", "h8kBBSoCWR7dUJrXfCoc", "WQu0WQmxW7JdQq", "q8kzW63dRg13C0q/W64", "hKueW6D1W75XWQjZuW", "f0m9CSous1KJz3m", "Fd8sa8khvSkkWPpdOIC", "rSo+W7mB", "WQ/dOmkmpqC", "lbvgvSoVr8kzW6NdOdK", "W47dO1xcVq", "WRi1WQWEWR3cSG", "FSkIW6zMWR/cUSoak8kfWRG", "t8odk8kC", "mCkzW6ldQ0fPxJldV8oB", "AmkSW4rNWQ3cRCkqsmkxWR8", "mv4DW7O", "FCoyWRdcOHjKaxldTCog", "j8krWR3cP8osWORcNG", "b0pcTwZdRYhcHr7cGbq", "W6GSWRawW7VdUxLnW54A", "WQ/cPmk6", "WPddJ8osW6BcQfhdRtZcH0O", "WQj9WQ3dRW", "WP5wlSoVeh/dVCkfWQRdSq", "yHuDbSo+bSkhW6NcTxC", "W6GOWQSnW7pdQt8qW54y", "aSkDvConW6yhsfLFW6K", "FaqlW61RWRDBWPCLgG", "AGDUvmop", "qCkoWRtcJxO", "W7/cS8opyuNdQKxdHCoJW7q", "x8kvWQi", "Emk4W5ddQW", "BqGeW6XMWQPCW5b3hG", "cvD+W4n6W6ZcISowEqa", "p8kqlW", "AmoWWPWqWQOZWQBdIKxcTG", "oCofW6ddHNJcSSobWPu3ia", "hL4QrCorWPldKILarW", "lKFdS8kWWOv0", "zvtcG8o+W6O", "W4tdNSkoW6FcRGlcUdZdHfq", "W6BcSCkKW7S", "cL3cU3ldUG", "przrx8k/e8ok", "ymoWW5bwWQaTWRtdJq", "m0yiW7T0WPbyWP8S", "ASkLW5tcVCkapra", "sCoeW7ZcK2tdM8ogWPnM", "sGSSW4mVWRRcKSkgkrG", "gSoBW6RcTczTzu4JWQO", "WOCfWR4EwSkMWR8", "WR3dRCkBmq", "iuBdQmo4", "rWHPiCovr3i2mJu", "oJJcL8kHc8kjB3zPuW", "W7PmW4pcKCk5wSkWWQ9gWRy", "E8kOW5ZcSCkDpq", "r8oskmkSWPlcScDHfSoo", "W6JdUCorWQxdHtOfWQ7dKmoF", "ofVdVSkYWPO", "W5mvnmoOaxRcOSkAWRddPq", "w8opdSopW6GBvqKwWQ0", "WRb8WQevW77dV2fDWPaC", "oaZcT8kUW45KdmozWOW3", "W5vqW6jdg8o0W61lybu", "WOebWQCCs8kWWQ5aBWC", "hmoFW77dGtNcJCkuW4e2BW", "WPldGSojW7lcUKNdT2/cNKO", "WPFcT8oSdw5UWP3dKmkmW4S", "W7tdK3tdPtVcKSo2n0zL", "kvldP8k9WPbYW5W", "d8oVW7uvpxxcGby", "fCocreKOlCkOWPDUWQ4", "gqBdQIZcRZ7dNeBdHf8", "EmoFwqOjAmk9W40/W6C", "W5rrWPC", "t8orimkh", "jmkKW4rVWQFdSSozhCkwWQi", "hSoTASohW6uCrmoluhi", "W6JcOtZcQujoW7aLe8kk", "W4KpWR4guSkQWRrhj0y", "fvjHo8oevW4LlZi", "W7G3WP7cUZVdM0i3W7b6", "WRbTWRpdRG", "WQ8nqCoFW4NcNmkVyvrK", "smoakSkAkSklWQpdLmkb", "t8oDW4BcUaCECHuUW6O", "W6mdW4VdHWZdUCkkW5pcM3y", "E8kMW5ZcSCkppvpcMgldNq", "BSk8W4BdVcddQGTd", "W7xcMgtcTmkormkPlmkwWQW", "jCkTcCoiW5BdSa/cLSkPWR0", "WP9Bm8o5gNBcQCol", "kCoGsmokW4NdPa3dKSk1WR8", "W6JcJgZdTMBdI8kXleHU", "WPRdT8o+fMSTWPO", "F8kXWPxcVHRdP1Kplmo0", "rSovreWwF8oVW5y2W7m", "pCk1W4hdOJVcQbXdfCoH", "WR7cPmkIWQqrxCoXWOfHDa", "pmkBWPSWWPldUmkDvSoyW6q", "W5nzWP/cKW", "dCkgs1PljCkOWPLRWQ4", "ECkHW4nTWQ3cISoc", "cvOZx8onW67dKtbvxG", "BCofWQW", "vCk3WPlcNqfzWOldImo2WRq", "fCoDlmkwkCkZWRRdGmkrW6O", "s8oDnmkAlmomWRpdK8kwW64", "W6r3xmkE", "WQaFWOZcICoVg8kFW60oWQ0", "dqtdN8oOWRWMWPxcNd/dTW", "WQBdTSkemG", "bSklW5hdIKuBW4FdMSkAW6S", "kCkHW4vOWQZdSSobhCkpWRG", "W61qW4qyWOugW5yzeCke", "WRGKWPJdP27cNbyHWP0J", "c8kuWO7dRa", "WPRcU8o9fZ9PWOVdMmkFW44", "WPvcA8kRwsFdVSodW73cSa", "FmkJW5xcU8knmrRdGZO", "pNy3mIhcIa", "WQ7cRCoOW7LmuSoQWPSSCq", "WP7dM8kNiSoOhJCHWOtdNG", "mM43pY/cIqm", "F1tcJq", "WRiZWO4wW6JdQwaJW5yh", "WPhcHmoiW7/cRXVcUMJcGeO", "rCkFWPNdTLmonuLRWQK", "dvRdQ8oWWR3cL0lcLG", "AfhcHq", "lSoTW4xcP8kBpuNcGsRdKq", "W4zzWONcKWldUSozWP7dGta", "zxBdMCoKwCkjjJG5gG", "vHq1fSkabb1XDgW", "kCoTWPhdVSolEftcHMldNq", "W5BdKmktWQldPHZcTNRcKuy", "ieSBW61PWQO", "W7jzW5/cJq", "FqHTbmodWO3cGxqnga", "WQFcIvVcVCkFw8oOlSksWQK", "lbKDgSoXw8kwWQ3cQw8", "W7T0WRtdPMBcNrTVW7e+", "u8oQW6ippG", "fCk8WQpdIqxdJqzMWQ92", "h8kgsSkjWR9rre1FW7S", "FNxcHSkWgmkeFwb6bW", "fSoakSkskSkFWRRdK8kkW6W", "tmkhqSkfWQjkfKapWQK", "rWHZiCocq0yJ", "jmkUW4eKWQRcQ8oCrmokWQm", "W4noW7Pag8o0W6LjzXe", "ELtcL8o+", "w8o4WObzWQT/WQRdNfJdQG", "pLqsqSkdWQJdNsi", "i1WOqSkqWQ3cJ2PdxW", "W5JcM8o8BG", "WORcH8ozW6C", "kSoUWPVcUMxcPuOEuSkT", "Cr9rbmoTsmorWRVdVG", "FCkCW7hdTLnPttldOSoB", "nblcR8o6W6SWESkKW5ar", "WPXlWRCvhSoZW4zuW78+", "zdb+AwRdMvjStSkq", "WPlcVSoNcMv0W5/cGmoEW5i", "W4nCWOZcLvu", "d8osW6hdRNv2", "o04GwmkfWQJdHZW", "hCkEWPldOrer", "W7NdQNJcUfDp", "sSkwWQ3dKaVcMq", "WRRdH3hcV8oiemoOFSotW60", "WR3cUmkDW6FcIxvAW6RdH8kw", "DmoiW6BcTCoaWOZdLfy", "iCkQfSopW5ddVa3cLSkPWRG", "WRuDWQRcQCowW4ddHSoemh4", "WO4bW4xdHaZdU8kdW5lcLxu", "w0hcV3hdR0/cHqFcMWm", "cmoOWOtcMXms", "DNFdGSoVtW", "W7vwW4FcMmoTwSkmW60uWRe", "WP0xWOhcL0RcTmkwWP7dHIe", "zvdcJ8o8W7i5", "obiEhCoLqmkhWOVcOw0", "WQxdPSkole7dUapcM8kJW6K", "W6ddV3lcVLDc", "e8oCWOBdQL9moq", "q8oRW7mi", "bCkEWQ3dIqVdGcz9WQX5", "WQeAW41fW5GtWOfeumoe", "lCkkW7/dTL0Wrc3dTa", "WO0mWR0", "jCkcW6BcTSolWONdMqKmFG", "nrDlW6POWQXDWPC7sq", "W4bxW5JcMmoVwSkSW60lWQa", "WQvNWQ/dPwpcMs5UWQW", "bConW7ZdIdBcGmoD", "D8o2sSkvWPy", "r8oNW6iz", "WRRdQ8k4sJP/W5pcGmosWOW", "WOjxW6DirCo/WO9eWQHY", "WRiUhCoxWOvuWQ/cGCoUsW", "W6zXxmkvW4zhWRddNmombG", "A8oiW7/cU8osWOJdQunvpa", "EmoUqmkxWRVcOuJdM8o2W74", "jLZdR8kXWQVcJrNdHSoScW", "W6P1b8ogW7LDWRFdJmouaG", "Fmk0W5VdQW", "wv/cTx7dVYhcJqBcLrG", "oCoJWONcOdpdRa8zxmk1", "CmofW7pcUSorWPNdGvPrFa", "cSkxW67dUwbUze9ZW6m", "Fmo/vSkjWOxcT1G", "vSkOWPlcLGbEW4tcGmkKW70", "W4tcNmo4Emk8xNj8W5xcKW", "amotpSkAWPZdPxaZs8kc", "hSoTASohW6uCwmkyadm", "WOaqW5NcML/cT8oEWOFcLsi", "BGDrvCk1eSosW6tcPha", "WQqZWQ5EWQhcShavW4ma", "ChFdPmo1wCoaite", "DHqLx8khW7/cK2ubcG", "WQVcTSkpW77dQMfiW7FcL8oF", "z8kFW4ddQthdOaS", "s8kYW7atp3VcIqCSja", "W7izW4XuW5rmWOrkwCkk", "WRbrfmoaW5VdNCkPAHb2", "AHTHfSonWQJdNtvuxG", "W4faWPxcMLFcTSoAWP/dNcS", "ASoBW7xdQSkyW4ldHf5gBW", "iHnwuq", "DILSygVcManN", "ibznfmoBBq", "cLzSWPb2W67cGq", "WRy9dmouWPvlWQtdQ8kCqG", "W7zGa8oAW4NcNSk7ALLN", "gSomW7tcJvpdNw45W7a+", "vr8MW40MWR3dHmkdlL4", "W5iwWRuhdW", "sSkOmSkt", "WPFcJ8ogWRhdQLtdTI3dHLC", "WQWpWOZdImkZvmopWRfgW7S", "W4GHW61A", "ia/dSmo1WRNcIdRdMCk6wq", "W48aymkLjxVcVmkCWQ3cOG", "ix5PFNO", "WQuZs8khW5KtW7pdMCozfW", "nmkEW7NdQvm3vhhcSSon", "W7jscCorWOxcLSk1DHqR", "WPpcUCo6sxiVWOZdGSkCW40", "f0fWWPm", "WQXcd8okW43cRq", "p8oQsSkjWPddVvldJ8oSW68", "WP7cNmo0y8kRtN89W5NcHa", "Fmk0W4y", "W5hcM8oLCa", "CmodW7VcOmonWOZdJf5kna", "WRNdHx/cOSktq8oOn8kDWR0", "W4enW4i", "W5Szk8o1bI/dT8kDWRhdTG", "gSkOWPdcGqWbWPNcHSk6WRm", "W7m9xSkkW5qjW6tcHCkkbG", "xmokfvzcF8oOW4SOW7O", "Brfksmk0bCoyWRRcPtK", "W4ysWRqx", "hSoRW6neytW", "k8ogWRdcOHjKas7dOCoo", "s8kUW5ddVxFdJd0hgmo8", "WOLacSogW4NcLmo6vaTP", "W48rkCo8axO", "WPNcOSkZrJjUW4/cKCozWPy", "W6r2smkiWOPAWQVdMCkngG", "W7NdIs7cPZBcGSoOEGO4", "vXy2z8kgsbyLlZa", "wmoiW6FdNJVcM8oBWO8S", "WRjUW6dcTW", "W40qASo4gN7cV8khW7/cOq", "y8o/WOW", "W6BdQSk3W7Sahmo2W4eY", "WRPrW5JcNmoUjCkmW7OpWQe", "EHXHxSkuWQJdLc1vfW", "WPasWQ0DvCkXWR8jjqK", "W6dcSSobz0FdRKxdHSoXW6e", "WRGnWOldGmk6q8ojWR9uW7O", "AL3cHmo4W600pG", "kSoTWOOPW6JdO8oEcCkgWQ4", "WO5RW4LnWPZdK8kQqbFdJa", "xmkMWO7dN1y", "WONdJYZcPcxcNSo5CWG7", "xSowlCklWPpcVgK", "wG7dUgVdSNJcHG7dLK8", "mConW7RdJhJcGCoDWOqQia", "jqnovG", "tmkOj8kiWRnzj8khese", "WPpdP8kPb2ORWPZdMSkjW40", "E8ohfaPftmoVW5y+W6O", "dLT+WO1IW73cHCoFEv0", "W6qKW6/cUIhdHKiHW614", "qqtdLmonWRuzy8kLWOjt", "W5asWQOBhmo+", "W6q1W7pcUdJdMuS3W7j+", "yNhdM8oTfSkooIqLrW", "hSonW6a", "WRL8hCkoW4CFW7hcHCkk", "tCktWQddMcpcIq", "uCoOW6GipW", "r1b6WOG3W57cPCksFbe", "W5LuW6bhEmoYW7ztFXi", "FCk1W5tdVrtdQH1cpCoH", "dmoOW64EphNcMf5Ikq", "nvddTSk/W5eTW5VcLbhcRW", "x8k+oCoAW6jFcmkeaZC", "pfldOW", "W5WMW7XeW4/cNmkRfYJcHa", "oaFdJCkQWR9/B8kRWOri", "Bw7cICk9bmonjIb3", "W71lW6SxWOXpW51Pd8ox", "W5FcISoLr8k1shP1W57cHa", "fudcRMBdT2NdLeJcGWm", "htHWBG", "h1fZWOP1W6xcJq", "rSodc0ymCSo7W5z9WQe", "oNNdK8kRWQzPdmozWOu3", "ACkMW4nKWQNcUmoxsmkqWQO", "emkdW5BdQLncm1j+WQa", "hmkDWPFdQ0usFLb+WR4", "WQ5vb8onW5e", "WOXccCopW4hcNmk/", "oSkDW6q", "W6xdUhNcTuOhW70VeSkd", "W7SqcmoiW4xcLCoNiZXR", "o8oHWOpcK8oAALJcKr/cGq", "eCoEmCkyW4a", "zvRcGmo/", "W7z4sCkNW4eoW6xdKCopbW", "jCkcW6BcTCogWOhdHqK", "W7RdT8oKW7qvcmk+WPbJEq", "nCkmW6tdSKf+eNldSmoF", "WOacW5FdMG/dP8o6W5RcHwG", "qmoqnSkCWPtcPxSOgSob", "WPBcG8opWRpdVG", "W60EWOnoW4SeWO4ygq", "aSoEW6pcPhf7Fem2W6S", "WQDXWRJdUhBcPH9TWRKU", "WPOqW5tcHKBdTCoiWOtdMs0", "W7vLW7nvWQ7cUZXrWOvf", "W6SMWRddQwRcOrDXWRbV", "z8kJW5tcVCkFDHldHZ3dKq", "iSk0W5JdQhFdOrHthCk4", "eCojamkmWQreeG", "xmoshay6B8o0W4m/", "vCo2W6mDpMJdGrDKmG", "E1dcJmo0W7a0", "W7/dQwVcTLfoWRnYxCon", "a0D0nmkDwKqQktq", "hCkus1PjpmkVWOTRWRm", "WPyCW5tdGxBdOSoTW5RcGwO", "W6VcIg/dO2tdGSkXiLzT", "WOepWQbvg8kMWRygiLq", "WOlcV8o9ea", "WRysWQu", "W7lcQ8ksjaJcTLVdImo+WQC", "lCoTW55WWRJcUSkpt8kkWR4", "W6GKW73cQI/dLvO9W7mP", "W790wCosWObuW6ddNCopxa", "WR4pW5bpWPqrWOfjv8kl", "W4G8W7DyWPRdHSoJxMtcIq", "ASomW7pcOmkeWPJdKfTFma", "r8kFW6dcNGNcGJHGWQv+", "EmkIW59NWQW", "W5BdQ8k9sJb4W5/cGmoFWOW", "W7tcPmoqyrNcOf7dLSoVW6G", "FmoHW5fyWQW2WQddKulcSq", "hmoiWRpcIIZcLCodWOm5Aa", "tCoWBCkrWQrqdCkpesy", "WOezWR4xbSoIWQ4ckvm", "W5atW6bkvSoOWPbvWRyK", "wmoBnCoCmCodW7RcNCkCWQy", "AmksW73cLSogkY7dHqJdPa", "r8kvWR7cMKRcIwSZWO0H", "f8osW7FdVq", "wSkKlCkoWRfDcmomtHy", "WQn3WRJdUcJdIW", "kmoLWQpdOCoYW5ZcMbKgeG", "hmkhCCoyW4JdQcT0cmoD", "W6pdVMxdVH0", "h8kgfSkDWRDjwGqBW6y", "nrRcICkVWRG", "vLpcG8oQ", "FSkSW4y", "oCkHW4CaW6DVW7FcIWtcVG", "ASkKpSklWQaCnmkchdS", "aCodW7RdJdq", "d09Kma", "W6vhW6ZcVIhdH0SHW69T", "W5xcGCoLCmkG", "lLVcLmo2W6q0kmopWPPb", "BSkSW55OWR3cRmoxgSkx", "WQ4DbmomW4tcMCk4yrvV", "C8kBW7JdO0zPuZZdVmoo", "oSoJWOpdQSolAu3cIg3cJa", "WRPRWRZdRMBcMX0HWR8O", "nKmhW6W", "ySkMcSkEWO3cPGm", "W4lcLSotWQ3dTKJdRhBdOWS", "WRCQeCoxWOzuWQ/cJSknqa", "mfBdUSk4W50XW5pdGXZcPW", "jupdR8oVWRtcMHZcKmkVbq", "zXJdS8k4WOCVWOxdJH7cSa", "WQKYWQDBWQe", "ymokgaucDCk9W6K7W6W", "jmoBf8ouW5hdVa/cLmkTWQO", "W77dUIhdO8oAbmoMA8kWW7O", "lSoRWPNcVMddJu5XtCkH", "WQ/dOmkffWxcUrBcHW", "WQHPx8kjW5edWRdcHG", "tmojwmokWRvphW4uWRK", "xeFcRNddTtldLKtcKbG", "E1RcHSoPW6mIkCofW5CE", "WQ7cPmk7WQqrbW", "k080rCotW6hdGdfyrG", "FCo1zmowW7eCvCozxMy", "eCojdCkcWQekeGqBWR4", "W5LrW7HCcmo8W7PqFry", "of4XwSkqWQldLG", "W4RdKmkbWQtdUHZcQ2JcKvK", "e8orWPtdVvPAmqr3WQm", "BLdcLq", "WOjTWQNdPMRdLsPOWRaK", "WPOjWQ0x", "Cmo0s8kFWPBdSftdLmoOW78", "WPnfWOTnrmkSW5iEWQDH", "h8k9W7uFohNcGGCSkG", "W7r0WRldUxVdMa5OWQGH", "i1OV", "lSkmW6NdRLCPuJNdTa", "BSoyWQhcUMr2drxcOmkA", "oKpdO8kJ", "e8k9i8klWQXubCkfbsy", "W6mOW6JcQJ/dLuOTW61T", "u8oanCkF", "W7RcPSk6WQrpqmkJW5r6Da", "kXHat8kI", "vWTJEmocxq", "CSo2tmkzWO8", "WObGWOtcHu3cOSouWPNdKq", "dCodnSkAWPhcRtCVsmkE", "AvZdSSo9WQJcIGVcM8kYfG", "smoaoCkhmCkF", "ALRcJ8oVW6m/lG", "nblcISo+W7i0kmkjW5Sy", "W5dcGmoeW7/cO17dOstdIuC", "aL5+WOP7", "lHRdN8k7WQzXESoiWPvF", "tSovna", "ASozW7pcPG", "WQGSWRCnWRJcSJjaWPDu", "BSkSoCkuWRjtfSkpucy", "n1dcHSkYFCkEb2D4oq", "gCkyEmorbCkaWQVdN8kzW70", "w8oiW6/dMtNcNCoaWPeTDa", "krdcQCoTWPKIWOFdRHBcSG", "WOZdGmoLzSoN", "yCoxW7tdQ0r6", "WOubWR0btmkQWQGdDHK", "W4feWPhcHa", "WPxcG8otW7lcPfVcUgFdGvq", "W5aEWQWvbmo6WOGEWRu6", "gCkWWOhcMrfzW4tcM8kZWRC", "W5SWW7rhWPNdL8khdcxdMG", "W6jtWPCiWOLuWR4xemot", "W73cOCkZWQLzr8o7W55LDG", "W5JcS8o6aw9JWO/dNSkyW5y", "DJ/cMmk/c8kjB3zPtW", "WQ7cOmkUWRe", "CCokWQldGqn2ew/cO8kp", "aSk/WRTvp3xcMK0HzG", "dmoSW7mBl2NcN15Xna", "dmkEWQ3dIqVcHdHKWRvK", "WQZcRSktW77cM3vxW7FcJCom", "FCoiWRdcSH51hw7cVCkE", "mMC8pYhcGa", "W4HzWPBcGLhcP8osW4VdNsu", "WQZcUJZdUqmkWQHJgCke", "WR3dMfBcUmkovCkS", "W6BdQSkXW7SavmkGW48JCG", "DXXXgmodW6BcJxKowG", "pCkTW4qjW75/W7BcIXJcVq", "W7T+W7jzWQ/cRcbuWPDg", "cCoshuSgCmo8W4OPWQi", "EgfMcmonW67dGYrvqG", "WPhdRCkvmqtcQW", "c8kqWPtdTfmryaT/WQ8", "r8kgfWqdC8oXW5u1W6G", "W4CAWRCaeW", "wXXRWOCPWRxdI8ogAK4", "WRCAW4zc", "ESomW6BcSCoZWOtdLf9ZiW", "k8oZWOdcR2BcVvCtxmkK", "WPVcJmovW6hcSW", "W7WqrSkjWOJdKmo6jfKM", "fvRcVg3dUMhcJ0VcLr0", "fCkdymolCCoDW7NcGmouWRW", "WR3dVCkmnGBcTa", "WPNdGSoxW7RcR0VdHIFdMfC", "rSoGW57dJKPiWOdcMCoOW6y", "z8oSWPHrWQD4W6FdJu/dUW", "WO5uWOtcGL/dUmooWPJdKdy", "kehdSmoXWOD4W5ZdNtxcQq", "WQipW49pW40", "WQRcKMhdVMK", "r8o+W6qs", "ifiQv8orWRhdGsPfxW", "g8osmCkFkmorW63dKCknW7S", "uSoSWOdcO2BcT1CwsSow", "w8kMWOtdKGnfWOxcISo6W7O", "prjnumkKbSovW67dVKK", "WRjTWQVcTc/dLvOHW7XT", "bhZdKmonWPxcVdNdKCklaG", "p1BcT8kuWPXWW5ddHLFcHW", "kSkHW57cV8kppqy", "rrpcRNRdQwFcGXNcNrW", "zmkPW4SPWQxcUSoCdmkfWRS", "FvZcJSo1WRWJp8keW5ql", "WP/cQCo+cgm3W4xcKCkfW40", "WOCLW7XgWOZdK8k2csxdHW", "WPrYW7fCWOldNSoPcsRdNW", "oSoAW5SeW6DNW7pcLqFcVq", "WOfoz8k5", "W60EumkjWPRdNSoRjeG3", "p8o+rmkoWOxcUvpdISoTW74", "g8kAlmkAmmkaWQ/cN8kiW6a", "W7lcQ8kvmfFdUexdLmoXW6G", "W53cGmooW6VdP0xdQZ3dLb8", "WR7dSCkspa", "qmkqWPRdRaTfl0T1W6a", "WQldQ8kcnr3cSqRcMG", "wWLIimoexKiOFG", "aSoRW74kpIhdIXzSjW", "tmovW7RdVxvXFX9ZWQC", "WOq9WRyyW6ZcReubW5Wa", "jCkcW7BcVCosW5pcGbCqCq", "g8kqWOldUrTbm1z2WQC", "W6pdO8kajGdcQ0JcLSkWWQm", "W5brWPFcK1dcOCoi", "WQdcQdldRbiDWQn6tmoF", "bSoRW5lcVLWcW5JdLSo6W6i", "W4ldJCouW7/dTa", "W6ddP8kjnqFcVWddMCkIWQa", "WPhcGmolW7BcQuG", "yfBcHa", "k1VdTSkOW4T/W5BdHbldOq", "W6y6WQSvW7pcStvdW7jc", "WRaZcSoEWO1pWQBcI8kFxG", "WRyKW6mqW7ldVh0sW4mv", "e8kkySotW4ddTrbSzCkV", "tmkFWRJdUaBcIdTXWQ5K", "W4W0W7Pa", "WRTtWQNcOColWOhdPmoxmxe", "emoof8otW7yhwK1dWQ8", "z8o3W53cU8knlfpcMa", "qCopySomW43dQcPMfmoA", "WPP7WQaDW4/cG8o1qhxcMG", "WR0ReCowWPLkWRVcJCkdqq", "kfldO8kfWPH8W5ZdHqlcSG", "zSkIW4LOWQtcJmogb8kwWQO", "WQHmW57dH8k/dSkuWRyYWQ0", "W4FdQSoguLr2WRFcGmotW7G", "W44qWOJcL03cOmoqW4VdHsu", "W5ZcJSoICCoKcMn/W53cKG", "CmkEW7/dSf9PvttdOSoB", "mSoYuCkxWOJdVu3dN8o2W60", "e8kqWPtdVvOpp0H6WRu", "w8kwWQ3dIq/cLIz7WRn5", "oKldO8k5", "WR1as8ozW4NcL8k/jbe3", "WOxcV8o8swSQW5JcKCkBW44", "W7iCW4juW5bmWOXmwCkk", "WQNcOmkKW6HvxCo4WPWRkW", "WOpcRSkUb24VWOZdGSowWOu", "W4W7W75dWO7dGSoJqdddKa", "jrznf8oL", "kvVdO8oYWQG", "W5LsW65cg8o1W7zxCr4", "fCoqWQ/dSwXYF1jUWQa", "WQJdPCksia", "w0jPi8kqsueNmY8", "uSoWW7qo", "n8kBWQVdTmkwW43cKquEyq", "W5SWW6LeWO7dKCkH", "g8kuEmotzmoqWQBdK8kAW6W", "wCkFWQddNb7cIdi", "qCoor1DkB8oRW55KWQm", "WOpcRSo6c2XJWOZdHmkjW48", "WPdcS8oGaa", "x8kyW7VdQgnYDb8", "WRv7W6iDW77dUhnnW4qa", "zSoQWOvEWRK", "w8k1WOtcLXCbWPVcJSkYWRm", "W6dcTSowEfJdReVdH8oMW7q", "m0yiW7T0W6mBWPyObW", "WQ3dJmoqga3cNJtcU8kOW6i", "p2C/pq", "mWldSSo0WQNcKHRcLmo8wa", "W4ydbCo0ds/dT8ofW6xcSG", "WQhcT8ooWRFdIdTyW6xcG8oF", "mCk6bCogWOJcSv/dN8o0WQO", "vSokeaGo", "uCkIWQuEpNdcIqDKAW", "W6ORWQNdRJhdLvOHW7XX", "neRdQmo4", "WR9bW6zcW5avW4H1tmkm", "c8odW6ldPq", "cunY", "eWOGoCozqKWYyaW", "WRasWRNcQCkvWOZdT8ouoNy", "W6j4sq", "WPFdNCkLjCo5vcyTWPFdGq", "v8kJoSksWReCdCkfacC", "WQXrfmomW4BcHmkP", "WQCdWQZcPSkgW5ZcUCoApNG", "sCkdW7RdJdRcMmolW58", "W6XZw8kjWPGuW7JdJmoefa", "W73dKJxdMZtcMSo3DGG5", "W7JdJddcScxdMSkGm0e3", "WQqmWPKiWOWtWO1ibCko", "eSkyl8oq", "W6NdUCoFWQVdJhufWQ3dGSkn", "W57dKCkXiSo5dsS/W5tcMq", "e1SHW584W7RcKSovjLa", "amowW6pdPuX7zuK8W6m", "Au3dS8o3WR0", "W7VdIwJdSgldUCkOaq", "BCoTWP5c", "bCoYW6iulJhcNafUia", "W5NdNmkDW6dcVfVcPd7dIq8", "iMO7ochcUaG+eCoi", "W5PAWQeBgmo2W4TgW6e9", "Emk9g8k+WOhcPfZdK8o0WQO", "WRhcUh7cTLfoW7e+r8on", "WQawWQdcUmokWO/dPSklFwG", "nLBdVSk9W5yV", "W7vmWONdH0pdJemHW7iH", "zmkOW4xcV8kpoqddHW", "p0qo", "w8oun8klWO/dTduYtSoq", "W7DtW47cLSo7xCotWRzgW6i", "WR3dMgtcSmkA", "W71oWPldHCkShSkvW75yW74", "fuPHj8ozwqPMncu", "o8kaWOddRmohAKtdPwNcMG", "W7xdGt3cQJJcK8ot", "kNtdNSoPsSoDyJ08hW", "Fmo/s8kpWONcSvBdN8oQ", "sCoroCkxpq", "dCkBWQ/dIqpcGJGPWQL+", "WRWsWR3cVCol", "ySo4WODv", "neukW7S", "s8o7WQCiph7dHeeZDW", "wmkjW7hcMH7cHcj4WQu9", "WQ3dPCkvnr3cUqS", "a1nRDCkbcGusite", "W4OaiSo2j33cP8ovWRFdRq", "WRDnW5/cNmoXv8kvW6W", "j8kLW4T7WQ/cVSkFgmkwWQq", "W5BcISoJpSo2xMDXW57dJG", "W7RdKJtcTZFcN8o3EGq7", "WR3cJM4", "WPqtWR1phmkNWQ8tjuG", "W6ddRCkvmqtdTrxcM8kIWQa", "dCkdWPpdTKjSm0H0WRq", "p1JdTa", "zCo3WOXFWRSYWQBdIL/cQq", "CeSfW6qNW68xW4a6sa", "bSoRs1LfkCkZWOWmWQ4", "W5BcGmoYD8kQ", "mLNdOq", "t8kjy8obWONcRcq", "WQxcMw7dSg3dM8k7nKPT", "sCojW4dcUbyppXq1W7C", "d8kuvmokW7zxfqqrWQ8", "cmkbcrKmF8o4WP5K", "W4y7WRLlWOpdK8k3e3NcJG", "WRtcV8oIew9UWR7dMSkFW4S", "smoenmkAma", "oGpdLCkTWRrLDSoAWOft", "bKG+ACkFtKqWFG", "WPJcI8osW7RcOq", "hmoFW77dGtNcJCkuWO83BG", "WQnrW7G6cSo3WPzEFXa", "crpdUJ/cP3JcJKVcLX0", "W7HMWRJdPMBcLX9TWRvG", "FSo0gW", "hSo8C8ojW7inkmozqxW", "EuxdTSk1WPH+WPVcIH7cOG", "zCk9W49N", "tmkOk8kdWRW", "mmoXWPGoW7vWWQ/dIWG", "W6PVwCkdW4DxW6xdMCojgW", "WRe1WQynW7FcTJjwWODe", "dmkuWPRdVvvByGq7W6y", "WRZdOCkamba", "W7HRWQ3dUwy", "WQdcMMpcPCkxrmk9lCouW7m", "FCoaW7VcUG", "Dw3dKSoZuSo6kJOSda", "lCkiWR3dSvORsNddSSoh", "xSovo8kB", "tSohW6ddUNv3DrXX", "WPpcVSkUaM08W5/dOSkoW4W", "CaPjWRrZWROzWPeLeG", "W5BcGmoJp8o+q3z9W5hcGa", "xSokfCkiWRHdoquwWRC", "W5VdQmk6sJuTW5lcG8oBWOW", "gaRcLY7cOIddMsRdHL0", "qerVlCkDtei0lxe", "ESkgDmobzmoCW6RcGSouWRG", "WPafW5ZdGW7dRmkiW4FcJwO", "W6j4sCkJW5KFW7RdNCodbG", "E1VdO8oKWQJcNGRdK8kJra", "o8o1WOy7W7NcK8kdxSokW74", "AfhdHSk7W6GWn8knWOHy", "jsSIpsRcHGy3eq", "W6rFWPitWPvqW5PKdCop", "xH0PW5q3WRJdK8kCkKC", "k0TSrSkqWQBdLMvjgW", "j8kHW57cV8kpmrRdGxpdGq", "s8ogn8kxmCkhW6FdHSkDW7S", "WPabvSkhWPNdICo6nuaO", "W4WsWRvua8o1WPzhW6i", "tmk9W4tcQbyxcHuRWO4", "qa0JWOP6W67dHmobAHm", "jfOSvW", "W5GcWQ8CvCkGWQG", "xvBdUNpdSMlcGuVcLr8", "BauCW6q5", "gmodW7ZcJrdcPmksW44SAa", "W61qW4DpW49F", "gWhdTIBcTt7dNIFdHuu", "B0FcJSo2W4u5o8kAW7yq", "W5SqWQebt8oOWRusjui", "WRiUWQSEW7JdQwa", "xmkfWPNdRfDdnevPWQe", "W4pdHCodW7ZcRKxcQshdJHW", "W49DWORcHbpcOmoiWO7dH2q", "cKm9CSoCq0mTmc4", "WR1Cd8oDW5hdKSo6CHHQ", "W6JdNcdcTYxcKSo2mfrR", "sSkCW7ZdG3FdIITJoCoh", "iCk6fCowW5xdSaNcLSkPWRG", "eCkmc8kMWOr9jCkQmrO", "wCohcHHyo8o+W5e/W7W", "W71nWOmwWPLrW4qvhSos", "mmkVW5tdUZlcQe0huSoN", "WRCBWQZcVmkvWONdUmogkM4", "W7ldTSkAW7NcLsyqWQlcG8kh", "WQ5vbComW4BcHmo3Dbz1", "i2mImcxcJWi", "vSopW7VdNYRcKConWPv1Ca", "WPddNSkGlmoHfdSPWPddGq", "WRPuW4pcMmoNe8ksW69lWRC", "EXFcT8oXW5eXWPNcIKVcOG", "mhiMlG", "nCkCWQdcT8kuW4hcLHKgyW", "pf7dO8kWWP02WPNdGXpdUW", "aCoVW64wmNtcJr0SDq", "W5hcG8o4zCk3tNj+W4tcLq", "AsPJBwRdLf5VrSkr", "W7ecqCkxW7ZcMCkUAbWM", "WO7cKmooW7FcV1FcQshdJGm", "W5yfWQ4z", "qConW5NdVf9zyGq7W6y", "nbldKCk7WRzXAmoCWPvn", "hCkxB8ooW43dPcPMf8oC", "W6zRW65iWQBcOIDaWOzg", "WPuXW7bEW4/dKCkOatFdMG", "WOawiSo3hhdcTCkzWQZcRW", "W6RdTmoJW7iibmkVW548oW", "ffzSpmoe", "z8kOW4pdVSkcnGtdKYO", "pK/dO8k0WP91", "W7fPuSkiWPGjW6ldMSoagW", "nCkzW6ddT0e", "WPBcLSomW7/dP0NdTY3dKK0", "rmotgaurDCoPW4a", "wSkIWPldKKTyWOZcL8kIW7C", "W6r0u8kwW4aoWRdcHSknuG", "WPddNSkLlSoOgfyIWPZdGG", "W61qW5DcWODDWPXbaa", "W6NcLYZcUmkyqmk9kSotWQ4", "DCk4omkoWRCgrmkDgtm", "W6tdU27cTejAWRqPemkc", "WPuJWOtdQmoZWOxdR8kwcfS", "WRtcTSkWWQbo", "WP4dWQywbSo+W4zrW7OZ", "WPz8W53dMG/dP8o3W5RcGwG", "F8kKW5tdVtBdQW", "b8odW6RdMdm", "FCoEm8kpWPxcO3SObSkn", "W4RcSSo8wJ5HWPFdG8ov", "WQzXuSkhW5fxW6tdJCogaq", "vmogpmkqk8kzWQtdHSoyW6a", "z1hcGmk7W7m/lSkDW55F", "z1ldGCk1W7qWlSkbW5Sy", "C8krW77dPf1PxJxdSmoB", "sSoTkCkcWQTiaCkzv3i", "W5GqWRWDx8kWWRe", "WQxdLMlcUmkfhCkRmCkDWRK", "EGJdOSo5WRdcMGZdK8oVdq", "WQu0WQCAW7tdQxy", "jmk9W4v6WRZdSSoDhCkqWQ4", "vCkmWQ7cJwtcKmohWPD4yW", "CCkQWPJdPZ7dOrWkdmo8", "fmo0W4ZdG1X6W5ZcRSoKW7y", "d0DYWO8", "w1BcT3ddRwK", "q8ofW6RdPw5/DqeMW6S", "WRu9WQXfWRddRMCuW4mB", "W4OfWQis", "e0DIoCovgeG+iZK", "yIHQA3ldN1nRtSki", "FmoaW7pcVCoi", "W6zlWO8xWOLpW5arhSoA", "pCo8WP86W7VdSSkkrSoDW74", "v8kIjmoz", "f8kkW7lcGqJdKWzXWQ51", "CCohdqPfBmo4W4O7W7e", "W6erWQmkW6RdP3moWPCK", "y8kMW4T6WQhdSSofgSkfWRS", "W4HrWOVdMW8", "cmksWQNdNa7cIcq5WQj1", "m8o4W5ZdNq", "EXFcT8oXW5eTW5xdIXxcOW", "W4aylSo4hG", "WQKFW5JcLSoUgmktW6rlWQe", "dCopW5BcUbypFaqNWRi", "amohWQpdIthcK8ohWPu5Ba", "WQiPWQLzW7BdONS", "fvzYWOXHW6ZcP8oEEqm", "pmklW6pcVXuMuIxcVmoF", "WRdcTwJcU0XoW61Y", "WODTWQ0fW5ZcHmoQvhZcHa", "bSkwcG", "WR3dQmoCWQpdIhuJWQJdGSkw", "W4CWWRHbWOldGSkReJddIa", "nmovW5iEW7XMW6VcIadcPq", "W7BcQCosm8oPgJaUWOZdNW", "WOpcNw3dVIxdJ8kYiKOQ", "WOeBWQGvdSo+WPq", "b8kmvSoaW6ajt1rnW6K", "WRNdRCkfmWZcReJcKmk0WQa", "xCkHk8kuWRybq8kFet8", "p8k1W5GEW71RWOVcIahcPq", "W6TTW7jaWRhcV3fnWOnA", "W4L4x8khW4DaWRC", "uSkoWRJcUtmVjafZWQC", "WRqyWOZdMCkJwSoCWQHgW74", "W6u8W7DdW4/dOmkHeYhdNq", "WRpdUCoAWQddMZblWRFdGSkl", "WPv6W7fnWO7dLSo6", "vSoCdmkgWRDue0fCWRK", "CCkLWPJdVcpdPa1sdW", "f8kfA8oDFmoAW6RcGmolWQu", "Emk0W5NdQMVcQGPxhCo7", "q8oRW6WBntZcNbX1kq", "WQjPx8kjW5edWRRdNmombG", "f8kqWOxdL0fbdfz0WRy", "W7xdQSoyWQhcLhi", "xmkKW7ZdQW", "ycPYBNBdNu5IvSog", "WOWeWQ8BhCk2WO5BW7i3", "u8ofW5JcRryEBGGVW6G", "W77dTmoCWRtdMMHbWRhdGSks", "CCkUW5ddOspdPaPcw8kR", "WRGpWQyDvCoLWRCgmee", "uCk9l8kj", "vmk+jCkj", "W591W7PeWO7dGCk3xwpdIW", "WRDuW4NcM8oIcmorW6OhWQW", "krxdGCk7WQzTkSkjW4ex", "iNm5lYhcN0b5fCoi", "W6VdTCoUW70ebCkPW588oW", "pCkYW4xdVd7cQbfod8oH", "W7nDW5JcVCoIdSkz", "W7nfW73dR8kyWOhdUSocyJ0", "u8koEmogDmoCW7RcLCoyW70", "BHrcsmk4sSorWQdcS20", "nemoW6fZWR9vW5iIha", "W7vrW4ddNSkJdSkfW7GdW78", "lmk5W4OqW6L/W6FcMrBcTW", "ASobW7VcSmobWRJdKa", "yWrCWRblW6WiW5X9qq", "aCkbr1CvFCoPW5f6W7K", "q8koWQhdKuFcMcvXWRi", "t8otcCkeWR5gfeaxWRO", "CSk5W5ddVwRcOJjccmo8", "W7X8b8oeW4NdJmo1DWLN", "ESkSW55HW6JcUCoBbmkiW7y", "WRPBW4tcMmoThCkzWQuvWRy", "CexcHmkMWQeZl8kCW4eq", "bSkvsLXrCmkUWPDSWQW", "trZcRv7dMK3cQYNcVd8", "qSoypmkpWONcOxuO", "i18lW7TZWQXqWPWU", "i1WoWQ8NWQHqWPC+mq", "gCowW7VdVf/dGwm0W7aW", "tSkYW7ijpM7dJbf0mG", "bL9QWOyQWQ7dL8kvjIm", "mMK+mchcJXmWgCok", "WR3cTcNcMbeeWQfGt8od", "WR7dSCotWRhdHJWfWQa", "reHViCozteqTis8", "emkXWRviDY3dMvmWDa", "W6FdNMtcTmkBySkNkq", "b8kBk8kdjCkc", "W5O9W7byWP/dM8kQbWFdNa", "fCkgwvCmCSoTW4WUWR8", "W6tdRMJcQvaqWRTJdSko", "WRNcQCk5WRzzqmoQ", "WOKfW6ThWOVdH8kVxgVdHq", "WRuEWR3cPmoDW4ddUSocltO", "yWhcOSoOW4CNWOhcHKFdQW", "WQBdSmkmoa", "hSodW6ddMt3cMSkmW58", "W4ldJCovW7hcPvJdVxBcNeu", "t8o+W7mzmW", "W6FdHgtcSmkcrCk7C8kdWR8", "dmkhDmoeb8oFW6tcGSoaWQu", "WRqZcCouWPvlWQxcLSkEmq", "FCoyWQZdQ1W0scNcSCom", "q8oEWP7cQWG", "AHSJwCkdWQxdLJCCca", "WQv3W6dcRxZcNrv2W7eL", "W5hdUSoVchzZW5G", "xSkoW6dcNtNcHdP1WQH7", "DqBcOCksW4aKWPxcM0xdQa", "W7ZdVmoqWQ7dHW", "CCobW5pcSWnQbgNcVCkw", "t8oFeq", "WR7cRINdQHuhWQDIsSoA", "tSkBWQC", "WPFcT8oVste", "WOayWPlcL1tcVmozW4lcKMq", "W7WfsmkFWP/dNmoRpvCX", "fa7dPYlcPJhdL1BdIxS", "xSozeCkeWQbc", "gSoEW6RdIcRcLSoxW5WODq", "amohlCkbWPNcVxKYySkl", "eCokWQlcRGn8CgRcVCkA", "BCofWQZdQmklWP7dLLao", "aSkVWQDiBZZdNKCMzG", "WQ8QW7XzWR/cRdjaWPDi", "jwjSyddcIfLJvG", "W7jrW4lcNq", "mmkfWOddQmkQALJcLh7cHa", "W7tdSmoGW6uoa8kWW4i5nq", "rSo+W7mBDNJcHqbIkq", "mXxdKmkUW7yPyCokWOS", "hSktWP/dQXerfev5WQ8", "zxVdLmo0wCoilc8", "mW/dR8oYWQZcIGZcM8kXea", "W6aFaSoaW57dJG", "WPHSWQSFW57cHSkDoaddRwXe", "WR0AW41bW40j", "W4G7W7DnWP3cKSkTdJtdNa", "yfVdOSkXWQ/cIXNdGSk3fW", "W504W7u", "WP7dOCkmnGJcOqtcHSkWWRO", "jvvSuCkEWQ7dLcLecG", "W6tdU27cVKihW7aLdSkg", "rXyGzCkCgW13D3a", "WPbBW64cwSkHWR4op0a", "sLZcTgVdVMlcNG", "xedcV20", "c8kxW6xdOvOHtW", "q8oQW6SoFclcVbPTlW", "W4ddR8ocusX8W4NcKCoAWPq", "ArRcPSkUWPtdJKdcMmo3jW", "i8kcWR3cO8otWPRcJKadFW", "d8oHE8otW6SouSkOqwu", "C8ktW7xdTLC2xdpdTSoo", "sCoBcq", "ESogWQZdSuqJhsVdUmok", "h8kzASkTW4ZdVJrXh8oo", "W7zVWRldUwdcMX0", "ACoFW73cSmorWOBcJunviW", "W4WhWRiasSo4WOPtW6uH", "W49zWOBcKW", "p8oHWOtdSmoDBZJcK3dcGG", "w3hdG8oKrSoA", "n1BdTCk0WP0", "vmo+W6S", "kCoTWPhdVSolEftcHN7cLa", "kK7dR8oWW6ddKaVdHSkJcG", "W4Cvm8o6aghcTCkhWRy", "jqFdGCkRWQzHDSoyWPvg", "lSoOWO3cUM7cSvuxuSkL", "g8kqWOldUq", "A8kPWOD5WRRcSmowhCkp", "WQBdMNlcVSkAhCkJn8kbWQq", "W57dGSkDW7/cQ17dOstcGaK", "W5hdUSoQbxyVW5ldMmkpWP8", "dSkehmoFW4NdPIH3bSoD", "W4u0W6PCWRZdM8kJdG3dHW", "ot/dHmo1sSoDoIvPbW", "lanlbmoTf8oyWR3cQdK", "WP7cMmo4zSk+sgm9W5pcNW", "W78wW5DdW5rmWPPesSkk", "aSkNWQDlBZldMLm5zG", "W7WqrSkjWOJdKmo6jeuP", "W6/dT8opW6FdMJqhWRhcG8kq", "iMO7pYe", "WRG6tCkhW4yjW6ddL8oFfG", "B1RcK8kMWQeKkSkeW5OE", "wCoblmkhk8kcW6FdGCknW6S", "pGfWa8kbWRNcLhTQqW", "WQldQNpcQLChW7yJgCku", "yhNdG8oGbSozpt8QcG", "lHxcImo/WRT2mSkCW5Gt", "kSo9WOy5W6JdR8kExmkYW7m", "pSoaW4BcTaCFFbq7W7y", "tSoiWRFcQHODFbq7W7y", "W7D4wCkpW4fwWRtdMSoihG", "w1jHn8oCtXn6nd4", "WPFcTmkUnhaHWPVdHmkaWP4", "WP7cNmoLy8kTwgq9W4dcGG", "WRzqdmoqWPvlWQtcLSkyrG", "W6PNWQGgW5RcKSo1vMRcMa", "sLZcQMy", "BvCdgSoXr8kfWQ3cQw8", "FvCtfSoGr8klW6xdUfG", "W5fkz8k7vtldSmovW7NdTG", "BCoaW5ZcSWTQcM7cVCkD", "W63dTmkaoGpcUqVcK8o8WRy", "W6exemoiW4tcMCk+zq1J", "Av3dP8oOWRNdKKNcLSoSfa", "phBdLSkqWRbiW7JdQZBcHW", "uxSQWRuMWRdcPCkanei", "nxtdUCowsCoNcG", "cmkJWONcHevpWOxcJSkLWQK", "vCoBkSkEjCka", "oerSnmoEqq", "W7tdRSkdW6FcIwKcWQZdLCoF", "WRdcTxJcSfuu", "W7ihvCkFWPhdG8oImvu3", "lmkPW4yaW6LUW7/cLqFcVa", "WResWQNcRCokW43dTmotm3m", "WOGZWQ8wW63cRfOW", "WRjRWR7dV2lcKbr1WPKH", "CCkZWPxdRdVdPaPuqCkY", "W6FdH3/cOSkchCkQmCkxWRq", "WR/cTcNdUreBWRP/pSoC", "WQOsWQSFvmkZWR9aBW", "WOZdT8oKWO0lzCkSW4DwmG", "W49zn8oPhhhcTq", "W47dJmkvWQRdVWZcSx7cKKy", "y8ooWO/cJ0tdLw80W7qW", "pSkxW73cRuDRdxldTCka", "W6SMWRhdQ3xcJbzUWR0P", "E8k8W5BdPW", "cmoOWPtcLLSmW4NdJ8o2W6y", "kuOesSkJcmoDWRZcQZq", "hmkxWOhcGrffWOlcJSk4W7O", "ngSZnsG", "t8oBf8kEWRm", "WOqwWR7cQCowWOhdUmkwhNq", "omo0W7ddRmohALtcLN7cHa", "mvXQWOb/W6ZcLG", "WRyOCCoxWOzuWQhcJCkbsG", "W71hWOmwWPLrW4qvhSor", "W6H1W7PDWP3dL8oKbIVdMW", "BuyrfSoMjSkmW6xdTtK", "WOWyWRChaW", "kCoTWPhdVSolzaddGN7dLW", "B8kHWOPQWQtcVSobg8ozW6K", "WQv3W6dcRwVcKbzKWQGO", "EmoWWP5CWQXIW6xcIbBdUa", "WQBcLCoDma", "WOhdN8k9m8oOaYqLWPddGq", "WQe5WRy0W7ddOMyi", "WQeEW5fvW5W", "W5pdUhdcUe1b", "W4boW79af8o0W6PjAbm", "f8kqWPJdRujomuu2W7q", "iuddPCoPWQ8", "W7JdTvRcSfTpW7a", "lSoZWO3dSCkBoqddJMdcLa", "ymo4WOLvWQeWWQVdNvpdUq", "tmkyWQ7cNgVdMSkFW5mBmq", "n0ddTG", "hmkDWPFdQ0vJnvDV", "WOhdG8kPlmoVh1SHWOldNa", "nfpdOSk6W5yXW5ddJKRdOq", "F28MosNcSXCRh8oh", "BmoyWQxcRaPKd23cV8kE", "A8k7WQhcTX51d3pcOmkE", "FehdHSkLWQzXESoiWOKt", "W4SvnCo8fd/cTmkCWRBdQq", "WRGtW4PoWPKhWOfjw8oe", "WR9yWOnsW4arWO0ygCkx", "W7DxW4dcLCoMgCkiW6ejWQW", "EWddQCoSWQJcLHFdMmo8", "WR3cUmkDW6FcIxvgW6xcG8oF", "nuJdPmk0W67dJuNcMSoIvG", "kCkxW4pdTKaTuZO", "W7JcQmorEfZdTLpdJmoJW60", "EvtdOSkJWOn0W5FdNJtcQq", "CaPvW6XUWQGzWPSTtG", "FSoOqCkFWPBdQH3cI8oOW7i", "umkYWOVdLvS", "W4ywWRmvh8oOWOnaW6u", "WPjLWQNdQY/cKHTMWR0H", "W77dSmoyWQtdGJac", "WRLiW4xcLCoQeSkDW6ytWRy", "gqVdQcRcQJxdN0BdHf8", "h8kgdmkdWQzsdK0CWRC", "W67dH2lcVSksrCkJpmksWQm", "WPC5W6uDW4OvWODve8km", "WQu0WQmlW57dUa", "WRTuW43cM8oMfSocWQHgW6i", "WQ/cTSkZWRC", "WOdcU8oI", "x8kUWPlcMWGcW6pdPq", "iLVdSSoSW5zHW5JdJHpcRW", "WPFcQSo+awWQ", "mHRdVSkYWP5/WPtdHbJcSG", "fe9TjCoCt24NmIG", "BvGPu8ksWQRdKsPzdq", "qf3cSZJcU3JcKXVcKuW", "wmormmkCkmkiWQ/dGmofWQ4", "FCodlmkj", "k18LDCkDWQddGdy", "WOxcRSo8dwWP", "WP/cRSoIas8+WPBdNCkcW4O", "EW/cU8oGW4vqWO/cHKhdPG", "fSkZWRqYBdldMtiWAG", "WOaqW4xdLH7dTq", "W7HcW7RdPSkkW5FdJmkuysy", "c1jSWPaQWQ7cGmotBbe", "n8oDW73cP8oqW4ddJ0jena", "WQiEW41hW5DbWOvetCkk", "dCoJE8oEW7Cfv8ozqxi", "xmopf8kFWRnjgrq", "WQePWQ3dQ3ZcHG1UWQ4P", "BvRcGSoO", "W74CrSklW7ZcKCk0yX5N", "WObBW6Dwjmo0WOTDW6rY", "cSkyACodASoyW77dVSojWQu", "E1dcJmo0W7a0gCkeW5qm", "nbDoW4u1W74iW4abrW", "ECoWWOH9WQhcSSoxsSoA", "WPdcG8omW7BdTXVdHZ3dKHG", "bfT2WO9ZW7VcGCoC", "hmo0BCoEW5pdUIjMf8oy", "vSo6W78o", "tmokcCkeWQi", "zmk1WO/cLHbhW5xdGmk6WRS", "DCk4W5JdRtBdQrajxmox", "WODTW5OCW4hcISoKvgtcNq", "fCkAfHSrDCoYW5D6W6K", "W6LYxSkhW4etW7JdLG", "kLZcJ8oRW7mLlmkbW5eA", "FSkqW6tdR15PvdpdP8oa", "W7hdVCkaW6ddIYasWRhdJmkr", "WRCqW5flWPqtWO1cv8kq", "xSokfCkiWRHd", "W77cPmorEfJdUfldMmoGW6y", "FHjyWQq/W7apW4afqG", "a8oNs0DxpmkTWPLQWRm", "cSo7W4/cLGXAW5C", "W7HGWRZdVM7cNG9XWRmJ", "WORcJCovW7lcPG", "W5rrWPhcL1ddQCkuWP/dNxO", "hSkxWOldVuq", "b8oQsfPflCkOW7vRWQ8", "WQilWOhdJ8kTt8ofWRPuW7a", "uCkBWR3cUY8TiXvLWRm", "W6fIWOevW7ddV3DCWPGw", "Amo8C8kVW7qjmSoArHO", "DCoVtSoDW4tcPetdISo9WRC", "W4fAWOtcJG", "gWhdUJ/cU2ddH1VdMKa", "zX7cVSkYW6JdN0NcGSoSvG", "WRjuWQ/dPx/cKaH1WQu", "wGfKpmodsuiZlIG", "W4eBWQ4xaq", "WQuwW5DF", "WPNcH8ov", "W6tdQhNcVW", "cCodn8klWPZcRdCIr8kA", "WQCgWQBcU8oDWPm", "nfVcUSkZWRtdJuBcISk3ca", "WPlcU8o6bs8+WPBdNCkcW4O", "jmkkW6hcOmofWPNdLuqxBW", "vCkPW4dcMGrEWOdcJSk4W6y", "W6/dGJZdVMJdICo5mfzP", "WQFdNN3cSmkAemo5FSkvWQi", "W7NdSColW6FdIJKhWRBdKmoc", "bmosW7VdNfvDxeG9W7i", "krxdGCk7WQzXESoiWPvd", "iLOVfSoc", "sCoskW", "A8o8WP4", "WQLdxmkhWP3cGSk/AujR", "a8oQquDulSorWOHUWRm", "W57dGSkDW7FcO0RcPcVdJaS", "F8k7W4hdQIxdHb1d", "BxZdLSo1tSkoBZGOaG", "gSkRWO/cKWffWOFcImo7WRi", "c8oAW6ZcNuRdJwP7WRbK", "WRGnqCohW4FcNCk1DLrV", "jrznf8oG", "FCkXW5tdVctcUf5rhCo5", "kL3cLCo2W6P8lSkAW5qr", "ESkzW7ZdO18LsxRcRW", "oxi/ma", "wSoAkmkbk8kiWR/dMCknW70", "nMmMftdcIqO", "vCkQWOhdN1C", "WR3cUmkbW6JdJtWqW7VcG8oF", "WQxdMhpcSmkcwCkNma", "ESo8WPHzWQ82WQZdMexdOG", "emkQWQDcDsVdGeuVCG", "WRJcNxldSMVdMSkxlebV", "tCkmWRBcGw/dMSkBW4fGlG", "crpdUJ/cUYZdIKVdIbG", "mCoStmkFWPpcKLldGSkLWQ0", "vLdcL8o+W6GLkq", "WOrujmo3fghcO8oiW6ldOq", "oerSnmoEqq9MmJK", "iZJdGmoOt8oDj2TUxG", "smofmmkdWR7cOhS0zCkb", "W7f8rCk0W5qoW7i", "BaxcOCo9W4K/WOdcNuddSG", "W7VdT8oEWRldMG", "owCHnsJcJqL+smky", "Cmo9ta", "jrznf8k0cSojWQJcTa", "W5HyWR1bfCoWW6jvFb8", "WQu5W7/dVMdcGrTTWQWO", "ECoYWP9eWQGYWQBcLatcRa", "BvdcJSoRW7q+pSkDW55y", "z3boWRy7W7fjWPm9gW", "WRGoW6tdJ8ocsmoqWRPgW7i", "qmkjy8obWPhcQxGJsSoq", "W7XmW5JcICoWqmotWQCfWQ0", "WR1uaSoQW4tcKCkPDW", "ysHLBWJdN0LRqCki", "ceG+ACkFtKqWFMa", "smohzCorimknWR7dK8ovW7W", "tmkgeGqbEq", "WQBcMxlcTYVdMSk8o1aN", "E1RdQSkI", "W6HQW7DvWQ7cUdXzWOu4", "tSoFW67dPwbZCe9+W6W", "WQmAW45jW48e", "n8oXW4lcQmkmEaldJZVdGW", "gapdTcZcRIZdM1VdMKe", "rCkYWOxcGbX/WOZcG8kZWRK", "WOlcT8opzL7dTfBcUCoGW6y", "W7OxWQZcVmozW43dPCocpM4", "n8opW7FcUmonWO/dHvTzFa", "fSo9W4ddKa", "eapdOIJcTZZdHf/dH0e", "WQNcTSoRW6jFx8o7WPj+mG", "t1BcV3S", "pmkvW7e", "W5JdRSk3utj7W4NcG8ohWPe", "DHVcQSkKWP/dJKZcMSo6sG", "wCkDWQ3cKbRcNZLWWRv7", "W64EWQKFumk7", "xmkDWPpdULDDCuz6WQG", "W6pdQhJcVffOW60", "W7ZdU8ojWQ7dNZa", "W5dcHSoaW6FcQXhdOchdKWe", "q8kxWRpdOg9UzfvZW6q", "jL4Jv8kd", "W48wW7TBhSoZW5GoW6i2", "WPFcRSo6fG", "ogJcICorwCogkYmItW", "WOL1WRKiW4/cKSo4csRdMq", "WOhdN8k/mCoSysyJWP7dHG", "WRuqWQBcR8okWO/dO8oyoYa", "A8k5W48", "rmkEWQlcNXxdHCkCW49Tla", "WPifWRO", "of4DW7H0W6qwW50OaW", "W71iWO0tWObbW58lc8oA", "W7xdK3NcP8owwCkSy8ouWQq", "E8kVW4hdTG", "rhdcSNRdUgFcHr7cGa", "iSo3WOveWQa5WQ7dKLFdUa", "pSo8qmkFWOdcOXldISo3W7K", "oCknWRldTmkeW43cNbHuoa", "vSoaW6hdJdZcMCobWPm9yG", "lSoTW5lcSSkkkWFcM3NdGa", "eCoyamkbWR9fhWewW7y", "jCojW73dJdBcLCoaW4ezBG", "rSo+W7mBDMZcHr9OlG", "WRvEfSogW5VcHa", "W7KaWRNcQComWPxdPCkwCx4", "lSoWWP5vWQrYWRFdLKxdVW", "x1lcTNBdV23cNG7dK1e", "W7VcGJ3dPCoybSo+CmoaW6a", "Emk0W5NdQG", "A3dcM0BdMK3cQY/dJqG", "WQxcMMdcO8kFu8kT", "larcvmoRrW", "fmkUWOtdJ0jdWPZcM8kMWQ8", "W6CDimoYaxpcVa", "W50WW7DCW4ldHCk2attcHa", "WQ/dMhpcPmkf", "W4HhWRODvSkNWRulFeq", "rr8/W4fzW6BcICoDALa", "umkBxG8mB8oTW5u7W6y", "BudcISo5W6C/nmknW4Dy", "W7tdRmoyWQRdTIypWR/dHG", "pSoVWOxdH2BcTc8wrmoy", "pSkqW7xdOvKHwq", "vSo+W6OBDI7dI00HzG", "nblcKSoVW6CLl8kBWPjb", "W7lcQ8kuofFdPeRcMmk4W6O", "o8o4WOBdPSotidVdIHhdMJ8", "WPnDW6KywSkZWRSumLu", "WQncWOrsW5avWOrae8kt", "CIBcL8kHc8kj", "W4mdWRmg", "WQVcQCkinWBcTG", "mCk6bCoAW4tdSb3cMSkKW7K", "y33dG8oer8omiJmNgW", "W4CBja", "fenZWOPJ", "j8kPW4nUWQhcQ8otba", "w8k1WOtcLXCwW4NdNSkMWQi", "WQCyWP0AWPydWP1rsSkm", "tSo+W6at", "WQZcQSkrW7BcNHrtW6NcLSoF", "BHjhxmoJaCkoW7lcRxG", "W614t8ogW4WBW7NdN8knmW", "iKldP8o1WRa", "FvKwcmoLumkiW7ddSJu", "e0uhW7XOWRydW5iDfG", "c1BdPmkIWOz+W4VdJLFcOG", "q8khWQ/dU2z8ornMWQC", "CbLhWRaNW68iW5XWqG", "W6JcKghdVMS", "WRNdKN4", "hqNcUxFdVM/cGq7cKa", "W7pcPSkkoWFcRadcMSkLW7K", "W6q0W7HoW48", "CMq9jgNcMGGSfCom", "kmoZWOBcTNFcSLuwrCk7", "rmkxWQdcTW", "W6L0vCkhW5SpW6pdMCoaeW", "wSk8W4hdRNFdTHXdhCo7", "WPyjWRpdHW3cMmkkW5lcMxW", "DqFcO8oXW4aLWPFcMedcHq", "eCkorCoFW7GwwLXnW7u", "WO3dImo1y8kTtdP+W5hcNq", "W7BdUCooWQ4", "W7tdGcpdOCoghCkGBCodW70", "W7fhWRldPhVcMHi7W7Wy", "i8o/W4ldPJpdSreDtSkH", "CHFdPCkXW6JdKuZcH8o6ra", "WODoWPTUWOTsWRicamoF", "Bce2ptdcJq43bSor", "ASkHW57cRCkokWa", "W7foWPekWOHuWQSudmon", "xWddJ8kJW5X2zmouWPOp", "W451W71bWP/dGmkReYhdMG", "ohiZma", "hmkDWPFdQ0usE1b0WQS", "WOZdGmoICSk4qYK", "W4q5W6XjW5ZdVmkUorZdQW", "hCkHl8kfWQrosCkjetW", "tCoyW7/dUMGZyuG/W64", "fSoodqyjmCo0W5CSW7a", "W6RdTx/cRfa", "E8oQWPhcUSowFZNcL2ZcMa", "CmoOtmkBWORdVvNdK8o/W6m", "W6u6W75bWOhcJSoRbc3dNW", "qSkUWOxcHuvfWOFcNmkZWQG", "WQqxWQZcVmoDW43dO8ofoMG", "W5Crp8oV", "W7fFWOmgWPLbW4GfhSoF", "WOrtWPFcK1/cOCoE", "xmkfWPNdTvramaLWWQ8", "lmoXWOdcR3FcPrOwuSkH", "W4yAmW", "ub8UW5y5WRZdHmkakL4", "WQJdK3tcKSkAuCk7lq", "WPtcV8oIsweHWPhdHCkkW4S", "dKHKmmoizuS", "WQuUFSoxWOfuWQxcICknqq", "AahdTI3cUZZdILVdMee", "emkxF8ooW53dQdPMbSoo", "t8koWQhcUZvsibv9WR8", "r8kBWR3cLwJdGmkcW5r2mW", "W4qWW6PBWO7dLCkH", "W4ayjSoObI/dT8krWQtdTG", "zwZdG8oZ", "umkZWOJdJ0CvW5hdISoZW7G", "W4arkCoVegddT8olWPBdTW", "jCk0emk5W5xdObpcJmk0WR4", "hSoXzCkdWQXkwSoluhi", "CSoVv8kiWOhcVKNdR8oRW68", "dSkwvmoDW7GusLThW6K", "yGzyWRbrW6WlWRP4sW", "DCkKW40aW6DUW6dcHWRcPa", "W6mKW63cQJ/dMuSHW61/", "WQe5WRy", "WPlcJCoaW7C", "lmkbWQpdPSoLW57cJaqqyq", "FSk5W4vNW7BdV8kssmoeW7C", "W6qWW7RcTdpcHrT1WRrT", "ASkPW5RdOwK", "W7BdTmoNW6SpbSoDW4OIjq", "CmkAW7hdRfWHtW", "WPXGWRuzW5BcNmoXqhxcNa", "sxNdLSoNcW", "W6b8xSko", "W5CvASoYg3tcV8oyWQRdTG", "A3ZdGSoQ", "WQGxW5JcNCk9rSotW7WuW7W", "dmkAymoezmoAW6tcGSobW4O", "WRKCWR/dQmoWWRdcSCkwl3y", "i1OfW6fZ", "W6RdPCoIW70me8kQW4S8nW", "WP4dWQnk", "W6tdTwVdTebcW7u4bSkj", "uCk0WPxcNHenW5xdGmkLWQO", "WQpcPmonWQBdNt1gWQhcNSoy", "krjxw8k4c8kuWRNcSNy", "krzxw8o8cCowWRVcRxG", "q8o7W6m5n33cNWa", "CmkaW6xcVCoaWORdHumDmW", "AehcLCoP", "W7xdUCopWQddIhGwWQZdJ8kw", "WOtcK2hdS2ddIG", "CbHDWQO5W6jjWPm9gW", "vmogmq", "W71CWPhdNSoOe8koW6elW68", "WOXcW7ryu8k1W55+WQ98", "oCozW7FcUmofWOxcGfPvpa", "W4NdJSkqWQhcHGtcQN3cMuy", "rSkIWQa3AI7dGemVDa", "vSkoWQ/cVI8RkxT0WQC", "pL45qG", "xSkuWQJdKKRcNZnWWQ8W", "WP3cL3xdPwtdGmo5juT+", "WRaDfSoBW4hcK8k/", "W4u8W7eiWONdM8kObwpcIq", "yHNcPSoOW50GWORcHe7dTW", "Be3cHmo4", "of4SwCkhWQtdScLawq", "ESk4W5pcS8kclfpcHJFdKa", "W7RdTmoVW6KfCSkPW587nq", "W4eHW7reW4ldGSk2dYddNa", "W5K5W7HrW5xdKmkOdYFdGG", "zXJdO8kJW48TWPBdNHxcQq", "uSkOc8onW5FdVaZcJmk2WRK", "tSohW6VdIq/cLsiZW68U", "W6rzW57cNmoTdSkp", "bH5VWPf4W63cKCozp04", "p1aDbSo+a8oqWR/dVIu", "W40tl8o6bNVcVmkuWQVcPq", "WQxcNM/dUYJdJCk4mu0T", "W60qvmkhWPhdKmoOnfKY", "WQNcKM7dSNFcJSo3n0fY", "lmoPWOzrWQO6WQ/dLLRdRW", "W4a7W6LDWPVcKSk3ccVdNG", "W7xdQNNdPareW6eHh8ki", "aSkaF8oxW5pdVY1Qemoa", "WQahWQlcPSkg", "W4u8W6PCW4/dKmkXdcJdGa", "o8o8W7NdRmoBdKxcKr3cHG", "WQ4orSkjWOJdKmo6jevY", "W4ahna", "vSoiW6FdNJpcM8oaWPeQBW", "ESk4W5LH", "W7JdOmojWQldHZe", "WOnuz8k7vtldRmkrWQZdTa", "pmkmW7JcVa40xcNdUCkp", "Aq7dLmoJW4i/WOdcK0ddTG", "WRpcPmk4", "Ca/cSCkYW6NdJftcJ8oSxa", "imkIcCoiW5xcNaZcJmk2WR8", "xmovc8kzWRnjdG", "gmoodCkiWRDdvWKAWQ8", "cmkbcGmkA8kWW5eZW7S", "lSkoW7FcVa43ttZdV8kr", "f0RdTCo9WRlcNHBcLSkdcG", "kKDHm8kqfK94", "WRBcQSk1WQrqymoQWPX+Da", "W5SdWQytvCkIWR9kiLm", "WRSxWQJcU8ozWO3dPSoAoJO", "fCkgruqbDCoRWOD6WR8", "i0BdSmk8WR/cKXNdHCkXwq", "e0n4iq", "WP5yWQmDhmkLW4ysWRzY", "WPyqW4XbW5ueW5qkxmkw", "WQxdLNlcTmkA", "kmoZWOhcT2hcT0KrtCo2", "s8oRW6ixbhdcHr1Q", "n8o6W4/dHalcRCkfWPSSnW", "wSoxbmkeWRO", "yNFdHCoesSokjW", "odFdLSk/", "W6S9b8kvW5awW7ldM8ozfW", "pCo1WQrNWQSrWOi", "hSkUjSkgWRzpwComgdm", "aCo6W6mCAxRdM0HSjW", "rmkBWQJcMLtdJxy0W6aW", "rqtdLSk1WRnKESorWPTk", "W6apW5SgW4OoWOrmwSod", "oL4ZwSkeWQRdKIS", "W6ldRJhcTujiW7eGumko", "W7FcLZddSCowemoOFSotW7e", "mSkuW7/dSaHKsJxdUmoB", "W5BdQ8k7sJfIW47cH8ofWPC", "WPKpWQ0tt8kSWRuj", "BuSmxSk4eCkhW6NdOdK", "tCkgWR7cVJeOjbv/WRy", "W7rFamopWOhdJmo1zKC6", "dG3dPJddQ23cNGpdIK0", "ySo8WPGqWQaXWRFdJei", "ArSQWROPW68kW5j4qa", "WQuEW48jW78iWPTmvCok", "hCoycSkFWRjcceaCWRq", "aSoSW6GwmNJdJafMja", "W7SqbCofW4NcG8kPov5Y", "gmkAa8keWRPlr0PCWP0", "vCkmWRldMtRcM8okWPHMia", "uCoZW64EpKJcGXrMkG", "W4uBjmoUbG", "Emk0W5NdQGldTXu", "gCk9i8klWQXubCkfaca", "rL3cRJlcQJ7dIHNcNry", "amoPW5xdKLqEW4xdM8o4W68", "vmomW7pcSSke", "h8kzz8oDW5hdSvDXcmoB", "W6VdTCo4W7iih8kPW509jG", "w8k/ASojWQDthmogbJ0", "W4rzW4lcK8oIfmkBWRjg", "tCoNWRPDAZZdNfmZCG", "WPRdN8kgW57dUa/cQNdcMvW", "w8kzW43cMNtdGmkaW5r4mG", "WPjcd8kTocpdQmozW73dLa", "BfKFW68NWR1vWPm6aa", "iWnGvCk9cmolW67dOh0", "WPbDW6Wqvmk3WR4ciX0", "WRVdKMdcVCkxu8kT", "emk/WRvuAI/dJeuVCG", "W4rrWPhcL07cP8ouWO/dGc8", "W7ZcSCkIzeFdQfldGmoHW6C", "uGyXy8kEhq13DNi", "W5WMWR4iWOVdK8kWawNdMG", "c8ogWQJdLbZdJtv4WQfJ", "W5xcTSoHbwyJWPddG8koW4a", "WRL0WRJdPa", "WRKYsCkcWOTAWRFcMmkntG", "pfVdUmkZWPb9W6RdNHJcTa", "ffzTW4q3W7VcI8oEFu0", "z3FdGSoVx8oBnHuMcW", "ySk0WPPcWQy7WRldKG", "WRLDb8oaW4q", "cmoOWPtcKaPiWPddKq", "jmk/W49QWQ3cSCogrCkiWQO", "eL9ZW45XW6ZcHCogBqi", "W7ZdTmkaW6a", "W6fyWOnoW5WiWO9nsSoE", "WQFdQmkipaJcTHxcHSk+WRa", "kmoyW7hdT0ySwdpdPCog", "vSoTlmkoWQLqwComeYC", "WQeEW5fdW5CvWPS", "WRLCa8okW5ZcLCk+", "W6GFWQtdTG", "q8koW7hcN1JdMxq0WQz5", "q8oRW64updhcGGzSAW", "e0PZWOyQWQ7cJmoxCrC", "WQ3cNwpdVW", "CKWCW6rRW7WzWPqMaq", "lSoTWOdcT2lcVe0ltmk7", "DahcV8kOW7ZdJKVcMmoZvG", "W4/dLmkpWQxdU3dcSgBcLuy", "FH8ZWQ85W6iwWOiObW", "W7fYtW", "W5rFWPhcL1ldUmozWO7dHYu", "FCo1v8oaW4FcTLVdNmkJW6G", "tCotW4ZcUbq", "WQO9WRekWQlcQ2qbW5SD", "w8oFW6BdGI/dMCogWOG8zq", "W6DmW57cKmoThCkvW64F", "WRhcQCkoWO/cNanxW7tdQ8oo", "WRbzxmopW4hcGSkPCa", "jqpdJ8kUW4DJDmoDWPLn", "nuXuWQ8", "WPxcR8o8fMCGWOVdPmkyW4C", "uSo+W6LezZpcJu09Aq", "W7NdRNpdOLrdW7a4fCox", "q8oVW7CFnxG", "W7RdUCkYWQXke8o9WP9TzG", "W6DlWPhdNSoNfCklW6ykWQ0", "W6mBWQyzc8oVW5Ws", "ff92WODYW5ZcLa", "W7XzW4ldLmkX", "pSoKWPVcVwhcQu0js8kG", "W5OqWQ8gu8o7W6ziiLe", "cLzXWPy6W73cI8oFEH8", "mSo2sSkBWOddVu7dJ8oZW7K", "dSkVWQDcDY7dNtSWCa", "W6/dVColWQldMYyd", "gmonW6NdIh3dHSoSW4rQnq", "W7Xgb8ofW53cLCoNiWLV", "W4S7W7HbWOm", "AhhdN8oGx8keoIuShq", "fufH", "jeuLW6DWWRTlWReOaa", "zaT2gSoaW7tcNxabga", "emoof8otW7yhrKilWRK", "yuFcHmo9", "rXCYDCkbgW1+ygu", "tSoaEmkqkmknWRNdGCofWQ4", "kqpdJ8kTW4vIDmoAWPvj", "W7n8W7nmWRhcTurzWPLg", "W7HxW4/cKSk4cSkDW6WcWQS", "W77cHtZdPmoybmo5ASoeW74", "W6rfW7VdVmkjW4ZcPCkyAci", "WQvTWRddUMpcKdLGWQ45", "WPHTWRCrW5VcNSo1v2RcMW", "wXX7WOPHWRC", "W7y8W7hcVYhdHZyWW6XJ", "p8kThCocW5hdOq7cImk0WRS", "CszYh3ldGLnPt8kD", "W4XoW7TscCo0W7rvzGS", "WPeiWRpdHaZcNCkkW5pdO3u", "WOdcS8oReW", "ogm2", "imkPc8oiW5ddSaZcJSk2WR4", "emkUWQLpEY3dMvmWFW", "CvHxw8kZc8oCW7C", "bCoZW47dG1mmW5JdMmo4W6G", "W7uFWPlcVCoMdSkDW6ekW6i", "jL/dTSo5WQ7dK1BdHSkTfW", "W6RdNgtdTNhdJ8o0mfzP", "q8oeW7VdSg17layKW64", "W5lcISo9A8o5exyWW5JcGG", "FCkoW7NdP0uguIxcRmki", "W6DbW6hdVCkwW5JcR8kgAsi", "WPpcTCkPwIjUW5/cKColWOi", "a1nRACkFsbn6BYG", "WQhdVNxcQKbfW6eIcq", "WRuWWQSAW7O", "WQHmW4JdH8k5rSotW7WcW7W", "iK97b8oeW7hdGZ0gfa", "ymkIWPlcMWHnW4NcHmk3WQK", "DGhcT8kPW7ZdJK7cMSoZvq", "W40tWRiF", "WRawWP8jW5yrWPXmuCkn", "d8owW7ZdUJW5DuaNW6y", "WQ3cJIlcQq", "W6yVWRCDW77dPdiiW5yw", "W7HGWRZdVM7dMa9YWRK/", "wSoWBCkeWQrodCogfdS", "umo6W7CwoN/cIq", "CmoiW6xcLSolWPxcNraaCq", "uCkbWPNdQ0icpKT/WR8", "dSkxF8ooW53dQdPMgSkh", "EG3dPmo5WRdcLHRdK8kUdq", "W6vfW63dUCklW47cO8kcbt0", "WQhdLN7dVmofemkKnW", "d8oPW64EpNm", "g8k/WRzpDsJdMtaWCq", "W5NcI8kSjCk9tgnXWP3cHq", "hSoDW7ldTqVcNsnNW7W/", "uSo+W6aFigZcJrDLlW", "WRRdOCksia", "wCkSlCkgWQK", "W7JcTSkIWQrob8kZW4iUnq", "cL/cTx7dV2NcMa", "tvlcRN7cTNZcMalcLXq", "WQixW4Xr", "W6xdTg/cVffEW7aTcCki", "pSk1W5GqW7L/W7FcLqBcQW", "W7ZcQmotgfddTLtdJCo9W6W", "i8kQaSoAWOZcTvtdNCoWW74", "nexcRCoYWPD3W5/cKrhcQq", "WQldRh3cTuPoW7u/fa", "rSoslq", "iNddM8k8qSonAsuIbG", "WQFdQSkiia", "n8o7smkkW58", "BmoJWPxcR3FcPvKhqmoH", "uWG5yCo8gX5OCgO", "aWG/WPn2W63cGmoBDHC", "BSoAWQRcOHa", "vSokgbGw", "jCo8WPhdRmohytZcKhdcGq", "gv4mW6u", "EmoPW5aFW6yOWRddJHJdVa", "WP/cLSovW6e", "tCk9jSkoWRe", "vCoAW6/dGs3cKCktW4y8zq", "k8kuWP3dQXzHhGrpWRq", "W7tcMgNdOsxdJCk1iLD5", "W5Crymk7hhBdRCosWQBdRq", "AbNcR8oGW5eGWOdcHe/dTq", "WPhcLSoiW7xcO1FdPtVdIq", "WQ/cQSkrW77cH2DsWONcKSol", "W6RdImk+pmoLaMrMW5FdJG", "W71uW4K", "zmkIWPpcKWTnWOFdJ8k0WR8", "W4eBWQyhgCkMW4feW7C+", "Amk1WPZcQCkcpaddJMtcGa", "AmowWQxcOGzKdgRdH8kD", "nmoQW5lcQ8kzkHhdHsRcMq", "eSkRWRroBtddMv8WDa", "aSoIoSoz", "ECkxseTulSkZWO8mWQ4", "WPXeWO3dIgRcUSopWORdMwq", "WRDmW43cLmoHg8kuWQuwWQS", "WQ3dLMtcSmoBxSkNlmkEWQW", "WP0bWQaht8kKWRCgFbm", "DSkKbq", "WO3dKSkSp8oKjZ1uW7hcPa", "je8rW7W", "k2/cHmkXg8kej2v5xW", "WRRdPCkn", "uSodds8eAmo4", "sCorkmkFjCkpWQ8", "WRiZWQuEW7pdQq", "jCozW7dcU8oaWPtcNG", "gSoffGyiECoZW40PWRa", "bCojWRpcIIZcKCowWPv/lW", "W6JdVCo2W7qehCkOW4CGia", "uCk1W5RdKLrCWPhdJ8kLWRu", "wSouhq4xxSoK", "kSkUWPOKW7JdSCkcwCoxW7i", "W5JdR8k3rdb+W5pcGmozW6e", "sSo1r8kqWOhcS0NcMSozW7G", "ESkAW7/dUH8Rt3RcR8kt", "b8oJF8ohW7qosmoAsxW", "BSoJWONdQZ7dS1Leemo0", "W7tdTmouWQ/cItSpWQNdGSkw", "W7nDW57dL8oGfCkrWQCfWQ0", "W7DuW4xcMSoO", "WQZcNxtdTIJdNSkRkKDV", "W5RcGmo4Ba", "WR3cTItdTXuyW5H9t8ob", "W5O9W7byWP/dM8kQbW", "e8owcWqbACo2WOq", "x1lcTMRdVN8", "amoXzCkxWQridmovth0", "DCo7uCkBW4NcOftdLSoXW6i", "W6nFWPmgWOLnW5Gfd8oB", "W6GAWQdcR8kyWPpdPmovyJ0", "W5ZcISoJxCk3thP1WPFdJG", "WRRdKNtcUmkxemkSn8otWQy", "W4j1W51jWPVdK8oKntFdJa", "gSofW63dIh/dIG", "W5ZdGSoHCmkWtNi", "WRmrW4jpW5u", "EvtcK8o+W6GLkq", "WQ5vfSofW4NcK8k/", "iMa3lG", "jdJcL8kHc8kjCZOOdq", "o8kxW6ldH1mNvq", "jCo8WOxdSmosAJJcL2JcMG", "W6BcOCk/WRmCumoYWPj/zG", "W7/dTcFdV8ohcCoKBCotW7q", "e04+ACoeqHmslYG", "W4xdRmkIvJbGW43cHColWPm", "A8oeW6lcOmkkWORdJ1Hxpq", "wSkBWR3cUeKRubn/WRu", "WPHxWOTtsSoVWP9cW7nV", "wrm/W4m3WQNdHmksoeW", "W47dSCorWQBdGt4hWQVcG8kp", "W6GxWQtcVSkyWOpdUSoxlgK", "e8ofW6ddIq", "BmkYW4FcRXVdQHHdfCo7", "mSkvW7ldRv5PuZldPCog", "g8kAoSkwkmkfWQJdL8kuW6a", "W4vtWPhcN1hcU8oAWOFdNda", "WOC4WQyTW7ddJ3msW4m", "W5rrWPBdLMVcPSoEWPNcIwS", "WR3cLYlcT3BdMSkGl0e3", "WR9Cb8oAW5VdJCo9ybHY", "nSoeW6RdUYf5CeyYW6S", "c8oAW6ZcGuxcIt9IW74W", "fmoFW6FcGc/cHSopWPfIzG", "W67cL3tcSmkcuCoLn8kxW7a", "WRKYx8oyWOLvW6pdNmktuG", "W6NcLZddSCowemo0CCkxWQq", "FSo+xmoe", "zrFcT8oXW5eTW5VdNWpcSG", "W5ldKCkpWQddSWRcSN7cL18", "ymoycCkmWRHmxvndWQG", "jYyXmcxcNXrKuCol", "tCkkEmotzmomW6RcKSoyWQK", "dCkEWPldRv0tC1bZW7G", "g8kyWOdcUfvdpvDOW7S", "WQC/WRyqW6NdQq", "WP0bWRWvwSoOWQOvpKm", "W50GW6O", "aSo8W6SBkg/dKvrUnG", "WQ/cQSoRW7hdQMDuW6xcL8or", "WQuEW48gW6KeWOvhx8kA", "Emk4W5tcRmkscXhdIJVdLW", "CmozW7FcUCo7WP7dIu1v", "uCojW4FcTaCACHmSW6y", "W7jhd8onW4/cLCkUkrfN", "orHr", "Dr7cQmkSW6VdK0NcG8oSuq", "W4aJWQCuW4ddLmkReINcLW", "WRHFnCokW5RcN8k2Aa", "vmovcLzcFSoYW4f3W7K", "F8kPW53cRZpcUfTQtCkS", "zaL2gSogW6/cHxqbgW", "EmoSg8oAW4tdRfNdK8oUWQO", "umkigGqim8oWW5G5W60", "DCoyW7FdQCkdWONdHvfrja", "WOlcU8o2", "W7tdSmoCWQNdNcehWQJdGG", "W5vsW6bfcmoPW61jzXy", "fmkuWOxcMqrEWOJcGCkXW6y", "B8kDWRZdPSkrWOxcKqyEzG", "WRG6CmouWODwWQBcGmo7qa", "W7v8t8kvW5a", "W4uDkCo/", "W4zFWPhcMq", "Emk7W5q", "s8oYW6yDpJZcIXXUiq", "W7qxWQZcUSorW4ddVSoxlx0", "wmoFeq", "W6FdHxhcPCkthq", "pSo9WPxcR2VdRbDxcCoH", "aCoQW7qFkthcHrC", "dmkAASokzmovW6tcG8ooWQK", "WR/cQmk3WQXqe8oTWPzVDa", "W4LpWQXmg8k2WQ8dme8", "sSkuWQldMbJdJt96WRbL", "W6DmW43cI8kW", "WRmXdSkWWOrnW5BcISkbqa", "nSoIW5O3", "W7NdQxNcQWmeW7aTcCkm", "zSodfq4wFCo0", "yX9csCo8fmomWQS", "W7ddVCooWRtdIdid", "k8kKW5lcSCkfDqpdH3ZcIG", "WRrFW58gW5GnWOfcumod", "fSkFWOBdRui", "WRPpW4xcNCoKh8kiWQuoWQm", "nCkzW6ldPvnPtttdVCog", "v8otaCki", "qehcHmo2", "pmoaW4hcTG4FzbmSW7a", "W7ZcTmopyLZdUftdHSo/W6C", "xuhcS3i", "WOvTWRCFW5BcKSo1vMRcKa", "hmotc8klWRLvfWWmWRi", "WQGxW5JcNCk9", "WR8EW45d", "WOXfW7i4w8kIW4ydWQqe", "W7vmW5JcIW", "iSkNW5KGW6JcMSoagSklWRK", "WO9fDCk1rItdSmohW7BcRG", "C0iDW6vRW7nnWOaOhq", "WRfLWRhcTIdcHGPGWRjZ", "j8o4WOtdRCoEAKpcNNlcGa", "W6mPW6RdTSkeW4/dPSoxk3i", "jxqZpY8", "WQNcKcddS2ZdM8kPj0v+", "WPWFWPhcL1ZcUCoEW5u", "WPasWROl", "ArNcVSkWW63dI1BcHCo3jW", "WRqiWOZdICkVsSoCWR9kW7a", "if8AW6a", "WRbFbCoiW5ZcMCk1AG", "W6tdIc7cOddcGSoOCqG+", "W4ddTx3cVqnNW7S+ga", "W7ldSCknDaRcTatcH8kIW6K", "pKOesSkKbCovWQdcOZq", "imoyW6hdVw52kWeFWQa", "W5pdKCkpWQxdUqVcTxZcLKy", "WPT9W73dVMRcJq4", "pSo9WPxcR3FcPvKhqmo8", "e8kYWPpcLXClW5FcUSkLWR8", "W4CWW6SiWOBdNmk0fta", "aKTLo8oe", "WPbADCk7rYldVSocW6xcSW", "WRZdMYddVMhcK8o+n0vN", "gmowhaupACo8W5v9WQe", "oq5txW", "crpdUJ/cUYZdIKVdLfe", "bCoXW47dH1WmW57dGCoJW6i", "WPPzW7ffsSkQW5uCWQ9J", "reDWWO51W6BcImkFEXW", "W6fOvSoCW5ysW7ldM8ogfW", "WQ7cPmk9", "ymkJW4hcQ8kF", "wmoFeCkOWRPcfWGrWQ8", "cv7cV3hdSNJdIG", "W6ZcK8oNW71/aCk+W4i1oW", "qmodvaKkEmoKWP5K", "WOVcPuNdNJJcJmo2Fq", "W7WbxSkfWPNdICkmmZeW", "CwGZmshdKuuOa8of", "C1WgW71KWRzCWObKaW", "WQNcKNtcRhxdJ8k9j01K", "hSouW7tcJ0BdN2DyW7eI", "W6JdQmorWQJdIdfbW6xdJCkE", "v8oho8kbiCkjWQtcKSoyW7K", "WQz0WRJdVI3dLr5GWQGS", "y8ojdaGnECoVWOn6", "x8kvWQVdMGBcIbv4WQfJ", "lLO1v8keWRldLJDs", "vCoTW64opL/cJqf1", "a8kaEmoeASoDW6BcH8owWR4", "W4uBm8o0", "WQVcPcdcUX1MW7SRfmkd", "wSkIWQS", "bSkrWQNdHsZcMCocW4WOyq", "CtzYBgJdNuDTwSkv", "f8k3WONcNGXeWOJcGCo7W6S", "zCk4W5ZdVSkgprNdHdVdMa", "W4G2W7jpWP3dNCkXdIdcKW", "W4ddNSodW6BcVKJdQYBcGaK", "FH3cPSkQW7ldIedcLSoZxq", "f07dQmo2WR3cKr/cJmoI", "WPqoWRSgwSkOWRTaCvC", "W4HhWQCbuSoLWQOciKy", "gCoZhSkoWRfqaColidS", "EtqAfmoGxSkvW7JdSZC", "BSkSW55OW6xcR8oaaCkhWQ4", "kuBcJSo3W681ESkAW5iD", "hdn+BxBcJ1D0rSkk", "pL4QW6DRWRflW5vPfW", "WOmbWQihxSo4W70dnee", "tSowW6pdOgzWkWeWW6i", "W48Bjmo6axVcV8kB", "FSo8qW", "Cw82ywpcMa4TgSob", "oCkDW6lcUbj1tsxcSCoC", "zuPNCNldM0TTwmkw", "W7tcRmkIWQbrBmoUWOfLDG", "ELRcTN7dSg3cHeVcMrq", "W4unW4lcGLVcRCopW4ZcLti", "mKtcOCkIW6ddKaZdK8k6ea", "umk9p8ktW6icrmoluhi", "W4dcSSoKW4hcG3ldGWNdTcS", "WRSgWOZdMCkJwSoCWQHgW6i", "gmk/WQu", "ESkYW5BdUJRdObDtoCo5", "v8oSW6ii", "jcNcHCkThmoOENP8tW", "yCoOtmkzWOe", "DGhcTCkPW6tdJuNcG8oXsa", "Bce0nsJcIub5f8oh", "W7pcGmo/DSk2rs0WW6tcLq", "jCkcW6BcSmkAW43cGbCqBq", "WQZdPCktEqVcUqVcMSk0WQy", "cvb+WPf+W6JcISkvoaa", "WRSHtSkwW5quWRFdM8obeW", "WOnaWOtcMftcTmovWOZcMcy", "BCo6WOVcR3FcPvKhxmk1", "WOBcRSkJlSoRdsCWWOddNa", "mLVdU8oSW5zYW4ZdMaxcOW", "wmksWOpdQKrkmLbyWQK", "W6RdQSoCWRFcHcuhWQldHSoF", "m1BdPCk2WPa8W4NdMbJcOG", "e8kvlmkAWPZcUILRf8om", "eConW7RdJa", "o8o/WOy+WONdQSkExCoeW7S", "gmkpC8oCW43dPI5ZbSoF", "AxtdGSoGgmoNjq8rlq", "rSopruqviSkHW4LKWQm", "WRPlW5JcMmo3d8kpWQuwWRa", "lvi1v8kDW63cNsDuxG", "rSoFW4pcUaCDCbuIW6G", "W6JdU2JcUa5AW6yLhSki", "W77cPdZdUqmkWRrSqCkz", "bKD+W455W6JcICotnqu", "WQRdN3hcO8k1x8kSo8kYWRK", "W6z8W6jfW6VdQditW4mn", "WRqEW4Cy", "WPuYWOZcM8oTWRBdMCoKfc8", "bSkwoSkwkmkfWQJdL8kuW6a", "WR/dSCkejHdcIWdcMmk0WRC", "b8ksvvLvsSkSWO8sWQ0", "W71wW5O", "W5KNW7zy", "duLPoW", "WQ/dQSobpbZcUHdcMSk2WR0", "W7ZcOdpdTLrDW6nIcSoE", "W6nYxSktW4y", "jSkPW5JcQmovEftcHN7cLa", "WQRdTSkoja3cTXlcMG", "WPjLWQNdQY/cHqHUWRG4", "tSkuWRG", "W7VdQh3cQqqu", "hCouW7/dSvVdMxyTW64O", "WQhdOSkh", "WPHSWRCDW4/cG8o9tNhcHq", "aSkDdmkaWRDah00pWQK", "WP/cMSkmW6tcO1JdScdcML4", "W7ijvmkfWPddNSoTpvK3", "fSoDWOhcJ1NdG24TW7yG", "W7yWtSkdW4CtW7hcG8knbG", "W5nzWONdLKRcSmojWP7dHsG", "W6DlWPhdNSo3g8kEW6qdW68", "wmksWQpdIG", "Fmo4WO5uWQaXWQdcGXBcUG", "W5TvW7TscSo9W7rFyMS", "WRVcSCo2WPjuuSoQWObTzq", "WRddRNNcOvDlW6yPhmon", "vqeUW483WRVdLSkdmuS", "W63dPSkeoaddTrxcHSk+WRa", "W4vCWOdcHv/cVmkhW4tdMJq", "hmokW6FdHJNcH8ohW4nM", "cfyWymkghrv/Cw4", "qwDSnmoDs1L7", "sqyZW5bFWRddISkhveG", "x8kpEmkdjCkiWQ7dM8kwW64", "x8ksW6ZdMvFdIHSGW6aH", "dSocWQ/dVwrYCeLZW6W", "W4mzW6DicmkLWQHdWQiF", "wrPOz8koz1rMddu", "W7D4s8kdW4CjW7i", "q8kDWPFdULndFeD3WQC", "WPCCW5tdGbddOSkoWQJcH3u", "DmomW6BcT8om", "rmkjWRpdQZ9ACeCNW6y", "sSkwWQ3dKaVcMxeQW7XJ", "rmkcWRJcLgVdHCkzW5DRlq", "wSoyW7ZcK3JdLmkoW4fKDa", "W5TsW7TscSo3W7zvyWC", "h8ouW77cIeRdNgq4W7iI", "W6RdNN7cOCkdrmoLk8kaWQG", "AuSKw8ktWQddIIrtsW", "W5JdJ8oFBCkTrhf5W5VcKq", "WPNcQmoQaxamWOy", "cSotW7/dU256zeO", "WPNcQmkZq3iVWOZdGSkCW40", "W7ldVSoB", "W6rVvmkhW5TDWRFdKCojtW", "WQmyW4ilW4KtWODbs8ki", "W6iGW6LhWOhcKSkWcsddIa", "W4KuWQWDx8k8W6q", "pCkPW5ZdUZVdOfroeSoL", "EmozW7pdUCokWOldJvHcFa", "AsPNChxdNKTSdmkd", "EmoEW7VdUCotWP/dGuC", "WRZdMwq", "W5JcUmoRcgSSWPRdNCkcWO8", "fCkXWRvwAIZdGKC2zG", "rSoofHW", "kSo7WOq+W7ddV8kduCokW7S", "DL4mW7bZW6m", "xSkqW7VdOhvYDaWJW64", "E0ddVSk1WOv5WOtcJuBdTG", "r8oSWPHzWRTJW6JdLKBdVW", "hSoCWOpdQ1nDFeX6WRy", "v8kJi8kt", "keObcCoZwCkfWQxcOxS", "fbSNn8oFtLrRmc4", "eSoucSkzWR9beWyEWQG", "ACoiW7ZcVSorWOZdJa", "xSokfCkbWQ8", "kmk0WQtdJg96fwTlWPW", "WQ8/WQDEWR/dONmnW5jj", "W7xdMZhcPZxcICo5iKH+", "W5CCnCk/ax3cPmkuWQK", "W4ziAmo5agBcPmkAWQVcVa", "C8oEW73cUSou", "WPdcLSoeW6hdRqlcUgFdHam", "BSkOW4hcRYtdRrzquCo9", "yfVcKCoUW7j8kSknW5SC", "B8kIW5lcQ8ky", "rSoFW4lcRryEBaOSW7m", "W67cPmobDeNdUexdLmoXW7q", "iSk1WOBcRZtdQrHud8kO", "WQXrcmkx", "dSkUWRu5AtldM0aTDW", "WQHyrSopW4hcNmk2ov5L", "DSkVW5ddQq", "eCorWPpdTvDgmarAWQG", "WPedW4VdGGZdRCkpW5VcGhW", "WOldNSk9nCo3hs8WWOhdHq", "W5JdQSk3uZv5W4FcGSohWPa", "smoEmCkk", "rSovreWbFCoPW5GZW7e", "W44DWPBcG1ZcUmosWP/cKMq", "tCohW6ddUNuZC043W74", "aSkDaCkmWQjgeWmpWQ4", "eaxdOZpcQsldKLldHuC", "W4LgW4xcLvlcTmoiWPJcIgm", "e8kPWQLoBtZdNuuVCW", "W7BcP8k5WQffsmoUWPX/Fa", "W4SWW79hWP3dL8kfbca", "WQHFm8ozW5JcLCkOrXH1", "W7CEWQJcPSonW43dPSoemhW", "BbNcOSo9W4aJW7hcM0BcKa", "W67cPmoDmadcRKxcL8k9WRu", "ESobW7VcT8op", "WQf8WQevW77dV2fDWPaD", "dCotoSkDWPBcUNm2vCkh", "l8kMvSkmWOpdSeVdK8o9W70", "W44BW7PtsCoDWQb0W5au", "WR8yW4jiWPKsWO1hw8kq", "kf7dRCk0", "W4lcHSoiW6xdQL/dQcNdKXK", "nmoVWOpdQSojEbZdGZFdKW", "WRNcQSkgoWBcVWNcKCo/WRC", "frZcQIhcPYpcJatcHHW", "WOZdGmo9A8oN", "CqhcT8kSW63dH0JcGmo0sa", "W7JcLYhdPCoyaSo8FSohW60", "W4XkW6ayd8o9WPivWQHO", "W7yBW4zvW5itWOfvtCkk", "zSkPW4tcTq", "kSkHW5tcVmkkkLNdHd/dMG", "W7v8t8kdW5SoW6q", "W7y2W63dGJ7dHLq0WP98", "WRBcQSkX", "w8oBeCkm", "W6PtW63dQmkyW4dcTSkkkNy", "x8kBWRtdRWVcMtm", "hmoDnSkdmCkyW6FdGSkDW6C", "WRJcJM/dS3ddHq", "n1BdPmkIW4WZW4RdJXBcTa", "WODeWOZcGLlcSmkwWONdMIa", "sSkuWRZdJWxcIsn/W6CW", "WOSrWQhcQCowWOS", "W4ien8o+g3y", "W4jum8o0axpcVmovWQJdPW", "WO5RWQvbWOhdGSkXfgtdIG", "fmo1W5ldG0WxW4NcJmk5WRy", "DSkYW5NdQZldT0qaoCo4", "FSkSWODGWQBcUCoDrCklWR8", "WQ5vc8ogW57cLq", "WRnqW5JcLmoVv8kmW60iWQu", "BCoGWPFdUtBdQrbdhCoM", "W6exd8oeW4NcL8k/k1mH", "WPWpWQbm", "sSkKpSkE", "xCouha0", "W7NcLSkaWOj1D8obW4jtpa", "WP9vWRqac8oPW5qFWQDW", "A8kJW5LVWQ3cRq", "WQJdHgNcV8kv", "r8oiW5RcOryEBqOJW7u", "W7fpWO8wWPLyW4qsF8or", "WQhdSmkoW6FdIJKhWRBdKmoc", "W7faW5JcNmoThG", "wvlcQwZdR2tcMatcGry", "i2pcJSoUW6u5p8kAWO9v", "WReEWQ0bWQlcQYjaWODu", "WOyiWQef", "umoigGOxDCo8W5D6W68", "W6FdOSkYWQriuSkZWOz/Ca", "EG1Hb8ofW6/cGhqbgW", "z2LqWQy2W6yvW4vNsG", "gSkCW4RcT14CyG", "s8ovkSkwkSkyWRK", "aConW6pdJhxdH8kjW58mAq", "W6ORWRNdO3NdIW", "W7r7W7XfWRddV2ypW4Dk", "lmkPW4yaW6LUW77cLqFcSG", "vSk8W4FdQdBcPrDidSo4", "umoOuCktWO/cTvhcHSk3W64", "W7OVWRqEWR/dUNSfW4a2", "WReDWRNcUSob", "cCkABCodFmoAW7ZcHCouWRS", "WRlcQSk6WQfzqCkJW5rLzG", "W7yQWRtdVMRcMcvXWQ4K", "WRyUWQ0DW6RdPZvaW4mn", "WR/cQ8kIWRDf", "WPlcI8opW7G", "F0CegSk5aSoqWQ7cQg0", "WQ3dTSkenr3cVsBcLCkJWQa", "WQ3cH8k5WR0bfmkUW5m8nq", "WO4jW4xdHWJdU8klW5pcMxu", "mmo9WOngW6K8WQVdMexdUa", "oLOZu8kFWRxdGa", "W5aekmo1bNVcPSkqW6lcVa", "vrmUW5y5WRddL8o/kKi", "jKq9jhNdI1D5rSke", "bLhdPcpcThJcJLxdLfe", "aCoekCkjW4pdTgK2r8ka", "fmoNW5ZcLGXAW4NcJmk6WRS", "aSkXW7qooMJcMqaSnG", "r8kIW5ZcSCkzEcBdGY3dNq", "WRG6rmkjW4aoW6ldMSoixW", "cCkfDmotDSoEW7VcM8odWQK", "wKtcTw3dVW", "WQhdVmouWRhcItykWQtdKmkm", "A8kNW4TX", "F8k5WO9DWQyRWQ7dMLNdPq", "W4SvkCk2qtlcVmkC", "kSoTWPzTWQhcQCksc8kiWQO", "i1Dxu8k1bSosW6NcThW", "DSoaW73cPSkjWOtdJKfFoa", "ycBcL8kHc8kjC3K9hq", "tCk+D8oaWQ1icCkhxsy", "W6f0tSkwW5KBW64", "WOtcSCkUkw0QWPRcJCoeW5e", "q8oEWPldSuarFaq7W6y", "WQJcOmk7WQPkvSoDWP9TzG", "dmkAvmodW6eFvLXpW7S", "n8oeW6BcSCojW4ddKfHdjq", "x8onWP/dTKzAkar1WQC", "m0FdO8oY", "WPNdUepcHq", "W5NcM8o0B8kgxN5QW5u", "iYBdSmoGrCoDjNyzdG", "dCkltmowW7zefqeqWQK", "dSkxF8ooW4hcRhmWbSkn", "WQXcd8okW40", "tSkxWQNdKX4", "dLaGpmoufWOQlZ0", "WROAW5DdW4SaWOzcx8kn", "WQ7dN3hcOSkFxmkPmmouW7m", "wSoamCkDi8k6WQVdNSknW6W", "A8ozW7pcUSoqWPdcG1rFpW", "gSkTWRjlyINdGumVDG", "E8kOW5ZcSCkDpt3dKJVdMq", "W6XWtCkjW4CoW7BdLSozsq", "sfNcU2C", "W5tdMuRcM21NW7u/gCkl", "WRVdKN3cVSkavq", "W4abk8k7hNFcPmkqWRFdOW", "oCo9W4pdRJVdSbWAw8kY", "BCoGWPldUtBdQrbdhCoH", "emk9omkiWQfjd8oggtW", "WPFcQmoNbwXJWPVdMmkmW4S", "W7/dKdhcOYVcL8oTdXu5", "W6bgWO8uWOGPW51Kdmop", "c0LJnmoCEvKPmJ0", "mCk+WO5vWR0+WQ7dLrVdUW", "a8kvfSkDWRDjrffqWQ8", "emo6E8ohW7qjrmoAr3W", "zHddSmkWWP9LW5dcHXhcQq", "WPJcI8opW7C", "WOxdP8kPbM02W5ldL8keW5a", "W5uFWQigdW", "qfFcVZldRwxcJG7cM1y", "puSDW6f0", "WRLFW43cI8oQcCorW6OhWRu", "WO3cISooW6q", "oCkSW50cW7G8W6RcIrJcUW", "W57dKmkrWRpdUW7cPhRcKcC", "WQZcUIdcVuPCWRqVeCkm", "W5xcNCoWBmk+thK3WO7dMG", "W7jub8oDW4NdNCkVDXX0", "WRtcO8k/WRCrqmoQWPj4ya", "W4SvkCk7ra", "Emo2gCovWPdcUapcHSoSW6i", "wSohmCoEm8kEWQVdGSowW6y", "xmosmSkbWOVcRvSYuSkC", "afj4WOj7", "WP4eWRetsSo4WOPtW6uH", "WQhcMgxdUxhdH8kTiLCT", "W7JdKJa", "bCkrtfPwkmkUWPvQWRe", "W5RdNCoP", "AGLXgmojW6hcHwSzcG", "W4ldTSk/usX2W4ZdSSosWOW", "WPOsWQdcQCkcW4a", "WObyWOtcLfFcPSkxW4VdNsu", "F8k5W5hdPJNdOKmhtmoL", "cCkjcqOrDmkJWOv1W6W", "ymoteCkiWRTu", "WRCSe8owWOfAWQBcISkdqW", "omkuW7NcR0uSxcNdOSoo", "WPddNSkNiSoTaYaPWPddGq", "W6CfWOVcKSoSfmkAW6euW68", "FSk5WQ5zWRO2WQNdKbhcQW", "kuhcMmoRW6nSFCkoW5Wt", "WPrAWQCFwSkIWR9iiuK", "u8ojWQdcQqfNBrvnW74", "r0bQWOD2W6hdHmoAEri", "lSkrW6RdPW", "cCovcqOliSotW5y3W7a", "WRPEWQxcOColWPtdUCoenJy", "DJxdHmo0smokkIu6", "g8kimCkDnmkzWR7cKSkBW6u", "WPVcV8kZq0CJWP7dMmkhWOu", "umkqWQhdIthcGSkq", "WQNcKIddVMhcK8o+meXL", "W6imsCoAW57cL8oKoaP2", "r8ozkq", "arSNp8orxeW1iY4", "qbGGDCkqcG1MFc8", "WQFcMMxcOSktqSoOzmkaWQG", "W6tdV24", "WQ7cRCkZWQS", "WODjW64FWPvzWR4ucCkR", "W5SjWQauvmk3WRCgiK4", "ySkIW50KWQVcT8othmkFWQ8", "WR9LWRpcQN/cKbrIWR0/", "WQCaW7ddR8oCWOhdOSoxCM8", "iSk/W4FcSr/dPaTahCkV", "eSkggGCeB8oUWOr9W6W", "vSoogbKKAa", "rCodreWdDCoXW5X9WR8", "xmowWRLK", "jmo8WOO8W6BdP8kswSouW6u", "WQ84WQyCW7hcQZiwW54r", "WPrgW6DfxCk3W5iCWQnY", "W4XPwmkl", "WRnLWR7dOG", "dCodW67dUYf1FKW2W6K", "WQZcQ8ktW7lcKrHxW7tcG8oo", "c8kEWPJcUfvdpvDOW7S", "W6BcNxldO2ZdJCk1jGL6", "W5BdUSkUrcjUW5/cKColWOi", "CvHhu8kNwq", "rCkCvKqsA8oQWPCTWQW", "WQKUWQzzW7VdQxWhW5yA", "kXz1eCorWRhdNYrctW", "vSo+W7vyzq", "WPlcL8oeWQ7dRvJdOs7dGr8", "xCkVWOhcNbbyWOJcGSk3W7C", "zSoGWPlcV3FcTvKvsmk1", "jmkHW4nHWQNcQ8kFa8krWRS", "W6RdMxhcVmkxhCk9lCkwWR8", "pLiVuCorWQZdLJfaCq", "WRu6WQClWRxcRcHa", "zgjMAYdcIfX5bSof", "WQjRWPFdMudcUW", "W7idu8oQWPNdGmo0m00Q", "v8kVWOhcNajj", "m8ovW73dRvaTutJcVCkm", "q8koWRJdJrNdL3K7WRDN", "pexcMCkGWQrV", "e8kqBSowW5RdTIy2r8kA", "W6tdU2ZcRfa", "W6GRWQSDW7JdQwznW58v", "qCojwrSxC8o5W4WX", "ymoWWOrB", "W60EuCkrWOtdGCoQjeGQ", "pmoXWPxcRrldQbHoemk3", "WQdcUSooWRpdIcDeW6xdLCkw", "Bmk4W4zLW6RdV8oub8kwW7y", "W41CW4JcG03cSmojW4ZcI3G", "dCohpSkDWO7cV3u0qG", "W7vwW4lcNmoXwSosW7WdWRO", "W4pdGmorW7ZcUuJcQtVdLqC", "d1P7WOy", "zvZcICo6W6H8AW", "AqldN8oGW4nRWP7cIHhcRW", "bSozW6xdNJ3cHW", "W4OAn8oUatxdRSovW6xcOG", "WRVcLg/dOa", "WRZdNd3cTCkFv8kHkSksWQe", "xmoFdCkcWRPdhX9cW7W", "nCoIW5xcT8kDzG", "WQvTwmkuW4yFW7NcMmojeW", "W4W5WRLoWOddGmo5rZtdIa", "kmoTWOu3", "bwKMpsJdJdC8g8og", "FvRcKW", "A8oeW7NcTCokWOZdJHStoq", "umo6W6OvlxK", "xCoekmkbWO/cRa", "wGfWj8oFtLGTBtG", "WQypWOddJSkTtmonWQHxW7u", "WRRdKMq", "Fe4BgSoIxSkxW7hdTtq", "oargsa", "WQ4msColWPBdKmkVAG1Z", "W4LpWQOBtCo7", "WQqCWR/cVmozWO7dOSknkhm", "jmkVW4tcQSkFnXRcHgdcIa", "jCo8WOldSmoFAKZcKM7cGq", "W47cJmk/u0P/W4RdP8otW6O", "iSkPW4FcSwVdSr0zlmoW", "W7ZdQhpcRuXEW608ga", "WR/cSCoLW5xcJxtdJGpdRdS", "xmoqnSkaW5dcVhu2hmoF", "CfbpvCk2cmkEW6BdVIu", "WQrHWQ3dPM7cLH8", "a8oVkmkiWRDyaCkzsNi", "jGlcTCk7W7ZcLHZcI8oLfa", "WQzXuSkhW5exW7JdISoiea", "WQiJW6pcQI/dLvOHW7XT", "uCoFf8onWR9jcHGl", "CvHbbmoTsmonWQ3dVIu", "iNNdMSoXemozicu9jG", "e8kos8oFW6fRtKnnW6m", "W7hcTCouWQNdN3jyWOZdJCkj", "W4KqW4VcMfhcOCosWO3dNc8", "y0epdSo/uSkzW7ddRIS", "kSkdWQhcL8kvW5NcJGyfCq", "WQFdQSkrir3dUaBcMmkWWQC", "DSotF8kSWQJcHe7cJCoTW7O", "x8ovlmksACkcWQxdGmkvW6G", "vSoeW7RdGdtdMCoEWPm3za", "uSkzWP/dQ0jalK08W7G", "W7xdUCotW6RcMG", "WPZcLxtdU2dcJSkjkKHJ", "WQZdUxdcUfbzWQLRh8kc", "WQpdRM7dPWmkWQHJcCkp", "W6fXWQtcSK3cHmo5WOFdPJC", "uCohdqO", "F3y9lZddGqGSaSob", "sexcKq", "WPbhz8kJwYpdSmocW6VcSq", "wXXSWPn2W6FdMSkonXW", "W7tdSCoNW6uie8kVW4fFiG", "WRVdMgxcV8ks", "WPKbWR0tvq", "dmovW7lcGuxcNIbZW74S", "i07dSSo9W7hcJWRdN8kHaq", "CSo/h8oA", "omkvW6ddTKS", "cCosc1u", "W4a5WR4hW5hcKSoKxgVdJq", "W5dcKSooW6dcVHhdPIFdHbm", "xSooeCkF", "suv+WO9+W63cHCobCq", "jwC/pwNdNW", "WQRcPmkKWQbsr8oT", "bmo1ESocW75Ec8ktxse", "AHTH", "x8kqWP3dRvGppKfPWQ4", "eCoEbmkzWRDofb0kWQ8", "WOhdN8kGo8oRfdSIWOtdNa", "sSkIoa", "C8kbwqqvFCo+W5aUW6y", "W7RdU3dcRezz", "imoFW6VdN3JcSmohWPiXBG", "e19WmmknduSVldK", "BCoWW4xdVtJdOqXm", "zCk1WPCRW7JdV8kcsmowW78", "WPypWQbvbCo5WQKrnGC", "W6FcGcpdSCohamoMBCoaW60", "W4zsWPq", "jLhcImoTWRHXESoiWPvF", "kXNdGCk5W4uWlSkjW4eE", "WR7cNwW", "WQ/cRmkDW7xcNxjyW7NdK8kE", "FLWiW6rUWRPyWOeG", "WRamW5brW5ytWOW", "BfVcLq", "b8kit0TxmSkVW7PRWQ0", "W7nFW4bkW5GsWPSyhmkt", "wCotc8kj", "WPFcLxtdSMJdNq", "vmopfXSqAmk6WOD6WR8", "r8ozl8kBWOK", "W6z8W6jzWR/cRdjaWPDu", "W7rUW65iWQFdMIqJWOvg", "WRxcRsZdRM8BWQ1IrCoz", "WQC9u8khW5GFWQRcMSoCbW", "WOX/nCo9", "nuhcK8kLWROLpSowWOKD", "W7nDW5JcVmoVh8krW60iWRy", "AhtcPSoIW58PWOJcHKtdPG", "W4dcP8ofW7RcVHZdLdRdJWW", "b1FcU2VdUIhcGa7cMHG", "W5pdS8k1c3qRWO3dL8khW40", "pSkZW5tdOJlcUfTwcCo0", "rXiUBCkqhG1ZBMq", "W4tcM8oHCCoJaJHNW4FcHW", "AJJdN8oGw8oCphfPbG", "W6WafSorWPpcH8kZya1U", "zCoVW5qqW6L/W6FcHvldOG", "s8k9lSkgWRfz", "WPhcHmoh", "tCovemkdWRi", "vSokgbGwiCk6W507W6S", "CeiiW6PUWQ0vW5iHeG", "WPpcSSoHcgyRWO3cJmomW6e", "FCoyWRdcOHjKhwhdTCog", "D8ouW7m", "W4e8W71n", "sSk0W5hdRJZcPrHdhCk1", "zSo2WOnE", "W6ddR3FcUe0wWRS/dCkm", "m8ofW6ddR2HYDa", "W4WAymkLswhcPSksW6xdUG", "zX7cS8kYW6NdN0NcJSoSua", "qr7cVN7dR23dJuVcNru", "d8oEW6hdOImG", "WRiZWQuEW7pdQvemW5yh", "W4pdN8kCWQ7dTWhcUxxcNvC", "WRJcJM/dS3ddHCo5kKPJ", "umo6W6qvkxJcNW", "gSkCWPFdSvO", "p8ozW6pdJcW", "ArZcSCkUW6NdIKdcGmoUva", "wmoyoCkan8orW6JdHSkDW7e", "yfRdGCkQWRXGESkmW5ar", "fCkgwvDkEmo0W49KWR8", "WOXbW7zyw8kVW4ykWRPJ", "bSoCW6ldHcW", "W6rZu8kdW4DAW77dLSoDbW", "rerVlCkDu0iZncK", "pCo/WOddQCoEA1JcLNdcHa", "zXpcQCo4WRxcIuBcLSoIra", "x1lcTG", "cCowwqGjFCoUW4PNWR0", "c8kEWRddSu5koa", "kauEhCkucSoyWQdcRd4", "rXC2DCkebbP/yg0", "zvNdJmoRW7q+pSkDW55s", "m8k1WO3cV3RdQ1rmuCo7", "BvZcLW", "EmkUWO7cMuvQWOBcNCk7W7O", "W4NdT33cSe8kW7aLdCki", "EXFcT8oXW411W5ddNfFcPq", "WRn3WRZdPclcGaLKWQ5Q", "W4yLW7Xg", "W7X8u8kbWPuwW7BdKCod", "yHnktmoVr8kzW6NdOdK", "W6LPamkmW4yvW7NcLCoeha", "sCokW6hdNZxdLmonWO05CW", "g8owW73cNvJdNhOHWPyH", "BqhcU8oGW4K/WO/cNYhdTW", "WQdcQtldQbOyWQ1/t8oC", "gSoZW5ldNLicW5RcO8oNW6W", "WOVdIs7cPJhcLSoTCbm/", "ya/dSSoLWQZcMKxcKCkSeq", "oW3dGCkQWRf/ASoFWPvh", "WQ8YWRimW6VcOwijW5SD", "W7HrW4lcKG", "mSodW7ldO1eVwI/dVSoA", "hbnhWRGXW7iiW4ubra", "WP7cRSoJca", "ySk/W49V", "iSo6WO9BWQGZWQVcLeBdUq", "xSompCkq", "kuOeu8k/f8omWR3dRwW", "emkkWQ3dRwbQCaW3W64", "Dv7dUCk3WP48W5JdHHBcQW", "WPHMW5tdHhBdPmknW4xcHxe", "omoHWPmNW7NdQ8kswCosW6u", "W5pcH8oWBmk+sa", "W7nxW4ldH8k/cSkDW7WoW6i", "f8opW4RdRf4reKv2WQC", "W6ldU3hcVb4nW6aTemkp", "W4mAWQzzxSk7W4HwW7m+", "WRGGamoBWOHhWQRcHCkqtW", "pCkOW4ObW7XZW7BcIXJcUW", "pGjisCk0fa", "W4mBWQ5tvmoqWOnFW7qZ", "f8kkwuK1ECoZW54ZW60", "m17dS8k0", "wmkFWRJdTb7cIdS", "W4nfWPFcHfVcU8opWQJdMIG", "W6FcGIpdOCodb8oWAmoFW70", "AGhdQJ/cQJNdHf7dLea", "W6xdVIhdVKvFW7GGumkl", "WPncF8kSqshdP8ozW73cRa", "WR4+W73cUZ/dHv86W75Z", "xCoBnSkkWPJcNhuHqCkc", "jv0N", "FCkOW4NcQG", "iK8eW6DXWRT6WP4Oaa", "W6fwW5G", "W73cQSouyexdQvhdMSoJW60", "tSo7W6iizJVcVbjYnq", "emklCmkkWPtcVIr6qSkh", "WOS9WQmFWRpcReisW5Gq", "k1ldPCkQWOfWW53dJH7cQa", "EKhcK8oYW6G2m8koW4W", "ESkSW5HSWQBcQ8ob", "umoyd8kiWRvt", "vSkRWONcGq1jWO3dICk7WRS", "WQ9ecCoBW4NcL8k/yHTw", "lHTcsCkIwSkEWQdcO3y", "ymo4WPLdW7r4WRpdLLVdQq", "jCkScColW5hdVGNcG8kGWRS", "qSoogb8wFCoTW4L3W6W", "cCozkSkdWP/cRwHHcCoq", "W4feW4JcNLFcPSopWOtdHY0", "WQhdLMdcPmkf", "fuGPu8kDWQFdUJferW", "W7ZdQmonWQldHZe", "t1RcThS", "W6hdPCoFDeNdPahcNCkNW7q", "zeFdV8k+WP90WOq", "c8kZWQldIWxcHdvXW7W/", "W50MWQqpWPRdGCkHeHFdMq", "kL3cLCo2W6P8pCkjW5Sl", "W7mhWQtcVmouWOxcU8oFmwW", "W4XvW5JdKvZcOmopWP/dMIO", "wqyGACouq1TMiZa", "hCoYW6ycDM7cIqb0kG", "tmkOoSklWQrFaq", "zLhcLmoWWQfXm8kmWOHy", "W7fWW7DxWQBcTsTvWObg", "W6K6WQ0lW7lcSI4eW54c", "W61YtSks", "hmoqpCkFiCkyWQ/cN8krW6O", "p8oZuCkFWONcJ03dImoXW6K", "pmkmW6VdPLS3tthdSmow", "kSoTWOOPW6JdV8kssmoyW6q", "Emo4WODrW6rTW6dcMuBdPW", "W6xdQtVdPX8fW7aLc8ot", "WRVcP8kZWQKcd8o6WPP6nq", "cmkrWRNdJWpcNW", "DKG1t8kDWQtcJwzwwa", "otrmvSk+fCkEW6NcPcq", "WRVcMwW", "W7/cVmopyfhdRLFdHmoNW6u", "yuyAfmoHu8kzW7JdTZC", "W6NdVmo6W7usaCkRW589jW", "jfOVgSosWQNdLIrftW", "c0DZjSknceKNnd0", "yuCddCo9xSo4W7VdRcS", "yCkrW73dPri3tZ7cRmki", "pSojW5RcObyFFbq3W7C", "W4/cQdZdQbOeWQvSt8od", "WRJdMCosW6FcPuZcQsFdKaS", "gSolW6ZcJf/dGwCMW64G", "ChddKSoV", "DuFdUmkIWOu8W5VdHrpcVW", "zf8GqSkqWQJdNtvuxG", "i2JdHCoUt8oCjhSTbG", "FCoyWRdcOG5RwttdP8kr", "ngCXna", "W4XvW5JdLeNcVmoFWP/dNx4", "m07cU8kUWOe", "uSoQW7qs", "k8oyW7pdRLm3tMdcTSom", "umkMWPtcK0HCWOdcG8k/WRi", "W6j4sCkZW6e5W5pdMCozfW", "WQBdPCkpDfO", "FComW6BcTq", "W4H4W6LAWOddLSkXc2pcLW", "tmoscSkA", "W7NdRJZcUK9lW6C/qmok", "W7xcMgtcTCoi", "jbvwtSk0", "B1ZcJ8o/", "WROhW6dcRSozWO3dV8oAjIa", "wGf1jCoCruWIz3W", "DuSPwCkFWQtcJG", "pwm8oZdcHa", "W6tdRNhcTq", "vCkkEmotzmomW6RcKSoyWQK", "vh3dMSoJtSofjJCNuW", "FfxdUmkPW5XHW5ddHH7cRG", "WRPTWRpdOq", "WPlcG8osW6C", "W71vW43cL8kHqmoCWQO", "BCoQWOnCWQGX", "krHasq", "ovldPCk5WPbIW5ddHLFcOG", "j8kVW5tcSSkcoHhdIJFcMq", "W4LwWOZcNv/cPSosW4VcMZm", "WRmyW4JcMmo3g8orW6ahWRa", "WQNcKgNdS2tdMSk8zarJ", "W7/cVCkGzKxdQKxdHmoXW6q", "kvldUSk+WOD0W7RdHHBcTq", "fmo2W5ldNLqAWQtdNSoKW7y", "W7GgWOZdMCkJwSoCWQHAW60", "CaPjWQGNW6iwWPyGbq", "W7/dVCopWQ/dIcypWQNcG8kl", "WQa/aW", "WOZdPCkvnqxdUcRcHSk1WRe", "WQtcTSklW7BcIwrxW6xcMSor", "zrxcLCo+W7q6m8kAW5Ws", "wmoCoCkDi8kj", "sCkdW77dJcZcNmkqW513CW", "lCoUtCkFWOxcTapcHSoSW7G", "DCocW7u", "emkKjmkxWRbif8kFesy", "jYZcG8k1h8kDE200uW", "i0nvWQD3W6a", "ECkSW4pcU8kflaC", "W4ZdJSkqWQRdPaNdH3NcK0q", "DN/dLSkSw8oBidi8ba", "WQyyWP3dJmkTq8opW4vuW7a", "WPL7WQGzW4/cGmo0tNxcHq", "W6P3WQVdRs/cGXnKWQSp", "oKFdP8k0WP91", "oemnW60", "W5SWW6LnWO7dHG", "b1ZcQMZdSIhcMGlcMbG", "WPddGSocW7/cQ0/dT3xcHWe", "bSkCWQ3dKapcGs8UW6bc", "sXnSWOP7W6JcJmozEr4", "l8oXWPxcVwxcTfuhtSkN", "WQ7cSCk5WQSCwSo6W44RzW", "ACopWRdcSrX8hwZcOmkb", "bepcS3pdSMtcIWxcGqu", "rCoddq", "xW3dUJ/cUYW", "lSklWQ3cPvWRudldO8kc", "evjZ", "vmoApCorEG", "WRRdGNlcOSkcqG", "WOVdImkKgsZcLJe", "oKtdVSo8WOzJW5JdMLFdQa", "feaIW4rXW6BcI8ogFqi", "uSkbWPpdQ1DbEXPyWQO", "aCoZW6GBpZhcNWzQnq", "jaedwCk9bSokWRRdVt4", "FhuXlI3cNbm", "W6TTsmksWPuzW7VdMCoEaq", "W5KNW7blWOO", "Dmo7rSks", "oCkSW58CW7LZW7xcLWdcSG", "fr5SWPz0W6RcGCobAW", "W64Cx8oOWPVdNmoPjeKM", "W4ddTmk7mJn7W5hcICozW64", "WQ/cNw7cT27dJ8kPiLDJ", "WQTQdSoiW5OiW7dcL8kFqG", "j8o8WONdVSoAALRcL23cLa", "umoWW6mpmdVdKG", "t8kBWRJdNeFcGZL5WQ9I", "W5ycWQ8gwSk2W7CqmeW", "AHzpw8k8bSonW67dVG", "WR9JWRpcSc/cLH9VWQGO", "suPPpCorxGaZmZK", "yJ5QA2JdM0LUqCkD", "W6xcHINcH8odC8o7CSoaW6m", "WObBW6DwkCo6WPjtW6iZ", "BfKFW68NWQHqWPC+mq", "eSoybmkdWRHcca", "zCkRW4W", "g2xdQYNdLJ7dMeFdHKe", "WRVdLMtcUmkyvW", "n07dTmo5WRlcIWS", "hbpdQY3cTtJdNKFdHuu", "Ah3dMCoMx8ob", "hSo9zSoxW6unvSohqwu", "l8kMqCktWPldRGhcLCo8W6m", "tCoBW6ddQgv3F0z+W68", "W6L8x8kdW5LAW7hdL8oFtW", "WP1afSkjW6hcTmo6qHb0", "cCkjdqKkEmoKWOC", "imkuWQFdPSkxW5tcKXSbyW", "WPrYW7PaWORdKCkVaIVdKq", "umoNWPpcHHXaWOZdKSo0WRG", "k080rCowW7/cMdfarW", "wSoBbSkf", "uCohn8kD", "WPSbWQNcRCokW5ZcUCozl24", "w0mHWQD2W73cHCksAbu", "W7zuWQ/dPwVcGbe9W7mV", "hCkUk8ktWQribCkf", "AKFcHmo6W7i0h8keW5as", "W40dWQ4sa8oWWODbW79Y", "tCkLjCkq", "WPr3W6LhWPZdHSoPeYRdGa", "vSo3WRLgDgJcNK09mG", "t8k4k8kjWRfvemks", "W4tcM8k/vc5/W4/cKCoBWOi", "b8ojW6i", "bSoFWRpcIIZcNCoAWO09lq", "W4DKDmkc", "pmklW6pcVXuYxdhdUmol", "WPfyD8oyqdZdO8ocW7FcTW", "WRrvfa", "sSowk8kpW5dcRhm1rCkb", "WRzvbmoiWOa2WQ/cLSkyxG", "sCkdW7RdIwBdImoAWOvM", "WR3cUmkDW6FcIxvAWQhdISkj", "ybqosmkMsa", "BSk8W5VcSwVdTGLgeSk1", "vGaXW5SLW4xdLCklnKu", "WQ7cLw7dSW", "g8keEmkbi8koW6lcGmonWQK", "t8ozna", "c8kyWPVdVrTem0L+WQG", "wmorWOhdSvjBnbK8W7q", "WReZcCosW7HlWQtcLmkFoG", "rCohcXGa", "DH3dHCkUW7ldIeVcMSoZuG", "fSorWOBdVuvomGm7WRu", "F1ldGCoTW680lCkQW5Oh", "W5StWROtsCkXW7Ceouy", "W5ldK8kqWR3dUqNdH3hcJLO", "WPT1WQGyW4hcGCoXqhxcMq", "WQxdMhhcTq", "gmoeoCkDlSknWQtdLCovW6S", "W7xdQSoyWQe", "nemoW6fZWR9v", "WO7cH8opW7NcV13dQa", "zeG1v8kfWRtdGgHrwa", "muyiW6vMWQO", "f8ojW6ldHhxcMSopWPCZAq", "WRRdTSkimW7cVrC", "jHhcPSo4WR3cKvJcISkJra", "cvr+WO03W7RcGCoqFqm", "W7T7WQOnW7ldOd8qW5iA", "WRSqaSoaW5JcGSk1DXX1", "hSkfWOldQG", "dCkgsfLlk8kKWPvRWQG", "WOnCkmo1wN3cTSktW6ZcVG", "FCoiWRZcSXj9e2JcVCkw", "tCobW67dPwH6Cfi6", "fCowfqOgECo1W5y2W7S", "BvCdgSoXr8kzW6NdOcu", "W5hdSCotWQZcIrmjWRFdJSoF", "wq8WWOD+W7/dMG", "W7NcLYBdVCohcmkaB8olWOW", "W6GaWRNcSCouWOxcQmkvpx8", "WOubWRWxvCkXWQK", "W4v1W61nWP3dMCkTeI3dHa", "WRKsWR7cOCkyWOtdT8oyF3S", "F2u9mwVcNWi3eG", "W4ffWPhcNG", "efP7WOrYW73dICowFqq", "u8ogW5BcQqqdA348W7G", "W6pdOmkijWRcTXdcMSkL", "WRGsWR7cU8kfW4FdTCotndC", "W6JdU2JcUa5oW70/hSkc", "oKtdPmoSW5z1W5JdNHBcRW", "aSkRjCkvWQGcrmoluhi", "WR3dTmknpr0", "bSkqWQhdIthcGSkq", "DgRdMmoLxSocyIuHdG", "kSoJW4v+WQtdSSorcCkwWQq", "pCkRhmouW5hcKWZcJCk0WRS", "WQmYWRylW6y", "b8ovEmkBnSkjWQZcJ8oF", "zSkUW5RdPCkgoqBdGtFdMG", "WPpcJCotWRpcGMZcUgFdKXO", "WRuAW5bf", "b0FcTxldUwpcHKBcHam", "FCoGW5POWRVcRmofb8kwWQ8", "tSoQWQy", "iCk6eColW4RdQrdcImkOWQq", "WRFcPmkIWQzu", "j8o4W7ldRCofBLtcLgZcLa", "W5aBWQyga8oOW4esW6iR", "WOnfDCk3qvpdQmozW73cOG", "psNcL8k5bCkFFNP4wW", "BCoRWO9rW7D/W6FcMrBcQW", "rf9WWOjZW6tcI8oaFri", "W6P0WRZdVMFdLr48W74a", "yWbkxSk2aSonW6tcQhG", "q8otWRlcQ0WViW1IWRa", "WPddJ8kTBCkPwx5/W57dKa", "dCoJFSoxW7qeuCoErx4", "W4tcHSoLBSk8eduJWPdcGW", "W6rTtCkdW4DwWRNdImocaq", "W6yyW4xcL8oZd8kiW5miWQm", "fCoffqOwB8kGWP4UW7O", "dmkUWRnAAI7dGKC1zG", "xCospSkCWP7cOgGJvSkc", "tSoeWOBdOa0nyG", "FuFcGmo1W7u3p8kAWPjb", "umkMWPtcKW", "nCkPW5JcQmoloXJdHY3dHW", "WRWsWQpdPCkk", "uCoDqSonWR5vhWTcW7W", "FCoFf8kfWRDueWfFWPC", "xqKViSohxqmXC3i", "v8odfqihECoXW5b3W70", "ogVdGCoMc8oFjJm+lq", "W4roW79sd8oLW6HxCrm", "hmoHASofWRnDfSkcetW", "l17dUmk/", "iKufW606W7LBWOC9bW", "WPRdMCkbW6pcQ1JdOchdJG0", "e8kqoCkbWONcPZCZvCkl", "f8ovWQddLfq", "yXnctSkWsSomWRRcPwS", "W4WdW6OwbCoJ", "WRpcQCkZW6vqwSk9WP5TzG", "E0hdVSk0WOztW5BdKKRdOq", "ECkSW5XS", "xedcV3pcUYlcHrZcMfW", "WROsWQdcQq", "zSkSW4HSWQq", "WRHrdSkjW5JcHCk0FrGM", "WQjWWRldPdhdLvOHW7XX", "WQJdHhNdVmkbqSkPlSoDWQi", "WQ3dOCkpiaZcQKxcMmk+WRu", "DSocW7xcUmobW4pdIKDx", "W7elW4PcW5GkW4HewSkc", "dSodoSkCWO7cOxC2r8ka", "W4lcISoWzSkG", "b1RcRNRdTIhcMGtcHWu", "aSk8WRiEBYVcIbC6zG", "WPtcJCoiW70", "uCo8W7utk2JcHrXV", "nSk+W55MWRJdV8oDdSkcWRG", "zrFcT8oXW5eXWPNcILFdUG", "WPdcHSo1p8o+tNzIW5NdNq", "CSk4W5VdQcpdRq", "h8kbF8oAW5pdVYnMf8oy", "W5DmW65qB8kKWRqanKy", "oCkyWQ7cMXddHSkEWRT/lW", "aSkxBCoCW4ZdOsfMvSkp", "W7BdTmoMW6Sfe8kVW4mIia", "uSoddq", "WRixW4jiW54e", "W64WW67cVZBdH1yWW6LJ", "WQWXhCkvW5WwW7BdKmogeW", "ECoUsmkw", "WR3dSSkgALxcQXxcLCk/W6O", "WO7cKmooW7FcV1FcQtZdHrG", "fa49WPD4W73cHCoEAbu", "g8oDnCksi8kjWR7dNCkxW6u", "zGWjb8ocWPFcGNzPgW", "z33dN8oUr8onkIr0sa", "F8kUW5BdVt7dTq0Dr8k3", "CZHUnsNcI0CQbmoh", "smkoW7ZdIdVcKCoaWPv1Ba", "c8owW73dRMaZyvm8W6m", "imoUW4BdGdW8mvy6W6m", "A2/dM8ocsSoBicm6cG", "ofJdTCkWW5f9W5JdJr4", "WO7cG8opWQ3dTHpdPxBcNeu", "W5JcHSoIDSk2x34WWP7cLa", "h8kAwCkeWRHxdXLFWRi", "W4rqW75xamoNW6rhCrS", "emo5y8ogWQXrfmkeaIy", "qCo0W7ZdR8oyDeZdSg/cGW", "W4yxm8k2bxpcO8kgWRldRq", "W7zTWRNcTYJcLbzGWReS", "W69gW7vywmkRWQCkWRPQ", "W4HhWR4tsmk2WQ0ii0m", "EXFcT8oXW5eXWPNcIKVdQq", "WRWwWQtcR8oqWPtcRmkgzgO", "jmo/WOO4W77dSCkbumoiW7O", "fvldUNZdT23cMrJdIvy", "BbVcHmo1W7iJi8ofW4ew", "F8oiW7FcSa", "W7zbWP8jW4KaWPXnamoF", "W5JcVSoVegnJWO/dMmkhW4S", "nwCMpwNcGGGRg8of", "smotaCkkWRntvWKAWQ8", "e8kis8oCW6ehs19rW6m", "pMiNn2NcHqKW", "W5JcGmoIDG", "kMJdMmoYx8keltKTfG", "WQjnW63dQmkyW4dcTSkwFZO", "b8oiW6ZcJuRdNxOKW6aN", "yrnhWR1lW6KxW4fWxW", "WRahWQxdSSkkW5dcPSogjYe", "s1RcThS", "W6XPsmkiW5iDW6i", "kqxdGCkPWRjXAmoCWPjb", "WR9QWQS", "oLNcT8kIWOr6W4RdJWtdOq", "b8osW6ZdOgX/Fq", "AfhdJmoRW7q+pSkDW54", "iL7dS8o9WRdcJa", "W7JcLYhdQmoycmo7eSocW74", "W7H0WRldUxVdMbv0WQGO", "rSk1WOxcNbfVWOBcG8k5WQG", "fvzXWPDuW6BcImoDALC", "c8kyWPNdTHzzpuHUWQm", "BCkUWOJcQdpdPa1guCo7", "vSoZDSktWQ0cimkobdm", "W4tdTmk8uY5/W4ZcN8otWPq", "kwZdHCoGrCoApZC7cG", "W73cOCk3WRfDwSoWWOn5yq", "W4a9W7HgW4ldGCkLfde", "ovCOuSkuWPtdGW", "WOZcNxtdTIxdR8k3j0uQ", "lSo9WOxcO2FcPuGvumkS", "WOXrcmodW4NcNSk9pLK", "r8kIp8ktWRbEaq", "hSk/l8kbWRDzf8kdudy", "wSkSpSkgW6Hjf8koaN8", "WOyiWQeffSkTWRmdnaO", "W6DmWOZcLCoQcCkiW7TgWRu", "ymo4WPLdW7r4WQ/dMetdRa", "bmo3W5ddLuvyWPdcN8kZW6C", "wSoekmkwkSki", "xCkQWOhcLqabWP7cNCk3WQO", "W5NdUCojWQBcIsydWQhdGSkr", "g8opdq4iq8oTW4SZW7W", "fSodW6ldGt3cL8oAWOG3BG", "W7xdM2ZdUgtdISkWlumQ", "AX7cV8kYW6NdN0RcH8oSvG", "smoDW4FcQNuEAWGQW7q", "WQFcJMtdSNFdRmkG", "dmoxoCoijSkdWRJdLSkDW7S", "WQhcT8ozWQ7dN2S", "WPVdGSojWQldPH/dOIFdJX4", "W77cOtZcRKPoW6aKr8on", "dSkAvSonW6CrwLLrW6W", "uSo+W7qjlhpcNHC", "W6bdfSoiW4BdKmk5AbH1", "pmoJWOtdRCozyuhcNZlcGa", "WO0qjSoVfd/cOmkCWQNdQW", "ASkSW4xcVCkd", "WQOeW5JcNCk9qmoC", "WRa9WQ4", "W67cTCotDfJdQZBdHCoHW7O", "WRzrW71CdSo2W7zwzWK", "kmkCW4tdPCkwWQxcKqr9ya", "W71CW4NcL8o3e8kiW6KvW6u", "weBcV23dOL/cJWFcKri", "dSkAuSobW6Cvo1HtW64", "WQvTWRBcTIdcMGP1WRuI", "yhNdG8oGbSozjJOGbW", "W4ldKCkTlCkTrxjXW5tdJG", "jKhcUmoAWRpcJrxdL8k2ra", "uCohdqOqB8o4W4SP", "ubmUW5q7WRJdKCkCleq", "WRaZd8oxWPviWQFcLmkCqq", "rKtdT3FdSMJcJ0BcNr8", "aSkuk8kbWONcQxzRtSkp", "pCo/WOO4W7/dSCkcx8oeW7O", "u8ovbmkjWRnd", "tuBcSq", "WOtdLNhcT8oAemk+mCkgWQ4", "muJcPSoQWRxcMG/dTmkTha", "WQ3cIJFcNmohcCoKASk7W7W", "juddTmo4WRNcJulcLSoZfa", "emkKjmkbWQOrd8kEaJS", "W7SqaSkuWO/cVCoRmLu3", "umo5W5ZcHGesW4NdK8o5WQ4", "WRCqW4btW4O", "uCkXWOxcNa", "crpdUIpcTh/cJWFcKri", "A8kZW4e", "kuJcQ8o3WRpcJbFdMmkL", "zX8kWQu0W7amW4f4rq", "EvtcGSo+W4K/d8kBW5by", "mmoQWPXxW6KPWQ7dNehdIq", "DhNdHCoKrCoDpa", "A8k9W5PSWQBcUW", "mmk/W5ddOZ7dPXXlfCk4", "W6ldQxRcVfe", "W6XyW5nuW5acWO0caa", "AmkPW5xcNCkhoqFdLq", "AuBdQmo6WRpdKHNdMSkJcq", "FCk1W5ddRdZdOb0", "WRCqW5DjWPKfWOfwx8kr", "ydj8BNddJfn5r8kr", "W5mvnCo+g2BcOW", "ya/dSCo1WRJcIXdcI8oLuG", "gSkehmoFW4ZdPILWcSoC", "tCoDbmoaWQzvfqKkWRa", "W7C6hCkcWOHDW5RcICkFxG", "WOK9kCoTgNVcS8kqW6/cOG", "e8kqeSoFW4ZdPIj1cSox", "WR3dLN3cSmoBaG", "oCkHW5WCW7LZW7FcLqpcPq", "W6zYuCkkW5azW6pdKCocha", "W6VdV2G", "WQi1WRrh", "WQRdGKZdVMVdHCo5dfzU", "mKurWQv3WQXwWPy8ga", "bCoxW6RdHcVcHmocWOaHoG", "W4tcISoPDG", "WRRcUmokWQ7dJseoW7JcHmoj", "ouCiW69IW7noWOaOaW", "W4f8sCkhWPuyW7ldISofeW", "f8oEW6ddPZTSDe0YW7m", "W7HcW73dPSknW5NdLCkpCsi", "WP7dI8kYaa", "FXxcGSo3W6CIkCovWPCw", "pgq3mc3dJbCRgCoa", "bKFcSIe", "W508W7Dp", "iZP9kcZdKLSTeSkA", "FCoyWRdcOHjKhx3cRCol", "dLiTimodt18", "w8kEWQlcN2NdMSkAW5j4nG", "WQ/dRhxcVuzfW6q+eSkj", "j1ZcLCo+W6SokSkAW5WC", "FmomW7hcVa", "W6/cMw3dTMZdGSo+BbOQ", "W7viW5ZcNmoThG", "WQRcQ8krW7xcMXLuW7tcJ8on", "W7ihWQJcSmomW50", "kvmGrmkYWQ7dLYbGxG", "W69FWOmAWPyfWOftamoF", "W506W5vhWPJdL8k2iYxdMG", "v8kVWOhcGcry", "W7zXvmkfW5a", "WR0aW6dcQSozWPFdT8oEC3S", "WP51WQegW53cH8oPvgRcNW", "hX/dRthcQZtdILRdGv8", "WPFcLSoeW77cLu/dRtldHq", "hSo9zSoxW6unxmohqwu", "WR5WWRddPG", "b8ofW6ddIJNcGmopWO94CW", "WP4rWO49W7ddR2CnW5iA", "cWXjW5RdMmkrWRq6", "WQrHWQ3dR27cGq", "W6JdNcdcTYxcKSkTjWrP", "fW/cQwVdThZdIGtcKHC", "bSktpmksmmknW6FdM8kwW68", "smkpWR7dJW/cGZvT", "z1dcK8k7W68/kSkDW4e", "W7f8W7fxWQBcOsPoWObu", "wSk/W4v/WQhcU8oxgG", "W6brW5JcLCoM", "WQ/dTNpcUeDpW6y", "dmo2W4ZdG1WcW5NdL8kAW6S", "WPquWROa", "WOmbnmo6gxpcVSovWQhdTW", "WPqsW4jpW5vbWR9evmkk", "au9Umq", "W7VcQtlcTLfnWRT9rmou", "W4nnW71CaSoWW6nvyX8", "WRG/x8kdW5KtW7xdNCobgW", "WQNcKwhcUJy", "WOhcMmoHhd9PW4/cKCoBWOi", "Bf4lW6DJWQCh", "WO8FWQygdCo6W4TwW78H", "v8o0W7iooNhcJv4Yyq", "WRlcPJpcTujiW7eGq8on", "W60lW4SyW7CoW5qksSkl", "W5CdWRCDbSoYWO5tW7GN", "W45AWRCga8o4WOm", "WP/cJmkbW6dcR0JdSsldLqm", "b8olW6/cGcJcHSobWOuTAW", "BeGBWRy", "ogZdK8kHsmoflIu6uG", "ern8WO92W7RcL8kppXq", "s8opk8klWPpcRa", "ESkrW7pdRvXPtJxdVSoy", "WOubWRWbxG", "wXXRWOj1W6xcGCkm", "ymkLW5dcSmogAG", "WQrRWRNdV2ZcGq", "kCkxW74", "cmksWRJdKaBdGdj9WQD5", "FCoTW4lcTSkel1NdJJFdKa", "W4pdHCkxWQFdUHVcPcNdJb4", "nSkKCCkvWPdcSvhcMSoiW68", "W6ORWRldUNVcNbvVW6i", "ASkMW57cQ8kFEaddGYZdMa", "WOqckmoUfNRcTCkhWRxdSa", "cenRWOP4W6FdMSksoeW", "W4BcJSo9D8k8edaKWPFdJG", "iwCGosRcMbq", "AeNdO8o5WRJcJfFdHSkTfW", "WRVcTcVdQG8yWRP5xCoF", "WPVcKmoxW7BcUfxdOIhdIWS", "lHxcKCo3W6CYp8kaW5Ot", "WPZdGCoZz8k1rhv1W5ZcMq", "yuCncmoKhCkEW6NcPNa", "WQ0OWQSFWRJcSLmlW4mD", "WQS9WRy", "AmoWWPLaWQu+WR7dT1FdPG", "WQaBWR/dRmomWO/dOSoxmW", "W5pcL8osW7BcUbhdSZRdGrO", "W6SJWRldVwpdMbLGWQ4I", "WPTNWQGbW5tcKSkMdZBdJq", "cSklWQddQ3rQzu49WRK", "w8oCW7ZdGJZcGConWPuABW", "W7JdMYddV2ddH8k+k1a3", "Abr/", "WQCFWQtcRmoDWQtdUCobmq", "ySoUrmkiWRBcSuNdK8o2W60", "A8k2W5tdUYldSqXxumk7", "B3xdOwZdR2pcMKBcMWe", "mSkCW6NcR0i2uJVdUmod", "bmkwWQ3dNW/cGwG", "WRmwWRK", "crpdUJ/cP2xcHbVcGqu", "WQepWROtv8oLWOOcpeu", "s8ogn8kxmCkhW6FdLSkrW64", "bKFcQchcUYZdIKVdIau", "WP5ti8o6axpcUCkBWRxdTW", "W4CwWQmrgmk2WOrxW7O7", "WR3dOCkt", "tCorW4FcOrOEAaOPW7m", "WROjWPNcO8kKrmoaWQCwWQm", "W7lcQ8kvpfFdPeRcGmkJW6O", "WRddQ8oiWQxdHdWsW6xdGmkA", "jCkcW7ddQG", "W57dGSkbWRpdQHZcUcZdIrW", "ECkSW4pcRCko", "WRNcTcRdRM4yWRP8s8ob", "W7FcSSkKWQrme8kWWPzOFa", "jmo4WPiPW7NdQ8kCumoxW6C", "kKhcGmo2W6qWmSofW4uw", "WPlcG8ogW7O", "W5ScWQekfSk2WR8gi0q", "W6NdMxhcVmktdCoVcSksWQm", "uSotnSooy8kaWQ/dLmkmWQ4", "yCkrW77dSKCWhttdTCks", "WQBdHxtcTmkecSoOB8kdWRu", "W6CZW7pcUJVdLuS1W7j/", "ECo7s8kpWPdcSvddMW", "WR4zW4u", "AXNcPSo2W48TWPBdMHBcSG", "hSkVjSkiWQzxrCkchsi", "b8kBpmkAmSosW7BdLSkrW78", "W7tdVmoVW7eib8kRW4SGja", "F8k+W497", "BeFdHSk0WRHXESoiWPvF", "oCo9W7pdRSoDAfpcMglcMW", "W7JdNddcUZtcJSoGBXu4", "W7VdUYldVCophSo6ASk/W7O", "iSk5W5ZdUxFdPHvgd8oM", "lmk4s8kvWPdcUvVdK8oZW6S", "WQRcUCogoaBcUqhdMCkIWQe", "CSk0W5ldPYpdQbzdgq", "WQfMW7bmW6/dTcKcW5yx", "zmo4WPHxWQHYWRFdI1NdRW", "aSkAW7ZdO1WVh33dO8ok", "of/dSSkYWPP0W50", "Cfbhw8kLbSoqWQFcSgW", "zmownmkskSkhW63cKSkkW6W", "oaOpW6fRWRieW5uQbG", "qCojfW", "xCkkEmkkWPZcVhSVsmkE", "pqCgW7HZWRDwWPXUtq", "WP7dMSoCm8oGdsyOWP7dHq", "EepdUmk8WPn+W5xcHXdcPW", "W7ihsSkrWOBdHCoIr0GW", "W7yGh8kwW4CvW6tdNCodbG", "CqCD", "A3ZdGSoQbSonjJeGgW", "qvBcQa", "WRXcW63cS8oCWONdPCogm3S", "qLBcRNRdQw3cHaZcLr8", "xCkYW5VdUZJdRumhmmkY", "WRG6tCkuW5WzW7lcN8kt", "WRqTdCod", "W4tcMCk8vsX8W4JcNCoCWOW", "wSocdaaqAmo8W5q7WRi", "xmowbmkEWQu", "WR8wWRNcRCokWOhdUmorpNq", "AGhcUCoPW4DDWOVcHeFdSW", "ESk9W53cT8kF", "WPdcHmoiW6hdP0/dScNdLb8", "WPhcMSkCWRhdUHZcTgJcKL4", "WRZcQCkanX3cSrpcKCoXWRu", "DmoudqioECoXWOv1W7S", "WQyqW5fcWOvoWPTvx8kn", "WRPzcmon", "WOPGW70CW5JdLSkGw2tdMq", "W6PGaCojW4yoW67dLmoita", "j8o8WOJdQCoBAKxcK37cLa", "WR/dLNW", "WQHEqCkjW4dcGSk/yKqH", "z8kSW55QWQa", "g8kfAmoDFmovWONcI8owWRe", "dSoemmkcWPtcRdO0qCkm", "CaPjWRrRWR9BWPCLuW", "WRtcSCoTWQfvqmoUWP9TBa", "hSkWW7mEzsddGWDZEa", "BCoDWQVdR1m2wJtdV8kc", "WPWFWPhcKGddQCopWO/cIW", "WQHFjCoCW5RcGSk/AHP/", "r8oqn8kAW4FdVIP2hCkm", "kCk5W4v9WQNcS8oAcCkwWQW", "hH/dOZhcQdNcP1ZdMea", "W4pdHCofW7lcVL3dRsBdKb8", "WRVcIghdO3ddNq", "pv7dUCk1", "WOD0b8oDW43dKmkzDHXN", "vr8UW5zwWRRdImkboea", "zxVdKSoPrmofkZm7uG", "D8kjga", "WQ5zfSoAW4hdNCkXAXrJ", "e1jTW4eP", "W7dcUmoomadcRLVdImkHW7q", "W75VW7PjWQ7cVZ5sWOrA", "y8k5W49KWPFcRmoBeSkb", "hmohW6/dNJhdLmkaWOi0BW", "WRRcMxddU2tdJCk8", "z1NdP8oWWQNcMKxcKCkYdq", "WRi1WQewW7hdVZigW4iy", "e1XRWOj7", "cebPoCov", "prVdMmk7WRrXBmk+WOrh", "DMGZmsxdGq43amol", "sL/cS3ZdSa", "W6L0b8kaW5WiW6tdJa", "WOeFWRmzbSk2WPncW7O9", "W4VdJ8kqWR3dVW/cTxVcL1G", "sX8Uy8kqgX1ODMO", "W4qyWQqbgq", "D8kRWOVcR3FcPvKhxmkP", "BCoTW6mFkq", "ydJdHmo1uSofkMTRdq", "D8ocW7/cTCodWOJcHqvYDa", "sCofW6ddNs3cGmkq", "WObaWRSCt8kWWRfhpei", "W7ddUCkqW7tcJNuwWQNdGSkC", "WR4tW4XuWOncWQ5JEmkL", "WQa6W73cQI/dLvOHW7XT", "WQ/cUmkDW6FdIMvkW7xcJCop", "sSkkEmkJW4ZdUJz/cmoB", "v8kIW4FdKHnnWOxcMSkZW6C", "W6JcRhNcO0DGW7yPnmkF", "WOfhW7bsg8oLW7PhCqC", "ACkLW4nLWQZcRCoxbG", "WQVdMhtcQa", "qmozW6ddPg5SpfqGW6i", "WOKIW7fbWPVdL8o/qdtdIa", "WQJcOSk0W60oaCkVW58SjW", "W6nyWOnwW5uaWOTavSkm", "W6ddTx/cUfDdW7SI", "Emo0WOy", "BHRcO8o/W4qPWOJcMetdSq", "WO3cTCowELNdRuxdHCoGW7O", "p17dOCoVW411W5ddNfFcPq", "W4WMW7HgWO7dNmo4tYBdNa", "CSoYqmkiW4pdRH3cMSk4WQO", "ACkHW4nQWQm", "sre0zmkcgX1/Bg0", "WPJdUSoEfMS4WP7dGSkcWP4", "W7ldNdhcONxdLSoIyrO2", "pmorW63dUa", "W6bse8oDW5ZcN8k0jaTP", "WQvsW5nhW5ClWOLlwq", "WPebWROtfSkRWRuvpey", "W7GvW5ZcI8oQgCkz", "WQNcTSoRW6jExmoMW558Fa", "ye5JAWxdNKTRvSku", "WR/cQmk3WQXq", "WQPrcG", "iZJdK8k8dmoKFMvPxG", "WOtdLNhcT8ow", "W7zNWRhdQ3ZcHKCMWQ8L", "smoylCkdW5dcVwOQsCkp", "zHddS8kWWOvWW5ddHaFcSW", "mmk2WP5yW7C", "EWddP8oUWQJcLHVdMSkNwG", "pLZcT8k0WPXWW5ddHLFcSW", "zCoAW5m", "m8kDW6lcOLSQtsJdPq", "dfjXW4n0W6BcHSotobW", "pSo8qmkFWOdcOXi", "dCocl8kcWPlcQx4", "e8kuW5BdVergkKe8W6K", "k18L", "WP1uz8k7vs7cO8kfWQtdRa", "WOyuWQ8adG", "f1jXW50RW7RcLmotDLa", "FCoyWQZdTLzKxJhdSmoC", "W6GUWQCAW7RdOMznW4CB", "e1S/WOv+W6xcImkppXm", "lLZdNSoQqSoBjJTPba", "W7T7WQ4wW7JdOZvpWOLi", "W4XFWOBcL0RcVmouWOu", "lSoTWOpcVw/cS08ltmk7", "WPpcImoWBmkTrdPGW5hcGW", "W5fkW6aCc8oOWO9EW70N", "BgZdMSoT", "gCkUWO3cKWjjW4NcH8k3WQO", "WPL1WQSyW4pcG8o2ixZcHq", "tCotW67dVwaZyLuYW7m", "W6zDW4hcLSo1h8k/W6qhWRe", "W6Kqv8kBWOBdHSoTjeG1", "yaDrvCk1eSosW67dVIu", "jSkPW5JcQmovzbddJYJcLa", "W6/dSmoUW7mqa8kYW4mGia", "nvhcImoTWQyYnSkjW4ym", "wmktWQ7dKqpcGZfN", "BvCdgSoTa8oqWR/dOhO", "W60bsmkrWPddKmoJkK83", "lmk9vCkiWO3cS1JcNCkM", "ser1iCoerun4FdG", "rfldULpdVMlcJqdcLqe", "lmk5W49XWRZdOG", "W6GhWR/dTSkeWPtdSSkiy2K", "kSk9W4TTWQZcTSoCd8oEW6S", "u8oaW4/dJGbNBHrnW7i", "t8ktEmkdkmknWQNdL8kqW6y", "emoCWPJdUvTkEXO", "sCoyW6RcJsVcGmoxWO09pq", "W7rWW7a4WQ7cVd5rWODu", "WOjxW6DuvSo/WO9eWRyX", "jZHYFgtdJa", "mmkgWR/cPZCMmrbGWQK", "kSkDWQddOSkCW5JcK2nBamoLq2G", "r0i9CSo9gXrQDbq", "WOaaW4NdHH7dPmkoW4FcHhy", "W4qrm8oEgxFcVCkqWQVdTG", "l8oRWPNcVMxdIuGxumkK", "zmkMWPpcGrjdWPVcI8o2WRG", "lSklWQ3cPueHuthdTmoD", "W7ZdRmoVWQBdNta", "Emo0tmko", "qCotkSkf", "W4ayjSoObI/dT8kxWQRdPG", "W4FdQSoNke07WPNdHW", "W61Vwmka", "ECk/W57cUSkEmW", "pgS3mJdcIGGRg8kg", "oeSzW710", "bmo+W5JdH1qDW4NdJ8o2WPK", "W5pcISoaW6hcRv3cQtJdKGu", "WQBdKw3dUgFdH8k1jGGP", "WP5LWQerW5RcH8o8thxcHW", "b8oymCotlCkiW7FcLCkCW6G", "amowW7VdQMK", "h8khF8oEW53dUdz2bSoF", "W6S9s8khW5KpW7lcHCkkqq", "CmkRW5RdPJtdOf4z", "WQ/cUmkoWOtcMgfiW7FcKSoF", "frZcRNVcPq", "nSkKbCoAW4tdSb3cMSk4WQO", "iLDkv8k2", "WQaZWRa8W77dR3O", "W7Wwk8o6g3K", "WRSdWQZcQ8orWPtdR8kmBIe", "WPbhW6LguSk7W5CdWRHR", "WQqsWR/cRCowWPtdPq", "W6PtW63dQmkyW5ZdOSoeytO", "Fgi7oY3cMay1", "WRubWQZcPSkAW5RcTSku", "AH/cQmkPW67dI0/cH8o7vG", "CeKmW6mNWOL4W5iTeG", "W6pdUhBcVebE", "W6uWWQ0yW7VcOwevW5Wh", "CSomW7ZdTmoiWOJdJLbBma", "kCkRW5JcPSkopfxdJZpdHa", "vSoTW6yzma", "a1PP", "a1PPW503WQNdHmksofa", "kriJW4X/WR3dMSkoAe4", "WRpcOmkHWODts8kJW5q8nq", "WQXrfmoAW40", "W40zW6OvaCoVWO9uWRfS", "a8oQjCkxWRzvsCkBgt4", "W6tdGglcSmkg", "W7JdSNNcTW", "W7FcQSouBeNdReVdHmoKW7G", "WR/cTI/dUrmkWQrGtmon", "q8oTW6atnsBcJqz1kq", "W7TiW4NcLW", "BmonW6ddUGLMa2hdS8kr", "iSo7WOviW6q5WQJdI1VcPG", "kmktWRddTLSGxdBcSCoB", "rvRcSJ/dVwxcHG7dK14", "nuSkW6a", "neSBW6m", "W7ZdTSkDWRldHYetWQ7cG8ky", "cmkOWPdcHGXdWOFdJ8kGWRS", "WRa9WQ4mW7RdVW", "B8ouWQhcSHXWcN3cPSkb", "F8kPW4ddVhFdQra", "WQhdRmopW7NcLseoW7VdS8kA", "aSk/WQDAEZZdJfm9Aq", "WO5aWORcHuRdUmozWOtdKt0", "WRNdMga", "e09Vo8kocG1MyhW", "WRnue8ocW53cHmk7ArGR", "W5TxWQ4zdCoGWOjBW6uI", "W6JdNcdcTZNdISkWnqrP", "zfi1u8kCWP7dGZDisq", "WPSwWQGBW4hcGCo2qhxcMG", "jmk9g8k2WOxcUvpdLmoHW6S", "lCo+tmkmW4tcS1hdM8oRW7K", "dNqmDCkEWQ/dHYbpxG", "W4izjSoVst3cPmkrW7VcVG", "qCodar8", "WPanWQSCtW", "WQZdTN3cSe0", "pmoQv8kvWOlcUvhdNW", "WQ3dNMBdR8owemoOFG", "q8owl8ooWPxcUJO2r8kj", "nblcJSoRW7u4D8kyW5Wt", "e09MpmoBs14VFhm", "W7bvWPBcL1dcTmovW4VdTcO", "iLOZuCkqW6ZdLYXsqq", "WQpdMYddPhhdL8k1jHKT", "W4tcGSo9l8k9rhb5W4tcKq", "W6CXW73cUshdJvOWW69J", "o8o4WPhdRCofBKpcHM/cGG", "vSohfqC", "jxqNoq", "WRLraSomW5RdNCk4yrvV", "BYzYFgtdJeD5vSke", "h8kxW5hdG3mfBq7dHmo9", "WQ3dHIRcNq", "WRXRWRtdPa", "W67dSCohWQi", "WQldSCkeAu7dQKldISkbWRe", "W57cISoaW6hcOXW", "amoCW6RdJcZcKq", "WRJcUSobDeNdUfNdM8k1WR0", "W79wcCogW5ZcLCkOkrrJ", "BCkOW55nWQNcQ8ox", "W5pcLCotW7lcUHVcUMJcGeO", "DrVcQSkUW6ZcQuNcGmkkvG", "t8kCWQxcNmkwW53dTGycgq", "BLdcLCoDW7m9nSkXW5aE", "vmochsGjFCoUW4O", "w8oFc8okW7KzrKimWQS", "WO7dSKq", "emkKpSkcWQHJfmkzgte", "t8ohl8klWPpcRa", "smoDW4xdLqCDCbnAW7m", "DmoIuCkFWORcTa", "faz0nmosrKG", "WRVdNgBdUhhdGCo5m1zL", "WQXvca", "WOWEWRmrb8oeWPzaW78X", "zX7cSSkYW67dI1JcH8o0ra", "WPddJ8kXiSoLaNn5W4BdJG", "W47dJf3cShLZWR82cCoA", "aXnSWPDUW6xcGCkpoHi", "WPbzfComW4BcG8kZjevK", "aSk/WQDAEYddGWb3iq", "W6C2W7hcUKZdGfqYW6T/", "W7vYW7vbWR/cVIboWObu", "iLqTuSkuWRpcJMjIrq", "vSkUWPm", "W78wW5DdW5qZWODs", "aSouW7VdOhD7", "bWdcMs7cRYldKL3dMey", "WRRdOCkzibNcUrhcGmk0WQy", "ndxdN8k1e8kzyJHKba", "W67dSMxcT0LFW7KNfmkb", "m0SBW7XeWRfvWOCKhq", "WO4cW5ldMG/dO8kvW5JcJgq", "sCo4WOq6W77dS8khrSoCW7m", "oLpdS8ksWP1WW4RdMq", "kmoRWO3cO2FcQe4lt8k7", "zwldNSoLh8kCyseSdq", "WRRdRmkeoG", "WOupWR0g", "C8kAW7/dUH8IuI/dVmkc", "WP8vz8o4gxpcO8kgW7JcOa", "sCotaCkiWRKawH0tWRO", "BfNcHmo4W7jXm8kmWOHy", "W73cQSovyLddOvldHmoMWRG", "DWxcPmo/W4GHWO/cMuBdTW", "zmk5WOXzWQuZW7RcNLxdVG", "nemFWRyNW74zW5jPuW", "BCo6WP5zWR86", "lmkTW4qiW6LUW77cLWtcQW", "sCkdW6ZcK3JcH8oBWOu5Aa", "o1DavSkWfmokW7tdP30", "WRpdQmopWQJdJsafWRhdOCkq", "W6BcJg/dPhhcG8k7lebZ", "W6VdUCor", "WOhdG8kXmmoRhdSWWOldGG", "BvZcHSoYW7iWnG", "gCkxtKvxk8orWOHIWRe", "WPT5WQGBWQ7cG8o0thxcMq", "ogZdHCk/f8oDj2GdcG", "EmozW6BcPG", "hr3dQcJcTZ3dKKxdH0i", "WORcHuNdSW", "W6tdLhZcVSkfvCoLoSkAWQO", "smohW6S", "W4uDk8o+bG", "sCkerConW7yhwK1FW7S", "juPwWOC", "vSkzWR3cSe0VjW9KWRe", "C8k8W4FdTNRdSGTgdmk3", "b8kBkmksmmkeW7tcJSoxW7O", "ur0OW5C7WRJdNCkClKC", "WR7dVCoqWQBdGdLlWRddKmkA", "WRL2WQNdQ2hcGufJWR0U", "WQFdSmogDadcVfJdK8k6WR0", "h8kgaCkeWQahgqeEWQG", "cfvLEmofwuG0", "W4eHW7re", "WPibWQKtv8oLWR4oouy", "hCoyW6pdGq", "W6BcIg/dUMFdGCk1BLr4", "W7fwW4VcKCoIcCkvW6qhWQW", "n1ldUCk2WOv5", "WPjfACkPwspdOSoBW73cTq", "W7fMWRldUgVcKaGSWRm/", "CvHqsSkWcCkhW7xdR3u", "wSkpWQ3dKX7cHcjT", "E212E8oaW7pcN3DIha", "gmozamkdWQjccePbW6C", "WQ1UWP3dISozwmocWRrjWRi", "x8kyWPlcPrfdm0v/WQm", "z8oZF8kQWPZcVhSKr8kD", "aSoeW7ZcTczQFKWXW6G", "rCoslCkpWPpcONSOqCoa", "W6befmkjW4VcNmk7DWO7", "aCoEW6FdIJ/cKCoC", "W4OhfCo+fhBcQq", "hmkxB8ooW43dPcPMf8ow", "W4VdVCo+fMSTWPRcLSov", "q8kxWRpdRwHOmui/W6y", "jbLhx8kPkmoF", "rWyGDCkqcG1MFdG", "WQtcHtZcUgFdM8kTn0TK", "sCoyW6/dJZtcKCkoWOi0yq", "WQ41WQyC", "eSkyrrGtE8k9W48ZW7O", "tSkOjmkaWQ1Df8kchdm", "v8k5jSkcW6HEc8kpcxu", "yWnktSk9aSkuWRNcQxu", "uCkCwrKcFSk1WObPWRm", "omkvW7hdQ14", "W41oW75hf8o3W6Pjzri", "WOjhW6CgdCo5W44aWQnY", "W6DtWPjUWOeIW54lbSoA", "W7rtW63dQmkyW4dcTSkwy2K", "krVcKCoPW6K2kmknW4ym", "z0BdOSkHW7VcKaJdHCkRsq", "WRhcSmk4W7OCd8o/W5nKzW", "kmkbWQxdUSkqW5ZdRayeFq", "WPnnz8kQrJZdOSodW6xcSW", "cmoOWOZcM1S", "W4ldJCovW7FdTadcQZZdKLq", "W6ddPSkoletcVGRcHSk8W7K", "CNy7mc3cHay3w8kw", "wKFcU2VdRN8", "W4C0W7rj", "dmoeW7VdOg95Ce9ZW4y", "WR3dKCotWRhdHJWfWQdcN8oq", "W6eWW6VcUJBdMeGVW6v6", "exVdRKNcO0ddM1NdLea", "bfXXWPDYW6FcKa", "WRajW4jvW5OtWOfvsSoz", "WQpcPmksWRtdMtqiW7VcG8oF", "ur0SW5S7WRJdNmkClKy", "q8oEWOxdRe9dorO7W6y", "FCojWQlcRGnXFMZcO8kb", "ae8GmCovreONlNW", "WPpcTmo6axbPW4hcJCoeW4y", "W7f4rCks", "WQVcKghdPhy", "r1tcJmo6WQyDp8kgW5iu", "WQHFkSogW5/cLCkOrXH1", "amo0W5ddGfyAW5hdGSoKW7q", "W5WNW6TnWOhdHSkhdYJdHG", "qSomW4VcPqSsyrKMW4W", "F8oeW7ZcSa", "wCkoWQ3dKX7cKhv3WQ9+", "W5ayWRiAdG", "c8oAW6ZcGuxcGtD2WQv8", "gmoXW6GupJ3cHr5Xkq", "tCoBpSkDWO7dTt0Yq8kw", "W4DqW65eD8o0W6Hhyby", "WQuLA8oxWOuYWQxcISo7ra", "lmkrWOtcU3NcT1uwsSk7", "Bx/cOSkhW4aOW7JcMfVdTa", "s8ovkSkaiq", "W4fEW5VdIHhcSCosWP3cI3G", "qmkVWPxcNWC", "eSo0zmoqW7nWvCoBxMe", "WPxcQmoRbxyR", "ns7cL8kWgmkhEMikxG", "feaIW4r+W6RcI8oCnrG", "fCoshaCeDmk9W5q/W7i", "W5NcGCk8zCk2qNb8W5xdLW", "EeFdTSk/WPTWW5FdJvRcPa", "omo6WP/dRmoEDexcKNdcJa", "lfqIq8kc", "uXq/WPr+W63cKmoAjvC", "WQuWWQSAW7q", "i8kRc8oiW5pdVaZcJmk2WRK", "Bmk4W5JdOchdOdPlhCoM", "s8osrCkjW6San1XnW7C", "W7tdVmoVW7iobSkTW4CGjq", "crpdUJ/cUYZdIKVdIb4", "WQRcLw7dS0ZdGmkPnLb5", "smoCn8ke", "W6FdP8k/WRfzxSkZWPX5yq", "WRddS3hcVGnoW7u4hmoa", "sfhcS2ZcVdlcOGRcLHG", "WRKlW45kWPquWPTata", "n8oEW7FcTCowWO7dIbPzjq", "jwmQka", "Dmk3tmkzWOVcVHRcHmkKW7K", "WQ/cMxtdKMNdI8k0jKP+", "DLnZfSksWQ3dKJzsfW", "W49cWOe", "tCkbvLvfpmk9WPL6WR8", "W4ygjmo0g2BcTCkBWRhcRa", "dmkDWP/dVfnRm1n1", "quFcT3m", "W6JdNcdcTYxcKSo2j018", "kmklWRFcVbjKas7dTmod", "WQFdRmkaoHZcRatcMCkW", "W7tdTCoCWQVcIsudWQJdGCkA", "B8k1W49Q", "xCosfaC", "mgG8otBdJa43bSor", "vCkmWRldGIJcGmohWO42ia", "W6tdU3JcTLqqWRL0dCkv", "WR8BW4igW5qeWOzbx8kt", "BvdcH8o6W7m9lG", "FbFdOmk4WPvLW5hcL1ddTq", "WR0BWQZcPSkvW5q", "pSodW6ddIZhcHSodWOaRAq", "W4mAWQuvaSk7WQ5tW6q1", "W49uWPZdIaldUSopWORdLYG", "WPtcV8kUsMeIWPddGSkoWO8", "yuhcJmo3", "WO8hWQiAcCo6WPrBW7C8", "vCkCWQ7cNxtdHmkoW5bTla", "d8oVW64wmNtcJr10mG", "tLRcRN7dTYddHaNcGqu", "WQZcOmkDW7tcH2vvW6xcKSol", "WQi9s8khW5KpW7lcHCkkaG", "pLqMuCkDWQq", "W4mEWQKAe8o6W5ODW7KI", "WPayWROtsCkGWRThoem", "u8oBhmoxWRrlfq4uW6a", "FgiZkcxdGrCRgCoa", "BeFcK8o0W7q", "funWoCorsuG", "BH9xv8k9sSojWRVcR30", "FSkisCoFW7yxwL1tW6S", "dmkksfTllCkQW7vRWQ8", "c8kyWOldTfm", "W58UWQfsC8kvW7bhAWC", "WOnrWONcL1pcTmopW4BdGdC", "W4qqWPBcGKFcUCoEW5BcLYy", "iSoTWOneWQu6W6RdKuldPG", "W7O1W6RcPd3dGIaJW6jX", "r1jPiCoCtXbKaZq", "j1ZcJ8oRW7mLD8kyW5Wt", "WQJdHgpdRmorwCkRmCkDW6a", "b1RcRNRdTLpcMHNcNri", "WPNdNmkDWRZcQWlcUgFdLa4", "W6qOW6ZcUc/dLvPIW6PJ", "yXnctSkWsSokWR3cOw0", "WOaqW4xdLH7dTCkhWO/dNdi", "WRfEdmowWPToWQtcMmkuxa", "sfhcV3pcU2RcHrNdIvy", "n08DW4fZWRTu", "dmoTW6yopJe", "WPFcS8oIrcW+WPBdNCkcW4O", "iGuzgSoYuSoDW73dT30", "smospCkb", "FHX/cSkbWQddHY0bta", "c8opW5BcUbypFaq7W6y", "WQdcUMRcTLzjW7WPd8on", "uSoHWR/cLhBdHmkzW4fPmW", "CXvYfSofW6/cI2utgG", "kHjxF8k9aSouWQZcRM0", "WPypWQiExSkMWQ4opKK", "W7z0uCogW5etW6ldImojeW", "bCkoWQxdIqBcIhTKWQL8", "eK0GiCoztKWTyc8", "pmoNWPxcRq", "WQv0WRhdQ3BdJXnVWRaK", "ErFdOmk4WPvLW5hcL1xdSa", "WPVcJSkFWRpdQHZcPhtdIqq", "W4Cvm8o6wglcOSkCWQBdPW", "W57dGSkbWQ/cRLxdSMJdGWy", "fW/cQN7dR2tdIG3cNr0", "pSk5WOJcQbRcTeGjrmkM", "W77dVCotWRpdJcDhWQZdJSkp", "WOZcI8o4Dmo5tNTXW4pcGW", "W7ddUCoAWQldNtOjWQNdKmoF", "gSoAW7JcK1RdMxOMW7a+", "s8oblmoEnmkfWQBdM8kqW6G", "kCkJW4vKWQFcRCkFhCkxWQ4", "D8kVW4BdUW", "g8keDmodzmoDW7JcNSobW4q", "lSoTW5/cV8kgpuNcGtRdNq", "W4xcHmk2pmo5dtCWWPddKa", "of4Yu8kdWRFdLIfNqW", "WRqowSoDW4ddJSkEyq1N", "iGvxw8k/e8kcWRpdRxa", "WQisWQe", "t8obWOBdOa1ynubVWQ4", "CwOZnsO", "x8kyW7VdOt8IzuvTWR0", "cSoJCSovW6unuSofrge", "xmkbWPFdTLXomKm2WQq", "t8ovnmoFASkdWRRdHSkrW6y", "WQj3W6dcVYNcHG5GWQ45", "EWddSSo4W6ldG1FdGSkWwG", "sSkkWR/dMfddJtv7WQX8", "WPDpWP1wrCkLW5ODW6uK", "W5TrW7DscSo2W7rqzqS", "EmoEW6hdQCkdWO/dLunepG", "lmk9fCoAW5tdSa/cJSk4WRG", "W5ZcGmoWzG", "qCoWW6KopNlcMa", "WPL5WQGzWQZcGmo0thZcHW", "C8kkW7hdTLDPdh3cV8oD", "lmk9fmocW4pdRGhdISo5W74", "x8ksW6ZdMvFdIHSHW64L", "WQJcOSk3W6HmqCoXWPD5FG", "WPWwW7box8kSWQXhmKS", "W7zzW4/cKSoKcmktW70iWQy", "WRPCW43cJCoIe8ksW7GtWRy", "tmkIp8kjWQe", "WQCwWP/dGmk1tmokWR9tW64", "W6xcM2hdPwZdNCo0iuv9", "yvDqu8k9bSorWQlcOxC", "pGnrw8kIdG", "WRn2WRhdQ2tcGeyUWQXZ", "aSoRW74kpIhdIWDKpG", "lCk1rmoeW5JdV1hdK8kM", "A1RcHCoI", "sfjYA8kqcG1MFcG", "WPWwWQGyW4hcHmoOvgRcNa", "WRfMW7xcUd3dHfyHW65/", "ovLavCk8smkuWRRcJfq", "W5ehWQSDhG", "mCkxW7hdPG", "W7DWW7nzWQ/cRcjmWOzu", "emkxWPa", "WQVcOmkeWOtcM2ziW7ZcLSoh", "W57cQCkjW6NcM2rgW7BcG8oo", "fCoyn8ksimkfWQtdLCovW7W", "WRHWWRJdUdtdLq1OWRG5", "ivDhu8k5bSojWRZcSW", "FSkGW4y", "kKRdSSo9WRJcNGZdLW", "lSkiW7ZdQ0y", "W5lcISoJASk4xN58WPdcLa", "iKhdSSoFWRpcKXFdHmoLra", "q8oEWOldULLljrO", "aCodW6NdIJtcKCoTWO05CW", "WPNcTmoIc2mQ", "WQvyWP0", "DSkKgCovWOpdRGhdNCkMWRy", "jM43lIe", "WO3cJSoiW7dcRW", "W5NcMCo0oCk9rgrGW5ZcKq", "eKSGjCofrfqNyd0", "CaPjWQGNW6jDWPS/uW", "WOiBWQyDba", "WRCBWQZcPSoFWOu", "C8krW6tdP18wuIO", "W7e6WPBdR23cNbbGWRCS", "mMlcKmkHrmozlJuGgW", "tmoohmkbWRnkfqKA", "Bf4nWQHKWRjyWOe6tG", "r8kFWQldMH7cHq", "sSktWQdcNutcNt94WQL4", "W7NdUCojWQy", "pLBdS8k0WOm8W5VdJXVcRW", "jKVdO8o4W7VdGutdN8kSfa", "W79yeSoeW4tdNCk/ybbY", "aSo3WORcQaPOWOJcLG", "W6NdNN7cOCkdrmoLkmkAWQK", "WR8lW4OlW58oWPXk", "W6rMW6jB", "W5hdSCotWQZcIrKjWQldJa", "imkTcColW53dVGJcMSkQWRS", "WRRdVmoCWRpdIdWiWRxdLSkl", "zu5JArldNY9Go8kt", "WORcJCovW7lcPL7dOtRdGr4", "W6VcRCoAoX/cVrFcKSk9WRS", "fvz8WOz5W73dICocDWm", "afzRWQjJW73cLSoBEGu", "W4OdWQOy", "W4pcG8o4yCk8", "EmoXW5qmWQu2WQNdNfFdUq", "wSkYWPtcKWHnW47dKCo2W7O", "WPBcLSomW78", "W580W7u", "vCkKWPtcMXnj", "vmokxLu", "fGBcOCoXW4aIWPFcN0pcHq", "mSk5W5yFWQ8WWRxdLaJcTW", "kmkBW7JdP0bPsI/dSmoF", "kf3cU8k7WPlcKbxdMCkWra", "W5vrW7PCcCoXW7PwzWC", "pc3cHSkYgCkfFNH4wW", "Fa5SbSoFW7dcGhiugW", "W7fwW5G", "WOldG8kGoSkphYvyWOhdIa", "e8kqamkmWPhcQxqTaCoo", "aCobW6i", "CedcImo0W7yRiSklW4mD", "ymoAW77dRuyTwZtdUSoo", "WRHzemkxWOJdKmo6jfKM", "W5ymWQetx8kGWQG", "W5vaW65osmk1WRSjB2q", "WQywWPNcSCkYsmkkWR0oW7q", "B8kSW4LH", "W7VdSCoyWQpcIx0RWOhdOSkR", "BCkTW5tdOwK", "CCoFW7FcSG", "WRmyW5JcGmoZh8obWQ8fWQO", "uCk1ASojWRftemkkhci", "WRRcNw7dS2RdGW", "emo9CSolW70sv8olqxW", "W49wWOZcMLS", "fmopW6xdIIRcM8oBWO88oG", "WQOyWOZdMCkJwSoCWQHgW74", "WP8tECkNwNxdRSojWQlcVa", "bmoQW5JdN1ycW5ZdL8oKW7C", "WRmAW49pW5SeWOrme8kx", "f8kfWPVdTa", "WO7cPmk7WQDDw8k+WQn+EG", "W5ScWRSgt8kQWRq", "h8odW6FdGW", "WRddRNJdPX9lWRqKd8ki", "W7ZcLYhdO8oAaCoXCmogWO4", "CN/cICk9wmozlJH3kG", "jbTpb8o2rmo/WO/cHL8", "pbxdMmk1WRDGESozWOXr", "ErpdTSo9WQJcL1JdKSo/qW", "EmoFW7NdS8keWPNdMuDvBa", "iripgCkYcmoxWR3cPxC", "WPXsW4xcLvlcTmoiWPJcIgm", "W7OrWQJcPmorWOldS8oAnJC", "q8oEW6VcTczUEe06W68", "WPanWQ8Bv8ktWR8voee", "EmoXW5qkW6K", "WQT/uSkEWPGCW7JdISoaxW", "b8oakSonEmkyWQlcJmkOW6W", "qCkuWR3cMxJdLmkoWQjPna", "hmowW7JcK1/dJwCMW6WK", "xCoOWPVcUwBcPuGtuSkN", "W5zrWONcG1VcPG", "dSkcymofDmoyW6FcG8owWR8", "kmknWQpdPSkiW5/cKg0xCq", "z1dcK8k7WQGLp8kqW4fs", "p8o3sSkiWOhdVu/dN8oRW78", "nKmAW6fS", "WQZcOmoRW7pdOwDuWPpcM8k3", "W6NdU3JcVfehW7yPeCke", "WOaejSo1h3pcVSksW6JdOa", "WPnuD8k3rtldPmozW7tcSa", "mCkCW7tdJHBdHdHMpCoD", "r8klgaGrDCoRW5X6W7e", "qSkMWOW", "WORcJCojWQNdQMNdRZ3dKGS", "x8oDW7lcGqBcJdrXWQWW", "c8ohWQJcTW", "WRZcK27cUNxdI8k3iev4", "lCoUr8kvWOdcQqm", "E8ovpSkgW53cM24NuSkB", "W6uEuCkDW6tdGSoOkeG+", "dL92WOT2W6FdMmkDEGu", "W4XqW6CDdSkMW4fEW7K1", "WOO9W61fWOpcN8k0eIVdJq", "k8k5WOnuW7r4WQ/dMexdOG", "W4tcJSoLD8kQeda", "W7FdOMdcVCkzuCkSFSk1WQi", "WR1zcmozW53cHmo9oLKM", "ASkEW5RdOZJdT1ShcSo8", "CComW7ZdTmoXWOpdLejBBq", "W518WOZcOmoSd8kiW70eWQC", "W4ixiSoZgN7cTmkqWRFcVW", "WP5IWQSeW5/cN8oYtNpcMq", "FCo1rSkBWPdcUvldLa", "W6RdHIdcTq", "CWXYg8obW6/cG3CwhG", "omkzW7pdQG", "W7JcQmoqzuFdQvdcTCoLW7O", "E8kLW4hcOJBdQrbaeSkV", "WPTuD8k2ttZdP8ovW7BcRa", "WPayWROxvCkH", "W7zYWQRcPeNdPCoWWQZdKIS", "gSkJWOhcHGqbWPZcNmkZWQG", "b8kBpmkAmSosW6RcKSoeWQy", "sSkoWRJdNaNcHrnIWQv+", "W6r5wCkJW4mFW7NdJmoHgW", "BmkKW4rT", "WRxcRJZdOa0tWQjGsSod", "W4rtWOjdcmoLW6TwFXu", "W7NdICoqzKxdQvpdMSoKWPG", "bSojW7ZcIMBdImkbWOuXDG", "W6noWOmxWOHbW5KxhSos", "WOCoWRBcJ1/cP8oAWP/cLq8", "WOxdP8kPdhyJWPpcNmkBW5a", "gGdcGdJcTdldLKtcHWC", "l07dTCotWQVcKsJdHmkTfa", "pSoKWPVcUNFcVfCqs8k1", "W7DYsmkiW5e", "W78yW5JcNmoXcCkzW6WpWQm", "W7tdVmkaW6ddNtOlWQFdJmkt", "WRarWP0gWPLDW4Dbv8kv", "j3tdMmoGt8kepcmIha", "ouG2wCkdWQu", "AH1gvmk4fmojWRVcR30", "dmo4BCoDFmoEW6BcGmojW4u", "vSovc8ot", "W4e0W6TpWO7cN8k0eIVdJq", "WRddSmoCWRxdJJrlWRxdKCkq", "oqpcOSkQWRf/AmoFWPLo", "vSo/ASkpW7yCbSkhhZe", "rXC1E8kgeWb1Exi", "t8oCpCkD", "leKUw8kYWQNdKJDIrq", "W6bjWPqqWOLsW4qveSoq", "tmkGW77cIZxdMXjBWOvx", "WRugWRNcOa", "W5usWQKqe8o3W6HwFqC", "ouKmW6z0WRSuWPeMfW", "dmkbC8ojW7qfsmotxMq", "WQasWQdcQCkvW5pcSCkwl3y", "W6mzWQmv", "hmovemkzWQzsdH0nWRq", "W6LkWPSwWOPtW4qtemox", "W6lcHmoGW6Kke8kUW5m8oq", "WQBdP8kmasJcVfBcKmoIWPG", "W4OdWRmegCkHW4KDW7CI", "tmkYW6avnhVcGbyMzG", "amkczSooW4NdQcT0bSoA", "nwm2E3RdKeGQbSof", "qSkufCkcWQvtvW8qWR8", "W6bnACkPqt7dOConW6VcSG", "fa7dPYlcPJhdL1BdIuW", "WPpcG8ovW7dcOG", "aSoEW6m", "W488W7Dm", "emkkWQJdV2bYzer+W6u", "W7zPrmkkW5axW7JdNmoi", "oSkDW6tdI0yHua", "qs7dSSk3dmkxC3K5dG", "omo8WOq6W7RdV8kdwSokW7O", "pSo9WPxcR3FcPvKBcmoW", "vCkZWOhdKIffWPRcHSk4WRm", "pCkZW5tdUt7dOHHufq", "W6FcMZ7cQ2lcKmoLBem0", "D8kZW5ZdUW", "i198eq", "mLpcQSo2WP1+W57dGXNdOq", "W5JcJSoIA8k1dxn5W4tcKq", "nfjHiCofwrfPlYW", "W7VdH8oqzeFdRKNdGmo/W6e", "e8o5W5ZcGrnlW4NcJmk6WRS", "WQZdSCkviaBcTKxcL8k9WRu", "v8oJpCkpWQrif8kkaci", "W4eNW7Xo", "s8k9jSkiWQryaCkpv2W", "dmorW6K", "zeSKwmksWQddGsXara", "cmkZWPldJfLyWOhdKCkyWRu", "W4ioW6tdI8kZlmoiW4bxW7C", "W6PGWRtdVc/cLHzGWQ8+", "mv8DW6a", "Fmk+W5tcSG", "w8oDW7iCpxNcNG", "w8kIWQbkDs7dI009Aq", "xCk0W4ZdKG1nWPVcJSkMW7O", "WO3dImoZBCkHagDIW5/cLa", "pLqVg8kbWQtdNszawa", "iM47ldtcHqK+", "sSo+W6utkdVdJaDOmG", "dmkisL4PlCkOWPDTWRm", "q8kvWP/dRHzmmevOWRu", "WQxdKN7cTSkcwa", "rSo+W7mBlM/cIqfY", "W6SEu8oQWPRdGCo6m1C3", "mu4Wamkce0aIcdG", "buywBmoGx8kxW7/cGYG", "W6DYuSkkW5aBW7K", "mL/dOSo9WQJcMG", "pSkKgCovWPFcPLRcHmkKW7K", "W4eDW5hdKqddVSopWORdMcy", "AHTHfSorW73cNcfixa", "yYPGBaxdLeTHvSku", "WQhdR2/cVfekW7WTdCky", "WQv5amobW7HiWQxcLmkCsG", "zSoGW5P7WQhcVmox", "WOJcG8on", "h8kpF8oCW4/dPcT1Fmoj", "xCoSWO3cOwhcSuasrCkI", "WQHmW4JdHW", "W6yOW6ZcUI/dHvOXW7b9", "lLZdTSovASkjhXmelq", "w8kUiCkfWQPeq8oetM4", "aCojW7BdMq", "xmo7rmkCW4tdRf/cHa", "ybPlWQHVWRTqWPuHbW", "W7fWuq", "W4uWW7TjWP0", "AX7cPSkTW67dK0NcGCkduG", "WQakW4zuW4aYWO1jw8ka", "cmkLWPxcHHfdWOFdJ8k1WRy", "b8oaoCkrkmkjW6RdKCkuW6G", "WRaDdSoiW5RcL8k7", "g8kZWOJdJa", "F8ktWRJdKq/dJqz9WQX5", "lmk5W4OqW6L/W6FcMrBcQW", "ouym", "gCodW6K", "W5CdW6CAc8o2WOmpWReI", "uSkbWQ/cUdiWjbuqWRy", "WO4JW7bmWORdNCk0eIVdJq", "ot/dK8oOwmokicmNgW", "WQjSWRJdPa", "W6VdQ8oIW7aecSkMW4C4oq", "l8oUWPVcUMpdHKWjsSkK", "aSobW6ZdJqVcItj9WQ53", "dKyrfmoGvSkvW7JdSZC", "W6uPWRivW7ddRxyfW5m", "WOzLWRpdOg7cMX07W7W", "obrvW7HOWRjaWPuMhq", "WQyjWOldGmk2wSonWR9iW7e", "WRGjWPVcUmk2vSojWQHwW6i", "W6JdGgtdVNpcJSk6l0v5", "kqlcSSkQWRj/AmozWPvo", "WOL1WQuhWOVdM8kYxMtcIq", "WRHreSoiW53cG8k/DGO", "W6DDW5JcSmo3h8kr", "W6xdTNNdUu9dWRCOhmkl", "ren+WO19W6JcISovnri", "BxBdGq", "W5PVWRKqWP/dISoLcsNdMq", "wKpcU3hcPulcHqBcMWm", "yCkmW7tcVa", "W6VcL2tcSmkev8kTkSooW68", "WRWsWR4", "o8oTWOhdVSoBDexcHM3cMa", "WQldRNpcTeffW7HHdCkF", "W7tdTmoCWQNcItCdWQNdLSks", "WOacW5hdKqddQColWORdGsW", "w8kSkCkp", "WOhdN8k/mSoQasuIWPddIa", "W73dKdJcUtBdOSoODWO8", "W4DmW7XaC8oZWOXvyw8", "FvdcMCoV", "bColW6VcG1BdGIz1WRr4", "fmoNW4ddKKumW5xcI8k/WQW", "bCkyWQpdHuFcJdjWW61L", "a0ddSCoYWRdcKbNdKSoIaa", "p8oOqmkzWOhcVKNcL8o0W6S", "FSoRWO9EWR0CWQJdLvNdUq", "WO8hWRuBdSoUWO0qWRyH", "W61qW5DoWODDW4DrtmoD", "WQlcRYNdUrizWRP6sSon", "t8ktWRRcNqNcGtDNWRmT", "DWJcPSoOWQxcJX3cI8oLcG", "pmkmW6tdSa", "n8kCWQVdTmkvW5tcJG8deG", "mhi6FcddKuuur8kD", "gmklr1CrFCo/W5u/WR8", "uCopd1vfpmk9WPLMW7S", "W4X1W7ezW4pcKCkIdYVdNq", "W5SjWROxvSkAWQOvoeq", "tmoFf8onWR5gcHGmW7W", "W4viWPhdKrhdQ8kBW4VcLwq", "WOtdImkVpSkPtgn4WPdcLG", "fComWRzoDs7dNvmWDW", "C8klv8onW6CxvfuYW6K", "mSo4qmkwWO3cSLJdLSoXW6q", "cSoTE8orW6Seu8ohqwe", "c8oky8obWO7cVgmQq8oq", "W7eFWOZcMmoGgCkzW7GsW78", "f8koWQtcNqNcGtDNWRmT", "ymoAW6ldO0yTuZRcS8kr", "W5rCWOddMfVcU8opWPNdJgK", "WRVcQmk3W6Gie8kWWPfJBq", "ECoTW4PzWQ1IW6ddL1FdPG", "Dh3dHCoOrCoolIiOaq", "WO4aW5ZdMGZdPSkBW5RcH2O", "ffzTW45GW7VcHCocp04", "WQZdVN3cTWnjW7SUhmon", "WRiCWR/dTCkFWPddV8oAnNi", "W6KWtCkuW5WzW7i", "WRbFbCoiW4tcO8kUAWTN", "emofWQbezZpcNbj1lG", "i8oPW5qmW6y7WQ7dJWG", "smkoW6ZdIdtcNComWOq0Aq", "W4m6W7bg", "W5fjymoygNZcPmkAWQ3cUa", "W4RdHCkFWQ/cUL3dScdcGaW", "WPefWRpdHWJcNCkkW5NdUx0", "W7NcSCk5WRfDx8o2WPj+CG", "DX5nvSk4cCoCW6tcONu", "AdJdUmoZt8ompxrZtW", "omoTWPS7W6tdRCoXwCowW6u", "f1nZEmoaweiIntC", "W6vcW6pdV8kpW4dcR8kABIG", "W5xcQSoNcgSMWP7dN8ogWPa", "W64CvmkjWPJdKmoQkeKM", "W5umWQ8Bvq", "WQZcIwS", "smkrWRpcKgxdICktW5XLpq", "w8o/s8ktWPFdSg3dImo3W64", "DXWLx8kcWQldNdbpxG", "dmkuvmonW6qxwLXmW7S", "WRddRM7dPX9EW7bYm8kc", "CN/cL8o3qSomobqMfW", "WRGlWO5tW4OeWPO", "pwKXpsJcVXm2bmof", "WRGtW4y", "rSo2W7fAohdcJqbYEW", "WRiZWOqqW6FdQxy", "WQhcMMNdVgtdNCkWBWP+", "W4WqmSoWagBcSCkyWQq", "WQJcR8kmW6VcMgziW7dcK8oo", "WPNdVeNcI8kWrmkDjmkJWQq", "WR3dT8oCCWhcRaJcMmo8WQa", "WRRdN3/cPG", "bConW7ZdNJ0", "W4rmW65acCo0W7nCCuq", "W7CAWQpcUmonWPtdOmozkNK", "tSkFWQlcGeJdJ3zNWRrP", "WQZcUJZdUqmwW7aLc8on", "WOhdLMdcPmkfdmoNpmkgWRK", "e8ocW7ZdOq", "FtDGChBdMeD5vSoh", "WRaBW4ClW5OoWOviw8kn", "WP8vz8o6b3FcSCoyWQNdOW", "w8oBrCkpWRnveGWmWRi", "W4evl8k2expcPmkuW6lcOG", "sSkjWR/cGe3cItn4WQvK", "WQJcMxNcSSkzxSoLmmkCWRK", "W5/cGCoLy8kWq3jIWPFdJG", "W7mcWOZdImk2cSkeWRneW7W", "A8kVW5NcPW", "WP3cMSoIz8kRatLGW5xcNG", "WRHzemkjW4VcNmk7DWO7", "n1zXWOr+W7VcJCoFEr4", "amohWQ7dGd3cMmohWOK5Da", "xCoroSkC", "yNtdMmoUwq", "rCkuWQlcNgNdMSkDW5qBoq", "Cmk4W5tdVrddTXHdfCoW", "WQFcIZ/cPCkEdSo0kSkxW7m", "W5hcLSoWCmk4qW", "W4rmW7XgC8o0W6KXyXu", "W6JdNcdcQ2FdM8kTn0TK", "nLxdTSk5WPPWW5C", "jCo8WOFdSmoEydJcL27cMG", "ASo4WO5vWOaX", "WRy1WQ4qW7FdRxWvW4mv", "ASkPW5RdOxFdPHvgd8oM", "W6JdV3dcSe5dW6aPdW", "ofqLq8kAW6pcJxKotG", "WQhdRmopW7NcLsecW7VdOSkt", "pCkUbCoiW5tdVaNdOmk/WRq", "FSo+WOSDWRKTWQJdNupdOa", "FK4iW7XMWRDxWOi8bW", "WRZdUmoX", "W4vEWOBcL0ZcVmoAWOxcMde", "pSkkW7xdO0yHAc7dTmoD", "FCkXW5RdVdldTG0", "zCo3WOLcWQWYWQldL0i", "ESoWWPBcRCkEoLNdKJhdGa", "tSodW5RcQGipFar4W7u", "c8okW6dcJuRdNgq4W7jD", "xCoeySojWO3cRxqHtSkp", "W4LeWOdcMXm", "aCo6W6OBmNa", "WRaCW4zPW5C0WPTagCod", "q8kfWQhcVJiYjG9LWRy", "F8ouWRdcOfWLudZcS8kv", "WQC4WQy8W6NdQxWuW7SD", "zCkRW4X6WQ3cQW", "W7PZWRyDWQhcSd0uW4vk", "W7DYwSkuW5ajW6tcLCopeW", "ie8hW6TMWQXqWPmNxG", "W5SYW7bgW4ldHSkReh7cMa", "vSo7WRLgkgZcJr0Hjq", "suTVj8ovb18JmYK", "EL3cJSoS", "sCoyW6RcK2ldLa", "kCkzW73dOX93gMpcSCkp", "bCktWQldMWxcNZT1WRn5", "uCoDx8oDW61kgX8yWRi", "WRWhWQdcPa", "FtzYA2JdMt1+wCkA", "W4PFWOZcMa", "x8k4pSkp", "WPddJ8kXiG", "j3hdMCoNrmoBiJC6bG", "kLFcJSoJWQSNnCkDW5yx", "WQK+w8kjW5OoW7ldISkabq", "BSkVW5RdQYldRLLdfCoY", "jqtdK8k7WQzXgCoAWOft", "W4ewWRmxaG", "wSkOjmoaW6vkdCkobXa", "W5O9W7byWP/dM8kQbXddHG", "iSkPW5tdRtVdOfLeemo0", "o8kmW7hdSbv6hx3cRCoo", "DutdSSkWWOnYW5hcHWxcOW", "CvHhu8kNwCkzW6NdOdK", "pSodW6RdIhJcKmopWO94sa", "WRVcKgNdS2ddU8kP", "W79kWPzQWO1pW58weSou", "egeNlZdcMrq", "ur8RW40JWR3cQmkdlv4", "W4zFWOBcG00", "iCoPWOnCWQa3WQBdL0pdVW", "qSocoSotW5O", "eSowcWqbACo2WPq+W7y", "W7BdPCoKW7Cnh8k+W4e+ja", "Bmk4W5JdOchdOa", "WPihW4NdGrddO8kkW4VcHhm", "W508W61eWOO", "t8odoSojW53cOx57aCka", "umosvbSeB8oUW441W60", "rCkyWQ7cN2NdMSkwW5iBmq", "tCotW67dVwaZEuaHW6a", "yWzAWQG3W74jW555uW", "vSoCW6VdGZVcLCoCWOG5BG", "W7O4WQSpWR/dR34bW4qh", "FbFdUCkWWPX0WOtcJtlcQW", "W5TrW7zcdCoZW65wFry", "F1n3gmofW7NcHxCrha", "nsRcM8kWhmoOENP8tW", "krxdGCk7WRO1m8kEWPuC", "ESkNW4OqW6L/W6FcMrBcQW", "n1rVp8ovsvLMcrG", "WQddRCoguLr/W4BdQ8omWO0", "xmoqwqGjFCoUW4PNWRG", "W7xcMhtcUmkadSo0CCkxWQq", "C8kCW7hdTLmVsc3dVSob", "B8kKW5/cUG", "DL8OqmorWQldNYrswq", "bCoYW47dGLuFW5ZdM8o6W6O", "mhu7CtpcNGyPvSkk", "W7rPWO5oWRhcTcPaWO9A", "wSoEoCkl", "iCkRW4qfWOfUW7xdJWpdOW", "s8ovaSkkWRPcoqeEWQG", "W5K0W6TnWOhdHSk3", "yhNdKCo1sSoB", "fSoCW67dPW", "iK7dPCo0", "W77cMspdPmowcCoOACoDW74", "W4HhWQOxt8kKWRmlFe4", "jb9cvmkKe8oyWQtcOtq", "s8orkSkinmknWQ7dLSkrW6C", "ECoWWO16WQ3cS8oEdCkwW6y", "gConW6ZdIdtdLmoiWO4Qpq", "b8oBkmkhlCkdWQtcKSkoW6G", "E8kOW5/cQSkOnXJdIsZcKW", "F8kSW50", "f8kSWPxcGGPc", "W7ntWOmeW40iWPXjw8ox", "WQDoW6RcQ8oqWOxdTCoDpxu", "hW44W5m3WRNdHmkalfa", "WRS9hCogWPvAWRFcMmknuG", "kSozW6VdPM97yKGY", "W4ldJCovW7BcSKJdPtRdHqS", "WO7dK8oLASoNy3GSWP/cHa", "bePHjSod", "W57cM8kQDSk2xs0WWOddKq", "tmoCpCkbiq", "y8kIW4q3W6JdV8kssmoeW6S", "WQywWR3cPmozWOpdSW", "puTeWRWGW6azW5jPuW", "zCodfWWmBSo0W5q7W7e", "zCoGW5pcU8khmq", "WPtcKCooW73cUG", "BrSLc8owWOZcGNCbgq", "hw88n2tcVX44bmof", "BSkUWRrAAINcOeiYAa", "kCoTWPhdOSoepb3dKgdcLa", "kNtdMmoGt8oaitfKbW", "p17dPmkHWP1WW4dcKbxcQG", "xuRcQNRcPIVcMq7cLqm", "W6frW63cOmoDWONdSCoEkYC", "cCkjF8ooW53dQdPMbSoo", "W5ffWOdcHeFcHSoEWOFdKcC", "rmkOWPlcHGrcWP3dLmk0WRu", "WOCqWOhcL0RcTmkwWOxdMJy", "W6NdSmoyWQK", "WOebW642uSk2WRmjoaa", "df7dO8k5WRr8W5JdGXVcHW", "CtrMFNRdKbC4aSom", "sCkiD8kFjCkoWQ/dNSogWQK", "qCozEmoqWRhcP30Vsmos", "kwJdHCoUt8oCja", "BcqImZFcMeOQa8oj", "WPeqW5FdHX7dPmkiW4xcGri", "uSkjW5dcQSkoEdNdItRdNq", "W77dU2JcSe1nW6XUq8or", "gSoWW5tdNLWcW57dM8kAW6G", "eCk6CSoxW6HuxmoBxte", "s8obW4FcOamAAqGRW6O", "x8ktWRJdHa", "s8oFhCkz", "kWjnwCkLdSowWQC", "x8orW5BcUbypFa", "m288oa", "W63dRMJcQW", "xr7cTNBdTwFdHXVcHH4", "pSoYeCoe", "W5JdV3FcQGnHW7SIg8ke", "A3xcP8oNW4e2WOFcLLJcTG", "v8oocmkb", "WQZcTSkeW7BdQMDiW7tcKmoF", "WOL1WRKiW4/cJSkGctlcIq", "ChNdJW", "WO5dWO3cMuNdUmotWOldKse", "W4fEW4ldLLFcSCkgW4ZdHse", "W6VcIghdUMFdJ8kXBKjL", "ymk7WPhcVCkhoqFdLwpcKW", "B8oWWO1NWR3cSSoqdCkwW6W", "ECohgGOopmoTW5W0W7G", "WRq5WQ8wW6NdQvSuW5iz", "lSkFWQBdP8kuW53dQKDNoSoFDG", "x8ofW5RcObGDzaqVW6O", "W6lcUL3cT0DlWRqVfCki", "ECo2W5pdNLCcW5NdNmkvW6S", "WOlcO8kJlSoGaYuKW7ZdHW", "dLrXWOLIW7RcKmoBFGK", "W7/cSSopBf7dTftdH8o/W6y", "WRarWP0AWPynWOLhw8kp", "qCopfWXhiG", "n8oXWPxdVd7dQrHpf8o0", "ySk7W5aqW6S", "fSoDW73cHu3dK2PKWQfK", "oCkzW6tdOW", "W7hdPCkniftcSHBcM8k/W7i", "zCopWRdcTbX0bb7cOmkw", "WPKCW5FdHrddRmklW53cHNu", "kCkGW49NWR3dSSocgSklWQ0", "nuKcW6DYWQO", "B8k/WOD+WRRcVSocrmohWQm", "WQu9aCojW5etW6hcHSkrxq", "WPuMW6LjWOhcKSkNdcxdMG", "WQ90WRJcTYJcHH9GWQ4U", "WRuOWQCxW7RdVG", "W71xW4ldH8kJwSoCWQHAWQ0", "W6e6WQ0xW6VcOsnsWPCx", "DaDUrSkqWRxdM3SDbq", "W43dHCkFWQ/dPuZdPtZdIfq", "jK3dQSo5", "WPr3W6PCWO7dHSkXe2NdMq", "bCoEW6hdRq", "A8oiW7hcSCokWPNdSfHdjq", "vSo+WQbAmNJdKvr1jW", "WQxdNI4", "BHTgwmkWfCkuWQVcOxC", "hmkJWQGwoN7cIr8/", "WRy9WRaCW7hdUge", "qmkjW6m", "xLVcU2VdQg3cMHVdMri", "z3FdMCkSwmobicfUtW", "WQhdTSkiC1FdUexdLmoXW6G", "WQj0u8kqWPje", "WPtcT8k8fKaPWRNdHSkJW5m", "yWDmsCkLsSoBWQBcPga", "WRNcUIJdTXOBW5D9sSod", "WPDACmkVrcddOCofW7ZcRG", "A8o8WP50WQGM", "pmkCW7q", "gSoYW4ZdIYqEW4FdMSo6W6G", "c8odW7VdUxiKpG5IWQK", "WRNdVL/cJSkcvSkYnmkuW7S", "WP8qlSoTvxhcVmkuWRBdSq", "cSkxWQhdP25QEeC6W6W", "pSo9WPxcR3FcPvKhxmkP", "zfqXrCkyW6ZdGYXnqW", "W7VcHZ7dPSophCo5zSoDW7q", "WQFdQmke", "W70yWOlcL8oSdSkvW64pWQK", "WQvOWRtdRMRcOrvMWRSH", "W7xdM3hcS8ktxmoOomkCWR8", "WP1LWRddO3W", "tCkMWPlcKWSlW4NcJmk6WRS", "s8ovnSonamkdWR3dNmkuW6y", "WR3cUmkDW6FcIxvAW6RdKmkp", "WO0Bn8oOhd/cOmkCWQNdQW", "WOZcHSo8zCo5sxzKW5hdNq", "AmoaWQhcTaqhdgRcV8ky", "BCkUWOJcQdldOrbtuCoG", "nuhcHCk7W6u9o8kBW4zc", "hSojW7ZdJdBcNSopWO8/ia", "oSoJWOhdQ8olAutcIg7cGG", "rWm/W5m7WRNdHmkdkLW", "WRldQmkYWQriuSk5W5nLCq", "W7xdRmoqWQS", "BvCdgSoXw8oDWQdcTJK", "jhxdGSoTsSoaBZqShq", "W5BdUSkUrcjYW5ddLCkcW5q", "AN3dHCkHqSohpYm9", "WPXeWOhdIa", "erG8mCozxbm", "eSojeCkmWQjscq", "WRVcOCk7WQXs", "W73cMYhdQmoyaCo7A8ohW74", "WRVcJtddOmkgsmoOlCkCWQe", "f8kyWOxdRfLDnqq1WQi", "fSoCWQ/cP2L/yvqGWQK", "iSkOW5nZW7HRW6NcJW/cPW", "wmkUWO7cMq", "W6/dTNxcUKG", "wSkFWQddUSkuW5NcMqqhzG", "WP7dL8kPiSoOgZKLWOBdNa", "WQNcLMhdRW", "WQFdKMi", "k8kgWRZdNZzwibafWRy", "WPCbWQ0zxmk3WRusp0m", "BH5nsSkKe8kuWQFcOxq", "Fq/cT8kPWQZcH0pcLmo8wa", "WQldPCksj1tdUGhcLCkLWRu", "W6ZcQmobDH3cSrhcMmk0W6C", "WQNcSSk5WRDyfmk+WOnGDa", "W6neW7RdUCkuW5dcUSkdCs0", "WRGbW6hdJSkTt8opWQrFW6W", "W6JdJJtcTZFcMSo7FrH6", "WRuEW5DhWPqpWODxu8kc", "W5brWOVdIhRcTmoiWOpdLYS", "nblcHCo6W7iWm8kgW4uk", "W41znmoUf3/cUCkbW6lcOG", "wLBcQa", "b8olW7VdVf/dGwm0W7aW", "WQRdRCkxDaRcTatcH8kIW6K", "WQVdVmkvjGJcHWhcLCkLWRu", "orzow8o8u8kEW6NcShu", "WQHmW43cM8oVh8oc", "WPzACSk7r1RdOConW6VcTW", "uSohwsukBSoWW5G2WQm", "m1tcGSkVe8kBy2r4iW", "imkrW5ZdPZBdSuuicmo9", "WRNcQCk3WRzpdSk5WPf5yq", "W6bse8oDW5ZcN8k0jbPQ", "W4vPWRzCWOFcJmo4fcZcLW", "WPyfWQagxSk3W7Ogpu4", "zsHQzwtdNKTVimkv", "n13dQCoOWRpcIWhdHSkN", "D8kPW5tdOW", "d0nPmSoyxHDMCwW", "prxdLCk7WRDKDmoDWPvl", "W6rDWPhdNSoHd8kiW7WjWQW", "Ar7cPSkTW6JdKudcGCoIvq", "WQCSWRivW6y", "WRitW4PfW5i", "oCoJW7NdOdddQGXtqmk6", "W7tdRSkdW6FcIxvgW6xcG8oF", "yCoOsSkEWPhcUW", "c8olW7JcK1ZdJw40W7eJ", "uCkPp8km", "W4RdK8kmWQFdPaRcSNZcKfW", "fCoen8kammobWRNdNmkrW7K", "WRVcQ8kX", "WQCwWPNdJCozxCotWRzAW60", "W4lcLSojWQ3dTLxdQJJdLr4", "vCkcWQ/cUdiWiM1HWRy", "WOXhW7juxSk1W58dW5vJ", "Cq/cT8kPW7ldJLJcH8o6sG", "zCoXWOTEW6rS", "WR3dRmosWRpdIdLgWQJdHSkr", "W5NdGSovW7lcUfVdOtZcNu0", "W6PVvmkbW5Wu", "l1JdM8k+WOz0W4VdQrBcTq", "tCoBpSkDWO4", "pCkHWQChW6vQWOBcIXRcUq", "rCo6W7nxnwNcGrfKna", "W5PzW4hcMmkJlCkDW6ipWQa", "qCkAvGKqAmoPW5y0WQe", "uHhcK3hdRwpcGWJcKvm", "WRKYtCoyWOLvW7pdKCoBta", "WR1dd8oDW4NcG8o6ArHT", "WQ/dO3pcRfDFW7yPumkD", "FCk6r8kwWOVcTXddM8o8W6C", "ySoUrmkoWPhcOW", "r8kDWQdcLrVdHCkFW49Uia", "ph3dLmonWRDOeSozWOWY", "fLBdTSk3W5e", "W63dTdZcQvffW7a5fSon", "qSosmCkjWONcOa", "AGFcT8oHW5eHWPxcMLFdTa", "g8ojW6xdJdBdLmoAWO41yG", "W5CBm8o6gtxdRG", "jfBdJmoPW7e", "W7JdUCoEWQ8", "j8kIW4hcRCkcDqtdJZldNq", "aSkgBCocW43cIY9OfCoz", "WQvUsmkcW5qsWRFdJmoiaa", "w8kBWR7dMatcMsu", "F8kKDCkBWPFcO0RdLCoQW64", "y8o3WOzFWQG7", "WPZdMCk/n8oSysm+WOFdGW", "W7hcQJxdLJFcGSoRyXqQ", "tmkOjSkgWRfzaa", "zmoTW4hcRmkekXhdLq", "W4nxWOSva8o1WOHlW7DU", "WQTTuSkvW4fxW7xdL8ojcW", "bL9RWOzLW6FcHCogFq", "uCkgWQ/cUdaWkbvZWRy", "bmoPW5xdGLeFW5RdNmoJW7y", "W5ntWPFcN07cOCosWOtdM2q", "pCkUc8opW4tdOq/cLSkSWQq", "kmksW5LSWQtcUCkqsmkmWRK", "oCknWRldTmkeW43cGbCmpq", "tCkcWRNcQtGYibb9WRa", "WRr8W4xcISoQfmkvWQ9gWRy", "nrpcQCoWWRxdGvJcLSoIra", "gCkfhWqkAmo4W4T3W6G", "WRJcK3a", "W6eGgSkoW4exW7VcLCoDfW", "W5ndW5JdLf3cSCoAWP/dKgy", "WPO2W7vywmk7W5ysWQz+", "sXCYfSkcgWn0D3a", "WQZcUIdcU1zEW6aJe8on", "dCoBnSkgWPZcVdC1q8kc", "dCkoE8otW6SeuSohr3W", "WQ/cL2hdPYlcKmoLmfjT", "gCooW6ZcJ17dIMGOWRbX", "BSk8W5ldQIZdTrHdgmo8", "W5NcISoMqmk2vsOYWOddKa", "W57dGSoID8k7qh5KWPFdKa", "W7WpW5fjW50uWOmjhCki", "WOesWQCvxmkGWQG", "wCoBfSkz", "iCo9WOndWQOWWRldL0i", "ne/cQSoZW4eXWONcIKxdSG", "W4v1W79hWP3cJ8oJcYhdNq", "k8o4WOfdWQb4W7NcHvFcQW", "WO1dC8k3rcVdVSofW7hcOG", "x8ogW5RcRwWiCXONW6K", "rfXQWPDNW7ZcKmocAH8", "ACovk8kAk8omW7VcImojWQK", "b8olW7RdQ1VdNX4LW7Hg", "W7JdKJlcOcxcN8oPBryQ", "W5/cGCk+BCk/sZ4SWP/cKG", "sGtdLCk3WR5/BmozWPvo", "gSkVWO/cNWabWORcH8k3WQ4", "smoEm8klW5RdPYr6vCkE", "kbzauG", "xCkxWQ/cQse+mqfZWQC", "WQFcQCkinWBcTKJcMSk+WQa", "cLX9WOP7W6W", "WR9IW6jzWR/cRc4uW4vk", "yCo4WP5tWQe", "WRGjWOnfW5uaWPTwa8oe", "fmoNW4ddKKuqWOxcJSk0WR8", "W6n0u8kc", "W6DeW77dVmkpW5tcP8kAAdq", "eSkgdrivECkGWP4YW7y", "W6xcIxddS2tdMSk8BKT+", "W5tcJSoLy8o0xxHJW4tcMq", "iYBcL8kHc8kjCZOOdq", "WQNcNMxdUYJdMCkRiLqO", "zX7cSSkYW6/dJLJcH8oXsG", "u8oQW6yul3xcMaO", "WRitW4jvW4PCW49duCkr", "uSoTlmkiWRCbq8kEad4", "WRmZcmoEW69yWRJcHSkrxq", "pCkTW5ddOttdPaTohCo7", "WRvDb8ooW43dL8oKjfKM", "wSowqSonWQjgcaOAWQ8", "A1dcJCk7W6a+kmovWPil", "jLOYqSk4WQ/dLYbz", "jdJcL8k9bmonjIb3tW", "W7zQWRZdP2RdIf1rWR0+", "rmkSWRWbW7axW77cLWdcVa", "e8kqo8klWONcQxmQc8kh", "W67dQ8kaW6ddJtqsWQtdISkr", "cCoceb1fF8oXW5GPW6W", "WR3cLYddVMVdH8o5mffU", "wSouhq4xmCo+W5y2W7m", "W4DqW6jddCoRW65wCry", "xCoomSkmWPlcPa", "W73cQSozzuNdQvZdMSoPW6C", "W6L+WRm", "WRrzfCoDW4FcGSkZjfDI", "gCkHjCkgWQerf8kEgYe", "zJfYBxxdGLfTvSkD", "WQrJWRZcP3/cHXvLWQKM", "jeuDW6LR", "nttcGmkVh8kya2D9qW", "W7D4uq", "BCoTWP9d", "WO3cL8okW6dcR08", "WRySdCouWOrmW6/dRmoMk0qe", "W6JcHmoNW7uqaSkUW5m8nq", "A8owWQtcSGT8cgZcOmod", "u8oteCkuW7qhdaWtWQ4", "eSofeq4gD8o/W5yIWRG", "W78eWOpcISoZg8ksWRzAW60", "WRZcRmk6WQb1vW", "fSoemCkFlCkeWQVdNmknW70", "W4ddGSkbWRpdQGddRsBdKb8", "jeS0qSorWQldNYrswq", "WOZcM8oJiSk6qxzJW4pdJq", "wCkOpG", "k1BdO8k5W5f1WOtcJtRdTW", "p8o+WOy4W7/dSCkhw8owW7i", "W7pdVmoCW6FdNdSsWRddImoF", "W7T2WRZdVMBcMX0JW6jX", "dmoBWQldQMbSEazZW64", "WPejWQBdHa/dUCkjW5VcM3u", "BCoyWQxcRGShchhcOmkB", "WPWFWONcL1ZcSmoxW5xcLwq", "qCo+W6KzpNa", "W6bqWPldHCkScCkkW69yW6i", "Emo9s8ohW4pcVfJdNmoSWQ0", "j2C+", "rfzPoCozqKWOmc4", "kXxcHCkMWQqCy8oeWOyP", "WQv5amoeW7HcWRNcJCkuxG", "umkYW6uvl2JcGX4MEa", "WRmwWRNcJSonWOZdUSoVoNS", "W5ibiSoPdehcTCkzWQddOq", "u8kAnCkiWRTfhWewWRO", "vhFdH8o0wW", "W45vWPFdLLFcU8olWP7dGq", "BmkJW4u", "WRrTWQ4", "FSk6tmkxWOm", "WQmuWP7dISkTtCopWR1uW7a", "g8kxA8ooW4ZdV0X0f8kM", "b0FcS2VdT2NdHWpcGbW", "W4G7W7DnWP3cKSoQfchdKq", "f8kEWQxdI0RcJJP1WRnJ", "dSo4ASowW7CsuSoCugm", "vhaUW5C5WRJdKCkskum", "lSkQW5tcSmkokHxdKJVcMq", "pSo9WOxcN8kZhYldRH0", "WQ/dSmkjDa/cSqNcMmoSW7m", "WRuwW4rpW40aWOq", "WPn1WRS", "WQZcRmoyz0xdUfldHCo9W7q", "lCoZWPz6WRZcSmocsmklWQ0", "qSksWQ3dJr/cNG", "k1VdSSkZWP14WOpcNKFdTG", "WQ/dJSkpW7FdPgfkW73dTCoo", "WQBdRCkfmq", "lSkoW7FcVa", "Dmo2gCovWOxdRG", "kfqLtW", "WPRcS8oVcIiQWPBdGCkoW5a", "gSoEWRtcJxVdGCokW5vVza", "fCkgwuTfpmk9WPL6WR8", "E8kVW5ZdOtddPa1geSk1", "vSo5WQBcNrfdW4NcV8kKWRu", "vSomrCkoWRPgcr5cW7W", "jr5hxW", "ySoPgmoDWPdcSv/dLSo9WQC", "DN3dMW", "WRNcP8o1", "WRHtWObeW5WnWOfhw8kp", "bLFcS2NcPtdcIb7cGau", "WOL1WQvhWP/dHSkTdYRcIq", "w3ZdKSoIwComiJmNgW", "gSk3WPlcNqfzWORcM8kuWRu", "A8kLWODVWQFcQ8oDt8oeWQi", "WR4BW5zn", "W6ddOCkmjb3cOuJcL8kWWQy", "pK7dQmo7W7ZcKXNdN8kS", "gCo0W47dI1avW5VdNCoUW68", "W7ldUCozWQldM3jgWQBdJ8kE", "ESocW77cUmobWO7dLf5FpW", "jCo0WP/dPSkMALJcKNdcHG", "v8kOWO7cHGbcWP3dGSkHWQG", "W5dcKSotW7ZcRKNdPZZdPa8", "WPjFaSomW6VcMmk7AH5J", "W7qKWRxdUgRcK0CJ", "W7KWW6PjWOhdK8kQqcBdIa", "WPquWQ9FuSkRWQXkjfq", "W6NdVCofWRm", "WQbHW6u", "W6rPsCku", "wmogpCksmmkjWRNcKSkzWQK", "W7NcQCk5WQryvSoS", "W7RdHdhcSJFcM8oREGP6", "WQqCWR7cVa", "WOOLW7HgWOxdK8kQb2NdIW", "zazyWROPW64nW4T6ra", "WP/cHSomW7RcPa", "ECk+WPCUWRZcT8oxcCkaW6W", "q8oEWPldSuar", "z0hdJmo5W6KP", "x8ocoSkBWPG", "WRGqbCofW4NcG8kPovTY", "W6mQW6/cSY/dH0KHW616", "W6BcLxtdSMJdSCkPmu1P", "W67cItddSCowemoOFSotW60", "W7RdVCojWO7dNtal", "yCoxW6tdPGX4eINdO8kr", "aSkuyCoFDCoBW6tcGSopWQK", "W6PTW7TxWQVcUJjrWODA", "WPSbWQmt", "tSohW6BdPwH2Ce8MW7m", "W77cGmo8BCkRdv9aWORdKa", "A8k2WPxcTstdObvch8oH", "mSoQrmkuWO7cSvpdNCk1W6G", "A3RdNCoKsmoD", "WOZcM8o1pa", "oeSAW4TRWR9kWOe", "W7TnW7hcU8oiWOhdUmkig3S", "xX0TW5u3WRddISkhlLa", "jqtdKSotWRDIdmozWOW3", "W63dVNJcMK9lW6C/", "W6NcJZddOmofhSo9ASkWW7G", "fmoNW4ddKKumW4NdJ8o2W6y", "je4TwG", "W4yTWRKgWPVdNCkWasJdMq", "W7RdJs7cRIxcN8oOBrWQ", "WRxcOCkJWQ4", "kSk7W4TLWR3cUSkpt8klWQu", "zqpcPSk+WPlcNHxdL8oGxG", "hGBcUtlcQcldKL3dGuG", "CCoRW6yolM/dJbfKna", "emkKjmkxWRbisCkBgt4", "ESogW4ddQ14Tvx3dN8oa", "W5CBnq", "W7NdIIZcPJFdOSoOCWG7", "rvBcThJdR2q", "fmovW6/dGZNcMSkmW594ia", "W7vSWQNdP2pdMa9XWRaI", "bL0YWPnLW6BcGmohCW", "W6BcNM/dRYJdImk2muKN", "oSofW6BcUCoiW4ddHfHhpW", "DCocW7hcTCoqWOtdJ1K", "aSo2W6nhFhxcGGn0mG", "WR/dUmoXWQTjxSo8WPz+mG", "WP9BnmoTeIZdRmkgWRxdOW", "W7WqrSkjWPtcLmkZCLLV", "s8kYW4hcTGaAFbm1W74", "tCoFcmkcWQbcoqeEWQG", "ymk7WO8", "c8kiWQpdKq/dKhf2WRvK", "wCkEWQdcMghdJCkxW5bSnG", "bLj0jW", "W4JdPSo+c243WPJdNSkfWOi", "qbnRWOjLW67cGCogjvC", "W6JcKMhdUMdcK8o+k0v4", "x8ovlmksACkCWQpdNSkrW6e", "WP0xWPBcGL/cOCooWPJcLsW", "jmoYW5S", "r8oApSkjWPJdRYrMbSoo", "W5qwWQS", "W4KuWQyxwSkHW6rBjvu", "WOjxW6DusSk7W4ysWRzY", "WQZcNxtdTIJdGmk2muLR", "emkeWPxdSfnDlfz0WQi", "zrzU", "W5LrW7LCcCoYWPzwAqK", "oSoHWPXeW7RdR8kExmkSW78", "W4qEWQKq", "W6RdS3dcTr4nW7C5d8kF", "k8o7WP9eWR0WWQNcNGJcTW", "ub4SW40MWRRdKmkck0m", "rCohW6VcJK3dKWj7WRrX", "cCotfuSmEmkGWPS4W7O", "pLBdTmk5", "iHnwuCkKe8oyWQtcOtq", "s8oXW6KFkvtcUd5n", "BCofWQZdQmoqWONcNG0mFG", "WQuiW63dImkVs8oCWRHgW7i", "W7jCd8obW4NcHmo3Bbb1", "ka9avSkKa8oCWO/cSNy", "WQhdTmksputcQaZcMmk4WRW", "WOiEWQnjtCo+WOTtW78+", "ASk1W4ddOJu", "xCovaCku", "zCo/xCko", "nCoIW5xcT8kDzKJdGJFdGG", "o8kDW7xdPG", "t8ohW6VdIqVcGdr1WQG9", "v8kzWRJcSceVjW9LWR4", "W6dcTCotf1JdQ0VdH8oJW7q", "W7HGW60jW77dUhPEWOTB", "aSkVWQDkDYZdJeOTCq", "WO7cG8ogW7BcSuZdPsZdHam", "FSkuW7/dO1yHtW", "W4/dQSkRx28VWOFcNmkCW4S", "W4dcNCo+zSkSrJD0W5NcGa", "bSkwk8khjCkEW6JcKSkoW6a", "fmkpB8olW4BcQNu+c8kD", "WRZcIg/dUsxdNmk2l0e3", "A8kMWPyMWQFcR8ogaCklWQu", "WR3dKMJcPq", "WOmbWQi", "W63dUxxcRvOqWQrRq8or", "oCknWRldTmkeW43cGbCmnq", "WOWBWQGvdSoYWOHvWRS6", "oCkCWQddUmkvW5RdOqiCza", "kCkbW6ddPW9JuYJdVmon", "rmkiWQhdNb7dJsj1WQj8", "WRddRSosWRldIJ0dWRC", "WPpcQmkJe3aVWO/cNCoiW4O", "i8oGWOJcSMRcUeqAqCkO", "WQtdM37cOSolf8kGkSkhWR0", "bKHNDCous18Vya", "dSoum8kpWO7cUYDHvCkg", "WRLIWRS", "W4GVeCosWPTiWQddTmkzxa", "bSozW6ZdQhn3Ce9+W68", "hSkaBCozW4JdVdD3cmoA", "WP5yWQmDhmkL", "pCkDWRBdU2RdHSoMW5nQqq", "jwKuntZcIqm", "W71oWOZcMSoVg8kpW7TBW6u", "FSkuW7xdOfm2ed/dSmob", "W7WqrSkvW4ZcMCkSjbPQ", "uCk/CmohW6yjamoFrZy", "ySoUqmkuWOhcOG", "W78BW4jsW5HmWPfks8kx", "W7fad8ofW4hcMmk7ALrI", "zCo1WOynW648WRldI0tdRG", "oCkDWRldPmkiW53cGayfFq", "WQaZWRywWRJcRgyzW4Cr", "WR9QWRpdR33cVs5mWPa", "WQNcSSk5WRDyfmk+WP1TEa", "pfiKqq", "xrmUW5zNW7hdN8kqjG", "W4uqWQyytCk7WPzEW7CX", "W6GaWRVcR8kyWPFdV8osk3i", "oLCUv8kvW6ZdGZDotG", "p1BdO8kWWOrIW5ZdMaq", "e0LtiCocq0mH", "W4qOW79eESo3W7zvCrC", "pmkCW7tdGv4LtI4", "C8obWQpdGqnYe2VcPCkd", "yCopfa4", "mmkTW5RdVcpcQbTigmoS", "omkwW7FdQLm3vdhdSmob", "WRHWW7ddQgdcJq", "W6zTW7bxWQ3cUtjrWOe3", "h8k4W4PlAtddLtiYAG", "t8oelmotW5RcQM8YuSkb", "ECkOW58", "W6jFWPivWPDqW58jd8ov", "W5BdUSkUrcjUW4pcNSkpW4S", "WRJcNxldSMVdMSkQ", "W7JcGJ7dPmowaSo6CmobW7O", "W5JcQmoVegDJW4RcKCofW5a", "WQNcJhddSMVdIG", "W4ywWRmvr8oRWPrBW7u3", "bfVcS2ZdR2pcMaldK1e", "WP4EWQKeh8oVW4zrW7OZ", "lmk5W4OqW6L/W7VdIKddRa", "pbxdLCkOWQHKAmkaWODj", "FCkLW5tcSa", "ASoXWPBdRtldQrbfgCo5", "W7mrWQlcSmkvWPddS8oyphS", "jLiLv8kfWQtcLgvpsW", "WQZcTh7cVe9dW7yPeCke", "e8kqWQ/dQCkzW5dcNqOnBa", "BSkSW55OW6xcT8otgSkdWQO", "jCkcW6BcSmkAW5hcJ0ncBW", "v8kMWOZcNG", "w8k1l8ke", "WOaiW4NdGXddP8o3W5RcHwO", "AmkOW4y3W6JdV8kssmoeW6S", "oSoTWPOLW7NdV8kfrmovW7K", "aCojW73dMq", "rKhcRN7dTxJdKqNcLri", "ySk5W4DL", "CbTAWQy3W6yzW4nXxq", "b283kWFcGWKTe8ok", "rCoAWRxdNatcINz1WQ50", "uCkJBCozW7LpeSkmucO", "nbFcKSoVW6CLl8kBWPGp", "AmornmkskCknWR7cNSoyW4G", "CmodW7hcUmorWONdHuq", "wSowmW", "W4PxWQeDbSo3W5SqW7uN", "d8kqWOxdQ0falKa8W6y", "WOtcTCo7cMy", "WRuuWQG", "WRDPWRZcQIFcPqHUWRG4", "W5NcM8o9z8o0t3H0W4NdLW", "W6GUWQmnW7RcOsbaWPKe", "bLf6WO83W6/cI8oajvC", "xCkKWOu", "W5ZcHSo5y8k3agrXW4tcHq", "mGzMbSorW7hcK3CvcG", "A8k5W557", "WPv4W5tdHetdSSkBWO3dNcG", "ESoGWPldGMBcT1uwrCo2", "WRGlW4zlW4KtWODva8ob", "W4pdHCosW6FcQ0JdStVcH1q", "umolgaij", "AmkOW4y0W6O", "WO5cWOtcGLVdUmkpW4VcMZq", "WQmyWP3dISkTsSopWQHxW7O", "W49dWOdcMeRcTmoiWO7cKNO", "WRmOWRiqW7pdPxObW5Kb", "bCkitLiMjmkZWOLSWRm", "W6ddVCoMW6ahuCoXWOSHzG", "lCoRWPNcV3VcTeTetmk5", "BhNdMCo0x8oiiJDKwW", "Emo2WPG", "WRmFWQlcQSozWOZdHCocmgG", "WRTTWQNcRs/cNb48W7S5", "W5aakmoRsY7dV8kzWQZdRa", "W7bcWORcKKVcVSkBWONdKdy", "dCodpSkdWP/cQxjRvCkA", "ymkHW53dO8omoWhdLcZdKq", "W4a9W7HgW4ldLSkXaq", "WRNcQSk6WQLzumoQWPPJEW", "tCoEW6ZdPM8Zyvm8W6e", "x8kvWRJdNay", "AmkWWQxdLan9DwZcQmoI", "zJb/BwRdLvnHqSkC", "WQhcLghdUxxdNmk2j1fH", "t8oBfSkEWQficaLyW7q", "AbS1v8kdWQBdLJeCca", "W73cT8oyEfNdTLFdGCo9W6u", "W7qFWQZcOCow", "hCkuWPRcTvvamLb6WQ8", "rSo+W6SBnJZcNafUnq", "AeBcKSkMWQeZnCkAW5eA", "WPrACCkQvspdP8ozW7hcRa", "ASoQsSkjWO3cPftdLCo2WRa", "tCoeW6FdPNyZEuG3W6i", "nINcHSkWgCkzExP5qq", "j1BcICo6W6G2p8ofW4yl", "dmo0WQpdIKSEW5hdJ8oNW60", "Emo2sCohW4pcS0JdImoQW68", "ESk8W4hdRNRdRbDbe8k4", "WQtdNN4", "fvFcS2NcU2xcJLBdKX0", "WOxdMhFcUmky", "vSkIjSkdWQbowCompdS", "W7eBWP4bW7rqW5OjdSon", "frZcRN3dTgJcK1u", "fSoyWRZdKHNcMxTNWQ55", "ouyfWRuLWR1mWOa7fG", "W610wCkd", "mSkEW7y", "BHLmtSk4aCoqWQlcOwO", "FKmDW61QWOfjWOaGea", "Av/dQCoVWQJdKHRdMCkMhq", "d8ktEmkelCkiWR7dMSofWQ4", "cCkaDSoaCSomW7JcHCooW6O", "cmoOWOlcHXfyWOBcGCoOW7O", "ySkKW45S", "W5JcRSoHcwaHWPpcNmkmW4C", "W6LkWO8xWO1pW58rhSoB", "WPlcI8ogW7VcVLhdQYZdHq", "f8kRWONcNa5CWPVcGmkYWQ8", "WQNcOmkK", "BCoWWPBcK8oAyvJcKHBcHq", "DKT/D8kFWQxdKMvdtW", "pLn7fSoiW7hcLMrirW", "sSkzWQNdLqxcGtjXWRiT", "W7ldTSkDWRhdIdKtWQdcNSoy", "umoZDSoiWQLDbSkohgW", "vSkYWPtcHGPcW4NcNCk5WRy", "omo4WOFdPSoDAedcI2/cMG", "W5OLW7vbWPS", "WR3dT8oCCW7cUqVcGmk4W7K", "CGOEW6fJWQPrW49Rrq", "WOPfW7vfrSk7W5qaWQD+", "pKaiW6XUW74fWPb3", "WRlcT8kZWQm", "j2RdKSoMqSoAoYqOha", "W53cISovW77cPHhdSdRdGqq", "WQuqW5e", "eCoCWQ/dHg56Db18W7q", "WQJdLxxcVCowvSkNlmooW6O", "WOhcG13dPCowbSkaBmodWPS", "B8o2WOzCWQW8WRpdKfNdPq", "E0pdR8kIW6dcNLJdNSkWaq", "WQhdNc7dUwRdMSkWju1H", "WONcKMtdTIxdG8k4me1I", "W7OdWQlcU8omW43dPCoynMO", "W5VcR8o+agm6WPRcNmkeW5y", "mCk6bCoAW5JcTftdJmk4W6K", "W5BcNCo+B8kArxzIW7pcNW", "WP3cU8oJdsi6WPBdLCkkW4K", "lCo2tmoeW5JdV1hdK8kMWRy", "zetdS8oUWRxcJvJcJmkXaq", "rSo6W4FcSqrEWOddJ8ksWRS", "rSofW5BcQqubBrzyW7C", "qSosoCkAW4FdQcPNt8kd", "xCoZs8krW4tcLvNdK8oSWQO", "B8oQWOPGWQZdOSkvaCkkWR0", "EaLWgSorW7pcGxqieq", "lCoUtCoeWQlcUvhdN8kKWQu", "nvGfW71SWR9x", "W5JcUmo7d2m", "fCkwvvTflSkVWPvOW5i", "WOm0WQynWQVcTuTqW5vh", "WQVcUNxcVr4nW6q+eSkj", "W60lW4jeW5ueW4HguSkc", "cCosc1vzAmo5WOCoW74", "s8o5WRXAnN3cNHrOka", "WRyLWRGaa8k/W6SMegy", "l8kgWR3cQtaVxrvZWRe", "jSoZWO3dSCkylHpcMglcMW", "W4yyz8o4gxpcO8kgW7JcPq", "W7idxSkjWPNdHmo0me0M", "mmkYW4xdVd7cQaLoemo8", "D2JdM8oOxW", "zaPHb8obW6/cH3bIgW", "BCk1W5ZdVYFdRbDa", "ASoWWOru", "pN5VFNtdJfD5rmkq", "W5pcG8o4yCkY", "dmkuWOi", "jeFdP8oUWP/cKbZdK8kdea", "WOTTW7DvWQ3cUfPrWOaI", "W6CZW7pcUJJdLuiHW615", "ESoyW6dcPSobWOpdG04", "zSk9W5tcSa", "WPebW5ldGaNdOmkdW4FcHwG", "ESoApmkszmkbWQVdGCkrW6e", "W7RdPCoQWRzzx8o7WPb4nq", "CNmImcVcJqm", "B8oFcmkpWRDEgX8EWRu", "jCkIfSonW5ldPrhcISk2WR4", "WQvTWRhcQMVcNa5GWReV", "c8kuu8ouW6uEsLviW7C", "WRrXWQNdVMdcM1PIWRaS", "vHrbzSkCgq12ygW", "t8ozF8kkWPZcVhSVsmkE", "W7RcPSoFAbNcUrhcNmoXWRa", "W6BdIdpcPZpcMmoTCGG5", "tmoHWR/cM3BdG8kcW5H2mW", "W4aNW7bfWO7dNmo+qcZdNq", "Amk8W5K", "qmk+WPdcL1GlWP3cISkUWQ4", "cSkgDSodCComW7NcNmooWR4", "WO0enCo0ewFcS8kbWOFdRq", "rCkDWRBcNMNdHCouW4z4zG", "amoTASohW6uCrmoxaYi", "cSoBWRpcPNv2lX0NW68", "CeygW69UWRavW5ikeG", "mvKAWRuGWQPyWP8ReG", "qmkFWRxdIbO", "x8ktWOpdTfDbFa", "WPVdJ8orW7RcPLxdRcNdJH8", "vCogW6/dIthdLmobWPm8zq", "WPiAWQhcRCkyWOldS8oen3S", "FCk5W57cSmogkWhdHdpdNq", "bmkFwuTfF8kWWOP0WQC", "WROPWQ3dUgBcLH8", "e0L0nmoC", "peSBW6f0W7nAWP0NbW", "AgZcKmk/E8oaiZ8HtW", "B8k4W5/cVCkFmrVdIa", "jmo5WP/dQ8otAuBcLwNcJa", "CmoJWPxcR2VcQH1ocSkR", "W4vcWPFcMuW", "W5OMWQqpWPVdK8kMdchcHa", "dmkcW4VcV0vmlKT3WQO", "WRDFcmklWPBdJmo1ybbW", "W4OMW6O", "W7OFWQlcQCoCWONdUmorCNi", "nmoyW6lcSmofWPNdHrPFjq", "o8k1W5GbWOfUW7ddUatcPW", "kuddOSo5WPlcNHxdKW", "jL4VuCkfWQK", "irSosSkJcmoDWRZcQYm", "dSoxASoDFCoBW7/cGSolWR8", "WQZdS3JdPareW7uHhmoa", "t8oto8kTWPhcQwK1", "tSo6W6KDl3q", "s0ZcQmo/", "pL/dO8kHW7VcIX3dJSk2qW", "W7NcTCk/WQLvw8o/WP0Hiq", "W6/dT8oiWQNdJq", "F8k9bCkuWOxcVvJcH8k/W4e", "WPO7W79Ax8kIW4OdWQb8", "iSoYW5hdPIhcU1Khxmk1", "WQ/dSMJcTe8hW7aLgSke", "W7C/b8ogWPC", "WPn4W5tdGgJdPmoZW5RcJri", "WQ7cTCkKWQPyrSo1W5qSzG", "WRrzaSom", "avj7WOzEW6C", "WQupWOddJSkTsCojW4TxW7i", "lHzxwCk5", "aGOGjSozrKWUkZ0", "WRnwd8ofW43dKmo0CbX+", "WRi5WROn", "mSkpW7ZdGvm2uIJdOSok", "W78mW4zhW4ScWOaiv8kx", "W4WwWQOr", "W5GtWROtt8kWWQLhF0u", "W6/dRmkDWOxdJdKhWQVdICkE", "wCkAl8kpWO7cU20Pvmkk", "WPbzW79nsSkQW5uCWQfQ", "W4RcVSoNeIiTWPpdKmkyW5e", "wSkpWQNdJXpcVJn4WQvZ", "W77cTmogDahcVqZcK8k5WQa", "tmowpmkfWPRcUNuZsmkk", "eSkyk8kgW4pdTg4UgmkG", "hSoTASohW6uCwmoefdS", "gSoYW4ddGeKDW5VcRSoNW6O", "w8kDw8orWQvrhu0jWRi", "WQZcUIdcTujiW7eGxCkl", "WPdcHSo1p8o+wgD8W5/cKq", "WPNcGmkGWRCesCkVWRjnva", "W4SbW7LusSk7W4ysWRzY", "i0RdQSo5WQJcMG", "x8oaW4FcUaCDFbuQW6y", "W7CrnCoXfhBcUCovWQddSa", "ECk/W57cUSkEmWhdKJ/dMq", "W5ZcJSoICCoKcNnXW4tcKq", "jdJcL8kHc8kvoZjPda", "BhFdM8oLtSoBCNemaG", "W5vaW65sg8oLW7PhCqC", "Cmk8W5JdQG", "k8kNW4OqW6L/W6FcMrBcQW", "WRddRM7dPX9EW7XYn8ki", "W7LaW63cRSoxWPldU8kBmgO", "uCkMWOpcMG", "WRLQWQNdPwFdJ1O0W6X9", "tSofW5JcRG8pBGqQW7q", "pJ3dPmoC", "sGtdKmk1WR9LDSorWPvo", "kLtcJCo6W6SWlSofW4am", "WOtcV8oVaem9WR7dG8kzW4m", "W5iEWQSDaSo6WOGFW74Z", "W4jfWPhcGLhcU8kBWOJdMsu", "vmoqlCkyACkiWQpdLCkrW70", "W6xdSJZdSW", "WRJcUSobDeNdUexdLmoXW7q", "bCkAvmoyWQzFqu9bW6C", "w8oCW6hdNIZdMComWO48Eq", "WRqfWOW", "WP41W6xdNd3dHZiZW64m", "W5rcWOZcKvNcSmoj", "jeBdSSoLW6BdJ1/cImo+sW", "uCozdCkcWQqhdGiCW7S", "l8oeWR/dTLz6asNdTCkr", "W5aDkSoRgxFcK8kuWRFdTG", "FHDWbCoFW7JcHaKtga", "W4qVeCouWPvkWRFcImkbqG", "W78iW4PcW54eWPWivSkc", "W5JcHSoIDSk2x343WO7dKa", "W6GaWRVcR8kyWOpdUSoxlgK", "F8ocW7hcOCox", "tf7cU3BdTW", "FtDHCN3dMYTSwmkC", "W54NW7HyW4JcJmoKqgtcIq", "WQSOcSokWOrmWRNcJ8kymq", "ogSZoYhdGraRf8ou", "pSoTWPG9W6RdOCkogmkfWR8", "WRGkW5nkW5yaWOWzeCkb", "WOlcV8o2ea", "hCowW6KmnhxcJXy8", "W6FdOSk0WRbir8oXWP0RkW", "aW44WQ4MWRddImkguee", "W7BdTmoKWOyohCkPW4aGja", "ASouW7/cTSolWOe", "osxcISk8fSkuCMT0uG", "i8oPWOTeWQfHW7VcLKxdVq", "e2vVoCoFwaPMjge", "AeFcGSoZWQfXDCowWPvF", "DXVcPSkUWP/dIvBcG8o6ra", "WQhcT8oCW7NcLxOoW7hcNq", "WR3cIcddVMhcK8o+n01+", "WRarWOncW5WvWOLmuSod", "W7yKW6hdRMBcG1PIWRaS", "WRGFWQZcUmolWOxcRCkwoxu", "WRG6dCogWOvAWQxcJmknqa", "amkoBCkTW4/dUdr0hSoo", "WPGEW5hdLG/dOCkvW5NcGwq", "W6SVWRCBW7ldPwzhWPCD", "sKrHo8oEt18", "W7vwW5JcKmkUg8kyW6upWQW", "WR8lWO1bWOydWOrkwCkQ", "aSkAW7ZdO1WV", "WRTlW5JcGmoVh8oc", "WQ7cNNe", "uSoCoCkdmCkFW6tcKSkRW6a", "iSoYW4hdQ2K", "nCkmW73dRH4MuJNdQa", "W7JdSJZcVr4nW5L9t8on", "v8k1WOxcLGbcWP3cHSk3WRy", "D8okW7RcOCogWPJdJLbzCq", "tSkSomkuWQa", "CM4MmsJdGrmRf8ok", "bCkik8kdjCkcW6RdKCkuW6G", "W7nVW65iWQNcOIPaWOzg", "tmkSjmkaWQrsfmkzhZy", "WOhdLSkJnCoOgu5iW7tcTmkexq", "WPKfWQavt8kT", "dSo4ASovW7DWu8ofq3i", "gCoDW7ldRqpcGt98WQf+", "rmo2W7uxoM/cHu8Ukq", "cKpcS3pdSMtcIWxcHam", "kCk5W4vKWQRcSmoErCkuWRK", "W5vaW65sb8kHWRmrCu4", "mbVdK8kQWQzPESoFWPvg", "W63dQSouWQNdNq", "WR3cQmkrW7FcIwfkW73dRSoj", "w0DYiCozsueJyd8", "W7VdTmkzB0VdPG", "WQ/cNwFdTMK", "A8kGW4SKW7RdV8kCdmkbWQC", "ASk8W5JdRG", "wXXRWOCPWRxcKmowobe", "WPn1WQGDWP/dISo/qNRcLq", "lCoUqCoeW57dRbldJSo8WRq", "W4GHW6XBW5pcNCkWchRcLq", "CCoWW5VdRJRdOf4z", "mmoEW6pdQgL1Ce9ZW6S", "W4vDWOFcL0FcTmojWORdM2m", "amonWQZcJsVcGmoxWO09pq", "WRPHWRpdRxVcNq", "i1CFwmoVaCoqWQxcPtK", "W40eWQiAhSo6WPvxWRfS", "dSkeWPFdTKjgkf0", "W6npWO0EWOWGW5WlbSow", "W7xcPSkbW6JdMImbW7VcG8oF", "WP1aWQGBv8kPW6DamLi", "E8kFWR/dNatcJdG0WQjX", "ASobW7VcSmobWQNdJ0bE", "pCkGW4qiW7OtW7BcIHBcUG", "c8oiW7JcNvJdMxeQW7XG", "W7PZWRejW77dOIXCWPGq", "b0hcV3ZdVMlcNKBcMba", "h1BdO8kWW5f2W5JdJrBcQG", "FKqdaSo/uSkkW6NdTZC", "o8onW6pdJhJcUmolWO8/AW", "BCo9WO5ZWQu+WRtdIG", "s8ovcmkpWRLlvW8AWRC", "WQCUW6bh", "B8kOW5ddVs7dLHXlgCo2", "W7VcMsBdPCooaCoXBCohW6e", "DqlcR8oJW5ePWPtcKLFdVG", "WQ/dQN3cT0LlW7ORumkp", "WO5yWOtcHfNcTmkwWPVdNcG", "W4lcISo8BCkVsfr8W5hcGW", "W6zDW7JdUCkpW5FcOmkhBtC", "gSoEW6RdIcRdJSkoW5aOEa", "WQZcTSkmW7pcMwnEW7pdGmop", "F8kKW41aWQaZWQ7dKvFdPq", "eSo8zmouW7mpu8oDswC", "f8k3WOhcNa9nWOFcImo7WRG", "W5vaW65sg8oLW7PhCrS", "WQqCWR/cVmozWO7dOSknk38", "r8k3WOZcMXe", "pCkRbColW5pdVaZcImoBWRS", "nbFcKSoVW6CJEmoiW4mw", "wmkMWPpcGvGlWOBcN8kLWRm", "hSkmW6RdHd/cNCoAWOa0ia", "WRLUtCkhW5TAW7tdLmomaq", "AN/cJCk0w8orB2e5fW", "DvpdTSkLWPb4W5FdMGlcSG", "BCkIWOhcGa", "sSo2W6mF", "W5mvm8oZvxtcUCkzWQNcVW", "W7yKW73cQJpcNbrXWQK5", "fSonW7ZdHdNcMSkdWOKXCW", "xCoffd4KEmkUW51PW5m", "dSkwvmoFWPuvvfPmW7C", "WOatWQSag8oRWR4gjuy", "x8kFWRtdIq", "smktzSopA8kiWQpdHmogWQK", "FZvRBNFdLvj1rSki", "zmoGW596WQ3cRq", "W5ldGSktWQhdUXdcPhRcKLS", "zLFcJSoVW6L9ESkBW5qr", "WPlcH8opW7tcVLq", "bGXVa8oeW6hcGN0peG", "W6FcHvZdOmoghSo5ACoFW7O", "F3yGmYdcMqqTnmol", "W6JcN2xdVcxdUCkyy2vK", "W7fkWOVdH8oie8koW6elW6i", "yHldN8kNWQK1m8kEWOTd", "W6JdJtlcUZtcM8kyCaG5", "W6DYuColW5KBW7xdNCobvq", "vmoDo8kwEmodWQVcJa", "ovmUqq", "amoXlSkoWRmCb8khese", "W4CZW7bAW4ldGCkWatddNa", "BCk5WODrWROQWQZdMfJcQW", "F8k3W5tdTW", "WOWbW4VdHqBdOmkdW5VcHNy", "xCodpSkAWOJcUW", "WRNdHx/cTCkdw8oLkSkwWR8", "W6P5rmoyWOKoW6xcHG", "ESkTW6pdP0bKDbNcTSka", "umk6DCkOWQVcLgJdSCkYWOa", "jmkkWQpdPSkiW5ZcLbKcza", "W7DuW43cISoWr8oBW7WjWQ8", "sSoRW6Ow", "W7pcO8otye7dUbZdHCoSW7m", "aSkgsfHljmkLW7vRWQW", "tSkxWQ3dLay", "WQhdQ8krmqFcVrFdK8oVW6G", "zCk6rSkwWOxcO07cH8k/W7W", "qCohfuXfDCo5WOr9W7C", "WP5tn8oPhhhcTCosW7S", "jLKKwSkyWQpdLILi", "WRvta8osW4VcN8k2AWS8", "W7OdWQlcU8omW43dOSoFk3y", "WRTEuSkwW4XAW5/dRmoGpG", "mK3dQ8o1WQJdMfJdN8kMwq", "DHq1uSopW73cNdftfa", "W5LaWR0Bv8kKWRimmeK", "W4BcJSo9", "hSkUl8kmW6vRjColmtW", "W4vyW7zkdCoYW7zxFXq", "W4TrW5JcNmoUcq", "s8kkEmoFW5RdTLePsmki", "W6WaqCkjW5ZcICkQyuqH", "WP4dWQSzWQFcGmo0nNxcNG", "tCk5jCkvWQrBaCkneGi", "oGxdJ8kRWRbXBmoFWPvj", "umoQv8ktWOG", "WRJcMxldU3ddHCk4lq", "uCkRla", "lmk5W4OqW7uSWRhdNHBdVq", "p1BdO8kWW5X/W5BdMbRcPW", "kW/dSSo5WQ7cLbhdHmkRcq", "W7/dKdFcUtpcN8o5CHmM", "D8omW7/cTq", "mKhdOSkHW7VcKr3dGCoIva", "krzxw8o8f8olWQBcPgW", "DfpdVSkNW48TWPBdJH7cSa", "tCkgWRNcVJqQibr/WRC", "ACoIh8kNbSkKWPpdVmkYW5W", "a8oje8kkW7zudHqtWR4", "W6T6hCkcW5WkW6xdL8oEfW", "yb9EWRKRW68kW5X8qW", "WRqyWOZdMCkJwSoCWQHAWQS", "W79Ca8olW4NcGSo3zHHO", "mmoSWOBcVg7cSKSvuCkI", "W5BcT8oVfMuNWPhcI8olWPa", "WOLPWRzmWOBdHmo6qgtcIq", "qCopdri", "W73cMYhdPCoycCo/FSocW78", "W44NW7HmWOBdL8kQfbhdHW", "W64QW6VcVepdHeWVW6r8", "WO/cJSo9DSoKr2r/W57dLG", "WP3cHSo8y8k+sa", "pLm0w8kt", "WP4mWOhcN0JdTCoyWOFdLdC", "vmospG", "zCoPcSkEWOhcTLZdJ8o0W74", "k0xdUmk1WOr6W53dGXdcRW", "nu7dTSk8WQZcLHtdN8kQra", "WP9Bm8o5gNBcQColW7NcRq", "ALNcImo4W60", "W7RdPCo2W6uCe8k+W5mSnq", "WRiAWQhcRCkfW4C", "WRqwW4roW41CW4OrdSot", "WQ84WQDuW7BdOMivW4nu", "W7fFWOmgWOuvWOWfxCkp", "W6NdGhNcTCkcwmo1ECocW70", "dZrIy8kqjSo4WO3dUwa", "WPFcOCoWB8k4dvT1W57cLW", "yNhdMCoL", "WPLez8o6agBcV8ooWQpdRq", "WR3dSmktnrRcSq", "WOK7W7HfWORcJ8oMethdIa", "ASoeWR/cPmonWOhdIv9rpW", "DqhcOSkzW4C/WORcNZtdSa", "WO1gCCk7rctdVSodW7hcRG", "W4SWW7vDWOlcKSkObsRdJG", "W4LpWROqvmkHWQnzBqG", "WPpcMSoHBSk2thm", "wSksWQ7cJxJdLmkoW4f4ia", "WRVcVCo7WRjvv8oQWPS2iq", "WRFcPmkioq7cOWhcNCkIWQq", "amkbBmozW4ZdVcXRfCoa", "t8kzkmkskSkgWQVdNmkF", "zSo2W6atl33cGe8Uja", "W6VdPCoIW6Sjamk+W4i7oW", "tCoyW7/dUMGZDuqGW6W", "eSo+ASoxW6umsmoBugm", "WO5fACkTtchdOCocW7pcSq", "zXJdS8k4WOCV", "WQlcRYJdTrizWRP1sSkH", "hSkfWPFcTv9bkGLUWRu", "W7ygW6JcKmoWeCktW6zgW6O", "nmkvW7hdPvCRtsNdUmoa", "WR3cUmkDW6FcIxvgW7NdKmkj", "WPTzW7juwmkQW4GaWQf+", "EedcHmoPW78cp8keW5aC", "W5P0sCkdW5Gj", "s8kxeSkFWRDxvX0EWRW", "wSkhqSkEWQjicKaCWRq", "pajgsmkOnmoCWQxcPxO", "zwZdLSoZdmkjpcqQuG", "FhqZkc3cGGb7smky", "WQymWOVdH8k/cSkDW7WoW6i", "rWyGDCkmrKWKjta", "tSkBWQ/dLq", "F8oQW5CsWQ0+WRpdMbVdSG", "W5NcM8oWBSo+dwnPW4dcLq", "W4yNWQqpWP/dK8k3eZpdHG", "WRSFW6dcR8ozWO7dOSoFCMK", "FCk8W4hdRd8", "FbTyW4SXW7ibW5XXqa", "p8o4qmkwWO3cSLJdLSoXWQC", "dCoPW5FdI0uFW4NdNSoKW7O", "W43dKSktWQddVatcQxRcJLK", "W5brWOVdIhlcUSoCWOtdGda", "jxq9mIpdKG", "W6FcJghdO23cKmoLBfD8", "WO7dP8kPvcj+W5/cG8oFWOi", "vCk0WPpdJ0joWPZcM8kIWRu", "WQvWWRZdVNRcHG", "W6pdRmkijX3cTXFcNq", "WQasWRNcVColW4FcTSogm3S", "cr3cUhRdT2xcIa7cMbG", "DSo7qSkBWOG", "W6JdQCoHWOqjh8kRW5m8nq", "W6PWWRZdQgpcKeq9WQGV", "WPKbWR0bbSoNWR4gjuy", "wSoammotimorW63dV8ojWRa", "DIyZlIhcJuO1f8og", "bCkHWRSjlxVdJavOiW", "W7tdSmoIWOyjhCkOW4iSja", "W5tcHSoNiSk6qxzJW4pdJq", "W4LuWPhcNGtdTCkkW5VcHwe", "CrnktmoXbmovWQJcS2O", "jWddGCkQWRr9A8orWPTk", "CqnlbmoTdSoxWRNcTw0", "fCovda8eDmk9W5e7W70", "jmk6W4nTWQ/cUSogrCkmWQO", "ASkOWPBdVSkBnbxdHtVdNa", "f1PZWOP/WQNcNCotDHC", "W5NcVSoNeJW", "W4SWWQSCxmkSWQGopey", "WQ7cR8kDW7BcKxTuW7BcG8oo", "W5rFWPhcL1i", "WQZcPJpcVuPCWQPSxCon", "WOO5W7XkWO7dGmoPaIxdHW", "DHq0wSop", "W6VdS8o2W7qihCkOW5m9ia", "WQ/dNN7cTq", "W7ZdRmoCW6RdNcydWRFcJSkC", "WRSEWQ/cP8ouW43dUSoFmxe", "cKDSEmoys18Hiwe", "sCkvWRtcKaZcGIr5W610", "hCkVl8klWQXEaCkhgx8", "WQCOWRyl", "WR0EW4TnW5GpW4Hix8kq", "e8kUWQLlBINdMey3CW", "WQZdJ2tcTmkyva", "W7W6a8ogWPvAWRFcMmknuG", "W7rbW73dPSkmW4dcPmkwBIi", "uSkKjmkm", "cCosgWqbzCk9W5O2W74", "W70nW6TfWPFdUSkEvYldPW", "W6NcGd7dPmkGaCo+CmogWO4", "FCoyWRdcOHjKattdV8oF", "CszYFgtdJfT2eSon", "bfT+WO1WW6W", "WRxcQmk0WQPqhSo9WPj+Fa", "p8o+W7ldR8oEDKpcHM/cGG", "nvZcJ8oRW7mLESklW5KE", "rCo6W7m/n3NcGrzVmG", "WQehWRNcP8owW43dPCodpxC", "aW44WQ4HWQFdKSkanee", "g8kfBmoDDSoyW6RcHSoyWRG", "wmkpWQ7dKa/cGYm5WQ9G", "WRnnwSkgW5VcHmkJAbW4", "W5hcN8oHz8kRatLGW5/cGW", "qCk4W5HGWRRdO8kDb8kuWR8", "ESogWRdcOHjKhx3cSCkp", "b0dcV37dQw/cGKBcLX4", "mCk0tmkoWOhcVwldISoQW6m", "FKGmW6rUWRXCWP4GxG", "l1bHu8kCWQddMIKbAW", "W67dLmktoW3cRq7dLmoJW7q", "imkTc8okW5pdSaZcICk2WRi", "vCkDWRZcGwNdG8oVW5r0nq", "zHxcSCoPW6K3m8keW5bd", "hSo7W64mE3/cGbjYnq", "W50WW6fC", "W4DrWOlcL1i", "dCocW6pdPq", "W7/dQN3cTX1+W6yTe8kE", "F2q3mc3cJGi1h8kj", "p8kxW6JcR0SRscNdPmon", "W7ZdKdhcPsxcJSo5aby+", "jvOnW6LZWRS", "r8kIW5ZcSCkzEdZdTG", "W4y7WR4wWQVdK8kIfcxdMW", "W69BlSoNW5ZcSSk0", "WRJcUSobDeNdUfNcNCk/WQq", "WPu2W63cPdFdGfyWW69J", "eSkyrqiiE8k9W5G2W6S", "WRKCW45ZW7GfW5TbdCkV", "oJvmqSoSqmkjW6NdSdK", "CqnrbmoTe8orW7FcLhy", "FCkXW5ZdRdW", "l8oRWPVcUGhcT0LMtCk5", "W5mcWQige8oiWOnEW7mX", "W6XUeCogW50BW6xdMCoDuG", "umouw8onW7yhwK1FW7S", "W6b6vmkvW4eiW7BdI8oevq", "g8ojcr8mC8oZWPq+W7y", "r8oApSkjWPJdPZbHcCoq", "ymkJW5lcRmkonrhdIcO", "s8oidmkkWRfcca", "qCoheauaBG", "W7PZWQyqW6NcSG", "WR3cTc/dRgatWRP8tSob", "qCo+W6Sw", "e1PRWPO", "cqPtWQGIWPydW5Cesq", "FSoPqmogW4VcSKJdJSoSW6u", "jgGM", "fvzPWOzLW7RcGq", "W6NdK3NcPmkgvmkPkSkwW6e", "dSoGESojW70ju8otrgS", "gmoCoCkalCkaW6FdLmkxW70", "oCkAWRZdRmkrW43cKq58zG", "eCosW67dRxG", "BuSmxSk4eCkhW6NdOcu", "pSo0WP0XW7JdRCkfrmouW6u", "WQeBW4jsW5XmWP1ww8kr", "W7ddKmkejGJcSW3cNCkJW7q", "tmotcmkDWRPcoqWnWQ8", "omoTWPmNW7NdS8kkrSoxW7O", "wCobkIipt8omW7qdW6O", "C8kxW6ddSvTPtttdVCog", "W7ZdTchdPmowaCo+CmofW7u", "WQywWR7cUmoxWO7dPCot", "W6VcKM/dO2ZdImkWkev5", "dmo2W6KklMJdGqnOkG", "cmkbdr8bmCo0W5CSWRG", "W6rKWQ8gW5JcNSo9tNFcNa", "W7xdNN7cOCkdrmoOpCkFWQW", "qmotpSooWPdcQwKZtCkp", "gSkhzSozW4tdQdPMzCoF", "W4FdQmkIucX7WQxcLSovWP4", "r8ktW7i", "WP4FW7rucCo3WODbW6vV", "W5HrW4lcKSkJkmkzW68pWRe", "v8kOjmktW6icwmoefdS", "gmown8klACkAWQxdH8kBW6e", "h8klv8obW69MsufmW7S", "u8oBfSkEW6SaeGWnWRW", "WQhdQ8knj0NcRatcLSk9WRe", "WQ7cOmoXW6vvv8kJW5rIDa", "x8kuk8khpCkaWQ/cJ8oAW6S", "WP/cHSofW5dcPL3dTZS", "W6xcNwtdUMZdGmo5Bu9L", "xCoFcCke", "hHjttSk0cSoBWQZcSG", "W5POWR5mWO7dHSkLcsRdMq", "pSo9WPxcR3FcUvzdfCoJ", "WRnPWRZdO2m", "WRZdQ8kuoG0", "W5aEWRCha8oRWPrDW7iN", "FCoyWRdcOHjKasNdTCkp", "zX5fWRK+W7aiW4f8rW", "nblcG8o0W6iOD8kbW5Sj", "a0D0nmkDq0K", "W7tcTSk+WQPlhSo2WPPOCa", "ceGGi8orrLGJFxS", "gSo0W5xdILCDW5ZdNmo6W68", "AfNcLCo+W7q/o8kCW5a", "q8koWQhdKq", "smklW6JdNZNcMColW4WHBW", "dCoEmCkEWOJcVdCQt8ka", "omo1WPBdVSkdpr3dGtBdGa", "W7lcQ8kdALxdTXhcKmoVW7q", "FSo2sSkiW57dSW3cISkUWRG", "FSoIaSoAWOlcV0/cH8k/W7O", "wSowwmokWRrsdHKqWRu", "jgJdM8oGsmomjZKLcW", "lSkDW7W", "jSoKWPxcVhNcVualt8k1", "WQlcOY/cLbeyWRP7xCoC", "rCkYWOhcNbffWP3cLG", "r8ktWQldLG", "bmkwv19spmkQWPDVWQW", "b8oYW5BdHKKEW5RdGCoUW6m", "W7vOWRJdQg7cH1DJWR0J", "WP7cI8oWDSk4ahvXW57cNG", "WR3dKmkpWQVdSXdcSgJcKKy", "uCoSWRPDp3NcGbz1iW", "tSogna", "WPWFWOhcN0JdQW", "WRtcOmkKW6vvxCoUWOz4", "W5/dT8o8WOBdQbq2WPBdTSkT", "WR7cNwZdOMddNq", "aCoVW6ixox3cLrjZjW", "WOddISkQB8k4x3b5W57dNq", "nuqDW4TOWRjwWObUuW", "yvtcHCo0W7fRD8oqW4uh", "DSo0zmosWOKesSoExgy", "W63dP8kojbddTrxcHSk+WRa", "W4GHW6XBW4/dNSkToYddIa", "W7JdRSoyWQNdNq", "WQNcSCkKWQXsvmo3WPv1", "emklWQ7dHdZdICkjWOG2DG", "x8ovkSkykCkdWQ7dLW", "w1RcSx7dTw3cHeFdLXK", "W69dW5DoWOCVWOCzeCkx", "pLi1wSku", "BceXosRcMaiRuCkA", "pLqZ", "W6/dU2JcUKS", "FCoyWRdcVH0GvcVcR8kp", "amoCW6RdJcZcKCo+WOaRCW", "WOrkE8oOa3xdSmkwWQNdOW", "kSkDW49KWQRcUSoEaCkfWQu", "obWdu8k/dG", "hSkWW7iwzsddGX9OEa", "bmoTAa", "WPXaW4xcLvlcTmoiWPJcIgy", "WRPLWQ7dUtldKGLPWRm6", "orjh", "vCkCWQlcNhJdHSkFW41TvG", "W6XtW7ZdUSkwW5FcR8kABI0", "sfqHW59WWRFdMmkDF04", "WOCdWQzvg8oQW6rhCrS", "W4pdN8kCWQ7dTWhcJG", "WRyUWQSAW7O", "fCowW6m", "WQu9hCogWPvAWRFcMmkraq", "WP/cLSouW6ddTXS", "W6vkW7/dSCkuW5lcOSkABIG", "j8o5W7pcUCogWOZdIbDMoa", "W7xdNMNdUwpdGCo0luT+", "cmoOWOlcHXfyWOBcGCoOW6y", "d0f6WOu", "W6PLWQ/dVMBcLHzKW7WU", "W7BdVmo4W7qie8kVW4uIiG", "mmoWWOraWRWRW6FdKflcTG", "kvBcJCo6W7uIz8opW5Ck", "t8ozF8khWPNdTt01tSkb", "v8ovoSkwkmosW6RcKSoyWQK", "rL3cRNddSYZcGH/cGae", "AHTHfSorW6hcK2ubcG", "WRq0bSogW5yvW7VdL8oFsa", "W4O5W7blWOq", "sCo0WOTzWQuEWQNdNwBdQG", "dCoJCSorW6unuCofqgS", "AhlcM0ZdJLRcPtNcV0q", "W5f0sCkkW5bAW4FdKCobgW", "uCo6W7nhFcZdI1nYmG", "WO0ekmoOat/cSSkAWQhdUW", "WPjneCkUncddVmohW6xcSG", "WQVdPCkcpa", "oCkqWQ/cPJ8IpLiLW6a", "amoBW6BdQMO", "W7OqWQlcPCkxWPpdS8oyoW", "WR1ydCoiW4y", "WONdG8kMlmoOBIm+WOJdNa", "jNzjDCo7t1rMfX0", "BGPjWQGNW74zW5jPtW", "W7yxWQZcVmozW43dOmozkNK", "lmk3WPLeWRS2WQZdNa", "mmk0W4hdQJRdMGLvfCo2", "qmoucW4lAmoEW5y2W7a", "zXHCWR0/W6GvW4jLqG", "WRqOe8oFWObmWQFcJCkzrq", "amkfAmocW4RdPIX3bSoF", "kmktWRFcOLWLudJcRmki", "WR3dPCkxmq", "WQFdQSkx", "uCk9l8kjWRzzbCkzeZO", "WRqUe8otWObAWQBcI8kdra", "W4DvWPe", "e1T6WO0", "n1JdTSk1", "WQJdK8kyW5VdUWNdKNNcLIi", "WQ/cTSkpW7dcHwrvW6VcM8oj", "W4Cvm8o6whhcV8kaWQVdTG", "cmksWQ3dJGpcGxTYWQ9K", "DCoiW7dcTCow", "WOaqW4xdLH7dQCopWO/cLsC", "jeRdQmoOWRNcJvJdMSkTbq", "kSoTWOOPW7tcTSoCgmkrWR8", "tmoGkmkcWQLvbSkohdS", "x8orW5BcUbypFbHYWQG", "W4qlW4xcHL/cSCoFWOldMYm", "WR4fWROxsCkKWRqameK", "rmkEWQdcNghdLmkCW5f2nG", "WOBcTCo+", "WPVcU8kPrgWVWPldLmowWOu", "C0ygW6LJWRTl", "WQVcKgNdTg4", "e0LdimocweGOiYu", "WObdWOdcGKRcVmovWOZcIwS", "w1XVWPD+W6BcISksBHe", "AGTHbSoDW7hcK3inhW", "W53cHSoeW7xcQ0NdQdZcGX8", "oJJcL8kHc8kjB2OTbG", "W6tdU3lcRfDlW7KTumoE", "WOvKWQWgW5BcH8oYuhhcNq", "WO7cG8otW7BcPeG", "wmowmW", "lanwgmoXfmonWRdcRhW", "W4FcQSkqWQBcHG3cTMtcLeq", "cmkRWOhcKabaW4NcICk5WQG", "pe8hW69ZWRy", "W5egiSo1avhcV8kzWQRdSa", "ESkOW5HLWR3cTmotbSoiW6S", "p8oTWPS8W6BdR8kbrmovW7i", "W70WtCkpW5KtW7/dMCodbW", "wSozmCotl8kdWQtdLmkrW7S", "aSk9DmoBWQCcnmkohJu", "AfJcGmk2WRi", "W7foWPCiWOfwW4GucCon", "W67dG3NcPCkAvCoVymk3WOW", "lmoXWOtcV3NcVe1RrCk7", "WRqnWPZdICkZxCoCW7WFWRi", "WQ5vs8oaW4VcN8k0", "t8kBWRJdNeFcNsr9WQn1", "cvu3jHtcJGSxp8oi", "uCo5W5ZdK0GbWOtcGmkKWR8", "p2eZmMtcNWi7e8ox", "WQFdTSosWQNdJhqpWQJdK8kq", "WR8lWOnpW5CsWO1xsSkf", "wuhcTwVdThJcKXVcKq", "W6WquSoHWPZcS8oOkKaM", "juS1x8kEWQ/dGa", "WORdMmkbW7/cR1RdShpcH1q", "W7RdVCoj", "aCoNW5ddKLuaW5JdJ8oNW6G", "oCkrWR3cP8osWORcNHCqCq", "W63dUwJcSfvp", "amoGW4dcHqXiWP3cH8oRW70", "AxNdHmoOc8o9ptCNha", "a1i/WOfYW7VcJmotAXK", "WOL1WRKiW4/cKSoKqgtcIq", "fbtcLY7cQsddKYRdH10", "smoZASohW6uC", "qf/cVZJcPq", "oaFdJCkQWRD/B8kLWOrn", "WPhcHmohW6dcR0G", "zszJzgRdNKDTpSkr", "W6VdHxhcTCkFx8oQFSkAWQK", "WQqyWPZdLCkYwSooWRHkW7m", "F1Suymo2wCkfW6BcShG", "W5edWR4ydW", "laNdJSo/W68Nza", "r8kIWQaEmM/cNb9GpW", "qeD2WPD7W6ZdICoBDGy", "bmkoWR7cG0RdJxy0W7XK", "ixq7pYe", "le4VvCkfWQJdNcS", "Amk5W4tcRColnb3dVtRdLq", "W67cL2BcSmkArCkTy8ou", "z1RcK8o+W60", "W4rzWPpdIb7dTCkBW4VcLwq", "gmo/W47dHvWmW5JdMCo4W6m", "W7GZW6JcPJ7dGfq0W7X/", "hmocW6NcJtxcKCoAWOadAq", "WRuxWQNcI8ouWOhdPCof", "lmkSW5OaW7L4W6FdJu/dUW", "W5HDW47cMmoXqmoC", "WQldU27cRuPjW7GPumkD", "WOWEWQKeh8oVW4TcW78+", "tmktWRJdNaBdKxL7WRbK", "rSkIWPdcNGrpWOW", "mu4nW4TRWR9kWOe", "WQhdG2tcOCkfcSoNCCksWR0", "EmkOW4DMWR7cUG", "wCojgGOrDCoYW5C", "qv1+WO52WRq", "WPddJ8kXiSoLsx5MWPdcKW", "sXyGzmkcbHXZa20", "sreGzmkebb4fCM4", "WQuqW7bsW4SiWOzc", "y0BcJSo1", "y8odcWidDCo2W5GPW7y", "vmosdbHfESoYW4S3WRi", "rSopfbSjECoEW5GOW6S", "WRZdHwlcTmkyrmklmCkFWQi", "W7tcUmktWQNdHIepWQpdISku", "WOZcH8oJpmoLaN9IWO4", "W4fzWOK", "nuRdTSoWWR3cNb0", "BSkVWPNdRmozAvJcHMZcHG", "W4ZdKSkbWQxcHG3cTMJcKvS", "y8o9WP9BW6L3WOpdKfhdOG", "WPv6W71bWPNcJmoKqgtcIq", "fmkXWRjAAIVdGKiHDW", "CSo7ASowW7zWvCoBugm", "bSowW6ZdOq", "W6FdHxhcPCkthCo7FSoDWR8", "WO1aWPFcMvRcOmoq", "svf6WO9+W6VcGCoECv0", "gbpdRJhcOZxdHLRdG18", "cI0sDCkghSkoWO3cMfC", "W5DvWONcLvhcUmoEWRJdKdC", "uCkxfSkfWRLqxu0mWQ8", "W7WpW4PkW5ajWOLls8kx", "FZyBfSoPr8kjW6NdSdu", "pMK1mchdGG0Peq", "uCo8W7uvn3dcTq", "W5S6W6XgWOS", "wmkKjmkd", "W6NcLZddSCowemoOFSotW60", "he8lW6L1W6qz", "nc7cHCk5hCkFy2zNxG", "WOVdJtxcUtlcJSoODqO/", "q8oRW7WEmM/cNb9GpW", "WRhdMZ7dG2tdGmk+jevM", "lSkqW7/dTq", "WPSqWRSghmo7W7PhCqC", "mmoTWPGo", "w8ote8otW7yhwK1FW7S", "tmoRW65xkgJcJqD0nq", "W6jkW7tdV8kiW5FcTSkwF1K", "i2JdNSoTqSoblJHKgW", "W7vvW43dMCkThSkzW6qdWRy", "WQ0nWPtdImk1tmk/WRLrW6W", "W7NdII7cOJ3dOSoOCaO7", "WQWoWPtdJ8k2oCojWQzuW7y", "tCkfWRJdHtaMpXbRWQS", "W77cGmoNz8k0t3jI", "sfFdUKRdQgNcMfFdMWi", "W4vcWO3cL03cVmoxW4VdKs0", "W7NdRCowW6dcLW", "WRVcQCk3WQHDrW", "DmoEW7xcPW", "W5ndW5JdKvFcTSouWOxcMcW", "aSkPi8krW6vFcmkkaYe", "WP3cI8o4zCkWwxz8", "emkOWQTlBtldMeOXDq", "nmkmW7xdR20Mwc/dSmoB", "uSkCwvPqBmoLWOj4WQe", "WPddHCkoWQ3dTHpdTZJdGqq", "D0mkW6DPW7nBWP0TcG", "Dv7dO8k0WPXoW4NdMb7cPq", "m8ktWRddO0CWuI7dSmoz", "rCohcW4lAmoU", "wSoFoSka", "u8kIWPtcTWLjWOtcISk4WQ4", "gSkUWPtcLWHZWRJcMSk3WRq", "WQGSWRCnWR/dR34bW4qh", "CCowW7ldP14TxZJdVCog", "WQFcJMFcUdFcNSoPCWT5", "WQPOuCoyWOLvW7pdKCoBta", "h2KMnslcHqW4bCon", "WQNcLcZdTIVdJmk8l01O", "DXRcSCkTW7ddJKVcMmo3va", "W682W6JcUdBdMuGWW7j+", "wSoyzmoCmmkeW7tcJSoxW70", "BCkIW4u", "W4zaW75sc8oPW6PhAaS", "hSkWW6mtlsi", "dmkAvConW6ylsK1gW7C", "W4rmW65acCo0W7zhyXu", "WQZcNxtdTIJdNSkWl01I", "wHf2WO5WWQtcKmoABr0", "n8oEW6BcTCoqWPJdKXPaiW", "wmkIkCksWRy", "W4WAm8o+gW", "W43dVCooWQBdHZqiW6xdOSkr", "xmkIW59QWQdcUSoa", "amoEpmkbWPpcU38Nvmkn", "v8o9W6jDE3xcIe4Mja", "aCkwsLjwlCkXWOL0WQ0", "lH9kvSk1fCoCWQC", "dCkTWRDkAZpcNWvMyq", "yxxcMSoIrmohoZmNgW", "gaRdTIZdMJ7dHLNdLee", "WRHGWRJdSJxdLum4W6v0", "W4/dTxdcTLenWRqOqmok", "fCogW6pdMqpcM2GOWQr5", "qCohc0yxFCoPW5X3W6W", "ySkSW5HUWQNdSSowaCkxWQa", "B8oXWOTEWQ46W6FdM1RdVG", "oCo9W7FcUSodWOtdKL5Dma", "W6GqvmkjWPZdNSoJjeSM", "e8owW73dRg9QyG", "mmk2WOGo", "W5vaW7ibtCkIW7Oroei", "EfSugSoPsCkoW77dRc8", "nsRdTmkWhmkfFMrNwq", "B8ktWQ7cPmkeWO7dJfzdiG", "g8kilmkxzmkpWQBdK8klW7O", "uCoaW4FdMWCFCHyTW6y", "W4yEWRfucCo3WODbW6vV", "nSoIW5L5WQNcSCkmvmolWRG", "E1dcGmo/W78clSkjW4eA", "qmkuWRVcMg/dHCkcW5bRlG", "sSoboCkDmmkfWR7dIW", "W7/cMYhdO8oycCo/hCobW70", "q8o0W6yuE0ZcNHP3jW", "kCk1WPe", "pSkPW4qdW7b/W7BcIbBcUq", "WOjfW7C8w8kQWRadWQ4F", "WRZdOCksmrVcRGdcKmkxWR0", "W4DuW65ad8oIW6rBiuy", "W4ywWRmv", "DSodWRxdTmohWOhdGurdBa", "nrRcLCo/WRG", "WQBdMxZcVSkxva", "kSo9WOFcV3NcTeXKtCkL", "W6f4sCkhW5ysW5ldJSoiha", "W4G/W7Hq", "W6O6W7vhWP3cLCoKbhNcJG", "b8oPW5pdGeuDW5RdGCoMW68", "WQBdJY3dTSogemo4FSobW7K", "W5rFWPhcL1lcT8oEWPNdLda", "W6GSWQCxW7ZdRwajW5yA", "gSkoAmowW43dUI1QfSoa", "Fmo4WPHvWQCRWRq", "tSohWR7cRNSEzaGJWPa", "W400W61jW4ldH8k3btBcHW", "tCkeWRVcQtKWjGfKWQK", "W5BdT8otWQhdGcClWQtdKmkw", "eConW7RdJhxcHmoCWOG7zq", "W4FcV8kdW7VcHIuhWRhdI8ob", "WOaCm8o2gt/cTmkCWQldQW", "WRnQWRRdOw7cHuyUWQ89", "vSoWW7u", "BSoIW5ddSCkQdGldVI3dSq", "W6ddU2/cQH4nW7aTcCkm", "WQvUWP3dJmoos8onWQHxW7e", "W73cT8kIBeFdQ1ldLmoMW7O", "cebM", "W5GbWQOFuSkRW7PjoKG", "rWyGDCkmwvSHycO", "BauDW7O5", "BCkFW4ZdMZBdOJDgeCoW", "Emo2WO1xWQu6", "trtdUNZdT23cMrJdIvy", "w0DTW50RW73cJmkmur4", "a8kvbmot", "WRG/WQddSCobWRRcO8oakKO", "A8ocW6FcUSoa", "FCojWQNcOGnXA2ZcP8kb", "W6NdLhZcSmkfq8o1ECkrWRG", "WP0bWR0Bv8kKWRq", "gCodW6/dIq", "W6pdTmkioadcSatcMSkKWQa", "tSkVW5RdQYldRLLfgCoN", "jL58eCkcWRxdNdumsq", "W7zQWRZdP2RdIf1XWRuH", "W7xcMgpcOCkxxSo2ySoCWRK", "WRixW4juW7OoWOXaF8kx", "WPpcHmoKCSk2qW", "W7xdK3NcP8owu8kKp8kaWR4", "W4nyWOtcMfNcSa", "FKuzW7TUW7njWPSLgG", "WRqyWPdcNCoQdmoCW6SkWQm", "wHSkfSorxKWYiti", "vCovnCkw", "WRNdLMlcTmkyrmk7", "fmoyW73dRq", "zCo9WO8DWRK2WQVdKf7dQG", "rCotcKXBpmk9WOuZW7e", "BvtcLCo6", "WQaPWQ4vWR3cRhqpW4vj", "WPFdKCkTlCk9rgeU", "vGaXW5iMW4RdLCkcnKi", "jhy2ptdcIq", "Ce5uWQPkW68mW5X9qG", "l8o4WOzrWQq+WRpcLepdUa", "F1tcJCoUW6m", "DmkNb8olW4BdRGhdLSo5W6G", "bb3cTSkWW63dJvJcH8o7sG", "tCoBnSknWPy", "WQdcMxlcTsxdNCkToKHV", "qfFdUSocrmohoZmNgW", "WOieWQ4yc8oZWO1tW7HY", "Emo8WPje", "fSoodqyjmCo5W5yTW7e", "WPT1WQSyW4hcGmo8qhxcMa", "mCk6gCovWOdcUuVcHmk4WQO", "yCkUWRruBI/dGei3Aa", "WRuAWQhdQmkwWOtdS8ocpNm", "WOJcO8kGm8o3hc88WOldNG", "zbxcISo+WQzRCmoIWR8", "W4SWW7ufWOZdNCkQfcxdGa", "WQGDeCoBW4NcGmo3DbHH", "w1BcQNpdUM/cJW", "iWjowmk0fq", "rSoEWO7dTf9bnWmLW7O", "WQ3dQmkenrVcJaZcMCk0WRS", "W5rxWQqyc8oOWPupWRe2", "leJdTmoZWQNcKrZcM8kHcW", "W7zNWRhdQ3ZcHKCMWRGS", "W7/dV2G", "CaPjWQGNW74zW5j1xa", "WPddNSkJiSoOhdCOWPddIq", "WQRdMhZcVCktu8k8n8kCWQm", "hSkyWPJdQenBEXO7W6y", "rmkiW6ZdTtRdINzGWRLG", "WP8ez8o4gxpcO8kgW7JcOa", "WRjLWQNdQ3/cHXvLWQKM", "oCknWRldQmklWONdIueoCq", "W6GSWRawW7VdUxeuW7mr", "WRfHWQK", "hSkwWPm", "amovoSkcWPtcQN8Qt8od", "cmkpW6ZdIdtcNComWOq0Aq", "kqxdGCkRWQPGESoFWPLo", "WRrrW4lcNSoQfmoCW7GdWRe", "BrPkvmk4cSoyWQxdOgK", "q8kxWQ/cTwHWyvqNWQC", "WQCyWOnfW5uaWPTwa8oe", "nbldL8kRWQfXo8keW4fc", "fCowpCkFlCkoWQ/dNSkrWQq", "yhNdG8oGw8oBidi8ba", "t8kBWRJdNeFcGZLMWQ1X", "if8DWQHKWRjyWOe6tG", "DSoJWONcOctdSX4zqmk6", "h8k9W64opNhdGqnUnq", "fmoNW4hcLtZcV8o8W5mDBG", "W6a8W63cSZ/dJvCXW7j9", "EGJdTSoUWRxcNb3cKCo8", "yCoxW6pdSLmQa33cSCkp", "C8kTW5RdVspdPbDtr8oO", "WQqbWQlcRmonWOS", "W4ial8k7es/dSSk4W7tcSa", "WRVcJgZdVNe", "hSkcWOxcPrflpvb6WQ8", "WPXeWOhdIatdQCkuWP/dKxO", "sSkLDmoBW6PpeSkmtM4", "FSo0bCkmWOxcVeJdN8kLWQ0", "nvhcImoTWQy4pSovWPCr", "m0FcUmkGWQZcNGZdNSoIaa", "WQz0W7ddUwFcMG0SWR8L", "ESo+W4PgWQa6WRddU1NdSW", "teVcRM3dULpcJGRcGba", "W6GSWRawW7VdUxeuW7uB", "hWhdR1pcQIldMv7dJem", "jmkHW4vOWQZcTSoCd8ojWQm", "n8kDWQldP8krW5NcJaCCya", "W7hdSCozW6FdMZieW63cKCon", "W4DoW74", "W7DAt8khW5etW7ldLSozuG", "WODNWQ5KW5VcNmo2wgJcNW", "F8oQW5CxWR0+WQRdM1FdOW", "sSorrCkeWRHorKipW6u", "l0m1u8kFWQu", "jCkcW6hcOSodW5pcNerama", "W7WmcSoiW4RcLCk2jb9P", "jKVdOSo1WRlcMelcLSoZuq", "e8kdrCoCW6CjqLrtW6i", "lSofWRFdTL0WxdhcVmon", "WQXEWR/cRColWPxdUSoclcC", "xvlcTJpcTwpcMH/cNr4", "E1ZcJmo6W6HTDCkhW4ul", "W4e0W6LDWPW", "g8obnmksn8knWQq", "lvZdQCoYWQW", "W5hcGCkVpSo2qxzYW5xcNa", "WR3dOCkajGRcSa", "W5hcGCk8CSkRqNnLW5S", "WRVdImoyWQNdJJWuWQZdJSkE", "zCoTW40oWOiWWQNdN1/dUq", "jwK8FdBcGWS8s8kd", "xCksaG0kCSoPWPqPW7y", "WPFcRSoVswWVWPldKmogW5C", "CmofW7pcUSorWPNdGvPr", "yHNcOmoOW5eIWPNcM0xdPG", "WRqiWOddImkJsmonWQrtWPq", "WQbLWRe", "k8k5W4uo", "WO4ykmo4fgBcUCkAWQVcPq", "c8oEW7ZdVw5SEazTWQC", "W5CCW6Oqa8o8WO9gW7C+", "BHXwsmk4fq", "W7qAWQNdTCkFWPddV8oAnNi", "W5ScWQekfSk1WR8jnK8", "W5esWQSrcCoV", "W5OtWRGvhmoLWQikpuK", "xvRcThJcU2hcJX/cLsO", "w8kAl8kCWPlcRNmQqW", "WRDuW4xcL8oOhmkvW6qd", "A8otcmki", "FvZcJSo1WRHXESoiWPvd", "ceqYWOT+W63cGCkFCr4", "WPqcW4NdJ3BdP8kjWQRcHgG", "WOVcKCoeW6e", "FtDYBxBdGfvPo8kv", "WRCVDCoxWOa3WQBcJSkdrW", "W7fvW43cKmoV", "E8kLW4hdQJNdOq", "W7HcW63dVSkuW5hcUmkozJO", "W7O1WQ8EWR/dV2adWOPt", "fCkAhqitpmo+W5u7W6W", "n8oFW7pcOmobW4dcKHCEiW", "WQNcMgtdLgNdJ8kQma", "W5erkSo0a3C", "FevIc8oHs8kiW7NdOcK", "WPNdKMpcSmkyuCkMFSkyWQW", "jmkpW6hcVCoiWPVdHuusCq", "ALtcJCo3", "W77cJSo8yW", "dKTWoSocxK41m3W", "WPyEW53dLG/dP8kvW5ZcJgG", "s8ovnSotj8kaWQVdGCklWRq", "eSopW77cJLpdNNOLW7i+", "tCovW6RdPwH8De06WQO", "WPjoWPqkWOHtW4ytcSod", "f8k9WQCspNxcIXT1EW", "n3q9mqFcHayRnCol", "zmk5WQpcRGfKdx3cOCkd", "W6NdTNxdTe9lW7ORdSky", "WPmgW6Pc", "vSk/W64EzJVcHr1XmW", "W5BcSSo8awrZW53dM8kkW5q", "W4faW4ldIalcPSonWOZcLti", "d07dTCo1WRddG1FdLmk3ea", "ubmNW40LWR/dHmklnKu", "WQHTt8kjW5mtW7VdNCkkta", "W6xcN2/dUxhdI8k3nW", "WQJdG2tcOW", "WRpdUSosWR/cHdmjWRFdJSos", "p8oTWOddQ8ofB0BcHM/cGW", "lCk1qCktWPldRG", "wSoFyCkMWPZcUN0NgSob", "c0PHjCodtXDMiZm", "WOmDkSo8", "sX4UBCkizHXZBM0", "WR3cQSkpW7BcGg5gWQBdJmkt", "W5evn8k7bxVcVmkCWQ3cOG", "CCkVW5hdQIxcV1KwdmoT", "k8k5WO4nW64sW7BcGbJcUW", "ff92WObY", "DIyZmdddKua", "W6FdMgdcOSkFhCk4n8kFWQq", "uSoyW6FdMttcKCkjW58Cqq", "FCoiW77cTCoD", "WRSFWQNcRCokW53cSCoJm3S", "cCoGWOlcNr0bWPNcHSk6WRm", "s1lcSJldV23cNGRdK1e", "qSophqWaAmkWW50/W6S", "mmk/W5RdT3RdOXzveCk4", "WRZdPCkycq", "WRHXWQNdQ2lcLfC1W7TT", "EmoDW6lcSCokWOK", "c8oLhb8eD8k9W7u7W70", "ydr+BNtcRv91tSke", "l07dTmo7WR3dKHZdN8kXdW", "ns3cM8kWgCkhFMDPxG", "WPv6W71bWPNcJa", "BZO+nxRdKeG1h8kA", "W4XvWOVcKuRcVq", "fuFcU33dT2NdIGJcMba", "W7fzW4/cKq", "eSodn8oqWQRcQxeYu8os", "xCk4omkvWQbsb8ks", "j8oOWPNcTNNcSamaxmoZ", "d1jToq", "l8kmWRlcVa43sZRcSCoj", "sWa/W5m3WRNdImkcoee", "W6bdW6RdQmoqWOxdV8orn24", "aSkhF8oFW4JdPcT0z8oD", "kvRcQ8o+WRpcIWZdMCkVra", "emkPk8ktWQrvcSkBbsy", "ogGXlIhcGqi3aG", "xmoBf8kzWPvifHGsWRu", "aLfcoSoifW92ygW", "W7VdSCorWQlcLhi", "W79kWPDLWOXpW54uhSos", "AuddTSoVWRxdKGJdN8kUdq", "ydqtB2JdN0DPvSku", "WQ/dSmkvjG", "W4azWQyDbG", "W7/dQmktWQxdHtObWRBdK8kq", "FgqZlMNcNXi6fCob", "tCkOpG", "WQNcUmkmW7FcH2jEW6xcKSop", "F8kXW4ddQMRcOKWaqSoz", "qCklWQ7dMJhcKmoAWOLLjW", "WOauWR4Bv8kSWRigp1i", "bCkWWRLAEZZdJe9YnG", "WPFcJCopWRpcVf3dQd3dHvC", "s8kmWQ7cKxFcKmohWPDMia", "jv80xCkeWRxdKIHaea", "W4NdGSkqWQddQG3cTMJcKvK", "fSoFWPddT1Hbkee1WQu", "hmkJW7DAohdcJqbYEW", "jhu3lG", "WPeiW4ldLLBcSmosWOZdNta", "sCkdW6RdHc7dISkoW4f4ia", "dKf2WO4RWQBcHSohBaq", "FefIcCo9vmkzW7NdOcK", "e8kZWOlcNqfvW4tcI8kZWQ4", "amkgqevvk8kXWO50WQO", "WPpcU8oTda", "c8ouWQpdIGBdGdv1WRj/", "pSknW6ldSfCNsxddOCoo", "tSo2W68BnwNcMbjSjW", "W4aJWQC", "m0ufW6rIWR1nWPSMhq", "WOldNSk9iSoRhYy5WOVdKa", "W7BcVmonzvhdTLFdGSoXW6u", "WQres8oiW4tcMCk9AKmM", "bCkEWQ3dIqVdGdj9WRn7", "W4nFWOVcGLVcU8op", "W6aFaSoaW57dJSo6jeuP", "eCoteCkiWRT4cH8wWRG", "uSoTW6GElNFdGrDOiq", "xCoeySojWONcQxGQq8od", "W6vnW4NcI8o6kCkzW6qdWQe", "yxtdK8oY", "W6NdOSkooH3dTvtdHSoXWRC", "y8o1v8owW4tcO1tdLSo5W6i", "gmoAn8kEk8kEW6FdH8klW6W", "jmk5W4vKWQRcSmoErCkuWRK", "WQ7cT8kJWQa", "FtzYAwJdLsrSwSkv", "WOeEW5bvW44oWPPbgCod", "kqFdKCk1WRD9AmozWPvo", "W4KeWQCeg8kMWRygiLq", "deipd8oXv8kzW7NdRcG", "AXNdJSkQWP3dJvtcHmoIva", "WQzLWQ/dR2hcGqK", "W6iOW6ZcUshdJe1nW65/", "nSk5W4iPWQVcS8otg8kxW7y", "FComW6BcTCkjWOxdKa", "WPDBW7q8xmonW5D6WQ4e", "vqyWDCkabH1MCwu", "AqpdM8oGW4u/WOhcM1VdVG", "keBdPCo5W7VdGq", "WQJcOmk7WQPkvG", "lmo/WOvcWQrYWQJdIuldOG", "xCoAWQ/dKqVcNIuPW6D0", "tSkyWQxdLuRcItD8WRv8", "W4hdO8kUvYj/W43cKCoyW68", "WOhcRCo5sNv9W5hdNSkzW4u", "xSkoWQ3dKaVdGgqZW75u", "lKpcGmo3W681o8kCW5by", "uSkIomoaW6vywCompwm", "BvCFfCk1dSopW7FdOdK", "ySoPgmoDWOFcTvpdJSo9W7G", "W6WbvmkqWPhdICo2nfC3", "W7bUsmkvWPu4W7BdLSodfW", "xvlcQd3cPq", "xCoEW4JcPbLoyG", "DbBcQSkTW6JdKuVcH8oIvq", "W4rrWPhcLW", "rvdcG8o6W7rREG", "FevIcCo9vmkzW7NdOcK", "bLPXWPnIW73dG8kmofa", "EvaDbSkHbSonWQhdOh8", "gaBdUI7cRsldNuVdHuC", "yZ9NCh3dGLirr8kw", "sv1WWPD+W6/cJCozEqm", "gCo0bmkaWRCA", "WPmbW5xdHa/dO8odWR/dVH3dQ8od", "W6BcQSkMWRfvxmoWW5n6Da", "WO3cKSonW7RcVG", "s8o4W68oysRdNem6jq", "q0dcTxhdQW", "W69dWOXsW51FW4GfhSod", "W6FdP8oMW6Ccd8oQWOeYkq", "E1pdVSk5WPbHW4ZdMvVdPG", "W6uSWQSvW7BdPhmoWPPf", "WPPuDCkRiYpdQmoBW7ddMa", "cSotWRlcRMP3y0G+WQO", "jf3cImoOW7i+kmkb", "jSo6WOq/W7NdV8kdx8oiW78", "WOtcV8oJc3qRWRBdHCkoW48", "bKDRWPe", "BuyqfmoKu8oJW67dRYC", "WQZcTg7cUfDdW7ORumkp", "W4ldGSoIDSk4wwjJWPFdJG", "d8o6zSowW7D9uCohrxi", "kvddTSo8WOfJW5BdJGlcRq", "WRbsW5npW5uiWObeumkw", "WOddGCkGnCo1gJKJWOxcSW", "fmkcWPpdQXepp0H6WRu", "F1CufmoOx8kuW77dRI0", "WO7cG8otW7BcPeJdTW", "W6eOW6ZcUe7dGfy0W7X9", "WO4bW5tdGqJdOSkoW5pcMxq", "WP/cRSoRcv09WPBdI8ko", "WOCfWQ8wqG", "aKD2WOG3W43cHCogEva", "kSo8WP8NW7RdQSkswCorW6u", "kmk6fmodW4RdQa7dUCkGWQq", "W7xcMgtcTCoidmoNkSkbW7m", "WPOsWQnmb8kHWRmrCu4", "cq0/W4m3WQNdHmksjbq", "W6NdQ8oLW7CCaSkTW508ia", "WRCsWRNcQ8oq", "BmkSW5lcTG", "W7abuCoKWPNdGSo2mfCZ", "WQyuWQZdPCoiWPldUCoskNe", "n13dQCoOWRpcNbFdMG", "Bmk1W5tdVd7dQvLdfCo+", "W6COW73cUd3dHfyHW65/", "BCkiW6JcOGi0rwBcSCoF", "W4RdTCoQdxrW", "g8odW7RcJt7cM8oBWO88lG", "W4vrWOBcNG", "h3/dOJpcQJ7cPLRdGf0", "WRRcS8oGdYiOWPBdNCkoWOi", "W7O+W6iAW7pdRwetWOPt", "eSkyk8kkW4pdTduYvmoq", "juRdQSk8WR/cKXNdHCkXwq", "ASofW73cOW", "jmk/W4T9WQ3dSSkhsmokWRS", "WRVcIwVdPgddNq", "EmohW7VcTSkeWONdIv5doa", "iwmGnsRcIWyTf8ok", "lmkPW4OcW71/W7xcJrhcQW", "FrvYd8odW7lcINangG", "bSkUz8otW6SivCotugi", "ohZdNSo3c8okiZC6ha", "wSkMWO3cLW", "fCocoCkFlCkiWQVdGCkr", "crpdUJ/cUZdcJGlcGLe", "j3pdGSoZqSoB", "gSoiW6dcJ1NdG2eHWRO3", "BSo+W64unwxcJq", "W7yrWQZcQ8otWOFdPmozkNq", "kCkIW4hcV8kimqddN2pcKW", "r8kOBCoiWQxdOHhcImk4WRO", "W5erkSo0a3FcK8kzWQtdSq", "WRG6xSktW4CiW7ldM8ozuG", "WQpdRM7dPWmkWRrSqCkz", "W5/dVCopWQ7dGJqiW6xdLSkt", "W5iDWOFcMuRcOCouWOBcKNO", "ESkpW4JcISkkpZRdHZpdKq", "W7TkWOVdMCoNr8oBW4vxW7a", "W6aFWPi", "W63dUCopWQldHYev", "n0ddQmk7W7ZcLHZcI8oLdW", "AbSYrmksW7ZcKq", "gSojcr8mC8oZWOD6WR8", "W57cHCoKy8k1cIKSWP/cLa", "t8o6W6mtoJJcMbT0kW", "yCkSW5/dS8ozEbJdJW", "WRpcQmkjW6FcM2viW7tcLSk8", "W6rpW6lcU8oiWOhdUmkiFZO", "f0DYmmoExL4", "W49wWOm", "vCoDW6GczJVdNfmXzG", "kun3DCo8q14YycS", "s8kGz8ktWQPibCkh", "BSk8W4BdVcddQGTdw8k6", "bCkSp8ktWQPmcmkkcw8", "lHTcsCkIwSkEWQlcPw0", "W5idWRSasCkGWRqteKG", "W7RcTSkJWQfDw8k+WPTTDW", "wmkIW53dKaDdWPVcI8kZWQG", "W4RcRSo8wJ46WPFcKCkkW44", "DCknW53cPSoaWOJdKHukCq", "W6z8W6jzWR/cRdjaWOSD", "W7xdSCozWQi", "nwmMps3cGeOPbmol", "WOKlW4xcHL/cSCoFWOldMYm", "dLaGnSoCs141FxS", "qmosdqqlmCoWW5y4W7y", "oSoeW7BdUCouWP/dJ1nfoG", "W6pdQhJcVffiW61XdCky", "WRRdH3ZcUmkc", "WQiQWR7dPwldMLDYWPaa", "s8k/omkcWQTij8kehd0", "x8oaW4tdQe4pBrXRWR4", "t8oApSooW5pcQNu+c8kE", "WO0Dm8o+ge3cOmkhWQZdOq", "rCoAWRJdLa7cJd00WRn1", "W4rrWPhcLXpcU8oAWOBdLa", "WPSuW7upfCkHWRSvoGC", "W4uHW7zEa8oLW6PhyqS", "W5/cGSk+CCk8q3m", "E8ktWQldQmklWO/cNHDsoa", "k8kaWQxdUCktWO7cKbOdFW", "WPjez8kRvsldVmofW6xcSW", "y8oFW7tcOCoUWQhdR31LbW", "t8kBW6ZdNW/cNZ51WRn5", "W47dUSk/ucX4W5/cIColWPm", "WRpdS3lcRX4", "WQmOW79EWQ7cQZitW4mn", "W4Oqi8o+gZxdSmkdWQZdPW", "WRvLWQNdQwC", "kNVdKSoQsSofi3S5hq", "eSojW7O", "of4eW6q", "DCoeW7RcTCokWPJdLfzDma", "W6NcL1pdP8oybmo4z8okW7O", "WPXnWPmgWOXpW5bMdmot", "vSk/l8kb", "W7NdUCopWQZdHdOcWQa", "cCovdWXfASo0W5WTW50", "jG/dLSoUWRpcMW3dNCo+sW", "WOL1WRKuWOBdNmk0ftdcIq", "crzxw8oXfmoCWQ3cOxC", "WPH1WQKiW5/cNSo1qhZcHW", "qmk1WOhcKq4", "W7HPWRldUgRdMaHKWQ84", "W5xcJSoYAG", "tehdPZJcU0xcMqldLdG", "W7BdNcdcTYxcJSo5yWqQ", "gCkgcGijFCo1W5i7W7e", "W7pcO8krjGdcUWddK8oV", "WRtcPmk7WQqrq8o7WP1RFq", "auLYemorsuu", "d8oJECoFW7aevmoyqN4", "WQhdOmkupW", "sf3cQM3dTgJcNWdcGqu", "WO7cUmoIdwaIWPy", "bCoYW47dH0KFW4FdMSo2W6S", "cSo7WPtcMKvFWORcGmkMWR8", "zmkOW4lcRCkkpXe", "W5DzjCo0ewVdSmkCWQJdPq", "DCkNaSk3W5xdOHhcImkRWQq", "b0pcTwZdRYhcIatcKaG", "WQP/a8oAWPOoW7pcHSknuG", "W6HhWRhdPxZcKeyUWR44", "c8owW7W", "WORdJ8orW6hcPvRdRstdHq", "W5/cGSk+BSk2sNHJWP/cLW", "renTnmozrGaZmZK", "W5NcQCo+bwXW", "AarFWR1eW68aW5X4qG", "WPTHWRKAW5VcLCo6xdtdIa", "y8kJW5P8WRZdV8orbmkfWRG", "WOXcWP1tvmkNW4LcW7CM", "WRDmW4pcJCoIfSkuW6KuWQu", "WPhcV8o6", "tf3cV3S", "WQRdPCkvnutcSqVcGSoSW7m", "WPxdGSofW7RcULNdTItdLqe", "W7TCW5NcKSkHrmoaWQCcWQS", "WQZcOCktW7tdPgruW6xcL8or", "lavew8oXmCowWRZcO3e", "W63dRCooWQ8", "nZBcGCkYhmkyE2bKxa", "BZJdP8oOu8omiW", "oGldMCkRWRnJDSoqWPTl", "CmoQvCkFWORcTa", "W6FcJ3tdUhxcKmoLBeHJ", "W40Ke8otW7LcWRNcJCkbrG", "W6/dTxJcVa", "k8kzW7ZdT1D5gMZcTSkr", "aSozW6hdRhm+Ee8JW7i", "W7RcPSkbWRtdMtqiW7VdS8kE", "rmo2W6KE", "c8kyACotDSoaW7ldS8ooWQu", "uCktWPpdTf9nouHYW6S", "FCocW7hcOCojWOJdJKn1pq", "kCkDW6JdTG", "rXm/W4m3WQNdHa", "W5xcNCoYz8k3wq", "yarzWR4NW68kW5X4qq", "jrjkxCk5e8kdWQJcTw0", "mXScW79gWPD4WR49mG", "gmkzk8kjWQjBbCkhtq", "aCkmW6FdGYJcGCoAW4WOAq", "WPFdJ8oWBSkTeda", "ASkYW5ldQdVdOdPlhCoM", "kCkDWQldOCksW5RcLbSaFW", "W6PGWRtdVc/cNb48W7SH", "mv4DW7PUWRXmWOySaa", "W7bVt8kdW5SoW5tdL8obhq", "W7fFWOmgWPLbW4GfhSod", "yWDmsCkLsSojWRVcR30", "W63dRCojW6FdIJKhWRBdKmoc", "iSkPW5WqW7HSW6NcIatdHW", "ySkLW4vFWRKRWQ7dLLJcTq", "WRFcTCk3WReEe8oTWOD1Eq", "cCoGWOlcNqfvW4tcHSk4WQW", "WOjhW6TesSkVW4OkW5TK", "WRG6W73cQJpcLW91WQGI", "WPRcH8otWQNdQG3dTddcGbK", "i8o6W4xdRItdTG5idSoX", "WQvHWRhdR2ZcGrvZ", "geSBW69MW6qz", "WRpdOSoO", "sSkykmkVWRZcIvSeBSkG", "fmkHWONcNGKrW47cJmkJWQG", "nXbjWRW3WQ5bW5mGhG", "W7SsW7pdQmkyW5ZdSSoFktO", "WOaAjSo2fd/cPCkgWQddSa", "aSk/WQDAEYdcNbj1lG", "W4hcMSoWBmkTrgnP", "oWhdKmk2WRj/BmoEWOfp", "ALRdTCo5WQ7dK1BdLmk3ea", "s8oZW64soNldGqDUkW", "W486W6TTWO7dKCkS", "gmkuWOi", "or9gva", "WRrlW5NcNCoIeSoCW6ahWQa", "m1JdU8k1WPrJWOtcJtNcPW", "WRTMWRldPIlcKH9YWRK/", "WRTveSoSW4tcLCk3yrDY", "FSkIW5G", "W6FdLMdcOCkfqmkNkSoDWQ4", "W7NcVCobz0NdQvFdLmoIWPK", "ECk/W57cQSkela3dLJS", "nZJcHSk1bCkBEbv4xa", "bePHjSodfWOIisG", "uCoZW64EmNlcIW", "cmkZWOtdKGzaWOJcNmkLW6C", "CG/cPSk7W6ldG1FdHSkTca", "fq44WOP5W7/cI8oBEXu", "WOZcH8osW6BcPKG", "zmkSW4pcUCkcnK7cLN7dLq", "amkZWQDylxpcMrbPiW", "W7xdNMldSMNdH8k7jKHJ", "mmoTWO4o", "nKxcICo0W6G0zW", "p0mkW60GW75xWPmKfG", "oSkMW7NcKmkFgHO", "m0ddQmkIW6ddKbZdN8k0wG", "cmk0WPdcKWSmWORcG8k3WQK", "BYzYFgtdJeDLeSon", "imkUc8opW4tdOqxcLmkTWRi", "eCosW7ZdVg1Q", "Emk0W5VdQW", "W7zGWRtcQMtcNaHOWRfh", "w1FdVt/dR3xcMG7dIvy", "W5asWRCyc8o4WOm", "AvbJzgRdNYrTvSkv", "qmkAn8khWO7cVhu0t8oc", "W63dQ8oIW7qCaSkVW505la", "xSkiWR7dMatcMrv7WQX/", "w8kAWR/cJwNdGmkaW5nSia", "W7yGgSkcW5qoW7BdKCodaG", "fSoaW6FdJJm", "W4mtWQmXhmo+WOHgW5O7", "nSozW6ddQG", "WRZdOCkhAu4", "EmoaW7pcUSkjWOBdKLjuoa", "W7qFWQlcR8oxWPxdOG", "kmo9WOlcOwtcSfKExmkI", "W6FdOSkLWRfDr8oRWOaSFq", "W6HSW7PzWQ7cUtXsWOzy", "zCk2c8kDWOhcPbddLmo9W70", "jIBcI8kUqSopptCKcG", "W6HPW65lWQ7cOIfyWPDf", "W4ddTmk6vs58W4/cKCoAWPa", "WQC/WQCrW7ddOhyfW4vj", "krzxwW", "sWCXW5y3WRVdISkfk1W", "f8keEmocDSoaW7VcI8k5WRe", "xCodlCkhWPpcRW", "fmkRWO/cLqPzWP0", "cLlcTN7dTM3cNKBcGqi", "EmkOW5PLWQNcVmox", "dSkfA8ooW4/dVdH4gSkE", "WRGAWQxcQCowW43cPq", "bCktWQldJr/cMxTKWQL8", "WRCRemovWPTiWQxcMmkAxa", "W5eEWQSvaSoWWODCWRyX", "kNZdLSo1sSkejZC7ca", "WPFcTmoGaxbUWPBdN8kBW5C", "rSklWQddRwHOlW", "ffu9CSoCq0uNnhe", "W7PzW4hcMa", "bCoyW73dJgb9Eq", "WRVcV8oGa2OVWO/dHmkyWOi", "zSkOWO0PWQNcVmordCkuWR8", "WOhdMCosm8oOaYyLWPZdGq", "Dmo2g8oAW4tdSb3cMSk4WQO", "W49rWOhdLLJcVmoxWO7cMwq", "l1ldR8kL", "ybhdK8oVWRNcJutcMCkGeq", "W7LLW6pcQNBcLbrMW7WV", "WQa9CSkGW7ngWRJdNmoeba", "WOtdUSokdxeNWPhdMmomWOi", "kX5nxG", "zuVdR8oVWQZcKXNdJ8o4cG", "WQlcQIVdTriFWRP5xCoF", "jvKmW7O", "WPhdOmk8uxi2W4tdK8kkW4e", "tmoDW4hcTGaEFbu3W7C", "wCkFWQhdKHZcIa", "f8kMWRjkyI/dGeSVDW", "W7z+t8kjW5Kw", "W6u3WRClW7BdVG", "W5yam8o0gZlcS8kzWQtdSq", "E0ddTSoOWRxcKbBcLSk0bq", "sSkSi8kjWRvjemolgtW", "s8owpmkg", "bKOGmCozwKG0lcK", "W6KwW5ZcLSoWdSorW6OjWQy", "rSowgavBimkYW5u7W70", "WQRdSCkkC1FcKWdcGmk0WQy", "nrRcGmkL", "beL1o8oewfqflZG", "AMJdGSo1c8ohlJSSuG", "vHmTW40UWQNdLSkcoeq", "WOSXW7HCWO7cN8kOcsRdGG", "FSkMWO7cHWrEWOa", "xmosmSkbWOVcRq", "WPxcTSoNb2K", "EG3dQ8o/WRNcQXxdHSkUrG", "tCoFfCkbWRDehW", "WQmYWRy", "WQZcNxtdTNxdNmk2j1fH", "gaxdTcJcTZxdHfJdGtW", "WPjgACkQrLhdOSofW6VcUG", "umkIWOBcKXbaWP0", "bu9Umq", "w8oBeCkmWQnuhX8m", "W45xWRmrgmoWWO9aW78/", "WPH1WQeiW5BcNmo2uwtcKq", "W5SjWQPvbCkYWQ0qF0y", "kvhdNmk8W4TJACogWOXg", "oCoJWONcOdpdRa8zqmoL", "W500W7TeWORcJa", "d1j0jCodeajPisW", "hCkJjCkkWQPosCkEaZC", "W7BdTCo2W7WqbmoFW4eGjW", "mq/dPCoWWR3cJaVcI8oLea", "trpcQwVdOMdcJ1BdLHm", "s8k5ASkdWQribq", "WO3dJCoIDSk4xYm9WOhdKG", "BqGlW61RWRDBWPCLgG", "dCkkW7/dPfSO", "o8o/WOO4W7VcJmkdwmokW70", "iHff", "qmoGW4/dJeumW4NdJ8o2W7O", "WO1TWQNdR2lcHqHUWQXW", "kbTpsSkWa8oDWQdcRN4", "W5xcQSoRcMeVWO3dMmkkW4W", "CaPjWQGNW74zW5jPuW", "gWBdUI7cRsldMv/dH1e", "vmkxWR7cUI8Mkw1IWRq", "c8kzW4JdKfDDo0uNW6K", "lHTkwCk6", "ESoxWQ7cOHj4eJNdUmoz", "zCkOW5/cUCkFma", "emouW6VdJG", "W6JdPCoNW7ysa8kRW5m9jW", "suHVfmour0qO", "WQldSN3cQ0rlWRK8fmkb", "qSowWPZdVvHgl1rPWQK", "WRrHWRhdO27cM1PLWRu+", "mSoQW7tcVxVcT1KxxmkL", "W5/dOCo0WQm", "DSoDW7pcT8onWPNdMqOxyq", "W6NcUSoDjX/cV0xcGSk4WRe", "W7afsmkBW6tdGCoQkKGX", "xmoihWq", "nrRcG8kL", "W4DvWPhcV0RcSmow", "tCoDbmkdWRLvfWWtW7W", "W6FdNMtcTmkBB8k4lmkAWQ4", "AKBcKG", "WQJdRCkpma", "WRPFW4DpW4KeWPPjs8ki", "EmoeW77dUCouWOJdJvvvpq", "mSo+rmkoWOxdVuJdICo9W7G", "uSoyW6VdLsZdMCopWO0XzW", "W7/dQNdcSfC", "x8kfWO/dQfmsE0DZWQm", "WRRdNIZdVSkzqmk8n8kCWQm", "WRqjWPtdLCkYq8kQWR8UW7q", "W6aQW6JcUuZdHe4VW654", "WRuEWQJdTCkFWO7dT8oBpMO", "W7NcLYddSCoebmoOBmohW6O", "C8k/W5tdTJBdTXHjqmk6", "p1BdO8kWW5XHW5ddHH7cRG", "WRD0WQ3dR2hcKq", "WPWFWOhcN0JdQ8kBW4VcLwq", "dKaZW4n/W6JcLSotAfa", "W5rvWP3cGG", "vHCUzmkegbXZCgu", "WP5TWRuDW4pcG8o2thhdKW", "aSk/WQDAEZZdJfm9iG", "kxVcMSoZxa", "hCkuWOtdUui", "WRVdHxxcV8kcC8kNmSkCWR8", "WRVcJ3FdUhFdISoLBeu0", "W7tdK3tdSZVcKSo2n1y0", "eCkAW5BdNL9doqrlWRq", "Bmk8W4xcO3tdRrXggmoW", "kCkJW4v9WQhcUCoBa8kfWRG", "qCo/smkyWOhcVftcHSk3W74", "bSorWRlcQ2LQzveGWR0", "W7foWPiiWO9vW4GCemov", "WQu0WQCAW7tdRN0yWPbB", "W7NdUCojWQBcHdSjWRFdJSkE", "qSowWOBdQL9moqmL", "f8oCWRruBtZdNKeHDa", "lWzJbmotW7/cJYLasa", "W5hdUSoVb2eRWO/dHCowWOu", "xCkZWOxcN0G", "y8kPW49NWRZcTSogcCkxW6W", "yuywgSoGvCkxW73dTdu", "WRdcJComW7ZcUbZdJbG", "WRVdU8oyWRpdId5BWQNdGSkD", "W6y5WQ8wW6VdPxepW5Kh", "W7fafmogW4ZcHCkXi0C6", "W7Txb8ohW5ZcMCo3DbH1", "fmoiW6RdRZ3cNmopWPCXBW", "u8oiW5JcQGjJBra1W74", "WQuHeSkcW5WmWQNcMmknuG", "gmkzASooW4ZdSdr+hSoo", "uSoBf8kuW7TqcaWpW7K", "ECoQWO8", "bmozW6/dGYZcNCoAWPG", "ECk6zSksWOhcS1BdLCoTW74", "q8oGWRZcNhBdHCkCW4fPnq", "WRVdKN3cVSkavCkbkSkwWQa", "aSoAW67cPdm+p0m8W78", "WPFdKCk7v8kYwgvXW57dKa", "f1jTWOz5W73cLW", "W4fsWOdcMGddTCkBW4VcLwq", "WQypWPRcMSkUs8osWRbvW68", "W6bZsCkuW4W", "W7hcPSkDW6FcIxvgW6xcG8oF", "emkDW5hcPHypFaq7W6y", "DSk8W5VcOMy", "W5iwWRurbmoVWPu", "odFdG8oJrmonnMG", "W6NdSmk+WQjBzmoVWRe", "WPBcG8opW6BcVL3dQsNcH0O", "j8o5WOtdSSoAA1RcN2NdUa", "WQz2WRtdQwO", "omkvWR3dOv0QstJdV8oB", "WQKVWRzuW7pdRxafW5Tz", "D8oeW6hdTmo0WP/dJ1nfoG", "W67cTSoqELhdQ0xdHCoJW7O", "WRfsb8obWOxcGmkZAbbU", "WRrCWPhdM8ooqSosWR1FW64", "qmovhbK", "C8kCW7hdTLmTuY3dPmoB", "WR3cQCkpW6VcNrrEW6NcM8oF", "CmoBnSkvlCkEWQFdK8klW6a", "uSoBnSotmSknWQBdH8kDWRq", "WR9sW4fjW40vWODibmos", "W7v0WRJdPgZcLaHOWR0J", "jmkPW5JcUCkclbxdINNcIG", "zmo8WPG", "WPqeW6mhsmkGWQHaBXS", "WQ3dSCktjGZcTGBcJq", "W4qrmW", "y8k5W4zSW6xcR8oBbmknWQm", "sSooeCkcWRGzwK1dW7q", "iSoYW5hdPIhcU0uigmo8", "Emo2WRLeWRS2WQNdNG", "FKapcmoIsCkoW7RdTsS", "W7z8W7jvWQ7cRcnsWPTf", "kvBcHmoWWQygg8oiW7qr", "iKhdSG", "WPH7WQWeW5NcNmo2vwtcMW", "W6vnW43cL8o3e8kiW7e", "W41vWOhcN1/dSCopWOpdGcK", "W7OOWRbhWQpdUhPEW7Kv", "CszYFgtdJeD5sSoa", "euDSimovwq", "WRpcPSk5WQSrxCoXWODLCW", "W7BdGgNdSxFdJ8k0jGr5", "W5vrW71CdCo8W7zwzqK", "fmoyW6/cJs3cH8olWPn4CW", "WP9qWQmDgCo4WOLhW7GM", "tvlcRN7cTMlcHrNcMra", "z1RcLCoYW6a4mCkjW4yw", "WRaKcCosWO1iWRRcI8kdqa", "oLO1xSorWQFdMILnfW", "W4pcII3dRmoldCo1y8ooW7a", "BHVcPSoJWPiHWPtcMLNdVG", "W5JcQSoHf3zJWP3dNSkpW5S", "rmkEWQlcNg/dMSkCW5yumq", "rmk1WO/cLHbh", "jvu1wCkzW7VcKZzirW", "Amk+W4ldO8ojpbxdKJ/cMq", "r0vSnmodwrbHmc4", "WQizW4zu", "umohgGm", "ECo7vCkpWPFdTWm", "FmoFWQ/dS8oNWOZdKL4qfq", "WPXeWPFdIalcOCotW5xdOYS", "rLxcVa", "W4ZcQmoRcgm6WPBdH8koWPK", "W6tcUmouWQRdJI4cWQZdKmkp", "W7Xub8ohWOJcK8k1zHGM", "WRNcQSkJWQTiqCoNWRbJCq", "W4aCjSo1eNC", "sCktEmkxEColWOFcG8ojWQK", "WO/dRmkkpsJcMstcTCkqWRG", "W6tdJcdcRYNcNmoOcXu8", "f8kxBSoxW5pdScKfhSoa", "iK8eW6DXWRS", "W7tcTSkIWQrirSoTW558zW", "h8k4W4qvnwJcGXS7zG", "W7FcQSowzsRdR0xdHCoHW7O", "W44wWRqhv8k8WPjtW7SI", "m8kFWQRcSK9NsI/dSmoF", "WP/cLSoAW7FcO0/dTctdGrm", "W7tdGcJdOCoBwmoWBSoEWQ4", "f8knDSocFComW7VcGCowWR4", "b8ohkmkskSomWQNdNSkzW7O", "of4GuSkiWPldHYrvtW", "W5ZcHSo5y8k3wgnXW53cKq", "jaCCW7TIWQW", "WQxcOCo+W7xcMNTFW7dcM8ok", "WPBcG8orW6BcUrVcUNtcJW4", "WOlcS8o6cgC", "hCk+pSkgWRfjf8kBaJ0", "W6xdHc3cPcVcM8oHCqKY", "W7vkW4VcMmkUdSktW7WhWQ4", "n08D", "uCkdWPpdRL9kkWLPWQC", "WOZcM8oWymk1sdDZW5ZcKq", "u8oDk8khk8kEWQpcKSowW60", "oCovW6ddSf0GsdBcTSkr", "WOamWOhcN0JdTCoyWOFdLdC", "be7dSSo9WQJcNHy", "WQZdOCknEqRcTWVcGmkWWR0", "ASolW7FcPG", "dSkaCCowW4tdQcT0cmoF", "WQS+WQ0vWRldR34pW4qr", "smkvWQldIq/cGYi", "W4ywWRmrr8o0WPjAW7mG", "DSolW7q", "WOq7W7zCWOBdLmkTcYxdMG", "W6zlW4NcNCoQgW", "oCkxW7pdSq", "s8kqWQhdMtZdISkoW4f4ia", "be1IoSoidqj4Fhm", "WO51W70vW4JdV8o1wwRcMq", "W5vaW65sg8o5WRmjivi", "vCkEWR3cGwNdHSoTW5nPlG", "WQu9hCogWPvAWRFcMmknuG", "cCkdEmoqWR/cQw4NsSoo", "WRVcT8kXWQXscCo/WOz4EG", "W7WiW5fhW4LbW4zawSkk", "oKKUqSkEWRxdIJve", "u8opfW8", "lLVdO8oXWQZcJrFdHSo/rG", "g8kZWRzlDsVdM1m4AG", "pCkQbColW5hdVaZcImozWRK", "W6XRhCkfW5KBW6tdI8kqvq", "WQPVW6XpWQZcUYnuWOfz", "WRxdQ8k9sJf8W5/cGmoyWOW", "WQhcT8ojWQBdIZKdW7S", "WQhdVmouWRhcItWcW7JcHmkD", "og0ZlY3dJayYa8ok", "fSkAWPFdQ18pCKD3WQK", "W4NcOCkqWQxdPaxcS2JcKv4", "aSkLFSohWQzqbCkya28", "lXRdP8k4WP14W5hdIXNcSW", "nrRcKSoTW6fVzSohW4yp", "c0nUmSoeqG", "rCoeW6ZcNuRdJxy0W6aW", "jcNcJ8kVgSkyB2rPxG", "W508W7zgW5xdGmkHdcxdNq", "WP0jWQOx", "vWeGpCovq0OUnge", "nuhcK8kLWROLpSowW6uA", "W4HrWOVcG0RcTmowWORcLsi", "wmkxpmkcWPZcU2L7aCkk", "b1hcV3pdSM7cJWFcNvW", "W7fzW4JcNmoXv8kEW60kWQS", "h8kzA8oFW53dUsPOfCow", "r8otpSkAWPJdRZOVqSot", "WO3dImo1y8kTtdPLW4pcLq", "t8ktW6ZdNahcMdG0WQrX", "WPeaW47dMqm", "lmk4r8kFWOJcUv/dN8o0W6m", "WRBcPmkLWRybfmo6WPj4Da", "pXyXrmkEWQFdMILe", "WQfNWQayW6ZdQsruWPSD", "W7DDW4tcLSoVhSkzW7PBW6u", "pqvmtSk+e8oaWRNcPq", "WOCmWRSzwSkR", "pCoHWP0NW77dRSkswCotW6C", "W5SuWQCgv8kGW7CxoeS", "WQ3dQmkajXO", "pCk3W5mjW75TW7lcIGlcPW", "WQVcK2ZcTtVcJSoLBfbI", "W7jxW57cVmoIgCku", "WQZdQ8kzErNcSqNcNCk5WRu", "q8kfWRVcRJ8IyuaNW68", "CmoUuCki", "W6JdQCoNW7qsbSotW4i+oq", "W5znW4FcJCoQwSkOW7OhWQW", "WPldG8kXimkTrgn8W5xdGq", "FvdcHCk7WQ4shSkPW6e6", "dGz0oSoBrq0Tite", "kvBcJCo+W6CJpmkbW41D", "WRVdHI/cUhldMCkUBv1L", "WPFcJmo5z8k6rNv/W4JdLW", "BaugW7HZWRDwWPX3", "p8o4WOJdQmoDyfJcLNpcGW", "w8ojASk0W4RcOfZdImoRW68", "FKldJ8oSWRv/nCkAW5jq", "WRuqWQJdQmozWPxdOSozm3m", "q8oSW6jxkgJcJqeJEa", "W41ubSo1expdSmkwWQ3dPW", "W7tdUSoyWQVdGhGpWQBdJmkr", "wSo2ASkxWQryamkchJu", "ovK7W61MWRPa", "jLOYrComW6BdLYrvsW", "ECk1W4hcQgK", "W7pdVCopW6FcKYydWQNdHSkC", "WOeEW41mW5GpWO8FhG", "WPVcMSovW7BcPfG", "W7rpWRNcRCoaWPtdT8oeoNS", "eCkwWPFdTHepnuaMW6e", "BSkSW55OW6xcR8oBbmknWQm", "W7DYW7ziWR/cVsPoWOvm", "WQepWO1fW5ym", "Amo9WO9EW65WW7NcMrBcQW", "wrPWnmoeqG0IFxS", "mmkzWR3cTHiIuI/dVmkc", "dCkpdSouWP9Bj8kGrba", "W6uEu8kjWPRdGSo2nuGO", "WRGwWQ/cQCok", "WPDgz8kQrJZdPSodW6xcSW", "W7HtW7/dUSkjW4ZcTSkeBsS", "W69NW6iAW7ddOh0sWO1u", "AehcISo6W6HXkSkhW4eq", "W44yWQqvhSoYWOLC", "WRNcQSk4WRfzxCoQ", "wSonW5NdUGGdFeX6WRq", "iJP9oc3cMLK", "hCkoF8ozW5hdUsnOe8oo", "hmkuk8kbj8orW60", "W57cJ8oeW73cS13dTINdJGe", "cvzOW4nJW6JcHSoEFq", "W7zPWRJdP27cNGLGW7bT", "zJmEBx3dJfvQimkw", "lGzMxSkfWQZdN2Huwq", "v8oSWQvAkgJcLr9KEW", "W7XbW7/dUCkuW4dcPmkeBJy", "orxdKCk3WRDXA8oFWPLo", "FvhdN8kHWRP+lSkmWOTd", "WRddTN3cU0zgWRqQeSkF", "k0GOg8kgWRpdKJuprq", "WQyxrSopW4hcNmk2ov4L", "u8kxfCkFWR9ehW", "FCo+zmoxW7yqvCoDxMO", "kLdcJmo6W689D8kDW4yA", "WOfaWR4xvCkHWRSxmfm", "W7nUW7zmWQZcUJ9tWPLd", "WQyoWOddJSkTsmokW4TEW6W", "W5SWW7rhWPNdLW", "aConW6pdJhxdH8kjW594ia", "xmkUWPpcHGPEWOddJ8o4WR4", "zCkIW5y", "h2K/mZBdJdayvSoL", "WQGEbCogW4xdN8kVk0KP", "W71PemkjW4DDWQNdT8o/tG", "W7vlW5/dHmkKgmktW7blWRi", "W5hcM8o4Bmk+E3z8W4xcLq", "qSkoWQ3dKq", "vbmUW5u5WRddHmkbnKi", "W508W71jWOtcKSkWbtBdMG", "WOXzAa", "W4yNW7qwW5pdKmkXfdddHG", "W7qKWRNdQ3VcLfDYWQ4U", "W6pdQhJcVfeqWRr9dCkv", "CweG", "w1jYA8kmxKL4Fc8", "j8o0WOxcKSoAA1RcLMJcMa", "uCkYWR9jEY/dM10ZDq", "BComW6dcP8kgW5m", "WOywWR7cRComW4ddHSoxlgK", "wHf2WPDYW6tdICocDWm", "qmkUW4qeW71ZW7pcLWlcVW", "ofVdTSkIWOiSWP7dGXNcTG", "W4mrWRmrga", "y8kJW4rSWRRcI8oxemkq", "jfOSuW", "W7jacCoAW5ZdNCk4AX1/", "nCk5W4pdOmoxlbZcHJ/dMa", "vr8TW5jBWRJdLSkEkuC", "B8okWQZdQmoxWPVdHXDtpq", "x8oaW4FcTG4wCb07W7C", "EfNdTSk8WPa8W5ddHahcQq", "m8oxW7RdSv0Q", "aSkeW5hdGeSuW53dJ8oNW6W", "BCkgAmoaW4JdQcH3cmow", "W4e0W7CfWPZdK8kWfq", "WQmuWP3dI8opqSosWR1FW64", "EaTVamodWOlcI2SwhW", "W6RdH3NcVCkFwmkPmmoEW74", "fmobW6/cGgS", "bL0HWQz6W6JcJCoEjf8", "x8k5iSozW7LmbCkFghi", "uCodc0XfF8oXW5GPW6W", "WRq5WRqCW63dV3C", "WQ/dPSkeoetcRXFcLCkHW7y", "FrldN8k7WQzXESoiWPvF", "aKTHpmoC", "WPNcTCoPcgDGWPxdGCkm", "e8opWRtcQZ8ICX8", "Cmo+qCk5WOJcSu7dIq", "wWLZjCorrbn6BZa", "WRfHWQNdI3VcGqHOWR44", "W7n8uq", "wmkkWQddLb4", "BaubW61MWROh", "WPFcLSoyW4W", "n8oEW6FcTSojWOJdJKiDmW", "vmovcLzhEmo8W407WRi", "FNuKo3RdKbqPf8ok", "lCkCWQRdTmkuW43cMbCdFW", "WOlcTCoen00a", "WR3dU8orWQBdMIzBW6ldH8kE", "qmk1WPxcLW", "WOZcH8omW7ZcVfNdHYtdGrK", "WP8anCkLswBcUmolWRBdTG", "WOtcLw7dVcxdP8k3nuTJ", "q8oEWOldVaGtC1bPW7G", "W7vVvmkiW4e", "FL0aW6XGWRTnW58HeG", "WRPHW6dcQhJcNb51WRr3", "j8k0fSoxW5ZdVGJcICk1WRK", "W6JdNcdcTYxcJSo5yWqQ", "W7WEl8oeW4NcL8k/", "lCoZs8kkWPhcPb3dLmo5W6C", "WQCEW48", "w8odW77dNJhdMCoEWOG0Aq", "W7isWQ7cVmorWO/dUmklnNq", "gSkJWOhcHGqbWOdcGSk3WR0", "tG3dPNJcPtddHqZdIK0", "WQilW4juW4PdW5y", "WOnuz8kNexVcPSovWQBdRG", "BceHkcxcMbiQvSom", "wLVcTwG", "sqSOW48MWRRdISkalLa", "dL5+WO01WRpdHmkq", "cqz2nmoCx0H7zZG", "W5vwW4JcMmkJdSkzW6qhWQO", "FCkXW5tdVctdIrbuca", "W6JdNdZcUghdH8kVFqqQ", "paOOW6zJWR8zWOCNbW", "lK8PdmorW7dcGsbmeq", "WQOjWROxvSk2", "aSkUWRbuAJddNvmWCa", "WQiEW40lW5OoWOzrw8kn", "smkSW5H8W6/dV8ogeCkuWQ4", "nXxdGCkNW68/kSkDW4fF", "lGpcPCo+WRNcKXhdLmkNca", "vSo+W78OoMJcIq", "l0tdP8oYW7ZcNb3dNCoIfa", "uSkmW6JdHdtcMmktW4z7ma", "A8oiW7/cU8osWOJdO1TriG", "rfhcU3FcU3ZcGWFcNrK", "wSoahW", "fWvlaSktl8oAWR3cIhG", "WQKSd8kLWOjwWQBcICkdqa", "rLFcR3q", "W6C+W7/dUSkuW5hcPCo1BsG", "pSoTWOddRmofAehcHM3cMG", "yCk5W5ZcSG", "WP0xW5tdJHNdQ8khWPVdLda", "W53cJmooW6FcO1RdRspdGrK", "q8koWQhdKuFcMcvXWRi3", "W6LuWOddUCkkW4dcPCo1BI4", "dmo+W7uomN/cGbySnG", "l1VdQ8oWW7hcJX3dMmkOeq", "WRJcUI7dRqquWQG8hmkz", "WRvveCkjW5JcKCkPCbWM", "AmkRW4xcU8kzcXxdKdS", "WP7cM8o+B8k7qNS9W5JcNW", "WPH/k8oQW4FcNSkUyrDY", "WQpcPmksWQpdGcnyW7NdH8kw", "WQvRxmkkW4aFWQRcNW", "y8kLW4TNWR3cQ8otbCkfW6y", "rXCXDCkicHrOCM0", "nrRcLCo/WRHTDCkCW4Db", "WPefW4VdGX7dOCkBW5RcGHi", "wmkjW7hcMH7cJdr4WQu9", "rXm/W4m3WQNdHmksjbq", "W57dKCoSWQldVbZcTxVcJL8", "gmkuv11rjmkSWObPWQS", "uSkaWQpcVI8TjgjIWRC", "W5/cICo3", "WQRcT8k5WQfjwmkZWODPzW", "Bmk4W4xdOZBdPHW", "W7RdVmkzWQ7dHdqbWQa", "oCkDWR7dPmkeW5ZcMrSbAa", "FComW6BcTCkjWP3dKL5tna", "WQddLN7dRCozuSk9kSkhWQi", "vCkQWOhcNeHhWPVcISkYWRm", "EmofWRlcVmofWO/dIuq", "pGqEhCk1bSonWQJcQxC", "E1ZdTSo9WRldGsJdL8kXfW", "W6NdT8oXWQJdNJauWOBdGSkm", "iSkSW4OeW6LUW7ddRWtcUG", "of4eW6qQWQXCWOeSbW", "zxZdK8ocr8oipcu", "EGTXbG", "C8odgXKqFCoVW5a", "bCopW7/cNvVdMxGMW7Dt", "zaH1DCojW6/cI3mbhq", "mvOzW61PWRO", "i2KNmIa", "BxBdH8o0x8khldmIqG", "kCknWQBcNmkqWQ7cKHKjCq", "t8kFWQldMGVcG3zgWQfJ", "WQxdKI3dTSk7uCkPomoFW60", "FemdaSo9vSknWOJdTJu", "vXmVW48NWQNdLSkEkui", "Amk5W4xcRa", "W7lcQ8kfpr/dPKxdLmoXW7q", "FCoyWRdcOHjKatldOCoB", "iXbcvmoXfmoCWQVcPwO", "gSo2W5ddG1CzW57dNmo6W6O", "dSkjs8ovW6Chs1rrW6m", "wSohmCkFjCkc", "WP0uWQmE", "FCkrW7tcVXu3vtldPSkc", "z8k9W57cRCkF", "r8kbr1DkEmo0W49KWR8", "cmoOWOtcMXmsW4NdJ8o2W7O", "aSk5lSohWQzqbCkya28", "WQCBWQlcVW", "WOfnWQWDx8k8W7Oopea", "WP/cRmkUb24VWOZdGSowWOu", "WQFcMNJcUmkfrmkNlmkAW6e", "WQhdNNtcTa", "W7/cTmkigcBcRqpcGG", "WRK+W6lcSSoZW43dOSozeI8", "w8ktWQddLalcJdG0WQrX", "BSkVW5RdUZJdSqbxgq", "W5yFz8k1fNFcU8oyWRxdSa", "hSoTDSoiWQfveSovuhi", "xmkMWPpdNXzzWOS", "eSoEW6/dGZZcOmobWPu5Ba", "W7HYWRZdPMBcKrTYWRu", "gCkzASkTW4/dUZP3hSoa", "bLvZAmkxsei+BsW", "t8ozCSkEWO/cP34Ztq", "WRVcJ3FdUhFdISo+FrH5", "C8k/W5ddVxdcQKC", "W75bWP9vW4KaWOyBESkc", "qvlcQMRdQcVdLa", "W4OsWRu", "hhldGW", "WOiNWQizcmo+WOPBW7C8", "WQddO8kjnrRcSqNcLCk/W6G", "WR7dPCk1WQLDqmoTW44Uyq", "FCkLl8keWQ5teCkFubu", "y0axfSoMsCkiW7RdOcG", "gmooea8amCo0W5CQW6O", "ECk4W4lcTG", "WQXfeSkoWPBdKmo6jfKM", "WQhdQNxcTuPcW7uIcmkz", "rf96WOf2W7VdICoqEr4", "W4vuWOZcGG", "jqnxsSkIxCkwW6BcT24", "nCkCWQxdUSkwW43cKGCCya", "W7RdTmoKWRvee8kVW4T8Bq", "WP5wm8oYax7cTCoyWRBdTG", "W7NdQxNcQW", "WQKZWQ4", "WO5sWORcJHpcS8ouWPNdMgK", "sSorrCkBWRnveWSwWRa", "WQWZWQSx", "WRpdR8ouWQpdJJasW6JdI8kE", "WPbfW6Dfu8k3W5CgWRHG", "WRGCWQ7cQCouWRpdOSozlxS", "vqO5gmkbgaf3DX0", "W6HrWPuxW7PqW5Gldmou", "vr8UW5zuWRJdLSkCkKi", "xCkOfmouW5BdPr3cImkOWQq", "r0v2WOzGW4VcI8okjvC", "WRi9WQ8yWR/dPhmqW4ih", "WP4dWQywbSo+W5GoW6iW", "EJOscmo9u8kxW7ZcGY4", "W5ZcOmkrW7/cIwvgW7xcJ8op", "WOC8W61nWOldRCk0eI3dIG", "p8kOfmoAW5FdSaZcJmk4WR4", "hCofW73dMtFcHSoh", "oCo9W5hdRIpdPfrjhCo4", "wSowlCkjWPJcVa", "cXpcQw3dUdhdIa/cLqu", "W6CriCo6ah7cPmovWPFdOW", "W6GQWQmvW7BdQhmtW54", "WPqoWQKvwSkPW7CxneK", "BSkSW4zOWQxdV8oFdCkkWQW", "fetdQs/cQYhcGLJdHee", "WOhdN8kGmmoSgIq8WOddNG", "q8kOWPlcLG", "ESk+W4BcSCkzpa", "tCoocConWQzghqGDWQK", "W40tFCkRcdhcP8khWQtdSG", "WOJcJZZdQCowamoOBSoFW70", "W49aWPhcN1hcU8kwWOpdNdC", "mCoQWOPQWQtcVSobg8ozW6W", "q8oEWPFcPG", "tCoclCkCWPJcPNK/", "or8DbSo+fmopWQ7dVIu", "BwVcMSoJsSoElJ5LdG", "e8kprCoDW7yxvLXFW6O", "W6BdOmkijWlcTWVdLa", "WQHOtCkcW5qoW7lcLCocbG", "WQXixCopW4FcNSkUkq5J", "vSopW6/dNZhdMCoBWPi9CG", "CSoWEmk1jCkpWQ/dKmkxW6y", "W4rqW7zka8oZW61lyqK", "WO3cKCowW7ZcUfJcO2JdKay", "qCohk8khWPlcPMK", "AfVcKCoPW6K1l8kdW4al", "WRCFWQtcQ8ot", "WRVcIgxdUwddNa", "W61Pumkk", "W7qqWQJcPSomWOxdPmkrF24", "WP8ylSkLsxpdSmkDWRFdPW", "WPdcL8omW7hcR04", "W77dSmouWQVdJsCdWQS", "WRC9dmoxWPTjWQ7dU8kuxa", "lCkkW7/dPKCVscNdSmoc", "s8omW7dcOq", "W5qNaCo3d1pcKCk0WORdUG", "qmkAnSkaWO3cP2KY", "WPhdOCkxmqFcRby", "W6WqvmkDWOJdGSoUi1L+", "zLZcGSo+WQfV", "W7itW4XhW50eWPO", "EepdUmk8WPn+W5xcHXtcQG", "W7ixW5DlW5vmWP1vuSkm", "WP/cRmkWrcjYWPVdMmkDWOi", "WRu5WQmlW7ZdPeibW4uv", "jWldK8k7WRj/B8oCWPLo", "mujjW5TZWR9nWOC6uW", "W77dTmoCWRtdMMHbWRBdI8kq", "kaRcSmk5WOvLW4NcKfJdQq", "WR7dQmkanWZcSaRcMmk1WRe", "ASo2WPGnW64RWQ7dJvRdRG", "WQ/cUmooia3dPLNcGmk1W6O", "k0BcPSoPWRa", "W6veW7ZdSmkpW5xdLCkdCsO", "jJtcL8kJxCoipt8Oaq", "ALtcLCo4W64", "vSkSjmohW7C", "e8kkySotW4ddTsD7g8ot", "mIhcJ8kWgCkfFwjLxG", "WQ1fb8ohW5ZcMCkUFq", "vCk0WPpdJ0jiWOJcM8k3W7C", "AhFdLmoGx8oaidG", "a092A8kqcG1MyhW", "W4G5WQuhWPVdMSo6xgVdNq", "WQq6W73cQI/dLvOHW6a5", "v8kOWOZcNGbpWP3cHSk5WRq", "W5udWQitsmk2W6DfmKG", "WPiCW5FdGL3dPSkvW5VcH3m", "ASowk8kpW53cR3SHr8kc", "WPX7W61hWQpcO2ewW5bk", "pSk+W5NdRItdTKqagmo0", "W4GXW7rbWOe", "fCoBlCkhnmkzWR7cN8koW6y", "EmopW7VcP8kdW5pdQfzsoa", "gSowW7VcK17dNbOLW7q8", "pCkUW4ybW7bXW7lcMqtcUG", "WPpcOSo6awWQ", "oK7dTSkJWPb/", "WRPiW57cLSoNd8kFW7WKWQ0", "w8oiW6/dMtNdMCokWOGRAW", "bCojW7O", "W6f8sCkhWPGzW7JdJCodbG", "fSokfGWkACoP", "nLRdP8oYWQJcLGZdJW", "ndtcHSkXc8kzB2zLxG", "WQNdOCkvat3cMY3cM8kKWQy", "sSojamkFW7ezrGvmW6u", "ESkhDmoazmoCW6RcGSouWRK", "WQBdK2xcSSkcf8oOlCkbWQ4", "qmkIWPJcHG", "WPCfW5ldHGBcUCkwW5/cM3q", "Fmk5W4xcSCkfDrNdItZdNq", "WRRdTmosWQddHNjjW7S", "hSkFWPJdVuqpCLb+WR4", "W6jCFmkNW7qJW5BdUCoSmW", "h8oiaSkpW74EsufFW6W", "mSkqWOtdVui", "W7yKW73cQG", "ndBcHCk5c8kqywf7tW", "ymk+WP3dVSkdoqBdHY7cLa", "e8ozW6ddJIZcNCobWO8", "WOupWR4", "FNvJBhtdGqq", "WQhdSN3cQ0rlWRKOfmkE", "c8ofW6RdRW", "W5u1WQGmv8k8W5ysWQzY", "WRVdGsFdPg3dGCkUBLrR", "FCoeW7xcVCoqWOZdJa", "afXQWPCWWRFdMmobBHC", "WO0dWRvk", "WOL1WRKiW4/cKSo4eZtdIa", "rvv0nmocgqb3yNW", "jemgW6y9WQXCWP4ObW", "wSosj8kA", "Ef7dUCkNWP54W5RdJW", "W6GeW4n7WRJdQSkajqFdRW", "BCocW6dcLCoiWOe", "AH5nsSkKe8ovWQdcRNi", "Be4aW74NWR1vWPm6aa", "W78wW5DdW5q+WPHxv8ka", "dmkuumozWPusvfToW7S", "lSoTW4BcT8kplbZcM3NcHW", "vSo+W6KDph3cGf5XiW", "kSojW7JdIdBcGmoD", "uCkAaCkmWQjgeWmpWQ4", "WR9FcSofW43cK8kUBrzO", "WRCPWRhdQ23cKby8W7SM", "W6GaWQJcPmoDWOpdOSkwnN4", "W60esmkBWOtdGCoSkK0X", "eCoycSkvW7TagWmlWRi", "sSkSomkaWQbi", "WQZcUmkmW7xcHwDuWOBcLCor", "C8o1qCkd", "WO8tWQ4hcCo0WPnCW6i", "W6tdUCo5WQfvrCkGW49OFa", "krhdLSoUWRpcMrhdMSo+sW", "WRCwW41c", "xmkMWO7dN1e", "tCodW6BdVw17pfe6W6S", "emkCWPtdT1OiyHH5WRm", "zLVcK8o+W6C1i8kBW4eE", "WOymWQCwxSkrWRuanKS", "mCovW6ddSf0GsdBcSCkb", "WRlcPmk4W6Gne8oYWPO", "emoFW6BdUxf3F0yqW7i", "W7DLW65lWQ7dHcCHWOvy", "WRGxW4jwW4WsW4qftCkk", "W5ddKmknWQldVblcSh/dO1S", "W6HCWRNcRmkg", "DK8ZfSksWQ3dKJzsfW", "tSoWW6qBl3xcGX0", "aSk5k8kfWQLzwSoxxYy", "BrSLv8kfWQdcNIXffW", "tmkHWQDAEZZdJfmHzG", "WQNcJ3pcQIldJCk8lvbV", "WO9dWOdcMLVcTSopW5xcLwq", "WQ3dQmkajXRcLGtcMCk0", "t8oBlmkska", "W6tdU27cVKihW6q+eSkj", "W6KCx8oQWP3dNmoRmfC0", "lCkzW6ldP1WWtG", "W5jrWOhcN1VcU8opWR7dMY0", "emo9CSohW7qjsSoFqN4", "W79jWPigWOHwW4qremow", "BcqHkcxcNLz0r8kg", "tSkiWRJdHa", "W6HtWPiFWPDyWQSub8on", "W57dGSkbWRpdTK/dSI/cGbW", "i1LuWQ9LWQTnWOyMhq", "CaPjWRrJWRDpW5iQhW", "kvmKra", "WQJcOmk6", "W63dRIddTLbAW7uIq8or", "W488W7vnWPVdI8k0bq", "WORcNxtdTMK", "nmkDW4nLWQhcT8otbSoeWPS", "WRqKe8ouWPvlWQhcLSkEsG", "W6ldT8oUW70jbmkYW4mIjq", "W53cGmoeW7/cO17dOstdIuC", "WP/cImoaW6S", "WO1fWPBcK0ZdUCkvWPVdKcO", "uSkgW5NcUdrtibbZWRy", "W6lcTCoyDeNdUaBdMCoIW7O", "WRxcQ8oXW6vFx8o/WOb/ka", "WRpcRSkjW6FcMgniW73cLmot", "WRvSWRZdPgJcKa", "EfVdVSk/WPPHW4VdHrpcSW", "W7KBWQtcRmoDW43dV8oyl28", "tCohW6S", "rmkAWQ7cMGVdHCkAW49Qmq", "hSk+jCklWQXyrmkzfZa", "ga/cUCoGW4a9WOJcM1NdSq", "e8k9omkiWQnvcmko", "W4CrjmoPeh/cTCkBWRe", "rCkFWR7cNqpcGYzHWRq", "uSo7W6yopJhcMqbKna", "WRRdNN3cOCkAvCklp8kbWRK", "D8knW7hcUmofWP7dKWOspW", "BmonWR7cT351cxpcPmkd", "gCkWWPlcKXu", "qa/dTw/cPq", "s8oBb8kbWRmz", "omo5WOO7W7ZdUmkmvmkuWQO", "WRldRmozW7K", "BCkXW5ZdQZldKrzag8o5", "yH1jWRePW6SzW4TNra", "zCo3WOne", "WRNcRCkZWQzxuCoXWOS", "WRrca8op", "u8kgWR/cUdGSka1HWRm", "kxhcGmo9W7iWkmouWPOB", "W57cSSoaW6dcUuVdQZRdHa", "WR7dTSoCWQRdIa", "mWpcPCo+WRNcKXhdLmkNca", "WQ7cLxJdSMhcG8k7jKHJ", "WQqnW5fdW5CvWQTkuSkm", "yMjyWRbrW68aWRP4rG", "W61qW5DcWODDW4DrtmoD", "pGnctSkKfa", "w8kzWRZcQtaWjHL/WRy", "kmoHWOORWONcS8otbCkfWR8", "tvBcQa", "gmooWO/cJfJdG2eGW6aH", "W63dPCoVW6KnaCoFW4aGjG", "x8odW4tcQr8uFeD0WQO", "W7LAW43cKCoOg8ks", "W7GWW6xcPZ3dGvqYW6PG", "xvldULJdTgpcJqFcKve", "WRarWP0gWPLbW4GfhSod", "otHUkcddJay1h8od", "WRVdP8kjmrS", "zmk5W4T7W6xcQmoacCkuW6S", "l8kjW5dcQSkkEctdGY3dLq", "f8kzBSoFW53dUsnOeCoy", "dmkyWQpdHuFcIZLMWQ09", "pvDavSkWfmokW7tdP38", "WQ/dT8ksAu7cSqVcHmkKWQa", "EHD3gmohW7JcHNCugW", "W7NcRCkIWQHqhSo6WPPRFa", "pSkzW6tdOvO", "fCoen8kammobWQxdH8kmW6W", "WOehm8o6bYddVCoeW6FcOG", "W7z0umkhW5LAWQBdTCopuG", "tvZcRNhdRMhcIa7cHG", "vSkqWQ/dOwr3DKKNWRO", "W6dcTCoqDfJdRKVdGCoNW7q", "W5iDWOFcK1lcVmozWO7dMs0", "WRPTvCkjW5SFWQO", "WQHcd8ooW4/cLCkO", "W4LiWOdcMG", "W7pcPmksWQJdMsepWQRdJCob", "c8odW6ldPsXRyKqHWQa", "w8ofW7RdIdxcQ8o/WPq5BG", "ymo8WOrxWR03", "pSoHW5ZdOsFdSa0hfCoX", "sCovpmkAkW", "tmosW7FdRgi", "sSoqoSkAW5dcQM8YuSkb", "W6xcGt7dPCogcCoWA8ocW7W", "WQFdP8kooKtcTGRcGmk4WRi", "WQxdNNlcTmkAwCoLmSkAWR4", "q8ohfq", "amoykSkAWO3cVw5Mgmoo", "W4SvnmouaNZcGmkhWQRdSG", "WRqnW4bdW5Cv", "WRHreSoi", "zGPBWQq2W6SxW4v/uW", "aGzPomox", "u8opamoqW7earcmqW7S", "BCkUWOJcQctdPGTiemo5", "W7JcHtZdQmk1aCo5CmokW7K", "yCkTWRvABZldLvmZDW", "WQ/cRSo0W7S", "WQvPrmkwW5bhWRddKmoefG", "WODZWORcMeRcUSotW5hcLxe", "WQ/dSmkjALxcQatcGmk5W7q", "aCklWRdcJxJdLmkoW4f4ia", "n8opW73cRmkjWOVdJ0vDFa", "jrhdJmo5WRlcLGVcLSksfG", "W7itW4XhW51mWPTqvCkq", "yCo7uCksW4tcTLtdLSo0WRC", "W7abjCk7ix3cPmkuWQNcUa", "cLRcThNdTh7cHWRcHXG", "W4neW5VdLH7dTCkBW4VcLwq", "EvKud8o9vSklW6xdTdC", "A8kUW55GWR7cUG", "eSoRqeDwsSkPW7fUW4K", "f8kAW6ddUYyGxNnVWQG", "FHTEWQG2W6GxW4P4uW", "pH9mtq", "E8k/W5tcSmkFgXVdIJhdHG", "c8kgwuTfpmk9WPL6WR8", "gSoiW7VdHG", "FmoFW7pcUSooWOZdJLaqea", "W5JdO8k6rdn9W5hcGmozW6e", "aSkjWQ/dRwbWmr0YWQC", "WQNcMc3dPhddHCkQjLCT", "ogO7ncxcGHiTf8oj", "aW0JW4XJW7VdMG", "WQetW4jjW51bWPTmuSkc", "WQKScmoiWOjmWRFcISkDxa", "zmk5WQjrWRS4WQBcKaRcPa", "WPGEW5ddJN3dPmknW4xcJhy", "umo0qCkBW4tcPfJdLSo5W6i", "W4q2W7y6aSkiW6TuFr8", "CSk0W5hdRIpdOf4hfCoX", "iSk0W5VdVYldSvLogmkO", "pSoyW5SaW6vUW7FcMqBcQW", "W4KEWPlcNL/cOCoiWORdHtq", "kCo8WOldSmoEBdFcK3dcGG", "vSkMWPNcKXDnWOFdLCo8W7O", "lKhdSa", "r8ozomooWP7cRxqYq8kC", "WP7dNCkGo8oGgICNW7pdGq", "kM/dNSoLtmomo3SHdG", "WPJcTCoydK7dT1VdImo+WQC", "WOiCW4xdLeRcVmopWOFdKhy", "BSkMWQLnBZddNuaVCq", "WP0xWOhcL0RcTmosWOxdHte", "c8koWQNdKqVcHxz5WQv9", "F8k3vSkpWOBcVvtdJSk/WQO", "mXRdU8kWWPn0W5u", "pmk5W5OCW7H/W7dcLqFcUq", "amoen8kbWORdPxiVqSkl", "ACk+W5K", "W4LDWOZcM1/cUColWPNdMIa", "uGGZzmkqhWnYDNa", "lSk5W5JcQSkhpvNdLJFdMa", "WQNdOCkv", "B8oaWRZcSajKdg/cVCkD", "W6y1W6VdPJ/dM0S1W6H8", "WPlcI8o4CCkPqxzPWORcNG", "a8kveCkjW6GBvrKnW6u", "W7jvWOlcN03cOCojWORdHI0", "rvlcVxy", "WQuZWQ4wW63cTJeMW7eY", "cCkuumovWOWfvvndW7q", "W5etjSk2bwdcV8krWRddQq", "z0tdP8kWWP8XW5RdHHBcTq", "ACk4W5H7WQ3cVmogrCkuWQO", "oCknWQ7cSmonWPVcGfrCma", "DSoeW7hcSq", "WQRcRmo2WQfDr8o/W5nnEW", "AmoyWQhcUX59FgRcVCky", "W6ecW4NdHb7dPCkBW5VcMxq", "bb/cQmkPW6ZdI0VcHCoXuq", "Fgi7oY3cMay1wSkk", "WQNcJNxcT2hdH8kPjLzM", "W5eeW7Ptcmo0WP4FW7a9", "F8oQW5CxWR02WRpdLvpcPG", "p17dPmkHWP1WW4dcKbNcQq", "WRvOWRtdQwq", "krxdGCk7WQzXESoiWOKB", "W48WW7Xm", "WRpcOmkfW6VcMgriW7xcMSk8", "B0mhW746", "nCkrW7tdPW", "wCornmoEj8kdWQtdHSkzW6a", "emocW6tdJdZcNCkoW506pG", "WR0LcSotWOjjWRRcICkdqW", "amoEmCkiWPldPxqNs8kp", "WONdJ8kJm8o3hdCKWPddGG", "WR3dSCkcnWZcQXy", "WOO7W7HfWO7cN8kTdJldHG", "W4ddTmk7jtbGW4RcNCozWOW", "W6exv8kzWPJdL8o6zrvY", "uSkUWOZcNLGlWORcMSkKWQG", "FCoiW7hcVCojWOZdJa", "qSkoWQtcNq7cJcjXWRm", "DmoyWRlcP8obWONdGvLxCq", "WOeiW7bofmk2WQWaBWC", "dCo5zSovW6unvSofrMC", "Bce2ptdcJuOSbCob", "lmk4qmkxWPtcPetcL8o7W6S", "mv4CW7SNWRHwWOaKxG", "ECkOW4zSWQVcQ8ksc8kiWQO", "dmoVW6GjlZhcJHXLpW", "f8kbEmodzmoCW6BcG8oyWRG", "WPZcQSkIWQOCq8oSWPXQFa", "lHjttSoSqmoqWQtcOx4", "W5OyiSkMv3dcV8khWQhdPW", "f8oyW4pdPNz7y2iYW7q", "WQGxW5/cICoIfmocWQG", "cmkJWONcHevfWO3dKSo0WRq", "W4lcGmoKBmk9", "n0BdQSo1WRtcNHBcM8kQbq", "owCHnsJdJamWbmor", "mCkRcColW5BcKW/cLmkVWRK", "vSoEaSkiWQikdGqlWRC", "WRpdQ8ojWQBdNsavW6JdK8kn", "W77dUCojWQtdGq", "smkkEa", "WQhcMghdVcxdNCk4lKu", "d8o/c8ouW6KprmoBugi", "fmogW6/dLq", "WRasWRNcQCkvWOBdV8oAoG", "a8olWRdcKxFcLSoBWPuSBW", "w8oiW77cOCojW43dGvnrCq", "W4/dLSkpWQldUXZcTx7cJL8", "bmkxv1jxx8kVWOH0WQy", "WOvHWRCqW5RcKSo0qhtcHq", "u8kxWR3cUs8Mja1IWRe", "ee5Lj8ov", "AqrzWRaNW6WlW5X6qa", "uSkhW4FcV1CMwrbRW50", "WOnCWOdcLf/cP8kwWONdLcO", "W6L0sCkFWPDAW6hdMCobbW", "pmoHWOBdSmoyg0xcKNdcJa", "mCo5qmkrW4tcH3ZcMSo8W6S", "WPNcVSo7dW", "ACk0WOjeWQqZW6RdJexdRG", "W5hcI8o1A8k3sI0WWOhdHq", "pSoJWPm9WOtdRSkbrSouW70", "cSkbBmogCmoaW7JcGCowWRa", "Bmk6W5ZdOw3cTvLgcCoH", "WR1afSomW4BcLa", "W4WqmSoWwhBcUCksWQZdTG", "WQCaW7ddR8oAWPxdOSocmhq", "WO7cG8ovW7VdTaddTcNdLai", "ESoWWPBcTSkFlatcNhhcMW", "dSkiv8onW7yhfKbpW7u", "CCoeW7BcSq", "zX/cQSkSW7ZdJ1tcGSkuxa", "WRalW4SgW51CW4POd8or", "kLNcJSo6W6j8kCkDW54m", "WQZcPmksWQxcL3ueWQZdJ8kE", "W6ddRCkvmqtcHXxcHSk4WRC", "W5ahESk8f33cOSkrWQddSa", "lmo9WOTeWQHYWQNdLKtdPG", "nuRdQ8oZWQRcMJVdMSkJfW", "r1vVoCoztG00jZ4", "eCkuWOq", "B8o1WOntWQi", "z3tdNSoIqa", "pLOT", "WRCPWQClW6BdN3CmW5ix", "W7NdII7cPZBcJSoODqOY", "eConW7RdJhxcNCok", "u8oFrCkAWRDneW9FWR8", "qbGGDCkqcG1MyhW", "kCkxW6i", "g8ocgb8emCo1W5aPW6S", "CComW6hcVCoiW43dHf5ema", "jWdcK8o+W6T2za", "WRjxb8ohWOJcNCk/AHXT", "e8kEWPxdUujgm0O", "k0BdQmo3", "WPufW4xdHrddOSkkW4FcHh0", "w8oiW6/dMtNcN8oBWPe3BG", "x8kGkmkoWQKCamkkbdm", "c8oAW7ddIq7dJtv4WQfJ", "aSkXW6uFn3xcJHzTlW", "cSkfWPNcO0fgofbZW7W", "ymoWWOrBWRKTWQJdNupdOa", "W6bzW5tcQSoRe8kmW7GpWQW", "pajcvmkLdSonWRa", "WO1dDCk7rcxdVSofW7lcOG", "WPzzW7vfsSkQW5CsWQDG", "WPfzW75fsSkJW4GeWQD+", "pe9eW7HUWRjqWPOOhq", "W6bLwmkf", "WR3cRdldRbTMWQv/u8oC", "WRm9dmoqWPTmWQpcLmkCqq", "jLqMx8kFW6hdKITfsW", "WQ5vemomW5RcG8k/", "WQGxW5JcMmoHfSkzWRy", "b8oWsf0OlSkVWPvOWQ8", "gSk3WO/cGrebWPNcNCk5WR4", "W67cUmkaDahcQGdcKSoSW7m", "WOL1WRK", "k0ddPCo9WQJcLHFdMa", "WQqsWQNcRmorWO7dSCkmFYS", "WRmjWPZdICkKwSkFW6qhWRe", "W6fFWPesWPLtW5WcamoF", "eSotnSkyW53cQ3yNvCkD", "W6iBeSoiW4xcKSk7BfL2", "AXFcP8oXW4mLWPNcMepdOq", "iSoPWOvdWR1YWQxdLLldSG", "W6z8W6jzWQpdO2iuW54B", "tCoXW7mBmNlcIqeJEa", "BCk5WPPcWQy7WRldKHBdPG", "ALGTv8kcWRlcJMjdrq", "Ac4damoXqSoXW7pdPvq", "mSoUtmkoWOJcTrddK8o2W7O", "xmk8W4hdRJS", "WQ/cTmkeWORcMgDkW7tcLmk+", "aCoeW6VdGW", "W7VcS8orBaxdTvhdMSoHW6e", "gSkfWPpcTv9mm0O", "mCk6bq", "BCo9W5pdUJVdQqPedSoW", "ogu9mMNcGGGTh8oc", "W4BdKCkXiSo5dtCWWPddKa", "WQCYW6irW77dVgCtWPbk", "tx92WO18WQNcSmoaEr4", "W4mGW7reWO7dMSoMqdFdNq", "rMhdVSoL", "W6DiW43cL8k9nmktW6ujWRa", "ot/dMmoXwmoayIyGaW", "oSodW7pcUCofW4ddIvLgpG", "W5JdU3lcVKrlW7HSh8ki", "WPddJ8kXiSo5dtCWWPddJa", "CYzxq8oTsmonWQhdVIu", "WOaFiSoVegdcSCkBWQldOW", "xCkBWR/dLfBdGJj9WRyU", "zW/cPSk8W7ZdN0tdKSkReG", "W6HVW7nzWQVcOIDtWPDf", "WPjdCCkPrsRdPCozW7dcRG", "WRxcTcVdQG8yWQyat8oC", "wWL0j8ko", "WRiLWQ4CWQlcRNapW4uq", "t8oBc8otWPHgfWXFWPC", "zCodfaKaCmo0W5G0WQm", "tCoBrCkDWRnvfWWrWR4", "WO1cCCk7rZZdPComW6xcSW", "WPu9W6SwW5pcNCkSeNO", "WRuhWQtcPSoFW43dUmodmJC", "WRDGWRNdIwpcLaLY", "hSkRi8klWQKbq8kibsa", "gWFdUI3cRYVdLfFcHba", "AHuUqCkDW6ZdKcrtrq", "W7HfWOmdW5roW41beCog", "sLlcQgVdIhJcKWFcKq", "n8kFWQxdTmkvW57cJGqqya", "Fv3cHmo1", "WQHrbmofW40", "W6NcIZ/cSmoiemoOFSotW60", "W7vKW7TpWQRcOcnsWPLe", "c8kAcqOrDmk9W58ZW7m", "x8oEW6hdUxrQmui/W6y", "rmkSWRWgWOfUW77dTadcPW", "sfFcVG", "WRRcK2tdOM7cJSoTyWXE", "zCoUsSkuW4tcOLldLSo9WRC", "WRSqW4Pi", "fvXQWO1Z", "zf/dP8oVWQ/cIbFdHmkM", "W7JcT2ZcQ0XmW70Gga", "E8oQWPhcVCkhoqFdLwpcKW", "p1BdO8kW", "h8k4W7mvphVcGbySiG", "l1pcQCoTWOv1WOFcKfC", "W7VdSCotWQm", "W4agiSo6axFcLCkzWQddRW", "Eq3cT8oZ", "eSkZWRzABJddNZSWFW", "WQuqW4rbW5ueWQTjx8kq", "WPnfW7DaxSkSW5ebW5q1khBcRSo5", "ASoEWQ/dS8omWPNdJvSDjq", "zW/cPSk8W7ZdGXZdN8k0ra", "m0RdVSoO", "WQCKW68oW7BdQgyiWO1a", "WOzHWRpdRwBcHXnSWR0J", "W7vnW5JcKq", "WRRcHx3cUN7dH8k9pGK", "xSkqW6pdPMb6Ee80WQC", "W4dcQYxdTXuFWRr9tSod", "ymo4WOHvWQvHW6FcMrBcQW", "c8kqWOldUvGtC1bZW7G", "W6vgW77dPmkjW5FcUmkdBcG", "xCkRWOxdKHbaW4FcGSkZWRq", "W4tdR8k7xdrIW47cG8ohWPm", "z8o7sq", "sSoAWPZdMatcItDKWQfK", "pr5pu8k5bSoxWRZcThG", "W5xcTmoHegSOWPBdMSkkW5e", "tCoeW6BcUmobW43dSf5Coa", "WQZcQSkrW7pcH2a8W6lcNCod", "W7DQW6XkWQBcRcbtWPTf", "WRu9cCoiWODmWRRcI8kdqa", "jaeDbSo+a8oqWR/dVG", "wCochbLyo8oEW5y0W6S", "e8oBW6ddQgu+v0G/W6i", "WQxcPmopjbVcTWhcGCk6W7K", "zaP4fSoaW7JcNx0sAq", "W4pdHCooW6pcUvxcQsddIrK", "iK8SwG", "WPuEW5pdJXldPmknW4xcJaG", "WRvRWRpdVMRcMW4", "Cb3cQSkUW67dKuVcHmo2uG", "jCojW7VcOSkeWO7dJfzdiG", "jbnex8kLsSoAWQBcRM0", "aSkUWR5uyIJcUKeZdG", "qSkAl8kCWPtcQ38", "kSkRW4nLWQtdOSkvc8krWRK", "W5mvnCoOea", "y8k7WPqPW6JdV8kssmoeW6S", "WQikW4fvW40tWOflwq", "WP1EW7jDsmkZWR1z", "iCk2fmoAW5xdPXhcI8kQW4S", "dKFdU8k+WPb1WPNdRb7cQG", "dCkbW77dIdBcL8opWPmXyq", "a8ock8kpWPdcQtzOrmkl", "W5tcRmoJWQNdObW", "mCoJWOhdPSoBAexcKw/cMa", "FbTzWQG3W74jW554uW", "y3/cO8khW4DCWOVcMvFdTW", "BwZdKSoSDmoAjIWS", "CHBcQSkUW6ZdN0ZcMSoZuG", "ghPlWRiNW7W", "EWnMfSkzWQtdMIjjxG", "B8k5WQxcRGDKdx3cOCkd", "qvlcQhJdUIhcMHNcMXu", "WODNWQGzW57cGmo0vMJcMq", "E8kJWOjzWQ07WQldLW3dPG", "beD0nSoy", "W6fIW6jzWR/cRdjaWPDu", "uCoaW4lcRWyCBXnHW6e", "D8o1uCkv", "WRpcQmkoW6VcMgriW7dcLCoF", "WRJdRCkeiW", "W4tdTmk7rdjUW4/cNCoAWOi", "WP9Bi8oYaYW", "W4/dLCkpWQpdVrdcVwJcKvi", "WQjcWOreW4WvWPXkumoo", "W6/dNgtdTNhdJ8o0n0T+", "hSoSW7eDE2tcGr9Vnq", "xCofpa", "W79Da8ohW53dNCkQDHzG", "wSoqpmkWkmknWRNdGq", "WQaCWR/cOCkuW47dPSotmxK", "CtP9oc3cMLL5vSke", "WRjLWQNdQYlcMXvZWReS", "mguMntlcIq", "WRRdNNFcV8k5rCk8", "W6DiW4dcKmo3", "vSk5j8kl", "wq9SWPvWWQNcNmoFDb4", "wSoGW4dcHaXjWP7cRCk5WQi", "WQvsW5zvW5Wt", "bCkiD8kamSklW7tcKG", "W7JcPmoqycRdQvpdMSoIW6u", "W4feWOtdM1FcU8onW4BdGdC", "ge3dQSo9WRlcLa", "avX8WPzK", "wSoom8klW4ddQNGNrCkf", "WO5gW6LfwCkIW58hWQvK", "W6PUW7m6WQVcOIvsWPTg", "F21ZFSoaW7ddPxqqba", "eGznimoEsvGQybi", "nSkSWOPHWRRcUSouvCodWQe", "WR52WRJdRdldKG", "B0dcJ8o4W7i4nCkg", "nvNcImk7W6iWlSkjWOHy", "yZmXBMRdLvbSrSkx", "sWSXW5SVWRhdLCkakKy", "dSkhF8oEW5hdUdP3fmoc", "j2ZdMmoSsCogi3SQaW", "cCo6W53dJ1G", "r1BcQh7dR2NdIJVcHH4", "rxtdLSoSsSoD", "WPjhACkOttldOCobW6VcTG", "W7ddTCoyWQNdNxOaWRFdGSks", "BYzYFgtdJeDLfmor", "WRVcMNhcSSkcwCk+o8otWQW", "A8k4W4xcQSkenKO", "dCo7W64mztZdJfmHzG", "W6u6W6hcPwVcNaW/W7XT", "t8ornSkhACkBWRJdK8kiWQq", "ASogW6pdLvNdKW", "nuxdN8oAW60KnmoiW7qr", "j8o0WOxcHmomzKJcIs7dLq", "ymoSWO8nW647WQldN1FdVG", "DN3dH8oTsSokkG", "W7jzeSomW4xdNCkQAWPY", "W4ZcR8kqWQhdQG7cTaVcL0q", "krhdImo9WRhcNLJdUSkNcG", "W67dQ8kuia3cVqVcGmoXWR0", "ovCOuSkuWOxdNdjp", "w8kHWOy", "fvzVWO92W6RcGq", "W4lcISkvWRpcQvddPtVdK1C", "jLRcKCoVW68+nmowWPvF", "rubRWOjLWRJdICkdoLa", "W4uGW7WvW4JcLCo6lIVcIq", "murjW7HIWQXkWPuGuW", "auDKmmo/x1K", "WQvHWQ8", "oLNcTCoV", "fSoeW7VdGZm", "iCkdWQRdRmoOW5ZcLrKbyW", "W6ddTx3cVqn6W6yJgCky", "zqldRZhcRcddM1VdMKi", "WQC1WQ5EWR/dPxzDWPab", "r1zYoSoux0zMjdu", "WP91WQGBW4/cG8oWtNFcNq", "cujZ", "o8o7WOq6W7hdV8kfrmovW7i", "ymkOW4BcNmkeieNcGw7cLa", "EXFcT8oXW5eTW43dJLFcPq", "eCoycSkvW7Tbfr8sW7y", "EbTZbSoFW7xcK3CbgW", "j1ZcLCo+W6T8kCkbW48A", "W7fGWRZdVM7dMbjOWQ85", "fSoCWQldRwH5EfuYW6S", "WRpcRmkDW7xcH2CQW7BcJCok", "oWtdJCkVWQHMBCkKWOrl", "W5NcRSo8wIjUW4pcNSkFW4a", "W67dSCorW6FdJtXgWRddK8kB", "WOBcU8o8awW6WOW", "wCkmW73dHdtcLCogWOO5BG", "vSoxpCk9k8kcWO/dLSkrW70", "emk/WRDAAZddNvmYAG", "W6JdNcdcTYxcJSoLl0vO", "W7HRWQ3dUwBdMaPOWRaK", "W4rFWOy", "WRHzemkx", "WR3cOmktW7BcIwjiW7BcMSoF", "WOidWR4ed8kMW4fgW7mQ", "WRKYsCkuWOS", "W4lcLSofWRpcQvddPtVdK1C", "cujH", "W67dNN7cP8kzwCkRo8ouW7m", "W7tdK2ZdTMFdI8k1FqqQ", "iNvVEYFcHai6hCog", "odFdLCk/c8onjIyShq", "WOvjW7TBdSoYWPam", "sriXBCkqgG1+yg8", "W6/cOSovWQBdMZihW6ZcG8kC", "WQ8YWRimW6VcONefW5Xz", "WOtcUmoRcgmGWPxdKmolW4y", "F0qpc8oJjmklW7JdRIS", "obLx", "s1fWWODUW7lcLmoDAXK", "WPT1WQGAW4hcG8o9qhBcMa", "WQdcV8ouWQtdHJTlWQFdJmkB", "yXXgsmkWcCotWQJcRN4", "WRpdPCo4WQTtr8o3WPvLFG", "WOtdNmkLnSoTftSGWP7dGq", "WQiCWRJcQ8oqWOxdPmoglxu", "WQnsWOzaESo3W7zvCrC", "WRRdNJdcSmkyv8kJp8otW7e", "F11AWRG3W7nrW4f5qW", "WQjRWPVdO3FcKb4", "W7bnW4FdNSkJfmkDW6udW78", "emohW6pdOhu", "kNhdG8oKrSo2pYqGda", "pGfebmoX", "W6fIW74DW7BdUJidW5Sv", "WQdcMwpdVgFdGCkHzaS0", "rXm/W4m3WQNdHmkoFbK", "WRdcTwJcQX0", "WRCBWQJcQ8otWOxdSG", "zeKKvCkuWQ/dH2HnsW", "kf4Tx8ktWQtdNYWmwq", "c8kEWQ3dIqVdJszMWQ90", "WOO5W7zjWOVcN8k3fs/dMG", "WPNcVmoO", "r0jLiCozqq0", "WQjdWOXcW5axW5y", "zSkgBSk4W4JcGcT1CmoF", "BrFcPSoLW58NWPNcM0ldQa", "W6RdM3xcS8kxqSoLpmksWQm", "W7vBW5JcKmo1hW", "WRzFW6vdW5WfW4KzeCkq", "l1JdO8kWWP0", "xSkzoSksj8khWQ3dGmkxW7W", "W5zrWOK", "WRPCW43cJCoIv8kuW6evWRy", "juD0nmoCfGiPmcG", "sSowk8kpW5dcPNu0s8kp", "W4a7W71nWPFdVCkI", "W6bxW67cTmo7q8kqW50mWOS", "s8odoSodWOJcU380", "W5jvWPxcML/cTSoE", "W7BdTSo2W7uCa8kYW4mSja", "bSkkWR7dKGZcHdPXW615", "ASkYW7pdPI/dOb0", "WPjoW7bdxCkJW5uEWQrM", "W6bRvmkdW4i5W7JdJCodbG", "lmoDWOnzWRO2", "AuSOwSkyWQNdKITrwa", "WRasW4ilWO0", "uSoyW6dcVCowW5hcJ1Hajq", "B8ouWQlcOGjKdxhcOCkp", "W41xW7TfcmoOW6Tjybu", "EfNdTSkNWPH2W5JdMr7dPG", "bKjKfSoCs141", "WQuAW5Ts", "gCksv14Mk8kXWO10WQO", "W5dcKCojW7ZcVrhdRchdHa8", "oSkbWOddRColAuhdQM/cHW", "W6iKdSk7pNFcQCovWOpdQW", "WQO1WQOyW7hdUwybW5Ov", "zb5CWRaRW68lW5X4rW", "pSkTW5ibW79MW6VcJHJcSW", "W7RdT8oIW6Ccd8oUWPj4Fq", "WQ9zhmom", "WOefWRyg", "WRm3W6iqW7hdPq", "nblcPmo4WR3cIXNcM8kXea", "WQ/dS3lcR0XdW7CP", "mdJcHComgSkBywz8tW", "cCkadSohbCoEW6BcGmoyWRK", "W7z1uSkr", "WRDkW4NcMSoMfmkiWQupWRy", "FmobW7VdUCotWOxdGundma", "r0LWnmotq1K/FxS", "WRimW5a", "fSkpF8oEW5ddUYjOfSoF", "gCozW6VcKh/cKmolWOC5Dq", "cmkzWPpdQLm", "s8ovk8kammkeWRJdNCknW64", "m2GZnsG", "WP7cI8oWDSk4agDIW5/cLa", "gmoogaCeCCo8W5D3W7q", "wSoqpa", "ifPeW7TVWRfoW58QgW", "WQ7dNMtcSmkAhmoMpmkgWRK", "iSoYW5tdVspdRbPlgCkR", "AuGPwCkgW6ZdGYrswq", "WOuuWQ8rcCoWWOrDW651", "mu7dQG", "xmopf8kFWRnjdI4qWRC", "W7yKW73cQI/dLvO9WRm9", "EG3dTCo1WRdcIr3dHmoGra", "W6DYsCksW5OxWQ3cICkDvW", "WR8tW4XhW50", "BuhcICkHWQzGAmknW5He", "zSk/W5xcU8kzyLtcLY7dJa", "WQmAW4fhW4Oe", "WRNcRCk3WRD/xmo6WPznyq", "hH3dRYZcTZxdHfpcUum", "EWBcOCo/W4iPW7RcM0hdQa", "W57dJmoiW6FcR1hdMZJdKGm", "B8kOW5tdOspdRa1E", "WOeBWQGvdSk2WPvhW70H", "WQZcQ8kDW7BcM3vxW7BdSmoo", "W6BcNMxdU2ZdJmk8l00N", "y8oQW4vdW6y", "pSkuW7NdOvK", "n1BdPmkLWRH/W53dJW8", "axq9odhcH0C7e8ow", "xSkudmkoWRLjvWmqWQ8", "W6bxW5W", "iZJdH8oTsSokkJ4MaW", "qvlcTdlcQG", "W4qyWRvjtCoUWPzEW7KZ", "zXpcQCo+W6i", "W6S5W6dcTZldIeC8W6fW", "ELZcJmoRW6O0gCkjW4Cl", "ECoQWO9c", "sSkIlCkaWQLzj8khese", "y8o3W4OyW6XWWPxdIr/cTW", "kSkHW57cV8kpDqFdKZxdHW", "uCoow8orWQzgdGvFWR8", "W6fFWPmkWOHbW5KxeSos", "W6NcUSobDeNdUexdLmoXW7q", "nsZcMCkZh8kjFMbPxG", "WRpcQ8oXW7BcNxTqW7dcJ8oi", "orHWtSkJdSoxWQ4", "o8ofWRC", "W6NdKY3dS8k7aCo9CmohW7W", "W6PXvmkcWPuiW7ddMSkfqa", "W4ldJCovW7lcQfddOxy", "WOLLWRuzW4/cH8oOuWZcMa", "za55DCoaW7FcNxWtbG", "iSoWWP5vWQqaWPBdJfFdPq", "W4RcRSoQwG", "W6/dQCoJW6ume8kUW589nq", "c8okW6ZcJuBdNxyMW7i8", "WOxdP8kSb24HWOZdLmojWPW", "WOaaW4NdHX7dPmkjW4FcGGu", "WRKYsCkcWOTgWRJdJmoFta", "g8o5W5ZdNrzAWO7dKCoQW7u", "W7/dRhVdUvvdW7e7p8kc", "jSoJW4jSWQNcU8kFamklWQy", "q8kfWO/cILGlW5NdJ8oMW7O", "j1FcHmo3W68Zp8keW5Xs", "uSkfWQhcSdu+ibv9WR8", "AfNcGmo2W6CL", "WO4FkmoOgNZcTW", "yX5xx8k8omojWRVcQxO", "jZHYFgtdJeD5vSke", "hSkbWOBdVvHl", "CNNdMW", "W6/cQ3FcRMjJW5uacCkS", "rSowfqir", "xSo0rSkFW4tcPu3dLCo2WQO", "dKHUmmocyNKlda", "pCkUW53dOcdcQbPsdSoN", "pL4CW6mNWQHCWOaGfq", "BadcPSo8W4e/WONcMKxdTW", "WRTveG", "pfOT", "WQSVc8okWOfuWQdcJCknsG", "WR7cPmkIWQaahmoTWOnTEW", "W4mBW6OabCoVWODEWQT1", "WQ7dKMtcLmkAvCkLo8kDWRK", "b8otW6RdPYyXlX18W6e", "wSkQWQKbW7fZW7BcLW7cSG", "dSkgACoaW4RdUJP3eSoa", "g8kgASocBCoxW6RdKCkxW6u", "W7yKW73cQI/dLvO9WQ89", "kuRdTa", "bComW7VcNvVdNNyLW7iW", "WPOgWQG", "uqyXz8kEhHHMExi", "W49jzCo1gN3cOmkqWQVdPW", "W4aTW7Xe", "uCoveCkeWRahaWWrWRW", "uCkfWP/dRfPkCvrYWQO", "xCktWPNdQLjklH47W7C", "W642W7hcUshdH0O1W6r+", "uSo+W7uFnwJcNW", "bsCebmoTfmopWQ7dOg8", "kSoTWOOPW7tcU8oBhSoeWQG", "WR3cUmkDW6FcIxu", "W6tdV33cVq", "cmo8ASowW7iqumofrxi", "WRvSWRJdQwtcKb4", "d8oEW6VcQxn5CWLHWRu", "xSkqWR/cPZa5lX18W7C", "hmowcSkmWRikcrGuWQG", "nCk5W5SgW6LOWPtcIalcPq", "W7rOwmkuW4WPW7ldLmoieq", "W57cLmoaW7/cV1NcUw/cKK0", "bLz1jSkxfbfPjdu", "WR9Cd8okW4m", "W4iCASo9gMBcV8osW7VdLW", "dCoqoSkaWPJcUNSYq8od", "FComW6BcTCorWP7dHuvd", "rSoddsqqAmoXW5WU", "zSkRW5C", "gL4Yv8kFWQddNwvdsW", "BsKMohRdKeGTbmkA", "W7jzeSomW4xcR8kQDHbL", "sLlcTNm", "W6VcKgxdTwtdNmo0iuvK", "WRasWRWDsCoLWPyimem", "fhddOmkqWRbqW7VdHKFcLa", "jGBcUSkZWRdcNHRdK8kUwG", "WOZdNmkbWRpdQHZcPgJcNb4", "aSkJW64uk2NcMfnOiG", "WQNcV8kdW7VdMtqsWQ3cG8kz", "WOxcRSoVfJa", "eatdOI/cQtVdHLVdMKi", "vSoEwmokWR9ue0apWR4", "W4FdR8onvtbGW43cG8ohWPm", "WR3dLNW", "sSkLl8kj", "W7BdTCo2W70qaCkVWRS9iW", "WQ/cQSkDW7BcM3vuW7FdSmoo", "WOlcTCoGqYiTWPpdKmkyW5e", "BsKHkIpdKLT2bCou", "m8ogWQZcRvyTs2pcSCkp", "rCkCWR7cNq", "dKFcU3ldUw3cGKBcHWu", "ECk+WPCUWQVcS8oxcCkwW6W", "W6ZdQCoNW7asb8kNW4S9jq", "W6DXWPBcR3BcSSkuWPZcGxW", "BxZcISkMwmoDlIi8ha", "BHNcOSoXW4uXWOJcNshdTa", "WRnwaa", "W7RdVtZcR0PpW6moeSkv", "WRqThCoxWOvuWQhcMmkCqG", "xmkMWPpcMWKmWP3cISkKWQ8", "jrjauCk+eSonW7xdR20", "WPdcH8kgWQ3dTHpdSc3dMb4", "u8ohhq4SCG", "W4dcJSoJz8k3wwq", "zCk3WOXFWQCXWRpdNbJdQa", "p0KdgSoXr8kzW6NdVg0", "FCkHW5tdVSk7mrJdJZBdLq", "WQPQdSowWOvxW7/cI8kDqG", "gSkywuTfpmk9WPL6WR8", "W6L4u8kbW4es", "W7rtW7hcRmorWPBcTSovm3S", "W4RcOCktWQhdPaZcShhcK10", "eKurWRuGW64zW4jPqq", "neukW71QWRTxWOymhW", "pCkSWQibW7OjW7BcJN7cUG", "m0yaW6TS", "W63dQCoIW6Sje8kVW4eGiq", "CqnlbmkzbSolWQ7cOsu", "e1SIW4eJWRNdLmkqobG", "b0pcQhddV3NcIr/cTH4", "WPL7WQGrW4/cG8o9tNZcMG", "dmo9W6iwmN7cIr9OAW", "WQywWPRdGmkWq8omWRbrW64", "jJJdG8oGwCookIj0tq", "p0GKrmorW6/dLYrvsW", "q0vYmmorxKG", "W5idWQ4Bbmk2WOjBW7e7", "W7vUW7TnWQJcUt9qWPLf", "x8orW5BcUaOaoe1TW7G", "DWFcT8oGW4m9WOJcNZBdTq", "hX/dQJpcQJ7cIvVdMea", "smocp8on", "ECoTW40oW6L/W6FcMqRdPW", "WRiAWQpcRa", "fmofW6lcINJcGmoxWPe9pq", "W6HCWRNcRmkgW4dcTSkwFYy", "rmkiW7hcMG/cGdD9WQW3", "WQ7cK2pdONy", "pfldPCo/WPj+W5tcHrpcOW", "W4tcMSonW7RcPfFcUw/dIb4", "hCkqWP7dR1CphuP/WQC", "BCkTW5NdPIm", "rCorWPddTfnxFu12WRy", "EmkOW4DMWR7cUSoXbmkfWRG", "WQFdQSkpmrVcKdhcUCkD", "W7OxWQZcVmozW43dVCotk38", "EWddOSo1WQRdGq", "WP3cJSoiW7dcOq", "AKKdgSoXr8kfWQ3cQw8", "dLCIW4rJW6BcICoqDXW", "W5LxWO9af8o3W7PxCrC", "xCkBWQa", "BCoRWO4mW6ySWRFdMfJcTq", "WQmEW5mkWPOjWO1ewSkg", "WPezWQGAW4/cG8o3lhBcMq", "WPFcJmofW7BcSNpdOG", "fun2mmocwuG", "bfhcU3hdTwNcMa", "CCk7W5m", "bCopW6ZcJuRdNxOLW6aH", "WP7cMCo4z8kUahrXW4lcHa", "xvtcTG", "DXNdHCkLW7ldIK/cMSo2sG", "W4LgW5S", "xCoWBq", "W7/cQSozz0xdOsNdHCoKW7G", "pCk0W5VdVYldSvroeSoJ", "mc/cG8kXhCkzFJP6qq", "W6rZwSkdWPGjW6pdMCozbW", "kSkPW5dcQSkkDqhdLtVdHG", "WPXYWRLaWORdM8kJcddcLa", "W6XyW5DjW4LmWOPqsSkx", "pwCHl3NdIWu2dSkj", "W6Cvm8o6vulcOSkAWQhdTW", "wmoFW6ddHcJcHmolWPu", "yCkSW5/dS8oy", "zSk/W5G", "rXtdUMZdR3xcHG7dIvy", "W77dTmoCWRtdMMHbWQBdI8kA", "w8kEWRJcJwNdGSkaW5DSla", "W7lcLSoyzG", "WR7dOCkpnWJcQGZcLCk/W7q", "ot/dHmo1sSoDoIvUuq", "eCowW6hdUMHQEe49WR0", "uCkgWP/dVffkkaLZWQC", "WQiyWPVcQSkYtSosWRPxW6i", "emkfWP/dVL9epvDYW6q", "WORcJSoeWRpdPeJdRtZdJa8", "mmk5W5tdUZBcQaXugCoN", "W4mBWRmrgmo1WODgW7m", "fCkgwuTzDCoZW4KVW6S", "xCkSW5/cUCkmorJcHHhdHG", "bSkkWQJdUwHYEeKYW6K", "W6C2WPZcUspdHLOXW7X9", "W78tW4PoW5GvW4vos8kt", "WP/cTmoOcY8GWPddHCkcW4q", "WRTrcmogW5RcNCk7Af4M", "W4CXW7G", "gCkVp8ktWRftcSomtM4", "aeyrfSoOjSkkW6xdSZK", "BCoQWOmDWR4TWQBdIrJdPa", "WR4sWOXvW5WpWOW", "W6SJW63cPd3dKKq9W7m9", "zfKKwSkyWQpdLILibW", "oCkzW6tdO0C3wc/dOG", "uCkwWP/dVG", "W7ldOmkiiKNcUWNcLCkIWQC", "W4StWQyad8k8W4zBW7jV", "x1lcTMRdVJhdJvRdK08", "W7ZcUM3cRePjW78UhmkF", "WPlcU8o6bsi+WO3dNSknW4S", "a8ojfCkmWRGhgqeEWQG", "Bq0nW6LZWR8uWOC6fG", "CXTWbmoFW7dcH2utgG", "WQVdQmobnWxcUrBcH8oSW7y", "WQHrhG", "WR3cR2ZcOrGiWQPWh8ot", "W6HCWQlcUmomWONdUCoyytO", "a8kveCkiWQ5tgX8AWRO", "jCoEW6lcTCokW43dG1TriG", "n1BdPmkIW4W2W5RdHHlcPW", "FSozoCkAka", "WPtcTCoQhq", "peukW6LRWO1nWP07eG", "FmoSWP4qWRO3WQJdJHVdOW", "WOXbW6Dfx8k1W5CsWQDQ", "ASk8W5NcO3NdQGLtfCo6", "WOddGCkJn8kXhcy+WOFdIa", "WPXeWO3dIhFcU8onWOtdNcC", "WOfDW6LdhmoLWQKtkeS", "sSkSkmklWQac", "m8kiW6xdTHiTwwdcTSob", "Fmo1W5dcQeidW5FdK8o5WQK", "lXnwy8o4gXqlDNa", "WPC7W7zbrmkSW4OdWQz8", "k09UpSkqBeiYl3W", "C8oVuCkoWOVcVH3dMCo0W6S", "iSoYW4hdP2NcUq1dqSkV", "i0SmvSkWbCoCWQxdVJK", "WP3cJSoaW6dcUqhcOZVdHqy", "W67dSmo2W7asamkSW58+jq", "F8k5W5PGWQtcTSoAcCkkWR4", "b8owW7VdQhfSFKuMW6W", "oLNcT8kJWPr3W4VdJWtcRG", "sSkkEmkJW4ZdStz3h8k4", "W6GuW5HPWQhdOCkrcahdVa", "qSoTWRVcGw3dLmkEW4fOla", "WQ/dT8ksAuVcVatcGmkWW7K", "ESkLW57cQq", "W4SNW7XjWOtdM8kQb2tdIa", "WRVcSCkIWRC", "cmkwWQpdNa7cGdLMWQvY", "F8kJW4uFWR4+W6NdLfpcPa", "ySoZqSkuWQ3cVMRdK8oSW6i", "cqhdQJ/cRcldN1ldLem", "q8oTW64BnthcIbPMlW", "Dg3dG8kMfCkjB3zPtW", "vHqSymkqcG0LCxi", "W6ldV2tcRq", "W6S9xSkkW5qjW6tcHCkkea", "rr8/W4fHW6dcGmoxD1i", "gGxcUCoKW50JWPFcN1FdTG", "WQ3cUmkjW6VcM2uUW7FcK8k+", "hSkvWPldM1Pol1C", "qmkDWR7dKH/cGZiUW6bI", "WQldVN3cRuihW6C4hmkz", "WQi5WRa", "jfNcImo1W60", "WQu9hCogWPvAWRFcHmojgW", "WP8al8o+fhBdSmkwWQNdOW", "umo7aCkaWR9jwfm", "sfFcVLZdT23cMrG", "DmkYW5ZdOq", "ouSTx8kf", "l1/cQq", "WRKwWR7cU8ozWOFdSW", "WObBW6DwoSo+WOHvW78G", "WOvHWRhdQ2lcLa4TW7Wm", "WRvtWQhcQCoFWOK", "uSoApmkwpmkJWQW", "W7WqrSkjWPtcLmkZCLLL", "xehcQhRdTxJcQqtcMb4", "W4SeWQSCxmkKWRrhpei", "W40zW7LuvSo5WPngW6i9", "AGxdM8oOW58MWO3cHKBdTq", "cvjYWOy", "W7qsWQpcR8otWOhcTSkkpsq", "WRuhWRNcUG", "pwCHl3NdIW46gCok", "xCobnSkqmmkfWQxdNa", "W4KuWQPssmkXWQmlnbO", "W4KmWQ8qxSkPW7Oepuy", "w8oXzCkuWRvDcSovuhi", "W6SJWRtdQwdcM1DPWRuP", "FCoVtSkBWORdVb3dK8oRW6m", "BCocW5JcH8oRWQm", "W7WqwSonW4hcHSo6zXvN", "amk9vq", "dmo2W6KCndhcIr5GlW", "BeGCW7XZWRfxW5iQhW", "lmkdWQRcL8kqW4pcMbCeCq", "l8kzW6dcOKiTuttdUCkp", "qSospmkAWPJcRa", "W7WcvSkhWPRdImo6pvCX", "WR3cRZddQbfRWQDGtSon", "nWNdJSo8WRHTpCowWOLq", "yCodcWiiFCk9W7i7W6W", "vmosdrK", "W6lcTCosELNdOcNdHCoNW7O", "FMi7kNRdJeD5vSky", "W5BdUSkUrcjUW5/cJCkpW4S", "zCkIW4pdUColpeNcGrpcHq", "WOCjWR4buSoOWReipei", "zW/cPSk8W7ZdN0tdN8kSfa", "cWTWj8ozsuG", "WQxdO8ktoXZcTGhdMCkYWRS", "EWxcO8oZW48TW4NdIWpcRG", "WOnfDCk3r1/dOCohW6NcTG", "FSktW6xdSfS2", "nLBdO8kYWPK", "W70sWRerbmoVWPu", "WQRcTSklW7BcIwrkW7tcKCk8", "umoZDSkoWQTmeCkFude", "EmkYW5BdUIq", "FmoUW7RcTCokWORdHvm", "AmkIW45WW6xcR8oAb8kkWQ4", "WQJdG3NcV8krhCkMk8kEW6a", "WRxcT8kYWQbocCk+W4j8Bq", "WRPrW5JcNmoUv8kmW6CvWRy", "vSoErCkFWRffuL9nW6O", "nq/dJCo0WQNcJa3dHCo+sW", "hCoEW6VdIW", "jCo8WOJdSSoAALJcL2FdJG", "W5utWRSwwSkTW7Otnfu", "nuCmW6zZ", "pXHwvmk1", "xSourCkoWRPgcr5cW7W", "W7TzbCogW4BdNCk4AX1/", "A8k5W596W6JcS8oB", "w8khqSkGW6CEvLXgWO0", "WQddK2dcO8kzvmk9nq", "t8oBkSkAAmocWRRdL8kwW6O", "lmkPW4OaW6vUW6FcIatcPW", "rmkhW7dcKHNcMs94WQuU", "cCkpB8ojW53cQxyYg8oj", "WPNcVSo7d3C6WP7dNmkkWO8", "vSkeWQ/cVI8Tia1QWQK", "c8kAASoazmoDW7RcNmolWRG", "xCophq4", "uCk1z8kEWQPjemkEeJC", "iMm2nsxdJamWvSop", "W4xdTgRcTKPjW7fSgCke", "WQHrW4hcNSkJg8kqW7XBW6a", "oXzp", "zCkSW5lcU8kdnXJdGJVdHG", "lHjlvCk9a8oCWRVdVt4", "W6tdUCo5WRzkvmkGW5mSnq", "zCkOW5pcV8kz", "WQCfWQRdTSkeW4/dSSoFksq", "zmoTWP5aWRPLW6JcLLFdUW", "W6z1wmkfW54FW7m", "CbyaW6z3WQTnW5iNeG", "mLNdSmoXWPvWW43dI03dPG", "ESkKWPZcQCkzoqtcHh7dNq", "a0D0nmkDrei0lt0", "W73dPCkIWQrovmo7WOCXmG", "cv7cV3ldUw3cIqRdLbu", "WROpWPNdMCkYsmosWRLFW6i", "Ce5uWQPkW6yxW4DWxW", "WQjLWRe", "W7tcMM/dPwJcJSk6l0v5", "hSoRW6uvp2xdKG", "hSkBBSooW4RdPcT0z8oB", "fCoEW7ZdVgbYCKKYW7u", "WOysWQ0", "W6faW6hdSCkwW5JdM8keCY4", "W57cN8oKDSo+eZCWWPddKa", "yczGCNBdMKTOqSkk", "WRqtWP0gWPLbW4Gzv8kn", "a8oFnSkkWPJdPwOVsSkh", "vSoTzmkuWQbDfSkiga", "fCkgwuTfpmk9WOu+W7y", "WPmhW4xdGrddOmkBW5JcM3i", "dmo1FmouW7qjxCohqxW", "W5jqW65cg8o3W65hyXm", "eXTDWQy1W68zW4fPqG", "jKSf", "W6j0sCkhW5LDWQNcHmkcfG", "wKFcO3pdVJhdJq/cNqi", "umovnSotimkfWQhdM8kkW6a", "a8ksWQ7cJxJdLa", "tCkzWRVcMMRdHConW4XOlG", "W5/cI8oKACo+aIKWWPddKa", "rSo2W7e", "wSoAzSk2kCknWQpdNSoeWQy", "d8kOW6rlDsJdNei5CW", "W7tcQCk5WQrywSoWWPqHFq", "rmkYWPtdNWLfWOFcHmoXW6q", "bSkCgGmaF8o2W5W+", "EfKqdCoJuSkmW7hdTJu", "fbtcUhddOYhcMGlcMbG", "zSkfcCoAWRddUIHQfmkM", "WQRcQSkjW7tcMwuSWRxdTmkuW4FdSa", "d8o7W64johpcMr11", "WOldUSoNcNi7WOVcNmkyW5y", "t8otCSkEWO/cP34Ztq", "WRbvcmooW5ZcMa", "g8kHWOxcLWfFW4y", "W6ufx8kjWOJdKmkzn1C1", "p0KFtSk1wCkzW7xdR20", "p8knW57dSfaNCgVdT8ok", "mCk6bCoAW4tdSb3cMSk4WQO", "W5RdO8ocvtDIW47cG8ofWPm", "jmk+W55OWRZcQSobrCkuWRK", "W6ZcPmkfnr3cUuJcH8kJWRC", "nvZcJ8oRW7mLESkbW5fc", "W5CzkW", "WORcG8onWRpdPf/dOspcJrO", "FCoyWRdcOHjKhx3cSCkp", "W4meWRrjtCo/WODgW7C7", "WQ/dTSobAaVdPG", "umo4W6zxk3xcGbPPjW", "BSkVW5RdQYldRLrdfCoY", "qmoCW7RdU2HS", "hH/dQY3cTtRdNKVdHuC", "W6BcP8kJWRfixmoWW5nVEq", "W5aCkmoS", "k07dTmo1WQ/dKHVdMCkSea", "WR7dTCoyWQNdNhGwWRFdJmkz", "DSk0W5hdQG", "jWxdLmk7WRDJDmoEWOjF", "aSkgB8oaW4tdVfz/cmoE", "WQfIW74kW6/dRxXEW7KB", "uXC0zSkahqf0BMu", "WRdcQSktW7FcNhvuW7BcJCom", "ESo2imkGWPnPlG", "pqdcRCkQWRz/BmoDWPLg", "W4OzjSo8ed/cP8khWQtdSG", "WQNcN3tdVNpdIW", "lSoTW5JcUSowFWtdGZddLW", "svzVjSoeb08Pjcu", "b8ocW6tcRIfUFuaWW6i", "mCk7W5ddQJpdTLzxe8oM", "k0BcVmo6WRxcJqVdGG", "umkZWOJdIfCCW5NcN8kUW6e", "c8oEW6VdRa", "hSkUjSkgWRzpwCombJm", "vSkOWOtcIW", "W44EWQnugmo8WOqAWQrG", "bCofW6ldHddcLCoaW4WWyq", "W6pdVhO", "FeFdPCk+WPvKW5ldIbBcQa", "z0SOwSkyWQNdKISbtG", "C8kOW5NdUZ7dSrzag8o5", "uCkcWOldUujAlWLRWRq", "WQ3dQmkinWi", "W7FcLZddSCowemoOFSotW60", "nY/cHSk1hCkeFhH9wq", "WPddNSkJlSoTaYjtWOhdGa", "gCk4WQCzn33cNWa8yq", "qmosdqqlmCoUW4W4W7i", "jeSeW6KGW6azW5jPuW", "WOncWOdcHvVcOCkwWPVdLdC", "AKG1t8kDWQtcJMjwqW", "pSktWRldTmkeW43cGbCqCq", "EmoFB8k7W4/dSxCIBSkk", "c0ldPCkYWPLWW4RdJW", "rXyGzCkCgG13CNa", "rmkxW67dPxuJnG", "y8oJW51HWQNcQ8obcCkuWRS", "WPmsWQpcVmorW4ddHSoxlgK", "WQdcIg3dUW", "WR8pW5zsWPKiWOWygCkk", "dKvL", "pembW6LZW7nrWPS6bW", "uGiSW5e7WRJdISkdlea", "WRDwW43cLmoIv8kvW6yqWQ0", "EmozWRlcLCokWONdGrao", "WRZcRmk4WQe", "W6rhWPekWOHvW4yCcCou", "yrJcUmo/W58/WP7cIGpcVW", "EmoGW4nT", "WQ/dQSkg", "mmk2WP5uW7C", "WQz+xmksW5qoW7BdLG", "W67cPmoDEW3cSrpdISoXW7q", "lSkbWQpdPSoLW5JcJaiqyq", "WPVcMSoeW7a", "W4JdS2/cSKXeWRqOfmkD", "cH5QWPbYW7VdG8kmofa", "jCowW5NcPGOal1j8W7G", "vCkJWOtcSqLnWPRcNa", "sSkoWRJdJW", "WRpdQmosWRtdNxGeWQRdH8kg", "WPzhW75mx8kQW5CsWRzY", "ASkKW5/cUCowEKtcHh7dLW", "jhVdM8oGwmoACNeQbW", "WRrHWRhdOYlcGa5GWReS", "W6viW6axWOPpW50weSos", "WQFcJgxdUq", "WQr8WOyqW7BdV3S", "rvRcThq", "W79deSoiW5ZcHCkPDaTP", "W7pdUCoqWQi", "s8oteCkbWRm", "W6vGWRCAW5NcKSo1vMRcNW", "jmkVW49LWQhcVCoxbmknW6y", "aCkipSkcWONdTxa1sCka", "rSoqhLu", "k8k2W5q", "WQxdLMNdQ8kuxmkNpCkyW7y", "WRlcRmkLWRftqCo3W5mICq", "WRqnWOldI8ops8ooWQHsW6W", "y33dGW", "A1RcMCk2W6KJFCowWOKB", "WO4dWQNdHWRdU8knW57cMxm", "xSoDuSk7WQxcKx/dLSkOW5G", "vCkcW7RdHcZcMmolW4WOAq", "bf92WOb8", "WQHvhSoD", "WQNcRmkSWQa", "DK8GvmkDWQtcJxLvsa", "CmoBWRlcT8oiWOZdK0qnDG", "WR7dPCkvpaFcUqJcKq", "ALVdO8oXWQZcKXNdGSkNqW", "jLBdP8oUWR3cKq", "W40BWQmrgmkMW4f8W7K/", "WRG6c8osWOvDWRJcHSkrxq", "iWDwtSoXcCoyWQtcPsq", "WQm+WRyxWRJcSL4pW5yq", "W6JdQCoMW6SobSoKW5qSCW", "ndHUoc3cMLK", "c1yYWOf2W6RcJ8ovAH8", "yCkIW599", "EG5Hb8obW6/cG3mbgW", "WOddN8k2iSkXsh53W5JcHa", "W5JcJSoIA8k1thK", "FvRcLCo6W6O", "WQVdQSkvjHa", "WRrca8opWPxdLW", "nrFdTmk9WPbIW4RcL1dcPa", "A8k0W4T7WQNcSq", "WRDWWQNdUa", "WPddNSkJlSoGycyIWPZdGq", "lmo4WO5DWQaXW6FcHvFcQW", "fSkFWOddUvPgoaLTWQK", "cqldOZhcOJJcVfNdHJK", "WQCVWRfeWRJdUhmnW5uv", "u8kxWRBcPtaSubj/WRq", "WPH9W5tdHX7dPmkdWQpcGri", "zmk4W4zL", "uSkmW77dGtNcL8olWOK3Ba", "imkRC8olW5FcMaJdRmkPWRS", "ECo0WOHvWRT4W6JcHXBcQW", "W7fOemksW5axW6FdLmombG", "kCkMW4n7WQhcSSkFhmkwWQO", "cCosgWqbzCkJ", "W6NcUSkRiqtcTatcNmoXWPC", "z8k6rSkwWOxcO07cH8k/W6i", "WQi9WRasW7ldO3yf", "vXq/WOTYW6dcG8oABe0", "WQzTvmkkW5WsW7BdLSkarG", "BuThu8kNr8oAWQxcOwO", "WPddN8kXmSo1hdCHWOldNa", "s8kmWQ7cJxJdLmkoW4f4pa", "DN3dLSoLuG", "WQKSc8oiWObcW5VcICkDxa", "DSo/hmotWOGovSohqHO", "W7vPWRJdPhRdMaPZWRmR", "p2mG"];
  _0x5495 = function () {
    return _0x5bc923;
  };
  return _0x5495();
}
function historiProdukadmin(_0x4b5624, _0x32dff9) {
  if (_0x4b5624) {
    var _0x3113d3 = document.getElementById("html-user");
    if (_0x3113d3) {
      var _0x3d3b82 = [];
      var _0x23110e = 0x0;
      db.collection("dataproduk").orderBy("inv", "desc").get().then(function (_0x17f598) {
        var _0x2a9790 = _0x17f598.empty;
        if (_0x2a9790 == false) {
          var _0x1f820c = '';
          _0x1f820c += "<table class='scroll'>";
          _0x1f820c += "<thead class='thead'>";
          _0x1f820c += "<th><input class='cekall-produk' type='checkbox'/></th>";
          _0x1f820c += "<th>Invoice</th>";
          _0x1f820c += "<th class='thead-detail-pembeli'>Detail Pembeli</th>";
          _0x1f820c += "<th>Waktu</th>";
          _0x1f820c += "<th>Harga</th>";
          _0x1f820c += "<th>Status</th>";
          _0x1f820c += "<th>Aksi</th>";
          _0x1f820c += "</head>";
          _0x1f820c += "<tbody class='html-tbody'>";
          _0x17f598.forEach(function (_0x35881d) {
            var _0x5110d4 = _0x35881d.id;
            var _0x179f23 = _0x35881d.data();
            var _0xed83c2 = JSON.parse(_0x179f23.data);
            var _0x2e7be4 = JSON.parse(_0x179f23.total);
            var _0x5384dd = _0x179f23.inv;
            var _0x753307 = _0x179f23.idproduk;
            var _0x6adffc = _0x179f23.status;
            var _0x7ddaee = _0xed83c2["Tanggal Order"];
            var _0x3afc68 = _0xed83c2.Nama;
            var _0x5c2d17 = _0xed83c2.Email;
            var _0xdae244 = _0xed83c2["Nomor HP"];
            var _0x50d647 = _0xed83c2.Catatan;
            var _0x560a74 = _0x2e7be4.Voucher;
            var _0x3a516d = _0x2e7be4["Total Pembayaran"];
            _0x3d3b82[_0x23110e] = {
              "id": _0x5110d4,
              "inv": _0x5384dd,
              "tanggal": _0x7ddaee,
              "nama": _0x3afc68,
              "hp": _0xdae244,
              "email": _0x5c2d17,
              "catatan": _0x50d647,
              "idproduk": _0x753307,
              "voucher": _0x560a74,
              "total": _0x3a516d,
              "status": _0x6adffc
            };
            _0x23110e++;
          });
          for (i = 0x0; i < _0x3d3b82.length; i++) {
            if (_0x3d3b82[i]) {
              var _0x2f381d = _0x3d3b82[i];
              var _0x2e1d92 = _0x2f381d.id;
              var _0x1c34e2 = _0x2f381d.inv;
              var _0x46747c = _0x2f381d.tanggal;
              var _0x5b2c7d = _0x2f381d.nama;
              var _0x43f4f5 = _0x2f381d.hp;
              var _0x982968 = _0x2f381d.email;
              var _0x45549c = _0x2f381d.idproduk;
              var _0x35bd06 = _0x2f381d.voucher;
              var _0x178f74 = _0x2f381d.total;
              var _0x2c314e = _0x2f381d.catatan;
              var _0xb0281c = _0x2f381d.status;
              if (_0xb0281c == "0") {
                var _0x1c7a1e = "Pesanan baru";
              } else {
                if (_0xb0281c == "0") {
                  var _0x1c7a1e = "Pesanan baru";
                } else {
                  if (_0xb0281c == "1") {
                    var _0x1c7a1e = "Konfirmasi";
                  } else {
                    if (_0xb0281c == "2") {
                      var _0x1c7a1e = "Pengiriman";
                    } else {
                      if (_0xb0281c == "3") {
                        var _0x1c7a1e = "Selesai";
                      } else {
                        if (_0xb0281c == "4") {
                          var _0x1c7a1e = "Batal";
                        } else {
                          var _0x1c7a1e = "-";
                        }
                      }
                    }
                  }
                }
              }
              if (_0x32dff9 == undefined || formatNama(_0x5b2c7d) == formatNama(_0x32dff9) || _0x1c34e2 == _0x32dff9 || formatNama(_0x45549c) == formatNama(_0x32dff9) || _0x982968 == _0x32dff9 || formatNama(_0xb0281c) == formatNama(_0x32dff9) || _0x43f4f5 == _0x32dff9.split(/[^0-9]/).join('').replace(/^[0]/, "62")) {
                _0x1f820c += "<tr class='data-histori' data-id='" + _0x2e1d92 + "'>";
                _0x1f820c += "<td class='checklist'><input class='cek-produk-ini' type='checkbox'/></td>";
                _0x1f820c += "<td class='inv'>";
                _0x1f820c += "<table><tbody>";
                _0x1f820c += "<tr><td>" + _0x1c34e2 + "</td></tr>";
                _0x1f820c += "<tr><td><button class='button-submit kirim-pesan' data-inv='" + _0x1c34e2 + "' data-nama='" + _0x5b2c7d + "' data-hp='" + _0x43f4f5 + "'>Kirim Pesan</button></td></tr>";
                _0x1f820c += "</tbody></table>";
                _0x1f820c += "</td>";
                _0x1f820c += "<td class='tbody-detail-pembeli'>";
                _0x1f820c += "<table><tbody>";
                _0x1f820c += "<tr><th>Nama</th><td>:</td><td>" + _0x5b2c7d + "</td></tr>";
                _0x1f820c += "<tr><th>Nomor HP</th><td>:</td><td>" + _0x43f4f5 + "</td></tr>";
                _0x1f820c += "<tr><th>Jenis Produk</th><td>:</td><td>" + backNama(_0x45549c) + "</td></tr>";
                if (_0x35bd06 != "-") {
                  _0x1f820c += "<tr><th>Voucher</th><td>:</td><td>" + _0x35bd06 + "</td></tr>";
                }
                if (_0x2c314e != "-") {
                  _0x1f820c += "<tr><th>Catatan</th><td>:</td><td>" + _0x2c314e + "</td></tr>";
                }
                _0x1f820c += "</tbody></table>";
                _0x1f820c += "</td>";
                _0x1f820c += "<td>" + _0x46747c + "</td>";
                _0x1f820c += "<td>" + angkaToRp(_0x178f74) + "</td>";
                _0x1f820c += "<td class='td-status'><span class='status' data-status='" + _0xb0281c + "'>" + _0x1c7a1e + "</span></td>";
                _0x1f820c += "<td class='aksi'><a href='" + urlInvoice + "?inv=" + _0x1c34e2 + "'><svg viewBox='0 0 24 24'><path fill='currentColor' d='M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9M12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17M12,4.5C7,4.5 2.73,7.61 1,12C2.73,16.39 7,19.5 12,19.5C17,19.5 21.27,16.39 23,12C21.27,7.61 17,4.5 12,4.5Z'></path></svg></a></td>";
                _0x1f820c += "</tr>";
              }
            }
          }
          _0x1f820c += "</tbody>";
          _0x1f820c += "</table>";
          $(".loading-html").hide();
          $("#html-produk").html(_0x1f820c);
          $(".cekall-produk").change(function () {
            if ($("input.cekall-produk:checked").val() == "on") {
              $("input.cek-produk-ini").attr("checked", true);
            } else {
              $("input.cek-produk-ini").attr("checked", false);
            }
          });
          $("#tombol-ganti-status").click(function () {
            var _0xc2c704 = $("#opsi-histori :selected").val();
            var _0x1be250 = $("#pencarian-histori").val();
            $(_0x5378(194632942078, "(]6h") + "uk .cek-pr" + "oduk-ini").each(function () {
              if (this.checked == true) {
                var _0x233454 = $(this).parents(".data-histori").attr("data-id");
                if (_0xc2c704 == "5") {
                  db.collection("dataproduk").doc(_0x233454)["delete"]().then(() => {
                    notification("<div class='peringatan sukses'><svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'><path d='M12 2C6.5 2 2 6.5 2 12S6.5 22 12 22 22 17.5 22 12 17.5 2 12 2M12 20C7.59 20 4 16.41 4 12S7.59 4 12 4 20 7.59 20 12 16.41 20 12 20M16.59 7.58L10 14.17L7.41 11.59L6 13L10 17L18 9L16.59 7.58Z' /></svg></div>Data pesanan berhasil dihapus");
                    if (_0x1be250 == '') {
                      historiProdukadmin(_0x4b5624);
                    } else {
                      historiProdukadmin(_0x4b5624, _0x1be250);
                    }
                  })["catch"](_0x87620d => {
                    notification("<div class='peringatan gagal'><svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'><path d='M11,15H13V17H11V15M11,7H13V13H11V7M12,2C6.47,2 2,6.5 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20Z' /></svg></div>Data pesanan gagal dihapus, silahkan coba lagi");
                  });
                } else {
                  var _0x575409 = db.collection("dataproduk").doc(_0x233454);
                  return _0x575409.update({
                    "status": _0xc2c704
                  }).then(() => {
                    $(".loading-update-user").hide();
                    notification("<div class='peringatan sukses'><svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'><path d='M12 2C6.5 2 2 6.5 2 12S6.5 22 12 22 22 17.5 22 12 17.5 2 12 2M12 20C7.59 20 4 16.41 4 12S7.59 4 12 4 20 7.59 20 12 16.41 20 12 20M16.59 7.58L10 14.17L7.41 11.59L6 13L10 17L18 9L16.59 7.58Z' /></svg></div>Status berhasil dirubah");
                    if (_0x1be250 == '') {
                      historiProdukadmin(_0x4b5624);
                    } else {
                      historiProdukadmin(_0x4b5624, _0x1be250);
                    }
                  })["catch"](_0x3b6edd => {
                    $(".loading-u" + _0x5378(409010, "TYxK")).hide();
                    notification("<div class='peringatan gagal'><svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'><path d='M11,15H13V17H11V15M11,7H13V13H11V7M12,2C6.47,2 2,6.5 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20Z' /></svg></div>Status gagal diupdate, silahkan coba lagi");
                    console.log(_0x3b6edd);
                  });
                }
              }
            });
          });
          $(".data-histori .kirim-pesan").click(function () {
            var _0x9b0fd = $(this).attr("data-inv");
            var _0x474605 = $(this).attr("data-hp");
            var _0x390960 = $(this).attr("data-nama");
            $(".box-form-histori").fadeIn();
            $(".box-form-histori .data-nama-user").text(_0x390960);
            $(".box-form-histori .data-nomor-user").text(_0x474605);
            $(".box-form-histori .data-inv-user").text(_0x9b0fd);
          });
          $("#opsi-pesan-user").change(function () {
            var _0x18d04c = $(".box-form-histori .data-inv-user").text();
            var _0x47542b = $(".box-form-histori .data-nama-user").text();
            var _0x13348f = $(".box-form-histori .data-nomor-user").text();
            var _0x5407b0 = '';
            var _0x5203b6 = $("#opsi-pesan-user :selected").val();
            if (_0x5203b6 == "1") {
              _0x5407b0 += "Pesanan kamu telah kami konfirmasi dan akan segera di kirim\n\n";
              _0x5407b0 += "*Pesanan akan dikirim ke :*\n\n";
              _0x5407b0 += "Nama: " + _0x47542b + "\n";
              _0x5407b0 += "Nomor HP: " + _0x13348f + "\n";
              _0x5407b0 += "Alamat: ...\n\n";
              _0x5407b0 += "Kami akan menghubungi kembali jika produk sudah dikirim.\n\n";
              _0x5407b0 += "Terima Kasih";
            } else {
              if (_0x5203b6 == "2") {
                _0x5407b0 += "Pesanan kamu sedang dalam proses pengiriman.\n\n";
                _0x5407b0 += "Invoice: " + _0x18d04c + "\n";
                _0x5407b0 += "Jasa Kurir: ...\n";
                _0x5407b0 += "Nomor Resi: ...\n";
                _0x5407b0 += "Lacak pengiriman: https://...\n\n";
                _0x5407b0 += "*Dikirim ke:*\n";
                _0x5407b0 += "Nama: " + _0x47542b + "\n";
                _0x5407b0 += "Nomor HP: " + _0x13348f + "\n";
                _0x5407b0 += "Alamat: ...\n\n";
                _0x5407b0 += "Terima Kasih";
              } else {
                if (_0x5203b6 == "3") {
                  _0x5407b0 += "Terima kasih *" + _0x47542b + "* sudah berbelanja di toko kami\n\n";
                  _0x5407b0 += "Silakan menghubungi kami, jika ingin pesan produk lainnya.\n\n";
                  _0x5407b0 += "Terima Kasih";
                } else if (_0x5203b6 == "4") {
                  _0x5407b0 += "Baik kak, kami tidak memaksa, jika tidak jadi order.";
                }
              }
            }
            $("#isi-pesan").val(_0x5407b0);
            return false;
          });
          $("#tombol-kirim-pesan").click(function () {
            var _0x18b498 = $(".box-form-histori .data-nomor-user").text();
            var _0x5ac13f = $("#isi-pesan").val();
            if (_0x5ac13f == '') {
              notification("<div class='peringatan gagal'><svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'><path d='M11,15H13V17H11V15M11,7H13V13H11V7M12,2C6.47,2 2,6.5 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20Z' /></svg></div>Teks pesan masih kosong");
              return false;
            } else {
              var _0x462649 = "https://api.whatsapp.com/send?phone=" + _0x18b498 + "&text=" + encodeURIComponent(_0x5ac13f);
              window.open(_0x462649, "_blank");
              return false;
            }
          });
          $("#tombol-close-pesan").click(function () {
            $(".box-form-histori .data-inv-user").text();
            $(".box-form-histori .data-nama-user").text();
            $(".box-form-histori .data-nomor-user").text();
            $(".box-form-histori").fadeOut();
            return false;
          });
        } else if (_0x2a9790 == true) {
          $(".loading-html").hide();
          $("#html-produk").html("<p>Data pesanan masih kosong</p>");
        }
      });
    }
  }
}
function setupDigital(_0x39f790, _0x28c9ee) {
  if (_0x39f790) {
    var _0x58bbba = document.getElementById("html-digital");
    if (_0x58bbba) {
      $(".loading-html").hide();
      var _0x2da251 = [];
      var _0x5a3cb4 = 0x0;
      db.collection("produkdigital").orderBy("inv", "desc").get().then(function (_0x456045) {
        var _0xfd49c7 = _0x456045.empty;
        if (_0xfd49c7 == false) {
          var _0xa672e3 = '';
          _0xa672e3 += "<table class='scroll'>";
          _0xa672e3 += "<thead class='thead'>";
          _0xa672e3 += "<th><input class='cekall-produk-digital' type='checkbox'/></th>";
          _0xa672e3 += "<th>Invoice</th>";
          _0xa672e3 += "<th>Nama Produk</th>";
          _0xa672e3 += "<th>File</th>";
          _0xa672e3 += "</head>";
          _0xa672e3 += "<tbody class='html-tbody'>";
          _0x456045.forEach(function (_0x189af7) {
            var _0x4742e3 = _0x189af7.id;
            var _0x1b84db = _0x189af7.data();
            var _0x33f223 = _0x1b84db.inv;
            var _0x4a7520 = _0x1b84db.produk;
            var _0x1481b8 = _0x1b84db.link;
            _0x2da251[_0x5a3cb4] = {
              "id": _0x4742e3,
              "inv": _0x33f223,
              "produk": _0x4a7520,
              "file": _0x1481b8
            };
            _0x5a3cb4++;
          });
          for (i = 0x0; i < _0x2da251.length; i++) {
            if (_0x2da251[i]) {
              var _0x4d0fe9 = _0x2da251[i];
              var _0x2e01e1 = _0x4d0fe9.id;
              var _0x452ad0 = _0x4d0fe9.inv;
              var _0x18f07e = _0x4d0fe9.produk;
              var _0x3b0af2 = _0x4d0fe9.file;
              if (_0x28c9ee == undefined || formatNama(_0x18f07e) == formatNama(_0x28c9ee) || _0x452ad0 == _0x28c9ee) {
                _0xa672e3 += "<tr class='data-produk-digital' data-id='" + _0x2e01e1 + "'>";
                _0xa672e3 += "<td class='checklist'><input class='cek-produk-digital' type='checkbox'/></td>";
                _0xa672e3 += "<td>" + _0x452ad0 + "</td>";
                _0xa672e3 += "<td>" + _0x18f07e + "</td>";
                _0xa672e3 += "<td class='aksi'><a href='" + _0x3b0af2 + "' target='_blank'><svg viewBox='0 0 24 24'><path fill='currentColor' d='M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9M12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17M12,4.5C7,4.5 2.73,7.61 1,12C2.73,16.39 7,19.5 12,19.5C17,19.5 21.27,16.39 23,12C21.27,7.61 17,4.5 12,4.5Z'></path></svg></a></td>";
                _0xa672e3 += "</tr>";
              }
            }
          }
          _0xa672e3 += "</tbody>";
          _0xa672e3 += "</table>";
          $(".loading-html").hide();
          $("#html-digital").html(_0xa672e3);
          $(".cekall-produk-digital").change(function () {
            if ($("input.cekall-produk-digital:checked").val() == "on") {
              $("input.cek-produk-digital").attr("checked", true);
            } else {
              $("input.cek-produk-digital").attr("checked", false);
            }
          });
          $("#hapus-produk-digital").click(function () {
            $(".html-digital .cek-produk-digital").each(function () {
              if (this.checked == true) {
                var _0x1e0d94 = $(this).parents(".data-produk-digital").attr("data-id");
                db.collection("produkdigital").doc(_0x1e0d94)["delete"]().then(() => {
                  notification("<div class='peringatan sukses'><svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'><path d='M12 2C6.5 2 2 6.5 2 12S6.5 22 12 22 22 17.5 22 12 17.5 2 12 2M12 20C7.59 20 4 16.41 4 12S7.59 4 12 4 20 7.59 20 12 16.41 20 12 20M16.59 7.58L10 14.17L7.41 11.59L6 13L10 17L18 9L16.59 7.58Z' /></svg></div>Data produk digital berhasil dihapus");
                  if (_0x28c9ee == '') {
                    setupDigital(_0x39f790);
                  } else {
                    setupDigital(_0x39f790, _0x28c9ee);
                  }
                })["catch"](_0x23bd5e => {
                  notification("<div class='peringatan gagal'><svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'><path d='M11,15H13V17H11V15M11,7H13V13H11V7M12,2C6.47,2 2,6.5 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20Z' /></svg></div>Data produk digital gagal dihapus, silahkan coba lagi");
                });
              } else {
                notification("<div class='peringatan gagal'><svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'><path d='M11,15H13V17H11V15M11,7H13V13H11V7M12,2C6.47,2 2,6.5 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20Z' /></svg></div>Belum ada produk digital yang dicentang");
              }
            });
          });
        } else if (_0xfd49c7 == true) {
          $("#html-digital").html("<p>Produk digital kosong, silahkan tambah produk digital untuk melihat data produk ini</p>");
        }
      });
    }
  }
}
function infoPenjualanadmin(_0x46a2aa, _0x3d9fb8, _0x253814) {
  if (_0x46a2aa) {
    var _0x33b263 = document.getElementById("html-penghasilan");
    if (_0x33b263) {
      db.collection("dataproduk").orderBy("inv", "desc").get().then(function (_0x39d8fe) {
        var _0x39b524 = _0x39d8fe.size;
        var _0x37953d = _0x39d8fe.empty;
        if (_0x37953d == false) {
          var _0x179a84 = '';
          var _0x25a130 = 0x0;
          _0x179a84 += "<div class='html-penghasilan'><table class='penghasilan'><tbody>";
          _0x39d8fe.forEach(function (_0x27d803) {
            var _0x2772ee = _0x27d803.data();
            var _0x2f7468 = JSON.parse(_0x2772ee.data);
            var _0x110ae5 = _0x2772ee.idproduk;
            var _0x5e305 = JSON.parse(_0x2772ee.total);
            var _0x5392b4 = _0x2f7468.Nama;
            var _0x4f9082 = _0x2f7468["Nomor HP"];
            var _0x4c45f9 = _0x2f7468["Tanggal Order"];
            var _0x353c08 = _0x5e305["Total Pembayaran"];
            if (_0x3d9fb8 == undefined || formatTanggalangka(_0x3d9fb8) == formatTanggalangka(_0x4c45f9)) {
              if (_0x253814 == undefined || _0x253814 == '' || formatNama(_0x253814) == formatNama(_0x5392b4) || _0x253814.split(/[^0-9]/).join('').replace(/^[0]/, "62") == _0x4f9082 || formatNama(_0x253814) == formatNama(_0x110ae5)) {
                _0x25a130 = _0x25a130 + parseInt(_0x353c08);
              }
            }
          });
          if (_0x3d9fb8 == undefined) {
            _0x179a84 += "<tr><th align='left' style='width: 12em;'>Jumlah Checkout</th><td align='left'>:</td><td align='right'>" + _0x39b524 + "</td></tr>";
          }
          _0x179a84 += "<tr><th align='left' style='width: 12em;'>Total Penghasilan</th><td align='left'>:</td><td align='right'>" + angkaToRp(_0x25a130) + "</td></tr>";
          _0x179a84 += "</tbody></table></div>";
          $(".loading-penghasilan").hide();
          $("#html-penghasilan").html(_0x179a84);
        } else {
          if (_0x37953d == true) {
            var _0x179a84 = "<div class='html-penghasilan'><p>Penghasilan belum tersedia</p></div>";
            $(".loading-penghasilan").hide();
            $("#html-penghasilan").html(_0x179a84);
          }
        }
      });
    }
  }
}
function setupAdmin(_0x3ee19d) {
  db.collection("datausers").where("email", "==", _0x3ee19d.email).get().then(function (_0x6a3907) {
    var _0x6a3907 = _0x6a3907.docs[0x0].data();
    var _0xb7146a = _0x6a3907.status;
    if (_0xb7146a == "admin") {
      if (paramInv == null) {
        window.location.href = urlProfile;
      } else {
        var _0x19ee7b = '';
        db.collection("dataproduk").where("inv", "==", paramInv).get().then(function (_0x481389) {
          _0x481389.forEach(function (_0x3df30f) {
            var _0x23fc30 = _0x3df30f.data();
            var _0x4d246e = _0x23fc30.id;
            var _0x234099 = _0x23fc30.inv;
            var _0x7f9c63 = JSON.parse(_0x23fc30.data);
            var _0x43b25e = JSON.parse(_0x23fc30.produk);
            var _0x3a0fba = JSON.parse(_0x23fc30.total);
            var _0x1b6b1a = _0x7f9c63.Nama;
            var _0x5b56d3 = _0x7f9c63["Nomor HP"];
            var _0x4d03aa = _0x7f9c63.Email;
            var _0x3527c6 = _0x7f9c63.Alamat;
            var _0x4170ff = _0x7f9c63.Pembayaran;
            var _0x2aad9f = _0x7f9c63.Pengiriman;
            var _0x4e2213 = _0x7f9c63["Tanggal Order"];
            var _0x2aa5e0 = _0x3a0fba.Voucher;
            var _0x126eee = _0x3a0fba["Total Pembayaran"];
            if (paramCetak == null) {
              _0x19ee7b += "<div class='html-invoice'>";
              _0x19ee7b += "<div class='detail-invoice'>";
              _0x19ee7b += "<div class='top-button-inv'>";
              _0x19ee7b += "<a href='" + urlProfile + "' class='tombol-kembali'>Kembali</a>";
              _0x19ee7b += "<a href='" + urlInvoice + "?inv=" + _0x234099 + "&cetak=inv' target='_blank' class='tombol-inv'>Invoice</a>";
              _0x19ee7b += "</div>";
              _0x19ee7b += "<div class='body-inv'>";
              _0x19ee7b += "<h3 class='title'>DATA PENERIMA</h3>";
              _0x19ee7b += "<hr></hr>";
              _0x19ee7b += "<table class='table-identitas'>";
              _0x19ee7b += "<tbody>";
              _0x19ee7b += "<tr><td>User ID</td><td>: " + _0x4d246e + "</td></tr>";
              _0x19ee7b += "<tr><td>Nama Penerima</td><td>: " + _0x1b6b1a + "</td></tr>";
              _0x19ee7b += "<tr><td>Nomor HP</td><td>: " + _0x5b56d3 + "</td></tr>";
              _0x19ee7b += "<tr><td>Email</td><td>: " + _0x4d03aa + "</td></tr>";
              if (_0x3527c6 != "-") {
                _0x19ee7b += "<tr><td>Alamat</td><td>: " + _0x3527c6 + "</td></tr>";
              }
              _0x19ee7b += "<tr><td>Pembayaran</td><td>: " + _0x4170ff + "</td></tr>";
              if (_0x2aad9f != "-") {
                _0x19ee7b += "<tr><td>Pengiriman</td><td>: " + _0x2aad9f + "</td></tr>";
              }
              _0x19ee7b += "</tbody>";
              _0x19ee7b += "</table>";
              _0x19ee7b += "<h3 class='title'>DATA ORDER</h3>";
              _0x19ee7b += "<hr></hr>";
              _0x19ee7b += "<div class='table-responsive'>";
              _0x19ee7b += "<table class='table-detail-produk'>";
              _0x19ee7b += "<thead><tr><th>No</th><th>Nama Produk</th><th>Detail</th><th>Qty</th><th>Harga</th><th>Total</th><th>Lihat</th></tr></thead>";
              _0x19ee7b += "<tbody>";
              _0x19ee7b += renderProduk(_0x43b25e);
              _0x19ee7b += "</tbody>";
              _0x19ee7b += "</table>";
              _0x19ee7b += "<table class='table-total'>";
              _0x19ee7b += "<tbody>";
              if (_0x2aa5e0 != "-") {
                _0x19ee7b += "<tr><td>Voucher</td><td>: " + _0x2aa5e0 + "</td></tr>";
              }
              _0x19ee7b += "<tr><th>Total Pembayaran</th><th>: " + angkaToRp(_0x126eee) + "</th></tr>";
              _0x19ee7b += "</tbody>";
              _0x19ee7b += "</table>";
              _0x19ee7b += "</div>";
              _0x19ee7b += "<hr></hr>";
              _0x19ee7b += "<a href='" + urlInvoice + "?inv=" + _0x234099 + "&cetak=label' target='_blank' class='tombol-label'>Cetak Label</a>";
              _0x19ee7b += "</div>";
              _0x19ee7b += "</div>";
              _0x19ee7b += "</div>";
            } else {
              if (paramCetak == "inv") {
                var _0x2c1cc5 = '';
                _0x19ee7b += "<style>#belibeli-halaman-kredit,#belibeli-icon-notifikasi,#belibeli-widget-button-mobile,#content-wrap-page h1,#footer-wrap,#header-belibeli-navkirikanan,#header-belibeli-utama,.belibeli-garis-bawah,a.belibeli-whatsapp-show-chat{display: none!important;}.dark .html-invoice{color:#444444;}</style>";
                _0x19ee7b += "<div class='html-invoice'>";
                _0x19ee7b += "<div class='detail-invoice'>";
                _0x19ee7b += "<div class='top-button-inv' style='padding:0;margin-bottom:1.5rem'>";
                _0x19ee7b += "<img src='" + urlLogo + "' width='120' height='60' alt='logo'/>";
                _0x19ee7b += "<h4 class='title-inv'>INVOICE</h4>";
                _0x19ee7b += "</div>";
                _0x19ee7b += "<div class='body-inv'>";
                _0x19ee7b += "<p><b>Tagihan Untuk</b></p>";
                _0x19ee7b += "<p><b>" + _0x1b6b1a + "</b></p>";
                _0x19ee7b += "<p>" + _0x5b56d3 + "</p>";
                if (_0x3527c6 != "-") {
                  _0x19ee7b += "<p>" + _0x3527c6 + "</p>";
                }
                _0x19ee7b += "<table class='table-identitas'>";
                _0x19ee7b += "<tbody>";
                _0x19ee7b += "<tr><td>No Invoice</td><td>: " + _0x234099 + "</td></tr>";
                _0x19ee7b += "<tr><td>Tanggal Order</td><td>: " + _0x4e2213 + "</td></tr>";
                _0x19ee7b += "<tr><td>Pembayaran</td><td>: " + _0x4170ff + "</td></tr>";
                if (_0x2aad9f != "-") {
                  _0x19ee7b += "<tr><td>Pengiriman</td><td>: " + _0x2aad9f + "</td></tr>";
                }
                _0x19ee7b += "</tbody>";
                _0x19ee7b += "</table>";
                _0x19ee7b += "<hr></hr>";
                _0x19ee7b += "<h3 class='title'>DETAIL ORDER</h3>";
                _0x19ee7b += "<hr></hr>";
                _0x19ee7b += "<table class='table-detail-produk'>";
                _0x19ee7b += "<thead><tr><th>No</th><th>Nama Produk</th><th>Detail</th><th>Qty</th><th>Harga</th><th>Total</th></tr></thead>";
                _0x19ee7b += "<tbody>";
                _0x19ee7b += renderProduk(_0x43b25e, _0x2c1cc5);
                _0x19ee7b += "</tbody>";
                _0x19ee7b += "</table>";
                _0x19ee7b += "<hr></hr>";
                _0x19ee7b += "<table class='table-total'>";
                _0x19ee7b += "<tbody>";
                if (_0x2aa5e0 != "-") {
                  _0x19ee7b += "<tr><td>Voucher</td><td>: " + _0x2aa5e0 + "</td></tr>";
                }
                _0x19ee7b += "<tr><th>Total Pembayaran</th><th>: " + angkaToRp(_0x126eee) + "</th></tr>";
                _0x19ee7b += "</tbody>";
                _0x19ee7b += "</table>";
                _0x19ee7b += "<div class='tgl-inv'><div></div><div>" + formatTanggal(new Date()) + "</div></div>";
                _0x19ee7b += "<div class='ttd-inv'><div class='border'></div><div class='border'></div></div>";
                _0x19ee7b += "</div>";
                _0x19ee7b += "</div>";
                _0x19ee7b += "</div>";
              } else {
                if (paramCetak == "label") {
                  var _0x2c1cc5 = '';
                  _0x19ee7b += "<style>#belibeli-halaman-kredit,#belibeli-icon-notifikasi,#belibeli-widget-button-mobile,#content-wrap-page h1,#footer-wrap,#header-belibeli-navkirikanan,#header-belibeli-utama,.belibeli-garis-bawah,a.belibeli-whatsapp-show-chat{display: none!important;}.dark .html-invoice{color:#444444;}</style>";
                  _0x19ee7b += "<div class='html-invoice'>";
                  _0x19ee7b += "<div class='detail-invoice'>";
                  _0x19ee7b += "<div class='top-button-inv' style='padding:0;margin-bottom:1.5rem'>";
                  _0x19ee7b += "<img src='" + urlLogo + "' width='120' height='60' alt='logo'/>";
                  _0x19ee7b += "<h4 class='title-inv'>No Invoice: " + _0x234099 + "</h4>";
                  _0x19ee7b += "</div>";
                  _0x19ee7b += "<div class='body-inv'>";
                  _0x19ee7b += "<p><b>Penerima :</b></p>";
                  _0x19ee7b += "<table class='table-identitas'>";
                  _0x19ee7b += "<tbody>";
                  _0x19ee7b += "<tr><td><svg viewBox='0 0 24 24' width='18' height='18'><path fill='currentColor' d='M12 3C14.21 3 16 4.79 16 7S14.21 11 12 11 8 9.21 8 7 9.79 3 12 3M16 13.54C16 14.6 15.72 17.07 13.81 19.83L13 15L13.94 13.12C13.32 13.05 12.67 13 12 13S10.68 13.05 10.06 13.12L11 15L10.19 19.83C8.28 17.07 8 14.6 8 13.54C5.61 14.24 4 15.5 4 17V21H20V17C20 15.5 18.4 14.24 16 13.54Z'></path></svg> <b>" + _0x1b6b1a + "</b></td></tr>";
                  _0x19ee7b += "<tr><td><svg viewBox='0 0 24 24' width='18' height='18'><path fill='currentColor' d='M16,15H8V5H16M16,1H8C6.89,1 6,1.89 6,3V17A2,2 0 0,0 8,19H16A2,2 0 0,0 18,17V3C18,1.89 17.1,1 16,1M8,23H16V21H8V23Z'></path></svg> " + _0x5b56d3 + "</td></tr>";
                  if (_0x3527c6 != "-") {
                    _0x19ee7b += "<tr><td><svg viewBox='0 0 24 24' width='18' height='18'><path fill='currentColor' d='M12,11.5A2.5,2.5 0 0,1 9.5,9A2.5,2.5 0 0,1 12,6.5A2.5,2.5 0 0,1 14.5,9A2.5,2.5 0 0,1 12,11.5M12,2A7,7 0 0,0 5,9C5,14.25 12,22 12,22C12,22 19,14.25 19,9A7,7 0 0,0 12,2Z'></path></svg> " + _0x3527c6 + "</td></tr>";
                  }
                  if (_0x2aad9f != "-") {
                    _0x19ee7b += "<tr><td><svg viewBox='0 0 24 24' width='18' height='18'><path fill='currentColor' d='M13 12.6L19 9.2V13C19.7 13 20.4 13.1 21 13.4V7.5C21 7.1 20.8 6.8 20.5 6.6L12.6 2.2C12.4 2.1 12.2 2 12 2S11.6 2.1 11.4 2.2L3.5 6.6C3.2 6.8 3 7.1 3 7.5V16.5C3 16.9 3.2 17.2 3.5 17.4L11.4 21.8C11.6 21.9 11.8 22 12 22S12.4 21.9 12.6 21.8L13.5 21.3C13.2 20.7 13.1 20 13 19.3M12 4.2L18 7.5L16 8.6L10.1 5.2L12 4.2M11 19.3L5 15.9V9.2L11 12.6V19.3M12 10.8L6 7.5L8 6.3L14 9.8L12 10.8M23 18V20H15V18H23Z'></path></svg> " + _0x2aad9f + "</td></tr>";
                  }
                  _0x19ee7b += "</tbody>";
                  _0x19ee7b += "</table>";
                  _0x19ee7b += "<p><b>Pengirim :</b></p>";
                  _0x19ee7b += "<table class='table-identitas'>";
                  _0x19ee7b += "<tbody>";
                  _0x19ee7b += "<tr><td><svg viewBox='0 0 24 24' width='18' height='18'><path fill='currentColor' d='M12 3C14.21 3 16 4.79 16 7S14.21 11 12 11 8 9.21 8 7 9.79 3 12 3M16 13.54C16 14.6 15.72 17.07 13.81 19.83L13 15L13.94 13.12C13.32 13.05 12.67 13 12 13S10.68 13.05 10.06 13.12L11 15L10.19 19.83C8.28 17.07 8 14.6 8 13.54C5.61 14.24 4 15.5 4 17V21H20V17C20 15.5 18.4 14.24 16 13.54Z'></path></svg> <b>" + $(".ouput-title").attr("data") + "</b></td></tr>";
                  _0x19ee7b += "<tr><td><svg viewBox='0 0 24 24' width='18' height='18'><path fill='currentColor' d='M16,15H8V5H16M16,1H8C6.89,1 6,1.89 6,3V17A2,2 0 0,0 8,19H16A2,2 0 0,0 18,17V3C18,1.89 17.1,1 16,1M8,23H16V21H8V23Z'></path></svg> " + nomorAdmin + "</td></tr>";
                  _0x19ee7b += "</tbody>";
                  _0x19ee7b += "</table>";
                  _0x19ee7b += "<hr></hr>";
                  _0x19ee7b += "<h3 class='title'>Item</h3>";
                  _0x19ee7b += "<table class='table-detail-produk'>";
                  _0x19ee7b += "<thead><tr><th>No</th><th>Nama Produk</th><th>Detail</th><th>Qty</th><th>Harga</th><th>Total</th></tr></thead>";
                  _0x19ee7b += "<tbody>";
                  _0x19ee7b += renderProduk(_0x43b25e, _0x2c1cc5);
                  _0x19ee7b += "</tbody>";
                  _0x19ee7b += "</table>";
                  _0x19ee7b += "</div>";
                  _0x19ee7b += "</div>";
                  _0x19ee7b += "</div>";
                }
              }
            }
          });
          if (paramCetak == null) {
            $("#html-invoice").html(_0x19ee7b);
          } else {
            if (paramCetak == "inv") {
              $("#html-invoice").html(_0x19ee7b);
              $(document).ready(function () {
                window.print();
              });
            } else if (paramCetak == "label") {
              $("#html-invoice").html(_0x19ee7b);
              $(document).ready(function () {
                window.print();
              });
            }
          }
        });
      }
    } else {
      window.location.href = urlProfile;
    }
  });
}
function textEditor() {
  tinymce.init({
    "selector": "textarea#full-featured",
    "mobile": {
      "theme": "silver"
    },
    "plugins": "print prev" + _0x5378("0x241e549375", "%U#@") + _0x5378("0x2062549375", "[]KN") + "searchrepl" + "ace autoli" + "nk autosav" + _0x5378("0x3e0549375", "QZlP") + _0x5378("0xf59549375", "OZmz") + "y code vis" + "ualblocks " + "visualchar" + "s fullscre" + "en image l" + "ink media " + "template c" + "odesample " + "table char" + "map hr pag" + "ebreak non" + _0x5378("0x28e6549375", "QZlP") + "nchor toc " + "insertdate" + "time advli" + "st lists w" + "ordcount i" + "magetools " + "textpatter" + "n nonedita" + "ble charma" + "p quickbar" + "s emoticon" + "s",
    "imagetools_cors_hosts": ["picsum.photos"],
    "menubar": "file edit view insert format t" + _0x5378("0x1e3e549375", "#b[]"),
    "toolbar": "undo redo bold italic underlin" + _0x5378("0x432549375", "fRDt") + "rough font" + "select fon" + "tsizeselec" + "t formatse" + "lect align" + "left align" + "center ali" + "gnright al" + "ignjustify" + " outdent i" + "ndent  num" + _0x5378("0xe25549375", "QZlP") + "st forecol" + "or backcol" + "or removef" + "ormat tabl" + "e image co" + "de media c" + _0x5378("0xb7a549375", "!#!f") + _0x5378("0x1521549375", "an)$") + "lscreen  p" + _0x5378("0x327549375", "BcP5") + "nt insertf" + "ile templa" + "te link an" + "chor codes" + _0x5378("0xbfb549375", "irqu") + "rtl pagebr" + "eak",
    "toolbar_sticky": true,
    "autosave_ask_before_unload": true,
    "autosave_interval": "30s",
    "autosave_prefix": "{path}{query}-{id}-",
    "autosave_restore_when_empty": false,
    "autosave_retention": "2m",
    "image_advtab": true,
    "importcss_append": true,
    "file_picker_callback": function (_0x115f7d, _0x4045e5, _0x574c25) {
      if (_0x574c25.filetype === "file") {
        _0x115f7d("https://www.google.com/logos/google.jpg", {
          "text": "My text"
        });
      }
      if (_0x574c25.filetype === "image") {
        _0x115f7d("https://www.google.com/logos/google.jpg", {
          "alt": "My alt text"
        });
      }
      if (_0x574c25.filetype === "media") {
        _0x115f7d("movie.mp4", {
          "source2": "alt.ogg",
          "poster": "https://www.google.com/logos/google.jpg"
        });
      }
    },
    "setup": function (_0x12471b) {
      var _0x4d32a3 = document.querySelector(".output > textarea");
      _0x12471b.on("NodeChange", function (_0x1fcc1e) {
        _0x4d32a3.innerHTML = _0x12471b.getContent().replace();
      });
    },
    "templates": [{
      "title": "New Table",
      "description": "creates a new table",
      "content": _0x5378("0xf54549375", "irqu") + _0x5378("0x2250549375", "3a1@") + "><table wi" + "dth=\"98%%\"" + _0x5378("0xc06549375", "#pNe") + "0\" cellspa" + "cing=\"0\" c" + "ellpadding" + _0x5378("0x2101549375", "hI0%") + "th scope=\"" + _0x5378("0x2365549375", "cw1A") + "><th scope" + "=\"col\"> </" + _0x5378("0x1320549375", "4bEN") + "r><td> </t" + "d><td> </t" + "d></tr></t" + "able></div" + ">"
    }, {
      "title": _0x5378("0x673549375", "[hmp") + "y story",
      "description": "A cure for writers block",
      "content": "Once upon a time..."
    }, {
      "title": "New list w" + _0x5378("0x368549375", "N4BJ"),
      "description": "New List with dates",
      "content": "<div class=\"mceTmpl\"><span class=\"cdate\">cdate</span><br /><span class=\"mdate\">mdate</span><h2>My Li" + _0x5378("0xd0a549375", "3a1@") + "><li></li>" + "<li></li><" + "/ul></div>"
    }],
    "template_cdate_format": _0x5378("0x1515549375", "%U#@") + "ted (CDATE" + "): %m/%d/%" + _0x5378("0x1e1c549375", "dgE8") + "%S]",
    "template_mdate_format": _0x5378("0x195f549375", "H1*B") + _0x5378("0x177b549375", "&ihF") + "E): %m/%d/" + "%Y : %H:%M" + ":%S]",
    "height": 0x15e,
    "image_caption": true,
    "quickbars_selection_toolbar": "bold italic underline | align quicklink h2 h3 blockquote quickimage table",
    "quickbars_image_toolbar": "alignleft " + _0x5378("0xb61549375", "vaKW") + "r alignrig" + "ht | rotat" + "eleft rota" + "teright | " + "imageoptio" + "ns",
    "quickbars_insert_toolbar": "imageoptions table | emoticons",
    "noneditable_noneditable_class": "mceNonEditable",
    "toolbar_mode": "sliding",
    "contextmenu": "link image imagetool" + _0x5378("0x1603549375", "[]KN")
  });
}
function setuploadproduk() {
  $("#html-upload-produk").html("  <div class='html-upload-produk'>    <div class='form-upload-produk'>      <div class='box-form-two'>        <div class='datainput'>          <label for='namaproduk'>Nama Produk</label>          <input id='namaproduk' name='namaproduk' type='text'/>        </div>        <div class='datainput'>          <label for='jenisproduk'>Jenis Produk</label>          <select id='jenisproduk' name='jenisproduk'>            <option value='fisik'>Fisik</option>            <option value='digital'>Digital</option>          </select>        </div>      </div>      <div class='box-form-two'>        <div class='datainput'>          <label for='harganormal'>Harga Normal</label>          <input id='harganormal' name='harganormal' type='number'/>        </div>        <div class='datainput'>          <label for='diskonproduk'>Diskon (%/Rp)</label>          <input id='diskonproduk' name='diskonproduk' type='number'/>        </div>      </div>      <div class='box-form-two'>        <div class='datainput'>          <label for='nimimalproduk'>Minimal Pembelian</label>          <input id='nimimalproduk' name='nimimalproduk' type='number'/>        </div>        <div class='datainput'>          <label for='produkbanner'>Produk Khusus Banner</label>          <select id='produkbanner' name='produkbanner'>            <option value='off'>Tidak</option>            <option value='on'>Ya</option>          </select>        </div>      </div>      <div class='datainput'>        <label for='keteranganproduk'>Keterangan Produk</label>        <textarea id='keteranganproduk' name='keteranganproduk'></textarea>      </div>      <div class='datainput'>        <label for='tambah-foto'>Upload Foto Produk</label>        <input class='tambah-data' name='tambah-foto' id='tambah-foto' type='file' accept='image/*' multiple=''/>        <span>Klik pada <b>Gambar</b> untuk menghapus foto produk</span>        <div class='hasil-foto' id='hasil-foto'></div>      </div>      <div class='datainput'>        <input name='statusproduk' id='statusproduk' type='checkbox'/>        <label class='checkbox' for='statusproduk'>Tambah Status Produk</label>      </div>      <div class='show-hide-input show-hide-status'>        <div class='box-status'>          <div class='datainput input-status form-option'>            <input class='inputstatus' placeholder='Contoh: Terlaris' type='text'/>          </div>        </div>        <button class='tambah-data' id='tambah-status'>+tambah status</button>      </div>      <div class='datainput'>        <input name='pilihanprodukutama' id='pilihanprodukutama' type='checkbox'/>        <label class='checkbox' for='pilihanprodukutama'>Pilihan Produk 1 (Tambah Harga)</label>      </div>      <div class='show-hide-input show-hide-pilihanutama'>        <div class='box-pilihanutama'>          <div class='datainput input-pilihanutama'>            <label for='title-pilihanutama'>Title Pilihan</label>            <div class='form-option'>              <input id='title-inputpilihanutama' placeholder='Contoh: Ukuran' type='text'/>            </div>          </div>          <div class='datainput'>            <label for='title-pilihanutama'>Detail Opsi</label>          </div>          <div class='datainput input-pilihanutama form-option'>            <input class='opsi-pilihanutama' placeholder='Contoh: L' type='text'/>            <input class='harga-pilihanutama' placeholder='Contoh: 5000' type='number'/>          </div>        </div>        <button class='tambah-data' id='tambah-pilihanutama'>+tambah pilihan</button>      </div>      <div class='datainput'>        <input name='pilihanprodukutama-2' id='pilihanprodukutama-2' type='checkbox'/>        <label class='checkbox' for='pilihanprodukutama-2'>Pilihan Produk 2 (Tambah Harga)</label>      </div>      <div class='show-hide-input show-hide-pilihanutama-2'>        <div class='box-pilihanutama-2'>          <div class='datainput input-pilihanutama-2'>            <label for='title-pilihanutama-2'>Title Pilihan</label>            <div class='form-option'>              <input id='title-inputpilihanutama-2' placeholder='Contoh: Ukuran' type='text'/>            </div>          </div>          <div class='datainput'>            <label for='title-pilihanutama-2'>Detail Opsi</label>          </div>          <div class='datainput input-pilihanutama-2 form-option'>            <input class='opsi-pilihanutama-2' placeholder='Contoh: L' type='text'/>            <input class='harga-pilihanutama-2' placeholder='Contoh: 5000' type='number'/>          </div>        </div>        <button class='tambah-data' id='tambah-pilihanutama-2'>+tambah pilihan</button>      </div>      <div class='datainput'>        <input name='pilihanprodukutama-3' id='pilihanprodukutama-3' type='checkbox'/>        <label class='checkbox' for='pilihanprodukutama-3'>Pilihan Produk 3 (Tambah Harga)</label>      </div>      <div class='show-hide-input show-hide-pilihanutama-3'>        <div class='box-pilihanutama-3'>          <div class='datainput input-pilihanutama-3'>            <label for='title-pilihanutama-3'>Title Pilihan</label>            <div class='form-option'>              <input id='title-inputpilihanutama-3' placeholder='Contoh: Ukuran' type='text'/>            </div>          </div>          <div class='datainput'>            <label for='title-pilihanutama-3'>Detail Opsi</label>          </div>          <div class='datainput input-pilihanutama-3 form-option'>            <input class='opsi-pilihanutama-3' placeholder='Contoh: L' type='text'/>            <input class='harga-pilihanutama-3' placeholder='Contoh: 5000' type='number'/>          </div>        </div>        <button class='tambah-data' id='tambah-pilihanutama-3'>+tambah pilihan</button>      </div>      <div class='datainput'>        <input name='pilihanprodukutama-4' id='pilihanprodukutama-4' type='checkbox'/>        <label class='checkbox' for='pilihanprodukutama-4'>Pilihan Produk 4 (Tambah Harga)</label>      </div>      <div class='show-hide-input show-hide-pilihanutama-4'>        <div class='box-pilihanutama-4'>          <div class='datainput input-pilihanutama-4'>            <label for='title-pilihanutama-4'>Title Pilihan</label>            <div class='form-option'>              <input id='title-inputpilihanutama-4' placeholder='Contoh: Ukuran' type='text'/>            </div>          </div>          <div class='datainput'>            <label for='title-pilihanutama-4'>Detail Opsi</label>          </div>          <div class='datainput input-pilihanutama-4 form-option'>            <input class='opsi-pilihanutama-4' placeholder='Contoh: L' type='text'/>            <input class='harga-pilihanutama-4' placeholder='Contoh: 5000' type='number'/>          </div>        </div>        <button class='tambah-data' id='tambah-pilihanutama-4'>+tambah pilihan</button>      </div>      <div class='datainput'>        <input name='voucherproduk' id='voucherproduk' type='checkbox'/>        <label class='checkbox' for='voucherproduk'>Tambah Voucher</label>      </div>      <div class='show-hide-input show-hide-voucher'>        <div class='datainput input-voucher'>          <input id='inputvoucher' placeholder='Format (kodvoucher:harga) contoh: simplebli:4000' type='text'/>          <span>Format (kodvoucher:harga) contoh: simplebli:4000</span>        </div>      </div>      <div class='datainput'>        <input name='videoproduk' id='videoproduk' type='checkbox'/>        <label class='checkbox' for='videoproduk'>Tambah Video Produk</label>      </div>      <div class='show-hide-input show-hide-video'>        <div class='datainput input-video'>          <input id='inputvideo' placeholder='ID Youtube (wajib)' type='text'/>          <span>Contoh https://www.youtube.com/watch?v=Nq4Mh_jTubA ambil bagian <b>Nq4Mh_jTubA</b></span>        </div>      </div>      <div class='datainput'>        <input name='linkproduk' id='linkproduk' type='checkbox'/>        <label class='checkbox' for='linkproduk'>Gunakan Order Khusus</label>      </div>      <div class='show-hide-input show-hide-link'>        <div class='datainput input-link'>          <input id='inputlink' placeholder='https://...' type='text'/>        </div>      </div>      <div class='form-deskripsi'>        <label for='deskripsiproduk'>Deskripsi Produk</label>        <textarea id='full-featured'> </textarea>        <div class='output'>           <textarea for='deskripsiproduk' id='deskripsiproduk' style='display:none'></textarea>        </div>      </div>      <button class='button-submit' id='generate-produk'>Generate Produk</button>      <div class='form-submit' style='display:none'>        <button class='tombol-generate' id='copy-produk'>Copy HTML Produk</button><button class='tombol-gmail' id='upload-gmail'>Upload Otomatis</button>      </div>        <div class='datainput'>           <textarea id='outputproduk' style='display:none'></textarea>        </div>        <div class='datainput'>           <textarea id='jsonproduk' style='display:none'></textarea>        </div>    </div>  </div>   ");
  $("#tambah-foto").change(function () {
    uploadFoto();
    return false;
  });
  $("#statusproduk").change(function () {
    if (this.checked == true) {
      $(".show-hide-status").slideDown();
    } else {
      $(".show-hide-status").slideUp();
    }
  });
  $("#pilihanprodukutama").change(function () {
    if (this.checked == true) {
      $(".show-hide-pilihanutama").slideDown();
    } else {
      $(".show-hide-pilihanutama").slideUp();
    }
  });
  $("#pilihanprodukutama-2").change(function () {
    if (this.checked == true) {
      $(".show-hide-pilihanutama-2").slideDown();
    } else {
      $(".show-hide-pilihanutama-2").slideUp();
    }
  });
  $("#pilihanprodukutama-3").change(function () {
    if (this.checked == true) {
      $(".show-hide-pilihanutama-3").slideDown();
    } else {
      $(".show-hide-pilihanutama-3").slideUp();
    }
  });
  $("#pilihanprodukutama-4").change(function () {
    if (this.checked == true) {
      $(".show-hide-pilihanutama-4").slideDown();
    } else {
      $(".show-hide-pilihanutama-4").slideUp();
    }
  });
  $("#voucherproduk").change(function () {
    if (this.checked == true) {
      $(".show-hide-voucher").slideDown();
    } else {
      $(".show-hide-voucher").slideUp();
    }
  });
  $("#videoproduk").change(function () {
    if (this.checked == true) {
      $(".show-hide-video").slideDown();
    } else {
      $(".show-hide-video").slideUp();
    }
  });
  $("#linkproduk").change(function () {
    if (this.checked == true) {
      $(".show-hide-link").slideDown();
    } else {
      $(".show-hide-link").slideUp();
    }
  });
  $("#tambah-status").click(function () {
    $(".show-hide-status .box-status").append("<div class='datainput input-status form-option'>            <input class='inputstatus' placeholder='Contoh: Terlaris' type='text'/>            <button role='button' class='delete-icon'><svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'><path d='M19,4H15.5L14.5,3H9.5L8.5,4H5V6H19M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19Z'/></svg></button>          </div>    ");
    $(".show-hide-status .delete-icon").each(function () {
      $(this).click(function () {
        $(this).parents(".input-status").remove();
        return false;
      });
    });
  });
  $("#tambah-pilihanutama").click(function () {
    $(".show-hide-pilihanutama .box-pilihanutama").append("<div class='datainput input-pilihanutama form-option'>            <input class='opsi-pilihanutama' placeholder='Contoh: L' type='text'/>            <input class='harga-pilihanutama' placeholder='Contoh: 5000' type='number'/>            <button role='button' class='delete-icon'><svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'><path d='M19,4H15.5L14.5,3H9.5L8.5,4H5V6H19M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19Z'/></svg></button>          </div>        </div>    ");
    $(".show-hide-pilihanutama .delete-icon").each(function () {
      $(this).click(function () {
        $(this).parents(".input-pilihanutama").remove();
        return false;
      });
    });
  });
  $("#tambah-pilihanutama-2").click(function () {
    $(".show-hide-pilihanutama-2 .box-pilihanutama-2").append("<div class='datainput input-pilihanutama-2 form-option'>            <input class='opsi-pilihanutama-2' placeholder='Contoh: L' type='text'/>            <input class='harga-pilihanutama-2' placeholder='Contoh: 5000' type='number'/>            <button role='button' class='delete-icon'><svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'><path d='M19,4H15.5L14.5,3H9.5L8.5,4H5V6H19M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19Z'/></svg></button>          </div>        </div>    ");
    $(".show-hide-pilihanutama-2 .delete-icon").each(function () {
      $(this).click(function () {
        $(this).parents(".input-pilihanutama-2").remove();
        return false;
      });
    });
  });
  $("#tambah-pilihanutama-3").click(function () {
    $(".show-hide-pilihanutama-3 .box-pilihanutama-3").append("<div class='datainput input-pilihanutama-3 form-option'>            <input class='opsi-pilihanutama-3' placeholder='Contoh: L' type='text'/>            <input class='harga-pilihanutama-3' placeholder='Contoh: 5000' type='number'/>            <button role='button' class='delete-icon'><svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'><path d='M19,4H15.5L14.5,3H9.5L8.5,4H5V6H19M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19Z'/></svg></button>          </div>        </div>    ");
    $(".show-hide-pilihanutama-3 .delete-icon").each(function () {
      $(this).click(function () {
        $(this).parents(".input-pilihanutama-3").remove();
        return false;
      });
    });
  });
  $("#tambah-pilihanutama-4").click(function () {
    $(".show-hide-pilihanutama-4 .box-pilihanutama-4").append("<div class='datainput input-pilihanutama-4 form-option'>            <input class='opsi-pilihanutama-4' placeholder='Contoh: L' type='text'/>            <input class='harga-pilihanutama-4' placeholder='Contoh: 5000' type='number'/>            <button role='button' class='delete-icon'><svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'><path d='M19,4H15.5L14.5,3H9.5L8.5,4H5V6H19M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19Z'/></svg></button>          </div>        </div>    ");
    $(".show-hide-pilihanutama-4 .delete-icon").each(function () {
      $(this).click(function () {
        $(this).parents(".input-pilihanutama-4").remove();
        return false;
      });
    });
  });
  var _0x56d865 = document.querySelector("#deskripsiproduk");
  if (_0x56d865) {
    textEditor();
  }
  $("#generate-produk").click(function () {
    var _0x6bd6f9 = $("#namaproduk").val();
    var _0xae87ca = $("#harganormal").val();
    var _0x242e8a = $("#diskonproduk").val();
    var _0x351d8f = $("#nimimalproduk").val();
    var _0x7eb870 = $("#keteranganproduk").val();
    var _0x21e9d4 = $("#hasil-foto img").length;
    if (_0x6bd6f9 == '') {
      notification("<div class='peringatan gagal'><svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'><path d='M11,15H13V17H11V15M11,7H13V13H11V7M12,2C6.47,2 2,6.5 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20Z' /></svg></div>Nama produk diperlukan");
      return false;
    } else {
      if (_0xae87ca == '') {
        notification("<div class='peringatan gagal'><svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'><path d='M11,15H13V17H11V15M11,7H13V13H11V7M12,2C6.47,2 2,6.5 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20Z' /></svg></div>Harga normal diperlukan");
        return false;
      } else {
        if (_0x242e8a == '') {
          notification("<div class='peringatan gagal'><svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'><path d='M11,15H13V17H11V15M11,7H13V13H11V7M12,2C6.47,2 2,6.5 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20Z' /></svg></div>Diskon diperlukan, isi angka <b>0</b> bila tidak ada diskon");
          return false;
        } else {
          if (_0x351d8f == '') {
            notification("<div class='peringatan gagal'><svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'><path d='M11,15H13V17H11V15M11,7H13V13H11V7M12,2C6.47,2 2,6.5 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20Z' /></svg></div>Jumlah minimal pembelian diperlukan, isi angka <b>1</b> bila tidak ada minimal pembelian");
            return false;
          } else {
            if (_0x7eb870 == '') {
              notification("<div class='peringatan gagal'><svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'><path d='M11,15H13V17H11V15M11,7H13V13H11V7M12,2C6.47,2 2,6.5 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20Z' /></svg></div>Keterangan produk diperlukan");
              return false;
            } else {
              if (_0x21e9d4 == 0x0) {
                notification("<div class='peringatan gagal'><svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'><path d='M11,15H13V17H11V15M11,7H13V13H11V7M12,2C6.47,2 2,6.5 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20Z' /></svg></div>Wajib menampilkan minimal 1 foto produk");
                return false;
              } else {
                var _0x1f837d = $("#statusproduk:checked").val();
                var _0xfe484e = $("#pilihanprodukutama:checked").val();
                var _0x42eb34 = $("#pilihanprodukutama-2:checked").val();
                var _0x3bd191 = $("#pilihanprodukutama-3:checked").val();
                var _0x40f904 = $("#pilihanprodukutama-4:checked").val();
                var _0x1eb564 = $("#voucherproduk:checked").val();
                var _0x441ca0 = $("#videoproduk:checked").val();
                var _0x43fd39 = $("#linkproduk:checked").val();
                if (_0x1f837d == "on") {
                  var _0x4866bd = '';
                  $(".inputstatus").each(function () {
                    var _0x22c413 = $(this).val();
                    if (_0x22c413 != '') {
                      _0x4866bd += _0x22c413 + ", ";
                    }
                  });
                  var _0x21c1b0 = _0x4866bd.slice(0x0, -0x2);
                  if (_0x21c1b0 == '') {
                    var _0x555420 = "on";
                  } else {
                    var _0x555420 = _0x21c1b0;
                  }
                } else {
                  var _0x555420 = "on";
                }
                if (_0xfe484e == "on") {
                  var _0x4866bd = '';
                  $(".input-pilihanutama").each(function () {
                    var _0x4a2e1e = $(this).find(".opsi-pilihanutama").val();
                    var _0x3662da = $(this).find(".harga-pilihanutama").val();
                    if (_0x4a2e1e && _0x3662da) {
                      _0x4866bd += _0x4a2e1e + ":" + _0x3662da + ", ";
                    }
                  });
                  if ($("#title-inputpilihanutama").val() == '') {
                    var _0x3c00b5 = "Title Pilihan 1";
                  } else {
                    var _0x3c00b5 = $("#title-inputpilihanutama").val();
                  }
                  if (_0x4866bd == '') {
                    var _0x2a5b46 = "off";
                  } else {
                    var _0x2a5b46 = _0x4866bd.slice(0x0, -0x2);
                  }
                } else {
                  var _0x3c00b5 = "Title Pilihan 1";
                  var _0x2a5b46 = "off";
                }
                if (_0x42eb34 == "on") {
                  var _0x4866bd = '';
                  $(".input-pilihanutama-2").each(function () {
                    var _0x1725d1 = $(this).find(".opsi-pilihanutama-2").val();
                    var _0x2beab5 = $(this).find(".harga-pilihanutama-2").val();
                    if (_0x1725d1 && _0x2beab5) {
                      _0x4866bd += _0x1725d1 + ":" + _0x2beab5 + ", ";
                    }
                  });
                  if ($("#title-inputpilihanutama-2").val() == '') {
                    var _0x5a4b27 = "Title Pilihan 2";
                  } else {
                    var _0x5a4b27 = $("#title-inputpilihanutama-2").val();
                  }
                  if (_0x4866bd == '') {
                    var _0x1c52ea = "off";
                  } else {
                    var _0x1c52ea = _0x4866bd.slice(0x0, -0x2);
                  }
                } else {
                  var _0x5a4b27 = "Title Pilihan 2";
                  var _0x1c52ea = "off";
                }
                if (_0x3bd191 == "on") {
                  var _0x4866bd = '';
                  $(".input-pilihanutama-3").each(function () {
                    var _0x91ce86 = $(this).find(".opsi-pilihanutama-3").val();
                    var _0x259360 = $(this).find(".harga-pilihanutama-3").val();
                    if (_0x91ce86 && _0x259360) {
                      _0x4866bd += _0x91ce86 + ":" + _0x259360 + ", ";
                    }
                  });
                  if ($("#title-inputpilihanutama-3").val() == '') {
                    var _0x5144ad = "Title Pilihan 3";
                  } else {
                    var _0x5144ad = $("#title-inputpilihanutama-3").val();
                  }
                  if (_0x4866bd == '') {
                    var _0x320a5e = "off";
                  } else {
                    var _0x320a5e = _0x4866bd.slice(0x0, -0x2);
                  }
                } else {
                  var _0x5144ad = "Title Pilihan 3";
                  var _0x320a5e = "off";
                }
                if (_0x40f904 == "on") {
                  var _0x4866bd = '';
                  $(".input-pilihanutama-4").each(function () {
                    var _0x38ca3c = $(this).find(".opsi-pilihanutama-4").val();
                    var _0xaba0ee = $(this).find(".harga-pilihanutama-4").val();
                    if (_0x38ca3c && _0xaba0ee) {
                      _0x4866bd += _0x38ca3c + ":" + _0xaba0ee + ", ";
                    }
                  });
                  if ($("#title-inputpilihanutama-4").val() == '') {
                    var _0x510609 = "Title Pilihan 4";
                  } else {
                    var _0x510609 = $("#title-inputpilihanutama-4").val();
                  }
                  if (_0x4866bd == '') {
                    var _0x1e3613 = "off";
                  } else {
                    var _0x1e3613 = _0x4866bd.slice(0x0, -0x2);
                  }
                } else {
                  var _0x510609 = "Title Pilihan 4";
                  var _0x1e3613 = "off";
                }
                if (_0x1eb564 == "on") {
                  var _0x4866bd = $("#inputvoucher").val();
                  if (_0x4866bd == '') {
                    var _0x377384 = "off";
                  } else {
                    var _0x377384 = _0x4866bd;
                  }
                } else {
                  var _0x377384 = "off";
                }
                if (_0x441ca0 == "on") {
                  var _0x4866bd = $("#inputvideo").val();
                  if (_0x4866bd == '') {
                    var _0xcd46c2 = "off";
                  } else {
                    var _0xcd46c2 = _0x4866bd;
                  }
                } else {
                  var _0xcd46c2 = "off";
                }
                if (_0x43fd39 == "on") {
                  var _0x4866bd = $("#inputlink").val();
                  if (_0x4866bd == '') {
                    var _0x3cd998 = "off";
                  } else {
                    var _0x3cd998 = _0x4866bd;
                  }
                } else {
                  var _0x3cd998 = "off";
                }
                var _0x46e355 = $("#hasil-foto").html();
                var _0x5b8194 = $("#jenisproduk :selected").val();
                var _0x1857c0 = $("#produkbanner :selected").val();
                var _0x255fd3 = $("#deskripsiproduk").val();
                var _0x1c6303 = "{\"produkbanner\": \"" + _0x1857c0 + "\", \"status\": \"" + _0x555420 + "\", \"nama\": \"" + _0x6bd6f9 + "\", \"harga\": \"" + _0xae87ca + "\", \"diskon\": \"" + _0x242e8a + "\", \"title1\": \"" + _0x3c00b5 + "\", \"title2\": \"" + _0x5a4b27 + "\", \"title3\": \"" + _0x5144ad + "\", \"title4\": \"" + _0x510609 + "\", \"varian1\": \"" + _0x2a5b46 + "\", \"varian2\": \"" + _0x1c52ea + "\", \"varian3\": \"" + _0x320a5e + "\", \"varian4\": \"" + _0x1e3613 + "\", \"minimal\": \"" + _0x351d8f + "\", \"voucher\": \"" + _0x377384 + "\", \"video\": \"" + _0xcd46c2 + "\", \"jenis\": \"" + _0x5b8194 + "\", \"keterangan\": \"" + _0x7eb870 + "\", \"link\": \"" + _0x3cd998 + "\"}";
                var _0x26b7fe = "<table class=\"data-utama hapus\" style=\"border-collapse: collapse; font-family: Roboto, sans-serif; text-align: center; width: 100%;\">  <tbody>    <tr>      <td colspan=\"2\" style=\"background: rgb(93, 71, 221); border: 1px solid rgb(221, 221, 221); color: white; padding: 15px;\"><b>Data Produk</b></td>    </tr>    <tr>      <td style=\"border: 1px solid rgb(221, 221, 221); color: #5d47dd; padding: 15px;\"><b>Khusus Banner (on/off)</b></td>      <td class=\"data-banner\" style=\"border: 1px solid rgb(221, 221, 221); padding: 15px;\">" + _0x1857c0 + "</td>    </tr>    <tr>      <td style=\"border: 1px solid rgb(221, 221, 221); color: #5d47dd; padding: 15px;\"><b>Status (on/off)</b></td>      <td class=\"data-status\" style=\"border: 1px solid rgb(221, 221, 221); padding: 15px;\">" + _0x555420 + "</td>    </tr>    <tr>      <td style=\"border: 1px solid rgb(221, 221, 221); color: #5d47dd; padding: 15px;\"><b>Harga (Rp)</b></td>      <td class=\"data-harga\" style=\"border: 1px solid rgb(221, 221, 221); padding: 15px;\">" + _0xae87ca + "</td>    </tr>    <tr>      <td style=\"border: 1px solid rgb(221, 221, 221); color: #5d47dd; padding: 15px;\"><b>Diskon (% / Rp)</b></td>      <td class=\"data-diskon\" style=\"border: 1px solid rgb(221, 221, 221); padding: 15px;\">" + _0x242e8a + "</td>    </tr>  </tbody></table><table class=\"data-image hapus\" style=\"border-collapse: collapse; font-family: Roboto, sans-serif; margin: 20px 0px; padding: 0px; text-align: center; width: 100%;\">  <tbody>    <tr>      <td style=\"background: rgb(93, 71, 221); border: 1px solid rgb(221, 221, 221); color: white; padding: 15px;\"><b>Foto Produk</b></td>    </tr>    <tr>      <td class=\"cover\" style=\"border: 1px solid rgb(221, 221, 221); padding: 15px;\">" + _0x46e355 + "</td>    </tr>  </tbody></table><!--more--><table class=\"data-lainnya hapus\" style=\"border-collapse: collapse; font-family: Roboto, sans-serif; margin: 20px 0px; padding: 0px; text-align: center; width: 100%;\">  <tbody>    <tr>      <td colspan=\"2\" style=\"background: rgb(93, 71, 221); border: 1px solid rgb(221, 221, 221); color: white; padding: 15px;\"><b>Data Lainnya</b></td>    </tr>    <tr>      <td class=\"title-pilihan-satu\" style=\"border: 1px solid rgb(221, 221, 221); color: #5d47dd; padding: 15px;\"><b>" + _0x3c00b5 + "</b></td>      <td class=\"data-pilihan-satu\" style=\"border: 1px solid rgb(221, 221, 221); padding: 15px;\">" + _0x2a5b46 + "</td>    </tr>    <tr>      <td class=\"title-pilihan-dua\" style=\"border: 1px solid rgb(221, 221, 221); color: #5d47dd; padding: 15px;\"><b>" + _0x5a4b27 + "</b></td>      <td class=\"data-pilihan-dua\" style=\"border: 1px solid rgb(221, 221, 221); padding: 15px;\">" + _0x1c52ea + "</td>    </tr>    <tr>      <td class=\"title-pilihan-tiga\" style=\"border: 1px solid rgb(221, 221, 221); color: #5d47dd; padding: 15px;\"><b>" + _0x5144ad + "</b></td>      <td class=\"data-pilihan-tiga\" style=\"border: 1px solid rgb(221, 221, 221); padding: 15px;\">" + _0x320a5e + "</td>    </tr>    <tr>      <td class=\"title-pilihan-empat\" style=\"border: 1px solid rgb(221, 221, 221); color: #5d47dd; padding: 15px;\"><b>" + _0x510609 + "</b></td>      <td class=\"data-pilihan-empat\" style=\"border: 1px solid rgb(221, 221, 221); padding: 15px;\">" + _0x1e3613 + "</td>    </tr>    <tr>      <td style=\"border: 1px solid rgb(221, 221, 221); color: #5d47dd; padding: 15px;\"><b>Minimal Pembelian</b></td>      <td class=\"data-jumlah\" style=\"border: 1px solid rgb(221, 221, 221); padding: 15px;\">" + _0x351d8f + "</td>    </tr>    <tr>      <td style=\"border: 1px solid rgb(221, 221, 221); color: #5d47dd; padding: 15px;\"><b>Voucher (off)</b></td>      <td class=\"data-voucher\" style=\"border: 1px solid rgb(221, 221, 221); padding: 15px;\">" + _0x377384 + "</td>    </tr>    <tr>      <td style=\"border: 1px solid rgb(221, 221, 221); color: #5d47dd; padding: 15px;\"><b>ID Youtube (off)</b></td>      <td class=\"data-youtube\" style=\"border: 1px solid rgb(221, 221, 221); padding: 15px;\">" + _0xcd46c2 + "</td>    </tr>    <tr>      <td style=\"border: 1px solid rgb(221, 221, 221); color: #5d47dd; padding: 15px;\"><b>Jenis Produk (Digital/Fisik)</b></td>      <td class=\"data-jenis-produk\" style=\"border: 1px solid rgb(221, 221, 221); padding: 15px;\">" + _0x5b8194 + "</td>    </tr>    <tr>      <td style=\"border: 1px solid rgb(221, 221, 221); color: #5d47dd; padding: 15px;\"><b>Keterangan Produk</b></td>      <td class=\"data-keterangan-produk\" style=\"border: 1px solid rgb(221, 221, 221); padding: 15px;\">" + _0x7eb870 + "</td>    </tr>    <tr>      <td style=\"border: 1px solid rgb(221, 221, 221); color: #5d47dd; padding: 15px;\"><b>Link Order Khusus (off)</b></td>      <td class=\"data-link-produk\" style=\"border: 1px solid rgb(221, 221, 221); padding: 15px;\">" + _0x3cd998 + "</td>    </tr>  </tbody></table><div>" + _0x255fd3 + "</div>   ";
                $("#outputproduk").val(_0x26b7fe);
                $("#jsonproduk").val(_0x1c6303);
                $(".form-submit").show();
                return false;
              }
            }
          }
        }
      }
    }
  });
  $("#copy-produk").click(function () {
    notification("<div class='peringatan gagal'><svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'><path d='M11,15H13V17H11V15M11,7H13V13H11V7M12,2C6.47,2 2,6.5 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20Z' /></svg></div>Proses copy kode");
    setTimeout(function () {
      var _0x5ae292 = $(_0x5378(30535443, ")SjY") + "duk").val();
      var _0x273e3a = $("<input>");
      $("body").append(_0x273e3a);
      _0x273e3a[_0x5378(39264019, "[TlR")](_0x5ae292).select();
      document.execCommand("copy");
      _0x273e3a.remove();
      notification("<div class='peringatan sukses'><svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'><path d='M12 2C6.5 2 2 6.5 2 12S6.5 22 12 22 22 17.5 22 12 17.5 2 12 2M12 20C7.59 20 4 16.41 4 12S7.59 4 12 4 20 7.59 20 12 16.41 20 12 20M16.59 7.58L10 14.17L7.41 11.59L6 13L10 17L18 9L16.59 7.58Z' /></svg></div>Kode berhasil dicopy");
    }, 0xbb8);
    return false;
  });
  $("#upload-gmail").click(function () {
    var _0x3a6524 = formuploadproduk + "/formResponse?";
    var _0x2b3d83 = $("#jsonproduk")[_0x5378("0x2ad739117375", "atxO")]();
    var _0x48825c = $("#hasil-foto").html();
    var _0x54ee46 = $("#deskripsiproduk").val();
    kirimuploadProduk(_0x3a6524, _0x2b3d83, _0x48825c, _0x54ee46);
    return false;
  });
}
if (optionlogin == "on") {
  firebase.auth().onAuthStateChanged(_0x605219 => {
    console[_0x5378(13676622, "an)$")](_0x605219);
    if (_0x605219) {
      var _0x3d3eee = _0x605219.uid;
      var _0x6883dd = _0x605219.displayName;
      var _0x1aae29 = _0x605219[_0x5378(43114574, "[]KN")];
      var _0x2b64f6 = _0x605219.photoURL;
      var _0x344da5 = _0x605219.emailVerified;
      checkVerifikasi(_0x344da5, _0x6883dd, _0x1aae29, _0x2b64f6);
      $(".view-cart").click(function () {
        beforeCheckout(_0x605219, _0x3d3eee);
        return false;
      });
      var _0x434b6e = document[_0x5378(32084046, "OZmz") + "tor"](_0x5378(11157582, "3a1@") + "n");
      var _0x167f49 = document.querySelector("#form-registrasi");
      var _0x296ff7 = document["querySelec" + _0x5378(21741646, "atxO")]("#html-reset");
      var _0xd7cb4f = document[_0x5378(35401806, "QMi[") + "tor"]("#html-profile");
      var _0x5b880e = document.querySelector("#html-edit" + _0x5378(44671054, "BcP5"));
      var _0x3fa4a9 = document.querySelector("#html-ganti-password");
      var _0xe923db = document["querySelec" + _0x5378(33873998, "geby")]("#html-invo" + _0x5378(49332302, "[]KN"));
      var _0x2526fb = document.querySelector("#html-upload-produk");
      var _0x13bb19 = document["querySelec" + _0x5378(7024718, "7ly)")]("#html-download");
      var _0x2a6019 = document.querySelector("#html-tran" + _0x5378(31506510, "tWQ3"));
      if (_0x434b6e || _0x167f49 || _0x296ff7) {
        window.location = urlHome;
      }
      if (_0xd7cb4f) {
        setupProfile(_0x605219);
      }
      if (_0x5b880e) {
        editProfile(_0x605219);
      }
      if (_0x3fa4a9) {
        var _0x355084 = firebase.auth()[_0x5378(20078670, "5C)0") + "r"];
        gantiPassword(_0x355084);
      }
      if (_0xe923db) {
        setupAdmin(_0x605219);
      }
      db[_0x5378(44396622, "%U#@")]("datausers").where("email", "==", _0x605219[_0x5378(16171086, "gGnn")]).get().then(function (_0x307374) {
        if (_0x307374.docs[0x0] == undefined) {
          db.collection("datausers").add({
            "nama": _0x6883dd,
            "email": _0x1aae29,
            "hp": null,
            "foto": _0x2b64f6,
            "alamat": null,
            "status": "user"
          }).then(_0x19d2a8 => {
            setTimeout(function () {
              window.location.href = urlProfile;
            }, 0xbb8);
          })["catch"](_0x5571c1 => {
            notification("<div class='peringatan gagal'><svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'><path d='M11,15H13V17H11V15M11,7H13V13H11V7M12,2C6.47,2 2,6.5 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20Z' /></svg></div>" + _0x5571c1.message);
          });
        } else {
          var _0x147940 = _0x307374.docs[0x0].data();
          var _0xa81176 = _0x147940.status;
          if (_0xa81176 == "admin") {
            if (_0x2526fb) {
              setuploadproduk();
            }
            if (_0x13bb19) {
              $(".download-user").click(function () {
                notification("Download data user sedang dalam proses");
                setDownload(_0x605219);
                setTimeout(function () {
                  $("#html-download table").table2excel({
                    "filename": "data-user.xls"
                  });
                  $("#html-download table").remove();
                  notification("<div class='peringatan sukses'><svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'><path d='M12 2C6.5 2 2 6.5 2 12S6.5 22 12 22 22 17.5 22 12 17.5 2 12 2M12 20C7.59 20 4 16.41 4 12S7.59 4 12 4 20 7.59 20 12 16.41 20 12 20M16.59 7.58L10 14.17L7.41 11.59L6 13L10 17L18 9L16.59 7.58Z' /></svg></div>User berhasil di download");
                }, 0xbb8);
              });
            }
          } else if (_0x2a6019) {
            htmlTransfer(_0x605219);
          }
        }
      });
      localStorage.setItem("checkuser", true);
    } else {
      var _0x2a1aa3 = document.querySelector("#html-profile");
      var _0x51ef1e = document.querySelector(_0x5378(5038158, "(]6h") + "ice");
      var _0x338f66 = document[_0x5378(39923790, "(]6h") + _0x5378(45686862, "k59^")]("#html-upload-produk");
      var _0x186f9d = document[_0x5378(47632462, "3i2P") + "tor"](_0x5378(14721102, "dApk") + "-profile");
      var _0x238c26 = document.querySelector(_0x5378(34877518, "7ly)") + "sfer");
      if (_0x2a1aa3 || _0x51ef1e || _0x338f66 || _0x186f9d || _0x238c26) {
        notification("Maaf Anda belum login");
        setTimeout(function () {
          window.location.href = urlLogin;
        }, 0xbb8);
      }
      $(".tombol-profile .text-profile").text(_0x5378(34734158, "005A"));
      $(".tombol-profile")[_0x5378(21471310, "(]6h")](function () {
        window.location.href = urlLogin;
      });
      localStorage.removeItem("checkuser");
      setDarkmode();
    }
  });
} else {
  if (optionlogin == "off") {
    var checkUpload = document.querySelector("#html-upload-produk");
    var checkTransfer = document.querySelector("#html-transfer");
    var menuAkun = '';
    menuAkun += "<ul class='menu-profile'>";
    menuAkun += "<li id='darkmode'><input class='toggle-dark' type='checkbox'/><span>Dark Mode</span></li>";
    menuAkun += "</ul>";
    $("#menu-profile ul.menu-profile").html(menuAkun);
    setDarkmode();
    $(".icon-profile svg path").attr("d", "M12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,7A5,5 0 0,0 7,12A5,5 0 0,0 12,17A5,5 0 0,0 17,12A5,5 0 0,0 12,7Z");
    $(".tombol-profile .text-profile").text("Profile");
    $(".tombol-profile").click(function () {
      window.location.href = urlProfile;
    });
    $(".view-cart").click(function () {
      beforeCheckout();
      return false;
    });
    if (checkUpload) {
      setuploadproduk();
    }
    if (checkTransfer) {
      tfwithoutlogin();
    }
  }
}
$(".keranjang-kosong").text("keranjang Anda masih kosong!");
(function (_0x327670, _0xb33f9c) {
  var _0x2e495f = typeof function () {};
  var _0x6e61f6 = function (_0x783c08) {
    var _0x5bc108 = {
      "jQuery": "*"
    };
    var _0x398d67 = 0x0;
    var _0x4ef922 = {};
    var _0x5187e8 = _0x783c08 || "simpleCart";
    var _0x42a9fd = {};
    var _0x55e9ef = {};
    var _0x56abc3 = {};
    var _0x234d78 = _0x327670.localStorage;
    var _0x18d57f = _0x327670.console || {
      "msgs": [],
      "log": function (_0x49c365) {
        _0x18d57f.msgs.push(_0x49c365);
      }
    };
    var _0x2e78f1 = {
      "IDR": {
        "code": "IDR",
        "symbol": "Rp",
        "name": "Rupiah Indonesia"
      }
    };
    var _0x26658a = {
      "currency": "IDR",
      "language": "Indonesia",
      "cartStyle": "div",
      "cartColumns": [],
      "excludeFromCheckout": ["thumb"],
      "shippingFlatRate": 0x0,
      "shippingQuantityRate": 0x0,
      "shippingTotalRate": 0x0,
      "shippingCustom": null,
      "taxRate": 0x0,
      "taxShipping": false,
      "data": {}
    };
    var _0x375149 = function (_0x3a47cb) {
      if (typeof _0x3a47cb === _0x2e495f) {
        return _0x375149.ready(_0x3a47cb);
      }
      if (typeof _0x3a47cb === "object") {
        return _0x375149.extend(_0x26658a, _0x3a47cb);
      }
    };
    var _0x309059;
    var _0x5262f1;
    _0x375149.extend = function (_0x4bfd4d, _0x3fc0be) {
      var _0x559feb;
      if (typeof _0x3fc0be === "undefined") {
        _0x3fc0be = _0x4bfd4d;
        _0x4bfd4d = _0x375149;
      }
      for (_0x559feb in _0x3fc0be) {
        if (Object[_0x5378(526847976, "IHZV")][_0x5378(407769064, "3a1@") + _0x5378(271454184, "6u5H")].call(_0x3fc0be, _0x559feb)) {
          _0x4bfd4d[_0x559feb] = _0x3fc0be[_0x559feb];
        }
      }
      return _0x4bfd4d;
    };
    _0x375149.extend({
      "copy": function (_0x23069b) {
        var _0x529c4f = _0x6e61f6(_0x23069b);
        _0x529c4f.init();
        return _0x529c4f;
      }
    });
    _0x375149.extend({
      "isReady": false,
      "add": function (_0x5c803d, _0x3abe5e) {
        var _0x36af7f = _0x5c803d || {};
        var _0xabf29b = new _0x375149.Item(_0x36af7f);
        var _0x5a6ae0 = true;
        var _0x231b6f = _0x3abe5e === true ? _0x3abe5e : false;
        var _0x4386f4;
        if (!_0x231b6f) {
          _0x5a6ae0 = _0x375149.trigger("beforeAdd", [_0xabf29b]);
          if (_0x5a6ae0 === false) {
            return false;
          }
        }
        _0x4386f4 = _0x375149.has(_0xabf29b);
        if (_0x4386f4) {
          _0x4386f4.increment(_0xabf29b.quantity());
          _0xabf29b = _0x4386f4;
        } else {
          _0x4ef922[_0xabf29b.id()] = _0xabf29b;
        }
        _0x375149.update();
        if (!_0x231b6f) {
          _0x375149.trigger("afterAdd", [_0xabf29b, typeof _0x4386f4 === "undefined"]);
        }
        return _0xabf29b;
      },
      "each": function (_0x3e2264, _0x34c7d2) {
        var _0x4c69e9;
        var _0x2764da = 0x0;
        var _0x3be82d;
        var _0x431857;
        var _0x2b90f1;
        if (typeof _0x3e2264 === _0x2e495f) {
          _0x431857 = _0x3e2264;
          _0x2b90f1 = _0x4ef922;
        } else {
          if (typeof _0x34c7d2 === _0x2e495f) {
            _0x431857 = _0x34c7d2;
            _0x2b90f1 = _0x3e2264;
          } else {
            return;
          }
        }
        for (_0x4c69e9 in _0x2b90f1) {
          if (Object.prototype.hasOwnProperty.call(_0x2b90f1, _0x4c69e9)) {
            _0x3be82d = _0x431857.call(_0x375149, _0x2b90f1[_0x4c69e9], _0x2764da, _0x4c69e9);
            if (_0x3be82d === false) {
              return;
            }
            _0x2764da += 0x1;
          }
        }
      },
      "find": function (_0x1a9edc) {
        var _0x10d009 = [];
        if (typeof _0x4ef922[_0x1a9edc] === "object") {
          return _0x4ef922[_0x1a9edc];
        }
        if (typeof _0x1a9edc === "object") {
          _0x375149.each(function (_0x3bdbf2) {
            var _0x2e4180 = true;
            _0x375149.each(_0x1a9edc, function (_0x381545, _0x18a5d1, _0x5de8d9) {
              if (typeof _0x381545 === "string") {
                if (_0x381545.match(/<=.*/)) {
                  _0x381545 = parseFloat(_0x381545.replace("<=", ''));
                  if (!(_0x3bdbf2.get(_0x5de8d9) && parseFloat(_0x3bdbf2.get(_0x5de8d9)) <= _0x381545)) {
                    _0x2e4180 = false;
                  }
                } else {
                  if (_0x381545.match(/</)) {
                    _0x381545 = parseFloat(_0x381545.replace("<", ''));
                    if (!(_0x3bdbf2.get(_0x5de8d9) && parseFloat(_0x3bdbf2.get(_0x5de8d9)) < _0x381545)) {
                      _0x2e4180 = false;
                    }
                  } else {
                    if (_0x381545.match(/>=/)) {
                      _0x381545 = parseFloat(_0x381545.replace(">=", ''));
                      if (!(_0x3bdbf2.get(_0x5de8d9) && parseFloat(_0x3bdbf2.get(_0x5de8d9)) >= _0x381545)) {
                        _0x2e4180 = false;
                      }
                    } else {
                      if (_0x381545.match(/>/)) {
                        _0x381545 = parseFloat(_0x381545.replace(">", ''));
                        if (!(_0x3bdbf2.get(_0x5de8d9) && parseFloat(_0x3bdbf2.get(_0x5de8d9)) > _0x381545)) {
                          _0x2e4180 = false;
                        }
                      } else if (!(_0x3bdbf2.get(_0x5de8d9) && _0x3bdbf2.get(_0x5de8d9) === _0x381545)) {
                        _0x2e4180 = false;
                      }
                    }
                  }
                }
              } else if (!(_0x3bdbf2.get(_0x5de8d9) && _0x3bdbf2.get(_0x5de8d9) === _0x381545)) {
                _0x2e4180 = false;
              }
              return _0x2e4180;
            });
            if (_0x2e4180) {
              _0x10d009.push(_0x3bdbf2);
            }
          });
          return _0x10d009;
        }
        if (typeof _0x1a9edc === "undefined") {
          _0x375149.each(function (_0x4dcf7a) {
            _0x10d009[_0x5378(419893284, "BeDr")](_0x4dcf7a);
          });
          return _0x10d009;
        }
        return _0x10d009;
      },
      "items": function () {
        return this.find();
      },
      "has": function (_0x506c5b) {
        var _0xb33376 = false;
        _0x375149.each(function (_0x3313d9) {
          if (_0x3313d9.equals(_0x506c5b)) {
            _0xb33376 = _0x3313d9;
          }
        });
        return _0xb33376;
      },
      "empty": function () {
        var _0x67e89b = {};
        _0x375149.each(function (_0x9b9308) {
          if (_0x9b9308.remove(true) === false) {
            _0x67e89b[_0x9b9308.id()] = _0x9b9308;
          }
        });
        _0x4ef922 = _0x67e89b;
        _0x375149[_0x5378(301535524, "BcP5")]();
      },
      "quantity": function () {
        var _0xa0e17c = 0x0;
        _0x375149.each(function (_0x7e0f45) {
          _0xa0e17c += _0x7e0f45.quantity();
        });
        return _0xa0e17c;
      },
      "totalberat": function () {
        var _0x1fde69 = 0x0;
        _0x375149.each(function (_0x3a763a) {
          _0x1fde69 += _0x3a763a.totalberat();
        });
        return _0x1fde69;
      },
      "total": function () {
        var _0x3805f0 = 0x0;
        _0x375149.each(function (_0x5128c9) {
          _0x3805f0 += _0x5128c9.total();
        });
        return _0x3805f0;
      },
      "grandTotal": function () {
        return _0x375149[_0x5378(9335627, "geby")]() + _0x375149.tax() + _0x375149.shipping();
      },
      "update": function () {
        _0x375149.save();
        _0x375149.trigger("update");
      },
      "init": function () {
        _0x375149.load();
        _0x375149.update();
        _0x375149.ready();
      },
      "$": function (_0x4942f5) {
        return new _0x375149.ELEMENT(_0x4942f5);
      },
      "$create": function (_0x1dae29) {
        return _0x375149.$(_0xb33f9c.createElement(_0x1dae29));
      },
      "setupViewTool": function () {
        var _0x28ec7d;
        var _0x4fa902;
        var _0x713ec9 = _0x327670;
        var _0x1a4dc4;
        for (_0x1a4dc4 in _0x5bc108) {
          if (Object.prototype["hasOwnProp" + _0x5378(7484869, "[hmp")].call(_0x5bc108, _0x1a4dc4) && _0x327670[_0x1a4dc4]) {
            _0x28ec7d = _0x5bc108[_0x1a4dc4].replace("*", _0x1a4dc4).split(".");
            _0x4fa902 = _0x28ec7d.shift();
            if (_0x4fa902) {
              _0x713ec9 = _0x713ec9[_0x4fa902];
            }
            if (typeof _0x713ec9 === "function") {
              _0x309059 = _0x713ec9;
              _0x375149[_0x5378(35960261, "#pNe")](_0x375149.ELEMENT._, _0x42a9fd[_0x1a4dc4]);
              return;
            }
          }
        }
      },
      "ids": function () {
        var _0x275bf4 = [];
        _0x375149.each(function (_0x7f52df) {
          _0x275bf4.push(_0x7f52df.id());
        });
        return _0x275bf4;
      },
      "save": function () {
        _0x375149.trigger("beforeSave");
        var _0x122f95 = {};
        _0x375149.each(function (_0x50f91a) {
          _0x122f95[_0x50f91a.id()] = _0x375149.extend(_0x50f91a.fields(), _0x50f91a.options());
        });
        _0x234d78.setItem(_0x5187e8 + "_items", JSON.stringify(_0x122f95));
        _0x375149.trigger("afterSave");
      },
      "load": function () {
        _0x4ef922 = {};
        var _0x4699ee = _0x234d78.getItem(_0x5187e8 + "_items");
        if (!_0x4699ee) {
          return;
        }
        try {
          _0x375149.each(JSON.parse(_0x4699ee), function (_0xa8e2d5) {
            _0x375149.add(_0xa8e2d5, true);
          });
        } catch (_0xf6140) {
          _0x375149.error("Error Loading data: " + _0xf6140);
        }
        _0x375149.trigger("load");
      },
      "ready": function (_0x79254f) {
        if (typeof _0x79254f === _0x2e495f) {
          if (_0x375149[_0x5378(795941, "005A")]) {
            _0x79254f.call(_0x375149);
          } else {
            _0x375149.bind("ready", _0x79254f);
          }
        } else if (typeof _0x79254f === "undefined" && !_0x375149.isReady) {
          _0x375149.trigger("ready");
          _0x375149.isReady = true;
        }
      },
      "error": function (_0x5121c8) {
        var _0x54b2f2 = '';
        if (typeof _0x5121c8 === "string") {
          _0x54b2f2 = _0x5121c8;
        } else if (typeof _0x5121c8 === "object" && typeof _0x5121c8.message === "string") {
          _0x54b2f2 = _0x5121c8.message;
        }
        try {
          _0x18d57f.log("simpleCart(js) Error: " + _0x54b2f2);
        } catch (_0x4e7fd2) {}
        _0x375149.trigger("error", [_0x5121c8]);
      }
    });
    _0x375149.extend({
      "tax": function () {
        var _0x52cf67 = _0x375149.total();
        var _0x3925e0 = _0x375149.taxRate() * _0x52cf67;
        _0x375149[_0x5378(11006171, "kpno")](function (_0x3eeef6) {
          if (_0x3eeef6.get("tax")) {
            _0x3925e0 += _0x3eeef6.get("tax");
          } else if (_0x3eeef6.get("taxRate")) {
            _0x3925e0 += _0x3eeef6.get("taxRate") * _0x3eeef6.total();
          }
        });
        return parseFloat(_0x3925e0);
      },
      "taxRate": function () {
        return 0x0 || 0x0;
      },
      "shipping": function (_0x8d4917) {
        if (typeof _0x8d4917 === _0x2e495f) {
          _0x375149({
            "shippingCustom": _0x8d4917
          });
          return;
        }
        var _0x138d75 = 0x0 * _0x375149.quantity() + 0x0 * _0x375149.total() + 0x0;
        if ("object" === _0x2e495f) {
          _0x138d75 += null.call(_0x375149);
        }
        _0x375149.each(function (_0x149ab4) {
          _0x138d75 += parseFloat(_0x149ab4.get("shipping") || 0x0);
        });
        return parseFloat(_0x138d75);
      }
    });
    _0x5262f1 = {
      "attr": function (_0x4e784d, _0x1c3277) {
        return _0x4e784d.get(_0x1c3277.attr) || '';
      },
      "harga": function (_0x1b5ae2, _0x16c2d4) {
        return [_0x375149.toCurrency(_0x1b5ae2.get(_0x16c2d4[_0x5378("0x2901729", "rQo9")]) || 0x0)];
      },
      "currency": function (_0x296ec1, _0x11fea3) {
        return ["<span clas" + _0x5378(29078487, "H1*B") + _0x5378(27546583, "Zp[M") + "Sub Total " + "</span> " + _0x375149.toCurrency(_0x296ec1.get(_0x11fea3.attr) || 0x0)];
      },
      "jumlah": function (_0x50575f, _0x8d3f67) {
        return [_0x50575f.get(_0x8d3f67.attr)];
      },
      "ukuran": function (_0x1fc7f4, _0x57fd25) {
        return [_0x1fc7f4.get(_0x57fd25[_0x5378("0x8e0256729", "4bEN")])];
      },
      "link": function (_0x523305, _0xf61f48) {
        return [_0x523305.get(_0xf61f48.attr)];
      },
      "linkproduk": function (_0x1c3201, _0x52f9a1) {
        return [_0x1c3201.get(_0x52f9a1.attr)];
      },
      "decrement": function (_0x28a87d, _0x3b3b01) {
        return ["<a href='javascript:;' class='" + _0x5187e8 + "_decrement'>" + "<svg width=\"24\" height=\"24\" fill=\"currentColor\" viewBox=\"0 0 24 24\"><path d=\"M19,13H5V11H19V13Z\"></path></svg>" + "</a>"];
      },
      "increment": function (_0x53e9af, _0x3e897b) {
        return ["<a href='javascript:;' class='" + _0x5187e8 + "_increment'>" + "<svg width=\"24\" height=\"24\" fill=\"currentColor\" viewBox=\"0 0 24 24\"><path d=\"M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z\"></path></svg>" + "</a>"];
      },
      "image": function (_0x53eb72, _0x41e9c1) {
        return ["<a href='" + _0x53eb72.get(_0x41e9c1.attr) + "'><img alt='image product' src='" + _0x53eb72.get(_0x41e9c1.attr) + "'/></a>"];
      },
      "name": function (_0x4cd362, _0x4d97c6) {
        return "<a href='" + _0x4cd362.get(_0x4d97c6.attr) + "'>" + _0x4d97c6.text + "</a>";
      },
      "input": function (_0x2890ea, _0x292ae0) {
        return ["<input type='text' value='" + _0x2890ea.get(_0x292ae0.attr) + "' class='" + _0x5187e8 + "_input'/>"];
      },
      "berat": function (_0x480b59, _0x219077) {
        return [_0x480b59.get(_0x219077.attr)];
      },
      "totalberat": function (_0x2a8037, _0x533445) {
        return "<span class='total-berat' data-berat='" + _0x2a8037.get(_0x533445.attr) + "'>" + "berat " + formatBerat(_0x2a8037.get(_0x533445.attr)) + "</span>";
      },
      "catatan": function (_0x12eb52, _0x5c15f9) {
        return [_0x12eb52.get(_0x5c15f9.attr)];
      },
      "remove": function (_0xcda612, _0x714daa) {
        return ["<a href='javascript:" + _0x5378("0x2459264729", "QC&8") + _0x5187e8 + "_remove'>" + "<svg style=\"width:24px;height:24px\" viewBox=\"0 0 24 24\"><path fill=\"currentColor\" d=\"M9,3V4H4V6H5V19A2,2 0 0,0 7,21H17A2,2 0 0,0 19,19V6H20V4H15V3H9M7,6H17V19H7V6M9,8V17H11V8H9M13,8V17H15V8H13Z\"></path></svg>" + "</a>"];
      }
    };
    function _0x5e2862(_0x57ba48) {
      var _0x2e70ee = _0x57ba48 || {};
      return _0x375149.extend({
        "attr": '',
        "label": '',
        "view": "attr",
        "text": '',
        "className": '',
        "hide": false
      }, _0x2e70ee);
    }
    function _0x4811a1(_0x26d135, _0x520479) {
      var _0x59994e = typeof _0x520479.view === _0x2e495f ? _0x520479.view : typeof _0x520479.view === "string" && typeof _0x5262f1[_0x520479.view] === _0x2e495f ? _0x5262f1[_0x520479.view] : _0x5262f1.attr;
      return _0x59994e.call(_0x375149, _0x26d135, _0x520479);
    }
    _0x375149.extend({
      "writeCart": function (_0x19a59a) {
        var _0x579bb1 = "div".toLowerCase();
        var _0x4e796f = _0x579bb1 === "table";
        var _0x310fd3 = _0x4e796f ? "tr" : "div";
        var _0xef3af9 = _0x4e796f ? "th" : "div";
        var _0xf4a63c = _0x4e796f ? "td" : "div";
        var _0x54a3c9 = _0x4e796f ? "thead" : "div";
        var _0x397bef = _0x375149.$create(_0x579bb1);
        var _0x1eb0e4 = _0x375149.$create(_0x54a3c9);
        var _0x309ddd = _0x375149.$create(_0x310fd3).addClass("headerRow");
        var _0x2ddb4b = _0x375149.$(_0x19a59a);
        var _0x2d4229;
        var _0x9a7694;
        var _0x1c308f;
        var _0x38c6c5;
        var _0x2d7f20;
        $(".ck-btn,.harga-total,#total-harga").hide();
        $(".keranjang-kosong").show();
        _0x2ddb4b.html(" ").append(_0x397bef);
        _0x397bef.append("<div class=\"empty-cart\"><svg fill=\"currentColor\" viewBox=\"0 0 480 480\"><path d=\"m411.9 436.48-24.36-276c-1.83-20.79-18.96-36.48-39.84-36.48-4.797 0-8.7 3.9-8.7 8.7v43.03c0 4.26-3.22 7.98-7.47 8.25-4.66.3-8.53-3.39-8.53-7.98v-93c0-45.77-37.23-83-83-83s-83 37.23-83 83v41h-24.7c-20.88 0-38.01 15.69-39.84 36.48l-24.36 276c-2.05 23.325 16.343 43.52 39.85 43.52h264.1c23.51 0 41.9-20.198 39.85-43.52zm-217.9-9.48h-58c-4.418 0-8-3.582-8-8s3.582-8 8-8h58c4.418 0 8 3.582 8 8s-3.582 8-8 8zm0-40h-58c-4.418 0-8-3.582-8-8s3.582-8 8-8h58c4.418 0 8 3.582 8 8s-3.582 8-8 8zm113-263h-109.3c-4.8 0-8.7 3.9-8.7 8.7v43.03c0 4.26-3.22 7.98-7.47 8.25-4.66.3-8.53-3.39-8.53-7.98v-93c0-36.94 30.06-67 67-67s67 30.06 67 67z\"></svg><span class=\"center\">Keranjang Anda masih kosong</span></div>");
        _0x1eb0e4.append(_0x309ddd);
        _0x38c6c5 = 0x0;
        for (_0x2d7f20 = _0x26658a.cartColumns.length; _0x38c6c5 < _0x2d7f20; _0x38c6c5 += 0x1) {
          _0x2d4229 = _0x5e2862(_0x26658a.cartColumns[_0x38c6c5]);
          _0x9a7694 = "item-" + (_0x2d4229.attr || _0x2d4229.view || _0x2d4229.label || _0x2d4229.text || "cell") + " " + _0x2d4229.className;
          _0x1c308f = _0x2d4229.label || '';
          _0x309ddd.append(_0x375149.$create(_0xef3af9).addClass(_0x9a7694).html(_0x1c308f));
        }
        _0x375149.each(function (_0x1afad5, _0x33ece7) {
          _0x375149.createCartRow(_0x1afad5, _0x33ece7, _0x310fd3, _0xf4a63c, _0x397bef);
        });
        return _0x397bef;
      },
      "createCartRow": function (_0x5af601, _0x543a03, _0x38c63d, _0x5b8f66, _0x4b96d1) {
        var _0x308652 = _0x375149.$create(_0x38c63d).addClass("itemRow row-" + _0x543a03 + " " + (_0x543a03 % 0x2 ? "even" : "odd")).attr("id", "cartItem_" + _0x5af601.id());
        var _0x302278;
        var _0x57e087;
        var _0x7dc2a6;
        var _0x329893;
        var _0x5b837f;
        var _0x1aeba2;
        $(".empty-cart,.keranjang-kosong").hide();
        $(".ck-btn,.harga-total,#total-harga").show();
        _0x4b96d1.append(_0x308652);
        _0x302278 = 0x0;
        for (_0x57e087 = _0x26658a.cartColumns.length; _0x302278 < _0x57e087; _0x302278 += 0x1) {
          _0x7dc2a6 = _0x5e2862(_0x26658a.cartColumns[_0x302278]);
          _0x329893 = "item-" + (_0x7dc2a6.attr || (typeof _0x7dc2a6.view === "string" ? _0x7dc2a6.view : _0x7dc2a6.label || _0x7dc2a6.text || "cell")) + " " + _0x7dc2a6.className;
          _0x5b837f = _0x4811a1(_0x5af601, _0x7dc2a6);
          _0x1aeba2 = _0x375149.$create(_0x5b8f66).addClass(_0x329893).html(_0x5b837f);
          _0x308652.append(_0x1aeba2);
          $(".item-size").each(function () {
            var _0x42fece = $(this).text();
            if (_0x42fece == '') {
              $(this).parents(".itemRow").find(".item-size").remove();
            }
          });
        }
        return _0x308652;
      }
    });
    _0x375149.Item = function (_0x156902) {
      var _0x455e19 = {};
      var _0x5ae030 = this;
      if (typeof _0x156902 === "object") {
        _0x375149.extend(_0x455e19, _0x156902);
      }
      _0x398d67 += 0x1;
      _0x455e19.id = _0x455e19.id || "SCI-" + _0x398d67;
      while (!(typeof _0x4ef922[_0x455e19.id] === "undefined")) {
        _0x398d67 += 0x1;
        _0x455e19.id = "SCI-" + _0x398d67;
      }
      function _0xac7bea() {
        if (typeof _0x455e19[_0x5378(18593427715, "QMi[")] === "string") {
          _0x455e19[_0x5378(143231365379, "N4BJ")] = parseFloat(_0x455e19.price.replace(_0x375149[_0x5378(130967220483, "*J]!")]().decimal, ".").replace(/[^0-9]/g, ''));
        }
        if (isNaN(_0x455e19.price)) {
          _0x455e19.price = 0x0;
        }
        if (_0x455e19.price < 0x0) {
          _0x455e19.price = 0x0;
        }
        if (typeof _0x455e19.quantity === "string") {
          _0x455e19.quantity = parseInt(_0x455e19.quantity.replace(_0x375149.currency().delimiter, ''), 0xa);
        }
        if (isNaN(_0x455e19.quantity)) {
          _0x455e19.quantity = 0x1;
        }
        if (_0x455e19.quantity <= 0x0) {
          _0x5ae030.remove();
        }
      }
      _0x5ae030.get = function (_0x15c723, _0x327a3d) {
        var _0x568001 = !_0x327a3d;
        if (typeof _0x15c723 === "undefined") {
          return _0x15c723;
        }
        return typeof _0x455e19[_0x15c723] === _0x2e495f ? _0x455e19[_0x15c723].call(_0x5ae030) : !(typeof _0x455e19[_0x15c723] === "undefined") ? _0x455e19[_0x15c723] : typeof _0x5ae030[_0x15c723] === _0x2e495f && _0x568001 ? _0x5ae030[_0x15c723].call(_0x5ae030) : !(typeof _0x5ae030[_0x15c723] === "undefined") && _0x568001 ? _0x5ae030[_0x15c723] : _0x455e19[_0x15c723];
      };
      _0x5ae030.set = function (_0x4f471f, _0x55f4f7) {
        if (!(typeof _0x4f471f === "undefined")) {
          _0x455e19[_0x4f471f.toLowerCase()] = _0x55f4f7;
          if (_0x4f471f.toLowerCase() === "price" || _0x4f471f.toLowerCase() === "quantity") {
            _0xac7bea();
          }
        }
        return _0x5ae030;
      };
      _0x5ae030.equals = function (_0x1b67b6) {
        for (var _0x51fc39 in _0x455e19) {
          if (Object[_0x5378(40964878, "atxO")][_0x5378(9175822, "kpno") + "erty"][_0x5378(10785550, "*J]!")](_0x455e19, _0x51fc39)) {
            if (_0x51fc39 !== "quantity" && _0x51fc39 !== "id") {
              if (_0x1b67b6.get(_0x51fc39) !== _0x455e19[_0x51fc39]) {
                return false;
              }
            }
          }
        }
        return true;
      };
      _0x5ae030.options = function () {
        var _0x54d85c = {};
        _0x375149.each(_0x455e19, function (_0x6cbe2, _0x49f683, _0x58add5) {
          var _0x3fff03 = true;
          _0x375149.each(_0x5ae030.reservedFields(), function (_0x1dd108) {
            if (_0x1dd108 === _0x58add5) {
              _0x3fff03 = false;
            }
            return _0x3fff03;
          });
          if (_0x3fff03) {
            _0x54d85c[_0x58add5] = _0x5ae030.get(_0x58add5);
          }
        });
        return _0x54d85c;
      };
      _0xac7bea();
    };
    _0x375149.Item._ = _0x375149.Item.prototype = {
      "increment": function (_0x3f5b85) {
        var _0x202981 = _0x3f5b85 || 0x1;
        _0x202981 = parseInt(_0x202981, 0xa);
        this.quantity(this.quantity() + _0x202981);
        if (this.quantity() < 0x1) {
          this.remove();
          return null;
        }
        return this;
      },
      "decrement": function (_0x38d649) {
        var _0x95a6af = _0x38d649 || 0x1;
        return this.increment(-parseInt(_0x95a6af, 0xa));
      },
      "remove": function (_0x113f9b) {
        var _0x28c906 = _0x375149.trigger("beforeRemove", [_0x4ef922[this.id()]]);
        if (_0x28c906 === false) {
          return false;
        }
        delete _0x4ef922[this.id()];
        if (!_0x113f9b) {
          _0x375149[_0x5378(26867507, "3a1@")]();
        }
        return null;
      },
      "reservedFields": function () {
        return ["quantity", "id", "item_number", "price", "name", "shipping", "tax", "taxRate"];
      },
      "fields": function () {
        var _0x2ffdb9 = {};
        var _0x79e17f = this;
        _0x375149.each(_0x79e17f.reservedFields(), function (_0x436e49) {
          if (_0x79e17f.get(_0x436e49)) {
            _0x2ffdb9[_0x436e49] = _0x79e17f.get(_0x436e49);
          }
        });
        return _0x2ffdb9;
      },
      "quantity": function (_0x2ec113) {
        return typeof _0x2ec113 === "undefined" ? parseInt(this.get("quantity", true) || 0x1, 0xa) : this.set("quantity", _0x2ec113);
      },
      "price": function (_0x34611a) {
        return typeof _0x34611a === "undefined" ? parseFloat(this.get("price", true).toString().replace(_0x375149.currency().symbol, '').replace(_0x375149.currency().delimiter, '') || 0x1) : this.set("price", parseFloat(_0x34611a.toString().replace(_0x375149.currency().symbol, '').replace(_0x375149.currency().delimiter, '')));
      },
      "id": function () {
        return this.get("id", false);
      },
      "berat": function (_0x35ff17) {
        return typeof _0x35ff17 === "undefined" ? parseInt(this[_0x5378(24564757, "irqu")]("berat", true) || 0x1, 0xa) : this.set("berat", _0x35ff17);
      },
      "totalberat": function () {
        return this.quantity() * this.berat();
      },
      "total": function () {
        return this.quantity() * this.price();
      }
    };
    _0x375149.extend({
      "checkout": function (_0x2abaab) {
        if (!_0x2abaab.url) {
          return _0x375149.error("URL required for SendForm Checkout");
        }
        var _0x6001df = {
          "shipping": _0x375149.shipping(),
          "totalBerat": _0x375149.totalberat(),
          "grandTotal": _0x375149.grandTotal(),
          "total": _0x375149.total(),
          "itemCount": _0x375149.find({}).length
        };
        var _0x2566eb = _0x2abaab.url;
        var _0x1f8ae5 = _0x2abaab.method === "GET" ? "GET" : "POST";
        _0x375149.each(function (_0x9071ee, _0x5cd12f) {
          var _0x261581 = _0x5cd12f + 0x1;
          var _0x48e25c = [];
          var _0x293d92;
          _0x6001df["item_thumb_" + _0x261581] = _0x9071ee.get("thumb");
          _0x6001df["item_name_" + _0x261581] = _0x9071ee.get("name");
          _0x6001df["item_quantity_" + _0x261581] = _0x9071ee.quantity();
          _0x6001df["item_price_" + _0x261581] = _0x9071ee.price();
          _0x6001df["item_berat_" + _0x261581] = _0x9071ee.berat();
          _0x375149.each(_0x9071ee.options(), function (_0x395405, _0x5a3234, _0x131c74) {
            _0x293d92 = true;
            _0x375149.each(_0x26658a.excludeFromCheckout, function (_0x3272a6) {
              if (_0x3272a6 === _0x131c74) {
                _0x293d92 = false;
              }
            });
            if (_0x293d92) {
              _0x48e25c.push(_0x131c74 + ": " + _0x395405);
            }
          });
          _0x6001df["item_options_" + _0x261581] = _0x48e25c.join(", ");
        });
        if (_0x2abaab.success) {
          _0x6001df["return"] = _0x2abaab.success;
        }
        if (_0x2abaab.cancel) {
          _0x6001df.cancel_return = _0x2abaab.cancel;
        }
        if (_0x2abaab.extra_data) {
          _0x6001df = _0x375149.extend(_0x6001df, _0x2abaab.extra_data);
        }
        $.ajax({
          "type": _0x1f8ae5,
          "url": _0x2566eb,
          "dataType": "json",
          "data": _0x6001df,
          "success": function (_0x518fd8) {}
        });
      }
    });
    _0x55e9ef = {
      "bind": function (_0x42bee5, _0x4a4286) {
        if (!(typeof _0x4a4286 === _0x2e495f)) {
          return this;
        }
        if (!this._events) {
          this[_0x5378(232698, "RAO[")] = {};
        }
        var _0x206461 = _0x42bee5.split(/ +/);
        _0x375149[_0x5378(1450490, "[TlR")](_0x206461, function (_0x11811b) {
          if (this._events[_0x11811b] === true) {
            _0x4a4286.apply(this);
          } else if (!(typeof this._events[_0x11811b] === "undefined")) {
            this._events[_0x11811b].push(_0x4a4286);
          } else {
            this._events[_0x11811b] = [_0x4a4286];
          }
        });
        return this;
      },
      "trigger": function (_0x376316, _0x3b91c9) {
        var _0x548755 = true;
        var _0x1a7b76;
        var _0x460a33;
        if (!this._events) {
          this._events = {};
        }
        if (!(typeof this._events[_0x376316] === "undefined") && typeof this._events[_0x376316][0x0] === _0x2e495f) {
          _0x1a7b76 = 0x0;
          for (_0x460a33 = this._events[_0x376316].length; _0x1a7b76 < _0x460a33; _0x1a7b76 += 0x1) {
            _0x548755 = this._events[_0x376316][_0x1a7b76].apply(this, _0x3b91c9 || []);
          }
        }
        if (_0x548755 === false) {
          return false;
        }
        return true;
      }
    };
    _0x55e9ef.on = _0x55e9ef.bind;
    _0x375149.extend(_0x55e9ef);
    _0x375149.extend(_0x375149.Item._, _0x55e9ef);
    _0x56abc3 = {
      "beforeAdd": null,
      "afterAdd": null,
      "load": null,
      "beforeSave": null,
      "afterSave": null,
      "update": null,
      "ready": null,
      "checkoutSuccess": null,
      "checkoutFail": null,
      "beforeCheckout": null,
      "beforeRemove": null
    };
    _0x375149(_0x56abc3);
    _0x375149.each(_0x56abc3, function (_0x33e886, _0x18fd9f, _0xed637c) {
      _0x375149.bind(_0xed637c, function () {
        if (typeof _0x26658a[_0xed637c] === _0x2e495f) {
          _0x26658a[_0xed637c].apply(this, arguments);
        }
      });
    });
    _0x375149.bind("beforeAdd", function (_0x1a8047) {
      if (optionlogin == "on") {
        if (checkUser) {
          if (_0x375149.has(_0x1a8047)) {
            notification("<div class='peringatan gagal'><svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'><path d='M11,15H13V17H11V15M11,7H13V13H11V7M12,2C6.47,2 2,6.5 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20Z' /></svg></div>Produk ini sudah tersedia di keranjang Anda");
            return false;
          } else {
            cekProduk = '';
            checkProduk = JSON.parse(_0x234d78.getItem("simpleCart_items"));
            checkProduk = Object.values(checkProduk);
            checkProduk.forEach((_0x231b1f, _0x530925) => {
              cekProduk += _0x231b1f[_0x5378(428586, "k59^")] + ",";
            });
            var _0x1edd05 = cekProduk.replace(/,\s*$/, '');
            var _0x4035a5 = _0x1edd05.split(",");
            var _0x2aef63 = [...new Set(_0x4035a5)];
            var _0x5c7395 = _0x2aef63[0x0];
            var _0x3dc1fd = $(".belibeli-widget-detail .detail-produk .info-produk .produk-inpost").text();
            if (_0x3dc1fd != _0x5c7395 && _0x5c7395 != '') {
              notification("<div class='peringatan gagal'><svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'><path d='M11,15H13V17H11V15M11,7H13V13H11V7M12,2C6.47,2 2,6.5 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20Z' /></svg></div>Jenis produk tidak sama (Produk " + _0x5c7395 + "), silahkan Anda checkout terlebih dahulu untuk membeli produk ini");
              return false;
            } else {
              if (_0x5c7395 == _0x3dc1fd || _0x5c7395 == '') {
                notification("<div class='peringatan sukses'><svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'><path d='M12 2C6.5 2 2 6.5 2 12S6.5 22 12 22 22 17.5 22 12 17.5 2 12 2M12 20C7.59 20 4 16.41 4 12S7.59 4 12 4 20 7.59 20 12 16.41 20 12 20M16.59 7.58L10 14.17L7.41 11.59L6 13L10 17L18 9L16.59 7.58Z' /></svg></div>Produk berhasil ditambahkan");
                fbq("track", "AddToCart");
                fbq("track", "ViewContent");
                return true;
              }
            }
          }
        } else {
          notification("<div class='peringatan gagal'><svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'><path d='M11,15H13V17H11V15M11,7H13V13H11V7M12,2C6.47,2 2,6.5 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20Z' /></svg></div>Silahkan login untuk mulai berbelanja");
          setTimeout(function () {
            _0x327670.location.href = urlLogin;
          }, 0xbb8);
          return false;
        }
      } else {
        if (optionlogin == "off") {
          if (_0x375149.has(_0x1a8047)) {
            notification("<div class='peringatan gagal'><svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'><path d='M11,15H13V17H11V15M11,7H13V13H11V7M12,2C6.47,2 2,6.5 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20Z' /></svg></div>Produk ini sudah tersedia di keranjang Anda");
            return false;
          } else {
            cekProduk = '';
            checkProduk = JSON.parse(_0x234d78.getItem("simpleCart_items"));
            checkProduk = Object.values(checkProduk);
            checkProduk.forEach((_0x5ed4c8, _0x5ea138) => {
              cekProduk += _0x5ed4c8.produk + ",";
            });
            var _0x1edd05 = cekProduk.replace(/,\s*$/, '');
            var _0x4035a5 = _0x1edd05.split(",");
            var _0x2aef63 = [...new Set(_0x4035a5)];
            var _0x5c7395 = _0x2aef63[0x0];
            var _0x3dc1fd = $(".belibeli-widget-detail .detail-produk .info-produk .produk-inpost").text();
            if (_0x3dc1fd != _0x5c7395 && _0x5c7395 != '') {
              notification("<div class='peringatan gagal'><svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'><path d='M11,15H13V17H11V15M11,7H13V13H11V7M12,2C6.47,2 2,6.5 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20Z' /></svg></div>Jenis produk tidak sama (Produk " + _0x5c7395 + "), silahkan Anda checkout terlebih dahulu untuk membeli produk ini");
              return false;
            } else {
              if (_0x5c7395 == _0x3dc1fd || _0x5c7395 == '') {
                notification("<div class='peringatan sukses'><svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'><path d='M12 2C6.5 2 2 6.5 2 12S6.5 22 12 22 22 17.5 22 12 17.5 2 12 2M12 20C7.59 20 4 16.41 4 12S7.59 4 12 4 20 7.59 20 12 16.41 20 12 20M16.59 7.58L10 14.17L7.41 11.59L6 13L10 17L18 9L16.59 7.58Z' /></svg></div>Produk berhasil ditambahkan");
                fbq("track", "AddToCart");
                fbq("track", "ViewContent");
                return true;
              }
            }
          }
        }
      }
    });
    _0x375149.extend({
      "toCurrency": function (_0x12f5a9, _0x193ed3) {
        var _0x2f9155 = parseFloat(_0x12f5a9);
        var _0x5984e6 = _0x193ed3 || {};
        var _0x2092e1 = _0x375149.extend(_0x375149.extend({
          "symbol": "Rp",
          "decimal": '',
          "delimiter": ".",
          "accuracy": 0x0,
          "after": false
        }, _0x375149.currency()), _0x5984e6);
        var _0x77a7d4 = _0x2f9155.toFixed(_0x2092e1.accuracy).split(".");
        var _0x2502fd = _0x77a7d4[0x1];
        var _0x219399 = _0x77a7d4[0x0];
        _0x219399 = _0x375149.chunk(_0x219399[_0x5378("0x28c2138729", "[]KN")](), 0x3)[_0x5378("0x1063138729", "[]KN")](_0x2092e1.delimiter[_0x5378("0x240e138729", "an)$")]()).reverse();
        return (!_0x2092e1.after ? _0x2092e1.symbol : '') + _0x219399 + (_0x2502fd ? _0x2092e1.decimal + _0x2502fd : '') + (_0x2092e1[_0x5378("0x820138729", "NnbG")] ? _0x2092e1[_0x5378("0xa92138729", "#b[]")] : '');
      },
      "chunk": function (_0x56d9df, _0x186731) {
        if (typeof _0x186731 === "undefined") {
          _0x186731 = 0x2;
        }
        var _0x69c529 = _0x56d9df.match(new RegExp(".{1," + _0x186731 + "}", "g"));
        return _0x69c529 || [];
      }
    });
    String.prototype.reverse = function () {
      return this.split('')[_0x5378(20853235, "3i2P")]()[_0x5378(19706355, "vaKW")]('');
    };
    _0x375149.extend({
      "currency": function (_0x4c3251) {
        if (typeof _0x4c3251 === "string" && !(typeof _0x2e78f1[_0x4c3251] === "undefined")) {
          _0x26658a.currency = _0x4c3251;
        } else {
          if (typeof _0x4c3251 === "object") {
            _0x2e78f1[_0x4c3251.code] = _0x4c3251;
            _0x26658a.currency = _0x4c3251.code;
          } else {
            return _0x2e78f1.IDR;
          }
        }
      }
    });
    _0x375149.extend({
      "bindOutlets": function (_0x2b96c2) {
        _0x375149.each(_0x2b96c2, function (_0x5de1fd, _0x312820, _0x47aae3) {
          _0x375149.bind("update", function () {
            _0x375149.setOutlet("." + _0x5187e8 + "_" + _0x47aae3, _0x5de1fd);
          });
        });
      },
      "setOutlet": function (_0x125ba0, _0x33cb0c) {
        var _0x2d3f70 = _0x33cb0c.call(_0x375149, _0x125ba0);
        if (typeof _0x2d3f70 === "object" && _0x2d3f70.el) {
          _0x375149.$(_0x125ba0).html(" ").append(_0x2d3f70);
        } else if (!(typeof _0x2d3f70 === "undefined")) {
          _0x375149.$(_0x125ba0).html(_0x2d3f70);
        }
      },
      "bindInputs": function (_0x4748e5) {
        _0x375149.each(_0x4748e5, function (_0x11da48) {
          _0x375149.setInput("." + _0x5187e8 + "_" + _0x11da48.selector, _0x11da48.event, _0x11da48.callback);
        });
      },
      "setInput": function (_0x49274b, _0x1309ee, _0xf800c1) {
        _0x375149.$(_0x49274b).live(_0x1309ee, _0xf800c1);
      }
    });
    _0x375149.ELEMENT = function (_0x5b7c43) {
      this.create(_0x5b7c43);
      this.selector = _0x5b7c43 || null;
    };
    _0x375149.extend(_0x42a9fd, {
      "jQuery": {
        "passthrough": function (_0x135aee, _0x112308) {
          if (typeof _0x112308 === "undefined") {
            return this.el[_0x135aee]();
          }
          this.el[_0x135aee](_0x112308);
          return this;
        },
        "text": function (_0x167eea) {
          return this.passthrough("text", _0x167eea);
        },
        "html": function (_0x1eaed7) {
          return this[_0x5378(664342841, "aX^M") + "h"]("html", _0x1eaed7);
        },
        "val": function (_0x572005) {
          return this.passthrough("val", _0x572005);
        },
        "append": function (_0x12d9e0) {
          var _0x419b60 = _0x12d9e0.el || _0x12d9e0;
          this.el.append(_0x419b60);
          return this;
        },
        "attr": function (_0x39d9b5, _0x5a0c69) {
          if (typeof _0x5a0c69 === "undefined") {
            return this.el.attr(_0x39d9b5);
          }
          this.el.attr(_0x39d9b5, _0x5a0c69);
          return this;
        },
        "remove": function () {
          this.el.remove();
          return this;
        },
        "addClass": function (_0x2a7ff0) {
          this.el.addClass(_0x2a7ff0);
          return this;
        },
        "removeClass": function (_0x28bd20) {
          this.el.removeClass(_0x28bd20);
          return this;
        },
        "each": function (_0x542575) {
          return this.passthrough("each", _0x542575);
        },
        "click": function (_0x2a21f5) {
          return this.passthrough("click", _0x2a21f5);
        },
        "live": function (_0x520db5, _0x54ff8e) {
          _0x309059(_0xb33f9c).delegate(this.selector, _0x520db5, _0x54ff8e);
          return this;
        },
        "parent": function () {
          return _0x375149.$(this.el.parent());
        },
        "find": function (_0x4535ea) {
          return _0x375149.$(this.el.find(_0x4535ea));
        },
        "closest": function (_0x3af36b) {
          return _0x375149.$(this.el.closest(_0x3af36b));
        },
        "tag": function () {
          return this.el[0x0].tagName;
        },
        "descendants": function () {
          return _0x375149.$(this.el.find("*"));
        },
        "submit": function () {
          return this.el.submit();
        },
        "create": function (_0x27285c) {
          this.el = _0x309059(_0x27285c);
        }
      }
    });
    _0x375149.ELEMENT._ = _0x375149.ELEMENT.prototype;
    _0x375149.ready(_0x375149.setupViewTool);
    _0x375149.ready(function () {
      _0x375149.bindOutlets({
        "total": function () {
          return "<span id='totalharga' data-normal-harga='" + _0x375149.total() + "' data-harga='" + _0x375149.total() + "'>" + _0x375149.toCurrency(_0x375149.total()) + "</span>";
        },
        "totalberat": function () {
          return "<span id='total-berat' data-berat='" + _0x375149.totalberat() + "'>" + formatBerat(_0x375149.totalberat()) + "</span>";
        },
        "quantity": function () {
          return _0x375149.quantity();
        },
        "items": function (_0x208250) {
          _0x375149.writeCart(_0x208250);
        },
        "tax": function () {
          return _0x375149.toCurrency(_0x375149.tax());
        },
        "taxRate": function () {
          return _0x375149.taxRate().toFixed();
        },
        "shipping": function () {
          return _0x375149.toCurrency(_0x375149.shipping());
        },
        "grandTotal": function () {
          return ["<span id='totalpembayaran' class='totalpembayaran' data-normal-total='" + _0x375149.grandTotal() + "' data-total='" + _0x375149.grandTotal() + "'>" + _0x375149.toCurrency(_0x375149.grandTotal()) + "</span"];
        }
      });
      _0x375149.bindInputs([{
        "selector": "checkout",
        "event": "click",
        "callback": function () {
          _0x375149.checkout();
        }
      }, {
        "selector": "empty",
        "event": "click",
        "callback": function () {
          _0x375149.empty();
        }
      }, {
        "selector": "increment",
        "event": "click",
        "callback": function () {
          _0x375149.find(_0x375149.$(this).closest(".itemRow").attr("id").split("_")[0x1]).increment();
          _0x375149.update();
        }
      }, {
        "selector": "decrement",
        "event": "click",
        "callback": function () {
          _0x375149.find(_0x375149.$(this)[_0x5378(14285136, "H1*B")](_0x5378(12429648, "005A")).attr("id").split("_")[0x1]).decrement();
          _0x375149.update();
        }
      }, {
        "selector": "remove",
        "event": "click",
        "callback": function () {
          _0x375149.find(_0x375149.$(this).closest(".itemRow").attr("id").split("_")[0x1]).remove();
        }
      }, {
        "selector": "input",
        "event": "change",
        "callback": function () {
          var _0xa91c9f = _0x375149.$(this);
          var _0x1ddee1 = _0xa91c9f[_0x5378(35295744, "7ly)")]();
          var _0x3623d1 = _0x1ddee1.attr("class").split(" ");
          _0x375149[_0x5378(13849088, "4bEN")](_0x3623d1, function (_0x5ccf25) {
            if (_0x5ccf25.match(/item-.+/i)) {
              var _0x42c24a = _0x5ccf25.split("-")[0x1];
              _0x375149.find(_0x1ddee1.closest(".itemRow").attr("id").split("_")[0x1]).set(_0x42c24a, _0xa91c9f.val());
              _0x375149.update();
              return;
            }
          });
        }
      }, {
        "selector": "shelfItem .item_add",
        "event": "click",
        "callback": function () {
          var _0x11f1ee = _0x375149.$(this);
          var _0x50dc94 = {};
          _0x11f1ee.closest("." + _0x5187e8 + "_shelfItem").descendants().each(function (_0x418543, _0x1865d1) {
            var _0x1efb2d = _0x375149.$(_0x1865d1);
            if (_0x1efb2d.attr("class") && _0x1efb2d.attr("class").match(/item_.+/) && !_0x1efb2d.attr("class").match(/item_add/)) {
              _0x375149.each(_0x1efb2d.attr("class").split(" "), function (_0x529035) {
                var _0x2c0ff2;
                var _0x123b50;
                var _0x1d1cef;
                if (_0x529035.match(/item_.+/)) {
                  _0x2c0ff2 = _0x529035.split("_")[0x1];
                  _0x123b50 = '';
                  switch (_0x1efb2d.tag().toLowerCase()) {
                    case "input":
                    case "textarea":
                    case "select":
                      _0x1d1cef = _0x1efb2d.attr("type");
                      if (!_0x1d1cef || (_0x1d1cef.toLowerCase() === "checkbox" || _0x1d1cef.toLowerCase() === "radio") && _0x1efb2d.attr("checked") || _0x1d1cef.toLowerCase() === "text" || _0x1d1cef.toLowerCase() === "number") {
                        _0x123b50 = _0x1efb2d.val();
                      }
                      break;
                    case "img":
                      _0x123b50 = _0x1efb2d.attr("src");
                      break;
                    default:
                      _0x123b50 = _0x1efb2d.text();
                      break;
                  }
                  if (_0x123b50 !== null && _0x123b50 !== '') {
                    _0x50dc94[_0x2c0ff2.toLowerCase()] = _0x50dc94[_0x2c0ff2.toLowerCase()] ? _0x50dc94[_0x2c0ff2.toLowerCase()] + ", " + _0x123b50 : _0x123b50;
                  }
                }
              });
            }
          });
          _0x375149.add(_0x50dc94);
        }
      }]);
    });
    if (_0xb33f9c.addEventListener) {
      _0x327670.DOMContentLoaded = function () {
        _0xb33f9c.removeEventListener("DOMContentLoaded", DOMContentLoaded, false);
        _0x375149.init();
      };
    } else if (_0xb33f9c.attachEvent) {
      _0x327670.DOMContentLoaded = function () {
        if (_0xb33f9c.readyState === "complete") {
          _0xb33f9c.detachEvent("onreadystatechange", DOMContentLoaded);
          _0x375149.init();
        }
      };
    }
    function _0x44d7a5() {
      if (_0x375149.isReady) {
        return;
      }
      try {
        _0xb33f9c.documentElement.doScroll("left");
      } catch (_0x1aed84) {
        setTimeout(_0x44d7a5, 0x1);
        return;
      }
      _0x375149.init();
    }
    function _0x399c30() {
      if (_0xb33f9c.readyState === "complete") {
        return setTimeout(_0x375149.init, 0x1);
      }
      if (_0xb33f9c.addEventListener) {
        _0xb33f9c.addEventListener("DOMContentLoaded", DOMContentLoaded, false);
        _0x327670.addEventListener("load", _0x375149.init, false);
      } else {
        if (_0xb33f9c.attachEvent) {
          _0xb33f9c.attachEvent("onreadystatechange", DOMContentLoaded);
          _0x327670.attachEvent("onload", _0x375149.init);
          var _0x107b28 = false;
          try {
            _0x107b28 = _0x327670.frameElement === null;
          } catch (_0x21fc47) {}
          if (_0xb33f9c.documentElement.doScroll && _0x107b28) {
            _0x44d7a5();
          }
        }
      }
    }
    _0x399c30();
    return _0x375149;
  };
  _0x327670.simpleCart = _0x6e61f6();
})(window, document);
var JSON;
if (!JSON) {
  JSON = {};
}
(function () {
  function _0x22abed(_0x1dbf9f) {
    _0xa3f993.lastIndex = 0x0;
    return _0xa3f993.test(_0x1dbf9f) ? "\"" + _0x1dbf9f.replace(_0xa3f993, function (_0x10d428) {
      var _0x790255 = _0x9a148b[_0x10d428];
      return typeof _0x790255 === "string" ? _0x790255 : "\\u" + ("0000" + _0x10d428.charCodeAt(0x0).toString(0x10)).slice(-0x4);
    }) + "\"" : "\"" + _0x1dbf9f + "\"";
  }
  function _0xa7ee7b(_0x3410bf, _0x1c2b51) {
    var _0x5e5ea0;
    var _0x1b742b;
    var _0x1dd8fe;
    var _0x3efa1d;
    var _0xddbea8 = _0x37a438;
    var _0x1191c5;
    var _0x3fb9f5 = _0x1c2b51[_0x3410bf];
    if (_0x3fb9f5 && typeof _0x3fb9f5 === "object" && typeof _0x3fb9f5.toJSON === "function") {
      _0x3fb9f5 = _0x3fb9f5.toJSON(_0x3410bf);
    }
    if (typeof _0x429ec6 === "function") {
      _0x3fb9f5 = _0x429ec6.call(_0x1c2b51, _0x3410bf, _0x3fb9f5);
    }
    switch (typeof _0x3fb9f5) {
      case "string":
        return _0x22abed(_0x3fb9f5);
      case "number":
        return isFinite(_0x3fb9f5) ? String(_0x3fb9f5) : "null";
      case "boolean":
      case "null":
        return String(_0x3fb9f5);
      case "object":
        if (!_0x3fb9f5) {
          return "null";
        }
        _0x37a438 += _0x55f262;
        _0x1191c5 = [];
        if (Object.prototype.toString.apply(_0x3fb9f5) === "[object Array]") {
          _0x3efa1d = _0x3fb9f5.length;
          for (_0x5e5ea0 = 0x0; _0x5e5ea0 < _0x3efa1d; _0x5e5ea0 += 0x1) {
            _0x1191c5[_0x5e5ea0] = _0xa7ee7b(_0x5e5ea0, _0x3fb9f5) || "null";
          }
          _0x1dd8fe = _0x1191c5.length === 0x0 ? "[]" : _0x37a438 ? "[\n" + _0x37a438 + _0x1191c5.join(",\n" + _0x37a438) + "\n" + _0xddbea8 + "]" : "[" + _0x1191c5.join(",") + "]";
          _0x37a438 = _0xddbea8;
          return _0x1dd8fe;
        }
        if (_0x429ec6 && typeof _0x429ec6 === "object") {
          _0x3efa1d = _0x429ec6.length;
          for (_0x5e5ea0 = 0x0; _0x5e5ea0 < _0x3efa1d; _0x5e5ea0 += 0x1) {
            if (typeof _0x429ec6[_0x5e5ea0] === "string") {
              _0x1b742b = _0x429ec6[_0x5e5ea0];
              if (_0x1dd8fe = _0xa7ee7b(_0x1b742b, _0x3fb9f5)) {
                _0x1191c5.push(_0x22abed(_0x1b742b) + (_0x37a438 ? ": " : ":") + _0x1dd8fe);
              }
            }
          }
        } else {
          for (_0x1b742b in _0x3fb9f5) if (Object.prototype.hasOwnProperty.call(_0x3fb9f5, _0x1b742b) && (_0x1dd8fe = _0xa7ee7b(_0x1b742b, _0x3fb9f5))) {
            _0x1191c5.push(_0x22abed(_0x1b742b) + (_0x37a438 ? ": " : ":") + _0x1dd8fe);
          }
        }
        _0x1dd8fe = _0x1191c5.length === 0x0 ? "{}" : _0x37a438 ? "{\n" + _0x37a438 + _0x1191c5.join(",\n" + _0x37a438) + "\n" + _0xddbea8 + "}" : "{" + _0x1191c5.join(",") + "}";
        _0x37a438 = _0xddbea8;
        return _0x1dd8fe;
    }
  }
  if (typeof Date.prototype.toJSON !== "function") {
    Date.prototype.toJSON = function () {
      return isFinite(this.valueOf()) ? this.getUTCFullYear() + "-" + (this.getUTCMonth() + 0x1 < 0xa ? "0" + (this.getUTCMonth() + 0x1) : this.getUTCMonth() + 0x1) + "-" + (this.getUTCDate() < 0xa ? "0" + this.getUTCDate() : this.getUTCDate()) + "T" + (this.getUTCHours() < 0xa ? "0" + this.getUTCHours() : this.getUTCHours()) + ":" + (this.getUTCMinutes() < 0xa ? "0" + this.getUTCMinutes() : this.getUTCMinutes()) + ":" + (this.getUTCSeconds() < 0xa ? "0" + this.getUTCSeconds() : this.getUTCSeconds()) + "Z" : null;
    };
    String.prototype.toJSON = Number.prototype.toJSON = Boolean.prototype.toJSON = function () {
      return this.valueOf();
    };
  }
  var _0x46ad78 = /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g;
  var _0xa3f993 = /[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g;
  var _0x37a438;
  var _0x55f262;
  var _0x9a148b = {
    "\b": "\\b",
    "\t": "\\t",
    "\n": "\\n",
    "\f": "\\f",
    "\r": "\\r",
    "\"": "\\\"",
    "\\": "\\\\"
  };
  var _0x429ec6;
  if (typeof JSON[_0x5378(1372276, "(]6h")] !== "function") {
    JSON.stringify = function (_0x3297ab, _0x32b4ea, _0x578ee5) {
      var _0xbcd6fd;
      _0x55f262 = _0x37a438 = '';
      if (typeof _0x578ee5 === "number") {
        for (_0xbcd6fd = 0x0; _0xbcd6fd < _0x578ee5; _0xbcd6fd += 0x1) {
          _0x55f262 += " ";
        }
      } else if (typeof _0x578ee5 === "string") {
        _0x55f262 = _0x578ee5;
      }
      if ((_0x429ec6 = _0x32b4ea) && typeof _0x32b4ea !== "function" && (typeof _0x32b4ea !== "object" || typeof _0x32b4ea.length !== "number")) {
        throw Error("JSON.stringify");
      }
      return _0xa7ee7b('', {
        '': _0x3297ab
      });
    };
  }
  if (typeof JSON[_0x5378(1838964, "%U#@")] !== "function") {
    JSON[_0x5378(899188, "dgE8")] = function (_0x21709d, _0x11b50d) {
      function _0x54c59d(_0x3e7802, _0x54570a) {
        var _0x2ebcc8;
        var _0x8b0a7b;
        var _0x524d78 = _0x3e7802[_0x54570a];
        if (_0x524d78 && typeof _0x524d78 === "object") {
          for (_0x2ebcc8 in _0x524d78) if (Object.prototype.hasOwnProperty.call(_0x524d78, _0x2ebcc8)) {
            _0x8b0a7b = _0x54c59d(_0x524d78, _0x2ebcc8);
            if (_0x8b0a7b !== undefined) {
              _0x524d78[_0x2ebcc8] = _0x8b0a7b;
            } else {
              delete _0x524d78[_0x2ebcc8];
            }
          }
        }
        return _0x11b50d.call(_0x3e7802, _0x54570a, _0x524d78);
      }
      var _0x4ff329;
      var _0x21709d = String(_0x21709d);
      _0x46ad78.lastIndex = 0x0;
      if (_0x46ad78.test(_0x21709d)) {
        _0x21709d = _0x21709d.replace(_0x46ad78, function (_0x91d014) {
          return "\\u" + ("0000" + _0x91d014.charCodeAt(0x0).toString(0x10)).slice(-0x4);
        });
      }
      if (/^[\],:{}\s]*$/.test(_0x21709d.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g, "@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, "]").replace(/(?:^|:|,)(?:\s*\[)+/g, ''))) {
        _0x4ff329 = eval("(" + _0x21709d + ")");
        return typeof _0x11b50d === "function" ? _0x54c59d({
          '': _0x4ff329
        }, '') : _0x4ff329;
      }
      throw new SyntaxError("JSON.parse");
    };
  }
})();
(function () {
  if (!this.localStorage) {
    if (this.globalStorage) {
      try {
        this.localStorage = this.globalStorage;
      } catch (_0x53400f) {}
    } else {
      var _0x59cfa3 = document.createElement("div");
      _0x59cfa3.style.display = "none";
      document.getElementsByTagName("head")[0x0].appendChild(_0x59cfa3);
      if (_0x59cfa3.addBehavior) {
        _0x59cfa3.addBehavior("#default#userdata");
        var _0x2e941d = this.localStorage = {
          "length": 0x0,
          "setItem": function (_0x282e46, _0x180636) {
            _0x59cfa3.load("localStorage");
            _0x282e46 = _0x282e46.replace(/[^-._0-9A-Za-z\xb7\xc0-\xd6\xd8-\xf6\xf8-\u037d\u37f-\u1fff\u200c-\u200d\u203f\u2040\u2070-\u218f]/g, "-");
            if (!_0x59cfa3.getAttribute(_0x282e46)) {
              this.length++;
            }
            _0x59cfa3.setAttribute(_0x282e46, _0x180636);
            _0x59cfa3.save("localStorage");
          },
          "getItem": function (_0x2ccccf) {
            _0x59cfa3.load("localStorage");
            _0x2ccccf = _0x2ccccf.replace(/[^-._0-9A-Za-z\xb7\xc0-\xd6\xd8-\xf6\xf8-\u037d\u37f-\u1fff\u200c-\u200d\u203f\u2040\u2070-\u218f]/g, "-");
            return _0x59cfa3.getAttribute(_0x2ccccf);
          },
          "removeItem": function (_0x16361f) {
            _0x59cfa3.load("localStorage");
            _0x16361f = _0x16361f.replace(/[^-._0-9A-Za-z\xb7\xc0-\xd6\xd8-\xf6\xf8-\u037d\u37f-\u1fff\u200c-\u200d\u203f\u2040\u2070-\u218f]/g, "-");
            _0x59cfa3.removeAttribute(_0x16361f);
            _0x59cfa3.save("localStorage");
            this.length = 0x0;
          },
          "clear": function () {
            _0x59cfa3.load("localStorage");
            for (var _0x248e64 = 0x0; attr = _0x59cfa3.XMLDocument.documentElement.attributes[_0x248e64++];) {
              _0x59cfa3.removeAttribute(attr.name);
            }
            _0x59cfa3.save("localStorage");
            this.length = 0x0;
          },
          "key": function (_0x31e1ae) {
            _0x59cfa3.load("localStorage");
            return _0x59cfa3.XMLDocument.documentElement.attributes[_0x31e1ae];
          }
        };
        _0x59cfa3.load("localStorage");
        _0x2e941d.length = _0x59cfa3.XMLDocument.documentElement.attributes.length;
      }
    }
  }
})();
simpleCart({
  "shippingCustom": function () {
    return;
  }
});
function generator(_0x374690) {
 return true; // Selalu return true
}
$(document).ready(function () {
  $(document).on("change", "#upload", function () {
    var _0x62b21b = $("#upload").prop("files")[0x0];
    var _0x54f21a = new FileReader();
    _0x54f21a.readAsArrayBuffer(_0x62b21b);
    $("#uploaded").html("Proses upload file, silahkan ditunggu");
    _0x54f21a.onload = _0x1d7819 => {
      var _0x101e8d = $("#invoice").val();
      var _0x2178bc = $("#nama-invoice").val();
      var _0x240503 = $("#nomor-invoice");
      if (_0x101e8d == undefined) {
        var _0x54e178 = _0x62b21b.name;
      } else {
        if (_0x101e8d != undefined) {
          var _0x54e178 = _0x101e8d + " - (" + _0x2178bc + " " + _0x240503 + ")";
        }
      }
      var _0x2a5be0 = _0x62b21b[_0x5378(2634557, "#pNe")];
      if (_0x2a5be0.includes(".")) {
        var _0x2305fa = _0x2a5be0.split(".").pop();
        if (_0x2305fa != _0x54e178.split(".").pop()) {
          _0x54e178 = _0x54e178 ? _0x54e178 + "." + _0x2305fa : _0x2a5be0;
        }
      }
      var _0x36ab62 = new URLSearchParams({
        "filename": _0x54e178,
        "mimeType": _0x62b21b.type
      });
      fetch(urlDatabase + "?" + _0x36ab62, {
        "method": "POST",
        "body": JSON.stringify([...new Int8Array(_0x1d7819.target.result)])
      }).then(_0x1702e8 => _0x1702e8.json()).then(_0x544a25 => {
        var _0x31406d = _0x544a25.fileId;
        var _0x5224e2 = "https://lh3.googleusercontent.com/u/0/d/" + _0x31406d;
        $("#uploaded").html("<input id='linkfile' data-file='https://lh3.googleusercontent.com/u/0/d/" + _0x31406d + "' value='" + _0x31406d + "' type='hidden'/><img src='" + _0x5224e2 + "' width='80' height='80' alt='image google drive'/>");
        notification("<div class='peringatan sukses'><svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'><path d='M12 2C6.5 2 2 6.5 2 12S6.5 22 12 22 22 17.5 22 12 17.5 2 12 2M12 20C7.59 20 4 16.41 4 12S7.59 4 12 4 20 7.59 20 12 16.41 20 12 20M16.59 7.58L10 14.17L7.41 11.59L6 13L10 17L18 9L16.59 7.58Z' /></svg></div>File berhasil terupload");
      })["catch"](_0x5d6739 => console.log(_0x5d6739));
    };
  });
});
function uploadFoto() {
  var _0x59ea09 = $("#tambah-foto").prop("files");
  [..._0x59ea09].forEach((_0x46d306, _0x5b0ea9) => {
    var _0x2f6ee9 = new FileReader();
    _0x2f6ee9.readAsArrayBuffer(_0x46d306);
    notification("<div class='peringatan gagal'><svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'><path d='M11,15H13V17H11V15M11,7H13V13H11V7M12,2C6.47,2 2,6.5 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20Z' /></svg></div>Proses upload file, silahkan ditunggu");
    _0x2f6ee9.onload = _0x1865f5 => {
      var _0x3b95ad = new URLSearchParams({
        "filename": _0x46d306.name,
        "mimeType": _0x46d306.type
      });
      fetch(urlDatabase + "?" + _0x3b95ad, {
        "method": "POST",
        "body": JSON.stringify([...new Int8Array(_0x1865f5.target.result)])
      }).then(_0x5c4a1e => _0x5c4a1e.json()).then(_0x4c2b4e => {
        var _0xd573cd = _0x4c2b4e.fileId;
        var _0x37e93e = "https://lh3.googleusercontent.com/u/0/d/" + _0xd573cd;
        $("#hasil-foto").append("<img src='" + _0x37e93e + "' width='640' height='640' alt='" + $("#namaproduk").val() + "'/>");
        $("#hasil-foto img").click(function () {
          $(this).remove();
          return false;
        });
      })["catch"](_0x369350 => console.log(_0x369350));
    };
  });
}
;
function htmlTransfer(_0x5eaa8d) {
  if (_0x5eaa8d) {
    db[_0x5378(39747713, "dgE8")](_0x5378(15810689, "QC&8")).where("email", "==", _0x5eaa8d.email).get().then(function (_0x2b9c9d) {
      var _0x38ee32 = _0x2b9c9d.docs[0x0].data();
      var _0x20b8e1 = _0x38ee32[_0x5378(124109545601, "6u5H")];
      var _0x5a211a = _0x38ee32.hp;
      var _0x3d0812 = "<form>    <div class='datainput'>        <label for='invoice'>            <svg viewBox='0 0 24 24'>                <path fill='currentColor' d='M2,4H6V2H2A2,2 0 0,0 0,4V8H2V4M22,2H18V4H22V8H24V4A2,2 0 0,0 22,2M2,16H0V20A2,2 0 0,0 2,22H6V20H2V16M22,20H18V22H22A2,2 0 0,0 24,20V16H22V20M4,8V16A2,2 0 0,0 6,18H18A2,2 0 0,0 20,16V8A2,2 0 0,0 18,6H6A2,2 0 0,0 4,8M6,16V12H18V16H6M18,8V10H6V8H18Z'></path>            </svg>            <span>Nomor Invoice</span>        </label>        <input class='validate' id='invoice' name='Invoice' placeholder=' Isi Invoice pembelian disini' type='text' />    </div>    <div class='datainput'>        <label for='upload'>            <svg viewBox='0 0 24 24'>                <path fill='currentColor' d='M11 15H13V17H11V15M11 13H13V7H11V13M22 5.5V16L16 22H5.5C3.6 22 2 20.4 2 18.5V5.5C2 3.6 3.6 2 5.5 2H18.5C20.4 2 22 3.6 22 5.5M20 5.8C20 4.8 19.2 4 18.2 4H5.8C4.8 4 4 4.8 4 5.8V18.3C4 19.3 4.8 20.1 5.8 20.1H15V18.6C15 16.7 16.6 15.1 18.5 15.1H20V5.8Z'></path>            </svg>            <span>Upload File</span>        </label>        <input id='upload' class='validate' name='upload' value='pilih file' type='file' accept='image/*'/>      <span class='keterangan' id='uploaded'></span>    </div>    <input class='validate' id='nama-invoice' value='" + _0x20b8e1 + "' type='hidden'/>    <input class='validate' id='nomor-invoice' value='" + _0x5a211a + "' type='hidden'/></form><button class='button-submit' id='kirim-transfer'>Kirim Bukti Transfer</button>";
      $("#html-transfer").html(_0x3d0812);
      notifError();
      $("#kirim-transfer").click(kirimTransfer);
    });
  }
}
function tfwithoutlogin() {
  $("#html-transfer").html("<form>    <div class='datainput'>        <label for='invoice'>            <svg viewBox='0 0 24 24'>                <path fill='currentColor' d='M2,4H6V2H2A2,2 0 0,0 0,4V8H2V4M22,2H18V4H22V8H24V4A2,2 0 0,0 22,2M2,16H0V20A2,2 0 0,0 2,22H6V20H2V16M22,20H18V22H22A2,2 0 0,0 24,20V16H22V20M4,8V16A2,2 0 0,0 6,18H18A2,2 0 0,0 20,16V8A2,2 0 0,0 18,6H6A2,2 0 0,0 4,8M6,16V12H18V16H6M18,8V10H6V8H18Z'></path>            </svg>            <span>Nomor Invoice</span>        </label>        <input class='validate' id='invoice' name='Invoice' placeholder=' Isi Invoice pembelian disini' type='text' />    </div>  <div class='datainput'>    <label for='Nama Lengkap'><svg viewBox='0 0 24 24'><path fill='currentColor' d='M12 3C14.21 3 16 4.79 16 7S14.21 11 12 11 8 9.21 8 7 9.79 3 12 3M16 13.54C16 14.6 15.72 17.07 13.81 19.83L13 15L13.94 13.12C13.32 13.05 12.67 13 12 13S10.68 13.05 10.06 13.12L11 15L10.19 19.83C8.28 17.07 8 14.6 8 13.54C5.61 14.24 4 15.5 4 17V21H20V17C20 15.5 18.4 14.24 16 13.54Z'/></svg><span>Nama Lengkap</span></label>    <input class='validate' id='nama-invoice' name='Nama Lengkap' placeholder='Nama Lengkap' type='text'/>  </div>  <div class='datainput'>    <label for='Nomor HP'><svg viewBox='0 0 24 24'><path fill='currentColor' d='M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.69 2 12.04 2M12.05 3.67C14.25 3.67 16.31 4.53 17.87 6.09C19.42 7.65 20.28 9.72 20.28 11.92C20.28 16.46 16.58 20.15 12.04 20.15C10.56 20.15 9.11 19.76 7.85 19L7.55 18.83L4.43 19.65L5.26 16.61L5.06 16.29C4.24 15 3.8 13.47 3.8 11.91C3.81 7.37 7.5 3.67 12.05 3.67M8.53 7.33C8.37 7.33 8.1 7.39 7.87 7.64C7.65 7.89 7 8.5 7 9.71C7 10.93 7.89 12.1 8 12.27C8.14 12.44 9.76 14.94 12.25 16C12.84 16.27 13.3 16.42 13.66 16.53C14.25 16.72 14.79 16.69 15.22 16.63C15.7 16.56 16.68 16.03 16.89 15.45C17.1 14.87 17.1 14.38 17.04 14.27C16.97 14.17 16.81 14.11 16.56 14C16.31 13.86 15.09 13.26 14.87 13.18C14.64 13.1 14.5 13.06 14.31 13.3C14.15 13.55 13.67 14.11 13.53 14.27C13.38 14.44 13.24 14.46 13 14.34C12.74 14.21 11.94 13.95 11 13.11C10.26 12.45 9.77 11.64 9.62 11.39C9.5 11.15 9.61 11 9.73 10.89C9.84 10.78 10 10.6 10.1 10.45C10.23 10.31 10.27 10.2 10.35 10.04C10.43 9.87 10.39 9.73 10.33 9.61C10.27 9.5 9.77 8.26 9.56 7.77C9.36 7.29 9.16 7.35 9 7.34C8.86 7.34 8.7 7.33 8.53 7.33Z'/></svg><span>Nomor HP</span></label>    <input class='validate' id='nomor-invoice' name='Nomor HP' placeholder='Nomor HP' type='number'/>  </div>    <div class='datainput'>        <label for='upload'>            <svg viewBox='0 0 24 24'>                <path fill='currentColor' d='M11 15H13V17H11V15M11 13H13V7H11V13M22 5.5V16L16 22H5.5C3.6 22 2 20.4 2 18.5V5.5C2 3.6 3.6 2 5.5 2H18.5C20.4 2 22 3.6 22 5.5M20 5.8C20 4.8 19.2 4 18.2 4H5.8C4.8 4 4 4.8 4 5.8V18.3C4 19.3 4.8 20.1 5.8 20.1H15V18.6C15 16.7 16.6 15.1 18.5 15.1H20V5.8Z'></path>            </svg>            <span>Upload File</span>        </label>        <input id='upload' class='validate' name='upload' value='pilih file' type='file' accept='image/*'/>      <span class='keterangan' id='uploaded'></span>    </div></form><button class='button-submit' id='kirim-transfer'>Kirim Bukti Transfer</button>");
  notifError();
  $("#kirim-transfer").click(kirimTransfer);
}
function kirimTransfer() {
  var _0x3a479f = $("#invoice").val();
  var _0x6e0c8c = $("#nama-invo" + _0x5378(46843484, "[]KN"))[_0x5378(35374684, "tWQ3")]();
  var _0x408441 = $(_0x5378(8255068, "BeDr") + "oice").val();
  var _0x12efd4 = $("#upload");
  var _0x3d4513 = $("#linkfile").attr("data-file");
  if (_0x3a479f == '') {
    $("#invoice").each(function () {
      $(this).addClass("focus");
      $(this).parents(".datainput").find(".validasi").addClass("show");
    });
    $("#invoice").focus();
    return false;
  } else {
    if (_0x6e0c8c == '') {
      $("#nama-invo" + _0x5378(10262108, "Zp[M")).each(function () {
        $(this).addClass("focus");
        $(this).parents(".datainput").find(".validasi").addClass("show");
      });
      $("#nama-invoice").focus();
      return false;
    } else {
      if (_0x408441 == '') {
        $(_0x5378(8762972, "RAO[") + "oice").each(function () {
          $(this).addClass("focus");
          $(this).parents(".datainput").find(".validasi").addClass("show");
        });
        $(_0x5378(4773468, "H1*B") + "oice").focus();
        return false;
      } else {
        if (_0x12efd4[0x0].files.length == 0x0) {
          $("#upload")[_0x5378(28612188, "BcP5")](function () {
            $(this).addClass("focus");
            $(this).parents(".datainput").find(".validasi").addClass("show");
          });
          $(_0x5378(177756, "005A")).focus();
          return false;
        } else {
          notification("Pesan sedang diproses");
          var _0x410dac = simpleBliSetting["Teks Konfirmasi Transfer"];
          var _0x204f62 = "*NB:* " + simpleBliSetting[_0x5378(18810460, "[hmp") + "ansfer"];
          var _0x28ccd7 = '';
          _0x28ccd7 += _0x410dac + "\n";
          _0x28ccd7 += "=============================\n\n";
          _0x28ccd7 += "*DATA PEMBELI*\n";
          _0x28ccd7 += "=============================\n";
          _0x28ccd7 += _0x5378(24274524, "geby") + ": " + _0x3a479f + "\n";
          _0x28ccd7 += "*Nama* : " + _0x6e0c8c + "\n";
          _0x28ccd7 += _0x5378(26994268, "6u5H") + _0x408441 + "\n";
          _0x28ccd7 += _0x5378(43419228, "gGnn") + "sfer* : " + _0x3d4513 + "\n";
          _0x28ccd7 += "\n" + _0x204f62;
          var _0x431aa5 = encodeURIComponent(_0x28ccd7);
          var _0x193d87 = _0x28ccd7;
          var _0x5167ae = "https://api.whatsapp.com/send?phone=" + nomorAdmin + _0x5378(24401500, "irqu") + _0x431aa5;
          if (checkapiWA != "off") {
            const _0x101b39 = new FormData();
            _0x101b39.append("target", _0x408441);
            _0x101b39.append("message", _0x193d87);
            _0x101b39.append(_0x5378(5629532, "&ihF"), "2");
            _0x101b39.append("countryCode", "62");
            $.ajax({
              "url": "https://api.fonnte.com/send",
              "type": _0x5378(15238748, "BeDr"),
              "headers": {
                "Authorization": apikeyWA
              },
              "processData": false,
              "contentType": false,
              "data": _0x101b39,
              "beforeSend": function () {
                notification("Data sedang diproses");
              },
              "success": function (_0x39d86d) {
                if (_0x39d86d.status == true) {
                  notification("<div class='peringatan sukses'><svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'><path d='M12 2C6.5 2 2 6.5 2 12S6.5 22 12 22 22 17.5 22 12 17.5 2 12 2M12 20C7.59 20 4 16.41 4 12S7.59 4 12 4 20 7.59 20 12 16.41 20 12 20M16.59 7.58L10 14.17L7.41 11.59L6 13L10 17L18 9L16.59 7.58Z' /></svg></div>Konfirmasi transfer berhasil terkirim");
                } else {
                  window.open(_0x5167ae, "_blank");
                }
                setTimeout(function () {
                  window.location.href = urlProfile;
                }, 0xbb8);
              }
            });
          } else if (checkapiWA == "off") {
            window.open(_0x5167ae, "_blank");
            setTimeout(function () {
              window.location.href = urlProfile;
            }, 0xbb8);
          }
          return false;
        }
      }
    }
  }
}
$(".lihat-kupon").each(function () {
  $(this).parents(".tombol-geser").hide();
});
var formatVoucher = formVoucher.split(":");
var voucherKode = formatVoucher[0x0];
var voucherHarga = formatVoucher[0x1];
var voucherOff = formatVoucher[0x2];
$("#pembayaran").change(function () {
  var _0x309097 = $("#totalharga").attr("data-normal-harga");
  if (_0x309097 >= minimumVoucher) {
    if (voucherOff == "off") {
      $(".lihat-kupon").each(function () {
        $(this).parents(".tombol-geser").show();
      });
      $(".datakupon").html("Maaf, kupon tidak tersedia");
    } else {
      $(".lihat-kupon").each(function () {
        $(this).parents(".tombol-geser").show();
      });
      $(".datakupon").html("<input id='kupon' placeholder='masukan kode kupon disini'/><button aria-label='kupon' class='hasilkupon' id='kupon-checkout'>Cek Voucher</button>");
      $("#kupon-checkout").click(function () {
        var _0xa4be5 = $("#kupon").val();
        if (_0xa4be5 == voucherKode) {
          var _0x2357a1 = $("#totalharga").attr("data-normal-harga");
          if (voucherHarga >= 0x65) {
            var _0x30243f = _0x2357a1 - voucherHarga;
            var _0x52328f = angkaToRp(_0x30243f);
          } else {
            if (voucherHarga < 0x64) {
              var _0x30243f = Math.round(_0x2357a1 - _0x2357a1 * voucherHarga / 0x64);
              var _0x52328f = angkaToRp(_0x30243f);
            }
          }
          $("#totalharga").html(_0x52328f);
          $("#totalharga").attr("data-harga", _0x30243f);
          if (voucherHarga >= 0x65) {
            var _0x2d3f0f = "Selamat, Anda mendapatkan potongan sebesar <b>" + angkaToRp(voucherHarga) + "</b> harga total menjadi <b>" + _0x52328f + "</b>";
          } else {
            if (voucherHarga < 0x64) {
              var _0x2d3f0f = "Selamat, Anda mendapatkan potongan sebesar <b>" + voucherHarga + "%</b> harga total menjadi <b>" + _0x52328f + "</b>";
            }
          }
          notification(_0x2d3f0f);
        } else {
          $("#kupon").val('');
          notification("Maaf, kupon yang anda masukan tidak sesuai!");
        }
      });
    }
  } else if (_0x309097 < minimumVoucher) {
    $(".lihat-kupon").each(function () {
      $(this).parents(".tombol-geser").show();
    });
    $(".datakupon").html("Kupon tidak tersedia, Belanjaan Anda kurang dari " + angkaToRp(minimumVoucher));
  }
});
var a;
var rekening = "<option value='default'>Pilih Pembayaran</option>";
for (a = 0x0; a < bank.length; a++) {
  rekening += "<option value=\"" + bank[a].name + " - " + bank[a].norek + "\">" + bank[a].name + "</option>";
}
$("#pembayaran").html(rekening);
$("#beli-produk").click(function () {
  notifError();
  if ($("#nama-user")[_0x5378(378802174, "005A")]() == '') {
    $(_0x5378(319295486, "005A")).each(function () {
      $(this).addClass("focus");
      $(this).parents(".datainput").find(".validasi").addClass("show");
    });
    $("#nama-user").focus();
    return false;
  } else {
    if ($("#nomor-user").val() == '') {
      $("#nomor-user").each(function () {
        $(this).addClass("focus");
        $(this).parents(".datainput").find(".validasi").addClass("show");
      });
      $("#nomor-user").focus();
      return false;
    } else {
      if ($("#email-user")[_0x5378(55119870, "k59^")]() == '') {
        $(_0x5378(590417918, "[]KN") + "r").each(function () {
          $(this).addClass("focus");
          $(this).parents(".datainput").find(".validasi").addClass("show");
        });
        $("#email-user").focus();
        return false;
      } else {
        if ($("#alamat-user").val() == '') {
          $("#alamat-user").each(function () {
            $(this).addClass("focus");
            $(this).parents(".datainput").find(".validasi").addClass("show");
          });
          $(_0x5378(75370494, "irqu") + "er").focus();
          return false;
        } else {
          if ($(_0x5378(600772606, "an)$")).val() == "default") {
            $("#kurir")[_0x5378(505679870, "NnbG")](function () {
              $(this).addClass("focus");
              $(this).parents(".datainput").find(".validasi").addClass("show");
            });
            $("#kurir").focus();
            return false;
          } else {
            if ($("#pembayaran").val() == _0x5378(407834622, "kpno")) {
              $("#pembayaran").each(function () {
                $(this).addClass("focus");
                $(this).parents(".datainput").find(".validasi").addClass("show");
              });
              $("#pembayaran").focus();
              return false;
            } else {
              var _0x40e488 = new Date();
              var _0x1a8754 = formatInvoice(_0x40e488, "INV");
              var _0x190906 = formatTanggal(_0x40e488);
              var _0x3d5547 = $("#user-id").val();
              var _0x54733f = $("#nama-user").val();
              var _0x5d54e2 = $("#nomor-user")[_0x5378(156831742, "[hmp")]().split(/[^0-9]/).join('').replace(/^[0]/, "62");
              var _0x7ceb95 = $(_0x5378(624168958, "kpno") + "r").val();
              var _0x73cd76 = $(_0x5378(598675454, "IHZV") + "er").val();
              var _0x4f4dbd = $("#id-produk").val();
              if ($("#kurir")[_0x5378(418779134, "QZlP")]() == '') {
                var _0x353d23 = "-";
              } else {
                if ($("#kurir").val() != '') {
                  var _0x353d23 = $(_0x5378(496766974, "3a1@") + "lected").text();
                }
              }
              if ($(_0x5378(559615998, "vaKW")).val() == '' || $("#kupon").val() == undefined) {
                var _0x238d6b = "-";
              } else {
                if ($("#kupon")[_0x5378(499978238, "dApk")]() != '') {
                  var _0x4b640e = $("#totalharga").attr(_0x5378(358813694, "N4BJ") + "l-harga");
                  if (voucherHarga >= 0x65) {
                    var _0x238d6b = voucherKode + "(diskon " + angkaToRp(voucherHarga) + (_0x5378(286986238, "irqu") + "a ") + angkaToRp(_0x4b640e) + ")";
                  } else {
                    if (voucherHarga < 0x64) {
                      var _0x238d6b = voucherKode + "(diskon " + voucherHarga + (_0x5378(321392638, "3i2P") + "ri harga ") + angkaToRp(_0x4b640e) + ")";
                    }
                  }
                }
              }
              var _0x64ae45 = $("#pembayaran :selected").val();
              var _0xf6d555 = $(_0x5378(590811134, "(]6h") + "a").attr("data-harga");
              if ($("#catatan")[_0x5378(378802174, "005A")]() == '') {
                var _0x16415e = "-";
              } else {
                if ($("#catatan").val() != '') {
                  var _0x16415e = $(_0x5378(727781374, "3i2P")).val();
                }
              }
              cartItem_checkout = '';
              counter_checkout = 0x1;
              sheetItems = JSON.parse(localStorage.getItem("simpleCart_items"));
              sheetItems = Object.values(sheetItems);
              sheetItems.forEach((_0x5edf38, _0x196a5c) => {
                cartItem_checkout += counter_checkout + ". " + _0x5edf38.name + "\n";
                if (_0x5edf38.size != undefined) {
                  cartItem_checkout += _0x5edf38.size + "\n";
                }
                cartItem_checkout += "Harga: " + angkaToRp(_0x5edf38.price) + "\n";
                cartItem_checkout += "Jumlah: " + _0x5edf38.quantity + "\n";
                cartItem_checkout += "Sub Total: " + angkaToRp(_0x5edf38.price * _0x5edf38.quantity) + "\n";
                cartItem_checkout += "Link: " + _0x5edf38.link + "\n=========================\n";
                cartItem_checkout += "\n";
                counter_checkout++;
              });
              var _0x157e58 = '';
              _0x157e58 += simpleBliSetting["Teks Salam Pembuka Checkout WA"] + "\n\n";
              _0x157e58 += "=========================\n*DATA PEMBELI*\n=========================\n";
              _0x157e58 += _0x5378(708579326, "H1*B") + "der: " + _0x190906 + "\n";
              _0x157e58 += "Invoice: " + _0x1a8754 + "\n";
              _0x157e58 += "Nama: " + _0x54733f + "\n";
              _0x157e58 += "Nomor HP: " + _0x5d54e2 + "\n";
              if (_0x73cd76 != "-") {
                _0x157e58 += "Alamat: " + _0x73cd76 + "\n";
              }
              if (_0x353d23 != "-") {
                _0x157e58 += "Kurir: via " + _0x353d23 + "\n";
              }
              _0x157e58 += "Pembayaran: " + _0x64ae45 + "\n\n";
              _0x157e58 += _0x5378(484773886, "dApk") + "==========" + "=====\n*DAT" + "A PRODUK*\n" + "==========" + _0x5378(694882302, "[TlR") + "=====\n";
              _0x157e58 += cartItem_checkout;
              if (_0x238d6b != "-") {
                _0x157e58 += _0x5378(308154366, "kpno") + " " + _0x238d6b + "\n";
              }
              _0x157e58 += "*Total Pembayaran:* " + angkaToRp(_0xf6d555) + "\n";
              if (_0x16415e != "-") {
                _0x157e58 += "\n=========================\n*CATATAN*\n=======================" + _0x5378(559943678, "[]KN") + ": " + _0x16415e + "\n";
              }
              if (formcheckoutgmail != "off") {
                _0x157e58 += "\n*NB:* Anda juga bis" + _0x5378(737284094, "BeDr") + "ta produk " + "di akun da" + _0x5378(303566846, "[hmp") + "da *(" + _0x7ceb95 + ")*";
              }
              var _0x30de04 = _0x5378(251203582, "dgE8") + "i.whatsapp" + _0x5378(540545022, "irqu");
              var _0x4f37cf = _0x30de04 + "?phone=" + nomorAdmin + "&text=" + encodeURIComponent(_0x157e58);
              var _0x387fc9 = cartItem_checkout.split("*").join('');
              _0x387fc9 = _0x387fc9.split("=========================").join('');
              var _0xf8c110 = "?Invoice=" + _0x1a8754 + "&Tanggal=" + encodeURIComponent(_0x190906) + "&Nama=" + encodeURIComponent(_0x54733f) + "&Nomor HP=" + encodeURIComponent(_0x5d54e2) + "&Email=" + encodeURIComponent(_0x7ceb95) + "&Alamat=" + encodeURIComponent(_0x73cd76) + "&Pengiriman=" + encodeURIComponent(_0x353d23) + "&Pembayaran=" + encodeURIComponent(_0x64ae45) + ("&Data Pesa" + _0x5378(5574654, "[]KN")) + encodeURIComponent(_0x387fc9) + "&Voucher=" + encodeURIComponent(_0x238d6b) + "&Total Pembayaran=" + angkaToRp(_0xf6d555) + "&Catatan=" + encodeURIComponent(_0x16415e) + "&action=insertdatabase";
              var _0x1e65a0 = "?tgl='" + formatTanggalangka(_0x40e488) + "&nama=" + encodeURIComponent(_0x54733f) + "&produk=" + encodeURIComponent(localStorage.getItem("simpleCart_items")) + (_0x5378(629542910, "irqu") + "sertnotifi" + _0x5378(255987710, "&ihF"));
              var _0x1d872a = "{\"Invoice\": \"" + _0x1a8754 + "\", \"Tanggal Order\": \"" + _0x190906 + "\", \"Nama\": \"" + _0x54733f + "\", \"Email\": \"" + _0x7ceb95 + "\", \"Nomor HP\": \"" + _0x5d54e2 + ("\", \"Alamat" + _0x5378(249630718, "NnbG")) + _0x73cd76 + (_0x5378(135794686, "QC&8") + _0x5378(389943294, "irqu")) + _0x64ae45 + "\", \"Pengiriman\": \"" + _0x353d23 + (_0x5378(345182206, "Yd]5") + "n\": \"") + _0x16415e + "\"}";
              var _0x53b7b2 = "{\"Invoice\": \"" + _0x1a8754 + "\", \"Tanggal Order\": \"" + formatTanggalangka(_0x40e488) + "\", \"Nama\": \"" + _0x54733f + "\", \"Email\": \"" + _0x7ceb95 + "\", \"Nomor HP\": \"" + _0x5d54e2 + "\", \"Alamat\": \"" + _0x73cd76 + "\", \"Pembayaran\": \"" + _0x64ae45 + ("\", \"Pengir" + _0x5378(340398078, "(]6h")) + _0x353d23 + (_0x5378(326766590, "kpno") + _0x5378(454234110, "RAO[")) + _0x16415e + "\"}";
              var _0x3f566d = localStorage.getItem("simpleCart_items");
              var _0x3bbf08 = _0x5378(58003454, "&ihF") + ": \"" + _0x238d6b + ("\", \"Total " + _0x5378(22745086, "*J]!") + "\": \"") + _0xf6d555 + "\"}";
              var _0x142303 = formcheckoutgmail + "/formResponse?";
              if (optionlogin == "on") {
                db.collection("dataproduk").add({
                  "id": _0x3d5547,
                  "inv": _0x1a8754,
                  "idproduk": _0x4f4dbd,
                  "data": _0x53b7b2,
                  "produk": _0x3f566d,
                  "total": _0x3bbf08,
                  "status": "0"
                }).then(_0x13d502 => {
                  if (settingSheet == "on") {
                    kirimGooglesheet(_0xf8c110);
                  }
                  if (belibeliOrder == "on") {
                    kirimNotifikasi(_0x1e65a0);
                  }
                  if (checkapiWA != "off") {
                    const _0x13b8ae = new FormData();
                    _0x13b8ae.append("target", _0x5d54e2);
                    _0x13b8ae.append("message", _0x157e58);
                    _0x13b8ae.append("delay", "2");
                    _0x13b8ae.append("countryCode", "62");
                    $.ajax({
                      "url": "https://api.fonnte.com/send",
                      "type": "POST",
                      "headers": {
                        "Authorization": apikeyWA
                      },
                      "processData": false,
                      "contentType": false,
                      "data": _0x13b8ae,
                      "beforeSend": function () {
                        notification("Data sedang diproses");
                      },
                      "success": function (_0x18f005) {
                        if (_0x18f005.status == true) {
                          if (formcheckoutgmail != "off") {
                            notification("<div class='peringatan sukses'><svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'><path d='M12 2C6.5 2 2 6.5 2 12S6.5 22 12 22 22 17.5 22 12 17.5 2 12 2M12 20C7.59 20 4 16.41 4 12S7.59 4 12 4 20 7.59 20 12 16.41 20 12 20M16.59 7.58L10 14.17L7.41 11.59L6 13L10 17L18 9L16.59 7.58Z' /></svg></div>Pesanan Anda berhasil terkirim, silahkan cek WA dan Email Anda");
                            kirimcheckoutGmail(_0x142303, _0x1d872a, _0x3f566d, _0x3bbf08);
                          } else if (formcheckoutgmail == "off") {
                            notification("<div class='peringatan sukses'><svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'><path d='M12 2C6.5 2 2 6.5 2 12S6.5 22 12 22 22 17.5 22 12 17.5 2 12 2M12 20C7.59 20 4 16.41 4 12S7.59 4 12 4 20 7.59 20 12 16.41 20 12 20M16.59 7.58L10 14.17L7.41 11.59L6 13L10 17L18 9L16.59 7.58Z' /></svg></div>Pesanan Anda berhasil terkirim, silahkan cek WA Anda");
                          }
                          setTimeout(function () {
                            localStorage.removeItem("simpleCart_items");
                            window.location.href = urlHome;
                          }, 0x2710);
                        } else {
                          if (formcheckoutgmail != "off") {
                            notification("<div class='peringatan sukses'><svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'><path d='M12 2C6.5 2 2 6.5 2 12S6.5 22 12 22 22 17.5 22 12 17.5 2 12 2M12 20C7.59 20 4 16.41 4 12S7.59 4 12 4 20 7.59 20 12 16.41 20 12 20M16.59 7.58L10 14.17L7.41 11.59L6 13L10 17L18 9L16.59 7.58Z' /></svg></div>Pesanan Anda berhasil terkirim, silahkan cek WA dan Email Anda");
                            window.open(_0x4f37cf, "_blank");
                            kirimcheckoutGmail(_0x142303, _0x1d872a, _0x3f566d, _0x3bbf08);
                          } else if (formcheckoutgmail == "off") {
                            notification("<div class='peringatan sukses'><svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'><path d='M12 2C6.5 2 2 6.5 2 12S6.5 22 12 22 22 17.5 22 12 17.5 2 12 2M12 20C7.59 20 4 16.41 4 12S7.59 4 12 4 20 7.59 20 12 16.41 20 12 20M16.59 7.58L10 14.17L7.41 11.59L6 13L10 17L18 9L16.59 7.58Z' /></svg></div>Pesanan Anda berhasil terkirim, silahkan cek WA Anda");
                            window.open(_0x4f37cf, "_blank");
                          }
                          setTimeout(function () {
                            localStorage.removeItem("simpleCart_items");
                            window.location.href = urlHome;
                          }, 0x2710);
                        }
                      }
                    });
                  } else if (checkapiWA == "off") {
                    notification("Data sedang diproses");
                    setTimeout(function () {
                      notification("<div class='peringatan sukses'><svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'><path d='M12 2C6.5 2 2 6.5 2 12S6.5 22 12 22 22 17.5 22 12 17.5 2 12 2M12 20C7.59 20 4 16.41 4 12S7.59 4 12 4 20 7.59 20 12 16.41 20 12 20M16.59 7.58L10 14.17L7.41 11.59L6 13L10 17L18 9L16.59 7.58Z' /></svg></div>Pesanan berhasil dikirim");
                      window.open(_0x4f37cf, _0x5378(6820274, "005A"));
                      if (formcheckoutgmail != "off") {
                        kirimcheckoutGmail(_0x142303, _0x1d872a, _0x3f566d, _0x3bbf08);
                      }
                      setTimeout(function () {
                        localStorage.removeItem("simpleCart_items");
                        window.location.href = urlHome;
                      }, 0x2710);
                    }, 0xbb8);
                  }
                })["catch"](_0xc04c4e => {
                  notification("Terjadi error saat order, silahkan coba lagi");
                });
              } else {
                if (optionlogin == "off") {
                  if (settingSheet == "on") {
                    kirimGooglesheet(_0xf8c110);
                  }
                  if (belibeliOrder == "on") {
                    kirimNotifikasi(_0x1e65a0);
                  }
                  if (checkapiWA != "off") {
                    const _0x5504ed = new FormData();
                    _0x5504ed[_0x5378(271781886, "4bEN")]("target", _0x5d54e2);
                    _0x5504ed.append("message", _0x157e58);
                    _0x5504ed.append("delay", "2");
                    _0x5504ed[_0x5378(572264446, "*J]!")](_0x5378(269357054, "TYxK") + "e", "62");
                    $.ajax({
                      "url": "https://api.fonnte.com/send",
                      "type": _0x5378(317984766, "RAO["),
                      "headers": {
                        "Authorization": apikeyWA
                      },
                      "processData": false,
                      "contentType": false,
                      "data": _0x5504ed,
                      "beforeSend": function () {
                        notification("Data sedang diproses");
                      },
                      "success": function (_0x34afef) {
                        if (_0x34afef.status == true) {
                          if (formcheckoutgmail != "off") {
                            notification("<div class='peringatan sukses'><svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'><path d='M12 2C6.5 2 2 6.5 2 12S6.5 22 12 22 22 17.5 22 12 17.5 2 12 2M12 20C7.59 20 4 16.41 4 12S7.59 4 12 4 20 7.59 20 12 16.41 20 12 20M16.59 7.58L10 14.17L7.41 11.59L6 13L10 17L18 9L16.59 7.58Z' /></svg></div>Pesanan Anda berhasil terkirim, silahkan cek WA dan Email Anda");
                            kirimcheckoutGmail(_0x142303, _0x1d872a, _0x3f566d, _0x3bbf08);
                          } else if (formcheckoutgmail == "off") {
                            notification("<div class='peringatan sukses'><svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'><path d='M12 2C6.5 2 2 6.5 2 12S6.5 22 12 22 22 17.5 22 12 17.5 2 12 2M12 20C7.59 20 4 16.41 4 12S7.59 4 12 4 20 7.59 20 12 16.41 20 12 20M16.59 7.58L10 14.17L7.41 11.59L6 13L10 17L18 9L16.59 7.58Z' /></svg></div>Pesanan Anda berhasil terkirim, silahkan cek WA Anda");
                          }
                          setTimeout(function () {
                            localStorage.removeItem("simpleCart_items");
                            window.location.href = urlHome;
                          }, 0x2710);
                        } else {
                          if (formcheckoutgmail != "off") {
                            notification("<div class='peringatan sukses'><svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'><path d='M12 2C6.5 2 2 6.5 2 12S6.5 22 12 22 22 17.5 22 12 17.5 2 12 2M12 20C7.59 20 4 16.41 4 12S7.59 4 12 4 20 7.59 20 12 16.41 20 12 20M16.59 7.58L10 14.17L7.41 11.59L6 13L10 17L18 9L16.59 7.58Z' /></svg></div>Pesanan Anda berhasil terkirim, silahkan cek WA dan Email Anda");
                            window.open(_0x4f37cf, "_blank");
                            kirimcheckoutGmail(_0x142303, _0x1d872a, _0x3f566d, _0x3bbf08);
                          } else if (formcheckoutgmail == "off") {
                            notification("<div class='peringatan sukses'><svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'><path d='M12 2C6.5 2 2 6.5 2 12S6.5 22 12 22 22 17.5 22 12 17.5 2 12 2M12 20C7.59 20 4 16.41 4 12S7.59 4 12 4 20 7.59 20 12 16.41 20 12 20M16.59 7.58L10 14.17L7.41 11.59L6 13L10 17L18 9L16.59 7.58Z' /></svg></div>Pesanan Anda berhasil terkirim, silahkan cek WA Anda");
                            window.open(_0x4f37cf, "_blank");
                          }
                          setTimeout(function () {
                            localStorage.removeItem("simpleCart_items");
                            window.location.href = urlHome;
                          }, 0x2710);
                        }
                      }
                    });
                  } else if (checkapiWA == "off") {
                    notification("Data sedang diproses");
                    setTimeout(function () {
                      notification("<div class='peringatan sukses'><svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'><path d='M12 2C6.5 2 2 6.5 2 12S6.5 22 12 22 22 17.5 22 12 17.5 2 12 2M12 20C7.59 20 4 16.41 4 12S7.59 4 12 4 20 7.59 20 12 16.41 20 12 20M16.59 7.58L10 14.17L7.41 11.59L6 13L10 17L18 9L16.59 7.58Z' /></svg></div>Pesanan berhasil dikirim");
                      window.open(_0x4f37cf, "_blank");
                      if (formcheckoutgmail != "off") {
                        kirimcheckoutGmail(_0x142303, _0x1d872a, _0x3f566d, _0x3bbf08);
                      }
                      setTimeout(function () {
                        localStorage.removeItem("simpleCart_items");
                        window.location.href = urlHome;
                      }, 0x2710);
                    }, 0xbb8);
                  }
                }
              }
              fbq("track", "Purchase", {
                "value": _0xf6d555,
                "currency": "IDR"
              });
              return false;
            }
          }
        }
      }
    }
  }
});
