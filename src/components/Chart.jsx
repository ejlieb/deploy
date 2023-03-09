import React, { useEffect, useState } from "react";

import "@react-sigma/core/lib/react-sigma.min.css";
import { Graph } from "graphology";
import { SigmaContainer, useLoadGraph, useRegisterEvents, useSigma } from "@react-sigma/core";
import data from "../data/data.json"

const LoadGraphWithHook = (props) => {
  const [toggle, setToggle] = useState(false);
  const [target, setTarget] = useState();
  const MyGraph = () => {
  const loadGraph = useLoadGraph();

  useEffect(() => {
    const graph = new Graph();  
    graph.import(data);
      loadGraph(graph);
    }, [loadGraph]);

    return null;
  };

  const GraphEvent = () => {
    const sigma = useSigma();
    const registerEvent = useRegisterEvents();
    useEffect(() => {
      registerEvent({

        enterNode: (e) => {
          if (!toggle) {

            sigma.getGraph().nodes().forEach((node) => {
              if (!sigma.getGraph().neighbors(e.node).includes(node) && node !== e.node){
                sigma.getGraph().setNodeAttribute(node, "hidden", true)
              }
            })

          }
        },

        leaveNode: (e) => {
          sigma.getGraph().nodes().forEach((node) => {
            if (!toggle) {

              if (!sigma.getGraph().neighbors(e.node).includes(node) && node !== e.node){
                sigma.getGraph().setNodeAttribute(node, "hidden", false)
              }
            }
          })
        },

        clickNode: (e) => {
            if (toggle) {
              
              if (target === e.node ) {

                sigma.getGraph().nodes().forEach((node) => {
                  if (!sigma.getGraph().neighbors(e.node).includes(node) && node !== e.node){
                    sigma.getGraph().setNodeAttribute(node, "hidden", false)
                  }
                })
                sigma.getGraph().setNodeAttribute(e.node,"highlighted",false);
                setTarget("");
                setToggle(!toggle);

              }

              else {

                sigma.getGraph().nodes().forEach((node) => {
                  if (!sigma.getGraph().neighbors(e.node).includes(node) && node !== e.node){
                    sigma.getGraph().setNodeAttribute(node, "hidden", true)
                  }
                  else {
                    sigma.getGraph().setNodeAttribute(node, "hidden", false)
                  }
                })
                sigma.getGraph().setNodeAttribute(target,"highlighted",false);
                sigma.getGraph().setNodeAttribute(e.node,"highlighted",true);
                setTarget(e.node);

              }
              

            }
            else {
              sigma.getGraph().setNodeAttribute(e.node,"highlighted",true);
              sigma.getGraph().nodes().forEach((node) => {
                if (!sigma.getGraph().neighbors(e.node).includes(node) && node !== e.node){
                  sigma.getGraph().setNodeAttribute(node, "hidden", true)
                }
              })
              setTarget(e.node);
              setToggle(!toggle);
            }

        }
      })
    },[registerEvent,sigma])
  }

  return (
    <SigmaContainer style={{ height: "100vh" }}>
      <MyGraph />
      <GraphEvent />
    </SigmaContainer>
  );
};

export default LoadGraphWithHook;