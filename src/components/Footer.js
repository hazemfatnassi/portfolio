import React from 'react';
import { Box, Typography, Container, Divider, IconButton, Link, Grid } from '@mui/material';
import { motion } from 'framer-motion';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import EmailIcon from '@mui/icons-material/Email';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import { NavLink } from 'react-router-dom';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const socialLinks = [
    { icon: <LinkedInIcon />, label: 'LinkedIn', url: 'https://linkedin.com/in/hazem-fatnassi' },
    { icon: <GitHubIcon />, label: 'GitHub', url: 'https://github.com/hazemfatnassi' },
    { icon: <WhatsAppIcon />, label: 'WhatsApp', url: 'https://wa.me/21650210243' },
    { icon: <EmailIcon />, label: 'Email', url: 'mailto:fatnassi.hazem2005@gmail.com' },
  ];

  const footerLinks = [
    { text: 'Accueil', to: '/' },
    { text: 'À Propos', to: '/about' },
    { text: 'Compétences', to: '/skills' },
    { text: 'Projets', to: '/projects' },
    { text: 'Contact', to: '/contact' },
  ];

  return (
    <Box
      component="footer"
      sx={{
        bgcolor: 'background.default',
        pt: 6,
        pb: 3,
        borderTop: '1px solid',
        borderColor: 'divider',
        position: 'relative',
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <Typography variant="h6" component="h3" sx={{ mb: 2, fontWeight: 600 }}>
                Hazem Fatnassi
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                Étudiant en Technologie de l'Informatique, spécialisé en Développement des Systèmes d'Information.
                Passionné par la création de solutions numériques innovantes.
              </Typography>
              <Box sx={{ display: 'flex', gap: 2, mt: 2 }}>
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ y: -3 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <IconButton
                      aria-label={social.label}
                      sx={{
                        color: 'text.secondary',
                        '&:hover': {
                          color: 'primary.main',
                          backgroundColor: 'rgba(109, 76, 65, 0.12)',
                        },
                      }}
                    >
                      {social.icon}
                    </IconButton>
                  </motion.a>
                ))}
              </Box>
            </motion.div>
          </Grid>

          <Grid item xs={12} md={4}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <Typography variant="h6" component="h3" sx={{ mb: 2, fontWeight: 600 }}>
                Liens rapides
              </Typography>
              <Box component="ul" sx={{ listStyle: 'none', p: 0, m: 0 }}>
                {footerLinks.map((link, index) => (
                  <motion.li
                    key={index}
                    whileHover={{ x: 5 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <NavLink
                      to={link.to}
                      style={{ textDecoration: 'none' }}
                    >
                      {({ isActive }) => (
                        <Typography
                          variant="body2"
                          sx={{
                            display: 'inline-block',
                            color: isActive ? 'primary.main' : 'text.secondary',
                            mb: 1,
                            transition: 'all 0.3s ease',
                            '&:hover': {
                              color: 'primary.main',
                              pl: 1,
                            },
                          }}
                        >
                          {link.text}
                        </Typography>
                      )}
                    </NavLink>
                  </motion.li>
                ))}
              </Box>
            </motion.div>
          </Grid>

          <Grid item xs={12} md={4}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Typography variant="h6" component="h3" sx={{ mb: 2, fontWeight: 600 }}>
                Contact
              </Typography>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                <Typography variant="body2" color="text.secondary">
                  <Box component="span" sx={{ fontWeight: 500, color: 'text.primary' }}>Email:</Box>{' '}
                  <Link href="mailto:fatnassi.hazem2005@gmail.com" color="inherit" underline="hover">
                    fatnassi.hazem2005@gmail.com
                  </Link>
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  <Box component="span" sx={{ fontWeight: 500, color: 'text.primary' }}>Téléphone:</Box>{' '}
                  <Link href="tel:+21650210243" color="inherit" underline="hover">
                    +216 50 210 243
                  </Link>
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  <Box component="span" sx={{ fontWeight: 500, color: 'text.primary' }}>Adresse:</Box>{' '}
                  Ezzahra, 5199 Mahdia, Tunisie
                </Typography>
              </Box>
            </motion.div>
          </Grid>
        </Grid>

        <Divider sx={{ my: 4 }} />

        <Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, justifyContent: 'space-between', alignItems: 'center' }}>
          <Typography variant="body2" color="text.secondary" align="center">
            © {new Date().getFullYear()} Hazem Fatnassi. Tous droits réservés.
          </Typography>
          <Typography variant="body2" color="text.secondary" align="center" sx={{ mt: { xs: 2, sm: 0 } }}>
            Conçu et développé avec ❤️ par Hazem Fatnassi
          </Typography>
        </Box>
      </Container>

      <motion.div
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={scrollToTop}
        style={{
          position: 'fixed',
          bottom: '2rem',
          right: '2rem',
          zIndex: 1000,
          cursor: 'pointer',
        }}
      >
        <Box
          sx={{
            width: '50px',
            height: '50px',
            borderRadius: '50%',
            backgroundColor: 'primary.main',
            color: 'white',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 4px 20px rgba(109, 76, 65, 0.3)',
            transition: 'all 0.3s ease',
            '&:hover': {
              backgroundColor: 'primary.dark',
              transform: 'translateY(-3px)',
            },
          }}
        >
          <ArrowUpwardIcon />
        </Box>
      </motion.div>
    </Box>
  );
};

export default Footer;
