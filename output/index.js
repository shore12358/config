"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const lodash_1 = require("lodash");
let props_config = {}, path, env;
const setPath = (config_path) => {
    if (!/^\./.test(config_path)) {
        props_config = {};
        path = config_path;
        /\/$/.test(path) || (path = path + '/');
        init(path);
    }
    else {
        throw new Error('path is relative path which is not available');
    }
};
const init = (path) => {
    let _env = process.env['SERVER_ENV'];
    env = _env ? _env.toLowerCase() : 'dev';
    extendConfig(['default', env], path);
};
const extendConfig = (envs, path) => {
    let _env;
    for (_env of envs) {
        try {
            props_config = lodash_1.defaultsDeep(require(`${path}config.${_env}`), props_config);
        }
        catch (e) {
            return props_config;
        }
    }
};
const getProp = (name_path) => {
    return lodash_1.get(props_config, name_path);
};
const config = {
    set: setPath,
    get: getProp
};
exports.default = config;
