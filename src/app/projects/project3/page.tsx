import ProjectDetail from '@/components/ProjectDetail'

export default function ProjectPage() {
  return (
    <ProjectDetail
      title="ResumeForge"
      subtitle="Interactive Resume Builder with Live Preview & PDF Export"
      description="ResumeForge is a feature-rich web application that simplifies resume creation for freelancers, students, and job seekers. Users can input their information through intuitive forms, see live previews as they type, switch between multiple professionally designed templates, and export their resume as a high-quality PDF. The app includes persistent state management, dark/light mode theming, and a fully responsive design that works flawlessly on desktop, tablet, and mobile devices. Built with modern web technologies and best practices, it offers a smooth, accessible user experience with zero learning curve."
      technologies={[
        'React.js 18',
        'TailwindCSS',
        'Zustand (State Management)',
        'react-to-print (PDF Export)',
        'Vite (Build Tool)',
        'Lucide React (Icons)',
      ]}
      features={[
        'Real-time live preview with instant updates',
        'Multiple switchable resume templates (Modern, Classic, Minimal)',
        'One-click PDF export with preserved styling',
        'Dark/light mode toggle for enhanced UX',
        'Persistent data storage using local storage',
        'Fully responsive design for all devices',
        'Accessible interface with keyboard navigation',
        'Dynamic form sections for experience, education, skills, and projects',
      ]}
      liveUrl="https://resumefoge.netlify.app/"
      githubUrl="https://github.com/wisdomairey/resume-builder-react"
      image="/resumeb/1.jpg"
      gallery={[
        '/resumeb/2.jpg',
        '/resumeb/3.jpg',
        '/resumeb/4.jpg',
        '/resumeb/5.jpg',
      ]}
      date="2025"
    />
  )
}
