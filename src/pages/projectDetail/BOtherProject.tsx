import UnifiedProjectDetail from '../../components/project/UnifiedProjectDetail';
import { bProjects } from '../../data/projects';

interface BOtherProjectProps {
  projectIndex: number;
}

export default function BOtherProject({ projectIndex }: BOtherProjectProps) {
  return <UnifiedProjectDetail project={bProjects[projectIndex]} backRoute="/projects" />;
}
