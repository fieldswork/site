import { promises as fs } from 'fs';
import path from 'path';

const filePath = path.resolve(process.cwd(), 'visitorCount.json');

export async function POST() {
  try {
    let data = await fs.readFile(filePath, 'utf8');
    let count = JSON.parse(data).count;
    count += 1;
    await fs.writeFile(filePath, JSON.stringify({ count }), 'utf8');
    return new Response(JSON.stringify({ count }), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ error: 'unable to read or write visitor count' }), { status: 500 });
  }
}

export async function GET() {
  try {
    let data = await fs.readFile(filePath, 'utf8');
    let count = JSON.parse(data).count;
    return new Response(JSON.stringify({ count }), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ error: 'unable to read or write visitor count' }), { status: 500 });
  }
}