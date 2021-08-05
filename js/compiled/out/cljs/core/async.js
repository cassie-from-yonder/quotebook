// Compiled by ClojureScript 1.10.773 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('goog.array');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__25997 = arguments.length;
switch (G__25997) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
}));

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async25998 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25998 = (function (f,blockable,meta25999){
this.f = f;
this.blockable = blockable;
this.meta25999 = meta25999;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async25998.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26000,meta25999__$1){
var self__ = this;
var _26000__$1 = this;
return (new cljs.core.async.t_cljs$core$async25998(self__.f,self__.blockable,meta25999__$1));
}));

(cljs.core.async.t_cljs$core$async25998.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26000){
var self__ = this;
var _26000__$1 = this;
return self__.meta25999;
}));

(cljs.core.async.t_cljs$core$async25998.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async25998.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async25998.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async25998.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async25998.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta25999","meta25999",1888202928,null)], null);
}));

(cljs.core.async.t_cljs$core$async25998.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async25998.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25998");

(cljs.core.async.t_cljs$core$async25998.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"cljs.core.async/t_cljs$core$async25998");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async25998.
 */
cljs.core.async.__GT_t_cljs$core$async25998 = (function cljs$core$async$__GT_t_cljs$core$async25998(f__$1,blockable__$1,meta25999){
return (new cljs.core.async.t_cljs$core$async25998(f__$1,blockable__$1,meta25999));
});

}

return (new cljs.core.async.t_cljs$core$async25998(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
}));

(cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2);

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__26004 = arguments.length;
switch (G__26004) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
}));

(cljs.core.async.chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__26007 = arguments.length;
switch (G__26007) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.call(null,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.call(null,xform,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.call(null,cljs.core.async.impl.buffers.promise_buffer.call(null),xform,ex_handler);
}));

(cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__26010 = arguments.length;
switch (G__26010) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
}));

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_26012 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_26012);
} else {
cljs.core.async.impl.dispatch.run.call(null,(function (){
return fn1.call(null,val_26012);
}));
}
} else {
}

return null;
}));

(cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3);

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn1 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn1 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__26014 = arguments.length;
switch (G__26014) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5718__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5718__auto__)){
var ret = temp__5718__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5718__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__5718__auto__)){
var retb = temp__5718__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,(function (){
return fn1.call(null,ret);
}));
}

return ret;
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4);

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__4613__auto___26016 = n;
var x_26017 = (0);
while(true){
if((x_26017 < n__4613__auto___26016)){
(a[x_26017] = x_26017);

var G__26018 = (x_26017 + (1));
x_26017 = G__26018;
continue;
} else {
}
break;
}

goog.array.shuffle(a);

return a;
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async26019 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async26019 = (function (flag,meta26020){
this.flag = flag;
this.meta26020 = meta26020;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async26019.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26021,meta26020__$1){
var self__ = this;
var _26021__$1 = this;
return (new cljs.core.async.t_cljs$core$async26019(self__.flag,meta26020__$1));
}));

(cljs.core.async.t_cljs$core$async26019.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26021){
var self__ = this;
var _26021__$1 = this;
return self__.meta26020;
}));

(cljs.core.async.t_cljs$core$async26019.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async26019.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
}));

(cljs.core.async.t_cljs$core$async26019.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async26019.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async26019.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta26020","meta26020",-778330353,null)], null);
}));

(cljs.core.async.t_cljs$core$async26019.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async26019.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async26019");

(cljs.core.async.t_cljs$core$async26019.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"cljs.core.async/t_cljs$core$async26019");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async26019.
 */
cljs.core.async.__GT_t_cljs$core$async26019 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async26019(flag__$1,meta26020){
return (new cljs.core.async.t_cljs$core$async26019(flag__$1,meta26020));
});

}

return (new cljs.core.async.t_cljs$core$async26019(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async26022 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async26022 = (function (flag,cb,meta26023){
this.flag = flag;
this.cb = cb;
this.meta26023 = meta26023;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async26022.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26024,meta26023__$1){
var self__ = this;
var _26024__$1 = this;
return (new cljs.core.async.t_cljs$core$async26022(self__.flag,self__.cb,meta26023__$1));
}));

(cljs.core.async.t_cljs$core$async26022.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26024){
var self__ = this;
var _26024__$1 = this;
return self__.meta26023;
}));

(cljs.core.async.t_cljs$core$async26022.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async26022.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
}));

(cljs.core.async.t_cljs$core$async26022.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async26022.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async26022.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta26023","meta26023",-1109084382,null)], null);
}));

(cljs.core.async.t_cljs$core$async26022.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async26022.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async26022");

(cljs.core.async.t_cljs$core$async26022.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"cljs.core.async/t_cljs$core$async26022");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async26022.
 */
cljs.core.async.__GT_t_cljs$core$async26022 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async26022(flag__$1,cb__$1,meta26023){
return (new cljs.core.async.t_cljs$core$async26022(flag__$1,cb__$1,meta26023));
});

}

return (new cljs.core.async.t_cljs$core$async26022(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
if((cljs.core.count.call(null,ports) > (0))){
} else {
throw (new Error(["Assert failed: ","alts must have at least one channel operation","\n","(pos? (count ports))"].join('')));
}

var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__26025_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__26025_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__26026_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__26026_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__4126__auto__ = wport;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return port;
}
})()], null));
} else {
var G__26027 = (i + (1));
i = G__26027;
continue;
}
} else {
return null;
}
break;
}
})();
var or__4126__auto__ = ret;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5720__auto__ = (function (){var and__4115__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__4115__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__4115__auto__;
}
})();
if(cljs.core.truth_(temp__5720__auto__)){
var got = temp__5720__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___26033 = arguments.length;
var i__4737__auto___26034 = (0);
while(true){
if((i__4737__auto___26034 < len__4736__auto___26033)){
args__4742__auto__.push((arguments[i__4737__auto___26034]));

var G__26035 = (i__4737__auto___26034 + (1));
i__4737__auto___26034 = G__26035;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__26030){
var map__26031 = p__26030;
var map__26031__$1 = (((((!((map__26031 == null))))?(((((map__26031.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26031.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26031):map__26031);
var opts = map__26031__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq26028){
var G__26029 = cljs.core.first.call(null,seq26028);
var seq26028__$1 = cljs.core.next.call(null,seq26028);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__26029,seq26028__$1);
}));

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__26037 = arguments.length;
switch (G__26037) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
}));

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__25937__auto___26083 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__25938__auto__ = (function (){var switch__25842__auto__ = (function (state_26061){
var state_val_26062 = (state_26061[(1)]);
if((state_val_26062 === (7))){
var inst_26057 = (state_26061[(2)]);
var state_26061__$1 = state_26061;
var statearr_26063_26084 = state_26061__$1;
(statearr_26063_26084[(2)] = inst_26057);

(statearr_26063_26084[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26062 === (1))){
var state_26061__$1 = state_26061;
var statearr_26064_26085 = state_26061__$1;
(statearr_26064_26085[(2)] = null);

(statearr_26064_26085[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26062 === (4))){
var inst_26040 = (state_26061[(7)]);
var inst_26040__$1 = (state_26061[(2)]);
var inst_26041 = (inst_26040__$1 == null);
var state_26061__$1 = (function (){var statearr_26065 = state_26061;
(statearr_26065[(7)] = inst_26040__$1);

return statearr_26065;
})();
if(cljs.core.truth_(inst_26041)){
var statearr_26066_26086 = state_26061__$1;
(statearr_26066_26086[(1)] = (5));

} else {
var statearr_26067_26087 = state_26061__$1;
(statearr_26067_26087[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26062 === (13))){
var state_26061__$1 = state_26061;
var statearr_26068_26088 = state_26061__$1;
(statearr_26068_26088[(2)] = null);

(statearr_26068_26088[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26062 === (6))){
var inst_26040 = (state_26061[(7)]);
var state_26061__$1 = state_26061;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26061__$1,(11),to,inst_26040);
} else {
if((state_val_26062 === (3))){
var inst_26059 = (state_26061[(2)]);
var state_26061__$1 = state_26061;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26061__$1,inst_26059);
} else {
if((state_val_26062 === (12))){
var state_26061__$1 = state_26061;
var statearr_26069_26089 = state_26061__$1;
(statearr_26069_26089[(2)] = null);

(statearr_26069_26089[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26062 === (2))){
var state_26061__$1 = state_26061;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26061__$1,(4),from);
} else {
if((state_val_26062 === (11))){
var inst_26050 = (state_26061[(2)]);
var state_26061__$1 = state_26061;
if(cljs.core.truth_(inst_26050)){
var statearr_26070_26090 = state_26061__$1;
(statearr_26070_26090[(1)] = (12));

} else {
var statearr_26071_26091 = state_26061__$1;
(statearr_26071_26091[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26062 === (9))){
var state_26061__$1 = state_26061;
var statearr_26072_26092 = state_26061__$1;
(statearr_26072_26092[(2)] = null);

(statearr_26072_26092[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26062 === (5))){
var state_26061__$1 = state_26061;
if(cljs.core.truth_(close_QMARK_)){
var statearr_26073_26093 = state_26061__$1;
(statearr_26073_26093[(1)] = (8));

} else {
var statearr_26074_26094 = state_26061__$1;
(statearr_26074_26094[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26062 === (14))){
var inst_26055 = (state_26061[(2)]);
var state_26061__$1 = state_26061;
var statearr_26075_26095 = state_26061__$1;
(statearr_26075_26095[(2)] = inst_26055);

(statearr_26075_26095[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26062 === (10))){
var inst_26047 = (state_26061[(2)]);
var state_26061__$1 = state_26061;
var statearr_26076_26096 = state_26061__$1;
(statearr_26076_26096[(2)] = inst_26047);

(statearr_26076_26096[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26062 === (8))){
var inst_26044 = cljs.core.async.close_BANG_.call(null,to);
var state_26061__$1 = state_26061;
var statearr_26077_26097 = state_26061__$1;
(statearr_26077_26097[(2)] = inst_26044);

(statearr_26077_26097[(1)] = (10));


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
});
return (function() {
var cljs$core$async$state_machine__25843__auto__ = null;
var cljs$core$async$state_machine__25843__auto____0 = (function (){
var statearr_26078 = [null,null,null,null,null,null,null,null];
(statearr_26078[(0)] = cljs$core$async$state_machine__25843__auto__);

(statearr_26078[(1)] = (1));

return statearr_26078;
});
var cljs$core$async$state_machine__25843__auto____1 = (function (state_26061){
while(true){
var ret_value__25844__auto__ = (function (){try{while(true){
var result__25845__auto__ = switch__25842__auto__.call(null,state_26061);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25845__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25845__auto__;
}
break;
}
}catch (e26079){if((e26079 instanceof Object)){
var ex__25846__auto__ = e26079;
var statearr_26080_26098 = state_26061;
(statearr_26080_26098[(5)] = ex__25846__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26061);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26079;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25844__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26099 = state_26061;
state_26061 = G__26099;
continue;
} else {
return ret_value__25844__auto__;
}
break;
}
});
cljs$core$async$state_machine__25843__auto__ = function(state_26061){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__25843__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__25843__auto____1.call(this,state_26061);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__25843__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__25843__auto____0;
cljs$core$async$state_machine__25843__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__25843__auto____1;
return cljs$core$async$state_machine__25843__auto__;
})()
})();
var state__25939__auto__ = (function (){var statearr_26081 = f__25938__auto__.call(null);
(statearr_26081[(6)] = c__25937__auto___26083);

return statearr_26081;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25939__auto__);
}));


return to;
}));

(cljs.core.async.pipe.cljs$lang$maxFixedArity = 3);

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = (function (p__26100){
var vec__26101 = p__26100;
var v = cljs.core.nth.call(null,vec__26101,(0),null);
var p = cljs.core.nth.call(null,vec__26101,(1),null);
var job = vec__26101;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__25937__auto___26272 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__25938__auto__ = (function (){var switch__25842__auto__ = (function (state_26108){
var state_val_26109 = (state_26108[(1)]);
if((state_val_26109 === (1))){
var state_26108__$1 = state_26108;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26108__$1,(2),res,v);
} else {
if((state_val_26109 === (2))){
var inst_26105 = (state_26108[(2)]);
var inst_26106 = cljs.core.async.close_BANG_.call(null,res);
var state_26108__$1 = (function (){var statearr_26110 = state_26108;
(statearr_26110[(7)] = inst_26105);

return statearr_26110;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26108__$1,inst_26106);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__25843__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__25843__auto____0 = (function (){
var statearr_26111 = [null,null,null,null,null,null,null,null];
(statearr_26111[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__25843__auto__);

(statearr_26111[(1)] = (1));

return statearr_26111;
});
var cljs$core$async$pipeline_STAR__$_state_machine__25843__auto____1 = (function (state_26108){
while(true){
var ret_value__25844__auto__ = (function (){try{while(true){
var result__25845__auto__ = switch__25842__auto__.call(null,state_26108);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25845__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25845__auto__;
}
break;
}
}catch (e26112){if((e26112 instanceof Object)){
var ex__25846__auto__ = e26112;
var statearr_26113_26273 = state_26108;
(statearr_26113_26273[(5)] = ex__25846__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26108);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26112;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25844__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26274 = state_26108;
state_26108 = G__26274;
continue;
} else {
return ret_value__25844__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__25843__auto__ = function(state_26108){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__25843__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__25843__auto____1.call(this,state_26108);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__25843__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__25843__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__25843__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__25843__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__25843__auto__;
})()
})();
var state__25939__auto__ = (function (){var statearr_26114 = f__25938__auto__.call(null);
(statearr_26114[(6)] = c__25937__auto___26272);

return statearr_26114;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25939__auto__);
}));


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});
var async = (function (p__26115){
var vec__26116 = p__26115;
var v = cljs.core.nth.call(null,vec__26116,(0),null);
var p = cljs.core.nth.call(null,vec__26116,(1),null);
var job = vec__26116;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});
var n__4613__auto___26275 = n;
var __26276 = (0);
while(true){
if((__26276 < n__4613__auto___26275)){
var G__26119_26277 = type;
var G__26119_26278__$1 = (((G__26119_26277 instanceof cljs.core.Keyword))?G__26119_26277.fqn:null);
switch (G__26119_26278__$1) {
case "compute":
var c__25937__auto___26280 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__26276,c__25937__auto___26280,G__26119_26277,G__26119_26278__$1,n__4613__auto___26275,jobs,results,process,async){
return (function (){
var f__25938__auto__ = (function (){var switch__25842__auto__ = ((function (__26276,c__25937__auto___26280,G__26119_26277,G__26119_26278__$1,n__4613__auto___26275,jobs,results,process,async){
return (function (state_26132){
var state_val_26133 = (state_26132[(1)]);
if((state_val_26133 === (1))){
var state_26132__$1 = state_26132;
var statearr_26134_26281 = state_26132__$1;
(statearr_26134_26281[(2)] = null);

(statearr_26134_26281[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26133 === (2))){
var state_26132__$1 = state_26132;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26132__$1,(4),jobs);
} else {
if((state_val_26133 === (3))){
var inst_26130 = (state_26132[(2)]);
var state_26132__$1 = state_26132;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26132__$1,inst_26130);
} else {
if((state_val_26133 === (4))){
var inst_26122 = (state_26132[(2)]);
var inst_26123 = process.call(null,inst_26122);
var state_26132__$1 = state_26132;
if(cljs.core.truth_(inst_26123)){
var statearr_26135_26282 = state_26132__$1;
(statearr_26135_26282[(1)] = (5));

} else {
var statearr_26136_26283 = state_26132__$1;
(statearr_26136_26283[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26133 === (5))){
var state_26132__$1 = state_26132;
var statearr_26137_26284 = state_26132__$1;
(statearr_26137_26284[(2)] = null);

(statearr_26137_26284[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26133 === (6))){
var state_26132__$1 = state_26132;
var statearr_26138_26285 = state_26132__$1;
(statearr_26138_26285[(2)] = null);

(statearr_26138_26285[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26133 === (7))){
var inst_26128 = (state_26132[(2)]);
var state_26132__$1 = state_26132;
var statearr_26139_26286 = state_26132__$1;
(statearr_26139_26286[(2)] = inst_26128);

(statearr_26139_26286[(1)] = (3));


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
});})(__26276,c__25937__auto___26280,G__26119_26277,G__26119_26278__$1,n__4613__auto___26275,jobs,results,process,async))
;
return ((function (__26276,switch__25842__auto__,c__25937__auto___26280,G__26119_26277,G__26119_26278__$1,n__4613__auto___26275,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__25843__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__25843__auto____0 = (function (){
var statearr_26140 = [null,null,null,null,null,null,null];
(statearr_26140[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__25843__auto__);

(statearr_26140[(1)] = (1));

return statearr_26140;
});
var cljs$core$async$pipeline_STAR__$_state_machine__25843__auto____1 = (function (state_26132){
while(true){
var ret_value__25844__auto__ = (function (){try{while(true){
var result__25845__auto__ = switch__25842__auto__.call(null,state_26132);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25845__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25845__auto__;
}
break;
}
}catch (e26141){if((e26141 instanceof Object)){
var ex__25846__auto__ = e26141;
var statearr_26142_26287 = state_26132;
(statearr_26142_26287[(5)] = ex__25846__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26132);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26141;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25844__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26288 = state_26132;
state_26132 = G__26288;
continue;
} else {
return ret_value__25844__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__25843__auto__ = function(state_26132){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__25843__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__25843__auto____1.call(this,state_26132);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__25843__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__25843__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__25843__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__25843__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__25843__auto__;
})()
;})(__26276,switch__25842__auto__,c__25937__auto___26280,G__26119_26277,G__26119_26278__$1,n__4613__auto___26275,jobs,results,process,async))
})();
var state__25939__auto__ = (function (){var statearr_26143 = f__25938__auto__.call(null);
(statearr_26143[(6)] = c__25937__auto___26280);

return statearr_26143;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25939__auto__);
});})(__26276,c__25937__auto___26280,G__26119_26277,G__26119_26278__$1,n__4613__auto___26275,jobs,results,process,async))
);


break;
case "async":
var c__25937__auto___26289 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__26276,c__25937__auto___26289,G__26119_26277,G__26119_26278__$1,n__4613__auto___26275,jobs,results,process,async){
return (function (){
var f__25938__auto__ = (function (){var switch__25842__auto__ = ((function (__26276,c__25937__auto___26289,G__26119_26277,G__26119_26278__$1,n__4613__auto___26275,jobs,results,process,async){
return (function (state_26156){
var state_val_26157 = (state_26156[(1)]);
if((state_val_26157 === (1))){
var state_26156__$1 = state_26156;
var statearr_26158_26290 = state_26156__$1;
(statearr_26158_26290[(2)] = null);

(statearr_26158_26290[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26157 === (2))){
var state_26156__$1 = state_26156;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26156__$1,(4),jobs);
} else {
if((state_val_26157 === (3))){
var inst_26154 = (state_26156[(2)]);
var state_26156__$1 = state_26156;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26156__$1,inst_26154);
} else {
if((state_val_26157 === (4))){
var inst_26146 = (state_26156[(2)]);
var inst_26147 = async.call(null,inst_26146);
var state_26156__$1 = state_26156;
if(cljs.core.truth_(inst_26147)){
var statearr_26159_26291 = state_26156__$1;
(statearr_26159_26291[(1)] = (5));

} else {
var statearr_26160_26292 = state_26156__$1;
(statearr_26160_26292[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26157 === (5))){
var state_26156__$1 = state_26156;
var statearr_26161_26293 = state_26156__$1;
(statearr_26161_26293[(2)] = null);

(statearr_26161_26293[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26157 === (6))){
var state_26156__$1 = state_26156;
var statearr_26162_26294 = state_26156__$1;
(statearr_26162_26294[(2)] = null);

(statearr_26162_26294[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26157 === (7))){
var inst_26152 = (state_26156[(2)]);
var state_26156__$1 = state_26156;
var statearr_26163_26295 = state_26156__$1;
(statearr_26163_26295[(2)] = inst_26152);

(statearr_26163_26295[(1)] = (3));


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
});})(__26276,c__25937__auto___26289,G__26119_26277,G__26119_26278__$1,n__4613__auto___26275,jobs,results,process,async))
;
return ((function (__26276,switch__25842__auto__,c__25937__auto___26289,G__26119_26277,G__26119_26278__$1,n__4613__auto___26275,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__25843__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__25843__auto____0 = (function (){
var statearr_26164 = [null,null,null,null,null,null,null];
(statearr_26164[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__25843__auto__);

(statearr_26164[(1)] = (1));

return statearr_26164;
});
var cljs$core$async$pipeline_STAR__$_state_machine__25843__auto____1 = (function (state_26156){
while(true){
var ret_value__25844__auto__ = (function (){try{while(true){
var result__25845__auto__ = switch__25842__auto__.call(null,state_26156);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25845__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25845__auto__;
}
break;
}
}catch (e26165){if((e26165 instanceof Object)){
var ex__25846__auto__ = e26165;
var statearr_26166_26296 = state_26156;
(statearr_26166_26296[(5)] = ex__25846__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26156);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26165;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25844__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26297 = state_26156;
state_26156 = G__26297;
continue;
} else {
return ret_value__25844__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__25843__auto__ = function(state_26156){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__25843__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__25843__auto____1.call(this,state_26156);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__25843__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__25843__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__25843__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__25843__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__25843__auto__;
})()
;})(__26276,switch__25842__auto__,c__25937__auto___26289,G__26119_26277,G__26119_26278__$1,n__4613__auto___26275,jobs,results,process,async))
})();
var state__25939__auto__ = (function (){var statearr_26167 = f__25938__auto__.call(null);
(statearr_26167[(6)] = c__25937__auto___26289);

return statearr_26167;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25939__auto__);
});})(__26276,c__25937__auto___26289,G__26119_26277,G__26119_26278__$1,n__4613__auto___26275,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__26119_26278__$1)].join('')));

}

var G__26298 = (__26276 + (1));
__26276 = G__26298;
continue;
} else {
}
break;
}

var c__25937__auto___26299 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__25938__auto__ = (function (){var switch__25842__auto__ = (function (state_26189){
var state_val_26190 = (state_26189[(1)]);
if((state_val_26190 === (7))){
var inst_26185 = (state_26189[(2)]);
var state_26189__$1 = state_26189;
var statearr_26191_26300 = state_26189__$1;
(statearr_26191_26300[(2)] = inst_26185);

(statearr_26191_26300[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26190 === (1))){
var state_26189__$1 = state_26189;
var statearr_26192_26301 = state_26189__$1;
(statearr_26192_26301[(2)] = null);

(statearr_26192_26301[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26190 === (4))){
var inst_26170 = (state_26189[(7)]);
var inst_26170__$1 = (state_26189[(2)]);
var inst_26171 = (inst_26170__$1 == null);
var state_26189__$1 = (function (){var statearr_26193 = state_26189;
(statearr_26193[(7)] = inst_26170__$1);

return statearr_26193;
})();
if(cljs.core.truth_(inst_26171)){
var statearr_26194_26302 = state_26189__$1;
(statearr_26194_26302[(1)] = (5));

} else {
var statearr_26195_26303 = state_26189__$1;
(statearr_26195_26303[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26190 === (6))){
var inst_26170 = (state_26189[(7)]);
var inst_26175 = (state_26189[(8)]);
var inst_26175__$1 = cljs.core.async.chan.call(null,(1));
var inst_26176 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_26177 = [inst_26170,inst_26175__$1];
var inst_26178 = (new cljs.core.PersistentVector(null,2,(5),inst_26176,inst_26177,null));
var state_26189__$1 = (function (){var statearr_26196 = state_26189;
(statearr_26196[(8)] = inst_26175__$1);

return statearr_26196;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26189__$1,(8),jobs,inst_26178);
} else {
if((state_val_26190 === (3))){
var inst_26187 = (state_26189[(2)]);
var state_26189__$1 = state_26189;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26189__$1,inst_26187);
} else {
if((state_val_26190 === (2))){
var state_26189__$1 = state_26189;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26189__$1,(4),from);
} else {
if((state_val_26190 === (9))){
var inst_26182 = (state_26189[(2)]);
var state_26189__$1 = (function (){var statearr_26197 = state_26189;
(statearr_26197[(9)] = inst_26182);

return statearr_26197;
})();
var statearr_26198_26304 = state_26189__$1;
(statearr_26198_26304[(2)] = null);

(statearr_26198_26304[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26190 === (5))){
var inst_26173 = cljs.core.async.close_BANG_.call(null,jobs);
var state_26189__$1 = state_26189;
var statearr_26199_26305 = state_26189__$1;
(statearr_26199_26305[(2)] = inst_26173);

(statearr_26199_26305[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26190 === (8))){
var inst_26175 = (state_26189[(8)]);
var inst_26180 = (state_26189[(2)]);
var state_26189__$1 = (function (){var statearr_26200 = state_26189;
(statearr_26200[(10)] = inst_26180);

return statearr_26200;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26189__$1,(9),results,inst_26175);
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
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__25843__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__25843__auto____0 = (function (){
var statearr_26201 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_26201[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__25843__auto__);

(statearr_26201[(1)] = (1));

return statearr_26201;
});
var cljs$core$async$pipeline_STAR__$_state_machine__25843__auto____1 = (function (state_26189){
while(true){
var ret_value__25844__auto__ = (function (){try{while(true){
var result__25845__auto__ = switch__25842__auto__.call(null,state_26189);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25845__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25845__auto__;
}
break;
}
}catch (e26202){if((e26202 instanceof Object)){
var ex__25846__auto__ = e26202;
var statearr_26203_26306 = state_26189;
(statearr_26203_26306[(5)] = ex__25846__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26189);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26202;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25844__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26307 = state_26189;
state_26189 = G__26307;
continue;
} else {
return ret_value__25844__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__25843__auto__ = function(state_26189){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__25843__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__25843__auto____1.call(this,state_26189);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__25843__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__25843__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__25843__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__25843__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__25843__auto__;
})()
})();
var state__25939__auto__ = (function (){var statearr_26204 = f__25938__auto__.call(null);
(statearr_26204[(6)] = c__25937__auto___26299);

return statearr_26204;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25939__auto__);
}));


var c__25937__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__25938__auto__ = (function (){var switch__25842__auto__ = (function (state_26242){
var state_val_26243 = (state_26242[(1)]);
if((state_val_26243 === (7))){
var inst_26238 = (state_26242[(2)]);
var state_26242__$1 = state_26242;
var statearr_26244_26308 = state_26242__$1;
(statearr_26244_26308[(2)] = inst_26238);

(statearr_26244_26308[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26243 === (20))){
var state_26242__$1 = state_26242;
var statearr_26245_26309 = state_26242__$1;
(statearr_26245_26309[(2)] = null);

(statearr_26245_26309[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26243 === (1))){
var state_26242__$1 = state_26242;
var statearr_26246_26310 = state_26242__$1;
(statearr_26246_26310[(2)] = null);

(statearr_26246_26310[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26243 === (4))){
var inst_26207 = (state_26242[(7)]);
var inst_26207__$1 = (state_26242[(2)]);
var inst_26208 = (inst_26207__$1 == null);
var state_26242__$1 = (function (){var statearr_26247 = state_26242;
(statearr_26247[(7)] = inst_26207__$1);

return statearr_26247;
})();
if(cljs.core.truth_(inst_26208)){
var statearr_26248_26311 = state_26242__$1;
(statearr_26248_26311[(1)] = (5));

} else {
var statearr_26249_26312 = state_26242__$1;
(statearr_26249_26312[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26243 === (15))){
var inst_26220 = (state_26242[(8)]);
var state_26242__$1 = state_26242;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26242__$1,(18),to,inst_26220);
} else {
if((state_val_26243 === (21))){
var inst_26233 = (state_26242[(2)]);
var state_26242__$1 = state_26242;
var statearr_26250_26313 = state_26242__$1;
(statearr_26250_26313[(2)] = inst_26233);

(statearr_26250_26313[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26243 === (13))){
var inst_26235 = (state_26242[(2)]);
var state_26242__$1 = (function (){var statearr_26251 = state_26242;
(statearr_26251[(9)] = inst_26235);

return statearr_26251;
})();
var statearr_26252_26314 = state_26242__$1;
(statearr_26252_26314[(2)] = null);

(statearr_26252_26314[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26243 === (6))){
var inst_26207 = (state_26242[(7)]);
var state_26242__$1 = state_26242;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26242__$1,(11),inst_26207);
} else {
if((state_val_26243 === (17))){
var inst_26228 = (state_26242[(2)]);
var state_26242__$1 = state_26242;
if(cljs.core.truth_(inst_26228)){
var statearr_26253_26315 = state_26242__$1;
(statearr_26253_26315[(1)] = (19));

} else {
var statearr_26254_26316 = state_26242__$1;
(statearr_26254_26316[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26243 === (3))){
var inst_26240 = (state_26242[(2)]);
var state_26242__$1 = state_26242;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26242__$1,inst_26240);
} else {
if((state_val_26243 === (12))){
var inst_26217 = (state_26242[(10)]);
var state_26242__$1 = state_26242;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26242__$1,(14),inst_26217);
} else {
if((state_val_26243 === (2))){
var state_26242__$1 = state_26242;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26242__$1,(4),results);
} else {
if((state_val_26243 === (19))){
var state_26242__$1 = state_26242;
var statearr_26255_26317 = state_26242__$1;
(statearr_26255_26317[(2)] = null);

(statearr_26255_26317[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26243 === (11))){
var inst_26217 = (state_26242[(2)]);
var state_26242__$1 = (function (){var statearr_26256 = state_26242;
(statearr_26256[(10)] = inst_26217);

return statearr_26256;
})();
var statearr_26257_26318 = state_26242__$1;
(statearr_26257_26318[(2)] = null);

(statearr_26257_26318[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26243 === (9))){
var state_26242__$1 = state_26242;
var statearr_26258_26319 = state_26242__$1;
(statearr_26258_26319[(2)] = null);

(statearr_26258_26319[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26243 === (5))){
var state_26242__$1 = state_26242;
if(cljs.core.truth_(close_QMARK_)){
var statearr_26259_26320 = state_26242__$1;
(statearr_26259_26320[(1)] = (8));

} else {
var statearr_26260_26321 = state_26242__$1;
(statearr_26260_26321[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26243 === (14))){
var inst_26220 = (state_26242[(8)]);
var inst_26220__$1 = (state_26242[(2)]);
var inst_26221 = (inst_26220__$1 == null);
var inst_26222 = cljs.core.not.call(null,inst_26221);
var state_26242__$1 = (function (){var statearr_26261 = state_26242;
(statearr_26261[(8)] = inst_26220__$1);

return statearr_26261;
})();
if(inst_26222){
var statearr_26262_26322 = state_26242__$1;
(statearr_26262_26322[(1)] = (15));

} else {
var statearr_26263_26323 = state_26242__$1;
(statearr_26263_26323[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26243 === (16))){
var state_26242__$1 = state_26242;
var statearr_26264_26324 = state_26242__$1;
(statearr_26264_26324[(2)] = false);

(statearr_26264_26324[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26243 === (10))){
var inst_26214 = (state_26242[(2)]);
var state_26242__$1 = state_26242;
var statearr_26265_26325 = state_26242__$1;
(statearr_26265_26325[(2)] = inst_26214);

(statearr_26265_26325[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26243 === (18))){
var inst_26225 = (state_26242[(2)]);
var state_26242__$1 = state_26242;
var statearr_26266_26326 = state_26242__$1;
(statearr_26266_26326[(2)] = inst_26225);

(statearr_26266_26326[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26243 === (8))){
var inst_26211 = cljs.core.async.close_BANG_.call(null,to);
var state_26242__$1 = state_26242;
var statearr_26267_26327 = state_26242__$1;
(statearr_26267_26327[(2)] = inst_26211);

(statearr_26267_26327[(1)] = (10));


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
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__25843__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__25843__auto____0 = (function (){
var statearr_26268 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_26268[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__25843__auto__);

(statearr_26268[(1)] = (1));

return statearr_26268;
});
var cljs$core$async$pipeline_STAR__$_state_machine__25843__auto____1 = (function (state_26242){
while(true){
var ret_value__25844__auto__ = (function (){try{while(true){
var result__25845__auto__ = switch__25842__auto__.call(null,state_26242);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25845__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25845__auto__;
}
break;
}
}catch (e26269){if((e26269 instanceof Object)){
var ex__25846__auto__ = e26269;
var statearr_26270_26328 = state_26242;
(statearr_26270_26328[(5)] = ex__25846__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26242);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26269;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25844__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26329 = state_26242;
state_26242 = G__26329;
continue;
} else {
return ret_value__25844__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__25843__auto__ = function(state_26242){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__25843__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__25843__auto____1.call(this,state_26242);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__25843__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__25843__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__25843__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__25843__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__25843__auto__;
})()
})();
var state__25939__auto__ = (function (){var statearr_26271 = f__25938__auto__.call(null);
(statearr_26271[(6)] = c__25937__auto__);

return statearr_26271;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25939__auto__);
}));

return c__25937__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__26331 = arguments.length;
switch (G__26331) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
}));

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
}));

(cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5);

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__26334 = arguments.length;
switch (G__26334) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
}));

(cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6);

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__26337 = arguments.length;
switch (G__26337) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
}));

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__25937__auto___26386 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__25938__auto__ = (function (){var switch__25842__auto__ = (function (state_26363){
var state_val_26364 = (state_26363[(1)]);
if((state_val_26364 === (7))){
var inst_26359 = (state_26363[(2)]);
var state_26363__$1 = state_26363;
var statearr_26365_26387 = state_26363__$1;
(statearr_26365_26387[(2)] = inst_26359);

(statearr_26365_26387[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26364 === (1))){
var state_26363__$1 = state_26363;
var statearr_26366_26388 = state_26363__$1;
(statearr_26366_26388[(2)] = null);

(statearr_26366_26388[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26364 === (4))){
var inst_26340 = (state_26363[(7)]);
var inst_26340__$1 = (state_26363[(2)]);
var inst_26341 = (inst_26340__$1 == null);
var state_26363__$1 = (function (){var statearr_26367 = state_26363;
(statearr_26367[(7)] = inst_26340__$1);

return statearr_26367;
})();
if(cljs.core.truth_(inst_26341)){
var statearr_26368_26389 = state_26363__$1;
(statearr_26368_26389[(1)] = (5));

} else {
var statearr_26369_26390 = state_26363__$1;
(statearr_26369_26390[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26364 === (13))){
var state_26363__$1 = state_26363;
var statearr_26370_26391 = state_26363__$1;
(statearr_26370_26391[(2)] = null);

(statearr_26370_26391[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26364 === (6))){
var inst_26340 = (state_26363[(7)]);
var inst_26346 = p.call(null,inst_26340);
var state_26363__$1 = state_26363;
if(cljs.core.truth_(inst_26346)){
var statearr_26371_26392 = state_26363__$1;
(statearr_26371_26392[(1)] = (9));

} else {
var statearr_26372_26393 = state_26363__$1;
(statearr_26372_26393[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26364 === (3))){
var inst_26361 = (state_26363[(2)]);
var state_26363__$1 = state_26363;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26363__$1,inst_26361);
} else {
if((state_val_26364 === (12))){
var state_26363__$1 = state_26363;
var statearr_26373_26394 = state_26363__$1;
(statearr_26373_26394[(2)] = null);

(statearr_26373_26394[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26364 === (2))){
var state_26363__$1 = state_26363;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26363__$1,(4),ch);
} else {
if((state_val_26364 === (11))){
var inst_26340 = (state_26363[(7)]);
var inst_26350 = (state_26363[(2)]);
var state_26363__$1 = state_26363;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26363__$1,(8),inst_26350,inst_26340);
} else {
if((state_val_26364 === (9))){
var state_26363__$1 = state_26363;
var statearr_26374_26395 = state_26363__$1;
(statearr_26374_26395[(2)] = tc);

(statearr_26374_26395[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26364 === (5))){
var inst_26343 = cljs.core.async.close_BANG_.call(null,tc);
var inst_26344 = cljs.core.async.close_BANG_.call(null,fc);
var state_26363__$1 = (function (){var statearr_26375 = state_26363;
(statearr_26375[(8)] = inst_26343);

return statearr_26375;
})();
var statearr_26376_26396 = state_26363__$1;
(statearr_26376_26396[(2)] = inst_26344);

(statearr_26376_26396[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26364 === (14))){
var inst_26357 = (state_26363[(2)]);
var state_26363__$1 = state_26363;
var statearr_26377_26397 = state_26363__$1;
(statearr_26377_26397[(2)] = inst_26357);

(statearr_26377_26397[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26364 === (10))){
var state_26363__$1 = state_26363;
var statearr_26378_26398 = state_26363__$1;
(statearr_26378_26398[(2)] = fc);

(statearr_26378_26398[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26364 === (8))){
var inst_26352 = (state_26363[(2)]);
var state_26363__$1 = state_26363;
if(cljs.core.truth_(inst_26352)){
var statearr_26379_26399 = state_26363__$1;
(statearr_26379_26399[(1)] = (12));

} else {
var statearr_26380_26400 = state_26363__$1;
(statearr_26380_26400[(1)] = (13));

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
});
return (function() {
var cljs$core$async$state_machine__25843__auto__ = null;
var cljs$core$async$state_machine__25843__auto____0 = (function (){
var statearr_26381 = [null,null,null,null,null,null,null,null,null];
(statearr_26381[(0)] = cljs$core$async$state_machine__25843__auto__);

(statearr_26381[(1)] = (1));

return statearr_26381;
});
var cljs$core$async$state_machine__25843__auto____1 = (function (state_26363){
while(true){
var ret_value__25844__auto__ = (function (){try{while(true){
var result__25845__auto__ = switch__25842__auto__.call(null,state_26363);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25845__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25845__auto__;
}
break;
}
}catch (e26382){if((e26382 instanceof Object)){
var ex__25846__auto__ = e26382;
var statearr_26383_26401 = state_26363;
(statearr_26383_26401[(5)] = ex__25846__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26363);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26382;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25844__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26402 = state_26363;
state_26363 = G__26402;
continue;
} else {
return ret_value__25844__auto__;
}
break;
}
});
cljs$core$async$state_machine__25843__auto__ = function(state_26363){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__25843__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__25843__auto____1.call(this,state_26363);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__25843__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__25843__auto____0;
cljs$core$async$state_machine__25843__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__25843__auto____1;
return cljs$core$async$state_machine__25843__auto__;
})()
})();
var state__25939__auto__ = (function (){var statearr_26384 = f__25938__auto__.call(null);
(statearr_26384[(6)] = c__25937__auto___26386);

return statearr_26384;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25939__auto__);
}));


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
}));

(cljs.core.async.split.cljs$lang$maxFixedArity = 4);

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__25937__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__25938__auto__ = (function (){var switch__25842__auto__ = (function (state_26423){
var state_val_26424 = (state_26423[(1)]);
if((state_val_26424 === (7))){
var inst_26419 = (state_26423[(2)]);
var state_26423__$1 = state_26423;
var statearr_26425_26443 = state_26423__$1;
(statearr_26425_26443[(2)] = inst_26419);

(statearr_26425_26443[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26424 === (1))){
var inst_26403 = init;
var state_26423__$1 = (function (){var statearr_26426 = state_26423;
(statearr_26426[(7)] = inst_26403);

return statearr_26426;
})();
var statearr_26427_26444 = state_26423__$1;
(statearr_26427_26444[(2)] = null);

(statearr_26427_26444[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26424 === (4))){
var inst_26406 = (state_26423[(8)]);
var inst_26406__$1 = (state_26423[(2)]);
var inst_26407 = (inst_26406__$1 == null);
var state_26423__$1 = (function (){var statearr_26428 = state_26423;
(statearr_26428[(8)] = inst_26406__$1);

return statearr_26428;
})();
if(cljs.core.truth_(inst_26407)){
var statearr_26429_26445 = state_26423__$1;
(statearr_26429_26445[(1)] = (5));

} else {
var statearr_26430_26446 = state_26423__$1;
(statearr_26430_26446[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26424 === (6))){
var inst_26406 = (state_26423[(8)]);
var inst_26403 = (state_26423[(7)]);
var inst_26410 = (state_26423[(9)]);
var inst_26410__$1 = f.call(null,inst_26403,inst_26406);
var inst_26411 = cljs.core.reduced_QMARK_.call(null,inst_26410__$1);
var state_26423__$1 = (function (){var statearr_26431 = state_26423;
(statearr_26431[(9)] = inst_26410__$1);

return statearr_26431;
})();
if(inst_26411){
var statearr_26432_26447 = state_26423__$1;
(statearr_26432_26447[(1)] = (8));

} else {
var statearr_26433_26448 = state_26423__$1;
(statearr_26433_26448[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26424 === (3))){
var inst_26421 = (state_26423[(2)]);
var state_26423__$1 = state_26423;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26423__$1,inst_26421);
} else {
if((state_val_26424 === (2))){
var state_26423__$1 = state_26423;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26423__$1,(4),ch);
} else {
if((state_val_26424 === (9))){
var inst_26410 = (state_26423[(9)]);
var inst_26403 = inst_26410;
var state_26423__$1 = (function (){var statearr_26434 = state_26423;
(statearr_26434[(7)] = inst_26403);

return statearr_26434;
})();
var statearr_26435_26449 = state_26423__$1;
(statearr_26435_26449[(2)] = null);

(statearr_26435_26449[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26424 === (5))){
var inst_26403 = (state_26423[(7)]);
var state_26423__$1 = state_26423;
var statearr_26436_26450 = state_26423__$1;
(statearr_26436_26450[(2)] = inst_26403);

(statearr_26436_26450[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26424 === (10))){
var inst_26417 = (state_26423[(2)]);
var state_26423__$1 = state_26423;
var statearr_26437_26451 = state_26423__$1;
(statearr_26437_26451[(2)] = inst_26417);

(statearr_26437_26451[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26424 === (8))){
var inst_26410 = (state_26423[(9)]);
var inst_26413 = cljs.core.deref.call(null,inst_26410);
var state_26423__$1 = state_26423;
var statearr_26438_26452 = state_26423__$1;
(statearr_26438_26452[(2)] = inst_26413);

(statearr_26438_26452[(1)] = (10));


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
});
return (function() {
var cljs$core$async$reduce_$_state_machine__25843__auto__ = null;
var cljs$core$async$reduce_$_state_machine__25843__auto____0 = (function (){
var statearr_26439 = [null,null,null,null,null,null,null,null,null,null];
(statearr_26439[(0)] = cljs$core$async$reduce_$_state_machine__25843__auto__);

(statearr_26439[(1)] = (1));

return statearr_26439;
});
var cljs$core$async$reduce_$_state_machine__25843__auto____1 = (function (state_26423){
while(true){
var ret_value__25844__auto__ = (function (){try{while(true){
var result__25845__auto__ = switch__25842__auto__.call(null,state_26423);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25845__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25845__auto__;
}
break;
}
}catch (e26440){if((e26440 instanceof Object)){
var ex__25846__auto__ = e26440;
var statearr_26441_26453 = state_26423;
(statearr_26441_26453[(5)] = ex__25846__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26423);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26440;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25844__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26454 = state_26423;
state_26423 = G__26454;
continue;
} else {
return ret_value__25844__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__25843__auto__ = function(state_26423){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__25843__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__25843__auto____1.call(this,state_26423);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__25843__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__25843__auto____0;
cljs$core$async$reduce_$_state_machine__25843__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__25843__auto____1;
return cljs$core$async$reduce_$_state_machine__25843__auto__;
})()
})();
var state__25939__auto__ = (function (){var statearr_26442 = f__25938__auto__.call(null);
(statearr_26442[(6)] = c__25937__auto__);

return statearr_26442;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25939__auto__);
}));

return c__25937__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__25937__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__25938__auto__ = (function (){var switch__25842__auto__ = (function (state_26460){
var state_val_26461 = (state_26460[(1)]);
if((state_val_26461 === (1))){
var inst_26455 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_26460__$1 = state_26460;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26460__$1,(2),inst_26455);
} else {
if((state_val_26461 === (2))){
var inst_26457 = (state_26460[(2)]);
var inst_26458 = f__$1.call(null,inst_26457);
var state_26460__$1 = state_26460;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26460__$1,inst_26458);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__25843__auto__ = null;
var cljs$core$async$transduce_$_state_machine__25843__auto____0 = (function (){
var statearr_26462 = [null,null,null,null,null,null,null];
(statearr_26462[(0)] = cljs$core$async$transduce_$_state_machine__25843__auto__);

(statearr_26462[(1)] = (1));

return statearr_26462;
});
var cljs$core$async$transduce_$_state_machine__25843__auto____1 = (function (state_26460){
while(true){
var ret_value__25844__auto__ = (function (){try{while(true){
var result__25845__auto__ = switch__25842__auto__.call(null,state_26460);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25845__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25845__auto__;
}
break;
}
}catch (e26463){if((e26463 instanceof Object)){
var ex__25846__auto__ = e26463;
var statearr_26464_26466 = state_26460;
(statearr_26464_26466[(5)] = ex__25846__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26460);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26463;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25844__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26467 = state_26460;
state_26460 = G__26467;
continue;
} else {
return ret_value__25844__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__25843__auto__ = function(state_26460){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__25843__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__25843__auto____1.call(this,state_26460);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__25843__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__25843__auto____0;
cljs$core$async$transduce_$_state_machine__25843__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__25843__auto____1;
return cljs$core$async$transduce_$_state_machine__25843__auto__;
})()
})();
var state__25939__auto__ = (function (){var statearr_26465 = f__25938__auto__.call(null);
(statearr_26465[(6)] = c__25937__auto__);

return statearr_26465;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25939__auto__);
}));

return c__25937__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__26469 = arguments.length;
switch (G__26469) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
}));

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__25937__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__25938__auto__ = (function (){var switch__25842__auto__ = (function (state_26494){
var state_val_26495 = (state_26494[(1)]);
if((state_val_26495 === (7))){
var inst_26476 = (state_26494[(2)]);
var state_26494__$1 = state_26494;
var statearr_26496_26517 = state_26494__$1;
(statearr_26496_26517[(2)] = inst_26476);

(statearr_26496_26517[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26495 === (1))){
var inst_26470 = cljs.core.seq.call(null,coll);
var inst_26471 = inst_26470;
var state_26494__$1 = (function (){var statearr_26497 = state_26494;
(statearr_26497[(7)] = inst_26471);

return statearr_26497;
})();
var statearr_26498_26518 = state_26494__$1;
(statearr_26498_26518[(2)] = null);

(statearr_26498_26518[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26495 === (4))){
var inst_26471 = (state_26494[(7)]);
var inst_26474 = cljs.core.first.call(null,inst_26471);
var state_26494__$1 = state_26494;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26494__$1,(7),ch,inst_26474);
} else {
if((state_val_26495 === (13))){
var inst_26488 = (state_26494[(2)]);
var state_26494__$1 = state_26494;
var statearr_26499_26519 = state_26494__$1;
(statearr_26499_26519[(2)] = inst_26488);

(statearr_26499_26519[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26495 === (6))){
var inst_26479 = (state_26494[(2)]);
var state_26494__$1 = state_26494;
if(cljs.core.truth_(inst_26479)){
var statearr_26500_26520 = state_26494__$1;
(statearr_26500_26520[(1)] = (8));

} else {
var statearr_26501_26521 = state_26494__$1;
(statearr_26501_26521[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26495 === (3))){
var inst_26492 = (state_26494[(2)]);
var state_26494__$1 = state_26494;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26494__$1,inst_26492);
} else {
if((state_val_26495 === (12))){
var state_26494__$1 = state_26494;
var statearr_26502_26522 = state_26494__$1;
(statearr_26502_26522[(2)] = null);

(statearr_26502_26522[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26495 === (2))){
var inst_26471 = (state_26494[(7)]);
var state_26494__$1 = state_26494;
if(cljs.core.truth_(inst_26471)){
var statearr_26503_26523 = state_26494__$1;
(statearr_26503_26523[(1)] = (4));

} else {
var statearr_26504_26524 = state_26494__$1;
(statearr_26504_26524[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26495 === (11))){
var inst_26485 = cljs.core.async.close_BANG_.call(null,ch);
var state_26494__$1 = state_26494;
var statearr_26505_26525 = state_26494__$1;
(statearr_26505_26525[(2)] = inst_26485);

(statearr_26505_26525[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26495 === (9))){
var state_26494__$1 = state_26494;
if(cljs.core.truth_(close_QMARK_)){
var statearr_26506_26526 = state_26494__$1;
(statearr_26506_26526[(1)] = (11));

} else {
var statearr_26507_26527 = state_26494__$1;
(statearr_26507_26527[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26495 === (5))){
var inst_26471 = (state_26494[(7)]);
var state_26494__$1 = state_26494;
var statearr_26508_26528 = state_26494__$1;
(statearr_26508_26528[(2)] = inst_26471);

(statearr_26508_26528[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26495 === (10))){
var inst_26490 = (state_26494[(2)]);
var state_26494__$1 = state_26494;
var statearr_26509_26529 = state_26494__$1;
(statearr_26509_26529[(2)] = inst_26490);

(statearr_26509_26529[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26495 === (8))){
var inst_26471 = (state_26494[(7)]);
var inst_26481 = cljs.core.next.call(null,inst_26471);
var inst_26471__$1 = inst_26481;
var state_26494__$1 = (function (){var statearr_26510 = state_26494;
(statearr_26510[(7)] = inst_26471__$1);

return statearr_26510;
})();
var statearr_26511_26530 = state_26494__$1;
(statearr_26511_26530[(2)] = null);

(statearr_26511_26530[(1)] = (2));


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
});
return (function() {
var cljs$core$async$state_machine__25843__auto__ = null;
var cljs$core$async$state_machine__25843__auto____0 = (function (){
var statearr_26512 = [null,null,null,null,null,null,null,null];
(statearr_26512[(0)] = cljs$core$async$state_machine__25843__auto__);

(statearr_26512[(1)] = (1));

return statearr_26512;
});
var cljs$core$async$state_machine__25843__auto____1 = (function (state_26494){
while(true){
var ret_value__25844__auto__ = (function (){try{while(true){
var result__25845__auto__ = switch__25842__auto__.call(null,state_26494);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25845__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25845__auto__;
}
break;
}
}catch (e26513){if((e26513 instanceof Object)){
var ex__25846__auto__ = e26513;
var statearr_26514_26531 = state_26494;
(statearr_26514_26531[(5)] = ex__25846__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26494);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26513;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25844__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26532 = state_26494;
state_26494 = G__26532;
continue;
} else {
return ret_value__25844__auto__;
}
break;
}
});
cljs$core$async$state_machine__25843__auto__ = function(state_26494){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__25843__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__25843__auto____1.call(this,state_26494);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__25843__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__25843__auto____0;
cljs$core$async$state_machine__25843__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__25843__auto____1;
return cljs$core$async$state_machine__25843__auto__;
})()
})();
var state__25939__auto__ = (function (){var statearr_26515 = f__25938__auto__.call(null);
(statearr_26515[(6)] = c__25937__auto__);

return statearr_26515;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25939__auto__);
}));

return c__25937__auto__;
}));

(cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

var cljs$core$async$Mux$muxch_STAR_$dyn_26533 = (function (_){
var x__4428__auto__ = (((_ == null))?null:_);
var m__4429__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,_);
} else {
var m__4426__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
});
cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
return cljs$core$async$Mux$muxch_STAR_$dyn_26533.call(null,_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_26534 = (function (m,ch,close_QMARK_){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__4426__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
});
cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
return cljs$core$async$Mult$tap_STAR_$dyn_26534.call(null,m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_26535 = (function (m,ch){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,m,ch);
} else {
var m__4426__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
});
cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mult$untap_STAR_$dyn_26535.call(null,m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_26536 = (function (m){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,m);
} else {
var m__4426__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
});
cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mult$untap_all_STAR_$dyn_26536.call(null,m);
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async26537 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async26537 = (function (ch,cs,meta26538){
this.ch = ch;
this.cs = cs;
this.meta26538 = meta26538;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async26537.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26539,meta26538__$1){
var self__ = this;
var _26539__$1 = this;
return (new cljs.core.async.t_cljs$core$async26537(self__.ch,self__.cs,meta26538__$1));
}));

(cljs.core.async.t_cljs$core$async26537.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26539){
var self__ = this;
var _26539__$1 = this;
return self__.meta26538;
}));

(cljs.core.async.t_cljs$core$async26537.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async26537.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async26537.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async26537.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async26537.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async26537.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async26537.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta26538","meta26538",823321289,null)], null);
}));

(cljs.core.async.t_cljs$core$async26537.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async26537.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async26537");

(cljs.core.async.t_cljs$core$async26537.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"cljs.core.async/t_cljs$core$async26537");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async26537.
 */
cljs.core.async.__GT_t_cljs$core$async26537 = (function cljs$core$async$mult_$___GT_t_cljs$core$async26537(ch__$1,cs__$1,meta26538){
return (new cljs.core.async.t_cljs$core$async26537(ch__$1,cs__$1,meta26538));
});

}

return (new cljs.core.async.t_cljs$core$async26537(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});
var c__25937__auto___26759 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__25938__auto__ = (function (){var switch__25842__auto__ = (function (state_26674){
var state_val_26675 = (state_26674[(1)]);
if((state_val_26675 === (7))){
var inst_26670 = (state_26674[(2)]);
var state_26674__$1 = state_26674;
var statearr_26676_26760 = state_26674__$1;
(statearr_26676_26760[(2)] = inst_26670);

(statearr_26676_26760[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26675 === (20))){
var inst_26573 = (state_26674[(7)]);
var inst_26585 = cljs.core.first.call(null,inst_26573);
var inst_26586 = cljs.core.nth.call(null,inst_26585,(0),null);
var inst_26587 = cljs.core.nth.call(null,inst_26585,(1),null);
var state_26674__$1 = (function (){var statearr_26677 = state_26674;
(statearr_26677[(8)] = inst_26586);

return statearr_26677;
})();
if(cljs.core.truth_(inst_26587)){
var statearr_26678_26761 = state_26674__$1;
(statearr_26678_26761[(1)] = (22));

} else {
var statearr_26679_26762 = state_26674__$1;
(statearr_26679_26762[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26675 === (27))){
var inst_26542 = (state_26674[(9)]);
var inst_26615 = (state_26674[(10)]);
var inst_26617 = (state_26674[(11)]);
var inst_26622 = (state_26674[(12)]);
var inst_26622__$1 = cljs.core._nth.call(null,inst_26615,inst_26617);
var inst_26623 = cljs.core.async.put_BANG_.call(null,inst_26622__$1,inst_26542,done);
var state_26674__$1 = (function (){var statearr_26680 = state_26674;
(statearr_26680[(12)] = inst_26622__$1);

return statearr_26680;
})();
if(cljs.core.truth_(inst_26623)){
var statearr_26681_26763 = state_26674__$1;
(statearr_26681_26763[(1)] = (30));

} else {
var statearr_26682_26764 = state_26674__$1;
(statearr_26682_26764[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26675 === (1))){
var state_26674__$1 = state_26674;
var statearr_26683_26765 = state_26674__$1;
(statearr_26683_26765[(2)] = null);

(statearr_26683_26765[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26675 === (24))){
var inst_26573 = (state_26674[(7)]);
var inst_26592 = (state_26674[(2)]);
var inst_26593 = cljs.core.next.call(null,inst_26573);
var inst_26551 = inst_26593;
var inst_26552 = null;
var inst_26553 = (0);
var inst_26554 = (0);
var state_26674__$1 = (function (){var statearr_26684 = state_26674;
(statearr_26684[(13)] = inst_26551);

(statearr_26684[(14)] = inst_26592);

(statearr_26684[(15)] = inst_26553);

(statearr_26684[(16)] = inst_26554);

(statearr_26684[(17)] = inst_26552);

return statearr_26684;
})();
var statearr_26685_26766 = state_26674__$1;
(statearr_26685_26766[(2)] = null);

(statearr_26685_26766[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26675 === (39))){
var state_26674__$1 = state_26674;
var statearr_26689_26767 = state_26674__$1;
(statearr_26689_26767[(2)] = null);

(statearr_26689_26767[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26675 === (4))){
var inst_26542 = (state_26674[(9)]);
var inst_26542__$1 = (state_26674[(2)]);
var inst_26543 = (inst_26542__$1 == null);
var state_26674__$1 = (function (){var statearr_26690 = state_26674;
(statearr_26690[(9)] = inst_26542__$1);

return statearr_26690;
})();
if(cljs.core.truth_(inst_26543)){
var statearr_26691_26768 = state_26674__$1;
(statearr_26691_26768[(1)] = (5));

} else {
var statearr_26692_26769 = state_26674__$1;
(statearr_26692_26769[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26675 === (15))){
var inst_26551 = (state_26674[(13)]);
var inst_26553 = (state_26674[(15)]);
var inst_26554 = (state_26674[(16)]);
var inst_26552 = (state_26674[(17)]);
var inst_26569 = (state_26674[(2)]);
var inst_26570 = (inst_26554 + (1));
var tmp26686 = inst_26551;
var tmp26687 = inst_26553;
var tmp26688 = inst_26552;
var inst_26551__$1 = tmp26686;
var inst_26552__$1 = tmp26688;
var inst_26553__$1 = tmp26687;
var inst_26554__$1 = inst_26570;
var state_26674__$1 = (function (){var statearr_26693 = state_26674;
(statearr_26693[(13)] = inst_26551__$1);

(statearr_26693[(18)] = inst_26569);

(statearr_26693[(15)] = inst_26553__$1);

(statearr_26693[(16)] = inst_26554__$1);

(statearr_26693[(17)] = inst_26552__$1);

return statearr_26693;
})();
var statearr_26694_26770 = state_26674__$1;
(statearr_26694_26770[(2)] = null);

(statearr_26694_26770[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26675 === (21))){
var inst_26596 = (state_26674[(2)]);
var state_26674__$1 = state_26674;
var statearr_26698_26771 = state_26674__$1;
(statearr_26698_26771[(2)] = inst_26596);

(statearr_26698_26771[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26675 === (31))){
var inst_26622 = (state_26674[(12)]);
var inst_26626 = done.call(null,null);
var inst_26627 = cljs.core.async.untap_STAR_.call(null,m,inst_26622);
var state_26674__$1 = (function (){var statearr_26699 = state_26674;
(statearr_26699[(19)] = inst_26626);

return statearr_26699;
})();
var statearr_26700_26772 = state_26674__$1;
(statearr_26700_26772[(2)] = inst_26627);

(statearr_26700_26772[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26675 === (32))){
var inst_26614 = (state_26674[(20)]);
var inst_26616 = (state_26674[(21)]);
var inst_26615 = (state_26674[(10)]);
var inst_26617 = (state_26674[(11)]);
var inst_26629 = (state_26674[(2)]);
var inst_26630 = (inst_26617 + (1));
var tmp26695 = inst_26614;
var tmp26696 = inst_26616;
var tmp26697 = inst_26615;
var inst_26614__$1 = tmp26695;
var inst_26615__$1 = tmp26697;
var inst_26616__$1 = tmp26696;
var inst_26617__$1 = inst_26630;
var state_26674__$1 = (function (){var statearr_26701 = state_26674;
(statearr_26701[(20)] = inst_26614__$1);

(statearr_26701[(22)] = inst_26629);

(statearr_26701[(21)] = inst_26616__$1);

(statearr_26701[(10)] = inst_26615__$1);

(statearr_26701[(11)] = inst_26617__$1);

return statearr_26701;
})();
var statearr_26702_26773 = state_26674__$1;
(statearr_26702_26773[(2)] = null);

(statearr_26702_26773[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26675 === (40))){
var inst_26642 = (state_26674[(23)]);
var inst_26646 = done.call(null,null);
var inst_26647 = cljs.core.async.untap_STAR_.call(null,m,inst_26642);
var state_26674__$1 = (function (){var statearr_26703 = state_26674;
(statearr_26703[(24)] = inst_26646);

return statearr_26703;
})();
var statearr_26704_26774 = state_26674__$1;
(statearr_26704_26774[(2)] = inst_26647);

(statearr_26704_26774[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26675 === (33))){
var inst_26633 = (state_26674[(25)]);
var inst_26635 = cljs.core.chunked_seq_QMARK_.call(null,inst_26633);
var state_26674__$1 = state_26674;
if(inst_26635){
var statearr_26705_26775 = state_26674__$1;
(statearr_26705_26775[(1)] = (36));

} else {
var statearr_26706_26776 = state_26674__$1;
(statearr_26706_26776[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26675 === (13))){
var inst_26563 = (state_26674[(26)]);
var inst_26566 = cljs.core.async.close_BANG_.call(null,inst_26563);
var state_26674__$1 = state_26674;
var statearr_26707_26777 = state_26674__$1;
(statearr_26707_26777[(2)] = inst_26566);

(statearr_26707_26777[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26675 === (22))){
var inst_26586 = (state_26674[(8)]);
var inst_26589 = cljs.core.async.close_BANG_.call(null,inst_26586);
var state_26674__$1 = state_26674;
var statearr_26708_26778 = state_26674__$1;
(statearr_26708_26778[(2)] = inst_26589);

(statearr_26708_26778[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26675 === (36))){
var inst_26633 = (state_26674[(25)]);
var inst_26637 = cljs.core.chunk_first.call(null,inst_26633);
var inst_26638 = cljs.core.chunk_rest.call(null,inst_26633);
var inst_26639 = cljs.core.count.call(null,inst_26637);
var inst_26614 = inst_26638;
var inst_26615 = inst_26637;
var inst_26616 = inst_26639;
var inst_26617 = (0);
var state_26674__$1 = (function (){var statearr_26709 = state_26674;
(statearr_26709[(20)] = inst_26614);

(statearr_26709[(21)] = inst_26616);

(statearr_26709[(10)] = inst_26615);

(statearr_26709[(11)] = inst_26617);

return statearr_26709;
})();
var statearr_26710_26779 = state_26674__$1;
(statearr_26710_26779[(2)] = null);

(statearr_26710_26779[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26675 === (41))){
var inst_26633 = (state_26674[(25)]);
var inst_26649 = (state_26674[(2)]);
var inst_26650 = cljs.core.next.call(null,inst_26633);
var inst_26614 = inst_26650;
var inst_26615 = null;
var inst_26616 = (0);
var inst_26617 = (0);
var state_26674__$1 = (function (){var statearr_26711 = state_26674;
(statearr_26711[(20)] = inst_26614);

(statearr_26711[(21)] = inst_26616);

(statearr_26711[(10)] = inst_26615);

(statearr_26711[(11)] = inst_26617);

(statearr_26711[(27)] = inst_26649);

return statearr_26711;
})();
var statearr_26712_26780 = state_26674__$1;
(statearr_26712_26780[(2)] = null);

(statearr_26712_26780[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26675 === (43))){
var state_26674__$1 = state_26674;
var statearr_26713_26781 = state_26674__$1;
(statearr_26713_26781[(2)] = null);

(statearr_26713_26781[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26675 === (29))){
var inst_26658 = (state_26674[(2)]);
var state_26674__$1 = state_26674;
var statearr_26714_26782 = state_26674__$1;
(statearr_26714_26782[(2)] = inst_26658);

(statearr_26714_26782[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26675 === (44))){
var inst_26667 = (state_26674[(2)]);
var state_26674__$1 = (function (){var statearr_26715 = state_26674;
(statearr_26715[(28)] = inst_26667);

return statearr_26715;
})();
var statearr_26716_26783 = state_26674__$1;
(statearr_26716_26783[(2)] = null);

(statearr_26716_26783[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26675 === (6))){
var inst_26606 = (state_26674[(29)]);
var inst_26605 = cljs.core.deref.call(null,cs);
var inst_26606__$1 = cljs.core.keys.call(null,inst_26605);
var inst_26607 = cljs.core.count.call(null,inst_26606__$1);
var inst_26608 = cljs.core.reset_BANG_.call(null,dctr,inst_26607);
var inst_26613 = cljs.core.seq.call(null,inst_26606__$1);
var inst_26614 = inst_26613;
var inst_26615 = null;
var inst_26616 = (0);
var inst_26617 = (0);
var state_26674__$1 = (function (){var statearr_26717 = state_26674;
(statearr_26717[(29)] = inst_26606__$1);

(statearr_26717[(20)] = inst_26614);

(statearr_26717[(30)] = inst_26608);

(statearr_26717[(21)] = inst_26616);

(statearr_26717[(10)] = inst_26615);

(statearr_26717[(11)] = inst_26617);

return statearr_26717;
})();
var statearr_26718_26784 = state_26674__$1;
(statearr_26718_26784[(2)] = null);

(statearr_26718_26784[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26675 === (28))){
var inst_26633 = (state_26674[(25)]);
var inst_26614 = (state_26674[(20)]);
var inst_26633__$1 = cljs.core.seq.call(null,inst_26614);
var state_26674__$1 = (function (){var statearr_26719 = state_26674;
(statearr_26719[(25)] = inst_26633__$1);

return statearr_26719;
})();
if(inst_26633__$1){
var statearr_26720_26785 = state_26674__$1;
(statearr_26720_26785[(1)] = (33));

} else {
var statearr_26721_26786 = state_26674__$1;
(statearr_26721_26786[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26675 === (25))){
var inst_26616 = (state_26674[(21)]);
var inst_26617 = (state_26674[(11)]);
var inst_26619 = (inst_26617 < inst_26616);
var inst_26620 = inst_26619;
var state_26674__$1 = state_26674;
if(cljs.core.truth_(inst_26620)){
var statearr_26722_26787 = state_26674__$1;
(statearr_26722_26787[(1)] = (27));

} else {
var statearr_26723_26788 = state_26674__$1;
(statearr_26723_26788[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26675 === (34))){
var state_26674__$1 = state_26674;
var statearr_26724_26789 = state_26674__$1;
(statearr_26724_26789[(2)] = null);

(statearr_26724_26789[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26675 === (17))){
var state_26674__$1 = state_26674;
var statearr_26725_26790 = state_26674__$1;
(statearr_26725_26790[(2)] = null);

(statearr_26725_26790[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26675 === (3))){
var inst_26672 = (state_26674[(2)]);
var state_26674__$1 = state_26674;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26674__$1,inst_26672);
} else {
if((state_val_26675 === (12))){
var inst_26601 = (state_26674[(2)]);
var state_26674__$1 = state_26674;
var statearr_26726_26791 = state_26674__$1;
(statearr_26726_26791[(2)] = inst_26601);

(statearr_26726_26791[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26675 === (2))){
var state_26674__$1 = state_26674;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26674__$1,(4),ch);
} else {
if((state_val_26675 === (23))){
var state_26674__$1 = state_26674;
var statearr_26727_26792 = state_26674__$1;
(statearr_26727_26792[(2)] = null);

(statearr_26727_26792[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26675 === (35))){
var inst_26656 = (state_26674[(2)]);
var state_26674__$1 = state_26674;
var statearr_26728_26793 = state_26674__$1;
(statearr_26728_26793[(2)] = inst_26656);

(statearr_26728_26793[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26675 === (19))){
var inst_26573 = (state_26674[(7)]);
var inst_26577 = cljs.core.chunk_first.call(null,inst_26573);
var inst_26578 = cljs.core.chunk_rest.call(null,inst_26573);
var inst_26579 = cljs.core.count.call(null,inst_26577);
var inst_26551 = inst_26578;
var inst_26552 = inst_26577;
var inst_26553 = inst_26579;
var inst_26554 = (0);
var state_26674__$1 = (function (){var statearr_26729 = state_26674;
(statearr_26729[(13)] = inst_26551);

(statearr_26729[(15)] = inst_26553);

(statearr_26729[(16)] = inst_26554);

(statearr_26729[(17)] = inst_26552);

return statearr_26729;
})();
var statearr_26730_26794 = state_26674__$1;
(statearr_26730_26794[(2)] = null);

(statearr_26730_26794[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26675 === (11))){
var inst_26551 = (state_26674[(13)]);
var inst_26573 = (state_26674[(7)]);
var inst_26573__$1 = cljs.core.seq.call(null,inst_26551);
var state_26674__$1 = (function (){var statearr_26731 = state_26674;
(statearr_26731[(7)] = inst_26573__$1);

return statearr_26731;
})();
if(inst_26573__$1){
var statearr_26732_26795 = state_26674__$1;
(statearr_26732_26795[(1)] = (16));

} else {
var statearr_26733_26796 = state_26674__$1;
(statearr_26733_26796[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26675 === (9))){
var inst_26603 = (state_26674[(2)]);
var state_26674__$1 = state_26674;
var statearr_26734_26797 = state_26674__$1;
(statearr_26734_26797[(2)] = inst_26603);

(statearr_26734_26797[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26675 === (5))){
var inst_26549 = cljs.core.deref.call(null,cs);
var inst_26550 = cljs.core.seq.call(null,inst_26549);
var inst_26551 = inst_26550;
var inst_26552 = null;
var inst_26553 = (0);
var inst_26554 = (0);
var state_26674__$1 = (function (){var statearr_26735 = state_26674;
(statearr_26735[(13)] = inst_26551);

(statearr_26735[(15)] = inst_26553);

(statearr_26735[(16)] = inst_26554);

(statearr_26735[(17)] = inst_26552);

return statearr_26735;
})();
var statearr_26736_26798 = state_26674__$1;
(statearr_26736_26798[(2)] = null);

(statearr_26736_26798[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26675 === (14))){
var state_26674__$1 = state_26674;
var statearr_26737_26799 = state_26674__$1;
(statearr_26737_26799[(2)] = null);

(statearr_26737_26799[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26675 === (45))){
var inst_26664 = (state_26674[(2)]);
var state_26674__$1 = state_26674;
var statearr_26738_26800 = state_26674__$1;
(statearr_26738_26800[(2)] = inst_26664);

(statearr_26738_26800[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26675 === (26))){
var inst_26606 = (state_26674[(29)]);
var inst_26660 = (state_26674[(2)]);
var inst_26661 = cljs.core.seq.call(null,inst_26606);
var state_26674__$1 = (function (){var statearr_26739 = state_26674;
(statearr_26739[(31)] = inst_26660);

return statearr_26739;
})();
if(inst_26661){
var statearr_26740_26801 = state_26674__$1;
(statearr_26740_26801[(1)] = (42));

} else {
var statearr_26741_26802 = state_26674__$1;
(statearr_26741_26802[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26675 === (16))){
var inst_26573 = (state_26674[(7)]);
var inst_26575 = cljs.core.chunked_seq_QMARK_.call(null,inst_26573);
var state_26674__$1 = state_26674;
if(inst_26575){
var statearr_26742_26803 = state_26674__$1;
(statearr_26742_26803[(1)] = (19));

} else {
var statearr_26743_26804 = state_26674__$1;
(statearr_26743_26804[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26675 === (38))){
var inst_26653 = (state_26674[(2)]);
var state_26674__$1 = state_26674;
var statearr_26744_26805 = state_26674__$1;
(statearr_26744_26805[(2)] = inst_26653);

(statearr_26744_26805[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26675 === (30))){
var state_26674__$1 = state_26674;
var statearr_26745_26806 = state_26674__$1;
(statearr_26745_26806[(2)] = null);

(statearr_26745_26806[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26675 === (10))){
var inst_26554 = (state_26674[(16)]);
var inst_26552 = (state_26674[(17)]);
var inst_26562 = cljs.core._nth.call(null,inst_26552,inst_26554);
var inst_26563 = cljs.core.nth.call(null,inst_26562,(0),null);
var inst_26564 = cljs.core.nth.call(null,inst_26562,(1),null);
var state_26674__$1 = (function (){var statearr_26746 = state_26674;
(statearr_26746[(26)] = inst_26563);

return statearr_26746;
})();
if(cljs.core.truth_(inst_26564)){
var statearr_26747_26807 = state_26674__$1;
(statearr_26747_26807[(1)] = (13));

} else {
var statearr_26748_26808 = state_26674__$1;
(statearr_26748_26808[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26675 === (18))){
var inst_26599 = (state_26674[(2)]);
var state_26674__$1 = state_26674;
var statearr_26749_26809 = state_26674__$1;
(statearr_26749_26809[(2)] = inst_26599);

(statearr_26749_26809[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26675 === (42))){
var state_26674__$1 = state_26674;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26674__$1,(45),dchan);
} else {
if((state_val_26675 === (37))){
var inst_26633 = (state_26674[(25)]);
var inst_26542 = (state_26674[(9)]);
var inst_26642 = (state_26674[(23)]);
var inst_26642__$1 = cljs.core.first.call(null,inst_26633);
var inst_26643 = cljs.core.async.put_BANG_.call(null,inst_26642__$1,inst_26542,done);
var state_26674__$1 = (function (){var statearr_26750 = state_26674;
(statearr_26750[(23)] = inst_26642__$1);

return statearr_26750;
})();
if(cljs.core.truth_(inst_26643)){
var statearr_26751_26810 = state_26674__$1;
(statearr_26751_26810[(1)] = (39));

} else {
var statearr_26752_26811 = state_26674__$1;
(statearr_26752_26811[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26675 === (8))){
var inst_26553 = (state_26674[(15)]);
var inst_26554 = (state_26674[(16)]);
var inst_26556 = (inst_26554 < inst_26553);
var inst_26557 = inst_26556;
var state_26674__$1 = state_26674;
if(cljs.core.truth_(inst_26557)){
var statearr_26753_26812 = state_26674__$1;
(statearr_26753_26812[(1)] = (10));

} else {
var statearr_26754_26813 = state_26674__$1;
(statearr_26754_26813[(1)] = (11));

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
});
return (function() {
var cljs$core$async$mult_$_state_machine__25843__auto__ = null;
var cljs$core$async$mult_$_state_machine__25843__auto____0 = (function (){
var statearr_26755 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26755[(0)] = cljs$core$async$mult_$_state_machine__25843__auto__);

(statearr_26755[(1)] = (1));

return statearr_26755;
});
var cljs$core$async$mult_$_state_machine__25843__auto____1 = (function (state_26674){
while(true){
var ret_value__25844__auto__ = (function (){try{while(true){
var result__25845__auto__ = switch__25842__auto__.call(null,state_26674);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25845__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25845__auto__;
}
break;
}
}catch (e26756){if((e26756 instanceof Object)){
var ex__25846__auto__ = e26756;
var statearr_26757_26814 = state_26674;
(statearr_26757_26814[(5)] = ex__25846__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26674);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26756;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25844__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26815 = state_26674;
state_26674 = G__26815;
continue;
} else {
return ret_value__25844__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__25843__auto__ = function(state_26674){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__25843__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__25843__auto____1.call(this,state_26674);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__25843__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__25843__auto____0;
cljs$core$async$mult_$_state_machine__25843__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__25843__auto____1;
return cljs$core$async$mult_$_state_machine__25843__auto__;
})()
})();
var state__25939__auto__ = (function (){var statearr_26758 = f__25938__auto__.call(null);
(statearr_26758[(6)] = c__25937__auto___26759);

return statearr_26758;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25939__auto__);
}));


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__26817 = arguments.length;
switch (G__26817) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
}));

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
}));

(cljs.core.async.tap.cljs$lang$maxFixedArity = 3);

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

var cljs$core$async$Mix$admix_STAR_$dyn_26819 = (function (m,ch){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,m,ch);
} else {
var m__4426__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
});
cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$admix_STAR_$dyn_26819.call(null,m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_26820 = (function (m,ch){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,m,ch);
} else {
var m__4426__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
});
cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$unmix_STAR_$dyn_26820.call(null,m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_26821 = (function (m){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,m);
} else {
var m__4426__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
});
cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mix$unmix_all_STAR_$dyn_26821.call(null,m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_26822 = (function (m,state_map){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,m,state_map);
} else {
var m__4426__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
});
cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
return cljs$core$async$Mix$toggle_STAR_$dyn_26822.call(null,m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_26823 = (function (m,mode){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,m,mode);
} else {
var m__4426__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
});
cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
return cljs$core$async$Mix$solo_mode_STAR_$dyn_26823.call(null,m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___26834 = arguments.length;
var i__4737__auto___26835 = (0);
while(true){
if((i__4737__auto___26835 < len__4736__auto___26834)){
args__4742__auto__.push((arguments[i__4737__auto___26835]));

var G__26836 = (i__4737__auto___26835 + (1));
i__4737__auto___26835 = G__26836;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((3) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4743__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__26828){
var map__26829 = p__26828;
var map__26829__$1 = (((((!((map__26829 == null))))?(((((map__26829.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26829.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26829):map__26829);
var opts = map__26829__$1;
var statearr_26831_26837 = state;
(statearr_26831_26837[(1)] = cont_block);


var temp__5720__auto__ = cljs.core.async.do_alts.call(null,(function (val){
var statearr_26832_26838 = state;
(statearr_26832_26838[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
}),ports,opts);
if(cljs.core.truth_(temp__5720__auto__)){
var cb = temp__5720__auto__;
var statearr_26833_26839 = state;
(statearr_26833_26839[(2)] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq26824){
var G__26825 = cljs.core.first.call(null,seq26824);
var seq26824__$1 = cljs.core.next.call(null,seq26824);
var G__26826 = cljs.core.first.call(null,seq26824__$1);
var seq26824__$2 = cljs.core.next.call(null,seq26824__$1);
var G__26827 = cljs.core.first.call(null,seq26824__$2);
var seq26824__$3 = cljs.core.next.call(null,seq26824__$2);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__26825,G__26826,G__26827,seq26824__$3);
}));

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});
var pick = (function (attr,chs){
return cljs.core.reduce_kv.call(null,(function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
}),cljs.core.PersistentHashSet.EMPTY,chs);
});
var calc_state = (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,((((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_.call(null,solos))))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async26840 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async26840 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta26841){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta26841 = meta26841;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async26840.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26842,meta26841__$1){
var self__ = this;
var _26842__$1 = this;
return (new cljs.core.async.t_cljs$core$async26840(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta26841__$1));
}));

(cljs.core.async.t_cljs$core$async26840.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26842){
var self__ = this;
var _26842__$1 = this;
return self__.meta26841;
}));

(cljs.core.async.t_cljs$core$async26840.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async26840.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async26840.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async26840.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
}));

(cljs.core.async.t_cljs$core$async26840.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
}));

(cljs.core.async.t_cljs$core$async26840.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
}));

(cljs.core.async.t_cljs$core$async26840.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
}));

(cljs.core.async.t_cljs$core$async26840.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
}));

(cljs.core.async.t_cljs$core$async26840.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta26841","meta26841",-1717560541,null)], null);
}));

(cljs.core.async.t_cljs$core$async26840.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async26840.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async26840");

(cljs.core.async.t_cljs$core$async26840.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"cljs.core.async/t_cljs$core$async26840");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async26840.
 */
cljs.core.async.__GT_t_cljs$core$async26840 = (function cljs$core$async$mix_$___GT_t_cljs$core$async26840(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta26841){
return (new cljs.core.async.t_cljs$core$async26840(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta26841));
});

}

return (new cljs.core.async.t_cljs$core$async26840(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__25937__auto___27004 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__25938__auto__ = (function (){var switch__25842__auto__ = (function (state_26944){
var state_val_26945 = (state_26944[(1)]);
if((state_val_26945 === (7))){
var inst_26859 = (state_26944[(2)]);
var state_26944__$1 = state_26944;
var statearr_26946_27005 = state_26944__$1;
(statearr_26946_27005[(2)] = inst_26859);

(statearr_26946_27005[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26945 === (20))){
var inst_26871 = (state_26944[(7)]);
var state_26944__$1 = state_26944;
var statearr_26947_27006 = state_26944__$1;
(statearr_26947_27006[(2)] = inst_26871);

(statearr_26947_27006[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26945 === (27))){
var state_26944__$1 = state_26944;
var statearr_26948_27007 = state_26944__$1;
(statearr_26948_27007[(2)] = null);

(statearr_26948_27007[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26945 === (1))){
var inst_26846 = (state_26944[(8)]);
var inst_26846__$1 = calc_state.call(null);
var inst_26848 = (inst_26846__$1 == null);
var inst_26849 = cljs.core.not.call(null,inst_26848);
var state_26944__$1 = (function (){var statearr_26949 = state_26944;
(statearr_26949[(8)] = inst_26846__$1);

return statearr_26949;
})();
if(inst_26849){
var statearr_26950_27008 = state_26944__$1;
(statearr_26950_27008[(1)] = (2));

} else {
var statearr_26951_27009 = state_26944__$1;
(statearr_26951_27009[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26945 === (24))){
var inst_26895 = (state_26944[(9)]);
var inst_26918 = (state_26944[(10)]);
var inst_26904 = (state_26944[(11)]);
var inst_26918__$1 = inst_26895.call(null,inst_26904);
var state_26944__$1 = (function (){var statearr_26952 = state_26944;
(statearr_26952[(10)] = inst_26918__$1);

return statearr_26952;
})();
if(cljs.core.truth_(inst_26918__$1)){
var statearr_26953_27010 = state_26944__$1;
(statearr_26953_27010[(1)] = (29));

} else {
var statearr_26954_27011 = state_26944__$1;
(statearr_26954_27011[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26945 === (4))){
var inst_26862 = (state_26944[(2)]);
var state_26944__$1 = state_26944;
if(cljs.core.truth_(inst_26862)){
var statearr_26955_27012 = state_26944__$1;
(statearr_26955_27012[(1)] = (8));

} else {
var statearr_26956_27013 = state_26944__$1;
(statearr_26956_27013[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26945 === (15))){
var inst_26889 = (state_26944[(2)]);
var state_26944__$1 = state_26944;
if(cljs.core.truth_(inst_26889)){
var statearr_26957_27014 = state_26944__$1;
(statearr_26957_27014[(1)] = (19));

} else {
var statearr_26958_27015 = state_26944__$1;
(statearr_26958_27015[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26945 === (21))){
var inst_26894 = (state_26944[(12)]);
var inst_26894__$1 = (state_26944[(2)]);
var inst_26895 = cljs.core.get.call(null,inst_26894__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_26896 = cljs.core.get.call(null,inst_26894__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_26897 = cljs.core.get.call(null,inst_26894__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_26944__$1 = (function (){var statearr_26959 = state_26944;
(statearr_26959[(13)] = inst_26896);

(statearr_26959[(9)] = inst_26895);

(statearr_26959[(12)] = inst_26894__$1);

return statearr_26959;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_26944__$1,(22),inst_26897);
} else {
if((state_val_26945 === (31))){
var inst_26926 = (state_26944[(2)]);
var state_26944__$1 = state_26944;
if(cljs.core.truth_(inst_26926)){
var statearr_26960_27016 = state_26944__$1;
(statearr_26960_27016[(1)] = (32));

} else {
var statearr_26961_27017 = state_26944__$1;
(statearr_26961_27017[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26945 === (32))){
var inst_26903 = (state_26944[(14)]);
var state_26944__$1 = state_26944;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26944__$1,(35),out,inst_26903);
} else {
if((state_val_26945 === (33))){
var inst_26894 = (state_26944[(12)]);
var inst_26871 = inst_26894;
var state_26944__$1 = (function (){var statearr_26962 = state_26944;
(statearr_26962[(7)] = inst_26871);

return statearr_26962;
})();
var statearr_26963_27018 = state_26944__$1;
(statearr_26963_27018[(2)] = null);

(statearr_26963_27018[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26945 === (13))){
var inst_26871 = (state_26944[(7)]);
var inst_26878 = inst_26871.cljs$lang$protocol_mask$partition0$;
var inst_26879 = (inst_26878 & (64));
var inst_26880 = inst_26871.cljs$core$ISeq$;
var inst_26881 = (cljs.core.PROTOCOL_SENTINEL === inst_26880);
var inst_26882 = ((inst_26879) || (inst_26881));
var state_26944__$1 = state_26944;
if(cljs.core.truth_(inst_26882)){
var statearr_26964_27019 = state_26944__$1;
(statearr_26964_27019[(1)] = (16));

} else {
var statearr_26965_27020 = state_26944__$1;
(statearr_26965_27020[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26945 === (22))){
var inst_26903 = (state_26944[(14)]);
var inst_26904 = (state_26944[(11)]);
var inst_26902 = (state_26944[(2)]);
var inst_26903__$1 = cljs.core.nth.call(null,inst_26902,(0),null);
var inst_26904__$1 = cljs.core.nth.call(null,inst_26902,(1),null);
var inst_26905 = (inst_26903__$1 == null);
var inst_26906 = cljs.core._EQ_.call(null,inst_26904__$1,change);
var inst_26907 = ((inst_26905) || (inst_26906));
var state_26944__$1 = (function (){var statearr_26966 = state_26944;
(statearr_26966[(14)] = inst_26903__$1);

(statearr_26966[(11)] = inst_26904__$1);

return statearr_26966;
})();
if(cljs.core.truth_(inst_26907)){
var statearr_26967_27021 = state_26944__$1;
(statearr_26967_27021[(1)] = (23));

} else {
var statearr_26968_27022 = state_26944__$1;
(statearr_26968_27022[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26945 === (36))){
var inst_26894 = (state_26944[(12)]);
var inst_26871 = inst_26894;
var state_26944__$1 = (function (){var statearr_26969 = state_26944;
(statearr_26969[(7)] = inst_26871);

return statearr_26969;
})();
var statearr_26970_27023 = state_26944__$1;
(statearr_26970_27023[(2)] = null);

(statearr_26970_27023[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26945 === (29))){
var inst_26918 = (state_26944[(10)]);
var state_26944__$1 = state_26944;
var statearr_26971_27024 = state_26944__$1;
(statearr_26971_27024[(2)] = inst_26918);

(statearr_26971_27024[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26945 === (6))){
var state_26944__$1 = state_26944;
var statearr_26972_27025 = state_26944__$1;
(statearr_26972_27025[(2)] = false);

(statearr_26972_27025[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26945 === (28))){
var inst_26914 = (state_26944[(2)]);
var inst_26915 = calc_state.call(null);
var inst_26871 = inst_26915;
var state_26944__$1 = (function (){var statearr_26973 = state_26944;
(statearr_26973[(15)] = inst_26914);

(statearr_26973[(7)] = inst_26871);

return statearr_26973;
})();
var statearr_26974_27026 = state_26944__$1;
(statearr_26974_27026[(2)] = null);

(statearr_26974_27026[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26945 === (25))){
var inst_26940 = (state_26944[(2)]);
var state_26944__$1 = state_26944;
var statearr_26975_27027 = state_26944__$1;
(statearr_26975_27027[(2)] = inst_26940);

(statearr_26975_27027[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26945 === (34))){
var inst_26938 = (state_26944[(2)]);
var state_26944__$1 = state_26944;
var statearr_26976_27028 = state_26944__$1;
(statearr_26976_27028[(2)] = inst_26938);

(statearr_26976_27028[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26945 === (17))){
var state_26944__$1 = state_26944;
var statearr_26977_27029 = state_26944__$1;
(statearr_26977_27029[(2)] = false);

(statearr_26977_27029[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26945 === (3))){
var state_26944__$1 = state_26944;
var statearr_26978_27030 = state_26944__$1;
(statearr_26978_27030[(2)] = false);

(statearr_26978_27030[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26945 === (12))){
var inst_26942 = (state_26944[(2)]);
var state_26944__$1 = state_26944;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26944__$1,inst_26942);
} else {
if((state_val_26945 === (2))){
var inst_26846 = (state_26944[(8)]);
var inst_26851 = inst_26846.cljs$lang$protocol_mask$partition0$;
var inst_26852 = (inst_26851 & (64));
var inst_26853 = inst_26846.cljs$core$ISeq$;
var inst_26854 = (cljs.core.PROTOCOL_SENTINEL === inst_26853);
var inst_26855 = ((inst_26852) || (inst_26854));
var state_26944__$1 = state_26944;
if(cljs.core.truth_(inst_26855)){
var statearr_26979_27031 = state_26944__$1;
(statearr_26979_27031[(1)] = (5));

} else {
var statearr_26980_27032 = state_26944__$1;
(statearr_26980_27032[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26945 === (23))){
var inst_26903 = (state_26944[(14)]);
var inst_26909 = (inst_26903 == null);
var state_26944__$1 = state_26944;
if(cljs.core.truth_(inst_26909)){
var statearr_26981_27033 = state_26944__$1;
(statearr_26981_27033[(1)] = (26));

} else {
var statearr_26982_27034 = state_26944__$1;
(statearr_26982_27034[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26945 === (35))){
var inst_26929 = (state_26944[(2)]);
var state_26944__$1 = state_26944;
if(cljs.core.truth_(inst_26929)){
var statearr_26983_27035 = state_26944__$1;
(statearr_26983_27035[(1)] = (36));

} else {
var statearr_26984_27036 = state_26944__$1;
(statearr_26984_27036[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26945 === (19))){
var inst_26871 = (state_26944[(7)]);
var inst_26891 = cljs.core.apply.call(null,cljs.core.hash_map,inst_26871);
var state_26944__$1 = state_26944;
var statearr_26985_27037 = state_26944__$1;
(statearr_26985_27037[(2)] = inst_26891);

(statearr_26985_27037[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26945 === (11))){
var inst_26871 = (state_26944[(7)]);
var inst_26875 = (inst_26871 == null);
var inst_26876 = cljs.core.not.call(null,inst_26875);
var state_26944__$1 = state_26944;
if(inst_26876){
var statearr_26986_27038 = state_26944__$1;
(statearr_26986_27038[(1)] = (13));

} else {
var statearr_26987_27039 = state_26944__$1;
(statearr_26987_27039[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26945 === (9))){
var inst_26846 = (state_26944[(8)]);
var state_26944__$1 = state_26944;
var statearr_26988_27040 = state_26944__$1;
(statearr_26988_27040[(2)] = inst_26846);

(statearr_26988_27040[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26945 === (5))){
var state_26944__$1 = state_26944;
var statearr_26989_27041 = state_26944__$1;
(statearr_26989_27041[(2)] = true);

(statearr_26989_27041[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26945 === (14))){
var state_26944__$1 = state_26944;
var statearr_26990_27042 = state_26944__$1;
(statearr_26990_27042[(2)] = false);

(statearr_26990_27042[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26945 === (26))){
var inst_26904 = (state_26944[(11)]);
var inst_26911 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_26904);
var state_26944__$1 = state_26944;
var statearr_26991_27043 = state_26944__$1;
(statearr_26991_27043[(2)] = inst_26911);

(statearr_26991_27043[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26945 === (16))){
var state_26944__$1 = state_26944;
var statearr_26992_27044 = state_26944__$1;
(statearr_26992_27044[(2)] = true);

(statearr_26992_27044[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26945 === (38))){
var inst_26934 = (state_26944[(2)]);
var state_26944__$1 = state_26944;
var statearr_26993_27045 = state_26944__$1;
(statearr_26993_27045[(2)] = inst_26934);

(statearr_26993_27045[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26945 === (30))){
var inst_26896 = (state_26944[(13)]);
var inst_26895 = (state_26944[(9)]);
var inst_26904 = (state_26944[(11)]);
var inst_26921 = cljs.core.empty_QMARK_.call(null,inst_26895);
var inst_26922 = inst_26896.call(null,inst_26904);
var inst_26923 = cljs.core.not.call(null,inst_26922);
var inst_26924 = ((inst_26921) && (inst_26923));
var state_26944__$1 = state_26944;
var statearr_26994_27046 = state_26944__$1;
(statearr_26994_27046[(2)] = inst_26924);

(statearr_26994_27046[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26945 === (10))){
var inst_26846 = (state_26944[(8)]);
var inst_26867 = (state_26944[(2)]);
var inst_26868 = cljs.core.get.call(null,inst_26867,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_26869 = cljs.core.get.call(null,inst_26867,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_26870 = cljs.core.get.call(null,inst_26867,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_26871 = inst_26846;
var state_26944__$1 = (function (){var statearr_26995 = state_26944;
(statearr_26995[(16)] = inst_26868);

(statearr_26995[(17)] = inst_26869);

(statearr_26995[(7)] = inst_26871);

(statearr_26995[(18)] = inst_26870);

return statearr_26995;
})();
var statearr_26996_27047 = state_26944__$1;
(statearr_26996_27047[(2)] = null);

(statearr_26996_27047[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26945 === (18))){
var inst_26886 = (state_26944[(2)]);
var state_26944__$1 = state_26944;
var statearr_26997_27048 = state_26944__$1;
(statearr_26997_27048[(2)] = inst_26886);

(statearr_26997_27048[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26945 === (37))){
var state_26944__$1 = state_26944;
var statearr_26998_27049 = state_26944__$1;
(statearr_26998_27049[(2)] = null);

(statearr_26998_27049[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26945 === (8))){
var inst_26846 = (state_26944[(8)]);
var inst_26864 = cljs.core.apply.call(null,cljs.core.hash_map,inst_26846);
var state_26944__$1 = state_26944;
var statearr_26999_27050 = state_26944__$1;
(statearr_26999_27050[(2)] = inst_26864);

(statearr_26999_27050[(1)] = (10));


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
});
return (function() {
var cljs$core$async$mix_$_state_machine__25843__auto__ = null;
var cljs$core$async$mix_$_state_machine__25843__auto____0 = (function (){
var statearr_27000 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27000[(0)] = cljs$core$async$mix_$_state_machine__25843__auto__);

(statearr_27000[(1)] = (1));

return statearr_27000;
});
var cljs$core$async$mix_$_state_machine__25843__auto____1 = (function (state_26944){
while(true){
var ret_value__25844__auto__ = (function (){try{while(true){
var result__25845__auto__ = switch__25842__auto__.call(null,state_26944);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25845__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25845__auto__;
}
break;
}
}catch (e27001){if((e27001 instanceof Object)){
var ex__25846__auto__ = e27001;
var statearr_27002_27051 = state_26944;
(statearr_27002_27051[(5)] = ex__25846__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26944);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27001;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25844__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27052 = state_26944;
state_26944 = G__27052;
continue;
} else {
return ret_value__25844__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__25843__auto__ = function(state_26944){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__25843__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__25843__auto____1.call(this,state_26944);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__25843__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__25843__auto____0;
cljs$core$async$mix_$_state_machine__25843__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__25843__auto____1;
return cljs$core$async$mix_$_state_machine__25843__auto__;
})()
})();
var state__25939__auto__ = (function (){var statearr_27003 = f__25938__auto__.call(null);
(statearr_27003[(6)] = c__25937__auto___27004);

return statearr_27003;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25939__auto__);
}));


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

var cljs$core$async$Pub$sub_STAR_$dyn_27055 = (function (p,v,ch,close_QMARK_){
var x__4428__auto__ = (((p == null))?null:p);
var m__4429__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__4426__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
});
cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
return cljs$core$async$Pub$sub_STAR_$dyn_27055.call(null,p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_27056 = (function (p,v,ch){
var x__4428__auto__ = (((p == null))?null:p);
var m__4429__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,p,v,ch);
} else {
var m__4426__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
});
cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
return cljs$core$async$Pub$unsub_STAR_$dyn_27056.call(null,p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_27057 = (function() {
var G__27058 = null;
var G__27058__1 = (function (p){
var x__4428__auto__ = (((p == null))?null:p);
var m__4429__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,p);
} else {
var m__4426__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
});
var G__27058__2 = (function (p,v){
var x__4428__auto__ = (((p == null))?null:p);
var m__4429__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,p,v);
} else {
var m__4426__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
});
G__27058 = function(p,v){
switch(arguments.length){
case 1:
return G__27058__1.call(this,p);
case 2:
return G__27058__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__27058.cljs$core$IFn$_invoke$arity$1 = G__27058__1;
G__27058.cljs$core$IFn$_invoke$arity$2 = G__27058__2;
return G__27058;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__27054 = arguments.length;
switch (G__27054) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_27057.call(null,p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_27057.call(null,p,v);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2);


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__27062 = arguments.length;
switch (G__27062) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
}));

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = (function (topic){
var or__4126__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,(function (p1__27060_SHARP_){
if(cljs.core.truth_(p1__27060_SHARP_.call(null,topic))){
return p1__27060_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__27060_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async27063 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27063 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta27064){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta27064 = meta27064;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async27063.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27065,meta27064__$1){
var self__ = this;
var _27065__$1 = this;
return (new cljs.core.async.t_cljs$core$async27063(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta27064__$1));
}));

(cljs.core.async.t_cljs$core$async27063.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27065){
var self__ = this;
var _27065__$1 = this;
return self__.meta27064;
}));

(cljs.core.async.t_cljs$core$async27063.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async27063.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async27063.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async27063.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async27063.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5720__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__5720__auto__)){
var m = temp__5720__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
}));

(cljs.core.async.t_cljs$core$async27063.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async27063.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async27063.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta27064","meta27064",-299085981,null)], null);
}));

(cljs.core.async.t_cljs$core$async27063.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async27063.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27063");

(cljs.core.async.t_cljs$core$async27063.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"cljs.core.async/t_cljs$core$async27063");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async27063.
 */
cljs.core.async.__GT_t_cljs$core$async27063 = (function cljs$core$async$__GT_t_cljs$core$async27063(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta27064){
return (new cljs.core.async.t_cljs$core$async27063(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta27064));
});

}

return (new cljs.core.async.t_cljs$core$async27063(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__25937__auto___27183 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__25938__auto__ = (function (){var switch__25842__auto__ = (function (state_27137){
var state_val_27138 = (state_27137[(1)]);
if((state_val_27138 === (7))){
var inst_27133 = (state_27137[(2)]);
var state_27137__$1 = state_27137;
var statearr_27139_27184 = state_27137__$1;
(statearr_27139_27184[(2)] = inst_27133);

(statearr_27139_27184[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27138 === (20))){
var state_27137__$1 = state_27137;
var statearr_27140_27185 = state_27137__$1;
(statearr_27140_27185[(2)] = null);

(statearr_27140_27185[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27138 === (1))){
var state_27137__$1 = state_27137;
var statearr_27141_27186 = state_27137__$1;
(statearr_27141_27186[(2)] = null);

(statearr_27141_27186[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27138 === (24))){
var inst_27116 = (state_27137[(7)]);
var inst_27125 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_27116);
var state_27137__$1 = state_27137;
var statearr_27142_27187 = state_27137__$1;
(statearr_27142_27187[(2)] = inst_27125);

(statearr_27142_27187[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27138 === (4))){
var inst_27068 = (state_27137[(8)]);
var inst_27068__$1 = (state_27137[(2)]);
var inst_27069 = (inst_27068__$1 == null);
var state_27137__$1 = (function (){var statearr_27143 = state_27137;
(statearr_27143[(8)] = inst_27068__$1);

return statearr_27143;
})();
if(cljs.core.truth_(inst_27069)){
var statearr_27144_27188 = state_27137__$1;
(statearr_27144_27188[(1)] = (5));

} else {
var statearr_27145_27189 = state_27137__$1;
(statearr_27145_27189[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27138 === (15))){
var inst_27110 = (state_27137[(2)]);
var state_27137__$1 = state_27137;
var statearr_27146_27190 = state_27137__$1;
(statearr_27146_27190[(2)] = inst_27110);

(statearr_27146_27190[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27138 === (21))){
var inst_27130 = (state_27137[(2)]);
var state_27137__$1 = (function (){var statearr_27147 = state_27137;
(statearr_27147[(9)] = inst_27130);

return statearr_27147;
})();
var statearr_27148_27191 = state_27137__$1;
(statearr_27148_27191[(2)] = null);

(statearr_27148_27191[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27138 === (13))){
var inst_27092 = (state_27137[(10)]);
var inst_27094 = cljs.core.chunked_seq_QMARK_.call(null,inst_27092);
var state_27137__$1 = state_27137;
if(inst_27094){
var statearr_27149_27192 = state_27137__$1;
(statearr_27149_27192[(1)] = (16));

} else {
var statearr_27150_27193 = state_27137__$1;
(statearr_27150_27193[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27138 === (22))){
var inst_27122 = (state_27137[(2)]);
var state_27137__$1 = state_27137;
if(cljs.core.truth_(inst_27122)){
var statearr_27151_27194 = state_27137__$1;
(statearr_27151_27194[(1)] = (23));

} else {
var statearr_27152_27195 = state_27137__$1;
(statearr_27152_27195[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27138 === (6))){
var inst_27116 = (state_27137[(7)]);
var inst_27068 = (state_27137[(8)]);
var inst_27118 = (state_27137[(11)]);
var inst_27116__$1 = topic_fn.call(null,inst_27068);
var inst_27117 = cljs.core.deref.call(null,mults);
var inst_27118__$1 = cljs.core.get.call(null,inst_27117,inst_27116__$1);
var state_27137__$1 = (function (){var statearr_27153 = state_27137;
(statearr_27153[(7)] = inst_27116__$1);

(statearr_27153[(11)] = inst_27118__$1);

return statearr_27153;
})();
if(cljs.core.truth_(inst_27118__$1)){
var statearr_27154_27196 = state_27137__$1;
(statearr_27154_27196[(1)] = (19));

} else {
var statearr_27155_27197 = state_27137__$1;
(statearr_27155_27197[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27138 === (25))){
var inst_27127 = (state_27137[(2)]);
var state_27137__$1 = state_27137;
var statearr_27156_27198 = state_27137__$1;
(statearr_27156_27198[(2)] = inst_27127);

(statearr_27156_27198[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27138 === (17))){
var inst_27092 = (state_27137[(10)]);
var inst_27101 = cljs.core.first.call(null,inst_27092);
var inst_27102 = cljs.core.async.muxch_STAR_.call(null,inst_27101);
var inst_27103 = cljs.core.async.close_BANG_.call(null,inst_27102);
var inst_27104 = cljs.core.next.call(null,inst_27092);
var inst_27078 = inst_27104;
var inst_27079 = null;
var inst_27080 = (0);
var inst_27081 = (0);
var state_27137__$1 = (function (){var statearr_27157 = state_27137;
(statearr_27157[(12)] = inst_27080);

(statearr_27157[(13)] = inst_27103);

(statearr_27157[(14)] = inst_27081);

(statearr_27157[(15)] = inst_27079);

(statearr_27157[(16)] = inst_27078);

return statearr_27157;
})();
var statearr_27158_27199 = state_27137__$1;
(statearr_27158_27199[(2)] = null);

(statearr_27158_27199[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27138 === (3))){
var inst_27135 = (state_27137[(2)]);
var state_27137__$1 = state_27137;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27137__$1,inst_27135);
} else {
if((state_val_27138 === (12))){
var inst_27112 = (state_27137[(2)]);
var state_27137__$1 = state_27137;
var statearr_27159_27200 = state_27137__$1;
(statearr_27159_27200[(2)] = inst_27112);

(statearr_27159_27200[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27138 === (2))){
var state_27137__$1 = state_27137;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27137__$1,(4),ch);
} else {
if((state_val_27138 === (23))){
var state_27137__$1 = state_27137;
var statearr_27160_27201 = state_27137__$1;
(statearr_27160_27201[(2)] = null);

(statearr_27160_27201[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27138 === (19))){
var inst_27068 = (state_27137[(8)]);
var inst_27118 = (state_27137[(11)]);
var inst_27120 = cljs.core.async.muxch_STAR_.call(null,inst_27118);
var state_27137__$1 = state_27137;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27137__$1,(22),inst_27120,inst_27068);
} else {
if((state_val_27138 === (11))){
var inst_27092 = (state_27137[(10)]);
var inst_27078 = (state_27137[(16)]);
var inst_27092__$1 = cljs.core.seq.call(null,inst_27078);
var state_27137__$1 = (function (){var statearr_27161 = state_27137;
(statearr_27161[(10)] = inst_27092__$1);

return statearr_27161;
})();
if(inst_27092__$1){
var statearr_27162_27202 = state_27137__$1;
(statearr_27162_27202[(1)] = (13));

} else {
var statearr_27163_27203 = state_27137__$1;
(statearr_27163_27203[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27138 === (9))){
var inst_27114 = (state_27137[(2)]);
var state_27137__$1 = state_27137;
var statearr_27164_27204 = state_27137__$1;
(statearr_27164_27204[(2)] = inst_27114);

(statearr_27164_27204[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27138 === (5))){
var inst_27075 = cljs.core.deref.call(null,mults);
var inst_27076 = cljs.core.vals.call(null,inst_27075);
var inst_27077 = cljs.core.seq.call(null,inst_27076);
var inst_27078 = inst_27077;
var inst_27079 = null;
var inst_27080 = (0);
var inst_27081 = (0);
var state_27137__$1 = (function (){var statearr_27165 = state_27137;
(statearr_27165[(12)] = inst_27080);

(statearr_27165[(14)] = inst_27081);

(statearr_27165[(15)] = inst_27079);

(statearr_27165[(16)] = inst_27078);

return statearr_27165;
})();
var statearr_27166_27205 = state_27137__$1;
(statearr_27166_27205[(2)] = null);

(statearr_27166_27205[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27138 === (14))){
var state_27137__$1 = state_27137;
var statearr_27170_27206 = state_27137__$1;
(statearr_27170_27206[(2)] = null);

(statearr_27170_27206[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27138 === (16))){
var inst_27092 = (state_27137[(10)]);
var inst_27096 = cljs.core.chunk_first.call(null,inst_27092);
var inst_27097 = cljs.core.chunk_rest.call(null,inst_27092);
var inst_27098 = cljs.core.count.call(null,inst_27096);
var inst_27078 = inst_27097;
var inst_27079 = inst_27096;
var inst_27080 = inst_27098;
var inst_27081 = (0);
var state_27137__$1 = (function (){var statearr_27171 = state_27137;
(statearr_27171[(12)] = inst_27080);

(statearr_27171[(14)] = inst_27081);

(statearr_27171[(15)] = inst_27079);

(statearr_27171[(16)] = inst_27078);

return statearr_27171;
})();
var statearr_27172_27207 = state_27137__$1;
(statearr_27172_27207[(2)] = null);

(statearr_27172_27207[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27138 === (10))){
var inst_27080 = (state_27137[(12)]);
var inst_27081 = (state_27137[(14)]);
var inst_27079 = (state_27137[(15)]);
var inst_27078 = (state_27137[(16)]);
var inst_27086 = cljs.core._nth.call(null,inst_27079,inst_27081);
var inst_27087 = cljs.core.async.muxch_STAR_.call(null,inst_27086);
var inst_27088 = cljs.core.async.close_BANG_.call(null,inst_27087);
var inst_27089 = (inst_27081 + (1));
var tmp27167 = inst_27080;
var tmp27168 = inst_27079;
var tmp27169 = inst_27078;
var inst_27078__$1 = tmp27169;
var inst_27079__$1 = tmp27168;
var inst_27080__$1 = tmp27167;
var inst_27081__$1 = inst_27089;
var state_27137__$1 = (function (){var statearr_27173 = state_27137;
(statearr_27173[(17)] = inst_27088);

(statearr_27173[(12)] = inst_27080__$1);

(statearr_27173[(14)] = inst_27081__$1);

(statearr_27173[(15)] = inst_27079__$1);

(statearr_27173[(16)] = inst_27078__$1);

return statearr_27173;
})();
var statearr_27174_27208 = state_27137__$1;
(statearr_27174_27208[(2)] = null);

(statearr_27174_27208[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27138 === (18))){
var inst_27107 = (state_27137[(2)]);
var state_27137__$1 = state_27137;
var statearr_27175_27209 = state_27137__$1;
(statearr_27175_27209[(2)] = inst_27107);

(statearr_27175_27209[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27138 === (8))){
var inst_27080 = (state_27137[(12)]);
var inst_27081 = (state_27137[(14)]);
var inst_27083 = (inst_27081 < inst_27080);
var inst_27084 = inst_27083;
var state_27137__$1 = state_27137;
if(cljs.core.truth_(inst_27084)){
var statearr_27176_27210 = state_27137__$1;
(statearr_27176_27210[(1)] = (10));

} else {
var statearr_27177_27211 = state_27137__$1;
(statearr_27177_27211[(1)] = (11));

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
});
return (function() {
var cljs$core$async$state_machine__25843__auto__ = null;
var cljs$core$async$state_machine__25843__auto____0 = (function (){
var statearr_27178 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27178[(0)] = cljs$core$async$state_machine__25843__auto__);

(statearr_27178[(1)] = (1));

return statearr_27178;
});
var cljs$core$async$state_machine__25843__auto____1 = (function (state_27137){
while(true){
var ret_value__25844__auto__ = (function (){try{while(true){
var result__25845__auto__ = switch__25842__auto__.call(null,state_27137);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25845__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25845__auto__;
}
break;
}
}catch (e27179){if((e27179 instanceof Object)){
var ex__25846__auto__ = e27179;
var statearr_27180_27212 = state_27137;
(statearr_27180_27212[(5)] = ex__25846__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27137);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27179;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25844__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27213 = state_27137;
state_27137 = G__27213;
continue;
} else {
return ret_value__25844__auto__;
}
break;
}
});
cljs$core$async$state_machine__25843__auto__ = function(state_27137){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__25843__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__25843__auto____1.call(this,state_27137);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__25843__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__25843__auto____0;
cljs$core$async$state_machine__25843__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__25843__auto____1;
return cljs$core$async$state_machine__25843__auto__;
})()
})();
var state__25939__auto__ = (function (){var statearr_27181 = f__25938__auto__.call(null);
(statearr_27181[(6)] = c__25937__auto___27183);

return statearr_27181;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25939__auto__);
}));


return p;
}));

(cljs.core.async.pub.cljs$lang$maxFixedArity = 3);

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__27215 = arguments.length;
switch (G__27215) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
}));

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
}));

(cljs.core.async.sub.cljs$lang$maxFixedArity = 4);

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__27218 = arguments.length;
switch (G__27218) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
}));

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
}));

(cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2);

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__27221 = arguments.length;
switch (G__27221) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
}));

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,(function (i){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
}),cljs.core.range.call(null,cnt));
var c__25937__auto___27288 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__25938__auto__ = (function (){var switch__25842__auto__ = (function (state_27260){
var state_val_27261 = (state_27260[(1)]);
if((state_val_27261 === (7))){
var state_27260__$1 = state_27260;
var statearr_27262_27289 = state_27260__$1;
(statearr_27262_27289[(2)] = null);

(statearr_27262_27289[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27261 === (1))){
var state_27260__$1 = state_27260;
var statearr_27263_27290 = state_27260__$1;
(statearr_27263_27290[(2)] = null);

(statearr_27263_27290[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27261 === (4))){
var inst_27224 = (state_27260[(7)]);
var inst_27226 = (inst_27224 < cnt);
var state_27260__$1 = state_27260;
if(cljs.core.truth_(inst_27226)){
var statearr_27264_27291 = state_27260__$1;
(statearr_27264_27291[(1)] = (6));

} else {
var statearr_27265_27292 = state_27260__$1;
(statearr_27265_27292[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27261 === (15))){
var inst_27256 = (state_27260[(2)]);
var state_27260__$1 = state_27260;
var statearr_27266_27293 = state_27260__$1;
(statearr_27266_27293[(2)] = inst_27256);

(statearr_27266_27293[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27261 === (13))){
var inst_27249 = cljs.core.async.close_BANG_.call(null,out);
var state_27260__$1 = state_27260;
var statearr_27267_27294 = state_27260__$1;
(statearr_27267_27294[(2)] = inst_27249);

(statearr_27267_27294[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27261 === (6))){
var state_27260__$1 = state_27260;
var statearr_27268_27295 = state_27260__$1;
(statearr_27268_27295[(2)] = null);

(statearr_27268_27295[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27261 === (3))){
var inst_27258 = (state_27260[(2)]);
var state_27260__$1 = state_27260;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27260__$1,inst_27258);
} else {
if((state_val_27261 === (12))){
var inst_27246 = (state_27260[(8)]);
var inst_27246__$1 = (state_27260[(2)]);
var inst_27247 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_27246__$1);
var state_27260__$1 = (function (){var statearr_27269 = state_27260;
(statearr_27269[(8)] = inst_27246__$1);

return statearr_27269;
})();
if(cljs.core.truth_(inst_27247)){
var statearr_27270_27296 = state_27260__$1;
(statearr_27270_27296[(1)] = (13));

} else {
var statearr_27271_27297 = state_27260__$1;
(statearr_27271_27297[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27261 === (2))){
var inst_27223 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_27224 = (0);
var state_27260__$1 = (function (){var statearr_27272 = state_27260;
(statearr_27272[(7)] = inst_27224);

(statearr_27272[(9)] = inst_27223);

return statearr_27272;
})();
var statearr_27273_27298 = state_27260__$1;
(statearr_27273_27298[(2)] = null);

(statearr_27273_27298[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27261 === (11))){
var inst_27224 = (state_27260[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_27260,(10),Object,null,(9));
var inst_27233 = chs__$1.call(null,inst_27224);
var inst_27234 = done.call(null,inst_27224);
var inst_27235 = cljs.core.async.take_BANG_.call(null,inst_27233,inst_27234);
var state_27260__$1 = state_27260;
var statearr_27274_27299 = state_27260__$1;
(statearr_27274_27299[(2)] = inst_27235);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27260__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27261 === (9))){
var inst_27224 = (state_27260[(7)]);
var inst_27237 = (state_27260[(2)]);
var inst_27238 = (inst_27224 + (1));
var inst_27224__$1 = inst_27238;
var state_27260__$1 = (function (){var statearr_27275 = state_27260;
(statearr_27275[(7)] = inst_27224__$1);

(statearr_27275[(10)] = inst_27237);

return statearr_27275;
})();
var statearr_27276_27300 = state_27260__$1;
(statearr_27276_27300[(2)] = null);

(statearr_27276_27300[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27261 === (5))){
var inst_27244 = (state_27260[(2)]);
var state_27260__$1 = (function (){var statearr_27277 = state_27260;
(statearr_27277[(11)] = inst_27244);

return statearr_27277;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27260__$1,(12),dchan);
} else {
if((state_val_27261 === (14))){
var inst_27246 = (state_27260[(8)]);
var inst_27251 = cljs.core.apply.call(null,f,inst_27246);
var state_27260__$1 = state_27260;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27260__$1,(16),out,inst_27251);
} else {
if((state_val_27261 === (16))){
var inst_27253 = (state_27260[(2)]);
var state_27260__$1 = (function (){var statearr_27278 = state_27260;
(statearr_27278[(12)] = inst_27253);

return statearr_27278;
})();
var statearr_27279_27301 = state_27260__$1;
(statearr_27279_27301[(2)] = null);

(statearr_27279_27301[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27261 === (10))){
var inst_27228 = (state_27260[(2)]);
var inst_27229 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_27260__$1 = (function (){var statearr_27280 = state_27260;
(statearr_27280[(13)] = inst_27228);

return statearr_27280;
})();
var statearr_27281_27302 = state_27260__$1;
(statearr_27281_27302[(2)] = inst_27229);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27260__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27261 === (8))){
var inst_27242 = (state_27260[(2)]);
var state_27260__$1 = state_27260;
var statearr_27282_27303 = state_27260__$1;
(statearr_27282_27303[(2)] = inst_27242);

(statearr_27282_27303[(1)] = (5));


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
});
return (function() {
var cljs$core$async$state_machine__25843__auto__ = null;
var cljs$core$async$state_machine__25843__auto____0 = (function (){
var statearr_27283 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27283[(0)] = cljs$core$async$state_machine__25843__auto__);

(statearr_27283[(1)] = (1));

return statearr_27283;
});
var cljs$core$async$state_machine__25843__auto____1 = (function (state_27260){
while(true){
var ret_value__25844__auto__ = (function (){try{while(true){
var result__25845__auto__ = switch__25842__auto__.call(null,state_27260);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25845__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25845__auto__;
}
break;
}
}catch (e27284){if((e27284 instanceof Object)){
var ex__25846__auto__ = e27284;
var statearr_27285_27304 = state_27260;
(statearr_27285_27304[(5)] = ex__25846__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27260);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27284;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25844__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27305 = state_27260;
state_27260 = G__27305;
continue;
} else {
return ret_value__25844__auto__;
}
break;
}
});
cljs$core$async$state_machine__25843__auto__ = function(state_27260){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__25843__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__25843__auto____1.call(this,state_27260);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__25843__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__25843__auto____0;
cljs$core$async$state_machine__25843__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__25843__auto____1;
return cljs$core$async$state_machine__25843__auto__;
})()
})();
var state__25939__auto__ = (function (){var statearr_27286 = f__25938__auto__.call(null);
(statearr_27286[(6)] = c__25937__auto___27288);

return statearr_27286;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25939__auto__);
}));


return out;
}));

(cljs.core.async.map.cljs$lang$maxFixedArity = 3);

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__27308 = arguments.length;
switch (G__27308) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
}));

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__25937__auto___27362 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__25938__auto__ = (function (){var switch__25842__auto__ = (function (state_27340){
var state_val_27341 = (state_27340[(1)]);
if((state_val_27341 === (7))){
var inst_27320 = (state_27340[(7)]);
var inst_27319 = (state_27340[(8)]);
var inst_27319__$1 = (state_27340[(2)]);
var inst_27320__$1 = cljs.core.nth.call(null,inst_27319__$1,(0),null);
var inst_27321 = cljs.core.nth.call(null,inst_27319__$1,(1),null);
var inst_27322 = (inst_27320__$1 == null);
var state_27340__$1 = (function (){var statearr_27342 = state_27340;
(statearr_27342[(7)] = inst_27320__$1);

(statearr_27342[(8)] = inst_27319__$1);

(statearr_27342[(9)] = inst_27321);

return statearr_27342;
})();
if(cljs.core.truth_(inst_27322)){
var statearr_27343_27363 = state_27340__$1;
(statearr_27343_27363[(1)] = (8));

} else {
var statearr_27344_27364 = state_27340__$1;
(statearr_27344_27364[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27341 === (1))){
var inst_27309 = cljs.core.vec.call(null,chs);
var inst_27310 = inst_27309;
var state_27340__$1 = (function (){var statearr_27345 = state_27340;
(statearr_27345[(10)] = inst_27310);

return statearr_27345;
})();
var statearr_27346_27365 = state_27340__$1;
(statearr_27346_27365[(2)] = null);

(statearr_27346_27365[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27341 === (4))){
var inst_27310 = (state_27340[(10)]);
var state_27340__$1 = state_27340;
return cljs.core.async.ioc_alts_BANG_.call(null,state_27340__$1,(7),inst_27310);
} else {
if((state_val_27341 === (6))){
var inst_27336 = (state_27340[(2)]);
var state_27340__$1 = state_27340;
var statearr_27347_27366 = state_27340__$1;
(statearr_27347_27366[(2)] = inst_27336);

(statearr_27347_27366[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27341 === (3))){
var inst_27338 = (state_27340[(2)]);
var state_27340__$1 = state_27340;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27340__$1,inst_27338);
} else {
if((state_val_27341 === (2))){
var inst_27310 = (state_27340[(10)]);
var inst_27312 = cljs.core.count.call(null,inst_27310);
var inst_27313 = (inst_27312 > (0));
var state_27340__$1 = state_27340;
if(cljs.core.truth_(inst_27313)){
var statearr_27349_27367 = state_27340__$1;
(statearr_27349_27367[(1)] = (4));

} else {
var statearr_27350_27368 = state_27340__$1;
(statearr_27350_27368[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27341 === (11))){
var inst_27310 = (state_27340[(10)]);
var inst_27329 = (state_27340[(2)]);
var tmp27348 = inst_27310;
var inst_27310__$1 = tmp27348;
var state_27340__$1 = (function (){var statearr_27351 = state_27340;
(statearr_27351[(11)] = inst_27329);

(statearr_27351[(10)] = inst_27310__$1);

return statearr_27351;
})();
var statearr_27352_27369 = state_27340__$1;
(statearr_27352_27369[(2)] = null);

(statearr_27352_27369[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27341 === (9))){
var inst_27320 = (state_27340[(7)]);
var state_27340__$1 = state_27340;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27340__$1,(11),out,inst_27320);
} else {
if((state_val_27341 === (5))){
var inst_27334 = cljs.core.async.close_BANG_.call(null,out);
var state_27340__$1 = state_27340;
var statearr_27353_27370 = state_27340__$1;
(statearr_27353_27370[(2)] = inst_27334);

(statearr_27353_27370[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27341 === (10))){
var inst_27332 = (state_27340[(2)]);
var state_27340__$1 = state_27340;
var statearr_27354_27371 = state_27340__$1;
(statearr_27354_27371[(2)] = inst_27332);

(statearr_27354_27371[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27341 === (8))){
var inst_27320 = (state_27340[(7)]);
var inst_27319 = (state_27340[(8)]);
var inst_27321 = (state_27340[(9)]);
var inst_27310 = (state_27340[(10)]);
var inst_27324 = (function (){var cs = inst_27310;
var vec__27315 = inst_27319;
var v = inst_27320;
var c = inst_27321;
return (function (p1__27306_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__27306_SHARP_);
});
})();
var inst_27325 = cljs.core.filterv.call(null,inst_27324,inst_27310);
var inst_27310__$1 = inst_27325;
var state_27340__$1 = (function (){var statearr_27355 = state_27340;
(statearr_27355[(10)] = inst_27310__$1);

return statearr_27355;
})();
var statearr_27356_27372 = state_27340__$1;
(statearr_27356_27372[(2)] = null);

(statearr_27356_27372[(1)] = (2));


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
});
return (function() {
var cljs$core$async$state_machine__25843__auto__ = null;
var cljs$core$async$state_machine__25843__auto____0 = (function (){
var statearr_27357 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27357[(0)] = cljs$core$async$state_machine__25843__auto__);

(statearr_27357[(1)] = (1));

return statearr_27357;
});
var cljs$core$async$state_machine__25843__auto____1 = (function (state_27340){
while(true){
var ret_value__25844__auto__ = (function (){try{while(true){
var result__25845__auto__ = switch__25842__auto__.call(null,state_27340);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25845__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25845__auto__;
}
break;
}
}catch (e27358){if((e27358 instanceof Object)){
var ex__25846__auto__ = e27358;
var statearr_27359_27373 = state_27340;
(statearr_27359_27373[(5)] = ex__25846__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27340);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27358;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25844__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27374 = state_27340;
state_27340 = G__27374;
continue;
} else {
return ret_value__25844__auto__;
}
break;
}
});
cljs$core$async$state_machine__25843__auto__ = function(state_27340){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__25843__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__25843__auto____1.call(this,state_27340);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__25843__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__25843__auto____0;
cljs$core$async$state_machine__25843__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__25843__auto____1;
return cljs$core$async$state_machine__25843__auto__;
})()
})();
var state__25939__auto__ = (function (){var statearr_27360 = f__25938__auto__.call(null);
(statearr_27360[(6)] = c__25937__auto___27362);

return statearr_27360;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25939__auto__);
}));


return out;
}));

(cljs.core.async.merge.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__27376 = arguments.length;
switch (G__27376) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
}));

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__25937__auto___27421 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__25938__auto__ = (function (){var switch__25842__auto__ = (function (state_27400){
var state_val_27401 = (state_27400[(1)]);
if((state_val_27401 === (7))){
var inst_27382 = (state_27400[(7)]);
var inst_27382__$1 = (state_27400[(2)]);
var inst_27383 = (inst_27382__$1 == null);
var inst_27384 = cljs.core.not.call(null,inst_27383);
var state_27400__$1 = (function (){var statearr_27402 = state_27400;
(statearr_27402[(7)] = inst_27382__$1);

return statearr_27402;
})();
if(inst_27384){
var statearr_27403_27422 = state_27400__$1;
(statearr_27403_27422[(1)] = (8));

} else {
var statearr_27404_27423 = state_27400__$1;
(statearr_27404_27423[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27401 === (1))){
var inst_27377 = (0);
var state_27400__$1 = (function (){var statearr_27405 = state_27400;
(statearr_27405[(8)] = inst_27377);

return statearr_27405;
})();
var statearr_27406_27424 = state_27400__$1;
(statearr_27406_27424[(2)] = null);

(statearr_27406_27424[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27401 === (4))){
var state_27400__$1 = state_27400;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27400__$1,(7),ch);
} else {
if((state_val_27401 === (6))){
var inst_27395 = (state_27400[(2)]);
var state_27400__$1 = state_27400;
var statearr_27407_27425 = state_27400__$1;
(statearr_27407_27425[(2)] = inst_27395);

(statearr_27407_27425[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27401 === (3))){
var inst_27397 = (state_27400[(2)]);
var inst_27398 = cljs.core.async.close_BANG_.call(null,out);
var state_27400__$1 = (function (){var statearr_27408 = state_27400;
(statearr_27408[(9)] = inst_27397);

return statearr_27408;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27400__$1,inst_27398);
} else {
if((state_val_27401 === (2))){
var inst_27377 = (state_27400[(8)]);
var inst_27379 = (inst_27377 < n);
var state_27400__$1 = state_27400;
if(cljs.core.truth_(inst_27379)){
var statearr_27409_27426 = state_27400__$1;
(statearr_27409_27426[(1)] = (4));

} else {
var statearr_27410_27427 = state_27400__$1;
(statearr_27410_27427[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27401 === (11))){
var inst_27377 = (state_27400[(8)]);
var inst_27387 = (state_27400[(2)]);
var inst_27388 = (inst_27377 + (1));
var inst_27377__$1 = inst_27388;
var state_27400__$1 = (function (){var statearr_27411 = state_27400;
(statearr_27411[(10)] = inst_27387);

(statearr_27411[(8)] = inst_27377__$1);

return statearr_27411;
})();
var statearr_27412_27428 = state_27400__$1;
(statearr_27412_27428[(2)] = null);

(statearr_27412_27428[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27401 === (9))){
var state_27400__$1 = state_27400;
var statearr_27413_27429 = state_27400__$1;
(statearr_27413_27429[(2)] = null);

(statearr_27413_27429[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27401 === (5))){
var state_27400__$1 = state_27400;
var statearr_27414_27430 = state_27400__$1;
(statearr_27414_27430[(2)] = null);

(statearr_27414_27430[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27401 === (10))){
var inst_27392 = (state_27400[(2)]);
var state_27400__$1 = state_27400;
var statearr_27415_27431 = state_27400__$1;
(statearr_27415_27431[(2)] = inst_27392);

(statearr_27415_27431[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27401 === (8))){
var inst_27382 = (state_27400[(7)]);
var state_27400__$1 = state_27400;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27400__$1,(11),out,inst_27382);
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
});
return (function() {
var cljs$core$async$state_machine__25843__auto__ = null;
var cljs$core$async$state_machine__25843__auto____0 = (function (){
var statearr_27416 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_27416[(0)] = cljs$core$async$state_machine__25843__auto__);

(statearr_27416[(1)] = (1));

return statearr_27416;
});
var cljs$core$async$state_machine__25843__auto____1 = (function (state_27400){
while(true){
var ret_value__25844__auto__ = (function (){try{while(true){
var result__25845__auto__ = switch__25842__auto__.call(null,state_27400);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25845__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25845__auto__;
}
break;
}
}catch (e27417){if((e27417 instanceof Object)){
var ex__25846__auto__ = e27417;
var statearr_27418_27432 = state_27400;
(statearr_27418_27432[(5)] = ex__25846__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27400);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27417;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25844__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27433 = state_27400;
state_27400 = G__27433;
continue;
} else {
return ret_value__25844__auto__;
}
break;
}
});
cljs$core$async$state_machine__25843__auto__ = function(state_27400){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__25843__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__25843__auto____1.call(this,state_27400);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__25843__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__25843__auto____0;
cljs$core$async$state_machine__25843__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__25843__auto____1;
return cljs$core$async$state_machine__25843__auto__;
})()
})();
var state__25939__auto__ = (function (){var statearr_27419 = f__25938__auto__.call(null);
(statearr_27419[(6)] = c__25937__auto___27421);

return statearr_27419;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25939__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async27435 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27435 = (function (f,ch,meta27436){
this.f = f;
this.ch = ch;
this.meta27436 = meta27436;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async27435.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27437,meta27436__$1){
var self__ = this;
var _27437__$1 = this;
return (new cljs.core.async.t_cljs$core$async27435(self__.f,self__.ch,meta27436__$1));
}));

(cljs.core.async.t_cljs$core$async27435.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27437){
var self__ = this;
var _27437__$1 = this;
return self__.meta27436;
}));

(cljs.core.async.t_cljs$core$async27435.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async27435.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
}));

(cljs.core.async.t_cljs$core$async27435.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
}));

(cljs.core.async.t_cljs$core$async27435.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async27435.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async27438 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27438 = (function (f,ch,meta27436,_,fn1,meta27439){
this.f = f;
this.ch = ch;
this.meta27436 = meta27436;
this._ = _;
this.fn1 = fn1;
this.meta27439 = meta27439;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async27438.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27440,meta27439__$1){
var self__ = this;
var _27440__$1 = this;
return (new cljs.core.async.t_cljs$core$async27438(self__.f,self__.ch,self__.meta27436,self__._,self__.fn1,meta27439__$1));
}));

(cljs.core.async.t_cljs$core$async27438.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27440){
var self__ = this;
var _27440__$1 = this;
return self__.meta27439;
}));

(cljs.core.async.t_cljs$core$async27438.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async27438.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
}));

(cljs.core.async.t_cljs$core$async27438.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async27438.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return (function (p1__27434_SHARP_){
return f1.call(null,(((p1__27434_SHARP_ == null))?null:self__.f.call(null,p1__27434_SHARP_)));
});
}));

(cljs.core.async.t_cljs$core$async27438.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta27436","meta27436",-1138984243,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async27435","cljs.core.async/t_cljs$core$async27435",-1632678941,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta27439","meta27439",-1945897484,null)], null);
}));

(cljs.core.async.t_cljs$core$async27438.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async27438.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27438");

(cljs.core.async.t_cljs$core$async27438.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"cljs.core.async/t_cljs$core$async27438");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async27438.
 */
cljs.core.async.__GT_t_cljs$core$async27438 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async27438(f__$1,ch__$1,meta27436__$1,___$2,fn1__$1,meta27439){
return (new cljs.core.async.t_cljs$core$async27438(f__$1,ch__$1,meta27436__$1,___$2,fn1__$1,meta27439));
});

}

return (new cljs.core.async.t_cljs$core$async27438(self__.f,self__.ch,self__.meta27436,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4115__auto__ = ret;
if(cljs.core.truth_(and__4115__auto__)){
return (!((cljs.core.deref.call(null,ret) == null)));
} else {
return and__4115__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async27435.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async27435.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async27435.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta27436","meta27436",-1138984243,null)], null);
}));

(cljs.core.async.t_cljs$core$async27435.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async27435.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27435");

(cljs.core.async.t_cljs$core$async27435.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"cljs.core.async/t_cljs$core$async27435");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async27435.
 */
cljs.core.async.__GT_t_cljs$core$async27435 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async27435(f__$1,ch__$1,meta27436){
return (new cljs.core.async.t_cljs$core$async27435(f__$1,ch__$1,meta27436));
});

}

return (new cljs.core.async.t_cljs$core$async27435(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async27441 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27441 = (function (f,ch,meta27442){
this.f = f;
this.ch = ch;
this.meta27442 = meta27442;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async27441.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27443,meta27442__$1){
var self__ = this;
var _27443__$1 = this;
return (new cljs.core.async.t_cljs$core$async27441(self__.f,self__.ch,meta27442__$1));
}));

(cljs.core.async.t_cljs$core$async27441.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27443){
var self__ = this;
var _27443__$1 = this;
return self__.meta27442;
}));

(cljs.core.async.t_cljs$core$async27441.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async27441.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
}));

(cljs.core.async.t_cljs$core$async27441.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async27441.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async27441.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async27441.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
}));

(cljs.core.async.t_cljs$core$async27441.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta27442","meta27442",1701632984,null)], null);
}));

(cljs.core.async.t_cljs$core$async27441.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async27441.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27441");

(cljs.core.async.t_cljs$core$async27441.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"cljs.core.async/t_cljs$core$async27441");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async27441.
 */
cljs.core.async.__GT_t_cljs$core$async27441 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async27441(f__$1,ch__$1,meta27442){
return (new cljs.core.async.t_cljs$core$async27441(f__$1,ch__$1,meta27442));
});

}

return (new cljs.core.async.t_cljs$core$async27441(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async27444 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27444 = (function (p,ch,meta27445){
this.p = p;
this.ch = ch;
this.meta27445 = meta27445;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async27444.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27446,meta27445__$1){
var self__ = this;
var _27446__$1 = this;
return (new cljs.core.async.t_cljs$core$async27444(self__.p,self__.ch,meta27445__$1));
}));

(cljs.core.async.t_cljs$core$async27444.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27446){
var self__ = this;
var _27446__$1 = this;
return self__.meta27445;
}));

(cljs.core.async.t_cljs$core$async27444.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async27444.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
}));

(cljs.core.async.t_cljs$core$async27444.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
}));

(cljs.core.async.t_cljs$core$async27444.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async27444.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async27444.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async27444.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async27444.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta27445","meta27445",-1155193796,null)], null);
}));

(cljs.core.async.t_cljs$core$async27444.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async27444.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27444");

(cljs.core.async.t_cljs$core$async27444.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"cljs.core.async/t_cljs$core$async27444");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async27444.
 */
cljs.core.async.__GT_t_cljs$core$async27444 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async27444(p__$1,ch__$1,meta27445){
return (new cljs.core.async.t_cljs$core$async27444(p__$1,ch__$1,meta27445));
});

}

return (new cljs.core.async.t_cljs$core$async27444(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__27448 = arguments.length;
switch (G__27448) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
}));

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__25937__auto___27488 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__25938__auto__ = (function (){var switch__25842__auto__ = (function (state_27469){
var state_val_27470 = (state_27469[(1)]);
if((state_val_27470 === (7))){
var inst_27465 = (state_27469[(2)]);
var state_27469__$1 = state_27469;
var statearr_27471_27489 = state_27469__$1;
(statearr_27471_27489[(2)] = inst_27465);

(statearr_27471_27489[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27470 === (1))){
var state_27469__$1 = state_27469;
var statearr_27472_27490 = state_27469__$1;
(statearr_27472_27490[(2)] = null);

(statearr_27472_27490[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27470 === (4))){
var inst_27451 = (state_27469[(7)]);
var inst_27451__$1 = (state_27469[(2)]);
var inst_27452 = (inst_27451__$1 == null);
var state_27469__$1 = (function (){var statearr_27473 = state_27469;
(statearr_27473[(7)] = inst_27451__$1);

return statearr_27473;
})();
if(cljs.core.truth_(inst_27452)){
var statearr_27474_27491 = state_27469__$1;
(statearr_27474_27491[(1)] = (5));

} else {
var statearr_27475_27492 = state_27469__$1;
(statearr_27475_27492[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27470 === (6))){
var inst_27451 = (state_27469[(7)]);
var inst_27456 = p.call(null,inst_27451);
var state_27469__$1 = state_27469;
if(cljs.core.truth_(inst_27456)){
var statearr_27476_27493 = state_27469__$1;
(statearr_27476_27493[(1)] = (8));

} else {
var statearr_27477_27494 = state_27469__$1;
(statearr_27477_27494[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27470 === (3))){
var inst_27467 = (state_27469[(2)]);
var state_27469__$1 = state_27469;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27469__$1,inst_27467);
} else {
if((state_val_27470 === (2))){
var state_27469__$1 = state_27469;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27469__$1,(4),ch);
} else {
if((state_val_27470 === (11))){
var inst_27459 = (state_27469[(2)]);
var state_27469__$1 = state_27469;
var statearr_27478_27495 = state_27469__$1;
(statearr_27478_27495[(2)] = inst_27459);

(statearr_27478_27495[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27470 === (9))){
var state_27469__$1 = state_27469;
var statearr_27479_27496 = state_27469__$1;
(statearr_27479_27496[(2)] = null);

(statearr_27479_27496[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27470 === (5))){
var inst_27454 = cljs.core.async.close_BANG_.call(null,out);
var state_27469__$1 = state_27469;
var statearr_27480_27497 = state_27469__$1;
(statearr_27480_27497[(2)] = inst_27454);

(statearr_27480_27497[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27470 === (10))){
var inst_27462 = (state_27469[(2)]);
var state_27469__$1 = (function (){var statearr_27481 = state_27469;
(statearr_27481[(8)] = inst_27462);

return statearr_27481;
})();
var statearr_27482_27498 = state_27469__$1;
(statearr_27482_27498[(2)] = null);

(statearr_27482_27498[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27470 === (8))){
var inst_27451 = (state_27469[(7)]);
var state_27469__$1 = state_27469;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27469__$1,(11),out,inst_27451);
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
});
return (function() {
var cljs$core$async$state_machine__25843__auto__ = null;
var cljs$core$async$state_machine__25843__auto____0 = (function (){
var statearr_27483 = [null,null,null,null,null,null,null,null,null];
(statearr_27483[(0)] = cljs$core$async$state_machine__25843__auto__);

(statearr_27483[(1)] = (1));

return statearr_27483;
});
var cljs$core$async$state_machine__25843__auto____1 = (function (state_27469){
while(true){
var ret_value__25844__auto__ = (function (){try{while(true){
var result__25845__auto__ = switch__25842__auto__.call(null,state_27469);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25845__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25845__auto__;
}
break;
}
}catch (e27484){if((e27484 instanceof Object)){
var ex__25846__auto__ = e27484;
var statearr_27485_27499 = state_27469;
(statearr_27485_27499[(5)] = ex__25846__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27469);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27484;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25844__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27500 = state_27469;
state_27469 = G__27500;
continue;
} else {
return ret_value__25844__auto__;
}
break;
}
});
cljs$core$async$state_machine__25843__auto__ = function(state_27469){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__25843__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__25843__auto____1.call(this,state_27469);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__25843__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__25843__auto____0;
cljs$core$async$state_machine__25843__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__25843__auto____1;
return cljs$core$async$state_machine__25843__auto__;
})()
})();
var state__25939__auto__ = (function (){var statearr_27486 = f__25938__auto__.call(null);
(statearr_27486[(6)] = c__25937__auto___27488);

return statearr_27486;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25939__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__27502 = arguments.length;
switch (G__27502) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
}));

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
}));

(cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3);

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__25937__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__25938__auto__ = (function (){var switch__25842__auto__ = (function (state_27565){
var state_val_27566 = (state_27565[(1)]);
if((state_val_27566 === (7))){
var inst_27561 = (state_27565[(2)]);
var state_27565__$1 = state_27565;
var statearr_27567_27605 = state_27565__$1;
(statearr_27567_27605[(2)] = inst_27561);

(statearr_27567_27605[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27566 === (20))){
var inst_27531 = (state_27565[(7)]);
var inst_27542 = (state_27565[(2)]);
var inst_27543 = cljs.core.next.call(null,inst_27531);
var inst_27517 = inst_27543;
var inst_27518 = null;
var inst_27519 = (0);
var inst_27520 = (0);
var state_27565__$1 = (function (){var statearr_27568 = state_27565;
(statearr_27568[(8)] = inst_27518);

(statearr_27568[(9)] = inst_27542);

(statearr_27568[(10)] = inst_27517);

(statearr_27568[(11)] = inst_27520);

(statearr_27568[(12)] = inst_27519);

return statearr_27568;
})();
var statearr_27569_27606 = state_27565__$1;
(statearr_27569_27606[(2)] = null);

(statearr_27569_27606[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27566 === (1))){
var state_27565__$1 = state_27565;
var statearr_27570_27607 = state_27565__$1;
(statearr_27570_27607[(2)] = null);

(statearr_27570_27607[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27566 === (4))){
var inst_27506 = (state_27565[(13)]);
var inst_27506__$1 = (state_27565[(2)]);
var inst_27507 = (inst_27506__$1 == null);
var state_27565__$1 = (function (){var statearr_27571 = state_27565;
(statearr_27571[(13)] = inst_27506__$1);

return statearr_27571;
})();
if(cljs.core.truth_(inst_27507)){
var statearr_27572_27608 = state_27565__$1;
(statearr_27572_27608[(1)] = (5));

} else {
var statearr_27573_27609 = state_27565__$1;
(statearr_27573_27609[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27566 === (15))){
var state_27565__$1 = state_27565;
var statearr_27577_27610 = state_27565__$1;
(statearr_27577_27610[(2)] = null);

(statearr_27577_27610[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27566 === (21))){
var state_27565__$1 = state_27565;
var statearr_27578_27611 = state_27565__$1;
(statearr_27578_27611[(2)] = null);

(statearr_27578_27611[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27566 === (13))){
var inst_27518 = (state_27565[(8)]);
var inst_27517 = (state_27565[(10)]);
var inst_27520 = (state_27565[(11)]);
var inst_27519 = (state_27565[(12)]);
var inst_27527 = (state_27565[(2)]);
var inst_27528 = (inst_27520 + (1));
var tmp27574 = inst_27518;
var tmp27575 = inst_27517;
var tmp27576 = inst_27519;
var inst_27517__$1 = tmp27575;
var inst_27518__$1 = tmp27574;
var inst_27519__$1 = tmp27576;
var inst_27520__$1 = inst_27528;
var state_27565__$1 = (function (){var statearr_27579 = state_27565;
(statearr_27579[(8)] = inst_27518__$1);

(statearr_27579[(10)] = inst_27517__$1);

(statearr_27579[(11)] = inst_27520__$1);

(statearr_27579[(12)] = inst_27519__$1);

(statearr_27579[(14)] = inst_27527);

return statearr_27579;
})();
var statearr_27580_27612 = state_27565__$1;
(statearr_27580_27612[(2)] = null);

(statearr_27580_27612[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27566 === (22))){
var state_27565__$1 = state_27565;
var statearr_27581_27613 = state_27565__$1;
(statearr_27581_27613[(2)] = null);

(statearr_27581_27613[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27566 === (6))){
var inst_27506 = (state_27565[(13)]);
var inst_27515 = f.call(null,inst_27506);
var inst_27516 = cljs.core.seq.call(null,inst_27515);
var inst_27517 = inst_27516;
var inst_27518 = null;
var inst_27519 = (0);
var inst_27520 = (0);
var state_27565__$1 = (function (){var statearr_27582 = state_27565;
(statearr_27582[(8)] = inst_27518);

(statearr_27582[(10)] = inst_27517);

(statearr_27582[(11)] = inst_27520);

(statearr_27582[(12)] = inst_27519);

return statearr_27582;
})();
var statearr_27583_27614 = state_27565__$1;
(statearr_27583_27614[(2)] = null);

(statearr_27583_27614[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27566 === (17))){
var inst_27531 = (state_27565[(7)]);
var inst_27535 = cljs.core.chunk_first.call(null,inst_27531);
var inst_27536 = cljs.core.chunk_rest.call(null,inst_27531);
var inst_27537 = cljs.core.count.call(null,inst_27535);
var inst_27517 = inst_27536;
var inst_27518 = inst_27535;
var inst_27519 = inst_27537;
var inst_27520 = (0);
var state_27565__$1 = (function (){var statearr_27584 = state_27565;
(statearr_27584[(8)] = inst_27518);

(statearr_27584[(10)] = inst_27517);

(statearr_27584[(11)] = inst_27520);

(statearr_27584[(12)] = inst_27519);

return statearr_27584;
})();
var statearr_27585_27615 = state_27565__$1;
(statearr_27585_27615[(2)] = null);

(statearr_27585_27615[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27566 === (3))){
var inst_27563 = (state_27565[(2)]);
var state_27565__$1 = state_27565;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27565__$1,inst_27563);
} else {
if((state_val_27566 === (12))){
var inst_27551 = (state_27565[(2)]);
var state_27565__$1 = state_27565;
var statearr_27586_27616 = state_27565__$1;
(statearr_27586_27616[(2)] = inst_27551);

(statearr_27586_27616[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27566 === (2))){
var state_27565__$1 = state_27565;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27565__$1,(4),in$);
} else {
if((state_val_27566 === (23))){
var inst_27559 = (state_27565[(2)]);
var state_27565__$1 = state_27565;
var statearr_27587_27617 = state_27565__$1;
(statearr_27587_27617[(2)] = inst_27559);

(statearr_27587_27617[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27566 === (19))){
var inst_27546 = (state_27565[(2)]);
var state_27565__$1 = state_27565;
var statearr_27588_27618 = state_27565__$1;
(statearr_27588_27618[(2)] = inst_27546);

(statearr_27588_27618[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27566 === (11))){
var inst_27517 = (state_27565[(10)]);
var inst_27531 = (state_27565[(7)]);
var inst_27531__$1 = cljs.core.seq.call(null,inst_27517);
var state_27565__$1 = (function (){var statearr_27589 = state_27565;
(statearr_27589[(7)] = inst_27531__$1);

return statearr_27589;
})();
if(inst_27531__$1){
var statearr_27590_27619 = state_27565__$1;
(statearr_27590_27619[(1)] = (14));

} else {
var statearr_27591_27620 = state_27565__$1;
(statearr_27591_27620[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27566 === (9))){
var inst_27553 = (state_27565[(2)]);
var inst_27554 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_27565__$1 = (function (){var statearr_27592 = state_27565;
(statearr_27592[(15)] = inst_27553);

return statearr_27592;
})();
if(cljs.core.truth_(inst_27554)){
var statearr_27593_27621 = state_27565__$1;
(statearr_27593_27621[(1)] = (21));

} else {
var statearr_27594_27622 = state_27565__$1;
(statearr_27594_27622[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27566 === (5))){
var inst_27509 = cljs.core.async.close_BANG_.call(null,out);
var state_27565__$1 = state_27565;
var statearr_27595_27623 = state_27565__$1;
(statearr_27595_27623[(2)] = inst_27509);

(statearr_27595_27623[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27566 === (14))){
var inst_27531 = (state_27565[(7)]);
var inst_27533 = cljs.core.chunked_seq_QMARK_.call(null,inst_27531);
var state_27565__$1 = state_27565;
if(inst_27533){
var statearr_27596_27624 = state_27565__$1;
(statearr_27596_27624[(1)] = (17));

} else {
var statearr_27597_27625 = state_27565__$1;
(statearr_27597_27625[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27566 === (16))){
var inst_27549 = (state_27565[(2)]);
var state_27565__$1 = state_27565;
var statearr_27598_27626 = state_27565__$1;
(statearr_27598_27626[(2)] = inst_27549);

(statearr_27598_27626[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27566 === (10))){
var inst_27518 = (state_27565[(8)]);
var inst_27520 = (state_27565[(11)]);
var inst_27525 = cljs.core._nth.call(null,inst_27518,inst_27520);
var state_27565__$1 = state_27565;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27565__$1,(13),out,inst_27525);
} else {
if((state_val_27566 === (18))){
var inst_27531 = (state_27565[(7)]);
var inst_27540 = cljs.core.first.call(null,inst_27531);
var state_27565__$1 = state_27565;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27565__$1,(20),out,inst_27540);
} else {
if((state_val_27566 === (8))){
var inst_27520 = (state_27565[(11)]);
var inst_27519 = (state_27565[(12)]);
var inst_27522 = (inst_27520 < inst_27519);
var inst_27523 = inst_27522;
var state_27565__$1 = state_27565;
if(cljs.core.truth_(inst_27523)){
var statearr_27599_27627 = state_27565__$1;
(statearr_27599_27627[(1)] = (10));

} else {
var statearr_27600_27628 = state_27565__$1;
(statearr_27600_27628[(1)] = (11));

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
});
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__25843__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__25843__auto____0 = (function (){
var statearr_27601 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27601[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__25843__auto__);

(statearr_27601[(1)] = (1));

return statearr_27601;
});
var cljs$core$async$mapcat_STAR__$_state_machine__25843__auto____1 = (function (state_27565){
while(true){
var ret_value__25844__auto__ = (function (){try{while(true){
var result__25845__auto__ = switch__25842__auto__.call(null,state_27565);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25845__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25845__auto__;
}
break;
}
}catch (e27602){if((e27602 instanceof Object)){
var ex__25846__auto__ = e27602;
var statearr_27603_27629 = state_27565;
(statearr_27603_27629[(5)] = ex__25846__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27565);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27602;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25844__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27630 = state_27565;
state_27565 = G__27630;
continue;
} else {
return ret_value__25844__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__25843__auto__ = function(state_27565){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__25843__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__25843__auto____1.call(this,state_27565);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__25843__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__25843__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__25843__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__25843__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__25843__auto__;
})()
})();
var state__25939__auto__ = (function (){var statearr_27604 = f__25938__auto__.call(null);
(statearr_27604[(6)] = c__25937__auto__);

return statearr_27604;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25939__auto__);
}));

return c__25937__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__27632 = arguments.length;
switch (G__27632) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
}));

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
}));

(cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__27635 = arguments.length;
switch (G__27635) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
}));

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
}));

(cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__27638 = arguments.length;
switch (G__27638) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
}));

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__25937__auto___27685 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__25938__auto__ = (function (){var switch__25842__auto__ = (function (state_27662){
var state_val_27663 = (state_27662[(1)]);
if((state_val_27663 === (7))){
var inst_27657 = (state_27662[(2)]);
var state_27662__$1 = state_27662;
var statearr_27664_27686 = state_27662__$1;
(statearr_27664_27686[(2)] = inst_27657);

(statearr_27664_27686[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27663 === (1))){
var inst_27639 = null;
var state_27662__$1 = (function (){var statearr_27665 = state_27662;
(statearr_27665[(7)] = inst_27639);

return statearr_27665;
})();
var statearr_27666_27687 = state_27662__$1;
(statearr_27666_27687[(2)] = null);

(statearr_27666_27687[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27663 === (4))){
var inst_27642 = (state_27662[(8)]);
var inst_27642__$1 = (state_27662[(2)]);
var inst_27643 = (inst_27642__$1 == null);
var inst_27644 = cljs.core.not.call(null,inst_27643);
var state_27662__$1 = (function (){var statearr_27667 = state_27662;
(statearr_27667[(8)] = inst_27642__$1);

return statearr_27667;
})();
if(inst_27644){
var statearr_27668_27688 = state_27662__$1;
(statearr_27668_27688[(1)] = (5));

} else {
var statearr_27669_27689 = state_27662__$1;
(statearr_27669_27689[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27663 === (6))){
var state_27662__$1 = state_27662;
var statearr_27670_27690 = state_27662__$1;
(statearr_27670_27690[(2)] = null);

(statearr_27670_27690[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27663 === (3))){
var inst_27659 = (state_27662[(2)]);
var inst_27660 = cljs.core.async.close_BANG_.call(null,out);
var state_27662__$1 = (function (){var statearr_27671 = state_27662;
(statearr_27671[(9)] = inst_27659);

return statearr_27671;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27662__$1,inst_27660);
} else {
if((state_val_27663 === (2))){
var state_27662__$1 = state_27662;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27662__$1,(4),ch);
} else {
if((state_val_27663 === (11))){
var inst_27642 = (state_27662[(8)]);
var inst_27651 = (state_27662[(2)]);
var inst_27639 = inst_27642;
var state_27662__$1 = (function (){var statearr_27672 = state_27662;
(statearr_27672[(10)] = inst_27651);

(statearr_27672[(7)] = inst_27639);

return statearr_27672;
})();
var statearr_27673_27691 = state_27662__$1;
(statearr_27673_27691[(2)] = null);

(statearr_27673_27691[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27663 === (9))){
var inst_27642 = (state_27662[(8)]);
var state_27662__$1 = state_27662;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27662__$1,(11),out,inst_27642);
} else {
if((state_val_27663 === (5))){
var inst_27642 = (state_27662[(8)]);
var inst_27639 = (state_27662[(7)]);
var inst_27646 = cljs.core._EQ_.call(null,inst_27642,inst_27639);
var state_27662__$1 = state_27662;
if(inst_27646){
var statearr_27675_27692 = state_27662__$1;
(statearr_27675_27692[(1)] = (8));

} else {
var statearr_27676_27693 = state_27662__$1;
(statearr_27676_27693[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27663 === (10))){
var inst_27654 = (state_27662[(2)]);
var state_27662__$1 = state_27662;
var statearr_27677_27694 = state_27662__$1;
(statearr_27677_27694[(2)] = inst_27654);

(statearr_27677_27694[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27663 === (8))){
var inst_27639 = (state_27662[(7)]);
var tmp27674 = inst_27639;
var inst_27639__$1 = tmp27674;
var state_27662__$1 = (function (){var statearr_27678 = state_27662;
(statearr_27678[(7)] = inst_27639__$1);

return statearr_27678;
})();
var statearr_27679_27695 = state_27662__$1;
(statearr_27679_27695[(2)] = null);

(statearr_27679_27695[(1)] = (2));


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
});
return (function() {
var cljs$core$async$state_machine__25843__auto__ = null;
var cljs$core$async$state_machine__25843__auto____0 = (function (){
var statearr_27680 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_27680[(0)] = cljs$core$async$state_machine__25843__auto__);

(statearr_27680[(1)] = (1));

return statearr_27680;
});
var cljs$core$async$state_machine__25843__auto____1 = (function (state_27662){
while(true){
var ret_value__25844__auto__ = (function (){try{while(true){
var result__25845__auto__ = switch__25842__auto__.call(null,state_27662);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25845__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25845__auto__;
}
break;
}
}catch (e27681){if((e27681 instanceof Object)){
var ex__25846__auto__ = e27681;
var statearr_27682_27696 = state_27662;
(statearr_27682_27696[(5)] = ex__25846__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27662);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27681;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25844__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27697 = state_27662;
state_27662 = G__27697;
continue;
} else {
return ret_value__25844__auto__;
}
break;
}
});
cljs$core$async$state_machine__25843__auto__ = function(state_27662){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__25843__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__25843__auto____1.call(this,state_27662);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__25843__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__25843__auto____0;
cljs$core$async$state_machine__25843__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__25843__auto____1;
return cljs$core$async$state_machine__25843__auto__;
})()
})();
var state__25939__auto__ = (function (){var statearr_27683 = f__25938__auto__.call(null);
(statearr_27683[(6)] = c__25937__auto___27685);

return statearr_27683;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25939__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__27699 = arguments.length;
switch (G__27699) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
}));

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__25937__auto___27765 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__25938__auto__ = (function (){var switch__25842__auto__ = (function (state_27737){
var state_val_27738 = (state_27737[(1)]);
if((state_val_27738 === (7))){
var inst_27733 = (state_27737[(2)]);
var state_27737__$1 = state_27737;
var statearr_27739_27766 = state_27737__$1;
(statearr_27739_27766[(2)] = inst_27733);

(statearr_27739_27766[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27738 === (1))){
var inst_27700 = (new Array(n));
var inst_27701 = inst_27700;
var inst_27702 = (0);
var state_27737__$1 = (function (){var statearr_27740 = state_27737;
(statearr_27740[(7)] = inst_27701);

(statearr_27740[(8)] = inst_27702);

return statearr_27740;
})();
var statearr_27741_27767 = state_27737__$1;
(statearr_27741_27767[(2)] = null);

(statearr_27741_27767[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27738 === (4))){
var inst_27705 = (state_27737[(9)]);
var inst_27705__$1 = (state_27737[(2)]);
var inst_27706 = (inst_27705__$1 == null);
var inst_27707 = cljs.core.not.call(null,inst_27706);
var state_27737__$1 = (function (){var statearr_27742 = state_27737;
(statearr_27742[(9)] = inst_27705__$1);

return statearr_27742;
})();
if(inst_27707){
var statearr_27743_27768 = state_27737__$1;
(statearr_27743_27768[(1)] = (5));

} else {
var statearr_27744_27769 = state_27737__$1;
(statearr_27744_27769[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27738 === (15))){
var inst_27727 = (state_27737[(2)]);
var state_27737__$1 = state_27737;
var statearr_27745_27770 = state_27737__$1;
(statearr_27745_27770[(2)] = inst_27727);

(statearr_27745_27770[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27738 === (13))){
var state_27737__$1 = state_27737;
var statearr_27746_27771 = state_27737__$1;
(statearr_27746_27771[(2)] = null);

(statearr_27746_27771[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27738 === (6))){
var inst_27702 = (state_27737[(8)]);
var inst_27723 = (inst_27702 > (0));
var state_27737__$1 = state_27737;
if(cljs.core.truth_(inst_27723)){
var statearr_27747_27772 = state_27737__$1;
(statearr_27747_27772[(1)] = (12));

} else {
var statearr_27748_27773 = state_27737__$1;
(statearr_27748_27773[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27738 === (3))){
var inst_27735 = (state_27737[(2)]);
var state_27737__$1 = state_27737;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27737__$1,inst_27735);
} else {
if((state_val_27738 === (12))){
var inst_27701 = (state_27737[(7)]);
var inst_27725 = cljs.core.vec.call(null,inst_27701);
var state_27737__$1 = state_27737;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27737__$1,(15),out,inst_27725);
} else {
if((state_val_27738 === (2))){
var state_27737__$1 = state_27737;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27737__$1,(4),ch);
} else {
if((state_val_27738 === (11))){
var inst_27717 = (state_27737[(2)]);
var inst_27718 = (new Array(n));
var inst_27701 = inst_27718;
var inst_27702 = (0);
var state_27737__$1 = (function (){var statearr_27749 = state_27737;
(statearr_27749[(7)] = inst_27701);

(statearr_27749[(8)] = inst_27702);

(statearr_27749[(10)] = inst_27717);

return statearr_27749;
})();
var statearr_27750_27774 = state_27737__$1;
(statearr_27750_27774[(2)] = null);

(statearr_27750_27774[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27738 === (9))){
var inst_27701 = (state_27737[(7)]);
var inst_27715 = cljs.core.vec.call(null,inst_27701);
var state_27737__$1 = state_27737;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27737__$1,(11),out,inst_27715);
} else {
if((state_val_27738 === (5))){
var inst_27701 = (state_27737[(7)]);
var inst_27702 = (state_27737[(8)]);
var inst_27705 = (state_27737[(9)]);
var inst_27710 = (state_27737[(11)]);
var inst_27709 = (inst_27701[inst_27702] = inst_27705);
var inst_27710__$1 = (inst_27702 + (1));
var inst_27711 = (inst_27710__$1 < n);
var state_27737__$1 = (function (){var statearr_27751 = state_27737;
(statearr_27751[(11)] = inst_27710__$1);

(statearr_27751[(12)] = inst_27709);

return statearr_27751;
})();
if(cljs.core.truth_(inst_27711)){
var statearr_27752_27775 = state_27737__$1;
(statearr_27752_27775[(1)] = (8));

} else {
var statearr_27753_27776 = state_27737__$1;
(statearr_27753_27776[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27738 === (14))){
var inst_27730 = (state_27737[(2)]);
var inst_27731 = cljs.core.async.close_BANG_.call(null,out);
var state_27737__$1 = (function (){var statearr_27755 = state_27737;
(statearr_27755[(13)] = inst_27730);

return statearr_27755;
})();
var statearr_27756_27777 = state_27737__$1;
(statearr_27756_27777[(2)] = inst_27731);

(statearr_27756_27777[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27738 === (10))){
var inst_27721 = (state_27737[(2)]);
var state_27737__$1 = state_27737;
var statearr_27757_27778 = state_27737__$1;
(statearr_27757_27778[(2)] = inst_27721);

(statearr_27757_27778[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27738 === (8))){
var inst_27701 = (state_27737[(7)]);
var inst_27710 = (state_27737[(11)]);
var tmp27754 = inst_27701;
var inst_27701__$1 = tmp27754;
var inst_27702 = inst_27710;
var state_27737__$1 = (function (){var statearr_27758 = state_27737;
(statearr_27758[(7)] = inst_27701__$1);

(statearr_27758[(8)] = inst_27702);

return statearr_27758;
})();
var statearr_27759_27779 = state_27737__$1;
(statearr_27759_27779[(2)] = null);

(statearr_27759_27779[(1)] = (2));


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
});
return (function() {
var cljs$core$async$state_machine__25843__auto__ = null;
var cljs$core$async$state_machine__25843__auto____0 = (function (){
var statearr_27760 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27760[(0)] = cljs$core$async$state_machine__25843__auto__);

(statearr_27760[(1)] = (1));

return statearr_27760;
});
var cljs$core$async$state_machine__25843__auto____1 = (function (state_27737){
while(true){
var ret_value__25844__auto__ = (function (){try{while(true){
var result__25845__auto__ = switch__25842__auto__.call(null,state_27737);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25845__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25845__auto__;
}
break;
}
}catch (e27761){if((e27761 instanceof Object)){
var ex__25846__auto__ = e27761;
var statearr_27762_27780 = state_27737;
(statearr_27762_27780[(5)] = ex__25846__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27737);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27761;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25844__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27781 = state_27737;
state_27737 = G__27781;
continue;
} else {
return ret_value__25844__auto__;
}
break;
}
});
cljs$core$async$state_machine__25843__auto__ = function(state_27737){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__25843__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__25843__auto____1.call(this,state_27737);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__25843__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__25843__auto____0;
cljs$core$async$state_machine__25843__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__25843__auto____1;
return cljs$core$async$state_machine__25843__auto__;
})()
})();
var state__25939__auto__ = (function (){var statearr_27763 = f__25938__auto__.call(null);
(statearr_27763[(6)] = c__25937__auto___27765);

return statearr_27763;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25939__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__27783 = arguments.length;
switch (G__27783) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
}));

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__25937__auto___27853 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__25938__auto__ = (function (){var switch__25842__auto__ = (function (state_27825){
var state_val_27826 = (state_27825[(1)]);
if((state_val_27826 === (7))){
var inst_27821 = (state_27825[(2)]);
var state_27825__$1 = state_27825;
var statearr_27827_27854 = state_27825__$1;
(statearr_27827_27854[(2)] = inst_27821);

(statearr_27827_27854[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27826 === (1))){
var inst_27784 = [];
var inst_27785 = inst_27784;
var inst_27786 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_27825__$1 = (function (){var statearr_27828 = state_27825;
(statearr_27828[(7)] = inst_27786);

(statearr_27828[(8)] = inst_27785);

return statearr_27828;
})();
var statearr_27829_27855 = state_27825__$1;
(statearr_27829_27855[(2)] = null);

(statearr_27829_27855[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27826 === (4))){
var inst_27789 = (state_27825[(9)]);
var inst_27789__$1 = (state_27825[(2)]);
var inst_27790 = (inst_27789__$1 == null);
var inst_27791 = cljs.core.not.call(null,inst_27790);
var state_27825__$1 = (function (){var statearr_27830 = state_27825;
(statearr_27830[(9)] = inst_27789__$1);

return statearr_27830;
})();
if(inst_27791){
var statearr_27831_27856 = state_27825__$1;
(statearr_27831_27856[(1)] = (5));

} else {
var statearr_27832_27857 = state_27825__$1;
(statearr_27832_27857[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27826 === (15))){
var inst_27815 = (state_27825[(2)]);
var state_27825__$1 = state_27825;
var statearr_27833_27858 = state_27825__$1;
(statearr_27833_27858[(2)] = inst_27815);

(statearr_27833_27858[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27826 === (13))){
var state_27825__$1 = state_27825;
var statearr_27834_27859 = state_27825__$1;
(statearr_27834_27859[(2)] = null);

(statearr_27834_27859[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27826 === (6))){
var inst_27785 = (state_27825[(8)]);
var inst_27810 = inst_27785.length;
var inst_27811 = (inst_27810 > (0));
var state_27825__$1 = state_27825;
if(cljs.core.truth_(inst_27811)){
var statearr_27835_27860 = state_27825__$1;
(statearr_27835_27860[(1)] = (12));

} else {
var statearr_27836_27861 = state_27825__$1;
(statearr_27836_27861[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27826 === (3))){
var inst_27823 = (state_27825[(2)]);
var state_27825__$1 = state_27825;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27825__$1,inst_27823);
} else {
if((state_val_27826 === (12))){
var inst_27785 = (state_27825[(8)]);
var inst_27813 = cljs.core.vec.call(null,inst_27785);
var state_27825__$1 = state_27825;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27825__$1,(15),out,inst_27813);
} else {
if((state_val_27826 === (2))){
var state_27825__$1 = state_27825;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27825__$1,(4),ch);
} else {
if((state_val_27826 === (11))){
var inst_27793 = (state_27825[(10)]);
var inst_27789 = (state_27825[(9)]);
var inst_27803 = (state_27825[(2)]);
var inst_27804 = [];
var inst_27805 = inst_27804.push(inst_27789);
var inst_27785 = inst_27804;
var inst_27786 = inst_27793;
var state_27825__$1 = (function (){var statearr_27837 = state_27825;
(statearr_27837[(7)] = inst_27786);

(statearr_27837[(11)] = inst_27805);

(statearr_27837[(8)] = inst_27785);

(statearr_27837[(12)] = inst_27803);

return statearr_27837;
})();
var statearr_27838_27862 = state_27825__$1;
(statearr_27838_27862[(2)] = null);

(statearr_27838_27862[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27826 === (9))){
var inst_27785 = (state_27825[(8)]);
var inst_27801 = cljs.core.vec.call(null,inst_27785);
var state_27825__$1 = state_27825;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27825__$1,(11),out,inst_27801);
} else {
if((state_val_27826 === (5))){
var inst_27786 = (state_27825[(7)]);
var inst_27793 = (state_27825[(10)]);
var inst_27789 = (state_27825[(9)]);
var inst_27793__$1 = f.call(null,inst_27789);
var inst_27794 = cljs.core._EQ_.call(null,inst_27793__$1,inst_27786);
var inst_27795 = cljs.core.keyword_identical_QMARK_.call(null,inst_27786,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_27796 = ((inst_27794) || (inst_27795));
var state_27825__$1 = (function (){var statearr_27839 = state_27825;
(statearr_27839[(10)] = inst_27793__$1);

return statearr_27839;
})();
if(cljs.core.truth_(inst_27796)){
var statearr_27840_27863 = state_27825__$1;
(statearr_27840_27863[(1)] = (8));

} else {
var statearr_27841_27864 = state_27825__$1;
(statearr_27841_27864[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27826 === (14))){
var inst_27818 = (state_27825[(2)]);
var inst_27819 = cljs.core.async.close_BANG_.call(null,out);
var state_27825__$1 = (function (){var statearr_27843 = state_27825;
(statearr_27843[(13)] = inst_27818);

return statearr_27843;
})();
var statearr_27844_27865 = state_27825__$1;
(statearr_27844_27865[(2)] = inst_27819);

(statearr_27844_27865[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27826 === (10))){
var inst_27808 = (state_27825[(2)]);
var state_27825__$1 = state_27825;
var statearr_27845_27866 = state_27825__$1;
(statearr_27845_27866[(2)] = inst_27808);

(statearr_27845_27866[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27826 === (8))){
var inst_27785 = (state_27825[(8)]);
var inst_27793 = (state_27825[(10)]);
var inst_27789 = (state_27825[(9)]);
var inst_27798 = inst_27785.push(inst_27789);
var tmp27842 = inst_27785;
var inst_27785__$1 = tmp27842;
var inst_27786 = inst_27793;
var state_27825__$1 = (function (){var statearr_27846 = state_27825;
(statearr_27846[(7)] = inst_27786);

(statearr_27846[(8)] = inst_27785__$1);

(statearr_27846[(14)] = inst_27798);

return statearr_27846;
})();
var statearr_27847_27867 = state_27825__$1;
(statearr_27847_27867[(2)] = null);

(statearr_27847_27867[(1)] = (2));


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
});
return (function() {
var cljs$core$async$state_machine__25843__auto__ = null;
var cljs$core$async$state_machine__25843__auto____0 = (function (){
var statearr_27848 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27848[(0)] = cljs$core$async$state_machine__25843__auto__);

(statearr_27848[(1)] = (1));

return statearr_27848;
});
var cljs$core$async$state_machine__25843__auto____1 = (function (state_27825){
while(true){
var ret_value__25844__auto__ = (function (){try{while(true){
var result__25845__auto__ = switch__25842__auto__.call(null,state_27825);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25845__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25845__auto__;
}
break;
}
}catch (e27849){if((e27849 instanceof Object)){
var ex__25846__auto__ = e27849;
var statearr_27850_27868 = state_27825;
(statearr_27850_27868[(5)] = ex__25846__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27825);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27849;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25844__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27869 = state_27825;
state_27825 = G__27869;
continue;
} else {
return ret_value__25844__auto__;
}
break;
}
});
cljs$core$async$state_machine__25843__auto__ = function(state_27825){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__25843__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__25843__auto____1.call(this,state_27825);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__25843__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__25843__auto____0;
cljs$core$async$state_machine__25843__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__25843__auto____1;
return cljs$core$async$state_machine__25843__auto__;
})()
})();
var state__25939__auto__ = (function (){var statearr_27851 = f__25938__auto__.call(null);
(statearr_27851[(6)] = c__25937__auto___27853);

return statearr_27851;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25939__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=async.js.map?rel=1628173109510
