export default {
  plugins: ['stylelint-prettier'], extends: 'stylelint-config-standard', rules: {
    'at-rule-no-deprecated': [true, {
      ignoreAtRules: ['tailwind', 'apply', 'variants', 'responsive', 'screen'],
    }],
    'prettier/prettier': true,
    'property-no-vendor-prefix': null,
    'selector-no-vendor-prefix': null,
    'selector-pseudo-element-colon-notation': null,
    'function-no-unknown': null,
    'selector-class-pattern': ['^[a-z]([-]?[a-z0-9]+)*(__[a-z0-9]([-]?[a-z0-9]+)*)?(--[a-z0-9]([-]?[a-z0-9]+)*)?$', {
      resolveNestedSelectors: true, message: function expected(selectorValue) {
        return `Expected class selector "${selectorValue}" to match BEM CSS pattern https://en.bem.info/methodology/css/. Selector validation tool: https://regexr.com/3apms`;
      },
    }],
  },
};