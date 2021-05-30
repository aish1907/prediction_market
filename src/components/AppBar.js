
import React, { useEffect, useState } from 'react';
import { makeStyles, rgbToHex } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ContactSupportIcon from '@material-ui/icons/ContactSupport';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import './App.css';


const drawerWidth = 240;


const useStyles = makeStyles((theme) => ({
    root1: {
        flexGrow: 1,
        paddingBottom: theme.spacing(2),
        backgroundColor: '#080808	',
        border:'5px solid black',
        paddingLeft:'0px',
        marginLeft:'0px',
        },
    toolbar: {
        //minHeight: 128,
        alignItems: 'flex-start',
        
    },
    menuButton: {
        marginRight: theme.spacing(4),
        color: 'white',
        fontFamily: 'Roboto Condensed',
        height:'50px',
        fontSize:'14px',
        textDecoration:'none'
    },
    title: {
        flexGrow: 1,
        color: 'white',
        alignSelf: 'flex-end',
        paddingBottom: theme.spacing(2),
    },
    appBarTransparent: {
        paddingTop: 80,
        backgroundColor: 'rgba(16, 16, 16,0.5)',
        minHeight: 128,
        paddingTop: theme.spacing(8),
        paddingBottom: theme.spacing(1),
        //alignSelf: 'flex-end',
    },
    appBarSolid: {
        backgroundColor: 'rgba(16, 16, 16)',
        maxHeight: 70,
        paddingTop: theme.spacing(2),
        paddingBottom: theme.spacing(2),
        //alignSelf: 'flex-end',
    },
    Hello:{
        '& > *': {
            margin: theme.spacing(1),
          },
    },
    intro:{
        paddingTop: theme.spacing(20),
        paddingLeft: theme.spacing(15),
        fontFamily:'Oswald',
        fontSize:60,
        color:'white'
        
    },
    intro2:{
        paddingLeft: theme.spacing(15),
        fontStyle:'italic',
        fontSize:18,
        color:'white',
        height:'30px',
        paddingTop:'30px',
        opacity:0.8

    },
    hj:{
        paddingLeft: theme.spacing(15),
        fontStyle:'italic',
        fontSize:18,
        color:'white',
        height:'30px',
        paddingBottom:'200px',
        paddingTop:'30px',
        opacity:0.8
    },
    bigfor:{
        //paddingTop:theme.spacing(0.5),
        paddingTop:'150px',
        paddingLeft: theme.spacing(15),
        fontFamily:'Oswald',
        fontSize:50,
        height:'65px',
        color:'white'

    },
    bigfo:{
        //paddingTop:theme.spacing(0.5),
        paddingTop:'60px',
        paddingLeft: theme.spacing(15),
        fontFamily:'Oswald',
        fontSize:50,
        height:'65px',
        color:'white'

    },
    bigfoo:{
        marginTop:'60px',
        paddingLeft: theme.spacing(15),
        //fontFamily:'Oswald',
        fontSize:20,
        paddingTop:15,
        height:'20px',
        color:'white'

    },
    bigfoot:{
        paddingLeft: theme.spacing(15),
        //fontFamily:'Oswald',
        paddingTop:10,
        fontSize:20,
        height:'20px',
        color:'white'

        //paddingTop:30
    },
    cursive:{
        fontStyle:'Bilbo Swash Caps'
    },
    intro3:{
        marginTop: theme.spacing(5),
        marginLeft: theme.spacing(15),
        height:'50px',
        width:'180px',
        fontSize:'16px',
        marginBottom:theme.spacing(2),
        
    }
}));

const theme = createMuiTheme({
    typography: {
      fontFamily: [
        'Teko',
      ].join(','),
      fontSize: 25
    },});

    
  

export default function ButtonAppBar() {
    const classes = useStyles();



    
const [navBackground, setNavBackground] = useState('appBarTransparent')
const navRef = React.useRef()
navRef.current = navBackground
useEffect(() => {
    const handleScroll = () => {
        const show = window.scrollY > 310
        if (show) {
            setNavBackground('appBarSolid')
        } else {
            setNavBackground('appBarTransparent')
        }
    }
    document.addEventListener('scroll', handleScroll)
    return () => {
        document.removeEventListener('scroll', handleScroll)
    }
}, [])

    return (
        
        <div className={classes.root1}>
            
           <AppBar position="fixed" className={classes[navRef.current]}>  
                <Toolbar className={classes.toolbar}>
                    <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="subtitle1" className={classes.title} font-family="Arial">
                        News
                    </Typography>
                    <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                    <ContactSupportIcon />
                    </IconButton>
                    
                    <ThemeProvider theme={theme}>
                    <Button color="white" className={classes.menuButton}><a href="#" style={{color:'white',textDecoration:'none'}}>ABOUT US</a></Button>
                    <Button color="white" className={classes.menuButton}><a href="#" style={{color:'white',textDecoration:'none'}}>CONTACT US</a></Button>
                    </ThemeProvider>
                         
                </Toolbar>
            </AppBar>
            <div className="abc" >
            <Container className="hkl" style={{display:'block',height:'100%',width:'100%'}}>
                
                
                <div className={classes.bigfor}>Believe it?</div>
                <div className={classes.bigfo}>Trade and earn it</div>
                <p><div className={classes.bigfoo}>An automated platform to voice your choice.</div></p>
                <p><div className={classes.bigfoot}>Let the world know you matter. </div></p>
                <Button className={classes.intro3} variant="contained" style={{ textDecoration:'none',mixBlendMode:'screen',fontWeight:'bolder', backgroundColor:'aqua'}} href="#top">
                <a href="#" style={{color:'black',fontWeight:'1200', backgroundColor:'aqua',textDecoration:'none'}}>TRADE NOW</a>
                </Button>
                <div className={classes.intro2}>"May the odds be ever in your favor"</div>
                <div className={classes.hj}> -The Hunger Games</div>
                

            </Container></div>
        </div>
        
    );
}