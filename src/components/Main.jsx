import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setInputValue, editValue, deleteTask, changeValue, visibleText, checkbox } from '../redux/actions/setValueAction';

function Main() {
    const [valueInput, setValueInput] = useState('');
    const {inputValue} = useSelector(store => store);
    const dispatch = useDispatch();

    console.log(inputValue);

    const sentValue = () => {
      if(valueInput < 1 || valueInput === ' ') {
        return;
      }

      setValueInput('');
      dispatch(setInputValue(valueInput));
    }

    const hadleEditValue = (id) => {
      dispatch(editValue(id));
      dispatch(visibleText(id));
    }


  return (
    <div className='wrapper'>

      <div className="wrapper_side">
        <input className='wrapper_side-input' type="text" value={valueInput} onChange={(e) => setValueInput(e.target.value)}/>
        <button class="wrapper_side-button" onClick={() => sentValue()}>Добавить</button>
      </div>

      <div className="first__side card">
        <div className="card__background-circle circle1"></div>
        <div className="card__background-circle circle2"></div>

        <div className="card__content">
          {
            inputValue && 
              inputValue.map(item => 
                <div key={item.id} className={item.checkbox ? 'wrapper_side task success' : 'wrapper_side task'}>
                  <input className='wrapper_side-input' type="checkbox" onChange={() => dispatch(checkbox(item.id))}/>
                  <div className={item.checkbox ? 'checkbox' : ''}>
                    <p className={item.visibleText ? 'show' : 'close'}  onClick={() => hadleEditValue(item.id)}>{item.textTask}</p>
                  </div>
                  <input className={item.editValue ? 'wrapper_side-input show' : 'close'} type="text" defaultValue={item.textTask} onChange={(e) =>    dispatch(changeValue(e.target.value, item.id))}/>
                  <button className='wrapper_side-button' onClick={() => hadleEditValue(item.id)}>Edit</button>
                  <button className='wrapper_side-button' onClick={() => dispatch(deleteTask(item.id))}>Удалить</button>
                </div>  
              )
          }
        </div>
      </div>

    </div>
  )
}

export default Main;