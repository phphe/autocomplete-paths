'use babel'

import OptionScopes from './option-scopes'

const options = {
  normalizeSlashes: {
    type: 'boolean',
    description: 'Replaces backward slashes with forward slashes on windows (if possible)',
    default: true
  },
  maxFileCount: {
    type: 'number',
    description: 'The maximum amount of files to be handled',
    default: 2000
  },
  suggestionPriority: {
    type: 'number',
    description: 'Suggestion priority of this provider. If set to a number larger than or equal to 1, suggestions will be displayed on top of default suggestions.',
    default: 2
  },
  ignoredNames: {
    type: 'boolean',
    default: true,
    description: 'Ignore items matched by the `Ignore Names` core option.'
  },
  ignoreSubmodules: {
    type: 'boolean',
    default: false,
    description: 'Ignore submodule directories.'
  },
  ignoredPatterns: {
    type: 'array',
    default: [],
    items: {
      type: 'string'
    },
    description: 'Ignore additional file path patterns.'
  },
  ignoreBuiltinScopes: {
    type: 'boolean',
    default: false,
    description: 'Ignore built-in scopes and use only scopes from user configuration.'
  },
  scopes: {
    type: 'array',
    default: [],
    items: {
      type: 'object',
      properties: {
        scopes: {
          type: ['array'],
          items: {
            type: 'string'
          }
        },
        prefixes: {
          type: ['array'],
          items: {
            type: 'string'
          }
        },
        extensions: {
          type: ['array'],
          items: {
            type: 'string'
          }
        },
        relative: {
          type: 'boolean',
          default: true
        },
        replaceOnInsert: {
          type: 'array',
          items: {
            type: 'array',
            items: {
              type: ['string', 'string']
            }
          }
        }
      }
    }
  },
   findOptions: {
     "type": "string",
     "default": "-L",
     "description": "the options of cmd 'find'. -L: follow symbolic links. -P: never follow symbolic links. More: https://www.computerhope.com/unix/ufind.htm"
   }
}

for (let key in OptionScopes) {
  options[key] = {
    type: 'boolean',
    default: false
  }
}

export default options
