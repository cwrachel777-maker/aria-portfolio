import UnifiedProjectDetail from '../../components/project/UnifiedProjectDetail';
import { cProjects } from '../../data/projects';

interface CProjectProps {
  projectIndex: number;
}

export default function CProject({ projectIndex }: CProjectProps) {
  return <UnifiedProjectDetail project={cProjects[projectIndex]} backRoute="/projects" />;
}
