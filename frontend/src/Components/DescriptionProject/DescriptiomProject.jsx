import style from './Description.module.css'
import styleContainer from '../Container/container.module.css'

function DescriptionProject() {
  return (
    <>
      <section className={style.sectionDescriptionProject}>
        <div className={styleContainer.container + ' ' + style.containerDescription}>
          <h1 className={style.sectionDescriptionTitle}>Event worldwide</h1>
          <p className={style.sectionDescriptionText}>
             Find your next event
          </p>
        </div>
      </section>
    </>
  )
}

export default DescriptionProject
