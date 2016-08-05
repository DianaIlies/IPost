/**
 * Created by dianailies on 8/4/2016.
 */

import React, {Component} from 'react';

class Files extends Component {
  displayName= 'Files';
  render() {
    return (
      <li className='file-item'> {this.props.name}</li>
    );
  }
}


export default Files;
