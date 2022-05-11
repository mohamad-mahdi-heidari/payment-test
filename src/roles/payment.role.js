const AccessControl = require("accesscontrol");
const ac = new AccessControl();
const resource='payment';
exports.roles = (function() {
    ac.grant("basic")
        .createOwn(resource)
        .readOwn(resource)
        .updateOwn(resource)
        .deleteOwn(resource)
    ac.grant("admin")
        .readAny(resource)

    return ac;
})();
exports.resource=resource;
