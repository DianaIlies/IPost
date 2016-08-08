/**
 * Created by dianailies on 7/26/2016.
 */
import React, {Component} from 'react';
import Dirs from "./Dirs.js";
import Files from "./Files.js";

var index = 0;

class FolderContainer extends Component {

  render() {

    let output = [];

    this.props.data.forEach((item)=> {

      if (item.type === 'dir') {

        output.push(
          <Dirs name={item.name} myItem={item} key={++index} />
        );


      }
      else if (item.type === 'file') {

        output.push(<Files name={item.name} key={++index}/>);

      }
      if (item.children) {
        output.push(<FolderContainer data={item.children} key={++index}/>);

      }

    });
    return (
      <ul className="folder-container">
        {output}
      </ul>
    )
  }

}


export default FolderContainer;
