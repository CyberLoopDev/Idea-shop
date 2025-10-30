import './Modal.css'
import { categoriesData } from '../../data/componentsData'
import { Link } from 'react-router-dom'


const Modal = ({ closeForm }) => {
  return (

 
  <div className="showform-overlay">
    <div className="showform-box">
      <button className="close-form" onClick={closeForm}>×</button>

      <div className="showform-grid">
       

        {categoriesData.items.map(item => (
            <div className="item">
                <Link to={item.url}><img className='showform-img' src={item.image} alt="" /> </Link> 
                <p>{item.name}</p>        
            </div>
        ))}


       </div>
            
         
    </div>
  </div>



  )
}

export default Modal
