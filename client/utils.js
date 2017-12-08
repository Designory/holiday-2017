import router from './router'
import store from './store'

function pushState(params) {
    // overwrite current state
    store.state.params = params;

    // push state
    router.push({
        path: `/params`,
        query: params
    });

    return true;
}

function setView(view) {
    pushState( normalizeParams({ ...store.state.params, view}) );
}

function setMonth(month) {
    pushState( normalizeParams({ ...store.state.params, month }) );
}

function setDate(date) {
    pushState( normalizeParams({ ...store.state.params, date }) );
}

/**
 * Normalize query params
 * @param {object}
 * @return {object} normalized params
 */
function normalizeParams({ view, month, date }) {
    let current = new Date();

    // check if params are Numbers
    // it's enough to generate a valid date and set a view
    if (isNaN(parseInt(view)) || view < 0) view = 0;
    if (view > store.state.limit) view = 2;
    if (isNaN(parseInt(month))) month = current.getMonth();
    if (isNaN(parseInt(date))) date = current.getDate();

    // generate valid date, aka normalize date params
    let holiday = new Date(2018, month, date);

    // assign valid values to query params
    month = holiday.getMonth();
    date = holiday.getDate();

    return { view, month, date };
}

export { pushState, setView, setMonth, setDate, normalizeParams };