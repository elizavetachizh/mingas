import { useState } from 'react';

export default function Test() {
  const [uploadedFiles, setUploadedFiles] = useState([]);

  const handleUploadFiles = (files) => {
    const uploaded = [...uploadedFiles];
    files.some((file) => {
      uploaded.push(file);
    });
    setUploadedFiles(uploaded);
  };

  const handleFileEvent = (e) => {
    const chosenFiles = Array.prototype.slice.call(e.target.files);
    handleUploadFiles(chosenFiles);
  };

  const getFileURL = (file) => {
    const blob = new Blob([file], {
      type: 'application/msword, application/vnd.openxmlformats-officedocument.wordprocessingml.document',
    });

    return URL.createObjectURL(blob);
  };
  return (
    <div>
      <input
        id="fileUpload"
        type="file"
        multiple
        accept="application/pdf, image/png,  application/msword, application/vnd.openxmlformats-officedocument.wordprocessingml.document"
        onChange={handleFileEvent}
      />
      {uploadedFiles.map((file) => (
        <ol>
          <li>
            <a download href={getFileURL(file)}>
              {file.name}
            </a>
          </li>
        </ol>
      ))}
    </div>
  );
}
