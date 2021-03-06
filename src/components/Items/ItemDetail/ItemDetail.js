import React from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';

import { useStyles } from './ItemDetailStyle'

function ItemDetail({item}) {

    const classes = useStyles()
    return (
        <div className={classes.root}>
      <Paper className={classes.paper}>
        <Grid container spacing={2}>
          <Grid item>
            <ButtonBase className={classes.image}>
              <img className={classes.img} alt={item.title} src={item.pictureUrl} />
            </ButtonBase>
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <Typography gutterBottom variant="h3">
                  {item.title}
                </Typography>
                <Typography variant="h4" gutterBottom>
                  {item.description}
                </Typography>
                
                <Typography variant="h4">${item.price}</Typography>
                <Typography variant="body2" color="textSecondary">
                  ID: {item.id}
                </Typography>
              </Grid>
              
            </Grid>
            
          </Grid>
        </Grid>
      </Paper>
    </div>


        
     
    );
  }

  

  export default ItemDetail;