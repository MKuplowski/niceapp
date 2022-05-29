import React from 'react'
import styles from '../styles/WrapperUser.module.sass'
function WrapperUser() {
  return (
      <div className={styles.WrapperMain}>
                <div className={styles.WrapperUserAll}>

                    <div className={styles.WrapperUser}>

                        <div className={styles.UserPhoto}></div>
                    
                        <div className={styles.WrapperUserData}>
                    
                    

                            <div className={styles.UserSpeciality}>Frontend Developer</div>
                            <div className={styles.UserName}>Jan Kowalski</div>
                            <div className={styles.UserLocation}>Kraków, KR, Poland</div>

                        </div>
        



                     </div>
                    <div className={styles.UserDescription}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc massa massa, varius in turpis eu, venenatis iaculis tellus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Donec ut sollicitudin sapien. Nullam sed consequat dolor, sed ultricies neque. Suspendisse potenti. Morbi et lacinia lorem.</div>
            
                </div>
                <div className={styles.AddArea}>+</div>
        </div>
  )
}

export default WrapperUser