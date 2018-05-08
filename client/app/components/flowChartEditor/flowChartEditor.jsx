import React, { Component } from "react";
import ReactDOM from "react-dom";
import joint from 'jointjs';

class FlowChartEditor extends Component {
    constructor(props) {
      super(props);
      this.graph = new joint.dia.Graph();
      this.cells=[];
    }

    componentDidMount() {
      const paper = new joint.dia.Paper({
        el: ReactDOM.findDOMNode(this.refs.chartEditor),
        width: 600,
        height: 200,
        model: this.graph,
        gridSize: 1
      });

      var rect = new joint.shapes.standard.Rectangle();
      rect.position(100, 30);
      rect.resize(100, 40);
      rect.attr({
          body: {
              fill: 'blue'
          },
          label: {
              text: 'Simple',
              fill: 'white'
          }
      });
      rect.addTo(this.graph);

      var rect2 = rect.clone();
      rect2.translate(300, 0);
      rect2.attr('label/text', 'graph!');
      rect2.addTo(this.graph);

      var link = new joint.shapes.standard.Link();
      link.source(rect);
      link.target(rect2);
      link.addTo(this.graph);
  
      this.graph.addCells(this.cells);
    }

    render() {
      return <div ref="chartEditor"></div>;
    }
}

export default FlowChartEditor;