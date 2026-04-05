import { Box, Container, Typography, Button, Breadcrumbs, Link, Divider } from '@mui/material';
import { motion } from 'motion/react';
import { useParams, useNavigate, Link as RouterLink } from 'react-router-dom';
import { ChevronLeft, Clock, User, Tag } from 'lucide-react';

const resourceContent: Record<string, any> = {
  'digital-security-checklist': {
    title: 'Digital Security Checklist',
    category: 'Security',
    author: 'Alex Rivera',
    date: 'March 15, 2026',
    readTime: '5 min read',
    content: `
      <h3>Protecting Your Digital Identity</h3>
      <p>In today's interconnected world, digital security is no longer optional. It's a necessity. This checklist provides a foundational approach to securing your personal and professional data.</p>
      
      <h4>1. Password Management</h4>
      <p>Use a reputable password manager (like Bitwarden or 1Password). Never reuse passwords across different services. Ensure your master password is complex and unique.</p>
      
      <h4>2. Multi-Factor Authentication (MFA)</h4>
      <p>Enable MFA on every account that supports it. Prefer app-based authenticators (like Authy or Google Authenticator) over SMS-based codes, which are vulnerable to SIM swapping.</p>
      
      <h4>3. Software Updates</h4>
      <p>Keep your operating system and all applications up to date. These updates often contain critical security patches that protect you from known vulnerabilities.</p>
      
      <h4>4. Network Security</h4>
      <p>Avoid using public Wi-Fi for sensitive transactions. If you must use public networks, always use a trusted VPN. Ensure your home network is secured with WPA3 encryption.</p>
    `
  },
  'remote-work-optimization': {
    title: 'Remote Work Optimization',
    category: 'Productivity',
    author: 'Sarah Chen',
    date: 'March 20, 2026',
    readTime: '8 min read',
    content: `
      <h3>Mastering the Remote Workflow</h3>
      <p>Remote work offers flexibility, but it also requires discipline and the right tools. Here's how to optimize your environment for maximum output.</p>
      
      <h4>1. Dedicated Workspace</h4>
      <p>Create a physical boundary between your work and personal life. Even a specific corner of a room can signal to your brain that it's time to focus.</p>
      
      <h4>2. Communication Protocols</h4>
      <p>Establish clear expectations for response times. Use asynchronous tools (like Slack or Notion) for non-urgent updates and save meetings for high-bandwidth collaboration.</p>
      
      <h4>3. Time Blocking</h4>
      <p>Schedule your day in blocks. Dedicate specific times for deep work, administrative tasks, and breaks. This prevents the "always-on" burnout common in remote settings.</p>
      
      <h4>4. Digital Ergonomics</h4>
      <p>Optimize your digital workspace. Use dark mode to reduce eye strain, organize your desktop files, and use window management tools to stay focused on one task at a time.</p>
    `
  },
  'home-office-setup-guide': {
    title: 'Home Office Setup Guide',
    category: 'Logistics',
    author: 'Marcus Thorne',
    date: 'April 1, 2026',
    readTime: '10 min read',
    content: `
      <h3>The Ergonomic Home Office</h3>
      <p>A well-designed office isn't just about aesthetics; it's about health and longevity. Follow these guidelines to build a space that supports your body.</p>
      
      <h4>1. Ergonomic Chair</h4>
      <p>Invest in a chair with proper lumbar support and adjustable armrests. Your feet should be flat on the floor with your knees at a 90-degree angle.</p>
      
      <h4>2. Monitor Height</h4>
      <p>The top of your monitor should be at or slightly below eye level. This prevents neck strain and promotes better posture.</p>
      
      <h4>3. Lighting</h4>
      <p>Position your desk near natural light if possible, but avoid direct glare on your screen. Use task lighting to reduce eye strain during evening hours.</p>
      
      <h4>4. Cable Management</h4>
      <p>A cluttered desk leads to a cluttered mind. Use cable sleeves, under-desk trays, and zip ties to keep your wires organized and out of sight.</p>
    `
  },
  'troubleshooting-common-pc-issues': {
    title: 'Troubleshooting Common PC Issues',
    category: 'Technical',
    author: 'Alex Rivera',
    date: 'April 2, 2026',
    readTime: '12 min read',
    content: `
      <h3>Quick Fixes for Common Tech Headaches</h3>
      <p>Before you call for help, try these standard troubleshooting steps that resolve 90% of common PC issues.</p>
      
      <h4>1. The Classic Restart</h4>
      <p>It sounds simple, but restarting your computer clears the system memory and stops any background processes that might be causing hangs or slowdowns.</p>
      
      <h4>2. Slow Performance</h4>
      <p>Check your Task Manager (Ctrl+Shift+Esc) to see which apps are consuming the most CPU or RAM. Disable unnecessary startup programs to speed up boot times.</p>
      
      <h4>3. Internet Connectivity</h4>
      <p>If your Wi-Fi is flaky, try "forgetting" the network and reconnecting. If that fails, power cycle your router by unplugging it for 30 seconds.</p>
      
      <h4>4. Blue Screen of Death (BSOD)</h4>
      <p>Note the error code provided on the screen. Most BSODs are caused by faulty drivers or hardware issues. Try updating your graphics and chipset drivers.</p>
    `
  },
  'essential-software-toolkit': {
    title: 'Essential Software Toolkit',
    category: 'Tools',
    author: 'Sarah Chen',
    date: 'April 3, 2026',
    readTime: '7 min read',
    content: `
      <h3>The Must-Have Apps for 2026</h3>
      <p>We've curated a list of the most effective software tools to help you manage your digital life with ease.</p>
      
      <h4>1. Productivity & Notes</h4>
      <p><strong>Notion:</strong> The all-in-one workspace for notes, tasks, and databases. <br><strong>Obsidian:</strong> For those who prefer a local-first, markdown-based second brain.</p>
      
      <h4>2. Communication</h4>
      <p><strong>Slack:</strong> The gold standard for team communication. <br><strong>Signal:</strong> For ultra-secure, encrypted messaging.</p>
      
      <h4>3. Utilities</h4>
      <p><strong>Rectangle (Mac) / PowerToys (Windows):</strong> Essential window management tools. <br><strong>Bitwarden:</strong> Our top choice for open-source password management.</p>
      
      <h4>4. Creative Tools</h4>
      <p><strong>Canva:</strong> High-end design made accessible. <br><strong>Figma:</strong> The industry leader for interface design and prototyping.</p>
    `
  },
  'emergency-contact-templates': {
    title: 'Emergency Contact Templates',
    category: 'Safety',
    author: 'Elena Vance',
    date: 'April 4, 2026',
    readTime: '4 min read',
    content: `
      <h3>Be Prepared for Anything</h3>
      <p>In a crisis, every second counts. Having your emergency information organized and accessible can make all the difference.</p>
      
      <h4>1. Personal Information Sheet</h4>
      <p>Include full names, dates of birth, blood types, and any known allergies or medical conditions for everyone in your household.</p>
      
      <h4>2. Digital Emergency Kit</h4>
      <p>Store a digital copy of your insurance cards, IDs, and emergency contacts in a secure, offline-accessible folder on your phone.</p>
      
      <h4>3. ICE (In Case of Emergency)</h4>
      <p>Set up the Medical ID feature on your iPhone or Android device. This allows first responders to see your emergency info without needing your passcode.</p>
      
      <h4>4. Physical Backup</h4>
      <p>Keep a printed copy of your emergency contact list in your wallet and on the side of your refrigerator. Technology can fail; paper doesn't need a battery.</p>
    `
  },
  'cloud-storage-comparison': {
    title: 'Cloud Storage Comparison',
    category: 'Digital',
    author: 'Marcus Thorne',
    date: 'April 4, 2026',
    readTime: '9 min read',
    content: `
      <h3>Choosing the Right Cloud for Your Data</h3>
      <p>Not all cloud storage providers are created equal. We've broken down the top contenders to help you decide where to store your digital life.</p>
      
      <h4>1. Google Drive</h4>
      <p><strong>Best for:</strong> Collaboration and integration with Google Workspace. <br><strong>Pros:</strong> Excellent search, generous free tier, seamless document editing.</p>
      
      <h4>2. iCloud</h4>
      <p><strong>Best for:</strong> Apple ecosystem users. <br><strong>Pros:</strong> Deep integration with iOS and macOS, seamless photo syncing, "Hide My Email" features.</p>
      
      <h4>3. Dropbox</h4>
      <p><strong>Best for:</strong> Pure file syncing and large file sharing. <br><strong>Pros:</strong> Fastest sync speeds, excellent version history, platform agnostic.</p>
      
      <h4>4. OneDrive</h4>
      <p><strong>Best for:</strong> Windows users and Office 365 subscribers. <br><strong>Pros:</strong> Included with Office 365, "Personal Vault" for sensitive files, great Windows integration.</p>
    `
  },
  'physical-file-organization': {
    title: 'Physical File Organization',
    category: 'Logistics',
    author: 'Elena Vance',
    date: 'April 4, 2026',
    readTime: '11 min read',
    content: `
      <h3>Taming the Paper Monster</h3>
      <p>Even in a digital age, physical paperwork accumulates. Here is our proven system for keeping your physical files organized and retrievable.</p>
      
      <h4>1. The "One-Touch" Rule</h4>
      <p>When mail or paper enters your home, deal with it immediately. File it, shred it, or act on it. Don't let it sit in a "to-be-sorted" pile.</p>
      
      <h4>2. Categorization System</h4>
      <p>Use color-coded folders for major categories: <br><strong>Green:</strong> Financial & Tax <br><strong>Blue:</strong> Medical & Health <br><strong>Red:</strong> Vital Records (Birth certificates, Passports) <br><strong>Yellow:</strong> Home & Auto</p>
      
      <h4>3. The Scanning Workflow</h4>
      <p>If you don't need the physical original, scan it and shred the paper. Use a dedicated document scanner for high volumes or a mobile app like Adobe Scan for quick captures.</p>
      
      <h4>4. Annual Purge</h4>
      <p>Set a date every year (Tax Day is a good reminder) to go through your files and shred anything that is no longer needed. Most financial records only need to be kept for 7 years.</p>
    `
  }
};

export default function ResourceDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const resource = resourceContent[id || ''];

  if (!resource) {
    return (
      <Container sx={{ py: 20, textAlign: 'center' }}>
        <Typography variant="h4">Resource not found</Typography>
        <Button onClick={() => navigate('/resources')} sx={{ mt: 4 }}>Back to Knowledge Base</Button>
      </Container>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Box sx={{ py: 6, bgcolor: '#fafafa', borderBottom: '1px solid #eee' }}>
        <Container maxWidth="md">
          <Breadcrumbs sx={{ mb: 4 }}>
            <Link component={RouterLink} to="/resources" underline="hover" color="inherit">Knowledge Base</Link>
            <Typography color="text.primary">{resource.category}</Typography>
          </Breadcrumbs>
          
          <Typography variant="h2" component="h1" sx={{ fontWeight: 900, mb: 4, lineHeight: 1.2 }}>
            {resource.title}
          </Typography>
          
          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 4, color: 'text.secondary' }}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <User size={18} />
              <Typography variant="body2" sx={{ fontWeight: 600 }}>{resource.author}</Typography>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <Clock size={18} />
              <Typography variant="body2">{resource.date} • {resource.readTime}</Typography>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <Tag size={18} />
              <Typography variant="body2">{resource.category}</Typography>
            </Box>
          </Box>
        </Container>
      </Box>

      <Container maxWidth="md" sx={{ py: 10 }}>
        <Box 
          sx={{ 
            '& h3': { fontSize: '2rem', fontWeight: 800, mb: 3, mt: 6 },
            '& h4': { fontSize: '1.5rem', fontWeight: 700, mb: 2, mt: 4 },
            '& p': { fontSize: '1.15rem', lineHeight: 1.8, color: 'text.secondary', mb: 3 },
            '& ul': { mb: 3, pl: 4 },
            '& li': { mb: 1, fontSize: '1.1rem', color: 'text.secondary' }
          }}
          dangerouslySetInnerHTML={{ __html: resource.content }}
        />
        
        <Divider sx={{ my: 10 }} />
        
        <Box sx={{ textAlign: 'center' }}>
          <Typography variant="h5" sx={{ fontWeight: 800, mb: 4 }}>Need more personalized help?</Typography>
          <Button 
            component={RouterLink} 
            to="/contact" 
            variant="contained" 
            size="large" 
            sx={{ borderRadius: '50px', px: 6, py: 2, fontWeight: 800 }}
          >
            Contact Us Now
          </Button>
        </Box>
      </Container>
    </motion.div>
  );
}
