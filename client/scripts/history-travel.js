import store from '../store'
import { pushState } from './utils'

window.onpopstate = function() {
    // console.log(store.state);
    pushState(store.state.route.query);
}