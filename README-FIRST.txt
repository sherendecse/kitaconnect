KITA Connect — Complete GitHub Pages Package

1. Extract this ZIP.
2. Upload ALL extracted contents to the ROOT of your kitaconnect repository.
3. REPLACE the existing root index.html with this package's index.html.
4. GitHub Pages: main branch, / (root).
5. Wait for deployment and refresh https://sherendecse.github.io/kitaconnect/.

Root index.html is a complete compiled website with its JavaScript and CSS embedded. It does not require a separate assets folder. Existing assets and src folders may remain.

editable-source/ contains the full editable application, translations, styles, browser-local data adapter and demo API logic. Do NOT copy editable-source/index.html over the ROOT index.html.

To develop: enter editable-source/, run npm install, then npm run dev.
To rebuild: npm run build; publish the contents of editable-source/dist/ together.

Demo data is browser-local, not shared between devices. It is a complete static demonstration, not the Sites-hosted shared database.
