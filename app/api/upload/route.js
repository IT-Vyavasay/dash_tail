// app/api/upload/route.js
import { NextResponse } from 'next/server';
import { promises as fs } from 'fs';
import path from 'path';
import { AddOrUpdateLink } from '../../../utills/includes/common';
export const POST = async req => {
  try {
    const data = await req.formData();
    const file = data.get('file');

    const filePath = path.join(process.cwd(), 'public/uploads', file.name);
    await fs.writeFile(filePath, Buffer.from(await file.arrayBuffer()));

    const fileUrl = `/uploads/${file.name}`;
    AddOrUpdateLink(fileUrl);
    return NextResponse.json({ url: fileUrl }, { status: 200 });
  } catch (error) {
    console.error('Error uploading file:', error);
    return NextResponse.json(
      { error: 'Failed to upload file' },
      { status: 500 },
    );
  }
};
