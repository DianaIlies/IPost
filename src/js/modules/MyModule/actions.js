/**
 * Created by dianailies on 8/3/2016.
 */
import context from '../../application-context';
import { FILTER } from './action-types';

export function filter(value) {
  context.dispatch('FILTER', value);
}
