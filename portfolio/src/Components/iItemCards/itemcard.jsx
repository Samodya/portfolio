import './itemcard.css';
import img from '../../Assets/download.gif';
import { Link } from 'react-router-dom';

export const ItemCard = ({card_title, card_img, card_link}) => {
    return(
        <div className='card_back_ground'>
            <div className='card_title'>{card_title}</div>
            <div className='card_image'>
               <img src={card_img}/>
            </div>
            <div className='card_items'>
                <Link to=''>
                    Click Here for more details!
                </Link>
            </div>
        </div>
    )
}