"use client";

import { useState } from "react";

export default function Strategies() {
  const [show, setShow] = useState(1);
  return (
    <section className="strategies section" id="strategies">
      <h2 className="section__title">Estrategias</h2>
      <span className="section__subtitle">¿Cómo lo hacemos?</span>

      <div className="strategies__container container grid">
        <div className="strategies__header">
          <button
            className={`strategies__header-option ${show == 1 ? "show" : ""}`}
            onClick={() => setShow(1)}
          >
            Generales
          </button>
          <button
            className={`strategies__header-option ${show == 2 ? "show" : ""}`}
            onClick={() => setShow(2)}
          >
            Empresariales
          </button>
          <button
            className={`strategies__header-option ${show == 3 ? "show" : ""}`}
            onClick={() => setShow(3)}
          >
            Sociales
          </button>
        </div>
        <div className={`strategies__grid grid ${show == 1 ? "show" : ""}`}>
          <div className="strategies__strategy">
            <span>Establecimiento de áreas marinas protegidas</span>Creación de
            zonas designadas en el medio marino, donde se prohíben actividades
            dañinas como la pesca y la explotación de recursos.
          </div>
          <div className="strategies__strategy">
            <span>Reducción de la contaminación</span>Implementación de medidas
            en contaminadas a reducir la presencia de plásticos, productos
            químicos y nutrientes en exceso.
          </div>
          <div className="strategies__strategy">
            <span>Gestión sostenible de la pesca</span>Adopción de regulaciones
            y prácticas pesqueras responsables.
          </div>
          <div className="strategies__strategy">
            <span>Conservación de los hábitats</span>4. Conservación de los
            hábitats costeros preservación y restauración de ecosistemas
            costeros.
          </div>
          <div className="strategies__strategy">
            <span>Educación y concienciación pública</span>Fomentar y divulgar
            la educación acerca de la importancia de los ecosistemas marinos.
          </div>
          <div className="strategies__strategy">
            <span>Control de especies invasoras</span>Implementación de medidas
            para prevenir y controlar la introducción de especies invasoras.
          </div>
          <div className="strategies__strategy">
            <span>Restauración de hábitats dañadas</span>Programas para la
            restauración de ecosistemas degradados.
          </div>
          <div className="strategies__strategy">
            <span>Promoción de la pesca sostenible</span>Fomento de la pesca,
            responsable y sostenible.
          </div>
          <div className="strategies__strategy">
            <span>Monitoreo y seguimiento</span>Monitoreo constante del estado
            de los hábitats naturales.
          </div>
          <div className="strategies__strategy">
            <span>Cooperación internacional</span>Promoción de la colaboración
            entre países para abordar los desafíos globales.
          </div>
        </div>
        <div className={`strategies__grid grid ${show == 2 ? "show" : ""}`}>
          <div className="strategies__strategy">
            <span>Delimitación a las exportaciones</span>Delimitación a las
            exportaciones en costas y mares de manera que estos produzcan menor
            contaminación.{" "}
          </div>
          <div className="strategies__strategy">
            <span>Materias primas biodegradables</span>Utilizar materias primas
            que sean biodegradables y sean amigables con el medio ambiente.
          </div>
          <div className="strategies__strategy">
            <span>Menos contaminantes</span>Utilización de maquinaria que
            produzca menos contaminantes dirigidos a mares.
          </div>
          <div className="strategies__strategy">
            <span>Etiquetas que promuevan el cuidado de los ecosistemas</span>
            Crear productos los cuales sean envasados con etiquetas que
            promuevan y motiven el cuidado y sustento de los ecosistemas
            acuáticos, esto a su vez sean biodegradables.
          </div>
          <div className="strategies__strategy">
            <span>Crear compañías y concientizar a las escuelas</span>Crear
            compañías y concientizar a las escuelas sobre la importancia que
            tienen los ecosistemas y en qué nos beneficia.
          </div>
          <div className="strategies__strategy">
            <span>Hacer limpieza a mares</span>Hacer limpieza a mares y costas
            de manera que se mantengan saludables y libres de contaminantes que
            podrían matar ecosistemas.
          </div>
          <div className="strategies__strategy">
            <span>Crear productos innovadores</span>Crear productos innovadores
            con figuras y envasados de seres acuáticos que sean producidos para
            con materiales naturales.
          </div>
          <div className="strategies__strategy">
            <span>Reducir la producción plastica</span>Reducir la producción y
            utilización de plásticos, unicel y papel.
          </div>
          <div className="strategies__strategy">
            <span>Evitar y sancionar el tráfico de animales</span>9. Evitar y
            sancionar el tráfico de animales, así como su restricción en su
            hábitat natural.
          </div>
          <div className="strategies__strategy">
            <span>Evitar exceso de sobreproducción</span>Evitar el exceso de
            sobreproducción, pesca, ganadería y caza de animales.
          </div>
        </div>
        <div className={`strategies__grid grid ${show == 3 ? "show" : ""}`}>
          <div className="strategies__strategy">
            <span>Apoyar las organizaciones</span>Apoyar las organizaciones que
            trabajan para proteger al mar. Es considerar la posibilidad de
            apoyar financiero o voluntariamente.
          </div>
          <div className="strategies__strategy">
            <span>
              No comprar productos que se aprovechen de la vida marina
            </span>
            Evitar comprar artículos como joyerías de coral y productos
            derivados del pez.
          </div>
          <div className="strategies__strategy">
            <span>Utilizar menos productos de plástico</span>Para limitar su
            impacto podemos reutilizar las botellas de agua, utilizar bolsas de
            tela es tratar de reciclar lo máximo posible.
          </div>
          <div className="strategies__strategy">
            <span>Obtener información sobre los océanos y la vida marina</span>
            Cuanto más informado estés acerca de los problemas más querrás
            ayudar e inspirar a otros a hacer lo mismo.
          </div>
          <div className="strategies__strategy">
            <span>Influir un cambio en nuestra comunidad</span>Realizar
            investigaciones acerca de la política oceánica y así ponerse en
            contacto con los representantes locales para apoyar los proyectos de
            conservación marina.
          </div>
          <div className="strategies__strategy">
            <span>Controlar la contaminación química e industrial</span>Las
            industrias deben cumplir con las normativas de almacenamiento y
            manejo de contaminantes.
          </div>
          <div className="strategies__strategy">
            <span>
              Mejorar el funcionamiento para la prevención de la contaminación
              marina
            </span>
            Combatir la contaminación requiere de un mayor presupuesto, por
            ello, apoya a la causa.
          </div>
          <div className="strategies__strategy">
            <span>Concientizar en cuanto a comida marina</span>Ayuda a reducir
            la demanda de especies sobreexplotadas.
          </div>
          <div className="strategies__strategy">
            <span>Cuida la playa</span>Cada que disfrutes de la playa, limpia
            tus residuos.
          </div>
          <div className="strategies__strategy">
            <span>Viaja responsablemente por el océano</span>Practica
            actividades acuáticas de manera responsable, nunca manipules la vida
            salvaje o corales.
          </div>
        </div>
      </div>
    </section>
  );
}
