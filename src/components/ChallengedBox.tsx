import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengeContext';
import { CountdownContext } from '../contexts/CountdownContext';
import styles from '../styles/components/ChanllengedBox.module.css';

export function ChallengedBox() {
    const { activeChallenge, resetChallenge, completeChallenge } = useContext(ChallengesContext);
    const { resetCountdown } = useContext(CountdownContext);

    const handleChallengeSucceeded = () => {
        completeChallenge();
        resetCountdown();
    }

    const handleChallengeFailed = () => {
        resetChallenge();
        resetCountdown();
    }

    return(
        <div className={styles.challengeBoxContainer}>
            { activeChallenge ? (
                <div className={styles.challengeActive} >
                    <header>Ganhe {activeChallenge.amount} xp </header>

                    <main>
                        <img src={`icons/${activeChallenge.type}.svg`} />
                        <strong>Novo desafio</strong>
                        <p>{activeChallenge.description}</p>
                    </main>

                    <footer>
                        <button
                            type="button"
                            className={styles.challengeFailedButton}
                            onClick={handleChallengeFailed}
                        >
                            Falhei
                        </button>

                        <button
                            type="button"
                            className={styles.challengeSucceeddButton}
                            onClick={handleChallengeSucceeded}
                        >
                            Completei
                        </button>
                    </footer>
                </div>
            ) : (
            <div className={styles.challengeNotActive}>
                <strong>Finalize um cilco para receber um desafio </strong>
                <p>
                    <img src="icons/level-up.svg" alt="Level Up" />
                    Avance de level completando desafios
                </p>
            </div>
            )}
        </div>
    )
}