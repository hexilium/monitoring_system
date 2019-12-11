(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{Fofh:function(e,a,t){"use strict";t.r(a),function(e){t.d(a,"getNavModel",function(){return h});var n=t("mrSG"),r=t("q1tI"),o=t.n(r),c=t("/MKj"),i=t("0cfB"),s=t("ZGyg"),u=t("5BCB"),d=t("frIo"),l=t("EKT6"),m=t("kDLi"),p=t("Obii"),f=function(e){function a(){var a=null!==e&&e.apply(this,arguments)||this;return a.categoryInfoList=[{id:"tsdb",title:"Time series databases"},{id:"logging",title:"Logging & document databases"},{id:"sql",title:"SQL"},{id:"cloud",title:"Cloud"},{id:"other",title:"Others"}],a.sortingRules={prometheus:100,graphite:95,loki:90,mysql:80,postgres:79,gcloud:-1},a.onDataSourceTypeClicked=function(e){a.props.addDataSource(e)},a.onSearchQueryChange=function(e){a.props.setDataSourceTypeSearchQuery(e)},a.onLearnMoreClick=function(e){e.stopPropagation()},a}return Object(n.__extends)(a,e),a.prototype.componentDidMount=function(){this.props.loadDataSourceTypes(),this.searchInput.focus()},a.prototype.renderTypes=function(e){var a=this;return e?(e.sort(function(e,t){var n=a.sortingRules[e.id]||0,r=a.sortingRules[t.id]||0;return n>r?-1:n<r?1:e.name>t.name?-1:1}),o.a.createElement(m.List,{items:e,getItemKey:function(e){return e.id.toString()},renderItem:function(e){return o.a.createElement(g,{plugin:e,onClick:function(){return a.onDataSourceTypeClicked(e)},onLearnMoreClick:a.onLearnMoreClick})}})):null},a.prototype.renderGroupedList=function(){var e=this,a=this.props.dataSourceTypes;if(0===a.length)return null;var t=a.reduce(function(e,a){var t=a.category||"other",n=e[t]||[];return n.push(a),e[t]=n,e},{});return t.cloud.push({id:"gcloud",name:"Grafana Cloud",type:p.PluginType.datasource,module:"",baseUrl:"",info:{description:"Hosted Graphite, Prometheus and Loki",logos:{small:"public/img/grafana_icon.svg",large:"asd"},author:{name:"Grafana Labs"},links:[{url:"https://grafana.com/products/cloud/",name:"Learn more"}],screenshots:[],updated:"2019-05-10",version:"1.0.0"}}),o.a.createElement(o.a.Fragment,null,this.categoryInfoList.map(function(a){return o.a.createElement("div",{className:"add-data-source-category",key:a.id},o.a.createElement("div",{className:"add-data-source-category__header"},a.title),e.renderTypes(t[a.id]))}),o.a.createElement("div",{className:"add-data-source-more"},o.a.createElement("a",{className:"btn btn-inverse",href:"https://grafana.com/plugins?type=datasource&utm_source=new-data-source",target:"_blank",rel:"noopener"},"Find more data source plugins on grafana.com")))},a.prototype.render=function(){var e=this,a=this.props,t=a.navModel,n=a.isLoading,r=a.searchQuery,c=a.dataSourceTypes;return o.a.createElement(s.a,{navModel:t},o.a.createElement(s.a.Contents,{isLoading:n},o.a.createElement("div",{className:"page-action-bar"},o.a.createElement("div",{className:"gf-form gf-form--grow"},o.a.createElement(l.a,{ref:function(a){return e.searchInput=a},labelClassName:"gf-form--has-input-icon",inputClassName:"gf-form-input width-30",value:r,onChange:this.onSearchQueryChange,placeholder:"Filter by name or type"})),o.a.createElement("div",{className:"page-action-bar__spacer"}),o.a.createElement("a",{className:"btn btn-secondary",href:"datasources"},"Cancel")),o.a.createElement("div",null,r&&this.renderTypes(c),!r&&this.renderGroupedList())))},a}(r.PureComponent),g=function(e){var a=e.plugin,t=e.onLearnMoreClick,n="gcloud"!==a.id,r=n?e.onClick:function(){},c=a.info.links&&a.info.links.length>0?a.info.links[0].url:null;return o.a.createElement("div",{className:"add-data-source-item",onClick:r,"aria-label":a.name+" datasource plugin"},o.a.createElement("img",{className:"add-data-source-item-logo",src:a.info.logos.small}),o.a.createElement("div",{className:"add-data-source-item-text-wrapper"},o.a.createElement("span",{className:"add-data-source-item-text"},a.name),a.info.description&&o.a.createElement("span",{className:"add-data-source-item-desc"},a.info.description)),o.a.createElement("div",{className:"add-data-source-item-actions"},c&&o.a.createElement("a",{className:"btn btn-inverse",href:c+"?utm_source=grafana_add_ds",target:"_blank",rel:"noopener",onClick:t},"Learn more ",o.a.createElement("i",{className:"fa fa-external-link add-datasource-item-actions__btn-icon"})),n&&o.a.createElement("button",{className:"btn btn-primary"},"Select")))};function h(){var e={icon:"gicon gicon-add-datasources",id:"datasource-new",text:"Add data source",href:"datasources/new",subTitle:"Choose a data source type"};return{main:e,node:e}}var y={addDataSource:u.a,loadDataSourceTypes:u.i,setDataSourceTypeSearchQuery:u.l};a.default=Object(i.hot)(e)(Object(c.connect)(function(e){return{navModel:h(),dataSourceTypes:Object(d.c)(e.dataSources),searchQuery:e.dataSources.dataSourceTypeSearchQuery,isLoading:e.dataSources.isLoadingDataSources}},y)(f))}.call(this,t("3UD+")(e))},frIo:function(e,a,t){"use strict";t.d(a,"d",function(){return n}),t.d(a,"c",function(){return r}),t.d(a,"a",function(){return o}),t.d(a,"b",function(){return c}),t.d(a,"g",function(){return i}),t.d(a,"f",function(){return s}),t.d(a,"e",function(){return u});var n=function(e){var a=new RegExp(e.searchQuery,"i");return e.dataSources.filter(function(e){return a.test(e.name)||a.test(e.database)})},r=function(e){var a=new RegExp(e.dataSourceTypeSearchQuery,"i");return e.dataSourceTypes.filter(function(e){return a.test(e.name)})},o=function(e,a){return e.dataSource.id===parseInt(a,10)?e.dataSource:{}},c=function(e,a){return e.dataSourceMeta.id===a?e.dataSourceMeta:{}},i=function(e){return e.searchQuery},s=function(e){return e.layoutMode},u=function(e){return e.dataSourcesCount}}}]);
//# sourceMappingURL=NewDataSourcePage.5d18f0295f204c961241.js.map