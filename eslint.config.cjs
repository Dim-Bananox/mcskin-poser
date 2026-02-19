const reactPlugin = require('eslint-plugin-react')
const jsxA11yPlugin = require('eslint-plugin-jsx-a11y')
const prettierPlugin = require('eslint-plugin-prettier')
const prettierConfig = require('eslint-config-prettier')

const mergeRules = (...ruleSets) => Object.assign({}, ...ruleSets.map(r => (r && r.rules) || {}))

const recommendedRules = mergeRules(
	reactPlugin && reactPlugin.configs && reactPlugin.configs.recommended,
	jsxA11yPlugin && jsxA11yPlugin.configs && jsxA11yPlugin.configs.recommended,
	prettierConfig && prettierConfig.configs && prettierConfig.configs.recommended
)

module.exports = [
	{
		files: ['**/*.js', '**/*.jsx', '**/*.cjs', '**/*.mjs'],
		ignores: ['node_modules/**', 'dist/**', 'build/**'],
		languageOptions: {
			parserOptions: {
				ecmaVersion: 2021,
				sourceType: 'module',
				ecmaFeatures: { jsx: true }
			}
		},
		plugins: {
			react: reactPlugin,
			'jsx-a11y': jsxA11yPlugin,
			prettier: prettierPlugin
		},
		rules: Object.assign({}, recommendedRules, {
			'prettier/prettier': ['warn'],
			'react/react-in-jsx-scope': 'off',
			'react/prop-types': 'off',
			'no-unused-vars': 'off',
			'jsx-a11y/no-noninteractive-element-interactions': 'off',
			'jsx-a11y/click-events-have-key-events': 'warn',
			'no-restricted-imports': ['error', { patterns: ['@/features/*/*'] }]
		}),
		settings: {
			react: {
				version: 'detect'
			}
		},
		linterOptions: {
			reportUnusedDisableDirectives: true
		}
	}
]
