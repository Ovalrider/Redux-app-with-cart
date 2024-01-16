import CartButton from '../Cart/CartButton';
import classes from './MainHeader.module.css';
import {useDispatch} from "react-redux"
import { uiActions } from '../../store/uiSlice';

const MainHeader = (props) => {
  const dispatch = useDispatch()
  const handleClick = ()=>{
    dispatch(uiActions.toggleCart())
  }
  return (
    <header className={classes.header}>
      <h1>ReduxCart</h1>
      <nav> 
        <ul>
          <li>
            <CartButton onClick={handleClick}/>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainHeader;
