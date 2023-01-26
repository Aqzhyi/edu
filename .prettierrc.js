// @ts-check

/** @type{{ overrides: { files: string | string[], options: import('prettier').Options }[] }} */
const overrides = {
  overrides: [
    {
      files: '*.js',
      options: {
        parser: 'babel',
        printWidth: 100,
      },
    },
    {
      files: ['*.json', '.*rc'],
      options: {
        parser: 'json',
        printWidth: 100,
      },
    },
    {
      files: '*.vue',
      options: {
        parser: 'vue',
        printWidth: 100,
      },
    },
    {
      files: '*.htmlx',
      options: {
        htmlWhitespaceSensitivity: 'strict',
        parser: 'html',
        printWidth: 100,
      },
    },
    {
      files: '*.scss',
      options: {
        parser: 'scss',
        printWidth: 100,
      },
    },
  ],
}

/**
 * 更新於 0.4.2
 *
 * @see https://www.npmjs.com/package/prettier-plugin-jsdoc/v/0.4.2
 */
const prettierPluginJsdocOptions = {
  // jsdocSpaces: 1,
  // jsdocDescriptionWithDot: false,
  // jsdocDescriptionTag: false,
  // jsdocVerticalAlignment: false,
  // jsdocKeepUnParseAbleExampleIndent: false,
  // jsdocSingleLineComment: true,
  // jsdocCapitalizeDescription: true,
  // /** Add an space between last @param and @returns */
  // jsdocSeparateReturnsFromParam: false,
  // /** Add an space between tag groups */
  // jsdocSeparateTagGroups: false,
  // /** Always fence code blocks (surround them by triple backticks) */
  // jsdocPreferCodeFences: false,
  // tsdoc: false,
  // /** If You don't set value to jsdocPrintWidth, the printWidth will be use as jsdocPrintWidth. */
  // jsdocPrintWidth: undefined,
  /** "greedy": Lines wrap as soon as they reach the print width */
  // jsdocLineWrappingStyle: 'greedy',
}

/** @type {import('prettier').Options} */
const config = {
  plugins: ['prettier-plugin-jsdoc'],
  ...prettierPluginJsdocOptions,
  singleAttributePerLine: true,
  arrowParens: 'avoid',
  bracketSpacing: true,
  insertPragma: false,
  jsxBracketSameLine: false,
  jsxSingleQuote: true,
  parser: 'typescript',
  proseWrap: 'preserve',
  requirePragma: false,
  semi: false,
  singleQuote: true,
  tabWidth: 2,
  trailingComma: 'all',
  useTabs: false,
  printWidth: 100,
}

module.exports = { ...config, ...overrides }
