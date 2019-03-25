import React from 'react';
import axios from 'axios';
import Button from '@material-ui/core/Button';

interface IUploadState {
  uploading: boolean,
  files: string[]
}

class UploadPage extends React.Component<IUploadState> {

  state = {
    uploading: false,
    files: ''
  }


  handleChangeFile = (e: any) => {
    this.state.files = e.target.files.item(0);
  }

  uploadFile = () => {
    const formData = new FormData();
    formData.append('myFile', this.state.files);
    axios.post('http://localhost:8000/api/v1/upload/', formData)
      .then(resp => {
        console.log(resp.data.result[0]);
      }).catch(err => {
        console.error(err);
      });
  }

  render() {
    return (
      <div>
        <input type="file" onChange={(e: any) => this.handleChangeFile(e)} />
        <Button onClick={() => this.uploadFile()}>upload</Button>
      </div>
    )
  }
}

export default UploadPage;