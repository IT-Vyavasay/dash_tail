'use client';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { UploadCloud, Upload } from 'lucide-react';
import React, { useState } from 'react';
// import axios from 'axios';
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
import { storage } from '../../../../../utills/includes/firebase.js';

const FileUploadWithButton = () => {
  const [file, setFile] = useState(null);
  // const [uploadProgress, setUploadProgress] = useState(0);
  const [download, setDownload] = useState(false);
  // const [uploadedFiles, setUploadedFiles] = useState([]);

  // Handle file selection
  const handleFileChange = e => {
    setFile(e.target.files[0]);
  };

  // Handle file upload
  const handleUpload = () => {
    if (!file || file) {
      setDownload(true),
      //console.error('Eosf');
      return;
    }
    try {
      // Reference to Firebase Storage (You can specify a folder, e.g., 'uploads/')
      const storageRef = ref(storage, `uploads/${file.name}`);

      // Upload file with progress tracking
      const uploadTask = uploadBytesResumable(storageRef, file);

      uploadTask.on(
        'state_changed',
        snapshot => {
          // Calculate upload progress
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          // setUploadProgress(progress);
        },
        error => {
          console.error('Upload failed:', error);
        },
        setDownload(true),
        // async () => {
        // On successful upload, get the download URL
        // const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
        // setDownloadURL(downloadURL);
        // setUploadedFiles(prev => [
        //   ...prev,
        //   { name: file.name, url: downloadURL },
        // ]);
        setFile(null),
        // setUploadProgress(0); // Reset the progress bar
        // },
      );
    } catch (error) {
      console.error('Eosf');
    }
  };

  return (
    <div className='flex  flex-col gap-5'>
      <div className='flex items-center flex-wrap gap-4'>
        <Label>
          <Button asChild>
            <div>
              <Upload className='me-2 h-4 w-4' /> Choose File
            </div>
          </Button>
          <Input type='file' className='hidden' />
        </Label>
        <Label>
          <div>
            <Button asChild color='success'>
              <div>
                Choose File <Upload className='ms-2 h-4 w-4' />
              </div>
            </Button>
          </div>
          <Input type='file' className='hidden' />
        </Label>

        <Label>
          <div>
            <Button asChild color='info' variant='outline'>
              <div>
                Choose File <Upload className=' ms-2 h-4 w-4' />
              </div>
            </Button>
          </div>
          <Input type='file' className='hidden' />
        </Label>
      </div>
      <div className='flex items-center flex-wrap gap-4'>
        <Label>
          <div>
            <Button asChild>
              <div>
                <UploadCloud className='h-4 w-4' />
              </div>
            </Button>
          </div>
          <Input type='file' className='hidden' />
        </Label>
        {/* Code */}
        <Label>
          <div>
            <Button asChild color='warning' variant='outline'>
              <div>
                <UploadCloud className='h-4 w-4' />
              </div>
            </Button>
          </div>
          <Input type='file' onChange={handleFileChange} className='hidden' />
        </Label>
      </div>
      <div className='flex items-center flex-wrap gap-5'>
        <Label
          htmlFor='circle_file_1'
          className='h-[68px] w-[68px] rounded-full flex items-center justify-center  border border-default-300 border-dashed'
        >
          <div>
            <Input type='file' className='hidden' id='circle_file_1' />
            <Upload className='text-default-400' />
          </div>
        </Label>
        <Label
          htmlFor='circle_file_1'
          className='h-12 w-12 rounded-full flex items-center justify-center  border border-default-300 border-dashed'
        >
          <div>
            <Input type='file' className='hidden' id='circle_file_1' />
            <Upload className='text-default-400 h-5 w-5' />
          </div>
        </Label>
        <Label
          htmlFor='circle_file_1'
          className='h-9 w-9 rounded-full flex items-center justify-center  bg-default-100 BorderUploads'
          style={download ? { border: `solid 1px #00000021` } : {}}
        >
          <div onClick={handleUpload}>
            {/* <div> */}
            <Input type='file' className='hidden' id='circle_file_1' />
            <Upload className='text-default-400 h-4 w-4' />
          </div>
        </Label>
      </div>
    </div>
  );
};

export default FileUploadWithButton;
