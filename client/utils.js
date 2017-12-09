import router from './router'
import store from './store'

function pushState(params) {
    return new Promise (resolve => {
        // overwrite current state
        store.state.params = params;

        // push state
        router.push({
            path: `/params`,
            query: params
        });

        resolve(params);
    });
}

function setView(view) {
    return new Promise( resolve => {    
        resolve(pushState(normalizeParams({ ...store.state.params, view})));
    });
}

function setMonth(month) {
    return new Promise( resolve => {    
        resolve(pushState(normalizeParams({ ...store.state.params, month })));
    });
}

function setDate(date) {
    return new Promise( resolve => {    
        resolve(pushState(normalizeParams({ ...store.state.params, date })));
    });
}

/**
 * Normalize query params
 * @param {object}
 * @return {object} normalized params
 */
function normalizeParams({ view, month, date }) {
    let current = new Date();

    // check if params are Numbers and within sane ranges
    // it's enough to generate a valid date and set a view
    if (Number.isNaN(parseInt(view)) || view < 0) view = 0;
    if (view > store.state.limit || view.length > 1) view = 2;
    if (Number.isNaN(parseInt(month)) || month.length > 2 || month > 11 || month < 0) month = current.getMonth();
    if (Number.isNaN(parseInt(date)) || date.length > 2 || date > 31 || date < 0) date = current.getDate();

    // generate valid date, aka normalize date params
    let holiday = new Date(2018, month, date);

    // assign valid values to query params
    month = holiday.getMonth();
    date = holiday.getDate();

    return { view, month, date };
}

export { pushState, setView, setMonth, setDate, normalizeParams };