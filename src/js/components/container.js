/**
 * Created by dianailies on 8/4/2016.
 */
import React, {Component} from 'react';
import context, {actions, getters} from '../application-context';
import FolderContainer from "./FolderContainer.js";
import SearchingContainer from "./SearchingContainer.js";

class Container extends Component {
  // displayName= 'Container';


  static getDataBindings(getters) {
    return {
      data: getters.myModule.data
    }
  }

  constructor(props) {
    super(props);
    this.handleChange = ::this.handleChange;
    this.state = {value: "", data: []};
  }


  handleChange(event) {
    this.setState({
      value: event.target.value
    });


  }


  // constructor(props) {
  //   super(props);
  //   this.handleChange = ::this.handleChange;
  //   this.state = {value: "", data:[]};
  // }
  //
  //
  // handleChange(event) {
  //   this.setState({
  //     value: event.target.value
  //   });
  //
  //
  // }
  /* <div>{ this.state.value ? 'Searching for:' + this.state.value : null }</div>


   console.log(this.props.search);

   <div>{ value ? 'Searching for:' + value : null }</div>
   */

  render() {

    return (<div className="widget">

      <input placeholder="filter..." type="text"
             value={this.state.value}
             onChange={this.handleChange}
             className="search"
      />


      <div>{ this.state.value ? 'Searching for:' + this.state.value : null }</div>

      <SearchingContainer data={this.props.data.directories} searchingText={this.state.value}/>

    </div>)
  }
}


export default context.connect(Container);
