import React from 'react';
import FooterComponent from '../../components/layout/Footer';
import {connect} from 'react-redux';
class Footer extends React.Component {
  state = {
    open: false,

  };

  componentWillReceiveProps(nextProps) {
    if(nextProps.isRegisterSuccess){      
      this.setState({ open: true });
    }
  }

  onClose = () => {
    this.setState({open: false});
  }

  render() {
    console.log(this.props);
    
    const { open } = this.state;
    return (
      <div>
        <FooterComponent 
          open={open} 
          onClose={this.onClose}
        />
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  isRegisterSuccess: state.auth.isRegisterSuccess,
});

export default connect(mapStateToProps)(Footer);