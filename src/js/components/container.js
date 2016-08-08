/**
 * Created by dianailies on 8/4/2016.
 */
import React, {Component} from 'react';
import context, {actions, getters} from '../application-context';
import FolderContainer from "./FolderContainer.js";

class Container extends Component {

  static getDataBindings(getters) {
    return {
      data: getters.myModule.data,
      value: getters.myModule.value
    }
  }


  handleChange(event) {
    actions.myModule.filter({value: event.target.value});
  }
 
  render() {

    return (<div className="widget">
<div className="myTitle">~ Search ~</div>
      <input placeholder="filter..." type="text"
             onChange={this.handleChange}
             className="search"
      />


      <div>{ this.props.value ? 'Searching for:' + this.props.value : null }</div>

      <FolderContainer data={this.props.data.directories}/>

    </div>)
  }
}


export default context.connect(Container);
