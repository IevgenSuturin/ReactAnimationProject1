import React, { useState } from 'react'
import { Transition, CSSTransition } from 'react-transition-group'
import { List } from './List'

function App() {
  const [toggle, setToggle] = useState(true)
  const [toggle2, setToggle2] = useState(true)
  const [items, setItems] =useState([
    {id: 1, title: "Item1"},
    {id: 2, title: "Item2"},
    {id: 3, title: "Item3"},
    {id: 4, title: "Item4"},
    {id: 5, title: "Item5"},
    {id: 6, title: "Item6"},
    {id: 7, title: "Item7"},
  ])

  const removeItem = id => {
    setItems(items.filter( i => i.id !== id ))
  }

  const addItem = () => {
    const title = prompt('Enter Item title')
    const id = Date.now()
    setItems(items.concat([{id, title}]))
  }

  return (
    <div className="container">
      <button onClick={() => setToggle(!toggle)}>Toggle</button>
      <button onClick={() => setToggle2(!toggle2)}>Toggle2</button>
      <button onClick={addItem}>Add Item</button>
      <hr/>
      <div className="blocks">
        <Transition 
          in={toggle}   //animation flag
          timeout={{
            enter: 1000,
            exit: 500
          }} //duration
          mountOnEnter
          unmountOnExit
          onEnter = {() => console.log('onEnter')}
          onEntering = {() => console.log('onEntering')}
          onEntered = {() => console.log('onEntered')}
          onExit = {() => console.log('onExit')}
          onExiting = {() => console.log('onExiting')}
          onExited = {() => console.log('onExited')}
        >
          { state => <div className={`square blue ${state}`} >{state}</div> }
        </Transition>

        <CSSTransition
          in={toggle2}
          timeout={1000}
          mountOnEnter
          unmountOnExit
          classNames = "os"
        >
          <div className="square orange">
            {toggle2.toString()}
          </div>
        </CSSTransition>
      </div>
      <div className="blocks">
        <List items={items} onRemove={removeItem}/>
      </div>
    </div>
  );
}

export default App;
