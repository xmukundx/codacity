'use client'
import { useSelector, useDispatch } from 'react-redux';
import { toggle} from "../../../lib/redux/toggleSlice"

const MyComponent = () => {
  const dispatch = useDispatch();

  const abc = useSelector((state) => state.toggle?.['abc'] || false);
  const efg = useSelector((state) => state.toggle?.['efg'] || false);

  const handleToggleABC = () => {
    dispatch(toggle('abc'));
    console.log(abc);
    
  };

  const handleToggleEFG = () => {
    dispatch(toggle('efg'));
    console.log(efg);
  };

  return (
    <div className='h-screen-minus-navbar grid place-items-center'>
      <button className='p-3 bg-yellow-200' onClick={handleToggleABC}>
        {abc ? "ABC is ON" : "ABC is OFF"}
      </button>
      <button className='p-3 bg-blue-200' onClick={handleToggleEFG}>
        {efg ? "EFG is ON" : "EFG is OFF"}
      </button>
    </div>
  );
};

export default MyComponent;