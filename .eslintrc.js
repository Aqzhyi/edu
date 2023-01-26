// @ts-check
const basicExcludes = ['node_modules', 'out', '.next', '.history', 'public', '*tsbuildinfo']

const basicExtends = [
  'plugin:@typescript-eslint/recommended',
  'eslint:recommended',
  'plugin:react/recommended',
  'plugin:react-hooks/recommended',
  'prettier',
  // 'plugin:valtio/recommended',
]

/** @type {import('eslint').Linter.RulesRecord} */
const basicTSRules = {
  // 命名規範
  '@typescript-eslint/naming-convention': [
    'error',
    {
      // I 開頭的 `interface` 命名模式早已棄用
      selector: 'interface',
      format: ['PascalCase'],
      custom: {
        regex: '^I[A-Z]',
        match: false,
      },
    },
    {
      // 業界傾向 typescript 關鍵字 `type` 和 `interface`
      selector: 'typeLike',
      format: ['PascalCase'],
    },
  ],

  // Get up coding quality, can avoid confusing on reading code
  'no-shadow': 'off',
  '@typescript-eslint/no-shadow': ['error'],

  // 使用 namespace 來讓 types 有個統一的前部變量，提供 vscode 自動完成很方便
  '@typescript-eslint/no-namespace': 'off',
}

/** @type {import('eslint').Linter.RulesRecord} */
const basicRules = {
  'react/prop-types': 'off',
  'no-unused-vars': 'off',
  '@typescript-eslint/no-unused-vars': 'off',
  'react/react-in-jsx-scope': 'warn',

  // 解決 emotionjs 的錯誤，我們實際上有 css 這個 props
  // see https://github.com/emotion-js/emotion/blob/5fa2d54a9bbd8361e2561f876f1d0b81d0b6bcd7/docs/eslint-plugin-react.mdx
  'react/no-unknown-property': ['error', { ignore: ['css'] }],

  // Can use in development mode, but don't let it get to the production
  'no-debugger': 'warn',
  'no-console': ['warn', { allow: ['warn', 'error'] }],

  // 讓 DEV 可以只 warn 這條規則，而不影響 hot-reload 使 debug 方便
  'no-unreachable': 'warn',
  /*
    About of 'react/display-name': ['error'],
    雖然很麻煩，但沒有好解法，維持住 error，原因是使得 devtool 方便 debug
    see https://github.com/yannickcr/eslint-plugin-react/issues/2133#issuecomment-569321619
  */
}

/** @type {import('eslint').Linter.BaseConfig} */
const config = {
  parser: '@typescript-eslint/parser',
  plugins: [
    '@typescript-eslint',
    'prettier',
    'jest',
    'jest-dom',
    'react',
    'react-hooks',
    'testing-library',
    // see https://github.com/mysticatea/eslint-plugin-es
    // 'eslint-plugin-es',
  ],
  extends: basicExtends,
  env: {
    browser: true,
  },
  globals: {
    React: true,
  },
  parserOptions: {
    ecmaVersion: 2020,
    ecmaFeatures: {
      globalReturn: true,
      jsx: true,
    },
    sourceType: 'module',
    project: 'tsconfig.json',
  },
  rules: { ...basicRules },
  overrides: [
    {
      files: ['public/charing_library'],
      excludedFiles: ['*'],
      parser: '',
      rules: {
        ...basicRules,
      },
    },
    {
      files: ['*.test.{tsx,ts}'],
      excludedFiles: basicExcludes,
      extends: [...basicExtends, 'plugin:jest/recommended', 'plugin:jest-dom/recommended'],
      env: { node: true },
      rules: {
        ...basicRules,
        ...basicTSRules,

        // 留到 push 之前再測
        'jest/valid-title': 'off',
        // 留到 push 之前再測
        'jest/expect-expect': 'off',
        // 測試內部程式不在 prop-types
        'react/prop-types': 'off',
        // 測試內部程式不在乎 display-name
        'react/display-name': 'off',
        // 測試內部程式不太在乎這條規則
        '@typescript-eslint/ban-ts-comment': 'off',
      },
    },
    {
      files: ['*.ts', '*.tsx'],
      excludedFiles: [...basicExcludes],
      rules: {
        ...basicRules,
        ...basicTSRules,

        // Make the global interface declarations works without eslint "no-undef" error
        'no-undef': 'off',

        // javascript 奇耙，sort 跟你想得不一樣
        '@typescript-eslint/require-array-sort-compare': ['error'],

        // 防止錯誤理解 promise 的誤用情況
        '@typescript-eslint/no-misused-promises': ['error'],
      },
    },
    {
      files: ['*.js'],
      excludedFiles: basicExcludes,
      env: { node: true },
      parser: '@babel/eslint-parser',
      rules: {
        ...basicRules,

        '@typescript-eslint/no-var-requires': 'off',
      },
    },
  ],
  settings: {
    react: {
      version: 'detect',
      linkComponents: [
        // Components used as alternatives to <a> for linking, eg. <Link to={ url } />
        'Hyperlink',
        { name: 'a', linkAttribute: 'AppLink' },
      ],
    },
  },
}

module.exports = config
