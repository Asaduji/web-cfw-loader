let frFR = {
  "pageTitle"    : "Nintendo Switch Payload Loader",
  "pageSubtitle" : "Fusee Launcher porté sur JavaScript avec WebUSB.",
  "dangerUpload"   :"Pour plusieurs raisons, l'upload des payloads ne fonctionne pas. je suis en train de réparer ça.",
  "dangerDanger"   :"Ceci est moderement testé. ainsi aucun bug non été découvert, je ne suis responsable d'aucun problème!",
  "warningWindows" :"Ceci ne marche pas sur windows en raison de l'implantation de WebUSB sur chrome. (et d'autres raisons probablement!)",
  "warningBrowser" :"Ceci ne marche sur aucun autre navigateur que chrome, Car il n'intêgre pas WebUSB.",
  "warningLinux"   :"sur linux vous pouvez avoir, 'Accés interdit' ou 'Pas d'appareil compatible' erreur dans le dialogue de connection! Si vous le faites , vous pouvez essayer de créer un fichier à  <code>/etc/udev/rules.d/50-switch.rules</code>Avec le contenu suivant:<br><code>SUBSYSTEM==\"usb\", ATTR{idVendor}==\"0955\", MODE=\"0664\", GROUP=\"plugdev\"</code>",
  "warningTested"  :"Ceci à été testé et marche sur Linux, OSX, Android (non-root) et Chromebooks. Cela peut varier.",
  "labelInstructions" :"Instructions:",
  "liRCM"          :"Metter la Switch en RCM, et connectez là à votre appareil.",
  "liSelect"       :"selectionner le payload, ou uplader le.",
  "liPress"        :"appuyer sur 'Chargez le Payload!'",
  "liAPX"          :"Sur l'écran de sélection qui apparaît, selectionner 'APX' et cliquer sur 'Connecter'.",
  "liLaunch"       :"Si tout est bon le Payload va démarrer!",
  "h1SetupDelivery" :"Configuration envoi Payloads",
  "h4SelectPayload" :"Selectionner Payload:",
  "optionCTCaerHekate" :"CTCaer's Hekate Mod v3.2 (All Firmwares)",
  "optionFusee"     :"(Re)Switched test payload (fusee)",
  "optionSXOS"      :"SX OS (All Firmwares)",
  "optionUpload"    :"Upload Payload",
  "h3Log"           :"Log:",
  "h4GetByteArray"  :"Get payload byte array (don't sploit)",
  "goButton"        :"Chargez le Payload!",
  "clearlogsbutton" :"supprimer Logs",
  "disclaimer1" :'Les sources sont disponibles à <a href="https://github.com/ElijahZAwesome/web-cfw-loader/">GitHub</a> (ou en cliquant sur la source, il n\'y a pas de backend!).',
  "disclaimer2" :'Porter de <a href="https://github.com/reswitched/fusee-launcher">fusee-launcher</a>.',
  "disclaimer3" :'Merci à ktemkin et ReSwitched, aussi à <br><a href="https://atlas44.s3-us-west-2.amazonaws.com/web-fusee-launcher/index.html">Atlas44 et son site</a> un bon point de démarrage pur moi.',
  "disclaimer4" :'Lastly, thanks to <a href="https://github.com/falquinho">falquinho</a> for the new bootstrap layout and portuguese translation, <a href="https://github.com/thomleg50">thomleg50</a> for the french translation, <a href="https://github.com/Filo97">Filo97</a> for the italian translation, <a href="https://github.com/tumGER">tumGER</a> for his german translation, <a href="https://github.com/lordfriky">Lord_Friky</a> for the spanish translation, and <a href="https://github.com/lorek123">Lorek</a> for the polish translation.'
}
