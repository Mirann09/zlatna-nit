/* =========================================================
   PROIZVODI - ovde se dodaju, menjaju i brišu proizvodi.

   Kako dodati novi proizvod:
   1. Kopiraj jedan blok { ... }, od otvorene do zatvorene vitičaste zagrade.
   2. Nalepi ga ispod poslednjeg proizvoda i stavi zarez između blokova.
   3. Promeni podatke. "id" i "sifra" moraju biti jedinstveni.

   Polja:
   id         - jedinstvena oznaka, ide u link (proizvod.html?id=BU-001)
   kategorija - burme, verenicko, prstenje, narukvice, ogrlice, mindjuse, satovi
   naziv      - kako piše na sajtu
   sifra      - šifra iz radnje
   materijal  - zuto, belo, roze, srebro (za satove null)
   karati     - 14, 18... (za srebro i satove null)
   tezina     - u gramima, npr. 4.2 (ako ne znaš, null)
   cena       - broj bez razmaka, npr. 52800. null znači "Cena na upit"
   opis       - 2-3 rečenice: od čega je, kakva je obrada
   slike      - putanje do slika, npr. ["slike/BU-001-1.jpg", "slike/BU-001-2.jpg"]
                Prva slika je glavna. Prazan niz [] prikazuje sivi placeholder.
   izdvojen   - true = prikazuje se na početnoj (najbolje tačno 4 komada)

   SVI PROIZVODI ISPOD SU PRIMER - ZAMENITI pravim podacima iz radnje.
   ========================================================= */

const PROIZVODI = [

  /* ---------- BURME (PRIMER - zameniti) ---------- */
  {
    id: "BU-001", kategorija: "burme", naziv: "Burma klasična", sifra: "BU-001",
    materijal: "zuto", karati: 14, tezina: 4.8, cena: 52800,
    opis: "PRIMER - zameniti. Ravna burma širine 4 mm od žutog zlata. Polirana spolja i iznutra.",
    slike: [], izdvojen: true
  },
  {
    id: "BU-002", kategorija: "burme", naziv: "Burma zaobljena", sifra: "BU-002",
    materijal: "belo", karati: 14, tezina: 5.1, cena: 56100,
    opis: "PRIMER - zameniti. Zaobljena burma širine 5 mm od belog zlata. Spolja polirana.",
    slike: [], izdvojen: false
  },
  {
    id: "BU-003", kategorija: "burme", naziv: "Burma mat sa sjajnim ivicama", sifra: "BU-003",
    materijal: "roze", karati: 14, tezina: 5.4, cena: 59400,
    opis: "PRIMER - zameniti. Burma od roze zlata, širina 5 mm. Sredina je mat, ivice su polirane.",
    slike: [], izdvojen: false
  },
  {
    id: "BU-004", kategorija: "burme", naziv: "Burma dvobojna", sifra: "BU-004",
    materijal: "zuto", karati: 14, tezina: 6.0, cena: 66000,
    opis: "PRIMER - zameniti. Kombinacija žutog i belog zlata, širina 6 mm. Polirana završna obrada.",
    slike: [], izdvojen: false
  },

  /* ---------- VERENIČKO PRSTENJE (PRIMER - zameniti) ---------- */
  {
    id: "VP-001", kategorija: "verenicko", naziv: "Verenički prsten sa jednim kamenom", sifra: "VP-001",
    materijal: "belo", karati: 14, tezina: 2.6, cena: 48900,
    opis: "PRIMER - zameniti. Tanak prsten od belog zlata sa jednim kamenom u sredini. Polirana obrada.",
    slike: [], izdvojen: true
  },
  {
    id: "VP-002", kategorija: "verenicko", naziv: "Verenički prsten sa kamenčićima", sifra: "VP-002",
    materijal: "zuto", karati: 14, tezina: 2.9, cena: 54200,
    opis: "PRIMER - zameniti. Prsten od žutog zlata sa nizom sitnih kamenčića na prednjoj strani.",
    slike: [], izdvojen: false
  },
  {
    id: "VP-003", kategorija: "verenicko", naziv: "Verenički prsten tanki", sifra: "VP-003",
    materijal: "roze", karati: 14, tezina: 2.1, cena: 39800,
    opis: "PRIMER - zameniti. Tanak prsten od roze zlata sa jednim manjim kamenom. Polirana obrada.",
    slike: [], izdvojen: false
  },
  {
    id: "VP-004", kategorija: "verenicko", naziv: "Verenički prsten u srebru", sifra: "VP-004",
    materijal: "srebro", karati: null, tezina: 2.4, cena: 7900,
    opis: "PRIMER - zameniti. Prsten od srebra sa jednim kamenom. Polirana obrada.",
    slike: [], izdvojen: false
  },

  /* ---------- PRSTENJE (PRIMER - zameniti) ---------- */
  {
    id: "PR-001", kategorija: "prstenje", naziv: "Prsten pečatnjak", sifra: "PR-001",
    materijal: "zuto", karati: 14, tezina: 7.5, cena: 82500,
    opis: "PRIMER - zameniti. Muški pečatnjak od žutog zlata sa ravnom pločicom za gravuru.",
    slike: [], izdvojen: false
  },
  {
    id: "PR-002", kategorija: "prstenje", naziv: "Prsten tanki", sifra: "PR-002",
    materijal: "roze", karati: 14, tezina: 1.6, cena: 17600,
    opis: "PRIMER - zameniti. Tanak prsten od roze zlata, širina 1,5 mm. Polirana obrada.",
    slike: [], izdvojen: false
  },
  {
    id: "PR-003", kategorija: "prstenje", naziv: "Prsten sa kamenom", sifra: "PR-003",
    materijal: "belo", karati: 14, tezina: 3.2, cena: 38400,
    opis: "PRIMER - zameniti. Prsten od belog zlata sa ovalnim kamenom u boji.",
    slike: [], izdvojen: false
  },
  {
    id: "PR-004", kategorija: "prstenje", naziv: "Prsten srebrni", sifra: "PR-004",
    materijal: "srebro", karati: null, tezina: 3.0, cena: 4900,
    opis: "PRIMER - zameniti. Prsten od srebra, širina 3 mm, mat obrada.",
    slike: [], izdvojen: false
  },

  /* ---------- NARUKVICE (PRIMER - zameniti) ---------- */
  {
    id: "NA-001", kategorija: "narukvice", naziv: "Narukvica pancer", sifra: "NA-001",
    materijal: "zuto", karati: 14, tezina: 6.4, cena: 70400,
    opis: "PRIMER - zameniti. Narukvica od žutog zlata sa pancer pletenicom, dužina 19 cm.",
    slike: [], izdvojen: true
  },
  {
    id: "NA-002", kategorija: "narukvice", naziv: "Narukvica tanka", sifra: "NA-002",
    materijal: "belo", karati: 14, tezina: 2.2, cena: 24200,
    opis: "PRIMER - zameniti. Tanka narukvica od belog zlata, dužina 18 cm, sa kopčom na karabin.",
    slike: [], izdvojen: false
  },
  {
    id: "NA-003", kategorija: "narukvice", naziv: "Narukvica kruta", sifra: "NA-003",
    materijal: "roze", karati: 14, tezina: 5.0, cena: 55000,
    opis: "PRIMER - zameniti. Kruta narukvica od roze zlata koja se otvara sa strane.",
    slike: [], izdvojen: false
  },
  {
    id: "NA-004", kategorija: "narukvice", naziv: "Narukvica srebrna", sifra: "NA-004",
    materijal: "srebro", karati: null, tezina: 5.5, cena: 6500,
    opis: "PRIMER - zameniti. Srebrna narukvica sa sitnom pletenicom, dužina 19 cm.",
    slike: [], izdvojen: false
  },

  /* ---------- OGRLICE I LANČIĆI (PRIMER - zameniti) ---------- */
  {
    id: "OG-001", kategorija: "ogrlice", naziv: "Lančić venecijaner", sifra: "OG-001",
    materijal: "zuto", karati: 14, tezina: 3.8, cena: 41800,
    opis: "PRIMER - zameniti. Lančić od žutog zlata, venecijaner pletenica, dužina 45 cm.",
    slike: [], izdvojen: false
  },
  {
    id: "OG-002", kategorija: "ogrlice", naziv: "Ogrlica sa privezkom", sifra: "OG-002",
    materijal: "belo", karati: 14, tezina: 2.9, cena: 33600,
    opis: "PRIMER - zameniti. Tanak lančić od belog zlata sa malim privezkom, dužina 42 cm.",
    slike: [], izdvojen: false
  },
  {
    id: "OG-003", kategorija: "ogrlice", naziv: "Lančić roze", sifra: "OG-003",
    materijal: "roze", karati: 14, tezina: 2.4, cena: 26400,
    opis: "PRIMER - zameniti. Lančić od roze zlata, dužina 45 cm.",
    slike: [], izdvojen: false
  },
  {
    id: "OG-004", kategorija: "ogrlice", naziv: "Lančić srebrni", sifra: "OG-004",
    materijal: "srebro", karati: null, tezina: 4.0, cena: 5200,
    opis: "PRIMER - zameniti. Srebrni lančić, dužina 50 cm.",
    slike: [], izdvojen: false
  },

  /* ---------- MINĐUŠE (PRIMER - zameniti) ---------- */
  {
    id: "MI-001", kategorija: "mindjuse", naziv: "Minđuše krug", sifra: "MI-001",
    materijal: "zuto", karati: 14, tezina: 2.0, cena: 22000,
    opis: "PRIMER - zameniti. Minđuše od žutog zlata u obliku kruga, prečnik 15 mm.",
    slike: [], izdvojen: true
  },
  {
    id: "MI-002", kategorija: "mindjuse", naziv: "Minđuše sa kamenom", sifra: "MI-002",
    materijal: "belo", karati: 14, tezina: 1.4, cena: 18900,
    opis: "PRIMER - zameniti. Male minđuše od belog zlata sa po jednim kamenom, zatvaranje na šraf.",
    slike: [], izdvojen: false
  },
  {
    id: "MI-003", kategorija: "mindjuse", naziv: "Minđuše viseće", sifra: "MI-003",
    materijal: "roze", karati: 14, tezina: 2.6, cena: 28600,
    opis: "PRIMER - zameniti. Viseće minđuše od roze zlata, dužina 3 cm.",
    slike: [], izdvojen: false
  },
  {
    id: "MI-004", kategorija: "mindjuse", naziv: "Minđuše srebrne", sifra: "MI-004",
    materijal: "srebro", karati: null, tezina: 2.2, cena: 3900,
    opis: "PRIMER - zameniti. Srebrne minđuše u obliku kruga, prečnik 20 mm.",
    slike: [], izdvojen: false
  },

  /* ---------- SATOVI (PRIMER - zameniti) ---------- */
  {
    id: "SA-001", kategorija: "satovi", naziv: "Muški sat [MARKA I MODEL]", sifra: "SA-001",
    materijal: null, karati: null, tezina: null, cena: 24900,
    opis: "PRIMER - zameniti. [UPIŠI: kućište, narukvica, mehanizam, vodootpornost].",
    slike: [], izdvojen: false
  },
  {
    id: "SA-002", kategorija: "satovi", naziv: "Ženski sat [MARKA I MODEL]", sifra: "SA-002",
    materijal: null, karati: null, tezina: null, cena: 21900,
    opis: "PRIMER - zameniti. [UPIŠI: kućište, narukvica, mehanizam, vodootpornost].",
    slike: [], izdvojen: false
  },
  {
    id: "SA-003", kategorija: "satovi", naziv: "Muški sat [MARKA I MODEL]", sifra: "SA-003",
    materijal: null, karati: null, tezina: null, cena: 32500,
    opis: "PRIMER - zameniti. [UPIŠI: kućište, narukvica, mehanizam, vodootpornost].",
    slike: [], izdvojen: false
  },
  {
    id: "SA-004", kategorija: "satovi", naziv: "Ženski sat [MARKA I MODEL]", sifra: "SA-004",
    materijal: null, karati: null, tezina: null, cena: 18500,
    opis: "PRIMER - zameniti. [UPIŠI: kućište, narukvica, mehanizam, vodootpornost].",
    slike: [], izdvojen: false
  }

];
