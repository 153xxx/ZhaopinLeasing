module.exports = {
  '*.{js,jsx,ts,tsx}': ['eslint --fix', 'prettier --write'],
  '{!(package)*.json,*.code-snippets,.!(browserslist)*rc}': ['prettier --write--parser json'],
  'package.json': ['prettier --write'],
<<<<<<< HEAD
  '*.vue': ['eslint --fix', 'prettier --write', 'stylelint --fix'],
=======
  '*.vue': ['eslint --fix', 'prettier --write'],
>>>>>>> 61bfed2d487820a404a8b373c61e709bbbc8b2e1
  '*.{scss,less,styl,html}': ['stylelint --fix', 'prettier --write'],
  '*.md': ['prettier --write'],
};
