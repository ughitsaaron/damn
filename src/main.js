import { Provider, connect } from 'react-redux';
import { combined, mapStateToProps } from './reducers';
import ColorSelector from './color-selector';
import ImageContainer from './image-container';
import ImageUpload from './image-upload';
import React from 'react';
import { createStore } from 'redux';
import { mapDispatchToProps } from './actions';
import { render } from 'react-dom';

const store = createStore(combined);
const Root = connect(mapStateToProps, mapDispatchToProps)(Application);

function Application({ toggleColor, setImage, color, image }) {
  return (
    <div className={['page', 'bg-' + color].join(' ')}>
      <main className='container'>
        <ImageContainer color={color} image={image} />
        <ColorSelector color={color} toggleColor={toggleColor} />
        <ImageUpload setImage={setImage}/>
        <footer>
          this dum thing is made by <a href='http://twitter.com/ughitsaaron'>aaron</a>. code is <a href='http://github.com/ughitsaaron/damn'>here</a>.
        </footer>
      </main>
    </div>
  );
}

render(
  <Provider store={store}>
    <Root />
  </Provider>,
  document.getElementById('app')
);
