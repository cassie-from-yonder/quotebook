// Compiled by ClojureScript 1.10.773 {}
goog.provide('quotebook.core');
goog.require('cljs.core');
cljs.core.enable_console_print_BANG_.call(null);
cljs.core.println.call(null,"This text is printed from src/quotebook/core.cljs. Go ahead and edit it and see reloading in action.");
if((typeof quotebook !== 'undefined') && (typeof quotebook.core !== 'undefined') && (typeof quotebook.core.app_state !== 'undefined')){
} else {
quotebook.core.app_state = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text","text",-1790561697),"Hello world!"], null));
}
quotebook.core.on_js_reload = (function quotebook$core$on_js_reload(){
return null;
});
quotebook.core.themes_mapping = new cljs.core.PersistentArrayMap(null, 2, ["Botanic Leaves",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"file","file",-1269645878),"css/themes/botanic-leaves.css"], null),"Smithsonian Backswatter",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"file","file",-1269645878),"css/themes/smithsonian-backswatter.css"], null)], null);
quotebook.core.switchTheme = (function quotebook$core$switchTheme(url){
if(cljs.core.truth_((function (){var and__4115__auto__ = document;
if(cljs.core.truth_(and__4115__auto__)){
return document.getElementById;
} else {
return and__4115__auto__;
}
})())){
var theme_style_36104 = document.getElementById("theme-style");
(theme_style_36104.href = url);
} else {
cljs.core.println.call(null,"Error switching theme");
}

return false;
});
quotebook.core.bindSwitchTheme = (function quotebook$core$bindSwitchTheme(){
if(cljs.core.truth_((function (){var and__4115__auto__ = document;
if(cljs.core.truth_(and__4115__auto__)){
return document.getElementById;
} else {
return and__4115__auto__;
}
})())){
var select = document.getElementById("theme-select");
cljs.core.println.call(null,select.value);

return (select.onchange = (function (){
return quotebook.core.switchTheme.call(null,new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(cljs.core.get.call(null,quotebook.core.themes_mapping,select.value)));
}));
} else {
return cljs.core.println.call(null,"error");
}
});
quotebook.core.init = (function quotebook$core$init(){
return quotebook.core.bindSwitchTheme.call(null);
});
quotebook.core.init.call(null);

//# sourceMappingURL=core.js.map?rel=1628174143722
