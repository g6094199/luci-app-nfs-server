# luci-app-nfs-server

LuCI JS App zur Verwaltung von NFS-Freigaben unter OpenWrt (getestet/ausgelegt für 25.x).

## Features

- Verwaltung von NFS-Shares über UCI (`/etc/config/nfs`)
- Generierung von `/etc/exports`
- Neustart des NFS-Dienstes nach Änderungen
- Moderne LuCI-JS-Oberfläche (GridSection, Form, RPC)

## Installation (im OpenWrt-Buildroot)

1. Dieses Repository in `package/` oder eigenen Feed klonen:

   ```bash
   git clone https://github.com/<dein-user>/luci-app-nfs.git package/luci-app-nfs

2. Menüeintrag aktivieren:

   ```bash
    make menuconfig

# LuCI -> Applications -> luci-app-nfs-server auswählen

3, Bauen und flashen:

   ```bash
    make -j$(nproc)
