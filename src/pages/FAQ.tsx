import { Box, Container, Typography, Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import { motion } from 'motion/react';
import { ChevronDown, HelpCircle } from 'lucide-react';

const faqs = [
  {
    question: "What exactly does 'I Got You' do?",
    answer: "We are a versatile service provider that bridges the gap between digital and physical needs. Whether you need help setting up a complex software workflow, organizing a physical space, or finding a specific technical resource, we handle the tasks you don't have time for."
  },
  {
    question: "Is your service digital or in-person?",
    answer: "Both! We offer remote support for digital challenges and on-site assistance for physical projects, depending on your location and the nature of the task."
  },
  {
    question: "How quickly can I expect a response?",
    answer: "We pride ourselves on speed. Most inquiries receive a response within 2 hours during business hours. For urgent 'Crisis Management' requests, we aim for even faster turnaround."
  },
  {
    question: "Do you offer long-term partnerships?",
    answer: "Yes. While we excel at quick fixes, many of our clients use us as a long-term 'versatility partner' to handle ongoing operational gaps."
  },
  {
    question: "What are your rates?",
    answer: "Our pricing is project-based or hourly depending on the complexity. We offer transparent quotes after an initial consultation. Check our Services page for general package overviews."
  },
  {
    question: "How do I get started?",
    answer: "Simply fill out the form on our Contact page. Tell us what you need help with, and we'll reach out to discuss the best way to resolve it."
  }
];

export default function FAQ() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Box sx={{ py: 15, bgcolor: 'primary.main', color: 'white' }}>
        <Container maxWidth="md">
          <Typography variant="h2" component="h1" sx={{ fontWeight: 900, mb: 2 }}>Frequently Asked Questions</Typography>
          <Typography variant="h6" sx={{ fontWeight: 300, opacity: 0.8 }}>
            Everything you need to know about how we work and how we can help you.
          </Typography>
        </Container>
      </Box>

      <Container maxWidth="md" sx={{ py: 15 }}>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Accordion 
                sx={{ 
                  borderRadius: '16px !important', 
                  '&:before': { display: 'none' },
                  boxShadow: '0 4px 20px rgba(0,0,0,0.05)',
                  border: '1px solid #eee',
                  overflow: 'hidden'
                }}
              >
                <AccordionSummary
                  expandIcon={<ChevronDown size={20} />}
                  sx={{ py: 1 }}
                >
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                    <HelpCircle size={20} color="#000" />
                    <Typography variant="h6" sx={{ fontWeight: 700, fontSize: '1.1rem' }}>{faq.question}</Typography>
                  </Box>
                </AccordionSummary>
                <AccordionDetails sx={{ px: 4, pb: 3 }}>
                  <Typography variant="body1" color="text.secondary" sx={{ lineHeight: 1.7 }}>
                    {faq.answer}
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </motion.div>
          ))}
        </Box>
      </Container>
    </motion.div>
  );
}
