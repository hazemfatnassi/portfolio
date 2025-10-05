import React, { useState, useEffect } from 'react';
import { AppBar, Toolbar, Typography, Button, Container, Box, IconButton, Drawer, List, ListItem, ListItemText, ListItemButton, useMediaQuery, useTheme } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrolled]);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const navItems = [
    { name: 'Accueil', to: '/' },
    { name: 'À Propos', to: '/about' },
    { name: 'Compétences', to: '/skills' },
    { name: 'Projets', to: '/projects' },
    { name: 'Contact', to: '/contact' },
  ];

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center', width: 250 }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        Hazem Fatnassi
      </Typography>
      <List>
        {navItems.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            style={{ textDecoration: 'none', color: 'inherit' }}
            onClick={() => setMobileOpen(false)}
          >
            {({ isActive }) => (
              <ListItem disablePadding>
                <ListItemButton selected={isActive} sx={{ justifyContent: 'center' }}>
                  <ListItemText primary={item.name} sx={{ textAlign: 'center' }} />
                </ListItemButton>
              </ListItem>
            )}
          </NavLink>
        ))}
      </List>
    </Box>
  );

  return (
    <AppBar 
      position="fixed" 
      sx={{
        backgroundColor: scrolled ? 'rgba(30, 136, 229, 0.95)' : 'transparent',
        boxShadow: scrolled ? 3 : 'none',
        transition: 'all 0.3s ease-in-out',
        backdropFilter: scrolled ? 'blur(10px)' : 'none',
      }}
    >
      <Container maxWidth="lg">
        <Toolbar disableGutters>
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Typography
              variant="h6"
              component="div"
              sx={{
                flexGrow: 1,
                fontWeight: 700,
                letterSpacing: '.1rem',
                color: 'white',
                textDecoration: 'none',
              }}
            >
              Hazem Fatnassi
            </Typography>
          </motion.div>

          {isMobile ? (
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ ml: 'auto' }}
            >
              <MenuIcon />
            </IconButton>
          ) : (
            <Box sx={{ display: 'flex', ml: 'auto' }}>
              {navItems.map((item, index) => (
                <motion.div
                  key={item.to}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <NavLink
                    to={item.to}
                    style={({ isActive }) => ({ textDecoration: 'none' })}
                  >
                    {({ isActive }) => (
                      <Button
                        sx={{
                          color: 'white',
                          mx: 1,
                          borderBottom: isActive ? '2px solid white' : '2px solid transparent',
                          borderRadius: 0,
                          '&:hover': {
                            backgroundColor: 'rgba(255, 255, 255, 0.1)',
                          },
                        }}
                      >
                        {item.name}
                      </Button>
                    )}
                  </NavLink>
                </motion.div>
              ))}
            </Box>
          )}
        </Toolbar>
      </Container>

      <Drawer
        variant="temporary"
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
        sx={{
          display: { xs: 'block', md: 'none' },
          '& .MuiDrawer-paper': {
            boxSizing: 'border-box',
            width: 250,
            backgroundColor: theme.palette.primary.main,
            color: 'white',
          },
        }}
      >
        {drawer}
      </Drawer>
    </AppBar>
  );
};

export default Navbar;
