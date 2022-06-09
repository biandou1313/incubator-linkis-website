"use strict";(self.webpackChunklinkis_web_apache=self.webpackChunklinkis_web_apache||[]).push([[8465],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return g}});var i=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,i,r=function(e,n){if(null==e)return{};var t,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)t=a[i],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)t=a[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var c=i.createContext({}),o=function(e){var n=i.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},u=function(e){var n=o(e.components);return i.createElement(c.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},d=i.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=o(t),g=r,k=d["".concat(c,".").concat(g)]||d[g]||p[g]||a;return t?i.createElement(k,l(l({ref:n},u),{},{components:t})):i.createElement(k,l({ref:n},u))}));function g(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,l=new Array(a);l[0]=d;var s={};for(var c in n)hasOwnProperty.call(n,c)&&(s[c]=n[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,l[1]=s;for(var o=2;o<a;o++)l[o]=t[o];return i.createElement.apply(null,l)}return i.createElement.apply(null,t)}d.displayName="MDXCreateElement"},37566:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return o},toc:function(){return u},default:function(){return d}});var i=t(87462),r=t(63366),a=(t(67294),t(3905)),l=["components"],s={title:"JDBC \u5f15\u64ce",sidebar_position:7},c=void 0,o={unversionedId:"engine_usage/jdbc",id:"version-1.1.1/engine_usage/jdbc",isDocsHomePage:!1,title:"JDBC \u5f15\u64ce",description:"\u672c\u6587\u4e3b\u8981\u4ecb\u7ecd\u5728Linkis1.X\u4e2d\uff0cJDBC\u5f15\u64ce\u7684\u914d\u7f6e\u3001\u90e8\u7f72\u548c\u4f7f\u7528\u3002",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-1.1.1/engine_usage/jdbc.md",sourceDirName:"engine_usage",slug:"/engine_usage/jdbc",permalink:"/zh-CN/docs/latest/engine_usage/jdbc",editUrl:"https://github.com/apache/incubator-linkis-website/edit/dev/i18n/zh-CN/docusaurus-plugin-content-docs/version-1.1.1/engine_usage/jdbc.md",tags:[],version:"1.1.1",sidebarPosition:7,frontMatter:{title:"JDBC \u5f15\u64ce",sidebar_position:7},sidebar:"tutorialSidebar",previous:{title:"Shell \u5f15\u64ce",permalink:"/zh-CN/docs/latest/engine_usage/shell"},next:{title:"Flink \u5f15\u64ce",permalink:"/zh-CN/docs/latest/engine_usage/flink"}},u=[{value:"1. \u73af\u5883\u51c6\u5907",id:"1-\u73af\u5883\u51c6\u5907",children:[]},{value:"2. \u90e8\u7f72\u548c\u914d\u7f6e",id:"2-\u90e8\u7f72\u548c\u914d\u7f6e",children:[{value:"2.1 \u7248\u672c\u7684\u9009\u62e9\u548c\u7f16\u8bd1",id:"21-\u7248\u672c\u7684\u9009\u62e9\u548c\u7f16\u8bd1",children:[]},{value:"2.2 \u7269\u6599\u7684\u90e8\u7f72\u548c\u52a0\u8f7d",id:"22-\u7269\u6599\u7684\u90e8\u7f72\u548c\u52a0\u8f7d",children:[]},{value:"2.3 \u5f15\u64ce\u7684\u6807\u7b7e",id:"23-\u5f15\u64ce\u7684\u6807\u7b7e",children:[]}]},{value:"3.JDBC\u5f15\u64ce\u7684\u4f7f\u7528",id:"3jdbc\u5f15\u64ce\u7684\u4f7f\u7528",children:[{value:"\u51c6\u5907\u64cd\u4f5c",id:"\u51c6\u5907\u64cd\u4f5c",children:[]},{value:"3.1 \u901a\u8fc7Linkis SDK\u8fdb\u884c\u4f7f\u7528",id:"31-\u901a\u8fc7linkis-sdk\u8fdb\u884c\u4f7f\u7528",children:[]},{value:"3.2 \u901a\u8fc7Linkis-cli\u8fdb\u884c\u4efb\u52a1\u63d0\u4ea4",id:"32-\u901a\u8fc7linkis-cli\u8fdb\u884c\u4efb\u52a1\u63d0\u4ea4",children:[]},{value:"3.3 Scriptis\u7684\u4f7f\u7528\u65b9\u5f0f",id:"33-scriptis\u7684\u4f7f\u7528\u65b9\u5f0f",children:[]}]},{value:"4.JDBC\u5f15\u64ce\u7684\u7528\u6237\u8bbe\u7f6e",id:"4jdbc\u5f15\u64ce\u7684\u7528\u6237\u8bbe\u7f6e",children:[]}],p={toc:u};function d(e){var n=e.components,s=(0,r.Z)(e,l);return(0,a.kt)("wrapper",(0,i.Z)({},p,s,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u672c\u6587\u4e3b\u8981\u4ecb\u7ecd\u5728Linkis1.X\u4e2d\uff0cJDBC\u5f15\u64ce\u7684\u914d\u7f6e\u3001\u90e8\u7f72\u548c\u4f7f\u7528\u3002"),(0,a.kt)("h2",{id:"1-\u73af\u5883\u51c6\u5907"},"1. \u73af\u5883\u51c6\u5907"),(0,a.kt)("p",null,"\u5982\u679c\u60a8\u5e0c\u671b\u5728\u60a8\u7684\u670d\u52a1\u5668\u4e0a\u4f7f\u7528JDBC\u5f15\u64ce\uff0c\u60a8\u9700\u8981\u51c6\u5907JDBC\u8fde\u63a5\u4fe1\u606f\uff0c\u5982MySQL\u6570\u636e\u5e93\u7684\u8fde\u63a5\u5730\u5740\u3001\u7528\u6237\u540d\u548c\u5bc6\u7801\u7b49"),(0,a.kt)("h2",{id:"2-\u90e8\u7f72\u548c\u914d\u7f6e"},"2. \u90e8\u7f72\u548c\u914d\u7f6e"),(0,a.kt)("h3",{id:"21-\u7248\u672c\u7684\u9009\u62e9\u548c\u7f16\u8bd1"},"2.1 \u7248\u672c\u7684\u9009\u62e9\u548c\u7f16\u8bd1"),(0,a.kt)("p",null,"\u6ce8\u610f: \u7f16\u8bd1jdbc\u5f15\u64ce\u4e4b\u524d\u9700\u8981\u8fdb\u884clinkis\u9879\u76ee\u5168\u91cf\u7f16\u8bd1",(0,a.kt)("br",{parentName:"p"}),"\n","\u53d1\u5e03\u7684\u5b89\u88c5\u90e8\u7f72\u5305\u4e2d\u9ed8\u8ba4\u4e0d\u5305\u542b\u6b64\u5f15\u64ce\u63d2\u4ef6\uff0c\n\u4f60\u53ef\u4ee5\u6309\u6b64\u6307\u5f15\u90e8\u7f72\u5b89\u88c5 ",(0,a.kt)("a",{parentName:"p",href:"https://linkis.apache.org/zh-CN/blog/2022/04/15/how-to-download-engineconn-plugin"},"https://linkis.apache.org/zh-CN/blog/2022/04/15/how-to-download-engineconn-plugin"),"\n\uff0c\u6216\u8005\u6309\u4ee5\u4e0b\u6d41\u7a0b\uff0c\u624b\u52a8\u7f16\u8bd1\u90e8\u7f72"),(0,a.kt)("p",null,"\u5355\u72ec\u7f16\u8bd1jdbc\u5f15\u64ce "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"${linkis_code_dir}/linkis-enginepconn-lugins/engineconn-plugins/jdbc/\nmvn clean install\n")),(0,a.kt)("h3",{id:"22-\u7269\u6599\u7684\u90e8\u7f72\u548c\u52a0\u8f7d"},"2.2 \u7269\u6599\u7684\u90e8\u7f72\u548c\u52a0\u8f7d"),(0,a.kt)("p",null,"\u5c06 2.1 \u6b65\u7f16\u8bd1\u51fa\u6765\u7684\u5f15\u64ce\u5305,\u4f4d\u4e8e"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"${linkis_code_dir}/linkis-engineconn-plugins/engineconn-plugins/jdbc/target/out/jdbc\n")),(0,a.kt)("p",null,"\u4e0a\u4f20\u5230\u670d\u52a1\u5668\u7684\u5f15\u64ce\u76ee\u5f55\u4e0b"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"${LINKIS_HOME}/lib/linkis-engineplugins\n")),(0,a.kt)("p",null,"\u5e76\u91cd\u542flinkis-engineplugin\uff08\u6216\u5219\u901a\u8fc7\u5f15\u64ce\u63a5\u53e3\u8fdb\u884c\u5237\u65b0\uff09"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"cd ${LINKIS_HOME}/sbin\nsh linkis-daemon.sh restart cg-engineplugin\n")),(0,a.kt)("h3",{id:"23-\u5f15\u64ce\u7684\u6807\u7b7e"},"2.3 \u5f15\u64ce\u7684\u6807\u7b7e"),(0,a.kt)("p",null,"Linkis1.X\u662f\u901a\u8fc7\u6807\u7b7e\u6765\u8fdb\u884c\u7684\uff0c\u6240\u4ee5\u9700\u8981\u5728\u6211\u4eec\u6570\u636e\u5e93\u4e2d\u63d2\u5165\u6570\u636e\uff0c\u63d2\u5165\u7684\u65b9\u5f0f\u5982\u4e0b\u6587\u6240\u793a\u3002"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/zh-CN/docs/latest/deployment/engine_conn_plugin_installation"},"EngineConnPlugin\u5f15\u64ce\u63d2\u4ef6\u5b89\u88c5")," "),(0,a.kt)("h2",{id:"3jdbc\u5f15\u64ce\u7684\u4f7f\u7528"},"3.JDBC\u5f15\u64ce\u7684\u4f7f\u7528"),(0,a.kt)("h3",{id:"\u51c6\u5907\u64cd\u4f5c"},"\u51c6\u5907\u64cd\u4f5c"),(0,a.kt)("p",null,"\u60a8\u9700\u8981\u914d\u7f6eJDBC\u7684\u8fde\u63a5\u4fe1\u606f\uff0c\u5305\u62ec\u8fde\u63a5\u5730\u5740\u4fe1\u606f\u548c\u7528\u6237\u540d\u4ee5\u53ca\u5bc6\u7801\u3002"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/29391030/168045539-9cea6c44-56a9-4b14-86fb-1e65f937ae54.png",alt:"jdbc"}),"  "),(0,a.kt)("p",null,"\u56fe3-1 JDBC\u914d\u7f6e\u4fe1\u606f"),(0,a.kt)("p",null,"\u60a8\u4e5f\u53ef\u4ee5\u518d\u63d0\u4ea4\u4efb\u52a1\u63a5\u53e3\u4e2d\u7684params.configuration.runtime\u8fdb\u884c\u4fee\u6539\u5373\u53ef"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"jdbc.url \njdbc.username\njdbc.password\n")),(0,a.kt)("p",null,"\u60a8\u4e5f\u53ef\u4ee5\u5728\u63d0\u4ea4\u4efb\u52a1\u63a5\u53e3\uff0c\u901a\u8fc7\u53c2\u6570\u8fdb\u884c\u914d\u7f6e"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},'http \u8bf7\u6c42\u53c2\u6570\u793a\u4f8b \n{\n    "executionContent": {"code": "show databases;", "runType":  "jdbc"},\n    "params": {\n                    "variable": {},\n                    "configuration": {\n                            "runtime": {\n                                    "jdbc.url":"jdbc:mysql://127.0.0.1:3306/test",  \n                                    "jdbc.username":"test",\n                                    "jdbc.password":"test23"\n                                }\n                            }\n                    },\n    "source":  {"scriptPath": "file:///mnt/bdp/hadoop/1.sql"},\n    "labels": {\n        "engineType": "jdbc-4",\n        "userCreator": "hadoop-IDE"\n    }\n}\n')),(0,a.kt)("h3",{id:"31-\u901a\u8fc7linkis-sdk\u8fdb\u884c\u4f7f\u7528"},"3.1 \u901a\u8fc7Linkis SDK\u8fdb\u884c\u4f7f\u7528"),(0,a.kt)("p",null,"Linkis\u63d0\u4f9b\u4e86Java\u548cScala \u7684SDK\u5411Linkis\u670d\u52a1\u7aef\u63d0\u4ea4\u4efb\u52a1. \u5177\u4f53\u53ef\u4ee5\u53c2\u8003 ",(0,a.kt)("a",{parentName:"p",href:"/zh-CN/docs/latest/user_guide/sdk_manual"},"JAVA SDK Manual"),".\n\u5bf9\u4e8eJDBC\u4efb\u52a1\u60a8\u53ea\u9700\u8981\u4fee\u6539Demo\u4e2d\u7684EngineConnType\u548cCodeType\u53c2\u6570\u5373\u53ef:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},'        Map<String, Object> labels = new HashMap<String, Object>();\n        labels.put(LabelKeyConstant.ENGINE_TYPE_KEY, "jdbc-4"); // required engineType Label\n        labels.put(LabelKeyConstant.USER_CREATOR_TYPE_KEY, "hadoop-IDE");// required execute user and creator\n        labels.put(LabelKeyConstant.CODE_TYPE_KEY, "jdbc"); // required codeType\n')),(0,a.kt)("h3",{id:"32-\u901a\u8fc7linkis-cli\u8fdb\u884c\u4efb\u52a1\u63d0\u4ea4"},"3.2 \u901a\u8fc7Linkis-cli\u8fdb\u884c\u4efb\u52a1\u63d0\u4ea4"),(0,a.kt)("p",null,"Linkis 1.0\u540e\u63d0\u4f9b\u4e86cli\u7684\u65b9\u5f0f\u63d0\u4ea4\u4efb\u52a1\uff0c\u6211\u4eec\u53ea\u9700\u8981\u6307\u5b9a\u5bf9\u5e94\u7684EngineConn\u548cCodeType\u6807\u7b7e\u7c7b\u578b\u5373\u53ef\uff0cJDBC\u7684\u4f7f\u7528\u5982\u4e0b\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},'sh ./bin/linkis-cli -engineType jdbc-4 -codeType jdbc -code "show tables"  -submitUser hadoop -proxyUser hadoop\n')),(0,a.kt)("p",null,"\u5177\u4f53\u4f7f\u7528\u53ef\u4ee5\u53c2\u8003\uff1a ",(0,a.kt)("a",{parentName:"p",href:"/zh-CN/docs/latest/user_guide/linkiscli_manual"},"Linkis CLI Manual"),"."),(0,a.kt)("h3",{id:"33-scriptis\u7684\u4f7f\u7528\u65b9\u5f0f"},"3.3 Scriptis\u7684\u4f7f\u7528\u65b9\u5f0f"),(0,a.kt)("p",null,"Scriptis\u7684\u4f7f\u7528\u65b9\u5f0f\u662f\u6700\u7b80\u5355\u7684\uff0c\u60a8\u53ef\u4ee5\u76f4\u63a5\u8fdb\u5165Scriptis\uff0c\u53f3\u952e\u76ee\u5f55\u7136\u540e\u65b0\u5efaJDBC\u811a\u672c\u5e76\u7f16\u5199JDBC\u4ee3\u7801\u5e76\u70b9\u51fb\u6267\u884c\u3002"),(0,a.kt)("p",null,"JDBC\u7684\u6267\u884c\u539f\u7406\u662f\u901a\u8fc7\u52a0\u8f7dJDBC\u7684Driver\u7136\u540e\u63d0\u4ea4sql\u5230SQL\u7684server\u53bb\u6267\u884c\u5e76\u83b7\u53d6\u5230\u7ed3\u679c\u96c6\u5e76\u8fd4\u56de\u3002"),(0,a.kt)("p",null,(0,a.kt)("img",{src:t(24811).Z})),(0,a.kt)("p",null,"\u56fe3-2 JDBC\u7684\u6267\u884c\u6548\u679c\u622a\u56fe"),(0,a.kt)("h2",{id:"4jdbc\u5f15\u64ce\u7684\u7528\u6237\u8bbe\u7f6e"},"4.JDBC\u5f15\u64ce\u7684\u7528\u6237\u8bbe\u7f6e"),(0,a.kt)("p",null,"JDBC\u7684\u7528\u6237\u8bbe\u7f6e\u662f\u4e3b\u8981\u662f\u7684JDBC\u7684\u8fde\u63a5\u4fe1\u606f\uff0c\u4f46\u662f\u5efa\u8bae\u7528\u6237\u5c06\u6b64\u5bc6\u7801\u7b49\u4fe1\u606f\u8fdb\u884c\u52a0\u5bc6\u7ba1\u7406\u3002"))}d.isMDXComponent=!0},24811:function(e,n,t){n.Z=t.p+"assets/images/jdbc-run-fe0a09fead1ca699d08b646f9908bb60.png"}}]);