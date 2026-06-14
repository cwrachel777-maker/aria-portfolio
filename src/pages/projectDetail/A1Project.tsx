import UnifiedProjectDetail from '../../components/project/UnifiedProjectDetail';
import { aProjects } from '../../data/projects';

export default function A1Project() {
  return <UnifiedProjectDetail project={aProjects[0]} backRoute="/projects" />;
}
