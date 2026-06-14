import UnifiedProjectDetail from '../../components/project/UnifiedProjectDetail';
import { aProjects } from '../../data/projects';

interface A2ProjectProps {
  projectIndex: number;
}

export default function A2Project({ projectIndex }: A2ProjectProps) {
  return <UnifiedProjectDetail project={aProjects[projectIndex]} backRoute="/projects" />;
}
