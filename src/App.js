import './App.css';
import Navigation from './components/navigation/Navigation';
import Logo from './components/logo/Logo';
import ImageLinkForm from './components/imagelinkform/ImageLinkForm';
import Rank from './components/rank/Rank';
import ParticlesBg from 'particles-bg';
import { Component } from 'react';
import Clarifai from 'clarifai';
import FaceRecognition from './components/facerecognition/FaceRecognition';
import Signin from './components/signin/Signin';
import Register from './components/register/Register';
import { isEditable } from '@testing-library/user-event/dist/utils';

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
      box: {},
      route: 'signin',
      user: {
        id: '',
        name: '',
        email: '',
        entries: 0,
        joined: '',
      },
    };
  }

  loadUser = (data) => {
    this.setState({
      user: {
        id: data.id,
        name: data.name,
        email: data.email,
        entries: data.entries,
        joined: data.joined,
      },
    });
  };

  calculateBox = (data) => {
    const clarifaiFace =
      data.outputs[0].data.regions[0].region_info.bounding_box;
    const image = document.getElementById('inputimage');
    const height = Number(image.height);
    const width = Number(image.width);
    return {
      leftCol: clarifaiFace.left_col * width,
      topRow: clarifaiFace.top_row * height,
      rightCol: width - clarifaiFace.right_col * width,
      bottomRow: height - clarifaiFace.bottom_row * height,
    };
  };

  displayFaceBox = (boxdata) => {
    this.setState({ box: boxdata });
  };

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
      .then((response) => {
        if (response) {
          fetch('http://localhost:3000/image', {
            method: 'put',
            headers: { 'content-Type': 'application/json' },
            body: JSON.stringify({
              id: this.state.user.id,
            }),
          })
            .then((response) => response.json())
            .then((data) => {
              this.setState(Object.assign(this.state.user,{entries:data}))
              
            });
        };
        this.displayFaceBox(this.calculateBox(response));

        
      })
      
      .catch((err) => console.log(err));
  };

  onRouteChange = (inputroute) => {
    this.setState({ route: inputroute });
  };

  render() {
    return (
      <>
        <ParticlesBg type="cobweb" bg={true} />

        {this.state.route === 'home' ? (
          <>
            <div>
              <Navigation onRouteChange={this.onRouteChange} />
              <Logo />
              <Rank
                name={this.state.user.name}
                entries={this.state.user.entries}
              />
              <ImageLinkForm
                onInputChange={this.onInputChange}
                onBtnSubmit={this.onBtnSubmit}
              />
              <FaceRecognition
                img_url={this.state.imageurl}
                box={this.state.box}
              />
            </div>
          </>
        ) : this.state.route === 'signin' ? (
          <Signin onRouteChange={this.onRouteChange} loadUser={this.loadUser} />
        ) : (
          <Register
            onRouteChange={this.onRouteChange}
            loadUser={this.loadUser}
          />
        )}
      </>
    );
  }
}

export default App;
