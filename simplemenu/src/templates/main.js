import React, {useState} from 'react';

const Main = ({ pageContext: { menu } }) => {
  const [styles, setStyles] = useState({
    title: {
      padding: '16px 0px',
      borderBottom: 'solid 2px #ffca28',
      marginBottom: '64px',
      fontSize: '3em',
      fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
      fontWeight: '400',
      lineHeight: '1.167',
      letterSpacing: '0em',
      color: 'rgba(0, 0, 0, 0.87)'
    },
    container: {
      height: '100%',
      padding: '32px',
      overflowY: 'auto'
    },
    innerContainer: {
      padding: '120px 40px 0px',
      textAlign: 'right',
      boxShadow: '0px 2px 1px -1px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%)',
      maxWidth: '500px',
      borderRadius: '8px',
      margin: 'auto',
      backgroundColor: '#f5f5f5'
    },
    section: {
      paddingBottom: '32px'
    },
    sectionTitle: {
      margin: '0',
      fontSize: '1.5rem',
      fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
      fontWeight: '400',
      lineHeight: '1.334',
      letterSpacing: '0em'
    },
    item: {
      paddingBottom: '16px'
    },
    itemTitle: {
      margin: '0',
      color: '#9e9e9e',
      fontSize: '14px',
      fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
      fontWeight: '500',
      lineHeight: '1.6',
      letterSpacing: '0.0075em'
    },
    itemDescription: {
      margin: '0',
      color: '#9e9e9e',
      fontSize: '12px',
      fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
      fontWeight: '400',
      lineHeight: '1.5',
      letterSpacing: '0.00938em'
    },
    itemPrice: {
      margin: '0',
      color: '#9e9e9e',
      fontSize: '12px',
      fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
      fontWeight: '400',
      lineHeight: '1.5',
      letterSpacing: '0.00938em'
    }
  });

  // document.body.style.backgroundColor = '#f5f5f5';

  const sections = menu.sections.map((section, index) => {
  
    return <div style={styles.section} key={index}>
              <h5 style={styles.sectionTitle}>{section.name}</h5>
              {
                section.items.map((item, itemIndex) => {

                  return  <div style={styles.item} key={itemIndex}>
                            <h6 style={styles.itemTitle}>{item.name}</h6>
                            <p style={styles.itemDescription}>{item.description}</p>
                            <p style={styles.itemPrice}>{item.price}</p>
                          </div>

                })
              }
            </div> 
  })
  
  return (
    <div style={styles.container}>
      <div style={styles.innerContainer}>
        { menu && <h1 style={styles.title}>{ menu.name }</h1> }
        { !menu && <h1 style={styles.title}>No Menu!</h1> }
        {sections}
      </div>
    </div>
  );
}

export default Main;