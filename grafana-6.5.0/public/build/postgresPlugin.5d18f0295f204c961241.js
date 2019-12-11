(window.webpackJsonp=window.webpackJsonp||[]).push([[43],{"2Wqq":function(e,t,r){"use strict";r.r(t);var a=r("mrSG"),n=r("LvDl"),i=r.n(n),s=function(){function e(e){this.$q=e}return e.prototype.processQueryResult=function(e){var t,r,n,i,s=[];if(!e.data.results)return{data:s};for(var o in e.data.results){var u=e.data.results[o];if(u.series)try{for(var l=(t=void 0,Object(a.__values)(u.series)),m=l.next();!m.done;m=l.next()){var c=m.value;s.push({target:c.name,datapoints:c.points,refId:u.refId,meta:u.meta})}}catch(e){t={error:e}}finally{try{m&&!m.done&&(r=l.return)&&r.call(l)}finally{if(t)throw t.error}}if(u.tables)try{for(var p=(n=void 0,Object(a.__values)(u.tables)),h=p.next();!h.done;h=p.next()){var d=h.value;d.type="table",d.refId=u.refId,d.meta=u.meta,s.push(d)}}catch(e){n={error:e}}finally{try{h&&!h.done&&(i=p.return)&&i.call(p)}finally{if(n)throw n.error}}}return{data:s}},e.prototype.parseMetricFindQueryResult=function(e,t){if(!t||0===t.data.length||0===t.data.results[e].meta.rowCount)return[];var r=t.data.results[e].tables[0].columns,a=t.data.results[e].tables[0].rows,n=this.findColIndex(r,"__text"),i=this.findColIndex(r,"__value");return 2===r.length&&-1!==n&&-1!==i?this.transformToKeyValueList(a,n,i):this.transformToSimpleList(a)},e.prototype.transformToKeyValueList=function(e,t,r){for(var a=[],n=0;n<e.length;n++)this.containsKey(a,e[n][t])||a.push({text:e[n][t],value:e[n][r]});return a},e.prototype.transformToSimpleList=function(e){for(var t=[],r=0;r<e.length;r++)for(var a=0;a<e[r].length;a++){var n=e[r][a];-1===t.indexOf(n)&&t.push(n)}return i.a.map(t,function(e){return{text:e}})},e.prototype.findColIndex=function(e,t){for(var r=0;r<e.length;r++)if(e[r].text===t)return r;return-1},e.prototype.containsKey=function(e,t){for(var r=0;r<e.length;r++)if(e[r].text===t)return!0;return!1},e.prototype.transformAnnotationResponse=function(e,t){for(var r=t.data.results[e.annotation.name].tables[0],a=-1,n=-1,i=-1,s=0;s<r.columns.length;s++)"time"===r.columns[s].text?a=s:"text"===r.columns[s].text?n=s:"tags"===r.columns[s].text&&(i=s);if(-1===a)return this.$q.reject({message:"Missing mandatory time column in annotation query."});var o=[];for(s=0;s<r.rows.length;s++){var u=r.rows[s];o.push({annotation:e.annotation,time:Math.floor(u[a]),title:u[-1],text:u[n],tags:u[i]?u[i].trim().split(/\s*,\s*/):[]})}return o},e}(),o=function(){function e(e,t,r){this.target=e,this.templateSrv=t,this.scopedVars=r,e.format=e.format||"time_series",e.timeColumn=e.timeColumn||"time",e.metricColumn=e.metricColumn||"none",e.group=e.group||[],e.where=e.where||[{type:"macro",name:"$__timeFilter",params:[]}],e.select=e.select||[[{type:"column",params:["value"]}]],"rawQuery"in this.target||(e.rawQuery="rawSql"in e),this.interpolateQueryStr=this.interpolateQueryStr.bind(this)}return e.$inject=["target","templateSrv","scopedVars"],e.prototype.unquoteIdentifier=function(e){return'"'===e[0]&&'"'===e[e.length-1]?e.substring(1,e.length-1).replace(/""/g,'"'):e},e.prototype.quoteIdentifier=function(e){return'"'+String(e).replace(/"/g,'""')+'"'},e.prototype.quoteLiteral=function(e){return"'"+String(e).replace(/'/g,"''")+"'"},e.prototype.escapeLiteral=function(e){return String(e).replace(/'/g,"''")},e.prototype.hasTimeGroup=function(){return i.a.find(this.target.group,function(e){return"time"===e.type})},e.prototype.hasMetricColumn=function(){return"none"!==this.target.metricColumn},e.prototype.interpolateQueryStr=function(e,t,r){return t.multi||t.includeAll?"string"==typeof e?this.quoteLiteral(e):i.a.map(e,this.quoteLiteral).join(","):this.escapeLiteral(e)},e.prototype.render=function(e){var t=this.target;return this.target.rawQuery||"table"in this.target?(t.rawQuery||(t.rawSql=this.buildQuery()),e?this.templateSrv.replace(t.rawSql,this.scopedVars,this.interpolateQueryStr):t.rawSql):""},e.prototype.hasUnixEpochTimecolumn=function(){return["int4","int8","float4","float8","numeric"].indexOf(this.target.timeColumnType)>-1},e.prototype.buildTimeColumn=function(e){void 0===e&&(e=!0);var t,r=this.hasTimeGroup(),a="$__timeGroup";if(r){var n=void 0;n=r.params.length>1&&"none"!==r.params[1]?r.params.join(","):r.params[0],this.hasUnixEpochTimecolumn()&&(a="$__unixEpochGroup"),e&&(a+="Alias"),t=a+"("+this.target.timeColumn+","+n+")"}else t=this.target.timeColumn,e&&(t+=' AS "time"');return t},e.prototype.buildMetricColumn=function(){return this.hasMetricColumn()?this.target.metricColumn+" AS metric":""},e.prototype.buildValueColumns=function(){var e,t,r="";try{for(var n=Object(a.__values)(this.target.select),i=n.next();!i.done;i=n.next()){var s=i.value;r+=",\n  "+this.buildValueColumn(s)}}catch(t){e={error:t}}finally{try{i&&!i.done&&(t=n.return)&&t.call(n)}finally{if(e)throw e.error}}return r},e.prototype.buildValueColumn=function(e){var t="";t=i.a.find(e,function(e){return"column"===e.type}).params[0];var r=i.a.find(e,function(e){return"aggregate"===e.type||"percentile"===e.type}),a=i.a.find(e,function(e){return"window"===e.type||"moving_window"===e.type});if(r){var n=r.params[0];switch(r.type){case"aggregate":t="first"===n||"last"===n?n+"("+t+","+this.target.timeColumn+")":n+"("+t+")";break;case"percentile":t=n+"("+r.params[1]+") WITHIN GROUP (ORDER BY "+t+")"}}if(a){var s=[];this.hasMetricColumn()&&s.push("PARTITION BY "+this.target.metricColumn),s.push("ORDER BY "+this.buildTimeColumn(!1));var o=s.join(" "),u=void 0,l=void 0;switch(a.type){case"window":switch(a.params[0]){case"delta":t=(u=t)+" - "+(l="lag("+u+") OVER ("+o+")");break;case"increase":t="(CASE WHEN "+(u=t)+" >= "+(l="lag("+u+") OVER ("+o+")")+" THEN "+u+" - "+l,t+=" WHEN "+l+" IS NULL THEN NULL ELSE "+u+" END)";break;case"rate":var m=this.target.timeColumn;r&&(m="min("+m+")"),t="(CASE WHEN "+(u=t)+" >= "+(l="lag("+u+") OVER ("+o+")")+" THEN "+u+" - "+l,t+=" WHEN "+l+" IS NULL THEN NULL ELSE "+u+" END)",t+="/extract(epoch from "+m+" - lag("+m+") OVER ("+o+"))";break;default:t=a.params[0]+"("+t+") OVER ("+o+")"}break;case"moving_window":t=a.params[0]+"("+t+") OVER ("+o+" ROWS "+a.params[1]+" PRECEDING)"}}var c=i.a.find(e,function(e){return"alias"===e.type});return c&&(t+=" AS "+this.quoteIdentifier(c.params[0])),t},e.prototype.buildWhereClause=function(){var e=this,t="",r=i.a.map(this.target.where,function(t,r){switch(t.type){case"macro":return t.name+"("+e.target.timeColumn+")";case"expression":return t.params.join(" ")}});return r.length>0&&(t="\nWHERE\n  "+r.join(" AND\n  ")),t},e.prototype.buildGroupClause=function(){for(var e="",t="",r=0;r<this.target.group.length;r++){var a=this.target.group[r];r>0&&(t+=", "),"time"===a.type?t+="1":t+=a.params[0]}return t.length&&(e="\nGROUP BY "+t,this.hasMetricColumn()&&(e+=",2")),e},e.prototype.buildQuery=function(){var e="SELECT";return e+="\n  "+this.buildTimeColumn(),this.hasMetricColumn()&&(e+=",\n  "+this.buildMetricColumn()),e+=this.buildValueColumns(),e+="\nFROM "+this.target.table,e+=this.buildWhereClause(),e+=this.buildGroupClause(),e+="\nORDER BY 1",this.hasMetricColumn()&&(e+=",2"),e},e}(),u=r("4qJB"),l=function(){function e(e,t,r,a,n){var u=this;this.backendSrv=t,this.$q=r,this.templateSrv=a,this.timeSrv=n,this.interpolateVariable=function(e,t){return"string"==typeof e?t.multi||t.includeAll?u.queryModel.quoteLiteral(e):e:"number"==typeof e?e:i.a.map(e,function(e){return u.queryModel.quoteLiteral(e)}).join(",")},this.name=e.name,this.id=e.id,this.jsonData=e.jsonData,this.responseParser=new s(this.$q),this.queryModel=new o({}),this.interval=(e.jsonData||{}).timeInterval||"1m"}return e.$inject=["instanceSettings","backendSrv","$q","templateSrv","timeSrv"],e.prototype.interpolateVariablesInQueries=function(e){var t=this,r=e;return e&&e.length>0&&(r=e.map(function(e){return Object(a.__assign)(Object(a.__assign)({},e),{datasource:t.name,rawSql:t.templateSrv.replace(e.rawSql,{},t.interpolateVariable)})})),r},e.prototype.query=function(e){var t=this,r=i.a.filter(e.targets,function(e){return!0!==e.hide}).map(function(r){var a=new o(r,t.templateSrv,e.scopedVars);return{refId:r.refId,intervalMs:e.intervalMs,maxDataPoints:e.maxDataPoints,datasourceId:t.id,rawSql:a.render(t.interpolateVariable),format:r.format}});return 0===r.length?this.$q.when({data:[]}):this.backendSrv.datasourceRequest({url:"/api/tsdb/query",method:"POST",data:{from:e.range.from.valueOf().toString(),to:e.range.to.valueOf().toString(),queries:r}}).then(this.responseParser.processQueryResult)},e.prototype.annotationQuery=function(e){var t=this;if(!e.annotation.rawQuery)return this.$q.reject({message:"Query missing in annotation definition"});var r={refId:e.annotation.name,datasourceId:this.id,rawSql:this.templateSrv.replace(e.annotation.rawQuery,e.scopedVars,this.interpolateVariable),format:"table"};return this.backendSrv.datasourceRequest({url:"/api/tsdb/query",method:"POST",data:{from:e.range.from.valueOf().toString(),to:e.range.to.valueOf().toString(),queries:[r]}}).then(function(r){return t.responseParser.transformAnnotationResponse(e,r)})},e.prototype.metricFindQuery=function(e,t){var r=this,a="tempvar";t&&t.variable&&t.variable.name&&(a=t.variable.name);var n=this.templateSrv.replace(e,Object(u.g)({query:e,wildcardChar:"%",options:t}),this.interpolateVariable),i={refId:a,datasourceId:this.id,rawSql:n,format:"table"},s=this.timeSrv.timeRange(),o={queries:[i],from:s.from.valueOf().toString(),to:s.to.valueOf().toString()};return this.backendSrv.datasourceRequest({url:"/api/tsdb/query",method:"POST",data:o}).then(function(e){return r.responseParser.parseMetricFindQueryResult(a,e)})},e.prototype.getVersion=function(){return this.metricFindQuery("SELECT current_setting('server_version_num')::int/100",{})},e.prototype.getTimescaleDBVersion=function(){return this.metricFindQuery("SELECT extversion FROM pg_extension WHERE extname = 'timescaledb'",{})},e.prototype.testDatasource=function(){return this.metricFindQuery("SELECT 1",{}).then(function(e){return{status:"success",message:"Database Connection OK"}}).catch(function(e){return console.log(e),e.data&&e.data.message?{status:"error",message:e.data.message}:{status:"error",message:e.status}})},e.prototype.targetContainsTemplate=function(e){var t="";e.rawQuery?t=e.rawSql:t=new o(e).buildQuery();return t=t.replace("$__",""),this.templateSrv.variableExists(t)},e}(),m=r("Xmxp"),c=function(){function e(e,t){this.target=e,this.queryModel=t}return e.prototype.getOperators=function(e){switch(e){case"float4":case"float8":return["=","!=","<","<=",">",">="];case"text":case"varchar":case"char":return["=","!=","<","<=",">",">=","IN","NOT IN","LIKE","NOT LIKE","~","~*","!~","!~*"];default:return["=","!=","<","<=",">",">=","IN","NOT IN"]}},e.prototype.quoteIdentAsLiteral=function(e){return this.queryModel.quoteLiteral(this.queryModel.unquoteIdentifier(e))},e.prototype.findMetricTable=function(){var e="\nSELECT\n\tquote_ident(table_name) as table_name,\n\t( SELECT\n\t    quote_ident(column_name) as column_name\n\t  FROM information_schema.columns c\n    WHERE\n      c.table_schema = t.table_schema AND\n      c.table_name = t.table_name AND\n      udt_name IN ('timestamptz','timestamp')\n    ORDER BY ordinal_position LIMIT 1\n  ) AS time_column,\n  ( SELECT\n      quote_ident(column_name) AS column_name\n    FROM information_schema.columns c\n    WHERE\n      c.table_schema = t.table_schema AND\n      c.table_name = t.table_name AND\n      udt_name='float8'\n    ORDER BY ordinal_position LIMIT 1\n  ) AS value_column\nFROM information_schema.tables t\nWHERE ";return e+=this.buildSchemaConstraint(),e+=" AND\n  EXISTS\n  ( SELECT 1\n    FROM information_schema.columns c\n    WHERE\n      c.table_schema = t.table_schema AND\n      c.table_name = t.table_name AND\n      udt_name IN ('timestamptz','timestamp')\n  ) AND\n  EXISTS\n  ( SELECT 1\n    FROM information_schema.columns c\n    WHERE\n      c.table_schema = t.table_schema AND\n      c.table_name = t.table_name AND\n      udt_name='float8'\n  )\nLIMIT 1\n;"},e.prototype.buildSchemaConstraint=function(){return"\ntable_schema IN (\n  SELECT\n    CASE WHEN trim(s[i]) = '\"$user\"' THEN user ELSE trim(s[i]) END\n  FROM\n    generate_series(\n      array_lower(string_to_array(current_setting('search_path'),','),1),\n      array_upper(string_to_array(current_setting('search_path'),','),1)\n    ) as i,\n    string_to_array(current_setting('search_path'),',') s\n)"},e.prototype.buildTableConstraint=function(e){var t="";if(e.includes(".")){var r=e.split(".");return t="table_schema = "+this.quoteIdentAsLiteral(r[0]),t+=" AND table_name = "+this.quoteIdentAsLiteral(r[1])}return t=this.buildSchemaConstraint(),t+=" AND table_name = "+this.quoteIdentAsLiteral(e)},e.prototype.buildTableQuery=function(){var e="SELECT quote_ident(table_name) FROM information_schema.tables WHERE ";return e+=this.buildSchemaConstraint(),e+=" ORDER BY table_name"},e.prototype.buildColumnQuery=function(e){var t="SELECT quote_ident(column_name) FROM information_schema.columns WHERE ";switch(t+=this.buildTableConstraint(this.target.table),e){case"time":t+=" AND data_type IN ('timestamp without time zone','timestamp with time zone','bigint','integer','double precision','real')";break;case"metric":t+=" AND data_type IN ('text','character','character varying')";break;case"value":t+=" AND data_type IN ('bigint','integer','double precision','real')",t+=" AND column_name <> "+this.quoteIdentAsLiteral(this.target.timeColumn);break;case"group":t+=" AND data_type IN ('text','character','character varying')"}return t+=" ORDER BY column_name"},e.prototype.buildValueQuery=function(e){var t="SELECT DISTINCT quote_literal("+e+")";return t+=" FROM "+this.target.table,t+=" WHERE $__timeFilter("+this.target.timeColumn+")",t+=" AND "+e+" IS NOT NULL",t+=" ORDER BY 1 LIMIT 100"},e.prototype.buildDatatypeQuery=function(e){var t="SELECT udt_name FROM information_schema.columns WHERE ";return t+=this.buildTableConstraint(this.target.table),t+=" AND column_name = "+this.quoteIdentAsLiteral(e)},e.prototype.buildAggregateQuery=function(){return"INNER JOIN pg_proc ON pg_aggregate.aggfnoid = pg_proc.oid ","INNER JOIN pg_type ON pg_type.oid=pg_proc.prorettype ","WHERE pronargs=1 AND typname IN ('float8') AND aggkind='n' ORDER BY 1","SELECT DISTINCT proname FROM pg_aggregate INNER JOIN pg_proc ON pg_aggregate.aggfnoid = pg_proc.oid INNER JOIN pg_type ON pg_type.oid=pg_proc.prorettype WHERE pronargs=1 AND typname IN ('float8') AND aggkind='n' ORDER BY 1"},e}(),p=r("LzXI"),h=r("XXK+"),d=[];function g(e){d[e.type]=new h.b(e)}g({type:"column",style:"label",params:[{type:"column",dynamicLookup:!0}],defaultParams:["value"]}),g({type:"expression",style:"expression",label:"Expr:",params:[{name:"left",type:"string",dynamicLookup:!0},{name:"op",type:"string",dynamicLookup:!0},{name:"right",type:"string",dynamicLookup:!0}],defaultParams:["value","=","value"]}),g({type:"macro",style:"label",label:"Macro:",params:[],defaultParams:[]}),g({type:"aggregate",style:"label",params:[{name:"name",type:"string",options:["avg","count","min","max","sum","stddev","variance"]}],defaultParams:["avg"]}),g({type:"percentile",label:"Aggregate:",style:"label",params:[{name:"name",type:"string",options:["percentile_cont","percentile_disc"]},{name:"fraction",type:"number",options:["0.5","0.75","0.9","0.95","0.99"]}],defaultParams:["percentile_cont","0.95"]}),g({type:"alias",style:"label",params:[{name:"name",type:"string",quote:"double"}],defaultParams:["alias"]}),g({type:"time",style:"function",label:"time",params:[{name:"interval",type:"interval",options:["$__interval","1s","10s","1m","5m","10m","15m","1h"]},{name:"fill",type:"string",options:["none","NULL","previous","0"]}],defaultParams:["$__interval","none"]}),g({type:"window",style:"label",params:[{name:"function",type:"string",options:["delta","increase","rate","sum"]}],defaultParams:["increase"]}),g({type:"moving_window",style:"label",label:"Moving Window:",params:[{name:"function",type:"string",options:["avg"]},{name:"window_size",type:"number",options:["3","5","7","10","20"]}],defaultParams:["avg","5"]});var f={create:function(e){var t=d[e.type];return t?new h.a(e,t):null}},y=r("GQ3c"),v=r("Obii"),b="SELECT\n  $__time(time_column),\n  value1\nFROM\n  metric_table\nWHERE\n  $__timeFilter(time_column)\n",S=function(e){function t(t,r,a,n,i){var s=e.call(this,t,r)||this;return s.templateSrv=a,s.$q=n,s.uiSegmentSrv=i,s.target=s.target,s.queryModel=new o(s.target,a,s.panel.scopedVars),s.metaBuilder=new c(s.target,s.queryModel),s.updateProjection(),s.formats=[{text:"Time series",value:"time_series"},{text:"Table",value:"table"}],s.target.rawSql||("table"===s.panelCtrl.panel.type?(s.target.format="table",s.target.rawSql="SELECT 1",s.target.rawQuery=!0):(s.target.rawSql=b,s.datasource.metricFindQuery(s.metaBuilder.findMetricTable()).then(function(e){if(e.length>0){s.target.table=e[0].text;var t=s.uiSegmentSrv.newSegment(s.target.table);s.tableSegment.html=t.html,s.tableSegment.value=t.value,s.target.timeColumn=e[1].text,t=s.uiSegmentSrv.newSegment(s.target.timeColumn),s.timeColumnSegment.html=t.html,s.timeColumnSegment.value=t.value,s.target.timeColumnType="timestamp",s.target.select=[[{type:"column",params:[e[2].text]}]],s.updateProjection(),s.updateRawSqlAndRefresh()}}))),s.target.table?s.tableSegment=i.newSegment(s.target.table):s.tableSegment=i.newSegment({value:"select table",fake:!0}),s.timeColumnSegment=i.newSegment(s.target.timeColumn),s.metricColumnSegment=i.newSegment(s.target.metricColumn),s.buildSelectMenu(),s.whereAdd=s.uiSegmentSrv.newPlusButton(),s.groupAdd=s.uiSegmentSrv.newPlusButton(),s.panelCtrl.events.on(v.PanelEvents.dataReceived,s.onDataReceived.bind(s),t),s.panelCtrl.events.on(v.PanelEvents.dataError,s.onDataError.bind(s),t),s}return t.$inject=["$scope","$injector","templateSrv","$q","uiSegmentSrv"],Object(a.__extends)(t,e),t.prototype.updateRawSqlAndRefresh=function(){this.target.rawQuery||(this.target.rawSql=this.queryModel.buildQuery()),this.panelCtrl.refresh()},t.prototype.updateProjection=function(){this.selectParts=i.a.map(this.target.select,function(e){return i.a.map(e,f.create).filter(function(e){return e})}),this.whereParts=i.a.map(this.target.where,f.create).filter(function(e){return e}),this.groupParts=i.a.map(this.target.group,f.create).filter(function(e){return e})},t.prototype.updatePersistedParts=function(){this.target.select=i.a.map(this.selectParts,function(e){return i.a.map(e,function(e){return{type:e.def.type,datatype:e.datatype,params:e.params}})}),this.target.where=i.a.map(this.whereParts,function(e){return{type:e.def.type,datatype:e.datatype,name:e.name,params:e.params}}),this.target.group=i.a.map(this.groupParts,function(e){return{type:e.def.type,datatype:e.datatype,params:e.params}})},t.prototype.buildSelectMenu=function(){this.selectMenu=[];var e={text:"Aggregate Functions",value:"aggregate",submenu:[{text:"Average",value:"avg"},{text:"Count",value:"count"},{text:"Maximum",value:"max"},{text:"Minimum",value:"min"},{text:"Sum",value:"sum"},{text:"Standard deviation",value:"stddev"},{text:"Variance",value:"variance"}]};if(!0===this.datasource.jsonData.timescaledb&&(e.submenu.push({text:"First",value:"first"}),e.submenu.push({text:"Last",value:"last"})),this.selectMenu.push(e),this.datasource.jsonData.postgresVersion>=904){this.selectMenu.push({text:"Ordered-Set Aggregate Functions",value:"percentile",submenu:[{text:"Percentile (continuous)",value:"percentile_cont"},{text:"Percentile (discrete)",value:"percentile_disc"}]})}this.selectMenu.push({text:"Window Functions",value:"window",submenu:[{text:"Delta",value:"delta"},{text:"Increase",value:"increase"},{text:"Rate",value:"rate"},{text:"Sum",value:"sum"},{text:"Moving Average",value:"avg",type:"moving_window"}]}),this.selectMenu.push({text:"Alias",value:"alias"}),this.selectMenu.push({text:"Column",value:"column"})},t.prototype.toggleEditorMode=function(){var e=this;this.target.rawQuery?m.b.emit(y.CoreEvents.showConfirmModal,{title:"Warning",text2:"Switching to query builder may overwrite your raw SQL.",icon:"fa-exclamation",yesText:"Switch",onConfirm:function(){e.target.rawQuery=!e.target.rawQuery}}):this.target.rawQuery=!this.target.rawQuery},t.prototype.resetPlusButton=function(e){var t=this.uiSegmentSrv.newPlusButton();e.html=t.html,e.value=t.value},t.prototype.getTableSegments=function(){return this.datasource.metricFindQuery(this.metaBuilder.buildTableQuery()).then(this.transformToSegments({})).catch(this.handleQueryError.bind(this))},t.prototype.tableChanged=function(){var e=this;this.target.table=this.tableSegment.value,this.target.where=[],this.target.group=[],this.updateProjection();var t=this.uiSegmentSrv.newSegment("none");this.metricColumnSegment.html=t.html,this.metricColumnSegment.value=t.value,this.target.metricColumn="none";var r=this.datasource.metricFindQuery(this.metaBuilder.buildColumnQuery("time")).then(function(t){if(t.length>0&&!i.a.find(t,function(t){return t.text===e.target.timeColumn})){var r=e.uiSegmentSrv.newSegment(t[0].text);e.timeColumnSegment.html=r.html,e.timeColumnSegment.value=r.value}return e.timeColumnChanged(!1)}),a=this.datasource.metricFindQuery(this.metaBuilder.buildColumnQuery("value")).then(function(t){t.length>0&&(e.target.select=[[{type:"column",params:[t[0].text]}]],e.updateProjection())});this.$q.all([r,a]).then(function(){e.updateRawSqlAndRefresh()})},t.prototype.getTimeColumnSegments=function(){return this.datasource.metricFindQuery(this.metaBuilder.buildColumnQuery("time")).then(this.transformToSegments({})).catch(this.handleQueryError.bind(this))},t.prototype.timeColumnChanged=function(e){var t=this;return this.target.timeColumn=this.timeColumnSegment.value,this.datasource.metricFindQuery(this.metaBuilder.buildDatatypeQuery(this.target.timeColumn)).then(function(r){if(1===r.length){t.target.timeColumnType!==r[0].text&&(t.target.timeColumnType=r[0].text);var a=void 0;a=t.queryModel.hasUnixEpochTimecolumn()?f.create({type:"macro",name:"$__unixEpochFilter",params:[]}):f.create({type:"macro",name:"$__timeFilter",params:[]}),t.whereParts.length>=1&&"macro"===t.whereParts[0].def.type?t.whereParts[0]=a:t.whereParts.splice(0,0,a)}t.updatePersistedParts(),!1!==e&&t.updateRawSqlAndRefresh()})},t.prototype.getMetricColumnSegments=function(){return this.datasource.metricFindQuery(this.metaBuilder.buildColumnQuery("metric")).then(this.transformToSegments({addNone:!0})).catch(this.handleQueryError.bind(this))},t.prototype.metricColumnChanged=function(){this.target.metricColumn=this.metricColumnSegment.value,this.updateRawSqlAndRefresh()},t.prototype.onDataReceived=function(e){this.lastQueryMeta=null,this.lastQueryError=null,console.log("postgres query data received",e);var t=i.a.find(e,{refId:this.target.refId});t&&(this.lastQueryMeta=t.meta)},t.prototype.onDataError=function(e){if(e.data&&e.data.results){var t=e.data.results[this.target.refId];t&&(this.lastQueryMeta=t.meta,this.lastQueryError=t.error)}},t.prototype.transformToSegments=function(e){var t=this;return function(r){var n,s,o=i.a.map(r,function(e){return t.uiSegmentSrv.newSegment({value:e.text,expandable:e.expandable})});if(e.addTemplateVars)try{for(var u=Object(a.__values)(t.templateSrv.variables),l=u.next();!l.done;l=u.next()){var m=l.value,c=void 0;c="$"+m.name,e.templateQuoter&&!1===m.multi&&(c=e.templateQuoter(c)),o.unshift(t.uiSegmentSrv.newSegment({type:"template",value:c,expandable:!0}))}}catch(e){n={error:e}}finally{try{l&&!l.done&&(s=u.return)&&s.call(u)}finally{if(n)throw n.error}}return e.addNone&&o.unshift(t.uiSegmentSrv.newSegment({type:"template",value:"none",expandable:!0})),o}},t.prototype.findAggregateIndex=function(e){return i.a.findIndex(e,function(e){return"aggregate"===e.def.type||"percentile"===e.def.type})},t.prototype.findWindowIndex=function(e){return i.a.findIndex(e,function(e){return"window"===e.def.type||"moving_window"===e.def.type})},t.prototype.addSelectPart=function(e,t,r){var a=t.value;r&&r.type&&(a=r.type);var n=f.create({type:a});r&&(n.params[0]=r.value);var s=!1;switch(a){case"column":var o=i.a.map(e,function(e){return f.create({type:e.def.type,params:i.a.clone(e.params)})});this.selectParts.push(o);break;case"percentile":case"aggregate":0===this.target.group.length&&this.addGroup("time","$__interval");var u=this.findAggregateIndex(e);-1!==u?e[u]=n:e.splice(1,0,n),i.a.find(e,function(e){return"alias"===e.def.type})||(s=!0);break;case"moving_window":case"window":var l=this.findWindowIndex(e);if(-1!==l)e[l]=n;else{var m=this.findAggregateIndex(e);-1!==m?e.splice(m+1,0,n):e.splice(1,0,n)}i.a.find(e,function(e){return"alias"===e.def.type})||(s=!0);break;case"alias":s=!0}s&&(n=f.create({type:"alias",params:[e[0].params[0].replace(/"/g,"")]}),"alias"===e[e.length-1].def.type?e[e.length-1]=n:e.push(n)),this.updatePersistedParts(),this.updateRawSqlAndRefresh()},t.prototype.removeSelectPart=function(e,t){if("column"===t.def.type){if(this.selectParts.length>1){var r=i.a.indexOf(this.selectParts,e);this.selectParts.splice(r,1)}}else{var a=i.a.indexOf(e,t);e.splice(a,1)}this.updatePersistedParts()},t.prototype.handleSelectPartEvent=function(e,t,r){switch(r.name){case"get-param-options":switch(t.def.type){case"aggregate":return this.datasource.metricFindQuery(this.metaBuilder.buildAggregateQuery()).then(this.transformToSegments({})).catch(this.handleQueryError.bind(this));case"column":return this.datasource.metricFindQuery(this.metaBuilder.buildColumnQuery("value")).then(this.transformToSegments({})).catch(this.handleQueryError.bind(this))}case"part-param-changed":this.updatePersistedParts(),this.updateRawSqlAndRefresh();break;case"action":this.removeSelectPart(e,t),this.updateRawSqlAndRefresh();break;case"get-part-actions":return this.$q.when([{text:"Remove",value:"remove-part"}])}},t.prototype.handleGroupPartEvent=function(e,t,r){switch(r.name){case"get-param-options":return this.datasource.metricFindQuery(this.metaBuilder.buildColumnQuery()).then(this.transformToSegments({})).catch(this.handleQueryError.bind(this));case"part-param-changed":this.updatePersistedParts(),this.updateRawSqlAndRefresh();break;case"action":this.removeGroup(e,t),this.updateRawSqlAndRefresh();break;case"get-part-actions":return this.$q.when([{text:"Remove",value:"remove-part"}])}},t.prototype.addGroup=function(e,t){var r,n,i=[t];"time"===e&&(i=["$__interval","none"]);var s=f.create({type:e,params:i});"time"===e?this.groupParts.splice(0,0,s):this.groupParts.push(s);try{for(var o=Object(a.__values)(this.selectParts),u=o.next();!u.done;u=o.next()){var l=u.value;if(!l.some(function(e){return"aggregate"===e.def.type})){var m=f.create({type:"aggregate",params:["avg"]});if(l.splice(1,0,m),!l.some(function(e){return"alias"===e.def.type})){var c=f.create({type:"alias",params:[l[0].part.params[0]]});l.push(c)}}}}catch(e){r={error:e}}finally{try{u&&!u.done&&(n=o.return)&&n.call(o)}finally{if(r)throw r.error}}this.updatePersistedParts()},t.prototype.removeGroup=function(e,t){"time"===e.def.type&&(this.selectParts=i.a.map(this.selectParts,function(e){return i.a.filter(e,function(e){return"aggregate"!==e.def.type&&"percentile"!==e.def.type})})),this.groupParts.splice(t,1),this.updatePersistedParts()},t.prototype.handleWherePartEvent=function(e,t,r,a){var n=this;switch(r.name){case"get-param-options":switch(r.param.name){case"left":return this.datasource.metricFindQuery(this.metaBuilder.buildColumnQuery()).then(this.transformToSegments({})).catch(this.handleQueryError.bind(this));case"right":return["int4","int8","float4","float8","timestamp","timestamptz"].indexOf(t.datatype)>-1?this.$q.when([]):this.datasource.metricFindQuery(this.metaBuilder.buildValueQuery(t.params[0])).then(this.transformToSegments({addTemplateVars:!0,templateQuoter:function(e){return n.queryModel.quoteLiteral(e)}})).catch(this.handleQueryError.bind(this));case"op":return this.$q.when(this.uiSegmentSrv.newOperators(this.metaBuilder.getOperators(t.datatype)));default:return this.$q.when([])}case"part-param-changed":this.updatePersistedParts(),this.datasource.metricFindQuery(this.metaBuilder.buildDatatypeQuery(t.params[0])).then(function(e){1===e.length&&(t.datatype=e[0].text)}),this.updateRawSqlAndRefresh();break;case"action":e.splice(a,1),this.updatePersistedParts(),this.updateRawSqlAndRefresh();break;case"get-part-actions":return this.$q.when([{text:"Remove",value:"remove-part"}])}},t.prototype.getWhereOptions=function(){var e=[];return this.queryModel.hasUnixEpochTimecolumn()?e.push(this.uiSegmentSrv.newSegment({type:"macro",value:"$__unixEpochFilter"})):e.push(this.uiSegmentSrv.newSegment({type:"macro",value:"$__timeFilter"})),e.push(this.uiSegmentSrv.newSegment({type:"expression",value:"Expression"})),this.$q.when(e)},t.prototype.addWhereAction=function(e,t){switch(this.whereAdd.type){case"macro":var r=f.create({type:"macro",name:this.whereAdd.value,params:[]});this.whereParts.length>=1&&"macro"===this.whereParts[0].def.type?this.whereParts[0]=r:this.whereParts.splice(0,0,r);break;default:this.whereParts.push(f.create({type:"expression",params:["value","=","value"]}))}this.updatePersistedParts(),this.resetPlusButton(this.whereAdd),this.updateRawSqlAndRefresh()},t.prototype.getGroupOptions=function(){var e=this;return this.datasource.metricFindQuery(this.metaBuilder.buildColumnQuery("group")).then(function(t){var r,n,i=[];e.queryModel.hasTimeGroup()||i.push(e.uiSegmentSrv.newSegment({type:"time",value:"time($__interval,none)"}));try{for(var s=Object(a.__values)(t),o=s.next();!o.done;o=s.next()){var u=o.value;i.push(e.uiSegmentSrv.newSegment({type:"column",value:u.text}))}}catch(e){r={error:e}}finally{try{o&&!o.done&&(n=s.return)&&n.call(s)}finally{if(r)throw r.error}}return i}).catch(this.handleQueryError.bind(this))},t.prototype.addGroupAction=function(){this.groupAdd.value,this.addGroup(this.groupAdd.type,this.groupAdd.value),this.resetPlusButton(this.groupAdd),this.updateRawSqlAndRefresh()},t.prototype.handleQueryError=function(e){return this.error=e.message||"Failed to issue metric query",[]},t.templateUrl="partials/query.editor.html",t}(p.QueryCtrl),w=r("QjE0"),_=function(){function e(e,t){this.postgresVersions=[{name:"9.3",value:903},{name:"9.4",value:904},{name:"9.5",value:905},{name:"9.6",value:906},{name:"10",value:1e3}],this.datasourceSrv=t,this.current.jsonData.sslmode=this.current.jsonData.sslmode||"verify-full",this.current.jsonData.postgresVersion=this.current.jsonData.postgresVersion||903,this.showTimescaleDBHelp=!1,this.autoDetectFeatures(),this.onPasswordReset=Object(w.c)(this,w.a.Password),this.onPasswordChange=Object(w.b)(this,w.a.Password)}return e.$inject=["$scope","datasourceSrv"],e.prototype.autoDetectFeatures=function(){var e=this;this.current.id&&this.datasourceSrv.loadDatasource(this.current.name).then(function(t){return t.getVersion().then(function(r){(r=Number(r[0].text))>=906&&t.getTimescaleDBVersion().then(function(t){1===t.length&&(e.current.jsonData.timescaledb=!0)});var a=Math.trunc(r/100),n=r%100,s=String(a);r<1e3&&(s=String(a)+"."+String(n)),i.a.find(e.postgresVersions,function(e){return e.value===r})||e.postgresVersions.push({name:s,value:r}),e.current.jsonData.postgresVersion=r})})},e.prototype.toggleTimescaleDBHelp=function(){this.showTimescaleDBHelp=!this.showTimescaleDBHelp},e.templateUrl="partials/config.html",e}();r.d(t,"AnnotationsQueryCtrl",function(){return C}),r.d(t,"PostgresDatasource",function(){return l}),r.d(t,"Datasource",function(){return l}),r.d(t,"QueryCtrl",function(){return S}),r.d(t,"ConfigCtrl",function(){return _});var E="SELECT\n  extract(epoch from time_column) AS time,\n  text_column as text,\n  tags_column as tags\nFROM\n  metric_table\nWHERE\n  $__timeFilter(time_column)\n",C=function(){function e(){this.annotation.rawQuery=this.annotation.rawQuery||E}return e.templateUrl="partials/annotations.editor.html",e}()},QjE0:function(e,t,r){"use strict";var a;r.d(t,"a",function(){return a}),r.d(t,"c",function(){return n}),r.d(t,"b",function(){return i}),function(e){e.Password="password",e.BasicAuthPassword="basicAuthPassword"}(a||(a={}));var n=function(e,t){return function(r){r.preventDefault(),e.current[t]=null,e.current.secureJsonFields[t]=!1,e.current.secureJsonData=e.current.secureJsonData||{},e.current.secureJsonData[t]=""}},i=function(e,t){return function(r){e.current.secureJsonData=e.current.secureJsonData||{},e.current.secureJsonData[t]=r.currentTarget.value}}},"XXK+":function(e,t,r){"use strict";r.d(t,"b",function(){return i}),r.d(t,"a",function(){return s});var a=r("LvDl"),n=r.n(a),i=function(){return function(e){this.type=e.type,e.label?this.label=e.label:this.label=this.type[0].toUpperCase()+this.type.substring(1)+":",this.style=e.style,"function"===this.style?(this.wrapOpen="(",this.wrapClose=")",this.separator=", "):(this.wrapOpen=" ",this.wrapClose=" ",this.separator=" "),this.params=e.params,this.defaultParams=e.defaultParams}}(),s=function(){function e(e,t){if(this.part=e,this.def=t,!this.def)throw{message:"Could not find sql part "+e.type};this.datatype=e.datatype,e.name?(this.name=e.name,this.label=t.label+" "+e.name):(this.name="",this.label=t.label),e.params=e.params||n.a.clone(this.def.defaultParams),this.params=e.params}return e.prototype.updateParam=function(e,t){""===e&&this.def.params[t].optional?this.params.splice(t,1):this.params[t]=e,this.part.params=this.params},e}()}}]);
//# sourceMappingURL=postgresPlugin.5d18f0295f204c961241.js.map