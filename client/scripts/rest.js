import { sync } from 'vuex-router-sync'
import router from '../router'
import store from '../store'
import { normalize } from 'path'
import * as Utils from './utils'

/**
 * Wait for store and router to sync
 * @return {object} router query object
 */
async function getQueryParams() {
    await sync(store, router);
    return store.state.route.query;
}

/**
 * Trigger on 'sync(store, router)' operation complete:
 * - validate query params
 * - update 'store.state' with query params
 * - if failed => set default : current date
 */
getQueryParams()
    .then(params => Utils.pushState( Utils.normalizeParams(params) ))
    .catch(err => Utils.pushState( Utils.normalizeParams() ));