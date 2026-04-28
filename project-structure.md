luci-app-nfs-server/
├── Makefile
├── README.md
├── htdocs/
│   └── luci-static/
│       └── resources/
│           └── nfs/
│               └── main.js
├── luasrc/
│   ├── controller/
│   │   └── nfs.lua
│   ├── model/
│   │   └── acl/
│   │       └── nfs.json
│   └── view/
│       └── nfs/
│           └── main.htm
└── root/
    ├── etc/
    │   ├── config/
    │   │   └── nfs
    │   └── init.d/
    │       └── nfs-config
    └── usr/
        └── share/
            └── rpcd/
                └── acl.d/
                    └── luci-app-nfs.json
