(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{171:function(t,e,n){var content=n(181);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(21).default)("ccb3d448",content,!0,{sourceMap:!1})},180:function(t,e,n){"use strict";var r=n(171);n.n(r).a},181:function(t,e,n){(e=n(20)(!1)).push([t.i,".borderRadus[data-v-8e135a34]{border-radius:0!important}",""]),t.exports=e},185:function(t,e,n){var content=n(237);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(21).default)("6b9e0620",content,!0,{sourceMap:!1})},186:function(t,e,n){"use strict";var r={methods:{togelnotification:function(){this.$refs.primary.classList.toggle("displayNone"),this.$refs.danger.classList.toggle("displayNone");var t=this.$refs.cangemybtn;"متصل"===t.innerHTML?(t.innerHTML="غير متصل",t.style.background="#9297b8"):(t.innerHTML="متصل",t.style.background="#2cd1b2")}}},o=(n(180),n(13)),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"btncontaner"},[n("button",{ref:"cangemybtn",staticClass:"button is-medium is-fullwidth mybtn",on:{click:function(e){return t.togelnotification()}}},[t._v("متصل")])]),t._v(" "),n("div",{ref:"primary",staticClass:"notification borderRadus is-primary"},[t._v("انت الان تسطاتيع استقبال الطلبات")]),t._v(" "),n("div",{ref:"danger",staticClass:"notification borderRadus is-danger displayNone"},[t._v("انت غير متصل لن تتمكن من استقبال الطلبات")])])}),[],!1,null,"8e135a34",null);e.a=component.exports},236:function(t,e,n){"use strict";var r=n(185);n.n(r).a},237:function(t,e,n){(e=n(20)(!1)).push([t.i,".home[data-v-24297efc]{text-align:center;position:relative;height:100vh;width:100vw}.home p[data-v-24297efc]{margin-bottom:100px;color:#f0f8ff}.mideltext[data-v-24297efc]{font-size:45px;color:#f0f8ff;margin:0 35px}.hometext[data-v-24297efc]{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%)}@media screen and (max-width:768px){.mideltext[data-v-24297efc]{display:block;margin:35px}}",""]),t.exports=e},243:function(t,e,n){"use strict";n.r(e);n(64);var r={components:{notification:n(186).a},methods:{youHaveOrder:function(){this.$refs.newOrder.classList.toggle("displayNone")},usercustomer:function(){localStorage.setItem("userstat","customer"),this.$router.replace("/customer")},useroner:function(){localStorage.setItem("userstat","oner"),this.$router.replace("/pharmacyowner")}}},o=(n(236),n(13)),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"home"},[n("div",{staticClass:"hometext"},[n("p",{staticClass:"is-size-1"},[t._v("هل انت")]),t._v(" "),n("div",{staticClass:"button is-large is-primary",attrs:{to:"/pharmacyowner"},on:{click:function(e){return t.useroner()}}},[t._v("مالك صيدلية")]),t._v(" "),n("span",{staticClass:"mideltext"},[t._v("او")]),t._v(" "),n("div",{staticClass:"button is-large is-primary",on:{click:function(e){return t.usercustomer()}}},[t._v("مشترى")])])])}),[],!1,null,"24297efc",null);e.default=component.exports}}]);