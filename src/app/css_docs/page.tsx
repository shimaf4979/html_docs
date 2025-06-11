"use client";

import React, { useState } from "react";
import { Search, ChevronUp, ExternalLink, BookOpen } from "lucide-react";
import { cssSections } from "../../../public/cssData.js";
import Link from "next/link";

interface PropertyInfo {
  property: string;
  description: string;
  values: string[];
  example?: string;
}

const getMDNUrl = (propInfo: PropertyInfo) => {
  const prop = propInfo.property.toLowerCase();

  // セレクタの処理
  if (
    prop === "*" ||
    prop === "element" ||
    prop === ".class" ||
    prop === "#id" ||
    prop === "[attribute]"
  ) {
    return "https://developer.mozilla.org/ja/docs/Web/CSS/CSS_selectors";
  }
  if (prop === ":pseudo-class") {
    return "https://developer.mozilla.org/ja/docs/Web/CSS/Pseudo-classes";
  }
  if (prop === "::pseudo-element") {
    return "https://developer.mozilla.org/ja/docs/Web/CSS/Pseudo-elements";
  }
  if (prop === "combinators") {
    return "https://developer.mozilla.org/ja/docs/Web/CSS/CSS_selectors/Combinators";
  }

  // メディアクエリの処理
  if (prop === "@media") {
    return "https://developer.mozilla.org/ja/docs/Web/CSS/Media_queries";
  }
  if (prop === "メディア特性") {
    return "https://developer.mozilla.org/ja/docs/Web/CSS/Media_queries/Using_media_queries#メディア特性";
  }

  // キーフレームの処理
  if (prop === "@keyframes") {
    return "https://developer.mozilla.org/ja/docs/Web/CSS/@keyframes";
  }

  // 特殊な関数や単位の処理
  if (prop === "min() / max()") {
    return "https://developer.mozilla.org/ja/docs/Web/CSS/min";
  }
  if (prop === "clamp()") {
    return "https://developer.mozilla.org/ja/docs/Web/CSS/clamp";
  }
  if (prop === "calc()") {
    return "https://developer.mozilla.org/ja/docs/Web/CSS/calc";
  }
  if (prop === "vw / vh / vmin / vmax") {
    return "https://developer.mozilla.org/ja/docs/Web/CSS/length#ビューポートの長さの単位";
  }
  if (prop === "css variables") {
    return "https://developer.mozilla.org/ja/docs/Web/CSS/Using_CSS_custom_properties";
  }

  // 複合プロパティの処理
  const propertyMap: { [key: string]: string } = {
    "top / right / bottom / left": "top",
    "min-width / max-width": "min-width",
    "min-height / max-height": "min-height",
    "grid-gap / gap": "gap",
  };

  const targetProp = propertyMap[prop] || prop;

  // 通常のプロパティの処理
  return `https://developer.mozilla.org/ja/docs/Web/CSS/${targetProp}`;
};

const CSSReference = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredSections = cssSections
    .map((section) => ({
      ...section,
      properties: section.properties.filter(
        (prop) =>
          prop.property.toLowerCase().includes(searchTerm.toLowerCase()) ||
          prop.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
          prop.values.some((value) =>
            value.toLowerCase().includes(searchTerm.toLowerCase())
          )
      ),
    }))
    .filter((section) => section.properties.length > 0);

  return (
    <div className='min-h-screen bg-gray-50'>
      {/* ヘッダー */}
      <header className='bg-white shadow-sm border-b sticky top-0 z-50'>
        <div className='max-w-6xl mx-auto px-4 py-4'>
          <div className='flex items-center gap-4 mb-4'>
            <Link href='/' className='hover:opacity-80 transition-opacity'>
              <div>
                <h1 className='text-2xl md:text-3xl font-bold text-gray-900'>
                  CSSプロパティリファレンス
                </h1>
                <p className='text-gray-600 text-sm md:text-base'>
                  CSSプロパティと値の完全リスト
                </p>
              </div>
            </Link>
          </div>

          {/* 検索バー */}
          <div className='relative'>
            <Search className='absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5' />
            <input
              type='text'
              placeholder='プロパティ名、説明、値で検索...'
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className='w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all'
            />
          </div>
        </div>
      </header>

      {/* 検索結果数 */}
      {searchTerm && (
        <div className='max-w-6xl mx-auto px-4 py-2'>
          <p className='text-sm text-gray-600'>
            {filteredSections.reduce(
              (acc, section) => acc + section.properties.length,
              0
            )}{" "}
            件の結果が見つかりました
          </p>
        </div>
      )}

      {/* 目次 */}

      {!searchTerm && (
        <div className='max-w-6xl mx-auto px-4 py-4'>
          {cssSections.map((section) => (
            <div key={section.id} className='mb-2 flex items-start gap-2'>
              <h3 className='text-sm font-medium text-gray-900 whitespace-nowrap'>
                {section.title} :
              </h3>
              <div className='flex flex-wrap gap-1 text-sm text-gray-600'>
                {section.properties.map((prop, index) => (
                  <React.Fragment key={index}>
                    <a
                      href={`#${section.id}`}
                      className='text-blue-600 hover:text-blue-800 hover:underline'
                    >
                      {prop.property}
                    </a>
                    {index < section.properties.length - 1 && (
                      <span className='text-gray-400'>•</span>
                    )}
                  </React.Fragment>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}

      {/* プロパティセクション */}
      <main className='max-w-6xl mx-auto px-4 pb-12'>
        {filteredSections.length === 0 ? (
          <div className='text-center py-12'>
            <BookOpen className='w-16 h-16 text-gray-300 mx-auto mb-4' />
            <h3 className='text-lg font-medium text-gray-900 mb-2'>
              該当するプロパティが見つかりませんでした
            </h3>
            <p className='text-gray-600'>
              別のキーワードで検索してみてください
            </p>
          </div>
        ) : (
          filteredSections.map((section) => (
            <section key={section.id} id={section.id} className='mb-8'>
              <div className='rounded-lg border border-gray-200 overflow-hidden shadow-sm'>
                <div className='w-full px-6 py-4 bg-white flex items-center justify-between border-b'>
                  <h2 className='text-xl font-bold text-gray-800'>
                    {section.title}
                  </h2>
                </div>

                <div
                  id={`section-${section.id}`}
                  className='p-6 bg-white'
                  role='region'
                  aria-labelledby={`section-title-${section.id}`}
                >
                  <div className='grid gap-2'>
                    {section.properties.map((propInfo, index) => (
                      <div
                        key={index}
                        className='hover:bg-gray-50 rounded-lg p-2 transition-colors'
                      >
                        <div className='flex flex-col gap-0.5'>
                          <div className='flex items-center gap-1.5'>
                            <code className='bg-gray-100 px-1.5 py-0.5 rounded text-blue-600 font-mono text-sm whitespace-nowrap'>
                              {propInfo.property}
                            </code>
                            <p className='text-gray-700 font-medium text-sm'>
                              {propInfo.description}
                            </p>
                            <a
                              href={getMDNUrl(propInfo)}
                              target='_blank'
                              rel='noopener noreferrer'
                              className='text-blue-600 hover:text-blue-800 transition-colors'
                              title='MDNで詳細を見る'
                            >
                              <ExternalLink className='w-4 h-4' />
                            </a>
                          </div>
                          {propInfo.values.length > 0 && (
                            <div className='flex items-center gap-1 pl-0.5'>
                              <div className='flex flex-wrap gap-1 mt-2'>
                                {propInfo.values.map((value, valueIndex) => (
                                  <code
                                    key={valueIndex}
                                    className='bg-green-50 text-green-700 px-1 py-0.5 rounded text-xs font-mono'
                                  >
                                    {value}
                                  </code>
                                ))}
                              </div>
                            </div>
                          )}
                          {propInfo.example && (
                            <div className='mt-2'>
                              <code className='bg-gray-100 px-1.5 py-0.5 rounded text-gray-600 font-mono text-xs'>
                                {propInfo.example}
                              </code>
                            </div>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </section>
          ))
        )}
      </main>

      {/* フッター */}
      <footer className='bg-white border-t'>
        <div className='max-w-6xl mx-auto px-4 py-8'>
          <div className='text-center text-gray-600'>
            <div className='flex items-center justify-center gap-2 mb-2'>
              <BookOpen className='w-5 h-5' />
              <p className='font-medium'>CSSプロパティリファレンス</p>
            </div>
            <p className='text-sm'>最新のCSS仕様に基づいて作成されています</p>
            <div className='flex items-center justify-center gap-4 mt-4 text-sm'>
              <a
                href='https://developer.mozilla.org/ja/docs/Web/CSS'
                target='_blank'
                rel='noopener noreferrer'
                className='flex items-center gap-1 text-blue-600 hover:text-blue-800 transition-colors'
              >
                <ExternalLink className='w-4 h-4' />
                MDN Web Docs
              </a>
              <a
                href='https://www.w3.org/TR/CSS/'
                target='_blank'
                rel='noopener noreferrer'
                className='flex items-center gap-1 text-blue-600 hover:text-blue-800 transition-colors'
              >
                <ExternalLink className='w-4 h-4' />
                CSS仕様書
              </a>
            </div>
          </div>
        </div>
      </footer>

      {/* トップに戻るボタン */}
      <button
        onClick={() => window.scrollTo({ top: 0 })}
        className='fixed bottom-6 right-6 bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-700 transition-colors'
        aria-label='トップに戻る'
      >
        <ChevronUp className='w-6 h-6' />
      </button>
    </div>
  );
};

export default CSSReference;
