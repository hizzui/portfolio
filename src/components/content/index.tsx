import React, { useEffect, useState } from 'react';
import type { Translation } from '../../types';
import { fetchGitHubRepos } from '../../services/api';
import { Linkedin, Github, Download, Palette, Code2, Zap, Smartphone, Wind, Server, Square, Database, Terminal, Lightbulb, Cpu } from 'lucide-react';

interface ContentProps {
  lang: 'pt' | 'en';
  translations: Record<'pt' | 'en', Translation>;
}

interface GitHubRepo {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  language: string | null;
  stars: number;
}

export const AboutContent: React.FC<ContentProps> = ({ lang }) => {
  const content = {
    pt: {
      name: 'Ryan Carlos',
      title: 'Desenvolvedor Back-End & Estudante de CC',
      tagline: 'Focado em desenvolvimento Back-End com Python',
      expertise: 'Sou estudante de Ciência da Computação focado em desenvolvimento Back-End com Python. Tenho interesse em construção de APIs, modelagem de banco de dados e desenvolvimento de sistemas escaláveis.',
      mission: 'Atualmente estudando e desenvolvendo projetos com Django, FastAPI e PostgreSQL.',
    },
    en: {
      name: 'Ryan Carlos',
      title: 'Back-End Developer & CS Student',
      tagline: 'Focused on Back-End development with Python',
      expertise: 'I am a Computer Science student focused on Back-End development with Python. I have interest in API construction, database modeling and development of scalable systems.',
      mission: 'Currently studying and developing projects with Django, FastAPI and PostgreSQL.',
    },
  };

  const text = content[lang];

  return (
    <div className="space-y-4 p-4 flex flex-col items-center text-center">
      {/* Avatar/Photo Section */}
      <div className="flex flex-col items-center mb-4">
        <div className="w-24 h-24 rounded-md border-2 border-black overflow-hidden bg-gray-200 mb-3 shadow-[2px_2px_0_rgba(0,0,0,0.3)]">
          <img 
            src="/avatar.jpg" 
            alt={text.name}
            className="w-full h-full object-cover"
            onError={(e) => {
              (e.target as HTMLImageElement).style.display = 'none';
            }}
          />
        </div>
        <h3 className="font-bold text-lg">{text.name}</h3>
        <p className="text-xs text-gray-600">{text.title}</p>
      </div>

      <div>
        <span className="inline-block px-2 py-1 bg-orange-300 text-black text-xs font-bold rounded mb-2">
          {text.tagline}
        </span>
      </div>
      
      <p className="text-xs leading-relaxed">{text.expertise}</p>
      
      <div className="pt-2 border-t border-gray-300 w-full">
        <p className="text-xs font-semibold italic">{text.mission}</p>
      </div>

      <div className="pt-4 w-full max-w-xs">
        <a
          href="/RYAN CARLOS MENDES DE CARVALHO.pdf"
          download="Curriculo-HizzUI.pdf"
          className="w-full px-4 py-3 bg-orange-400 text-white text-sm font-bold rounded-md border-2 border-black shadow-[4px_4px_0_rgba(0,0,0,0.7)] hover:shadow-[2px_2px_0_rgba(0,0,0,0.5)] active:shadow-[0_0_0_rgba(0,0,0,0.1)] hover:translate-x-0.5 hover:translate-y-0.5 transition-all duration-150 text-center flex items-center justify-center gap-2 mb-3"
        >
          <Download size={18} />
          {lang === 'pt' ? 'Download Currículo' : 'Download Resume'}
        </a>
      </div>

      <div className="flex gap-2 w-full max-w-xs">
        <a
          href="https://www.linkedin.com/in/rycarvalho"
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 px-3 py-2 bg-blue-600 text-white text-xs font-bold rounded-md border-2 border-black shadow-[4px_4px_0_rgba(0,0,0,0.7)] hover:shadow-[2px_2px_0_rgba(0,0,0,0.5)] active:shadow-[0_0_0_rgba(0,0,0,0.1)] hover:translate-x-0.5 hover:translate-y-0.5 transition-all duration-150 text-center flex items-center justify-center gap-2"
        >
          <Linkedin size={16} />
          LinkedIn
        </a>
        <a
          href="https://github.com/hizzui"
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 px-3 py-2 bg-black text-white text-xs font-bold rounded-md border-2 border-black shadow-[4px_4px_0_rgba(0,0,0,0.7)] hover:shadow-[2px_2px_0_rgba(0,0,0,0.5)] active:shadow-[0_0_0_rgba(0,0,0,0.1)] hover:translate-x-0.5 hover:translate-y-0.5 transition-all duration-150 text-center flex items-center justify-center gap-2"
        >
          <Github size={16} />
          GitHub
        </a>
      </div>
    </div>
  );
};

export const WorkContent: React.FC<ContentProps> = ({ lang }) => {
  const [repos, setRepos] = useState<GitHubRepo[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadRepos = async () => {
      setLoading(true);
      const data = await fetchGitHubRepos('hizzui');
      // Filtrar apenas os repos especificados
      const filteredRepos = (data || [])
        .filter((repo: any) => 
          repo.name.toLowerCase() === 'newdiscordbot' || 
          repo.name.toLowerCase() === 'dib'
        )
        .map((repo: any) => ({
          id: repo.id,
          name: repo.name,
          description: repo.description,
          html_url: repo.html_url,
          language: repo.language,
          stars: repo.stargazers_count || 0,
        }));
      setRepos(filteredRepos);
      setLoading(false);
    };

    loadRepos();
  }, []);

  if (loading) {
    return (
      <div className="space-y-3">
        <div className="p-3 bg-gray-200 text-black rounded animate-pulse">
          <div className="h-4 bg-gray-300 rounded w-3/4"></div>
        </div>
      </div>
    );
  }

  if (repos.length === 0) {
    return (
      <div className="space-y-3">
        <div className="p-3 bg-orange-300 text-black rounded">
          <div className="text-xs">{lang === 'pt' ? 'Nenhum repositório encontrado' : 'No repositories found'}</div>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-2">
      {repos.map((repo) => (
        <a
          key={repo.id}
          href={repo.html_url}
          target="_blank"
          rel="noopener noreferrer"
          className="block p-3 bg-orange-300 text-black rounded-md border-2 border-black shadow-[2px_2px_0_rgba(0,0,0,0.5)] hover:shadow-[1px_1px_0_rgba(0,0,0,0.3)] hover:translate-x-0.5 hover:translate-y-0.5 transition-all duration-150"
        >
          <div className="font-bold text-sm flex justify-between items-start">
            <span>{repo.name}</span>
            {repo.stars > 0 && <span className="text-xs bg-white px-2 py-1 rounded">⭐ {repo.stars}</span>}
          </div>
          <div className="text-xs opacity-80 mt-1 line-clamp-2">{repo.description || 'No description'}</div>
          {repo.language && <div className="text-xs mt-1 text-gray-700">📝 {repo.language}</div>}
        </a>
      ))}
    </div>
  );
};

export const StackContent: React.FC<ContentProps> = ({ lang }) => {
  const skills = [
    { name: 'Figma', Component: Palette },
    { name: 'TypeScript', Component: Code2 },
    { name: 'React', Component: Zap },
    { name: 'React Native', Component: Smartphone },
    { name: 'Tailwind CSS', Component: Wind },
    { name: 'Node.js', Component: Server },
    { name: 'Next.js', Component: Square },
    { name: 'Vite', Component: Zap },
    { name: 'GSAP', Component: Zap },
    { name: 'C#', Component: Code2 },
    { name: 'SQL', Component: Database },
    { name: 'Linux', Component: Terminal },
    { name: 'Swift', Component: Zap },
    { name: 'IA', Component: Lightbulb },
    { name: 'p5.js', Component: Cpu },
  ];

  return (
    <div className="space-y-4">
      <p className="text-xs leading-relaxed">
        {lang === 'pt' 
          ? 'As tecnologias e ferramentas que utilizo para construir soluções digitais de alta performance.'
          : 'The technologies and tools I use to build high-performance digital solutions.'}
      </p>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <div
            key={skill.name}
            className="px-3 py-2 border-2 border-black rounded-full bg-white text-black text-xs font-bold flex items-center gap-2 hover:bg-gray-100 transition-colors"
            title={skill.name}
          >
            <skill.Component size={16} />
            <span>{skill.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export const ContactContent: React.FC<ContentProps> = ({ lang }) => {
  const contact = {
    pt: {
      title: 'Entre em contato!',
      email: 'rinseene@gmail.com',
      linkedin: '/in/rycarvalho',
      github: '@hizzui',
      cta: 'Sempre aberto a conversas!',
    },
    en: {
      title: 'Get in touch!',
      email: 'rinseene@gmail.com',
      linkedin: '/in/rycarvalho',
      github: '@hizzui',
      cta: 'Always open to conversations!',
    },
  };

  const c = contact[lang];

  return (
    <div className="w-full h-full flex flex-col gap-3 text-center justify-center items-center py-12 px-6">
      <p className="text-base font-bold">{c.title}</p>
      <p className="text-xs">{c.email}</p>
      <div className="flex gap-3 justify-center items-center">
        <a
          href={`https://www.linkedin.com/in/rycarvalho`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-3 py-2 bg-blue-600 text-white text-xs font-bold rounded-md border-2 border-black shadow-[2px_2px_0_rgba(0,0,0,0.5)] hover:shadow-[1px_1px_0_rgba(0,0,0,0.3)] hover:translate-x-0.5 hover:translate-y-0.5 transition-all duration-150"
        >
          <Linkedin size={16} />
          LinkedIn
        </a>
        <a
          href={`https://github.com/hizzui`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-3 py-2 bg-black text-white text-xs font-bold rounded-md border-2 border-black shadow-[2px_2px_0_rgba(0,0,0,0.5)] hover:shadow-[1px_1px_0_rgba(0,0,0,0.3)] hover:translate-x-0.5 hover:translate-y-0.5 transition-all duration-150"
        >
          <Github size={16} />
          GitHub
        </a>
      </div>
      <p className="text-xs opacity-75">{c.cta}</p>
    </div>
  );
};
