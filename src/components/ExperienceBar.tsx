import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengeContext';
import styles from '../styles/components/ExperienceBar.module.css';

export function ExperienceBar() {
    const { currentExperience, experienceToNextLevel } = useContext(ChallengesContext);

    const percentToNextLevel = Math.round((currentExperience * 100) / experienceToNextLevel);
    const percentLevelBar = !percentToNextLevel ? 0 : percentToNextLevel;

    return (
        <header className={styles.experienceBar}>
            <span>{currentExperience} xp</span>
            <div>
                <div style={{ width: `${percentLevelBar}%` }} />
            </div>
            <span>{experienceToNextLevel} xp</span>
        </header>
    )
}