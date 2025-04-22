import Head from 'next/head';
import Image from 'next/image';
import { FaGraduationCap, FaFlask, FaCode, FaStar, FaLanguage, FaCogs, FaUsers, FaEnvelope, FaPhone, FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { useEffect } from 'react';

export default function Home() {
  // Add smooth scrolling
  useEffect(() => {
    // Smooth scroll function
    const handleSmoothScroll = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.tagName === 'A' && target.getAttribute('href')?.startsWith('#')) {
        e.preventDefault();
        const id = target.getAttribute('href');
        const element = document.querySelector(id as string);
        if (element) {
          window.scrollTo({
            top: element.getBoundingClientRect().top + window.scrollY - 80, // Offset for fixed header
            behavior: 'smooth'
          });
        }
      }
    };

    // Add event listener
    document.addEventListener('click', handleSmoothScroll);

    // Cleanup
    return () => {
      document.removeEventListener('click', handleSmoothScroll);
    };
  }, []);

  return (
    <>
      <Head>
        <title>Guanyu Jiang - Academic Profile</title>
        <meta name="description" content="Academic profile of Guanyu Jiang - Undergraduate student at College of Computer Science and Technology, Zhejiang University" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="min-h-screen bg-gray-50">
        {/* Navigation - Fixed position */}
        <nav className="bg-white shadow-md fixed top-0 left-0 right-0 z-50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16">
              <div className="flex">
                <div className="flex-shrink-0 flex items-center">
                  <span className="text-xl font-bold text-primary">Guanyu Jiang</span>
                </div>
                <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
                  <a href="#about" className="border-primary text-gray-900 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
                    About
                  </a>
                  <a href="#education" className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
                    Education
                  </a>
                  <a href="#research" className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
                    Research
                  </a>
                  <a href="#publications" className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
                    Publications
                  </a>
                  <a href="#projects" className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
                    Projects
                  </a>
                  <a href="#awards" className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
                    Awards
                  </a>
                  <a href="#services" className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
                    Services
                  </a>
                </div>
              </div>
            </div>
          </div>
        </nav>

        {/* Add padding to the top for fixed navbar */}
        <div className="pt-16"></div>

        {/* Personal Profile */}
        <section id="about" className="py-10">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white shadow rounded-lg overflow-hidden"
            >
              <div className="md:flex">
                <div className="md:flex-shrink-0 p-6 flex flex-col items-center">
                  <div className="h-48 w-48 relative overflow-hidden rounded-full mb-4">
                    <Image
                      src="/attachment/guanyu.jpg"
                      alt="Guanyu Jiang's Photo"
                      width={200}
                      height={200}
                      className="object-cover"
                      style={{ width: '100%', height: '100%' }}
                    />
                  </div>
                  <div className="flex flex-col items-center space-y-2 mt-2">
                    <a href="mailto:django040805@zju.edu.cn" className="text-primary flex items-center hover:underline text-sm">
                      <FaEnvelope className="mr-2" /> django040805@zju.edu.cn
                    </a>
                    <a href="tel:+8615013230805" className="text-primary flex items-center hover:underline text-sm">
                      <FaPhone className="mr-2" /> (+86) 150-132-30805
                    </a>
                    <a href="https://github.com/DjangoJungle" target="_blank" rel="noopener noreferrer" className="text-primary flex items-center hover:underline text-sm">
                      <FaGithub className="mr-2" /> GitHub
                    </a>
                    <a href="/files/CV.pdf" target="_blank" rel="noopener noreferrer" className="text-primary flex items-center hover:underline text-sm">
                      <FaGraduationCap className="mr-2" /> View CV
                    </a>
                  </div>
                </div>
                <div className="p-8">
                  <div className="text-3xl font-bold text-gray-900 mb-2">Guanyu Jiang</div>
                  <p className="mt-2 text-lg font-semibold text-primary">
                    Undergraduate Student at <a href="http://www.en.cs.zju.edu.cn/" target="_blank" rel="noopener noreferrer" className="hover:underline">College of Computer Science and Technology, Zhejiang University</a>
                  </p>
                  <p className="mt-4 text-gray-600 leading-relaxed">
                    I am a third-year undergraduate student at the College of Computer Science and Technology, Zhejiang University. My research interests lie in <span className="font-semibold">LLM reasoning</span> and <span className="font-semibold">multi-modal information representation (text, tables, images, etc.)</span> for AI. In simple terms, my ambition is to enable AI to understand more, so it can, in turn, help us gain deeper insights.
                  </p>
                  <p className="mt-3 text-gray-600 leading-relaxed">
                    Throughout my journey in research, I've been fortunate to receive guidance from exceptional and supportive mentors. At Zhejiang University, I am a research intern at <a href="https://sudis-zju.github.io/en/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">SuDIS Lab</a>, under the supervision of <a href="https://longaspire.github.io/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Prof. Huan Li</a>. Since last semester, I have also been collaborating with the <a href="https://github.com/tmlr-group" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">TMLR Group, HKBU</a>, working alongside <a href="https://github.com/AndrewZhou924" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Dr. Zhanke Zhou</a> and <a href="https://github.com/KyrieXiao25" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Dr. Xiao Feng</a> - Phd students of <a href="https://bhanml.github.io/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Prof. Bo Han</a>.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Education */}
        <section id="education" className="py-10 bg-gray-50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-2xl font-bold text-gray-900 mb-6 flex items-center"
            >
              <FaGraduationCap className="mr-2 text-primary" /> Education
            </motion.h2>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white shadow rounded-lg p-6 mb-4 relative overflow-hidden"
            >
              <div className="absolute inset-0 flex justify-end items-center opacity-10">
                <div className="relative w-80 h-80">
                  <Image
                    src="/images/zju.png"
                    alt="ZJU Background"
                    fill
                    sizes="320px"
                    style={{ objectFit: 'contain' }}
                  />
                </div>
              </div>
              <div className="flex justify-between items-start relative z-10">
                <div>
                  <h3 className="text-xl font-bold text-gray-900">Zhejiang University</h3>
                  <p className="text-gray-600 font-medium">Undergraduate in Computer Science and Technology</p>
                  <p className="text-gray-600 mt-1">GPA: <span className="font-semibold">3.63/4.0</span></p>
                </div>
                <div className="text-gray-500 font-medium">2022.09 -- Present</div>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white shadow rounded-lg p-6 relative overflow-hidden"
            >
              <div className="absolute inset-0 flex justify-end items-center opacity-10">
                <div className="relative w-80 h-80">
                  <Image
                    src="/images/hsfz.png"
                    alt="HSFZ Background"
                    fill
                    sizes="320px"
                    style={{ objectFit: 'contain' }}
                  />
                </div>
              </div>
              <div className="flex justify-between items-start relative z-10">
                <div>
                  <h3 className="text-xl font-bold text-gray-900">The Affiliated High School of SCNU</h3>
                  <p className="text-gray-600 font-medium">High School Student</p>
                  <p className="text-gray-600 mt-1 italic">Outstanding Graduate</p>
                </div>
                <div className="text-gray-500 font-medium">2019.09 -- 2022.06</div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Research */}
        <section id="research" className="py-10">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-2xl font-bold text-gray-900 mb-6 flex items-center"
            >
              <FaFlask className="mr-2 text-primary" /> Research Experience
            </motion.h2>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white shadow rounded-lg p-6 mb-4 relative overflow-hidden"
            >
              <div className="absolute inset-0 flex justify-end items-center opacity-10 pr-7 pt-9">
                <div className="relative w-80 h-80">
                  <Image
                    src="/images/tmlr_image.png"
                    alt="TMLR Background"
                    fill
                    sizes="320px"
                    style={{ objectFit: 'contain' }}
                  />
                </div>
              </div>
              <div className="flex justify-between items-start relative z-10">
                <div className="flex-grow">
                  <div className="flex items-center">
                    <Image 
                      src="/images/tmlr_image.png" 
                      alt="HKBU Logo" 
                      width={56} 
                      height={56} 
                      className="mr-4"
                    />
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">Research Intern @ <a href="https://github.com/tmlr-group" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">TMLR Group, HKBU</a></h3>
                    </div>
                  </div>
                  <p className="text-gray-600 mt-3 ml-16 font-medium">
                    Advisor: <a href="https://github.com/AndrewZhou924" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Dr. Zhanke Zhou</a> & 
                    <a href="https://github.com/KyrieXiao25" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline ml-1">Dr. Xiao Feng</a>, 
                    PhD students of <a href="https://bhanml.github.io/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Prof. Bo Han</a>
                  </p>
                  <ul className="mt-3 ml-16 text-gray-600 list-disc list-outside">
                    <li className="mb-2">Conduct research on <span className="font-semibold">LLM reasoning</span>, focusing on reinforcement learning in the post-training phase of large language models</li>
                    <li>Aim to design advanced RL algorithms to enhance model reasoning capabilities</li>
                  </ul>
                </div>
                <div className="text-gray-500 font-medium whitespace-nowrap ml-4">2024.11 -- Present</div>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white shadow rounded-lg p-6 relative overflow-hidden"
            >
              <div className="absolute inset-0 flex justify-end items-center opacity-10 pr-2 pb-9">
                <div className="relative w-72 h-72">
                  <Image
                    src="/images/sudis_image.png"
                    alt="SuDIS Background"
                    fill
                    sizes="320px"
                    style={{ objectFit: 'contain' }}
                  />
                </div>
              </div>
              <div className="flex justify-between items-start relative z-10">
                <div className="flex-grow">
                  <div className="flex items-center">
                    <Image 
                      src="/images/sudis_image.png" 
                      alt="ZJU Logo" 
                      width={56} 
                      height={56} 
                      className="mr-4"
                    />
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">Research Intern @ <a href="https://sudis-zju.github.io/en/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">SuDIS Lab, ZJU</a></h3>
                    </div>
                  </div>
                  <p className="text-gray-600 mt-3 ml-16 font-medium">
                    Advisor: <a href="https://longaspire.github.io/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Prof. Huan Li</a>, Professor at College of Computer Science, Zhejiang University
                  </p>
                  <ul className="mt-3 ml-16 text-gray-600 list-disc list-outside">
                    <li className="mb-2">Investigate <span className="font-semibold">Table LLM</span> as the primary research direction</li>
                    <li className="mb-2">Propose a novel table task type and develop a large model based table discovery algorithm on this task, achieving <span className="italic">state-of-the-art</span> results compared to previous methods</li>
                    <li>Construct a demo to showcase the solution, with the paper under submission and code repository to be released later</li>
                  </ul>
                </div>
                <div className="text-gray-500 font-medium whitespace-nowrap ml-4">2024.05 -- 2025.03</div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Publications */}
        <section id="publications" className="py-10">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-2xl font-bold text-gray-900 mb-6 flex items-center"
            >
              <FaUsers className="mr-2 text-primary" /> Publications
            </motion.h2>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white shadow rounded-lg p-6 relative overflow-hidden"
            >
              <div className="relative z-10">
                <div className="space-y-8">
                  {/* Publication item 1 */}
                  <div className="md:flex">
                    <div className="md:w-1/4 mb-4 md:mb-0 md:pr-4 flex justify-center">
                      <div className="relative w-48 h-48 overflow-hidden rounded-lg shadow-md">
                        <Image
                          src="/images/publication_table.png"
                          alt="TableCopilot Publication"
                          fill
                          sizes="192px"
                          style={{ objectFit: 'cover' }}
                        />
                      </div>
                    </div>
                    <div className="md:w-3/4">
                      <h3 className="text-lg font-bold text-gray-900">TableCopilot: A Table Assistant Empowered by Natural Language Conditional Table Discovery</h3>
                      <p className="text-gray-600 mt-1 italic">Under Review</p>
                      <p className="text-gray-700 mt-2">
                        <span className="font-medium">Authors:</span> Lingxi Cui, <span className="font-semibold">Guanyu Jiang</span>, Huan Li, Ke Chen, Lidan Shou, Gang Chen
                      </p>
                      <div className="mt-2 flex space-x-4">
                        <a href="https://sudis-zju.github.io/table-copilot/" className="text-primary flex items-center hover:underline">
                          <span className="mr-1">[</span>Demo<span className="ml-1">]</span>
                        </a>
                      </div>
                    </div>
                  </div>
                  
                  {/* Publication item 2 */}
                  {/* <div className="md:flex">
                    <div className="md:w-1/4 mb-4 md:mb-0 md:pr-4 flex justify-center">
                      <div className="relative w-48 h-48 overflow-hidden rounded-lg shadow-md">
                        <Image
                          src="/images/publication_image2.png"
                          alt="RL-Enhanced Reasoning Publication"
                          fill
                          sizes="192px"
                          style={{ objectFit: 'cover' }}
                        />
                      </div>
                    </div>
                    <div className="md:w-3/4">
                      <h3 className="text-lg font-bold text-gray-900">RL-Enhanced Reasoning in Large Language Models</h3>
                      <p className="text-gray-600 mt-1 italic">In Progress</p>
                      <p className="text-gray-700 mt-2">
                        <span className="font-medium">Authors:</span> <span className="font-semibold">Guanyu Jiang</span>, Zhanke Zhou, Xiao Feng, Bo Han
                      </p>
                      <p className="text-gray-600 mt-2">
                        We investigate how reinforcement learning can enhance reasoning capabilities in large language models. Our preliminary results show significant improvements in complex reasoning tasks.
                      </p>
                      <div className="mt-2 flex space-x-4">
                        <a href="#" className="text-primary flex items-center hover:underline">
                          <span className="mr-1">[</span>Preprint<span className="ml-1">]</span>
                        </a>
                      </div>
                    </div>
                  </div> */}
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Projects */}
        <section id="projects" className="py-10 bg-gray-50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-2xl font-bold text-gray-900 mb-6 flex items-center"
            >
              <FaCode className="mr-2 text-primary" /> Project Experience
            </motion.h2>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white shadow rounded-lg p-6 mb-4 relative overflow-hidden"
            >
              <div className="absolute inset-0 flex justify-end items-center opacity-10 pr-5">
                <div className="relative w-96 h-96">
                  <Image
                    src="/images/tencent_image.png"
                    alt="Tencent Background"
                    fill
                    sizes="320px"
                    style={{ objectFit: 'contain' }}
                  />
                </div>
              </div>
              <div className="md:flex relative z-10">
                <div className="md:w-1/4 mb-4 md:mb-0 md:pr-4 flex justify-center items-center">
                  <div className="relative w-48 h-48 overflow-hidden rounded-lg shadow-md">
                    <Image
                      src="/images/hunyuan_arch.png"
                      alt="Tencent Project"
                      fill
                      sizes="192px"
                      style={{ objectFit: 'cover', objectPosition: 'center' }}
                    />
                  </div>
                </div>
                <div className="md:w-3/4">
                  <h3 className="text-xl font-bold text-gray-900">Structure-Guided Image Generation @ HunyuanDiT, Tencent</h3>
                  <p className="text-gray-600 mt-1 font-medium">
                    Advisor: Zhimin Li, Senior Algorithm Researcher at Tencent; Xinlu Lai, Algorithm Researcher at Tencent
                  </p>
                  <p className="text-gray-600 mt-1 italic">2024.07 -- 2024.10</p>
                  <ul className="mt-3 text-gray-600 list-disc list-inside">
                    <li className="mb-2">Improve the model and training pipeline for Tencent HunyuanDiT's <span className="font-semibold">structured information-guided image generation</span> sub-direction</li>
                    <li className="mb-2">Introduce a <span className="italic">VLM annotation + ControlNet training</span> solution to enhance performance in handling structured information</li>
                    <li>Receive the <span className="font-semibold text-primary">Tencent Outstanding Student Award</span> by passing the final review</li>
                  </ul>
                  <div className="mt-4 flex space-x-4">
                    {/* <a href="/files/tencent_final_report.pdf" target="_blank" rel="noopener noreferrer" className="text-primary flex items-center hover:underline">
                      <span className="mr-1">[</span>Final Report<span className="ml-1">]</span>
                    </a> */}
                  </div>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white shadow rounded-lg p-6 relative overflow-hidden"
            >
              <div className="absolute inset-0 flex justify-end items-center opacity-10 pr-9 pt-7">
                <div className="relative w-72 h-72">
                  <Image
                    src="/images/nus_image.png"
                    alt="NUS Background"
                    fill
                    sizes="320px"
                    style={{ objectFit: 'contain' }}
                  />
                </div>
              </div>
              <div className="md:flex relative z-10">
                <div className="md:w-1/4 mb-4 md:mb-0 md:pr-4 flex justify-center items-center">
                  <div className="relative w-48 h-48 overflow-hidden rounded-lg shadow-md">
                    <Image
                      src="/images/cloud_arch.png"
                      alt="NUS Project"
                      fill
                      sizes="192px"
                      style={{ objectFit: 'cover', objectPosition: 'center' }}
                    />
                  </div>
                </div>
                <div className="md:w-3/4">
                  <h3 className="text-xl font-bold text-gray-900">Cloud-on-Cloud Platform @ School of Computing Workshop, NUS</h3>
                  <p className="text-gray-600 mt-1 font-medium">
                    Advisor: Prof. Richard Ma Tianbai, Professor at National University of Singapore
                  </p>
                  <p className="text-gray-600 mt-1 italic">2024.06 -- 2024.07</p>
                  <ul className="mt-3 text-gray-600 list-disc list-inside">
                    <li className="mb-2">Aiming at workshop issue: <span className="italic">Big Data and Cloud Computing Applications in Real Life</span></li>
                    <li className="mb-2">Pioneered a creative meteorological community platform, architected on <span className="font-semibold">Kubernetes</span> with <span className="font-semibold">Kafka</span>-driven real-time data streaming and advanced time-series modeling for precise analytics and Interaction</li>
                    <li><span className="font-semibold text-primary">Rank #2</span> in the NUS SoC Workshop, Cloud Computing & Big Data track</li>
                  </ul>
                  <div className="mt-4 flex space-x-4">
                    <a href="https://github.com/lazyyy77/Cloud-on-Cloud" target="_blank" rel="noopener noreferrer" className="text-primary flex items-center hover:underline">
                      <span className="mr-1">[</span>Github<span className="ml-1">]</span>
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Awards */}
        <section id="awards" className="py-10 bg-gray-50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-2xl font-bold text-gray-900 mb-6 flex items-center"
            >
              <FaStar className="mr-2 text-primary" /> Awards
            </motion.h2>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white shadow rounded-lg p-6 relative overflow-hidden"
            >
              <ul className="space-y-4">
                <li className="flex justify-between items-center">
                  <span className="text-gray-700 font-medium">Tencent Outstanding Student, "Xiniu Niao" Project at Tencent</span>
                  <span className="text-gray-500">2024.10</span>
                </li>
                <li className="flex justify-between items-center">
                  <span className="text-gray-700 font-medium">Second Place, Cloud Computing and Big Data track at NUS SoC Workshop</span>
                  <span className="text-gray-500">2024.07</span>
                </li>
                <li className="flex justify-between items-center">
                  <span className="text-gray-700 font-medium">Silver Award, Zhejiang International "Internet+" Innovation and Entrepreneurship Competition</span>
                  <span className="text-gray-500">2023.09</span>
                </li>
                <li className="flex justify-between items-center">
                  <span className="text-gray-700 font-medium">Zhejiang University Excellent Student in Innovation and Entrepreneurship</span>
                  <span className="text-gray-500">2023.06</span>
                </li>
                <li className="flex justify-between items-center">
                  <span className="text-gray-700 font-medium">Zhejiang University Excellent Student in External Communication</span>
                  <span className="text-gray-500">2023.06</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </section>

        {/* Services */}
        <section id="services" className="py-10">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-2xl font-bold text-gray-900 mb-6 flex items-center"
            >
              <FaUsers className="mr-2 text-primary" /> Services
            </motion.h2>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white shadow rounded-lg p-6 relative overflow-hidden"
            >
              <ul className="space-y-3">
                <li className="text-gray-700 font-medium">Person in charge, Youth League Committee of Yunfeng School in Zhejiang University</li>
                <li className="text-gray-700 font-medium">Member, "Qizhen Wenxue" Talent Researcher Program in Zhejiang University</li>
                <li className="text-gray-700 font-medium">Volunteer, 19th Asian Games in Hangzhou</li>
              </ul>
            </motion.div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-gray-800 text-white py-6">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="mb-4 md:mb-0">
                <p>&copy; {new Date().getFullYear()} Guanyu Jiang. All rights reserved.</p>
              </div>
              <div className="flex space-x-4">
                <a href="mailto:django040805@zju.edu.cn" className="text-gray-300 hover:text-white">
                  <FaEnvelope className="text-xl" />
                </a>
                <a href="https://github.com/DjangoJungle" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white">
                  <FaGithub className="text-xl" />
                </a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
} 