import { Box, Container, Typography, Button, Grid, Card, CardContent, CardMedia, useTheme } from '@mui/material';
import { motion } from 'motion/react';
import { ArrowRight, Zap, Shield, Globe, Users, CheckCircle2, Sparkles, Layers, MousePointer2 } from 'lucide-react';
import { Link as RouterLink } from 'react-router-dom';

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

const FloatingIcon = ({ icon: Icon, top, left, delay = 0 }: { icon: any, top: string, left: string, delay?: number }) => (
  <motion.div
    animate={{ 
      y: [0, -15, 0],
      rotate: [0, 5, 0]
    }}
    transition={{ 
      duration: 5, 
      repeat: Infinity, 
      ease: "easeInOut",
      delay 
    }}
    style={{ 
      position: 'absolute', 
      top, 
      left, 
      opacity: 0.1, 
      zIndex: 0,
      color: 'white'
    }}
  >
    <Icon size={120} strokeWidth={1} />
  </motion.div>
);

export default function Home() {
  const theme = useTheme();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Hero Section */}
      <Box sx={{ 
        height: '95vh', 
        display: 'flex', 
        alignItems: 'center', 
        position: 'relative',
        overflow: 'hidden',
        bgcolor: 'primary.main',
        color: 'white'
      }}>
        <Box sx={{ 
          position: 'absolute', 
          top: 0, 
          left: 0, 
          right: 0, 
          bottom: 0, 
          opacity: 0.3,
          zIndex: 0
        }}>
          <img 
            src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&q=80&w=1920" 
            alt="Hero Background" 
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            referrerPolicy="no-referrer"
          />
        </Box>

        {/* Minimalist Accents */}
        <FloatingIcon icon={Layers} top="15%" left="10%" delay={0} />
        <FloatingIcon icon={Sparkles} top="60%" left="85%" delay={1} />
        <FloatingIcon icon={MousePointer2} top="20%" left="75%" delay={2} />
        
        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <Typography variant="overline" sx={{ letterSpacing: 4, opacity: 0.7, fontWeight: 700, mb: 2, display: 'block' }}>
              PREMIUM SERVICE PROVIDER • SPONSORED BY TECH PRO
            </Typography>
            <Typography variant="h1" sx={{ fontSize: { xs: '3.5rem', md: '6rem' }, mb: 2, lineHeight: 1 }}>
              I Got You.
            </Typography>
            <Typography variant="h4" sx={{ mb: 5, fontWeight: 300, maxWidth: '650px', opacity: 0.9, lineHeight: 1.4 }}>
              We bridge the gap between digital complexity and physical reality. One partner, endless solutions.
            </Typography>
            <Box sx={{ display: 'flex', gap: 3, flexWrap: 'wrap' }}>
              <Button 
                variant="contained" 
                color="secondary" 
                size="large" 
                component={RouterLink}
                to="/services"
                endIcon={<ArrowRight />}
                sx={{ px: 5, py: 2.5, fontSize: '1.1rem', borderRadius: '50px', fontWeight: 800 }}
              >
                Explore Services
              </Button>
              <Button 
                variant="outlined" 
                color="inherit" 
                size="large" 
                component={RouterLink}
                to="/contact"
                sx={{ px: 5, py: 2.5, fontSize: '1.1rem', borderRadius: '50px', border: '2px solid', fontWeight: 700 }}
              >
                Get Help Now
              </Button>
            </Box>
          </motion.div>
        </Container>
      </Box>

      {/* Stats Section */}
      <Box sx={{ py: 10, borderBottom: '1px solid #eee' }}>
        <Container maxWidth="lg">
          <Grid container spacing={4} justifyContent="center">
            {/* ... stats section ... */}
            {[
              { label: 'Success Rate', value: '99%' },
              { label: 'Response Time', value: '< 2h' },
              { label: 'Services Offered', value: '50+' },
              { label: 'Happy Clients', value: '2k+' }
            ].map((stat, i) => (
              <Grid size={{ xs: 6, md: 3 }} key={i}>
                <Box sx={{ textAlign: 'center' }}>
                  <Typography variant="h3" sx={{ fontWeight: 900, mb: 0.5 }}>{stat.value}</Typography>
                  <Typography variant="overline" color="text.secondary" sx={{ fontWeight: 700 }}>{stat.label}</Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Features Section */}
      <Container maxWidth="lg" sx={{ py: 20 }}>
        <Box sx={{ textAlign: 'center', mb: 12 }}>
          <Typography variant="overline" color="primary" sx={{ fontWeight: 800, letterSpacing: 3 }}>WHY CHOOSE US</Typography>
          <Typography variant="h2" sx={{ mt: 2, fontWeight: 900 }}>Unmatched Versatility.</Typography>
        </Box>
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          <Grid container spacing={6}>
            {[
              { icon: <Zap size={48} />, title: 'Quick Resources', desc: 'Instant access to curated references and tools to solve your problems fast.' },
              { icon: <Globe size={48} />, title: 'Digital & In-Person', desc: 'Whether you need remote tech support or on-site assistance, we are there.' },
              { icon: <Shield size={48} />, title: 'Reliable Solutions', desc: 'Expertise across multiple domains ensures you get the right answer every time.' },
              { icon: <Users size={48} />, title: 'Personalized Care', desc: 'We adapt to your specific needs, wearing whatever hat the situation demands.' }
            ].map((feature, index) => (
              <Grid size={{ xs: 12, sm: 6, md: 3 }} key={index}>
                <motion.div variants={fadeInUp}>
                  <Box sx={{ 
                    p: 4, 
                    textAlign: 'center', 
                    borderRadius: 4, 
                    transition: 'all 0.3s ease',
                    '&:hover': { bgcolor: 'background.paper', transform: 'translateY(-5px)' }
                  }}>
                    <Box sx={{ color: 'primary.main', mb: 3, display: 'flex', justifyContent: 'center' }}>
                      {feature.icon}
                    </Box>
                    <Typography variant="h6" sx={{ mb: 2, fontWeight: 800 }}>{feature.title}</Typography>
                    <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.6 }}>{feature.desc}</Typography>
                  </Box>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </motion.div>
      </Container>

      {/* Split Section 1 */}
      <Box sx={{ bgcolor: '#fafafa', py: 20 }}>
        <Container maxWidth="lg">
          <Grid container spacing={10} alignItems="center">
            <Grid size={{ xs: 12, md: 6 }}>
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <Box sx={{ position: 'relative' }}>
                  <Box sx={{ 
                    position: 'absolute', 
                    top: -20, 
                    left: -20, 
                    width: '100%', 
                    height: '100%', 
                    border: '2px solid',
                    borderColor: 'primary.main',
                    borderRadius: 4,
                    zIndex: 0
                  }} />
                  <Box sx={{ height: '500px', borderRadius: 4, overflow: 'hidden', position: 'relative', zIndex: 1 }}>
                    <img 
                      src="https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&q=80&w=1000" 
                      alt="Modern Workspace" 
                      style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                      referrerPolicy="no-referrer"
                    />
                  </Box>
                </Box>
              </motion.div>
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <Typography variant="overline" color="primary" sx={{ fontWeight: 800, letterSpacing: 2 }}>OUR PHILOSOPHY</Typography>
                <Typography variant="h2" sx={{ mb: 4, mt: 1, fontWeight: 900 }}>We wear many hats, so you don't have to.</Typography>
                <Typography variant="body1" color="text.secondary" sx={{ mb: 5, fontSize: '1.2rem', lineHeight: 1.7 }}>
                  In a world of hyper-specialization, we specialize in being versatile. From digital transformation to physical logistics, "I Got You" is the partner that fills the gaps in your workflow.
                </Typography>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, mb: 5 }}>
                  {[
                    'Instant digital troubleshooting',
                    'On-site logistical support',
                    'Curated resource toolkits',
                    'Crisis management & resolution'
                  ].map((item, i) => (
                    <Box key={i} sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                      <CheckCircle2 color={theme.palette.primary.main} size={20} />
                      <Typography variant="body1" sx={{ fontWeight: 600 }}>{item}</Typography>
                    </Box>
                  ))}
                </Box>
                <Button variant="contained" size="large" component={RouterLink} to="/about" sx={{ px: 5, py: 2, borderRadius: '50px' }}>
                  Learn Our Story
                </Button>
              </motion.div>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Split Section 2 */}
      <Box sx={{ py: 20 }}>
        <Container maxWidth="lg">
          <Grid container spacing={10} alignItems="center" direction={{ xs: 'column-reverse', md: 'row' }}>
            <Grid size={{ xs: 12, md: 6 }}>
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <Typography variant="overline" color="primary" sx={{ fontWeight: 800, letterSpacing: 2 }}>DIGITAL & PHYSICAL</Typography>
                <Typography variant="h2" sx={{ mb: 4, mt: 1, fontWeight: 900 }}>Seamless Integration.</Typography>
                <Typography variant="body1" color="text.secondary" sx={{ mb: 5, fontSize: '1.2rem', lineHeight: 1.7 }}>
                  We don't just fix things; we optimize them. Our approach combines technical expertise with practical, real-world solutions that actually work for you.
                </Typography>
                <Grid container spacing={3}>
                  <Grid size={{ xs: 6 }}>
                    <Box sx={{ p: 3, bgcolor: 'background.paper', borderRadius: 3 }}>
                      <Typography variant="h5" sx={{ fontWeight: 800, mb: 1 }}>Digital</Typography>
                      <Typography variant="body2" color="text.secondary">Cloud, Software, Security, Workflow.</Typography>
                    </Box>
                  </Grid>
                  <Grid size={{ xs: 6 }}>
                    <Box sx={{ p: 3, bgcolor: 'background.paper', borderRadius: 3 }}>
                      <Typography variant="h5" sx={{ fontWeight: 800, mb: 1 }}>Physical</Typography>
                      <Typography variant="body2" color="text.secondary">Hardware, Logistics, On-site help.</Typography>
                    </Box>
                  </Grid>
                </Grid>
              </motion.div>
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <Box sx={{ height: '500px', borderRadius: 4, overflow: 'hidden', boxShadow: '0 30px 60px rgba(0,0,0,0.1)' }}>
                  <img 
                    src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=1000" 
                    alt="Technology Integration" 
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    referrerPolicy="no-referrer"
                  />
                </Box>
              </motion.div>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Process Section */}
      <Box sx={{ py: 20, bgcolor: 'background.paper' }}>
        <Container maxWidth="lg">
          <Box sx={{ textAlign: 'center', mb: 15 }}>
            <Typography variant="overline" color="primary" sx={{ fontWeight: 800, letterSpacing: 3 }}>HOW IT WORKS</Typography>
            <Typography variant="h2" sx={{ mt: 2, fontWeight: 900 }}>Simple. Fast. Effective.</Typography>
          </Box>
          <Grid container spacing={4}>
            {[
              { step: '01', title: 'Reach Out', desc: 'Tell us what you need help with. Digital, physical, or just a resource gap.' },
              { step: '02', title: 'We Strategize', desc: 'Our team of generalists finds the fastest, most reliable way to resolve it.' },
              { step: '03', title: 'Problem Solved', desc: 'We execute the solution or provide the resources. You get back to your life.' }
            ].map((item, i) => (
              <Grid size={{ xs: 12, md: 4 }} key={i}>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: i * 0.2 }}
                  viewport={{ once: true }}
                >
                  <Box sx={{ position: 'relative', p: 4, textAlign: 'center' }}>
                    <Typography variant="h1" component="span" sx={{ 
                      position: 'absolute', 
                      top: -40, 
                      left: '50%', 
                      transform: 'translateX(-50%)', 
                      opacity: 0.05, 
                      fontWeight: 900,
                      fontSize: '8rem'
                    }}>
                      {item.step}
                    </Typography>
                    <Typography variant="h4" sx={{ fontWeight: 900, mb: 2, position: 'relative' }}>{item.title}</Typography>
                    <Typography variant="body1" color="text.secondary" sx={{ lineHeight: 1.7 }}>{item.desc}</Typography>
                  </Box>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Testimonials Section */}
      <Box sx={{ py: 20, bgcolor: '#fafafa' }}>
        <Container maxWidth="lg">
          <Box sx={{ textAlign: 'center', mb: 12 }}>
            <Typography variant="overline" color="primary" sx={{ fontWeight: 800, letterSpacing: 3 }}>TESTIMONIALS</Typography>
            <Typography variant="h2" sx={{ mt: 2, fontWeight: 900 }}>What Clients Say.</Typography>
          </Box>
          <Grid container spacing={4}>
            {[
              { quote: "I was stuck on a technical integration for days. 'I Got You' solved it in two hours and gave me a guide for next time.", author: "James Wilson", role: "Startup Founder" },
              { quote: "Needed help organizing a physical event while managing a digital launch. They literally wore every hat I needed.", author: "Sarah Jenkins", role: "Event Director" },
              { quote: "The Knowledge Base alone is worth it. But the personalized support is where they truly shine.", author: "Michael Chen", role: "Creative Lead" }
            ].map((t, i) => (
              <Grid size={{ xs: 12, md: 4 }} key={i}>
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card sx={{ p: 5, borderRadius: 4, height: '100%', border: '1px solid #eee', boxShadow: 'none' }}>
                    <Typography variant="body1" sx={{ fontStyle: 'italic', mb: 4, fontSize: '1.1rem', lineHeight: 1.7 }}>
                      "{t.quote}"
                    </Typography>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                      <Box sx={{ width: 40, height: 40, borderRadius: '50%', bgcolor: 'primary.main' }} />
                      <Box>
                        <Typography variant="subtitle1" sx={{ fontWeight: 800 }}>{t.author}</Typography>
                        <Typography variant="caption" color="text.secondary">{t.role}</Typography>
                      </Box>
                    </Box>
                  </Card>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* CTA Section */}
      <Box sx={{ py: 20, textAlign: 'center', bgcolor: 'primary.main', color: 'white', position: 'relative', overflow: 'hidden' }}>
        <FloatingIcon icon={Sparkles} top="10%" left="5%" delay={0} />
        <FloatingIcon icon={Layers} top="70%" left="90%" delay={2} />
        
        <Container maxWidth="md" sx={{ position: 'relative', zIndex: 1 }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Typography variant="h2" sx={{ mb: 4, fontWeight: 900 }}>Ready to resolve your issues?</Typography>
            <Typography variant="h6" sx={{ mb: 6, opacity: 0.8, fontWeight: 300, lineHeight: 1.6 }}>
              Join thousands of clients who rely on us for quick, effective solutions. We're here to help you navigate the complex.
            </Typography>
            <Button 
              variant="contained" 
              color="secondary" 
              size="large" 
              component={RouterLink}
              to="/contact"
              sx={{ px: 8, py: 2.5, borderRadius: '50px', fontSize: '1.2rem', fontWeight: 800 }}
            >
              Get Started Now
            </Button>
          </motion.div>
        </Container>
      </Box>
    </motion.div>
  );
}
