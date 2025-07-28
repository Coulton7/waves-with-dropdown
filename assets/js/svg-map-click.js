document.addEventListener("DOMContentLoaded", function () {
  var allRegions = document.querySelectorAll("#Lands > *");
  var x = document.querySelector('.location-overlay');
  var fairfield = document.querySelectorAll(".Fairfield");
  var rockford = document.querySelectorAll(".Rockford");
  var kingsport = document.querySelectorAll(".Kingsport");
  var lombard = document.querySelectorAll(".Lombard");
  var cedar = document.querySelectorAll(".Cedar");
  var corpus = document.querySelectorAll(".Corpus");
  var odessa = document.querySelectorAll(".Odessa");
  var longview = document.querySelectorAll(".Longview");
  var me = document.querySelectorAll(".ME");
  var nh = document.querySelectorAll(".NH");
  var vt = document.querySelectorAll(".VT");
  var ny = document.querySelectorAll(".NY");
  var ma = document.querySelectorAll(".MA");
  var ct = document.querySelectorAll(".CT");
  var pa = document.querySelectorAll(".PA");
  var ri = document.querySelectorAll(".RI");
  var nj = document.querySelectorAll(".NJ");
  var de = document.querySelectorAll(".DE");
  var md = document.querySelectorAll(".MD");
  var wv = document.querySelectorAll(".WV");
  var va = document.querySelectorAll(".VA");
  var nc = document.querySelectorAll(".NC");
  var sc = document.querySelectorAll(".SC");
  var ga = document.querySelectorAll(".GA");
  var fl = document.querySelectorAll(".FL");
  var al = document.querySelectorAll(".AL");
  var ms = document.querySelectorAll(".MS");
  var tn = document.querySelectorAll(".TN");
  var ky = document.querySelectorAll(".KY");
  var oh = document.querySelectorAll(".OH");
  var mi = document.querySelectorAll(".MI");
  var ind = document.querySelectorAll(".IN"); 
  var il  = document.querySelectorAll(".IL");
  var wi = document.querySelectorAll(".WI");
  var mn = document.querySelectorAll(".MN");
  var ia = document.querySelectorAll(".IA");
  var mo = document.querySelectorAll(".MO");
  var ar = document.querySelectorAll(".AR");
  var la = document.querySelectorAll(".LA");
  var tx = document.querySelectorAll(".TX");
  var ok = document.querySelectorAll(".OK");
  var ks = document.querySelectorAll(".KS");
  var ne = document.querySelectorAll(".NE");
  var sd = document.querySelectorAll(".SD");
  var nd = document.querySelectorAll(".ND");
  var mt = document.querySelectorAll(".MT");
  var wy = document.querySelectorAll(".WY");
  var co = document.querySelectorAll(".CO");
  var nm = document.querySelectorAll(".NM");
  var az = document.querySelectorAll(".AZ");
  var ut = document.querySelectorAll(".UT");
  var id = document.querySelectorAll(".ID");
  var wa = document.querySelectorAll(".WA");
  var or = document.querySelectorAll(".OR");
  var nv = document.querySelectorAll(".NV");
  var ca = document.querySelectorAll(".CA");
  var ak = document.querySelectorAll(".AK");
  var hi = document.querySelectorAll(".HI");


  allRegions.forEach(function (el) {
    el.addEventListener("click", function () {
      var link = this.getAttribute('id');
      var state;
      switch (true) {
        case link == "Land-Maine":
          state = "Maine";
          fairfield.forEach((fairfield) => {
            fairfield.classList.add('show');
          });
          me.forEach((me) => {
            me.classList.add('show');
          });
          break;
        case link == "Land-NH":
          state = "New Hampshire";
          fairfield.forEach((fairfield) => {
            fairfield.classList.add('show');
          });
          nh.forEach((nh) => {
            nh.classList.add('show');
          });
          break;
        case link == "Land-Vt":
          state = "Vermont";
          fairfield.forEach((fairfield) => {
            fairfield.classList.add('show');
          });
          vt.forEach((vt) => {
            vt.classList.add('show');
          });
          break;
        case link == "Land-NewYork":
          state = "New York";
          fairfield.forEach((fairfield) => {
            fairfield.classList.add('show');
          });
          ny.forEach((ny) => {
            ny.classList.add('show');
          });
          break;
        case link == "Land-NewYork_2":
          state = "New York";
          fairfield.forEach((fairfield) => {
            fairfield.classList.add('show');
          });
          ny.forEach((ny) => {
            ny.classList.add('show');
          });
          break;
        case link == "Land-Mass":
          state = "Massachusetts";
          fairfield.forEach((fairfield) => {
            fairfield.classList.add('show');
          });
          ma.forEach((ma) => {
            ma.classList.add('show');
          });
          break;
        case link == "Land-Conn":
          state = "Connecticut";
          fairfield.forEach((fairfield) => {
            fairfield.classList.add('show');
          });
          ct.forEach((ct) => {
            ct.classList.add('show');
          });
          break;
        case link == "Land-Pennsylvania":
          state = "Pennsylvania";
          fairfield.forEach((fairfield) => {
            fairfield.classList.add('show');
          });
          pa.forEach((pa) => {
            pa.classList.add('show');
          });
          break;
        case link == "Land-RI":
          state = "Rhode Island";
          fairfield.forEach((fairfield) => {
            fairfield.classList.add('show');
          });
          ri.forEach((ri) => {
            ri.classList.add('show');
          });
          break;
        case link == "Land-NewJersey":
          state = "New Jersey";
          fairfield.forEach((fairfield) => {
            fairfield.classList.add('show');
          });
          nj.forEach((nj) => {
            nj.classList.add('show');
          });
          break;
        case link == "Land-Del":
          state = "Delaware";
          fairfield.forEach((fairfield) => {
            fairfield.classList.add('show');
          });
          de.forEach((de) => {
            de.classList.add('show');
          });
          break;
        case link == "Land-Md":
          state = "Maryland";
          fairfield.forEach((fairfield) => {
            fairfield.classList.add('show');
          });
          md.forEach((md) => {
            md.classList.add('show');
          });
          break;
        case link == "Land-WestVirginia":
          state = "West Virginia";
          fairfield.forEach((fairfield) => {
            fairfield.classList.add('show');
          });
          wv.forEach((wv) => {
            wv.classList.add('show');
          });
          break;
        case link == "Land-Virginia_1_":
          state = "Virginia";
          fairfield.forEach((fairfield) => {
            fairfield.classList.add('show');
          });
          va.forEach((va) => {
            va.classList.add('show');
          });
          break;
        case link == "Land-Virginia_2_":
          state = "Virginia";
          fairfield.forEach((fairfield) => {
            fairfield.classList.add('show');
          });
          va.forEach((va) => {
            va.classList.add('show');
          });
          break;
        case link == "Land-NorthCarolina_1_":
          state = "North Carolina";
          rockford.forEach((rockford) => {
            rockford.classList.add('show');
          });
          nc.forEach((nc) => {
            nc.classList.add('show');
          });
          break;
        case link == "Land-SouthCarolina":
          state = "South Carolina";
          rockford.forEach((rockford) => {
            rockford.classList.add('show');
          });
          sc.forEach((sc) => {
            sc.classList.add('show');
          });
          break;
        case link == "Land-Georgia":
          state = "Georgia";
          rockford.forEach((rockford) => {
            rockford.classList.add('show');
          });
          ga.forEach((ga) => {
            ga.classList.add('show');
          });
          break;
        case link == "Land-Florida":
          state = "Florida";
          rockford.forEach((rockford) => {
            rockford.classList.add('show');
          });
          fl.forEach((fl) => {
            fl.classList.add('show');
          });
          break;
        case link == "Land-Alabama":
          state = "Alabama";
          rockford.forEach((rockford) => {
            rockford.classList.add('show');
          });
          al.forEach((al) => {
            al.classList.add('show');
          });
          break;
        case link == "Land-Mississippi":
          state = "Mississippi";
          rockford.forEach((rockford) => {
            rockford.classList.add('show');
          });
          ms.forEach((ms) => {
            ms.classList.add('show');
          });
          break;
        case link == "Land-Tennessee":
          state = "Tennessee";
          rockford.forEach((rockford) => {
            rockford.classList.add('show');
          });
          kingsport.forEach((kingsport) => {
            kingsport.classList.add('show');
          });
          tn.forEach((tn) => {
            tn.classList.add('show');
          });
          break;
        case link == "Land-Kentucky":
          state = "Kentucky";
          rockford.forEach((rockford) => {
            rockford.classList.add('show');
          });
          ky.forEach((ky) => {
            ky.classList.add('show');
          });
          break;
        case link == "Land-Ohio":
          state = "Ohio";
          rockford.forEach((rockford) => {
            rockford.classList.add('show');
          });
          oh.forEach((oh) => {
            oh.classList.add('show');
          });
          break;
        case link == "Land-Michigan_1_":
          state = "Michigan";
          fairfield.forEach((fairfield) => {
            fairfield.classList.add('show');
          });
          mi.forEach((mi) => {
            mi.classList.add('show');
          });
          break;
        case link == "Land-Michigan_2_":
          state = "Michigan";
          fairfield.forEach((fairfield) => {
            fairfield.classList.add('show');
          });
          mi.forEach((mi) => {
            mi.classList.add('show');
          });
          break;
        case link == "Land-Michigan_3_":
          state = "Michigan";
          fairfield.forEach((fairfield) => {
            fairfield.classList.add('show');
          });
          mi.forEach((mi) => {
            mi.classList.add('show');
          });
          break;
        case link == "Land-Indiana":
          state = "Indiana";
          lombard.forEach((lombard) => {
            lombard.classList.add('show');
          });
          ind.forEach((ind) => {
            ind.classList.add('show');
          });
          break;
        case link == "Land-Illinois":
          state = "Illinois";
          lombard.forEach((lombard) => {
            lombard.classList.add('show');
          });
          il.forEach((il) => {
            il.classList.add('show');
          });
          break;
        case link == "Land-Wisconsin":
          state = "Wisconsin";
          fairfield.forEach((fairfield) => {
            fairfield.classList.add('show');
          });
          lombard.forEach((lombard) => {
            lombard.classList.add('show');
          });
          wi.forEach((wi) => {
            wi.classList.add('show');
          });
          break;
        case link == "Land-Minnesota":
          state = "Minnesota";
          fairfield.forEach((fairfield) => {
            fairfield.classList.add('show');
          });
          mn.forEach((mn) => {
            mn.classList.add('show');
          });
          break;
        case link == "Land-Iowa":
          state = "Iowa";
          cedar.forEach((cedar) => {
            cedar.classList.add('show');
          });
          ia.forEach((ia) => {
            ia.classList.add('show');
          });
          break;
        case link == "Land-Missouri":
          state = "Missouri";
          cedar.forEach((cedar) => {
            cedar.classList.add('show');
          });
          mo.forEach((mo) => {
            mo.classList.add('show');
          });
          break;
        case link == "Land-Arkansas":
          state = "Arkansas";
          rockford.forEach((rockford) => {
            rockford.classList.add('show');
          });
          ar.forEach((ar) => {
            ar.classList.add('show');
          });
          break;
        case link == "Land-Louisiana":
          state = "Louisiana";
          rockford.forEach((rockford) => {
            rockford.classList.add('show');
          });
          la.forEach((la) => {
            la.classList.add('show');
          });
          break;
        case link == "Land-Texas":
          state = "Texas";
          corpus.forEach((corpus) => {
            corpus.classList.add('show');
          });
          odessa.forEach((odessa) => {
            odessa.classList.add('show');
          });
          tx.forEach((tx) => {
            tx.classList.add('show');
          });
          break;
        case link == "Land-Oklahoma":
          state = "Oklahoma";
          rockford.forEach((rockford) => {
            rockford.classList.add('show');
          });
          ok.forEach((ok) => {
            ok.classList.add('show');
          });
          break;
        case link == "Land-Kansas":
          state = "Kansas";
          cedar.forEach((cedar) => {
            cedar.classList.add('show');
          });
          ks.forEach((ks) => {
            ks.classList.add('show');
          });
          break;
        case link == "Land-Nebraska":
          state = "Nebraska";
          cedar.forEach((cedar) => {
            cedar.classList.add('show');
          });
          ne.forEach((ne) => {
            ne.classList.add('show');
          });
          break;
        case link == "Land-SouthDakota":
          state = "South Dakota";
          cedar.forEach((cedar) => {
            cedar.classList.add('show');
          });
          sd.forEach((sd) => {
            sd.classList.add('show');
          });
          break;
        case link == "Land-NorthDakota":
          state = "North Dakota";
          cedar.forEach((cedar) => {
            cedar.classList.add('show');
          });
          nd.forEach((nd) => {
            nd.classList.add('show');
          });
          break;
        case link == "Land-Montana":
          state = "Montana";
          longview.forEach((longview) => {
            longview.classList.add('show');
          });
          mt.forEach((mt) => {
            mt.classList.add('show');
          });
          break;
        case link == "Land-Wyoming":
          state = "Wyoming";
          longview.forEach((longview) => {
            longview.classList.add('show');
          });
          wy.forEach((wy) => {
            wy.classList.add('show');
          });
          break;
        case link == "Land-Colorado":
          state = "Colorado";
          longview.forEach((longview) => {
            longview.classList.add('show');
          });
          co.forEach((co) => {
            co.classList.add('show');
          });
          break;
        case link == "Land-NewMexico":
          state = "New Mexico";
          odessa.forEach((odessa) => {
            odessa.classList.add('show');
          });
          nm.forEach((nm) => {
            nm.classList.add('show');
          });
          break;
        case link == "Land-Arizona":
          state = "Arizona";
          rockford.forEach((rockford) => {
            rockford.classList.add('show');
          });
          az.forEach((az) => {
            az.classList.add('show');
          });
          break;
        case link == "Land-Utah":
          state = "Utah";
          longview.forEach((longview) => {
            longview.classList.add('show');
          });
          ut.forEach((ut) => {
            ut.classList.add('show');
          });
          break;
        case link == "Land-Idaho":
          state = "Idaho";
          longview.forEach((longview) => {
            longview.classList.add('show');
          });
          id.forEach((id) => {
            id.classList.add('show');
          });
          break;
        case link == "Land-Washington":
          state = "Washington";
          longview.forEach((longview) => {
            longview.classList.add('show');
          });
          wa.forEach((wa) => {
            wa.classList.add('show');
          });
          break;
        case link == "Land-Oregona":
          state = "Oregon";
          longview.forEach((longview) => {
            longview.classList.add('show');
          });
          or.forEach((or) => {
            or.classList.add('show');
          });
          break;
        case link == "Land-Nevada":
          state = "Nevada";
          longview.forEach((longview) => {
            longview.classList.add('show');
          });
          nv.forEach((nv) => {
            nv.classList.add('show');
          });
          break;
        case link == "Land-California":
          state = "California";
          rockford.forEach((rockford) => {
            rockford.classList.add('show');
          });
          ca.forEach((ca) => {
            ca.classList.add('show');
          });
          break;
        case link == "Land-Alaska":
          state = "Alaska";
          longview.forEach((longview) => {
            longview.classList.add('show');
          });
          ak.forEach((ak) => {
            ak.classList.add('show');
          });
          break;
        case link == "Land-Hawaii":
          state = "Hawaii";
          rockford.forEach((rockford) => {
            rockford.classList.add('show');
          });
          hi.forEach((hi) => {
            hi.classList.add('show');
          });
          break;
        default:
          state = "US State";
          rockford.forEach((rockford) => {
            rockford.classList.add('show');
          });
          break;
      }

      x.style.height = "100%";
      x.style.bottom = "0";
      document.querySelector(".location-overlay").classList.add('loc-close');
      document.querySelector("html").classList.add("noscroll");
      document.querySelector("body").classList.add("noscroll");
      document.querySelector(".dialog-off-canvas-main-canvas").classList.add("noscroll");
      document.getElementById("int-map").classList.add("pe-none");
      document.querySelector(".loc-close").addEventListener("click", function () {
        document.querySelector("html").classList.remove("noscroll");  
        document.querySelector("body").classList.remove("noscroll");
        document.querySelector(".dialog-off-canvas-main-canvas").classList.remove("noscroll");
        document.getElementById("int-map").classList.remove("pe-none");
          x.style.height = "0%";
          document.querySelector(".location-overlay").classList.remove("loc-close");

          switch (true) {
            case link == "Land-Maine":
              state = "Maine";
              fairfield.forEach((fairfield) => {
                fairfield.classList.remove('show');
              });
              me.forEach((me) => {
                me.classList.remove('show');
              });
              break;
            case link == "Land-NH":
              state = "New Hampshire";
              fairfield.forEach((fairfield) => {
                fairfield.classList.remove('show');
              });
              nh.forEach((nh) => {
                nh.classList.remove('show');
              });
              break;
            case link == "Land-Vt":
              state = "Vermont";
              fairfield.forEach((fairfield) => {
                fairfield.classList.remove('show');
              });
              vt.forEach((vt) => {
                vt.classList.remove('show');
              });
              break;
            case link == "Land-NewYork":
              state = "New York";
              fairfield.forEach((fairfield) => {
                fairfield.classList.remove('show');
              });
              ny.forEach((ny) => {
                ny.classList.remove('show');
              });
              break;
            case link == "Land-NewYork_2":
              state = "New York";
              fairfield.forEach((fairfield) => {
                fairfield.classList.remove('show');
              });
              ny.forEach((ny) => {
                ny.classList.remove('show');
              });
              break;
            case link == "Land-Mass":
              state = "Massachusetts";
              fairfield.forEach((fairfield) => {
                fairfield.classList.remove('show');
              });
              ma.forEach((ma) => {
                ma.classList.remove('show');
              });
              break;
            case link == "Land-Conn":
              state = "Connecticut";
              fairfield.forEach((fairfield) => {
                fairfield.classList.remove('show');
              });
              ct.forEach((ct) => {
                ct.classList.remove('show');
              });
              break;
            case link == "Land-Pennsylvania":
              state = "Pennsylvania";
              fairfield.forEach((fairfield) => {
                fairfield.classList.remove('show');
              });
              pa.forEach((pa) => {
                pa.classList.remove('show');
              });
              break;
            case link == "Land-RI":
              state = "Rhode Island";
              fairfield.forEach((fairfield) => {
                fairfield.classList.remove('show');
              });
              ri.forEach((ri) => {
                ri.classList.remove('show');
              });
              break;
            case link == "Land-NewJersey":
              state = "New Jersey";
              fairfield.forEach((fairfield) => {
                fairfield.classList.remove('show');
              });
              nj.forEach((nj) => {
                nj.classList.remove('show');
              });
              break;
            case link == "Land-Del":
              state = "Delaware";
              fairfield.forEach((fairfield) => {
                fairfield.classList.remove('show');
              });
              de.forEach((de) => {
                de.classList.remove('show');
              });
              break;
            case link == "Land-Md":
              state = "Maryland";
              fairfield.forEach((fairfield) => {
                fairfield.classList.remove('show');
              });
              md.forEach((md) => {
                md.classList.remove('show');
              });
              break;
            case link == "Land-WestVirginia":
              state = "West Virginia";
              fairfield.forEach((fairfield) => {
                fairfield.classList.remove('show');
              });
              wv.forEach((wv) => {
                wv.classList.remove('show');
              });
              break;
            case link == "Land-Virginia_1_":
              state = "Virginia";
              fairfield.forEach((fairfield) => {
                fairfield.classList.remove('show');
              });
              va.forEach((va) => {
                va.classList.remove('show');
              });
              break;
            case link == "Land-Virginia_2_":
              state = "Virginia";
              fairfield.forEach((fairfield) => {
                fairfield.classList.remove('show');
              });
              va.forEach((va) => {
                va.classList.remove('show');
              });
              break;
            case link == "Land-NorthCarolina_1_":
              state = "North Carolina";
              rockford.forEach((rockford) => {
                rockford.classList.remove('show');
              });
              nc.forEach((nc) => {
                nc.classList.remove('show');
              });
              break;
            case link == "Land-SouthCarolina":
              state = "South Carolina";
              rockford.forEach((rockford) => {
                rockford.classList.remove('show');
              });
              sc.forEach((sc) => {
                sc.classList.remove('show');
              });
              break;
            case link == "Land-Georgia":
              state = "Georgia";
              rockford.forEach((rockford) => {
                rockford.classList.remove('show');
              });
              ga.forEach((ga) => {
                ga.classList.remove('show');
              });
              break;
            case link == "Land-Florida":
              state = "Florida";
              rockford.forEach((rockford) => {
                rockford.classList.remove('show');
              });
              fl.forEach((fl) => {
                fl.classList.remove('show');
              });
              break;
            case link == "Land-Alabama":
              state = "Alabama";
              rockford.forEach((rockford) => {
                rockford.classList.remove('show');
              });
              al.forEach((al) => {
                al.classList.remove('show');
              });
              break;
            case link == "Land-Mississippi":
              state = "Mississippi";
              rockford.forEach((rockford) => {
                rockford.classList.remove('show');
              });
              ms.forEach((ms) => {
                ms.classList.remove('show');
              });
              break;
            case link == "Land-Tennessee":
              state = "Tennessee";
              rockford.forEach((rockford) => {
                rockford.classList.remove('show');
              });
              kingsport.forEach((kingsport) => {
                kingsport.classList.remove('show');
              });
              tn.forEach((tn) => {
                tn.classList.remove('show');
              });
              break;
            case link == "Land-Kentucky":
              state = "Kentucky";
              rockford.forEach((rockford) => {
                rockford.classList.remove('show');
              });
              ky.forEach((ky) => {
                ky.classList.remove('show');
              });
              break;
            case link == "Land-Ohio":
              state = "Ohio";
              rockford.forEach((rockford) => {
                rockford.classList.remove('show');
              });
              oh.forEach((oh) => {
                oh.classList.remove('show');
              });
              break;
            case link == "Land-Michigan_1_":
              state = "Michigan";
              fairfield.forEach((fairfield) => {
                fairfield.classList.remove('show');
              });
              mi.forEach((mi) => {
                mi.classList.remove('show');
              });
              break;
            case link == "Land-Michigan_2_":
              state = "Michigan";
              fairfield.forEach((fairfield) => {
                fairfield.classList.remove('show');
              });
              mi.forEach((mi) => {
                mi.classList.remove('show');
              });
              break;
            case link == "Land-Michigan_3_":
              state = "Michigan";
              fairfield.forEach((fairfield) => {
                fairfield.classList.remove('show');
              });
              mi.forEach((mi) => {
                mi.classList.remove('show');
              });
              break;
            case link == "Land-Indiana":
              state = "Indiana";
              lombard.forEach((lombard) => {
                lombard.classList.remove('show');
              });
              ind.forEach((ind) => {
                ind.classList.remove('show');
              });
              break;
            case link == "Land-Illinois":
              state = "Illinois";
              lombard.forEach((lombard) => {
                lombard.classList.remove('show');
              });
              il.forEach((il) => {
                il.classList.remove('show');
              });
              break;
            case link == "Land-Wisconsin":
              state = "Wisconsin";
              fairfield.forEach((fairfield) => {
                fairfield.classList.remove('show');
              });
              lombard.forEach((lombard) => {
                lombard.classList.remove('show');
              });
              wi.forEach((wi) => {
                wi.classList.remove('show');
              });
              break;
            case link == "Land-Minnesota":
              state = "Minnesota";
              fairfield.forEach((fairfield) => {
                fairfield.classList.remove('show');
              });
              mn.forEach((mn) => {
                mn.classList.remove('show');
              });
              break;
            case link == "Land-Iowa":
              state = "Iowa";
              cedar.forEach((cedar) => {
                cedar.classList.remove('show');
              });
              ia.forEach((ia) => {
                ia.classList.remove('show');
              });
              break;
            case link == "Land-Missouri":
              state = "Missouri";
              cedar.forEach((cedar) => {
                cedar.classList.remove('show');
              });
              mo.forEach((mo) => {
                mo.classList.remove('show');
              });
              break;
            case link == "Land-Arkansas":
              state = "Arkansas";
              rockford.forEach((rockford) => {
                rockford.classList.remove('show');
              });
              ar.forEach((ar) => {
                ar.classList.remove('show');
              });
              break;
            case link == "Land-Louisiana":
              state = "Louisiana";
              rockford.forEach((rockford) => {
                rockford.classList.remove('show');
              });
              la.forEach((la) => {
                la.classList.remove('show');
              });
              break;
            case link == "Land-Texas":
              state = "Texas";
              corpus.forEach((corpus) => {
                corpus.classList.remove('show');
              });
              odessa.forEach((odessa) => {
                odessa.classList.remove('show');
              });
              tx.forEach((tx) => {
                tx.classList.remove('show');
              });
              break;
            case link == "Land-Oklahoma":
              state = "Oklahoma";
              rockford.forEach((rockford) => {
                rockford.classList.remove('show');
              });
              ok.forEach((ok) => {
                ok.classList.remove('show');
              });
              break;
            case link == "Land-Kansas":
              state = "Kansas";
              cedar.forEach((cedar) => {
                cedar.classList.remove('show');
              });
              ks.forEach((ks) => {
                ks.classList.remove('show');
              });
              break;
            case link == "Land-Nebraska":
              state = "Nebraska";
              cedar.forEach((cedar) => {
                cedar.classList.remove('show');
              });
              ne.forEach((ne) => {
                ne.classList.remove('show');
              });
              break;
            case link == "Land-SouthDakota":
              state = "South Dakota";
              cedar.forEach((cedar) => {
                cedar.classList.remove('show');
              });
              sd.forEach((sd) => {
                sd.classList.remove('show');
              });
              break;
            case link == "Land-NorthDakota":
              state = "North Dakota";
              cedar.forEach((cedar) => {
                cedar.classList.remove('show');
              });
              nd.forEach((nd) => {
                nd.classList.remove('show');
              });
              break;
            case link == "Land-Montana":
              state = "Montana";
              longview.forEach((longview) => {
                longview.classList.remove('show');
              });
              mt.forEach((mt) => {
                mt.classList.remove('show');
              });
              break;
            case link == "Land-Wyoming":
              state = "Wyoming";
              longview.forEach((longview) => {
                longview.classList.remove('show');
              });
              wy.forEach((wy) => {
                wy.classList.remove('show');
              });
              break;
            case link == "Land-Colorado":
              state = "Colorado";
              longview.forEach((longview) => {
                longview.classList.remove('show');
              });
              co.forEach((co) => {
                co.classList.remove('show');
              });
              break;
            case link == "Land-NewMexico":
              state = "New Mexico";
              lombard.forEach((lombard) => {
                lombard.classList.remove('show');
              });
              nm.forEach((nm) => {
                nm.classList.remove('show');
              });
              break;
            case link == "Land-Arizona":
              state = "Arizona";
              rockford.forEach((rockford) => {
                rockford.classList.remove('show');
              });
              az.forEach((az) => {
                az.classList.remove('show');
              });
              break;
            case link == "Land-Utah":
              state = "Utah";
              longview.forEach((longview) => {
                longview.classList.remove('show');
              });
              ut.forEach((ut) => {
                ut.classList.remove('show');
              });
              break;
            case link == "Land-Idaho":
              state = "Idaho";
              longview.forEach((longview) => {
                longview.classList.remove('show');
              });
              id.forEach((id) => {
                id.classList.remove('show');
              });
              break;
            case link == "Land-Washington":
              state = "Washington";
              longview.forEach((longview) => {
                longview.classList.remove('show');
              });
              wa.forEach((wa) => {
                wa.classList.remove('show');
              });
              break;
            case link == "Land-Oregona":
              state = "Oregon";
              longview.forEach((longview) => {
                longview.classList.remove('show');
              });
              or.forEach((or) => {
                or.classList.remove('show');
              });
              break;
            case link == "Land-Nevada":
              state = "Nevada";
              longview.forEach((longview) => {
                longview.classList.remove('show');
              });
              nv.forEach((nv) => {
                nv.classList.remove('show');
              });
              break;
            case link == "Land-California":
              state = "California";
              rockford.forEach((rockford) => {
                rockford.classList.remove('show');
              });
              ca.forEach((ca) => {
                ca.classList.remove('show');
              });
              break;
            case link == "Land-Alaska":
              state = "Alaska";
              longview.forEach((longview) => {
                longview.classList.remove('show');
              });
              ak.forEach((ak) => {
                ak.classList.remove('show');
              });
              break;
            case link == "Land-Hawaii":
              state = "Hawaii";
              rockford.forEach((rockford) => {
                rockford.classList.remove('show');
              });
              hi.forEach((hi) => {
                hi.classList.remove('show');
              });
              break;
            default:
              state = "US State";
              rockford.forEach((rockford) => {
                rockford.classList.remove('show');
              });
              break;
          }
        });
    });
  });
});
