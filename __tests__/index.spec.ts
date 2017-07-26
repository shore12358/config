import config from '../src';
import { DB as default_db } from './__mock__/config.default';
import { DB as test_db } from './__mock__/config.test';
import { defaults } from 'lodash';
import * as path from 'path';

describe('config module', () => {
    let test_db_prop = Object.assign({}, test_db);
    defaults(test_db_prop, default_db);

    it('got db property in test environment successfully', () => {
        let result;

        config.set(path.join(__dirname, './__mock__'));
        result = config.get('DB');
        expect(result).toEqual(test_db_prop);
    });
    it('would throw an error when inited path is wrong', () => {
        expect(() => { config.set('./__mock__'); }).toThrow('path is relative path which is not available');
    });
    it('old value will replaced by new value', () => {
        let result;
        process.env['SERVER_ENV'] = undefined;
        config.set(path.join(__dirname, './__mock__'));
        process.env['SERVER_ENV'] = 'test';
        result = config.get('DB');
        expect(result).toEqual(default_db);
    });
});