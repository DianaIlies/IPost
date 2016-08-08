/**
 * Created by dianailies on 8/4/2016.
 */
import React, {Component} from 'react';

class Folder extends Component {
  // displayName: 'Folder';
  constructor(props) {
    super(props);
    this.state = {isCollapsed: true};
  }

  handleChange() {
    this.setState({isCollapsed: !this.state.isCollapsed})
   // console.log(this.state.isCollapsed);
  }


  render() {
    if (this.state.isCollapsed)
      return (
        <li className="folder-item false " onClick={this.handleChange.bind(this)}>  {this.props.name}</li>
      );

    else

      return (
        <li className="folder-item hideMe true" onClick={this.handleChange.bind(this)}>  {this.props.name}</li>

      );


  }
}

export default Folder;
