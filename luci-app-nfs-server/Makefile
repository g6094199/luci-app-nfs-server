include $(TOPDIR)/rules.mk

LUCI_TITLE:=LuCI App for NFS Server
LUCI_PKGARCH:=all
LUCI_DEPENDS:=+nfs-kernel-server

PKG_NAME:=luci-app-nfs-server
PKG_VERSION:=1.0.0
PKG_RELEASE:=1

PKG_LICENSE:=MIT
PKG_MAINTAINER:=Your Name <you@example.com>

include $(TOPDIR)/feeds/luci/luci.mk

define Package/$(PKG_NAME)/install
    # UCI config
    $(INSTALL_DIR) $(1)/etc/config
    $(INSTALL_CONF) ./root/etc/config/nfs $(1)/etc/config/nfs

    # Init script (0755 automatically)
    $(INSTALL_DIR) $(1)/etc/init.d
    $(INSTALL_BIN) ./root/etc/init.d/nfs-config $(1)/etc/init.d/nfs-config

    # RPCD ACL
    $(INSTALL_DIR) $(1)/usr/share/rpcd/acl.d
    $(INSTALL_DATA) ./root/usr/share/rpcd/acl.d/luci-app-nfs-server.json $(1)/usr/share/rpcd/acl.d/luci-app-nfs-server.json

    # LuCI controller
    $(INSTALL_DIR) $(1)/usr/lib/lua/luci/controller
    $(INSTALL_DATA) ./luasrc/controller/nfs.lua $(1)/usr/lib/lua/luci/controller/nfs.lua

    # LuCI view
    $(INSTALL_DIR) $(1)/usr/lib/lua/luci/view/nfs
    $(INSTALL_DATA) ./luasrc/view/nfs/main.htm $(1)/usr/lib/lua/luci/view/nfs/main.htm

    # LuCI JS resources
    $(INSTALL_DIR) $(1)/www/luci-static/resources/nfs
    $(INSTALL_DATA) ./htdocs/luci-static/resources/nfs/main.js $(1)/www/luci-static/resources/nfs/main.js
endef

# Build package
$(eval $(call BuildPackage,$(PKG_NAME)))
