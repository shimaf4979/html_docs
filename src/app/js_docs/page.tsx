"use client";

import React, { useState } from "react";
import { Search, ChevronUp, ExternalLink, BookOpen } from "lucide-react";
import { jsSections } from "../../../public/jsData.js";
import Link from "next/link";

interface MethodInfo {
  method: string;
  description: string;
  syntax: string;
  example: string;
  notes: string[];
}

const getMDNUrl = (methodInfo: MethodInfo) => {
  const method = methodInfo.method.toLowerCase();

  // 特殊なメソッドの処理
  if (method === "var" || method === "let" || method === "const") {
    return "https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Statements/var";
  }
  if (method === "typeof") {
    return "https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Operators/typeof";
  }
  if (method === "instanceof") {
    return "https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Operators/instanceof";
  }
  if (method === "array.isarray()") {
    return "https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/isArray";
  }

  // 文字列メソッド
  if (method.endsWith("()")) {
    return `https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/String/${method.slice(
      0,
      -2
    )}`;
  }

  // 配列メソッド
  if (method.endsWith("()")) {
    return `https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/${method.slice(
      0,
      -2
    )}`;
  }

  // オブジェクトメソッド
  if (method.startsWith("object.")) {
    return `https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Object/${method.slice(
      7
    )}`;
  }

  // 関数関連
  if (method === "関数宣言" || method === "関数式" || method === "アロー関数") {
    return "https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Functions";
  }

  // 非同期処理
  if (method === "promise" || method === "async/await") {
    return "https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Promise";
  }

  // DOM操作
  if (method.startsWith("document.") || method.startsWith("element.")) {
    return "https://developer.mozilla.org/ja/docs/Web/API/Document";
  }

  // イベント
  if (method === "click" || method === "keydown" || method === "submit") {
    return "https://developer.mozilla.org/ja/docs/Web/Events";
  }

  // ES6+機能
  if (
    method === "テンプレートリテラル" ||
    method === "分割代入" ||
    method === "スプレッド構文"
  ) {
    return "https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Template_literals";
  }

  // 高度な機能
  if (method === "json.parse()" || method === "json.stringify()") {
    return "https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/JSON";
  }

  // Windowオブジェクトのメソッド
  if (method.startsWith("window.")) {
    const windowMethod = method.slice(7).toLowerCase();
    if (
      windowMethod === "alert" ||
      windowMethod === "confirm" ||
      windowMethod === "prompt"
    ) {
      return "https://developer.mozilla.org/ja/docs/Web/API/Window/alert";
    }
    if (windowMethod === "open" || windowMethod === "close") {
      return "https://developer.mozilla.org/ja/docs/Web/API/Window/open";
    }
    if (windowMethod === "location") {
      return "https://developer.mozilla.org/ja/docs/Web/API/Window/location";
    }
    if (windowMethod === "history") {
      return "https://developer.mozilla.org/ja/docs/Web/API/Window/history";
    }
    if (windowMethod === "navigator") {
      return "https://developer.mozilla.org/ja/docs/Web/API/Window/navigator";
    }
    if (windowMethod === "screen") {
      return "https://developer.mozilla.org/ja/docs/Web/API/Window/screen";
    }
    if (windowMethod === "innerwidth" || windowMethod === "innerheight") {
      return "https://developer.mozilla.org/ja/docs/Web/API/Window/innerWidth";
    }
    if (windowMethod === "outerwidth" || windowMethod === "outerheight") {
      return "https://developer.mozilla.org/ja/docs/Web/API/Window/outerWidth";
    }
    if (windowMethod === "scrollx" || windowMethod === "scrolly") {
      return "https://developer.mozilla.org/ja/docs/Web/API/Window/scrollX";
    }
    if (windowMethod === "scrollto" || windowMethod === "scrollby") {
      return "https://developer.mozilla.org/ja/docs/Web/API/Window/scrollTo";
    }
    if (windowMethod === "getcomputedstyle") {
      return "https://developer.mozilla.org/ja/docs/Web/API/Window/getComputedStyle";
    }
    if (windowMethod === "getselection") {
      return "https://developer.mozilla.org/ja/docs/Web/API/Window/getSelection";
    }
    if (windowMethod === "matchmedia") {
      return "https://developer.mozilla.org/ja/docs/Web/API/Window/matchMedia";
    }
    if (
      windowMethod === "requestanimationframe" ||
      windowMethod === "cancelanimationframe"
    ) {
      return "https://developer.mozilla.org/ja/docs/Web/API/Window/requestAnimationFrame";
    }
    if (windowMethod === "btoa" || windowMethod === "atob") {
      return "https://developer.mozilla.org/ja/docs/Web/API/Window/btoa";
    }
    if (
      windowMethod === "encodeuricomponent" ||
      windowMethod === "decodeuricomponent"
    ) {
      return "https://developer.mozilla.org/ja/docs/Web/API/encodeURIComponent";
    }
    if (windowMethod === "parseint" || windowMethod === "parsefloat") {
      return "https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/parseInt";
    }
    if (windowMethod === "isnan" || windowMethod === "isfinite") {
      return "https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/isNaN";
    }
    if (windowMethod === "eval") {
      return "https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/eval";
    }
    if (windowMethod === "onerror") {
      return "https://developer.mozilla.org/ja/docs/Web/API/GlobalEventHandlers/onerror";
    }
    if (windowMethod === "onunhandledrejection") {
      return "https://developer.mozilla.org/ja/docs/Web/API/WindowEventHandlers/onunhandledrejection";
    }
    if (windowMethod === "postmessage") {
      return "https://developer.mozilla.org/ja/docs/Web/API/Window/postMessage";
    }
    if (windowMethod === "customelements") {
      return "https://developer.mozilla.org/ja/docs/Web/API/Window/customElements";
    }
    if (windowMethod === "crypto") {
      return "https://developer.mozilla.org/ja/docs/Web/API/Window/crypto";
    }
    if (windowMethod === "caches") {
      return "https://developer.mozilla.org/ja/docs/Web/API/Window/caches";
    }
    return "https://developer.mozilla.org/ja/docs/Web/API/Window";
  }

  // 正規表現関連
  if (method === "regular expression" || method === "regex") {
    return "https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/RegExp";
  }
  if (method === "test()" || method === "exec()") {
    return "https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/RegExp/test";
  }

  // 日付関連
  if (method === "date" || method === "new date()") {
    return "https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Date";
  }
  if (method.startsWith("date.")) {
    const dateMethod = method.slice(5).toLowerCase();
    if (
      dateMethod === "gettime" ||
      dateMethod === "getdate" ||
      dateMethod === "getmonth" ||
      dateMethod === "getfullyear"
    ) {
      return "https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Date/getTime";
    }
    if (
      dateMethod === "settime" ||
      dateMethod === "setdate" ||
      dateMethod === "setmonth" ||
      dateMethod === "setfullyear"
    ) {
      return "https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Date/setTime";
    }
    if (
      dateMethod === "tostring" ||
      dateMethod === "tolocalestring" ||
      dateMethod === "toisostring"
    ) {
      return "https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Date/toString";
    }
    return "https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Date";
  }

  // Math関連
  if (method === "math") {
    return "https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Math";
  }
  if (method.startsWith("math.")) {
    const mathMethod = method.slice(5).toLowerCase();
    if (mathMethod === "random") {
      return "https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Math/random";
    }
    if (
      mathMethod === "floor" ||
      mathMethod === "ceil" ||
      mathMethod === "round"
    ) {
      return "https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Math/floor";
    }
    if (mathMethod === "max" || mathMethod === "min") {
      return "https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Math/max";
    }
    if (mathMethod === "abs" || mathMethod === "sqrt" || mathMethod === "pow") {
      return "https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Math/abs";
    }
    return "https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Math";
  }

  // エラー関連
  if (method === "error" || method === "new error()") {
    return "https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Error";
  }
  if (method === "try...catch...finally") {
    return "https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Statements/try...catch";
  }

  // コンソール関連
  if (method === "console") {
    return "https://developer.mozilla.org/ja/docs/Web/API/Console";
  }
  if (method.startsWith("console.")) {
    const consoleMethod = method.slice(8).toLowerCase();
    if (
      consoleMethod === "log" ||
      consoleMethod === "info" ||
      consoleMethod === "warn" ||
      consoleMethod === "error"
    ) {
      return "https://developer.mozilla.org/ja/docs/Web/API/Console/log";
    }
    if (consoleMethod === "table") {
      return "https://developer.mozilla.org/ja/docs/Web/API/Console/table";
    }
    if (consoleMethod === "time" || consoleMethod === "timeend") {
      return "https://developer.mozilla.org/ja/docs/Web/API/Console/time";
    }
    if (consoleMethod === "group" || consoleMethod === "groupend") {
      return "https://developer.mozilla.org/ja/docs/Web/API/Console/group";
    }
    return "https://developer.mozilla.org/ja/docs/Web/API/Console";
  }

  // パフォーマンス関連
  if (method === "performance") {
    return "https://developer.mozilla.org/ja/docs/Web/API/Performance";
  }
  if (method.startsWith("performance.")) {
    const perfMethod = method.slice(12).toLowerCase();
    if (perfMethod === "now") {
      return "https://developer.mozilla.org/ja/docs/Web/API/Performance/now";
    }
    if (perfMethod === "mark" || perfMethod === "measure") {
      return "https://developer.mozilla.org/ja/docs/Web/API/Performance/mark";
    }
    return "https://developer.mozilla.org/ja/docs/Web/API/Performance";
  }

  // 国際化関連
  if (method === "intl") {
    return "https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Intl";
  }
  if (method.startsWith("intl.")) {
    const intlMethod = method.slice(5).toLowerCase();
    if (intlMethod === "datetimeformat") {
      return "https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat";
    }
    if (intlMethod === "numberformat") {
      return "https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat";
    }
    if (intlMethod === "collator") {
      return "https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Intl/Collator";
    }
    return "https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Intl";
  }

  // デフォルトのMDNトップページ
  return "https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference";
};

const JSReference = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredSections = jsSections
    .map((section) => ({
      ...section,
      methods: section.methods.filter(
        (method) =>
          method.method.toLowerCase().includes(searchTerm.toLowerCase()) ||
          method.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
          method.syntax.toLowerCase().includes(searchTerm.toLowerCase()) ||
          method.example.toLowerCase().includes(searchTerm.toLowerCase()) ||
          method.notes.some((note) =>
            note.toLowerCase().includes(searchTerm.toLowerCase())
          )
      ),
    }))
    .filter((section) => section.methods.length > 0);

  return (
    <div className='min-h-screen bg-gray-50'>
      {/* ヘッダー */}
      <header className='bg-white shadow-sm border-b sticky top-0 z-50'>
        <div className='max-w-6xl mx-auto px-4 py-4'>
          <div className='flex items-center gap-4 mb-4'>
            <Link href='/' className='hover:opacity-80 transition-opacity'>
              <div>
                <h1 className='text-2xl md:text-3xl font-bold text-gray-900'>
                  JavaScriptリファレンス
                </h1>
                <p className='text-gray-600 text-sm md:text-base'>
                  JavaScriptメソッドと機能の完全リスト
                </p>
              </div>
            </Link>
          </div>

          {/* 検索バー */}
          <div className='relative'>
            <Search className='absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5' />
            <input
              type='text'
              placeholder='メソッド名、説明、構文で検索...'
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
              (acc, section) => acc + section.methods.length,
              0
            )}{" "}
            件の結果が見つかりました
          </p>
        </div>
      )}

      {/* 目次 */}
      {!searchTerm && (
        <div className='max-w-6xl mx-auto px-4 py-4'>
          {jsSections.map((section) => (
            <div key={section.id} className='mb-2 flex items-start gap-2'>
              <h3 className='text-sm font-medium text-gray-900 whitespace-nowrap'>
                {section.title} :
              </h3>
              <div className='flex flex-wrap gap-1 text-sm text-gray-600'>
                {section.methods.map((method, index) => (
                  <React.Fragment key={index}>
                    <a
                      href={`#${section.id}`}
                      className='text-blue-600 hover:text-blue-800 hover:underline'
                    >
                      {method.method}
                    </a>
                    {index < section.methods.length - 1 && (
                      <span className='text-gray-400'>•</span>
                    )}
                  </React.Fragment>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}

      {/* メソッドセクション */}
      <main className='max-w-6xl mx-auto px-4 pb-12'>
        {filteredSections.length === 0 ? (
          <div className='text-center py-12'>
            <BookOpen className='w-16 h-16 text-gray-300 mx-auto mb-4' />
            <h3 className='text-lg font-medium text-gray-900 mb-2'>
              該当するメソッドが見つかりませんでした
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
                    {section.methods.map((methodInfo, index) => (
                      <div
                        key={index}
                        className='hover:bg-gray-50 rounded-lg p-4 transition-colors'
                      >
                        <div className='flex flex-col gap-2'>
                          <div className='flex items-center gap-1.5'>
                            <code className='bg-gray-100 px-1.5 py-0.5 rounded text-blue-600 font-mono text-sm whitespace-nowrap'>
                              {methodInfo.method}
                            </code>
                            <p className='text-gray-700 font-medium text-sm'>
                              {methodInfo.description}
                            </p>
                            <a
                              href={getMDNUrl(methodInfo)}
                              target='_blank'
                              rel='noopener noreferrer'
                              className='text-blue-600 hover:text-blue-800 transition-colors'
                              title='MDNで詳細を見る'
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
                                  {methodInfo.notes.map((note, noteIndex) => (
                                    <span
                                      key={noteIndex}
                                      className='bg-green-50 text-green-700 px-2 py-0.5 rounded text-xs'
                                    >
                                      {note}
                                    </span>
                                  ))}
                                </div>
                              )}
                            </div>
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
              <p className='font-medium'>JavaScriptリファレンス</p>
            </div>
            <p className='text-sm'>
              最新のJavaScript仕様に基づいて作成されています
            </p>
            <div className='flex items-center justify-center gap-4 mt-4 text-sm'>
              <a
                href='https://developer.mozilla.org/ja/docs/Web/JavaScript'
                target='_blank'
                rel='noopener noreferrer'
                className='flex items-center gap-1 text-blue-600 hover:text-blue-800 transition-colors'
              >
                <ExternalLink className='w-4 h-4' />
                MDN Web Docs
              </a>
              <a
                href='https://tc39.es/ecma262/'
                target='_blank'
                rel='noopener noreferrer'
                className='flex items-center gap-1 text-blue-600 hover:text-blue-800 transition-colors'
              >
                <ExternalLink className='w-4 h-4' />
                ECMAScript仕様書
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

export default JSReference;
