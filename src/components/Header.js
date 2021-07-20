import Button from './Button';
import { useLocation  } from 'react-router-dom';

const Header = ({ onAdd , showAdd}) => {

    // const onClick = () => {
    //     console.log('click');
    // }
    const location = useLocation()

    return (
        
            <header className='header'>
                <h1>Task Maker</h1>
                {location.pathname === '/' && (
                    <Button color={showAdd ? 'red' : 'green'} text={showAdd ? 'Close' : 'Add'} 
                    onClick={onAdd}/>
                )}
                
            </header>
        
    )
}

// Header.defaultProps = {
//     title:'Task Tracker',
// }

// Header.propTypes = {
//     title : PropTypes.string,
// }

// const headingStle = {
//     color:'red',
//     backgroundColor:'black'
// }

export default Header;
