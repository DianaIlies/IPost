/**
 * Created by dianailies on 8/3/2016.
 */
import { Store, toImmutable } from 'nuclear-js';
import * as ActionTypes from '../action-types';

const initialState = toImmutable({
  directories: [
    {
      type: 'dir',
      name: 'app',
      children: [
        {
          type: 'file',
          name: 'index.html'
        },
        {
          type: 'dir',
          name: 'js',
          children: [
            {
              type: 'file',
              name: 'main.js'
            },
            {
              type: 'file',
              name: 'app.js'
            },
            {
              type: 'file',
              name: 'misc.js'
            },
            {
              type: 'dir',
              name: 'vendor',
              children: [
                {
                  type: 'file',
                  name: 'jquery.js'
                },
                {
                  type: 'file',
                  name: 'underscore.js'
                }
              ]
            }
          ]
        },
        {
          type: 'dir',
          name: 'css',
          children: [
            {
              type: 'file',
              name: 'reset.css'
            },
            {
              type: 'file',
              name: 'main.css'
            }
          ]
        }
      ]
    }
  ]
});


class TreeStore extends Store {
  getInitialState() {
    return initialState;
  }
  initialize() {
    this.on(ActionTypes.FILTER, filter);
  }
}

export default new TreeStore();

function filter(state, payload) {
  const nextState = state.set('value', payload.value);

  if (state.equals(nextState)) {
    return state;
  }

  return nextState;
}
