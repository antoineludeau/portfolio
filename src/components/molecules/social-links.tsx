import { useState } from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import Link from "@mui/material/Link";
import DialogTitle from "@mui/material/DialogTitle";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import Button from "@mui/material/Button";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import EmailIcon from "@mui/icons-material/Email";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from '@mui/icons-material/GitHub';

import Malt from "../../assets/image/malt.png";

interface openContactDialogProps {
  open: boolean;
  title: string;
  icon: any;
  content: string;
}

const defaultContactDialogState = {
  open: false,
  title: "",
  icon: "",
  content: "",
};

export const SocialLinks = () => {
  const [contactDialogState, setContactDialogState] =
    useState<openContactDialogProps>(defaultContactDialogState);

  return (
    <>
      <Box>
        <IconButton
          sx={{
            backgroundColor: "white",
            color: "black",
            margin: "10px",
          }}
          aria-label="phone number icon button"
          component="label"
          onClick={() =>
            setContactDialogState({
              open: true,
              title: "Téléphone",
              icon: <LocalPhoneIcon fontSize="large" />,
              content: "+33 6 37 69 25 19",
            })
          }
        >
          <LocalPhoneIcon fontSize="large" />
        </IconButton>
        <IconButton
          sx={{
            backgroundColor: "white",
            color: "black",
            margin: "10px",
          }}
          aria-label="mail icon button"
          component="label"
          onClick={() =>
            setContactDialogState({
              open: true,
              title: "Mail",
              icon: <EmailIcon fontSize="large" />,
              content: "antoine.ludeau@gmail.com",
            })
          }
        >
          <EmailIcon fontSize="large" />
        </IconButton>
        <Link
          href="https://www.linkedin.com/in/antoineludeau/"
          target="_blank"
          rel="noreferrer"
        >
          <IconButton
            sx={{
              backgroundColor: "white",
              color: "black",
              margin: "10px",
            }}
            aria-label="linkedin icon button"
            component="label"
          >
            <LinkedInIcon fontSize="large" />
          </IconButton>
        </Link>
        <Link
          href="https://github.com/antoineludeau"
          target="_blank"
          rel="noreferrer"
        >
          <IconButton
            sx={{
              width: "51px",
              height: "51px",
              backgroundColor: "white",
              color: "black",
              margin: "10px",
            }}
            aria-label="github icon button"
            component="label"
          >
            <GitHubIcon fontSize="large" />
          </IconButton>
        </Link>
        <Link
          href="https://www.malt.fr/profile/antoineludeau"
          target="_blank"
          rel="noreferrer"
        >
          <IconButton
            sx={{
              width: "51px",
              height: "51px",
              backgroundColor: "white",
              color: "black",
              margin: "10px",
            }}
            aria-label="malt icon button"
            component="label"
          >
            <img width="30px" src={Malt} alt="malt icon" />
          </IconButton>
        </Link>
      </Box>
      <Dialog
        onClose={() =>
          setContactDialogState((prev) => ({ ...prev, open: false }))
        }
        open={contactDialogState.open}
      >
        <DialogTitle>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Box
              sx={{ display: "inherit", alignItems: "inherit", marginRight: 1 }}
            >
              {contactDialogState.icon}
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
              <Typography variant="h5" component="div">
                {contactDialogState.content}
              </Typography>
            </Grid>
            <Grid item>
              <Button
                variant="outlined"
                onClick={() =>
                  navigator.clipboard.writeText(contactDialogState.content)
                }
              >
                Copier dans le clipboard
              </Button>
            </Grid>
          </Grid>
        </DialogContent>
      </Dialog>
    </>
  );
};
