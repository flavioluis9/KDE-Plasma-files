var plasma = getApiVersion(1);

var layout = {
    "desktops": [
        {
            "applets": [
            ],
            "config": {
                "/": {
                    "ItemGeometriesHorizontal": "",
                    "formfactor": "0",
                    "immutability": "1",
                    "lastScreen": "0",
                    "wallpaperplugin": "org.kde.image"
                },
                "/ConfigDialog": {
                    "DialogHeight": "540",
                    "DialogWidth": "720"
                },
                "/Configuration": {
                    "PreloadWeight": "0"
                },
                "/General": {
                    "ToolBoxButtonState": "topcenter",
                    "ToolBoxButtonX": "573",
                    "ToolBoxButtonY": "28",
                    "sortMode": "-1"
                },
                "/Wallpaper/com.github.zren.animatedhue/General": {
                    "FillMode": "2"
                },
                "/Wallpaper/org.kde.image/General": {
                    "Image": "file:///home/flavioluis/Pictures/Accidental-Wallpaper-for-desktop-phlntn-guitrasher.jpg"
                }
            },
            "wallpaperPlugin": "org.kde.image"
        }
    ],
    "panels": [
        {
            "alignment": "center",
            "applets": [
                {
                    "config": {
                        "/": {
                            "immutability": "1"
                        },
                        "/Configuration": {
                            "PreloadWeight": "100"
                        },
                        "/Configuration/ConfigDialog": {
                            "DialogHeight": "540",
                            "DialogWidth": "720"
                        },
                        "/Configuration/General": {
                            "alphaSort": "true",
                            "favoritesPortedToKAstats": "true",
                            "icon": "draw-circle",
                            "menuItems": "bookmark:t,application:t,computer:t,leave:t,used:f,oftenUsed:f",
                            "switchTabsOnHover": "false",
                            "systemApplications": "systemsettings.desktop"
                        },
                        "/Configuration/Shortcuts": {
                            "global": "Alt+F1"
                        },
                        "/Shortcuts": {
                            "global": "Alt+F1"
                        }
                    },
                    "plugin": "org.kde.plasma.kickoff"
                },
                {
                    "config": {
                        "/": {
                            "immutability": "1"
                        },
                        "/Configuration": {
                            "PreloadWeight": "0"
                        }
                    },
                    "plugin": "org.kde.plasma.taskmanager"
                },
                {
                    "config": {
                        "/": {
                            "immutability": "1"
                        },
                        "/Configuration": {
                            "PreloadWeight": "0"
                        },
                        "/Configuration/General": {
                            "length": "1290"
                        }
                    },
                    "plugin": "org.kde.plasma.panelspacer"
                },
                {
                    "config": {
                        "/": {
                            "immutability": "1"
                        },
                        "/Configuration": {
                            "PreloadWeight": "71"
                        }
                    },
                    "plugin": "org.kde.plasma.systemtray"
                },
                {
                    "config": {
                        "/": {
                            "immutability": "1"
                        },
                        "/Configuration": {
                            "PreloadWeight": "22"
                        },
                        "/Configuration/Appearance": {
                            "bold": "false",
                            "marginSize": "58"
                        },
                        "/Configuration/ConfigDialog": {
                            "DialogHeight": "540",
                            "DialogWidth": "720"
                        }
                    },
                    "plugin": "org.kde.plasma.digitalclock.wl"
                }
            ],
            "config": {
                "/": {
                    "formfactor": "2",
                    "immutability": "1",
                    "lastScreen": "0",
                    "wallpaperplugin": "org.kde.image"
                },
                "/ConfigDialog": {
                    "DialogHeight": "71",
                    "DialogWidth": "1600"
                },
                "/Configuration": {
                    "PreloadWeight": "0"
                }
            },
            "height": 1.5555555555555556,
            "hiding": "normal",
            "location": "top",
            "maximumLength": 88.88888888888889,
            "minimumLength": 88.88888888888889,
            "offset": 0
        }
    ],
    "serializationFormatVersion": "1"
}
;

plasma.loadSerializedLayout(layout);
