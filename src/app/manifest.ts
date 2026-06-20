import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Aphasia Reverbis | Terapist Kontrollü Dijital Afazi Rehabilitasyonu",
    short_name: "Aphasia Reverbis",
    description:
      "Afazi rehabilitasyonunu dijitalleştiren terapist kontrollü platform. TÜBİTAK destekli, KVKK uyumlu, veri odaklı.",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#0052CC",
    lang: "tr-TR",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
      {
        src: "/logo-512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}
