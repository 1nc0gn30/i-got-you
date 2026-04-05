import { Box, Container, Typography, Grid, Avatar } from '@mui/material';
import { motion } from 'motion/react';

export default function About() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Header */}
      <Box sx={{ bgcolor: 'primary.main', color: 'white', py: 15 }}>
        <Container maxWidth="lg">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Typography variant="h1" sx={{ mb: 3 }}>Our Story</Typography>
            <Typography variant="h4" sx={{ fontWeight: 300, maxWidth: '800px', opacity: 0.9 }}>
              Born from the need for versatile problem-solvers in an increasingly complex world.
            </Typography>
          </motion.div>
        </Container>
      </Box>

      {/* Content */}
      <Container maxWidth="lg" sx={{ py: 15 }}>
        <Grid container spacing={8} alignItems="center">
          <Grid size={{ xs: 12, md: 6 }}>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Box sx={{ borderRadius: 4, overflow: 'hidden', boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }}>
                <img 
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1000" 
                  alt="Our Team" 
                  style={{ width: '100%', height: 'auto', display: 'block' }}
                  referrerPolicy="no-referrer"
                />
              </Box>
            </motion.div>
          </Grid>
          <Grid size={{ xs: 12, md: 6 }}>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Typography variant="h3" sx={{ mb: 4 }}>Why "I Got You"?</Typography>
              <Typography variant="body1" sx={{ mb: 3, fontSize: '1.2rem', color: 'text.secondary' }}>
                We noticed a gap. People were either hiring expensive specialized agencies or struggling to find reliable help for everyday hurdles.
              </Typography>
              <Typography variant="body1" sx={{ mb: 3, fontSize: '1.2rem', color: 'text.secondary' }}>
                "I Got You" was founded on the principle of radical helpfulness. We don't just provide a service; we provide peace of mind. When you say "I have a problem," we say "I got you."
              </Typography>
              <Typography variant="body1" sx={{ mb: 3, fontSize: '1.2rem', color: 'text.secondary' }}>
                Our mission is further empowered by our <strong>partnership with Tech Pro</strong>, whose technical infrastructure and support allow us to deliver high-end resources at the speed of thought.
              </Typography>
              <Typography variant="body1" sx={{ fontSize: '1.2rem', color: 'text.secondary' }}>
                Our team is composed of generalists who are experts at learning. We bridge the gap between digital complexity and physical reality.
              </Typography>
            </motion.div>
          </Grid>
        </Grid>
      </Container>

      {/* Core Values */}
      <Box sx={{ py: 15, borderTop: '1px solid #eee' }}>
        <Container maxWidth="lg">
          <Box sx={{ textAlign: 'center', mb: 10 }}>
            <Typography variant="overline" color="primary" sx={{ fontWeight: 800, letterSpacing: 3 }}>OUR VALUES</Typography>
            <Typography variant="h2" sx={{ mt: 2, fontWeight: 900 }}>What Drives Us.</Typography>
          </Box>
          <Grid container spacing={6}>
            {[
              { title: 'Radical Helpfulness', desc: 'We don\'t just answer questions; we solve problems. We go the extra mile to ensure you\'re truly taken care of.' },
              { title: 'Versatility First', desc: 'We embrace the "many hats" philosophy. No task is too small or too complex for our team to tackle.' },
              { title: 'Transparent Trust', desc: 'We operate with complete honesty. If we can\'t solve it, we\'ll find someone who can.' },
              { title: 'Speed & Precision', desc: 'In a fast-paced world, we provide quick resources without sacrificing the quality of the solution.' }
            ].map((value, i) => (
              <Grid size={{ xs: 12, sm: 6 }} key={i}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Box sx={{ p: 4, bgcolor: 'background.paper', borderRadius: 4, border: '1px solid #f0f0f0', height: '100%' }}>
                    <Typography variant="h5" sx={{ fontWeight: 800, mb: 2 }}>{value.title}</Typography>
                    <Typography variant="body1" color="text.secondary" sx={{ lineHeight: 1.7 }}>{value.desc}</Typography>
                  </Box>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Team Section */}
      <Box sx={{ bgcolor: 'background.paper', py: 15 }}>
        <Container maxWidth="lg">
          <Typography variant="h3" align="center" sx={{ mb: 10 }}>The Minds Behind the Hats</Typography>
          <Grid container spacing={4}>
            {[
              { name: 'Alex Rivera', role: 'Founder & Digital Lead', img: 'https://i.pravatar.cc/300?u=alex' },
              { name: 'Sarah Chen', role: 'Operations & Logistics', img: 'https://i.pravatar.cc/300?u=sarah' },
              { name: 'Marcus Thorne', role: 'Technical Resource Curation', img: 'https://i.pravatar.cc/300?u=marcus' },
              { name: 'Elena Vance', role: 'Client Relations', img: 'https://i.pravatar.cc/300?u=elena' }
            ].map((member, index) => (
              <Grid size={{ xs: 12, sm: 6, md: 3 }} key={index}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Box sx={{ textAlign: 'center' }}>
                    <Avatar 
                      src={member.img} 
                      sx={{ width: 150, height: 150, mx: 'auto', mb: 3, border: '4px solid white', boxShadow: '0 10px 20px rgba(0,0,0,0.1)' }} 
                    />
                    <Typography variant="h6" sx={{ fontWeight: 700 }}>{member.name}</Typography>
                    <Typography variant="body2" color="text.secondary">{member.role}</Typography>
                  </Box>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
    </motion.div>
  );
}
