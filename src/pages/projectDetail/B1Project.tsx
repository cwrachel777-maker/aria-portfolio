import UnifiedProjectDetail from '../../components/project/UnifiedProjectDetail';
import { bProjects } from '../../data/projects';

export default function B1Project() {
  return <UnifiedProjectDetail project={bProjects[0]} backRoute="/projects" />;
}
