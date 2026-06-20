// 📁 src/content/solution.ts
// /solution sayfasının saf içerik verisi (React bağımsız). Sunum sections/solution'da.

import type { ActivityCategory, AnalysisPanel, SecurityFeature } from "@/types/content";

/** Danışan & Aile bölümü öne çıkanlar. */
export const clientHighlights: string[] = [
  "Kişiselleştirilmiş günlük program",
  "Aile rehberlik modülü",
  "%94 egzersiz uyum oranı (pilot)",
];

/** Terapist bölümü öne çıkanlar. */
export const therapistHighlights: string[] = [
  "Gerçek zamanlı egzersiz verisi",
  "8 boyutlu ilerleme analizi",
  "Otomatik PDF rapor",
];

/** 24 Bilimsel Aktivite — 6 kategori. */
export const activities: ActivityCategory[] = [
  {
    category: "Sözcük Erişimi",
    count: 4,
    color: "trust-blue",
    activities: ["Görsel Adlandırma", "Kademeli İpucu", "Bellek Tekrarı", "Duygusal Sözcük"],
    iconKey: "word-access",
  },
  {
    category: "Sözdizim & Cümle",
    count: 4,
    color: "healing-teal",
    activities: ["Sözdizim Tamamlama", "Bağlamlı Kelime", "Sözdizim Seçimi", "Kategori Gruplama"],
    iconKey: "syntax",
  },
  {
    category: "Anlama",
    count: 4,
    color: "trust-blue",
    activities: ["Ses-Görsel Eşleştirme", "Metin Dinleme", "Cümle-Resim Eşleştirme", "Nesne Gösterme"],
    iconKey: "comprehension",
  },
  {
    category: "Konuşma Üretimi",
    count: 4,
    color: "healing-teal",
    activities: ["MOR Sesli Okuma", "Konuşma Hızı Metronomu", "Akıcılık Testi", "Senaryo Tekrarı"],
    iconKey: "production",
  },
  {
    category: "ASHA Kanıt Temelli",
    count: 5,
    color: "trust-blue",
    activities: ["VNeST – Fiil Ağı", "PCA – Fonolojik Analiz", "RET – Yanıt Genişletme", "Minimal Çift Ayrımı", "Tekrar Köprüsü"],
    iconKey: "asha",
  },
  {
    category: "Okuma & Yazma",
    count: 3,
    color: "healing-teal",
    activities: ["Harf-Ses Eşleştirme", "Okuma Anlama", "Dijital Günlük"],
    iconKey: "reading-writing",
  },
];

/** 8 Boyutlu İlerleme Analizi panelleri. */
export const analysisPanels: AnalysisPanel[] = [
  { panel: "A", title: "Genel Gelişim", desc: "Haftalık trend, 6 alt skor ve bütünleşik rehabilitasyon skoru", tone: "trust-blue" },
  { panel: "B", title: "Kelime Analizi", desc: "Kelime erişimi aktiviteleri, hece kırılımı ve kelime başarı oranları", tone: "healing-teal" },
  { panel: "C", title: "Hata Dağılımı", desc: "Fonetik, semantik ve üretim hatalarının otomatik sınıflandırması", tone: "trust-blue" },
  { panel: "E", title: "Bağımsızlık Analizi", desc: "İpucu seviye dağılımı (L0–L3) ile öz-yönetim kapasitesi ölçümü", tone: "healing-teal" },
  { panel: "F", title: "Bellek Kalıcılık", desc: "Aralıklı tekrar ve uzun vadeli konsolidasyon oranı analizi", tone: "trust-blue" },
  { panel: "G", title: "Sözel Akıcılık", desc: "Kelime/dakika metriği ve yaşa-cinsiyete göre normlaştırılmış karşılaştırma", tone: "healing-teal" },
  { panel: "H", title: "Alfabe Ustalık Haritası", desc: "29-harfli Türkçe alfabeye göre harf-ses hakimiyeti ısı haritası", tone: "trust-blue" },
  { panel: "PDF", title: "Otomatik Rapor", desc: "Tüm panelleri tek tıkla PDF raporuna dönüştür; danışana veya kuruma ilet", tone: "ink" },
];

/** Güvenlik & Uyumluluk özellikleri. */
export const securityFeatures: SecurityFeature[] = [
  { iconKey: "shield-check", title: "KVKK Uyumluluğu", desc: "6698 sayılı Kanun kapsamında açık rıza, veri minimizasyonu ve erişim kısıtlaması ilkeleriyle çalışır." },
  { iconKey: "lock", title: "Uçtan Uca Şifreleme", desc: "Tüm veriler TLS 1.3 aktarım ve AES-256 depolama şifrelemesiyle korunur." },
  { iconKey: "users", title: "Rol Tabanlı Erişim", desc: "Her kullanıcı yalnızca kendi yetkisindeki verilere erişebilir. Terapist, yönetici ve danışan rolleri ayrıdır." },
  { iconKey: "clipboard", title: "Denetim Kaydı", desc: "Tüm veri erişimleri ve işlemler zaman damgalı audit log ile kayıt altına alınır." },
];
