"use strict";

new Vue({
    el: "#menu",
    data: {
        menuData: null,
        menuItems: {
            id1: {
                id: "id1",
                name: "系统管理",
                subMenu: {
                    id11: {
                        id: "id11",
                        name: "用户管理",
                        action: "home.do?id=1"
                    },
                    id12: {
                        id: "id12",
                        name: "权限管理",
                        action: "home.do?id=2"
                    }
                }
            },
            id2: {
                id: "id2",
                name: "基础数据",
                subMenu: {
                    id21: {
                        id: "id21",
                        name: "机构设置",
                        action: "home.do?id=3"
                    },

                    id22: {
                        id: "id22",
                        name: "供应商设置",
                        action: "home.do?id=4"
                    },
                    id23: {
                        id: "id23",
                        name: "客户设置",
                        action: "home.do?id=5"
                    }
                }
            },
            id3: {
                id: "id3",
                name: "供应商业务",
                subMenu: {
                    id31: {
                        id: "id31",
                        name: "手机入库",
                        action: "home.do?id=6"
                    },
                    id32: {
                        id: "id32",
                        name: "供应商交易明细",
                        action: "home.do?id=7"
                    }
                }
            }
        }
    },
    methods: {
        drawMenu: function (data) {
            var id;
            var menuName;
            for (id in data) {
                menuName = data[id]["name"];
            }
        },
        getJson: function (callback) {
            var url = "menuData.json";
            $.getJSON(url, null, function (data) {
                this.menuData = data;
                callback(data);
            });
        }
    }
});