import Layout from './components/layout/Layout';
import Hero from './components/sections/Hero';
import Integrations from './components/sections/Integrations';
import Workflow from './components/sections/Workflow';
import HowItWorks from './components/sections/HowItWorks';
import Comparison from './components/sections/Comparison';
import CTA from './components/sections/CTA';

export default function App() {
  return (
    <Layout>
      <Hero />
      <Integrations />
      <Workflow />
      <HowItWorks />
      <Comparison />
      <CTA />
    </Layout>
  );
}
