import { create } from 'zustand';

type CreateWorkSpaceValues = {
  name: string;
  imageUrl: string;
  updateImageUrl: (url: string) => void;
  updateValues: (values: Partial<CreateWorkSpaceValues>) => void;
  currentStep: number;
  setCurrentStep: (step: number) => void;
};

export const useCreateWorkspaceValues = create<CreateWorkSpaceValues>(
  (set) => ({
    name: '',
    imageUrl: '',
    updateImageUrl: (url) => set({ imageUrl: url }),
    updateValues: (values) => set(values),
    currentStep: 1,
    setCurrentStep: (step) => set({ currentStep: step }),
  }),
);
