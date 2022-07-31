const SoundSquare = (props) => {
  // Set class/sizing
  let sqrClass = 'btn btn-secondary';
  let sqrStyle = {
    width: '25px',
    height: '25px',
    margin: '2px'
  };

  // Adjust the color as needed
  if (props.active) {
    sqrClass = 'btn btn-info';
  } else if (props.current) {
    sqrClass = 'btn btn-warning';
  }
  
  // Check if a sound should play
  //if (props.active && props.current) props.sound.play()

  // Return the stylized div
  return (
    <div 
      className={sqrClass} 
      style={sqrStyle}
      id={props.key}
      beat={props.beat}
      key={props.key}
      onClick={props.handleClick}
    />
  );
};

export default SoundSquare;