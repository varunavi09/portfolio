import { readdir, readFile } from 'node:fs/promises'
import path from 'node:path'
import { transform } from 'esbuild'

const root = process.cwd()
const ignoredDirs = new Set(['.git', 'dist', 'node_modules'])
const targetExtensions = new Set(['.js', '.jsx'])

async function collectFiles(dir) {
  const entries = await readdir(dir, { withFileTypes: true })
  const files = []

  for (const entry of entries) {
    if (entry.isDirectory()) {
      if (!ignoredDirs.has(entry.name)) {
        files.push(...await collectFiles(path.join(dir, entry.name)))
      }
      continue
    }

    if (targetExtensions.has(path.extname(entry.name))) {
      files.push(path.join(dir, entry.name))
    }
  }

  return files
}

const files = await collectFiles(root)
const errors = []

for (const file of files) {
  const source = await readFile(file, 'utf8')
  const loader = path.extname(file) === '.jsx' ? 'jsx' : 'js'

  try {
    await transform(source, { loader, sourcefile: file })
  } catch (error) {
    errors.push(error.message)
  }
}

if (errors.length > 0) {
  console.error(errors.join('\n\n'))
  process.exit(1)
}

console.log(`Checked ${files.length} JavaScript files.`)
