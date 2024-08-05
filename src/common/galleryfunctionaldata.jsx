import React, { useState } from 'react';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';
// import optional lightbox plugins
import Fullscreen from 'yet-another-react-lightbox/plugins/fullscreen';
import Slideshow from 'yet-another-react-lightbox/plugins/slideshow';
import Thumbnails from 'yet-another-react-lightbox/plugins/thumbnails';
import Zoom from 'yet-another-react-lightbox/plugins/zoom';
import 'yet-another-react-lightbox/plugins/thumbnails.css';
import { Col, Row } from 'react-bootstrap';
import { imagesData } from './commonimages';
import { Link } from 'react-router-dom';

  //gallery
  export const LightGallery = () => {
    const [open, setOpen] = useState(false);
  
    return (
      <>
           < >   
                 
          <Col xl={3} md={4} sm={4}  className="brick col-12">
            <img src={imagesData('photo1')} alt='media1' onClick={() => setOpen(true)} className="br-5" />
            </Col>
          
          <Col xl={3} md={4} sm={4} className="brick col-12">
            <img src={imagesData('photo2')} alt='media2' onClick={() => setOpen(true)} className="br-5" />
            </Col>
          
             <Col xl={3} md={4} sm={4} className="brick col-12">
            <img src={imagesData('photo3')} alt='media3' onClick={() => setOpen(true)} className="br-5" />
            </Col>
          
             <Col xl={3} md={4} sm={4} className="brick col-12">
            <img src={imagesData('photo4')} alt='media4' onClick={() => setOpen(true)} className="br-5" />
            </Col>
          
             <Col xl={3} md={4} sm={4} className="brick col-12">
            <img src={imagesData('photo5')} alt='media5' onClick={() => setOpen(true)} className="br-5" />
            </Col>
          
             <Col xl={3} md={4} sm={4} className="brick col-12">
            <img src={imagesData('photo12')} alt='media12' onClick={() => setOpen(true)} className="br-5" />
            </Col>
          
             <Col xl={3} md={4} sm={4} className="brick col-12">
            <img src={imagesData('photo7')} alt='media7' onClick={() => setOpen(true)} className="br-5" />
            </Col>
          
             <Col xl={3} md={4} sm={4} className="brick col-12">
            <img src={imagesData('photo8')} alt='media8' onClick={() => setOpen(true)} className="br-5" />
            </Col>
          
             <Col xl={3} md={4} sm={4} className="brick col-12">
            <img src={imagesData('photo2')} alt='media9' onClick={() => setOpen(true)} className="br-5" />
            </Col>
          
             <Col xl={3} md={4} sm={4} className="brick col-12">
            <img src={imagesData('photo10')} alt='media10' onClick={() => setOpen(true)} className="br-5" />
            </Col>
          
             <Col xl={3} md={4} sm={4} className="brick col-12">
            <img src={imagesData('photo11')} alt='media11' onClick={() => setOpen(true)} className="br-5" />
            </Col>
          
             <Col xl={3} md={4} sm={4} className="brick col-12">
            <img src={imagesData('photo12')} alt='media12' onClick={() => setOpen(true)} className="br-5" />
            </Col>
        
            </>
  
        <Lightbox open={open} close={() => setOpen(false)} plugins={[Fullscreen, Slideshow, Thumbnails, Zoom]}
        zoom={{
          maxZoomPixelRatio: 10,
          scrollToZoom: true
        }}
          slides={[{ src: imagesData('photo1') }, { src: imagesData('photo2') }, { src: imagesData('photo3') }, { src: imagesData('photo4') }, 
          { src: imagesData('photo5') }, { src: imagesData('photo6') }, { src: imagesData('photo7') }, { src: imagesData('photo8') }, { src: imagesData('photo9') },
          { src: imagesData('photo10') }, { src: imagesData('photo11') },{ src: imagesData('photo12') },
  
          ]}
          />
      </>
    );
  };

  // blogdetails
  export const Gallerylist = () => {
    const [open, setOpen] = useState(false);
  
    return (
      <>
       <Row>
          <Col xl={4} lg={4} sm={6} >
          <div className="brick">
            <img src={imagesData('photo1')} alt='media1' onClick={() => setOpen(true)} className="img-responsive br-5" />
            </div>
          </Col>
          <Col xl={4} lg={4} sm={6}>
          <div className="brick">
            <img src={imagesData('photo2')} alt='media2' onClick={() => setOpen(true)} className="img-responsive br-5" />
            </div>
          </Col>
          <Col xl={4} lg={4} sm={6}>
             <div className="brick">
            <img src={imagesData('photo3')} alt='media3' onClick={() => setOpen(true)} className="img-responsive br-5" />
            </div>
          </Col>
          <Col xl={4} lg={4} sm={6}>
             <div className="brick">
            <img src={imagesData('photo4')} alt='media4' onClick={() => setOpen(true)} className="img-responsive br-5" />
            </div>
          </Col>
          <Col xl={4} lg={4} sm={6}>
             <div className="brick">
            <img src={imagesData('photo5')} alt='media5' onClick={() => setOpen(true)} className="img-responsive br-5" />
            </div>
          </Col>
          <Col xl={4} lg={4} sm={6}>
             <div className="brick">
            <img src={imagesData('photo6')} alt='media6' onClick={() => setOpen(true)} className="img-responsive br-5" />
            </div>
          </Col>
          <Col xl={4} lg={4} sm={6}>
             <div className="brick">
            <img src={imagesData('photo7')} alt='media7' onClick={() => setOpen(true)} className="img-responsive br-5" />
            </div>
          </Col>
          <Col xl={4} lg={4} sm={6}>
             <div className="brick">
            <img src={imagesData('photo8')} alt='media8' onClick={() => setOpen(true)} className="img-responsive br-5" />
            </div>
          </Col>
          <Col xl={4} lg={4} sm={6}>
             <div className="brick">
            <img src={imagesData('photo9')} alt='media9' onClick={() => setOpen(true)} className="img-responsive br-5" />
            </div>
          </Col>
        
          </Row>
  
        <Lightbox open={open} close={() => setOpen(false)} plugins={[Fullscreen, Slideshow, Thumbnails, Zoom]}
        zoom={{
          maxZoomPixelRatio: 10,
          scrollToZoom: true
        }}
          slides={[{ src:imagesData('photo1') }, { src:imagesData('photo2') }, { src:imagesData('photo3') }, { src:imagesData('photo4') }, 
          { src:imagesData('photo5') }, { src:imagesData('photo6') }, { src:imagesData('photo7') }, { src:imagesData('photo8') }, { src:imagesData('photo9')}
  
          ]}
          />
      </>
    );
  };

  //filedetails

  export const LightGallery1 = () => {
    const [open, setOpen] = useState(false);
  
    return (
      <>
     <ul id="lightgallery" className="list-unstyled row mb-0 px-2">
          <Col xl={3} md={4} sm={4} as="li" >
           <Link to="#">
            <img src={imagesData('photo1')} alt='media1' onClick={() => setOpen(true)}  className="img-responsive br-5" />
            </Link>
          </Col>
          <Col xl={3} md={4} sm={4} as="li" >
           <Link to="#">
            <img src={imagesData('photo2')} alt='media2' onClick={() => setOpen(true)}  className="img-responsive br-5" />
            </Link>
          </Col>
          <Col xl={3} md={4} sm={4} as="li" >
              <Link to="#">
            <img src={imagesData('photo3')} alt='media3' onClick={() => setOpen(true)}  className="img-responsive br-5" />
            </Link>
          </Col>
          <Col xl={3} md={4} sm={4} as="li" >
              <Link to="#">
            <img src={imagesData('photo4')} alt='media4' onClick={() => setOpen(true)}  className="img-responsive br-5" />
            </Link>
          </Col>
          <Col xl={3} md={4} sm={4} as="li" >
              <Link to="#">
            <img src={imagesData('photo5')} alt='media5' onClick={() => setOpen(true)}  className="img-responsive br-5" />
            </Link>
          </Col>
          <Col xl={3} md={4} sm={4} as="li" >
              <Link to="#">
            <img src={imagesData('photo6')} alt='media6' onClick={() => setOpen(true)}  className="img-responsive br-5" />
            </Link>
          </Col>
          <Col xl={3} md={4} sm={4} as="li" >
              <Link to="#">
            <img src={imagesData('photo7')} alt='media7' onClick={() => setOpen(true)}  className="img-responsive br-5" />
            </Link>
          </Col>
          <Col xl={3} md={4} sm={4} as="li" >
              <Link to="#">
            <img src={imagesData('photo8')} alt='media8' onClick={() => setOpen(true)}  className="img-responsive br-5" />
            </Link>
          </Col>
     
          </ul>
        <Lightbox open={open} close={() => setOpen(false)} plugins={[Fullscreen, Slideshow, Thumbnails, Zoom]}
        zoom={{
          maxZoomPixelRatio: 10,
          scrollToZoom: true
        }}
          slides={[{ src: imagesData('photo1') }, { src: imagesData('photo2') }, { src: imagesData('photo3') }, { src: imagesData('photo4') }, 
          { src: imagesData('photo5') }, { src: imagesData('photo6') }, { src: imagesData('photo7') }, { src: imagesData('photo8') }
  
          ]}
          />
      </>
    );
  };
