import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import Boundingbox from '../index';

storiesOf('Boundingbox', module)
  .add('default view', () => {
    const params = {
      image: 'http://i.imgur.com/gF7QYwa.jpg',
      boxes: [
        // coord(0,0) = top left corner of image
        // [x, y, width, height]
        [0, 0, 250, 250],
        [300, 0, 250, 250],
        [700, 0, 300, 25],
        [1100, 0, 25, 300],
      ],
    };
    return (<Boundingbox
      image={params.image}
      boxes={params.boxes}
    />);
  })
  .add('box selection', () => {
    const params = {
      image: 'http://i.imgur.com/gF7QYwa.jpg',
      boxes: [
        // coord(0,0) = top left corner of image
        // [x, y, width, height]
        [0, 0, 250, 250],
        [300, 0, 250, 250],
        [700, 0, 300, 25],
        [1100, 0, 25, 300],
      ],
    };
    return (<Boundingbox
      image={params.image}
      boxes={params.boxes}
      onSelected={action('selected')}
    />);
  });
