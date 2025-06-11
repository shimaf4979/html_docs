// typescriptData.js
export const typescriptSections = [
  {
    id: "basic-types",
    title: "基本型",
    color: "bg-blue-50 border-blue-200",
    headerColor: "bg-blue-100",
    features: [
      {
        feature: "string",
        description: "文字列型",
        syntax: 'let name: string = "value"',
        example: 'let message: string = "Hello TypeScript";',
        notes: ["文字列リテラル", "テンプレートリテラル対応"],
      },
      {
        feature: "number",
        description: "数値型",
        syntax: "let count: number = 42",
        example: "let price: number = 99.99; let hex: number = 0xf00d;",
        notes: ["整数・浮動小数点・16進数など全て number"],
      },
      {
        feature: "boolean",
        description: "真偽値型",
        syntax: "let flag: boolean = true",
        example:
          "let isActive: boolean = true; let isDisabled: boolean = false;",
        notes: ["true または false のみ"],
      },
      {
        feature: "bigint",
        description: "大きな整数型",
        syntax: "let big: bigint = 100n",
        example: "let largeNumber: bigint = 9007199254740991n;",
        notes: ["ES2020以降", "nサフィックス必須"],
      },
      {
        feature: "symbol",
        description: "シンボル型",
        syntax: 'let sym: symbol = Symbol("key")',
        example:
          'let uniqueKey: symbol = Symbol("id"); let globalSym: symbol = Symbol.for("global");',
        notes: ["一意な識別子", "グローバルシンボルレジストリ"],
      },
      {
        feature: "undefined / null",
        description: "undefined・null型",
        syntax: "let value: undefined = undefined",
        example: "let notSet: undefined = undefined; let empty: null = null;",
        notes: ["strictNullChecks での動作が変わる"],
      },
      {
        feature: "void",
        description: "戻り値なし",
        syntax: "function log(): void { }",
        example: 'function printMessage(): void { console.log("Hello"); }',
        notes: ["関数の戻り値がない場合"],
      },
      {
        feature: "never",
        description: "決して値を返さない",
        syntax: "function error(): never { throw new Error(); }",
        example: "function infiniteLoop(): never { while(true) {} }",
        notes: ["例外を投げるか無限ループ"],
      },
      {
        feature: "any",
        description: "任意の型",
        syntax: "let value: any = 42",
        example:
          "let dynamicContent: any = fetchFromAPI(); dynamicContent.foo.bar;",
        notes: ["型チェックを無効化", "使用は最小限に"],
      },
      {
        feature: "unknown",
        description: "型安全な any",
        syntax: "let value: unknown = getData()",
        example:
          'let userInput: unknown = JSON.parse(input); if (typeof userInput === "string") { console.log(userInput.toUpperCase()); }',
        notes: ["使用前に型ガードが必要"],
      },
    ],
  },
  {
    id: "complex-types",
    title: "複合型",
    color: "bg-green-50 border-green-200",
    headerColor: "bg-green-100",
    features: [
      {
        feature: "Array",
        description: "配列型",
        syntax: "let arr: type[] = [] or Array<type>",
        example:
          'let numbers: number[] = [1, 2, 3]; let strings: Array<string> = ["a", "b"];',
        notes: ["2つの書き方が可能", "読み取り専用配列: ReadonlyArray<T>"],
      },
      {
        feature: "Tuple",
        description: "タプル型",
        syntax: "let tuple: [type1, type2] = [value1, value2]",
        example:
          'let person: [string, number] = ["Alice", 25]; let coords: [number, number, number?] = [1, 2];',
        notes: ["要素数・順序・型が固定", "オプショナル要素対応"],
      },
      {
        feature: "Object",
        description: "オブジェクト型",
        syntax: "let obj: { prop: type } = { prop: value }",
        example:
          'let user: { name: string; age: number } = { name: "John", age: 30 };',
        notes: ["プロパティ型の指定"],
      },
      {
        feature: "Optional Properties",
        description: "オプショナルプロパティ",
        syntax: "let obj: { prop?: type }",
        example:
          'let config: { host: string; port?: number } = { host: "localhost" };',
        notes: ["? マークで省略可能"],
      },
      {
        feature: "Readonly Properties",
        description: "読み取り専用プロパティ",
        syntax: "let obj: { readonly prop: type }",
        example:
          "let point: { readonly x: number; readonly y: number } = { x: 10, y: 20 };",
        notes: ["代入後は変更不可"],
      },
      {
        feature: "Index Signatures",
        description: "インデックスシグネチャ",
        syntax: "let obj: { [key: keyType]: valueType }",
        example:
          'let dictionary: { [key: string]: string } = { hello: "こんにちは" };',
        notes: ["動的なプロパティ名"],
      },
      {
        feature: "Function Type",
        description: "関数型",
        syntax: "(param: type) => returnType",
        example:
          "let greet: (name: string) => string = (name) => `Hello, ${name}!`;",
        notes: ["関数の型注釈"],
      },
      {
        feature: "Union Types",
        description: "ユニオン型",
        syntax: "let value: type1 | type2",
        example:
          'let id: string | number = 123; let status: "loading" | "success" | "error" = "loading";',
        notes: ["複数の型のいずれか"],
      },
      {
        feature: "Intersection Types",
        description: "インターセクション型",
        syntax: "let value: type1 & type2",
        example:
          'type User = { name: string } & { age: number }; let user: User = { name: "John", age: 30 };',
        notes: ["複数の型の結合"],
      },
      {
        feature: "Literal Types",
        description: "リテラル型",
        syntax: 'let value: "literal" | 42',
        example:
          'let direction: "up" | "down" | "left" | "right" = "up"; let dice: 1 | 2 | 3 | 4 | 5 | 6 = 1;',
        notes: ["特定の値のみ許可"],
      },
    ],
  },
  {
    id: "interfaces-types",
    title: "インターフェース・型エイリアス",
    color: "bg-purple-50 border-purple-200",
    headerColor: "bg-purple-100",
    features: [
      {
        feature: "interface",
        description: "インターフェース定義",
        syntax: "interface Name { prop: type }",
        example: "interface User { id: number; name: string; email?: string; }",
        notes: ["オブジェクトの形状を定義", "拡張可能"],
      },
      {
        feature: "Interface Extension",
        description: "インターフェース継承",
        syntax: "interface Child extends Parent { }",
        example:
          "interface Animal { name: string } interface Dog extends Animal { breed: string }",
        notes: ["複数のインターフェースを継承可能"],
      },
      {
        feature: "type",
        description: "型エイリアス",
        syntax: "type Name = type",
        example:
          "type ID = string | number; type User = { name: string; age: number };",
        notes: ["型に名前を付ける", "ユニオン型・関数型も可能"],
      },
      {
        feature: "Callable Interface",
        description: "呼び出し可能インターフェース",
        syntax: "interface Name { (param: type): returnType }",
        example:
          "interface Greeter { (name: string): string; language: string; }",
        notes: ["関数型 + プロパティ"],
      },
      {
        feature: "Indexable Interface",
        description: "インデックス可能インターフェース",
        syntax: "interface Name { [index: keyType]: valueType }",
        example:
          "interface StringArray { [index: number]: string; } interface Dictionary { [key: string]: any; }",
        notes: ["配列や辞書のような構造"],
      },
      {
        feature: "Class Interface",
        description: "クラス実装インターフェース",
        syntax: "class Name implements Interface { }",
        example:
          'interface Flyable { fly(): void } class Bird implements Flyable { fly() { console.log("Flying"); } }',
        notes: ["クラスがインターフェースを実装"],
      },
      {
        feature: "Interface vs Type",
        description: "interfaceとtypeの違い",
        syntax: "interface: 宣言マージ可能 / type: より柔軟",
        example:
          "interface User { name: string } interface User { age: number } // マージされる",
        notes: ["interfaceは拡張性、typeは表現力"],
      },
    ],
  },
  {
    id: "functions",
    title: "関数",
    color: "bg-yellow-50 border-yellow-200",
    headerColor: "bg-yellow-100",
    features: [
      {
        feature: "Function Declaration",
        description: "関数宣言",
        syntax: "function name(param: type): returnType { }",
        example: "function add(a: number, b: number): number { return a + b; }",
        notes: ["パラメータと戻り値の型指定"],
      },
      {
        feature: "Function Expression",
        description: "関数式",
        syntax: "const name = (param: type): returnType => { }",
        example: "const multiply = (a: number, b: number): number => a * b;",
        notes: ["アロー関数での型指定"],
      },
      {
        feature: "Optional Parameters",
        description: "オプショナルパラメータ",
        syntax: "function name(param?: type) { }",
        example:
          'function greet(name: string, title?: string): string { return `Hello, ${title || ""} ${name}`; }',
        notes: ["? マークで省略可能", "末尾に配置"],
      },
      {
        feature: "Default Parameters",
        description: "デフォルトパラメータ",
        syntax: "function name(param: type = defaultValue) { }",
        example:
          "function createUser(name: string, age: number = 18): User { return { name, age }; }",
        notes: ["デフォルト値指定", "型推論される"],
      },
      {
        feature: "Rest Parameters",
        description: "レストパラメータ",
        syntax: "function name(...rest: type[]) { }",
        example:
          "function sum(...numbers: number[]): number { return numbers.reduce((a, b) => a + b, 0); }",
        notes: ["可変長引数", "配列として受け取る"],
      },
      {
        feature: "Function Overloads",
        description: "関数オーバーロード",
        syntax:
          "function name(param: type1): returnType1; function name(param: type2): returnType2;",
        example:
          "function format(value: string): string; function format(value: number): string; function format(value: any): string { return String(value); }",
        notes: ["複数のシグネチャを定義"],
      },
      {
        feature: "Generic Functions",
        description: "ジェネリック関数",
        syntax: "function name<T>(param: T): T { }",
        example:
          'function identity<T>(arg: T): T { return arg; } const result = identity<string>("hello");',
        notes: ["型パラメータで再利用性向上"],
      },
      {
        feature: "this Parameter",
        description: "thisパラメータ",
        syntax: "function name(this: ThisType, param: type) { }",
        example:
          "interface Card { suit: string; } function pickCard(this: Card): Card { return this; }",
        notes: ["thisの型を明示的に指定"],
      },
    ],
  },
  {
    id: "generics",
    title: "ジェネリクス",
    color: "bg-pink-50 border-pink-200",
    headerColor: "bg-pink-100",
    features: [
      {
        feature: "Generic Types",
        description: "ジェネリック型",
        syntax: "type Name<T> = T",
        example:
          'type Box<T> = { value: T }; let stringBox: Box<string> = { value: "hello" };',
        notes: ["型パラメータで汎用的な型を定義"],
      },
      {
        feature: "Generic Interfaces",
        description: "ジェネリックインターフェース",
        syntax: "interface Name<T> { prop: T }",
        example:
          "interface Container<T> { item: T; add(item: T): void; } class NumberContainer implements Container<number> { item = 0; add(item: number) { this.item += item; } }",
        notes: ["インターフェースのジェネリック化"],
      },
      {
        feature: "Generic Classes",
        description: "ジェネリッククラス",
        syntax: "class Name<T> { prop: T }",
        example:
          "class Stack<T> { private items: T[] = []; push(item: T) { this.items.push(item); } pop(): T | undefined { return this.items.pop(); } }",
        notes: ["クラスのジェネリック化"],
      },
      {
        feature: "Generic Constraints",
        description: "ジェネリック制約",
        syntax: "function name<T extends Constraint>(param: T) { }",
        example:
          "interface Lengthwise { length: number } function logLength<T extends Lengthwise>(arg: T): T { console.log(arg.length); return arg; }",
        notes: ["型パラメータに制約を追加"],
      },
      {
        feature: "keyof Constraint",
        description: "keyof制約",
        syntax: "function name<T, K extends keyof T>(obj: T, key: K) { }",
        example:
          "function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] { return obj[key]; }",
        notes: ["オブジェクトのキーに制約"],
      },
      {
        feature: "Conditional Types",
        description: "条件型",
        syntax: "T extends U ? X : Y",
        example:
          "type NonNullable<T> = T extends null | undefined ? never : T; type ApiResponse<T> = T extends string ? { message: T } : { data: T };",
        notes: ["型の条件分岐"],
      },
      {
        feature: "Mapped Types",
        description: "マップ型",
        syntax: "type Name<T> = { [K in keyof T]: T[K] }",
        example:
          "type Partial<T> = { [P in keyof T]?: T[P] }; type Required<T> = { [P in keyof T]-?: T[P] };",
        notes: ["既存の型から新しい型を生成"],
      },
      {
        feature: "Template Literal Types",
        description: "テンプレートリテラル型",
        syntax: "type Name = `prefix-${string}-suffix`",
        example:
          'type EventName<T extends string> = `on${Capitalize<T>}`; type ClickEvent = EventName<"click">; // "onClick"',
        notes: ["文字列リテラル型の組み合わせ"],
      },
    ],
  },
  {
    id: "utility-types",
    title: "ユーティリティ型",
    color: "bg-indigo-50 border-indigo-200",
    headerColor: "bg-indigo-100",
    features: [
      {
        feature: "Partial<T>",
        description: "全プロパティをオプショナルに",
        syntax: "Partial<T>",
        example:
          "interface User { name: string; age: number; } type PartialUser = Partial<User>; // { name?: string; age?: number; }",
        notes: ["既存の型のプロパティを全てオプショナルに"],
      },
      {
        feature: "Required<T>",
        description: "全プロパティを必須に",
        syntax: "Required<T>",
        example:
          "interface Config { host?: string; port?: number; } type RequiredConfig = Required<Config>; // { host: string; port: number; }",
        notes: ["オプショナルプロパティを必須に"],
      },
      {
        feature: "Readonly<T>",
        description: "全プロパティを読み取り専用に",
        syntax: "Readonly<T>",
        example:
          "interface Point { x: number; y: number; } type ReadonlyPoint = Readonly<Point>; // { readonly x: number; readonly y: number; }",
        notes: ["プロパティの変更を禁止"],
      },
      {
        feature: "Pick<T, K>",
        description: "指定したプロパティのみ抽出",
        syntax: "Pick<T, K extends keyof T>",
        example:
          'interface User { id: number; name: string; email: string; age: number; } type UserSummary = Pick<User, "id" | "name">; // { id: number; name: string; }',
        notes: ["必要なプロパティのみを選択"],
      },
      {
        feature: "Omit<T, K>",
        description: "指定したプロパティを除外",
        syntax: "Omit<T, K extends keyof any>",
        example:
          'interface User { id: number; name: string; password: string; } type PublicUser = Omit<User, "password">; // { id: number; name: string; }',
        notes: ["特定のプロパティを除外"],
      },
      {
        feature: "Record<K, T>",
        description: "キーと値の型を指定したオブジェクト",
        syntax: "Record<K extends keyof any, T>",
        example:
          'type Page = "home" | "about" | "contact"; type Navigation = Record<Page, string>; // { home: string; about: string; contact: string; }',
        notes: ["辞書型の作成"],
      },
      {
        feature: "Exclude<T, U>",
        description: "型から特定の型を除外",
        syntax: "Exclude<T, U>",
        example:
          'type AllColors = "red" | "green" | "blue" | "yellow"; type PrimaryColors = Exclude<AllColors, "yellow">; // "red" | "green" | "blue"',
        notes: ["ユニオン型から特定の型を除外"],
      },
      {
        feature: "Extract<T, U>",
        description: "型から特定の型のみ抽出",
        syntax: "Extract<T, U>",
        example:
          "type Mixed = string | number | boolean; type StringOrNumber = Extract<Mixed, string | number>; // string | number",
        notes: ["ユニオン型から特定の型のみを抽出"],
      },
      {
        feature: "NonNullable<T>",
        description: "null・undefinedを除外",
        syntax: "NonNullable<T>",
        example:
          "type MaybeString = string | null | undefined; type DefiniteString = NonNullable<MaybeString>; // string",
        notes: ["null・undefinedを型から除外"],
      },
      {
        feature: "ReturnType<T>",
        description: "関数の戻り値の型を取得",
        syntax: "ReturnType<T extends (...args: any) => any>",
        example:
          'function getUser() { return { id: 1, name: "John" }; } type User = ReturnType<typeof getUser>; // { id: number; name: string; }',
        notes: ["関数型から戻り値の型を抽出"],
      },
      {
        feature: "Parameters<T>",
        description: "関数のパラメータの型をタプルで取得",
        syntax: "Parameters<T extends (...args: any) => any>",
        example:
          "function greet(name: string, age: number) {} type GreetParams = Parameters<typeof greet>; // [string, number]",
        notes: ["関数のパラメータ型をタプルで取得"],
      },
      {
        feature: "ConstructorParameters<T>",
        description: "コンストラクタのパラメータ型をタプルで取得",
        syntax:
          "ConstructorParameters<T extends abstract new (...args: any) => any>",
        example:
          "class Person { constructor(name: string, age: number) {} } type PersonConstructorParams = ConstructorParameters<typeof Person>; // [string, number]",
        notes: ["クラスのコンストラクタパラメータ型"],
      },
      {
        feature: "InstanceType<T>",
        description: "コンストラクタ関数のインスタンス型を取得",
        syntax: "InstanceType<T extends abstract new (...args: any) => any>",
        example:
          "class Person { name: string; constructor(name: string) { this.name = name; } } type PersonInstance = InstanceType<typeof Person>; // Person",
        notes: ["クラスのインスタンス型を取得"],
      },
    ],
  },
  {
    id: "classes",
    title: "クラス",
    color: "bg-red-50 border-red-200",
    headerColor: "bg-red-100",
    features: [
      {
        feature: "Class Declaration",
        description: "クラス宣言",
        syntax: "class Name { }",
        example:
          "class Person { name: string; constructor(name: string) { this.name = name; } }",
        notes: ["プロパティの型注釈必須"],
      },
      {
        feature: "Access Modifiers",
        description: "アクセス修飾子",
        syntax: "public / private / protected",
        example:
          "class Animal { public name: string; private age: number; protected species: string; }",
        notes: ["public（デフォルト）、private、protected"],
      },
      {
        feature: "readonly modifier",
        description: "readonly修飾子",
        syntax: "readonly property: type",
        example:
          "class Point { readonly x: number; readonly y: number; constructor(x: number, y: number) { this.x = x; this.y = y; } }",
        notes: ["初期化後は変更不可"],
      },
      {
        feature: "Parameter Properties",
        description: "パラメータプロパティ",
        syntax: "constructor(public prop: type) { }",
        example:
          "class Person { constructor(public name: string, private age: number) {} }",
        notes: ["コンストラクタでプロパティ宣言と初期化を同時に"],
      },
      {
        feature: "Getters / Setters",
        description: "ゲッター・セッター",
        syntax: "get prop() { } / set prop(value) { }",
        example:
          "class Circle { private _radius = 0; get radius() { return this._radius; } set radius(value: number) { if (value >= 0) this._radius = value; } }",
        notes: ["プロパティアクセスをメソッドで制御"],
      },
      {
        feature: "Static Members",
        description: "静的メンバー",
        syntax: "static property: type / static method() { }",
        example:
          "class MathUtils { static PI = 3.14159; static calculateArea(radius: number): number { return this.PI * radius * radius; } }",
        notes: ["インスタンス化せずにアクセス可能"],
      },
      {
        feature: "Abstract Classes",
        description: "抽象クラス",
        syntax: "abstract class Name { abstract method(): type; }",
        example:
          'abstract class Animal { abstract makeSound(): void; move(): void { console.log("Moving..."); } } class Dog extends Animal { makeSound() { console.log("Woof!"); } }',
        notes: ["インスタンス化不可、継承専用"],
      },
      {
        feature: "Class Inheritance",
        description: "クラス継承",
        syntax: "class Child extends Parent { }",
        example:
          "class Animal { name: string; constructor(name: string) { this.name = name; } } class Dog extends Animal { breed: string; constructor(name: string, breed: string) { super(name); this.breed = breed; } }",
        notes: ["extendsキーワード、superでスーパークラスアクセス"],
      },
      {
        feature: "Generic Classes",
        description: "ジェネリッククラス",
        syntax: "class Name<T> { prop: T }",
        example:
          "class Container<T> { private items: T[] = []; add(item: T): void { this.items.push(item); } get(index: number): T { return this.items[index]; } }",
        notes: ["型パラメータを持つクラス"],
      },
    ],
  },
  {
    id: "modules",
    title: "モジュール",
    color: "bg-teal-50 border-teal-200",
    headerColor: "bg-teal-100",
    features: [
      {
        feature: "Export",
        description: "エクスポート",
        syntax: "export const/function/class/interface/type",
        example:
          "export const PI = 3.14159; export function add(a: number, b: number): number { return a + b; } export default class Calculator {}",
        notes: ["名前付きエクスポートとデフォルトエクスポート"],
      },
      {
        feature: "Import",
        description: "インポート",
        syntax: 'import { name } from "module"',
        example:
          'import { PI, add } from "./math"; import Calculator from "./calculator"; import * as Utils from "./utils";',
        notes: ["名前付きインポート、デフォルトインポート、名前空間インポート"],
      },
      {
        feature: "Re-export",
        description: "再エクスポート",
        syntax: 'export { name } from "module"',
        example:
          'export { PI, add } from "./math"; export { default as Calculator } from "./calculator"; export * from "./utils";',
        notes: ["他のモジュールからの再エクスポート"],
      },
      {
        feature: "Type-only Import/Export",
        description: "型のみのインポート・エクスポート",
        syntax: 'import type { Type } from "module"',
        example:
          'import type { User, ApiResponse } from "./types"; export type { User } from "./user"; export type { default as UserType } from "./user";',
        notes: ["実行時には削除される型のみのインポート"],
      },
      {
        feature: "Module Declaration",
        description: "モジュール宣言",
        syntax: 'declare module "module-name" { }',
        example:
          'declare module "lodash" { export function debounce(func: Function, wait: number): Function; } declare module "*.css" { const styles: Record<string, string>; export default styles; }',
        notes: ["外部モジュールの型定義"],
      },
      {
        feature: "Namespace",
        description: "名前空間",
        syntax: "namespace Name { }",
        example:
          "namespace Geometry { export interface Point { x: number; y: number; } export function distance(p1: Point, p2: Point): number { return Math.sqrt((p2.x - p1.x) ** 2 + (p2.y - p1.y) ** 2); } }",
        notes: ["内部モジュール、ES Modulesが推奨"],
      },
      {
        feature: "Ambient Modules",
        description: "アンビエントモジュール",
        syntax: 'declare module "module-name"',
        example:
          'declare module "my-library" { export function doSomething(): void; } // .d.ts ファイルで使用',
        notes: ["JavaScript ライブラリの型定義"],
      },
    ],
  },
  {
    id: "advanced",
    title: "高度な機能",
    color: "bg-orange-50 border-orange-200",
    headerColor: "bg-orange-100",
    features: [
      {
        feature: "Type Guards",
        description: "型ガード",
        syntax: "function isType(value: any): value is Type { }",
        example:
          'function isString(value: any): value is string { return typeof value === "string"; } if (isString(input)) { console.log(input.toUpperCase()); }',
        notes: ["実行時の型チェックで型を絞り込み"],
      },
      {
        feature: "Discriminated Unions",
        description: "判別可能なユニオン",
        syntax:
          'type Union = { kind: "a"; data: TypeA } | { kind: "b"; data: TypeB }',
        example:
          'type Shape = { kind: "circle"; radius: number } | { kind: "square"; size: number }; function area(shape: Shape) { switch (shape.kind) { case "circle": return Math.PI * shape.radius ** 2; case "square": return shape.size ** 2; } }',
        notes: ["共通プロパティで型を判別"],
      },
      {
        feature: "Type Assertions",
        description: "型アサーション",
        syntax: "value as Type or <Type>value",
        example:
          'const input = document.getElementById("input") as HTMLInputElement; const value = <string>someValue;',
        notes: ["開発者が型を明示的に指定"],
      },
      {
        feature: "Non-null Assertion",
        description: "non-null アサーション",
        syntax: "value!",
        example:
          'const element = document.getElementById("app")!; // null ではないことを保証',
        notes: ["null・undefined ではないことを明示"],
      },
      {
        feature: "Definite Assignment",
        description: "確実な代入アサーション",
        syntax: "property!: type",
        example:
          'class Component { element!: HTMLElement; // コンストラクタ外で初期化されることを保証 init() { this.element = document.createElement("div"); } }',
        notes: ["初期化チェックを回避"],
      },
      {
        feature: "Declaration Merging",
        description: "宣言のマージ",
        syntax: "同名のインターフェース・名前空間を結合",
        example:
          "interface User { name: string; } interface User { age: number; } // { name: string; age: number; } にマージ",
        notes: ["同名の宣言を自動的に結合"],
      },
      {
        feature: "Mixins",
        description: "ミックスイン",
        syntax: "type Constructor<T = {}> = new (...args: any[]) => T",
        example:
          "type Timestamped = { timestamp: Date }; function Timestamped<TBase extends Constructor>(Base: TBase) { return class extends Base { timestamp = new Date(); }; }",
        notes: ["複数のクラスの機能を組み合わせ"],
      },
      {
        feature: "Decorators",
        description: "デコレータ",
        syntax: "@decorator",
        example:
          "@sealed class Person { @readonly name: string; constructor(name: string) { this.name = name; } } function sealed(constructor: Function) { Object.seal(constructor); }",
        notes: ["実験的機能、メタプログラミング"],
      },
    ],
  },
  {
    id: "compiler",
    title: "コンパイラオプション",
    color: "bg-cyan-50 border-cyan-200",
    headerColor: "bg-cyan-100",
    features: [
      {
        feature: "tsconfig.json",
        description: "TypeScript設定ファイル",
        syntax: '{ "compilerOptions": { }, "include": [], "exclude": [] }',
        example:
          '{ "compilerOptions": { "target": "ES2020", "module": "commonjs", "strict": true }, "include": ["src/**/*"], "exclude": ["node_modules"] }',
        notes: ["プロジェクト設定の中心ファイル"],
      },
      {
        feature: "target",
        description: "コンパイル対象のJavaScriptバージョン",
        syntax: '"target": "ES5" | "ES2015" | "ES2020" | "ESNext"',
        example: '"target": "ES2020" // ES2020 にコンパイル',
        notes: ["出力するJavaScriptのバージョンを指定"],
      },
      {
        feature: "module",
        description: "モジュールシステム",
        syntax: '"module": "commonjs" | "es6" | "es2020" | "esnext"',
        example: '"module": "es2020" // ES Modules を使用',
        notes: ["生成されるモジュール形式"],
      },
      {
        feature: "lib",
        description: "使用するライブラリ",
        syntax: '"lib": ["ES2020", "DOM"]',
        example: '"lib": ["ES2020", "DOM", "WebWorker"] // 使用可能なAPI',
        notes: ["利用可能なAPIライブラリを指定"],
      },
      {
        feature: "strict",
        description: "厳格な型チェック",
        syntax: '"strict": true',
        example: '"strict": true // 全ての厳格オプションを有効',
        notes: ["型安全性を最大化"],
      },
      {
        feature: "strictNullChecks",
        description: "null・undefinedチェック",
        syntax: '"strictNullChecks": true',
        example: '"strictNullChecks": true // null・undefined を厳密にチェック',
        notes: ["null・undefinedの代入を制限"],
      },
      {
        feature: "noImplicitAny",
        description: "暗黙のanyを禁止",
        syntax: '"noImplicitAny": true',
        example: '"noImplicitAny": true // 型注釈なしの any を禁止',
        notes: ["型の明示を強制"],
      },
      {
        feature: "outDir / rootDir",
        description: "出力・ルートディレクトリ",
        syntax: '"outDir": "./dist", "rootDir": "./src"',
        example:
          '"outDir": "./build", "rootDir": "./src" // ディレクトリ構造を維持',
        notes: ["ファイル配置の制御"],
      },
      {
        feature: "declaration",
        description: "型定義ファイル生成",
        syntax: '"declaration": true',
        example: '"declaration": true // .d.ts ファイルを生成',
        notes: ["ライブラリ開発時に使用"],
      },
      {
        feature: "sourceMap",
        description: "ソースマップ生成",
        syntax: '"sourceMap": true',
        example: '"sourceMap": true // デバッグ用のマップファイル生成',
        notes: ["デバッグ時に元のTypeScriptコードを参照"],
      },
      {
        feature: "esModuleInterop",
        description: "ES Moduleとの相互運用",
        syntax: '"esModuleInterop": true',
        example:
          '"esModuleInterop": true // CommonJSモジュールのインポートを簡素化',
        notes: ["import文でCommonJSモジュールを使用"],
      },
      {
        feature: "allowSyntheticDefaultImports",
        description: "合成デフォルトインポート許可",
        syntax: '"allowSyntheticDefaultImports": true',
        example:
          '"allowSyntheticDefaultImports": true // デフォルトエクスポートのないモジュールでもdefaultインポート可能',
        notes: ["デフォルトエクスポートがなくてもimport可能"],
      },
      {
        feature: "skipLibCheck",
        description: "ライブラリの型チェックスキップ",
        syntax: '"skipLibCheck": true',
        example: '"skipLibCheck": true // .d.ts ファイルの型チェックをスキップ',
        notes: ["コンパイル速度向上"],
      },
      {
        feature: "forceConsistentCasingInFileNames",
        description: "ファイル名の大文字小文字を厳密にチェック",
        syntax: '"forceConsistentCasingInFileNames": true',
        example:
          '"forceConsistentCasingInFileNames": true // ファイル名の大文字小文字を統一',
        notes: ["クロスプラットフォーム対応"],
      },
    ],
  },
  {
    id: "tools",
    title: "ツール・エコシステム",
    color: "bg-emerald-50 border-emerald-200",
    headerColor: "bg-emerald-100",
    features: [
      {
        feature: "tsc (TypeScript Compiler)",
        description: "TypeScriptコンパイラ",
        syntax: "tsc [options] [files...]",
        example:
          "tsc index.ts // 単一ファイルコンパイル tsc --watch // ウォッチモード tsc --init // tsconfig.json生成",
        notes: ["コマンドラインからのコンパイル"],
      },
      {
        feature: "ts-node",
        description: "TypeScript直接実行",
        syntax: "ts-node [options] [script]",
        example:
          "ts-node index.ts // TypeScriptを直接実行 ts-node --esm module.ts // ES Modules対応",
        notes: ["開発時の高速実行"],
      },
      {
        feature: "@types packages",
        description: "型定義パッケージ",
        syntax: "npm install @types/package-name",
        example:
          "npm install @types/node @types/express @types/lodash // 型定義をインストール",
        notes: ["JavaScript ライブラリの型定義"],
      },
      {
        feature: "ESLint + TypeScript",
        description: "TypeScript用ESLint",
        syntax: "@typescript-eslint/parser, @typescript-eslint/eslint-plugin",
        example:
          '{ "parser": "@typescript-eslint/parser", "plugins": ["@typescript-eslint"], "rules": { "@typescript-eslint/no-unused-vars": "error" } }',
        notes: ["TypeScript専用のリンタールール"],
      },
      {
        feature: "Prettier",
        description: "コードフォーマッター",
        syntax: 'prettier --write "src/**/*.{ts,tsx}"',
        example:
          '{ "semi": true, "singleQuote": true, "tabWidth": 2, "trailingComma": "es5" } // .prettierrc',
        notes: ["一貫したコードスタイル"],
      },
      {
        feature: "Jest + TypeScript",
        description: "TypeScript用テストフレームワーク",
        syntax: "jest with ts-jest preset",
        example:
          '{ "preset": "ts-jest", "testEnvironment": "node", "roots": ["<rootDir>/src"], "testMatch": ["**/*.test.ts"] } // jest.config.js',
        notes: ["TypeScriptのテスト環境"],
      },
      {
        feature: "Webpack + TypeScript",
        description: "TypeScript用バンドラー設定",
        syntax: "ts-loader or babel-loader",
        example:
          '{ test: /\\.tsx?$/, use: "ts-loader", exclude: /node_modules/ } // webpack.config.js',
        notes: ["フロントエンド開発での利用"],
      },
      {
        feature: "Vite + TypeScript",
        description: "高速開発サーバー",
        syntax: "Vite built-in TypeScript support",
        example:
          "npm create vite@latest my-app -- --template vanilla-ts // TypeScriptテンプレート",
        notes: ["モダンなフロントエンド開発"],
      },
      {
        feature: "Type-only imports",
        description: "型のみのインポート最適化",
        syntax: 'import type { Type } from "./module"',
        example:
          'import type { User } from "./types"; import { createUser } from "./api"; // 型は実行時に除去',
        notes: ["バンドルサイズの最適化"],
      },
    ],
  },
  {
    id: "best-practices",
    title: "ベストプラクティス",
    color: "bg-amber-50 border-amber-200",
    headerColor: "bg-amber-100",
    features: [
      {
        feature: "Type vs Interface",
        description: "型エイリアスとインターフェースの使い分け",
        syntax: "interface for objects, type for unions/computed types",
        example:
          'interface User { name: string; } // オブジェクト形状 type Status = "loading" | "success" | "error"; // ユニオン型',
        notes: ["interface: 拡張性重視、type: 表現力重視"],
      },
      {
        feature: "Naming Conventions",
        description: "命名規則",
        syntax: "PascalCase for types/interfaces, camelCase for variables",
        example:
          'interface UserProfile {} type ApiResponse<T> = {} const userName: string = ""; function getUserData(): UserProfile {}',
        notes: ["一貫した命名でコードの可読性向上"],
      },
      {
        feature: "Strict Mode",
        description: "厳格モードの活用",
        syntax: '"strict": true in tsconfig.json',
        example:
          '{ "compilerOptions": { "strict": true, "noImplicitReturns": true, "noFallthroughCasesInSwitch": true } }',
        notes: ["型安全性を最大化、バグを早期発見"],
      },
      {
        feature: "Type Guards Pattern",
        description: "型ガードパターン",
        syntax: "function isType(obj: unknown): obj is Type {}",
        example:
          'function isUser(obj: unknown): obj is User { return obj != null && typeof obj === "object" && "name" in obj; }',
        notes: ["実行時の型安全性確保"],
      },
      {
        feature: "Avoid any",
        description: "any型の回避",
        syntax: "Use unknown, specific types, or generics instead",
        example:
          "function processData<T>(data: T): T {} // any の代わりにジェネリクス const value: unknown = getData(); // any の代わりに unknown",
        notes: ["型安全性を維持、any は最後の手段"],
      },
      {
        feature: "Utility Types Usage",
        description: "ユーティリティ型の活用",
        syntax: "Leverage built-in utility types",
        example:
          'type CreateUser = Omit<User, "id">; type UserUpdate = Partial<Pick<User, "name" | "email">>; type UserKeys = keyof User;',
        notes: ["既存の型から効率的に新しい型を生成"],
      },
      {
        feature: "Modular Type Definitions",
        description: "モジュラーな型定義",
        syntax: "Separate types into dedicated files",
        example:
          '// types/user.ts export interface User {} // types/api.ts export type ApiResponse<T> = {} // types/index.ts export * from "./user"; export * from "./api";',
        notes: ["保守性・再利用性の向上"],
      },
      {
        feature: "Error Handling Types",
        description: "型安全なエラーハンドリング",
        syntax: "Result<T, E> pattern or discriminated unions",
        example:
          "type Result<T, E> = { success: true; data: T } | { success: false; error: E }; async function fetchUser(): Promise<Result<User, string>> {}",
        notes: ["例外に頼らない型安全なエラー処理"],
      },
      {
        feature: "Documentation with JSDoc",
        description: "JSDocによる型の文書化",
        syntax: "/** @description */ above type definitions",
        example:
          "/** * Represents a user in the system * @interface User */ interface User { /** User's unique identifier */ id: number; /** User's display name */ name: string; }",
        notes: ["型の意図と使用方法を明確化"],
      },
    ],
  },
];
