define({ "api": [
  {
    "type": "get",
    "url": "/api/appversion/latest",
    "title": "获取 App 最新版本",
    "version": "1.0.0",
    "name": "appVersionLatest",
    "group": "APP版本管理",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "platform",
            "description": "<p>Query参数, Android或iOS</p>"
          },
          {
            "group": "Parameter",
            "type": "Long",
            "optional": false,
            "field": "versionCode",
            "description": "<p>Query参数，版本标识</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "请求参数示例:",
          "content": "GET /api/appversion/latest?platform=Android&versionCode=20200617 HTTP/1.1\nHost: api-cn.ronghub.com\nContent-Type: application/json;charset=UTF-8",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "返回结果": [
          {
            "group": "返回结果",
            "type": "String",
            "optional": false,
            "field": "platform",
            "description": "<p>Android或iOS</p>"
          },
          {
            "group": "返回结果",
            "type": "String",
            "optional": false,
            "field": "downloadUrl",
            "description": "<p>安装包下载地址</p>"
          },
          {
            "group": "返回结果",
            "type": "String",
            "optional": false,
            "field": "version",
            "description": "<p>版本号</p>"
          },
          {
            "group": "返回结果",
            "type": "String",
            "optional": false,
            "field": "versionCode",
            "description": "<p>版本标识</p>"
          },
          {
            "group": "返回结果",
            "type": "Boolean",
            "optional": false,
            "field": "forceUpgrade",
            "description": "<p>是否强制更新</p>"
          },
          {
            "group": "返回结果",
            "type": "String",
            "optional": false,
            "field": "releaseNote",
            "description": "<p>版本描述</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "服务响应示例:",
          "content": "{\n\t\"code\": 10000,\n\t\"msg\": \"success\",\n\t\"data\": {\n\t\t\"platform\": \"Android Q\",\n\t\t\"downloadUrl\": \"http://www.baidu.com\",\n\t\t\"version\": \"2.1.1\",\n\t    \"versionCode\": 20200617,\n\t\t\"forceUpgrade\": true,\n\t\t\"releaseNote\": \"版本描述\"\n  }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "seal-mic/src/main/java/cn/rongcloud/mic/controller/AppVersionController.java",
    "groupTitle": "APP版本管理"
  },
  {
    "type": "post",
    "url": "/api/appversion/publish",
    "title": "发布版本",
    "version": "1.0.0",
    "name": "createAppVersion",
    "group": "APP版本管理",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "platform",
            "description": "<p>Android 或 iOS</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "downloadUrl",
            "description": "<p>安装包下载地址</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "version",
            "description": "<p>供客户端展示的版本名称，例如: 1.0.0</p>"
          },
          {
            "group": "Parameter",
            "type": "Long",
            "optional": false,
            "field": "versionCode",
            "description": "<p>版本标识</p>"
          },
          {
            "group": "Parameter",
            "type": "boolean",
            "optional": false,
            "field": "forceUpgrade",
            "description": "<p>是否强制更新</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "releaseNote",
            "description": "<p>版本描述</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "请求参数示例:",
          "content": "POST /api/appversion/publish HTTP/1.1\nHost: api-cn.ronghub.com\nContent-Type: application/json;charset=UTF-8\nAuthorization: authorization\n{\n     \"platform\": \"Android\",\n     \"downloadUrl\": \"http://www.baidu.com\",\n     \"version\": \"2.1.1\",\n     \"versionCode\": 202006171047,\n     \"forceUpgrade\":true,\n     \"releaseNote\":\"版本描述\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "返回结果": [
          {
            "group": "返回结果",
            "type": "Int",
            "optional": false,
            "field": "code",
            "description": "<p>返回码，10000 为正常。</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "服务响应示例:",
          "content": "{\n     \"code\": 10000,\n     \"msg\": \"success\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "seal-mic/src/main/java/cn/rongcloud/mic/controller/AppVersionController.java",
    "groupTitle": "APP版本管理",
    "header": {
      "fields": {
        "鉴权请求头": [
          {
            "group": "鉴权请求头",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>登录认证信息</p>"
          }
        ]
      }
    }
  },
  {
    "type": "delete",
    "url": "/api/appversion",
    "title": "删除版本",
    "version": "1.0.0",
    "name": "deleteAppVersion",
    "group": "APP版本管理",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "platform",
            "description": "<p>Query参数，Android 或 iOS</p>"
          },
          {
            "group": "Parameter",
            "type": "Long",
            "optional": false,
            "field": "versionCode",
            "description": "<p>Query参数，版本号</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "请求参数示例:",
          "content": "DELETE /api/appversion/appversion?platform=Android&versionCode=20200617 HTTP/1.1\nHost: api-cn.ronghub.com\nContent-Type: application/json;charset=UTF-8\nAuthorization: authorization",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "返回结果": [
          {
            "group": "返回结果",
            "type": "Int",
            "optional": false,
            "field": "code",
            "description": "<p>返回码，10000 为正常。</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "服务响应示例:",
          "content": "{\n     \"code\": 10000,\n     \"msg\": \"success\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "seal-mic/src/main/java/cn/rongcloud/mic/controller/AppVersionController.java",
    "groupTitle": "APP版本管理"
  },
  {
    "type": "put",
    "url": "/api/appversion",
    "title": "更新版本信息",
    "version": "1.0.0",
    "name": "updateAppVersion",
    "group": "APP版本管理",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "platform",
            "description": "<p>Query参数，Android 或 iOS，查询条件不允许修改</p>"
          },
          {
            "group": "Parameter",
            "type": "Long",
            "optional": false,
            "field": "versionCode",
            "description": "<p>Query参数，版本号，查询条件不允许修改</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "downloadUrl",
            "description": "<p>安装包下载地址</p>"
          },
          {
            "group": "Parameter",
            "type": "boolean",
            "optional": false,
            "field": "forceUpgrade",
            "description": "<p>是否强制更新</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "releaseNote",
            "description": "<p>版本描述</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "请求参数示例:",
          "content": "PUT /api/appversion/appversion?platform=Android&versionCode=2.1.1 HTTP/1.1\nHost: api-cn.ronghub.com\nContent-Type: application/json;charset=UTF-8\nAuthorization: authorization\n{\n     \"downloadUrl\": \"http://www.baidu.com\",\n     \"forceUpgrade\": true,\n     \"releaseNote\":\"版本描述\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "返回结果": [
          {
            "group": "返回结果",
            "type": "Int",
            "optional": false,
            "field": "code",
            "description": "<p>返回码，10000 为正常。</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "服务响应示例:",
          "content": "{\n     \"code\": 10000,\n     \"msg\": \"success\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "seal-mic/src/main/java/cn/rongcloud/mic/controller/AppVersionController.java",
    "groupTitle": "APP版本管理",
    "header": {
      "fields": {
        "鉴权请求头": [
          {
            "group": "鉴权请求头",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>登录认证信息</p>"
          }
        ]
      }
    }
  },
  {
    "type": "post",
    "url": "/api/room/create",
    "title": "创建房间(用户)",
    "version": "1.0.0",
    "name": "createRoom",
    "group": "房间模块",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>房间名称</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "themePictureUrl",
            "description": "<p>房间主题图片地址</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "请求参数示例:",
          "content": "POST /api/room/create HTTP/1.1\nHost: api-cn.ronghub.com\nAuthorization: authorization\nContent-Type: application/json;charset=UTF-8\n{\n\t   \"name\": \"test\",\n\t   \"themePictureUrl\": \"xxxx\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "返回结果": [
          {
            "group": "返回结果",
            "type": "String",
            "optional": false,
            "field": "roomId",
            "description": "<p>房间id</p>"
          },
          {
            "group": "返回结果",
            "type": "String",
            "optional": false,
            "field": "roomName",
            "description": "<p>房间名称</p>"
          },
          {
            "group": "返回结果",
            "type": "String",
            "optional": false,
            "field": "themePictureUrl",
            "description": "<p>房间主题图片地址</p>"
          },
          {
            "group": "返回结果",
            "type": "Timestamp",
            "optional": false,
            "field": "createDt",
            "description": "<p>创建时间</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "服务响应示例:",
          "content": "{\n     \"code\": 10000,\n     \"msg\": \"success\",\n     \"data\": {\n          \"roomId\": \"2akJS6N5QOYsCKf5LhpgqY\",\n          \"roomName\": \"房间名称\",\n          \"themePictureUrl\": \"xxxxx\",\n          \"createDt\": 1555406087939\n     }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "seal-mic/src/main/java/cn/rongcloud/mic/controller/RoomController.java",
    "groupTitle": "房间模块",
    "header": {
      "fields": {
        "鉴权请求头": [
          {
            "group": "鉴权请求头",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>登录认证信息</p>"
          }
        ]
      }
    }
  },
  {
    "type": "get",
    "url": "/api/room/{id}",
    "title": "获取房间信息",
    "version": "1.0.0",
    "name": "getRoomDetail",
    "group": "房间模块",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Int",
            "optional": false,
            "field": "roomId",
            "description": "<p>房间id (Path 参数，需替换 url 地址中的 {roomId} 变量)</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "请求参数示例:",
          "content": "GET /api/room/xxxxxx HTTP/1.1\nHost: api-cn.ronghub.com\nAuthorization: authorization\nContent-Type: application/json;charset=UTF-8",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "返回结果": [
          {
            "group": "返回结果",
            "type": "String",
            "optional": false,
            "field": "roomId",
            "description": "<p>房间id</p>"
          },
          {
            "group": "返回结果",
            "type": "String",
            "optional": false,
            "field": "roomName",
            "description": "<p>房间名称</p>"
          },
          {
            "group": "返回结果",
            "type": "Int",
            "optional": false,
            "field": "creatorId",
            "description": "<p>创建者ID</p>"
          },
          {
            "group": "返回结果",
            "type": "String",
            "optional": false,
            "field": "themePictureUrl",
            "description": "<p>房间主题图片地址</p>"
          },
          {
            "group": "返回结果",
            "type": "Int",
            "optional": false,
            "field": "allowedAudienceFreeJoinMic",
            "description": "<p>0:不允许，1:允许</p>"
          },
          {
            "group": "返回结果",
            "type": "Timestamp",
            "optional": false,
            "field": "createDt",
            "description": "<p>创建时间</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "服务响应示例:",
          "content": "{\n\t\"code\": 10000,\n\t\"msg\": \"success\",\n\t\"data\": {\n\t\t\t\"roomId\": \"3saDkSLFMdnsseOksdakJS6\",\n\t\t\t\"roomName\": \"名称2\",\n\t\t\t\"themePictureUrl\": \"xxxxxx\",\n\t\t\t\"creatorId\": \"xxxxxx\",\n\t\t\t\"allowedAudienceFreeJoinMic\": 1,\n\t\t\t\"createDt\": 1555406087939\n     }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "seal-mic/src/main/java/cn/rongcloud/mic/controller/RoomController.java",
    "groupTitle": "房间模块",
    "header": {
      "fields": {
        "鉴权请求头": [
          {
            "group": "鉴权请求头",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>登录认证信息</p>"
          }
        ]
      }
    }
  },
  {
    "type": "get",
    "url": "/api/room/list",
    "title": "获取房间列表",
    "version": "1.0.0",
    "name": "getRoomList",
    "group": "房间模块",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Int",
            "optional": false,
            "field": "from",
            "description": "<p>起始位置(Query 参数，需拼接到 url 之后)</p>"
          },
          {
            "group": "Parameter",
            "type": "Int",
            "optional": false,
            "field": "size",
            "description": "<p>返回记录数(Query 参数，需拼接到 url 之后)</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "请求参数示例:",
          "content": "GET /api/room/list?from=0&size=10 HTTP/1.1\nHost: api-cn.ronghub.com\nAuthorization: authorization\nContent-Type: application/json;charset=UTF-8",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "返回结果": [
          {
            "group": "返回结果",
            "type": "Int",
            "optional": false,
            "field": "totalCount",
            "description": "<p>总记录数</p>"
          },
          {
            "group": "返回结果",
            "type": "Array",
            "optional": false,
            "field": "room",
            "description": "<p>房间信息</p>"
          }
        ],
        "房间信息": [
          {
            "group": "房间信息",
            "type": "String",
            "optional": false,
            "field": "roomId",
            "description": "<p>房间id</p>"
          },
          {
            "group": "房间信息",
            "type": "String",
            "optional": false,
            "field": "roomName",
            "description": "<p>房间名称</p>"
          },
          {
            "group": "房间信息",
            "type": "Int",
            "optional": false,
            "field": "creatorId",
            "description": "<p>创建者ID</p>"
          },
          {
            "group": "房间信息",
            "type": "String",
            "optional": false,
            "field": "themePictureUrl",
            "description": "<p>房间主题图片地址</p>"
          },
          {
            "group": "房间信息",
            "type": "Int",
            "optional": false,
            "field": "allowedAudienceFreeJoinMic",
            "description": "<p>0:不允许，1:允许</p>"
          },
          {
            "group": "房间信息",
            "type": "Timestamp",
            "optional": false,
            "field": "createDt",
            "description": "<p>创建时间</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "服务响应示例:",
          "content": "{\n\t\"code\": 10000,\n\t\"msg\": \"success\",\n\t\"data\": {\n\t\t\"totalCount\": 2,\n\t\t\"rooms\": [{\n\t\t\t\"roomId\": \"2akJS6N5QOYsCKf5LhpgqY\",\n\t\t\t\"roomName\": \"名称1\",\n\t\t\t\"themePictureUrl\": \"xxxxxx\",\n\t\t\t\"creatorId\": \"xxxxxx\",\n\t\t\t\"allowedAudienceFreeJoinMic\": 1,\n\t\t\t\"createDt\": 1555406087939\n               }, {\n\t\t\t\"roomId\": \"3saDkSLFMdnsseOksdakJS6\",\n\t\t\t\"roomName\": \"名称2\",\n\t\t\t\"themePictureUrl\": \"xxxxxx\",\n\t\t\t\"creatorId\": \"xxxxxx\",\n\t\t\t\"allowedAudienceFreeJoinMic\": 1,\n\t\t\t\"createDt\": 1555406087939\n       }]\n   }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "seal-mic/src/main/java/cn/rongcloud/mic/controller/RoomController.java",
    "groupTitle": "房间模块",
    "header": {
      "fields": {
        "鉴权请求头": [
          {
            "group": "鉴权请求头",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>登录认证信息</p>"
          }
        ]
      }
    }
  },
  {
    "type": "get",
    "url": "/api/room/{roomId}/gag/members",
    "title": "查询禁言用户列表(主持人)",
    "version": "1.0.0",
    "name": "queryGagRoomUsers",
    "group": "房间模块",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "roomId",
            "description": "<p>房间id，(Path 参数，需替换 url 地址中的 {roomId} 变量)</p>"
          },
          {
            "group": "Parameter",
            "type": "Array",
            "optional": false,
            "field": "userIds",
            "description": "<p>用户id</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "请求参数示例:",
          "content": "GET /api/room/xxxxxx/gag/members HTTP/1.1\nHost: api-cn.ronghub.com\nAuthorization: authorization",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "返回结果": [
          {
            "group": "返回结果",
            "type": "String",
            "optional": false,
            "field": "userId",
            "description": "<p>用户id</p>"
          },
          {
            "group": "返回结果",
            "type": "String",
            "optional": false,
            "field": "userName",
            "description": "<p>用户名称</p>"
          },
          {
            "group": "返回结果",
            "type": "String",
            "optional": false,
            "field": "portrait",
            "description": "<p>头像</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "服务响应示例:",
          "content": "{\n\t\"code\": 10000,\n\t\"msg\": \"success\",\n\t\"data\": [{\n\t\t\t\t\"userId\": \"2akJS6N5QOYsCKf5LhpgqY\",\n\t\t\t    \"userName\": \"李晓明\",\n\t\t\t    \"portrait\": \"xxxxxxxx\"\n                       },\n           {\n\t\t\t\t\"userId\": \"sIl1nG5AQD8h-O7A2zlN5Q\",\n\t\t\t\t\"userName\": \"张三\",\n\t\t\t\t\"portrait\": \"xxxxx\"\n           }\n\t\t]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "seal-mic/src/main/java/cn/rongcloud/mic/controller/RoomController.java",
    "groupTitle": "房间模块",
    "header": {
      "fields": {
        "鉴权请求头": [
          {
            "group": "鉴权请求头",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>登录认证信息</p>"
          }
        ]
      }
    }
  },
  {
    "type": "get",
    "url": "/api/room/{roomId}/mic/apply/members",
    "title": "获取排麦成员(主持人)",
    "version": "1.0.0",
    "name": "roomApplyMicMembers",
    "group": "房间模块",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "roomId",
            "description": "<p>房间id (Path 参数，需替换 url 地址中的 {roomId} 变量)</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "请求参数示例:",
          "content": "GET /api/room/xxxxxx/mic/apply/members HTTP/1.1\nHost: api-cn.ronghub.com\nAuthorization: authorization\nContent-Type: application/json;charset=UTF-8",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "返回结果": [
          {
            "group": "返回结果",
            "type": "String",
            "optional": false,
            "field": "userId",
            "description": "<p>用户id</p>"
          },
          {
            "group": "返回结果",
            "type": "String",
            "optional": false,
            "field": "userName",
            "description": "<p>用户名称</p>"
          },
          {
            "group": "返回结果",
            "type": "String",
            "optional": false,
            "field": "portrait",
            "description": "<p>头像</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "服务响应示例:",
          "content": "{\n\t\"code\": 10000,\n\t\"msg\": \"success\",\n\t\"data\": [{\n\t\t\t\t\"userId\": \"2akJS6N5QOYsCKf5LhpgqY\",\n     \t    \"userName\": \"李晓明\",\n             \"portrait\": \"xxxxxxxx\"\n           },\n           {\n\t\t\t\t\"userId\": \"sIl1nG5AQD8h-O7A2zlN5Q\",\n\t\t\t    \"userName\": \"张三\",\n\t\t\t\t\"portrait\": \"xxxxx\"\n           }\n\t\t]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "seal-mic/src/main/java/cn/rongcloud/mic/controller/RoomController.java",
    "groupTitle": "房间模块",
    "header": {
      "fields": {
        "鉴权请求头": [
          {
            "group": "鉴权请求头",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>登录认证信息</p>"
          }
        ]
      }
    }
  },
  {
    "type": "get",
    "url": "/api/room/{roomId}/members",
    "title": "获取房间成员列表",
    "version": "1.0.0",
    "name": "roomMembers",
    "group": "房间模块",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Int",
            "optional": false,
            "field": "roomId",
            "description": "<p>房间id (Path 参数，需替换 url 地址中的 {roomId} 变量)</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "请求参数示例:",
          "content": "GET /api/room/setting/xxxxxxx/members HTTP/1.1\nHost: api-cn.ronghub.com\nAuthorization: authorization\nContent-Type: application/json;charset=UTF-8",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "返回结果": [
          {
            "group": "返回结果",
            "type": "String",
            "optional": false,
            "field": "userId",
            "description": "<p>用户id</p>"
          },
          {
            "group": "返回结果",
            "type": "String",
            "optional": false,
            "field": "userName",
            "description": "<p>用户名称</p>"
          },
          {
            "group": "返回结果",
            "type": "String",
            "optional": false,
            "field": "portrait",
            "description": "<p>头像</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "服务响应示例:",
          "content": "{\n\t\"code\": 10000,\n\t\"msg\": \"success\",\n\t\"data\": [{\n\t\t\t\t\"userId\": \"2akJS6N5QOYsCKf5LhpgqY\",\n\t\t\t    \"userName\": \"李晓明\",\n\t\t\t    \"portrait\": \"xxxxxxxx\"\n                       },\n           {\n\t\t\t\t\"userId\": \"sIl1nG5AQD8h-O7A2zlN5Q\",\n\t\t\t\t\"userName\": \"张三\",\n\t\t\t\t\"portrait\": \"xxxxx\"\n           }\n\t\t]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "seal-mic/src/main/java/cn/rongcloud/mic/controller/RoomController.java",
    "groupTitle": "房间模块",
    "header": {
      "fields": {
        "鉴权请求头": [
          {
            "group": "鉴权请求头",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>登录认证信息</p>"
          }
        ]
      }
    }
  },
  {
    "type": "put",
    "url": "/api/room/setting",
    "title": "房间设置(主持人)",
    "version": "1.0.0",
    "name": "roomSetting",
    "group": "房间模块",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Int",
            "optional": false,
            "field": "roomId",
            "description": "<p>房间id</p>"
          },
          {
            "group": "Parameter",
            "type": "Int",
            "optional": false,
            "field": "allowedJoinRoom",
            "description": "<p>是否允许观众加入, 0:不允许，1:允许</p>"
          },
          {
            "group": "Parameter",
            "type": "Int",
            "optional": false,
            "field": "allowedFreeJoinMic",
            "description": "<p>是否允许观众自由上麦, 0:不允许，1:允许</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "请求参数示例:",
          "content": "PUT /api/room/setting HTTP/1.1\nHost: api-cn.ronghub.com\nAuthorization: authorization\nContent-Type: application/json;charset=UTF-8\n{\n      \"roomId\": \"xxxxxxx\",\n      \"allowedJoinRoom\": 0,\n      \"allowedFreeJoinMic\": 0\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "返回结果": [
          {
            "group": "返回结果",
            "type": "Int",
            "optional": false,
            "field": "code",
            "description": "<p>返回码，10000 为正常。</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "服务响应示例:",
          "content": "{\n     \"code\": 10000,\n     \"msg\": \"success\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "seal-mic/src/main/java/cn/rongcloud/mic/controller/RoomController.java",
    "groupTitle": "房间模块",
    "header": {
      "fields": {
        "鉴权请求头": [
          {
            "group": "鉴权请求头",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>登录认证信息</p>"
          }
        ]
      }
    }
  },
  {
    "type": "post",
    "url": "/api/room/gag",
    "title": "用户禁言设置(主持人)",
    "version": "1.0.0",
    "name": "roomUserGag",
    "group": "房间模块",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "roomId",
            "description": "<p>房间id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "operation",
            "description": "<p>操作，add:禁言, remove:解除禁言</p>"
          },
          {
            "group": "Parameter",
            "type": "Array",
            "optional": false,
            "field": "userIds",
            "description": "<p>用户id</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "请求参数示例:",
          "content": "POST /api/room/xxxxxxx/user/gag HTTP/1.1\nHost: api-cn.ronghub.com\nAuthorization: authorization\n{\n    \"roomId\": \"xxxxxxx\",\n    \"userIds\": [\"xxxxxxx\",\"yyyyyyy\"],\n    \"operation\": \"add\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "返回结果": [
          {
            "group": "返回结果",
            "type": "Int",
            "optional": false,
            "field": "code",
            "description": "<p>返回码，10000 为正常。</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "服务响应示例:",
          "content": "{\n     \"code\": 10000,\n     \"msg\": \"success\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "seal-mic/src/main/java/cn/rongcloud/mic/controller/RoomController.java",
    "groupTitle": "房间模块",
    "header": {
      "fields": {
        "鉴权请求头": [
          {
            "group": "鉴权请求头",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>登录认证信息</p>"
          }
        ]
      }
    }
  },
  {
    "type": "post",
    "url": "/api/room/kick",
    "title": "将用户踢出房间(主持人)",
    "version": "1.0.0",
    "name": "roomUserRemove",
    "group": "房间模块",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "roomId",
            "description": "<p>房间id</p>"
          },
          {
            "group": "Parameter",
            "type": "Array",
            "optional": false,
            "field": "userIds",
            "description": "<p>用户id</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "请求参数示例:",
          "content": "POST /api/room/kick HTTP/1.1\nHost: api-cn.ronghub.com\nAuthorization: authorization\n{\n    \"roomId\": \"xxxxxx\",\n    \"userIds\":[\"xxxxxxx\",\"yyyyyyy\"]\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "返回结果": [
          {
            "group": "返回结果",
            "type": "Int",
            "optional": false,
            "field": "code",
            "description": "<p>返回码，10000 为正常。</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "服务响应示例:",
          "content": "{\n     \"code\": 10000,\n     \"msg\": \"success\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "seal-mic/src/main/java/cn/rongcloud/mic/controller/RoomController.java",
    "groupTitle": "房间模块",
    "header": {
      "fields": {
        "鉴权请求头": [
          {
            "group": "鉴权请求头",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>登录认证信息</p>"
          }
        ]
      }
    }
  },
  {
    "type": "",
    "url": "API",
    "title": "接口鉴权规则",
    "description": "<p>本文档中所有对服务端 Demo API 接口的请求均使用此规则校验，以下不再重复说明。 每次请求 API 接口时，均需要提供 1 个 HTTP Request Header，具体如下：</p>",
    "version": "1.0.0",
    "name": "authenticationRule",
    "group": "接口说明",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>鉴权信息, 获取 Token 接口或用户登录接口下发的 authorization</p>"
          }
        ]
      }
    },
    "filename": "seal-mic/src/main/java/cn/rongcloud/mic/controller/IndexController.java",
    "groupTitle": "接口说明"
  },
  {
    "type": "",
    "url": "API",
    "title": "错误码汇总",
    "version": "1.0.0",
    "name": "errorCode",
    "group": "接口说明",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "10000",
            "description": "<p>操作成功</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "10001",
            "description": "<p>系统内部错误</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "10002",
            "description": "<p>请求参数缺失或无效</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "10003",
            "description": "<p>认证信息无效或已过期</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "10004",
            "description": "<p>无权限操作</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "10005",
            "description": "<p>错误的请求</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "20000",
            "description": "<p>获取 IM Token 失败</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "20001",
            "description": "<p>发送短信请求过于频繁</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "20002",
            "description": "<p>短信发送失败</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "20003",
            "description": "<p>手机号无效</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "20004",
            "description": "<p>短信验证码尚未发送</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "20005",
            "description": "<p>短信验证码无效</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "20006",
            "description": "<p>验证码不能为空</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "30000",
            "description": "<p>房间创建失败</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "30001",
            "description": "<p>房间不存在</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "30002",
            "description": "<p>用户id个数不能超过 20</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "30003",
            "description": "<p>封禁用户失败</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "30004",
            "description": "<p>用户不在房间</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "30005",
            "description": "<p>用户已在麦位</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "30006",
            "description": "<p>用户已在排麦列表</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "30007",
            "description": "<p>用户没有申请排麦</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "30008",
            "description": "<p>用户不在麦位</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "30009",
            "description": "<p>没有可用麦位</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "30010",
            "description": "<p>您已是主持人</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "30011",
            "description": "<p>主持人转让信息已失效</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "30012",
            "description": "<p>禁言用户失败</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "30013",
            "description": "<p>接管主持人信息已失效</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "40000",
            "description": "<p>版本已存在</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "40001",
            "description": "<p>版本不存在</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "40002",
            "description": "<p>没有新版本</p>"
          }
        ]
      }
    },
    "filename": "seal-mic/src/main/java/cn/rongcloud/mic/controller/IndexController.java",
    "groupTitle": "接口说明"
  },
  {
    "type": "",
    "url": "/接口地址",
    "title": "API 接收签名规则",
    "description": "<p>融云服务器向应用服务器推送数据（调用应用服务器接口）时会添加 3 个 GET 请求参数（在 URL 上添加的参数）. </br>Signature (数据签名)计算方法：将系统分配的 App Secret、Nonce (随机数)、Timestamp (时间戳)三个字符串按先后顺序拼接成一个字符串并进行 SHA1 哈希计算。 </br>具体如下：</p>",
    "name": "接收签名规则",
    "group": "接口说明",
    "version": "2.6.2",
    "parameter": {
      "examples": [
        {
          "title": "签名校验代码示例:",
          "content": "PHP 语言的代码示例：\n$appSecret = 'Y1W2MeFwwwRxa0'; // 开发者平台分配的 App Secret。\n$nonce = $_GET['nonce']; // 获取随机数。\n$timestamp = $_GET['timestamp']; // 获取时间戳。\n$signature = $_GET['signature']; // 获取数据签名。\n$local_signature = sha1($appSecret.$nonce.$timestamp); // 生成本地签名。\nif(strcmp($signature, $local_signature)===0){\n    // TODO: 此处添加业务逻辑。\n    echo 'OK';\n} else {\n    echo 'Error';\n}\n请求示例\n/接口地址?nonce=14314&timestamp=1408710653000&signature=30be0bbca9c9b2e27578701e9fda2358a814c88f",
          "type": "json"
        }
      ],
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "nonce",
            "description": "<p>随机数，无长度限制。（参数在接收地址的url上）</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "timestamp",
            "description": "<p>时间戳，从 1970 年 1 月 1 日 0 点 0 分 0 秒开始到现在的毫秒数。（参数在接收地址的url上）</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "signature",
            "description": "<p>数据签名。（参数在接收地址的url上）</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "返回结果": [
          {
            "group": "返回结果",
            "type": "Int",
            "optional": false,
            "field": "code",
            "description": "<p>返回码，200 为正常。</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "服务响应示例:",
          "content": "HTTP/1.1 200 OK\nContent-Type: application/json; charset=utf-8\n{\n\"code\":200\n }",
          "type": "json"
        }
      ]
    },
    "filename": "seal-mic/BaseApi.java",
    "groupTitle": "接口说明"
  },
  {
    "type": "",
    "url": "/接口地址",
    "title": "API 调用签名规则",
    "description": "<p>本文档中所有请求融云服务端 API 接口的请求均使用此规则校验，以下不再重复说明。 每次请求 API 接口时，均需要提供 4 个 HTTP Request Header，具体如下：</p>",
    "name": "调用签名规则",
    "group": "接口说明",
    "version": "2.6.2",
    "parameter": {
      "examples": [
        {
          "title": "签名生成代码示例:",
          "content": "PHP 语言的代码示例：\n// 重置随机数种子。\nsrand((double)microtime()*1000000);\n\n$appSecret = 'Y1W2MeFwwwRxa0'; // 开发者平台分配的 App Secret。\n$nonce = rand(); // 获取随机数。\n$timestamp = time()*1000; // 获取时间戳（毫秒）。\n\n $signature = sha1($appSecret.$nonce.$timestamp);",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "返回结果": [
          {
            "group": "返回结果",
            "type": "Int",
            "optional": false,
            "field": "code",
            "description": "<p>返回码，200 为正常。</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "服务响应示例:",
          "content": "HTTP/1.1 200 OK\nContent-Type: application/json; charset=utf-8\n{\n\"code\":200\n }",
          "type": "json"
        }
      ]
    },
    "filename": "seal-mic/BaseApi.java",
    "groupTitle": "接口说明",
    "header": {
      "fields": {
        "鉴权请求头": [
          {
            "group": "鉴权请求头",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>登录认证信息</p>"
          }
        ]
      }
    }
  },
  {
    "type": "",
    "url": "/接口地址",
    "title": "错误码",
    "description": "<p>通用错误码</p>",
    "name": "错误码",
    "group": "接口说明",
    "version": "2.6.2",
    "filename": "seal-mic/BaseApi.java",
    "groupTitle": "接口说明",
    "error": {
      "fields": {
        "HTTP通用状态码": [
          {
            "group": "http_error_msg",
            "optional": false,
            "field": "200",
            "description": "<p>成功\t成功</p>"
          },
          {
            "group": "http_error_msg",
            "optional": false,
            "field": "400",
            "description": "<p>错误请求\t该请求是无效的，详细的错误信息会说明原因</p>"
          },
          {
            "group": "http_error_msg",
            "optional": false,
            "field": "401",
            "description": "<p>未授权\t验证失败，详细的错误信息会说明原因</p>"
          },
          {
            "group": "http_error_msg",
            "optional": false,
            "field": "403",
            "description": "<p>服务器拒绝请求\t被拒绝调用，详细的错误信息会说明原因</p>"
          },
          {
            "group": "http_error_msg",
            "optional": false,
            "field": "404",
            "description": "<p>未找到\t服务器找不到请求的地址</p>"
          },
          {
            "group": "http_error_msg",
            "optional": false,
            "field": "405",
            "description": "<p>方法禁用\t群容量超出上限，禁止调用</p>"
          },
          {
            "group": "http_error_msg",
            "optional": false,
            "field": "429",
            "description": "<p>太多的请求\t超出了调用频率限制，详细的错误信息会说明原因</p>"
          },
          {
            "group": "http_error_msg",
            "optional": false,
            "field": "500",
            "description": "<p>服务器内部错误\t服务器内部出错了，请联系我们尽快解决问题</p>"
          },
          {
            "group": "http_error_msg",
            "optional": false,
            "field": "504",
            "description": "<p>网关超时\t服务器在运行，本次请求响应超时，请稍后重试</p>"
          }
        ],
        "业务通用返回码": [
          {
            "group": "service_error_msg",
            "optional": false,
            "field": "404",
            "description": "<p>未找到\t服务器找不到请求的地址</p>"
          },
          {
            "group": "service_error_msg",
            "optional": false,
            "field": "1000",
            "description": "<p>服务内部错误\t服务器端内部逻辑错误,请稍后重试</p>"
          },
          {
            "group": "service_error_msg",
            "optional": false,
            "field": "1001",
            "description": "<p>App Secret 错误\tApp Key 与 App Secret 不匹配</p>"
          },
          {
            "group": "service_error_msg",
            "optional": false,
            "field": "1002",
            "description": "<p>参数错误\t参数错误，详细的描述信息会说明</p>"
          },
          {
            "group": "service_error_msg",
            "optional": false,
            "field": "1003",
            "description": "<p>无 POST 数据\t没有 POST 任何数据</p>"
          },
          {
            "group": "service_error_msg",
            "optional": false,
            "field": "1004",
            "description": "<p>验证签名错误\t验证签名错误</p>"
          },
          {
            "group": "service_error_msg",
            "optional": false,
            "field": "1005",
            "description": "<p>参数长度超限\t参数长度超限，详细的描述信息会说明</p>"
          },
          {
            "group": "service_error_msg",
            "optional": false,
            "field": "1006",
            "description": "<p>App 被锁定或删除\tApp 被锁定或删除</p>"
          },
          {
            "group": "service_error_msg",
            "optional": false,
            "field": "1007",
            "description": "<p>被限制调用\t该方法被限制调用，详细的描述信息会说明</p>"
          },
          {
            "group": "service_error_msg",
            "optional": false,
            "field": "1008",
            "description": "<p>调用频率超限\t调用频率超限，详细的描述信息会说明，广播消息未开通时也会返回此状态码。</p>"
          },
          {
            "group": "service_error_msg",
            "optional": false,
            "field": "1009",
            "description": "<p>服务未开通\t未开通该服务，请到开发者管理后台开通或提交工单申请。</p>"
          },
          {
            "group": "service_error_msg",
            "optional": false,
            "field": "1015",
            "description": "<p>删除的数据不存在\t要删除的保活聊天室 ID 不存在。</p>"
          },
          {
            "group": "service_error_msg",
            "optional": false,
            "field": "1016",
            "description": "<p>设置保活聊天室个数超限\t设置的保活聊天室个数超限。</p>"
          },
          {
            "group": "service_error_msg",
            "optional": false,
            "field": "1050",
            "description": "<p>内部服务超时\t内部服务响应超时</p>"
          },
          {
            "group": "service_error_msg",
            "optional": false,
            "field": "2007",
            "description": "<p>测试用户数量超限\t测试用户数量超限</p>"
          }
        ]
      }
    }
  },
  {
    "type": "post",
    "url": "/api/room/message/broadcast",
    "title": "发送聊天室广播消息",
    "version": "1.0.0",
    "name": "roomMessageBroadcast",
    "group": "消息模块",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "fromUserId",
            "description": "<p>发送人用户 Id。</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "objectName",
            "description": "<p>消息类型，参考融云消息类型表.消息标志；可自定义消息类型，长度不超过 32 个字符，您在自定义消息时需要注意，不要以 &quot;RC:&quot; 开头，以避免与融云系统内置消息的 ObjectName 重名。（必传）</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "content",
            "description": "<p>发送消息内容，单条消息最大 128k，内置消息以 JSON 方式进行数据序列化，消息中可选择是否携带用户信息，详见融云内置消息结构详解；如果 objectName 为自定义消息类型，该参数可自定义格式，不限于 JSON。（必传）</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "请求参数示例:",
          "content": "POST /api/room/message/broadcast HTTP/1.1\nHost: api-cn.ronghub.com\nAuthorization: authorization\nContent-Type: application/json;charset=UTF-8\n{\n    \"fromUserId\": \"xxxxx\",\n    \"objectName\": \"RC:TxtMsg\"\n    \"content\":\"xxxxx\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "返回结果": [
          {
            "group": "返回结果",
            "type": "Int",
            "optional": false,
            "field": "code",
            "description": "<p>返回码，10000 为正常。</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "服务响应示例:",
          "content": "{\n     \"code\": 10000,\n     \"msg\": \"success\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "seal-mic/src/main/java/cn/rongcloud/mic/controller/RoomController.java",
    "groupTitle": "消息模块",
    "header": {
      "fields": {
        "鉴权请求头": [
          {
            "group": "鉴权请求头",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>登录认证信息</p>"
          }
        ]
      }
    }
  },
  {
    "type": "post",
    "url": "/api/user/batch",
    "title": "批量获取用户信息",
    "version": "1.0.0",
    "name": "batchGetUserInfo",
    "group": "用户模块",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Array",
            "optional": false,
            "field": "ids",
            "description": "<p>用户id</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "请求参数示例:",
          "content": "POST /api/user/batch HTTP/1.1\nHost: api-cn.ronghub.com\nContent-Type: application/json;charset=UTF-8\n{\n  \"userIds\":[\"xxxx\", \"xxxxxxx\"]\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "返回结果": [
          {
            "group": "返回结果",
            "type": "String",
            "optional": false,
            "field": "userId",
            "description": "<p>用户ID</p>"
          },
          {
            "group": "返回结果",
            "type": "String",
            "optional": false,
            "field": "userName",
            "description": "<p>用户名称</p>"
          },
          {
            "group": "返回结果",
            "type": "String",
            "optional": false,
            "field": "portrait",
            "description": "<p>用户头像</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "服务响应示例:",
          "content": "{\n     \"code\": 10000,\n     \"msg\": \"success\",\n     \"data\": [{\n          \"userId\": \"2akJS6N5QOYsCKf5LhpgqY\",\n          \"userName\": \"秦时明月\",\n          \"portrait\": \"http://xxx:xxx/portrait.png\"\n     }]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "seal-mic/src/main/java/cn/rongcloud/mic/controller/UserController.java",
    "groupTitle": "用户模块"
  },
  {
    "type": "post",
    "url": "/api/user/login",
    "title": "用户登录",
    "version": "1.0.0",
    "name": "userLogin",
    "group": "用户模块",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "mobile",
            "description": "<p>手机号</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "verifyCode",
            "description": "<p>验证码(开启短信验证时，必填)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "userName",
            "description": "<p>用户名称</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "portrait",
            "description": "<p>头像</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "deviceId",
            "description": "<p>设备ID</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "请求参数示例:",
          "content": "POST /api/user/login HTTP/1.1\nHost: api-cn.ronghub.com\nContent-Type: application/json;charset=UTF-8\n{\n\t   \"mobile\": \"13300000000\",\n\t   \"verifyCode\": \"1234\",\n\t   \"userName\": \"秦时明月\",\n    \"portrait\": \"http://xxx:xxx/portrait.png\",\n    \"deviceId\": \"xxxxxxxx\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "返回结果": [
          {
            "group": "返回结果",
            "type": "String",
            "optional": false,
            "field": "userId",
            "description": "<p>用户ID</p>"
          },
          {
            "group": "返回结果",
            "type": "String",
            "optional": false,
            "field": "userName",
            "description": "<p>用户名称</p>"
          },
          {
            "group": "返回结果",
            "type": "String",
            "optional": false,
            "field": "portrait",
            "description": "<p>用户头像</p>"
          },
          {
            "group": "返回结果",
            "type": "String",
            "optional": false,
            "field": "imToken",
            "description": "<p>IM 连接 token</p>"
          },
          {
            "group": "返回结果",
            "type": "String",
            "optional": false,
            "field": "authorization",
            "description": "<p>认证信息</p>"
          },
          {
            "group": "返回结果",
            "type": "String",
            "optional": false,
            "field": "type",
            "description": "<p>用户类型，1 注册用户 0 游客</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "服务响应示例:",
          "content": "{\n     \"code\": 10000,\n     \"msg\": \"success\",\n     \"data\": {\n          \"userId\": \"2akJS6N5QOYsCKf5LhpgqY\",\n          \"userName\": \"秦时明月\",\n          \"portrait\": \"http://xxx:xxx/portrait.png\",\n          \"imToken\": \"xxxxxx\",\n          \"authorization\": \"xxxxxxx\",\n          \"type\": 1\n     }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "seal-mic/src/main/java/cn/rongcloud/mic/controller/UserController.java",
    "groupTitle": "用户模块"
  },
  {
    "type": "post",
    "url": "/api/user/refreshToken",
    "title": "刷新 token",
    "version": "1.0.0",
    "name": "userRefreshToken",
    "group": "用户模块",
    "parameter": {
      "examples": [
        {
          "title": "请求参数示例:",
          "content": "POST /api/user/refreshToken HTTP/1.1\nHost: api-cn.ronghub.com\nAuthorization: authorization\nContent-Type: application/json;charset=UTF-8",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "返回结果": [
          {
            "group": "返回结果",
            "type": "String",
            "optional": false,
            "field": "imToken",
            "description": "<p>IM 连接 token</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "服务响应示例:",
          "content": "{\n     \"code\": 10000,\n     \"msg\": \"success\",\n     \"data\": {\n          \"imToken\": \"xxxxxx\"\n     }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "seal-mic/src/main/java/cn/rongcloud/mic/controller/UserController.java",
    "groupTitle": "用户模块",
    "header": {
      "fields": {
        "鉴权请求头": [
          {
            "group": "鉴权请求头",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>登录认证信息</p>"
          }
        ]
      }
    }
  },
  {
    "type": "post",
    "url": "/api/user/sendCode",
    "title": "发送短信验证码",
    "version": "1.0.0",
    "name": "userSendCode",
    "group": "用户模块",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "mobile",
            "description": "<p>手机号</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "请求参数示例:",
          "content": "POST /api/user/sendCode HTTP/1.1\nHost: api-cn.ronghub.com\nContent-Type: application/json;charset=UTF-8\n{\n\t   \"mobile\": \"13333333333\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "服务响应示例:",
          "content": "{\n     \"code\": 10000,\n     \"msg\": \"success\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "seal-mic/src/main/java/cn/rongcloud/mic/controller/UserController.java",
    "groupTitle": "用户模块"
  },
  {
    "type": "post",
    "url": "/api/user/visitorLogin",
    "title": "游客登录",
    "version": "1.0.0",
    "name": "visitorLogin",
    "group": "用户模块",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "userName",
            "description": "<p>用户名称</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "portrait",
            "description": "<p>头像</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "deviceId",
            "description": "<p>设备ID</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "请求参数示例:",
          "content": "POST /api/user/visitorLogin HTTP/1.1\nHost: api-cn.ronghub.com\nContent-Type: application/json;charset=UTF-8\n{\n\t   \"userName\": \"秦时明月\",\n\t   \"portrait\":\"http://xxx:xxx/portrait.png\",\n\t   \"deviceId\": \"xxxxxxxx\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "返回结果": [
          {
            "group": "返回结果",
            "type": "String",
            "optional": false,
            "field": "userId",
            "description": "<p>用户ID</p>"
          },
          {
            "group": "返回结果",
            "type": "String",
            "optional": false,
            "field": "userName",
            "description": "<p>用户名称</p>"
          },
          {
            "group": "返回结果",
            "type": "String",
            "optional": false,
            "field": "portrait",
            "description": "<p>用户头像</p>"
          },
          {
            "group": "返回结果",
            "type": "String",
            "optional": false,
            "field": "imToken",
            "description": "<p>IM 连接 token</p>"
          },
          {
            "group": "返回结果",
            "type": "String",
            "optional": false,
            "field": "authorization",
            "description": "<p>认证信息</p>"
          },
          {
            "group": "返回结果",
            "type": "String",
            "optional": false,
            "field": "type",
            "description": "<p>用户类型，1 注册用户 0 游客</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "服务响应示例:",
          "content": "{\n     \"code\": 10000,\n     \"msg\": \"success\",\n     \"data\": {\n          \"userId\": \"2akJS6N5QOYsCKf5LhpgqY\",\n          \"userName\": \"秦时明月\",\n          \"portrait\": \"http://xxx:xxx/portrait.png\",\n          \"imToken\": \"xxxxxx\",\n          \"authorization\": \"xxxxxxx\",\n          \"type\": 0\n     }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "seal-mic/src/main/java/cn/rongcloud/mic/controller/UserController.java",
    "groupTitle": "用户模块"
  },
  {
    "type": "post",
    "url": "/api/room/mic/apply/accept",
    "title": "同意用户上麦(主持人)",
    "version": "1.0.0",
    "name": "roomMicAccept",
    "group": "麦位模块",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "roomId",
            "description": "<p>房间id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "userId",
            "description": "<p>用户id</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "请求参数示例:",
          "content": "POST /api/room/xxxxxxx/mic/apply/accept HTTP/1.1\nHost: api-cn.ronghub.com\nAuthorization: authorization\n{\n    \"roomId\":\"xxxxx\",\n    \"userId\":\"xxxxx\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "返回结果": [
          {
            "group": "返回结果",
            "type": "Int",
            "optional": false,
            "field": "code",
            "description": "<p>返回码，10000 为正常。</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "服务响应示例:",
          "content": "{\n     \"code\": 10000,\n     \"msg\": \"success\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "seal-mic/src/main/java/cn/rongcloud/mic/controller/RoomController.java",
    "groupTitle": "麦位模块",
    "header": {
      "fields": {
        "鉴权请求头": [
          {
            "group": "鉴权请求头",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>登录认证信息</p>"
          }
        ]
      }
    }
  },
  {
    "type": "post",
    "url": "/api/room/mic/apply",
    "title": "申请排麦(观众)",
    "version": "1.0.0",
    "name": "roomMicApply",
    "group": "麦位模块",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "roomId",
            "description": "<p>房间id</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "请求参数示例:",
          "content": "POST /api/room/mic/apply HTTP/1.1\nHost: api-cn.ronghub.com\nAuthorization: authorization\nContent-Type: application/json;charset=UTF-8\n{\n    \"roomId\":\"xxxxx\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "返回结果": [
          {
            "group": "返回结果",
            "type": "Int",
            "optional": false,
            "field": "code",
            "description": "<p>返回码，10000 为正常。</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "服务响应示例:",
          "content": "{\n     \"code\": 10000,\n     \"msg\": \"success\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "seal-mic/src/main/java/cn/rongcloud/mic/controller/RoomController.java",
    "groupTitle": "麦位模块",
    "header": {
      "fields": {
        "鉴权请求头": [
          {
            "group": "鉴权请求头",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>登录认证信息</p>"
          }
        ]
      }
    }
  },
  {
    "type": "put",
    "url": "/api/room/mic/state",
    "title": "麦位状态设置(主持人)",
    "version": "1.0.0",
    "name": "roomMicChange",
    "group": "麦位模块",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "roomId",
            "description": "<p>房间id</p>"
          },
          {
            "group": "Parameter",
            "type": "Int",
            "optional": false,
            "field": "state",
            "description": "<p>麦位状态, 0:正常, 1:麦位锁定, 2:闭麦</p>"
          },
          {
            "group": "Parameter",
            "type": "Int",
            "optional": false,
            "field": "position",
            "description": "<p>操作目标麦位</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "请求参数示例:",
          "content": "PUT /api/room/xxxxxxx/mic/change HTTP/1.1\nHost: api-cn.ronghub.com\nAuthorization: authorization\nContent-Type: application/json;charset=UTF-8\n{\n    \"roomId\":  \"xxxxx\",\n\t   \"state\": 0,\n\t   \"position\": 0\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "返回结果": [
          {
            "group": "返回结果",
            "type": "Int",
            "optional": false,
            "field": "code",
            "description": "<p>返回码，10000 为正常。</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "服务响应示例:",
          "content": "{\n     \"code\": 10000,\n     \"msg\": \"success\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "seal-mic/src/main/java/cn/rongcloud/mic/controller/RoomController.java",
    "groupTitle": "麦位模块",
    "header": {
      "fields": {
        "鉴权请求头": [
          {
            "group": "鉴权请求头",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>登录认证信息</p>"
          }
        ]
      }
    }
  },
  {
    "type": "post",
    "url": "/api/room/mic/invite",
    "title": "邀请用户连麦(主持人)",
    "version": "1.0.0",
    "name": "roomMicInvite",
    "group": "麦位模块",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Int",
            "optional": false,
            "field": "roomId",
            "description": "<p>房间id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "userId",
            "description": "<p>用户id</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "请求参数示例:",
          "content": "POST /api/room/mic/invite HTTP/1.1\nHost: api-cn.ronghub.com\nAuthorization: authorization\nContent-Type: application/json;charset=UTF-8\n{\n    \"roomId:\"xxxxx\",\n    \"userId\":\"xxxxx\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "返回结果": [
          {
            "group": "返回结果",
            "type": "Int",
            "optional": false,
            "field": "code",
            "description": "<p>返回码，10000 为正常。</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "服务响应示例:",
          "content": "{\n     \"code\": 10000,\n     \"msg\": \"success\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "seal-mic/src/main/java/cn/rongcloud/mic/controller/RoomController.java",
    "groupTitle": "麦位模块",
    "header": {
      "fields": {
        "鉴权请求头": [
          {
            "group": "鉴权请求头",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>登录认证信息</p>"
          }
        ]
      }
    }
  },
  {
    "type": "post",
    "url": "/api/room/mic/kick",
    "title": "踢用户下麦(主持人)",
    "version": "1.0.0",
    "name": "roomMicKick",
    "group": "麦位模块",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "roomId",
            "description": "<p>房间id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "userId",
            "description": "<p>用户id</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "请求参数示例:",
          "content": "POST /api/room/mic/kick HTTP/1.1\nHost: api-cn.ronghub.com\nAuthorization: authorization\nContent-Type: application/json;charset=UTF-8\n{\n    \"roomId\":\"xxxxx\",\n    \"userId\":\"xxxxx\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "返回结果": [
          {
            "group": "返回结果",
            "type": "Int",
            "optional": false,
            "field": "code",
            "description": "<p>返回码，10000 为正常。</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "服务响应示例:",
          "content": "{\n     \"code\": 10000,\n     \"msg\": \"success\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "seal-mic/src/main/java/cn/rongcloud/mic/controller/RoomController.java",
    "groupTitle": "麦位模块",
    "header": {
      "fields": {
        "鉴权请求头": [
          {
            "group": "鉴权请求头",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>登录认证信息</p>"
          }
        ]
      }
    }
  },
  {
    "type": "post",
    "url": "/api/room/mic/quit",
    "title": "主播下麦",
    "version": "1.0.0",
    "name": "roomMicQuit",
    "group": "麦位模块",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "roomId",
            "description": "<p>房间id</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "请求参数示例:",
          "content": "POST /api/room/mic/quit HTTP/1.1\nHost: api-cn.ronghub.com\nAuthorization: authorization\nContent-Type: application/json;charset=UTF-8\n{\n    \"roomId\":\"xxxxx\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "返回结果": [
          {
            "group": "返回结果",
            "type": "Int",
            "optional": false,
            "field": "code",
            "description": "<p>返回码，10000 为正常。</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "服务响应示例:",
          "content": "{\n     \"code\": 10000,\n     \"msg\": \"success\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "seal-mic/src/main/java/cn/rongcloud/mic/controller/RoomController.java",
    "groupTitle": "麦位模块",
    "header": {
      "fields": {
        "鉴权请求头": [
          {
            "group": "鉴权请求头",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>登录认证信息</p>"
          }
        ]
      }
    }
  },
  {
    "type": "post",
    "url": "/api/room/mic/apply/reject",
    "title": "拒绝用户上麦(主持人)",
    "version": "1.0.0",
    "name": "roomMicReject",
    "group": "麦位模块",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "roomId",
            "description": "<p>房间id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "userId",
            "description": "<p>用户id</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "请求参数示例:",
          "content": "POST /api/room/xxxxxxx/mic/apply/reject HTTP/1.1\nHost: api-cn.ronghub.com\nAuthorization: authorization\n{\n    \"roomId\": \"xxxxx\",\n    \"userId\":\"xxxxx\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "返回结果": [
          {
            "group": "返回结果",
            "type": "Int",
            "optional": false,
            "field": "code",
            "description": "<p>返回码，10000 为正常。</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "服务响应示例:",
          "content": "{\n     \"code\": 10000,\n     \"msg\": \"success\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "seal-mic/src/main/java/cn/rongcloud/mic/controller/RoomController.java",
    "groupTitle": "麦位模块",
    "header": {
      "fields": {
        "鉴权请求头": [
          {
            "group": "鉴权请求头",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>登录认证信息</p>"
          }
        ]
      }
    }
  },
  {
    "type": "post",
    "url": "/api/room/mic/takeOverHost",
    "title": "接管主持人",
    "version": "1.0.0",
    "name": "takeOverHost",
    "group": "麦位模块",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "roomId",
            "description": "<p>房间id</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "请求参数示例:",
          "content": "POST /api/room/mic/takeOverHost HTTP/1.1\nHost: api-cn.ronghub.com\nAuthorization: authorization\nContent-Type: application/json;charset=UTF-8\n{\n    \"roomId\":\"xxxxx\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "返回结果": [
          {
            "group": "返回结果",
            "type": "Int",
            "optional": false,
            "field": "code",
            "description": "<p>返回码，10000 为正常。</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "服务响应示例:",
          "content": "{\n     \"code\": 10000,\n     \"msg\": \"success\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "seal-mic/src/main/java/cn/rongcloud/mic/controller/RoomController.java",
    "groupTitle": "麦位模块",
    "header": {
      "fields": {
        "鉴权请求头": [
          {
            "group": "鉴权请求头",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>登录认证信息</p>"
          }
        ]
      }
    }
  },
  {
    "type": "post",
    "url": "/api/room/mic/takeOverHost/accept",
    "title": "接管主持人同意(主持人)",
    "version": "1.0.0",
    "name": "takeOverHostAccept",
    "group": "麦位模块",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "roomId",
            "description": "<p>房间id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "userId",
            "description": "<p>用户id</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "请求参数示例:",
          "content": "POST /api/room/mic/takeOverHost/accept HTTP/1.1\nHost: api-cn.ronghub.com\nAuthorization: authorization\nContent-Type: application/json;charset=UTF-8\n{\n    \"roomId\":\"xxxxx\",\n    \"userId\":\"xxxx\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "返回结果": [
          {
            "group": "返回结果",
            "type": "Int",
            "optional": false,
            "field": "code",
            "description": "<p>返回码，10000 为正常。</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "服务响应示例:",
          "content": "{\n     \"code\": 10000,\n     \"msg\": \"success\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "seal-mic/src/main/java/cn/rongcloud/mic/controller/RoomController.java",
    "groupTitle": "麦位模块",
    "header": {
      "fields": {
        "鉴权请求头": [
          {
            "group": "鉴权请求头",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>登录认证信息</p>"
          }
        ]
      }
    }
  },
  {
    "type": "post",
    "url": "/api/room/mic/takeOverHost/reject",
    "title": "接管主持人拒绝(主持人)",
    "version": "1.0.0",
    "name": "takeOverHostReject",
    "group": "麦位模块",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "roomId",
            "description": "<p>房间id</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "请求参数示例:",
          "content": "POST /api/room/mic/takeOverHost/reject HTTP/1.1\nHost: api-cn.ronghub.com\nAuthorization: authorization\nContent-Type: application/json;charset=UTF-8\n{\n    \"roomId\":\"xxxxx\",\n    \"userId\":\"xxxxx\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "返回结果": [
          {
            "group": "返回结果",
            "type": "Int",
            "optional": false,
            "field": "code",
            "description": "<p>返回码，10000 为正常。</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "服务响应示例:",
          "content": "{\n     \"code\": 10000,\n     \"msg\": \"success\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "seal-mic/src/main/java/cn/rongcloud/mic/controller/RoomController.java",
    "groupTitle": "麦位模块",
    "header": {
      "fields": {
        "鉴权请求头": [
          {
            "group": "鉴权请求头",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>登录认证信息</p>"
          }
        ]
      }
    }
  },
  {
    "type": "post",
    "url": "/api/room/mic/transferHost",
    "title": "转让主持人(主持人)",
    "version": "1.0.0",
    "name": "transferHost",
    "group": "麦位模块",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "roomId",
            "description": "<p>房间id</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "请求参数示例:",
          "content": "POST /api/room/mic/transferHost HTTP/1.1\nHost: api-cn.ronghub.com\nAuthorization: authorization\nContent-Type: application/json;charset=UTF-8\n{\n    \"roomId\":\"xxxxx\",\n    \"userId\":\"xxxxx\",\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "返回结果": [
          {
            "group": "返回结果",
            "type": "Int",
            "optional": false,
            "field": "code",
            "description": "<p>返回码，10000 为正常。</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "服务响应示例:",
          "content": "{\n     \"code\": 10000,\n     \"msg\": \"success\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "seal-mic/src/main/java/cn/rongcloud/mic/controller/RoomController.java",
    "groupTitle": "麦位模块",
    "header": {
      "fields": {
        "鉴权请求头": [
          {
            "group": "鉴权请求头",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>登录认证信息</p>"
          }
        ]
      }
    }
  },
  {
    "type": "post",
    "url": "/api/room/mic/transferHost/accept",
    "title": "转让主持人同意(主播)",
    "version": "1.0.0",
    "name": "transferHostAccept",
    "group": "麦位模块",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "roomId",
            "description": "<p>房间id</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "请求参数示例:",
          "content": "POST /api/room/mic/transferHost/accept HTTP/1.1\nHost: api-cn.ronghub.com\nAuthorization: authorization\nContent-Type: application/json;charset=UTF-8\n{\n    \"roomId\":\"xxxxx\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "返回结果": [
          {
            "group": "返回结果",
            "type": "Int",
            "optional": false,
            "field": "code",
            "description": "<p>返回码，10000 为正常。</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "服务响应示例:",
          "content": "{\n     \"code\": 10000,\n     \"msg\": \"success\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "seal-mic/src/main/java/cn/rongcloud/mic/controller/RoomController.java",
    "groupTitle": "麦位模块",
    "header": {
      "fields": {
        "鉴权请求头": [
          {
            "group": "鉴权请求头",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>登录认证信息</p>"
          }
        ]
      }
    }
  },
  {
    "type": "post",
    "url": "/api/room/mic/transferHost/reject",
    "title": "转让主持人拒绝(主播)",
    "version": "1.0.0",
    "name": "transferHostReject",
    "group": "麦位模块",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "roomId",
            "description": "<p>房间id</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "请求参数示例:",
          "content": "POST /api/room/mic/transferHost/reject HTTP/1.1\nHost: api-cn.ronghub.com\nAuthorization: authorization\nContent-Type: application/json;charset=UTF-8\n{\n    \"roomId\":\"xxxxx\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "返回结果": [
          {
            "group": "返回结果",
            "type": "Int",
            "optional": false,
            "field": "code",
            "description": "<p>返回码，10000 为正常。</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "服务响应示例:",
          "content": "{\n     \"code\": 10000,\n     \"msg\": \"success\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "seal-mic/src/main/java/cn/rongcloud/mic/controller/RoomController.java",
    "groupTitle": "麦位模块",
    "header": {
      "fields": {
        "鉴权请求头": [
          {
            "group": "鉴权请求头",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>登录认证信息</p>"
          }
        ]
      }
    }
  }
] });
