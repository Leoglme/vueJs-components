(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{270:function(t,e,n){"use strict";n.r(e);var r={name:"Dropdown",props:{color:{type:String,default:"primary"},drop:{type:String,default:""},items:{type:Array||Object,default:null},value:{type:String,default:""},icon:{type:String,default:null}}},o=n(50),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("b-dropdown",{attrs:{"no-caret":!0,dropright:"right"===t.drop,dropleft:"left"===t.drop,dropup:"up"===t.drop,variant:t.color},scopedSlots:t._u([{key:"button-content",fn:function(){return["right"===t.drop?n("i",{staticClass:"fas fa-chevron-down"}):t._e(),t._v(" "),t.icon?n("span",{staticClass:"material-icons-outlined",staticStyle:{"font-size":"18px"}},[t._v(t._s(t.icon))]):t._e(),t._v(" "),"light"===t.color?n("span",{staticStyle:{flex:"1","text-align":"left","margin-left":"4px"}},[t._v(t._s(t.value))]):t._e(),t._v(" "),n("i",{staticClass:"fas fa-chevron-down",staticStyle:{"font-size":"13px","margin-left":"5px"}})]},proxy:!0}])},[t._v(" "),[t._t("default"),t._v(" "),t._l(t.items,(function(e){return n("b-dropdown-item",{key:e,attrs:{active:e===t.value},on:{click:function(n){return n.preventDefault(),t.$emit("input",e)}}},[t._v("\n        "+t._s(e)+"\n      ")])}))]],2)],1)}),[],!1,null,"2017b908",null);e.default=component.exports}}]);