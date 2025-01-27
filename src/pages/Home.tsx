import { Github, Linkedin, Mail } from 'lucide-react';
import profile from '../assets/profile.jpg'

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] text-center">
      <div className="relative mb-8">
        <img
          src={profile}
          alt="Profile"
          className="w-48 h-48 rounded-full object-cover border-4 border-white dark:border-gray-800 shadow-lg"
        />
      </div>
      
      <h1 className="text-4xl font-bold text-gray-800 dark:text-white mb-4">Hannah Mojirade</h1>
      <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">Graphics Designer</p>
      
      <div className="flex space-x-6">
        <a href="https://github.com" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white">
          <Github size={24} />
        </a>
        <a href="https://linkedin.com" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white">
          <Linkedin size={24} />
        </a>
        <a href="mailto:hannahmojirade@gmail.com" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white">
          <Mail size={24} />
        </a>
      </div>
    </div>
  );
};

export default Home;