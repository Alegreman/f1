import { useState, useEffect } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { Avatar, CardHeader, Typography } from '@mui/material';
import { indigo } from '@mui/material/colors';
import { MdNumbers } from "react-icons/md";
import { AiFillCar } from "react-icons/ai";
import { AiFillFlag } from "react-icons/ai";


function Cards() {
    const [cards, setCards] = useState([]);

    useEffect(() => {
        fetch('https://api.openf1.org/v1/drivers?session_key=latest')
            .then((res) => res.json())
            .then((data) => {
                setCards(data);
            });
    }, []);
    return (
        <>
            {cards.map(card => {
                return (
                    <Card sx={{ maxWidth: 345 }}  key={card.driver_number}>
                        <CardContent>
                        <Typography variant='h6' component='div'>
                                <div className='flex'>
                                <Avatar sx={{ bgcolor: indigo[500] }} aria-label='avatar' alt={card.full_name} src={card.headshot_url} /> <span className='px-5 py-2 font-bold'>{card.full_name}</span>
                                </div>
                            </Typography>
                            <Typography variant='body2' color=''>
                                <div className='inline-flex'>
                                    <MdNumbers /> <span className='px-32 font-bold'>{card.driver_number}</span>
                                </div>
                            </Typography>
                            <Typography variant='body2' color='text.secondary'>
                                <div style={{ display: "flex", justifyContent: 'space-between' }}><AiFillCar /> <span className='font-bold'>{card.team_name}</span></div>
                            </Typography>
                            <Typography variant='body2' color='text.secondary'>
                                <div style={{ display: "flex", justifyContent: 'space-between' }}><AiFillFlag /> <span className='font-bold'>{card.country_code}</span></div>
                            </Typography>
                        </CardContent>
                    </Card>
                )
            })}
        </>
    )
}

export default Cards