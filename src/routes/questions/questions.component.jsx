import './questions.styles.scss'
import { useContext, useState } from "react";
import CreateQuestion from "../../components/create-question/create-question.component";
import { QuestionsContext } from "../../contexts/questions.context";
import Icon from '@mui/material/Icon';
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import DeleteQuestion from '../../components/delete-question/delete-question.component';

const Questions = () => {
    const [activeCrea, setActiveCrea] = useState(false);
    const { questions, setQuestions } = useContext(QuestionsContext);
    const [id, setId] = useState(0);
    const [activeDel, setActiveDel] = useState(false);

    const mesDel = "Are you sure to delete this question and all the anwsers with it?"

    const handleClickCrea = () => {
        if (activeCrea)
            setActiveCrea(false)
        else setActiveCrea(true)
    }

    const handleClickDel = () => {
        if (activeDel)
            setActiveDel(false)
        else setActiveDel(true)
    }

    return (
        <div className="container">
            <div className="questions">
                <h1 className="title">QUESTIONS</h1>
                <div className="list-content">
                    {questions.map((question, id) => {
                        return (
                            <div key={id} className="list-paragraph">
                                <ul>
                                    <li>{question.id_question}</li>
                                    <li className='content'>{question.question}</li>
                                    <li>{question.id_theme}</li>
                                    <li>
                                        <Icon onClick={() => {
                                            /* handleClickEdit()
                                            setLabel(theme.theme)
                                            setId(theme.id_theme) */
                                        }}
                                            className='edit'
                                            sx={{ color: '#1e1e1e' }} >
                                            <EditIcon />
                                        </Icon>

                                        <Icon onClick={() => {
                                            setId(question.id_question)
                                            handleClickDel()
                                            /* handleClickDel()
                                            setId(theme.id_theme) */
                                        }}
                                            className='delete'
                                            sx={{ color: '#1e1e1e' }}>
                                            <DeleteIcon />
                                        </Icon>
                                    </li>
                                </ul>
                            </div>
                        )
                    })}
                </div>
                <Icon className='plus' sx={{ color: '#FFA629' }} onClick={() => handleClickCrea()} ><AddIcon /></Icon>
            </div>
            {activeCrea && <CreateQuestion activeCrea={activeCrea} handleClickCrea={handleClickCrea} setQuestions={setQuestions} />}
            {activeDel && <DeleteQuestion messageDelete={mesDel} id={id} handleClickDele={handleClickDel} setQuestions={setQuestions}/>}
            <div className='overlay-visible' style={{ display: (activeCrea | activeDel) ? "block" : "none" }}></div>
            
        </div> 




    )
}

export default Questions;