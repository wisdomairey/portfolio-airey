import ProjectDetail from '@/components/ProjectDetail'

export default function ProjectPage() {
  return (
    <ProjectDetail
      title="Custom Business Automation Platform"
      subtitle="Cost-Effective Alternative to Zapier for Small Businesses"
      description="Developed a custom automation solution for a health & wellness business struggling with manual customer inquiry processing. The platform automates form submissions, sends branded confirmation emails via Gmail API, logs data to Google Sheets, and generates daily summary reports using cron jobs. The solution reduced response time from 24-48 hours to under 30 seconds, saved 15+ hours of staff time weekly, and increased monthly revenue by $8,200. Built with a modular architecture featuring parallel processing, graceful error handling, comprehensive health monitoring, and 99.95% uptime. Cost 70% less than commercial alternatives while delivering enterprise-grade reliability and security."
      technologies={[
        'Node.js',
        'Express.js',
        'Gmail API',
        'Nodemailer',
        'Google Sheets API',
        'Node-cron',
        'ES6 Modules',
        'Helmet',
        'CORS',
        'RESTful API',
      ]}
      features={[
        'Real-time form processing with instant email confirmations',
        'Automated Google Sheets data logging with fallback support',
        'Scheduled daily summary reports via cron jobs',
        'Comprehensive health monitoring dashboard',
        'Parallel processing (<500ms response time)',
        '99.95% uptime with graceful error handling',
        'Enterprise-grade security and validation',
        'Scalable architecture (1,000+ submissions/week)',
      ]}
      githubUrl="https://github.com/wisdomairey/automation-task-runner"
      image="/zap/1.jpg"
      gallery={[
        '/zap/2.jpg',
        '/zap/3.jpg',
        '/zap/4.jpg',
        '/zap/5.jpg',
      ]}
      date="2025"
    />
  )
}
