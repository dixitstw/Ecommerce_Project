import { Box, Button, TextField, Typography } from '@mui/material'
import React from 'react'
import Footer from '../Footer'
import Navbar from '../Navbar'

const Contact = () => {
  return (
    <>
    <Navbar/>
    <Box width={'90%'} margin='auto' backgroundColor={'cornsilk'} my={'25px'} p='25px'>
        <Typography variant='h3' textAlign='center' color='secondary' sx={{textDecoration:'underline'}}>
            Contact
        </Typography>
        <Box className='top' display='flex' alignItems='center'>
            <Box className='address' backgroundColor='#FFDFDD' margin='25px' padding='25px' width='50%' borderRadius='20px'>
                <Typography variant='h4' color='secondary' sx={{textDecoration: 'underline'}} >Address</Typography>
                <Typography variant='h4' color='secondary' >Dursikshya Education</Typography>
                <Typography variant='h6' color='secondary' >Jamal, Kantipath, Kathmandu</Typography>
                <Typography variant='h6' color='secondary' >Phone: 01-5901234</Typography>
                <Typography variant='h6' color='secondary' >Website: www.dursikshya.edu.np</Typography>
                <Typography variant='h6' color='secondary' >email: info@dursikshya.edu.np</Typography>

            </Box>
            <Box className='contact-form' backgroundColor='#FFDFDD' margin='25px' padding='25px' width='50%' borderRadius='20px'>
             <Typography variant='h4' color='secondary' sx={{textDecoration: 'underline'}} >Contact Form</Typography>
            <TextField label={'Email'} fullWidth size='small' sx={{mt: '5px'}} color={'success'} required placeholer='your email here' variant='outlined' placeholder='your email here'/>
            <TextField label={'Subject'} fullWidth size='small' sx={{mt: '5px'}} color={'success'} required variant='outlined'/>
            <TextField label={'Body'} fullWidth size='small' sx={{mt: '5px'}} color={'success'} required variant='outlined' multiline rows={4}/>

            {/*outlined, filled, standard */}
            <hr/>
            <Button variant='contained' color='secondary' fullWidth>Submit</Button>
            {/*text, contained, outlined */}

            </Box>

        </Box>
        <Box className='bottom' backgroundColor='#FFDFDD' margin='25px' padding='25px' borderRadius='20px'>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.2404031396472!2d85.3127180155342!3d27.70986278279093!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb193edf6bd2af%3A0x44ac26fce7c33d8c!2sDursikshya%20Education%20Network!5e0!3m2!1sen!2snp!4v1677604632203!5m2!1sen!2snp" style={{height: '450px', width: '100%'}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </Box>

    </Box>
    <Footer/>
    </>
  )
}

export default Contact