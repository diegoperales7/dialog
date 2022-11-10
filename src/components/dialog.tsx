import React from 'react';
import './dialog.css';


//const names=["Franz","Diego","Noemi"];
interface DialogProps {
  
  /**
   * Button contents
   */
  title:string;
  description?:string;
  buttonText:string;
  buttonModalOn:boolean;
  buttonModal:string;
  buttonLink:string;
}

/**
 * Primary UI component for user interaction
 */
export const Dialog = ({
  title,
  description,
  buttonText,
  buttonModalOn,
  buttonModal,
  buttonLink,
  ...props
}: DialogProps) => {
    const ocultar = buttonModalOn ? 'hidd' : 'noHidd';
  return (
    <div className='contenedor'>

    <div className='center'>
        <input className='modal-state' id="modal-1" type="checkbox" />
        <div className='modal' id='modal-1' {...props}>
            <div className='modal_inner' >
                <label className="modal__close" htmlFor="modal-1"></label>
                <div className='modTitle'><h2>{title}</h2></div>
                <p>{description}</p>
            </div>
            <a className={['btnModal',ocultar].join(' ')} href={buttonLink}>{buttonModal} </a>
            <br />
            <br />
        </div>
        <label className='btn'  htmlFor="modal-1">{buttonText}</label>      
    </div>
    </div>
   
  );
};