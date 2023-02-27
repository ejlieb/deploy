import React, { useEffect } from "react";

import "@react-sigma/core/lib/react-sigma.min.css";
import {Graph } from "graphology";
import { SigmaContainer, useLoadGraph } from "@react-sigma/core";
import data from "../data/data.json"

const LoadGraphWithHook = () => {
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

  return (
    <SigmaContainer style={{ height: "100vh" }}>
      <MyGraph />
    </SigmaContainer>
  );
};

export default LoadGraphWithHook;