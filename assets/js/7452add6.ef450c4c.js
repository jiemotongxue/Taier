"use strict";(self.webpackChunktaier_website=self.webpackChunktaier_website||[]).push([[7072],{3905:function(t,n,a){a.d(n,{Zo:function(){return s},kt:function(){return c}});var e=a(7294);function r(t,n,a){return n in t?Object.defineProperty(t,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[n]=a,t}function l(t,n){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(t);n&&(e=e.filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable}))),a.push.apply(a,e)}return a}function i(t){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?l(Object(a),!0).forEach((function(n){r(t,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(a,n))}))}return t}function o(t,n){if(null==t)return{};var a,e,r=function(t,n){if(null==t)return{};var a,e,r={},l=Object.keys(t);for(e=0;e<l.length;e++)a=l[e],n.indexOf(a)>=0||(r[a]=t[a]);return r}(t,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(e=0;e<l.length;e++)a=l[e],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var m=e.createContext({}),p=function(t){var n=e.useContext(m),a=n;return t&&(a="function"==typeof t?t(n):i(i({},n),t)),a},s=function(t){var n=p(t.components);return e.createElement(m.Provider,{value:n},t.children)},u={inlineCode:"code",wrapper:function(t){var n=t.children;return e.createElement(e.Fragment,{},n)}},d=e.forwardRef((function(t,n){var a=t.components,r=t.mdxType,l=t.originalType,m=t.parentName,s=o(t,["components","mdxType","originalType","parentName"]),d=p(a),c=r,k=d["".concat(m,".").concat(c)]||d[c]||u[c]||l;return a?e.createElement(k,i(i({ref:n},s),{},{components:a})):e.createElement(k,i({ref:n},s))}));function c(t,n){var a=arguments,r=n&&n.mdxType;if("string"==typeof t||r){var l=a.length,i=new Array(l);i[0]=d;var o={};for(var m in n)hasOwnProperty.call(n,m)&&(o[m]=n[m]);o.originalType=t,o.mdxType="string"==typeof t?t:r,i[1]=o;for(var p=2;p<l;p++)i[p]=a[p];return e.createElement.apply(null,i)}return e.createElement.apply(null,a)}d.displayName="MDXCreateElement"},9442:function(t,n,a){a.r(n),a.d(n,{frontMatter:function(){return o},contentTitle:function(){return m},metadata:function(){return p},toc:function(){return s},default:function(){return d}});var e=a(7462),r=a(3366),l=(a(7294),a(3905)),i=["components"],o={title:"Flink On Yarn",sidebar_label:"Flink On Yarn"},m=void 0,p={unversionedId:"functions/component/flink-on-yarn",id:"functions/component/flink-on-yarn",title:"Flink On Yarn",description:"\u914d\u7f6eFlink",source:"@site/docs/functions/component/flink-on-yarn.md",sourceDirName:"functions/component",slug:"/functions/component/flink-on-yarn",permalink:"/Taier/docs/functions/component/flink-on-yarn",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/functions/component/flink-on-yarn.md",tags:[],version:"current",frontMatter:{title:"Flink On Yarn",sidebar_label:"Flink On Yarn"},sidebar:"docs",previous:{title:"HDFS",permalink:"/Taier/docs/functions/component/hdfs"},next:{title:"Flink On Standalone",permalink:"/Taier/docs/functions/component/flink-on-standalone"}},s=[{value:"\u914d\u7f6eFlink",id:"\u914d\u7f6eflink",children:[{value:"\u4e0b\u8f7dchunjun",id:"\u4e0b\u8f7dchunjun",children:[],level:3},{value:"\u53c2\u6570\u8bf4\u660e",id:"\u53c2\u6570\u8bf4\u660e",children:[{value:"perjob\u3001session\u516c\u5171\u53c2\u6570",id:"perjobsession\u516c\u5171\u53c2\u6570",children:[],level:4},{value:"session\u7279\u5b9a\u53c2\u6570",id:"session\u7279\u5b9a\u53c2\u6570",children:[],level:4},{value:"Flink \u539f\u751f\u53c2\u6570",id:"flink-\u539f\u751f\u53c2\u6570",children:[],level:4}],level:3},{value:"\u6587\u4ef6\u7ed3\u6784",id:"\u6587\u4ef6\u7ed3\u6784",children:[],level:3}],level:2}],u={toc:s};function d(t){var n=t.components,o=(0,r.Z)(t,i);return(0,l.kt)("wrapper",(0,e.Z)({},u,o,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"\u914d\u7f6eflink"},"\u914d\u7f6eFlink"),(0,l.kt)("p",null,"\u5df2\u914d\u7f6e\u524d\u7f6e\u7ec4\u4ef6"),(0,l.kt)("ul",{className:"contains-task-list"},(0,l.kt)("li",{parentName:"ul",className:"task-list-item"},(0,l.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","SFTP"),(0,l.kt)("li",{parentName:"ul",className:"task-list-item"},(0,l.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","YARN"),(0,l.kt)("li",{parentName:"ul",className:"task-list-item"},(0,l.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","HDFS")),(0,l.kt)("p",null,"\u914d\u7f6eFlink\u7684\u524d\u63d0\u662fYARN\u3001HDFS\u7ec4\u4ef6\u6b63\u5e38\u914d\u7f6e\u5e76\u4fdd\u5b58"),(0,l.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"\u90e8\u7f72\u6a21\u5f0f\u5206\u4e3a ",(0,l.kt)("inlineCode",{parentName:"p"},"perjob"),"\u3001",(0,l.kt)("inlineCode",{parentName:"p"},"session")," \u4e24\u79cd\u6a21\u5f0f"))),(0,l.kt)("h3",{id:"\u4e0b\u8f7dchunjun"},"\u4e0b\u8f7dchunjun"),(0,l.kt)("p",null,"\u4f9d\u8d56",(0,l.kt)("inlineCode",{parentName:"p"},"Chunjun")," ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/DTStack/chunjun/releases/tag/v1.12.3"},"1.12")," \u7248\u672c\n",(0,l.kt)("a",{parentName:"p",href:"https://dtstack.github.io/chunjun/documents/%E5%BF%AB%E9%80%9F%E5%BC%80%E5%A7%8B"},"Chunjun\u6e90\u7801\u7f16\u8bd1")),(0,l.kt)("h3",{id:"\u53c2\u6570\u8bf4\u660e"},"\u53c2\u6570\u8bf4\u660e"),(0,l.kt)("h4",{id:"perjobsession\u516c\u5171\u53c2\u6570"},"perjob\u3001session\u516c\u5171\u53c2\u6570"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570\u9879"),(0,l.kt)("th",{parentName:"tr",align:null},"\u9ed8\u8ba4\u503c"),(0,l.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"),(0,l.kt)("th",{parentName:"tr",align:null},"\u662f\u5426\u5fc5\u586b"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"clusterMode"),(0,l.kt)("td",{parentName:"tr",align:null},"perjob\u3001session"),(0,l.kt)("td",{parentName:"tr",align:null},"\u4efb\u52a1\u6267\u884c\u6a21\u5f0f\uff1aperjob, session"),(0,l.kt)("td",{parentName:"tr",align:null},"\u662f")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"flinkLibDir"),(0,l.kt)("td",{parentName:"tr",align:null},"/data/insight_plugin1.12/flink_lib"),(0,l.kt)("td",{parentName:"tr",align:null},"flink lib path(taier\u672c\u5730\u76ee\u5f55\uff09"),(0,l.kt)("td",{parentName:"tr",align:null},"\u662f")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"remoteFlinkLibDir"),(0,l.kt)("td",{parentName:"tr",align:null},"/data/insight_plugin/flink110_lib"),(0,l.kt)("td",{parentName:"tr",align:null},"flink lib \u8fdc\u7a0b(sftp)\u8def\u5f84"),(0,l.kt)("td",{parentName:"tr",align:null},"\u662f")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"chunjunDistDir"),(0,l.kt)("td",{parentName:"tr",align:null},"/data/insight_plugin1.12/chunjun-dist/"),(0,l.kt)("td",{parentName:"tr",align:null},"chunjun plugins\u7236\u7ea7\u672c\u5730\u76ee\u5f55(taier\u672c\u5730\u76ee\u5f55\uff09"),(0,l.kt)("td",{parentName:"tr",align:null},"\u662f")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"remoteChunjunDistDir"),(0,l.kt)("td",{parentName:"tr",align:null},"/data/insight_plugin1.12/chunjun-dist/"),(0,l.kt)("td",{parentName:"tr",align:null},"chunjun plugins\u7236\u7ea7\u8fdc\u7a0b\u76ee\u5f55"),(0,l.kt)("td",{parentName:"tr",align:null},"\u662f")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"pluginLoadMode"),(0,l.kt)("td",{parentName:"tr",align:null},"shipfile"),(0,l.kt)("td",{parentName:"tr",align:null},"\u63d2\u4ef6\u52a0\u8f7d\u7c7b\u578b"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5426")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"monitorAcceptedApp"),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null},"\u662f\u5426\u76d1\u63a7yarn accepted\u72b6\u6001\u4efb\u52a1"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5426")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"yarnAccepterTaskNumber"),(0,l.kt)("td",{parentName:"tr",align:null},"3"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5141\u8bb8yarn accepter\u4efb\u52a1\u6570\u91cf\uff0c\u8fbe\u5230\u8fd9\u4e2a\u503c\u540e\u4e0d\u5141\u8bb8\u4efb\u52a1\u63d0\u4ea4"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5426")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"prometheusHost"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"prometheus\u5730\u5740\uff0c\u83b7\u53d6\u6570\u636e\u540c\u6b65\u6307\u6807\u4f7f\u7528"),(0,l.kt)("td",{parentName:"tr",align:null},"\u662f")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"prometheusPort"),(0,l.kt)("td",{parentName:"tr",align:null},"9090"),(0,l.kt)("td",{parentName:"tr",align:null},"prometheus\uff0c\u83b7\u53d6\u6570\u636e\u540c\u6b65\u6307\u6807\u4f7f\u7528"),(0,l.kt)("td",{parentName:"tr",align:null},"\u662f")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"classloader.dtstack-cache"),(0,l.kt)("td",{parentName:"tr",align:null},"true"),(0,l.kt)("td",{parentName:"tr",align:null},"\u662f\u5426\u7f13\u5b58classloader"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5426")))),(0,l.kt)("h4",{id:"session\u7279\u5b9a\u53c2\u6570"},"session\u7279\u5b9a\u53c2\u6570"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570\u9879"),(0,l.kt)("th",{parentName:"tr",align:null},"\u9ed8\u8ba4\u503c"),(0,l.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"),(0,l.kt)("th",{parentName:"tr",align:null},"\u662f\u5426\u5fc5\u586b"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"checkSubmitJobGraphInterval"),(0,l.kt)("td",{parentName:"tr",align:null},"60"),(0,l.kt)("td",{parentName:"tr",align:null},"session check\u95f4\u9694\uff0860 * 10s\uff09"),(0,l.kt)("td",{parentName:"tr",align:null},"\u662f")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"flinkSessionSlotCount"),(0,l.kt)("td",{parentName:"tr",align:null},"10"),(0,l.kt)("td",{parentName:"tr",align:null},"flink session\u5141\u8bb8\u7684\u6700\u5927slot\u6570"),(0,l.kt)("td",{parentName:"tr",align:null},"\u662f")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"sessionRetryNum"),(0,l.kt)("td",{parentName:"tr",align:null},"5"),(0,l.kt)("td",{parentName:"tr",align:null},"session\u91cd\u8bd5\u6b21\u6570\uff0c\u8fbe\u5230\u540e\u4f1a\u653e\u7f13\u91cd\u8bd5\u7684\u9891\u7387"),(0,l.kt)("td",{parentName:"tr",align:null},"\u662f")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"sessionStartAuto"),(0,l.kt)("td",{parentName:"tr",align:null},"true"),(0,l.kt)("td",{parentName:"tr",align:null},"\u662f\u5426\u5141\u8bb8Taier\u542f\u52a8\u62c9\u8d77flink session"),(0,l.kt)("td",{parentName:"tr",align:null},"\u662f")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"flinkSessionName"),(0,l.kt)("td",{parentName:"tr",align:null},"flink_session"),(0,l.kt)("td",{parentName:"tr",align:null},"flink session\u4efb\u52a1\u540d"),(0,l.kt)("td",{parentName:"tr",align:null},"\u662f")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"jobmanager.heap.mb"),(0,l.kt)("td",{parentName:"tr",align:null},"2048"),(0,l.kt)("td",{parentName:"tr",align:null},"jobmanager\u5185\u5b58\u5927\u5c0f"),(0,l.kt)("td",{parentName:"tr",align:null},"\u662f")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"taskmanager.heap.mb"),(0,l.kt)("td",{parentName:"tr",align:null},"1024"),(0,l.kt)("td",{parentName:"tr",align:null},"taskmanager\u5185\u5b58\u5927\u5c0f"),(0,l.kt)("td",{parentName:"tr",align:null},"\u662f")))),(0,l.kt)("h4",{id:"flink-\u539f\u751f\u53c2\u6570"},"Flink \u539f\u751f\u53c2\u6570"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570\u9879"),(0,l.kt)("th",{parentName:"tr",align:null},"\u9ed8\u8ba4\u503c"),(0,l.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"),(0,l.kt)("th",{parentName:"tr",align:null},"\u662f\u5426\u5fc5\u586b"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"env.java.opts"),(0,l.kt)("td",{parentName:"tr",align:null},"-XX:+UseConcMarkSweepGC -XX:+CMSParallelRemarkEnabled -XX:+CMSIncrementalMode -XX:+CMSIncrementalPacing -XX:MaxMetaspaceSize=300m -Dfile.encoding=UTF-8"),(0,l.kt)("td",{parentName:"tr",align:null},"jvm\u53c2\u6570"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5426")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"classloader.resolve-order"),(0,l.kt)("td",{parentName:"tr",align:null},"perjob\u9ed8\u8ba4\u4e3achild-first\uff0csession\u9ed8\u8ba4\u4e3aparent-first"),(0,l.kt)("td",{parentName:"tr",align:null},"\u7c7b\u52a0\u8f7d\u6a21\u5f0f"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5426")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"high-availability"),(0,l.kt)("td",{parentName:"tr",align:null},"ZOOKEEPER"),(0,l.kt)("td",{parentName:"tr",align:null},"flink ha\u7c7b\u578b"),(0,l.kt)("td",{parentName:"tr",align:null},"\u662f")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"high-availability.zookeeper.quorum"),(0,l.kt)("td",{parentName:"tr",align:null},"zookeeper\u5730\u5740\uff0c\u5f53ha\u9009\u62e9\u662fzookeeper\u65f6\u5fc5\u586b"),(0,l.kt)("td",{parentName:"tr",align:null},"\u662f"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"high-availability.zookeeper.path.root"),(0,l.kt)("td",{parentName:"tr",align:null},"/flink110"),(0,l.kt)("td",{parentName:"tr",align:null},"ha\u8282\u70b9\u8def\u5f84"),(0,l.kt)("td",{parentName:"tr",align:null},"\u662f")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"high-availability.storageDir"),(0,l.kt)("td",{parentName:"tr",align:null},"hdfs://ns1/dtInsight/flink110/ha"),(0,l.kt)("td",{parentName:"tr",align:null},"ha\u5143\u6570\u636e\u5b58\u50a8\u8def\u5f84"),(0,l.kt)("td",{parentName:"tr",align:null},"\u662f")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"jobmanager.archive.fs.dir"),(0,l.kt)("td",{parentName:"tr",align:null},"hdfs://ns1/dtInsight/flink110/completed-jobs\t\u4efb\u52a1\u7ed3\u675f\u540e\u4efb\u52a1\u4fe1\u606f\u5b58\u50a8\u8def\u5f84\t\u662f"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"metrics.reporter.promgateway.class"),(0,l.kt)("td",{parentName:"tr",align:null},"org.apache.flink.metrics.prometheus.PrometheusPushGatewayReporter"),(0,l.kt)("td",{parentName:"tr",align:null},"\u7528\u6765\u63a8\u9001\u6307\u6807\u7c7b"),(0,l.kt)("td",{parentName:"tr",align:null},"\u662f")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"metrics.reporter.promgateway.host"),(0,l.kt)("td",{parentName:"tr",align:null},"promgateway\u5730\u5740"),(0,l.kt)("td",{parentName:"tr",align:null},"\u662f"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"metrics.reporter.promgateway.port"),(0,l.kt)("td",{parentName:"tr",align:null},"9091"),(0,l.kt)("td",{parentName:"tr",align:null},"promgateway\u7aef\u53e3"),(0,l.kt)("td",{parentName:"tr",align:null},"\u662f")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"metrics.reporter.promgateway.deleteOnShutdown"),(0,l.kt)("td",{parentName:"tr",align:null},"true"),(0,l.kt)("td",{parentName:"tr",align:null},"\u4efb\u52a1\u7ed3\u675f\u540e\u662f\u5426\u5220\u9664\u6307\u6807\t\u662f"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"metrics.reporter.promgateway.jobName"),(0,l.kt)("td",{parentName:"tr",align:null},"110job\t\u6307\u6807\u4efb\u52a1\u540d"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"metrics.reporter.promgateway.randomJobNameSuffix"),(0,l.kt)("td",{parentName:"tr",align:null},"true"),(0,l.kt)("td",{parentName:"tr",align:null},"\u662f\u5426\u5728\u4efb\u52a1\u540d\u4e0a\u6dfb\u52a0\u968f\u673a\u503c"),(0,l.kt)("td",{parentName:"tr",align:null},"\u662f")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"state.backend"),(0,l.kt)("td",{parentName:"tr",align:null},"RocksDB"),(0,l.kt)("td",{parentName:"tr",align:null},"\u72b6\u6001\u540e\u7aef"),(0,l.kt)("td",{parentName:"tr",align:null},"\u662f")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"state.backend.incremental"),(0,l.kt)("td",{parentName:"tr",align:null},"true"),(0,l.kt)("td",{parentName:"tr",align:null},"\u662f\u5426\u5f00\u542f\u589e\u91cf"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5426")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"state.checkpoints.dir"),(0,l.kt)("td",{parentName:"tr",align:null},"hdfs://ns1/dtInsight/flink110/checkpoints"),(0,l.kt)("td",{parentName:"tr",align:null},"checkpoint\u8def\u5f84\u5730\u5740"),(0,l.kt)("td",{parentName:"tr",align:null},"\u662f")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"state.checkpoints.num-retained"),(0,l.kt)("td",{parentName:"tr",align:null},"11"),(0,l.kt)("td",{parentName:"tr",align:null},"checkpoint\u4fdd\u5b58\u4e2a\u6570"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5426")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"state.savepoints.dir"),(0,l.kt)("td",{parentName:"tr",align:null},"hdfs://ns1/dtInsight/flink110/savepoints"),(0,l.kt)("td",{parentName:"tr",align:null},"savepoint\u8def\u5f84"),(0,l.kt)("td",{parentName:"tr",align:null},"\u662f")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"yarn.application-attempts"),(0,l.kt)("td",{parentName:"tr",align:null},"3"),(0,l.kt)("td",{parentName:"tr",align:null},"\u91cd\u8bd5\u6b21\u6570"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5426")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"yarn.application-attempt-failures-validity-interval"),(0,l.kt)("td",{parentName:"tr",align:null},"3600000"),(0,l.kt)("td",{parentName:"tr",align:null},"\u91cd\u8bd5\u7a97\u53e3\u65f6\u95f4\u5927\u5c0f"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5426")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"akka.ask.timeout"),(0,l.kt)("td",{parentName:"tr",align:null},"60 s"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"\u5426")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"akka.tcp.timeout"),(0,l.kt)("td",{parentName:"tr",align:null},"60 s"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"\u5426")))),(0,l.kt)("p",null,"\u66f4\u591a Flink \u53c2\u6570\u9879\u8be6\u89c1",(0,l.kt)("a",{parentName:"p",href:"https://ci.apache.org/projects/flink/flink-docs-release-1.12/ops/config.html"},"\u5b98\u65b9\u6587\u6863")),(0,l.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"Flink\u5728\u81ea\u5b9a\u4e49\u53c2\u6570\u4e2d\u6dfb\u52a0Flink\u5b98\u65b9\u53c2\u6570\u6765\u8c03\u6574\u4efb\u52a1\u63d0\u4ea4\u53c2\u6570\u4fe1\u606f"))),(0,l.kt)("h3",{id:"\u6587\u4ef6\u7ed3\u6784"},"\u6587\u4ef6\u7ed3\u6784"),(0,l.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"flinkLibDir\u4e3aFlink jar \u9700\u8981\u914d\u7f6e",(0,l.kt)("inlineCode",{parentName:"p"},"taier\u90e8\u7f72\u673a\u5668"),"\u4e0a\u7684\u672c\u5730\u8def\u5f84"))),(0,l.kt)("p",null,"\u5982 flinkLibDir \u914d\u7f6e\u4e3a/opt/dtstack/flink110_lib",(0,l.kt)("br",{parentName:"p"}),"\n","/opt/dtstack/flink110_lib \u76ee\u5f55\u5305\u542b\u6587\u4ef6\u4e3a:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"\u251c\u2500\u2500 flink-csv-1.12.7.jar\n\u251c\u2500\u2500 flink-dist_2.12-1.12.7.jar\n\u251c\u2500\u2500 flink-json-1.12.7.jar\n\u251c\u2500\u2500 flink-metrics-prometheus-1.12.7.jar\n\u251c\u2500\u2500 flink-parquet_2.12-1.12.7.jar\n\u251c\u2500\u2500 flink-python_2.12-1.12.7.jar\n\u251c\u2500\u2500 flink-shaded-hadoop-2-uber-2.7.5-10.0.jar\n\u251c\u2500\u2500 flink-shaded-zookeeper-3.4.14.jar\n\u251c\u2500\u2500 flink-sql-avro-1.12.7.jar\n\u251c\u2500\u2500 flink-table_2.12-1.12.7.jar\n\u251c\u2500\u2500 flink-table-blink_2.12-1.12.7.jar\n\u251c\u2500\u2500 iceberg-flink-runtime-0.12.0.jar\n\u251c\u2500\u2500 log4j-1.2-api-2.16.0.jar\n\u251c\u2500\u2500 log4j-api-2.16.0.jar\n\u251c\u2500\u2500 log4j-core-2.16.0.jar\n\u251c\u2500\u2500 log4j-slf4j-impl-2.16.0.jar\n\u251c\u2500\u2500 logback-classic-1.2.11.jar\n\u2514\u2500\u2500 logback-core-1.2.11.jar\n")),(0,l.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"\u914d\u7f6e\u597d\u6570\u636e\u540c\u6b65\u4efb\u52a1\u4e4b\u540e\u8fd0\u884c\uff0c\u5982\u679c\u63d0\u793aCould not read ch.qos.logback.classic.Logger \u8bf7\u786e\u8ba4\u4e0bflinkLibDir\u4e0blogback\u7b49jar\u5305\u662f\u5426\u653e\u7f6e"))),(0,l.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"FlinkPluginRoot\u914d\u7f6e\u7684\u662fchunjun\u7684\u63d2\u4ef6\u5305\u76ee\u5f55 \u9700\u8981\u914d\u7f6e",(0,l.kt)("inlineCode",{parentName:"p"},"taier\u90e8\u7f72\u673a\u5668"),"\u4e0a\u7684centos\u8def\u5f84"))),(0,l.kt)("p",null,"\u5982 flinkPluginRoot \u914d\u7f6e\u4e3a /data/insight_plugin1.12/chunjun-dist",(0,l.kt)("br",{parentName:"p"}),"\n","/data/insight_plugin1.12/chunjun-dist \u76ee\u5f55\u5305\u542b\u6587\u4ef6\u4e3a:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"/data/insight_plugin1.12/chunjun-dist\n\u251c\u2500\u2500 chunjun-core-master.jar\n\u251c\u2500\u2500 connector\n\u2502\xa0\xa0 \u251c\u2500\u2500 binlog\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u2514\u2500\u2500 chunjun-connector-binlog-master.jar\n\u2502\xa0\xa0 \u251c\u2500\u2500 cassandra\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u2514\u2500\u2500 chunjun-connector-cassandra-master.jar\n\u2502\xa0\xa0 \u251c\u2500\u2500 clickhouse\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u2514\u2500\u2500 chunjun-connector-clickhouse-master.jar\n\u2502\xa0\xa0 \u251c\u2500\u2500 db2\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u2514\u2500\u2500 chunjun-connector-db2-master.jar\n\u2502\xa0\xa0 \u251c\u2500\u2500 dm\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u2514\u2500\u2500 chunjun-connector-dm-master.jar\n\u2502\xa0\xa0 \u251c\u2500\u2500 doris\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u2514\u2500\u2500 chunjun-connector-doris-master.jar\n\u2502\xa0\xa0 \u251c\u2500\u2500 elasticsearch7\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u2514\u2500\u2500 chunjun-connector-elasticsearch7-master.jar\n\u2502\xa0\xa0 \u251c\u2500\u2500 emqx\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u2514\u2500\u2500 chunjun-connector-emqx-master.jar\n\u2502\xa0\xa0 \u251c\u2500\u2500 file\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u2514\u2500\u2500 chunjun-connector-file-master.jar\n\u2502\xa0\xa0 \u251c\u2500\u2500 filesystem\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u2514\u2500\u2500 chunjun-connector-filesystem-master.jar\n\u2502\xa0\xa0 \u251c\u2500\u2500 ftp\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u2514\u2500\u2500 chunjun-connector-ftp-master.jar\n\u2502\xa0\xa0 \u251c\u2500\u2500 gbase\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u2514\u2500\u2500 chunjun-connector-gbase-master.jar\n\u2502\xa0\xa0 \u251c\u2500\u2500 greenplum\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u2514\u2500\u2500 chunjun-connector-greenplum-master.jar\n\u2502\xa0\xa0 \u251c\u2500\u2500 hbase14\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u2514\u2500\u2500 chunjun-connector-hbase-1.4-master.jar\n\u2502\xa0\xa0 \u251c\u2500\u2500 hdfs\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u2514\u2500\u2500 chunjun-connector-hdfs-master.jar\n\u2502\xa0\xa0 \u251c\u2500\u2500 hive\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u2514\u2500\u2500 chunjun-connector-hive-master.jar\n\u2502\xa0\xa0 \u251c\u2500\u2500 http\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u2514\u2500\u2500 chunjun-connector-http-master.jar\n\u2502\xa0\xa0 \u251c\u2500\u2500 influxdb\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u2514\u2500\u2500 chunjun-connector-influxdb-master.jar\n\u2502\xa0\xa0 \u251c\u2500\u2500 kingbase\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u2514\u2500\u2500 chunjun-connector-kingbase-master.jar\n\u2502\xa0\xa0 \u251c\u2500\u2500 kudu\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u2514\u2500\u2500 chunjun-connector-kudu-master.jar\n\u2502\xa0\xa0 \u251c\u2500\u2500 mongodb\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u2514\u2500\u2500 chunjun-connector-mongodb-master.jar\n\u2502\xa0\xa0 \u251c\u2500\u2500 mysql\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u2514\u2500\u2500 chunjun-connector-mysql-master.jar\n\u2502\xa0\xa0 \u251c\u2500\u2500 mysqld\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u2514\u2500\u2500 chunjun-connector-mysqld-master.jar\n\u2502\xa0\xa0 \u251c\u2500\u2500 oceanbase\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u2514\u2500\u2500 chunjun-connector-oceanbase-master.jar\n\u2502\xa0\xa0 \u251c\u2500\u2500 oracle\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u2514\u2500\u2500 chunjun-connector-oracle-master.jar\n\u2502\xa0\xa0 \u251c\u2500\u2500 oraclelogminer\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u2514\u2500\u2500 chunjun-connector-oraclelogminer-master.jar\n\u2502\xa0\xa0 \u251c\u2500\u2500 pgwal\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u2514\u2500\u2500 chunjun-connector-pgwal-master.jar\n\u2502\xa0\xa0 \u251c\u2500\u2500 postgresql\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u2514\u2500\u2500 chunjun-connector-postgresql-master.jar\n\u2502\xa0\xa0 \u251c\u2500\u2500 redis\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u2514\u2500\u2500 chunjun-connector-redis-master.jar\n\u2502\xa0\xa0 \u251c\u2500\u2500 saphana\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u2514\u2500\u2500 chunjun-connector-saphana-master.jar\n\u2502\xa0\xa0 \u251c\u2500\u2500 socket\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u2514\u2500\u2500 chunjun-connector-socket-master.jar\n\u2502\xa0\xa0 \u251c\u2500\u2500 solr\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u2514\u2500\u2500 chunjun-connector-solr-master.jar\n\u2502\xa0\xa0 \u251c\u2500\u2500 sqlserver\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u2514\u2500\u2500 chunjun-connector-sqlserver-master.jar\n\u2502\xa0\xa0 \u251c\u2500\u2500 sqlservercdc\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u2514\u2500\u2500 chunjun-connector-sqlservercdc-master.jar\n\u2502\xa0\xa0 \u251c\u2500\u2500 starrocks\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u2514\u2500\u2500 chunjun-connector-starrocks-master.jar\n\u2502\xa0\xa0 \u2514\u2500\u2500 stream\n\u2502\xa0\xa0     \u2514\u2500\u2500 chunjun-connector-stream-master.jar\n\u251c\u2500\u2500 ddl\n\u2502\xa0\xa0 \u2514\u2500\u2500 mysql\n\u2502\xa0\xa0     \u2514\u2500\u2500 chunjun-ddl-mysql-master.jar\n\u251c\u2500\u2500 dirty-data-collector\n\u2502\xa0\xa0 \u251c\u2500\u2500 log\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u2514\u2500\u2500 chunjun-dirty-log-master.jar\n\u2502\xa0\xa0 \u2514\u2500\u2500 mysql\n\u2502\xa0\xa0     \u2514\u2500\u2500 chunjun-dirty-mysql-master.jar\n\u251c\u2500\u2500 formats\n\u2502\xa0\xa0 \u2514\u2500\u2500 pbformat\n\u2502\xa0\xa0     \u2514\u2500\u2500 flinkx-protobuf-master.jar\n\u251c\u2500\u2500 metrics\n\u2502\xa0\xa0 \u251c\u2500\u2500 mysql\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u2514\u2500\u2500 chunjun-metrics-mysql-master.jar\n\u2502\xa0\xa0 \u2514\u2500\u2500 prometheus\n\u2502\xa0\xa0     \u2514\u2500\u2500 chunjun-metrics-prometheus-master.jar\n\u2514\u2500\u2500 restore-plugins\n    \u2514\u2500\u2500 mysql\n        \u2514\u2500\u2500 chunjun-restore-mysql-master.jar\n")),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"Flink \u914d\u7f6e",src:a(7005).Z})),(0,l.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"Flink Session \u4efb\u52a1\u7b2c\u4e00\u6b21\u7684\u65f6\u5019 \u4f1a\u53bb\u542f\u52a8Session \u4efb\u52a1\u63d0\u4ea4\u4f1a\u8f83\u6162\u3002  ")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"\u914d\u7f6e\u597d\u6570\u636e\u540c\u6b65\u4efb\u52a1\u4e4b\u540e\u8fd0\u884c\uff0c\u5982\u679c\u4e00\u76f4\u63d0\u793a\u7b49\u5f85\u8fd0\u884c\uff08No flink session found on yarn cluster),\u786e\u4fdd\u96c6\u7fa4\u80fd\u624b\u52a8\u6b63\u5e38\u542f\u52a8session\u540e\uff0c\u53ef\u4ee5\u53bb",(0,l.kt)("inlineCode",{parentName:"p"},"flink_monitor.log"),"\n\u67e5\u770b\u76f8\u5e94\u65e5\u5fd7\uff0c\u786e\u8ba4\u662f\u5426\u6709\u90e8\u5206\u53c2\u6570\u914d\u7f6e\u9519\u8bef"))))}d.isMDXComponent=!0},7005:function(t,n,a){n.Z=a.p+"assets/images/flink-b33be969975a8b6820b178f9f241bae9.png"}}]);