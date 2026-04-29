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

# Installationsanweisungen
define Package/luci-app-nfs-server/install
    # Controller
    $(INSTALL_DIR) $(1)/usr/lib/lua/luci/controller
    $(INSTALL_DATA) ./luasrc/controller/nfs-server.lua $(1)/usr/lib/lua/luci/controller/

    # Views
    $(INSTALL_DIR) $(1)/usr/lib/lua/luci/view/nfs-server
    $(INSTALL_DATA) ./luasrc/view/nfs-server/main.htm $(1)/usr/lib/lua/luci/view/nfs-server/

    # JS resources
    $(INSTALL_DIR) $(1)/www/luci-static/resources/nfs-server
    $(INSTALL_DATA) ./htdocs/luci-static/resources/nfs-server/main.js $(1)/www/luci-static/resources/nfs-server/

    # LuCI ACL
    $(INSTALL_DIR) $(1)/usr/lib/lua/luci/model/acl
    $(INSTALL_DATA) ./luasrc/model/acl/nfs-server.json $(1)/usr/lib/lua/luci/model/acl/

    # RPCD ACL
    $(INSTALL_DIR) $(1)/usr/share/rpcd/acl.d
    $(INSTALL_DATA) ./root/usr/share/rpcd/acl.d/luci-app-nfs-server.json $(1)/usr/share/rpcd/acl.d/

    # UCI config
    $(INSTALL_DIR) $(1)/etc/config
    $(INSTALL_CONF) ./root/etc/config/nfs-server $(1)/etc/config/

    # Init script
    $(INSTALL_DIR) $(1)/etc/init.d
    $(INSTALL_BIN) ./root/etc/init.d/nfs-server $(1)/etc/init.d/
endef

$(eval $(call BuildPackage,luci-app-nfs-server))
