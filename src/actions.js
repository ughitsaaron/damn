export const SET_COLOR = 'SET_COLOR';
export const SET_IMAGE = 'SET_IMAGE';

export function setColor(color) {
  const type = SET_COLOR;

  return { type, color };
}

export function setImage(image) {
  const type = SET_IMAGE;

  return { type, image };
}

export function mapDispatchToProps(dispatch) {
  return {
    toggleColor(color) {
      dispatch(setColor(color));
    },

    setImage(image) {
      dispatch(setImage(image));
    }
  };
}
