import './App.css';
import Navigation from './components/navigation/Navigation';
import Logo from './components/logo/Logo';
import ImageLinkForm from './components/imagelinkform/ImageLinkForm';
import Rank from './components/rank/Rank';
import ParticlesBg from 'particles-bg';
import { Component } from 'react';
import Clarifai from 'clarifai';
import FaceRecognition from './components/facerecognition/FaceRecognition';

const app = new Clarifai.App({
  apiKey: '29c6d9a7a94444cca0059bca356af8c1',
});

const img_url =
  'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fA%3D%3D&w=1000&q=80';

class App extends Component {
  constructor() {
    super();
    this.state = {
      input: '',
      imageurl: '',
    };
  }

  onInputChange = (event) => {
    this.setState({ input: event.target.value });
  };

  onBtnSubmit = () => {
    this.setState({ imageurl: this.state.input });

    app.models
      .predict(
        {
          id: 'a403429f2ddf4b49b307e318f00e528b',
          version: '34ce21a40cc24b6b96ffee54aabff139',
        },
        this.state.input
      )
      .then(
        function (response) {
          //do nothing
          console.log(
            response.outputs[0].data.regions[0].region_info.bounding_box
          );
        },
        function (err) {
          //therewas an error
          console.log(err);
        }
      );
  };

  render() {
    return (
      <>
        <ParticlesBg type="cobweb" bg={true} />
        <Navigation />
        <Logo />
        <Rank />
        <ImageLinkForm
          onInputChange={this.onInputChange}
          onBtnSubmit={this.onBtnSubmit}
        />
        <FaceRecognition img_url={this.state.imageurl} />
      </>
    );
  }
}

export default App;
