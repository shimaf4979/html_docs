// nodeData.js
export const nodeSections = [
  {
    id: "core-modules",
    title: "コアモジュール",
    color: "bg-green-50 border-green-200",
    headerColor: "bg-green-100",
    modules: [
      {
        module: "fs (File System)",
        description: "ファイルシステム操作",
        methods: [
          {
            method: "fs.readFile()",
            syntax: "fs.readFile(path, options, callback)",
            example:
              'fs.readFile("file.txt", "utf8", (err, data) => { console.log(data); });',
            notes: ["非同期", "コールバック形式"],
          },
          {
            method: "fs.readFileSync()",
            syntax: "fs.readFileSync(path, options)",
            example: 'const data = fs.readFileSync("file.txt", "utf8");',
            notes: ["同期処理", "ブロッキング"],
          },
          {
            method: "fs.writeFile()",
            syntax: "fs.writeFile(file, data, options, callback)",
            example:
              'fs.writeFile("output.txt", "Hello World", (err) => { if (err) throw err; });',
            notes: ["非同期", "ファイル作成・上書き"],
          },
          {
            method: "fs.appendFile()",
            syntax: "fs.appendFile(file, data, options, callback)",
            example:
              'fs.appendFile("log.txt", "New line\\n", (err) => { if (err) throw err; });',
            notes: ["ファイル末尾に追記"],
          },
          {
            method: "fs.unlink()",
            syntax: "fs.unlink(path, callback)",
            example: 'fs.unlink("file.txt", (err) => { if (err) throw err; });',
            notes: ["ファイル削除"],
          },
          {
            method: "fs.mkdir()",
            syntax: "fs.mkdir(path, options, callback)",
            example:
              'fs.mkdir("newdir", { recursive: true }, (err) => { if (err) throw err; });',
            notes: ["ディレクトリ作成", "recursive オプション"],
          },
          {
            method: "fs.readdir()",
            syntax: "fs.readdir(path, options, callback)",
            example:
              'fs.readdir("./", (err, files) => { console.log(files); });',
            notes: ["ディレクトリ内容の取得"],
          },
          {
            method: "fs.stat()",
            syntax: "fs.stat(path, callback)",
            example:
              'fs.stat("file.txt", (err, stats) => { console.log(stats.size); });',
            notes: ["ファイル・ディレクトリの情報取得"],
          },
          {
            method: "fs.existsSync()",
            syntax: "fs.existsSync(path)",
            example:
              'if (fs.existsSync("file.txt")) { console.log("File exists"); }',
            notes: ["ファイル・ディレクトリの存在確認"],
          },
          {
            method: "fs.createReadStream()",
            syntax: "fs.createReadStream(path, options)",
            example:
              'const stream = fs.createReadStream("large-file.txt"); stream.on("data", chunk => {});',
            notes: ["大きなファイルの読み込み用"],
          },
        ],
      },
      {
        module: "path",
        description: "パス操作",
        methods: [
          {
            method: "path.join()",
            syntax: "path.join([...paths])",
            example:
              'const fullPath = path.join(__dirname, "files", "data.txt");',
            notes: ["パスを結合", "OS依存の区切り文字を使用"],
          },
          {
            method: "path.resolve()",
            syntax: "path.resolve([...paths])",
            example: 'const absolutePath = path.resolve("./files/data.txt");',
            notes: ["絶対パスに変換"],
          },
          {
            method: "path.dirname()",
            syntax: "path.dirname(path)",
            example:
              'const dir = path.dirname("/user/local/bin/node"); // "/user/local/bin"',
            notes: ["ディレクトリ部分を取得"],
          },
          {
            method: "path.basename()",
            syntax: "path.basename(path, ext)",
            example:
              'const filename = path.basename("/path/to/file.txt"); // "file.txt"',
            notes: ["ファイル名部分を取得"],
          },
          {
            method: "path.extname()",
            syntax: "path.extname(path)",
            example: 'const ext = path.extname("file.txt"); // ".txt"',
            notes: ["拡張子を取得"],
          },
          {
            method: "path.parse()",
            syntax: "path.parse(path)",
            example:
              'const parsed = path.parse("/path/to/file.txt"); // {root, dir, base, ext, name}',
            notes: ["パスを構成要素に分解"],
          },
          {
            method: "path.normalize()",
            syntax: "path.normalize(path)",
            example:
              'const normalized = path.normalize("/path/../to/file.txt"); // "/to/file.txt"',
            notes: ["パスを正規化"],
          },
          {
            method: "path.isAbsolute()",
            syntax: "path.isAbsolute(path)",
            example: 'const isAbs = path.isAbsolute("/path/to/file"); // true',
            notes: ["絶対パスかどうかを判定"],
          },
        ],
      },
      {
        module: "os",
        description: "オペレーティングシステム情報",
        methods: [
          {
            method: "os.platform()",
            syntax: "os.platform()",
            example:
              'const platform = os.platform(); // "win32", "darwin", "linux"',
            notes: ["OS プラットフォームを取得"],
          },
          {
            method: "os.arch()",
            syntax: "os.arch()",
            example: 'const architecture = os.arch(); // "x64", "arm64"',
            notes: ["CPU アーキテクチャを取得"],
          },
          {
            method: "os.cpus()",
            syntax: "os.cpus()",
            example:
              "const cpus = os.cpus(); console.log(`CPU count: ${cpus.length}`);",
            notes: ["CPU 情報の配列を取得"],
          },
          {
            method: "os.totalmem() / freemem()",
            syntax: "os.totalmem() / os.freemem()",
            example: "const total = os.totalmem(); const free = os.freemem();",
            notes: ["総メモリ・空きメモリをバイト単位で取得"],
          },
          {
            method: "os.homedir()",
            syntax: "os.homedir()",
            example:
              'const home = os.homedir(); // "/home/user" or "C:\\Users\\User"',
            notes: ["ユーザーのホームディレクトリを取得"],
          },
          {
            method: "os.tmpdir()",
            syntax: "os.tmpdir()",
            example:
              'const temp = os.tmpdir(); // "/tmp" or "C:\\Users\\User\\AppData\\Local\\Temp"',
            notes: ["テンポラリディレクトリを取得"],
          },
          {
            method: "os.hostname()",
            syntax: "os.hostname()",
            example: 'const hostname = os.hostname(); // "my-computer"',
            notes: ["ホスト名を取得"],
          },
          {
            method: "os.uptime()",
            syntax: "os.uptime()",
            example: "const uptime = os.uptime(); // seconds since boot",
            notes: ["システム稼働時間を秒で取得"],
          },
        ],
      },
    ],
  },
  {
    id: "http-networking",
    title: "HTTP・ネットワーキング",
    color: "bg-blue-50 border-blue-200",
    headerColor: "bg-blue-100",
    modules: [
      {
        module: "http",
        description: "HTTP サーバー・クライアント",
        methods: [
          {
            method: "http.createServer()",
            syntax: "http.createServer((req, res) => {})",
            example:
              'const server = http.createServer((req, res) => { res.writeHead(200); res.end("Hello World"); });',
            notes: ["HTTP サーバーを作成"],
          },
          {
            method: "server.listen()",
            syntax: "server.listen(port, hostname, callback)",
            example:
              'server.listen(3000, () => { console.log("Server running on port 3000"); });',
            notes: ["指定ポートでサーバーを開始"],
          },
          {
            method: "http.request()",
            syntax: "http.request(options, callback)",
            example:
              'const req = http.request({ hostname: "api.example.com", path: "/data" }, (res) => {});',
            notes: ["HTTP リクエストを送信"],
          },
          {
            method: "http.get()",
            syntax: "http.get(url, callback)",
            example:
              'http.get("http://api.example.com/data", (res) => { res.on("data", chunk => {}); });',
            notes: ["GET リクエストの簡易版"],
          },
          {
            method: "req.url / req.method",
            syntax: "req.url / req.method",
            example:
              'console.log(`${req.method} ${req.url}`); // "GET /api/users"',
            notes: ["リクエストのURL・メソッドを取得"],
          },
          {
            method: "req.headers",
            syntax: "req.headers",
            example:
              'const userAgent = req.headers["user-agent"]; const contentType = req.headers["content-type"];',
            notes: ["リクエストヘッダーを取得"],
          },
          {
            method: "res.writeHead()",
            syntax: "res.writeHead(statusCode, headers)",
            example:
              'res.writeHead(200, { "Content-Type": "application/json" });',
            notes: ["レスポンスヘッダーを設定"],
          },
          {
            method: "res.write() / res.end()",
            syntax: "res.write(chunk) / res.end(data)",
            example: 'res.write("Hello"); res.write(" World"); res.end();',
            notes: ["レスポンスボディを送信"],
          },
        ],
      },
      {
        module: "https",
        description: "HTTPS サーバー・クライアント",
        methods: [
          {
            method: "https.createServer()",
            syntax: "https.createServer(options, (req, res) => {})",
            example:
              "const server = https.createServer({ key: privateKey, cert: certificate }, (req, res) => {});",
            notes: ["HTTPS サーバーを作成", "SSL証明書が必要"],
          },
          {
            method: "https.request() / https.get()",
            syntax:
              "https.request(options, callback) / https.get(url, callback)",
            example:
              'https.get("https://api.example.com/data", (res) => { res.on("data", chunk => {}); });',
            notes: ["HTTPS リクエストを送信"],
          },
        ],
      },
      {
        module: "url",
        description: "URL解析",
        methods: [
          {
            method: "url.parse()",
            syntax: "url.parse(urlString, parseQueryString)",
            example:
              'const parsed = url.parse("http://example.com/path?name=value", true);',
            notes: [
              "URL文字列を解析",
              "parseQueryString で query をオブジェクトに",
            ],
          },
          {
            method: "url.format()",
            syntax: "url.format(urlObject)",
            example:
              'const urlString = url.format({ protocol: "http:", hostname: "example.com", pathname: "/path" });',
            notes: ["URLオブジェクトから文字列を生成"],
          },
          {
            method: "URL class",
            syntax: "new URL(input, base)",
            example:
              'const myUrl = new URL("https://example.com/path?name=value"); console.log(myUrl.hostname);',
            notes: ["モダンなURL API", "WHATWG URL Standard"],
          },
          {
            method: "URLSearchParams",
            syntax: "new URLSearchParams(init)",
            example:
              'const params = new URLSearchParams("?name=value&age=30"); params.get("name");',
            notes: ["URLクエリパラメータの操作"],
          },
        ],
      },
      {
        module: "querystring",
        description: "クエリ文字列の処理",
        methods: [
          {
            method: "querystring.parse()",
            syntax: "querystring.parse(str, sep, eq, options)",
            example:
              'const parsed = querystring.parse("name=John&age=30"); // {name: "John", age: "30"}',
            notes: ["クエリ文字列をオブジェクトに変換"],
          },
          {
            method: "querystring.stringify()",
            syntax: "querystring.stringify(obj, sep, eq, options)",
            example:
              'const query = querystring.stringify({name: "John", age: 30}); // "name=John&age=30"',
            notes: ["オブジェクトをクエリ文字列に変換"],
          },
        ],
      },
    ],
  },
  {
    id: "streams-buffers",
    title: "ストリーム・バッファ",
    color: "bg-purple-50 border-purple-200",
    headerColor: "bg-purple-100",
    modules: [
      {
        module: "stream",
        description: "ストリーム処理",
        methods: [
          {
            method: "stream.Readable",
            syntax: "new stream.Readable(options)",
            example:
              'const readable = new stream.Readable({ read() { this.push("data"); } });',
            notes: ["読み取り可能ストリーム"],
          },
          {
            method: "stream.Writable",
            syntax: "new stream.Writable(options)",
            example:
              "const writable = new stream.Writable({ write(chunk, encoding, callback) { console.log(chunk); callback(); } });",
            notes: ["書き込み可能ストリーム"],
          },
          {
            method: "stream.Transform",
            syntax: "new stream.Transform(options)",
            example:
              "const transform = new stream.Transform({ transform(chunk, encoding, callback) { this.push(chunk.toString().toUpperCase()); callback(); } });",
            notes: ["変換ストリーム"],
          },
          {
            method: "stream.pipeline()",
            syntax:
              "stream.pipeline(source, ...transforms, destination, callback)",
            example:
              'stream.pipeline(fs.createReadStream("input.txt"), transform, fs.createWriteStream("output.txt"), (err) => {});',
            notes: ["ストリームを連結", "エラーハンドリング自動"],
          },
          {
            method: "readable.pipe()",
            syntax: "readable.pipe(destination, options)",
            example:
              'fs.createReadStream("input.txt").pipe(fs.createWriteStream("output.txt"));',
            notes: ["ストリームを繋げる"],
          },
          {
            method: "stream events",
            syntax: "stream.on(event, listener)",
            example:
              'readable.on("data", chunk => {}); readable.on("end", () => {}); readable.on("error", err => {});',
            notes: ["data, end, error, finish など"],
          },
        ],
      },
      {
        module: "Buffer",
        description: "バイナリデータ操作",
        methods: [
          {
            method: "Buffer.from()",
            syntax: "Buffer.from(string, encoding) / Buffer.from(array)",
            example:
              'const buf1 = Buffer.from("hello", "utf8"); const buf2 = Buffer.from([72, 101, 108, 108, 111]);',
            notes: ["文字列や配列からBufferを作成"],
          },
          {
            method: "Buffer.alloc()",
            syntax: "Buffer.alloc(size, fill, encoding)",
            example:
              "const buf = Buffer.alloc(10, 0); // 10バイトのゼロ埋めBuffer",
            notes: ["指定サイズのBufferを作成"],
          },
          {
            method: "buffer.toString()",
            syntax: "buffer.toString(encoding, start, end)",
            example:
              'const str = buffer.toString("utf8"); // Bufferを文字列に変換',
            notes: ["エンコーディング指定可能"],
          },
          {
            method: "buffer.write()",
            syntax: "buffer.write(string, offset, length, encoding)",
            example: 'buffer.write("hello", 0, 5, "utf8");',
            notes: ["Bufferに文字列を書き込み"],
          },
          {
            method: "buffer.slice()",
            syntax: "buffer.slice(start, end)",
            example:
              "const slice = buffer.slice(0, 5); // 部分的なBufferを作成",
            notes: ["元のBufferと同じメモリを共有"],
          },
          {
            method: "Buffer.concat()",
            syntax: "Buffer.concat(list, totalLength)",
            example: "const combined = Buffer.concat([buf1, buf2]);",
            notes: ["複数のBufferを結合"],
          },
          {
            method: "buffer.length",
            syntax: "buffer.length",
            example: "console.log(`Buffer size: ${buffer.length} bytes`);",
            notes: ["Bufferのバイト数"],
          },
        ],
      },
    ],
  },
  {
    id: "process-environment",
    title: "プロセス・環境",
    color: "bg-yellow-50 border-yellow-200",
    headerColor: "bg-yellow-100",
    modules: [
      {
        module: "process",
        description: "プロセス情報・制御",
        methods: [
          {
            method: "process.argv",
            syntax: "process.argv",
            example:
              'console.log(process.argv); // ["node", "script.js", "arg1", "arg2"]',
            notes: ["コマンドライン引数の配列"],
          },
          {
            method: "process.env",
            syntax: "process.env",
            example:
              "const port = process.env.PORT || 3000; const nodeEnv = process.env.NODE_ENV;",
            notes: ["環境変数のオブジェクト"],
          },
          {
            method: "process.cwd()",
            syntax: "process.cwd()",
            example:
              "const currentDir = process.cwd(); console.log(`Current directory: ${currentDir}`);",
            notes: ["現在の作業ディレクトリ"],
          },
          {
            method: "process.exit()",
            syntax: "process.exit(code)",
            example:
              "process.exit(0); // 正常終了, process.exit(1); // エラー終了",
            notes: ["プロセスを終了", "0=成功、非0=エラー"],
          },
          {
            method: "process.nextTick()",
            syntax: "process.nextTick(callback)",
            example:
              'process.nextTick(() => { console.log("Next tick callback"); });',
            notes: ["次のイベントループで実行"],
          },
          {
            method: "process.pid",
            syntax: "process.pid",
            example: "console.log(`Process ID: ${process.pid}`);",
            notes: ["プロセスID"],
          },
          {
            method: "process.platform",
            syntax: "process.platform",
            example:
              'if (process.platform === "win32") { console.log("Running on Windows"); }',
            notes: ["プラットフォーム情報"],
          },
          {
            method: "process.version",
            syntax: "process.version / process.versions",
            example:
              "console.log(`Node.js version: ${process.version}`); console.log(process.versions);",
            notes: ["Node.jsバージョン情報"],
          },
          {
            method: "process events",
            syntax: "process.on(event, listener)",
            example:
              'process.on("exit", (code) => {}); process.on("uncaughtException", (err) => {});',
            notes: ["exit, uncaughtException, unhandledRejection など"],
          },
        ],
      },
      {
        module: "child_process",
        description: "子プロセス実行",
        methods: [
          {
            method: "child_process.exec()",
            syntax: "child_process.exec(command, options, callback)",
            example:
              'exec("ls -la", (error, stdout, stderr) => { console.log(stdout); });',
            notes: ["シェルコマンドを実行"],
          },
          {
            method: "child_process.spawn()",
            syntax: "child_process.spawn(command, args, options)",
            example:
              'const ls = spawn("ls", ["-la"]); ls.stdout.on("data", (data) => { console.log(data); });',
            notes: ["新しいプロセスを起動", "ストリーム形式"],
          },
          {
            method: "child_process.fork()",
            syntax: "child_process.fork(modulePath, args, options)",
            example:
              'const child = fork("worker.js"); child.send({hello: "world"});',
            notes: ["Node.jsスクリプトを子プロセスで実行"],
          },
          {
            method: "child_process.execSync()",
            syntax: "child_process.execSync(command, options)",
            example:
              'const output = execSync("date", { encoding: "utf8" }); console.log(output);',
            notes: ["同期実行版のexec"],
          },
        ],
      },
      {
        module: "cluster",
        description: "クラスター（マルチプロセス）",
        methods: [
          {
            method: "cluster.fork()",
            syntax: "cluster.fork(env)",
            example:
              "if (cluster.isMaster) { cluster.fork(); } else { /* worker process */ }",
            notes: ["ワーカープロセスを作成"],
          },
          {
            method: "cluster.isMaster / isWorker",
            syntax: "cluster.isMaster / cluster.isWorker",
            example: 'if (cluster.isMaster) { console.log("Master process"); }',
            notes: ["マスターかワーカーかを判定"],
          },
          {
            method: "cluster events",
            syntax: "cluster.on(event, listener)",
            example:
              'cluster.on("exit", (worker, code) => { console.log(`Worker ${worker.process.pid} died`); });',
            notes: ["fork, exit, disconnect など"],
          },
        ],
      },
    ],
  },
  {
    id: "crypto-security",
    title: "暗号化・セキュリティ",
    color: "bg-red-50 border-red-200",
    headerColor: "bg-red-100",
    modules: [
      {
        module: "crypto",
        description: "暗号化機能",
        methods: [
          {
            method: "crypto.createHash()",
            syntax: "crypto.createHash(algorithm)",
            example:
              'const hash = crypto.createHash("sha256").update("hello").digest("hex");',
            notes: ["ハッシュ値を生成", "md5, sha1, sha256 など"],
          },
          {
            method: "crypto.createHmac()",
            syntax: "crypto.createHmac(algorithm, key)",
            example:
              'const hmac = crypto.createHmac("sha256", "secret").update("hello").digest("hex");',
            notes: ["HMAC（認証付きハッシュ）を生成"],
          },
          {
            method: "crypto.randomBytes()",
            syntax: "crypto.randomBytes(size, callback)",
            example:
              'crypto.randomBytes(16, (err, buf) => { console.log(buf.toString("hex")); });',
            notes: ["暗号学的に安全な乱数を生成"],
          },
          {
            method: "crypto.pbkdf2()",
            syntax:
              "crypto.pbkdf2(password, salt, iterations, keylen, digest, callback)",
            example:
              'crypto.pbkdf2("password", "salt", 100000, 64, "sha512", (err, derivedKey) => {});',
            notes: ["パスワードベース鍵導出"],
          },
          {
            method: "crypto.createCipher()",
            syntax: "crypto.createCipher(algorithm, password)",
            example:
              'const cipher = crypto.createCipher("aes192", "password"); let encrypted = cipher.update("hello", "utf8", "hex");',
            notes: ["対称暗号化", "非推奨：createCipheriv使用推奨"],
          },
          {
            method: "crypto.generateKeyPair()",
            syntax: "crypto.generateKeyPair(type, options, callback)",
            example:
              'crypto.generateKeyPair("rsa", { modulusLength: 2048 }, (err, publicKey, privateKey) => {});',
            notes: ["公開鍵・秘密鍵ペアを生成"],
          },
        ],
      },
    ],
  },
  {
    id: "utilities",
    title: "ユーティリティ",
    color: "bg-indigo-50 border-indigo-200",
    headerColor: "bg-indigo-100",
    modules: [
      {
        module: "util",
        description: "ユーティリティ関数",
        methods: [
          {
            method: "util.promisify()",
            syntax: "util.promisify(original)",
            example:
              'const readFileAsync = util.promisify(fs.readFile); const data = await readFileAsync("file.txt", "utf8");',
            notes: ["コールバック関数をPromise化"],
          },
          {
            method: "util.inspect()",
            syntax: "util.inspect(object, options)",
            example:
              "console.log(util.inspect(complexObject, { depth: null, colors: true }));",
            notes: ["オブジェクトを文字列に変換（デバッグ用）"],
          },
          {
            method: "util.format()",
            syntax: "util.format(f, ...args)",
            example:
              'const message = util.format("Hello %s, you are %d years old", "John", 30);',
            notes: ["printf風の文字列フォーマット"],
          },
          {
            method: "util.inherits()",
            syntax: "util.inherits(constructor, superConstructor)",
            example:
              "util.inherits(Child, Parent); // Child.prototype.__proto__ = Parent.prototype",
            notes: ["プロトタイプ継承の設定"],
          },
        ],
      },
      {
        module: "events",
        description: "イベントエミッター",
        methods: [
          {
            method: "EventEmitter class",
            syntax: "class MyEmitter extends EventEmitter {}",
            example:
              'const emitter = new EventEmitter(); emitter.on("event", () => { console.log("Event fired!"); });',
            notes: ["イベント駆動プログラミング"],
          },
          {
            method: "emitter.on()",
            syntax: "emitter.on(eventName, listener)",
            example:
              'emitter.on("data", (data) => { console.log("Received:", data); });',
            notes: ["イベントリスナーを登録"],
          },
          {
            method: "emitter.emit()",
            syntax: "emitter.emit(eventName, ...args)",
            example: 'emitter.emit("data", { message: "Hello World" });',
            notes: ["イベントを発火"],
          },
          {
            method: "emitter.once()",
            syntax: "emitter.once(eventName, listener)",
            example:
              'emitter.once("error", (err) => { console.error("One-time error:", err); });',
            notes: ["一度だけ実行されるリスナー"],
          },
          {
            method: "emitter.removeListener()",
            syntax: "emitter.removeListener(eventName, listener)",
            example: 'emitter.removeListener("data", dataHandler);',
            notes: ["特定のリスナーを削除"],
          },
          {
            method: "emitter.removeAllListeners()",
            syntax: "emitter.removeAllListeners(eventName)",
            example:
              'emitter.removeAllListeners("data"); // 全てのdataリスナーを削除',
            notes: ["指定イベントの全リスナーを削除"],
          },
        ],
      },
      {
        module: "timers",
        description: "タイマー関数",
        methods: [
          {
            method: "setTimeout() / clearTimeout()",
            syntax:
              "setTimeout(callback, delay, ...args) / clearTimeout(timeoutObject)",
            example:
              'const timer = setTimeout(() => { console.log("Hello"); }, 1000); clearTimeout(timer);',
            notes: ["指定時間後に実行"],
          },
          {
            method: "setInterval() / clearInterval()",
            syntax:
              "setInterval(callback, delay, ...args) / clearInterval(intervalObject)",
            example:
              'const interval = setInterval(() => { console.log("Tick"); }, 1000); clearInterval(interval);',
            notes: ["指定間隔で繰り返し実行"],
          },
          {
            method: "setImmediate() / clearImmediate()",
            syntax:
              "setImmediate(callback, ...args) / clearImmediate(immediateObject)",
            example:
              'const immediate = setImmediate(() => { console.log("Immediate"); }); clearImmediate(immediate);',
            notes: ["次のイベントループで実行"],
          },
        ],
      },
      {
        module: "dns",
        description: "DNS解決",
        methods: [
          {
            method: "dns.lookup()",
            syntax: "dns.lookup(hostname, options, callback)",
            example:
              'dns.lookup("google.com", (err, address, family) => { console.log("IP:", address); });',
            notes: ["ホスト名からIPアドレスを解決"],
          },
          {
            method: "dns.resolve()",
            syntax: "dns.resolve(hostname, rrtype, callback)",
            example:
              'dns.resolve("google.com", "A", (err, addresses) => { console.log(addresses); });',
            notes: ["DNS レコードを解決"],
          },
          {
            method: "dns.reverse()",
            syntax: "dns.reverse(ip, callback)",
            example:
              'dns.reverse("8.8.8.8", (err, hostnames) => { console.log(hostnames); });',
            notes: ["IPアドレスからホスト名を逆引き"],
          },
        ],
      },
    ],
  },
  {
    id: "testing-debugging",
    title: "テスト・デバッグ",
    color: "bg-orange-50 border-orange-200",
    headerColor: "bg-orange-100",
    modules: [
      {
        module: "assert",
        description: "アサーション",
        methods: [
          {
            method: "assert.equal()",
            syntax: "assert.equal(actual, expected, message)",
            example:
              'assert.equal(2 + 2, 4, "Math should work"); // 等価性をテスト',
            notes: ["== による比較"],
          },
          {
            method: "assert.strictEqual()",
            syntax: "assert.strictEqual(actual, expected, message)",
            example:
              'assert.strictEqual(2 + 2, 4, "Should be strictly equal"); // 厳密等価性をテスト',
            notes: ["=== による比較"],
          },
          {
            method: "assert.deepEqual()",
            syntax: "assert.deepEqual(actual, expected, message)",
            example:
              'assert.deepEqual([1, 2, 3], [1, 2, 3], "Arrays should be equal");',
            notes: ["オブジェクトの深い比較"],
          },
          {
            method: "assert.ok()",
            syntax: "assert.ok(value, message)",
            example:
              'assert.ok(true, "Should be truthy"); assert.ok(user.isLoggedIn, "User should be logged in");',
            notes: ["真値かどうかをテスト"],
          },
          {
            method: "assert.throws()",
            syntax: "assert.throws(fn, error, message)",
            example:
              'assert.throws(() => { throw new Error("Test error"); }, Error, "Should throw an error");',
            notes: ["関数がエラーを投げるかテスト"],
          },
        ],
      },
      {
        module: "console",
        description: "コンソール出力",
        methods: [
          {
            method: "console.log() / info() / warn() / error()",
            syntax: "console.log(...args)",
            example:
              'console.log("Hello", "World"); console.error("Error occurred"); console.warn("Warning!");',
            notes: ["標準出力・標準エラー出力"],
          },
          {
            method: "console.dir()",
            syntax: "console.dir(obj, options)",
            example:
              "console.dir(complexObject, { depth: null, colors: true });",
            notes: ["オブジェクトの詳細表示"],
          },
          {
            method: "console.table()",
            syntax: "console.table(tabularData, properties)",
            example:
              'console.table([{name: "John", age: 30}, {name: "Jane", age: 25}]);',
            notes: ["表形式でデータを表示"],
          },
          {
            method: "console.time() / timeEnd()",
            syntax: "console.time(label) / console.timeEnd(label)",
            example:
              'console.time("loop"); for(let i=0; i<1000000; i++){} console.timeEnd("loop");',
            notes: ["実行時間の測定"],
          },
          {
            method: "console.trace()",
            syntax: "console.trace(message)",
            example:
              'console.trace("Trace point reached"); // スタックトレースを出力',
            notes: ["呼び出しスタックを表示"],
          },
          {
            method: "console.count() / countReset()",
            syntax: "console.count(label) / console.countReset(label)",
            example:
              'console.count("clicks"); console.count("clicks"); console.countReset("clicks");',
            notes: ["カウンターの管理"],
          },
        ],
      },
      {
        module: "inspector",
        description: "デバッガー",
        methods: [
          {
            method: "inspector.open()",
            syntax: "inspector.open(port, host, wait)",
            example:
              'inspector.open(9229, "localhost", true); // デバッガーを起動',
            notes: ["V8 Inspector を開く"],
          },
          {
            method: "debugger statement",
            syntax: "debugger;",
            example:
              "function problematicFunction() { debugger; /* ここでブレークポイント */ }",
            notes: ["ブレークポイントを設定"],
          },
        ],
      },
    ],
  },
  {
    id: "performance",
    title: "パフォーマンス",
    color: "bg-cyan-50 border-cyan-200",
    headerColor: "bg-cyan-100",
    modules: [
      {
        module: "perf_hooks",
        description: "パフォーマンス測定",
        methods: [
          {
            method: "performance.now()",
            syntax: "performance.now()",
            example:
              "const start = performance.now(); /* 処理 */ const end = performance.now(); console.log(end - start);",
            notes: ["高精度タイムスタンプ"],
          },
          {
            method: "performance.mark()",
            syntax: "performance.mark(name)",
            example:
              'performance.mark("start-operation"); /* 処理 */ performance.mark("end-operation");',
            notes: ["パフォーマンスマークを設定"],
          },
          {
            method: "performance.measure()",
            syntax: "performance.measure(name, startMark, endMark)",
            example:
              'performance.measure("operation-duration", "start-operation", "end-operation");',
            notes: ["マーク間の時間を測定"],
          },
          {
            method: "PerformanceObserver",
            syntax: "new PerformanceObserver(callback)",
            example:
              'const obs = new PerformanceObserver((list) => { console.log(list.getEntries()); }); obs.observe({entryTypes: ["measure"]});',
            notes: ["パフォーマンスエントリを監視"],
          },
        ],
      },
      {
        module: "worker_threads",
        description: "ワーカースレッド",
        methods: [
          {
            method: "Worker class",
            syntax: "new Worker(filename, options)",
            example:
              'const worker = new Worker("./worker.js"); worker.postMessage("Hello"); worker.on("message", (data) => {});',
            notes: ["別スレッドでJSを実行"],
          },
          {
            method: "isMainThread",
            syntax: "worker_threads.isMainThread",
            example:
              'if (isMainThread) { console.log("Main thread"); } else { console.log("Worker thread"); }',
            notes: ["メインスレッドかワーカーかを判定"],
          },
          {
            method: "parentPort",
            syntax: "worker_threads.parentPort",
            example:
              'parentPort.postMessage("Hello from worker"); parentPort.on("message", (data) => {});',
            notes: ["ワーカーからメインスレッドとの通信"],
          },
          {
            method: "workerData",
            syntax: "worker_threads.workerData",
            example:
              'console.log("Worker received:", workerData); // Workerに渡されたデータ',
            notes: ["Workerに渡された初期データ"],
          },
        ],
      },
    ],
  },
  {
    id: "package-management",
    title: "パッケージ管理・モジュール",
    color: "bg-emerald-50 border-emerald-200",
    headerColor: "bg-emerald-100",
    modules: [
      {
        module: "module",
        description: "モジュールシステム",
        methods: [
          {
            method: "require()",
            syntax: "require(id)",
            example:
              'const fs = require("fs"); const myModule = require("./my-module");',
            notes: ["CommonJS モジュール読み込み"],
          },
          {
            method: "module.exports",
            syntax: "module.exports = value",
            example:
              'module.exports = { hello: () => "Hello World" }; module.exports.version = "1.0.0";',
            notes: ["モジュールのエクスポート"],
          },
          {
            method: "exports",
            syntax: "exports.property = value",
            example:
              "exports.greet = (name) => `Hello, ${name}!`; exports.PI = 3.14159;",
            notes: ["module.exports のショートハンド"],
          },
          {
            method: "__dirname / __filename",
            syntax: "__dirname / __filename",
            example:
              'console.log("Current file:", __filename); console.log("Current directory:", __dirname);',
            notes: ["現在のファイルパス・ディレクトリパス"],
          },
          {
            method: "require.resolve()",
            syntax: "require.resolve(id)",
            example:
              'const modulePath = require.resolve("lodash"); console.log("Module path:", modulePath);',
            notes: ["モジュールの絶対パスを取得"],
          },
          {
            method: "require.cache",
            syntax: "require.cache",
            example:
              'delete require.cache[require.resolve("./my-module")]; // キャッシュを削除',
            notes: ["requireのキャッシュ管理"],
          },
        ],
      },
      {
        module: "ES Modules",
        description: "ES6モジュール",
        methods: [
          {
            method: "import",
            syntax:
              'import { name } from "module" / import defaultExport from "module"',
            example:
              'import fs from "fs/promises"; import { readFile, writeFile } from "fs/promises";',
            notes: ["ES6インポート構文", '.mjs or package.json type: "module"'],
          },
          {
            method: "export",
            syntax: "export { name } / export default value",
            example:
              "export const PI = 3.14159; export default function greet(name) { return `Hello, ${name}`; }",
            notes: ["ES6エクスポート構文"],
          },
          {
            method: "dynamic import()",
            syntax: "import(specifier)",
            example:
              'const module = await import("./my-module.js"); const lodash = await import("lodash");',
            notes: ["動的インポート、Promise を返す"],
          },
        ],
      },
      {
        module: "npm / yarn",
        description: "パッケージマネージャー",
        methods: [
          {
            method: "package.json",
            syntax: "package.json設定",
            example:
              '{"name": "my-app", "version": "1.0.0", "dependencies": {"express": "^4.18.0"}}',
            notes: ["プロジェクト設定ファイル"],
          },
          {
            method: "npm install",
            syntax: "npm install [package]",
            example:
              "npm install express; npm install --save-dev nodemon; npm install -g typescript;",
            notes: ["パッケージのインストール"],
          },
          {
            method: "npm scripts",
            syntax: "package.json scripts セクション",
            example:
              '{"scripts": {"start": "node app.js", "dev": "nodemon app.js", "test": "jest"}}',
            notes: ["npm run start でスクリプト実行"],
          },
          {
            method: "node_modules",
            syntax: "node_modules ディレクトリ",
            example: 'require("express") // node_modules/express から読み込み',
            notes: ["インストール済みパッケージの格納場所"],
          },
        ],
      },
    ],
  },
  {
    id: "popular-frameworks",
    title: "人気フレームワーク・ライブラリ",
    color: "bg-teal-50 border-teal-200",
    headerColor: "bg-teal-100",
    modules: [
      {
        module: "Express.js",
        description: "Web アプリケーションフレームワーク",
        methods: [
          {
            method: "express()",
            syntax: "const app = express()",
            example:
              'const express = require("express"); const app = express(); app.listen(3000);',
            notes: ["Express アプリケーションを作成"],
          },
          {
            method: "app.get() / post() / put() / delete()",
            syntax: "app.method(path, handler)",
            example:
              'app.get("/", (req, res) => { res.send("Hello World"); }); app.post("/users", (req, res) => {});',
            notes: ["HTTP メソッドのルーティング"],
          },
          {
            method: "app.use()",
            syntax: "app.use([path,] middleware)",
            example:
              'app.use(express.json()); app.use("/api", apiRouter); app.use(express.static("public"));',
            notes: ["ミドルウェアの適用"],
          },
          {
            method: "req / res オブジェクト",
            syntax: "req.params, req.query, req.body / res.send(), res.json()",
            example:
              'app.get("/users/:id", (req, res) => { res.json({ id: req.params.id, query: req.query }); });',
            notes: ["リクエスト・レスポンスの操作"],
          },
          {
            method: "express.Router()",
            syntax: "const router = express.Router()",
            example:
              'const router = express.Router(); router.get("/", (req, res) => {}); app.use("/api", router);',
            notes: ["ルーターの分離"],
          },
        ],
      },
      {
        module: "Socket.io",
        description: "リアルタイム通信",
        methods: [
          {
            method: "io() / socket",
            syntax: 'const io = require("socket.io")(server)',
            example:
              'io.on("connection", (socket) => { socket.emit("welcome", "Hello!"); });',
            notes: ["WebSocket ベースのリアルタイム通信"],
          },
          {
            method: "socket.emit() / on()",
            syntax: "socket.emit(event, data) / socket.on(event, callback)",
            example:
              'socket.emit("message", "Hello"); socket.on("chat", (data) => { console.log(data); });',
            notes: ["イベントの送受信"],
          },
          {
            method: "io.to() / socket.join()",
            syntax: "io.to(room).emit(event, data) / socket.join(room)",
            example:
              'socket.join("room1"); io.to("room1").emit("update", data);',
            notes: ["ルーム機能"],
          },
        ],
      },
      {
        module: "Mongoose (MongoDB)",
        description: "MongoDB ODM",
        methods: [
          {
            method: "mongoose.connect()",
            syntax: "mongoose.connect(uri, options)",
            example:
              'mongoose.connect("mongodb://localhost:27017/myapp", { useNewUrlParser: true });',
            notes: ["MongoDB への接続"],
          },
          {
            method: "Schema / Model",
            syntax: "new mongoose.Schema() / mongoose.model()",
            example:
              'const userSchema = new mongoose.Schema({ name: String, age: Number }); const User = mongoose.model("User", userSchema);',
            notes: ["スキーマ定義とモデル作成"],
          },
          {
            method: "CRUD 操作",
            syntax:
              "Model.create(), find(), findById(), updateOne(), deleteOne()",
            example:
              'const user = await User.create({ name: "John", age: 30 }); const users = await User.find();',
            notes: ["データベース操作"],
          },
        ],
      },
      {
        module: "Jest (テスト)",
        description: "テストフレームワーク",
        methods: [
          {
            method: "describe() / test()",
            syntax: "describe(name, fn) / test(name, fn)",
            example:
              'describe("Math", () => { test("adds 1 + 2 to equal 3", () => { expect(1 + 2).toBe(3); }); });',
            notes: ["テストスイートとテストケース"],
          },
          {
            method: "expect() matchers",
            syntax: "expect(value).matcher()",
            example:
              "expect(value).toBe(4); expect(array).toContain(item); expect(fn).toThrow();",
            notes: ["アサーション"],
          },
          {
            method: "beforeEach() / afterEach()",
            syntax: "beforeEach(fn) / afterEach(fn)",
            example:
              "beforeEach(() => { database.clear(); }); afterEach(() => { cleanup(); });",
            notes: ["セットアップ・ティアダウン"],
          },
        ],
      },
    ],
  },
];
