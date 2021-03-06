import React ,{Component} from 'react';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import Divider from 'material-ui/Divider';
import {Link} from 'react-router';
import {NavToggleButton} from '../styled/NavDrawer';

class NavDrawer extends Component{
    state = {
        open:true,
        width:250
    };

    toggle = () => {
        this.setState((prevState,props) => {
            return{
                open:!prevState.open
            }
        })
    };
    render(){
        return(
            <div>
                <NavToggleButton
                    toggle={this.toggle}
                    width={this.state.width}
                    open = {this.state.open}/>
                <Drawer width={this.state.width}
                        open={this.state.open}>
                    <div
                    style={{
                        height:'200px',
                        width:'100%',
                        backgroundColor:'salmon'
                    }}>Loign Container
                    </div>
                    <Divider/>
                    <Link to = {'/'}>
                        <MenuItem onClick={this.toggle} primaryText={'Play'}/>
                    </Link>
                    <Link to = {'/profile'}>
                        <MenuItem onClick={this.toggle} primaryText={'Profile'}/>
                    </Link>
                </Drawer>
            </div>

        )
    }
}

export default NavDrawer;