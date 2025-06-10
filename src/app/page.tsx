import Link from "next/link";

export default function Home() {
  return (
    <div className='min-h-screen bg-gray-50'>
      <main className='max-w-4xl mx-auto px-4 py-16'>
        <h1 className='text-4xl font-bold text-gray-900 mb-8 text-center'>
          Web開発ドキュメント
        </h1>

        <div className='grid gap-6 md:grid-cols-2'>
          <Link
            href='/html_docs'
            className='block p-8 bg-white rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow'
          >
            <h2 className='text-2xl font-semibold text-gray-900 mb-4'>HTML</h2>
            <p className='text-gray-600'>HTML要素と属性</p>
          </Link>

          <Link
            href='/css_docs'
            className='block p-8 bg-white rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow'
          >
            <h2 className='text-2xl font-semibold text-gray-900 mb-4'>CSS</h2>
            <p className='text-gray-600'>CSSプロパティと値</p>
          </Link>
        </div>
      </main>
    </div>
  );
}
