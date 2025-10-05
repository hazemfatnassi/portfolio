import React from 'react';
import { Box, Typography, Container, Grid, Card, CardContent, CardMedia, Button, Chip, Dialog, DialogContent, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { motion } from 'framer-motion';
import GitHubIcon from '@mui/icons-material/GitHub';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';

const Projects = () => {
  const projects = [
    {
      title: 'HomeFind',
      description: 'Plateforme web pour simplifier la recherche et publication de logements. Permet aux agents immobiliers de diffuser leurs annonces de manière claire et rapide, tout en offrant aux utilisateurs un accès structuré aux offres disponibles.',
      technologies: ['React.js', 'Node.js', 'MongoDB', 'MVVM'],
      images: [
        process.env.PUBLIC_URL + '/homefind1.png',
        process.env.PUBLIC_URL + '/homefind2.png',
        process.env.PUBLIC_URL + '/homefind3.png',
        process.env.PUBLIC_URL + '/homefind5.png',
      ],
      github: 'https://github.com/hazemfatnassi/homefind',
      demo: '#',
      date: 'Juillet 2025'
    },
    {
      title: 'TradeX',
      description: 'Plateforme d’échange technologique pour étudiants (PC, téléphones, tablettes) avec matching intelligent, assistant IA intégré et communication sécurisée.',
      technologies: ['React.js', 'PHP', 'MySQL', 'API RESTful'],
      images: [
        process.env.PUBLIC_URL + '/TadeX/1.png',
        process.env.PUBLIC_URL + '/TadeX/2.png',
        process.env.PUBLIC_URL + '/TadeX/3.png',
        process.env.PUBLIC_URL + '/TadeX/4.png',
        process.env.PUBLIC_URL + '/TadeX/5.png',
        process.env.PUBLIC_URL + '/TadeX/6.png',
        process.env.PUBLIC_URL + '/TadeX/7.png',
        process.env.PUBLIC_URL + '/TadeX/8.png',
        process.env.PUBLIC_URL + '/TadeX/9.png',
        process.env.PUBLIC_URL + '/TadeX/10.png',
        process.env.PUBLIC_URL + '/TadeX/11.png',
        process.env.PUBLIC_URL + '/TadeX/12.png',
        process.env.PUBLIC_URL + '/TadeX/13.png',
        process.env.PUBLIC_URL + '/TadeX/14.png',
        process.env.PUBLIC_URL + '/TadeX/15.png',
        process.env.PUBLIC_URL + '/TadeX/16.png',
        process.env.PUBLIC_URL + '/TadeX/17.png',
        process.env.PUBLIC_URL + '/TadeX/18.png',
        process.env.PUBLIC_URL + '/TadeX/19.png',
        process.env.PUBLIC_URL + '/TadeX/trad.png',
      ],
      github: 'https://github.com/hazemfatnassi/tradex',
      demo: '#',
      date: 'Mai 2025'
    },
    {
      title: 'QuizGame',
      description: 'Jeu éducatif interactif qui combine quiz et éléments ludiques pour améliorer l’apprentissage géographique des élèves.',
      technologies: ['React.js', 'Node.js', 'Express', 'MongoDB'],
      images: [
        process.env.PUBLIC_URL + '/quizGeog/1.png',
        process.env.PUBLIC_URL + '/quizGeog/2.png',
        process.env.PUBLIC_URL + '/quizGeog/3.png',
        process.env.PUBLIC_URL + '/quizGeog/4.png',
        process.env.PUBLIC_URL + '/quizGeog/5.png',
        process.env.PUBLIC_URL + '/quizGeog/6.png',
        process.env.PUBLIC_URL + '/quizGeog/7.png',
        process.env.PUBLIC_URL + '/quizGeog/8.png',
        process.env.PUBLIC_URL + '/quizGeog/9.png',
        process.env.PUBLIC_URL + '/quizGeog/10.png',
        process.env.PUBLIC_URL + '/quizGeog/11.png',
        process.env.PUBLIC_URL + '/quizGeog/12.png',
        process.env.PUBLIC_URL + '/quizGeog/13.png',
      ],
      github: 'https://github.com/hazemfatnassi/quizgame',
      demo: 'https://game-three-brown.vercel.app',
      date: 'Décembre 2024'
    },
    {
      title: 'Jeu de dames',
      description: "Développement d’un jeu de dames avec interface graphique. Stack technique : Java Swing pour l’interface graphique, MySQL pour la base de données.",
      technologies: ['Java', 'Swing', 'MySQL'],
      images: [
        process.env.PUBLIC_URL + '/DAME/WhatsApp Image 2025-10-05 at 11.26.06 PM.jpeg',
        process.env.PUBLIC_URL + '/DAME/WhatsApp Image 2025-10-05 at 11.26.06 PM (1).jpeg',
        process.env.PUBLIC_URL + '/DAME/WhatsApp Image 2025-10-05 at 11.26.06 PM (2).jpeg',
        process.env.PUBLIC_URL + '/DAME/WhatsApp Image 2025-10-05 at 11.26.06 PM (3).jpeg',
      ],
      github: '#',
      demo: '#',
      date: 'Mai 2025'
    },
  ];

  // Lightbox state for image zoom with navigation
  const [lightboxOpen, setLightboxOpen] = React.useState(false);
  const [lightboxProjectIdx, setLightboxProjectIdx] = React.useState(0);
  const [lightboxImageIdx, setLightboxImageIdx] = React.useState(0);

  const [activeImageIndex, setActiveImageIndex] = React.useState({});

  React.useEffect(() => {
    // Initialize active image index for each project
    const initialIndexes = {};
    projects.forEach((_, index) => {
      initialIndexes[index] = 0;
    });
    setActiveImageIndex(initialIndexes);
  }, []);

  // Keyboard navigation for lightbox
  React.useEffect(() => {
    if (!lightboxOpen) return;
    const handleKey = (e) => {
      if (e.key === 'Escape') {
        setLightboxOpen(false);
      } else if (e.key === 'ArrowLeft') {
        const imgs = projects[lightboxProjectIdx].images;
        setLightboxImageIdx((prev) => (prev - 1 + imgs.length) % imgs.length);
      } else if (e.key === 'ArrowRight') {
        const imgs = projects[lightboxProjectIdx].images;
        setLightboxImageIdx((prev) => (prev + 1) % imgs.length);
      }
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [lightboxOpen, lightboxProjectIdx, projects]);

  const nextImage = (projectIndex) => {
    setActiveImageIndex(prev => ({
      ...prev,
      [projectIndex]: (prev[projectIndex] + 1) % projects[projectIndex].images.length
    }));
  };

  const prevImage = (projectIndex) => {
    setActiveImageIndex(prev => ({
      ...prev,
      [projectIndex]: (prev[projectIndex] - 1 + projects[projectIndex].images.length) % projects[projectIndex].images.length
    }));
  };

  return (
    <Box id="projects" sx={{ py: 10, bgcolor: 'background.paper' }}>
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
            Mes Projets
          </Typography>
        </motion.div>

        <Grid container spacing={4} direction="column">
          {projects.map((project, index) => (
            <Grid item xs={12} key={project.title}>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card
                  sx={{
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                    '&:hover': {
                      transform: 'translateY(-10px)',
                      boxShadow: '0 20px 30px rgba(0,0,0,0.1)',
                    },
                  }}
                >
                  <Box sx={{ position: 'relative', overflow: 'hidden', height: 250 }}>
                    {project.images.map((img, imgIndex) => (
                      <Box
                        key={imgIndex}
                        sx={{
                          position: 'absolute',
                          top: 0,
                          left: 0,
                          width: '100%',
                          height: '100%',
                          opacity:
                            activeImageIndex[index] === imgIndex ||
                            (activeImageIndex[index] === undefined && imgIndex === 0)
                              ? 1
                              : 0,
                          transition: 'opacity 0.5s ease',
                        }}
                      >
                        <CardMedia
                          component="img"
                          image={img}
                          alt={`${project.title} - Image ${imgIndex + 1}`}
                          sx={{
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover',
                            cursor: 'zoom-in',
                          }}
                          onError={(e) => {
                            e.currentTarget.src = 'https://via.placeholder.com/1200x800?text=Image+non+disponible';
                          }}
                          onClick={() => {
                            setLightboxProjectIdx(index);
                            setLightboxImageIdx(imgIndex);
                            setLightboxOpen(true);
                          }}
                        />
                      </Box>
                    ))}
                    
                    {project.images.length > 1 && (
                      <>
                        <Button
                          onClick={(e) => {
                            e.stopPropagation();
                            prevImage(index);
                          }}
                          sx={{
                            position: 'absolute',
                            left: 10,
                            top: '50%',
                            transform: 'translateY(-50%)',
                            minWidth: 'auto',
                            width: 36,
                            height: 36,
                            borderRadius: '50%',
                            bgcolor: 'rgba(0,0,0,0.5)',
                            color: 'white',
                            '&:hover': {
                              bgcolor: 'rgba(0,0,0,0.7)',
                            },
                          }}
                        >
                          &lt;
                        </Button>
                        <Button
                          onClick={(e) => {
                            e.stopPropagation();
                            nextImage(index);
                          }}
                          sx={{
                            position: 'absolute',
                            right: 10,
                            top: '50%',
                            transform: 'translateY(-50%)',
                            minWidth: 'auto',
                            width: 36,
                            height: 36,
                            borderRadius: '50%',
                            bgcolor: 'rgba(0,0,0,0.5)',
                            color: 'white',
                            '&:hover': {
                              bgcolor: 'rgba(0,0,0,0.7)',
                            },
                          }}
                        >
                          &gt;
                        </Button>
                        <Box
                          sx={{
                            position: 'absolute',
                            bottom: 10,
                            left: '50%',
                            transform: 'translateX(-50%)',
                            display: 'flex',
                            gap: 1,
                          }}
                        >
                          {project.images.map((_, dotIndex) => (
                            <Box
                              key={dotIndex}
                              onClick={(e) => {
                                e.stopPropagation();
                                setActiveImageIndex(prev => ({
                                  ...prev,
                                  [index]: dotIndex
                                }));
                              }}
                              sx={{
                                width: 8,
                                height: 8,
                                borderRadius: '50%',
                                bgcolor: activeImageIndex[index] === dotIndex ? 'primary.main' : 'rgba(255,255,255,0.5)',
                                cursor: 'pointer',
                                transition: 'all 0.3s ease',
                                '&:hover': {
                                  bgcolor: 'primary.main',
                                },
                              }}
                            />
                          ))}
                        </Box>
                      </>
                    )}
                  </Box>
                  
                  <CardContent sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 1 }}>
                      <Typography variant="h5" component="h3" gutterBottom sx={{ mb: 1, fontWeight: 600 }}>
                        {project.title}
                      </Typography>
                      <Typography variant="caption" color="text.secondary">
                        {project.date}
                      </Typography>
                    </Box>
                    
                    <Typography variant="body2" color="text.secondary" paragraph sx={{ flexGrow: 1, mb: 2 }}>
                      {project.description}
                    </Typography>
                    
                    <Box sx={{ mb: 3, display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                      {project.technologies.map((tech) => (
                        <Chip
                          key={tech}
                          label={tech}
                          size="small"
                          sx={{
                            bgcolor: 'action.selected',
                            color: 'text.primary',
                            fontSize: '0.7rem',
                            height: 24,
                          }}
                        />
                      ))}
                    </Box>
                    

                      <Button
                        variant="contained"
                        size="small"
                        color="primary"
                        startIcon={<OpenInNewIcon />}
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        disabled={project.demo === '#'}
                        sx={{
                          textTransform: 'none',
                          borderRadius: '20px',
                          px: 2,
                        }}
                      >
                        Voir le Projet
                      </Button>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>
        {/* Lightbox dialog for zoomed image with navigation */}
        <Dialog
          open={lightboxOpen}
          onClose={() => setLightboxOpen(false)}
          maxWidth="xl"
          PaperProps={{
            sx: {
              backgroundColor: 'rgba(0,0,0,0.9)',
              boxShadow: 'none',
            },
          }}
        >
          <DialogContent sx={{ p: 0, position: 'relative' }}>
            {/* Close button */}
            <IconButton
              aria-label="close"
              onClick={() => setLightboxOpen(false)}
              sx={{ position: 'absolute', top: 8, right: 8, color: 'white', zIndex: 2 }}
            >
              <CloseIcon />
            </IconButton>

            {/* Prev button */}
            <IconButton
              aria-label="previous"
              onClick={() => {
                const imgs = projects[lightboxProjectIdx].images;
                setLightboxImageIdx((prev) => (prev - 1 + imgs.length) % imgs.length);
              }}
              sx={{ position: 'absolute', left: 8, top: '50%', transform: 'translateY(-50%)', color: 'white', zIndex: 2 }}
            >
              <ChevronLeftIcon fontSize="large" />
            </IconButton>

            {/* Next button */}
            <IconButton
              aria-label="next"
              onClick={() => {
                const imgs = projects[lightboxProjectIdx].images;
                setLightboxImageIdx((prev) => (prev + 1) % imgs.length);
              }}
              sx={{ position: 'absolute', right: 8, top: '50%', transform: 'translateY(-50%)', color: 'white', zIndex: 2 }}
            >
              <ChevronRightIcon fontSize="large" />
            </IconButton>

            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                maxWidth: '90vw',
                maxHeight: '90vh',
                m: 'auto',
              }}
            >
              <Box
                component="img"
                src={projects[lightboxProjectIdx].images[lightboxImageIdx]}
                alt="project preview"
                sx={{ maxWidth: '90vw', maxHeight: '90vh', objectFit: 'contain' }}
              />
            </Box>

            {/* Counter overlay */}
            <Box
              sx={{
                position: 'absolute',
                bottom: 12,
                left: '50%',
                transform: 'translateX(-50%)',
                color: 'white',
                bgcolor: 'rgba(0,0,0,0.5)',
                px: 1.5,
                py: 0.5,
                borderRadius: 1,
                fontSize: '0.9rem',
              }}
            >
              {`${lightboxImageIdx + 1} / ${projects[lightboxProjectIdx].images.length}`}
            </Box>
          </DialogContent>
        </Dialog>
      </Container>
    </Box>
  );
};

export default Projects;
