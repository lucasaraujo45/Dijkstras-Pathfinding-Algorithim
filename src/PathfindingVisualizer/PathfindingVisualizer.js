import React, {Component} from 'react';
import Node from './Node/Node.js'
import './PathfindingVisualizer.css';


export default class PathfindingVisualizer extends Component {
    constructor(props){
        super(props);
        this.state = {
            nodes: [],
        };
    }

    componentDidMount(){
        const nodes = [];
        for (let row = 0; row < 20; row++){
            const currentRow=[];
            for (let col = 0; col < 50; col++){
                const currentNode = {
                    col,
                    row,
                };
                currentRow.push(currentNode)
            }
            nodes.push(currentRow);
        }
        this.setState({nodes});
    }


    render() {
        const {nodes} = this.state;
        console.log(nodes)

        return (
            <div className='grid'>
                {nodes.map((row, rowIdx) => {
                    return <div key={rowIdx}>
                        {row.map((node, nodeIdx) => <Node></Node>)}
                    </div>
                })}
            </div>
        );
    }
}
