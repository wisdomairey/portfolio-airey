import ProjectDetail from '@/components/ProjectDetail'

export default function ProjectPage() {
  return (
    <ProjectDetail
      title="PropertyHub"
      subtitle="Real Estate Listings Platform – Full-Stack MERN Application"
      description="PropertyHub is a production-ready real estate listings platform built with the MERN stack. Users can discover properties through advanced search filters (price, location, bedrooms, bathrooms, amenities), explore listings on an interactive Mapbox-powered map, and view comprehensive property details with image galleries. The platform includes a secure admin dashboard with JWT authentication for creating, editing, and managing property listings. Built with responsive design principles using Tailwind CSS, the application delivers a seamless experience across all devices. Deployed on Render with MongoDB Atlas for scalable cloud storage."
      technologies={[
        'React.js',
        'Node.js & Express.js',
        'MongoDB & Mongoose',
        'Tailwind CSS',
        'Mapbox GL JS',
        'JWT Authentication',
        'Multer',
        'Render',
      ]}
      features={[
        'Advanced search and filtering system with real-time results',
        'Interactive property map with custom markers and location-based search',
        'Secure admin dashboard with full CRUD operations',
        'JWT-based authentication with role-based access control',
        'Responsive, mobile-first design with professional branding',
        'Multi-image upload and management system',
        'RESTful API with comprehensive error handling',
        'Production deployment with MongoDB Atlas integration',
      ]}
      liveUrl="https://propertyhub-frontend.onrender.com"
      githubUrl="https://github.com/wisdomairey/real-estate-listings-app"
      image="/PropertyHub/1.jpg"
      gallery={[
        '/PropertyHub/2.jpg',
        '/PropertyHub/3.jpg',
        '/PropertyHub/4.jpg',
        '/PropertyHub/5.jpg',
        '/PropertyHub/6.jpg',
        '/PropertyHub/7.jpg',
        '/PropertyHub/8.jpg',
      ]}
      date="2025"
    />
  )
}
