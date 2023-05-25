export default function AboutCard({ children, title, description }) {
  return (
    <div className="about__card">
      <strong className="about__card-title">{title}</strong>
      <p className="about__card-description">{description}</p>
    </div>
  );
}
