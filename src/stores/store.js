import * as redux from 'redux';
import reducer from 'reducers/reducer';

const store = redux.createStore(reducer, redux.compose(
    // debug by tool
    window.devToolsExtension ? window.devToolsExtension() : f => f
));

// Subscribe
// store.subscribe(() => {
//     var str = store.getState();
//     document.getElementById('p-detail').innerHTML = JSON.stringify(str);
// });

export default store;