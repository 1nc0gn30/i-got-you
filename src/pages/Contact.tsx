import { Box, Container, Typography, Grid, TextField, Button, Card, CardContent } from '@mui/material';
import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

export default function Contact() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Box sx={{ py: 10 }}>
      <Container maxWidth="lg">
        <Box sx={{ mb: 10, textAlign: 'center' }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Typography variant="h2" component="h1" sx={{ mb: 3 }}>Get Help Now</Typography>
            <Typography variant="h6" color="text.secondary" sx={{ maxWidth: '700px', mx: 'auto', fontWeight: 300 }}>
              Need a quick fix or a long-term partner? Reach out and we'll get back to you faster than you can say "I got you."
            </Typography>
          </motion.div>
        </Box>

        <Box sx={{ maxWidth: '800px', mx: 'auto' }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Card sx={{ p: 6, borderRadius: 8, boxShadow: '0 40px 80px rgba(0,0,0,0.08)', border: '1px solid #f0f0f0' }}>
              <CardContent>
                <Typography variant="h4" sx={{ mb: 4, fontWeight: 800, textAlign: 'center' }}>Send us a message</Typography>
                
                {/* Netlify Form Integration */}
                <form name="contact" method="POST" data-netlify="true">
                  <input type="hidden" name="form-name" value="contact" />
                  
                  <Grid container spacing={4}>
                    <Grid size={{ xs: 12, sm: 6 }}>
                      <TextField fullWidth label="First Name" name="firstName" variant="outlined" required />
                    </Grid>
                    <Grid size={{ xs: 12, sm: 6 }}>
                      <TextField fullWidth label="Last Name" name="lastName" variant="outlined" required />
                    </Grid>
                    <Grid size={{ xs: 12 }}>
                      <TextField fullWidth label="Email Address" name="email" variant="outlined" type="email" required />
                    </Grid>
                    <Grid size={{ xs: 12 }}>
                      <TextField fullWidth label="Subject" name="subject" variant="outlined" />
                    </Grid>
                    <Grid size={{ xs: 12 }}>
                      <TextField fullWidth label="How can we help?" name="message" variant="outlined" multiline rows={5} required />
                    </Grid>
                    <Grid size={{ xs: 12 }}>
                      <Button 
                        type="submit"
                        variant="contained" 
                        size="large" 
                        fullWidth 
                        endIcon={<Send size={20} />}
                        sx={{ py: 2.5, borderRadius: 3, fontSize: '1.1rem', fontWeight: 700 }}
                      >
                        Send Message
                      </Button>
                    </Grid>
                  </Grid>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </Box>
      </Container>
    </Box>
    </motion.div>
  );
}
