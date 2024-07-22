'use client';

import Typography from '@/components/ui/typography';
import { useCreateWorkspaceValues } from '@/hooks/create-workspace-values';

const CreateWorkspace = () => {
  const { currentStep } = useCreateWorkspaceValues();

  let stepInView = null;

  switch (currentStep) {
    case 1:
      stepInView = <Step1 />;
      break;
    case 2:
      stepInView = <Step2 />;
      break;
    default:
      stepInView = <Step1 />;
  }

  return (
    <div className="w-screen h-screen grid place-content-center bg-neutral-800 text-white">
      <div className="p-3 max-w-[550px]">
        <Typography
          text={`step ${currentStep} of 2`}
          variant="p"
          className="text-neutral-400"
        />

        {stepInView}
      </div>
    </div>
  );
};

export default CreateWorkspace;

const Step1 = () => {
  const { name, updateValues, setCurrentStep } = useCreateWorkspaceValues();
  console.log('Step1');
  return (
    <>
      <Typography
        text="What is the name of your company or team"
        className="my-4"
      />
    </>
  );
};

const Step2 = () => {
  return <></>;
};
