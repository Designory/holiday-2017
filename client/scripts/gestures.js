import Hammer from 'hammerjs'
import store from '../store'

var mc = new Hammer(document.getElementsByTagName('body')[0]);

mc.on("swipeleft", _=> {
    store.dispatch('nextView');
});

mc.on("swiperight", _ => {
    store.dispatch('prevView');
});