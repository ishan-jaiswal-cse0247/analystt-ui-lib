import { init } from 'snabbdom/init';
import { classModule } from 'snabbdom/modules/class';
import { propsModule } from 'snabbdom/modules/props';
import { styleModule } from 'snabbdom/modules/style';
import { eventListenersModule } from 'snabbdom/modules/eventlisteners';
import { createButton, updateState, useMountEffect } from '@my-ui/library'; // Adjust the import path based on your project structure

const patch = init([
  classModule,
  propsModule,
  styleModule,
  eventListenersModule,
]);

const container = document.getElementById('app');
let state = { count: 0 };

function render() {
  const vnode = createButton(`Count: ${state.count}`, () => {
    state = updateState(state, { count: state.count + 1 });
    render();
  });
  patch(container, vnode);
}

useMountEffect(() => {
  console.log('Component mounted');
});

render();
