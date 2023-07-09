'use client'

import React, { useRef } from 'react';
import { Editor } from '@tinymce/tinymce-react';

export default function App() {
    const editorRef = useRef(null);
    const log = () => {
        if (editorRef.current) {
            // console.log(editorRef.current.getContent());
        }
    };

    return (
        <>
            {/*<Editor*/}
            {/*    apiKey='qkv7oq3l04754eparocu7huzuzgqnbe4y4gu8su4ga0mkb17'*/}
            {/*    onInit={(evt, editor) => editorRef.current = editor}*/}
            {/*    initialValue="<p>This is the initial content of the editor.</p>"*/}
            {/*    init={{*/}
            {/*        height: 500,*/}
            {/*        menubar: false,*/}
            {/*        plugins: [*/}
            {/*            'advlist', 'autolink', 'lists', 'link', 'image', 'charmap', 'preview',*/}
            {/*            'anchor', 'searchreplace', 'visualblocks', 'code', 'fullscreen',*/}
            {/*            'insertdatetime', 'media', 'table', 'code', 'help', 'wordcount'*/}
            {/*        ],*/}
            {/*        toolbar: 'undo redo | blocks | ' +*/}
            {/*            'bold italic forecolor | alignleft aligncenter ' +*/}
            {/*            'alignright alignjustify | bullist numlist outdent indent | ' +*/}
            {/*            'removeformat | help',*/}
            {/*        content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'*/}
            {/*    }}*/}
            {/*/>*/}
            <button className={'bg-blue-500 text-white p-3 my-4 mr-2'} onClick={log}>Log editor content</button>
        </>
    );
}