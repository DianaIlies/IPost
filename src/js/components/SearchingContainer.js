/**
 * Created by dianailies on 8/5/2016.
 */
import React, {Component} from 'react';
import Files from "./Files.js";
import FolderContainer from "./FolderContainer.js";


var index = 0;


class SearchingContainer extends Component {
  render() {

    let output = [];

    this.props.data.forEach((item)=> {
      var strSearch = this.props.searchingText;
      if (item.type === 'folder' && (item.name).match(strSearch) !== null) {
        console.log("found matching folder");

        output.pop();
        output.push(<FolderContainer data={this.props.data} searchingText={strSearch}
                                            key={++index}/>);
      }
      else {
        if (item.type === 'file' && (item.name).match(strSearch) !== null) {

          output.push(<Files name={item.name} key={++index}/>);
          console.log("found matching file");


        }
        if (item.children != null) {
          output.push(<SearchingContainer data={item.children} searchingText={strSearch}
                                       key={++index}/>);

        }

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
