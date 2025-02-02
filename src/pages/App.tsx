import React from 'react';
import { motion } from 'framer-motion';  // Importing motion
import { useAppStore } from '../store';
//import { button } from '../components/ui/button';  // Importing button from components folder
import { Github, Linkedin, Mail, Server, Cloud, Terminal, GitBranch, Monitor } from 'lucide-react';
//import TestComponent from '../components/TestComponent'; // Importing TestComponent from components folder


function App() {
  const { theme, toggleTheme } = useAppStore();

  return (
    
    <motion.div 
      initial={{ opacity: 0 }}  // Initial state (invisible)
      animate={{ opacity: 1 }}   // End state (fully visible)
      transition={{ duration: 1 }} // Duration of the fade-in effect
    >
      <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        {/* Header/Hero Section */}
        <header className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl font-bold mb-4">Rajashekar Reddy</h1>
            <h2 className="text-2xl text-gray-300 mb-6">Sr. DevOps Engineer / Site Reliability Engineer</h2>
            <div className="flex gap-4 mb-8">
              <a href="mailto:rajashekar1.ops@gmail.com" className="flex items-center gap-2 text-gray-300 hover:text-white">
                <Mail size={20} />
                <span>rajashekar1.ops@gmail.com</span>
              </a>
              <a href="tel:512-814-6327" className="flex items-center gap-2 text-gray-300 hover:text-white">
                <span>(512) 814-6327</span>
              </a>
              <a href="https://www.linkedin.com/in/raja-she-kar-reddy/" className="flex items-center gap-2 text-gray-300 hover:text-white">
                <Linkedin size={20} />
                <span>LinkedIn</span>
              </a>
            </div>
            <p className="text-lg text-gray-300">
              A highly dynamic result-oriented professional with 8+ years of experience in DevOps/SRE, specializing in cloud infrastructure, automation, and maintaining high-availability systems.
            </p>
          </div>
        </header>


        {/* Theme Toggle Button */}
        <button 
          aria-label='Toggle Theme' //Improved accessibility with aria-label
          onClick={toggleTheme} 
          className="fixed bottom-4 right-4 bg-blue-400 text-white px-4 py-2 rounded-lg"
        >
          {theme === 'light' ? 'Dark Mode' : 'Light Mode'}  
        </button>

        {/* Education Section */}
        <section className="container mx-auto px-4 py-16">
          <h2 className="text-3xl font-bold mb-8">Education</h2>
          <p className="text-lg text-gray-300">Master’s in Computer Science - Rivier University</p>
        </section>

        {/* Skills Section */}
        <section className="bg-gray-800 py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-8">Core Competencies</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <SkillCard icon={<Cloud />} title="Cloud Platforms" skills={['AWS', 'Azure', 'GCP']} />
                <SkillCard icon={<Server />} title="Infrastructure" skills={['Kubernetes', 'Docker', 'Terraform']} />
                <SkillCard icon={<Terminal />} title="Automation" skills={['Ansible', 'Jenkins', 'Python']} />
                <SkillCard icon={<Monitor />} title="Monitoring" skills={['Splunk', 'Dynatrace', 'New Relic']} />
              </div>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">Professional Experience</h2>
            <ExperienceCard company="Apple" title="Sr. Site Reliability Engineer" period="Apr 2023 - Present" achievements={["Developed SLIs, SLOs, and SLAs for critical applications.", "Implemented Kubernetes (EKS) solutions for optimized performance.", "Built and maintained CI/CD pipelines with Jenkins and GitHub."]} />
            <ExperienceCard company="Capital One" title="Sr. DevOps Engineer" period="Sep 2018 - Apr 2023" achievements={["Architected and maintained CI/CD pipelines for AWS ECS/EKS.", "Implemented disaster recovery, reducing RTO by 50%.", "Integrated Grafana with Terraform for enhanced observability."]} />
            <ExperienceCard company="Experian" title="AWS Cloud Engineer" period="Sep 2016 - Aug 2018" achievements={["Designed and maintained Git repositories and CI/CD processes.", "Automated infrastructure provisioning using Ansible and Terraform.", "Implemented AWS security best practices and IAM policies."]} />
            <ExperienceCard company="Vector Technologies" title="Linux System Administrator" period="Apr 2014 - July 2015" achievements={["Managed Linux servers and optimized system performance.", "Developed shell scripts for automation and monitoring.", "Configured and maintained network and security protocols."]} />
          </div>
        </section>

        {/* Certifications Section */}
        <section className="bg-gray-800 py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-8">Certifications</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-gray-700 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-2">AWS Certified Solutions Architect – Associate</h3>
                </div>
                <div className="bg-gray-700 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-2">Certified Kubernetes Administrator (CKA)</h3>
                </div>
                <div className="bg-gray-700 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-2">Terraform Associate Certification</h3>
                </div>
                <div className="bg-gray-700 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-2">Docker Certified Associate</h3>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </motion.div>
  );
}

function SkillCard({ icon, title, skills }: SkillCardProps) {
  return (
    <div className="bg-gray-700 p-6 rounded-lg">
      <div className="text-blue-400 mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <ul className="space-y-2">
        {skills.map((skill, index) => (
          <li key={index} className="text-gray-300">{skill}</li>
        ))}
      </ul>
    </div>
  );
}

interface ExperienceCardProps {
  company: string;
  title: string;
  period: string;
  achievements: string[];
}

function ExperienceCard({ company, title, period, achievements }: ExperienceCardProps) {
  return (
    <div className="mb-12">
      <h3 className="text-2xl font-bold mb-2">{company}</h3>
      <div className="text-xl text-blue-400 mb-2">{title}</div>
      <div className="text-gray-400 mb-4">{period}</div>
      <ul className="space-y-3">
        {achievements.map((achievement, index) => (
          <li key={index} className="flex items-start gap-2">
            <div className="mt-1.5">
              <div className="w-1.5 h-1.5 bg-blue-400 rounded-full"></div>
            </div>
            <span className="text-gray-300">{achievement}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
