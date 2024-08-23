import { Button } from '@/components/ui/button';
import { FaPlus } from 'react-icons/fa';
import Typography from '@/components/ui/typography';

const CreateWorkspace = () => {
  return (
    <div className="flex items-center gap-2 p-2">
      <Button variant="secondary">
        <FaPlus />
      </Button>
      <Typography variant="p" text="Add Workspace" />
    </div>
  );
};

export default CreateWorkspace;
