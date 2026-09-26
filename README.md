# streaming_per_tizen

Piattaforma base per una app Samsung TV (Tizen OS) dedicata allo streaming IPTV.

## Stato attuale

Questa versione è una base installabile con:

- configurazione Tizen (`config.xml`) con profilo `tv`
- schermata iniziale minimale (`index.html` + `css/style.css`)
- bootstrap JavaScript (`js/main.js`) con gestione tasto BACK

Lo streaming dei canali IPTV non è ancora implementato.

## Build e installazione (Tizen CLI)

Prerequisiti: [Tizen Studio](https://developer.tizen.org/development/tizen-studio/download).

1. Posizionati nella root del progetto:
   ```bash
   cd streaming_per_tizen
   ```
2. Crea il pacchetto `.wgt`:
   ```bash
   tizen package -t wgt -s <nome-certificato>
   ```
3. Installa su TV/dispositivo target:
   ```bash
   tizen install -n streaming_per_tizen.wgt -t <nome-dispositivo>
   ```
