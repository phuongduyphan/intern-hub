import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Avatar from '@material-ui/core/Avatar'
import Work from '@material-ui/icons/Work';
import Email from '@material-ui/icons/Email';
import Place from '@material-ui/icons/Place';
import Chip from '@material-ui/core/Chip';
import MediaQuery from 'react-responsive';
import { Modal} from 'react-bootstrap';


const styles = theme => ({
  root: {
    flexGrow: 1,
    maxWidth: 600,
    padding: theme.spacing.unit * 2,
    margin: 5
  },
  studentName: {
    cursor: "pointer"
  },
  image: {
    width: 80,
    height: 80,
  },
  img: {
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
  },
  icon: {
    color: '#595854',
    marginRight: 2,
    fontSize: 18,
  },
  type: {
    color: '#202bd6',
  },
  apply: {
    position: 'relative',
    top: '10%',
  },
  chip: {
    marginTop: theme.spacing.unit / 2,
    marginRight: theme.spacing.unit / 2,
  },
  modal:{
    zIndex: "10000"
  }
});

class Students extends Component {
  constructor(props) {
    super(props);
    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.state = {
      show: false
    };
  }

  handleClose() {
    this.setState({ show: false });
  }

  handleShow() {
    this.setState({ show: true });
  }
  render(){
  const { classes, student, avatar } = this.props;


  const renderSkill = (
    <div>
      {student.skills.map(skill => {
          let icon = null;
          return (
            <Chip
              color='primary'
              icon={icon}
              label={skill.skillName}
              className={classes.chip}
            />
          );
        })}
    </div>
  );
 
  return (
    <div>
    <MediaQuery minDeviceWidth={1000}>

    <Grid container direction='row' alignContent='center' justify='center'>
      <Paper className={classes.root }>
        <Grid container spacing={16}>
          <Grid item >
            <Avatar src={avatar} className={classes.image} />
          </Grid>
          <Grid item xs={10} sm container>
            <Grid item xs container direction="column" spacing={16}>
              <Grid item xs className={classes.studentName} onClick={this.handleShow}>
                <Typography variant='headline' color='primary' 
                
                
                >{student.users.displayname}</Typography>
                {renderSkill}
              </Grid>

              <Grid item>
                <Grid container>
                  <Grid item xs={4}>
                    <Grid container className="studentItem">
                      <div ><Work className={classes.icon}/></div>
                      <div ><Typography variant="body1" color="textSecondary">{student.studentCollege}</Typography></div>
                    </Grid>
                  </Grid>
                  <Grid item xs={4}>
                    <Grid container className="studentItem">
                      <Grid item><Place className={classes.icon}/></Grid>
                      <Grid item><Typography variant="body1" color="textSecondary">{student.studentMajor}</Typography></Grid>
                    </Grid>
                  </Grid>
                  <Grid item xs={4}>
                    <Grid container className="studentItem">
                      <Grid item><Email className={classes.icon}/></Grid>
                      <Grid item><Typography variant="body1" color="textSecondary">{student.email}</Typography></Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
            <Grid item className={classes.apply}>
              <Grid container>
                <Grid item><Typography className={classes.type} variant="button">{student.type}</Typography></Grid>
              </Grid>
              <Button size="large" variant="contained" color="primary" className={classes.button}>
                Invite
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </Grid>  
    </MediaQuery>
    <MediaQuery maxDeviceWidth={1000}>
        <div class="card" >
          <img class="card-img-top" src={avatar} />
          <div class="card-body">
            <h4 class="card-title">{student.users.displayname}</h4>
            <p class="card-text">{renderSkill}</p>
            <div class="d-flex">
              <a href="/" class="btn btn-primary">See Profile</a>
              <a href="/" class="btn btn-success ml-auto">Invite</a>
            </div>

          </div>
        </div>
      </MediaQuery>


      <Modal show={this.state.show} onHide={this.close}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Modal body
         </Modal.Body>
        <Modal.Footer>
          <Button onClick={this.close}>Close</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
}
Students.propTypes = {
  classes: PropTypes.object.isRequired,
};
export default withStyles(styles)(Students);
