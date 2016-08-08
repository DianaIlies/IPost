/**
 * Created by dianailies on 8/3/2016.
 */
import BaseModule from '../../base-module';
import TreeStore from './stores/myModule';
import SearchStore from './stores/SearchStore'
import * as actions from './actions';
import * as getters from './getters';

class MyModule extends BaseModule {
  static displayName = 'MyModule';

  constructor() {
    super({ actions, getters });
  }

  register(context) {
    context.registerStores({ 'tree': TreeStore, 'search': SearchStore });
  }
}
export default new MyModule();
