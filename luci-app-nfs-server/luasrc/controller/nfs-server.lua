module("luci.controller.nfs-server", package.seeall)

function index()
    entry({"admin", "services", "nfs-server"}, view("nfs-server/main"), _("NFS Server"), 50)
end