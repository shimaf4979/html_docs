"use client";

import React, { useState } from "react";
import { Search, ChevronUp, ExternalLink, BookOpen } from "lucide-react";
import { nodeSections } from "../../../public/nodejsData.js";
import Link from "next/link";

interface MethodInfo {
  method: string;
  syntax: string;
  example: string;
  notes: string[];
}

const getMDNUrl = (methodInfo: MethodInfo) => {
  const method = methodInfo.method.toLowerCase();

  // コアモジュールの処理
  if (method.startsWith("fs.")) {
    return "https://nodejs.org/api/fs.html";
  }
  if (method.startsWith("path.")) {
    return "https://nodejs.org/api/path.html";
  }
  if (method.startsWith("os.")) {
    return "https://nodejs.org/api/os.html";
  }
  if (method.startsWith("http.")) {
    return "https://nodejs.org/api/http.html";
  }
  if (method.startsWith("https.")) {
    return "https://nodejs.org/api/https.html";
  }
  if (method.startsWith("url.")) {
    return "https://nodejs.org/api/url.html";
  }
  if (method.startsWith("querystring.")) {
    return "https://nodejs.org/api/querystring.html";
  }
  if (method.startsWith("crypto.")) {
    return "https://nodejs.org/api/crypto.html";
  }
  if (method.startsWith("zlib.")) {
    return "https://nodejs.org/api/zlib.html";
  }
  if (method.startsWith("stream.")) {
    return "https://nodejs.org/api/stream.html";
  }
  if (method.startsWith("events.")) {
    return "https://nodejs.org/api/events.html";
  }
  if (method.startsWith("util.")) {
    return "https://nodejs.org/api/util.html";
  }
  if (method.startsWith("assert.")) {
    return "https://nodejs.org/api/assert.html";
  }
  if (method.startsWith("process.")) {
    return "https://nodejs.org/api/process.html";
  }
  if (method.startsWith("child_process.")) {
    return "https://nodejs.org/api/child_process.html";
  }
  if (method.startsWith("cluster.")) {
    return "https://nodejs.org/api/cluster.html";
  }
  if (method.startsWith("dgram.")) {
    return "https://nodejs.org/api/dgram.html";
  }
  if (method.startsWith("dns.")) {
    return "https://nodejs.org/api/dns.html";
  }
  if (method.startsWith("net.")) {
    return "https://nodejs.org/api/net.html";
  }
  if (method.startsWith("tls.")) {
    return "https://nodejs.org/api/tls.html";
  }
  if (method.startsWith("tty.")) {
    return "https://nodejs.org/api/tty.html";
  }
  if (method.startsWith("vm.")) {
    return "https://nodejs.org/api/vm.html";
  }
  if (method.startsWith("worker_threads.")) {
    return "https://nodejs.org/api/worker_threads.html";
  }
  if (method.startsWith("perf_hooks.")) {
    return "https://nodejs.org/api/perf_hooks.html";
  }
  if (method.startsWith("v8.")) {
    return "https://nodejs.org/api/v8.html";
  }
  if (method.startsWith("repl.")) {
    return "https://nodejs.org/api/repl.html";
  }
  if (method.startsWith("readline.")) {
    return "https://nodejs.org/api/readline.html";
  }
  if (method.startsWith("punycode.")) {
    return "https://nodejs.org/api/punycode.html";
  }
  if (method.startsWith("string_decoder.")) {
    return "https://nodejs.org/api/string_decoder.html";
  }
  if (method.startsWith("timers.")) {
    return "https://nodejs.org/api/timers.html";
  }
  if (method.startsWith("tty.")) {
    return "https://nodejs.org/api/tty.html";
  }
  if (method.startsWith("vm.")) {
    return "https://nodejs.org/api/vm.html";
  }
  if (method.startsWith("worker_threads.")) {
    return "https://nodejs.org/api/worker_threads.html";
  }
  if (method.startsWith("zlib.")) {
    return "https://nodejs.org/api/zlib.html";
  }

  // デフォルトのNode.jsドキュメントトップページ
  return "https://nodejs.org/api/";
};

const NodeJSReference = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredSections = nodeSections
    .map((section) => ({
      ...section,
      modules: section.modules.filter(
        (module) =>
          module.module.toLowerCase().includes(searchTerm.toLowerCase()) ||
          module.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
          module.methods.some(
            (method) =>
              method.method.toLowerCase().includes(searchTerm.toLowerCase()) ||
              method.syntax.toLowerCase().includes(searchTerm.toLowerCase()) ||
              method.example.toLowerCase().includes(searchTerm.toLowerCase()) ||
              method.notes.some((note) =>
                note.toLowerCase().includes(searchTerm.toLowerCase())
              )
          )
      ),
    }))
    .filter((section) => section.modules.length > 0);

  return (
    <div className='min-h-screen bg-gray-50'>
      {/* ヘッダー */}
      <header className='bg-white shadow-sm border-b sticky top-0 z-50'>
        <div className='max-w-6xl mx-auto px-4 py-4'>
          <div className='flex items-center gap-4 mb-4'>
            <Link href='/' className='hover:opacity-80 transition-opacity'>
              <div>
                <h1 className='text-2xl md:text-3xl font-bold text-gray-900'>
                  Node.jsリファレンス
                </h1>
                <p className='text-gray-600 text-sm md:text-base'>
                  Node.jsモジュールとメソッドの完全リスト
                </p>
              </div>
            </Link>
          </div>

          {/* 検索バー */}
          <div className='relative'>
            <Search className='absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5' />
            <input
              type='text'
              placeholder='モジュール名、メソッド名、説明で検索...'
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
              (acc, section) =>
                acc +
                section.modules.reduce(
                  (moduleAcc, module) => moduleAcc + module.methods.length,
                  0
                ),
              0
            )}{" "}
            件の結果が見つかりました
          </p>
        </div>
      )}

      {/* 目次 */}
      {!searchTerm && (
        <div className='max-w-6xl mx-auto px-4 py-4'>
          {nodeSections.map((section) => (
            <div key={section.id} className='mb-2 flex items-start gap-2'>
              <h3 className='text-sm font-medium text-gray-900 whitespace-nowrap'>
                {section.title} :
              </h3>
              <div className='flex flex-wrap gap-1 text-sm text-gray-600'>
                {section.modules.map((module, index) => (
                  <React.Fragment key={index}>
                    <a
                      href={`#${section.id}`}
                      className='text-blue-600 hover:text-blue-800 hover:underline'
                    >
                      {module.module}
                    </a>
                    {index < section.modules.length - 1 && (
                      <span className='text-gray-400'>•</span>
                    )}
                  </React.Fragment>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}

      {/* モジュールセクション */}
      <main className='max-w-6xl mx-auto px-4 pb-12'>
        {filteredSections.length === 0 ? (
          <div className='text-center py-12'>
            <BookOpen className='w-16 h-16 text-gray-300 mx-auto mb-4' />
            <h3 className='text-lg font-medium text-gray-900 mb-2'>
              該当するモジュールが見つかりませんでした
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
                  <div className='grid gap-4'>
                    {section.modules.map((moduleInfo, index) => (
                      <div
                        key={index}
                        className='hover:bg-gray-50 rounded-lg p-4 transition-colors'
                      >
                        <div className='flex flex-col gap-2'>
                          <div className='flex items-center gap-1.5'>
                            <code className='bg-gray-100 px-1.5 py-0.5 rounded text-blue-600 font-mono text-sm whitespace-nowrap'>
                              {moduleInfo.module}
                            </code>
                            <p className='text-gray-700 font-medium text-sm'>
                              {moduleInfo.description}
                            </p>
                          </div>
                          <div className='grid gap-2 mt-2'>
                            {moduleInfo.methods.map(
                              (methodInfo, methodIndex) => (
                                <div
                                  key={methodIndex}
                                  className='border-l-2 border-gray-200 pl-3'
                                >
                                  <div className='flex items-center gap-1.5'>
                                    <code className='bg-gray-100 px-1.5 py-0.5 rounded text-blue-600 font-mono text-sm whitespace-nowrap'>
                                      {methodInfo.method}
                                    </code>
                                    <a
                                      href={getMDNUrl(methodInfo)}
                                      target='_blank'
                                      rel='noopener noreferrer'
                                      className='text-blue-600 hover:text-blue-800 transition-colors'
                                      title='Node.jsドキュメントで詳細を見る'
                                    >
                                      <ExternalLink className='w-4 h-4' />
                                    </a>
                                  </div>
                                  <div className='flex flex-col gap-1 mt-1'>
                                    <div className='flex items-center gap-1'>
                                      <span className='text-sm font-medium text-gray-600'>
                                        構文:
                                      </span>
                                      <code className='bg-gray-100 px-1.5 py-0.5 rounded text-gray-600 font-mono text-sm'>
                                        {methodInfo.syntax}
                                      </code>
                                    </div>
                                    <div className='flex items-center gap-1'>
                                      <span className='text-sm font-medium text-gray-600'>
                                        例:
                                      </span>
                                      <code className='bg-gray-100 px-1.5 py-0.5 rounded text-gray-600 font-mono text-sm'>
                                        {methodInfo.example}
                                      </code>
                                    </div>
                                    {methodInfo.notes.length > 0 && (
                                      <div className='flex flex-wrap gap-1 mt-1'>
                                        {methodInfo.notes.map(
                                          (note, noteIndex) => (
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
                              )
                            )}
                          </div>
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
              <p className='font-medium'>Node.jsリファレンス</p>
            </div>
            <p className='text-sm'>
              最新のNode.js仕様に基づいて作成されています
            </p>
            <div className='flex items-center justify-center gap-4 mt-4 text-sm'>
              <a
                href='https://nodejs.org/api/'
                target='_blank'
                rel='noopener noreferrer'
                className='flex items-center gap-1 text-blue-600 hover:text-blue-800 transition-colors'
              >
                <ExternalLink className='w-4 h-4' />
                Node.js公式ドキュメント
              </a>
              <a
                href='https://github.com/nodejs/node'
                target='_blank'
                rel='noopener noreferrer'
                className='flex items-center gap-1 text-blue-600 hover:text-blue-800 transition-colors'
              >
                <ExternalLink className='w-4 h-4' />
                Node.js GitHub
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

export default NodeJSReference;
