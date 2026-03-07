const fs = require('fs');
const file = 'src/tests/setup.js';
let content = fs.readFileSync(file, 'utf8');

if (!content.includes('import { vi }')) {
    content = "import { vi } from 'vitest';\n" + content;
    fs.writeFileSync(file, content);
}
