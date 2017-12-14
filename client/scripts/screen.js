import store from '../store'

function screen() {
    let height = window.innerHeight,
        width = window.innerWidth;

    store.state.screen = { height, width };
}

window.addEventListener('resize', screen);

export default screen;