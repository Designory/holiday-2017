import { sync } from 'vuex-router-sync'
import router from './router'
import store from './store'
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
 * Trigger chain:
 * - validate query params
 * - update 'store.holiday' with query params
 * - if failed => set default => current date
 */
getQueryParams()
    .then(params => Utils.normalizeParams(params))
    .then(params => Utils.pushState(params))
    .catch(err => Utils.pushState( Utils.normalizeParams({ view: null, month: null, date: null }) ));