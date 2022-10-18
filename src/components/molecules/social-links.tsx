import { useState } from 'react'
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import IconButton from '@mui/material/IconButton';
import Link from '@mui/material/Link';
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import Button from '@mui/material/Button';

import Linkedin from '../../assets/image/linkedin.png'
import Malt from '../../assets/image/malt.png'
import Phone from '../../assets/image/phone.png'
import Mail from '../../assets/image/mail.png'

interface openContactDialogProps {
    open: boolean,
    title: string,
    icon: string,
    content: string
}

const defaultContactDialogState = {
    open: false,
    title: '',
    icon: '',
    content: ''
}

export const SocialLinks = () => {
    const [contactDialogState, setContactDialogState] = useState<openContactDialogProps>(defaultContactDialogState)

    return (
        <>
            <Box>
                <Link href="https://www.linkedin.com/in/antoineludeau/" target="_blank" color="inherit">
                    <IconButton color="primary" aria-label="upload picture" component="label">
                        <img width='30px' src={Linkedin} />
                    </IconButton>
                </Link>
                <Link href="https://www.malt.fr/profile/antoineludeau" target="_blank" color="inherit">
                    <IconButton color="primary" aria-label="upload picture" component="label">
                        <img width='30px' src={Malt} />
                    </IconButton>
                </Link>
                <IconButton color="primary" aria-label="upload picture" component="label" onClick={() => setContactDialogState({ open: true, title: 'Téléphone', icon: Phone, content: '+33 6 37 69 25 19' })}>
                    <img width='30px' src={Phone} />
                </IconButton>
                <IconButton color="primary" aria-label="upload picture" component="label" onClick={() => setContactDialogState({ open: true, title: 'Mail', icon: Mail, content: 'antoine.ludeau@gmail.com' })}>
                    <img width='30px' src={Mail} />
                </IconButton>
            </Box>
            <Dialog onClose={() => setContactDialogState(prev => ({ ...prev, open: false }))} open={contactDialogState.open}>
                <DialogTitle>
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <Box sx={{ display: 'inherit', alignItems: 'inherit', marginRight: 1 }}>
                            <img width='30px' height='30px' src={contactDialogState.icon} />
                        </Box>
                        <Typography variant="h4" component="div">
                            {contactDialogState.title}
                        </Typography>
                    </Box>
                </DialogTitle>
                <DialogContent>
                    <Grid
                        container
                        direction="column"
                        justifyContent="center"
                        alignItems="left"
                        padding={2}
                        spacing={4}
                    >
                        <Grid item>
                            <Typography variant="h5" component="div" >
                                {contactDialogState.content}
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Button variant="outlined" onClick={() => navigator.clipboard.writeText(contactDialogState.content)}>Copier dans le clipboard</Button></Grid>
                    </Grid>
                </DialogContent>
            </Dialog>
        </>
    );
};
