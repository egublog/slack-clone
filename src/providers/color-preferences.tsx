'use client';

import { createContext, FC, ReactNode, useContext, useEffect, useState } from 'react';

type Colors = 'blue' | 'green' | '';

type ColorPreferencesContext = {
  color: Colors;
  selectColor: (color: Colors) => void;
};

const ColorPreferencesContext = createContext<ColorPreferencesContext | undefined>(undefined);

/**
 * カラープリファレンスを管理するためのカスタムフック
 * - コンテキストが存在しない場合、エラーをスロー
 * - カラープリファレンスを提供するプロバイダー内で使用する必要がある
 */
export const useColorPreferences = () => {
  const context = useContext(ColorPreferencesContext);
  if (!context) {
    throw new Error('useColorPreferences must be used within a ColorPreferencesProvider');
  }
  return context;
};

/**
 * カラープリファレンスを提供するコンテキストプロバイダー
 * - ローカルストレージから選択された色を取得し、状態として管理
 * - 色が変更されるたびにローカルストレージを更新
 * - マウントされるまでnullを返す
 */
export const ColorPreferencesProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [color, setColor] = useState<Colors>(() => {
    const storedColor =
      typeof localStorage !== 'undefined' ? localStorage.getItem('selectedColor') : null;
    return (storedColor as Colors) || '';
  });

  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    localStorage.setItem('selectedColor', color);
    setIsMounted(true);
  }, [color]);

  const selectColor = (selectedColor: Colors) => setColor(selectedColor);

  const value: ColorPreferencesContext = {
    color,
    selectColor,
  };

  if (!isMounted) return null;

  return (
    <ColorPreferencesContext.Provider value={value}>{children}</ColorPreferencesContext.Provider>
  );
};
