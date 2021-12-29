import styled from '@emotion/styled'
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';


const Container = styled.div`
  margin: 2rem auto 0;
  padding: 2rem;
  font-size: calc(20px + 0.33vw);
  text-align: left;
`

const ConsolePage = () => {
  return (
    <Container>
      <h2>Using CKEditor 5 build in React</h2>
      <CKEditor
        editor={ClassicEditor}
        data="<p>Hello from CKEditor 5!</p>"
        onReady={editor => console.log('Editor is ready to use!', editor)}
        onChange={(event, editor) => {
          const data = editor.getData();
          console.log({ event, editor, data });
        }}
        onBlur={(event, editor) => console.log('Blur.', editor)}
        onFocus={(event, editor) => console.log('Focus.', editor)}
      />
    </Container>
  )
}

export default ConsolePage
