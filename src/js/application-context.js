import Context from './context';

import user from './modules/user';
import entityCache from './modules/entity-cache';
import playground from './modules/playground';
import auth from './modules/auth';
import intl from './modules/intl';
import layout from './modules/layout';
import folders from './modules/folders';
import navigation from './modules/navigation';
import notifications from './modules/notifications';
import pagination from './modules/pagination';
import MyModule from './modules/MyModule';


const context = new Context({
  debug: process.env.NODE_ENV === 'development'
});

// Create application context using defined modules
context.create({
  user,
  entityCache,
  playground,
  MyModule,
 // MyModuleStore,

  auth,
  intl,
  layout,
  folders,
  navigation,
  notifications,
  pagination
});

export const actions = context.actions;
export const getters = context.getters;

// TODO: modules & connector are deprecated, remove ASAP
export const modules = (() => {
  if (console && console.warn) {
    console.warn(`import { modules } from './application-context' is deprecated. Use import { actions, getters } from './application-context'`);
  }

  return context.modules;
})();

export default context;
