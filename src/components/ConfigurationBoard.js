
import React, { useRef } from 'react';
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import _ from "lodash";

import Paper from "@material-ui/core/Paper";
import {addComponent, saveLayout} from '../actions/creators'
import { Responsive, WidthProvider } from "react-grid-layout";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import '../../node_modules/react-grid-layout/css/styles.css';


const ResponsiveReactGridLayout = WidthProvider(Responsive);


const ConfigurationBoard = ({classes}) =>{

  
    const state = useSelector(state => state);
    const dispatch = useDispatch();

    const saveLayout = text => dispatch(saveLayout(text));

    const layouts = () => {
        return { sm: _.map(_.range(0, 25), function(item, i) {
          var y = Math.ceil(Math.random() * 4) + 1;
          return {
            x: (_.random(0, 5) * 2) % 12,
            y: Math.floor(i / 6) * y,
            w: 2,
            h: y,
            i: i.toString(),
            static: Math.random() < 0.05
          };
        })};
      }

    

      const droppingItem = [
        {i: '0', w: 1, h: 2},
      ];

    
    const onDragOver = (ev) => {
        ev.preventDefault();
        ev.dataTransfer.dropEffect = "move";
       }
    const onDrop = (ev) => {
        ev.preventDefault();
        // Get the id of the target and add the moved element to the target's DOM
        const data = ev.dataTransfer.getData("text/html");
        //ev.target.appendChild(document.getElementById(data));
        dispatch(addComponent(data));
    }

    const onGridDrop = (elm) => {
       
        dispatch(addComponent(elm));
    }

    const onSaveLayout = (elm) => {
       
        //dispatch(addComponent(elm))
        //saveLayout(elm);

    }

    const generateDOM = () => {
        return _.map(layouts().sm, function(l, i) {
          return (
            <div key={i} className={l.static ? "static" : ""}>
              {l.static ? (
                <span
                  className="text"
                  title="This item is static and cannot be removed or resized."
                >
                  Static - {i}
                </span>
              ) : (
                <span className="text">{i}</span>
              )}
            </div>
          );
        });
      }
    
    return(
        <React.Fragment>
          <Container maxWidth="sm">
            {/* <div id="target"  onDrop={(e) => onDrop(e)} onDragOver={(e) => onDragOver(e)}>                    */}
                <Typography variant="h4" component="h2">Configuration</Typography >
                  <ResponsiveReactGridLayout  id="target"  onDrop={(e) => onGridDrop(e)} onDragOver={(e) => onDragOver(e)} className="layout" isDroppable={true} useCSSTransforms={true}   measureBeforeMount={true} >
                  
                  {state &&
                      state.component.map(cmp =>
                      <Paper key={cmp.id} > 
                          {cmp.id}
                      </Paper>
                      )
                  }
                  </ResponsiveReactGridLayout>
                </Container>
            {/* </div> */}
        </React.Fragment>
        
    )
    
}

export default  ConfigurationBoard