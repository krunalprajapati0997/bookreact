import { Button, Card, CardActions, CardContent, CardHeader, IconButton } from '@material-ui/core'
import { DeblurOutlined, DeleteOutline, Favorite } from '@mui/icons-material'
import { Typography } from '@mui/material'
import React, { useState } from 'react'
import { styled } from '@mui/material/styles';
import { red } from '@mui/material/colors';
import Avatar from '@mui/material/Avatar';
import Checkbox from '@mui/material/Checkbox';


function NoteCard({ note, handleclick }) {
    const [checked, setChecked] = React.useState(false);

    const handleChange = (event) => {
        setChecked(event.target.checked);
    };
    const handleButtonAddCart = e => {
        e.preventDefault()
    
    }
    return (
        <div>
            <Card sx={{ maxWidth: 345 }}>
                <CardHeader
                    avatar={
                        <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                            M
                        </Avatar>
                    }
                    action={
                        <IconButton onClick={() => handleclick(note._id)}>
                            <DeleteOutline />
                        </IconButton>
                    }
                    title={note.name}


                />

                <CardContent >
                    <Typography >
                        {note.description}
                    </Typography>
                    <Typography>
                        <img src={note.profile_url} style={{ width: 120, height: 100 }} alt='' />

                    </Typography>
                    <Typography sx={{ fontSize: 20 }} color="text.primary" gutterBottom>

                        price: {note.price}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="large"  >Know More</Button>
                    <Checkbox
                        checked={checked}
                        onChange={handleChange}
                        inputProps={{ 'aria-label': 'controlled' }}
                    />
                    {/* <Button fluid className='add-button' onClick={handleButtonAddCart}>
                        Add to Cart
                        <Icon name='arrow right' />
                    </Button> */}
                </CardActions>

            </Card>

        </div>
    )
}

export default NoteCard
// {note.name}
//         {note.description}
//         {note.price}
//         {note.quantities}
//         {note.photo_path} 