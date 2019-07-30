/*! v1.1.0 Build Thu, 25 Aug 2016 10:32:46 GMT */
!function(){var e={},t=function(){var t,n,r,i=Array.prototype.slice.call(arguments,0);"string"==typeof i[0]?(r=i[0],t=i[1],n=i[2]):Array.isArray(i[0])&&(t=i[0],n=i[1]);var o=t.reduce(function(e,t){return e.addDependency(t)},tau.mashups);return o=o.addDependency(r+"/config"),o=o.addMashup(function(){var i=Array.prototype.slice.call(arguments,0);if(t.length>0&&1===i.length)throw new Error("Can't properly load dependencies for mashup \""+r+'", mashup is stopped.');return e.variables=i[i.length-1],i.length-t.length===2?e.config=i[i.length-2]:e.config={},Object.freeze&&(Object.freeze(e.variables),Object.freeze(e.config),Object.freeze(e)),n.apply(null,i)})};t("QuickAddSeveralWorkItems",["Underscore","jQuery","tau/configurator","tau/models/board.customize.units/const.entity.types.names","tau/models/board.customize.units/const.card.sizes","tau/models/board.customize.units/board.customize.units.interaction"],function(t,n,r,i,o,a){return function(t){function n(e){if(r[e])return r[e].exports;var i=r[e]={exports:{},id:e,loaded:!1};return t[e].call(i.exports,i,i.exports,n),i.loaded=!0,i.exports}var r={};return n.m=t,n.c=r,n.p="",n.p=e.variables?e.variables.mashupPath:n.p,n(0)}([function(e,t,n){n(1),n(17),n(18),e.exports=n(19)},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function i(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}var o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a=n(2),u=n(3),s=r(u),c=n(4),d=r(c),f=n(5),l=n(13),p=r(l),m=function(e){var t=e.dataTransfer;return new Promise(function(e,n){if(!(window.FileReader&&t&&t.files&&t.files.length))return n("This browser does not support data transfer.");var r=t.files[0];if(!r.type.match(/^text\//))return n("Incorrect type of file, should be text.");var i=new FileReader;i.onload=function(){var t=i.result||"",n=(0,a.compact)(t.split(/\r?\n/).map(function(e){return e.trim()}));e(n)},i.readAsText(r,"utf8")})},v=function(e){return e.cells&&e.cells.types?e.cells.types:[]},h=function(e){var t=v(e);return!!t.length&&!(0,a.intersection)(t,["iteration","release","projectmember"]).length},g=function(e){var t=v(e);return(0,a.contains)(t,"user")||(0,a.contains)(t,"requester")},y=function(e){var t=v(e);return(0,a.contains)(t,"user")?5:(0,a.contains)(t,"requester")?3:1},b=function(e){var t=v(e);return(0,a.contains)(t,"user")?["FirstName","LastName","Email","Login","Password"]:(0,a.contains)(t,"requester")?["FirstName","LastName","Email"]:["Name"]},x=function(e){return e.map(function(e){return e.trim()}).filter(function(e){return e})},w=function(e,t){var n=t.some(function(e){return e.match(/[\ufffd]/)}),r=g(e),o=y(e),a=t.map(function(e,t){return{id:t,values:x(r?e.split(","):[e])}}),u=a.some(function(e){return e.values.length!==o});a=a.filter(function(e){return e.values.length===o});var s=!a.length;return{items:a,warnings:[].concat(i(n?["This data contains non-unicode symbols, which may not be interpreted correctly. You can try it as is or save the file again in a unicode format."]:[]),i(u?["This data contains incomplete lines, which are not correspond to format. These lines are excluded from import."]:[]),i(s?["There is no data to import"]:[]))}},k=function(e){(0,f.addBusListener)("board_plus","board.configuration.ready:last + overview.board.ready",function(t,n,r){var i=r.element;if(h(n)){var a=i.find(".i-role-grid .i-role-cellholder");a.on("dragover",function(e){return e.preventDefault(),!1}),a.on("drop",function(t){t.preventDefault();var r=t.currentTarget;m(t.originalEvent).then(function(e){return w(n,e)}).then(function(t){return e(o({},t,{cell:r,predefinedFieldsCount:y(n),parsedFieldNames:b(n)}))})["catch"](function(t){return e({globalError:t})})})}})},C=function(e){return e.fire("adjustPosition")},j=function(e,t){var n=t.filter(function(e){return!e.isCompleted});e.text("Import "+n.length+" "+(n.length>1?"items":"item"))},O=function(e,t,n,r,i){t.find(".tau-field:not(.i-role-noentity-warning)").toArray().slice(0,r).forEach(function(e){var t=(0,s["default"])(e);t.hide(),t.find("[data-validate]").removeAttr("data-validate")});var o=(0,s["default"])("<div class="+p["default"].block+"></div>");t.prepend(o),i.forEach(function(e){return o.append('<div class="'+p["default"].warning+'">'+e+"</div>")});var a=(0,s["default"])("<ol class="+p["default"].list+"></ol>").append(n.map(function(e){return'<li class="'+p["default"].item+'" data-key="'+e.id+'">'+e.values+"</li>"}));o.append(a),t.find(".tau-field--button-wrap").find("button").hide();var u=(0,s["default"])('<button type="submit" class="tau-btn tau-add-item tau-success i-role-add" data-key="import" />');return j(u,n),t.find(".tau-field--button-wrap").append(u),C(e),{$submitButton:u}},A=function(e){return new Promise(function(t){var n=(0,f.addBusListener)("board plus quick add cells","afterRender",function(e,r){n.remove(),t({bus:e.sender,$el:r.element})});(0,s["default"])(e).find(".i-role-cell").trigger("dblclick")})},N=function(e){return e.find("[data-fieldname]").toArray().map(function(e){return(0,s["default"])(e).data("fieldname")})},L=function(e,t){var n=e.find('[data-fieldname="'+t+'"]');return n.length>1&&(n.is('[data-iscf="true"]')?n=e.find('.cf-wrap.tau-field.show [data-fieldname="'+t+'"]'):console.warn('multiple non-custom fields with the same name "'+t+'" exists')),n.is(":input")?n.val():n.find(":checked").toArray().map(function(e){return(0,s["default"])(e).val()})},B=function(e,t,n){var r=e.find('[data-fieldname="'+t+'"]');r.is(":input")?r.val(n):r.find(":checkbox").toArray().forEach(function(e){return(0,s["default"])(e).prop("checked",n.indexOf((0,s["default"])(e).val())>=0)})},R=function(e,t){(0,a.forEach)(t,function(t,n){return B(e,n,t)})},U=function(e,t){var n=t.find('[data-key="'+e.id+'"]'),r=t.find("."+p["default"].list);r.scrollTop(r.scrollTop()+n.position().top)},E=function(e,t){var n=t.find('[data-key="'+e.id+'"]');n.addClass(p["default"].completed)},D=function(e){return new Promise(function(t,n){var r=d["default"].getGlobalBus();r.once("model.data.item.did.add",t),r.once("model.data.item.did.fail.add",n),e.trigger("submit")})},S=function(e,t,n,r){var i=(0,a.object)(t.values.map(function(t,n){return[e[n],t]})),u=o({},n,i);return R(r,u),D(r).then(function(){U(t,r),E(t,r)})},_=function(e,t){return e.find('[data-key="import"]').on("click",t)},T=function(e,t,n,r){return t.filter(function(e){return!e.isCompleted}).reduce(function(t,i){return t.then(function(){return S(e,i,n,r)}).then(function(){i.isCompleted=!0})["catch"](function(e){throw i.isCompleted=!1,e})},Promise.resolve(!0))},F=function(e){var t=N(e);return(0,a.object)(t.map(function(t){return[t,L(e,t)]}))},z=function(e){return d["default"].getBusRegistry().getByName("application board").then(function(t){t.fire("error",{message:e})})},M=function(e){return new Promise(function(t,n){(0,a.defer)(e,t,n)})},P=function(e){return function(t,n){e.find(".tau-field .tau-error").length>0&&n(),t()}},q=function(e,t){var n=e.find(".quick-add__entity-type-group button");n.prop("disabled",t)};k(function(e){var t=e.cell,n=e.items,r=e.predefinedFieldsCount,i=e.parsedFieldNames,o=e.warnings,a=e.globalError;return a?z(a):(A(t).then(function(e){var t=e.bus,a=e.$el;a.find("form").each(function(e,u){var c=(0,s["default"])(u),d=O(t,c,n,r,o),f=d.$submitButton;_(c,function(){var e=F(c);f.prop("disabled",!0),q(a,!0),Promise.all([T(i,n,e,c),M(P(c))]).then(function(){f.text("All items are imported!")},function(){f.prop("disabled",!1),q(a,!1)})["catch"](function(){f.prop("disabled",!1),q(a,!1),j(f,n),C(t)})})})}),!0)})},function(e,n){e.exports=t},function(e,t){e.exports=n},function(e,t){e.exports=r},function(e,t,n){"use strict";var r=n(6),i=n(7),o=n(8),a=n(12);e.exports={addBusListener:i.addBusListener,addBusListenerOnce:i.addBusListenerOnce,getAppConfigurator:r.getAppConfigurator,configurator:r,events:i,customUnits:o,debug:a}},function(e,t,n){"use strict";var r=n(4),i=n(3),o=new i.Deferred;r.getGlobalBus().on("configurator.ready",function(e,t){t._id&&!t._id.match(/global/)&&o.resolve(t)});var a=function(){return o.promise()};e.exports={getAppConfigurator:a}},function(e,t,n){"use strict";var r=n(4),i=r.getBusRegistry(),o=function(e){return function(){e.apply(null,Array.prototype.slice.call(arguments).slice(1))}},a=function(e,t,n,r){var a=o(function(i){var o=i.bus;o.name===e&&o[r?"once":"on"](t,n)}),u=i.addEventListener("create",a);return i.addEventListener("destroy",o(function(r){var i=r.bus;i.name===e&&i.removeListener(t,n,u)})),{remove:function(){i.removeListener("create",a,u),i.getByName(e).then(function(e){e.removeListener(t,n,u)})}}},u=function(e,t,n){return a(e,t,n,!0)};e.exports={addBusListener:a,addBusListenerOnce:u}},function(e,t,n){"use strict";var r=n(9),i=n(10),o=n(11).openUnitEditor,a=n(6),u=function(e){return Object.keys(e||{}).reduce(function(t,n){return t[n]=e[n],t},{})},s=function(e){var t=u(e);return t.types=t.types||[r.ANY_TYPE],t.sizes=t.sizes||Object.keys(i).map(function(e){return i[e]}),a.getAppConfigurator().then(function(n){var r=n.getUnitsRegistry();if(!t.id)throw new Error('Field "id" is required for custom unit config');if(r.units[t.id])throw new Error('Custom unit with id "'+t.id+'" has been already registered');t.name=t.name||t.id,t.model=t.model||t.sampleData?t.model:{dummy:1},"string"!=typeof t.model&&"object"==typeof t.model&&(t.model=Object.keys(t.model).reduce(function(e,n){return e.concat(n+":"+t.model[n])},[]).join(", ")),t.sampleData=t.sampleData||{},t.template="object"==typeof e.template?u(t.template):t.template||{markup:['<div class="tau-board-unit__value">'+t.id+"</div>"]},"string"==typeof t.template&&(t.template={markup:[t.template]}),"string"==typeof t.template.markup&&(t.template.markup=[t.template.markup]),t.outerClassName&&(t.classId=t.outerClassName),t.priority&&(t.priority=Number(t.priority)),t.isEditable&&(t.interactionConfig={isEditable:t.isEditable},t.editorHandler?t.interactionConfig.handler=t.editorHandler:t.interactionConfig.handler=function(e,n){var r=e.cardDataForUnit,i=t.editorComponentName instanceof Function?t.editorComponentName(r):t.editorComponentName,a=o(i,{});if(t.editorData){var u={};Object.keys(t.editorData).forEach(function(e){var n=t.editorData[e];u[e]=n instanceof Function?n(r):r[n]}),e.cardDataForUnit=u}return a(e,n)}),r.units[t.id]=r.register([t])[t.id]})};e.exports={types:r,sizes:i,add:s}},function(e,t){e.exports=i},function(e,t){e.exports=o},function(e,t){e.exports=a},function(e,t,n){"use strict";var r=n(4),i=r.getBusRegistry(),o=function(){i.on("create",function(e,t){var n=t.bus;n.on("afterRender",function(e,t){t.element.attr("data-component-name",n.name)})})},a=function(e,t){var n=e;e?"string"==typeof e&&(n=function(t){return(t.name||t.id)===e}):n=function(){return!0},t||(t=function(e,t,n){console.log("LOG BUS",e,t,n)});var i=r.getGlobalBus(),o=i.fire.bind(i);i.fire=function(e,r,i){return i&&n(i,e,r)&&t(i.name||i.id,e,r),o(e,r,i)}};e.exports={showComponentsNames:o,logBus:a}},function(e,t,n){var r=n(14);"string"==typeof r&&(r=[[e.id,r,""]]);n(16)(r,{});r.locals&&(e.exports=r.locals)},function(e,t,n){t=e.exports=n(15)(),t.push([e.id,"._1rD23jkwB4OJoduo5ODI0C{margin-top:15px}.iROZ0k4sSNXSMsDdgqjQw{overflow-x:hidden;overflow-y:auto;max-height:200px;margin:0;padding:0 20px}._2YYvHDUSRNGCkUj-mVwZhA{padding-bottom:5px;white-space:nowrap;text-overflow:ellipsis;font-size:12px}._27jOSSmH0lyHQ_-f59FNMf{text-decoration:line-through}._1UqeoRZ2cNSOYwjkdiD9Z-{color:red;border:1px solid red;border-radius:5px;padding:5px;font-size:13px;margin-bottom:10px}",""]),t.locals={block:"_1rD23jkwB4OJoduo5ODI0C",list:"iROZ0k4sSNXSMsDdgqjQw",item:"_2YYvHDUSRNGCkUj-mVwZhA",completed:"_27jOSSmH0lyHQ_-f59FNMf",warning:"_1UqeoRZ2cNSOYwjkdiD9Z-"}},function(e,t){e.exports=function(){var e=[];return e.toString=function(){for(var e=[],t=0;t<this.length;t++){var n=this[t];n[2]?e.push("@media "+n[2]+"{"+n[1]+"}"):e.push(n[1])}return e.join("")},e.i=function(t,n){"string"==typeof t&&(t=[[null,t,""]]);for(var r={},i=0;i<this.length;i++){var o=this[i][0];"number"==typeof o&&(r[o]=!0)}for(i=0;i<t.length;i++){var a=t[i];"number"==typeof a[0]&&r[a[0]]||(n&&!a[2]?a[2]=n:n&&(a[2]="("+a[2]+") and ("+n+")"),e.push(a))}},e}},function(e,t,n){function r(e,t){for(var n=0;n<e.length;n++){var r=e[n],i=p[r.id];if(i){i.refs++;for(var o=0;o<i.parts.length;o++)i.parts[o](r.parts[o]);for(;o<r.parts.length;o++)i.parts.push(c(r.parts[o],t))}else{for(var a=[],o=0;o<r.parts.length;o++)a.push(c(r.parts[o],t));p[r.id]={id:r.id,refs:1,parts:a}}}}function i(e){for(var t=[],n={},r=0;r<e.length;r++){var i=e[r],o=i[0],a=i[1],u=i[2],s=i[3],c={css:a,media:u,sourceMap:s};n[o]?n[o].parts.push(c):t.push(n[o]={id:o,parts:[c]})}return t}function o(e,t){var n=h(),r=b[b.length-1];if("top"===e.insertAt)r?r.nextSibling?n.insertBefore(t,r.nextSibling):n.appendChild(t):n.insertBefore(t,n.firstChild),b.push(t);else{if("bottom"!==e.insertAt)throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");n.appendChild(t)}}function a(e){e.parentNode.removeChild(e);var t=b.indexOf(e);t>=0&&b.splice(t,1)}function u(e){var t=document.createElement("style");return t.type="text/css",o(e,t),t}function s(e){var t=document.createElement("link");return t.rel="stylesheet",o(e,t),t}function c(e,t){var n,r,i;if(t.singleton){var o=y++;n=g||(g=u(t)),r=d.bind(null,n,o,!1),i=d.bind(null,n,o,!0)}else e.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(n=s(t),r=l.bind(null,n),i=function(){a(n),n.href&&URL.revokeObjectURL(n.href)}):(n=u(t),r=f.bind(null,n),i=function(){a(n)});return r(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;r(e=t)}else i()}}function d(e,t,n,r){var i=n?"":r.css;if(e.styleSheet)e.styleSheet.cssText=x(t,i);else{var o=document.createTextNode(i),a=e.childNodes;a[t]&&e.removeChild(a[t]),a.length?e.insertBefore(o,a[t]):e.appendChild(o)}}function f(e,t){var n=t.css,r=t.media;if(r&&e.setAttribute("media",r),e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}function l(e,t){var n=t.css,r=t.sourceMap;r&&(n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(r))))+" */");var i=new Blob([n],{type:"text/css"}),o=e.href;e.href=URL.createObjectURL(i),o&&URL.revokeObjectURL(o)}var p={},m=function(e){var t;return function(){return"undefined"==typeof t&&(t=e.apply(this,arguments)),t}},v=m(function(){return/msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase())}),h=m(function(){return document.head||document.getElementsByTagName("head")[0]}),g=null,y=0,b=[];e.exports=function(e,t){t=t||{},"undefined"==typeof t.singleton&&(t.singleton=v()),"undefined"==typeof t.insertAt&&(t.insertAt="bottom");var n=i(e);return r(n,t),function(e){for(var o=[],a=0;a<n.length;a++){var u=n[a],s=p[u.id];s.refs--,o.push(s)}if(e){var c=i(e);r(c,t)}for(var a=0;a<o.length;a++){var s=o[a];if(0===s.refs){for(var d=0;d<s.parts.length;d++)s.parts[d]();delete p[s.id]}}}};var x=function(){var e=[];return function(t,n){return e[t]=n,e.filter(Boolean).join("\n")}}()},function(e,t){},function(e,t){},function(e,t,n){e.exports=n.p+"./chunks/mashup.ignore"}])})}();