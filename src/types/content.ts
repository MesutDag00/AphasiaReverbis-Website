// 📁 src/types/content.ts
// İçerik (content) katmanının paylaşılan tip sözleşmeleri. React'tan bağımsız saf tipler.

/** Marka tonu — tek kaynak (bkz. src/lib/tones.ts). */
export type ToneColor = "trust-blue" | "healing-teal" | "ink";

/** Aktivite kategorisini temsil eden ikon anahtarı (registry ile çözülür). */
export type ActivityIconKey =
  | "word-access"
  | "syntax"
  | "comprehension"
  | "production"
  | "asha"
  | "reading-writing";

/** 24 bilimsel aktivite — kategori bazlı gruplama. */
export type ActivityCategory = {
  category: string;
  count: number;
  color: ToneColor;
  activities: string[];
  iconKey: ActivityIconKey;
};

/** 8 boyutlu analiz paneli kartı. */
export type AnalysisPanel = {
  panel: string;
  title: string;
  desc: string;
  tone: ToneColor;
};

/** Güvenlik & uyumluluk özelliği. */
export type SecurityFeature = {
  iconKey: string;
  title: string;
  desc: string;
};
