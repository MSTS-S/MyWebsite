import React from "react";
import { publicationData, HIGHLIGHT_AUTHORS } from "./PublicationData";

// ===============================
// ユーティリティ
// ===============================

function renderAuthor(name) {
  if (HIGHLIGHT_AUTHORS.includes(name)) {
    return <span style={{ textDecoration: "underline" }}>{name}</span>;
  }
  return name;
}

function formatAuthors(authors = []) {
  const isJapanese = /[ぁ-んァ-ン一-龥]/.test(authors.join(""))

  // 日本語の場合
  if (isJapanese) {
    return authors.map((a, i) => (
      <React.Fragment key={i}>
        {renderAuthor(a)}
        {i < authors.length - 1 ? "，" : ""}
      </React.Fragment>
    ));
  }



  // 英語の場合
  if (authors.length === 1) {
    return renderAuthor(authors[0]);
  }

  if (authors.length === 2) {
    return (
      <>
        {renderAuthor(authors[0])} and {renderAuthor(authors[1])}
      </>
    );
  }
  
  return (
    <>
      {authors.slice(0, -1).map((a, i) => (
        <React.Fragment key={i}>
          {renderAuthor(a)}{", "}
        </React.Fragment>
      ))}
      {"and "}{renderAuthor(authors[authors.length - 1])}
    </>
  );
}

// ===============================
// 共通パーツ
// ===============================

function DoiLink({ doi }) {
  if (!doi) return null;
  return (
      <> doi: <a href={`https://doi.org/${doi}`} target="_blank" rel="noopener noreferrer">{doi}</a></>
  );
}

function UrlLink({ url }) {
  if (!url) return null;
  return (
      <> URL: <a href={url} target="_blank" rel="noopener noreferrer">{url}</a></>
  );
}

// ===============================
// カテゴリ別アイテムコンポーネント
// ===============================

function JournalItem({ item }) {
  const authors = formatAuthors(item.author);
  const volume = item.volume ? `, vol. ${item.volume}` : "";
  const number = item.number ? `(${item.number})` : "";
  const pages = item.pages ? `, pp. ${item.pages}` : "";

  return (
    <li style={{ padding: "10px 0", borderBottom: "1px solid #eee" }}>
      <div style={{ fontSize: 15, lineHeight: 1.7 }}>
        {authors}.{" "}
        <>"{item.title}," {" "}</>
        <em>{item.journal}</em>
        {volume}{number}{pages}, {item.year}.
        <DoiLink doi={item.doi} />
      </div>
    </li>
  );
}

function ProceedingsItem({ item }) {
  const authors = formatAuthors(item.author);
  const pages = item.pages ? `, pp. ${item.pages}` : "";

  return (
    <li style={{ padding: "10px 0", borderBottom: "1px solid #eee" }}>
      <div style={{ fontSize: 15, lineHeight: 1.7 }}>
        {authors}.{" "}
        "{item.title}," {" "}
        <em>{item.booktitle}</em>
        {pages}, {item.year}.
        <DoiLink doi={item.doi} />
        <UrlLink url={item.url} />
      </div>
    </li>
  );
}

function DemoItem({ item }) {
  const authors = formatAuthors(item.author);

  return (
    <li style={{ padding: "10px 0", borderBottom: "1px solid #eee" }}>
      <div style={{ fontSize: 15, lineHeight: 1.7 }}>
        {authors}.{" "}
        "{item.title}," {" "}
        <em>{item.venue}</em>
        , {item.year}.
        <DoiLink doi={item.doi} />
        <UrlLink url={item.url} />
      </div>
    </li>
  );
}

function OthersItem({ item }) {
  return (
    <li style={{ padding: "10px 0", borderBottom: "1px solid #eee" }}>
      <div style={{ fontSize: 15, lineHeight: 1.7 }}>
        {item.title}.{" "}
        {item.year}.{" "}
        {item.note}
      </div>
    </li>
  );
}

// ===============================
// セクション
// ===============================

function PublicationSection({ title, items, Component }) {
  if (!items || items.length === 0) return null;

  return (
    <section style={{ margin: "18px 0 26px" }}>
      <h3 style={{ margin: "0 0 10px", fontSize: 24 }}>{title}</h3>
      <ul style={{ margin: 0, padding: 0, listStyle: "none" }}>
        {items.map((it) => (
          <Component key={it.id} item={it} />
        ))}
      </ul>
    </section>
  );
}

// ===============================
// メイン
// ===============================

export default function PublicationList({ items }) {
  const SECTIONS = [
    { title: "論文誌（Journal）",          items: items.journal,     Component: JournalItem },
    { title: "学会論文集（Proceedings）",   items: items.proceedings, Component: ProceedingsItem },
    { title: "デモ展示（Exhibition）",      items: items.demo,        Component: DemoItem },
    { title: "その他（Others）",            items: items.others,      Component: OthersItem },
  ];

  return (
    <div>
      {SECTIONS.map(({ title, items, Component }) => (
        <PublicationSection key={title} title={title} items={items} Component={Component} />
      ))}
    </div>
  );
}