/**
 * Created by dianailies on 8/3/2016.
 */
import { Store, toImmutable } from 'nuclear-js';


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
            },
            {
              type: 'dir',
              name: 'kittyCat',
              children: [
                {
                  type: 'file',
                  name: 'myCat.js'
                },
                {
                  type: 'file',
                  name: 'yourCat.js'
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
}

export default new TreeStore();


