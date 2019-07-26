import ReactHiddenFile from '../src/main';
import ReactDOM from 'react-dom';
import React from 'react';
import './assets/style.scss';

class App extends React.Component {
  componentDidMount() {}
  render() {
    return (
      <div className="app-container">
        <button
          onClick={() => {
            let instance = null;
            ReactHiddenFile.create({
              id: 'test-file',
              onChange: function(e) {
                console.log(e.target.value);
                instance && instance.destroy();
              }
            }).then((res) => {
              res.element.querySelector('input').click();
              instance = res;
            });
          }}
          style={{ padding: '10px 20px' }}>
          Show File Uploader
        </button>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
