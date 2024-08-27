import { create } from 'zustand';

type CreateWorkSpaceValues = {
  name: string; // ワークスペースの名前
  imageUrl: string; // ワークスペースの画像URL
  updateImageUrl: (url: string) => void; // 画像URLを更新する関数
  updateValues: (values: Partial<CreateWorkSpaceValues>) => void; // 複数の値を更新する関数
  currentStep: number; // 現在のステップ
  setCurrentStep: (step: number) => void; // ステップを更新する関数
};

/**
 * ワークスペースの値を管理するためのカスタムフック
 */
export const useCreateWorkspaceValues = create<CreateWorkSpaceValues>((set) => ({
  name: '', // 初期値は空文字
  imageUrl: '', // 初期値は空文字
  updateImageUrl: (url) => set({ imageUrl: url }), // 画像URLを更新
  updateValues: (values) => set(values), // 複数の値を更新
  currentStep: 1, // 初期ステップは1
  setCurrentStep: (step) => set({ currentStep: step }), // ステップを更新
}));
