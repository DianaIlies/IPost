/**
 * Created by dianailies on 8/3/2016.
 */
import { createAction } from '../../create-action';

export const sliderChange = (values) => {
  createAction({
    type: 'SLIDER_CHANGE',
    payload: values
  });
};
