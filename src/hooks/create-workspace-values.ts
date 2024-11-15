import { create } from 'zustand';

type CreateWorkSpaceValues = {
  // ワークスペースの名前
  name: string;
  // ワークスペースの画像URL
  imageUrl: string;
  // 画像URLを更新する関数
  updateImageUrl: (url: string) => void;
  // 複数の値を更新する関数
  updateValues: (values: Partial<CreateWorkSpaceValues>) => void;
  // 現在のステップ
  currentStep: number;
  // ステップを更新する関数
  setCurrentStep: (step: number) => void;
};

/**
 * ワークスペースの値を管理するためのカスタムフック
 */
export const useCreateWorkspaceValues = create<CreateWorkSpaceValues>((set) => ({
  name: '',
  imageUrl: '',
  updateImageUrl: (url) => set({ imageUrl: url }),
  updateValues: (values) => set(values),
  currentStep: 1,
  setCurrentStep: (step) => set({ currentStep: step }),
}));
