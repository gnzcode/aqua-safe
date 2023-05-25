import ActivityCard from "./activity-card";

export default function Activities() {
  return (
    <section className="activities section" id="activities">
      <h2 className="section__title">Servicios</h2>
      <span className="section__subtitle">¿Qué hacemos?</span>

      <div className="activities__container container grid">
        <ActivityCard
          title="Evaluación de ecosistemas acuáticos"
          description="Realizamos estudios detallados para evaluar el estado de los
                ecosistemas acuáticos y comprender los factores que los están
                afectando negativamente."
        >
          <i className="uil uil-search"></i>
        </ActivityCard>
        <ActivityCard
          title="Restauración de hábitats acuáticos"
          description="Diseñamos y ejecutamos proyectos de restauración que incluyen la
                rehabilitación de zonas costeras, la reforestación de manglares,
                la creación de hábitats artificiales y la reintroducción de
                especies nativas."
        >
          <i className="uil uil-wrench"></i>
        </ActivityCard>
        <ActivityCard
          title="Monitoreo y gestión de recursos acuáticos"
          description="Implementamos sistemas de monitoreo continuo para evaluar el
                impacto de nuestras intervenciones y desarrollamos planes de
                gestión para garantizar la sostenibilidad a largo plazo de los
                ecosistemas acuáticos restaurados."
        >
          <i className="uil uil-webcam"></i>
        </ActivityCard>
        <ActivityCard
          title="Educación y sensibilización de las personas"
          description="Trabajamos en estrecha colaboración con comunidades locales,
                gobiernos y organizaciones ambientales para fomentar la
                conciencia y promover la importancia de la conservación de los
                ecosistemas acuáticos."
        >
          <i className="uil uil-graduation-cap"></i>
        </ActivityCard>
      </div>
    </section>
  );
}
