import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import perfil from '../img/perfil.png'
import "./about.css"
import Navbar from '../Navbar/Navbar';
import { useTranslation } from 'react-i18next'; 

import useAbout from '../../contextGlobal/useAbout';

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function RecipeReviewCard() {
  const [expanded, setExpanded] = React.useState(false);
  const { i18n, t} = useTranslation();

  function changeLaguage(language){
    i18n.changeLanguage(language);
  }

  console.log(i18n.language)
  
  const {nombre,matricula,grupo } = useAbout();

  return (
    <div>
      <Navbar/>
    <div className='cardContainer'>
    <Card sx={{ maxWidth: 345 }} >
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            JC
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
          </IconButton>
        }
        title={nombre}
        subheader={t("subheader")}
      />
      <CardMedia
        component="img"
        height="300"
        image={perfil}
        alt={t("titleAbout")}
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {t("carrier")}
        </Typography>
        <Typography variant="body2" color="text.secondary">
        {matricula}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {t("subject")}
        </Typography>
      </CardContent>
    </Card>
    </div>
    </div>
  );
}