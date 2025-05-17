import React, { useEffect, useRef, useState } from "react";
import ForceGraph2D, { ForceGraphMethods } from "react-force-graph-2d";
import { technologies, skillConnections } from "../constants";

interface SkillNetworkGraphProps {
  isDarkMode: boolean;
}

interface GraphNode {
  id: string;
  name: string;
  color: string;
  val: number;
}

interface GraphLink {
  source: string;
  target: string;
}

interface GraphData {
  nodes: GraphNode[];
  links: GraphLink[];
}

const SkillNetworkGraph: React.FC<SkillNetworkGraphProps> = ({
  isDarkMode,
}) => {
  const [graphData, setGraphData] = useState<GraphData>({
    nodes: [],
    links: [],
  });
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const containerRef = useRef<HTMLDivElement>(null);
  const fgRef = useRef<ForceGraphMethods>();

  useEffect(() => {
    const nodes: GraphNode[] = technologies.map((tech) => ({
      id: tech.name,
      name: tech.name,
      color: tech.color,
      val: Math.max(tech.proficiency / 10, 1),
    }));

    setGraphData({ nodes, links: skillConnections });

    const updateDimensions = () => {
      if (containerRef.current) {
        setDimensions({
          width: containerRef.current.clientWidth,
          height: 500,
        });
      }
    };

    updateDimensions();
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  useEffect(() => {
    if (!fgRef.current) return;

    const sim = fgRef.current.d3Force;

    sim("link")?.distance(120).strength(1);
    sim("charge")?.strength(-150);

    // Add a collision force so nodes don't overlap
    import("d3-force").then(({ forceCollide }) => {
      fgRef.current?.d3Force(
        "collide",
        forceCollide((d: any) => d.val * 6 + 10)
      );
    });
  }, [graphData]);

  return (
    <div ref={containerRef} className="w-full h-[500px] overflow-hidden">
      {dimensions.width > 0 && (
        <ForceGraph2D
          ref={(el) => {
            if (el) fgRef.current = el;
          }}
          graphData={graphData}
          width={dimensions.width}
          height={dimensions.height}
          enableNodeDrag={true}
          backgroundColor={isDarkMode ? "#1f2937" : "#f9fafb"}
          nodeLabel="name"
          nodeColor={(node) => (node as GraphNode).color}
          nodeVal={(node) => (node as GraphNode).val}
          linkWidth={1.5}
          linkColor={() =>
            isDarkMode ? "rgba(255,255,255,0.3)" : "rgba(0,0,0,0.3)"
          }
          linkDirectionalArrowLength={4}
          linkDirectionalArrowRelPos={1}
          nodeCanvasObject={(node, ctx, globalScale) => {
            const n = node as GraphNode;
            const radius = (n.val || 1) * 5;

            // Draw node
            ctx.beginPath();
            ctx.arc(n.x!, n.y!, radius, 0, 2 * Math.PI);
            ctx.fillStyle = n.color;
            ctx.fill();

            // Draw text
            const fontSize = Math.min(10, radius * 1.6) / globalScale;
            ctx.font = `bold ${fontSize}px Inter`;
            ctx.textAlign = "center";
            ctx.textBaseline = "middle";
            ctx.fillStyle = isDarkMode ? "#fff" : "#000";
            ctx.fillText(n.name, n.x!, n.y!);
          }}
        />
      )}
    </div>
  );
};

export default SkillNetworkGraph;
