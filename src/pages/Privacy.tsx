import { Box, Container, Typography, Divider } from '@mui/material';
import { motion } from 'motion/react';

export default function Privacy() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Box sx={{ py: 10, borderBottom: '1px solid #eee' }}>
        <Container maxWidth="md">
          <Typography variant="h2" component="h1" sx={{ fontWeight: 900, mb: 2 }}>Privacy Policy</Typography>
          <Typography variant="body1" color="text.secondary">Last updated: April 4, 2026</Typography>
        </Container>
      </Box>

      <Container maxWidth="md" sx={{ py: 10 }}>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
          <section>
            <Typography variant="h4" sx={{ fontWeight: 800, mb: 3 }}>1. Introduction</Typography>
            <Typography variant="body1" color="text.secondary" sx={{ lineHeight: 1.8, mb: 2 }}>
              At "I Got You," we take your privacy seriously. This policy explains how we collect, use, and protect your information when you use our services or visit our website.
            </Typography>
          </section>

          <Divider />

          <section>
            <Typography variant="h4" sx={{ fontWeight: 800, mb: 3 }}>2. Information We Collect</Typography>
            <Typography variant="body1" color="text.secondary" sx={{ lineHeight: 1.8, mb: 2 }}>
              We only collect information that is necessary to provide our services to you. This includes:
            </Typography>
            <Box component="ul" sx={{ color: 'text.secondary', lineHeight: 1.8 }}>
              <li>Name and contact details provided via our contact form.</li>
              <li>Details about the services or help you require.</li>
              <li>Technical data like IP addresses and browser types for website analytics.</li>
            </Box>
          </section>

          <Divider />

          <section>
            <Typography variant="h4" sx={{ fontWeight: 800, mb: 3 }}>3. How We Use Your Information</Typography>
            <Typography variant="body1" color="text.secondary" sx={{ lineHeight: 1.8, mb: 2 }}>
              Your information is used solely to:
            </Typography>
            <Box component="ul" sx={{ color: 'text.secondary', lineHeight: 1.8 }}>
              <li>Respond to your inquiries and provide requested services.</li>
              <li>Improve our website and service offerings.</li>
              <li>Communicate important updates regarding your projects.</li>
            </Box>
          </section>

          <Divider />

          <section>
            <Typography variant="h4" sx={{ fontWeight: 800, mb: 3 }}>4. Data Security</Typography>
            <Typography variant="body1" color="text.secondary" sx={{ lineHeight: 1.8, mb: 2 }}>
              We implement industry-standard security measures to protect your data. We do not sell or share your personal information with third parties for marketing purposes.
            </Typography>
          </section>

          <Divider />

          <section>
            <Typography variant="h4" sx={{ fontWeight: 800, mb: 3 }}>5. Contact Us</Typography>
            <Typography variant="body1" color="text.secondary" sx={{ lineHeight: 1.8, mb: 2 }}>
              If you have any questions about this Privacy Policy, please reach out to us via our contact form.
            </Typography>
          </section>
        </Box>
      </Container>
    </motion.div>
  );
}
