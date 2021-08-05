// Compiled by ClojureScript 1.10.773 {}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.Uri');
goog.require('goog.userAgent.product');
goog.require('goog.object');
goog.require('cljs.reader');
goog.require('cljs.core.async');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.utils');
goog.require('figwheel.client.heads_up');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('cljs.repl');
figwheel.client._figwheel_version_ = "0.5.20";
figwheel.client.js_stringify = (((((typeof JSON !== 'undefined')) && ((!((JSON.stringify == null))))))?(function (x){
return ["#js ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(JSON.stringify(x,null," "))].join('');
}):(function (x){
try{return cljs.core.str.cljs$core$IFn$_invoke$arity$1(x);
}catch (e30025){if((e30025 instanceof Error)){
var e = e30025;
return "Error: Unable to stringify";
} else {
throw e30025;

}
}}));
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(var_args){
var G__30028 = arguments.length;
switch (G__30028) {
case 2:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2 = (function (stream,args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stream","stream",1534941648),stream,new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.mapv.call(null,(function (p1__30026_SHARP_){
if(typeof p1__30026_SHARP_ === 'string'){
return p1__30026_SHARP_;
} else {
return figwheel.client.js_stringify.call(null,p1__30026_SHARP_);
}
}),args)], null)], null));

return null;
}));

(figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1 = (function (args){
return figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);
}));

(figwheel.client.figwheel_repl_print.cljs$lang$maxFixedArity = 2);

figwheel.client.console_out_print = (function figwheel$client$console_out_print(args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.console_err_print = (function figwheel$client$console_err_print(args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.repl_out_print_fn = (function figwheel$client$repl_out_print_fn(var_args){
var args__4742__auto__ = [];
var len__4736__auto___30031 = arguments.length;
var i__4737__auto___30032 = (0);
while(true){
if((i__4737__auto___30032 < len__4736__auto___30031)){
args__4742__auto__.push((arguments[i__4737__auto___30032]));

var G__30033 = (i__4737__auto___30032 + (1));
i__4737__auto___30032 = G__30033;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_out_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);

return null;
}));

(figwheel.client.repl_out_print_fn.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq30030){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30030));
}));

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__4742__auto__ = [];
var len__4736__auto___30035 = arguments.length;
var i__4737__auto___30036 = (0);
while(true){
if((i__4737__auto___30036 < len__4736__auto___30035)){
args__4742__auto__.push((arguments[i__4737__auto___30036]));

var G__30037 = (i__4737__auto___30036 + (1));
i__4737__auto___30036 = G__30037;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_err_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"err","err",-2089457205),args);

return null;
}));

(figwheel.client.repl_err_print_fn.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq30034){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30034));
}));

figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
(cljs.core._STAR_print_newline_STAR_ = false);

cljs.core.set_print_fn_BANG_.call(null,figwheel.client.repl_out_print_fn);

cljs.core.set_print_err_fn_BANG_.call(null,figwheel.client.repl_err_print_fn);

return null;
});
figwheel.client.autoload_QMARK_ = (function figwheel$client$autoload_QMARK_(){
return figwheel.client.utils.persistent_config_get.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),true);
});
figwheel.client.toggle_autoload = (function figwheel$client$toggle_autoload(){
var res = figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),cljs.core.not.call(null,figwheel.client.autoload_QMARK_.call(null)));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),"Toggle autoload deprecated! Use (figwheel.client/set-autoload! false)");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),["Figwheel autoloading ",(cljs.core.truth_(figwheel.client.autoload_QMARK_.call(null))?"ON":"OFF")].join(''));

return res;
});
goog.exportSymbol('figwheel.client.toggle_autoload', figwheel.client.toggle_autoload);
/**
 * Figwheel by default loads code changes as you work. Sometimes you
 *   just want to work on your code without the ramifications of
 *   autoloading and simply load your code piecemeal in the REPL. You can
 *   turn autoloading on and of with this method.
 * 
 *   (figwheel.client/set-autoload false)
 * 
 *   NOTE: This is a persistent setting, meaning that it will persist
 *   through browser reloads.
 */
figwheel.client.set_autoload = (function figwheel$client$set_autoload(b){
if(((b === true) || (b === false))){
} else {
throw (new Error("Assert failed: (or (true? b) (false? b))"));
}

return figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),b);
});
goog.exportSymbol('figwheel.client.set_autoload', figwheel.client.set_autoload);
figwheel.client.repl_pprint = (function figwheel$client$repl_pprint(){
return figwheel.client.utils.persistent_config_get.call(null,new cljs.core.Keyword(null,"figwheel-repl-pprint","figwheel-repl-pprint",1076150873),true);
});
goog.exportSymbol('figwheel.client.repl_pprint', figwheel.client.repl_pprint);
/**
 * This method gives you the ability to turn the pretty printing of
 *   the REPL's return value on and off.
 * 
 *   (figwheel.client/set-repl-pprint false)
 * 
 *   NOTE: This is a persistent setting, meaning that it will persist
 *   through browser reloads.
 */
figwheel.client.set_repl_pprint = (function figwheel$client$set_repl_pprint(b){
if(((b === true) || (b === false))){
} else {
throw (new Error("Assert failed: (or (true? b) (false? b))"));
}

return figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-repl-pprint","figwheel-repl-pprint",1076150873),b);
});
goog.exportSymbol('figwheel.client.set_repl_pprint', figwheel.client.set_repl_pprint);
figwheel.client.repl_result_pr_str = (function figwheel$client$repl_result_pr_str(v){
if(cljs.core.truth_(figwheel.client.repl_pprint.call(null))){
return figwheel.client.utils.pprint_to_string.call(null,v);
} else {
return cljs.core.pr_str.call(null,v);
}
});
goog.exportSymbol('figwheel.client.repl_result_pr_str', figwheel.client.repl_result_pr_str);
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel.client.get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__30038){
var map__30039 = p__30038;
var map__30039__$1 = (((((!((map__30039 == null))))?(((((map__30039.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30039.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30039):map__30039);
var message = cljs.core.get.call(null,map__30039__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__30039__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)," : ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__4126__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
if(cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return false;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function figwheel$client$block_reload_file_state_QMARK_(msg_names,opts){
return ((cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts))));
});
figwheel.client.warning_append_state_QMARK_ = (function figwheel$client$warning_append_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.warning_state_QMARK_ = (function figwheel$client$warning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),cljs.core.first.call(null,msg_names));
});
figwheel.client.rewarning_state_QMARK_ = (function figwheel$client$rewarning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(3),msg_names));
});
figwheel.client.compile_fail_state_QMARK_ = (function figwheel$client$compile_fail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),cljs.core.first.call(null,msg_names));
});
figwheel.client.compile_refail_state_QMARK_ = (function figwheel$client$compile_refail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.css_loaded_state_QMARK_ = (function figwheel$client$css_loaded_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),cljs.core.first.call(null,msg_names));
});
figwheel.client.file_reloader_plugin = (function figwheel$client$file_reloader_plugin(opts){
var ch = cljs.core.async.chan.call(null);
var c__25937__auto___30118 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__25938__auto__ = (function (){var switch__25842__auto__ = (function (state_30090){
var state_val_30091 = (state_30090[(1)]);
if((state_val_30091 === (7))){
var inst_30086 = (state_30090[(2)]);
var state_30090__$1 = state_30090;
var statearr_30092_30119 = state_30090__$1;
(statearr_30092_30119[(2)] = inst_30086);

(statearr_30092_30119[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30091 === (1))){
var state_30090__$1 = state_30090;
var statearr_30093_30120 = state_30090__$1;
(statearr_30093_30120[(2)] = null);

(statearr_30093_30120[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30091 === (4))){
var inst_30043 = (state_30090[(7)]);
var inst_30043__$1 = (state_30090[(2)]);
var state_30090__$1 = (function (){var statearr_30094 = state_30090;
(statearr_30094[(7)] = inst_30043__$1);

return statearr_30094;
})();
if(cljs.core.truth_(inst_30043__$1)){
var statearr_30095_30121 = state_30090__$1;
(statearr_30095_30121[(1)] = (5));

} else {
var statearr_30096_30122 = state_30090__$1;
(statearr_30096_30122[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30091 === (15))){
var inst_30050 = (state_30090[(8)]);
var inst_30065 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_30050);
var inst_30066 = cljs.core.first.call(null,inst_30065);
var inst_30067 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_30066);
var inst_30068 = ["Figwheel: Not loading code with warnings - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_30067)].join('');
var inst_30069 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_30068);
var state_30090__$1 = state_30090;
var statearr_30097_30123 = state_30090__$1;
(statearr_30097_30123[(2)] = inst_30069);

(statearr_30097_30123[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30091 === (13))){
var inst_30074 = (state_30090[(2)]);
var state_30090__$1 = state_30090;
var statearr_30098_30124 = state_30090__$1;
(statearr_30098_30124[(2)] = inst_30074);

(statearr_30098_30124[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30091 === (6))){
var state_30090__$1 = state_30090;
var statearr_30099_30125 = state_30090__$1;
(statearr_30099_30125[(2)] = null);

(statearr_30099_30125[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30091 === (17))){
var inst_30072 = (state_30090[(2)]);
var state_30090__$1 = state_30090;
var statearr_30100_30126 = state_30090__$1;
(statearr_30100_30126[(2)] = inst_30072);

(statearr_30100_30126[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30091 === (3))){
var inst_30088 = (state_30090[(2)]);
var state_30090__$1 = state_30090;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30090__$1,inst_30088);
} else {
if((state_val_30091 === (12))){
var inst_30049 = (state_30090[(9)]);
var inst_30063 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_30049,opts);
var state_30090__$1 = state_30090;
if(inst_30063){
var statearr_30101_30127 = state_30090__$1;
(statearr_30101_30127[(1)] = (15));

} else {
var statearr_30102_30128 = state_30090__$1;
(statearr_30102_30128[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30091 === (2))){
var state_30090__$1 = state_30090;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30090__$1,(4),ch);
} else {
if((state_val_30091 === (11))){
var inst_30050 = (state_30090[(8)]);
var inst_30055 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_30056 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_30050);
var inst_30057 = cljs.core.async.timeout.call(null,(1000));
var inst_30058 = [inst_30056,inst_30057];
var inst_30059 = (new cljs.core.PersistentVector(null,2,(5),inst_30055,inst_30058,null));
var state_30090__$1 = state_30090;
return cljs.core.async.ioc_alts_BANG_.call(null,state_30090__$1,(14),inst_30059);
} else {
if((state_val_30091 === (9))){
var inst_30050 = (state_30090[(8)]);
var inst_30076 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_30077 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_30050);
var inst_30078 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_30077);
var inst_30079 = ["Not loading: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_30078)].join('');
var inst_30080 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_30079);
var state_30090__$1 = (function (){var statearr_30103 = state_30090;
(statearr_30103[(10)] = inst_30076);

return statearr_30103;
})();
var statearr_30104_30129 = state_30090__$1;
(statearr_30104_30129[(2)] = inst_30080);

(statearr_30104_30129[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30091 === (5))){
var inst_30043 = (state_30090[(7)]);
var inst_30045 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_30046 = (new cljs.core.PersistentArrayMap(null,2,inst_30045,null));
var inst_30047 = (new cljs.core.PersistentHashSet(null,inst_30046,null));
var inst_30048 = figwheel.client.focus_msgs.call(null,inst_30047,inst_30043);
var inst_30049 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_30048);
var inst_30050 = cljs.core.first.call(null,inst_30048);
var inst_30051 = figwheel.client.autoload_QMARK_.call(null);
var state_30090__$1 = (function (){var statearr_30105 = state_30090;
(statearr_30105[(8)] = inst_30050);

(statearr_30105[(9)] = inst_30049);

return statearr_30105;
})();
if(cljs.core.truth_(inst_30051)){
var statearr_30106_30130 = state_30090__$1;
(statearr_30106_30130[(1)] = (8));

} else {
var statearr_30107_30131 = state_30090__$1;
(statearr_30107_30131[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30091 === (14))){
var inst_30061 = (state_30090[(2)]);
var state_30090__$1 = state_30090;
var statearr_30108_30132 = state_30090__$1;
(statearr_30108_30132[(2)] = inst_30061);

(statearr_30108_30132[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30091 === (16))){
var state_30090__$1 = state_30090;
var statearr_30109_30133 = state_30090__$1;
(statearr_30109_30133[(2)] = null);

(statearr_30109_30133[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30091 === (10))){
var inst_30082 = (state_30090[(2)]);
var state_30090__$1 = (function (){var statearr_30110 = state_30090;
(statearr_30110[(11)] = inst_30082);

return statearr_30110;
})();
var statearr_30111_30134 = state_30090__$1;
(statearr_30111_30134[(2)] = null);

(statearr_30111_30134[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30091 === (8))){
var inst_30049 = (state_30090[(9)]);
var inst_30053 = figwheel.client.reload_file_state_QMARK_.call(null,inst_30049,opts);
var state_30090__$1 = state_30090;
if(cljs.core.truth_(inst_30053)){
var statearr_30112_30135 = state_30090__$1;
(statearr_30112_30135[(1)] = (11));

} else {
var statearr_30113_30136 = state_30090__$1;
(statearr_30113_30136[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__25843__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__25843__auto____0 = (function (){
var statearr_30114 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30114[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__25843__auto__);

(statearr_30114[(1)] = (1));

return statearr_30114;
});
var figwheel$client$file_reloader_plugin_$_state_machine__25843__auto____1 = (function (state_30090){
while(true){
var ret_value__25844__auto__ = (function (){try{while(true){
var result__25845__auto__ = switch__25842__auto__.call(null,state_30090);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25845__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25845__auto__;
}
break;
}
}catch (e30115){if((e30115 instanceof Object)){
var ex__25846__auto__ = e30115;
var statearr_30116_30137 = state_30090;
(statearr_30116_30137[(5)] = ex__25846__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30090);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30115;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25844__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30138 = state_30090;
state_30090 = G__30138;
continue;
} else {
return ret_value__25844__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__25843__auto__ = function(state_30090){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__25843__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__25843__auto____1.call(this,state_30090);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__25843__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__25843__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__25843__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__25843__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__25843__auto__;
})()
})();
var state__25939__auto__ = (function (){var statearr_30117 = f__25938__auto__.call(null);
(statearr_30117[(6)] = c__25937__auto___30118);

return statearr_30117;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25939__auto__);
}));


return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__30139_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__30139_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
figwheel.client.get_ua_product = (function figwheel$client$get_ua_product(){
if(figwheel.client.utils.node_env_QMARK_.call(null)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(goog.userAgent.product.SAFARI){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(goog.userAgent.product.CHROME){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(goog.userAgent.product.FIREFOX){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(goog.userAgent.product.IE){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
}
});
var base_path_30145 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{var sb = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__30141 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__30142 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__30143 = true;
var _STAR_print_fn_STAR__temp_val__30144 = (function (x){
return sb.append(x);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__30143);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__30144);

try{var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
var result_value__$1 = (((!(typeof result_value === 'string')))?cljs.core.pr_str.call(null,result_value):result_value);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"out","out",-910545517),cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value__$1], null));
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__30142);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__30141);
}}catch (e30140){if((e30140 instanceof Error)){
var e = e30140;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_30145], null));
} else {
var e = e30140;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});
/**
 * The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
 */
figwheel.client.ensure_cljs_user = (function figwheel$client$ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return (cljs.user = ({}));
}
});
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__30146){
var map__30147 = p__30146;
var map__30147__$1 = (((((!((map__30147 == null))))?(((((map__30147.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30147.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30147):map__30147);
var opts = map__30147__$1;
var build_id = cljs.core.get.call(null,map__30147__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return (function (p__30149){
var vec__30150 = p__30149;
var seq__30151 = cljs.core.seq.call(null,vec__30150);
var first__30152 = cljs.core.first.call(null,seq__30151);
var seq__30151__$1 = cljs.core.next.call(null,seq__30151);
var map__30153 = first__30152;
var map__30153__$1 = (((((!((map__30153 == null))))?(((((map__30153.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30153.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30153):map__30153);
var msg = map__30153__$1;
var msg_name = cljs.core.get.call(null,map__30153__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__30151__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,(function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
}));
} else {
return null;
}
});
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__30155){
var vec__30156 = p__30155;
var seq__30157 = cljs.core.seq.call(null,vec__30156);
var first__30158 = cljs.core.first.call(null,seq__30157);
var seq__30157__$1 = cljs.core.next.call(null,seq__30157);
var map__30159 = first__30158;
var map__30159__$1 = (((((!((map__30159 == null))))?(((((map__30159.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30159.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30159):map__30159);
var msg = map__30159__$1;
var msg_name = cljs.core.get.call(null,map__30159__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__30157__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__30161){
var map__30162 = p__30161;
var map__30162__$1 = (((((!((map__30162 == null))))?(((((map__30162.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30162.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30162):map__30162);
var on_compile_warning = cljs.core.get.call(null,map__30162__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__30162__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return (function (p__30164){
var vec__30165 = p__30164;
var seq__30166 = cljs.core.seq.call(null,vec__30165);
var first__30167 = cljs.core.first.call(null,seq__30166);
var seq__30166__$1 = cljs.core.next.call(null,seq__30166);
var map__30168 = first__30167;
var map__30168__$1 = (((((!((map__30168 == null))))?(((((map__30168.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30168.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30168):map__30168);
var msg = map__30168__$1;
var msg_name = cljs.core.get.call(null,map__30168__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__30166__$1;
var pred__30170 = cljs.core._EQ_;
var expr__30171 = msg_name;
if(cljs.core.truth_(pred__30170.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__30171))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__30170.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__30171))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
});
figwheel.client.auto_jump_to_error = (function figwheel$client$auto_jump_to_error(opts,error){
if(cljs.core.truth_(new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920).cljs$core$IFn$_invoke$arity$1(opts))){
return figwheel.client.heads_up.auto_notify_source_file_line.call(null,error);
} else {
return null;
}
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__25937__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__25938__auto__ = (function (){var switch__25842__auto__ = (function (state_30260){
var state_val_30261 = (state_30260[(1)]);
if((state_val_30261 === (7))){
var inst_30180 = (state_30260[(2)]);
var state_30260__$1 = state_30260;
if(cljs.core.truth_(inst_30180)){
var statearr_30262_30309 = state_30260__$1;
(statearr_30262_30309[(1)] = (8));

} else {
var statearr_30263_30310 = state_30260__$1;
(statearr_30263_30310[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30261 === (20))){
var inst_30254 = (state_30260[(2)]);
var state_30260__$1 = state_30260;
var statearr_30264_30311 = state_30260__$1;
(statearr_30264_30311[(2)] = inst_30254);

(statearr_30264_30311[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30261 === (27))){
var inst_30250 = (state_30260[(2)]);
var state_30260__$1 = state_30260;
var statearr_30265_30312 = state_30260__$1;
(statearr_30265_30312[(2)] = inst_30250);

(statearr_30265_30312[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30261 === (1))){
var inst_30173 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_30260__$1 = state_30260;
if(cljs.core.truth_(inst_30173)){
var statearr_30266_30313 = state_30260__$1;
(statearr_30266_30313[(1)] = (2));

} else {
var statearr_30267_30314 = state_30260__$1;
(statearr_30267_30314[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30261 === (24))){
var inst_30252 = (state_30260[(2)]);
var state_30260__$1 = state_30260;
var statearr_30268_30315 = state_30260__$1;
(statearr_30268_30315[(2)] = inst_30252);

(statearr_30268_30315[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30261 === (4))){
var inst_30258 = (state_30260[(2)]);
var state_30260__$1 = state_30260;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30260__$1,inst_30258);
} else {
if((state_val_30261 === (15))){
var inst_30256 = (state_30260[(2)]);
var state_30260__$1 = state_30260;
var statearr_30269_30316 = state_30260__$1;
(statearr_30269_30316[(2)] = inst_30256);

(statearr_30269_30316[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30261 === (21))){
var inst_30209 = (state_30260[(2)]);
var inst_30210 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_30211 = figwheel.client.auto_jump_to_error.call(null,opts,inst_30210);
var state_30260__$1 = (function (){var statearr_30270 = state_30260;
(statearr_30270[(7)] = inst_30209);

return statearr_30270;
})();
var statearr_30271_30317 = state_30260__$1;
(statearr_30271_30317[(2)] = inst_30211);

(statearr_30271_30317[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30261 === (31))){
var inst_30239 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_30260__$1 = state_30260;
if(inst_30239){
var statearr_30272_30318 = state_30260__$1;
(statearr_30272_30318[(1)] = (34));

} else {
var statearr_30273_30319 = state_30260__$1;
(statearr_30273_30319[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30261 === (32))){
var inst_30248 = (state_30260[(2)]);
var state_30260__$1 = state_30260;
var statearr_30274_30320 = state_30260__$1;
(statearr_30274_30320[(2)] = inst_30248);

(statearr_30274_30320[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30261 === (33))){
var inst_30235 = (state_30260[(2)]);
var inst_30236 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_30237 = figwheel.client.auto_jump_to_error.call(null,opts,inst_30236);
var state_30260__$1 = (function (){var statearr_30275 = state_30260;
(statearr_30275[(8)] = inst_30235);

return statearr_30275;
})();
var statearr_30276_30321 = state_30260__$1;
(statearr_30276_30321[(2)] = inst_30237);

(statearr_30276_30321[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30261 === (13))){
var inst_30194 = figwheel.client.heads_up.clear.call(null);
var state_30260__$1 = state_30260;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30260__$1,(16),inst_30194);
} else {
if((state_val_30261 === (22))){
var inst_30215 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_30216 = figwheel.client.heads_up.append_warning_message.call(null,inst_30215);
var state_30260__$1 = state_30260;
var statearr_30277_30322 = state_30260__$1;
(statearr_30277_30322[(2)] = inst_30216);

(statearr_30277_30322[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30261 === (36))){
var inst_30246 = (state_30260[(2)]);
var state_30260__$1 = state_30260;
var statearr_30278_30323 = state_30260__$1;
(statearr_30278_30323[(2)] = inst_30246);

(statearr_30278_30323[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30261 === (29))){
var inst_30226 = (state_30260[(2)]);
var inst_30227 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_30228 = figwheel.client.auto_jump_to_error.call(null,opts,inst_30227);
var state_30260__$1 = (function (){var statearr_30279 = state_30260;
(statearr_30279[(9)] = inst_30226);

return statearr_30279;
})();
var statearr_30280_30324 = state_30260__$1;
(statearr_30280_30324[(2)] = inst_30228);

(statearr_30280_30324[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30261 === (6))){
var inst_30175 = (state_30260[(10)]);
var state_30260__$1 = state_30260;
var statearr_30281_30325 = state_30260__$1;
(statearr_30281_30325[(2)] = inst_30175);

(statearr_30281_30325[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30261 === (28))){
var inst_30222 = (state_30260[(2)]);
var inst_30223 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_30224 = figwheel.client.heads_up.display_warning.call(null,inst_30223);
var state_30260__$1 = (function (){var statearr_30282 = state_30260;
(statearr_30282[(11)] = inst_30222);

return statearr_30282;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30260__$1,(29),inst_30224);
} else {
if((state_val_30261 === (25))){
var inst_30220 = figwheel.client.heads_up.clear.call(null);
var state_30260__$1 = state_30260;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30260__$1,(28),inst_30220);
} else {
if((state_val_30261 === (34))){
var inst_30241 = figwheel.client.heads_up.flash_loaded.call(null);
var state_30260__$1 = state_30260;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30260__$1,(37),inst_30241);
} else {
if((state_val_30261 === (17))){
var inst_30200 = (state_30260[(2)]);
var inst_30201 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_30202 = figwheel.client.auto_jump_to_error.call(null,opts,inst_30201);
var state_30260__$1 = (function (){var statearr_30283 = state_30260;
(statearr_30283[(12)] = inst_30200);

return statearr_30283;
})();
var statearr_30284_30326 = state_30260__$1;
(statearr_30284_30326[(2)] = inst_30202);

(statearr_30284_30326[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30261 === (3))){
var inst_30192 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_30260__$1 = state_30260;
if(inst_30192){
var statearr_30285_30327 = state_30260__$1;
(statearr_30285_30327[(1)] = (13));

} else {
var statearr_30286_30328 = state_30260__$1;
(statearr_30286_30328[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30261 === (12))){
var inst_30188 = (state_30260[(2)]);
var state_30260__$1 = state_30260;
var statearr_30287_30329 = state_30260__$1;
(statearr_30287_30329[(2)] = inst_30188);

(statearr_30287_30329[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30261 === (2))){
var inst_30175 = (state_30260[(10)]);
var inst_30175__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_30260__$1 = (function (){var statearr_30288 = state_30260;
(statearr_30288[(10)] = inst_30175__$1);

return statearr_30288;
})();
if(cljs.core.truth_(inst_30175__$1)){
var statearr_30289_30330 = state_30260__$1;
(statearr_30289_30330[(1)] = (5));

} else {
var statearr_30290_30331 = state_30260__$1;
(statearr_30290_30331[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30261 === (23))){
var inst_30218 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_30260__$1 = state_30260;
if(inst_30218){
var statearr_30291_30332 = state_30260__$1;
(statearr_30291_30332[(1)] = (25));

} else {
var statearr_30292_30333 = state_30260__$1;
(statearr_30292_30333[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30261 === (35))){
var state_30260__$1 = state_30260;
var statearr_30293_30334 = state_30260__$1;
(statearr_30293_30334[(2)] = null);

(statearr_30293_30334[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30261 === (19))){
var inst_30213 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_30260__$1 = state_30260;
if(inst_30213){
var statearr_30294_30335 = state_30260__$1;
(statearr_30294_30335[(1)] = (22));

} else {
var statearr_30295_30336 = state_30260__$1;
(statearr_30295_30336[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30261 === (11))){
var inst_30184 = (state_30260[(2)]);
var state_30260__$1 = state_30260;
var statearr_30296_30337 = state_30260__$1;
(statearr_30296_30337[(2)] = inst_30184);

(statearr_30296_30337[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30261 === (9))){
var inst_30186 = figwheel.client.heads_up.clear.call(null);
var state_30260__$1 = state_30260;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30260__$1,(12),inst_30186);
} else {
if((state_val_30261 === (5))){
var inst_30177 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_30260__$1 = state_30260;
var statearr_30297_30338 = state_30260__$1;
(statearr_30297_30338[(2)] = inst_30177);

(statearr_30297_30338[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30261 === (14))){
var inst_30204 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_30260__$1 = state_30260;
if(inst_30204){
var statearr_30298_30339 = state_30260__$1;
(statearr_30298_30339[(1)] = (18));

} else {
var statearr_30299_30340 = state_30260__$1;
(statearr_30299_30340[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30261 === (26))){
var inst_30230 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_30260__$1 = state_30260;
if(inst_30230){
var statearr_30300_30341 = state_30260__$1;
(statearr_30300_30341[(1)] = (30));

} else {
var statearr_30301_30342 = state_30260__$1;
(statearr_30301_30342[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30261 === (16))){
var inst_30196 = (state_30260[(2)]);
var inst_30197 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_30198 = figwheel.client.heads_up.display_exception.call(null,inst_30197);
var state_30260__$1 = (function (){var statearr_30302 = state_30260;
(statearr_30302[(13)] = inst_30196);

return statearr_30302;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30260__$1,(17),inst_30198);
} else {
if((state_val_30261 === (30))){
var inst_30232 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_30233 = figwheel.client.heads_up.display_warning.call(null,inst_30232);
var state_30260__$1 = state_30260;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30260__$1,(33),inst_30233);
} else {
if((state_val_30261 === (10))){
var inst_30190 = (state_30260[(2)]);
var state_30260__$1 = state_30260;
var statearr_30303_30343 = state_30260__$1;
(statearr_30303_30343[(2)] = inst_30190);

(statearr_30303_30343[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30261 === (18))){
var inst_30206 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_30207 = figwheel.client.heads_up.display_exception.call(null,inst_30206);
var state_30260__$1 = state_30260;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30260__$1,(21),inst_30207);
} else {
if((state_val_30261 === (37))){
var inst_30243 = (state_30260[(2)]);
var state_30260__$1 = state_30260;
var statearr_30304_30344 = state_30260__$1;
(statearr_30304_30344[(2)] = inst_30243);

(statearr_30304_30344[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30261 === (8))){
var inst_30182 = figwheel.client.heads_up.flash_loaded.call(null);
var state_30260__$1 = state_30260;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30260__$1,(11),inst_30182);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__25843__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__25843__auto____0 = (function (){
var statearr_30305 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30305[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__25843__auto__);

(statearr_30305[(1)] = (1));

return statearr_30305;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__25843__auto____1 = (function (state_30260){
while(true){
var ret_value__25844__auto__ = (function (){try{while(true){
var result__25845__auto__ = switch__25842__auto__.call(null,state_30260);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25845__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25845__auto__;
}
break;
}
}catch (e30306){if((e30306 instanceof Object)){
var ex__25846__auto__ = e30306;
var statearr_30307_30345 = state_30260;
(statearr_30307_30345[(5)] = ex__25846__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30260);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30306;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25844__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30346 = state_30260;
state_30260 = G__30346;
continue;
} else {
return ret_value__25844__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__25843__auto__ = function(state_30260){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__25843__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__25843__auto____1.call(this,state_30260);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__25843__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__25843__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__25843__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__25843__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__25843__auto__;
})()
})();
var state__25939__auto__ = (function (){var statearr_30308 = f__25938__auto__.call(null);
(statearr_30308[(6)] = c__25937__auto__);

return statearr_30308;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25939__auto__);
}));

return c__25937__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__25937__auto___30375 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__25938__auto__ = (function (){var switch__25842__auto__ = (function (state_30361){
var state_val_30362 = (state_30361[(1)]);
if((state_val_30362 === (1))){
var state_30361__$1 = state_30361;
var statearr_30363_30376 = state_30361__$1;
(statearr_30363_30376[(2)] = null);

(statearr_30363_30376[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30362 === (2))){
var state_30361__$1 = state_30361;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30361__$1,(4),ch);
} else {
if((state_val_30362 === (3))){
var inst_30359 = (state_30361[(2)]);
var state_30361__$1 = state_30361;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30361__$1,inst_30359);
} else {
if((state_val_30362 === (4))){
var inst_30349 = (state_30361[(7)]);
var inst_30349__$1 = (state_30361[(2)]);
var state_30361__$1 = (function (){var statearr_30364 = state_30361;
(statearr_30364[(7)] = inst_30349__$1);

return statearr_30364;
})();
if(cljs.core.truth_(inst_30349__$1)){
var statearr_30365_30377 = state_30361__$1;
(statearr_30365_30377[(1)] = (5));

} else {
var statearr_30366_30378 = state_30361__$1;
(statearr_30366_30378[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30362 === (5))){
var inst_30349 = (state_30361[(7)]);
var inst_30351 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_30349);
var state_30361__$1 = state_30361;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30361__$1,(8),inst_30351);
} else {
if((state_val_30362 === (6))){
var state_30361__$1 = state_30361;
var statearr_30367_30379 = state_30361__$1;
(statearr_30367_30379[(2)] = null);

(statearr_30367_30379[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30362 === (7))){
var inst_30357 = (state_30361[(2)]);
var state_30361__$1 = state_30361;
var statearr_30368_30380 = state_30361__$1;
(statearr_30368_30380[(2)] = inst_30357);

(statearr_30368_30380[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30362 === (8))){
var inst_30353 = (state_30361[(2)]);
var state_30361__$1 = (function (){var statearr_30369 = state_30361;
(statearr_30369[(8)] = inst_30353);

return statearr_30369;
})();
var statearr_30370_30381 = state_30361__$1;
(statearr_30370_30381[(2)] = null);

(statearr_30370_30381[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
});
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__25843__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__25843__auto____0 = (function (){
var statearr_30371 = [null,null,null,null,null,null,null,null,null];
(statearr_30371[(0)] = figwheel$client$heads_up_plugin_$_state_machine__25843__auto__);

(statearr_30371[(1)] = (1));

return statearr_30371;
});
var figwheel$client$heads_up_plugin_$_state_machine__25843__auto____1 = (function (state_30361){
while(true){
var ret_value__25844__auto__ = (function (){try{while(true){
var result__25845__auto__ = switch__25842__auto__.call(null,state_30361);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25845__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25845__auto__;
}
break;
}
}catch (e30372){if((e30372 instanceof Object)){
var ex__25846__auto__ = e30372;
var statearr_30373_30382 = state_30361;
(statearr_30373_30382[(5)] = ex__25846__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30361);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30372;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25844__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30383 = state_30361;
state_30361 = G__30383;
continue;
} else {
return ret_value__25844__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__25843__auto__ = function(state_30361){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__25843__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__25843__auto____1.call(this,state_30361);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__25843__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__25843__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__25843__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__25843__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__25843__auto__;
})()
})();
var state__25939__auto__ = (function (){var statearr_30374 = f__25938__auto__.call(null);
(statearr_30374[(6)] = c__25937__auto___30375);

return statearr_30374;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25939__auto__);
}));


figwheel.client.heads_up.ensure_container.call(null);

return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
});
figwheel.client.enforce_project_plugin = (function figwheel$client$enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"project-id","project-id",206449307),cljs.core.take.call(null,(5),msg_hist)))))){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__25937__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__25938__auto__ = (function (){var switch__25842__auto__ = (function (state_30389){
var state_val_30390 = (state_30389[(1)]);
if((state_val_30390 === (1))){
var inst_30384 = cljs.core.async.timeout.call(null,(3000));
var state_30389__$1 = state_30389;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30389__$1,(2),inst_30384);
} else {
if((state_val_30390 === (2))){
var inst_30386 = (state_30389[(2)]);
var inst_30387 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_30389__$1 = (function (){var statearr_30391 = state_30389;
(statearr_30391[(7)] = inst_30386);

return statearr_30391;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30389__$1,inst_30387);
} else {
return null;
}
}
});
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__25843__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__25843__auto____0 = (function (){
var statearr_30392 = [null,null,null,null,null,null,null,null];
(statearr_30392[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__25843__auto__);

(statearr_30392[(1)] = (1));

return statearr_30392;
});
var figwheel$client$enforce_project_plugin_$_state_machine__25843__auto____1 = (function (state_30389){
while(true){
var ret_value__25844__auto__ = (function (){try{while(true){
var result__25845__auto__ = switch__25842__auto__.call(null,state_30389);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25845__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25845__auto__;
}
break;
}
}catch (e30393){if((e30393 instanceof Object)){
var ex__25846__auto__ = e30393;
var statearr_30394_30396 = state_30389;
(statearr_30394_30396[(5)] = ex__25846__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30389);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30393;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25844__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30397 = state_30389;
state_30389 = G__30397;
continue;
} else {
return ret_value__25844__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__25843__auto__ = function(state_30389){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__25843__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__25843__auto____1.call(this,state_30389);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__25843__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__25843__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__25843__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__25843__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__25843__auto__;
})()
})();
var state__25939__auto__ = (function (){var statearr_30395 = f__25938__auto__.call(null);
(statearr_30395[(6)] = c__25937__auto__);

return statearr_30395;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25939__auto__);
}));

return c__25937__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.enforce_figwheel_version_plugin = (function figwheel$client$enforce_figwheel_version_plugin(opts){
return (function (msg_hist){
var temp__5720__auto__ = new cljs.core.Keyword(null,"figwheel-version","figwheel-version",1409553832).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,msg_hist));
if(cljs.core.truth_(temp__5720__auto__)){
var figwheel_version = temp__5720__auto__;
if(cljs.core.not_EQ_.call(null,figwheel_version,figwheel.client._figwheel_version_)){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different version of Figwheel.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__25937__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__25938__auto__ = (function (){var switch__25842__auto__ = (function (state_30404){
var state_val_30405 = (state_30404[(1)]);
if((state_val_30405 === (1))){
var inst_30398 = cljs.core.async.timeout.call(null,(2000));
var state_30404__$1 = state_30404;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30404__$1,(2),inst_30398);
} else {
if((state_val_30405 === (2))){
var inst_30400 = (state_30404[(2)]);
var inst_30401 = ["Figwheel Client Version <strong>",figwheel.client._figwheel_version_,"</strong> is not equal to ","Figwheel Sidecar Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel_version),"</strong>",".  Shutting down Websocket Connection!","<h4>To fix try:</h4>","<ol><li>Reload this page and make sure you are not getting a cached version of the client.</li>","<li>You may have to clean (delete compiled assets) and rebuild to make sure that the new client code is being used.</li>","<li>Also, make sure you have consistent Figwheel dependencies.</li></ol>"].join('');
var inst_30402 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_30401);
var state_30404__$1 = (function (){var statearr_30406 = state_30404;
(statearr_30406[(7)] = inst_30400);

return statearr_30406;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30404__$1,inst_30402);
} else {
return null;
}
}
});
return (function() {
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__25843__auto__ = null;
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__25843__auto____0 = (function (){
var statearr_30407 = [null,null,null,null,null,null,null,null];
(statearr_30407[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__25843__auto__);

(statearr_30407[(1)] = (1));

return statearr_30407;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__25843__auto____1 = (function (state_30404){
while(true){
var ret_value__25844__auto__ = (function (){try{while(true){
var result__25845__auto__ = switch__25842__auto__.call(null,state_30404);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25845__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25845__auto__;
}
break;
}
}catch (e30408){if((e30408 instanceof Object)){
var ex__25846__auto__ = e30408;
var statearr_30409_30411 = state_30404;
(statearr_30409_30411[(5)] = ex__25846__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30404);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30408;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25844__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30412 = state_30404;
state_30404 = G__30412;
continue;
} else {
return ret_value__25844__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__25843__auto__ = function(state_30404){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__25843__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__25843__auto____1.call(this,state_30404);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__25843__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__25843__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__25843__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__25843__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__25843__auto__;
})()
})();
var state__25939__auto__ = (function (){var statearr_30410 = f__25938__auto__.call(null);
(statearr_30410[(6)] = c__25937__auto__);

return statearr_30410;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25939__auto__);
}));

return c__25937__auto__;
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__30413){
var map__30414 = p__30413;
var map__30414__$1 = (((((!((map__30414 == null))))?(((((map__30414.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30414.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30414):map__30414);
var file = cljs.core.get.call(null,map__30414__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__30414__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__30414__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__30416 = "";
var G__30416__$1 = (cljs.core.truth_(file)?[G__30416,"file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):G__30416);
var G__30416__$2 = (cljs.core.truth_(line)?[G__30416__$1," at line ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join(''):G__30416__$1);
if(cljs.core.truth_((function (){var and__4115__auto__ = line;
if(cljs.core.truth_(and__4115__auto__)){
return column;
} else {
return and__4115__auto__;
}
})())){
return [G__30416__$2,", column ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join('');
} else {
return G__30416__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__30417){
var map__30418 = p__30417;
var map__30418__$1 = (((((!((map__30418 == null))))?(((((map__30418.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30418.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30418):map__30418);
var ed = map__30418__$1;
var exception_data = cljs.core.get.call(null,map__30418__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__30418__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
var message_30421 = (function (){var G__30420 = cljs.core.apply.call(null,cljs.core.str,"Figwheel: Compile Exception ",figwheel.client.format_messages.call(null,exception_data));
if(cljs.core.truth_(new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(exception_data))){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__30420)," Error on ",figwheel.client.file_line_column.call(null,exception_data)].join('');
} else {
return G__30420;
}
})();
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),message_30421);

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__30422){
var map__30423 = p__30422;
var map__30423__$1 = (((((!((map__30423 == null))))?(((((map__30423.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30423.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30423):map__30423);
var w = map__30423__$1;
var message = cljs.core.get.call(null,map__30423__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),["Figwheel: Compile Warning - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(message))," in ",figwheel.client.file_line_column.call(null,message)].join(''));

return w;
});
figwheel.client.default_before_load = (function figwheel$client$default_before_load(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: notified of file changes");

return files;
});
figwheel.client.default_on_cssload = (function figwheel$client$default_on_cssload(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded CSS files");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.config_defaults !== 'undefined')){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[new cljs.core.Var(function(){return figwheel.client.default_on_compile_warning;},new cljs.core.Symbol("figwheel.client","default-on-compile-warning","figwheel.client/default-on-compile-warning",584144208,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-warning","default-on-compile-warning",-18911586,null),"resources/public/js/compiled/out/figwheel/client.cljs",33,1,362,362,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"message","message",1234475525,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"w","w",1994700528,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_warning)?figwheel.client.default_on_compile_warning.cljs$lang$test:null)])),figwheel.client.default_on_jsload,true,new cljs.core.Var(function(){return figwheel.client.default_on_compile_fail;},new cljs.core.Symbol("figwheel.client","default-on-compile-fail","figwheel.client/default-on-compile-fail",1384826337,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-fail","default-on-compile-fail",-158814813,null),"resources/public/js/compiled/out/figwheel/client.cljs",30,1,355,355,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"exception-data","exception-data",1128056641,null),new cljs.core.Symbol(null,"cause","cause",1872432779,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"ed","ed",2076825751,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_fail)?figwheel.client.default_on_compile_fail.cljs$lang$test:null)])),false,true,["ws://",cljs.core.str.cljs$core$IFn$_invoke$arity$1(((figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),"/figwheel-ws"].join(''),false,figwheel.client.default_before_load,false,false,(100),true,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function figwheel$client$handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.fill_url_template = (function figwheel$client$fill_url_template(config){
if(figwheel.client.utils.html_env_QMARK_.call(null)){
return cljs.core.update_in.call(null,config,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938)], null),(function (x){
return clojure.string.replace.call(null,clojure.string.replace.call(null,x,"[[client-hostname]]",location.hostname),"[[client-port]]",location.port);
}));
} else {
return config;
}
});
figwheel.client.base_plugins = (function figwheel$client$base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"enforce-figwheel-version-plugin","enforce-figwheel-version-plugin",-1916185220),figwheel.client.enforce_figwheel_version_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = (((!(figwheel.client.utils.html_env_QMARK_.call(null))))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__4115__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__4115__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__4115__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_message_watch = (function figwheel$client$add_message_watch(key,callback){
return cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,key,(function (_,___$1,___$2,msg_hist){
return callback.call(null,cljs.core.first.call(null,msg_hist));
}));
});
figwheel.client.add_json_message_watch = (function figwheel$client$add_json_message_watch(key,callback){
return figwheel.client.add_message_watch.call(null,key,cljs.core.comp.call(null,callback,cljs.core.clj__GT_js));
});
goog.exportSymbol('figwheel.client.add_json_message_watch', figwheel.client.add_json_message_watch);
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__30425 = cljs.core.seq.call(null,plugins);
var chunk__30426 = null;
var count__30427 = (0);
var i__30428 = (0);
while(true){
if((i__30428 < count__30427)){
var vec__30435 = cljs.core._nth.call(null,chunk__30426,i__30428);
var k = cljs.core.nth.call(null,vec__30435,(0),null);
var plugin = cljs.core.nth.call(null,vec__30435,(1),null);
if(cljs.core.truth_(plugin)){
var pl_30441 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__30425,chunk__30426,count__30427,i__30428,pl_30441,vec__30435,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_30441.call(null,msg_hist);
});})(seq__30425,chunk__30426,count__30427,i__30428,pl_30441,vec__30435,k,plugin))
);
} else {
}


var G__30442 = seq__30425;
var G__30443 = chunk__30426;
var G__30444 = count__30427;
var G__30445 = (i__30428 + (1));
seq__30425 = G__30442;
chunk__30426 = G__30443;
count__30427 = G__30444;
i__30428 = G__30445;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__30425);
if(temp__5720__auto__){
var seq__30425__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30425__$1)){
var c__4556__auto__ = cljs.core.chunk_first.call(null,seq__30425__$1);
var G__30446 = cljs.core.chunk_rest.call(null,seq__30425__$1);
var G__30447 = c__4556__auto__;
var G__30448 = cljs.core.count.call(null,c__4556__auto__);
var G__30449 = (0);
seq__30425 = G__30446;
chunk__30426 = G__30447;
count__30427 = G__30448;
i__30428 = G__30449;
continue;
} else {
var vec__30438 = cljs.core.first.call(null,seq__30425__$1);
var k = cljs.core.nth.call(null,vec__30438,(0),null);
var plugin = cljs.core.nth.call(null,vec__30438,(1),null);
if(cljs.core.truth_(plugin)){
var pl_30450 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__30425,chunk__30426,count__30427,i__30428,pl_30450,vec__30438,k,plugin,seq__30425__$1,temp__5720__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_30450.call(null,msg_hist);
});})(seq__30425,chunk__30426,count__30427,i__30428,pl_30450,vec__30438,k,plugin,seq__30425__$1,temp__5720__auto__))
);
} else {
}


var G__30451 = cljs.core.next.call(null,seq__30425__$1);
var G__30452 = null;
var G__30453 = (0);
var G__30454 = (0);
seq__30425 = G__30451;
chunk__30426 = G__30452;
count__30427 = G__30453;
i__30428 = G__30454;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function figwheel$client$start(var_args){
var G__30456 = arguments.length;
switch (G__30456) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(figwheel.client.start.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if((((!((goog.dependencies_ == null)))) || ((((!((goog.debugLoader_ == null)))) && ((!((goog.debugLoader_.dependencies_ == null)))))))){
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.__figwheel_start_once__ !== 'undefined')){
return null;
} else {
return (
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.fill_url_template.call(null,figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370)))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
(figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts));

figwheel.client.enable_repl_print_BANG_.call(null);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

var seq__30457_30462 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__30458_30463 = null;
var count__30459_30464 = (0);
var i__30460_30465 = (0);
while(true){
if((i__30460_30465 < count__30459_30464)){
var msg_30466 = cljs.core._nth.call(null,chunk__30458_30463,i__30460_30465);
figwheel.client.socket.handle_incoming_message.call(null,msg_30466);


var G__30467 = seq__30457_30462;
var G__30468 = chunk__30458_30463;
var G__30469 = count__30459_30464;
var G__30470 = (i__30460_30465 + (1));
seq__30457_30462 = G__30467;
chunk__30458_30463 = G__30468;
count__30459_30464 = G__30469;
i__30460_30465 = G__30470;
continue;
} else {
var temp__5720__auto___30471 = cljs.core.seq.call(null,seq__30457_30462);
if(temp__5720__auto___30471){
var seq__30457_30472__$1 = temp__5720__auto___30471;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30457_30472__$1)){
var c__4556__auto___30473 = cljs.core.chunk_first.call(null,seq__30457_30472__$1);
var G__30474 = cljs.core.chunk_rest.call(null,seq__30457_30472__$1);
var G__30475 = c__4556__auto___30473;
var G__30476 = cljs.core.count.call(null,c__4556__auto___30473);
var G__30477 = (0);
seq__30457_30462 = G__30474;
chunk__30458_30463 = G__30475;
count__30459_30464 = G__30476;
i__30460_30465 = G__30477;
continue;
} else {
var msg_30478 = cljs.core.first.call(null,seq__30457_30472__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_30478);


var G__30479 = cljs.core.next.call(null,seq__30457_30472__$1);
var G__30480 = null;
var G__30481 = (0);
var G__30482 = (0);
seq__30457_30462 = G__30479;
chunk__30458_30463 = G__30480;
count__30459_30464 = G__30481;
i__30460_30465 = G__30482;
continue;
}
} else {
}
}
break;
}

return figwheel.client.socket.open.call(null,system_options);
})))
;
}
} else {
return null;
}
}));

(figwheel.client.start.cljs$core$IFn$_invoke$arity$0 = (function (){
return figwheel.client.start.call(null,cljs.core.PersistentArrayMap.EMPTY);
}));

(figwheel.client.start.cljs$lang$maxFixedArity = 1);

figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
figwheel.client.watch_and_reload = (function figwheel$client$watch_and_reload(var_args){
var args__4742__auto__ = [];
var len__4736__auto___30487 = arguments.length;
var i__4737__auto___30488 = (0);
while(true){
if((i__4737__auto___30488 < len__4736__auto___30487)){
args__4742__auto__.push((arguments[i__4737__auto___30488]));

var G__30489 = (i__4737__auto___30488 + (1));
i__4737__auto___30488 = G__30489;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__30484){
var map__30485 = p__30484;
var map__30485__$1 = (((((!((map__30485 == null))))?(((((map__30485.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30485.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30485):map__30485);
var opts = map__30485__$1;
return figwheel.client.start.call(null,opts);
}));

(figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq30483){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30483));
}));

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,goog.object.get(window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e30490){if((e30490 instanceof Error)){
var e = e30490;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e30490;

}
}});
figwheel.client.console_intro_message = "Figwheel has compiled a temporary helper application to your :output-file.\n\nThe code currently in your configured output file does not\nrepresent the code that you are trying to compile.\n\nThis temporary application is intended to help you continue to get\nfeedback from Figwheel until the build you are working on compiles\ncorrectly.\n\nWhen your ClojureScript source code compiles correctly this helper\napplication will auto-reload and pick up your freshly compiled\nClojureScript program.";
figwheel.client.bad_compile_helper_app = (function figwheel$client$bad_compile_helper_app(){
cljs.core.enable_console_print_BANG_.call(null);

var config = figwheel.client.fetch_data_from_env.call(null);
cljs.core.println.call(null,figwheel.client.console_intro_message);

figwheel.client.heads_up.bad_compile_screen.call(null);

if(cljs.core.truth_(goog.dependencies_)){
} else {
(goog.dependencies_ = true);
}

figwheel.client.start.call(null,config);

return figwheel.client.add_message_watch.call(null,new cljs.core.Keyword(null,"listen-for-successful-compile","listen-for-successful-compile",-995277603),(function (p__30491){
var map__30492 = p__30491;
var map__30492__$1 = (((((!((map__30492 == null))))?(((((map__30492.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30492.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30492):map__30492);
var msg_name = cljs.core.get.call(null,map__30492__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return (location.href = location.href);
} else {
return null;
}
}));
});

//# sourceMappingURL=client.js.map?rel=1628173112619
