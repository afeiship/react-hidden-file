# react-hidden-file
> Hidden file for react.

## install
```shell
npm install -S afeiship/react-hidden-file
```

## usage
1. import css
  ```scss
  @import "~react-hidden-file/style.scss";

  // customize your styles:
  $react-hidden-file-options: ()
  ```
2. import js
  ```js
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
  ```

## documentation
- https://afeiship.github.io/react-hidden-file/
