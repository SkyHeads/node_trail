import { promises } from 'fs'

export async function deleteFile(filename: string) {
  try {
    await promises.stat(filename)
  } catch {}

  await promises.unlink(filename)
}
