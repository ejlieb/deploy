import { Graph, GraphConfigInterface } from "@cosmograph/cosmos";
import { useEffect, useRef } from "react";
import data from '../data/data.json'

function Cosmos() {
    const target = useRef();

    const config = {
        backgroundColor: "#151515",
        nodeSize: 2,
        width: 100,
        nodeColor: "#4B5BBF",
        nodeGreyoutOpacity: 0.1,
        linkWidth: 0.1,
        linkColor: "#5F74C2",
        linkArrows: false,
        linkGreyoutOpacity: 0,
        simulation: {
          linkDistance: 1000,
          linkSpring: 2,
          repulsion: 0.2,
          gravity: 0.1,
          decay: 100
        },
    }

    useEffect(() => {
        console.log(target.current);
        console.log(data.nodes)
        console.log(data.edges)
        let nodes = []
        let links = []
        data.nodes.forEach(function(i){
            nodes.push({ id: i.key })
        }
        )
        data.edges.forEach(function(i) {
            links.push({ source: i.source, target: i.target }) 
        })
        const graph = new Graph(target.current, config);
        graph.setData(nodes, links);
        // graph.step(0);
        graph.setZoomLevel(10,[0])
    },[]);


    return (
        <div>
            <canvas ref={target}>

            </canvas>
        </div>
    );
}

export default Cosmos;