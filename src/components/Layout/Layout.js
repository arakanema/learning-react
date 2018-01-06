import React, {Component} from 'react';

import Aux from '../../hoc/Aux';
import classes from './Layout.css';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';

// ツールバー・サイドドロワーの制御に伴いclass化
// const Layout = (props) => (
//     <Aux>
//       <Toolbar/>
//       <SideDrawer/>
//       <main className={classes.Content}>
//         {props.children}
//       </main>
//     </Aux>
// );

class Layout extends Component {
  state = {
    showSideDrawer: true,
  };

  sideDrawerClosedHandler = () => {
    this.setState({showSideDrawer: false});
  };

  render() {
    return (
        <Aux>
          <Toolbar/>
          <SideDrawer
              open={this.state.showSideDrawer}
              closed={this.sideDrawerClosedHandler}/>
          <main className={classes.Content}>
            {this.props.children}
          </main>
        </Aux>
    );
  }
}

export default Layout;