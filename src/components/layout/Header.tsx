import { useNavigate } from 'react-router-dom';
import { useActiveSection } from '../../hooks/useActiveSection';
import { Section } from '../../types';

const navItems: { label: string; section: Section; path: string }[] = [
  { label: '首页', section: 'home', path: '/' },
  { label: '能力地图', section: 'ability', path: '/ability' },
  { label: '项目经历', section: 'projects', path: '/projects' },
  { label: '市场洞察', section: 'insights', path: '/insights' },
  { label: '关于', section: 'about', path: '/about' }
];

export default function Header() {
  const navigate = useNavigate();
  const activeSection = useActiveSection(['home', 'ability', 'projects', 'insights', 'about']);

  const handleNavClick = (section: Section, path: string) => {
    navigate(path);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
      <div className="max-w-6xl mx-auto px-6 py-4">
        <nav className="flex items-center justify-between">
          <div className="text-xl font-bold tracking-tight cursor-pointer" onClick={() => navigate('/')}>Aria Portfolio</div>

          <ul className="flex items-center gap-8">
            {navItems.map((item) => (
              <li key={item.section}>
                <button
                  onClick={() => handleNavClick(item.section, item.path)}
                  className={`text-sm font-medium transition-colors hover:text-black ${
                    activeSection === item.section
                      ? 'text-black'
                      : 'text-gray-500'
                  }`}
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
