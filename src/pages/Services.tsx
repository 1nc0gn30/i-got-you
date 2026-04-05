import { Box, Container, Typography, Grid, Card, CardContent, CardMedia, Button, Chip } from '@mui/material';
import { motion } from 'motion/react';
import { Laptop, HardHat, BookOpen, PhoneCall, Settings, Search, Sparkles, Layers } from 'lucide-react';

const FloatingIcon = ({ icon: Icon, top, left, delay = 0 }: { icon: any, top: string, left: string, delay?: number }) => (
  <motion.div
    animate={{ 
      y: [0, -10, 0],
    }}
    transition={{ 
      duration: 4, 
      repeat: Infinity, 
      ease: "easeInOut",
      delay 
    }}
    style={{ 
      position: 'absolute', 
      top, 
      left, 
      opacity: 0.05, 
      zIndex: 0,
      color: 'black'
    }}
  >
    <Icon size={100} strokeWidth={1} />
  </motion.div>
);

const services = [
  {
    title: 'Digital Support',
    icon: <Laptop size={40} />,
    desc: 'Remote troubleshooting, software setup, and digital workflow optimization.',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=800'
  },
  {
    title: 'In-Person Assistance',
    icon: <HardHat size={40} />,
    desc: 'On-site technical help, physical organization, and logistical support.',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800'
  },
  {
    title: 'Resource Curation',
    icon: <BookOpen size={40} />,
    desc: 'Quick references, toolkits, and knowledge bases tailored to your industry.',
    image: 'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?auto=format&fit=crop&q=80&w=800'
  },
  {
    title: 'Crisis Management',
    icon: <PhoneCall size={40} />,
    desc: 'Emergency response for when things go wrong and you need an immediate fix.',
    image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&q=80&w=800'
  },
  {
    title: 'System Integration',
    icon: <Settings size={40} />,
    desc: 'Connecting your physical and digital worlds for seamless operation.',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=800'
  },
  {
    title: 'Research & Discovery',
    icon: <Search size={40} />,
    desc: 'Finding the hard-to-find answers and resources for complex projects.',
    image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&q=80&w=800'
  }
];

export default function Services() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Box sx={{ py: 15, position: 'relative', overflow: 'hidden' }}>
        <FloatingIcon icon={Sparkles} top="5%" left="5%" delay={0} />
        <FloatingIcon icon={Layers} top="80%" left="90%" delay={2} />
        
        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
          <Box sx={{ mb: 12, textAlign: 'center' }}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Typography variant="overline" color="primary" sx={{ fontWeight: 800, letterSpacing: 3 }}>OUR EXPERTISE</Typography>
              <Typography variant="h2" component="h1" sx={{ mb: 4, fontWeight: 900 }}>The Many Hats We Wear</Typography>
              <Typography variant="h6" color="text.secondary" sx={{ maxWidth: '800px', mx: 'auto', fontWeight: 300, lineHeight: 1.6 }}>
                We provide a comprehensive suite of services designed to resolve any issue, whether it's on your screen or in your office.
              </Typography>
            </motion.div>
          </Box>

          <Grid container spacing={4}>
            {services.map((service, index) => (
              <Grid size={{ xs: 12, md: 4 }} key={index}>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card sx={{ 
                    height: '100%', 
                    display: 'flex', 
                    flexDirection: 'column',
                    borderRadius: 4,
                    border: '1px solid #f0f0f0',
                    boxShadow: 'none',
                    transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                    '&:hover': {
                      transform: 'translateY(-12px)',
                      boxShadow: '0 30px 60px rgba(0,0,0,0.08)',
                      borderColor: 'primary.main'
                    }
                  }}>
                    <CardMedia
                      component="img"
                      height="260"
                      image={service.image}
                      alt={service.title}
                      referrerPolicy="no-referrer"
                    />
                    <CardContent sx={{ flexGrow: 1, p: 4 }}>
                      <Box sx={{ color: 'primary.main', mb: 3, display: 'flex' }}>{service.icon}</Box>
                      <Typography gutterBottom variant="h5" component="h2" sx={{ fontWeight: 800, mb: 2 }}>
                        {service.title}
                      </Typography>
                      <Typography variant="body2" color="text.secondary" sx={{ mb: 4, fontSize: '1.05rem', lineHeight: 1.6 }}>
                        {service.desc}
                      </Typography>
                      <Button variant="text" color="primary" sx={{ p: 0, fontWeight: 800, letterSpacing: 1 }}>
                        EXPLORE DETAILS
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Pricing/Packages */}
      <Box sx={{ py: 15, bgcolor: '#fafafa' }}>
        <Container maxWidth="lg">
          <Box sx={{ textAlign: 'center', mb: 10 }}>
            <Typography variant="overline" color="primary" sx={{ fontWeight: 800, letterSpacing: 3 }}>PACKAGES</Typography>
            <Typography variant="h2" sx={{ mt: 2, fontWeight: 900 }}>Simple, Transparent Pricing.</Typography>
          </Box>
          <Grid container spacing={4}>
            {[
              { 
                name: 'Quick Fix', 
                price: '$49', 
                features: ['One-time digital support', 'Instant resource kit', '2-hour response time', 'Email support'],
                popular: false
              },
              { 
                name: 'Versatility Partner', 
                price: '$199', 
                features: ['Ongoing monthly support', 'Digital & Physical assistance', 'Priority response', 'Dedicated resource curation', 'Monthly strategy call'],
                popular: true
              },
              { 
                name: 'Crisis Mode', 
                price: 'Custom', 
                features: ['Immediate emergency response', 'All-hands-on-deck support', '24/7 availability', 'Full resolution guarantee'],
                popular: false
              }
            ].map((pkg, i) => (
              <Grid size={{ xs: 12, md: 4 }} key={i}>
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card sx={{ 
                    p: 5, 
                    borderRadius: 6, 
                    height: '100%', 
                    display: 'flex', 
                    flexDirection: 'column',
                    border: pkg.popular ? '2px solid' : '1px solid #eee',
                    borderColor: pkg.popular ? 'primary.main' : '#eee',
                    position: 'relative',
                    boxShadow: pkg.popular ? '0 30px 60px rgba(0,0,0,0.1)' : 'none'
                  }}>
                    {pkg.popular && (
                      <Chip 
                        label="MOST POPULAR" 
                        color="primary" 
                        sx={{ position: 'absolute', top: 20, right: 20, fontWeight: 800, fontSize: '0.7rem' }} 
                      />
                    )}
                    <Typography variant="h5" sx={{ fontWeight: 900, mb: 1 }}>{pkg.name}</Typography>
                    <Typography variant="h3" sx={{ fontWeight: 900, mb: 4 }}>{pkg.price}</Typography>
                    <Box sx={{ mb: 5, flexGrow: 1 }}>
                      {pkg.features.map((feat, j) => (
                        <Box key={j} sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 1.5 }}>
                          <Box sx={{ width: 6, height: 6, borderRadius: '50%', bgcolor: 'primary.main' }} />
                          <Typography variant="body2" color="text.secondary" sx={{ fontWeight: 500 }}>{feat}</Typography>
                        </Box>
                      ))}
                    </Box>
                    <Button 
                      variant={pkg.popular ? "contained" : "outlined"} 
                      fullWidth 
                      size="large" 
                      sx={{ borderRadius: '50px', py: 1.5, fontWeight: 800 }}
                    >
                      Get Started
                    </Button>
                  </Card>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
    </motion.div>
  );
}
