import React from "react";
import ReactQuill, { Quill } from "react-quill";

// #1 import quill-image-uploader
import ImageUploader from "quill-image-uploader";
import ImageResize from "quill-image-resize-module-react";

import 'react-quill/dist/quill.snow.css';
// #2 register module
Quill.register("modules/imageUploader", ImageUploader);
Quill.register("modules/imageResize", ImageResize);

const fullToolbarOptions = [
  ['bold', 'italic', 'underline', 'strike'],        // toggled buttons
  ['blockquote', 'code-block'],

  [{ 'header': 1 }, { 'header': 2 }],               // custom button values
  [{ 'list': 'ordered' }, { 'list': 'bullet' }],
  [{ 'script': 'sub' }, { 'script': 'super' }],      // superscript/subscript
  [{ 'indent': '-1' }, { 'indent': '+1' }],          // outdent/indent
  [{ 'direction': 'rtl' }],                         // text direction

  [{ 'size': ['small', false, 'large', 'huge'] }],  // custom dropdown
  [{ 'header': [1, 2, 3, 4, 5, 6, false] }],

  [{ 'color': [] }, { 'background': [] }],          // dropdown with defaults from theme
  [{ 'font': [] }],
  [{ 'align': [] }],

  ['clean'],
  ['image'],
  ['link']
];

const Editor = (props) => {
  const [text, setText] = React.useState(props.text);

  // const onBlur = (range, source, editor) => {
  //   console.log(editor.getHTML());
  //   // this.setState({ text: editor.getContents() });
  //   setText(editor.getHTML());
  //   props.onBlur(editor.getHTML());
  // };

  // const onChange = (content, delta, source, editor) => {
  //   setText(editor.getHTML());
  // };

  const modules = {
    // #3 Add "image" to the toolbar
    toolbar: fullToolbarOptions,
    imageResize: {
      parchment: Quill.import("parchment")
    },
    imageUploader: {
      upload: (file) => {
        return new Promise((resolve, reject) => {
          const fileReader = new FileReader();
          console.log(fileReader);

          fileReader.addEventListener(
            "load",
            () => {
              console.log('entrou')

              let base64ImageSrc = fileReader.result;
              console.log(fileReader);

              setTimeout(() => {
                resolve(base64ImageSrc);
                //reject('Issue uploading file');
              }, 1500);
            },
            false
          );

          if (file) {
            fileReader.readAsDataURL(file);
          } else {
            reject("No file selected");
          }
        });
      }
    }
  };

  const formats = [
    "header",
    "bold",
    "italic",
    "underline",
    "strike",
    "blockquote",
    "list",
    "bullet",
    "indent",
    "link",
    "image",
    "align",
    "imageBlot" 
  ];

  return (
      <ReactQuill
        theme="snow"
        modules={modules}
        formats={formats}
        value={text || ''}
        // onBlur={onBlur}
        // onChange={onChange}
      >
        <div style={{ minHeight: 213 }} className="my-editing-area" />
      </ReactQuill>

  );
};

export default Editor;
