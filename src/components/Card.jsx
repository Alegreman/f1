import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';

function Card({name, number, team, photo}) {
    console.log(name)
    return (
        <>
            <h1>Driver: {name} {number} {team} <img src={photo}></img></h1>
            
        </>
    )
}

export default Card