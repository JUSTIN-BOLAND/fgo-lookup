(function(e){function t(t){for(var i,s,l=t[0],o=t[1],c=t[2],m=0,g=[];m<l.length;m++)s=l[m],Object.prototype.hasOwnProperty.call(r,s)&&r[s]&&g.push(r[s][0]),r[s]=0;for(i in o)Object.prototype.hasOwnProperty.call(o,i)&&(e[i]=o[i]);d&&d(t);while(g.length)g.shift()();return n.push.apply(n,c||[]),a()}function a(){for(var e,t=0;t<n.length;t++){for(var a=n[t],i=!0,l=1;l<a.length;l++){var o=a[l];0!==r[o]&&(i=!1)}i&&(n.splice(t--,1),e=s(s.s=a[0]))}return e}var i={},r={app:0},n=[];function s(t){if(i[t])return i[t].exports;var a=i[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,s),a.l=!0,a.exports}s.m=e,s.c=i,s.d=function(e,t,a){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(s.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)s.d(a,i,function(t){return e[t]}.bind(null,i));return a},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],o=l.push.bind(l);l.push=t,l=l.slice();for(var c=0;c<l.length;c++)t(l[c]);var d=o;n.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"0c05":function(e,t,a){},1839:function(e,t,a){"use strict";var i=a("f37d"),r=a.n(i);r.a},"199c":function(e,t){},"23be":function(e,t,a){"use strict";var i=a("199c"),r=a.n(i);t["default"]=r.a},"3dfd":function(e,t,a){"use strict";var i=a("ceab"),r=a("23be"),n=(a("5c0b"),a("2877")),s=Object(n["a"])(r["default"],i["a"],i["b"],!1,null,null,null);t["default"]=s.exports},"56d7":function(e,t,a){"use strict";a.r(t);a("e260"),a("e6cf"),a("cca6"),a("a79d");var i=a("2b0e"),r=a("3dfd"),n=a("8c4f"),s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"container container--lookup"},[a("h1",[e._v("FGO Dropsheet Lookup Tool")]),a("div",{staticClass:"row"},[a("div",{staticClass:"col-sm-12"},[a("SheetSelector",{attrs:{savedSheetId:e.savedSheetId},on:{"handle-sheet-select":e.handleSheetSelect}})],1),a("div",{staticClass:"col-sm-12"},[a("MatSelector",{attrs:{savedMatRanges:e.savedMatRanges,region:e.region},on:{"handle-mat-select":e.handleMatSelect}})],1),a("div",{staticClass:"col-sm-12"},[a("ErrorMsg",{attrs:{errorMsg:e.errorMsg}})],1),a("div",{staticClass:"col-sm-12 container--button"},[a("button",{staticClass:"button--submit",attrs:{type:"button"},on:{click:function(t){return e.handleSubmit()}}},[e._v(" search ")]),a("button",{staticClass:"button--reset",attrs:{type:"button"},on:{click:function(t){return e.handleClear()}}},[e._v(" clear ")]),a("button",{staticClass:"button--link",attrs:{type:"button"},on:{click:function(t){return e.handleLink()}}},[e._v(" get link ")])])]),a("SearchLink",{attrs:{searchLink:e.searchLink}}),e.isLoading?a("div",{staticClass:"overlay--loading"},[a("span",[e._v("loading...")])]):e._e(),a("Results",{attrs:{results:e.results}})],1)},l=[],o=(a("99af"),a("7db0"),a("c975"),a("d3b7"),a("ac1f"),a("1276"),a("ddb0"),a("bc3a")),c=a.n(o),d="https://sheets.googleapis.com/v4/spreadsheets/",m="1_SlTjrVRTgHgfS7sRqx4CeJMqlz687HdSlYqiW-JvQA",g="AIzaSyBOU6FQA09_mZnAmZBZ4YRt1NCEb0xTUbg",v=[{title:"Best 5 AP/Drop (JP)",sheetId:"843570146",sheetUrl:"Best%205%20AP%2FDrop%20%28JP%29"},{title:"Best 5 Droprate (JP)",sheetId:"263109949",sheetUrl:"Best%205%20Droprate%20%28JP%29"},{title:"Best 5 AP/Drop (NA)",sheetId:"1676231111",sheetUrl:"Best%205%20AP%2FDrop%20%28NA%29"},{title:"Best 5 Droprate (NA)",sheetId:"1587228013",sheetUrl:"Best%205%20Droprate%20%28NA%29"}],y=[{name:"Proof of Hero",startRange:"D5",endRange:"N9",rarity:"bronze",type:"mat",availability:"ALL"},{name:"Evil Bone",startRange:"D10",endRange:"N14",rarity:"bronze",type:"mat",availability:"ALL"},{name:"Dragon Fang",startRange:"D15",endRange:"N19",rarity:"bronze",type:"mat",availability:"ALL"},{name:"Void Dust",startRange:"D20",endRange:"N24",rarity:"bronze",type:"mat",availability:"ALL"},{name:"Fool's Chain",startRange:"D25",endRange:"N29",rarity:"bronze",type:"mat",availability:"ALL"},{name:"Deadly Poisonous Needle",startRange:"D30",endRange:"N34",rarity:"bronze",type:"mat",availability:"ALL"},{name:"Mystic Spinal Fluid",startRange:"D35",endRange:"N39",rarity:"bronze",type:"mat",availability:"ALL"},{name:"Stake of Wailing Night",startRange:"D42",endRange:"N46",rarity:"bronze",type:"mat",availability:"ALL"},{name:"Mystic Gunpowder",startRange:"D47",endRange:"N51",rarity:"bronze",type:"mat",availability:"ALL"},{name:"Seed of Yggdrasil",startRange:"D52",endRange:"N56",rarity:"silver",type:"mat",availability:"ALL"},{name:"Ghost Lantern",startRange:"D57",endRange:"N61",rarity:"silver",type:"mat",availability:"ALL"},{name:"Octuplet Crystal",startRange:"D62",endRange:"N66",rarity:"silver",type:"mat",availability:"ALL"},{name:"Serpent Jewel",startRange:"D67",endRange:"N71",rarity:"silver",type:"mat",availability:"ALL"},{name:"Phoenix Feather",startRange:"D72",endRange:"N76",rarity:"silver",type:"mat",availability:"ALL"},{name:"Eternal Gear",startRange:"D79",endRange:"N83",rarity:"silver",type:"mat",availability:"ALL"},{name:"Forbidden Page",startRange:"D84",endRange:"N88",rarity:"silver",type:"mat",availability:"ALL"},{name:"Homunculus Baby",startRange:"D89",endRange:"N93",rarity:"silver",type:"mat",availability:"ALL"},{name:"Meteor Horseshoe",startRange:"D94",endRange:"N98",rarity:"silver",type:"mat",availability:"ALL"},{name:"Great Knight Medal",startRange:"D99",endRange:"N103",rarity:"silver",type:"mat",availability:"ALL"},{name:"Shell of Reminiscence",startRange:"D104",endRange:"N108",rarity:"silver",type:"mat",availability:"ALL"},{name:"Refined Magatama",startRange:"D109",endRange:"N113",rarity:"silver",type:"mat",availability:"ALL"},{name:"Eternal Ice",startRange:"D116",endRange:"N120",rarity:"silver",type:"mat",availability:"ALL"},{name:"Giant's Ring",startRange:"D121",endRange:"N125",rarity:"silver",type:"mat",availability:"JP"},{name:"Aurora Steel",startRange:"D126",endRange:"N130",rarity:"silver",type:"mat",availability:"JP"},{name:"Ancient Bell of Tranquility",startRange:"D131",endRange:"N135",rarity:"silver",type:"mat",availability:"JP"},{name:"Arrowhead of Disastrous Sin",startRange:"D136",endRange:"N140",rarity:"silver",type:"mat",availability:"JP"},{name:"Moonlit Tiara",startRange:"D141",endRange:"N145",rarity:"silver",type:"mat",availability:"JP"},{name:"Divine Spirit Particle",startRange:"D146",endRange:"N150",rarity:"silver",type:"mat",availability:"JP"},{name:"Claw of Chaos",startRange:"D153",endRange:"N157",rarity:"gold",type:"mat",availability:"ALL"},{name:"Heart of the Foreign God",startRange:"D158",endRange:"N162",rarity:"gold",type:"mat",availability:"ALL"},{name:"Dragon's Reverse Scale",startRange:"D163",endRange:"N167",rarity:"gold",type:"mat",availability:"ALL"},{name:"Spirit Root",startRange:"D168",endRange:"N172",rarity:"gold",type:"mat",availability:"ALL"},{name:"Warhorse's Young Horn",startRange:"D173",endRange:"N177",rarity:"gold",type:"mat",availability:"ALL"},{name:"Tearstone of Blood",startRange:"D178",endRange:"N182",rarity:"gold",type:"mat",availability:"ALL"},{name:"Black Beast Grease",startRange:"D183",endRange:"N187",rarity:"gold",type:"mat",availability:"ALL"},{name:"Lamp of Evil-Sealing",startRange:"D190",endRange:"N194",rarity:"gold",type:"mat",availability:"ALL"},{name:"Scarab of Wisdom",startRange:"D195",endRange:"N199",rarity:"gold",type:"mat",availability:"ALL"},{name:"Primordial Lanugo",startRange:"D200",endRange:"N204",rarity:"gold",type:"mat",availability:"ALL"},{name:"Cursed Beast Gallstone",startRange:"D205",endRange:"N209",rarity:"gold",type:"mat",availability:"ALL"},{name:"Mysterious Divine Wine",startRange:"D210",endRange:"N214",rarity:"gold",type:"mat",availability:"ALL"},{name:"Dawnlight Reactor Core",startRange:"D215",endRange:"N219",rarity:"gold",type:"mat",availability:"JP"},{name:"Tsukumo Mirror",startRange:"D220",endRange:"N224",rarity:"gold",type:"mat",availability:"JP"},{name:"Egg of Truth",startRange:"T190",endRange:"AD194",rarity:"gold",type:"mat",availability:"JP"},{name:"Glittering Star Shard",startRange:"T195",endRange:"AD199",rarity:"gold",type:"mat",availability:"JP"},{name:"Secret Gem of Saber",startRange:"T5",endRange:"AD9",rarity:"gold",type:"skill",availability:"ALL"},{name:"Secret Gem of Archer",startRange:"T10",endRange:"AD14",rarity:"gold",type:"skill",availability:"ALL"},{name:"Secret Gem of Lancer",startRange:"T15",endRange:"AD19",rarity:"gold",type:"skill",availability:"ALL"},{name:"Secret Gem of Rider",startRange:"T20",endRange:"AD24",rarity:"gold",type:"skill",availability:"ALL"},{name:"Secret Gem of Caster",startRange:"T25",endRange:"AD29",rarity:"gold",type:"skill",availability:"ALL"},{name:"Secret Gem of Assassin",startRange:"T30",endRange:"AD34",rarity:"gold",type:"skill",availability:"ALL"},{name:"Secret Gem of Berserker",startRange:"T35",endRange:"AD39",rarity:"gold",type:"skill",availability:"ALL"},{name:"Magic Gem of Saber",startRange:"T42",endRange:"AD46",rarity:"silver",type:"skill",availability:"ALL"},{name:"Magic Gem of Archer",startRange:"T47",endRange:"AD51",rarity:"silver",type:"skill",availability:"ALL"},{name:"Magic Gem of Lancer",startRange:"T52",endRange:"AD56",rarity:"silver",type:"skill",availability:"ALL"},{name:"Magic Gem of Rider",startRange:"T57",endRange:"AD61",rarity:"silver",type:"skill",availability:"ALL"},{name:"Magic Gem of Caster",startRange:"T62",endRange:"AD66",rarity:"silver",type:"skill",availability:"ALL"},{name:"Magic Gem of Assassin",startRange:"T67",endRange:"AD71",rarity:"silver",type:"skill",availability:"ALL"},{name:"Magic Gem of Berserker",startRange:"T72",endRange:"AD76",rarity:"silver",type:"skill",availability:"ALL"},{name:"Gem of Saber",startRange:"T79",endRange:"AD83",rarity:"bronze",type:"skill",availability:"ALL"},{name:"Gem of Archer",startRange:"T84",endRange:"AD88",rarity:"bronze",type:"skill",availability:"ALL"},{name:"Gem of Lancer",startRange:"T89",endRange:"AD93",rarity:"bronze",type:"skill",availability:"ALL"},{name:"Gem of Rider",startRange:"T94",endRange:"AD98",rarity:"bronze",type:"skill",availability:"ALL"},{name:"Gem of Caster",startRange:"T99",endRange:"AD103",rarity:"bronze",type:"skill",availability:"ALL"},{name:"Gem of Assassin",startRange:"T104",endRange:"AD108",rarity:"bronze",type:"skill",availability:"ALL"},{name:"Gem of Berserker",startRange:"T109",endRange:"AD113",rarity:"bronze",type:"skill",availability:"ALL"},{name:"Saber Monument",startRange:"T116",endRange:"AD120",rarity:"gold",type:"ascension",availability:"ALL"},{name:"Archer Monument",startRange:"T121",endRange:"AD125",rarity:"gold",type:"ascension",availability:"ALL"},{name:"Lancer Monument",startRange:"T126",endRange:"AD130",rarity:"gold",type:"ascension",availability:"ALL"},{name:"Rider Monument",startRange:"T131",endRange:"AD135",rarity:"gold",type:"ascension",availability:"ALL"},{name:"Caster Monument",startRange:"T136",endRange:"AD140",rarity:"gold",type:"ascension",availability:"ALL"},{name:"Assassin Monument",startRange:"T141",endRange:"AD145",rarity:"gold",type:"ascension",availability:"ALL"},{name:"Berserker Monument",startRange:"T146",endRange:"AD150",rarity:"gold",type:"ascension",availability:"ALL"},{name:"Saber Piece",startRange:"T153",endRange:"AD157",rarity:"silver",type:"ascension",availability:"ALL"},{name:"Archer Piece",startRange:"T158",endRange:"AD162",rarity:"silver",type:"ascension",availability:"ALL"},{name:"Lancer Piece",startRange:"T163",endRange:"AD167",rarity:"silver",type:"ascension",availability:"ALL"},{name:"Rider Piece",startRange:"T168",endRange:"AD172",rarity:"silver",type:"ascension",availability:"ALL"},{name:"Caster Piece",startRange:"T173",endRange:"AD177",rarity:"silver",type:"ascension",availability:"ALL"},{name:"Assassin Piece",startRange:"T178",endRange:"AD182",rarity:"silver",type:"ascension",availability:"ALL"},{name:"Berserker Piece",startRange:"T183",endRange:"AD187",rarity:"silver",type:"ascension",availability:"ALL"}],u=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"container--sheet-selector"},[a("select",{directives:[{name:"model",rawName:"v-model",value:e.sheetUrl,expression:"sheetUrl"}],ref:"sheetSelector",on:{change:[function(t){var a=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.sheetUrl=t.target.multiple?a:a[0]},e.handleChange]}},[a("option",{attrs:{"data-key":"",value:""}},[e._v("-- Select Sheet --")]),e._l(e.sheetIds,(function(t){return a("option",{key:t.sheetId,attrs:{"data-key":t.sheetId},domProps:{value:t.sheetUrl}},[e._v(e._s(t.title))])}))],2)])},h=[],p={name:"SheetSelector",props:{savedSheetId:String},data:function(){return{sheetIds:v,sheetUrl:""}},methods:{handleChange:function(e){""!==e.target.value?(window.localStorage.setItem("sheetUrl",e.target.value),this.$emit("handle-sheet-select",{key:e.target.querySelector(":checked").getAttribute("data-key"),value:e.target.value})):(window.localStorage.removeItem("sheetUrl"),this.$emit("handle-sheet-select",{key:"",value:""}))}},watch:{savedSheetId:{immediate:!1,handler:function(e){var t=this.$refs.sheetSelector.querySelector('option[data-key="'+e+'"').value;this.sheetUrl=t,this.$emit("handle-sheet-select",{key:e,value:t})}}}},f=p,R=(a("cb72"),a("2877")),b=Object(R["a"])(f,u,h,!1,null,"e1288a04",null),A=b.exports,L=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"container--mat-selector"},[a("select",{directives:[{name:"model",rawName:"v-model",value:e.matRange,expression:"matRange"}],on:{change:[function(t){var a=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.matRange=t.target.multiple?a:a[0]},e.handleChange]}},[e._v(" > "),a("option",{attrs:{value:""}},[e._v("-- Select Mat --")]),e._l(e.filteredMats,(function(t){return a("option",{key:t.startRange+":"+t.endRange,domProps:{value:t.startRange+":"+t.endRange}},[e._v(e._s(t.name))])}))],2),a("div",{staticClass:"container--mat-filter container-fluid"},[a("div",{staticClass:"row"},[e._m(0),a("div",{staticClass:"col-xs-3 col--filter"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.matRarityFilter,expression:"matRarityFilter"}],staticClass:"input--checkbox-filter gold",attrs:{type:"checkbox",id:"gold",value:"gold"},domProps:{checked:Array.isArray(e.matRarityFilter)?e._i(e.matRarityFilter,"gold")>-1:e.matRarityFilter},on:{change:[function(t){var a=e.matRarityFilter,i=t.target,r=!!i.checked;if(Array.isArray(a)){var n="gold",s=e._i(a,n);i.checked?s<0&&(e.matRarityFilter=a.concat([n])):s>-1&&(e.matRarityFilter=a.slice(0,s).concat(a.slice(s+1)))}else e.matRarityFilter=r},e.handleFilter]}}),a("label",{attrs:{for:"gold"}},[e._v("gold")])]),a("div",{staticClass:"col-xs-3 col--filter"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.matRarityFilter,expression:"matRarityFilter"}],staticClass:"input--checkbox-filter silver",attrs:{type:"checkbox",id:"silver",value:"silver"},domProps:{checked:Array.isArray(e.matRarityFilter)?e._i(e.matRarityFilter,"silver")>-1:e.matRarityFilter},on:{change:[function(t){var a=e.matRarityFilter,i=t.target,r=!!i.checked;if(Array.isArray(a)){var n="silver",s=e._i(a,n);i.checked?s<0&&(e.matRarityFilter=a.concat([n])):s>-1&&(e.matRarityFilter=a.slice(0,s).concat(a.slice(s+1)))}else e.matRarityFilter=r},e.handleFilter]}}),a("label",{attrs:{for:"silver"}},[e._v("silver")])]),a("div",{staticClass:"col-xs-3 col--filter"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.matRarityFilter,expression:"matRarityFilter"}],staticClass:"input--checkbox-filter bronze",attrs:{type:"checkbox",id:"bronze",value:"bronze"},domProps:{checked:Array.isArray(e.matRarityFilter)?e._i(e.matRarityFilter,"bronze")>-1:e.matRarityFilter},on:{change:[function(t){var a=e.matRarityFilter,i=t.target,r=!!i.checked;if(Array.isArray(a)){var n="bronze",s=e._i(a,n);i.checked?s<0&&(e.matRarityFilter=a.concat([n])):s>-1&&(e.matRarityFilter=a.slice(0,s).concat(a.slice(s+1)))}else e.matRarityFilter=r},e.handleFilter]}}),a("label",{attrs:{for:"bronze"}},[e._v("bronze")])])]),a("div",{staticClass:"row"},[e._m(1),a("div",{staticClass:"col-xs-3 col--filter"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.matTypeFilter,expression:"matTypeFilter"}],staticClass:"input--checkbox-filter mat",attrs:{type:"checkbox",id:"mat",value:"mat"},domProps:{checked:Array.isArray(e.matTypeFilter)?e._i(e.matTypeFilter,"mat")>-1:e.matTypeFilter},on:{change:[function(t){var a=e.matTypeFilter,i=t.target,r=!!i.checked;if(Array.isArray(a)){var n="mat",s=e._i(a,n);i.checked?s<0&&(e.matTypeFilter=a.concat([n])):s>-1&&(e.matTypeFilter=a.slice(0,s).concat(a.slice(s+1)))}else e.matTypeFilter=r},e.handleFilter]}}),a("label",{attrs:{for:"mat"}},[e._v("mat")])]),a("div",{staticClass:"col-xs-3 col--filter"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.matTypeFilter,expression:"matTypeFilter"}],staticClass:"input--checkbox-filter skill",attrs:{type:"checkbox",id:"skill",value:"skill"},domProps:{checked:Array.isArray(e.matTypeFilter)?e._i(e.matTypeFilter,"skill")>-1:e.matTypeFilter},on:{change:[function(t){var a=e.matTypeFilter,i=t.target,r=!!i.checked;if(Array.isArray(a)){var n="skill",s=e._i(a,n);i.checked?s<0&&(e.matTypeFilter=a.concat([n])):s>-1&&(e.matTypeFilter=a.slice(0,s).concat(a.slice(s+1)))}else e.matTypeFilter=r},e.handleFilter]}}),a("label",{attrs:{for:"skill"}},[e._v("skill")])]),a("div",{staticClass:"col-xs-3 col--filter"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.matTypeFilter,expression:"matTypeFilter"}],staticClass:"input--checkbox-filter ascension",attrs:{type:"checkbox",id:"ascension",value:"ascension"},domProps:{checked:Array.isArray(e.matTypeFilter)?e._i(e.matTypeFilter,"ascension")>-1:e.matTypeFilter},on:{change:[function(t){var a=e.matTypeFilter,i=t.target,r=!!i.checked;if(Array.isArray(a)){var n="ascension",s=e._i(a,n);i.checked?s<0&&(e.matTypeFilter=a.concat([n])):s>-1&&(e.matTypeFilter=a.slice(0,s).concat(a.slice(s+1)))}else e.matTypeFilter=r},e.handleFilter]}}),a("label",{attrs:{for:"ascension"}},[e._v("ascension")])])]),a("div",{staticClass:"row"},[e._m(2),a("div",{staticClass:"col-xs-3 col--filter"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.matSort,expression:"matSort"}],staticClass:"input--radio-filter ascending",attrs:{type:"radio",id:"ascending",value:"ascending"},domProps:{checked:e._q(e.matSort,"ascending")},on:{change:[function(t){e.matSort="ascending"},e.handleFilter]}}),a("label",{attrs:{for:"ascending"}},[e._v("A-Z")])]),a("div",{staticClass:"col-xs-3 col--filter"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.matSort,expression:"matSort"}],staticClass:"input--radio-filter descending",attrs:{type:"radio",id:"descending",value:"descending"},domProps:{checked:e._q(e.matSort,"descending")},on:{change:[function(t){e.matSort="descending"},e.handleFilter]}}),a("label",{attrs:{for:"descending"}},[e._v("Z-A")])]),a("div",{staticClass:"col-xs-3 col--filter"})])])])},_=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"col-xs-3 col--label"},[a("span",{staticClass:"wrapper--filter-label"},[e._v("Rarity")])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"col-xs-3 col--label"},[a("span",{staticClass:"wrapper--filter-label"},[e._v("Type")])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"col-xs-3 col--label"},[a("span",{staticClass:"wrapper--filter-label"},[e._v("Sort")])])}],k=(a("4de4"),a("b0c0"),a("4fad"),a("3835")),S=a("2909"),D={name:"MatSelector",props:{savedMatRanges:String,region:String},data:function(){return{mats:y,matRange:"",filteredMats:y,matRarityFilter:["gold","silver","bronze"],matTypeFilter:["mat","skill","ascension"],matSort:"ascending"}},methods:{handleChange:function(e){""!==e.target.value?(window.localStorage.setItem("matRanges",e.target.value),this.$emit("handle-mat-select",e.target.value)):(window.localStorage.removeItem("matRanges"),this.$emit("handle-mat-select",""))},handleFilter:function(){var e=this,t=[],a=[],i=[];if(""===this.region||"JP"===this.region)t=y;else{var r=y.filter((function(t){return t.availability===e.region}));t=[].concat(Object(S["a"])(t),Object(S["a"])(r))}for(var n=function(){var e=Object(k["a"])(l[s],2),i=e[1],r=t.filter((function(e){return e.rarity===i}));a=[].concat(Object(S["a"])(a),Object(S["a"])(r))},s=0,l=Object.entries(this.matRarityFilter);s<l.length;s++)n();for(var o=function(){var e=Object(k["a"])(d[c],2),t=e[1],r=a.filter((function(e){return e.type===t}));i=[].concat(Object(S["a"])(i),Object(S["a"])(r))},c=0,d=Object.entries(this.matTypeFilter);c<d.length;c++)o();i="ascending"===this.matSort?i.sort((function(e,t){return e.name>t.name?1:-1})):i.sort((function(e,t){return e.name<t.name?1:-1})),this.filteredMats=i,this.filteredMats.filter((function(t){return"".concat(t.startRange,":").concat(t.endRange)===e.matRange})).length<=0&&(this.matRange="",this.$emit("handle-mat-select",""))}},watch:{savedMatRanges:{immediate:!1,handler:function(){this.matRange=this.savedMatRanges,this.$emit("handle-mat-select",this.matRange)}},region:{immediate:!1,handler:function(){this.handleFilter()}}},created:function(){this.handleFilter()}},C=D,T=(a("1839"),Object(R["a"])(C,L,_,!1,null,"14221aba",null)),F=T.exports,w=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"container--results"},[e.results?0===e.results.length?a("div",{staticClass:"grid grid--no-result"},[a("span",{staticClass:"notification--no-result"},[e._v("No results found.")])]):e.results.length>0?a("div",{staticClass:"grid"},[e._m(0),e._l(e.results,(function(t){return a("div",{key:t[0],staticClass:"row grid--row"},[a("div",{staticClass:"grid--cell col-xs-12 col-sm-2"},[a("span",{staticClass:"responsive--header"},[e._v("Area")]),e._v(" "+e._s(t.values[2].formattedValue)+" ")]),a("div",{staticClass:"grid--cell col-xs-12 col-sm-3"},[a("span",{staticClass:"responsive--header"},[e._v("Quest")]),e._v(" "),t.values[3].hyperlink?a("a",{staticClass:"link--wiki",attrs:{href:t.values[3].hyperlink,target:"_blank"}},[e._v(e._s(t.values[3].formattedValue))]):a("span",[e._v(e._s(t.values[3].formattedValue))])]),a("div",{staticClass:"grid--cell col-xs-12 col-sm-1"},[a("span",{staticClass:"responsive--header"},[e._v("AP")]),e._v(" "+e._s(t.values[4].formattedValue)+" ")]),a("div",{staticClass:"grid--cell col-xs-12 col-sm-1"},[a("span",{staticClass:"responsive--header"},[e._v("BP/AP")]),e._v(" "+e._s(t.values[5].formattedValue)+" ")]),a("div",{staticClass:"grid--cell col-xs-12 col-sm-1"},[a("span",{staticClass:"responsive--header"},[e._v("APD")]),e._v(" "+e._s(t.values[6].formattedValue)+" ")]),a("div",{staticClass:"grid--cell col-xs-12 col-sm-2"},[t.values[8].formattedValue?a("span",{staticClass:"responsive--header"},[e._v("%")]):e._e(),e._v(" "+e._s(t.values[8].formattedValue)+" "),t.values[8].formattedValue?a("span",[e._v("%")]):e._e()]),a("div",{staticClass:"grid--cell col-xs-12 col-sm-1"},[a("span",{staticClass:"responsive--header"},[e._v("Runs")]),e._v(" "+e._s(t.values[10].formattedValue)+" ")])])}))],2):e._e():a("div",{staticClass:"grid--first-load"})])},x=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"row grid--row grid--header"},[a("div",{staticClass:"grid--cell col-xs-12 col-sm-2"},[e._v("Area")]),a("div",{staticClass:"grid--cell col-xs-12 col-sm-3"},[e._v("Quest")]),a("div",{staticClass:"grid--cell col-xs-12 col-sm-1"},[e._v("AP")]),a("div",{staticClass:"grid--cell col-xs-12 col-sm-1"},[e._v("BP/AP")]),a("div",{staticClass:"grid--cell col-xs-12 col-sm-1"},[e._v("AP/Drop")]),a("div",{staticClass:"grid--cell col-xs-12 col-sm-2"},[e._v("Drop Chance")]),a("div",{staticClass:"grid--cell col-xs-12 col-sm-1"},[e._v("Runs")])])}],M={name:"Results",props:{results:{type:Array}},methods:{}},P=M,N=(a("741f"),Object(R["a"])(P,w,x,!1,null,"6383e6e4",null)),I=N.exports,O=function(){var e=this,t=e.$createElement,a=e._self._c||t;return e.searchLink?a("div",{staticClass:"container--searchlink"},[a("input",{staticClass:"input--search-link",attrs:{readonly:"",type:"text"},domProps:{value:e.searchLink},on:{focus:function(e){return e.target.select()}}})]):e._e()},G=[],j={name:"SearchLink",props:{searchLink:String},methods:{}},z=j,U=(a("8e8d"),Object(R["a"])(z,O,G,!1,null,"e229b6d2",null)),$=U.exports,B=function(){var e=this,t=e.$createElement,a=e._self._c||t;return e.errorMsg?a("div",{staticClass:"container--errorMsg"},[a("span",{staticClass:"span--errorMsg"},[e._v(e._s(e.errorMsg))])]):e._e()},J=[],E={name:"ErrorMsg",props:{errorMsg:String},methods:{}},V=E,q=(a("6971"),Object(R["a"])(V,B,J,!1,null,"472ac6ab",null)),H=q.exports,W={name:"Lookup",components:{SheetSelector:A,MatSelector:F,Results:I,SearchLink:$,ErrorMsg:H},data:function(){return{sheetIds:v,mats:y,sheetUrl:"",sheetObj:{},savedSheetId:"",matRanges:"",savedMatRanges:"",results:null,region:"",isLoading:!1,searchLink:null,errorMsg:null}},methods:{handleSheetSelect:function(e){this.savedSheetId=e.key,this.sheetUrl=e.value,e.value.indexOf("JP")>-1?this.region="JP":this.region="ALL"},handleMatSelect:function(e){this.savedMatRanges=e,this.matRanges=e},handleSubmit:function(){var e=this;if(this.errorMsg=null,this.results=null,this.sheetUrl)if(this.matRanges.length<5)this.errorMsg="Please select a mat.";else{this.isLoading=!0;var t="".concat(d).concat(m,"?ranges=").concat(this.sheetUrl,"!").concat(this.matRanges,"&fields=sheets&key=").concat(g);c.a.get(t).then((function(t){e.isLoading=!1;var a=t.data.sheets[0].data[0].rowData;a&&(a[0].values[2].formattedValue?e.results=a:e.results=[])})).catch((function(t){e.isLoading=!1,e.errorMsg="Error loading data.",console.log(t)}))}else this.errorMsg="Please select a sheet."},handleClear:function(){this.results=null,this.searchLink=null,this.savedSheetId="",this.matRanges="",this.savedMatRanges="",this.region="",window.localStorage.removeItem("sheetUrl"),window.localStorage.removeItem("matRanges"),this.errorMsg=null,"/"!==this.$route.path&&this.$router.push("/")},handleLink:function(){this.errorMsg=null,""!==this.savedSheetId&&""!==this.savedMatRanges?this.searchLink="".concat(window.location.origin).concat(window.location.pathname,"#").concat(this.savedSheetId,"/").concat(this.savedMatRanges):this.errorMsg="Please select a sheet and a mat first."}},mounted:function(){var e=this;if(null!==window.localStorage.getItem("sheetUrl")&&null!==window.localStorage.getItem("matRanges")&&(this.sheetUrl=window.localStorage.getItem("sheetUrl"),this.matRanges=window.localStorage.getItem("matRanges"),this.savedSheetId=this.sheetIds.find((function(t){return t.sheetUrl===e.sheetUrl})).sheetId,this.savedMatRanges=window.localStorage.getItem("matRanges"),this.sheetUrl.indexOf("JP")>-1?this.region="JP":this.region="ALL"),this.$route.path.length>1){var t=encodeURI(this.$route.path),a=t.substr(1).split("/");this.savedSheetId=a[0],this.matRanges=a[1],this.savedMatRanges=a[1],setTimeout((function(){e.handleSubmit()}),100)}}},Z=W,Q=(a("6c46"),Object(R["a"])(Z,s,l,!1,null,"15f3ca34",null)),Y=Q.exports;i["a"].use(n["a"]);var K=[{path:"*",name:"Lookup",component:Y}],X=new n["a"]({routes:K,mode:"hash"}),ee=X;i["a"].config.productionTip=!1,new i["a"]({router:ee,render:function(e){return e(r["default"])}}).$mount("#app")},"5c0b":function(e,t,a){"use strict";var i=a("9c0c"),r=a.n(i);r.a},6971:function(e,t,a){"use strict";var i=a("0c05"),r=a.n(i);r.a},"6c46":function(e,t,a){"use strict";var i=a("b0bd"),r=a.n(i);r.a},"741f":function(e,t,a){"use strict";var i=a("7704"),r=a.n(i);r.a},7704:function(e,t,a){},"8e8d":function(e,t,a){"use strict";var i=a("b70f"),r=a.n(i);r.a},"9c0c":function(e,t,a){},a1d8:function(e,t,a){},b0bd:function(e,t,a){},b70f:function(e,t,a){},cb72:function(e,t,a){"use strict";var i=a("a1d8"),r=a.n(i);r.a},ceab:function(e,t,a){"use strict";a.d(t,"a",(function(){return i})),a.d(t,"b",(function(){return r}));var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"app"}},[a("div",{attrs:{id:"nav"}}),a("router-view",{key:e.$route.path})],1)},r=[]},f37d:function(e,t,a){}});
//# sourceMappingURL=app.8ff212dc.js.map