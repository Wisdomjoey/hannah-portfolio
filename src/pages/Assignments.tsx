import React, { useState } from "react";
import { Upload, File, Trash2 } from "lucide-react";

interface Assignment {
  id: string;
  name: string;
  date: string;
  size: string;
}

const Assignments = () => {
  const [assignments, setAssignments] = useState<Assignment[]>([]);
  const [dragActive, setDragActive] = useState(false);

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);

    const files = Array.from(e.dataTransfer.files);
    handleFiles(files);
  };

  const handleFileInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files ? Array.from(e.target.files) : [];
    handleFiles(files);
  };

  const handleFiles = (files: File[]) => {
    const newAssignments = files.map((file) => ({
      id: Math.random().toString(36).substr(2, 9),
      name: file.name,
      date: new Date().toLocaleDateString(),
      size: formatFileSize(file.size),
    }));

    setAssignments((prev) => [...prev, ...newAssignments]);
  };

  const formatFileSize = (bytes: number) => {
    if (bytes === 0) return "0 Bytes";
    const k = 1024;
    const sizes = ["Bytes", "KB", "MB", "GB"];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + " " + sizes[i];
  };

  const removeAssignment = (id: string) => {
    setAssignments((prev) => prev.filter((assignment) => assignment.id !== id));
  };

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-gray-800 dark:text-white mb-8">
        Assignments
      </h1>

      <div
        className={`border-2 border-dashed rounded-lg p-8 mb-8 text-center ${
          dragActive
            ? "border-blue-500 bg-blue-50 dark:bg-blue-900/50"
            : "border-gray-300 dark:border-gray-600"
        }`}
        onDragEnter={handleDrag}
        onDragLeave={handleDrag}
        onDragOver={handleDrag}
        onDrop={handleDrop}
      >
        <Upload className="w-12 h-12 text-gray-400 dark:text-gray-500 mx-auto mb-4" />
        <p className="text-gray-600 dark:text-gray-300 mb-4">
          Drag and drop your assignments here, or click to select files
        </p>
        <input
          type="file"
          multiple
          onChange={handleFileInput}
          className="hidden"
          id="file-upload"
        />
        <label
          htmlFor="file-upload"
          className="inline-block bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors cursor-pointer"
        >
          Select Files
        </label>
      </div>

      {assignments.length > 0 && (
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
          <div className="p-4 border-b dark:border-gray-700">
            <h2 className="text-lg font-semibold dark:text-white">
              Uploaded Assignments
            </h2>
          </div>

          <ul className="divide-y divide-gray-200 dark:divide-gray-700">
            {assignments.map((assignment) => (
              <li
                key={assignment.id}
                className="p-4 flex items-center justify-between hover:bg-gray-50 dark:hover:bg-gray-700"
              >
                <div className="flex items-center">
                  <File className="w-5 h-5 text-gray-400 dark:text-gray-500 mr-3" />
                  <div>
                    <p className="font-medium text-gray-900 dark:text-white">
                      {assignment.name}
                    </p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      Uploaded on {assignment.date} • {assignment.size}
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => removeAssignment(assignment.id)}
                  className="text-gray-400 hover:text-red-500 dark:text-gray-500 dark:hover:text-red-400"
                >
                  <Trash2 size={20} />
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Assignments;
