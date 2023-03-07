import React, { useEffect, useState } from "react";

import "@react-sigma/core/lib/react-sigma.min.css";
import {Graph } from "graphology";
import { SigmaContainer, useLoadGraph, useRegisterEvents, useSigma } from "@react-sigma/core";
import data from "../data/data.json"

const LoadGraphWithHook = () => {
  const [toggle, setToggle] = useState(false);
  const [target, setTarget] = useState();
  const MyGraph = () => {
    const loadGraph = useLoadGraph();

    useEffect(() => {
      // Create the graph
      const graph = new Graph();
    //   graph.addNode("A", { x: 0, y: 0, label: "Node A", size: 10 });
    //   graph.addNode("B", { x: 1, y: 1, label: "Node B", size: 10 });
    //   graph.addEdgeWithKey("rel1", "A", "B", { label: "REL_1" });
    graph.import(data)
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
              if (!sigma.getGraph().neighbors(e.node).includes(node) && node != e.node){
                sigma.getGraph().setNodeAttribute(node, "hidden", true)
              }
            })
          }
        },

        leaveNode: (e) => {
          sigma.getGraph().nodes().forEach((node) => {
            if (!toggle) {
              if (!sigma.getGraph().neighbors(e.node).includes(node) && node != e.node){
                sigma.getGraph().setNodeAttribute(node, "hidden", false)
              }
            }
          })
        },

        clickNode: (e) => {
            if (toggle) {
              if (target == e.node ) {

                sigma.getGraph().nodes().forEach((node) => {
                  if (!sigma.getGraph().neighbors(e.node).includes(node) && node != e.node){
                    sigma.getGraph().setNodeAttribute(node, "hidden", false)
                  }
                })
                setTarget("");
                setToggle(!toggle);

              }

              else {

                sigma.getGraph().nodes().forEach((node) => {
                  if (!sigma.getGraph().neighbors(e.node).includes(node) && node != e.node){
                    sigma.getGraph().setNodeAttribute(node, "hidden", true)
                  }
                  else {
                    sigma.getGraph().setNodeAttribute(node, "hidden", false)
                  }
                })
                setTarget(e.node);

              }
              

            }
            else {
              sigma.getGraph().nodes().forEach((node) => {
                if (!sigma.getGraph().neighbors(e.node).includes(node) && node != e.node){
                  sigma.getGraph().setNodeAttribute(node, "hidden", true)
                }
              })
              setTarget(e.node);
              setToggle(!toggle);
            }

        }
      })
    },[registerEvent])
  }

  return (
    <SigmaContainer style={{ height: "100vh" }}>
      <MyGraph />
      <GraphEvent />
    </SigmaContainer>
  );
};

export default LoadGraphWithHook;