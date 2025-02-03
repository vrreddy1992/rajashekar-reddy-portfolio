import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useAppStore } from '../store';
import { Github, Linkedin, Mail, ArrowUp, Menu, Phone } from 'lucide-react';

interface SkillCardProps {
  icon: JSX.Element;
  title: string;
  skills: string[];
}

interface ExperienceCardProps {
  company: string;
  title: string;
  period: string;
  achievements: string[];
}

interface TestimonialProps {
  name: string;
  role: string;
  testimonial: string;
}

const DarkModeToggle = () => {
  const { theme, toggleTheme } = useAppStore();
  return (
    // Fixed at bottom-right (original placement)
    <motion.button
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      aria-label="Toggle Theme"
      onClick={toggleTheme}
      className="fixed bottom-4 right-4 bg-blue-400 text-white px-4 py-2 rounded-lg hover:bg-blue-500 transition-colors duration-300 focus:outline-none"
    >
      {theme === 'light' ? '🌙 Dark Mode' : '☀️ Light Mode'}
    </motion.button>
  );
};

const ScrollToTop = () => {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });
  return (
    <button
      onClick={scrollToTop}
      className="fixed bottom-4 left-4 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors duration-300 focus:outline-none"
      aria-label="Scroll to top"
    >
      <ArrowUp size={20} />
    </button>
  );
};

const SkillCard = ({ icon, title, skills }: SkillCardProps) => {
  const { theme } = useAppStore();
  return (
    <div
      className={`p-6 rounded-lg transition-all duration-300 ${
        theme === 'dark'
          ? 'bg-gray-700 hover:shadow-lg'
          : 'bg-white hover:shadow-lg border border-gray-200'
      }`}
    >
      <div className="mb-4">{icon}</div>
      <h3 className={`text-xl font-semibold mb-3 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
        {title}
      </h3>
      <ul className="space-y-2">
        {skills.map((skill, index) => (
          <li key={index} className={theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}>
            {skill}
          </li>
        ))}
      </ul>
    </div>
  );
};

const ExperienceCard = ({ company, title, period, achievements }: ExperienceCardProps) => {
  const { theme } = useAppStore();
  return (
    <div className="mb-12">
      <h3 className={`text-2xl font-bold mb-2 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
        {company}
      </h3>
      <div className={`text-xl mb-2 ${theme === 'dark' ? 'text-blue-400' : 'text-blue-600'}`}>
        {title}
      </div>
      <div className={`text-gray-400 mb-4 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
        {period}
      </div>
      <ul className="space-y-3">
        {achievements.map((achievement, index) => (
          <li key={index} className="flex items-start gap-2">
            <div className="mt-1.5">
              <div className={`w-1.5 h-1.5 rounded-full ${theme === 'dark' ? 'bg-blue-400' : 'bg-blue-600'}`}></div>
            </div>
            <span className={theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}>
              {achievement}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

function App() {
  const { theme } = useAppStore();
  const [activeSection, setActiveSection] = useState<string>('about');
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark');
  }, [theme]);

  // Analytics placeholder
  useEffect(() => {
    console.log('Page viewed: ' + window.location.pathname);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section');
      let current = 'about';
      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.scrollY >= sectionTop - sectionHeight / 3) {
          current = section.getAttribute('id') || 'about';
        }
      });
      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const testimonials: TestimonialProps[] = [
    {
      name: 'John Doe',
      role: 'Senior Manager at Apple',
      testimonial:
        'Rajashekar is an exceptional engineer with a deep understanding of cloud infrastructure and automation.',
    },
    {
      name: 'Jane Smith',
      role: 'DevOps Lead at Capital One',
      testimonial:
        'Rajashekar consistently delivers high-quality results. His expertise in CI/CD pipelines and AWS has been invaluable.',
    },
  ];

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
      <div className={`font-sans ${theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-900'}`}>
        {/* Navbar */}
        <nav className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white p-8 sticky top-0 z-50 shadow-md">
          <div className="container mx-auto flex flex-col md:flex-row md:items-center md:justify-between">
            {/* Left Column: Name & Contact Info (stacked vertically) */}
            <div className="flex flex-col">
              <h1 className="text-xl font-bold font-mono">Rajashekar Reddy</h1>
              <div className="flex gap-4 mt-2">
                <a
                  href="mailto:rajashekar1.ops@gmail.com"
                  className="flex items-center gap-1 text-blue-500 hover:underline"
                  aria-label="Email: rajashekar1.ops@gmail.com"
                >
                  <Mail size={18} />
                  <span>rajashekar1.ops@gmail.com</span>
                </a>
                <a
                  href="https://www.linkedin.com/in/raja-she-kar-reddy/"
                  className="flex items-center gap-1 text-blue-500 hover:underline"
                  aria-label="LinkedIn Profile"
                >
                  <Linkedin size={18} />
                  <span>LinkedIn</span>
                </a>
                <a
                  href="tel:+15128146327"
                  className="flex items-center gap-1 text-blue-500 hover:underline"
                  aria-label="Mobile: (512)-814-6327"
                >
                  <Phone size={18} />
                  <span>(512)-814-6327</span>
                </a>
              </div>
            </div>

            {/* Right Column: Navigation Links */}
            <div className="hidden md:flex gap-6">
              {['about', 'education', 'experience', 'certifications', 'skills', 'contact'].map(
                (section) => (
                  <a
                    key={section}
                    href={`#${section}`}
                    className={`hover:text-blue-500 focus:ring-2 focus:ring-blue-400 focus:outline-none ${
                      activeSection === section ? 'text-blue-500' : 'capitalize'
                    }`}
                    aria-label={`Navigate to ${section} section`}
                  >
                    {section}
                  </a>
                )
              )}
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle Menu" className="focus:outline-none">
                <Menu size={24} />
              </button>
              {isMenuOpen && (
                <div className="absolute top-20 right-4 bg-white dark:bg-gray-900 p-4 rounded-lg shadow-md">
                  <ul className="flex flex-col gap-4">
                    {['about', 'education', 'experience', 'certifications', 'skills', 'contact'].map(
                      (section) => (
                        <li key={section}>
                          <a
                            href={`#${section}`}
                            onClick={() => setIsMenuOpen(false)}
                            className={`hover:text-blue-500 focus:ring-2 focus:ring-blue-400 focus:outline-none ${
                              activeSection === section ? 'text-blue-500' : ''
                            }`}
                            aria-label={`Navigate to ${section} section`}
                          >
                            {section.charAt(0).toUpperCase() + section.slice(1)}
                          </a>
                        </li>
                      )
                    )}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </nav>

        {/* Hero Section with CTAs */}
        <section
          id="about"
          className="h-screen flex flex-col justify-center items-center text-center px-4 pt-20 bg-gradient-to-r from-blue-900 to-purple-900"
        >
          <motion.img
            src="/rajashekar-reddy-resume/profile.jpg"
            alt="Rajashekar Reddy"
            className="rounded-full w-32 h-32 mb-4 border-4 border-blue-400 hover:border-purple-400 transition-all duration-300"
            loading="lazy"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          />
          <motion.h2
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-4xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400"
          >
            Hi, I'm Rajashekar Reddy
          </motion.h2>
          <p className="text-lg text-gray-300 mt-2">DevOps & SRE Engineer | AWS | Kubernetes | Terraform</p>
          <p className="text-lg text-gray-300 mt-4 max-w-2xl">
            A highly dynamic, result-oriented professional with 8+ years of experience in DevOps/SRE—specializing in cloud infrastructure,
            automation, and high-availability systems.
          </p>
          <div className="flex gap-4 mt-6">
            <a
              href="/rajashekar-reddy-resume/Rajashekar-reddy-resume.pdf"
              download
              className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors duration-300"
              aria-label="Download Resume"
            >
              Download Resume
            </a>
            <a
              href="mailto:rajashekar1.ops@gmail.com?subject=Hiring Inquiry&body=Dear Rajashekar,%0D%0A%0D%0AI am very interested in your profile and would like to discuss potential opportunities.%0D%0A%0D%0ARegards,%0D%0A[Your Name]"
              className="px-6 py-3 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors duration-300"
              aria-label="Hire Me"
            >
              Hire Me
            </a>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-16 bg-gray-50 dark:bg-gray-800">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-8 font-mono text-gray-900 dark:text-white">Core Competencies</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <SkillCard
                  icon={
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-8 h-8 text-blue-600 dark:text-blue-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7l6 6-6 6" />
                    </svg>
                  }
                  title="Cloud Platforms"
                  skills={['AWS', 'Azure', 'GCP']}
                />
                <SkillCard
                  icon={
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-8 h-8 text-blue-600 dark:text-blue-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  }
                  title="Container & container orchestration"
                  skills={['Kubernetes', 'Docker']}
                />
                <SkillCard
                  icon={
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-8 h-8 text-blue-600 dark:text-blue-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3" />
                    </svg>
                  }
                  title="Automation"
                  skills={['Ansible', 'Jenkins', 'Python', 'Terraform']}
                />
                <SkillCard
                  icon={
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-8 h-8 text-blue-600 dark:text-blue-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  }
                  title="Monitoring"
                  skills={['Splunk', 'Dynatrace', 'New Relic']}
                />
              </div>
            </div>
          </div>
        </section>
        

        {/* Experience Section */}
        <section id="experience" className="container mx-auto px-4 py-16">
          <h2 className="text-3xl font-bold mb-8 font-mono">Professional Experience</h2>
          <div className="max-w-4xl mx-auto">
            <ExperienceCard
              company="Apple"
              title="Sr. Site Reliability Engineer"
              period="Apr 2023 - Present"
              achievements={[
                'Developed SLIs, SLOs, and SLAs for critical applications.',
                'Implemented Kubernetes (EKS) solutions for optimized performance.',
                'Built and maintained CI/CD pipelines with Jenkins and GitHub.',
              ]}
            />
            <ExperienceCard
              company="Capital One"
              title="Sr. DevOps Engineer"
              period="Sep 2018 - Apr 2023"
              achievements={[
                'Architected and maintained CI/CD pipelines for AWS ECS/EKS.',
                'Implemented disaster recovery, reducing RTO by 50%.',
                'Integrated Grafana with Terraform for enhanced observability.',
              ]}
            />
            <ExperienceCard
              company="Experian"
              title="AWS Cloud Engineer"
              period="Sep 2016 - Aug 2018"
              achievements={[
                'Designed and maintained Git repositories and CI/CD processes.',
                'Automated infrastructure provisioning using Ansible and Terraform.',
                'Implemented AWS security best practices and IAM policies.',
              ]}
            />
            <ExperienceCard
              company="Vector Technologies"
              title="Linux System Administrator"
              period="Apr 2014 - July 2015"
              achievements={[
                'Managed Linux servers and optimized system performance.',
                'Developed shell scripts for automation and monitoring.',
                'Configured and maintained network and security protocols.',
              ]}
            />
          </div>
        </section>

        {/* Education Section */}
        <section id="education" className="container mx-auto px-4 py-16">
          <h2 className="text-3xl font-bold mb-8 font-mono">Education</h2>
          <p className="text-lg text-gray-700 dark:text-gray-300">
            Master’s in Computer Science - Rivier University
          </p>
        </section>

         


        {/* Certifications Section */}
        <section id="certifications" className="py-16 bg-gray-50 dark:bg-gray-800">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 font-mono text-gray-900 dark:text-white">
              Certifications
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-6 rounded-lg transition-all duration-300 bg-white dark:bg-gray-700 hover:shadow-lg">
                <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                  AWS Certified Solutions Architect – Associate
                </h3>
              </div>
              <div className="p-6 rounded-lg transition-all duration-300 bg-white dark:bg-gray-700 hover:shadow-lg">
                <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                  Certified Kubernetes Administrator (CKA)
                </h3>
              </div>
              <div className="p-6 rounded-lg transition-all duration-300 bg-white dark:bg-gray-700 hover:shadow-lg">
                <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                  Terraform Associate Certification
                </h3>
              </div>
              <div className="p-6 rounded-lg transition-all duration-300 bg-white dark:bg-gray-700 hover:shadow-lg">
                <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                  Docker Certified Associate
                </h3>
              </div>
            </div>
          </div>
        </section>

        {/* Consolidated Contact Section */}
        <section id="contact" className="container mx-auto px-4 py-16">
          <h2 className="text-3xl font-bold mb-8 font-mono">Contact Me</h2>
          <div className="flex flex-col gap-4">
            <a
              href="mailto:rajashekar1.ops@gmail.com"
              className="flex items-center gap-2 text-blue-500 hover:underline"
              aria-label="Email: rajashekar1.ops@gmail.com"
            >
              <Mail size={20} />
              <span>rajashekar1.ops@gmail.com</span>
            </a>
            <a
              href="https://www.linkedin.com/in/raja-she-kar-reddy/"
              className="flex items-center gap-2 text-blue-500 hover:underline"
              aria-label="LinkedIn Profile"
            >
              <Linkedin size={20} />
              <span>LinkedIn Profile</span>
            </a>
            <a
              href="tel:+15128146327"
              className="flex items-center gap-2 text-blue-500 hover:underline"
              aria-label="Mobile: (512)-814-6327"
            >
              <Phone size={20} />
              <span>(512)-814-6327</span>
            </a>
          </div>
        </section>

        <ScrollToTop />
        {/* Dark Mode Toggle remains fixed at bottom-right */}
        <DarkModeToggle />
      </div>
    </motion.div>
  );
}

export default App;
