import React from 'react';
import { Box, Typography, Container, Grid, Paper, Avatar, Button, Chip } from '@mui/material';
import { motion } from 'framer-motion';
import SchoolIcon from '@mui/icons-material/School';
import WorkIcon from '@mui/icons-material/Work';
import CodeIcon from '@mui/icons-material/Code';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
// Photo de profil depuis le dossier public
const profileImageUrl = process.env.PUBLIC_URL + '/ft.jpg';

const About = () => {
  const cvUrl = process.env.PUBLIC_URL + '/CV hazem Fatnassi.pdf';
  const infoItems = [
    { icon: <LocationOnIcon color="primary" />, text: 'Ezzahra, 5199 Mahdia, Tunisie' },
    { icon: <EmailIcon color="primary" />, text: 'fatnassi.hazem2005@gmail.com' },
    { icon: <PhoneIcon color="primary" />, text: '+216 50 210 243' },
  ];

  const education = [
    {
      year: '2023 - 2026',
      degree: 'Licence en Technologie de l\'Informatique',
      institution: 'Institut Supérieur des Études Technologiques, Mahdia',
      description: 'Spécialité Développement des Systèmes d\'Information',
    },
    {
      year: '2023',
      degree: 'Baccalauréat',
      institution: 'Lycée Secondaire Ezzahra',
      description: 'Sciences Expérimentales',
    },
  ];

  const experience = [
    {
      year: '2025 (2 mois)',
      position: 'Stage de perfectionnement',
      company: 'Chaaben Technologie Group, Sousse',
      description: 'Participation à la conception et au développement de modules applicatifs. Contribution à des projets web. Approfondissement des compétences en programmation orientée objet et intégration frontend/backend.',
    },
    {
      year: '2024 (1 mois)',
      position: 'Stage d\'initiation',
      company: 'SYB Informatique, Mahdia',
      description: 'Découverte du fonctionnement de l\'entreprise et de son environnement technique. Observation des méthodes de travail et initiation aux outils de développement.',
    },
  ];

  return (
    <Box id="about" sx={{ py: 10, bgcolor: 'background.default' }}>
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
            À Propos de Moi
          </Typography>
        </motion.div>

        <Grid container spacing={6} alignItems="center" justifyContent="center">
          <Grid item xs={12} md={4} sx={{ display: 'flex', justifyContent: 'center' }}>
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
                  width: 360,
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  textAlign: 'center',
                  borderRadius: 3,
                  position: 'relative',
                  overflow: 'hidden',
                  background: 'linear-gradient(180deg, #ffffff 0%, #f7f2ec 100%)',
                  boxShadow: '0 10px 25px rgba(0,0,0,0.08)',
                  '&:before': {
                    content: '""',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    height: '6px',
                    background: (theme) => theme.palette.primary.main,
                  },
                }}
              >
                <Avatar
                  src={profileImageUrl}
                  alt="Hazem Fatnassi"
                  sx={{
                    width: 160,
                    height: 160,
                    mb: 2,
                    border: '4px solid',
                    borderColor: 'primary.main',
                    boxShadow: '0 8px 24px rgba(109,76,65,0.25)'
                  }}
                />
                <Typography variant="h5" component="h3" gutterBottom sx={{ fontWeight: 700 }}>
                  Hazem Fatnassi
                </Typography>
                <Chip label="Développeur Full Stack" color="primary" variant="outlined" sx={{ mb: 2, fontWeight: 600 }} />
                
                <Box sx={{ mt: 1, width: '100%' }}>
                  {infoItems.map((item, index) => (
                    <Box key={index} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', mb: 1.2 }}>
                      <Box sx={{ mr: 1.2 }}>{item.icon}</Box>
                      <Typography variant="body2" color="text.secondary" sx={{ fontSize: '0.95rem' }}>
                        {item.text}
                      </Typography>
                    </Box>
                  ))}
                </Box>

                <Box sx={{ mt: 2, width: '100%', display: 'flex', justifyContent: 'center' }}>
                  <Button
                    component="a"
                    href={cvUrl}
                    download="CV Hazem Fatnassi.pdf"
                    variant="outlined"
                    size="small"
                    sx={{
                      textTransform: 'none',
                      borderRadius: '24px',
                      px: 2.5,
                    }}
                  >
                    Mon CV (PDF)
                  </Button>
                </Box>
              </Paper>
            </motion.div>
          </Grid>

          <Grid item xs={12} md={8}>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Paper
                elevation={3}
                sx={{
                  p: 4,
                  borderRadius: 2,
                  height: '100%',
                }}
              >
                <Typography variant="h5" component="h3" gutterBottom sx={{ display: 'flex', alignItems: 'center' }}>
                  <CodeIcon color="primary" sx={{ mr: 1 }} />
                  Mon Profil
                </Typography>
                <Typography paragraph>
                  Étudiant en informatique, motivé et rigoureux, je suis à la recherche d'opportunités pour mettre en 
                  pratique mes connaissances académiques et acquérir une expérience concrète en entreprise. Passionné par 
                  le domaine du développement, je souhaite contribuer activement à des projets innovants tout en développant 
                  mes compétences techniques et professionnelles dans un environnement stimulant et collaboratif.
                </Typography>

                <Typography variant="h5" component="h3" gutterBottom sx={{ mt: 4, display: 'flex', alignItems: 'center' }}>
                  <SchoolIcon color="primary" sx={{ mr: 1 }} />
                  Formation
                </Typography>
                {education.map((edu, index) => (
                  <Box key={index} sx={{ mb: 3, ml: 2, position: 'relative', pl: 3, borderLeft: '2px solid', borderColor: 'primary.main' }}>
                    <Typography variant="subtitle2" color="primary" fontWeight="bold">
                      {edu.year}
                    </Typography>
                    <Typography variant="h6" component="h4" sx={{ mt: 0.5 }}>
                      {edu.degree}
                    </Typography>
                    <Typography variant="subtitle1" color="text.secondary">
                      {edu.institution}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {edu.description}
                    </Typography>
                  </Box>
                ))}

                <Typography variant="h5" component="h3" gutterBottom sx={{ mt: 4, display: 'flex', alignItems: 'center' }}>
                  <WorkIcon color="primary" sx={{ mr: 1 }} />
                  Expérience Professionnelle
                </Typography>
                {experience.map((exp, index) => (
                  <Box key={index} sx={{ mb: 3, ml: 2, position: 'relative', pl: 3, borderLeft: '2px solid', borderColor: 'secondary.main' }}>
                    <Typography variant="subtitle2" color="secondary" fontWeight="bold">
                      {exp.year}
                    </Typography>
                    <Typography variant="h6" component="h4" sx={{ mt: 0.5 }}>
                      {exp.position}
                    </Typography>
                    <Typography variant="subtitle1" color="text.secondary">
                      {exp.company}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {exp.description}
                    </Typography>
                  </Box>
                ))}
              </Paper>
            </motion.div>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default About;
