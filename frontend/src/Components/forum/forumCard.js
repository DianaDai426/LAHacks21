import React, { Component } from 'react'
import Paper from '@material-ui/core/Paper';

//material ui card
import Card from '@material-ui/core/Card';
import { makeStyles } from '@material-ui/core/styles';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { FormHelperText } from "@material-ui/core";
import { AutoComplete } from 'antd';
import "./forumCard.css"

const useStyles = makeStyles({
    newsCard: {
        display: 'inline-flex',
        boxSizing: "border-box",
        flexDirection: 'column',
        margin: 10,
        width: 250
    },
    media: {
        height: 30,
        width: 30,
        float: 'left',
    },
    name: {
        flex: 1,
        display: 'flex',
        width: '100%',
        height: 30,
    },
    nameCity: {
        minHeight: 30,
        maxHeight: 30,
        display: 'flex',
        flex: 1,
        paddingLeft: 10,
        paddingTop: 0,
        fontSize: 0.8 + "rem"
    },
    content: {
        marginLeft: '-16px',
        fontFamily: 'Merriweather'
    },
});

const state = (data) => {
    if (data.state == "other") {
        return data.customizeState
    } else {
        return data.state
    }

}


function ForumCard({ data }) {
    const classes = useStyles();
    return (
        <div className={classes.newsCard}>

            <Paper elevation={3} />
            <Card className="card-box">
                <CardActionArea>
                    {/* name section */}
                    <div className={classes.name}>
                        <CardMedia
                            className={classes.media}
                            image={data.namePhoto}
                            title={data.title}
                        />

                        <CardContent className={classes.nameCity}>
                            <Typography variant="inherit" component="p">
                                {data.name} from {state(data)}
                            </Typography>
                        </CardContent>
                    </div>

                    <CardContent>
                        <Typography className={classes.content} component="p">
                            {data.content}
                        </Typography>
                    </CardContent>
                </CardActionArea>

            </Card>
        </div>
    );
}

export default ForumCard;