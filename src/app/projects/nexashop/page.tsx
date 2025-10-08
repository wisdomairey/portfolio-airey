import ProjectDetail from '@/components/ProjectDetail'

export default function ProjectPage() {
  return (
    <ProjectDetail
      title="NexaShop"
      subtitle="Full-Stack E-commerce Platform with Admin Dashboard"
      description="NexaShop is a complete e-commerce solution featuring dual interfaces: a responsive customer storefront and a powerful admin dashboard. Built to help small-to-medium businesses manage online sales without expensive platforms or technical expertise. The platform enables customers to browse 20+ products across 8 categories, manage their shopping cart, and checkout securely via Stripe. Administrators can perform full CRUD operations on products, track orders in real-time, and analyze sales through interactive charts. Features JWT authentication, MongoDB database, and cloud deployment on Render."
      technologies={[
        'React.js',
        'Node.js & Express.js',
        'MongoDB & Mongoose',
        'Tailwind CSS',
        'JWT Authentication',
        'Stripe API',
        'Recharts (Analytics)',
        'Axios & CORS',
        'Render & MongoDB Atlas',
      ]}
      features={[
        'Product browsing across 8 categories with detailed product pages',
        'Real-time shopping cart with persistent state (localStorage)',
        'Secure Stripe checkout and payment processing',
        'Secure JWT authentication system',
        'Complete product management (Create, Read, Update, Delete)',
        'Category, stock, and featured product controls',
        'Order tracking and management',
        'Interactive sales analytics with Recharts visualizations',
        'Advanced search and filter functionality',
        'RESTful API architecture with Express.js',
        'Protected routes and middleware authorization',
        'Password encryption with bcrypt',
        'Cloud deployment ready (Render + MongoDB Atlas)',
      ]}
      liveUrl="https://nexashop-front.onrender.com/"
      githubUrl="https://github.com/wisdomairey/simple-ecommerce-dashboard"
      image="/nextShop/1.jpg"
      gallery={[
        '/nextShop/2.jpg',
        '/nextShop/3.jpg',
        '/nextShop/4.jpg',
        '/nextShop/5.jpg',
        '/nextShop/6.jpg',
        '/nextShop/7.jpg',
      ]}
      date="2025"
    />
  )
}
