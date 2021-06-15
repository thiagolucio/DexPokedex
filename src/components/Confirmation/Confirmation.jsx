import React from 'react'

const Confirmation = ({hideModal}) => {
    return (
        <div style={{  
            backgroundColor: '#0E0A14ef',
            width:'100%',
            height:'100%',
            top: '0',
            position:'fixed',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            transition: '600ms',
          }}>
              <div style={{  
            backgroundColor: 'white', padding:'50px 80px', display:'flex', flexDirection:'column'}}>
                

                <h1 style={{paddingBottom:'20px', textAlign: 'center'}}>COMPRA REALIZADA <br/>PARABÉNS!!!</h1>
                <p style={{paddingBottom:'20px', textAlign: 'center'}}>Volte sempre!</p>
                
        <button onClick={() => hideModal()}>OK</button></div>
        
        </div>
    )
}
export default Confirmation