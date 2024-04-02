import './answer-item.styles.scss'
import { AnswersContext } from '../../contexts/answers.context'
import { useContext } from 'react'

const AnswerItem = ({ title, id_question }) => {
    const { answers } = useContext(AnswersContext);


    return (
        <div className="list-items">
            <div className="content">
                <h2 className="title">{title}</h2>
                <div className="content-list">
                    {
                        (answers.filter(element =>
                            element.id_question === id_question
                        ).map((element) => {
                            return (
                                <p key={element.id_answer}>{element.answer}</p>
                            )
                        }))
                    }
                </div>
            </div>
        </div>
    )
}
export default AnswerItem;