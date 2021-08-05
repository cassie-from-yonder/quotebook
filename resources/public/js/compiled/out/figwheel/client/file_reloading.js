// Compiled by ClojureScript 1.10.773 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('figwheel.client.utils');
goog.require('goog.Uri');
goog.require('goog.object');
goog.require('goog.net.jsloader');
goog.require('goog.html.legacyconversions');
goog.require('goog.string');
goog.require('clojure.string');
goog.require('clojure.set');
goog.require('cljs.core.async');
goog.require('goog.async.Deferred');
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.figwheel_meta_pragmas !== 'undefined')){
} else {
figwheel.client.file_reloading.figwheel_meta_pragmas = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
figwheel.client.file_reloading.debug_loader_QMARK_ = (function figwheel$client$file_reloading$debug_loader_QMARK_(){
return (!((goog.debugLoader_ == null)));
});
figwheel.client.file_reloading.on_jsload_custom_event = (function figwheel$client$file_reloading$on_jsload_custom_event(url){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.js-reload",url);
});
figwheel.client.file_reloading.before_jsload_custom_event = (function figwheel$client$file_reloading$before_jsload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.before-js-reload",files);
});
figwheel.client.file_reloading.on_cssload_custom_event = (function figwheel$client$file_reloading$on_cssload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.css-reload",files);
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__4126__auto__ = ((cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && ((((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string'))) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372))));
if(or__4126__auto__){
return or__4126__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.name__GT_path = ((figwheel.client.file_reloading.debug_loader_QMARK_.call(null))?(function (ns){

return goog.debugLoader_.getPathFromDeps_(ns);
}):(function (ns){

return goog.object.get(goog.dependencies_.nameToPath,ns);
}));
figwheel.client.file_reloading.provided_QMARK_ = ((figwheel.client.file_reloading.debug_loader_QMARK_.call(null))?(function (ns){
return goog.getObjectByName(ns);
}):(function (ns){
return goog.object.get(goog.dependencies_.written,figwheel.client.file_reloading.name__GT_path.call(null,ns));
}));
figwheel.client.file_reloading.immutable_ns_QMARK_ = (function figwheel$client$file_reloading$immutable_ns_QMARK_(ns){
return ((cljs.core._EQ_.call(null,"goog",ns)) || (cljs.core._EQ_.call(null,"cljs.core",ns)) || (cljs.core._EQ_.call(null,"cljs.nodejs",ns)) || (goog.string.startsWith(ns,"clojure.")) || (goog.string.startsWith(ns,"goog.")));
});
figwheel.client.file_reloading.base_requires_for_ns_path = ((figwheel.client.file_reloading.debug_loader_QMARK_.call(null))?(function (path){
var G__28062 = goog.object.get(goog.debugLoader_.dependencies_,path);
if((G__28062 == null)){
return null;
} else {
return goog.object.get(G__28062,"requires");
}
}):(function (path){
var G__28063 = goog.object.get(goog.dependencies_.requires,path);
if((G__28063 == null)){
return null;
} else {
return goog.object.getKeys(G__28063);
}
}));
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__28064_SHARP_){
return (!(figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__28064_SHARP_)));
}),figwheel.client.file_reloading.base_requires_for_ns_path.call(null,figwheel.client.file_reloading.name__GT_path.call(null,ns))));
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.dependency_data !== 'undefined')){
} else {
figwheel.client.file_reloading.dependency_data = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"dependents","dependents",136812837),cljs.core.PersistentArrayMap.EMPTY], null));
}
figwheel.client.file_reloading.path_to_name_BANG_ = ((figwheel.client.file_reloading.debug_loader_QMARK_.call(null))?(function (_,___$1){
return null;
}):(function (path,name){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.createAsIfByAssoc([name]));
}));
figwheel.client.file_reloading.setup_path__GT_name_BANG_ = ((figwheel.client.file_reloading.debug_loader_QMARK_.call(null))?(function (){
return null;
}):(function (){
var nameToPath = goog.object.filter(goog.dependencies_.nameToPath,(function (v,k,o){
return goog.string.startsWith(v,"../");
}));
return goog.object.forEach(nameToPath,(function (v,k,o){
return figwheel.client.file_reloading.path_to_name_BANG_.call(null,v,k);
}));
}));
figwheel.client.file_reloading.path__GT_name = ((figwheel.client.file_reloading.debug_loader_QMARK_.call(null))?(function (path){
var G__28065 = goog.object.get(goog.debugLoader_.dependencies_,path);
var G__28065__$1 = (((G__28065 == null))?null:goog.object.get(G__28065,"provides"));
if((G__28065__$1 == null)){
return null;
} else {
return cljs.core.set.call(null,G__28065__$1);
}
}):(function (path){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null));
}));
figwheel.client.file_reloading.name_to_parent_BANG_ = (function figwheel$client$file_reloading$name_to_parent_BANG_(ns,parent_ns){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),parent_ns);
});
figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_ = ((figwheel.client.file_reloading.debug_loader_QMARK_.call(null))?(function (){
return goog.object.forEach(goog.object.filter(goog.debugLoader_.dependencies_,(function (dep,path,_){
return cljs.core.not.call(null,cljs.core.some.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_,goog.object.get(dep,"provides")));
})),(function (dep,path,_){
var provides = goog.object.get(dep,"provides");
var requires = goog.object.get(dep,"requires");
var seq__28066 = cljs.core.seq.call(null,provides);
var chunk__28067 = null;
var count__28068 = (0);
var i__28069 = (0);
while(true){
if((i__28069 < count__28068)){
var prov = cljs.core._nth.call(null,chunk__28067,i__28069);
var seq__28078_28090 = cljs.core.seq.call(null,requires);
var chunk__28079_28091 = null;
var count__28080_28092 = (0);
var i__28081_28093 = (0);
while(true){
if((i__28081_28093 < count__28080_28092)){
var req_28094 = cljs.core._nth.call(null,chunk__28079_28091,i__28081_28093);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_28094,prov);


var G__28095 = seq__28078_28090;
var G__28096 = chunk__28079_28091;
var G__28097 = count__28080_28092;
var G__28098 = (i__28081_28093 + (1));
seq__28078_28090 = G__28095;
chunk__28079_28091 = G__28096;
count__28080_28092 = G__28097;
i__28081_28093 = G__28098;
continue;
} else {
var temp__5720__auto___28099 = cljs.core.seq.call(null,seq__28078_28090);
if(temp__5720__auto___28099){
var seq__28078_28100__$1 = temp__5720__auto___28099;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28078_28100__$1)){
var c__4556__auto___28101 = cljs.core.chunk_first.call(null,seq__28078_28100__$1);
var G__28102 = cljs.core.chunk_rest.call(null,seq__28078_28100__$1);
var G__28103 = c__4556__auto___28101;
var G__28104 = cljs.core.count.call(null,c__4556__auto___28101);
var G__28105 = (0);
seq__28078_28090 = G__28102;
chunk__28079_28091 = G__28103;
count__28080_28092 = G__28104;
i__28081_28093 = G__28105;
continue;
} else {
var req_28106 = cljs.core.first.call(null,seq__28078_28100__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_28106,prov);


var G__28107 = cljs.core.next.call(null,seq__28078_28100__$1);
var G__28108 = null;
var G__28109 = (0);
var G__28110 = (0);
seq__28078_28090 = G__28107;
chunk__28079_28091 = G__28108;
count__28080_28092 = G__28109;
i__28081_28093 = G__28110;
continue;
}
} else {
}
}
break;
}


var G__28111 = seq__28066;
var G__28112 = chunk__28067;
var G__28113 = count__28068;
var G__28114 = (i__28069 + (1));
seq__28066 = G__28111;
chunk__28067 = G__28112;
count__28068 = G__28113;
i__28069 = G__28114;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__28066);
if(temp__5720__auto__){
var seq__28066__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28066__$1)){
var c__4556__auto__ = cljs.core.chunk_first.call(null,seq__28066__$1);
var G__28115 = cljs.core.chunk_rest.call(null,seq__28066__$1);
var G__28116 = c__4556__auto__;
var G__28117 = cljs.core.count.call(null,c__4556__auto__);
var G__28118 = (0);
seq__28066 = G__28115;
chunk__28067 = G__28116;
count__28068 = G__28117;
i__28069 = G__28118;
continue;
} else {
var prov = cljs.core.first.call(null,seq__28066__$1);
var seq__28082_28119 = cljs.core.seq.call(null,requires);
var chunk__28083_28120 = null;
var count__28084_28121 = (0);
var i__28085_28122 = (0);
while(true){
if((i__28085_28122 < count__28084_28121)){
var req_28123 = cljs.core._nth.call(null,chunk__28083_28120,i__28085_28122);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_28123,prov);


var G__28124 = seq__28082_28119;
var G__28125 = chunk__28083_28120;
var G__28126 = count__28084_28121;
var G__28127 = (i__28085_28122 + (1));
seq__28082_28119 = G__28124;
chunk__28083_28120 = G__28125;
count__28084_28121 = G__28126;
i__28085_28122 = G__28127;
continue;
} else {
var temp__5720__auto___28128__$1 = cljs.core.seq.call(null,seq__28082_28119);
if(temp__5720__auto___28128__$1){
var seq__28082_28129__$1 = temp__5720__auto___28128__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28082_28129__$1)){
var c__4556__auto___28130 = cljs.core.chunk_first.call(null,seq__28082_28129__$1);
var G__28131 = cljs.core.chunk_rest.call(null,seq__28082_28129__$1);
var G__28132 = c__4556__auto___28130;
var G__28133 = cljs.core.count.call(null,c__4556__auto___28130);
var G__28134 = (0);
seq__28082_28119 = G__28131;
chunk__28083_28120 = G__28132;
count__28084_28121 = G__28133;
i__28085_28122 = G__28134;
continue;
} else {
var req_28135 = cljs.core.first.call(null,seq__28082_28129__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_28135,prov);


var G__28136 = cljs.core.next.call(null,seq__28082_28129__$1);
var G__28137 = null;
var G__28138 = (0);
var G__28139 = (0);
seq__28082_28119 = G__28136;
chunk__28083_28120 = G__28137;
count__28084_28121 = G__28138;
i__28085_28122 = G__28139;
continue;
}
} else {
}
}
break;
}


var G__28140 = cljs.core.next.call(null,seq__28066__$1);
var G__28141 = null;
var G__28142 = (0);
var G__28143 = (0);
seq__28066 = G__28140;
chunk__28067 = G__28141;
count__28068 = G__28142;
i__28069 = G__28143;
continue;
}
} else {
return null;
}
}
break;
}
}));
}):(function (){
var requires = goog.object.filter(goog.dependencies_.requires,(function (v,k,o){
return goog.string.startsWith(k,"../");
}));
return goog.object.forEach(requires,(function (deps,path,_){
var seq__28086 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,path));
var chunk__28087 = null;
var count__28088 = (0);
var i__28089 = (0);
while(true){
if((i__28089 < count__28088)){
var prov = cljs.core._nth.call(null,chunk__28087,i__28089);
goog.object.forEach(deps,((function (seq__28086,chunk__28087,count__28088,i__28089,prov,requires){
return (function (___$1,req,___$2){
return figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req,prov);
});})(seq__28086,chunk__28087,count__28088,i__28089,prov,requires))
);


var G__28144 = seq__28086;
var G__28145 = chunk__28087;
var G__28146 = count__28088;
var G__28147 = (i__28089 + (1));
seq__28086 = G__28144;
chunk__28087 = G__28145;
count__28088 = G__28146;
i__28089 = G__28147;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__28086);
if(temp__5720__auto__){
var seq__28086__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28086__$1)){
var c__4556__auto__ = cljs.core.chunk_first.call(null,seq__28086__$1);
var G__28148 = cljs.core.chunk_rest.call(null,seq__28086__$1);
var G__28149 = c__4556__auto__;
var G__28150 = cljs.core.count.call(null,c__4556__auto__);
var G__28151 = (0);
seq__28086 = G__28148;
chunk__28087 = G__28149;
count__28088 = G__28150;
i__28089 = G__28151;
continue;
} else {
var prov = cljs.core.first.call(null,seq__28086__$1);
goog.object.forEach(deps,((function (seq__28086,chunk__28087,count__28088,i__28089,prov,seq__28086__$1,temp__5720__auto__,requires){
return (function (___$1,req,___$2){
return figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req,prov);
});})(seq__28086,chunk__28087,count__28088,i__28089,prov,seq__28086__$1,temp__5720__auto__,requires))
);


var G__28152 = cljs.core.next.call(null,seq__28086__$1);
var G__28153 = null;
var G__28154 = (0);
var G__28155 = (0);
seq__28086 = G__28152;
chunk__28087 = G__28153;
count__28088 = G__28154;
i__28089 = G__28155;
continue;
}
} else {
return null;
}
}
break;
}
}));
}));
figwheel.client.file_reloading.ns__GT_dependents = (function figwheel$client$file_reloading$ns__GT_dependents(ns){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null));
});
figwheel.client.file_reloading.in_upper_level_QMARK_ = (function figwheel$client$file_reloading$in_upper_level_QMARK_(topo_state,current_depth,dep){
return cljs.core.some.call(null,(function (p__28156){
var vec__28157 = p__28156;
var _ = cljs.core.nth.call(null,vec__28157,(0),null);
var v = cljs.core.nth.call(null,vec__28157,(1),null);
var and__4115__auto__ = v;
if(cljs.core.truth_(and__4115__auto__)){
return v.call(null,dep);
} else {
return and__4115__auto__;
}
}),cljs.core.filter.call(null,(function (p__28160){
var vec__28161 = p__28160;
var k = cljs.core.nth.call(null,vec__28161,(0),null);
var v = cljs.core.nth.call(null,vec__28161,(1),null);
return (k > current_depth);
}),topo_state));
});
figwheel.client.file_reloading.build_topo_sort = (function figwheel$client$file_reloading$build_topo_sort(get_deps){
var get_deps__$1 = cljs.core.memoize.call(null,get_deps);
var topo_sort_helper_STAR_ = (function figwheel$client$file_reloading$build_topo_sort_$_topo_sort_helper_STAR_(x,depth,state){
var deps = get_deps__$1.call(null,x);
if(cljs.core.empty_QMARK_.call(null,deps)){
return null;
} else {
return topo_sort_STAR_.call(null,deps,depth,state);
}
});
var topo_sort_STAR_ = (function() {
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = null;
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1 = (function (deps){
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.call(null,deps,(0),cljs.core.atom.call(null,cljs.core.sorted_map.call(null)));
});
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3 = (function (deps,depth,state){
cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [depth], null),cljs.core.fnil.call(null,cljs.core.into,cljs.core.PersistentHashSet.EMPTY),deps);

var seq__28173_28181 = cljs.core.seq.call(null,deps);
var chunk__28174_28182 = null;
var count__28175_28183 = (0);
var i__28176_28184 = (0);
while(true){
if((i__28176_28184 < count__28175_28183)){
var dep_28185 = cljs.core._nth.call(null,chunk__28174_28182,i__28176_28184);
if(cljs.core.truth_((function (){var and__4115__auto__ = dep_28185;
if(cljs.core.truth_(and__4115__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_28185));
} else {
return and__4115__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_28185,(depth + (1)),state);
} else {
}


var G__28186 = seq__28173_28181;
var G__28187 = chunk__28174_28182;
var G__28188 = count__28175_28183;
var G__28189 = (i__28176_28184 + (1));
seq__28173_28181 = G__28186;
chunk__28174_28182 = G__28187;
count__28175_28183 = G__28188;
i__28176_28184 = G__28189;
continue;
} else {
var temp__5720__auto___28190 = cljs.core.seq.call(null,seq__28173_28181);
if(temp__5720__auto___28190){
var seq__28173_28191__$1 = temp__5720__auto___28190;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28173_28191__$1)){
var c__4556__auto___28192 = cljs.core.chunk_first.call(null,seq__28173_28191__$1);
var G__28193 = cljs.core.chunk_rest.call(null,seq__28173_28191__$1);
var G__28194 = c__4556__auto___28192;
var G__28195 = cljs.core.count.call(null,c__4556__auto___28192);
var G__28196 = (0);
seq__28173_28181 = G__28193;
chunk__28174_28182 = G__28194;
count__28175_28183 = G__28195;
i__28176_28184 = G__28196;
continue;
} else {
var dep_28197 = cljs.core.first.call(null,seq__28173_28191__$1);
if(cljs.core.truth_((function (){var and__4115__auto__ = dep_28197;
if(cljs.core.truth_(and__4115__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_28197));
} else {
return and__4115__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_28197,(depth + (1)),state);
} else {
}


var G__28198 = cljs.core.next.call(null,seq__28173_28191__$1);
var G__28199 = null;
var G__28200 = (0);
var G__28201 = (0);
seq__28173_28181 = G__28198;
chunk__28174_28182 = G__28199;
count__28175_28183 = G__28200;
i__28176_28184 = G__28201;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,depth,(0))){
return elim_dups_STAR_.call(null,cljs.core.reverse.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,state))));
} else {
return null;
}
});
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = function(deps,depth,state){
switch(arguments.length){
case 1:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1.call(this,deps);
case 3:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3.call(this,deps,depth,state);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1;
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$3 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3;
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_;
})()
;
var elim_dups_STAR_ = (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__28177){
var vec__28178 = p__28177;
var seq__28179 = cljs.core.seq.call(null,vec__28178);
var first__28180 = cljs.core.first.call(null,seq__28179);
var seq__28179__$1 = cljs.core.next.call(null,seq__28179);
var x = first__28180;
var xs = seq__28179__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,(function (p1__28164_SHARP_){
return clojure.set.difference.call(null,p1__28164_SHARP_,x);
}),xs)));
}
});
return topo_sort_STAR_;
});
figwheel.client.file_reloading.get_all_dependencies = (function figwheel$client$file_reloading$get_all_dependencies(ns){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.get_requires);
return cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns], null))));
});
figwheel.client.file_reloading.get_all_dependents = (function figwheel$client$file_reloading$get_all_dependents(nss){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.ns__GT_dependents);
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,figwheel.client.file_reloading.immutable_ns_QMARK_),cljs.core.reverse.call(null,cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,nss)))));
});
figwheel.client.file_reloading.unprovide_BANG_ = ((figwheel.client.file_reloading.debug_loader_QMARK_.call(null))?(function (ns){
var path = figwheel.client.file_reloading.name__GT_path.call(null,ns);
goog.object.remove(goog.debugLoader_.written_,path);

return goog.object.remove(goog.debugLoader_.written_,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(path)].join(''));
}):(function (ns){
var path = figwheel.client.file_reloading.name__GT_path.call(null,ns);
goog.object.remove(goog.dependencies_.visited,path);

goog.object.remove(goog.dependencies_.written,path);

return goog.object.remove(goog.dependencies_.written,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(path)].join(''));
}));
figwheel.client.file_reloading.resolve_ns = ((figwheel.client.file_reloading.debug_loader_QMARK_.call(null))?figwheel.client.file_reloading.name__GT_path:(function (p1__28202_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_reloading.name__GT_path.call(null,p1__28202_SHARP_))].join('');
}));
figwheel.client.file_reloading.addDependency = (function figwheel$client$file_reloading$addDependency(path,provides,requires){
var seq__28203 = cljs.core.seq.call(null,provides);
var chunk__28204 = null;
var count__28205 = (0);
var i__28206 = (0);
while(true){
if((i__28206 < count__28205)){
var prov = cljs.core._nth.call(null,chunk__28204,i__28206);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__28215_28223 = cljs.core.seq.call(null,requires);
var chunk__28216_28224 = null;
var count__28217_28225 = (0);
var i__28218_28226 = (0);
while(true){
if((i__28218_28226 < count__28217_28225)){
var req_28227 = cljs.core._nth.call(null,chunk__28216_28224,i__28218_28226);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_28227,prov);


var G__28228 = seq__28215_28223;
var G__28229 = chunk__28216_28224;
var G__28230 = count__28217_28225;
var G__28231 = (i__28218_28226 + (1));
seq__28215_28223 = G__28228;
chunk__28216_28224 = G__28229;
count__28217_28225 = G__28230;
i__28218_28226 = G__28231;
continue;
} else {
var temp__5720__auto___28232 = cljs.core.seq.call(null,seq__28215_28223);
if(temp__5720__auto___28232){
var seq__28215_28233__$1 = temp__5720__auto___28232;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28215_28233__$1)){
var c__4556__auto___28234 = cljs.core.chunk_first.call(null,seq__28215_28233__$1);
var G__28235 = cljs.core.chunk_rest.call(null,seq__28215_28233__$1);
var G__28236 = c__4556__auto___28234;
var G__28237 = cljs.core.count.call(null,c__4556__auto___28234);
var G__28238 = (0);
seq__28215_28223 = G__28235;
chunk__28216_28224 = G__28236;
count__28217_28225 = G__28237;
i__28218_28226 = G__28238;
continue;
} else {
var req_28239 = cljs.core.first.call(null,seq__28215_28233__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_28239,prov);


var G__28240 = cljs.core.next.call(null,seq__28215_28233__$1);
var G__28241 = null;
var G__28242 = (0);
var G__28243 = (0);
seq__28215_28223 = G__28240;
chunk__28216_28224 = G__28241;
count__28217_28225 = G__28242;
i__28218_28226 = G__28243;
continue;
}
} else {
}
}
break;
}


var G__28244 = seq__28203;
var G__28245 = chunk__28204;
var G__28246 = count__28205;
var G__28247 = (i__28206 + (1));
seq__28203 = G__28244;
chunk__28204 = G__28245;
count__28205 = G__28246;
i__28206 = G__28247;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__28203);
if(temp__5720__auto__){
var seq__28203__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28203__$1)){
var c__4556__auto__ = cljs.core.chunk_first.call(null,seq__28203__$1);
var G__28248 = cljs.core.chunk_rest.call(null,seq__28203__$1);
var G__28249 = c__4556__auto__;
var G__28250 = cljs.core.count.call(null,c__4556__auto__);
var G__28251 = (0);
seq__28203 = G__28248;
chunk__28204 = G__28249;
count__28205 = G__28250;
i__28206 = G__28251;
continue;
} else {
var prov = cljs.core.first.call(null,seq__28203__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__28219_28252 = cljs.core.seq.call(null,requires);
var chunk__28220_28253 = null;
var count__28221_28254 = (0);
var i__28222_28255 = (0);
while(true){
if((i__28222_28255 < count__28221_28254)){
var req_28256 = cljs.core._nth.call(null,chunk__28220_28253,i__28222_28255);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_28256,prov);


var G__28257 = seq__28219_28252;
var G__28258 = chunk__28220_28253;
var G__28259 = count__28221_28254;
var G__28260 = (i__28222_28255 + (1));
seq__28219_28252 = G__28257;
chunk__28220_28253 = G__28258;
count__28221_28254 = G__28259;
i__28222_28255 = G__28260;
continue;
} else {
var temp__5720__auto___28261__$1 = cljs.core.seq.call(null,seq__28219_28252);
if(temp__5720__auto___28261__$1){
var seq__28219_28262__$1 = temp__5720__auto___28261__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28219_28262__$1)){
var c__4556__auto___28263 = cljs.core.chunk_first.call(null,seq__28219_28262__$1);
var G__28264 = cljs.core.chunk_rest.call(null,seq__28219_28262__$1);
var G__28265 = c__4556__auto___28263;
var G__28266 = cljs.core.count.call(null,c__4556__auto___28263);
var G__28267 = (0);
seq__28219_28252 = G__28264;
chunk__28220_28253 = G__28265;
count__28221_28254 = G__28266;
i__28222_28255 = G__28267;
continue;
} else {
var req_28268 = cljs.core.first.call(null,seq__28219_28262__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_28268,prov);


var G__28269 = cljs.core.next.call(null,seq__28219_28262__$1);
var G__28270 = null;
var G__28271 = (0);
var G__28272 = (0);
seq__28219_28252 = G__28269;
chunk__28220_28253 = G__28270;
count__28221_28254 = G__28271;
i__28222_28255 = G__28272;
continue;
}
} else {
}
}
break;
}


var G__28273 = cljs.core.next.call(null,seq__28203__$1);
var G__28274 = null;
var G__28275 = (0);
var G__28276 = (0);
seq__28203 = G__28273;
chunk__28204 = G__28274;
count__28205 = G__28275;
i__28206 = G__28276;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.file_reloading.figwheel_require = (function figwheel$client$file_reloading$figwheel_require(src,reload){
(goog.require = figwheel.client.file_reloading.figwheel_require);

if(cljs.core._EQ_.call(null,reload,"reload-all")){
var seq__28277_28281 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__28278_28282 = null;
var count__28279_28283 = (0);
var i__28280_28284 = (0);
while(true){
if((i__28280_28284 < count__28279_28283)){
var ns_28285 = cljs.core._nth.call(null,chunk__28278_28282,i__28280_28284);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_28285);


var G__28286 = seq__28277_28281;
var G__28287 = chunk__28278_28282;
var G__28288 = count__28279_28283;
var G__28289 = (i__28280_28284 + (1));
seq__28277_28281 = G__28286;
chunk__28278_28282 = G__28287;
count__28279_28283 = G__28288;
i__28280_28284 = G__28289;
continue;
} else {
var temp__5720__auto___28290 = cljs.core.seq.call(null,seq__28277_28281);
if(temp__5720__auto___28290){
var seq__28277_28291__$1 = temp__5720__auto___28290;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28277_28291__$1)){
var c__4556__auto___28292 = cljs.core.chunk_first.call(null,seq__28277_28291__$1);
var G__28293 = cljs.core.chunk_rest.call(null,seq__28277_28291__$1);
var G__28294 = c__4556__auto___28292;
var G__28295 = cljs.core.count.call(null,c__4556__auto___28292);
var G__28296 = (0);
seq__28277_28281 = G__28293;
chunk__28278_28282 = G__28294;
count__28279_28283 = G__28295;
i__28280_28284 = G__28296;
continue;
} else {
var ns_28297 = cljs.core.first.call(null,seq__28277_28291__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_28297);


var G__28298 = cljs.core.next.call(null,seq__28277_28291__$1);
var G__28299 = null;
var G__28300 = (0);
var G__28301 = (0);
seq__28277_28281 = G__28298;
chunk__28278_28282 = G__28299;
count__28279_28283 = G__28300;
i__28280_28284 = G__28301;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(reload)){
figwheel.client.file_reloading.unprovide_BANG_.call(null,src);
} else {
}

return goog.require_figwheel_backup_(src);
});
/**
 * Reusable browser REPL bootstrapping. Patches the essential functions
 *   in goog.base to support re-loading of namespaces after page load.
 */
figwheel.client.file_reloading.bootstrap_goog_base = (function figwheel$client$file_reloading$bootstrap_goog_base(){
if(cljs.core.truth_(COMPILED)){
return null;
} else {
(goog.require_figwheel_backup_ = (function (){var or__4126__auto__ = goog.require__;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return goog.require;
}
})());

(goog.isProvided_ = (function (name){
return false;
}));

figwheel.client.file_reloading.setup_path__GT_name_BANG_.call(null);

figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_.call(null);

(goog.addDependency_figwheel_backup_ = goog.addDependency);

(goog.addDependency = (function() { 
var G__28302__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__28302 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__28303__i = 0, G__28303__a = new Array(arguments.length -  0);
while (G__28303__i < G__28303__a.length) {G__28303__a[G__28303__i] = arguments[G__28303__i + 0]; ++G__28303__i;}
  args = new cljs.core.IndexedSeq(G__28303__a,0,null);
} 
return G__28302__delegate.call(this,args);};
G__28302.cljs$lang$maxFixedArity = 0;
G__28302.cljs$lang$applyTo = (function (arglist__28304){
var args = cljs.core.seq(arglist__28304);
return G__28302__delegate(args);
});
G__28302.cljs$core$IFn$_invoke$arity$variadic = G__28302__delegate;
return G__28302;
})()
);

goog.constructNamespace_("cljs.user");

(goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.queued_file_reload);

return (goog.require = figwheel.client.file_reloading.figwheel_require);
}
});
figwheel.client.file_reloading.patch_goog_base = (function figwheel$client$file_reloading$patch_goog_base(){
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.bootstrapped_cljs !== 'undefined')){
return null;
} else {
return (
figwheel.client.file_reloading.bootstrapped_cljs = (function (){
figwheel.client.file_reloading.bootstrap_goog_base.call(null);

return true;
})()
)
;
}
});
figwheel.client.file_reloading.gloader = (((typeof goog !== 'undefined') && (typeof goog.net !== 'undefined') && (typeof goog.net.jsloader !== 'undefined') && (typeof goog.net.jsloader.safeLoad !== 'undefined'))?(function (p1__28305_SHARP_,p2__28306_SHARP_){
return goog.net.jsloader.safeLoad(goog.html.legacyconversions.trustedResourceUrlFromString(cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__28305_SHARP_)),p2__28306_SHARP_);
}):(((typeof goog !== 'undefined') && (typeof goog.net !== 'undefined') && (typeof goog.net.jsloader !== 'undefined') && (typeof goog.net.jsloader.load !== 'undefined'))?(function (p1__28307_SHARP_,p2__28308_SHARP_){
return goog.net.jsloader.load(cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__28307_SHARP_),p2__28308_SHARP_);
}):(function(){throw cljs.core.ex_info.call(null,"No remote script loading function found.",cljs.core.PersistentArrayMap.EMPTY)})()
));
figwheel.client.file_reloading.reload_file_in_html_env = (function figwheel$client$file_reloading$reload_file_in_html_env(request_url,callback){

var G__28309 = figwheel.client.file_reloading.gloader.call(null,figwheel.client.file_reloading.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
G__28309.addCallback((function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
}));

G__28309.addErrback((function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
}));

return G__28309;
});
figwheel.client.file_reloading.write_script_tag_import = figwheel.client.file_reloading.reload_file_in_html_env;
goog.exportSymbol('figwheel.client.file_reloading.write_script_tag_import', figwheel.client.file_reloading.write_script_tag_import);
figwheel.client.file_reloading.worker_import_script = (function figwheel$client$file_reloading$worker_import_script(request_url,callback){

return callback.call(null,(function (){try{self.importScripts(figwheel.client.file_reloading.add_cache_buster.call(null,request_url));

return true;
}catch (e28310){if((e28310 instanceof Error)){
var e = e28310;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e28310;

}
}})());
});
goog.exportSymbol('figwheel.client.file_reloading.worker_import_script', figwheel.client.file_reloading.worker_import_script);
figwheel.client.file_reloading.create_node_script_import_fn = (function figwheel$client$file_reloading$create_node_script_import_fn(){
var node_path_lib = require("path");
var util_pattern = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.sep),cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.join("goog","bootstrap","nodejs.js"))].join('');
var util_path = goog.object.findKey(require.cache,(function (v,k,o){
return goog.string.endsWith(k,util_pattern);
}));
var parts = cljs.core.pop.call(null,cljs.core.pop.call(null,clojure.string.split.call(null,util_path,/[\/\\]/)));
var root_path = clojure.string.join.call(null,node_path_lib.sep,parts);
return (function (request_url,callback){

var cache_path = node_path_lib.resolve(root_path,request_url);
goog.object.remove(require.cache,cache_path);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e28311){if((e28311 instanceof Error)){
var e = e28311;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e28311;

}
}})());
});
});
goog.exportSymbol('figwheel.client.file_reloading.create_node_script_import_fn', figwheel.client.file_reloading.create_node_script_import_fn);
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__28312 = cljs.core._EQ_;
var expr__28313 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__28312.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__28313))){
return figwheel.client.file_reloading.create_node_script_import_fn.call(null);
} else {
if(cljs.core.truth_(pred__28312.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__28313))){
return figwheel.client.file_reloading.write_script_tag_import;
} else {
if(cljs.core.truth_(pred__28312.call(null,new cljs.core.Keyword(null,"worker","worker",938239996),expr__28313))){
return figwheel.client.file_reloading.worker_import_script;
} else {
return (function (a,b){
throw "Reload not defined for this platform";
});
}
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__28315,callback){
var map__28316 = p__28315;
var map__28316__$1 = (((((!((map__28316 == null))))?(((((map__28316.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28316.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28316):map__28316);
var file_msg = map__28316__$1;
var request_url = cljs.core.get.call(null,map__28316__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,["FigWheel: Attempting to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return (function (){var or__4126__auto__ = goog.object.get(goog.global,"FIGWHEEL_IMPORT_SCRIPT");
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return figwheel.client.file_reloading.reload_file_STAR_;
}
})().call(null,request_url,(function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,["FigWheel: Successfully loaded ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
}));
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.reload_chan !== 'undefined')){
} else {
figwheel.client.file_reloading.reload_chan = cljs.core.async.chan.call(null);
}
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.on_load_callbacks !== 'undefined')){
} else {
figwheel.client.file_reloading.on_load_callbacks = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.dependencies_loaded !== 'undefined')){
} else {
figwheel.client.file_reloading.dependencies_loaded = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
figwheel.client.file_reloading.blocking_load = (function figwheel$client$file_reloading$blocking_load(url){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.reload_file.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"request-url","request-url",2100346596),url], null),(function (file_msg){
cljs.core.async.put_BANG_.call(null,out,file_msg);

return cljs.core.async.close_BANG_.call(null,out);
}));

return out;
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.reloader_loop !== 'undefined')){
} else {
figwheel.client.file_reloading.reloader_loop = (function (){var c__25937__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__25938__auto__ = (function (){var switch__25842__auto__ = (function (state_28354){
var state_val_28355 = (state_28354[(1)]);
if((state_val_28355 === (7))){
var inst_28350 = (state_28354[(2)]);
var state_28354__$1 = state_28354;
var statearr_28356_28382 = state_28354__$1;
(statearr_28356_28382[(2)] = inst_28350);

(statearr_28356_28382[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28355 === (1))){
var state_28354__$1 = state_28354;
var statearr_28357_28383 = state_28354__$1;
(statearr_28357_28383[(2)] = null);

(statearr_28357_28383[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28355 === (4))){
var inst_28320 = (state_28354[(7)]);
var inst_28320__$1 = (state_28354[(2)]);
var state_28354__$1 = (function (){var statearr_28358 = state_28354;
(statearr_28358[(7)] = inst_28320__$1);

return statearr_28358;
})();
if(cljs.core.truth_(inst_28320__$1)){
var statearr_28359_28384 = state_28354__$1;
(statearr_28359_28384[(1)] = (5));

} else {
var statearr_28360_28385 = state_28354__$1;
(statearr_28360_28385[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28355 === (15))){
var inst_28335 = (state_28354[(8)]);
var inst_28333 = (state_28354[(9)]);
var inst_28337 = inst_28335.call(null,inst_28333);
var state_28354__$1 = state_28354;
var statearr_28361_28386 = state_28354__$1;
(statearr_28361_28386[(2)] = inst_28337);

(statearr_28361_28386[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28355 === (13))){
var inst_28344 = (state_28354[(2)]);
var state_28354__$1 = state_28354;
var statearr_28362_28387 = state_28354__$1;
(statearr_28362_28387[(2)] = inst_28344);

(statearr_28362_28387[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28355 === (6))){
var state_28354__$1 = state_28354;
var statearr_28363_28388 = state_28354__$1;
(statearr_28363_28388[(2)] = null);

(statearr_28363_28388[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28355 === (17))){
var inst_28341 = (state_28354[(2)]);
var state_28354__$1 = state_28354;
var statearr_28364_28389 = state_28354__$1;
(statearr_28364_28389[(2)] = inst_28341);

(statearr_28364_28389[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28355 === (3))){
var inst_28352 = (state_28354[(2)]);
var state_28354__$1 = state_28354;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28354__$1,inst_28352);
} else {
if((state_val_28355 === (12))){
var state_28354__$1 = state_28354;
var statearr_28365_28390 = state_28354__$1;
(statearr_28365_28390[(2)] = null);

(statearr_28365_28390[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28355 === (2))){
var state_28354__$1 = state_28354;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28354__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_28355 === (11))){
var inst_28325 = (state_28354[(10)]);
var inst_28331 = figwheel.client.file_reloading.blocking_load.call(null,inst_28325);
var state_28354__$1 = state_28354;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28354__$1,(14),inst_28331);
} else {
if((state_val_28355 === (9))){
var inst_28325 = (state_28354[(10)]);
var state_28354__$1 = state_28354;
if(cljs.core.truth_(inst_28325)){
var statearr_28366_28391 = state_28354__$1;
(statearr_28366_28391[(1)] = (11));

} else {
var statearr_28367_28392 = state_28354__$1;
(statearr_28367_28392[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28355 === (5))){
var inst_28326 = (state_28354[(11)]);
var inst_28320 = (state_28354[(7)]);
var inst_28325 = cljs.core.nth.call(null,inst_28320,(0),null);
var inst_28326__$1 = cljs.core.nth.call(null,inst_28320,(1),null);
var state_28354__$1 = (function (){var statearr_28368 = state_28354;
(statearr_28368[(11)] = inst_28326__$1);

(statearr_28368[(10)] = inst_28325);

return statearr_28368;
})();
if(cljs.core.truth_(inst_28326__$1)){
var statearr_28369_28393 = state_28354__$1;
(statearr_28369_28393[(1)] = (8));

} else {
var statearr_28370_28394 = state_28354__$1;
(statearr_28370_28394[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28355 === (14))){
var inst_28335 = (state_28354[(8)]);
var inst_28325 = (state_28354[(10)]);
var inst_28333 = (state_28354[(2)]);
var inst_28334 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_28335__$1 = cljs.core.get.call(null,inst_28334,inst_28325);
var state_28354__$1 = (function (){var statearr_28371 = state_28354;
(statearr_28371[(8)] = inst_28335__$1);

(statearr_28371[(9)] = inst_28333);

return statearr_28371;
})();
if(cljs.core.truth_(inst_28335__$1)){
var statearr_28372_28395 = state_28354__$1;
(statearr_28372_28395[(1)] = (15));

} else {
var statearr_28373_28396 = state_28354__$1;
(statearr_28373_28396[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28355 === (16))){
var inst_28333 = (state_28354[(9)]);
var inst_28339 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_28333);
var state_28354__$1 = state_28354;
var statearr_28374_28397 = state_28354__$1;
(statearr_28374_28397[(2)] = inst_28339);

(statearr_28374_28397[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28355 === (10))){
var inst_28346 = (state_28354[(2)]);
var state_28354__$1 = (function (){var statearr_28375 = state_28354;
(statearr_28375[(12)] = inst_28346);

return statearr_28375;
})();
var statearr_28376_28398 = state_28354__$1;
(statearr_28376_28398[(2)] = null);

(statearr_28376_28398[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28355 === (8))){
var inst_28326 = (state_28354[(11)]);
var inst_28328 = eval(inst_28326);
var state_28354__$1 = state_28354;
var statearr_28377_28399 = state_28354__$1;
(statearr_28377_28399[(2)] = inst_28328);

(statearr_28377_28399[(1)] = (10));


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
var figwheel$client$file_reloading$state_machine__25843__auto__ = null;
var figwheel$client$file_reloading$state_machine__25843__auto____0 = (function (){
var statearr_28378 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28378[(0)] = figwheel$client$file_reloading$state_machine__25843__auto__);

(statearr_28378[(1)] = (1));

return statearr_28378;
});
var figwheel$client$file_reloading$state_machine__25843__auto____1 = (function (state_28354){
while(true){
var ret_value__25844__auto__ = (function (){try{while(true){
var result__25845__auto__ = switch__25842__auto__.call(null,state_28354);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25845__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25845__auto__;
}
break;
}
}catch (e28379){if((e28379 instanceof Object)){
var ex__25846__auto__ = e28379;
var statearr_28380_28400 = state_28354;
(statearr_28380_28400[(5)] = ex__25846__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28354);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28379;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25844__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28401 = state_28354;
state_28354 = G__28401;
continue;
} else {
return ret_value__25844__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__25843__auto__ = function(state_28354){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__25843__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__25843__auto____1.call(this,state_28354);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__25843__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__25843__auto____0;
figwheel$client$file_reloading$state_machine__25843__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__25843__auto____1;
return figwheel$client$file_reloading$state_machine__25843__auto__;
})()
})();
var state__25939__auto__ = (function (){var statearr_28381 = f__25938__auto__.call(null);
(statearr_28381[(6)] = c__25937__auto__);

return statearr_28381;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25939__auto__);
}));

return c__25937__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(var_args){
var G__28403 = arguments.length;
switch (G__28403) {
case 1:
return figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$1 = (function (url){
return figwheel.client.file_reloading.queued_file_reload.call(null,url,null);
}));

(figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$2 = (function (url,opt_source_text){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [url,opt_source_text], null));
}));

(figwheel.client.file_reloading.queued_file_reload.cljs$lang$maxFixedArity = 2);

figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__28405,callback){
var map__28406 = p__28405;
var map__28406__$1 = (((((!((map__28406 == null))))?(((((map__28406.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28406.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28406):map__28406);
var file_msg = map__28406__$1;
var namespace = cljs.core.get.call(null,map__28406__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,(function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
}));

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.figwheel_no_load_QMARK_ = (function figwheel$client$file_reloading$figwheel_no_load_QMARK_(p__28408){
var map__28409 = p__28408;
var map__28409__$1 = (((((!((map__28409 == null))))?(((((map__28409.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28409.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28409):map__28409);
var file_msg = map__28409__$1;
var namespace = cljs.core.get.call(null,map__28409__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
});
figwheel.client.file_reloading.ns_exists_QMARK_ = (function figwheel$client$file_reloading$ns_exists_QMARK_(namespace){
return (!((cljs.core.reduce.call(null,cljs.core.fnil.call(null,goog.object.get,({})),goog.global,clojure.string.split.call(null,cljs.core.name.call(null,namespace),".")) == null)));
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__28411){
var map__28412 = p__28411;
var map__28412__$1 = (((((!((map__28412 == null))))?(((((map__28412.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28412.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28412):map__28412);
var file_msg = map__28412__$1;
var namespace = cljs.core.get.call(null,map__28412__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
if(cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,file_msg))){
var or__4126__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
var or__4126__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__4126__auto____$1)){
return or__4126__auto____$1;
} else {
var or__4126__auto____$2 = figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
if(cljs.core.truth_(or__4126__auto____$2)){
return or__4126__auto____$2;
} else {
return figwheel.client.file_reloading.ns_exists_QMARK_.call(null,namespace);
}
}
}
} else {
return false;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__28414,callback){
var map__28415 = p__28414;
var map__28415__$1 = (((((!((map__28415 == null))))?(((((map__28415.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28415.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28415):map__28415);
var file_msg = map__28415__$1;
var request_url = cljs.core.get.call(null,map__28415__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__28415__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.require_with_callback.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,["Figwheel: Not trying to load file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function figwheel$client$file_reloading$reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.js_reload.call(null,file_msg,(function (url){
cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
}));

return out;
});
/**
 * Returns a chanel with one collection of loaded filenames on it.
 */
figwheel.client.file_reloading.load_all_js_files = (function figwheel$client$file_reloading$load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__25937__auto___28465 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__25938__auto__ = (function (){var switch__25842__auto__ = (function (state_28450){
var state_val_28451 = (state_28450[(1)]);
if((state_val_28451 === (1))){
var inst_28424 = cljs.core.seq.call(null,files);
var inst_28425 = cljs.core.first.call(null,inst_28424);
var inst_28426 = cljs.core.next.call(null,inst_28424);
var inst_28427 = files;
var state_28450__$1 = (function (){var statearr_28452 = state_28450;
(statearr_28452[(7)] = inst_28425);

(statearr_28452[(8)] = inst_28426);

(statearr_28452[(9)] = inst_28427);

return statearr_28452;
})();
var statearr_28453_28466 = state_28450__$1;
(statearr_28453_28466[(2)] = null);

(statearr_28453_28466[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28451 === (2))){
var inst_28433 = (state_28450[(10)]);
var inst_28427 = (state_28450[(9)]);
var inst_28432 = cljs.core.seq.call(null,inst_28427);
var inst_28433__$1 = cljs.core.first.call(null,inst_28432);
var inst_28434 = cljs.core.next.call(null,inst_28432);
var inst_28435 = (inst_28433__$1 == null);
var inst_28436 = cljs.core.not.call(null,inst_28435);
var state_28450__$1 = (function (){var statearr_28454 = state_28450;
(statearr_28454[(10)] = inst_28433__$1);

(statearr_28454[(11)] = inst_28434);

return statearr_28454;
})();
if(inst_28436){
var statearr_28455_28467 = state_28450__$1;
(statearr_28455_28467[(1)] = (4));

} else {
var statearr_28456_28468 = state_28450__$1;
(statearr_28456_28468[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28451 === (3))){
var inst_28448 = (state_28450[(2)]);
var state_28450__$1 = state_28450;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28450__$1,inst_28448);
} else {
if((state_val_28451 === (4))){
var inst_28433 = (state_28450[(10)]);
var inst_28438 = figwheel.client.file_reloading.reload_js_file.call(null,inst_28433);
var state_28450__$1 = state_28450;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28450__$1,(7),inst_28438);
} else {
if((state_val_28451 === (5))){
var inst_28444 = cljs.core.async.close_BANG_.call(null,out);
var state_28450__$1 = state_28450;
var statearr_28457_28469 = state_28450__$1;
(statearr_28457_28469[(2)] = inst_28444);

(statearr_28457_28469[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28451 === (6))){
var inst_28446 = (state_28450[(2)]);
var state_28450__$1 = state_28450;
var statearr_28458_28470 = state_28450__$1;
(statearr_28458_28470[(2)] = inst_28446);

(statearr_28458_28470[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28451 === (7))){
var inst_28434 = (state_28450[(11)]);
var inst_28440 = (state_28450[(2)]);
var inst_28441 = cljs.core.async.put_BANG_.call(null,out,inst_28440);
var inst_28427 = inst_28434;
var state_28450__$1 = (function (){var statearr_28459 = state_28450;
(statearr_28459[(9)] = inst_28427);

(statearr_28459[(12)] = inst_28441);

return statearr_28459;
})();
var statearr_28460_28471 = state_28450__$1;
(statearr_28460_28471[(2)] = null);

(statearr_28460_28471[(1)] = (2));


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
});
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__25843__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__25843__auto____0 = (function (){
var statearr_28461 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28461[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__25843__auto__);

(statearr_28461[(1)] = (1));

return statearr_28461;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__25843__auto____1 = (function (state_28450){
while(true){
var ret_value__25844__auto__ = (function (){try{while(true){
var result__25845__auto__ = switch__25842__auto__.call(null,state_28450);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25845__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25845__auto__;
}
break;
}
}catch (e28462){if((e28462 instanceof Object)){
var ex__25846__auto__ = e28462;
var statearr_28463_28472 = state_28450;
(statearr_28463_28472[(5)] = ex__25846__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28450);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28462;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25844__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28473 = state_28450;
state_28450 = G__28473;
continue;
} else {
return ret_value__25844__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__25843__auto__ = function(state_28450){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__25843__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__25843__auto____1.call(this,state_28450);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__25843__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__25843__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__25843__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__25843__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__25843__auto__;
})()
})();
var state__25939__auto__ = (function (){var statearr_28464 = f__25938__auto__.call(null);
(statearr_28464[(6)] = c__25937__auto___28465);

return statearr_28464;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25939__auto__);
}));


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__28474,opts){
var map__28475 = p__28474;
var map__28475__$1 = (((((!((map__28475 == null))))?(((((map__28475.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28475.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28475):map__28475);
var eval_body = cljs.core.get.call(null,map__28475__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__28475__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__4115__auto__ = eval_body;
if(cljs.core.truth_(and__4115__auto__)){
return typeof eval_body === 'string';
} else {
return and__4115__auto__;
}
})())){
var code = eval_body;
try{figwheel.client.utils.debug_prn.call(null,["Evaling file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e28477){var e = e28477;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Unable to evaluate ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.expand_files = (function figwheel$client$file_reloading$expand_files(files){
var deps = figwheel.client.file_reloading.get_all_dependents.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,cljs.core.partial.call(null,cljs.core.re_matches,/figwheel\.connect.*/),new cljs.core.Keyword(null,"namespace","namespace",-377510372)),cljs.core.map.call(null,(function (n){
var temp__5718__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,(function (p1__28478_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__28478_SHARP_),n);
}),files));
if(cljs.core.truth_(temp__5718__auto__)){
var file_msg = temp__5718__auto__;
return file_msg;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372),new cljs.core.Keyword(null,"namespace","namespace",-377510372),n], null);
}
}),deps));
});
figwheel.client.file_reloading.sort_files = (function figwheel$client$file_reloading$sort_files(files){
if((cljs.core.count.call(null,files) <= (1))){
return files;
} else {
var keep_files = cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,keep_files,new cljs.core.Keyword(null,"namespace","namespace",-377510372)),figwheel.client.file_reloading.expand_files.call(null,files));
}
});
figwheel.client.file_reloading.get_figwheel_always = (function figwheel$client$file_reloading$get_figwheel_always(){
return cljs.core.map.call(null,(function (p__28479){
var vec__28480 = p__28479;
var k = cljs.core.nth.call(null,vec__28480,(0),null);
var v = cljs.core.nth.call(null,vec__28480,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__28483){
var vec__28484 = p__28483;
var k = cljs.core.nth.call(null,vec__28484,(0),null);
var v = cljs.core.nth.call(null,vec__28484,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__28490,p__28491){
var map__28492 = p__28490;
var map__28492__$1 = (((((!((map__28492 == null))))?(((((map__28492.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28492.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28492):map__28492);
var opts = map__28492__$1;
var before_jsload = cljs.core.get.call(null,map__28492__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__28492__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__28492__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__28493 = p__28491;
var map__28493__$1 = (((((!((map__28493 == null))))?(((((map__28493.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28493.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28493):map__28493);
var msg = map__28493__$1;
var files = cljs.core.get.call(null,map__28493__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__28493__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__28493__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__25937__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__25938__auto__ = (function (){var switch__25842__auto__ = (function (state_28647){
var state_val_28648 = (state_28647[(1)]);
if((state_val_28648 === (7))){
var inst_28507 = (state_28647[(7)]);
var inst_28508 = (state_28647[(8)]);
var inst_28509 = (state_28647[(9)]);
var inst_28510 = (state_28647[(10)]);
var inst_28515 = cljs.core._nth.call(null,inst_28508,inst_28510);
var inst_28516 = figwheel.client.file_reloading.eval_body.call(null,inst_28515,opts);
var inst_28517 = (inst_28510 + (1));
var tmp28649 = inst_28507;
var tmp28650 = inst_28508;
var tmp28651 = inst_28509;
var inst_28507__$1 = tmp28649;
var inst_28508__$1 = tmp28650;
var inst_28509__$1 = tmp28651;
var inst_28510__$1 = inst_28517;
var state_28647__$1 = (function (){var statearr_28652 = state_28647;
(statearr_28652[(7)] = inst_28507__$1);

(statearr_28652[(8)] = inst_28508__$1);

(statearr_28652[(9)] = inst_28509__$1);

(statearr_28652[(10)] = inst_28510__$1);

(statearr_28652[(11)] = inst_28516);

return statearr_28652;
})();
var statearr_28653_28736 = state_28647__$1;
(statearr_28653_28736[(2)] = null);

(statearr_28653_28736[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28648 === (20))){
var inst_28550 = (state_28647[(12)]);
var inst_28558 = figwheel.client.file_reloading.sort_files.call(null,inst_28550);
var state_28647__$1 = state_28647;
var statearr_28654_28737 = state_28647__$1;
(statearr_28654_28737[(2)] = inst_28558);

(statearr_28654_28737[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28648 === (27))){
var state_28647__$1 = state_28647;
var statearr_28655_28738 = state_28647__$1;
(statearr_28655_28738[(2)] = null);

(statearr_28655_28738[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28648 === (1))){
var inst_28499 = (state_28647[(13)]);
var inst_28496 = before_jsload.call(null,files);
var inst_28497 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_28498 = (function (){return (function (p1__28487_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__28487_SHARP_);
});
})();
var inst_28499__$1 = cljs.core.filter.call(null,inst_28498,files);
var inst_28500 = cljs.core.not_empty.call(null,inst_28499__$1);
var state_28647__$1 = (function (){var statearr_28656 = state_28647;
(statearr_28656[(13)] = inst_28499__$1);

(statearr_28656[(14)] = inst_28496);

(statearr_28656[(15)] = inst_28497);

return statearr_28656;
})();
if(cljs.core.truth_(inst_28500)){
var statearr_28657_28739 = state_28647__$1;
(statearr_28657_28739[(1)] = (2));

} else {
var statearr_28658_28740 = state_28647__$1;
(statearr_28658_28740[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28648 === (24))){
var state_28647__$1 = state_28647;
var statearr_28659_28741 = state_28647__$1;
(statearr_28659_28741[(2)] = null);

(statearr_28659_28741[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28648 === (39))){
var inst_28600 = (state_28647[(16)]);
var state_28647__$1 = state_28647;
var statearr_28660_28742 = state_28647__$1;
(statearr_28660_28742[(2)] = inst_28600);

(statearr_28660_28742[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28648 === (46))){
var inst_28642 = (state_28647[(2)]);
var state_28647__$1 = state_28647;
var statearr_28661_28743 = state_28647__$1;
(statearr_28661_28743[(2)] = inst_28642);

(statearr_28661_28743[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28648 === (4))){
var inst_28544 = (state_28647[(2)]);
var inst_28545 = cljs.core.List.EMPTY;
var inst_28546 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_28545);
var inst_28547 = (function (){return (function (p1__28488_SHARP_){
var and__4115__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__28488_SHARP_);
if(cljs.core.truth_(and__4115__auto__)){
return ((cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__28488_SHARP_))) && (cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,p1__28488_SHARP_))));
} else {
return and__4115__auto__;
}
});
})();
var inst_28548 = cljs.core.filter.call(null,inst_28547,files);
var inst_28549 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_28550 = cljs.core.concat.call(null,inst_28548,inst_28549);
var state_28647__$1 = (function (){var statearr_28662 = state_28647;
(statearr_28662[(17)] = inst_28544);

(statearr_28662[(12)] = inst_28550);

(statearr_28662[(18)] = inst_28546);

return statearr_28662;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_28663_28744 = state_28647__$1;
(statearr_28663_28744[(1)] = (16));

} else {
var statearr_28664_28745 = state_28647__$1;
(statearr_28664_28745[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28648 === (15))){
var inst_28534 = (state_28647[(2)]);
var state_28647__$1 = state_28647;
var statearr_28665_28746 = state_28647__$1;
(statearr_28665_28746[(2)] = inst_28534);

(statearr_28665_28746[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28648 === (21))){
var inst_28560 = (state_28647[(19)]);
var inst_28560__$1 = (state_28647[(2)]);
var inst_28561 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_28560__$1);
var state_28647__$1 = (function (){var statearr_28666 = state_28647;
(statearr_28666[(19)] = inst_28560__$1);

return statearr_28666;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28647__$1,(22),inst_28561);
} else {
if((state_val_28648 === (31))){
var inst_28645 = (state_28647[(2)]);
var state_28647__$1 = state_28647;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28647__$1,inst_28645);
} else {
if((state_val_28648 === (32))){
var inst_28600 = (state_28647[(16)]);
var inst_28605 = inst_28600.cljs$lang$protocol_mask$partition0$;
var inst_28606 = (inst_28605 & (64));
var inst_28607 = inst_28600.cljs$core$ISeq$;
var inst_28608 = (cljs.core.PROTOCOL_SENTINEL === inst_28607);
var inst_28609 = ((inst_28606) || (inst_28608));
var state_28647__$1 = state_28647;
if(cljs.core.truth_(inst_28609)){
var statearr_28667_28747 = state_28647__$1;
(statearr_28667_28747[(1)] = (35));

} else {
var statearr_28668_28748 = state_28647__$1;
(statearr_28668_28748[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28648 === (40))){
var inst_28622 = (state_28647[(20)]);
var inst_28621 = (state_28647[(2)]);
var inst_28622__$1 = cljs.core.get.call(null,inst_28621,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_28623 = cljs.core.get.call(null,inst_28621,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_28624 = cljs.core.not_empty.call(null,inst_28622__$1);
var state_28647__$1 = (function (){var statearr_28669 = state_28647;
(statearr_28669[(21)] = inst_28623);

(statearr_28669[(20)] = inst_28622__$1);

return statearr_28669;
})();
if(cljs.core.truth_(inst_28624)){
var statearr_28670_28749 = state_28647__$1;
(statearr_28670_28749[(1)] = (41));

} else {
var statearr_28671_28750 = state_28647__$1;
(statearr_28671_28750[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28648 === (33))){
var state_28647__$1 = state_28647;
var statearr_28672_28751 = state_28647__$1;
(statearr_28672_28751[(2)] = false);

(statearr_28672_28751[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28648 === (13))){
var inst_28520 = (state_28647[(22)]);
var inst_28524 = cljs.core.chunk_first.call(null,inst_28520);
var inst_28525 = cljs.core.chunk_rest.call(null,inst_28520);
var inst_28526 = cljs.core.count.call(null,inst_28524);
var inst_28507 = inst_28525;
var inst_28508 = inst_28524;
var inst_28509 = inst_28526;
var inst_28510 = (0);
var state_28647__$1 = (function (){var statearr_28673 = state_28647;
(statearr_28673[(7)] = inst_28507);

(statearr_28673[(8)] = inst_28508);

(statearr_28673[(9)] = inst_28509);

(statearr_28673[(10)] = inst_28510);

return statearr_28673;
})();
var statearr_28674_28752 = state_28647__$1;
(statearr_28674_28752[(2)] = null);

(statearr_28674_28752[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28648 === (22))){
var inst_28563 = (state_28647[(23)]);
var inst_28564 = (state_28647[(24)]);
var inst_28560 = (state_28647[(19)]);
var inst_28568 = (state_28647[(25)]);
var inst_28563__$1 = (state_28647[(2)]);
var inst_28564__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_28563__$1);
var inst_28565 = (function (){var all_files = inst_28560;
var res_SINGLEQUOTE_ = inst_28563__$1;
var res = inst_28564__$1;
return (function (p1__28489_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__28489_SHARP_));
});
})();
var inst_28566 = cljs.core.filter.call(null,inst_28565,inst_28563__$1);
var inst_28567 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_28568__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_28567);
var inst_28569 = cljs.core.not_empty.call(null,inst_28568__$1);
var state_28647__$1 = (function (){var statearr_28675 = state_28647;
(statearr_28675[(23)] = inst_28563__$1);

(statearr_28675[(24)] = inst_28564__$1);

(statearr_28675[(25)] = inst_28568__$1);

(statearr_28675[(26)] = inst_28566);

return statearr_28675;
})();
if(cljs.core.truth_(inst_28569)){
var statearr_28676_28753 = state_28647__$1;
(statearr_28676_28753[(1)] = (23));

} else {
var statearr_28677_28754 = state_28647__$1;
(statearr_28677_28754[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28648 === (36))){
var state_28647__$1 = state_28647;
var statearr_28678_28755 = state_28647__$1;
(statearr_28678_28755[(2)] = false);

(statearr_28678_28755[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28648 === (41))){
var inst_28622 = (state_28647[(20)]);
var inst_28626 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_28627 = cljs.core.map.call(null,inst_28626,inst_28622);
var inst_28628 = cljs.core.pr_str.call(null,inst_28627);
var inst_28629 = ["figwheel-no-load meta-data: ",inst_28628].join('');
var inst_28630 = figwheel.client.utils.log.call(null,inst_28629);
var state_28647__$1 = state_28647;
var statearr_28679_28756 = state_28647__$1;
(statearr_28679_28756[(2)] = inst_28630);

(statearr_28679_28756[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28648 === (43))){
var inst_28623 = (state_28647[(21)]);
var inst_28633 = (state_28647[(2)]);
var inst_28634 = cljs.core.not_empty.call(null,inst_28623);
var state_28647__$1 = (function (){var statearr_28680 = state_28647;
(statearr_28680[(27)] = inst_28633);

return statearr_28680;
})();
if(cljs.core.truth_(inst_28634)){
var statearr_28681_28757 = state_28647__$1;
(statearr_28681_28757[(1)] = (44));

} else {
var statearr_28682_28758 = state_28647__$1;
(statearr_28682_28758[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28648 === (29))){
var inst_28600 = (state_28647[(16)]);
var inst_28563 = (state_28647[(23)]);
var inst_28564 = (state_28647[(24)]);
var inst_28560 = (state_28647[(19)]);
var inst_28568 = (state_28647[(25)]);
var inst_28566 = (state_28647[(26)]);
var inst_28596 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_28599 = (function (){var all_files = inst_28560;
var res_SINGLEQUOTE_ = inst_28563;
var res = inst_28564;
var files_not_loaded = inst_28566;
var dependencies_that_loaded = inst_28568;
return (function (p__28598){
var map__28683 = p__28598;
var map__28683__$1 = (((((!((map__28683 == null))))?(((((map__28683.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28683.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28683):map__28683);
var namespace = cljs.core.get.call(null,map__28683__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_data = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
if((meta_data == null)){
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);
} else {
if(cljs.core.truth_(meta_data.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179)))){
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179);
} else {
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);

}
}
});
})();
var inst_28600__$1 = cljs.core.group_by.call(null,inst_28599,inst_28566);
var inst_28602 = (inst_28600__$1 == null);
var inst_28603 = cljs.core.not.call(null,inst_28602);
var state_28647__$1 = (function (){var statearr_28685 = state_28647;
(statearr_28685[(16)] = inst_28600__$1);

(statearr_28685[(28)] = inst_28596);

return statearr_28685;
})();
if(inst_28603){
var statearr_28686_28759 = state_28647__$1;
(statearr_28686_28759[(1)] = (32));

} else {
var statearr_28687_28760 = state_28647__$1;
(statearr_28687_28760[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28648 === (44))){
var inst_28623 = (state_28647[(21)]);
var inst_28636 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_28623);
var inst_28637 = cljs.core.pr_str.call(null,inst_28636);
var inst_28638 = ["not required: ",inst_28637].join('');
var inst_28639 = figwheel.client.utils.log.call(null,inst_28638);
var state_28647__$1 = state_28647;
var statearr_28688_28761 = state_28647__$1;
(statearr_28688_28761[(2)] = inst_28639);

(statearr_28688_28761[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28648 === (6))){
var inst_28541 = (state_28647[(2)]);
var state_28647__$1 = state_28647;
var statearr_28689_28762 = state_28647__$1;
(statearr_28689_28762[(2)] = inst_28541);

(statearr_28689_28762[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28648 === (28))){
var inst_28566 = (state_28647[(26)]);
var inst_28593 = (state_28647[(2)]);
var inst_28594 = cljs.core.not_empty.call(null,inst_28566);
var state_28647__$1 = (function (){var statearr_28690 = state_28647;
(statearr_28690[(29)] = inst_28593);

return statearr_28690;
})();
if(cljs.core.truth_(inst_28594)){
var statearr_28691_28763 = state_28647__$1;
(statearr_28691_28763[(1)] = (29));

} else {
var statearr_28692_28764 = state_28647__$1;
(statearr_28692_28764[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28648 === (25))){
var inst_28564 = (state_28647[(24)]);
var inst_28580 = (state_28647[(2)]);
var inst_28581 = cljs.core.not_empty.call(null,inst_28564);
var state_28647__$1 = (function (){var statearr_28693 = state_28647;
(statearr_28693[(30)] = inst_28580);

return statearr_28693;
})();
if(cljs.core.truth_(inst_28581)){
var statearr_28694_28765 = state_28647__$1;
(statearr_28694_28765[(1)] = (26));

} else {
var statearr_28695_28766 = state_28647__$1;
(statearr_28695_28766[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28648 === (34))){
var inst_28616 = (state_28647[(2)]);
var state_28647__$1 = state_28647;
if(cljs.core.truth_(inst_28616)){
var statearr_28696_28767 = state_28647__$1;
(statearr_28696_28767[(1)] = (38));

} else {
var statearr_28697_28768 = state_28647__$1;
(statearr_28697_28768[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28648 === (17))){
var state_28647__$1 = state_28647;
var statearr_28698_28769 = state_28647__$1;
(statearr_28698_28769[(2)] = recompile_dependents);

(statearr_28698_28769[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28648 === (3))){
var state_28647__$1 = state_28647;
var statearr_28699_28770 = state_28647__$1;
(statearr_28699_28770[(2)] = null);

(statearr_28699_28770[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28648 === (12))){
var inst_28537 = (state_28647[(2)]);
var state_28647__$1 = state_28647;
var statearr_28700_28771 = state_28647__$1;
(statearr_28700_28771[(2)] = inst_28537);

(statearr_28700_28771[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28648 === (2))){
var inst_28499 = (state_28647[(13)]);
var inst_28506 = cljs.core.seq.call(null,inst_28499);
var inst_28507 = inst_28506;
var inst_28508 = null;
var inst_28509 = (0);
var inst_28510 = (0);
var state_28647__$1 = (function (){var statearr_28701 = state_28647;
(statearr_28701[(7)] = inst_28507);

(statearr_28701[(8)] = inst_28508);

(statearr_28701[(9)] = inst_28509);

(statearr_28701[(10)] = inst_28510);

return statearr_28701;
})();
var statearr_28702_28772 = state_28647__$1;
(statearr_28702_28772[(2)] = null);

(statearr_28702_28772[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28648 === (23))){
var inst_28563 = (state_28647[(23)]);
var inst_28564 = (state_28647[(24)]);
var inst_28560 = (state_28647[(19)]);
var inst_28568 = (state_28647[(25)]);
var inst_28566 = (state_28647[(26)]);
var inst_28571 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_28573 = (function (){var all_files = inst_28560;
var res_SINGLEQUOTE_ = inst_28563;
var res = inst_28564;
var files_not_loaded = inst_28566;
var dependencies_that_loaded = inst_28568;
return (function (p__28572){
var map__28703 = p__28572;
var map__28703__$1 = (((((!((map__28703 == null))))?(((((map__28703.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28703.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28703):map__28703);
var request_url = cljs.core.get.call(null,map__28703__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
})();
var inst_28574 = cljs.core.reverse.call(null,inst_28568);
var inst_28575 = cljs.core.map.call(null,inst_28573,inst_28574);
var inst_28576 = cljs.core.pr_str.call(null,inst_28575);
var inst_28577 = figwheel.client.utils.log.call(null,inst_28576);
var state_28647__$1 = (function (){var statearr_28705 = state_28647;
(statearr_28705[(31)] = inst_28571);

return statearr_28705;
})();
var statearr_28706_28773 = state_28647__$1;
(statearr_28706_28773[(2)] = inst_28577);

(statearr_28706_28773[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28648 === (35))){
var state_28647__$1 = state_28647;
var statearr_28707_28774 = state_28647__$1;
(statearr_28707_28774[(2)] = true);

(statearr_28707_28774[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28648 === (19))){
var inst_28550 = (state_28647[(12)]);
var inst_28556 = figwheel.client.file_reloading.expand_files.call(null,inst_28550);
var state_28647__$1 = state_28647;
var statearr_28708_28775 = state_28647__$1;
(statearr_28708_28775[(2)] = inst_28556);

(statearr_28708_28775[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28648 === (11))){
var state_28647__$1 = state_28647;
var statearr_28709_28776 = state_28647__$1;
(statearr_28709_28776[(2)] = null);

(statearr_28709_28776[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28648 === (9))){
var inst_28539 = (state_28647[(2)]);
var state_28647__$1 = state_28647;
var statearr_28710_28777 = state_28647__$1;
(statearr_28710_28777[(2)] = inst_28539);

(statearr_28710_28777[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28648 === (5))){
var inst_28509 = (state_28647[(9)]);
var inst_28510 = (state_28647[(10)]);
var inst_28512 = (inst_28510 < inst_28509);
var inst_28513 = inst_28512;
var state_28647__$1 = state_28647;
if(cljs.core.truth_(inst_28513)){
var statearr_28711_28778 = state_28647__$1;
(statearr_28711_28778[(1)] = (7));

} else {
var statearr_28712_28779 = state_28647__$1;
(statearr_28712_28779[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28648 === (14))){
var inst_28520 = (state_28647[(22)]);
var inst_28529 = cljs.core.first.call(null,inst_28520);
var inst_28530 = figwheel.client.file_reloading.eval_body.call(null,inst_28529,opts);
var inst_28531 = cljs.core.next.call(null,inst_28520);
var inst_28507 = inst_28531;
var inst_28508 = null;
var inst_28509 = (0);
var inst_28510 = (0);
var state_28647__$1 = (function (){var statearr_28713 = state_28647;
(statearr_28713[(7)] = inst_28507);

(statearr_28713[(8)] = inst_28508);

(statearr_28713[(32)] = inst_28530);

(statearr_28713[(9)] = inst_28509);

(statearr_28713[(10)] = inst_28510);

return statearr_28713;
})();
var statearr_28714_28780 = state_28647__$1;
(statearr_28714_28780[(2)] = null);

(statearr_28714_28780[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28648 === (45))){
var state_28647__$1 = state_28647;
var statearr_28715_28781 = state_28647__$1;
(statearr_28715_28781[(2)] = null);

(statearr_28715_28781[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28648 === (26))){
var inst_28563 = (state_28647[(23)]);
var inst_28564 = (state_28647[(24)]);
var inst_28560 = (state_28647[(19)]);
var inst_28568 = (state_28647[(25)]);
var inst_28566 = (state_28647[(26)]);
var inst_28583 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_28585 = (function (){var all_files = inst_28560;
var res_SINGLEQUOTE_ = inst_28563;
var res = inst_28564;
var files_not_loaded = inst_28566;
var dependencies_that_loaded = inst_28568;
return (function (p__28584){
var map__28716 = p__28584;
var map__28716__$1 = (((((!((map__28716 == null))))?(((((map__28716.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28716.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28716):map__28716);
var namespace = cljs.core.get.call(null,map__28716__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__28716__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
})();
var inst_28586 = cljs.core.map.call(null,inst_28585,inst_28564);
var inst_28587 = cljs.core.pr_str.call(null,inst_28586);
var inst_28588 = figwheel.client.utils.log.call(null,inst_28587);
var inst_28589 = (function (){var all_files = inst_28560;
var res_SINGLEQUOTE_ = inst_28563;
var res = inst_28564;
var files_not_loaded = inst_28566;
var dependencies_that_loaded = inst_28568;
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
})();
var inst_28590 = setTimeout(inst_28589,(10));
var state_28647__$1 = (function (){var statearr_28718 = state_28647;
(statearr_28718[(33)] = inst_28588);

(statearr_28718[(34)] = inst_28583);

return statearr_28718;
})();
var statearr_28719_28782 = state_28647__$1;
(statearr_28719_28782[(2)] = inst_28590);

(statearr_28719_28782[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28648 === (16))){
var state_28647__$1 = state_28647;
var statearr_28720_28783 = state_28647__$1;
(statearr_28720_28783[(2)] = reload_dependents);

(statearr_28720_28783[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28648 === (38))){
var inst_28600 = (state_28647[(16)]);
var inst_28618 = cljs.core.apply.call(null,cljs.core.hash_map,inst_28600);
var state_28647__$1 = state_28647;
var statearr_28721_28784 = state_28647__$1;
(statearr_28721_28784[(2)] = inst_28618);

(statearr_28721_28784[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28648 === (30))){
var state_28647__$1 = state_28647;
var statearr_28722_28785 = state_28647__$1;
(statearr_28722_28785[(2)] = null);

(statearr_28722_28785[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28648 === (10))){
var inst_28520 = (state_28647[(22)]);
var inst_28522 = cljs.core.chunked_seq_QMARK_.call(null,inst_28520);
var state_28647__$1 = state_28647;
if(inst_28522){
var statearr_28723_28786 = state_28647__$1;
(statearr_28723_28786[(1)] = (13));

} else {
var statearr_28724_28787 = state_28647__$1;
(statearr_28724_28787[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28648 === (18))){
var inst_28554 = (state_28647[(2)]);
var state_28647__$1 = state_28647;
if(cljs.core.truth_(inst_28554)){
var statearr_28725_28788 = state_28647__$1;
(statearr_28725_28788[(1)] = (19));

} else {
var statearr_28726_28789 = state_28647__$1;
(statearr_28726_28789[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28648 === (42))){
var state_28647__$1 = state_28647;
var statearr_28727_28790 = state_28647__$1;
(statearr_28727_28790[(2)] = null);

(statearr_28727_28790[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28648 === (37))){
var inst_28613 = (state_28647[(2)]);
var state_28647__$1 = state_28647;
var statearr_28728_28791 = state_28647__$1;
(statearr_28728_28791[(2)] = inst_28613);

(statearr_28728_28791[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28648 === (8))){
var inst_28507 = (state_28647[(7)]);
var inst_28520 = (state_28647[(22)]);
var inst_28520__$1 = cljs.core.seq.call(null,inst_28507);
var state_28647__$1 = (function (){var statearr_28729 = state_28647;
(statearr_28729[(22)] = inst_28520__$1);

return statearr_28729;
})();
if(inst_28520__$1){
var statearr_28730_28792 = state_28647__$1;
(statearr_28730_28792[(1)] = (10));

} else {
var statearr_28731_28793 = state_28647__$1;
(statearr_28731_28793[(1)] = (11));

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
var figwheel$client$file_reloading$reload_js_files_$_state_machine__25843__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__25843__auto____0 = (function (){
var statearr_28732 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28732[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__25843__auto__);

(statearr_28732[(1)] = (1));

return statearr_28732;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__25843__auto____1 = (function (state_28647){
while(true){
var ret_value__25844__auto__ = (function (){try{while(true){
var result__25845__auto__ = switch__25842__auto__.call(null,state_28647);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25845__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25845__auto__;
}
break;
}
}catch (e28733){if((e28733 instanceof Object)){
var ex__25846__auto__ = e28733;
var statearr_28734_28794 = state_28647;
(statearr_28734_28794[(5)] = ex__25846__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28647);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28733;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25844__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28795 = state_28647;
state_28647 = G__28795;
continue;
} else {
return ret_value__25844__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__25843__auto__ = function(state_28647){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__25843__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__25843__auto____1.call(this,state_28647);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__25843__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__25843__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__25843__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__25843__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__25843__auto__;
})()
})();
var state__25939__auto__ = (function (){var statearr_28735 = f__25938__auto__.call(null);
(statearr_28735[(6)] = c__25937__auto__);

return statearr_28735;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25939__auto__);
}));

return c__25937__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.protocol),"//"].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__28798,link){
var map__28799 = p__28798;
var map__28799__$1 = (((((!((map__28799 == null))))?(((((map__28799.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28799.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28799):map__28799);
var file = cljs.core.get.call(null,map__28799__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__5720__auto__ = link.href;
if(cljs.core.truth_(temp__5720__auto__)){
var link_href = temp__5720__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,(function (p1__28796_SHARP_,p2__28797_SHARP_){
if(cljs.core._EQ_.call(null,p1__28796_SHARP_,p2__28797_SHARP_)){
return p1__28796_SHARP_;
} else {
return false;
}
}),cljs.core.reverse.call(null,clojure.string.split.call(null,file,"/")),cljs.core.reverse.call(null,clojure.string.split.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href),"/")))));
var match_length = ((match).length);
var file_name_length = cljs.core.count.call(null,cljs.core.last.call(null,clojure.string.split.call(null,file,"/")));
if((match_length >= file_name_length)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"link-href","link-href",-250644450),link_href,new cljs.core.Keyword(null,"match-length","match-length",1101537310),match_length,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083),((figwheel.client.file_reloading.truncate_url.call(null,link_href)).length)], null);
} else {
return null;
}
} else {
return null;
}
});
figwheel.client.file_reloading.get_correct_link = (function figwheel$client$file_reloading$get_correct_link(f_data){
var temp__5720__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__28802){
var map__28803 = p__28802;
var map__28803__$1 = (((((!((map__28803 == null))))?(((((map__28803.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28803.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28803):map__28803);
var match_length = cljs.core.get.call(null,map__28803__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__28803__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__28801_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__28801_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__5720__auto__)){
var res = temp__5720__auto__;
return new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(res);
} else {
return null;
}
});
figwheel.client.file_reloading.clone_link = (function figwheel$client$file_reloading$clone_link(link,url){
var clone = document.createElement("link");
(clone.rel = "stylesheet");

(clone.media = link.media);

(clone.disabled = link.disabled);

(clone.href = figwheel.client.file_reloading.add_cache_buster.call(null,url));

return clone;
});
figwheel.client.file_reloading.create_link = (function figwheel$client$file_reloading$create_link(url){
var link = document.createElement("link");
(link.rel = "stylesheet");

(link.href = figwheel.client.file_reloading.add_cache_buster.call(null,url));

return link;
});
figwheel.client.file_reloading.distinctify = (function figwheel$client$file_reloading$distinctify(key,seqq){
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__28805_SHARP_,p2__28806_SHARP_){
return cljs.core.assoc.call(null,p1__28805_SHARP_,cljs.core.get.call(null,p2__28806_SHARP_,key),p2__28806_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.add_link_to_document = (function figwheel$client$file_reloading$add_link_to_document(orig_link,klone,finished_fn){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout((function (){
parent.removeChild(orig_link);

return finished_fn.call(null);
}),(300));
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.reload_css_deferred_chain !== 'undefined')){
} else {
figwheel.client.file_reloading.reload_css_deferred_chain = cljs.core.atom.call(null,goog.async.Deferred.succeed());
}
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(f_data,fin){
var temp__5718__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__5718__auto__)){
var link = temp__5718__auto__;
return figwheel.client.file_reloading.add_link_to_document.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href),(function (){
return fin.call(null,cljs.core.assoc.call(null,f_data,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),true));
}));
} else {
return fin.call(null,f_data);
}
});
figwheel.client.file_reloading.reload_css_files_STAR_ = (function figwheel$client$file_reloading$reload_css_files_STAR_(deferred,f_datas,on_cssload){
return figwheel.client.utils.liftContD.call(null,figwheel.client.utils.mapConcatD.call(null,deferred,figwheel.client.file_reloading.reload_css_file,f_datas),(function (f_datas_SINGLEQUOTE_,fin){
var loaded_f_datas_28807 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),f_datas_SINGLEQUOTE_);
figwheel.client.file_reloading.on_cssload_custom_event.call(null,loaded_f_datas_28807);

if(cljs.core.fn_QMARK_.call(null,on_cssload)){
on_cssload.call(null,loaded_f_datas_28807);
} else {
}

return fin.call(null);
}));
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__28808,p__28809){
var map__28810 = p__28808;
var map__28810__$1 = (((((!((map__28810 == null))))?(((((map__28810.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28810.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28810):map__28810);
var on_cssload = cljs.core.get.call(null,map__28810__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var map__28811 = p__28809;
var map__28811__$1 = (((((!((map__28811 == null))))?(((((map__28811.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28811.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28811):map__28811);
var files_msg = map__28811__$1;
var files = cljs.core.get.call(null,map__28811__$1,new cljs.core.Keyword(null,"files","files",-472457450));
if(figwheel.client.utils.html_env_QMARK_.call(null)){
var temp__5720__auto__ = cljs.core.not_empty.call(null,figwheel.client.file_reloading.distinctify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files));
if(cljs.core.truth_(temp__5720__auto__)){
var f_datas = temp__5720__auto__;
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.reload_css_deferred_chain,figwheel.client.file_reloading.reload_css_files_STAR_,f_datas,on_cssload);
} else {
return null;
}
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1628173110375
