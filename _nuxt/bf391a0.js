(window.webpackJsonp=window.webpackJsonp||[]).push([[23,3,4,6],{374:function(n){n.exports=JSON.parse('{"d":[{"name":"首页","link":""},{"name":"算法商场","link":""},{"name":"核心产品","link":""},{"name":"行业方案","link":""},{"name":"关于我们","link":""}],"c":[{"title":"AI算法商城","desc":"打造丰富多样的算力模型，加速行业场景数字化升级","link":"","img":"index/ai.jpg"},{"title":"三体AI边缘计算盒","desc":"最大可支持32路摄像头接入，内置数十种AI算法","link":"","img":"index/box.jpg"},{"title":"让科技更简单<br/>让生活更智能","desc":"用突破性的技术，解决社会和商业中的棘手问题","link":"","img":"index/more.jpg"}],"a":{"box-1":[{"icon":"index/ai-01.svg","name":"AI视觉计算中枢"},{"icon":"index/ai-03.svg","name":"AI智能推理应用平台"}],"box-2":[{"icon":"index/ai.svg","name":"全栈AI技术"}],"box-3":[{"icon":"index/ai-02.svg","name":"AI智能自动训练平台"},{"icon":"index/ai-04.svg","name":"AI算法仓"}]},"b":[{"icon":"index/ai-05.svg","name":"AI训练服务器"},{"icon":"index/ai-06.svg","name":"前端摄像头"},{"icon":"index/ai-07.svg","name":"AI边缘智能终端"}],"f":{"title":"AI赋能行业","desc":"广泛应用于数据中心、电力行业、智慧社区、政务中心、能源化工等多个垂直领域","list":[{"title":"数据中心","desc":"烟火检测、杂物堆积检测、身份识别（非面部）、安全帽检测、脱岗检测、入侵检测、摔倒检测","link":"","bg":"index/i-bg-01.svg"},{"title":"电力行业","desc":"安全帽检测、工装检测、违规行为检测、烟火检测","link":"","bg":"index/i-bg-02.svg"},{"title":"智慧社区","desc":"消防通道检测、烟火检测、车辆违停检测、高空抛物检测、攀爬检测","link":"","bg":"index/i-bg-03.svg"},{"title":"政务中心","desc":"佩戴口罩检测、吸烟检测、玩手机检测、工作人员着装检测、跌倒检测、在岗人数检测、脱岗检测","link":"","bg":"index/i-bg-04.svg"}]},"g":{"title":"将AI智能科技普惠每个人，为各行业的合作伙伴提供了巨大的商业空间","desc":"欢迎入驻三体科技平台，与我们一起共建AI智能生态系统"},"e":["7*24小时服务","精选优质服务商","官方安全检测","售后无忧退订"]}')},375:function(n,t,e){n.exports=e.p+"img/logo.71a71eb.png"},376:function(n,t,e){n.exports=e.p+"img/icon-01.0b26a38.svg"},377:function(n,t,e){n.exports=e.p+"img/icon-02.75dd483.svg"},378:function(n,t,e){n.exports=e.p+"img/icon-03.cab46d7.svg"},379:function(n,t,e){n.exports=e.p+"img/icon-04.3be64a9.svg"},380:function(n,t,e){"use strict";var c=e(2),o=e(394);c({target:"String",proto:!0,forced:e(395)("link")},{link:function(n){return o(this,"a","href",n)}})},382:function(n,t,e){},383:function(n,t,e){},384:function(n,t,e){},394:function(n,t,e){var c=e(4),o=e(23),r=e(13),l=/"/g,d=c("".replace);n.exports=function(n,t,e,c){var v=r(o(n)),f="<"+t;return""!==e&&(f+=" "+e+'="'+d(r(c),l,"&quot;")+'"'),f+">"+v+"</"+t+">"}},395:function(n,t,e){var c=e(3);n.exports=function(n){return c((function(){var t=""[n]('"');return t!==t.toLowerCase()||t.split('"').length>3}))}},487:function(n,t,e){"use strict";e(382)},488:function(n,t,e){"use strict";e(383)},489:function(n,t,e){var map={"./icon-01.svg":376,"./icon-02.svg":377,"./icon-03.svg":378,"./icon-04.svg":379};function c(n){var t=o(n);return e(t)}function o(n){if(!e.o(map,n)){var t=new Error("Cannot find module '"+n+"'");throw t.code="MODULE_NOT_FOUND",t}return map[n]}c.keys=function(){return Object.keys(map)},c.resolve=o,n.exports=c,c.id=489},490:function(n,t,e){"use strict";e(384)},491:function(n,t,e){"use strict";e.r(t);e(380),e(40);var c=[function(){var n=this._self._c;return n("a",{staticClass:"logo",attrs:{href:"http://",target:"_blank"}},[n("img",{attrs:{src:e(375)}})])}],o=e(374),r={data:function(){return{header:o.d}}},l=(e(487),e(51)),component=Object(l.a)(r,(function(){var n=this,t=n._self._c;return t("div",{staticClass:"c-header"},[t("div",{staticClass:"wp"},[n._m(0),n._v(" "),t("div",{staticClass:"links"},n._l(n.header,(function(e,i){return t("a",{key:i,staticClass:"u-link",attrs:{href:e.link,target:"_blank"}},[n._v("\n                "+n._s(e.name)+"\n            ")])})),0)])])}),c,!1,null,null,null);t.default=component.exports},492:function(n,t,e){"use strict";e.r(t);e(380);var c=e(374),o={data:function(){return{carousel:c.c}},methods:{changeHandle:function(){}}},r=(e(488),e(51)),component=Object(r.a)(o,(function(){var n=this,t=n._self._c;return t("div",{staticClass:"m-index-carousel"},[t("el-carousel",{attrs:{autoplay:!0},on:{change:n.changeHandle}},n._l(n.carousel,(function(e,i){return t("el-carousel-item",{key:i},[t("a",{staticClass:"u-link",class:"u-link-".concat(i+1),attrs:{href:e.link,target:"_blank"}},[t("div",{staticClass:"box wp"},[t("span",{staticClass:"title",domProps:{innerHTML:n._s(e.title)}}),n._v(" "),t("span",{staticClass:"desc"},[n._v(n._s(e.desc))]),n._v(" "),t("span",{staticClass:"button"},[n._v("查看更多")])])])])})),1)],1)}),[],!1,null,null,null);t.default=component.exports},493:function(n,t,e){"use strict";e.r(t);var c=e(374),o={data:function(){return{icon:c.e}}},r=(e(490),e(51)),component=Object(r.a)(o,(function(){var n=this,t=n._self._c;return t("div",{staticClass:"c-footer"},[t("div",{staticClass:"icons"},[t("div",{staticClass:"wp"},n._l(n.icon,(function(c,i){return t("div",{key:i,staticClass:"item"},[t("img",{staticClass:"icon",attrs:{src:e(489)("./icon-0".concat(i+1,".svg"))}}),n._v(" "),t("span",{staticClass:"name"},[n._v(n._s(c))])])})),0)]),n._v(" "),t("div",{staticClass:"content wp"})])}),[],!1,null,null,null);t.default=component.exports},532:function(n,t,e){"use strict";e.r(t);var c={name:"IndexServer",data:function(){return{}},computed:{},methods:{}},o=e(51),component=Object(o.a)(c,(function(){var n=this,t=n._self._c;return t("div",{staticClass:"p-server"},[t("common-header"),n._v(" "),t("client-only",[t("index-carousel")],1),n._v(" "),t("common-footer")],1)}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{CommonHeader:e(491).default,IndexCarousel:e(492).default,CommonFooter:e(493).default})}}]);