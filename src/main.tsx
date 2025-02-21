import { lazy, StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router'
import PricingPage from './routes/pricing.tsx'
import NewProjectPage from './routes/business/projects/new-project-page.tsx'
import ProjectsPage from './routes/business/projects/projects.tsx'
import ProjectDetailsPage from './routes/business/projects/projects-item.tsx'
const NavLayout = lazy(() => import('./routes/NavLayout.tsx'))
const Home = lazy(() => import('./routes/home.tsx'))
const Login = lazy(() => import('./routes/login.tsx'))
const Signup = lazy(() => import('./routes/signup.tsx'))
const AdminDash = lazy(() => import('./routes/admin/admin-dash.tsx'))
const StudentProfileSetup = lazy(() => import('./routes/student/student-profile-setup.tsx'))
const ProjectForm = lazy(() => import('./routes/business/business-job-form.tsx'))
const InboxPage = lazy(() => import('./routes/student/student-inbox.tsx'))
const JobDetailsPage = lazy(() => import('./routes/student/student-inbox-item.tsx'))
const About = lazy(() => import('./routes/about.tsx'))

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        {/* Pages that have the Navigation Bar */}
        <Route element={<NavLayout />}>

          {/* Regular Pages */}
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="/pricing" element={<PricingPage />} />
          {/* Student Specific Pages */}
          <Route path="/student">
            <Route path="profile-setup" element={<StudentProfileSetup />} />
            <Route path="inbox" element={<InboxPage />} />
            <Route path="inbox/:jobId" element={<JobDetailsPage />} />

          </Route>
        </Route>

        {/* AUTH */}
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<Signup />} />



        {/* Business Specific Pages */}
        <Route path="business">
          <Route path="projects">
            <Route index element={<ProjectsPage />} />
            <Route path=':id' element={<ProjectDetailsPage />} />
            <Route path="new" element={<NewProjectPage />} />
          </Route>
          <Route path="profile-setup" element={<ProjectForm />} />

        </Route>

        {/* Admin Specific Pages */}
        <Route path="admin">
          <Route path="dash" element={<AdminDash />} />
        </Route>

      </Routes>
    </BrowserRouter>
  </StrictMode>
)
