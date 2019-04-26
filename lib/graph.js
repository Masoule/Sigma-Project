var i,
    s,
    N = 100,
    E = 500,
    graph = {
      nodes: [],
      edges: []
    };

// Generate a random graph:
for (i = 0; i < N; i++)
  graph.nodes.push({
    id: 'n' + i,
    label: 'Node ' + i,
    x: Math.random(),
    y: Math.random(),
    size: Math.random(),
    color: '#666'
  });

for (i = 0; i < E; i++)
  graph.edges.push({
    id: 'e' + i,
    source: 'n' + (Math.random() * N | 0),
    target: 'n' + (Math.random() * N | 0),
    size: Math.random(),
    color: '#ccc',
    // type: 'curvedArrow',
  });

  // Initialise sigma:
s = new sigma({
  graph: graph,
  renderer: {
      id: 'main-renderer',
      container: document.getElementById('graph-container'),
      type: 'canvas',
      // type: 'svg',
      freeStyle: true
  },
  settings: {
    enableHovering: false,
    edgeLabelSize: 'proportional',
    minArrowSize: 10
  }
});

// load the graph
// s.graph.read(graph);

// draw the graph
s.refresh();

launch force-atlas for 5sec
s.startForceAtlas2();
window.setTimeout(function() {s.killForceAtlas2()}, 10000);
