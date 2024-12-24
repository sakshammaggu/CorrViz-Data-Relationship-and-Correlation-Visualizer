'use client';
import React, { useState } from 'react'
import DropFile from '../DropFile/page'
import { Button } from '@/components/ui/button';

const FileUploadSection: React.FC = () => {
    const [uploadedFile, setUploadedFile] = useState<File | null>(null);
    const [showDetails, setShowDetails] = useState<boolean>(false);
    
    const handleFileSelect = (file: File) => {
      setUploadedFile(file);
      setShowDetails(false);
      console.log("File selected:", file.name);
    };

    const handleShowDetails = () => {
      if (uploadedFile) {
        setShowDetails(true);
      }
    };
  
    return (
      <section className="flex-1 flex flex-col items-center justify-center p-6">
        <div className="max-w-4xl w-full bg-white shadow-lg rounded-lg p-8">
          <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
            Upload Your File
          </h1>

          <DropFile onFileSelect={handleFileSelect} />

          <div className="mt-6 flex justify-center">
            <Button
              onClick={handleShowDetails}
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg"
            >
              Upload & Show Details
            </Button>
          </div>
  
          {showDetails && uploadedFile && (
            <div className="mt-6 bg-gray-100 p-4 rounded-lg shadow-md">
              <h2 className="text-xl font-semibold text-gray-700 mb-2">
                Uploaded File Details
              </h2>
              <p className="text-gray-600">
                <strong>Name:</strong> {uploadedFile.name}
              </p>
              <p className="text-gray-600">
                <strong>Size:</strong> {(uploadedFile.size / 1024).toFixed(2)} KB
              </p>
              <p className="text-gray-600">
                <strong>Type:</strong> {uploadedFile.type}
              </p>
            </div>
          )}
        </div>
      </section>
    );
  };
  
  export default FileUploadSection;