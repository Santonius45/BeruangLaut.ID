import Link from "next/link";
import { notFound } from "next/navigation";
import { projects } from "../../data";

export function generateStaticParams() {
  return projects.map(project => ({ slug: project.slug }));
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = projects.find(p => p.slug === slug);
  if (!project) notFound();

  return (
    <main className="project-detail">
      <div className="detail-hero">
        <div className="detail-meta">{project.number} / {project.category}</div>
        <h1>{project.title}</h1>
        <p className="detail-summary">{project.summary}</p>
      </div>
      <div className="detail-grid">
        <div className="detail-block">
          <h2>TEKNOLOGI</h2>
          <div className="tags">{project.tags.map(t => <span key={t}>{t}</span>)}</div>
        </div>
        <div className="detail-block">
          <h2>HASIL</h2>
          <p>{project.outcome}</p>
        </div>
        <div className="detail-block">
          <h2>LINGKUP REKAYASA</h2>
          <p>Halaman studi proyek ini berdasarkan deskripsi proyek yang terdokumentasi. Arsitektur terperinci, source code, dan informasi khusus klien dapat ditambahkan apabila telah disetujui untuk dipublikasikan.</p>
        </div>
        <div className="detail-block">
          <h2>STATUS</h2>
          <p>{project.outcome}</p>
        </div>
      </div>
      <Link href="/#work" className="back">← Kembali ke proyek</Link>
    </main>
  );
}
