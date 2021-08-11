import React from 'react';
// import propTypes from "prop-types";
import {Link} from "react-router-dom";
// import "./Menu.css"
import Card from '@material-ui/core/Card';
import { makeStyles } from '@material-ui/core/styles';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';



  
  const useStyles = makeStyles((theme) => ({
  
    header:{
      backgroundColor: "black"
    },
  
    icon: {
      marginRight: theme.spacing(2),
    },
    heroContent: {
      backgroundColor: theme.palette.background.paper,
      padding: theme.spacing(8, 0, 6),
    },
    heroButtons: {
      marginTop: theme.spacing(4),
    },
    cardGrid: {
      paddingTop: theme.spacing(8),
      paddingBottom: theme.spacing(8),
    },
    card: {
        height: '100%',
        width: "500px",
        display: 'flex',
        flexDirection: 'column',
        borderStyle: "groove",
        borderColor: "black"
        
        
      },
      cardMedia: {
        paddingTop: '56.25%', // 16:9
    },
    cardContent: {
      flexGrow: 1,
    },
    footer: {
      backgroundColor: theme.palette.background.paper,
      padding: theme.spacing(6),
    },
  
  }));

//   --------------------------------------원본의 선------------------------------------------------
const Menu = ({name,image,calorie,carbohydrate,protein,fat,salt,ingredients,
    manual_1,manual_1_img,manual_2,manual_2_img,manual_3,manual_3_img,
    manual_4,manual_4_img,manual_5,manual_5_img,manual_6,manual_6_img,
    manual_7,manual_7_img,manual_8,manual_8_img,manual_9,manual_9_img,
    manual_10,manual_10_img,manual_11,manual_11_img,manual_12,manual_12_img,
    manual_13,manual_13_img,manual_14,manual_14_img,manual_15,manual_15_img,
    manual_16,manual_16_img,manual_17,manual_17_img,manual_18,manual_18_img,
    manual_19,manual_19_img,manual_20,manual_20_img,howMake,foodStyle
}) => {
    const classes = useStyles();
    return (
        
<section>
    <CssBaseline />

    <div className={classes.menu}>
        <Card className={classes.card}>
                <CardMedia
                className={classes.cardMedia}
                image= {image}
                title= {name}
                />
            <CardContent className={classes.cardContent}>
                <Typography gutterBottom variant="h5" component="h2">
                    {name}
                </Typography>
                <Typography>
                    조리 방법: {howMake} <br/>
                    음식 유형: {foodStyle}
                </Typography>
            </CardContent>
                <CardActions>
                    <Button size="small" color="primary">
                        
                    <Link to={{
                            pathname:"/menu-detail",
                            state:{
                                name,
                                image,
                                calorie,
                                carbohydrate,
                                protein,
                                fat,
                                salt,
                                
                                }
                            }}>
                    영양 정보   
                    </Link>
                    
                    </Button>
                    <Button size="small" color="primary" >
                    <Link to={{
                        pathname:"/menu-way",
                        state:{
                            name,
                            image,
                            ingredients,
                            manual_1,manual_1_img,manual_2,manual_2_img,manual_3,manual_3_img,
                            manual_4,manual_4_img,manual_5,manual_5_img,manual_6,manual_6_img,
                            manual_7,manual_7_img,manual_8,manual_8_img,manual_9,manual_9_img,
                            manual_10,manual_10_img,manual_11,manual_11_img,manual_12,manual_12_img,
                            manual_13,manual_13_img,manual_14,manual_14_img,manual_15,manual_15_img,
                            manual_16,manual_16_img,manual_17,manual_17_img,manual_18,manual_18_img,
                            manual_19,manual_19_img,manual_20,manual_20_img
                        }
                    }}>
                    조리 방법
                    </Link>
                    
                    </Button>
                </CardActions>
        </Card>
        {/* <img src={image} alt={name} title={name} />
        <div className="menu_data">
            <h3 className="menu_name">{name}</h3>
            
            
        </div> */}

    </div>
        
</section>
    );
};

// Menu.propTypes = {

//     name: propTypes.string.isRequired,
//     image: propTypes.string.isRequired,
//     calorie: propTypes.number.isRequired,
//     carbohydrate: propTypes.number.isRequired,
//     protein: propTypes.number.isRequired,
//     fat: propTypes.number.isRequired,
//     salt: propTypes.number.isRequired,
// }
export default Menu;