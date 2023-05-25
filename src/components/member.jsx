export default function Member({
  name,
  job,
  avatar,
  size = 1,
  instagram,
  github,
}) {
  return (
    <article
      className="member"
      style={{ "--size": size, "--gap": `${size - 1}em` }}
    >
      <div className="member__icon">
        <img
          className="member__avatar"
          src={`assets/${avatar || "avatar-default"}.webp`}
          alt="Member avatar"
          loading="lazy"
        />
      </div>
      <div className="member__name">{name}</div>
      <div className="member__job">{job}</div>
      <div className="member__socials">
        {instagram ? (
          <a className="member__social" href={instagram} target="_blank">
            <i className="uil uil-instagram"></i>
          </a>
        ) : null}
        {github ? (
          <a className="member__social" href={github} target="_blank">
            <i className="uil uil-github-alt"></i>
          </a>
        ) : null}
      </div>
    </article>
  );
}
