"use client"
import { CloseIcn, UploadIcn } from '@/components/icons/CommonIcons/page';
import React, { FC, ReactElement, useState  } from 'react';

interface Props {}

const PhotoIdUploaded: FC<Props> = (): ReactElement => {
  const [files, setFile] = useState<File[]>([]);
  const [message, setMessage] = useState<string | undefined>();
  const handleFile = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setMessage(undefined);
    const fileList = e.target.files;
    if (fileList) {
      for (let i = 0; i < fileList.length; i++) {
        const fileType = fileList[i].type;
        const validImageTypes = ['image/gif', 'image/jpeg', 'image/png'];
        if (validImageTypes.includes(fileType)) {
          setFile([...files, fileList[i]]);
        } else {
          setMessage('only images accepted');
        }
      }
    }
  };
  const removeImage = (name: string): void => {
    setFile(files.filter((file) => file.name !== name));
  };

  return (
    <div className="bg-gray-300">
      <div className="bg-white md:pr-3">
        <span className="flex justify-center items-center text-[12px] mb-1 text-red-500">
          {message}
        </span>
        <div className="h-52 w-full relative border-2 items-center rounded-md cursor-pointer bg-gray-300 border-smextralightgray border-dotted">
          <input
            type="file"
            onChange={handleFile}
            className="h-full w-full bg-green-200 opacity-0 z-10 absolute"
            multiple
            name="files[]"
          />
          <div className="h-full w-full bg-gray-200 absolute z-1 flex justify-center items-center top-0">
            <div className="flex flex-col">
              <UploadIcn className=' text-semilightgray text-center mx-auto mb-3'/>
              <span className="text-[12px] text-semilightgray">{`Click here to upload`}</span>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap gap-2 mt-5">
          {files.map((file, key) => {
            return (
              <div key={key} className="overflow-hidden relative pt-3 pr-3">
                <div
                  onClick={() => {
                    removeImage(file.name);
                  }}
                  className="mdi mdi-close absolute right-1 top-2 hover:text-white cursor-pointer"
                >
                    <CloseIcn className='w-4 h-4'/>
                </div>
                <img
                  className="h-20 w-20 rounded-md"
                  src={URL.createObjectURL(file)}
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default PhotoIdUploaded;