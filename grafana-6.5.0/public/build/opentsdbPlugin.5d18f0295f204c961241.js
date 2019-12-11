(window.webpackJsonp=window.webpackJsonp||[]).push([[42],{"02dm":function(t,e,r){"use strict";r.r(e);var a=r("KHwQ"),i=r.n(a),s=r("LvDl"),n=r.n(s),o=r("Obii"),u=function(){function t(t,e,r,a){this.$q=e,this.backendSrv=r,this.templateSrv=a,this.type="opentsdb",this.url=t.url,this.name=t.name,this.withCredentials=t.withCredentials,this.basicAuth=t.basicAuth,t.jsonData=t.jsonData||{},this.tsdbVersion=t.jsonData.tsdbVersion||1,this.tsdbResolution=t.jsonData.tsdbResolution||1,this.tagKeys={},this.aggregatorsPromise=null,this.filterTypesPromise=null}return t.$inject=["instanceSettings","$q","backendSrv","templateSrv"],t.prototype.query=function(t){var e=this,r=this.convertToTSDBTime(t.rangeRaw.from,!1,t.timezone),a=this.convertToTSDBTime(t.rangeRaw.to,!0,t.timezone),i=[];n.a.each(t.targets,function(r){r.metric&&i.push(e.convertTargetToQuery(r,t,e.tsdbVersion))});var s=n.a.compact(i);if(n.a.isEmpty(s)){var o=this.$q.defer();return o.resolve({data:[]}),o.promise}var u={};return n.a.each(s,function(t){t.filters&&t.filters.length>0?n.a.each(t.filters,function(t){u[t.tagk]=!0}):n.a.each(t.tags,function(t,e){u[e]=!0})}),t.targets=n.a.filter(t.targets,function(t){return!0!==t.hide}),this.performTimeSeriesQuery(s,r,a).then(function(r){var a=e.mapMetricsToTargets(r.data,t,e.tsdbVersion);return{data:n.a.map(r.data,function(r,i){return-1===(i=a[i])&&(i=0),e._saveTagKeys(r),e.transformMetricData(r,u,t.targets[i],t,e.tsdbResolution)})}})},t.prototype.annotationQuery=function(t){var e=this.convertToTSDBTime(t.rangeRaw.from,!1,t.timezone),r=this.convertToTSDBTime(t.rangeRaw.to,!0,t.timezone),a=[],i=[];a.push({aggregator:"sum",metric:t.annotation.target});var s=n.a.compact(a);return this.performTimeSeriesQuery(s,e,r).then(function(e){if(e.data[0]){var r=e.data[0].annotations;t.annotation.isGlobal&&(r=e.data[0].globalAnnotations),r&&n.a.each(r,function(e){var r={text:e.description,time:1e3*Math.floor(e.startTime),annotation:t.annotation};i.push(r)})}return i})},t.prototype.targetContainsTemplate=function(t){if(t.filters&&t.filters.length>0)for(var e=0;e<t.filters.length;e++)if(this.templateSrv.variableExists(t.filters[e].filter))return!0;if(t.tags&&Object.keys(t.tags).length>0)for(var r in t.tags)if(this.templateSrv.variableExists(t.tags[r]))return!0;return!1},t.prototype.performTimeSeriesQuery=function(t,e,r){var a=!1;2===this.tsdbResolution&&(a=!0);var i={start:e,queries:t,msResolution:a,globalAnnotations:!0};3===this.tsdbVersion&&(i.showQuery=!0),r&&(i.end=r);var s={method:"POST",url:this.url+"/api/query",data:i};return this._addCredentialOptions(s),this.backendSrv.datasourceRequest(s)},t.prototype.suggestTagKeys=function(t){return this.$q.when(this.tagKeys[t]||[])},t.prototype._saveTagKeys=function(t){var e=Object.keys(t.tags);n.a.each(t.aggregateTags,function(t){e.push(t)}),this.tagKeys[t.metric]=e},t.prototype._performSuggestQuery=function(t,e){return this._get("/api/suggest",{type:e,q:t,max:1e3}).then(function(t){return t.data})},t.prototype._performMetricKeyValueLookup=function(t,e){if(!t||!e)return this.$q.when([]);var r=e.split(",").map(function(t){return t.trim()}),a=r[0],i=a+"=*";r.length>1&&(i+=","+r.splice(1).join(","));var s=t+"{"+i+"}";return this._get("/api/search/lookup",{m:s,limit:3e3}).then(function(t){t=t.data.results;var e=[];return n.a.each(t,function(t){-1===e.indexOf(t.tags[a])&&e.push(t.tags[a])}),e})},t.prototype._performMetricKeyLookup=function(t){return t?this._get("/api/search/lookup",{m:t,limit:1e3}).then(function(t){t=t.data.results;var e=[];return n.a.each(t,function(t){n.a.each(t.tags,function(t,r){-1===e.indexOf(r)&&e.push(r)})}),e}):this.$q.when([])},t.prototype._get=function(t,e){var r={method:"GET",url:this.url+t,params:e};return this._addCredentialOptions(r),this.backendSrv.datasourceRequest(r)},t.prototype._addCredentialOptions=function(t){(this.basicAuth||this.withCredentials)&&(t.withCredentials=!0),this.basicAuth&&(t.headers={Authorization:this.basicAuth})},t.prototype.metricFindQuery=function(t){if(!t)return this.$q.when([]);var e;try{e=this.templateSrv.replace(t,{},"distributed")}catch(t){return this.$q.reject(t)}var r=function(t){return n.a.map(t,function(t){return{text:t}})},a=e.match(/metrics\((.*)\)/);if(a)return this._performSuggestQuery(a[1],"metrics").then(r);var i=e.match(/tag_names\((.*)\)/);if(i)return this._performMetricKeyLookup(i[1]).then(r);var s=e.match(/tag_values\((.*?),\s?(.*)\)/);if(s)return this._performMetricKeyValueLookup(s[1],s[2]).then(r);var o=e.match(/suggest_tagk\((.*)\)/);if(o)return this._performSuggestQuery(o[1],"tagk").then(r);var u=e.match(/suggest_tagv\((.*)\)/);return u?this._performSuggestQuery(u[1],"tagv").then(r):this.$q.when([])},t.prototype.testDatasource=function(){return this._performSuggestQuery("cpu","metrics").then(function(){return{status:"success",message:"Data source is working"}})},t.prototype.getAggregators=function(){return this.aggregatorsPromise?this.aggregatorsPromise:(this.aggregatorsPromise=this._get("/api/aggregators").then(function(t){return t.data&&n.a.isArray(t.data)?t.data.sort():[]}),this.aggregatorsPromise)},t.prototype.getFilterTypes=function(){return this.filterTypesPromise?this.filterTypesPromise:(this.filterTypesPromise=this._get("/api/config/filters").then(function(t){return t.data?Object.keys(t.data).sort():[]}),this.filterTypesPromise)},t.prototype.transformMetricData=function(t,e,r,a,i){var s=this.createMetricLabel(t,r,e,a),o=[];return n.a.each(t.dps,function(t,e){2===i?o.push([t,1*e]):o.push([t,1e3*e])}),{target:s,datapoints:o}},t.prototype.createMetricLabel=function(t,e,r,a){if(e.alias){var i=n.a.clone(a.scopedVars||{});return n.a.each(t.tags,function(t,e){i["tag_"+e]={value:t}}),this.templateSrv.replace(e.alias,i)}var s=t.metric,o=[];return n.a.isEmpty(t.tags)||n.a.each(n.a.toPairs(t.tags),function(t){n.a.has(r,t[0])&&o.push(t[0]+"="+t[1])}),n.a.isEmpty(o)||(s+="{"+o.join(", ")+"}"),s},t.prototype.convertTargetToQuery=function(t,e,r){if(!t.metric||t.hide)return null;var a={metric:this.templateSrv.replace(t.metric,e.scopedVars,"pipe"),aggregator:"avg"};if(t.aggregator&&(a.aggregator=this.templateSrv.replace(t.aggregator)),t.shouldComputeRate&&(a.rate=!0,a.rateOptions={counter:!!t.isCounter},t.counterMax&&t.counterMax.length&&(a.rateOptions.counterMax=parseInt(t.counterMax,10)),t.counterResetValue&&t.counterResetValue.length&&(a.rateOptions.resetValue=parseInt(t.counterResetValue,10)),r>=2&&(a.rateOptions.dropResets=!(a.rateOptions.counterMax||a.rateOptions.ResetValue&&0!==a.rateOptions.ResetValue))),!t.disableDownsampling){var s=this.templateSrv.replace(t.downsampleInterval||e.interval);s.match(/\.[0-9]+s/)&&(s=1e3*parseFloat(s)+"ms"),a.downsample=s+"-"+t.downsampleAggregator,t.downsampleFillPolicy&&"none"!==t.downsampleFillPolicy&&(a.downsample+="-"+t.downsampleFillPolicy)}if(t.filters&&t.filters.length>0){if(a.filters=i.a.copy(t.filters),a.filters)for(var n in a.filters)a.filters[n].filter=this.templateSrv.replace(a.filters[n].filter,e.scopedVars,"pipe")}else if(a.tags=i.a.copy(t.tags),a.tags)for(var o in a.tags)a.tags[o]=this.templateSrv.replace(a.tags[o],e.scopedVars,"pipe");return t.explicitTags&&(a.explicitTags=!0),a},t.prototype.mapMetricsToTargets=function(t,e,r){var a,i,s=this;return n.a.map(t,function(t){return 3===r?t.query.index:n.a.findIndex(e.targets,function(r){return r.filters&&r.filters.length>0?r.metric===t.metric:r.metric===t.metric&&n.a.every(r.tags,function(r,o){return a=s.templateSrv.replace(r,e.scopedVars,"pipe"),i=a.split("|"),n.a.includes(i,t.tags[o])||"*"===a})})})},t.prototype.convertToTSDBTime=function(t,e,r){return"now"===t?null:(t=o.dateMath.parse(t,e,r)).valueOf()},t}(),l=r("mrSG"),g=r("PbtU"),c=function(t){function e(e,r){var a=t.call(this,e,r)||this;return a.errors=a.validateTarget(),a.aggregators=["avg","sum","min","max","dev","zimsum","mimmin","mimmax"],a.fillPolicies=["none","nan","null","zero"],a.filterTypes=["wildcard","iliteral_or","not_iliteral_or","not_literal_or","iwildcard","literal_or","regexp"],a.tsdbVersion=a.datasource.tsdbVersion,a.target.aggregator||(a.target.aggregator="sum"),a.target.downsampleAggregator||(a.target.downsampleAggregator="avg"),a.target.downsampleFillPolicy||(a.target.downsampleFillPolicy="none"),a.datasource.getAggregators().then(function(t){0!==t.length&&(a.aggregators=t)}),a.datasource.getFilterTypes().then(function(t){0!==t.length&&(a.filterTypes=t)}),a.suggestMetrics=function(t,e){a.datasource.metricFindQuery("metrics("+t+")").then(a.getTextValues).then(e)},a.suggestTagKeys=function(t,e){a.datasource.suggestTagKeys(a.target.metric).then(e)},a.suggestTagValues=function(t,e){a.datasource.metricFindQuery("suggest_tagv("+t+")").then(a.getTextValues).then(e)},a}return e.$inject=["$scope","$injector"],Object(l.__extends)(e,t),e.prototype.targetBlur=function(){this.errors=this.validateTarget(),this.refresh()},e.prototype.getTextValues=function(t){return n.a.map(t,function(t){return t.text})},e.prototype.addTag=function(){this.target.filters&&this.target.filters.length>0&&(this.errors.tags="Please remove filters to use tags, tags and filters are mutually exclusive."),this.addTagMode?(this.target.tags||(this.target.tags={}),this.errors=this.validateTarget(),this.errors.tags||(this.target.tags[this.target.currentTagKey]=this.target.currentTagValue,this.target.currentTagKey="",this.target.currentTagValue="",this.targetBlur()),this.addTagMode=!1):this.addTagMode=!0},e.prototype.removeTag=function(t){delete this.target.tags[t],this.targetBlur()},e.prototype.editTag=function(t,e){this.removeTag(t),this.target.currentTagKey=t,this.target.currentTagValue=e,this.addTag()},e.prototype.closeAddTagMode=function(){this.addTagMode=!1},e.prototype.addFilter=function(){if(this.target.tags&&n.a.size(this.target.tags)>0&&(this.errors.filters="Please remove tags to use filters, tags and filters are mutually exclusive."),this.addFilterMode){if(this.target.filters||(this.target.filters=[]),this.target.currentFilterType||(this.target.currentFilterType="iliteral_or"),this.target.currentFilterGroupBy||(this.target.currentFilterGroupBy=!1),this.errors=this.validateTarget(),!this.errors.filters){var t={type:this.target.currentFilterType,tagk:this.target.currentFilterKey,filter:this.target.currentFilterValue,groupBy:this.target.currentFilterGroupBy};this.target.filters.push(t),this.target.currentFilterType="literal_or",this.target.currentFilterKey="",this.target.currentFilterValue="",this.target.currentFilterGroupBy=!1,this.targetBlur()}this.addFilterMode=!1}else this.addFilterMode=!0},e.prototype.removeFilter=function(t){this.target.filters.splice(t,1),this.targetBlur()},e.prototype.editFilter=function(t,e){this.removeFilter(e),this.target.currentFilterKey=t.tagk,this.target.currentFilterValue=t.filter,this.target.currentFilterType=t.type,this.target.currentFilterGroupBy=t.groupBy,this.addFilter()},e.prototype.closeAddFilterMode=function(){this.addFilterMode=!1},e.prototype.validateTarget=function(){var t={};if(this.target.shouldDownsample)try{this.target.downsampleInterval?g.a.describe_interval(this.target.downsampleInterval):t.downsampleInterval="You must supply a downsample interval (e.g. '1m' or '1h')."}catch(e){t.downsampleInterval=e.message}return this.target.tags&&n.a.has(this.target.tags,this.target.currentTagKey)&&(t.tags="Duplicate tag key '"+this.target.currentTagKey+"'."),t},e.templateUrl="partials/query.editor.html",e}(r("LzXI").QueryCtrl),h=function(){function t(t){this.tsdbVersions=[{name:"<=2.1",value:1},{name:"==2.2",value:2},{name:"==2.3",value:3}],this.tsdbResolutions=[{name:"second",value:1},{name:"millisecond",value:2}],this.current.jsonData=this.current.jsonData||{},this.current.jsonData.tsdbVersion=this.current.jsonData.tsdbVersion||1,this.current.jsonData.tsdbResolution=this.current.jsonData.tsdbResolution||1}return t.$inject=["$scope"],t.templateUrl="public/app/plugins/datasource/opentsdb/partials/config.html",t}();r.d(e,"AnnotationsQueryCtrl",function(){return p}),r.d(e,"Datasource",function(){return u}),r.d(e,"QueryCtrl",function(){return c}),r.d(e,"ConfigCtrl",function(){return h});var p=function(){function t(){}return t.templateUrl="partials/annotations.editor.html",t}()}}]);
//# sourceMappingURL=opentsdbPlugin.5d18f0295f204c961241.js.map