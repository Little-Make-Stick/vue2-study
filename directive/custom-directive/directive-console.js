function bindConsole(el, binding, vnode, oldVnode) {
    console.log("------------------bind-------------------");
    console.log("el=====>", el);
    console.log("binding=====>", binding);
    console.log("vnode=====>", vnode);
    console.log("oldVnode=====>", oldVnode);
    console.log("-----------------------------------------");
}
function insertedConsole(el, binding, vnode, oldVnode) {
    console.log("----------------inserted-----------------");
    console.log("el=====>", el);
    console.log("binding=====>", binding);
    console.log("vnode=====>", vnode);
    console.log("oldVnode=====>", oldVnode);
    console.log("-----------------------------------------");
}
function updateConsole(el, binding, vnode, oldVnode) {
    console.log("-----------------update------------------");
    console.log("el=====>", el);
    console.log("binding=====>", binding);
    console.log("vnode=====>", vnode);
    console.log("oldVnode=====>", oldVnode);
    console.log("-----------------------------------------");
}
function componentUpdatedConsole(el, binding, vnode, oldVnode) {
    console.log("------------componentUpdated-------------");
    console.log("el=====>", el);
    console.log("binding=====>", binding);
    console.log("vnode=====>", vnode);
    console.log("oldVnode=====>", oldVnode);
    console.log("-----------------------------------------");

}
function unbindConsole(el, binding, vnode, oldVnode) {
    console.log("-----------------unbind------------------");
    console.log("el=====>", el);
    console.log("binding=====>", binding);
    console.log("vnode=====>", vnode);
    console.log("oldVnode=====>", oldVnode);
    console.log("-----------------------------------------");
}

