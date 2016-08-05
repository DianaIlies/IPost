/**
 * Created by dianailies on 8/4/2016.
 */
import React, {Component} from 'react';

class Folder extends Component {
  // displayName: 'Folder';

  render() {
    return (
      <li className="folder-item">{this.props.name}</li>
    );
  }
}

export default Folder;
