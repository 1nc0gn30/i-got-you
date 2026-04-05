import { Link as RouterLink, useLocation } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button, Container, Box, IconButton, Drawer, List, ListItem, ListItemText, ListItemButton } from '@mui/material';
import { Menu as MenuIcon, X } from 'lucide-react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

const navItems = [
  { name: 'Home', path: '/' },
  { name: 'Services', path: '/services' },
  { name: 'About', path: '/about' },
  { name: 'Resources', path: '/resources' },
  { name: 'Contact', path: '/contact' },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <AppBar position="sticky" color="default" elevation={0} sx={{ borderBottom: '1px solid #eee', bgcolor: 'rgba(255,255,255,0.8)', backdropFilter: 'blur(10px)' }}>
      <Container maxWidth="lg">
        <Toolbar sx={{ justifyContent: 'space-between', px: { xs: 0 } }}>
          <Box sx={{ display: 'flex', alignItems: 'baseline', gap: 1.5 }}>
            <Typography
              variant="h6"
              component={RouterLink}
              to="/"
              sx={{ 
                fontWeight: 900, 
                textDecoration: 'none', 
                color: 'primary.main',
                letterSpacing: '-1px',
                fontSize: '1.5rem'
              }}
            >
              I GOT YOU
            </Typography>
            <Typography 
              variant="caption" 
              sx={{ 
                display: { xs: 'none', sm: 'block' },
                bgcolor: 'primary.main', 
                color: 'white', 
                px: 1, 
                py: 0.2, 
                borderRadius: 1,
                fontWeight: 700,
                fontSize: '0.65rem',
                letterSpacing: 0.5,
                textTransform: 'uppercase'
              }}
            >
              Partnered with Tech Pro
            </Typography>
          </Box>

          <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 1 }}>
            {navItems.map((item) => (
              <Button
                key={item.name}
                component={RouterLink}
                to={item.path}
                sx={{
                  color: location.pathname === item.path ? 'primary.main' : 'text.secondary',
                  fontWeight: location.pathname === item.path ? 700 : 500,
                  '&:hover': { bgcolor: 'transparent', color: 'primary.main' }
                }}
              >
                {item.name}
              </Button>
            ))}
          </Box>

          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ display: { md: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </Container>

      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{ keepMounted: true }}
        sx={{
          display: { xs: 'block', md: 'none' },
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: 240 },
        }}
      >
        <Box sx={{ p: 2, display: 'flex', justifyContent: 'flex-end' }}>
          <IconButton onClick={handleDrawerToggle}>
            <X />
          </IconButton>
        </Box>
        <List>
          {navItems.map((item) => (
            <ListItem key={item.name} disablePadding>
              <ListItemButton 
                component={RouterLink} 
                to={item.path} 
                onClick={handleDrawerToggle}
                selected={location.pathname === item.path}
              >
                <ListItemText primary={item.name} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </AppBar>
  );
}
