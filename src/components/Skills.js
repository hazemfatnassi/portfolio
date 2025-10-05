import React from 'react';
import { Box, Typography, Container, Grid, LinearProgress, Paper, Chip } from '@mui/material';
import { motion } from 'framer-motion';
import CodeIcon from '@mui/icons-material/Code';
import StorageIcon from '@mui/icons-material/Storage';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import BrushIcon from '@mui/icons-material/Brush';
import SettingsIcon from '@mui/icons-material/Settings';
import LanguageIcon from '@mui/icons-material/Language';

const Skills = () => {
  const skills = [
    {
      category: 'Frontend',
      icon: <CodeIcon color="primary" fontSize="large" />,
      items: [
        { name: 'HTML/CSS', level: 90 },
        { name: 'JavaScript', level: 85 },
        { name: 'TypeScript', level: 49 },
        { name: 'React.js', level: 85 },
        { name: 'Angular', level: 70 },
      ],
    },
    {
      category: 'Backend',
      icon: <StorageIcon color="primary" fontSize="large" />,
      items: [
        { name: 'Node.js', level: 80 },
        { name: 'Java', level: 85 },
        { name: 'Spring Boot', level: 80 },
        { name: 'PHP', level: 50 },
        { name: 'Python', level: 50 },
        { name: 'C#/.NET', level: 60 },
      ],
    },
    {
      category: 'Bases de Données',
      icon: <StorageIcon color="primary" fontSize="large" />,
      items: [
        { name: 'MySQL', level: 95 },
        { name: 'PostgreSQL', level: 50 },
        { name: 'MongoDB', level: 75 },
       ],
    },
    {
      category: 'Mobile',
      icon: <PhoneAndroidIcon color="primary" fontSize="large" />,
      items: [
        { name: 'Android (Java)', level: 50 },
        { name: 'flutter', level: 10 },
        { name: 'Material Design', level: 80 },
      ],
    },

    {
      category: 'Outils & DevOps',
      icon: <SettingsIcon color="primary" fontSize="large" />,
      items: [
        { name: 'Git/GitHub', level: 85 },
        { name: 'Docker', level: 70 },
        { name: 'Jira', level: 80 },
        { name: 'Postman', level: 85 },
        { name: 'VS Code', level: 90 },
      ],
    },
  ];

  const languages = [
    { name: 'Arabe', level: 100, levelText: 'Langue maternelle' },
    { name: 'Français', level: 70, levelText: 'Niveau B1' },
    { name: 'Anglais', level: 75, levelText: 'Niveau B2' },
    { name: 'Allemand', level: 60, levelText: 'Niveau B1' },
  ];

  const getColorForLevel = (level) => {
    if (level >= 80) return 'success';
    if (level >= 60) return 'primary';
    return 'secondary';
  };

  return (
    <Box id="skills" sx={{ py: 10, bgcolor: 'background.default' }}>
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
            Mes Compétences
          </Typography>
        </motion.div>

        <Grid container spacing={3} direction="column">
          {skills.map((skillCategory, index) => (
            <Grid item xs={12} key={skillCategory.category}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Paper
                  elevation={3}
                  sx={{
                    p: 3,
                    height: '100%',
                    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                    '&:hover': {
                      transform: 'translateY(-5px)',
                      boxShadow: '0 10px 20px rgba(0,0,0,0.1)',
                    },
                  }}
                >
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                    {skillCategory.icon}
                    <Typography variant="h5" component="h3" sx={{ ml: 2, fontWeight: 600 }}>
                      {skillCategory.category}
                    </Typography>
                  </Box>
                  
                  {skillCategory.items.map((skill) => (
                    <Box key={skill.name} sx={{ mb: 2 }}>
                      <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 0.5 }}>
                        <Typography variant="body2">{skill.name}</Typography>
                        <Typography variant="body2" color="text.secondary">
                          {skill.level}%
                        </Typography>
                      </Box>
                      <LinearProgress
                        variant="determinate"
                        value={skill.level}
                        color={getColorForLevel(skill.level)}
                        sx={{
                          height: 8,
                          borderRadius: 2,
                          '& .MuiLinearProgress-bar': {
                            borderRadius: 2,
                          },
                        }}
                      />
                    </Box>
                  ))}
                </Paper>
              </motion.div>
            </Grid>
          ))}
        </Grid>

        <Box sx={{ mt: 8 }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Typography
              variant="h4"
              component="h3"
              align="center"
              sx={{
                mb: 4,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <LanguageIcon color="primary" sx={{ mr: 1 }} />
              Langues
            </Typography>

            <Grid container spacing={3} justifyContent="center">
              {languages.map((language, index) => (
                <Grid item xs={12} md={6} lg={3} key={language.name}>
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                  >
                    <Paper
                      elevation={2}
                      sx={{
                        p: 3,
                        textAlign: 'center',
                        transition: 'all 0.3s ease',
                        '&:hover': {
                          transform: 'translateY(-5px)',
                        },
                      }}
                    >
                      <Typography variant="h6" component="div" sx={{ fontWeight: 600, mb: 1 }}>
                        {language.name}
                      </Typography>
                      <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                        {language.levelText}
                      </Typography>
                      <LinearProgress
                        variant="determinate"
                        value={language.level}
                        color={getColorForLevel(language.level)}
                        sx={{
                          height: 8,
                          borderRadius: 2,
                          '& .MuiLinearProgress-bar': {
                            borderRadius: 2,
                          },
                        }}
                      />
                    </Paper>
                  </motion.div>
                </Grid>
              ))}
            </Grid>
          </motion.div>
        </Box>

        <Box sx={{ mt: 8 }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Typography
              variant="h4"
              component="h3"
              align="center"
              sx={{
                mb: 4,
              }}
            >
              Autres Compétences
            </Typography>

            <Grid container spacing={2} justifyContent="center">
              {[
                'Architecture MVC/MVVM',
                'UML',
                'Méthodes Agiles',
                'Clean Code',
                'Tests Unitaires',
                'CI/CD',
                'Responsive Design',

              ].map((skill, index) => (
                <Grid item key={skill}>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Chip
                      label={skill}
                      sx={{
                        px: 2,
                        py: 1.5,
                        bgcolor: 'primary.light',
                        color: 'primary.contrastText',
                        fontWeight: 500,
                        '&:hover': {
                          bgcolor: 'primary.main',
                        },
                      }}
                    />
                  </motion.div>
                </Grid>
              ))}
            </Grid>
          </motion.div>
        </Box>
      </Container>
    </Box>
  );
};

export default Skills;
