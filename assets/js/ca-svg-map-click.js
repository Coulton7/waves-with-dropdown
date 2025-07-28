document.addEventListener("DOMContentLoaded", function () {
    var allRegions = document.querySelectorAll("#Map > *");
    var x = document.querySelector('.location-overlay');
    var surrey = document.querySelectorAll(".Surrey");
    var edmonton = document.querySelectorAll(".Edmonton");
    var etobicoke = document.querySelectorAll(".Etobicoke");
    var ab = document.querySelectorAll(".AB");
    var bc = document.querySelectorAll(".BC");
    var mb = document.querySelectorAll(".MB");
    var nb = document.querySelectorAll(".NB");
    var nl = document.querySelectorAll(".NL");
    var nt = document.querySelectorAll(".NT");
    var ns = document.querySelectorAll(".NS");
    var nu = document.querySelectorAll(".NU");
    var on = document.querySelectorAll(".ON");
    var pe = document.querySelectorAll(".PE");
    var qc = document.querySelectorAll(".QC");
    var sk = document.querySelectorAll(".SK");
    var yt = document.querySelectorAll(".YT");
  
    allRegions.forEach(function (el) {
        el.addEventListener("click", function () {
            var link = this.getAttribute('id');
            var state;
            console.log(link);
            switch (true) {
                case link == "British_Columbia":
                    state = "British Columbia";
                    surrey.forEach((surrey) => {
                        surrey.classList.add('show');
                    });
                    bc.forEach((bc) => {
                        bc.classList.add('show');
                    });
                    break;
                case link == "Alberta":
                    state = "Alberta";
                    surrey.forEach((surrey) => {
                        surrey.classList.add('show');
                    });
                    edmonton.forEach((edmonton) => {
                        edmonton.classList.add('show');
                    });
                    ab.forEach((ab) => {
                        ab.classList.add('show');
                    });
                    break;
                case link == "Nova_Scotia":
                    state = "Nova Scotia";
                    etobicoke.forEach((etobicoke) => {
                        etobicoke.classList.add('show');
                    });
                    ns.forEach((ns) => {
                        ns.classList.add('show');
                    });
                    break;
                case link == "SASKAT-CHEWAN":
                    state = "Saskatchewan";
                    surrey.forEach((surrey) => {
                        surrey.classList.add('show');
                    });
                    sk.forEach((sk) => {
                        sk.classList.add('show');
                    });
                    break;
                case link == "Quebec":
                    state = "New York";
                    etobicoke.forEach((etobicoke) => {
                        etobicoke.classList.add('show');
                    });
                    qc.forEach((qc) => {
                        qc.classList.add('show');
                    });
                    break;
                case link == "Ontario":
                    state = "Ontario";
                    etobicoke.forEach((etobicoke) => {
                        etobicoke.classList.add('show');
                    });
                    on.forEach((on) => {
                        on.classList.add('show');
                    });
                    break;
                case link == "Manitoba":
                    state = "Manitoba";
                    surrey.forEach((surrey) => {
                        surrey.classList.add('show');
                    });
                    mb.forEach((mb) => {
                        mb.classList.add('show');
                    });
                    break;
                case link == "New_Brunswick":
                    state = "New Brunswick";
                    etobicoke.forEach((etobicoke) => {
                        etobicoke.classList.add('show');
                    });
                    nb.forEach((nb) => {
                        nb.classList.add('show');
                    });
                    break;
                case link == "Princ_Edward_Island":
                    state = "Princ Edward Island";
                    etobicoke.forEach((etobicoke) => {
                        etobicoke.classList.add('show');
                    });
                    pe.forEach((pe) => {
                        pe.classList.add('show');
                    });
                    break;
                case link == "Newfoundland":
                    state = "Newfoundland and Labrador";
                    etobicoke.forEach((etobicoke) => {
                        etobicoke.classList.add('show');
                    });
                    nl.forEach((nl) => {
                        nl.classList.add('show');
                    });
                    break;
                case link == "Yukon_Territory":
                    state = "Yukon";
                    surrey.forEach((surrey) => {
                        surrey.classList.add('show');
                    });
                    yt.forEach((yt) => {
                        yt.classList.add('show');
                    });
                    break;
                case link == "Northwest_Territory":
                    state = "Northwest Territory";
                    surrey.forEach((surrey) => {
                        surrey.classList.add('show');
                    });
                    nt.forEach((nt) => {
                        nt.classList.add('show');
                    });
                    break;
                case link == "Nunawut":
                    state = "Nunawut";
                    surrey.forEach((surrey) => {
                        surrey.classList.add('show');
                    });
                    nu.forEach((nu) => {
                        nu.classList.add('show');
                    });
                    break;
                case link == "Yukon_Territory":
                    state = "Yukon Territory";
                    surrey.forEach((surrey) => {
                        surrey.classList.add('show');
                    });
                    yt.forEach((yt) => {
                        yt.classList.add('show');
                    });
                    break;
                default:
                    state = "Canada Territory";
                    surrey.forEach((rockford) => {
                        surrey.classList.add('show');
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
                    case link == "British_Columbia":
                        state = "British Columbia";
                        surrey.forEach((surrey) => {
                            surrey.classList.remove('show');
                        });
                        bc.forEach((bc) => {
                            bc.classList.remove('show');
                        });
                        break;
                    case link == "Alberta":
                        state = "Alberta";
                        surrey.forEach((surrey) => {
                            surrey.classList.remove('show');
                        });
                        edmonton.forEach((edmonton) => {
                            edmonton.classList.remove('show');
                        });
                        ab.forEach((ab) => {
                            ab.classList.remove('show');
                        });
                        break;
                    case link == "Nova_Scotia":
                        state = "Nova Scotia";
                        etobicoke.forEach((etobicoke) => {
                            etobicoke.classList.remove('show');
                        });
                        ns.forEach((ns) => {
                            ns.classList.remove('show');
                        });
                        break;
                    case link == "SASKAT-CHEWAN":
                        state = "Saskatchewan";
                        surrey.forEach((surrey) => {
                            surrey.classList.remove('show');
                        });
                        sk.forEach((sk) => {
                            sk.classList.remove('show');
                        });
                        break;
                    case link == "Quebec":
                        state = "New York";
                        etobicoke.forEach((etobicoke) => {
                        etobicoke.classList.remove('show');
                        });
                        qc.forEach((qc) => {
                            qc.classList.remove('show');
                        });
                        break;
                    case link == "Ontario":
                        state = "Ontario";
                        etobicoke.forEach((etobicoke) => {
                            etobicoke.classList.remove('show');
                        });
                        on.forEach((on) => {
                            on.classList.remove('show');
                        });
                        break;
                    case link == "Manitoba":
                        state = "Manitoba";
                        surrey.forEach((surrey) => {
                            surrey.classList.remove('show');
                        });
                        mb.forEach((mb) => {
                            mb.classList.remove('show');
                        });
                        break;
                    case link == "New_Brunswick":
                        state = "New Brunswick";
                        etobicoke.forEach((etobicoke) => {
                            etobicoke.classList.remove('show');
                        });
                        nb.forEach((nb) => {
                            nb.classList.remove('show');
                        });
                        break;
                    case link == "Princ_Edward_Island":
                        state = "Princ Edward Island";
                        etobicoke.forEach((etobicoke) => {
                            etobicoke.classList.remove('show');
                        });
                        pe.forEach((pe) => {
                            pe.classList.remove('show');
                        });
                        break;
                    case link == "Newfoundland":
                        state = "Newfoundland and Labrador";
                        etobicoke.forEach((etobicoke) => {
                            etobicoke.classList.remove('show');
                        });
                        nl.forEach((nl) => {
                            nl.classList.remove('show');
                        });
                        break;
                    case link == "Yukon_Territory":
                        state = "Yukon";
                        surrey.forEach((surrey) => {
                            surrey.classList.remove('show');
                        });
                        yt.forEach((yt) => {
                            yt.classList.remove('show');
                        });
                        break;
                    case link == "Northwest_Territory":
                        state = "Northwest Territory";
                        surrey.forEach((surrey) => {
                            surrey.classList.remove('show');
                        });
                        nt.forEach((nt) => {
                            nt.classList.remove('show');
                        });
                        break;
                    case link == "Nunawut":
                        state = "Nunawut";
                        surrey.forEach((surrey) => {
                            surrey.classList.remove('show');
                        });
                        nu.forEach((nu) => {
                            nu.classList.remove('show');
                        });
                        break;
                    case link == "Yukon_Territory":
                        state = "Yukon Territory";
                        surrey.forEach((surrey) => {
                            surrey.classList.remove('show');
                        });
                        yt.forEach((yt) => {
                            yt.classList.remove('show');
                        });
                        break;
                    default:
                        state = "Canada Territory";
                        surrey.forEach((surrey) => {
                            surrey.classList.remove('show');
                        });
                    break;
                }
            });
        });
    });
});
  