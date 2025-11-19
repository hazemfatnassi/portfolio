import React from 'react';
import { Box, Typography, Button, Container, useTheme, useMediaQuery, IconButton, Tooltip } from '@mui/material';
import { motion } from 'framer-motion';
import { Link as RouterLink } from 'react-router-dom';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import EmailIcon from '@mui/icons-material/Email';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
// Profile photo from public folder
const profileImageUrl = process.env.PUBLIC_URL + '/hazemft.png';
// CV PDF from public folder
const cvUrl = process.env.PUBLIC_URL + '/cv hazem fatnassi ..pdf';

const Home = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Box
      id="home"
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        background: 'linear-gradient(135deg,rgb(1, 42, 79) 0%,rgb(77, 49, 32) 100%)', // brown gradient
        color: 'white',
        position: 'relative',
        overflow: 'hidden',
        pt: 8,
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            display: 'flex',
            flexDirection: isMobile ? 'column-reverse' : 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: 4,
          }}
        >
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            style={{ zIndex: 1, marginTop: isMobile ? '3rem' : 0 }}
          >
            <Typography
              variant="h4"
              component="h1"
              gutterBottom
              sx={{
                fontWeight: 700,
                mb: 2,
              }}
            >
              Bonjour, je suis
              <Typography
                variant="h2"
                component="span"
                sx={{
                  display: 'block',
                  fontWeight: 800,
                  mt: 1,
                }}
              >
                <motion.span
                  style={{
                    display: 'inline-block',
                    backgroundImage: 'linear-gradient(135deg, rgb(84, 169, 229), rgb(151, 107, 51))',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundSize: '200% 200%',
                  }}
                  animate={{ backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'] }}
                  transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
                >
                  Hazem Fatnassi
                </motion.span>
              </Typography>
            </Typography>

            <Typography
              variant="h5"
              component="h2"
              gutterBottom
              sx={{
                mb: 4,
                maxWidth: '600px',
                lineHeight: 1.6,
              }}
            >
              Étudiant en Technologie de l'Informatique, spécialisé en Développement des Systèmes d'Information.
            </Typography>

            <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
              <Button
                href="mailto:fatnassi.hazem2005@gmail.com"
                variant="contained"
                color="secondary"
                size="large"
                sx={{
                  px: 4,
                  py: 1.5,
                  borderRadius: '50px',
                  fontWeight: 600,
                  textTransform: 'none',
                  fontSize: '1.1rem',
                }}
              >
                Me Contacter
              </Button>
              <Button
                component="a"
                href={cvUrl}
                download="cv hazem fatnassi ..pdf"
                variant="outlined"
                color="inherit"
                size="large"
                startIcon={<PictureAsPdfIcon />}
                sx={{
                  px: 4,
                  py: 1.5,
                  borderRadius: '50px',
                  fontWeight: 600,
                  textTransform: 'none',
                  fontSize: '1.1rem',
                  borderWidth: '2px',
                  '&:hover': {
                    borderWidth: '2px',
                    backgroundColor: 'rgba(255, 255, 255, 0.12)',
                  },
                }}
              >
                Mon CV
              </Button>
              <Button
                component={RouterLink}
                to="/projects"
                variant="outlined"
                color="inherit"
                size="large"
                sx={{
                  px: 4,
                  py: 1.5,
                  borderRadius: '50px',
                  fontWeight: 600,
                  textTransform: 'none',
                  fontSize: '1.1rem',
                  borderWidth: '2px',
                  '&:hover': {
                    borderWidth: '2px',
                    backgroundColor: 'rgba(255, 255, 255, 0.12)',
                  },
                }}
              >
                Mes Projets
              </Button>
            </Box>

            <Box sx={{ mt: 6, display: 'flex', gap: 2 }}>
              {[
                { label: 'GitHub', url: 'https://github.com/hazemfatnassi', Icon: GitHubIcon },
                { label: 'LinkedIn', url: 'https://linkedin.com/in/hazem-fatnassi', Icon: LinkedInIcon },
                { label: 'Facebook', url: 'https://www.facebook.com/hazem.fatnassi.14', Icon: FacebookIcon },
                { label: 'WhatsApp', url: 'https://wa.me/21650210243', Icon: WhatsAppIcon },
                { label: 'Email', url: 'mailto:fatnassi.hazem2005@gmail.com', Icon: EmailIcon },
              ].map(({ label, url, Icon }) => (
                <motion.div key={label} whileHover={{ y: -4 }} whileTap={{ scale: 0.95 }}>
                  <Tooltip title={label} placement="top">
                    <IconButton
                      component="a"
                      href={url}
                      target={url.startsWith('http') ? '_blank' : undefined}
                      rel="noopener noreferrer"
                      sx={{
                        width: 50,
                        height: 50,
                        borderRadius: '50%',
                        backgroundColor: 'rgba(255, 255, 255, 0.15)',
                        color: 'white',
                        '&:hover': {
                          backgroundColor: 'rgba(255, 255, 255, 0.25)',
                        },
                      }}
                    >
                      <Icon />
                    </IconButton>
                  </Tooltip>
                </motion.div>
              ))}
            </Box>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            style={{
              position: 'relative',
              zIndex: 1,
              marginTop: 0,
            }}
          >
            <Box
              sx={{
                width: isMobile ? 280 : 350,
                height: isMobile ? 280 : 350,
                borderRadius: '50%',
                overflow: 'hidden',
                border: '10px solid rgba(255, 255, 255, 0.1)',
                boxShadow: '0 0 50px rgba(0, 0, 0, 0.2)',
              }}
            >
              <img
                src={profileImageUrl}
                alt="Hazem Fatnassi"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                }}
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = 'https://via.placeholder.com/350x350?text=Hazem+Fatnassi';
                }}
              />
            </Box>

            <motion.div
              animate={{
                scale: [1, 1.05, 1],
                rotate: [0, 5, -5, 0],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                repeatType: 'reverse',
              }}
              style={{
                position: 'absolute',
                top: '-20px',
                right: '-20px',
                width: '100px',
                height: '100px',
                borderRadius: '30% 70% 70% 30% / 30% 30% 70% 70%',
                background: 'linear-gradient(45deg, #D7CCC8, #8D6E63)',
                zIndex: -1,
                filter: 'blur(1px)',
              }}
            />
          </motion.div>
        </Box>
      </Container>

        {/* Animated background elements */}
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={i}
            animate={{
              y: [0, 20, 0],
              x: [0, Math.random() * 40 - 20, 0],
              rotate: [0, 360],
            }}
            transition={{
              duration: 10 + Math.random() * 10,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            style={{
              position: 'absolute',
              width: Math.random() * 20 + 10,
              height: Math.random() * 20 + 10,
              backgroundColor: 'rgba(215, 204, 200, 0.22)', // soft beige particles
              borderRadius: '50%',
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              zIndex: 0,
            }}
          />
        ))}
    </Box>
  );
};

export default Home;
