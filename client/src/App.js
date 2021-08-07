import React, {useEffect} from  'react' ;

import useStyles from './styles';
import { useDispatch } from 'react-redux';

import {Container ,AppBar ,Typography, Grow ,Grid} from '@material-ui/core';

import {getPosts} from './actions/posts';
import  Posts from './components/Posts/Posts';
import Form from  './components/Form/Form';
import memories from './images/cat.png';

 const App= ()=>{
     const dispatch=useDispatch();

    const classes=useStyles();
    
    useEffect(() =>{
        dispatch(getPosts());
    }, [dispatch]);

    return(
       <Container maxwidth="lg" >
           <AppBar className= {classes.AppBar} position="static" color="inherit">
               <Typography className={classes.heading} variant="h3" align="center">
                   Memories
               </Typography>
               <img className={classes.image} src={memories} alt="memories" height= "40" width="40"  />
           </AppBar>
            
           <Grow in>      
               <Container>
                   <Grid container justify ="space-between" alignItems="stretch" spacing={3}>
                    <Grid item xs={12} sm={7}>
                    <Posts/>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                    <Form/>
                    </Grid>
                   </Grid>
               </Container>
           </Grow> 
       </Container>

    ) ;
};

export default App;