import { createBrowserRouter } from 'react-router';
import { HomeNew } from './pages/HomeNew';
import { Gallery } from './pages/Gallery';
import { Blog } from './pages/Blog';
import { ServiceDetail } from './pages/ServiceDetail';
import { Workers } from './pages/Workers';
import { Navigation } from './components/Navigation';
import FooterSection from './components/Footer';
import { PrivateEventsSection } from './components/PrivateEventsSection';


function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-black">
      <Navigation />
      {children}
      <FooterSection/>
    </div>
  );
}

export const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <Layout>
        <HomeNew />
      </Layout>
    ),
  },
  {
    path: '/gallery',
    element: (
      <Layout>
        <Gallery />
      </Layout>
    ),
  },
  {
    path: '/blog',
    element: (
      <Layout>
        <Blog />
      </Layout>
    ),
  },
  {
    path: '/workers',
    element: (
      <Layout>
        <Workers />
      </Layout>
    ),
  },
  {
    path: '/private-events',
    element: (
      <Layout>
        <PrivateEventsSection privateEventImage="https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=800&q=80" />
      </Layout>
    ),
  },
  {
    path: '/AboutSection',
    element: (
      <Layout>
        <Workers />
      </Layout>
    ),
  },

  {
    path: '/services/:slug',
    element: (
      <Layout>
        <ServiceDetail />
      </Layout>
    ),
  },
], {
  basename: import.meta.env.BASE_URL,
});