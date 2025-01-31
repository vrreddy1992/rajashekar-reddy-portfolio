import React from 'react';
import { Github, Linkedin, Mail, Server, Cloud, Terminal, GitBranch, Monitor } from 'lucide-react';

function App() {
  return (
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

      {/* Skills Section */}
      <section className="bg-gray-800 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">Core Competencies</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <SkillCard 
                icon={<Cloud />}
                title="Cloud Platforms"
                skills={['AWS', 'Azure', 'GCP']}
              />
              <SkillCard 
                icon={<Server />}
                title="Infrastructure"
                skills={['Kubernetes', 'Docker', 'Terraform']}
              />
              <SkillCard 
                icon={<Terminal />}
                title="Automation"
                skills={['Ansible', 'Jenkins', 'Python']}
              />
              <SkillCard 
                icon={<Monitor />}
                title="Monitoring"
                skills={['Splunk', 'Dynatrace', 'New Relic']}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">Professional Experience</h2>
          
          <ExperienceCard 
            company="Apple"
            title="Sr. Site Reliability Engineer"
            period="Sep 2018 - Present"
            achievements={[
              "Spearheaded SRE practices to enhance system reliability and performance, achieving <1% unplanned downtime",
              "Developed and monitored SLIs, SLOs, and SLAs for critical applications",
              "Implemented Kubernetes (EKS) solutions, optimizing cluster performance and application scaling",
              "Built and maintained CI/CD pipelines with Jenkins and GitHub"
            ]}
          />

          <ExperienceCard 
            company="Capital One"
            title="Sr. DevOps Engineer"
            period="Sep 2018 - Present"
            achievements={[
              "Designed/Architected a DevOps pipeline that fits all applications enterprise-wide",
              "Led centralized DevOps team to build CI/CD framework",
              "Implemented Infrastructure as Code using Terraform",
              "Automated disaster recovery process to reduce RTO time"
            ]}
          />
        </div>
      </section>

      {/* Certifications Section */}
      <section className="bg-gray-800 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">Certifications</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-gray-700 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-2">AWS Certified SysOps Administrator</h3>
                <p className="text-gray-300">Associate Level</p>
              </div>
              <div className="bg-gray-700 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-2">Splunk Power User</h3>
                <p className="text-gray-300">Professional Level</p>
              </div>
              <div className="bg-gray-700 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-2">LPIC Linux Administrator</h3>
                <p className="text-gray-300">Professional Level</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

interface SkillCardProps {
  icon: React.ReactNode;
  title: string;
  skills: string[];
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