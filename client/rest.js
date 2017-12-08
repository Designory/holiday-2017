import { sync } from 'vuex-router-sync'
import router from './router'
import store from './store'
import { normalize } from 'path';

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
    .then(params => normalizeParams(params))
    .then(params => {
        // overwrite default state
        state.holiday = params;

        // push state
        router.push({ 
            path: `/view=${store.state.views.current}/params`, 
            query: params 
        });
    })
    .catch(_=> {
        // if smth went wrong => use current date
        router.push({
            path: `/view=0/params`,
            query: normalizeParams({ month: null, date: null})
        });
    });

/**
 * Normalize query params
 * @param {object}
 * @return {object} normalized params
 */
function normalizeParams({month, date}) {
    let current = new Date();

    // check if params are Numbers
    // it's enough to generate a valid date
    if (isNaN(month)) month = current.getMonth();
    if (isNaN(date)) date = current.getDate();

    // generate valid date, aka normalize params
    let holiday = new Date(2018, month, date);

    // assign valid values to query params
    month = holiday.getMonth();
    date = holiday.getDate();

    return { month, date };
}