import React from 'react'
import { DragSource } from 'react-dnd'
const style = {
  border: '1px dashed gray',
  backgroundColor: 'white',
  padding: '0.5rem 1rem',
  marginRight: '1.5rem',
  marginBottom: '1.5rem',
  cursor: 'move',
  float: 'left',
}
const Draggable2 = ({ name, isDragging, connectDragSource }) => {
  const opacity = isDragging ? 0.4 : 1
  return (
    <div ref={connectDragSource} style={{ ...style, opacity }}>
      {name}
    </div>
  )
}
export default DragSource(
  'Component',
  {
    beginDrag: props => ({ name: props.name }),
    endDrag(props, monitor) {
      const item = monitor.getItem()
      const dropResult = monitor.getDropResult()
      if (dropResult) {
        alert(`You dropped ${item.name} into ${dropResult.name}!`)
      }
    },
  },
  (connect, monitor) => ({
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging(),
  }),
)(Draggable2)
