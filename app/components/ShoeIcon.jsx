import React from 'react';

const styles = {
    ImageContainer: {
      top: '1144px',
      left: '566px',
      width: '96px',
      height: '96px',
      borderRadius: '12px',
      backgroundImage: 'url(./image.png)',
      backgroundPosition: 'center center',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
    },
  };

  const defaultProps = {
    image: 'https://assets.api.uizard.io/api/cdn/stream/090aafae-5345-4e2e-a3b9-40efcb9d99a4.png',
  }

const Image = (props) => {
  return (
    <div style={{
      ...styles.ImageContainer,
      backgroundImage: `url(${props.image ?? defaultProps.image})`,
    }} />
  );
};

export default Image;