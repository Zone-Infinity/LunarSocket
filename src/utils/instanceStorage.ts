import { readFileSync } from 'node:fs';
import { writeFile } from 'node:fs/promises';
import { join } from 'node:path';

var instanceStorage = new Map<string, any>();
export default instanceStorage;

const storagePath = join(process.cwd(), 'storage.json');

export function restoreStorage(): void {
  instanceStorage = JSON.parse(readFileSync(storagePath, 'utf-8'));
}

export async function updateStorage(): Promise<void> {
  await writeFile(storagePath, JSON.stringify(instanceStorage, null, 2));
}
