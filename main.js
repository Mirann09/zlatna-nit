/* =========================================================
   Zajednički JavaScript za sve stranice:
   kategorije, format cene, kartica proizvoda, meni na mobilnom.
   ========================================================= */

/* Podaci o kategorijama. "velicina" određuje polje u formi:
   "prsten" = jedno polje, "burme" = za nju i za njega,
   "narukvica" = dužina, "lancic" = dužina (opciono), null = bez veličine.
   "gravura" = da li forma nudi polje za gravuru.
   "filter" = da li stranica kategorije ima filter po materijalu. */
const KATEGORIJE = {
  burme: {
    naziv: "Burme",
    naslov: "Burme od žutog, belog i roze zlata",
    opis: "Na unutrašnju stranu graviramo imena ili datum venčanja. Veličinu za oboje potvrđujemo telefonom pre slanja.",
    velicina: "burme", gravura: true, filter: true
  },
  verenicko: {
    naziv: "Vereničko prstenje",
    naslov: "Vereničko prstenje",
    opis: "Prstenje za prosidbu od zlata i srebra. Ako ne znate tačnu veličinu, upišite približnu, proverićemo kad vas pozovemo.",
    velicina: "prsten", gravura: true, filter: true
  },
  prstenje: {
    naziv: "Prstenje",
    naslov: "Prstenje od zlata i srebra",
    opis: "Prstenje za svaki dan i za poklon. Veličinu potvrđujemo telefonom pre slanja.",
    velicina: "prsten", gravura: true, filter: true
  },
  narukvice: {
    naziv: "Narukvice",
    naslov: "Narukvice od zlata i srebra",
    opis: "U formu upišite dužinu koja vam odgovara. Ako je ne znate, pomoći ćemo vam telefonom.",
    velicina: "narukvica", gravura: false, filter: true
  },
  ogrlice: {
    naziv: "Ogrlice i lančići",
    naslov: "Ogrlice i lančići",
    opis: "Lančići i ogrlice od zlata i srebra, sa privezkom i bez.",
    velicina: "lancic", gravura: false, filter: true
  },
  mindjuse: {
    naziv: "Minđuše",
    naslov: "Minđuše od zlata i srebra",
    opis: "Male minđuše za svaki dan i viseće za posebne prilike.",
    velicina: null, gravura: false, filter: true
  },
  satovi: {
    naziv: "Satovi",
    naslov: "Satovi",
    opis: "Muški i ženski satovi koje držimo u radnjama. [UPIŠI MARKE]",
    velicina: null, gravura: false, filter: false
  }
};

/* Posebna "kategorija" za link "Pogledajte sve" */
const SVE = {
  naziv: "Sva ponuda",
  naslov: "Sva ponuda",
  opis: "Burme, prstenje, narukvice, lančići, minđuše i satovi na jednom mestu.",
  filter: true
};

const MATERIJALI = {
  zuto: "Žuto zlato",
  belo: "Belo zlato",
  roze: "Roze zlato",
  srebro: "Srebro"
};

const TELEFON = "061 225 8641";
const TELEFON_LINK = "tel:+381612258641";

/* 124200 -> "124 200 RSD", null -> "Cena na upit" */
function formatCena(cena) {
  if (cena === null || cena === undefined) return "Cena na upit";
  return cena.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ") + " RSD";
}

/* Zaštita od HTML-a u tekstu */
function esc(tekst) {
  return String(tekst)
    .replace(/&/g, "&amp;").replace(/</g, "&lt;")
    .replace(/>/g, "&gt;").replace(/"/g, "&quot;");
}

/* Prava slika ako postoji, inače sivi placeholder sa nazivom */
function slikaHtml(src, alt, klasa, lazy) {
  if (src) {
    return `<img class="${klasa}" src="${esc(src)}" alt="${esc(alt)}"${lazy ? ' loading="lazy"' : ""}>`;
  }
  return `<div class="${klasa} ph" role="img" aria-label="${esc(alt)}">${esc(alt)}</div>`;
}

/* Kartica proizvoda, ista na početnoj i na stranici kategorije */
function karticaProizvoda(p) {
  const alt = p.naziv + (p.materijal ? ", " + MATERIJALI[p.materijal].toLowerCase() : "");
  return `
    <a class="p-card" href="proizvod.html#${encodeURIComponent(p.id)}">
      ${slikaHtml(p.slike[0], alt, "p-img", true)}
      <span class="p-name">${esc(p.naziv)} - ${esc(p.sifra)}</span>
      <span class="p-price">${formatCena(p.cena)}</span>
    </a>`;
}

/* Meni na mobilnom */
document.addEventListener("DOMContentLoaded", function () {
  const dugme = document.querySelector(".nav-toggle");
  const meni = document.getElementById("nav-links");
  if (dugme && meni) {
    dugme.addEventListener("click", function () {
      const otvoren = meni.classList.toggle("is-open");
      dugme.setAttribute("aria-expanded", otvoren ? "true" : "false");
      dugme.setAttribute("aria-label", otvoren ? "Zatvori meni" : "Otvori meni");
    });
    meni.querySelectorAll("a").forEach(function (a) {
      a.addEventListener("click", function () {
        meni.classList.remove("is-open");
        dugme.setAttribute("aria-expanded", "false");
      });
    });
  }

  /* Video u heru: kreće sam, osim za one koji su u sistemu isključili pokret (oni vide samo poster).
     Dugme zaustavlja i pušta video. */
  const video = document.querySelector(".hero video");
  const pauza = document.querySelector(".hero-pause");
  if (video) {
    function postaviDugme(pusteno) {
      if (!pauza) return;
      pauza.setAttribute("data-stanje", pusteno ? "pusteno" : "zaustavljeno");
      pauza.setAttribute("aria-label", pusteno ? "Zaustavi video" : "Pusti video");
    }
    function postaviVideo(pusti) {
      if (pusti) {
        /* Ako pregledač ne dozvoli da video krene, dugme ostaje na "Pusti video" */
        video.play().catch(function () { postaviDugme(false); });
      } else {
        video.pause();
      }
      postaviDugme(pusti);
    }
    postaviVideo(!window.matchMedia("(prefers-reduced-motion: reduce)").matches);
    if (pauza) {
      pauza.addEventListener("click", function () { postaviVideo(video.paused); });
    }
  }

  /* Scene radnji: na skrol se slika spolja uvećava ka vratima i prelazi u sliku unutrašnjosti.
     Jedini izuzetak od pravila bez animacija pri skrolu.
     Klasu scenes-on postavlja skripta u <head> na index.html. Bez nje CSS prikazuje obe slike jednu do druge. */
  const scene = Array.prototype.slice.call(document.querySelectorAll("[data-scena]"));
  if (scene.length) {
    const html = document.documentElement;
    const bezPokreta = window.matchMedia("(prefers-reduced-motion: reduce)");
    const nav = document.querySelector(".nav");
    let navVisina = 0;
    let zakazano = false;

    function ogranici(x) { return Math.min(1, Math.max(0, x)); }
    /* Koliko je odmaklo između dve tačke napretka, od 0 do 1 */
    function deo(p, od, doTacke) { return ogranici((p - od) / (doTacke - od)); }
    function glatko(t) { return t * t * (3 - 2 * t); }

    scene.forEach(function (s) {
      const vrata = (s.getAttribute("data-vrata") || "50 55").split(" ");
      s.style.setProperty("--vrata-x", vrata[0] + "%");
      s.style.setProperty("--vrata-y", vrata[1] + "%");
      s._pozornica = s.querySelector(".scene-stage");
      s._spolja = s.querySelector(".scene-out");
      s._unutra = s.querySelector(".scene-in");
    });

    function izmeri() {
      navVisina = nav ? nav.offsetHeight : 0;
      html.style.setProperty("--nav-h", navVisina + "px");
    }

    function nacrtaj() {
      zakazano = false;
      if (!html.classList.contains("scenes-on")) return;
      const visinaEkrana = window.innerHeight;
      scene.forEach(function (s) {
        const r = s.getBoundingClientRect();
        if (r.bottom < 0 || r.top > visinaEkrana) return;
        const put = r.height - s._pozornica.offsetHeight;
        const p = put > 0 ? ogranici((navVisina - r.top) / put) : 0;

        /* 0 - 0,08: stoji fasada. 0,08 - 0,72: zum ka vratima, sve brži, kao kad prilazite.
           0,42 - 0,72: unutrašnjost se pojavljuje preko fasade. Posle 0,72 stoji unutrašnjost. */
        const zum = deo(p, 0.08, 0.72);
        const ulaz = glatko(deo(p, 0.42, 0.72));
        s._spolja.style.transform = "scale(" + (1 + 5 * zum * zum).toFixed(4) + ")";
        s._unutra.style.opacity = ulaz.toFixed(4);
        s._unutra.style.transform = "scale(" + (1.15 - 0.15 * ulaz).toFixed(4) + ")";
      });
    }

    function zakazi() {
      if (!zakazano) { zakazano = true; window.requestAnimationFrame(nacrtaj); }
    }

    /* Ako neko usput isključi ili uključi pokret u sistemu, scena se prilagodi bez osvežavanja */
    function promenaPokreta() {
      html.classList.toggle("scenes-on", !bezPokreta.matches);
      if (bezPokreta.matches) {
        scene.forEach(function (s) {
          s._spolja.style.transform = "";
          s._unutra.style.opacity = "";
          s._unutra.style.transform = "";
        });
      } else {
        izmeri();
        zakazi();
      }
    }

    izmeri();
    nacrtaj();
    window.addEventListener("scroll", zakazi, { passive: true });
    window.addEventListener("resize", function () { izmeri(); zakazi(); });
    window.addEventListener("load", function () { izmeri(); zakazi(); });
    if (bezPokreta.addEventListener) { bezPokreta.addEventListener("change", promenaPokreta); }
    else if (bezPokreta.addListener) { bezPokreta.addListener(promenaPokreta); }
  }

  /* Priča: kako da poručite.
     Aktivan je poslednji korak čiji je vrh prešao liniju čitanja: na računaru sredina ekrana,
     na mobilnom odmah ispod zalepljenog okvira, da se objašnjenje aktivnog koraka uvek vidi.
     Uz njega se pale fotografija i sloj (naslov i kartica) sa istim data-korak, a traka na vrhu se puni dok se skroluje kroz korak. */
  const prica = document.querySelector("[data-prica]");
  if (prica) {
    const vizual = prica.querySelector(".story-visual");
    const koraci = Array.prototype.slice.call(prica.querySelectorAll(".story-step"));
    const slojevi = Array.prototype.slice.call(prica.querySelectorAll(".story-visual [data-korak]"));
    const trake = Array.prototype.slice.call(prica.querySelectorAll(".story-bar"));
    let aktivan = 0;
    let cekaPrica = false;

    function postaviKorak(i) {
      if (i === aktivan) return;
      aktivan = i;
      koraci.forEach(function (k, n) {
        k.classList.toggle("is-active", n === i);
        if (n === i) { k.setAttribute("aria-current", "step"); } else { k.removeAttribute("aria-current"); }
      });
      slojevi.forEach(function (el) {
        el.classList.toggle("is-active", Number(el.getAttribute("data-korak")) === i);
      });
    }

    function proveriPricu() {
      cekaPrica = false;
      const linija = window.innerWidth <= 768
        ? Math.min(vizual.getBoundingClientRect().bottom + 24, window.innerHeight * 0.85)
        : window.innerHeight * 0.5;
      let izbor = 0;
      let deoKoraka = 0;
      koraci.forEach(function (k, n) {
        const r = k.getBoundingClientRect();
        if (r.top <= linija) {
          izbor = n;
          deoKoraka = Math.min(1, Math.max(0, (linija - r.top) / r.height));
        }
      });
      postaviKorak(izbor);
      trake.forEach(function (t, n) {
        t.style.setProperty("--fill", n < izbor ? 1 : n === izbor ? deoKoraka.toFixed(3) : 0);
      });
    }

    function zakaziPricu() {
      if (!cekaPrica) { cekaPrica = true; window.requestAnimationFrame(proveriPricu); }
    }

    proveriPricu();
    window.addEventListener("scroll", zakaziPricu, { passive: true });
    window.addEventListener("resize", zakaziPricu);
  }

  /* Godina u footeru se menja sama */
  document.querySelectorAll("[data-godina]").forEach(function (el) {
    el.textContent = new Date().getFullYear();
  });

  /* Izdvojeni proizvodi na početnoj (izdvojen: true u proizvodi.js) */
  const izdvojeni = document.getElementById("izdvojeni");
  if (izdvojeni && typeof PROIZVODI !== "undefined") {
    izdvojeni.innerHTML = PROIZVODI.filter(function (p) { return p.izdvojen; })
      .slice(0, 4).map(karticaProizvoda).join("");
  }
});
