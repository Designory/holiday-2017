import store from './store'

const current = new Date();

console.log(store.state.route);

const holiday = {
    month: current.getMonth(),
    date: current.getDate()
}

// state.holiday = holiday;