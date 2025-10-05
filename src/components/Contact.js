import React from 'react';
import { Box, Typography, Container, Grid, Button, Paper } from '@mui/material';
import { motion } from 'framer-motion';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import FacebookIcon from '@mui/icons-material/Facebook';

const Contact = () => {

  const contactInfo = [
    { icon: <EmailIcon color="primary" />, text: 'fatnassi.hazem2005@gmail.com', link: 'mailto:fatnassi.hazem2005@gmail.com' },
    { icon: <PhoneIcon color="primary" />, text: '+216 50 210 243', link: 'tel:+21650210243' },
    { icon: <LocationOnIcon color="primary" />, text: 'Ezzahra, 5199 Mahdia, Tunisie', link: 'https://maps.google.com?q=Ezzahra+5199+Mahdia+Tunisie' },
  ];

  const socialLinks = [
    { icon: <GitHubIcon />, label: 'GitHub', url: 'https://github.com/hazemfatnassi' },
    { icon: <LinkedInIcon />, label: 'LinkedIn', url: 'https://linkedin.com/in/hazem-fatnassi' },
    { icon: <FacebookIcon />, label: 'Facebook', url: 'https://www.facebook.com/hazem.fatnassi.14' },
    { icon: <WhatsAppIcon />, label: 'WhatsApp', url: 'https://wa.me/21650210243' },
    { icon: <EmailIcon />, label: 'Email', url: 'mailto:fatnassi.hazem2005@gmail.com' },
  ];

  return (
    <Box id="contact" sx={{ py: 10, bgcolor: 'background.paper' }}>
      <Container maxWidth="lg">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Typography
            variant="h3"
            component="h2"
            align="center"
            sx={{
              mb: 6,
              position: 'relative',
              display: 'inline-block',
              '&:after': {
                content: '""',
                position: 'absolute',
                width: '60px',
                height: '4px',
                bottom: '-10px',
                left: '50%',
                transform: 'translateX(-50%)',
                bgcolor: 'primary.main',
                borderRadius: '2px',
              },
            }}
          >
            Contactez-moi
          </Typography>
        </motion.div>

        <Grid container spacing={6}>
          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Paper
                elevation={3}
                sx={{
                  p: 4,
                  height: '100%',
                  borderRadius: 2,
                  background: 'linear-gradient(145deg, #f5f5f5 0%, #e0f2ff 100%)',
                }}
              >
                <Typography variant="h5" component="h3" sx={{ mb: 3, fontWeight: 600, color: 'primary.main' }}>
                  Mes Plateformes
                </Typography>
                
                <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap', mb: 1 }}>
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ y: -5, scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      style={{ color: 'inherit' }}
                    >
                      <Box
                        sx={{
                          width: 56,
                          height: 56,
                          borderRadius: '50%',
                          backgroundColor: 'white',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
                          color: 'primary.main',
                          fontSize: '1.6rem',
                          transition: 'all 0.3s ease',
                          '&:hover': {
                            backgroundColor: 'primary.main',
                            color: 'white',
                            transform: 'translateY(-5px)',
                          },
                        }}
                      >
                        {social.icon}
                      </Box>
                    </motion.a>
                  ))}
                </Box>

                <Button
                  variant="outlined"
                  color="primary"
                  href="mailto:fatnassi.hazem2005@gmail.com"
                  sx={{ mt: 2, borderRadius: '50px', px: 3, textTransform: 'none' }}
                >
                  Me contacter par email
                </Button>
              </Paper>
            </motion.div>
          </Grid>

          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Paper
                elevation={3}
                sx={{
                  p: 4,
                  borderRadius: 2,
                }}
              >
                <Typography variant="h5" component="h3" sx={{ mb: 3, fontWeight: 600, color: 'primary.main' }}>
                  Mes Coordonnées
                </Typography>

                <Box sx={{ mb: 2 }}>
                  {contactInfo.map((info, index) => (
                    <Box
                      key={index}
                      component="a"
                      href={info.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      sx={{
                        display: 'flex',
                        alignItems: 'center',
                        mb: 2.5,
                        textDecoration: 'none',
                        color: 'inherit',
                        transition: 'all 0.3s ease',
                        '&:hover': {
                          color: 'primary.main',
                          transform: 'translateX(5px)',
                        },
                      }}
                    >
                      <Box sx={{ mr: 2, display: 'flex', alignItems: 'center' }}>
                        {info.icon}
                      </Box>
                      <Typography variant="body1">{info.text}</Typography>
                    </Box>
                  ))}
                </Box>

              </Paper>
            </motion.div>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Contact;
