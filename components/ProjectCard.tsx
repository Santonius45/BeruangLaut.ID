import Link from "next/link";

type Project = {
  number: string;
  category: string;
  title: string;
  summary: string;
  tags: readonly string[];
  outcome: string;
  slug: string;
};

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="project-card">
      <div className="project-top">
        <span>{project.number}</span>
        <span>{project.category}</span>
      </div>
      <div className="project-visual">
        <div className="visual-grid"></div>
        <div className="visual-orb"></div>
        <div className="visual-code">{project.category.slice(0, 2)}</div>
      </div>
      <div className="project-body">
        <h3>{project.title}</h3>
        <p>{project.summary}</p>
        <div className="tags">{project.tags.map(tag => <span key={tag}>{tag}</span>)}</div>
        <div className="project-foot">
          <span>{project.outcome}</span>
          <Link href={`/projects/${project.slug}`}>Lihat Detail ↗</Link>
        </div>
      </div>
    </article>
  );
}
