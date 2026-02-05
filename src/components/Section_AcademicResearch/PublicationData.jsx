// src/components/PublicationData.jsx
// ここは「データ定義だけ」。UI/スタイルは一切書かない。

export const journal = [
  {
    id: "Serizawa2026TVCG",
    entryType: "article",
    author: [
      "Masatoshi Serizawa",
      "Peerawat Pannattee",
      "Yosuke Fukuchi",
      "Vibol Yem",
      "Yasushi Ikei",
      "Nobuyuki Nishiuchi"
    ],
    title: "Dual Body Sensation: Effects of Visio-Tactile Presentation Methods in Parallel Agent Control",
    journal: "IEEE Transactions on Visualization and Computer Graphics (IEEE TVCG)",
    year: 2026,
    volume: null,
    number: null,
    pages: null,
    doi: null,
    note: "Accepted for publication (to appear)",
    links: {
      doi: null,
      pdf: null,
      project: null,
    },
  },
];


export const proceedings = [
  {
    id: "WHC2025",
    entryType: "inproceedings",
    author: [
      "Masatoshi Serizawa",
      "Yosuke Fukuchi",
      "Vibol Yem",
      "Yasushi Ikei",
      "Nobuyuki Nishiuchi"
    ],
    title: "Sensation of Dual Body through Visual-Haptic Stimulation by Two Remote Spaces",
    venue: "IEEE World Haptics Conference 2025 (WHC2025)",
    year: 2025,
  },
  {
    id: "ICAT2024",
    entryType: "inproceedings",
    author: [
      "Masatoshi Serizawa",
      "Yosuke Fukuchi",
      "Vibol Yem",
      "Yasushi Ikei",
      "Nobuyuki Nishiuchi",
    ],
    title: "Study on multiple-virtual body perception: Effects of different spatial presentation and command input methods",
    booktitle: "The 34th International Conference on Artificial Reality and Telexistence & The 29th Eurographics Symposium on Virtual Environments (ICAT-EGVE 2024)",
    editor: ["Takeshi Tanabe", "Vibol Yem"],
    year: 2024,
    publisher: "The Eurographics Association",
    issn: "1727-530X",
    isbn: "978-3-03868-246-2",
    doi: "10.2312/egve.20241400",
  },
  {
    id: "VRSJ2024",
    entryType: "inproceedings",
    author: [
      "芹澤 尚舜",
      "福地 庸介",
      "ヤェム ヴィボル",
      "池井 寧",
      "西内 信之",
    ],
    title: "空間提示手法と指令入力手法の違いがVR空間での多重身体認知に及ぼす影響",
    booktitle: "第29回日本バーチャルリアリティ学会大会 (VRSJ 2024)",
    year: 2024,
    url: "https://conference.vrsj.org/ac2024/program/doc/3D2-04.pdf",
  },
  {
    id: "ErgoDesignConcept2023",
    entryType: "inproceedings",
    author: [
      "芹澤 尚舜",
      "ヤェム ヴィボル",
      "池井 寧",
      "西内 信之",
    ],
    title: "複数空間融合手法とアバタ入力インタフェースの違いによるVR空間での二重身体認知評価の提案",
    booktitle: "日本人間工学会 アーゴデザイン部会 コンセプト事例発表会 2023",
    year: 2023,
  },
];


export const demo = [
    {
    id: "SIGGRAPHAsia2024Tokyo",
    entryType: "exhibition",
    author: [
      "Yukiya Ojima", 
      "Shogo Okamoto", 
      "Vibol Yem", 
      "Yasushi Ikei",
    ],
    title: "SIGGRAPH Asia 2024 Tokyo",
    venue: "SIGGRAPH Asia 2024 Tokyo",
    year: 2024,
    doi: "10.1145/3681755.3688940",
  },

  {
    id: "URCF2024",
    entryType: "exhibition",
    author: ["東京大学", "東京都立大学"],
    title: "XR遠隔対話システム",
    venue:
      "超臨場感コミュニケーション産学官フォーラム (URCF) シンポジウム 2024",
    year: 2024,
    location: "Tokyo, Japan",
    url: "https://www.urcf.jp/news/4556/",
  },

  {
    id: "URCF2023",
    entryType: "exhibition",
    author: ["東京都立大学", "筑波大学", "東京大学"],
    title: "複数の実空間のVR歩行体験とマルチ視聴が可能なXRメタバース",
    venue:
      "超臨場感コミュニケーション産学官フォーラム (URCF) シンポジウム 2023",
    year: 2023,
    location: "Tokyo, Japan",
    url: "https://www.urcf.jp/news/4150/",
  },

  {
    id: "VRSJ2023Demo",
    entryType: "exhibition",
    author: [
      "小島 優希也",
      "島田 匠悟",
      "米田 悠人",
      "芹澤 尚舜",
      "西内 信之",
      "池井 寧",
      "ヤェム ヴィボル"
    ],
    title: "複数リアル空間を体験するXRメタバース",
    venue: "第28回日本バーチャルリアリティ学会大会（VRSJ 2023）",
    year: 2023,
    location: "Tokyo, Japan",
    url: "https://conference.vrsj.org/ac2023/program/doc/P-02.pdf",
  },
];


export const others = [
  {
    id: "RA2022MetaverseAvatar",
    entryType: "research_assistant",
    author: ["メタバース内E-Commerceに向けた信頼性の高いRealistic-Avatar研究プロジェクト"],
    venue: "東京都立大学",
    year: 2022,
    note: "Research Assistant",
  },
];


// 必要ならまとめて渡せる形も用意（任意）
export const publicationGroups = {
  journal,
  proceedings,
  demo,
  others,
};
