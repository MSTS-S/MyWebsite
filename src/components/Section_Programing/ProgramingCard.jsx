import React from 'react';

function ProgramingCard ({ img, img_alt, title, content }) {
  const _imgSize = '200px';

  return (
    <div className="CARD" style={{
      width: '300px',
      flexDirection: 'column',
      alignItems: 'center',
      border: '1px solid #ccc',
      borderRadius: '10px',
      boxShadow: '0 4px 15px rgba(0,0,0, 0.25)',
      margin: '20px 0px 5px 0px',
      backgroundColor: 'white',
    }}>

      <img src={img} alt={img_alt} style={{
        width: _imgSize,
        marginTop: '30px',
        aspectRatio: '1/1',
      }} />

      <h3 style={{
        fontWeight: 'bold',
        fontSize: '1.5em',
        paddingLeft: '10px',
        textAlign: 'left',
        paddingLeft: '20px',
        marginLeft: '20px',
        marginRight: '20px',
        paddingRight: '20px',
        paddingBottom: '5px',
        borderBottom: '2px solid #888'
      }}>{title}</h3>

      <p style={{
        textAlign: 'justify',
        paddingLeft: '20px',
        paddingRight: '20px',
      }}>{content}
      </p>
    </div>
  );
};

export default ProgramingCard;