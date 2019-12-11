(window.webpackJsonp=window.webpackJsonp||[]).push([[40],{QjE0:function(t,e,r){"use strict";var a;r.d(e,"a",function(){return a}),r.d(e,"c",function(){return n}),r.d(e,"b",function(){return s}),function(t){t.Password="password",t.BasicAuthPassword="basicAuthPassword"}(a||(a={}));var n=function(t,e){return function(r){r.preventDefault(),t.current[e]=null,t.current.secureJsonFields[e]=!1,t.current.secureJsonData=t.current.secureJsonData||{},t.current.secureJsonData[e]=""}},s=function(t,e){return function(r){t.current.secureJsonData=t.current.secureJsonData||{},t.current.secureJsonData[e]=r.currentTarget.value}}},R57O:function(t,e,r){"use strict";r.r(e);var a=r("mrSG"),n=r("LvDl"),s=r.n(n),o=function(){function t(t){this.$q=t}return t.prototype.processQueryResult=function(t){var e,r,n,s,o=[];if(!t.data.results)return{data:o};for(var i in t.data.results){var u=t.data.results[i];if(u.series)try{for(var l=(e=void 0,Object(a.__values)(u.series)),c=l.next();!c.done;c=l.next()){var f=c.value;o.push({target:f.name,datapoints:f.points,refId:u.refId,meta:u.meta})}}catch(t){e={error:t}}finally{try{c&&!c.done&&(r=l.return)&&r.call(l)}finally{if(e)throw e.error}}if(u.tables)try{for(var m=(n=void 0,Object(a.__values)(u.tables)),d=m.next();!d.done;d=m.next()){var p=d.value;p.type="table",p.refId=u.refId,p.meta=u.meta,o.push(p)}}catch(t){n={error:t}}finally{try{d&&!d.done&&(s=m.return)&&s.call(m)}finally{if(n)throw n.error}}}return{data:o}},t.prototype.parseMetricFindQueryResult=function(t,e){if(!e||0===e.data.length||0===e.data.results[t].meta.rowCount)return[];var r=e.data.results[t].tables[0].columns,a=e.data.results[t].tables[0].rows,n=this.findColIndex(r,"__text"),s=this.findColIndex(r,"__value");return 2===r.length&&-1!==n&&-1!==s?this.transformToKeyValueList(a,n,s):this.transformToSimpleList(a)},t.prototype.transformToKeyValueList=function(t,e,r){for(var a=[],n=0;n<t.length;n++)this.containsKey(a,t[n][e])||a.push({text:t[n][e],value:t[n][r]});return a},t.prototype.transformToSimpleList=function(t){for(var e=[],r=0;r<t.length;r++)for(var a=0;a<t[r].length;a++){var n=t[r][a];-1===e.indexOf(n)&&e.push(n)}return s.a.map(e,function(t){return{text:t}})},t.prototype.findColIndex=function(t,e){for(var r=0;r<t.length;r++)if(t[r].text===e)return r;return-1},t.prototype.containsKey=function(t,e){for(var r=0;r<t.length;r++)if(t[r].text===e)return!0;return!1},t.prototype.transformAnnotationResponse=function(t,e){for(var r=e.data.results[t.annotation.name].tables[0],a=-1,n=-1,s=-1,o=0;o<r.columns.length;o++)"time"===r.columns[o].text?a=o:"text"===r.columns[o].text?n=o:"tags"===r.columns[o].text&&(s=o);if(-1===a)return this.$q.reject({message:"Missing mandatory time column (with time column alias) in annotation query."});var i=[];for(o=0;o<r.rows.length;o++){var u=r.rows[o];i.push({annotation:t.annotation,time:Math.floor(u[a]),text:u[n],tags:u[s]?u[s].trim().split(/\s*,\s*/):[]})}return i},t}(),i=function(){function t(t,e,r,a,n){this.backendSrv=e,this.$q=r,this.templateSrv=a,this.timeSrv=n,this.name=t.name,this.id=t.id,this.responseParser=new o(this.$q),this.interval=(t.jsonData||{}).timeInterval||"1m"}return t.$inject=["instanceSettings","backendSrv","$q","templateSrv","timeSrv"],t.prototype.interpolateVariable=function(t,e){return"string"==typeof t?e.multi||e.includeAll?"'"+t.replace(/'/g,"''")+"'":t:"number"==typeof t?t:s.a.map(t,function(e){return"number"==typeof t?t:"'"+e.replace(/'/g,"''")+"'"}).join(",")},t.prototype.interpolateVariablesInQueries=function(t){var e=this,r=t;return t&&t.length>0&&(r=t.map(function(t){return Object(a.__assign)(Object(a.__assign)({},t),{datasource:e.name,rawSql:e.templateSrv.replace(t.rawSql,{},e.interpolateVariable)})})),r},t.prototype.query=function(t){var e=this,r=s.a.filter(t.targets,function(t){return!0!==t.hide}).map(function(r){return{refId:r.refId,intervalMs:t.intervalMs,maxDataPoints:t.maxDataPoints,datasourceId:e.id,rawSql:e.templateSrv.replace(r.rawSql,t.scopedVars,e.interpolateVariable),format:r.format}});return 0===r.length?this.$q.when({data:[]}):this.backendSrv.datasourceRequest({url:"/api/tsdb/query",method:"POST",data:{from:t.range.from.valueOf().toString(),to:t.range.to.valueOf().toString(),queries:r}}).then(this.responseParser.processQueryResult)},t.prototype.annotationQuery=function(t){var e=this;if(!t.annotation.rawQuery)return this.$q.reject({message:"Query missing in annotation definition"});var r={refId:t.annotation.name,datasourceId:this.id,rawSql:this.templateSrv.replace(t.annotation.rawQuery,t.scopedVars,this.interpolateVariable),format:"table"};return this.backendSrv.datasourceRequest({url:"/api/tsdb/query",method:"POST",data:{from:t.range.from.valueOf().toString(),to:t.range.to.valueOf().toString(),queries:[r]}}).then(function(r){return e.responseParser.transformAnnotationResponse(t,r)})},t.prototype.metricFindQuery=function(t,e){var r=this,a="tempvar";e&&e.variable&&e.variable.name&&(a=e.variable.name);var n={refId:a,datasourceId:this.id,rawSql:this.templateSrv.replace(t,{},this.interpolateVariable),format:"table"},s=this.timeSrv.timeRange(),o={queries:[n],from:s.from.valueOf().toString(),to:s.to.valueOf().toString()};return this.backendSrv.datasourceRequest({url:"/api/tsdb/query",method:"POST",data:o}).then(function(t){return r.responseParser.parseMetricFindQueryResult(a,t)})},t.prototype.testDatasource=function(){return this.backendSrv.datasourceRequest({url:"/api/tsdb/query",method:"POST",data:{from:"5m",to:"now",queries:[{refId:"A",intervalMs:1,maxDataPoints:1,datasourceId:this.id,rawSql:"SELECT 1",format:"table"}]}}).then(function(t){return{status:"success",message:"Database Connection OK"}}).catch(function(t){return console.log(t),t.data&&t.data.message?{status:"error",message:t.data.message}:{status:"error",message:t.status}})},t.prototype.targetContainsTemplate=function(t){var e=t.rawSql.replace("$__","");return this.templateSrv.variableExists(e)},t}(),u=r("LzXI"),l=r("Obii"),c="SELECT\n  $__timeEpoch(<time_column>),\n  <value column> as value,\n  <series name column> as metric\nFROM\n  <table name>\nWHERE\n  $__timeFilter(time_column)\nORDER BY\n  <time_column> ASC",f=function(t){function e(e,r){var a=t.call(this,e,r)||this;return a.target.format=a.target.format||"time_series",a.target.alias="",a.formats=[{text:"Time series",value:"time_series"},{text:"Table",value:"table"}],a.target.rawSql||("table"===a.panelCtrl.panel.type?(a.target.format="table",a.target.rawSql="SELECT 1"):a.target.rawSql=c),a.panelCtrl.events.on(l.PanelEvents.dataReceived,a.onDataReceived.bind(a),e),a.panelCtrl.events.on(l.PanelEvents.dataError,a.onDataError.bind(a),e),a}return e.$inject=["$scope","$injector"],Object(a.__extends)(e,t),e.prototype.onDataReceived=function(t){this.lastQueryMeta=null,this.lastQueryError=null;var e=s.a.find(t,{refId:this.target.refId});e&&(this.lastQueryMeta=e.meta)},e.prototype.onDataError=function(t){if(t.data&&t.data.results){var e=t.data.results[this.target.refId];e&&(this.lastQueryMeta=e.meta,this.lastQueryError=e.error)}},e.templateUrl="partials/query.editor.html",e}(u.QueryCtrl),m=r("QjE0"),d=function(){function t(t){this.current.jsonData.encrypt=this.current.jsonData.encrypt||"false",this.onPasswordReset=Object(m.c)(this,m.a.Password),this.onPasswordChange=Object(m.b)(this,m.a.Password)}return t.$inject=["$scope"],t.templateUrl="partials/config.html",t}();r.d(e,"AnnotationsQueryCtrl",function(){return h}),r.d(e,"MssqlDatasource",function(){return i}),r.d(e,"Datasource",function(){return i}),r.d(e,"QueryCtrl",function(){return f}),r.d(e,"ConfigCtrl",function(){return d});var p="SELECT\n    <time_column> as time,\n    <text_column> as text,\n    <tags_column> as tags\n  FROM\n    <table name>\n  WHERE\n    $__timeFilter(time_column)\n  ORDER BY\n    <time_column> ASC",h=function(){function t(){this.annotation.rawQuery=this.annotation.rawQuery||p}return t.templateUrl="partials/annotations.editor.html",t}()}}]);
//# sourceMappingURL=mssqlPlugin.5d18f0295f204c961241.js.map