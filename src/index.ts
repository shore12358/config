import { defaultsDeep, get as _get } from "lodash";

let props_config: any = {},
    path: string, env: string;

const setPath = (config_path: string) => {
    if(!/^\./.test(config_path)) {
        props_config = {};
        path = config_path;
        /\/$/.test(path) || (path = path + '/');
        init(path);
    } else {
        throw new Error('path is relative path which is not available');
    }
};

const init = (path: string) => {
    let _env = process.env['SERVER_ENV'];
    env = _env ? _env.toLowerCase() : 'dev';
    extendConfig(['default', env], path);
};

const extendConfig = (envs: string[], path: string) => {
    let _env;
    for (_env of envs) {
        try {
            props_config = defaultsDeep(require(`${path}config.${_env}`), props_config);
        }
        catch (e) {
            return props_config;
        }
    }
};

const getProp = (name_path: string): any => {
    return _get(props_config, name_path);
};

const config = {
    set: setPath,
    get: getProp
};

export default config;
