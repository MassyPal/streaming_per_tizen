# streaming_per_tizen

Piattaforma base per una app Samsung TV (Tizen OS) dedicata allo streaming IPTV.

## Stato attuale

Questa versione è una base installabile con:

- configurazione Tizen (`config.xml`) con profilo `tv`
- identificativi applicazione di esempio (da personalizzare): `STRMTIZEN1` / `STRMTIZEN1.StreamingPerTizen`
- schermata iniziale minimale (`index.html` + `css/style.css`)
- bootstrap JavaScript (`js/main.js`) con gestione tasto BACK

Lo streaming dei canali IPTV non è ancora implementato.

## Build e installazione (Tizen CLI)

Prerequisiti: [Tizen Studio](https://developer.tizen.org/development/tizen-studio/download).

1. Posizionati nella root del progetto:
   ```bash
   cd streaming_per_tizen
   ```
2. Esegui la build web:
   ```bash
   tizen build-web -- .
   ```
3. Crea il pacchetto `.wgt` dalla cartella di build:
   ```bash
   tizen package -t wgt -s <nome-certificato> -- .buildResult
   ```
4. Verifica il nome del pacchetto generato:
   ```bash
   ls .buildResult/*.wgt
   ```
5. Installa su TV/dispositivo target (sostituisci `<file-generato>.wgt` con il nome trovato):
   ```bash
   tizen install -n <file-generato>.wgt -t <nome-dispositivo>
   ```
