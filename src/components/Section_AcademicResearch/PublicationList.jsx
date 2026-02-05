// src/components/PublicationList.jsx
import React, { useMemo } from "react";

function sortByYearDesc(items = []) {
    return [...items].sort((a, b) => (b.year ?? 0) - (a.year ?? 0));
}

function containsJapanese(text = "") {
    return /[ぁ-んァ-ン一-龥]/.test(text);
}

function formatAuthors(authors = []) {
    if (authors.length === 0) return "";

    const joined = authors.join(" ");
    const isJapanese = containsJapanese(joined);

    if (isJapanese) {
        // 日本語：読点で並べる（最後も「、」のままが自然）
        return authors.join("，");
    }

    // 英語：and形式
    if (authors.length === 1) return authors[0];
    if (authors.length === 2) return `${authors[0]} and ${authors[1]}`;
    return `${authors.slice(0, -1).join(", ")}, and ${authors[authors.length - 1]}`;
}

function PublicationItem({ item }) {
    const authorsText = formatAuthors(item.author || item.authors || []);

    const venueText =
        item.journal || item.booktitle || item.venue || "";

    const volumeText = item.volume ? `, ${item.volume}` : "";
    const numberText = item.number ? `(${item.number})` : "";
    const pagesText = item.pages ? `:${item.pages}` : "";
    const yearText = item.year ? `, ${item.year}` : "";

    const doiText = item.doi ? item.doi : null;
    const doiLink = doiText ? `https://doi.org/${doiText}` : null;

    const urlText = item.url || null;

    return (
        <li style={{ padding: "10px 0", borderBottom: "1px solid #eee" }}>
            <div style={{ fontSize: 15, lineHeight: 1.7 }}>
                {/* Authors */}
                <span style={{ fontStyle: "normal" }}>{authorsText}.</span>{" "}

                {/* Title */}
                <span style={{ fontStyle: "normal" }}>"{item.title},"</span>{" "}

                {/* Journal / Proceedings */}
                <span style={{ fontStyle: "italic" }}>{venueText}</span>

                {/* volume(number):pages, year */}
                <span>
                    {volumeText}
                    {numberText}
                    {pagesText}
                    {yearText}.
                </span>

                {/* note */}
                {item.note ? (
                    <span style={{ marginLeft: 6 }}>
                        {item.note}.
                    </span>
                ) : null}

                {/* DOI */}
                {doiText ? (
                    <span style={{ marginLeft: 6 }}>
                        doi:{" "}
                        <a href={doiLink} target="_blank" rel="noopener noreferrer">
                            {doiText}
                        </a>
                    </span>
                ) : null}

                {urlText ? (
                    <span style={{ marginLeft: 6 }}>
                        URL:{" "}
                        <a href={urlText} target="_blank" rel="noopener noreferrer">
                            {urlText}
                        </a>
                    </span>
                ) : null}
            </div>
        </li>
    );
}


function PublicationSection({ title, items }) {
    if (!items || items.length === 0) return null;

    return (
        <section style={{ margin: "18px 0 26px" }}>
            <h3 style={{ margin: "0 0 10px", fontSize: 24 }}>{title}</h3>
            <ul style={{ margin: 0, padding: 0, listStyle: "none" }}>
                {items.map((it) => (
                    <PublicationItem key={it.id} item={it} />
                ))}
            </ul>
        </section>
    );
}

export default function PublicationList({ groups }) {
    // groups = { journal:[], proceedings:[], demo:[], others:[] }
    const sorted = useMemo(() => {
        return {
            journal: sortByYearDesc(groups?.journal ?? []),
            proceedings: sortByYearDesc(groups?.proceedings ?? []),
            demo: sortByYearDesc(groups?.demo ?? []),
            others: sortByYearDesc(groups?.others ?? []),
        };
    }, [groups]);

    return (
        <div>
            <PublicationSection title="論文誌（Journal）" items={sorted.journal} />
            <PublicationSection title="学会論文集（Proceedings）" items={sorted.proceedings} />
            <PublicationSection title="デモ展示（Exhibition）" items={sorted.demo} />
            <PublicationSection title="その他（Others）" items={sorted.others} />
        </div>
    );
}
