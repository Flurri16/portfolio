import React, { useCallback } from 'react'
import { useDropzone } from 'react-dropzone';
export default function AddProject() {
    const [images, setImages] = React.useState([]);
    const onDrop = useCallback((acceptedFiles) => {
        const previews = acceptedFiles.map((file) =>
            URL.createObjectURL(file)
        );
        setImages((prev) => [...prev, ...previews]);
    }, []);
    const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop })
    return (
        <div className='w-1/4 h-[400px] bg-slate-600'>
            <div {...getRootProps()} className='border-dotted border-indigo-600 border-2'>
                <input {...getInputProps()} className='' />
                {
                    isDragActive ?
                        <p className='text-4xl text-white font-monserrat '>Drop the files here ...</p> :
                        <p className='text-4xl text-white font-monserrat '>Drag 'n' drop some files here, or click to select files</p>
                }
                {images.map((file, i) => (
                    <div className='flex'>
                        <img
                            key={i}
                            src={file}
                            alt="preview"
                            className="w-32 h-auto rounded-lg"
                        />
                    </div>
                ))}
            </div>
        </div>
    )
}
