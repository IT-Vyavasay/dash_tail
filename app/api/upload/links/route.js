import { NextResponse } from 'next/server';
import path from 'path';
import { promises as fs } from 'fs';

// Define the GET request handler
export async function GET() {
  // Path to the links.json file
  const filePath = path.join(process.cwd(), 'public', 'link.json');

  try {
    // Read the file contents
    const fileData = await fs.readFile(filePath, 'utf-8');
    const jsonData = JSON.parse(fileData);

    // Return the JSON data
    return NextResponse.json(jsonData);
  } catch (error) {
    console.error('Error reading links.json:', error);
    return NextResponse.error();
  }
}
