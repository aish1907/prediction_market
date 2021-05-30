import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import './App.css';
import { Height } from '@material-ui/icons';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
     //position:'fixed'
  },
  paper: {
    borderRadius:0,
    padding: theme.spacing(2),
    backgroundColor:'#181818',
    color: 'white',
    fontFamily: 'Roboto Condensed',
    position:'sticky',
    
    // top:'50px'
  },
  fg:{
    borderBottom: '2px solid rgb(9, 231, 247)',
    paddingBottom:'2px'
  },
  pop:{
    marginLeft:'30px',
    fontSize:'15px',
    marginTop: '15px',
    
  },
  sid:{
    fontFamily: 'Roboto Condensed',
    backgroundColor:'#181818',
    color: 'white',
    fontStyle:'normal',
    width: '245px',

  paddingLeft: '10px',
  marginRight: '15px',
  float: 'left',
    /* font-style: italic; */
  // backgroundColor: 'lightgray',
   //position:'sticky',
   //marginTop:'40px'
height:'100%',
positon:'fixed',


  },
  cat:{
    fontSize: '12px',
    paddingLeft: '30px',
    paddingTop:'5px',
    paddingRight:'10px',
    color:'grey'

  },
  catt:{
    fontSize: '12px',
    paddingLeft: '30px',
    paddingTop:'15px',
    //paddingRight:'1px'
    color:'grey'
  },
  catw:{
    fontSize: '12px',
    paddingLeft: '30px',
    paddingTop:'5px',
    minHeight:'100%',
     paddingBottom:'100%',
    color:'grey'

  },
  // al:{
  //   height:'1px'
  // }
  
}));

export default function FullWidthGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      
      <Grid position="sticky" className={classes.al}>
        <Grid item xs={12} className={classes.al}>
          <Paper className={classes.paper}><span className="fg">MARKET</span></Paper>
        </Grid>
      </Grid>
      
    </div>
  );
}
