/**
 * Created by dianailies on 8/3/2016.
 */
import BaseModule from '../../base-module';
import tree from './stores/myModule';
import * as actions from './actions';
import * as getters from './getters';

class MyModule extends BaseModule {
  static displayName = 'MyModule';

  constructor() {
    super({ actions, getters });
  }

  register(context) {
    context.registerStores({ 'tree': tree });
  }
}
export default new MyModule();
