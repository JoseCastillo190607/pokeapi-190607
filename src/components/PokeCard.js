import React from 'react';
import {Card, CardMedia, CardContent, Typography, CardContent, Typography} from '@material-ui/core';


 function PokeCard({name}) {
  return (
    <Card>
       <CardMedia>
           <CardContent>
               <Typography component='p' variant='h4'>
                   {name}
               </Typography>
           </CardContent>
        </CardMedia>  
    </Card>
  )
}
export default PokeCard;