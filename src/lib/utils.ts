import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

/**
 * クラス名を結合し、重複や競合を解決するためのユーティリティ関数
 * - `clsx`を使用してクラス名を結合
 * - `twMerge`を使用してTailwind CSSのクラス名の競合を解決
 * @param inputs - 結合するクラス名の配列
 * @returns 結合されたクラス名の文字列
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
