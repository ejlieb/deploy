import { Graph } from "@cosmograph/cosmos";
import { useEffect, useRef } from "react";
import data from '../data/data.json'

function Cosmos() {
    const target = useRef();


    useEffect(() => {
        const config = {
            backgroundColor: "#aaaaaa",
            nodeSize: 2,
            width: 100,
            nodeColor: "#4B5BBF",
            nodeGreyoutOpacity: 0.1,
            linkWidth: 0.1,
            linkColor: "black",
            linkArrows: false,
            linkGreyoutOpacity: 0,
            simulation: {
              linkDistance: 1000,
              linkSpring: 2,
              repulsion: 0.2,
              gravity: 0.11,
              decay: 300
            },
            events: {
                onClick: (f,s,t,l) => {
                    graph.selectNodeById(f.id, true)

                },
            }

        }
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
        graph.setZoomLevel(3,[0])

        graph.setData(nodes, links);
        // graph.step(0);
    },[]);


    return (
        <div>
            <span>content</span>
            <canvas ref={target}>

            </canvas>
        </div>
    );
}

export default Cosmos;