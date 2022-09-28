import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Graph from 'react-graph-vis';

const options = {
  layout: { randomSeed: 2 },

  nodes: {
    borderWidth: 1,
    size: 20,
    // color: {
    //   // border: "#222222",
    //   // background: "#666666"
    // },
    font: { color: '#666666' },
  },
  edges: {
    width: 2,
    font: { align: 'bottom', strokeWidth: 3, strokeColor: '#ffffff' },
    color: {
      color: '#cccccc',
      highlight: '#aabbee',
      hover: '#aaaaaa',
      inherit: 'both',
      opacity: 1,
    },
    arrows: {
      to: {
        enabled: false,
      }
    },
    arrowStrikethrough: false,
    // font: '12px arial #ff0000',
    scaling: {
      label: true,
    },
    smooth: {
      type: 'continuous',
      forceDirection: 'horizontal',
    },
  },
  groups: {
    organization: {
      color: '#F03967',
      borderWidth: 0,
      shape: 'box',
      font: { color: '#FFFFFF' },
      margin: { top: 15, right: 20, bottom: 15, left: 20 },
      widthConstraint: 100,
    },
    department: {
      color: '#72c782',
      borderWidth: 0,
      shape: 'box',
      margin: { top: 10, right: 15, bottom: 10, left: 15 },
      font: { color: '#FFFFFF' },
      widthConstraint: 100,
    },
    employee: {
      color: '#6699ff',
      borderWidth: 0,
      // shape: "icon",
      // icon: {
      //   face: "FontAwesome",
      //   code: "\uf0c0",
      //   size: 50,
      //   color: "#6699ff"
      // }
    },
  },
  interaction: { hover: true },
  physics: {
    barnesHut: {
      centralGravity: 0.2,
    },
    minVelocity: 0.1,
  },
};

const events = {
  select: function (event) {
    var { nodes, edges } = event;
    console.log('Selected nodes:');
    console.log(nodes);
    console.log('Selected edges:');
    console.log(edges);
  },
};

const colors = [
  '#19CDD7',
  '#DDB27C',
  '#88572C',
  '#FF991F',
  '#F15C17',
  '#223F9A',
  '#DA70BF',
  '#4DC19C',
  '#12939A',
  '#B7885E',
  '#FFCB99',
  '#F89570',
  '#E79FD5',
  '#89DAC1',
];

const UndirectedGraph = ({
  className,
  width,
  height,
  data: dataProp,
  ...rest
}) => {
  const [data, setData] = useState(dataProp);

  useEffect(() => {
    setData(dataProp);
  }, [dataProp]);
  return (
    <Graph
      graph={data}
      options={options}
      events={events}
      style={{ width: width, height: height }}
      {...rest}
    />
  );
};

UndirectedGraph.displayName = 'UndirectedGraph';

UndirectedGraph.propTypes = {
  className: PropTypes.string,
  data: PropTypes.object.isRequired,
  height: PropTypes.number.isRequired,
  width: PropTypes.number.isRequired,
};
UndirectedGraph.defaultProps = {
  className: '',
  data: { nodes: [], edges: [] },
};

export default UndirectedGraph;
