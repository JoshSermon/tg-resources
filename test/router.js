import { expect } from 'chai';

import Router, { Resource } from '../';


export default {
    'cant create router with route names which collide with router built-in methods': {
        'options overwrite throws'() {
            expect(() => {
                new Router({
                    options: new Resource('kek')
                });
            }).to.throw(Error, /options collides with Router built-in method names/);
        },
        'isBound overwrite throws'() {
            expect(() => {
                new Router({
                    isBound: new Resource('kek')
                });
            }).to.throw(Error, /isBound collides with Router built-in method names/);
        },
        'parent overwrite throws'() {
            expect(() => {
                new Router({
                    parent: new Resource('kek')
                });
            }).to.throw(Error, /parent collides with Router built-in method names/);
        },
        '_setParent overwrite throws'() {
            expect(() => {
                new Router({
                    _setParent: new Resource('kek')
                });
            }).to.throw(Error, /Route '_setParent' is invalid. Route names must not start with an underscore/);
        },
        'route names cant start with underscore'() {
            expect(() => {
                new Router({
                    _randomRoute: new Resource('kek')
                });
            }).to.throw(Error, /Route '_randomRoute' is invalid. Route names must not start with an underscore/);
        },
    },
    'defaults work': {
        'defaultRoutes works'() {
            class SDK extends Router {
                static defaultRoutes = {
                    me: new Resource('user/me'),
                };
            }

            const sdk = new SDK();

            expect(sdk.me).to.be.an.instanceof(Resource);
            expect(sdk.me.apiEndpoint).to.be.equal('user/me');
        },
        'defaultOptions works'() {
            class SDK extends Router {
                static defaultOptions = {
                    apiRoot: 'some/root',
                };
            }

            const sdk = new SDK();

            expect(sdk.options).to.be.an('object');
            expect(sdk.options.apiRoot).to.be.equal('some/root');
        }
    }
}
