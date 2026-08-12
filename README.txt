BLED / STOL - zive sdilena verze (Netlify + Blobs)
===================================================

Co je uvnitr:
  index.html                     appka (frontend)
  netlify/functions/state.mjs    serverova funkce, uklada sdileny seznam
  netlify.toml                   konfigurace Netlify
  package.json                   zavislost @netlify/blobs

DULEZITE: tahle verze se NEnasazuje pretazenim. Netlify musi nainstalovat
funkci, takze pouzij nasazeni z Gitu (nebo Netlify CLI).

NASAZENI Z GITU (doporuceno)
  1. Zaloz repozitar na GitHubu a nahraj do nej VSECHNY tyhle soubory
     (vcetne slozky netlify/functions).
  2. Na app.netlify.com dej "Add new site" -> "Import an existing project".
  3. Vyber svuj GitHub repozitar.
  4. Build command nech PRAZDNY. Publish directory nastav na "." (tecka).
     Functions directory se vezme z netlify.toml automaticky.
  5. Deploy. Netlify samo nainstaluje @netlify/blobs a zapne funkci /api/state.
  6. Dostanes verejnou URL, tu posli parte. Vsichni otevrete stejnou URL
     a odskrtavani se vam bude aktualizovat mezi telefony (do par vterin).

NASAZENI PRES NETLIFY CLI (alternativa)
  1. npm install -g netlify-cli
  2. V teto slozce: netlify deploy --build --prod
  3. Prihlas se a nech Netlify web zalozit, dostanes URL.

JAK TO FUNGUJE
  - Odskrtnuta polozka se posle na /api/state a ulozi do Netlify Blobs.
  - Appka se kazde 3 vteriny podiva na server, takze zmeny od ostatnich
    se objevi skoro hned.
  - Tlacitko "Vynulovat seznam" smaze stav pro vsechny.

POZNAMKA
  Seznam je spolecny pro kazdeho, kdo zna URL. Neposilej odkaz cizim.
