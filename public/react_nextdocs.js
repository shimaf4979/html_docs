// reactNextjsData.js
export const reactNextjsSections = [
  {
    id: "react-hooks",
    title: "React Hooks",
    color: "bg-blue-50 border-blue-200",
    headerColor: "bg-blue-100",
    features: [
      {
        feature: "useState",
        description: "状態管理のフック",
        syntax: "const [state, setState] = useState(initialValue)",
        example:
          'const [count, setCount] = useState(0); const [user, setUser] = useState({ name: "", age: 0 }); const [items, setItems] = useState([]);',
        notes: [
          "初期値は関数も可能",
          "setState は非同期",
          "バッチング処理される",
        ],
      },
      {
        feature: "useEffect",
        description: "副作用フック（ライフサイクル）",
        syntax:
          "useEffect(() => { /* effect */ return () => { /* cleanup */ } }, [dependencies])",
        example:
          "useEffect(() => { document.title = `Count: ${count}`; }, [count]); useEffect(() => { const timer = setInterval(() => setTime(Date.now()), 1000); return () => clearInterval(timer); }, []);",
        notes: [
          "依存配列で実行タイミング制御",
          "クリーンアップ関数でメモリリーク防止",
          "空配列でマウント時のみ実行",
        ],
      },
      {
        feature: "useContext",
        description: "コンテキストの値を取得",
        syntax: "const value = useContext(Context)",
        example:
          "const ThemeContext = createContext(); const theme = useContext(ThemeContext); const { user, setUser } = useContext(UserContext);",
        notes: [
          "Providerの値を取得",
          "prop drilling を回避",
          "Context.Provider が必要",
        ],
      },
      {
        feature: "useReducer",
        description: "複雑な状態管理（Redux パターン）",
        syntax: "const [state, dispatch] = useReducer(reducer, initialState)",
        example:
          'function todoReducer(state, action) { switch (action.type) { case "ADD": return [...state, action.payload]; case "REMOVE": return state.filter(item => item.id !== action.payload); } } const [todos, dispatch] = useReducer(todoReducer, []);',
        notes: [
          "複雑な状態更新ロジック",
          "アクションベースの状態管理",
          "useState の代替",
        ],
      },
      {
        feature: "useMemo",
        description: "計算結果のメモ化",
        syntax:
          "const memoizedValue = useMemo(() => computeValue(deps), [deps])",
        example:
          "const expensiveValue = useMemo(() => items.filter(item => item.active).length, [items]); const sortedData = useMemo(() => data.sort((a, b) => a.name.localeCompare(b.name)), [data]);",
        notes: [
          "重い計算の最適化",
          "依存配列が変わった時のみ再計算",
          "パフォーマンス改善",
        ],
      },
      {
        feature: "useCallback",
        description: "関数のメモ化",
        syntax:
          "const memoizedCallback = useCallback(() => { /* function */ }, [deps])",
        example:
          "const handleClick = useCallback(() => { setCount(count + 1); }, [count]); const handleSubmit = useCallback((data) => { onSubmit(data); }, [onSubmit]);",
        notes: [
          "関数の再作成を防ぐ",
          "子コンポーネントの不要な再レンダリング防止",
          "useEffect の依存に関数を渡す時",
        ],
      },
      {
        feature: "useRef",
        description: "DOM要素・値の参照",
        syntax: "const ref = useRef(initialValue)",
        example:
          "const inputRef = useRef(null); const focus = () => inputRef.current.focus(); const countRef = useRef(0); // レンダリングを引き起こさない値",
        notes: [
          "DOM要素への直接アクセス",
          "レンダリングを引き起こさない値の保存",
          "currentプロパティでアクセス",
        ],
      },
      {
        feature: "useImperativeHandle",
        description: "親から子の内部メソッドを呼び出し",
        syntax:
          "useImperativeHandle(ref, () => ({ method1, method2 }), [deps])",
        example:
          'const FancyInput = forwardRef((props, ref) => { const inputRef = useRef(); useImperativeHandle(ref, () => ({ focus: () => inputRef.current.focus(), clear: () => inputRef.current.value = "" })); return <input ref={inputRef} />; });',
        notes: [
          "forwardRef と組み合わせて使用",
          "親コンポーネントから子の機能を制御",
          "カプセル化の原則を破るため慎重に使用",
        ],
      },
      {
        feature: "useLayoutEffect",
        description: "同期的な副作用フック",
        syntax: "useLayoutEffect(() => { /* effect */ }, [deps])",
        example:
          "useLayoutEffect(() => { const rect = divRef.current.getBoundingClientRect(); setWidth(rect.width); }, []); // DOM更新直後、描画前に実行",
        notes: [
          "useEffect より早いタイミング",
          "DOM読み取り・同期的な更新",
          "パフォーマンスに注意",
        ],
      },
      {
        feature: "useDebugValue",
        description: "DevToolsでのデバッグ表示",
        syntax: "useDebugValue(value, format?)",
        example:
          "function useCustomHook(value) { const [state, setState] = useState(value); useDebugValue(state, state => `State: ${state}`); return [state, setState]; }",
        notes: [
          "カスタムフックのデバッグ",
          "React DevTools で表示",
          "本番環境では無視される",
        ],
      },
      {
        feature: "useId",
        description: "ユニークIDの生成",
        syntax: "const id = useId()",
        example:
          'function Form() { const id = useId(); return <><label htmlFor={id}>Email:</label><input id={id} type="email" /></>; }',
        notes: [
          "React 18で追加",
          "SSR対応のユニークID",
          "アクセシビリティで使用",
        ],
      },
      {
        feature: "useTransition",
        description: "緊急度の低い状態更新",
        syntax: "const [isPending, startTransition] = useTransition()",
        example:
          "const [isPending, startTransition] = useTransition(); const handleSearch = (query) => { startTransition(() => { setSearchResults(search(query)); }); };",
        notes: ["React 18で追加", "UI応答性の向上", "重い処理の優先度を下げる"],
      },
      {
        feature: "useDeferredValue",
        description: "値の更新を遅延",
        syntax: "const deferredValue = useDeferredValue(value)",
        example:
          'const [query, setQuery] = useState(""); const deferredQuery = useDeferredValue(query); const results = useMemo(() => search(deferredQuery), [deferredQuery]);',
        notes: ["React 18で追加", "重い計算の遅延実行", "デバウンス効果"],
      },
      {
        feature: "useSyncExternalStore",
        description: "外部ストアとの同期",
        syntax:
          "const state = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot?)",
        example:
          'const windowWidth = useSyncExternalStore( (callback) => { window.addEventListener("resize", callback); return () => window.removeEventListener("resize", callback); }, () => window.innerWidth );',
        notes: [
          "React 18で追加",
          "外部状態管理ライブラリとの統合",
          "ティアリング防止",
        ],
      },
      {
        feature: "useInsertionEffect",
        description: "CSS-in-JS用の副作用フック",
        syntax: "useInsertionEffect(() => { /* effect */ }, [deps])",
        example:
          'useInsertionEffect(() => { const style = document.createElement("style"); style.textContent = `.class { color: red; }`; document.head.appendChild(style); return () => document.head.removeChild(style); }, []);',
        notes: ["React 18で追加", "CSS-in-JSライブラリ用", "DOM変更前に実行"],
      },
    ],
  },
  {
    id: "react-components",
    title: "React コンポーネント",
    color: "bg-green-50 border-green-200",
    headerColor: "bg-green-100",
    features: [
      {
        feature: "Function Component",
        description: "関数コンポーネント",
        syntax: "function Component(props) { return <JSX />; }",
        example:
          "function Welcome({ name, age = 18 }) { return <h1>Hello, {name}! Age: {age}</h1>; } const Arrow = ({ children, ...props }) => <div {...props}>{children}</div>;",
        notes: ["Hooks使用可能", "props受け取り", "デフォルト引数対応"],
      },
      {
        feature: "Class Component",
        description: "クラスコンポーネント",
        syntax:
          "class Component extends React.Component { render() { return <JSX />; } }",
        example:
          "class Counter extends React.Component { constructor(props) { super(props); this.state = { count: 0 }; } render() { return <button onClick={() => this.setState({ count: this.state.count + 1 })}>{this.state.count}</button>; } }",
        notes: ["レガシー形式", "ライフサイクルメソッド使用", "Hooks使用不可"],
      },
      {
        feature: "JSX",
        description: "JavaScript XML記法",
        syntax: '<Element prop="value">{expression}</Element>',
        example:
          'const element = <div className="container"><h1>{title}</h1><p>{content}</p>{items.map(item => <li key={item.id}>{item.name}</li>)}</div>;',
        notes: [
          "JavaScript式埋め込み",
          "className, htmlFor使用",
          "key必須（リスト）",
        ],
      },
      {
        feature: "Props",
        description: "コンポーネントへのデータ渡し",
        syntax: '<Component prop1="value" prop2={variable} />',
        example:
          "function UserCard({ user, onEdit, children }) { return <div><h2>{user.name}</h2><button onClick={() => onEdit(user.id)}>Edit</button>{children}</div>; } <UserCard user={userData} onEdit={handleEdit}><p>Additional content</p></UserCard>",
        notes: ["読み取り専用", "children特別なprop", "分割代入で受け取り"],
      },
      {
        feature: "State",
        description: "コンポーネントの内部状態",
        syntax: "const [state, setState] = useState(initial)",
        example:
          'function Form() { const [form, setForm] = useState({ name: "", email: "" }); const updateField = (field, value) => setForm(prev => ({ ...prev, [field]: value })); return <><input value={form.name} onChange={e => updateField("name", e.target.value)} /></>; }',
        notes: ["useState使用", "不変更新", "オブジェクトはスプレッド演算子"],
      },
      {
        feature: "Event Handling",
        description: "イベントハンドリング",
        syntax: "<element onClick={handler} onChange={handler} />",
        example:
          'function Button() { const handleClick = (e) => { e.preventDefault(); console.log("Clicked!", e.target); }; const handleKeyDown = (e) => { if (e.key === "Enter") handleClick(e); }; return <button onClick={handleClick} onKeyDown={handleKeyDown}>Click me</button>; }',
        notes: [
          "SyntheticEvent使用",
          "preventDefault()でデフォルト動作防止",
          "イベントデリゲーション",
        ],
      },
      {
        feature: "Conditional Rendering",
        description: "条件付きレンダリング",
        syntax: "{condition && <Element />} or {condition ? <A /> : <B />}",
        example:
          "function UserProfile({ user, isLoggedIn }) { return <div>{isLoggedIn && <h1>Welcome, {user.name}!</h1>}{user.isAdmin ? <AdminPanel /> : <UserPanel />}{user.notifications.length > 0 && <NotificationList items={user.notifications} />}</div>; }",
        notes: ["論理演算子&&", "三項演算子", "null/undefinedは何も描画しない"],
      },
      {
        feature: "Lists and Keys",
        description: "リストレンダリングとkey",
        syntax: "{array.map(item => <Element key={item.id} />)}",
        example:
          'function TodoList({ todos }) { return <ul>{todos.map(todo => <li key={todo.id} className={todo.completed ? "completed" : ""}><span>{todo.text}</span><button onClick={() => toggleTodo(todo.id)}>Toggle</button></li>)}</ul>; }',
        notes: ["key必須", "ユニークなkeyを使用", "indexをkeyにするのは避ける"],
      },
      {
        feature: "Fragment",
        description: "複数要素をラップ",
        syntax: "<React.Fragment> or <> ... </> or Fragment",
        example:
          'function TableRow() { return <><td>Cell 1</td><td>Cell 2</td></>; } function List() { return <React.Fragment key="list"><h1>Title</h1><ul>...</ul></React.Fragment>; }',
        notes: [
          "余分なDOM要素なし",
          "短縮記法<></>使用可",
          "keyが必要な場合はReact.Fragment",
        ],
      },
      {
        feature: "Portals",
        description: "親以外のDOM要素にレンダリング",
        syntax: "ReactDOM.createPortal(child, container)",
        example:
          'function Modal({ children, isOpen }) { if (!isOpen) return null; return ReactDOM.createPortal(<div className="modal-overlay"><div className="modal">{children}</div></div>, document.getElementById("modal-root")); }',
        notes: [
          "モーダル・ツールチップで使用",
          "イベントバブリングは論理的親",
          "document.bodyなど任意の要素に",
        ],
      },
      {
        feature: "Error Boundaries",
        description: "エラーキャッチ・フォールバック表示",
        syntax:
          "class ErrorBoundary extends React.Component { static getDerivedStateFromError() { } componentDidCatch() { } }",
        example:
          'class ErrorBoundary extends React.Component { constructor(props) { super(props); this.state = { hasError: false }; } static getDerivedStateFromError(error) { return { hasError: true }; } componentDidCatch(error, errorInfo) { console.error("Error caught:", error, errorInfo); } render() { if (this.state.hasError) return <h1>Something went wrong.</h1>; return this.props.children; } }',
        notes: [
          "クラスコンポーネントのみ",
          "render中のエラーをキャッチ",
          "イベントハンドラーエラーはキャッチしない",
        ],
      },
    ],
  },
  {
    id: "react-advanced",
    title: "React 高度な機能",
    color: "bg-purple-50 border-purple-200",
    headerColor: "bg-purple-100",
    features: [
      {
        feature: "Context API",
        description: "グローバル状態管理",
        syntax:
          "const Context = createContext(defaultValue); <Context.Provider value={value}><Component /></Context.Provider>",
        example:
          'const ThemeContext = createContext("light"); function App() { const [theme, setTheme] = useState("dark"); return <ThemeContext.Provider value={{ theme, setTheme }}><Header /><Main /></ThemeContext.Provider>; } function Header() { const { theme, setTheme } = useContext(ThemeContext); return <button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>Toggle</button>; }',
        notes: [
          "Providerで値を提供",
          "useContextで値を取得",
          "prop drilling回避",
        ],
      },
      {
        feature: "forwardRef",
        description: "refを子コンポーネントに転送",
        syntax:
          "const Component = forwardRef((props, ref) => <element ref={ref} />)",
        example:
          'const FancyButton = forwardRef((props, ref) => <button ref={ref} className="fancy-button" {...props} />); function App() { const buttonRef = useRef(); return <><FancyButton ref={buttonRef}>Click me</FancyButton><button onClick={() => buttonRef.current.focus()}>Focus</button></>; }',
        notes: [
          "HOC・ライブラリで使用",
          "refを透過的に渡す",
          "useImperativeHandleと組み合わせ",
        ],
      },
      {
        feature: "Higher-Order Components (HOC)",
        description: "コンポーネントを受け取って新しいコンポーネントを返す関数",
        syntax:
          "const withFeature = (WrappedComponent) => (props) => <WrappedComponent {...props} />",
        example:
          "const withAuth = (WrappedComponent) => (props) => { const { user } = useContext(AuthContext); if (!user) return <Login />; return <WrappedComponent {...props} user={user} />; }; const ProtectedPage = withAuth(Dashboard);",
        notes: ["ロジックの再利用", "propsを透過的に渡す", "Hooksの方が推奨"],
      },
      {
        feature: "Render Props",
        description: "関数を子要素として渡すパターン",
        syntax: "<Component>{(data) => <Element data={data} />}</Component>",
        example:
          'function DataFetcher({ url, children }) { const [data, setData] = useState(null); const [loading, setLoading] = useState(true); useEffect(() => { fetch(url).then(res => res.json()).then(data => { setData(data); setLoading(false); }); }, [url]); return children({ data, loading }); } <DataFetcher url="/api/users">{({ data, loading }) => loading ? <div>Loading...</div> : <UserList users={data} />}</DataFetcher>',
        notes: [
          "ロジックとUIの分離",
          "関数を子要素として渡す",
          "カスタムHooksの方が推奨",
        ],
      },
      {
        feature: "memo",
        description: "コンポーネントのメモ化",
        syntax: "const MemoizedComponent = memo(Component, areEqual?)",
        example:
          "const ExpensiveComponent = memo(({ data, onUpdate }) => { const processedData = useMemo(() => processData(data), [data]); return <div>{processedData.map(item => <Item key={item.id} item={item} onUpdate={onUpdate} />)}</div>; }, (prevProps, nextProps) => prevProps.data.length === nextProps.data.length);",
        notes: [
          "props変更時のみ再レンダリング",
          "浅い比較がデフォルト",
          "カスタム比較関数可能",
        ],
      },
      {
        feature: "lazy & Suspense",
        description: "コード分割・遅延読み込み",
        syntax:
          'const LazyComponent = lazy(() => import("./Component")); <Suspense fallback={<Loading />}><LazyComponent /></Suspense>',
        example:
          'const Dashboard = lazy(() => import("./Dashboard")); const Profile = lazy(() => import("./Profile")); function App() { return <Router><Suspense fallback={<div>Loading...</div>}><Routes><Route path="/dashboard" element={<Dashboard />} /><Route path="/profile" element={<Profile />} /></Routes></Suspense></Router>; }',
        notes: [
          "動的インポート",
          "バンドルサイズ削減",
          "Suspenseでフォールバック表示",
        ],
      },
      {
        feature: "StrictMode",
        description: "開発時の追加チェック",
        syntax: "<StrictMode><App /></StrictMode>",
        example:
          "function App() { return <React.StrictMode><Header /><Main /><Footer /></React.StrictMode>; }",
        notes: ["開発時のみ有効", "副作用の二重実行", "非推奨APIの警告"],
      },
      {
        feature: "Profiler",
        description: "パフォーマンス計測",
        syntax:
          '<Profiler id="id" onRender={callback}><Component /></Profiler>',
        example:
          'function onRenderCallback(id, phase, actualDuration, baseDuration, startTime, commitTime) { console.log("Component:", id, "Duration:", actualDuration); } <Profiler id="App" onRender={onRenderCallback}><App /></Profiler>',
        notes: [
          "レンダリング時間計測",
          "本番環境では無効",
          "React DevToolsで可視化",
        ],
      },
      {
        feature: "startTransition",
        description: "緊急度の低い更新",
        syntax: "startTransition(() => { setState(newValue); })",
        example:
          'import { startTransition } from "react"; function SearchResults() { const [query, setQuery] = useState(""); const [results, setResults] = useState([]); const handleSearch = (newQuery) => { setQuery(newQuery); // 緊急度高 startTransition(() => { setResults(searchData(newQuery)); // 緊急度低 }); }; return <><input onChange={e => handleSearch(e.target.value)} /><ResultsList results={results} /></>; }',
        notes: ["React 18の新機能", "UI応答性向上", "重い処理の優先度下げ"],
      },
    ],
  },
  {
    id: "nextjs-core",
    title: "Next.js コア機能",
    color: "bg-yellow-50 border-yellow-200",
    headerColor: "bg-yellow-100",
    features: [
      {
        feature: "Pages Router",
        description: "ファイルベースルーティング（pages/）",
        syntax: "pages/path/to/page.js → /path/to/page",
        example:
          "pages/index.js → / pages/about.js → /about pages/blog/[slug].js → /blog/hello-world pages/[...params].js → /a/b/c (catch-all)",
        notes: [
          "ファイル名がルートに",
          "動的ルート[param]",
          "Catch-all[...param]",
        ],
      },
      {
        feature: "App Router",
        description: "アプリケーションルーター（app/）",
        syntax: "app/path/page.js → /path",
        example:
          "app/page.js → / app/about/page.js → /about app/blog/[slug]/page.js → /blog/hello app/(group)/page.js → / (route group)",
        notes: ["Next.js 13+", "page.jsファイル必須", "ルートグループ対応"],
      },
      {
        feature: "Dynamic Routes",
        description: "動的ルーティング",
        syntax:
          "[param].js → /value, [...param].js → /a/b/c, [[...param]].js → / or /a/b",
        example:
          "pages/posts/[id].js export default function Post({ id }) { return <h1>Post {id}</h1>; } export async function getServerSideProps({ params }) { return { props: { id: params.id } }; }",
        notes: [
          "[]で動的パラメータ",
          "...でCatch-all",
          "[[...]]でOptional catch-all",
        ],
      },
      {
        feature: "Link",
        description: "クライアントサイドナビゲーション",
        syntax: '<Link href="/path"><a>Text</a></Link>',
        example:
          'import Link from "next/link"; <Link href="/about">About</Link> <Link href="/posts/[id]" as="/posts/123">Post</Link> <Link href={{ pathname: "/posts/[id]", query: { id: 123 } }}>Post</Link>',
        notes: ["SPAナビゲーション", "プリフェッチ自動", "href必須"],
      },
      {
        feature: "useRouter",
        description: "ルーター情報・操作",
        syntax: "const router = useRouter()",
        example:
          'import { useRouter } from "next/router"; function Page() { const router = useRouter(); const { id, tab } = router.query; return <><p>ID: {id}</p><button onClick={() => router.push("/home")}>Home</button><button onClick={() => router.back()}>Back</button></>; }',
        notes: [
          "query, pathname, asPath取得",
          "push, replace, back, reload",
          "イベントリスナー登録可能",
        ],
      },
      {
        feature: "Image",
        description: "最適化された画像コンポーネント",
        syntax:
          '<Image src="/image.jpg" alt="Description" width={500} height={300} />',
        example:
          'import Image from "next/image"; <Image src="/hero.jpg" alt="Hero" width={800} height={400} priority /> <Image src="/avatar.jpg" alt="Avatar" width={50} height={50} className="rounded-full" />',
        notes: ["自動最適化", "lazy loading", "複数フォーマット対応"],
      },
      {
        feature: "Head",
        description: "HTMLヘッド要素の管理",
        syntax: "<Head><title>Title</title><meta /></Head>",
        example:
          'import Head from "next/head"; function Page() { return <><Head><title>My Page</title><meta name="description" content="Page description" /><link rel="icon" href="/favicon.ico" /></Head><h1>Content</h1></>; }',
        notes: [
          "title, meta, linkタグ",
          "後から追加されたものが優先",
          "SEO対応",
        ],
      },
      {
        feature: "Script",
        description: "外部スクリプトの最適化読み込み",
        syntax: '<Script src="/script.js" strategy="afterInteractive" />',
        example:
          'import Script from "next/script"; <Script src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID" strategy="afterInteractive" /> <Script id="gtag-init" strategy="afterInteractive" dangerouslySetInnerHTML={{ __html: `window.dataLayer = window.dataLayer || [];` }} />',
        notes: [
          "読み込みタイミング制御",
          "beforeInteractive, afterInteractive, lazyOnload",
          "パフォーマンス最適化",
        ],
      },
    ],
  },
  {
    id: "nextjs-data-fetching",
    title: "Next.js データフェッチング",
    color: "bg-pink-50 border-pink-200",
    headerColor: "bg-pink-100",
    features: [
      {
        feature: "getStaticProps",
        description: "静的生成時のデータフェッチ",
        syntax:
          "export async function getStaticProps(context) { return { props: {} }; }",
        example:
          'export async function getStaticProps() { const posts = await fetch("https://api.example.com/posts").then(res => res.json()); return { props: { posts }, revalidate: 60 // ISR }; } export default function Blog({ posts }) { return <div>{posts.map(post => <article key={post.id}>{post.title}</article>)}</div>; }',
        notes: ["ビルド時に実行", "ISR対応（revalidate）", "CDNキャッシュ可能"],
      },
      {
        feature: "getStaticPaths",
        description: "動的ルートの静的生成パス指定",
        syntax:
          "export async function getStaticPaths() { return { paths: [], fallback: false }; }",
        example:
          'export async function getStaticPaths() { const posts = await fetch("https://api.example.com/posts").then(res => res.json()); const paths = posts.map(post => ({ params: { id: post.id.toString() } })); return { paths, fallback: "blocking" }; }',
        notes: [
          "動的ルートで必須",
          'fallback: false/true/"blocking"',
          "ISRと組み合わせ",
        ],
      },
      {
        feature: "getServerSideProps",
        description: "リクエスト時のサーバーサイドデータフェッチ",
        syntax:
          "export async function getServerSideProps(context) { return { props: {} }; }",
        example:
          'export async function getServerSideProps({ req, res, params, query }) { const user = await getUserFromSession(req); if (!user) { return { redirect: { destination: "/login", permanent: false } }; } const data = await fetch(`https://api.example.com/user/${user.id}`).then(res => res.json()); return { props: { user, data } }; }',
        notes: [
          "毎リクエスト時に実行",
          "req, res, params, query利用可能",
          "リダイレクト・notFound可能",
        ],
      },
      {
        feature: "getInitialProps",
        description: "レガシーなデータフェッチ（非推奨）",
        syntax: "Component.getInitialProps = async (context) => { return {}; }",
        example:
          'function Page({ data }) { return <div>{data.title}</div>; } Page.getInitialProps = async (ctx) => { const res = await fetch("https://api.example.com/data"); const data = await res.json(); return { data }; };',
        notes: [
          "getStaticProps/getServerSideProps推奨",
          "クライアント・サーバー両方で実行",
          "自動静的最適化無効",
        ],
      },
      {
        feature: "SWR",
        description: "クライアントサイドデータフェッチング",
        syntax: "const { data, error, isLoading } = useSWR(key, fetcher)",
        example:
          'import useSWR from "swr"; const fetcher = (url) => fetch(url).then(res => res.json()); function Profile() { const { data, error, isLoading } = useSWR("/api/user", fetcher); if (error) return <div>Failed to load</div>; if (isLoading) return <div>Loading...</div>; return <div>Hello {data.name}!</div>; }',
        notes: [
          "キャッシュ・再検証・エラーハンドリング",
          "リアルタイム更新",
          "オフライン対応",
        ],
      },
      {
        feature: "API Routes",
        description: "サーバーレス API エンドポイント",
        syntax:
          'export default function handler(req, res) { res.status(200).json({ message: "Hello" }); }',
        example:
          '// pages/api/users/[id].js export default function handler(req, res) { const { id } = req.query; const { method } = req; switch (method) { case "GET": const user = await getUser(id); res.status(200).json(user); break; case "PUT": const updatedUser = await updateUser(id, req.body); res.status(200).json(updatedUser); break; default: res.setHeader("Allow", ["GET", "PUT"]); res.status(405).end(`Method ${method} Not Allowed`); } }',
        notes: [
          "pages/api/内のファイル",
          "HTTPメソッド対応",
          "ミドルウェア使用可能",
        ],
      },
      {
        feature: "Incremental Static Regeneration (ISR)",
        description: "増分静的再生成",
        syntax: "return { props: {}, revalidate: 60 };",
        example:
          'export async function getStaticProps() { const posts = await fetch("https://cms.example.com/posts").then(res => res.json()); return { props: { posts }, revalidate: 3600 // 1時間ごとに再生成 }; } // or export const revalidate = 3600; // App Router',
        notes: [
          "静的生成 + 動的更新",
          "CDNキャッシュ利用",
          "パフォーマンス最適化",
        ],
      },
    ],
  },
  {
    id: "nextjs-app-router",
    title: "Next.js App Router（13+）",
    color: "bg-indigo-50 border-indigo-200",
    headerColor: "bg-indigo-100",
    features: [
      {
        feature: "Server Components",
        description: "サーバーサイドレンダリングコンポーネント",
        syntax:
          "// デフォルトでサーバーコンポーネント async function Component() {}",
        example:
          '// app/posts/page.js async function PostsPage() { const posts = await fetch("https://api.example.com/posts").then(res => res.json()); return <div>{posts.map(post => <article key={post.id}><h2>{post.title}</h2><p>{post.excerpt}</p></article>)}</div>; }',
        notes: [
          "デフォルトでサーバーサイド",
          "async/await直接使用可能",
          "バンドルサイズ削減",
        ],
      },
      {
        feature: "Client Components",
        description: "クライアントサイドレンダリングコンポーネント",
        syntax: '"use client"; function Component() {}',
        example:
          '"use client"; import { useState } from "react"; export default function Counter() { const [count, setCount] = useState(0); return <><p>Count: {count}</p><button onClick={() => setCount(count + 1)}>+</button></>; }',
        notes: ['"use client"指定必要', "Hooks使用可能", "ブラウザAPI利用可能"],
      },
      {
        feature: "Layout",
        description: "共通レイアウト",
        syntax: "app/layout.js or app/path/layout.js",
        example:
          '// app/layout.js export default function RootLayout({ children }) { return <html lang="ja"><body><header><nav>...</nav></header><main>{children}</main><footer>...</footer></body></html>; } // app/dashboard/layout.js export default function DashboardLayout({ children }) { return <div className="dashboard"><aside>Sidebar</aside><div className="content">{children}</div></div>; }',
        notes: [
          "ネストした共通レイアウト",
          "RootLayoutは必須",
          "html, bodyタグ含む",
        ],
      },
      {
        feature: "Loading UI",
        description: "ローディング状態の表示",
        syntax: "app/loading.js or app/path/loading.js",
        example:
          '// app/posts/loading.js export default function Loading() { return <div className="animate-pulse"><div className="h-4 bg-gray-200 rounded w-3/4 mb-4"></div><div className="h-4 bg-gray-200 rounded w-1/2 mb-2"></div><div className="h-4 bg-gray-200 rounded w-5/6"></div></div>; }',
        notes: [
          "Suspense境界自動作成",
          "ネストしたローディング",
          "ストリーミング対応",
        ],
      },
      {
        feature: "Error Handling",
        description: "エラーハンドリング",
        syntax: "app/error.js or app/path/error.js",
        example:
          '"use client"; export default function Error({ error, reset }) { return <div><h2>Something went wrong!</h2><p>{error.message}</p><button onClick={() => reset()}>Try again</button></div>; } // app/global-error.js export default function GlobalError({ error, reset }) { return <html><body><h2>Something went wrong!</h2><button onClick={() => reset()}>Try again</button></body></html>; }',
        notes: [
          "Error Boundary自動作成",
          "resetで再試行",
          "global-error.jsでルートレベル",
        ],
      },
      {
        feature: "Route Groups",
        description: "ルートグループ化",
        syntax: "app/(group)/page.js",
        example:
          "// app/(auth)/login/page.js → /login // app/(auth)/register/page.js → /register // app/(dashboard)/analytics/page.js → /analytics app/(auth)/layout.js // 認証関連の共通レイアウト app/(dashboard)/layout.js // ダッシュボード関連の共通レイアウト",
        notes: ["URL影響なし", "レイアウト分離", "組織化・保守性向上"],
      },
      {
        feature: "Parallel Routes",
        description: "並列ルート",
        syntax: "app/@slot/page.js",
        example:
          '// app/dashboard/layout.js export default function Layout({ children, analytics, team }) { return <><div>{children}</div><div className="grid grid-cols-2"><div>{analytics}</div><div>{team}</div></div></>; } // app/dashboard/@analytics/page.js // app/dashboard/@team/page.js',
        notes: ["同時レンダリング", "モーダル・サイドバー", "@slotName記法"],
      },
      {
        feature: "Intercepting Routes",
        description: "ルートインターセプト",
        syntax: "app/(..)folder/page.js",
        example:
          '// app/feed/page.js // app/feed/@modal/(..)photo/[id]/page.js ← /photo/123をインターセプト export default function PhotoModal({ params }) { return <div className="modal"><img src={`/photos/${params.id}.jpg`} /><Link href="/feed">Close</Link></div>; }',
        notes: [
          "モーダル実装",
          "(.)同レベル、(..)親レベル",
          "ブラウザ更新時は通常ページ",
        ],
      },
      {
        feature: "Route Handlers",
        description: "API ルートハンドラー",
        syntax: "app/api/route.js with GET, POST, etc.",
        example:
          "// app/api/users/route.js export async function GET() { const users = await getUsers(); return Response.json(users); } export async function POST(request) { const data = await request.json(); const user = await createUser(data); return Response.json(user, { status: 201 }); } // app/api/users/[id]/route.js export async function GET(request, { params }) { const user = await getUser(params.id); return Response.json(user); }",
        notes: [
          "Web API準拠",
          "HTTPメソッド名でエクスポート",
          "Request/Response使用",
        ],
      },
      {
        feature: "generateStaticParams",
        description: "静的パラメータ生成",
        syntax:
          'export async function generateStaticParams() { return [{ param: "value" }]; }',
        example:
          '// app/posts/[slug]/page.js export async function generateStaticParams() { const posts = await fetch("https://cms.example.com/posts").then(res => res.json()); return posts.map((post) => ({ slug: post.slug })); } export default function Post({ params }) { return <h1>Post: {params.slug}</h1>; }',
        notes: ["getStaticPathsの代替", "静的生成対象指定", "ISR対応"],
      },
      {
        feature: "Streaming",
        description: "ストリーミングSSR",
        syntax:
          "<Suspense fallback={<Loading />}><AsyncComponent /></Suspense>",
        example:
          'import { Suspense } from "react"; async function SlowComponent() { await new Promise(resolve => setTimeout(resolve, 2000)); return <div>Slow data loaded!</div>; } export default function Page() { return <><h1>Fast content</h1><Suspense fallback={<div>Loading slow content...</div>}><SlowComponent /></Suspense></>; }',
        notes: ["段階的レンダリング", "TTFBの向上", "UX向上"],
      },
    ],
  },
  {
    id: "nextjs-optimization",
    title: "Next.js 最適化・設定",
    color: "bg-red-50 border-red-200",
    headerColor: "bg-red-100",
    features: [
      {
        feature: "next.config.js",
        description: "Next.js設定ファイル",
        syntax: "module.exports = { /* config */ }",
        example:
          '// next.config.js module.exports = { reactStrictMode: true, swcMinify: true, experimental: { appDir: true }, images: { domains: ["example.com"], formats: ["image/webp", "image/avif"] }, env: { CUSTOM_KEY: process.env.CUSTOM_KEY }, async redirects() { return [{ source: "/old-page", destination: "/new-page", permanent: true }]; } };',
        notes: [
          "Webpack設定カスタマイズ",
          "環境変数設定",
          "リダイレクト・リライト",
        ],
      },
      {
        feature: "Bundle Analyzer",
        description: "バンドルサイズ分析",
        syntax: "npm install @next/bundle-analyzer",
        example:
          '// next.config.js const withBundleAnalyzer = require("@next/bundle-analyzer")({ enabled: process.env.ANALYZE === "true" }); module.exports = withBundleAnalyzer({ /* config */ }); // package.json "scripts": { "analyze": "ANALYZE=true npm run build" }',
        notes: [
          "バンドルサイズ可視化",
          "最適化ポイント特定",
          "パフォーマンス改善",
        ],
      },
      {
        feature: "Code Splitting",
        description: "コード分割",
        syntax:
          'dynamic(() => import("./Component"), { loading: () => <p>Loading...</p> })',
        example:
          'import dynamic from "next/dynamic"; const DynamicChart = dynamic(() => import("./Chart"), { loading: () => <p>Loading chart...</p>, ssr: false }); const DynamicModal = dynamic(() => import("./Modal").then(mod => mod.Modal), { loading: () => <div>Loading modal...</div> });',
        notes: ["自動コード分割", "動的インポート", "SSR無効化可能"],
      },
      {
        feature: "Font Optimization",
        description: "フォント最適化",
        syntax: 'import { Inter } from "next/font/google"',
        example:
          'import { Inter, Noto_Sans_JP } from "next/font/google"; import localFont from "next/font/local"; const inter = Inter({ subsets: ["latin"] }); const notoSansJP = Noto_Sans_JP({ subsets: ["latin"], weight: ["400", "700"] }); const customFont = localFont({ src: "./fonts/custom.woff2" }); export default function Layout({ children }) { return <html className={inter.className}><body>{children}</body></html>; }',
        notes: ["Google Fonts最適化", "フォント読み込み最適化", "CLS防止"],
      },
      {
        feature: "Middleware",
        description: "ミドルウェア",
        syntax: "export function middleware(request) { /* logic */ }",
        example:
          '// middleware.js import { NextResponse } from "next/server"; export function middleware(request) { if (request.nextUrl.pathname.startsWith("/admin")) { const token = request.cookies.get("auth-token"); if (!token) { return NextResponse.redirect(new URL("/login", request.url)); } } if (request.nextUrl.pathname === "/old-page") { return NextResponse.redirect(new URL("/new-page", request.url), 301); } } export const config = { matcher: ["/admin/:path*", "/old-page"] };',
        notes: ["リクエスト前処理", "認証チェック", "リダイレクト・リライト"],
      },
      {
        feature: "Environment Variables",
        description: "環境変数",
        syntax: "NEXT_PUBLIC_* for client-side, others for server-side",
        example:
          "// .env.local NEXT_PUBLIC_API_URL=https://api.example.com DATABASE_URL=postgresql://... SECRET_KEY=secret123 // usage const apiUrl = process.env.NEXT_PUBLIC_API_URL; // クライアント・サーバー両方 const dbUrl = process.env.DATABASE_URL; // サーバーサイドのみ",
        notes: [
          "NEXT_PUBLIC_*はクライアントサイドに露出",
          ".env.local優先",
          "ビルド時に埋め込み",
        ],
      },
      {
        feature: "Internationalization (i18n)",
        description: "国際化",
        syntax: "next.config.js i18n設定",
        example:
          '// next.config.js module.exports = { i18n: { locales: ["en", "ja", "fr"], defaultLocale: "en", domains: [{ domain: "example.com", defaultLocale: "en" }, { domain: "example.jp", defaultLocale: "ja" }] } }; // usage import { useRouter } from "next/router"; const { locale, locales, asPath } = useRouter();',
        notes: ["自動言語検出", "サブパス・ドメインルーティング", "SEO対応"],
      },
      {
        feature: "Security Headers",
        description: "セキュリティヘッダー",
        syntax: "next.config.js headers設定",
        example:
          '// next.config.js module.exports = { async headers() { return [{ source: "/(.*)", headers: [{ key: "X-Frame-Options", value: "DENY" }, { key: "X-Content-Type-Options", value: "nosniff" }, { key: "Referrer-Policy", value: "origin-when-cross-origin" }, { key: "Content-Security-Policy", value: "default-src \'self\'; script-src \'self\' \'unsafe-eval\'" }] }]; } };',
        notes: ["XSS・CSRF防止", "Content Security Policy", "HTTPS強制"],
      },
      {
        feature: "Performance Monitoring",
        description: "パフォーマンス監視",
        syntax: "export function reportWebVitals(metric) {}",
        example:
          '// pages/_app.js export function reportWebVitals(metric) { switch (metric.name) { case "CLS": console.log("CLS:", metric.value); break; case "LCP": console.log("LCP:", metric.value); break; case "FCP": console.log("FCP:", metric.value); break; case "FID": console.log("FID:", metric.value); break; case "TTFB": console.log("TTFB:", metric.value); break; } }',
        notes: ["Web Vitals測定", "パフォーマンス分析", "ユーザー体験向上"],
      },
    ],
  },
  {
    id: "custom-hooks",
    title: "カスタムHooks パターン",
    color: "bg-teal-50 border-teal-200",
    headerColor: "bg-teal-100",
    features: [
      {
        feature: "useLocalStorage",
        description: "ローカルストレージとの同期",
        syntax: "const [value, setValue] = useLocalStorage(key, initialValue)",
        example:
          "function useLocalStorage(key, initialValue) { const [storedValue, setStoredValue] = useState(() => { try { const item = window.localStorage.getItem(key); return item ? JSON.parse(item) : initialValue; } catch (error) { return initialValue; } }); const setValue = (value) => { try { setStoredValue(value); window.localStorage.setItem(key, JSON.stringify(value)); } catch (error) { console.error(error); } }; return [storedValue, setValue]; }",
        notes: [
          "ブラウザストレージと状態の同期",
          "SSR対応",
          "エラーハンドリング",
        ],
      },
      {
        feature: "useFetch",
        description: "API呼び出しフック",
        syntax: "const { data, loading, error } = useFetch(url)",
        example:
          "function useFetch(url) { const [data, setData] = useState(null); const [loading, setLoading] = useState(true); const [error, setError] = useState(null); useEffect(() => { const fetchData = async () => { try { setLoading(true); const response = await fetch(url); const result = await response.json(); setData(result); } catch (err) { setError(err); } finally { setLoading(false); } }; fetchData(); }, [url]); return { data, loading, error }; }",
        notes: [
          "API呼び出しの抽象化",
          "ローディング・エラー状態管理",
          "URL変更時の再取得",
        ],
      },
      {
        feature: "useToggle",
        description: "boolean値の切り替え",
        syntax: "const [isOpen, toggle, setIsOpen] = useToggle(false)",
        example:
          "function useToggle(initialValue = false) { const [value, setValue] = useState(initialValue); const toggle = useCallback(() => setValue(prev => !prev), []); const setTrue = useCallback(() => setValue(true), []); const setFalse = useCallback(() => setValue(false), []); return [value, toggle, setValue, setTrue, setFalse]; }",
        notes: [
          "boolean状態の簡単切り替え",
          "モーダル・ドロップダウンで使用",
          "メモ化された関数",
        ],
      },
      {
        feature: "useDebounce",
        description: "値の変更を遅延",
        syntax: "const debouncedValue = useDebounce(value, delay)",
        example:
          'function useDebounce(value, delay) { const [debouncedValue, setDebouncedValue] = useState(value); useEffect(() => { const handler = setTimeout(() => { setDebouncedValue(value); }, delay); return () => { clearTimeout(handler); }; }, [value, delay]); return debouncedValue; } // 使用例 const [searchTerm, setSearchTerm] = useState(""); const debouncedSearchTerm = useDebounce(searchTerm, 500);',
        notes: [
          "検索クエリの最適化",
          "API呼び出し回数削減",
          "パフォーマンス向上",
        ],
      },
      {
        feature: "useWindowSize",
        description: "ウィンドウサイズの取得",
        syntax: "const { width, height } = useWindowSize()",
        example:
          'function useWindowSize() { const [windowSize, setWindowSize] = useState({ width: undefined, height: undefined }); useEffect(() => { function handleResize() { setWindowSize({ width: window.innerWidth, height: window.innerHeight }); } window.addEventListener("resize", handleResize); handleResize(); return () => window.removeEventListener("resize", handleResize); }, []); return windowSize; }',
        notes: [
          "レスポンシブコンポーネント",
          "ブレークポイント判定",
          "SSR対応",
        ],
      },
      {
        feature: "useInterval",
        description: "インターバル処理",
        syntax: "useInterval(callback, delay)",
        example:
          "function useInterval(callback, delay) { const savedCallback = useRef(); useEffect(() => { savedCallback.current = callback; }, [callback]); useEffect(() => { function tick() { savedCallback.current(); } if (delay !== null) { const id = setInterval(tick, delay); return () => clearInterval(id); } }, [delay]); } // 使用例 const [count, setCount] = useState(0); useInterval(() => { setCount(count + 1); }, 1000);",
        notes: ["定期実行処理", "クリーンアップ自動", "delay=nullで停止"],
      },
      {
        feature: "useClickOutside",
        description: "要素外クリックの検出",
        syntax: "useClickOutside(ref, handler)",
        example:
          'function useClickOutside(ref, handler) { useEffect(() => { function handleClickOutside(event) { if (ref.current && !ref.current.contains(event.target)) { handler(); } } document.addEventListener("mousedown", handleClickOutside); return () => { document.removeEventListener("mousedown", handleClickOutside); }; }, [ref, handler]); } // 使用例 const dropdownRef = useRef(); const [isOpen, setIsOpen] = useState(false); useClickOutside(dropdownRef, () => setIsOpen(false));',
        notes: ["ドロップダウン・モーダル閉じる", "DOM イベント処理", "UX向上"],
      },
      {
        feature: "useForm",
        description: "フォーム状態管理",
        syntax:
          "const { values, errors, handleChange, handleSubmit } = useForm(initialValues, validate)",
        example:
          "function useForm(initialValues, validate) { const [values, setValues] = useState(initialValues); const [errors, setErrors] = useState({}); const handleChange = (e) => { const { name, value } = e.target; setValues(prev => ({ ...prev, [name]: value })); }; const handleSubmit = (onSubmit) => (e) => { e.preventDefault(); const validationErrors = validate(values); setErrors(validationErrors); if (Object.keys(validationErrors).length === 0) { onSubmit(values); } }; return { values, errors, handleChange, handleSubmit }; }",
        notes: ["フォーム状態の一元管理", "バリデーション統合", "再利用性高"],
      },
    ],
  },
];
