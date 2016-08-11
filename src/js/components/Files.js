/**
 * Created by dianailies on 8/4/2016.
 */

import React, {Component} from 'react';

class Files extends Component {
  //displayName= 'Files';

  render() {
    if (this.props.name === "myCat.js" || this.props.name === "yourCat.js") {
      return <li className='file-item'><a className="kitty" target="_blank"
                                          href="https://upload.wikimedia.org/wikipedia/commons/4/4d/Cat_March_2010-1.jpg">{this.props.name}</a>
      </li>
    }

    else
      return (
        <li className='file-item'> {this.props.name}</li>
      );
  }
}


export default Files;
