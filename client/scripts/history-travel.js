import store from '../store'
import { pushState } from './utils'

window.onpopstate = function() {
    pushState(store.state.route.query);
}