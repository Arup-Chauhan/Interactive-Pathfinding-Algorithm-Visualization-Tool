import React, { Component } from "react";
import Node from "./Node/Node.jsx";


import "./Pathfinder.css";
import NodeComponent from "./Node/Node.jsx";

export default class Pathfinder extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nodes: [],
    };
  }

  componentDidMount() {
    const nodes = [];
    for (let row = 0; row < 15; row++) {
      const curRow = [];
      for (let col = 0; col < 50; col++) {
        const curNode = {
          col,
          row,

          isStart: row === 10 && col === 5,
          isFinish: row === 10 && col === 45,
        };
        curRow.push(curNode);
      }
      nodes.push(curRow);
    }
    this.setState({ nodes });
  }

  render() {
    const { nodes } = this.state;

    return (
      <div className="grid">
        {nodes.map((row, rowIdx) => {
          return (
            <div key={rowIdx}>
              {row.map((node, nodeIdx) => {
                const { isStart, isFinish } = node;
                return (
                  <NodeComponent
                    key={nodeIdx}
                    isStart={isStart}
                    isFinish={isFinish}
                    test={"foo"}
                  ></NodeComponent>
                );
              })}
            </div>
          );
        })}
      </div>
    );
  }
}
