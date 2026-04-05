import { Box, Container, Typography, Grid, Link, Divider } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

export default function Footer() {
  return (
    <Box component="footer" sx={{ bgcolor: 'background.paper', py: 8, mt: 'auto', borderTop: '1px solid #eee' }}>
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid size={{ xs: 12, md: 6 }}>
            <Typography variant="h6" sx={{ fontWeight: 900, mb: 2 }}>I GOT YOU</Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
              A premium service platform proudly <strong>sponsored by Tech Pro</strong>.
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Empowering your digital and physical life with versatile solutions and instant resources.
            </Typography>
          </Grid>
          <Grid size={{ xs: 6, md: 3 }}>
            <Typography variant="subtitle2" sx={{ fontWeight: 700, mb: 2 }}>Company</Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
              <Link component={RouterLink} to="/about" color="inherit" variant="body2" sx={{ textDecoration: 'none' }}>About Us</Link>
              <Link component={RouterLink} to="/services" color="inherit" variant="body2" sx={{ textDecoration: 'none' }}>Services</Link>
              <Link component={RouterLink} to="/contact" color="inherit" variant="body2" sx={{ textDecoration: 'none' }}>Contact</Link>
            </Box>
          </Grid>
          <Grid size={{ xs: 6, md: 3 }}>
            <Typography variant="subtitle2" sx={{ fontWeight: 700, mb: 2 }}>Resources</Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
              <Link component={RouterLink} to="/resources" color="inherit" variant="body2" sx={{ textDecoration: 'none' }}>Knowledge Base</Link>
              <Link component={RouterLink} to="/faq" color="inherit" variant="body2" sx={{ textDecoration: 'none' }}>FAQ</Link>
              <Link component={RouterLink} to="/privacy" color="inherit" variant="body2" sx={{ textDecoration: 'none' }}>Privacy Policy</Link>
            </Box>
          </Grid>
        </Grid>
        <Divider sx={{ my: 4 }} />
        <Typography variant="body2" color="text.secondary" align="center">
          © {new Date().getFullYear()} I GOT YOU. All rights reserved.
        </Typography>
      </Container>
    </Box>
  );
}
