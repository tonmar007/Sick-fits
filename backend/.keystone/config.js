var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// keystone.ts
var keystone_exports = {};
__export(keystone_exports, {
  default: () => keystone_default
});
module.exports = __toCommonJS(keystone_exports);
var import_config = require("dotenv/config");
var import_core = require("@keystone-6/core");
var databaseURL = process.env.DATABASE_URL || "mongodb://localhost/keystone-sick-fits-tutorial";
var sessionConfig = {
  maxAge: 60 * 60 * 24 * 360,
  secret: process.env.COOKIE_SECRET
};
var keystone_default = (0, import_core.config)({
  server: {
    cors: {
      origin: [process.env.FRONTEND_URL],
      credentials: true
    }
  },
  db: {
    adapter: "mongoose",
    url: databaseURL
  },
  // lists: createSchema({}),
  ui: {
    isAccessAllowed: () => true
  }
});
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {});
