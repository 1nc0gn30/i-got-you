import { Box, Container, Typography, Grid, TextField, InputAdornment, Card, CardContent, Chip } from '@mui/material';
import { motion } from 'motion/react';
import { Search, FileText, Video, Link as LinkIcon, Download } from 'lucide-react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const resources = [
  { id: 'digital-security-checklist', title: 'Digital Security Checklist', type: 'Guide', category: 'Security', icon: <FileText /> },
  { id: 'remote-work-optimization', title: 'Remote Work Optimization', type: 'Video', category: 'Productivity', icon: <Video /> },
  { id: 'home-office-setup-guide', title: 'Home Office Setup Guide', type: 'PDF', category: 'Logistics', icon: <Download /> },
  { id: 'troubleshooting-common-pc-issues', title: 'Troubleshooting Common PC Issues', type: 'Article', category: 'Technical', icon: <FileText /> },
  { id: 'essential-software-toolkit', title: 'Essential Software Toolkit', type: 'Link', category: 'Tools', icon: <LinkIcon /> },
  { id: 'emergency-contact-templates', title: 'Emergency Contact Templates', type: 'Document', category: 'Safety', icon: <FileText /> },
  { id: 'cloud-storage-comparison', title: 'Cloud Storage Comparison', type: 'Article', category: 'Digital', icon: <FileText /> },
  { id: 'physical-file-organization', title: 'Physical File Organization', type: 'Guide', category: 'Logistics', icon: <FileText /> },
];

const categories = ['All', 'Security', 'Productivity', 'Logistics', 'Technical', 'Tools', 'Safety', 'Digital'];

export default function Resources() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const navigate = useNavigate();

  const filteredResources = resources.filter(r => {
    const matchesSearch = r.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         r.category.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || r.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Box sx={{ py: 10 }}>
      <Container maxWidth="lg">
        <Box sx={{ mb: 8, textAlign: 'center' }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Typography variant="h2" component="h1" sx={{ mb: 3, fontWeight: 900 }}>Knowledge Base</Typography>
            <Typography variant="h6" color="text.secondary" sx={{ mb: 6, fontWeight: 300 }}>
              Quick references and resources to help you solve problems on your own.
            </Typography>
            
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4 }}>
              <TextField
                fullWidth
                variant="outlined"
                placeholder="Search resources, guides, tools..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                sx={{ 
                  maxWidth: '600px', 
                  bgcolor: 'white',
                  '& .MuiOutlinedInput-root': {
                    borderRadius: '50px',
                    px: 3,
                    boxShadow: '0 4px 20px rgba(0,0,0,0.05)'
                  }
                }}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <Search size={20} />
                    </InputAdornment>
                  ),
                }}
              />

              <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap', justifyContent: 'center' }}>
                {categories.map((cat) => (
                  <Chip
                    key={cat}
                    label={cat}
                    onClick={() => setSelectedCategory(cat)}
                    color={selectedCategory === cat ? "primary" : "default"}
                    variant={selectedCategory === cat ? "filled" : "outlined"}
                    sx={{ 
                      px: 2, 
                      py: 2.5, 
                      borderRadius: '50px', 
                      fontWeight: 700,
                      cursor: 'pointer',
                      transition: 'all 0.2s',
                      '&:hover': { transform: 'scale(1.05)' }
                    }}
                  />
                ))}
              </Box>
            </Box>
          </motion.div>
        </Box>

        <Grid container spacing={3}>
          {filteredResources.map((resource, index) => (
            <Grid size={{ xs: 12, sm: 6, md: 4, lg: 3 }} key={index}>
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
              >
                <Card 
                  onClick={() => navigate(`/resources/${resource.id}`)}
                  sx={{ 
                    height: '100%', 
                    cursor: 'pointer',
                    transition: 'all 0.3s',
                    '&:hover': { 
                      bgcolor: 'background.paper', 
                      borderColor: 'primary.main',
                      transform: 'translateY(-5px)',
                      boxShadow: '0 10px 30px rgba(0,0,0,0.05)'
                    },
                    border: '1px solid #eee',
                    boxShadow: 'none',
                    borderRadius: 4
                  }}
                >
                  <CardContent sx={{ p: 4 }}>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 3 }}>
                      <Box sx={{ color: 'primary.main', p: 1, bgcolor: '#f0f0f0', borderRadius: 2 }}>{resource.icon}</Box>
                      <Chip label={resource.type} size="small" variant="outlined" sx={{ fontWeight: 700, fontSize: '0.6rem' }} />
                    </Box>
                    <Typography variant="h6" sx={{ mb: 1, fontWeight: 800, fontSize: '1.1rem', lineHeight: 1.3 }}>
                      {resource.title}
                    </Typography>
                    <Typography variant="caption" color="text.secondary" sx={{ fontWeight: 800, letterSpacing: 1.5 }}>
                      {resource.category.toUpperCase()}
                    </Typography>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>
        
        {filteredResources.length === 0 && (
          <Box sx={{ textAlign: 'center', py: 10 }}>
            <Typography variant="h6" color="text.secondary">No resources found matching your search.</Typography>
          </Box>
        )}
      </Container>
    </Box>
    </motion.div>
  );
}
