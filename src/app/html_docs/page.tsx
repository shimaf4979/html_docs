"use client";

import React, { useState } from "react";
import { Search, ChevronUp, ExternalLink, BookOpen } from "lucide-react";
import { tagSections } from "../../../public/tagData.js";

const HTML5TagReference = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredSections = tagSections
    .map((section) => ({
      ...section,
      tags: section.tags.filter(
        (tag) =>
          tag.tag.toLowerCase().includes(searchTerm.toLowerCase()) ||
          tag.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
          tag.props.some((prop) =>
            prop.toLowerCase().includes(searchTerm.toLowerCase())
          )
      ),
    }))
    .filter((section) => section.tags.length > 0);

  return (
    <div className='min-h-screen bg-gray-50'>
      {/* ヘッダー */}
      <header className='bg-white shadow-sm border-b sticky top-0 z-50'>
        <div className='max-w-6xl mx-auto px-4 py-4'>
          <div className='flex items-center gap-4 mb-4'>
            <div>
              <h1 className='text-2xl md:text-3xl font-bold text-gray-900'>
                HTML5タグリファレンス
              </h1>
              <p className='text-gray-600 text-sm md:text-base'>
                HTMLタグとプロパティの完全リスト
              </p>
            </div>
          </div>

          {/* 検索バー */}
          <div className='relative'>
            <Search className='absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5' />
            <input
              type='text'
              placeholder='タグ名、説明、プロパティで検索...'
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
              (acc, section) => acc + section.tags.length,
              0
            )}{" "}
            件の結果が見つかりました
          </p>
        </div>
      )}

      {/* 英語タグ一覧 */}
      <h1 className=' text-2xl  font-semibold text-gray-900 m-3'>目次</h1>
      {!searchTerm && (
        <div className='max-w-6xl mx-auto px-4 '>
          {tagSections.map((section) => (
            <div key={section.id} className='mb-2 flex items-start gap-2'>
              <h3 className='text-sm font-medium text-gray-900 whitespace-nowrap'>
                {section.title} :
              </h3>
              <div className='flex flex-wrap gap-1 text-sm text-gray-600'>
                {section.tags.map((tag, index) => (
                  <React.Fragment key={index}>
                    <a
                      href={`#${section.id}`}
                      className='text-blue-600 hover:text-blue-800 hover:underline'
                    >
                      {tag.tag}
                    </a>
                    {index < section.tags.length - 1 && (
                      <span className='text-gray-400'>•</span>
                    )}
                  </React.Fragment>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}

      {/* タグセクション */}
      <main className='max-w-6xl mx-auto px-4 pb-12'>
        {filteredSections.length === 0 ? (
          <div className='text-center py-12'>
            <BookOpen className='w-16 h-16 text-gray-300 mx-auto mb-4' />
            <h3 className='text-lg font-medium text-gray-900 mb-2'>
              該当するタグが見つかりませんでした
            </h3>
            <p className='text-gray-600'>
              別のキーワードで検索してみてください
            </p>
          </div>
        ) : (
          filteredSections.map((section) => (
            <section key={section.id} id={section.id} className='mb-8'>
              <div
                className={`rounded-lg border ${section.color} overflow-hidden shadow-sm`}
              >
                <div
                  className={`w-full px-6 py-4 ${section.headerColor} flex items-center justify-between border-b`}
                >
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
                    {section.tags.map((tagInfo, index) => (
                      <div
                        key={index}
                        className='hover:bg-gray-50 rounded-lg p-2 transition-colors'
                      >
                        <div className='flex flex-col gap-0.5'>
                          <div className='flex items-center gap-1.5'>
                            <code className='bg-gray-100 px-1.5 py-0.5 rounded text-blue-600 font-mono text-sm whitespace-nowrap'>
                              {tagInfo.tag}
                            </code>
                            <p className='text-gray-700 font-medium text-sm'>
                              {tagInfo.description}
                            </p>
                          </div>
                          {tagInfo.props.length > 0 && (
                            <div className='flex items-center gap-1 pl-0.5'>
                              <div className='flex flex-wrap gap-1 mt-2'>
                                {tagInfo.props.map((prop, propIndex) => (
                                  <code
                                    key={propIndex}
                                    className='bg-green-50 text-green-700 px-1 py-0.5 rounded text-xs font-mono'
                                  >
                                    {prop}
                                  </code>
                                ))}
                              </div>
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
              <p className='font-medium'>HTML5タグリファレンス</p>
            </div>
            <p className='text-sm'>最新のHTML5仕様に基づいて作成されています</p>
            <div className='flex items-center justify-center gap-4 mt-4 text-sm'>
              <a
                href='https://developer.mozilla.org/ja/docs/Web/HTML'
                target='_blank'
                rel='noopener noreferrer'
                className='flex items-center gap-1 text-blue-600 hover:text-blue-800 transition-colors'
              >
                <ExternalLink className='w-4 h-4' />
                MDN Web Docs
              </a>
              <a
                href='https://html.spec.whatwg.org/'
                target='_blank'
                rel='noopener noreferrer'
                className='flex items-center gap-1 text-blue-600 hover:text-blue-800 transition-colors'
              >
                <ExternalLink className='w-4 h-4' />
                HTML Living Standard
              </a>
            </div>
          </div>
        </div>
      </footer>

      {/* トップに戻るボタン */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className='fixed bottom-6 right-6 bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-700 transition-colors'
        aria-label='トップに戻る'
      >
        <ChevronUp className='w-6 h-6' />
      </button>
    </div>
  );
};

export default HTML5TagReference;
