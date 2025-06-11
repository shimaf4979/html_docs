"use client";

import React, { useState } from "react";
import { Search, ChevronUp, ExternalLink, BookOpen } from "lucide-react";
import { reactNextjsSections } from "../../../public/react_nextdocs.js";
import Link from "next/link";

interface MethodInfo {
  feature: string;
  description: string;
  syntax: string;
  example: string;
  notes: string[];
}

interface Section {
  id: string;
  title: string;
  features: MethodInfo[];
}

const getDocUrl = (methodInfo: MethodInfo) => {
  const feature = methodInfo.feature.toLowerCase();

  // React Hooks
  if (feature.startsWith("use")) {
    return "https://react.dev/reference/react";
  }

  // Next.js関連
  if (feature.startsWith("next/")) {
    return "https://nextjs.org/docs";
  }

  // React Router
  if (feature.includes("router") || feature.includes("route")) {
    return "https://reactrouter.com/en/main";
  }

  // 状態管理
  if (
    feature.includes("recoil") ||
    feature.includes("zustand") ||
    feature.includes("jotai")
  ) {
    return "https://recoiljs.org/";
  }

  // スタイリング
  if (
    feature.includes("styled") ||
    feature.includes("tailwind") ||
    feature.includes("css")
  ) {
    return "https://tailwindcss.com/docs";
  }

  // テスト
  if (
    feature.includes("test") ||
    feature.includes("jest") ||
    feature.includes("cypress")
  ) {
    return "https://jestjs.io/docs/getting-started";
  }

  // デフォルトのReactドキュメント
  return "https://react.dev/";
};

const ReactNextReference = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredSections = reactNextjsSections
    .map((section: Section) => ({
      ...section,
      features: section.features.filter(
        (feature: MethodInfo) =>
          feature.feature.toLowerCase().includes(searchTerm.toLowerCase()) ||
          feature.description
            .toLowerCase()
            .includes(searchTerm.toLowerCase()) ||
          feature.syntax.toLowerCase().includes(searchTerm.toLowerCase()) ||
          feature.example.toLowerCase().includes(searchTerm.toLowerCase()) ||
          feature.notes.some((note: string) =>
            note.toLowerCase().includes(searchTerm.toLowerCase())
          )
      ),
    }))
    .filter((section: Section) => section.features.length > 0);

  return (
    <div className='min-h-screen bg-gray-50'>
      {/* ヘッダー */}
      <header className='bg-white shadow-sm border-b sticky top-0 z-50'>
        <div className='max-w-6xl mx-auto px-4 py-4'>
          <div className='flex items-center gap-4 mb-4'>
            <Link href='/' className='hover:opacity-80 transition-opacity'>
              <div>
                <h1 className='text-2xl md:text-3xl font-bold text-gray-900'>
                  React/Next.jsリファレンス
                </h1>
                <p className='text-gray-600 text-sm md:text-base'>
                  React/Next.jsの機能とフックの完全リスト
                </p>
              </div>
            </Link>
          </div>

          {/* 検索バー */}
          <div className='relative'>
            <Search className='absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5' />
            <input
              type='text'
              placeholder='機能名、フック名、説明で検索...'
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
              (acc: number, section: Section) => acc + section.features.length,
              0
            )}{" "}
            件の結果が見つかりました
          </p>
        </div>
      )}

      {/* 目次 */}
      {!searchTerm && (
        <div className='max-w-6xl mx-auto px-4 py-4'>
          {reactNextjsSections.map((section: Section) => (
            <div key={section.id} className='mb-2 flex items-start gap-2'>
              <h3 className='text-sm font-medium text-gray-900 whitespace-nowrap'>
                {section.title} :
              </h3>
              <div className='flex flex-wrap gap-1 text-sm text-gray-600'>
                {section.features.map((feature: MethodInfo, index: number) => (
                  <React.Fragment key={index}>
                    <a
                      href={`#${section.id}`}
                      className='text-blue-600 hover:text-blue-800 hover:underline'
                    >
                      {feature.feature}
                    </a>
                    {index < section.features.length - 1 && (
                      <span className='text-gray-400'>•</span>
                    )}
                  </React.Fragment>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}

      {/* 機能セクション */}
      <main className='max-w-6xl mx-auto px-4 pb-12'>
        {filteredSections.length === 0 ? (
          <div className='text-center py-12'>
            <BookOpen className='w-16 h-16 text-gray-300 mx-auto mb-4' />
            <h3 className='text-lg font-medium text-gray-900 mb-2'>
              該当する機能が見つかりませんでした
            </h3>
            <p className='text-gray-600'>
              別のキーワードで検索してみてください
            </p>
          </div>
        ) : (
          filteredSections.map((section: Section) => (
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
                  <div className='grid gap-4'>
                    {section.features.map(
                      (featureInfo: MethodInfo, index: number) => (
                        <div
                          key={index}
                          className='hover:bg-gray-50 rounded-lg p-4 transition-colors'
                        >
                          <div className='flex flex-col gap-2'>
                            <div className='flex items-center gap-1.5'>
                              <code className='bg-gray-100 px-1.5 py-0.5 rounded text-blue-600 font-mono text-sm whitespace-nowrap'>
                                {featureInfo.feature}
                              </code>
                              <p className='text-gray-700 font-medium text-sm'>
                                {featureInfo.description}
                              </p>
                              <a
                                href={getDocUrl(featureInfo)}
                                target='_blank'
                                rel='noopener noreferrer'
                                className='text-blue-600 hover:text-blue-800 transition-colors'
                                title='公式ドキュメントで詳細を見る'
                              >
                                <ExternalLink className='w-4 h-4' />
                              </a>
                            </div>
                            <div className='border-l-2 border-gray-200 pl-3'>
                              <div className='flex flex-col gap-1'>
                                <div className='flex items-center gap-1'>
                                  <span className='text-sm font-medium text-gray-600'>
                                    構文:
                                  </span>
                                  <code className='bg-gray-100 px-1.5 py-0.5 rounded text-gray-600 font-mono text-sm'>
                                    {featureInfo.syntax}
                                  </code>
                                </div>
                                <div className='flex items-center gap-1'>
                                  <span className='text-sm font-medium text-gray-600'>
                                    例:
                                  </span>
                                  <code className='bg-gray-100 px-1.5 py-0.5 rounded text-gray-600 font-mono text-sm'>
                                    {featureInfo.example}
                                  </code>
                                </div>
                                {featureInfo.notes.length > 0 && (
                                  <div className='flex flex-wrap gap-1 mt-1'>
                                    {featureInfo.notes.map(
                                      (note: string, noteIndex: number) => (
                                        <span
                                          key={noteIndex}
                                          className='bg-green-50 text-green-700 px-2 py-0.5 rounded text-xs'
                                        >
                                          {note}
                                        </span>
                                      )
                                    )}
                                  </div>
                                )}
                              </div>
                            </div>
                          </div>
                        </div>
                      )
                    )}
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
              <p className='font-medium'>React/Next.jsリファレンス</p>
            </div>
            <p className='text-sm'>
              最新のReact/Next.js仕様に基づいて作成されています
            </p>
            <div className='flex items-center justify-center gap-4 mt-4 text-sm'>
              <a
                href='https://react.dev/'
                target='_blank'
                rel='noopener noreferrer'
                className='flex items-center gap-1 text-blue-600 hover:text-blue-800 transition-colors'
              >
                <ExternalLink className='w-4 h-4' />
                React公式ドキュメント
              </a>
              <a
                href='https://nextjs.org/docs'
                target='_blank'
                rel='noopener noreferrer'
                className='flex items-center gap-1 text-blue-600 hover:text-blue-800 transition-colors'
              >
                <ExternalLink className='w-4 h-4' />
                Next.js公式ドキュメント
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

export default ReactNextReference;
