import React from 'react';
import { Box, Typography, Container, Grid, Button, Paper, TextField, Stack } from '@mui/material';
import { motion } from 'framer-motion';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import FacebookIcon from '@mui/icons-material/Facebook';

const Contact = () => {
  const [form, setForm] = React.useState({ name: '', email: '', message: '' });

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

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Contact: ${form.name || ''}`);
    const body = encodeURIComponent(`${form.message}\n\n— ${form.name}\n${form.email}`);
    window.location.href = `mailto:fatnassi.hazem2005@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <Box id="contact" sx={{ py: 10, bgcolor: 'background.default' }}>
      <Container maxWidth="lg">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
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
              fontWeight: 800,
              background: 'linear-gradient(135deg, rgb(1, 42, 79) 0%, rgb(77, 49, 32) 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            Restons en contact
          </Typography>
        </motion.div>

        <Grid container spacing={4} alignItems="stretch">
          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <Paper
                elevation={4}
                sx={{
                  p: { xs: 3, md: 4 },
                  borderRadius: 3,
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 2.5,
                  border: '1px solid',
                  borderColor: 'divider',
                }}
              >
                <Typography variant="h5" sx={{ fontWeight: 700 }}>
                  Coordonnées
                </Typography>

                <Box>
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
                        mb: 2,
                        textDecoration: 'none',
                        color: 'inherit',
                        p: 1,
                        borderRadius: 2,
                        transition: 'all 0.25s ease',
                        '&:hover': {
                          backgroundColor: 'action.hover',
                          transform: 'translateX(4px)',
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

                <Box sx={{ mt: 1 }}>
                  <Typography variant="subtitle2" color="text.secondary" sx={{ mb: 1 }}>
                    Mes plateformes
                  </Typography>
                  <Box sx={{ display: 'flex', gap: 1.5, flexWrap: 'wrap' }}>
                    {socialLinks.map((social, index) => (
                      <motion.a
                        key={index}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileTap={{ scale: 0.95 }}
                        style={{ color: 'inherit' }}
                      >
                        <Box
                          sx={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: 1,
                            px: 1.5,
                            py: 0.75,
                            borderRadius: 2,
                            bgcolor: 'action.selected',
                            color: 'text.primary',
                            '&:hover': { bgcolor: 'action.hover' },
                          }}
                        >
                          {social.icon}
                          <Typography variant="body2">{social.label}</Typography>
                        </Box>
                      </motion.a>
                    ))}
                  </Box>
                </Box>

                <Box
                  sx={{
                    mt: 'auto',
                    p: 2,
                    borderRadius: 2,
                    background: 'linear-gradient(135deg, rgba(1, 42, 79, 0.08) 0%, rgba(77, 49, 32, 0.08) 100%)',
                  }}
                >
                  <Typography variant="body2" color="text.secondary">
                    Disponible pour des opportunités de stage, projets freelance, ou collaborations.
                  </Typography>
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
