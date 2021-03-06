define({ "api": [
  {
    "type": "get",
    "url": "/actual-vs-forecast",
    "title": "",
    "name": "GetActualVSForecast",
    "group": "Actual_Vs_Forecast",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "date",
            "optional": false,
            "field": "array",
            "description": "<p>Actual vs. Forecast dataset</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "insert_date",
            "description": "<p>Upload date</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "_id",
            "description": "<p>unique id</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n   \"data\":{\n       \"tooltip\":{\n           \"trigger\":\"axis\"\n       },\n       \"legend\":{\n           \"data\":[\"Infected\",\"Forecast\"]\n       },\n       \"grid\":{\n           \"left\":\"3%\",\n           \"right\":\"4%\",\n           \"bottom\":\"3%\",\n           \"containLabel\":true\n        },\n       \"xAxis\":{\n           \"type\":\"category\",\n           \"boundaryGap\":false,\n           \"data\":[\n               \"1/22/20\"\n           ]},\n       \"yAxis\":{\n           \"type\":\"value\",\n           \"position\":\"right\"\n       },\n       \"series\":[\n           {\n               \"name\":\"Infected\",\n               \"type\":\"line\",\n               \"data\":[0]\n           }\n       ]\n   },\n   \"insert_date\":\"2020-02-06T09:00:04.798Z\",\n   \"_id\":\"10e97470-48bf-11ea-828c-5168a5b9223a\"}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "api/actual-vs-forecast.js",
    "groupTitle": "Actual_Vs_Forecast"
  },
  {
    "type": "get",
    "url": "/echart-confirmed",
    "title": "",
    "version": "0.0.0",
    "group": "Echart_Confirmed_Infections",
    "name": "GetEchartConfirmedInfections",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "data",
            "description": "<p>Object used to create an echart</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "insert_date",
            "description": "<p>Upload date</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "_id",
            "description": "<p>unique id</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n   \"data\":{\n       \"tooltip\":{\n           \"trigger\":\"axis\"\n       },\n       \"legend\":{\n           \"data\":[\"Infected\",\"Forecast\"]\n       },\n       \"grid\":{\n           \"left\":\"3%\",\n           \"right\":\"4%\",\n           \"bottom\":\"3%\",\n           \"containLabel\":true\n        },\n       \"xAxis\":{\n           \"type\":\"category\",\n           \"boundaryGap\":false,\n           \"data\":[\n               \"1/22/20\"\n           ]},\n       \"yAxis\":{\n           \"type\":\"value\",\n           \"position\":\"right\"\n       },\n       \"series\":[\n           {\n               \"name\":\"Infected\",\n               \"type\":\"line\",\n               \"data\":[0]\n           }\n       ]\n   },\n   \"insert_date\":\"2020-02-06T09:00:04.798Z\",\n   \"_id\":\"10e97470-48bf-11ea-828c-5168a5b9223a\"}",
          "type": "json"
        }
      ]
    },
    "filename": "api/echart-confirmed.js",
    "groupTitle": "Echart_Confirmed_Infections"
  },
  {
    "type": "get",
    "url": "/echart-confirmed",
    "title": "",
    "version": "0.0.0",
    "name": "GetEchartDeaths",
    "group": "Echart_Deaths",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "data",
            "description": "<p>Object used to create an echart</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "insert_date",
            "description": "<p>Upload date</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "_id",
            "description": "<p>unique id</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n   \"data\":{\n       \"tooltip\":{\n           \"trigger\":\"axis\"\n       },\n       \"legend\":{\n           \"data\":[\"Deaths\",\"Forecast\"]\n       },\n       \"grid\":{\n           \"left\":\"3%\",\n           \"right\":\"4%\",\n           \"bottom\":\"3%\",\n           \"containLabel\":true\n        },\n       \"xAxis\":{\n           \"type\":\"category\",\n           \"boundaryGap\":false,\n           \"data\":[\n               \"1/22/20\"\n           ]},\n       \"yAxis\":{\n           \"type\":\"value\",\n           \"position\":\"right\"\n       },\n       \"series\":[\n           {\n               \"name\":\"Deaths\",\n               \"type\":\"line\",\n               \"data\":[0]\n           }\n       ]\n   },\n   \"insert_date\":\"2020-02-06T09:00:04.798Z\",\n   \"_id\":\"10e97470-48bf-11ea-828c-5168a5b9223a\"}",
          "type": "json"
        }
      ]
    },
    "filename": "api/echart-deaths.js",
    "groupTitle": "Echart_Deaths"
  },
  {
    "type": "get",
    "url": "/echart-suspected",
    "title": "",
    "name": "GetEchartSuspectedInfections",
    "group": "Echart_Suspected_Infections",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "data",
            "description": "<p>Object used to create an echart</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "insert_date",
            "description": "<p>Upload date</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "_id",
            "description": "<p>unique id</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n   \"data\":{\n       \"tooltip\":{\n           \"trigger\":\"axis\"\n       },\n       \"legend\":{\n           \"data\":[\"Suspected\",\"Forecast\"]\n       },\n       \"grid\":{\n           \"left\":\"3%\",\n           \"right\":\"4%\",\n           \"bottom\":\"3%\",\n           \"containLabel\":true\n        },\n       \"xAxis\":{\n           \"type\":\"category\",\n           \"boundaryGap\":false,\n           \"data\":[\n               \"1/22/20\"\n           ]},\n       \"yAxis\":{\n           \"type\":\"value\",\n           \"position\":\"right\"\n       },\n       \"series\":[\n           {\n               \"name\":\"Suspected\",\n               \"type\":\"line\",\n               \"data\":[0]\n           }\n       ]\n   },\n   \"insert_date\":\"2020-02-06T09:00:04.798Z\",\n   \"_id\":\"10e97470-48bf-11ea-828c-5168a5b9223a\"}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "api/echart-suspected.js",
    "groupTitle": "Echart_Suspected_Infections"
  },
  {
    "type": "get",
    "url": "/global-stats",
    "title": "",
    "group": "Global_Statistics",
    "name": "GlobalStats",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "array",
            "optional": false,
            "field": "data",
            "description": "<p>Contains an array with global statistics</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "insert_date",
            "description": "<p>Upload date</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "_id",
            "description": "<p>unique id</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n   \"data\":{\n     [\n       {\n         \"country_id\":1,\n         \"country_name\":\"China\",\n         \"county_id\":1,\n         \"county_name\":\"Hubei province\",\n         \"coordinates\":[30.583332,114.283333],\n         \"cases\":19665,\n         \"deaths\":549,\n         \"serious\":2328,\n         \"critical\":756,\n         \"recovered\":633\n       }\n     ]\n   },\n   \"insert_date\":\"2020-02-06T09:00:04.798Z\",\n   \"_id\":\"10e97470-48bf-11ea-828c-5168a5b9223a\"\n }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "api/global-stats.js",
    "groupTitle": "Global_Statistics"
  },
  {
    "type": "get",
    "url": "/suspected",
    "title": "",
    "group": "Suspected_Infections",
    "name": "Suspected_Infections",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "data",
            "description": "<p>Suspected Infections count</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "insert_date",
            "description": "<p>Upload date</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "_id",
            "description": "<p>unique id</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": " HTTP/1.1 200 OK\n {\n    {\n      \"data\":{\n        \"suspected\":24702\n      }\n    },\n    \"insert_date\":\"2020-02-06T09:00:04.798Z\",\n    \"_id\":\"10e97470-48bf-11ea-828c-5168a5b9223a\"\n  }\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "api/suspected.js",
    "groupTitle": "Suspected_Infections"
  }
] });
