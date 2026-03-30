import Layout from './components/layout/Layout';
import Hero from './components/sections/Hero';
import Integrations from './components/sections/Integrations';
import Workflow from './components/sections/Workflow';
import HowItWorks from './components/sections/HowItWorks';
import Features from './components/sections/Features';
import Comparison from './components/sections/Comparison';
import CTA from './components/sections/CTA';

export default function App() {
  return (
    <Layout>
      <Hero />
      <Integrations />
      <Workflow />
      <Features />
      {/* <HowItWorks /> */}
      <Comparison />
      <CTA />
    </Layout>
  );
}
