import React from 'react';

const Spinner = () => {
    return (
        <div className="preloader-wrapper small active" style={{margin:'auto', display:'block', marginTop:'20px', marginBottom:'20px'}}>
            <div className="spinner-layer spinner-red-only">
                <div className="circle-clipper left">
                <div className="circle"></div>
                </div><div className="gap-patch">
                <div className="circle"></div>
                </div><div className="circle-clipper right">
                <div className="circle"></div>
                </div>
            </div>
        </div>
    )
}
export default Spinner
