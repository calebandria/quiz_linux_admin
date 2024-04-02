import './answers.styles.scss'
import { useContext, useState } from "react";
import CreateAnswer from '../../components/create-answer/create-answer.component';

import { AnswersContext } from '../../contexts/answers.context';
import Icon from '@mui/material/Icon';
import AddIcon from '@mui/icons-material/Add';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import DeleteAnswer from '../../components/delete-answer/delete-answer.component';
import EditAnswer from '../../components/edit-answer/edit-answer.component';

const Answers = () => {
    const [activeCrea, setActiveCrea] = useState(false);
    const { answers, setAnswers } = useContext(AnswersContext);
    const [id, setId] = useState(0);
    const [activeDel, setActiveDel] = useState(false);
    const [activeEdit, setActiveEdit] = useState(false);
    const [label, setLabel] = useState("");
    const [idQuestion, setIdQuestion] = useState(0);
    const [veracity, setVeracity] = useState(false)
    

    const mesDel = "Are you sure to delete this answer ?"

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

    const handleClickEdit = () => {
        console.log("clickedfqsdf")
        if (activeEdit)
            setActiveEdit(false)
        else setActiveEdit(true)
    }


    return (
        <div className="container">
            <div className="questions">
                <h1 className="title">ANSWERS</h1>
                <div className="list-content">
                    {
                        answers.map((answer, id) => {
                            return (
                                <div key={id} className="list-paragraph">
                                    <ul>
                                        <li>{answer.id_answer}</li>
                                        <li className='content'>{answer.answer}</li>
                                        <li>{answer.id_question}</li>
                                        <li>
                                            <Icon onClick={() => {
                                                setId(answer.id_answer)
                                                handleClickEdit()
                                                setLabel(answer.answer)
                                                setIdQuestion(answer.id_question)
                                                setVeracity(answer.veracity)
                                            }}
                                                className='edit'
                                                sx={{ color: '#1e1e1e' }} >
                                                <EditOutlinedIcon />
                                            </Icon>

                                            <Icon onClick={() => {
                                                setId(answer.id_answer)
                                                handleClickDel()
                                            }}
                                                className='delete'
                                                sx={{ color: '#1e1e1e' }}>
                                                <DeleteOutlinedIcon />
                                            </Icon>
                                        </li>
                                    </ul>
                                </div>
                            )
                        })
                    }
                </div>
                <Icon className='plus' sx={{ color: '#FFA629' }} onClick={() => handleClickCrea()} ><AddIcon /></Icon>
            </div>
            {activeCrea && <CreateAnswer activeCrea={activeCrea} handleClickCrea={handleClickCrea} setAnswers={setAnswers} />}
            {activeDel && <DeleteAnswer messageDelete={mesDel} id={id} handleClickDele={handleClickDel} setAnswers={setAnswers} />}
            {activeEdit && <EditAnswer handleClickEdit={handleClickEdit} label={label} id={id} idQuestion={idQuestion} setAnswers={setAnswers} veracity={veracity} />}
            <div className='overlay-visible' style={{ display: (activeCrea | activeDel | activeEdit) ? "block" : "none" }}></div>

        </div>




    )
}

export default Answers;