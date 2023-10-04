import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

export default function ActionAreaCard() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="300"
          image="./src/img/Emmanuel.jpg"
          alt="Imagen Emmanuel"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Jesús Emmanuel
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Email: jemmanuel.mendezv@gmail.com
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Egresado de la Carrera en Ingeniería en Sistemas Computacionales.
            Me encanta el desarrollo de soluciones informáticas pues creo en 
            ello como el futuro.
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}