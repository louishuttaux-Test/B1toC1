/*
  ILLUSTRATIONS
  -------------
  Dessins en SVG (aucune image à télécharger) : une scène par thème,
  et Summer, la petite chienne qui accompagne le parcours.
*/
(function () {
  var I = "#1F2A5C", J = "#1FA58C", S = "#FFB627", C = "#E84A5F", B = "#FFFFFF";

  function svg(fond, corps, cls) {
    return '<svg class="illu ' + (cls || "") + '" viewBox="0 0 240 150" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false">' +
      '<rect width="240" height="150" fill="' + fond + '"/>' + corps + "</svg>";
  }

  var scenes = {
    "vie-quotidienne": svg("#FFEFC7",
      '<circle class="i-soleil" cx="200" cy="32" r="16" fill="' + S + '"/>' +
      '<rect x="58" y="22" width="124" height="140" rx="4" fill="#F7D9A8"/>' +
      '<rect x="58" y="22" width="124" height="12" fill="#E9BE83"/>' +
      '<rect x="76" y="48" width="34" height="44" rx="17" fill="#9CC9F5"/><rect x="130" y="48" width="34" height="44" rx="17" fill="#9CC9F5"/>' +
      '<rect x="66" y="48" width="10" height="44" fill="' + J + '"/><rect x="110" y="48" width="10" height="44" fill="' + J + '"/>' +
      '<rect x="120" y="48" width="10" height="44" fill="' + J + '"/><rect x="164" y="48" width="10" height="44" fill="' + J + '"/>' +
      '<rect x="70" y="94" width="100" height="5" rx="2" fill="' + I + '"/>' +
      '<g stroke="' + I + '" stroke-width="2"><line x1="76" y1="99" x2="76" y2="112"/><line x1="90" y1="99" x2="90" y2="112"/><line x1="104" y1="99" x2="104" y2="112"/><line x1="136" y1="99" x2="136" y2="112"/><line x1="150" y1="99" x2="150" y2="112"/><line x1="164" y1="99" x2="164" y2="112"/></g>' +
      '<rect x="70" y="111" width="100" height="4" rx="2" fill="' + I + '"/>' +
      '<g class="i-fleurs"><rect x="112" y="80" width="16" height="14" rx="3" fill="' + C + '"/><circle cx="114" cy="74" r="5" fill="' + C + '"/><circle cx="121" cy="70" r="5" fill="' + S + '"/><circle cx="127" cy="75" r="5" fill="#F48FB1"/><path d="M120 80 v-6" stroke="' + J + '" stroke-width="2"/></g>' +
      '<rect x="104" y="124" width="32" height="26" rx="14" fill="' + I + '"/>'),

    "etudes-et-universite": svg("#DCE6FF",
      '<rect x="40" y="104" width="110" height="18" rx="3" fill="' + C + '"/><rect x="46" y="86" width="100" height="18" rx="3" fill="' + J + '"/><rect x="36" y="68" width="104" height="18" rx="3" fill="' + S + '"/>' +
      '<rect x="44" y="72" width="60" height="3" rx="1" fill="#fff" opacity=".7"/><rect x="54" y="90" width="50" height="3" rx="1" fill="#fff" opacity=".7"/><rect x="48" y="108" width="70" height="3" rx="1" fill="#fff" opacity=".7"/>' +
      '<g class="i-chapeau"><polygon points="88,30 132,46 88,62 44,46" fill="' + I + '"/><rect x="72" y="50" width="32" height="14" rx="3" fill="' + I + '"/><path d="M126 44 v22" stroke="' + S + '" stroke-width="3"/><circle cx="126" cy="68" r="4" fill="' + S + '"/></g>' +
      '<rect x="168" y="122" width="40" height="6" rx="3" fill="' + I + '"/><path d="M188 122 L176 70" stroke="' + I + '" stroke-width="5" stroke-linecap="round"/>' +
      '<path d="M160 70 Q176 46 196 64 Z" fill="' + C + '"/><path class="i-lumiere" d="M164 72 L148 118 L214 118 L192 70 Z" fill="' + S + '" opacity=".35"/>' +
      '<rect x="0" y="128" width="240" height="22" fill="#B9C9F5"/>'),

    "gastronomie-mode": svg("#FFD6DD",
      '<rect x="0" y="118" width="240" height="32" fill="#F7B6C2"/>' +
      '<ellipse cx="92" cy="120" rx="54" ry="8" fill="#E89AAA"/>' +
      '<path d="M50 74 Q50 120 92 120 Q134 120 134 74 Z" fill="' + J + '"/><rect x="48" y="70" width="88" height="8" rx="4" fill="#178A75"/>' +
      '<path d="M134 82 Q156 82 150 100 Q146 108 132 106" fill="none" stroke="' + J + '" stroke-width="6" stroke-linecap="round"/>' +
      '<path d="M50 84 Q30 84 34 64" fill="none" stroke="' + J + '" stroke-width="6" stroke-linecap="round"/>' +
      '<circle cx="92" cy="64" r="6" fill="' + S + '"/>' +
      '<g class="i-vapeur" fill="none" stroke="#fff" stroke-width="4" stroke-linecap="round"><path d="M76 52 q-8 -10 0 -20 q8 -10 0 -20"/><path d="M96 48 q-8 -10 0 -20 q8 -10 0 -20"/></g>' +
      '<path d="M160 116 Q170 86 200 92 Q218 96 214 116 Z" fill="' + S + '"/><path d="M172 100 l8 14 M186 94 l4 20 M200 96 l0 18" stroke="#D68A00" stroke-width="3" stroke-linecap="round"/>' +
      '<rect x="168" y="114" width="52" height="5" rx="2" fill="#fff"/>'),

    "sport-et-tourisme": svg("#CFF3EA",
      '<circle class="i-soleil" cx="46" cy="36" r="14" fill="' + S + '"/>' +
      '<path d="M0 100 Q60 60 120 92 Q180 124 240 84 V150 H0 Z" fill="#9BE3D2"/>' +
      '<path d="M120 20 L132 76 L108 76 Z" fill="' + I + '" opacity=".85"/><rect x="104" y="58" width="32" height="3" fill="' + I + '"/><rect x="110" y="40" width="20" height="3" fill="' + I + '"/>' +
      '<rect x="0" y="122" width="240" height="4" fill="' + I + '"/>' +
      '<g class="i-train"><path d="M30 92 H170 Q210 92 222 118 H30 Z" fill="#fff"/><path d="M30 106 H214 L222 118 H30 Z" fill="' + C + '"/>' +
      '<rect x="44" y="98" width="20" height="8" rx="2" fill="' + I + '"/><rect x="72" y="98" width="20" height="8" rx="2" fill="' + I + '"/><rect x="100" y="98" width="20" height="8" rx="2" fill="' + I + '"/><rect x="128" y="98" width="20" height="8" rx="2" fill="' + I + '"/>' +
      '<path d="M176 96 Q200 96 210 108 H176 Z" fill="' + I + '"/></g>'),

    "information-geopolitique-et-histoire": svg("#E6E0FF",
      '<g class="i-globe"><circle cx="168" cy="70" r="40" fill="#9CC9F5"/><path d="M146 46 q14 4 12 18 q-2 10 10 14 q10 4 4 20 q-14 4 -24 -8 q-8 -12 -2 -44Z" fill="' + J + '"/><path d="M180 36 q14 6 14 18 q-10 4 -18 -2Z" fill="' + J + '"/><ellipse cx="168" cy="70" rx="40" ry="14" fill="none" stroke="#fff" stroke-width="2" opacity=".6"/></g>' +
      '<rect x="162" y="110" width="12" height="20" fill="' + I + '"/><rect x="146" y="128" width="44" height="8" rx="4" fill="' + I + '"/>' +
      '<g transform="rotate(-6 80 90)"><rect x="30" y="50" width="100" height="80" rx="4" fill="#fff"/><rect x="40" y="60" width="80" height="12" rx="2" fill="' + I + '"/><rect x="40" y="80" width="36" height="28" rx="2" fill="' + C + '"/><rect x="82" y="80" width="38" height="4" rx="2" fill="#B8B4D6"/><rect x="82" y="90" width="38" height="4" rx="2" fill="#B8B4D6"/><rect x="82" y="100" width="30" height="4" rx="2" fill="#B8B4D6"/><rect x="40" y="114" width="80" height="4" rx="2" fill="#B8B4D6"/></g>'),

    "culture-litterature-et-francophonie": svg("#FFE3C9",
      '<path d="M120 56 Q86 40 40 48 V124 Q86 116 120 132 Z" fill="#fff"/><path d="M120 56 Q154 40 200 48 V124 Q154 116 120 132 Z" fill="#FFF8EE"/>' +
      '<path d="M120 56 V132" stroke="#E2C9A6" stroke-width="2"/>' +
      '<g stroke="#D9C1A0" stroke-width="3" stroke-linecap="round"><path d="M54 66 Q84 60 108 66"/><path d="M54 78 Q84 72 108 78"/><path d="M54 90 Q84 84 108 90"/><path d="M134 66 Q160 60 186 66"/><path d="M134 78 Q160 72 186 78"/></g>' +
      '<g class="i-plume"><path d="M200 18 Q170 40 150 104 Q190 70 200 18Z" fill="' + C + '"/><path d="M196 26 L152 102" stroke="#fff" stroke-width="2"/></g>' +
      '<g class="i-lettres" fill="' + I + '" font-family="Literata, Georgia, serif" font-weight="700"><text x="58" y="34" font-size="20">é</text><text x="88" y="26" font-size="16">à</text><text x="30" y="30" font-size="14">ç</text></g>'),

    "sciences-innovation-et-environnement": svg("#D9F7D9",
      '<circle cx="120" cy="150" r="80" fill="#A8E6A8"/>' +
      '<g class="i-ampoule"><circle cx="120" cy="58" r="30" fill="' + S + '"/><rect x="108" y="86" width="24" height="16" rx="4" fill="' + I + '"/><path d="M110 60 q10 -14 20 0" stroke="#fff" stroke-width="3" fill="none"/></g>' +
      '<g class="i-rayons" stroke="' + S + '" stroke-width="4" stroke-linecap="round"><path d="M120 14 v-8"/><path d="M78 30 l-6 -6"/><path d="M162 30 l6 -6"/><path d="M70 60 h-10"/><path d="M170 60 h10"/></g>' +
      '<path d="M40 122 Q40 84 80 82 Q82 120 40 122Z" fill="' + J + '"/><path d="M42 120 L74 88" stroke="#fff" stroke-width="2"/>' +
      '<path d="M200 122 Q200 92 168 88 Q166 118 200 122Z" fill="#178A75"/>' +
      '<circle cx="190" cy="40" r="10" fill="none" stroke="' + I + '" stroke-width="3"/><circle cx="190" cy="40" r="3" fill="' + I + '"/><ellipse cx="190" cy="40" rx="20" ry="6" fill="none" stroke="' + C + '" stroke-width="2" transform="rotate(-25 190 40)"/>'),

    "droits-humains": svg("#FFF1B8",
      '<circle cx="120" cy="80" r="56" fill="#FFE07A"/>' +
      '<g class="i-colombe"><path d="M70 84 Q96 60 132 74 Q160 52 176 60 Q160 70 150 84 Q140 104 104 104 Q84 104 70 84Z" fill="#fff"/>' +
      '<path d="M132 74 Q148 40 120 30 Q118 58 132 74Z" fill="#fff" stroke="#E8E2C8" stroke-width="2"/>' +
      '<circle cx="164" cy="64" r="2.5" fill="' + I + '"/><path d="M176 60 l12 2 l-10 5Z" fill="' + S + '"/>' +
      '<path d="M182 66 Q196 76 200 92" stroke="' + J + '" stroke-width="3" fill="none"/><ellipse cx="192" cy="78" rx="5" ry="3" fill="' + J + '"/><ellipse cx="198" cy="88" rx="5" ry="3" fill="' + J + '"/></g>' +
      '<path d="M60 150 Q72 120 96 124 Q108 128 120 138 Q132 128 144 124 Q168 120 180 150Z" fill="' + C + '"/>')
  };

  /* Summer, la mascotte. humeur : "content" | "bravo" | "dort" | "lit" */
  var FAUVE = "#E3A867", FAUVE_F = "#C98A4B", CREME = "#F6E6C9", BLANC = "#FFF9F0", BARBE = "#E7E1D8", GRIS = "#A79F95", POINTE = "#4A3B33", TRUFFE = "#1E1A1A";

  // Contour hirsute : une ellipse bordée de petites touffes (poil dur de terrier).
  function touffes(cx, cy, rx, ry, n, amp, fill, debut, fin) {
    debut = debut === undefined ? 0 : debut; fin = fin === undefined ? Math.PI * 2 : fin;
    var d = "", pas = (fin - debut) / n;
    for (var i = 0; i <= n; i++) {
      var a = debut + i * pas, r = 1 + (i % 2 ? amp : -amp * 0.3) + (i % 3 === 0 ? amp * 0.4 : 0);
      var x = cx + Math.cos(a) * rx * r, y = cy + Math.sin(a) * ry * r;
      d += (i ? " L" : "M") + x.toFixed(1) + " " + y.toFixed(1);
    }
    return '<path d="' + d + ' Z" fill="' + fill + '"/>';
  }

  function summer(humeur, cls) {
    humeur = humeur || "content";
    var heureuse = humeur === "bravo";
    var yeux = humeur === "dort"
      ? '<path d="M82 92 q8 7 16 0" stroke="' + POINTE + '" stroke-width="3.5" fill="none" stroke-linecap="round"/><path d="M122 92 q8 7 16 0" stroke="' + POINTE + '" stroke-width="3.5" fill="none" stroke-linecap="round"/>'
      : heureuse
        ? '<path d="M82 94 q8 -10 16 0" stroke="' + POINTE + '" stroke-width="4" fill="none" stroke-linecap="round"/><path d="M122 94 q8 -10 16 0" stroke="' + POINTE + '" stroke-width="4" fill="none" stroke-linecap="round"/>'
        : '<g class="bao-yeux"><ellipse cx="90" cy="91" rx="10" ry="9.5" fill="#B08463" opacity=".55"/><ellipse cx="130" cy="91" rx="10" ry="9.5" fill="#B08463" opacity=".55"/>' +
          '<circle cx="90" cy="91" r="7.5" fill="#2E1C12"/><circle cx="130" cy="91" r="7.5" fill="#2E1C12"/>' +
          '<circle cx="92.5" cy="88" r="2.6" fill="#fff"/><circle cx="132.5" cy="88" r="2.6" fill="#fff"/></g>';
    var langue = humeur === "dort" ? "" : '<path d="M102 120 q8 ' + (heureuse ? 26 : 20) + ' 16 0 Z" fill="#F07F95"/><path d="M110 121 v' + (heureuse ? 12 : 9) + '" stroke="#D9667C" stroke-width="1.5"/>';
    var bouche = '<path d="M99 117 q5.5 6 11 0 q5.5 6 11 0" stroke="' + POINTE + '" stroke-width="2.6" fill="none" stroke-linecap="round"/>';
    var extra = "";
    if (humeur === "lit") extra = '<path d="M72 166 L110 156 L148 166 L148 194 L110 184 L72 194Z" fill="#E84A5F"/><path d="M110 156 V184" stroke="#fff" stroke-width="2"/><path d="M80 172 l22 -5 M80 179 l22 -5 M118 167 l22 5 M118 174 l22 5" stroke="#fff" stroke-width="1.5" opacity=".7"/>' +
      '<ellipse cx="80" cy="190" rx="10" ry="8" fill="' + BLANC + '"/><ellipse cx="140" cy="190" rx="10" ry="8" fill="' + BLANC + '"/>';
    if (humeur === "dort") extra = '<g class="bao-zzz" fill="#1F2A5C" font-family="Bricolage Grotesque, sans-serif" font-weight="800"><text x="160" y="44" font-size="22">z</text><text x="178" y="26" font-size="16">z</text></g>';
    if (heureuse) extra = '<g class="bao-etoiles" fill="#FFB627"><path d="M28 64 l4 9 l10 1 l-8 6 l3 10 l-9 -6 l-9 6 l3 -10 l-8 -6 l10 -1Z"/><path d="M188 48 l3 7 l8 1 l-6 5 l2 8 l-7 -5 l-7 5 l2 -8 l-6 -5 l8 -1Z"/></g>';

    return '<svg class="bao summer bao-' + humeur + " " + (cls || "") + '" viewBox="0 0 220 220" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false">' +
      '<ellipse cx="110" cy="209" rx="62" ry="7" fill="#1F2A5C" opacity=".12"/>' +
      '<g class="bao-corps">' +
        // queue en panache recourbée
        '<g class="summer-queue"><path d="M150 186 C176 182 188 160 178 132 C172 118 158 120 160 134 C164 150 158 166 144 172Z" fill="' + CREME + '"/>' +
          '<path d="M178 132 C174 120 162 118 160 130 C166 128 172 130 178 140Z" fill="' + BLANC + '"/></g>' +
        // corps fauve, plastron et pattes blanches
        touffes(110, 170, 46, 38, 30, 0.05, FAUVE) +
        '<path d="M150 158 q10 6 6 18 q-10 -2 -12 -12Z" fill="' + BLANC + '"/>' +
        touffes(110, 162, 25, 34, 22, 0.07, BLANC) +
        '<rect x="85" y="168" width="20" height="38" rx="10" fill="' + BLANC + '"/><rect x="115" y="168" width="20" height="38" rx="10" fill="' + BLANC + '"/>' +
        '<path d="M89 203 v-6 M95 204 v-7 M101 203 v-6 M119 203 v-6 M125 204 v-7 M131 203 v-6" stroke="' + BARBE + '" stroke-width="1.6" stroke-linecap="round"/>' +
        // collier turquoise et médaille jaune
        '<path d="M80 132 Q110 148 140 132 L141 140 Q110 157 79 140Z" fill="#3CC0B4"/><circle cx="110" cy="152" r="5.5" fill="#FFC93C" stroke="#E0A800" stroke-width="1.5"/>' +
        '<g class="bao-tete">' +
          // oreilles : la gauche se relève, la droite retombe, pointes foncées
          '<g class="summer-oreille-g"><path d="M76 66 C64 58 54 50 46 36 C44 32 50 30 54 32 C66 38 80 46 90 56Z" fill="' + FAUVE + '"/><path d="M46 36 C44 32 50 30 54 32 C58 35 60 38 62 42 C56 42 50 40 46 36Z" fill="' + POINTE + '"/></g>' +
          '<g class="summer-oreille-d"><path d="M140 54 C156 48 172 58 178 80 C166 84 154 76 146 70Z" fill="' + FAUVE + '"/><path d="M178 80 C176 70 172 64 166 60 C168 70 170 78 170 84Z" fill="' + POINTE + '"/></g>' +
          // tête hirsute crème
          touffes(110, 88, 50, 44, 40, 0.07, CREME) +
          '<path d="M70 70 q12 -26 40 -28 q28 2 40 28 q-20 -12 -40 -12 q-20 0 -40 12Z" fill="' + FAUVE + '" opacity=".55"/>' +
          // mèches sur le front
          '<path d="M97 49 l3 -8 l4 7 l4 -10 l3 9 l5 -7 l1 9" fill="' + CREME + '" stroke="' + CREME + '" stroke-width="2" stroke-linejoin="round"/>' +
          // sourcils broussailleux
          '<path d="M78 78 q10 -8 22 -2 M120 76 q12 -6 22 2" stroke="' + BLANC + '" stroke-width="5" fill="none" stroke-linecap="round"/>' +
          // museau et barbe grisée
          touffes(110, 112, 30, 22, 26, 0.08, BLANC, 0, Math.PI * 2) +
          '<path d="M86 116 q-3 14 6 22 q8 6 18 6 q10 0 18 -6 q9 -8 6 -22 q-10 14 -24 14 q-14 0 -24 -14Z" fill="' + BARBE + '"/>' +
          '<path d="M92 128 l-2 9 M100 132 l-1 9 M120 132 l1 9 M128 128 l2 9" stroke="' + GRIS + '" stroke-width="1.6" stroke-linecap="round" opacity=".7"/>' +
          yeux +
          '<ellipse cx="110" cy="106" rx="11" ry="8.5" fill="' + TRUFFE + '"/><ellipse cx="106" cy="103" rx="3.5" ry="2" fill="#fff" opacity=".45"/>' +
          langue + bouche +
        "</g>" +
      "</g>" + extra + "</svg>";
  }

  window.ILLUS = { scene: function (slug) { return scenes[slug] || scenes["vie-quotidienne"]; }, bao: summer, summer: summer };
})();
