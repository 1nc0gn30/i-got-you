import { FormEvent, useState } from 'react';
import { Alert, Box, Container, Typography, Grid, TextField, Button, Card, CardContent } from '@mui/material';
import { motion } from 'motion/react';
import { Send } from 'lucide-react';

export default function Contact() {
  const [submitState, setSubmitState] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const encodeFormData = (data: FormData) => {
    const params = new URLSearchParams();
    data.forEach((value, key) => {
      params.append(key, String(value));
    });
    return params.toString();
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);

    setSubmitState('submitting');

    try {
      const response = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: encodeFormData(formData),
      });

      if (!response.ok) {
        throw new Error('Form submission failed');
      }

      form.reset();
      setSubmitState('success');
    } catch {
      setSubmitState('error');
    }
  };

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
                <form
                  name="contact"
                  method="POST"
                  data-netlify="true"
                  data-netlify-honeypot="bot-field"
                  onSubmit={handleSubmit}
                >
                  <input type="hidden" name="form-name" value="contact" />
                  <input type="hidden" name="bot-field" />
                  
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
                        disabled={submitState === 'submitting'}
                        endIcon={<Send size={20} />}
                        sx={{ py: 2.5, borderRadius: 3, fontSize: '1.1rem', fontWeight: 700 }}
                      >
                        {submitState === 'submitting' ? 'Sending...' : 'Send Message'}
                      </Button>
                    </Grid>
                    {submitState === 'success' && (
                      <Grid size={{ xs: 12 }}>
                        <Alert severity="success">
                          Message sent successfully. We&apos;ll reach out shortly.
                        </Alert>
                      </Grid>
                    )}
                    {submitState === 'error' && (
                      <Grid size={{ xs: 12 }}>
                        <Alert severity="error">
                          We couldn&apos;t send your message. Please try again.
                        </Alert>
                      </Grid>
                    )}
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
