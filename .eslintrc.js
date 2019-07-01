module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es6: true,
    node: true,
  },
  extends: [
    'airbnb-base',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaVersion: 2018,
  },
  rules: {
		"arrow-parens": [
				"error",
				"as-needed"
		],
		"indent": [
				"error",
				"tab"
		],
		"linebreak-style": [
				"error",
				"windows"
		],

		"global-require": "warn",
		"import/no-dynamic-require": "off",
		"prefer-destructuring": "off",

		"no-alert": "off",
		"no-console": "off",
		"no-plusplus": "off",
		"no-tabs": "off",
		"no-unused-vars": "off",
	},
};
